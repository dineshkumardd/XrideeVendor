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
    justifyContent: 'center',
  },
  logoInnerView: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  userimg: {flex: 0.4, height: '10%', justifyContent: 'center'},
  toolbarTxt: {
    color: '#FFFFFF',
    flex: 0.6,
    textAlign: 'left',
    fontWeight: '600',
    fontFamily: 'Inter-Bold',
    fontSize: scaleFontSize(18),
    lineHeight: verticalScale(21.78),
  },
  sectionBodyView: {
    backgroundColor: '#FFFFFF',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(5),
    alignItems: 'center',
    paddingLeft: horizontalScale(10),
  },
  sectionTitle: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(4),
  },
  sectionTitleTxt: {
    color: '#222222',
    fontSize: scaleFontSize(12),
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    lineHeight: verticalScale(14.52),
    paddingRight: horizontalScale(2),
  },
  sectionName: {
    color: '#222222',
    fontSize: scaleFontSize(12),
    fontFamily: 'Inter-Light',
    fontWeight: '500',
    lineHeight: verticalScale(14.52),
  },
  left: {left: 5},
  flexrow: {flexDirection: 'row', alignItems: 'center'},
});

export default styles;
