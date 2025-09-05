import { ActionRowData, APIEmbed, APIMessageTopLevelComponent, ButtonInteraction, ChatInputCommandInteraction, JSONEncodable, MessageActionRowComponentBuilder, MessageActionRowComponentData, StringSelectMenuInteraction, TopLevelComponentData, UserContextMenuCommandInteraction } from "discord.js";

export function hasAdminPermissionIn(interaction: ChatInputCommandInteraction<"cached"> | UserContextMenuCommandInteraction<"cached">): boolean {
    return interaction.memberPermissions.has("Administrator");
}

export function isInServer(interaction: ChatInputCommandInteraction<"cached"> | UserContextMenuCommandInteraction<"cached">): boolean {
    return interaction.guild !== null;
}

export async function renderEmbed(
    embed: readonly (APIEmbed | JSONEncodable<APIEmbed>)[] | undefined,
    interaction: ChatInputCommandInteraction<"cached">
        | UserContextMenuCommandInteraction<"cached">
        | ButtonInteraction<"cached">) {
    await interaction.reply({
        flags: ["Ephemeral"],
        embeds: embed
    });
}

StringSelectMenuInteraction
export async function renderEmbedAndComponents(
    embed: readonly (APIEmbed | JSONEncodable<APIEmbed>)[] | undefined,
    components: readonly
        (APIMessageTopLevelComponent
            | JSONEncodable<APIMessageTopLevelComponent>
            | TopLevelComponentData
            | ActionRowData<MessageActionRowComponentData
                | MessageActionRowComponentBuilder>)[]
        | undefined,
    interaction: ChatInputCommandInteraction<"cached">
        | UserContextMenuCommandInteraction<"cached">
        | ButtonInteraction<"cached">) {
    await interaction.reply({
        flags: ["Ephemeral"],
        embeds: embed,
        components: components
    });
}

export async function renderComponents(
    content: string,
    components: readonly
        (APIMessageTopLevelComponent
            | JSONEncodable<APIMessageTopLevelComponent>
            | TopLevelComponentData
            | ActionRowData<MessageActionRowComponentData
                | MessageActionRowComponentBuilder>)[]
        | undefined,
    interaction: ChatInputCommandInteraction<"cached">
        | UserContextMenuCommandInteraction<"cached">
        | ButtonInteraction<"cached">
        | StringSelectMenuInteraction<"cached">) {
    await interaction.reply({
        flags: ["Ephemeral"],
        content: content,
        components: components
    });
}

export async function sendMessage(
    ephemeral: boolean,
    content: string,
    interaction: ChatInputCommandInteraction<"cached">
        | UserContextMenuCommandInteraction<"cached">
        | ButtonInteraction<"cached">
        | StringSelectMenuInteraction<"cached">) {
    await interaction.reply({ content: content, ephemeral: ephemeral });
}

export async function followUpMessage(
    content: string,
    interaction: ChatInputCommandInteraction<"cached">
        | UserContextMenuCommandInteraction<"cached">
        | ButtonInteraction<"cached">
        | StringSelectMenuInteraction<"cached">) {
    await interaction.followUp({ flags: ["Ephemeral"], content });
}