import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pessoa",
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao realizar conexão com o BD:", err);
        throw err;
    }

    console.log("Conexão com o BD estabelecida com sucesso!");
});

export default connection;