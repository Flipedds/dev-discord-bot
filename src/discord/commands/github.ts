import { createCommand } from "#base";
import { brBuilder, createEmbed } from "@magicyan/discord";
import { ApplicationCommandType } from "discord.js";


createCommand({
    name: "github",
    description: "Comando de github",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        const embed = createEmbed({
            color: constants.colors.success,
            description: brBuilder(
                "# Link github",
                "Confira abaixo alguns links importantes",
                "https://github.com/"
            ),
            fields: [
                {
                    inline: true,
                    name: "⭐ github dev",
                    value: "https://github.com/Flipedds/"
                },
                {
                    inline: true,
                    name: "⭐ github padrão de commits",
                    value: "https://github.com/iuricode/padroes-de-commits"
                }
            ]
        });

        await interaction.reply({
            flags: ["Ephemeral"],
            embeds: [embed]
        });
    }
});