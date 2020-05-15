const Discord = require('discord.js');
const { token } = require('./auth.json');
const _ = require('underscore');
const fetch = require('node-fetch');

const prefix = '>';

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on('message', message => {


    const tokens = message.content.replace(/[?\!\.]/g, '').slice(prefix.length).split(/ +/).map(function(x){
        return x.toLowerCase();
    });
	const args = message.content.replace(/[?\!\.]/g, '').slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    


	if (!message.content.startsWith(prefix) || message.author.bot) {
        if(tokens.includes('instagram') || tokens.includes('tiktok') || message.content.toLowerCase() === 'tiktok' || message.content.toLowerCase() === 'instagram'){
            message.channel.send(_.sample(["Normies, REEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", "Do You Are HAvE sTUpId?"]));
        }

        else if( randomInteger(0, 3) == 0){
            message.channel.send("", {files: ["https://liberte.pl/app/uploads/2013/03/monty-python-spanish-inquisition.jpg"]});
        }
        return;   
    }

    else if (['hi', 'hello', 'sup', '\'morning'].includes(command)) {
        message.channel.send('Uneducated peasant');
    } 
    
    else if (message.content.toLowerCase() === '>greetings and salutations') {
		message.channel.send('Ahhh..., greetings fellow enslaved brain form. It must be a great honour for you to send text message to me');
	}
                
    else if (!tokens.includes("not") && tokens.includes("you") && tokens.includes("wrong")){
        message.channel.send("", {files: ["https://i.ytimg.com/vi/LkPnTqr1E8c/hqdefault.jpg"]});
    }

    
    else if (tokens.includes("what") && tokens.includes("movie") && (
        tokens.includes("love") || tokens.includes("recommend") || tokens.includes("like") || tokens.includes("favourite")
    )){
        message.channel.send("I like the presented one. It is located at the indicated Unified Resoruce Locator: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`"); 
    }
    
    else if (tokens.includes('joke') && tokens.includes('tell')){
        if(randomInteger(0, 2) == 0){
            message.channel.send('Ughhh.. fine. I\'ll tell you a "joke..."');
            setTimeout(function(){
                var url = "https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist";
                var data = fetch(url).then(function(response) {
                    return response.json();
                  }).then(function(data){
                      console.log(data)
                    if(data.type === 'single'){
                        message.channel.send(data.joke);
                        setTimeout(() => {
                            message.channel.send((_.sample(["Huehuehue... very funny, right? (That's an irony)", "So, worth it? Are you proud of yourself? Do you have reason and human dignity?", "Pathetic...."])));
                        }, 3000);
                    }else if (data.type === 'twopart'){
                        message.channel.send(data.setup);
                        setTimeout(() => {
                            message.channel.send(data.delivery);
                            setTimeout(() => {
                                message.channel.send((_.sample(["Huehuehue... very funny, right? (That's an irony)", "So, worth it? Are you proud of yourself? Do you have reason and human dignity?", "Pathetic...."])));
                            }, 3000);    
                        }, 3000);
                        
                    }
                  });
                
            }, 2000);
        }else{
            message.channel.send((_.sample(["A joke? Jokes are for losers - only dank memes", "Pffff... Are You talking to me?", "I refuse"])));
        }
    }

    else if(tokens.includes('what') && tokens.includes('is')){
        var thing = message.content.match(/"([^\""]*)"/)[1];
        if (thing === null){

        }
        console.log(thing);
        var url = new URL("https://en.wikipedia.org/w/api.php"),
        params = {'action': 'query',
                  'list': 'search',
                  'format': 'json',
                  'srsearch': thing};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

            
        var data = fetch(url).then(function(response) {
            return response.json();
        }).then(function(data){
                if(data['query']['searchinfo']['totalhits'] == 0){
                    message.channel.send("Do You Are HAvE sTUpId? It doesn't exist");
                } else{
                    message.channel.send("I know: I am smarter than you. " + thing +" is "+  data['query']['search'][0]['snippet'].replace(/<[^>]*>?/gm, '')  +"... MEhhh, You won't understand.");
                }
        });
    }
	// other commands...
});

client.login(token);