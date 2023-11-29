module.exports = {
    name: "Development warning",
    type: "ready",
    channel: "",
    code: `
    $log[Development version detected! Dev builds can be unstable despite having the latest bug fixes! By using them, you agree that you're using it at your own risk. It is HIGHLY recommended to use stable version for now until the upcoming version becomes stable enough.]
    $onlyIf[$stringEndswith[$getVar[botversion];-dev]==true;]`
}
