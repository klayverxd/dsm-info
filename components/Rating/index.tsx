import React, { useState } from "react";
import { Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

export default function Rating() {
	const [rating, setRating] = useState(1);

	return (
		<>
			<View style={styles.container}>
				{rating >= 1 ? (
					<TouchableWithoutFeedback onPress={() => setRating(1)}>
						<Image style={styles.star} source={require('../../assets/images/yellow_star.png')} />
					</TouchableWithoutFeedback>
				) : (
					<TouchableWithoutFeedback onPress={() => setRating(1)}>
						<Image style={styles.star} source={require('../../assets/images/star.png')} />
					</TouchableWithoutFeedback>
				)}
				{rating >= 2 ? (
					<TouchableWithoutFeedback onPress={() => setRating(2)}>
						<Image style={styles.star} source={require('../../assets/images/yellow_star.png')} />
					</TouchableWithoutFeedback>
				) : (
					<TouchableWithoutFeedback onPress={() => setRating(2)}>
						<Image style={styles.star} source={require('../../assets/images/star.png')} />
					</TouchableWithoutFeedback>
				)}
				{rating >= 3 ? (
					<TouchableWithoutFeedback onPress={() => setRating(3)}>
						<Image style={styles.star} source={require('../../assets/images/yellow_star.png')} />
					</TouchableWithoutFeedback>
				) : (
					<TouchableWithoutFeedback onPress={() => setRating(3)}>
						<Image style={styles.star} source={require('../../assets/images/star.png')} />
					</TouchableWithoutFeedback>
				)}
				{rating >= 4 ? (
					<TouchableWithoutFeedback onPress={() => setRating(4)}>
						<Image style={styles.star} source={require('../../assets/images/yellow_star.png')} />
					</TouchableWithoutFeedback>
				) : (
					<TouchableWithoutFeedback onPress={() => setRating(4)}>
						<Image style={styles.star} source={require('../../assets/images/star.png')} />
					</TouchableWithoutFeedback>
				)}
				{rating >= 5 ? (
					<TouchableWithoutFeedback onPress={() => setRating(5)}>
						<Image style={styles.star} source={require('../../assets/images/yellow_star.png')} />
					</TouchableWithoutFeedback>
				) : (
					<TouchableWithoutFeedback onPress={() => setRating(5)}>
						<Image style={styles.star} source={require('../../assets/images/star.png')} />
					</TouchableWithoutFeedback>
				)}
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
	},
	star: {
		height: 24,
		width: 24,
	},
});
