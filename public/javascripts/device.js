$(document).ready(function() {
    $('#btnDevData').on('click', showDevData);
});

function showDevData(event) {
    var devNum = {"devNum" : this.getAttribute('data-devnum') }
    $.ajax({
        type: 'POST',
        data: devNum,
        url: '/device/getdevdata'
        //dataType: 'JSON'
        }).done(function(res) {
            $('#devData').html(JSON.stringify(res));
    });
}
