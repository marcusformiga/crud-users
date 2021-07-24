import { Router } from "express";
import { UserController } from "../controllers/UserController";



export const userRoutes = Router()
const userController = new UserController()


userRoutes.get("/", userController.listAll)
userRoutes.post("/", userController.create)
userRoutes.get("/:id", userController.listOne)
userRoutes.delete("/:id", userController.remove)
userRoutes.patch(":/id", userController.update)
