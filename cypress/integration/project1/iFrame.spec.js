describe('handling iFrames', function () {
    it('iFrame', function () {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.get('#mce_0_ifr').then(function ($iFrame) {
            const iFrameContent = $iFrame.contents().find('body')

            cy.wrap(iFrameContent)
                .clear()
                .type('Hello')
        })
    })
})