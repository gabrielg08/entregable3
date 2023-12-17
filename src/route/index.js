import express from 'express'
import { router as userRouter } from '../module/user/user.route.js'

export const router = express.Router()

router.use('/users', userRouter)