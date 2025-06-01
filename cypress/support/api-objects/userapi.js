export class UserApi {
  constructor() {
    this.baseUrl = Cypress.env("apiUrl");
    this.headers = {
      "x-api-key": "reqres-free-v1",
    };
  }
  createUser(name, job) {
    const body = { name, job };
    return cy.request({
      method: "POST",
      url: `${this.baseUrl}/users`,
      headers: this.headers,
      body,
    });
  }

  getUsers() {
    return cy.request({
      method: "GET",
      url: `${this.baseUrl}/users`,
      headers: this.headers,
    });
  }

  getUserById(id) {
    return cy.request({
      method: "GET",
      url: `${this.baseUrl}/users/${id}`,
      headers: this.headers,
    });
  }
}

export const userapi = new UserApi();
