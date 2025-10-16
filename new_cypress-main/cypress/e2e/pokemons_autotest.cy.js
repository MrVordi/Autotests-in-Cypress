describe('Проверка покупки аватара', function () {

    it('Автотест для покемонов', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('#k_email').type('USER_LOGIN');
        cy.get('#k_password').type('USER_PASSWORD');
        cy.get('.MuiButton-root').click();
        cy.wait(2000)
        cy.get('.header_card_trainer').click();
        cy.wait(2000)
        cy.get('[data-qa="shop"]').click();
        cy.get('.available > button').first().click(); 
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111111111111111');
        cy.get(':nth-child(1) > .style_1_base_input').type('10/25');
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type("125")
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('german dolnikov')
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.style_1_base_input').type('56456')
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.payment_status_top').contains('Покупка прошла успешно');
    })

})


