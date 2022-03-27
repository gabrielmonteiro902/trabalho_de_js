let PlacaUnidade = 5;
let valorP = 499;
let totalP = valorP * PlacaUnidade;


if (PlacaUnidade <= 5) {
    let descontP = totalP * 0.02
    let fullvalor = totalP - descontP;
    document.writeln("Produto: Placa de Video");
    document.write("Unidades do produto: " + PlacaUnidade + "<br><br>");
    document.write("Valor: " + valorP + "R$" + "<br><br>");
    document.write("Valor sem desconto: " + PlacaUnidade * valorP + "R$" + "<br><br>");
    document.write("Valor Total: " + fullvalor + "R$");
} else if (PlacaUnidade <= 10 && PlacaUnidade > 5) {
    let descontP = totalP * 0.03;
    let fullvalor = totalP - descontP;
    document.write("Produto: Placa de Video" + "<br><br>");
    document.write("Unidades do produto: " + PlacaUnidade + "<br><br>");
    document.write("Valor: " + valorP + "R$" + "<br><br>");
    document.write("Valor sem desconto: " + PlacaUnidade * valorP + "R$" + "<br><br>")
    document.write("Valor Total: " + fullvalor + "R$");
} else if (PlacaUnidade > 10) {
    let descontP = totalP * 0.05;
    let fullvalor = totalP - descontP;
    document.write("Produto: Placa de Video" + "<br><br>");
    document.write("Unidades do produto: " + PlacaUnidade + "<br><br>");
    document.write("Valor: " + valorP + "R$" + "<br><br>");
    document.write("Valor sem desconto: " + PlacaUnidade * valorP + "R$" + "<br><br>");
    document.write("Valor Total: " + fullvalor + "R$");
}