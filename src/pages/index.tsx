import { Heading, Icon, Image, Button, Link } from "@chakra-ui/react"
import { FaReact } from "react-icons/fa"

import Layout from "~/src/components/Layout"
import { CTA } from "~/src/components/CTA"

const Index = () => (
  <Layout>
    {/* <Hero /> */}

    <Heading>
      CloudFlare page TEST
      <Icon as={FaReact} w={10} h={10} color="#0693E3" />
    </Heading>
    {/* <Image src="/screenshot 2021-03-02 12.31.01.png" /> */}
    <Link href="https://github.com/">
      <Button>https://github.com</Button>
    </Link>
    {/* <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer> */}
    {/* <CTA /> */}
  </Layout>
)

export default Index
