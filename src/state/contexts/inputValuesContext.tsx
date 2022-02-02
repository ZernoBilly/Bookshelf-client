import React, { createContext, useState } from "react";

import { IInputValues } from "../../interfaces/IInputValues";

const initInputValues = {
  title: "",
  author: "",
  description: "",
};

const InputValuesContext = createContext<
  [IInputValues, React.Dispatch<React.SetStateAction<IInputValues>>]
>([initInputValues, () => {}]);

const InputValuesProvider = ({ children }: any) => {
  const [inputValues, setInputValues] = useState<IInputValues>(initInputValues);

  return (
    <InputValuesContext.Provider value={[inputValues, setInputValues]}>
      {children}
    </InputValuesContext.Provider>
  );
};

export { InputValuesContext, InputValuesProvider };
