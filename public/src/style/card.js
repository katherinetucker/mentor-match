import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  profileHeader: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  profileHeaderImage: {
    transform:([{ scale:.8}])
  },
  profile: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: 'tomato',
  },
  card: {
    flex: 1,
    width: width,
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  actions: {
    flex: .10,
    backgroundColor: '#e3da74',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  hero: {
    paddingTop: 50,
    backgroundColor: '#66b34e',
  },
  thumbnail: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#66b34e',
    borderWidth: 10,
    marginTop: -10,
  },
  text: {
    fontSize: 20,
    //paddingTop: 10,
    //paddingBottom: 5,
    color: 'black'
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lookingFor: {
    backgroundColor: '#e3da74',
    //flex: 1,
  },
  profileData: {
    //backgroundColor: '#66b34e',
  },
  actionImageButton: {
    padding: 10,
  },
  actionButton: {
    padding: 10,
    marginTop: 5,
  }
})
