import { Input } from './input.component';
import { useFixtureInput } from 'react-cosmos/client';

const Fixture = () => {
  const [textValue, setTextValue] = useFixtureInput('textValue', 'Hello');
  const [textareaValue, setTextareaValue] = useFixtureInput('textareaValue', 'This is a textarea');

  return (
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
  );
};

export default Fixture;
