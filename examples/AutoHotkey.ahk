#NoEnv
#Warn
SendMode Input
SetWorkingDir %A_ScriptDir%

EnvGet, glowbot_api_token, glowbot_api_token

try {
    req:=ComObjCreate("WinHttp.WinHttpRequest.5.1")
    req.Open("GET", "https://glowbot.net/api/v1?id=" glowbot_api_token, False)
    req.SetRequestHeader("Accept", "application/json")
    req.Send()
    req.WaitForResponse()
    MsgBox % req.ResponseText
} catch err {
    MsgBox % err
}
