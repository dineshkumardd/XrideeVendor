import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './styles';
import {Defs, G, Path, Svg} from 'react-native-svg';
import ReviewStars from '../ReviewStars/ReviewStars';

const TripDetailsDialog = ({isVisible, onClose, data}) => {
  console.log(data);
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
            <Text style={styles.headStyle}>Trip Details</Text>
            <View style={styles.tripDetails}>
              <View style={styles.divider} />

              <View style={styles.itemStyle}>
                <Text style={styles.labelTxt}>
                  Booking ID <Text style={styles.valueTxt}>XR0100001</Text>
                </Text>
                <ReviewStars count={2} size={10} />
              </View>
              <View style={styles.addressView}>
                <Text style={styles.startAddress}>
                  Canteen Street,White town,puducherry :
                </Text>
                <View style={styles.icontime}>
                  {data === 'Car' && (
                    <Image
                      source={require('../../assets/images/tinyCar.png')}
                    />
                  )}
                  {data === 'Bike' && (
                    <Svg
                      width={30}
                      height={19}
                      viewBox="0 0 30 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <Path
                        opacity={0.8}
                        d="M2.811 8.514C3.5 7.574 4.44 7.015 5.59 6.877c1.437-.172 2.653.31 3.636 1.376l2.342-1.074c-.106-.058-.177-.098-.25-.135L5.017 3.8a.748.748 0 01-.22-.155c-.476-.542-.948-1.088-1.42-1.634-.038-.042-.066-.092-.118-.168l3.867.136c.068.184.121.359.196.524.231.51.518.972 1.094 1.147 1.173.355 2.375.51 3.599.51.109 0 .242-.068.325-.146a84.803 84.803 0 001.557-1.506c.369-.367.774-.548 1.316-.46 1.352.214 2.711.387 4.066.582.385.055.768.13 1.181.2L19.632.705a.638.638 0 01.058-.042l.877-.45c.576-.295.579-.298 1.108.088.742.541 1.352 1.22 1.917 1.936.642.814 1.254 1.65 1.873 2.468-.28.459-.532.88-.797 1.292a.5.5 0 01-.252.19c-.57.178-1.055.498-1.521.87l.164.377c.95-.253 1.863-.198 2.738.219a3.801 3.801 0 011.901 1.99c.66 1.532.21 3.401-1.08 4.471a3.85 3.85 0 01-4.643.215 3.754 3.754 0 01-1.463-1.95c-.355-1.07-.246-2.111.252-3.124-.313.382-.606.772-.893 1.167a.255.255 0 00-.026.159c.03.329.066.657.098.985l.156 1.66h-.604c-2.882.013-5.765.027-8.647.043-.164 0-.21-.049-.23-.206-.06-.48-.139-.959-.21-1.437-.022-.138-.052-.276-.077-.414l-.091-.014c-.162 1.546-.87 2.743-2.255 3.445-1.385.703-2.78.633-4.092-.202-2.012-1.282-2.498-3.987-1.082-5.926zm19.48-.961l-.343.386c.254-.068.4-.2.343-.386zm-.356 4.502c.515 1.21 1.805 1.784 3.034 1.352 1.16-.407 1.833-1.707 1.497-2.89-.354-1.247-1.576-1.997-2.83-1.714.047.117.08.237.143.34.023.038.116.05.175.046 1.029-.075 1.916.567 2.108 1.564.15.782-.084 1.454-.72 1.942s-1.343.556-2.053.203c-.695-.345-1.062-.934-1.08-1.722a1.881 1.881 0 01.646-1.495c.277-.253.28-.248.069-.581-.977.481-1.446 1.882-.99 2.955zm-18.323-.347c.361 1.206 1.506 1.993 2.729 1.876 1.171-.113 2.215-1.062 2.324-2.142-.365.053-.711.093-1.053.158-.077.014-.156.101-.203.175-.333.525-.94.814-1.553.696-.633-.122-1.052-.505-1.213-1.138-.265-1.042.616-2.01 1.68-1.87a.771.771 0 00.377-.057c.341-.141.672-.303 1.013-.459-.517-.548-1.763-.852-2.796-.307-1.112.588-1.664 1.872-1.305 3.068z"
                        fill="#4D4D4D"
                      />
                      <G filter="url(#filter0_f_461_943)">
                        <Path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 15.605c0 .275 5.839.49 12.997.49 7.157 0 13.002-.215 13.002-.49 0-.266-5.839-.482-13.002-.482-7.164 0-12.997.216-12.997.482z"
                          fill="#000"
                        />
                      </G>
                      <Defs />
                    </Svg>
                  )}
                  {data === 'Auto' && (
                    <Svg
                      width={28}
                      height={20}
                      viewBox="0 0 28 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <Path
                        d="M27.367 15.238c-.13-.596-.332-1.165-.81-1.567-.28-.235-.599-.452-.939-.58-.277-.101-.328-.228-.274-.47.013-.065.018-.132.03-.232-1.017-.076-1.927.157-2.703.802-1.017.845-1.299 2.012-1.363 3.292h.698l.062-.58c.196.892.649 1.568 1.457 1.984 1.56.806 3.459-.125 3.79-1.85.008-.049.031-.092.048-.139.004-.22.004-.439.004-.66zm-2.643 2.238a1.935 1.935 0 01-1.928-1.94c.009-1.054.88-1.92 1.928-1.918 1.06.002 1.939.89 1.93 1.945a1.932 1.932 0 01-1.93 1.913z"
                        fill="#4D4D4D"
                      />
                      <Path
                        d="M21.909 1.414h1.257v-1.4C23.08.009 22.99 0 22.9 0 17.18 0 11.458 0 5.738.002c-2.162 0-3.895 1.391-4.287 3.442a4.789 4.789 0 00-.079.908c-.007 2.6-.005 5.196-.002 7.794.002 1.467.633 2.74 1.776 3.546-.078-1.536.495-2.719 1.834-3.465.814-.455 1.691-.524 2.58-.272 1.646.462 3.027 2.289 2.3 4.537h11.282c.044-.393.067-.788.136-1.176.321-1.772 1.617-2.913 3.41-3.026.118-.007.24-.044.353-.023.363.069.513-.148.64-.428.284-.621.354-1.277.33-1.952-.043-1.337-.45-2.587-.87-3.841-.552-1.643-1.513-3.01-2.738-4.212-.136-.134-.29-.25-.494-.42zM11.197 15.27c-.025-.504-.016-.989-.079-1.463-.245-1.818-1.083-3.201-2.903-3.827-.19-.065-.188-.178-.188-.326.003-2.403.003-4.807.003-7.21v-.28h6.23v13.108c-1.033-.002-2.044-.002-3.063-.002zm4.807-13.087c.042-.016.058-.028.072-.028 1.074-.002 2.148-.007 3.225-.002.074 0 .161.046.22.097.507.432.907.956 1.228 1.539.645 1.168 1.014 2.43 1.227 3.737.127.783.208 1.573.31 2.361-.192.072-.34.116-.474.183-.294.147-.6.281-.864.47-1.171.842-1.663 2.052-1.8 3.434-.041.425-.007.857-.007 1.282h-3.137V2.183z"
                        fill="#4D4D4D"
                      />
                      <Path
                        d="M6.697 12.475a2.799 2.799 0 00-2.798 2.813 2.802 2.802 0 005.602-.01 2.796 2.796 0 00-2.804-2.803zm2.095 2.804c0 1.155-.947 2.1-2.1 2.093a2.103 2.103 0 01-2.086-2.084 2.098 2.098 0 012.086-2.107 2.1 2.1 0 012.1 2.098zM26.998 11.474V9.927c-.536-.016-.977.344-.97.783.007.436.43.778.97.764z"
                        fill="#4D4D4D"
                      />
                      <G filter="url(#filter0_f_464_1011)">
                        <Path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.002 19C21.161 19 27 18.778 27 18.496c0-.273-5.84-.496-12.998-.496C6.838 18 1 18.223 1 18.496c0 .283 5.84.504 13.004.504h-.002z"
                          fill="#000"
                        />
                      </G>
                      <Defs />
                    </Svg>
                  )}
                  <Text style={styles.timeTxt}>00 Hr 00 Min</Text>
                </View>
                <Text style={styles.endAddress}>
                  Canteen Street,White town,puducherry :
                </Text>
              </View>
              <View style={styles.itemStyle}>
                <Text style={styles.labelTxt}>15 Apr 10:57 AM</Text>
                <Text style={styles.labelTxt}>15 Apr 04:50 PM</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.itemStyle}>
                <Text style={styles.labelDuty}>Duty Type</Text>
                <Text style={styles.labelDuty}>Round Trip</Text>
              </View>
              <View style={styles.divider} />
              <Text style={styles.txtFareBreak}>Fare BreakUp</Text>
              <View style={styles.fareBreak}>
                <View style={styles.fareStyle}>
                  <Text style={styles.fareTxt}>Actual Km (300Km)</Text>
                </View>
                <View style={styles.fareStyle}>
                  <Text style={styles.fareTxt}>Extra Minutes (15Mins)</Text>
                </View>
                <View style={styles.fareStyle}>
                  <Text style={styles.fareTxt}>Per Kilometer (10 x 300)</Text>
                  <Text style={styles.fareTxt}>3000</Text>
                </View>
                <View style={styles.fareStyle}>
                  <Text style={styles.fareTxt}>Per Minutes (1.9 x 0)</Text>
                  <Text style={styles.fareTxt}>0</Text>
                </View>
                <View style={styles.fareStyle}>
                  <Text style={styles.fareTxt}>Discount (10%)</Text>
                  <Text style={styles.fareTxt}>-300</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.fareStyle}>
                  <Text style={styles.fareTxtDark}>Grand Total</Text>
                  <Text style={styles.fareTxtDark}>2700</Text>
                </View>
                <View style={styles.divider} />
              </View>

              <View style={styles.divider} />
              <Text style={styles.txtMode}>Mode Of Payment</Text>
              <View style={styles.itemStyle}>
                <Text style={styles.txtPayment}>Xridee 1000</Text>
                <Text style={styles.txtPayment}>Partner 1500</Text>
              </View>
              <Pressable style={styles.btnGotit} onPress={onClose}>
                <Text style={styles.txtGotit}>GOT IT</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TripDetailsDialog;
/*  */
