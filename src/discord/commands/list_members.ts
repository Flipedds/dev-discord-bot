import { createCommand } from "#base";
import { ApplicationCommandType, StringSelectMenuBuilder } from "discord.js";

createCommand({
    name: "list_members",
    description: "List all members in the server",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        if (!interaction.guild) {
            await interaction.reply("This command can only be used in a server.");
            return;
        }

        const members = await interaction.guild.members.fetch();

        const dropdown = new StringSelectMenuBuilder()
            .setCustomId("list_member_select")
            .setPlaceholder("Select a member")
            .addOptions(
                members.map(member => ({
                    label: member.user.tag,
                    value: member.id
                }))
            );

        await interaction.reply({
            flags: ["Ephemeral"],
            content: "Select a member from the dropdown below:",
            components: [{ type: 1, components: [dropdown] }]
            
        });
    },
});
