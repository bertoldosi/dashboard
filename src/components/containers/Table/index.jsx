import Image from "next/image";
import Card from "@Common/Card";
import { StyleContainer, StyleTable, StyleName } from "./styles";
import profile from "@Assets/img/perfil.jpg";
import ImageRadio from "@Common/ImageRadio";
import Button from "@Common/Button";
import TagState from "@Common/TagState";

function Table() {
  const RenderName = () => (
    <StyleName>
      <ImageRadio src={profile} height={30} width={30} alt="Photo to profile" />
      <p>Philip Smead</p>
    </StyleName>
  );
  return (
    <StyleContainer>
      <Card title="Latest Transaction">
        <StyleTable>
          <tr>
            <th>(#)Id</th>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>#14256</td>
            <td>
              <RenderName />
            </td>
            <td>15/1/2018</td>
            <td>$94</td>
            <td>
              <TagState name="Delivered" color="#02a499" />
            </td>
            <td>
              <Button name="Edit" />
            </td>
          </tr>
          <tr>
            <td>#14256</td>
            <td>
              <RenderName />
            </td>
            <td>15/1/2018</td>
            <td>$94</td>
            <td>
              <TagState name="Delivered" color="rgb(248,180,37)" />
            </td>
            <td>
              <Button name="Edit" />
            </td>
          </tr>
        </StyleTable>
      </Card>
    </StyleContainer>
  );
}

export default Table;
