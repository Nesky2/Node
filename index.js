const http = require('http'); // підлючаєм модуть http
const fs = require('fs') // підключаємо модуть для читання файлів
const script = require('./public/back'); // підключаю скрітп для БД
const get = require('./public/GetSuma'); // підключаю скрітп для БД

const body = require('body-parser') // піключення для витягування даних з форми

const express = require('express');
const { time } = require('console');
const app = express()

app.set('view engine', 'ejs') // підключення шаблонізатора
app.use(express.urlencoded({ extended: false })) // коректоно відображення даних з форми

app.use(express.static('public')) // проміжне по для підключення статичних файлів


//при вході на сторінку, очікуємо відповіді від сервера та відображаємо суму
app.get('/', (req, res) => {
    res.render('index')
    console.log("Some one enter to main page! " + Date(Date.now()).toString())
})

app.get('/report', (req, res) => {

    get.getmain().then(result => {
        let travel;
        const NazarElements = result.filter(element => element.User === 'Nazar');
        const NazarElementsStrings = NazarElements.map(element => JSON.stringify(element));
        const result2 = NazarElementsStrings
            .map(str => JSON.parse(str))
            .filter(obj => obj.User === 'Nazar')
            .map(obj => {
                if (obj.options === "cat") {
                obj.options = "Кота";
                }
                else if (obj.options === "eda") {
                    obj.options = "Їжу";
                }
                else if (obj.options === "car") {
                    obj.options = "Машину";
                }
                else if (obj.options === "home") {
                    obj.options = "Дім";
                }
                else if (obj.options === "funy") {
                    obj.options = "Розваги";
                }
                else if (obj.options === "other") {
                    obj.options = "Інше";
                }
                else if (obj.options === "medecine") {
                    obj.options = "Ліки";
                }
                else if (obj.options === "unheatly") {
                    obj.options = "Шкідливі звички";
                }
                else if (obj.options === "travel") {
                    obj.options = "Подорожі";
                }
                obj.User = "Назар"
                return `<li>${obj.Data} | ${obj.User} Витратив на: ${obj.options} ${obj.summa} грн, Коментар: ${obj.comment || " - "};</li>`;
                })
            .join('\n');
        console.log(result2);
        res.render('report', { rep: req.params = result2 })
        console.log("Some one enter to main page! " + Date(Date.now()).toString())
    
    });
})
app.get('/reportIra', (req, res) => {

    get.getmain().then(result => {
        let travel;
        const NazarElements = result.filter(element => element.User === 'Ira');
        const NazarElementsStrings = NazarElements.map(element => JSON.stringify(element));
        const result2 = NazarElementsStrings
            .map(str => JSON.parse(str))
            .filter(obj => obj.User === 'Ira')
            .map(obj => {
                if (obj.options === "cat") {
                obj.options = "Кота";
                }
                else if (obj.options === "eda") {
                    obj.options = "Їжу";
                }
                else if (obj.options === "car") {
                    obj.options = "Машину";
                }
                else if (obj.options === "home") {
                    obj.options = "Дім";
                }
                else if (obj.options === "funy") {
                    obj.options = "Розваги";
                }
                else if (obj.options === "other") {
                    obj.options = "Інше";
                }
                else if (obj.options === "medecine") {
                    obj.options = "Ліки";
                }
                else if (obj.options === "unheatly") {
                    obj.options = "Шкідливі звички";
                }
                else if (obj.options === "travel") {
                    obj.options = "Подорожі";
                }
                obj.User = "Іра"
                return `<li>${obj.Data} | ${obj.User} Витратила на: ${obj.options} ${obj.summa} грн, Коментар: ${obj.comment || " - "};</li>`;
                })
            .join('\n');           
        console.log(result2);
        console.log(travel);
        res.render('report', { rep: req.params = result2 })
        console.log("Some one enter to main page! " + Date(Date.now()).toString())
    
    });
})

app.get('/Nazar', (req, res) => {
    let dataBase = "sumafornazar"
    get.main("eda",dataBase).then(result => {
        let eda;
        eda = result;
        get.main("car",dataBase).then(result => {
            let car;
            car = result;
            get.main("home",dataBase).then(result => {
                let home;
                home = result;
                get.main("funy",dataBase).then(result => {
                    let funy;
                    funy = result;
                    get.main("cat",dataBase).then(result => {
                        let cat;
                        cat = result;
                        get.main("other",dataBase).then(result => {
                            let other;
                            other = result;
                            get.main("medecine",dataBase).then(result => {
                                let medecine;
                                medecine = result;
                                get.main("unheatly",dataBase).then(result => {
                                    let unheatly;
                                    unheatly = result;
                                    get.main("travel",dataBase).then(result => {
                                        let travel;
                                        travel = result;
                                        res.render('Nazar', { suma: req.params = eda, car: req.params = car, home: req.params = home, funy: req.params = funy, cat: req.params = cat, other: req.params = other, medecine: req.params = medecine, unheatly: req.params = unheatly, travel: req.params = travel })
                                    });                                  
                                });
                            });
                        });
                    });
                });
            });
        });
    });
})

app.get('/Ira', (req, res) => {
    let dataBase = "sumaforira"
    get.main("eda",dataBase).then(result => {
        let eda;
        eda = result;
        get.main("car",dataBase).then(result => {
            let car;
            car = result;
            get.main("home",dataBase).then(result => {
                let home;
                home = result;
                get.main("funy",dataBase).then(result => {
                    let funy;
                    funy = result;
                    get.main("cat",dataBase).then(result => {
                        let cat;
                        cat = result;
                        get.main("other",dataBase).then(result => {
                            let other;
                            other = result;
                            get.main("medecine",dataBase).then(result => {
                                let medecine;
                                medecine = result;
                                get.main("unheatly",dataBase).then(result => {
                                    let unheatly;
                                    unheatly = result;
                                    get.main("travel",dataBase).then(result => {
                                        let travel;
                                        travel = result;
                                        res.render('Ira', { suma: req.params = eda, car: req.params = car, home: req.params = home, funy: req.params = funy, cat: req.params = cat, other: req.params = other, medecine: req.params = medecine, unheatly: req.params = unheatly, travel: req.params = travel })
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
})
// передаємо введену суму на сервер
app.post('/send_n', (req, res) => {
    let dataBase = "sumafornazar"
    script.SetDate(req.body.eda, "eda", dataBase, req.body.suma_eda);
    script.SetDate(req.body.car, "car", dataBase, req.body.suma_car);
    script.SetDate(req.body.home, "home",dataBase, req.body.suma_home);
    script.SetDate(req.body.funy, "funy",dataBase, req.body.suma_funy);
    script.SetDate(req.body.cat, "cat",dataBase, req.body.suma_cat);
    script.SetDate(req.body.other, "other",dataBase, req.body.suma_other);
    script.SetDate(req.body.medecine, "medecine",dataBase, req.body.suma_medecine);
    script.SetDate(req.body.unheatly, "unheatly", dataBase, req.body.suma_unheatly);
    script.SetDate(req.body.travel, "travel", dataBase, req.body.suma_travel);
    console.log("User Nazar add money "  + Date(Date.now()).toString())
    res.redirect('/Nazar')

})
app.post('/send_i', (req, res) => {
    let dataBase = "sumaforira"
    script.SetDate(req.body.eda, "eda", dataBase, req.body.suma_eda);
    script.SetDate(req.body.car, "car", dataBase, req.body.suma_car);
    script.SetDate(req.body.home, "home",dataBase, req.body.suma_home);
    script.SetDate(req.body.funy, "funy",dataBase, req.body.suma_funy);
    script.SetDate(req.body.cat, "cat",dataBase, req.body.suma_cat);
    script.SetDate(req.body.other, "other",dataBase, req.body.suma_other);
    script.SetDate(req.body.medecine, "medecine",dataBase, req.body.suma_medecine);
    script.SetDate(req.body.unheatly, "unheatly", dataBase, req.body.suma_unheatly);
    script.SetDate(req.body.travel, "travel", dataBase, req.body.suma_travel);
    console.log("User Ira add money " + Date(Date.now()).toString())
    res.redirect('/Ira')
})
// запуск сервера на порті 3000
app.listen(44, () => {
    console.log('Server Started!');
})


// // cтворюємо сервер
// let server = http.createServer((req, res) => {
//         const stream = fs.ReadStream('./index.html') // читаємо файл
//         stream.pipe(res) // відарвити прочитаний файл
//         if(req.url == "/"){
//             console.log("Main");
//         }
//         else {
//             console.log(" No Main");
//             console.log(req.url);
//         }
// })
// // вказуємо налаштування сервера
// const PORT = 3000;
// const HOST = '127.0.0.1'
// // запускаємо сервер з нилиштуваннями
// server.listen(PORT, HOST, () =>{
//     console.log(`http://${HOST}:${PORT}`)
// })