import client from "./client";

const endpoint = "/categories";

const getCategories = () => client.get(endpoint);

const getCategoryById = (id) => client.get(`${endpoint}/${id}`);

const postListing = (listing) => client.post(endpoint, listing);

export default {
  getCategoryById,
  getCategories,
  postListing,
};
