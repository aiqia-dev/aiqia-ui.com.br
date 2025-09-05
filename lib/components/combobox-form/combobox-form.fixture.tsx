import { ComboboxForm } from './combobox-form.component';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../button/button.component';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

const Fixture = () => {
  const methods = useForm({
    defaultValues: {
      myCombobox: '1',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <ComboboxForm
          name="myCombobox"
          label="Combobox Form"
          options={options}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default Fixture;
