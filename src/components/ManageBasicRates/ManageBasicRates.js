import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faSearch} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import FloatingLabelInput from '../FloatingLabelInput/FloatingLabelInput ';

const ManageBasicRates = ({navigation}) => {
  const [localTrip, setLocalTrip] = useState('');
  const [oneWay, setOneWay] = useState('');
  const [outStation, setOutStation] = useState('');
  const [localRental, setLocalRental] = useState('');

  const [ltErr, setLtErr] = useState(false);
  const [ltErrMsg, setLtErrMsg] = useState('');

  const [owErr, setOwErr] = useState(false);
  const [owErrMsg, setOwErrMsg] = useState('');

  const [osErr, setOsErr] = useState(false);
  const [osErrMsg, setOsErrMsg] = useState('');

  const [lrErr, setLrErr] = useState(false);
  const [lrErrMsg, setLrErrMsg] = useState('');
  const regex = /\s/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  let vehicle = 'Lc';

  const setLocalTripValue = value => {
    setLocalTrip(value);
    if (isValid(value)) {
      setLtErr(false);
    }
  };

  const setoneWayValue = value => {
    setOneWay(value);
    if (isValid(value)) {
      setLtErr(false);
    }
  };

  const setOutStationValue = value => {
    setOutStation(value);
    if (isValid(value)) {
      setLtErr(false);
    }
  };

  const setlocalRentalValue = value => {
    setLocalRental(value);
    if (isValid(value)) {
      setLtErr(false);
    }
  };

  const isValid = value => {
    let num = Number(value);
    if (regex.test(value)) {
      setLtErr(true);
      setLtErrMsg('Found Whitespaces!.');
      return false;
    } else if (specialCharRegex.test(value)) {
      setLtErr(true);
      setLtErrMsg('Found Specail Characters!.');
      return false;
    } else if (num > 100) {
      setLtErr(true);
      setLtErrMsg('Percent should not be greater than 100!.');
      return false;
    } else {
      setLtErr(false);
      return true;
    }
  };

  const submit = () => {
    if (!isValid(localTrip)) {
    } else if (!isValid(oneWay)) {
    } else if (!isValid(outStation)) {
    } else if (!isValid(localRental)) {
    } else {
    }
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
            <Text style={styles.toolbarTxt}>Manage Rates</Text>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.headStyle}>Rental Car</Text>
        <View style={styles.linearStyle}>
          <View style={styles.mainBorderStyle}>
            {vehicle === 'Car' && (
              <View style={styles.tripDetails}>
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Local trip</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Km"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                    <FloatingLabelInput
                      maxLength={3}
                      label="Min Charge"
                      onChangeText={value => setLocalTripValue(value)}
                    />
                  </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Rental trip</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Km"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                    <FloatingLabelInput
                      maxLength={3}
                      label="Min Charge"
                      onChangeText={value => setLocalTripValue(value)}
                    />
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Out Station</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Km"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>One Way</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Km"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}

            {vehicle === 'Bike' && (
              <View style={styles.tripDetails}>
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Local trip</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Grocery Delivery</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                    <FloatingLabelInput
                      maxLength={3}
                      label="Min Charge"
                      onChangeText={value => setLocalTripValue(value)}
                    />
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Food Delivery</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Other Delivery</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}

            {vehicle === 'Auto' && (
              <View style={styles.tripDetails}>
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Local trip</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Grocery Delivery</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}

            {vehicle === 'Lc' && (
              <View style={styles.tripDetails}>
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Local trip</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Out Station</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>One Way</Text>

                  <View style={{flex: 0.8}}>
                    <View style={styles.flexrow}>
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Charge"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Min Mins"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                      <FloatingLabelInput
                        maxLength={3}
                        label="Per Min"
                        onChangeText={value => setLocalTripValue(value)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
          {ltErr && (
            <Text Text style={[styles.errorView, styles.errorStyle]}>
              {ltErrMsg}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btnCancel}>
          <Text style={styles.txtCancel}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => submit()} style={styles.btnSubmit}>
          <Text style={styles.txtSubmit}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManageBasicRates;
