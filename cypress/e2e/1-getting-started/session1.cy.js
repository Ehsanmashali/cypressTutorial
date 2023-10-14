/// <reference types="cypress" />

// it() : start of test and add the name in function
// it() : ba it test shoro mishavad va parametr aval name mishavad va parametr dovom function(or arrow function) mishavad

// it("google search", function () {
//   // cy : ba cy tamami dastorat cypress ejra mishavad
//   // cy.visit : baraye ma address site ro baz mikone
//   cy.visit("https://google.com");

//   // cy.get : baraye peyda kardan element haye css az get estefade mikonim . vaghti peyda shod agar input ya textarea bood ba .type()
//   // mitonim dakhele input type konim va baraye enter zadan va search kardan az .type("cypress{enter}") estefade mikonim :

//   cy.get("textarea[name=q]").type("cypress{enter}");

// });

// it("test search cypress", () => {
//     cy.visit("https://cypress.io")

//     // cy.title : baraye ma title site ro peyda mikone va ba .should shart mizarim va migigim title bayad ba yek meghdare khasi barabar bashe .

//     // .should("eq" , "") : eq mige daghighan bayad barabar bashe ba ye meghdare khasi .
//     // .should("include","") : include mige shamel in meghdare bashe va lazem nist daghighan barabar bashe .
// cy.title().should(
//   "eq",
//   "JavaScript Component Testing and E2E Testing Framework | Cypress"
// );

// cy.title().should("include", "JavaScript Component");
// });

// it("test cypress", () => {
//   cy.visit("https://cypress.io");

//   cy.title().should(
//     "eq",
//     "JavaScript Component Testing and E2E Testing Framework | Cypress"
//   );

//   cy.title().should("include", "JavaScript Component");
// });

// test suite (describe) : baraye estefade az chand ta test case pooshte sare ham az in ravesh estefade mikonim .

describe("1-suite ", () => {
  it("1-Google search", () => {
    cy.visit("https://google.com");
    cy.get("textarea[name=q]").type("cypress{enter}");
  });

  it("2-cypress test web", () => {
    cy.visit("https://cypress.io");
    cy.title().should(
      "eq",
      "JavaScript Component Testing and E2E Testing Framework | Cypress"
    );
    cy.title().should("include", "JavaScript Component Testing");
  });
});
