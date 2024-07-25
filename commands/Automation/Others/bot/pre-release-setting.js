module.exports = {
type: "ready",
code: `$if[$getGlobalVar[pre_release]==on;
$onlyIf[$getGlobalVar[releaseType]!=Pre-release;]
$setGlobalVar[releaseType;Pre-release]
;
$onlyIf[$getGlobalVar[releaseType]!=Stable;]
$setGlobalVar[releaseType;Stable]
]`
}
