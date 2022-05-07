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
# packages
[@discordjs/builders](https://www.npmjs.com/package/@discordjs/builders): used to build slash commands, version: 0.13.0

[@discordjs/rest](https://www.npmjs.com/package/@discordjs/rest): a rest api for discord.js library, version: 0.4.1

[discord-api-types](https://www.npmjs.com/package/discord-api-types): a package to import the api version from discord, version: 0.32.1

[discord-gamecord](https://www.npmjs.com/package/discord-gamecord): a package that's used to implement possible mini games, version: 2.0.0

[leaf-utils](https://www.npmjs.com/package/leaf-utils): a package that used to implement some fun commands such as `/meme`, version: 1.1.2

# Credits
this bot code was mostly taken from [discord.js's guide](https://github.com/discordjs/guide), but modified to include some nice commands, etc
