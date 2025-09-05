import { Textarea } from './textarea.component';
import { useFixtureInput } from 'react-cosmos/client';

const Fixture = () => {
  const [value, setValue] = useFixtureInput('value', 'This is a textarea.');

  return (
    <Textarea
      placeholder="Type your message here."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Fixture;
