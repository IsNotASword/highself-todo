import { Flex, FlexProps } from '@chakra-ui/react'

import Header from '~/components/header'

function Layout({ children, ...rest }: FlexProps) {
  return (
    <Flex
      as="main"
      minHeight="100vh"
      borderRadius="2xl"
      flexDir="column"
      border="1px solid whitesmoke"
      padding={8}
      height="100%"
      maxWidth="520px"
      marginX="auto"
      marginY={{ base: 0, md: 8 }}
      boxShadow="2xl"
      overflow="hidden"
      {...rest}
    >
      <Header />
      {children}
    </Flex>
  )
}

export default Layout
