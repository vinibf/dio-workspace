const File = require("../shared/File");

const my_file = new File("./inputs/poligonos-de-triangulos.txt");

const lados = parseInt(my_file.getLine());

console.log(lados - 2);

/*
entradas      saidas
   3            1
 ------------------
   4            2
 ------------------
   5            3
*/
