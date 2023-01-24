import { Box, Button, Divider, FormControl, FormHelperText, Text, Textarea } from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { useState } from 'react'
import Article from '~/components/article'
import Layout from '~/components/layout'
import Section from '~/components/section'
import SliderMotivation from '~/components/sliderMotivation'

export default function Success() {
  return (
    <Layout>
      <Article flex="100%" justify="center">
        <Section textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            Congrats! <br /> You've reached your high self!
            <br />
            <Box as="span" opacity="0.65" fontWeight="normal">
              Remember to comeback tommorrow! Each day you're programming your mind for success.
            </Box>
          </Text>
        </Section>
      </Article>
    </Layout>
  )
}
