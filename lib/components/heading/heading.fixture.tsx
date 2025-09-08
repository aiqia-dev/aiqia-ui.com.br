import { Heading } from './heading.component';
import { useFixtureSelect } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [variant] = useFixtureSelect('variant', {
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  });

  return (
    <>
      <Heading variant={variant}>Heading {variant}</Heading>
      <Code>{`
<Heading variant="${variant}">Heading ${variant}</Heading>
      `}</Code>
    </>
  );
};

export default Fixture;