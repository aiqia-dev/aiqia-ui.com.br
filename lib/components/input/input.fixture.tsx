import { Input } from './input.component';
import { useFixtureSelect } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [type] = useFixtureSelect('type', {
    options: ['text', 'number', 'file', 'password'],
    defaultValue: 'text',
  });

  return (
    <>
      <div className="space-y-4">
        <Input
          type={type}
          placeholder="Text Input"
        />
      </div>
      <Code>{`
<div className="space-y-4">
  <Input
    type="${type}"
    placeholder="Text Input"
    value={textValue}
    onChange={(e) => setTextValue(e.target.value)}
  />
</div>
      `}</Code>
    </>
  );
};

export default Fixture;