describe("Teste Técnico Ryanair", () => {
  it("Realizar compra das passagens aéreas", () => {      
    //Visitar a página Ryanair
    cy.visit("https://www.ryanair.com/pt/pt")

    //No pop-up clicar em "Sim, concordo"
    cy.xpath("/html/body/div/div/div[3]/button[3]").click()

    //Clicar no campo "Destino" e selecionar a opção "Luxemburgo/Luxemburgo"
    cy.get("input#input-button__destination").click()
    cy.xpath('//*[@id="ry-tooltip-2"]/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-destination-container/fsw-airports/fsw-countries/div[4]/div[3]/span', { timeout: 10000 }).click()
    cy.xpath('/html/body/ry-tooltip/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-destination-container/fsw-airports/div/fsw-airports-list/div[2]/div[1]/fsw-airport-item/span/span').click()
   
    //Clicar no mês de Setembro, na data de ida: 21/09 e volta 29/09
    cy.xpath('//*[@id="ry-tooltip-11"]/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-flexible-datepicker-container/fsw-datepicker/ry-datepicker-desktop/month-toggle/div/div[2]/div/div[3]/div[2]').click()
    cy.xpath('/html/body/ry-tooltip/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-flexible-datepicker-container/fsw-datepicker/ry-datepicker-desktop/div/calendar[1]/calendar-body/div[5]/div[16]/div').click()
    cy.xpath('/html/body/hp-app-root/hp-home-container/hp-home/hp-search-widget-container/hp-search-widget/div/hp-flight-search-widget-container/fsw-flight-search-widget-container/fsw-flight-search-widget/div/fsw-flight-search-widget-controls-container/fsw-flight-search-widget-content-container/fsw-flight-search-widget-content/div[1]/div[2]/div/fsw-input-button[2]/div/div[2]').click()
    cy.xpath('//*[@id="main-content"]/fsw-flight-search-widget-container/fsw-flight-search-widget/div/fsw-flight-search-widget-controls-container/fsw-flight-search-widget-content-container/fsw-flight-search-widget-content/div[1]/div[2]/div/fsw-input-button[2]/div/div[2]').click()
    cy.xpath('/html/body/ry-tooltip/div[2]/hp-app-controls-tooltips/fsw-controls-tooltips-container/fsw-controls-tooltips/fsw-flexible-datepicker-container/fsw-datepicker/ry-datepicker-desktop/div/calendar[1]/calendar-body/div[6]/div[19]/div').click()

    //Clicar no botão "Pesquisar"
    cy.xpath('/html/body/hp-app-root/hp-home-container/hp-home/hp-search-widget-container/hp-search-widget/div/hp-flight-search-widget-container/fsw-flight-search-widget-container/fsw-flight-search-widget/div/fsw-flight-search-widget-controls-container/fsw-flight-search-widget-content-container/fsw-flight-search-widget-content/div[2]/div[2]/button').click()
    
    //Selecionar os voos de ida e volta
    cy.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/flights-summary-container/flights-summary/div/div[1]/journey-container/journey/flight-list/ry-spinner/div/flight-card-new/div/div/div[4]/flight-card-summary/div[2]/button').click()
    cy.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/flights-summary-container/flights-summary/div/div[2]/journey-container/journey/flight-list/ry-spinner/div/flight-card-new/div/div/div[4]/flight-card-summary/div[2]/button').click()
    
    //Escolher a Tarifa "Basic" e confirmar
    cy.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/fare-selector-container/fare-selector/div/fare-table-new-layout-container/fare-table-new-layout/table/thead/tr/th[2]/div').click()
    cy.xpath('//*[@id="ry-modal-portal"]/div/fare-table-upgrade-container/fare-table-upgrade/ry-dialog/div[2]/table/tfoot/tr/td[2]/fare-table-upgrade-footer/button', { timeout: 10000 }).click()
   
   //Clicar em "Iniciar sessão mais tarde"
    cy.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/flights-passengers/ry-spinner/pax-app-container/pax-app/ry-spinner/ry-login-touchpoint-container/ry-login-touchpoint/div/button/div/span').click()
    
    //Preencher dados do passageiro e clicar no botão "Continuar"
    cy.xpath('//*[@id="title-0-error-message"]/div[2]/button').click()
    cy.xpath('//*[@id="title-0-error-message"]/div[2]/div/div/ry-dropdown-item[1]/button/div/div[1]').click()
    cy.get('[data-ref="pax-details__name"]').should('be.visible').type('Thierry')
    cy.get('[data-ref="pax-details__surname"]').should('be.visible').type('Castro')
    cy.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/ng-component/div/continue-flow-container/continue-flow/div/div/span/button').click()

    //Selecionar mala de viagem e clicar no botão "Continuar"
    cy.xpath('/html/body/bags-root/bags-booking-container/div/main/div/section[1]/div/bags-cabin-lazy-bag/bags-cabin-bag-section/bags-bag-layout/div/div[3]/div[2]/bags-pax-table-journey-container/div/div[2]/bags-cabin-bag-table-controls-container/bags-cabin-bag-table-controls/div[1]/bags-small-bag-pax-control/div/bags-product-selector/div/div/div[1]/ry-radio-circle-button/label', { timeout: 10000 }).click()
    cy.xpath('//*[@id="main-content"]/div/section[4]/bags-continue-flow-container/bags-continue-flow/button').click()
    
    //Adicionar lugares recomendados
    cy.xpath('//*[@id="main-content"]/div[2]/ng-component/seats-container-v2/main/div[2]/div/div/div[2]/div[1]/div[2]/div[3]/div/passenger-carousel/div[2]/button').click()
    
    //Pop-up - clicar em "Não, obrigado"
    cy.xpath('/html/body/seats-root/div/personalization-takeovers/ry-message-renderer[2]/ng-component/ry-enhanced-takeover-beta-desktop/div/div[3]/div[2]/div[1]/button', { timeout: 10000 }).click()

    //Botão "Continuar" no fim da página
    cy.xpath('//*[@id="main-content"]/div/main/div/airport-and-flight-container/button', { timeout: 30000 }).click()
   
    //Botão "Continuar" no fim da página
    cy.xpath('//*[@id="main-content"]/div/main/div/ng-component/button').click()
    
    //Assertion na popUp para saber se ela está visível
    cy.xpath('/html/body/app-root/ry-portal/div/ry-auth-popup-container', { timeout: 60000 }).should('exist').should('be.visible')
  }) 
  
})

 