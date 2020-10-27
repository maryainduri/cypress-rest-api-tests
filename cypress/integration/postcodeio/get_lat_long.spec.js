describe('Postcode API tests', function () {

    it('should be 200 status code', function () {

        cy.request("/postcodes/IG1 2FJ").as("jsonResponse");

        cy.get('@jsonResponse').should((response) => {

            expect(response.status).to.eq(200)
        })
    });
});