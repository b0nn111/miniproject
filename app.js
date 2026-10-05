App({
  globalData: {
    loggedIn: false,
    userType: "guest"
  },

  onLaunch() {
    const saved = wx.getStorageSync("demoAuth");
    if (saved) {
      this.globalData.loggedIn = Boolean(saved.loggedIn);
      this.globalData.userType = saved.userType || "guest";
    }
  },

  setDemoAuth(userType = "guest") {
    this.globalData.loggedIn = true;
    this.globalData.userType = userType;
    wx.setStorageSync("demoAuth", { loggedIn: true, userType });
  },

  clearDemoAuth() {
    this.globalData.loggedIn = false;
    this.globalData.userType = "guest";
    wx.removeStorageSync("demoAuth");
  }
});
