class Product {
  constructor(id = "", name = "", desc = "", price = 0, imageUrl = "") {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

class Stock {
  constructor() {
    this.list_product = [];
  }

  get_list_product() {
    return this.list_product;
  }

  get_prod_by_id(id) {
    return this.list_product.find(product => product.id === id) || null;
  }

  set_list_product(products) {
    this.list_product = products;
  }
}

class Cart {
  constructor() {
    this.list_cart = {};
  }

  get_list_cart() {
    return this.list_cart;
  }

  addInCart(id) {
    if (!id) {
      console.error('Product ID is invalid:', id);
      return;
    }
    if (this.list_cart[id]) {
      this.list_cart[id]++;
    } else {
      this.list_cart[id] = 1;
    }
    console.log(`Product ${id} added to cart. Current cart:`, this.list_cart);
  }

  removeFromCart(id) {
    if (this.list_cart[id]) {
      if (this.list_cart[id] === 1) {
        delete this.list_cart[id];
      } else {
        this.list_cart[id]--;
      }
    }
  }

  get_nbr_product() {
    return Object.values(this.list_cart).reduce((total, qty) => total + qty, 0);
  }

  get_total_price(stock) {
    return Object.entries(this.list_cart).reduce((total, [id, qty]) => {
      const product = stock.get_prod_by_id(id);
      return total + (product ? product.price * qty : 0);
    }, 0);
  }
}

export { Product, Stock, Cart };
