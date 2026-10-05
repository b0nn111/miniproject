Page({
  data: {
    accountType: "企业",
    agreed: false,
    form: {
      phone: "",
      code: "",
      company: "",
      creditCode: "",
      username: "",
      password: ""
    }
  },

  goBack() {
    wx.navigateBack();
  },

  chooseType(event) {
    this.setData({ accountType: event.currentTarget.dataset.type });
  },

  toggleAgree() {
    this.setData({ agreed: !this.data.agreed });
  },

  onFieldInput(event) {
    const key = event.currentTarget.dataset.key;
    this.setData({ [`form.${key}`]: event.detail.value });
  },

  getCode() {
    wx.showToast({ title: "验证码为演示态", icon: "none" });
  },

  submit() {
    const { phone, code, username, password } = this.data.form;
    if (!phone || !code || !username || !password) {
      wx.showToast({ title: "请补全必填信息", icon: "none" });
      return;
    }
    if (!this.data.agreed) {
      wx.showToast({ title: "请先同意协议", icon: "none" });
      return;
    }
    getApp().setDemoAuth("registered");
    wx.showToast({ title: "注册成功", icon: "success" });
    setTimeout(() => wx.switchTab({ url: "/pages/mine/mine" }), 700);
  }
});
