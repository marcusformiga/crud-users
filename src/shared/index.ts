import { Router } from "express";
import { userRoutes } from "../modules/users/routes/users.routes";

export const routes = Router()

routes.use('/users', userRoutes)
