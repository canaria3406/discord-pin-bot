export async function pinCommand(interaction) {
  try {
    const locales = {
      'en-GB': 'Pinned the message!',
      'en-US': 'Pinned the message!',
      'zh-CN': '已钉选讯息',
      'zh-TW': '已釘選訊息',
      'ja': 'メッセージをピン留めしました',
      'ko': '메시지를 고정했습니다',
    };
    await interaction.targetMessage.pin()
        .then(() =>
          interaction.reply({
            content: locales[interaction.locale] ?? 'Pinned the message!',
          }));
  } catch (error) {
    console.error(error);
  }
}
