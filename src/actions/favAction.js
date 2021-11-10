import {ADD_FAV, REMOVE_FAV} from './types';

const actions = {
  addFavAction: newFavPicture => {
    return {
      type: ADD_FAV,
      newFavPicture,
    };
  },
  removeFavAction: id => ({
    type: REMOVE_FAV,
    id,
  }),
};
export default actions;
