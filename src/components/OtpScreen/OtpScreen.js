import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
  Easing,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Svg, Circle, G, Defs} from 'react-native-svg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import LottieView from 'lottie-react-native';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../navigation/Routes';
import styles from './styles';

const OtpScreen = ({navigation, route}) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [otpError, setOtpError] = useState(false);
  const [otpErrMsg, setOtpErrMsg] = useState(false);
  var otpValue = route.params?.data;

  const animatedValue = useRef(new Animated.Value(1)).current;

  const onFocusTextInput = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const onBlurTextInput = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
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
  };

  useEffect(() => {
    const otpArray = otpValue.toString().split('');
    changeOtpValue(otpArray);
  }, [changeOtpValue, otpValue]);

  const changeOtpValue = useCallback(
    value => {
      const newOTP = [...otp];
      value.map((digit, index) => {
        newOTP[index] = digit;
        console.log(newOTP[index]);
      });
      setOTP(newOTP);
    },
    [otp],
  );

  const handleOTPChange = (index, value) => {
    setOtpError(false);
    setOtpErrMsg('');
    if (isNaN(value)) {
      return;
    }
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (value !== '' && index < 3) {
      refs[index + 1].current.focus();
    } else if (value === '' && index > 0) {
      refs[index - 1].current.focus();
    }
  };

  const validateOtp = () => {
    const enteredOTP = otp.join('');
    if (enteredOTP.length === 0) {
      setOtpError(true);
      setOtpErrMsg('OTP Cannot Be Empty.');
    } else if (enteredOTP.length < 4) {
      setOtpError(true);
      setOtpErrMsg('Please Fill All Fields!.');
    } else {
      verifyOtp();
    }
  };
  const verifyOtp = async () => {
    /* try {
      await vendorVerifyOtp(
        {
          otp: otpValue,
          EmailORMobile: emailValue,
          type: 'vendor',
        },
        userValue,
      ).then(response => {
        if (response.status) {
          console.log(response);
          onClose();
          onModalClose(response.token);
        } else {
          Alert.alert('Technical Error', response.message);
        }
      });
    } catch (error) {
      console.log('Error verify otp:', error);
    } */
    navigation.push(Routes.Change);
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
              <View style={{flex: 0.2}}>
                <Text style={styles.tvBlue}>
                  Enter <Text style={styles.tvYellow}>Verification Code</Text>
                </Text>
                <Text style={styles.tvSubtitle}>
                  Enter 4 digit Verification code sent to your registered Mobile
                  Number ******1234.
                </Text>
              </View>
            </View>
          </Animated.View>

          <View style={styles.forgotView}>
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={refs[index]}
                  style={[
                    styles.input,
                    digit ? styles.inputFilled : styles.inputEmpty,
                  ]}
                  value={digit}
                  onChangeText={text => handleOTPChange(index, text)}
                  keyboardType="numeric"
                  maxLength={1}
                  onFocus={onFocusTextInput}
                  onBlur={onBlurTextInput}
                />
              ))}
            </View>
            {otpError && (
              <Text Text style={[styles.errorView, styles.errorStyle]}>
                {otpErrMsg}
              </Text>
            )}
            <View style={styles.flexRow}>
              <Text style={styles.tvSubtitle}>Didn't receive the OTP?</Text>

              <TouchableOpacity style={styles.btnResend}>
                <Text style={styles.tvResend}>Resend</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => validateOtp()}
              style={styles.btnSubmit}>
              <Text style={styles.tvSubmit}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;
