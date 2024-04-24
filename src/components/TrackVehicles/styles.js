import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  searchView: {
    borderRadius: horizontalScale(10),
    elevation: 10,

    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    shadowColor: '#000000',
    backgroundColor: '#003177',
    marginVertical: verticalScale(10),
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  searchBtn: {flex: 0.1, alignItems: 'center'},
  sarchInput: {
    flex: 0.9,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: horizontalScale(10),
    borderBottomLeftRadius: horizontalScale(10),
    paddingVertical: verticalScale(5),
    paddingHorizontal: verticalScale(15),
  },
  itemView: {
    borderRadius: horizontalScale(5),
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    backgroundColor: '#FFFFFF',
    marginVertical: verticalScale(5),
    justifyContent: 'space-between',
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(15),
    shadowColor: '#00000033',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  listContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingBottom: verticalScale(150),
  },

  nodataview: {alignItems: 'center', justifyContent: 'center', flex: 1},
  nodatatext: {
    textAlign: 'center',
    color: '#222222',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(21),
    lineHeight: verticalScale(25.41),
  },
  flexrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverInfo: {
    paddingHorizontal: horizontalScale(10),
  },
  txtValue: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(2),
    color: '#222222',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(8),
    lineHeight: verticalScale(9.68),
    textAlign: 'left',
  },
  reviewView: {alignItems: 'center'},
  more: {
    color: '#003177',
    fontWeight: '300',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
  },
  review: {
    color: '#003177',
    fontWeight: '300',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
  },
  imgCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#000000',
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStatus: {
    paddingHorizontal: horizontalScale(2),
    paddingVertical: verticalScale(2),
    color: '#128807',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(10),
    lineHeight: verticalScale(12.1),
    textAlign: 'left',
  },
  driverRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(2),
  },
  txtLabel: {
    color: '#222222',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(8),
    lineHeight: verticalScale(9.68),
    textAlign: 'left',
  },
  txtRegNo: {
    paddingVertical: verticalScale(2),
    color: '#222222',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
    textAlign: 'left',
  },
});

export default styles;
