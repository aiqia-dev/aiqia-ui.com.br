import { Toggle } from './toggle.component';
import { useFixtureSelect } from 'react-cosmos/client';
import { Bold } from 'lucide-react';

const Fixture = () => {
  const [variant] = useFixtureSelect('variant', {
    options: ['default', 'outline'],
  });
  const [size] = useFixtureSelect('size', {
    options: ['default', 'sm', 'lg'],
  });

  return (
    <Toggle variant={variant} size={size} aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
};

export default Fixture;
