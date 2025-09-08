import { MultiSelect } from './multi-select.component';
import { useFixtureInput } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

const Fixture = () => {
  const [selectedValues, setSelectedValues] = useFixtureInput<string[]>('selectedValues', ['1', '3']);
  const [placeholder] = useFixtureInput('placeholder', "Selecione...");
  const [maxCount] = useFixtureInput('maxCount', 3);
  const [preventSelectAll] = useFixtureInput('preventSelectAll', false);
  const [disabled] = useFixtureInput('disabled', false);
  const [isLoading] = useFixtureInput('isLoading', false);

  return (
    <>
      <MultiSelect
        options={options}
        onValueChange={setSelectedValues}
        defaultValue={selectedValues}
        placeholder={placeholder}
        maxCount={maxCount}
        preventSelectAll={preventSelectAll}
        isLoading={isLoading}
        disabled={disabled}
      />
      <Code>{`
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

return (
  <MultiSelect
    options={options}
    onValueChange={setSelectedValues}
    defaultValue={selectedValues}
    placeholder="${placeholder}"
  />
)
      `}</Code>
    </>
  );
};

export default Fixture;