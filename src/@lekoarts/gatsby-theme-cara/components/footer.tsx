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
      <Flex>You can toggle between Dark/Light Mode here. 
      This project is Open Source and available on  <a hef="https://github.com/stevenorechow/parallax">Github</a>.
      </Flex>
      {/*Edit your footer Here */}
      <br />
    </Box>
  )
}

export default Footer
