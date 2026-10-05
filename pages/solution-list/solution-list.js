const { districts, solutions, filterItems } = require("../../utils/data");

Page({
  data: {
    districts,
    selectedDistrict: "全市",
    keyword: "",
    list: solutions
  },

  onSearch(event) {
    this.setData({ keyword: event.detail.value }, this.applyFilter);
  },

  selectDistrict(event) {
    this.setData({ selectedDistrict: event.currentTarget.dataset.name }, this.applyFilter);
  },

  applyFilter() {
    this.setData({
      list: filterItems(solutions, this.data.selectedDistrict, this.data.keyword, ["title", "provider", "summary"])
    });
  },

  goDetail(event) {
    wx.navigateTo({ url: `/pages/solution-detail/solution-detail?id=${event.currentTarget.dataset.id}` });
  },

  goBack() {
    wx.navigateBack();
  }
});
