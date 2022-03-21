describe('Add user', () => {
    it('Should add user', () => {
        let email= 'cypresstest11@example.com';
     cy.visit('/');

     login();

     cy.get('.admin').click();

     cy.get('[class*="r__actions-btn-add"]').click();
     cy.get('[class*="r__add-user-action-item"]').click();
     cy.wait(3000);

     cy.get('.r__btn-100').click();
     cy.get('.ReactVirtualized__Grid__innerScrollContainer').contains('Tristate Family Practice').click();
     cy.get('.r__btn-primary').click();
     cy.contains('Tristate Family Practice - Employee Details ').click();
     cy.get('.r__login-email > .form-control').type(email);
     cy.get('.r__first-name > div > .form-control').type('Name')
     cy.get('.r__last-name > div > .form-control').type('name')
     cy.get('.r__add-location-and-roles-container > .r__btn-100').click();
     cy.get('.ReactVirtualized__Grid__innerScrollContainer').contains('Tristate Family Practice').click();
     cy.get('.r__roles-container > .form-group > .likert-radio > :nth-child(1) > :nth-child(1) > .radio-label').click();
     cy.get('.r__user-form-footer > .btn-primary').click();

     cy.get(':nth-child(2) > a > .r__sidebar-line').click();
     cy.get('.r__input-filter').type(`${email} {enter}`);
     cy.wait(3000);
     cy.get('.rt-tr-group > .rt-tr > :nth-child(2)').click();

     cy.get('.kebab-icon').click();
     cy.get('.r__actions > .pull-right > .dropdown-menu > :nth-child(5) > a').click();

     cy.get(':nth-child(1) > .form-group > .form-control').type('HealthicityCM@&test$22');
     cy.get(':nth-child(2) > .form-group > .form-control').type("HealthicityCM@&test$22");
     cy.get(':nth-child(3) > .form-group > .form-control').type("HealthicityCM@&test$22");

     cy.get('.r__form-submit').click();
     cy.get('.user-avatar > img').click();
     cy.get('#user-menus > :nth-child(8) > a').click();
     login(email)

     
    })
})
 
const login=(loginEmail= 'superadmin@example.com',password='HealthicityCM@&test$22')=> {
    cy.get('[id="platform_user_email"]').type(loginEmail);
    cy.get('#platform_user_password').type(password);
    cy.get('.btn').click();
    cy.wait(3000)
}