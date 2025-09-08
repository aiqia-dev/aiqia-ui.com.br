import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './card.component';
import { Button } from '../button/button.component';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button>Ok</Button>
        </CardFooter>
      </Card>

      <Code language='html'>{`
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <Button>Ok</Button>
  </CardFooter>
</Card>
      `}</Code>
    </>
  );
};

export default Fixture;