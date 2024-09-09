const axios = require('axios')
const cheerio = require('cheerio')

// 目标网页的URL
const url = 'https://www.shuhaige.net/248534/'

// 使用axios发送GET请求
axios
  .get(url)
  .then(response => {
    // 使用cheerio加载返回的HTML
    const $ = cheerio.load(response.data)
    const links = $('')

    console.log($('#list a'))
  })
  .catch(error => {
    console.error('Error fetching the URL:', error)
  })
