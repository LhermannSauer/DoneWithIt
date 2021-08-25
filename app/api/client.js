import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.apiUrl,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

// get original get function in order to modify it
const get = apiClient.get;

// modify get function in order to add caching data
apiClient.get = async (url, params, axiosConfig) => {
  // original call
  const response = await get(url, params, axiosConfig);

  // cache data if response is ok
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  // if request fail, get cached data and returned if not null
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
