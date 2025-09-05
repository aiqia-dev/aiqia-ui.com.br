import { MultiSelect } from './multi-select.component';
import { useFixtureState } from 'react-cosmos/client';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

const Fixture = () => {
  const [selectedValues, setSelectedValues] = useFixtureState<string[]>(
    'selectedValues',
    ['1', '3']
  );

  return (
    <MultiSelect
      options={options}
      onValueChange={setSelectedValues}
      defaultValue={selectedValues}
      placeholder="Select options"
    />
  );
};

export default Fixture;
