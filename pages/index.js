/* 

PRIMEIRO TRYOUT

import { useState } from "react";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Contador />
    </div>
  );
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <buttom onClick={adicionarContador}>Adiciona</buttom>
    </div>
  );
}

export default Home;

/*/

function Home() {
  return (
    <div
      style={{
        margin: "100px auto",
        border: "1px dotted #ccc",
        width: "300px",
      }}
    >
      <div style={{ margin: "0 auto", width: "82%" }}>
        <h1 style={{ fontFamily: "monospace" }}>💌 Mozão,</h1>
        <p style={{ fontFamily: "monospace" }}>
          Te amo muito.. até em react 😍
        </p>
        <p style={{ fontFamily: "monospace" }}>
          Obrigada por ser boazinha de novo!
        </p>
        <p style={{ fontFamily: "monospace" }}>Beijo da favorita 😎</p>
      </div>
    </div>
  );
}

export default Home;
