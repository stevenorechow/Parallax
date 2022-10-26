/** @jsx jsx */
import { jsx, Box, Button, Link } from 'theme-ui'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import './contact.css'
import styled from '@emotion/styled'
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider'
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner'
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content'
import SVG from '@lekoarts/gatsby-theme-cara/src/components/svg'
import {
  UpDown,
  UpDownWide,
  waveAnimation,
} from '@lekoarts/gatsby-theme-cara/src/styles/animations'
import Footer from './footer'
// @ts-ignore
import ContactMDX from '../sections/contact'

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Contact = ({
  offset,
  factor = 1,
}: {
  offset: number
  factor?: number
}) => (
  <div>
    <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
      <div
        sx={{
          position: `absolute`,
          bottom: 0,
          width: `full`,
          transform: `matrix(1, 0, 0, -1, 0, 0)`,
        }}
      >
        <InnerWave
          sx={{
            position: `relative`,
            height: `full`,
            svg: { width: `100%`, height: `40vh` },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="contact-wave"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </div>
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
        <Button backgroundColor="#5378ff">
          <Link
            sx={{
              // values referencing scales defined in a theme
              color: 'white',
              '&:hover': {
                color: 'white',
              },
            }}
            href="https://stevenorechow.com"
          >
            Let's Build a Website
          </Link>
        </Button>
        {/* Start custom button here */}
        <Box my="1rem">
          <Button backgroundColor="transparent">
            <Link href="mailto:stevenorechow@gmail.com">
              <FaEnvelope color="#bbffe4" />
            </Link>
          </Button>
          <Button backgroundColor="transparent">
            <Link href="https://www.linkedin.com/in/steven-orechow/">
              <FaLinkedin color="#bbffe4" />
            </Link>
          </Button>
        </Box>
        {/* End custom button here */}
      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="70%"
          top="20%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke
          color="icon_darkest"
          left="25%"
          top="5%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="triangle"
          width={12}
          stroke
          color="#5378ff"
          left="95%"
          top="50%"
        />
        <SVG
          icon="circle"
          width={6}
          color="icon_darkest"
          left="85%"
          top="15%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <SVG
        icon="hexa"
        width={8}
        stroke
        color="icon_darkest"
        left="80%"
        top="70%"
      />
    </Divider>
  </div>
)

export default Contact
