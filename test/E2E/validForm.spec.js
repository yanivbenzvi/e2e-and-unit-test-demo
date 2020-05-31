context('validation form [validating test',()=>{
    beforeEach(()=>{
        cy.visit('http//localhost:8080')
    })

    it('Show an error message when id is not valid',()=>{
        cy.wait(1000)
        cy.get('input[id=input-19]').type('262616161')
        cy.wait(1000)
        cy.get("#app > div > main > div > div > div > div > div > div.v-card__text > form > div.v-input.v-input--has-state.theme--light.v-text-field.v-text-field--is-booted.error--text > div > div.v-text-field__details > div > div > div")
          .then(function($elem) {
             expect($elem.text()).to.contain("last digit does not fit to id pattern")
          })
    })

    it('Show an error message when ID length dosent contain 9 digit',()=>{
        cy.wait(1000)
        cy.get('input[id=input-19]').type('12345')
        cy.wait(1000)
        cy.get("#app > div > main > div > div > div > div > div > div.v-card__text > form > div.v-input.v-input--has-state.theme--light.v-text-field.v-text-field--is-booted.error--text > div > div.v-text-field__details > div > div > div")
          .then(function($elem) {
              expect($elem.text()).to.contain("Id should contain 9 digit")
          })
    })

    it('not Show an error message when ID contain 9 digit and the last digit is ok',()=>{
        cy.wait(1000)
        cy.get('input[id=input-19]').type('543700421')
        cy.wait(1000)
        cy.get("#app > div > main > div > div > div > div > div > div.v-card__text > form > div.v-input.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--is-booted > div > div.v-text-field__details > div > div")
          .should('be.empty')
    })
})