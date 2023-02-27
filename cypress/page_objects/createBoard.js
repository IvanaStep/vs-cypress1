class CreateBoard{
    
    get organizationSelect(){
        return cy.get(".organization-list-item").eq(-2)
    } 
    get addBoardBtn(){
        return cy.get(".vs-c-my-organization__body")
    }
    get okButton(){
        return cy.get(".vs-c-btn").last()
    }
    get boardTitle(){
        return cy.get(".vs-u-text--center")
    }
    selectOrganization(){
        this.organizationSelect.click()
    }
    boardBtn(){
        this.addBoardBtn.click()
    }
    
}
export const createBoard = new CreateBoard()