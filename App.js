/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

//import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GoogleSignin} from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  /*if (Platform.OS === 'ios') {
    GoogleSignin.configure({
      webClientId:
        '612799077865-qac0q4ldlg3d7rs15e889bus9gbr9df8.apps.googleusercontent.com',
    });
  } else if (Platform.OS === 'android') {*/
  GoogleSignin.configure({
    iosClientId:
      '612799077865-qac0q4ldlg3d7rs15e889bus9gbr9df8.apps.googleusercontent.com',
    webClientId:
      '612799077865-oanhog1gjs7k52tg3vu8rjfkhvdgeitf.apps.googleusercontent.com',
  });
  //}

  const signInWithGoogle = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    //const currentUser = await GoogleSignin.getCurrentUser();
    //console.log('currentUser ' + currentUser);

    //const isSignedIn1 = await GoogleSignin.isSignedIn();
    //console.log('isSignedIn1 ' + isSignedIn1);

    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in
      .then(re => {
        console.log(re);
        const userGoogleId = re.additionalUserInfo.isNewUser;
        console.log(userGoogleId);
        const userGoogleId1 = re.user.email;
        console.log(userGoogleId1);
        const displayNAme = re.user.displayName;
        const photoUrl = re.user.photoURL;
        console.log(displayNAme);
        console.log(photoUrl);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      //this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <SignUpScreen></SignUpScreen>
    </View>
  );
  /* return (
    <View style={styles.mainview}>
      <Text>Hellooooooo</Text>
      <Button
        style={styles.marginBottomView}
        title="Google Sign-In"
        onPress={signInWithGoogle}
      />

      <Button
        style={styles.marginTopView}
        title="Google Sign-Out"
        onPress={signOut}
      />

      <Button
        style={styles.marginTopView}
        title="Facebook Sign-In"
        onPress={signOut}
      />

      <Button
        style={styles.marginTopView}
        title="Facebook Sign-Out"
        onPress={signOut}
      />
    </View>
  );*/
};

export default App;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 60,
  },
  marginTopView: {
    padding: 14,
    backgroundColor: 'red',
    borderRadius: 6,
  },
  marginBottomView: {
    flex: 1,
    padding: 20,
  },
});
/* <Button title="Google Sign-In" onPress={signInWithGoogle} /> */
