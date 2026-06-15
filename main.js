function verificar() {
    // 1. Pega os valores digitados pelo usuário
    let idade = Number(document.getElementById("idade").value);
    
    // .toLowerCase().trim() faz o código aceitar "sol", "Sol" ou "SOL" e remove espaços extras
    let time = document.getElementById("time").value.toLowerCase().trim();

    // 2. Seleciona a div do HTML onde vamos colocar as respostas
    let resultadoDiv = document.getElementById("resultado");
    
    // Limpa o resultado antigo para mostrar o novo
    resultadoDiv.innerHTML = ""; 

    // Lista (array) para guardar todas as mensagens que vão aparecer
    let mensagens = [];

    // --- EXEMPLO DE IF / ELSE (Idade) ---
    if (idade >= 18) {
        mensagens.push("✔️ Você é maior de idade.");
    } else {
        mensagens.push("❌ Você é menor de idade.");
    }

    // --- EXEMPLO DE IF SIMPLES (Time) ---
    if (time == "sol") {
        mensagens.push("🌞 Você escolheu o Time Sol!");
    }
    if (time == "lua") {
        mensagens.push("🌙 Você escolheu o Time Lua!");
    }

    // --- EXEMPLO DE OPERADOR OU (||) ---
    if (time == "sol" || time == "lua") {
        mensagens.push("🌌 Escolha válida! Você pertence ao Sol OU à Lua.");
    } else {
        mensagens.push("⚠️ Aviso: Time inválido. Digite exatamente 'Sol' ou 'Lua'.");
    }

    // --- EXEMPLO DE OPERADOR E (&&) ---
    if (idade >= 18 && time == "sol") {
        mensagens.push("🔥 <strong>Combo:</strong> Você é maior de idade E do time Sol!");
    }
    if (idade >= 18 && time == "lua") {
        mensagens.push("🔮 <strong>Combo:</strong> Você é maior de idade E do time Lua!");
    }

    // junta todas as mensagens e coloca na tela pulando linha com <br>
    resultadoDiv.innerHTML = mensagens.join("<br>");
}