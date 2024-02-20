const ale = "ale";
const beer = "beer";
const brandy = "brandy";
const champagne = "champagne";
const citronVodka = "citron vodka";
const cointreau = "cointreau";
const gin = "gin";
const grandMarnier = "grand marnier";
const hardCider = "hard cider";
const irishStout = "irish stout";
const lager = "lager";
const mandarinVodka = "mandarin-flavored vodka";
const mexicanDark = "mexican dark beer";
const mexicanLager = "mexican lager";
const nigoriSake = "nigori-sake";
const paleAle = "pale ale";
const peppermintSchnapps = "peppermint schnapps";
const rubyPort = "ruby port";
const sake = "sake";
const stout = "stout";
const tequila = "tequila";
const vermouth = "vermouth";
const vodka = "vodka";
const whiskey = "whiskey";

const blackCurrantSyrup = "black currant syrup";
const gingerBeer = "ginger beer";
const gingerSyrup = "ginger syrup";
const lemonJuice = "lemon juice";
const lemonLimeSoda = "lemon-lime soda";
const limeJuice = "lime juice";
const mangoPuree = "mango puree";
const orangeJuice = "orange juice";
const simpleSyrup = "simple syrup";
const sweetSour = "sweet and sour sauce";
const tomatoJuice = "tomato juice";
const whitePeachPuree = "white peach puree";

const blackPepper = "black pepper";
const candiedGinger = "candied ginger";
const cinnamon = "cinnamon";
const coconutMilk = "coconut milk";
const cranberryJuice = "cranberry juice";
const cucumber = "cucumber";
const eggYolk = "egg yolk";
const ginger = "ginger";
const hotSauce = "hot sauce";
const kosherSalt = "kosher salt";
const lemon = "lemon wedge";
const lemonTwist = "lemon twist";
const lime = "lime wedge";
const limeTwist = "lime twist";
const mintLeaves = "mint leaves";
const mintSprig = "mint sprig";
const nutmeg = "nutmeg";
const orangeSlice = "orange slice";
const orangeTwist = "orange twist";
const orangeWedge = "orange wedge";
const peachSlice = "peach slice";
const pineappleJuice = "pineapple juice";
const pineappleSlice = "pineapple slice";
const salt = "salt";
const soySauce = "soy sauce";
const sugar = "sugar";
const wasabi = "wasabi";
const worcester = "worcestershire sauce";

const formulas = [
    {
        "name":"Ale Flip",
        "type":beer,
        "alcohol":[
            {
                "name":ale,
                "amount":"12 oz"
            },
            {
                "name": brandy,
                "amount": "1 oz"
            }
        ],
        "liquid": [
            {
                "name":lemonJuice,
                "amount": "1 oz"
            }],
        "garnish": [
            {
                "name": ginger,
                "amount": "pinch"
            },
            {
                "name": sugar,
                "amount": "1"
            },
            {
                "name": eggYolk,
                "amount": "1"
            },
        ]
    },
    {
        "name":"Beer Buster",
        "type":beer,
        "alcohol":[
            {
                "name": vodka,
                "amount": "1.5 oz"
            },
            {
                "name": ale,
                "amount": "12 oz"
            },
        ],
        "liquid": [],
        "garnish": [
            {
                "name":hotSauce,
                "amount": "2 dashes"
            },
        ] 
    },
    {
        "name":"Black and Tan",
        "type":beer,
        "alcohol":[
            {
                "name":paleAle,
                "amount":"6 oz"
            },
            {
                "name":stout,
                "amount": "6 oz"
            }
        ],
        "liquid": [],
        "garnish": [] 
    },
    {
        "name":"Black Velvet",
        "type":beer,
        "alcohol":[
            {
                "name":irishStout,
                "amount": "8 oz"
            },
            {
                "name": champagne,
                "amount": "4 oz"
            }
        ],
        "liquid": [],
        "garnish": [] 
    },
    {
        "name":"Black Velveteen",
        "type":beer,
        "alcohol":[
            {
                "name":stout,
                "amount": "6 oz"
            },
            {
                "name":hardCider,
                "amount": "6 oz"
            }
        ],
        "liquid": [],
        "garnish": [] 
    },
    {
        "name":"Bloody Brew",
        "type":beer,
        "alcohol":[
            {
                "name": vodka,
                "amount": "1.5 oz"
            },
            {
                "name": beer,
                "amount": "4 oz"
            },
        ],
        "liquid": [
            {
                "name": tomatoJuice,
                "amount": "4 oz"
            }
        ],
        "garnish": [
            {
                "name": hotSauce,
                "amount": "1 dash"
            },
        ] 
    },
    {
        "name":"Boilermaker",
        "type":beer,
        "alcohol":[
            {
                "name":lager,
                "amount":"8 oz"
            },
            {
                "name":whiskey,
                "amount":"1.5 oz"
            },
        ],
        "liquid": [],
        "garnish": [] 
    },
    {
        "name":"Depth Charge",
        "type":beer,
        "alcohol":[
            {
                "name":peppermintSchnapps,
                "amount": "1.5 oz"
            },
            {
                "name": ale,
                "amount": "12 oz"
            }
        ],
        "liquid": [],
        "garnish": [] 
    },
    {
        "name":"Dog's Nose",
        "type":beer,
        "alcohol":[
            {
                "name":ale,
                "amount":"12 oz"
            },
            {
                "name": gin,
                "amount":"1 oz"
            },
        ],
        "liquid": [],
        "garnish": [] 
    },
    {
        "name":"Lager and Black",
        "type":beer,
        "alcohol":[
            {
                "name":lager,
                "amount":"12 oz"
            },
        ],
        "liquid": [
            {
                "name":blackCurrantSyrup,
                "amount":"1.5 oz"
            },
        ],
        "garnish": [] 
    },
    {
        "name":"Lemon Top",
        "type":beer,
        "alcohol":[
            {
                "name":lager,
                "amount":"12 oz"
            },
        ],
        "liquid": [
            {
                "name":lemonLimeSoda,
                "amount":"2 oz"
            },
        ],
        "garnish": [] 
    },
    {
        "name":"Michelada Uno",
        "type":beer,
        "alcohol":[
            {
                "name": mexicanLager,
                "amount": "12 oz"
            },
        ],
        "liquid": [],
        "garnish": [
            {
                "name":lime,
                "amount":"1"
            },
            {
                "name":kosherSalt,
                "amount":"rim"
            },
        ] 
    },
    {
        "name":"Michelada Dos",
        "type":beer,
        "alcohol":[
            {
                "name":mexicanLager,
                "amount":"12 oz"
            },
            {
                "name":tequila,
                "amount":"1.5 oz"
            },
        ],
        "liquid": [
            {
                "name":lemonJuice,
                "amount":"4 oz"
            },
        ],
        "garnish": [
            {
                "name":salt,
                "amount":"teaspoon"
            },
        ] 
    },
    {
        "name":"Michelada Tres",
        "type":beer,
        "alcohol":[
            {
                "name": mexicanDark,
                "amount": "12 oz"
            },
        ],
        "liquid": [],
        "garnish": [
            {
                "name": lime,
                "amount": "1"
            },
            {
                "name":kosherSalt,
                "amount":"rim"
            },
            {
                "name":worcester,
                "amount":"2 dashes"
            },
            {
                "name":soySauce,
                "amount":"1 dash"
            },
            {
                "name":hotSauce,
                "amount":"1 dash"
            },
            {
                "name":blackPepper, 
                "amount":"pinch"
            },
        ] 
    },
    {
        "name":"Red Eye",
        "type":beer,
        "alcohol":[
            {
                "name":lager,
                "amount":"12 oz"
            },
        ],
        "liquid": [
            {
                "name":tomatoJuice,
                "amount":"3 oz"
            },
        ],
        "garnish": [] 
    },
    {
        "name":"Shandygaff",
        "type":beer,
        "alcohol":[
            {
                "name":lager,
                "amount":"6 oz"
            },
        ],
        "liquid": [
            {
                "name":gingerBeer,
                "amount":"6 oz"
            },
        ],
        "garnish": [] 
    },
    {
        "name":"Stout Sangaree",
        "type":beer,
        "alcohol":[
            {
                "name":stout,
                "amount":"12 oz"
            },
            {
                "name":rubyPort,
                "amount":"2 oz"
            },
        ],
        "liquid": [
            {
                "name":simpleSyrup,
                "amount":"2 teaspoons"
            },
        ],
        "garnish": [
            {
                "name":nutmeg,
                "amount":"pinch"
            },
            {
                "name":cinnamon,
                "amount":"pinch"
            },
        ] 
    },
    {
        "name":"Asian Mary",
        "type":sake,
        "alcohol":[
            {
                "name":sake,
                "amount":"4 oz"
            },
        ],
        "liquid": [
            {
                "name":tomatoJuice,
                "amount":"3 oz"
            },
        ],
        "garnish": [
            {
                "name":wasabi,
                "amount":"pinch"
            },
            {
                "name":limeTwist,
                "amount":"1"
            },
        ] 
    },
    {
        "name":"Mango Sour Sake",
        "type":sake,
        "alcohol":[
            {
                "name":nigoriSake,
                "amount":"3 oz"
            },
        ],
        "liquid": [
            {
                "name":sweetSour,
                "amount":"1 oz"
            },
            {
                "name":mangoPuree,
                "amount":"1 oz"
            },
        ],
        "garnish": [
            {
                "name":lemonTwist,
                "amount":"1"
            },
        ] 
    },
    {
        "name":"Momokawa Mojito",
        "type":sake,
        "alcohol":[
            {
                "name":sake,
                "amount":"3 oz"
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1.5 oz"
            },
            {
                "name":simpleSyrup,
                "amount":"1 oz"
            },
        ],
        "garnish": [
            {
                "name":mintLeaves,
                "amount":"6"
            },
            {
                "name":mintSprig,
                "amount":"1"
            },
        ] 
    },
    {
        "name":"Nigori Bellini",
        "type":sake,
        "alcohol":[
            {
                "name":nigoriSake,
                "amount":"3 oz"
            },
        ],
        "liquid": [
            {
                "name":champagne,
                "amount":"1 oz"
            },
            {
                "name":whitePeachPuree,
                "amount":"2 oz"
            },
        ],
        "garnish": [
            {
                "name":peachSlice,
                "amount":"1"
            },
        ] 
    },
    {
        "name":"Orange Sake Mimosa",
        "type":sake,
        "alcohol":[
            {
                "name":sake,
                "amount":"3 oz"
            },
            {
                "name":mandarinVodka,
                "amount":"0.5 oz"
            },
            {
                "name":champagne,
                "amount":"0.5 oz"
            },
            {
                "name":grandMarnier,
                "amount":"0.5 oz"
            },
        ],
        "liquid": [
            {
                "name":orangeJuice,
                "amount":"1 oz"
            },
        ],
        "garnish": [
            {
                "name":orangeSlice,
                "amount":"1"
            },
        ] 
    },
    {
        "name":"Pearl Martini",
        "type":sake,
        "alcohol":[
            {
                "name":sake,
                "amount":"3 oz"
            },
            {
                "name":vodka,
                "amount":"3 oz"
            },
        ],
        "liquid": [],
        "garnish": [
            {
                "name":ginger,
                "amount":"3 slices"
            },
            {
                "name":candiedGinger,
                "amount":"1 slice"
            },

        ] 
    },
    {
        "name":"Sake Colada",
        "type":sake,
        "alcohol":[
            {
                "name":nigoriSake,
                "amount":"3 oz"
            },
        ],
        "liquid": [
            {
                "name": pineappleJuice,
                "amount": "1 oz"
            },
            {
                "name":limeJuice,
                "amount":"0.5 oz"
            },
            {
                "name":coconutMilk,
                "amount":"0.5 oz"
            },
            {
                "name":simpleSyrup,
                "amount":"0.5 oz"
            },
        ],
        "garnish": [
            {
                "name":pineappleSlice,
                "amount":"1"
            },
        ] 
    },
    {
        "name":"Sake Cosmo",
        "type":sake,
        "alcohol":[
            {
                "name":sake,
                "amount":"3 oz"
            },
            {
                "name":cointreau,
                "amount":"0.5 oz"
            },
        ],
        "liquid": [
            {
                "name":cranberryJuice,
                "amount":"1 oz"
            },
            {
                "name":limeJuice,
                "amount":"0.5 oz"
            },
        ],
        "garnish": [
            {
                "name":limeTwist,
                "amount":"1"
            },
        ] 
    },
    {
        "name":"Sake Lemon Drop",
        "type":sake,
        "alcohol":[
            {
                "name":sake,
                "amount":"3 oz"
            },
        ],
        "liquid": [
            {
                "name":lemonJuice,
                "amount":"1 oz"
            },
            {
                "name":orangeJuice,
                "amount":"0.25 oz"
            },
            {
                "name":simpleSyrup,
                "amount":"0.5 oz"
            },
        ],
        "garnish": [
            {
                "name":lemonTwist,
                "amount":"1"
            },
        ] 
    },
    {
        "name":"Saketini",
        "type":sake,
        "alcohol":[
            {
                "name":sake,
                "amount":"4 oz"
            },
            {
                "name":gin,
                "amount":"0.5 oz"
            },
            {
                "name":vermouth,
                "amount":"0.5 teaspoon"
            },
        ],
        "liquid": [],
        "garnish": [
            {
                "name":lemonTwist,
                "amount":"1"
            },
        ] 
    },
    {
        "name":"Tokyotini",
        "type":sake,
        "alcohol":[
            {
                "name": citronVodka,
                "amount": "1.5 oz"
            },
            {
                "name":sake,
                "amount":"0.5 oz"
            },
        ],
        "liquid": [
            {
                "name":lemonJuice,
                "amount":"1 oz"
            },
            {
                "name":gingerSyrup,
                "amount":"0.5 tablespoon"
            },
        ],
        "garnish": [
            {
                "name":lemon,
                "amount":"1"
            },
            {
                "name":sugar,
                "amount":"powder"
            },
            {
                "name":candiedGinger,
                "amount":"1 slice"
            },
        ] 
    },
    {
        "name":"Zen Cucumber",
        "type":sake,
        "alcohol":[
            {
                "name":sake,
                "amount":"4 oz"
            },
        ],
        "liquid": [
            {
                "name":lemonJuice,
                "amount":"1 oz"
            },
            {
                "name":simpleSyrup,
                "amount":"1 oz"
            },
        ],
        "garnish": [
            {
                "name":cucumber,
                "amount":"5 slices"
            },
        ] 
    },
]

module.exports = formulas