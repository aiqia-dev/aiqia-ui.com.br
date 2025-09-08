import { AsyncSelect } from './async-select.component';
import { useFixtureInput } from 'react-cosmos/client';
import { useState } from 'react';
import { Code } from 'cosmos/Code';

interface Option {
  id: string;
  name: string;
}

const options: Option[] = [
  { id: '1', name: 'Option 1' },
  { id: '2', name: 'Option 2' },
  { id: '3', name: 'Option 3' },
];

const Fixture = () => {
  const [value, setValue] = useFixtureInput('value', '1');
  const [isLoading, setIsLoading] = useFixtureInput('isLoading', false);
  const [error] = useFixtureInput('error', '');
  const [disabled] = useFixtureInput('disabled', false);

  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleSearchChange = (searchTerm: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const filtered = options.filter((option) =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOptions(filtered);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <AsyncSelect<Option>
        label="Async Select"
        options={filteredOptions}
        isLoading={isLoading}
        renderOption={(option) => option.name}
        getOptionValue={(option) => option.id}
        getDisplayValue={(option) => option.name}
        value={value}
        onChange={setValue}
        onSearchChange={handleSearchChange}
        error={error}
        disabled={disabled}
      />

      <Code language='jsx'>{code}</Code>
    </>
  );
};

export default Fixture;

const code = `
<AsyncSelect
  label="Async Select"
  options={filteredOptions}
  isLoading={isLoading}
  renderOption={(option) => option.name}
  getOptionValue={(option) => option.id}
  getDisplayValue={(option) => option.name}
  value={value}
  onChange={setValue}
  onSearchChange={handleSearchChange}
  error={error}
  disabled={disabled}
/>
`;