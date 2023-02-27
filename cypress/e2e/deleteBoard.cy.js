/// reference types = "Cypress" />

import { createBoard } from "../page_objects/createBoard";
import { deleteBoard } from "../page_objects/deleteBoard";
import { loginPage } from "../page_objects/loginPage";

describe("delete board test",() => {

    beforeEach("login to the app", () => {
        cy.intercept({
            method: "GET",
            url: Cypress.env("apiUrl") + "/my-organizations",
        }).as("getOrg");
        cy.visit("/login");
        let orgId;
        loginPage.login(Cypress.env("validEmail"),Cypress.env("validPass"))
        cy.url().should("include", "/my-organizations");
        cy.wait("@getOrg").then((interception) => {
            expect(interception.response.statusCode).eq(200);
            expect(interception.response.body.last_organization_id).eq(orgId)
        });
    })

        it("delete new board",() => {
            cy.url().should("include","/my-organizations")
            deleteBoard.goToTheBoard()
           
      ;


        })
    })
