/**
 * @Copyright 2014 Taohai, Inc.
 * @update $Id: slider.js 7805 2014-11-13 02:50:01Z samgui $
 */

(function ($) {
    $.fn.slider = function (options) {

        //defaults
        $.fn.slider.defaults = {
            wrapper: '.banner',
            trigger: '.ui-slider-trigger',//触发点容器
            container: '.ui-slider-container',//内容容器
            btnPrev: '.ui-slider-prev',
            btnNext: '.ui-slider-next',
            current: 'current',//当前触发点以及对应内容节点样式
            event: 'mouseover',//触发点触发事件类型
            auto: 5000,// 是否自动播放
            iAnim: 800,// 动画时间
            btnAnim: 200, // 左右切换按钮动画时间
            offset: ['-45px', '5px'] // 左右切换元素初始化及hover时的偏移
        };

        //options
        var options = $.extend({}, $.fn.slider.defaults, options);

        this.each(function () {
            var $this = $(this),
                $wrapper = $(options.wrapper),
                $trigger = $this.find(options.trigger),
                $triggers = $trigger.find('.item'),
                $container = $this.find(options.container),
                $item = $container.find('.item'),
                $btnPrev = $wrapper.find(options.btnPrev),
                $btnNext = $wrapper.find(options.btnNext),
                len = $triggers.length, //获取焦点图个数
                index = 1,
                curCls = options.current,
                iAnim = options.iAnim,
                btnAnim = options.btnAnim,
                offset = options.offset,
                oTimer;

            init();

            // 初始化
            function init() {
                if (oTimer) {
                    clearInterval(oTimer);
                }

                // 触发点
                $triggers.bind(options.event, function () {
                    var me = $(this);
                    index = $triggers.index(me);
                    run(index);
                });

                // 上一个
                $btnPrev.bind('click', function () {
                    var $el = $trigger.find('.' + curCls);

                    index = $trigger.find('.item').index($el);
                    index--
                    if (index < 0) {
                        index = len - 1;
                    }

                    run(index);
                });

                // 下一个
                $btnNext.bind('click', function () {
                    var $el = $trigger.find('.' + curCls);

                    index = $trigger.find('.item').index($el);
                    index++;
                    if (index >= len) {
                        index = 0;
                    }

                    run(index);
                });

                // 自动播放
                if (options.auto) {
                    auto();

                    $this.hover(function () {
                            if (oTimer) {
                                clearInterval(oTimer);
                            }

                            if (btnAnim) {
                                $btnPrev.stop(true, true).animate({left: offset[1]}, btnAnim);
                                $btnNext.stop(true, true).animate({right: offset[1]}, btnAnim);
                            }
                        }, function () {
                            auto();

                            if (btnAnim) {
                                $btnPrev.stop(true, true).animate({left: offset[0]}, btnAnim);
                                $btnNext.stop(true, true).animate({right: offset[0]}, btnAnim);
                            }
                        }
                    );
                }
            }

            // 播放动画
            function run(index) {
                var img = $item.eq(index).find('img[data-src]');

                img.attr('src', img.data('src')).removeAttr('data-src');
                $wrapper.css({'background-color': '#' + $item.eq(index).data('color')});
                $triggers.removeClass(curCls).eq(index).addClass(curCls);

                $item
                    .stop(true, true)
                    .eq(index)
                    .addClass(curCls)
                    .animate({opacity: 1}, iAnim)
                    .css({'z-index': 1})
                    .siblings()
                    .removeClass(curCls)
                    .animate({opacity: 0}, iAnim)
                    .css({'z-index': 0});
            }

            // 自动播放
            function auto() {
                oTimer = setInterval(function () {
                    index = index >= len ? 0 : index;
                    run(index);
                    index++;
                }, options.auto);
            }
        })
    };
})(jQuery);
