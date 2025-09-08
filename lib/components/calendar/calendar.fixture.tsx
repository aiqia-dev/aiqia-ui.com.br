import { Calendar } from './calendar.component';
import { useFixtureSelect, useFixtureState } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [date, setDate] = useFixtureState<any>('date');
  const [mode] = useFixtureSelect('mode', {
    options: ['default', 'single', 'multiple', 'range'],
  });

  return (
    <>
      <div className="flex justify-center">
        <Calendar
          mode={mode}
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-auto mx-auto"
        />
      </div>

      <Code>{`
<Calendar
  mode="${mode}"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>
      `}</Code>
    </>
  );
};

export default Fixture;