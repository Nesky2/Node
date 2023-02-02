const mysql = require('mysql'); // підключення mysql
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '.' + dd + "." + yyyy

function SetDate(Int, String, dataBase, comment) {
    // конфіг пакета, відкриваємо зєднання
    const connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        database: "sumatable",
        password: "root"
    });
    // відкриваємо зєднання
    // connection.connect(err => {
    //     if (err) {
    //         console.log(err)
    //         return err;
    //     }
    //     else {
    //         console.log('BD connection - Open');
    //     }
    // })

    async function GetSuma(String) {
        return new Promise((resolve, reject) => {
            // вибираємо всі з бази =====================================================================================
            connection.query(`SELECT * FROM sumatable.${dataBase} WHERE (` + `options` + ` = '${String}')`, (err, result, field) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                resolve(result[0]['Suma']);
            });
        });

    }

    async function main(String) {
        try {
            let summa = await GetSuma(String);
            return summa;
        } catch (err) {
            console.log(err);
        }
    }

    main(String).then(result => {
        let sum;
        let sum1 = parseInt(result);
        let sum2 = parseInt(Int)
        sum = (sum1 + sum2);
        let query = `UPDATE sumatable.${dataBase} SET Suma = '${sum}' WHERE (` + `options` + ` = '${String}');`;

        connection.query(query, (err, result, field) => {
            // console.log(err);
            if(Int > 0 && dataBase == "sumaforira"){
                let query2 = `INSERT INTO sumatable.report (User, options, summa, comment, Data) VALUES ('Ira', '${String}', '${Int}', '${comment}', '${today.toString()}');`;

                connection.query(query2, (err) => {
                    if(err){
                        console.log(err) 
                    }

                });          
            }
            if(Int > 0 && dataBase == "sumafornazar"){
                let query2 = `INSERT INTO sumatable.report (User, options, summa, comment, Data) VALUES ('Nazar', '${String}', '${Int}', '${comment}', '${today.toString()}');`;

                connection.query(query2, (err) => {
                    if(err){
                        console.log(err) 
                    }

                });          
            }
            
            //console.log(field);
            connection.end(err => {
                if (err) {
                    console.log(err)
                    return err;
                }
                else {
                    // console.log('BD connection - Closed');
                }
            });

        });
    });

    // оновлюємо дані

    // вибираємо всі з бази =====================================================================================
    // connection.query("SELECT * FROM sumatable.sumaforall", (err, result, field) => {
    // console.log(err);
    // console.log(result[0]['User']);
    // console.log(result[0]['Suma']);
    // // console.log(field);
    // });

    // закриваєжмо зєднання


}
// шаримо функцію 
module.exports = {
    SetDate: SetDate
};