import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select.component';
import { useFixtureInput } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [value, setValue] = useFixtureInput('value', '');
  const [disabled] = useFixtureInput('disabled', false);
  const [isLoading] = useFixtureInput('isLoading', false);

  return (
    <>
      <Select value={value} onValueChange={setValue} disabled={disabled}>
        <SelectTrigger className="w-[180px]" isLoading={isLoading}>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectContent>
      </Select>

      <Code language='html'>{`
<Select value={value} onValueChange={setValue}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
    <SelectItem value="grapes">Grapes</SelectItem>
    <SelectItem value="pineapple">Pineapple</SelectItem>
  </SelectContent>
</Select>
      `}</Code>
    </>
  );
};

export default Fixture;