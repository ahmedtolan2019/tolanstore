import Axios from "axios";
import { RestUrls } from "../URLs";

export class RestDataSource {
  GetData = (dataType, params) =>
    this.SendRequest("get", RestUrls[dataType], params);

  // GetOne = (id, dataType) => {
  //   this.SendRequest("get", `${RestUrls[dataType]}/${id}`);
  // };

  StoreData = (dataType, data) => {
    return this.SendRequest("post", RestUrls[dataType], {}, data);
  };
  // Update = (data, dataType) => {
  //   this.SendRequest("put", `${RestUrls[dataType]}/${data.id}`, data);
  // };

  // Delete = (data, dataType) => {
  //   this.SendRequest("delete", `${RestUrls[dataType]}/${data.id}`, data);
  // };

  SendRequest = (method, url, params, data) =>
    Axios.request({ method, url, params, data });
}
