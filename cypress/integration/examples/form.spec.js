describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('localhost:3003/pizza')
    })

    const nameInput = () => cy.get('input[data-test=customerName]')
    const specialInstructionsInput = () => cy.get('input[data-test=specialInstructions]')
    const pepperoniCheck = () => cy.get('input[name=pepperoni]')
    const sausageCheck = () => cy.get('input[name=sausage]')
    const bbqSauce = () => cy.get('input[value=bbq]')
    const size = () => cy.get('select[name=size]')
    const submitBtn = () => cy.get('button[id=order-button]')

    it('can add text', () => {
        nameInput() 
            .should('have.value', '')
            .type('Jenna')
            .should('have.value', 'Jenna')
        specialInstructionsInput()
        .should('have.value', '')
        .type('extra cheese please')
        .should('have.value', 'extra cheese please')
    })

    it('can select multiple toppings', () => {
        pepperoniCheck()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        sausageCheck()
        .should('not.be.checked')
        .check()
        .should('be.checked')
    })

    it('form can be submitted', () => {
        nameInput().type('Jenna')
        size().select('small')
        bbqSauce().check()
        pepperoniCheck().check()
        sausageCheck().check()
        specialInstructionsInput().type('extra cheese please')
        submitBtn().click()
    })

})