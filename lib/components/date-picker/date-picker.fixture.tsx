import { DatePicker } from './date-picker.component';
import { useFixtureInput } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [date, setDate] = useFixtureInput<Date | undefined>('date', new Date());

  return (
    <>
      <DatePicker value={date} onChange={setDate} />
      <Code>{`
<DatePicker value={date} onChange={setDate} />
      `}</Code>
    </>
  );
};

export default Fixture;