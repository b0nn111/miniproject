const { agencies, getById } = require("../../utils/data");

Page({
  data: {
    item: null
  },

  onLoad(options) {
    this.setData({ item: getById(agencies, options.id) || agencies[0] });
  },

  goBack() {
    wx.navigateBack();
  },

  book() {
    const app = getApp();
    if (!app.globalData.loggedIn) {
      wx.navigateTo({ url: "/pages/login/login" });
      return;
    }
    wx.showToast({ title: "预约咨询已记录", icon: "success" });
  }
});
