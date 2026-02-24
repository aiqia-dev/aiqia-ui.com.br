import { DateTimePicker } from './date-time-picker.component';
import { useFixtureInput, useFixtureSelect } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [date, setDate] = useFixtureInput<Date | undefined>('date', new Date());
  const [mode] = useFixtureSelect<'single' | 'range'>('mode', {
    options: ['single', 'range']
  });
  const [numberOfMonths] = useFixtureSelect<string>('numberOfMonths', {
    options: ['1', '2', '3', '4'],
  });

  return (
    <>
      <DateTimePicker
        value={date}
        onChange={setDate}
        captionLayout="dropdown"
        mode={mode as any}
        numberOfMonths={mode === 'range' ? numberOfMonths : 1 as any}
      />
      <Code>{`
<DateTimePicker value={date} onChange={setDate} ${mode === 'range' ? `numberOfMonths={${numberOfMonths}}` : ''} />
      `}</Code>
    </>
  );
};

export default Fixture;