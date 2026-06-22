import { DatePickerForm } from './date-picker-form.component';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../button/button.component';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const methods = useForm({
    defaultValues: {
      date: undefined as Date | undefined,
      period: undefined as { from: Date | undefined; to: Date | undefined } | undefined,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <DatePickerForm
            name="date"
            label="Data"
          />
          <DatePickerForm
            name="period"
            label="Período"
            mode="range"
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
      <Code>{`
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <DatePickerForm name="date" label="Data" />
    <DatePickerForm name="period" label="Período" mode="range" />
    <Button type="submit">Submit</Button>
  </form>
</Form>
      `}</Code>
    </>
  );
};

export default Fixture;
