import { createCommand } from "#base";
import { renderEmbedAndComponents } from "#functions";
import { brBuilder, createEmbed, createRow } from "@magicyan/discord";
import { ApplicationCommandType, ButtonBuilder, ButtonStyle } from "discord.js";

createCommand({
    name: "roulette",
    description: "Jogo roleta russa",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        const embed = createEmbed({
            color: constants.colors.success,
            description: brBuilder(
                "# Jogo Roleta Russa",
                "Clique no botão para jogar"
            )
        });

        const row = createRow(
            new ButtonBuilder(
                {
                    customId: "/roulette/play",
                    label: "Jogar",
                    style: ButtonStyle.Danger
                }
            ));

        renderEmbedAndComponents([embed], [row], interaction);
    }
});

createCommand({
    name: "game",
    description: "Pedra papel e tesoura",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        const embed = createEmbed({
            color: constants.colors.success,
            description: brBuilder(
                "# Jogo Pedra, Papel e Tesoura",
                "Escolha uma das opcoes: "
            )
        });

        const row = createRow(
            new ButtonBuilder(
                {
                    customId: "/game/pedra",
                    label: "Pedra",
                    style: ButtonStyle.Success
                }
            ),
            new ButtonBuilder(
                {
                    customId: "/game/papel",
                    label: "Papel",
                    style: ButtonStyle.Success
                }
            ),
            new ButtonBuilder(
                {
                    customId: "/game/tesoura",
                    label: "Tesoura",
                    style: ButtonStyle.Success
                }
            ));

        renderEmbedAndComponents([embed], [row], interaction);
    }
});