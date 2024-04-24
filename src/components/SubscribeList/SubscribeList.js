import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPowerOff, faSearch} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import SubscribeNowDialog from '../SubscribeNowDialog/SubscribeNowDialog';
const SubscribeList = ({navigation}) => {
  const [veicleList, setVehicleList] = useState([
    {
      reg_no: 'PY 01 AA 1234',
      id: 1,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      days: 12,
    },
    {
      reg_no: 'PY 01 AA 2343',
      id: 2,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      days: 28,
    },
    {
      reg_no: 'PY 01 AA 2344',
      id: 3,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      days: 4,
    },
    {
      reg_no: 'PY 01 AA 2345',
      id: 4,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      days: 28,
    },
    {
      reg_no: 'PY 01 AA 2346',
      id: 5,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      days: 25,
    },
    {
      reg_no: 'PY 01 AA 2347',
      id: 6,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      days: 15,
    },
    {
      reg_no: 'PY 01 AA 2348',
      id: 7,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      days: 10,
    },
  ]);

  const [selfVehicleList, setSelfVehicleList] = useState([
    {
      reg_no: 'PY 01 AA 1234',
      id: 1,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Online',
    },
    {
      reg_no: 'PY 01 AA 2343',
      id: 2,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: ' Offline',
    },
    {
      reg_no: 'PY 01 AA 2344',
      id: 3,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Online',
    },
    {
      reg_no: 'PY 01 AA 2345',
      id: 4,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Online',
    },
    {
      reg_no: 'PY 01 AA 2346',
      id: 5,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: ' Offline',
    },
    {
      reg_no: 'PY 01 AA 2347',
      id: 6,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: ' Offline',
    },
    {
      reg_no: 'PY 01 AA 2348',
      id: 7,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Online',
    },
  ]);
  const [switchStates, setSwitchStates] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const toggleSwitch = itemId => {
    setSwitchStates(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId] || false, // if switch state is undefined, set it to false
    }));
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
      <SubscribeNowDialog
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
      <View style={styles.searchView}>
        <TextInput
          style={styles.sarchInput}
          placeholder={'Search Your Vehicle'}
        />
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesomeIcon icon={faSearch} size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      {veicleList.length !== 0 ? (
        <View>
          <View style={styles.listContainer}>
            <FlatList
              data={veicleList}
              renderItem={({item, index}) => (
                <View style={styles.itemView}>
                  <Text style={styles.txtRegNo}>{item.reg_no}</Text>

                  <View style={styles.flexrow}>
                    <Text
                      style={[
                        item.days > 10 ? styles.colorOrange : styles.colorRed,
                        item.days > 20 && styles.colorGreen,
                      ]}>
                      {item.days}
                    </Text>
                    {item.status === 'Online' && (
                      <FontAwesomeIcon icon={faPowerOff} color="#D92507" />
                    )}
                  </View>
                  <TouchableOpacity onPress={() => setIsVisible(true)}>
                    <Image
                      source={require('../../assets/images/subsIcon.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      ) : (
        <View style={styles.nodataview}>
          <Image source={require('../../assets/images/vehicleNotFound.png')} />
          <Text style={styles.nodatatext}>No vehicles to display</Text>
        </View>
      )}
    </View>
  );
};

export default SubscribeList;
