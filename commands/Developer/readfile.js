module.exports = {
    name: "readfile",
    info: {
      description: "Returns the contents of the file specified.",
      perms: ["`SendMessages`"],
      dev: "true"
    },
    aliases: ["viewfile", "readcontent", "viewcontent"],
    code: `\`\`\`$readFile[$message]\`\`\`
    $onlyIf[$fileExists[$message]==true;This file doesn't seem to exist.]
    $onlyIf[$message!=;You need to specify a path of the file to view.]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    `
  }
