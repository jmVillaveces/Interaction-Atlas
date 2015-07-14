var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["Templates"] = this["Templates"] || {};

this["Templates"]["UPprotein"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                <li><a target='_blank' href='http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?name="
    + alias2(alias1(depth0, depth0))
    + "'>"
    + alias2(alias1(depth0, depth0))
    + "</a></li>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return " Name: <i>"
    + this.escapeExpression(((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fullName","hash":{},"data":data}) : helper)))
    + "</i><br> ";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return " Short Name: <i>"
    + this.escapeExpression(((helper = (helper = helpers.shortName || (depth0 != null ? depth0.shortName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"shortName","hash":{},"data":data}) : helper)))
    + "</i> <br> ";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return " Gene: <a href='http://www.ncbi.nlm.nih.gov/gene/?term="
    + alias3(((helper = (helper = helpers.gene || (depth0 != null ? depth0.gene : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"gene","hash":{},"data":data}) : helper)))
    + "' target='_blank'><i>"
    + alias3(((helper = (helper = helpers.gene || (depth0 != null ? depth0.gene : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"gene","hash":{},"data":data}) : helper)))
    + "</i></a> <br> ";
},"9":function(depth0,helpers,partials,data) {
    var helper;

  return " Protein existence: <i>"
    + this.escapeExpression(((helper = (helper = helpers.proteinExistence || (depth0 != null ? depth0.proteinExistence : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"proteinExistence","hash":{},"data":data}) : helper)))
    + "</i> <br> ";
},"11":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "                <div class='panel panel-default'>\n                    <div class='panel-heading' role='tab' id='heading_key'>\n                        <h4 class='panel-title text-capitalize'>\n                            <a class='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapse_key' aria-expanded='false' aria-controls='collapse_key'>\n                                Keywords\n                                <span class='badge pull-right'>"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.keyword : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span>\n                            </a>\n                        </h4>\n                    </div>\n                    <div id='collapse_key' class='panel-collapse collapse' role='tabpanel' aria-labelledby='heading_key'>\n                        <p style='margin-left: 5px;'>"
    + alias1(((helper = (helper = helpers.keyword || (depth0 != null ? depth0.keyword : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"keyword","hash":{},"data":data}) : helper)))
    + "</p>\n                    </div>\n                </div>\n";
},"13":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class='panel panel-default'>\n                    <div class='panel-heading' role='tab' id='heading_GO'>\n                        <h4 class='panel-title text-capitalize'>\n                            <a class='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapse_GO' aria-expanded='false' aria-controls='collapse_GO'>\n                                Gene Ontology\n                                <span class='badge pull-right'>"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.GO : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span>\n                            </a>\n                        </h4>\n                    </div>\n                    <div id='collapse_GO' class='panel-collapse collapse' role='tabpanel' aria-labelledby='heading_key'>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.GO : depth0),{"name":"each","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n";
},"14":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                            <h5 style='margin-left: 5px;'>"
    + alias3(((helper = (helper = helpers.term || (depth0 != null ? depth0.term : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"term","hash":{},"data":data}) : helper)))
    + " <small>"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "</small></h5>\n";
},"16":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <div class='panel panel-default'>\n                    <div class='panel-heading' role='tab' id='heading"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "'>\n                        <h4 class='panel-title text-capitalize'>\n                            <a class='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapse"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "' aria-expanded='false' aria-controls='collapse"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "'>\n                                "
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + " <span class='badge pull-right'>"
    + alias3(this.lambda((depth0 != null ? depth0.length : depth0), depth0))
    + "</span>\n                            </a>\n                        </h4>\n                    </div>\n                    <div id='collapse"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "' class='panel-collapse collapse' role='tabpanel' aria-labelledby='heading"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "'>\n                        <div class='panel-body'>\n                            <ul>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                            </ul>\n                        </div>\n                    </div>\n                </div>\n";
},"17":function(depth0,helpers,partials,data) {
    return "                                <li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"19":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <li>\n                    <address>\n                    <a href='http://www.ncbi.nlm.nih.gov/pubmed/?term="
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "' target='_blank'>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a><br>\n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),"!=","",{"name":"compare","hash":{},"fn":this.program(20, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.db : depth0),"typeof","string",{"name":"compare","hash":{},"fn":this.program(22, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    "
    + alias3(((helper = (helper = helpers.authors || (depth0 != null ? depth0.authors : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"authors","hash":{},"data":data}) : helper)))
    + "<br>\n                    </address>\n                </li>\n";
},"20":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <i>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</i> "
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.volume || (depth0 != null ? depth0.volume : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"volume","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.first || (depth0 != null ? depth0.first : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.last || (depth0 != null ? depth0.last : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last","hash":{},"data":data}) : helper)))
    + "<br>\n";
},"22":function(depth0,helpers,partials,data) {
    var helper;

  return "                    <i>"
    + this.escapeExpression(((helper = (helper = helpers.db || (depth0 != null ? depth0.db : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"db","hash":{},"data":data}) : helper)))
    + "</i><br>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "<div role='tabpanel'>\n    <!-- Nav tabs -->\n    <ul class='nav nav-tabs' role='tablist'>\n        <li role='presentation' class='active'><a href='#info' aria-controls='info' role='tab' data-toggle='tab'><span class='glyphicon glyphicon-info-sign'></span> Info</a></li>\n        <li role='presentation'><a href='#sequence' aria-controls='sequence' role='tab' data-toggle='tab'><span class='glyphicon glyphicon-align-center'></span> Sequence</a></li>\n        <li role='presentation'><a href='#reference' aria-controls='reference' role='tab' data-toggle='tab'><span class='glyphicon glyphicon-file'></span> Reference</a></li>\n    </ul>\n\n    <!-- Tab panes -->\n    <div class='tab-content'>\n        <div role='tabpanel' class='tab-pane active' id='info'>\n            \n            <ol class='breadcrumb' style='font-size:12px'>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.lineage : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </ol>\n            \n            <br>\n            "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.fullName : depth0)) != null ? stack1.length : stack1),">",0,{"name":"compare","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " \n            "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.shortName : depth0)) != null ? stack1.length : stack1),">",0,{"name":"compare","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.gene : depth0)) != null ? stack1.length : stack1),">",0,{"name":"compare","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.proteinExistence : depth0)) != null ? stack1.length : stack1),">",0,{"name":"compare","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            <br>\n            <div class='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>\n                \n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.keyword : depth0)) != null ? stack1.length : stack1),">",0,{"name":"compare","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                \n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.GO : depth0)) != null ? stack1.length : stack1),">",0,{"name":"compare","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.comment : depth0),{"name":"each","hash":{},"fn":this.program(16, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div role='tabpanel' class='tab-pane' id='sequence'></div>\n        <div role='tabpanel' class='tab-pane' id='reference'>\n            <br>\n            <ol>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.reference : depth0),{"name":"each","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </ol>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["Templates"]["attributeSetter"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    return " <option value=\"transform\">Transform</option> ";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"form-group row\">                        \n            <label class=\"col-md-2\">Min</label>\n            <div class=\"col-md-4\">\n                <input name=\"min\" class=\"form-control "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.attributes : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">                        \n            <label class=\"col-md-2\">Max</label>\n            <div class=\"col-md-4\">\n                <input name=\"max\" class=\"form-control "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.attributes : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n            </div>\n        </div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "minicolors-input";
},"8":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,depth0,"!==","",{"name":"compare","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "=\""
    + alias1(this.lambda(depth0, depth0))
    + "\" ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"form-group row\">                        \n    <label class=\"col-md-2\">Attribute</label>\n    <div class=\"col-md-4\">\n        <select class=\"form-control\" name=\"attrs\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.properties : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\n    </div>\n</div>\n\n<div class=\"form-group row\">                        \n    <label class=\"col-md-2\">Mapping type</label>\n    <div class=\"col-md-4\">\n        <select class=\"form-control\" name=\"mappings\">\n            <option value=\"direct\">Direct</option>\n            "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.transform : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            <option value=\"discrete\">Discrete</option>\n        </select>\n    </div>\n</div>\n\n<div class=\"log row\" style=\"display:none\"><p class=\"alert alert-danger col-md-6 col-md-offset-2\" role=\"alert\">Can't apply transform to selected attribute.</p></div>\n\n<div class=\"transform\" style=\"display:none\">\n    \n    <div class=\"row\">\n        <p class=\"alert alert-warning col-md-6 col-md-offset-2\" role=\"alert\">\n            <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span> Transform mappings are applied to the whole network!\n        </p>\n    </div>\n    \n"
    + ((stack1 = helpers['with'].call(depth0,(depth0 != null ? depth0.control : depth0),{"name":"with","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n<div class=\"row\">\n    <div id=\"discrete\" style=\"display:none\" class=\"col-md-offset-2 col-md-8\"></div>\n</div>";
},"useData":true});

this["Templates"]["breadthfirst"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>breadthfirst</mark> layout puts nodes in a hierarchy, based on a breadthfirst traversal of the graph.</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n    <input name=\"avoidOverlap\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Prevents node overlap\">\n        <input name=\"avoidOverlap\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Avoid Overlap\n    </label>\n    <input name=\"circle\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Put depths in concentric circles if true, put depths top down if false\">\n        <input name=\"circle\" type=\"checkbox\" value=\"true\"> Circle\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>";
},"useData":true});

this["Templates"]["circle"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>circle</mark> layout positions nodes in a circle.</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n    <input name=\"avoidOverlap\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Prevents node overlap\">\n        <input name=\"avoidOverlap\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Avoid Overlap\n    </label>\n    <input name=\"counterclockwise\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether the layout should go counterclockwise\">\n        <input name=\"counterclockwise\" type=\"checkbox\" value=\"true\"> Counterclockwise\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>";
},"useData":true});

this["Templates"]["cola"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>cola</mark> layout uses a force-directed physics simulation</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n    <input name=\"avoidOverlap\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Prevents node overlap\">\n        <input name=\"avoidOverlap\" type=\"checkbox\" value=\"true\"> Avoid Overlap\n    </label>\n    <input name=\"randomize\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Use random node positions at beginning of layout\">\n        <input name=\"randomize\" type=\"checkbox\" value=\"true\"> Randomize\n    </label>\n    <input name=\"handleDisconnected\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Avoids disconnected components from overlapping\">\n        <input name=\"handleDisconnected\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Handle Disconnected\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>";
},"useData":true});

this["Templates"]["concentric"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>concentric</mark> layout positions nodes in concentric circles segregating the nodes into levels based on <mark>node degree</mark>.</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n    <input name=\"avoidOverlap\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Prevents node overlap\">\n        <input name=\"avoidOverlap\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Avoid Overlap\n    </label>\n    <input name=\"counterclockwise\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether the layout should go counterclockwise\">\n        <input name=\"counterclockwise\" type=\"checkbox\" value=\"true\"> Counterclockwise\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>";
},"useData":true});

this["Templates"]["cose"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>cose (Compound Spring Embedder)</mark> layout uses a force-directed simulation to lay out compound graphs.</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"nodeRepulsion\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Node repulsion (non overlapping) multiplier\">Node Repulsion</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"nodeRepulsion\" id=\"nodeRepulsion\" value=\"400000\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"nodeOverlap\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Node repulsion (overlapping) multiplier\">Node Overlap</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"nodeOverlap\" id=\"nodeOverlap\" value=\"10\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"idealEdgeLength\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Ideal edge (non nested) length\">Ideal Edge Length</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"idealEdgeLength\" id=\"idealEdgeLength\" value=\"10\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"edgeElasticity\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Divisor to compute edge forces\">Edge Elasticity</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"edgeElasticity\" id=\"edgeElasticity\" value=\"100\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"nestingFactor\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Nesting factor (multiplier) to compute ideal edge length for nested edges\">Nesting Factor</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"nestingFactor\" id=\"nestingFactor\" value=\"10\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"gravity\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Gravity force (constant)\">Gravity</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"gravity\" id=\"gravity\" value=\"250\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"initialTemp\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Initial temperature (maximum node displacement)\">Initial Temp</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"initialTemp\" id=\"initialTemp\" value=\"200\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"coolingFactor\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Cooling factor (how the temperature is reduced between consecutive iterations)\">Cooling factor</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"coolingFactor\" id=\"coolingFactor\" value=\"0.95\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"minTemp\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lower temperature threshold (below this point the layout will end)\">Min Temp</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"minTemp\" id=\"minTemp\" value=\"1.0\">\n    </div>\n</div>";
},"useData":true});

this["Templates"]["dialog"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "<span class='glyphicon "
    + this.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + "'></span>";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return " - <small style='color:#fff'>"
    + this.escapeExpression(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</small> ";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <button id=\""
    + alias3(((helper = (helper = helpers.okBtnId || (depth0 != null ? depth0.okBtnId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"okBtnId","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.loading : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " type='button' class='btn btn-info'>"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.okBtnIcon : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + alias3(((helper = (helper = helpers.okBtn || (depth0 != null ? depth0.okBtn : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"okBtn","hash":{},"data":data}) : helper)))
    + "</button>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper;

  return " data-loading-text=\""
    + this.escapeExpression(((helper = (helper = helpers.loading || (depth0 != null ? depth0.loading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"loading","hash":{},"data":data}) : helper)))
    + "\" ";
},"8":function(depth0,helpers,partials,data) {
    var helper;

  return "<span class='glyphicon "
    + this.escapeExpression(((helper = (helper = helpers.okBtnIcon || (depth0 != null ? depth0.okBtnIcon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"okBtnIcon","hash":{},"data":data}) : helper)))
    + "'></span> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class='modal fade' id='"
    + alias3(((helper = (helper = helpers.dialId || (depth0 != null ? depth0.dialId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dialId","hash":{},"data":data}) : helper)))
    + "' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>\n    <div class='modal-dialog modal-lg'>\n        <div class='modal-content'>\n            <div class='modal-header' style='background:#5bc0de'>\n                <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>\n                <h4 style='color:#fff' class='modal-title'>"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.icon : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<strong> "
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</strong> "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</h4>\n            </div>\n            <div class='modal-body'>\n                <center>\n                    <br>\n                    <p><img width = \"32px\" height = \"32px\" src = 'loading.gif'></p>\n                </center>\n            </div>\n            <div class='modal-footer'>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.okBtn : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["Templates"]["discreteTable"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "            <tr>\n                <td>"
    + this.escapeExpression(this.lambda(blockParams[0][0], depth0))
    + "</td>\n                <td>\n"
    + ((stack1 = helpers['with'].call(depth0,(depths[1] != null ? depths[1].control : depths[1]),{"name":"with","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                </td>\n            </tr>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.tag : depth0),"===","SELECT",{"name":"compare","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                        \n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.tag : depth0),"===","INPUT",{"name":"compare","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "                            <select class=\"form-control\" name=\"mappings\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.attributes : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                            </select>\n";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "                                    <option value=\""
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias1(this.lambda(depth0, depth0))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "                            <input name=\""
    + this.escapeExpression(this.lambda(blockParams[2][0], depth0))
    + "\" class=\"form-control "
    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].color : depths[1]),{"name":"if","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.attributes : depth0),{"name":"each","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ">\n";
},"7":function(depth0,helpers,partials,data) {
    return "minicolors-input";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,depth0,"!==","",{"name":"compare","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"10":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "=\""
    + alias1(this.lambda(depth0, depth0))
    + "\" ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "<table class=\"table table-bordered table-striped\">\n        <thead>\n            <tr>\n                <th>"
    + this.escapeExpression(((helper = (helper = helpers.property || (depth0 != null ? depth0.property : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"property","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</th>\n                <th>Value</th>\n            </tr>\n        </thead>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 2, blockParams, depths),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    </table>";
},"useData":true,"useDepths":true,"useBlockParams":true});

this["Templates"]["grid"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>grid</mark> layout puts nodes in a well-spaced grid.</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n    <input name=\"avoidOverlap\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Prevents node overlap\">\n        <input name=\"avoidOverlap\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Avoid Overlap\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"rows\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Force number of rows in the grid\">Rows</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"rows\" id=\"rows\"  min=\"1\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"cols\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Force number of columns in the grid\">Columns</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"cols\" id=\"cols\"  min=\"1\">\n    </div>\n</div>";
},"useData":true});

this["Templates"]["import"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <option value=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    return "                \n                <div class=\"form-group\">\n                    <label>Nodes</label>\n                    <input type=\"file\" accept=\"text/plain,text/csv\" id=\"nodes\" name=\"nodes\">\n                </div>\n                <blockquote id=\"algoquote\" class=\"form-group col-xs-12\">\n                    <footer>File containing node <mark>ids</mark> and attributes</footer>\n                </blockquote>\n                \n                <div class=\"form-group\">\n                    <label>Interactions</label>\n                    <input type=\"file\" accept=\"text/plain,text/csv\" id=\"interactions\" name=\"interactions\">\n                </div>\n                <blockquote id=\"algoquote\" class=\"form-group col-xs-12\">\n                    <footer>File containing link <mark>source, target</mark> attributes.</footer>\n                </blockquote>\n            \n";
},"5":function(depth0,helpers,partials,data) {
    return "                <h1 class=\"text-danger\"> Sorry, the File APIs are not fully supported in this browser.</h1>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div role=\"tabpanel\">\n    \n    \n    <!-- Nav tabs -->\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li role=\"presentation\" class=\"active\"><a href=\"#"
    + alias3(((helper = (helper = helpers.dbId || (depth0 != null ? depth0.dbId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dbId","hash":{},"data":data}) : helper)))
    + "\" aria-controls=\""
    + alias3(((helper = (helper = helpers.dbId || (depth0 != null ? depth0.dbId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dbId","hash":{},"data":data}) : helper)))
    + "\" role=\"tab\" data-toggle=\"tab\">From Database</a></li>\n        <li role=\"presentation\"><a href=\"#"
    + alias3(((helper = (helper = helpers.fileId || (depth0 != null ? depth0.fileId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fileId","hash":{},"data":data}) : helper)))
    + "\" aria-controls=\""
    + alias3(((helper = (helper = helpers.fileId || (depth0 != null ? depth0.fileId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fileId","hash":{},"data":data}) : helper)))
    + "\" role=\"tab\" data-toggle=\"tab\">From File</a></li>\n    </ul>\n\n    \n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n        \n        <div role=\"tabpanel\" class=\"tab-pane active\" id=\""
    + alias3(((helper = (helper = helpers.dbId || (depth0 != null ? depth0.dbId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dbId","hash":{},"data":data}) : helper)))
    + "\">\n        \n            <div class=\"form-group\">\n                <label>Database</label>\n                <select class=\"form-control\" name=\"db\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.servers : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-5\">\n\n                    <div class=\"form-group\">\n                        <label>Query Type</label><br>\n                        <label class=\"radio-inline\">\n                            <input type=\"radio\" name=\"queryType\" value=\"ids\" checked>Ids list\n                        </label>\n                        <label class=\"radio-inline\">\n                            <input type=\"radio\" name=\"queryType\" value=\"query\">Query\n                        </label>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <label>Organism</label>\n                        <select class=\"form-control\" name=\"org\" multiple>\n                            <option  value=\"\" selected>All</option>\n                            <option  value=\"9606\">Homo sapiens</option>\n                            <option  value=\"10090\">Mus musculus</option>\n                            <option  value=\"10116\">Rattus norvegicus</option>\n                            <option  value=\"9913\">Bos taurus</option>\n                            <option  value=\"9031\">Gallus gallus</option>\n                            <option  value=\"9823\">Sus scrofa</option>\n                            <option  value=\"9615\">Canis familiaris</option>\n                            <option  value=\"7227\">Drosophila melanogaster</option>\n                            <option  value=\"6239\">Caenorhabditis elegans</option>\n                            <option  value=\"4932\">Saccharomyces cerevisiae</option>\n                            <option  value=\"7955\">Danio rerio</option>\n                            <option  value=\"4896\">Schizosaccharomyces pombe</option>\n                            <option  value=\"592\">Escherichia coli</option>\n                            <option  value=\"11676\">Human immunodeficiency virus 1</option>\n                            <option  value=\"11320\">Influenza A virus</option>\n                            <option  value=\"1491\">Clostridium botulinum</option>\n                            <option  value=\"3702\">Arabidopsis thaliana</option>\n                            <option  value=\"5833\">Plasmodium falciparum</option>\n                            <option  value=\"44689\">Dictyostelium discoideum</option>\n                            <option  value=\"1773\">Mycobacterium tuberculosis</option>\n                            <option  value=\"491\">Neisseria meningitidis serogroup B</option>\n                            <option  value=\"813\">Chlamydia trachomatis</option>\n                            <option  value=\"4530\">Oryza sativa</option>\n                            <option  value=\"5811\">Toxoplasma gondii</option>\n                            <option  value=\"8364\">Xenopus tropicalis</option>\n                            <option  value=\"90371\">Salmonella typhimurium</option>\n                            <option  value=\"59729\">Taeniopygia guttata</option>\n                            <option  value=\"158879\">Staphylococcus aureus N315</option>\n                        </select>\n                    </div>\n\n                </div>\n                <div class=\"col-md-7\">\n                    <a href=\"#\" id=\""
    + alias3(((helper = (helper = helpers.exampleId || (depth0 != null ? depth0.exampleId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"exampleId","hash":{},"data":data}) : helper)))
    + "\">Example</a><br>\n                    <textarea class=\"form-control\" name=\"query\" placeholder=\"Comma separated list of identifiers\"></textarea>\n                </div>\n            </div>\n\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\""
    + alias3(((helper = (helper = helpers.fileId || (depth0 != null ? depth0.fileId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fileId","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isFileSupported : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n        \n        <div class=\"row\">\n            <div id=\""
    + alias3(((helper = (helper = helpers.logId || (depth0 != null ? depth0.logId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"logId","hash":{},"data":data}) : helper)))
    + "\" class=\"col-md-10\"></div>\n        </div>\n    </div>\n    \n</div>";
},"useData":true});

this["Templates"]["layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return " <form id = "
    + alias3(((helper = (helper = helpers.formId || (depth0 != null ? depth0.formId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"formId","hash":{},"data":data}) : helper)))
    + ">\r\n    <div class=\"form-group\">\r\n\r\n        <br>\r\n        <select class=\"form-control\" name=\"name\">\r\n            <option value=\"breadthfirst\">Breadthfirst</option>\r\n            <option value=\"circle\">Circle</option>\r\n            <option value=\"cola\">Cola</option>\r\n            <option value=\"concentric\" selected>Concentric</option>\r\n            <option value=\"cose\">Cose</option>\r\n            <option value=\"grid\">Grid</option>\r\n            <option value=\"random\">Random</option>\r\n            <option value=\"springy\">Springy</option>\r\n        </select>\r\n    </div>\r\n    <div id=\""
    + alias3(((helper = (helper = helpers.layoutOptsId || (depth0 != null ? depth0.layoutOptsId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"layoutOptsId","hash":{},"data":data}) : helper)))
    + "\"><br><br><br><br></div>\r\n</form>\r\n     ";
},"useData":true});

this["Templates"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"navbar\"></div>\n<div id=\"network\" style=\"width: 100%; height: 100%;\"></div>\n<div id=\"sidemenu\" class=\"side_container\"></div>\n<div id=\"logger\"></div>\n<div id=\"dialog\"></div>\n<div id=\"attr_dialog\"></div>\n";
},"useData":true});

this["Templates"]["navbar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Protein Interaction Atlas\" href=\"#\"><img class=\"rotate\" src=\"favicon.ico\"> iAtlas</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n              <!--<li class=\"active\"><a href=\"#\">Home</a></li>-->\n              <li><a href=\"#\" id=\""
    + alias3(((helper = (helper = helpers.importId || (depth0 != null ? depth0.importId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"importId","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Import Network from database\"><span class=\"glyphicon glyphicon-import\" aria-hidden=\"true\"></span> Import Network</a></li>\n              <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Layout <span class=\"caret\"></span></a>\n                <ul id="
    + alias3(((helper = (helper = helpers.layoutId || (depth0 != null ? depth0.layoutId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"layoutId","hash":{},"data":data}) : helper)))
    + " class=\"dropdown-menu\" role=\"menu\">\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Puts nodes in a hierarchy, based on a breadthfirst traversal of the graph.\" href=\"breadthfirst\">Breadthfirst <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Positions nodes in a circle\" href=\"circle\">Circle <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Force-directed physics simulation\" href=\"cola\">Cola <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Positions nodes in concentric circles creating levels based on node degree\" href=\"concentric\">Concentric <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Force-directed physics simulation\" href=\"cose\">Cose <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Positions nodes in a Grid\" href=\"grid\">Grid <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Positions nodes randomly\" href=\"random\">Random <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Force-directed physics simulation\" href=\"springy\">Springy <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li class=\"divider\"></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Advanced layout options\" href=\"#\">Advanced</a></li>\n                </ul>\n              </li>\n            </ul>\n            <form class=\"navbar-form navbar-left\" role=\"search\">\n                \n                <div class=\"input-group\">\n                    <div class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Attribute <span class=\"caret\"></span></button>\n                        <ul id=\""
    + alias3(((helper = (helper = helpers.attrListId || (depth0 != null ? depth0.attrListId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"attrListId","hash":{},"data":data}) : helper)))
    + "\" class=\"dropdown-menu\" role=\"menu\"></ul>\n                    </div>\n                    <input type=\"text\" id=\""
    + alias3(((helper = (helper = helpers.findId || (depth0 != null ? depth0.findId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"findId","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" placeholder=\"Search\">\n                </div>\n                \n                <div class=\"form-group btn-group\" data-toggle=\"buttons\">\n                    <label class=\"btn btn-default active\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Move\">\n                        <input type=\"radio\" name=\"move\" value=\"move\" autocomplete=\"off\" checked> <span class=\"glyphicon glyphicon-move\"></span>\n                    </label>\n                    <label class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Select\">\n                        <input type=\"radio\" name=\"move\" value=\"select\" autocomplete=\"off\"> <span class=\"glyphicon glyphicon-screenshot\"></span>\n                    </label>\n                </div>\n            </form>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a id=\""
    + alias3(((helper = (helper = helpers.saveId || (depth0 != null ? depth0.saveId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"saveId","hash":{},"data":data}) : helper)))
    + "\" href=\"#save\"><span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Save\" ></span></a></li>\n                <li><a id=\""
    + alias3(((helper = (helper = helpers.pathwayId || (depth0 != null ? depth0.pathwayId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"pathwayId","hash":{},"data":data}) : helper)))
    + "\" href=\"#\"><span class=\"glyphicon glyphicon-th-list\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Pathway Analysis\" ></span></a></li>\n                <li><a id=\""
    + alias3(((helper = (helper = helpers.settingsId || (depth0 != null ? depth0.settingsId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"settingsId","hash":{},"data":data}) : helper)))
    + "\" href=\"#\"><span class=\"glyphicon glyphicon-transfer\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Settings\" ></span></a></li>\n            </ul>\n        </div><!--/.nav-collapse -->\n    </div>\n</nav>";
},"useData":true});

this["Templates"]["network"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div>\n"
    + ((stack1 = this.invokePartial(partials.navbar,depth0,{"name":"navbar","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    <!--<div id='dialog'></div>\n    <div>\n        <svg id='network' style='background-size: contain'></svg>\n    </div>-->\n</div>";
},"usePartial":true,"useData":true});

this["Templates"]["pathway"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "            <tr>\n                <td><span class='badge pull-right'> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.entities : depth0)) != null ? stack1.found : stack1), depth0))
    + " / "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.entities : depth0)) != null ? stack1.total : stack1), depth0))
    + " </span></td>\n                <td>"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n                <td>"
    + alias2((helpers.toExponential || (depth0 && depth0.toExponential) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.entities : depth0)) != null ? stack1.pValue : stack1),{"name":"toExponential","hash":{},"data":data}))
    + "</td>\n                <td><a class=\"btn btn-info\" href=\"http://www.reactome.org/content/detail/"
    + alias2(((helper = (helper = helpers.stId || (depth0 != null ? depth0.stId : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"stId","hash":{},"data":data}) : helper)))
    + "\" target='_blank' role=\"button\"><span class=\"glyphicon glyphicon-new-window\" aria-hidden=\"true\"></span></a></td>\n            </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression, alias2=helpers.helperMissing, alias3="function";

  return "<div class='row'>\n    <div class='col-md-6'>\n        Displaying <strong>"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.pathways : depth0)) != null ? stack1.length : stack1), depth0))
    + "</strong> pathways out of <strong>"
    + alias1(((helper = (helper = helpers.pathwaysFound || (depth0 != null ? depth0.pathwaysFound : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"pathwaysFound","hash":{},"data":data}) : helper)))
    + "</strong>.\n    </div>\n    <div class='col-md-6'>\n        <span style='color:red'><strong>"
    + alias1(((helper = (helper = helpers.identifiersNotFound || (depth0 != null ? depth0.identifiersNotFound : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"identifiersNotFound","hash":{},"data":data}) : helper)))
    + "</strong></span> identifiers not found.<br> \n    </div>\n</div>\n\n<table class=\"table table-hover\">\n    <thead>\n        <tr>\n            <th>Found</th>\n            <th>Pathway</th>\n            <th>P-value</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pathways : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>";
},"useData":true});

this["Templates"]["portfolio"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <div class=\"GeneExpressionSummary_subtitle\">"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + "</div>\n            <div class=\"GeneExpressionSummary_feature\">"
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "</div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "            <div>Sorry, we could not find data for your request</div>\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "            <select class=\"form-control input\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.PDBMappings : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.firstMapping : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "                \n";
},"6":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "                    <option value=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + " ("
    + alias3(alias4(((stack1 = (depth0 != null ? depth0['1'] : depth0)) != null ? stack1.start : stack1), depth0))
    + ".."
    + alias3(alias4(((stack1 = (depth0 != null ? depth0['1'] : depth0)) != null ? stack1.end : stack1), depth0))
    + ")\">"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + " ("
    + alias3(alias4(((stack1 = (depth0 != null ? depth0['1'] : depth0)) != null ? stack1.start : stack1), depth0))
    + ".."
    + alias3(alias4(((stack1 = (depth0 != null ? depth0['1'] : depth0)) != null ? stack1.end : stack1), depth0))
    + ")</option>\n";
},"8":function(depth0,helpers,partials,data) {
    var helper;

  return "                <img src=\"http://www.ebi.ac.uk/pdbe-srv/view/images/entry/"
    + this.escapeExpression(((helper = (helper = helpers.firstMapping || (depth0 != null ? depth0.firstMapping : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"firstMapping","hash":{},"data":data}) : helper)))
    + "_cbc600.png\" style=\"width: 100%; height: auto;\">\n";
},"10":function(depth0,helpers,partials,data) {
    return "                <img src=\"\" style=\"width: 100%; height: auto;\">\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\n    <div class=\"col-md-6\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.features : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"col-md-6\">\n                \n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.PDBMappings : depth0),"!=",null,{"name":"compare","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true});

this["Templates"]["progressbar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"progress progress-striped active\">\n    <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%\">\n        <span class=\"sr-only\">40% Complete (success)</span>\n    </div>\n</div>";
},"useData":true});

this["Templates"]["random"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>random</mark> layout puts nodes in random positions within the viewport.</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>";
},"useData":true});

this["Templates"]["shortestpath"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                    <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<form>\n    <br>\n\n    <div class=\"form-group col-xs-12\">                        \n        <select class=\"form-control\" name=\"algorithm\">\n            <option value=\"astar\" selected>A*</option>\n            <option value=\"bellmanFord\">Bellman-Ford</option>\n            <option value=\"breadthfirst\">Breadth-First Search</option>\n            <option value=\"dijkstra\">Dijkstra</option>\n            <option value=\"floydWarshall\">Floyd–Warshall</option>\n            <!--<option value=\"kargerStein\">Karger-Stein</option>-->\n            <option value=\"kruskal\">Kruskal</option>\n        </select>\n    </div>\n    \n    <blockquote id=\"algoquote\" class=\"form-group col-xs-12\">\n        <footer name=\"astar\" style=\"display: block;\">The <mark>A*</mark> algorithm finds a least-cost path from a given initial node to one goal node.</footer>\n        <footer name=\"bellmanFord\" style=\"display: none;\">The <mark>Bellman–Ford</mark> algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph.</footer>\n        <footer name=\"breadthfirst\" style=\"display: none;\"><mark>Breadth-first search</mark> is an algorithm for traversing graphs. It starts at a given node and explores the neighbor nodes first, before moving to the next level neighbours.</footer>\n        <footer name=\"dijkstra\" style=\"display: none;\"><mark>Dijkstra's</mark> algorithm is an algorithm for finding the shortest paths between nodes in a graph.</footer>\n        <footer name=\"floydWarshall\" style=\"display: none;\">The <mark>Floyd–Warshall</mark> is a graph analysis algorithm for finding shortest paths in a weighted graph.</footer>\n        <!--<footer name=\"kargerStein\" style=\"display: none;\"><mark>Karger-Stein</mark> algorithm is a randomized algorithm to compute a minimum cut of a connected graph.</footer>-->\n        <footer name=\"kruskal\" style=\"display: none;\"><mark>Kruskal's</mark> algorithm finds the minimum spanning tree for the given graph.</footer>\n    </blockquote>\n    \n    <div id=\"source\" class=\"form-group col-xs-12\">                        \n        <label class=\"col-xs-3\">Source</label>\n        <div class=\"col-xs-9\">\n            <select class=\"form-control\" name=\"source\">\n                <option value=\"none\" selected>None</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.nodes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n    </div>\n    \n    <div id=\"target\" class=\"form-group col-xs-12\">                        \n        <label class=\"col-xs-3\">Target</label>\n        <div class=\"col-xs-9\">\n            <select class=\"form-control\" name=\"target\">\n                <option value=\"none\" selected>None</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.nodes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n    </div>\n    \n    <div class=\"form-group col-xs-12\">                        \n        <label class=\"col-xs-3\">Highlight Color</label>\n        <div class=\"col-xs-9\">\n            <input name=\"hcolor\" type=\"text\" class=\"form-control minicolors-input\" data-control=\"hue\" value=\"#E8747C\">\n        </div>\n    </div>\n    \n    <center>\n        <button id=\"play\" type=\"button\" class=\"btn btn-info btn-lg\"><span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span> Calculate</button>\n    </center>\n    \n</form>       ";
},"useData":true});

this["Templates"]["sidemenu"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Sliding div starts here -->\n\n<div class=\"side_content\">\n    \n    <div role=\"tabpanel\">\n\n        <br>\n        \n        <!-- Nav tabs -->\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li role=\"presentation\" class=\"active\"><a href=\"#layout\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Visualization</a></li>\n            <li role=\"presentation\"><a href=\"#algorithms\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Algorithms</a></li>\n        </ul>\n\n        <!-- Tab panes -->\n        <div class=\"tab-content\">\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"layout\">\n                <br>\n                <div class=\"form-group col-xs-12\">                        \n                    <select class=\"form-control\" name=\"vizopt\">\n                        <option value=\"general\">General</option>\n                        <option value=\"node\">Node</option>\n                        <option value=\"edge\">Edge</option>\n                    </select>\n                </div>\n                \n                <form>\n                    <div id=\"general\" class=\"vizopt\">\n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-4\">Background color</label>\n                            <div class=\"col-xs-8\">\n                                <input name=\"bgcolor\" type=\"text\" class=\"form-control minicolors-input\" data-control=\"hue\" value=\"#ffffff\">\n                            </div>\n                        </div>\n\n                        <!--<div class=\"form-group col-xs-12\">\n                            <label class=\"col-xs-4\">Trim</label>\n                            <div class=\"col-xs-8\">\n                                <input name=\"trim\" type=\"checkbox\">\n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group col-xs-12\">\n                            <label class=\"col-xs-4\">Legend</label>\n                            <div class=\"col-xs-8\">\n                                <input name=\"legend\" type=\"checkbox\" value=\"data(id)\" checked=\"checked\">\n                            </div>\n                        </div>-->\n                        \n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Label Color</label>\n                            <div class=\"col-xs-7\">\n                                <input name=\"color\" type=\"text\" class=\"form-control minicolors-input graph_attribute\" data-control=\"hue\" value=\"#000000\">\n                            </div>\n                            <div class=\"col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Label Content</label>\n                            <div class=\"col-xs-7\">\n                                <select class=\"form-control graph_attribute\" name=\"content\">\n                                </select>\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                            </div>\n                        </div>\n                        \n                         <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Horizontal Align</label>\n                            <div class=\"col-xs-7\">\n                                <select class=\"form-control graph_attribute\" name=\"text-halign\">\n                                    <option value=\"left\">Left</option>\n                                    <option value=\"center\" selected>Center</option>\n                                    <option value=\"right\">Right</option>\n                                </select>\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Vertical Align</label>\n                            <div class=\"col-xs-7\">\n                                <select class=\"form-control graph_attribute\" name=\"text-valign\">\n                                    <option value=\"left\">Top</option>\n                                    <option value=\"center\">Center</option>\n                                    <option value=\"bottom\" selected>Bottom</option>\n                                </select>\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                            </div>\n                        </div>\n                        \n                    </div>\n                    \n                    <div id=\"edge\" class=\"vizopt\" style=\"display:none\">\n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Color</label>\n                            <div class=\"col-xs-7\">\n                                <input name=\"line-color\" type=\"text\" class=\"form-control minicolors-input graph_attribute\" data-control=\"hue\" value=\"#dddddd\">\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                                \n                            </div>\n                        </div>\n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Width</label>\n                            <div class=\"col-xs-7\">\n                                <input name=\"width\" class=\"form-control graph_attribute\" type=\"number\" min=\"1\" value=\"1\">\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                                \n                            </div>\n                        </div>\n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Curve Style</label>\n                            <div class=\"col-xs-7\">\n                                <select class=\"form-control graph_attribute\" name=\"curve-style\">\n                                    <option value=\"bezier\">Bezier</option>\n                                    <option value=\"haystack\" selected>Haystack</option>\n                                </select>\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                            </div>\n                        </div>\n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Line Style</label>\n                            <div class=\"col-xs-7\">\n                                <select class=\"form-control graph_attribute\" name=\"line-style\">\n                                    <option value=\"dashed\">Dashed</option>\n                                    <option value=\"dotted\">Dotted</option>\n                                    <option value=\"solid\" selected>Solid</option>\n                                </select>\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div id=\"node\" class=\"vizopt\" style=\"display:none\">\n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Color</label>\n                            <div class=\"col-xs-7\">\n                                <input name=\"background-color\" type=\"text\" class=\"form-control minicolors-input graph_attribute\" data-control=\"hue\" value=\"#dddddd\">\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                                \n                            </div>\n                        </div>\n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Shape</label>\n                            <div class=\"col-xs-7\">\n                                 <select class=\"form-control graph_attribute\" name=\"shape\">\n                                    <option value=\"ellipse\">Ellipse</option>\n                                    <option value=\"hexagon\">Hexagon</option>\n                                    <option value=\"heptagon\">Heptagon</option>\n                                    <option value=\"octagon\">Octagon</option>\n                                    <option value=\"pentagon\">Pentagon</option>\n                                    <option value=\"rectangle\">Rectangle</option>\n                                    <option value=\"roundrectangle\">Round rectangle</option>\n                                    <option value=\"star\">Star</option>\n                                    <option value=\"triangle\">Triangle</option>\n                                </select>\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                                \n                            </div>\n                        </div>\n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Width</label>\n                            <div class=\"col-xs-7\">\n                                <input name=\"width\" class=\"form-control graph_attribute\" type=\"number\" min=\"1\" value=\"20\">\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                                \n                            </div>\n                        </div>\n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Height</label>\n                            <div class=\"col-xs-7\">\n                                <input name=\"height\" class=\"form-control graph_attribute\" type=\"number\" min=\"1\" value=\"20\">\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                                \n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Opacity</label>\n                            <div class=\"col-xs-7\">\n                                <input name=\"background-opacity\" type=\"number\" class=\"form-control graph_attribute\" min=\"0\" max=\"1\" step=\"0.1\" value=\"1\">\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                                \n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Border width</label>\n                            <div class=\"col-xs-7\">\n                                <input name=\"border-width\" class=\"form-control graph_attribute\" type=\"number\" min=\"0\" value=\"0\">\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                                \n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Border Style</label>\n                            <div class=\"col-xs-7\">\n                                <select class=\"form-control graph_attribute\" name=\"border-style\">\n                                    <option value=\"dashed\">Dashed</option>\n                                    <option value=\"dotted\">Dotted</option>\n                                    <option value=\"double\">Double</option>\n                                    <option value=\"solid\" selected>Solid</option>                                  \n                                </select>\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                                \n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Border Color</label>\n                            <div class=\"col-xs-7\">\n                                <input name=\"border-color\" type=\"text\" class=\"form-control minicolors-input graph_attribute\" data-control=\"hue\" value=\"#000000\">\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                                \n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group col-xs-12\">                        \n                            <label class=\"col-xs-3\">Border Opacity</label>\n                            <div class=\"col-xs-7\">\n                                <input name=\"border-opacity\" type=\"number\" class=\"form-control graph_attribute\" min=\"0\" max=\"1\" step=\"0.1\" value=\"1\">\n                            </div>\n                            <div class=\" col-xs-2\" role=\"group\">\n                                <button style=\"height:34px\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-cog\"></span></button>                  \n                                \n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"algorithms\"></div>\n        </div>\n\n    </div>\n</div>\n<!-- Sliding div ends here -->";
},"useData":true});

this["Templates"]["springy"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>springy</mark> layout uses a force-directed physics simulation, written by <mark>Dennis Hotson.</mark></footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n    <input name=\"random\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to use random initial positions\">\n        <input name=\"random\" type=\"checkbox\" value=\"true\"> Random\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"stiffness\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tunes stiffness\">Stiffness</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"stiffness\" id=\"stiffness\" value=\"400\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"repulsion\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tunes node repulsion\">Repulsion</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"repulsion\" id=\"repulsion\" value=\"400\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"damping\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tunes damping\">Damping</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"damping\" id=\"damping\" value=\"0.5\">\n    </div>\n</div>";
},"useData":true});

if (typeof exports === 'object' && exports) {module.exports = this["Templates"];}