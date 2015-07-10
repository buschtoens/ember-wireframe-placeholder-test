/* jshint ignore:start */

/* jshint ignore:end */

define('test-app/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'test-app/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('test-app/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].FixtureAdapter.extend({});

});
define('test-app/application/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 40
            },
            "end": {
              "line": 1,
              "column": 70
            }
          },
          "moduleName": "test-app/application/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Startseite");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 82
            },
            "end": {
              "line": 1,
              "column": 113
            }
          },
          "moduleName": "test-app/application/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Posteingang");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 141
          }
        },
        "moduleName": "test-app/application/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Wireframe Placeholder Test");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("nav");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0,0,0);
        morphs[1] = dom.createMorphAt(element0,1,1);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","link-to",["index"],[],0,null,["loc",[null,[1,40],[1,82]]]],
        ["block","link-to",["mails"],[],1,null,["loc",[null,[1,82],[1,125]]]],
        ["content","outlet",["loc",[null,[1,131],[1,141]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('test-app/components/mail-index/component', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({});

});
define('test-app/components/mail-index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 100
              },
              "end": {
                "line": 1,
                "column": 209
              }
            },
            "moduleName": "test-app/components/mail-index/template.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("td");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            return morphs;
          },
          statements: [
            ["content","title",["loc",[null,[1,158],[1,167]]]],
            ["inline","moment",[["get","date",["loc",[null,[1,185],[1,189]]]],"DD.MM.YYYY"],[],["loc",[null,[1,176],[1,204]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 85
            },
            "end": {
              "line": 1,
              "column": 221
            }
          },
          "moduleName": "test-app/components/mail-index/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","link-to",["mails.mail",["get","id",["loc",[null,[1,124],[1,126]]]]],["tagName","tr","class","link"],0,null,["loc",[null,[1,100],[1,221]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 246
          }
        },
        "moduleName": "test-app/components/mail-index/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1,"class","mail-index");
        var el2 = dom.createElement("thead");
        var el3 = dom.createElement("tr");
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Titel");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Datum");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]),0,0);
        return morphs;
      },
      statements: [
        ["block","each",[["get","mails",["loc",[null,[1,93],[1,98]]]]],[],0,null,["loc",[null,[1,85],[1,230]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('test-app/components/prescription-index/component', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({});

});
define('test-app/components/prescription-index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.3",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 117
              },
              "end": {
                "line": 1,
                "column": 221
              }
            },
            "moduleName": "test-app/components/prescription-index/template.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("td");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" €");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            return morphs;
          },
          statements: [
            ["content","title",["loc",[null,[1,188],[1,197]]]],
            ["content","cost",["loc",[null,[1,206],[1,214]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 94
            },
            "end": {
              "line": 1,
              "column": 233
            }
          },
          "moduleName": "test-app/components/prescription-index/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","link-to",["mails.mail.prescription",["get","id",["loc",[null,[1,154],[1,156]]]]],["tagName","tr","class","link"],0,null,["loc",[null,[1,117],[1,233]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 233
            },
            "end": {
              "line": 1,
              "column": 264
            }
          },
          "moduleName": "test-app/components/prescription-index/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("tr");
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("Empty");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 289
          }
        },
        "moduleName": "test-app/components/prescription-index/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1,"class","prescription-index");
        var el2 = dom.createElement("thead");
        var el3 = dom.createElement("tr");
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Titel");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Kosten");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]),0,0);
        return morphs;
      },
      statements: [
        ["block","each",[["get","prescriptions",["loc",[null,[1,102],[1,115]]]]],[],0,1,["loc",[null,[1,94],[1,273]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('test-app/components/prescription-item-index/component', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({});

});
define('test-app/components/prescription-item-index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 102
            },
            "end": {
              "line": 1,
              "column": 168
            }
          },
          "moduleName": "test-app/components/prescription-item-index/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("tr");
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [0]),0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","name",["loc",[null,[1,125],[1,133]]]],
          ["content","manufacturer",["loc",[null,[1,142],[1,158]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 168
            },
            "end": {
              "line": 1,
              "column": 199
            }
          },
          "moduleName": "test-app/components/prescription-item-index/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("tr");
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("Empty");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 224
          }
        },
        "moduleName": "test-app/components/prescription-item-index/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1,"class","prescription-item-index");
        var el2 = dom.createElement("thead");
        var el3 = dom.createElement("tr");
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Hersteller");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]),0,0);
        return morphs;
      },
      statements: [
        ["block","each",[["get","items",["loc",[null,[1,110],[1,115]]]]],[],0,1,["loc",[null,[1,102],[1,208]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('test-app/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('test-app/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('test-app/index/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('test-app/index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 441
          }
        },
        "moduleName": "test-app/index/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Guten Morgen! :)");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Das funktoniert jetzt alles reibungslos und perfekt OHNE irgendwelche Hacks! ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Auch die Übergabe der Models, etc, wenn man direkt per URL in eine Route reinsteuert.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Der Trick besteht allein im Routing. Man kann nämlich neben einer :model_id Route auch noch eine index Route haben. Keine named outlets notwendig. Kein hacky Model hin und her Geeschiebe.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("You're welcome. :P");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('test-app/initializers/ember-moment', ['exports', 'ember-moment/helpers/moment', 'ember-moment/helpers/ago', 'ember-moment/helpers/duration', 'ember'], function (exports, moment, ago, duration, Ember) {

  'use strict';

  var initialize = function initialize() {
    var registerHelper;

    if (Ember['default'].HTMLBars) {
      registerHelper = function (helperName, fn) {
        Ember['default'].HTMLBars._registerHelper(helperName, Ember['default'].HTMLBars.makeBoundHelper(fn));
      };
    } else {
      registerHelper = Ember['default'].Handlebars.helper;
    };

    registerHelper('moment', moment['default']);
    registerHelper('ago', ago['default']);
    registerHelper('duration', duration['default']);
  };

  exports['default'] = {
    name: 'ember-moment',

    initialize: initialize
  };
  /* container, app */

  exports.initialize = initialize;

});
define('test-app/initializers/export-application-global', ['exports', 'ember', 'test-app/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('test-app/instance-initializers/app-version', ['exports', 'test-app/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('test-app/mails/index/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('test-app/mails/index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 49
          }
        },
        "moduleName": "test-app/mails/index/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["content","prescription-index",["loc",[null,[1,0],[1,22]]]],
        ["content","prescription-item-index",["loc",[null,[1,22],[1,49]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('test-app/mails/mail/index/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('test-app/mails/mail/index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 27
          }
        },
        "moduleName": "test-app/mails/mail/index/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["content","prescription-item-index",["loc",[null,[1,0],[1,27]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('test-app/mails/mail/prescription/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('test-app/mails/mail/prescription/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 45
          }
        },
        "moduleName": "test-app/mails/mail/prescription/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","prescription-item-index",[],["items",["subexpr","@mut",[["get","model.items",["loc",[null,[1,32],[1,43]]]]],[],[]]],["loc",[null,[1,0],[1,45]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('test-app/mails/mail/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('test-app/mails/mail/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 66
          }
        },
        "moduleName": "test-app/mails/mail/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","prescription-index",[],["prescriptions",["subexpr","@mut",[["get","model.prescriptions",["loc",[null,[1,35],[1,54]]]]],[],[]]],["loc",[null,[1,0],[1,56]]]],
        ["content","outlet",["loc",[null,[1,56],[1,66]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('test-app/mails/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.store.find('mail');
    }
  });

});
define('test-app/mails/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 36
          }
        },
        "moduleName": "test-app/mails/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","mail-index",[],["mails",["subexpr","@mut",[["get","model",["loc",[null,[1,19],[1,24]]]]],[],[]]],["loc",[null,[1,0],[1,26]]]],
        ["content","outlet",["loc",[null,[1,26],[1,36]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('test-app/models/mail', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Mail = DS['default'].Model.extend({
    title: DS['default'].attr('string'),
    text: DS['default'].attr('string'),
    date: DS['default'].attr('date'),

    prescriptions: DS['default'].hasMany('prescription', { async: true })
  });

  exports['default'] = Mail;

  Mail.reopenClass({
    FIXTURES: [{ id: 1, title: 'Mail A', date: new Date(), prescriptions: [1, 2, 3] }, { id: 2, title: 'Mail B', date: new Date(), prescriptions: [4, 5, 6] }, { id: 3, title: 'Mail C', date: new Date(), prescriptions: [7, 8, 9] }, { id: 4, title: 'Mail D', date: new Date(), prescriptions: [10, 11, 12] }, { id: 5, title: 'Mail E', date: new Date(), prescriptions: [13, 14, 15] }]
  });

});
define('test-app/models/prescription-item', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Item = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    manufacturer: DS['default'].attr('string'),

    prescription: DS['default'].belongsTo('prescription')
  });

  exports['default'] = Item;

  var FIXTURES = [];
  var id = 1;
  var idStep = 0;
  for (var prescription = 1; prescription <= 15; prescription++) {
    for (var idLoop = 0; idLoop < 3; idLoop++) {
      FIXTURES.push({ id: id, name: 'Item ' + id, manufacturer: 'Test Hersteller', prescription: prescription });
      id++;
    }
    if (idStep++ === 2) {
      idStep = 0;
      id++;
    }
  }

  FIXTURES.forEach(function (item) {
    console.log(item.prescription, item.id);
  });

  Item.reopenClass({ FIXTURES: FIXTURES });

});
define('test-app/models/prescription', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Prescription = DS['default'].Model.extend({
    title: DS['default'].attr('title'),
    cost: DS['default'].attr('number'),

    mail: DS['default'].belongsTo('mail', { async: true }),
    items: DS['default'].hasMany('prescription-item', { async: true })
  });

  exports['default'] = Prescription;

  Prescription.reopenClass({
    FIXTURES: [{ id: 1, title: 'Rezept A', date: new Date(), cost: 1, items: [1, 2, 3], mail: 1 }, { id: 2, title: 'Rezept B', date: new Date(), cost: 1, items: [4, 5, 6], mail: 1 }, { id: 3, title: 'Rezept C', date: new Date(), cost: 1, items: [7, 8, 9], mail: 1 }, { id: 4, title: 'Rezept D', date: new Date(), cost: 1, items: [11, 12, 13], mail: 2 }, { id: 5, title: 'Rezept E', date: new Date(), cost: 1, items: [14, 15, 16], mail: 2 }, { id: 6, title: 'Rezept F', date: new Date(), cost: 1, items: [17, 18, 19], mail: 2 }, { id: 7, title: 'Rezept G', date: new Date(), cost: 1, items: [21, 22, 23], mail: 3 }, { id: 8, title: 'Rezept H', date: new Date(), cost: 1, items: [24, 25, 26], mail: 3 }, { id: 9, title: 'Rezept I', date: new Date(), cost: 1, items: [27, 28, 29], mail: 3 }, { id: 10, title: 'Rezept G', date: new Date(), cost: 1, items: [31, 32, 33], mail: 4 }, { id: 11, title: 'Rezept H', date: new Date(), cost: 1, items: [34, 35, 36], mail: 4 }, { id: 12, title: 'Rezept I', date: new Date(), cost: 1, items: [37, 38, 39], mail: 4 }, { id: 13, title: 'Rezept G', date: new Date(), cost: 1, items: [41, 42, 43], mail: 5 }, { id: 14, title: 'Rezept H', date: new Date(), cost: 1, items: [44, 45, 46], mail: 5 }, { id: 15, title: 'Rezept I', date: new Date(), cost: 1, items: [47, 48, 49], mail: 5 }]
  });

});
define('test-app/router', ['exports', 'ember', 'test-app/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('mails', function () {
      this.route('mail', {
        path: ':mail_id'
      }, function () {
        this.route('prescription', {
          path: '/prescription/:prescription_id'
        });
      });
    });
  });

  exports['default'] = Router;

});
define('test-app/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('test-app/tests/application/adapter.jshint', function () {

  'use strict';

  module('JSHint - application');
  test('application/adapter.js should pass jshint', function() { 
    ok(true, 'application/adapter.js should pass jshint.'); 
  });

});
define('test-app/tests/components/mail-index/component.jshint', function () {

  'use strict';

  module('JSHint - components/mail-index');
  test('components/mail-index/component.js should pass jshint', function() { 
    ok(true, 'components/mail-index/component.js should pass jshint.'); 
  });

});
define('test-app/tests/components/prescription-index/component.jshint', function () {

  'use strict';

  module('JSHint - components/prescription-index');
  test('components/prescription-index/component.js should pass jshint', function() { 
    ok(true, 'components/prescription-index/component.js should pass jshint.'); 
  });

});
define('test-app/tests/components/prescription-item-index/component.jshint', function () {

  'use strict';

  module('JSHint - components/prescription-item-index');
  test('components/prescription-item-index/component.js should pass jshint', function() { 
    ok(true, 'components/prescription-item-index/component.js should pass jshint.'); 
  });

});
define('test-app/tests/helpers/resolver', ['exports', 'ember/resolver', 'test-app/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('test-app/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('test-app/tests/helpers/start-app', ['exports', 'ember', 'test-app/app', 'test-app/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('test-app/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('test-app/tests/index/route.jshint', function () {

  'use strict';

  module('JSHint - index');
  test('index/route.js should pass jshint', function() { 
    ok(true, 'index/route.js should pass jshint.'); 
  });

});
define('test-app/tests/mails/index/route.jshint', function () {

  'use strict';

  module('JSHint - mails/index');
  test('mails/index/route.js should pass jshint', function() { 
    ok(true, 'mails/index/route.js should pass jshint.'); 
  });

});
define('test-app/tests/mails/mail/index/route.jshint', function () {

  'use strict';

  module('JSHint - mails/mail/index');
  test('mails/mail/index/route.js should pass jshint', function() { 
    ok(true, 'mails/mail/index/route.js should pass jshint.'); 
  });

});
define('test-app/tests/mails/mail/prescription/route.jshint', function () {

  'use strict';

  module('JSHint - mails/mail/prescription');
  test('mails/mail/prescription/route.js should pass jshint', function() { 
    ok(true, 'mails/mail/prescription/route.js should pass jshint.'); 
  });

});
define('test-app/tests/mails/mail/route.jshint', function () {

  'use strict';

  module('JSHint - mails/mail');
  test('mails/mail/route.js should pass jshint', function() { 
    ok(true, 'mails/mail/route.js should pass jshint.'); 
  });

});
define('test-app/tests/mails/route.jshint', function () {

  'use strict';

  module('JSHint - mails');
  test('mails/route.js should pass jshint', function() { 
    ok(false, 'mails/route.js should pass jshint.\nmails/route.js: line 4, col 9, \'params\' is defined but never used.\n\n1 error'); 
  });

});
define('test-app/tests/models/mail.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/mail.js should pass jshint', function() { 
    ok(true, 'models/mail.js should pass jshint.'); 
  });

});
define('test-app/tests/models/prescription-item.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/prescription-item.js should pass jshint', function() { 
    ok(true, 'models/prescription-item.js should pass jshint.'); 
  });

});
define('test-app/tests/models/prescription.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/prescription.js should pass jshint', function() { 
    ok(true, 'models/prescription.js should pass jshint.'); 
  });

});
define('test-app/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('test-app/tests/test-helper', ['test-app/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('test-app/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('test-app/tests/unit/application/adapter-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:application', 'Unit | Adapter | application', {});

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('test-app/tests/unit/application/adapter-test.jshint', function () {

  'use strict';

  module('JSHint - unit/application');
  test('unit/application/adapter-test.js should pass jshint', function() { 
    ok(true, 'unit/application/adapter-test.js should pass jshint.'); 
  });

});
define('test-app/tests/unit/index/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:index', 'Unit | Route | index', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('test-app/tests/unit/index/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/index');
  test('unit/index/route-test.js should pass jshint', function() { 
    ok(true, 'unit/index/route-test.js should pass jshint.'); 
  });

});
define('test-app/tests/unit/models/mail-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('mail', 'Unit | Model | mail', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('test-app/tests/unit/models/mail-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/mail-test.js should pass jshint', function() { 
    ok(true, 'unit/models/mail-test.js should pass jshint.'); 
  });

});
define('test-app/tests/unit/models/prescription-item-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('prescription-item', 'Unit | Model | prescription item', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('test-app/tests/unit/models/prescription-item-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/prescription-item-test.js should pass jshint', function() { 
    ok(true, 'unit/models/prescription-item-test.js should pass jshint.'); 
  });

});
define('test-app/tests/unit/models/prescription-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('prescription', 'Unit | Model | prescription', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('test-app/tests/unit/models/prescription-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/prescription-test.js should pass jshint', function() { 
    ok(true, 'unit/models/prescription-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('test-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'test-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("test-app/tests/test-helper");
} else {
  require("test-app/app")["default"].create({"name":"test-app","version":"0.0.0+f2d270dc"});
}

/* jshint ignore:end */
//# sourceMappingURL=test-app.map