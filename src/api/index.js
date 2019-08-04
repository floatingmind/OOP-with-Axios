import ApiCore from "axios-core-api";
import axiosConfig from "./axiosConfig";

class BaseApi {
  constructor(apiCore, basePath) {
    this._apiCore = apiCore;
    this._basePath = basePath;
  }

  getAll = () => {
    return this._apiCore.get(this._basePath);
  };

  getOne = id => {
    return this._apiCore.get(`${this._basePath}/${id}`);
  };

  create = newEntity => {
    return this._apiCore.post(`${this._basePath}`, newEntity);
  };

  update = (id, newEntity) => {
    return this._apiCore.patch(`${this._basePath}/${id}`, newEntity);
  };

  delete = id => {
    return this._apiCore.delete(`${this._basePath}/${id}`);
  };

  refreshApiInstance = newAccessToken => {
    const newConfig = axiosConfig;

    newConfig.headers.Authorization = `Bearer ${newAccessToken}`;
    
    this._apiCore.refreshApiInstance(newConfig);
  };
}

const apiCore = new ApiCore(axiosConfig);
const basePath = "https://jsonplaceholder.typicode.com/posts";

const baseApi = new BaseApi(apiCore, basePath);

export default baseApi;
