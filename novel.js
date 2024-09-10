const axios = require('axios')
const cheerio = require('cheerio')

const fetch = url => {
  axios
    .get(url)
    .then(res => {
      const $ = cheerio.load(res.data)
      console.log($('#list a').html())

      //   const links = $('#list a')
      //   for (let i = 0; i < links.length; i++) {
      //     console.log(links[i])
      //   }
    })
    .catch(error => {
      console.error('Error fetching the URL:', error)
    })
}

module.exports = { fetch }
