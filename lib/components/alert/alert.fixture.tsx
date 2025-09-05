import { Code } from "cosmos/Code";
import { Alert, AlertDescription, AlertTitle } from "./alert.component";
import { useFixtureSelect } from "react-cosmos/client";

const code =
  `<Alert variant="descructive">
  <AlertTitle>Alert title</AlertTitle>
  <AlertDescription>Alert decription</AlertDescription>
</Alert>`;

const Component = () => {
  const [variant] = useFixtureSelect('variant', {
    options: ['default', 'destructive', 'secondary', 'ghost', 'outline'],
  });

  return (
    <>
      <Alert {...{ variant }}>
        <AlertTitle>Alert title</AlertTitle>
        <AlertDescription>Alert decription</AlertDescription>
      </Alert>

      <Code>{code}</Code>
    </>
  )
};

export default Component;