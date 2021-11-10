import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
// import axios from 'axios';
import styles from './index.style';
import {getArtworkDetailById} from '../../api/arctic';
import Loader from '../../components/Loader';
import LikeButton from '../../components/LikeButton';

const PhotoDetail = props => {
  const {params} = props.route;
  const [detail, setDetail] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getArtworkDetailById(params.id).then(result => {
      setDetail({
        Artist: result.artist_title,
        Title: result.title,
        Origin: result.place_of_origin,
        Date: result.date_display,
        Medium: result.medium_display,
        Inscriptions: result.inscriptions,
        'Provenance Text': result.provenance_text,
        'Publication History': result.publication_history,
        'Exhibition History': result.exhibition_history,
        Dimensions: result.dimensions,
        'Credit Line': result.credit_line,
        'Reference Number': result.main_reference_number,
        // 'IIIF Manifest': '',
      });
    });
    return () => {
      setDetail(null);
      setIsLoaded(false);
    };
  }, []);
  const isShowComponent = detail !== null && isLoaded;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://www.artic.edu/iiif/2/${params.imageId}/full/1686,/0/default.jpg`,
            }}
            style={styles.image}
            onLoadEnd={() => setIsLoaded(true)}
          />
          <Loader visible={detail !== null && !isLoaded} />
          {isShowComponent && (
            <View style={styles.likeSection}>
              <LikeButton
                pictureDetail={{
                  id: params.id,
                  title: detail.Title,
                  artist: detail.Artist,
                  inscriptions: detail.Inscriptions,
                  imageId: params.imageId,
                }}
              />
              <Text style={styles.textCreditLike}>
                Credit : {detail['Credit Line']}
              </Text>
            </View>
          )}
        </View>
        {isShowComponent && (
          <View style={styles.textContainer}>
            {Object.keys(detail).map((key, index) => {
              return (
                <View key={index} style={styles.textLine}>
                  <Text style={[styles.textBase, styles.textTitle]}>{key}</Text>
                  {detail[key] === null || !detail[key] ? (
                    <Text style={styles.textEmpty}>Empty</Text>
                  ) : (
                    <Text style={styles.textBase}>{detail[key]}</Text>
                  )}
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhotoDetail;
