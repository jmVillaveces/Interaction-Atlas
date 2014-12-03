var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["Templates"] = this["Templates"] || {};

Handlebars.registerPartial("search", this["Templates"]["search"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form id='search-form' role=\"form\">\n    <div class=\"jumbotron\" style=\"margin-top:5%; background-color: transparent; *\">  \n        <table style=\"width:100%; text-align:right;\">\n              <tr>\n                  <td><div class='poiret logo'> iAtlas</div></td>\n              </tr>\n              <tr>\n                  <td class='poiret msg' style='font-size:20px;'>"
    + escapeExpression(((stack1 = (depth0 && depth0.count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " unique interactions indexed</td>\n              </tr>\n              <tr id='loading'>\n                  <td style='width:90%'>\n                      <div class=\"input-group input-group-lg\">\n                          <span class=\"input-group-addon glyphicon glyphicon-search\"></span>\n                          <input id=\"query\" type=\"text\" class=\"form-control search-query\" placeholder=\"identifiers...\" required autofocus>\n                      </div>\n                  </td>\n                  <td style='width:10%'>\n                      <button class=\" btn btn-lg btn-success\" type=\"submit\">GO</button>\n                  </td>\n              </tr>\n              <tr>\n                  <td>\n                      <label style=\"color: #428bca;text-decoration: none;font-weight: normal;\">\n                            <input id='expand' type=\"checkbox\"> expand network\n                      </label> &middot; \n                      <a id=\"explink\" href=\"#\">example</a> &middot; \n                      <a id=\"advlink\" href=\"#\">about</a>\n                      <!--<a id=\"advlink\" href=\"#\">advanced options</a>-->\n                  </td>\n              </tr>\n        </table>\n    </div>\n</form>";
  return buffer;
  }));

this["Templates"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"container\">\n     ";
  stack1 = self.invokePartial(partials.search, 'search', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div> <!-- /container -->";
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

this["Templates"]["sidepanel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n                            <span class=\"glyphicon glyphicon-star\"></span><small> (Reviewed)</small>\n                          ";
  }

function program3(depth0,data) {
  
  
  return "\n                            <span class=\"glyphicon glyphicon-question-sign\"></span><small> (Unreviewed)</small>\n                          ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <dt>Entry Name</dt><dd><p>";
  if (helper = helpers.Entry_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Entry_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p></dd>\n                        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <dt>Gene Names</dt><dd><p>";
  if (helper = helpers.Gene_names) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Gene_names); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p></dd>\n                        ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        <dt>Alternative Ids</dt><dd><p>";
  stack1 = (helper = helpers.join || (depth0 && depth0.join),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.altIds), ", ", options) : helperMissing.call(depth0, "join", (depth0 && depth0.altIds), ", ", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p></dd>\n                        ";
  return buffer;
  }
function program10(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.value), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program11(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = (depth0 && depth0.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        <dt>Taxonomy</dt><dd><p>";
  stack1 = (helper = helpers.join || (depth0 && depth0.join),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.taxonomy), ", ", options) : helperMissing.call(depth0, "join", (depth0 && depth0.taxonomy), ", ", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p></dd>\n                        ";
  return buffer;
  }
function program14(depth0,data) {
  
  
  return escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <dt>Protein names</dt><dd><p>";
  if (helper = helpers.Protein_names) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Protein_names); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p></dd>\n                        ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <dt>Keywords:</dt><dd><p>";
  if (helper = helpers.Keywords) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Keywords); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p></dd>\n                        ";
  return buffer;
  }

  buffer += " <button type=\"button\" class=\"trigger btn btn-info\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span> ";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </button>\n        \n        <div class=\"sidePanel panel panel-default\">\n          <div class=\"panel-body\">\n              \n              <!-- Nav tabs -->\n              <ul class=\"nav nav-tabs\">\n                  <li class=\"active\"><a href=\"#home\" data-toggle=\"tab\">General Info</a></li>\n                  <li><a href=\"#expression\" data-toggle=\"tab\">Expression</a></li>\n                  <li><a href=\"#sequence\" data-toggle=\"tab\">Sequence</a></li>\n                  <li><a href=\"#protPortfolio\" data-toggle=\"tab\">Protein Portfolio</a></li>\n              </ul>\n\n              <!-- Tab panes -->\n              <div class=\"tab-content\">\n                  <div class=\"tab-pane active\" id=\"home\">\n                      <h3>\n                          ";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " \n                          ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.Status), "reviewed", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.Status), "reviewed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                          ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.Status), "!==", "reviewed", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.Status), "!==", "reviewed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                      </h3>\n                      <dl>\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.Entry_name), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.Gene_names), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.altIds), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.taxonomy), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.Protein_names), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.Keywords), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                      </dl>\n                  </div>\n                  \n                  <div class=\"tab-pane\" id=\"expression\"></div>\n                  <div class=\"tab-pane\" id=\"sequence\"></div>\n                  <div class=\"tab-pane\" id=\"protPortfolio\"></div>\n              </div>\n              \n              \n          </div>\n        </div>\n";
  return buffer;
  });

this["Templates"]["tooltip"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "<span class=\"glyphicon glyphicon-star\"></span>";
  }

function program3(depth0,data) {
  
  
  return "<span class=\"glyphicon glyphicon-question-sign\"></span>";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <dt>Entry Name</dt><dd><p>";
  if (helper = helpers.Entry_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Entry_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p></dd>\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <dt>Gene Names</dt><dd><p>";
  if (helper = helpers.Gene_names) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Gene_names); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p></dd>\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <dt>Taxonomy</dt><dd><p>";
  stack1 = (helper = helpers.join || (depth0 && depth0.join),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.taxonomy), ", ", options) : helperMissing.call(depth0, "join", (depth0 && depth0.taxonomy), ", ", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p></dd>\n        ";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  }

  buffer += "<h3 class=\"popover-title text-center\"><strong>";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </strong>";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.Status), "reviewed", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.Status), "reviewed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.Status), "!==", "reviewed", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.Status), "!==", "reviewed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n<div class=\"popover-content\">\n    <dl>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.Entry_name), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.Gene_names), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.taxonomy), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </dl>\n</div>";
  return buffer;
  });

if (typeof exports === 'object' && exports) {module.exports = this["Templates"];}