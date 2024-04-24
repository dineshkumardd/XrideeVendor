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
  userimg: {flex: 1, height: '10%'},
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
    borderRadius: 60,
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
    width: '80%',
    marginVertical: verticalScale(20),
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
  saveBtnLite: {
    backgroundColor: '#FEB20080',
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
    flex: 0.4,
  },
  txtValue: {
    color: '#00000050',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
    flex: 0.6,
  },
  rowView: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: verticalScale(2),
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
  /* Image Dialog-start */
  modalStyle: {margin: 0},
  linearStyle: {
    borderRadius: horizontalScale(30),
    backgroundColor: 'white',
    elevation: 10,
    width: '85%',
    alignItems: 'center',
  },
  modalContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(193, 193, 193, 0.6)',
    justifyContent: 'center',
  },

  mainBorderStyle: {
    borderRadius: horizontalScale(10),
    width: '90%',
    alignItems: 'flex-start',
    marginVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(10),
  },

  headStyle: {
    color: '#000000',
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    fontSize: scaleFontSize(18),
    lineHeight: verticalScale(21.78),
    marginVertical: verticalScale(10),
  },

  bodyStyle: {
    color: '#000000',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(15),
    lineHeight: verticalScale(18.15),
    marginVertical: verticalScale(10),
  },
  btnStyle: {width: '100%'},
  modalViewStyle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(10),
    right: horizontalScale(20),
  },
  /* Image Dialog-end */
});

export default styles;
