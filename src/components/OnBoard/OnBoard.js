import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Svg, Circle, G, Defs, Ellipse} from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
const {width} = Dimensions.get('window');

const OnBoard = ({navigation}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onPageChange = event => {
    const offset = event.nativeEvent.contentOffset.x;
    const page = Math.round(offset / width);
    setCurrentPage(page);
  };
  let scrollViewRef = useRef();

  const navigateToLogin = async () => {
    try {
      await AsyncStorage.setItem('onboardStatus', 'true');
      navigation.replace('Login');
    } catch (error) {
      console('Error retrieving');
    }
  };
  return (
    <View style={styles.flex}>
      <View style={styles.flex}>
        <View style={styles.svgcontainer}>
          <Svg
            width={430}
            height={447}
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
            width="400"
            height="67"
            viewBox="0 0 400 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Ellipse
              cx="76.4638"
              cy="197.5"
              rx="323.536"
              ry="197.5"
              fill="#FEB200"
            />
          </Svg>
        </View>
        <View style={styles.onboard}>
          <View style={styles.scrollStyle}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={onPageChange}
              ref={ref => (scrollViewRef = ref)}
              scrollEventThrottle={16}>
              {/* Page 1 */}
              <View style={styles.pageStyle}>
                <View style={styles.slideimg}>
                  <Image
                    source={require('../../assets/images/Xonboard1.png')}
                  />
                </View>
                <View style={styles.pageTxtView}>
                  <Text style={styles.headerTxt}>Easy To OnBoard</Text>
                  <Text style={styles.bodyTxt}>
                    onboard in few minutes become a new vendor without the
                    hassle.{/* {'\n'} */}
                  </Text>
                </View>
              </View>

              {/* Page 2 */}
              <View style={styles.pageStyle}>
                <View style={styles.slideimg}>
                  <Image
                    source={require('../../assets/images/Xonboard2.png')}
                  />
                </View>
                <View style={styles.pageTxtView}>
                  <Text style={styles.headerTxt}>Book Your Cabs</Text>
                  <Text style={styles.bodyTxt}>
                    Select your preferred cab service tailored to your specific
                    transportation requirements and preferences.
                  </Text>
                </View>
              </View>

              {/* Page 3 */}
              <View style={styles.pageStyle}>
                <View style={styles.slideimg}>
                  <Image
                    source={require('../../assets/images/Xonboard3.png')}
                  />
                </View>
                <View style={styles.pageTxtView}>
                  <Text style={styles.headerTxt}>Easy to Earn</Text>
                  <Text style={styles.bodyTxt}>
                    Select your preferred cab service tailored to your specific
                    transportation requirements and preferences.
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.indicBtn}>
            {/* Page Indicator */}
            <View style={styles.indicatorView}>
              {[0, 1, 2].map(index => (
                <View
                  key={index}
                  onPress={() => {
                    scrollViewRef.current.scrollTo({
                      x: width * index,
                      animated: true,
                    });
                    setCurrentPage(index);
                  }}
                  style={[
                    styles.indicator,
                    {
                      width: currentPage === index ? 32 : 8,
                      backgroundColor:
                        currentPage === index ? '#003177' : '#003177',
                    },
                  ]}
                />
              ))}
            </View>

            {/* Next and Skip Buttons */}
            <View style={styles.footerView}>
              <TouchableOpacity
                style={styles.skipBtn}
                onPress={() => navigateToLogin()}>
                <Text style={styles.skipTxt}>Getting Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnBoard;
