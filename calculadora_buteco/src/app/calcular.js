export function calcularValores(conta, pessoas, gorjeta) {
    const valorConta = parseFloat(conta);
    const numPessoas = parseInt(pessoas);
    const porcentagemGorjeta = parseFloat(gorjeta) / 100;
  
    if (valorConta > 0 && numPessoas > 0) {
      const totalGorjeta = valorConta * porcentagemGorjeta;
      const totalPagar = valorConta + totalGorjeta;
      const totalPorPessoa = totalPagar / numPessoas;
  
      return {
        totalGorjeta: totalGorjeta.toFixed(2),
        totalPagar: totalPagar.toFixed(2),
        totalPorPessoa: totalPorPessoa.toFixed(2),
      };
    }
  
    return {
      totalGorjeta: "0.00",
      totalPagar: "0.00",
      totalPorPessoa: "0.00",
    };
  }
  