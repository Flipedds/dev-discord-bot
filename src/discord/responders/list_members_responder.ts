import { createResponder, ResponderType } from "#base";

createResponder({
    customId: "list_member_select",
    types: [ResponderType.StringSelect], cache: "cached",
    async run(interaction) {
        const memberId = interaction.values[0];
        const targetMember = await interaction.guild.members.fetch(memberId);

        const mention = `<@${targetMember.id}>`;

        await interaction.reply({
            content: `Vem aqui: ${mention}`
        });
    },
});