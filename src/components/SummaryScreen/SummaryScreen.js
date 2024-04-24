import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCaretDown,
  faDownload,
  faRotate,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../navigation/Routes';
import RNPickerSelect from 'react-native-picker-select';

const SummaryScreen = ({navigation}) => {
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
  const jsonData = [
    {
      vehicle: 'Car',
      vehicleNo: 'TN 02 AS 3457',
      amount: '22000',
      Duty: 'One Way',
      id: 1,
    },
    {
      vehicle: 'Bike',
      vehicleNo: 'TN 32 CL 7772',
      amount: '5000',
      Duty: 'One Way',
      id: 2,
    },

    {
      vehicle: 'Auto',
      vehicleNo: 'TN 68 CE 8081 ',
      amount: '500',
      Duty: 'Local Trip',
      id: 3,
    },
    {
      vehicle: 'Load Carrier',
      vehicleNo: 'PY 05 BF 6423',
      amount: '15000',
      Duty: 'Local Trip',
      id: 4,
    },
    {
      vehicle: 'Bike',
      vehicleNo: 'PY 02 AE 7234',
      amount: '300',
      Duty: 'Food Delivery',
      id: 5,
    },
    {
      vehicle: 'Bike',
      vehicleNo: 'PY 02 MN 6503',
      amount: '300',
      Duty: 'Food Delivery',
      id: 6,
    },

    {
      vehicle: 'Bike',
      vehicleNo: 'PY 01 BV 1414',
      amount: '300',
      Duty: 'Food Delivery',
      id: 7,
    },
  ];

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
            <Text style={styles.toolbarTxt}>Summary</Text>
            <View style={styles.topIconsView}>
              <FontAwesomeIcon icon={faRotate} color="#FFFFFF" size={20} />
              <FontAwesomeIcon icon={faDownload} color="#FFFFFF" size={20} />
            </View>
          </View>
        </View>
        <View style={styles.tranxHist}>
          <View style={styles.searchView}>
            <TextInput
              style={styles.sarchInput}
              placeholder="Search Your Vehicle"
            />
            <TouchableOpacity style={styles.searchBtn}>
              <FontAwesomeIcon icon={faSearch} size={14} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
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
          <View style={styles.columns}>
            <View style={styles.columnsInner}>
              <Text style={[styles.columncells]}>Vehicles</Text>
              <Text style={[styles.columncells]}>Vehicle No</Text>
              <Text style={[styles.columncells]}>Duty</Text>
              <Text style={[styles.columncells]}>Amount</Text>
            </View>
          </View>
          <View style={styles.viewFourInner}>
            <FlatList
              data={jsonData}
              renderItem={({item}) => (
                <View style={styles.row}>
                  <View style={styles.rowInner}>
                    <Text style={styles.cellsSide}>{item.vehicle}</Text>
                    <Text style={styles.cells}>{item.vehicleNo}</Text>
                    <Text style={styles.cells}>{item.Duty}</Text>
                    <Text style={styles.cellsSide}>{item.amount}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SummaryScreen;
