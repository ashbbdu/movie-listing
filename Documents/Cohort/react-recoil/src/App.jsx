// import { useContext, useState } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import countAtom, { evenSelector } from "./store/atoms/count";

function App() {
  // const [count, setCount] = useState(0);
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

function Count() {
  console.log("re-render");

  return (
    <div>
      <CountRenderer />
      <Buttons />
      <EventCountRenderer />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
 
  return <div>
    <div>
     {count} 
    </div>
  </div>;
  
}

function EventCountRenderer () {
  const count = useRecoilValue(evenSelector);
  if(count) {
    return <div>It is even</div>
  } else {
    return <div>It is odd</div>
  }
}

function Buttons() {
  // It needs both
  console.log("re-render buttons");
  // const [count, setCount] = useRecoilState(countAtom);   
  const setCount = useSetRecoilState(countAtom)   // since we are not taking count so buttons are not re-rendering if we are using above useRecoilState button component is also re-rendering
  return (
    <div>
      <button
        onClick={() => {
          setCount(c => c + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(c => c - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
