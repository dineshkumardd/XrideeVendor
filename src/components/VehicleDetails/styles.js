import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  logoView: {
    backgroundColor: '#013277',
    alignItems: 'center',
    shadowOffset: '#00000080',
  },
  logoInnerView: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(8),
  },
  flex: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  userimg: {width: 40, height: 40, flex: 1, justifyContent: 'center'},
  toolbarTxt: {
    color: '#FFFFFF',
    flex: 2,
    textAlign: 'left',
    fontWeight: '600',
    fontFamily: 'Inter-Bold',
    fontSize: scaleFontSize(18),
    lineHeight: verticalScale(21.78),
  },
  imgCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderColor: '#000000',
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 120,
    height: 120,
  },
  profileCard: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  divider: {height: 1, backgroundColor: '#000000', width: '95%'},
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginVertical: verticalScale(20),
  },
  userinfoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginVertical: verticalScale(10),
  },
  userinfotext: {
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFontSize(15),
    lineHeight: verticalScale(18.15),
  },
  saveBtn: {
    backgroundColor: '#FEB200',
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: horizontalScale(5),
    marginVertical: verticalScale(2),
  },
  saveTxt: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFontSize(15),
    lineHeight: verticalScale(18.15),
    paddingVertical: verticalScale(6),
  },
  userFields: {
    flex: 2.8,
    backgroundColor: '#FFFFFF',
  },
  btnView: {
    flex: 0.2,
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: '100%',
    justifyContent: 'center',
  },
  txtLabel: {
    color: '#000000',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
    flex: 0.5,
  },
  txtValue: {
    color: '#00000050',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
    flex: 1,
    paddingLeft: horizontalScale(15),
  },
  rowView: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: verticalScale(1),
  },
  txtChange: {
    color: '#003177',
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
    fontSize: scaleFontSize(15),
    lineHeight: verticalScale(16.15),
  },
  changeBtn: {
    marginVertical: verticalScale(10),
  },
  tickView: {
    width: horizontalScale(15),
    height: verticalScale(15),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#023C6E',
    borderRadius: horizontalScale(2),
  },
  tickViewChecked: {
    width: horizontalScale(12),
    height: verticalScale(12),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#023C6E',
    backgroundColor: '#023C6E',
    borderRadius: horizontalScale(2),
  },
  flexRow: {
    flexDirection: 'row',
    marginVertical: verticalScale(2),
  },
  amenitiesView: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: verticalScale(2),
    justifyContent: 'space-around',
  },
  flexHalf: {
    flex: 0.5,
    flexDirection: 'row',
  },
  flexFull: {
    flex: 0.7,
  },
  flexes: {
    flex: 1.2,
  },
  imgBorder: {
    width: 50,
    height: 50,
    borderRadius: horizontalScale(5),
    borderColor: '#003177',
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgView: {
    flex: 1,
    alignItems: 'center',
  },
  txtSides: {
    color: '#000000',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(9),
    lineHeight: verticalScale(10.89),
    paddingTop: verticalScale(5),
  },
  docsView: {
    flexDirection: 'row',
    marginVertical: verticalScale(5),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  docTxtView: {
    alignItems: 'flex-start',
  },
  txtAmenities: {
    color: '#222222',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
    flex: 1,
    paddingLeft: horizontalScale(15),
  },
  txtLabelDoc: {
    color: '#222222',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(10),
    lineHeight: verticalScale(12.1),
  },
  txtValueDoc: {
    color: '#222222',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(10),
    lineHeight: verticalScale(12.1),
    borderColor: '#00000020',
    borderWidth: 1,
    borderRadius: horizontalScale(5),
    paddingHorizontal: horizontalScale(15),
    marginVertical: verticalScale(5),
  },
});

export default styles;