describe('Login', () => {

  it('TC-001 - Login válido', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')

  })

  it('TC-002 - Senha inválida', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha_errada')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')

  })

  it('TC-003 - Usuário inválido', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('usuario_fake')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')

  })

  it('TC-004 - Campos vazios', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')

  })

})