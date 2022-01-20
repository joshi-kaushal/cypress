/// <reference types='cypress' />


describe('pilot tests', () => {
	beforeEach(() => {
		cy.viewport(1980, 1080)
	})

	it('checks if homepage is in order', () => {
		cy.visit('https://www.hackernoon.com')
		cy.url().should('include', 'hackernoon')

		cy.contains('HackerNoon').should('exist')
		cy.contains('The HackerNoon Newsletter').should('exist')
		cy.contains('Log in').should('exist')
		cy.get('input[name=searchvalue]').should('exist')
		cy.contains('Log in').click()

		cy.url().should('include', 'login')
	})

	it('checks if login page is in order', () => {
		cy.visit('https://hackernoon.com/login')
		cy.url().should('include', 'login')

		cy.contains('Log in to HackerNoon').should('exist')
		cy.contains('Forgot password').should('exist')
		cy.contains('Log in').should('exist')
		cy.contains('I don\'t have a HackerNoon account yet').should('exist')
		cy.get('#email').should('exist')
		cy.get('#password').should('exist')

		cy.get('.fa-twitter').should('exist')
		cy.get('.fa-github').should('exist')
		cy.get('.fa-google').should('exist')
		cy.get('.fa-facebook').should('exist')
	})

	it('login: empty click', () => {
		cy.log('It should prompt an error when login is clicked without entering the credentials.')

		cy.visit('https://hackernoon.com/login')
		cy.url().should('include', 'login')

		cy.contains('button', 'Log in').click()

		cy.contains('An email address is required')
	})

	it('login: email and no password', () => {
		cy.log('It should focus on password field when login is clicked without entering password')

		cy.visit('https://hackernoon.com/login')
		cy.url().should('include', 'login')

		cy.get('#email').type('john.doe@domain.com')
		cy.contains('button', 'Log in').click()

		cy.get('input[placeholder=Password]').should('have.focus')

	})

	it('login: correct email incorrect password', () => {
		// cy.log('It should focus on password field when login is clicked without entering password')

		cy.visit('https://hackernoon.com/login')
		cy.url().should('include', 'login')

		cy.get('#email').type('7joshikaushal@gmail.com')
		cy.get('input[placeholder=Password]').type('gibberish')
		cy.contains('button', 'Log in').click()

		cy.contains('The password is invalid or the user does not have a password.').should('exist')
	})

	it('login: incorrect email incorrect password', () => {
		// cy.log('It should focus on password field when login is clicked without entering password')

		cy.visit('https://hackernoon.com/login')
		cy.url().should('include', 'login')

		cy.get('#email').type('gibberish@domain.com')
		cy.get('input[placeholder=Password]').type('gibberish')
		cy.contains('button', 'Log in').click()

		cy.contains('There is no user record corresponding to this identifier. The user may have been deleted.').should('exist')
	})

	it('forget password: blank', () => {
		// cy.log('It should focus on password field when login is clicked without entering password')

		cy.visit('https://hackernoon.com/login')
		cy.url().should('include', 'login')

		cy.contains('Forgot password').click()
		cy.contains('An email address is required.').should('exist')
	})

	it('forget password: with working email', () => {
		// cy.log('It should focus on password field when login is clicked without entering password')

		cy.visit('https://hackernoon.com/login')
		cy.url().should('include', 'login')

		cy.get('#email').type('clumsy.editor@hackernoon.com')
		cy.contains('Forgot password').click()
		cy.contains('To reset your password, click the link in the email we just sent you.').should('exist')
	})

	it('forget password: wrong email', () => {
		// cy.log('It should focus on password field when login is clicked without entering password')

		cy.visit('https://hackernoon.com/login')
		cy.url().should('include', 'login')

		cy.get('#email').type('adasd@gnaasdas.com')
		cy.contains('Forgot password').click()
		// TODO: CHECK EXPECTED RESULTS
		// cy.contains('The password is invalid or the user does not have a password.')
	})

	it('checks if signup page is in order', () => {
		// cy.log('It should focus on password field when login is clicked without entering password')

		cy.visit('https://hackernoon.com/signup')
		cy.url().should('include', 'signup')

		cy.contains('Join HackerNoon')

		cy.get('.fa-twitter').should('exist')
		cy.get('.fa-github').should('exist')
		cy.get('.fa-google').should('exist')
		cy.get('.fa-facebook').should('exist')

		cy.get('#email').should('exist')
		cy.get('#password').should('exist')
		cy.contains('Sign me up').should('exist')
		cy.contains('Already have an account?').should('exist')
	})

	it('signup: empty fields', () => {
		// cy.log('It should focus on password field when login is clicked without entering password')

		cy.visit('https://hackernoon.com/signup')
		cy.url().should('include', 'signup')

		cy.contains('button', 'Sign me up').click()
		cy.get('input[placeholder=Email]').should('have.focus')
	})

	it('signup: email only', () => {
		// cy.log('It should focus on password field when login is clicked without entering password')

		cy.visit('https://hackernoon.com/signup')
		cy.url().should('include', 'signup')
		cy.get('#email').type('john.doe@domain.com')
		cy.contains('button', 'Sign me up').click()

		cy.get('input[placeholder=Password]').should('have.focus')
	})

	// ! : DO NOT TRY THIS, WILL CREATE AN UNNECESSARY ACCOUNT
	// TODO: Email verification possible?  
	// it.only('wrong email regex', () => {
	// 	// cy.log('It should focus on password field when login is clicked without entering password')

	// 	cy.visit('https://hackernoon.com/signup')
	// 	cy.url().should('include', 'signup')

	// 	cy.get('#email').type('impossible@mail.com')
	// 	cy.get('input[placeholder=Password]').type('impossiblepass	')
	// 	cy.contains('button', 'Sign me up').click()

	// })
})