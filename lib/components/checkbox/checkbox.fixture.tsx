import { Checkbox } from './checkbox.component';
import { useFixtureState } from 'react-cosmos/client';
import { Label } from '../label/label.component';

const Fixture = () => {
  const [checked, setChecked] = useFixtureState('checked', false);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" checked={checked} onCheckedChange={setChecked} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
};

export default Fixture;
