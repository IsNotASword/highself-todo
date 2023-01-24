import { Stack, StackProps } from '@chakra-ui/react'

function Section({ children, ...rest }: StackProps) {
  return (
    <Stack as="section" {...rest}>
      {children}
    </Stack>
  )
}

export default Section
