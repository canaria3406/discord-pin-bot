export async function unpinCommand(interaction) {
  try {
    const locales = {
      'en-GB': 'Unpinned the message!',
      'en-US': 'Unpinned the message!',
      'zh-CN': '已取消标注消息',
      'zh-TW': '已取消釘選訊息',
      'ja': 'メッセージをピン留めを解除しました',
      'ko': '메시지를 고정 해제했습니다',
    };
    await interaction.targetMessage.unpin()
        .then(() =>
          interaction.reply({
            content: (locales[interaction.locale] ?? locales['en-US']) + ' ' + interaction.targetMessage.url,
          }));
  } catch (error) {
    console.error(error);
  }
}
