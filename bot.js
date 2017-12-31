const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$$";

client.on(  +'ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    if (message.content === '@338202537712812043') {
    	message.channel.send('Do not mention the owner, if you keep doing it you will be removed!');
           	}
            if (message.content === '@396844249347260426') {
    	message.channel.send('Do not mention the developers , if you keep doing it you will be removed!');
            	}
    });
client.on('message', message => {
    if (message.content === prefix +'help') {
    	message.channel.reply('Hello im , my commands are the following with out quotation marks , bot commands about the menu ! , " $status " , " $s " , " Download " , " $features " , " $gta5-key " ,  Other bot commands! " $help " , " $ping " , " $bing " , " no " , " yes " ," hi " , " hello " , " hi " ," Bye " , " Goodbye " , " Goodnight " , " night ". ');
  	}
});

//fun featues of bot
client.on('message', message => {
    if (message.content === 'No') {
    	message.reply('Yes!');
  	}
            if (message.content === 'no') {
    	        message.reply('Yes!');
  	       }
     if (message.content === 'Yes') {
    	message.reply('No!');
  	}
            if (message.content === 'yes') {
    	        message.reply('No!');
  	      }
});

client.on('message', message => {
     if (message.content === 'hi') {
    	message.reply('Bye!');
  	}
            if (message.content === 'Hi') {
    	        message.reply('Bye!');
  	        }
    if (message.content === 'hello') {
    	message.reply('Goodbye!');
  	}
            if (message.content === 'Hello') {
    	        message.reply('Goodbye!');
  	        }
     if (message.content === 'bye') {
    	message.reply('Hello!');
  	}
    if (message.content === 'goodbye') {
    	message.reply('Hello!');
  	}
            if (message.content === 'Goodbye') {
    	          message.reply('Hello!');
  	        }
});

client.on('message', message => {
    if (message.content === prefix +'ping') {
    	message.channel.send('PONG!');
  	}
       if (message.content === prefix +'bing') {
    	message.reply('BONG!');
  	}
});

   client.on('message', message => {
    if (message.content === 'goodnight') {
    	message.reply('Goodnight, sleep well, talk to you again soon');
  	}
           if (message.content === 'Goodnight') {
            message.reply('Goodnight, sleep well, talk to you again soon');
            }
                 if (message.content === 'night') {
                    message.reply('Goodnight, sleep well, talk to you again soon');
                    }
                        if (message.content === 'Night') {
                    message.reply('Goodnight, sleep well, talk to you again soon');
                    }
    });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
