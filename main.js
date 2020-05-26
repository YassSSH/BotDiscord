const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableMentions: "off"});

client.on("ready", () => {
  console.log("J'suis pret mon boug");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}wsh`)) msg.channel.send("bien ?");
  if (msg.content.startsWith(`${PREFIX}stop`)) msg.channel.send("calme oit chacal");
  if (msg.content.startsWith(`${PREFIX}oxah`)) msg.channel.send("La soeur a oxah j'la baise");
  if (msg.content.startsWith(`${PREFIX}twitch`)) msg.channel.send("https://www.twitch.tv/");
  if (msg.content.startsWith(`${PREFIX}mzx`)) msg.channel.send("BLACKIE LA PUTE");
  if (msg.content.startsWith(`${PREFIX}loco`)) msg.channel.send("jtm");
  if (msg.content.startsWith(`${PREFIX}all`)) msg.channel.send("@everyone Flaquito il est grave beau j'le suce");
});

client.login(TOKEN);
