import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Svg, Circle, G, Defs} from 'react-native-svg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import LottieView from 'lottie-react-native';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../navigation/Routes';
import styles from './styles';
const ChangePassword = ({navigation, route}) => {
  const [newpass, setNewPass] = useState('');
  const [newpassErr, setNewPassErr] = useState(false);
  const [newPassErrMsg, setNewPassErrMsg] = useState('');
  const [confpass, setConfNewPass] = useState('');
  const [confpassErr, setConfPassErr] = useState(false);
  const [confPassErrMsg, setConfPassErrMsg] = useState('');
  const regex = /\s/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const setPassValue = value => {
    setNewPass(value);
    if (newpass !== '') {
      setNewPassErr(false);
    }
    const passValid = validatePass(value);
    if (passValid) {
      setNewPassErr(false);
    } /* else {
      setPassErr(true);
      setPassErrMsg('Minimum 8 Characters Required!.');
    } */
  };

  const setConfPassValue = value => {
    setConfNewPass(value);
    if (newpass !== '') {
      setConfPassErr(false);
    }
    const passValid = validateConfPass(value);
    if (passValid) {
      setConfPassErr(false);
    } /* else {
      setPassErr(true);
      setPassErrMsg('Minimum 8 Characters Required!.');
    } */
  };
  const validatePass = value => {
    if (specialCharRegex.test(value)) {
      console.log('inside 1');
      setNewPassErr(true);
      setNewPassErrMsg('Password Cannot Contain Specail Characters!.');
      return false;
    } else if (regex.test(value)) {
      console.log('inside 2');
      setNewPassErr(true);
      setNewPassErrMsg('Password Cannot Contain White Spaces!.');
      return false;
    } else if (value.length < 8) {
      console.log('inside 3');

      setNewPassErr(true);
      setNewPassErrMsg('Minimum 8 Characters Required!.');
      return false;
    } else {
      setNewPassErr(false);
      setNewPassErrMsg('');
      return true;
    }
  };
  const validateConfPass = value => {
    if (specialCharRegex.test(value)) {
      setConfPassErr(true);
      setConfPassErrMsg('Confirm Password Cannot Contain Specail Characters!.');
      return false;
    } else if (regex.test(value)) {
      setConfPassErr(true);
      setConfPassErrMsg('Confirm Password Cannot Contain White Spaces!.');
      return false;
    } else if (value.length < 8) {
      setConfPassErr(true);
      setConfPassErrMsg('Minimum 8 Characters Required!.');
      return false;
    } else {
      setConfPassErr(false);
      setConfPassErrMsg('');
      return true;
    }
  };
  const handlePass = () => {
    if (newpass === '') {
      setNewPassErr(true);
      setNewPassErrMsg('Password Cannot Be Empty');
    }
  };
  const handleReset = () => {
    //setIsNetDialogVisible(false);
    if (newpass === '') {
      setNewPassErr(true);
      setNewPassErrMsg('Password Cannot Be Empty');
    } else if (confpass === '') {
      setConfPassErr(true);
      setConfPassErrMsg('Confirm Password Cannot Be Empty');
    } else if (!validatePass(newpass)) {
      /* setNewPassErr(true);
      setNewPassErrMsg('Invalid Password Format'); */
    } else if (!validateConfPass(confpass)) {
      setConfPassErr(true);
      setConfPassErrMsg('Minimum 8 Characters Required!.');
    } else {
      let pass = newpass.toString();
      let confpassw = confpass.toString();
      let data = {pass, confpassw};
      /* if (isOffline) {
        setIsNetDialogVisible(true);
      } else {

      } */
      login(data);
    }
  };

  const login = async datauser => {
    /* console.log('key in login:', apiKey);
    try {
      const data = await loginUser(datauser, apiKey);
      console.log(data);
      if (data.status) {
        saveId(data.id);
        navigation.replace('MainScreen', {user: data});
      } else {
        if (data.message === 'Vendor Not found with this Email Address') {
          setEmailError(true);
          setEmailErrorMsg('Vendor Not found with this Email Address');
        } else if (data.message === 'Invalid Password') {
          setPassError(true);
          setPassErrorMsg('Invalid Password!. Try Again.');
        } else {
          Alert.alert('Login Error', data.message);
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } */
    navigation.replace(Routes.Reset);
  };
  return (
    <View style={styles.flex}>
      <View style={styles.flex}>
        <View style={styles.svgcontainer}>
          <Svg
            width={410}
            height={407}
            viewBox="0 0 430 507"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Circle cx={218.5} cy={90.5} r={274.5} fill="#003177" />
            <G opacity={0.1} filter="url(#filter0_f_658_700)">
              <Circle cx={87.5} cy={50.5} r={151.5} fill="#fff" />
            </G>
            <G opacity={0.05} filter="url(#filter1_f_658_700)">
              <Circle cx={334.5} cy={351.5} r={151.5} fill="#fff" />
            </G>
            <Defs />
          </Svg>
          <Svg
            width={430}
            height={96}
            viewBox="0 0 430 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Circle cx={133.5} cy={197.5} r={197.5} fill="#FEB200" />
            <G opacity={0.3} filter="url(#filter0_f_63_7294)">
              <Circle cx={333.5} cy={167.5} r={151.5} fill="#fff" />
            </G>
            <Defs />
          </Svg>
        </View>
        <View style={styles.mainView}>
          <View style={styles.animView}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.close}>
              <FontAwesomeIcon icon={faXmark} size={25} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={styles.anim}>
              <LottieView
                source={require('../../assets/anim/forgotAnim.json')}
                autoPlay
                loop
                resizeMode="contain"
                style={styles.animImg}
              />
            </View>
          </View>

          <View style={styles.forgotView}>
            <Text style={styles.tvBlue}>
              Set New <Text style={styles.tvYellow}>Password</Text>
            </Text>
            <Text style={styles.tvSubtitle}>
              Your New Password must be different to previously used passwords.
            </Text>

            <Text style={styles.tvTitle}>New Password</Text>
            <TextInput
              placeholder="Enter Your New Password"
              secureTextEntry={true}
              style={styles.etInputPass}
              onChangeText={value => setPassValue(value)}
            />
            {newpassErr && (
              <Text style={[styles.errorView, styles.errorStyle]}>
                {newPassErrMsg}
              </Text>
            )}

            <Text style={styles.tvTitle}>Confirm Password</Text>
            <TextInput
              placeholder="Enter Your Confirm Password"
              secureTextEntry={true}
              style={styles.etInputPass}
              onChangeText={value => setConfPassValue(value)}
              onFocus={() => handlePass()}
            />
            {confpassErr && (
              <Text style={[styles.errorView, styles.errorStyle]}>
                {confPassErrMsg}
              </Text>
            )}

            <TouchableOpacity
              onPress={() => handleReset()}
              style={styles.btnSubmit}>
              <Text style={styles.tvSubmit}>RESET PASSWORD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;
