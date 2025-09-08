import { InputForm } from './input-form.component';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../button/button.component';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const methods = useForm({
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <InputForm name="name" label="Name" placeholder="Enter your name" />
          <InputForm
            name="phone"
            label="Phone"
            placeholder="(99) 99999-9999"
            mask="(99) 99999-9999"
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
      <Code>{`
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <InputForm name="name" label="Name" placeholder="Enter your name" />
    <InputForm
      name="phone"
      label="Phone"
      placeholder="(99) 99999-9999"
      mask="(99) 99999-9999"
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>
      `}</Code>
    </>
  );
};

export default Fixture;