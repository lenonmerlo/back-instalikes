import express from "express";
import multer from "multer";
import cors from "cors"
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const corsOpstions = {
  origin:"http://localhost:8000",
  optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOpstions));
  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);
  app.put("/upload/:id", atualizarNovoPost)
};

export default routes;
