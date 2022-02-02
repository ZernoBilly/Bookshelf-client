import React from "react";

import { BooksProvider } from "./contexts/booksContext";
import { SelectedBooksProvider } from "./contexts/selectedBookContext";
import { InputValuesProvider } from "./contexts/inputValuesContext";

import { combineComponents } from "../utils/combineComponents";

const providers = [BooksProvider, SelectedBooksProvider, InputValuesProvider];

export const CombinedProviders = combineComponents(...providers);
