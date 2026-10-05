const { districts, activities, filterItems } = require("../../utils/data");

Page({
  data: {
    districts,
    selectedDistrict: "全市",
    keyword: "",
    list: activities
  },

  onSearch(event) {
    this.setData({ keyword: event.detail.value }, this.applyFilter);
  },

  selectDistrict(event) {
    this.setData({ selectedDistrict: event.currentTarget.dataset.name }, this.applyFilter);
  },

  applyFilter() {
    this.setData({
      list: filterItems(activities, this.data.selectedDistrict, this.data.keyword, ["title", "venue", "intro"])
    });
  },

  goDetail(event) {
    wx.navigateTo({ url: `/pages/activity-detail/activity-detail?id=${event.currentTarget.dataset.id}` });
  },

  goBack() {
    wx.navigateBack();
  }
});
