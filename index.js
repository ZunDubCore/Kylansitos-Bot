const Discord = require('discord.js');
require('dotenv').config();
    
const client = new Discord.Client();

client.on('ready', () => {
    console.log('La puta de ta mare!');
});


client.on('message', message =>{
    if(message.author.bot) return;

    console.log(message.content);

    if (message.content.message.content.toLowerCase().endsWith('inco') || message.content === '5') {
        message.reply('Por el culo te la hinco');
    }
    if (message.content.toLowerCase().endsWith('uca')){
        message.reply('Mi polla con peluca');
    }
    if (message.content.toLowerCase().endsWith('rece') || message.content === '13'){
        message.reply('Agárramela que me crece');
    }
    
 });


client.login();
