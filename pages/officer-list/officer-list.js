const { districts, serviceOfficers, filterItems } = require("../../utils/data");

Page({
  data: {
    districts,
    selectedDistrict: "全市",
    keyword: "",
    list: serviceOfficers
  },

  onSearch(event) {
    this.setData({ keyword: event.detail.value }, this.applyFilter);
  },

  selectDistrict(event) {
    this.setData({ selectedDistrict: event.currentTarget.dataset.name }, this.applyFilter);
  },

  applyFilter() {
    this.setData({
      list: filterItems(serviceOfficers, this.data.selectedDistrict, this.data.keyword, ["code", "center", "organization", "title"])
    });
  },

  goDetail(event) {
    wx.navigateTo({ url: `/pages/officer-detail/officer-detail?id=${event.currentTarget.dataset.id}` });
  },

  goBack() {
    wx.navigateBack();
  }
});
