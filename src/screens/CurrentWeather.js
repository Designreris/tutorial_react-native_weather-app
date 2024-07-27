import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import RowText from "../components/RowText"
import { weatherType } from "../utilities/weatherType"

export default function CurrentWeather({ weatherData }) {
  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather,
  } = weatherData

  const weatherCondition = weather[0].main

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{`${Math.ceil(temp)}`}</Text>
        <Text style={styles.feels}>{`Feels like ${Math.ceil(feels_like)}`}</Text>
        <RowText
          messageOne={`High: ${Math.ceil(temp_max)} | `}
          messageTwo={`Low: ${Math.floor(temp_min)}`}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
          containerStyles={styles.highLowWrapper}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        messageOneStyles={styles.description}
        messageTwoStyles={styles.message}
        containerStyles={styles.bodyWrapper}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    fontSize: 20,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  message: {
    fontSize: 30,
  },
  temp: {
    fontSize: 48,
    color: "black",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
})
