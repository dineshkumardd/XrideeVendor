import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {Svg, Circle, G, Defs} from 'react-native-svg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import LottieView from 'lottie-react-native';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../navigation/Routes';

const ForgotPassword = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [numberErr, setNumberErr] = useState(false);
  const [numberErrMsg, setNumberErrMsg] = useState('');

  const regex = /\s/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const animatedValue = useRef(new Animated.Value(1)).current;
  const [showSecondView, setShowSecondView] = useState(false);
  const flipAnimatedValue = useRef(new Animated.Value(0)).current;

  /* const onFocusTextInput = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => setShowSecondView(false));
  };

  const onBlurTextInput = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => setShowSecondView(true));
  };

  const firstViewStyle = {
    transform: [
      {
        scaleY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    ],
  }; */

  const onFocusTextInput = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(flipAnimatedValue, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => setShowSecondView(true));
    });
  };

  const onBlurTextInput = () => {
    Animated.timing(flipAnimatedValue, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => setShowSecondView(false));
    });
  };

  const frontAnimatedStyle = {
    transform: [
      {
        scaleY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    ],
  };
  const backAnimatedStyle = {
    transform: [
      {
        scaleY: flipAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    ],
  };

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
      setNumberErr(true);
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

  const handleForgot = () => {
    //setIsNetDialogVisible(false);
    if (number === '') {
      setNumberErr(true);
      setNumberErrMsg('Number Cannot Be Empty');
    } else if (!isValidNumber(number)) {
      setNumberErr(true);
      setNumberErrMsg('Invalid Number Format');
    } else {
      let email = number.toString();
      let data = {email};
      /* if (isOffline) {
        setIsNetDialogVisible(true);
      } else {

      } */
      callForgot(data);
    }
  };
  const callForgot = value => {
    navigation.push(Routes.Otp, {data: 1234});
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
            style={styles.end}
            width={167}
            height={220}
            viewBox="0 0 167 310"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Circle cx={197.5} cy={243.5} r={197.5} fill="#FEB200" />
            <G opacity={0.3} filter="url(#filter0_f_1_5272)">
              <Circle cx={170.5} cy={155.5} r={151.5} fill="#fff" />
            </G>
            <Defs />
          </Svg>
        </View>
        <View style={styles.mainView}>
          {/* {!isFocused ? (
            <Animated.View style={[styles.animView, firstViewStyle]}>
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
                <View style={{flex: 0.4}}>
                  <Text style={styles.tvBlue}>
                    Forgot <Text style={styles.tvYellow}>Password</Text>
                  </Text>
                  <Text style={styles.tvSubtitle}>
                    Enter your registered Mobile Number below to receive Login
                    OTP
                  </Text>
                </View>
              </View>
            </Animated.View>
          ) : (
            <View style={styles.focusedView}>
              <Text style={styles.tvWhite}>
                Forgot <Text style={styles.tvYellow}>Password</Text>
              </Text>
            </View>
          )} */}

          <Animated.View style={[styles.animView, frontAnimatedStyle]}>
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
              <View style={{flex: 0.4}}>
                <Text style={styles.tvBlue}>
                  Forgot <Text style={styles.tvYellow}>Password</Text>
                </Text>
                <Text style={styles.tvSubtitle}>
                  Enter your registered Mobile Number below to receive Login OTP
                </Text>
              </View>
            </View>
          </Animated.View>
          {showSecondView && (
            <Animated.View style={[styles.focusedView, backAnimatedStyle]}>
              <Text style={styles.tvWhite}>
                Forgot <Text style={styles.tvYellow}>Password</Text>
              </Text>
            </Animated.View>
          )}

          <View style={styles.forgotView}>
            <Text style={styles.tvLabel}>Mobile Number</Text>

            <View style={styles.mobileStyle}>
              <TouchableOpacity style={styles.countryBtn}>
                <Text style={styles.country}>+91</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.etMobile}
                maxLength={10}
                placeholder="Enter Your Mobile Number"
                keyboardType="numeric"
                onChangeText={value => setNumberValue(value)}
                onFocus={onFocusTextInput}
                onBlur={onBlurTextInput}
              />
            </View>
            {numberErr && (
              <Text Text style={[styles.errorView, styles.errorStyle]}>
                {numberErrMsg}
              </Text>
            )}
            <TouchableOpacity
              onPress={() => handleForgot()}
              style={styles.btnSubmit}>
              <Text style={styles.tvSubmit}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
/* <KeyboardAvoidingView
              style={{
                flex: 1.5,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
              behavior="padding"
              enabled
              keyboardVerticalOffset={50}>
              <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.scrollContentStyle}
                style={styles.scrollStyle}>
                <View style={styles.mobileStyle}>
                  <TouchableOpacity style={styles.countryBtn}>
                    <Text style={styles.country}>+91</Text>
                  </TouchableOpacity>
                  <TextInput
                    style={styles.etMobile}
                    maxLength={10}
                    placeholder="Enter Your Mobile Number"
                    keyboardType="numeric"
                    onChangeText={value => setNumberValue(value)}
                  />
                </View>
              </ScrollView>
            </KeyboardAvoidingView> */
/*  {!isFocused && (
              <>
                <Text style={styles.tvBlue}>
                  Forgot <Text style={styles.tvYellow}>Password</Text>
                </Text>
                <Text style={styles.tvSubtitle}>
                  Enter your registered Mobile Number below to receive Login OTP
                </Text>
              </>
            )} */
