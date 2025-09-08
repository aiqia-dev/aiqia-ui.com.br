import { MaskedInput } from './masked-input.component';
import { useFixtureInput } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [value, setValue] = useFixtureInput('value', "");
  const [mask] = useFixtureInput('mask', "(##) #####-####");

  return (
    <>
      <MaskedInput
        mask={mask}
        value={value}
        onChange={setValue}
        placeholder="(99) 99999-9999"
      />
      <Code>{`
<MaskedInput
  mask="${mask}"
  value={value}
  onChange={setValue}
  placeholder="(99) 99999-9999"
/>
      `}</Code>
    </>
  );
};

export default Fixture;