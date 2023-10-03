/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading'
import { Theme } from './src/theme'
import { Routes } from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={Theme}>
      {fontsLoaded ? <Routes /> : <Loading />}

      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
    </NativeBaseProvider>
  )
}
