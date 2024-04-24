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
    borderRadius: horizontalScale(15),
  },
  logoInnerView: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(4),
  },
  flex: {
    flex: 1,
  },
  userimg: {width: 40, height: 40, flex: 1, justifyContent: 'center'},
  topView: {
    elevation: 10,
    backgroundColor: '#013277',
    height: '80%',
    borderRadius: horizontalScale(15),
  },
  topIconsView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  toolbarTxt: {
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Inter-Bold',
    fontSize: scaleFontSize(13),
    lineHeight: verticalScale(15.78),
  },
  topTabView: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
