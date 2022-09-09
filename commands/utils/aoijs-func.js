module.exports = {
    name: "aoi",
    aliases: "aoijs",
    code: `$title[Aoi.js Function Search]
    $addField[function Usage;\`\`\`$message$djseval[client.functionManager.usage.get("$message");yes]\`\`\`;no]
    $addField[function name;\`\`\`$message\`\`\`;no]
    $onlyIf[$djseval[client.functionManager.usage.get("$message");yes]!=undefined;invalid function provided]
    $onlyIf[$message!=;you need to provide an function name]
    `
  }