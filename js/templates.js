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

if (typeof exports === 'object' && exports) {module.exports = this["Templates"];}