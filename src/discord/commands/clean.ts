import { createCommand } from "#base";
import { hasAdminPermissionIn, sendMessage } from "#functions";
import { ApplicationCommandType } from "discord.js";

createCommand({
    name: "clean",
    description: "clean command",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        if (!hasAdminPermissionIn(interaction)) {
            sendMessage(true, "Apenas um administrador pode usar esse comando", interaction);
            return;
        }

        await interaction.deferReply({ flags: ["Ephemeral"] });

        const { channel } = interaction;

        if (!channel) return;

        const messages = await channel.messages.fetch();

        channel.bulkDelete(messages, true)
            .then((deleted) => {
                interaction.editReply({ content: `🧹 | Limpei ${deleted.size} mensagens!` });
            });
    }
});