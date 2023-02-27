/// reference types = "Cypress" />

import { createBoard } from "../page_objects/createBoard";
import { loginPage } from "../page_objects/loginPage";

describe("Create board test",() => {
    before("login to the app",() => {
        cy.intercept({
            method: "GET",
            url: Cypress.env("apiUrl") + "/my-organizations",
        }).as("getOrg")
        cy.visit("/login");
        let orgId;
        loginPage.login(Cypress.env("validEmail"), Cypress.env("validPass"));
        cy.url().should("include", "/my-organizations");
        cy.wait("@getOrg").then((interception) => {
            expect(interception.response.statusCode).eq(200);
            expect(interception.response.body.last_organization_id).eq(orgId)
        })
    })

    it( "create new board",() => {
        cy.url().should("include","/my-organizations")
        createBoard.selectOrganization();
        createBoard.okButton.should("be.visible").and("have.text","OK")
        createBoard.boardTitle.should("be.visible").and("have.text", "Boards")
        cy.contains("OK").click();
    })
})
