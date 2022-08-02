const url = 'https://swapi.dev/api/planets';

describe('swpai', () => {
  it('get planets', () => {
    cy.request({
      url: url,
    }).then(({ body, status }) => {
      console.log(body, status);
      expect(status).eq(200);
      expect(body.results.length).eq(10);
      const list: any[] = body.results;
      //   body.results."name": "Alderaan", "rotation_period": "24", "orbital_period": "364",
      expect(
        list.some(
          (itm) =>
            itm.name === 'Alderaan' &&
            itm.rotation_period === '24' &&
            itm.orbital_period === '364'
        )
      ).eq(true);
    });
  });
});
