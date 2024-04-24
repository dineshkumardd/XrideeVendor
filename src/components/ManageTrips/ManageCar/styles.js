import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../assets/styles/scaling';

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
  },
  more: {color: '#003177'},
});

export default styles;
