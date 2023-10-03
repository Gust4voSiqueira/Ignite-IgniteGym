import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AppRoutes } from './app.routes'

import { useTheme, Box } from 'native-base'

export function Routes() {
  const { colors } = useTheme()
  const theme = DefaultTheme
  theme.colors.background = colors.gray[700]

  return (
    <Box flex={1} bg={colors.gray[700]}>
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  )
}
