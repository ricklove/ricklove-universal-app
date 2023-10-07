// ../../packages/pipescript/src/tests/code/0005-logic/01.ts.workflow.json
var ts_workflow_default = {
  workflowUri: "file.ts",
  name: "file.ts",
  inputs: [],
  outputs: [
    {
      name: "b",
      type: {
        kind: "simple",
        type: "number"
      },
      pipe: {
        kind: "node",
        sourceNodeId: "3",
        sourceNodeOutputName: "b"
      }
    }
  ],
  workflows: [
    {
      workflowUri: "a-declaration",
      name: "a-declaration",
      inputs: [
        {
          name: "a",
          type: {
            kind: "simple",
            type: "int"
          }
        }
      ],
      outputs: [
        {
          name: "a",
          type: {
            kind: "simple",
            type: "int"
          },
          pipe: {
            kind: "workflow-input",
            workflowInputNames: [
              "a"
            ]
          }
        }
      ],
      nodes: []
    },
    {
      workflowUri: "b-declaration",
      name: "b-declaration",
      inputs: [],
      outputs: [
        {
          name: "b",
          type: {
            kind: "simple",
            type: "number"
          }
        }
      ],
      nodes: []
    },
    {
      workflowUri: ">",
      name: ">",
      inputs: [
        {
          name: "left",
          type: {
            kind: "simple",
            type: "int"
          }
        },
        {
          name: "right",
          type: {
            kind: "simple",
            type: "int"
          }
        }
      ],
      outputs: [
        {
          name: "value",
          type: {
            kind: "simple",
            type: "bool"
          },
          pipe: {
            kind: "workflow-input",
            workflowInputNames: [
              "left",
              "right"
            ]
          }
        }
      ],
      nodes: []
    },
    {
      workflowUri: "if-body",
      name: "if-body",
      inputs: [
        {
          name: "condition",
          type: {
            kind: "simple",
            type: "bool"
          }
        },
        {
          name: "b",
          type: {
            kind: "simple",
            type: "number"
          }
        }
      ],
      outputs: [
        {
          name: "b",
          type: {
            kind: "simple",
            type: "number"
          }
        }
      ],
      workflows: [
        {
          workflowUri: "b=",
          name: "b=",
          inputs: [
            {
              name: "old",
              type: {
                kind: "simple",
                type: "number"
              },
              ignored: true
            },
            {
              name: "value",
              type: {
                kind: "simple",
                type: "int"
              }
            }
          ],
          outputs: [
            {
              name: "b",
              type: {
                kind: "simple",
                type: "int"
              },
              pipe: {
                kind: "workflow-input",
                workflowInputNames: [
                  "value"
                ]
              }
            }
          ],
          nodes: []
        }
      ],
      nodes: [
        {
          nodeId: "1",
          implementation: {
            kind: "workflow",
            workflowUri: "b="
          },
          inputPipes: [
            {
              name: "old",
              kind: "node",
              sourceNodeId: "",
              sourceNodeOutputName: "b"
            },
            {
              name: "value",
              kind: "data",
              json: "43"
            }
          ]
        }
      ]
    }
  ],
  nodes: [
    {
      nodeId: "1",
      implementation: {
        kind: "workflow",
        workflowUri: "a-declaration"
      },
      inputPipes: [
        {
          name: "a",
          kind: "data",
          json: "42"
        }
      ]
    },
    {
      nodeId: "",
      implementation: {
        kind: "workflow",
        workflowUri: "b-declaration"
      },
      inputPipes: []
    },
    {
      nodeId: "2",
      implementation: {
        kind: "workflow",
        workflowUri: ">"
      },
      inputPipes: [
        {
          name: "left",
          kind: "node",
          sourceNodeId: "1",
          sourceNodeOutputName: "a"
        },
        {
          name: "right",
          kind: "data",
          json: "40"
        }
      ]
    },
    {
      nodeId: "3",
      implementation: {
        kind: "workflow",
        workflowUri: "if-body"
      },
      inputPipes: [
        {
          name: "condition",
          kind: "node",
          sourceNodeId: "2",
          sourceNodeOutputName: "value"
        }
      ]
    }
  ]
};

// ../../packages/pipescript/src/ui/work-canvas-view.tsx
import { useLayoutEffect as useLayoutEffect2, useRef as useRef4 } from "react";
import { View as View3 } from "react-native";

// ../../node_modules/tslib/tslib.es6.mjs
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from2.length, ar; i < l; i++) {
      if (ar || !(i in from2)) {
        if (!ar)
          ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}

// ../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === "function";
}

// ../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

// ../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});

// ../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

// ../../node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                _a.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
              _b.call(_finalizers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty = new Subscription2();
    empty.closed = true;
    return empty;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

// ../../node_modules/rxjs/dist/esm5/internal/config.js
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

// ../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider = {
  setTimeout: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};

// ../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    var onUnhandledError = config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {
}

// ../../node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = function() {
  return createNotification("C", void 0, void 0);
}();
function errorNotification(error) {
  return createNotification("E", void 0, error);
}
function nextNotification(value) {
  return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

// ../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      var _a = context, errorThrown = _a.errorThrown, error = _a.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

// ../../node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error);
  } else {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function() {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};

// ../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();

// ../../node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
  return x;
}

// ../../node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}

// ../../node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = function() {
  function Observable3(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable3.prototype.lift = function(operator) {
    var observable2 = new Observable3();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable3.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable3.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable3.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable3.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable3.prototype[observable] = function() {
    return this;
  };
  Observable3.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable3.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable3.create = function(subscribe) {
    return new Observable3(subscribe);
  };
  return Observable3;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}

// ../../node_modules/rxjs/dist/esm5/internal/util/lift.js
function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return function(source) {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);

// ../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});

// ../../node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject = function(_super) {
  __extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _this = this;
    var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function() {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable();
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = function(_super) {
  __extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
}(Subject);

// ../../node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js
var BehaviorSubject = function(_super) {
  __extends(BehaviorSubject2, _super);
  function BehaviorSubject2(_value) {
    var _this = _super.call(this) || this;
    _this._value = _value;
    return _this;
  }
  Object.defineProperty(BehaviorSubject2.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  });
  BehaviorSubject2.prototype._subscribe = function(subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  };
  BehaviorSubject2.prototype.getValue = function() {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  };
  BehaviorSubject2.prototype.next = function(value) {
    _super.prototype.next.call(this, this._value = value);
  };
  return BehaviorSubject2;
}(Subject);

// ../../node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
  now: function() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: void 0
};

// ../../node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
var Action = function(_super) {
  __extends(Action2, _super);
  function Action2(scheduler, work) {
    return _super.call(this) || this;
  }
  Action2.prototype.schedule = function(state, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return this;
  };
  return Action2;
}(Subscription);

// ../../node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
var intervalProvider = {
  setInterval: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = intervalProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearInterval: function(handle) {
    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: void 0
};

// ../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
var AsyncAction = function(_super) {
  __extends(AsyncAction2, _super);
  function AsyncAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction2.prototype.schedule = function(state, delay2) {
    var _a;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay2);
    }
    this.pending = true;
    this.delay = delay2;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay2);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay2);
  };
  AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null && this.delay === delay2 && this.pending === false) {
      return id;
    }
    if (id != null) {
      intervalProvider.clearInterval(id);
    }
    return void 0;
  };
  AsyncAction2.prototype.execute = function(state, delay2) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state, delay2);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction2.prototype._execute = function(state, _delay) {
    var errored = false;
    var errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var _a = this, id = _a.id, scheduler = _a.scheduler;
      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      _super.prototype.unsubscribe.call(this);
    }
  };
  return AsyncAction2;
}(Action);

// ../../node_modules/rxjs/dist/esm5/internal/Scheduler.js
var Scheduler = function() {
  function Scheduler2(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler2.now;
    }
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  Scheduler2.prototype.schedule = function(work, delay2, state) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state, delay2);
  };
  Scheduler2.now = dateTimestampProvider.now;
  return Scheduler2;
}();

// ../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = function(_super) {
  __extends(AsyncScheduler2, _super);
  function AsyncScheduler2(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, now) || this;
    _this.actions = [];
    _this._active = false;
    return _this;
  }
  AsyncScheduler2.prototype.flush = function(action) {
    var actions = this.actions;
    if (this._active) {
      actions.push(action);
      return;
    }
    var error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsyncScheduler2;
}(Scheduler);

// ../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;

// ../../node_modules/rxjs/dist/esm5/internal/observable/empty.js
var EMPTY = new Observable(function(subscriber) {
  return subscriber.complete();
});

// ../../node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
  return value && isFunction(value.schedule);
}

// ../../node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return isFunction(last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}

// ../../node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = function(x) {
  return x && typeof x.length === "number" && typeof x !== "function";
};

// ../../node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}

// ../../node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
  return isFunction(input[observable]);
}

// ../../node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

// ../../node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

// ../../node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();

// ../../node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}

// ../../node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]);
          _b.label = 2;
        case 2:
          if (false)
            return [3, 8];
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done)
            return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

// ../../node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
          _a.call(iterable_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
            return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
            return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2)
            throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay2, repeat) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  if (repeat === void 0) {
    repeat = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay2));
    } else {
      this.unsubscribe();
    }
  }, delay2);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay2);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay2);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay2);
    }));
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return operate(function(source, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source.subscribe(subscriber);
    }, delay2));
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// ../../node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i = 0;
    return scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator2;
    executeSchedule(subscriber, scheduler, function() {
      iterator2 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a;
        var value;
        var done;
        try {
          _a = iterator2.next(), value = _a.value, done = _a.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
    };
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}

// ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}

// ../../node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}

// ../../node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/map.js
function map(project, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
var isArray = Array.isArray;
function callOrApply(fn, args) {
  return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return map(function(args) {
    return callOrApply(fn, args);
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js
var isArray2 = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf;
var objectProto = Object.prototype;
var getKeys = Object.keys;
function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    var first_1 = args[0];
    if (isArray2(first_1)) {
      return { args: first_1, keys: null };
    }
    if (isPOJO(first_1)) {
      var keys = getKeys(first_1);
      return {
        args: keys.map(function(key) {
          return first_1[key];
        }),
        keys
      };
    }
  }
  return { args, keys: null };
}
function isPOJO(obj) {
  return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
}

// ../../node_modules/rxjs/dist/esm5/internal/util/createObject.js
function createObject(keys, values) {
  return keys.reduce(function(result, key, i) {
    return result[key] = values[i], result;
  }, {});
}

// ../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js
function combineLatest() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  var resultSelector = popResultSelector(args);
  var _a = argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
  if (observables.length === 0) {
    return from([], scheduler);
  }
  var result = new Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
    return createObject(keys, values);
  } : identity));
  return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform) {
  if (valueTransform === void 0) {
    valueTransform = identity;
  }
  return function(subscriber) {
    maybeSchedule(scheduler, function() {
      var length = observables.length;
      var values = new Array(length);
      var active = length;
      var remainingFirstValues = length;
      var _loop_1 = function(i2) {
        maybeSchedule(scheduler, function() {
          var source = from(observables[i2], scheduler);
          var hasFirstValue = false;
          source.subscribe(createOperatorSubscriber(subscriber, function(value) {
            values[i2] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, function() {
            if (!--active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      };
      for (var i = 0; i < length; i++) {
        _loop_1(i);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    executeSchedule(subscription, scheduler, execute);
  } else {
    execute();
  }
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  var buffer = [];
  var active = 0;
  var index = 0;
  var isComplete = false;
  var checkComplete = function() {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  var outerNext = function(value) {
    return active < concurrent ? doInnerSub(value) : buffer.push(value);
  };
  var doInnerSub = function(value) {
    expand && subscriber.next(value);
    active++;
    var innerComplete = false;
    innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, function() {
      innerComplete = true;
    }, void 0, function() {
      if (innerComplete) {
        try {
          active--;
          var _loop_1 = function() {
            var bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              executeSchedule(subscriber, innerSubScheduler, function() {
                return doInnerSub(bufferedValue);
              });
            } else {
              doInnerSub(bufferedValue);
            }
          };
          while (buffer.length && active < concurrent) {
            _loop_1();
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
    isComplete = true;
    checkComplete();
  }));
  return function() {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  if (isFunction(resultSelector)) {
    return mergeMap(function(a, i) {
      return map(function(b, ii) {
        return resultSelector(a, b, i, ii);
      })(innerFrom(project(a, i)));
    }, concurrent);
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return operate(function(source, subscriber) {
    return mergeInternals(source, subscriber, project, concurrent);
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  return mergeMap(identity, concurrent);
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
function concatAll() {
  return mergeAll(1);
}

// ../../node_modules/rxjs/dist/esm5/internal/observable/concat.js
function concat() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return concatAll()(from(args, popScheduler(args)));
}

// ../../node_modules/rxjs/dist/esm5/internal/observable/timer.js
function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  if (scheduler === void 0) {
    scheduler = async;
  }
  var intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable(function(subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    var n = 0;
    return scheduler.schedule(function() {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(void 0, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/take.js
function take(count) {
  return count <= 0 ? function() {
    return EMPTY;
  } : operate(function(source, subscriber) {
    var seen = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js
function ignoreElements() {
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, noop));
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
function mapTo(value) {
  return map(function() {
    return value;
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js
function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return function(source) {
      return concat(subscriptionDelay.pipe(take(1), ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
    };
  }
  return mergeMap(function(value, index) {
    return innerFrom(delayDurationSelector(value, index)).pipe(take(1), mapTo(value));
  });
}

// ../../node_modules/rxjs/dist/esm5/internal/operators/delay.js
function delay(due, scheduler) {
  if (scheduler === void 0) {
    scheduler = asyncScheduler;
  }
  var duration = timer(due, scheduler);
  return delayWhen(function() {
    return duration;
  });
}

// ../../packages/cl/src/utils/stable-callback.ts
import { useRef } from "react";
var useStableCallback = (stable) => {
  const ref = useRef(stable);
  ref.current = stable;
  const callback = useRef((...args) => ref.current(...args));
  return callback.current;
};

// ../../packages/pipescript/src/ui/moveable-view.tsx
import { createContext, useEffect, useRef as useRef2, useState } from "react";
import { Pressable } from "react-native";
var MoveableView = ({
  children,
  position: initPosition,
  onMove,
  mouseButton = 7 /* All */,
  enableScaling = false,
  wholeCanvas = false,
  innerClassName,
  outerClassName
}) => {
  const [position, setPosition] = useState({
    x: initPosition.x,
    y: initPosition.y,
    scale: initPosition.scale,
    dragPointerId: void 0,
    xDragStart: void 0,
    yDragStart: void 0,
    xPointerDragStart: void 0,
    yPointerDragStart: void 0
  });
  const startDrag = useStableCallback((e, contextScale) => {
    if (!((e.buttons ?? 0) & mouseButton)) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    const xPointer = e.clientX ?? 0;
    const yPointer = e.clientY ?? 0;
    hostRef.current?.setPointerCapture(e.pointerId ?? 0);
    setPosition((s) => ({
      ...s,
      dragPointerId: e.pointerId,
      xDragStart: s.x,
      yDragStart: s.y,
      xPointerDragStart: xPointer,
      yPointerDragStart: yPointer
    }));
  });
  const endDrag = useStableCallback((e, contextScale) => {
    if (position.dragPointerId === void 0) {
      return;
    }
    hostRef.current?.releasePointerCapture(position.dragPointerId);
    e.stopPropagation();
    e.preventDefault();
    const xPointer = e.clientX ?? 0;
    const yPointer = e.clientY ?? 0;
    setPosition((s) => ({
      ...s,
      x: (s.xDragStart ?? 0) + (xPointer - (s.xPointerDragStart ?? 0)) / contextScale,
      y: (s.yDragStart ?? 0) + (yPointer - (s.yPointerDragStart ?? 0)) / contextScale,
      dragPointerId: void 0,
      xPointerDragStart: void 0,
      yPointerDragStart: void 0
    }));
  });
  const moveDrag = useStableCallback((e, contextScale) => {
    if (position.dragPointerId === void 0) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    const xPointer = e.clientX ?? 0;
    const yPointer = e.clientY ?? 0;
    setPosition((s) => ({
      ...s,
      x: (s.xDragStart ?? 0) + (xPointer - (s.xPointerDragStart ?? 0)) / contextScale,
      y: (s.yDragStart ?? 0) + (yPointer - (s.yPointerDragStart ?? 0)) / contextScale
    }));
  });
  const scrollWheel = useStableCallback((e) => {
    const deltaY = e.deltaY;
    if (!deltaY) {
      return;
    }
    if (!enableScaling) {
      return;
    }
    setPosition((s) => ({
      ...s,
      scale: s.scale * Math.pow(0.9, deltaY > 0 ? 1 : -1)
    }));
  });
  const hostRef = useRef2(null);
  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }
    console.log(`host`, { host });
    host.onwheel = scrollWheel;
    return () => {
      host.onwheel = void 0;
    };
  }, [!hostRef.current]);
  const wholeHostRef = useRef2(null);
  useEffect(() => {
    const host = wholeHostRef.current;
    if (!host) {
      return;
    }
    console.log(`host`, { host });
    host.onwheel = scrollWheel;
    return () => {
      host.onwheel = void 0;
    };
  }, [!wholeHostRef.current]);
  return <MoveableContext.Consumer>{({ position: contextScale }) => <>
    {wholeCanvas && <Pressable
      className="fixed top-0 bottom-0 left-0 right-0"
      ref={wholeHostRef}
      onPointerDown={(e) => wholeCanvas && startDrag(e, contextScale.scale)}
      onPointerUp={(e) => endDrag(e, contextScale.scale)}
      onPointerMove={(e) => moveDrag(e, contextScale.scale)}
    />}
    <Pressable
      className={outerClassName}
      ref={hostRef}
      onPointerDown={(e) => wholeCanvas && startDrag(e, contextScale.scale)}
      onPointerUp={(e) => endDrag(e, contextScale.scale)}
      onPointerMove={(e) => moveDrag(e, contextScale.scale)}
    ><Pressable
      className={innerClassName}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`
      }}
      onPointerDown={(e) => startDrag(e, contextScale.scale)}
    ><MoveableContext.Provider value={{ position, wholeCanvas }}>{children}</MoveableContext.Provider></Pressable></Pressable>
  </>}</MoveableContext.Consumer>;
};
var MoveableContext = createContext({
  wholeCanvas: false,
  position: {
    x: 0,
    y: 0,
    scale: 1
  }
});

// ../../packages/pipescript/src/ui/work-flow-view.tsx
import React2, {
  createContext as createContext2,
  useContext,
  useLayoutEffect,
  useRef as useRef3,
  useState as useState2
} from "react";
import { View as View2, Text as Text2 } from "react-native";
var getTypeName = (type) => {
  if (type.kind === `simple`) {
    return type.type;
  }
  return JSON.stringify(type);
};
var WorkflowInputName = ({ input }) => {
  return <Text2
    className={`text-blue-300 ${input.ignored ? `line-through opacity-50` : ``}`}
  >{`${input.name}`}</Text2>;
};
var WorkFlowView = ({
  workflow,
  full = false,
  hideTitles = false
}) => {
  return <View2
    className={`flex-column relative bg-slate-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded
            `}
  >
    {!hideTitles && <Text2 className="text-yellow-400 self-center">{`${workflow.name}`}</Text2>}
    <View2 className="flex-row flex-1">
      <View2 className="flex-col justify-start items-start">{workflow.inputs.map((input) => <React2.Fragment key={input.name}><View2 className="p-1 flex-row justify-start items-center">
        <WorkflowInputName input={input} />
        <Text2 className="text-white">:</Text2>
        <Text2 className="pl-1 text-green-800">{`${getTypeName(
          input.type
        )}`}</Text2>
        <Text2 className="pl-1" />
        <View2 className=""><PipeEndpointView
          id={calculatePipeEndpointIdForWorkflow({
            workflowUri: workflow.workflowUri,
            direction: `in`,
            name: input.name
          })}
          container={workflow}
        /></View2>
        <Text2 className="pl-1" />
      </View2></React2.Fragment>)}</View2>
      <View2 className="flex-1"><View2 className="flex-col justify-center items-center">
        <View2 className="justify-center items-center"><Text2 className="text-white animate-bounce text-[8px] absolute top-2">{"\u26CF"}</Text2></View2>
        <View2 className="flex-row">{workflow.nodes.map((n) => <React2.Fragment key={n.nodeId}><View2 className="p-2"><NodeView node={n} container={workflow} /></View2></React2.Fragment>)}</View2>
      </View2></View2>
      <View2 className="flex-col justify-end items-end">{workflow.outputs.map((output) => <React2.Fragment key={output.name}><View2 className="p-1 flex-row justify-end items-center">
        {output.pipe && <>{output.pipe.kind === `data` && <Text2 className="text-purple-400">{output.pipe.json}</Text2>}</>}
        <Text2 className="pr-1" />
        <View2 className="">
          <PipeEndpointView
            id={calculatePipeEndpointIdForWorkflow({
              workflowUri: workflow.workflowUri,
              direction: `out`,
              name: output.name
            })}
            container={workflow}
          />
          {calculatePipeEndpointIdForPipeSource({
            workflow,
            pipe: output.pipe
          })?.map((sourceId) => <PipeView
            key={sourceId}
            destinationId={calculatePipeEndpointIdForWorkflow({
              workflowUri: workflow.workflowUri,
              direction: `out`,
              name: output.name
            })}
            sourceId={sourceId}
          />)}
        </View2>
        <Text2 className="pr-1" />
        <Text2 className="text-blue-300">{`${output.name}`}</Text2>
        <Text2 className="text-white">:</Text2>
        <Text2 className="pl-1 text-green-800">{`${getTypeName(
          output.type
        )}`}</Text2>
      </View2></React2.Fragment>)}</View2>
    </View2>
    {!hideTitles && <Text2 className="text-yellow-400 self-center">{`${workflow.workflowUri}`}</Text2>}
    {
      /* {workflow.workflows?.map(w => (
          <React.Fragment key={w.name}>
              <View className='absolute left-0 top-0 scale-50'>
                  <WorkFlowView workflow={w} />
              </View>
          </React.Fragment>
      ))} */
    }
  </View2>;
};
var NodeView = ({ node, container }) => {
  const [position, setPosition] = useState2({
    x: node.layout?.position.x ?? 0,
    y: node.layout?.position.y ?? 0,
    scale: node.layout?.scale ?? 1
  });
  const moveNode = useStableCallback((value) => {
    setPosition(value);
  });
  const workflow = (() => {
    if (node.implementation.kind === `workflow`) {
      const imp = node.implementation;
      return container.workflows?.find((w) => w.workflowUri === imp.workflowUri);
    }
  })();
  return <MoveableView
    position={{
      x: position.x,
      y: position.y,
      scale: position.scale
    }}
    onMove={moveNode}
    mouseButton={1 /* Left */}
  ><View2
    className="flex-column bg-zinc-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded"
    style={{
      left: position.x,
      top: position.y
      // transform: `translate(${position.x}px, ${position.y}px)`,
    }}
  >
    <View2 className="flex-row justify-center">
      {workflow && <Text2 className="text-yellow-400 self-center">{workflow.name}</Text2>}
      <Text2 className="pl-2 text-yellow-400 self-center">
        {"#"}
        {node.nodeId}
      </Text2>
    </View2>
    {workflow && <View2 className="flex-row flex-1">
      <View2 className="flex-col justify-start items-start">{workflow.inputs.map((input) => <React2.Fragment key={input.name}><View2 className="p-1 flex-row justify-center items-center relative">
        {(() => {
          const inputPipe = node.inputPipes.find(
            (p) => p.name === input.name
          );
          if (!inputPipe) {
            return void 0;
          }
          return <>{inputPipe.kind === `data` && <Text2 className="ml-[-16px] mr-[16px] text-purple-400">{inputPipe.json}</Text2>}</>;
        })()}
        <View2 className="ml-[-8px] mr-[0px]">
          <PipeEndpointView
            id={calculatePipeEndpointIdForNode({
              nodeId: node.nodeId,
              direction: `in`,
              name: input.name
            })}
            container={container}
          />
          {calculatePipeEndpointIdForPipeSource({
            workflow,
            pipe: node.inputPipes.find(
              (x) => x.name === input.name
            )
          })?.map((sourceId) => <PipeView
            key={sourceId}
            destinationId={calculatePipeEndpointIdForNode({
              nodeId: node.nodeId,
              direction: `in`,
              name: input.name
            })}
            sourceId={sourceId}
          />)}
        </View2>
        <Text2 className="pl-1" />
        <WorkflowInputName input={input} />
        {
          /* <Text className='text-white'>:</Text>
          <Text className='pl-1 text-green-800'>{`${getTypeName(
              input.type,
          )}`}</Text> */
        }
      </View2></React2.Fragment>)}</View2>
      <View2 className="flex-1"><WorkFlowView workflow={workflow} hideTitles /></View2>
      <View2 className="flex-col justify-end items-end">{workflow.outputs.map((output) => <React2.Fragment key={output.name}><View2 className="p-1 flex-row justify-center items-center relative">
        <Text2 className="text-blue-300">{`${output.name}`}</Text2>
        {
          /* <Text className='text-white'>:</Text>
          <Text className='pl-1 text-green-800'>{`${getTypeName(
              output.type,
          )}`}</Text> */
        }
        <Text2 className="pr-1" />
        <View2 className="ml-[0px] mr-[-8px]"><PipeEndpointView
          id={calculatePipeEndpointIdForNode({
            nodeId: node.nodeId,
            direction: `out`,
            name: output.name
          })}
          container={container}
        /></View2>
      </View2></React2.Fragment>)}</View2>
    </View2>}
    {
      /* <Text className='text-yellow-400 self-center'>{node.implementation.}</Text> */
    }
  </View2></MoveableView>;
};
var calculatePipeEndpointIdForNode = ({
  nodeId,
  name,
  direction
}) => {
  return `node:${nodeId}:${direction}:${name}`;
};
var calculatePipeEndpointIdForWorkflow = ({
  workflowUri,
  name,
  direction
}) => {
  return `workflow:${workflowUri}:${direction}:${name}`;
};
var calculatePipeEndpointIdForPipeSource = ({
  pipe,
  workflow
}) => {
  if (!pipe) {
    return void 0;
  }
  if (pipe.kind === `workflow-input`) {
    return pipe.workflowInputNames.map(
      (name) => calculatePipeEndpointIdForWorkflow({
        workflowUri: workflow.workflowUri,
        direction: `in`,
        name
      })
    );
  }
  if (pipe.kind === `node`) {
    return [
      calculatePipeEndpointIdForNode({
        nodeId: pipe.sourceNodeId,
        name: pipe.sourceNodeOutputName,
        direction: `out`
      })
    ];
  }
  return [];
};
var PipeEndpointsRegistry = createContext2({
  hostObservable: new Subject(),
  hostView: null,
  endpoints: {}
});
var getOrCreateEndpointSubject = (registry, id) => {
  return registry.endpoints[id] ?? (registry.endpoints[id] = new BehaviorSubject({
    x: 0,
    y: 0
  }));
};
var PipeView = ({
  sourceId,
  destinationId
}) => {
  const registry = useContext(PipeEndpointsRegistry);
  const destinationEndpoint = getOrCreateEndpointSubject(registry, destinationId);
  const sourceEndpoint = !sourceId ? void 0 : getOrCreateEndpointSubject(registry, sourceId);
  const [position, setPosition] = useState2({
    source: { x: 0, y: 0 },
    destination: { x: 0, y: 0 }
  });
  useLayoutEffect(() => {
    if (!sourceEndpoint || !destinationEndpoint) {
      console.log(`PipeView !sourceEndpoint || !destinationEndpoint`, {
        sourceId,
        destinationId,
        registry,
        sourceEndpoint,
        destinationEndpoint
      });
      return;
    }
    const init = new Subject();
    combineLatest([sourceEndpoint, destinationEndpoint, init]).subscribe(
      ([source, destination]) => {
        console.log(`PipeView draw`, { source, destination });
        setPosition({ source, destination });
      }
    );
    console.log(`initial`);
    init.next();
  }, [!destinationEndpoint, !sourceEndpoint]);
  const debug = false;
  const xDelta = position.destination.x - position.source.x;
  const yDelta = position.destination.y - position.source.y;
  const length = Math.sqrt(xDelta * xDelta + yDelta * yDelta);
  const angle = Math.atan2(yDelta, xDelta);
  return <View2 className="w-0 h-0 justify-center items-center"><View2 className="w-0 h-0 absolute">
    <View2
      style={{
        transform: `translate(${-xDelta + 4}px,${-yDelta - 2}px)`
      }}
    ><View2
      style={{
        transform: `rotate(${angle}rad)`
      }}
    ><View2
      className="bg-red-400"
      style={{
        height: 1,
        width: length
      }}
    /></View2></View2>
    {debug && <><View2 className="w-20"><Text2 className="text-white">{`(${position.source.x},${position.source.y})=>(${position.destination.x},${position.destination.y})`}</Text2></View2></>}
  </View2></View2>;
};
var PipeEndpointView = ({ id, container }) => {
  const size = 12;
  const registry = useContext(PipeEndpointsRegistry);
  const moveContext = useContext(MoveableContext);
  const targetRef = useRef3(null);
  useLayoutEffect(() => {
    const calculate = () => {
      const h = registry.hostView;
      if (!h) {
        console.log(`PipeEndpointView useLayoutEffect - host NOT READY`, { registry });
        return;
      }
      const t = targetRef.current;
      if (!t) {
        console.log(`PipeEndpointView useLayoutEffect - component NOT READY`, { registry });
        return;
      }
      t.measureLayout(h, (left, top, width, height) => {
        console.log(`PipeEndpointView useLayoutEffect measureLayout NEXT`, {
          id,
          left,
          top,
          width,
          height,
          registry
        });
        const s = getOrCreateEndpointSubject(registry, id);
        s.next({
          x: left + moveContext.position.x,
          y: top + moveContext.position.y
        });
      });
    };
    calculate();
    registry.hostObservable.subscribe((h) => {
      calculate();
    });
  }, [
    !!targetRef.current,
    moveContext.position.x,
    moveContext.position.y,
    moveContext.position.scale
  ]);
  return <View2 className="w-2 h-2 justify-center items-center"><View2 ref={targetRef} className="w-0 h-0 absolute pt-1"><View2
    className="bg-blue-400 border-[1px] border-blue-950 rounded-full"
    style={{
      width: size,
      height: size,
      marginLeft: -size / 2,
      marginTop: -size / 2
    }}
  /></View2></View2>;
};

// ../../packages/pipescript/src/ui/work-canvas-view.tsx
var WorkCanvasView = ({ workflow }) => {
  const viewRef = useRef4(null);
  const hostRef = useRef4(new Subject());
  const context2 = useRef4({
    hostObservable: hostRef.current.pipe(delay(250)),
    hostView: null,
    endpoints: {}
  });
  useLayoutEffect2(() => {
    if (!viewRef.current) {
      return;
    }
    context2.current.hostView = viewRef.current;
    hostRef.current.next(viewRef.current);
  }, [!viewRef.current]);
  return <View3 className="bg-slate-900 w-full h-full overflow-hidden"><MoveableView
    position={{
      x: 0,
      y: 0,
      scale: 1
    }}
    onMove={() => {
    }}
    mouseButton={4 /* Middle */}
    enableScaling
    wholeCanvas
    outerClassName="w-full h-full"
    innerClassName="w-full h-full"
  ><View3 ref={viewRef} className="w-full h-full justify-center items-center"><PipeEndpointsRegistry.Provider value={context2.current}><WorkFlowView workflow={workflow} full /></PipeEndpointsRegistry.Provider></View3></MoveableView></View3>;
};

// ../../packages/pipescript/index.ts
var exampleDeclarationWorkflow = ts_workflow_default;

// ../../packages/app/src/index.tsx
var App = () => {
  return <WorkCanvasView workflow={exampleDeclarationWorkflow} />;
};

// ../../node_modules/expo-status-bar/build/setStatusBarBackgroundColor.js
import { StatusBar } from "react-native";

// ../../node_modules/expo-status-bar/build/setStatusBarNetworkActivityIndicatorVisible.js
import { StatusBar as StatusBar2 } from "react-native";

// ../../node_modules/expo-status-bar/build/setStatusBarHidden.js
import { StatusBar as StatusBar3 } from "react-native";

// ../../node_modules/expo-status-bar/build/setStatusBarStyle.js
import { StatusBar as StatusBar4 } from "react-native";

// ../../node_modules/expo-status-bar/build/styleToBarStyle.js
import { Appearance } from "react-native";

// ../../node_modules/expo-status-bar/build/setStatusBarTranslucent.js
import { StatusBar as StatusBar5 } from "react-native";

// ../../packages/cl/src/index.tsx
import { useState as useState4 } from "react";
import { Pressable as Pressable4, Text as Text4, View as View4 } from "react-native";

// ../../packages/cl/src/design/tailwind/theme.ts
var tailwindTheme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
};
export {
  App,
  tailwindTheme
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdGVzdHMvY29kZS8wMDA1LWxvZ2ljLzAxLnRzLndvcmtmbG93Lmpzb24iLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvd29yay1jYW52YXMtdmlldy50c3giLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNGdW5jdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9jcmVhdGVFcnJvckNsYXNzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvYXJyUmVtb3ZlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJzY3JpcHRpb24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL2NvbmZpZy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9ub29wLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9Ob3RpZmljYXRpb25GYWN0b3JpZXMudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvZXJyb3JDb250ZXh0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJzY3JpYmVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9waXBlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9PYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2xpZnQudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL1N1YmplY3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL2RhdGVUaW1lc3RhbXBQcm92aWRlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL0FjdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL2ludGVydmFsUHJvdmlkZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlci9Bc3luY0FjdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvU2NoZWR1bGVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNTY2hlZHVsZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlci9hc3luYy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9lbXB0eS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc1NjaGVkdWxlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9hcmdzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzQXJyYXlMaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzUHJvbWlzZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzQXN5bmNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zeW1ib2wvaXRlcmF0b3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9pbm5lckZyb20udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvZXhlY3V0ZVNjaGVkdWxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvb2JzZXJ2ZU9uLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc3Vic2NyaWJlT24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZU9ic2VydmFibGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXN5bmNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVkLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNEYXRlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL21hcE9uZU9yTWFueUFyZ3MudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvYXJnc0FyZ0FycmF5T3JPYmplY3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvY3JlYXRlT2JqZWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9tZXJnZUludGVybmFscy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlTWFwLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VBbGwudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9jb25jYXRBbGwudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29ic2VydmFibGUvY29uY2F0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL3RpbWVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvdGFrZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2lnbm9yZUVsZW1lbnRzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwVG8udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9kZWxheVdoZW4udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9kZWxheS50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrLnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL21vdmVhYmxlLXZpZXcudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL3dvcmstZmxvdy12aWV3LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L2luZGV4LnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL2FwcC9zcmMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhckJhY2tncm91bmRDb2xvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJOZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhckhpZGRlbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJTdHlsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zdHlsZVRvQmFyU3R5bGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyVHJhbnNsdWNlbnQudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvY2wvc3JjL2luZGV4LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9jbC9zcmMvZGVzaWduL3RhaWx3aW5kL3RoZW1lLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG4gIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzXCIsXG4gIFwibmFtZVwiOiBcImZpbGUudHNcIixcbiAgXCJpbnB1dHNcIjogW10sXG4gIFwib3V0cHV0c1wiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICB9LFxuICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcIjNcIixcbiAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImJcIlxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJ3b3JrZmxvd3NcIjogW1xuICAgIHtcbiAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJhLWRlY2xhcmF0aW9uXCIsXG4gICAgICBcIm5hbWVcIjogXCJhLWRlY2xhcmF0aW9uXCIsXG4gICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctaW5wdXRcIixcbiAgICAgICAgICAgIFwid29ya2Zsb3dJbnB1dE5hbWVzXCI6IFtcbiAgICAgICAgICAgICAgXCJhXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5vZGVzXCI6IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICBcIndvcmtmbG93VXJpXCI6IFwiYi1kZWNsYXJhdGlvblwiLFxuICAgICAgXCJuYW1lXCI6IFwiYi1kZWNsYXJhdGlvblwiLFxuICAgICAgXCJpbnB1dHNcIjogW10sXG4gICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJub2Rlc1wiOiBbXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcIj5cIixcbiAgICAgIFwibmFtZVwiOiBcIj5cIixcbiAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJib29sXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1pbnB1dFwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd0lucHV0TmFtZXNcIjogW1xuICAgICAgICAgICAgICBcImxlZnRcIixcbiAgICAgICAgICAgICAgXCJyaWdodFwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJub2Rlc1wiOiBbXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImlmLWJvZHlcIixcbiAgICAgIFwibmFtZVwiOiBcImlmLWJvZHlcIixcbiAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcImNvbmRpdGlvblwiLFxuICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIndvcmtmbG93c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiYj1cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJiPVwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib2xkXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJpZ25vcmVkXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctaW5wdXRcIixcbiAgICAgICAgICAgICAgICBcIndvcmtmbG93SW5wdXROYW1lc1wiOiBbXG4gICAgICAgICAgICAgICAgICBcInZhbHVlXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwibm9kZXNcIjogW11cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJub2RlSWRcIjogXCIxXCIsXG4gICAgICAgICAgXCJpbXBsZW1lbnRhdGlvblwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvd1wiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImI9XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9sZFwiLFxuICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgIFwia2luZFwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgXCJqc29uXCI6IFwiNDNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgXCJub2Rlc1wiOiBbXG4gICAge1xuICAgICAgXCJub2RlSWRcIjogXCIxXCIsXG4gICAgICBcImltcGxlbWVudGF0aW9uXCI6IHtcbiAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3dcIixcbiAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImEtZGVjbGFyYXRpb25cIlxuICAgICAgfSxcbiAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgXCJraW5kXCI6IFwiZGF0YVwiLFxuICAgICAgICAgIFwianNvblwiOiBcIjQyXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJub2RlSWRcIjogXCJcIixcbiAgICAgIFwiaW1wbGVtZW50YXRpb25cIjoge1xuICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvd1wiLFxuICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiYi1kZWNsYXJhdGlvblwiXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFBpcGVzXCI6IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5vZGVJZFwiOiBcIjJcIixcbiAgICAgIFwiaW1wbGVtZW50YXRpb25cIjoge1xuICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvd1wiLFxuICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiPlwiXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCIxXCIsXG4gICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgXCJqc29uXCI6IFwiNDBcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5vZGVJZFwiOiBcIjNcIixcbiAgICAgIFwiaW1wbGVtZW50YXRpb25cIjoge1xuICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvd1wiLFxuICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiaWYtYm9keVwiXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcImNvbmRpdGlvblwiLFxuICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcIjJcIixcbiAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwidmFsdWVcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgZGVsYXkgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlVmlldyB9IGZyb20gJy4vbW92ZWFibGUtdmlldyc7XG5pbXBvcnQgeyBQaXBlRW5kcG9pbnRzUmVnaXN0cnksIFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGUsIFdvcmtGbG93VmlldyB9IGZyb20gJy4vd29yay1mbG93LXZpZXcnO1xuaW1wb3J0IHsgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgV29ya0NhbnZhc1ZpZXcgPSAoeyB3b3JrZmxvdyB9OiB7IHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3cgfSkgPT4ge1xuICAgIGNvbnN0IHZpZXdSZWYgPSB1c2VSZWYobnVsbCBhcyBudWxsIHwgVmlldyk7XG4gICAgY29uc3QgaG9zdFJlZiA9IHVzZVJlZihuZXcgU3ViamVjdDxWaWV3PigpKTtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlUmVmPFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGU+KHtcbiAgICAgICAgaG9zdE9ic2VydmFibGU6IGhvc3RSZWYuY3VycmVudC5waXBlKGRlbGF5KDI1MCkpLFxuICAgICAgICBob3N0VmlldzogbnVsbCxcbiAgICAgICAgZW5kcG9pbnRzOiB7fSxcbiAgICB9KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdmlld1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5jdXJyZW50Lmhvc3RWaWV3ID0gdmlld1JlZi5jdXJyZW50O1xuICAgICAgICBob3N0UmVmLmN1cnJlbnQubmV4dCh2aWV3UmVmLmN1cnJlbnQpO1xuICAgIH0sIFshdmlld1JlZi5jdXJyZW50XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLXNsYXRlLTkwMCB3LWZ1bGwgaC1mdWxsIG92ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgICA8TW92ZWFibGVWaWV3XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbk1vdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBtb3VzZUJ1dHRvbj17TW91c2VCdXR0b24uTWlkZGxlfVxuICAgICAgICAgICAgICAgIGVuYWJsZVNjYWxpbmdcbiAgICAgICAgICAgICAgICB3aG9sZUNhbnZhc1xuICAgICAgICAgICAgICAgIG91dGVyQ2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJ1xuICAgICAgICAgICAgICAgIGlubmVyQ2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxWaWV3IHJlZj17dmlld1JlZn0gY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRzUmVnaXN0cnkuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHQuY3VycmVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V29ya0Zsb3dWaWV3IHdvcmtmbG93PXt3b3JrZmxvd30gZnVsbCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BpcGVFbmRwb2ludHNSZWdpc3RyeS5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuIiwgIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2U7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChlbnYuc3RhY2subGVuZ3RoKSB7XG4gICAgICB2YXIgcmVjID0gZW52LnN0YWNrLnBvcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlYy5kaXNwb3NlICYmIHJlYy5kaXNwb3NlLmNhbGwocmVjLnZhbHVlKTtcbiAgICAgICAgaWYgKHJlYy5hc3luYykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbn07XG4iLCAiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZTogYW55KTogdmFsdWUgaXMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuIiwgIi8qKlxuICogVXNlZCB0byBjcmVhdGUgRXJyb3Igc3ViY2xhc3NlcyB1bnRpbCB0aGUgY29tbXVuaXR5IG1vdmVzIGF3YXkgZnJvbSBFUzUuXG4gKlxuICogVGhpcyBpcyBiZWNhdXNlIGNvbXBpbGluZyBmcm9tIFR5cGVTY3JpcHQgZG93biB0byBFUzUgaGFzIGlzc3VlcyB3aXRoIHN1YmNsYXNzaW5nIEVycm9yc1xuICogYXMgd2VsbCBhcyBvdGhlciBidWlsdC1pbiB0eXBlczogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMjEyM1xuICpcbiAqIEBwYXJhbSBjcmVhdGVJbXBsIEEgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGFjdHVhbCBjb25zdHJ1Y3RvciBpbXBsZW1lbnRhdGlvbi4gVGhlIHJldHVybmVkXG4gKiBmdW5jdGlvbiBzaG91bGQgYmUgYSBuYW1lZCBmdW5jdGlvbiB0aGF0IGNhbGxzIGBfc3VwZXJgIGludGVybmFsbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFcnJvckNsYXNzPFQ+KGNyZWF0ZUltcGw6IChfc3VwZXI6IGFueSkgPT4gYW55KTogVCB7XG4gIGNvbnN0IF9zdXBlciA9IChpbnN0YW5jZTogYW55KSA9PiB7XG4gICAgRXJyb3IuY2FsbChpbnN0YW5jZSk7XG4gICAgaW5zdGFuY2Uuc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgfTtcblxuICBjb25zdCBjdG9yRnVuYyA9IGNyZWF0ZUltcGwoX3N1cGVyKTtcbiAgY3RvckZ1bmMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICBjdG9yRnVuYy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yRnVuYztcbiAgcmV0dXJuIGN0b3JGdW5jO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUVycm9yQ2xhc3MgfSBmcm9tICcuL2NyZWF0ZUVycm9yQ2xhc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVuc3Vic2NyaXB0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHJlYWRvbmx5IGVycm9yczogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5zdWJzY3JpcHRpb25FcnJvckN0b3Ige1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLiBEbyBub3QgY29uc3RydWN0IGVycm9yIGluc3RhbmNlcy5cbiAgICogQ2Fubm90IGJlIHRhZ2dlZCBhcyBpbnRlcm5hbDogaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlWC9yeGpzL2lzc3Vlcy82MjY5XG4gICAqL1xuICBuZXcgKGVycm9yczogYW55W10pOiBVbnN1YnNjcmlwdGlvbkVycm9yO1xufVxuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIG9uZSBvciBtb3JlIGVycm9ycyBoYXZlIG9jY3VycmVkIGR1cmluZyB0aGVcbiAqIGB1bnN1YnNjcmliZWAgb2YgYSB7QGxpbmsgU3Vic2NyaXB0aW9ufS5cbiAqL1xuZXhwb3J0IGNvbnN0IFVuc3Vic2NyaXB0aW9uRXJyb3I6IFVuc3Vic2NyaXB0aW9uRXJyb3JDdG9yID0gY3JlYXRlRXJyb3JDbGFzcyhcbiAgKF9zdXBlcikgPT5cbiAgICBmdW5jdGlvbiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbCh0aGlzOiBhbnksIGVycm9yczogKEVycm9yIHwgc3RyaW5nKVtdKSB7XG4gICAgICBfc3VwZXIodGhpcyk7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvcnNcbiAgICAgICAgPyBgJHtlcnJvcnMubGVuZ3RofSBlcnJvcnMgb2NjdXJyZWQgZHVyaW5nIHVuc3Vic2NyaXB0aW9uOlxuJHtlcnJvcnMubWFwKChlcnIsIGkpID0+IGAke2kgKyAxfSkgJHtlcnIudG9TdHJpbmcoKX1gKS5qb2luKCdcXG4gICcpfWBcbiAgICAgICAgOiAnJztcbiAgICAgIHRoaXMubmFtZSA9ICdVbnN1YnNjcmlwdGlvbkVycm9yJztcbiAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH1cbik7XG4iLCAiLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhbiBhcnJheSwgbXV0YXRpbmcgaXQuXG4gKiBAcGFyYW0gYXJyIFRoZSBhcnJheSB0byByZW1vdmUgdGhlIGl0ZW0gZnJvbVxuICogQHBhcmFtIGl0ZW0gVGhlIGl0ZW0gdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJSZW1vdmU8VD4oYXJyOiBUW10gfCB1bmRlZmluZWQgfCBudWxsLCBpdGVtOiBUKSB7XG4gIGlmIChhcnIpIHtcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIDAgPD0gaW5kZXggJiYgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgVW5zdWJzY3JpcHRpb25FcnJvciB9IGZyb20gJy4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkxpa2UsIFRlYXJkb3duTG9naWMsIFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuL3V0aWwvYXJyUmVtb3ZlJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZGlzcG9zYWJsZSByZXNvdXJjZSwgc3VjaCBhcyB0aGUgZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUuIEFcbiAqIFN1YnNjcmlwdGlvbiBoYXMgb25lIGltcG9ydGFudCBtZXRob2QsIGB1bnN1YnNjcmliZWAsIHRoYXQgdGFrZXMgbm8gYXJndW1lbnRcbiAqIGFuZCBqdXN0IGRpc3Bvc2VzIHRoZSByZXNvdXJjZSBoZWxkIGJ5IHRoZSBzdWJzY3JpcHRpb24uXG4gKlxuICogQWRkaXRpb25hbGx5LCBzdWJzY3JpcHRpb25zIG1heSBiZSBncm91cGVkIHRvZ2V0aGVyIHRocm91Z2ggdGhlIGBhZGQoKWBcbiAqIG1ldGhvZCwgd2hpY2ggd2lsbCBhdHRhY2ggYSBjaGlsZCBTdWJzY3JpcHRpb24gdG8gdGhlIGN1cnJlbnQgU3Vic2NyaXB0aW9uLlxuICogV2hlbiBhIFN1YnNjcmlwdGlvbiBpcyB1bnN1YnNjcmliZWQsIGFsbCBpdHMgY2hpbGRyZW4gKGFuZCBpdHMgZ3JhbmRjaGlsZHJlbilcbiAqIHdpbGwgYmUgdW5zdWJzY3JpYmVkIGFzIHdlbGwuXG4gKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uIGltcGxlbWVudHMgU3Vic2NyaXB0aW9uTGlrZSB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBwdWJsaWMgc3RhdGljIEVNUFRZID0gKCgpID0+IHtcbiAgICBjb25zdCBlbXB0eSA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBlbXB0eS5jbG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiBlbXB0eTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogQSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhpcyBTdWJzY3JpcHRpb24gaGFzIGFscmVhZHkgYmVlbiB1bnN1YnNjcmliZWQuXG4gICAqL1xuICBwdWJsaWMgY2xvc2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcGFyZW50YWdlOiBTdWJzY3JpcHRpb25bXSB8IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiByZWdpc3RlcmVkIGZpbmFsaXplcnMgdG8gZXhlY3V0ZSB1cG9uIHVuc3Vic2NyaXB0aW9uLiBBZGRpbmcgYW5kIHJlbW92aW5nIGZyb20gdGhpc1xuICAgKiBsaXN0IG9jY3VycyBpbiB0aGUge0BsaW5rICNhZGR9IGFuZCB7QGxpbmsgI3JlbW92ZX0gbWV0aG9kcy5cbiAgICovXG4gIHByaXZhdGUgX2ZpbmFsaXplcnM6IEV4Y2x1ZGU8VGVhcmRvd25Mb2dpYywgdm9pZD5bXSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gaW5pdGlhbFRlYXJkb3duIEEgZnVuY3Rpb24gZXhlY3V0ZWQgZmlyc3QgYXMgcGFydCBvZiB0aGUgZmluYWxpemF0aW9uXG4gICAqIHByb2Nlc3MgdGhhdCBpcyBraWNrZWQgb2ZmIHdoZW4ge0BsaW5rICN1bnN1YnNjcmliZX0gaXMgY2FsbGVkLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbml0aWFsVGVhcmRvd24/OiAoKSA9PiB2b2lkKSB7fVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlcyB0aGUgcmVzb3VyY2VzIGhlbGQgYnkgdGhlIHN1YnNjcmlwdGlvbi4gTWF5LCBmb3IgaW5zdGFuY2UsIGNhbmNlbFxuICAgKiBhbiBvbmdvaW5nIE9ic2VydmFibGUgZXhlY3V0aW9uIG9yIGNhbmNlbCBhbnkgb3RoZXIgdHlwZSBvZiB3b3JrIHRoYXRcbiAgICogc3RhcnRlZCB3aGVuIHRoZSBTdWJzY3JpcHRpb24gd2FzIGNyZWF0ZWQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB1bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBsZXQgZXJyb3JzOiBhbnlbXSB8IHVuZGVmaW5lZDtcblxuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcblxuICAgICAgLy8gUmVtb3ZlIHRoaXMgZnJvbSBpdCdzIHBhcmVudHMuXG4gICAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgICBpZiAoX3BhcmVudGFnZSkge1xuICAgICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgICAgIGZvciAoY29uc3QgcGFyZW50IG9mIF9wYXJlbnRhZ2UpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9wYXJlbnRhZ2UucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgaW5pdGlhbFRlYXJkb3duOiBpbml0aWFsRmluYWxpemVyIH0gPSB0aGlzO1xuICAgICAgaWYgKGlzRnVuY3Rpb24oaW5pdGlhbEZpbmFsaXplcikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpbml0aWFsRmluYWxpemVyKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBlcnJvcnMgPSBlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvciA/IGUuZXJyb3JzIDogW2VdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgX2ZpbmFsaXplcnMgfSA9IHRoaXM7XG4gICAgICBpZiAoX2ZpbmFsaXplcnMpIHtcbiAgICAgICAgdGhpcy5fZmluYWxpemVycyA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgZmluYWxpemVyIG9mIF9maW5hbGl6ZXJzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGV4ZWNGaW5hbGl6ZXIoZmluYWxpemVyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyA/PyBbXTtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVyci5lcnJvcnNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZmluYWxpemVyIHRvIHRoaXMgc3Vic2NyaXB0aW9uLCBzbyB0aGF0IGZpbmFsaXphdGlvbiB3aWxsIGJlIHVuc3Vic2NyaWJlZC9jYWxsZWRcbiAgICogd2hlbiB0aGlzIHN1YnNjcmlwdGlvbiBpcyB1bnN1YnNjcmliZWQuIElmIHRoaXMgc3Vic2NyaXB0aW9uIGlzIGFscmVhZHkge0BsaW5rICNjbG9zZWR9LFxuICAgKiBiZWNhdXNlIGl0IGhhcyBhbHJlYWR5IGJlZW4gdW5zdWJzY3JpYmVkLCB0aGVuIHdoYXRldmVyIGZpbmFsaXplciBpcyBwYXNzZWQgdG8gaXRcbiAgICogd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGV4ZWN1dGVkICh1bmxlc3MgdGhlIGZpbmFsaXplciBpdHNlbGYgaXMgYWxzbyBhIGNsb3NlZCBzdWJzY3JpcHRpb24pLlxuICAgKlxuICAgKiBDbG9zZWQgU3Vic2NyaXB0aW9ucyBjYW5ub3QgYmUgYWRkZWQgYXMgZmluYWxpemVycyB0byBhbnkgc3Vic2NyaXB0aW9uLiBBZGRpbmcgYSBjbG9zZWRcbiAgICogc3Vic2NyaXB0aW9uIHRvIGEgYW55IHN1YnNjcmlwdGlvbiB3aWxsIHJlc3VsdCBpbiBubyBvcGVyYXRpb24uIChBIG5vb3ApLlxuICAgKlxuICAgKiBBZGRpbmcgYSBzdWJzY3JpcHRpb24gdG8gaXRzZWxmLCBvciBhZGRpbmcgYG51bGxgIG9yIGB1bmRlZmluZWRgIHdpbGwgbm90IHBlcmZvcm0gYW55XG4gICAqIG9wZXJhdGlvbiBhdCBhbGwuIChBIG5vb3ApLlxuICAgKlxuICAgKiBgU3Vic2NyaXB0aW9uYCBpbnN0YW5jZXMgdGhhdCBhcmUgYWRkZWQgdG8gdGhpcyBpbnN0YW5jZSB3aWxsIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZW1zZWx2ZXNcbiAgICogaWYgdGhleSBhcmUgdW5zdWJzY3JpYmVkLiBGdW5jdGlvbnMgYW5kIHtAbGluayBVbnN1YnNjcmliYWJsZX0gb2JqZWN0cyB0aGF0IHlvdSB3aXNoIHRvIHJlbW92ZVxuICAgKiB3aWxsIG5lZWQgdG8gYmUgcmVtb3ZlZCBtYW51YWxseSB3aXRoIHtAbGluayAjcmVtb3ZlfVxuICAgKlxuICAgKiBAcGFyYW0gdGVhcmRvd24gVGhlIGZpbmFsaXphdGlvbiBsb2dpYyB0byBhZGQgdG8gdGhpcyBzdWJzY3JpcHRpb24uXG4gICAqL1xuICBhZGQodGVhcmRvd246IFRlYXJkb3duTG9naWMpOiB2b2lkIHtcbiAgICAvLyBPbmx5IGFkZCB0aGUgZmluYWxpemVyIGlmIGl0J3Mgbm90IHVuZGVmaW5lZFxuICAgIC8vIGFuZCBkb24ndCBhZGQgYSBzdWJzY3JpcHRpb24gdG8gaXRzZWxmLlxuICAgIGlmICh0ZWFyZG93biAmJiB0ZWFyZG93biAhPT0gdGhpcykge1xuICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgIC8vIElmIHRoaXMgc3Vic2NyaXB0aW9uIGlzIGFscmVhZHkgY2xvc2VkLFxuICAgICAgICAvLyBleGVjdXRlIHdoYXRldmVyIGZpbmFsaXplciBpcyBoYW5kZWQgdG8gaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgZXhlY0ZpbmFsaXplcih0ZWFyZG93bik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAvLyBXZSBkb24ndCBhZGQgY2xvc2VkIHN1YnNjcmlwdGlvbnMsIGFuZCB3ZSBkb24ndCBhZGQgdGhlIHNhbWUgc3Vic2NyaXB0aW9uXG4gICAgICAgICAgLy8gdHdpY2UuIFN1YnNjcmlwdGlvbiB1bnN1YnNjcmliZSBpcyBpZGVtcG90ZW50LlxuICAgICAgICAgIGlmICh0ZWFyZG93bi5jbG9zZWQgfHwgdGVhcmRvd24uX2hhc1BhcmVudCh0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZWFyZG93bi5fYWRkUGFyZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgICh0aGlzLl9maW5hbGl6ZXJzID0gdGhpcy5fZmluYWxpemVycyA/PyBbXSkucHVzaCh0ZWFyZG93bik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgYSB0aGlzIHN1YnNjcmlwdGlvbiBhbHJlYWR5IGhhcyBhIHBhcnRpY3VsYXIgcGFyZW50LlxuICAgKiBUaGlzIHdpbGwgc2lnbmFsIHRoYXQgdGhpcyBzdWJzY3JpcHRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgcGFyZW50IGluIHF1ZXN0aW9uLlxuICAgKiBAcGFyYW0gcGFyZW50IHRoZSBwYXJlbnQgdG8gY2hlY2sgZm9yXG4gICAqL1xuICBwcml2YXRlIF9oYXNQYXJlbnQocGFyZW50OiBTdWJzY3JpcHRpb24pIHtcbiAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgcmV0dXJuIF9wYXJlbnRhZ2UgPT09IHBhcmVudCB8fCAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSAmJiBfcGFyZW50YWdlLmluY2x1ZGVzKHBhcmVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwYXJlbnQgdG8gdGhpcyBzdWJzY3JpcHRpb24gc28gaXQgY2FuIGJlIHJlbW92ZWQgZnJvbSB0aGUgcGFyZW50IGlmIGl0XG4gICAqIHVuc3Vic2NyaWJlcyBvbiBpdCdzIG93bi5cbiAgICpcbiAgICogTk9URTogVEhJUyBBU1NVTUVTIFRIQVQge0BsaW5rIF9oYXNQYXJlbnR9IEhBUyBBTFJFQURZIEJFRU4gQ0hFQ0tFRC5cbiAgICogQHBhcmFtIHBhcmVudCBUaGUgcGFyZW50IHN1YnNjcmlwdGlvbiB0byBhZGRcbiAgICovXG4gIHByaXZhdGUgX2FkZFBhcmVudChwYXJlbnQ6IFN1YnNjcmlwdGlvbikge1xuICAgIGNvbnN0IHsgX3BhcmVudGFnZSB9ID0gdGhpcztcbiAgICB0aGlzLl9wYXJlbnRhZ2UgPSBBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpID8gKF9wYXJlbnRhZ2UucHVzaChwYXJlbnQpLCBfcGFyZW50YWdlKSA6IF9wYXJlbnRhZ2UgPyBbX3BhcmVudGFnZSwgcGFyZW50XSA6IHBhcmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gYSBjaGlsZCB3aGVuIGl0IGlzIHJlbW92ZWQgdmlhIHtAbGluayAjcmVtb3ZlfS5cbiAgICogQHBhcmFtIHBhcmVudCBUaGUgcGFyZW50IHRvIHJlbW92ZVxuICAgKi9cbiAgcHJpdmF0ZSBfcmVtb3ZlUGFyZW50KHBhcmVudDogU3Vic2NyaXB0aW9uKSB7XG4gICAgY29uc3QgeyBfcGFyZW50YWdlIH0gPSB0aGlzO1xuICAgIGlmIChfcGFyZW50YWdlID09PSBwYXJlbnQpIHtcbiAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICBhcnJSZW1vdmUoX3BhcmVudGFnZSwgcGFyZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGZpbmFsaXplciBmcm9tIHRoaXMgc3Vic2NyaXB0aW9uIHRoYXQgd2FzIHByZXZpb3VzbHkgYWRkZWQgd2l0aCB0aGUge0BsaW5rICNhZGR9IG1ldGhvZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGBTdWJzY3JpcHRpb25gIGluc3RhbmNlcywgd2hlbiB1bnN1YnNjcmliZWQsIHdpbGwgYXV0b21hdGljYWxseSByZW1vdmUgdGhlbXNlbHZlc1xuICAgKiBmcm9tIGV2ZXJ5IG90aGVyIGBTdWJzY3JpcHRpb25gIHRoZXkgaGF2ZSBiZWVuIGFkZGVkIHRvLiBUaGlzIG1lYW5zIHRoYXQgdXNpbmcgdGhlIGByZW1vdmVgIG1ldGhvZFxuICAgKiBpcyBub3QgYSBjb21tb24gdGhpbmcgYW5kIHNob3VsZCBiZSB1c2VkIHRob3VnaHRmdWxseS5cbiAgICpcbiAgICogSWYgeW91IGFkZCB0aGUgc2FtZSBmaW5hbGl6ZXIgaW5zdGFuY2Ugb2YgYSBmdW5jdGlvbiBvciBhbiB1bnN1YnNjcmliYWJsZSBvYmplY3QgdG8gYSBgU3Vic2NyaXB0aW9uYCBpbnN0YW5jZVxuICAgKiBtb3JlIHRoYW4gb25jZSwgeW91IHdpbGwgbmVlZCB0byBjYWxsIGByZW1vdmVgIHRoZSBzYW1lIG51bWJlciBvZiB0aW1lcyB0byByZW1vdmUgYWxsIGluc3RhbmNlcy5cbiAgICpcbiAgICogQWxsIGZpbmFsaXplciBpbnN0YW5jZXMgYXJlIHJlbW92ZWQgdG8gZnJlZSB1cCBtZW1vcnkgdXBvbiB1bnN1YnNjcmlwdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHRlYXJkb3duIFRoZSBmaW5hbGl6ZXIgdG8gcmVtb3ZlIGZyb20gdGhpcyBzdWJzY3JpcHRpb25cbiAgICovXG4gIHJlbW92ZSh0ZWFyZG93bjogRXhjbHVkZTxUZWFyZG93bkxvZ2ljLCB2b2lkPik6IHZvaWQge1xuICAgIGNvbnN0IHsgX2ZpbmFsaXplcnMgfSA9IHRoaXM7XG4gICAgX2ZpbmFsaXplcnMgJiYgYXJyUmVtb3ZlKF9maW5hbGl6ZXJzLCB0ZWFyZG93bik7XG5cbiAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRlYXJkb3duLl9yZW1vdmVQYXJlbnQodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVUJTQ1JJUFRJT04gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N1YnNjcmlwdGlvbih2YWx1ZTogYW55KTogdmFsdWUgaXMgU3Vic2NyaXB0aW9uIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbiB8fFxuICAgICh2YWx1ZSAmJiAnY2xvc2VkJyBpbiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnJlbW92ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS5hZGQpICYmIGlzRnVuY3Rpb24odmFsdWUudW5zdWJzY3JpYmUpKVxuICApO1xufVxuXG5mdW5jdGlvbiBleGVjRmluYWxpemVyKGZpbmFsaXplcjogVW5zdWJzY3JpYmFibGUgfCAoKCkgPT4gdm9pZCkpIHtcbiAgaWYgKGlzRnVuY3Rpb24oZmluYWxpemVyKSkge1xuICAgIGZpbmFsaXplcigpO1xuICB9IGVsc2Uge1xuICAgIGZpbmFsaXplci51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlTm90aWZpY2F0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogVGhlIHtAbGluayBHbG9iYWxDb25maWd9IG9iamVjdCBmb3IgUnhKUy4gSXQgaXMgdXNlZCB0byBjb25maWd1cmUgdGhpbmdzXG4gKiBsaWtlIGhvdyB0byByZWFjdCBvbiB1bmhhbmRsZWQgZXJyb3JzLlxuICovXG5leHBvcnQgY29uc3QgY29uZmlnOiBHbG9iYWxDb25maWcgPSB7XG4gIG9uVW5oYW5kbGVkRXJyb3I6IG51bGwsXG4gIG9uU3RvcHBlZE5vdGlmaWNhdGlvbjogbnVsbCxcbiAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nOiBmYWxzZSxcbiAgdXNlRGVwcmVjYXRlZE5leHRDb250ZXh0OiBmYWxzZSxcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgUnhKUywgdXNlZCB0byBjb25maWd1cmUgdGhpbmdzXG4gKiBsaWtlIGhvdyB0byByZWFjdCBvbiB1bmhhbmRsZWQgZXJyb3JzLiBBY2Nlc3NpYmxlIHZpYSB7QGxpbmsgY29uZmlnfVxuICogb2JqZWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbENvbmZpZyB7XG4gIC8qKlxuICAgKiBBIHJlZ2lzdHJhdGlvbiBwb2ludCBmb3IgdW5oYW5kbGVkIGVycm9ycyBmcm9tIFJ4SlMuIFRoZXNlIGFyZSBlcnJvcnMgdGhhdFxuICAgKiBjYW5ub3Qgd2VyZSBub3QgaGFuZGxlZCBieSBjb25zdW1pbmcgY29kZSBpbiB0aGUgdXN1YWwgc3Vic2NyaXB0aW9uIHBhdGguIEZvclxuICAgKiBleGFtcGxlLCBpZiB5b3UgaGF2ZSB0aGlzIGNvbmZpZ3VyZWQsIGFuZCB5b3Ugc3Vic2NyaWJlIHRvIGFuIG9ic2VydmFibGUgd2l0aG91dFxuICAgKiBwcm92aWRpbmcgYW4gZXJyb3IgaGFuZGxlciwgZXJyb3JzIGZyb20gdGhhdCBzdWJzY3JpcHRpb24gd2lsbCBlbmQgdXAgaGVyZS4gVGhpc1xuICAgKiB3aWxsIF9hbHdheXNfIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseSBvbiBhbm90aGVyIGpvYiBpbiB0aGUgcnVudGltZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAqIHdlIGRvIG5vdCB3YW50IGVycm9ycyB0aHJvd24gaW4gdGhpcyB1c2VyLWNvbmZpZ3VyZWQgaGFuZGxlciB0byBpbnRlcmZlcmUgd2l0aCB0aGVcbiAgICogYmVoYXZpb3Igb2YgdGhlIGxpYnJhcnkuXG4gICAqL1xuICBvblVuaGFuZGxlZEVycm9yOiAoKGVycjogYW55KSA9PiB2b2lkKSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEEgcmVnaXN0cmF0aW9uIHBvaW50IGZvciBub3RpZmljYXRpb25zIHRoYXQgY2Fubm90IGJlIHNlbnQgdG8gc3Vic2NyaWJlcnMgYmVjYXVzZSB0aGV5XG4gICAqIGhhdmUgY29tcGxldGVkLCBlcnJvcmVkIG9yIGhhdmUgYmVlbiBleHBsaWNpdGx5IHVuc3Vic2NyaWJlZC4gQnkgZGVmYXVsdCwgbmV4dCwgY29tcGxldGVcbiAgICogYW5kIGVycm9yIG5vdGlmaWNhdGlvbnMgc2VudCB0byBzdG9wcGVkIHN1YnNjcmliZXJzIGFyZSBub29wcy4gSG93ZXZlciwgc29tZXRpbWVzIGNhbGxlcnNcbiAgICogbWlnaHQgd2FudCBhIGRpZmZlcmVudCBiZWhhdmlvci4gRm9yIGV4YW1wbGUsIHdpdGggc291cmNlcyB0aGF0IGF0dGVtcHQgdG8gcmVwb3J0IGVycm9yc1xuICAgKiB0byBzdG9wcGVkIHN1YnNjcmliZXJzLCBhIGNhbGxlciBjYW4gY29uZmlndXJlIFJ4SlMgdG8gdGhyb3cgYW4gdW5oYW5kbGVkIGVycm9yIGluc3RlYWQuXG4gICAqIFRoaXMgd2lsbCBfYWx3YXlzXyBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkgb24gYW5vdGhlciBqb2IgaW4gdGhlIHJ1bnRpbWUuIFRoaXMgaXMgYmVjYXVzZVxuICAgKiB3ZSBkbyBub3Qgd2FudCBlcnJvcnMgdGhyb3duIGluIHRoaXMgdXNlci1jb25maWd1cmVkIGhhbmRsZXIgdG8gaW50ZXJmZXJlIHdpdGggdGhlXG4gICAqIGJlaGF2aW9yIG9mIHRoZSBsaWJyYXJ5LlxuICAgKi9cbiAgb25TdG9wcGVkTm90aWZpY2F0aW9uOiAoKG5vdGlmaWNhdGlvbjogT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbjxhbnk+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHZvaWQpIHwgbnVsbDtcblxuICAvKipcbiAgICogVGhlIHByb21pc2UgY29uc3RydWN0b3IgdXNlZCBieSBkZWZhdWx0IGZvciB7QGxpbmsgT2JzZXJ2YWJsZSN0b1Byb21pc2UgdG9Qcm9taXNlfSBhbmQge0BsaW5rIE9ic2VydmFibGUjZm9yRWFjaCBmb3JFYWNofVxuICAgKiBtZXRob2RzLlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBBcyBvZiB2ZXJzaW9uIDgsIFJ4SlMgd2lsbCBubyBsb25nZXIgc3VwcG9ydCB0aGlzIHNvcnQgb2YgaW5qZWN0aW9uIG9mIGFcbiAgICogUHJvbWlzZSBjb25zdHJ1Y3Rvci4gSWYgeW91IG5lZWQgYSBQcm9taXNlIGltcGxlbWVudGF0aW9uIG90aGVyIHRoYW4gbmF0aXZlIHByb21pc2VzLFxuICAgKiBwbGVhc2UgcG9seWZpbGwvcGF0Y2ggUHJvbWlzZSBhcyB5b3Ugc2VlIGFwcHJvcHJpYXRlLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gICAqL1xuICBQcm9taXNlPzogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZTtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgdHVybnMgb24gc3luY2hyb25vdXMgZXJyb3IgcmV0aHJvd2luZywgd2hpY2ggaXMgYSBkZXByZWNhdGVkIGJlaGF2aW9yXG4gICAqIGluIHY2IGFuZCBoaWdoZXIuIFRoaXMgYmVoYXZpb3IgZW5hYmxlcyBiYWQgcGF0dGVybnMgbGlrZSB3cmFwcGluZyBhIHN1YnNjcmliZVxuICAgKiBjYWxsIGluIGEgdHJ5L2NhdGNoIGJsb2NrLiBJdCBhbHNvIGVuYWJsZXMgcHJvZHVjZXIgaW50ZXJmZXJlbmNlLCBhIG5hc3R5IGJ1Z1xuICAgKiB3aGVyZSBhIG11bHRpY2FzdCBjYW4gYmUgYnJva2VuIGZvciBhbGwgb2JzZXJ2ZXJzIGJ5IGEgZG93bnN0cmVhbSBjb25zdW1lciB3aXRoXG4gICAqIGFuIHVuaGFuZGxlZCBlcnJvci4gRE8gTk9UIFVTRSBUSElTIEZMQUcgVU5MRVNTIElUJ1MgTkVFREVEIFRPIEJVWSBUSU1FXG4gICAqIEZPUiBNSUdSQVRJT04gUkVBU09OUy5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgQXMgb2YgdmVyc2lvbiA4LCBSeEpTIHdpbGwgbm8gbG9uZ2VyIHN1cHBvcnQgc3luY2hyb25vdXMgdGhyb3dpbmdcbiAgICogb2YgdW5oYW5kbGVkIGVycm9ycy4gQWxsIGVycm9ycyB3aWxsIGJlIHRocm93biBvbiBhIHNlcGFyYXRlIGNhbGwgc3RhY2sgdG8gcHJldmVudCBiYWRcbiAgICogYmVoYXZpb3JzIGRlc2NyaWJlZCBhYm92ZS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgZW5hYmxlcyBhbiBhcy1vZi15ZXQgdW5kb2N1bWVudGVkIGZlYXR1cmUgZnJvbSB2NTogVGhlIGFiaWxpdHkgdG8gYWNjZXNzXG4gICAqIGB1bnN1YnNjcmliZSgpYCB2aWEgYHRoaXNgIGNvbnRleHQgaW4gYG5leHRgIGZ1bmN0aW9ucyBjcmVhdGVkIGluIG9ic2VydmVycyBwYXNzZWRcbiAgICogdG8gYHN1YnNjcmliZWAuXG4gICAqXG4gICAqIFRoaXMgaXMgYmVpbmcgcmVtb3ZlZCBiZWNhdXNlIHRoZSBwZXJmb3JtYW5jZSB3YXMgc2V2ZXJlbHkgcHJvYmxlbWF0aWMsIGFuZCBpdCBjb3VsZCBhbHNvIGNhdXNlXG4gICAqIGlzc3VlcyB3aGVuIHR5cGVzIG90aGVyIHRoYW4gUE9KT3MgYXJlIHBhc3NlZCB0byBzdWJzY3JpYmUgYXMgc3Vic2NyaWJlcnMsIGFzIHRoZXkgd2lsbCBsaWtlbHkgaGF2ZVxuICAgKiB0aGVpciBgdGhpc2AgY29udGV4dCBvdmVyd3JpdHRlbi5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgQXMgb2YgdmVyc2lvbiA4LCBSeEpTIHdpbGwgbm8gbG9uZ2VyIHN1cHBvcnQgYWx0ZXJpbmcgdGhlXG4gICAqIGNvbnRleHQgb2YgbmV4dCBmdW5jdGlvbnMgcHJvdmlkZWQgYXMgcGFydCBvZiBhbiBvYnNlcnZlciB0byBTdWJzY3JpYmUuIEluc3RlYWQsXG4gICAqIHlvdSB3aWxsIGhhdmUgYWNjZXNzIHRvIGEgc3Vic2NyaXB0aW9uIG9yIGEgc2lnbmFsIG9yIHRva2VuIHRoYXQgd2lsbCBhbGxvdyB5b3UgdG8gZG8gdGhpbmdzIGxpa2VcbiAgICogdW5zdWJzY3JpYmUgYW5kIHRlc3QgY2xvc2VkIHN0YXR1cy4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgdXNlRGVwcmVjYXRlZE5leHRDb250ZXh0OiBib29sZWFuO1xufVxuIiwgImltcG9ydCB0eXBlIHsgVGltZXJIYW5kbGUgfSBmcm9tICcuL3RpbWVySGFuZGxlJztcbnR5cGUgU2V0VGltZW91dEZ1bmN0aW9uID0gKGhhbmRsZXI6ICgpID0+IHZvaWQsIHRpbWVvdXQ/OiBudW1iZXIsIC4uLmFyZ3M6IGFueVtdKSA9PiBUaW1lckhhbmRsZTtcbnR5cGUgQ2xlYXJUaW1lb3V0RnVuY3Rpb24gPSAoaGFuZGxlOiBUaW1lckhhbmRsZSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIFRpbWVvdXRQcm92aWRlciB7XG4gIHNldFRpbWVvdXQ6IFNldFRpbWVvdXRGdW5jdGlvbjtcbiAgY2xlYXJUaW1lb3V0OiBDbGVhclRpbWVvdXRGdW5jdGlvbjtcbiAgZGVsZWdhdGU6XG4gICAgfCB7XG4gICAgICAgIHNldFRpbWVvdXQ6IFNldFRpbWVvdXRGdW5jdGlvbjtcbiAgICAgICAgY2xlYXJUaW1lb3V0OiBDbGVhclRpbWVvdXRGdW5jdGlvbjtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IHRpbWVvdXRQcm92aWRlcjogVGltZW91dFByb3ZpZGVyID0ge1xuICAvLyBXaGVuIGFjY2Vzc2luZyB0aGUgZGVsZWdhdGUsIHVzZSB0aGUgdmFyaWFibGUgcmF0aGVyIHRoYW4gYHRoaXNgIHNvIHRoYXRcbiAgLy8gdGhlIGZ1bmN0aW9ucyBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgYmVpbmcgYm91bmQgdG8gdGhlIHByb3ZpZGVyLlxuICBzZXRUaW1lb3V0KGhhbmRsZXI6ICgpID0+IHZvaWQsIHRpbWVvdXQ/OiBudW1iZXIsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCB7IGRlbGVnYXRlIH0gPSB0aW1lb3V0UHJvdmlkZXI7XG4gICAgaWYgKGRlbGVnYXRlPy5zZXRUaW1lb3V0KSB7XG4gICAgICByZXR1cm4gZGVsZWdhdGUuc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCwgLi4uYXJncyk7XG4gIH0sXG4gIGNsZWFyVGltZW91dChoYW5kbGUpIHtcbiAgICBjb25zdCB7IGRlbGVnYXRlIH0gPSB0aW1lb3V0UHJvdmlkZXI7XG4gICAgcmV0dXJuIChkZWxlZ2F0ZT8uY2xlYXJUaW1lb3V0IHx8IGNsZWFyVGltZW91dCkoaGFuZGxlIGFzIGFueSk7XG4gIH0sXG4gIGRlbGVnYXRlOiB1bmRlZmluZWQsXG59O1xuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcblxuLyoqXG4gKiBIYW5kbGVzIGFuIGVycm9yIG9uIGFub3RoZXIgam9iIGVpdGhlciB3aXRoIHRoZSB1c2VyLWNvbmZpZ3VyZWQge0BsaW5rIG9uVW5oYW5kbGVkRXJyb3J9LFxuICogb3IgYnkgdGhyb3dpbmcgaXQgb24gdGhhdCBuZXcgam9iIHNvIGl0IGNhbiBiZSBwaWNrZWQgdXAgYnkgYHdpbmRvdy5vbmVycm9yYCwgYHByb2Nlc3Mub24oJ2Vycm9yJylgLCBldGMuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZXJlIGlzIGFuIGVycm9yIHRoYXQgaXMgb3V0LW9mLWJhbmQgd2l0aCB0aGUgc3Vic2NyaXB0aW9uXG4gKiBvciB3aGVuIGFuIGVycm9yIGhpdHMgYSB0ZXJtaW5hbCBib3VuZGFyeSBvZiB0aGUgc3Vic2NyaXB0aW9uIGFuZCBubyBlcnJvciBoYW5kbGVyIHdhcyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0gZXJyIHRoZSBlcnJvciB0byByZXBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycjogYW55KSB7XG4gIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCB7IG9uVW5oYW5kbGVkRXJyb3IgfSA9IGNvbmZpZztcbiAgICBpZiAob25VbmhhbmRsZWRFcnJvcikge1xuICAgICAgLy8gRXhlY3V0ZSB0aGUgdXNlci1jb25maWd1cmVkIGVycm9yIGhhbmRsZXIuXG4gICAgICBvblVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRocm93IHNvIGl0IGlzIHBpY2tlZCB1cCBieSB0aGUgcnVudGltZSdzIHVuY2F1Z2h0IGVycm9yIG1lY2hhbmlzbS5cbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH0pO1xufVxuIiwgIi8qIHRzbGludDpkaXNhYmxlOm5vLWVtcHR5ICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxuIiwgImltcG9ydCB7IENvbXBsZXRlTm90aWZpY2F0aW9uLCBOZXh0Tm90aWZpY2F0aW9uLCBFcnJvck5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEEgY29tcGxldGlvbiBvYmplY3Qgb3B0aW1pemVkIGZvciBtZW1vcnkgdXNlIGFuZCBjcmVhdGVkIHRvIGJlIHRoZVxuICogc2FtZSBcInNoYXBlXCIgYXMgb3RoZXIgbm90aWZpY2F0aW9ucyBpbiB2OC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgQ09NUExFVEVfTk9USUZJQ0FUSU9OID0gKCgpID0+IGNyZWF0ZU5vdGlmaWNhdGlvbignQycsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKSBhcyBDb21wbGV0ZU5vdGlmaWNhdGlvbikoKTtcblxuLyoqXG4gKiBJbnRlcm5hbCB1c2Ugb25seS4gQ3JlYXRlcyBhbiBvcHRpbWl6ZWQgZXJyb3Igbm90aWZpY2F0aW9uIHRoYXQgaXMgdGhlIHNhbWUgXCJzaGFwZVwiXG4gKiBhcyBvdGhlciBub3RpZmljYXRpb25zLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvck5vdGlmaWNhdGlvbihlcnJvcjogYW55KTogRXJyb3JOb3RpZmljYXRpb24ge1xuICByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdFJywgdW5kZWZpbmVkLCBlcnJvcikgYXMgYW55O1xufVxuXG4vKipcbiAqIEludGVybmFsIHVzZSBvbmx5LiBDcmVhdGVzIGFuIG9wdGltaXplZCBuZXh0IG5vdGlmaWNhdGlvbiB0aGF0IGlzIHRoZSBzYW1lIFwic2hhcGVcIlxuICogYXMgb3RoZXIgbm90aWZpY2F0aW9ucy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dE5vdGlmaWNhdGlvbjxUPih2YWx1ZTogVCkge1xuICByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdOJywgdmFsdWUsIHVuZGVmaW5lZCkgYXMgTmV4dE5vdGlmaWNhdGlvbjxUPjtcbn1cblxuLyoqXG4gKiBFbnN1cmVzIHRoYXQgYWxsIG5vdGlmaWNhdGlvbnMgY3JlYXRlZCBpbnRlcm5hbGx5IGhhdmUgdGhlIHNhbWUgXCJzaGFwZVwiIGluIHY4LlxuICpcbiAqIFRPRE86IFRoaXMgaXMgb25seSBleHBvcnRlZCB0byBzdXBwb3J0IGEgY3JhenkgbGVnYWN5IHRlc3QgaW4gYGdyb3VwQnlgLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb24oa2luZDogJ04nIHwgJ0UnIHwgJ0MnLCB2YWx1ZTogYW55LCBlcnJvcjogYW55KSB7XG4gIHJldHVybiB7XG4gICAga2luZCxcbiAgICB2YWx1ZSxcbiAgICBlcnJvcixcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5sZXQgY29udGV4dDogeyBlcnJvclRocm93bjogYm9vbGVhbjsgZXJyb3I6IGFueSB9IHwgbnVsbCA9IG51bGw7XG5cbi8qKlxuICogSGFuZGxlcyBkZWFsaW5nIHdpdGggZXJyb3JzIGZvciBzdXBlci1ncm9zcyBtb2RlLiBDcmVhdGVzIGEgY29udGV4dCwgaW4gd2hpY2hcbiAqIGFueSBzeW5jaHJvbm91c2x5IHRocm93biBlcnJvcnMgd2lsbCBiZSBwYXNzZWQgdG8ge0BsaW5rIGNhcHR1cmVFcnJvcn0uIFdoaWNoXG4gKiB3aWxsIHJlY29yZCB0aGUgZXJyb3Igc3VjaCB0aGF0IGl0IHdpbGwgYmUgcmV0aHJvd24gYWZ0ZXIgdGhlIGNhbGwgYmFjayBpcyBjb21wbGV0ZS5cbiAqIFRPRE86IFJlbW92ZSBpbiB2OFxuICogQHBhcmFtIGNiIEFuIGltbWVkaWF0ZWx5IGV4ZWN1dGVkIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JDb250ZXh0KGNiOiAoKSA9PiB2b2lkKSB7XG4gIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgIGNvbnN0IGlzUm9vdCA9ICFjb250ZXh0O1xuICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgIGNvbnRleHQgPSB7IGVycm9yVGhyb3duOiBmYWxzZSwgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgY2IoKTtcbiAgICBpZiAoaXNSb290KSB7XG4gICAgICBjb25zdCB7IGVycm9yVGhyb3duLCBlcnJvciB9ID0gY29udGV4dCE7XG4gICAgICBjb250ZXh0ID0gbnVsbDtcbiAgICAgIGlmIChlcnJvclRocm93bikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgZ2VuZXJhbCBub24tZGVwcmVjYXRlZCBwYXRoIGZvciBldmVyeW9uZSB0aGF0XG4gICAgLy8gaXNuJ3QgY3JhenkgZW5vdWdoIHRvIHVzZSBzdXBlci1ncm9zcyBtb2RlICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKVxuICAgIGNiKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDYXB0dXJlcyBlcnJvcnMgb25seSBpbiBzdXBlci1ncm9zcyBtb2RlLlxuICogQHBhcmFtIGVyciB0aGUgZXJyb3IgdG8gY2FwdHVyZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUVycm9yKGVycjogYW55KSB7XG4gIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiBjb250ZXh0KSB7XG4gICAgY29udGV4dC5lcnJvclRocm93biA9IHRydWU7XG4gICAgY29udGV4dC5lcnJvciA9IGVycjtcbiAgfVxufVxuIiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZlciwgT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24sIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWwvbm9vcCc7XG5pbXBvcnQgeyBuZXh0Tm90aWZpY2F0aW9uLCBlcnJvck5vdGlmaWNhdGlvbiwgQ09NUExFVEVfTk9USUZJQ0FUSU9OIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25GYWN0b3JpZXMnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcbmltcG9ydCB7IGNhcHR1cmVFcnJvciB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xuXG4vKipcbiAqIEltcGxlbWVudHMgdGhlIHtAbGluayBPYnNlcnZlcn0gaW50ZXJmYWNlIGFuZCBleHRlbmRzIHRoZVxuICoge0BsaW5rIFN1YnNjcmlwdGlvbn0gY2xhc3MuIFdoaWxlIHRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGlzIHRoZSBwdWJsaWMgQVBJIGZvclxuICogY29uc3VtaW5nIHRoZSB2YWx1ZXMgb2YgYW4ge0BsaW5rIE9ic2VydmFibGV9LCBhbGwgT2JzZXJ2ZXJzIGdldCBjb252ZXJ0ZWQgdG9cbiAqIGEgU3Vic2NyaWJlciwgaW4gb3JkZXIgdG8gcHJvdmlkZSBTdWJzY3JpcHRpb24tbGlrZSBjYXBhYmlsaXRpZXMgc3VjaCBhc1xuICogYHVuc3Vic2NyaWJlYC4gU3Vic2NyaWJlciBpcyBhIGNvbW1vbiB0eXBlIGluIFJ4SlMsIGFuZCBjcnVjaWFsIGZvclxuICogaW1wbGVtZW50aW5nIG9wZXJhdG9ycywgYnV0IGl0IGlzIHJhcmVseSB1c2VkIGFzIGEgcHVibGljIEFQSS5cbiAqXG4gKiBAY2xhc3MgU3Vic2NyaWJlcjxUPlxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmlwdGlvbiBpbXBsZW1lbnRzIE9ic2VydmVyPFQ+IHtcbiAgLyoqXG4gICAqIEEgc3RhdGljIGZhY3RvcnkgZm9yIGEgU3Vic2NyaWJlciwgZ2l2ZW4gYSAocG90ZW50aWFsbHkgcGFydGlhbCkgZGVmaW5pdGlvblxuICAgKiBvZiBhbiBPYnNlcnZlci5cbiAgICogQHBhcmFtIG5leHQgVGhlIGBuZXh0YCBjYWxsYmFjayBvZiBhbiBPYnNlcnZlci5cbiAgICogQHBhcmFtIGVycm9yIFRoZSBgZXJyb3JgIGNhbGxiYWNrIG9mIGFuXG4gICAqIE9ic2VydmVyLlxuICAgKiBAcGFyYW0gY29tcGxldGUgVGhlIGBjb21wbGV0ZWAgY2FsbGJhY2sgb2YgYW5cbiAgICogT2JzZXJ2ZXIuXG4gICAqIEByZXR1cm4gQSBTdWJzY3JpYmVyIHdyYXBwaW5nIHRoZSAocGFydGlhbGx5IGRlZmluZWQpXG4gICAqIE9ic2VydmVyIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiBhcmd1bWVudHMuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBkZXByZWNhdGVkIERvIG5vdCB1c2UuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVGhlcmUgaXMgbm8gcmVwbGFjZW1lbnQgZm9yIHRoaXNcbiAgICogbWV0aG9kLCBhbmQgdGhlcmUgaXMgbm8gcmVhc29uIHRvIGJlIGNyZWF0aW5nIGluc3RhbmNlcyBvZiBgU3Vic2NyaWJlcmAgZGlyZWN0bHkuXG4gICAqIElmIHlvdSBoYXZlIGEgc3BlY2lmaWMgdXNlIGNhc2UsIHBsZWFzZSBmaWxlIGFuIGlzc3VlLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTxUPihuZXh0PzogKHg/OiBUKSA9PiB2b2lkLCBlcnJvcj86IChlPzogYW55KSA9PiB2b2lkLCBjb21wbGV0ZT86ICgpID0+IHZvaWQpOiBTdWJzY3JpYmVyPFQ+IHtcbiAgICByZXR1cm4gbmV3IFNhZmVTdWJzY3JpYmVyKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIHByb3RlY3RlZCBpc1N0b3BwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBwcm90ZWN0ZWQgZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55PiB8IE9ic2VydmVyPGFueT47IC8vIHRoaXMgYGFueWAgaXMgdGhlIGVzY2FwZSBoYXRjaCB0byBlcmFzZSBleHRyYSB0eXBlIHBhcmFtIChlLmcuIFIpXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LlxuICAgKiBUaGVyZSBpcyBubyByZWFzb24gdG8gZGlyZWN0bHkgY3JlYXRlIGFuIGluc3RhbmNlIG9mIFN1YnNjcmliZXIuIFRoaXMgdHlwZSBpcyBleHBvcnRlZCBmb3IgdHlwaW5ncyByZWFzb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24/OiBTdWJzY3JpYmVyPGFueT4gfCBPYnNlcnZlcjxhbnk+KSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoZGVzdGluYXRpb24pIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgY2hhaW4gc3Vic2NyaXB0aW9ucyB0b2dldGhlciBoZXJlLlxuICAgICAgLy8gaWYgZGVzdGluYXRpb24gaXMgYSBTdWJzY3JpcHRpb24sIHRoZW4gaXQgaXMgYSBTdWJzY3JpYmVyLlxuICAgICAgaWYgKGlzU3Vic2NyaXB0aW9uKGRlc3RpbmF0aW9uKSkge1xuICAgICAgICBkZXN0aW5hdGlvbi5hZGQodGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBFTVBUWV9PQlNFUlZFUjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBub3RpZmljYXRpb25zIG9mIHR5cGUgYG5leHRgIGZyb21cbiAgICogdGhlIE9ic2VydmFibGUsIHdpdGggYSB2YWx1ZS4gVGhlIE9ic2VydmFibGUgbWF5IGNhbGwgdGhpcyBtZXRob2QgMCBvciBtb3JlXG4gICAqIHRpbWVzLlxuICAgKiBAcGFyYW0ge1R9IFt2YWx1ZV0gVGhlIGBuZXh0YCB2YWx1ZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIG5leHQodmFsdWU/OiBUKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5leHROb3RpZmljYXRpb24odmFsdWUpLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmV4dCh2YWx1ZSEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIG5vdGlmaWNhdGlvbnMgb2YgdHlwZSBgZXJyb3JgIGZyb21cbiAgICogdGhlIE9ic2VydmFibGUsIHdpdGggYW4gYXR0YWNoZWQgYEVycm9yYC4gTm90aWZpZXMgdGhlIE9ic2VydmVyIHRoYXRcbiAgICogdGhlIE9ic2VydmFibGUgaGFzIGV4cGVyaWVuY2VkIGFuIGVycm9yIGNvbmRpdGlvbi5cbiAgICogQHBhcmFtIHthbnl9IFtlcnJdIFRoZSBgZXJyb3JgIGV4Y2VwdGlvbi5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGVycm9yKGVycj86IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihlcnJvck5vdGlmaWNhdGlvbihlcnIpLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBhIHZhbHVlbGVzcyBub3RpZmljYXRpb24gb2YgdHlwZVxuICAgKiBgY29tcGxldGVgIGZyb20gdGhlIE9ic2VydmFibGUuIE5vdGlmaWVzIHRoZSBPYnNlcnZlciB0aGF0IHRoZSBPYnNlcnZhYmxlXG4gICAqIGhhcyBmaW5pc2hlZCBzZW5kaW5nIHB1c2gtYmFzZWQgbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNvbXBsZXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihDT01QTEVURV9OT1RJRklDQVRJT04sIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHN1cGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbnVsbCE7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZXJyb3IoZXJyOiBhbnkpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGhpcyBiaW5kIGlzIGNhcHR1cmVkIGhlcmUgYmVjYXVzZSB3ZSB3YW50IHRvIGJlIGFibGUgdG8gaGF2ZVxuICogY29tcGF0aWJpbGl0eSB3aXRoIG1vbm9pZCBsaWJyYXJpZXMgdGhhdCB0ZW5kIHRvIHVzZSBhIG1ldGhvZCBuYW1lZFxuICogYGJpbmRgLiBJbiBwYXJ0aWN1bGFyLCBhIGxpYnJhcnkgY2FsbGVkIE1vbmlvIHJlcXVpcmVzIHRoaXMuXG4gKi9cbmNvbnN0IF9iaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG5cbmZ1bmN0aW9uIGJpbmQ8Rm4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4oZm46IEZuLCB0aGlzQXJnOiBhbnkpOiBGbiB7XG4gIHJldHVybiBfYmluZC5jYWxsKGZuLCB0aGlzQXJnKTtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBvcHRpbWl6YXRpb24gb25seSwgRE8gTk9UIEVYUE9TRS5cbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBDb25zdW1lck9ic2VydmVyPFQ+IGltcGxlbWVudHMgT2JzZXJ2ZXI8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcnRpYWxPYnNlcnZlcjogUGFydGlhbDxPYnNlcnZlcjxUPj4pIHt9XG5cbiAgbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFydGlhbE9ic2VydmVyIH0gPSB0aGlzO1xuICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIubmV4dCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgY29uc3QgeyBwYXJ0aWFsT2JzZXJ2ZXIgfSA9IHRoaXM7XG4gICAgaWYgKHBhcnRpYWxPYnNlcnZlci5lcnJvcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgY29tcGxldGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBwYXJ0aWFsT2JzZXJ2ZXIgfSA9IHRoaXM7XG4gICAgaWYgKHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWZlU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBvYnNlcnZlck9yTmV4dD86IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+IHwgKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGVycm9yPzogKChlPzogYW55KSA9PiB2b2lkKSB8IG51bGwsXG4gICAgY29tcGxldGU/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gICkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBsZXQgcGFydGlhbE9ic2VydmVyOiBQYXJ0aWFsPE9ic2VydmVyPFQ+PjtcbiAgICBpZiAoaXNGdW5jdGlvbihvYnNlcnZlck9yTmV4dCkgfHwgIW9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAvLyBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiwgbm90IGFuIG9ic2VydmVyLiBUaGUgbmV4dFxuICAgICAgLy8gdHdvIGFyZ3VtZW50cyAqY291bGQqIGJlIG9ic2VydmVycywgb3IgdGhleSBjb3VsZCBiZSBlbXB0eS5cbiAgICAgIHBhcnRpYWxPYnNlcnZlciA9IHtcbiAgICAgICAgbmV4dDogKG9ic2VydmVyT3JOZXh0ID8/IHVuZGVmaW5lZCkgYXMgKCgodmFsdWU6IFQpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSxcbiAgICAgICAgZXJyb3I6IGVycm9yID8/IHVuZGVmaW5lZCxcbiAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlID8/IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIHBhcnRpYWwgb2JzZXJ2ZXIuXG4gICAgICBsZXQgY29udGV4dDogYW55O1xuICAgICAgaWYgKHRoaXMgJiYgY29uZmlnLnVzZURlcHJlY2F0ZWROZXh0Q29udGV4dCkge1xuICAgICAgICAvLyBUaGlzIGlzIGEgZGVwcmVjYXRlZCBwYXRoIHRoYXQgbWFkZSBgdGhpcy51bnN1YnNjcmliZSgpYCBhdmFpbGFibGUgaW5cbiAgICAgICAgLy8gbmV4dCBoYW5kbGVyIGZ1bmN0aW9ucyBwYXNzZWQgdG8gc3Vic2NyaWJlLiBUaGlzIG9ubHkgZXhpc3RzIGJlaGluZCBhIGZsYWdcbiAgICAgICAgLy8gbm93LCBhcyBpdCBpcyAqdmVyeSogc2xvdy5cbiAgICAgICAgY29udGV4dCA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICBjb250ZXh0LnVuc3Vic2NyaWJlID0gKCkgPT4gdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgbmV4dDogb2JzZXJ2ZXJPck5leHQubmV4dCAmJiBiaW5kKG9ic2VydmVyT3JOZXh0Lm5leHQsIGNvbnRleHQpLFxuICAgICAgICAgIGVycm9yOiBvYnNlcnZlck9yTmV4dC5lcnJvciAmJiBiaW5kKG9ic2VydmVyT3JOZXh0LmVycm9yLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21wbGV0ZTogb2JzZXJ2ZXJPck5leHQuY29tcGxldGUgJiYgYmluZChvYnNlcnZlck9yTmV4dC5jb21wbGV0ZSwgY29udGV4dCksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGUgXCJub3JtYWxcIiBwYXRoLiBKdXN0IHVzZSB0aGUgcGFydGlhbCBvYnNlcnZlciBkaXJlY3RseS5cbiAgICAgICAgcGFydGlhbE9ic2VydmVyID0gb2JzZXJ2ZXJPck5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV3JhcCB0aGUgcGFydGlhbCBvYnNlcnZlciB0byBlbnN1cmUgaXQncyBhIGZ1bGwgb2JzZXJ2ZXIsIGFuZFxuICAgIC8vIG1ha2Ugc3VyZSBwcm9wZXIgZXJyb3IgaGFuZGxpbmcgaXMgYWNjb3VudGVkIGZvci5cbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IENvbnN1bWVyT2JzZXJ2ZXIocGFydGlhbE9ic2VydmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcjogYW55KSB7XG4gIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgIGNhcHR1cmVFcnJvcihlcnJvcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWRlYWwgcGF0aCwgd2UgcmVwb3J0IHRoaXMgYXMgYW4gdW5oYW5kbGVkIGVycm9yLFxuICAgIC8vIHdoaWNoIGlzIHRocm93biBvbiBhIG5ldyBjYWxsIHN0YWNrLlxuICAgIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGVycm9yIGhhbmRsZXIgdXNlZCB3aGVuIG5vIGVycm9yIGhhbmRsZXIgd2FzIHN1cHBsaWVkXG4gKiB0byB0aGUgU2FmZVN1YnNjcmliZXIgLS0gbWVhbmluZyBubyBlcnJvciBoYW5kbGVyIHdhcyBzdXBwbGllZFxuICogZG8gdGhlIGBzdWJzY3JpYmVgIGNhbGwgb24gb3VyIG9ic2VydmFibGUuXG4gKiBAcGFyYW0gZXJyIFRoZSBlcnJvciB0byBoYW5kbGVcbiAqL1xuZnVuY3Rpb24gZGVmYXVsdEVycm9ySGFuZGxlcihlcnI6IGFueSkge1xuICB0aHJvdyBlcnI7XG59XG5cbi8qKlxuICogQSBoYW5kbGVyIGZvciBub3RpZmljYXRpb25zIHRoYXQgY2Fubm90IGJlIHNlbnQgdG8gYSBzdG9wcGVkIHN1YnNjcmliZXIuXG4gKiBAcGFyYW0gbm90aWZpY2F0aW9uIFRoZSBub3RpZmljYXRpb24gYmVpbmcgc2VudFxuICogQHBhcmFtIHN1YnNjcmliZXIgVGhlIHN0b3BwZWQgc3Vic2NyaWJlclxuICovXG5mdW5jdGlvbiBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbjxhbnk+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pIHtcbiAgY29uc3QgeyBvblN0b3BwZWROb3RpZmljYXRpb24gfSA9IGNvbmZpZztcbiAgb25TdG9wcGVkTm90aWZpY2F0aW9uICYmIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KCgpID0+IG9uU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIHN1YnNjcmliZXIpKTtcbn1cblxuLyoqXG4gKiBUaGUgb2JzZXJ2ZXIgdXNlZCBhcyBhIHN0dWIgZm9yIHN1YnNjcmlwdGlvbnMgd2hlcmUgdGhlIHVzZXIgZGlkIG5vdFxuICogcGFzcyBhbnkgYXJndW1lbnRzIHRvIGBzdWJzY3JpYmVgLiBDb21lcyB3aXRoIHRoZSBkZWZhdWx0IGVycm9yIGhhbmRsaW5nXG4gKiBiZWhhdmlvci5cbiAqL1xuZXhwb3J0IGNvbnN0IEVNUFRZX09CU0VSVkVSOiBSZWFkb25seTxPYnNlcnZlcjxhbnk+PiAmIHsgY2xvc2VkOiB0cnVlIH0gPSB7XG4gIGNsb3NlZDogdHJ1ZSxcbiAgbmV4dDogbm9vcCxcbiAgZXJyb3I6IGRlZmF1bHRFcnJvckhhbmRsZXIsXG4gIGNvbXBsZXRlOiBub29wLFxufTtcbiIsICIvKipcbiAqIFN5bWJvbC5vYnNlcnZhYmxlIG9yIGEgc3RyaW5nIFwiQEBvYnNlcnZhYmxlXCIuIFVzZWQgZm9yIGludGVyb3BcbiAqXG4gKiBAZGVwcmVjYXRlZCBXZSB3aWxsIG5vIGxvbmdlciBiZSBleHBvcnRpbmcgdGhpcyBzeW1ib2wgaW4gdXBjb21pbmcgdmVyc2lvbnMgb2YgUnhKUy5cbiAqIEluc3RlYWQgcG9seWZpbGwgYW5kIHVzZSBTeW1ib2wub2JzZXJ2YWJsZSBkaXJlY3RseSAqb3IqIHVzZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9zeW1ib2wtb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgY29uc3Qgb2JzZXJ2YWJsZTogc3RyaW5nIHwgc3ltYm9sID0gKCgpID0+ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlKSB8fCAnQEBvYnNlcnZhYmxlJykoKTtcbiIsICIvKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgb25lIHBhcmFtZXRlciBhbmQganVzdCByZXR1cm5zIGl0LiBTaW1wbHkgcHV0LFxuICogdGhpcyBpcyBsaWtlIGA8VD4oeDogVCk6IFQgPT4geGAuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCBpbiBzb21lIGNhc2VzIHdoZW4gdXNpbmcgdGhpbmdzIGxpa2UgYG1lcmdlTWFwYFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSwgbWFwLCByYW5nZSwgbWVyZ2VNYXAsIGlkZW50aXR5IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSg1KSk7XG4gKlxuICogY29uc3QgcmVzdWx0JCA9IHNvdXJjZSQucGlwZShcbiAqICAgbWFwKGkgPT4gcmFuZ2UoaSkpLFxuICogICBtZXJnZU1hcChpZGVudGl0eSkgLy8gc2FtZSBhcyBtZXJnZU1hcCh4ID0+IHgpXG4gKiApO1xuICpcbiAqIHJlc3VsdCQuc3Vic2NyaWJlKHtcbiAqICAgbmV4dDogY29uc29sZS5sb2dcbiAqIH0pO1xuICogYGBgXG4gKlxuICogT3Igd2hlbiB5b3Ugd2FudCB0byBzZWxlY3RpdmVseSBhcHBseSBhbiBvcGVyYXRvclxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSwgaWRlbnRpdHkgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBzaG91bGRMaW1pdCA9ICgpID0+IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gKlxuICogY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApO1xuICpcbiAqIGNvbnN0IHJlc3VsdCQgPSBzb3VyY2UkLnBpcGUoc2hvdWxkTGltaXQoKSA/IHRha2UoNSkgOiBpZGVudGl0eSk7XG4gKlxuICogcmVzdWx0JC5zdWJzY3JpYmUoe1xuICogICBuZXh0OiBjb25zb2xlLmxvZ1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0geCBBbnkgdmFsdWUgdGhhdCBpcyByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyBUaGUgdmFsdWUgcGFzc2VkIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIgdG8gdGhpcyBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk8VD4oeDogVCk6IFQge1xuICByZXR1cm4geDtcbn1cbiIsICJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknO1xuaW1wb3J0IHsgVW5hcnlGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoKTogdHlwZW9mIGlkZW50aXR5O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQT4oZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+KTogVW5hcnlGdW5jdGlvbjxULCBBPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEI+KGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPiwgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+KTogVW5hcnlGdW5jdGlvbjxULCBCPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEM+KGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPiwgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LCBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4pOiBVbmFyeUZ1bmN0aW9uPFQsIEM+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRD4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPlxuKTogVW5hcnlGdW5jdGlvbjxULCBEPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEU+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPlxuKTogVW5hcnlGdW5jdGlvbjxULCBFPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEY+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEY+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRiwgRz4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj4sXG4gIGZuNzogVW5hcnlGdW5jdGlvbjxGLCBHPlxuKTogVW5hcnlGdW5jdGlvbjxULCBHPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz4sXG4gIGZuODogVW5hcnlGdW5jdGlvbjxHLCBIPlxuKTogVW5hcnlGdW5jdGlvbjxULCBIPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz4sXG4gIGZuODogVW5hcnlGdW5jdGlvbjxHLCBIPixcbiAgZm45OiBVbmFyeUZ1bmN0aW9uPEgsIEk+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEk+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRiwgRywgSCwgST4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj4sXG4gIGZuNzogVW5hcnlGdW5jdGlvbjxGLCBHPixcbiAgZm44OiBVbmFyeUZ1bmN0aW9uPEcsIEg+LFxuICBmbjk6IFVuYXJ5RnVuY3Rpb248SCwgST4sXG4gIC4uLmZuczogVW5hcnlGdW5jdGlvbjxhbnksIGFueT5bXVxuKTogVW5hcnlGdW5jdGlvbjxULCB1bmtub3duPjtcblxuLyoqXG4gKiBwaXBlKCkgY2FuIGJlIGNhbGxlZCBvbiBvbmUgb3IgbW9yZSBmdW5jdGlvbnMsIGVhY2ggb2Ygd2hpY2ggY2FuIHRha2Ugb25lIGFyZ3VtZW50IChcIlVuYXJ5RnVuY3Rpb25cIilcbiAqIGFuZCB1c2VzIGl0IHRvIHJldHVybiBhIHZhbHVlLlxuICogSXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgb25lIGFyZ3VtZW50LCBwYXNzZXMgaXQgdG8gdGhlIGZpcnN0IFVuYXJ5RnVuY3Rpb24sIGFuZCB0aGVuXG4gKiBwYXNzZXMgdGhlIHJlc3VsdCB0byB0aGUgbmV4dCBvbmUsIHBhc3NlcyB0aGF0IHJlc3VsdCB0byB0aGUgbmV4dCBvbmUsIGFuZCBzbyBvbi4gIFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGlwZSguLi5mbnM6IEFycmF5PFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+Pik6IFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+IHtcbiAgcmV0dXJuIHBpcGVGcm9tQXJyYXkoZm5zKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGVGcm9tQXJyYXk8VCwgUj4oZm5zOiBBcnJheTxVbmFyeUZ1bmN0aW9uPFQsIFI+Pik6IFVuYXJ5RnVuY3Rpb248VCwgUj4ge1xuICBpZiAoZm5zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBpZGVudGl0eSBhcyBVbmFyeUZ1bmN0aW9uPGFueSwgYW55PjtcbiAgfVxuXG4gIGlmIChmbnMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZuc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwaXBlZChpbnB1dDogVCk6IFIge1xuICAgIHJldHVybiBmbnMucmVkdWNlKChwcmV2OiBhbnksIGZuOiBVbmFyeUZ1bmN0aW9uPFQsIFI+KSA9PiBmbihwcmV2KSwgaW5wdXQgYXMgYW55KTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBPcGVyYXRvciB9IGZyb20gJy4vT3BlcmF0b3InO1xuaW1wb3J0IHsgU2FmZVN1YnNjcmliZXIsIFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24sIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFRlYXJkb3duTG9naWMsIE9wZXJhdG9yRnVuY3Rpb24sIFN1YnNjcmliYWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IHBpcGVGcm9tQXJyYXkgfSBmcm9tICcuL3V0aWwvcGlwZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgZXJyb3JDb250ZXh0IH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG5cbi8qKlxuICogQSByZXByZXNlbnRhdGlvbiBvZiBhbnkgc2V0IG9mIHZhbHVlcyBvdmVyIGFueSBhbW91bnQgb2YgdGltZS4gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBidWlsZGluZyBibG9ja1xuICogb2YgUnhKUy5cbiAqXG4gKiBAY2xhc3MgT2JzZXJ2YWJsZTxUPlxuICovXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIFN1YnNjcmliYWJsZTxUPiB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICovXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICovXG4gIG9wZXJhdG9yOiBPcGVyYXRvcjxhbnksIFQ+IHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3Vic2NyaWJlIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBPYnNlcnZhYmxlIGlzXG4gICAqIGluaXRpYWxseSBzdWJzY3JpYmVkIHRvLiBUaGlzIGZ1bmN0aW9uIGlzIGdpdmVuIGEgU3Vic2NyaWJlciwgdG8gd2hpY2ggbmV3IHZhbHVlc1xuICAgKiBjYW4gYmUgYG5leHRgZWQsIG9yIGFuIGBlcnJvcmAgbWV0aG9kIGNhbiBiZSBjYWxsZWQgdG8gcmFpc2UgYW4gZXJyb3IsIG9yXG4gICAqIGBjb21wbGV0ZWAgY2FuIGJlIGNhbGxlZCB0byBub3RpZnkgb2YgYSBzdWNjZXNzZnVsIGNvbXBsZXRpb24uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdWJzY3JpYmU/OiAodGhpczogT2JzZXJ2YWJsZTxUPiwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4gVGVhcmRvd25Mb2dpYykge1xuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICB9XG4gIH1cblxuICAvLyBIQUNLOiBTaW5jZSBUeXBlU2NyaXB0IGluaGVyaXRzIHN0YXRpYyBwcm9wZXJ0aWVzIHRvbywgd2UgaGF2ZSB0b1xuICAvLyBmaWdodCBhZ2FpbnN0IFR5cGVTY3JpcHQgaGVyZSBzbyBTdWJqZWN0IGNhbiBoYXZlIGEgZGlmZmVyZW50IHN0YXRpYyBjcmVhdGUgc2lnbmF0dXJlXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE9ic2VydmFibGUgYnkgY2FsbGluZyB0aGUgT2JzZXJ2YWJsZSBjb25zdHJ1Y3RvclxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJzY3JpYmU/IHRoZSBzdWJzY3JpYmVyIGZ1bmN0aW9uIHRvIGJlIHBhc3NlZCB0byB0aGUgT2JzZXJ2YWJsZSBjb25zdHJ1Y3RvclxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhIG5ldyBvYnNlcnZhYmxlXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgbmV3IE9ic2VydmFibGUoKWAgaW5zdGVhZC4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgPSA8VD4oc3Vic2NyaWJlPzogKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IFRlYXJkb3duTG9naWMpID0+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oc3Vic2NyaWJlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlLCB3aXRoIHRoaXMgT2JzZXJ2YWJsZSBpbnN0YW5jZSBhcyB0aGUgc291cmNlLCBhbmQgdGhlIHBhc3NlZFxuICAgKiBvcGVyYXRvciBkZWZpbmVkIGFzIHRoZSBuZXcgb2JzZXJ2YWJsZSdzIG9wZXJhdG9yLlxuICAgKiBAbWV0aG9kIGxpZnRcbiAgICogQHBhcmFtIG9wZXJhdG9yIHRoZSBvcGVyYXRvciBkZWZpbmluZyB0aGUgb3BlcmF0aW9uIHRvIHRha2Ugb24gdGhlIG9ic2VydmFibGVcbiAgICogQHJldHVybiBhIG5ldyBvYnNlcnZhYmxlIHdpdGggdGhlIE9wZXJhdG9yIGFwcGxpZWRcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gICAqIElmIHlvdSBoYXZlIGltcGxlbWVudGVkIGFuIG9wZXJhdG9yIHVzaW5nIGBsaWZ0YCwgaXQgaXMgcmVjb21tZW5kZWQgdGhhdCB5b3UgY3JlYXRlIGFuXG4gICAqIG9wZXJhdG9yIGJ5IHNpbXBseSByZXR1cm5pbmcgYG5ldyBPYnNlcnZhYmxlKClgIGRpcmVjdGx5LiBTZWUgXCJDcmVhdGluZyBuZXcgb3BlcmF0b3JzIGZyb21cbiAgICogc2NyYXRjaFwiIHNlY3Rpb24gaGVyZTogaHR0cHM6Ly9yeGpzLmRldi9ndWlkZS9vcGVyYXRvcnNcbiAgICovXG4gIGxpZnQ8Uj4ob3BlcmF0b3I/OiBPcGVyYXRvcjxULCBSPik6IE9ic2VydmFibGU8Uj4ge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxSPigpO1xuICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH1cblxuICBzdWJzY3JpYmUob2JzZXJ2ZXJPck5leHQ/OiBQYXJ0aWFsPE9ic2VydmVyPFQ+PiB8ICgodmFsdWU6IFQpID0+IHZvaWQpKTogU3Vic2NyaXB0aW9uO1xuICAvKiogQGRlcHJlY2F0ZWQgSW5zdGVhZCBvZiBwYXNzaW5nIHNlcGFyYXRlIGNhbGxiYWNrIGFyZ3VtZW50cywgdXNlIGFuIG9ic2VydmVyIGFyZ3VtZW50LiBTaWduYXR1cmVzIHRha2luZyBzZXBhcmF0ZSBjYWxsYmFjayBhcmd1bWVudHMgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zdWJzY3JpYmUtYXJndW1lbnRzICovXG4gIHN1YnNjcmliZShuZXh0PzogKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCBudWxsLCBlcnJvcj86ICgoZXJyb3I6IGFueSkgPT4gdm9pZCkgfCBudWxsLCBjb21wbGV0ZT86ICgoKSA9PiB2b2lkKSB8IG51bGwpOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBJbnZva2VzIGFuIGV4ZWN1dGlvbiBvZiBhbiBPYnNlcnZhYmxlIGFuZCByZWdpc3RlcnMgT2JzZXJ2ZXIgaGFuZGxlcnMgZm9yIG5vdGlmaWNhdGlvbnMgaXQgd2lsbCBlbWl0LlxuICAgKlxuICAgKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+VXNlIGl0IHdoZW4geW91IGhhdmUgYWxsIHRoZXNlIE9ic2VydmFibGVzLCBidXQgc3RpbGwgbm90aGluZyBpcyBoYXBwZW5pbmcuPC9zcGFuPlxuICAgKlxuICAgKiBgc3Vic2NyaWJlYCBpcyBub3QgYSByZWd1bGFyIG9wZXJhdG9yLCBidXQgYSBtZXRob2QgdGhhdCBjYWxscyBPYnNlcnZhYmxlJ3MgaW50ZXJuYWwgYHN1YnNjcmliZWAgZnVuY3Rpb24uIEl0XG4gICAqIG1pZ2h0IGJlIGZvciBleGFtcGxlIGEgZnVuY3Rpb24gdGhhdCB5b3UgcGFzc2VkIHRvIE9ic2VydmFibGUncyBjb25zdHJ1Y3RvciwgYnV0IG1vc3Qgb2YgdGhlIHRpbWUgaXQgaXNcbiAgICogYSBsaWJyYXJ5IGltcGxlbWVudGF0aW9uLCB3aGljaCBkZWZpbmVzIHdoYXQgd2lsbCBiZSBlbWl0dGVkIGJ5IGFuIE9ic2VydmFibGUsIGFuZCB3aGVuIGl0IGJlIHdpbGwgZW1pdHRlZC4gVGhpcyBtZWFuc1xuICAgKiB0aGF0IGNhbGxpbmcgYHN1YnNjcmliZWAgaXMgYWN0dWFsbHkgdGhlIG1vbWVudCB3aGVuIE9ic2VydmFibGUgc3RhcnRzIGl0cyB3b3JrLCBub3Qgd2hlbiBpdCBpcyBjcmVhdGVkLCBhcyBpdCBpcyBvZnRlblxuICAgKiB0aGUgdGhvdWdodC5cbiAgICpcbiAgICogQXBhcnQgZnJvbSBzdGFydGluZyB0aGUgZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUsIHRoaXMgbWV0aG9kIGFsbG93cyB5b3UgdG8gbGlzdGVuIGZvciB2YWx1ZXNcbiAgICogdGhhdCBhbiBPYnNlcnZhYmxlIGVtaXRzLCBhcyB3ZWxsIGFzIGZvciB3aGVuIGl0IGNvbXBsZXRlcyBvciBlcnJvcnMuIFlvdSBjYW4gYWNoaWV2ZSB0aGlzIGluIHR3b1xuICAgKiBvZiB0aGUgZm9sbG93aW5nIHdheXMuXG4gICAqXG4gICAqIFRoZSBmaXJzdCB3YXkgaXMgY3JlYXRpbmcgYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB7QGxpbmsgT2JzZXJ2ZXJ9IGludGVyZmFjZS4gSXQgc2hvdWxkIGhhdmUgbWV0aG9kc1xuICAgKiBkZWZpbmVkIGJ5IHRoYXQgaW50ZXJmYWNlLCBidXQgbm90ZSB0aGF0IGl0IHNob3VsZCBiZSBqdXN0IGEgcmVndWxhciBKYXZhU2NyaXB0IG9iamVjdCwgd2hpY2ggeW91IGNhbiBjcmVhdGVcbiAgICogeW91cnNlbGYgaW4gYW55IHdheSB5b3Ugd2FudCAoRVM2IGNsYXNzLCBjbGFzc2ljIGZ1bmN0aW9uIGNvbnN0cnVjdG9yLCBvYmplY3QgbGl0ZXJhbCBldGMuKS4gSW4gcGFydGljdWxhciwgZG9cbiAgICogbm90IGF0dGVtcHQgdG8gdXNlIGFueSBSeEpTIGltcGxlbWVudGF0aW9uIGRldGFpbHMgdG8gY3JlYXRlIE9ic2VydmVycyAtIHlvdSBkb24ndCBuZWVkIHRoZW0uIFJlbWVtYmVyIGFsc29cbiAgICogdGhhdCB5b3VyIG9iamVjdCBkb2VzIG5vdCBoYXZlIHRvIGltcGxlbWVudCBhbGwgbWV0aG9kcy4gSWYgeW91IGZpbmQgeW91cnNlbGYgY3JlYXRpbmcgYSBtZXRob2QgdGhhdCBkb2Vzbid0XG4gICAqIGRvIGFueXRoaW5nLCB5b3UgY2FuIHNpbXBseSBvbWl0IGl0LiBOb3RlIGhvd2V2ZXIsIGlmIHRoZSBgZXJyb3JgIG1ldGhvZCBpcyBub3QgcHJvdmlkZWQgYW5kIGFuIGVycm9yIGhhcHBlbnMsXG4gICAqIGl0IHdpbGwgYmUgdGhyb3duIGFzeW5jaHJvbm91c2x5LiBFcnJvcnMgdGhyb3duIGFzeW5jaHJvbm91c2x5IGNhbm5vdCBiZSBjYXVnaHQgdXNpbmcgYHRyeWAvYGNhdGNoYC4gSW5zdGVhZCxcbiAgICogdXNlIHRoZSB7QGxpbmsgb25VbmhhbmRsZWRFcnJvcn0gY29uZmlndXJhdGlvbiBvcHRpb24gb3IgdXNlIGEgcnVudGltZSBoYW5kbGVyIChsaWtlIGB3aW5kb3cub25lcnJvcmAgb3JcbiAgICogYHByb2Nlc3Mub24oJ2Vycm9yKWApIHRvIGJlIG5vdGlmaWVkIG9mIHVuaGFuZGxlZCBlcnJvcnMuIEJlY2F1c2Ugb2YgdGhpcywgaXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBwcm92aWRlXG4gICAqIGFuIGBlcnJvcmAgbWV0aG9kIHRvIGF2b2lkIG1pc3NpbmcgdGhyb3duIGVycm9ycy5cbiAgICpcbiAgICogVGhlIHNlY29uZCB3YXkgaXMgdG8gZ2l2ZSB1cCBvbiBPYnNlcnZlciBvYmplY3QgYWx0b2dldGhlciBhbmQgc2ltcGx5IHByb3ZpZGUgY2FsbGJhY2sgZnVuY3Rpb25zIGluIHBsYWNlIG9mIGl0cyBtZXRob2RzLlxuICAgKiBUaGlzIG1lYW5zIHlvdSBjYW4gcHJvdmlkZSB0aHJlZSBmdW5jdGlvbnMgYXMgYXJndW1lbnRzIHRvIGBzdWJzY3JpYmVgLCB3aGVyZSB0aGUgZmlyc3QgZnVuY3Rpb24gaXMgZXF1aXZhbGVudFxuICAgKiBvZiBhIGBuZXh0YCBtZXRob2QsIHRoZSBzZWNvbmQgb2YgYW4gYGVycm9yYCBtZXRob2QgYW5kIHRoZSB0aGlyZCBvZiBhIGBjb21wbGV0ZWAgbWV0aG9kLiBKdXN0IGFzIGluIGNhc2Ugb2YgYW4gT2JzZXJ2ZXIsXG4gICAqIGlmIHlvdSBkbyBub3QgbmVlZCB0byBsaXN0ZW4gZm9yIHNvbWV0aGluZywgeW91IGNhbiBvbWl0IGEgZnVuY3Rpb24gYnkgcGFzc2luZyBgdW5kZWZpbmVkYCBvciBgbnVsbGAsXG4gICAqIHNpbmNlIGBzdWJzY3JpYmVgIHJlY29nbml6ZXMgdGhlc2UgZnVuY3Rpb25zIGJ5IHdoZXJlIHRoZXkgd2VyZSBwbGFjZWQgaW4gZnVuY3Rpb24gY2FsbC4gV2hlbiBpdCBjb21lc1xuICAgKiB0byB0aGUgYGVycm9yYCBmdW5jdGlvbiwgYXMgd2l0aCBhbiBPYnNlcnZlciwgaWYgbm90IHByb3ZpZGVkLCBlcnJvcnMgZW1pdHRlZCBieSBhbiBPYnNlcnZhYmxlIHdpbGwgYmUgdGhyb3duIGFzeW5jaHJvbm91c2x5LlxuICAgKlxuICAgKiBZb3UgY2FuLCBob3dldmVyLCBzdWJzY3JpYmUgd2l0aCBubyBwYXJhbWV0ZXJzIGF0IGFsbC4gVGhpcyBtYXkgYmUgdGhlIGNhc2Ugd2hlcmUgeW91J3JlIG5vdCBpbnRlcmVzdGVkIGluIHRlcm1pbmFsIGV2ZW50c1xuICAgKiBhbmQgeW91IGFsc28gaGFuZGxlZCBlbWlzc2lvbnMgaW50ZXJuYWxseSBieSB1c2luZyBvcGVyYXRvcnMgKGUuZy4gdXNpbmcgYHRhcGApLlxuICAgKlxuICAgKiBXaGljaGV2ZXIgc3R5bGUgb2YgY2FsbGluZyBgc3Vic2NyaWJlYCB5b3UgdXNlLCBpbiBib3RoIGNhc2VzIGl0IHJldHVybnMgYSBTdWJzY3JpcHRpb24gb2JqZWN0LlxuICAgKiBUaGlzIG9iamVjdCBhbGxvd3MgeW91IHRvIGNhbGwgYHVuc3Vic2NyaWJlYCBvbiBpdCwgd2hpY2ggaW4gdHVybiB3aWxsIHN0b3AgdGhlIHdvcmsgdGhhdCBhbiBPYnNlcnZhYmxlIGRvZXMgYW5kIHdpbGwgY2xlYW5cbiAgICogdXAgYWxsIHJlc291cmNlcyB0aGF0IGFuIE9ic2VydmFibGUgdXNlZC4gTm90ZSB0aGF0IGNhbmNlbGxpbmcgYSBzdWJzY3JpcHRpb24gd2lsbCBub3QgY2FsbCBgY29tcGxldGVgIGNhbGxiYWNrXG4gICAqIHByb3ZpZGVkIHRvIGBzdWJzY3JpYmVgIGZ1bmN0aW9uLCB3aGljaCBpcyByZXNlcnZlZCBmb3IgYSByZWd1bGFyIGNvbXBsZXRpb24gc2lnbmFsIHRoYXQgY29tZXMgZnJvbSBhbiBPYnNlcnZhYmxlLlxuICAgKlxuICAgKiBSZW1lbWJlciB0aGF0IGNhbGxiYWNrcyBwcm92aWRlZCB0byBgc3Vic2NyaWJlYCBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5LlxuICAgKiBJdCBpcyBhbiBPYnNlcnZhYmxlIGl0c2VsZiB0aGF0IGRlY2lkZXMgd2hlbiB0aGVzZSBmdW5jdGlvbnMgd2lsbCBiZSBjYWxsZWQuIEZvciBleGFtcGxlIHtAbGluayBvZn1cbiAgICogYnkgZGVmYXVsdCBlbWl0cyBhbGwgaXRzIHZhbHVlcyBzeW5jaHJvbm91c2x5LiBBbHdheXMgY2hlY2sgZG9jdW1lbnRhdGlvbiBmb3IgaG93IGdpdmVuIE9ic2VydmFibGVcbiAgICogd2lsbCBiZWhhdmUgd2hlbiBzdWJzY3JpYmVkIGFuZCBpZiBpdHMgZGVmYXVsdCBiZWhhdmlvciBjYW4gYmUgbW9kaWZpZWQgd2l0aCBhIGBzY2hlZHVsZXJgLlxuICAgKlxuICAgKiAjIyMjIEV4YW1wbGVzXG4gICAqXG4gICAqIFN1YnNjcmliZSB3aXRoIGFuIHtAbGluayBndWlkZS9vYnNlcnZlciBPYnNlcnZlcn1cbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogY29uc3Qgc3VtT2JzZXJ2ZXIgPSB7XG4gICAqICAgc3VtOiAwLFxuICAgKiAgIG5leHQodmFsdWUpIHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdBZGRpbmc6ICcgKyB2YWx1ZSk7XG4gICAqICAgICB0aGlzLnN1bSA9IHRoaXMuc3VtICsgdmFsdWU7XG4gICAqICAgfSxcbiAgICogICBlcnJvcigpIHtcbiAgICogICAgIC8vIFdlIGFjdHVhbGx5IGNvdWxkIGp1c3QgcmVtb3ZlIHRoaXMgbWV0aG9kLFxuICAgKiAgICAgLy8gc2luY2Ugd2UgZG8gbm90IHJlYWxseSBjYXJlIGFib3V0IGVycm9ycyByaWdodCBub3cuXG4gICAqICAgfSxcbiAgICogICBjb21wbGV0ZSgpIHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdTdW0gZXF1YWxzOiAnICsgdGhpcy5zdW0pO1xuICAgKiAgIH1cbiAgICogfTtcbiAgICpcbiAgICogb2YoMSwgMiwgMykgLy8gU3luY2hyb25vdXNseSBlbWl0cyAxLCAyLCAzIGFuZCB0aGVuIGNvbXBsZXRlcy5cbiAgICogICAuc3Vic2NyaWJlKHN1bU9ic2VydmVyKTtcbiAgICpcbiAgICogLy8gTG9nczpcbiAgICogLy8gJ0FkZGluZzogMSdcbiAgICogLy8gJ0FkZGluZzogMidcbiAgICogLy8gJ0FkZGluZzogMydcbiAgICogLy8gJ1N1bSBlcXVhbHM6IDYnXG4gICAqIGBgYFxuICAgKlxuICAgKiBTdWJzY3JpYmUgd2l0aCBmdW5jdGlvbnMgKHtAbGluayBkZXByZWNhdGlvbnMvc3Vic2NyaWJlLWFyZ3VtZW50cyBkZXByZWNhdGVkfSlcbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJ1xuICAgKlxuICAgKiBsZXQgc3VtID0gMDtcbiAgICpcbiAgICogb2YoMSwgMiwgMykuc3Vic2NyaWJlKFxuICAgKiAgIHZhbHVlID0+IHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdBZGRpbmc6ICcgKyB2YWx1ZSk7XG4gICAqICAgICBzdW0gPSBzdW0gKyB2YWx1ZTtcbiAgICogICB9LFxuICAgKiAgIHVuZGVmaW5lZCxcbiAgICogICAoKSA9PiBjb25zb2xlLmxvZygnU3VtIGVxdWFsczogJyArIHN1bSlcbiAgICogKTtcbiAgICpcbiAgICogLy8gTG9nczpcbiAgICogLy8gJ0FkZGluZzogMSdcbiAgICogLy8gJ0FkZGluZzogMidcbiAgICogLy8gJ0FkZGluZzogMydcbiAgICogLy8gJ1N1bSBlcXVhbHM6IDYnXG4gICAqIGBgYFxuICAgKlxuICAgKiBDYW5jZWwgYSBzdWJzY3JpcHRpb25cbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogY29uc3Qgc3Vic2NyaXB0aW9uID0gaW50ZXJ2YWwoMTAwMCkuc3Vic2NyaWJlKHtcbiAgICogICBuZXh0KG51bSkge1xuICAgKiAgICAgY29uc29sZS5sb2cobnVtKVxuICAgKiAgIH0sXG4gICAqICAgY29tcGxldGUoKSB7XG4gICAqICAgICAvLyBXaWxsIG5vdCBiZSBjYWxsZWQsIGV2ZW4gd2hlbiBjYW5jZWxsaW5nIHN1YnNjcmlwdGlvbi5cbiAgICogICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZWQhJyk7XG4gICAqICAgfVxuICAgKiB9KTtcbiAgICpcbiAgICogc2V0VGltZW91dCgoKSA9PiB7XG4gICAqICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAqICAgY29uc29sZS5sb2coJ3Vuc3Vic2NyaWJlZCEnKTtcbiAgICogfSwgMjUwMCk7XG4gICAqXG4gICAqIC8vIExvZ3M6XG4gICAqIC8vIDAgYWZ0ZXIgMXNcbiAgICogLy8gMSBhZnRlciAyc1xuICAgKiAvLyAndW5zdWJzY3JpYmVkIScgYWZ0ZXIgMi41c1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtPYnNlcnZlcnxGdW5jdGlvbn0gb2JzZXJ2ZXJPck5leHQgKG9wdGlvbmFsKSBFaXRoZXIgYW4gb2JzZXJ2ZXIgd2l0aCBtZXRob2RzIHRvIGJlIGNhbGxlZCxcbiAgICogb3IgdGhlIGZpcnN0IG9mIHRocmVlIHBvc3NpYmxlIGhhbmRsZXJzLCB3aGljaCBpcyB0aGUgaGFuZGxlciBmb3IgZWFjaCB2YWx1ZSBlbWl0dGVkIGZyb20gdGhlIHN1YnNjcmliZWRcbiAgICogT2JzZXJ2YWJsZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZXJyb3IgKG9wdGlvbmFsKSBBIGhhbmRsZXIgZm9yIGEgdGVybWluYWwgZXZlbnQgcmVzdWx0aW5nIGZyb20gYW4gZXJyb3IuIElmIG5vIGVycm9yIGhhbmRsZXIgaXMgcHJvdmlkZWQsXG4gICAqIHRoZSBlcnJvciB3aWxsIGJlIHRocm93biBhc3luY2hyb25vdXNseSBhcyB1bmhhbmRsZWQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBsZXRlIChvcHRpb25hbCkgQSBoYW5kbGVyIGZvciBhIHRlcm1pbmFsIGV2ZW50IHJlc3VsdGluZyBmcm9tIHN1Y2Nlc3NmdWwgY29tcGxldGlvbi5cbiAgICogQHJldHVybiB7U3Vic2NyaXB0aW9ufSBhIHN1YnNjcmlwdGlvbiByZWZlcmVuY2UgdG8gdGhlIHJlZ2lzdGVyZWQgaGFuZGxlcnNcbiAgICogQG1ldGhvZCBzdWJzY3JpYmVcbiAgICovXG4gIHN1YnNjcmliZShcbiAgICBvYnNlcnZlck9yTmV4dD86IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+IHwgKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGVycm9yPzogKChlcnJvcjogYW55KSA9PiB2b2lkKSB8IG51bGwsXG4gICAgY29tcGxldGU/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3Qgc3Vic2NyaWJlciA9IGlzU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCkgPyBvYnNlcnZlck9yTmV4dCA6IG5ldyBTYWZlU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcblxuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICBjb25zdCB7IG9wZXJhdG9yLCBzb3VyY2UgfSA9IHRoaXM7XG4gICAgICBzdWJzY3JpYmVyLmFkZChcbiAgICAgICAgb3BlcmF0b3JcbiAgICAgICAgICA/IC8vIFdlJ3JlIGRlYWxpbmcgd2l0aCBhIHN1YnNjcmlwdGlvbiBpbiB0aGVcbiAgICAgICAgICAgIC8vIG9wZXJhdG9yIGNoYWluIHRvIG9uZSBvZiBvdXIgbGlmdGVkIG9wZXJhdG9ycy5cbiAgICAgICAgICAgIG9wZXJhdG9yLmNhbGwoc3Vic2NyaWJlciwgc291cmNlKVxuICAgICAgICAgIDogc291cmNlXG4gICAgICAgICAgPyAvLyBJZiBgc291cmNlYCBoYXMgYSB2YWx1ZSwgYnV0IGBvcGVyYXRvcmAgZG9lcyBub3QsIHNvbWV0aGluZyB0aGF0XG4gICAgICAgICAgICAvLyBoYWQgaW50aW1hdGUga25vd2xlZGdlIG9mIG91ciBBUEksIGxpa2Ugb3VyIGBTdWJqZWN0YCwgbXVzdCBoYXZlXG4gICAgICAgICAgICAvLyBzZXQgaXQuIFdlJ3JlIGdvaW5nIHRvIGp1c3QgY2FsbCBgX3N1YnNjcmliZWAgZGlyZWN0bHkuXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUoc3Vic2NyaWJlcilcbiAgICAgICAgICA6IC8vIEluIGFsbCBvdGhlciBjYXNlcywgd2UncmUgbGlrZWx5IHdyYXBwaW5nIGEgdXNlci1wcm92aWRlZCBpbml0aWFsaXplclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24sIHNvIHdlIG5lZWQgdG8gY2F0Y2ggZXJyb3JzIGFuZCBoYW5kbGUgdGhlbSBhcHByb3ByaWF0ZWx5LlxuICAgICAgICAgICAgdGhpcy5fdHJ5U3Vic2NyaWJlKHN1YnNjcmliZXIpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfdHJ5U3Vic2NyaWJlKHNpbms6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShzaW5rKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gcmV0dXJuIGFueXRoaW5nIGluIHRoaXMgY2FzZSxcbiAgICAgIC8vIGJlY2F1c2UgaXQncyBqdXN0IGdvaW5nIHRvIHRyeSB0byBgYWRkKClgIHRvIGEgc3Vic2NyaXB0aW9uXG4gICAgICAvLyBhYm92ZS5cbiAgICAgIHNpbmsuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlZCBhcyBhIE5PTi1DQU5DRUxMQUJMRSBtZWFucyBvZiBzdWJzY3JpYmluZyB0byBhbiBvYnNlcnZhYmxlLCBmb3IgdXNlIHdpdGhcbiAgICogQVBJcyB0aGF0IGV4cGVjdCBwcm9taXNlcywgbGlrZSBgYXN5bmMvYXdhaXRgLiBZb3UgY2Fubm90IHVuc3Vic2NyaWJlIGZyb20gdGhpcy5cbiAgICpcbiAgICogKipXQVJOSU5HKio6IE9ubHkgdXNlIHRoaXMgd2l0aCBvYnNlcnZhYmxlcyB5b3UgKmtub3cqIHdpbGwgY29tcGxldGUuIElmIHRoZSBzb3VyY2VcbiAgICogb2JzZXJ2YWJsZSBkb2VzIG5vdCBjb21wbGV0ZSwgeW91IHdpbGwgZW5kIHVwIHdpdGggYSBwcm9taXNlIHRoYXQgaXMgaHVuZyB1cCwgYW5kXG4gICAqIHBvdGVudGlhbGx5IGFsbCBvZiB0aGUgc3RhdGUgb2YgYW4gYXN5bmMgZnVuY3Rpb24gaGFuZ2luZyBvdXQgaW4gbWVtb3J5LiBUbyBhdm9pZFxuICAgKiB0aGlzIHNpdHVhdGlvbiwgbG9vayBpbnRvIGFkZGluZyBzb21ldGhpbmcgbGlrZSB7QGxpbmsgdGltZW91dH0sIHtAbGluayB0YWtlfSxcbiAgICoge0BsaW5rIHRha2VXaGlsZX0sIG9yIHtAbGluayB0YWtlVW50aWx9IGFtb25nc3Qgb3RoZXJzLlxuICAgKlxuICAgKiAjIyMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UgfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSg0KSk7XG4gICAqXG4gICAqIGFzeW5jIGZ1bmN0aW9uIGdldFRvdGFsKCkge1xuICAgKiAgIGxldCB0b3RhbCA9IDA7XG4gICAqXG4gICAqICAgYXdhaXQgc291cmNlJC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICogICAgIHRvdGFsICs9IHZhbHVlO1xuICAgKiAgICAgY29uc29sZS5sb2coJ29ic2VydmFibGUgLT4gJyArIHZhbHVlKTtcbiAgICogICB9KTtcbiAgICpcbiAgICogICByZXR1cm4gdG90YWw7XG4gICAqIH1cbiAgICpcbiAgICogZ2V0VG90YWwoKS50aGVuKFxuICAgKiAgIHRvdGFsID0+IGNvbnNvbGUubG9nKCdUb3RhbDogJyArIHRvdGFsKVxuICAgKiApO1xuICAgKlxuICAgKiAvLyBFeHBlY3RlZDpcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMCdcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMSdcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMidcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMydcbiAgICogLy8gJ1RvdGFsOiA2J1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIG5leHQgYSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIG9ic2VydmFibGVcbiAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCBlaXRoZXIgcmVzb2x2ZXMgb24gb2JzZXJ2YWJsZSBjb21wbGV0aW9uIG9yXG4gICAqICByZWplY3RzIHdpdGggdGhlIGhhbmRsZWQgZXJyb3JcbiAgICovXG4gIGZvckVhY2gobmV4dDogKHZhbHVlOiBUKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQHBhcmFtIG5leHQgYSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIG9ic2VydmFibGVcbiAgICogQHBhcmFtIHByb21pc2VDdG9yIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gdXNlZCB0byBpbnN0YW50aWF0ZSB0aGUgUHJvbWlzZVxuICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB0aGF0IGVpdGhlciByZXNvbHZlcyBvbiBvYnNlcnZhYmxlIGNvbXBsZXRpb24gb3JcbiAgICogIHJlamVjdHMgd2l0aCB0aGUgaGFuZGxlZCBlcnJvclxuICAgKiBAZGVwcmVjYXRlZCBQYXNzaW5nIGEgUHJvbWlzZSBjb25zdHJ1Y3RvciB3aWxsIG5vIGxvbmdlciBiZSBhdmFpbGFibGVcbiAgICogaW4gdXBjb21pbmcgdmVyc2lvbnMgb2YgUnhKUy4gVGhpcyBpcyBiZWNhdXNlIGl0IGFkZHMgd2VpZ2h0IHRvIHRoZSBsaWJyYXJ5LCBmb3IgdmVyeVxuICAgKiBsaXR0bGUgYmVuZWZpdC4gSWYgeW91IG5lZWQgdGhpcyBmdW5jdGlvbmFsaXR5LCBpdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSBlaXRoZXJcbiAgICogcG9seWZpbGwgUHJvbWlzZSwgb3IgeW91IGNyZWF0ZSBhbiBhZGFwdGVyIHRvIGNvbnZlcnQgdGhlIHJldHVybmVkIG5hdGl2ZSBwcm9taXNlXG4gICAqIHRvIHdoYXRldmVyIHByb21pc2UgaW1wbGVtZW50YXRpb24geW91IHdhbnRlZC4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgZm9yRWFjaChuZXh0OiAodmFsdWU6IFQpID0+IHZvaWQsIHByb21pc2VDdG9yOiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTx2b2lkPjtcblxuICBmb3JFYWNoKG5leHQ6ICh2YWx1ZTogVCkgPT4gdm9pZCwgcHJvbWlzZUN0b3I/OiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG5cbiAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBuZXcgU2FmZVN1YnNjcmliZXI8VD4oe1xuICAgICAgICBuZXh0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgIGNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9KSBhcyBQcm9taXNlPHZvaWQ+O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2U/LnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBpbnRlcm9wIHBvaW50IGRlZmluZWQgYnkgdGhlIGVzNy1vYnNlcnZhYmxlIHNwZWMgaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtb2JzZXJ2YWJsZVxuICAgKiBAbWV0aG9kIFN5bWJvbC5vYnNlcnZhYmxlXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IHRoaXMgaW5zdGFuY2Ugb2YgdGhlIG9ic2VydmFibGVcbiAgICovXG4gIFtTeW1ib2xfb2JzZXJ2YWJsZV0oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbiAgcGlwZSgpOiBPYnNlcnZhYmxlPFQ+O1xuICBwaXBlPEE+KG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPik6IE9ic2VydmFibGU8QT47XG4gIHBpcGU8QSwgQj4ob3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LCBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4pOiBPYnNlcnZhYmxlPEI+O1xuICBwaXBlPEEsIEIsIEM+KG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPiwgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LCBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4pOiBPYnNlcnZhYmxlPEM+O1xuICBwaXBlPEEsIEIsIEMsIEQ+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPlxuICApOiBPYnNlcnZhYmxlPEQ+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEU+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT5cbiAgKTogT2JzZXJ2YWJsZTxFPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPlxuICApOiBPYnNlcnZhYmxlPEY+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEc+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPlxuICApOiBPYnNlcnZhYmxlPEc+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPixcbiAgICBvcDg6IE9wZXJhdG9yRnVuY3Rpb248RywgSD5cbiAgKTogT2JzZXJ2YWJsZTxIPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz4sXG4gICAgb3A4OiBPcGVyYXRvckZ1bmN0aW9uPEcsIEg+LFxuICAgIG9wOTogT3BlcmF0b3JGdW5jdGlvbjxILCBJPlxuICApOiBPYnNlcnZhYmxlPEk+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPixcbiAgICBvcDg6IE9wZXJhdG9yRnVuY3Rpb248RywgSD4sXG4gICAgb3A5OiBPcGVyYXRvckZ1bmN0aW9uPEgsIEk+LFxuICAgIC4uLm9wZXJhdGlvbnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W11cbiAgKTogT2JzZXJ2YWJsZTx1bmtub3duPjtcbiAgLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuICAvKipcbiAgICogVXNlZCB0byBzdGl0Y2ggdG9nZXRoZXIgZnVuY3Rpb25hbCBvcGVyYXRvcnMgaW50byBhIGNoYWluLlxuICAgKiBAbWV0aG9kIHBpcGVcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gdGhlIE9ic2VydmFibGUgcmVzdWx0IG9mIGFsbCBvZiB0aGUgb3BlcmF0b3JzIGhhdmluZ1xuICAgKiBiZWVuIGNhbGxlZCBpbiB0aGUgb3JkZXIgdGhleSB3ZXJlIHBhc3NlZCBpbi5cbiAgICpcbiAgICogIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBpbXBvcnQgeyBpbnRlcnZhbCwgZmlsdGVyLCBtYXAsIHNjYW4gfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogaW50ZXJ2YWwoMTAwMClcbiAgICogICAucGlwZShcbiAgICogICAgIGZpbHRlcih4ID0+IHggJSAyID09PSAwKSxcbiAgICogICAgIG1hcCh4ID0+IHggKyB4KSxcbiAgICogICAgIHNjYW4oKGFjYywgeCkgPT4gYWNjICsgeClcbiAgICogICApXG4gICAqICAgLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICogYGBgXG4gICAqL1xuICBwaXBlKC4uLm9wZXJhdGlvbnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBwaXBlRnJvbUFycmF5KG9wZXJhdGlvbnMpKHRoaXMpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4gIC8qKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHtAbGluayBmaXJzdFZhbHVlRnJvbX0gYW5kIHtAbGluayBsYXN0VmFsdWVGcm9tfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy90by1wcm9taXNlICovXG4gIHRvUHJvbWlzZSgpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+O1xuICAvKiogQGRlcHJlY2F0ZWQgUmVwbGFjZWQgd2l0aCB7QGxpbmsgZmlyc3RWYWx1ZUZyb219IGFuZCB7QGxpbmsgbGFzdFZhbHVlRnJvbX0uIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvdG8tcHJvbWlzZSAqL1xuICB0b1Byb21pc2UoUHJvbWlzZUN0b3I6IHR5cGVvZiBQcm9taXNlKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgLyoqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2UgKi9cbiAgdG9Qcm9taXNlKFByb21pc2VDdG9yOiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoaXMgT2JzZXJ2YWJsZSBhbmQgZ2V0IGEgUHJvbWlzZSByZXNvbHZpbmcgb25cbiAgICogYGNvbXBsZXRlYCB3aXRoIHRoZSBsYXN0IGVtaXNzaW9uIChpZiBhbnkpLlxuICAgKlxuICAgKiAqKldBUk5JTkcqKjogT25seSB1c2UgdGhpcyB3aXRoIG9ic2VydmFibGVzIHlvdSAqa25vdyogd2lsbCBjb21wbGV0ZS4gSWYgdGhlIHNvdXJjZVxuICAgKiBvYnNlcnZhYmxlIGRvZXMgbm90IGNvbXBsZXRlLCB5b3Ugd2lsbCBlbmQgdXAgd2l0aCBhIHByb21pc2UgdGhhdCBpcyBodW5nIHVwLCBhbmRcbiAgICogcG90ZW50aWFsbHkgYWxsIG9mIHRoZSBzdGF0ZSBvZiBhbiBhc3luYyBmdW5jdGlvbiBoYW5naW5nIG91dCBpbiBtZW1vcnkuIFRvIGF2b2lkXG4gICAqIHRoaXMgc2l0dWF0aW9uLCBsb29rIGludG8gYWRkaW5nIHNvbWV0aGluZyBsaWtlIHtAbGluayB0aW1lb3V0fSwge0BsaW5rIHRha2V9LFxuICAgKiB7QGxpbmsgdGFrZVdoaWxlfSwgb3Ige0BsaW5rIHRha2VVbnRpbH0gYW1vbmdzdCBvdGhlcnMuXG4gICAqXG4gICAqIEBtZXRob2QgdG9Qcm9taXNlXG4gICAqIEBwYXJhbSBbcHJvbWlzZUN0b3JdIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gdXNlZCB0byBpbnN0YW50aWF0ZVxuICAgKiB0aGUgUHJvbWlzZVxuICAgKiBAcmV0dXJuIEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxhc3QgdmFsdWUgZW1pdCwgb3JcbiAgICogcmVqZWN0cyBvbiBhbiBlcnJvci4gSWYgdGhlcmUgd2VyZSBubyBlbWlzc2lvbnMsIFByb21pc2VcbiAgICogcmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQuXG4gICAqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2VcbiAgICovXG4gIHRvUHJvbWlzZShwcm9taXNlQ3Rvcj86IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+IHtcbiAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcblxuICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHZhbHVlOiBUIHwgdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zdWJzY3JpYmUoXG4gICAgICAgICh4OiBUKSA9PiAodmFsdWUgPSB4KSxcbiAgICAgICAgKGVycjogYW55KSA9PiByZWplY3QoZXJyKSxcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSh2YWx1ZSlcbiAgICAgICk7XG4gICAgfSkgYXMgUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgfVxufVxuXG4vKipcbiAqIERlY2lkZXMgYmV0d2VlbiBhIHBhc3NlZCBwcm9taXNlIGNvbnN0cnVjdG9yIGZyb20gY29uc3VtaW5nIGNvZGUsXG4gKiBBIGRlZmF1bHQgY29uZmlndXJlZCBwcm9taXNlIGNvbnN0cnVjdG9yLCBhbmQgdGhlIG5hdGl2ZSBwcm9taXNlXG4gKiBjb25zdHJ1Y3RvciBhbmQgcmV0dXJucyBpdC4gSWYgbm90aGluZyBjYW4gYmUgZm91bmQsIGl0IHdpbGwgdGhyb3dcbiAqIGFuIGVycm9yLlxuICogQHBhcmFtIHByb21pc2VDdG9yIFRoZSBvcHRpb25hbCBwcm9taXNlIGNvbnN0cnVjdG9yIHRvIHBhc3NlZCBieSBjb25zdW1pbmcgY29kZVxuICovXG5mdW5jdGlvbiBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3RvcjogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSB8IHVuZGVmaW5lZCkge1xuICByZXR1cm4gcHJvbWlzZUN0b3IgPz8gY29uZmlnLlByb21pc2UgPz8gUHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gaXNPYnNlcnZlcjxUPih2YWx1ZTogYW55KTogdmFsdWUgaXMgT2JzZXJ2ZXI8VD4ge1xuICByZXR1cm4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5uZXh0KSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmVycm9yKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmNvbXBsZXRlKTtcbn1cblxuZnVuY3Rpb24gaXNTdWJzY3JpYmVyPFQ+KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdWJzY3JpYmVyPFQ+IHtcbiAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHx8IChpc09ic2VydmVyKHZhbHVlKSAmJiBpc1N1YnNjcmlwdGlvbih2YWx1ZSkpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuLyoqXG4gKiBVc2VkIHRvIGRldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYW4gT2JzZXJ2YWJsZSB3aXRoIGEgbGlmdCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpZnQoc291cmNlOiBhbnkpOiBzb3VyY2UgaXMgeyBsaWZ0OiBJbnN0YW5jZVR5cGU8dHlwZW9mIE9ic2VydmFibGU+WydsaWZ0J10gfSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKHNvdXJjZT8ubGlmdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBgT3BlcmF0b3JGdW5jdGlvbmAuIFVzZWQgdG8gZGVmaW5lIG9wZXJhdG9ycyB0aHJvdWdob3V0IHRoZSBsaWJyYXJ5IGluIGEgY29uY2lzZSB3YXkuXG4gKiBAcGFyYW0gaW5pdCBUaGUgbG9naWMgdG8gY29ubmVjdCB0aGUgbGlmdGVkU291cmNlIHRvIHRoZSBzdWJzY3JpYmVyIGF0IHRoZSBtb21lbnQgb2Ygc3Vic2NyaXB0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3BlcmF0ZTxULCBSPihcbiAgaW5pdDogKGxpZnRlZFNvdXJjZTogT2JzZXJ2YWJsZTxUPiwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxSPikgPT4gKCgpID0+IHZvaWQpIHwgdm9pZFxuKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPiB7XG4gIHJldHVybiAoc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiB7XG4gICAgaWYgKGhhc0xpZnQoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KGZ1bmN0aW9uICh0aGlzOiBTdWJzY3JpYmVyPFI+LCBsaWZ0ZWRTb3VyY2U6IE9ic2VydmFibGU8VD4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gaW5pdChsaWZ0ZWRTb3VyY2UsIHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aGlzLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmFibGUgdG8gbGlmdCB1bmtub3duIE9ic2VydmFibGUgdHlwZScpO1xuICB9O1xufVxuIiwgImltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGFuIGBPcGVyYXRvclN1YnNjcmliZXJgLlxuICogQHBhcmFtIGRlc3RpbmF0aW9uIFRoZSBkb3duc3RyZWFtIHN1YnNjcmliZXIuXG4gKiBAcGFyYW0gb25OZXh0IEhhbmRsZXMgbmV4dCB2YWx1ZXMsIG9ubHkgY2FsbGVkIGlmIHRoaXMgc3Vic2NyaWJlciBpcyBub3Qgc3RvcHBlZCBvciBjbG9zZWQuIEFueVxuICogZXJyb3IgdGhhdCBvY2N1cnMgaW4gdGhpcyBmdW5jdGlvbiBpcyBjYXVnaHQgYW5kIHNlbnQgdG8gdGhlIGBlcnJvcmAgbWV0aG9kIG9mIHRoaXMgc3Vic2NyaWJlci5cbiAqIEBwYXJhbSBvbkVycm9yIEhhbmRsZXMgZXJyb3JzIGZyb20gdGhlIHN1YnNjcmlwdGlvbiwgYW55IGVycm9ycyB0aGF0IG9jY3VyIGluIHRoaXMgaGFuZGxlciBhcmUgY2F1Z2h0XG4gKiBhbmQgc2VuZCB0byB0aGUgYGRlc3RpbmF0aW9uYCBlcnJvciBoYW5kbGVyLlxuICogQHBhcmFtIG9uQ29tcGxldGUgSGFuZGxlcyBjb21wbGV0aW9uIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBzdWJzY3JpcHRpb24uIEFueSBlcnJvcnMgdGhhdCBvY2N1ciBpblxuICogdGhpcyBoYW5kbGVyIGFyZSBzZW50IHRvIHRoZSBgZGVzdGluYXRpb25gIGVycm9yIGhhbmRsZXIuXG4gKiBAcGFyYW0gb25GaW5hbGl6ZSBBZGRpdGlvbmFsIHRlYXJkb3duIGxvZ2ljIGhlcmUuIFRoaXMgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbiB0ZWFyZG93biBpZiB0aGVcbiAqIHN1YnNjcmliZXIgaXRzZWxmIGlzIG5vdCBhbHJlYWR5IGNsb3NlZC4gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYWxsIG90aGVyIHRlYXJkb3duIGxvZ2ljIGlzIGV4ZWN1dGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyPFQ+KFxuICBkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxhbnk+LFxuICBvbk5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG4gIG9uQ29tcGxldGU/OiAoKSA9PiB2b2lkLFxuICBvbkVycm9yPzogKGVycjogYW55KSA9PiB2b2lkLFxuICBvbkZpbmFsaXplPzogKCkgPT4gdm9pZFxuKTogU3Vic2NyaWJlcjxUPiB7XG4gIHJldHVybiBuZXcgT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUpO1xufVxuXG4vKipcbiAqIEEgZ2VuZXJpYyBoZWxwZXIgZm9yIGFsbG93aW5nIG9wZXJhdG9ycyB0byBiZSBjcmVhdGVkIHdpdGggYSBTdWJzY3JpYmVyIGFuZFxuICogdXNlIGNsb3N1cmVzIHRvIGNhcHR1cmUgbmVjZXNzYXJ5IHN0YXRlIGZyb20gdGhlIG9wZXJhdG9yIGZ1bmN0aW9uIGl0c2VsZi5cbiAqL1xuZXhwb3J0IGNsYXNzIE9wZXJhdG9yU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhbiBgT3BlcmF0b3JTdWJzY3JpYmVyYC5cbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uIFRoZSBkb3duc3RyZWFtIHN1YnNjcmliZXIuXG4gICAqIEBwYXJhbSBvbk5leHQgSGFuZGxlcyBuZXh0IHZhbHVlcywgb25seSBjYWxsZWQgaWYgdGhpcyBzdWJzY3JpYmVyIGlzIG5vdCBzdG9wcGVkIG9yIGNsb3NlZC4gQW55XG4gICAqIGVycm9yIHRoYXQgb2NjdXJzIGluIHRoaXMgZnVuY3Rpb24gaXMgY2F1Z2h0IGFuZCBzZW50IHRvIHRoZSBgZXJyb3JgIG1ldGhvZCBvZiB0aGlzIHN1YnNjcmliZXIuXG4gICAqIEBwYXJhbSBvbkVycm9yIEhhbmRsZXMgZXJyb3JzIGZyb20gdGhlIHN1YnNjcmlwdGlvbiwgYW55IGVycm9ycyB0aGF0IG9jY3VyIGluIHRoaXMgaGFuZGxlciBhcmUgY2F1Z2h0XG4gICAqIGFuZCBzZW5kIHRvIHRoZSBgZGVzdGluYXRpb25gIGVycm9yIGhhbmRsZXIuXG4gICAqIEBwYXJhbSBvbkNvbXBsZXRlIEhhbmRsZXMgY29tcGxldGlvbiBub3RpZmljYXRpb24gZnJvbSB0aGUgc3Vic2NyaXB0aW9uLiBBbnkgZXJyb3JzIHRoYXQgb2NjdXIgaW5cbiAgICogdGhpcyBoYW5kbGVyIGFyZSBzZW50IHRvIHRoZSBgZGVzdGluYXRpb25gIGVycm9yIGhhbmRsZXIuXG4gICAqIEBwYXJhbSBvbkZpbmFsaXplIEFkZGl0aW9uYWwgZmluYWxpemF0aW9uIGxvZ2ljIGhlcmUuIFRoaXMgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbiBmaW5hbGl6YXRpb24gaWYgdGhlXG4gICAqIHN1YnNjcmliZXIgaXRzZWxmIGlzIG5vdCBhbHJlYWR5IGNsb3NlZC4gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYWxsIG90aGVyIGZpbmFsaXphdGlvbiBsb2dpYyBpcyBleGVjdXRlZC5cbiAgICogQHBhcmFtIHNob3VsZFVuc3Vic2NyaWJlIEFuIG9wdGlvbmFsIGNoZWNrIHRvIHNlZSBpZiBhbiB1bnN1YnNjcmliZSBjYWxsIHNob3VsZCB0cnVseSB1bnN1YnNjcmliZS5cbiAgICogTk9URTogVGhpcyBjdXJyZW50bHkgKipPTkxZKiogZXhpc3RzIHRvIHN1cHBvcnQgdGhlIHN0cmFuZ2UgYmVoYXZpb3Igb2Yge0BsaW5rIGdyb3VwQnl9LCB3aGVyZSB1bnN1YnNjcmlwdGlvblxuICAgKiB0byB0aGUgcmVzdWx0aW5nIG9ic2VydmFibGUgZG9lcyBub3QgYWN0dWFsbHkgZGlzY29ubmVjdCBmcm9tIHRoZSBzb3VyY2UgaWYgdGhlcmUgYXJlIGFjdGl2ZSBzdWJzY3JpcHRpb25zXG4gICAqIHRvIGFueSBncm91cGVkIG9ic2VydmFibGUuIChETyBOT1QgRVhQT1NFIE9SIFVTRSBFWFRFUk5BTExZISEhKVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55PixcbiAgICBvbk5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG4gICAgb25Db21wbGV0ZT86ICgpID0+IHZvaWQsXG4gICAgb25FcnJvcj86IChlcnI6IGFueSkgPT4gdm9pZCxcbiAgICBwcml2YXRlIG9uRmluYWxpemU/OiAoKSA9PiB2b2lkLFxuICAgIHByaXZhdGUgc2hvdWxkVW5zdWJzY3JpYmU/OiAoKSA9PiBib29sZWFuXG4gICkge1xuICAgIC8vIEl0J3MgaW1wb3J0YW50IC0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgLSB0aGF0IGFsbCBvZiB0aGlzIGNsYXNzJ3NcbiAgICAvLyBtZW1iZXJzIGFyZSBpbml0aWFsaXplZCBhbmQgdGhhdCB0aGV5IGFyZSBhbHdheXMgaW5pdGlhbGl6ZWQgaW4gdGhlIHNhbWVcbiAgICAvLyBvcmRlci4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGFsbCBPcGVyYXRvclN1YnNjcmliZXIgaW5zdGFuY2VzIGhhdmUgdGhlXG4gICAgLy8gc2FtZSBoaWRkZW4gY2xhc3MgaW4gVjguIFRoaXMsIGluIHR1cm4sIHdpbGwgaGVscCBrZWVwIHRoZSBudW1iZXIgb2ZcbiAgICAvLyBoaWRkZW4gY2xhc3NlcyBpbnZvbHZlZCBpbiBwcm9wZXJ0eSBhY2Nlc3NlcyB3aXRoaW4gdGhlIGJhc2UgY2xhc3MgYXNcbiAgICAvLyBsb3cgYXMgcG9zc2libGUuIElmIHRoZSBudW1iZXIgb2YgaGlkZGVuIGNsYXNzZXMgaW52b2x2ZWQgZXhjZWVkcyBmb3VyLFxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhY2Nlc3NlcyB3aWxsIGJlY29tZSBtZWdhbW9ycGhpYyBhbmQgcGVyZm9ybWFuY2UgcGVuYWx0aWVzXG4gICAgLy8gd2lsbCBiZSBpbmN1cnJlZCAtIGkuZS4gaW5saW5lIGNhY2hlcyB3b24ndCBiZSB1c2VkLlxuICAgIC8vXG4gICAgLy8gVGhlIHJlYXNvbnMgZm9yIGVuc3VyaW5nIGFsbCBpbnN0YW5jZXMgaGF2ZSB0aGUgc2FtZSBoaWRkZW4gY2xhc3MgYXJlXG4gICAgLy8gZnVydGhlciBkaXNjdXNzZWQgaW4gdGhpcyBibG9nIHBvc3QgZnJvbSBCZW5lZGlrdCBNZXVyZXI6XG4gICAgLy8gaHR0cHM6Ly9iZW5lZGlrdG1ldXJlci5kZS8yMDE4LzAzLzIzL2ltcGFjdC1vZi1wb2x5bW9ycGhpc20tb24tY29tcG9uZW50LWJhc2VkLWZyYW1ld29ya3MtbGlrZS1yZWFjdC9cbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gICAgdGhpcy5fbmV4dCA9IG9uTmV4dFxuICAgICAgPyBmdW5jdGlvbiAodGhpczogT3BlcmF0b3JTdWJzY3JpYmVyPFQ+LCB2YWx1ZTogVCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvbk5leHQodmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDogc3VwZXIuX25leHQ7XG4gICAgdGhpcy5fZXJyb3IgPSBvbkVycm9yXG4gICAgICA/IGZ1bmN0aW9uICh0aGlzOiBPcGVyYXRvclN1YnNjcmliZXI8VD4sIGVycjogYW55KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIFNlbmQgYW55IGVycm9ycyB0aGF0IG9jY3VyIGRvd24gc3RyZWFtLlxuICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGZpbmFsaXphdGlvbi5cbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDogc3VwZXIuX2Vycm9yO1xuICAgIHRoaXMuX2NvbXBsZXRlID0gb25Db21wbGV0ZVxuICAgICAgPyBmdW5jdGlvbiAodGhpczogT3BlcmF0b3JTdWJzY3JpYmVyPFQ+KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIFNlbmQgYW55IGVycm9ycyB0aGF0IG9jY3VyIGRvd24gc3RyZWFtLlxuICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGZpbmFsaXphdGlvbi5cbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDogc3VwZXIuX2NvbXBsZXRlO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLnNob3VsZFVuc3Vic2NyaWJlIHx8IHRoaXMuc2hvdWxkVW5zdWJzY3JpYmUoKSkge1xuICAgICAgY29uc3QgeyBjbG9zZWQgfSA9IHRoaXM7XG4gICAgICBzdXBlci51bnN1YnNjcmliZSgpO1xuICAgICAgLy8gRXhlY3V0ZSBhZGRpdGlvbmFsIHRlYXJkb3duIGlmIHdlIGhhdmUgYW55IGFuZCB3ZSBkaWRuJ3QgYWxyZWFkeSBkbyBzby5cbiAgICAgICFjbG9zZWQgJiYgdGhpcy5vbkZpbmFsaXplPy4oKTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RVbnN1YnNjcmliZWRFcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JDdG9yIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbC4gRG8gbm90IGNvbnN0cnVjdCBlcnJvciBpbnN0YW5jZXMuXG4gICAqIENhbm5vdCBiZSB0YWdnZWQgYXMgaW50ZXJuYWw6IGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdGl2ZVgvcnhqcy9pc3N1ZXMvNjI2OVxuICAgKi9cbiAgbmV3ICgpOiBPYmplY3RVbnN1YnNjcmliZWRFcnJvcjtcbn1cblxuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiBhbiBhY3Rpb24gaXMgaW52YWxpZCBiZWNhdXNlIHRoZSBvYmplY3QgaGFzIGJlZW5cbiAqIHVuc3Vic2NyaWJlZC5cbiAqXG4gKiBAc2VlIHtAbGluayBTdWJqZWN0fVxuICogQHNlZSB7QGxpbmsgQmVoYXZpb3JTdWJqZWN0fVxuICpcbiAqIEBjbGFzcyBPYmplY3RVbnN1YnNjcmliZWRFcnJvclxuICovXG5leHBvcnQgY29uc3QgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3I6IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yQ3RvciA9IGNyZWF0ZUVycm9yQ2xhc3MoXG4gIChfc3VwZXIpID0+XG4gICAgZnVuY3Rpb24gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsKHRoaXM6IGFueSkge1xuICAgICAgX3N1cGVyKHRoaXMpO1xuICAgICAgdGhpcy5uYW1lID0gJ09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbiAgICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICB9XG4pO1xuIiwgImltcG9ydCB7IE9wZXJhdG9yIH0gZnJvbSAnLi9PcGVyYXRvcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBFTVBUWV9TVUJTQ1JJUFRJT04gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZlciwgU3Vic2NyaXB0aW9uTGlrZSwgVGVhcmRvd25Mb2dpYyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgfSBmcm9tICcuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcblxuLyoqXG4gKiBBIFN1YmplY3QgaXMgYSBzcGVjaWFsIHR5cGUgb2YgT2JzZXJ2YWJsZSB0aGF0IGFsbG93cyB2YWx1ZXMgdG8gYmVcbiAqIG11bHRpY2FzdGVkIHRvIG1hbnkgT2JzZXJ2ZXJzLiBTdWJqZWN0cyBhcmUgbGlrZSBFdmVudEVtaXR0ZXJzLlxuICpcbiAqIEV2ZXJ5IFN1YmplY3QgaXMgYW4gT2JzZXJ2YWJsZSBhbmQgYW4gT2JzZXJ2ZXIuIFlvdSBjYW4gc3Vic2NyaWJlIHRvIGFcbiAqIFN1YmplY3QsIGFuZCB5b3UgY2FuIGNhbGwgbmV4dCB0byBmZWVkIHZhbHVlcyBhcyB3ZWxsIGFzIGVycm9yIGFuZCBjb21wbGV0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFN1YmplY3Q8VD4gZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IGltcGxlbWVudHMgU3Vic2NyaXB0aW9uTGlrZSB7XG4gIGNsb3NlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY3VycmVudE9ic2VydmVyczogT2JzZXJ2ZXI8VD5bXSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgb2JzZXJ2ZXJzOiBPYnNlcnZlcjxUPltdID0gW107XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgaXNTdG9wcGVkID0gZmFsc2U7XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgaGFzRXJyb3IgPSBmYWxzZTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICB0aHJvd25FcnJvcjogYW55ID0gbnVsbDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFwic3ViamVjdFwiIGJ5IGJhc2ljYWxseSBnbHVpbmcgYW4gb2JzZXJ2ZXIgdG8gYW4gb2JzZXJ2YWJsZS5cbiAgICpcbiAgICogQG5vY29sbGFwc2VcbiAgICogQGRlcHJlY2F0ZWQgUmVjb21tZW5kZWQgeW91IGRvIG5vdCB1c2UuIFdpbGwgYmUgcmVtb3ZlZCBhdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUuIFBsYW5zIGZvciByZXBsYWNlbWVudCBzdGlsbCB1bmRlciBkaXNjdXNzaW9uLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgPSA8VD4oZGVzdGluYXRpb246IE9ic2VydmVyPFQ+LCBzb3VyY2U6IE9ic2VydmFibGU8VD4pOiBBbm9ueW1vdXNTdWJqZWN0PFQ+ID0+IHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c1N1YmplY3Q8VD4oZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gTk9URTogVGhpcyBtdXN0IGJlIGhlcmUgdG8gb2JzY3VyZSBPYnNlcnZhYmxlJ3MgY29uc3RydWN0b3IuXG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgbGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8VCwgUj4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBjb25zdCBzdWJqZWN0ID0gbmV3IEFub255bW91c1N1YmplY3QodGhpcywgdGhpcyk7XG4gICAgc3ViamVjdC5vcGVyYXRvciA9IG9wZXJhdG9yIGFzIGFueTtcbiAgICByZXR1cm4gc3ViamVjdCBhcyBhbnk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfdGhyb3dJZkNsb3NlZCgpIHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQodmFsdWU6IFQpIHtcbiAgICBlcnJvckNvbnRleHQoKCkgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudE9ic2VydmVycykge1xuICAgICAgICAgIHRoaXMuY3VycmVudE9ic2VydmVycyA9IEFycmF5LmZyb20odGhpcy5vYnNlcnZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGVycm9yKGVycjogYW55KSB7XG4gICAgZXJyb3JDb250ZXh0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aHJvd25FcnJvciA9IGVycjtcbiAgICAgICAgY29uc3QgeyBvYnNlcnZlcnMgfSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgb2JzZXJ2ZXJzLnNoaWZ0KCkhLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgeyBvYnNlcnZlcnMgfSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgb2JzZXJ2ZXJzLnNoaWZ0KCkhLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuaXNTdG9wcGVkID0gdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIHRoaXMub2JzZXJ2ZXJzID0gdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbCE7XG4gIH1cblxuICBnZXQgb2JzZXJ2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzPy5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgIHJldHVybiBzdXBlci5fdHJ5U3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgdGhpcy5fY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyhzdWJzY3JpYmVyKTtcbiAgICByZXR1cm4gdGhpcy5faW5uZXJTdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfaW5uZXJTdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSB7XG4gICAgY29uc3QgeyBoYXNFcnJvciwgaXNTdG9wcGVkLCBvYnNlcnZlcnMgfSA9IHRoaXM7XG4gICAgaWYgKGhhc0Vycm9yIHx8IGlzU3RvcHBlZCkge1xuICAgICAgcmV0dXJuIEVNUFRZX1NVQlNDUklQVElPTjtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbDtcbiAgICBvYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgICAgYXJyUmVtb3ZlKG9ic2VydmVycywgc3Vic2NyaWJlcik7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyhzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pIHtcbiAgICBjb25zdCB7IGhhc0Vycm9yLCB0aHJvd25FcnJvciwgaXNTdG9wcGVkIH0gPSB0aGlzO1xuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgc3Vic2NyaWJlci5lcnJvcih0aHJvd25FcnJvcik7XG4gICAgfSBlbHNlIGlmIChpc1N0b3BwZWQpIHtcbiAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlIHdpdGggdGhpcyBTdWJqZWN0IGFzIHRoZSBzb3VyY2UuIFlvdSBjYW4gZG8gdGhpc1xuICAgKiB0byBjcmVhdGUgY3VzdG9tIE9ic2VydmVyLXNpZGUgbG9naWMgb2YgdGhlIFN1YmplY3QgYW5kIGNvbmNlYWwgaXQgZnJvbVxuICAgKiBjb2RlIHRoYXQgdXNlcyB0aGUgT2JzZXJ2YWJsZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gT2JzZXJ2YWJsZSB0aGF0IHRoZSBTdWJqZWN0IGNhc3RzIHRvXG4gICAqL1xuICBhc09ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZTogYW55ID0gbmV3IE9ic2VydmFibGU8VD4oKTtcbiAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgQW5vbnltb3VzU3ViamVjdDxUPlxuICovXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzU3ViamVjdDxUPiBleHRlbmRzIFN1YmplY3Q8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gICAgcHVibGljIGRlc3RpbmF0aW9uPzogT2JzZXJ2ZXI8VD4sXG4gICAgc291cmNlPzogT2JzZXJ2YWJsZTxUPlxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICB9XG5cbiAgbmV4dCh2YWx1ZTogVCkge1xuICAgIHRoaXMuZGVzdGluYXRpb24/Lm5leHQ/Lih2YWx1ZSk7XG4gIH1cblxuICBlcnJvcihlcnI6IGFueSkge1xuICAgIHRoaXMuZGVzdGluYXRpb24/LmVycm9yPy4oZXJyKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuZGVzdGluYXRpb24/LmNvbXBsZXRlPy4oKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPik6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlPy5zdWJzY3JpYmUoc3Vic2NyaWJlcikgPz8gRU1QVFlfU1VCU0NSSVBUSU9OO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJy4vU3ViamVjdCc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcblxuLyoqXG4gKiBBIHZhcmlhbnQgb2YgU3ViamVjdCB0aGF0IHJlcXVpcmVzIGFuIGluaXRpYWwgdmFsdWUgYW5kIGVtaXRzIGl0cyBjdXJyZW50XG4gKiB2YWx1ZSB3aGVuZXZlciBpdCBpcyBzdWJzY3JpYmVkIHRvLlxuICpcbiAqIEBjbGFzcyBCZWhhdmlvclN1YmplY3Q8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIEJlaGF2aW9yU3ViamVjdDxUPiBleHRlbmRzIFN1YmplY3Q8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92YWx1ZTogVCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPik6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gc3VwZXIuX3N1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAhc3Vic2NyaXB0aW9uLmNsb3NlZCAmJiBzdWJzY3JpYmVyLm5leHQodGhpcy5fdmFsdWUpO1xuICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gIH1cblxuICBnZXRWYWx1ZSgpOiBUIHtcbiAgICBjb25zdCB7IGhhc0Vycm9yLCB0aHJvd25FcnJvciwgX3ZhbHVlIH0gPSB0aGlzO1xuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgdGhyb3cgdGhyb3duRXJyb3I7XG4gICAgfVxuICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICByZXR1cm4gX3ZhbHVlO1xuICB9XG5cbiAgbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHN1cGVyLm5leHQoKHRoaXMuX3ZhbHVlID0gdmFsdWUpKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IFRpbWVzdGFtcFByb3ZpZGVyIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgRGF0ZVRpbWVzdGFtcFByb3ZpZGVyIGV4dGVuZHMgVGltZXN0YW1wUHJvdmlkZXIge1xuICBkZWxlZ2F0ZTogVGltZXN0YW1wUHJvdmlkZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBkYXRlVGltZXN0YW1wUHJvdmlkZXI6IERhdGVUaW1lc3RhbXBQcm92aWRlciA9IHtcbiAgbm93KCkge1xuICAgIC8vIFVzZSB0aGUgdmFyaWFibGUgcmF0aGVyIHRoYW4gYHRoaXNgIHNvIHRoYXQgdGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWRcbiAgICAvLyB3aXRob3V0IGJlaW5nIGJvdW5kIHRvIHRoZSBwcm92aWRlci5cbiAgICByZXR1cm4gKGRhdGVUaW1lc3RhbXBQcm92aWRlci5kZWxlZ2F0ZSB8fCBEYXRlKS5ub3coKTtcbiAgfSxcbiAgZGVsZWdhdGU6IHVuZGVmaW5lZCxcbn07XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBTY2hlZHVsZXJBY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogQSB1bml0IG9mIHdvcmsgdG8gYmUgZXhlY3V0ZWQgaW4gYSBgc2NoZWR1bGVyYC4gQW4gYWN0aW9uIGlzIHR5cGljYWxseVxuICogY3JlYXRlZCBmcm9tIHdpdGhpbiBhIHtAbGluayBTY2hlZHVsZXJMaWtlfSBhbmQgYW4gUnhKUyB1c2VyIGRvZXMgbm90IG5lZWQgdG8gY29uY2VyblxuICogdGhlbXNlbHZlcyBhYm91dCBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGFuIEFjdGlvbi5cbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgQWN0aW9uPFQ+IGV4dGVuZHMgU3Vic2NyaXB0aW9uIHtcbiAqICAgbmV3IChzY2hlZHVsZXI6IFNjaGVkdWxlciwgd29yazogKHN0YXRlPzogVCkgPT4gdm9pZCk7XG4gKiAgIHNjaGVkdWxlKHN0YXRlPzogVCwgZGVsYXk6IG51bWJlciA9IDApOiBTdWJzY3JpcHRpb247XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAY2xhc3MgQWN0aW9uPFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBBY3Rpb248VD4gZXh0ZW5kcyBTdWJzY3JpcHRpb24ge1xuICBjb25zdHJ1Y3RvcihzY2hlZHVsZXI6IFNjaGVkdWxlciwgd29yazogKHRoaXM6IFNjaGVkdWxlckFjdGlvbjxUPiwgc3RhdGU/OiBUKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICAvKipcbiAgICogU2NoZWR1bGVzIHRoaXMgYWN0aW9uIG9uIGl0cyBwYXJlbnQge0BsaW5rIFNjaGVkdWxlckxpa2V9IGZvciBleGVjdXRpb24uIE1heSBiZSBwYXNzZWRcbiAgICogc29tZSBjb250ZXh0IG9iamVjdCwgYHN0YXRlYC4gTWF5IGhhcHBlbiBhdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUsXG4gICAqIGFjY29yZGluZyB0byB0aGUgYGRlbGF5YCBwYXJhbWV0ZXIsIGlmIHNwZWNpZmllZC5cbiAgICogQHBhcmFtIHtUfSBbc3RhdGVdIFNvbWUgY29udGV4dHVhbCBkYXRhIHRoYXQgdGhlIGB3b3JrYCBmdW5jdGlvbiB1c2VzIHdoZW5cbiAgICogY2FsbGVkIGJ5IHRoZSBTY2hlZHVsZXIuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXldIFRpbWUgdG8gd2FpdCBiZWZvcmUgZXhlY3V0aW5nIHRoZSB3b3JrLCB3aGVyZSB0aGVcbiAgICogdGltZSB1bml0IGlzIGltcGxpY2l0IGFuZCBkZWZpbmVkIGJ5IHRoZSBTY2hlZHVsZXIuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBwdWJsaWMgc2NoZWR1bGUoc3RhdGU/OiBULCBkZWxheTogbnVtYmVyID0gMCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRpbWVySGFuZGxlIH0gZnJvbSAnLi90aW1lckhhbmRsZSc7XG50eXBlIFNldEludGVydmFsRnVuY3Rpb24gPSAoaGFuZGxlcjogKCkgPT4gdm9pZCwgdGltZW91dD86IG51bWJlciwgLi4uYXJnczogYW55W10pID0+IFRpbWVySGFuZGxlO1xudHlwZSBDbGVhckludGVydmFsRnVuY3Rpb24gPSAoaGFuZGxlOiBUaW1lckhhbmRsZSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIEludGVydmFsUHJvdmlkZXIge1xuICBzZXRJbnRlcnZhbDogU2V0SW50ZXJ2YWxGdW5jdGlvbjtcbiAgY2xlYXJJbnRlcnZhbDogQ2xlYXJJbnRlcnZhbEZ1bmN0aW9uO1xuICBkZWxlZ2F0ZTpcbiAgICB8IHtcbiAgICAgICAgc2V0SW50ZXJ2YWw6IFNldEludGVydmFsRnVuY3Rpb247XG4gICAgICAgIGNsZWFySW50ZXJ2YWw6IENsZWFySW50ZXJ2YWxGdW5jdGlvbjtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IGludGVydmFsUHJvdmlkZXI6IEludGVydmFsUHJvdmlkZXIgPSB7XG4gIC8vIFdoZW4gYWNjZXNzaW5nIHRoZSBkZWxlZ2F0ZSwgdXNlIHRoZSB2YXJpYWJsZSByYXRoZXIgdGhhbiBgdGhpc2Agc28gdGhhdFxuICAvLyB0aGUgZnVuY3Rpb25zIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBiZWluZyBib3VuZCB0byB0aGUgcHJvdmlkZXIuXG4gIHNldEludGVydmFsKGhhbmRsZXI6ICgpID0+IHZvaWQsIHRpbWVvdXQ/OiBudW1iZXIsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCB7IGRlbGVnYXRlIH0gPSBpbnRlcnZhbFByb3ZpZGVyO1xuICAgIGlmIChkZWxlZ2F0ZT8uc2V0SW50ZXJ2YWwpIHtcbiAgICAgIHJldHVybiBkZWxlZ2F0ZS5zZXRJbnRlcnZhbChoYW5kbGVyLCB0aW1lb3V0LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHNldEludGVydmFsKGhhbmRsZXIsIHRpbWVvdXQsIC4uLmFyZ3MpO1xuICB9LFxuICBjbGVhckludGVydmFsKGhhbmRsZSkge1xuICAgIGNvbnN0IHsgZGVsZWdhdGUgfSA9IGludGVydmFsUHJvdmlkZXI7XG4gICAgcmV0dXJuIChkZWxlZ2F0ZT8uY2xlYXJJbnRlcnZhbCB8fCBjbGVhckludGVydmFsKShoYW5kbGUgYXMgYW55KTtcbiAgfSxcbiAgZGVsZWdhdGU6IHVuZGVmaW5lZCxcbn07XG4iLCAiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgU2NoZWR1bGVyQWN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG5pbXBvcnQgeyBpbnRlcnZhbFByb3ZpZGVyIH0gZnJvbSAnLi9pbnRlcnZhbFByb3ZpZGVyJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4uL3V0aWwvYXJyUmVtb3ZlJztcbmltcG9ydCB7IFRpbWVySGFuZGxlIH0gZnJvbSAnLi90aW1lckhhbmRsZSc7XG5cbmV4cG9ydCBjbGFzcyBBc3luY0FjdGlvbjxUPiBleHRlbmRzIEFjdGlvbjxUPiB7XG4gIHB1YmxpYyBpZDogVGltZXJIYW5kbGUgfCB1bmRlZmluZWQ7XG4gIHB1YmxpYyBzdGF0ZT86IFQ7XG4gIC8vIEB0cy1pZ25vcmU6IFByb3BlcnR5IGhhcyBubyBpbml0aWFsaXplciBhbmQgaXMgbm90IGRlZmluaXRlbHkgYXNzaWduZWRcbiAgcHVibGljIGRlbGF5OiBudW1iZXI7XG4gIHByb3RlY3RlZCBwZW5kaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNjaGVkdWxlcjogQXN5bmNTY2hlZHVsZXIsIHByb3RlY3RlZCB3b3JrOiAodGhpczogU2NoZWR1bGVyQWN0aW9uPFQ+LCBzdGF0ZT86IFQpID0+IHZvaWQpIHtcbiAgICBzdXBlcihzY2hlZHVsZXIsIHdvcmspO1xuICB9XG5cbiAgcHVibGljIHNjaGVkdWxlKHN0YXRlPzogVCwgZGVsYXk6IG51bWJlciA9IDApOiBTdWJzY3JpcHRpb24ge1xuICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIHJlcGxhY2UgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aCB0aGUgbmV3IHN0YXRlLlxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIGNvbnN0IGlkID0gdGhpcy5pZDtcbiAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcblxuICAgIC8vXG4gICAgLy8gSW1wb3J0YW50IGltcGxlbWVudGF0aW9uIG5vdGU6XG4gICAgLy9cbiAgICAvLyBBY3Rpb25zIG9ubHkgZXhlY3V0ZSBvbmNlIGJ5IGRlZmF1bHQsIHVubGVzcyByZXNjaGVkdWxlZCBmcm9tIHdpdGhpbiB0aGVcbiAgICAvLyBzY2hlZHVsZWQgY2FsbGJhY2suIFRoaXMgYWxsb3dzIHVzIHRvIGltcGxlbWVudCBzaW5nbGUgYW5kIHJlcGVhdFxuICAgIC8vIGFjdGlvbnMgdmlhIHRoZSBzYW1lIGNvZGUgcGF0aCwgd2l0aG91dCBhZGRpbmcgQVBJIHN1cmZhY2UgYXJlYSwgYXMgd2VsbFxuICAgIC8vIGFzIG1pbWljIHRyYWRpdGlvbmFsIHJlY3Vyc2lvbiBidXQgYWNyb3NzIGFzeW5jaHJvbm91cyBib3VuZGFyaWVzLlxuICAgIC8vXG4gICAgLy8gSG93ZXZlciwgSlMgcnVudGltZXMgYW5kIHRpbWVycyBkaXN0aW5ndWlzaCBiZXR3ZWVuIGludGVydmFscyBhY2hpZXZlZCBieVxuICAgIC8vIHNlcmlhbCBgc2V0VGltZW91dGAgY2FsbHMgdnMuIGEgc2luZ2xlIGBzZXRJbnRlcnZhbGAgY2FsbC4gQW4gaW50ZXJ2YWwgb2ZcbiAgICAvLyBzZXJpYWwgYHNldFRpbWVvdXRgIGNhbGxzIGNhbiBiZSBpbmRpdmlkdWFsbHkgZGVsYXllZCwgd2hpY2ggZGVsYXlzXG4gICAgLy8gc2NoZWR1bGluZyB0aGUgbmV4dCBgc2V0VGltZW91dGAsIGFuZCBzbyBvbi4gYHNldEludGVydmFsYCBhdHRlbXB0cyB0b1xuICAgIC8vIGd1YXJhbnRlZSB0aGUgaW50ZXJ2YWwgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIG1vcmUgcHJlY2lzZWx5IHRvIHRoZVxuICAgIC8vIGludGVydmFsIHBlcmlvZCwgcmVnYXJkbGVzcyBvZiBsb2FkLlxuICAgIC8vXG4gICAgLy8gVGhlcmVmb3JlLCB3ZSB1c2UgYHNldEludGVydmFsYCB0byBzY2hlZHVsZSBzaW5nbGUgYW5kIHJlcGVhdCBhY3Rpb25zLlxuICAgIC8vIElmIHRoZSBhY3Rpb24gcmVzY2hlZHVsZXMgaXRzZWxmIHdpdGggdGhlIHNhbWUgZGVsYXksIHRoZSBpbnRlcnZhbCBpcyBub3RcbiAgICAvLyBjYW5jZWxlZC4gSWYgdGhlIGFjdGlvbiBkb2Vzbid0IHJlc2NoZWR1bGUsIG9yIHJlc2NoZWR1bGVzIHdpdGggYVxuICAgIC8vIGRpZmZlcmVudCBkZWxheSwgdGhlIGludGVydmFsIHdpbGwgYmUgY2FuY2VsZWQgYWZ0ZXIgc2NoZWR1bGVkIGNhbGxiYWNrXG4gICAgLy8gZXhlY3V0aW9uLlxuICAgIC8vXG4gICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIHBlbmRpbmcgZmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhpcyBhY3Rpb24gaGFzIGJlZW4gc2NoZWR1bGVkLCBvclxuICAgIC8vIGhhcyByZWN1cnNpdmVseSByZXNjaGVkdWxlZCBpdHNlbGYuXG4gICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAvLyBJZiB0aGlzIGFjdGlvbiBoYXMgYWxyZWFkeSBhbiBhc3luYyBJZCwgZG9uJ3QgcmVxdWVzdCBhIG5ldyBvbmUuXG4gICAgdGhpcy5pZCA9IHRoaXMuaWQgPz8gdGhpcy5yZXF1ZXN0QXN5bmNJZChzY2hlZHVsZXIsIHRoaXMuaWQsIGRlbGF5KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlcXVlc3RBc3luY0lkKHNjaGVkdWxlcjogQXN5bmNTY2hlZHVsZXIsIF9pZD86IFRpbWVySGFuZGxlLCBkZWxheTogbnVtYmVyID0gMCk6IFRpbWVySGFuZGxlIHtcbiAgICByZXR1cm4gaW50ZXJ2YWxQcm92aWRlci5zZXRJbnRlcnZhbChzY2hlZHVsZXIuZmx1c2guYmluZChzY2hlZHVsZXIsIHRoaXMpLCBkZWxheSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjeWNsZUFzeW5jSWQoX3NjaGVkdWxlcjogQXN5bmNTY2hlZHVsZXIsIGlkPzogVGltZXJIYW5kbGUsIGRlbGF5OiBudW1iZXIgfCBudWxsID0gMCk6IFRpbWVySGFuZGxlIHwgdW5kZWZpbmVkIHtcbiAgICAvLyBJZiB0aGlzIGFjdGlvbiBpcyByZXNjaGVkdWxlZCB3aXRoIHRoZSBzYW1lIGRlbGF5IHRpbWUsIGRvbid0IGNsZWFyIHRoZSBpbnRlcnZhbCBpZC5cbiAgICBpZiAoZGVsYXkgIT0gbnVsbCAmJiB0aGlzLmRlbGF5ID09PSBkZWxheSAmJiB0aGlzLnBlbmRpbmcgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgaWYgdGhlIGFjdGlvbidzIGRlbGF5IHRpbWUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGN1cnJlbnQgZGVsYXksXG4gICAgLy8gb3IgdGhlIGFjdGlvbiBoYXMgYmVlbiByZXNjaGVkdWxlZCBiZWZvcmUgaXQncyBleGVjdXRlZCwgY2xlYXIgdGhlIGludGVydmFsIGlkXG4gICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgIGludGVydmFsUHJvdmlkZXIuY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbW1lZGlhdGVseSBleGVjdXRlcyB0aGlzIGFjdGlvbiBhbmQgdGhlIGB3b3JrYCBpdCBjb250YWlucy5cbiAgICogQHJldHVybiB7YW55fVxuICAgKi9cbiAgcHVibGljIGV4ZWN1dGUoc3RhdGU6IFQsIGRlbGF5OiBudW1iZXIpOiBhbnkge1xuICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignZXhlY3V0aW5nIGEgY2FuY2VsbGVkIGFjdGlvbicpO1xuICAgIH1cblxuICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgIGNvbnN0IGVycm9yID0gdGhpcy5fZXhlY3V0ZShzdGF0ZSwgZGVsYXkpO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wZW5kaW5nID09PSBmYWxzZSAmJiB0aGlzLmlkICE9IG51bGwpIHtcbiAgICAgIC8vIERlcXVldWUgaWYgdGhlIGFjdGlvbiBkaWRuJ3QgcmVzY2hlZHVsZSBpdHNlbGYuIERvbid0IGNhbGxcbiAgICAgIC8vIHVuc3Vic2NyaWJlKCksIGJlY2F1c2UgdGhlIGFjdGlvbiBjb3VsZCByZXNjaGVkdWxlIGxhdGVyLlxuICAgICAgLy8gRm9yIGV4YW1wbGU6XG4gICAgICAvLyBgYGBcbiAgICAgIC8vIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiBkb1dvcmsoY291bnRlcikge1xuICAgICAgLy8gICAvKiAuLi4gSSdtIGEgYnVzeSB3b3JrZXIgYmVlIC4uLiAqL1xuICAgICAgLy8gICB2YXIgb3JpZ2luYWxBY3Rpb24gPSB0aGlzO1xuICAgICAgLy8gICAvKiB3YWl0IDEwMG1zIGJlZm9yZSByZXNjaGVkdWxpbmcgdGhlIGFjdGlvbiAqL1xuICAgICAgLy8gICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vICAgICBvcmlnaW5hbEFjdGlvbi5zY2hlZHVsZShjb3VudGVyICsgMSk7XG4gICAgICAvLyAgIH0sIDEwMCk7XG4gICAgICAvLyB9LCAxMDAwKTtcbiAgICAgIC8vIGBgYFxuICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQodGhpcy5zY2hlZHVsZXIsIHRoaXMuaWQsIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfZXhlY3V0ZShzdGF0ZTogVCwgX2RlbGF5OiBudW1iZXIpOiBhbnkge1xuICAgIGxldCBlcnJvcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGVycm9yVmFsdWU6IGFueTtcbiAgICB0cnkge1xuICAgICAgdGhpcy53b3JrKHN0YXRlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvcmVkID0gdHJ1ZTtcbiAgICAgIC8vIEhBQ0s6IFNpbmNlIGNvZGUgZWxzZXdoZXJlIGlzIHJlbHlpbmcgb24gdGhlIFwidHJ1dGhpbmVzc1wiIG9mIHRoZVxuICAgICAgLy8gcmV0dXJuIGhlcmUsIHdlIGNhbid0IGhhdmUgaXQgcmV0dXJuIFwiXCIgb3IgMCBvciBmYWxzZS5cbiAgICAgIC8vIFRPRE86IENsZWFuIHRoaXMgdXAgd2hlbiB3ZSByZWZhY3RvciBzY2hlZHVsZXJzIG1pZC12ZXJzaW9uLTggb3Igc28uXG4gICAgICBlcnJvclZhbHVlID0gZSA/IGUgOiBuZXcgRXJyb3IoJ1NjaGVkdWxlZCBhY3Rpb24gdGhyZXcgZmFsc3kgZXJyb3InKTtcbiAgICB9XG4gICAgaWYgKGVycm9yZWQpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHJldHVybiBlcnJvclZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIGNvbnN0IHsgaWQsIHNjaGVkdWxlciB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHsgYWN0aW9ucyB9ID0gc2NoZWR1bGVyO1xuXG4gICAgICB0aGlzLndvcmsgPSB0aGlzLnN0YXRlID0gdGhpcy5zY2hlZHVsZXIgPSBudWxsITtcbiAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuXG4gICAgICBhcnJSZW1vdmUoYWN0aW9ucywgdGhpcyk7XG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBudWxsKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZWxheSA9IG51bGwhO1xuICAgICAgc3VwZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuL3NjaGVkdWxlci9BY3Rpb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSwgU2NoZWR1bGVyQWN0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBkYXRlVGltZXN0YW1wUHJvdmlkZXIgfSBmcm9tICcuL3NjaGVkdWxlci9kYXRlVGltZXN0YW1wUHJvdmlkZXInO1xuXG4vKipcbiAqIEFuIGV4ZWN1dGlvbiBjb250ZXh0IGFuZCBhIGRhdGEgc3RydWN0dXJlIHRvIG9yZGVyIHRhc2tzIGFuZCBzY2hlZHVsZSB0aGVpclxuICogZXhlY3V0aW9uLiBQcm92aWRlcyBhIG5vdGlvbiBvZiAocG90ZW50aWFsbHkgdmlydHVhbCkgdGltZSwgdGhyb3VnaCB0aGVcbiAqIGBub3coKWAgZ2V0dGVyIG1ldGhvZC5cbiAqXG4gKiBFYWNoIHVuaXQgb2Ygd29yayBpbiBhIFNjaGVkdWxlciBpcyBjYWxsZWQgYW4gYEFjdGlvbmAuXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIFNjaGVkdWxlciB7XG4gKiAgIG5vdygpOiBudW1iZXI7XG4gKiAgIHNjaGVkdWxlKHdvcmssIGRlbGF5Pywgc3RhdGU/KTogU3Vic2NyaXB0aW9uO1xuICogfVxuICogYGBgXG4gKlxuICogQGNsYXNzIFNjaGVkdWxlclxuICogQGRlcHJlY2F0ZWQgU2NoZWR1bGVyIGlzIGFuIGludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCBvZiBSeEpTLCBhbmRcbiAqIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseS4gUmF0aGVyLCBjcmVhdGUgeW91ciBvd24gY2xhc3MgYW5kIGltcGxlbWVudFxuICoge0BsaW5rIFNjaGVkdWxlckxpa2V9LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2hlZHVsZXIgaW1wbGVtZW50cyBTY2hlZHVsZXJMaWtlIHtcbiAgcHVibGljIHN0YXRpYyBub3c6ICgpID0+IG51bWJlciA9IGRhdGVUaW1lc3RhbXBQcm92aWRlci5ub3c7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzY2hlZHVsZXJBY3Rpb25DdG9yOiB0eXBlb2YgQWN0aW9uLCBub3c6ICgpID0+IG51bWJlciA9IFNjaGVkdWxlci5ub3cpIHtcbiAgICB0aGlzLm5vdyA9IG5vdztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGdldHRlciBtZXRob2QgdGhhdCByZXR1cm5zIGEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCB0aW1lXG4gICAqIChhdCB0aGUgdGltZSB0aGlzIGZ1bmN0aW9uIHdhcyBjYWxsZWQpIGFjY29yZGluZyB0byB0aGUgc2NoZWR1bGVyJ3Mgb3duXG4gICAqIGludGVybmFsIGNsb2NrLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCB0aW1lLiBNYXkgb3IgbWF5IG5vdFxuICAgKiBoYXZlIGEgcmVsYXRpb24gdG8gd2FsbC1jbG9jayB0aW1lLiBNYXkgb3IgbWF5IG5vdCByZWZlciB0byBhIHRpbWUgdW5pdFxuICAgKiAoZS5nLiBtaWxsaXNlY29uZHMpLlxuICAgKi9cbiAgcHVibGljIG5vdzogKCkgPT4gbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTY2hlZHVsZXMgYSBmdW5jdGlvbiwgYHdvcmtgLCBmb3IgZXhlY3V0aW9uLiBNYXkgaGFwcGVuIGF0IHNvbWUgcG9pbnQgaW5cbiAgICogdGhlIGZ1dHVyZSwgYWNjb3JkaW5nIHRvIHRoZSBgZGVsYXlgIHBhcmFtZXRlciwgaWYgc3BlY2lmaWVkLiBNYXkgYmUgcGFzc2VkXG4gICAqIHNvbWUgY29udGV4dCBvYmplY3QsIGBzdGF0ZWAsIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBgd29ya2AgZnVuY3Rpb24uXG4gICAqXG4gICAqIFRoZSBnaXZlbiBhcmd1bWVudHMgd2lsbCBiZSBwcm9jZXNzZWQgYW4gc3RvcmVkIGFzIGFuIEFjdGlvbiBvYmplY3QgaW4gYVxuICAgKiBxdWV1ZSBvZiBhY3Rpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKHN0YXRlOiA/VCk6ID9TdWJzY3JpcHRpb259IHdvcmsgQSBmdW5jdGlvbiByZXByZXNlbnRpbmcgYVxuICAgKiB0YXNrLCBvciBzb21lIHVuaXQgb2Ygd29yayB0byBiZSBleGVjdXRlZCBieSB0aGUgU2NoZWR1bGVyLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5XSBUaW1lIHRvIHdhaXQgYmVmb3JlIGV4ZWN1dGluZyB0aGUgd29yaywgd2hlcmUgdGhlXG4gICAqIHRpbWUgdW5pdCBpcyBpbXBsaWNpdCBhbmQgZGVmaW5lZCBieSB0aGUgU2NoZWR1bGVyIGl0c2VsZi5cbiAgICogQHBhcmFtIHtUfSBbc3RhdGVdIFNvbWUgY29udGV4dHVhbCBkYXRhIHRoYXQgdGhlIGB3b3JrYCBmdW5jdGlvbiB1c2VzIHdoZW5cbiAgICogY2FsbGVkIGJ5IHRoZSBTY2hlZHVsZXIuXG4gICAqIEByZXR1cm4ge1N1YnNjcmlwdGlvbn0gQSBzdWJzY3JpcHRpb24gaW4gb3JkZXIgdG8gYmUgYWJsZSB0byB1bnN1YnNjcmliZVxuICAgKiB0aGUgc2NoZWR1bGVkIHdvcmsuXG4gICAqL1xuICBwdWJsaWMgc2NoZWR1bGU8VD4od29yazogKHRoaXM6IFNjaGVkdWxlckFjdGlvbjxUPiwgc3RhdGU/OiBUKSA9PiB2b2lkLCBkZWxheTogbnVtYmVyID0gMCwgc3RhdGU/OiBUKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuc2NoZWR1bGVyQWN0aW9uQ3RvcjxUPih0aGlzLCB3b3JrKS5zY2hlZHVsZShzdGF0ZSwgZGVsYXkpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IEFzeW5jQWN0aW9uIH0gZnJvbSAnLi9Bc3luY0FjdGlvbic7XG5pbXBvcnQgeyBUaW1lckhhbmRsZSB9IGZyb20gJy4vdGltZXJIYW5kbGUnO1xuXG5leHBvcnQgY2xhc3MgQXN5bmNTY2hlZHVsZXIgZXh0ZW5kcyBTY2hlZHVsZXIge1xuICBwdWJsaWMgYWN0aW9uczogQXJyYXk8QXN5bmNBY3Rpb248YW55Pj4gPSBbXTtcbiAgLyoqXG4gICAqIEEgZmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBTY2hlZHVsZXIgaXMgY3VycmVudGx5IGV4ZWN1dGluZyBhIGJhdGNoIG9mXG4gICAqIHF1ZXVlZCBhY3Rpb25zLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogQW4gaW50ZXJuYWwgSUQgdXNlZCB0byB0cmFjayB0aGUgbGF0ZXN0IGFzeW5jaHJvbm91cyB0YXNrIHN1Y2ggYXMgdGhvc2VcbiAgICogY29taW5nIGZyb20gYHNldFRpbWVvdXRgLCBgc2V0SW50ZXJ2YWxgLCBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCwgYW5kXG4gICAqIG90aGVycy5cbiAgICogQHR5cGUge2FueX1cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX3NjaGVkdWxlZDogVGltZXJIYW5kbGUgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoU2NoZWR1bGVyQWN0aW9uOiB0eXBlb2YgQWN0aW9uLCBub3c6ICgpID0+IG51bWJlciA9IFNjaGVkdWxlci5ub3cpIHtcbiAgICBzdXBlcihTY2hlZHVsZXJBY3Rpb24sIG5vdyk7XG4gIH1cblxuICBwdWJsaWMgZmx1c2goYWN0aW9uOiBBc3luY0FjdGlvbjxhbnk+KTogdm9pZCB7XG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGVycm9yOiBhbnk7XG4gICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcblxuICAgIGRvIHtcbiAgICAgIGlmICgoZXJyb3IgPSBhY3Rpb24uZXhlY3V0ZShhY3Rpb24uc3RhdGUsIGFjdGlvbi5kZWxheSkpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkhKSk7IC8vIGV4aGF1c3QgdGhlIHNjaGVkdWxlciBxdWV1ZVxuXG4gICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHdoaWxlICgoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpISkpIHtcbiAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBBc3luY0FjdGlvbiB9IGZyb20gJy4vQXN5bmNBY3Rpb24nO1xuaW1wb3J0IHsgQXN5bmNTY2hlZHVsZXIgfSBmcm9tICcuL0FzeW5jU2NoZWR1bGVyJztcblxuLyoqXG4gKlxuICogQXN5bmMgU2NoZWR1bGVyXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPlNjaGVkdWxlIHRhc2sgYXMgaWYgeW91IHVzZWQgc2V0VGltZW91dCh0YXNrLCBkdXJhdGlvbik8L3NwYW4+XG4gKlxuICogYGFzeW5jYCBzY2hlZHVsZXIgc2NoZWR1bGVzIHRhc2tzIGFzeW5jaHJvbm91c2x5LCBieSBwdXR0aW5nIHRoZW0gb24gdGhlIEphdmFTY3JpcHRcbiAqIGV2ZW50IGxvb3AgcXVldWUuIEl0IGlzIGJlc3QgdXNlZCB0byBkZWxheSB0YXNrcyBpbiB0aW1lIG9yIHRvIHNjaGVkdWxlIHRhc2tzIHJlcGVhdGluZ1xuICogaW4gaW50ZXJ2YWxzLlxuICpcbiAqIElmIHlvdSBqdXN0IHdhbnQgdG8gXCJkZWZlclwiIHRhc2ssIHRoYXQgaXMgdG8gcGVyZm9ybSBpdCByaWdodCBhZnRlciBjdXJyZW50bHlcbiAqIGV4ZWN1dGluZyBzeW5jaHJvbm91cyBjb2RlIGVuZHMgKGNvbW1vbmx5IGFjaGlldmVkIGJ5IGBzZXRUaW1lb3V0KGRlZmVycmVkVGFzaywgMClgKSxcbiAqIGJldHRlciBjaG9pY2Ugd2lsbCBiZSB0aGUge0BsaW5rIGFzYXBTY2hlZHVsZXJ9IHNjaGVkdWxlci5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICogVXNlIGFzeW5jIHNjaGVkdWxlciB0byBkZWxheSB0YXNrXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgYXN5bmNTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCB0YXNrID0gKCkgPT4gY29uc29sZS5sb2coJ2l0IHdvcmtzIScpO1xuICpcbiAqIGFzeW5jU2NoZWR1bGVyLnNjaGVkdWxlKHRhc2ssIDIwMDApO1xuICpcbiAqIC8vIEFmdGVyIDIgc2Vjb25kcyBsb2dzOlxuICogLy8gXCJpdCB3b3JrcyFcIlxuICogYGBgXG4gKlxuICogVXNlIGFzeW5jIHNjaGVkdWxlciB0byByZXBlYXQgdGFzayBpbiBpbnRlcnZhbHNcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBhc3luY1NjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGZ1bmN0aW9uIHRhc2soc3RhdGUpIHtcbiAqICAgY29uc29sZS5sb2coc3RhdGUpO1xuICogICB0aGlzLnNjaGVkdWxlKHN0YXRlICsgMSwgMTAwMCk7IC8vIGB0aGlzYCByZWZlcmVuY2VzIGN1cnJlbnRseSBleGVjdXRpbmcgQWN0aW9uLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoaWNoIHdlIHJlc2NoZWR1bGUgd2l0aCBuZXcgc3RhdGUgYW5kIGRlbGF5XG4gKiB9XG4gKlxuICogYXN5bmNTY2hlZHVsZXIuc2NoZWR1bGUodGFzaywgMzAwMCwgMCk7XG4gKlxuICogLy8gTG9nczpcbiAqIC8vIDAgYWZ0ZXIgM3NcbiAqIC8vIDEgYWZ0ZXIgNHNcbiAqIC8vIDIgYWZ0ZXIgNXNcbiAqIC8vIDMgYWZ0ZXIgNnNcbiAqIGBgYFxuICovXG5cbmV4cG9ydCBjb25zdCBhc3luY1NjaGVkdWxlciA9IG5ldyBBc3luY1NjaGVkdWxlcihBc3luY0FjdGlvbik7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgUmVuYW1lZCB0byB7QGxpbmsgYXN5bmNTY2hlZHVsZXJ9LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gKi9cbmV4cG9ydCBjb25zdCBhc3luYyA9IGFzeW5jU2NoZWR1bGVyO1xuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogQSBzaW1wbGUgT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG5vIGl0ZW1zIHRvIHRoZSBPYnNlcnZlciBhbmQgaW1tZWRpYXRlbHlcbiAqIGVtaXRzIGEgY29tcGxldGUgbm90aWZpY2F0aW9uLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5KdXN0IGVtaXRzICdjb21wbGV0ZScsIGFuZCBub3RoaW5nIGVsc2UuPC9zcGFuPlxuICpcbiAqICFbXShlbXB0eS5wbmcpXG4gKlxuICogQSBzaW1wbGUgT2JzZXJ2YWJsZSB0aGF0IG9ubHkgZW1pdHMgdGhlIGNvbXBsZXRlIG5vdGlmaWNhdGlvbi4gSXQgY2FuIGJlIHVzZWRcbiAqIGZvciBjb21wb3Npbmcgd2l0aCBvdGhlciBPYnNlcnZhYmxlcywgc3VjaCBhcyBpbiBhIHtAbGluayBtZXJnZU1hcH0uXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBMb2cgY29tcGxldGUgbm90aWZpY2F0aW9uXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEVNUFRZIH0gZnJvbSAncnhqcyc7XG4gKlxuICogRU1QVFkuc3Vic2NyaWJlKHtcbiAqICAgbmV4dDogKCkgPT4gY29uc29sZS5sb2coJ05leHQnKSxcbiAqICAgY29tcGxldGU6ICgpID0+IGNvbnNvbGUubG9nKCdDb21wbGV0ZSEnKVxuICogfSk7XG4gKlxuICogLy8gT3V0cHV0c1xuICogLy8gQ29tcGxldGUhXG4gKiBgYGBcbiAqXG4gKiBFbWl0IHRoZSBudW1iZXIgNywgdGhlbiBjb21wbGV0ZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBFTVBUWSwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgcmVzdWx0ID0gRU1QVFkucGlwZShzdGFydFdpdGgoNykpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBPdXRwdXRzXG4gKiAvLyA3XG4gKiBgYGBcbiAqXG4gKiBNYXAgYW5kIGZsYXR0ZW4gb25seSBvZGQgbnVtYmVycyB0byB0aGUgc2VxdWVuY2UgYCdhJ2AsIGAnYidgLCBgJ2MnYFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgbWVyZ2VNYXAsIG9mLCBFTVBUWSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGludGVydmFsJCA9IGludGVydmFsKDEwMDApO1xuICogY29uc3QgcmVzdWx0ID0gaW50ZXJ2YWwkLnBpcGUoXG4gKiAgIG1lcmdlTWFwKHggPT4geCAlIDIgPT09IDEgPyBvZignYScsICdiJywgJ2MnKSA6IEVNUFRZKSxcbiAqICk7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIFJlc3VsdHMgaW4gdGhlIGZvbGxvd2luZyB0byB0aGUgY29uc29sZTpcbiAqIC8vIHggaXMgZXF1YWwgdG8gdGhlIGNvdW50IG9uIHRoZSBpbnRlcnZhbCwgZS5nLiAoMCwgMSwgMiwgMywgLi4uKVxuICogLy8geCB3aWxsIG9jY3VyIGV2ZXJ5IDEwMDBtc1xuICogLy8gaWYgeCAlIDIgaXMgZXF1YWwgdG8gMSwgcHJpbnQgYSwgYiwgYyAoZWFjaCBvbiBpdHMgb3duKVxuICogLy8gaWYgeCAlIDIgaXMgbm90IGVxdWFsIHRvIDEsIG5vdGhpbmcgd2lsbCBiZSBvdXRwdXRcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIE9ic2VydmFibGV9XG4gKiBAc2VlIHtAbGluayBORVZFUn1cbiAqIEBzZWUge0BsaW5rIG9mfVxuICogQHNlZSB7QGxpbmsgdGhyb3dFcnJvcn1cbiAqL1xuZXhwb3J0IGNvbnN0IEVNUFRZID0gbmV3IE9ic2VydmFibGU8bmV2ZXI+KChzdWJzY3JpYmVyKSA9PiBzdWJzY3JpYmVyLmNvbXBsZXRlKCkpO1xuXG4vKipcbiAqIEBwYXJhbSBzY2hlZHVsZXIgQSB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gdG8gdXNlIGZvciBzY2hlZHVsaW5nXG4gKiB0aGUgZW1pc3Npb24gb2YgdGhlIGNvbXBsZXRlIG5vdGlmaWNhdGlvbi5cbiAqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGggdGhlIHtAbGluayBFTVBUWX0gY29uc3RhbnQgb3Ige0BsaW5rIHNjaGVkdWxlZH0gKGUuZy4gYHNjaGVkdWxlZChbXSwgc2NoZWR1bGVyKWApLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eShzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBzY2hlZHVsZXIgPyBlbXB0eVNjaGVkdWxlZChzY2hlZHVsZXIpIDogRU1QVFk7XG59XG5cbmZ1bmN0aW9uIGVtcHR5U2NoZWR1bGVkKHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8bmV2ZXI+KChzdWJzY3JpYmVyKSA9PiBzY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4gc3Vic2NyaWJlci5jb21wbGV0ZSgpKSk7XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTY2hlZHVsZXIodmFsdWU6IGFueSk6IHZhbHVlIGlzIFNjaGVkdWxlckxpa2Uge1xuICByZXR1cm4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5zY2hlZHVsZSk7XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuL2lzU2NoZWR1bGVyJztcblxuZnVuY3Rpb24gbGFzdDxUPihhcnI6IFRbXSk6IFQgfCB1bmRlZmluZWQge1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFJlc3VsdFNlbGVjdG9yKGFyZ3M6IGFueVtdKTogKCguLi5hcmdzOiB1bmtub3duW10pID0+IHVua25vd24pIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24obGFzdChhcmdzKSkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wU2NoZWR1bGVyKGFyZ3M6IGFueVtdKTogU2NoZWR1bGVyTGlrZSB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBpc1NjaGVkdWxlcihsYXN0KGFyZ3MpKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BOdW1iZXIoYXJnczogYW55W10sIGRlZmF1bHRWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiBsYXN0KGFyZ3MpID09PSAnbnVtYmVyJyA/IGFyZ3MucG9wKCkhIDogZGVmYXVsdFZhbHVlO1xufVxuIiwgImV4cG9ydCBjb25zdCBpc0FycmF5TGlrZSA9ICg8VD4oeDogYW55KTogeCBpcyBBcnJheUxpa2U8VD4gPT4geCAmJiB0eXBlb2YgeC5sZW5ndGggPT09ICdudW1iZXInICYmIHR5cGVvZiB4ICE9PSAnZnVuY3Rpb24nKTsiLCAiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gXCIuL2lzRnVuY3Rpb25cIjtcblxuLyoqXG4gKiBUZXN0cyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBcInRoZW5uYWJsZVwiLlxuICogQHBhcmFtIHZhbHVlIHRoZSBvYmplY3QgdG8gdGVzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBQcm9taXNlTGlrZTxhbnk+IHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24odmFsdWU/LnRoZW4pO1xufVxuIiwgImltcG9ydCB7IEludGVyb3BPYnNlcnZhYmxlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG4vKiogSWRlbnRpZmllcyBhbiBpbnB1dCBhcyBiZWluZyBPYnNlcnZhYmxlIChidXQgbm90IG5lY2Vzc2FyeSBhbiBSeCBPYnNlcnZhYmxlKSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQ6IGFueSk6IGlucHV0IGlzIEludGVyb3BPYnNlcnZhYmxlPGFueT4ge1xuICByZXR1cm4gaXNGdW5jdGlvbihpbnB1dFtTeW1ib2xfb2JzZXJ2YWJsZV0pO1xufVxuIiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3luY0l0ZXJhYmxlPFQ+KG9iajogYW55KTogb2JqIGlzIEFzeW5jSXRlcmFibGU8VD4ge1xuICByZXR1cm4gU3ltYm9sLmFzeW5jSXRlcmF0b3IgJiYgaXNGdW5jdGlvbihvYmo/LltTeW1ib2wuYXN5bmNJdGVyYXRvcl0pO1xufVxuIiwgIi8qKlxuICogQ3JlYXRlcyB0aGUgVHlwZUVycm9yIHRvIHRocm93IGlmIGFuIGludmFsaWQgb2JqZWN0IGlzIHBhc3NlZCB0byBgZnJvbWAgb3IgYHNjaGVkdWxlZGAuXG4gKiBAcGFyYW0gaW5wdXQgVGhlIG9iamVjdCB0aGF0IHdhcyBwYXNzZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dDogYW55KSB7XG4gIC8vIFRPRE86IFdlIHNob3VsZCBjcmVhdGUgZXJyb3IgY29kZXMgdGhhdCBjYW4gYmUgbG9va2VkIHVwLCBzbyB0aGlzIGNhbiBiZSBsZXNzIHZlcmJvc2UuXG4gIHJldHVybiBuZXcgVHlwZUVycm9yKFxuICAgIGBZb3UgcHJvdmlkZWQgJHtcbiAgICAgIGlucHV0ICE9PSBudWxsICYmIHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgPyAnYW4gaW52YWxpZCBvYmplY3QnIDogYCcke2lucHV0fSdgXG4gICAgfSB3aGVyZSBhIHN0cmVhbSB3YXMgZXhwZWN0ZWQuIFlvdSBjYW4gcHJvdmlkZSBhbiBPYnNlcnZhYmxlLCBQcm9taXNlLCBSZWFkYWJsZVN0cmVhbSwgQXJyYXksIEFzeW5jSXRlcmFibGUsIG9yIEl0ZXJhYmxlLmBcbiAgKTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sSXRlcmF0b3IoKTogc3ltYm9sIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgIVN5bWJvbC5pdGVyYXRvcikge1xuICAgIHJldHVybiAnQEBpdGVyYXRvcicgYXMgYW55O1xuICB9XG5cbiAgcmV0dXJuIFN5bWJvbC5pdGVyYXRvcjtcbn1cblxuZXhwb3J0IGNvbnN0IGl0ZXJhdG9yID0gZ2V0U3ltYm9sSXRlcmF0b3IoKTtcbiIsICJpbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbi8qKiBJZGVudGlmaWVzIGFuIGlucHV0IGFzIGJlaW5nIGFuIEl0ZXJhYmxlICovXG5leHBvcnQgZnVuY3Rpb24gaXNJdGVyYWJsZShpbnB1dDogYW55KTogaW5wdXQgaXMgSXRlcmFibGU8YW55PiB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGlucHV0Py5bU3ltYm9sX2l0ZXJhdG9yXSk7XG59XG4iLCAiaW1wb3J0IHsgUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiogcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcjxUPihyZWFkYWJsZVN0cmVhbTogUmVhZGFibGVTdHJlYW1MaWtlPFQ+KTogQXN5bmNHZW5lcmF0b3I8VD4ge1xuICBjb25zdCByZWFkZXIgPSByZWFkYWJsZVN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgIGlmIChkb25lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHlpZWxkIHZhbHVlITtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVhZGVyLnJlbGVhc2VMb2NrKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZGFibGVTdHJlYW1MaWtlPFQ+KG9iajogYW55KTogb2JqIGlzIFJlYWRhYmxlU3RyZWFtTGlrZTxUPiB7XG4gIC8vIFdlIGRvbid0IHdhbnQgdG8gdXNlIGluc3RhbmNlb2YgY2hlY2tzIGJlY2F1c2UgdGhleSB3b3VsZCByZXR1cm5cbiAgLy8gZmFsc2UgZm9yIGluc3RhbmNlcyBmcm9tIGFub3RoZXIgUmVhbG0sIGxpa2UgYW4gPGlmcmFtZT4uXG4gIHJldHVybiBpc0Z1bmN0aW9uKG9iaj8uZ2V0UmVhZGVyKTtcbn1cbiIsICJpbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0LCBPYnNlcnZlZFZhbHVlT2YsIFJlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0FzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IgfSBmcm9tICcuLi91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3InO1xuaW1wb3J0IHsgaXNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJdGVyYWJsZSc7XG5pbXBvcnQgeyBpc1JlYWRhYmxlU3RyZWFtTGlrZSwgcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvciB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyByZXBvcnRVbmhhbmRsZWRFcnJvciB9IGZyb20gJy4uL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3InO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N5bWJvbC9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlubmVyRnJvbTxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KGlucHV0OiBPKTogT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz4+O1xuZXhwb3J0IGZ1bmN0aW9uIGlubmVyRnJvbTxUPihpbnB1dDogT2JzZXJ2YWJsZUlucHV0PFQ+KTogT2JzZXJ2YWJsZTxUPiB7XG4gIGlmIChpbnB1dCBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheUxpa2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc1Byb21pc2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbVByb21pc2UoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNBc3luY0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbUl0ZXJhYmxlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21SZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIFJ4SlMgT2JzZXJ2YWJsZSBmcm9tIGFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgYFN5bWJvbC5vYnNlcnZhYmxlYC5cbiAqIEBwYXJhbSBvYmogQW4gb2JqZWN0IHRoYXQgcHJvcGVybHkgaW1wbGVtZW50cyBgU3ltYm9sLm9ic2VydmFibGVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUludGVyb3BPYnNlcnZhYmxlPFQ+KG9iajogYW55KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIGNvbnN0IG9icyA9IG9ialtTeW1ib2xfb2JzZXJ2YWJsZV0oKTtcbiAgICBpZiAoaXNGdW5jdGlvbihvYnMuc3Vic2NyaWJlKSkge1xuICAgICAgcmV0dXJuIG9icy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfVxuICAgIC8vIFNob3VsZCBiZSBjYXVnaHQgYnkgb2JzZXJ2YWJsZSBzdWJzY3JpYmUgZnVuY3Rpb24gZXJyb3IgaGFuZGxpbmcuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvdmlkZWQgb2JqZWN0IGRvZXMgbm90IGNvcnJlY3RseSBpbXBsZW1lbnQgU3ltYm9sLm9ic2VydmFibGUnKTtcbiAgfSk7XG59XG5cbi8qKlxuICogU3luY2hyb25vdXNseSBlbWl0cyB0aGUgdmFsdWVzIG9mIGFuIGFycmF5IGxpa2UgYW5kIGNvbXBsZXRlcy5cbiAqIFRoaXMgaXMgZXhwb3J0ZWQgYmVjYXVzZSB0aGVyZSBhcmUgY3JlYXRpb24gZnVuY3Rpb25zIGFuZCBvcGVyYXRvcnMgdGhhdCBuZWVkIHRvXG4gKiBtYWtlIGRpcmVjdCB1c2Ugb2YgdGhlIHNhbWUgbG9naWMsIGFuZCB0aGVyZSdzIG5vIHJlYXNvbiB0byBtYWtlIHRoZW0gcnVuIHRocm91Z2hcbiAqIGBmcm9tYCBjb25kaXRpb25hbHMgYmVjYXVzZSB3ZSAqa25vdyogdGhleSdyZSBkZWFsaW5nIHdpdGggYW4gYXJyYXkuXG4gKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IHRvIGVtaXQgdmFsdWVzIGZyb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21BcnJheUxpa2U8VD4oYXJyYXk6IEFycmF5TGlrZTxUPikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICAvLyBMb29wIG92ZXIgdGhlIGFycmF5IGFuZCBlbWl0IGVhY2ggdmFsdWUuIE5vdGUgdHdvIHRoaW5ncyBoZXJlOlxuICAgIC8vIDEuIFdlJ3JlIG1ha2luZyBzdXJlIHRoYXQgdGhlIHN1YnNjcmliZXIgaXMgbm90IGNsb3NlZCBvbiBlYWNoIGxvb3AuXG4gICAgLy8gICAgVGhpcyBpcyBzbyB3ZSBkb24ndCBjb250aW51ZSBsb29waW5nIG92ZXIgYSB2ZXJ5IGxhcmdlIGFycmF5IGFmdGVyXG4gICAgLy8gICAgc29tZXRoaW5nIGxpa2UgYSBgdGFrZWAsIGB0YWtlV2hpbGVgLCBvciBvdGhlciBzeW5jaHJvbm91cyB1bnN1YnNjcmlwdGlvblxuICAgIC8vICAgIGhhcyBhbHJlYWR5IHVuc3Vic2NyaWJlZC5cbiAgICAvLyAyLiBJbiB0aGlzIGZvcm0sIHJlZW50cmFudCBjb2RlIGNhbiBhbHRlciB0aGF0IGFycmF5IHdlJ3JlIGxvb3Bpbmcgb3Zlci5cbiAgICAvLyAgICBUaGlzIGlzIGEga25vd24gaXNzdWUsIGJ1dCBjb25zaWRlcmVkIGFuIGVkZ2UgY2FzZS4gVGhlIGFsdGVybmF0aXZlIHdvdWxkXG4gICAgLy8gICAgYmUgdG8gY29weSB0aGUgYXJyYXkgYmVmb3JlIGV4ZWN1dGluZyB0aGUgbG9vcCwgYnV0IHRoaXMgaGFzXG4gICAgLy8gICAgcGVyZm9ybWFuY2UgaW1wbGljYXRpb25zLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICBzdWJzY3JpYmVyLm5leHQoYXJyYXlbaV0pO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVByb21pc2U8VD4ocHJvbWlzZTogUHJvbWlzZUxpa2U8VD4pIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgcHJvbWlzZVxuICAgICAgLnRoZW4oXG4gICAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyOiBhbnkpID0+IHN1YnNjcmliZXIuZXJyb3IoZXJyKVxuICAgICAgKVxuICAgICAgLnRoZW4obnVsbCwgcmVwb3J0VW5oYW5kbGVkRXJyb3IpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21JdGVyYWJsZTxUPihpdGVyYWJsZTogSXRlcmFibGU8VD4pIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBpdGVyYWJsZSkge1xuICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQXN5bmNJdGVyYWJsZTxUPihhc3luY0l0ZXJhYmxlOiBBc3luY0l0ZXJhYmxlPFQ+KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIHByb2Nlc3MoYXN5bmNJdGVyYWJsZSwgc3Vic2NyaWJlcikuY2F0Y2goKGVycikgPT4gc3Vic2NyaWJlci5lcnJvcihlcnIpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUmVhZGFibGVTdHJlYW1MaWtlPFQ+KHJlYWRhYmxlU3RyZWFtOiBSZWFkYWJsZVN0cmVhbUxpa2U8VD4pIHtcbiAgcmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IocmVhZGFibGVTdHJlYW0pKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2VzczxUPihhc3luY0l0ZXJhYmxlOiBBc3luY0l0ZXJhYmxlPFQ+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSB7XG4gIGZvciBhd2FpdCAoY29uc3QgdmFsdWUgb2YgYXN5bmNJdGVyYWJsZSkge1xuICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgLy8gQSBzaWRlLWVmZmVjdCBtYXkgaGF2ZSBjbG9zZWQgb3VyIHN1YnNjcmliZXIsXG4gICAgLy8gY2hlY2sgYmVmb3JlIHRoZSBuZXh0IGl0ZXJhdGlvbi5cbiAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xufVxuIiwgImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBTY2hlZHVsZXJBY3Rpb24sIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU2NoZWR1bGUoXG4gIHBhcmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsXG4gIHdvcms6ICgpID0+IHZvaWQsXG4gIGRlbGF5OiBudW1iZXIsXG4gIHJlcGVhdDogdHJ1ZVxuKTogdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU2NoZWR1bGUoXG4gIHBhcmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsXG4gIHdvcms6ICgpID0+IHZvaWQsXG4gIGRlbGF5PzogbnVtYmVyLFxuICByZXBlYXQ/OiBmYWxzZVxuKTogU3Vic2NyaXB0aW9uO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVNjaGVkdWxlKFxuICBwYXJlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbixcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlLFxuICB3b3JrOiAoKSA9PiB2b2lkLFxuICBkZWxheSA9IDAsXG4gIHJlcGVhdCA9IGZhbHNlXG4pOiBTdWJzY3JpcHRpb24gfCB2b2lkIHtcbiAgY29uc3Qgc2NoZWR1bGVTdWJzY3JpcHRpb24gPSBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKHRoaXM6IFNjaGVkdWxlckFjdGlvbjxhbnk+KSB7XG4gICAgd29yaygpO1xuICAgIGlmIChyZXBlYXQpIHtcbiAgICAgIHBhcmVudFN1YnNjcmlwdGlvbi5hZGQodGhpcy5zY2hlZHVsZShudWxsLCBkZWxheSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9LCBkZWxheSk7XG5cbiAgcGFyZW50U3Vic2NyaXB0aW9uLmFkZChzY2hlZHVsZVN1YnNjcmlwdGlvbik7XG5cbiAgaWYgKCFyZXBlYXQpIHtcbiAgICAvLyBCZWNhdXNlIHVzZXItbGFuZCBzY2hlZHVsZXIgaW1wbGVtZW50YXRpb25zIGFyZSB1bmxpa2VseSB0byBwcm9wZXJseSByZXVzZVxuICAgIC8vIEFjdGlvbnMgZm9yIHJlcGVhdCBzY2hlZHVsaW5nLCB3ZSBjYW4ndCB0cnVzdCB0aGF0IHRoZSByZXR1cm5lZCBzdWJzY3JpcHRpb25cbiAgICAvLyB3aWxsIGNvbnRyb2wgcmVwZWF0IHN1YnNjcmlwdGlvbiBzY2VuYXJpb3MuIFNvIHdlJ3JlIHRyeWluZyB0byBhdm9pZCB1c2luZyB0aGVtXG4gICAgLy8gaW5jb3JyZWN0bHkgd2l0aGluIHRoaXMgbGlicmFyeS5cbiAgICByZXR1cm4gc2NoZWR1bGVTdWJzY3JpcHRpb247XG4gIH1cbn1cbiIsICIvKiogQHByZXR0aWVyICovXG5pbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcblxuLyoqXG4gKiBSZS1lbWl0cyBhbGwgbm90aWZpY2F0aW9ucyBmcm9tIHNvdXJjZSBPYnNlcnZhYmxlIHdpdGggc3BlY2lmaWVkIHNjaGVkdWxlci5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+RW5zdXJlIGEgc3BlY2lmaWMgc2NoZWR1bGVyIGlzIHVzZWQsIGZyb20gb3V0c2lkZSBvZiBhbiBPYnNlcnZhYmxlLjwvc3Bhbj5cbiAqXG4gKiBgb2JzZXJ2ZU9uYCBpcyBhbiBvcGVyYXRvciB0aGF0IGFjY2VwdHMgYSBzY2hlZHVsZXIgYXMgYSBmaXJzdCBwYXJhbWV0ZXIsIHdoaWNoIHdpbGwgYmUgdXNlZCB0byByZXNjaGVkdWxlXG4gKiBub3RpZmljYXRpb25zIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBJdCBtaWdodCBiZSB1c2VmdWwsIGlmIHlvdSBkbyBub3QgaGF2ZSBjb250cm9sIG92ZXJcbiAqIGludGVybmFsIHNjaGVkdWxlciBvZiBhIGdpdmVuIE9ic2VydmFibGUsIGJ1dCB3YW50IHRvIGNvbnRyb2wgd2hlbiBpdHMgdmFsdWVzIGFyZSBlbWl0dGVkIG5ldmVydGhlbGVzcy5cbiAqXG4gKiBSZXR1cm5lZCBPYnNlcnZhYmxlIGVtaXRzIHRoZSBzYW1lIG5vdGlmaWNhdGlvbnMgKG5leHRlZCB2YWx1ZXMsIGNvbXBsZXRlIGFuZCBlcnJvciBldmVudHMpIGFzIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSxcbiAqIGJ1dCByZXNjaGVkdWxlZCB3aXRoIHByb3ZpZGVkIHNjaGVkdWxlci4gTm90ZSB0aGF0IHRoaXMgZG9lc24ndCBtZWFuIHRoYXQgc291cmNlIE9ic2VydmFibGVzIGludGVybmFsXG4gKiBzY2hlZHVsZXIgd2lsbCBiZSByZXBsYWNlZCBpbiBhbnkgd2F5LiBPcmlnaW5hbCBzY2hlZHVsZXIgc3RpbGwgd2lsbCBiZSB1c2VkLCBidXQgd2hlbiB0aGUgc291cmNlIE9ic2VydmFibGUgZW1pdHNcbiAqIG5vdGlmaWNhdGlvbiwgaXQgd2lsbCBiZSBpbW1lZGlhdGVseSBzY2hlZHVsZWQgYWdhaW4gLSB0aGlzIHRpbWUgd2l0aCBzY2hlZHVsZXIgcGFzc2VkIHRvIGBvYnNlcnZlT25gLlxuICogQW4gYW50aS1wYXR0ZXJuIHdvdWxkIGJlIGNhbGxpbmcgYG9ic2VydmVPbmAgb24gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGxvdHMgb2YgdmFsdWVzIHN5bmNocm9ub3VzbHksIHRvIHNwbGl0XG4gKiB0aGF0IGVtaXNzaW9ucyBpbnRvIGFzeW5jaHJvbm91cyBjaHVua3MuIEZvciB0aGlzIHRvIGhhcHBlbiwgc2NoZWR1bGVyIHdvdWxkIGhhdmUgdG8gYmUgcGFzc2VkIGludG8gdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSBkaXJlY3RseSAodXN1YWxseSBpbnRvIHRoZSBvcGVyYXRvciB0aGF0IGNyZWF0ZXMgaXQpLiBgb2JzZXJ2ZU9uYCBzaW1wbHkgZGVsYXlzIG5vdGlmaWNhdGlvbnMgYVxuICogbGl0dGxlIGJpdCBtb3JlLCB0byBlbnN1cmUgdGhhdCB0aGV5IGFyZSBlbWl0dGVkIGF0IGV4cGVjdGVkIG1vbWVudHMuXG4gKlxuICogQXMgYSBtYXR0ZXIgb2YgZmFjdCwgYG9ic2VydmVPbmAgYWNjZXB0cyBzZWNvbmQgcGFyYW1ldGVyLCB3aGljaCBzcGVjaWZpZXMgaW4gbWlsbGlzZWNvbmRzIHdpdGggd2hhdCBkZWxheSBub3RpZmljYXRpb25zXG4gKiB3aWxsIGJlIGVtaXR0ZWQuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiB7QGxpbmsgZGVsYXl9IG9wZXJhdG9yIGFuZCBgb2JzZXJ2ZU9uYCBpcyB0aGF0IGBvYnNlcnZlT25gXG4gKiB3aWxsIGRlbGF5IGFsbCBub3RpZmljYXRpb25zIC0gaW5jbHVkaW5nIGVycm9yIG5vdGlmaWNhdGlvbnMgLSB3aGlsZSBgZGVsYXlgIHdpbGwgcGFzcyB0aHJvdWdoIGVycm9yXG4gKiBmcm9tIHNvdXJjZSBPYnNlcnZhYmxlIGltbWVkaWF0ZWx5IHdoZW4gaXQgaXMgZW1pdHRlZC4gSW4gZ2VuZXJhbCBpdCBpcyBoaWdobHkgcmVjb21tZW5kZWQgdG8gdXNlIGBkZWxheWAgb3BlcmF0b3JcbiAqIGZvciBhbnkga2luZCBvZiBkZWxheWluZyBvZiB2YWx1ZXMgaW4gdGhlIHN0cmVhbSwgd2hpbGUgdXNpbmcgYG9ic2VydmVPbmAgdG8gc3BlY2lmeSB3aGljaCBzY2hlZHVsZXIgc2hvdWxkIGJlIHVzZWRcbiAqIGZvciBub3RpZmljYXRpb24gZW1pc3Npb25zIGluIGdlbmVyYWwuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIEVuc3VyZSB2YWx1ZXMgaW4gc3Vic2NyaWJlIGFyZSBjYWxsZWQganVzdCBiZWZvcmUgYnJvd3NlciByZXBhaW50XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCBvYnNlcnZlT24sIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgc29tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICogc29tZURpdi5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiAyMDBweDtiYWNrZ3JvdW5kOiAjMDljJztcbiAqIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc29tZURpdik7XG4gKiBjb25zdCBpbnRlcnZhbHMgPSBpbnRlcnZhbCgxMCk7ICAgICAgLy8gSW50ZXJ2YWxzIGFyZSBzY2hlZHVsZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGFzeW5jIHNjaGVkdWxlciBieSBkZWZhdWx0Li4uXG4gKiBpbnRlcnZhbHMucGlwZShcbiAqICAgb2JzZXJ2ZU9uKGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSAvLyAuLi5idXQgd2Ugd2lsbCBvYnNlcnZlIG9uIGFuaW1hdGlvbkZyYW1lXG4gKiApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2NoZWR1bGVyIHRvIGVuc3VyZSBzbW9vdGggYW5pbWF0aW9uLlxuICogLnN1YnNjcmliZSh2YWwgPT4ge1xuICogICBzb21lRGl2LnN0eWxlLmhlaWdodCA9IHZhbCArICdweCc7XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGRlbGF5fVxuICpcbiAqIEBwYXJhbSBzY2hlZHVsZXIgU2NoZWR1bGVyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHJlc2NoZWR1bGUgbm90aWZpY2F0aW9ucyBmcm9tIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQHBhcmFtIGRlbGF5IE51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBzdGF0ZXMgd2l0aCB3aGF0IGRlbGF5IGV2ZXJ5IG5vdGlmaWNhdGlvbiBzaG91bGQgYmUgcmVzY2hlZHVsZWQuXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgc2FtZVxuICogbm90aWZpY2F0aW9ucyBhcyB0aGUgc291cmNlIE9ic2VydmFibGUsIGJ1dCB3aXRoIHByb3ZpZGVkIHNjaGVkdWxlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVPbjxUPihzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsIGRlbGF5ID0gMCk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gIHJldHVybiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IHtcbiAgICBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKFxuICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICAodmFsdWUpID0+IGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHN1YnNjcmliZXIubmV4dCh2YWx1ZSksIGRlbGF5KSxcbiAgICAgICAgKCkgPT4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4gc3Vic2NyaWJlci5jb21wbGV0ZSgpLCBkZWxheSksXG4gICAgICAgIChlcnIpID0+IGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHN1YnNjcmliZXIuZXJyb3IoZXJyKSwgZGVsYXkpXG4gICAgICApXG4gICAgKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5cbi8qKlxuICogQXN5bmNocm9ub3VzbHkgc3Vic2NyaWJlcyBPYnNlcnZlcnMgdG8gdGhpcyBPYnNlcnZhYmxlIG9uIHRoZSBzcGVjaWZpZWQge0BsaW5rIFNjaGVkdWxlckxpa2V9LlxuICpcbiAqIFdpdGggYHN1YnNjcmliZU9uYCB5b3UgY2FuIGRlY2lkZSB3aGF0IHR5cGUgb2Ygc2NoZWR1bGVyIGEgc3BlY2lmaWMgT2JzZXJ2YWJsZSB3aWxsIGJlIHVzaW5nIHdoZW4gaXQgaXMgc3Vic2NyaWJlZCB0by5cbiAqXG4gKiBTY2hlZHVsZXJzIGNvbnRyb2wgdGhlIHNwZWVkIGFuZCBvcmRlciBvZiBlbWlzc2lvbnMgdG8gb2JzZXJ2ZXJzIGZyb20gYW4gT2JzZXJ2YWJsZSBzdHJlYW0uXG4gKlxuICogIVtdKHN1YnNjcmliZU9uLnBuZylcbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogR2l2ZW4gdGhlIGZvbGxvd2luZyBjb2RlOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBhID0gb2YoMSwgMiwgMyk7XG4gKiBjb25zdCBiID0gb2YoNCwgNSwgNik7XG4gKlxuICogbWVyZ2UoYSwgYikuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAqXG4gKiAvLyBPdXRwdXRzXG4gKiAvLyAxXG4gKiAvLyAyXG4gKiAvLyAzXG4gKiAvLyA0XG4gKiAvLyA1XG4gKiAvLyA2XG4gKiBgYGBcbiAqXG4gKiBCb3RoIE9ic2VydmFibGUgYGFgIGFuZCBgYmAgd2lsbCBlbWl0IHRoZWlyIHZhbHVlcyBkaXJlY3RseSBhbmQgc3luY2hyb25vdXNseSBvbmNlIHRoZXkgYXJlIHN1YnNjcmliZWQgdG8uXG4gKlxuICogSWYgd2UgaW5zdGVhZCB1c2UgdGhlIGBzdWJzY3JpYmVPbmAgb3BlcmF0b3IgZGVjbGFyaW5nIHRoYXQgd2Ugd2FudCB0byB1c2UgdGhlIHtAbGluayBhc3luY1NjaGVkdWxlcn0gZm9yIHZhbHVlcyBlbWl0dGVkIGJ5IE9ic2VydmFibGUgYGFgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgc3Vic2NyaWJlT24sIGFzeW5jU2NoZWR1bGVyLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGEgPSBvZigxLCAyLCAzKS5waXBlKHN1YnNjcmliZU9uKGFzeW5jU2NoZWR1bGVyKSk7XG4gKiBjb25zdCBiID0gb2YoNCwgNSwgNik7XG4gKlxuICogbWVyZ2UoYSwgYikuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAqXG4gKiAvLyBPdXRwdXRzXG4gKiAvLyA0XG4gKiAvLyA1XG4gKiAvLyA2XG4gKiAvLyAxXG4gKiAvLyAyXG4gKiAvLyAzXG4gKiBgYGBcbiAqXG4gKiBUaGUgcmVhc29uIGZvciB0aGlzIGlzIHRoYXQgT2JzZXJ2YWJsZSBgYmAgZW1pdHMgaXRzIHZhbHVlcyBkaXJlY3RseSBhbmQgc3luY2hyb25vdXNseSBsaWtlIGJlZm9yZVxuICogYnV0IHRoZSBlbWlzc2lvbnMgZnJvbSBgYWAgYXJlIHNjaGVkdWxlZCBvbiB0aGUgZXZlbnQgbG9vcCBiZWNhdXNlIHdlIGFyZSBub3cgdXNpbmcgdGhlIHtAbGluayBhc3luY1NjaGVkdWxlcn0gZm9yIHRoYXQgc3BlY2lmaWMgT2JzZXJ2YWJsZS5cbiAqXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFRoZSB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gdG8gcGVyZm9ybSBzdWJzY3JpcHRpb24gYWN0aW9ucyBvbi5cbiAqIEBwYXJhbSBkZWxheSBBIGRlbGF5IHRvIHBhc3MgdG8gdGhlIHNjaGVkdWxlciB0byBkZWxheSBzdWJzY3JpcHRpb25zXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgbW9kaWZpZWQgc28gdGhhdCBpdHNcbiAqIHN1YnNjcmlwdGlvbnMgaGFwcGVuIG9uIHRoZSBzcGVjaWZpZWQge0BsaW5rIFNjaGVkdWxlckxpa2V9LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlT248VD4oc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlLCBkZWxheTogbnVtYmVyID0gMCk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gIHJldHVybiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IHtcbiAgICBzdWJzY3JpYmVyLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKSwgZGVsYXkpKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgb2JzZXJ2ZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL29ic2VydmVPbic7XG5pbXBvcnQgeyBzdWJzY3JpYmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9zdWJzY3JpYmVPbic7XG5pbXBvcnQgeyBJbnRlcm9wT2JzZXJ2YWJsZSwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlT2JzZXJ2YWJsZTxUPihpbnB1dDogSW50ZXJvcE9ic2VydmFibGU8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gaW5uZXJGcm9tKGlucHV0KS5waXBlKHN1YnNjcmliZU9uKHNjaGVkdWxlciksIG9ic2VydmVPbihzY2hlZHVsZXIpKTtcbn1cbiIsICJpbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBvYnNlcnZlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvb2JzZXJ2ZU9uJztcbmltcG9ydCB7IHN1YnNjcmliZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL3N1YnNjcmliZU9uJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZVByb21pc2U8VD4oaW5wdXQ6IFByb21pc2VMaWtlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgcmV0dXJuIGlubmVyRnJvbShpbnB1dCkucGlwZShzdWJzY3JpYmVPbihzY2hlZHVsZXIpLCBvYnNlcnZlT24oc2NoZWR1bGVyKSk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlQXJyYXk8VD4oaW5wdXQ6IEFycmF5TGlrZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIC8vIFRoZSBjdXJyZW50IGFycmF5IGluZGV4LlxuICAgIGxldCBpID0gMDtcbiAgICAvLyBTdGFydCBpdGVyYXRpbmcgb3ZlciB0aGUgYXJyYXkgbGlrZSBvbiBhIHNjaGVkdWxlLlxuICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGkgPT09IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGhpdCB0aGUgZW5kIG9mIHRoZSBhcnJheSBsaWtlIGluIHRoZVxuICAgICAgICAvLyBwcmV2aW91cyBqb2IsIHdlIGNhbiBjb21wbGV0ZS5cbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlIGxldCdzIG5leHQgdGhlIHZhbHVlIGF0IHRoZSBjdXJyZW50IGluZGV4LFxuICAgICAgICAvLyB0aGVuIGluY3JlbWVudCBvdXIgaW5kZXguXG4gICAgICAgIHN1YnNjcmliZXIubmV4dChpbnB1dFtpKytdKTtcbiAgICAgICAgLy8gSWYgdGhlIGxhc3QgZW1pc3Npb24gZGlkbid0IGNhdXNlIHVzIHRvIGNsb3NlIHRoZSBzdWJzY3JpYmVyXG4gICAgICAgIC8vICh2aWEgdGFrZSBvciBzb21lIHNpZGUgZWZmZWN0KSwgcmVzY2hlZHVsZSB0aGUgam9iIGFuZCB3ZSdsbFxuICAgICAgICAvLyBtYWtlIGFub3RoZXIgcGFzcy5cbiAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXRlcmF0b3IgYXMgU3ltYm9sX2l0ZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9sL2l0ZXJhdG9yJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuXG4vKipcbiAqIFVzZWQgaW4ge0BsaW5rIHNjaGVkdWxlZH0gdG8gY3JlYXRlIGFuIG9ic2VydmFibGUgZnJvbSBhbiBJdGVyYWJsZS5cbiAqIEBwYXJhbSBpbnB1dCBUaGUgaXRlcmFibGUgdG8gY3JlYXRlIGFuIG9ic2VydmFibGUgZnJvbVxuICogQHBhcmFtIHNjaGVkdWxlciBUaGUgc2NoZWR1bGVyIHRvIHVzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVJdGVyYWJsZTxUPihpbnB1dDogSXRlcmFibGU8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oKHN1YnNjcmliZXIpID0+IHtcbiAgICBsZXQgaXRlcmF0b3I6IEl0ZXJhdG9yPFQsIFQ+O1xuXG4gICAgLy8gU2NoZWR1bGUgdGhlIGluaXRpYWwgY3JlYXRpb24gb2YgdGhlIGl0ZXJhdG9yIGZyb21cbiAgICAvLyB0aGUgaXRlcmFibGUuIFRoaXMgaXMgc28gdGhlIGNvZGUgaW4gdGhlIGl0ZXJhYmxlIGlzXG4gICAgLy8gbm90IGNhbGxlZCB1bnRpbCB0aGUgc2NoZWR1bGVkIGpvYiBmaXJlcy5cbiAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgdGhlIGl0ZXJhdG9yLlxuICAgICAgaXRlcmF0b3IgPSAoaW5wdXQgYXMgYW55KVtTeW1ib2xfaXRlcmF0b3JdKCk7XG5cbiAgICAgIGV4ZWN1dGVTY2hlZHVsZShcbiAgICAgICAgc3Vic2NyaWJlcixcbiAgICAgICAgc2NoZWR1bGVyLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZhbHVlOiBUO1xuICAgICAgICAgIGxldCBkb25lOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBQdWxsIHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGl0ZXJhdG9yXG4gICAgICAgICAgICAoeyB2YWx1ZSwgZG9uZSB9ID0gaXRlcmF0b3IubmV4dCgpKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIFdlIGdvdCBhbiBlcnJvciB3aGlsZSBwdWxsaW5nIGZyb20gdGhlIGl0ZXJhdG9yXG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIC8vIElmIGl0IGlzIFwiZG9uZVwiIHdlIGp1c3QgY29tcGxldGUuIFRoaXMgbWltaWNzIHRoZVxuICAgICAgICAgICAgLy8gYmVoYXZpb3Igb2YgSmF2YVNjcmlwdCdzIGBmb3IuLm9mYCBjb25zdW1wdGlvbiBvZlxuICAgICAgICAgICAgLy8gaXRlcmFibGVzLCB3aGljaCB3aWxsIG5vdCBlbWl0IHRoZSB2YWx1ZSBmcm9tIGFuIGl0ZXJhdG9yXG4gICAgICAgICAgICAvLyByZXN1bHQgb2YgYHsgZG9uZTogdHJ1ZTogdmFsdWU6ICdoZXJlJyB9YC5cbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhlIGl0ZXJhYmxlIGlzIG5vdCBkb25lLCBlbWl0IHRoZSB2YWx1ZS5cbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAwLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gRHVyaW5nIGZpbmFsaXphdGlvbiwgaWYgd2Ugc2VlIHRoaXMgaXRlcmF0b3IgaGFzIGEgYHJldHVybmAgbWV0aG9kLFxuICAgIC8vIHRoZW4gd2Uga25vdyBpdCBpcyBhIEdlbmVyYXRvciwgYW5kIG5vdCBqdXN0IGFuIEl0ZXJhdG9yLiBTbyB3ZSBjYWxsXG4gICAgLy8gdGhlIGByZXR1cm4oKWAgZnVuY3Rpb24uIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBhbnkgYGZpbmFsbHkgeyB9YCBibG9ja3NcbiAgICAvLyBpbnNpZGUgb2YgdGhlIGdlbmVyYXRvciB3ZSBjYW4gaGl0IHdpbGwgYmUgaGl0IHByb3Blcmx5LlxuICAgIHJldHVybiAoKSA9PiBpc0Z1bmN0aW9uKGl0ZXJhdG9yPy5yZXR1cm4pICYmIGl0ZXJhdG9yLnJldHVybigpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBc3luY0l0ZXJhYmxlPFQ+KGlucHV0OiBBc3luY0l0ZXJhYmxlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgaWYgKCFpbnB1dCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSXRlcmFibGUgY2Fubm90IGJlIG51bGwnKTtcbiAgfVxuICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oKHN1YnNjcmliZXIpID0+IHtcbiAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IGlucHV0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpO1xuICAgICAgZXhlY3V0ZVNjaGVkdWxlKFxuICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICBzY2hlZHVsZXIsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpdGVyYXRvci5uZXh0KCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHJlbW92ZSB0aGUgc3Vic2NyaXB0aW9ucyBmcm9tXG4gICAgICAgICAgICAgIC8vIHRoZSBwYXJlbnQgc3Vic2NyaXB0aW9uLlxuICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgMCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSwgUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvciB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2U8VD4oaW5wdXQ6IFJlYWRhYmxlU3RyZWFtTGlrZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiBzY2hlZHVsZUFzeW5jSXRlcmFibGUocmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcihpbnB1dCksIHNjaGVkdWxlcik7XG59XG4iLCAiaW1wb3J0IHsgc2NoZWR1bGVPYnNlcnZhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZU9ic2VydmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVQcm9taXNlIH0gZnJvbSAnLi9zY2hlZHVsZVByb21pc2UnO1xuaW1wb3J0IHsgc2NoZWR1bGVBcnJheSB9IGZyb20gJy4vc2NoZWR1bGVBcnJheSc7XG5pbXBvcnQgeyBzY2hlZHVsZUl0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUl0ZXJhYmxlJztcbmltcG9ydCB7IHNjaGVkdWxlQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4vc2NoZWR1bGVBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgaXNBcnJheUxpa2UgfSBmcm9tICcuLi91dGlsL2lzQXJyYXlMaWtlJztcbmltcG9ydCB7IGlzSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzSXRlcmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0LCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0FzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IgfSBmcm9tICcuLi91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3InO1xuaW1wb3J0IHsgaXNSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcbmltcG9ydCB7IHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi9zY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZSc7XG5cbi8qKlxuICogQ29udmVydHMgZnJvbSBhIGNvbW1vbiB7QGxpbmsgT2JzZXJ2YWJsZUlucHV0fSB0eXBlIHRvIGFuIG9ic2VydmFibGUgd2hlcmUgc3Vic2NyaXB0aW9uIGFuZCBlbWlzc2lvbnNcbiAqIGFyZSBzY2hlZHVsZWQgb24gdGhlIHByb3ZpZGVkIHNjaGVkdWxlci5cbiAqXG4gKiBAc2VlIHtAbGluayBmcm9tfVxuICogQHNlZSB7QGxpbmsgb2Z9XG4gKlxuICogQHBhcmFtIGlucHV0IFRoZSBvYnNlcnZhYmxlLCBhcnJheSwgcHJvbWlzZSwgaXRlcmFibGUsIGV0YyB5b3Ugd291bGQgbGlrZSB0byBzY2hlZHVsZVxuICogQHBhcmFtIHNjaGVkdWxlciBUaGUgc2NoZWR1bGVyIHRvIHVzZSB0byBzY2hlZHVsZSB0aGUgc3Vic2NyaXB0aW9uIGFuZCBlbWlzc2lvbnMgZnJvbVxuICogdGhlIHJldHVybmVkIG9ic2VydmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZWQ8VD4oaW5wdXQ6IE9ic2VydmFibGVJbnB1dDxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTxUPiB7XG4gIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgaWYgKGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVPYnNlcnZhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheUxpa2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc0FzeW5jSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVBc3luY0l0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICB9XG4gIHRocm93IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0KTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIFNjaGVkdWxlckxpa2UsIE9ic2VydmVkVmFsdWVPZiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IHNjaGVkdWxlZCB9IGZyb20gJy4uL3NjaGVkdWxlZC9zY2hlZHVsZWQnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi9pbm5lckZyb20nO1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbTxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KGlucHV0OiBPKTogT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz4+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgc2NoZWR1bGVyYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYHNjaGVkdWxlZGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb208TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PihpbnB1dDogTywgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlIHwgdW5kZWZpbmVkKTogT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz4+O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZSBmcm9tIGFuIEFycmF5LCBhbiBhcnJheS1saWtlIG9iamVjdCwgYSBQcm9taXNlLCBhbiBpdGVyYWJsZSBvYmplY3QsIG9yIGFuIE9ic2VydmFibGUtbGlrZSBvYmplY3QuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkNvbnZlcnRzIGFsbW9zdCBhbnl0aGluZyB0byBhbiBPYnNlcnZhYmxlLjwvc3Bhbj5cbiAqXG4gKiAhW10oZnJvbS5wbmcpXG4gKlxuICogYGZyb21gIGNvbnZlcnRzIHZhcmlvdXMgb3RoZXIgb2JqZWN0cyBhbmQgZGF0YSB0eXBlcyBpbnRvIE9ic2VydmFibGVzLiBJdCBhbHNvIGNvbnZlcnRzIGEgUHJvbWlzZSwgYW4gYXJyYXktbGlrZSwgb3IgYW5cbiAqIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9JdGVyYXRpb25fcHJvdG9jb2xzI2l0ZXJhYmxlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aXRlcmFibGU8L2E+XG4gKiBvYmplY3QgaW50byBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIGl0ZW1zIGluIHRoYXQgcHJvbWlzZSwgYXJyYXksIG9yIGl0ZXJhYmxlLiBBIFN0cmluZywgaW4gdGhpcyBjb250ZXh0LCBpcyB0cmVhdGVkXG4gKiBhcyBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzLiBPYnNlcnZhYmxlLWxpa2Ugb2JqZWN0cyAoY29udGFpbnMgYSBmdW5jdGlvbiBuYW1lZCB3aXRoIHRoZSBFUzIwMTUgU3ltYm9sIGZvciBPYnNlcnZhYmxlKSBjYW4gYWxzbyBiZVxuICogY29udmVydGVkIHRocm91Z2ggdGhpcyBvcGVyYXRvci5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIENvbnZlcnRzIGFuIGFycmF5IHRvIGFuIE9ic2VydmFibGVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGFycmF5ID0gWzEwLCAyMCwgMzBdO1xuICogY29uc3QgcmVzdWx0ID0gZnJvbShhcnJheSk7XG4gKlxuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gMTBcbiAqIC8vIDIwXG4gKiAvLyAzMFxuICogYGBgXG4gKlxuICogQ29udmVydCBhbiBpbmZpbml0ZSBpdGVyYWJsZSAoZnJvbSBhIGdlbmVyYXRvcikgdG8gYW4gT2JzZXJ2YWJsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tLCB0YWtlIH0gZnJvbSAncnhqcyc7XG4gKlxuICogZnVuY3Rpb24qIGdlbmVyYXRlRG91YmxlcyhzZWVkKSB7XG4gKiAgICBsZXQgaSA9IHNlZWQ7XG4gKiAgICB3aGlsZSAodHJ1ZSkge1xuICogICAgICB5aWVsZCBpO1xuICogICAgICBpID0gMiAqIGk7IC8vIGRvdWJsZSBpdFxuICogICAgfVxuICogfVxuICpcbiAqIGNvbnN0IGl0ZXJhdG9yID0gZ2VuZXJhdGVEb3VibGVzKDMpO1xuICogY29uc3QgcmVzdWx0ID0gZnJvbShpdGVyYXRvcikucGlwZSh0YWtlKDEwKSk7XG4gKlxuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gM1xuICogLy8gNlxuICogLy8gMTJcbiAqIC8vIDI0XG4gKiAvLyA0OFxuICogLy8gOTZcbiAqIC8vIDE5MlxuICogLy8gMzg0XG4gKiAvLyA3NjhcbiAqIC8vIDE1MzZcbiAqIGBgYFxuICpcbiAqIFdpdGggYGFzeW5jU2NoZWR1bGVyYFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tLCBhc3luY1NjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnNvbGUubG9nKCdzdGFydCcpO1xuICpcbiAqIGNvbnN0IGFycmF5ID0gWzEwLCAyMCwgMzBdO1xuICogY29uc3QgcmVzdWx0ID0gZnJvbShhcnJheSwgYXN5bmNTY2hlZHVsZXIpO1xuICpcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogY29uc29sZS5sb2coJ2VuZCcpO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAnc3RhcnQnXG4gKiAvLyAnZW5kJ1xuICogLy8gMTBcbiAqIC8vIDIwXG4gKiAvLyAzMFxuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgZnJvbUV2ZW50fVxuICogQHNlZSB7QGxpbmsgZnJvbUV2ZW50UGF0dGVybn1cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGVJbnB1dDxUPn0gQSBzdWJzY3JpcHRpb24gb2JqZWN0LCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUtbGlrZSxcbiAqIGFuIEFycmF5LCBhbiBpdGVyYWJsZSwgb3IgYW4gYXJyYXktbGlrZSBvYmplY3QgdG8gYmUgY29udmVydGVkLlxuICogQHBhcmFtIHtTY2hlZHVsZXJMaWtlfSBBbiBvcHRpb25hbCB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gb24gd2hpY2ggdG8gc2NoZWR1bGUgdGhlIGVtaXNzaW9uIG9mIHZhbHVlcy5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8VD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tPFQ+KGlucHV0OiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHNjaGVkdWxlciA/IHNjaGVkdWxlZChpbnB1dCwgc2NoZWR1bGVyKSA6IGlubmVyRnJvbShpbnB1dCk7XG59XG4iLCAiLyoqXG4gKiBDaGVja3MgdG8gc2VlIGlmIGEgdmFsdWUgaXMgbm90IG9ubHkgYSBgRGF0ZWAgb2JqZWN0LFxuICogYnV0IGEgKnZhbGlkKiBgRGF0ZWAgb2JqZWN0IHRoYXQgY2FuIGJlIGNvbnZlcnRlZCB0byBhXG4gKiBudW1iZXIuIEZvciBleGFtcGxlLCBgbmV3IERhdGUoJ2JsYWgnKWAgaXMgaW5kZWVkIGFuXG4gKiBgaW5zdGFuY2VvZiBEYXRlYCwgaG93ZXZlciBpdCBjYW5ub3QgYmUgY29udmVydGVkIHRvIGFcbiAqIG51bWJlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWREYXRlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBEYXRlIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiAhaXNOYU4odmFsdWUgYXMgYW55KTtcbn1cbiIsICJpbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgUj4ocHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPjtcbi8qKiBAZGVwcmVjYXRlZCBVc2UgYSBjbG9zdXJlIGluc3RlYWQgb2YgYSBgdGhpc0FyZ2AuIFNpZ25hdHVyZXMgYWNjZXB0aW5nIGEgYHRoaXNBcmdgIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgUiwgQT4ocHJvamVjdDogKHRoaXM6IEEsIHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSLCB0aGlzQXJnOiBBKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPjtcblxuLyoqXG4gKiBBcHBsaWVzIGEgZ2l2ZW4gYHByb2plY3RgIGZ1bmN0aW9uIHRvIGVhY2ggdmFsdWUgZW1pdHRlZCBieSB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlLCBhbmQgZW1pdHMgdGhlIHJlc3VsdGluZyB2YWx1ZXMgYXMgYW4gT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+TGlrZSBbQXJyYXkucHJvdG90eXBlLm1hcCgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9tYXApLFxuICogaXQgcGFzc2VzIGVhY2ggc291cmNlIHZhbHVlIHRocm91Z2ggYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0byBnZXRcbiAqIGNvcnJlc3BvbmRpbmcgb3V0cHV0IHZhbHVlcy48L3NwYW4+XG4gKlxuICogIVtdKG1hcC5wbmcpXG4gKlxuICogU2ltaWxhciB0byB0aGUgd2VsbCBrbm93biBgQXJyYXkucHJvdG90eXBlLm1hcGAgZnVuY3Rpb24sIHRoaXMgb3BlcmF0b3JcbiAqIGFwcGxpZXMgYSBwcm9qZWN0aW9uIHRvIGVhY2ggdmFsdWUgYW5kIGVtaXRzIHRoYXQgcHJvamVjdGlvbiBpbiB0aGUgb3V0cHV0XG4gKiBPYnNlcnZhYmxlLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBNYXAgZXZlcnkgY2xpY2sgdG8gdGhlIGBjbGllbnRYYCBwb3NpdGlvbiBvZiB0aGF0IGNsaWNrXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb21FdmVudCwgbWFwIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50PFBvaW50ZXJFdmVudD4oZG9jdW1lbnQsICdjbGljaycpO1xuICogY29uc3QgcG9zaXRpb25zID0gY2xpY2tzLnBpcGUobWFwKGV2ID0+IGV2LmNsaWVudFgpKTtcbiAqXG4gKiBwb3NpdGlvbnMuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgbWFwVG99XG4gKiBAc2VlIHtAbGluayBwbHVja31cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKTogUn0gcHJvamVjdCBUaGUgZnVuY3Rpb24gdG8gYXBwbHlcbiAqIHRvIGVhY2ggYHZhbHVlYCBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS4gVGhlIGBpbmRleGAgcGFyYW1ldGVyIGlzXG4gKiB0aGUgbnVtYmVyIGBpYCBmb3IgdGhlIGktdGggZW1pc3Npb24gdGhhdCBoYXMgaGFwcGVuZWQgc2luY2UgdGhlXG4gKiBzdWJzY3JpcHRpb24sIHN0YXJ0aW5nIGZyb20gdGhlIG51bWJlciBgMGAuXG4gKiBAcGFyYW0ge2FueX0gW3RoaXNBcmddIEFuIG9wdGlvbmFsIGFyZ3VtZW50IHRvIGRlZmluZSB3aGF0IGB0aGlzYCBpcyBpbiB0aGVcbiAqIGBwcm9qZWN0YCBmdW5jdGlvbi5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSB2YWx1ZXMgZnJvbSB0aGVcbiAqIHNvdXJjZSBPYnNlcnZhYmxlIHRyYW5zZm9ybWVkIGJ5IHRoZSBnaXZlbiBgcHJvamVjdGAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgUj4ocHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSLCB0aGlzQXJnPzogYW55KTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPiB7XG4gIHJldHVybiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IHtcbiAgICAvLyBUaGUgaW5kZXggb2YgdGhlIHZhbHVlIGZyb20gdGhlIHNvdXJjZS4gVXNlZCB3aXRoIHByb2plY3Rpb24uXG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHNvdXJjZSwgYWxsIGVycm9ycyBhbmQgY29tcGxldGlvbnMgYXJlIHNlbnQgYWxvbmdcbiAgICAvLyB0byB0aGUgY29uc3VtZXIuXG4gICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCAodmFsdWU6IFQpID0+IHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgcHJvamVjdGlvbiBmdW5jdGlvbiB3aXRoIHRoZSBhcHByb3ByaWF0ZSB0aGlzIGNvbnRleHQsXG4gICAgICAgIC8vIGFuZCBzZW5kIHRoZSByZXN1bHRpbmcgdmFsdWUgdG8gdGhlIGNvbnN1bWVyLlxuICAgICAgICBzdWJzY3JpYmVyLm5leHQocHJvamVjdC5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCsrKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCIuLi9vcGVyYXRvcnMvbWFwXCI7XG5cbmNvbnN0IHsgaXNBcnJheSB9ID0gQXJyYXk7XG5cbmZ1bmN0aW9uIGNhbGxPckFwcGx5PFQsIFI+KGZuOiAoKC4uLnZhbHVlczogVFtdKSA9PiBSKSwgYXJnczogVHxUW10pOiBSIHtcbiAgICByZXR1cm4gaXNBcnJheShhcmdzKSA/IGZuKC4uLmFyZ3MpIDogZm4oYXJncyk7XG59XG5cbi8qKlxuICogVXNlZCBpbiBzZXZlcmFsIC0tIG1vc3RseSBkZXByZWNhdGVkIC0tIHNpdHVhdGlvbnMgd2hlcmUgd2UgbmVlZCB0byBcbiAqIGFwcGx5IGEgbGlzdCBvZiBhcmd1bWVudHMgb3IgYSBzaW5nbGUgYXJndW1lbnQgdG8gYSByZXN1bHQgc2VsZWN0b3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBPbmVPck1hbnlBcmdzPFQsIFI+KGZuOiAoKC4uLnZhbHVlczogVFtdKSA9PiBSKSk6IE9wZXJhdG9yRnVuY3Rpb248VHxUW10sIFI+IHtcbiAgICByZXR1cm4gbWFwKGFyZ3MgPT4gY2FsbE9yQXBwbHkoZm4sIGFyZ3MpKVxufSIsICJjb25zdCB7IGlzQXJyYXkgfSA9IEFycmF5O1xuY29uc3QgeyBnZXRQcm90b3R5cGVPZiwgcHJvdG90eXBlOiBvYmplY3RQcm90bywga2V5czogZ2V0S2V5cyB9ID0gT2JqZWN0O1xuXG4vKipcbiAqIFVzZWQgaW4gZnVuY3Rpb25zIHdoZXJlIGVpdGhlciBhIGxpc3Qgb2YgYXJndW1lbnRzLCBhIHNpbmdsZSBhcnJheSBvZiBhcmd1bWVudHMsIG9yIGFcbiAqIGRpY3Rpb25hcnkgb2YgYXJndW1lbnRzIGNhbiBiZSByZXR1cm5lZC4gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhbiBgYXJnc2AgcHJvcGVydHkgd2l0aFxuICogdGhlIGFyZ3VtZW50cyBpbiBhbiBhcnJheSwgaWYgaXQgaXMgYSBkaWN0aW9uYXJ5LCBpdCB3aWxsIGFsc28gcmV0dXJuIHRoZSBga2V5c2AgaW4gYW5vdGhlclxuICogcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmdzQXJnQXJyYXlPck9iamVjdDxULCBPIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgVD4+KGFyZ3M6IFRbXSB8IFtPXSB8IFtUW11dKTogeyBhcmdzOiBUW107IGtleXM6IHN0cmluZ1tdIHwgbnVsbCB9IHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3QgPSBhcmdzWzBdO1xuICAgIGlmIChpc0FycmF5KGZpcnN0KSkge1xuICAgICAgcmV0dXJuIHsgYXJnczogZmlyc3QsIGtleXM6IG51bGwgfTtcbiAgICB9XG4gICAgaWYgKGlzUE9KTyhmaXJzdCkpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBnZXRLZXlzKGZpcnN0KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFyZ3M6IGtleXMubWFwKChrZXkpID0+IGZpcnN0W2tleV0pLFxuICAgICAgICBrZXlzLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBhcmdzOiBhcmdzIGFzIFRbXSwga2V5czogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBpc1BPSk8ob2JqOiBhbnkpOiBvYmogaXMgb2JqZWN0IHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBnZXRQcm90b3R5cGVPZihvYmopID09PSBvYmplY3RQcm90bztcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0KGtleXM6IHN0cmluZ1tdLCB2YWx1ZXM6IGFueVtdKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZSgocmVzdWx0LCBrZXksIGkpID0+ICgocmVzdWx0W2tleV0gPSB2YWx1ZXNbaV0pLCByZXN1bHQpLCB7fSBhcyBhbnkpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgU2NoZWR1bGVyTGlrZSwgT2JzZXJ2ZWRWYWx1ZU9mLCBPYnNlcnZhYmxlSW5wdXRUdXBsZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGFyZ3NBcmdBcnJheU9yT2JqZWN0IH0gZnJvbSAnLi4vdXRpbC9hcmdzQXJnQXJyYXlPck9iamVjdCc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcbmltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi4vdXRpbC9pZGVudGl0eSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgbWFwT25lT3JNYW55QXJncyB9IGZyb20gJy4uL3V0aWwvbWFwT25lT3JNYW55QXJncyc7XG5pbXBvcnQgeyBwb3BSZXN1bHRTZWxlY3RvciwgcG9wU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9hcmdzJztcbmltcG9ydCB7IGNyZWF0ZU9iamVjdCB9IGZyb20gJy4uL3V0aWwvY3JlYXRlT2JqZWN0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4uL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXInO1xuaW1wb3J0IHsgQW55Q2F0Y2hlciB9IGZyb20gJy4uL0FueUNhdGNoZXInO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuXG4vLyBjb21iaW5lTGF0ZXN0KGFueSlcbi8vIFdlIHB1dCB0aGlzIGZpcnN0IGJlY2F1c2Ugd2UgbmVlZCB0byBjYXRjaCBjYXNlcyB3aGVyZSB0aGUgdXNlciBoYXMgc3VwcGxpZWRcbi8vIF9leGFjdGx5IGBhbnlgXyBhcyB0aGUgYXJndW1lbnQuIFNpbmNlIGBhbnlgIGxpdGVyYWxseSBtYXRjaGVzIF9hbnl0aGluZ18sXG4vLyB3ZSBkb24ndCB3YW50IGl0IHRvIHJhbmRvbWx5IGhpdCBvbmUgb2YgdGhlIG90aGVyIHR5cGUgc2lnbmF0dXJlcyBiZWxvdyxcbi8vIGFzIHdlIGhhdmUgbm8gaWRlYSBhdCBidWlsZC10aW1lIHdoYXQgdHlwZSB3ZSBzaG91bGQgYmUgcmV0dXJuaW5nIHdoZW4gZ2l2ZW4gYW4gYW55LlxuXG4vKipcbiAqIFlvdSBoYXZlIHBhc3NlZCBgYW55YCBoZXJlLCB3ZSBjYW4ndCBmaWd1cmUgb3V0IGlmIGl0IGlzXG4gKiBhbiBhcnJheSBvciBhbiBvYmplY3QsIHNvIHlvdSdyZSBnZXR0aW5nIGB1bmtub3duYC4gVXNlIGJldHRlciB0eXBlcy5cbiAqIEBwYXJhbSBhcmcgU29tZXRoaW5nIHR5cGVkIGFzIGBhbnlgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PFQgZXh0ZW5kcyBBbnlDYXRjaGVyPihhcmc6IFQpOiBPYnNlcnZhYmxlPHVua25vd24+O1xuXG4vLyBjb21iaW5lTGF0ZXN0KFthLCBiLCBjXSlcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0KHNvdXJjZXM6IFtdKTogT2JzZXJ2YWJsZTxuZXZlcj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdPihzb3VyY2VzOiByZWFkb25seSBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dKTogT2JzZXJ2YWJsZTxBPjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHNjaGVkdWxlcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGBzY2hlZHVsZWRgIGFuZCBgY29tYmluZUxhdGVzdEFsbGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXSwgUj4oXG4gIHNvdXJjZXM6IHJlYWRvbmx5IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPl0sXG4gIHJlc3VsdFNlbGVjdG9yOiAoLi4udmFsdWVzOiBBKSA9PiBSLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2Vcbik6IE9ic2VydmFibGU8Uj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdLCBSPihcbiAgc291cmNlczogcmVhZG9ubHkgWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSxcbiAgcmVzdWx0U2VsZWN0b3I6ICguLi52YWx1ZXM6IEEpID0+IFJcbik6IE9ic2VydmFibGU8Uj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KFxuICBzb3VyY2VzOiByZWFkb25seSBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2Vcbik6IE9ic2VydmFibGU8QT47XG5cbi8vIGNvbWJpbmVMYXRlc3QoYSwgYiwgYylcbi8qKiBAZGVwcmVjYXRlZCBQYXNzIGFuIGFycmF5IG9mIHNvdXJjZXMgaW5zdGVhZC4gVGhlIHJlc3QtcGFyYW1ldGVycyBzaWduYXR1cmUgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9hcnJheS1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oLi4uc291cmNlczogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSk6IE9ic2VydmFibGU8QT47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10sIFI+KFxuICAuLi5zb3VyY2VzQW5kUmVzdWx0U2VsZWN0b3JBbmRTY2hlZHVsZXI6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPiwgKC4uLnZhbHVlczogQSkgPT4gUiwgU2NoZWR1bGVyTGlrZV1cbik6IE9ic2VydmFibGU8Uj47XG4vKiogQGRlcHJlY2F0ZWQgUGFzcyBhbiBhcnJheSBvZiBzb3VyY2VzIGluc3RlYWQuIFRoZSByZXN0LXBhcmFtZXRlcnMgc2lnbmF0dXJlIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvYXJyYXktYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10sIFI+KFxuICAuLi5zb3VyY2VzQW5kUmVzdWx0U2VsZWN0b3I6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPiwgKC4uLnZhbHVlczogQSkgPT4gUl1cbik6IE9ic2VydmFibGU8Uj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KFxuICAuLi5zb3VyY2VzQW5kU2NoZWR1bGVyOiBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT4sIFNjaGVkdWxlckxpa2VdXG4pOiBPYnNlcnZhYmxlPEE+O1xuXG4vLyBjb21iaW5lTGF0ZXN0KHthLCBiLCBjfSlcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0KHNvdXJjZXNPYmplY3Q6IHsgW0sgaW4gYW55XTogbmV2ZXIgfSk6IE9ic2VydmFibGU8bmV2ZXI+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIE9ic2VydmFibGVJbnB1dDxhbnk+Pj4oXG4gIHNvdXJjZXNPYmplY3Q6IFRcbik6IE9ic2VydmFibGU8eyBbSyBpbiBrZXlvZiBUXTogT2JzZXJ2ZWRWYWx1ZU9mPFRbS10+IH0+O1xuXG4vKipcbiAqIENvbWJpbmVzIG11bHRpcGxlIE9ic2VydmFibGVzIHRvIGNyZWF0ZSBhbiBPYnNlcnZhYmxlIHdob3NlIHZhbHVlcyBhcmVcbiAqIGNhbGN1bGF0ZWQgZnJvbSB0aGUgbGF0ZXN0IHZhbHVlcyBvZiBlYWNoIG9mIGl0cyBpbnB1dCBPYnNlcnZhYmxlcy5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+V2hlbmV2ZXIgYW55IGlucHV0IE9ic2VydmFibGUgZW1pdHMgYSB2YWx1ZSwgaXRcbiAqIGNvbXB1dGVzIGEgZm9ybXVsYSB1c2luZyB0aGUgbGF0ZXN0IHZhbHVlcyBmcm9tIGFsbCB0aGUgaW5wdXRzLCB0aGVuIGVtaXRzXG4gKiB0aGUgb3V0cHV0IG9mIHRoYXQgZm9ybXVsYS48L3NwYW4+XG4gKlxuICogIVtdKGNvbWJpbmVMYXRlc3QucG5nKVxuICpcbiAqIGBjb21iaW5lTGF0ZXN0YCBjb21iaW5lcyB0aGUgdmFsdWVzIGZyb20gYWxsIHRoZSBPYnNlcnZhYmxlcyBwYXNzZWQgaW4gdGhlXG4gKiBvYnNlcnZhYmxlcyBhcnJheS4gVGhpcyBpcyBkb25lIGJ5IHN1YnNjcmliaW5nIHRvIGVhY2ggT2JzZXJ2YWJsZSBpbiBvcmRlciBhbmQsXG4gKiB3aGVuZXZlciBhbnkgT2JzZXJ2YWJsZSBlbWl0cywgY29sbGVjdGluZyBhbiBhcnJheSBvZiB0aGUgbW9zdCByZWNlbnRcbiAqIHZhbHVlcyBmcm9tIGVhY2ggT2JzZXJ2YWJsZS4gU28gaWYgeW91IHBhc3MgYG5gIE9ic2VydmFibGVzIHRvIHRoaXMgb3BlcmF0b3IsXG4gKiB0aGUgcmV0dXJuZWQgT2JzZXJ2YWJsZSB3aWxsIGFsd2F5cyBlbWl0IGFuIGFycmF5IG9mIGBuYCB2YWx1ZXMsIGluIGFuIG9yZGVyXG4gKiBjb3JyZXNwb25kaW5nIHRvIHRoZSBvcmRlciBvZiB0aGUgcGFzc2VkIE9ic2VydmFibGVzICh0aGUgdmFsdWUgZnJvbSB0aGUgZmlyc3QgT2JzZXJ2YWJsZVxuICogd2lsbCBiZSBhdCBpbmRleCAwIG9mIHRoZSBhcnJheSBhbmQgc28gb24pLlxuICpcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIGBjb21iaW5lTGF0ZXN0YCBhY2NlcHRzIGFuIGFycmF5IG9mIE9ic2VydmFibGVzLiBOb3RlIHRoYXQgYW4gYXJyYXkgb2ZcbiAqIE9ic2VydmFibGVzIGlzIGEgZ29vZCBjaG9pY2UsIGlmIHlvdSBkb24ndCBrbm93IGJlZm9yZWhhbmQgaG93IG1hbnkgT2JzZXJ2YWJsZXNcbiAqIHlvdSB3aWxsIGNvbWJpbmUuIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgd2lsbCByZXN1bHQgaW4gYW4gT2JzZXJ2YWJsZSB0aGF0XG4gKiBjb21wbGV0ZXMgaW1tZWRpYXRlbHkuXG4gKlxuICogVG8gZW5zdXJlIHRoZSBvdXRwdXQgYXJyYXkgYWx3YXlzIGhhcyB0aGUgc2FtZSBsZW5ndGgsIGBjb21iaW5lTGF0ZXN0YCB3aWxsXG4gKiBhY3R1YWxseSB3YWl0IGZvciBhbGwgaW5wdXQgT2JzZXJ2YWJsZXMgdG8gZW1pdCBhdCBsZWFzdCBvbmNlLFxuICogYmVmb3JlIGl0IHN0YXJ0cyBlbWl0dGluZyByZXN1bHRzLiBUaGlzIG1lYW5zIGlmIHNvbWUgT2JzZXJ2YWJsZSBlbWl0c1xuICogdmFsdWVzIGJlZm9yZSBvdGhlciBPYnNlcnZhYmxlcyBzdGFydGVkIGVtaXR0aW5nLCBhbGwgdGhlc2UgdmFsdWVzIGJ1dCB0aGUgbGFzdFxuICogd2lsbCBiZSBsb3N0LiBPbiB0aGUgb3RoZXIgaGFuZCwgaWYgc29tZSBPYnNlcnZhYmxlIGRvZXMgbm90IGVtaXQgYSB2YWx1ZSBidXRcbiAqIGNvbXBsZXRlcywgcmVzdWx0aW5nIE9ic2VydmFibGUgd2lsbCBjb21wbGV0ZSBhdCB0aGUgc2FtZSBtb21lbnQgd2l0aG91dFxuICogZW1pdHRpbmcgYW55dGhpbmcsIHNpbmNlIGl0IHdpbGwgbm93IGJlIGltcG9zc2libGUgdG8gaW5jbHVkZSBhIHZhbHVlIGZyb20gdGhlXG4gKiBjb21wbGV0ZWQgT2JzZXJ2YWJsZSBpbiB0aGUgcmVzdWx0aW5nIGFycmF5LiBBbHNvLCBpZiBzb21lIGlucHV0IE9ic2VydmFibGUgZG9lc1xuICogbm90IGVtaXQgYW55IHZhbHVlIGFuZCBuZXZlciBjb21wbGV0ZXMsIGBjb21iaW5lTGF0ZXN0YCB3aWxsIGFsc28gbmV2ZXIgZW1pdFxuICogYW5kIG5ldmVyIGNvbXBsZXRlLCBzaW5jZSwgYWdhaW4sIGl0IHdpbGwgd2FpdCBmb3IgYWxsIHN0cmVhbXMgdG8gZW1pdCBzb21lXG4gKiB2YWx1ZS5cbiAqXG4gKiBJZiBhdCBsZWFzdCBvbmUgT2JzZXJ2YWJsZSB3YXMgcGFzc2VkIHRvIGBjb21iaW5lTGF0ZXN0YCBhbmQgYWxsIHBhc3NlZCBPYnNlcnZhYmxlc1xuICogZW1pdHRlZCBzb21ldGhpbmcsIHRoZSByZXN1bHRpbmcgT2JzZXJ2YWJsZSB3aWxsIGNvbXBsZXRlIHdoZW4gYWxsIGNvbWJpbmVkXG4gKiBzdHJlYW1zIGNvbXBsZXRlLiBTbyBldmVuIGlmIHNvbWUgT2JzZXJ2YWJsZSBjb21wbGV0ZXMsIHRoZSByZXN1bHQgb2ZcbiAqIGBjb21iaW5lTGF0ZXN0YCB3aWxsIHN0aWxsIGVtaXQgdmFsdWVzIHdoZW4gb3RoZXIgT2JzZXJ2YWJsZXMgZG8uIEluIGNhc2VcbiAqIG9mIGEgY29tcGxldGVkIE9ic2VydmFibGUsIGl0cyB2YWx1ZSBmcm9tIG5vdyBvbiB3aWxsIGFsd2F5cyBiZSB0aGUgbGFzdFxuICogZW1pdHRlZCB2YWx1ZS4gT24gdGhlIG90aGVyIGhhbmQsIGlmIGFueSBPYnNlcnZhYmxlIGVycm9ycywgYGNvbWJpbmVMYXRlc3RgXG4gKiB3aWxsIGVycm9yIGltbWVkaWF0ZWx5IGFzIHdlbGwsIGFuZCBhbGwgb3RoZXIgT2JzZXJ2YWJsZXMgd2lsbCBiZSB1bnN1YnNjcmliZWQuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBDb21iaW5lIHR3byB0aW1lciBPYnNlcnZhYmxlc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyB0aW1lciwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGZpcnN0VGltZXIgPSB0aW1lcigwLCAxMDAwKTsgLy8gZW1pdCAwLCAxLCAyLi4uIGFmdGVyIGV2ZXJ5IHNlY29uZCwgc3RhcnRpbmcgZnJvbSBub3dcbiAqIGNvbnN0IHNlY29uZFRpbWVyID0gdGltZXIoNTAwLCAxMDAwKTsgLy8gZW1pdCAwLCAxLCAyLi4uIGFmdGVyIGV2ZXJ5IHNlY29uZCwgc3RhcnRpbmcgMCw1cyBmcm9tIG5vd1xuICogY29uc3QgY29tYmluZWRUaW1lcnMgPSBjb21iaW5lTGF0ZXN0KFtmaXJzdFRpbWVyLCBzZWNvbmRUaW1lcl0pO1xuICogY29tYmluZWRUaW1lcnMuc3Vic2NyaWJlKHZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSk7XG4gKiAvLyBMb2dzXG4gKiAvLyBbMCwgMF0gYWZ0ZXIgMC41c1xuICogLy8gWzEsIDBdIGFmdGVyIDFzXG4gKiAvLyBbMSwgMV0gYWZ0ZXIgMS41c1xuICogLy8gWzIsIDFdIGFmdGVyIDJzXG4gKiBgYGBcbiAqXG4gKiBDb21iaW5lIGEgZGljdGlvbmFyeSBvZiBPYnNlcnZhYmxlc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgZGVsYXksIHN0YXJ0V2l0aCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IG9ic2VydmFibGVzID0ge1xuICogICBhOiBvZigxKS5waXBlKGRlbGF5KDEwMDApLCBzdGFydFdpdGgoMCkpLFxuICogICBiOiBvZig1KS5waXBlKGRlbGF5KDUwMDApLCBzdGFydFdpdGgoMCkpLFxuICogICBjOiBvZigxMCkucGlwZShkZWxheSgxMDAwMCksIHN0YXJ0V2l0aCgwKSlcbiAqIH07XG4gKiBjb25zdCBjb21iaW5lZCA9IGNvbWJpbmVMYXRlc3Qob2JzZXJ2YWJsZXMpO1xuICogY29tYmluZWQuc3Vic2NyaWJlKHZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSk7XG4gKiAvLyBMb2dzXG4gKiAvLyB7IGE6IDAsIGI6IDAsIGM6IDAgfSBpbW1lZGlhdGVseVxuICogLy8geyBhOiAxLCBiOiAwLCBjOiAwIH0gYWZ0ZXIgMXNcbiAqIC8vIHsgYTogMSwgYjogNSwgYzogMCB9IGFmdGVyIDVzXG4gKiAvLyB7IGE6IDEsIGI6IDUsIGM6IDEwIH0gYWZ0ZXIgMTBzXG4gKiBgYGBcbiAqXG4gKiBDb21iaW5lIGFuIGFycmF5IG9mIE9ic2VydmFibGVzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBkZWxheSwgc3RhcnRXaXRoLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgb2JzZXJ2YWJsZXMgPSBbMSwgNSwgMTBdLm1hcChcbiAqICAgbiA9PiBvZihuKS5waXBlKFxuICogICAgIGRlbGF5KG4gKiAxMDAwKSwgLy8gZW1pdCAwIGFuZCB0aGVuIGVtaXQgbiBhZnRlciBuIHNlY29uZHNcbiAqICAgICBzdGFydFdpdGgoMClcbiAqICAgKVxuICogKTtcbiAqIGNvbnN0IGNvbWJpbmVkID0gY29tYmluZUxhdGVzdChvYnNlcnZhYmxlcyk7XG4gKiBjb21iaW5lZC5zdWJzY3JpYmUodmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpKTtcbiAqIC8vIExvZ3NcbiAqIC8vIFswLCAwLCAwXSBpbW1lZGlhdGVseVxuICogLy8gWzEsIDAsIDBdIGFmdGVyIDFzXG4gKiAvLyBbMSwgNSwgMF0gYWZ0ZXIgNXNcbiAqIC8vIFsxLCA1LCAxMF0gYWZ0ZXIgMTBzXG4gKiBgYGBcbiAqXG4gKiBVc2UgbWFwIG9wZXJhdG9yIHRvIGR5bmFtaWNhbGx5IGNhbGN1bGF0ZSB0aGUgQm9keS1NYXNzIEluZGV4XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBjb21iaW5lTGF0ZXN0LCBtYXAgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCB3ZWlnaHQgPSBvZig3MCwgNzIsIDc2LCA3OSwgNzUpO1xuICogY29uc3QgaGVpZ2h0ID0gb2YoMS43NiwgMS43NywgMS43OCk7XG4gKiBjb25zdCBibWkgPSBjb21iaW5lTGF0ZXN0KFt3ZWlnaHQsIGhlaWdodF0pLnBpcGUoXG4gKiAgIG1hcCgoW3csIGhdKSA9PiB3IC8gKGggKiBoKSksXG4gKiApO1xuICogYm1pLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKCdCTUkgaXMgJyArIHgpKTtcbiAqXG4gKiAvLyBXaXRoIG91dHB1dCB0byBjb25zb2xlOlxuICogLy8gQk1JIGlzIDI0LjIxMjI5MzM4ODQyOTc1M1xuICogLy8gQk1JIGlzIDIzLjkzOTQ4MDk5MjA1MjA5XG4gKiAvLyBCTUkgaXMgMjMuNjcxMjUzNjI5NTkyMjIyXG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBjb21iaW5lTGF0ZXN0QWxsfVxuICogQHNlZSB7QGxpbmsgbWVyZ2V9XG4gKiBAc2VlIHtAbGluayB3aXRoTGF0ZXN0RnJvbX1cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGVJbnB1dH0gW29ic2VydmFibGVzXSBBbiBhcnJheSBvZiBpbnB1dCBPYnNlcnZhYmxlcyB0byBjb21iaW5lIHdpdGggZWFjaCBvdGhlci5cbiAqIEFuIGFycmF5IG9mIE9ic2VydmFibGVzIG11c3QgYmUgZ2l2ZW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW3Byb2plY3RdIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIHByb2plY3QgdGhlIHZhbHVlcyBmcm9tXG4gKiB0aGUgY29tYmluZWQgbGF0ZXN0IHZhbHVlcyBpbnRvIGEgbmV3IHZhbHVlIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyTGlrZX0gW3NjaGVkdWxlcj1udWxsXSBUaGUge0BsaW5rIFNjaGVkdWxlckxpa2V9IHRvIHVzZSBmb3Igc3Vic2NyaWJpbmcgdG9cbiAqIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgb2YgcHJvamVjdGVkIHZhbHVlcyBmcm9tIHRoZSBtb3N0IHJlY2VudFxuICogdmFsdWVzIGZyb20gZWFjaCBpbnB1dCBPYnNlcnZhYmxlLCBvciBhbiBhcnJheSBvZiB0aGUgbW9zdCByZWNlbnQgdmFsdWVzIGZyb21cbiAqIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+LCBSPiguLi5hcmdzOiBhbnlbXSk6IE9ic2VydmFibGU8Uj4gfCBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPltdPiB7XG4gIGNvbnN0IHNjaGVkdWxlciA9IHBvcFNjaGVkdWxlcihhcmdzKTtcbiAgY29uc3QgcmVzdWx0U2VsZWN0b3IgPSBwb3BSZXN1bHRTZWxlY3RvcihhcmdzKTtcblxuICBjb25zdCB7IGFyZ3M6IG9ic2VydmFibGVzLCBrZXlzIH0gPSBhcmdzQXJnQXJyYXlPck9iamVjdChhcmdzKTtcblxuICBpZiAob2JzZXJ2YWJsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSWYgbm8gb2JzZXJ2YWJsZXMgYXJlIHBhc3NlZCwgb3Igc29tZW9uZSBoYXMgcGFzc2VkIGFuIGVtcHR5IGFycmF5XG4gICAgLy8gb2Ygb2JzZXJ2YWJsZXMsIG9yIGV2ZW4gYW4gZW1wdHkgb2JqZWN0IFBPSk8sIHdlIG5lZWQgdG8ganVzdFxuICAgIC8vIGNvbXBsZXRlIChFTVBUWSksIGJ1dCB3ZSBoYXZlIHRvIGhvbm9yIHRoZSBzY2hlZHVsZXIgcHJvdmlkZWQgaWYgYW55LlxuICAgIHJldHVybiBmcm9tKFtdLCBzY2hlZHVsZXIgYXMgYW55KTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPltdPihcbiAgICBjb21iaW5lTGF0ZXN0SW5pdChcbiAgICAgIG9ic2VydmFibGVzIGFzIE9ic2VydmFibGVJbnB1dDxPYnNlcnZlZFZhbHVlT2Y8Tz4+W10sXG4gICAgICBzY2hlZHVsZXIsXG4gICAgICBrZXlzXG4gICAgICAgID8gLy8gQSBoYW5kbGVyIGZvciBzY3J1YmJpbmcgdGhlIGFycmF5IG9mIGFyZ3MgaW50byBhIGRpY3Rpb25hcnkuXG4gICAgICAgICAgKHZhbHVlcykgPT4gY3JlYXRlT2JqZWN0KGtleXMsIHZhbHVlcylcbiAgICAgICAgOiAvLyBBIHBhc3N0aHJvdWdoIHRvIGp1c3QgcmV0dXJuIHRoZSBhcnJheVxuICAgICAgICAgIGlkZW50aXR5XG4gICAgKVxuICApO1xuXG4gIHJldHVybiByZXN1bHRTZWxlY3RvciA/IChyZXN1bHQucGlwZShtYXBPbmVPck1hbnlBcmdzKHJlc3VsdFNlbGVjdG9yKSkgYXMgT2JzZXJ2YWJsZTxSPikgOiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0SW5pdChcbiAgb2JzZXJ2YWJsZXM6IE9ic2VydmFibGVJbnB1dDxhbnk+W10sXG4gIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UsXG4gIHZhbHVlVHJhbnNmb3JtOiAodmFsdWVzOiBhbnlbXSkgPT4gYW55ID0gaWRlbnRpdHlcbikge1xuICByZXR1cm4gKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4ge1xuICAgIC8vIFRoZSBvdXRlciBzdWJzY3JpcHRpb24uIFdlJ3JlIGNhcHR1cmluZyB0aGlzIGluIGEgZnVuY3Rpb25cbiAgICAvLyBiZWNhdXNlIHdlIG1heSBoYXZlIHRvIHNjaGVkdWxlIGl0LlxuICAgIG1heWJlU2NoZWR1bGUoXG4gICAgICBzY2hlZHVsZXIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBvYnNlcnZhYmxlcztcbiAgICAgICAgLy8gQSBzdG9yZSBmb3IgdGhlIHZhbHVlcyBlYWNoIG9ic2VydmFibGUgaGFzIGVtaXR0ZWQgc28gZmFyLiBXZSBtYXRjaCBvYnNlcnZhYmxlIHRvIHZhbHVlIG9uIGluZGV4LlxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgLy8gVGhlIG51bWJlciBvZiBjdXJyZW50bHkgYWN0aXZlIHN1YnNjcmlwdGlvbnMsIGFzIHRoZXkgY29tcGxldGUsIHdlIGRlY3JlbWVudCB0aGlzIG51bWJlciB0byBzZWUgaWZcbiAgICAgICAgLy8gd2UgYXJlIGFsbCBkb25lIGNvbWJpbmluZyB2YWx1ZXMsIHNvIHdlIGNhbiBjb21wbGV0ZSB0aGUgcmVzdWx0LlxuICAgICAgICBsZXQgYWN0aXZlID0gbGVuZ3RoO1xuICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIGlubmVyIHNvdXJjZXMgdGhhdCBzdGlsbCBoYXZlbid0IGVtaXR0ZWQgdGhlIGZpcnN0IHZhbHVlXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdHJhY2sgdGhpcyBiZWNhdXNlIGFsbCBzb3VyY2VzIG5lZWQgdG8gZW1pdCBvbmUgdmFsdWUgaW4gb3JkZXJcbiAgICAgICAgLy8gdG8gc3RhcnQgZW1pdHRpbmcgdmFsdWVzLlxuICAgICAgICBsZXQgcmVtYWluaW5nRmlyc3RWYWx1ZXMgPSBsZW5ndGg7XG4gICAgICAgIC8vIFRoZSBsb29wIHRvIGtpY2sgb2ZmIHN1YnNjcmlwdGlvbi4gV2UncmUga2V5aW5nIGV2ZXJ5dGhpbmcgb24gaW5kZXggYGlgIHRvIHJlbGF0ZSB0aGUgb2JzZXJ2YWJsZXMgcGFzc2VkXG4gICAgICAgIC8vIGluIHRvIHRoZSBzbG90IGluIHRoZSBvdXRwdXQgYXJyYXkgb3IgdGhlIGtleSBpbiB0aGUgYXJyYXkgb2Yga2V5cyBpbiB0aGUgb3V0cHV0IGRpY3Rpb25hcnkuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBtYXliZVNjaGVkdWxlKFxuICAgICAgICAgICAgc2NoZWR1bGVyLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBmcm9tKG9ic2VydmFibGVzW2ldLCBzY2hlZHVsZXIgYXMgYW55KTtcbiAgICAgICAgICAgICAgbGV0IGhhc0ZpcnN0VmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoXG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gd2UgZ2V0IGEgdmFsdWUsIHJlY29yZCBpdCBpbiBvdXIgc2V0IG9mIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzRmlyc3RWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IHZhbHVlLCByZWNvcmQgdGhhdC5cbiAgICAgICAgICAgICAgICAgICAgICBoYXNGaXJzdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdGaXJzdFZhbHVlcy0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVtYWluaW5nRmlyc3RWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSdyZSBub3Qgd2FpdGluZyBmb3IgYW55IG1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCB2YWx1ZXMsIHNvIHdlIGNhbiBlbWl0IVxuICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZVRyYW5zZm9ybSh2YWx1ZXMuc2xpY2UoKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gV2Ugb25seSBjb21wbGV0ZSB0aGUgcmVzdWx0IGlmIHdlIGhhdmUgbm8gbW9yZSBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBpbm5lciBvYnNlcnZhYmxlcy5cbiAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Vic2NyaWJlclxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmVyXG4gICAgKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBBIHNtYWxsIHV0aWxpdHkgdG8gaGFuZGxlIHRoZSBjb3VwbGUgb2YgbG9jYXRpb25zIHdoZXJlIHdlIHdhbnQgdG8gc2NoZWR1bGUgaWYgYSBzY2hlZHVsZXIgd2FzIHByb3ZpZGVkLFxuICogYnV0IHdlIGRvbid0IGlmIHRoZXJlIHdhcyBubyBzY2hlZHVsZXIuXG4gKi9cbmZ1bmN0aW9uIG1heWJlU2NoZWR1bGUoc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlIHwgdW5kZWZpbmVkLCBleGVjdXRlOiAoKSA9PiB2b2lkLCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikge1xuICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmlwdGlvbiwgc2NoZWR1bGVyLCBleGVjdXRlKTtcbiAgfSBlbHNlIHtcbiAgICBleGVjdXRlKCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5cbi8qKlxuICogQSBwcm9jZXNzIGVtYm9keWluZyB0aGUgZ2VuZXJhbCBcIm1lcmdlXCIgc3RyYXRlZ3kuIFRoaXMgaXMgdXNlZCBpblxuICogYG1lcmdlTWFwYCBhbmQgYG1lcmdlU2NhbmAgYmVjYXVzZSB0aGUgbG9naWMgaXMgb3RoZXJ3aXNlIG5lYXJseSBpZGVudGljYWwuXG4gKiBAcGFyYW0gc291cmNlIFRoZSBvcmlnaW5hbCBzb3VyY2Ugb2JzZXJ2YWJsZVxuICogQHBhcmFtIHN1YnNjcmliZXIgVGhlIGNvbnN1bWVyIHN1YnNjcmliZXJcbiAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0aW9uIGZ1bmN0aW9uIHRvIGdldCBvdXIgaW5uZXIgc291cmNlc1xuICogQHBhcmFtIGNvbmN1cnJlbnQgVGhlIG51bWJlciBvZiBjb25jdXJyZW50IGlubmVyIHN1YnNjcmlwdGlvbnNcbiAqIEBwYXJhbSBvbkJlZm9yZU5leHQgQWRkaXRpb25hbCBsb2dpYyB0byBhcHBseSBiZWZvcmUgbmV4dGluZyB0byBvdXIgY29uc3VtZXJcbiAqIEBwYXJhbSBleHBhbmQgSWYgYHRydWVgIHRoaXMgd2lsbCBwZXJmb3JtIGFuIFwiZXhwYW5kXCIgc3RyYXRlZ3ksIHdoaWNoIGRpZmZlcnMgb25seVxuICogaW4gdGhhdCBpdCByZWN1cnNlcywgYW5kIHRoZSBpbm5lciBzdWJzY3JpcHRpb24gbXVzdCBiZSBzY2hlZHVsZS1hYmxlLlxuICogQHBhcmFtIGlubmVyU3ViU2NoZWR1bGVyIEEgc2NoZWR1bGVyIHRvIHVzZSB0byBzY2hlZHVsZSBpbm5lciBzdWJzY3JpcHRpb25zLFxuICogdGhpcyBpcyB0byBzdXBwb3J0IHRoZSBleHBhbmQgc3RyYXRlZ3ksIG1vc3RseSwgYW5kIHNob3VsZCBiZSBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUludGVybmFsczxULCBSPihcbiAgc291cmNlOiBPYnNlcnZhYmxlPFQ+LFxuICBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFI+LFxuICBwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGVJbnB1dDxSPixcbiAgY29uY3VycmVudDogbnVtYmVyLFxuICBvbkJlZm9yZU5leHQ/OiAoaW5uZXJWYWx1ZTogUikgPT4gdm9pZCxcbiAgZXhwYW5kPzogYm9vbGVhbixcbiAgaW5uZXJTdWJTY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlLFxuICBhZGRpdGlvbmFsRmluYWxpemVyPzogKCkgPT4gdm9pZFxuKSB7XG4gIC8vIEJ1ZmZlcmVkIHZhbHVlcywgaW4gdGhlIGV2ZW50IG9mIGdvaW5nIG92ZXIgb3VyIGNvbmN1cnJlbmN5IGxpbWl0XG4gIGNvbnN0IGJ1ZmZlcjogVFtdID0gW107XG4gIC8vIFRoZSBudW1iZXIgb2YgYWN0aXZlIGlubmVyIHN1YnNjcmlwdGlvbnMuXG4gIGxldCBhY3RpdmUgPSAwO1xuICAvLyBBbiBpbmRleCB0byBwYXNzIHRvIG91ciBhY2N1bXVsYXRvciBmdW5jdGlvblxuICBsZXQgaW5kZXggPSAwO1xuICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgb3V0ZXIgc291cmNlIGhhcyBjb21wbGV0ZWQuXG4gIGxldCBpc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgd2UgY2FuIGNvbXBsZXRlIG91ciByZXN1bHQgb3Igbm90LlxuICAgKi9cbiAgY29uc3QgY2hlY2tDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAvLyBJZiB0aGUgb3V0ZXIgaGFzIGNvbXBsZXRlZCwgYW5kIG5vdGhpbmcgaXMgbGVmdCBpbiB0aGUgYnVmZmVyLFxuICAgIC8vIGFuZCB3ZSBkb24ndCBoYXZlIGFueSBhY3RpdmUgaW5uZXIgc3Vic2NyaXB0aW9ucywgdGhlbiB3ZSBjYW5cbiAgICAvLyBFbWl0IHRoZSBzdGF0ZSBhbmQgY29tcGxldGUuXG4gICAgaWYgKGlzQ29tcGxldGUgJiYgIWJ1ZmZlci5sZW5ndGggJiYgIWFjdGl2ZSkge1xuICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBJZiB3ZSdyZSB1bmRlciBvdXIgY29uY3VycmVuY3kgbGltaXQsIGp1c3Qgc3RhcnQgdGhlIGlubmVyIHN1YnNjcmlwdGlvbiwgb3RoZXJ3aXNlIGJ1ZmZlciBhbmQgd2FpdC5cbiAgY29uc3Qgb3V0ZXJOZXh0ID0gKHZhbHVlOiBUKSA9PiAoYWN0aXZlIDwgY29uY3VycmVudCA/IGRvSW5uZXJTdWIodmFsdWUpIDogYnVmZmVyLnB1c2godmFsdWUpKTtcblxuICBjb25zdCBkb0lubmVyU3ViID0gKHZhbHVlOiBUKSA9PiB7XG4gICAgLy8gSWYgd2UncmUgZXhwYW5kaW5nLCB3ZSBuZWVkIHRvIGVtaXQgdGhlIG91dGVyIHZhbHVlcyBhbmQgdGhlIGlubmVyIHZhbHVlc1xuICAgIC8vIGFzIHRoZSBpbm5lcnMgd2lsbCBcImJlY29tZSBvdXRlcnNcIiBpbiBhIHdheSBhcyB0aGV5IGFyZSByZWN1cnNpdmVseSBmZWRcbiAgICAvLyBiYWNrIHRvIHRoZSBwcm9qZWN0aW9uIG1lY2hhbmlzbS5cbiAgICBleHBhbmQgJiYgc3Vic2NyaWJlci5uZXh0KHZhbHVlIGFzIGFueSk7XG5cbiAgICAvLyBJbmNyZW1lbnQgdGhlIG51bWJlciBvZiBhY3RpdmUgc3Vic2NyaXB0aW9ucyBzbyB3ZSBjYW4gdHJhY2sgaXRcbiAgICAvLyBhZ2FpbnN0IG91ciBjb25jdXJyZW5jeSBsaW1pdCBsYXRlci5cbiAgICBhY3RpdmUrKztcblxuICAgIC8vIEEgZmxhZyB1c2VkIHRvIHNob3cgdGhhdCB0aGUgaW5uZXIgb2JzZXJ2YWJsZSBjb21wbGV0ZWQuXG4gICAgLy8gVGhpcyBpcyBjaGVja2VkIGR1cmluZyBmaW5hbGl6YXRpb24gdG8gc2VlIGlmIHdlIHNob3VsZFxuICAgIC8vIG1vdmUgdG8gdGhlIG5leHQgaXRlbSBpbiB0aGUgYnVmZmVyLCBpZiB0aGVyZSBpcyBvbi5cbiAgICBsZXQgaW5uZXJDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgLy8gU3RhcnQgb3VyIGlubmVyIHN1YnNjcmlwdGlvbi5cbiAgICBpbm5lckZyb20ocHJvamVjdCh2YWx1ZSwgaW5kZXgrKykpLnN1YnNjcmliZShcbiAgICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihcbiAgICAgICAgc3Vic2NyaWJlcixcbiAgICAgICAgKGlubmVyVmFsdWUpID0+IHtcbiAgICAgICAgICAvLyBgbWVyZ2VTY2FuYCBoYXMgYWRkaXRpb25hbCBoYW5kbGluZyBoZXJlLiBGb3IgZXhhbXBsZVxuICAgICAgICAgIC8vIHRha2luZyB0aGUgaW5uZXIgdmFsdWUgYW5kIHVwZGF0aW5nIHN0YXRlLlxuICAgICAgICAgIG9uQmVmb3JlTmV4dD8uKGlubmVyVmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGV4cGFuZCkge1xuICAgICAgICAgICAgLy8gSWYgd2UncmUgZXhwYW5kaW5nLCB0aGVuIGp1c3QgcmVjdXJzZSBiYWNrIHRvIG91ciBvdXRlclxuICAgICAgICAgICAgLy8gaGFuZGxlci4gSXQgd2lsbCBlbWl0IHRoZSB2YWx1ZSBmaXJzdCB0aGluZy5cbiAgICAgICAgICAgIG91dGVyTmV4dChpbm5lclZhbHVlIGFzIGFueSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgZW1pdCB0aGUgaW5uZXIgdmFsdWUuXG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gRmxhZyB0aGF0IHdlIGhhdmUgY29tcGxldGVkLCBzbyB3ZSBrbm93IHRvIGNoZWNrIHRoZSBidWZmZXJcbiAgICAgICAgICAvLyBkdXJpbmcgZmluYWxpemF0aW9uLlxuICAgICAgICAgIGlubmVyQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICAvLyBFcnJvcnMgYXJlIHBhc3NlZCB0byB0aGUgZGVzdGluYXRpb24uXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIER1cmluZyBmaW5hbGl6YXRpb24sIGlmIHRoZSBpbm5lciBjb21wbGV0ZWQgKGl0IHdhc24ndCBlcnJvcmVkIG9yXG4gICAgICAgICAgLy8gY2FuY2VsbGVkKSwgdGhlbiB3ZSB3YW50IHRvIHRyeSB0aGUgbmV4dCBpdGVtIGluIHRoZSBidWZmZXIgaWZcbiAgICAgICAgICAvLyB0aGVyZSBpcyBvbmUuXG4gICAgICAgICAgaWYgKGlubmVyQ29tcGxldGUpIHtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gd3JhcCB0aGlzIGluIGEgdHJ5L2NhdGNoIGJlY2F1c2UgaXQgaGFwcGVucyBkdXJpbmdcbiAgICAgICAgICAgIC8vIGZpbmFsaXphdGlvbiwgcG9zc2libHkgYXN5bmNocm9ub3VzbHksIGFuZCB3ZSB3YW50IHRvIHBhc3NcbiAgICAgICAgICAgIC8vIGFueSBlcnJvcnMgdGhhdCBoYXBwZW4gKGxpa2UgaW4gYSBwcm9qZWN0aW9uIGZ1bmN0aW9uKSB0b1xuICAgICAgICAgICAgLy8gdGhlIG91dGVyIFN1YnNjcmliZXIuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyBJTk5FUiBTT1VSQ0UgQ09NUExFVEVcbiAgICAgICAgICAgICAgLy8gRGVjcmVtZW50IHRoZSBhY3RpdmUgY291bnQgdG8gZW5zdXJlIHRoYXQgdGhlIG5leHQgdGltZVxuICAgICAgICAgICAgICAvLyB3ZSB0cnkgdG8gY2FsbCBgZG9Jbm5lclN1YmAsIHRoZSBudW1iZXIgaXMgYWNjdXJhdGUuXG4gICAgICAgICAgICAgIGFjdGl2ZS0tO1xuICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIG1vcmUgdmFsdWVzIGluIHRoZSBidWZmZXIsIHRyeSB0byBwcm9jZXNzIHRob3NlXG4gICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGNhbGwgd2lsbCBpbmNyZW1lbnQgYGFjdGl2ZWAgYWhlYWQgb2YgdGhlXG4gICAgICAgICAgICAgIC8vIG5leHQgY29uZGl0aW9uYWwsIGlmIHRoZXJlIHdlcmUgYW55IG1vcmUgaW5uZXIgc3Vic2NyaXB0aW9uc1xuICAgICAgICAgICAgICAvLyB0byBzdGFydC5cbiAgICAgICAgICAgICAgd2hpbGUgKGJ1ZmZlci5sZW5ndGggJiYgYWN0aXZlIDwgY29uY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlcmVkVmFsdWUgPSBidWZmZXIuc2hpZnQoKSE7XG4gICAgICAgICAgICAgICAgLy8gUGFydGljdWxhcmx5IGZvciBgZXhwYW5kYCwgd2UgbmVlZCB0byBjaGVjayB0byBzZWUgaWYgYSBzY2hlZHVsZXIgd2FzIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgLy8gZm9yIHdoZW4gd2Ugd2FudCB0byBzdGFydCBvdXIgaW5uZXIgc3Vic2NyaXB0aW9uLiBPdGhlcndpc2UsIHdlIGp1c3Qgc3RhcnRcbiAgICAgICAgICAgICAgICAvLyBhcmUgbmV4dCBpbm5lciBzdWJzY3JpcHRpb24uXG4gICAgICAgICAgICAgICAgaWYgKGlubmVyU3ViU2NoZWR1bGVyKSB7XG4gICAgICAgICAgICAgICAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgaW5uZXJTdWJTY2hlZHVsZXIsICgpID0+IGRvSW5uZXJTdWIoYnVmZmVyZWRWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBkb0lubmVyU3ViKGJ1ZmZlcmVkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgd2UgY2FuIGNvbXBsZXRlLCBhbmQgY29tcGxldGUgaWYgc28uXG4gICAgICAgICAgICAgIGNoZWNrQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICAvLyBTdWJzY3JpYmUgdG8gb3VyIHNvdXJjZSBvYnNlcnZhYmxlLlxuICBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBvdXRlck5leHQsICgpID0+IHtcbiAgICAgIC8vIE91dGVyIGNvbXBsZXRlZCwgbWFrZSBhIG5vdGUgb2YgaXQsIGFuZCBjaGVjayB0byBzZWUgaWYgd2UgY2FuIGNvbXBsZXRlIGV2ZXJ5dGhpbmcuXG4gICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIGNoZWNrQ29tcGxldGUoKTtcbiAgICB9KVxuICApO1xuXG4gIC8vIEFkZGl0aW9uYWwgZmluYWxpemF0aW9uIChmb3Igd2hlbiB0aGUgZGVzdGluYXRpb24gaXMgdG9ybiBkb3duKS5cbiAgLy8gT3RoZXIgZmluYWxpemF0aW9uIGlzIGFkZGVkIGltcGxpY2l0bHkgdmlhIHN1YnNjcmlwdGlvbiBhYm92ZS5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBhZGRpdGlvbmFsRmluYWxpemVyPy4oKTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIE9wZXJhdG9yRnVuY3Rpb24sIE9ic2VydmVkVmFsdWVPZiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vbWFwJztcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgbWVyZ2VJbnRlcm5hbHMgfSBmcm9tICcuL21lcmdlSW50ZXJuYWxzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1hcDxULCBPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KFxuICBwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE8sXG4gIGNvbmN1cnJlbnQ/OiBudW1iZXJcbik6IE9wZXJhdG9yRnVuY3Rpb248VCwgT2JzZXJ2ZWRWYWx1ZU9mPE8+Pjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHJlc3VsdFNlbGVjdG9yYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYW4gaW5uZXIgYG1hcGAgaW5zdGVhZC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvcmVzdWx0U2VsZWN0b3IgKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1hcDxULCBPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KFxuICBwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE8sXG4gIHJlc3VsdFNlbGVjdG9yOiB1bmRlZmluZWQsXG4gIGNvbmN1cnJlbnQ/OiBudW1iZXJcbik6IE9wZXJhdG9yRnVuY3Rpb248VCwgT2JzZXJ2ZWRWYWx1ZU9mPE8+Pjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHJlc3VsdFNlbGVjdG9yYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYW4gaW5uZXIgYG1hcGAgaW5zdGVhZC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvcmVzdWx0U2VsZWN0b3IgKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1hcDxULCBSLCBPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KFxuICBwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE8sXG4gIHJlc3VsdFNlbGVjdG9yOiAob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogT2JzZXJ2ZWRWYWx1ZU9mPE8+LCBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcikgPT4gUixcbiAgY29uY3VycmVudD86IG51bWJlclxuKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPjtcbi8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5cbi8qKlxuICogUHJvamVjdHMgZWFjaCBzb3VyY2UgdmFsdWUgdG8gYW4gT2JzZXJ2YWJsZSB3aGljaCBpcyBtZXJnZWQgaW4gdGhlIG91dHB1dFxuICogT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+TWFwcyBlYWNoIHZhbHVlIHRvIGFuIE9ic2VydmFibGUsIHRoZW4gZmxhdHRlbnMgYWxsIG9mXG4gKiB0aGVzZSBpbm5lciBPYnNlcnZhYmxlcyB1c2luZyB7QGxpbmsgbWVyZ2VBbGx9Ljwvc3Bhbj5cbiAqXG4gKiAhW10obWVyZ2VNYXAucG5nKVxuICpcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGl0ZW1zIGJhc2VkIG9uIGFwcGx5aW5nIGEgZnVuY3Rpb24gdGhhdCB5b3VcbiAqIHN1cHBseSB0byBlYWNoIGl0ZW0gZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUsIHdoZXJlIHRoYXQgZnVuY3Rpb25cbiAqIHJldHVybnMgYW4gT2JzZXJ2YWJsZSwgYW5kIHRoZW4gbWVyZ2luZyB0aG9zZSByZXN1bHRpbmcgT2JzZXJ2YWJsZXMgYW5kXG4gKiBlbWl0dGluZyB0aGUgcmVzdWx0cyBvZiB0aGlzIG1lcmdlci5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogTWFwIGFuZCBmbGF0dGVuIGVhY2ggbGV0dGVyIHRvIGFuIE9ic2VydmFibGUgdGlja2luZyBldmVyeSAxIHNlY29uZFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgbWVyZ2VNYXAsIGludGVydmFsLCBtYXAgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBsZXR0ZXJzID0gb2YoJ2EnLCAnYicsICdjJyk7XG4gKiBjb25zdCByZXN1bHQgPSBsZXR0ZXJzLnBpcGUoXG4gKiAgIG1lcmdlTWFwKHggPT4gaW50ZXJ2YWwoMTAwMCkucGlwZShtYXAoaSA9PiB4ICsgaSkpKVxuICogKTtcbiAqXG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIFJlc3VsdHMgaW4gdGhlIGZvbGxvd2luZzpcbiAqIC8vIGEwXG4gKiAvLyBiMFxuICogLy8gYzBcbiAqIC8vIGExXG4gKiAvLyBiMVxuICogLy8gYzFcbiAqIC8vIGNvbnRpbnVlcyB0byBsaXN0IGEsIGIsIGMgZXZlcnkgc2Vjb25kIHdpdGggcmVzcGVjdGl2ZSBhc2NlbmRpbmcgaW50ZWdlcnNcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcH1cbiAqIEBzZWUge0BsaW5rIGV4aGF1c3RNYXB9XG4gKiBAc2VlIHtAbGluayBtZXJnZX1cbiAqIEBzZWUge0BsaW5rIG1lcmdlQWxsfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VNYXBUb31cbiAqIEBzZWUge0BsaW5rIG1lcmdlU2Nhbn1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaE1hcH1cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHZhbHVlOiBULCA/aW5kZXg6IG51bWJlcik6IE9ic2VydmFibGVJbnB1dH0gcHJvamVjdCBBIGZ1bmN0aW9uXG4gKiB0aGF0LCB3aGVuIGFwcGxpZWQgdG8gYW4gaXRlbSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgcmV0dXJucyBhblxuICogT2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY29uY3VycmVudD1JbmZpbml0eV0gTWF4aW11bSBudW1iZXIgb2YgaW5wdXRcbiAqIE9ic2VydmFibGVzIGJlaW5nIHN1YnNjcmliZWQgdG8gY29uY3VycmVudGx5LlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHJlc3VsdCBvZlxuICogYXBwbHlpbmcgdGhlIHByb2plY3Rpb24gZnVuY3Rpb24gKGFuZCB0aGUgb3B0aW9uYWwgZGVwcmVjYXRlZFxuICogYHJlc3VsdFNlbGVjdG9yYCkgdG8gZWFjaCBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGFuZCBtZXJnaW5nXG4gKiB0aGUgcmVzdWx0cyBvZiB0aGUgT2JzZXJ2YWJsZXMgb2J0YWluZWQgZnJvbSB0aGlzIHRyYW5zZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXA8VCwgUiwgTyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PihcbiAgcHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPLFxuICByZXN1bHRTZWxlY3Rvcj86ICgob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogT2JzZXJ2ZWRWYWx1ZU9mPE8+LCBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcikgPT4gUikgfCBudW1iZXIsXG4gIGNvbmN1cnJlbnQ6IG51bWJlciA9IEluZmluaXR5XG4pOiBPcGVyYXRvckZ1bmN0aW9uPFQsIE9ic2VydmVkVmFsdWVPZjxPPiB8IFI+IHtcbiAgaWYgKGlzRnVuY3Rpb24ocmVzdWx0U2VsZWN0b3IpKSB7XG4gICAgLy8gREVQUkVDQVRFRCBQQVRIXG4gICAgcmV0dXJuIG1lcmdlTWFwKChhLCBpKSA9PiBtYXAoKGI6IGFueSwgaWk6IG51bWJlcikgPT4gcmVzdWx0U2VsZWN0b3IoYSwgYiwgaSwgaWkpKShpbm5lckZyb20ocHJvamVjdChhLCBpKSkpLCBjb25jdXJyZW50KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdudW1iZXInKSB7XG4gICAgY29uY3VycmVudCA9IHJlc3VsdFNlbGVjdG9yO1xuICB9XG5cbiAgcmV0dXJuIG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4gbWVyZ2VJbnRlcm5hbHMoc291cmNlLCBzdWJzY3JpYmVyLCBwcm9qZWN0LCBjb25jdXJyZW50KSk7XG59XG4iLCAiaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICcuL21lcmdlTWFwJztcbmltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi4vdXRpbC9pZGVudGl0eSc7XG5pbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uLCBPYnNlcnZhYmxlSW5wdXQsIE9ic2VydmVkVmFsdWVPZiB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBDb252ZXJ0cyBhIGhpZ2hlci1vcmRlciBPYnNlcnZhYmxlIGludG8gYSBmaXJzdC1vcmRlciBPYnNlcnZhYmxlIHdoaWNoXG4gKiBjb25jdXJyZW50bHkgZGVsaXZlcnMgYWxsIHZhbHVlcyB0aGF0IGFyZSBlbWl0dGVkIG9uIHRoZSBpbm5lciBPYnNlcnZhYmxlcy5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+RmxhdHRlbnMgYW4gT2JzZXJ2YWJsZS1vZi1PYnNlcnZhYmxlcy48L3NwYW4+XG4gKlxuICogIVtdKG1lcmdlQWxsLnBuZylcbiAqXG4gKiBgbWVyZ2VBbGxgIHN1YnNjcmliZXMgdG8gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIE9ic2VydmFibGVzLCBhbHNvIGtub3duIGFzXG4gKiBhIGhpZ2hlci1vcmRlciBPYnNlcnZhYmxlLiBFYWNoIHRpbWUgaXQgb2JzZXJ2ZXMgb25lIG9mIHRoZXNlIGVtaXR0ZWQgaW5uZXJcbiAqIE9ic2VydmFibGVzLCBpdCBzdWJzY3JpYmVzIHRvIHRoYXQgYW5kIGRlbGl2ZXJzIGFsbCB0aGUgdmFsdWVzIGZyb20gdGhlXG4gKiBpbm5lciBPYnNlcnZhYmxlIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS4gVGhlIG91dHB1dCBPYnNlcnZhYmxlIG9ubHlcbiAqIGNvbXBsZXRlcyBvbmNlIGFsbCBpbm5lciBPYnNlcnZhYmxlcyBoYXZlIGNvbXBsZXRlZC4gQW55IGVycm9yIGRlbGl2ZXJlZCBieVxuICogYSBpbm5lciBPYnNlcnZhYmxlIHdpbGwgYmUgaW1tZWRpYXRlbHkgZW1pdHRlZCBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBTcGF3biBhIG5ldyBpbnRlcnZhbCBPYnNlcnZhYmxlIGZvciBlYWNoIGNsaWNrIGV2ZW50LCBhbmQgYmxlbmQgdGhlaXIgb3V0cHV0cyBhcyBvbmUgT2JzZXJ2YWJsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIG1hcCwgaW50ZXJ2YWwsIG1lcmdlQWxsIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IGhpZ2hlck9yZGVyID0gY2xpY2tzLnBpcGUobWFwKCgpID0+IGludGVydmFsKDEwMDApKSk7XG4gKiBjb25zdCBmaXJzdE9yZGVyID0gaGlnaGVyT3JkZXIucGlwZShtZXJnZUFsbCgpKTtcbiAqXG4gKiBmaXJzdE9yZGVyLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqIGBgYFxuICpcbiAqIENvdW50IGZyb20gMCB0byA5IGV2ZXJ5IHNlY29uZCBmb3IgZWFjaCBjbGljaywgYnV0IG9ubHkgYWxsb3cgMiBjb25jdXJyZW50IHRpbWVyc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIG1hcCwgaW50ZXJ2YWwsIHRha2UsIG1lcmdlQWxsIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IGhpZ2hlck9yZGVyID0gY2xpY2tzLnBpcGUoXG4gKiAgIG1hcCgoKSA9PiBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoMTApKSlcbiAqICk7XG4gKiBjb25zdCBmaXJzdE9yZGVyID0gaGlnaGVyT3JkZXIucGlwZShtZXJnZUFsbCgyKSk7XG4gKlxuICogZmlyc3RPcmRlci5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBjb21iaW5lTGF0ZXN0QWxsfVxuICogQHNlZSB7QGxpbmsgY29uY2F0QWxsfVxuICogQHNlZSB7QGxpbmsgZXhoYXVzdEFsbH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VNYXB9XG4gKiBAc2VlIHtAbGluayBtZXJnZU1hcFRvfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VTY2FufVxuICogQHNlZSB7QGxpbmsgc3dpdGNoQWxsfVxuICogQHNlZSB7QGxpbmsgc3dpdGNoTWFwfVxuICogQHNlZSB7QGxpbmsgemlwQWxsfVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbY29uY3VycmVudD1JbmZpbml0eV0gTWF4aW11bSBudW1iZXIgb2YgaW5uZXJcbiAqIE9ic2VydmFibGVzIGJlaW5nIHN1YnNjcmliZWQgdG8gY29uY3VycmVudGx5LlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdmFsdWVzIGNvbWluZyBmcm9tXG4gKiBhbGwgdGhlIGlubmVyIE9ic2VydmFibGVzIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VBbGw8TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+Pihjb25jdXJyZW50OiBudW1iZXIgPSBJbmZpbml0eSk6IE9wZXJhdG9yRnVuY3Rpb248TywgT2JzZXJ2ZWRWYWx1ZU9mPE8+PiB7XG4gIHJldHVybiBtZXJnZU1hcChpZGVudGl0eSwgY29uY3VycmVudCk7XG59XG4iLCAiaW1wb3J0IHsgbWVyZ2VBbGwgfSBmcm9tICcuL21lcmdlQWxsJztcbmltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24sIE9ic2VydmFibGVJbnB1dCwgT2JzZXJ2ZWRWYWx1ZU9mIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgaGlnaGVyLW9yZGVyIE9ic2VydmFibGUgaW50byBhIGZpcnN0LW9yZGVyIE9ic2VydmFibGUgYnlcbiAqIGNvbmNhdGVuYXRpbmcgdGhlIGlubmVyIE9ic2VydmFibGVzIGluIG9yZGVyLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5GbGF0dGVucyBhbiBPYnNlcnZhYmxlLW9mLU9ic2VydmFibGVzIGJ5IHB1dHRpbmcgb25lXG4gKiBpbm5lciBPYnNlcnZhYmxlIGFmdGVyIHRoZSBvdGhlci48L3NwYW4+XG4gKlxuICogIVtdKGNvbmNhdEFsbC5zdmcpXG4gKlxuICogSm9pbnMgZXZlcnkgT2JzZXJ2YWJsZSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgKGEgaGlnaGVyLW9yZGVyIE9ic2VydmFibGUpLCBpblxuICogYSBzZXJpYWwgZmFzaGlvbi4gSXQgc3Vic2NyaWJlcyB0byBlYWNoIGlubmVyIE9ic2VydmFibGUgb25seSBhZnRlciB0aGVcbiAqIHByZXZpb3VzIGlubmVyIE9ic2VydmFibGUgaGFzIGNvbXBsZXRlZCwgYW5kIG1lcmdlcyBhbGwgb2YgdGhlaXIgdmFsdWVzIGludG9cbiAqIHRoZSByZXR1cm5lZCBvYnNlcnZhYmxlLlxuICpcbiAqIF9fV2FybmluZzpfXyBJZiB0aGUgc291cmNlIE9ic2VydmFibGUgZW1pdHMgT2JzZXJ2YWJsZXMgcXVpY2tseSBhbmRcbiAqIGVuZGxlc3NseSwgYW5kIHRoZSBpbm5lciBPYnNlcnZhYmxlcyBpdCBlbWl0cyBnZW5lcmFsbHkgY29tcGxldGUgc2xvd2VyIHRoYW5cbiAqIHRoZSBzb3VyY2UgZW1pdHMsIHlvdSBjYW4gcnVuIGludG8gbWVtb3J5IGlzc3VlcyBhcyB0aGUgaW5jb21pbmcgT2JzZXJ2YWJsZXNcbiAqIGNvbGxlY3QgaW4gYW4gdW5ib3VuZGVkIGJ1ZmZlci5cbiAqXG4gKiBOb3RlOiBgY29uY2F0QWxsYCBpcyBlcXVpdmFsZW50IHRvIGBtZXJnZUFsbGAgd2l0aCBjb25jdXJyZW5jeSBwYXJhbWV0ZXIgc2V0XG4gKiB0byBgMWAuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIEZvciBlYWNoIGNsaWNrIGV2ZW50LCB0aWNrIGV2ZXJ5IHNlY29uZCBmcm9tIDAgdG8gMywgd2l0aCBubyBjb25jdXJyZW5jeVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIG1hcCwgaW50ZXJ2YWwsIHRha2UsIGNvbmNhdEFsbCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGNsaWNrcyA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiBjb25zdCBoaWdoZXJPcmRlciA9IGNsaWNrcy5waXBlKFxuICogICBtYXAoKCkgPT4gaW50ZXJ2YWwoMTAwMCkucGlwZSh0YWtlKDQpKSlcbiAqICk7XG4gKiBjb25zdCBmaXJzdE9yZGVyID0gaGlnaGVyT3JkZXIucGlwZShjb25jYXRBbGwoKSk7XG4gKiBmaXJzdE9yZGVyLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBSZXN1bHRzIGluIHRoZSBmb2xsb3dpbmc6XG4gKiAvLyAocmVzdWx0cyBhcmUgbm90IGNvbmN1cnJlbnQpXG4gKiAvLyBGb3IgZXZlcnkgY2xpY2sgb24gdGhlIFwiZG9jdW1lbnRcIiBpdCB3aWxsIGVtaXQgdmFsdWVzIDAgdG8gMyBzcGFjZWRcbiAqIC8vIG9uIGEgMTAwMG1zIGludGVydmFsXG4gKiAvLyBvbmUgY2xpY2sgPSAxMDAwbXMtPiAwIC0xMDAwbXMtPiAxIC0xMDAwbXMtPiAyIC0xMDAwbXMtPiAzXG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBjb21iaW5lTGF0ZXN0QWxsfVxuICogQHNlZSB7QGxpbmsgY29uY2F0fVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwfVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwVG99XG4gKiBAc2VlIHtAbGluayBleGhhdXN0QWxsfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VBbGx9XG4gKiBAc2VlIHtAbGluayBzd2l0Y2hBbGx9XG4gKiBAc2VlIHtAbGluayBzd2l0Y2hNYXB9XG4gKiBAc2VlIHtAbGluayB6aXBBbGx9XG4gKlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIGVtaXR0aW5nIHZhbHVlcyBmcm9tIGFsbCB0aGVcbiAqIGlubmVyIE9ic2VydmFibGVzIGNvbmNhdGVuYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdEFsbDxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KCk6IE9wZXJhdG9yRnVuY3Rpb248TywgT2JzZXJ2ZWRWYWx1ZU9mPE8+PiB7XG4gIHJldHVybiBtZXJnZUFsbCgxKTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXRUdXBsZSwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGNvbmNhdEFsbCB9IGZyb20gJy4uL29wZXJhdG9ycy9jb25jYXRBbGwnO1xuaW1wb3J0IHsgcG9wU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9hcmdzJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICcuL2Zyb20nO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0PFQgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KC4uLmlucHV0czogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPFQ+XSk6IE9ic2VydmFibGU8VFtudW1iZXJdPjtcbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQ8VCBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oXG4gIC4uLmlucHV0c0FuZFNjaGVkdWxlcjogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPFQ+LCBTY2hlZHVsZXJMaWtlXVxuKTogT2JzZXJ2YWJsZTxUW251bWJlcl0+O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gb3V0cHV0IE9ic2VydmFibGUgd2hpY2ggc2VxdWVudGlhbGx5IGVtaXRzIGFsbCB2YWx1ZXMgZnJvbSB0aGUgZmlyc3QgZ2l2ZW5cbiAqIE9ic2VydmFibGUgYW5kIHRoZW4gbW92ZXMgb24gdG8gdGhlIG5leHQuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkNvbmNhdGVuYXRlcyBtdWx0aXBsZSBPYnNlcnZhYmxlcyB0b2dldGhlciBieVxuICogc2VxdWVudGlhbGx5IGVtaXR0aW5nIHRoZWlyIHZhbHVlcywgb25lIE9ic2VydmFibGUgYWZ0ZXIgdGhlIG90aGVyLjwvc3Bhbj5cbiAqXG4gKiAhW10oY29uY2F0LnBuZylcbiAqXG4gKiBgY29uY2F0YCBqb2lucyBtdWx0aXBsZSBPYnNlcnZhYmxlcyB0b2dldGhlciwgYnkgc3Vic2NyaWJpbmcgdG8gdGhlbSBvbmUgYXQgYSB0aW1lIGFuZFxuICogbWVyZ2luZyB0aGVpciByZXN1bHRzIGludG8gdGhlIG91dHB1dCBPYnNlcnZhYmxlLiBZb3UgY2FuIHBhc3MgZWl0aGVyIGFuIGFycmF5IG9mXG4gKiBPYnNlcnZhYmxlcywgb3IgcHV0IHRoZW0gZGlyZWN0bHkgYXMgYXJndW1lbnRzLiBQYXNzaW5nIGFuIGVtcHR5IGFycmF5IHdpbGwgcmVzdWx0XG4gKiBpbiBPYnNlcnZhYmxlIHRoYXQgY29tcGxldGVzIGltbWVkaWF0ZWx5LlxuICpcbiAqIGBjb25jYXRgIHdpbGwgc3Vic2NyaWJlIHRvIGZpcnN0IGlucHV0IE9ic2VydmFibGUgYW5kIGVtaXQgYWxsIGl0cyB2YWx1ZXMsIHdpdGhvdXRcbiAqIGNoYW5naW5nIG9yIGFmZmVjdGluZyB0aGVtIGluIGFueSB3YXkuIFdoZW4gdGhhdCBPYnNlcnZhYmxlIGNvbXBsZXRlcywgaXQgd2lsbFxuICogc3Vic2NyaWJlIHRvIHRoZW4gbmV4dCBPYnNlcnZhYmxlIHBhc3NlZCBhbmQsIGFnYWluLCBlbWl0IGl0cyB2YWx1ZXMuIFRoaXMgd2lsbCBiZVxuICogcmVwZWF0ZWQsIHVudGlsIHRoZSBvcGVyYXRvciBydW5zIG91dCBvZiBPYnNlcnZhYmxlcy4gV2hlbiBsYXN0IGlucHV0IE9ic2VydmFibGUgY29tcGxldGVzLFxuICogYGNvbmNhdGAgd2lsbCBjb21wbGV0ZSBhcyB3ZWxsLiBBdCBhbnkgZ2l2ZW4gbW9tZW50IG9ubHkgb25lIE9ic2VydmFibGUgcGFzc2VkIHRvIG9wZXJhdG9yXG4gKiBlbWl0cyB2YWx1ZXMuIElmIHlvdSB3b3VsZCBsaWtlIHRvIGVtaXQgdmFsdWVzIGZyb20gcGFzc2VkIE9ic2VydmFibGVzIGNvbmN1cnJlbnRseSwgY2hlY2sgb3V0XG4gKiB7QGxpbmsgbWVyZ2V9IGluc3RlYWQsIGVzcGVjaWFsbHkgd2l0aCBvcHRpb25hbCBgY29uY3VycmVudGAgcGFyYW1ldGVyLiBBcyBhIG1hdHRlciBvZiBmYWN0LFxuICogYGNvbmNhdGAgaXMgYW4gZXF1aXZhbGVudCBvZiBgbWVyZ2VgIG9wZXJhdG9yIHdpdGggYGNvbmN1cnJlbnRgIHBhcmFtZXRlciBzZXQgdG8gYDFgLlxuICpcbiAqIE5vdGUgdGhhdCBpZiBzb21lIGlucHV0IE9ic2VydmFibGUgbmV2ZXIgY29tcGxldGVzLCBgY29uY2F0YCB3aWxsIGFsc28gbmV2ZXIgY29tcGxldGVcbiAqIGFuZCBPYnNlcnZhYmxlcyBmb2xsb3dpbmcgdGhlIG9uZSB0aGF0IGRpZCBub3QgY29tcGxldGUgd2lsbCBuZXZlciBiZSBzdWJzY3JpYmVkLiBPbiB0aGUgb3RoZXJcbiAqIGhhbmQsIGlmIHNvbWUgT2JzZXJ2YWJsZSBzaW1wbHkgY29tcGxldGVzIGltbWVkaWF0ZWx5IGFmdGVyIGl0IGlzIHN1YnNjcmliZWQsIGl0IHdpbGwgYmVcbiAqIGludmlzaWJsZSBmb3IgYGNvbmNhdGAsIHdoaWNoIHdpbGwganVzdCBtb3ZlIG9uIHRvIHRoZSBuZXh0IE9ic2VydmFibGUuXG4gKlxuICogSWYgYW55IE9ic2VydmFibGUgaW4gY2hhaW4gZXJyb3JzLCBpbnN0ZWFkIG9mIHBhc3NpbmcgY29udHJvbCB0byB0aGUgbmV4dCBPYnNlcnZhYmxlLFxuICogYGNvbmNhdGAgd2lsbCBlcnJvciBpbW1lZGlhdGVseSBhcyB3ZWxsLiBPYnNlcnZhYmxlcyB0aGF0IHdvdWxkIGJlIHN1YnNjcmliZWQgYWZ0ZXJcbiAqIHRoZSBvbmUgdGhhdCBlbWl0dGVkIGVycm9yLCBuZXZlciB3aWxsLlxuICpcbiAqIElmIHlvdSBwYXNzIHRvIGBjb25jYXRgIHRoZSBzYW1lIE9ic2VydmFibGUgbWFueSB0aW1lcywgaXRzIHN0cmVhbSBvZiB2YWx1ZXNcbiAqIHdpbGwgYmUgXCJyZXBsYXllZFwiIG9uIGV2ZXJ5IHN1YnNjcmlwdGlvbiwgd2hpY2ggbWVhbnMgeW91IGNhbiByZXBlYXQgZ2l2ZW4gT2JzZXJ2YWJsZVxuICogYXMgbWFueSB0aW1lcyBhcyB5b3UgbGlrZS4gSWYgcGFzc2luZyB0aGUgc2FtZSBPYnNlcnZhYmxlIHRvIGBjb25jYXRgIDEwMDAgdGltZXMgYmVjb21lcyB0ZWRpb3VzLFxuICogeW91IGNhbiBhbHdheXMgdXNlIHtAbGluayByZXBlYXR9LlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogQ29uY2F0ZW5hdGUgYSB0aW1lciBjb3VudGluZyBmcm9tIDAgdG8gMyB3aXRoIGEgc3luY2hyb25vdXMgc2VxdWVuY2UgZnJvbSAxIHRvIDEwXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlLCByYW5nZSwgY29uY2F0IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgdGltZXIgPSBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoNCkpO1xuICogY29uc3Qgc2VxdWVuY2UgPSByYW5nZSgxLCAxMCk7XG4gKiBjb25zdCByZXN1bHQgPSBjb25jYXQodGltZXIsIHNlcXVlbmNlKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gcmVzdWx0cyBpbjpcbiAqIC8vIDAgLTEwMDBtcy0+IDEgLTEwMDBtcy0+IDIgLTEwMDBtcy0+IDMgLWltbWVkaWF0ZS0+IDEgLi4uIDEwXG4gKiBgYGBcbiAqXG4gKiBDb25jYXRlbmF0ZSAzIE9ic2VydmFibGVzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlLCBjb25jYXQgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCB0aW1lcjEgPSBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoMTApKTtcbiAqIGNvbnN0IHRpbWVyMiA9IGludGVydmFsKDIwMDApLnBpcGUodGFrZSg2KSk7XG4gKiBjb25zdCB0aW1lcjMgPSBpbnRlcnZhbCg1MDApLnBpcGUodGFrZSgxMCkpO1xuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbmNhdCh0aW1lcjEsIHRpbWVyMiwgdGltZXIzKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gcmVzdWx0cyBpbiB0aGUgZm9sbG93aW5nOlxuICogLy8gKFByaW50cyB0byBjb25zb2xlIHNlcXVlbnRpYWxseSlcbiAqIC8vIC0xMDAwbXMtPiAwIC0xMDAwbXMtPiAxIC0xMDAwbXMtPiAuLi4gOVxuICogLy8gLTIwMDBtcy0+IDAgLTIwMDBtcy0+IDEgLTIwMDBtcy0+IC4uLiA1XG4gKiAvLyAtNTAwbXMtPiAwIC01MDBtcy0+IDEgLTUwMG1zLT4gLi4uIDlcbiAqIGBgYFxuICpcbiAqIENvbmNhdGVuYXRlIHRoZSBzYW1lIE9ic2VydmFibGUgdG8gcmVwZWF0IGl0XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlLCBjb25jYXQgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCB0aW1lciA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSgyKSk7XG4gKlxuICogY29uY2F0KHRpbWVyLCB0aW1lcikgLy8gY29uY2F0ZW5hdGluZyB0aGUgc2FtZSBPYnNlcnZhYmxlIVxuICogICAuc3Vic2NyaWJlKHtcbiAqICAgICBuZXh0OiB2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSksXG4gKiAgICAgY29tcGxldGU6ICgpID0+IGNvbnNvbGUubG9nKCcuLi5hbmQgaXQgaXMgZG9uZSEnKVxuICogICB9KTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gMCBhZnRlciAxc1xuICogLy8gMSBhZnRlciAyc1xuICogLy8gMCBhZnRlciAzc1xuICogLy8gMSBhZnRlciA0c1xuICogLy8gJy4uLmFuZCBpdCBpcyBkb25lIScgYWxzbyBhZnRlciA0c1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgY29uY2F0QWxsfVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwfVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwVG99XG4gKiBAc2VlIHtAbGluayBzdGFydFdpdGh9XG4gKiBAc2VlIHtAbGluayBlbmRXaXRofVxuICpcbiAqIEBwYXJhbSBhcmdzIElucHV0IE9ic2VydmFibGVzIHRvIGNvbmNhdGVuYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3M6IGFueVtdKTogT2JzZXJ2YWJsZTx1bmtub3duPiB7XG4gIHJldHVybiBjb25jYXRBbGwoKShmcm9tKGFyZ3MsIHBvcFNjaGVkdWxlcihhcmdzKSkpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBhc3luYyBhcyBhc3luY1NjaGVkdWxlciB9IGZyb20gJy4uL3NjaGVkdWxlci9hc3luYyc7XG5pbXBvcnQgeyBpc1NjaGVkdWxlciB9IGZyb20gJy4uL3V0aWwvaXNTY2hlZHVsZXInO1xuaW1wb3J0IHsgaXNWYWxpZERhdGUgfSBmcm9tICcuLi91dGlsL2lzRGF0ZSc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgd2lsbCB3YWl0IGZvciBhIHNwZWNpZmllZCB0aW1lIHBlcmlvZCwgb3IgZXhhY3QgZGF0ZSwgYmVmb3JlXG4gKiBlbWl0dGluZyB0aGUgbnVtYmVyIDAuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPlVzZWQgdG8gZW1pdCBhIG5vdGlmaWNhdGlvbiBhZnRlciBhIGRlbGF5Ljwvc3Bhbj5cbiAqXG4gKiBUaGlzIG9ic2VydmFibGUgaXMgdXNlZnVsIGZvciBjcmVhdGluZyBkZWxheXMgaW4gY29kZSwgb3IgcmFjaW5nIGFnYWluc3Qgb3RoZXIgdmFsdWVzXG4gKiBmb3IgYWQtaG9jIHRpbWVvdXRzLlxuICpcbiAqIFRoZSBgZGVsYXlgIGlzIHNwZWNpZmllZCBieSBkZWZhdWx0IGluIG1pbGxpc2Vjb25kcywgaG93ZXZlciBwcm92aWRpbmcgYSBjdXN0b20gc2NoZWR1bGVyIGNvdWxkXG4gKiBjcmVhdGUgYSBkaWZmZXJlbnQgYmVoYXZpb3IuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBXYWl0IDMgc2Vjb25kcyBhbmQgc3RhcnQgYW5vdGhlciBvYnNlcnZhYmxlXG4gKlxuICogWW91IG1pZ2h0IHdhbnQgdG8gdXNlIGB0aW1lcmAgdG8gZGVsYXkgc3Vic2NyaXB0aW9uIHRvIGFuXG4gKiBvYnNlcnZhYmxlIGJ5IGEgc2V0IGFtb3VudCBvZiB0aW1lLiBIZXJlIHdlIHVzZSBhIHRpbWVyIHdpdGhcbiAqIHtAbGluayBjb25jYXRNYXBUb30gb3Ige0BsaW5rIGNvbmNhdE1hcH0gaW4gb3JkZXIgdG8gd2FpdFxuICogYSBmZXcgc2Vjb25kcyBhbmQgc3RhcnQgYSBzdWJzY3JpcHRpb24gdG8gYSBzb3VyY2UuXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCB0aW1lciwgY29uY2F0TWFwIH0gZnJvbSAncnhqcyc7XG4gKlxuICogLy8gVGhpcyBjb3VsZCBiZSBhbnkgb2JzZXJ2YWJsZVxuICogY29uc3Qgc291cmNlID0gb2YoMSwgMiwgMyk7XG4gKlxuICogdGltZXIoMzAwMClcbiAqICAgLnBpcGUoY29uY2F0TWFwKCgpID0+IHNvdXJjZSkpXG4gKiAgIC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICogYGBgXG4gKlxuICogVGFrZSBhbGwgdmFsdWVzIHVudGlsIHRoZSBzdGFydCBvZiB0aGUgbmV4dCBtaW51dGVcbiAqXG4gKiBVc2luZyBhIGBEYXRlYCBhcyB0aGUgdHJpZ2dlciBmb3IgdGhlIGZpcnN0IGVtaXNzaW9uLCB5b3UgY2FuXG4gKiBkbyB0aGluZ3MgbGlrZSB3YWl0IHVudGlsIG1pZG5pZ2h0IHRvIGZpcmUgYW4gZXZlbnQsIG9yIGluIHRoaXMgY2FzZSxcbiAqIHdhaXQgdW50aWwgYSBuZXcgbWludXRlIHN0YXJ0cyAoY2hvc2VuIHNvIHRoZSBleGFtcGxlIHdvdWxkbid0IHRha2VcbiAqIHRvbyBsb25nIHRvIHJ1bikgaW4gb3JkZXIgdG8gc3RvcCB3YXRjaGluZyBhIHN0cmVhbS4gTGV2ZXJhZ2luZ1xuICoge0BsaW5rIHRha2VVbnRpbH0uXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlVW50aWwsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG4gKlxuICogLy8gQnVpbGQgYSBEYXRlIG9iamVjdCB0aGF0IG1hcmtzIHRoZVxuICogLy8gbmV4dCBtaW51dGUuXG4gKiBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gKiBjb25zdCBzdGFydE9mTmV4dE1pbnV0ZSA9IG5ldyBEYXRlKFxuICogICBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLFxuICogICBjdXJyZW50RGF0ZS5nZXRNb250aCgpLFxuICogICBjdXJyZW50RGF0ZS5nZXREYXRlKCksXG4gKiAgIGN1cnJlbnREYXRlLmdldEhvdXJzKCksXG4gKiAgIGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKSArIDFcbiAqICk7XG4gKlxuICogLy8gVGhpcyBjb3VsZCBiZSBhbnkgb2JzZXJ2YWJsZSBzdHJlYW1cbiAqIGNvbnN0IHNvdXJjZSA9IGludGVydmFsKDEwMDApO1xuICpcbiAqIGNvbnN0IHJlc3VsdCA9IHNvdXJjZS5waXBlKFxuICogICB0YWtlVW50aWwodGltZXIoc3RhcnRPZk5leHRNaW51dGUpKVxuICogKTtcbiAqXG4gKiByZXN1bHQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAqIGBgYFxuICpcbiAqICMjIyBLbm93biBMaW1pdGF0aW9uc1xuICpcbiAqIC0gVGhlIHtAbGluayBhc3luY1NjaGVkdWxlcn0gdXNlcyBgc2V0VGltZW91dGAgd2hpY2ggaGFzIGxpbWl0YXRpb25zIGZvciBob3cgZmFyIGluIHRoZSBmdXR1cmUgaXQgY2FuIGJlIHNjaGVkdWxlZC5cbiAqXG4gKiAtIElmIGEgYHNjaGVkdWxlcmAgaXMgcHJvdmlkZWQgdGhhdCByZXR1cm5zIGEgdGltZXN0YW1wIG90aGVyIHRoYW4gYW4gZXBvY2ggZnJvbSBgbm93KClgLCBhbmRcbiAqIGEgYERhdGVgIG9iamVjdCBpcyBwYXNzZWQgdG8gdGhlIGBkdWVUaW1lYCBhcmd1bWVudCwgdGhlIGNhbGN1bGF0aW9uIGZvciB3aGVuIHRoZSBmaXJzdCBlbWlzc2lvblxuICogc2hvdWxkIG9jY3VyIHdpbGwgYmUgaW5jb3JyZWN0LiBJbiB0aGlzIGNhc2UsIGl0IHdvdWxkIGJlIGJlc3QgdG8gZG8geW91ciBvd24gY2FsY3VsYXRpb25zXG4gKiBhaGVhZCBvZiB0aW1lLCBhbmQgcGFzcyBhIGBudW1iZXJgIGluIGFzIHRoZSBgZHVlVGltZWAuXG4gKlxuICogQHBhcmFtIGR1ZSBJZiBhIGBudW1iZXJgLCB0aGUgYW1vdW50IG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIGVtaXR0aW5nLlxuICogSWYgYSBgRGF0ZWAsIHRoZSBleGFjdCB0aW1lIGF0IHdoaWNoIHRvIGVtaXQuXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFRoZSBzY2hlZHVsZXIgdG8gdXNlIHRvIHNjaGVkdWxlIHRoZSBkZWxheS4gRGVmYXVsdHMgdG8ge0BsaW5rIGFzeW5jU2NoZWR1bGVyfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyKGR1ZTogbnVtYmVyIHwgRGF0ZSwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8MD47XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgc3RhcnRzIGFuIGludGVydmFsIGFmdGVyIGEgc3BlY2lmaWVkIGRlbGF5LCBlbWl0dGluZyBpbmNyZW1lbnRpbmcgbnVtYmVycyAtLSBzdGFydGluZyBhdCBgMGAgLS1cbiAqIG9uIGVhY2ggaW50ZXJ2YWwgYWZ0ZXIgd29yZHMuXG4gKlxuICogVGhlIGBkZWxheWAgYW5kIGBpbnRlcnZhbER1cmF0aW9uYCBhcmUgc3BlY2lmaWVkIGJ5IGRlZmF1bHQgaW4gbWlsbGlzZWNvbmRzLCBob3dldmVyIHByb3ZpZGluZyBhIGN1c3RvbSBzY2hlZHVsZXIgY291bGRcbiAqIGNyZWF0ZSBhIGRpZmZlcmVudCBiZWhhdmlvci5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogIyMjIFN0YXJ0IGFuIGludGVydmFsIHRoYXQgc3RhcnRzIHJpZ2h0IGF3YXlcbiAqXG4gKiBTaW5jZSB7QGxpbmsgaW50ZXJ2YWx9IHdhaXRzIGZvciB0aGUgcGFzc2VkIGRlbGF5IGJlZm9yZSBzdGFydGluZyxcbiAqIHNvbWV0aW1lcyB0aGF0J3Mgbm90IGlkZWFsLiBZb3UgbWF5IHdhbnQgdG8gc3RhcnQgYW4gaW50ZXJ2YWwgaW1tZWRpYXRlbHkuXG4gKiBgdGltZXJgIHdvcmtzIHdlbGwgZm9yIHRoaXMuIEhlcmUgd2UgaGF2ZSBib3RoIHNpZGUtYnktc2lkZSBzbyB5b3UgY2FuXG4gKiBzZWUgdGhlbSBpbiBjb21wYXJpc29uLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIG9ic2VydmFibGUgd2lsbCBuZXZlciBjb21wbGV0ZS5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgdGltZXIsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG4gKlxuICogdGltZXIoMCwgMTAwMCkuc3Vic2NyaWJlKG4gPT4gY29uc29sZS5sb2coJ3RpbWVyJywgbikpO1xuICogaW50ZXJ2YWwoMTAwMCkuc3Vic2NyaWJlKG4gPT4gY29uc29sZS5sb2coJ2ludGVydmFsJywgbikpO1xuICogYGBgXG4gKlxuICogIyMjIEtub3duIExpbWl0YXRpb25zXG4gKlxuICogLSBUaGUge0BsaW5rIGFzeW5jU2NoZWR1bGVyfSB1c2VzIGBzZXRUaW1lb3V0YCB3aGljaCBoYXMgbGltaXRhdGlvbnMgZm9yIGhvdyBmYXIgaW4gdGhlIGZ1dHVyZSBpdCBjYW4gYmUgc2NoZWR1bGVkLlxuICpcbiAqIC0gSWYgYSBgc2NoZWR1bGVyYCBpcyBwcm92aWRlZCB0aGF0IHJldHVybnMgYSB0aW1lc3RhbXAgb3RoZXIgdGhhbiBhbiBlcG9jaCBmcm9tIGBub3coKWAsIGFuZFxuICogYSBgRGF0ZWAgb2JqZWN0IGlzIHBhc3NlZCB0byB0aGUgYGR1ZVRpbWVgIGFyZ3VtZW50LCB0aGUgY2FsY3VsYXRpb24gZm9yIHdoZW4gdGhlIGZpcnN0IGVtaXNzaW9uXG4gKiBzaG91bGQgb2NjdXIgd2lsbCBiZSBpbmNvcnJlY3QuIEluIHRoaXMgY2FzZSwgaXQgd291bGQgYmUgYmVzdCB0byBkbyB5b3VyIG93biBjYWxjdWxhdGlvbnNcbiAqIGFoZWFkIG9mIHRpbWUsIGFuZCBwYXNzIGEgYG51bWJlcmAgaW4gYXMgdGhlIGBzdGFydER1ZWAuXG4gKiBAcGFyYW0gc3RhcnREdWUgSWYgYSBgbnVtYmVyYCwgaXMgdGhlIHRpbWUgdG8gd2FpdCBiZWZvcmUgc3RhcnRpbmcgdGhlIGludGVydmFsLlxuICogSWYgYSBgRGF0ZWAsIGlzIHRoZSBleGFjdCB0aW1lIGF0IHdoaWNoIHRvIHN0YXJ0IHRoZSBpbnRlcnZhbC5cbiAqIEBwYXJhbSBpbnRlcnZhbER1cmF0aW9uIFRoZSBkZWxheSBiZXR3ZWVuIGVhY2ggdmFsdWUgZW1pdHRlZCBpbiB0aGUgaW50ZXJ2YWwuIFBhc3NpbmcgYVxuICogbmVnYXRpdmUgbnVtYmVyIGhlcmUgd2lsbCByZXN1bHQgaW4gaW1tZWRpYXRlIGNvbXBsZXRpb24gYWZ0ZXIgdGhlIGZpcnN0IHZhbHVlIGlzIGVtaXR0ZWQsIGFzIHRob3VnaFxuICogbm8gYGludGVydmFsRHVyYXRpb25gIHdhcyBwYXNzZWQgYXQgYWxsLlxuICogQHBhcmFtIHNjaGVkdWxlciBUaGUgc2NoZWR1bGVyIHRvIHVzZSB0byBzY2hlZHVsZSB0aGUgZGVsYXkuIERlZmF1bHRzIHRvIHtAbGluayBhc3luY1NjaGVkdWxlcn0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihzdGFydER1ZTogbnVtYmVyIHwgRGF0ZSwgaW50ZXJ2YWxEdXJhdGlvbjogbnVtYmVyLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFRoZSBzaWduYXR1cmUgYWxsb3dpbmcgYHVuZGVmaW5lZGAgdG8gYmUgcGFzc2VkIGZvciBgaW50ZXJ2YWxEdXJhdGlvbmAgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgdGhlIGB0aW1lcihkdWVUaW1lLCBzY2hlZHVsZXI/KWAgc2lnbmF0dXJlIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihkdWVUaW1lOiBudW1iZXIgfCBEYXRlLCB1bnVzZWQ6IHVuZGVmaW5lZCwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8MD47XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihcbiAgZHVlVGltZTogbnVtYmVyIHwgRGF0ZSA9IDAsXG4gIGludGVydmFsT3JTY2hlZHVsZXI/OiBudW1iZXIgfCBTY2hlZHVsZXJMaWtlLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UgPSBhc3luY1NjaGVkdWxlclxuKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgLy8gU2luY2UgbmVnYXRpdmUgaW50ZXJ2YWxEdXJhdGlvbiBpcyB0cmVhdGVkIGFzIHRob3VnaCBub1xuICAvLyBpbnRlcnZhbCB3YXMgc3BlY2lmaWVkIGF0IGFsbCwgd2Ugc3RhcnQgd2l0aCBhIG5lZ2F0aXZlIG51bWJlci5cbiAgbGV0IGludGVydmFsRHVyYXRpb24gPSAtMTtcblxuICBpZiAoaW50ZXJ2YWxPclNjaGVkdWxlciAhPSBudWxsKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhIHNlY29uZCBhcmd1bWVudCwgYW5kIGl0J3MgYSBzY2hlZHVsZXIsXG4gICAgLy8gb3ZlcnJpZGUgdGhlIHNjaGVkdWxlciB3ZSBoYWQgZGVmYXVsdGVkLiBPdGhlcndpc2UsXG4gICAgLy8gaXQgbXVzdCBiZSBhbiBpbnRlcnZhbC5cbiAgICBpZiAoaXNTY2hlZHVsZXIoaW50ZXJ2YWxPclNjaGVkdWxlcikpIHtcbiAgICAgIHNjaGVkdWxlciA9IGludGVydmFsT3JTY2hlZHVsZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vdGUgdGhhdCB0aGlzICpjb3VsZCogYmUgbmVnYXRpdmUsIGluIHdoaWNoIGNhc2VcbiAgICAgIC8vIGl0J3MgbGlrZSBub3QgcGFzc2luZyBhbiBpbnRlcnZhbER1cmF0aW9uIGF0IGFsbC5cbiAgICAgIGludGVydmFsRHVyYXRpb24gPSBpbnRlcnZhbE9yU2NoZWR1bGVyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcikgPT4ge1xuICAgIC8vIElmIGEgdmFsaWQgZGF0ZSBpcyBwYXNzZWQsIGNhbGN1bGF0ZSBob3cgbG9uZyB0byB3YWl0IGJlZm9yZVxuICAgIC8vIGV4ZWN1dGluZyB0aGUgZmlyc3QgdmFsdWUuLi4gb3RoZXJ3aXNlLCBpZiBpdCdzIGEgbnVtYmVyIGp1c3Qgc2NoZWR1bGVcbiAgICAvLyB0aGF0IG1hbnkgbWlsbGlzZWNvbmRzIChvciBzY2hlZHVsZXItc3BlY2lmaWVkIHVuaXQgc2l6ZSkgaW4gdGhlIGZ1dHVyZS5cbiAgICBsZXQgZHVlID0gaXNWYWxpZERhdGUoZHVlVGltZSkgPyArZHVlVGltZSAtIHNjaGVkdWxlciEubm93KCkgOiBkdWVUaW1lO1xuXG4gICAgaWYgKGR1ZSA8IDApIHtcbiAgICAgIC8vIEVuc3VyZSB3ZSBkb24ndCBzY2hlZHVsZSBpbiB0aGUgZnV0dXJlLlxuICAgICAgZHVlID0gMDtcbiAgICB9XG5cbiAgICAvLyBUaGUgaW5jcmVtZW50aW5nIHZhbHVlIHdlIGVtaXQuXG4gICAgbGV0IG4gPSAwO1xuXG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyLlxuICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAvLyBFbWl0IHRoZSBuZXh0IHZhbHVlIGFuZCBpbmNyZW1lbnQuXG4gICAgICAgIHN1YnNjcmliZXIubmV4dChuKyspO1xuXG4gICAgICAgIGlmICgwIDw9IGludGVydmFsRHVyYXRpb24pIHtcbiAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgaW50ZXJ2YWwgYWZ0ZXIgdGhlIGluaXRpYWwgdGltZXIsXG4gICAgICAgICAgLy8gcmVzY2hlZHVsZSB3aXRoIHRoZSBwZXJpb2QuXG4gICAgICAgICAgdGhpcy5zY2hlZHVsZSh1bmRlZmluZWQsIGludGVydmFsRHVyYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFdlIGRpZG4ndCBoYXZlIGFuIGludGVydmFsLiBTbyBqdXN0IGNvbXBsZXRlLlxuICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGR1ZSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEVNUFRZIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9lbXB0eSc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcblxuLyoqXG4gKiBFbWl0cyBvbmx5IHRoZSBmaXJzdCBgY291bnRgIHZhbHVlcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+VGFrZXMgdGhlIGZpcnN0IGBjb3VudGAgdmFsdWVzIGZyb20gdGhlIHNvdXJjZSwgdGhlblxuICogY29tcGxldGVzLjwvc3Bhbj5cbiAqXG4gKiAhW10odGFrZS5wbmcpXG4gKlxuICogYHRha2VgIHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG9ubHkgdGhlIGZpcnN0IGBjb3VudGAgdmFsdWVzIGVtaXR0ZWRcbiAqIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS4gSWYgdGhlIHNvdXJjZSBlbWl0cyBmZXdlciB0aGFuIGBjb3VudGAgdmFsdWVzIHRoZW5cbiAqIGFsbCBvZiBpdHMgdmFsdWVzIGFyZSBlbWl0dGVkLiBBZnRlciB0aGF0LCBpdCBjb21wbGV0ZXMsIHJlZ2FyZGxlc3MgaWYgdGhlXG4gKiBzb3VyY2UgY29tcGxldGVzLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBUYWtlIHRoZSBmaXJzdCA1IHNlY29uZHMgb2YgYW4gaW5maW5pdGUgMS1zZWNvbmQgaW50ZXJ2YWwgT2JzZXJ2YWJsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGludGVydmFsQ291bnQgPSBpbnRlcnZhbCgxMDAwKTtcbiAqIGNvbnN0IHRha2VGaXZlID0gaW50ZXJ2YWxDb3VudC5waXBlKHRha2UoNSkpO1xuICogdGFrZUZpdmUuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAwXG4gKiAvLyAxXG4gKiAvLyAyXG4gKiAvLyAzXG4gKiAvLyA0XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayB0YWtlTGFzdH1cbiAqIEBzZWUge0BsaW5rIHRha2VVbnRpbH1cbiAqIEBzZWUge0BsaW5rIHRha2VXaGlsZX1cbiAqIEBzZWUge0BsaW5rIHNraXB9XG4gKlxuICogQHBhcmFtIGNvdW50IFRoZSBtYXhpbXVtIG51bWJlciBvZiBgbmV4dGAgdmFsdWVzIHRvIGVtaXQuXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBvbmx5IHRoZSBmaXJzdFxuICogYGNvdW50YCB2YWx1ZXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUsIG9yIGFsbCBvZiB0aGUgdmFsdWVzIGZyb21cbiAqIHRoZSBzb3VyY2UgaWYgdGhlIHNvdXJjZSBlbWl0cyBmZXdlciB0aGFuIGBjb3VudGAgdmFsdWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFrZTxUPihjb3VudDogbnVtYmVyKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcbiAgcmV0dXJuIGNvdW50IDw9IDBcbiAgICA/IC8vIElmIHdlIGFyZSB0YWtpbmcgbm8gdmFsdWVzLCB0aGF0J3MgZW1wdHkuXG4gICAgICAoKSA9PiBFTVBUWVxuICAgIDogb3BlcmF0ZSgoc291cmNlLCBzdWJzY3JpYmVyKSA9PiB7XG4gICAgICAgIGxldCBzZWVuID0gMDtcbiAgICAgICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgICAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIG51bWJlciBvZiB2YWx1ZXMgd2UgaGF2ZSBzZWVuLFxuICAgICAgICAgICAgLy8gdGhlbiBjaGVjayBpdCBhZ2FpbnN0IHRoZSBhbGxvd2VkIGNvdW50IHRvIHNlZVxuICAgICAgICAgICAgLy8gaWYgd2UgYXJlIHN0aWxsIGxldHRpbmcgdmFsdWVzIHRocm91Z2guXG4gICAgICAgICAgICBpZiAoKytzZWVuIDw9IGNvdW50KSB7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgbWV0IG9yIHBhc3NlZCBvdXIgYWxsb3dlZCBjb3VudCxcbiAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjb21wbGV0ZS4gV2UgaGF2ZSB0byBkbyA8PSBoZXJlLFxuICAgICAgICAgICAgICAvLyBiZWNhdXNlIHJlLWVudHJhbnQgY29kZSB3aWxsIGluY3JlbWVudCBgc2VlbmAgdHdpY2UuXG4gICAgICAgICAgICAgIGlmIChjb3VudCA8PSBzZWVuKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xufVxuIiwgImltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlsL25vb3AnO1xuXG4vKipcbiAqIElnbm9yZXMgYWxsIGl0ZW1zIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGFuZCBvbmx5IHBhc3NlcyBjYWxscyBvZiBgY29tcGxldGVgIG9yIGBlcnJvcmAuXG4gKlxuICogIVtdKGlnbm9yZUVsZW1lbnRzLnBuZylcbiAqXG4gKiBUaGUgYGlnbm9yZUVsZW1lbnRzYCBvcGVyYXRvciBzdXBwcmVzc2VzIGFsbCBpdGVtcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSxcbiAqIGJ1dCBhbGxvd3MgaXRzIHRlcm1pbmF0aW9uIG5vdGlmaWNhdGlvbiAoZWl0aGVyIGBlcnJvcmAgb3IgYGNvbXBsZXRlYCkgdG8gcGFzcyB0aHJvdWdoIHVuY2hhbmdlZC5cbiAqXG4gKiBJZiB5b3UgZG8gbm90IGNhcmUgYWJvdXQgdGhlIGl0ZW1zIGJlaW5nIGVtaXR0ZWQgYnkgYW4gT2JzZXJ2YWJsZSwgYnV0IHlvdSBkbyB3YW50IHRvIGJlIG5vdGlmaWVkXG4gKiB3aGVuIGl0IGNvbXBsZXRlcyBvciB3aGVuIGl0IHRlcm1pbmF0ZXMgd2l0aCBhbiBlcnJvciwgeW91IGNhbiBhcHBseSB0aGUgYGlnbm9yZUVsZW1lbnRzYCBvcGVyYXRvclxuICogdG8gdGhlIE9ic2VydmFibGUsIHdoaWNoIHdpbGwgZW5zdXJlIHRoYXQgaXQgd2lsbCBuZXZlciBjYWxsIGl0cyBvYnNlcnZlcnNcdTIwMTkgYG5leHRgIGhhbmRsZXJzLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBJZ25vcmUgYWxsIGBuZXh0YCBlbWlzc2lvbnMgZnJvbSB0aGUgc291cmNlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBpZ25vcmVFbGVtZW50cyB9IGZyb20gJ3J4anMnO1xuICpcbiAqIG9mKCd5b3UnLCAndGFsa2luZycsICd0bycsICdtZScpXG4gKiAgIC5waXBlKGlnbm9yZUVsZW1lbnRzKCkpXG4gKiAgIC5zdWJzY3JpYmUoe1xuICogICAgIG5leHQ6IHdvcmQgPT4gY29uc29sZS5sb2cod29yZCksXG4gKiAgICAgZXJyb3I6IGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3I6JywgZXJyKSxcbiAqICAgICBjb21wbGV0ZTogKCkgPT4gY29uc29sZS5sb2coJ3RoZSBlbmQnKSxcbiAqICAgfSk7XG4gKlxuICogLy8gcmVzdWx0OlxuICogLy8gJ3RoZSBlbmQnXG4gKiBgYGBcbiAqXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGVtcHR5IE9ic2VydmFibGUgdGhhdCBvbmx5IGNhbGxzXG4gKiBgY29tcGxldGVgIG9yIGBlcnJvcmAsIGJhc2VkIG9uIHdoaWNoIG9uZSBpcyBjYWxsZWQgYnkgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlnbm9yZUVsZW1lbnRzKCk6IE9wZXJhdG9yRnVuY3Rpb248dW5rbm93biwgbmV2ZXI+IHtcbiAgcmV0dXJuIG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4ge1xuICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIG5vb3ApKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vbWFwJztcblxuLyoqIEBkZXByZWNhdGVkIFRvIGJlIHJlbW92ZWQgaW4gdjkuIFVzZSB7QGxpbmsgbWFwfSBpbnN0ZWFkOiBgbWFwKCgpID0+IHZhbHVlKWAuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwVG88Uj4odmFsdWU6IFIpOiBPcGVyYXRvckZ1bmN0aW9uPHVua25vd24sIFI+O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBEbyBub3Qgc3BlY2lmeSBleHBsaWNpdCB0eXBlIHBhcmFtZXRlcnMuIFNpZ25hdHVyZXMgd2l0aCB0eXBlIHBhcmFtZXRlcnNcbiAqIHRoYXQgY2Fubm90IGJlIGluZmVycmVkIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gYG1hcFRvYCBpdHNlbGYgd2lsbCBiZSByZW1vdmVkIGluIHY5LFxuICogdXNlIHtAbGluayBtYXB9IGluc3RlYWQ6IGBtYXAoKCkgPT4gdmFsdWUpYC5cbiAqICovXG5leHBvcnQgZnVuY3Rpb24gbWFwVG88VCwgUj4odmFsdWU6IFIpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+O1xuXG4vKipcbiAqIEVtaXRzIHRoZSBnaXZlbiBjb25zdGFudCB2YWx1ZSBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUgZXZlcnkgdGltZSB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGVtaXRzIGEgdmFsdWUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkxpa2Uge0BsaW5rIG1hcH0sIGJ1dCBpdCBtYXBzIGV2ZXJ5IHNvdXJjZSB2YWx1ZSB0b1xuICogdGhlIHNhbWUgb3V0cHV0IHZhbHVlIGV2ZXJ5IHRpbWUuPC9zcGFuPlxuICpcbiAqICFbXShtYXBUby5wbmcpXG4gKlxuICogVGFrZXMgYSBjb25zdGFudCBgdmFsdWVgIGFzIGFyZ3VtZW50LCBhbmQgZW1pdHMgdGhhdCB3aGVuZXZlciB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGVtaXRzIGEgdmFsdWUuIEluIG90aGVyIHdvcmRzLCBpZ25vcmVzIHRoZSBhY3R1YWwgc291cmNlIHZhbHVlLFxuICogYW5kIHNpbXBseSB1c2VzIHRoZSBlbWlzc2lvbiBtb21lbnQgdG8ga25vdyB3aGVuIHRvIGVtaXQgdGhlIGdpdmVuIGB2YWx1ZWAuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIE1hcCBldmVyeSBjbGljayB0byB0aGUgc3RyaW5nIGAnSGknYFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIG1hcFRvIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IGdyZWV0aW5ncyA9IGNsaWNrcy5waXBlKG1hcFRvKCdIaScpKTtcbiAqXG4gKiBncmVldGluZ3Muc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgbWFwfVxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gbWFwIGVhY2ggc291cmNlIHZhbHVlIHRvLlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIGdpdmVuIGB2YWx1ZWBcbiAqIGV2ZXJ5IHRpbWUgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGVtaXRzLlxuICogQGRlcHJlY2F0ZWQgVG8gYmUgcmVtb3ZlZCBpbiB2OS4gVXNlIHtAbGluayBtYXB9IGluc3RlYWQ6IGBtYXAoKCkgPT4gdmFsdWUpYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvPFI+KHZhbHVlOiBSKTogT3BlcmF0b3JGdW5jdGlvbjx1bmtub3duLCBSPiB7XG4gIHJldHVybiBtYXAoKCkgPT4gdmFsdWUpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgT2JzZXJ2YWJsZUlucHV0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgY29uY2F0IH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9jb25jYXQnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJy4vdGFrZSc7XG5pbXBvcnQgeyBpZ25vcmVFbGVtZW50cyB9IGZyb20gJy4vaWdub3JlRWxlbWVudHMnO1xuaW1wb3J0IHsgbWFwVG8gfSBmcm9tICcuL21hcFRvJztcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAnLi9tZXJnZU1hcCc7XG5pbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5cbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHN1YnNjcmlwdGlvbkRlbGF5YCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5V2hlbjxUPihcbiAgZGVsYXlEdXJhdGlvblNlbGVjdG9yOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGVJbnB1dDxhbnk+LFxuICBzdWJzY3JpcHRpb25EZWxheTogT2JzZXJ2YWJsZTxhbnk+XG4pOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD47XG5leHBvcnQgZnVuY3Rpb24gZGVsYXlXaGVuPFQ+KGRlbGF5RHVyYXRpb25TZWxlY3RvcjogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlSW5wdXQ8YW55Pik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPjtcblxuLyoqXG4gKiBEZWxheXMgdGhlIGVtaXNzaW9uIG9mIGl0ZW1zIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGJ5IGEgZ2l2ZW4gdGltZSBzcGFuXG4gKiBkZXRlcm1pbmVkIGJ5IHRoZSBlbWlzc2lvbnMgb2YgYW5vdGhlciBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5JdCdzIGxpa2Uge0BsaW5rIGRlbGF5fSwgYnV0IHRoZSB0aW1lIHNwYW4gb2YgdGhlXG4gKiBkZWxheSBkdXJhdGlvbiBpcyBkZXRlcm1pbmVkIGJ5IGEgc2Vjb25kIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqICFbXShkZWxheVdoZW4ucG5nKVxuICpcbiAqIGBkZWxheVdoZW5gIG9wZXJhdG9yIHNoaWZ0cyBlYWNoIGVtaXR0ZWQgdmFsdWUgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgYnlcbiAqIGEgdGltZSBzcGFuIGRldGVybWluZWQgYnkgYW5vdGhlciBPYnNlcnZhYmxlLiBXaGVuIHRoZSBzb3VyY2UgZW1pdHMgYSB2YWx1ZSxcbiAqIHRoZSBgZGVsYXlEdXJhdGlvblNlbGVjdG9yYCBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgdmFsdWUgZW1pdHRlZCBmcm9tXG4gKiB0aGUgc291cmNlIE9ic2VydmFibGUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBgZGVsYXlEdXJhdGlvblNlbGVjdG9yYC5cbiAqIFRoZSBgZGVsYXlEdXJhdGlvblNlbGVjdG9yYCBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGFuIHtAbGluayBPYnNlcnZhYmxlSW5wdXR9LFxuICogdGhhdCBpcyBpbnRlcm5hbGx5IGNvbnZlcnRlZCB0byBhbiBPYnNlcnZhYmxlIHRoYXQgaXMgY2FsbGVkIHRoZSBcImR1cmF0aW9uXCJcbiAqIE9ic2VydmFibGUuXG4gKlxuICogVGhlIHNvdXJjZSB2YWx1ZSBpcyBlbWl0dGVkIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSBvbmx5IHdoZW4gdGhlIFwiZHVyYXRpb25cIlxuICogT2JzZXJ2YWJsZSBlbWl0cyAoe0BsaW5rIGd1aWRlL2dsb3NzYXJ5LWFuZC1zZW1hbnRpY3MjbmV4dCBuZXh0fXMpIGFueSB2YWx1ZS5cbiAqIFVwb24gdGhhdCwgdGhlIFwiZHVyYXRpb25cIiBPYnNlcnZhYmxlIGdldHMgdW5zdWJzY3JpYmVkLlxuICpcbiAqIEJlZm9yZSBSeEpTIFY3LCB0aGUge0BsaW5rIGd1aWRlL2dsb3NzYXJ5LWFuZC1zZW1hbnRpY3MjY29tcGxldGUgY29tcGxldGlvbn1cbiAqIG9mIHRoZSBcImR1cmF0aW9uXCIgT2JzZXJ2YWJsZSB3b3VsZCBoYXZlIGJlZW4gdHJpZ2dlcmluZyB0aGUgZW1pc3Npb24gb2YgdGhlXG4gKiBzb3VyY2UgdmFsdWUgdG8gdGhlIG91dHB1dCBPYnNlcnZhYmxlLCBidXQgd2l0aCBSeEpTIFY3LCB0aGlzIGlzIG5vdCB0aGUgY2FzZVxuICogYW55bW9yZS5cbiAqXG4gKiBPbmx5IG5leHQgbm90aWZpY2F0aW9ucyAoZnJvbSB0aGUgXCJkdXJhdGlvblwiIE9ic2VydmFibGUpIHRyaWdnZXIgdmFsdWVzIGZyb21cbiAqIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB0byBiZSBwYXNzZWQgdG8gdGhlIG91dHB1dCBPYnNlcnZhYmxlLiBJZiB0aGUgXCJkdXJhdGlvblwiXG4gKiBPYnNlcnZhYmxlIG9ubHkgZW1pdHMgdGhlIGNvbXBsZXRlIG5vdGlmaWNhdGlvbiAod2l0aG91dCBuZXh0KSwgdGhlIHZhbHVlXG4gKiBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB3aWxsIG5ldmVyIGdldCB0byB0aGUgb3V0cHV0IE9ic2VydmFibGUgLSBpdFxuICogd2lsbCBiZSBzd2FsbG93ZWQuIElmIHRoZSBcImR1cmF0aW9uXCIgT2JzZXJ2YWJsZSBlcnJvcnMsIHRoZSBlcnJvciB3aWxsIGJlXG4gKiBwcm9wYWdhdGVkIHRvIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqXG4gKiBPcHRpb25hbGx5LCBgZGVsYXlXaGVuYCB0YWtlcyBhIHNlY29uZCBhcmd1bWVudCwgYHN1YnNjcmlwdGlvbkRlbGF5YCwgd2hpY2hcbiAqIGlzIGFuIE9ic2VydmFibGUuIFdoZW4gYHN1YnNjcmlwdGlvbkRlbGF5YCBlbWl0cyBpdHMgZmlyc3QgdmFsdWUgb3JcbiAqIGNvbXBsZXRlcywgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGlzIHN1YnNjcmliZWQgdG8gYW5kIHN0YXJ0cyBiZWhhdmluZyBsaWtlXG4gKiBkZXNjcmliZWQgaW4gdGhlIHByZXZpb3VzIHBhcmFncmFwaC4gSWYgYHN1YnNjcmlwdGlvbkRlbGF5YCBpcyBub3QgcHJvdmlkZWQsXG4gKiBgZGVsYXlXaGVuYCB3aWxsIHN1YnNjcmliZSB0byB0aGUgc291cmNlIE9ic2VydmFibGUgYXMgc29vbiBhcyB0aGUgb3V0cHV0XG4gKiBPYnNlcnZhYmxlIGlzIHN1YnNjcmliZWQuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIERlbGF5IGVhY2ggY2xpY2sgYnkgYSByYW5kb20gYW1vdW50IG9mIHRpbWUsIGJldHdlZW4gMCBhbmQgNSBzZWNvbmRzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb21FdmVudCwgZGVsYXlXaGVuLCBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGNsaWNrcyA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiBjb25zdCBkZWxheWVkQ2xpY2tzID0gY2xpY2tzLnBpcGUoXG4gKiAgIGRlbGF5V2hlbigoKSA9PiBpbnRlcnZhbChNYXRoLnJhbmRvbSgpICogNTAwMCkpXG4gKiApO1xuICogZGVsYXllZENsaWNrcy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBkZWxheX1cbiAqIEBzZWUge0BsaW5rIHRocm90dGxlfVxuICogQHNlZSB7QGxpbmsgdGhyb3R0bGVUaW1lfVxuICogQHNlZSB7QGxpbmsgZGVib3VuY2V9XG4gKiBAc2VlIHtAbGluayBkZWJvdW5jZVRpbWV9XG4gKiBAc2VlIHtAbGluayBzYW1wbGV9XG4gKiBAc2VlIHtAbGluayBzYW1wbGVUaW1lfVxuICogQHNlZSB7QGxpbmsgYXVkaXR9XG4gKiBAc2VlIHtAbGluayBhdWRpdFRpbWV9XG4gKlxuICogQHBhcmFtIGRlbGF5RHVyYXRpb25TZWxlY3RvciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBgT2JzZXJ2YWJsZUlucHV0YCBmb3JcbiAqIGVhY2ggYHZhbHVlYCBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgd2hpY2ggaXMgdGhlbiB1c2VkIHRvIGRlbGF5IHRoZVxuICogZW1pc3Npb24gb2YgdGhhdCBgdmFsdWVgIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSB1bnRpbCB0aGUgYE9ic2VydmFibGVJbnB1dGBcbiAqIHJldHVybmVkIGZyb20gdGhpcyBmdW5jdGlvbiBlbWl0cyBhIG5leHQgdmFsdWUuIFdoZW4gY2FsbGVkLCBiZXNpZGUgYHZhbHVlYCxcbiAqIHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgYSB6ZXJvLWJhc2VkIGBpbmRleGAgb2YgdGhlIGVtaXNzaW9uIG9yZGVyLlxuICogQHBhcmFtIHN1YnNjcmlwdGlvbkRlbGF5IEFuIE9ic2VydmFibGUgdGhhdCB0cmlnZ2VycyB0aGUgc3Vic2NyaXB0aW9uIHRvIHRoZVxuICogc291cmNlIE9ic2VydmFibGUgb25jZSBpdCBlbWl0cyBhbnkgdmFsdWUuXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBkZWxheXMgdGhlIGVtaXNzaW9ucyBvZlxuICogdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGJ5IGFuIGFtb3VudCBvZiB0aW1lIHNwZWNpZmllZCBieSB0aGUgT2JzZXJ2YWJsZVxuICogcmV0dXJuZWQgYnkgYGRlbGF5RHVyYXRpb25TZWxlY3RvcmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxheVdoZW48VD4oXG4gIGRlbGF5RHVyYXRpb25TZWxlY3RvcjogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlSW5wdXQ8YW55PixcbiAgc3Vic2NyaXB0aW9uRGVsYXk/OiBPYnNlcnZhYmxlPGFueT5cbik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gIGlmIChzdWJzY3JpcHRpb25EZWxheSkge1xuICAgIC8vIERFUFJFQ0FURUQgUEFUSFxuICAgIHJldHVybiAoc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PlxuICAgICAgY29uY2F0KHN1YnNjcmlwdGlvbkRlbGF5LnBpcGUodGFrZSgxKSwgaWdub3JlRWxlbWVudHMoKSksIHNvdXJjZS5waXBlKGRlbGF5V2hlbihkZWxheUR1cmF0aW9uU2VsZWN0b3IpKSk7XG4gIH1cblxuICByZXR1cm4gbWVyZ2VNYXAoKHZhbHVlLCBpbmRleCkgPT4gaW5uZXJGcm9tKGRlbGF5RHVyYXRpb25TZWxlY3Rvcih2YWx1ZSwgaW5kZXgpKS5waXBlKHRha2UoMSksIG1hcFRvKHZhbHVlKSkpO1xufVxuIiwgImltcG9ydCB7IGFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGRlbGF5V2hlbiB9IGZyb20gJy4vZGVsYXlXaGVuJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS90aW1lcic7XG5cbi8qKlxuICogRGVsYXlzIHRoZSBlbWlzc2lvbiBvZiBpdGVtcyBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBieSBhIGdpdmVuIHRpbWVvdXQgb3JcbiAqIHVudGlsIGEgZ2l2ZW4gRGF0ZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+VGltZSBzaGlmdHMgZWFjaCBpdGVtIGJ5IHNvbWUgc3BlY2lmaWVkIGFtb3VudCBvZlxuICogbWlsbGlzZWNvbmRzLjwvc3Bhbj5cbiAqXG4gKiAhW10oZGVsYXkuc3ZnKVxuICpcbiAqIElmIHRoZSBkZWxheSBhcmd1bWVudCBpcyBhIE51bWJlciwgdGhpcyBvcGVyYXRvciB0aW1lIHNoaWZ0cyB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGJ5IHRoYXQgYW1vdW50IG9mIHRpbWUgZXhwcmVzc2VkIGluIG1pbGxpc2Vjb25kcy4gVGhlIHJlbGF0aXZlXG4gKiB0aW1lIGludGVydmFscyBiZXR3ZWVuIHRoZSB2YWx1ZXMgYXJlIHByZXNlcnZlZC5cbiAqXG4gKiBJZiB0aGUgZGVsYXkgYXJndW1lbnQgaXMgYSBEYXRlLCB0aGlzIG9wZXJhdG9yIHRpbWUgc2hpZnRzIHRoZSBzdGFydCBvZiB0aGVcbiAqIE9ic2VydmFibGUgZXhlY3V0aW9uIHVudGlsIHRoZSBnaXZlbiBkYXRlIG9jY3Vycy5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIERlbGF5IGVhY2ggY2xpY2sgYnkgb25lIHNlY29uZFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIGRlbGF5IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IGRlbGF5ZWRDbGlja3MgPSBjbGlja3MucGlwZShkZWxheSgxMDAwKSk7IC8vIGVhY2ggY2xpY2sgZW1pdHRlZCBhZnRlciAxIHNlY29uZFxuICogZGVsYXllZENsaWNrcy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBEZWxheSBhbGwgY2xpY2tzIHVudGlsIGEgZnV0dXJlIGRhdGUgaGFwcGVuc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIGRlbGF5IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgnTWFyY2ggMTUsIDIwNTAgMTI6MDA6MDAnKTsgLy8gaW4gdGhlIGZ1dHVyZVxuICogY29uc3QgZGVsYXllZENsaWNrcyA9IGNsaWNrcy5waXBlKGRlbGF5KGRhdGUpKTsgLy8gY2xpY2sgZW1pdHRlZCBvbmx5IGFmdGVyIHRoYXQgZGF0ZVxuICogZGVsYXllZENsaWNrcy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBkZWxheVdoZW59XG4gKiBAc2VlIHtAbGluayB0aHJvdHRsZX1cbiAqIEBzZWUge0BsaW5rIHRocm90dGxlVGltZX1cbiAqIEBzZWUge0BsaW5rIGRlYm91bmNlfVxuICogQHNlZSB7QGxpbmsgZGVib3VuY2VUaW1lfVxuICogQHNlZSB7QGxpbmsgc2FtcGxlfVxuICogQHNlZSB7QGxpbmsgc2FtcGxlVGltZX1cbiAqIEBzZWUge0BsaW5rIGF1ZGl0fVxuICogQHNlZSB7QGxpbmsgYXVkaXRUaW1lfVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfERhdGV9IGR1ZSBUaGUgZGVsYXkgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIChhIGBudW1iZXJgKSBvclxuICogYSBgRGF0ZWAgdW50aWwgd2hpY2ggdGhlIGVtaXNzaW9uIG9mIHRoZSBzb3VyY2UgaXRlbXMgaXMgZGVsYXllZC5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyTGlrZX0gW3NjaGVkdWxlcj1hc3luY10gVGhlIHtAbGluayBTY2hlZHVsZXJMaWtlfSB0byB1c2UgZm9yXG4gKiBtYW5hZ2luZyB0aGUgdGltZXJzIHRoYXQgaGFuZGxlIHRoZSB0aW1lLXNoaWZ0IGZvciBlYWNoIGl0ZW0uXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBkZWxheXMgdGhlIGVtaXNzaW9ucyBvZlxuICogdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGJ5IHRoZSBzcGVjaWZpZWQgdGltZW91dCBvciBEYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsYXk8VD4oZHVlOiBudW1iZXIgfCBEYXRlLCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UgPSBhc3luY1NjaGVkdWxlcik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gIGNvbnN0IGR1cmF0aW9uID0gdGltZXIoZHVlLCBzY2hlZHVsZXIpO1xuICByZXR1cm4gZGVsYXlXaGVuKCgpID0+IGR1cmF0aW9uKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbi8qKiBFbnN1cmUgdGhlIGl0ZW0gaXMgYWx3YXlzIHRoZSBsYXN0IHJlbmRlcmVkIHZhbHVlICovXG5leHBvcnQgY29uc3QgdXNlU3RhYmxlID0gPFQ+KHN0YWJsZTogVCkgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihzdGFibGUpO1xuICAgIHJlZi5jdXJyZW50ID0gc3RhYmxlO1xuICAgIHJldHVybiByZWY7XG59O1xuXG4vKiogRW5zdXJlIHRoZSBjYWxsYmFjayBpcyBhbHdheXMgdGhlIGxhc3QgcmVuZGVyZWQgY2FsbGJhY2ssIHNvIGl0IGhhcyByZWZlcmVuY2UgdG8gdGhlIGxhc3Qgc3RhdGVcbiAqXG4gKiBObyBuZWVkIGZvciBkZXBlbmRlbmNpZXMsIHRoaXMgd2lsbCBzaW1wbHkgaGF2ZSBhY2Nlc3MgdG8gdGhlIHZhbHVlcyB0aGF0IGV4aXN0ZWQgaW4gdGhlIHJlbmRlclxuICogd2hlbiBpdCB3YXMgY3JlYXRlZCBkdXJpbmcgdGhlIGxhc3QgcmVuZGVyLlxuICovXG5leHBvcnQgY29uc3QgdXNlU3RhYmxlQ2FsbGJhY2sgPSA8VEFyZ3MgZXh0ZW5kcyB1bmtub3duW10sIFRSZXR1cm4+KFxuICAgIHN0YWJsZTogKC4uLmFyZ3M6IFRBcmdzKSA9PiBUUmV0dXJuLFxuKSA9PiB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YWJsZSk7XG4gICAgcmVmLmN1cnJlbnQgPSBzdGFibGU7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB1c2VSZWYoKC4uLmFyZ3M6IFRBcmdzKSA9PiByZWYuY3VycmVudCguLi5hcmdzKSk7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmN1cnJlbnQ7XG59O1xuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFBvaW50ZXJFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCB0eXBlIE1vdXNlRXZlbnQgPSBQb2ludGVyRXZlbnQgJiB7XG4gICAgY2xpZW50WD86IG51bWJlcjtcbiAgICBjbGllbnRZPzogbnVtYmVyO1xuICAgIHBvaW50ZXJJZD86IG51bWJlcjtcbiAgICBidXR0b25zPzogbnVtYmVyO1xufTtcbmV4cG9ydCB0eXBlIFdoZWVsRXZlbnQgPSBQb2ludGVyRXZlbnQgJiB7IGRlbHRhWDogbnVtYmVyOyBkZWx0YVk6IG51bWJlcjsgZGVsdGFaOiBudW1iZXIgfTtcbmV4cG9ydCB0eXBlIE1vdXNlSG9zdCA9IFZpZXcgJiB7XG4gICAgc2V0UG9pbnRlckNhcHR1cmU6IChwb2ludGVySWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgICByZWxlYXNlUG9pbnRlckNhcHR1cmU6IChwb2ludGVySWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgICBvbndoZWVsPzogKGU6IFdoZWVsRXZlbnQpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZW51bSBNb3VzZUJ1dHRvbiB7XG4gICAgTGVmdCA9IDEsXG4gICAgUmlnaHQgPSAyLFxuICAgIE1pZGRsZSA9IDQsXG4gICAgQWxsID0gNyxcbn1cblxuZXhwb3J0IGNvbnN0IE1vdmVhYmxlVmlldyA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgcG9zaXRpb246IGluaXRQb3NpdGlvbixcbiAgICBvbk1vdmUsXG4gICAgbW91c2VCdXR0b24gPSBNb3VzZUJ1dHRvbi5BbGwsXG4gICAgZW5hYmxlU2NhbGluZyA9IGZhbHNlLFxuICAgIHdob2xlQ2FudmFzID0gZmFsc2UsXG4gICAgaW5uZXJDbGFzc05hbWUsXG4gICAgb3V0ZXJDbGFzc05hbWUsXG59OiB7XG4gICAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xuICAgIHBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH07XG4gICAgb25Nb3ZlOiAocG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXIgfSkgPT4gdm9pZDtcbiAgICBtb3VzZUJ1dHRvbj86IE1vdXNlQnV0dG9uO1xuICAgIGVuYWJsZVNjYWxpbmc/OiBib29sZWFuO1xuICAgIHdob2xlQ2FudmFzPzogYm9vbGVhbjtcbiAgICBpbm5lckNsYXNzTmFtZT86IHN0cmluZztcbiAgICBvdXRlckNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogaW5pdFBvc2l0aW9uLngsXG4gICAgICAgIHk6IGluaXRQb3NpdGlvbi55LFxuICAgICAgICBzY2FsZTogaW5pdFBvc2l0aW9uLnNjYWxlLFxuICAgICAgICBkcmFnUG9pbnRlcklkOiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB4RHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB5RHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB4UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeVBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdGFydERyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCEoKGUuYnV0dG9ucyA/PyAwKSAmIG1vdXNlQnV0dG9uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHhQb2ludGVyID0gZS5jbGllbnRYID8/IDA7XG4gICAgICAgIGNvbnN0IHlQb2ludGVyID0gZS5jbGllbnRZID8/IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBzdGFydERyYWdgLCB7IHhQb2ludGVyLCB5UG9pbnRlciwgZSwgcG9zaXRpb24sIGNvbnRleHRTY2FsZSB9KTtcblxuICAgICAgICBob3N0UmVmLmN1cnJlbnQ/LnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkID8/IDApO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBkcmFnUG9pbnRlcklkOiBlLnBvaW50ZXJJZCxcbiAgICAgICAgICAgIHhEcmFnU3RhcnQ6IHMueCxcbiAgICAgICAgICAgIHlEcmFnU3RhcnQ6IHMueSxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB4UG9pbnRlcixcbiAgICAgICAgICAgIHlQb2ludGVyRHJhZ1N0YXJ0OiB5UG9pbnRlcixcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVuZERyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmRyYWdQb2ludGVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhvc3RSZWYuY3VycmVudD8ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHBvc2l0aW9uLmRyYWdQb2ludGVySWQpO1xuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB4UG9pbnRlciA9IGUuY2xpZW50WCA/PyAwO1xuICAgICAgICBjb25zdCB5UG9pbnRlciA9IGUuY2xpZW50WSA/PyAwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgZW5kRHJhZ2AsIHsgeFBvaW50ZXIsIHlQb2ludGVyLCBlLCBwb3NpdGlvbiwgY29udGV4dFNjYWxlIH0pO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICB4OiAocy54RHJhZ1N0YXJ0ID8/IDApICsgKHhQb2ludGVyIC0gKHMueFBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlLFxuICAgICAgICAgICAgeTogKHMueURyYWdTdGFydCA/PyAwKSArICh5UG9pbnRlciAtIChzLnlQb2ludGVyRHJhZ1N0YXJ0ID8/IDApKSAvIGNvbnRleHRTY2FsZSxcbiAgICAgICAgICAgIGRyYWdQb2ludGVySWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICB5UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3ZlRHJhZyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBNb3VzZUV2ZW50LCBjb250ZXh0U2NhbGU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocG9zaXRpb24uZHJhZ1BvaW50ZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeFBvaW50ZXIgPSBlLmNsaWVudFggPz8gMDtcbiAgICAgICAgY29uc3QgeVBvaW50ZXIgPSBlLmNsaWVudFkgPz8gMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG1vdmVEcmFnYCwgeyB4UG9pbnRlciwgeVBvaW50ZXIsIGUsIHBvc2l0aW9uLCBjb250ZXh0U2NhbGUgfSk7XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIHg6IChzLnhEcmFnU3RhcnQgPz8gMCkgKyAoeFBvaW50ZXIgLSAocy54UG9pbnRlckRyYWdTdGFydCA/PyAwKSkgLyBjb250ZXh0U2NhbGUsXG4gICAgICAgICAgICB5OiAocy55RHJhZ1N0YXJ0ID8/IDApICsgKHlQb2ludGVyIC0gKHMueVBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzY3JvbGxXaGVlbCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbndoZWVsYCwgeyBlLCBwb3NpdGlvbiB9KTtcbiAgICAgICAgY29uc3QgZGVsdGFZID0gZS5kZWx0YVk7XG4gICAgICAgIGlmICghZGVsdGFZKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVuYWJsZVNjYWxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBzY2FsZTogcy5zY2FsZSAqIE1hdGgucG93KDAuOSwgZGVsdGFZID4gMCA/IDEgOiAtMSksXG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhvc3RSZWYgPSB1c2VSZWYobnVsbCBhcyBudWxsIHwgTW91c2VIb3N0KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBob3N0ID0gaG9zdFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBob3N0YCwgeyBob3N0IH0pO1xuICAgICAgICBob3N0Lm9ud2hlZWwgPSBzY3JvbGxXaGVlbDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhvc3Qub253aGVlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICB9LCBbIWhvc3RSZWYuY3VycmVudF0pO1xuXG4gICAgY29uc3Qgd2hvbGVIb3N0UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IE1vdXNlSG9zdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaG9zdCA9IHdob2xlSG9zdFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBob3N0YCwgeyBob3N0IH0pO1xuICAgICAgICBob3N0Lm9ud2hlZWwgPSBzY3JvbGxXaGVlbDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhvc3Qub253aGVlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICB9LCBbIXdob2xlSG9zdFJlZi5jdXJyZW50XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW92ZWFibGVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgeyh7IHBvc2l0aW9uOiBjb250ZXh0U2NhbGUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHt3aG9sZUNhbnZhcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3dob2xlSG9zdFJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtlID0+IHdob2xlQ2FudmFzICYmIHN0YXJ0RHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXtlID0+IGVuZERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJNb3ZlPXtlID0+IG1vdmVEcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e291dGVyQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtob3N0UmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17ZSA9PiB3aG9sZUNhbnZhcyAmJiBzdGFydERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXtlID0+IGVuZERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e2UgPT4gbW92ZURyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByZXNzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5uZXJDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4KSBzY2FsZSgke3Bvc2l0aW9uLnNjYWxlfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17ZSA9PiBzdGFydERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92ZWFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHBvc2l0aW9uLCB3aG9sZUNhbnZhcyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW92ZWFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Nb3ZlYWJsZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBNb3ZlYWJsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICB3aG9sZUNhbnZhczogZmFsc2UsXG4gICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgfSxcbn0pO1xuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwge1xuICAgIGNyZWF0ZUNvbnRleHQsXG4gICAgdXNlQ29udGV4dCxcbiAgICB1c2VFZmZlY3QsXG4gICAgdXNlTGF5b3V0RWZmZWN0LFxuICAgIHVzZVJlZixcbiAgICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCB6aXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlQ29udGV4dCwgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7XG4gICAgUGlwZXNjcmlwdE5vZGUsXG4gICAgUGlwZXNjcmlwdFBpcGUsXG4gICAgUGlwZXNjcmlwdFBpcGVWYWx1ZSxcbiAgICBQaXBlc2NyaXB0VHlwZSxcbiAgICBQaXBlc2NyaXB0VmFyaWFibGUsXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93LFxuICAgIFBpcGVzY3JpcHRXb3JrZmxvd0lucHV0LFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGdldFR5cGVOYW1lID0gKHR5cGU6IFBpcGVzY3JpcHRUeXBlKSA9PiB7XG4gICAgaWYgKHR5cGUua2luZCA9PT0gYHNpbXBsZWApIHtcbiAgICAgICAgcmV0dXJuIHR5cGUudHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodHlwZSk7XG59O1xuXG5jb25zdCBXb3JrZmxvd0lucHV0TmFtZSA9ICh7IGlucHV0IH06IHsgaW5wdXQ6IFBpcGVzY3JpcHRXb3JrZmxvd0lucHV0IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ibHVlLTMwMCAke2lucHV0Lmlnbm9yZWQgPyBgbGluZS10aHJvdWdoIG9wYWNpdHktNTBgIDogYGB9YH1cbiAgICAgICAgPntgJHtpbnB1dC5uYW1lfWB9PC9UZXh0PlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgV29ya0Zsb3dWaWV3ID0gKHtcbiAgICB3b3JrZmxvdyxcbiAgICBmdWxsID0gZmFsc2UsXG4gICAgaGlkZVRpdGxlcyA9IGZhbHNlLFxufToge1xuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3c7XG4gICAgZnVsbD86IGJvb2xlYW47XG4gICAgaGlkZVRpdGxlcz86IGJvb2xlYW47XG59KSA9PiB7XG4gICAgLy8gJHtmdWxsID8gYG1pbi13LVsyMHZ3XSBtaW4taC1bMjB2aF1gIDogYG1pbi13LVsyMHB4XSBtaW4taC1bMTBweF1gfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LWNvbHVtbiByZWxhdGl2ZSBiZy1zbGF0ZS05NTAvNzUgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gbS1bLTFweF0gcm91bmRlZFxuICAgICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyFoaWRlVGl0bGVzICYmIChcbiAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e2Ake3dvcmtmbG93Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmlucHV0cy5tYXAoaW5wdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5wdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya2Zsb3dJbnB1dE5hbWUgaW5wdXQ9e2lucHV0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyPXt3b3JrZmxvd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nanVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUgYW5pbWF0ZS1ib3VuY2UgdGV4dC1bOHB4XSBhYnNvbHV0ZSB0b3AtMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjZDRlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5ub2Rlcy5tYXAobiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e24ubm9kZUlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZVZpZXcgbm9kZT17bn0gY29udGFpbmVyPXt3b3JrZmxvd30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5vdXRwdXRzLm1hcChvdXRwdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0cHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xIGZsZXgtcm93IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZS5raW5kID09PSBgZGF0YWAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtcHVycGxlLTQwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3V0cHV0LnBpcGUuanNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvdXRwdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI9e3dvcmtmbG93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpcGU6IG91dHB1dC5waXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk/Lm1hcChzb3VyY2VJZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c291cmNlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uSWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG91dHB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlSWQ9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTMwMCc+e2Ake291dHB1dC5uYW1lfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuXG4gICAgICAgICAgICB7IWhpZGVUaXRsZXMgJiYgKFxuICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57YCR7d29ya2Zsb3cud29ya2Zsb3dVcml9YH08L1RleHQ+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Lyoge3dvcmtmbG93LndvcmtmbG93cz8ubWFwKHcgPT4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3cubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC0wIHRvcC0wIHNjYWxlLTUwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3d9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSl9ICovfVxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IE5vZGVWaWV3ID0gKHsgbm9kZSwgY29udGFpbmVyIH06IHsgbm9kZTogUGlwZXNjcmlwdE5vZGU7IGNvbnRhaW5lcjogUGlwZXNjcmlwdFdvcmtmbG93IH0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogbm9kZS5sYXlvdXQ/LnBvc2l0aW9uLnggPz8gMCxcbiAgICAgICAgeTogbm9kZS5sYXlvdXQ/LnBvc2l0aW9uLnkgPz8gMCxcbiAgICAgICAgc2NhbGU6IG5vZGUubGF5b3V0Py5zY2FsZSA/PyAxLFxuICAgIH0pO1xuICAgIGNvbnN0IG1vdmVOb2RlID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZhbHVlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgc2V0UG9zaXRpb24odmFsdWUpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd29ya2Zsb3cgPSAoKCkgPT4ge1xuICAgICAgICBpZiAobm9kZS5pbXBsZW1lbnRhdGlvbi5raW5kID09PSBgd29ya2Zsb3dgKSB7XG4gICAgICAgICAgICBjb25zdCBpbXAgPSBub2RlLmltcGxlbWVudGF0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci53b3JrZmxvd3M/LmZpbmQodyA9PiB3LndvcmtmbG93VXJpID09PSBpbXAud29ya2Zsb3dVcmkpO1xuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TW92ZWFibGVWaWV3XG4gICAgICAgICAgICBwb3NpdGlvbj17e1xuICAgICAgICAgICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBzY2FsZTogcG9zaXRpb24uc2NhbGUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3ZlPXttb3ZlTm9kZX1cbiAgICAgICAgICAgIG1vdXNlQnV0dG9uPXtNb3VzZUJ1dHRvbi5MZWZ0fVxuICAgICAgICA+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleC1jb2x1bW4gYmctemluYy05NTAvNzUgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gbS1bLTFweF0gcm91bmRlZCdcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weClgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e3dvcmtmbG93Lm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTIgdGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz4je25vZGUubm9kZUlkfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAge3dvcmtmbG93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpbnB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQaXBlID0gbm9kZS5pbnB1dFBpcGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0+IHAubmFtZSA9PT0gaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dFBpcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRQaXBlLmtpbmQgPT09IGBkYXRhYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nbWwtWy0xNnB4XSBtci1bMTZweF0gdGV4dC1wdXJwbGUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dFBpcGUuanNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbWwtWy04cHhdIG1yLVswcHhdJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbm9kZS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcj17Y29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JQaXBlU291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlwZTogbm9kZS5pbnB1dFBpcGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4Lm5hbWUgPT09IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KT8ubWFwKHNvdXJjZUlkID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c291cmNlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25JZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpbnB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkPXtzb3VyY2VJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtmbG93SW5wdXROYW1lIGlucHV0PXtpbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3dvcmtmbG93fSBoaWRlVGl0bGVzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93Lm91dHB1dHMubWFwKG91dHB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dHB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xIGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtMzAwJz57YCR7b3V0cHV0Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+OjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbWwtWzBweF0gbXItWy04cHhdJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbm9kZS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvdXRwdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyPXtjb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPntub2RlLmltcGxlbWVudGF0aW9uLn08L1RleHQ+ICovfVxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICApO1xufTtcblxuY29uc3QgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlID0gKHtcbiAgICBub2RlSWQsXG4gICAgbmFtZSxcbiAgICBkaXJlY3Rpb24sXG59OiB7XG4gICAgbm9kZUlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRpcmVjdGlvbjogYG91dGAgfCBgaW5gO1xufSkgPT4ge1xuICAgIHJldHVybiBgbm9kZToke25vZGVJZH06JHtkaXJlY3Rpb259OiR7bmFtZX1gO1xufTtcblxuY29uc3QgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyA9ICh7XG4gICAgd29ya2Zsb3dVcmksXG4gICAgbmFtZSxcbiAgICBkaXJlY3Rpb24sXG59OiB7XG4gICAgd29ya2Zsb3dVcmk6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGlyZWN0aW9uOiBgb3V0YCB8IGBpbmA7XG59KSA9PiB7XG4gICAgcmV0dXJuIGB3b3JrZmxvdzoke3dvcmtmbG93VXJpfToke2RpcmVjdGlvbn06JHtuYW1lfWA7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2UgPSAoe1xuICAgIHBpcGUsXG4gICAgd29ya2Zsb3csXG59OiB7XG4gICAgcGlwZTogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZTtcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xufSkgPT4ge1xuICAgIGlmICghcGlwZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChwaXBlLmtpbmQgPT09IGB3b3JrZmxvdy1pbnB1dGApIHtcbiAgICAgICAgcmV0dXJuIHBpcGUud29ya2Zsb3dJbnB1dE5hbWVzLm1hcChuYW1lID0+XG4gICAgICAgICAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocGlwZS5raW5kID09PSBgbm9kZWApIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSh7XG4gICAgICAgICAgICAgICAgbm9kZUlkOiBwaXBlLnNvdXJjZU5vZGVJZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBwaXBlLnNvdXJjZU5vZGVPdXRwdXROYW1lLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvLyBpZihwaXBlLmtpbmQgPT09IGBkYXRhYCl7XG5cbiAgICAvLyB9XG5cbiAgICByZXR1cm4gW107XG59O1xuXG5leHBvcnQgdHlwZSBQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlID0ge1xuICAgIGhvc3RPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFZpZXc+O1xuICAgIGhvc3RWaWV3OiBudWxsIHwgVmlldztcbiAgICBlbmRwb2ludHM6IHtcbiAgICAgICAgW2lkOiBzdHJpbmddOiB1bmRlZmluZWQgfCBTdWJqZWN0PHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT47XG4gICAgfTtcbn07XG5leHBvcnQgY29uc3QgUGlwZUVuZHBvaW50c1JlZ2lzdHJ5ID0gY3JlYXRlQ29udGV4dDxQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlPih7XG4gICAgaG9zdE9ic2VydmFibGU6IG5ldyBTdWJqZWN0KCksXG4gICAgaG9zdFZpZXc6IG51bGwsXG4gICAgZW5kcG9pbnRzOiB7fSxcbn0pO1xuXG5jb25zdCBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdCA9IChyZWdpc3RyeTogUGlwZUVuZHBvaW50c1JlZ2lzdHJ5VHlwZSwgaWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIHJlZ2lzdHJ5LmVuZHBvaW50c1tpZF1cbiAgICAgICAgPz8gKHJlZ2lzdHJ5LmVuZHBvaW50c1tpZF0gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICB9KSlcbiAgICApO1xufTtcblxuY29uc3QgUGlwZVZpZXcgPSAoe1xuICAgIHNvdXJjZUlkLFxuICAgIGRlc3RpbmF0aW9uSWQsXG59OiB7XG4gICAgc291cmNlSWQ6IHVuZGVmaW5lZCB8IHN0cmluZztcbiAgICBkZXN0aW5hdGlvbklkOiBzdHJpbmc7XG59KSA9PiB7XG4gICAgY29uc3QgcmVnaXN0cnkgPSB1c2VDb250ZXh0KFBpcGVFbmRwb2ludHNSZWdpc3RyeSk7XG5cbiAgICBjb25zdCBkZXN0aW5hdGlvbkVuZHBvaW50ID0gZ2V0T3JDcmVhdGVFbmRwb2ludFN1YmplY3QocmVnaXN0cnksIGRlc3RpbmF0aW9uSWQpO1xuICAgIGNvbnN0IHNvdXJjZUVuZHBvaW50ID0gIXNvdXJjZUlkID8gdW5kZWZpbmVkIDogZ2V0T3JDcmVhdGVFbmRwb2ludFN1YmplY3QocmVnaXN0cnksIHNvdXJjZUlkKTtcblxuICAgIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoe1xuICAgICAgICBzb3VyY2U6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICBkZXN0aW5hdGlvbjogeyB4OiAwLCB5OiAwIH0sXG4gICAgfSk7XG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXNvdXJjZUVuZHBvaW50IHx8ICFkZXN0aW5hdGlvbkVuZHBvaW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUGlwZVZpZXcgIXNvdXJjZUVuZHBvaW50IHx8ICFkZXN0aW5hdGlvbkVuZHBvaW50YCwge1xuICAgICAgICAgICAgICAgIHNvdXJjZUlkLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgcmVnaXN0cnksXG4gICAgICAgICAgICAgICAgc291cmNlRW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25FbmRwb2ludCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluaXQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAgICAgICBjb21iaW5lTGF0ZXN0KFtzb3VyY2VFbmRwb2ludCwgZGVzdGluYXRpb25FbmRwb2ludCwgaW5pdF0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChbc291cmNlLCBkZXN0aW5hdGlvbl0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUGlwZVZpZXcgZHJhd2AsIHsgc291cmNlLCBkZXN0aW5hdGlvbiB9KTtcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbih7IHNvdXJjZSwgZGVzdGluYXRpb24gfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGluaXRpYWxcbiAgICAgICAgY29uc29sZS5sb2coYGluaXRpYWxgKTtcbiAgICAgICAgaW5pdC5uZXh0KCk7XG4gICAgfSwgWyFkZXN0aW5hdGlvbkVuZHBvaW50LCAhc291cmNlRW5kcG9pbnRdKTtcblxuICAgIGNvbnN0IGRlYnVnID0gZmFsc2U7XG4gICAgY29uc3QgeERlbHRhID0gcG9zaXRpb24uZGVzdGluYXRpb24ueCAtIHBvc2l0aW9uLnNvdXJjZS54O1xuICAgIGNvbnN0IHlEZWx0YSA9IHBvc2l0aW9uLmRlc3RpbmF0aW9uLnkgLSBwb3NpdGlvbi5zb3VyY2UueTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQoeERlbHRhICogeERlbHRhICsgeURlbHRhICogeURlbHRhKTtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoeURlbHRhLCB4RGVsdGEpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy0wIGgtMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LTAgaC0wIGFic29sdXRlJz5cbiAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7LXhEZWx0YSArIDR9cHgsJHsteURlbHRhIC0gMn1weClgLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7YW5nbGV9cmFkKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctcmVkLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG5cbiAgICAgICAgICAgICAgICB7ZGVidWcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LTIwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntgKCR7cG9zaXRpb24uc291cmNlLnh9LCR7cG9zaXRpb24uc291cmNlLnl9KT0+KCR7cG9zaXRpb24uZGVzdGluYXRpb24ueH0sJHtwb3NpdGlvbi5kZXN0aW5hdGlvbi55fSlgfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBQaXBlRW5kcG9pbnRWaWV3ID0gKHsgaWQsIGNvbnRhaW5lciB9OiB7IGlkOiBzdHJpbmc7IGNvbnRhaW5lcjogUGlwZXNjcmlwdFdvcmtmbG93IH0pID0+IHtcbiAgICBjb25zdCBzaXplID0gMTI7XG5cbiAgICBjb25zdCByZWdpc3RyeSA9IHVzZUNvbnRleHQoUGlwZUVuZHBvaW50c1JlZ2lzdHJ5KTtcbiAgICBjb25zdCBtb3ZlQ29udGV4dCA9IHVzZUNvbnRleHQoTW92ZWFibGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHRhcmdldFJlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBWaWV3KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdGAsIHsgcmVnaXN0cnkgfSk7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaCA9IHJlZ2lzdHJ5Lmhvc3RWaWV3O1xuICAgICAgICAgICAgaWYgKCFoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFBpcGVFbmRwb2ludFZpZXcgdXNlTGF5b3V0RWZmZWN0IC0gaG9zdCBOT1QgUkVBRFlgLCB7IHJlZ2lzdHJ5IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHQgPSB0YXJnZXRSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghdCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdCAtIGNvbXBvbmVudCBOT1QgUkVBRFlgLCB7IHJlZ2lzdHJ5IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdC5tZWFzdXJlTGF5b3V0KGgsIChsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUGlwZUVuZHBvaW50VmlldyB1c2VMYXlvdXRFZmZlY3QgbWVhc3VyZUxheW91dCBORVhUYCwge1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gZ2V0T3JDcmVhdGVFbmRwb2ludFN1YmplY3QocmVnaXN0cnksIGlkKTtcbiAgICAgICAgICAgICAgICBzLm5leHQoe1xuICAgICAgICAgICAgICAgICAgICB4OiBsZWZ0ICsgbW92ZUNvbnRleHQucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG9wICsgbW92ZUNvbnRleHQucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNhbGN1bGF0ZSgpO1xuICAgICAgICByZWdpc3RyeS5ob3N0T2JzZXJ2YWJsZS5zdWJzY3JpYmUoaCA9PiB7XG4gICAgICAgICAgICBjYWxjdWxhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW1xuICAgICAgICAhIXRhcmdldFJlZi5jdXJyZW50LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi54LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi55LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi5zY2FsZSxcbiAgICBdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy0yIGgtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPFZpZXcgcmVmPXt0YXJnZXRSZWZ9IGNsYXNzTmFtZT0ndy0wIGgtMCBhYnNvbHV0ZSBwdC0xJz5cbiAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNDAwIGJvcmRlci1bMXB4XSBib3JkZXItYmx1ZS05NTAgcm91bmRlZC1mdWxsJ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAtc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IC1zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG4iLCAiLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDEtZGVjbGFyYXRpb25zLzA2LnRzLndvcmtmbG93Lmpzb24nO1xuLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDItYXNzaWdubWVudHMvMDMudHMud29ya2Zsb3cuanNvbic7XG4vLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwMy1vcGVyYXRvcnMvMDQudHMud29ya2Zsb3cuanNvbic7XG4vLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwNC1tdXRhdGlvbi8wNi50cy53b3JrZmxvdy5qc29uJztcbmltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDA1LWxvZ2ljLzAxLnRzLndvcmtmbG93Lmpzb24nO1xuaW1wb3J0IHsgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi9zcmMvdHlwZXMnO1xuZXhwb3J0IHsgV29ya0NhbnZhc1ZpZXcgfSBmcm9tICcuL3NyYy91aS93b3JrLWNhbnZhcy12aWV3JztcbmV4cG9ydCBjb25zdCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvdyA9IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBhcyBQaXBlc2NyaXB0V29ya2Zsb3c7XG4iLCAiaW1wb3J0IHsgV29ya0NhbnZhc1ZpZXcsIGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93IH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9waXBlc2NyaXB0JztcblxuZXhwb3J0IGNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gPFdvcmtDYW52YXNWaWV3IHdvcmtmbG93PXtleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd30gLz47XG59O1xuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBiYWNrZ3JvdW5kQ29sb3IgVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gYW5pbWF0ZWQgYHRydWVgIHRvIGFuaW1hdGUgdGhlIGJhY2tncm91bmQgY29sb3IgY2hhbmdlLCBgZmFsc2VgIHRvIGNoYW5nZSBpbW1lZGlhdGVseS5cbiAqIEBwbGF0Zm9ybSBhbmRyb2lkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckJhY2tncm91bmRDb2xvcihiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZywgYW5pbWF0ZWQ6IGJvb2xlYW4pIHtcbiAgU3RhdHVzQmFyLnNldEJhY2tncm91bmRDb2xvcihiYWNrZ3JvdW5kQ29sb3IsIGFuaW1hdGVkKTtcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiB0aGUgbmV0d29yayBhY3Rpdml0eSBpbmRpY2F0b3IuXG4gKiBAcGFyYW0gdmlzaWJsZSBJZiB0aGUgbmV0d29yayBhY3Rpdml0eSBpbmRpY2F0b3Igc2hvdWxkIGJlIHZpc2libGUuXG4gKiBAcGxhdGZvcm0gaW9zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0Jhck5ldHdvcmtBY3Rpdml0eUluZGljYXRvclZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICBTdGF0dXNCYXIuc2V0TmV0d29ya0FjdGl2aXR5SW5kaWNhdG9yVmlzaWJsZSh2aXNpYmxlKTtcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBTdGF0dXNCYXJBbmltYXRpb24gfSBmcm9tICcuL1N0YXR1c0Jhci50eXBlcyc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIGhpZGRlbiBJZiB0aGUgc3RhdHVzIGJhciBzaG91bGQgYmUgaGlkZGVuLlxuICogQHBhcmFtIGFuaW1hdGlvbiBBbmltYXRpb24gdG8gdXNlIHdoZW4gdG9nZ2xpbmcgaGlkZGVuLCBkZWZhdWx0cyB0byBgJ25vbmUnYC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFySGlkZGVuKGhpZGRlbjogYm9vbGVhbiwgYW5pbWF0aW9uOiBTdGF0dXNCYXJBbmltYXRpb24pIHtcbiAgU3RhdHVzQmFyLnNldEhpZGRlbihoaWRkZW4sIGFuaW1hdGlvbik7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyU3R5bGUgfSBmcm9tICcuL1N0YXR1c0Jhci50eXBlcyc7XG5pbXBvcnQgc3R5bGVUb0JhclN0eWxlIGZyb20gJy4vc3R5bGVUb0JhclN0eWxlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogU2V0IHRoZSBiYXIgc3R5bGUgb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gc3R5bGUgVGhlIGNvbG9yIG9mIHRoZSBzdGF0dXMgYmFyIHRleHQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhclN0eWxlKHN0eWxlOiBTdGF0dXNCYXJTdHlsZSkge1xuICBTdGF0dXNCYXIuc2V0QmFyU3R5bGUoc3R5bGVUb0JhclN0eWxlKHN0eWxlKSk7XG59XG4iLCAiaW1wb3J0IHsgQXBwZWFyYW5jZSwgQ29sb3JTY2hlbWVOYW1lIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyU3R5bGUgfSBmcm9tICcuL1N0YXR1c0Jhci50eXBlcyc7XG5cbmZ1bmN0aW9uIGdldENvbG9yU2NoZW1lKCkge1xuICBpZiAoQXBwZWFyYW5jZSkge1xuICAgIHJldHVybiBBcHBlYXJhbmNlLmdldENvbG9yU2NoZW1lKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdsaWdodCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVUb0JhclN0eWxlKFxuICBzdHlsZTogU3RhdHVzQmFyU3R5bGUgPSAnYXV0bycsXG4gIGNvbG9yU2NoZW1lOiBDb2xvclNjaGVtZU5hbWUgPSBnZXRDb2xvclNjaGVtZSgpXG4pOiAnbGlnaHQtY29udGVudCcgfCAnZGFyay1jb250ZW50JyB7XG4gIGlmICghY29sb3JTY2hlbWUpIHtcbiAgICBjb2xvclNjaGVtZSA9ICdsaWdodCc7XG4gIH1cblxuICBsZXQgcmVzb2x2ZWRTdHlsZSA9IHN0eWxlO1xuICBpZiAoc3R5bGUgPT09ICdhdXRvJykge1xuICAgIHJlc29sdmVkU3R5bGUgPSBjb2xvclNjaGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XG4gIH0gZWxzZSBpZiAoc3R5bGUgPT09ICdpbnZlcnRlZCcpIHtcbiAgICByZXNvbHZlZFN0eWxlID0gY29sb3JTY2hlbWUgPT09ICdsaWdodCcgPyAnbGlnaHQnIDogJ2RhcmsnO1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVkU3R5bGUgPT09ICdsaWdodCcgPyAnbGlnaHQtY29udGVudCcgOiAnZGFyay1jb250ZW50Jztcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBTZXQgdGhlIHRyYW5zbHVjZW5jeSBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSB0cmFuc2x1Y2VudCBXaGV0aGVyIHRoZSBhcHAgY2FuIGRyYXcgdW5kZXIgdGhlIHN0YXR1cyBiYXIuIFdoZW4gYHRydWVgLCBjb250ZW50IHdpbGwgYmVcbiAqIHJlbmRlcmVkIHVuZGVyIHRoZSBzdGF0dXMgYmFyLiBUaGlzIGlzIGFsd2F5cyBgdHJ1ZWAgb24gaU9TIGFuZCBjYW5ub3QgYmUgY2hhbmdlZC5cbiAqIEBwbGF0Zm9ybSBhbmRyb2lkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhclRyYW5zbHVjZW50KHRyYW5zbHVjZW50OiBib29sZWFuKSB7XG4gIFN0YXR1c0Jhci5zZXRUcmFuc2x1Y2VudCh0cmFuc2x1Y2VudCk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnZXhwby1zdGF0dXMtYmFyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJlc3NhYmxlLCBUZXh0LCBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gKCkgPT4ge1xuICAgICAgICBzZXRDb3VudChzID0+IHMgKyAxKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIGZsZXgtY29sIGZsZXgtMSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctcmVkLTEwMCc+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtY3lhbi03MDAnPkV4YW1wbGVWaWV3IC4uLjwvVGV4dD5cbiAgICAgICAgICAgIDxQcmVzc2FibGUgb25QcmVzcz17aW5jcmVtZW50fT5cbiAgICAgICAgICAgICAgICA8VGV4dD57YEluY3JlbWVudCBjb3VudDoke2NvdW50fWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0PjAwMzwvVGV4dD5cbiAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgPFN0YXR1c0JhciBzdHlsZT0nYXV0bycgLz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuIiwgImltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSAndGFpbHdpbmRjc3MnO1xuXG5leHBvcnQgY29uc3QgdGFpbHdpbmRUaGVtZTogQ29uZmlnW2B0aGVtZWBdID0ge1xuICAgIC8vIGVkaXQgeW91ciB0YWlsd2luZCB0aGVtZSBoZXJlIVxuICAgIC8vIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYWRkaW5nLWN1c3RvbS1zdHlsZXNcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFBQSxFQUNFLGFBQWU7QUFBQSxFQUNmLE1BQVE7QUFBQSxFQUNSLFFBQVUsQ0FBQztBQUFBLEVBQ1gsU0FBVztBQUFBLElBQ1Q7QUFBQSxNQUNFLE1BQVE7QUFBQSxNQUNSLE1BQVE7QUFBQSxRQUNOLE1BQVE7QUFBQSxRQUNSLE1BQVE7QUFBQSxNQUNWO0FBQUEsTUFDQSxNQUFRO0FBQUEsUUFDTixNQUFRO0FBQUEsUUFDUixjQUFnQjtBQUFBLFFBQ2hCLHNCQUF3QjtBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxhQUFlO0FBQUEsTUFDZixNQUFRO0FBQUEsTUFDUixRQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsTUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBVztBQUFBLFFBQ1Q7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLE1BQVE7QUFBQSxVQUNWO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixvQkFBc0I7QUFBQSxjQUNwQjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE9BQVMsQ0FBQztBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsTUFDRSxhQUFlO0FBQUEsTUFDZixNQUFRO0FBQUEsTUFDUixRQUFVLENBQUM7QUFBQSxNQUNYLFNBQVc7QUFBQSxRQUNUO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixNQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFTLENBQUM7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BQ0UsYUFBZTtBQUFBLE1BQ2YsTUFBUTtBQUFBLE1BQ1IsUUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLE1BQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLE1BQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVc7QUFBQSxRQUNUO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixNQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1Isb0JBQXNCO0FBQUEsY0FDcEI7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsT0FBUyxDQUFDO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxNQUNFLGFBQWU7QUFBQSxNQUNmLE1BQVE7QUFBQSxNQUNSLFFBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixNQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixNQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFXO0FBQUEsUUFDVDtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsTUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBYTtBQUFBLFFBQ1g7QUFBQSxVQUNFLGFBQWU7QUFBQSxVQUNmLE1BQVE7QUFBQSxVQUNSLFFBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxTQUFXO0FBQUEsWUFDYjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFR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Ozs7QUNBMUIsU0FBUyxhQUFBQyxrQkFBaUI7OztBQ0ExQixTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQTFCLFNBQVMsYUFBQUMsa0JBQWlCOzs7QUNBMUIsU0FBUyxrQkFBbUM7OztBQ0E1QyxTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQzFCLFNBQVMsWUFBQUMsaUJBQWdCO0FBQ3pCLFNBQVMsYUFBQUMsWUFBVyxRQUFBQyxPQUFNLFFBQUFDLGFBQVk7OztBQ0EvQixJQUFNLGdCQUFpQztBQUFBO0FBQUE7QUFHOUM7IiwKICAibmFtZXMiOiBbInVzZUxheW91dEVmZmVjdCIsICJ1c2VSZWYiLCAiVmlldyIsICJkIiwgImIiLCAiZnJvbSIsICJ2IiwgIlN1YnNjcmlwdGlvbiIsICJTdWJzY3JpYmVyIiwgIkNvbnN1bWVyT2JzZXJ2ZXIiLCAiU2FmZVN1YnNjcmliZXIiLCAiT2JzZXJ2YWJsZSIsICJvYnNlcnZhYmxlIiwgIk9wZXJhdG9yU3Vic2NyaWJlciIsICJlcnIiLCAiU3ViamVjdCIsICJvYnNlcnZhYmxlIiwgIkFub255bW91c1N1YmplY3QiLCAiQmVoYXZpb3JTdWJqZWN0IiwgIkFjdGlvbiIsICJkZWxheSIsICJBc3luY0FjdGlvbiIsICJkZWxheSIsICJTY2hlZHVsZXIiLCAiZGVsYXkiLCAiQXN5bmNTY2hlZHVsZXIiLCAiZGVsYXkiLCAiZGVsYXkiLCAiZGVsYXkiLCAiaXRlcmF0b3IiLCAiaXRlcmF0b3IiLCAiaXNBcnJheSIsICJpIiwgInVzZVJlZiIsICJ1c2VSZWYiLCAiUmVhY3QiLCAiY3JlYXRlQ29udGV4dCIsICJ1c2VSZWYiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlRleHQiLCAiVmlldyIsICJSZWFjdCIsICJ1c2VTdGF0ZSIsICJjcmVhdGVDb250ZXh0IiwgInVzZVJlZiIsICJ1c2VSZWYiLCAiY29udGV4dCIsICJ1c2VMYXlvdXRFZmZlY3QiLCAiVmlldyIsICJTdGF0dXNCYXIiLCAiU3RhdHVzQmFyIiwgIlN0YXR1c0JhciIsICJTdGF0dXNCYXIiLCAidXNlU3RhdGUiLCAiUHJlc3NhYmxlIiwgIlRleHQiLCAiVmlldyJdCn0K
