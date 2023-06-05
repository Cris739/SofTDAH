const express = require('express');
const app = express();

app.get('/', function (req, res) {

    let sql = require("mssql");

    // config for your database
    let config = {
        user: 'SofTDAH',
        password: 'Nosequeponer123',
        server: 'softtdah.database.windows.net',
        database: 'SoftTDAH',
        port: 1433,
        authentication: {
            type: 'default'
        },
        options: {
            encrypt: true
        }
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        let request = new sql.Request();

        // query to the database and get the records
        request.query("update Alumno set Diag_Desc = 'Probable' where Alu_Id = 2", function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

let server = app.listen(5000, function () {
    console.log('Server is running..');
});


