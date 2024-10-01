describe("Teste Técnico Ryanair", () => {
  it("Realizar compra das passagens aéreas", () => {      
    //Visitar a página Ryanair
    cy.visit("https://www.ryanair.com/pt/pt")
    
    //No pop-up clicar em "Sim, concordo"
    cy.get('[data-ref="cookie.accept-all"]').click()
    
    //Clicar no campo "Destino" e selecionar a opção "Luxemburgo/Luxemburgo"
    cy.get("input#input-button__destination").click()
    cy.get(':nth-child(5) > :nth-child(3) > .countries__country-inner', { timeout: 10000 }).click()
    cy.get('.list__airports-scrollable-container > .ng-star-inserted > .body-l-lg > span').click()
   
    //Clicar no mês de Novembro, na data de ida: 21/011 e volta 29/11
    cy.get('.datepicker__calendar.ng-star-inserted > calendar-body > :nth-child(5) > :nth-child(10) > .calendar-body__cell').click()
    cy.get(':nth-child(6) > :nth-child(13) > .calendar-body__cell').click()
    cy.get('.passengers__confirm-button').click()    
    //Clicar no botão "Pesquisar"
    cy.get('.flight-search-widget__start-search-cta').click()
    
    //Selecionar os voos de ida e volta
    cy.get('.ng-tns-c997856176-16 > .flight-card-summary__footer > .flight-card-summary__select-btn').click()
    cy.get('.ng-tns-c997856176-12 > .flight-card-summary__footer > .flight-card-summary__select-btn').click()
    
    //Escolher a Tarifa "Basic" e confirmar
    cy.get('[data-e2e="fare-card-standard"] > .fare-table__fare-column-border',{ timeout: 10000 }).click()
    cy.get(':nth-child(2) > fare-table-upgrade-footer > .fare-footer__submit-btn', { timeout: 10000 }).click()
   
    //Clicar em "Iniciar sessão mais tarde"
    cy.get('.login-touchpoint__login-later').click()
    
    //Preencher dados do passageiro e clicar no botão "Continuar"
    cy.get('.dropdown__toggle').click()
    cy.get('[data-ref="title-item-0"] > .dropdown-item__link > .dropdown-item__content > .dropdown-item__label').click()
    cy.get('[data-ref="pax-details__name"]').type('Thierry')
    cy.get('[data-ref="pax-details__surname"]').should('be.visible').type('Castro')
    cy.get('.continue-flow__button').click()

    //Selecionar mala de viagem e clicar no botão "Continuar"
    cy.get('[data-ref="product.small-bag"] > .ng-star-inserted > .product-selector > .product-selector__container > .product-selector__control > .ry-radio-circle-button > .ry-radio-circle-button__label', { timeout: 10000 }).click()
    cy.get('.ry-button--gradient-yellow').click()
    
    //Adicionar lugares recomendados
    cy.get('.passenger-carousel__cta').click()
    
    //Pop-up1 - clicar em "Não, obrigado"
    cy.get('.enhanced-takeover-beta__product-dismiss-cta', { timeout: 10000 }).click()

    //Pop-up2 - clicar em "Não, obrigado"
    cy.get('.enhanced-takeover__product-dismiss-cta', { timeout: 10000 }).click()    

    //Botão "Continuar" no fim da página
    cy.get('.airport-and-flight__cta', { timeout: 30000 }).click()
   
    //Botão "Continuar" no fim da página
    cy.get('.transport__cta').click()
    
    //Assertion na popUp para saber se ela está visível
    cy.get('.kyc-iframe', { timeout: 60000 }).should('exist').and('be.visible')
  })
  
})