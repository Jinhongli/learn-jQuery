(function(global, factory) {
    if ( typeof module === 'object' && typeof module.exports === 'object' ) {
        // 使用CommonJS或类似语法来加载jQuery模块，需要用module.exports生成
        module.exports = global.document ?
            factory(global, true) :  // 浏览器环境下，不需要绑定jQuery至window
            function(w){            // Node环境下，抛出异常，绑定jQuery至window
                if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
                return factory(w);
            };
    }else{
        // 不使用CommonJS语法加载jQuery，直接绑定jQuery至window
        factory(global);
    }
})(typeof window !== 'undefined' ? window : this, function(window, noGlobal) {
    // 立即传入window或this，以及jQuery定义函数factory

    if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
    }
    return jQuery;
});
