/** @jsx jsx */
import React from 'react'
import 'typeface-montserrat'
import { Global } from '@emotion/core'
import { jsx } from 'theme-ui'
import SEO from '@lekoarts/gatsby-theme-cara/src/components/seo'

type LayoutProps = { children?: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        '*': {
          boxSizing: `inherit`,
          '&:before': {
            boxSizing: `inherit`,
          },
          '&:after': {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `18px`,
          fontFamily: `Montserrat`,
        },
        body: {
          fontFamily: `Montserrat`,
        },
        '::selection': {
          backgroundColor: theme.colors.primary,
          color: theme.colors.background,
        },
      })}
    />
    <SEO />
    <main className={className}>{children}</main>
  </React.Fragment>
)

export default Layout
