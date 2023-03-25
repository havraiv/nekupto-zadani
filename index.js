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
