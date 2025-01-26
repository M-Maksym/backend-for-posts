import Post from "../Post.js";
import fileService from "./fileService.js";

class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }
  async getAll() {
    const posts = await Post.find({});
    return posts;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("Invalid id");
    }
    const post = await Post.findById(id);
    return post;
  }
  async update(id, content) {
    if (!id || !content) {
      throw new Error("Invalid id or content");
    }
    const post = await Post.findByIdAndUpdate(id, content, {
      new: true,
    });
    return post;
  }
  async delete(id) {
    if (!id) {
      throw new Error("Invalid id");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
