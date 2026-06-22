import { DateTimePickerForm } from './date-time-picker-form.component';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../button/button.component';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const methods = useForm({
    defaultValues: {
      datetime: undefined as Date | undefined,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <DateTimePickerForm
            name="datetime"
            label="Data e Hora"
            granularity="minute"
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
      <Code>{`
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <DateTimePickerForm name="datetime" label="Data e Hora" granularity="minute" />
    <Button type="submit">Submit</Button>
  </form>
</Form>
      `}</Code>
    </>
  );
};

export default Fixture;
