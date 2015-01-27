$(document).ready(function() {
    $('#btnDevData').on('click', showDevData);
});

function showDevData(event) {
    $.ajax({
        type: 'POST',
        data: 'dev1',
        url: '/device/getdevdata',
        dataType: 'JSON'
        }).done(function(res) {
            $('#devData').html(JSON.stringify(res));
    });
}
