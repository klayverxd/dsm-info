import React from "react";
import { FlatList, Image, Linking, StyleSheet, Text, View } from "react-native";
import Rating from "../Rating";
import { HitsListProps, ItemProps } from "../../interfaces/HitsList";

const Item = ({ author, title, url }: ItemProps) => (
	<View style={styles.containerItem}>
		<View style={styles.containerRow}>
			<Image style={styles.icon} source={require('../../assets/images/paper.png')} />
			<Text>Título: {title}</Text>
		</View>
		<View style={styles.containerRow}>
			<Image style={styles.icon} source={require('../../assets/images/user.png')} />
			<Text>Autor: {author}</Text>
		</View>
		<View style={styles.containerRow}>
			<Image style={styles.icon} source={require('../../assets/images/link.png')} />
			<Text>Url: <Text style={{ color: 'blue' }}
				onPress={() => Linking.openURL(url)}>
				acesse aqui
			</Text></Text>
		</View>
		<Rating />
	</View>
);

export default function HitsList({ hits }: HitsListProps) {
	return (
		<View style={styles.container}>
			{hits.length > 0 ? (
				<FlatList
					data={hits}
					renderItem={({ item }) => (
						<Item author={item.author} title={item.title} url={item.url} />
					)}
					keyExtractor={item => item.objectID}
				/>
			) : (
				<Text>Não possui nenhum registro</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerItem: {
		justifyContent: "center",
		backgroundColor: "lightblue",
		margin: 10,
		padding: 10,
		fontSize: 18,
	},
	containerRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: 4,
	},
	icon: {
		marginRight: 6,
	},
});
