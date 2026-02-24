import { Calendar } from './calendar.component';
import { useFixtureSelect, useFixtureState } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [date, setDate] = useFixtureState<any>('date');
  const [mode] = useFixtureSelect<'single' | 'range'>('mode', {
    options: ['single', 'range']
  });
  const [layout] = useFixtureSelect<"dropdown" | "label" | "dropdown-months" | "dropdown-years">('layout', {
    options: ["dropdown", "label", "dropdown-months", "dropdown-years"]
  });

  return (
    <>
      <div className="flex justify-center">
        <Calendar
          mode={mode as any}
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-auto mx-auto"
          captionLayout={layout}
        />
      </div>

      <Code>{`
<Calendar
  mode="${mode}"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
  captionLayout="${layout}"
/>
      `}</Code>
    </>
  );
};

export default Fixture;