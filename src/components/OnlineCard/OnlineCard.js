import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const OnlineCard = () => {
  return (
    <View style={styles.onlineCard}>
      <View style={{width: '90%', flex: 1}}>
        <View style={styles.cardCount}>
          <Text style={styles.txtvehiclecount}>2</Text>
          <Text style={styles.txtOnlineWait}>Waiting For Customer</Text>
        </View>
        <View style={styles.cardCount}>
          <Text style={styles.txtvehiclecount}>5</Text>
          <Text style={styles.txtOnlinetrip}>On Trip</Text>
        </View>
        <View style={styles.cardCount}>
          <Text style={styles.txtvehiclecount}>1</Text>
          <Text style={styles.txtOffline}>Offline</Text>
        </View>
      </View>
      {/* <View style={styles.blueHeader}>
        <Text style={styles.txtCardTitle}>Online Vehicle</Text>
        <Text style={styles.txtCardTitle}>Car</Text>
      </View> */}
    </View>
  );
};

export default OnlineCard;
