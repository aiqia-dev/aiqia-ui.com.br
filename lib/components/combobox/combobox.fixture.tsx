import { Combobox } from './combobox.component';
import { useFixtureState } from 'react-cosmos/client';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

const Fixture = () => {
  const [selected, setSelected] = useFixtureState<string | undefined>('selected', '1');

  return (
    <Combobox
      label="Combobox"
      options={options}
      selected={selected}
      onSelect={setSelected}
    />
  );
};

export default Fixture;
