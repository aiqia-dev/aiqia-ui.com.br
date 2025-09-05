import { SelectForm } from './select-form.component';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../button/button.component';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
];

const Fixture = () => {
  const methods = useForm({
    defaultValues: {
      fruit: 'apple',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <SelectForm
          name="fruit"
          label="Fruit"
          placeholder="Select a fruit"
          options={options}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default Fixture;
