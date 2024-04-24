import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Animated,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPowerOff, faSearch} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import ManageServicesDialog from '../ManageServicesDialog/ManageServicesDialog';
import LinearGradient from 'react-native-linear-gradient';

const defaultStyles = {
  bgGradientColors: ['#ffffff', '#ffffff'],
  headGradientColors: ['#003177', '#003177'],
};

const activeStyles = {
  bgGradientColors: ['#ffffff', '#ffffff'],
  headGradientColors: ['#003177', '#003177'],
};
const CustomSwitch = props => {
  const {value, onValueChange} = props;
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));
  const currentStyles = value ? activeStyles : defaultStyles;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 10],
  });

  const toggleSwitch = id => {
    const newValue = !value;
    onValueChange(newValue);
  };

  return (
    <Pressable onPress={toggleSwitch} style={styles.pressable}>
      <LinearGradient
        colors={currentStyles.bgGradientColors}
        style={styles.backgroundGradient}
        start={{
          x: 0,
          y: 0.5,
        }}>
        <View style={styles.innerContainer}>
          <Animated.View
            style={{
              transform: [{translateX}],
            }}>
            <LinearGradient
              colors={currentStyles.headGradientColors}
              style={styles.headGradient}
            />
          </Animated.View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
const VehicleStatus = ({navigation}) => {
  const [veicleList, setVehicleList] = useState([
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
      status: ' On Duty',
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
      status: ' On Duty',
    },
    {
      reg_no: 'PY 01 AA 2347',
      id: 6,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: ' On Duty',
    },
    {
      reg_no: 'PY 01 AA 2348',
      id: 7,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Online',
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
    <View style={styles.flex}>
      <ManageServicesDialog
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
          <Text>Rental Car's</Text>
          <View style={styles.listContainer}>
            <FlatList
              data={veicleList}
              renderItem={({item, index}) => (
                <View style={styles.itemView}>
                  <Text style={styles.txtRegNo}>{item.reg_no}</Text>

                  <View style={styles.flexrow}>
                    <Text
                      style={
                        item.status === 'Online'
                          ? styles.colorGreen
                          : styles.colorOrange
                      }>
                      {item.status}
                    </Text>
                    {item.status === 'Online' && (
                      <FontAwesomeIcon icon={faPowerOff} color="#D92507" />
                    )}
                  </View>
                  <TouchableOpacity onPress={() => setIsVisible(true)}>
                    <Text style={styles.review}>Action</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <Text>Self Drive Car's</Text>
          <View style={styles.listContainer}>
            <FlatList
              data={selfVehicleList}
              renderItem={({item, index}) => (
                <View style={styles.itemView}>
                  <Text style={styles.txtRegNo}>{item.reg_no}</Text>

                  <View style={styles.flexrow}>
                    <Text
                      style={
                        switchStates[item.id]
                          ? styles.colorGreen
                          : styles.colorRed
                      }>
                      {switchStates[item.id] ? 'Online' : 'Offline'}
                    </Text>
                  </View>
                  {/* <Switch
                    trackColor={{false: '#767577', true: '#FEB200'}}
                    thumbColor={switchStates[item.id] ? '#003177' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch(item.id)}
                    value={switchStates[item.id]}
                  /> */}
                  <CustomSwitch
                    value={switchStates[item.id]}
                    onValueChange={value => toggleSwitch(item.id, value)}
                  />
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

export default VehicleStatus;
