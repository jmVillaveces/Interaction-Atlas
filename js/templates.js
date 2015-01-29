var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["Templates"] = this["Templates"] || {};

Handlebars.registerPartial("navbar", this["Templates"]["navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav class='navbar navbar-default navbar-fixed-top' role='navigation'>\n    <div class='container'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand poiret' href='.'><img src='favicon.ico'> iAtlas</a>\n        </div>\n        <div id='navbar' class='navbar-collapse collapse'>\n            <form class='navbar-form navbar-left' role = 'search'>\n                <div class='input-group input-group-sm'>\n                    <input id= 'search' type='text' class='form-control' placeholder = 'id...'>\n                    <span class='input-group-addon glyphicon glyphicon-search'></span>\n                </div>\n            </form>\n            <ul class='nav navbar-nav'>\n                <li><a id='save' href='#'><span class='glyphicon glyphicon-floppy-disk' aria-hidden='true'> Save</span></a></li>\n                <li><a id='pathway' href='#'><span class='glyphicon glyphicon-th-list' aria-hidden='true'> Pathway Analysys</span></a></li>\n            </ul>\n            \n            <ul class='nav navbar-nav navbar-right'>\n                <li><a href='#about'>About</a></li>\n                <li><a href='#contact'>Contact</a></li>\n            </ul>\n        </div><!--/.nav-collapse -->\n    </div>\n</nav>";
  }));

Handlebars.registerPartial("search", this["Templates"]["search"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form id='search-form' role=\"form\">\n    <div class=\"jumbotron\" style=\"margin-top:5%; background-color: transparent; *\">  \n        <table style=\"width:100%; text-align:right;\">\n              <tr>\n                  <td><div class='poiret logo'> iAtlas</div></td>\n              </tr>\n              <tr>\n                  <td class='poiret msg' style='font-size:20px;'>"
    + escapeExpression(((stack1 = (depth0 && depth0.count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " unique interactions indexed</td>\n              </tr>\n              <tr id='search'>\n                  <td style='width:90%'>\n                      <div class=\"input-group input-group-lg\">\n                          <span class=\"input-group-addon glyphicon glyphicon-search\"></span>\n                          <input id=\"query\" type=\"text\" class=\"form-control search-query\" placeholder=\"identifiers...\" required autofocus>\n                      </div>\n                  </td>\n                  <td style='width:10%'>\n                      <button class=\" btn btn-lg btn-success\" type=\"submit\">GO</button>\n                  </td>\n              </tr>\n              <tr id='loading'>\n              </tr>\n              <tr>\n                  <td>\n                      <label style=\"color: #428bca;text-decoration: none;font-weight: normal;\">\n                            <input id='expand' type=\"checkbox\"> expand network\n                      </label> &middot; \n                      <a id=\"explink\" href=\"#\">example</a> &middot; \n                      <a id=\"advlink\" href=\"#\">about</a>\n                      <!--<a id=\"advlink\" href=\"#\">advanced options</a>-->\n                  </td>\n              </tr>\n        </table>\n        <div id=\"msg\" class=\"alert alert-info\"></div>\n    </div>\n</form>";
  return buffer;
  }));

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

  buffer += "<div class='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>\n  <div class='modal-dialog modal-lg'>\n    <div class='modal-content'>\n      <div class='modal-header' style='background:";
  if (helper = helpers.color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>\n          <h4 style='color:#fff' class='modal-title' id='myModalLabel'>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<strong> ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong> ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subtitle), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\n      </div>\n      <div class='modal-body'>\n          <p><img src = 'loading.gif'></p>\n      </div>\n      <div class='modal-footer'>\n        <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>\n      </div>\n    </div>\n  </div>\n</div>";
  return buffer;
  });

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

this["Templates"]["network"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div>\n    ";
  stack1 = self.invokePartial(partials.navbar, 'navbar', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div id='dialog'></div>\n    <div>\n        <svg id='network' style='background-size: contain'></svg>\n    </div>\n</div>";
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

this["Templates"]["sidemenu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- Sliding div starts here -->\n<div id=\"sidemenu\" class=\"side_container\">\n    <div class=\"side_handle\">\n        <button type=\"button\" class=\"btn btn-success\" aria-label=\"Left Align\">\n            <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Settings\n        </button>\n    </div>\n    <div class=\"side_content\">\n        <div class=\"sidebox form-group\">\n            <label>Layout</label>\n            <select id=\"layout_selector\" class=\"input-large\" style=\"margin-left:20px\">\n              <option value=\"force\">Force</option>\n              <option value=\"radial\">Radial</option>\n            </select>\n        </div>\n        <div class=\"sidebox form-group\">\n            <label>Nodes</label>\n            <br>\n            <input id=\"node_slider\" type=\"text\">\n        </div>\n        <div class=\"sidebox\">\n            <label>Query type</label>\n        </div>\n    </div>\n</div>\n<!-- Sliding div ends here -->";
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

if (typeof exports === 'object' && exports) {module.exports = this["Templates"];}