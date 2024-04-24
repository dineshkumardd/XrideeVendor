import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ReviewStars from '../ReviewStars/ReviewStars';

const ReviewDialog = ({isVisible, onClose, data}) => {
  const [reviewList, setReviewList] = useState([
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 1,
      name: 'Name',
      comment: 'Activated',
      review: 4.5,
    },
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 2,
      name: 'Name',

      comment: 'Activated',
      review: 4.3,
      reviewCount: 50,
    },
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 3,
      name: 'Name',

      comment: 'Activated',
      review: 5,
      reviewCount: 50,
    },
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 4,
      name: 'Name',

      comment: 'Activated',
      review: 4.2,
      reviewCount: 50,
    },
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 5,
      name: 'Name',

      comment: 'Activated',
      review: 3.5,
      reviewCount: 50,
    },
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 6,
      name: 'Name',

      comment: 'Activated',
      review: 3,
      reviewCount: 50,
    },
    {
      img: require('../../assets/images/sectionImg.png'),
      id: 7,
      name: 'Name',

      comment: 'Activated',
      review: 2.5,
      reviewCount: 50,
    },
  ]);
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={styles.modalStyle}
      backdropOpacity={0}>
      <Pressable onPress={onClose} style={styles.modalContainer}>
        <Pressable style={styles.linearStyle}>
          <View style={styles.modalViewStyle}>
            <View style={styles.imgCircle}>
              <Image
                style={styles.img}
                resizeMode="contain"
                source={require('../../assets/images/user.png')}
              />
            </View>
          </View>
          <View style={styles.mainBorderStyle}>
            <Text style={styles.headStyle}>Name</Text>
            <ReviewStars count={2} size={15} />
            <View style={styles.tripDetails}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View onStartShouldSetResponder={() => true}>
                  {reviewList.map((item, index) => (
                    <View key={item.id} style={styles.itemView}>
                      <View style={styles.flexrow}>
                        <Image source={item.img} />

                        <View style={styles.driverInfo}>
                          <View style={styles.driverRow}>
                            <Text style={styles.txtUser}>{item.name}</Text>
                          </View>
                          <View style={styles.driverRow}>
                            <ReviewStars count={item.review} />
                          </View>
                          <View style={styles.driverRow}>
                            <Text style={styles.txtUser}>{item.comment}</Text>
                          </View>
                        </View>
                      </View>
                      <TouchableOpacity style={styles.reviewView}>
                        <Text style={styles.review}>{item.review}</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                  {/* <FlatList
                    data={reviewList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, index}) => (
                      <View style={styles.itemView}>
                        <View style={styles.flexrow}>
                          <Image source={item.img} />

                          <View style={styles.driverInfo}>
                            <View style={styles.driverRow}>
                              <Text style={styles.txtUser}>{item.name}</Text>
                            </View>
                            <View style={styles.driverRow}>
                              <Text style={styles.txtUser}>stars</Text>
                            </View>
                            <View style={styles.driverRow}>
                              <Text style={styles.txtUser}>{item.comment}</Text>
                            </View>
                          </View>
                        </View>
                        <TouchableOpacity style={styles.reviewView}>
                          <Text style={styles.review}>{item.review}</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  /> */}
                </View>
              </ScrollView>
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ReviewDialog;
