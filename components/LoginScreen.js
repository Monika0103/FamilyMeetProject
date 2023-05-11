/* eslint-disable react-native/no-inline-styles */
import React, { useState, createRef } from 'react';
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { GlobalCss } from './GlobalCss';
//import Loader from './Components/Loader';

const LoginScreen = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const socialBtnDisable = false;
  //const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const loginClick = (email, password) => {
    console.warn(email + '  ' + password);
    setUserEmail('');
    setUserPassword('');
    //setErrortext('Email is not valid');
  };

  const handleSubmitPress = () => {
    console.warn('sumbit press');
  };

  return (
    <View style={GlobalCss.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={GlobalCss.scrollviewStyle}>
        <View style={GlobalCss.container}>
          <KeyboardAvoidingView enabled>
            <View style={GlobalCss.ImageView}>
              <Image
                source={require('../Image/aboutreact.png')}
                style={GlobalCss.ImageMedium}
              />
            </View>
            <TextInput
              style={GlobalCss.inputtext}
              placeholder="Enter Username/Email"
              onChangeText={text => setUserEmail(text)}
              defaultValue={userEmail}
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              autoFocus={true}
            />

            {errortext != '' ? (
              <Text style={GlobalCss.errorTextStyle}> {errortext} </Text>
            ) : null}

            <TextInput
              style={GlobalCss.inputtext}
              placeholder="Enter Password"
              onChangeText={text => setUserPassword(text)}
              secureTextEntry={true}
              keyboardType="default"
              ref={passwordInputRef}
              onSubmitEditing={Keyboard.dismiss}
              defaultValue={userPassword}
            />

            {errortext != '' ? (
              <Text style={GlobalCss.errorTextStyle}> {errortext} </Text>
            ) : null}

            <TouchableOpacity
              style={GlobalCss.touchabletext}
              onPress={() => loginClick(userEmail, userPassword)}>
              <Text style={GlobalCss.text}>Login</Text>
            </TouchableOpacity>

            <View style={GlobalCss.seperatorView}>
              <View style={GlobalCss.separator} />
              <Text style={GlobalCss.orText}>OR</Text>
              <View style={GlobalCss.separator} />
            </View>

            {socialBtnDisable ? (
              <View style={GlobalCss.socialLayoutView}>
                <View style={GlobalCss.ImageView}>
                  <Image
                    source={require('../Image/success.png')}
                    style={GlobalCss.ImageSmall}
                  />
                </View>

                <View style={GlobalCss.ImageView}>
                  <Image
                    source={require('../Image/success.png')}
                    style={GlobalCss.ImageSmall}
                  />
                </View>

                <View style={GlobalCss.ImageView}>
                  <Image
                    source={require('../Image/success.png')}
                    style={GlobalCss.ImageSmall}
                  />
                </View>
              </View>
            ) : (
              <View>
                <TouchableOpacity
                  style={GlobalCss.touchabletext}
                  onPress={handleSubmitPress}>
                  <Text style={GlobalCss.text}>Google Sign In</Text>
                </TouchableOpacity>
              </View>
            )}
          </KeyboardAvoidingView>
        </View>
      </ScrollView>

      <View style={GlobalCss.loginBottomLayout}>
        <Text style={GlobalCss.textAlignment}>Dont't have an account?</Text>
        <TouchableOpacity
          style={GlobalCss.registerBtnStyle}
          onPress={() => handleSubmitPress}>
          <Text style={GlobalCss.registerText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
