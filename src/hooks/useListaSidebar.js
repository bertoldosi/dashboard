import { useState } from "react";

const useListaSidebar = (lista) => {
  const [listaSidebar, setListaSidebar] = useState(
    lista.map((item) => {
      return {
        ...item,
        menus: item.menus.map((menu) => ({
          ...menu,
          showTitle: false,
          showSubmenus: false,
          isSubmenus: menu.submenus.length > 0,
        })),
      };
    })
  );

  const submenusExpanded = (itemId) => {
    setListaSidebar(
      listaSidebar.map((item) => {
        return {
          ...item,
          menus: item.menus.map((menu) => {
            if (itemId === menu.id) {
              return { ...menu, showSubmenus: !menu.showSubmenus };
            } else {
              return menu;
            }
          }),
        };
      })
    );
  };

  return [listaSidebar, submenusExpanded];
};

export default useListaSidebar;
