import { Box, Button, Divider, FormControl, FormHelperText, Text, Textarea } from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { useState } from 'react'
import Article from '~/components/article'
import Layout from '~/components/layout'
import Section from '~/components/section'
import SliderMotivation from '~/components/sliderMotivation'

export default function Index() {
  return (
    <Layout>
      <Article flex="100%" justify="center">
        <Section textAlign="center" spacing={4}>
          <Text fontSize="3xl" fontWeight="bold">
            Your Best Version Every Day
          </Text>
          <Text opacity="0.65" fontSize="xl" fontWeight="normal">
            By watching AI-generated images of your best self everyday, you're programming your mind
            for success!
          </Text>
          <Button as={Link} to="/motivation" size="lg" colorScheme="purple">
            Start my routine!
          </Button>
        </Section>
      </Article>
    </Layout>
  )
}
