const Discord = require('discord.js');
const { token } = require('./auth.json');
const _ = require('underscore');

const prefix = '!';

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on('message', message => {


    const tokens = message.content.slice(prefix.length).split(/ +/).map(function(x){
        return x.toLowerCase();
    });
	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    


	if (!message.content.startsWith(prefix) || message.author.bot) {
        if(tokens.includes('instagram') || tokens.includes('tiktok')){
            message.react(":poop:");
            message.channel.send(_.sample(["Normies, REEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", "Do You Are HAvE sTUpId?"]));
        }
        else if( randomInteger(0, 3) == 0){
            message.channel.send("", {files: ["https://liberte.pl/app/uploads/2013/03/monty-python-spanish-inquisition.jpg"]});
        }
        return;   
    }

    if(tokens.includes('instagram') || tokens.includes('tiktok')){
        message.react(":poop:");
        message.channel.send("Normies, REEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
    }
    else if (['hi', 'hello', 'sup', '\'morning'].includes(command)) {
		message.channel.send('Uneducated peasant');
	} else if (message.content.toLowerCase() === '!greetings and salutations') {
		message.channel.send('Ahhh..., greetings fellow enslaved brain form. It must be a great honour for you to send text message to me');
	}
                
    else if (!tokens.includes("not") && tokens.includes("you") && tokens.includes("wrong")){
        message.channel.send("", {files: ["https://i.ytimg.com/vi/LkPnTqr1E8c/hqdefault.jpg"]});
    }
    else if (tokens.includes("what") && tokens.includes("movie") && (
        tokens.includes("love") || tokens.includes("recommend") || tokens.includes("like")
    )){
        message.channel.send("I like the presented one. It is located at the indicated Unified Resoruce Locator: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`"); 
    }

	// other commands...
});

client.login(token);