import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  logoView: {
    backgroundColor: '#013277',
    width: '100%',

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
  },
  userimg: {width: 40, height: 40, flex: 1},
  topView: {
    backgroundColor: '#FFFFFF',
  },
  topIconsView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  toolbarTxt: {
    color: '#FFFFFF',
    flex: 2,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Inter-Bold',
    fontSize: scaleFontSize(18),
    lineHeight: verticalScale(21.78),
  },
  topTabView: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
