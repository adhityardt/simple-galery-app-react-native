import React, {useEffect, useReducer} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import styles from './index.style';
import Modal from '../../components/Modal';
import Loader from '../../components/Loader';
import {getArtworkList} from '../../api/arctic';
import {initialState, reducer} from './reducer';

const Gallery = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchArcticPics = params => {
    dispatch({type: 'fetch'});
    return new Promise((resolve, reject) => {
      getArtworkList(params)
        .then(result => {
          return resolve(result);
        })
        .catch(error => {
          dispatch({type: 'fetch_error'});
          return reject(error);
        });
    });
  };
  useEffect(() => {
    fetchArcticPics({page: 1}).then(response => {
      return dispatch({
        type: 'fetch_success',
        pictures: response.pictures,
        totalPage: response.totalPage,
      });
    });
    return () => {
      dispatch({type: 'reset'});
    };
  }, []);

  const onScroll = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 1;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
    if (isCloseToBottom && !state.loading) {
      const nextPage = state.pictures.length / 15 + 1;
      if (nextPage <= state.totalPage) {
        fetchArcticPics({
          page: nextPage,
          searchString: state.searchString,
        }).then(response => {
          return dispatch({
            type: 'fetch_success',
            pictures: [...state.pictures, ...response.pictures],
          });
        });
      }
    }
  };

  const onSubmitEditing = val => {
    const input = val.nativeEvent.text;
    if (!input || input.match(/^ *$/) !== null) {
      fetchArcticPics({page: 1}).then(response => {
        return dispatch({
          type: 'fetch_success',
          pictures: response.pictures,
          totalPage: response.totalPage,
        });
      });
    } else {
      fetchArcticPics({page: 1, searchString: input}).then(response => {
        if (response.pictures.length === 0) {
          return dispatch({type: 'fetch_not_found'});
        }
        return dispatch({
          type: 'fetch_success',
          searchString: input,
          pictures: response.pictures,
          totalPage: response.totalPage,
        });
      });
    }
  };

  const onPress = ({id, imageId}) => {
    return navigation.navigate('Detail', {id, imageId});
  };

  return (
    <SafeAreaView>
      <Modal
        visible={state.notFound}
        closeModal={() => dispatch({type: 'reset_not_found'})}
      />
      <ScrollView onScroll={({nativeEvent}) => onScroll(nativeEvent)}>
        <View style={styles.searchFrame}>
          <TextInput
            style={styles.searchTextInput}
            placeholder="Search Image"
            onSubmitEditing={onSubmitEditing}
            placeholderTextColor="grey"
          />
        </View>
        {state.pictures.length > 0 && (
          <View style={styles.container}>
            {state.pictures.map(el => (
              <Pressable
                key={el.uuid}
                style={styles.pressable}
                onPress={() => onPress({id: el.id, imageId: el.imageId})}>
                <Image
                  style={{
                    ...styles.gallery,
                  }}
                  source={{uri: el.uri}}
                />
              </Pressable>
            ))}
          </View>
        )}
        <Loader visible={state.loading} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Gallery;
