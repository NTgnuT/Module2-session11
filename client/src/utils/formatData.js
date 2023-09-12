/**
 * Hàm fomat tiền tệ Việt Nam
 * @param {*} money chuỗi tiền tệ cần fomat
 * @returns chuỗi tiền tệ đã được format
 * AUTHOR: TungNT (11/09/23)
 */
export const formatMoney = (money) => {
  return money.toLocaleString("vi", { style: "currency", currency: "VND" });
};

export const formatDate = () => {};

export const formatEmail = () => {};
