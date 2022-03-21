let newscontainer1 = document.getElementById("news1")

let news = ""

async function getData() {

    const api = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.dr.dk%2Fnyheder%2Fservice%2Ffeeds%2Fallenyheder`
      try {
        const response = await fetch(api);
        const data = await response.json();
        return data
      } catch (error) {
        // RETRY FETCH
        if (errorCountAmountOfTryies < 3) {
          getData();
          errorCountAmountOfTryies++;
        }
        console.log("whoops, something went wrong!", error);
      }
    }
    let data = await getData()

    function getNews() {
        data.items.forEach(element => {
            console.log(element.title)
            news += `*${element.title} `
        });
        newscontainer1.innerHTML = news
        
    }

    getNews()