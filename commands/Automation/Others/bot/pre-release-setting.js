module.exports = {
type: "ready",
code: `$if[$getGlobalVar[pre_release]==on;
$onlyIf[$getGlobalVar[releaseType]!=$getGlobalVar[DevVersionTypeToset];]
$setGlobalVar[releaseType;$getGlobalVar[DevVersionTypeToset]]
;
$onlyIf[$getGlobalVar[releaseType]!=Stable;]
$setGlobalVar[releaseType;Stable]
]`
}
