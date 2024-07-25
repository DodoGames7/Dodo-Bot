module.exports = {
type: "ready",
code: `$if[$getGlobalVar[pre_release]==on;
$onlyIf[$getGlobalVar[releaseType]!=$getGlobalVar[releaseTypeToSet];]
$setGlobalVar[releaseType;$getGlobalVar[releaseTypeToSet]]
;
$onlyIf[$getGlobalVar[releaseType]!=Stable;]
$setGlobalVar[releaseType;Stable]
]`
}
