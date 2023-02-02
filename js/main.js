// opdracht 1
const person = {
    firstName: 'olaf',
    lastName: 'krypczyk',
    age: '20',
    education: 'mbo',
    score: 3
}


// opdracht 2
const koobfaceProfile = {
    userName: 'jrasb',
    title: 'Default Text',
    story: 'Not Availible',
    date: 'dd/mm/yyyy',
    views: 'n views'
}

// opdarcht 3
class Pizza {
    constructor(name, description, ingredients) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
    }
}

const peperoniPizza = new Pizza('peperoni', 'mmm', 'peperoni, sauce, cheese');
const fourCheesesPizza = new Pizza('4 cheeses', 'tasty', '4 cheeses, sauce');
const margharitaPizza = new Pizza('margharita', 'easy peasy', 'mozzarella');


// opdracht 4
class Car {
    constructor(title, description, price, kilometer) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.kilometer = kilometer;
    }
}

const renault1 = new Car(
    'Renault Master | 2.3 dCi 150PK HANDGESCHAKELD LOWLINER VERK',
    'Financial lease voor $438,00 p/mnd.',
    '$438,00 p/mnd',
    '111.996km'
);

const renault2 = new Car(
    'Renault Master Bestelbus L3 H2 2023 Diesel Handgeschakeld',
    'Advertentie over eigen website',
    '$620,00 p/mnd',
    '30km'
);

const axiam1 = new Car(
    'Axiam Roadline -2008- incl. 3 mnd garantie + onderhoudsbeurt',
    `Deze Axiam Roadline staat bij een officiele Aixam dealer Garage Kaal
    & Buunk die sinds 1997 werkt met alle brommobiel merken`,
    '$6.950,00',
    '47.108km'
);

const ford1 = new Car(
    'Ford Transit Custom 2.0TDCI 170PK Automaat L1H1 Sport Euro6',
    'Advertentie over eigen website',
    '$454,00 p/mnd',
    '121.672km'
);

const tesla1 = new Car(
    'Tesla Model 3 SR+ MiC 62.3kw SUBSIDIE Wit interieur MMX',
    'Advertentie over eigen autospecialist business',
    '$39.999,00',
    '24.278km'
);

// opdrach 5
class LowerPrices {
    constructor(title, description, action, price) {
        this.title = title;
        this.description = description;
        this.action = action;
        this.price = price;
    }
}

const sunTablets = new LowerPrices(
    'Sun All-in-1 vaatwastabletten',
    'Per pak 25 wasbeurten',
    'Per verpakking 2.49',
    2.49
);

const monaPudding = new LowerPrices(
    'Mona Pudding',
    'Per bak 450 gram',
    'Per verpakking 89c',
    0.89
);

const nutella = new LowerPrices(
    'Nutella winter hazelnootpasta',
    '1 kg',
    'Per verpakking 4.99',
    4.99
);

const doveDeodorant = new LowerPrices(
    'Dove deodorant',
    'Per XXL bus 250ml',
    'Per XXL bus 2.49',
    2.49
);

const alpro = new LowerPrices(
    'Alpro',
    'Per stuk',
    'Per stuk 99c',
    0.99
);


// opdracht 6
class TweakersPhones {
    constructor(screendiagonal, resolution, fiveGCapable, operatingSystem, memory, storage) {
        this.screendiagonal = screendiagonal;
        this.resolution = resolution;
        this.fiveGCapable = fiveGCapable;
        this.operatingSystem = operatingSystem;
        this.memory = memory;
        this.storage = storage;
    }
}

const samsung1 = new TweakersPhones(
    '6.1"',
    '2340x1080',
    true,
    'Android 12',
    '8GB',
    '128GB'
);

const samsung2 = new TweakersPhones(
    '6.1"',
    '2340x1080',
    true,
    'Android 13',
    '8GB',
    '256GB'
);

const samsung3 = new TweakersPhones(
    '6.8"',
    '3088x1440',
    true,
    'Android 13',
    '12GB',
    '1TB'
);

const samsung4 = new TweakersPhones(
    '6.8"',
    '3080x1440',
    true,
    'Android 12',
    '12GB',
    '256GB'
);

const google1 = new TweakersPhones(
    '6.1"',
    '2400x1080',
    true,
    'Android 12',
    '6GB',
    '128GB'
);

// opdracht 7
const pizzaArray = [peperoniPizza, fourCheesesPizza, margharitaPizza];
console.log(pizzaArray);

// opdracht 8
const lowerPriceArray = [sunTablets, monaPudding, nutella, doveDeodorant, alpro];
console.log(lowerPriceArray);

// opdracht 9
const pizza = document.querySelector('#pizza');

pizzaArray.forEach((element) => {
    pizza.innerHTML += '<div class="plum">' + element.name + '<br>' + element.description + '<br>' + element.ingredients + '</div>'
});

// opdracht 10
const cars = document.querySelector('#cars')

lowerPriceArray.forEach((element) => {
    cars.innerHTML += '<div class="red">' + element.title + '<br>' + element.description + '<br>' + element.action + '<br>' + element.price + '</div>'
});
/* Fancy Meow Certified -=^-^=- */