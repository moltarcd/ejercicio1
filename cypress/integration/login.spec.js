describe('Registro de usuario', () => {
    it('Completa el formulario de registro', () => {
      cy.visit('https://www.demoblaze.com/index.html');
  
      // Encuentra los elementos del formulario y completa los campos necesarios
      cy.get('#signin2').click();
      cy.get('#sign-username').type('manuelb');
      cy.get('#sign-password').type('123456');
      cy.get('.modal-footer').contains('Sign up').click();
  
      // Verificar que se muestre el mensaje de éxito
      cy.on('window:alert', (message) => {
        expect(message).to.equal('Sign up successful.');
      });
  
            // Abrir el formulario de inicio de sesión
            cy.get('#login2').click();
    
            // Llenar el formulario de inicio de sesión
            cy.get('#loginusername').type('manuelb');
            cy.get('#loginpassword').type('123456');
            cy.get('[onclick="logIn()"]').click();
  
      // Verificar que el inicio de sesión fue exitoso
      cy.get('#nameofuser').should('contain', 'Welcome optimus');
  
        // Cerrar sesión
       cy.get('#logout2').click();
  
       
    });
  });