describe('Check contact info', () => {
	it('Open google', () => {
		cy.visit('https://www.google.ru/')
	})
  
    it('Search for Byndyusoft', () => {
		cy.get('form').within(() => {
			cy.get('textarea').type('Byndyusoft{enter}')
		})
	})
	
    it('Open first link', () => {
		cy.get('#search a:first()').invoke('removeAttr', 'target').click()
	})
	
	it('Click order button', () => {
		cy.get('section[class="knowMore"] span').click()
	})
	
	it('Check contacts', () => {		
		cy.get('.popup-callback__content').should(($div) => {
			expect($div.text().trim()).contains("sales@byndyusoft.com");
		});
		cy.get('.popup-callback__content').should(($div) => {
			expect($div.text().trim()).contains("8 800 775-15-21");
		});

	})
})