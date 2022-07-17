# glowbot-api-docs
> **Warning:** Glowbot-api is still early in development!

Glowbot-api docs &amp; example scripts.

## Usage:

Usage w/ bash & curl:
```bash
curl -s "https://glowbot.net/api/v1?id={your token}"
```

Usage w/ windows & powershell:
```powershell
Invoke-WebRequest -URI https://glowbot.net/api/v1?id={your token}
```

## Api types:

Item phases: 0 - 2
- 0, normal phase
- 1, dark phase
- 2, glowing phase

Sun phases: 0 - 7
  - [BookOfAberoth - Sun phases](https://bookofaberoth.fandom.com/wiki/Time#Time_of_Day)

Moon phases: 0 - 7
  - [BookOfAberoth - Moon phases](https://bookofaberoth.fandom.com/wiki/Moon_Phases)

```json
{
  "ok": true,
  "error": "",
  "data": {
    "white": {
      "createdOn": "2022-07-16T03:51:15.000Z",
      "updatedOn": "2022-07-17T02:26:02.000Z",
      "phase": 0
    },
    "black": {
      "createdOn": "2022-07-16T03:51:15.000Z",
      "updatedOn": "2022-07-17T02:26:02.000Z",
      "phase": 1
    },
    ...
  },
  "status": []
}
```

May be more readable as ts types.

```typescript
interface GlowbotApiState {
  /** Item creation date */
  createdOn: Date
  /** Last alert date */
  updatedOn: Date
  /** Current phase (see: item phases) */
  phase: number
}

interface GlowbotApiResponse {
  /** Response is ok */
  ok: boolean
  /** Response error */
  error?: string
  /** Game state */
  data: { [key: string]: GlowbotApiItem }
  /** Api status messages */
  status: string[]
}
```
