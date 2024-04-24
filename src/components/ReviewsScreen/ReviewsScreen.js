import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCircleUser,
  faPhone,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import ReviewDialog from '../ReviewDialog/ReviewDialog';
import {Defs, G, Path, Svg} from 'react-native-svg';
const ReviewsScreen = ({navigation, route}) => {
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
  const [veicleList, setVehicleList] = useState([
    {
      reg_no: 'PY 01 AA 1234',
      id: 1,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Active',
      review: 4.5,
      reviewCount: 50,
      type: 2,
    },
    {
      reg_no: 'PY 01 AA 2343',
      id: 2,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Active',
      review: 4.5,
      reviewCount: 50,
      type: 1,
    },
    {
      reg_no: 'PY 01 AA 2344',
      id: 3,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Active',
      review: 4.5,
      reviewCount: 50,
      type: 2,
    },
    {
      reg_no: 'PY 01 AA 2345',
      id: 4,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Active',
      review: 4.5,
      reviewCount: 50,
      type: 1,
    },
    {
      reg_no: 'PY 01 AA 2346',
      id: 5,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Active',
      review: 4.5,
      reviewCount: 50,
      type: 3,
    },
    {
      reg_no: 'PY 01 AA 2347',
      id: 6,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Active',
      review: 4.5,
      reviewCount: 50,
      type: 2,
    },
    {
      reg_no: 'PY 01 AA 2348',
      id: 7,
      vendorType: 'Self',
      img: require('../../assets/images/sectionImg.png'),
      status: 'Active',
      review: 4.5,
      reviewCount: 50,
      type: 3,
    },
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(1);
  const showDialog = () => {
    setIsVisible(true);
  };
  console.log(route);
  useEffect(() => {
    if (route.name === 'Driver') {
      setValue(1);
    } else {
      setValue(2);
    }
  }, [route.name]);

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
      {isVisible && (
        <ReviewDialog
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
          data={''}
        />
      )}
      <View style={styles.searchView}>
        <TextInput
          style={styles.sarchInput}
          placeholder={
            value === 1 ? 'Search Your Driver' : 'Search Your Vehicle'
          }
        />
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesomeIcon icon={faSearch} size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      {veicleList.length !== 0 ? (
        <View>
          <View style={styles.listContainer}>
            {value === 1 ? (
              <FlatList
                data={driverList}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => showDialog()}
                    style={styles.itemView}>
                    <View style={styles.flexrow}>
                      <View style={styles.imgCircle}>
                        <Image source={item.img} />
                      </View>
                      <View style={styles.driverInfo}>
                        <View style={styles.driverRow}>
                          <FontAwesomeIcon
                            icon={faCircleUser}
                            color="#003177"
                          />
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
                    <View style={styles.reviewView}>
                      <Text style={styles.review}>{item.review}</Text>
                      <Text style={styles.more}>
                        ({item.reviewCount} reviews)
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <FlatList
                data={veicleList}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => showDialog()}
                    style={styles.itemView}>
                    <View style={styles.flexrow}>
                      <View style={styles.imgCircle}>
                        <View style={styles.blueCircle}>
                          {item.type === 1 && (
                            <Svg
                              width={22}
                              height={10}
                              viewBox="0 0 22 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.315 6.176l.48-.27a.925.925 0 00-.063-.21l-.55.07a.506.506 0 01.133.41zm-.399.431l.403.383a.731.731 0 00.173-.129l-.234-.508a.507.507 0 01-.341.254zm.02-1.498a.934.934 0 00-.11-.005c-.035 0-.07 0-.105.005l-.107.552a.478.478 0 01.426 0l-.104-.552zm-.542 1.245l-.234.508a.83.83 0 00.173.128l.403-.382a.493.493 0 01-.342-.255zm-.061-.24c0-.13.05-.253.138-.346l-.546-.07a.935.935 0 00-.068.21l.48.27a.46.46 0 01-.004-.065v.001z"
                                fill="#fff"
                              />
                              <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.826 4.287c-.43 0-.845.158-1.17.445a1.856 1.856 0 00-.34 2.362c.23.369.583.642.995.768.315.097.65.103.97.017.42-.112.787-.378 1.03-.746a1.855 1.855 0 00-.303-2.392 1.77 1.77 0 00-1.182-.454zm0 2.875c-.204 0-.403-.062-.572-.177a1.044 1.044 0 01-.379-.47 1.068 1.068 0 01.223-1.144 1.01 1.01 0 011.12-.227c.19.079.35.213.463.386a1.064 1.064 0 01-.13 1.324 1.022 1.022 0 01-.725.308z"
                                fill="#fff"
                              />
                              <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.315 6.176l.48-.27a.925.925 0 00-.063-.21l-.55.07a.506.506 0 01.133.41zm-.399.431l.403.383a.731.731 0 00.173-.129l-.234-.508a.507.507 0 01-.341.254zm.02-1.498a.934.934 0 00-.11-.005c-.035 0-.07 0-.105.005l-.107.552a.478.478 0 01.426 0l-.104-.552zm-.542 1.245l-.234.508a.83.83 0 00.173.128l.403-.382a.493.493 0 01-.342-.255zm-.061-.24c0-.13.05-.253.138-.346l-.546-.07a.935.935 0 00-.068.21l.48.27a.46.46 0 01-.004-.065v.001z"
                                fill="#fff"
                              />
                              <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.315 6.176l.48-.27a.925.925 0 00-.063-.21l-.55.07a.506.506 0 01.133.41zm-.399.431l.403.383a.731.731 0 00.173-.129l-.234-.508a.507.507 0 01-.341.254zm.02-1.498a.934.934 0 00-.11-.005c-.035 0-.07 0-.105.005l-.107.552a.478.478 0 01.426 0l-.104-.552zm-.542 1.245l-.234.508a.83.83 0 00.173.128l.403-.382a.493.493 0 01-.342-.255zm-.061-.24c0-.13.05-.253.138-.346l-.546-.07a.935.935 0 00-.068.21l.48.27a.46.46 0 01-.004-.065v.001z"
                                fill="#fff"
                              />
                              <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.181 5.768a.478.478 0 00-.71 0 .506.506 0 00.265.84.47.47 0 00.379-.088.506.506 0 00.066-.752zm-.355.566a.213.213 0 01-.152-.065.222.222 0 010-.31.213.213 0 01.304 0 .222.222 0 010 .31.213.213 0 01-.152.065zM5.434 5.899a1.074 1.074 0 00-.067-.207l-.547.068a.508.508 0 01.13.415l.484-.276zm-.539.444a.501.501 0 01-.343.257l.402.383a.853.853 0 00.177-.129l-.236-.51zM4.571 5.1a.9.9 0 00-.11-.004c-.035 0-.07 0-.105.004l-.103.552a.473.473 0 01.422 0L4.57 5.1zm-.54 1.244l-.236.51c.054.05.113.093.177.128l.4-.382a.487.487 0 01-.34-.256zm.076-.584l-.547-.067a1.06 1.06 0 00-.068.207l.485.275a.504.504 0 01.13-.414z"
                                fill="#fff"
                              />
                              <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.46 4.278c-.439 0-.862.166-1.19.464a1.854 1.854 0 00-.273 2.414 1.79 1.79 0 001.055.727 1.76 1.76 0 001.522-.347c.212-.171.383-.388.501-.636s.18-.52.18-.795c0-1.006-.804-1.827-1.794-1.827zm0 2.875c-.203 0-.402-.061-.57-.176a1.045 1.045 0 01-.38-.471 1.069 1.069 0 01.223-1.144 1.01 1.01 0 011.12-.227c.19.08.35.214.463.386a1.064 1.064 0 01-.128 1.325 1.018 1.018 0 01-.727.307z"
                                fill="#fff"
                              />
                              <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.434 5.899a1.074 1.074 0 00-.067-.207l-.547.068a.508.508 0 01.13.415l.484-.276zm-.539.444a.501.501 0 01-.343.257l.402.383a.853.853 0 00.177-.129l-.236-.51zM4.571 5.1a.9.9 0 00-.11-.004c-.035 0-.07 0-.105.004l-.103.552a.473.473 0 01.422 0L4.57 5.1zm-.54 1.244l-.236.51c.054.05.113.093.177.128l.4-.382a.487.487 0 01-.34-.256zm.076-.584l-.547-.067a1.06 1.06 0 00-.068.207l.485.275a.504.504 0 01.13-.414z"
                                fill="#fff"
                              />
                              <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.434 5.899a1.074 1.074 0 00-.067-.207l-.547.068a.508.508 0 01.13.415l.484-.276zm-.539.444a.501.501 0 01-.343.257l.402.383a.853.853 0 00.177-.129l-.236-.51zM4.571 5.1a.9.9 0 00-.11-.004c-.035 0-.07 0-.105.004l-.103.552a.473.473 0 01.422 0L4.57 5.1zm-.54 1.244l-.236.51c.054.05.113.093.177.128l.4-.382a.487.487 0 01-.34-.256zm.076-.584l-.547-.067a1.06 1.06 0 00-.068.207l.485.275a.504.504 0 01.13-.414z"
                                fill="#fff"
                              />
                              <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.82 5.759a.491.491 0 00-.358-.157.473.473 0 00-.208.048.5.5 0 00-.28.455.506.506 0 00.399.494.487.487 0 00.413-.115.506.506 0 00.033-.725zm-.358.565a.213.213 0 01-.148-.066.222.222 0 01-.062-.153.22.22 0 01.065-.15.21.21 0 01.296 0 .22.22 0 01.065.15.222.222 0 01-.064.155.214.214 0 01-.153.063l.001.001z"
                                fill="#fff"
                              />
                              <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.491 5.237c-.017-.16-.084-.228-.11-.361-.05-.25-.003-.507-.088-.735-.097-.267-.147-.391-.362-.58-.046-.039-.126-.082-.177-.116-.678-.421-1.55-.58-2.313-.71-.552-.094-1.12-.188-1.2-.218-.232-.086-.6-.22-.797-.361-.864-.576-1.343-.894-1.879-1.165a8.595 8.595 0 00-2.633-.864c-.384-.062-.77-.1-1.159-.116a8.953 8.953 0 00-2.292.18C6.21.45 5.708.717 4.675 1.486c-.084.056-.147.116-.23.171a4.964 4.964 0 01-.645.353c-.152.069-.325.103-.489.15h-.013a5.405 5.405 0 01-.286.073c-.405.124-1.353.305-1.601.696a.582.582 0 01-.042.064c-.088.142-.046.343-.067.511-.013.142-.017.417-.042.538-.055.21-.168.425-.224.636a2.87 2.87 0 00-.03.378c-.008.232-.012.588.01.8.05.442.303.7.758.695h.48a.555.555 0 00.084 0 2.238 2.238 0 01.59-2.014c.407-.415.96-.648 1.536-.648.576 0 1.129.233 1.536.649a2.238 2.238 0 01.586 2.03c.442.022 7.052-.008 8.068.005h.05a2.235 2.235 0 01.597-2.01c.406-.411.955-.642 1.527-.642s1.12.23 1.527.641a2.235 2.235 0 01.596 2.01c.055.01.13 0 .21 0h.805c.11 0 .168.005.24-.05.143-.117.24-.362.265-.542.02-.18.041-.484.02-.742zM9.511 2.392c-.534-.004-1.233-.017-1.95-.026-.695-.013-1.406-.021-2.01-.021-.167 0-.265.008-.294-.069-.034-.09.244-.318.476-.49a5.152 5.152 0 011.335-.735C7.7.823 8.547.695 9.21.691c.22 0 .223.03.236.12.063.455.126.92.19 1.375.016.137-.039.21-.123.206zm5.036.228c-.249.004-1.386.004-2.128-.043l-1.71-.1c-.27-.016-.253-.102-.291-.304-.039-.202.008.03-.021-.18-.03-.207-.114-.869-.143-1.071-.026-.18-.093-.21.21-.21.758.004 1.394.213 1.984.403.236.078.522.21.809.357.413.214 1.091.589 1.432.91.056.053.106.238-.143.238z"
                                fill="#fff"
                              />
                              <G filter="url(#filter0_f_487_1620)">
                                <Path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.75 8.25c5.304 0 9.63-.094 9.63-.214 0-.116-4.326-.21-9.63-.21-5.309 0-9.635.094-9.635.21 0 .12 4.327.214 9.636.214h-.002z"
                                  fill="#fff"
                                />
                              </G>
                              <Defs />
                            </Svg>
                          )}
                          {item.type === 2 && (
                            <Svg
                              width={21}
                              height={12}
                              viewBox="0 0 21 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <Path
                                d="M2.504 5.29A2.433 2.433 0 014.23 4.271c.893-.107 1.648.193 2.26.855l1.454-.667-.154-.084-3.916-2.015a.464.464 0 01-.136-.097c-.297-.336-.59-.675-.884-1.014-.023-.027-.04-.058-.073-.105l2.403.085c.042.114.075.223.122.325.143.316.322.604.68.713.728.22 1.475.316 2.235.317.068 0 .15-.043.203-.091.326-.308.648-.62.967-.936.23-.228.48-.34.818-.286.84.133 1.684.24 2.526.362.239.034.476.08.733.125L12.954.438a.41.41 0 01.037-.027l.544-.279c.358-.183.36-.185.689.054.46.337.84.758 1.19 1.203.4.506.78 1.025 1.164 1.534-.174.285-.33.547-.495.802a.31.31 0 01-.156.118c-.354.11-.656.31-.946.54l.102.235c.591-.157 1.158-.123 1.702.136.547.262.94.677 1.18 1.236a2.42 2.42 0 01-.67 2.778 2.391 2.391 0 01-2.885.134 2.332 2.332 0 01-.909-1.211c-.22-.665-.153-1.313.156-1.942-.194.238-.376.48-.554.725a.159.159 0 00-.016.099c.018.204.04.408.06.612.033.338.064.676.097 1.031h-.375l-5.372.027c-.102 0-.13-.03-.143-.128-.037-.298-.086-.595-.13-.893-.014-.086-.032-.171-.048-.257l-.057-.009c-.1.961-.54 1.704-1.4 2.141-.86.437-1.728.393-2.543-.126-1.25-.796-1.552-2.477-.672-3.682zm12.102-.598l-.213.24c.158-.042.249-.124.213-.24zm-.221 2.797a1.485 1.485 0 001.885.84 1.498 1.498 0 00.93-1.795c-.22-.775-.979-1.24-1.757-1.065.028.073.049.147.088.211.014.024.072.032.109.029.639-.046 1.19.352 1.31.972.093.485-.053.903-.448 1.206-.395.304-.834.345-1.276.126-.432-.214-.66-.58-.671-1.07-.009-.37.13-.68.402-.928.172-.157.174-.154.042-.362-.606.3-.898 1.17-.614 1.836zM3.002 7.274c.224.75.935 1.238 1.695 1.165.728-.07 1.376-.66 1.444-1.33-.227.032-.442.057-.655.098-.047.009-.096.063-.125.108a.937.937 0 01-.965.433c-.394-.076-.654-.314-.754-.707A.943.943 0 014.685 5.88c.08.008.161-.005.235-.036.212-.088.417-.189.63-.285-.322-.34-1.096-.53-1.737-.191a1.632 1.632 0 00-.811 1.906z"
                                fill="#fff"
                              />
                              <G filter="url(#filter0_f_487_1617)">
                                <Path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 9.695c0 .17 3.627.305 8.074.305s8.078-.134 8.078-.305c0-.165-3.627-.3-8.078-.3-4.45 0-8.075.135-8.075.3z"
                                  fill="#fff"
                                />
                              </G>
                              <Defs />
                            </Svg>
                          )}
                          {item.type === 3 && (
                            <Svg
                              width={16}
                              height={11}
                              viewBox="0 0 16 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <Path
                                d="M14.878 8.02c-.068-.314-.175-.613-.427-.825a1.732 1.732 0 00-.494-.305c-.145-.053-.172-.12-.144-.248.007-.034.01-.07.016-.122-.535-.04-1.014.083-1.423.422-.535.445-.683 1.06-.717 1.733h.367l.033-.305c.103.47.341.825.767 1.044.82.425 1.82-.065 1.994-.974.005-.025.017-.048.026-.073.002-.115.002-.23.002-.347zm-1.391 1.178a1.018 1.018 0 01-1.015-1.022 1.022 1.022 0 011.015-1.009c.558.002 1.02.468 1.015 1.024a1.017 1.017 0 01-1.015 1.007z"
                                fill="#fff"
                              />
                              <Path
                                d="M12.005.744h.66V.007C12.622.005 12.575 0 12.527 0L3.494.001c-1.138 0-2.05.732-2.257 1.812a2.52 2.52 0 00-.041.478c-.004 1.367-.003 2.734-.001 4.102 0 .772.333 1.442.935 1.866-.042-.808.26-1.43.965-1.824.428-.24.89-.276 1.358-.143.866.243 1.593 1.205 1.21 2.388H11.6c.023-.207.035-.415.072-.619.169-.933.85-1.533 1.794-1.593.062-.003.127-.023.186-.012.191.037.27-.078.337-.225.15-.327.186-.672.174-1.027-.023-.704-.237-1.362-.458-2.022-.291-.865-.797-1.584-1.441-2.217-.072-.07-.154-.13-.26-.22zM6.367 8.037c-.014-.265-.009-.52-.042-.77-.129-.957-.57-1.685-1.528-2.015-.1-.034-.098-.093-.098-.171V1.286 1.14h3.28v6.899l-1.612-.001zm2.53-6.888c.022-.009.03-.015.038-.015.565 0 1.13-.003 1.697 0 .039 0 .085.023.115.05.268.228.478.504.647.81.34.615.534 1.279.646 1.967.067.412.11.828.163 1.243-.101.037-.179.06-.25.096-.154.078-.316.148-.454.248-.617.442-.876 1.08-.947 1.807-.022.223-.004.45-.004.674H8.897V1.15z"
                                fill="#fff"
                              />
                              <Path
                                d="M3.999 6.565a1.475 1.475 0 101.476 1.476c0-.818-.66-1.478-1.476-1.476zM5.1 8.041c0 .608-.498 1.106-1.105 1.102a1.107 1.107 0 01-1.098-1.097 1.104 1.104 0 011.098-1.109 1.105 1.105 0 011.105 1.104zM14.684 6.04v-.815c-.282-.009-.515.18-.511.412.004.23.226.41.51.402z"
                                fill="#fff"
                              />
                              <G filter="url(#filter0_f_487_1629)">
                                <Path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.843 10c3.768 0 6.841-.117 6.841-.265 0-.144-3.073-.261-6.84-.261-3.771 0-6.844.117-6.844.26 0 .15 3.073.266 6.844.266z"
                                  fill="#fff"
                                />
                              </G>
                              <Defs />
                            </Svg>
                          )}
                          {item.type === 4 && <Image source={item.img} />}
                        </View>
                      </View>
                      <View style={styles.driverInfo}>
                        <View style={styles.driverRow}>
                          <Text style={styles.txtRegNo}>
                            {item.reg_no} ({item.vendorType})
                          </Text>
                        </View>

                        <View style={styles.driverRow}>
                          <Text style={styles.txtLabel}>Status :</Text>
                          <Text style={styles.txtStatus}>{item.status}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.reviewView}>
                      <Text style={styles.review}>{item.review}</Text>
                      <Text style={styles.more}>
                        ({item.reviewCount} reviews)
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            )}
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

export default ReviewsScreen;
