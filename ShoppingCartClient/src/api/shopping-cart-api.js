//TODO: make this proccess.env variable
const API_HOST = "http://ec2-18-191-173-29.us-east-2.compute.amazonaws.com/";
class ShoppingCartApi {
  static requestHeaders() {
    // return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    return {};
  }
  static getAllCarts() {
    const headers = this.requestHeaders();
    const request = new Request(`${API_HOST}/api/v1/shopping-lists/`, {
      method: "GET",
      headers: headers
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export default ShoppingCartApi;
