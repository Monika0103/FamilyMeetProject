import {StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';

export const GlobalCss = StyleSheet.create({
  mainbody: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignContent: 'center',
  },
  scrollviewStyle: {
    justifyContent: 'center',
    backgroundColor: '307ecc',
    alignContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: StatusBar.currentHeight,
    marginTop: 80,
  },
  inputtext: {
    borderColor: 'blue',
    borderRadius: 8,
    borderWidth: 1,
    elevation: 10,
    padding: 16,
    marginTop: 30,
    backgroundColor: 'transparent',
    flex: 1,
  },
  text: {
    fontSize: 20,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  touchabletext: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'blue',
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    flex: 0.4,
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  ImageView: {
    alignItems: 'center',
  },
  ImageSmall: {
    width: '50%',
    height: 40,
    resizeMode: 'contain',
    margin: 20,
  },
  ImageMedium: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
    backgroundColor: 'lightblue',
  },
  socialLayoutView: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  seperatorView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    flex: 0.1,
    textAlign: 'center',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'left',
    fontSize: 14,
    marginTop: 5,
  },
  registerBtnStyle: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'transparent',
    marginTop: 5,
    marginBottom: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  registerText: {
    fontSize: 20,
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  textAlignment: {
    textAlign: 'center',
    color: 'grey',
  },
  loginBottomLayout: {
    flexDirection: 'column',
    marginTop: 40,
  },
});
