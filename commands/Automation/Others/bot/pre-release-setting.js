module.exports = {
type: "ready",
code: `$if[$getGlobalVar[pre_release]==on;
$onlyIf[$getGlobalVar[releaseType]!=$getGlobalVar[DevReleaseTypeToSet];]
$setGlobalVar[releaseType;$getGlobalVar[DevReleaseTypeToSet]]
;
$onlyIf[$getGlobalVar[releaseType]!=Stable;]
$setGlobalVar[releaseType;Stable]
]`
}
