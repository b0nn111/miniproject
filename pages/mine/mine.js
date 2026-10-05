Page({
  data: {
    loggedIn: false,
    userType: "guest"
  },

  onShow() {
    const app = getApp();
    this.setData({
      loggedIn: app.globalData.loggedIn,
      userType: app.globalData.userType
    });
  },

  onProfileTap() {
    if (!this.data.loggedIn) {
      this.goLogin();
    }
  },

  goLogin() {
    wx.navigateTo({ url: "/pages/login/login" });
  },

  clearLogin() {
    getApp().clearDemoAuth();
    this.onShow();
    wx.showToast({ title: "已退出演示登录", icon: "none" });
  },

  showDemo() {
    if (!this.data.loggedIn) {
      wx.navigateTo({ url: "/pages/login/login" });
      return;
    }
    wx.showToast({ title: "个人信息为演示态", icon: "none" });
  }
});
