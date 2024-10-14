import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<View style={styles.row2}>
						<View style={styles.column2}>
							<View style={styles.view}>
								<Text style={styles.text2}>
									{"Profil Ormawa"}
								</Text>
								<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								
								style={styles.image5}
							/>
							</View>
							
						</View>
						<View style={styles.row3}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image5}
							/>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image5}
							/>
						</View>
					</View>
					<View style={styles.column3}>
						<View style={styles.row4}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<View style={styles.column4}>
								<Text style={styles.text3}>
									{"BEM Universitas Sriwijaya "}
								</Text>
								<Text style={styles.text4}>
									{"Badan Eksekutif Mahasiswa "}
								</Text>
							</View>
						</View>
						<Text style={styles.text3}>
							{"PROFIL SINGKAT"}
						</Text>
						<Text style={styles.text5}>
							{"Badan Eksekutif Mahasiswa (BEM) Universitas adalah\norganisasi kemahasiswaan yang berperan sebagai\npenghubung antara mahasiswa dan pihak rektorat, serta\nmotor penggerak kegiatan akademis, sosial, dan budaya\ndi kampus."}
						</Text>
						<Text style={styles.text6}>
							{"VISI"}
						</Text>
						<Text style={styles.text7}>
							{"Mewujudkan mahasiswa yang berintegritas, inovatif, dan\nberdaya saing tinggi, serta mampu memberikan kontribusi\npositif bagi masyarakat dan bangsa."}
						</Text>
						<Text style={styles.text8}>
							{"MISI"}
						</Text>
						<Text style={styles.text9}>
							{"Meningkatkan kualitas akademik dan non-akademik mahasiswa.\nMembangun solidaritas dan kepedulian sosial.\nMemperjuangkan aspirasi mahasiswa.\nMengembangkan jiwa kepemimpinan dan organisasi.\nMendorong kreativitas dan inovasi"}
						</Text>
						<Text style={styles.text10}>
							{"Info Lebih Lanjut"}
						</Text>
						<View style={styles.row5}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={styles.image8}
							/>
						</View>
					</View>
					
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	absoluteImage: {
		position: "absolute",
		top: 3,
		left: -3,
		width: 29,
		height: 29,
	},
	absoluteImage2: {
		position: "absolute",
		bottom: -1,
		left: 4,
		width: 10,
		height: 9,
	},
	box: {
		flex: 1,
		alignSelf: "stretch",
	},
	box2: {
		height: 2,
		backgroundColor: "#D9D9D9",
		marginBottom: 10,
	},
	box3: {
		height: 4,
		borderColor: "#8C8994",
		borderRadius: 2,
		borderWidth: 1,
		marginTop: 3,
	},
	column: {
		backgroundColor: "#3470A2",
		paddingTop: 21,
		paddingBottom: 1,
	},
	column2: {
		width: 168,
	},
	column3: {
		backgroundColor: "#FCF4F4",
		borderColor: "#FFC727",
		borderRadius: 14,
		borderWidth: 1,
		paddingVertical: 40,
		paddingHorizontal: 24,
		marginBottom: 23,
		marginHorizontal: 22,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	column4: {
		width: 203,
		alignSelf: "flex-start",
		marginTop: 12,
	},
	column5: {
		backgroundColor: "#FFFFFF",
		borderColor: "#5E27FD",
		borderWidth: 1,
		paddingVertical: 1,
	},
	column6: {
		flex: 1,
	},
	column7: {
		width: 18,
	},
	image: {
		width: 12,
		height: 12,
	},
	image2: {
		width: 18,
		height: 12,
		marginRight: 8,
	},
	image3: {
		width: 19,
		height: 11,
		marginRight: 7,
	},
	image4: {
		width: 27,
		height: 14,
	},
	image5: {
		width: 8,
		height: 18,
	},
	image6: {
		borderRadius: 14,
		width: 76,
		height: 76,
	},
	image7: {
		width: 24,
		height: 23,
		marginRight: 10,
	},
	image8: {
		width: 24,
		height: 23,
	},
	image9: {
		width: 19,
		height: 20,
	},
	image10: {
		width: 20,
		height: 20,
		marginRight: 59,
	},
	image11: {
		height: 5,
	},
	image12: {
		height: 6,
		marginTop: -4,
		marginHorizontal: 6,
	},
	image13: {
		height: 8,
		marginTop: -3,
		marginHorizontal: 4,
	},
	image14: {
		borderRadius: 2,
		height: 18,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 35,
		marginHorizontal: 18,
	},
	row2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 60,
		marginHorizontal: 19,
	},
	row3: {
		width: 35,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderColor: "#FFFFFF",
		borderWidth: 1,
		padding: 9,
	},
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 39,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
	},
	row6: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 6,
		marginHorizontal: 35,
	},
	row7: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 32,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderRadius: 32,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 17,
		marginRight: 7,
	},
	text2: {
		color: "#FFFFFF",
		fontSize: 18,
	},
	text3: {
		color: "#000000",
		fontSize: 18,
		marginBottom: 11,
	},
	text4: {
		color: "#000000",
		fontSize: 12,
		marginLeft: 29,
	},
	text5: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 34,
		width: 304,
	},
	text6: {
		color: "#000000",
		fontSize: 18,
		marginBottom: 5,
	},
	text7: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 29,
		width: 304,
	},
	text8: {
		color: "#000000",
		fontSize: 18,
		marginBottom: 7,
	},
	text9: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 46,
		width: 304,
	},
	text10: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 9,
	},
	text11: {
		color: "#8C8994",
		fontSize: 10,
	},
	text12: {
		color: "#FFC727",
		fontSize: 10,
	},
	view: {
		backgroundColor: "#D9D9D980",
		borderRadius: 5,
		paddingVertical: 9,
		paddingLeft: 36,
		paddingRight: 14,
	},
	view2: {
		width: 20,
		flexDirection: "row",
		alignItems: "center",
		marginRight: 57,
	},
	view3: {
		width: 16,
		borderColor: "#8C8994",
		borderRadius: 2,
		borderWidth: 1,
		marginRight: 46,
	},
});