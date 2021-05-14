// /** @constructor */
// Person = function () {
//     this.say = function () {
//         return "I'm an instance.";
//     }
//
//     function say() {
//         return "I'm inner.";
//     }
// }
//
// Person.say = function () {
//     return "I'm static.";
// }
//
// var p = new Person();
// p.say();
// Person.say();

/*
    Person#say  // 名为"say"的实例方法
    Person.say  // 名为"say"的静态方法
    Person~say  // 名为"say"的内部函数
*/

// /** @constructor */
// Person = function () {
//     /** @constructor */
//     this.Idea = function () {
//         this.consider = function () {
//             return "hmmm";
//         }
//     }
// }
//
// var p = new Person();
// var i = new p.Idea();


// 特殊情况： 模块，外部组件和事件
/**
 * A module. Its name is module: foo/bar.
 * @module foo/bar
 */

/** The built in string object. It's name is external: String.
 *  @module foo/bar
 */

/** An event. Its name is module:foo/bar.event:MyEvent.
 * @event module:foo/bar.event:MyEvent
 */

/** @namespace */
var chat = {
    /**
     * Refer to this by {@link chat."#channel"}.
     * @namespace
     */
    "#channel": {
        /**
         * Refer to this by {@link chat."#channel".open}.
         * @type {boolean}
         * @defaultvalue
         */
        open: true,
        /**
         * Internal quotes have to be escaped by backslash. This is
         * {@link chat."#channel"."say-\"hello\""}.
         */
        'say-"hello"': function (msg) {}
    }
};
/**
 * Now we define an event in our {@link chat."#channel"} namespace.
 * @event chat."#channel"."op:announce-motd"
 */

/**
 * Set the shoe's color. Use {@link Shoe#setSize} to set the shoe size.
 *
 * @param {string} color - The shoe's color.
 */
Shoe.prototype.setColor = function(color) {
    // ...
};

/**
 * Set the shoe's color.
 *
 * @param {SHOE_COLORS} color - The shoe color. Must be an enumerated
 * value of {@link SHOE_COLORS}.
 */
Shoe.prototype.setColor = function(color) {
    // ...
};