import { HStack, Heading, Image, Text, VStack, Icon } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  title: string
}

export function ExerciseCard({ title, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg={'gray.400'}
        alignItems={'center'}
        p={2}
        pr={4}
        rounded={'md'}
        mb={3}
      >
        <Image
          source={{
            uri: 'https://static.wixstatic.com/media/2edbed_f1db2127f3dd4b83950b27b543386e42~mv2.gif',
          }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded={'md'}
          mr={4}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading
            fontFamily={'heading'}
            textTransform={'capitalize'}
            fontSize={'lg'}
            color={'white'}
          >
            {title}
          </Heading>
          <Text fontSize={'sm'} color={'gray.200'} mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  )
}
