import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  logoView: {
    backgroundColor: '#013277',
    flex: 1,
    elevation: 10,
    alignItems: 'center',
    shadowOffset: '#00000080',
  },
  logoInnerView: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(8),
    height: '10%',
  },
  flex: {
    flex: 1,
  },
  userimg: {flex: 1},

  toolbarTxt: {
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'left',
    fontWeight: '600',
    fontFamily: 'Inter-Bold',
    fontSize: scaleFontSize(18),
    lineHeight: verticalScale(21.78),
  },
  imgCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 110,
    height: 110,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '20%',
  },
  editCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#FEB200',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 80,
    left: 85,
  },
  editImg: {
    width: 20,
    height: 20,
  },
  userdetails: {flex: 1},
  name: {
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    lineHeight: verticalScale(24.2),
    color: '#FFFFFF',
  },
  phone: {
    paddingHorizontal: horizontalScale(15),
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    fontSize: scaleFontSize(14),
    lineHeight: 16.94,
    color: '#FFFFFF',
  },
  mail: {
    paddingHorizontal: horizontalScale(15),
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    fontSize: scaleFontSize(14),
    lineHeight: 16.94,
    color: '#FFFFFF',
  },
  mailView: {flexDirection: 'row', marginVertical: verticalScale(5)},
  card: {flex: 1, alignItems: 'center'},
  menuView: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: horizontalScale(20),
    borderTopRightRadius: horizontalScale(20),
    alignItems: 'center',
  },
  menuItems: {
    width: '90%',

    marginVertical: verticalScale(5),
  },
  menuTxt: {
    color: '#000000',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '700',
    fontSize: scaleFontSize(14),
    lineHeight: verticalScale(16.94),
  },
  subMenuTxt: {
    color: '#222222',
    fontFamily: 'Inter-Light',
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
    paddingLeft: horizontalScale(10),
  },
  subMenuView: {flexDirection: 'row', paddingVertical: verticalScale(5)},
  flexrow: {
    flexDirection: 'row',
  },
  space: {
    justifyContent: 'space-between',
  },
  priceView: {
    paddingHorizontal: horizontalScale(20),
  },
  priceMenuTxt: {
    color: '#222222',
    fontFamily: 'Inter-Light',
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
    paddingLeft: horizontalScale(10),
    paddingVertical: verticalScale(5),
  },
});

export default styles;
