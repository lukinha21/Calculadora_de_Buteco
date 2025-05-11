"use client";

import { useState } from "react";
import { calcularValores } from "../app/calcular";

export default function Home() {
  const [conta, setConta] = useState(0);
  const [pessoas, setPessoas] = useState(1);
  const [gorjeta, setGorjeta] = useState(0);
  const [resultado, setResultado] = useState({ totalGorjeta: "0.00", totalPagar: "0.00", totalPorPessoa: "0.00" });

  const handleCalcular = () => {
    const calculo = calcularValores(conta, pessoas, gorjeta);
    setResultado(calculo);
  };

  const handleZerar = () => {
    setConta(0);
    setPessoas(1);
    setGorjeta(0);
    setResultado({ totalGorjeta: "0.00", totalPagar: "0.00", totalPorPessoa: "0.00" });
  };

  return  (
    <div style={{ width: "300px", margin: "0 auto", fontFamily: "Arial, sans-serif", border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Calculadora de Buteco</h3>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
        <label>Conta </label>
        <input type="number" value={conta} onChange={(e) => setConta(e.target.value)} style={{ width: "70%" }} />
      </div>
      
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
        <label>Pessoa </label>
        <input type="number" value={pessoas} onChange={(e) => setPessoas(e.target.value)} style={{ width: "70%" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <label>Gorjeta </label>
        <input type="number" value={gorjeta} onChange={(e) => setGorjeta(e.target.value)} style={{ width: "50%" }} />
        <label>%</label>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <button type="button" onClick={handleCalcular} style={{ padding: "5px 10px", cursor: "pointer", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "5px" }}>
          Calcular
        </button>
        <button type="button" onClick={handleZerar} style={{ padding: "5px 10px", cursor: "pointer", backgroundColor: "#f44336", color: "#fff", border: "none", borderRadius: "5px" }}>
          Zerar
        </button>
      </div>

      <hr />

      <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
        <p>Gorjeta: <span style={{ float: "right" }}>{resultado.totalGorjeta}</span></p>
        <p>Total a pagar: <span style={{ float: "right" }}>{resultado.totalPagar}</span></p>
        <p>Total a pagar por pessoa: <span style={{ float: "right" }}>{resultado.totalPorPessoa}</span></p>
      </div>
    </div>
  );
}