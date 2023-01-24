import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { Link, useNavigate } from '@remix-run/react'
import { useState } from 'react'
import Article from '~/components/article'
import Layout from '~/components/layout'
import Section from '~/components/section'
import SliderMotivation from '~/components/sliderMotivation'

export default function Motivation() {
  const navigate = useNavigate()

  const [focus, setFocus] = useState(false)
  const [motivation, setMotivation] = useState(5)
  const [textMotivation, setTextMotivation] = useState('')

  const renderAlert = () => {
    if (focus && textMotivation.length < 140) {
      return (
        <Alert status="warning" textAlign="left" colorScheme="orange" fontSize="sm">
          <AlertIcon />
          {`Your description must be at least (${textMotivation.length}/140) characters long`}
        </Alert>
      )
    } else if (textMotivation.length >= 140) {
      return (
        <Alert status="success" textAlign="left" colorScheme="purple" fontSize="sm">
          <AlertIcon />
          Amazing! You've increased your probability of success
        </Alert>
      )
    }
  }

  return (
    <Layout>
      <Article flex="100%" justify="center">
        <Section textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            From 0 to 10 how motivated do you feel?
          </Text>
          <SliderMotivation motivation={motivation} setMotivation={setMotivation} />
        </Section>

        <Section>
          <Divider />
        </Section>

        <Section textAlign="center" spacing={4}>
          <Text fontSize="xl" fontWeight="bold">
            Imagine & describe how you will feel once you achieve your goal in the (present) moment
            <br />
            <Box as="span" opacity="0.65" fontWeight="normal">
              Example: I feel amazing in this body, I'm so prod of myself, I have energy all day and
              I feel so healthy...
            </Box>
          </Text>
          <Textarea
            value={textMotivation}
            rows={5}
            placeholder="Imagine & describe how you will feel..."
            variant="filled"
            size="md"
            onChange={(e) => setTextMotivation(e.target.value)}
            onFocus={() => setFocus(true)}
          />
          {renderAlert()}
        </Section>
        <Section>
          <Button
            isDisabled={textMotivation.length < 140}
            size="lg"
            colorScheme="purple"
            onClick={() => navigate('/meditation')}
          >
            Continue
          </Button>
        </Section>
      </Article>
    </Layout>
  )
}
