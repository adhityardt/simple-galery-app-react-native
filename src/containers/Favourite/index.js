import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';
import styles from './index.style';
import action from '../../actions/favAction';

const Favourite = props => {
  const {favState, navigation} = props;
  const onPressDelete = id => {
    props.removeFav(id);
  };
  const onPressImage = ({id, imageId}) => {
    return navigation.navigate('Detail', {id, imageId});
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {favState.favPictures.map((el, index) => {
          return (
            <View style={styles.imageContainer} key={index}>
              <Pressable
                style={styles.pressable}
                onPress={() => onPressImage({id: el.id, imageId: el.imageId})}>
                <Image
                  source={{
                    uri: `https://www.artic.edu/iiif/2/${el.imageId}/full/1686,/0/default.jpg`,
                  }}
                  style={styles.image}
                />
              </Pressable>
              <View style={styles.imageChild}>
                <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>{el.title}</Text>
                  <Text style={styles.textDesc}>
                    Inscriptions : {el.inscriptions || '-'}
                  </Text>
                  <Text style={styles.textDesc}>Artist : {el.artist}</Text>
                </View>
                <Pressable onPress={() => onPressDelete(el.id)}>
                  <Icon name="delete" type="antdesign" color="#f50" />
                </Pressable>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  favState: state.fav,
});

const mapDispatchToProps = dispatch => {
  return {
    removeFav: id => dispatch(action.removeFavAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
