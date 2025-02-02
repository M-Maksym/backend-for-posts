import { Router } from "express";
import PostController from "./controllers/PostController.js";

const router = Router();

router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts/:id", PostController.update);
router.delete("/posts/:id", PostController.delete);

export default router;
