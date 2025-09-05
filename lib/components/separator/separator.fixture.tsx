import { Separator } from './separator.component';

const Fixture = () => {
  return (
    <div className="space-y-4">
      <div>
        <div className="text-sm font-medium leading-none">Radix Primitives</div>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
};

export default Fixture;
