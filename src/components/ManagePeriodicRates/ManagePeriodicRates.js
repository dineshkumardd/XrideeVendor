import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faSearch} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import FloatingLabelInput from '../FloatingLabelInput/FloatingLabelInput ';
import {G, Path, Svg} from 'react-native-svg';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

const ManagePeriodicRates = ({navigation, route}) => {
  let vehicle = route.params?.data;
  let vendorType = 'vendor';
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

  const [isDays, setIsDays] = useState(true);
  const [isHrs, setIsHrs] = useState(false);
  const regex = /\s/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  const [dateList, setDateList] = useState([
    {id: 1, name: 'Today'},
    {id: 2, name: 'Yesterday'},
  ]);

  const handleSelection = (itemValue, itemIndex) => {
    if (itemIndex !== 0) {
      const selectedItemObject = dateList.find(item => item.id === itemValue);
      //setSelectedId(selectedItemObject.id);
    } else {
      //setSelectedId(0);
    }
  };

  /* Date  */

  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);
  const [startDateValue, setStartDateValue] = useState('');
  const [startTimeValue, setStartTimeValue] = useState('');
  const [endTimeValue, setEndTimeValue] = useState('');
  const [endDateValue, setEndDateValue] = useState('');

  let endValue = '';
  const onChangeSd = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowStartDate(false);
    setDate(currentDate);
    setStartDateValue(selectedDate.toLocaleDateString());
  };

  const onChangeEd = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowEndDate(false);
    setEndDate(currentDate);
    setEndDateValue(selectedDate.toLocaleDateString());
  };

  const onChangeSt = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowStartTime(false);
    setStartTime(currentDate);
    setStartTimeValue(selectedDate.toLocaleTimeString());

    if (selectedDate >= endTime) {
      // Set end time to be one hour ahead of the selected start time
      const newEndTime = new Date(selectedDate);
      newEndTime.setHours(newEndTime.getHours() + 1);
      setEndTime(newEndTime);
      setEndTimeValue(newEndTime.toLocaleTimeString());
    }
  };

  const onChangeEt = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowEndTime(false);

    setEndTime(currentDate);
    setEndTimeValue(currentDate.toLocaleTimeString());
  };

  const showMode = currentMode => {
    setMode(currentMode);
  };

  const showStartDatepicker = () => {
    setShowStartDate(true);
  };

  const showEndDatepicker = () => {
    setShowEndDate(true);
  };

  const showTimepicker = () => {
    setShowStartTime(true);
  };

  const showEndTimepicker = () => {
    setShowEndTime(true);
  };

  /* Date - End */
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
      navigation.pop();
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
            <Text style={styles.toolbarTxt}>Periodic Price</Text>
          </View>
        </View>
      </View>
      {showStartDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={false}
          onChange={onChangeSd}
        />
      )}

      {showEndDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={endDate}
          mode="date"
          is24Hour={false}
          onChange={onChangeEd}
        />
      )}

      {showStartTime && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startTime}
          mode={'time'}
          is24Hour={false}
          onChange={onChangeSt}
        />
      )}

      {showEndTime && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startTime}
          mode={'time'}
          is24Hour={false}
          onChange={onChangeEt}
        />
      )}
      <View style={styles.listContainer}>
        <View style={styles.linearStyle}>
          <View style={styles.mainBorderStyle}>
            <Text style={styles.headStyle}>Select Your Vehicle</Text>
            <View
              style={
                Platform.OS === 'ios' ? styles.pickerviewIn : styles.pickerview
              }>
              <RNPickerSelect
                style={{
                  chevronUp: {display: 'none'},
                  chevronDown: {display: 'none'},
                  modalViewBottom: {backgroundColor: '#FFFFFF'},
                  /* viewContainer: styles.pickerStyle, */
                  iconContainer: {
                    right: 28,
                    backgroundColor: '#FFFFFF',
                    top: 10,
                  },
                  inputAndroid: {
                    borderRadius: 10,
                    elevation: 10,
                    backgroundColor: '#FFFFFF',
                    paddingVertical: 2,
                    paddingHorizontal: 20,
                    color: '#000000',
                  },
                }}
                onValueChange={handleSelection}
                items={dateList.map(item => ({
                  label: item.name,
                  value: item.id,
                  key: item.id,
                }))}
                useNativeAndroidPickerStyle={false}
                placeholder={{
                  label: 'Select Vehicle',
                  value: 0,
                  color: '#00000050',
                }}
                Icon={() => {
                  return (
                    <Svg
                      width={11}
                      height={6}
                      viewBox="0 0 11 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <Path
                        opacity={0.8}
                        d="M10 1L5.5 5 1 1"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  );
                }}
              />

              {/* <View
                    style={{
                      position: 'absolute',
                      alignSelf: 'flex-end',
                      backgroundColor: '#FFFFFF',
                      height: '100%',
                      right: 25,
                      justifyContent: 'center',
                    }}>

                  </View> */}
            </View>

            {vehicle === 'Car' && (
              <View style={styles.tripDetails}>
                <View style={styles.itemStyle}>
                  <View style={styles.radioView}>
                    <Pressable
                      onPress={() => {
                        setIsDays(true);
                        setIsHrs(false);
                      }}
                      style={styles.radio}>
                      <View style={styles.outerCircle}>
                        {isDays ? <View style={styles.innerCircle} /> : null}
                      </View>
                      <Text> Days</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        setIsDays(false);
                        setIsHrs(true);
                      }}
                      style={styles.radio}>
                      <View style={styles.outerCircle}>
                        {isHrs ? <View style={styles.innerCircle} /> : null}
                      </View>
                      <Text> Hrs</Text>
                    </Pressable>
                  </View>
                </View>
                {isDays ? (
                  <View style={styles.itemStyle}>
                    <Pressable
                      onPress={showStartDatepicker}
                      style={styles.dateView}>
                      <Text style={styles.txtFrm}>
                        {startDateValue === ''
                          ? 'From'
                          : date.toLocaleDateString()}
                      </Text>
                      <Svg
                        width={13}
                        height={14}
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <Path
                          opacity={0.8}
                          d="M11.7 1.273h-.65V0h-1.3v1.273h-6.5V0h-1.3v1.273H1.3c-.715 0-1.3.572-1.3 1.272v10.182C0 13.427.585 14 1.3 14h10.4c.715 0 1.3-.573 1.3-1.273V2.545c0-.7-.585-1.272-1.3-1.272zm0 11.454H1.3V4.455h10.4v8.272z"
                          fill="#000"
                        />
                      </Svg>
                    </Pressable>
                    <Pressable
                      onPress={showEndDatepicker}
                      style={styles.dateView}>
                      <Text>
                        {' '}
                        {endDateValue === ''
                          ? 'To'
                          : endDate.toLocaleDateString()}
                      </Text>
                      <Svg
                        width={13}
                        height={14}
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <Path
                          opacity={0.8}
                          d="M11.7 1.273h-.65V0h-1.3v1.273h-6.5V0h-1.3v1.273H1.3c-.715 0-1.3.572-1.3 1.272v10.182C0 13.427.585 14 1.3 14h10.4c.715 0 1.3-.573 1.3-1.273V2.545c0-.7-.585-1.272-1.3-1.272zm0 11.454H1.3V4.455h10.4v8.272z"
                          fill="#000"
                        />
                      </Svg>
                    </Pressable>
                  </View>
                ) : (
                  <View style={styles.itemStyle}>
                    <Pressable onPress={showTimepicker} style={styles.dateView}>
                      <Text style={styles.txtFrm}>
                        {' '}
                        {startTimeValue === ''
                          ? 'From'
                          : startTime.toLocaleTimeString()}
                      </Text>
                      <Svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <G opacity={0.8} fill="#000">
                          <Path d="M0 7.332v-.636c.013-.4.07-.798.168-1.186a6.783 6.783 0 011.058-2.417 6.718 6.718 0 011.896-1.822A6.798 6.798 0 016.244 0h1.302A7.16 7.16 0 019.8.622a7.3 7.3 0 012.618 1.992A6.74 6.74 0 0114 6.258v1.159c-.015.4-.071.798-.168 1.186a6.949 6.949 0 01-2.162 3.693A6.843 6.843 0 017.77 14H6.188a6.704 6.704 0 01-2.072-.593A7.163 7.163 0 011.4 11.302 6.716 6.716 0 010 7.784v-.452zM7.168 1.06a5.556 5.556 0 00-2.296.452A6.028 6.028 0 001.75 4.464a5.476 5.476 0 00-.35 4.154c.24.835.656 1.608 1.219 2.266a5.996 5.996 0 002.043 1.548c1.134.56 2.43.696 3.654.381a5.951 5.951 0 003.682-2.627c.573-.886.897-1.91.938-2.967a4.915 4.915 0 00-.168-1.413 5.965 5.965 0 00-2.408-3.659A5.748 5.748 0 007.168 1.06z" />
                          <Path d="M7.49 6.484h3.486a.557.557 0 01.546.452.553.553 0 01-.504.622H7a.57.57 0 01-.543-.354.584.584 0 01-.045-.225V2.26a1.113 1.113 0 010-.198.51.51 0 01.464-.374.56.56 0 01.571.572v4.238l.043-.014z" />
                        </G>
                      </Svg>
                    </Pressable>
                    <Pressable
                      onPress={showEndTimepicker}
                      style={styles.dateView}>
                      <Text>
                        {' '}
                        {endTimeValue === ''
                          ? 'To'
                          : endTime.toLocaleTimeString()}
                      </Text>
                      <Svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <G opacity={0.8} fill="#000">
                          <Path d="M0 7.332v-.636c.013-.4.07-.798.168-1.186a6.783 6.783 0 011.058-2.417 6.718 6.718 0 011.896-1.822A6.798 6.798 0 016.244 0h1.302A7.16 7.16 0 019.8.622a7.3 7.3 0 012.618 1.992A6.74 6.74 0 0114 6.258v1.159c-.015.4-.071.798-.168 1.186a6.949 6.949 0 01-2.162 3.693A6.843 6.843 0 017.77 14H6.188a6.704 6.704 0 01-2.072-.593A7.163 7.163 0 011.4 11.302 6.716 6.716 0 010 7.784v-.452zM7.168 1.06a5.556 5.556 0 00-2.296.452A6.028 6.028 0 001.75 4.464a5.476 5.476 0 00-.35 4.154c.24.835.656 1.608 1.219 2.266a5.996 5.996 0 002.043 1.548c1.134.56 2.43.696 3.654.381a5.951 5.951 0 003.682-2.627c.573-.886.897-1.91.938-2.967a4.915 4.915 0 00-.168-1.413 5.965 5.965 0 00-2.408-3.659A5.748 5.748 0 007.168 1.06z" />
                          <Path d="M7.49 6.484h3.486a.557.557 0 01.546.452.553.553 0 01-.504.622H7a.57.57 0 01-.543-.354.584.584 0 01-.045-.225V2.26a1.113 1.113 0 010-.198.51.51 0 01.464-.374.56.56 0 01.571.572v4.238l.043-.014z" />
                        </G>
                      </Svg>
                    </Pressable>
                  </View>
                )}

                {vendorType === 'vendor' ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <View style={styles.itemSelfStyle}>
                      <Text style={styles.labelTxt}>Self Drive</Text>

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
                  </>
                )}
              </View>
            )}

            {/* {data === 'Bike' && (
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
            )} */}
          </View>
          {ltErr && (
            <Text Text style={[styles.errorView, styles.errorStyle]}>
              {ltErrMsg}
            </Text>
          )}

          {/* {bikeErr && (
            <Text Text style={[styles.errorView, styles.errorStyle]}>
              {bikeErrMsg}
            </Text>
          )}

          {autoErr && (
            <Text Text style={[styles.errorView, styles.errorStyle]}>
              {autoErrMsg}
            </Text>
          )} */}
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={styles.btnCancel}>
              <Text style={styles.txtCancel}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                route === 'Car' && submit();
                /* data === 'Auto' && submitAuto();
                data === 'Bike' && submitBike(); */
              }}
              style={styles.btnSubmit}>
              <Text style={styles.txtSubmit}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ManagePeriodicRates;
