import { ComboboxForm } from './combobox-form.component';
import { useForm } from 'react-hook-form';
import { Button } from '../button/button.component';
import { Code } from 'cosmos/Code';
import { Form } from '..';
import { useFixtureInput } from 'react-cosmos/client';

const Fixture = () => {
  const [label] = useFixtureInput<string>('label', 'Combobox');
  const [placeholder] = useFixtureInput<string | undefined>('placeholder', 'Selecione...');
  const [searchPlaceholder] = useFixtureInput<string | undefined>('searchPlaceholder', 'Digite para buscar...');
  const [emptyMessage] = useFixtureInput<string | undefined>('emptyMessage', 'Nenhum resultado encontrado.');
  const [options] = useFixtureInput('options', [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]);
  const [isDisabled] = useFixtureInput('disabled', false);
  const [isLoading] = useFixtureInput('loading', false);

  const form = useForm({
    defaultValues: {
      myCombobox: '1',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <ComboboxForm
            name="myCombobox"
            label={label}
            placeholder={placeholder}
            searchPlaceholder={searchPlaceholder}
            emptyMessage={emptyMessage}
            options={options}
            isDisabled={isDisabled}
            isLoading={isLoading}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Code>{`//...
const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];
  
const form = useForm({
  defaultValues: {
    myCombobox: '1',
  },
});

const onSubmit = (data) => {
  console.log(data);
};

return (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <ComboboxForm
        name="myCombobox"
        label={label}
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        emptyMessage={emptyMessage}
        options={options}
        isDisabled={isDisabled}
        isLoading={isLoading}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
)`}</Code>
    </>
  );
};

export default Fixture;