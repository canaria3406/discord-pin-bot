export async function pinCommand(interaction) {
  try {
    const locales = {
      'en-GB': 'Pinned the message!',
      'en-US': 'Pinned the message!',
      'zh-CN': '已标注消息',
      'zh-TW': '已釘選訊息',
      'ja': 'メッセージをピン留めしました',
      'ko': '메시지를 고정했습니다',
    };
    await interaction.targetMessage.pin()
        .then(() =>
          interaction.reply({
            content: (locales[interaction.locale] ?? locales['en-US']) + ' ' + interaction.targetMessage.url,
          }));
  } catch (error) {
    console.error(error);
  }
}
