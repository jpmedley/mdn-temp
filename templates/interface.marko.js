// Compiled using marko@4.7.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mdn-temp$1.0.0/templates/interface.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_forEach = marko_helpers.f;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<p>{{SeeCompatTable}}{{APIRef(\"" +
    marko_escapeXml((shared.overview - page) - name) +
    "!\")}}</p><p>The <strong><code>" +
    marko_escapeXml(shared.interface) +
    "!</code></strong> interface of the the <a href=\"/en-US/docs/Web/API/" +
    marko_escapeXmlAttr((shared.overview - page) - link) +
    "\">\"" +
    marko_escapeXml(shared.api - name) +
    "!\"</a> provides " +
    marko_escapeXml(shared.interface - description) +
    "!</p>");

  if (data.constructor.length) {
    out.w("<h2 id=\"Constructor\">Constructor</h2><dl><dt>{{domxref(\"" +
      marko_escapeXml(shared.interface) +
      "!." +
      marko_escapeXml(shared.interface) +
      "!()\")}}</dt><dd>Creates a new <code>" +
      marko_escapeXml(shared.interface) +
      "!</code> object.</dd></dl>");
  }

  if (data.properties.length) {
    out.w("<h2 id=\"Properties\">Properties</h2><dl>");

    marko_forEach(data.properties, function(property) {
      out.w("<dd>{{domxref(\"" +
        marko_escapeXml(shared.interface) +
        "!." +
        marko_escapeXml(property) +
        "\")}}</dd><dt>TBD</dt>");
    });

    out.w("</dl>");
  } else {
    out.w("<p>None.</p>");
  }

  if (data.events.length) {
    out.w("<h3 id=\"Event_handlers\">Event handlers</h3><dl>");

    marko_forEach(data.events, function(event) {
      out.w("<dd>{{domxref(\"" +
        marko_escapeXml(shared.interface) +
        "!." +
        marko_escapeXml(event) +
        "\")}}</dd><dt>TBD</dt>");
    });

    out.w("</dl>");
  }

  if (data.methods.length) {
    out.w("<h2 id=\"Methods\">Methods</h2><dl>");

    marko_forEach(data.methods, function(method) {
      out.w("<dd>{{domxref(\"" +
        marko_escapeXml(shared.interface) +
        "!." +
        marko_escapeXml(method) +
        "\")}}</dd><dt>TBD</dt>");
    });

    out.w("</dl>");
  } else {
    out.w("<p>None.</p>");
  }

  out.w("<h2 id=\"Examples\">Examples</h2><pre class=\"brush: js\">// TBD</pre><h2 id=\"Specifications\">Specifications</h2><table class=\"standard-table\"><tbody><tr><th scope=\"col\">Specification</th><th scope=\"col\">Status</th><th scope=\"col\">Comment</th></tr><tr><td>{{SpecName('" +
    marko_escapeXml((shared.mdn - spec) - name) +
    "!','" +
    marko_escapeXml(member - link) +
    "!','" +
    marko_escapeXml(shared.interface) +
    "!')}}</td><td>{{Spec2('" +
    marko_escapeXml((shared.mdn - spec) - name) +
    "!')}}</td><td>Initial definition.</td></tr></tbody></table><h2 id=\"Browser_Compatibility\">Browser Compatibility</h2><div>{{CompatibilityTable}}</div><div id=\"compat-desktop\"><table class=\"compat-table\"><tbody><tr><th>Feature</th><th>Chrome</th><th>Firefox (Gecko)</th><th>Internet Explorer</th><th>Opera</th><th>Safari (WebKit)</th></tr><tr><td>Basic support</td><td>{{CompatChrome(" +
    marko_escapeXml(shared.chrome - version) +
    "!)}}</td><td>{{CompatUnknown}}</td><td>{{CompatUnknown}}</td><td>{{CompatOpera(" +
    marko_escapeXml(shared.opera - version) +
    "!)}}</td><td>{{CompatUnknown}}</td></tr></tbody></table></div><div id=\"compat-mobile\"><table class=\"compat-table\"><tbody><tr><th>Feature</th><th>Android Webview</th><th>Chrome for Android</th><th>Firefox Mobile (Gecko)</th><th>Firefox OS</th><th>IE Mobile</th><th>Opera Mobile</th><th>Safari Mobile</th></tr><tr><td>Basic support</td><td>{{CompatChrome(" +
    marko_escapeXml(shared.chrome - version) +
    "!)}}</td><td>{{CompatChrome(" +
    marko_escapeXml(shared.chrome - version) +
    "!)}}</td><td>{{CompatUnknown}}</td><td>{{CompatUnknown}}</td><td>{{CompatUnknown}}</td><td>{{CompatOperaMobile(" +
    marko_escapeXml(shared.opera - version) +
    "!)}}</td><td>{{CompatUnknown}}</td></tr></tbody></table></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/mdn-temp$1.0.0/templates/interface.marko"
  };
