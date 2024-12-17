Cypress.Commands.add('login', () => {
    cy.request({
      method: "POST",
      url: "/api/login", 
      body: {
        username: Cypress.env("username"), 
        password: Cypress.env("password"), 
      }
    }).then((response) => {
      const token = response.body.token; 
      window.localStorage.setItem('authToken', token); 
    });
  });
  