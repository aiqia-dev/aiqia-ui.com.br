import { Switch } from './switch.component';
import { useFixtureInput } from 'react-cosmos/client';
import { Label } from '../label/label.component';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [checked, setChecked] = useFixtureInput('checked', false);

  return (
    <>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" checked={checked} onCheckedChange={setChecked} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <Code>{`
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" checked={checked} onCheckedChange={setChecked} />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
      `}</Code>
    </>
  );
};

export default Fixture;