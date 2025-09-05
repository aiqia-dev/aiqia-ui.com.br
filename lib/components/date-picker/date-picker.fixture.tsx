import { DatePicker } from './date-picker.component';
import { useFixtureState } from 'react-cosmos/client';

const Fixture = () => {
  const [date, setDate] = useFixtureState<Date | undefined>('date', new Date());

  return <DatePicker value={date} onChange={setDate} />;
};

export default Fixture;
