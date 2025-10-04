let idade = 15
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('Não pode entrar')
} else if (idade < 18 || idade > 65) {
    console.log('Pode entrar com acompanhante')
} else  {
    console.log('Pode entrar')
}