import { PermissionsBitField, Client, GatewayIntentBits } from 'discord.js';
import { configManager } from './utils/configManager.js';
import { msgCommands } from './command/commandManager.js';
import { refreshContextMenus } from './utils/refreshContextMenus.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on('ready', () =>{
  console.log(`Ready! 以 ${client.user.tag} 身分登入`);
  refreshContextMenus();
  client.guilds.cache.forEach((guild) => console.log(`${guild.memberCount} | ${guild.name}`));
  console.log(`正在 ${client.guilds.cache.size} 個伺服器上運作中`);
  const totalUserCount = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);
  console.log(`正在服務 ${totalUserCount} 位使用者`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isMessageContextMenuCommand()) return;
  if (interaction.isMessageContextMenuCommand()) {
    if (interaction.targetMessage.channel.permissionsFor(client.user).has([
        PermissionsBitField.Flags.ViewChannel, 
        PermissionsBitField.Flags.ManageMessages
      ])) {
      msgCommands.forEach(({ commandNames, handler }) => {
        if (interaction.commandName === commandNames) {
          handler(interaction);
        }
      });
    }
  }
});

const config = await configManager();
client.login(config.DISCORD_BOT_TOKEN);
