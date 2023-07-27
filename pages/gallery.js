/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';

import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import PhoneIcon from '../src/images/Phone';
import GalleryImage from '../src/components/GalleryImage';

export default function Gallery() {
  return (
    <Layout title="Gallery" description="">
      <Section spacing={3}>
        <div sx={{ pt: 6 }}>
          <Styled.h1 sx={{ textAlign: 'center' }}>GALLERY</Styled.h1>
        </div>
        <div sx={{ maxWidth: 1050, textAlign: 'center', margin: 'auto' }}>
            <Styled.p>Business services are a recognisable subset of economic services, and share their characteristics. The essential difference is that businesses are concerned about the building of service systems in order to deliver value to their customers and to act in the roles of service provider and service consumer.</Styled.p>
          </div>
      </Section>
      <Section>
        <div sx={{
          display: 'grid',
          gridTemplateColumns: ['100%', '1fr 1fr'],
          gridGap: 3,
        }}
        >
          <div>
            <GalleryImage src="/gallery-images/gallery-3.jpg" landscape />
            <GalleryImage src="/gallery-images/gallery-6.jpg" />
            <GalleryImage src="/gallery-images/gallery-2.jpg" landscape />
            <GalleryImage src="/gallery-images/gallery-8.jpg" />
            <GalleryImage src="/gallery-images/gallery-5.jpg" landscape />
            <GalleryImage src="/gallery-images/gallery-7.jpg" landscape />
          </div>
          <div>
            <GalleryImage src="/gallery-images/gallery-1.jpg" />
            <GalleryImage src="/gallery-images/gallery-4.jpg" landscape />
            <GalleryImage src="/gallery-images/gallery-9.jpg" />
            <GalleryImage src="/gallery-images/gallery-13.jpg" />
            <GalleryImage src="/gallery-images/gallery-12.jpg" landscape />
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
          <Styled.h2>Like What You See?</Styled.h2>
          <Styled.p sx={{ mb: 4 }}>Interested to know more about us? Give us a call or whatsapps us ar</Styled.p>
          <Link to="tel:8014449944" styles={{ display: 'inline-block' }}>
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
