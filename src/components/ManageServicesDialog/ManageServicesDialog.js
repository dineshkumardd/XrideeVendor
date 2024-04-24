import {View, Text, Image, Pressable, Switch} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import styles from './styles';
import CustomSwitch from '../CustomSwitch/CustomSwitch';

const ManageServicesDialog = ({isVisible, onClose, data}) => {
  const [switchStates, setSwitchStates] = useState(false);
  const [switchStatesTwo, setSwitchStatesTwo] = useState(false);
  const [switchStatesThree, setSwitchStatesThree] = useState(false);
  const [switchStatesFour, setSwitchStatesFour] = useState(false);
  let vehicle = 'Car';
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
        <Pressable onPress={() => {}} style={styles.linearStyle}>
          <View style={styles.mainBorderStyle}>
            <Text style={styles.headStyle}>Manage Services</Text>
            {vehicle === 'Car' ? (
              <View style={styles.tripDetails}>
                <View style={styles.divider} />

                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Local trip</Text>
                  <Text
                    style={
                      switchStates ? styles.valueTxt : styles.valueTxtDisable
                    }>
                    {switchStates ? 'Enable' : 'Disable'}
                  </Text>
                  {/* <Switch
                    trackColor={{false: '#767577', true: '#FEB200'}}
                    thumbColor={switchStates ? '#003177' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch()}
                    value={switchStates}
                  /> */}
                  <CustomSwitch
                    value={switchStates}
                    onValueChange={setSwitchStates}
                  />
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>One way trip</Text>
                  <Text
                    style={
                      switchStatesTwo ? styles.valueTxt : styles.valueTxtDisable
                    }>
                    {switchStatesTwo ? 'Enable' : 'Disable'}
                  </Text>
                  {/* <Switch
                    trackColor={{false: '#767577', true: '#FEB200'}}
                    thumbColor={switchStatesTwo ? '#003177' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitchTwo()}
                    value={switchStatesTwo}
                  /> */}
                  <CustomSwitch
                    value={switchStatesTwo}
                    onValueChange={setSwitchStatesTwo}
                  />
                </View>
                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Out Station trip</Text>
                  <Text
                    style={
                      switchStatesThree
                        ? styles.valueTxt
                        : styles.valueTxtDisable
                    }>
                    {switchStatesThree ? 'Enable' : 'Disable'}
                  </Text>
                  {/* <Switch
                    trackColor={{false: '#767577', true: '#FEB200'}}
                    thumbColor={switchStatesThree ? '#003177' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitchThree()}
                    value={switchStatesThree}
                  /> */}
                  <CustomSwitch
                    value={switchStatesThree}
                    onValueChange={setSwitchStatesThree}
                  />
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Local Rental trip</Text>
                  <Text
                    style={
                      switchStatesFour
                        ? styles.valueTxt
                        : styles.valueTxtDisable
                    }>
                    {switchStatesFour ? 'Enable' : 'Disable'}
                  </Text>
                  {/* <Switch
                    trackColor={{false: '#767577', true: '#FEB200'}}
                    thumbColor={switchStatesFour ? '#003177' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitchFour()}
                    value={switchStatesFour}
                  /> */}
                  <CustomSwitch
                    value={switchStatesFour}
                    onValueChange={setSwitchStatesFour}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.tripDetails}>
                <View style={styles.divider} />

                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Local trip</Text>
                  <Text
                    style={
                      switchStates ? styles.valueTxt : styles.valueTxtDisable
                    }>
                    {switchStates ? 'Enable' : 'Disable'}
                  </Text>
                  {/* <Switch
                    trackColor={{false: '#767577', true: '#FEB200'}}
                    thumbColor={switchStates ? '#003177' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch()}
                    value={switchStates}
                  /> */}
                  <CustomSwitch
                    value={switchStates}
                    onValueChange={setSwitchStates}
                  />
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Food Delivery</Text>
                  <Text
                    style={
                      switchStatesTwo ? styles.valueTxt : styles.valueTxtDisable
                    }>
                    {switchStatesTwo ? 'Enable' : 'Disable'}
                  </Text>
                  {/* <Switch
                    trackColor={{false: '#767577', true: '#FEB200'}}
                    thumbColor={switchStatesTwo ? '#003177' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitchTwo()}
                    value={switchStatesTwo}
                  /> */}
                  <CustomSwitch
                    value={switchStatesTwo}
                    onValueChange={setSwitchStatesTwo}
                  />
                </View>
                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Grocery Delivery</Text>
                  <Text
                    style={
                      switchStatesThree
                        ? styles.valueTxt
                        : styles.valueTxtDisable
                    }>
                    {switchStatesThree ? 'Enable' : 'Disable'}
                  </Text>
                  {/* <Switch
                    trackColor={{false: '#767577', true: '#FEB200'}}
                    thumbColor={switchStatesThree ? '#003177' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitchThree()}
                    value={switchStatesThree}
                  /> */}
                  <CustomSwitch
                    value={switchStatesThree}
                    onValueChange={setSwitchStatesThree}
                  />
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Other Delivery</Text>
                  <Text
                    style={
                      switchStatesFour
                        ? styles.valueTxt
                        : styles.valueTxtDisable
                    }>
                    {switchStatesFour ? 'Enable' : 'Disable'}
                  </Text>
                  {/* <Switch
                    trackColor={{false: '#767577', true: '#FEB200'}}
                    thumbColor={switchStatesFour ? '#003177' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitchFour()}
                    value={switchStatesFour}
                  /> */}
                  <CustomSwitch
                    value={switchStatesFour}
                    onValueChange={setSwitchStatesFour}
                  />
                </View>
              </View>
            )}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};
export default ManageServicesDialog;
