import { Example1 } from "./components/ex1/Example1";
import { Example2 } from "./components/ex2/Example2";
import { Example3 } from "./components/ex3/Example3";
import { Example4 } from "./components/ex4/Example4";
import { Example5 } from "./components/ex5/Example5";
import { Example6 } from "./components/ex6/Example";

export const Root = () => {
  let style = {
    margin: "auto",
    width: "80%",
  };
  return (
    <>
      <div style={style}>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4/>
        <Example5/>
        <Example6/>
      </div>
    </>
  );
};
