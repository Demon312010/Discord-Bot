require('dotenv').config(); // only needed for local use

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`Bot is online as ${client.user.tag}`);
});

client.login(process.env.TOKEN); // token from environment variable