var express = require('express')
var app = express()
var recipes = require('./recipes')

app.set('view engine', 'jade')

app.all('/', function (req, res) {
    var cur = {}
    function parseparam(name, qty)
    {
        if (name)
        {
            if (qty === "" || qty === undefined)
                cur[name] = 1
            else
                cur[name] = Number(qty)
        }
    }
    parseparam(req.query.i1name, req.query.i1qty)
    parseparam(req.query.i2name, req.query.i2qty)
    parseparam(req.query.i3name, req.query.i3qty)
    if (Object.keys(cur).length > 0)
    {
        // do recipes here
        var crafts = []
        // This is terrible... but the best way to clone an object afaict
        var begin = JSON.parse(JSON.stringify(cur));
        recipes.run(cur, recipes.basictech(), function (n, src, dst, comment) {
            crafts.push([n, src, dst, comment])
        })
        res.render('index', {
            basictech: recipes.basictech(),
            techlevel: recipes.techlevel,
            begin: begin,
            crafts: crafts.reverse(),
            final: cur,
            query: req.query
        })
        console.log("run recipes.")
        console.log(begin)
        console.log(crafts)
        console.log(cur)
    }
    else
        res.render('index', {
            basictech: recipes.basictech(),
            techlevel: recipes.techlevel,
            query: { i1name:'', i1qty:'', i2name:'', i2qty:'', i3name:'', i3qty:''}
        })
})

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
});