export class SubmitFormPage {
  fillOutForm(formdata) {
    this.enterName(formdata.firstName, formdata.lastName);
    if (formdata.email) this.enterEmail(formdata.email);
    this.selectGender(formdata.gender);
    this.enterPhoneNumber(formdata.phone);
    if (formdata.birthYear && formdata.birthMonth && formdata.birthDay)
      this.enterBirthDate(
        formdata.birthYear,
        formdata.birthMonth,
        formdata.birthDay
      );
    if (formdata.subject) this.selectSubject(formdata.subject);
    if (formdata.imagePath) this.uploadingtheImage(formdata.imagePath);
    if (formdata.hobbies) this.selectHobbies(formdata.hobbies);
    if (formdata.address) this.enterAddress(formdata.address);
    if (formdata.state) this.selectStatewithFullNAme(formdata.state);
    if (formdata.city) this.selectCityWithFullName(formdata.city);
  }
  enterName(firstName, lastName) {
    cy.get("#firstName").type(firstName);
    cy.get("#lastName").type(lastName);
  }

  enterEmail(email) {
    cy.get("#userEmail").type(email);
    cy.get("#userEmail").should("have.value", email);
  }

  selectGender(gender) {
    cy.get('[type="radio"]').check(gender, { force: true });
  }

  enterPhoneNumber(phonenumber) {
    cy.get("#userNumber").as("PhoneNumber");
    cy.get("#userNumber").then((PhoneNumberField) => {
      cy.wrap(PhoneNumberField)
        .type(phonenumber)
        .should("have.value", phonenumber);
    });
  }

  enterBirthDate(year, month, day) {
    cy.get("#dateOfBirthInput").click().should("be.visible");
    cy.get(".react-datepicker-popper").then(() => {
      cy.get(".react-datepicker__year-select").select(year, { force: true });
      cy.get(".react-datepicker__month-select").select(month, {
        force: true,
      });
      cy.get(".react-datepicker__day")
        .not(".react-datepicker__day--outside-month")
        .contains(day)
        .click({ force: true });
    });
  }

  selectSubject(subjectTyped) {
    cy.get("#subjectsContainer").should("be.visible").type(subjectTyped);
    cy.get(".subjects-auto-complete__menu").should("be.visible");
    cy.contains(".subjects-auto-complete__menu", "Computer Science").click();
  }

  uploadingtheImage(filepath) {
    cy.get("#uploadPicture").selectFile(filepath);
  }

  selectHobbies(hobby) {
    if (hobby == "Sports") {
      cy.get('[type="checkbox"]').check("1", { force: true });
    } else if (hobby == "Reading") {
      cy.get('[type="checkbox"]').check("2", { force: true });
    } else if (hobby == "Music") {
      cy.get('[type="checkbox"]').check("3", { force: true });
    }
  }

  enterAddress(address) {
    cy.get("#currentAddress").type(address);
  }

  selectStatewithFullNAme(state) {
    cy.get("#state").scrollIntoView();
    cy.get("#state").click();
    cy.get("#react-select-3-input").type(state);
    cy.contains('.css-26l3qy-menu div[class$="-option"]', state).click({
      force: true,
    });
    cy.get("#city").should("not.be.disabled").should("be.visible");
  }

  selectStateWithPartialName(statePartial, fullOptionText) {
    cy.get("#state").scrollIntoView().click();
    cy.get("#react-select-3-input").type(statePartial);
    cy.contains('.css-26l3qy-menu div[class$="-option"]', fullOptionText).click(
      { force: true }
    );
    cy.get("#city").should("not.be.disabled").should("be.visible");
  }

  selectCityWithFullName(city) {
    cy.get("#city").click();
    cy.get("#react-select-4-input").type(city);
    cy.contains('div[id^="react-select-4-option"]', city)
      .should("be.visible")
      .click({ force: true });
  }

  selectCityWithPartialName(cityPartial, fullCityName) {
    cy.get("#city").click();
    cy.get("#react-select-4-input").type(cityPartial);
    cy.contains('div[id^="react-select-4-option"]', fullCityName)
      .should("be.visible")
      .click({ force: true });
  }

  clicksubmitButton() {
    cy.get("#submit").click();
  }

  findRequiredFields() {
    cy.get("#userForm")
      .find("[required]")
      .then((required) => {
        cy.wrap(required).contains("");
      });
  }
}

export const onSubmitForm = new SubmitFormPage();
