import { useEffect, useState } from "react"
import * as Location from "expo-location"
import { WEATHER_API_KEY } from "@env"

const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError("Could not fetch weather")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setError("Permission to access location was denied")
        console.log("Location Permission Denied")
        return
      }
      let location = await Location.getCurrentPositionAsync()
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, lon])

  return [loading, error, weather]
}

export default useGetWeather
