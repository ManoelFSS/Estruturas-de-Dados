

// 01- Crie um array que receba 5 itens e exiba no console.

let list = ['lanterna', 'barraca', 'corda', 'busula', 'esqueiro']

console.log(list)

// 02- Utilize um método para adicionar um nome ao inicio do array e outro no final.

list.unshift('mochila') // metodo unshift() sempre add mais um item e colocar ele na posiçao [0]
list.push('água')// metodo pop() sempre add ao final do array assim sendo o [ultimo]

console.log(list)

//  03- Utilize um método para adicionar dois nomes ao fim do array.

list.splice(7,0, 'cobertor', 'repelente')

console.log(list)


//  04- Utilize um método para remover o primeiro e o último nome do array.

list.shift()// metodo shift() sempre remove o primeiro item do array
list.pop() // metodo pop() sempre removerar o ultimo item do array

console.log(list)


// 06 Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()// metodo sort() ordenam de forma crecente  do menor para o maior.
// atenção : somentes os numeros de 0 a 9 serao ordernados de forma correta.
// apartir do 10 sera ordenado sendo em considerado o primeiro numero apartir de dois digitos

console.log(numbers)

// ex: let numbers = [7,5,6,3,8,9,2,1,4,10,11,12]


/* Exmplo */ let numbers_2 = [7,5,6,3,8,9,2,1,4,10,11,12]

numbers_2.sort() // obs: os numeros foram ordenados mas nao de forma que todos estejam em seu devido lugar
// Ex: [10, 11 , 12] estao  depois do 1 na sequencia 1, 10, 11, 12 com tudo pro metodo sort() eles estaram nao posiçao 1 pois todos eles estao com o numero 1 na frente como referencia de ordenaçao

console.log(numbers_2)



// 07 correçao do metodo sort()

numbers_2.sort((a,b)=>{ // usando dentro do metodo sort() uma funçao com parametros podemos corrigir o metodo sort().
// atençao :  temos que usar o return  da funçao para poder fazela funcionar e retornar para o metodo sort()
    return a-b
})
//obs: os parametros usados foram letras obs que a letra ( A ) e primeira letra do alfabeto e (B)  a segunda com tudo 
// a funçao usa isso como referencia para ordenar os numeros corretamente

console.log(numbers_2)

// 08 o metodo sort tambem pode ordenar letras.
let letras =['c','x','d','a']

letras.sort()

console.log(letras)

// 09 Crie um objeto que receba ao menos três propriedades sobre você.

let perfil = {
    nome:'Manoel',
    idade:'32',
    cidade:'trindade-pe'
}

console.log(perfil)

// 10 Adicione uma nova propriedade sem alterar seu objeto inicial.

perfil.altura = '167 cm'

console.log(perfil)


// 11 Remova uma propriedade desse objeto

delete perfil.cidade

console.log(perfil)

// 11 Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.

let cadrastro = [
    {
        nome:'douglas',
        idade:54,
        telefone:'+55999999999',
        amigos: ['joão','lucas','pedro','marcos']
    },

    {
        nome:'miguel',
        idade:23,
        telefone:'+55999999999',
        amigos: ['chiquim','zezim','castanha','amedoim']
    },

    {
        nome:'paulo',
        idade:54,
        telefone:'+55999999999',
        amigos:['jonata','zam','peter','mané']
    },

    {
        nome:'felipe',
        idade:54,
        telefone:'+55999999999',
        amigos: ['tatu','merenda','tiringa','charles']
    },
]

console.log(cadrastro)


// 12 Mostre no console o nome de um amigo de cada lista.

console.log(cadrastro[0].amigos[0])
console.log(cadrastro[1].amigos[1])
console.log(cadrastro[2].amigos[2])
console.log(cadrastro[3].amigos[3])
