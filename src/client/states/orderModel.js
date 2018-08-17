import { model } from "@arkas/core";

export default model({
  config: {
    apiName: "orders",
    name: "orderModel",
    initialState: {
      orders: []
    }
  },
  effects: {
    async getOrders(filter) {
      const orders = await this.getAsync("", filter);
      return { orders };
    }
  },
  methods: {
    async getOrderById(orderId) {
      const order = await this.getAsync("/" + orderId);
      return order;
    }
  }
});
