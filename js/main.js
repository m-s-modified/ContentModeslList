(function(){require.config({shim:{jquery:{},"jquery.csv":{deps:["jquery"]},"jquery.tablesorter":{deps:["jquery"]},"jquery.tmpl":{deps:["jquery"]}},paths:{jquery:"//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min","jquery.csv":"//cdnjs.cloudflare.com/ajax/libs/jquery-csv/0.71/jquery.csv-0.71.min","jquery.tablesorter":"//cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.13.3/jquery.tablesorter.min","jquery.tmpl":"//ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min"}});require(["jquery",
"jquery.csv","jquery.tmpl","jquery.tablesorter"],function(a){a(function(){a.ajax({url:"./data/content.csv",dataType:"text"}).then(function(b){return a.Deferred(function(c){a.csv.toObjects(b,{},function(a,b){return c.resolve(b)})}).promise()}).done(function(b){a("#tableTmpl").tmpl(b).appendTo("#tagList");a(".table").tablesorter()})})})})();