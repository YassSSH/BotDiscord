const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableMentions: "off" });


client.on("message", msg => {
  if (msg.author.bot) return;
  // --------------------------------
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}defoncer`) msg.channel.send(" https://cdn.discordapp.com/attachments/653314571058020383/708043566546681986/quand_il_va_te_defonce.mp4");
  if (cmd === `${PREFIX}sieste`) msg.channel.send("https://cdn.discordapp.com/attachments/694272443170160692/707743089061527602/ritchie_sieste.mp4");
  if (cmd === `${PREFIX}quoi`) msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/706684763070791770/0RIXbtGmK7wnnd_v.mp4");
  if (cmd === `${PREFIX}ritchi`) msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/706550754902802432/Snapchat-712967593.mp4");
  if (cmd === `${PREFIX}r`) msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/705900764970614915/putainnn.mp4");
  if (cmd === `${PREFIX}allo`) msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704643293572759632/video0.mov");
  if (cmd === `${PREFIX}nrv`) msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704643262907941004/video0.mov");
  if (cmd === `${PREFIX}velo`) msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704461053773480047/O5KGJaafGKalPTYL.mp4");
  if (cmd === `${PREFIX}bombarde`) msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704417429811494912/on_y_va_point_.mp4");
  if (cmd === `${PREFIX}leto`) msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704343177816965180/leto_petasse.mp4");
  if (cmd === `${PREFIX}salva`) msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704343176093368450/tes_une_putain_de_pute.mp4");
  if (cmd === `${PREFIX}chelou`) msg.channel.send("https://cdn.discordapp.com/attachments/669998446866071552/704163951885287464/video0.mov");
  if (cmd === `${PREFIX}merci`) msg.channel.send("https://discordapp.com/channels/666081842683969557/669998446866071552/703677791454888087");
  if (cmd === `${PREFIX}asmr`) msg.channel.send("https://www.youtube.com/watch?v=hSvTdqOiTpg");
  if (cmd === `${PREFIX}repeat`) {
    msg.channel.send(args.join(" "));
    msg.delete({ timeout: 0 }).then(msg => console.log(`Message deleted bouffon: ${msg.content}`));
  }
  if (cmd === `${PREFIX}role`) {
    const channel = client.channels.cache.get("714779936849788929");
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
});

client.on("guildMemberAdd", member => {
  member.send("Bienvenue chez le meilleur dev");
  const channel = client.channels.cache.get("715492459030904892");
  channel.send(`${member} Est en TN Lacoste, bienvenue a lui `);
});

client.login(TOKEN);
// -----------------------------
client.on("ready", () => console.log("je suis pret chakal"));
client.on("error", () => console.error);
client.on("warn", () => console.warn);
client.on("debug", console.log);

