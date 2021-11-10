import React, {useState, useEffect} from 'react';
import {Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import PropsTypes from 'prop-types';
import {connect} from 'react-redux';
import action from '../../actions/favAction';

const LikeButton = props => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    const isExistInFav = props.favState.favPictures.find(
      el => el.id === props.pictureDetail.id,
    );
    if (isExistInFav) {
      setLiked(true);
    }
  }, []);
  const onPress = () => {
    setLiked(prevState => {
      if (prevState) {
        props.removeFav(props.pictureDetail.id);
      } else {
        props.addFav(props.pictureDetail);
      }
      return !prevState;
    });
  };
  return (
    <Pressable onPress={onPress}>
      <Icon
        name="heart"
        type={liked ? 'antdesign' : 'simple-line-icon'}
        color="#f50"
        borderRadius={1}
      />
    </Pressable>
  );
};

const mapStateToProps = state => ({
  favState: state.fav,
});

const mapDispatchToProps = dispatch => {
  return {
    addFav: newFavPicture => dispatch(action.addFavAction(newFavPicture)),
    removeFav: id => dispatch(action.removeFavAction(id)),
  };
};

LikeButton.propTypes = {
  pictureDetail: PropsTypes.shape({
    id: PropsTypes.number,
    title: PropsTypes.string,
    artist: PropsTypes.string,
    inscriptions: PropsTypes.string,
    imageId: PropsTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
