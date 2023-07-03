describe('Registro de usuario y agregar producto al carrito', () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Completa el formulario de registro y agrega una laptop al carrito', () => {
      cy.visit('https://www.demoblaze.com/index.html');
  
      // Encuentra los elementos del formulario y completa los campos necesarios
      cy.get('#signin2').click();
      cy.get('#sign-username').type('coquedama');
      cy.get('#sign-password').type('contra1234');
      cy.get('.modal-footer').contains('Sign up').click();
      cy.wait(1000); // Esperar 1 segundo para que la página se refresque 

      // Verificar que se muestre el mensaje de éxito
      cy.on('window:alert', (message) => {
        expect(message).to.equal('Sign up successful.');
      });

      cy.wait(1000); // Esperar 1 segundo para que la página se refresque 
      
      // Abrir el formulario de inicio de sesión
      cy.get('#login2').click();
    
      // Llenar el formulario de inicio de sesión
      cy.get('#loginusername').type('coquedama');
      cy.get('#loginpassword').type('contra1234');
      cy.get('[onclick="logIn()"]').click();
  
      // Verificar que el inicio de sesión fue exitoso
      cy.get('#nameofuser').should('contain', 'Welcome coquedama');

      // Agregar una laptop al carrito
      //cy.get('a[href="prod.html?idp_=8"]').click();
      cy.contains('Sony vaio i5').click()
      cy.wait(1000); // Esperar 1 segundo para que la página se refresque
      cy.contains('Sony vaio i5').click()
      cy.get('a[onclick="addToCart(8)"]').click();
       //cy.contains('Add to cart').click()

      // Verificar que se haya agregado la laptop al carrito
      cy.get('.active > .nav-link').click();
      cy.get('.success').should('contain', 'Sony vaio i5');

      // Cerrar sesión
      cy.get('#logout2').click();
    });
});
