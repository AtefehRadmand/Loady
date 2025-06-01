import { userapi } from "../../support/api-objects/userapi";

describe("Testing Users API", () => {
  // testing create user functionality and check the response to be as expected
  it("Creating user", () => {
    userapi
      .createUser("Ati", "QA")
      .its("body")
      .then((body) => {
        cy.log(`Created user with ID: ${body.id}`);
        expect(body).to.have.property("id");
        expect(body).to.have.property("name", "Ati");
        expect(body).to.have.property("job", "QA");
        expect(body).to.have.property("createdAt");
      });
  });

  // testing fetch the list of users
  it("Getting list of users", () => {
    userapi
      .getUsers()
      .its("body")
      .then((body) => {
        expect(body.data).to.be.an("array");
        cy.log(JSON.stringify(body));
      });
  });

  //getting a specific user from users list and then get that user and validate the properties to be as expected
  it("Getting specific user and validate", () => {
    userapi
      .getUsers()
      .its("body")
      .then((body) => {
        const user = body.data[2];
        const { id, first_name, last_name } = user;
        cy.log(`User: ${first_name} ${last_name}, ID: ${id}`);

        userapi
          .getUserById(id)
          .its("body")
          .then((detail) => {
            expect(detail.data.first_name).to.equal(first_name);
            expect(detail.data.last_name).to.equal(last_name);
            expect(detail.data.id).to.equal(id);
          });
      });
  });
});
