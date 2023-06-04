import axios from "axios";

export const fetchImages = async (wordKey) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${wordKey}&page=1&key=34775826-8245aeb15fb52e6c04f01aeda&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data.hits.map((image) => {
    return {
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    };
  });
};
