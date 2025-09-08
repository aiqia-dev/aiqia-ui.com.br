import { SelectForm } from './select-form.component';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../button/button.component';
import { Code } from 'cosmos/Code';
import { useFixtureInput } from 'react-cosmos/client';

const Fixture = () => {
  const [options] = useFixtureInput('options', [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'blueberry', label: 'Blueberry' },
  ]);
  const [placeholder] = useFixtureInput('placeholder', "Selecione...");
  const [label] = useFixtureInput('label', "Selecione uma fruta");
  const [disabled] = useFixtureInput('disabled', false);
  const [isLoading] = useFixtureInput('isLoading', false);

  const methods = useForm({
    defaultValues: {
      fruit: 'apple',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <SelectForm
            name="fruit"
            label={label}
            placeholder={placeholder}
            disabled={disabled}
            isLoading={isLoading}
            options={options}
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
      <Code>{`
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <SelectForm
      name="fruit"
      label="Fruit"
      placeholder="Select a fruit"
      options={options}
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>
      `}</Code>
    </>
  );
};

export default Fixture;