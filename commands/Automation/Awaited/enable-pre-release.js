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

    $setVar[release_type;Beta 2]
    $onlyIf[$checkContains[$getVar[release_type];Beta 2]==false]`
},
{
    name: "Disable",
    type: "awaited",
    code: `

    $setVar[release_type;Stable]
    $onlyIf[$checkContains[$getVar[release_type];Stable]==false]`
}]
