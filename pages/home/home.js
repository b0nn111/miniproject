const { news, serviceOfficers } = require("../../utils/data");

Page({
  data: {
    banner: "/assets/images/banner-shanghai.jpg",
    news,
    officers: serviceOfficers.slice(0, 4),
    entries: [
      { label: "机构预约", path: "/pages/agency-list/agency-list", iconSrc: "/assets/icons/entry-agency.png" },
      { label: "服务官预约", path: "/pages/officer-list/officer-list", iconSrc: "/assets/icons/entry-officer.png" },
      { label: "产品矩阵", path: "/pages/product-list/product-list", iconSrc: "/assets/icons/entry-product.png" },
      { label: "解决方案", path: "/pages/solution-list/solution-list", iconSrc: "/assets/icons/entry-solution.png" },
      { label: "活动专区", path: "/pages/activity-list/activity-list", iconSrc: "/assets/icons/entry-activity.png" }
    ]
  },

  goEntry(event) {
    wx.navigateTo({ url: event.currentTarget.dataset.path });
  },

  goOfficer(event) {
    wx.navigateTo({ url: `/pages/officer-detail/officer-detail?id=${event.currentTarget.dataset.id}` });
  },

  goNews() {
    wx.showToast({ title: "新闻详情为演示态", icon: "none" });
  }
});
