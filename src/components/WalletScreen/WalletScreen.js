import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SectionList,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCaretDown,
  faDownload,
  faRotate,
} from '@fortawesome/free-solid-svg-icons';
import {LinearGradient} from 'react-native-linear-gradient';
import {G, Mask, Path, Svg} from 'react-native-svg';
import {Routes} from '../../navigation/Routes';
import RNPickerSelect from 'react-native-picker-select';
const WalletScreen = ({navigation}) => {
  const [dateList, setDateList] = useState([
    {id: 1, name: 'Today'},
    {id: 2, name: 'Yesterday'},
  ]);

  const handleSelection = (itemValue, itemIndex) => {
    if (itemIndex !== 0) {
      const selectedItemObject = dateList.find(item => item.id === itemValue);
      //setSelectedId(selectedItemObject.id);
    } else {
      //setSelectedId(0);
    }
  };
  const jsonData = {
    '01-Apr-2024': [
      {
        date: 'Apr 01, 12:10 AM',
        name: 'User XY',
        amount: '2000',
        type: 0,
        img: require('../../assets/images/sectionImg.png'),
      },
      {
        date: 'Apr 01, 04:36 AM',
        name: 'User XX',
        amount: '3000',
        type: 1,
        img: require('../../assets/images/sectionImg.png'),
      },
    ],
    '02-Apr-2024': [
      {
        date: 'Apr 02, 02:05 PM',
        name: 'User XZ',
        amount: '2000',
        type: 1,
        img: require('../../assets/images/sectionImg.png'),
      },
      {
        date: 'Apr 02, 02:05 PM',
        name: 'User XZ',
        amount: '2000',
        type: 0,
        img: require('../../assets/images/sectionImg.png'),
      },
      {
        date: 'Apr 02, 02:05 PM',
        name: 'User XZ',
        amount: '2000',
        type: 0,
        img: require('../../assets/images/sectionImg.png'),
      },
      {
        date: 'Apr 02, 02:05 PM',
        name: 'User XZ',
        amount: '2000',
        type: 1,
        img: require('../../assets/images/sectionImg.png'),
      },
    ],
    '03-Apr-2024': [
      {
        date: 'Apr 03, 02:05 PM',
        name: 'User XZ',
        amount: '2000',
        type: 1,
        img: require('../../assets/images/sectionImg.png'),
      },
      {
        date: 'Apr 03, 02:05 PM',
        name: 'User XZ',
        amount: '2000',
        type: 0,
        img: require('../../assets/images/sectionImg.png'),
      },
      {
        date: 'Apr 03, 02:05 PM',
        name: 'User XZ',
        amount: '2000',
        type: 0,
        img: require('../../assets/images/sectionImg.png'),
      },
      {
        date: 'Apr 03, 02:05 PM',
        name: 'User XZ',
        amount: '2000',
        type: 1,
        img: require('../../assets/images/sectionImg.png'),
      },
    ],
  };

  const DATA = Object.keys(jsonData).map(key => ({
    title: key,
    data: jsonData[key],
  }));

  return (
    <View style={styles.flex}>
      <View style={styles.topView}>
        <View style={styles.logoView}>
          <View style={styles.logoInnerView}>
            <TouchableOpacity
              onPress={() => navigation.push(Routes.Profile)}
              style={styles.userimg}>
              <Image
                style={styles.userimg}
                source={require('../../assets/images/user.png')}
              />
            </TouchableOpacity>
            <Text style={styles.toolbarTxt}>Wallet</Text>
            <View style={styles.topIconsView}>
              <Svg
                width={22}
                height={20}
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M11 20c-5.225 0-9.487-4.493-9.487-10 0-2.415.825-4.783 2.383-6.618l1.008.966C3.575 5.894 2.888 7.923 2.888 10c0 4.734 3.62 8.55 8.112 8.55 1.192 0 2.338-.24 3.392-.772l.55 1.304C13.704 19.71 12.375 20 11 20zM18.059 16.667L17.05 15.7c1.33-1.545 2.063-3.574 2.063-5.7 0-4.734-3.621-8.55-8.113-8.55-1.191 0-2.337.24-3.391.772L7.059.918C8.296.338 9.625 0 11 0c5.225 0 9.488 4.493 9.488 10 0 2.464-.871 4.83-2.43 6.667z"
                  fill="#fff"
                />
                <Path
                  d="M5.867 9.227H4.4V4.59H0V3.044h5.867v6.183zM22 16.957h-5.866v-6.184H17.6v4.638H22v1.546z"
                  fill="#fff"
                />
              </Svg>
              <Svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 14v4a2 2 0 01-2 2H2a2 2 0 01-2-2v-4h2v4h16v-4h2zm-9-3.414l3.293-3.293 1.414 1.414L10 14.414 4.293 8.707l1.414-1.414L9 10.586V0h2v10.586z"
                  fill="#fff"
                />
              </Svg>
            </View>
          </View>
          <View style={styles.walletView}>
            <LinearGradient
              start={{x: 0, y: 0}} // left
              end={{x: 1, y: 0}} // right
              colors={['#074088', '#0085F280']}
              style={styles.walletCard}>
              <View style={styles.svgContainer}>
                <Svg
                  width="155"
                  height="176"
                  viewBox="0 0 155 176"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <G opacity="0.1">
                    <Mask
                      id="mask0_328_2286"
                      style="mask-type:luminance"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="155"
                      height="176">
                      <Path d="M154.549 0H0V175.24H154.549V0Z" fill="white" />
                    </Mask>
                    <G mask="url(#mask0_328_2286)">
                      <Path
                        d="M145.973 87.7498L124.496 117.995L165.228 175.24H208.236L145.973 87.7498ZM83.7181 0H40.7178L102.965 87.7498L124.496 57.4815L83.7181 0Z"
                        fill="white"
                      />
                      <Path
                        d="M208.221 0L154.489 75.728L110.939 137.005L83.7181 175.24H40.7178L97.8556 94.9292L102.965 87.7498L124.481 57.4815L130.667 48.7668L165.213 0H208.221Z"
                        fill="white"
                      />
                      <Path
                        d="M62.2322 145.017L55.7554 135.951L21.462 87.7574L0 117.995L40.7396 175.24H83.74L62.2322 145.017Z"
                        fill="white"
                      />
                    </G>
                  </G>
                </Svg>
              </View>
              <View style={styles.cardFields}>
                <Text style={styles.txtMediumWhite}>Name</Text>
                <Text style={styles.txtSmallWhite}>Wallet Balance</Text>
                <Text style={styles.txtSmallWhite}>₹ 1,600.00</Text>
                <View style={styles.cardBtns}>
                  <TouchableOpacity style={styles.btnWithdraw}>
                    <Text style={styles.btnTxt}>Withdraw</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnAddCash}>
                    <Text style={styles.btnTxt}>Add Cash</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.tranxHist}>
          <Text style={styles.tranxTxt}>Transaction History</Text>
          <View
            style={
              Platform.OS === 'ios' ? styles.pickerviewIn : styles.pickerview
            }>
            <RNPickerSelect
              style={{
                chevronUp: {display: 'none'},
                chevronDown: {display: 'none'},
                modalViewBottom: {backgroundColor: '#FFFFFF'},
              }}
              onValueChange={handleSelection}
              items={dateList.map(item => ({
                label: item.name,
                value: item.id,
                key: item.id,
              }))}
            />
          </View>
        </View>
      </View>

      <View style={styles.whiteView}>
        <View style={styles.viewFour}>
          <View style={styles.viewFourInner}>
            <SectionList
              sections={DATA}
              renderItem={({item}) => (
                <View style={styles.sectionBodyView}>
                  <View style={styles.sectionImg}>
                    <Image source={item.img} />
                    <View style={styles.sectionNameDate}>
                      <Text style={styles.sectionName}>{item.name}</Text>
                      <Text style={styles.sectionDate}>{item.date}</Text>
                    </View>
                  </View>

                  <Text
                    style={
                      item.type === 0
                        ? styles.sectionAmountCr
                        : styles.sectionAmountDb
                    }>
                    {item.type === 0 ? '+ ₹' : '- ₹'}
                    {item.amount}
                  </Text>
                </View>
              )}
              renderSectionHeader={({section: {title}}) => (
                <View style={styles.sectionTitle}>
                  <Text style={styles.sectionTitleTxt}>{title}</Text>
                  <Text style={styles.sectionTitleTxt}>₹ 8,000</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WalletScreen;
