import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faStar as solidStar,
  faStarHalfAlt as halfStar,
} from '@fortawesome/free-solid-svg-icons';
import {faStar as regularStar} from '@fortawesome/free-regular-svg-icons';
import styles from './styles';

const ReviewStars = ({count, size}) => {
  // Calculate the number of filled and empty stars
  const filledStars = Math.floor(count);
  const hasHalfStar = count % 1 !== 0;

  // Create an array to map the stars
  const stars = Array.from({length: filledStars}, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={solidStar}
      size={size}
      style={styles.star}
    />
  )).concat(
    hasHalfStar ? (
      <FontAwesomeIcon
        key={filledStars}
        icon={halfStar}
        size={size}
        style={styles.star}
      />
    ) : null,
    Array.from(
      {length: 5 - filledStars - (hasHalfStar ? 1 : 0)},
      (_, index) => (
        <FontAwesomeIcon
          key={filledStars + (hasHalfStar ? 1 : 0) + index}
          icon={regularStar}
          size={size}
          style={styles.star}
        />
      ),
    ),
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.count}>{count.toFixed(1)}</Text> */}
      <View style={styles.starsContainer}>{stars}</View>
    </View>
  );
};

export default ReviewStars;
