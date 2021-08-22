import client from "./client";

const endpoint = "/categories";

const getCategories = () => client.get(endpoint);

const postListing = (listing) => client.post(endpoint, listing);

export default {
  getCategories,
  postListing,
};
