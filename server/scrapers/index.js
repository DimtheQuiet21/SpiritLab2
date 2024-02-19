const urlData = require ("./URL.js");
const boozeInventory = require("./boozeFetch.js");
const fs = require ('fs');


const filePath = "C:/Users/fishe/Desktop/boozeInventory.txt";

function condenseInfo (urls, boozeInfo) {

    const finalArray = [];

    function createBoozeObject (element,index) {
        const dataObject = {
            name: element.product.title,
            url: `https://ishopliquor.com${urls[index]}`,
            type: element.product.product_type,
            handle: element.product.handle,
            proof: element.product.variants[0].option2,
        }
        if (element.product.image && element.product.image.src){
            dataObject.image = element.product.image.src
        } else {
            console.log(index)
        }
        return dataObject
    }

    if (boozeInfo !== null) {
        boozeInfo.forEach((element,index) => {
            if (element !== null) {
                const dataEntry = createBoozeObject(element,index)
                finalArray.push(dataEntry);
            }
        });
    }

    return finalArray;
}

(async () => {
    try {
        const urls = await urlData();
        const onlineInventory = await boozeInventory(urls);
        const spiritLabInventory = condenseInfo(urls, onlineInventory);
        fs.writeFile(filePath, JSON.stringify(spiritLabInventory, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log('File has been written successfully.');
        });
    } catch (err) {
        console.error("Error getting the JSON", err)
    }
})();

//things that could be made into smaller objects for ease of use
// URL
//product.title
//product.product_type
//product.handle
//product.variants.option2(Alcohol Proof)
//product.image.src
