export class NavigationPage {
  navigateTo(elementGroup, itemList) {
    cy.get(".card").contains(elementGroup).click();
    cy.get(".element-list").contains(itemList).click();
  }

  verifyHeader(subMenu) {
    cy.get("h1")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal(subMenu);
      });
  }
  formsPage() {
    this.navigateTo("Forms", "Practice Form");
    this.verifyHeader("Practice Form");
  }

  textBoxPage() {
    this.navigateTo("Elements", "Text Box");
    this.verifyHeader("Text Box");
  }

  checkBoxPage() {
    this.navigateTo("Elements", "Check Box");
    this.verifyHeader("Check Box");
  }

  radioButtonPage() {
    this.navigateTo("Elements", "Radio Button");
    this.verifyHeader("Radio Button");
  }

  webTablesPage() {
    this.navigateTo("Elements", "Web Tables");
    this.verifyHeader("Web Tables");
  }

  resizablePage() {
    this.navigateTo("Interactions", "Resizable");
    this.verifyHeader("Resizable");
  }

  alertsPage() {
    this.navigateTo("Alerts, Frame & Windows", "Alerts");
    this.verifyHeader("Alerts");
  }

  widgetsPage() {
    this.navigateTo("Widgets", "Slider");
    this.verifyHeader("Slider");
  }
}

export const NavigateTo = new NavigationPage();
