var idAno = 2022 - 1957;
var trabalho = idAno - 39;

document.write("A idade do senhor Valdamer é de " + idAno + "<br><br>");
document.write("Começou a trabalhar com: " + trabalho + "<br><br>");


if (trabalho >= 30) {
    document.write("Aposentadoria aprovada.");
} else if (idAno >= 65) {
    document.write("Aposentadoria aprovada.");
} else if (idAno >= 60 && trabalho >= 25) {
    document.write("Aposentadoria aprovada.");
} else if (idAno <= 59 && trabalho <= 24) {
    document.write("Aposentadoria negada.")
}