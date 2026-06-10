import mysql from "mysql2";

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao realizar conexão com o BD:", err);
        throw err;
    }

    console.log("Conexão com o BD estabelecida com sucesso!");
});

export default connection;