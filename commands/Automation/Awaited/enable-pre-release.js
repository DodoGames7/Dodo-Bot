module.exports = [{
    name: "Set Pre-release mode",
    type: "ready",
    code: `
    $ifAwaited[$getVar[pre_release_mode]==on;{execute:Enable-pre-release};{execute:Disable-pre-release}]


    `
},{
    name: "Enable-pre-release",
    type: "awaited",
    code: `

    $setVar[release_type;Pre-release]
    $onlyIf[$checkContains[$getVar[release_type];Pre-release]==false]`
},
{
    name: "Disable-pre-release",
    type: "awaited",
    code: `

    $setVar[release_type;Stable]
    $onlyIf[$checkContains[$getVar[release_type];Stable]==false]`
}]
