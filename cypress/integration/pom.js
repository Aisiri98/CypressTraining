class Pom{
visit()
{
    cy.visit("https://pg.mithyalabs.com/")
}
fillemail(value)
{
   var val1 = cy.get('.jss228 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
   val1.clear()
   val1.type(value)
   return this
}

fillpsw(value)
{
   var val2 = cy.get('#login-form_8')
   val2.clear()
   val2.type(value)
   return this
}


submit()
{
    const btn=cy.get('.jss211 > .MuiButtonBase-root > .MuiButton-label')
    btn.click()
}

}
export default Pom