module.exports = {
type: "ready",
code: `$if[$getGlobalVar[pre_release]==on;
$onlyIf[$getGlobalVar[release_type]!=$getGlobalVar[DevReleaseTypeToSet];]
$setGlobalVar[release_type;$getGlobalVar[DevReleaseTypeToSet]]
;
$onlyIf[$getGlobalVar[release_type]!=Stable;]
$setGlobalVar[release_type;Stable]
]`
}
