import { Badge } from './badge.component';
import { useFixtureSelect } from 'react-cosmos/client';

const Fixture = () => {
  const [variant] = useFixtureSelect('variant', {
    options: ['default', 'secondary', 'destructive', 'outline'],
  });

  return <Badge variant={variant}>Badge</Badge>;
};

export default Fixture;
