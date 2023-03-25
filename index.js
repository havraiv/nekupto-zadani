const product1 = {
  image: 'img/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description:
    'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'img/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description:
    'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'img/anatoplavky.jpg',
  name: 'Anatoplavky',
  description:
    'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

const firstProduct = document.querySelector('#product1');
firstProduct.classList.add('border-primary');

const secondProduct = document.querySelector('#product2');
const button2 = secondProduct.querySelector('button');
button2.classList.remove('btn-primary');

const thirdProduct = document.querySelector('#product3');
const cardElm3 = thirdProduct.querySelector('h2');
cardElm3.classList.toggle('text-center');

const product1content = `
<img class="card-img-top" src="${product1.image}" alt="Card image cap">
<div class="card-body">
  <h2 class="card-title">${product1.name}</h2>
  <p class="card-text">${product1.description}</p>
</div>
<button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;

// Do nějaké proměnné si uložte element prvního produktu a nastavte jeho innerHTML na váš sestavený řetězec. Tímto na stránku vložíme obrázek prvního produktu.

// Opakujte tento postup pro všechny ostatní produkty. Na konci byste měli dospět do stavu, kdy soubor index.html vůbec neosahuje vnitřek karet pro jednotlivé produkty. Jejich obsah je celý vyroben JavaScriptem z připravených dat.

firstProduct.innerHTML = product1content;
