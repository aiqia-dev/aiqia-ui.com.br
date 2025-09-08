import { DateTimePicker } from './date-time-picker.component';
import { useFixtureInput } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [date, setDate] = useFixtureInput<Date | undefined>('date', new Date());

  return (
    <>
      <DateTimePicker value={date} onChange={setDate} />
      <Code>{`
<DateTimePicker value={date} onChange={setDate} />
      `}</Code>
    </>
  );
};

export default Fixture;