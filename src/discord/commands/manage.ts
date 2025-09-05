import { createCommand } from "#base";
import { hasAdminPermissionIn, renderEmbedAndComponents, sendMessage } from "#functions";
import { createRow } from "@magicyan/discord";
import { ApplicationCommandType, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";

createCommand({
    name: "Gerenciar",
    type: ApplicationCommandType.User,
    async run(interaction) {
        if (!hasAdminPermissionIn(interaction)) {
            sendMessage(true, "Apenas um administrador pode usar esse comando", interaction);
            return;
        }

        const { targetUser } = interaction;

        const embed = new EmbedBuilder({ description: `Gerenciar ${targetUser}` });
        const row = createRow(
            new ButtonBuilder({
                customId: `/manage/user/${targetUser.id}/kick`,
                label: "Expulsar", style: ButtonStyle.Secondary
            }),
            new ButtonBuilder({
                customId: `/manage/user/${targetUser.id}/ban`,
                label: "Banir", style: ButtonStyle.Danger
            }),
            new ButtonBuilder({
                customId: `/manage/user/${targetUser.id}/timeout`,
                label: "Castigo", style: ButtonStyle.Danger
            }),
            new ButtonBuilder({
                customId: `/manage/user/${targetUser.id}/alert`,
                label: "Alertar", style: ButtonStyle.Primary
            })
        );

        renderEmbedAndComponents([embed], [row], interaction);
    }
});