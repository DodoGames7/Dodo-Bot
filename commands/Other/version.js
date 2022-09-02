module.exports ={
  type: "basicCommand",
  name:"version",
  aliases:["updates","news","ver"],
  code: `$title[1;** ⚙️Version: 2.0.0-beta (2022 aug 27th)**]
$description[1;
**MAJOR CHANGES**
drop support for aoi.js v5 and introduce support for aoi.js v6!

dodo bot now uses discord api v10 since discord api v9 will be deprecated in 4 months, basically making the bot being up to date with the breaking changes

moved from dev to beta as aoi.js v6-dev is officially released

to use dodo bot v2, Node.js 16.9.0 or newer is now required., if you're running on older lts version then you need to update first and then migrate to v2-beta

**other**
added new category for help command which is config, an category for server configuration commands to configure on how should the bot work
added 2 new mini games (but broken currently)
]
$color[1;Blurple]`
} // returns a list of changes in the bot code