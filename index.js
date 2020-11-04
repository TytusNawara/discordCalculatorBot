
const Discord = require('discord.js');
const client = new Discord.Client();
const process = require('process');
require('dotenv').config();
let eval = require('mathjs').evaluate;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    if(msg.author.bot)
        return;
    let result = '';
    try{
        result = eval(msg.content)
        msg.channel.send(result);
    }
    catch (e) {

    }
});

let token = process.env.DISCORD_CALCULATOR_TOKEN;
client.login(token);