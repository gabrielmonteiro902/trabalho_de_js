let b1 = 9
let b2 = 9
let b3 = 9
let b4 = 8
let f = 4
let soma = b4 + b3 + b2 + b1
let mf = soma / f
if (mf >= 6) {
    document.write("Aprovado com media final de " + mf.toFixed(1));
} else if (mf <= 5) {
    document.write("Reprovado com media final de " + mf.toFixed(1))
}