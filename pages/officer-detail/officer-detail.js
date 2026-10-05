const { serviceOfficers, getById } = require("../../utils/data");

Page({
  data: {
    item: null
  },

  onLoad(options) {
    this.setData({ item: getById(serviceOfficers, options.id) || serviceOfficers[0] });
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
    wx.showToast({ title: "预约已保存", icon: "success" });
  }
});
