function solucao(lista) {
    let soma = 0;
  
    for (let i = 0; i < lista.length; i++) {
        let numero = lista[i] / lista.length;
        soma += numero;
    }

    console.log(soma);
}