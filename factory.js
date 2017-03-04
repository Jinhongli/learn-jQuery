function factory(global, noGlobal) {
    // global 为 window 或 this
    "use strict";
    // 缓存常用方法，用以提高性能？
    var arr = [];
    var document = window.document;
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var concat = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};

    function DOMEval(code, doc) {}

    var version = '3.1.1', // 只是说明版本
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g,
        fcamelCase = function(all, letter) {
            return letter.toUpperCase();
        },
        /**
         * jQuery是一个函数，用来生成jQuery对象,该对象是jQuery原型对象上init构造方法的一个实例
         */
        jQuery = function(selector, context) {
            return new jQuery.fn.init(selector, context);
        };
    // 设置jQuery函数的原型对象，设置一些共有属性和方法
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        length: 0,
        toArray: function() {},
        get: function(num) {},
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {},
        each: function(callback) {},
        map: function(callback) {},
        slice: function() {},
        eq: function(i) {},
        first: function() {},
        last: function() {},
        end: function() {},
        // 一些数组的原生方法,仅在内部使用
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    // 深度克隆
    jQuery.extend = jQuery.fn.extend = function(){};

    // 扩展jQuery对象一些属性和方法
    jQuery.extend({
        expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
        isReady: true,
        guid: 1,
        now: Date.now(),
        support: support,
        error: function(msg) {},
        noop: function() {},
        type: function(obj) {},
        isFunction: function(obj) {},
        isArray: Array.isArray,
        isWindow: function(obj) {},
        isNumeric: function(obj) {},
        isPlainObject: function(obj){},
        isEmptyObject: function(obj){},
        globalEval: function(code){},
        camelCase: function(string){},
        nodeName: function(elem, name){},
        each: function(obj, callback){},
        trim: function(text){},
        makeArray: function(arr, results){},
        inArray: function(elem, arr, i){},
        merge: function(first, second){},
        grep: function(elem, callback, invert){},
        map: function(elem, callback, arg){},
        proxy: function(fn, context){}
    });
}
