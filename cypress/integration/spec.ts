describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Chat Messages');
    cy.get('input').type('Dave ist Super');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it.skip('find_sddc', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://google.de');
    cy.get('#L2AGLb > .QS5gu').click();
    cy.get('.gLFyf').clear();
    cy.get('.gLFyf').type('Super Duper Developers Club{enter}');
    // cy.get('.CqAVzb > center > .gNO89b').click();
    cy.get('[href="https://mobile.twitter.com/sddevclub"]').should(
      'contain',
      'Super Duper Developers Club (@sddevclub) / Twitter'
    );
    /* ==== End Cypress Studio ==== */
  });
});
