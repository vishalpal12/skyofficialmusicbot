module.exports = {
  name: "resume",
  run: async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
    if (client.distube.isPlaying(message)) return message.channel.send(`${client.emotes.error} | There's Nothing Paused!`)
    let queue = client.distube.resume(message);
    message.channel.send(`⏯️| Resumed Successfully`)
  }
}
