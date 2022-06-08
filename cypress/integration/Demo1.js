/// < reference types="cypress" />

before(function(){
    cy.fixture('example').then(function(data){
        this.data=data
    })

})

it('case1 ',function(){
   
    cy.visit('https://www.kalyanmatrimony.com/online-matrimony-website?utm_source=google&utm_medium=cpc&utm_campaign=Ad_Category&gclid=CjwKCAjwv-GUBhAzEiwASUMm4lvtgXQChhZ8RLvUBGp_gXxqGjsVHXXM1Q3HdNm_SirFxSj-J5y7hxoC47oQAvD_BwE')
    cy.get('.col-md-8 > h4').should('be.visible')
    cy.get('#username').type(this.data.name)
    cy.get('#radio1').click()
    cy.get('#profilecreatedfor').select('Myself')
    cy.get('#mothertongue').select('Tamil')
    cy.get('#religion').select(this.data.religion)
    cy.get('#caste').select('Others')
    cy.get('#mobileNumber').type(this.data.mobno)
    cy.get('#email').type(this.data.email)
    cy.get('#password').type(this.data.psw)
    cy.get('#term').click()
    cy.get('#submitbutton').click()
    cy.wait(4000)
    cy.get('.tooltip-inner').should('contain','e-mail ID Already Exists')

})

