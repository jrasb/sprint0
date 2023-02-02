const person = {
    firstName: 'olaf',
    lastName: 'krypczyk',
    age: '20',
    education: 'mbo',
    score: 3
}

const koobfaceProfile = {
    userName: 'jrasb',
    title: 'Default Text',
    story: 'Not Availible',
    date: 'dd/mm/yyyy',
    views: 'n views'
}

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

/* Fancy Meow Certified -=^-^=- */