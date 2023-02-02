const mysql = require('mysql'); // підключення mysql
// function GetSuma() {
//     // вибираємо всі з бази =====================================================================================
// let res;
//         connection.query("SELECT * FROM sumatable.sumaforall", (err, result, field) => {
//         console.log(err);
//         console.log(result[0]['User']);
//         console.log(result[0]['Suma']);
//         res = result[0]['Suma'];
//         });

//     // закриваєжмо зєднання
//     connection.end(err => {
//         if (err) {
//             console.log(err)
//             return err;
//         }
//         else {
//             console.log('BD connection - Closed');
//         }
//     });
//     return res;
// }


// let summa = GetSuma();

// console.log( " summa " + summa)

async function GetSuma(obj, dataBase) {
    // конфіг пакета, відкриваємо зєднання
    const connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        database: "sumatable",
        password: "root"
    }
    );
    return new Promise((resolve, reject) => {
        // вибираємо всі з бази =====================================================================================
        connection.query(`SELECT * FROM sumatable.${dataBase} WHERE (` + `options` + ` = '${obj}');`, (err, result, field) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(result[0]['Suma']);

            // закриваєжмо зєднання
            connection.end(err => {
                if (err) {
                    console.log(err)
                }
                else {
                    //console.log('BD connection - Closed');
                }
            });
        });
    });
}

async function main(obj, dataBase) {
    try {
        let summa = await GetSuma(obj, dataBase);
        return summa;
    } catch (err) {
        console.log(err);
    }
}


async function GetComment() {
    // конфіг пакета, відкриваємо зєднання
    const connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        database: "sumatable",
        password: "root"
    }
    );
    return new Promise((resolve, reject) => {
        // вибираємо всі з бази =====================================================================================
        connection.query(`SELECT * FROM sumatable.report;`, (err, result, field) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(result);

            // закриваєжмо зєднання
            connection.end(err => {
                if (err) {
                    console.log(err)
                }
                else {
                    //console.log('BD connection - Closed');
                }
            });
        });
    });
}

async function getmain() {
    try {
        let summa = await GetComment();
        return summa;
    } catch (err) {
        console.log(err);
    }
}



module.exports = {
    main: main,
    getmain:getmain
};

