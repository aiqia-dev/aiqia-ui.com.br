import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip.component';
import { Button } from '../button/button.component';
import { Code } from 'cosmos/Code';
import { useFixtureInput } from 'react-cosmos/client';

const Fixture = () => {
  const [delayDuration] = useFixtureInput('delayDuration', 100);
  const [disableHoverableContent] = useFixtureInput('disableHoverableContent', false);

  return (
    <>
      <TooltipProvider>
        <Tooltip delayDuration={delayDuration} disableHoverableContent={disableHoverableContent}>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Code>{`
<TooltipProvider delayDuration="${delayDuration}" disableHoverableContent={${disableHoverableContent}}>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
      `}</Code>
    </>
  );
};

export default Fixture;