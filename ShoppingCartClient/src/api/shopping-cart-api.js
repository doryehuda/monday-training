//TODO: make this proccess.env variable
const API_HOST = "http://ec2-18-191-173-29.us-east-2.compute.amazonaws.com";
class ShoppingCartApi {
  static requestHeaders() {
    // return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    return {};
  }

  static fetchRequest(request) {
    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
  static getAllCarts() {
    const headers = this.requestHeaders();
    const request = new Request(`${API_HOST}/api/v1/shopping-lists/`, {
      method: "GET",
      headers: headers
    });

    return this.fetchRequest(request);
  }

  static updateCart(cart) {
    const request = new Request(
      `${API_HOST}/api/v1/shopping-lists/${cart.id}`,
      {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ shopping_list: cart })
      }
    );

    return this.fetchRequest(request);
  }

  static addCart(cart) {
    const request = new Request(`${API_HOST}/api/v1/shopping-lists/`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ shopping_list: cart })
    });

    return this.fetchRequest(request);
  }

  static deleteCart(cart) {
    const request = new Request(
      `${API_HOST}/api/v1/shopping-lists/${cart.id}`,
      {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );

    return this.fetchRequest(request);
  }
}

export default ShoppingCartApi;
