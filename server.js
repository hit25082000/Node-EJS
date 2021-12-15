const express = require('express');
const app = express(); 

app.set("view engine", "ejs")


app.get("/", function (req, res) {
    const items = [
        { 
            title: "D",
            message: "Deixo em casa"
        },
        { 
            title: "E",
            message: "Eu"
        },
        { 
            title: "M",
            message: "Minha energia vital"
        },
        { 
            title: "A",
            message: "Aumentando minhas"
        },
        { 
            title: "I",
            message: "Imaginações e"
        },
        { 
            title: "S",
            message: "Segredos"
        }
    ]
    const mensagemFoda = "Ei voçe cachaceiro"
    res.render("pages/index", {
        qualidades: items,
        mensagemFoda: mensagemFoda
    })
})

app.get("/sobre", function (req, res) {


    res.render("pages/about")
})

app.listen(8080);
console.log("rodando")
