import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native"
import ListItem from "../components/ListItem"

// @DEV: DUMMY DATA
const DATA = [
  {
    dt: '08:30 | 01-01-2012',
    main: { temp_min: 20, temp_max: 27 },
    weather: [{ main: "umbrella" }],
  },
  {
    dt: '08:30 | 02-01-2012',
    main: { temp_min: 29, temp_max: 30 },
    weather: [{ main: "cloud" }],
  },
  {
    dt: '08:30 | 03-01-2012',
    main: { temp_min: 32, temp_max: 35 },
    weather: [{ main: "sun" }],
  },
]

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/clouds.jpg")}
        style={styles.image}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalblue",
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
})

export default UpcomingWeather
