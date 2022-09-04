module.exports = {
    type: "basicCommand",
    name: "stats",
    code: `$title[1;$username[$clientID]'s stats]
    $addField[1;Bot Version;\`2.0.0-beta-1\`;true]
    $addField[1;aoi.js;\`$packageVersion\`;true]
    $addField[1;Ram;$ram;true]
    $addField[1;Cpu;$cpu;true]
    $addField[1;Node.js;\`$nodeVersion\`;true]
    $addField[1;Ping;$pingms;true]
    $addField[1;Package Dependencies;$packageDependencies;true]
    `
  }