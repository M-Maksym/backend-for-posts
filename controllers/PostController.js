import PostService from "../services/PostService.js";
class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture);
      res.json(post);
    } catch (e) {
      console.error("Error creating post", e.message);
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.json(posts);
    } catch (e) {
      console.error("Error getting all posts", e.message);
      res.status(500).json(e.message);
    }
  }
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      res.json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async update(req, res) {
    try {
      const post = await PostService.update(req.params.id, req.body);
      if (!post) return res.status(404).json("Post not found");
      res.json(post);
    } catch (e) {
      console.error("Error updating post by id", e.message);
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);
      if (!post) return res.status(404).json("Post not found");
      res.json(post);
    } catch (e) {
      console.error("Error deleting post by id", e.message);
      res.status(500).json(e.message);
    }
  }
}

export default new PostController();
