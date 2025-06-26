function mostrarContato() {
  let links = document.getElementById("contato-links");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}
function filtrarProdutos(marca) {
  const produtos = document.querySelectorAll('.produto-card');
  
  produtos.forEach(produto => {
    if (marca === 'todos' || produto.dataset.marca === marca) {
      produto.style.display = 'block';
    } else {
      produto.style.display = 'none';
    }
  });
}

function pesquisarProduto() {
  const termo = document.getElementById("buscaProduto").value.toLowerCase();
  const produtos = document.querySelectorAll('.produto-card');

  produtos.forEach(produto => {
    const titulo = produto.querySelector('h3').textContent.toLowerCase();
    if (titulo.includes(termo)) {
      produto.style.display = 'block';
    } else {
      produto.style.display = 'none';
    }
  });
}

function mostrarFormulario(botao) {
  const formulario = botao.nextElementSibling;
  if (formulario.style.display === "none") {
    formulario.style.display = "block";
  } else {
    formulario.style.display = "none";
  }
}


