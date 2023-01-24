import { Stack, StackProps } from '@chakra-ui/react'

function Article({ children, ...rest }: StackProps) {
  return (
    <Stack as="article" spacing={10} {...rest}>
      {children}
    </Stack>
  )
}

export default Article
