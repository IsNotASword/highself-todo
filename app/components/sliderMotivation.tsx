import { useState } from 'react'
import {
  Box,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react'

import { MdDragHandle } from 'react-icons/md'

function SliderMotivation({ motivation, setMotivation }) {
  const motivationValues = {
    0: '😭',
    1: '😢',
    2: '😥',
    3: '🥲',
    4: '🙃',
    5: '🙂',
    6: '😃',
    7: '😁',
    8: '🤗',
    9: '😎',
    10: '😍',
  }

  return (
    <Flex flexDir="column">
      <VStack marginBottom={5} spacing={0}>
        <Text fontSize="5rem">{motivationValues[motivation]}</Text>
        <Text
          backgroundColor="purple.500"
          fontWeight="bold"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="2xl"
          borderRadius="lg"
          paddingX={4}
          paddingY={2}
        >
          {motivation}
        </Text>
      </VStack>

      <Slider defaultValue={5} min={0} max={10} step={1} onChange={(e) => setMotivation(e)}>
        <SliderTrack bg="purple.100" height={4} borderRadius="2xl">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="purple.500" />
        </SliderTrack>
        <SliderThumb boxSize={8}>
          <Box color="blackAlpha.500" as={MdDragHandle} />
        </SliderThumb>
      </Slider>
    </Flex>
  )
}

export default SliderMotivation
