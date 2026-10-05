const mock = require("../mock/data");

function matchSearch(item, keyword, fields) {
  const text = (keyword || "").trim().toLowerCase();
  if (!text) return true;
  return fields.some((field) => String(item[field] || "").toLowerCase().includes(text));
}

function matchDistrict(item, district) {
  return !district || district === "全市" || item.district === district;
}

function filterItems(items, district, keyword, fields) {
  return items.filter((item) => matchDistrict(item, district) && matchSearch(item, keyword, fields));
}

function getById(items, id) {
  return items.find((item) => item.id === id);
}

module.exports = {
  ...mock,
  filterItems,
  getById
};
