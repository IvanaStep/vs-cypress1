class DeleteBoard{
    get board(){
        return cy.get(".vs-c-media__body")
    }
 get deleteBtn(){
    return cy.get(".vs-c-btn--warning");
 }
 get modalHeader(){
    return cy.get("h4")
 }
 get passwordInput(){
    return cy.get(".el-input__inner")
 }
 get yesBtn(){
    return cy.get("button").last()
 }
goToTheBoard(){
    this.board.click()
}
}
export const deleteBoard = new DeleteBoard()