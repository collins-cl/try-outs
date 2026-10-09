import { router, usePathname } from "expo-router";
import { DrawerContentScrollView, DrawerItem } from "expo-router/drawer";

const ITEMS = [
  { label: "Home", href: "/" },
  { label: "Image", href: "/image" },
];

const DrawerMenu = (props) => {
  const pathname = usePathname();

  return (
    <DrawerContentScrollView {...props}>
      {ITEMS.map(({ label, href }) => (
        <DrawerItem
          key={href}
          label={label}
          focused={pathname === href}
          onPress={() => {
            props.navigation.closeDrawer();
            if (pathname !== href) router.replace(href);
          }}
        />
      ))}
    </DrawerContentScrollView>
  );
};

export default DrawerMenu;
