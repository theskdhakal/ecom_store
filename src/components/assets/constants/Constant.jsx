export const CATEGORYTABLE = "category";
export const PRODUCTTABLE = "product";
export const PAYMENTTABLE = "payment";
export const CLIENT = "client";
export const MESSAGE = "message";
export const REVIEW = "review";
export const ORDER = "order";

export const getOrderStatusClass = (orderStatus) => {
  switch (orderStatus) {
    case "pending":
      return "bg-warning";
    case "processing":
      return "bg-primary";
    case "shipped":
      return "bg-info";
    case "delivered":
      return "bg-success";
    case "cancelled":
      return "bg-danger";
  }
};
