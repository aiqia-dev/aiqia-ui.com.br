import { Button } from '../button/button.component';
import { ToastProvider } from './toast.component';
import { Toaster } from '../toaster/toaster.component';
import { useToast } from '../../hooks/use-toast';
import { Code } from 'cosmos/Code';
import { useFixtureSelect } from 'react-cosmos/client';

const Fixture = () => {
  const { toast } = useToast();
  const [variant] = useFixtureSelect('variant', {
    options: ['default', 'destructive', 'success', 'warning'],
  });

  return (
    <>
      <ToastProvider>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: 'Scheduled: Catch up',
              description: 'Friday, February 10, 2023 at 5:57 PM',
              variant,
            });
          }}
        >
          Show Toast
        </Button>
        <Toaster />
      </ToastProvider>
      <Code>{`
<ToastProvider>
  <Button
    variant="outline"
    onClick={() => {
      toast({
        title: 'Scheduled: Catch up',
        description: 'Friday, February 10, 2023 at 5:57 PM',
        variant,
      });
    }}
  >
    Show Toast
  </Button>
  <Toaster />
</ToastProvider>
      `}</Code>
    </>
  );
};

export default Fixture;