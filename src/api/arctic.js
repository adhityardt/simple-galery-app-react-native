import axios from 'axios';
import uuid from 'react-native-uuid';

const getArtworkList = ({page, searchString}) => {
  return new Promise((resolve, reject) => {
    const limit = 15;
    let url = 'https://api.artic.edu/api/v1/artworks';
    const params = {
      page,
      limit,
      fields: 'id,image_id',
    };
    if (searchString) {
      url += '/search';
      params.q = searchString;
    }
    axios
      .get(url, {params})
      .then(result => {
        return resolve({
          totalPage: result.data.pagination.total_pages,
          pictures: result.data.data.map(el => ({
            id: el.id,
            imageId: el.image_id,
            uri: `https://www.artic.edu/iiif/2/${el.image_id}/full/200,/0/default.jpg`,
            uuid: uuid.v4(),
          })),
        });
      })
      .catch(error => {
        return reject(error);
      });
  });
};

const getArtworkDetailById = id => {
  return new Promise((resolve, reject) => {
    const url = `https://api.artic.edu/api/v1/artworks/${id}`;
    axios
      .get(url)
      .then(result => {
        return resolve(result.data.data);
      })
      .catch(error => {
        return reject(error);
      });
  });
};

export {getArtworkList, getArtworkDetailById};
