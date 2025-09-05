import { createResponder, ResponderType } from "#base";
import { followUpMessage, renderComponents, sendMessage } from "#functions";
import { ModalBuilder, StringSelectMenuBuilder } from "discord.js";

createResponder({
    customId: "list_member_select",
    types: [ResponderType.StringSelect], cache: "cached",
    async run(interaction) {
        const memberId = interaction.values[0];

        const memberSelectType = new StringSelectMenuBuilder()
            .setCustomId(`type_select/${memberId}`)
            .setPlaceholder("Select a type")
            .addOptions([
                { label: "Menção", value: "mention" },
                { label: "Mensagem", value: "message" }
            ]);
        
        renderComponents("Select a type from the dropdown below:", 
            [
                { type: 1, components: [memberSelectType] }
            ],
            interaction
        )
    },
});

createResponder({
    customId: "type_select/:memberId",
    types: [ResponderType.StringSelect], cache: "cached",
    async run(interaction, params) {
        const memberId = params.memberId;

        const targetMember = await interaction.guild.members.fetch(memberId);

        const selectedType = interaction.values[0];

        if (selectedType === "mention") {
            sendMessage(false, `Vem aqui: <@${memberId}>`, interaction);
            return;
        } else if (selectedType === "message") {
            const modal = new ModalBuilder({
                customId: "message_modal",
                title: "Send a Message",
                components: [
                    {
                        type: 1,
                        components: [
                            {
                                type: 4,
                                customId: "message_input",
                                label: "Message",
                                style: 2,
                                placeholder: "Type your message here...",
                                required: true
                            }
                        ]
                    }
                ]
            });

            await interaction.showModal(modal);

            const submitted = await interaction.awaitModalSubmit({
                time: 60000,
                filter: i => i.user.id === interaction.user.id
            }).catch(() => null);

            if (!submitted) {
                followUpMessage("You did not submit the modal in time.", interaction);
                return;
            }

            const message = submitted.fields.getTextInputValue("message_input");

            try {
                await targetMember.send(message + `\n\n*Message sent by ${interaction.user} of server ${interaction.guild}*`);
                followUpMessage(`Sent a message to ${targetMember.user.tag}.`, interaction);
            } catch {
                followUpMessage(`Failed to send a message to ${targetMember.user}. They might have DMs disabled.`, interaction);
            }
            await submitted.deferUpdate();
            return;
        } else {
            followUpMessage("Unknown selection.", interaction);
            return;
        }
    },
});