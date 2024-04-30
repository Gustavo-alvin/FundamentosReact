import React from 'react'
import { useState } from 'react';

const ProximoTermo = () => {

    let razao = 3;
    let primeiroTermo = 2;

    const [termo02, setTermo02] = useState(primeiroTermo);


  return (
    <>
    <div>
        <h2>Termo pg</h2>
        <p>
            <strong>Razão: {razao}</strong>
        </p>
        <p>
           <strong> Primeiro Termo: {primeiroTermo}</strong>
        </p>

        <p>Termo Atual: {termo02}</p>
        <button
        onClick={() => {
            setTermo02 (termo02 * razao);
        }}
        >Proximo Termo</button>
    </div>
   
    </>
  );
};
export default ProximoTermo