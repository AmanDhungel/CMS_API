const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again after 15 minutes'
});


const oneRequestPerFiveSecondlimiter = rateLimit({
    windowMs: 5000,
    max: 1,
    message: 'Too many requests, please wait 5 seconds',
    headers: true
})

export { limiter, oneRequestPerFiveSecondlimiter };