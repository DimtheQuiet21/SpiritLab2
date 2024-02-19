const ale = "ale";
const paleAle = "pale ale";
const stout = "stout";
const irishStout = "irish stout"
const brandy = "brandy";
const lager = "lager";
const mexicanLager = "mexican lager";
const mexicanDark = "mexican dark beer"
const vodka = "vodka";
const mandarinVodka = "mandarin-flavored vodka";
const citronVodka = "citron vodka";
const champagne = "champagne";
const hardCider = "hard cider";
const beer = "beer";
const whiskey = "whiskey";
const peppermintSchnapps = "peppermint schnapps";
const gin = "gin";
const tequila = "tequila";
const rubyPort = "ruby port";
const sake = "sake";
const nigoriSake ="nigori-sake";
const grandMarnier = "grand marnier";
const cointreau = "cointreau";
const vermouth = "vermouth";

const lemonJuice = "lemon juice";
const limeJuice = "lime juice";
const orangeJuice ="orange juice"
const tomatoJuice = "tomato juice";
const blackCurrantSyrup = "black currant syrup";
const simpleSyrup = "simple syrup";
const gingerSyrup = "ginger syrup";
const lemonLimeSoda = "lemon-lime soda";
const gingerBeer = "ginger beer";
const sweetSour = "sweet and sour sauce";
const mangoPuree = "mango puree";
const whitePeachPuree = "white peach puree"

const ginger = "ginger";
const candiedGinger = "candied ginger";
const sugar = "sugar";
const hotSauce = "hot sauce";
const eggYolk = "egg yolk";
const lime = "lime wedge";
const limeTwist = "lime twist"
const lemon = "lemon wedge";
const lemonTwist ="lemon twist";
const orangeWedge ="orange wedge";
const orangeSlice = "orange slice";
const orangeTwist = "orange twist";
const peachSlice = "peach slice";
const pineappleJuice = "pineapple juice";
const pineappleSlice = "pineapple slice";
const cranberryJuice = "cranberry juice";
const coconutMilk = "coconut milk";
const kosherSalt = "kosher salt";
const salt = "salt";
const soySauce = "soy sauce";
const worcester = "worcestershire sauce";
const blackPepper ="black pepper";
const nutmeg = "nutmeg";
const cinnamon = "cinnamon";
const wasabi = "wasabi";
const mintLeaves = "mint leaves";
const mintSprig = "mint sprig";
const cucumber = "cucumber";

const forumlas = [
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
            },stout, hardCider],
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
    {
        "name":"",
        "type":"",
        "alcohol":[],
        "liquid": [],
        "garnish": [] 
    },
]