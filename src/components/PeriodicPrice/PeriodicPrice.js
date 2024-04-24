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
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import {Routes} from '../../navigation/Routes';

const PeriodicPrice = ({navigation, route}) => {
  console.log(route);
  const [veicleList, setVehicleList] = useState([
    {
      reg_no: 'PY 01 AA 1234',
      id: 1,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Activated',
    },
    {
      reg_no: 'PY 01 AA 2343',
      id: 2,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: ' Activated',
    },
    {
      reg_no: 'PY 01 AA 2344',
      id: 3,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: ' Activated',
    },
    {
      reg_no: 'PY 01 AA 2345',
      id: 4,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: ' Activated',
    },
    {
      reg_no: 'PY 01 AA 2346',
      id: 5,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: ' Activated',
    },
    {
      reg_no: 'PY 01 AA 2347',
      id: 6,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: ' Activated',
    },
    {
      reg_no: 'PY 01 AA 2348',
      id: 7,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: ' Activated',
    },
  ]);
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
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
                    <TouchableOpacity
                      style={styles.btnEdit}
                      onPress={() =>
                        navigation.push(Routes.ManagePeriodicRates, {
                          data: route.name,
                        })
                      }>
                      <Text style={styles.review}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnDelete}>
                      <Text style={styles.more}>Delete</Text>
                    </TouchableOpacity>
                  </View>
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

export default PeriodicPrice;
