import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textBase: {
    color: 'black',
    fontFamily: 'times new roman',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textEmpty: {
    color: 'grey',
    fontStyle: 'italic',
  },
  textLine: {
    marginLeft: '5%',
    marginRight: '5%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  textContainer: {
    marginTop: 10,
    height: '100%',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 300,
  },
  likeSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  textCreditLike: {
    color: 'grey',
  },
});

export default styles;
