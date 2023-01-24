import { Box, Button, HStack } from '@chakra-ui/react'

import logo from '../../public/logo.svg'

function Header() {
  return (
    <HStack as="header" justify="space-between" marginBottom={8}>
      <Box maxWidth="125px">
        <img src={logo} width="100%" height="100%" />
      </Box>
      {/* <Button colorScheme="purple">Enter</Button> */}
    </HStack>
  )
}

export default Header
