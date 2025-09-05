import { createCommand } from "#base";
import { hasAdminPermissionIn, isInServer, renderComponents, sendMessage } from "#functions";
import { ApplicationCommandType, StringSelectMenuBuilder } from "discord.js";

createCommand({
    name: "list_members",
    description: "List all members in the server",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        if (!isInServer(interaction)) {
            sendMessage(true, "Esse comando só pode ser usado em um servidor.", interaction);
            return;
        }

        if (!hasAdminPermissionIn(interaction)) {
            sendMessage(true, "Apenas um administrador pode usar esse comando", interaction);
            return;
        }

        const members = await interaction.guild.members.fetch();

        const memberSelectList = new StringSelectMenuBuilder()
            .setCustomId("list_member_select")
            .setPlaceholder("Select a member")
            .addOptions(
                members.map(member => ({
                    label: member.user.tag,
                    value: member.id
                }))
            );


        renderComponents("Select a member from the dropdown below:",
            [
                { type: 1, components: [memberSelectList] }
            ],
            interaction
        )
    },
});
