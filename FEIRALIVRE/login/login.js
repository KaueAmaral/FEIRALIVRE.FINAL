var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

usuarios.push({
  nome: 'admin',
  email: 'admin@gmail.com',
  cpf: '123456789',
  senha: 'admin123'
});

localStorage.setItem('usuarios', JSON.stringify(usuarios));

var formEntrar = document.querySelector('#entrar');
var formCadastrar = document.querySelector('#cadastrar');
var btnCor = document.querySelector('.btn-cor');

formCadastrar.addEventListener('submit', function(event) {
  event.preventDefault();

  var novoUsuario = {
    nome: document.querySelector('#nome-cadastro').value,
    email: document.querySelector('#email-cadastro').value,
    cpf: document.querySelector('#cpf-cadastro').value,
    senha: document.querySelector('#senha-cadastro').value
  };

  usuarios.push(novoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  formCadastrar.reset();
});

formEntrar.addEventListener('submit', function(event) {
  event.preventDefault();

  var nome = document.querySelector('#nome-entrar').value;
  var senha =document.querySelector('#senha-entrar').value;

  var usuarioEncontrado = false;
  var senhaCorreta = false;
  for(var i = 0; i < usuarios.length; i++) {
    if(usuarios[i].nome === nome) {
      usuarioEncontrado = true;
      if(usuarios[i].senha === senha) {
        senhaCorreta = true;
      }
      break;
    }
  }

  if(!usuarioEncontrado) {
    document.querySelector('#erro-nome-entrar').textContent = 'Nome de usuário incorreto.';
    document.querySelector('#erro-nome-entrar').style.display = 'block';
  } else {
    document.querySelector('#erro-nome-entrar').style.display = 'none';
  }

  if(!senhaCorreta) {
    document.querySelector('#erro-senha-entrar').textContent = 'Senha incorreta.';
    document.querySelector('#erro-senha-entrar').style.display = 'block';
  } else {
    document.querySelector('#erro-senha-entrar').style.display = 'none';
  }

  if(usuarioEncontrado && senhaCorreta) {
    if (nome === 'admin') { 
      window.location.href = '../administrativo/admin.html'; 
    } else {
      window.location.href = '../catalogo/index.html'; 
    }
  }
});

document.querySelector('#btn-entrar').addEventListener('click', () => {
  formEntrar.style.left = "25px";
  formEntrar.style.transition = '0.5s';
  formCadastrar.style.left = "450px";
  btnCor.style.left = "0px";
});

document.querySelector('#btn-cadastrar').addEventListener('click', () => {
  formEntrar.style.left = "-450px";
  formCadastrar.style.left = "25px";
  formCadastrar.style.transition = '0.5s';
  btnCor.style.left = "125px";
});
