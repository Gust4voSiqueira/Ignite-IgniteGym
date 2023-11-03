import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { useTheme, Box } from 'native-base'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '@hooks/useAuth'
import { AppRoutes } from './app.routes'
import { Loading } from '@components/Loading'
import { useEffect, useState } from 'react'
import { OSNotification, OneSignal } from 'react-native-onesignal'
import { Notification } from '@components/Notification'

const linking = {
  prefixes: ['ignitegym://', 'com.gustavo.siqueira8.ignitegym://'],
  config: {
    screens: {
      exercise: {
        path: 'exercise/:exerciseId',
        parse: {
          exerciseId: (exerciseId: string) => exerciseId,
        },
      },
    },
  },
}

export function Routes() {
  const { colors } = useTheme()
  const [notification, setNotification] = useState<OSNotification>()
  const { user, isLoadingStorageData } = useAuth()

  const theme = DefaultTheme
  theme.colors.background = colors.gray[700]

  useEffect(() => {
    const unsubscribe = OneSignal.Notifications.addEventListener(
      'foregroundWillDisplay',
      (event) => {
        event.preventDefault()

        event.getNotification().display()

        setNotification(event.getNotification())
      },
    )

    return () => unsubscribe
  }, [])

  if (isLoadingStorageData) {
    return <Loading />
  }

  return (
    <Box flex={1} bg={colors.gray[700]}>
      <NavigationContainer theme={theme} linking={linking}>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
        {notification?.title && (
          <Notification
            data={notification}
            onClose={() => setNotification(undefined)}
          />
        )}
      </NavigationContainer>
    </Box>
  )
}
