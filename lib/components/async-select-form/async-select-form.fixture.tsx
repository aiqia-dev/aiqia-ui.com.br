import { AsyncSelectForm } from './async-select-form.component';
import { useFixtureInput } from 'react-cosmos/client';
import { useState } from 'react';
import { Code } from 'cosmos/Code';
import { useForm } from 'react-hook-form';
import { Form } from '..';

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
  const [isLoading, setIsLoading] = useFixtureInput('isLoading', false);
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

  const form = useForm({
    defaultValues: {
      mySelect: '1',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <AsyncSelectForm
            label="Async Select"
            name='mySelect'
            options={filteredOptions}
            isLoading={isLoading}
            renderOption={(option) => option.name}
            getOptionValue={(option) => option.id}
            getDisplayValue={(option) => option.name}
            onSearchChange={handleSearchChange}
            disabled={disabled}
          />
        </form>
      </Form>

      <Code language='jsx'>{code}</Code>
    </>
  );
};

export default Fixture;

const code = `
const options: Option[] = [
  { id: '1', name: 'Option 1' },
  { id: '2', name: 'Option 2' },
  { id: '3', name: 'Option 3' },
];

const form = useForm({
  defaultValues: {
    mySelect: '1',
  },
});

const onSubmit = (data: any) => {
  console.log(data);
};

return (
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <AsyncSelectForm
      label="Async Select"
      name='mySelect'
      options={filteredOptions}
      isLoading={isLoading}
      renderOption={(option) => option.name}
      getOptionValue={(option) => option.id}
      getDisplayValue={(option) => option.name}
      onSearchChange={handleSearchChange}
      disabled={disabled}
    />
  </form>
</Form>
)
`;