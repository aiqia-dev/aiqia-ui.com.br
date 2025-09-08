import { Textarea } from './textarea.component';
import { useFixtureInput } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [value, setValue] = useFixtureInput('value', 'This is a textarea.');

  return (
    <>
      <Textarea
        placeholder="Type your message here."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Code>{`
<Textarea
  placeholder="Type your message here."
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
      `}</Code>
    </>
  );
};

export default Fixture;