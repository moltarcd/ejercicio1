describe('Registro de usuario y agregar producto al carrito', () => {
    it('Completa el formulario de registro y agrega una laptop al carrito', () => {
      cy.visit('https://www.demoblaze.com/index.html');
  
      // Encuentra los elementos del formulario y completa los campos necesarios
      cy.get('#signin2').click();
      cy.get('#sign-username').type('legolas');
      cy.get('#sign-password').type('123456');
      cy.get('.modal-footer').contains('Sign up').click();
  
      // Verificar que se muestre el mensaje de éxito
      cy.on('window:alert', (message) => {
        expect(message).to.equal('Sign up successful.');
      });
  
      // Abrir el formulario de inicio de sesión
      cy.get('#login2').click();
    
      // Llenar el formulario de inicio de sesión
      cy.get('#loginusername').type('legolas');
      cy.get('#loginpassword').type('123456');
      cy.get('[onclick="logIn()"]').click();
  
      // Verificar que el inicio de sesión fue exitoso
      cy.get('#nameofuser').should('contain', 'Welcome legolas');

      // Agregar una laptop al carrito
      cy.get('.list-group').contains('Laptops').click();
      cy.contains('Sony vaio i5').click();
      cy.get('.btn-success').click();

      // Verificar que se haya agregado la laptop al carrito
      cy.get('.active > .nav-link').click();
      cy.get('.success').should('contain', 'Sony vaio i5');

      // Cerrar sesión
      cy.get('#logout2').click();
    });
});
