import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleDown,
  faAngleRight,
  faArrowLeft,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import ImagePickerDialog from '../ImagePickerDialog/ImagePickerDialog';
const VehicleDetails = ({navigation}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsedAmenities, setIsCollapsedAmenities] = useState(true);
  const [isCollapsedImages, setIsCollapsedImages] = useState(true);
  const [isCollapsedDocuments, setIsCollapsedDocuments] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isMusic, setIsMusic] = useState(false);
  const [isFA, setIsFA] = useState(false);
  const [isWifi, setIsWifi] = useState(false);
  const [isCarrier, setIsCarrier] = useState(false);
  const [isTv, setIsTv] = useState(false);
  const [isAc, setIsAc] = useState(false);
  const [isCharger, setIsCharger] = useState(false);
  const [isFireExt, setIsFireExt] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleCollapseAmenities = () => {
    setIsCollapsedAmenities(!isCollapsedAmenities);
  };
  const toggleCollapseImages = () => {
    setIsCollapsedImages(!isCollapsedImages);
  };

  const toggleCollapseDocuments = () => {
    setIsCollapsedDocuments(!isCollapsedDocuments);
  };

  const handleVehicleSelection = () => {
    setIsMusic(!isMusic);
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
          <Text style={styles.toolbarTxt}>Car Details</Text>
        </View>
      </View>
      <ImagePickerDialog
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
      <View style={styles.profileCard}>
        <View style={styles.card}>
          <View style={styles.userFields}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TouchableOpacity
                onPress={toggleCollapse}
                style={styles.userinfoView}>
                <Text style={styles.userinfotext}>Car Details</Text>
                <FontAwesomeIcon
                  icon={isCollapsed ? faAngleRight : faAngleDown}
                  color="#222222"
                />
              </TouchableOpacity>
              {!isCollapsed && (
                <View>
                  <View style={styles.rowView}>
                    <Text style={styles.txtLabel}>Car Type</Text>

                    <Text style={styles.txtValue}>Sedan</Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text style={styles.txtLabel}>Brand Name</Text>
                    <Text style={styles.txtValue}>Toyota</Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text style={styles.txtLabel}>Car Model</Text>

                    <Text style={styles.txtValue}>Etios</Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text style={styles.txtLabel}>Car Seat</Text>

                    <Text style={styles.txtValue}>4+1</Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text style={styles.txtLabel}>Car Colour</Text>

                    <Text style={styles.txtValue}>White</Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text style={styles.txtLabel}>Manufacturing Year</Text>

                    <Text style={styles.txtValue}>2018</Text>
                  </View>
                  <View style={styles.rowView}>
                    <Text style={styles.txtLabel}>Variant Of Vehicle</Text>

                    <Text style={styles.txtValue}>Petrol</Text>
                  </View>
                </View>
              )}

              <TouchableOpacity
                onPress={toggleCollapseAmenities}
                style={styles.userinfoView}>
                <Text style={styles.userinfotext}>Amenities</Text>
                <FontAwesomeIcon
                  icon={isCollapsedAmenities ? faAngleRight : faAngleDown}
                  color="#222222"
                />
              </TouchableOpacity>
              {!isCollapsedAmenities && (
                <View>
                  {/* amenities row-1-start */}
                  <View style={styles.amenitiesView}>
                    <View style={[styles.flexRow, styles.flexHalf]}>
                      <TouchableOpacity
                        onPress={() => handleVehicleSelection()}>
                        <View
                          style={[
                            styles.tickView,
                            isMusic && styles.tickViewChecked,
                          ]}>
                          {isMusic && (
                            <FontAwesomeIcon
                              icon={faCheck}
                              size={10}
                              color="#FFFFFF"
                            />
                          )}
                        </View>
                      </TouchableOpacity>

                      <Text style={styles.txtAmenities}>Music</Text>
                    </View>
                    <View style={[styles.flexRow, styles.flexFull]}>
                      <TouchableOpacity
                        onPress={() => handleVehicleSelection()}>
                        <View
                          style={[
                            styles.tickView,
                            isFA && styles.tickViewChecked,
                          ]}>
                          {isFA && (
                            <FontAwesomeIcon
                              icon={faCheck}
                              size={10}
                              color="#FFFFFF"
                            />
                          )}
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.txtAmenities}>First Aid Kit</Text>
                    </View>
                    <View style={[styles.flexRow, styles.flexHalf]}>
                      <TouchableOpacity
                        onPress={() => handleVehicleSelection()}>
                        <View
                          style={[
                            styles.tickView,
                            isWifi && styles.tickViewChecked,
                          ]}>
                          {isWifi && (
                            <FontAwesomeIcon
                              icon={faCheck}
                              size={10}
                              color="#FFFFFF"
                            />
                          )}
                        </View>
                      </TouchableOpacity>

                      <Text style={[styles.txtAmenities, styles.flexRight]}>
                        Wifi
                      </Text>
                    </View>
                  </View>
                  {/* amenities row-1-end */}
                  {/* amenities row-2-start */}
                  <View style={styles.amenitiesView}>
                    <View style={[styles.flexRow, styles.flexHalf]}>
                      <TouchableOpacity
                        onPress={() => setIsCarrier(!isCarrier)}>
                        <View
                          style={[
                            styles.tickView,
                            isCarrier && styles.tickViewChecked,
                          ]}>
                          {isCarrier && (
                            <FontAwesomeIcon
                              icon={faCheck}
                              size={10}
                              color="#FFFFFF"
                            />
                          )}
                        </View>
                      </TouchableOpacity>

                      <Text style={styles.txtAmenities}>Carrier</Text>
                    </View>
                    <View style={[styles.flexRow, styles.flexFull]}>
                      <TouchableOpacity onPress={() => setIsTv(!isTv)}>
                        <View
                          style={[
                            styles.tickView,
                            isTv && styles.tickViewChecked,
                          ]}>
                          {isTv && (
                            <FontAwesomeIcon
                              icon={faCheck}
                              size={10}
                              color="#FFFFFF"
                            />
                          )}
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.txtAmenities}>Television</Text>
                    </View>
                    <View style={[styles.flexRow, styles.flexHalf]}>
                      <TouchableOpacity onPress={() => setIsAc(!isAc)}>
                        <View
                          style={[
                            styles.tickView,
                            isAc && styles.tickViewChecked,
                          ]}>
                          {isAc && (
                            <FontAwesomeIcon
                              icon={faCheck}
                              size={10}
                              color="#FFFFFF"
                            />
                          )}
                        </View>
                      </TouchableOpacity>

                      <Text style={[styles.txtAmenities, styles.flexRight]}>
                        AC
                      </Text>
                    </View>
                  </View>
                  {/* amenities row-2-end */}

                  {/* amenities row-3-start */}
                  <View style={styles.amenitiesView}>
                    <View style={[styles.flexRow, styles.flexHalf]}>
                      <TouchableOpacity
                        onPress={() => setIsCharger(!isCharger)}>
                        <View
                          style={[
                            styles.tickView,
                            isCharger && styles.tickViewChecked,
                          ]}>
                          {isCharger && (
                            <FontAwesomeIcon
                              icon={faCheck}
                              size={10}
                              color="#FFFFFF"
                            />
                          )}
                        </View>
                      </TouchableOpacity>

                      <Text style={styles.txtAmenities}>Charger</Text>
                    </View>
                    <View style={[styles.flexRow, styles.flexes]}>
                      <TouchableOpacity
                        onPress={() => setIsFireExt(!isFireExt)}>
                        <View
                          style={[
                            styles.tickView,
                            isFireExt && styles.tickViewChecked,
                          ]}>
                          {isFireExt && (
                            <FontAwesomeIcon
                              icon={faCheck}
                              size={10}
                              color="#FFFFFF"
                            />
                          )}
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.txtAmenities}>Fire Extension</Text>
                    </View>
                  </View>
                  {/* amenities row-3-end */}
                </View>
              )}
              <TouchableOpacity
                onPress={toggleCollapseImages}
                style={styles.userinfoView}>
                <Text style={styles.userinfotext}>Car Image</Text>
                <FontAwesomeIcon
                  icon={isCollapsedImages ? faAngleRight : faAngleDown}
                  color="#222222"
                />
              </TouchableOpacity>
              {!isCollapsedImages && (
                <View>
                  <View style={styles.rowView}>
                    <View style={styles.imgView}>
                      <View style={styles.imgBorder}>
                        <Image
                          source={require('../../assets/images/tinyCar.png')}
                        />
                      </View>
                      <Text style={styles.txtSides}>Front Side</Text>
                    </View>
                    <View style={styles.imgView}>
                      <View style={styles.imgBorder}>
                        <Image
                          source={require('../../assets/images/tinyCar.png')}
                        />
                      </View>
                      <Text style={styles.txtSides}>Back Side</Text>
                    </View>
                    <View style={styles.imgView}>
                      <View style={styles.imgBorder}>
                        <Image
                          source={require('../../assets/images/tinyCar.png')}
                        />
                      </View>
                      <Text style={styles.txtSides}>Right Side</Text>
                    </View>
                    <View style={styles.imgView}>
                      <View style={styles.imgBorder}>
                        <Image
                          source={require('../../assets/images/tinyCar.png')}
                        />
                      </View>
                      <Text style={styles.txtSides}>Interiors</Text>
                    </View>
                  </View>
                </View>
              )}
              <TouchableOpacity
                onPress={toggleCollapseDocuments}
                style={styles.userinfoView}>
                <Text style={styles.userinfotext}>Car Document Details</Text>
                <FontAwesomeIcon
                  icon={isCollapsedDocuments ? faAngleRight : faAngleDown}
                  color="#222222"
                />
              </TouchableOpacity>
              {!isCollapsedDocuments && (
                <View>
                  <View style={styles.docsView}>
                    <View style={styles.docTxtView}>
                      <Text style={styles.txtLabelDoc}>R.C Number & Image</Text>
                      <Text style={styles.txtValueDoc}>KL04AW7777</Text>
                    </View>
                    <View style={styles.imgBorder}>
                      <Image
                        source={require('../../assets/images/tinyCar.png')}
                      />
                    </View>
                  </View>
                  <View style={styles.docsView}>
                    <View style={styles.docTxtView}>
                      <Text style={styles.txtLabelDoc}>
                        F.C Expired date & Image
                      </Text>
                      <Text style={styles.txtValueDoc}>17-04-2024</Text>
                    </View>
                    <View style={styles.imgBorder}>
                      <Image
                        source={require('../../assets/images/tinyCar.png')}
                      />
                    </View>
                  </View>
                  <View style={styles.docsView}>
                    <View style={styles.docTxtView}>
                      <Text style={styles.txtLabelDoc}>
                        Insurance Expired Date & Image
                      </Text>
                      <Text style={styles.txtValueDoc}>20-04-2024</Text>
                    </View>
                    <View style={styles.imgBorder}>
                      <Image
                        source={require('../../assets/images/tinyCar.png')}
                      />
                    </View>
                  </View>
                  <View style={styles.docsView}>
                    <View style={styles.docTxtView}>
                      <Text style={styles.txtLabelDoc}>
                        P.C Expired Date & Image
                      </Text>
                      <Text style={styles.txtValueDoc}>19-04-2024</Text>
                    </View>
                    <View style={styles.imgBorder}>
                      <Image
                        source={require('../../assets/images/tinyCar.png')}
                      />
                    </View>
                  </View>
                  <View style={styles.docsView}>
                    <View style={styles.docTxtView}>
                      <Text style={styles.txtLabelDoc}>
                        Permit Expired Date & Image
                      </Text>
                      <Text style={styles.txtValueDoc}>18-04-2024</Text>
                    </View>
                    <View style={styles.imgBorder}>
                      <Image
                        source={require('../../assets/images/tinyCar.png')}
                      />
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

export default VehicleDetails;
