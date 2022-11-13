import React, { useState } from 'react'
import {
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
} from 'react-native'

const App = () => {
	const [clicked, setClicked] = useState(false)

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>BUS STOP</Text>
			</View>
			<View style={styles.busStopContainer}>
				<Text style={styles.busStopoText}>현재 정류장</Text>
			</View>
			<TouchableOpacity
				style={styles.bellContainer}
				onPress={() => setClicked(!clicked)}
			>
				<Image
					style={styles.bellImg}
					source={
						(clicked)
						? require('./src/assets/img/on.png')
						: require('./src/assets/img/off.png')
					}
				/>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: '#FFF',
	},
	headerContainer: {
		width: '100%',
		backgroundColor: '#FFD400',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		fontFamily: '',
		fontSize: 25,
		color: '#FFF',
		fontWeight: 'bold',
		margin: 15,
	},
	busStopContainer: {
		alignItems: 'center',
		alignContent: 'center',
		margin: 15,
	},
	busStopoText: {
		fontFamily: '',
		fontSize: 15,
		color: '#000',
	},
	bellContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	bellImg: {
		width: '70%',
		resizeMode: 'contain',
	}
})

export default App