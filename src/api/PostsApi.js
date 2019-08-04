export default class PostsApi {
    constructor(apiCore, basePath) {
        this._apiCore = apiCore;
        this._basePath = `${basePath}/posts`;
    }

    getAll() {
      return this._apiCore.get(this._basePath);
    }
  
    getOne(postId) {
      return this._apiCore.get(`${this._basePath}/${postId}`);
    }
  
    create(newPost) {
      return this._apiCore.post(`${this._basePath}`, newPost);
    }
  
    update(postId, newPost) {
      return this._apiCore.patch(`${this._basePath}/${postId}`, newPost);
    }
  
    destroy(postId) {
      return this._apiCore.delete(`${this._basePath}/${postId}`);
    }
}