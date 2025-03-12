import { AiqiaSpinner } from "../spinner/spinner.component";

export function Loader() {
  return (
    <div className="flex items-center justify-center flex-1 p-10">
      <AiqiaSpinner className="w-40" />
    </div>
  );
}
