import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Svg, Circle, G, Path} from 'react-native-svg';
import styles from './styles';
import {Routes} from '../../navigation/Routes';

const Login = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [numberErr, setNumberErr] = useState(false);
  const [numberErrMsg, setNumberErrMsg] = useState('');
  const [passw, setPassw] = useState('');
  const [passErr, setPassErr] = useState(false);
  const [passErrMsg, setPassErrMsg] = useState('');

  const regex = /\s/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  const setNumberValue = value => {
    setNumber(value);

    if (isValidNumber(value)) {
      setNumberErr(false);
    } else {
      setNumberErr(true);
    }

    if (value !== '') {
      setNumberErr(false);
    }
    if (value === '') {
      setNumberErr(false);
    }
  };

  const setPassValue = value => {
    setPassw(value);
    if (passw !== '') {
      setPassErr(false);
    }
    const passValid = validatePass(value);
    if (passValid) {
      setPassErr(false);
    } /* else {
      setPassErr(true);
      setPassErrMsg('Minimum 8 Characters Required!.');
    } */
  };

  const handleMobile = () => {
    if (number === '') {
      setNumberErr(true);
      setNumberErrMsg('Number Cannot Be Empty');
    }
  };
  const isValidNumber = value => {
    console.log(value);
    if (value == '') {
      setNumberErr(true);
      setNumberErrMsg('Mobile Number Cannot Be Empty!.');
      return false;
    } else if (regex.test(value)) {
      setNumberErr(true);
      setNumberErrMsg('Mobile Number Cannot Contain Whitespaces!.');
      return false;
    } else if (specialCharRegex.test(value)) {
      console.log(specialCharRegex.test(value));
      setNumberErr(true);
      setNumberErrMsg('Mobile Number Cannot Contain Specail Characters!.');
      return false;
    } else if (value.length < 10) {
      setNumberErr(true);
      setNumberErrMsg('Mobile Number Should Be 10 digits long!.');
      return false;
    } else {
      setNumberErr(false);
      return true;
    }
  };

  const validatePass = value => {
    if (specialCharRegex.test(value)) {
      console.log(specialCharRegex.test(value));
      setPassErr(true);
      setPassErrMsg('Password Cannot Contain Specail Characters!.');
      return false;
    } else if (value.length < 8) {
      setPassErr(true);
      setPassErrMsg('Minimum 8 Characters Required!.');
      return false;
    } else {
      setPassErr(false);
      return true;
    }
  };
  const handleLogin = () => {
    //setIsNetDialogVisible(false);
    if (number === '') {
      setNumberErr(true);
      setNumberErrMsg('Number Cannot Be Empty');
    } else if (passw === '') {
      setPassErr(true);
      setPassErrMsg('Password Cannot Be Empty');
    } else if (!isValidNumber(number)) {
      setNumberErr(true);
      setNumberErrMsg('Invalid Number Format');
    } else if (!validatePass(passw)) {
      setPassErr(true);
      setPassErrMsg('Minimum 8 Characters Required!.');
    } else {
      let email = number.toString();
      let password = passw.toString();
      let data = {email, password};
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
    navigation.replace(Routes.Dashboard);
  };

  return (
    <View style={styles.flex}>
      <View style={styles.flex}>
        <View style={styles.svgcontainer}>
          <Svg
            width="430"
            height="365"
            viewBox="0 0 430 365"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Circle cx="171.5" cy="90.5" r="274.5" fill="#003177" />
          </Svg>

          <Svg
            width="189"
            height="292"
            viewBox="0 0 189 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Circle cx="197.5" cy="197.5" r="197.5" fill="#FEB200" />
          </Svg>

          <View style={styles.loginFields}>
            {/* SVG card */}
            <Svg
              width={430}
              height={621}
              viewBox="-20 -20 430 691"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <G filter="url(#filter0_d_1_5239)">
                <Path
                  d="M15 56c0-16.569 13.431-30 30-30h340c16.569 0 30 13.431 30 30v580.645c0 22.011-22.915 36.528-42.816 27.124l-340-160.65A29.999 29.999 0 0115 475.995V56z"
                  fill="#fff"
                />
              </G>
            </Svg>
            {/* Overlay for login details */}
            <View style={styles.loginBody}>
              <Image
                source={require('../../assets/images/xrideeloghead.png')}
                resizeMode="contain"
                style={styles.loginImg}
              />
              <Text style={styles.tvTitle}>Mobile Number</Text>
              <View style={styles.mobileStyle}>
                <TouchableOpacity style={styles.countryBtn}>
                  <Text style={styles.country}>+91</Text>
                </TouchableOpacity>
                <TextInput
                  maxLength={10}
                  placeholder="XXX-XXX-XXXX"
                  style={styles.etInput}
                  keyboardType="numeric"
                  onChangeText={value => setNumberValue(value)}
                />
              </View>
              {numberErr && (
                <Text Text style={[styles.errorView, styles.errorStyle]}>
                  {numberErrMsg}
                </Text>
              )}
              <Text style={styles.tvTitle}>Password</Text>
              <TextInput
                placeholder="Enter Your Password"
                secureTextEntry={true}
                style={styles.etInputPass}
                onChangeText={value => setPassValue(value)}
                onFocus={() => handleMobile()}
              />
              {passErr && (
                <Text style={[styles.errorView, styles.errorStyle]}>
                  {passErrMsg}
                </Text>
              )}
              <TouchableOpacity onPress={() => navigation.push(Routes.Forgot)}>
                <Text style={styles.tvForgot}>Forgot Password ?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleLogin()}
                style={styles.loginBtn}>
                <Text style={styles.loginTxt}>LOG IN</Text>
              </TouchableOpacity>
              {/* Add your login button here */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
