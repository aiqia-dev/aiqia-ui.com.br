import { Input } from './input.component';
import { useFixtureInput } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [textValue, setTextValue] = useFixtureInput('textValue', 'Hello');
  const [textareaValue, setTextareaValue] = useFixtureInput('textareaValue', 'This is a textarea');

  return (
    <>
      <div className="space-y-4">
        <Input
          placeholder="Text Input"
          value={textValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTextValue(e.target.value)}
        />
        <Input
          type="textarea"
          placeholder="Textarea"
          value={textareaValue}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(e.target.value)}
        />
      </div>
      <Code>{`
<div className="space-y-4">
  <Input
    placeholder="Text Input"
    value={textValue}
    onChange={(e) => setTextValue(e.target.value)}
  />
  <Input
    type="textarea"
    placeholder="Textarea"
    value={textareaValue}
    onChange={(e) => setTextareaValue(e.target.value)}
  />
</div>
      `}</Code>
    </>
  );
};

export default Fixture;