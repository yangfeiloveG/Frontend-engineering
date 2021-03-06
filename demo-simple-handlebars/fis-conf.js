//npm install -g fis-parser-handlebars-3.x
fis.match('hbs/*.handlebars', {
    rExt: '.js', // from .handlebars to .js 虽然源文件不需要编译，但是还是要转换为 .js 后缀
    parser: fis.plugin('handlebars-3.x', {
        //fis-parser-handlebars-3.x option
    }),
    release: false // handlebars 源文件不需要编译
});

//npm install -g fis-parser-coffee-script
fis.match('*.coffee', {
    rExt: '.js', // from .handlebars to .js 虽然源文件不需要编译，但是还是要转换为 .js 后缀
    parser: fis.plugin('coffee-script', {
        //fis-parser-handlebars-3.x option
    }),
});

//npm install -g fis-parser-utc
// fis.match('*.coffee', {
//     parser: fis.plugin('utc', {
//         //fis-parser-handlebars-3.x option
//     }),
// });
