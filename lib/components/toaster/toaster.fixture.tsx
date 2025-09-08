import { Toaster } from './toaster.component';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  return (
    <>
      <Toaster />
      <Code>{`
<Toaster />
      `}</Code>
    </>
  );
};

export default Fixture;