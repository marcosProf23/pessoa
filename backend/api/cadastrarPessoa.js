// /api/cadastrarPessoa.js

import connection from "../model/db copy.js";

export default async function handler(req, res) {
  // ?? CORS manual
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ?? Preflight request (browser manda antes do POST)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ?? bloqueia métodos não permitidos
  if (req.method !== "POST") {
    return res.status(405).json({ erro: "Método não permitido" });
  }

  try {
    const { nome, cpf, idade } = req.body;

    console.log("Dados recebidos:", { nome, cpf, idade });

    const sql = `
      INSERT INTO pessoas (nome, cpf, idade)
      VALUES (?, ?, ?)
    `;

    connection.query(sql, [nome, cpf, idade], (error) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao inserir dados" });
      }

      return res.status(201).json({
        mensagem: "Pessoa cadastrada com sucesso"
      });
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: "Erro interno no servidor" });
  }
}