import { Box, Button, flexbox, Text, useTheme, VStack } from '@chakra-ui/react'
import { Link, useNavigate } from '@remix-run/react'
import { useState } from 'react'
import { useTime, motion, useTransform, useCycle } from 'framer-motion'

import Article from '~/components/article'
import Layout from '~/components/layout'
import Section from '~/components/section'

export default function Meditation() {
  const navigate = useNavigate()

  const [statusBreathe, setStatusBreathe] = useState({
    scale: 1,
    opacity: 0.75,
    duration: 0,
    type: 'idle',
    counter: 0,
  })

  const theme = useTheme()

  const quotes = [
    "I'm powerful ⚡",
    "I'm healthy 🫁",
    "I'm strong 💪",
    "I'm wealthy 🤑",
    "I'm fit 🦍",
  ]

  const handleTap = () => {
    if (statusBreathe.type === 'idle')
      setStatusBreathe({
        scale: 2,
        opacity: 0.85,
        duration: 4,
        type: 'inhale',
        counter: statusBreathe.counter,
      })
  }

  const handleAnimationComplete = () => {
    if (statusBreathe.type !== 'idle' && statusBreathe.type !== 'done') {
      if (statusBreathe.type === 'inhale')
        setStatusBreathe({
          scale: 2.2,
          opacity: 1,
          duration: 7,
          type: 'hold',
          counter: statusBreathe.counter,
        })
      else if (statusBreathe.type === 'hold') {
        setStatusBreathe({
          scale: 1,
          opacity: 0.75,
          duration: 8,
          type: 'exhale',
          counter: statusBreathe.counter,
        })
      } else if (statusBreathe.type === 'exhale') {
        setStatusBreathe({
          scale: statusBreathe.counter + 1 === 5 ? 1 : 2,
          opacity: statusBreathe.counter + 1 === 5 ? 1 : 0.85,
          duration: statusBreathe.counter + 1 === 5 ? 0 : 4,
          type: statusBreathe.counter + 1 === 5 ? 'done' : 'inhale',
          counter: statusBreathe.counter + 1,
        })
      }
    }
  }

  return (
    <Layout>
      <Article flex="100%" justify="center">
        <Section textAlign="center" alignItems="center" spacing={4}>
          <Text fontSize="xl" fontWeight="bold">
            Do this powerful breathing technique!
            <br />
            <Box as="span" opacity="0.65" fontWeight="normal">
              This power breathing will help you program your subconscious mind by associating new
              thoughts with each inhalation.
            </Box>
          </Text>
          <Box>
            <motion.div
              style={{
                background: `radial-gradient(circle at 30% 30%, ${theme.colors.purple[300]}, ${theme.colors.purple[500]})`,
                width: '200px',
                height: '200px',
                borderRadius: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              animate={{ scale: statusBreathe.scale, opacity: statusBreathe.opacity }}
              transition={{ duration: statusBreathe.duration }}
              onTap={() => handleTap()}
              onAnimationComplete={() => handleAnimationComplete()}
            >
              {statusBreathe.type === 'idle' ? (
                <Text color="white" fontWeight="bold" fontSize="md" cursor="pointer">
                  Click to start!
                </Text>
              ) : (
                <VStack spacing={2}>
                  {statusBreathe.type !== 'done' && statusBreathe.type !== 'exhale' && (
                    <Text color="white" fontWeight="bold" fontSize="md">
                      {quotes[statusBreathe.counter]}
                    </Text>
                  )}
                  {statusBreathe.type === 'exhale' && (
                    <Text color="white" fontWeight="bold" fontSize="sm">
                      {statusBreathe.counter + 1}/5
                    </Text>
                  )}
                  <Text color="white" fontWeight="bold" fontSize="sm">
                    * {statusBreathe.type.toUpperCase()} *
                  </Text>
                </VStack>
              )}
            </motion.div>
          </Box>
        </Section>

        <Section>
          <Button
            isDisabled={statusBreathe.counter !== 5}
            onClick={() => navigate('/manifestation')}
            size="lg"
            colorScheme="purple"
          >
            Continue
          </Button>
        </Section>
      </Article>
    </Layout>
  )
}
