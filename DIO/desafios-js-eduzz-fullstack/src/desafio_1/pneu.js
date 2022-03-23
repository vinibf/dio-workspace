const File = require("../shared/File");

const my_file = new File("./inputs/pneu.txt");

const pressao_desejada = parseInt(my_file.getLine());
const pressao_lida = parseInt(my_file.getLine());

console.log(pressao_desejada - pressao_lida);

/*
entradas      saidas
   30           12
   18
 ------------------
   27           -3
   30
*/
