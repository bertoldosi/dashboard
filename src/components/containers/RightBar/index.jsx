import { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";

import {
  StyleContainer,
  StyleSidebar,
  StyleHeader,
  StyleContent,
} from "./styles";

import layoutDefault from "@Assets/img/layout-1.jpg";
import { AppContext } from "@Contexts/AppProvider";
import layoutDark from "@Assets/img/layout-2.jpg";
import { BsFillXCircleFill } from "@Icons/";
import { useLocalStorage } from "@Hooks/useLocalStorage";

function RightBar() {
  const { isVisibleRightBar, onToggleRightBar, theme, setTheme } =
    useContext(AppContext);

  const [storedValue, setValue] = useLocalStorage("theme", "default");

  const [isCheckedDefault, setIsCheckedDefault] = useState(
    () => theme === "default"
  );
  const [isCheckedDark, setIsCheckedDark] = useState(() => theme === "dark");

  const onToggleTheme = useCallback((value) => {
    if (value === "dark") {
      setIsCheckedDark(true);
      setIsCheckedDefault(false);

      setTheme("dark");
      setValue("dark");
    } else if (value === "default") {
      setIsCheckedDefault(true);
      setIsCheckedDark(false);

      setTheme("default");
      setValue("default");
    }
  });

  useEffect(() => {
    if (storedValue) {
      onToggleTheme(storedValue);
    }
  }, [onToggleTheme, storedValue]);

  return (
    <StyleContainer isVisible={isVisibleRightBar}>
      <StyleSidebar>
        <StyleHeader>
          <span>Settings</span>
          <BsFillXCircleFill size={25} onClick={onToggleRightBar} />
        </StyleHeader>

        <StyleContent>
          <strong>Choose Layouts</strong>
          <div
            onClick={() => {
              onToggleTheme("default");
              onToggleRightBar();
            }}
          >
            <span>
              <input
                readOnly
                name="theme"
                type="radio"
                value="default"
                checked={isCheckedDefault}
              />
              <label htmlFor="default">Default</label>
            </span>
            <div>
              <Image src={layoutDefault} alt="tema default" />
            </div>
          </div>

          <div
            onClick={() => {
              onToggleTheme("dark");
              onToggleRightBar();
            }}
          >
            <span>
              <input
                onChange={() => {}}
                name="theme"
                type="radio"
                value="dark"
                checked={isCheckedDark}
              />
              <label htmlFor="defaul">Dark</label>
            </span>
            <div>
              <Image src={layoutDark} alt="tema dark" />
            </div>
          </div>
        </StyleContent>
      </StyleSidebar>
    </StyleContainer>
  );
}

export default RightBar;
