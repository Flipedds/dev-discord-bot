import { createWebhookClient } from "@magicyan/discord";
import { time } from "discord.js";
import { env } from 'env.js';
import { createEvent } from "../../../index.js";

createEvent({
    name: "disconnect",
    event: "voiceStateUpdate",
    async run(oldState, newState) {
        if (oldState.channel) return;

        if (!env.WEBHOOK_LOGS_URL) {
            console.log("WEBHOOK_LOGS_URL is not defined!");
            return;
        }

        const webhook = createWebhookClient(env.WEBHOOK_LOGS_URL);

        if (!webhook) {
            console.log("Not connected to WebHost !!")
            return
        }

        const connectedAt = time(new Date(), "t");

        const message = `${connectedAt} ${newState.member} conectou ao canal ${newState.channel}`;

        await webhook.send({
            content: message,
            allowedMentions: { parse: [] },
            flags: ["SuppressNotifications"],
        });
    },
});