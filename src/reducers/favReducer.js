import {ADD_FAV, REMOVE_FAV} from '../actions/types';

const initialState = {
  favPictures: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        favPictures: [action.newFavPicture, ...state.favPictures],
      };
    case REMOVE_FAV:
      return {
        ...state,
        favPictures: state.favPictures.filter(el => el.id !== action.id),
      };
    default:
      return initialState;
  }
};
