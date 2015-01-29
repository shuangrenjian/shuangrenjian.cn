function header() {
    document.write(
        '<div class="header">\
            <div class="container">\
                <a class="logo" href="/">双神剑鼠标</a>\
                <ul class="navbar">\
                    <li class="item index"><a href="/">首页</a></li>\
                    <li class="item product"><a href="/product.html">产品介绍</a></li>\
                    <li class="item about"><a href="/about.html">关于我们</a></li>\
                    <li class="item contact"><a href="/contact.html">联系我们</a></li>\
                    <li class="item service"><a href="/service.html">售后服务</a></li>\
                </ul>\
            </div>\
        </div>'
    );
}

function sidenav() {
    document.write(
        '<div class="col-aside">\
            <ul>\
                <li class="item product"><a href="/product.html">产品介绍</a></li>\
                <li class="item about"><a href="/about.html">关于我们</a></li>\
                <li class="item contact"><a href="/contact.html">联系我们</a></li>\
                <li class="item service"><a href="/service.html">售后服务</a></li>\
            </ul>\
        </div>'
    )
}

function footer() {
    document.write(
        '<div class="footer">\
            <div class="container">\
                <div class="copyright">\
                    Copyright © 2014 - ' + new Date().getFullYear() + ' <a href="http://www.shuangshenjian.com">shuangshenjian.com</a>. All Rights Reserved\
                </div>\
                <div class="footer-info">\
                    <img src="img/f1.gif" alt=""/>\
                    <img src="img/f2.gif" alt=""/>\
                    <img src="img/f3.png" alt=""/>\
                    <img src="img/f4.png" alt=""/>\
                </div>\
            </div>\
        </div>'
    )
}