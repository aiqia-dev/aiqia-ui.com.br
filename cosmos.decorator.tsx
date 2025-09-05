import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";

export default ({ children }) => (
  <ThemeProvider attribute="class" defaultTheme="light">
    <ModeToggle />
    <div className="p-15 pt-20">
      {children}
    </div>
  </ThemeProvider>
)

function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={handleChangeTheme} className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center bg-accent h-9 px-2 rounded-full gap-4 shadow">
      <Sun className="h-[1.2rem] w-[1.2rem] -rotate-90 transition-all dark:rotate-0" />
      <Moon className="h-[1.2rem] w-[1.2rem] -rotate-90 transition-all dark:rotate-0" />
      <div className="absolute -z-10 top-0.5 left-0.5 dark:left-auto dark:right-0.5 size-8 rounded-full bg-zinc-200 dark:bg-zinc-900 transition-all"></div>
    </button>
  );
}