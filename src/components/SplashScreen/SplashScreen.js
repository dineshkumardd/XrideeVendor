import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {Routes} from '../../navigation/Routes';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Routes.Onboard);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/xrideeSplash.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
