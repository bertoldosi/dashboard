import {
  BiDownArrowAlt,
  BiReceipt,
  BiRightArrowAlt,
  BiUpArrowAlt,
} from "react-icons/bi";

import {
  StyleContainer,
  StyleFooter,
  StyleHeader,
  StyleIcon,
  StyleInfo,
  StyleLabel,
  StyleTag,
} from "./styles";

function CardItem({ title, value, valueTag, colorTag }) {
  return (
    <StyleContainer>
      <StyleHeader>
        <StyleInfo>
          <StyleIcon>
            <BiReceipt size={20} />
          </StyleIcon>

          <StyleLabel>
            <strong>{title}</strong>
            <span>
              {value}
              {valueTag > 0 ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
            </span>
          </StyleLabel>
        </StyleInfo>
        <StyleTag colorTag={colorTag}>{`${valueTag}%`}</StyleTag>
      </StyleHeader>

      <StyleFooter>
        <span>Since last month</span>
        <BiRightArrowAlt size={22} href="#" />
      </StyleFooter>
    </StyleContainer>
  );
}

export default CardItem;
