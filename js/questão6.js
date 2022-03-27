let codigo = prompt("Coloque o codigo da meranda desejada ?")

if (codigo == 100) {
    let cq = 1.70
    let unit = prompt("Digite o quantidade");
    let unit2 = unit * cq
    document.write("Cachorro Quente" + "<br><br>" + "Valor a pagar é de: " + unit2)
} else if (codigo == 101) {
    let bs = 2.30
    let unit = prompt("Digite o quantidade");
    let unit2 = unit * bs
    document.write("Bauru Simples" + "<br><br>" + "Valor a pagar é de: " + unit2.toFixed(2))
} else if (codigo == 102) {
    let bo = 2.60
    let unit = prompt("Digite o quantidade");
    let unit2 = unit * bo
    document.write("Bauru com ovo" + "<br><br>" + "Valor a pagar é de: " + unit2.toFixed(2))
} else if (codigo == 103) {
    let hb = 2.40
    let unit = prompt("Digite o quantidade");
    let unit2 = unit * hb
    document.write("Hamburguer" + "<br><br>" + "Valor a pagar é de: " + unit2.toFixed(2))
} else if (codigo == 104) {
    let ch = 2.50
    let unit = prompt("Digite o quantidade");
    let unit2 = unit * ch
    document.write("Cheeseburguer" + "<br><br>" + "Valor a pagar é de: " + unit2.toFixed(2))
} else if (codigo == 105) {
    let rf = 1.00
    let unit = prompt("Digite o quantidade");
    let unit2 = unit * rf
    document.write("Refrigerante" + "<br><br>" + "Valor a pagar é de: " + unit2.toFixed(2))
}