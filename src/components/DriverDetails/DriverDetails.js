import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAdd,
  faAngleDown,
  faAngleRight,
  faArrowLeft,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import ImagePickerDialog from '../ImagePickerDialog/ImagePickerDialog';

const DriverDetails = ({navigation}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsedAmenities, setIsCollapsedAmenities] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleCollapseAmenities = () => {
    setIsCollapsedAmenities(!isCollapsedAmenities);
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
            <Text style={styles.toolbarTxt}>Driver Details</Text>
          </View>
        </View>
      </View>
      {/* <ImagePickerDialog
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      /> */}
      <View style={styles.profileCard}>
        <View style={styles.card}>
          <View style={styles.userFields}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TouchableOpacity
                onPress={toggleCollapse}
                style={styles.userinfoView}>
                <Text style={styles.userinfotext}>Driver Details</Text>
                <FontAwesomeIcon
                  icon={isCollapsed ? faAngleRight : faAngleDown}
                  color="#222222"
                />
              </TouchableOpacity>
              {!isCollapsed && (
                <View style={styles.rowOne}>
                  <View style={styles.left}>
                    <View style={styles.rowView}>
                      <Text style={styles.txtLabel}>Driver Name</Text>

                      <Text style={styles.txtValue}>Zoro</Text>
                    </View>
                    <View style={styles.rowView}>
                      <Text style={styles.txtLabel}>Driver Mobile No.</Text>
                      <Text style={styles.txtValue}>+91 9876543210</Text>
                    </View>
                    <View style={styles.rowView}>
                      <Text style={styles.txtLabel}>
                        Driver Alter Mobile No.
                      </Text>

                      <Text style={styles.txtValue}>9087654321</Text>
                    </View>
                    <View style={styles.rowView}>
                      <Text style={styles.txtLabel}>Gender</Text>

                      <Text style={styles.txtValue}>Male</Text>
                    </View>
                    <View style={styles.rowView}>
                      <Text style={styles.txtLabel}>Status</Text>

                      <Text style={styles.txtValue}>Activated</Text>
                    </View>
                    <View style={styles.rowView}>
                      <Text style={styles.txtLabel}>Date Of Birth</Text>

                      <Text style={styles.txtValue}>17-04-2024</Text>
                    </View>
                  </View>
                  <View style={styles.right}>
                    <View style={styles.imgCircle}>
                      <Image
                        style={styles.img}
                        source={require('../../assets/images/user.png')}
                      />
                    </View>
                  </View>
                </View>
              )}

              <TouchableOpacity
                onPress={toggleCollapseAmenities}
                style={styles.userinfoView}>
                <Text style={styles.userinfotext}>Licence Details</Text>
                <FontAwesomeIcon
                  icon={isCollapsedAmenities ? faAngleRight : faAngleDown}
                  color="#222222"
                />
              </TouchableOpacity>
              {!isCollapsedAmenities && (
                <View>
                  <View style={styles.rowView}>
                    <Text style={styles.txtlicenceLabel}>Licence ID</Text>

                    <Text style={styles.txtLicenceValue}>PY010876558432</Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text style={styles.txtlicenceLabel}>
                      Licence Expiired Date
                    </Text>
                    <Text style={styles.txtLicenceValue}>17-04-2024</Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text style={styles.txtlicenceLabel}>Batch Number</Text>

                    <Text style={styles.txtLicenceValue}>SUV</Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text style={styles.txtlicenceLabel}>
                      Batch Expired Date
                    </Text>

                    <Text style={styles.txtLicenceValue}>17-04-2024</Text>
                  </View>
                  <View style={styles.columnView}>
                    <Text style={styles.txtLabel}>Licence Image</Text>

                    <View style={styles.rowView}>
                      <View style={styles.imgRect}>
                        <FontAwesomeIcon icon={faAdd} color="#000000" />
                        <Text style={styles.value}>Upload/Camera</Text>
                      </View>
                      <View style={[styles.imgRect, {marginLeft: 15}]}>
                        <Image
                          source={require('../../assets/images/user.png')}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveTxt}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DriverDetails;
