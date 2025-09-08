import { NavigationMenu, NavigationMenuList } from '..';
import { ListItem } from './list-item.component';
import { Code } from 'cosmos/Code';

const Fixture = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <ListItem href="#" title="Introduction">
            Re-usable components built using Radix UI and Tailwind CSS.
          </ListItem>
          <ListItem href="#" title="Installation">
            How to install dependencies and structure your app.
          </ListItem>
          <ListItem href="#" title="Typography">
            Styles for headings, paragraphs, lists...etc
          </ListItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Code language='html'>{`
<NavigationMenu>
  <NavigationMenuList>
    <ListItem href="#" title="Introduction">
      Re-usable components built using Radix UI and Tailwind CSS.
    </ListItem>
    <ListItem href="#" title="Installation">
      How to install dependencies and structure your app.
    </ListItem>
    <ListItem href="#" title="Typography">
      Styles for headings, paragraphs, lists...etc
    </ListItem>
  </NavigationMenuList>
</NavigationMenu>
      `}</Code>
    </>
  );
};

export default Fixture;