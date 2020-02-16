<p align="center">
  <h3 align="center">wakatime-sync</h3>
  <p align="center">Update Waktime summary data to your gist every day</p>
</p>

---

## Setup

### Prep work

1. Create a new public GitHub Gist (https://gist.github.com/)
1. Create a token with the `gist` scope and copy it. (https://github.com/settings/tokens/new)
1. Create a WakaTime account (https://wakatime.com/signup)
1. In your account settings, copy the existing WakaTime API Key (https://wakatime.com/settings/account)

### Project setup

1. Fork this repo
2. Go to the repo **Settings > Secrets**
3. Add the following environment variables:
   - **GH_TOKEN:** The GitHub token generated above.
   - **WAKATIME_API_KEY:** The API key for your WakaTime account.
   - **GIST_ID:** The ID portion from your gist url: `https://gist.github.com/superman66/`**`75f3b2ec23c7f69594ca3d9e8b7ea81d`**..

### Push Daily Report to MicroMessage

if you are using MicroMessage, you can use **ServerChan(http://sc.ftqq.com/)** to push wakatime daily report to your micromessage.

#### Settting

1. Create a ServerChan account (http://sc.ftqq.com/)
2. In sending message Page, copy SCKEY (http://sc.ftqq.com/?c=code)
3. Bind your micromessage in ServerChan
4. Add SCKEY to repo **Secrets**: **SCU_KEY**

after that, you will receive Wakatime daily report everyday.

<p align="center">
  <img width="400" src="./screenshot/daily-report.jpg">
</p>

## More Usage

you can send the daily report to you email, telegram, Slack or other IM.
If you are interest in it, take a issue or PR.

## How can I use this data

You can use this data in Wakatime Dashboard(http://wakatime.chenhuichao.com).

You input the Gist ID, then you can see the report.

<p align="center">
  <img src="./screenshot/wakatime-dashboard.jpg">
</p>
