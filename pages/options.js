/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import Image from 'next/image';

import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import PhoneIcon from '../src/images/Phone';
import Card from '../src/components/Card';
import OptionHeading from '../src/components/OptionHeading';
import Pantone from '../src/components/Pantone';

export default function Options() {
  return (
    <Layout title="Business app" description="Business aoo">
      <Section spacing={3}>
        <div sx={{ pt: 6 }}>
          <Styled.h1 sx={{ textAlign: 'center' }}>OUR SERVICES</Styled.h1>
          <div sx={{ maxWidth: 1200, textAlign: 'center', margin: 'auto' }}>
            <Styled.p>Business development encompasses a wide range of activities and strategies aimed at enhancing a company's growth, profitability, and market presence. It involves identifying opportunities, building relationships, and implementing plans to achieve organizational objectives. Here are two of our services. </Styled.p>
          </div>
        </div>
      </Section>
      <Section>

        <div sx={{ display: 'flex', flexDirection: ['column', 'row'] }}>
          <OptionHeading title="Business Services" text="concerned about the building of service systems in order to deliver value to their customers and to act in the roles of service provider and service consumer." />
          <div
            sx={{
              display: 'grid', gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'], gridGap: 35, width: '100%',
            }}
          >
            <Card
              title="Market analysis"
              image={(
                <Image
                  alt="Market analysis"
                  src="/market_analysis.jpg"
                  layout="fixed"
                  height={250}
                  width={250}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={100}
                />
              )}
            />
            <Card
              title="Networking and Relationship Building"
              featured
              featureText="Most Popular"
              image={(
                <Image
                  alt="Networking and Relationship Building"
                  src="/networking.jpg"
                  layout="fixed"
                  height={250}
                  width={250}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={100}
                />
              )}
            />
            <Card
              title="Strategic Planning"
              image={(
                <Image
                  alt="Strategic Planning"
                  src="/strategic.jpg"
                  layout="fixed"
                  height={250}
                  width={250}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={100}
                />
              )}
            />
          </div>
        </div>

        <div sx={{ display: 'flex', flexDirection: ['column', 'row'], mt: 5 }}>
          <OptionHeading title="Marketing service" text="Responsible for increasing the sales of a client company by helping the company gain new customers as well as keep current ones" />
          <div
            sx={{
              display: 'grid', gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'], gridGap: 35, width: '100%',
            }}
          >
            <Card
              title="Branding"
              image={(
                <Image
                  alt="Branding"
                  src="/branding.jpg"
                  layout="fixed"
                  height={200}
                  width={300}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={40}
                  sx={{ borderRadius: 0 }}
                />
              )}
            />
            <Card
              title="Advertising"
              image={(
                <Image
                  alt="Advertising"
                  src="/advertising.jpg"
                  layout="fixed"
                  height={200}
                  width={300}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={40}
                  sx={{ borderRadius: 0 }}
                />
              )}
            />
          </div>
        </div>

    
      </Section>

      <Section bgColor="muted">
        <div sx={{
          textAlign: 'center',
          maxWidth: 620,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        >
          <Styled.h2>About us</Styled.h2>
          <Styled.p sx={{ mb: 4 }}>About us page is very important for the visitor to know about the page objective</Styled.p>
          <Link to="tel:0123456789" styles={{ display: 'inline-block' }}>
            <Button>
              <PhoneIcon sx={{ mr: 2 }} />
              +60123456789
            </Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
