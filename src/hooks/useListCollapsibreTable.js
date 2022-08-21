import { useState } from "react";

const useListCollapsibreTable = (list) => {
  const [listTable, setListTable] = useState(
    list.map((item) => {
      return {
        ...item,
        showSubmenus: false,
        shopping: item.shopping.map((menu) => ({
          ...menu,
        })),
      };
    })
  );

  const submenusExpanded = (itemId) => {
    setListTable(
      listTable.map((item) => {
        if (itemId === item.id) {
          return { ...item, showSubmenus: !item.showSubmenus };
        } else {
          return item;
        }
      })
    );
  };

  return { listTable, submenusExpanded };
};

export default useListCollapsibreTable;
