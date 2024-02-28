export type Context = {
  name: string;
  age: number;
};

export const createContext = (): Context => {
  return {
    name: "John",
    age: 30,
  };
};
