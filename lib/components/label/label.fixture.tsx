import { Label } from './label.component';
import { Input } from '../input/input.component';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Your Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <Code language='html'>{`
<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Your Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>
      `}</Code>
    </>
  );
};

export default Fixture;