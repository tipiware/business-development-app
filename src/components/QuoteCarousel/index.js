/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useState } from 'react';

import LeftQuote from '../../images/LeftQuote';
import LeftArrow from '../../images/LeftArrow';
import RightArrow from '../../images/RightArrow';

const quotes = [
  { quote: 'Great partner to collaborate with. Will seek for next project collaboration', author: 'Joshua Asher' },
  { quote: 'Supportive team from this organization. They are very experienced in project management', author: 'Danny Chong' },
];

const QuoteCarousel = () => {
  const [itemNumber, setItemNumber] = useState(0);

  return (
    <div sx={{
      position: 'relative',
      px: [50, 100],
      mt: 40,
      minHeight: 150,
    }}
    >
      <LeftQuote sx={{
        position: 'absolute', left: [0, 40], height: [24, 39], width: [31, 46], top: -20,
      }}
      />
      <LeftArrow
        sx={{
          position: 'absolute',
          left: [10, 50],
          top: 0,
          bottom: 0,
          margin: 'auto',
          cursor: 'pointer',
          fill: itemNumber > 0 ? 'primary' : 'gray',
        }}
        onClick={() => itemNumber > 0 && setItemNumber(itemNumber - 1)}
      />
      <LeftQuote sx={{
        position: 'absolute', right: [0, 40], height: [24, 39], width: [31, 46], bottom: -10, transform: 'rotate(180deg)',
      }}
      />
      <RightArrow
        sx={{
          position: 'absolute',
          right: [10, 50],
          top: 0,
          bottom: 0,
          margin: 'auto',
          cursor: 'pointer',
          fill: itemNumber < quotes.length - 1 ? 'primary' : 'gray',
        }}
        onClick={() => itemNumber < quotes.length - 1 && setItemNumber(itemNumber + 1)}
      />
      <Styled.p sx={{ fontSize: 1 }}>{quotes[itemNumber].quote}</Styled.p>
      <Styled.p sx={{ fontSize: 1, position: 'absolute', right: [50, 100] }}>
        -
        {' '}
        {quotes[itemNumber].author}
      </Styled.p>

    </div>
  );
};

export default QuoteCarousel;
