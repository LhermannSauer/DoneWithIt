import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const postListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.id);
  data.append("description", listing.description);
  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );
  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(endpoint, data, {
    onUploadProgress: (progressEvent) => {
      let percentCompleted = progressEvent.loaded / progressEvent.total;
      onUploadProgress(percentCompleted);
    },
  });
};
export default {
  getListings,
  postListing,
};
