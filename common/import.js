document.writeln("    <meta name=\'author\' content=\'xt\'>");
document.writeln("    <meta name=\'keywords\' content>");
document.writeln("    <meta name=\'description\' content>");
document.writeln("    <!-- favicon -->");
document.writeln("    <link rel=\'shortcut icon\' href=\'/img/favicon.ico\'>");
document.writeln("");
document.writeln("    <!-- css -->");
document.writeln("    <link rel=\'stylesheet\' href=\'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css\'>");
document.writeln("    <link rel=\'stylesheet\' href=\'/css/Annie.css\'>");
document.writeln("");
document.writeln("    <!-- jquery -->");
document.writeln("    <script src=\'/js/jquery.min.js\'></script>");
document.writeln("");
document.writeln("    <!-- leancloud -->");
document.writeln("    <script src=\'https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js\'></script>");
document.writeln("    <script src=\'/js/leancloud.js\'></script>");

/**
 * 名言
 */
document.writeln("<script src=\'/plugin/motto/motto.js\'></script>");

/**
 * 页面时间
 */
document.writeln("<script type=\'text/javascript\' src=\'http://widget.time.is/zh.js\'></script>");
document.writeln("<script>");
document.writeln("    time_is_widget.init({");
document.writeln("        Beijing_z43d: {");
document.writeln("            template: \'DATE\',");
document.writeln("            date_format: \'year年 monthname dnum日\'");
document.writeln("        }");
document.writeln("    });");
document.writeln("</script>");

document.writeln("");
document.writeln("<script src=\'/plugin/search/ziploader.js\'></script>");
document.writeln("<script src=\'/plugin/search/search.js\'></script>");
document.writeln("<!-- love effect -->");
document.writeln("<script src=\'/plugin/love/love.js\'></script>");

document.writeln("<script src=\'/plugin/vibrant/vibrant.js\'></script>");
document.writeln("<script src=\'/plugin/chinese/chinese.js\'></script>");
document.writeln("<script src=\'/plugin/imgLazyLoader/yall.min.js\'></script>");
document.writeln("<script src=\'/plugin/imgResize/jquery.resizeimagetoparent.min.js\'></script>");
document.writeln("<script src=\'/plugin/nicescroll/jquery.nicescroll.js\'></script>");
document.writeln("<script src=\'/js/resizediv.js\'></script>");
document.writeln("<script src=\'/js/main.js\'></script>");