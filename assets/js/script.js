//no wa admin
$("#noAdmin").val("085870204905");
$('.whatsapp-btn').click(function () {
    $('#whatsapp').toggleClass('toggle');
});
// Onclick Whatsapp Sent!
$('#whatsapp .submit').click(WhatsApp);
$("#whatsapp input, #whatsapp textarea").keypress(function () {
    if (event.which == 13) WhatsApp();
});
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function WhatsApp() {
    var ph = '';
    if ($('#whatsapp .nama').val() == '') { // Cek Nama
        ph = $('#whatsapp .nama').attr('placeholder');
        alert('Silahkan tulis ' + ph);
        $('#whatsapp .nama').focus();
        return false;
    } else if ($('#whatsapp .email').val() == '') { // Cek Whatsapp
        ph = $('#whatsapp .email').attr('placeholder');
        alert('Silahkan tulis ' + ph);
        $('#whatsapp .email').focus();
        return false;
    } else if ($('#whatsapp .subject').val() == '') { // Cek subject
        ph = $('#whatsapp .subject').attr('placeholder');
        alert('Silahkan tulis ' + ph);
        $('#whatsapp .subject').focus();
        return false;
    } else if ($('#whatsapp .pesan').val() == '') { // Cek pesan
        ph = $('#whatsapp .pesan').attr('placeholder');
        alert('Silahkan tulis ' + ph);
        $('#whatsapp .pesan').focus();
        return false;
    } else {
        // Check Device (Mobile/Desktop)
        var url_wa = 'https://web.whatsapp.com/send';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            url_wa = 'whatsapp://send/';
        }
        // Get Value
        var tujuan = $('#whatsapp .tujuan').val(),
            via_url = location.href,
            nama = $('#whatsapp .nama').val(),
            email = $('#whatsapp .email').val(),
            subject = $('#whatsapp .subject').val(),
            pesan = $('#whatsapp .pesan').val();
        $(this).attr('href', url_wa + '?phone=62 ' + tujuan + '&text=Halo Alviyan Rahmad, Perkenalkan.' + '%0A%0ANama Saya : ' + nama + ' %0AEmail : ' + email + '%0ASubject : ' + subject + ' %0APesan : ' + pesan + '%0A%0ATerimakasih.');
        // $(this).attr('href', url_wa + '?phone=62 ' + tujuan + '&text=Nama: ' + nama + ' %0ANo. Whatsapp: ' + nowhatsapp + '%0AAlamat: ' + alamat + ' %0A%0Avia ' + via_url);
        var w = 960,
            h = 540,
            left = Number((screen.width / 2) - (w / 2)),
            tops = Number((screen.height / 2) - (h / 2)),
            popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
        popupWindow.focus();
        return false;
    }
}