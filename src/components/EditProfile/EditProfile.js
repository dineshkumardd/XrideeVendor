import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleDown,
  faAngleRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../navigation/Routes';
import ImagePickerDialog from '../ImagePickerDialog/ImagePickerDialog';
import {Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-native-modal';

const EditProfile = ({navigation}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsedId, setIsCollapsedId] = useState(true);
  const [isCollapsedBank, setIsCollapsedBank] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [img, setImg] = useState(null);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleCollapseId = () => {
    setIsCollapsedId(!isCollapsedId);
  };
  const toggleCollapseBank = () => {
    setIsCollapsedBank(!isCollapsedBank);
  };

  const requestCameraPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Xridee needs Camera Permission',
            message: 'Xridee needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          launchCameraApp();
        } else {
          Alert.alert('Camera permission denied');
        }
      } else if (Platform.OS === 'ios') {
        await request(PERMISSIONS.IOS.CAMERA).then(result => {
          if (result) {
            launchCameraApp();
          } else {
            Alert.alert('Camera permission denied');
          }
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestStoragePermission = async data => {
    try {
      if (Platform.OS === 'android') {
        let permission = '';
        if (Platform.Version.toString() > 32) {
          permission = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
        } else {
          permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
        }
        const permGranted = await PermissionsAndroid.request(permission, {
          title: 'Xridee Gallery Permission',
          message: 'Xridee needs access to your gallery ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        });
        if (permGranted === PermissionsAndroid.RESULTS.GRANTED) {
          launchGallery();
        } else if (permGranted === PermissionsAndroid.RESULTS.DENIED) {
          Alert.alert('Gallery permission denied');
        } else if (permGranted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          Alert.alert('Gallery permission never ask again');
        }
      } else if (Platform.OS === 'ios') {
        await request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(result => {
          console.log(result);
          if (result) {
            launchGallery();
          } else {
            Alert.alert('Gallery permission denied');
          }
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const launchCameraApp = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    }).then(image => {
      console.log('camera-data', image);

      handleModalClose(image.path);
    });
  };

  const launchGallery = () => {
    try {
      ImagePicker.openPicker({}).then(images => {
        console.log(images);
        handleModalClose(images.path);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClose = data => {
    setIsVisible(false);
    setImg(data);
  };
  return (
    <View style={styles.flex}>
      <View style={styles.logoView}>
        <View style={styles.logoInnerView}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={styles.userimg}>
            <FontAwesomeIcon icon={faArrowLeft} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.toolbarTxt}>Profile</Text>
        </View>
      </View>
      <Modal
        isVisible={isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modalStyle}
        backdropOpacity={0}>
        <View style={styles.modalContainer}>
          <View style={styles.linearStyle}>
            <View style={styles.modalViewStyle}>
              <Pressable onPress={() => setIsVisible(false)}>
                <FontAwesomeIcon icon={faXmark} color="#000000" />
              </Pressable>
            </View>
            <View style={styles.mainBorderStyle}>
              <Text style={styles.headStyle}>Add New Image :</Text>
              <TouchableOpacity
                onPress={() => requestCameraPermission()}
                style={styles.btnStyle}>
                <Text style={styles.bodyStyle}>Camera</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity
                onPress={() => requestStoragePermission()}
                style={styles.btnStyle}>
                <Text style={styles.bodyStyle}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.profileCard}>
        <View style={styles.card}>
          {img !== null ? (
            <View style={styles.imgCircle}>
              <Image
                style={styles.img}
                resizeMode="cover"
                source={{uri: img}}
              />
            </View>
          ) : (
            <View style={styles.imgCircle}>
              <Image
                style={styles.img}
                resizeMode="contain"
                source={require('../../assets/images/user.png')}
              />
            </View>
          )}

          <TouchableOpacity
            onPress={() => setIsVisible(true)}
            style={styles.changeBtn}>
            <Text style={styles.txtChange}>Change Profile Photo</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <View style={styles.userFields}>
            <TouchableOpacity
              onPress={toggleCollapse}
              style={styles.userinfoView}>
              <Text style={styles.userinfotext}>General Information</Text>
              <FontAwesomeIcon
                icon={isCollapsed ? faAngleRight : faAngleDown}
                color="#222222"
              />
            </TouchableOpacity>
            {!isCollapsed && (
              <View>
                <View style={styles.rowView}>
                  <Text style={styles.txtLabel}>Full Name</Text>

                  <Text style={styles.txtValue}>Brook</Text>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.txtLabel}>Email ID</Text>
                  <Text style={styles.txtValue}>Brook@hotmail.com</Text>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.txtLabel}>Mobile Number</Text>

                  <Text style={styles.txtValue}>+91 9876543210</Text>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.txtLabel}>Alter Mobile Number</Text>

                  <Text style={styles.txtValue}>9876543201</Text>
                </View>
              </View>
            )}

            <TouchableOpacity
              onPress={toggleCollapseId}
              style={styles.userinfoView}>
              <Text style={styles.userinfotext}>ID Proof Document</Text>
              <FontAwesomeIcon icon={faAngleRight} color="#222222" />
            </TouchableOpacity>
            {!isCollapsedId && (
              <View>
                <View style={styles.rowView}>
                  <Text style={styles.txtLabel}>Proof Type</Text>

                  <Text style={styles.txtValue}>Aadhar</Text>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.txtLabel}>Proof ID</Text>
                  <Text style={styles.txtValue}>4566 3322 3443 3434</Text>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.txtLabel}>PAN ID</Text>

                  <Text style={styles.txtValue}>PANID1235P</Text>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.txtLabel}>GST Number</Text>

                  <Text style={styles.txtValue}>787AD67676KJ45567</Text>
                </View>
              </View>
            )}
            <TouchableOpacity
              onPress={toggleCollapseBank}
              style={styles.userinfoView}>
              <Text style={styles.userinfotext}>Bank Details</Text>
              <FontAwesomeIcon icon={faAngleRight} color="#222222" />
            </TouchableOpacity>
            {!isCollapsedBank && (
              <View>
                <View style={styles.rowView}>
                  <Text style={styles.txtLabel}>Account Number</Text>

                  <Text style={styles.txtValue}>65778099876556</Text>
                </View>
                <View style={styles.rowView}>
                  <Text style={styles.txtLabel}>IFSC Code</Text>
                  <Text style={styles.txtValue}>AXIS0000006</Text>
                </View>
              </View>
            )}
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            disabled={img !== null ? false : true}
            style={img !== null ? styles.saveBtn : styles.saveBtnLite}>
            <Text style={styles.saveTxt}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
