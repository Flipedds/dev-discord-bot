import { createResponder, ResponderType } from "#base";

createResponder({
    customId: "/game/:userChoice",
    types: [ResponderType.Button], cache: "cached",
    async run(interaction, params) {
        const { userChoice } = params;
        const choicesBot: string[] = ["pedra", "papel", "tesoura"];
        const random = Math.floor(Math.random() * choicesBot.length);
        const botChoice: string = choicesBot[random];

        let gameResult: string;

        switch (userChoice) {
            case "pedra":
                if (botChoice == "tesoura") {
                    gameResult = "Você Ganhou !!";
                } else if (botChoice == "papel") {
                    gameResult = "Você Perdeu !!";
                } else {
                    gameResult = "Empate !!";
                }
                break;
            case "tesoura":
                if (botChoice == "papel") {
                    gameResult = "Você Ganhou !!";
                } else if (botChoice == "pedra") {
                    gameResult = "Você Perdeu !!";
                } else {
                    gameResult = "Empate !!";
                }
                break;
            case "papel":
                if (botChoice == "pedra") {
                    gameResult = "Você Ganhou !!";
                } else if (botChoice == "tesoura") {
                    gameResult = "Você Perdeu !!";
                } else {
                    gameResult = "Empate !!";
                }
                break;
            default:
                gameResult = "Escolha inválida!";
        }
        await interaction.reply({ 
            content: `${gameResult} Você: ${userChoice} Bot: ${botChoice}`,
            flags: ["Ephemeral"] 
        });
    }
});