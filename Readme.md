### CMSAPI

## Setup the application

```bash
git clone https://github.com/AmanDhungel/CMS_API.git
```

```bash
npm i
```

## Env Variables

```bash
MongoURI = YOUR_MONGO_URI
JWT_SECRET=YOUR_JWT_SECRET
JWT_REFRESH_SECRET=YOUR_REFRESH_SECRET
```

```bash
npm run dev
```

```bash
server starts at http://localhost:3000
```

### Endpoints

- [User Endpoints](#user-endpoints)
  - [POST /user/register](#post-userregister)
  - [POST /user/login](#post-userlogin)
  - [POST /user/refresh](#post-userrefresh)
  - [GET /user](#get-user)
- [Blog Endpoints](#blog-endpoints)
  - [POST /blog](#post-blog)
  - [GET /blog](#get-blog)
  - [GET /blog/:id](#get-blogid)
  - [Update /blog/:id](#delete-blogid)
  - [DELETE /blog/:id](#delete-blogid)
- [Customer Endpoints](#customer-endpoints)
  - [POST /customer](#post-customer)
  - [GET /customer](#get-customer)
  - [GET /customer/:id](#get-customersid)
  - [Update /customer/:id](#update-customer)
  - [DELETE /customer/:id](#delete-customersid)
- [Product Endpoints](#product-endpoints)
  - [POST /product](#post-product)
  - [GET /product](#get-product)
  - [GET /product/:id](#get-productid)
  - [Update /product/:id](#update-productid)
  - [DELETE /product/:id](#delete-productid)
- [Borrow Endpoints](#borrow-endpoints)
  - [POST /borrow](#post-borrow)
  - [GET /borrow](#get-borrow)
  - [GET /borrow/:id](#get-borrowid)
  - [Update /borrow/:id](#update-borrowid)
  - [DELETE /borrow/:id](#delete-borrowid)

### User

## Data model

- name: String
- email: String
- password: String
- isVerified: Boolean
- VerificationCode: String

### Product

## Data Model

- name: string
- quantity: Number
- price: Number
- image: array of String
- description: String
- inStock: Boolean
- isProductNew: Boolean
- hasCategory: Boolean
- category: {type: [{name: String, price: Number}]}
- sold: Number

### Customer

## Data Model

- name: String
- phone: String
- address: String

### Borrow

## Data Model

- customerId: customerId from Customer
- productId: ProductId from product
- borrow: today's Date

### Blog

## Data Model

- title: String <br>
- description: String
- exercpt: String
- tags: array of String
- Author: String
- image: array of String
