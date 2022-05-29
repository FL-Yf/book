<!--
 * @Author: your name
 * @Date: 2022-05-20 23:01:35
 * @Description: TypeScript
-->

## 简介

+ TypeScript是JavaScript的超集，它对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性
+ TS代码需要通过编译器编译为JS，然后再交由JS解析器执行
+ TS代码可以编译为任意版本的JS代码，可有效解决不同JS运行环境的兼容问题
+ 相较于JS而言，TS拥有了静态类型，更加严格的语法，更强大的功能；TS可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率
+ TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。


## 快速使用

+ 1. 下载安装 Node.js
  + [地址：http://nodejs.cn/](http://nodejs.cn/)

+ 2. 全局安装typeScript
  + npm i -g typescript

+ 3. 创建一个 index.ts 的文件

+ 4. 编译 index.ts 文件
  + 在文件目录终端行执行命令 tsc index.ts


## 类型

|  类型   |       例子        |              描述              |
| :-----: | :---------------: | :----------------------------: |
| number  |    `1, -33, 2.5`    |            任意数字            |
| string  | 'hi', "hi", `hi`  |           任意字符串           |
| boolean |    `true、false`    |       布尔值true或false        |
| 字面量  |      其本身       |  限制变量的值就是该字面量的值  |
|   any   |         *         |            任意类型            |
| unknown |         *         |         类型安全的any          |
|  void   | `空值（undefined）` |     没有值（或undefined）      |
|  never  |      没有值       |          不能是任何值          |
| object  |  `{name:'孙悟空'}`  |          任意的JS对象          |
|  array  |      `[1,2,3]`      |           任意JS数组           |
|  tuple  |       `[4,5]`       | 元素，TS新增类型，固定长度数组 |
|  enum   |    `enum{A, B}`     |       枚举，TS中新增类型       |

### number

```` typescript
let a = 1; // 自动判断数据类型

let b: number = 1; // 声明并赋值

let c: number; // 只声明
c = 1;
````

### string

```` typescript
let a = 'a';

let b: string = 'b';

let c: string;
c = 'c'
````

### boolean

````typescript
let a: boolean = false;
a = true;
````

### 字面量

````typescript
// 指定数据类型
let a: 1 | 2 | 3;
let b: a = 1;
````

### any
 + 表示不做类型限制，关闭了TS的类型检测，不建议使用any类型

::: tip
any 类型的变量可以赋值给任意变量（不安全）
:::

````typescript
let a: any = 1;
a = '1';
a = false;

// 声明不指定类型会自动判断为any
let b;
b = 1;
b = '1';
````


### unknown
+ 表示任意不确定的数据类型

::: tip
unknown 类型的变量不可以赋值给任意变量（安全）
:::

````typescript
let a: unknown;
a = '1';
a = false;

````

### void
 + 表示为空类型

````typescript
// 表示没有返回值的函数
function a(value: string): void {

}

````

### never
 + 表示永远不会返回结果

````typescript
function fn(): never {
  throw new Error('err');
}
````

### object

````typescript
let a: object = {}
let b: {name: string, age?: number};

// [propName: string]: any 表示任意类型的属性
let c: {name: string, [propName: string]: any};
````

### array

````typescript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
````


### tuple
+ 元组就是固定长度的数组

````typescript
let a: [string, number];
a = ['a', 1];
````

### enum

````typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
​
enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;
​
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
````

### 类型断言
 + 有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式

````typescript
// 第一种
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// 第二种
let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;
````

## 类 class

### 基本使用

````typescript
class Person {
  //声明
  name: string;
  age: number;

  // 初始化传参
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  speak() {
    console.error('我叫' + this.name);
  }
}

const person = new Person('小红', 1);
person.speak();
````

### 封装

+ 默认情况下，对象的属性是可以任意的修改的，为了确保数据的安全性，在TS中可以对属性的权限进行设置
  - readonly 如果在声明属性时添加一个readonly，则属性便成了只读属性无法修改
  - public 默认值，可以在类、子类和对象中修改
  - protected ，可以在类、子类中修改
  - private ，可以在类中修改


````typescript
class Person {
  //指定public或者什么都不写，都是是public
  name: string; 
  public age: number;

  // 只读属性
  readonly height: number;

  //--
  protected weight: number;

  //--
  private major: string;


  // 初始化传参
  constructor(name: string, age: number, height: number, weight: number, major: string){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.major = major;
  }

  speak() {
    console.error('我叫' + this.name);
  }
}

class student extend Person {
  constructor(weight: number, major: string) {
    super(weight);
    this.wight = name; // 子类可修改
    this.major = major; // 子类不可修改
  }
}

const person = new Person('小红', 1);
person.name = '大黄'; //可以修改
person.wight = 'xxx'; //不能修改
person.speak();
````

### 存取器 private 
对于一些不希望被任意修改的属性，可以将其设置为private,然后通过存取器setter和getter方法对属性进行存取

````typescript
class Person{
  private _name: string;
​
  constructor(name: string) {
    this._name = name;
  }
​
  get name() {
    return this._name;
  }
​
  set name(name: string) {
    this._name = name;
  }
}
​
const p1 = new Person('橘子');
console.error(p1.name); // 通过getter读取name属性
p1.name = '橙子'; // 通过setter修改name属性
````

### 静态属性 static
静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用

````typescript
class Tools{
    static PI = 3.1415926;
    
    static sum(num1: number, num2: number){
        return num1 + num2
    }
}
​
console.log(Tools.PI);
console.log(Tools.sum(123, 456));
````

### 继承 extends
通过继承可以将其他类中的属性和方法引入到当前类中

````typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  age: number;

   //如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
  constructor(name: string, age: number) {
    super(name); // 调用父类的构造函数
    this.age = age;
  }
  view() {
    console.error(this.name, super.name);
  }
}

const animal = new Animal('animal');
dog.view();
const dog = new dog('dog', 1.5);
dog.view();

````

### 抽象类 abstract
 + 抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例

````typescript
abstract class Animal{
  abstract dog(): void; //抽象方法: 抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现
  animal(){
    console.error('动物');
  }
}
​
class Dog extends Animals{
  dog(){
    console.('狗');
  }
}
````

## 接口

接口主要负责定义一个类的结构，接口可以去限制一个对象的接口，对象只有包含接口中定义的所有属性和方法时才能匹配接口。

:::tip
接口的作用类似于抽象类，不同点在于接口中的所有方法和属性都是没有实值的,可以说接口中的所有方法都是抽象方法
:::

+ 类型检查

````typescript
interface Person{
  name: string;
  sayHello():void;
}
​
function fn(per: Person){
  per.sayHello();
}
​
fn({name:'xxx', sayHello() {console.error(`Hello, ${this.name}`)}});
​````

+ 接口实现 implements

````typescript
// 定义
inteface Person {
  name: string;
  sayHello(): void;
}

// 实现
class Student implements Person{
  constuctor(public name: string) {

  }

  sayHello() {
    console.error(this.name);
  }
}

````


## 泛型
定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定），此时泛型便能够发挥作用。

+ 基本使用
````typescript
// 使用前
function test(arg: any): any{
    return arg;
}

//使用后
function test<T>(arg: T): T{
    return arg;
}
````

:::tip
这里的`<T>`就是泛型，T是我们给这个类型起的名字（不一定非叫T），设置泛型后即可在函数中使用T来表示该类型。所以泛型其实很好理解，就表示某个类型。
:::

````typescript
function test<T>(arg: T): T{
    return arg;
}
// 使用泛型定义的函数
// 方式一：使用时可以直接传递参数使用，类型会由TS自动推断出来，但有时编译器无法自动推断
test(1)

//方式二：也可以在函数后手动指定泛型
test<number>(1);
````

+ 同时指定多个泛型

````typescript
function test<T, K>(a: T, b: K): K{
    return b;
}
​
test<number, string>(10, "hello");
````

+ 类中使用泛型

````typescript
class MyClass<T>{
    prop: T;
​
    constructor(prop: T){
        this.prop = prop;
    }
}
````

+ 接口使用泛型

````typescript
interface MyInter{
    length: number;
}
​
function test<T extends MyInter>(arg: T): number{
    return arg.length;
}
````

## 编译

### 自动编译
+ 单文件自动编译

使用 -w 指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。

``
tsc index.ts -w
``

+ 自动编译整个项目

在项目根目录下创建一个ts的配置文件 tsconfig.json，写入配置项

### 基本配置
tsconfig.json 配置选项

+ include
  - 定义希望被编译文件所在的目录
  - 默认值：["**/*"]

````typescript
// 所有src目录和tests目录下的文件都会被编译
{
  "include":["src/**/*", "tests/**/*"]
}
````

+ exclude
  - 定义需要排除在外的目录
  - 默认值：["node_modules", "bower_components", "jspm_packages"]

````typescript
// src下hello目录下的文件都不会被编译
{
  "exclude": ["./src/hello/**/*"]
}
````

+ extends
  - 定义被继承的配置文件

````typescript
// 当前配置文件中会自动包含config目录下base.json中的所有配置信息
{
  "extends": "./configs/base"
}

````

+ files
  - 指定被编译文件的列表，只有需要编译的文件少时才会用到

````typescript
{
"files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
}
````
### 复杂配置
编译选项是配置文件中非常重要也比较复杂的配置选项 compilerOptions ，在compilerOptions中包含多个子选项，用来完成对编译的配置

+ target 
  - 设置ts代码编译的目标版本
  - 可选值：ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext

````typescript

````
````typescript
{
  'compilerOptions': {
    "target": "ES6"
  }
}
````
+ lib 
  - 指定代码运行时所包含的库（宿主环境）
  - 可选值：ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......

````typescript
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["ES6", "DOM"],
  }
}
````

+ module
  - 设置编译后代码使用的模块化系统
  - 可选值：CommonJS、UMD、AMD、System、ES2020、ESNext、None

````typescript
{
  
  "compilerOptions": {
    "module": "CommonJS"
  }
}
````

+ outDir
  - 编译后文件的所在目录
  - 默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置

````typescript
{
  "compilerOptions": {
    "outDir": "dist",
  }
}
````

+ outFile
  - 将所有的文件编译为一个js文件
  - 默认会将所有的编写在全局作用域中的代码合并为一个js文件，如果module制定了None、System或AMD则会将模块一起合并到文件之中

````typescript
{
  "compilerOptions": {
    "outFile": "dist/app.js",
  }
}
````

+ rootDir
  - 指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录

````typescript
{
  "compilerOptions": {
    "rootDir": "./src",
  }
}
````

+ allowJs
  - 是否对js文件编译

+ checkJs
  - 是否对js文件进行检查

````typescript
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
  }
}
````
+ 严格检查
  + removeComments
    - 是否删除注释
    - 默认值：false

  + noEmit
    - 不对代码进行编译
    - 默认值：false

  + sourceMap
    - 是否生成sourceMap
    - 默认值：false

  + strict
    - 启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查

  + alwaysStrict
    - 总是以严格模式对代码进行编译

  + noImplicitAny
    - 禁止隐式的any类型

  + noImplicitThis
    - 禁止类型不明确的this

  + strictBindCallApply
    - 严格检查bind、call和apply的参数列表

  + strictFunctionTypes
    - 严格检查函数的类型

  + strictNullChecks
    - 严格的空值检查

  + strictPropertyInitialization
    - 严格检查属性是否初始化

+ 额外检查
  + noFallthroughCasesInSwitch
    - 检查switch语句包含正确的break

  + noImplicitReturns
    - 检查函数没有隐式的返回值

  + noUnusedLocals
    - 检查未使用的局部变量

  + noUnusedParameters
    - 检查未使用的参数

+ 高级
  + allowUnreachableCode
    - 检查不可达代码
    - 可选值：true，忽略不可达代码； false，不可达代码将引起错误
  
  + noEmitOnError
    - 有错误的情况下不进行编译
    - 默认值：false


## Webpack 编译
实际开发中我们都需要使用构建工具对代码进行打包，TS同样也可以结合构建工具一起使用

### 基本配置
+ 初始化项目
进入项目根目录，执行命令 `npm init -y` 传教  package.json 文件

+ 下载构建工具
`npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin`
  - webpack: 构建工具webpack
  - webpack-cli: webpack的命令行工具
  - webpack-dev-server: webpack的开发服务器
  - typescript: ts编译器
  - ts-loader: ts加载器，用于在webpack中编译ts文件
  - html-webpack-plugin: webpack中html插件，用来自动创建html文件
  - clean-webpack-plugin: webpack中的清除插件，每次构建都会先清除目录

+ 根目录下创建webpack的配置文件 webpack.config.js

````javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
​
module.exports = {
  optimization:{
    minimize: false // 关闭代码压缩，可选
  },
​
  entry: "./src/index.ts",
  
  devtool: "inline-source-map",
  
  devServer: {
    contentBase: './dist'
  },
​
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
      arrowFunction: false // 关闭webpack的箭头函数，可选
    }
  },
​
  resolve: {
    extensions: [".ts", ".js"]
  },
  
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
            loader: "ts-loader"     
        },
        exclude: /node_modules/
      }
    ]
  },
​
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'TS测试'
    }),
  ]
}

````

+ 根目录下创建tsconfig.json


````json
{
    "compilerOptions": {
        "target": "ES2015",
        "module": "ES2015",
        "strict": true
    }
}
````

+ 修改package.json添加如下配置



````json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve --open chrome.exe"
  },
  ...
}
````

+ 在src下创建ts文件，并在并命令行执行npm run build对代码进行编译，或者执行npm start来启动开发服务器


### Bable
开发中还经常需要结合babel来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中。

+ 安装依赖包 `npm i -D @babel/core @babel/preset-env babel-loader core-js`
  - @babel/core: babel的核心工具
  - @babel/preset-env: babel的预定义环境
  - @babel-loader: babel在webpack中的加载器
  - core-js: core-js用来使老版本的浏览器支持新版ES语法

+ 修改webpack.config.js配置文件

````javascript
{
   ...
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options:{
              presets: [
                [
                  "@babel/preset-env",
                  {
                    "targets":{
                      "chrome": "58",
                      "ie": "11"
                    },
                    "corejs":"3",
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          {
            loader: "ts-loader",
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
  ...
}

````

+ 使用ts编译后的文件将会再次被babel处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的targets中指定要兼容的浏览器版本。