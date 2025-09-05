import { Button } from './button.component';
import { useFixtureSelect, useFixtureInput } from 'react-cosmos/client';
import { Rocket } from 'lucide-react';

const Fixture = () => {
  const [variant] = useFixtureSelect('variant', {
    options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
  });
  const [size] = useFixtureSelect('size', {
    options: ['default', 'sm', 'lg', 'icon'],
  });
  const [disabled] = useFixtureInput('disabled', false);
  const [withIcon] = useFixtureInput('withIcon', false);

  return (
    <Button variant={variant} size={size} disabled={disabled}>
      {withIcon && <Rocket />}
      {size === 'icon' ? null : 'Button'}
    </Button>
  );
};

export default Fixture;
