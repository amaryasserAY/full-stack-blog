import express from "express";
import {
  addComments,
  getPostComments,
  removeComments,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/:postId", getPostComments);
router.post("/:postId", addComments);
router.delete("/:id", removeComments);

export default router;
