import { Code } from "cosmos/Code";
import { Alert, AlertDescription, AlertTitle } from "./alert.component";
import { useFixtureSelect } from "react-cosmos/client";

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

      <Code language="html">{code}</Code>
    </>
  )
};

export default Component;

const code =
  `<Alert variant="descructive">
  <AlertTitle>Alert title</AlertTitle>
  <AlertDescription>Alert decription</AlertDescription>
</Alert>`;