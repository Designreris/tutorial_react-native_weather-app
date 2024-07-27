import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import IconText from "../components/IconText"

const City = () => {
  const {
    cityName,
    cityText,
    container,
    countryName,
    populationText,
    populationWrapper,
    riseSetText,
    riseSetWrapper,
    rowLayout
  } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={styles.city}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={8000}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"07:12:00"}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"22:12:00"}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  city: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 1,
  },
  countryName: {
    fontSize: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City
