const {Client} = require('discord.js');
const client = new Client({disableMentions:"everyone"});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!');
  if (msg.content === 'everyone') msg.channel.send('@everyone, wsh les moulagas', {disableMentions:"none"});
  if (msg.content === 'noteveryone') msg.channel.send('@everyone (noteveryone), wsh les moulagas');
});

client.login('NzE0Nzc3NzM5ODc3Njc5MTU1.Xsz7ow.YcAiLYYqIV7P6ftkOzUORsTkLyc');
