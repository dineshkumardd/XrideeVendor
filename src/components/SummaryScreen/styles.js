import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  searchView: {
    borderRadius: horizontalScale(10),
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000000',
    backgroundColor: '#003177',
    marginVertical: verticalScale(10),
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    flex: 0.7,
  },
  searchBtn: {flex: 0.15, alignItems: 'center'},
  sarchInput: {
    flex: 0.85,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: horizontalScale(10),
    borderBottomLeftRadius: horizontalScale(10),
    paddingVertical: verticalScale(2),
    paddingHorizontal: horizontalScale(15),
  },
  logoView: {
    backgroundColor: '#013277',
    width: '100%',
    elevation: 10,
    borderBottomLeftRadius: horizontalScale(15),
    borderBottomRightRadius: horizontalScale(15),
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
  whiteView: {
    flex: 4,
    backgroundColor: 'white',
  },
  viewOne: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
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
  walletView: {
    width: '100%',
    alignItems: 'center',
  },
  walletCard: {
    width: '90%',
    borderRadius: horizontalScale(5),
    marginTop: verticalScale(5),
    marginBottom: verticalScale(15),
  },
  txtSmallWhite: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: scaleFontSize(15),
    lineHeight: verticalScale(18.15),
    fontFamily: 'Inter-Regular',
    marginVertical: verticalScale(2),
  },
  txtMediumWhite: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    lineHeight: verticalScale(24.2),
    marginVertical: verticalScale(10),
    fontFamily: 'Inter-Regular',
  },
  btnWithdraw: {
    backgroundColor: '#FEB200',
    borderRadius: horizontalScale(15),
    paddingHorizontal: horizontalScale(20),
  },
  btnAddCash: {
    borderColor: '#FEB200',
    borderRadius: horizontalScale(15),
    borderWidth: 2,
    paddingHorizontal: horizontalScale(20),
  },
  cardBtns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },
  btnTxt: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: scaleFontSize(13),
    lineHeight: verticalScale(15.73),
    fontFamily: 'Inter-Regular',
    paddingVertical: verticalScale(5),
    paddingHorizontal: verticalScale(10),
  },
  cardFields: {
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(20),
    position: 'absolute',
  },
  svgContainer: {
    alignItems: 'flex-end',
    width: '100%',
  },
  topView: {
    backgroundColor: '#FFFFFF',
  },
  spinnerView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.3,
    justifyContent: 'center',
  },
  tranxHist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: verticalScale(4),
    marginHorizontal: horizontalScale(10),
  },
  tranxTxt: {
    color: '#222222',
    fontSize: scaleFontSize(15),
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    lineHeight: verticalScale(18.15),
  },
  txtToday: {
    color: '#222222',
    fontSize: scaleFontSize(11),
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    lineHeight: verticalScale(13.31),
  },
  sectionTitle: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(15),
  },
  sectionTitleTxt: {
    color: '#222222',
    fontSize: scaleFontSize(10),
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    lineHeight: verticalScale(12.1),
  },
  sectionBodyView: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: verticalScale(5),
    backgroundColor: 'green',
    alignItems: 'center',
  },
  sectionName: {
    color: '#000000',
    fontSize: scaleFontSize(12),
    fontFamily: 'Inter-SemiBold',
    fontWeight: '500',
    lineHeight: verticalScale(14.52),
    textAlign: 'left',
    width: '20%',
  },
  sectionDate: {
    color: '#222222',
    fontSize: scaleFontSize(12),
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    lineHeight: verticalScale(14.52),
    paddingVertical: verticalScale(4),
  },
  sectionAmountCr: {
    color: '#128807',
    fontSize: scaleFontSize(10),
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    lineHeight: verticalScale(12.1),
  },
  sectionAmountDb: {
    color: '#D92507',
    fontSize: scaleFontSize(10),
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    lineHeight: verticalScale(12.1),
  },
  sectionImg: {flexDirection: 'row', paddingLeft: 10},
  sectionNameDate: {paddingHorizontal: 5},

  viewFourInner: {},
  textFooterValueView: {
    paddingVertical: verticalScale(5),
  },
  tableHeader: {
    backgroundColor: '#D9D9D9',
    borderBottomColor: 'white',
    paddingVertical: verticalScale(5),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
  },
  headerTxt: {
    color: '#363636',
    fontSize: scaleFontSize(14),
    fontFamily: 'Inter-Medium',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(2),
    borderBottomColor: '#36363680',
    borderBottomWidth: 1,
    paddingVertical: verticalScale(5),

    // Set the background color as needed
  },
  cellText: {
    textAlign: 'left',
    color: '#222222',
    fontSize: scaleFontSize(12),
    fontFamily: 'Inter-Regular',
  },
  serialText: {
    textAlign: 'left',
    color: '#363636',
    fontSize: scaleFontSize(14),
    fontFamily: 'Inter-Medium',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
  },
  tableBody: {
    backgroundColor: '#EEEEEE',
    paddingVertical: verticalScale(5),
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    width: '100%',
  },
  rowInner: {
    flexDirection: 'row',
    padding: 10,
    width: '92%',
    justifyContent: 'space-between',
  },
  cells: {
    width: '28%',
    textAlign: 'left',
    color: '#222222',
    fontSize: scaleFontSize(12),
    fontFamily: 'Inter-Regular',
    fontWeight: '300',
    lineHeight: verticalScale(14.52),
  },
  cellsSide: {
    width: '18%',
    textAlign: 'left',
    color: '#222222',
    fontSize: scaleFontSize(12),
    fontFamily: 'Inter-Regular',
    fontWeight: '300',
    lineHeight: verticalScale(14.52),
  },
  columns: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    alignItems: 'center',
  },
  columnsInner: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 5,
    width: '96%',
    justifyContent: 'space-between',
  },
  columncells: {
    textAlign: 'left',
    fontWeight: 'bold',
    width: '20%',
  },
  pickerview: {},
  pickerviewIn: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5,
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(5),
  },
  viewFour: {width: '100%'},
});

export default styles;
