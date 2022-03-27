var produtos = prompt("Selecione alguma categoria de produto.");

if (produtos == 1) {
    document.write("Alimento não-perecível");
} else if (produtos >= 2 && produtos <= 4) {
    document.write("Alimento perecível");
} else if (produtos >= 5 && produtos <= 6) {
    document.write("Vestuário");
} else if (produtos == 7) {
    document.write("Higiene Pessoal");
} else if (produtos >= 8 && produtos <= 15) {
    document.write("Limpeza e Utensílios Doméstiocos");
} else if (produtos >= 16) {
    document.write("Nenhum produto encontrado");
}