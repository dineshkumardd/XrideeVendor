import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
const styles = StyleSheet.create({
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

  divider: {height: 1, backgroundColor: '#000000', width: '100%'},
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
});
export default styles;
