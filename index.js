const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')


const app = express()
const newspaper = [
    {
        name: 'thetimes',
        address: 'https://www.thetimes.co.uk/environment/climate-change',
        base:''
    },
    {
        name: 'guardian',
        address: 'https://www.theguardian.com/environment/climate-crisis',
        base:''
    },
    {
        name: 'telegraph',
        address: 'https://www.telegraph.co.uk/climate-change/',
        base:'https://www.telegraph.co.uk'
    },
    {
        name: 'nytimes',
        address: 'https://www.nytimes.com/section/climate',
        base:''
    }
]
const articles = []
newspaper.forEach(newspaper => {
    axios.get(newspaper.address)
        .then((response) => {
            const html = response.data
            // console.log(html)
            const $ = cheerio.load(html)
            $('a:contains("climate")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                articles.push({
                    title,
                    url: newspaper.base + url,
                    source: newspaper.name
                })
            })
            res.json(articles)
        }).catch((err) => console.log())
})


app.get('/', (req, res) => {
    res.json('Welcome to my Climate Change News API')
})
app.get('/news', (req, res) => {
    res.json(articles)
})
app.get('/news/:newspaperId', (req, res) => {
    const newspaperId = req.params.newspaperId
    const newspaperAddress = newspaper.filter(newspaper => newspaper.name === newspaperId)[0].address
    const newspaperBase = newspaper.filter(newspaper => newspaper.name === newspaperId)[0].base
    // console.log(newspaperAddress)
    axios.get(newspaperAddress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificArticles = []
            $('a:contains("climate")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                specificArticles.push({
                    title,
                    url: newspaperBase + url,
                    source: newspaperId
                })
            })
            res.json(specificArticles)
        }).catch((err) => console.log())
})

app.listen(PORT, () => console.log('server running on PORT', PORT))