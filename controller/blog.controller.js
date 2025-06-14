import { promisify } from "util";
import { Blog } from "../models/blog.models.js";

import { createClient } from "redis";

const createBlog = async (req, res) => {
  const lockValue = await get(lockKey);

  if (lockValue) {
    return res.status(429).send("Another request is in progress");
  }

  await set(lockKey, "locked");

  try {
    const val = await Blog.create({ ...req.body }, { runValidators: true });
    res.send(val).status(201);
  } catch (error) {
    res.send(error).status(400);
  } finally {
    await client.del(lockKey);
  }
};

const getBlog = async (req, res) => {
  const client = createClient();
  await client.connect();
  const ip = req.ip;
  const current = Date.now();
  const limit = 5;
  const period = 60 * 1000;
  const key = `req_rate_limit_${ip}`;

  const get = promisify(client.get).bind(client);
  const set = promisify(client.set).bind(client);

  const value = await get(key);
  if (value) {
    const [timestamp, count] = value.split("|");
    const difference = current - parseInt(timestamp, 10);

    if (difference > period) {
      await set(key, `${current}|1`);
    } else if (parseInt(count, 10) + 1 > limit) {
      res.status(429).send("Too many requests");
    } else {
      await set(key, `${timestamp}|${parseInt(count, 10) + 1}`);
    }
  } else {
    await set(key, `${current}|1`);
  }

  try {
    const val = await Blog.find();
    res.send(val).status(200);
  } catch (error) {
    res.send(error).status(400);
  }
};

const getBlogById = async (req, res) => {
  try {
    const val = await Blog.findById(req.params.id);
    res.send(val).status(200);
  } catch (error) {
    res.send(error).status(400);
  }
};

const UpdateBlog = async (req, res) => {
  const lockKey = `update_blog_lock_${req.params.id}`;
  const lockValue = await get(lockKey);

  if (lockValue) {
    return res.status(429).send("Another update is in progress");
  }

  await set(lockKey, "locked");

  try {
    const val = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
    });
    res.send(val).status(200);
  } catch (error) {
    res.send(error).status(400);
  } finally {
    await client.del(lockKey);
  }
};


const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(deletedBlog);
  } catch (error) {
    res
      .status(400)
      .json({ error: error instanceof Error ? error.message : error });
  }
};

export { createBlog, getBlog, getBlogById, deleteBlog, UpdateBlog };
