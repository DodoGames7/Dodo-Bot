module.exports = [{
    name: "Set Pre-release mode",
    type: "ready",
    code: `
    $ifAwaited[$getVar[pre_release_mode]==on;{execute:Enable};{execute:Disable}]


    `
},{
    name: "Enable",
    type: "awaited",
    code: `

    $setVar[release_type;Pre-release]
    $onlyIf[$checkContains[$getVar[release_type];Pre-release]==false]`
},
{
    name: "Disable",
    type: "awaited",
    code: `

    $setVar[release_type;Pre-Stable]
    $onlyIf[$checkContains[$getVar[release_type];Pre-Stable]==false]`
}]
