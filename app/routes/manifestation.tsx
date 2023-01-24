import { Box, Button, flexbox, Image, Text, useTheme, VStack } from '@chakra-ui/react'
import { Link, useNavigate } from '@remix-run/react'
import { useState } from 'react'
import { useTime, motion, useTransform, useCycle } from 'framer-motion'

import Article from '~/components/article'
import Layout from '~/components/layout'
import Section from '~/components/section'

const ImageHighSelf = ({ onRevealed, src, initialText, text }) => {
  const [rotate, setNumTaps] = useState(0)

  const handleTap = () => {
    if (rotate < 100) setNumTaps(rotate + 20)
    if (rotate === 80) onRevealed()
  }

  return (
    <Box
      position="relative"
      borderRadius="2xl"
      boxShadow="2xl"
      overflow="hidden"
      onClick={() => handleTap()}
    >
      <motion.div
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '1rem',
          zIndex: 10,
        }}
        animate={{ transform: `rotate(${rotate}deg)`, transformOrigin: '0% 0%' }}
      >
        {initialText && <Text>{initialText}</Text>}
      </motion.div>
      <motion.div
        style={{
          backdropFilter: 'blur(10px) brightness(0.5)',
          opacity: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'absolute',
          borderRadius: '1rem',
          zIndex: 9,
        }}
        animate={{ opacity: rotate >= 100 ? 0 : 1 }}
      />
      <Box position="relative">
        <Image height="100%" width="100%" src={src} />
        <Text
          position="absolute"
          width="100%"
          zIndex={2}
          bottom={0}
          left={0}
          backdropFilter="blur(10px)"
          color="white"
          textAlign="center"
          padding={2}
          borderBottomRadius="1rem"
          fontWeight="bold"
        >
          {text}
        </Text>
      </Box>
    </Box>
  )
}

export default function Manifestation() {
  const navigate = useNavigate()
  const [counter, setCounter] = useState(0)

  return (
    <Layout>
      <Article flex="100%" justify="center">
        <Section textAlign="center" alignItems="center" spacing={4}>
          <Text fontSize="xl" fontWeight="bold">
            It is time to meet your best version now!
            <br />
            <Box as="span" opacity="0.65" fontWeight="normal">
              Tap 5 times each card, repeat the affirmation and meet your high self!
            </Box>
          </Text>
        </Section>

        <Section spacing={8}>
          <ImageHighSelf
            src="https://sdbooth2-production.s3.amazonaws.com/0b1gd47mcjdskwzgxmp6agjdpxda"
            initialText="Tap 5 times"
            text="I'm powerful ⚡"
            onRevealed={() => setCounter(counter + 1)}
          />
          <ImageHighSelf
            src="https://sdbooth2-production.s3.amazonaws.com/yiad62cmjymaak7w0hhbeu5r9i6i"
            initialText="Tap 5 times"
            text="I'm healthy 🫁"
            onRevealed={() => setCounter(counter + 1)}
          />
          <ImageHighSelf
            src="https://sdbooth2-production.s3.amazonaws.com/3b02v94eqdf3g5hvsubpdxy76twn"
            initialText="Tap 5 times"
            text="I'm strong 💪"
            onRevealed={() => setCounter(counter + 1)}
          />
          <ImageHighSelf
            src="https://sdbooth2-production.s3.amazonaws.com/w50cmakh8027bd6irnz62d17k0gt"
            initialText="Tap 5 times"
            text="I'm fit 🦍"
            onRevealed={() => setCounter(counter + 1)}
          />
        </Section>
        <Section>
          <Button
            isDisabled={counter !== 4}
            size="lg"
            colorScheme="purple"
            onClick={() => navigate('/success')}
          >
            Finish!
          </Button>
        </Section>
      </Article>
    </Layout>
  )
}
