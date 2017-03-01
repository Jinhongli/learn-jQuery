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
    /**
     * 在页面中插入代码并执行
     * @param {String} code 代码内容
     * @param {Node} doc  document节点
     */
    function DOMEval(code, doc) {
        doc = doc || document; // 默认为全局document
        var script = doc.createElement("script");
        script.text = code; // 写入代码
        doc.head.appendChild(script).parentNode.removeChild(script); // 插入代码并执行
    }

    var version = '3.1.1', // 只是说明版本
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g,
        fcamelCase = function(all, letter) {
            return letter.toUpperCase();
        },
        /**
         * jQuery是一个函数，用来生成jQuery对象,该对象是jQuery原型对象上init构造方法的一个实例
         * @param  {Vary} selector 选择器
         * @param  {Object} context  当前环境
         * @return {Object}          jQuery原型对象init构造函数的实例
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
}
