const axios = require('axios')
const cheerio = require('cheerio')

const fetch = url => {
  axios
    .get(url)
    .then(res => {
      // 使用 Cheerio 加载 HTML
      const $ = cheerio.load(res.data)

      // 找到 ID 为 'list' 的 div 下的所有 a 标签
      const links = $('#list a')

      // 遍历并打印每个 a 标签的 href 属性
      links.each((index, element) => {
        console.log($(element).attr('href'))
      })
    })
    .catch(error => {
      console.error('Error fetching the URL:', error)
    })
}

module.exports = { fetch }
