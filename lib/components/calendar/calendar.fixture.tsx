import { Calendar } from './calendar.component';
import { useFixtureState } from 'react-cosmos/client';

const Fixture = () => {
  const [date, setDate] = useFixtureState<Date | undefined>('date', new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};

export default Fixture;
