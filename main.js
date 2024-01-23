// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

{
  alert('Hello World!')
}

// 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

{
  const firstNumber = Number(
    prompt(
      'Vamos realizar uma soma, digite o primeiro número que será somado: '
    )
  )
  const secondNumber = Number(
    prompt('Digite o segundo número que será somado: ')
  )

  alert(
    'O resultado da soma entre os dois números é ' +
      (firstNumber + secondNumber)
  )
}

// 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

{
  const data = 3

  if (typeof data === 'number') {
    alert('É um número')
  } else {
    alert('Não é um número')
  }
}

// 4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

{
  const data = 3

  if (typeof data === 'string') {
    alert('É uma string')
  } else {
    alert('Não é uma string')
  }
}

// 5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

{
  const data = true

  if (typeof data === 'boolean') {
    alert('É um booleano')
  } else {
    alert('Não é um booleano')
  }
}

// 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

{
  const firstNumber = Number(
    prompt(
      'Vamos realizar uma subtração, digite o primeiro número que será subtraído: '
    )
  )
  const secondNumber = Number(prompt('Digite o segundo número: '))

  alert(
    'O resultado da subtração entre os dois números é ' +
      (firstNumber - secondNumber)
  )
}

// 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

{
  const firstNumber = Number(
    prompt(
      'Vamos realizar uma multiplicação, digite o primeiro número que será multiplicado: '
    )
  )
  const secondNumber = Number(prompt('Digite o segundo número: '))

  alert(
    'O resultado da multiplicação entre os dois números é ' +
      firstNumber * secondNumber
  )
}

// 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

{
  const firstNumber = Number(
    prompt(
      'Vamos realizar uma divisão, digite o primeiro número que será dividido: '
    )
  )
  const secondNumber = Number(prompt('Digite o segundo número: '))

  alert(
    'O resultado da divisão entre os dois números é ' +
      firstNumber / secondNumber
  )
}

// 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

{
  const number = Number(
    prompt('Digite um número, vou dizer se ele é par ou não')
  )

  if (number % 2 === 0) {
    alert('É um número par')
  } else {
    alert('Não é um número par')
  }
}

// 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

{
  const number = Number(
    prompt('Digite um número, vou dizer se ele é ímpar ou não')
  )

  if (number % 2 !== 0) {
    alert('É um número ímpar')
  } else {
    alert('Não é um número ímpar')
  }
}
