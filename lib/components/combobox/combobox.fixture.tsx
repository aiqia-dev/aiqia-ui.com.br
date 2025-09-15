import { Combobox } from './combobox.component';
import { useFixtureInput } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';



const Fixture = () => {
  const [label] = useFixtureInput<string | undefined>('label', 'Combobox');
  const [placeholder] = useFixtureInput<string | undefined>('placeholder', 'Selecione...');
  const [searchPlaceholder] = useFixtureInput<string | undefined>('searchPlaceholder', 'Digite para buscar...');
  const [emptyMessage] = useFixtureInput<string | undefined>('emptyMessage', 'Nenhum resultado encontrado.');
  const [selected, setSelected] = useFixtureInput<string | undefined>('selected', undefined);
  const [options] = useFixtureInput('options', [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]);
  const [error] = useFixtureInput('error', '');
  const [disabled] = useFixtureInput('disabled', false);
  const [isLoading] = useFixtureInput('loading', false);

  return (
    <>
      <Combobox
        label={label}
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        emptyMessage={emptyMessage}
        options={options}
        selected={selected}
        onSelect={setSelected}
        error={error}
        disabled={disabled}
        isLoading={isLoading}
      />

      <Code language='tsx'>
        {`
const [selected, setSelected] = useState<string | undefined>();

<Combobox
  label="${label}"
  placeholder="${placeholder}"
  searchPlaceholder="${searchPlaceholder}"
  emptyMessage="${emptyMessage}"
  options={options}
  selected={selected}
  onSelect={setSelected}
  disabled={disabled}
  isLoading={isLoading}
  error="${error}"
/>`}
      </Code>
    </>
  );
};

export default Fixture;