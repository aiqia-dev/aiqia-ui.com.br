import { TextareaForm } from './textarea-form.component';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../button/button.component';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const methods = useForm({
    defaultValues: {
      message: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <TextareaForm
            name="message"
            label="Your Message"
            placeholder="Type your message here."
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
      <Code>{`
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <TextareaForm
      name="message"
      label="Your Message"
      placeholder="Type your message here."
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>
      `}</Code>
    </>
  );
};

export default Fixture;