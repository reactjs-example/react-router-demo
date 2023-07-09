import { Example1 } from "./components/ex1/Example1";
import { Example2 } from "./components/ex2/Example2";

export const Root = () => {

  let style={
    margin: 'auto',
    width: '80%'
  }  
  return (
    <>
    <div style={style}>
    <Example1 />
      <Example2 />
    </div>
    </>
  );
};
