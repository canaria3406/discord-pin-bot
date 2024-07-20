import { configManager } from './configManager.js';
import { ContextMenuCommandBuilder, ApplicationCommandType, REST, Routes } from 'discord.js';

export async function refreshContextMenus() {
  const commandData = [
    new ContextMenuCommandBuilder()
        .setName('pinmessage')
        .setNameLocalizations({
          'en-GB': 'Pin Message',
          'en-US': 'Pin Message',
          'zh-CN': '钉选讯息',
          'zh-TW': '釘選訊息',
          'ja': 'メッセージをピン留め',
          'ko': '메시지 고정',
        })
        .setType(ApplicationCommandType.Message),
    new ContextMenuCommandBuilder()
        .setName('unpinmessage')
        .setNameLocalizations({
          'en-GB': 'Unpin Message',
          'en-US': 'Unpin Message',
          'zh-CN': '取消钉选讯息',
          'zh-TW': '取消釘選訊息',
          'ja': 'メッセージのピン留めを解除',
          'ko': '메시지 고정 해제',
        })
        .setType(ApplicationCommandType.Message),
  ];

  const config = await configManager();
  const rest = new REST({ version: '9' }).setToken(config.DISCORD_BOT_TOKEN);
  try {
    await rest.put(
        Routes.applicationCommands(config.DISCORD_BOT_ID),
        { body: commandData },
    );
    console.log('Successfully reloaded Context Menus.');
  } catch {
    console.log('Failed to reload Context Menus.');
  }
}
