const ale = "ale";
const amaretto = "amaretto"
const apricotBrandy = "apricot brandy"
const baileys = "baileys irish cream"
const beer = "beer";
const blueCuracao = "blue curaçao"
const brandy = "brandy";
const bourbon = "bourbon";
const cabernetSauvignon = "cabernet sauvignon";
const campari = "campari"
const champagne = "champagne";
const chambord = "chambord"
const cherryBrandy = "cherry brandy"
const citronge = "citrónge"
const citronVodka = "citron vodka";
const cremeCassis = "crème de cassis";
const cremeCacao = "crème de cacao"
const cremeMenthe = "crème de menthe";
const cointreau = "cointreau";
const damianaLiquer = "damiana liqueur"
const frangelico = "Frangelico";
const galliano = "galliano"
const gin = "gin";
const grandMarnier = "grand marnier";
const godivaLiqueur = "godiva liqueur"
const goldTequila = "gold tequila";
const goldRum = "gold rum";
const hardCider = "hard cider";
const harlequinOrnage = "harlequin orange liqueur"
const irishStout = "irish stout";
const irishCreamLiqueur = "irish cream liqueur";
const joseCuervoEspecial = "jóse cuervo especial"
const kahlua = "kahlúa"
const lager = "lager";
const mandarinVodka = "mandarin-flavored vodka";
const mandarineNapoleon = "mandarine napoleon liqueur";
const maraschinoLiqueur = "maraschino liqueur";
const melonLiqueur = "melon liqueur"
const mexicanDark = "mexican dark beer";
const mexicanLager = "mexican lager";
const mezcal = "mezcal"
const midoriLiquer = "midori liquer"
const nigoriSake = "nigori-sake";
const orangeLiqueur = "orange liqueur"
const paleAle = "pale ale";
const peppermintSchnapps = "peppermint schnapps";
const peachSchnapps = "peach schnapps"
const pepperTequila = "pepper tequila"
const pernod = "pernod"
const reposadoTequila = "reposado tequila"
const rubyPort = "ruby port";
const sake = "sake";
const silverTequila = "silver tequila"
const sloeGin = "sloe gin"
const southernComfort = "southern comfort"
const strawberryLiqueur = "strawberry liqueur"
const stout = "stout";
const tuaca = "tuaca";
const tiaMaria = "tia maria";
const tequila = "tequila";
const tripleSec = "triple sec"
const vanillaTequila = "vanilla infused tequila"
const vermouth = "vermouth";
const vermouthDry = "dry vermouth";
const vermouthSweet = "sweet vermouth";
const vodka = "vodka";
const whiskey = "whiskey";
const whitecremecacao = "white crème de cacao"
const whitecremementhe = "white crème de menthe"

const angosturaBitters = "angostura bitters";
const blackCurrantSyrup = "black currant syrup";
const clubSoda = "club soda";
const coldEspresso = "cold espresso"
const cranberryJuice = "cranberry juice";
const cola = "cola";
const gingerBeer = "ginger beer";
const gingerSyrup = "ginger syrup";
const gingerAle = "ginger ale"
const grenadine = "grenadine"
const halfHalf = "half-and-half"
const heavyCream = "heavy cream"
const lemonJuice = "lemon juice";
const lemonLimeSoda = "lemon-lime soda";
const limeJuice = "lime juice";
const maraschinoJuice = "maraschino cherry juice";
const mangoPuree = "mango puree";
const nectarine = "nectarine";
const pricklyPearJuice = "prickly pear juice"
const orangeJuice = "orange juice";
const simpleSyrup = "simple syrup";
const sweetSour = "sweet and sour mix";
const tangerineJuice = "tangerine juice"
const tomatoJuice = "tomato juice";
const whitePeachPuree = "white peach puree";
const coconutMilk = "coconut milk";
const coconutCream = "coconut cream"
const grapefruitJuice = "grapefruit juice"
const pineappleJuice = "pineapple juice";
const pineappleSlice = "pineapple slice";
const appleJuice = "apple juice";

const avacado = "avacado"
const blackPepper = "black pepper";
const candiedGinger = "candied ginger";
const celery = "celery stalk;"
const cinnamon = "cinnamon";
const cherryTomato = "cherry tomatoes"
const chocolate = "chocolate";
const chocolateShavings = "chocolate shavings"
const cucumber = "cucumber";
const cucumberStrip = "cucumber peel strip"
const eggYolk = "egg yolk";
const jalapeno = "jalapeño";
const garlic = "garlic";
const ginger = "ginger";
const greenOnion = "green onion"
const hotSauce = "hot sauce";
const honey = "honey"
const honeydew = 'honeydew melon'
const coffeeInstant = "instant coffee";
const kosherSalt = "kosher salt";
const lemon = "lemon wedge";
const lemonTwist = "lemon twist";
const lemonWheel = "lemon wheel"
const lemonSlice = "lemon slice"
const lime = "lime wedge";
const limeTwist = "lime twist";
const limeSpiral = "lime peel spiral";
const limeWheel = "lime wheel";
const mango = "mango"
const maraschninoCherry = "maraschino cherry"
const mintLeaves = "mint leaves";
const mintSprig = "mint sprig";
const nutmeg = "nutmeg";
const orangeSlice = "orange slice";
const orangeTwist = "orange twist";
const orangeWedge = "orange wedge";
const orangeFlowerWater = "orange flower water"
const onion = "onion";
const papaya = "papaya";
const peach = "peach";
const peachSlice = "peach slice";
const pineappleChunks = "pineapple chunks";
const pinkOrchids = "pink orchids"
const powderSugar = "powdered sugar"
const salt = "salt";
const soySauce = "soy sauce";
const strawberry = "strawberry"
const superSugar = "superfine sugar"
const sugar = "sugar";
const tangerineWheel = "tangerine wheel"
const wasabi = "wasabi";
const whipCream = "whipped cream"
const worcester = "worcestershire sauce";
const margarita = "margarita";
const unsweetendCocoaPowder = "unsweetened cocoa powder";


const formulas = [
  
    {
        "name":"Acapulco",
        "type":tequila,
        "alcohol":[
            {
                "name":goldTequila,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":goldRum,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":grapefruitJuice,
                "amount":"2 oz",
                "technique":""

            },
            {
                "name":pineappleJuice,
                "amount":"3 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":"",
                "amount":"",
                "technique":""
            },
        ],
        "assembly":"Shake the ingredients vigorously with ice. Strain into an ice-filled highball glass"
    },
    {
        "name":"Bird of Paradise",
        "type":tequila,
        "alcohol":[
            {
                "name":tequila,
                "amount":"0.75 oz",
                "technique":""
            },
            {
                "name":whitecremecacao,
                "amount":"0.75 oz",
                "technique":""
            },
            {
                "name":amaretto,
                "amount":"0.25 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":heavyCream,
                "amount":"1.5 oz",
                "technique":""
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake the ingredients vigorously with ice. Strain into a chilled cocktail glass"
    },
    {
        "name":"Bite of the Iguana",
        "type":tequila,
        "alcohol":[
            {
                "name":pepperTequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":tripleSec,
                "amount":"0.75 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":sweetSour,
                "amount":"1.5 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":lime,
                "amount":"1",
                "technique":""
            },
            {
                "name":cherryTomato,
                "amount":"0.5 cup",
                "technique":"halved"
            },
            {
                "name":garlic,
                "amount":"1 clove",
                "technique":"finely minced"
            },
            {
                "name":greenOnion,
                "amount":"1",
                "technique":"chopped"
            },
            {
                "name":worcester,
                "amount":"2 dashes",
                "technique":""
            },
            {
                "name":cherryTomato,
                "amount":"2",
                "technique":"whole"
            },
        ],
        "assembly":"Rub the rim of a chilled margarita glass with a lime wedge and rim with salt. Blend all ingredients except the garnish with 3 to 4 ice cubes until pureed and smooth. Pour the blended mixture into the prepared glass. Garnish with the remaining lime wedge, skewered between two tomatoes."
    },
    {
        "name":"Black Sombrero",
        "type":tequila,
        "alcohol":[
            {
                "name":tequila,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":vodka,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":kahlua,
                "amount":"2 oz",
                "technique":""
            },
        ],
        "liquid": [
        ],
        "garnish": [
        ],
        "assembly":"Shake the ingredients vigorously with ice. Strain into a chilled cocktail glass."
    },
    {
        "name":"Bloody Maria",
        "type":tequila,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"2 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1.5 oz",
                "technique":"fresh"
            },
            {
                "name":tomatoJuice,
                "amount":"4 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":garlic,
                "amount":"1 clove",
                "technique":"finely minced"
            },
            {
                "name":cucumber,
                "amount":"0.25 cup",
                "technique":"chopped"
            },
            {
                "name":worcester,
                "amount":"3 dashes",
                "technique":""
            },
            {
                "name":hotSauce,
                "amount":"3 dashes",
                "technique":""
            },
            {
                "name":lime,
                "amount":"1",
                "technique":""
            },
            {
                "name":celery,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Combine the tequila, lime juice, garlic, cucumber, Worcestershire, and hot sauce in a blender, and blend until smooth. Pour into an ice-filled highball glass, and top with the tomato juice. Stir well. Squeeze the lime wedge over the drink, and drop it in. Garnish with the celery stalk."
    },
    {
        "name":"Blue Moon",
        "type":tequila,
        "alcohol":[
            {
                "name":tequila,
                "amount":"0.75 oz",
                "technique":""
            },
            {
                "name":blueCuracao,
                "amount":"0.25 oz",
                "technique":""
            },
            {
                "name":galliano,
                "amount":"3 dashes",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":heavyCream,
                "amount":"1.5 oz",
                "technique":""
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake the ingredients vigorously with ice. Strain into a chilled cocktail glass."
    },
    {
        "name":"Blue Shark",
        "type":tequila,
        "alcohol":[
            {
                "name":tequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":vodka,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":blueCuracao,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
        ],
        "garnish": [
        ],
        "assembly":"Shake the ingredients vigorously with ice. Strain into a chilled cocktail glass, or into an ice-filled old-fashioned glass."
    },
    {
        "name":"Bonsai Margarita",
        "type":tequila,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":midoriLiquer,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":harlequinOrnage,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":lime,
                "amount":"1",
                "technique":""
            },
            {
                "name":salt,
                "amount":"1 rim",
                "technique":""
            },
            {
                "name":superSugar,
                "amount":"1 tablespoon",
                "technique":""
            },
            {
                "name":lemonTwist,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Rub the rim of a chilled margarita glass with the lime wedge and rim with salt. Fill the prepared glass with ice. Shake the tequila, Midori, orange liqueur, lime juice, and sugar vigorously with ice. Strain into the prepared glass. Garnish with the lemon twist."
    },
    {
        "name":"Brave Bull",
        "type":tequila,
        "alcohol":[
            {
                "name":goldTequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":tiaMaria,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
        ],
        "garnish": [
            {
                "name":whipCream,
                "amount":"1 topper",
                "technique":""
            },
        ],
        "assembly":"Shake the tequila and Kahlua vigorously with ice. Strain into an ice-filled old-fashioned glass. Top with whipped cream, if desired."
    },
    {
        "name":"Southern Bull",
        "type":tequila,
        "alcohol":[
            {
                "name":goldTequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":tiaMaria,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":southernComfort,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
        ],
        "garnish": [
            {
                "name":whipCream,
                "amount":"1 topper",
                "technique":""
            },
        ],
        "assembly":"Shake the tequila and Kahlua vigorously with ice. Strain into an ice-filled old-fashioned glass. Top with whipped cream, if desired."
    },
    {
        "name":"Chapala",
        "type":tequila,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":cointreau,
                "amount":"0.5 teaspoon",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":orangeJuice,
                "amount":"1 oz",
                "technique":"fresh"
            },
            {
                "name":lemonJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
            {
                "name":grenadine,
                "amount":"0.25 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":orangeSlice,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Shake the liquid ingredients vigorously with ice. Strain into an ice-filled double old-fashioned glass. Garnish with the orange slice."
    },
    {
        "name":"Cherry Picker",
        "type":tequila,
        "alcohol":[
            {
                "name": goldTequila,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":cherryBrandy,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
            {
                "name":appleJuice,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":limeTwist,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Shake the liquid ingredients vigorously with ice. Strain into a chilled cocktail glass. Twist the lime peel over the drink, and drop it in."
    },
    {
        "name":"Classic Tequila Shot",
        "type":tequila,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"1.5 oz",
                "technique":""
            },
        ],
        "liquid": [
        ],
        "garnish": [
            {
                "name":lime,
                "amount":"1",
                "technique":""
            },
            {
                "name":kosherSalt,
                "amount":"1 rim",
                "technique":""
            },
        ],
        "assembly":"Pour the tequila into a chilled shot glass. Rub the area between the thumb and forefinger with the lime wedge to moisten the skin. Sprinkle salt on the moistened area. Lick the salt, then quickly gulp the tequila, and bite into the lime wedge."
    },
    {
        "name":"Compadre",
        "type":tequila,
        "alcohol":[
            {
                "name":reposadoTequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":campari,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":grapefruitJuice,
                "amount":"2 oz",
                "technique":"fresh"
            },
            {
                "name":clubSoda,
                "amount":"3 oz",
                "technique":"chilled"
            },
        ],
        "garnish": [
            {
                "name":orangeTwist,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Shake the tequila, grapefruit juice, and Campari vigorously with ice. Strain into an ice-filled highball glass. Top with club soda and stir gently. Twist the orange peel over the drink, and drop it in."
    },
    {
        "name":"El Diablo",
        "type":tequila,
        "alcohol":[
            {
                "name": tequila,
                "amount":".5 oz",
                "technique":""
            },
            {
                "name":cremeCassis,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":gingerAle,
                "amount":"4 oz",
                "technique":"chilled"
            },
        ],
        "garnish": [
            {
                "name": lime,
                "amount":"1 half",
                "technique":""
            },
        ],
        "assembly":"Squeeze the lime half into an ice-filled olf-fashioned glass. Pour in the tequila and creme de cassis, top with ginger ale, and stir."
    },
    {
        "name":"Freddy Fudpucker",
        "type":tequila,
        "alcohol":[
            {
                "name":tequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":galliano,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":orangeJuice,
                "amount":"4 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
        ],
        "assembly":"Pour the tequila and orange juice into an ice-filled highball glass. Stir. Float the Galliano on top."
    },
    {
        "name":"Frostbite",
        "type":tequila,
        "alcohol":[
            {
                "name":tequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":blueCuracao,
                "amount":"0.75 oz",
                "technique":""
            },
            {
                "name":cremeCacao,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":cremeMenthe,
                "amount":"0.25 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":heavyCream,
                "amount":"2 oz",
                "technique":""
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake the ingredients vigorously with ice. Strain into a chilled glass."
    },
    {
        "name":"Hot Pants",
        "type":tequila,
        "alcohol":[
            {
                "name":tequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":peppermintSchnapps,
                "amount":"0.75 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":grapefruitJuice,
                "amount":"0.75 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":lemon,
                "amount":"1",
                "technique":""
            },
            {
                "name":kosherSalt,
                "amount":"1 rim",
                "technique":""
            },
            {
                "name":powderSugar,
                "amount":"1 teaspoon",
                "technique":""
            },
        ],
        "assembly":"Rub the rim of a chilled old-fashioned glass with the lemon wedge and rim with salt. Shake the tequila, peppermint schnapps, grapefruit juice, and sugar vigorously with ice. Strain into the prepared glass."
    },
    {
        "name":"La Bomba",
        "type":tequila,
        "alcohol":[
            {
                "name":goldTequila,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":cointreau,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":pineappleJuice,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":orangeJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
            {
                "name":grenadine,
                "amount":"2 dashes",
                "technique":""
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake the tequila, Cointreau, pineapple juics, and orange juice vigorously with ice. Strain into a chilled cocktail glass. Float the grenadine on top."
    },
    {
        "name":"La Conga",
        "type":tequila,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"2 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":pineappleJuice,
                "amount":"0.25 oz",
                "technique":""
            },
            {
                "name":angosturaBitters,
                "amount":"3 dashes",
                "technique":""
            },
            {
                "name":clubSoda,
                "amount":"4 oz",
                "technique":"chilled"
            },
        ],
        "garnish": [
            {
                "name":lemonSlice,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Pour the tequila, pineapple juice, and bitters into an ice-filled old-fashioned glass. Top with club soda and stir. Garnish with the lemon slice."
    },
    {
        "name":"Loco Padre",
        "type":tequila,
        "alcohol":[
            {
                "name":reposadoTequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":maraschinoLiqueur,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":frangelico,
                "amount":"0.25 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":orangeJuice,
                "amount":"1.5 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":orangeSlice,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Shake the liquid ingredients vigorously with ice. Strain into an ice-filled old-fashioned glass. Garnish with the orange slice."
    },
    {
        "name":"Madacascar Mood Shifter",
        "type":tequila,
        "alcohol":[
            {
                "name":vanillaTequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":citronge,
                "amount":"0.75 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":tangerineJuice,
                "amount":"2 oz",
                "technique":"fresh"
            },
            {
                "name":sweetSour,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":mintLeaves,
                "amount":"3 leaves",
                "technique":"fresh"
            },
            {
                "name":tangerineWheel,
                "amount":"1",
                "technique":""
            },
            {
                "name":mintSprig,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Shake the liquid ingredients and mint leaves vigorously with ice. Strain into a chilled cocktail glass. Garnish with the tangerine wheel and mint sprig."
    },
    {
        "name":"Matador",
        "type":tequila,
        "alcohol":[
            {
                "name":goldTequila,
                "amount":"1.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":pineappleJuice,
                "amount":"3 oz",
                "technique":""
            },
            {
                "name":limeJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake the ingredients vigorously with ice. Strain into an ice-filled old-fashioned glass."
    },
    {
        "name":"Frozen Matador",
        "type":tequila,
        "alcohol":[
            {
                "name":goldTequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":tripleSec,
                "amount":"0.25 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":pineappleChunks,
                "amount":"0.25 cup",
                "technique":"fresh"
            },
        ],
        "garnish": [
        ],
        "assembly":"Combine the ingredients in a blender with 0.5 cup crushed ice, and blend until smooth. Pour into a chilled highball glass."
    },
    {
        "name":"Classic Margarita",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":cointreau,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1.5 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":lime,
                "amount":"2",
                "technique":""
            },
            {
                "name":kosherSalt,
                "amount":"1 rim",
                "technique":""
            },
        ],
        "assembly":"Rub a wedge of lime around the rim of a chilled margarita glass, and salt the rim. Fill the prepared glass, and salt the rim. Fill the prepared glass with ice. Shake the liquid ingredients vigorously with ice. Strain into the prepared glass. Squeeze the remaining lime wedge over the drink, and drop it in."
    },
    {
        "name":"Strawberry Margarita",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":cointreau,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":strawberryLiqueur,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":strawberry,
                "amount":"3",
                "technique":"fresh and sliced"
            },
            {
                "name":strawberry,
                "amount":"1",
                "technique":""
            },
            {
                "name":limeWheel,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Blend all ingredients except the garnish with 1 cup crushed ice until smooth. Pour into a chilled margarita glass. Garnish with the strawberry and lime wheel."
    },
    {
        "name":"Peach Margarita",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":cointreau,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":peachSchnapps,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":peach,
                "amount":"1",
                "technique":"peeled and diced"
            },
            {
                "name":limeWheel,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Blend all ingredients except the garnish with 1 cup crushed ice until smooth. Pour into a chilled margarita glass. Garnish with a lime wheel."
    },
    {
        "name":"Mango Margarita",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":tuaca,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":mango,
                "amount":"0.5",
                "technique":"diced"
            },
            {
                "name":limeWheel,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Blend all ingredients except the garnish with 1 cup crushed ice until smooth. Pour into a chilled margarita glass. Garnish and lime wheel."
    },
    {
        "name":"Melon Margarita",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":cointreau,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":melonLiqueur,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":honeydew,
                "amount":"0.5 cup",
                "technique":"cubed"
            },
            {
                "name":limeWheel,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Blend all ingredients except the garnish with 1 cup crushed ice until smooth. Pour into a chilled margarita glass. Garnish with the lime wheel."
    },
    {
        "name":"Avacado Margarita",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":cointreau,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1 oz",
                "technique":"fresh"
            },
            {
                "name":lemonJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
            {
                "name":halfHalf,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":avacado,
                "amount":"0.25 cup",
                "technique":"diced"
            },
            {
                "name":sugar,
                "amount":"1 teaspoon",
                "technique":""
            },
            {
                "name":lime,
                "amount":"1",
                "technique":""
            },
            {
                "name":avacado,
                "amount":"1 slice",
                "technique":""
            },
        ],
        "assembly":"Combine all ingredients but the garnishes in a blender with 0.5 cup ice. Blend until smooth. Pour into a chilled cocktail glass. Garnish with the lime and avocado."
    },
    {
        "name":"Cadillac Margarita",
        "type":margarita,
        "alcohol":[
            {
                "name":reposadoTequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":grandMarnier,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":limeSpiral,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Shake the liquid ingredients vigorously with ice. Strain into a chilled cocktail glass. Garnish with the lime spiral."
    },
    {
        "name":"Chocolate Margarita",
        "type":margarita,
        "alcohol":[
            {
                "name":goldTequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":godivaLiqueur,
                "amount":"0.75 oz",
                "technique":""
            },
            {
                "name":cointreau,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":sweetSour,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":orangeJuice,
                "amount":"0.25 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":chocolateShavings,
                "amount":"",
                "technique":""
            },
        ],
        "assembly":"Shake the liquid ingredients vigorously with ice. Strain into a chilled cocktail glass. Shave chocolate over the top if desired."
    },
    {
        "name":"Cucumber Margarita",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":cointreau,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":superSugar,
                "amount":"1 tablespoon",
                "technique":""
            },
            {
                "name":cucumber,
                "amount":"0.25 cup",
                "technique":"thinly sliced"
            },
        ],
        "assembly":"Put the sugar and lime juice in the bottom of an old-fashioned glass. Add the cucumber and muddle. Add the tequila and Cointreau. Fill the glass with ice and stir."
    },
    {
        "name":"Blue Margarita",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":blueCuracao,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":cointreau,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":lime,
                "amount":"1",
                "technique":""
            },
            {
                "name":kosherSalt,
                "amount":"1 rim",
                "technique":""
            },
        ],
        "assembly":"Rub the rim of a chilled cocktail glass with the lime wedge and rim with salt. Shake the liquid ingredients vigorously with ice. Strain into the prepared glass."
    },
    {
        "name":"Papaya Margarita",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"6 oz",
                "technique":""
            },
            {
                "name":damianaLiquer,
                "amount":"2 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":sweetSour,
                "amount":"6 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":papaya,
                "amount":"2 cups",
                "technique":"cubed"
            },
            {
                "name":lime,
                "amount":"4",
                "technique":""
            },
            {
                "name":pinkOrchids,
                "amount":"4",
                "technique":""
            },
        ],
        "assembly":"Chill 4 margarita glasses. Set aside. In a blender, mix the papaya, sweet-and-sour mix, tequila, and Damiana until thoroughly pureed. Add 2 cups of ice and blend until the mixture is smooth. Divide the mixture evenly among the prepared glasses. Garnish each with a skewered lime wedge and orchid."
    },
    {
        "name":"Mexican Madras",
        "type":margarita,
        "alcohol":[
            {
                "name":goldTequila,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":cranberryJuice,
                "amount":"3 oz",
                "technique":""
            },
            {
                "name":orangeJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
            {
                "name":limeJuice,
                "amount":"0.25 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name": orangeSlice,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Shake the liquid ingredients vigorously with ice. Strain into an ice-filled old-fashioned glass. Garnish with the orange slice."
    },
    {
        "name":"Mexican Mule",
        "type":margarita,
        "alcohol":[
            {
                "name":goldTequila,
                "amount":"2 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1 oz",
                "technique":"fresh"
            },
            {
                "name":simpleSyrup,
                "amount":"1 teaspoon",
                "technique":""
            },
            {
                "name":gingerAle,
                "amount":"4 oz",
                "technique":"chilled"
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake all ingredients but the ginger ale vigorously with ice. Strain into an ice-filled highball glass, and top with ginger ale."
    },
    {
        "name":"Mexicola",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"2 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
            {
                "name":cola,
                "amount":"3 oz",
                "technique":"chillled"
            },
        ],
        "garnish": [
            {
                "name":lime,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Pour the tequila and lime juice into an ice-filled collins glass. Top with cola and stir. Squeeze the lime wedge over the drink, and drop it in."
    },
    {
        "name":"Multiple Orgasm",
        "type":margarita,
        "alcohol":[
            {
                "name":amaretto,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":kahlua,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":irishCreamLiqueur,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":goldTequila,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":heavyCream,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake the amaretto, Kahlua, Irish cream, and heavy cream vigorously with ice. Strain into an ice-filled highball glass. Float the tequila on top."
    },
    {
        "name":"Nectarine Dream",
        "type":margarita,
        "alcohol":[
            {
                "name":reposadoTequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":mandarineNapoleon,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1.5 oz",
                "technique":"fresh"
            },
            {
                "name":orangeJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":nectarine,
                "amount":"1",
                "technique":"pitted and sliced"
            },
            {
                "name":superSugar,
                "amount":"1 tablespoon",
                "technique":""
            },
            {
                "name":nectarine,
                "amount":"1 slice",
                "technique":""
            },
        ],
        "assembly":"Combine all ingredients but the garnish in a blender with 1 cup cracked ice. Blend until smooth. Pour into a chilled wineglass. Garnish with the nectarine slice."
    },
    {
        "name":"Prickly Agave",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":tuaca,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":pricklyPearJuice,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":limeJuice,
                "amount":"1 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":limeSpiral,
                "amount":"1",
                "technique":""
            },
            {
                "name":lime,
                "amount":"1",
                "technique":""
            },
            {
                "name":sugar,
                "amount":"1 rim",
                "technique":""
            },
            {
                "name":salt,
                "amount":"1 rim",
                "technique":""
            },
        ],
        "assembly":"Rub the rim of a chilled margarita or large cocktail glass with the lime wedge and rim with sugar and salt. Shake the liquid ingredients vigorously with ice. Strain into the prepared glass, and garnish with the lime peel spiral."
    },
    {
        "name":"Rosaita",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":campari,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":vermouthDry,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":vermouthSweet,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
        ],
        "garnish": [
            {
                "name":lemonTwist,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Stir the liquid ingredients in a mixing glass with ice. Strain into a chilled cocktail glass, or pour into an ice-filled old-fashioned glass. Garnish with the lemon twist."
    },
    {
        "name":"Rude Cosmopolitan",
        "type":margarita,
        "alcohol":[
            {
                "name":goldTequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":tripleSec,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":cranberryJuice,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":limeJuice,
                "amount":"0.5",
                "technique":"fresh"
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake the ingredients vigorously with ice. Strain into a chilled cocktail glass."
    },
    {
        "name":"Salty Chihuahua",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"2 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":grapefruitJuice,
                "amount":"6 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":lemon,
                "amount":"1",
                "technique":""
            },
            {
                "name":kosherSalt,
                "amount":"1 rim",
                "technique":""
            },
        ],
        "assembly":"Rub the rim of a chilled highball glass with the lemon wedge and rim with salt. Fill the prepared glass with ice cubesm and pour in the tequila and grapefruit juice. Stir."
    },
    {
        "name":"Shady Lady",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":melonLiqueur,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":grapefruitJuice,
                "amount":"4 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
        ],
        "assembly":"Pour the ingredients into an ice-filled highball glass.Stir."
    },
    {
        "name":"Short Fuse",
        "type":margarita,
        "alcohol":[
            {
                "name":goldTequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":apricotBrandy,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1.5 oz",
                "technique":"fresh"
            },
            {
                "name":grapefruitJuice,
                "amount":"3 oz",
                "technique":"fresh"
            },
            {
                "name":maraschinoJuice,
                "amount":"0.25 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name": lime,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Shake the liquid ingredients vigorously with ice. Strain into an ice-filled highball glass. Squeeze the lime wedge over the drink, and drop it in."
    },
    {
        "name":"Silk Stocking",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":whitecremecacao,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":chambord,
                "amount":"0.25 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":heavyCream,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":cinnamon,
                "amount":"1 pinch",
                "technique":""
            },
        ],
        "assembly":"Shake the liquid ingredients vigorously with ice. Strain into a chilled cocktail glass, and sprinkle cinnamon over the top."
    },
    {
        "name":"Sloe Tequila",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":sloeGin,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":cucumberStrip,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Combine the liquid ingredients in a blender with 0.5 cup of crushed ice. Blend until smooth. Pour into a chilled old-fashioned glass. Garnish with the cucumber peel."
    },
    {
        "name":"South of the Border",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":tiaMaria,
                "amount":"0.75 oz",
                "technique":""
            },
            {
                "name":kahlua,
                "amount":"0.75 oz",
                "technique":""
            },
        ],
        "liquid": [
        ],
        "garnish": [
            {
                "name":lime,
                "amount":"1 half",
                "technique":""
            },
        ],
        "assembly":"Squeeze the lime half over a chilled highball glass, and drop it in. Fill with ice and pour in the tequila and Kahlua. Stir."
    },
    {
        "name":"Tequila Cocktail",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"2 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1 oz",
                "technique":"fresh"
            },
            {
                "name":grenadine,
                "amount":"1 dash",
                "technique":""
            },
            {
                "name":orangeFlowerWater,
                "amount":"1 dash",
                "technique":""
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake the ingredients vigorously with ice. Strain into a chilled cocktail glass."
    },
    {
        "name":"Tequila Colada",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":kahlua,
                "amount":"0.25 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":pineappleJuice,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":heavyCream,
                "amount":"0.75 oz",
                "technique":""
            },
            {
                "name":coconutCream,
                "amount":"0.25 oz",
                "technique":""
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake the ingredients vigorously with ice. Strain into an ice-filled highball glass."
    },
    {
        "name":"Tequila Fizz",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"2 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1 oz",
                "technique":"fresh"
            },
            {
                "name":clubSoda,
                "amount":"3 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":sugar,
                "amount":"1 teaspoon",
                "technique":""
            },
        ],
        "assembly":"Shake the tequila, lime juice, and sugar vigorously with ice. Strain into an ice-filled highball glass, and top with club soda. Stir. "
    },
    {
        "name":"Tequila Ghost",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":pernod,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":lemonJuice,
                "amount":"0.5 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake the ingredients vigorously with ice. Strain into an ice-filled old-fashioned glass."
    },
    {
        "name":"Tequila Mockingbird",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":whitecremementhe,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1 oz",
                "technique":"fresh"
            },
        ],
        "garnish": [
            {
                "name":limeWheel,
                "amount":"1",
                "technique":"thinly sliced"
            },
        ],
        "assembly":"Shake the liquid ingredients vigorously with ice. Strain into a chilled cocktail glass. Garnish by floating the lime wheel on top."
    },
    {
        "name":"Tequila Sour",
        "type":margarita,
        "alcohol":[
            {
                "name":tequila,
                "amount":"1.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":lemonJuice,
                "amount":"0.75 oz",
                "technique":""
            },
            {
                "name":simpleSyrup,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":maraschninoCherry,
                "amount":"1",
                "technique":""
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake the liquid ingredients vigorously with ice. Strain into a chilled sour glass. Garnish with the cherry."
    },
    {
        "name":"Tequila Sunrise",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"1.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":orangeJuice,
                "amount":"6 oz",
                "technique":"fresh"
            },
            {
                "name":grenadine,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":clubSoda,
                "amount":"2 oz",
                "technique":""
            },
        ],
        "garnish": [
        ],
        "assembly":"IF STIRRED: Pour the tequila and orange juice into an ice-filled highball glass, and stir. Float the grenadine on top, and let slowly descend through the drink. Top with club soda, if desired. IF SHAKEN: Pour the grenadine in the bottom of a chilled cocktail glass. Shake the tequila and orange juice vigorously with ice, strain into the glass."
    },
    {
        "name":"Tequilatini",
        "type":margarita,
        "alcohol":[
            {
                "name":joseCuervoEspecial,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":grandMarnier,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":cointreau,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
        ],
        "garnish": [
            {
                "name":orangeSlice,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Shake the liquid ingredients vigorously with ice. Strain into a chilled cocktail glass. Garnish with the orange slice."
    },
    {
        "name":"Tequini",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":vermouthDry,
                "amount":"3 dashes",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":angosturaBitters,
                "amount":"1 dash",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":lemonTwist,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Stir the liquid ingredients with ice in a mixing glass. Strain into a chilled cocktail glass. Run the lemon peel around the rim, twist it over the drink, and drop it in."
    },
    {
        "name":"Tijuana Speedball",
        "type":margarita,
        "alcohol":[
            {
                "name":reposadoTequila,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":kahlua,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":baileys,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":coldEspresso,
                "amount":"1.5 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":cinnamon,
                "amount":"1 pinch",
                "technique":""
            },
        ],
        "assembly":"Shake the liquid ingreidents vigorously with ice. Strain into a chilled cocktail glass. Sprinkle the cinnamon on top."
    },
    {
        "name":"Tijuana Taxi",
        "type":margarita,
        "alcohol":[
            {
                "name":reposadoTequila,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":cointreau,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":lemonJuice,
                "amount":"1 oz",
                "technique":"fresh"
            },
            {
                "name":orangeJuice,
                "amount":"1 oz",
                "technique":"fresh"
            },
            {
                "name":simpleSyrup,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":lemon,
                "amount":"1",
                "technique":""
            },
            {
                "name":sugar,
                "amount":"1 rim",
                "technique":""
            },
            {
                "name":lemonTwist,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Rub the rim of a chilled cocktail glass with the lemon wedge and rim with sugar. Shake the liquid ingredients vigorously with ice. Strain into the prepared glass. Garnish with the lemon twist."
    },
    {
        "name":"Toreador",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"1.5 oz",
                "technique":""
            },
            {
                "name":whitecremecacao,
                "amount":"0.5 oz",
                "technique":""
            },
        ],
        "liquid": [
        ],
        "garnish": [
            {
                "name":whipCream,
                "amount":"1 dollop",
                "technique":""
            },
            {
                "name":unsweetendCocoaPowder,
                "amount":"1 sprinkle",
                "technique":""
            },
        ],
        "assembly":"Shake the tequila and creme de cacao vigorously with ice. Strain into a chilled cocktail glass. Float a dollop of whipped cream on top, and sprinkle with cocoa powder."
    },
    {
        "name":"The Jake",
        "type":margarita,
        "alcohol":[
            {
                "name":cabernetSauvignon,
                "amount":"0.25 oz",
                "technique":""
            },
            {
                "name":silverTequila,
                "amount":"1.5 oz",
                "technique":""
            },
        ],
        "liquid": [
        ],
        "garnish": [
            {
                "name":limeSpiral,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Rinse a chilled cocktail glass with the cabernet sauvignon, and discard any remaining wine. Stir the tequila with ice in a mixing glass. Strain into the prepared glass, and garnish with the lime peel spiral."
    },
    {
        "name":"Vampiro",
        "type":margarita,
        "alcohol":[
            {
                "name":silverTequila,
                "amount":"1.5 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":tomatoJuice,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":orangeJuice,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":limeJuice,
                "amount":"0.5 oz",
                "technique":""
            },
            {
                "name":worcester,
                "amount":"3 dashes",
                "technique":""
            },
        ],
        "garnish": [
            {
                "name":honey,
                "amount":"1 teaspoon",
                "technique":""
            },
            {
                "name":onion,
                "amount":"1 tablespoon",
                "technique":"diced"
            },
            {
                "name":jalapeno,
                "amount":"1 teaspoon",
                "technique":"diced"
            },
            {
                "name":jalapeno,
                "amount":"1 slice",
                "technique":""
            },
            {
                "name":lime,
                "amount":"1",
                "technique":""
            },
        ],
        "assembly":"Shake all ingredients but the garnishes vigorously with ice. Strain into a highball glass filled with ice, and garnish with the lime wedge and chile slice."
    },
    {
        "name":"Mezcal Buck",
        "type":margarita,
        "alcohol":[
            {
                "name":mezcal,
                "amount":"2 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":limeJuice,
                "amount":"1 oz",
                "technique":"fresh"
            },
            {
                "name":simpleSyrup,
                "amount":"1 teaspoon",
                "technique":""
            },
            {
                "name":gingerBeer,
                "amount":"4 oz",
                "technique":""
            },
        ],
        "garnish": [
        ],
        "assembly":"Shake all ingredients but the ginger beer vigorously with ice. Strain into an ice-filled highball glass, and rop with ginger beer."
    },
    {
        "name":"Pan-Am",
        "type":margarita,
        "alcohol":[
            {
                "name":mezcal,
                "amount":"1 oz",
                "technique":""
            },
            {
                "name":bourbon,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
            {
                "name":angosturaBitters,
                "amount":"1 dash",
                "technique":""
            },
            {
                "name":simpleSyrup,
                "amount":"1 dash",
                "technique":""
            },
        ],
        "garnish": [
        ],
        "assembly":"Pour the ingredients into an ice-filled old-fashined glass, and stir."
    },
    {
        "name":"Spanish Fly",
        "type":margarita,
        "alcohol":[
            {
                "name":mezcal,
                "amount":"2 oz",
                "technique":""
            },
            {
                "name":grandMarnier,
                "amount":"1 oz",
                "technique":""
            },
        ],
        "liquid": [
        ],
        "garnish": [
            {
                "name":coffeeInstant,
                "amount":"1 pinch",
                "technique":""
            },
        ],
        "assembly":"Pour the mezcal and Grand Marnier into an ice-filled old-fashioned glass. Sprinkle instant coffee on top."
    },

]

module.exports = formulas