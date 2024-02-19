const cheerio = require('cheerio');

const startScrapePage = 120;

async function scrapeLoop (maxPage) {
    const hrefHolder = [];
    for (let i = 1; i <= maxPage; i++) { 
        let page = i;
        let hrefs = await scrape(page);  
        hrefs.forEach((url) => hrefHolder.push(url))
    }
    console.log(hrefHolder);
    return hrefHolder
}

async function scrape (page) {
    try {
      const response = await fetch(`https://ishopliquor.com/collections/all-acohol?page=${page}`)
    if (!response.ok) {
      throw new Error('Network response was not ok', response);
    }
    const htmlResponse = await response.text();
    const htmlBody = cheerio.load(htmlResponse);
    const hrefs = [];
    htmlBody('a').each((index, element) => {
      const link = htmlBody(element).attr('href');
      if (link) {
        hrefs.push(link);
      }
    });
    let uniquehrefs = hrefs.filter((value, index, self) => self.indexOf(value) === index);
    let producthrefs = uniquehrefs.filter((value) => {
        const target = value.split('/')
        return target[1] === 'products' //returns true if the URL has the product string
    })
    //console.log(producthrefs);
    return producthrefs
    } catch (err) {
      console.error('There was a problem with the fetch operation:', err);
      return []
    };
}

const getPageMax = async () => {
    const response = await fetch('https://ishopliquor.com/collections/all-acohol/') 
    if (!response.ok) {
          throw new Error('Network response was not ok', response);
    }
    const htmlResponse = await response.text();
    const htmlBody = cheerio.load(htmlResponse);
    const hrefs = [];
    htmlBody('a').each((index, element) => {
        const link = htmlBody(element).attr('href');
        if (link) {
        hrefs.push(link);
        }
    });
    let uniquehrefs = hrefs.filter((value, index, self) => self.indexOf(value) === index);
    let pagehrefs = uniquehrefs.filter((value) => {
        const target = value.split('page=');
        return /\d+/.test(target[1]); //returns true when the target has both 'page=' AND a number
    })
    
    const pageNumbers = [];
    pagehrefs.forEach((value)=>{
        let numberString = value.match(/\d+/) //test the strings for numbers and get the numbers!
        if (numberString !== null ){
            pageNumbers.push(parseInt(numberString[0]));
        }
    });
    return Math.max(...pageNumbers); //We spread function the array of page Numbers to enter all values as arguments
}   

async function urlData() {
    const maxPage = await getPageMax();
    const hrefLibrary = await scrapeLoop(maxPage);
    return hrefLibrary.filter((value, index, self) => self.indexOf(value) === index);
}

console.log(urlData());

module.exports = urlData;


