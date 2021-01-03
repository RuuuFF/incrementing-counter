const counters = document.querySelectorAll('.counter')

// Para cada item em "counters"
counters.forEach(counter => {
  // Adiciona um "0" como string
  counter.innerText = '0'
  
  // Cria a função
  const updateCounter = () => {
    // Pega o valor no atributo e muda seu tipo para number (com o "+")
    const target = +counter.getAttribute('data-target')
    // Pega o texto em "counter" (o "0" adicionado na linha 6) e muda seu tipo para number (com o "+")
    const c = +counter.innerText
    
    // O incremento vai ser o valor de "target" dividido por 300
    const increment = target / 300
    
    // Se "c" (inicialmente 0) for menor que "target", ele entra
    if (c < target) {
      // Atribui o valor de "c" com o valor de "increment" e o arredonda com "Math.ceil"
      counter.innerText = `${Math.ceil(c + increment)}`
      // Chama a função "updateCounter" com um delay de 2ms (milisegundos)
      setTimeout(updateCounter, 2)
    } else {
      // Caso o valor ultrapasse ("c" for maior que "target"), ele atribui o valor de "target" ao texto de "counter"
      counter.innerText = target
    }
  }
  
  // Chama a função "updateCounter"
  updateCounter()
})