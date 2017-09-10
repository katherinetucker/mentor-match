import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width; //full width

export default StyleSheet.create({
  hero: {
    paddingTop: 50,
    backgroundColor: '#66b34e',
    flexDirection: 'row',
    flex: 3,
  },
  lookingFor: {
    backgroundColor: '#e3da74',
    flex: 1,
  },
  profileData: {
    backgroundColor: '#66b34e',
    flex: 3,
  },
  actions: {
    backgroundColor: '#e3da74',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 50,
    flexDirection: 'row',
    flex: 1,
  },
  card: {
    flex: 1,
    width: width,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})