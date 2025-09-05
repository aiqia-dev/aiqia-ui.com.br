import { Switch } from './switch.component';
import { useFixtureState } from 'react-cosmos/client';
import { Label } from '../label/label.component';

const Fixture = () => {
  const [checked, setChecked] = useFixtureState('checked', false);

  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" checked={checked} onCheckedChange={setChecked} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
};

export default Fixture;
