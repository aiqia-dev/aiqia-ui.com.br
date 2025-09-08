import { RadioGroup, RadioGroupItem } from './radio-group.component';
import { useFixtureInput } from 'react-cosmos/client';
import { Label } from '../label/label.component';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [value, setValue] = useFixtureInput('value', 'option-one');

  return (
    <>
      <RadioGroup defaultValue="option-one" value={value} onValueChange={setValue}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">Option Three</Label>
        </div>
      </RadioGroup>

      <Code>{`
<RadioGroup defaultValue="option-one" value={value} onValueChange={setValue}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="option-three" />
    <Label htmlFor="option-three">Option Three</Label>
  </div>
</RadioGroup>
      `}</Code>
    </>
  );
};

export default Fixture;