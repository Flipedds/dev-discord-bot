import { createResponder, ResponderType } from "#base";
import { sendMessage } from "#functions";

createResponder({
    customId: "/manage/user/:userId/:action",
    types: [ResponderType.Button], cache: "cached",
    async run(interaction, params) {
        const { action, userId } = params;
        const targetMember = await interaction.guild.members.fetch(userId);

        switch(action){
            case "kick": {
                targetMember.kick();
                break;
            }
            case "ban": {
                targetMember.ban();
                break;
            }
            case "timeout": {
                targetMember.timeout(60000);
                break;
            }
            case "alert": {
                targetMember.send({ content: "Você foi alertado!" });
                break;
            }
        }
        sendMessage(true, `Ação ${action} executada em ${targetMember.user.tag}`, interaction);
    },
});