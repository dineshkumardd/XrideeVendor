import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faSearch} from '@fortawesome/free-solid-svg-icons';

const Language = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const [filteredData, setFilteredData] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [languageList, setLanguageList] = useState([
    {
      id: 1,
      name: 'Tamil',
      selected: false,
    },
    {
      id: 2,
      name: 'English (US)',
      selected: true,
    },
    {
      id: 3,
      name: 'Telugu',
      selected: false,
    },
    {
      id: 4,
      name: 'Malayalam',
      selected: false,
    },
    {
      id: 5,
      name: 'kannada',
      selected: false,
    },
    {
      id: 6,
      name: 'Hindi',
      selected: false,
    },
    {
      id: 7,
      name: 'French',
      selected: false,
    },
  ]);
  const handleLangSelection = id => {
    const updatedData = languageList.map(item => ({
      ...item,
      selected: item.id === id,
    }));
    const selected = updatedData.find(item => item.selected);
    console.log('selected:', selected);
    setSelectedLanguage(selected);
    setFilteredData(updatedData);
    setLanguageList(updatedData);
    setSearchQuery('');
  };
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
            <Text style={styles.toolbarTxt}>Choose Language</Text>
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
          data={languageList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => handleLangSelection(item.id)}
              style={item.selected ? styles.bgColor : styles.itemView}>
              <Text
                style={item.selected ? styles.txtValueWhite : styles.txtValue}>
                {item.name}
              </Text>
              {item.selected && (
                <Image source={require('../../assets/images/iconTick.png')} />
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Language;
