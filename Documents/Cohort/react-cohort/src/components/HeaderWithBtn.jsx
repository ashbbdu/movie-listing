import { useState } from "react";

const HeaderWithBtn = () => {
  const [name, setName] = useState("My name is harkirat");
  return (
    <div>
      <h4>{name}</h4>
      <button style={{ marginTop: 20 }} onClick={() => setName("My Name is" + Math.random())}>
        Change text
      </button>
    </div>
  );
};

export default HeaderWithBtn;
