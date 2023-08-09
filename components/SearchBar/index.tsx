import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SearchBarProps } from "../../interfaces/SearchBar";

export default function SearchBar({ setHintSearch }: SearchBarProps) {
	const [searchTerm, onChangeSearchTerm] = useState("");

	const onPress = () => setHintSearch(searchTerm);

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={onChangeSearchTerm}
				value={searchTerm}
				placeholder="Digite aqui para buscar"
			/>
			<TouchableOpacity style={styles.button} onPress={onPress}>
				<Text>Buscar</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		margin: 12,
	},
	input: {
		flex: 1,
		height: 40,
		borderWidth: 1,
		padding: 10,
	},
	button: {
		backgroundColor: "lightblue",
		justifyContent: "center",
		height: 40,
		padding: 10,
		marginLeft: 12,
	},
});
