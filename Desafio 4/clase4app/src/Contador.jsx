import React, { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);
    const incrementar = () => {
        setContador(contador + 1);
    };


    const decrementar = () => {
        setContador(contador - 1);
    };

    return (
        <div className="Contador">
            <h2 style={{ color: 'rgb(6, 15, 43)', backgroundColor: 'beige', padding: '10px', borderRadius: '5px' }}>Contador: {contador}</h2>
            <button style={{ backgroundColor: ' #22254d', color: '#fff3bc', padding: '8px 16px', margin: '0 5px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={incrementar}>Incrementar</button>
            <button style={{ backgroundColor: '#fff3bc', color: '#22254d', padding: '8px 16px', margin: '0 5px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}  onClick={decrementar}>Decrementar</button>
        </div>
    );

};

export default Contador;