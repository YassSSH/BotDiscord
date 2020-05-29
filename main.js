const { Client, MessageEmbed } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableMentions: "off" });


client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(PREFIX) !== 0) return;
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  // --------------------------------COMMANDES+REPEAT
  if (cmd === "defoncer") msg.channel.send(" https://cdn.discordapp.com/attachments/653314571058020383/708043566546681986/quand_il_va_te_defonce.mp4");
  if (cmd === "sieste") msg.channel.send("https://cdn.discordapp.com/attachments/694272443170160692/707743089061527602/ritchie_sieste.mp4");
  if (cmd === "quoi") msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/706684763070791770/0RIXbtGmK7wnnd_v.mp4");
  if (cmd === "ritchi") msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/706550754902802432/Snapchat-712967593.mp4");
  if (cmd === "r") msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/705900764970614915/putainnn.mp4");
  if (cmd === "allo") msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704643293572759632/video0.mov");
  if (cmd === "nrv") msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704643262907941004/video0.mov");
  if (cmd === "velo") msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704461053773480047/O5KGJaafGKalPTYL.mp4");
  if (cmd === "bombarde") msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704417429811494912/on_y_va_point_.mp4");
  if (cmd === "leto") msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704343177816965180/leto_petasse.mp4");
  if (cmd === "salva") msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704343176093368450/tes_une_putain_de_pute.mp4");
  if (cmd === "chelou") msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704163951885287464/video0.mov");
  if (cmd === "merci") msg.channel.send("https://discordapp.com/channels/666081842683969557/669998446866071552/703677791454888087");
  // --------------------------------------- REPEAT
  if (cmd === "repeat") {
    msg.channel.send(args.join(" "));
    msg.delete({ timeout: 0 }).then(msg => console.log(`Message deleted bouffon: ${msg.content}`));
  }
  // ---------------------------------------- ROLES
  if (cmd === "role") {
    const channel = client.channels.cache.get("7715492459030904892");
    const role = msg.guild.roles.cache.find(r => r.name === args[0]);
    if (!role) return msg.channel.send("Ce role n'existe pas mon gars");
    if (msg.member.roles.cache.find(r => r.name === args[0])) {
      msg.member.roles.remove(role);
      channel.send(`Le role ${role} a été supprimé à ${msg.author}.`);
      msg.delete({ timeout: 0 });
    } else {
      msg.member.roles.add(role);
      channel.send(`Le role ${role} a été ajouté à ${msg.author}.`);
      msg.delete({ timeout: 0 });
    }
  }
  // ------------------------EMBEDS
  if (cmd === "info") {
    const embed = new MessageEmbed()
      .setDescription(msg.guild.name)
      .setThumbnail(msg.guild.iconURL())
      .addField("Membres", msg.guild.memberCount, true)
      .addField("Owner", msg.guild.owner.user.tag, true)
      .setFooter(msg.guild.owner.user.tag, msg.guild.owner.user.avatarURL())
      .setTimestamp()
      .setImage("https://pbs.twimg.com/media/Drt0mUGWkAEltv2.jpg")
      .setColor(255)
      .setTitle("DEV BY FLAQUITO");

    msg.channel.send(embed);
  }
});
// ---------------------------BIENVENUE
client.on("guildMemberAdd", member => {
  member.send("Bienvenue bouffon tn lacoste ou quoi");
  const channel = client.channels.cache.get("715649720625659964");
  channel.send(`${member} Est en TN Lacoste, bienvenue a lui `);
});

client.login(TOKEN);
// -----------------------------CONSOLE,LOGS
client.on("ready", () => console.log("je suis pret chakal"));
client.on("error", () => console.error);
client.on("warn", () => console.warn);
client.on("debug", console.log);
// ---------------------------------API
const fetch  = require("node.fetch");
const { MessageEmbed } = require("discord.js");


module.exports =  async (client, message, args) => {
  msg.delete({ timeout: 0 });

  if (args[0] === "random") {
const random = await fetch("https://randomfox.ca/floof/")
.then(res => res.json())
.then(json => json.image);

const embed = new MessageEmbed()
.setImage(Fox)
.setFooter("API = 'https://randomfox.ca/floof/'")
message.channel.send(embed);
  }
};

