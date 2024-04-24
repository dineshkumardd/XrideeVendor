import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Svg, Path, G, Defs} from 'react-native-svg';
import LottieView from 'lottie-react-native';

const ResetSuccess = () => {
  return (
    <View style={styles.flex}>
      <View style={styles.flex}>
        <View style={styles.svgcontainer}>
          <Svg
            width={430}
            height={753}
            viewBox="0 0 430 753"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              opacity={0.749}
              d="M449.04 119.04L388 58h61.04v61.04z"
              fill="#023C6E"
            />
            <Path
              opacity={0.502}
              d="M415.44 0L369 58.06h61.04V0h-14.6z"
              fill="#023C6E"
            />
            <Path
              d="M420.07 51.54L404 34.27h25.96v17.27h-9.89z"
              fill="#FED166"
            />
            <Path
              opacity={0.502}
              d="M-34 178h80.67l-34.82 34.83H-34V178z"
              fill="#023C6E"
            />
            <Path d="M-56 177.83h80.67L-10.15 143H-56v34.83z" fill="#023C6E" />
            <Path
              opacity={0.749}
              d="M474.67 752.04L413.63 691h61.04v61.04z"
              fill="#1B4F7C"
            />
            <Path
              d="M485.67 690.83H405L439.82 656h45.85v34.83z"
              fill="#FEB200"
            />
            <Path
              opacity={0.749}
              d="M-4.09 704.06l61.04-61.04H-4.09v61.04z"
              fill="#FEC133"
            />
            <Path
              opacity={0.502}
              d="M10.51 585l46.44 58.06H-4.09V585h14.6z"
              fill="#FEC133"
            />
            <Path
              opacity={0.902}
              d="M3.89 568l16.06 17.27H-6V568h9.89z"
              fill="#023C6E"
            />
            <Path
              d="M5.88 636.54l16.07-17.27H-4.01v17.27h9.89z"
              fill="#315E86"
              fillOpacity={0.5}
            />
          </Svg>
        </View>
        <View style={styles.mainView}>
          <View style={styles.animView}>
            <View style={styles.anim}>
              <LottieView
                source={require('../../assets/anim/resetanim.json')}
                autoPlay
                loop
                resizeMode="contain"
                style={styles.animImg}
              />
            </View>
          </View>

          <View style={styles.forgotView}>
            <Text style={styles.tvBlue}>
              Password <Text style={styles.tvYellow}>Reset</Text>
            </Text>
            <Text style={styles.tvSubtitle}>
              Your password has been successfully reset.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ResetSuccess;

/*  */
