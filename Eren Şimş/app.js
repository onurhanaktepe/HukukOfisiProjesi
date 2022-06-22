(function () {
    var options = {
        whatsapp: "905333461700",
        call_to_action: "Merhaba, nasıl yardımcı olabilirim?",
        position: "right",
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();


const hamburger = document.querySelector(".menui");

hamburger.addEventListener("click",(e)=>{
    const menu = document.querySelector(".menu-list");
    menu.classList.toggle("show")
    
    
    e.preventDefault()
})