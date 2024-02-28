import { Context } from "./types";

export const createContext = async (): Promise<Context> => {
  return {
    name: "John",
    age: 30,
  };
};
