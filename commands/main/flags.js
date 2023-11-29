module.exports = {
    name: "flags",
    code: `$title[Flags]
    $description[Flags are optional options for a command of the bot! It allows you to change on how the command will behave when you pass a flag at the command's argument! Be aware that, you must pass the flags at the start of each command's argument otherwise, it won't work.
    ]
    $addField[General;
    * \`--embed\` - Enables embeds for \`say\` command
    * \`--no-preview\` - Disables color preview in \`randomhex\` cmd
    ]
    $addField[Example(s);
    * \`(prefix)commandname --flag\`
    * \`$getGuildVar[prefix]say --embed Hi\`
    ]
    $color[Blurple]
    $cooldown[2s; Slow down! Don't spam the command!
Time left: \`%time%\`]`
    }
