# 数服汇高仿微信小程序原型

这是一个原生微信小程序 UI 原型，复刻“数服汇”的主要可见功能结构。项目只使用本地 mock 数据，不调用真实接口，不发送预约、注册、短信或登录请求。

## 已实现页面

- 首页
- 机构预约列表与详情
- 服务官预约列表与详情
- 产品矩阵列表与详情
- 解决方案列表与详情
- 活动专区列表与详情/报名表单
- 我的
- 登录、注册、游客登录演示态

## 隐私规则

所有真实人名都已替换为数字编号，例如：

- 服务官 1001
- 联系人 3001

字段名如“联系人姓名”仅作为表单标签保留，不代表真实人员数据。

## 运行方式

1. 打开微信开发者工具。
2. 导入本目录：`miniprogram`。
3. AppID 可选择测试号，或使用项目内的 `touristappid` 演示配置。
4. 编译运行后，从首页进入各模块查看原型。

## 验证说明

已完成基础静态检查：

- JSON 配置可解析。
- JavaScript 文件通过语法检查。
- 检索确认观察到的真实人名未写入项目。

## English

### WeChat Mini Program Prototype Inspired by "Shu Fu Hui"

This is a native WeChat Mini Program UI prototype that recreates the main visible features and structure of "Shu Fu Hui". The project uses local mock data only. It does not call real APIs or send appointment, registration, SMS, or login requests.

### Implemented Pages

- Home
- Organization appointment list and details
- Service officer appointment list and details
- Product matrix list and details
- Solution list and details
- Event area list, details, and registration form
- My account
- Demonstration states for login, registration, and guest login

### Privacy Rules

All real names have been replaced with numeric identifiers, for example:

- Service officer 1001
- Contact 3001

Field names such as "Contact Name" are retained only as form labels and do not represent real personal data.

### How to Run

1. Open WeChat Developer Tools.
2. Import this directory: `miniprogram`.
3. Use a test AppID, or use the `touristappid` demonstration configuration included in the project.
4. Compile and run the project, then enter each module from the home page to explore the prototype.

### Verification

Basic static checks have been completed:

- JSON configuration files can be parsed.
- JavaScript files pass syntax checks.
- A search confirmed that the observed real names were not included in the project.
