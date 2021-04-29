const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('../config.json')
const command = require('./command')

client.on('ready', async () => {
  const servers = await client.guilds.cache.size
  const users = await client.users.cache.size

  client.user.setActivity(`-help | in ${servers} servers and serving ${users} `)
  console.log(`${client.user.username} is online on ${servers} servers!`);
  console.log(client.commands)

  command(client, 'help', (message) => {
    const logo = 'https://cdn.discordapp.com/attachments/760577165485015041/785582299290796042/images_1.png'
    const embed = new Discord.MessageEmbed()
      .setTitle('SkyPixel offical website')
      .setURL('https://www.skypixel-mc.tk')
      .setAuthor(message.author.username)
      .setImage(logo)
      .setThumbnail(message.author.avatarURL())
      .setFooter('SkyPixel ip ➦ mc.skypixel.tk 👉 🇸🇰🇾🇵🇮🇽🇪🇱')
      .setColor('#00AAFF')
      .addFields(
        {
          name: `Links`,
          value: '[**GenPixel**](https://www.genpixel.tk "Generator.") 👉 To buy subscription and generate **Minecraft premium** accounts.',
          inline: false,
        },
        {
          name: '🚨 Moderation',
          value: '<:ban:785584757223981078>`!Ban` to ban someone.\n<:kick:785584781375045663> `!kick` to kick someone.\n🔇 `!mute` to mute someone.',
          inline: true,
        },
        {
          name: 'Fun',
          value: '🐱`-cat` to generate random cat image.',
          inline: true,
        },
        {
          name: 'Store',
          value: '[**SkyCoins**](https://skypixel-mc.craftingstore.net/category/173602 "SkyCoins are game currency and you can buy with them Ranks or items from SHOP menu in lobbies.")\n[**Ranks**](https://skypixel-mc.craftingstore.net/category/196152 "Ranks give you high perms than members and bypass MessageCoolDown")\n[**Donate**](https://www.paypal.com/donate/?token=RyK5QYmr1mQclHo1Go_-ThpOgj91h_US9g-l4vU9cQ3mVXhxrYVFHjt02mdQk4n88kpBhLR60DYVgxjx&fromUL=true&country.x=MA&locale.x=en_US "Support us by donating.")',
          inline: true,
        },
        {
          name: '**PREMIUM ONLY**',
          value: 'Soon...',
          inline: false,
        },
        {
          name: '                                 👇',
          value: '[**__SkyBot Support__**](https://discord.gg/75jq3rn "Join the support server if you need help or have any new idea for the bot.") | [**__Invite Me__**](https://discord.com/oauth2/authorize?client_id=747529813861859519&permissions=0&scope=bot "This link will allow the bot to join your choosen server to help you moderating it.") | [**__VOTE FOR ME__**](https://www.skypixel-mc.tk/index.php?route=/vote/ "Vote to support us") | [**Documentation**- (Soon...)]()',
        }
      )

    message.channel.send(embed)
  })
})

client.login(config.token)
