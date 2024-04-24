import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  onlineCard: {
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    flex: 1,
  },
  txtOnlineWait: {
    color: '#222222',
    fontSize: scaleFontSize(10),
    lineHeight: verticalScale(12.1),
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    paddingStart: horizontalScale(5),
  },
  txtOnlinetrip: {
    color: '#128807',
    fontSize: scaleFontSize(10),
    lineHeight: verticalScale(12.1),
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    paddingStart: horizontalScale(5),
  },
  txtOffline: {
    color: '#D92507',
    fontSize: scaleFontSize(10),
    lineHeight: verticalScale(12.1),
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    paddingStart: horizontalScale(5),
  },
  blueHeader: {
    backgroundColor: '#013277',
    borderTopLeftRadius: horizontalScale(15),
    borderTopRightRadius: horizontalScale(15),
    width: '100%',
  },
  txtvehiclecount: {
    backgroundColor: '#FEB200',
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 5,
    color: '#FFFFFF',
    fontSize: 12,
  },
  cardCount: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: verticalScale(6),
  },
  txtCardTitle: {
    color: '#FFFFFF',
    backgroundColor: '#013277',
    borderTopLeftRadius: horizontalScale(15),
    borderTopRightRadius: horizontalScale(15),
    width: '100%',
    paddingVertical: verticalScale(5),
    textAlign: 'center',
  },
});

export default styles;
