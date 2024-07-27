import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import useGetWeather from "./src/hooks/useGetWeather"
import Tabs from "./src/components/Tabs"

const App = () => {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.main) {
    console.log(weather)
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"blue"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
})

export default App
