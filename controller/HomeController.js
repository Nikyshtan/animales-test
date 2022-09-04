
function secretHome(req, res) {
    console.log("renderiza el index")
    let data = 
    {
        nombre : "Nicole",
        apellido : "Denon"
    }
    res.render('index', data)
}

function notfound(req, res) {
    res.render('not-found')
}
module.exports = {
    home : secretHome,
    notfound
}