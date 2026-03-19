function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  // a função "toggle" faz com que, se na lista de classes do html conter a classe 'light', será removido. Se não, será adicionado. Assim é feito o botão de modo escuro/claro 
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  }else{
    img.setAttribute('src', './assets/avatar.png')
  }
}