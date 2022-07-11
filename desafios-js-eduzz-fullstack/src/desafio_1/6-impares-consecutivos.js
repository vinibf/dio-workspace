const File = require("../shared/File");

const my_file = new File("./inputs/6-impares-consecutivos.txt");

const num = parseInt(my_file.getLine());

const init = num % 2 === 0 ? num + 1 : num;

for (let i = init; i <= init + 10; i += 2) {
  console.log(i);
}

/*
entradas      saidas
   8            9
                11
                13
                15
                17
                19
*/
