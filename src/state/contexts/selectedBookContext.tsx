import React, { createContext, useState } from "react";

import { IBook } from "../../interfaces/IBook";

const initState = {
  id: "",
  title: "",
  author: "",
  description: "",
};

const SelectedBookContext = createContext<
  [IBook, React.Dispatch<React.SetStateAction<IBook>>]
>([initState, () => {}]);

const SelectedBooksProvider = ({ children }: any) => {
  const [selectedBook, setSelectedBook] = useState<IBook>(initState);

  return (
    <SelectedBookContext.Provider value={[selectedBook, setSelectedBook]}>
      {children}
    </SelectedBookContext.Provider>
  );
};

export { SelectedBookContext, SelectedBooksProvider };
