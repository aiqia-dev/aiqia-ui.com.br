import { MaskedInput } from './masked-input.component';
import { useFixtureState } from 'react-cosmos/client';

const Fixture = () => {
  const [value, setValue] = useFixtureState('value');

  return (
    <MaskedInput
      mask="(99) 99999-9999"
      value={value as string}
      onChange={setValue}
      placeholder="(99) 99999-9999"
    />
  );
};

export default Fixture;
