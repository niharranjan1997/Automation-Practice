class automatePage {

    //For Page verification
    pageVerify_1() {
        return cy.get("img[class='logoClass']")
    }
    pageVerify_2() {
        return cy.contains("Practice Page").should('be.visible')
    }

    //For Radio button
    radioButton() {
        return cy.get('[type="radio"]')
    }

    //For suggestion dropdown
    suggClass_1() {
        return cy.get('#autocomplete')
    }
    suggClass_2() {
        return cy.get('.ui-menu-item > div')
    }

    //For Dropdown box
    dropDown() {
        return cy.get('#dropdown-class-example')
    }

    //For Checkbox
    chkBox_1() {
        return cy.get('#checkBoxOption1')
    }
    chkBox_2() {
        return cy.get('input[type="checkbox"]')
    }

    //For Hide-show element
    eleEX_1() {
        return cy.get('#displayed-text')
    }
    eleEX_2() {
        return cy.get('#hide-textbox')
    }
    eleEX_3() {
        return cy.get('#show-textbox')
    }

    //For Web Table element
    webTable() {
        return cy.get('table[class= "table-display"] > tbody > tr > td:nth-child(2)')
    }

    //For Mouse hover
    mouseHover() {
        return cy.get('.mouse-hover-content')
    }

    //For iFrame
    iFrameDetails(){
        return cy.iframe().find('form').within(($form)=>{
            cy.get('input').first().type('Nihar')
            cy.get('input').eq(1).type('9178504601')
            cy.get('input').eq(2).type('India')
            cy.get('input').eq(3).type('niharranjan1997@gmail.com')
            cy.get('select[id = "subject"]').select('General Query')
            cy.get('textarea').type('Just automating this page')
            cy.get('button').click()
        })
    }
}
export default automatePage;