document.getElementById('formFactorial').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultado').innerText = 'Por favor, ingrese un número entero positivo.';
    } else {
        const factorial = calcularFactorial(numero);
        document.getElementById('resultado').innerText = `El factorial de ${numero} es: ${factorial}`;
    }
});

function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}
