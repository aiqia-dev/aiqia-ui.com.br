import { DateTimePicker } from './date-time-picker.component';
import { useFixtureState } from 'react-cosmos/client';

const Fixture = () => {
  const [date, setDate] = useFixtureState<Date | undefined>('date', new Date());

  return <DateTimePicker value={date} onChange={setDate} />;
};

export default Fixture;
