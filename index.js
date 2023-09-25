const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')

app.use(express.static(('views', path.join(__dirname, 'public'))))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/albuns', (req, res)=> {
    const albuns = [
        'Rumours', 'The Dark Side Of The Moon', 'The Marshall Mathers LP', 'Revolver', 'To Pimp a Butterfly'
    ]
    res.render('albuns', { albuns })
})

app.get('/rand', (req, res)=> {
    const num = Math.floor(Math.random()*10 + 1);
    res.render('random.ejs', {num});
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data) {
        res.render('subreddit.ejs', {...data});
    } else {
        res.render("notfound", {subreddit})
    }
})

app.listen(8080, ()=>{
    console.log('listening on port 8080');
})