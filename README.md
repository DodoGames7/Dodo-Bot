# notice
this version of Dodo bot is currently very experimental, based on my current javascript knowledge, i had to use other packages for possible mini games, i am currently working on this as soon as i have time enough

# how to run it?
first of all, download the code or self host it on hosting platforms such as replit, glitch,
and then fill in the required details

# details
`clientId`: the discord bot client id, where it's used to register slash commands along with the token which is secured privately in `.env` file

`guildid`: your server id, where slash commands will appear in

`.env`: your bot token where it's important, add a variable named `TOKEN` and then fill it with your bot token

# finaly steps
after filling everything, make sure to invite your bot to the server where it has the same id as `guildid` details, and then navigate to the terminal and run the following command:
```
node deploy-commands.js
```
once it sends "Successfully registered application commands.", then you're good to go!
