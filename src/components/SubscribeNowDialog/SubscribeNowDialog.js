import {
  View,
  Text,
  Image,
  Pressable,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import styles from './styles';
const SubscribeNowDialog = ({isVisible, onClose, data}) => {
  const [switchStates, setSwitchStates] = useState(false);
  const [switchStatesTwo, setSwitchStatesTwo] = useState(false);
  const [switchStatesThree, setSwitchStatesThree] = useState(false);
  const [switchStatesFour, setSwitchStatesFour] = useState(false);
  let vehicle = 'Bike';
  const toggleSwitch = () => {
    setSwitchStates(!switchStates);
  };
  const toggleSwitchTwo = () => {
    setSwitchStatesTwo(!switchStatesTwo);
  };

  const toggleSwitchThree = () => {
    setSwitchStatesThree(!switchStatesThree);
  };
  const toggleSwitchFour = () => {
    setSwitchStatesFour(!switchStatesFour);
  };
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={styles.modalStyle}
      backdropOpacity={0}>
      <Pressable onPress={onClose} style={styles.modalContainer}>
        <View style={styles.linearStyle}>
          <View style={styles.mainBorderStyle}>
            <Text style={styles.headStyle}>Subscribe Now</Text>
            <View style={styles.tripDetails}>
              <View style={styles.divider} />

              <View style={styles.itemStyle}>
                <View style={styles.outerCircle}>
                  <View style={styles.blueCircle}>
                    <Image
                      tintColor="#FFFFFF"
                      source={require('../../assets/images/tinyCar.png')}
                    />
                  </View>
                </View>
                <View style={styles.amtView}>
                  <Text style={styles.labelTxt}>2500</Text>
                  <Text style={styles.valueTxt}>
                    Next Payment On 18 May, 2024
                  </Text>
                </View>
              </View>

              <View style={styles.btnStyle}>
                <TouchableOpacity style={styles.btnYes}>
                  <Text style={styles.txtYes}>Pay Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnNo}>
                  <Text style={styles.txtNo}>Remind Me Later</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default SubscribeNowDialog;
