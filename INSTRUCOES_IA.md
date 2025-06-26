# Guia Rápido: Usando as Integrações de IA (Gemini e Ollama) no Flowbuilder

Este documento explica como configurar e utilizar os modelos de Inteligência Artificial Gemini (Google) e Ollama dentro do seu sistema de flowbuilder.

---

### Passo 1: Configuração das Credenciais

Antes de usar os nós de IA no flowbuilder, você precisa configurar as credenciais para cada conexão do WhatsApp que desejar.

1.  Acesse o painel de administração do seu sistema.
2.  Vá para a seção **Conexões** e selecione para editar a conexão desejada.
3.  Preencha os campos correspondentes à IA que você quer usar:

    **Para Google Gemini:**
    *   `geminiApiKey`: Cole a sua chave de API gerada no Google AI Studio.

    **Para Ollama (Auto-hospedado):**
    *   `ollamaUrl`: Insira o endereço completo do seu servidor Ollama (Ex: `http://localhost:11434` ou `http://seu_ip_publico:11434`).
    *   `ollamaModel`: Defina o nome exato do modelo que você quer usar (Ex: `llama3`, `gemma`, `mistral`).
    *   `ollamaPrompt` (Opcional): Defina uma instrução base para o comportamento do seu assistente. Esta instrução será sempre enviada antes do prompt do nó. (Ex: "Você é um assistente virtual da Loja Z. Responda de forma curta e direta.").

4.  Salve as alterações na conexão.

---

### Passo 2: Utilização no Flowbuilder

Com as credenciais salvas, você já pode usar os nós de IA nos seus fluxos de conversa.

1.  Abra o **Flowbuilder** para criar um novo fluxo ou editar um existente.
2.  Na barra de ferramentas, você encontrará dois novos tipos de nós:
    *   **Nó `gemini`**
    *   **Nó `ollama`**
3.  Arraste o nó da IA desejada para a área de trabalho do fluxo.
4.  Conecte este nó na parte do fluxo onde você quer que a IA interaja com o cliente.
5.  Clique no nó para editar suas propriedades. O campo mais importante é o **`prompt`**.
6.  No campo **`prompt`**, escreva a instrução que a IA deve seguir naquele momento específico da conversa. Você pode usar variáveis do sistema (como nome do cliente, etc.) se o seu flowbuilder suportar.
    *   *Exemplo de prompt:* `"Responda a seguinte dúvida do cliente sobre o nosso plano de assinatura Pro: {{last_message}}."`

---

### Passo 3: Execução e Interação

Este passo é totalmente automático. Uma vez que o fluxo está ativo, o sistema cuidará de tudo:

1.  Quando um cliente chega no nó de IA no fluxo, o sistema automaticamente busca as credenciais que você configurou no **Passo 1**.
2.  Ele envia o `prompt` que você definiu no **Passo 2** para a API correspondente (Gemini ou Ollama).
3.  A IA gera a resposta.
4.  O sistema envia a resposta da IA para o cliente no WhatsApp, simulando uma digitação para uma experiência mais fluida.

Lembre-se de que a qualidade da resposta da IA depende muito da qualidade do seu `prompt` e da capacidade do modelo que você está utilizando.

---

## Modo Alternativo: IA Direta (Sempre Ativa)

Além do controle granular do Flowbuilder, você pode ativar um modo onde a IA responde a **todas** as mensagens do cliente diretamente, sem passar por um fluxo.

### Como Funciona?

Quando a "IA Direta" está ativa para uma conexão:
- Toda mensagem recebida do cliente (que não seja de grupo) é enviada diretamente para a IA configurada.
- O sistema ignora completamente o Flowbuilder, filas e chatbots tradicionais.
- A IA responde e a conversa continua diretamente com ela.
- **Prioridade:** O sistema sempre tentará usar o **Gemini** primeiro. Se a `geminiApiKey` não estiver configurada, ele usará o **Ollama**.

### Como Ativar/Desativar?

1.  Vá para a seção **Conexões** e edite a conexão desejada.
2.  Procure pelo interruptor (campo booleano) chamado **`iaBot`**.
3.  **Marque** a caixa para ativar a IA Direta.
4.  **Desmarque** para desativar e voltar a usar o Flowbuilder normalmente.
5.  Salve as alterações.

**Atenção:** Use este modo com cuidado. Ele é ideal para canais que devem funcionar como um chatbot 100% autônomo. Se você precisa de regras, transferências para atendentes ou fluxos complexos, use o método do Flowbuilder descrito acima.
