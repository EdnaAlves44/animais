import animais from './Animais.js'
import readline from 'readline'

const nomes = animais.map(animal => animal.nome)
const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt(' <AnimaMundi> ');
rl.prompt();

rl.on('line', function (line) {
    const trimmed = line.trim()

    const animal = animais.find(animal => animal.nome.toLowerCase() === trimmed)
    if (animal) {
        console.log(animal)
    } else {
        console.log('Você é um caçador... Vou fugir e você não me pega' + trimmed + '`.')
    }

    //rl.prompt();
//}).on('close', function () {//
    //console.log('Ah, não fuja ainda, quero ser seu amigo... Obrigado por jogar AnimaMundi!');//
    //process.exit(0);//
});//