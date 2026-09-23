import express from "express"
import authRouter from "./authRoutes.js";
import flatRouter from "./flatRoutes.js";
import enquiryRouter from "./enquiryRoutes.js";
import adminRouter from "./adminRoutes.js";


const rootRouter = express.Router();

rootRouter.use('/auth',authRouter)
rootRouter.use('/flat',flatRouter)
rootRouter.use('/enquiry',enquiryRouter)
rootRouter.use('/admin',adminRouter)



export default rootRouter;