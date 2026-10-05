Page({
  goBack() {
    wx.navigateBack();
  },

  smsLogin() {
    getApp().setDemoAuth("sms");
    wx.showToast({ title: "已进入演示登录", icon: "success" });
    setTimeout(() => wx.switchTab({ url: "/pages/mine/mine" }), 600);
  },

  goRegister() {
    wx.navigateTo({ url: "/pages/register/register" });
  },

  guestLogin() {
    getApp().setDemoAuth("guest");
    wx.showToast({ title: "游客身份已启用", icon: "success" });
    setTimeout(() => wx.switchTab({ url: "/pages/mine/mine" }), 600);
  }
});
