///<reference types="cypress-iframe" />

import Page from '../../support/PageObject/automatePage';
import 'cypress-iframe'

describe("Rahul Shetty Automation Practice", function () {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    const pages = new Page()

    //For page verification
    it("Page verify", function () {
        pages.pageVerify_1()
        pages.pageVerify_2()
    })

    //For radio button
    it('Radio Button', function () {
        pages.radioButton().check()
        pages.radioButton().not('[disabled]')
            .check().should('be.checked')
        pages.radioButton()
            .check('radio1').should('be.checked')
        pages.radioButton()
            .check('radio2').should('be.checked')
    })

    //For suggestion dropdown
    it('Suggestion class', function () {
        pages.suggClass_1().type('aus')
        pages.suggClass_2().each(($e1) => {
            cy.log($e1.text())
            if ($e1.text() === "Australia") {
                $e1.click()
            }
        })
        pages.suggClass_1().should("have.value", "Australia")
    })

    //For Dropdown box
    it('Dropdown Example', function () {
        pages.dropDown().select('option1')
            .should('have.value', 'option1')
        pages.dropDown().select('option2')
            .should('have.value', 'option2')
        pages.dropDown().select('option3')
            .should('have.value', 'option3')
    })

    //For Checkbox 
    it('CheckBox Example', function () {
        pages.chkBox_1().check()
            .should('be.checked')
            .and('have.value', 'option1')
        pages.chkBox_1().uncheck()
            .should('not.be.checked')
            .and('have.value', 'option1')

        pages.chkBox_2()
            .check(['option1', 'option3'])
    })

    //For Hide-show element
    it('Element Display Example', function () {
        pages.eleEX_1().should('be.visible')
        pages.eleEX_2().click()
        pages.eleEX_1().should('not.be.visible')
        pages.eleEX_3().click()
        pages.eleEX_1().should('be.visible')
    })

    //For Web Table element
    it('Web Table Example', function () {
        pages.webTable().each(($e1, ind, $li) => {
            //cy.log($e1.text())
            if ($e1.text().includes("WebSecurity Testing")) {
                pages.webTable()
                    .eq(ind)// for getting index
                    .next()// for getting the next child attribute
                    .then(function (cost) {
                        cost.text()
                        expect(cost.text()).to.equal("20")
                    })
            }
        })
    })

    //For Mouse hover
    it('Mouse Hover Example', function () {
        pages.mouseHover().invoke('show')//call jquery method 'show' on the '#mousehover'
        cy.contains("Top").click()
        cy.url().should('include', '#top')

        pages.mouseHover().invoke('show')//call jquery method 'show' on the '#mousehover'
        cy.contains("Reload").click()
        cy.url().should('include', 'AutomationPractice')
    })

    //For iFrame
    it('iFrame Example', function () {
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="contact-us"]')
            .eq(2).click()
        cy.iframe().contains('Send Message')
            .should('be.visible')

        pages.iFrameDetails()
        // cy.iframe().find('input[id = "username"]')
        //     .type('Nihar')
        // cy.iframe().find('input[id = "mobileno"]')
        //     .type('9178504601')
        // cy.iframe().find('input[id = "country"]')
        //     .type('India')
        // cy.iframe().find('input[id = "email"]')
        //     .type('niharranjan1997@gmail.com')
        // cy.iframe().find('select[id = "subject"]')
        //     .select('General Query')
        //     .should('have.value','General Query')
        // cy.iframe().find('textarea[id="message"]')
        //     .type('Just automating this page')

    })
})