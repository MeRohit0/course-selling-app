const { z } = require("zod");

const userRouterPostSignup = z.object({
    email : z.string().min(3).max(40).email(),
    password : z.string().min(3).max(40),
    firstName : z.string().min(3).max(40),
    lastName : z.string().min(3).max(40)
})

const userRouterPostLogin = z.object({
    email : z.string().min(3).max(40).email(),
    password : z.string().min(3).max(40)
})

const adminRouterPostSignup = z.object({
    email : z.string().min(3).max(40).email(),
    password : z.string().min(3).max(40),
    firstName : z.string().min(3).max(40),
    lastName : z.string().min(3).max(40)
})

const adminRouterPostLogin = z.object({
    email : z.string().min(3).max(40).email(),
    password : z.string().min(3).max(40)
})

const adminRouterPostCourse = z.object({
    title: z.string().min(3).max(30),
    description : z.string().min(3).max(50),
    price : z.number(),
    imageUrl : z.string().min(3).max(50)
})

const adminRouterPutCourse = z.object({
    title: z.string().min(3).max(30),
    description : z.string().min(3).max(50),
    price : z.number(),
    imageUrl : z.string().min(3).max(50),
    creatorId : z.string().min(3).max(50)
})

const courseRouterPostPurchase = z.string().min(2).max(25);

module.exports = { 
    userRouterPostSignup,
    userRouterPostLogin,
    adminRouterPostSignup,
    adminRouterPostLogin,
    adminRouterPostCourse,
    adminRouterPutCourse,
    courseRouterPostPurchase
} ; 