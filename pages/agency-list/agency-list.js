const { districts, agencies, filterItems } = require("../../utils/data");

Page({
  data: {
    districts,
    selectedDistrict: "全市",
    keyword: "",
    list: agencies
  },

  onSearch(event) {
    this.setData({ keyword: event.detail.value }, this.applyFilter);
  },

  selectDistrict(event) {
    this.setData({ selectedDistrict: event.currentTarget.dataset.name }, this.applyFilter);
  },

  applyFilter() {
    this.setData({
      list: filterItems(agencies, this.data.selectedDistrict, this.data.keyword, ["name", "address", "scope"])
    });
  },

  goDetail(event) {
    wx.navigateTo({ url: `/pages/agency-detail/agency-detail?id=${event.currentTarget.dataset.id}` });
  },

  goBack() {
    wx.navigateBack();
  }
});
