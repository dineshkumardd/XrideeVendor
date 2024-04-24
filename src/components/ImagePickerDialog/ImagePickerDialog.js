import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

const ImagePickerDialog = ({isVisible, onClose}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={styles.modalStyle}
      backdropOpacity={0}>
      <View style={styles.modalContainer}>
        <View style={styles.linearStyle}>
          <View style={styles.modalViewStyle}>
            <Pressable onPress={onClose}>
              <FontAwesomeIcon icon={faXmark} color="#000000" />
            </Pressable>
          </View>
          <View style={styles.mainBorderStyle}>
            <Text style={styles.headStyle}>Add New Image :</Text>
            <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.bodyStyle}>Camera</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.bodyStyle}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePickerDialog;
