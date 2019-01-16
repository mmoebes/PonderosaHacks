import React from 'react'
import jsCookie from 'js-cookie'
import { Box, Text, Container, Heading, Link } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Sheet from 'components/Sheet'
import RegistrationForm from 'components/RegistrationForm'
import IconButton from 'components/IconButton'
import Headline from 'components/Headline'

const url = 'http://hackpenn.com/'
const twitterURL = (text, u = url) =>
  `https://twitter.com/intent/tweet?text=${text
    .split(' ')
    .join('%20')}&url=${u}`
const facebookURL = (text, u = url) =>
  `https://www.facebook.com/sharer/sharer.php?u=${u}`

const ShareButton = ({ children, ...props }) => (
  <Link href={props.url} target="_blank" rel="noopener noreferrer">
    <IconButton
      aria-label={`Share on ${props.service}`}
      f={2}
      glyph={props.service.toLowerCase()}
      {...props}
    >
      {children || props.service}
    </IconButton>
  </Link>
)

export default () => (
  <Layout>
    <Nav />
    <Box
      bg={theme.colors.primaryDark}
      color={theme.colors.white}
      pb={[4, 5]}
      px={3}
    >
      <Container maxWidth={28} align="center" width={1}>
        <Headline mt={0} fontSize={[6, 7]}>
          Get your free&nbsp;ticket
        </Headline>
        <Heading.h2
          fontSize={[3, 4, 5]}
          style={{ fontFamily: theme.mono }}
          mt={3}
        >
          <Box color={theme.colors.alt}>Late registration open.</Box>
          <Text.span color={theme.colors.smoke} fontSize={[2, 3, 4]}>
            (T-shirt not guaranteed.)
          </Text.span>
        </Heading.h2>
      </Container>
      <Sheet maxWidth={36} mt={4} align="left">
        <Container maxWidth={32} mx={0}>
          <RegistrationForm />
        </Container>
      </Sheet>
      {jsCookie.get('signedUp') ||
        (false && (
          <Sheet
            p={[3, 4]}
            mt={[4, 5]}
            align="center"
            maxWidth={24}
            boxShadowSize="md"
          >
            <Heading.h2 f={3} caps mb={2}>
              Share it!
            </Heading.h2>
            <ShareButton
              service="Twitter"
              url={twitterURL(
                'Check out @hackpenn, PA’s largest high school hackathon!',
                url
              )}
              bg="#1da1f2"
              mr={3}
            />
            <ShareButton
              service="Facebook"
              url={facebookURL(url)}
              bg="#3b5998"
            />
          </Sheet>
        ))}
    </Box>
    <Footer />
  </Layout>
)
