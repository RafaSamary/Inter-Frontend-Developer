const alunos = [ {

    nome:'Rafael',
    nota: 5,
    turma: '1B',
},
{

    nome:'Renata',
    nota: 9,
    turma: '1B',
},
{

    nome:'Regina',
    nota: 6,
    turma: '2C',
},
{

    nome:'Amelia',
    nota: 3,
    turma: '2C',
},
];


   function alunosAprovados(arr, media){
       
    let aprovados = [];

    for(let i = 0;  i < arr.length; i++){
         
        const {nota, nome} = arr[i]; // tecnica de objectdestructing

        if(nota >= media){
            aprovados.push(nome);

            }
        }
       return aprovados;
    }
          
  console.log(alunosAprovados(alunos, 5))
     


