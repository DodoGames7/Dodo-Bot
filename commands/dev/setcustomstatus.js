module.exports = {
    name: "setcustomstatus",
    $if: "old",
    code: `
    $if[$stringStartswith[$tolowercase[$message];--reset]==true]
    $setStatus[;custom;online]
    Status has been reset! You can set a status again if you would like to do so.
    $onlyIf[$userCustomStatus[$guildID;$clientID]!=none;There is no status to reset.]
    $else
    $setStatus[$message;custom]
     $onlyIf[$charCount[$message]<=128;You can only have up to 128 characters for each custom status you set.]
    $endif
      $onlyIf[$message!=;Please enter an text. You can also reset the current status by passing the flag \`--reset\` as first argument of the cmd.]
      $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]`
    
    }