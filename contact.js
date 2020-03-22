console.log('contact.js loaded')

$(document).ready(function() {
    $('.submit').click(function(event) {        
        console.log('Clicked')

        var name = $('.name').val()
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()

        var statusElement = $('.status')
        statusElement.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.') && (email.includes(".com") || email.includes(".org") || email.includes(".edu") || email.includes(".gov") || email.includes(".us")) || email.includes(".mil")) {
            console.log('Email is valid')
        } else {
            event.preventDefault()
            console.log('Email is not valid')
        }

        if(subject.length <= 2) {
            event.preventDefault()
            console.log('Subject is not valid')
        }
    })
})