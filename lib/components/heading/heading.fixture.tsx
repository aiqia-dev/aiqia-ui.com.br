import { Heading } from './heading.component';
import { useFixtureSelect } from 'react-cosmos/client';

const Fixture = () => {
  const [variant] = useFixtureSelect('variant', {
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  });

  return <Heading variant={variant}>Heading {variant}</Heading>;
};

export default Fixture;
