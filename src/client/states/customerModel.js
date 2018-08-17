import { model } from "@arkas/core";

export default model({
  config: {
    apiName: "customers",
    name: "customerModel",
    initialState: {
      customers: []
    }
  },
  effects: {
    async getCustomers(filter) {
      const customers = await this.getAsync("", filter);
      return { customers };
    }
  },
  methods: {
    async getCustomerById(customerId) {
      const customer = await this.getAsync("/" + customerId);
      return customer;
    }
  }
});
