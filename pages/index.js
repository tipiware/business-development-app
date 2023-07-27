/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import Image from 'next/image';

import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Separator from '../src/components/Separator';
import QuoteCarousel from '../src/components/QuoteCarousel';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import PhoneIcon from '../src/images/Phone';

export default function Home() {
  return (
    <Layout>
      <Section spacing={5}>
        <div sx={{ position: 'relative' }}>
          <div sx={{
            textAlign: ['left', 'right', 'right'], pt: 7, pb: 6, width: ['100%', '60%', '40%'],
          }}
          >
            <Styled.h2>
              Business 
              <br />
              Development
            </Styled.h2>
            <Styled.p sx={{ letterSpacing: 3, color: 'rgba(34,34,34, .75)' }}>We are here to help you to expand your business</Styled.p>
          </div>
          <div
            sx={{
              position: 'absolute',
              top: 0,
              right: -50,
              width: '60%',
              display: ['none', 'none', 'block'],
            }}
          >
            <Image
              alt="business"
              src="/hero-blob.png"
              height={400}
              width={500}
              quality={60}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </Section>

      <Section bgColor="muted">

        <div sx={{
          pt: [0, 2, 5],
          pb: 5,
          maxWidth: 800,
          textAlign: ['center'],
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        >

          <Styled.h2>
            Quote for Business owner
          </Styled.h2>
          <Separator
            styles={{
              mt: 4,
              mb: 4,
              ml: 'auto',
              mr: 'auto',
            }}
          />

          <QuoteCarousel />

        </div>
      </Section>
      <Section spacing={5}>
        <div
          sx={{
            display: ['none', 'none', 'block'],
            position: 'absolute',
            top: 50,
            left: -3,
            width: '52%',
          }}
        >
          <Image
            alt="business-2"
            src="/business-2.jpg"
            height={600}
            width={600}
            quality={100}
          />
        </div>
        <div sx={{ pl: ['0', '0', '55%'], mb: 3 }}>
          <div sx={{
            pt: 2,
            pb: 4,
            display: ['block', 'none'],
            '> div': {
              borderRadius: 0,
            },
          }}
          >
            <Image
              alt="business-2"
              src="/business-2.jpg"
              layout="responsive"
              height={700}
              width={400}
              objectFit="cover"
              objectPosition="center center"
              quality={100}
            />
          </div>
          <div sx={{ maxWidth: [420, 550] }}>
            <Styled.h2 sx={{ mb: 4 }}>
              About Us
            </Styled.h2>
            <Styled.p sx={{ mb: 3 }}>Welcome to the our site. We are business development company that plays a crucial role in the growth and success of businesses. We specialized financial institutions that provide funding, expertise, and strategic guidance to small and mid-sized companies looking to expand their operations, enter new markets, or overcome various challenges.</Styled.p>
            <Styled.p sx={{ mb: 3 }}>Our company act as intermediaries between investors and promising businesses, offering investment opportunities to individuals and institutional investors seeking exposure to high-potential, private companies. BDCs typically focus on industries with strong growth prospects, such as technology, healthcare, energy, and consumer goods, among others.</Styled.p>
            <Link to="/options">
              <Button outline>Check our services</Button>
            </Link>
          </div>
        </div>
      </Section>
      <Section spacing={5}>
        <div
          sx={{
            display: ['none', 'none', 'block'],
            position: 'absolute',
            top: 50,
            left: -3,
            width: '52%',
          }}
        >
          <Image
            alt="group"
            src="/group.jpg"
            height={400}
            width={600}
            quality={100}
          />
        </div>
        <div sx={{ pl: ['0', '0', '55%'], mb: 3 }}>
          <div sx={{
            pt: 2,
            pb: 4,
            display: ['block', 'none'],
            '> div': {
              borderRadius: 0,
            },
          }}
          >
            <Image
              alt="business-3"
              src="/group.jpg"
              layout="responsive"
              height={700}
              width={400}
              objectFit="cover"
              objectPosition="center center"
              quality={100}
            />
          </div>
          <div sx={{ maxWidth: [420, 550] }}>
            <Styled.h2 sx={{ mb: 4 }}>
              Why Choose us?
            </Styled.h2>
            <Styled.p sx={{ fontFamily: 'heading', fontWeight: 700, mb: 2 }}>Expertise and Experience. </Styled.p>
            <Styled.p sx={{ mb: 3 }}>We have a team of experienced professionals with a deep understanding of various industries and markets.</Styled.p>
            <Styled.p sx={{ fontFamily: 'heading', fontWeight: 700, mb: 2 }}>Proven Track Record. </Styled.p>
            <Styled.p sx={{ mb: 3 }}>We have a strong track record of success in supporting and nurturing businesses. </Styled.p>
            <Styled.p sx={{ fontFamily: 'heading', fontWeight: 700, mb: 2 }}>Compliance and Ethics. </Styled.p>
            <Styled.p sx={{ mb: 3 }}>We adheres to ethical business practices and complies with all relevant regulations and standards.</Styled.p>
          </div>
        </div>
      </Section>
      <Section bgColor="muted">
        <div sx={{
          textAlign: 'center',
          maxWidth: 1000,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        >
          <Styled.h2>Get In Touch</Styled.h2>
          <Styled.p sx={{ mb: 4 }}>Thank you for your interest in our. We're excited to connect with you and explore how we can assist you in achieving your goals. Whether you need expert advice, have questions about our services, or want to discuss a potential collaboration, we are here to help. Feel free to reach out to us through phone or email, and our dedicated team will be more than happy to provide the support you need. We look forward to hearing from you and working together to bring your vision to life!</Styled.p>
          <Link to="tel:8014449944" styles={{ display: 'inline-block' }}>
            <Button>
              <PhoneIcon sx={{ mr: 2 }} />
              +60 123456789
            </Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
