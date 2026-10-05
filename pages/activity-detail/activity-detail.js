const { activities, getById } = require("../../utils/data");

Page({
  data: {
    item: null,
    form: {
      company: "",
      contactName: "",
      position: "",
      phone: ""
    }
  },

  onLoad(options) {
    this.setData({ item: getById(activities, options.id) || activities[0] });
  },

  goBack() {
    wx.navigateBack();
  },

  onFieldInput(event) {
    const key = event.currentTarget.dataset.key;
    this.setData({ [`form.${key}`]: event.detail.value });
  },

  submit() {
    if (this.data.item.status !== "open") {
      wx.showToast({ title: "活动已截止", icon: "none" });
      return;
    }
    const { company, contactName, position, phone } = this.data.form;
    if (!company || !contactName || !position || !phone) {
      wx.showToast({ title: "请补全报名信息", icon: "none" });
      return;
    }
    wx.showToast({ title: "提交预约成功", icon: "success" });
  }
});
