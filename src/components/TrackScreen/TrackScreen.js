import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faSearch} from '@fortawesome/free-solid-svg-icons';

import {faCircleUser, faPhone} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../navigation/Routes';
import MapView, {Marker} from 'react-native-maps';

const TrackScreen = ({navigation}) => {
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
            <Text style={styles.toolbarTxt}>Track Vehicles</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          minZoomLevel={15}
          initialRegion={{
            latitude: 11.9362917,
            longitude: 79.8318642,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: 11.9362917,
              longitude: 79.8318642,
            }}
            resizeMode="contain"
            image={require('../../assets/images/carMarker.png')}
            onDragEnd={e => Alert(JSON.stringify(e.nativeEvent.coordinate))}
            title="Test Marker"
            description="This is a description of marker"
          />
        </MapView>
      </View>
    </View>
  );
};
export default TrackScreen;
