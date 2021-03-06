const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('La puta de ta mare!');
});


client.on('message', message =>{
    console.log(message.content); 
    if (message.content === '5' || message.content.toLowerCase() === 'cinco') {
        message.reply('Por el culo te la hinco');
    }
    if (message.content.toLowerCase() === 'luca' || message.content.toLowerCase() === 'ruca'){
        message.reply('Mi polla con peluca');
    }
    if (message.content.toLowerCase() === 'trece' || message.content === '13'){
        message.reply('Agárramela que me crece');
    }
    
 });


client.login();
