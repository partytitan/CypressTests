it('shows title', () => {
  cy.visit('/');
  cy.contains('Tour of Heroes');
});

it('has 4 elements', () => {
  cy.visit('/');
  cy.get('.grid').children('a').should(($a) => {
    expect($a).to.have.length(4)
  });
});