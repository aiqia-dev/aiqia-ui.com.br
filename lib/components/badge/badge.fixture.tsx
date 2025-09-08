import { Badge } from './badge.component';
import { useFixtureSelect } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [variant] = useFixtureSelect('variant', {
    options: ['default', 'secondary', 'destructive', 'outline'],
  });

  return (
    <>
      <Badge variant={variant}>Badge</Badge>
      <Code language='html'>{`
<Badge variant="${variant}">Badge</Badge>
      `}</Code>
    </>
  );
};

export default Fixture;