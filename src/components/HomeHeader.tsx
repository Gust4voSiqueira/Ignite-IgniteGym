import { HStack, Heading, Text, VStack, Icon } from 'native-base'
import { UserPhoto } from './UserPhoto'

import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useAuth } from '@hooks/useAuth'

import defaultUserPhotoImg from '@assets/userPhotoDefault.png'
import { api } from '@services/api'

export function HomeHeader() {
  const { user, signOut } = useAuth()

  return (
    <HStack bg={'gray.600'} pt={16} pb={5} px={8} alignItems={'center'}>
      <UserPhoto
        size={16}
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
            : defaultUserPhotoImg
        }
        alt="Imagem do usuário"
        mr={4}
      />
      <VStack flex={1}>
        <Text color={'gray.100'} fontSize={'md'}>
          Olá
        </Text>

        <Heading fontFamily={'heading'} color={'gray.100'} fontSize={'md'}>
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity onPress={signOut}>
        <Icon as={MaterialIcons} name="logout" color={'gray.200'} size={7} />
      </TouchableOpacity>
    </HStack>
  )
}
