const { solutions, getById } = require("../../utils/data");

Page({
  data: {
    item: null
  },

  onLoad(options) {
    this.setData({ item: getById(solutions, options.id) || solutions[0] });
  },

  goBack() {
    wx.navigateBack();
  },

  consult() {
    const app = getApp();
    if (!app.globalData.loggedIn) {
      wx.navigateTo({ url: "/pages/login/login" });
      return;
    }
    wx.showToast({ title: "咨询需求已记录", icon: "success" });
  }
});
