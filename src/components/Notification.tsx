import {
  HStack,
  Text,
  IconButton,
  CloseIcon,
  Pressable,
  Box,
} from 'native-base'

import { OSNotification } from 'react-native-onesignal'

import Logo from '../assets/icon.svg'
import * as Linking from 'expo-linking'

type Props = {
  data: OSNotification
  onClose: () => void
}

export function Notification({ data, onClose }: Props) {
  function handleOnPress() {
    if (data.launchURL) {
      Linking.openURL(data.launchURL)
      onClose()
    }
  }

  return (
    <Pressable
      w="full"
      p={4}
      pt={12}
      bgColor="gray.400"
      position="absolute"
      top={0}
      onPress={handleOnPress}
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Box mr={2}>
          <Logo width={35} />
        </Box>

        <Text fontSize="md" color="white" flex={1}>
          {data.title}
        </Text>

        <IconButton
          variant="unstyled"
          _focus={{ borderWidth: 0 }}
          icon={<CloseIcon size="3" />}
          _icon={{ color: 'white' }}
          color="white"
          onPress={onClose}
        />
      </HStack>
    </Pressable>
  )
}
