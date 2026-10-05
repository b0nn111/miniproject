const { products, getById } = require("../../utils/data");

Page({
  data: {
    item: null
  },

  onLoad(options) {
    this.setData({ item: getById(products, options.id) || products[0] });
  },

  goBack() {
    wx.navigateBack();
  },

  requestTrial() {
    const app = getApp();
    if (!app.globalData.loggedIn) {
      wx.navigateTo({ url: "/pages/login/login" });
      return;
    }
    wx.showToast({ title: "试用申请已记录", icon: "success" });
  }
});
