<p align="center">
  <h3 align="center">wakatime-sync</h3>
  <p align="center">每日将你的Wakatime统计数据更新同步到你的gist中</p>
</p>

---

## 配置

### 准备工作

1. 创建一个公开的Github Gist (https://gist.github.com/)
2. 创建`gist`的token并保存好 (https://github.com/settings/tokens/new)
3. 创建WakaTime账户 (https://wakatime.com/signup)
4. 在你的账户设置中生成并复制 WakaTime API Key (https://wakatime.com/settings/account)

### 项目配置

1. Fork 这个仓库
2. 进入仓库设置 **Settings > Secrets**
3. 点击`New repository secret`新增以下变量:
   - **GH_TOKEN:** 上面生成的`gist`的token.
   - **WAKATIME_API_KEY:** 你的WakaTime账户的API key.
   - **GIST_ID:** 你创建的 `gist` 的id,在url的尾部: `https://gist.github.com/superman66/`**`75f3b2ec23c7f69594ca3d9e8b7ea81d`**..
4. 在仓库的**Actions**页面中 选择**Update gist with WakaTime summary**这个Workflows然后将其启用


### 推送每日报告到微信应用 (可能过时)

如果你需要使用微信, 你可以使用 **Server酱(http://sc.ftqq.com/)** 来推送每日同步的报告到你的微信应用上

#### 设置

1. 创建Server酱账户 (http://sc.ftqq.com/)
2. 在[这个页面](http://sc.ftqq.com/?c=code), 复制 SCKEY 
3. Server酱中绑定你的微信账户
4. 增加 SCKEY 到你的仓库环境变量中 **Secrets**: **SCU_KEY**

经过上述配置后,你应该会每天在微信上收到报告

<p align="center">
  <img width="400" src="./screenshot/daily-report.jpg">
</p>

## 更多用法

你可以发送每日报道到你的 email, telegram, Slack 或者其他 IM 软件.
如果你有兴趣,发起issue或PR


## 如何使用这些数据

在Wakatime Dashboard中使用这些数据(http://wakatime.chenhuichao.com).

输入 `gist` 的id就能看到报告

<p align="center">
  <img src="./screenshot/wakatime-dashboard.jpg">
</p>
