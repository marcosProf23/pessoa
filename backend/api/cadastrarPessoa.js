// srv -> cadastrarPessoa.js

import express from "express";
import cors from "cors";
//import CadastrarPessoa from "./model/Pessoa.js";
import connection from "../model/db copy.js";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/cadastrarPessoa", (req, res) => {

    const { nome, cpf,idade } = req.body;

    console.log("Dados recebidos", { nome, cpf, idade });

    const sql = `
        INSERT INTO pessoas (nome,  cpf, idade)
        VALUES (?, ?, ?)
    `;

    connection.query(
        sql,
        [nome, cpf, idade],
        (error, results, fields) => {

            if (error) {
                console.error(error);
                return res.status(500).json({
                    erro: "Erro ao inserir dados"
                });
            }

            console.log("Dados inseridos com sucesso!");

            res.status(201).json({
                mensagem: "Pessoa cadastrada com sucesso"
            });
        }
    );
});

export default app;