import { Checkbox } from './checkbox.component';
import { useFixtureInput } from 'react-cosmos/client';
import { Label } from '../label/label.component';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [checked, setChecked] = useFixtureInput<any>('checked', false);

  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" checked={checked} onCheckedChange={setChecked} />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <Code>{`
<div className="flex items-center space-x-2">
  <Checkbox id="terms" checked={checked} onCheckedChange={setChecked} />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
      `}</Code>
    </>
  );
};

export default Fixture;