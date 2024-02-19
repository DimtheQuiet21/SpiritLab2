async function boozeInventory (urls) {
    try {
        const boozes = await Promise.all(
            urls.map( async(element) => {
                const response = await fetch (`https://ishopliquor.com${element}`, {
                    headers: {
                        'Accept':'application/json'
                    }
                })
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })  
        );
        return boozes
    } catch (err) {
        console.error("Error fetching URLS", err)
    }
}

module.exports = boozeInventory