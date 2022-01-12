/// <reference types="cypress" />

describe('First Test', () => {
	beforeEach(() => {
		cy.viewport(1980, 1080)
	})

	it('homepage', ()=> {
		cy.visit('https://hackernoon.com/')
		cy.contains('Hackernoon')
		cy.contains('Join HackerNoon')
		cy.contains('The HackerNoon Newsletter')
		cy.contains('Log in').click()
	})

	it('forget password', () => {
		cy.visit('https://hackernoon.com/login?redirect=/')


		cy.url().should('include', 'login').should('exist')
		cy.contains('Log in to HackerNoon').should('exist')
		cy.get("input[placeholder=Email]").should('exist')
		cy.get("input[placeholder=Password]").should('exist')
		cy.contains('Forgot password').should('exist')
		cy.contains('Log in').should('exist')
		cy.contains('I don\'t have a HackerNoon account yet').should('exist')

		// For input fields, `last()` is for login promt
		// For 'Login' button, I am yet to find proper attribute 
		cy.get("input[placeholder=Email]").last().type('7joshikaushal@gmai.com')
		cy.get("input[placeholder=Password]").last().type('1234567890')
		cy.get('.Button-ugfqup-0').click()
	})

	it('new account', () =>{
		cy.url().should('include', 'signup')

		cy.contains('Join HackerNoon').should('exist')
		cy.get("input[placeholder=Email]").should('exist')
		cy.get("input[placeholder=Password]").should('exist')
		cy.contains("Sign me up").should('exist')
		cy.contains("Already have an account?").should('exist')

	})

})