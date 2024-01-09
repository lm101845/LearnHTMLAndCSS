/**
 * @Author liming
 * @Date 2023/10/24 11:16
 **/

/** @type {import('tailwindcss').Config} */

/**
 * 上面是一个类型注释，它告诉 TypeScript 编译器这个变量是 import('tailwindcss').Config 类型的。
 *
 * 在具体一点，这个注释告诉 TypeScript 这个变量（或者这个文件）是用来
 * 存储 Tailwind CSS 的配置信息的。
 * Tailwind CSS 是一个高度可定制的 CSS 框架，它使用一个配置文件来确定它的行为。
 * 这个注释就是在表明这个文件或变量是用来存储这个配置信息的。
 *
 * 需要注意的是，这个注释只是类型注释，它不会改变代码的执行。
 * 它只是帮助 TypeScript 编译器更好地理解代码，以便在编译期间进行类型检查和更好的错误提示。
*
 * 对于这个特定的注释，它表明这个文件或变量应该符合 import('tailwindcss').Config 的接口，也就是说，
 * 它应该有一系列的属性，这些属性是 Tailwind CSS 在使用这个配置时所需要的。
 */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
}
