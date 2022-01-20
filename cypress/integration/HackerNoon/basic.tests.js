/// <reference types='cypress' />

describe('First Test', () => {
	beforeEach(() => {
		cy.viewport(1980, 1080)
	})

	it('homepage', ()=> {
		cy.visit('https://hackernoon.com/')
		cy.url().should('include', 'hackernoon')

		cy.contains('Hackernoon').should('exist')
		cy.contains('The HackerNoon Newsletter').should('exist')
		cy.contains('Log in').should('exist')
		cy.get('input[name=searchvalue]').should('exist')
		cy.contains('Log in').click()
	})
	
	it('login page', () => {
		cy.visit('https://hackernoon.com/login?redirect=/')
		cy.url().should('include', 'login').should('exist')

		cy.contains('Log in to HackerNoon').should('exist')
		cy.get('input[placeholder=Email]').should('exist').wait(6000)
		cy.get('input[placeholder=Password]').should('exist')
		cy.contains('Forgot password').should('exist')
		cy.contains('Log in').should('exist')
		cy.contains('I don\'t have a HackerNoon account yet').should('exist')

		cy.get('.fa-twitter').should('exist')
		cy.get('.fa-github').should('exist')
		cy.get('.fa-google').should('exist')
		cy.get('.fa-facebook').should('exist')
	})

	it('wrong password', () => {
		cy.visit('https://hackernoon.com/login')
		cy.url().should('include', 'login').should('exist')

		// For input fields, use `last()` to select what we want
		cy.get('input[placeholder=Email]').last().type('7joshikaushal@gmai.com').wait(6000)
		cy.get('input[placeholder=Password]').last().type('1234567890')
		cy.contains('button', 'Log in').click()
		cy.contains('There is no user record corresponding to this identifier. The user may have been deleted.').should('exist')
	})

	it('forget password', () => {
		cy.visit('https://hackernoon.com/login')
		cy.url().should('include', 'login').should('exist')
		
		cy.get('input[placeholder=Email]').last().type('7joshikaushal@gmai.com').wait(6000)
		cy.contains('Forgot password').click()
		// API requests are getting called but nothing else.
		// cy.contains('To reset your password, click the link in the email we just sent you.')
	})

	it('signup page', () =>{
		cy.visit('https://hackernoon.com/signup')
		cy.url().should('include', 'signup')

		cy.contains('Join HackerNoon').should('exist')
		cy.get('input[placeholder=Email]').should('exist')
		cy.get('input[placeholder=Password]').should('exist')
		cy.contains('button', 'Sign me up').should('exist')
		cy.contains('Already have an account?').should('exist')

		cy.get('.fa-twitter').should('exist')
		cy.get('.fa-github').should('exist')
		cy.get('.fa-google').should('exist')
		cy.get('.fa-facebook').should('exist')
	})

	it('signing up', () => {
		cy.visit('https://hackernoon.com/signup')
		cy.url().should('include', 'signup')
		// cy.get('.AuthCard__Card-sc-1o0o283-0 > .SignupForm__Layout-sc-1frdyyl-0 > .Form-nn4gmb-0 > :nth-child(1) > div > #email').type('7joshikaushal@gmai.com')
		cy.get('#email').type('7joshikaushal@gmai.com')
		cy.get('input[placeholder=Password]').last().type('1234567890')
		cy.contains('button', 'Sign me up').click({ force: true })
	})

	it('login successful', () => {
		cy.visit('https://hackernoon.com/login')
		cy.url().should('include', 'login')

		cy.get('#email').type('clumsy.editor@hackernoon.com')
		cy.get('input[placeholder=Password]').last().type('clumsyeditor')

	})

})