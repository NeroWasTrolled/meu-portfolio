document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

    const formData = {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value,
    };

    try {
        const response = await fetch("http://localhost:3000/contact", { // Altere para o URL do seu backend
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Mensagem enviada com sucesso!");
            document.getElementById("contactForm").reset(); // Limpa o formulário após o envio
        } else {
            alert("Erro ao enviar a mensagem. Tente novamente.");
        }
    } catch (error) {
        console.error("Erro ao enviar a mensagem:", error);
        alert("Erro na comunicação com o servidor.");
    }
});
