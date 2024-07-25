module.exports = {
type: "ready",
code: `$if[$getGlobalVar[pre_release]==on;
$onlyIf[$getGlobalVar[releaseType]!=Preview;]
$setGlobalVar[releaseType;Preview]
;
$onlyIf[$getGlobalVar[releaseType]!=Stable;]
$setGlobalVar[releaseType;Stable]
]`
}
