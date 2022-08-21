import React from "react";
import Card from "@Common/Card";
import itemsTable from "./tableItems";

import { Scontent, STable, STableCollapsed } from "./styles";
import Thead from "./components/Thead";
import useListCollapsibreTable from "@Hooks/useListCollapsibreTable";
import IconTable from "./components/IconTable";

function CollapsibleTable() {
  const { listTable, submenusExpanded } = useListCollapsibreTable(itemsTable);

  return (
    <Card>
      <Scontent>
        <STable>
          <Thead listTitle={["Instituição", "Total", "Vencimento"]} />
          <tbody>
            {listTable.map((item) => (
              <>
                <tr key={item.id}>
                  <td>
                    <IconTable
                      item={item}
                      submenusExpanded={submenusExpanded}
                    />
                  </td>
                  <td>{item.amount}</td>
                  <td>{item.expiration_date}</td>
                </tr>

                {item.showSubmenus && (
                  <tr key={item.id}>
                    <td colSpan={4}>
                      <STableCollapsed isCollapsed={item.showSubmenus}>
                        <Thead
                          listTitle={["Descrição", "Valor", "Responsável"]}
                        />

                        <tbody>
                          {item.shopping.map((buy, i) => (
                            <tr key={i}>
                              <td>{buy.description}</td>
                              <td>{buy.amount}</td>
                              <td>{buy.responsible}</td>
                            </tr>
                          ))}
                        </tbody>
                      </STableCollapsed>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </STable>
      </Scontent>
    </Card>
  );
}

export default CollapsibleTable;
