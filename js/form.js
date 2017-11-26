// console.log('I am in common.js');
// console.log($);



var submitForm = function (ev) {
    ev.preventDefault();

    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action');

 
    var request = $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });
    request.done(function (msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            $('.order-overlay__text').append('<p class="message">' + mes + '</p>');
        } else {
            $('.order-overlay__text').append('<p class="message">' + mes + '</p>');
        }
    });
    request.fail(function (jqXHR, textStatus) {
        alert("Request failed:" + textStatus)
    });
};
$('#order-form').on('submit', submitForm);



