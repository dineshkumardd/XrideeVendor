import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faSearch} from '@fortawesome/free-solid-svg-icons';

import {faCircleUser, faPhone} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../navigation/Routes';

const ManageDriver = ({navigation}) => {
  const [driverList, setDriverList] = useState([
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 1,
      name: 'Name',
      number: 9876543210,
      status: 'Activated',
      review: 4.5,
      reviewCount: 50,
    },
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 2,
      name: 'Name',
      number: 9876543210,
      status: 'Activated',
      review: 4.5,
      reviewCount: 50,
    },
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 3,
      name: 'Name',
      number: 9876543210,
      status: 'Activated',
      review: 4.5,
      reviewCount: 50,
    },
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 4,
      name: 'Name',
      number: 9876543210,
      status: 'Activated',
      review: 4.5,
      reviewCount: 50,
    },
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 5,
      name: 'Name',
      number: 9876543210,
      status: 'Activated',
      review: 4.5,
      reviewCount: 50,
    },
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 6,
      name: 'Name',
      number: 9876543210,
      status: 'Activated',
      review: 4.5,
      reviewCount: 50,
    },
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 7,
      name: 'Name',
      number: 9876543210,
      status: 'Activated',
      review: 4.5,
      reviewCount: 50,
    },
  ]);
  return (
    <View style={styles.flex}>
      <View style={styles.topView}>
        <View style={styles.logoView}>
          <View style={styles.logoInnerView}>
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={styles.userimg}>
              <FontAwesomeIcon icon={faArrowLeft} color="#FFFFFF" size={20} />
            </TouchableOpacity>
            <Text style={styles.toolbarTxt}>Manage Driver</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchView}>
        <TextInput
          style={styles.sarchInput}
          placeholder={'Search Your Vehicle'}
        />
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesomeIcon icon={faSearch} size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={driverList}
          renderItem={({item, index}) => (
            <View style={styles.itemView}>
              <View style={styles.flexrow}>
                <View style={styles.imgCircle}>
                  <Image source={item.img} />
                </View>
                <View style={styles.driverInfo}>
                  <View style={styles.driverRow}>
                    <FontAwesomeIcon icon={faCircleUser} color="#003177" />
                    <Text style={styles.txtValue}>{item.name}</Text>
                  </View>
                  <View style={styles.driverRow}>
                    <FontAwesomeIcon icon={faPhone} color="#003177" />
                    <Text style={styles.txtValue}>{item.number}</Text>
                  </View>
                  <View style={styles.driverRow}>
                    <Text style={styles.txtLabel}>Status :</Text>
                    <Text style={styles.txtStatus}>{item.status}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.push(Routes.DriverDetails)}
                style={styles.reviewView}>
                <Text style={styles.more}>View / Edit</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ManageDriver;
