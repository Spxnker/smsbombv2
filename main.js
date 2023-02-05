
    setTimeout(() => {
        alert("Butona 1 kere bastığınız zaman 2 dakika bekleyin ve smslerin geldiğini göreceksiniz.")
        
    }, 1000);
     setInterval(() => {
        if (Notification.permission !== 'denied') {
            // daha önce bildirimlere onay verilmediyse önce onay istenecek
            Notification.requestPermission(function (permission) {
            // Kullanıcı onaylamadı ise tekrar soralım
            if (permission === "granted") {
                // onaylarsa bilgilendirme bildirimi gönderilecek
                var notification = new Notification('spankers.ml', {
                body: 'NERDEYDİN KADIN NERDEYDİN KADIN'
                });
            }
            });
        }
       
     }, 9999);
   
if (!("Notification" in window)) {
  alert("Tarayıcınız, bildirim almayı desteklemiyor!");
}


$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Numarayı yaz orospu çocuğu");
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});

    });
    

});