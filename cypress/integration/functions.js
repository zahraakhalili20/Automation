// functions.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
export function launchURL(url,username,password){
    if(username =="" && password == ""){
    cy.visit(url)
    .url().should('eq',url);
    } else {
        cy.visit(url, {
      auth: {
        username: username,
        password: password
      }
    })
    }
    
}
export function clickButton(name){
    cy.contains(name)
    .click()
}
export function assertCorrectURL(url) {
    cy.url().should('eq',url)
}
export function assertElementVisible(element) {
    cy.contains(element)
    .should('be.visible')
   
}
export function assertElementNotVisible(element){
    cy.get(element)
    .should('not.exist')
}
export function checkBox(element){
    cy.get('input')
    .eq(element-1)
    .as('checkbox')
    .check()
    cy.get('@checkbox').should('be.checked')
}
export function uncheckBox(element){
    cy.get('input')
    .eq(element-1)
    .as('checkbox')
    .uncheck()
    cy.get('@checkbox')
    .should('not.be.checked')
}
export function selectOption(option) {
    cy.get('select').select(option)
    .should('have.value',option.match(/\d+/)[0])
}