import { ScrollArea } from './scroll-area.component';

const Fixture = () => {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 })
          .map((_, i) => `Tag ${i + 1}`)
          .map((tag) => (
            <>
              <div className="text-sm" key={tag}>
                {tag}
              </div>
              <div className="my-2 h-px w-full bg-border" />
            </>
          ))}
      </div>
    </ScrollArea>
  );
};

export default Fixture;
