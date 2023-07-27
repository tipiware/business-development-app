/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';

import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import PhoneIcon from '../src/images/Phone';

export default function Contact() {
  return (
    <Layout title="Contact Us" description="">
      <Section spacing={3}>
        <div sx={{ pt: 7 }}>
          <Styled.h1 sx={{ textAlign: 'center' }}>CONTACT US</Styled.h1>
        </div>
      </Section>

      <Section>

        <div sx={{ display: 'flex', flexDirection: ['column-reverse', 'row'], alignItems: 'center' }}>

          <iframe sx={{ width: ['100%', '50%'] }} title="map" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=universiti sains malaysia&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="600" height="450" frameBorder="0" allowFullScreen="" ariahidden="false" />

          <div sx={{ pl: [null, 4], width: ['100%', '50%'], mb: [4, null] }}>
            <Styled.p sx={{ mb: 3 }}>Feel to free to contact us via mobile</Styled.p>
            <Styled.p sx={{ mb: 3 }}>Or visit us at working hour(weekdays, 9am-5pm)</Styled.p>
            <Styled.p sx={{ mb: 4 }}>Thank you for your consideration!</Styled.p>
            <Link to="tel:+60123456789" styles={{ display: 'inline-block' }}>
              <Button>
                <PhoneIcon sx={{ mr: 2 }} />
                +60123456789
              </Button>
            </Link>
          </div>
        </div>
      </Section>

    </Layout>
  );
}
