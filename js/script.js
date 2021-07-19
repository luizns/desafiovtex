const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')


  let carregando = `<img style="border-radius:50%;" src="assets/load.gif" >`;
 

  let pronto = `<p style="font-size:20px; color:#fff; font-weight:bold;">Cadastro Realizado</p>`

  content.innerHTML = carregando
''

  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})