import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../navigation/Routes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OnlineCardTabs from '../OnlineCardTabs/OnlineCardTabs';
import {Path, Svg} from 'react-native-svg';
const Tab = createMaterialTopTabNavigator();
import {LineChart} from 'react-native-chart-kit';
import {LinearGradient} from 'react-native-linear-gradient';

const HomeScreen = ({navigation}) => {
  const [subscribeList, setSubscribeList] = useState([
    {reg_no: 'PY 01 AA 1234', id: 1, days: 1},
    {reg_no: 'PY 01 AA 2343', id: 2, days: 2},
    {reg_no: 'PY 01 AA 2344', id: 3, days: 3},
    {reg_no: 'PY 01 AA 2345', id: 4, days: 4},
    {reg_no: 'PY 01 AA 2346', id: 5, days: 5},
    {reg_no: 'PY 01 AA 2347', id: 6, days: 6},
    {reg_no: 'PY 01 AA 2348', id: 7, days: 7},
  ]);
  const data = [
    {x: 'Jan', y: 40},
    {x: 'Feb', y: 39},
    {x: 'Mar', y: 36},
    {x: 'Apr', y: 32},
    {x: 'May', y: 18},
    {x: 'Jun', y: 20},
    {x: 'Jul', y: 28},
    {x: 'Aug', y: 32},
    {x: 'Sep', y: 31},
    {x: 'Oct', y: 32},
    {x: 'Nov', y: 32},
    {x: 'Dec', y: 10},
    // Add more data points...
  ];
  const datas = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];

  return (
    <View style={styles.flex}>
      <View style={styles.logoView}>
        <View style={styles.logoInnerView}>
          <Svg
            width={98}
            height={20}
            viewBox="0 0 98 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M16.635 10l-2.448 3.447 4.642 6.528h4.902L16.635 10zM9.54 0h-4.9l7.094 10 2.454-3.45L9.54 0z"
              fill="#FEB200"
            />
            <Path
              d="M23.729 0l-6.123 8.63-4.963 6.983-3.103 4.358h-4.9l6.512-9.152.582-.819 2.452-3.45.705-.992L18.828.001h4.9z"
              fill="#fff"
            />
            <Path
              d="M7.092 16.526l-.738-1.033L2.446 10 0 13.447l4.643 6.528h4.9l-2.451-3.449z"
              fill="#FEB200"
            />
            <Path
              d="M30.379 3.988v15.983h-3.99V0h7.807c3.308 0 5.983 2.706 5.983 6.011a5.952 5.952 0 01-3.504 5.442L40.635 20H36.39l-3.733-8.008V8.008h1.54a1.982 1.982 0 001.993-1.995 2 2 0 00-1.994-2.023l-3.817-.002zM43.294 19.943V0h3.989v19.943h-3.989zM55.583 0a9.82 9.82 0 017.036 2.906 9.515 9.515 0 012.137 3.19 9.533 9.533 0 01.795 3.875 9.567 9.567 0 01-.798 3.903 9.118 9.118 0 01-2.137 3.162 10 10 0 01-7.036 2.935h-4.014v-.028H49.94V0h5.642zm0 15.982c3.307 0 5.982-2.706 5.982-6.01a5.98 5.98 0 00-5.982-5.984h-1.654v11.999l1.654-.005zM81.516 3.988H68.21V0h13.305v3.988zM68.21 7.692h11.025v3.989H68.211V7.69zm0 8.29h13.22v3.99H68.21v-3.99z"
              fill="#fff"
            />
            <Path
              d="M97.48 3.988H84.175V0H97.48v3.988zM84.175 7.692h11.03v3.989h-11.03V7.69zm0 8.29h13.22v3.99h-13.22v-3.99z"
              fill="#FEB200"
            />
          </Svg>
          <TouchableOpacity
            onPress={() => navigation.push(Routes.Profile)}
            style={styles.userimg}>
            <Image
              style={styles.userimg}
              source={require('../../assets/images/user.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.userName}>
        <Text>Welcome Back, UserName</Text>
      </View>
      <View style={styles.whiteView}>
        <ScrollView>
          <View style={styles.viewOne}>
            <View style={styles.topCardView}>
              <View style={styles.smallCard}>
                <Text style={styles.txtCardTitle}>Today Earnings</Text>
                <Text style={styles.txtCardAmount}>₹ 8,082</Text>
                <View style={styles.divider} />
                <View style={styles.cardRides}>
                  <Svg
                    width={10}
                    height={8}
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M0 2.24v-.32c0-.265.21-.48.469-.48H7.5V.48c0-.427.506-.64.8-.339l1.563 1.6a.488.488 0 010 .679L8.3 4.02c-.293.3-.8.09-.8-.34v-.96H.469A.474.474 0 010 2.24zm9.531 3.04H2.5v-.96c0-.426-.505-.642-.8-.34L.137 5.58a.488.488 0 000 .68L1.7 7.858c.293.3.8.09.8-.34v-.96h7.031A.474.474 0 0010 6.08v-.32c0-.264-.21-.48-.469-.48z"
                      fill="#013277"
                    />
                  </Svg>
                  <Text style={styles.txtCardRides}>4 Rides</Text>
                </View>
              </View>
              <View style={styles.smallCard}>
                <Text style={styles.txtCardTitle}>Wallet Balance</Text>
                <Text style={styles.txtCardAmount}>₹ 1,300</Text>
                <View style={styles.divider} />
                <View style={styles.payHistory}>
                  <Text style={styles.txtCardRides}>Payment History</Text>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    color="#013277"
                    size={12}
                  />
                </View>
              </View>
            </View>
            <View style={styles.topCardOnlineView}>
              <View style={styles.onlineCard}>
                <OnlineCardTabs />
              </View>
            </View>
          </View>
          <View style={styles.viewTwo}>
            <View style={styles.incomeReport}>
              <Text style={styles.incomeTxt}>Income Report</Text>
              <Svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 11.2v3.2a1.6 1.6 0 01-1.6 1.6H1.6A1.6 1.6 0 010 14.4v-3.2h1.6v3.2h12.8v-3.2H16zM8.8 8.469l2.634-2.635 1.132 1.132L8 11.53 3.434 6.966l1.132-1.132L7.2 8.47V0h1.6v8.469z"
                  fill="#003177"
                />
              </Svg>
            </View>
            <View style={styles.graphView}>
              <LineChart
                data={{
                  labels: data.map(item => item.x),
                  datasets: [{data: data.map(item => item.y)}],
                }}
                width={Dimensions.get('window').width - 30} // from react-native
                height={220}
                yAxisSuffix="k"
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: '#efefef',
                  backgroundGradientFrom: '#efefef',
                  backgroundGradientTo: '#ffffff',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => 'rgba(0, 49, 119, 1)',
                  labelColor: (opacity = 1) => 'rgba(0, 49, 119, 1)',
                  style: {
                    borderRadius: 16,
                  },
                  propsForBackgroundLines: {
                    stroke: 0,
                  },
                }}
                style={{
                  borderRadius: 16,
                }}
                withDots={false}
              />
            </View>
          </View>
          <View style={styles.viewThree}>
            <LinearGradient
              start={{x: 0, y: 0}} // left
              end={{x: 1, y: 0}} // right
              colors={['#0085F280', '#074088']}
              style={styles.viewThreeInner}>
              <Text style={styles.txtSmallWhite}>
                You will be charged on a monthly basis for 3 months
              </Text>
              <Text style={styles.txtMediumWhite}>1,300 INR Per month</Text>
              <Text style={styles.txtSmallWhite}>
                - 250 for first time subscribe ui design template
              </Text>
            </LinearGradient>
          </View>
          <View style={styles.viewFour}>
            <View style={styles.viewFourInner}>
              <View style={styles.txtListHeader}>
                <Text style={styles.txtListTitle}>Subscribe Vehicle List</Text>
                <View style={styles.countCircle}>
                  <Text style={styles.txtListCount}>7</Text>
                </View>
              </View>
              <View style={styles.divider} />

              {subscribeList.map((item, index) => (
                <View style={styles.listItems}>
                  <View key={item.id} style={styles.listStyle}>
                    <Text>{item.reg_no}</Text>
                    <Text
                      style={[
                        item.days > 5 ? styles.colorOrange : styles.colorRed,
                        item.days > 20 && styles.colorGreen,
                      ]}>
                      {item.days} days left
                    </Text>
                    <FontAwesomeIcon icon={faAngleRight} color="#013277" />
                  </View>
                  <View style={styles.divider} />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
