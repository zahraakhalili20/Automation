// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import * as m from './selectors';
import * as mywebsite from './functions';
let website_url='https://the-internet.herokuapp.com/';
describe('Launching the website', function() {
    beforeEach
    it('checking the add Delete elements', function() {
        mywebsite.launchURL(website_url,'','')
        mywebsite.clickButton(m.ADD_REMOVE_ELEMENTS)
        mywebsite.assertCorrectURL(website_url.concat(m.ADD_REMOVE_URL))
        mywebsite.assertElementVisible(m.ADD_BUTTON)
        mywebsite.clickButton(m.ADD_BUTTON)
        mywebsite.assertElementVisible(m.DELETE_BUTTON)
        mywebsite.clickButton(m.DELETE_BUTTON)
        mywebsite.assertElementNotVisible(m.DELETE_BUTTON)
        cy.go('back')
        
    })

    it('checking the basic auth page', function(){
        mywebsite.launchURL(website_url.concat(m.BASIC_AUTH_URL),'admin','admin')
        mywebsite.assertElementVisible('Basic Auth')

    })

    it('checking the typos page', function(){
        mywebsite.launchURL(website_url.concat(m.TYPO_URL),'','')
        mywebsite.assertElementVisible(m.TYPO_TEXT)

    })

    it('Checking the checkboxes', function(){
        mywebsite.launchURL(website_url.concat(m.CHECKBOXES_URL),'','')
        mywebsite.checkBox('1')
        mywebsite.uncheckBox('2')

    })

    it('Checking the dropdown page', function(){
        mywebsite.launchURL(website_url.concat(m.DROPDOWN_URL),'','')
        mywebsite.selectOption(m.DROPDOWN_OPTIONS.concat('1'))
        mywebsite.selectOption(m.DROPDOWN_OPTIONS.concat('2'))
    
    })
}

)


