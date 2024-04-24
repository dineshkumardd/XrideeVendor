import {View, Text, TouchableOpacity, Image, SectionList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleDoubleDown,
  faAngleDown,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

const Earnings = ({navigation}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const jsonData = {
    '01-Apr-2024': {
      totalAmount: '5000',
      items: [
        {
          reg_no: 'PY 01 AB 2024',
          dutyType: 'Round Trip',
          amount: '2000',
        },
        {
          reg_no: 'PY 01 AB 2024',
          dutyType: 'Round Trip',
          amount: '3000',
        },
      ],
    },
    '02-Apr-2024': {
      totalAmount: '8000',
      items: [
        {
          reg_no: 'PY 01 AB 2024',
          dutyType: 'Round Trip',
          amount: '2000',
        },
        {
          reg_no: 'PY 01 AB 2024',
          dutyType: 'Round Trip',
          amount: '2000',
        },
        {
          reg_no: 'PY 01 AB 2024',
          dutyType: 'Round Trip',
          amount: '2000',
        },
        {
          reg_no: 'PY 01 AB 2024',
          dutyType: 'Round Trip',
          amount: '2000',
        },
      ],
    },
    '03-Apr-2024': {
      totalAmount: '6000',
      items: [
        {
          reg_no: 'PY 02 GF 5612',
          dutyType: 'One Way',
          amount: '2000',
        },
        {
          reg_no: 'PY 02 GF 5612',
          dutyType: 'One Way',
          amount: '2000',
        },
        {
          reg_no: 'PY 02 GF 5612',
          dutyType: 'One Way',
          amount: '2000',
        },
      ],
    },
  };

  const DATA = Object.keys(jsonData).map(key => ({
    title: key,
    amount: jsonData[key].totalAmount,
    data: jsonData[key].items,
  }));
  return (
    <View style={styles.flex}>
      <View style={styles.logoView}>
        <View style={styles.logoInnerView}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={styles.userimg}>
            <FontAwesomeIcon icon={faArrowLeft} color="#FFFFFF" size={20} />
          </TouchableOpacity>
          <Text style={styles.toolbarTxt}>Earnings</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <SectionList
          sections={DATA}
          renderItem={({item}) => (
            <View style={styles.sectionBodyView}>
              <Text style={styles.sectionName}>{item.reg_no}</Text>
              <Text style={styles.sectionName}>{item.dutyType}</Text>
              <Text style={[styles.sectionName]}>₹ {item.amount}</Text>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <View style={styles.sectionTitle}>
              <Text style={styles.sectionTitleTxt}>{section.title}</Text>
              <Text style={styles.sectionTitleTxt}>Duty Type</Text>
              <View style={styles.flexrow}>
                <Text style={styles.sectionTitleTxt}>₹ {section.amount}</Text>
                <FontAwesomeIcon icon={faAngleDown} color="#000000" size={14} />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Earnings;
