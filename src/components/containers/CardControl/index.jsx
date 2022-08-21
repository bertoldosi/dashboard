import React from "react";
import Card from "@Common/Card";

import { Scontent, STable, STableCollapsed } from "./styles";
import Thead from "./components/Thead";
import useListCollapsibreTable from "@Hooks/useListCollapsibreTable";
import IconTable from "./components/IconTable";
import ContentAmount from "./components/ContentAmount";
import Header from "./components/Header";
import InputTable from "./components/InputTable";

function CollapsibleTable({ monthly_expenses }) {
  const { listTable, submenusExpanded } =
    useListCollapsibreTable(monthly_expenses);

  return (
    <Card>
      <Scontent>
        <Header />
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
                              <td>
                                <InputTable value={buy.description} />
                              </td>
                              <td>
                                <InputTable value={buy.amount} />
                              </td>
                              <td>
                                <InputTable value={buy.responsible} />
                              </td>
                            </tr>
                          ))}
                        </tbody>

                        <ContentAmount />
                      </STableCollapsed>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>

          <ContentAmount />
        </STable>
      </Scontent>
    </Card>
  );
}

export default CollapsibleTable;
