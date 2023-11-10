module.exports = {
    name: "node-deprecation",
    type: "ready",
    channel: "",
    code: `
    $log[It seems that you're using node.js $nodeVersion. Be mindful that support for those versions are deprecated as they have lost support and so in the future, packages used in Dodo-Bot may stop supporting it at anytime. Use these versions at your own risk.]
    
    $onlyIf[$stringStartsWith[$nodeVersion;v16;v17]==true;]`
    }