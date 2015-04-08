var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["Templates"] = this["Templates"] || {};

this["Templates"]["UPprotein"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n                <li><a target='_blank' href='http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?name="
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "'>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</a></li>\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " Name: <i>";
  if (helper = helpers.fullName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fullName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</i><br> ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " Short Name: <i>";
  if (helper = helpers.shortName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shortName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</i> <br> ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " Gene: <a href='http://www.ncbi.nlm.nih.gov/gene/?term=";
  if (helper = helpers.gene) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.gene); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' target='_blank'><i>";
  if (helper = helpers.gene) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.gene); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</i></a> <br> ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " Protein existence: <i>";
  if (helper = helpers.proteinExistence) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.proteinExistence); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</i> <br> ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <div class='panel panel-default'>\n                    <div class='panel-heading' role='tab' id='heading_key'>\n                        <h4 class='panel-title text-capitalize'>\n                            <a class='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapse_key' aria-expanded='false' aria-controls='collapse_key'>\n                                Keywords\n                                <span class='badge pull-right'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.keyword)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </a>\n                        </h4>\n                    </div>\n                    <div id='collapse_key' class='panel-collapse collapse' role='tabpanel' aria-labelledby='heading_key'>\n                        <p style='margin-left: 5px;'>";
  if (helper = helpers.keyword) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.keyword); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n                    </div>\n                </div>\n                ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class='panel panel-default'>\n                    <div class='panel-heading' role='tab' id='heading_GO'>\n                        <h4 class='panel-title text-capitalize'>\n                            <a class='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapse_GO' aria-expanded='false' aria-controls='collapse_GO'>\n                                Gene Ontology\n                                <span class='badge pull-right'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.GO)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </a>\n                        </h4>\n                    </div>\n                    <div id='collapse_GO' class='panel-collapse collapse' role='tabpanel' aria-labelledby='heading_key'>\n                        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.GO), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </div>\n                </div>\n                ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <h5 style='margin-left: 5px;'>";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <small>";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</small></h5>\n                        ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class='panel panel-default'>\n                    <div class='panel-heading' role='tab' id='heading"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                        <h4 class='panel-title text-capitalize'>\n                            <a class='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapse"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' aria-expanded='false' aria-controls='collapse"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                                "
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span class='badge pull-right'>"
    + escapeExpression(((stack1 = (depth0 && depth0.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                            </a>\n                        </h4>\n                    </div>\n                    <div id='collapse"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class='panel-collapse collapse' role='tabpanel' aria-labelledby='heading"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                        <div class='panel-body'>\n                            <ul>\n                                ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "";
  buffer += "\n                                <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                                ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <li>\n                    <address>\n                    <a href='http://www.ncbi.nlm.nih.gov/pubmed/?term=";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' target='_blank'>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a><br>\n                    ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.name), "!=", "", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.name), "!=", "", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.db), "typeof", "string", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.db), "typeof", "string", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  if (helper = helpers.authors) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.authors); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<br>\n                    </address>\n                </li>\n                ";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <i>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</i> ";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.volume) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.volume); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.first) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.first); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-";
  if (helper = helpers.last) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.last); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<br>\n                    ";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <i>";
  if (helper = helpers.db) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.db); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</i><br>\n                    ";
  return buffer;
  }

  buffer += "<div role='tabpanel'>\n    <!-- Nav tabs -->\n    <ul class='nav nav-tabs' role='tablist'>\n        <li role='presentation' class='active'><a href='#info' aria-controls='info' role='tab' data-toggle='tab'><span class='glyphicon glyphicon-info-sign'></span> Info</a></li>\n        <li role='presentation'><a href='#sequence' aria-controls='sequence' role='tab' data-toggle='tab'><span class='glyphicon glyphicon-align-center'></span> Sequence</a></li>\n        <li role='presentation'><a href='#reference' aria-controls='reference' role='tab' data-toggle='tab'><span class='glyphicon glyphicon-file'></span> Reference</a></li>\n    </ul>\n\n    <!-- Tab panes -->\n    <div class='tab-content'>\n        <div role='tabpanel' class='tab-pane active' id='info'>\n            \n            <ol class='breadcrumb' style='font-size:12px'>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.lineage), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ol>\n            \n            <br>\n            ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.fullName)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 0, options) : helperMissing.call(depth0, "compare", ((stack1 = (depth0 && depth0.fullName)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n            ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.shortName)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 0, options) : helperMissing.call(depth0, "compare", ((stack1 = (depth0 && depth0.shortName)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.gene)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 0, options) : helperMissing.call(depth0, "compare", ((stack1 = (depth0 && depth0.gene)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.proteinExistence)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 0, options) : helperMissing.call(depth0, "compare", ((stack1 = (depth0 && depth0.proteinExistence)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <br>\n            <div class='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>\n                \n                ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.keyword)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 0, options) : helperMissing.call(depth0, "compare", ((stack1 = (depth0 && depth0.keyword)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                \n                ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.GO)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 0, options) : helperMissing.call(depth0, "compare", ((stack1 = (depth0 && depth0.GO)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                \n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.comment), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n        <div role='tabpanel' class='tab-pane' id='sequence'></div>\n        <div role='tabpanel' class='tab-pane' id='reference'>\n            <br>\n            <ol>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.reference), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ol>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["Templates"]["breadthfirst"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>breadthfirst</mark> layout puts nodes in a hierarchy, based on a breadthfirst traversal of the graph.</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n    <input name=\"avoidOverlap\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Prevents node overlap\">\n        <input name=\"avoidOverlap\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Avoid Overlap\n    </label>\n    <input name=\"circle\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Put depths in concentric circles if true, put depths top down if false\">\n        <input name=\"circle\" type=\"checkbox\" value=\"true\"> Circle\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>";
  });

this["Templates"]["circle"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>circle</mark> layout positions nodes in a circle.</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n    <input name=\"avoidOverlap\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Prevents node overlap\">\n        <input name=\"avoidOverlap\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Avoid Overlap\n    </label>\n    <input name=\"counterclockwise\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether the layout should go counterclockwise\">\n        <input name=\"counterclockwise\" type=\"checkbox\" value=\"true\"> Counterclockwise\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>";
  });

this["Templates"]["cola"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>cola</mark> layout uses a force-directed physics simulation</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n    <input name=\"avoidOverlap\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Prevents node overlap\">\n        <input name=\"avoidOverlap\" type=\"checkbox\" value=\"true\"> Avoid Overlap\n    </label>\n    <input name=\"randomize\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Use random node positions at beginning of layout\">\n        <input name=\"randomize\" type=\"checkbox\" value=\"true\"> Randomize\n    </label>\n    <input name=\"handleDisconnected\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Avoids disconnected components from overlapping\">\n        <input name=\"handleDisconnected\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Handle Disconnected\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>";
  });

this["Templates"]["concentric"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>concentric</mark> layout positions nodes in concentric circles segregating the nodes into levels based on <mark>node degree</mark>.</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n    <input name=\"avoidOverlap\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Prevents node overlap\">\n        <input name=\"avoidOverlap\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Avoid Overlap\n    </label>\n    <input name=\"counterclockwise\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether the layout should go counterclockwise\">\n        <input name=\"counterclockwise\" type=\"checkbox\" value=\"true\"> Counterclockwise\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>";
  });

this["Templates"]["cose"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>cose (Compound Spring Embedder)</mark> layout uses a force-directed simulation to lay out compound graphs.</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"nodeRepulsion\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Node repulsion (non overlapping) multiplier\">Node Repulsion</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"nodeRepulsion\" id=\"nodeRepulsion\" value=\"400000\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"nodeOverlap\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Node repulsion (overlapping) multiplier\">Node Overlap</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"nodeOverlap\" id=\"nodeOverlap\" value=\"10\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"idealEdgeLength\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Ideal edge (non nested) length\">Ideal Edge Length</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"idealEdgeLength\" id=\"idealEdgeLength\" value=\"10\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"edgeElasticity\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Divisor to compute edge forces\">Edge Elasticity</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"edgeElasticity\" id=\"edgeElasticity\" value=\"100\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"nestingFactor\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Nesting factor (multiplier) to compute ideal edge length for nested edges\">Nesting Factor</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"nestingFactor\" id=\"nestingFactor\" value=\"10\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"gravity\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Gravity force (constant)\">Gravity</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"gravity\" id=\"gravity\" value=\"250\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"initialTemp\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Initial temperature (maximum node displacement)\">Initial Temp</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"initialTemp\" id=\"initialTemp\" value=\"200\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"coolingFactor\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Cooling factor (how the temperature is reduced between consecutive iterations)\">Cooling factor</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"coolingFactor\" id=\"coolingFactor\" value=\"0.95\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"minTemp\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lower temperature threshold (below this point the layout will end)\">Min Temp</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"minTemp\" id=\"minTemp\" value=\"1.0\">\n    </div>\n</div>";
  });

this["Templates"]["dialog"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<span class='glyphicon ";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></span>";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " - <small style='color:#fff'>";
  if (helper = helpers.subtitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subtitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</small> ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <button id=\"";
  if (helper = helpers.okBtnId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.okBtnId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type='button' class='btn btn-info'>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.okBtnIcon), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  if (helper = helpers.okBtn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.okBtn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</button>\n                ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<span class='glyphicon ";
  if (helper = helpers.okBtnIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.okBtnIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></span> ";
  return buffer;
  }

  buffer += "<div class='modal fade' id='";
  if (helper = helpers.dialId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dialId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>\n    <div class='modal-dialog modal-lg'>\n        <div class='modal-content'>\n            <div class='modal-header' style='background:#5bc0de'>\n                <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>\n                <h4 style='color:#fff' class='modal-title'>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<strong> ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong> ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subtitle), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\n            </div>\n            <div class='modal-body'>\n                <center>\n                    <br>\n                    <p><img width = \"32px\" height = \"32px\" src = 'loading.gif'></p>\n                </center>\n            </div>\n            <div class='modal-footer'>\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.okBtn), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["Templates"]["grid"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>grid</mark> layout puts nodes in a well-spaced grid.</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n    <input name=\"avoidOverlap\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Prevents node overlap\">\n        <input name=\"avoidOverlap\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Avoid Overlap\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"rows\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Force number of rows in the grid\">Rows</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"rows\" id=\"rows\"  min=\"1\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"cols\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Force number of columns in the grid\">Columns</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"cols\" id=\"cols\"  min=\"1\">\n    </div>\n</div>";
  });

this["Templates"]["import"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <option value=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n            ";
  return buffer;
  }

  buffer += "\n    <div class=\"form-group\">\n        <label>Database</label>\n        <select class=\"form-control\" name=\"db\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.servers), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n    </div>\n    \n    \n    <div class=\"row\">\n        <div class=\"col-md-5\">\n        \n            <div class=\"form-group\">\n                <label>Query Type</label><br>\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"queryType\" value=\"ids\" checked>Ids list\n                </label>\n                <label class=\"radio-inline\">\n                    <input type=\"radio\" name=\"queryType\" value=\"query\">Query\n                </label>\n            </div>\n            \n            \n            <div class=\"form-group\">\n                <label>Organism</label>\n                <select class=\"form-control\" name=\"org\" multiple>\n                    <option  value=\"\" selected>All</option>\n                    <option  value=\"9606\">Homo sapiens</option>\n                    <option  value=\"10090\">Mus musculus</option>\n                    <option  value=\"10116\">Rattus norvegicus</option>\n                    <option  value=\"9913\">Bos taurus</option>\n                    <option  value=\"9031\">Gallus gallus</option>\n                    <option  value=\"9823\">Sus scrofa</option>\n                    <option  value=\"9615\">Canis familiaris</option>\n                    <option  value=\"7227\">Drosophila melanogaster</option>\n                    <option  value=\"6239\">Caenorhabditis elegans</option>\n                    <option  value=\"4932\">Saccharomyces cerevisiae</option>\n                    <option  value=\"7955\">Danio rerio</option>\n                    <option  value=\"4896\">Schizosaccharomyces pombe</option>\n                    <option  value=\"592\">Escherichia coli</option>\n                    <option  value=\"11676\">Human immunodeficiency virus 1</option>\n                    <option  value=\"11320\">Influenza A virus</option>\n                    <option  value=\"1491\">Clostridium botulinum</option>\n                    <option  value=\"3702\">Arabidopsis thaliana</option>\n                    <option  value=\"5833\">Plasmodium falciparum</option>\n                    <option  value=\"44689\">Dictyostelium discoideum</option>\n                    <option  value=\"1773\">Mycobacterium tuberculosis</option>\n                    <option  value=\"491\">Neisseria meningitidis serogroup B</option>\n                    <option  value=\"813\">Chlamydia trachomatis</option>\n                    <option  value=\"4530\">Oryza sativa</option>\n                    <option  value=\"5811\">Toxoplasma gondii</option>\n                    <option  value=\"8364\">Xenopus tropicalis</option>\n                    <option  value=\"90371\">Salmonella typhimurium</option>\n                    <option  value=\"59729\">Taeniopygia guttata</option>\n                    <option  value=\"158879\">Staphylococcus aureus N315</option>\n                </select>\n            </div>\n        \n        </div>\n        <div class=\"col-md-7\">\n            <a href=\"#\" id=\"";
  if (helper = helpers.exampleId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.exampleId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Example</a><br>\n            <textarea class=\"form-control\" name=\"query\" placeholder=\"Comma separated list of identifiers\"></textarea>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div id=\"";
  if (helper = helpers.logId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.logId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"col-md-10\"></div>\n    </div>";
  return buffer;
  });

this["Templates"]["layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += " <form id = ";
  if (helper = helpers.formId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">\r\n    <div class=\"form-group\">\r\n\r\n        <br>\r\n        <select class=\"form-control\" name=\"name\">\r\n            <option value=\"breadthfirst\">Breadthfirst</option>\r\n            <option value=\"circle\">Circle</option>\r\n            <option value=\"cola\">Cola</option>\r\n            <option value=\"concentric\" selected>Concentric</option>\r\n            <option value=\"cose\">Cose</option>\r\n            <option value=\"grid\">Grid</option>\r\n            <option value=\"random\">Random</option>\r\n            <option value=\"springy\">Springy</option>\r\n        </select>\r\n    </div>\r\n    <div id=\"";
  if (helper = helpers.layoutOptsId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.layoutOptsId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><br><br><br><br></div>\r\n</form>\r\n     ";
  return buffer;
  });

this["Templates"]["main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"navbar\"></div>\n<div id=\"network\" style=\"width: 100%; height: 100%;\"></div>\n<div id=\"sidemenu\" class=\"side_container\"></div>\n<div id=\"logger\"></div>\n<div id=\"dialog\"></div>\n";
  });

this["Templates"]["navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Project name</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n              <!--<li class=\"active\"><a href=\"#\">Home</a></li>-->\n              <li><a href=\"#\" id=\"";
  if (helper = helpers.importId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.importId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Import Network from database\"><span class=\"glyphicon glyphicon-import\" aria-hidden=\"true\"></span> Import Network</a></li>\n              <li><a href=\"#\">Contact</a></li>\n              <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Layout <span class=\"caret\"></span></a>\n                <ul id=";
  if (helper = helpers.layoutId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.layoutId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " class=\"dropdown-menu\" role=\"menu\">\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Puts nodes in a hierarchy, based on a breadthfirst traversal of the graph.\" href=\"breadthfirst\">Breadthfirst <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Positions nodes in a circle\" href=\"circle\">Circle <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Force-directed physics simulation\" href=\"cola\">Cola <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Positions nodes in concentric circles creating levels based on node degree\" href=\"concentric\">Concentric <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Force-directed physics simulation\" href=\"cose\">Cose <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Positions nodes in a Grid\" href=\"grid\">Grid <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Positions nodes randomly\" href=\"random\">Random <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Force-directed physics simulation\" href=\"springy\">Springy <span class=\"glyphicon\" aria-hidden=\"true\"></span></a></li>\n                    <li class=\"divider\"></li>\n                    <li><a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Advanced layout options\" href=\"#\">Advanced</a></li>\n                </ul>\n              </li>\n            </ul>\n            <form class=\"navbar-form navbar-left\" role=\"search\">\n                <div class=\"form-group\">\n                    <input type=\"text\" id=\"";
  if (helper = helpers.findId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.findId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"form-control\" placeholder=\"Search\">\n                </div>\n            </form>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a id=\"";
  if (helper = helpers.saveId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.saveId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#save\"><span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Save\" ></span></a></li>\n                <!--<li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><span data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Search\" class=\"glyphicon glyphicon-search\"></span></a>\n                    <div class=\"dropdown-menu\" style=\"padding:12px;\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <form id=\"tagsform\" class=\"navbar-form navbar-left\">\n                                    <div class=\"form-group\">\n                                        <input id=\"";
  if (helper = helpers.tagId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tagId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" class=\"form-control\" placeholder=\"identifier\">\n                                    </div>\n                                    <div id=\"";
  if (helper = helpers.searchTagsId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.searchTagsId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"tagsbox\"></div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </li>-->\n                <li><a id=\"";
  if (helper = helpers.pathwayId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pathwayId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\"><span class=\"glyphicon glyphicon-th-list\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Pathway Analysis\" ></span></a></li>\n                <li><a id=\"";
  if (helper = helpers.settingsId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.settingsId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\"><span class=\"glyphicon glyphicon-transfer\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Settings\" ></span></a></li>\n            </ul>\n        </div><!--/.nav-collapse -->\n    </div>\n</nav>";
  return buffer;
  });

this["Templates"]["network"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div>\n    ";
  stack1 = self.invokePartial(partials.navbar, 'navbar', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <!--<div id='dialog'></div>\n    <div>\n        <svg id='network' style='background-size: contain'></svg>\n    </div>-->\n</div>";
  return buffer;
  });

this["Templates"]["options"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <option value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                ";
  return buffer;
  }

  buffer += "<form id='";
  if (helper = helpers.formId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n    <div class=\"form-group col-xs-12\">\n        <br>\n        <input name=\"trim\" type=\"hidden\" value=\"false\">\n        <label class=\"checkbox-inline col-xs-6\">\n            <input name=\"trim\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Trim\n        </label>\n        <input name=\"legend\" type=\"hidden\" value=\"\">\n        <label class=\"checkbox-inline col-xs-6\">\n            <input name=\"legend\" type=\"checkbox\" value=\"data(id)\" checked=\"checked\"> Legend\n        </label>\n    </div>\n\n    <div class=\"form-group col-xs-12\">\n        <label class=\"col-xs-3\" for=\"score\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Interactions scoring method\">Score</label>\n        <div class=\"col-xs-9\">\n            <select class=\"form-control\" name=\"score\">\n                <option value=\"none\" selected>None</option>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.scores), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </select>\n        </div>\n    </div>\n\n    <center>\n\n        <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"scoreAttr\" value=\"width\" checked> Width\n        </label>\n        <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"scoreAttr\" value=\"opacity\"> Opacity\n        </label>\n\n    </center>\n\n    <br>\n    <center>\n        <button id=\"";
  if (helper = helpers.refreshId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.refreshId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"button\" class=\"btn btn-info btn-lg\"><span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Refresh</button>\n    </center>\n</form>";
  return buffer;
  });

this["Templates"]["pathway"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class='panel panel-default'>\n        <div class='panel-heading' role='tab' id='heading"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n            <h4 class='panel-title text-capitalize'>\n                <a class='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapse";
  if (helper = helpers.stId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' aria-expanded='false' aria-controls='collapse";
  if (helper = helpers.stId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n                    ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span class='badge pull-right'> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entities)),stack1 == null || stack1 === false ? stack1 : stack1.found)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " / "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entities)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </span>\n                </a>\n            </h4>\n        </div>\n        <div id='collapse";
  if (helper = helpers.stId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='panel-collapse collapse' role='tabpanel' aria-labelledby='heading";
  if (helper = helpers.stId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n            <div class='panel-body'>\n                \n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Entities</h5>\n                        <p>\n                            <strong>Fdr:</strong> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entities)),stack1 == null || stack1 === false ? stack1 : stack1.fdr)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n                            <strong>pValue:</strong> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entities)),stack1 == null || stack1 === false ? stack1 : stack1.pValue)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n                            <strong>Ratio:</strong> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entities)),stack1 == null || stack1 === false ? stack1 : stack1.ratio)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n                            Found <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entities)),stack1 == null || stack1 === false ? stack1 : stack1.found)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong> out of <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entities)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong><br>\n                        </p>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Reactions</h5>\n                        <p>\n                            <strong>Ratio:</strong> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.reactions)),stack1 == null || stack1 === false ? stack1 : stack1.ratio)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n                            Found <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.reactions)),stack1 == null || stack1 === false ? stack1 : stack1.found)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong> out of <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.reactions)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong><br>\n                        </p>\n                    </div>\n                </div>\n                \n                <p>\n                    <a href='http://www.reactome.org/content/detail/";
  if (helper = helpers.stId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.stId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' target='_blank'>\n                        <button type='button' class='btn btn-info' aria-label='Left Align'>\n                          <span class='glyphicon glyphicon glyphicon-share-alt' aria-hidden='true'></span> See in Reactome\n                        </button>\n                    </a>\n                </p>\n            </div>\n        </div>\n    </div>\n    ";
  return buffer;
  }

  buffer += "<div class='row'>\n    <div class='col-md-6'>\n        Displaying <strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.pathways)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong> pathways out of <strong>";
  if (helper = helpers.pathwaysFound) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pathwaysFound); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong>.\n    </div>\n    <div class='col-md-6'>\n        <span style='color:red'><strong>";
  if (helper = helpers.identifiersNotFound) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.identifiersNotFound); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></span> identifiers not found.<br> \n    </div>\n</div>\n\n<div class='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>\n\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.pathways), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    \n</div>";
  return buffer;
  });

this["Templates"]["portfolio"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"GeneExpressionSummary_subtitle\">"
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n            <div class=\"GeneExpressionSummary_feature\">"
    + escapeExpression(((stack1 = (depth0 && depth0.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n            <div>Sorry, we could not find data for your request</div>\n        ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "    \n            <select class=\"form-control input\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.PDBMappings), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </select>\n\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.firstMapping), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                \n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <option value=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0[1])),stack1 == null || stack1 === false ? stack1 : stack1.start)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".."
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0[1])),stack1 == null || stack1 === false ? stack1 : stack1.end)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\">"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0[1])),stack1 == null || stack1 === false ? stack1 : stack1.start)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".."
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0[1])),stack1 == null || stack1 === false ? stack1 : stack1.end)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</option>\n                ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <img src=\"http://www.ebi.ac.uk/pdbe-srv/view/images/entry/";
  if (helper = helpers.firstMapping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.firstMapping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_cbc600.png\" style=\"width: 100%; height: auto;\">\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "\n                <img src=\"\" style=\"width: 100%; height: auto;\">\n            ";
  }

  buffer += "<div class=\"row\">\n    <div class=\"col-md-6\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.features), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"col-md-6\">\n                \n        ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.PDBMappings), "!=", (depth0 && depth0.null), options) : helperMissing.call(depth0, "compare", (depth0 && depth0.PDBMappings), "!=", (depth0 && depth0.null), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>";
  return buffer;
  });

this["Templates"]["progressbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"progress progress-striped active\">\n    <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%\">\n        <span class=\"sr-only\">40% Complete (success)</span>\n    </div>\n</div>";
  });

this["Templates"]["random"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>random</mark> layout puts nodes in random positions within the viewport.</footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>";
  });

this["Templates"]["shortestpath"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n                    <option value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n                ";
  return buffer;
  }

  buffer += "<form>\n    <br>\n\n    <div class=\"form-group col-xs-12\">                        \n        <select class=\"form-control\" name=\"algorithm\">\n            <option value=\"astar\" selected>A*</option>\n            <option value=\"bellmanFord\">Bellman-Ford</option>\n            <option value=\"breadthfirst\">Breadth-First Search</option>\n            <option value=\"dijkstra\">Dijkstra</option>\n            <option value=\"floydWarshall\">Floyd–Warshall</option>\n            <!--<option value=\"kargerStein\">Karger-Stein</option>-->\n            <option value=\"kruskal\">Kruskal</option>\n        </select>\n    </div>\n    \n    <blockquote id=\"algoquote\" class=\"form-group col-xs-12\">\n        <footer name=\"astar\" style=\"display: block;\">The <mark>A*</mark> algorithm finds a least-cost path from a given initial node to one goal node.</footer>\n        <footer name=\"bellmanFord\" style=\"display: none;\">The <mark>Bellman–Ford</mark> algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph.</footer>\n        <footer name=\"breadthfirst\" style=\"display: none;\"><mark>Breadth-first search</mark> is an algorithm for traversing graphs. It starts at a given node and explores the neighbor nodes first, before moving to the next level neighbours.</footer>\n        <footer name=\"dijkstra\" style=\"display: none;\"><mark>Dijkstra's</mark> algorithm is an algorithm for finding the shortest paths between nodes in a graph.</footer>\n        <footer name=\"floydWarshall\" style=\"display: none;\">The <mark>Floyd–Warshall</mark> is a graph analysis algorithm for finding shortest paths in a weighted graph.</footer>\n        <!--<footer name=\"kargerStein\" style=\"display: none;\"><mark>Karger-Stein</mark> algorithm is a randomized algorithm to compute a minimum cut of a connected graph.</footer>-->\n        <footer name=\"kruskal\" style=\"display: none;\"><mark>Kruskal's</mark> algorithm finds the minimum spanning tree for the given graph.</footer>\n    </blockquote>\n    \n    <div id=\"source\" class=\"form-group col-xs-12\">                        \n        <label class=\"col-xs-3\">Source</label>\n        <div class=\"col-xs-9\">\n            <select class=\"form-control\" name=\"source\">\n                <option value=\"none\" selected>None</option>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.nodes), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </select>\n        </div>\n    </div>\n    \n    <div id=\"target\" class=\"form-group col-xs-12\">                        \n        <label class=\"col-xs-3\">Target</label>\n        <div class=\"col-xs-9\">\n            <select class=\"form-control\" name=\"target\">\n                <option value=\"none\" selected>None</option>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.nodes), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </select>\n        </div>\n    </div>\n    \n    <center>\n        <button id=\"play\" type=\"button\" class=\"btn btn-info btn-lg\"><span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span> Calculate</button>\n    </center>\n    \n</form>       ";
  return buffer;
  });

this["Templates"]["sidemenu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!-- Sliding div starts here -->\n\n<div class=\"side_content\">\n    \n    <div role=\"tabpanel\">\n\n        <br>\n        \n        <!-- Nav tabs -->\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li role=\"presentation\" class=\"active\"><a href=\"#layout\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Layout</a></li>\n            <li role=\"presentation\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Options</a></li>\n            <li role=\"presentation\"><a href=\"#algorithms\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Algorithms</a></li>\n        </ul>\n\n        <!-- Tab panes -->\n        <div class=\"tab-content\">\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"layout\">\n                <h3 id=\"example-heading-new\">General options</a></h3>\n                \n                <form id = ";
  if (helper = helpers.formId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">\n                    \n                    <div class=\"row\">\n                        <label class=\"col-md-4\">Background color</label>\n                        <div class=\"col-md-8\">\n                            <input name=\"bgcolor\" type=\"text\" class=\"form-control minicolors-input\" data-control=\"hue\" value=\"#ffffff\">\n                        </div>\n                    </div>\n                    \n                    <div class=\"row\">\n                        <label class=\"col-md-4\">Trim</label>\n                        <div class=\"col-md-8\"><input name=\"trim\" type=\"checkbox\"></div>\n                    </div>\n                    \n                </form>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile\"></div>\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"algorithms\"></div>\n        </div>\n\n    </div>\n</div>\n<!-- Sliding div ends here -->";
  return buffer;
  });

this["Templates"]["springy"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<blockquote class=\"form-group col-xs-12\">\n    <footer>The <mark>springy</mark> layout uses a force-directed physics simulation, written by <mark>Dennis Hotson.</mark></footer>\n</blockquote>\n\n<div class=\"form-group col-xs-12\">\n    <input name=\"animate\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to transition the node positions\">\n        <input name=\"animate\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Animate\n    </label>\n    <input name=\"fit\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to fit the viewport to the graph\">\n        <input name=\"fit\" type=\"checkbox\" value=\"true\" checked=\"checked\"> Fit\n    </label>\n    <input name=\"random\" type=\"hidden\" value=\"false\">\n    <label class=\"checkbox-inline col-xs-6\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Whether to use random initial positions\">\n        <input name=\"random\" type=\"checkbox\" value=\"true\"> Random\n    </label>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"padding\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Padding on fit\">Padding</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"padding\" id=\"padding\" value=\"30\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"stiffness\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tunes stiffness\">Stiffness</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"stiffness\" id=\"stiffness\" value=\"400\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"repulsion\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tunes node repulsion\">Repulsion</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"repulsion\" id=\"repulsion\" value=\"400\">\n    </div>\n</div>\n\n<div class=\"form-group col-xs-12\">\n    <label class=\"col-xs-3\" for=\"damping\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tunes damping\">Damping</label>\n    <div class=\"col-xs-1\">\n        <input type=\"number\" name=\"damping\" id=\"damping\" value=\"0.5\">\n    </div>\n</div>";
  });

if (typeof exports === 'object' && exports) {module.exports = this["Templates"];}