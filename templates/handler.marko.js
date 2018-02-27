// Compiled using marko@4.7.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mdn-temp$1.0.0/templates/handler.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<p>{{SeeCompatTable}}{{APIRef(\"" +
    marko_escapeXml((shared.overview - page) - name) +
    "!\")}}</p><p>The <strong><code>" +
    marko_escapeXml(member) +
    "!</code></strong> event handler of the {{domxref(\"" +
    marko_escapeXml(shared.interface) +
    "!\")}} is an event handler called whenever " +
    marko_escapeXml(description) +
    "!.</p><h2 id=\"Syntax\">Syntax</h2><pre class=\"syntaxbox\">" +
    marko_escapeXml(syntax) +
    "!</pre><h2>Example</h2><pre class=\"brush: js\">// TBD</pre><h2 id=\"Specifications\">Specifications</h2><table class=\"standard-table\"><tbody><tr><th scope=\"col\">Specification</th><th scope=\"col\">Status</th><th scope=\"col\">Comment</th></tr><tr><td>{{SpecName('" +
    marko_escapeXml((shared.mdn - spec) - name) +
    "!','" +
    marko_escapeXml(member - link) +
    "!','" +
    marko_escapeXml(member) +
    "!')}}</td><td>{{Spec2('" +
    marko_escapeXml((shared.mdn - spec) - name) +
    "!')}}</td><td>Initial definition.</td></tr></tbody></table><h2 id=\"Browser_Compatibility\">Browser Compatibility</h2><div>{{CompatibilityTable}}</div><div id=\"compat-desktop\"><table class=\"compat-table\"><tbody><tr><th>Feature</th><th>Chrome</th><th>Firefox (Gecko)</th><th>Internet Explorer</th><th>Opera</th><th>Safari (WebKit)</th></tr><tr><td>Basic support</td><td>{{CompatChrome(" +
    marko_escapeXml(shared.chrome - version) +
    "!)}}</td><td>{{CompatUnknown}}</td><td>{{CompatUnknown}}</td><td>{{CompatOpera(" +
    marko_escapeXml(shared.opera - version) +
    "!)}}</td><td>{{CompatUnknown}}</td></tr></tbody></table></div><div id=\"compat-mobile\"><table class=\"compat-table\"><tbody><tr><th>Feature</th><th>Android Webview</th><th>Firefox Mobile (Gecko)</th><th>Firefox OS</th><th>IE Mobile</th><th>Opera Mobile</th><th>Safari Mobile</th><th>Chrome for Android</th></tr><tr><td>Basic support</td><td>{{CompatChrome(" +
    marko_escapeXml(shared.chrome - version) +
    "!)}}</td><td>{{CompatUnknown}}</td><td>{{CompatUnknown}}</td><td>{{CompatUnknown}}</td><td>{{CompatOperaMobile(" +
    marko_escapeXml(shared.opera - version) +
    "!)}}</td><td>{{CompatUnknown}}</td><td>{{CompatChrome(" +
    marko_escapeXml(shared.chrome - version) +
    "!)}}</td></tr></tbody></table></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/mdn-temp$1.0.0/templates/handler.marko"
  };
