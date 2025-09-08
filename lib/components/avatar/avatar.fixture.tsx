import { Avatar, AvatarImage, AvatarFallback } from './avatar.component';
import { useFixtureInput } from 'react-cosmos/client';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  const [name] = useFixtureInput('name', 'John Doe');
  const [image] = useFixtureInput('image', 'https://github.com/shadcn.png');

  const fallback = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <>
      <Avatar>
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <Code language='html'>{`
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
      `}</Code>
    </>
  );
};

export default Fixture;