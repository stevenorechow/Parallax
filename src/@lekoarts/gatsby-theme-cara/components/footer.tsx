/** @jsx jsx */

import { Box, Flex, useColorMode, jsx, Link } from 'theme-ui'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{
          variant: `buttons.toggle`,
          fontWeight: `semibold`,
          display: `block`,
          mx: `auto`,
          mb: 3,
        }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      {/*Edit your footer Here */}
      <Flex>You can toggle between Dark/Light Mode here. Pretty neat, huh?</Flex>
      {/*Edit your footer Here */}
      
      {/* Start Github button here */}
        <Box my="1rem">
          <Button backgroundColor="transparent">
            <Link href=“https://github.com/stevenorechow/parallax">
              <FaGithub color="#bbffe4" />
            </Link>
          </Button>
        </Box>
        {/* End Github button here */}
      <br />
    </Box>
  )
}

export default Footer
