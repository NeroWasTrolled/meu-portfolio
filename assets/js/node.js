const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/contact", async (req, res) => {
    const { nome, telefone, email, mensagem } = req.body;

    // Configure o transporte de email
    const transporter = nodemailer.createTransport({
        service: "gmail", // ou outro serviço
        auth: {
            user: "gabriel.f.d.s0310@gmail.com", // Seu email
            pass: "03102006gfds",          // Sua senha (ou App Password)
        },
    });

    const mailOptions = {
        from: email,
        to: "gabrielfrancasimoes@gmail.com", // Email destinatário
        subject: `Novo Contato de ${nome}`,
        text: `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagem}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Mensagem enviada com sucesso.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao enviar a mensagem.");
    }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
