import { createResponder, ResponderType } from "#base";
import { sendMessage } from "#functions";

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
        sendMessage(true,`${gameResult} Você: ${userChoice} Bot: ${botChoice}`, interaction);
    }
});


createResponder({
    customId: "/roulette/play",
    types: [ResponderType.Button], cache: "cached",
    async run(interaction) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        if (randomNumber === 6) {
            sendMessage(true, "💥 Você morreu!", interaction);
            const member = await interaction.guild.members.fetch(interaction.user.id);
            member.timeout(6000, "Roleta russa");
        } else {
            sendMessage(true, "🎉 Você sobreviveu!", interaction);
        }
    }
});