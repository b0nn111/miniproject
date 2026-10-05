const { districts, products, filterItems } = require("../../utils/data");

Page({
  data: {
    districts,
    selectedDistrict: "全市",
    keyword: "",
    list: products
  },

  onSearch(event) {
    this.setData({ keyword: event.detail.value }, this.applyFilter);
  },

  selectDistrict(event) {
    this.setData({ selectedDistrict: event.currentTarget.dataset.name }, this.applyFilter);
  },

  applyFilter() {
    this.setData({
      list: filterItems(products, this.data.selectedDistrict, this.data.keyword, ["title", "provider", "summary"])
    });
  },

  goDetail(event) {
    wx.navigateTo({ url: `/pages/product-detail/product-detail?id=${event.currentTarget.dataset.id}` });
  },

  goBack() {
    wx.navigateBack();
  }
});
