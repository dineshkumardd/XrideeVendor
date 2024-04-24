import {
  View,
  Text,
  Image,
  Pressable,
  Switch,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import styles from './styles';

const OffersnDealsDialog = ({isVisible, onClose, data}) => {
  const [localTrip, setLocalTrip] = useState('');
  const [oneWay, setOneWay] = useState('');
  const [outStation, setOutStation] = useState('');
  const [localRental, setLocalRental] = useState('');

  const [bikeInpOne, setBikeInpOne] = useState('');
  const [bikeInpTwo, setBikeInpTwo] = useState('');
  const [bikeInpThree, setBikeInpThree] = useState('');
  const [bikeInpFour, setBikeInpFour] = useState('');

  const [autoInpOne, setAutoInpOne] = useState('');
  const [autoInpTwo, setAutoInpTwo] = useState('');
  const [autoInpThree, setAutoInpThree] = useState('');
  const [autoInpFour, setAutoInpFour] = useState('');

  const [ltErr, setLtErr] = useState(false);
  const [ltErrMsg, setLtErrMsg] = useState('');

  const [bikeErr, setBikeErr] = useState(false);
  const [bikeErrMsg, setBikeErrMsg] = useState('');

  const [autoErr, setAutoErr] = useState(false);
  const [autoErrMsg, setAutoErrMsg] = useState('');

  const [lrErr, setLrErr] = useState(false);
  const [lrErrMsg, setLrErrMsg] = useState('');
  const regex = /\s/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

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

  const setBikeOneValue = value => {
    setBikeInpOne(value);
    if (isValidBike(value)) {
      setBikeErr(false);
    }
  };

  const setBikeTwoValue = value => {
    setBikeInpTwo(value);
    if (isValidBike(value)) {
      setBikeErr(false);
    }
  };

  const setBikeThreeValue = value => {
    setBikeInpThree(value);
    if (isValidBike(value)) {
      setBikeErr(false);
    }
  };

  const setBikeFourValue = value => {
    setBikeInpFour(value);
    if (isValidBike(value)) {
      setBikeErr(false);
    }
  };

  const setAutoOneValue = value => {
    setAutoInpOne(value);
    if (isValidAuto(value)) {
      setAutoErr(false);
    }
  };

  const setAutoTwoValue = value => {
    setAutoInpTwo(value);
    if (isValidAuto(value)) {
      setAutoErr(false);
    }
  };

  const setAutoThreeValue = value => {
    setAutoInpThree(value);
    if (isValidAuto(value)) {
      setAutoErr(false);
    }
  };

  const setAutoFourValue = value => {
    setAutoInpFour(value);
    if (isValidAuto(value)) {
      setAutoErr(false);
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

  const isValidBike = value => {
    let num = Number(value);
    if (regex.test(value)) {
      setBikeErr(true);
      setBikeErrMsg('Found Whitespaces!.');
      return false;
    } else if (specialCharRegex.test(value)) {
      setBikeErr(true);
      setBikeErrMsg('Found Specail Characters!.');
      return false;
    } else if (num > 100) {
      setBikeErr(true);
      setBikeErrMsg('Percent should not be greater than 100!.');
      return false;
    } else {
      setBikeErr(false);
      return true;
    }
  };

  const isValidAuto = value => {
    let num = Number(value);
    if (regex.test(value)) {
      setAutoErr(true);
      setAutoErrMsg('Found Whitespaces!.');
      return false;
    } else if (specialCharRegex.test(value)) {
      setAutoErr(true);
      setAutoErrMsg('Found Specail Characters!.');
      return false;
    } else if (num > 100) {
      setAutoErr(true);
      setAutoErrMsg('Percent should not be greater than 100!.');
      return false;
    } else {
      setAutoErr(false);
      return true;
    }
  };

  const submit = () => {
    if (!isValid(localTrip)) {
    } else if (!isValid(oneWay)) {
    } else if (!isValid(outStation)) {
    } else if (!isValid(localRental)) {
    } else {
      onClose();
    }
  };

  const submitBike = () => {
    if (!isValidBike(bikeInpOne)) {
    } else if (!isValidBike(bikeInpTwo)) {
    } else if (!isValidBike(bikeInpThree)) {
    } else if (!isValidBike(bikeInpFour)) {
    } else {
      onClose();
    }
  };
  const submitAuto = () => {
    if (!isValidAuto(autoInpOne)) {
    } else if (!isValidAuto(autoInpTwo)) {
    } else if (!isValidAuto(autoInpThree)) {
    } else if (!isValidAuto(autoInpFour)) {
    } else {
      onClose();
    }
  };
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={styles.modalStyle}
      backdropOpacity={0}>
      <View style={styles.modalContainer}>
        <View style={styles.linearStyle}>
          <View style={styles.mainBorderStyle}>
            <Text style={styles.headStyle}>Offers & Deals</Text>
            {data === 'Car' && (
              <View style={styles.tripDetails}>
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Local trip</Text>

                  <View style={styles.flexrow}>
                    <TextInput
                      style={styles.input}
                      maxLength={3}
                      placeholder="00"
                      onChangeText={value => setLocalTripValue(value)}
                    />
                    <View style={styles.percentView}>
                      <Text style={styles.percent}>%</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>One way trip</Text>

                  <View style={styles.flexrow}>
                    <TextInput
                      style={styles.input}
                      maxLength={3}
                      placeholder="00"
                      onChangeText={value => setoneWayValue(value)}
                    />
                    <View style={styles.percentView}>
                      <Text style={styles.percent}>%</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Out Station trip</Text>

                  <View style={styles.flexrow}>
                    <TextInput
                      style={styles.input}
                      maxLength={3}
                      placeholder="00"
                      onChangeText={value => setOutStationValue(value)}
                    />
                    <View style={styles.percentView}>
                      <Text style={styles.percent}>%</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Local Rental trip</Text>

                  <View style={styles.flexrow}>
                    <TextInput
                      style={styles.input}
                      maxLength={3}
                      placeholder="00"
                      onChangeText={value => setlocalRentalValue(value)}
                    />
                    <View style={styles.percentView}>
                      <Text style={styles.percent}>%</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

            {data === 'Bike' && (
              <View style={styles.tripDetails}>
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Local trip</Text>

                  <View style={styles.flexrow}>
                    <TextInput
                      style={styles.input}
                      maxLength={3}
                      placeholder="00"
                      onChangeText={value => setBikeOneValue(value)}
                    />
                    <View style={styles.percentView}>
                      <Text style={styles.percent}>%</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Food Delivery</Text>

                  <View style={styles.flexrow}>
                    <TextInput
                      style={styles.input}
                      maxLength={3}
                      placeholder="00"
                      onChangeText={value => setBikeTwoValue(value)}
                    />
                    <View style={styles.percentView}>
                      <Text style={styles.percent}>%</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Grocery Delivery</Text>

                  <View style={styles.flexrow}>
                    <TextInput
                      style={styles.input}
                      maxLength={3}
                      placeholder="00"
                      onChangeText={value => setBikeThreeValue(value)}
                    />
                    <View style={styles.percentView}>
                      <Text style={styles.percent}>%</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Other Delivery</Text>

                  <View style={styles.flexrow}>
                    <TextInput
                      style={styles.input}
                      maxLength={3}
                      placeholder="00"
                      onChangeText={value => setBikeFourValue(value)}
                    />
                    <View style={styles.percentView}>
                      <Text style={styles.percent}>%</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            {data === 'Auto' && (
              <View style={styles.tripDetails}>
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Local trip</Text>

                  <View style={styles.flexrow}>
                    <TextInput
                      style={styles.input}
                      maxLength={3}
                      placeholder="00"
                      onChangeText={value => setAutoOneValue(value)}
                    />
                    <View style={styles.percentView}>
                      <Text style={styles.percent}>%</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Food Delivery</Text>

                  <View style={styles.flexrow}>
                    <TextInput
                      style={styles.input}
                      maxLength={3}
                      placeholder="00"
                      onChangeText={value => setAutoTwoValue(value)}
                    />
                    <View style={styles.percentView}>
                      <Text style={styles.percent}>%</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Grocery Delivery</Text>

                  <View style={styles.flexrow}>
                    <TextInput
                      style={styles.input}
                      maxLength={3}
                      placeholder="00"
                      onChangeText={value => setAutoThreeValue(value)}
                    />
                    <View style={styles.percentView}>
                      <Text style={styles.percent}>%</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.divider} />
                <View style={styles.itemStyle}>
                  <Text style={styles.labelTxt}>Other Delivery</Text>

                  <View style={styles.flexrow}>
                    <TextInput
                      style={styles.input}
                      maxLength={3}
                      placeholder="00"
                      onChangeText={value => setAutoFourValue(value)}
                    />
                    <View style={styles.percentView}>
                      <Text style={styles.percent}>%</Text>
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

          {bikeErr && (
            <Text Text style={[styles.errorView, styles.errorStyle]}>
              {bikeErrMsg}
            </Text>
          )}

          {autoErr && (
            <Text Text style={[styles.errorView, styles.errorStyle]}>
              {autoErrMsg}
            </Text>
          )}
          <View style={styles.row}>
            <TouchableOpacity onPress={onClose} style={styles.btnCancel}>
              <Text style={styles.txtCancel}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                data === 'Car' && submit();
                data === 'Auto' && submitAuto();
                data === 'Bike' && submitBike();
              }}
              style={styles.btnSubmit}>
              <Text style={styles.txtSubmit}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OffersnDealsDialog;
