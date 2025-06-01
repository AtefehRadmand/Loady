export class RegistrationResultModal {
  validateResultModalValues(
    studentname,
    email,
    gender,
    mobile,
    birthDate,
    subject,
    hobby,
    picture,
    address,
    state_City
  ) {
    const expectedValues = {
      "Student Name": studentname,
      "Student Email": email,
      Gender: gender,
      Mobile: mobile,
      "Date of Birth": birthDate,
      Subjects: subject,
      Hobbies: hobby,
      Picture: picture,
      Address: address,
      "State and City": state_City,
    };

    cy.get("table tbody tr").each(($row) => {
      const $cells = $row.find("td");
      const label = $cells.eq(0).text().trim();
      const value = $cells.eq(1).text().trim();

      if (expectedValues.hasOwnProperty(label)) {
        expect(value).to.eq(expectedValues[label]);
      }
    });
  }

  existingResultModal() {
    cy.get(".modal-header").should("contain", "Thanks for submitting the form");
  }

  closeResultModal() {
    cy.get("#closeLargeModal").click({ force: true });
  }
}

export const onResultModal = new RegistrationResultModal();
