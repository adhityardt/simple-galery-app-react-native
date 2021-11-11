import {StyleSheet} from 'react-native';

const textBase = {
  color: 'black',
  fontFamily: 'times new roman',
};

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  pressable: {
    width: '90%',
  },
  image: {
    width: '100%',
    height: 300,
  },
  imageChild: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
  },
  textTitle: {
    ...textBase,
    fontSize: 14,
    fontWeight: 'bold',
  },
  textDesc: {
    ...textBase,
    fontSize: 12,
  },
});

export default styles;
