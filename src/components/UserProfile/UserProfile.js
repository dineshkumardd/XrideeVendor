import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleDown,
  faAngleRight,
  faArrowLeft,
  faAt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../navigation/Routes';

const UserProfile = ({navigation}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.flex}>
      <View style={styles.logoView}>
        <View style={styles.logoInnerView}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={styles.userimg}>
            <FontAwesomeIcon icon={faArrowLeft} color="#FFFFFF" size={20} />
          </TouchableOpacity>
          <Text style={styles.toolbarTxt}>Profile</Text>
        </View>
        <View style={styles.profileCard}>
          <View style={styles.card}>
            <View style={styles.imgCircle}>
              <Image
                style={styles.img}
                resizeMode="contain"
                source={require('../../assets/images/user.png')}
              />
              <TouchableOpacity
                onPress={() => navigation.push(Routes.EditProfile)}
                style={styles.editCircle}>
                <Image
                  source={require('../../assets/images/profileEdit.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.userdetails}>
            <Text style={styles.name}>Name</Text>
            <View style={styles.mailView}>
              <FontAwesomeIcon icon={faAt} color="#FEB200" />
              <Text style={styles.mail}>Email</Text>
            </View>
            <View style={styles.mailView}>
              <FontAwesomeIcon icon={faPhone} color="#FEB200" />

              <Text style={styles.phone}>Phone</Text>
            </View>
          </View>
        </View>
        <View style={styles.menuView}>
          <View style={styles.menuItems}>
            <Text style={styles.menuTxt}>Manage Business</Text>
            <TouchableOpacity
              onPress={() => navigation.push(Routes.ManageVehicleTabs)}
              style={styles.subMenuView}>
              <Image source={require('../../assets/images/m1.png')} />
              <Text style={styles.subMenuTxt}>Manage Vehicles</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.push(Routes.ManageDriver)}
              style={styles.subMenuView}>
              <Image source={require('../../assets/images/m2.png')} />
              <Text style={styles.subMenuTxt}>Manage Driver</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.push(Routes.TrackVehicleTabs)}
              style={styles.subMenuView}>
              <Image source={require('../../assets/images/m3.png')} />
              <Text style={styles.subMenuTxt}>Track Vehicles</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.push(Routes.VehicleStatusTabs)}
              style={styles.subMenuView}>
              <Image source={require('../../assets/images/m4.png')} />
              <Text style={styles.subMenuTxt}>Vehice Status</Text>
            </TouchableOpacity>

            <Text style={styles.menuTxt}>Price & Offer</Text>
            <TouchableOpacity
              onPress={() => navigation.push(Routes.OfferDealTabs)}
              style={styles.subMenuView}>
              <Image source={require('../../assets/images/m5.png')} />
              <Text style={styles.subMenuTxt}>Offer & Deals</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleCollapse}
              style={[styles.subMenuView, styles.space]}>
              <View style={styles.flexrow}>
                <Image source={require('../../assets/images/m6.png')} />
                <Text style={styles.subMenuTxt}>Manage Rates</Text>
              </View>
              <FontAwesomeIcon icon={faAngleDown} color="#000000" />
            </TouchableOpacity>
            {!isCollapsed && (
              <View style={styles.priceView}>
                <TouchableOpacity
                  onPress={() => navigation.push(Routes.BasicPriceTabs)}>
                  <Text style={styles.priceMenuTxt}>Basic Price</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.push(Routes.PeriodicPriceTabs)}>
                  <Text style={styles.priceMenuTxt}>Periodic Price</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.menuTxt}>Trip Details</Text>
            <TouchableOpacity style={styles.subMenuView}>
              <Image source={require('../../assets/images/m7.png')} />
              <Text style={styles.subMenuTxt}>Manage Trip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subMenuView}>
              <Image source={require('../../assets/images/m8.png')} />
              <Text style={styles.subMenuTxt}>Summary</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.push(Routes.Reviews)}
              style={styles.subMenuView}>
              <Image source={require('../../assets/images/m9.png')} />
              <Text style={styles.subMenuTxt}>Review</Text>
            </TouchableOpacity>
            <Text style={styles.menuTxt}>Finance Details</Text>
            <TouchableOpacity
              onPress={() => navigation.push(Routes.Earnings)}
              style={styles.subMenuView}>
              <Image source={require('../../assets/images/m10.png')} />
              <Text style={styles.subMenuTxt}>Earnings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.push(Routes.SubscribeTabs)}
              style={styles.subMenuView}>
              <Image source={require('../../assets/images/m11.png')} />
              <Text style={styles.subMenuTxt}>Subscribe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subMenuView}>
              <Image source={require('../../assets/images/m12.png')} />
              <Text style={styles.subMenuTxt}>Wallet</Text>
            </TouchableOpacity>
            <Text style={styles.menuTxt}>Support</Text>
            <TouchableOpacity
              onPress={() => navigation.push(Routes.Language)}
              style={[styles.subMenuView, styles.space]}>
              <View style={styles.flexrow}>
                <Image source={require('../../assets/images/m13.png')} />
                <Text style={styles.subMenuTxt}>App Language</Text>
              </View>
              <View style={styles.flexrow}>
                <Text style={styles.subMenuTxt}>English(US)</Text>
                <FontAwesomeIcon icon={faAngleRight} color="#000000" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
