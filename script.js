alert(`== Seja bem vindo(a) a área de Login. Aperte "OK" para continuar. ==`)

//Login do Usuário
const nome = prompt("Digite seu nome para realizar o Login.")
let idade = parseInt(prompt("Digite sua Idade!"))


//Verificação da idade do Usuário
if(idade < 18) {
  alert("Você não tem idade suficiente, não é possivel realizar o Login.")
}else if (idade >= 18) {
//Senha do Usuário
 let senha = prompt("Crie sua senha!")

//Login
let aprovNome = prompt("Digite seu nome novamente para realizar o Login!")
let aprovSenha = prompt("Digite sua senha novamente para realizar o Login!")

//Verificação do login
if(aprovNome == nome && aprovSenha == senha){
alert(`Olá ${nome}, seu login foi realizado com Sucesso. Seja bem vindo(a)!`)
}else {
    alert(`Nome ou senha incorretos, tente Novamente...`)
}
}