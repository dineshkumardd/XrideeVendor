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
import TripDetailsDialog from '../TripDetailsDialog/TripDetailsDialog';

const ManageTrips = ({route}) => {
  const [carList, setCarList] = useState([
    {reg_no: 'PY 01 AA 1234', id: 1, triptype: 'Round Trip'},
    {reg_no: 'PY 01 AA 2343', id: 2, triptype: 'Round Trip'},
    {reg_no: 'PY 01 AA 2344', id: 3, triptype: 'Round Trip'},
    {reg_no: 'PY 01 AA 2345', id: 4, triptype: 'Round Trip'},
    {reg_no: 'PY 01 AA 2346', id: 5, triptype: 'Round Trip'},
    {reg_no: 'PY 01 AA 2347', id: 6, triptype: 'Round Trip'},
    {reg_no: 'PY 01 AA 2348', id: 7, triptype: 'Round Trip'},
  ]);
  const [isVisible, setIsVisible] = useState(false);
  console.log(route);
  const showDialog = () => {
    setIsVisible(true);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
      {isVisible && (
        <TripDetailsDialog
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
          data={route.name}
        />
      )}
      <View style={styles.searchView}>
        <TextInput
          style={styles.sarchInput}
          placeholder="Search Your Vehicle"
        />
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesomeIcon icon={faSearch} size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      {carList.length !== 0 ? (
        <View>
          <View style={styles.listContainer}>
            <FlatList
              data={carList}
              renderItem={({item, index}) => (
                <View style={styles.itemView}>
                  <Text>{item.reg_no}</Text>
                  <Text>{item.triptype}</Text>
                  <TouchableOpacity onPress={() => showDialog()}>
                    <Text style={styles.more}>More</Text>
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

export default ManageTrips;
