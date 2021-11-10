import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  pressable: {
    marginTop: 10,
    marginBottom: 10,
    width: `${100 / 3}%`,
  },
  gallery: {
    width: '100%',
    height: 128,
  },
  searchFrame: {
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  searchTextInput: {
    color: 'black',
  },
  activityIndicator: {
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  },
});

export default styles;
