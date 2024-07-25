module.exports = {
type: "ready",
code: `$if[$getGlobalVar[ConsoleErrors]==true;
$enableConsoleErrors
;
$disableConsoleErrors
]
`
}