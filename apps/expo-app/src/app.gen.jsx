// ../../packages/pipescript/src/tests/code/0003-operators/04.ts.workflow.json
var ts_workflow_default = {
  name: "",
  workflowUri: "",
  inputs: [],
  outputs: [],
  body: {
    kind: "nodes",
    nodes: [
      {
        workflowUri: "file.ts",
        nodeId: "main",
        inputPipes: []
      }
    ]
  },
  workflows: [
    {
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
            sourceNodeId: "file.ts:2",
            sourceNodeOutputName: "b"
          }
        }
      ],
      workflows: [
        {
          workflowUri: "file.ts/a-declaration",
          name: "file.ts/a-declaration",
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
                kind: "workflow-operator"
              }
            }
          ],
          body: {
            kind: "operator",
            operator: "declaration"
          }
        },
        {
          workflowUri: "file.ts/*",
          name: "file.ts/*",
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
                type: "number"
              },
              pipe: {
                kind: "workflow-operator"
              }
            }
          ],
          body: {
            kind: "operator",
            operator: "*"
          }
        },
        {
          workflowUri: "file.ts/-",
          name: "file.ts/-",
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
                type: "number"
              }
            }
          ],
          outputs: [
            {
              name: "value",
              type: {
                kind: "simple",
                type: "number"
              },
              pipe: {
                kind: "workflow-operator"
              }
            }
          ],
          body: {
            kind: "operator",
            operator: "-"
          }
        },
        {
          workflowUri: "file.ts/*",
          name: "file.ts/*",
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
                type: "number"
              }
            }
          ],
          outputs: [
            {
              name: "value",
              type: {
                kind: "simple",
                type: "number"
              },
              pipe: {
                kind: "workflow-operator"
              }
            }
          ],
          body: {
            kind: "operator",
            operator: "*"
          }
        },
        {
          workflowUri: "file.ts/+",
          name: "file.ts/+",
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
                type: "number"
              }
            }
          ],
          outputs: [
            {
              name: "value",
              type: {
                kind: "simple",
                type: "number"
              },
              pipe: {
                kind: "workflow-operator"
              }
            }
          ],
          body: {
            kind: "operator",
            operator: "+"
          }
        },
        {
          workflowUri: "file.ts/+",
          name: "file.ts/+",
          inputs: [
            {
              name: "left",
              type: {
                kind: "simple",
                type: "number"
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
                type: "number"
              },
              pipe: {
                kind: "workflow-operator"
              }
            }
          ],
          body: {
            kind: "operator",
            operator: "+"
          }
        },
        {
          workflowUri: "file.ts/b-declaration",
          name: "file.ts/b-declaration",
          inputs: [
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
              },
              pipe: {
                kind: "workflow-operator"
              }
            }
          ],
          body: {
            kind: "operator",
            operator: "declaration"
          }
        }
      ],
      body: {
        kind: "nodes",
        nodes: [
          {
            nodeId: "file.ts:1",
            workflowUri: "file.ts/a-declaration",
            inputPipes: [
              {
                name: "a",
                kind: "data",
                json: "42"
              }
            ]
          },
          {
            nodeId: "file.ts:3",
            workflowUri: "file.ts/*",
            inputPipes: [
              {
                name: "left",
                kind: "node",
                sourceNodeId: "file.ts:1",
                sourceNodeOutputName: "a"
              },
              {
                name: "right",
                kind: "data",
                json: "3"
              }
            ]
          },
          {
            nodeId: "file.ts:4",
            workflowUri: "file.ts/-",
            inputPipes: [
              {
                name: "left",
                kind: "data",
                json: "2"
              },
              {
                name: "right",
                kind: "node",
                sourceNodeId: "file.ts:3",
                sourceNodeOutputName: "value"
              }
            ]
          },
          {
            nodeId: "file.ts:5",
            workflowUri: "file.ts/*",
            inputPipes: [
              {
                name: "left",
                kind: "node",
                sourceNodeId: "file.ts:1",
                sourceNodeOutputName: "a"
              },
              {
                name: "right",
                kind: "node",
                sourceNodeId: "file.ts:4",
                sourceNodeOutputName: "value"
              }
            ]
          },
          {
            nodeId: "file.ts:6",
            workflowUri: "file.ts/+",
            inputPipes: [
              {
                name: "left",
                kind: "node",
                sourceNodeId: "file.ts:1",
                sourceNodeOutputName: "a"
              },
              {
                name: "right",
                kind: "node",
                sourceNodeId: "file.ts:5",
                sourceNodeOutputName: "value"
              }
            ]
          },
          {
            nodeId: "file.ts:7",
            workflowUri: "file.ts/+",
            inputPipes: [
              {
                name: "left",
                kind: "node",
                sourceNodeId: "file.ts:6",
                sourceNodeOutputName: "value"
              },
              {
                name: "right",
                kind: "data",
                json: "7"
              }
            ]
          },
          {
            nodeId: "file.ts:2",
            workflowUri: "file.ts/b-declaration",
            inputPipes: [
              {
                name: "b",
                kind: "node",
                sourceNodeId: "file.ts:7",
                sourceNodeOutputName: "value"
              }
            ]
          }
        ]
      }
    }
  ]
};

// ../../packages/cl/src/utils/stable-callback.ts
import { useRef } from "react";
var useStableCallback = (stable) => {
  const ref = useRef(stable);
  ref.current = stable;
  const callback = useRef((...args) => ref.current(...args));
  return callback.current;
};

// ../../packages/pipescript/src/ui/work-canvas-view.tsx
import React6, { useLayoutEffect as useLayoutEffect2, useRef as useRef4, useState as useState6 } from "react";
import { View as View7, Text as Text8, Pressable as Pressable4 } from "react-native";

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

// ../../packages/pipescript/src/ui/moveable-view.tsx
import { createContext, useEffect, useRef as useRef2, useState } from "react";
import { View, Pressable } from "react-native";
var MoveableView = ({
  children,
  HeaderComponent,
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
    console.log(`startDrag`, { xPointer, yPointer, e, position, contextScale });
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
    const newX = (position.xDragStart ?? 0) + (xPointer - (position.xPointerDragStart ?? 0)) / contextScale;
    const newY = (position.yDragStart ?? 0) + (yPointer - (position.yPointerDragStart ?? 0)) / contextScale;
    setPosition((s) => ({
      ...s,
      x: newX,
      y: newY,
      dragPointerId: void 0,
      xPointerDragStart: void 0,
      yPointerDragStart: void 0
    }));
    onMove({
      x: newX,
      y: newY,
      scale: 1
    });
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
  return <MoveableContext.Consumer>{({ position: containerPosition }) => <><View className="flex-col flex-1">
    {wholeCanvas && <View className="flex-col">
      {HeaderComponent && <View className="bg-white"><HeaderComponent /></View>}
      {
        /* <Pressable
            className='flex-1 bg-fuchsia-600 opacity-50'
            ref={wholeHostRef}
            onPointerDown={e => wholeCanvas && startDrag(e, contextScale.scale)}
            onPointerUp={e => endDrag(e, contextScale.scale)}
            onPointerMove={e => moveDrag(e, contextScale.scale)}
        /> */
      }
    </View>}
    <View className={`flex-1 ${wholeCanvas ? `overflow-hidden` : ``}`}><Pressable
      className={outerClassName}
      ref={hostRef}
      onPointerDown={(e) => wholeCanvas && startDrag(e, containerPosition.scale)}
      onPointerUp={(e) => endDrag(e, containerPosition.scale)}
      onPointerMove={(e) => moveDrag(e, containerPosition.scale)}
    ><Pressable
      className={`${innerClassName}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`
      }}
      onPointerDown={(e) => startDrag(e, containerPosition.scale)}
    ><MoveableContext.Provider
      value={{
        position: {
          x: position.x + containerPosition.x,
          y: position.y + containerPosition.y,
          scale: position.scale * containerPosition.scale
        },
        wholeCanvas
      }}
    >{children}</MoveableContext.Provider></Pressable></Pressable></View>
  </View></>}</MoveableContext.Consumer>;
};
var MoveableContext = createContext({
  wholeCanvas: false,
  position: {
    x: 0,
    y: 0,
    scale: 1
  }
});

// ../../packages/pipescript/src/ui/node-instance-view.tsx
import React4, { createContext as createContext3, useContext as useContext3, useEffect as useEffect3, useState as useState4 } from "react";
import { View as View5, Text as Text6 } from "react-native";

// ../../packages/pipescript/src/ui/pipes.tsx
import React2, {
  createContext as createContext2,
  useContext,
  useEffect as useEffect2,
  useLayoutEffect,
  useRef as useRef3,
  useState as useState2
} from "react";
import { View as View2, Text as Text2 } from "react-native";
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
  if (pipe.kind === `workflow-operator`) {
    return [`operator`].map(
      (name) => calculatePipeEndpointIdForWorkflow({
        workflowUri: workflow.workflowUri,
        direction: `out`,
        name
      })
    );
  }
  if (pipe.kind === `workflow-input`) {
    return [pipe.workflowInputName].map(
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
var createPipeEndpointsRegistry = () => ({
  hostObservable: new Subject(),
  hostView: null,
  endpoints: {},
  pipes: new BehaviorSubject(
    {}
  )
});
var PipeEndpointsRegistryContext = createContext2(createPipeEndpointsRegistry());
var getOrCreateEndpointSubject = (registry, id) => {
  return registry.endpoints[id] ?? (registry.endpoints[id] = new BehaviorSubject({
    x: 0,
    y: 0
  }));
};
var PipeView = ({
  sourceId,
  destinationId,
  side = `inflow`
}) => {
  const { pipes: pipesSubject } = useContext(PipeEndpointsRegistryContext);
  useEffect2(() => {
    const key = `${sourceId}=>${destinationId}::${side}`;
    const old = pipesSubject.value;
    old[key] = !sourceId ? void 0 : {
      sourceId,
      destinationId,
      side
    };
    pipesSubject.next(old);
    return () => {
      const old2 = pipesSubject.value;
      old2[key] = void 0;
      pipesSubject.next(old2);
    };
  }, [sourceId, destinationId, side]);
  return <></>;
};
var PipeViewHost = () => {
  const { pipes: pipesSubject } = useContext(PipeEndpointsRegistryContext);
  const [pipes, setPipes] = useState2(pipesSubject.value);
  useEffect2(() => {
    const sub = pipesSubject.subscribe((x) => {
      setPipes({ ...x });
    });
    return () => {
      sub.unsubscribe();
    };
  }, []);
  return <View2 testID="PipeViewHost" className="absolute z-10 opacity-75">{[...Object.entries(pipes)].filter(([k, v]) => !!v).map(([k, v]) => <React2.Fragment key={k}>{v && <PipeViewLine {...v} />}</React2.Fragment>)}</View2>;
};
var PipeViewLine = ({
  sourceId,
  destinationId,
  side = `inflow`
}) => {
  const registry = useContext(PipeEndpointsRegistryContext);
  const destinationEndpoint = getOrCreateEndpointSubject(registry, destinationId);
  const sourceEndpoint = !sourceId ? void 0 : getOrCreateEndpointSubject(registry, sourceId);
  const [position, setPosition] = useState2({
    source: { x: 0, y: 0 },
    destination: { x: 0, y: 0 }
  });
  useLayoutEffect(() => {
    if (!sourceEndpoint || !destinationEndpoint) {
      return;
    }
    const init = new Subject();
    const sub = combineLatest([sourceEndpoint, destinationEndpoint, init]).subscribe(
      ([source, destination]) => {
        setPosition({ source, destination });
      }
    );
    console.log(`initial`, { sourceEndpoint, destinationEndpoint });
    init.next();
    return () => {
      sub.unsubscribe();
    };
  }, [!destinationEndpoint, !sourceEndpoint]);
  const debug = false;
  const isOutflow = side === `outflow`;
  const xDelta = position.destination.x - position.source.x;
  const yDelta = position.destination.y - position.source.y;
  const length = Math.sqrt(xDelta * xDelta + yDelta * yDelta);
  const angle = Math.atan2(yDelta, xDelta);
  return <View2
    testID={`PipeViewLine
            ${sourceId}
            =>${destinationId}
            ${side}`}
    className="w-0 h-0 justify-center items-center"
  >
    <View2 className="w-0 h-0 absolute"><View2
      style={{
        transform: `translate(${position.source.x + 4}px,${position.source.y - 2 + (isOutflow ? 2 : 0)}px)`
      }}
    ><View2
      style={{
        transform: `rotate(${angle}rad)`
      }}
    ><View2
      className={`${isOutflow ? `bg-blue-400` : `bg-red-400`}`}
      style={{
        height: 1,
        width: length
      }}
    /></View2></View2></View2>
    {debug && <><View2 className="absolute translate-y-[100px] rotate-45"><View2 className="w-[1000px] text-[4px] justify-center items-center">
      <Text2 className="text-white">{`(${sourceId})=>(${destinationId})`}</Text2>
      {
        /* <Text className='text-white'>{`(${position.source.x},${position.source.y})=>(${position.destination.x},${position.destination.y})`}</Text> */
      }
    </View2></View2></>}
  </View2>;
};
var PipeEndpointView = ({ id }) => {
  const size = 12;
  const registry = useContext(PipeEndpointsRegistryContext);
  const moveContext = useContext(MoveableContext);
  const targetRef = useRef3(null);
  useLayoutEffect(() => {
    const calculate = () => {
      const h = registry.hostView;
      if (!h) {
        return;
      }
      const t = targetRef.current;
      if (!t) {
        return;
      }
      t.measureLayout(h, (left, top, width, height) => {
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
  const debug = false;
  return <View2 className="w-2 h-2 justify-center items-center">
    <View2 ref={targetRef} className="w-0 h-0 absolute pt-1"><View2
      className="bg-blue-400 border-[1px] border-blue-950 rounded-full"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2
      }}
    /></View2>
    {debug && <View2 className="absolute translate-y-[100px] rotate-90"><Text2 className="text-blue-400">{id}</Text2></View2>}
  </View2>;
};

// ../../packages/pipescript/src/ui/sheet.tsx
import React3 from "react";
import { View as View4, Text as Text4, ScrollView } from "react-native";

// ../../packages/pipescript/src/ui/value-view.tsx
import { useContext as useContext2, useState as useState3 } from "react";
import { View as View3, Text as Text3, Pressable as Pressable2, TextInput } from "react-native";
var ValueEditor = ({
  id,
  value,
  hasOverride,
  onChange
}) => {
  const runValueContext = useContext2(RunValueContext);
  const changeValue = useStableCallback((v) => {
    toggleEdit(false);
    onChange(v);
  });
  const toggleEdit = useStableCallback((visible) => {
    console.log(`ValueEditor: toggleEdit`, { visible });
    const newShowEdit = visible;
    const components = runValueContext.Components.value;
    if (newShowEdit) {
      components[id] = () => <ValueEditModal
        id={id}
        value={value}
        onChange={changeValue}
        onCancel={() => toggleEdit(false)}
      />;
    } else {
      delete components[id];
    }
    runValueContext.Components.next(components);
  });
  return <><Pressable2 onPressIn={() => toggleEdit(true)}><ValueViewer value={value} mode={hasOverride ? `override` : void 0} /></Pressable2></>;
};
var ValueViewer = ({ value, mode }) => {
  return <><View3
    className={`m-[1px] ${mode === `override` ? `bg-green-100` : mode === `input` ? `bg-green-100` : mode === `output` ? `bg-green-100` : `bg-gray-100`}`}
  ><Text3
    className={`px-1 min-w-[60px] ${mode === `override` ? `text-green-600` : mode === `input` ? `text-green-600` : mode === `output` ? `text-green-600` : `text-gray-600`}`}
  >{JSON.stringify(value)}</Text3></View3></>;
};
var ValueEditModal = ({
  id,
  value: valueRaw,
  onChange,
  onCancel
}) => {
  const [value, setValue] = useState3(JSON.stringify(valueRaw));
  const save = useStableCallback(() => {
    onChange(JSON.parse(value));
  });
  const clear = useStableCallback(() => {
    onChange(void 0);
  });
  const cancel = useStableCallback(() => {
    onCancel();
  });
  return <View3 className="absolute flex-col bg-gray-100 p-2 rounded z-10">
    <TextInput className="bg-white" value={value} onChangeText={(x) => setValue(x)} />
    <View3 className="flex-row justify-between">
      <Pressable2 onPress={cancel}><View3 className="bg-gray-200 p-1 m-1"><Text3>Cancel</Text3></View3></Pressable2>
      <Pressable2 onPress={clear}><View3 className="bg-red-200 p-1 m-1"><Text3>Clear</Text3></View3></Pressable2>
      <Pressable2 onPress={save}><View3 className="bg-blue-200 p-1 m-1"><Text3>Save</Text3></View3></Pressable2>
    </View3>
  </View3>;
};

// ../../packages/pipescript/src/ui/sheet.tsx
var SheetView = ({ data }) => {
  return <View4 testID="SheetView" className="flex-col">
    <View4 className="flex-row">{data.header.map((x) => <React3.Fragment key={x.name}><View4 className="flex-1"><Text4>{x.name}</Text4></View4></React3.Fragment>)}</View4>
    <ScrollView className="flex-col max-h-[25vh]">{data.rows.map((r, i) => <React3.Fragment key={i}><View4 className="flex-row">{r.cells.map((x, j) => <React3.Fragment key={j}><View4 className="flex-1"><ValueViewer value={x} mode={data.header[j].mode} /></View4></React3.Fragment>)}</View4></React3.Fragment>)}</ScrollView>
  </View4>;
};

// ../../packages/pipescript/src/ui/work-names.tsx
import { Text as Text5 } from "react-native";
var getTypeName = (type) => {
  if (type.kind === `simple`) {
    return type.type;
  }
  return JSON.stringify(type);
};
var WorkflowInputName = ({ input }) => {
  return <Text5
    className={`text-blue-300 ${input.ignored ? `line-through opacity-50` : ``}`}
  >{`${input.name}`}</Text5>;
};

// ../../packages/pipescript/src/utils/json.ts
var jsonStringify_safe = (objRaw, shouldFormat) => {
  let nextId = 1;
  const deepRegister = (obj2, visited2, depth) => {
    if (typeof obj2 !== `object`) {
      return;
    }
    if (!obj2) {
      return;
    }
    const objReg = visited2.get(obj2);
    if (objReg) {
      objReg.minDepth = Math.min(depth, objReg.minDepth);
      return;
    }
    visited2.set(obj2, { id: `_id_${nextId++}_`, minDepth: depth });
    if (Array.isArray(obj2)) {
      obj2.forEach((x) => deepRegister(x, visited2, depth + 1));
      return;
    }
    Object.values(obj2).forEach((x) => deepRegister(x, visited2, depth + 1));
    return;
  };
  const deepClone = (obj2, visited2, depth) => {
    if (typeof obj2 === `object`) {
      if (!obj2) {
        return obj2;
      }
      const r = visited2.get(obj2);
      if (depth > (r?.minDepth ?? 0) || r?.visited) {
        return {
          ___ref: visited2.get(obj2)?.id ?? ``
        };
      }
      if (r) {
        r.visited = true;
      }
      if (Array.isArray(obj2)) {
        return obj2.map((x) => deepClone(x, visited2, depth + 1));
      }
      return {
        [visited2.get(obj2)?.id ?? ``]: ``,
        ...Object.fromEntries(
          Object.entries(obj2).map(([k, v]) => [k, deepClone(v, visited2, depth + 1)])
        )
      };
    }
    return obj2;
  };
  const registry = /* @__PURE__ */ new Map();
  deepRegister(objRaw, registry, 0);
  const obj = deepClone(objRaw, registry, 0);
  const visited = [];
  return JSON.stringify(obj, null, shouldFormat ? 2 : 0);
};

// ../../packages/pipescript/src/analysis/hash.ts
var cyrb53 = (str, seed = 0) => {
  let h1 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
  h1 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
  h2 ^= Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
var hashCode = (value) => {
  const json = jsonStringify_safe(value);
  return cyrb53(json);
};

// ../../packages/pipescript/src/analysis/calculate-run.ts
var calculateRun = (dataset, context2 = { visited: /* @__PURE__ */ new Set(), lazy: false }) => {
  dataset.rootNodeInstances.forEach((node) => {
    calculateRunValue_nodeOutput(node, context2);
  });
  calculateRun_names(dataset);
  recordRun(dataset);
};
var recordRun = (dataset) => {
  dataset.allNodeInstances.forEach((node) => {
    const runValue = {
      inputs: node.inputs.map((x) => ({
        name: x.runs?.nameInScope ?? x.name,
        value: x.runs?.value
      })),
      inner: node.children.flatMap(
        (c) => c.outputs.map((x) => ({
          name: x.runs?.nameInScope ?? x.name,
          value: x.runs?.value
        }))
      ),
      outputs: node.outputs.map((x) => ({
        name: x.runs?.nameInScope ?? x.name,
        value: x.runs?.value
      }))
    };
    const key = `${hashCode(runValue)}`;
    node.runs = node.runs ?? [];
    if (node.runs.some((x) => x.key === key)) {
      return;
    }
    node.runs.push({
      key,
      ...runValue
    });
  });
};
var calculateRunValue_nodeOutput = (node, context2) => {
  node.outputs.forEach((output) => {
    calculateRunValue_input(output, context2);
  });
  if (!context2.lazy) {
    node.children.forEach((x) => {
      calculateRunValue_nodeOutput(x, context2);
    });
    node.inputs.forEach((x) => {
      calculateRunValue_input(x, context2);
    });
  }
};
var calculateRunValue_connectionOverride = (connection, value, context2 = { visited: /* @__PURE__ */ new Set(), lazy: false }) => {
  if (!connection.runs) {
    connection.runs = createRun(connection, context2);
  }
  const { runs } = connection;
  runs.override = value;
  console.log(`calculateRunValue_connectionOverride`, { connection });
  const allConnections = connection.nodeInstance.dataset.allNodeInstances.flatMap((x) => [
    ...x.inputs,
    ...x.outputs
  ]);
  const visited = /* @__PURE__ */ new Set();
  const updateDependents = (c) => {
    calculateRunValue_input(c, context2);
    const dependents = allConnections.filter(
      (x) => !visited.has(x) && x.runs?.dependencies.includes(c)
    );
    console.log(`updateDependents`, { c, dependents });
    dependents.forEach((d) => visited.add(d));
    dependents.forEach((d) => updateDependents(d));
  };
  updateDependents(connection);
  calculateRun_names(connection.nodeInstance.dataset);
  recordRun(connection.nodeInstance.dataset);
};
var calculateRun_names = (dataset) => {
  const contexts = /* @__PURE__ */ new Map();
  const global = {};
  dataset.allNodeInstances.forEach((x) => {
    const parent = x.parent ?? global;
    const context2 = contexts.get(parent) ?? contexts.set(parent, {
      visited: /* @__PURE__ */ new Set(),
      lazy: false
    }).get(parent);
    x.outputs.forEach((o) => {
      context2.visited.add(o);
      if (!o.runs) {
        o.runs = createRun(o, context2);
      }
      o.runs.nameInScope = getUniqueName(o, context2);
    });
  });
};
var getUniqueName = (connection, context2) => {
  let n = connection.name;
  while ([...context2.visited].some((x) => x !== connection && x.name === n)) {
    n = `${n}_${connection.nodeInstance.key}`;
  }
  return n;
};
var createRun = (connection, context2) => {
  const nameInScope = connection.name;
  return {
    nameInScope,
    override: void 0,
    value: void 0,
    dependencies: []
  };
};
var calculateRunValue_input = (input, context2) => {
  if (context2.visited.has(input)) {
    return input.runs;
  }
  context2.visited.add(input);
  if (input.runs?.override !== void 0) {
    input.runs.value = input.runs.override;
    return;
  }
  input.runs = createRun(input, context2);
  const inflowPipe = input.inflowPipe;
  if (!inflowPipe) {
    return;
  }
  const { source } = inflowPipe;
  if (source.kind === `data`) {
    input.runs = {
      ...input.runs,
      value: JSON.parse(source.json),
      dependencies: []
    };
    return;
  }
  if (source.kind === `input`) {
    input.runs = {
      ...input.runs,
      value: source.input.runs?.value,
      dependencies: [source.input]
    };
    return;
  }
  if (source.kind === `output`) {
    input.runs = {
      ...input.runs,
      value: source.output.runs?.value,
      dependencies: [source.output]
    };
    return;
  }
  if (source.kind === `operator-output`) {
    input.runs = {
      ...input.runs,
      ...calculateRunValue_operator(source.nodeInstance, context2)
    };
    return;
  }
  const _never = void 0;
};
var calculateRunValue_operator = (nodeInstance, context2) => {
  const calculateArgs_index = (index) => {
    const x = nodeInstance.inputs[index];
    if (x == null) {
      return {
        value: void 0,
        dependencies: [x]
      };
    }
    calculateRunValue_input(x, context2);
    return {
      value: x.runs?.value,
      dependencies: [x]
    };
  };
  const operator = nodeInstance.operator;
  const aResult = calculateArgs_index(0);
  const a = aResult.value;
  const dependencies = [...aResult.dependencies];
  if (operator === `&&`) {
    if (a) {
      const v = calculateArgs_index(1);
      return {
        value: v?.value,
        dependencies: [...dependencies, ...v.dependencies]
      };
    }
    return aResult;
  }
  if (operator === `||`) {
    if (!a) {
      const v = calculateArgs_index(1);
      return {
        value: v?.value,
        dependencies: [...dependencies, ...v.dependencies]
      };
    }
    return aResult;
  }
  if (operator === `conditional-ternary`) {
    if (a) {
      const v2 = calculateArgs_index(1);
      return {
        value: v2?.value,
        dependencies: [...dependencies, ...v2.dependencies]
      };
    }
    const v = calculateArgs_index(2);
    return {
      value: v?.value,
      dependencies: [...dependencies, ...v.dependencies]
    };
  }
  switch (operator) {
    case `=`:
      return aResult;
    case `declaration`:
      return aResult;
    case `!`:
      return { dependencies, value: !a };
    case `++`:
      return { dependencies, value: a + 1 };
    case `--`:
      return { dependencies, value: a - 1 };
  }
  const bResult = calculateArgs_index(1);
  const b = bResult.value;
  dependencies.push(...bResult.dependencies);
  switch (operator) {
    case `+`:
      return { dependencies, value: a + b };
    case `-`:
      return { dependencies, value: a - b };
    case `*`:
      return { dependencies, value: a * b };
    case `/`:
      return { dependencies, value: a / b };
    case `%`:
      return { dependencies, value: a % b };
    case `<`:
      return { dependencies, value: a < b };
    case `>`:
      return { dependencies, value: a > b };
    case `<=`:
      return { dependencies, value: a <= b };
    case `>=`:
      return { dependencies, value: a >= b };
    case `==`:
      return { dependencies, value: a === b };
    case `!=`:
      return { dependencies, value: a !== b };
  }
  const _never = void 0;
  return void 0;
};

// ../../packages/pipescript/src/ui/node-instance-view.tsx
var NodeInstancesView = ({
  nodeInstances,
  full = false,
  hideTitles = false
}) => {
  return <RunValueContext.Provider value={createRunValue()}>
    <View5 testID="NodeInstancesView:View" className="flex-row">{nodeInstances.map((x) => <React4.Fragment key={x.key}><NodeView nodeInstance={x} /></React4.Fragment>)}</View5>
    <RootComponentsView />
  </RunValueContext.Provider>;
};
var RootComponentsView = () => {
  const { Components } = useContext3(RunValueContext);
  const [rootComponents, setRootComponents] = useState4({});
  useEffect3(() => {
    Components.subscribe((x) => {
      console.log(`RootComponentsView: Components.subscribe`, { x });
      setRootComponents({ ...x });
    });
  }, []);
  return <View5 testID="RootComponentsView:View" className="flex-row">{[...Object.entries(rootComponents)].map(([k, V]) => <React4.Fragment key={k}><V /></React4.Fragment>)}</View5>;
};
var NodeView = ({ nodeInstance }) => {
  const [position, setPosition] = useState4({
    x: 0,
    y: 0,
    scale: 1
  });
  const moveNode = useStableCallback((value) => {
    setPosition(value);
    console.log(`NodeView`, { nodeInstance });
  });
  const workflow = nodeInstance.workflow;
  return <View5 className="p-1"><MoveableView
    position={{
      x: position.x,
      y: position.y,
      scale: position.scale
    }}
    onMove={moveNode}
    mouseButton={4 /* Middle */}
  ><View5 className="flex-col relative bg-slate-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded p-1">
    <Text6 className="text-yellow-400 self-center">{`${nodeInstance.workflow.name} #${nodeInstance.key}`}</Text6>
    <View5 className="flex-col flex-1">
      <View5 className="flex-col justify-start items-start">{workflow.inputs.map((input) => <React4.Fragment key={input.name}><NodeConnection
        variable={input}
        connection={nodeInstance.inputs.find(
          (x) => x.workflowInput === input
        )}
        hideOutput={nodeInstance.workflow.body.kind !== `nodes`}
      /></React4.Fragment>)}</View5>
      <View5 className="flex-1"><View5 className="flex-row">
        <View5 className="flex-1" />
        <View5 className="flex-row flex-wrap">
          {nodeInstance.children.length && <>{nodeInstance.children.map((x) => <React4.Fragment key={x.key}><NodeView nodeInstance={x} /></React4.Fragment>)}</>}
          {workflow.body.kind === `operator` && <><Text6 className="text-blue-600">{workflow.body.operator}</Text6></>}
        </View5>
        <View5 className="flex-1 justify-start items-end"><Text6 className="text-white text-[10px]">{"\u26CF"}</Text6></View5>
      </View5></View5>
      <View5 className="flex-col justify-end items-end">{workflow.outputs.map((output) => <React4.Fragment key={output.name}><NodeConnection
        variable={output}
        connection={nodeInstance.outputs.find(
          (x) => x.workflowOutput === output
        )}
        hideInput={nodeInstance.workflow.body.kind !== `nodes`}
      /></React4.Fragment>)}</View5>
    </View5>
    {workflow.body.kind === `nodes` && <View5 className="bg-gray-200 h-10"><NodeInstanceSheetView nodeInstance={nodeInstance} /></View5>}
  </View5></MoveableView></View5>;
};
var NodeInstanceSheetView = ({ nodeInstance }) => {
  const runValueContext = useContext3(RunValueContext);
  const [runs, setRuns] = useState4(void 0);
  useEffect3(() => {
    const sub = runValueContext.ValueChanged.subscribe((x) => {
      console.log(`NodeInstanceSheetView: changed`, { runs: nodeInstance.runs });
      setRuns([...nodeInstance.runs ?? []]);
    });
    setRuns([...nodeInstance.runs ?? []]);
    return () => {
      sub.unsubscribe();
    };
  }, []);
  console.log(`NodeInstanceSheetView: RENDER`, { runs: nodeInstance.runs });
  if (!runs) {
    return <View5><Text6>Empty</Text6></View5>;
  }
  const allHeaders = runs?.flatMap((r) => [
    ...r.inputs.map((x) => ({ name: x.name, mode: `input` })),
    ...r.inner.map((x) => ({ name: x.name, mode: `inner` })),
    ...r.outputs.map((x) => ({ name: x.name, mode: `output` }))
  ]) ?? [];
  const headers = [...new Map(allHeaders.map((x) => [x.name, x])).values()];
  return <SheetView
    data={{
      header: headers,
      rows: runs.map((r) => ({
        cells: headers.map(
          (h) => h.mode === `input` ? r.inputs.find((x) => x.name === h.name)?.value : h.mode === `inner` ? r.inner.find((x) => x.name === h.name)?.value : h.mode === `output` ? r.outputs.find((x) => x.name === h.name)?.value : void 0
        )
      }))
    }}
  />;
};
var getPipeConnectionKey = (connection, direction) => {
  return `${connection.key}:${direction}`;
};
var getPipeKey = (pipeSide, direction) => {
  if (pipeSide.kind === `input`) {
    return getPipeConnectionKey(pipeSide.input, direction);
  }
  if (pipeSide.kind === `output`) {
    return getPipeConnectionKey(pipeSide.output, direction);
  }
  if (pipeSide.kind === `data`) {
    return void 0;
  }
  if (pipeSide.kind === `operator-output`) {
    return void 0;
  }
  if (pipeSide.kind === `operator-input`) {
    return void 0;
  }
  return void 0;
};
var PipeValueView = ({
  pipeValue,
  side
}) => {
  const { source, destination } = pipeValue ?? {};
  if (!source || !destination) {
    return <></>;
  }
  const sourceId = getPipeKey(source, `out`);
  const destinationId = getPipeKey(destination, `in`);
  if (!sourceId || !destinationId) {
    return <></>;
  }
  return <PipeView sourceId={sourceId} destinationId={destinationId} side={side} />;
};
var NodeConnection = ({
  variable,
  connection,
  hideInput,
  hideOutput
}) => {
  return <View5 className="flex-column">
    <View5 className="flex-row justify-start items-center">
      <View5 className="flex-column">{!hideInput && connection && <React4.Fragment key={connection.key}><View5 className="flex-row justify-start items-center">
        <PipeEndpointView id={getPipeConnectionKey(connection, `in`)} />
        <PipeValueView pipeValue={connection.inflowPipe} side="inflow" />
      </View5></React4.Fragment>}</View5>
      <View5 className="pl-1" />
      <Text6
        className={`text-blue-300 ${variable.ignored ? `line-through opacity-50` : ``}`}
      >{`${variable.name}`}</Text6>
      {variable.type && <>
        <Text6 className="text-white">:</Text6>
        <Text6 className="pl-1 text-green-800">{`${getTypeName(
          variable.type
        )}`}</Text6>
      </>}
      <View5 className="pl-1" />
      <View5 className="flex-column">{!hideOutput && connection && <React4.Fragment key={connection.key}>
        <PipeEndpointView id={getPipeConnectionKey(connection, `out`)} />
        {connection.outflowPipes.map(
          (outflowPipe) => outflowPipe && <React4.Fragment key={outflowPipe.key}><PipeValueView pipeValue={outflowPipe} side="outflow" /></React4.Fragment>
        )}
      </React4.Fragment>}</View5>
    </View5>
    {connection && <>
      {connection.runs?.nameInScope && connection.runs?.nameInScope !== connection.name && <Text6 className="text-blue-300">{`${connection.runs.nameInScope}`}</Text6>}
      <NodeConnectionValue connection={connection} />
      {connection.inflowPipe?.pipe.kind === `data` && <View5 className="m-[1px] bg-purple-100 opacity-50"><Text6 className="px-1 min-w-[60px] text-purple-400">{connection.inflowPipe?.pipe.json}</Text6></View5>}
    </>}
  </View5>;
};
var createRunValue = () => ({
  ValueChanged: new Subject(),
  Components: new BehaviorSubject({})
});
var RunValueContext = createContext3(createRunValue());
var NodeConnectionValue = ({
  connection
}) => {
  const runValueContext = useContext3(RunValueContext);
  const [runValue, setRunValue] = useState4(connection.runs?.value);
  const [hasOverride, setHasOverride] = useState4(!!connection.runs?.override);
  useEffect3(() => {
    const sub = runValueContext.ValueChanged.subscribe(() => {
      console.log(`NodeConnectionValue: ValueChanged.subscribe`, {
        value: connection.runs?.value,
        connection
      });
      setRunValue(connection.runs?.value);
      setHasOverride(connection.runs?.override !== void 0);
    });
    return () => {
      sub.unsubscribe();
    };
  }, []);
  const changeValue = (value) => {
    calculateRunValue_connectionOverride(connection, value);
    runValueContext.ValueChanged.next();
  };
  return <><ValueEditor
    id={connection.key}
    value={runValue}
    hasOverride={hasOverride}
    onChange={changeValue}
  /></>;
};

// ../../packages/pipescript/src/ui/work-flow-view.tsx
import React5, { useState as useState5 } from "react";
import { View as View6, Text as Text7 } from "react-native";
var WorkFlowView = ({
  workflow,
  full = false,
  hideTitles = false
}) => {
  return <View6
    className={`flex-column relative bg-slate-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded
            `}
  >
    {!hideTitles && <Text7 className="text-yellow-400 self-center">{`${workflow.name}`}</Text7>}
    <View6 className="flex-row flex-1">
      <View6 className="flex-col justify-start items-start">{workflow.inputs.map((input) => <React5.Fragment key={input.name}><View6 className="p-1 flex-row justify-start items-center">
        <WorkflowInputName input={input} />
        <Text7 className="text-white">:</Text7>
        <Text7 className="pl-1 text-green-800">{`${getTypeName(
          input.type
        )}`}</Text7>
        <Text7 className="pl-1" />
        <View6 className=""><PipeEndpointView
          id={calculatePipeEndpointIdForWorkflow({
            workflowUri: workflow.workflowUri,
            direction: `in`,
            name: input.name
          })}
        /></View6>
        <Text7 className="pl-1" />
      </View6></React5.Fragment>)}</View6>
      <View6 className="flex-1"><View6 className="flex-col justify-center items-center">
        <View6 className="justify-center items-center"><Text7 className="text-white animate-bounce text-[8px] absolute top-2">{"\u26CF"}</Text7></View6>
        <View6 className="flex-row">
          {workflow.body.nodes?.map((n) => <React5.Fragment key={n.nodeId}><View6 className="p-2"><NodeView2 node={n} container={workflow} /></View6></React5.Fragment>)}
          {workflow.body.kind === `operator` && <><View6 className="p-2 flex-row items-center">
            <Text7 className="pl-1 text-blue-400">{workflow.body.operator}</Text7>
            <Text7 className="pl-1" />
            <View6 className="">{[
              calculatePipeEndpointIdForWorkflow({
                workflowUri: workflow.workflowUri,
                direction: `out`,
                name: `operator`
              })
            ].map((operatorEndpointId) => <React5.Fragment key={operatorEndpointId}>
              <PipeEndpointView id={operatorEndpointId} />
              {workflow.inputs.map((inPipe) => <React5.Fragment key={inPipe.name}><PipeView
                destinationId={operatorEndpointId}
                sourceId={calculatePipeEndpointIdForWorkflow(
                  {
                    workflowUri: workflow.workflowUri,
                    direction: `in`,
                    name: inPipe.name
                  }
                )}
              /></React5.Fragment>)}
            </React5.Fragment>)}</View6>
          </View6></>}
        </View6>
      </View6></View6>
      <View6 className="flex-col justify-end items-end">{workflow.outputs.map((output) => <React5.Fragment key={output.name}><View6 className="p-1 flex-row justify-end items-center">
        {output.pipe && <>{output.pipe.kind === `data` && <Text7 className="text-purple-400">{output.pipe.json}</Text7>}</>}
        <Text7 className="pr-1" />
        <View6 className="">
          <PipeEndpointView
            id={calculatePipeEndpointIdForWorkflow({
              workflowUri: workflow.workflowUri,
              direction: `out`,
              name: output.name
            })}
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
        </View6>
        <Text7 className="pr-1" />
        <Text7 className="text-blue-300">{`${output.name}`}</Text7>
        <Text7 className="text-white">:</Text7>
        <Text7 className="pl-1 text-green-800">{`${getTypeName(
          output.type
        )}`}</Text7>
      </View6></React5.Fragment>)}</View6>
    </View6>
    {!hideTitles && <Text7 className="text-yellow-400 self-center">{`${workflow.workflowUri}`}</Text7>}
    {
      /* {workflow.workflows?.map(w => (
          <React.Fragment key={w.name}>
              <View className='absolute left-0 top-0 scale-50'>
                  <WorkFlowView workflow={w} />
              </View>
          </React.Fragment>
      ))} */
    }
  </View6>;
};
var NodeView2 = ({ node, container }) => {
  const [position, setPosition] = useState5({
    x: node.layout?.position.x ?? 0,
    y: node.layout?.position.y ?? 0,
    scale: node.layout?.scale ?? 1
  });
  const moveNode = useStableCallback((value) => {
    setPosition(value);
    console.log(`NodeView`, { node, container });
  });
  const workflow = (() => {
    return container.workflows?.find((w) => w.workflowUri === node.workflowUri);
  })();
  return <MoveableView
    position={{
      x: position.x,
      y: position.y,
      scale: position.scale
    }}
    onMove={moveNode}
    mouseButton={1 /* Left */}
  ><View6
    className="flex-column bg-zinc-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded"
    style={{
      left: position.x,
      top: position.y
      // transform: `translate(${position.x}px, ${position.y}px)`,
    }}
  >
    <View6 className="flex-row justify-center">
      {workflow && <Text7 className="text-yellow-400 self-center">{workflow.name}</Text7>}
      <Text7 className="pl-2 text-yellow-400 self-center">
        {"#"}
        {node.nodeId}
      </Text7>
    </View6>
    {workflow && <View6 className="flex-row flex-1">
      <View6 className="flex-col justify-start items-start">{workflow.inputs.map((input) => <React5.Fragment key={input.name}><View6 className="p-1 flex-row justify-center items-center relative">
        {(() => {
          const inputPipe = node.inputPipes.find(
            (p) => p.name === input.name
          );
          if (!inputPipe) {
            return void 0;
          }
          return <>{inputPipe.kind === `data` && <Text7 className="ml-[-16px] mr-[16px] text-purple-400">{inputPipe.json}</Text7>}</>;
        })()}
        <View6 className="ml-[-8px] mr-[0px]">
          <PipeEndpointView
            id={calculatePipeEndpointIdForNode({
              nodeId: node.nodeId,
              direction: `in`,
              name: input.name
            })}
          />
          {calculatePipeEndpointIdForPipeSource({
            workflow: container,
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
        </View6>
        <Text7 className="pl-1" />
        <WorkflowInputName input={input} />
        {
          /* <Text className='text-white'>:</Text>
          <Text className='pl-1 text-green-800'>{`${getTypeName(
              input.type,
          )}`}</Text> */
        }
      </View6></React5.Fragment>)}</View6>
      <View6 className="flex-1"><WorkFlowView workflow={workflow} hideTitles /></View6>
      <View6 className="flex-col justify-end items-end">{workflow.outputs.map((output) => <React5.Fragment key={output.name}><View6 className="p-1 flex-row justify-center items-center relative">
        <Text7 className="text-blue-300">{`${output.name}`}</Text7>
        {
          /* <Text className='text-white'>:</Text>
          <Text className='pl-1 text-green-800'>{`${getTypeName(
              output.type,
          )}`}</Text> */
        }
        <Text7 className="pr-1" />
        <View6 className="ml-[0px] mr-[-8px]"><PipeEndpointView
          id={calculatePipeEndpointIdForNode({
            nodeId: node.nodeId,
            direction: `out`,
            name: output.name
          })}
        /></View6>
      </View6></React5.Fragment>)}</View6>
    </View6>}
    {
      /* <Text className='text-yellow-400 self-center'>{node.implementation.}</Text> */
    }
  </View6></MoveableView>;
};

// ../../packages/pipescript/src/analysis/load-data.ts
var loadRuntime = (workflowRaw) => {
  const workflow = workflowRaw;
  const getWorkflowsRecursive = (w) => {
    return [w, ...w.workflows?.flatMap((w2) => getWorkflowsRecursive(w2)) ?? []];
  };
  const allWorkflows = getWorkflowsRecursive(workflow);
  const allNodes = allWorkflows.flatMap((w) => w.body.kind === `nodes` ? w.body.nodes : []);
  const allPipes_workflowOutputs = allWorkflows.flatMap((w) => w.outputs.flatMap((o) => o.pipe)).filter((x) => x).map((x) => x);
  const allPipes_nodeInputs = allNodes.flatMap((n) => n.inputPipes).filter((x) => x).map((x) => x);
  const allPipes = [...allPipes_workflowOutputs, ...allPipes_nodeInputs];
  const dataset = {
    allNodeInstances: [],
    rootNodeInstances: []
  };
  const context2 = {
    allWorkflows,
    allWorkflowsMap: new Map(allWorkflows.map((x) => [x.workflowUri, x])),
    allNodes,
    allNodesMap: new Map(allNodes.map((x) => [x.nodeId, x])),
    allPipes,
    dataset,
    allNodeInstances: dataset.allNodeInstances,
    rootNodeInstances: dataset.rootNodeInstances
  };
  context2.rootNodeInstances.push(
    ...workflow.body.nodes?.map((node) => createNodeInstances(node, void 0, context2)) ?? []
  );
  context2.allNodeInstances.forEach((node) => {
    loadNodeConnections_inflows(node);
  });
  const allInflowPipes = context2.allNodeInstances.flatMap((x) => [...x.inputs.map((y) => y.inflowPipe), ...x.outputs.map((y) => y.inflowPipe)]).filter((x) => x).map((x) => x);
  context2.allNodeInstances.forEach((node) => {
    loadNodeConnections_outflows(node, allInflowPipes);
  });
  calculateRun(dataset);
  return {
    workflow,
    context: context2,
    dataset
  };
};
var createNodeInstances = (node, parent, context2) => {
  const workflow = context2.allWorkflowsMap.get(node.workflowUri);
  if (!workflow) {
    throw Error(`missing workflow ${node.workflowUri}`);
  }
  const instance = {
    dataset: context2.dataset,
    key: `${context2.allNodeInstances.length}`,
    node,
    workflow,
    inputs: [],
    outputs: [],
    parent,
    children: []
  };
  context2.allNodeInstances.push(instance);
  instance.inputs = workflow.inputs.map((workflowInput) => ({
    key: `${context2.allNodeInstances.length}:${workflowInput.name}:workflowInput`,
    nodeInstance: instance,
    kind: `workflow-input`,
    workflowInput,
    name: workflowInput.name,
    inflowPipe: void 0,
    outflowPipes: []
  }));
  instance.outputs = workflow.outputs.map((workflowOutput) => ({
    key: `${context2.allNodeInstances.length}:${workflowOutput.name}:workflowOutput`,
    nodeInstance: instance,
    kind: `workflow-output`,
    workflowOutput,
    name: workflowOutput.name,
    inflowPipe: void 0,
    outflowPipes: []
  }));
  instance.children = workflow.body.nodes?.map((n) => createNodeInstances(n, instance, context2)) ?? [];
  if (workflow.body.kind === `operator`) {
    instance.operator = workflow.body.operator;
  }
  return instance;
};
var loadNodeConnections_inflows = (nodeInstance) => {
  nodeInstance.inputs.forEach((input) => {
    const nodeInput = nodeInstance.node.inputPipes.find((x) => x.name === input.name);
    if (!nodeInput) {
      return;
    }
    const getInflowSource = () => {
      const pipeSource = nodeInput;
      if (pipeSource.kind === `data`) {
        return {
          kind: `data`,
          json: pipeSource.json
        };
      }
      if (pipeSource.kind === `workflow-operator`) {
        return {
          kind: `operator-output`,
          nodeInstance
        };
      }
      if (pipeSource.kind === `workflow-input`) {
        const nodeWorkflowInput = nodeInstance.inputs.find((x) => x.name === pipeSource.name);
        if (!nodeWorkflowInput) {
          console.warn(
            `loadNodeConnections: getInflowSource: Missing nodeWorkflowInput ${pipeSource.name}`
          );
          return void 0;
        }
        return {
          kind: `input`,
          input: nodeWorkflowInput
        };
      }
      if (pipeSource.kind === `node`) {
        const peerNodeOutput = nodeInstance.parent?.children.find((n2) => n2.node.nodeId === pipeSource.sourceNodeId)?.outputs.find((x) => x.name === pipeSource.sourceNodeOutputName);
        if (!peerNodeOutput) {
          console.warn(
            `loadNodeConnections: getInflowSource: Missing peerNodeOutput ${pipeSource.name}`,
            {
              pipeSource,
              childrenOutputs: nodeInstance.children.map(
                (x) => x.outputs.map((o) => ({
                  key: o.key,
                  name: o.name,
                  nodeId: o.nodeInstance.node.nodeId
                }))
              )
            }
          );
          return void 0;
        }
        return {
          kind: `output`,
          output: peerNodeOutput
        };
      }
      console.warn(
        `loadNodeConnections: unknown pipeSource ${pipeSource.kind}`
      );
      return void 0;
    };
    const source = getInflowSource();
    if (!source) {
      return;
    }
    input.inflowPipe = {
      key: `${input.key}:pipe`,
      pipe: nodeInput,
      source,
      destination: {
        kind: `input`,
        input
      }
    };
  });
  nodeInstance.outputs.forEach((output) => {
    const workflowOutput = nodeInstance.workflow.outputs.find((x) => x.name === output.name);
    const workflowOutputPipe = workflowOutput?.pipe;
    if (!workflowOutputPipe) {
      return;
    }
    const getInflowSource = () => {
      const pipeSource = workflowOutputPipe;
      const { name: pipeSourceName } = workflowOutput;
      if (pipeSource.kind === `data`) {
        return {
          kind: `data`,
          json: pipeSource.json
        };
      }
      if (pipeSource.kind === `workflow-operator`) {
        return {
          kind: `operator-output`,
          nodeInstance
        };
      }
      if (pipeSource.kind === `workflow-input`) {
        const nodeWorkflowInput = nodeInstance.inputs.find((x) => x.name === pipeSourceName);
        if (!nodeWorkflowInput) {
          console.warn(
            `loadNodeConnections: getInflowSource: Missing nodeWorkflowInput ${pipeSourceName}`
          );
          return void 0;
        }
        return {
          kind: `input`,
          input: nodeWorkflowInput
        };
      }
      if (pipeSource.kind === `node`) {
        const innerNodeOutput = nodeInstance.children.find((n2) => n2.node.nodeId === pipeSource.sourceNodeId)?.outputs.find((x) => x.name === pipeSourceName);
        if (!innerNodeOutput) {
          console.warn(
            `loadNodeConnections: getInflowSource: Missing peerNodeOutput ${pipeSourceName}`
          );
          return void 0;
        }
        return {
          kind: `output`,
          output: innerNodeOutput
        };
      }
      console.warn(
        `loadNodeConnections: unknown pipeSource ${pipeSource.kind}`
      );
      return void 0;
    };
    const source = getInflowSource();
    if (!source) {
      return;
    }
    output.inflowPipe = {
      key: `${output.key}:pipe`,
      pipe: workflowOutputPipe,
      source,
      destination: {
        kind: `output`,
        output
      }
    };
  });
};
var loadNodeConnections_outflows = (nodeInstance, allInflowPipes) => {
  nodeInstance.inputs.forEach((input) => {
    input.outflowPipes = allInflowPipes.filter(
      (x) => x.source.kind === `input` && x.source.input === input
    );
  });
  nodeInstance.outputs.forEach((output) => {
    output.outflowPipes = allInflowPipes.filter(
      (x) => x.source.kind === `output` && x.source.output === output
    );
  });
};

// ../../packages/pipescript/src/ui/work-canvas-view.tsx
var WorkCanvasView = ({ workflow }) => {
  const nodeInstancesDatasetRef = useRef4(loadRuntime(workflow).dataset);
  const nodeInstances = nodeInstancesDatasetRef.current.rootNodeInstances;
  const tabs = [`work-flow`, `node-instances`];
  const [tab, setTab] = useState6(`node-instances`);
  return <View7 className="bg-slate-900 w-full h-full overflow-hidden"><MoveableView
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
    HeaderComponent={useStableCallback(() => <View7 className="flex-row">{tabs.map((x) => <React6.Fragment key={x}><Pressable4 onPress={() => setTab(x)}><View7
      className={`p-1 m-1 border-solid border-[1px] border-gray-800 ${tab === x ? `` : `opacity-50`}`}
    ><Text8
      className={`text-gray-800 ${tab === x ? `` : `opacity-50`}`}
    >{x}</Text8></View7></Pressable4></React6.Fragment>)}</View7>)}
  ><PipeViewContextHost><View7 className="w-full h-full justify-center items-center">
    {tab === `work-flow` && <WorkFlowView workflow={workflow} full />}
    {tab === `node-instances` && <NodeInstancesView nodeInstances={nodeInstances} full />}
  </View7></PipeViewContextHost></MoveableView></View7>;
};
var PipeViewContextHost = ({ children }) => {
  const viewRef = useRef4(null);
  const hostRef = useRef4(new Subject());
  const context2 = useRef4(createPipeEndpointsRegistry());
  const [pipes, setPipes] = useState6(context2.current.pipes.value);
  useLayoutEffect2(() => {
    if (!viewRef.current) {
      return;
    }
    context2.current.hostView = viewRef.current;
    hostRef.current.next(viewRef.current);
    const sub = context2.current.pipes.subscribe((v) => {
      setPipes(v);
    });
    setPipes(pipes);
    return () => {
      sub.unsubscribe();
    };
  }, [!viewRef.current]);
  return <PipeEndpointsRegistryContext.Provider value={context2.current}><View7 ref={viewRef} className="w-full h-full"><MoveableContext.Consumer>{({ position: containerPosition }) => <MoveableContext.Provider
    value={{
      position: {
        x: 0,
        y: 0,
        scale: containerPosition.scale
      },
      wholeCanvas: true
    }}
  >
    <PipeViewHost />
    {children}
  </MoveableContext.Provider>}</MoveableContext.Consumer></View7></PipeEndpointsRegistryContext.Provider>;
};

// ../../packages/pipescript/index.ts
var exampleDeclarationWorkflow = ts_workflow_default;

// ../../packages/app/src/index.tsx
var App = () => {
  const workflow = exampleDeclarationWorkflow;
  return <WorkCanvasView workflow={workflow} />;
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
import { useState as useState7 } from "react";
import { Pressable as Pressable5, Text as Text9, View as View8 } from "react-native";

// ../../packages/cl/src/design/tailwind/theme.ts
var tailwindTheme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
};
export {
  App,
  tailwindTheme
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdGVzdHMvY29kZS8wMDAzLW9wZXJhdG9ycy8wNC50cy53b3JrZmxvdy5qc29uIiwgIi4uLy4uLy4uL3BhY2thZ2VzL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2sudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvd29yay1jYW52YXMtdmlldy50c3giLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNGdW5jdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9jcmVhdGVFcnJvckNsYXNzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvYXJyUmVtb3ZlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJzY3JpcHRpb24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL2NvbmZpZy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9ub29wLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9Ob3RpZmljYXRpb25GYWN0b3JpZXMudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvZXJyb3JDb250ZXh0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJzY3JpYmVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9waXBlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9PYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2xpZnQudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL1N1YmplY3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc1NjaGVkdWxlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9hcmdzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzQXJyYXlMaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzUHJvbWlzZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzQXN5bmNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zeW1ib2wvaXRlcmF0b3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9pbm5lckZyb20udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvZXhlY3V0ZVNjaGVkdWxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvb2JzZXJ2ZU9uLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc3Vic2NyaWJlT24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZU9ic2VydmFibGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXN5bmNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVkLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9tYXAudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvbWFwT25lT3JNYW55QXJncy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9hcmdzQXJnQXJyYXlPck9iamVjdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9jcmVhdGVPYmplY3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29ic2VydmFibGUvY29tYmluZUxhdGVzdC50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS9tb3ZlYWJsZS12aWV3LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS9ub2RlLWluc3RhbmNlLXZpZXcudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL3BpcGVzLnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS9zaGVldC50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvdmFsdWUtdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvd29yay1uYW1lcy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdXRpbHMvanNvbi50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy9hbmFseXNpcy9oYXNoLnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL2FuYWx5c2lzL2NhbGN1bGF0ZS1ydW4udHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvd29yay1mbG93LXZpZXcudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL2FuYWx5c2lzL2xvYWQtZGF0YS50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L2luZGV4LnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL2FwcC9zcmMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhckJhY2tncm91bmRDb2xvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJOZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhckhpZGRlbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJTdHlsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zdHlsZVRvQmFyU3R5bGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyVHJhbnNsdWNlbnQudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvY2wvc3JjL2luZGV4LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9jbC9zcmMvZGVzaWduL3RhaWx3aW5kL3RoZW1lLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG4gIFwibmFtZVwiOiBcIlwiLFxuICBcIndvcmtmbG93VXJpXCI6IFwiXCIsXG4gIFwiaW5wdXRzXCI6IFtdLFxuICBcIm91dHB1dHNcIjogW10sXG4gIFwiYm9keVwiOiB7XG4gICAgXCJraW5kXCI6IFwibm9kZXNcIixcbiAgICBcIm5vZGVzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHNcIixcbiAgICAgICAgXCJub2RlSWRcIjogXCJtYWluXCIsXG4gICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJ3b3JrZmxvd3NcIjogW1xuICAgIHtcbiAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzXCIsXG4gICAgICBcIm5hbWVcIjogXCJmaWxlLnRzXCIsXG4gICAgICBcImlucHV0c1wiOiBbXSxcbiAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6MlwiLFxuICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwid29ya2Zsb3dzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2EtZGVjbGFyYXRpb25cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzL2EtZGVjbGFyYXRpb25cIixcbiAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcImRlY2xhcmF0aW9uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy8qXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy8qXCIsXG4gICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCIqXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy8tXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy8tXCIsXG4gICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCItXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy8qXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy8qXCIsXG4gICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCIqXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy8rXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy8rXCIsXG4gICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCIrXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy8rXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy8rXCIsXG4gICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCIrXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9iLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy9iLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCJkZWNsYXJhdGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgXCJraW5kXCI6IFwibm9kZXNcIixcbiAgICAgICAgXCJub2Rlc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzOjFcIixcbiAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2EtZGVjbGFyYXRpb25cIixcbiAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiZGF0YVwiLFxuICAgICAgICAgICAgICAgIFwianNvblwiOiBcIjQyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzOjNcIixcbiAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzLypcIixcbiAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czoxXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImFcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgXCJqc29uXCI6IFwiM1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czo0XCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy8tXCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICBcImpzb25cIjogXCIyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czozXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzOjVcIixcbiAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzLypcIixcbiAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czoxXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImFcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjRcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwidmFsdWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6NlwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvK1wiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjFcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6NVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czo3XCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy8rXCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6NlwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICBcImpzb25cIjogXCI3XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzOjJcIixcbiAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2ItZGVjbGFyYXRpb25cIixcbiAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czo3XCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXVxufSIsICJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbi8qKiBFbnN1cmUgdGhlIGl0ZW0gaXMgYWx3YXlzIHRoZSBsYXN0IHJlbmRlcmVkIHZhbHVlICovXG5leHBvcnQgY29uc3QgdXNlU3RhYmxlID0gPFQ+KHN0YWJsZTogVCkgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihzdGFibGUpO1xuICAgIHJlZi5jdXJyZW50ID0gc3RhYmxlO1xuICAgIHJldHVybiByZWY7XG59O1xuXG4vKiogRW5zdXJlIHRoZSBjYWxsYmFjayBpcyBhbHdheXMgdGhlIGxhc3QgcmVuZGVyZWQgY2FsbGJhY2ssIHNvIGl0IGhhcyByZWZlcmVuY2UgdG8gdGhlIGxhc3Qgc3RhdGVcbiAqXG4gKiBObyBuZWVkIGZvciBkZXBlbmRlbmNpZXMsIHRoaXMgd2lsbCBzaW1wbHkgaGF2ZSBhY2Nlc3MgdG8gdGhlIHZhbHVlcyB0aGF0IGV4aXN0ZWQgaW4gdGhlIHJlbmRlclxuICogd2hlbiBpdCB3YXMgY3JlYXRlZCBkdXJpbmcgdGhlIGxhc3QgcmVuZGVyLlxuICovXG5leHBvcnQgY29uc3QgdXNlU3RhYmxlQ2FsbGJhY2sgPSA8VEFyZ3MgZXh0ZW5kcyB1bmtub3duW10sIFRSZXR1cm4+KFxuICAgIHN0YWJsZTogKC4uLmFyZ3M6IFRBcmdzKSA9PiBUUmV0dXJuLFxuKSA9PiB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YWJsZSk7XG4gICAgcmVmLmN1cnJlbnQgPSBzdGFibGU7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB1c2VSZWYoKC4uLmFyZ3M6IFRBcmdzKSA9PiByZWYuY3VycmVudCguLi5hcmdzKSk7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmN1cnJlbnQ7XG59O1xuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFByZXNzYWJsZSwgUG9pbnRlckV2ZW50IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IFN1YmplY3QsIGRlbGF5IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1vdXNlQnV0dG9uLCBNb3ZlYWJsZUNvbnRleHQsIE1vdmVhYmxlVmlldyB9IGZyb20gJy4vbW92ZWFibGUtdmlldyc7XG5pbXBvcnQgeyBOb2RlSW5zdGFuY2VzVmlldyB9IGZyb20gJy4vbm9kZS1pbnN0YW5jZS12aWV3JztcbmltcG9ydCB7IFBpcGVFbmRwb2ludHNSZWdpc3RyeUNvbnRleHQsIFBpcGVWaWV3SG9zdCwgY3JlYXRlUGlwZUVuZHBvaW50c1JlZ2lzdHJ5IH0gZnJvbSAnLi9waXBlcyc7XG5pbXBvcnQgeyBXb3JrRmxvd1ZpZXcgfSBmcm9tICcuL3dvcmstZmxvdy12aWV3JztcbmltcG9ydCB7IGxvYWRSdW50aW1lIH0gZnJvbSAnLi4vYW5hbHlzaXMvbG9hZC1kYXRhJztcbmltcG9ydCB7IFBpcGVzY3JpcHRXb3JrZmxvdyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IFdvcmtDYW52YXNWaWV3ID0gKHsgd29ya2Zsb3cgfTogeyB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93IH0pID0+IHtcbiAgICBjb25zdCBub2RlSW5zdGFuY2VzRGF0YXNldFJlZiA9IHVzZVJlZihsb2FkUnVudGltZSh3b3JrZmxvdykuZGF0YXNldCk7XG4gICAgY29uc3Qgbm9kZUluc3RhbmNlcyA9IG5vZGVJbnN0YW5jZXNEYXRhc2V0UmVmLmN1cnJlbnQucm9vdE5vZGVJbnN0YW5jZXM7XG5cbiAgICBjb25zdCB0YWJzID0gW2B3b3JrLWZsb3dgLCBgbm9kZS1pbnN0YW5jZXNgXSBhcyBjb25zdDtcbiAgICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoYG5vZGUtaW5zdGFuY2VzYCBhcyAodHlwZW9mIHRhYnMpW251bWJlcl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy1zbGF0ZS05MDAgdy1mdWxsIGgtZnVsbCBvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgICAgICAgPE1vdmVhYmxlVmlld1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25Nb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbW91c2VCdXR0b249e01vdXNlQnV0dG9uLk1pZGRsZX1cbiAgICAgICAgICAgICAgICBlbmFibGVTY2FsaW5nXG4gICAgICAgICAgICAgICAgd2hvbGVDYW52YXNcbiAgICAgICAgICAgICAgICBvdXRlckNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCdcbiAgICAgICAgICAgICAgICBpbm5lckNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCdcbiAgICAgICAgICAgICAgICBIZWFkZXJDb21wb25lbnQ9e3VzZVN0YWJsZUNhbGxiYWNrKCgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFicy5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVzc2FibGUgb25QcmVzcz17KCkgPT4gc2V0VGFiKHgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0xIG0tMSBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIGJvcmRlci1ncmF5LTgwMCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIgPT09IHggPyBgYCA6IGBvcGFjaXR5LTUwYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtZ3JheS04MDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYiA9PT0geCA/IGBgIDogYG9wYWNpdHktNTBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGlwZVZpZXdDb250ZXh0SG9zdD5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFiID09PSBgd29yay1mbG93YCAmJiA8V29ya0Zsb3dWaWV3IHdvcmtmbG93PXt3b3JrZmxvd30gZnVsbCAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWIgPT09IGBub2RlLWluc3RhbmNlc2AgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlSW5zdGFuY2VzVmlldyBub2RlSW5zdGFuY2VzPXtub2RlSW5zdGFuY2VzfSBmdWxsIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9QaXBlVmlld0NvbnRleHRIb3N0PlxuICAgICAgICAgICAgPC9Nb3ZlYWJsZVZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuY29uc3QgUGlwZVZpZXdDb250ZXh0SG9zdCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IEpTWC5FbGVtZW50IH0pID0+IHtcbiAgICBjb25zdCB2aWV3UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IFZpZXcpO1xuICAgIGNvbnN0IGhvc3RSZWYgPSB1c2VSZWYobmV3IFN1YmplY3Q8Vmlldz4oKSk7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZVJlZihjcmVhdGVQaXBlRW5kcG9pbnRzUmVnaXN0cnkoKSk7XG5cbiAgICBjb25zdCBbcGlwZXMsIHNldFBpcGVzXSA9IHVzZVN0YXRlKGNvbnRleHQuY3VycmVudC5waXBlcy52YWx1ZSk7XG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXZpZXdSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuY3VycmVudC5ob3N0VmlldyA9IHZpZXdSZWYuY3VycmVudDtcbiAgICAgICAgaG9zdFJlZi5jdXJyZW50Lm5leHQodmlld1JlZi5jdXJyZW50KTtcblxuICAgICAgICBjb25zdCBzdWIgPSBjb250ZXh0LmN1cnJlbnQucGlwZXMuc3Vic2NyaWJlKHYgPT4ge1xuICAgICAgICAgICAgc2V0UGlwZXModik7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQaXBlcyhwaXBlcyk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbIXZpZXdSZWYuY3VycmVudF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBpcGVFbmRwb2ludHNSZWdpc3RyeUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHQuY3VycmVudH0+XG4gICAgICAgICAgICA8VmlldyByZWY9e3ZpZXdSZWZ9IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCc+XG4gICAgICAgICAgICAgICAgPE1vdmVhYmxlQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgICAgICAgICAgeyh7IHBvc2l0aW9uOiBjb250YWluZXJQb3NpdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW92ZWFibGVDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IGNvbnRhaW5lclBvc2l0aW9uLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG9sZUNhbnZhczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmlld0hvc3QgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vdmVhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L01vdmVhYmxlQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9QaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuIiwgIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2U7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChlbnYuc3RhY2subGVuZ3RoKSB7XG4gICAgICB2YXIgcmVjID0gZW52LnN0YWNrLnBvcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlYy5kaXNwb3NlICYmIHJlYy5kaXNwb3NlLmNhbGwocmVjLnZhbHVlKTtcbiAgICAgICAgaWYgKHJlYy5hc3luYykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbn07XG4iLCAiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZTogYW55KTogdmFsdWUgaXMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuIiwgIi8qKlxuICogVXNlZCB0byBjcmVhdGUgRXJyb3Igc3ViY2xhc3NlcyB1bnRpbCB0aGUgY29tbXVuaXR5IG1vdmVzIGF3YXkgZnJvbSBFUzUuXG4gKlxuICogVGhpcyBpcyBiZWNhdXNlIGNvbXBpbGluZyBmcm9tIFR5cGVTY3JpcHQgZG93biB0byBFUzUgaGFzIGlzc3VlcyB3aXRoIHN1YmNsYXNzaW5nIEVycm9yc1xuICogYXMgd2VsbCBhcyBvdGhlciBidWlsdC1pbiB0eXBlczogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMjEyM1xuICpcbiAqIEBwYXJhbSBjcmVhdGVJbXBsIEEgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGFjdHVhbCBjb25zdHJ1Y3RvciBpbXBsZW1lbnRhdGlvbi4gVGhlIHJldHVybmVkXG4gKiBmdW5jdGlvbiBzaG91bGQgYmUgYSBuYW1lZCBmdW5jdGlvbiB0aGF0IGNhbGxzIGBfc3VwZXJgIGludGVybmFsbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFcnJvckNsYXNzPFQ+KGNyZWF0ZUltcGw6IChfc3VwZXI6IGFueSkgPT4gYW55KTogVCB7XG4gIGNvbnN0IF9zdXBlciA9IChpbnN0YW5jZTogYW55KSA9PiB7XG4gICAgRXJyb3IuY2FsbChpbnN0YW5jZSk7XG4gICAgaW5zdGFuY2Uuc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgfTtcblxuICBjb25zdCBjdG9yRnVuYyA9IGNyZWF0ZUltcGwoX3N1cGVyKTtcbiAgY3RvckZ1bmMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICBjdG9yRnVuYy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yRnVuYztcbiAgcmV0dXJuIGN0b3JGdW5jO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUVycm9yQ2xhc3MgfSBmcm9tICcuL2NyZWF0ZUVycm9yQ2xhc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVuc3Vic2NyaXB0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHJlYWRvbmx5IGVycm9yczogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5zdWJzY3JpcHRpb25FcnJvckN0b3Ige1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLiBEbyBub3QgY29uc3RydWN0IGVycm9yIGluc3RhbmNlcy5cbiAgICogQ2Fubm90IGJlIHRhZ2dlZCBhcyBpbnRlcm5hbDogaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlWC9yeGpzL2lzc3Vlcy82MjY5XG4gICAqL1xuICBuZXcgKGVycm9yczogYW55W10pOiBVbnN1YnNjcmlwdGlvbkVycm9yO1xufVxuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIG9uZSBvciBtb3JlIGVycm9ycyBoYXZlIG9jY3VycmVkIGR1cmluZyB0aGVcbiAqIGB1bnN1YnNjcmliZWAgb2YgYSB7QGxpbmsgU3Vic2NyaXB0aW9ufS5cbiAqL1xuZXhwb3J0IGNvbnN0IFVuc3Vic2NyaXB0aW9uRXJyb3I6IFVuc3Vic2NyaXB0aW9uRXJyb3JDdG9yID0gY3JlYXRlRXJyb3JDbGFzcyhcbiAgKF9zdXBlcikgPT5cbiAgICBmdW5jdGlvbiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbCh0aGlzOiBhbnksIGVycm9yczogKEVycm9yIHwgc3RyaW5nKVtdKSB7XG4gICAgICBfc3VwZXIodGhpcyk7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvcnNcbiAgICAgICAgPyBgJHtlcnJvcnMubGVuZ3RofSBlcnJvcnMgb2NjdXJyZWQgZHVyaW5nIHVuc3Vic2NyaXB0aW9uOlxuJHtlcnJvcnMubWFwKChlcnIsIGkpID0+IGAke2kgKyAxfSkgJHtlcnIudG9TdHJpbmcoKX1gKS5qb2luKCdcXG4gICcpfWBcbiAgICAgICAgOiAnJztcbiAgICAgIHRoaXMubmFtZSA9ICdVbnN1YnNjcmlwdGlvbkVycm9yJztcbiAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH1cbik7XG4iLCAiLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhbiBhcnJheSwgbXV0YXRpbmcgaXQuXG4gKiBAcGFyYW0gYXJyIFRoZSBhcnJheSB0byByZW1vdmUgdGhlIGl0ZW0gZnJvbVxuICogQHBhcmFtIGl0ZW0gVGhlIGl0ZW0gdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJSZW1vdmU8VD4oYXJyOiBUW10gfCB1bmRlZmluZWQgfCBudWxsLCBpdGVtOiBUKSB7XG4gIGlmIChhcnIpIHtcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIDAgPD0gaW5kZXggJiYgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgVW5zdWJzY3JpcHRpb25FcnJvciB9IGZyb20gJy4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkxpa2UsIFRlYXJkb3duTG9naWMsIFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuL3V0aWwvYXJyUmVtb3ZlJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZGlzcG9zYWJsZSByZXNvdXJjZSwgc3VjaCBhcyB0aGUgZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUuIEFcbiAqIFN1YnNjcmlwdGlvbiBoYXMgb25lIGltcG9ydGFudCBtZXRob2QsIGB1bnN1YnNjcmliZWAsIHRoYXQgdGFrZXMgbm8gYXJndW1lbnRcbiAqIGFuZCBqdXN0IGRpc3Bvc2VzIHRoZSByZXNvdXJjZSBoZWxkIGJ5IHRoZSBzdWJzY3JpcHRpb24uXG4gKlxuICogQWRkaXRpb25hbGx5LCBzdWJzY3JpcHRpb25zIG1heSBiZSBncm91cGVkIHRvZ2V0aGVyIHRocm91Z2ggdGhlIGBhZGQoKWBcbiAqIG1ldGhvZCwgd2hpY2ggd2lsbCBhdHRhY2ggYSBjaGlsZCBTdWJzY3JpcHRpb24gdG8gdGhlIGN1cnJlbnQgU3Vic2NyaXB0aW9uLlxuICogV2hlbiBhIFN1YnNjcmlwdGlvbiBpcyB1bnN1YnNjcmliZWQsIGFsbCBpdHMgY2hpbGRyZW4gKGFuZCBpdHMgZ3JhbmRjaGlsZHJlbilcbiAqIHdpbGwgYmUgdW5zdWJzY3JpYmVkIGFzIHdlbGwuXG4gKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uIGltcGxlbWVudHMgU3Vic2NyaXB0aW9uTGlrZSB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBwdWJsaWMgc3RhdGljIEVNUFRZID0gKCgpID0+IHtcbiAgICBjb25zdCBlbXB0eSA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBlbXB0eS5jbG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiBlbXB0eTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogQSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhpcyBTdWJzY3JpcHRpb24gaGFzIGFscmVhZHkgYmVlbiB1bnN1YnNjcmliZWQuXG4gICAqL1xuICBwdWJsaWMgY2xvc2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcGFyZW50YWdlOiBTdWJzY3JpcHRpb25bXSB8IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiByZWdpc3RlcmVkIGZpbmFsaXplcnMgdG8gZXhlY3V0ZSB1cG9uIHVuc3Vic2NyaXB0aW9uLiBBZGRpbmcgYW5kIHJlbW92aW5nIGZyb20gdGhpc1xuICAgKiBsaXN0IG9jY3VycyBpbiB0aGUge0BsaW5rICNhZGR9IGFuZCB7QGxpbmsgI3JlbW92ZX0gbWV0aG9kcy5cbiAgICovXG4gIHByaXZhdGUgX2ZpbmFsaXplcnM6IEV4Y2x1ZGU8VGVhcmRvd25Mb2dpYywgdm9pZD5bXSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gaW5pdGlhbFRlYXJkb3duIEEgZnVuY3Rpb24gZXhlY3V0ZWQgZmlyc3QgYXMgcGFydCBvZiB0aGUgZmluYWxpemF0aW9uXG4gICAqIHByb2Nlc3MgdGhhdCBpcyBraWNrZWQgb2ZmIHdoZW4ge0BsaW5rICN1bnN1YnNjcmliZX0gaXMgY2FsbGVkLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbml0aWFsVGVhcmRvd24/OiAoKSA9PiB2b2lkKSB7fVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlcyB0aGUgcmVzb3VyY2VzIGhlbGQgYnkgdGhlIHN1YnNjcmlwdGlvbi4gTWF5LCBmb3IgaW5zdGFuY2UsIGNhbmNlbFxuICAgKiBhbiBvbmdvaW5nIE9ic2VydmFibGUgZXhlY3V0aW9uIG9yIGNhbmNlbCBhbnkgb3RoZXIgdHlwZSBvZiB3b3JrIHRoYXRcbiAgICogc3RhcnRlZCB3aGVuIHRoZSBTdWJzY3JpcHRpb24gd2FzIGNyZWF0ZWQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB1bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBsZXQgZXJyb3JzOiBhbnlbXSB8IHVuZGVmaW5lZDtcblxuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcblxuICAgICAgLy8gUmVtb3ZlIHRoaXMgZnJvbSBpdCdzIHBhcmVudHMuXG4gICAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgICBpZiAoX3BhcmVudGFnZSkge1xuICAgICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgICAgIGZvciAoY29uc3QgcGFyZW50IG9mIF9wYXJlbnRhZ2UpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9wYXJlbnRhZ2UucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgaW5pdGlhbFRlYXJkb3duOiBpbml0aWFsRmluYWxpemVyIH0gPSB0aGlzO1xuICAgICAgaWYgKGlzRnVuY3Rpb24oaW5pdGlhbEZpbmFsaXplcikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpbml0aWFsRmluYWxpemVyKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBlcnJvcnMgPSBlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvciA/IGUuZXJyb3JzIDogW2VdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgX2ZpbmFsaXplcnMgfSA9IHRoaXM7XG4gICAgICBpZiAoX2ZpbmFsaXplcnMpIHtcbiAgICAgICAgdGhpcy5fZmluYWxpemVycyA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgZmluYWxpemVyIG9mIF9maW5hbGl6ZXJzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGV4ZWNGaW5hbGl6ZXIoZmluYWxpemVyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyA/PyBbXTtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVyci5lcnJvcnNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZmluYWxpemVyIHRvIHRoaXMgc3Vic2NyaXB0aW9uLCBzbyB0aGF0IGZpbmFsaXphdGlvbiB3aWxsIGJlIHVuc3Vic2NyaWJlZC9jYWxsZWRcbiAgICogd2hlbiB0aGlzIHN1YnNjcmlwdGlvbiBpcyB1bnN1YnNjcmliZWQuIElmIHRoaXMgc3Vic2NyaXB0aW9uIGlzIGFscmVhZHkge0BsaW5rICNjbG9zZWR9LFxuICAgKiBiZWNhdXNlIGl0IGhhcyBhbHJlYWR5IGJlZW4gdW5zdWJzY3JpYmVkLCB0aGVuIHdoYXRldmVyIGZpbmFsaXplciBpcyBwYXNzZWQgdG8gaXRcbiAgICogd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGV4ZWN1dGVkICh1bmxlc3MgdGhlIGZpbmFsaXplciBpdHNlbGYgaXMgYWxzbyBhIGNsb3NlZCBzdWJzY3JpcHRpb24pLlxuICAgKlxuICAgKiBDbG9zZWQgU3Vic2NyaXB0aW9ucyBjYW5ub3QgYmUgYWRkZWQgYXMgZmluYWxpemVycyB0byBhbnkgc3Vic2NyaXB0aW9uLiBBZGRpbmcgYSBjbG9zZWRcbiAgICogc3Vic2NyaXB0aW9uIHRvIGEgYW55IHN1YnNjcmlwdGlvbiB3aWxsIHJlc3VsdCBpbiBubyBvcGVyYXRpb24uIChBIG5vb3ApLlxuICAgKlxuICAgKiBBZGRpbmcgYSBzdWJzY3JpcHRpb24gdG8gaXRzZWxmLCBvciBhZGRpbmcgYG51bGxgIG9yIGB1bmRlZmluZWRgIHdpbGwgbm90IHBlcmZvcm0gYW55XG4gICAqIG9wZXJhdGlvbiBhdCBhbGwuIChBIG5vb3ApLlxuICAgKlxuICAgKiBgU3Vic2NyaXB0aW9uYCBpbnN0YW5jZXMgdGhhdCBhcmUgYWRkZWQgdG8gdGhpcyBpbnN0YW5jZSB3aWxsIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZW1zZWx2ZXNcbiAgICogaWYgdGhleSBhcmUgdW5zdWJzY3JpYmVkLiBGdW5jdGlvbnMgYW5kIHtAbGluayBVbnN1YnNjcmliYWJsZX0gb2JqZWN0cyB0aGF0IHlvdSB3aXNoIHRvIHJlbW92ZVxuICAgKiB3aWxsIG5lZWQgdG8gYmUgcmVtb3ZlZCBtYW51YWxseSB3aXRoIHtAbGluayAjcmVtb3ZlfVxuICAgKlxuICAgKiBAcGFyYW0gdGVhcmRvd24gVGhlIGZpbmFsaXphdGlvbiBsb2dpYyB0byBhZGQgdG8gdGhpcyBzdWJzY3JpcHRpb24uXG4gICAqL1xuICBhZGQodGVhcmRvd246IFRlYXJkb3duTG9naWMpOiB2b2lkIHtcbiAgICAvLyBPbmx5IGFkZCB0aGUgZmluYWxpemVyIGlmIGl0J3Mgbm90IHVuZGVmaW5lZFxuICAgIC8vIGFuZCBkb24ndCBhZGQgYSBzdWJzY3JpcHRpb24gdG8gaXRzZWxmLlxuICAgIGlmICh0ZWFyZG93biAmJiB0ZWFyZG93biAhPT0gdGhpcykge1xuICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgIC8vIElmIHRoaXMgc3Vic2NyaXB0aW9uIGlzIGFscmVhZHkgY2xvc2VkLFxuICAgICAgICAvLyBleGVjdXRlIHdoYXRldmVyIGZpbmFsaXplciBpcyBoYW5kZWQgdG8gaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgZXhlY0ZpbmFsaXplcih0ZWFyZG93bik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAvLyBXZSBkb24ndCBhZGQgY2xvc2VkIHN1YnNjcmlwdGlvbnMsIGFuZCB3ZSBkb24ndCBhZGQgdGhlIHNhbWUgc3Vic2NyaXB0aW9uXG4gICAgICAgICAgLy8gdHdpY2UuIFN1YnNjcmlwdGlvbiB1bnN1YnNjcmliZSBpcyBpZGVtcG90ZW50LlxuICAgICAgICAgIGlmICh0ZWFyZG93bi5jbG9zZWQgfHwgdGVhcmRvd24uX2hhc1BhcmVudCh0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZWFyZG93bi5fYWRkUGFyZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgICh0aGlzLl9maW5hbGl6ZXJzID0gdGhpcy5fZmluYWxpemVycyA/PyBbXSkucHVzaCh0ZWFyZG93bik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgYSB0aGlzIHN1YnNjcmlwdGlvbiBhbHJlYWR5IGhhcyBhIHBhcnRpY3VsYXIgcGFyZW50LlxuICAgKiBUaGlzIHdpbGwgc2lnbmFsIHRoYXQgdGhpcyBzdWJzY3JpcHRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgcGFyZW50IGluIHF1ZXN0aW9uLlxuICAgKiBAcGFyYW0gcGFyZW50IHRoZSBwYXJlbnQgdG8gY2hlY2sgZm9yXG4gICAqL1xuICBwcml2YXRlIF9oYXNQYXJlbnQocGFyZW50OiBTdWJzY3JpcHRpb24pIHtcbiAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgcmV0dXJuIF9wYXJlbnRhZ2UgPT09IHBhcmVudCB8fCAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSAmJiBfcGFyZW50YWdlLmluY2x1ZGVzKHBhcmVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwYXJlbnQgdG8gdGhpcyBzdWJzY3JpcHRpb24gc28gaXQgY2FuIGJlIHJlbW92ZWQgZnJvbSB0aGUgcGFyZW50IGlmIGl0XG4gICAqIHVuc3Vic2NyaWJlcyBvbiBpdCdzIG93bi5cbiAgICpcbiAgICogTk9URTogVEhJUyBBU1NVTUVTIFRIQVQge0BsaW5rIF9oYXNQYXJlbnR9IEhBUyBBTFJFQURZIEJFRU4gQ0hFQ0tFRC5cbiAgICogQHBhcmFtIHBhcmVudCBUaGUgcGFyZW50IHN1YnNjcmlwdGlvbiB0byBhZGRcbiAgICovXG4gIHByaXZhdGUgX2FkZFBhcmVudChwYXJlbnQ6IFN1YnNjcmlwdGlvbikge1xuICAgIGNvbnN0IHsgX3BhcmVudGFnZSB9ID0gdGhpcztcbiAgICB0aGlzLl9wYXJlbnRhZ2UgPSBBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpID8gKF9wYXJlbnRhZ2UucHVzaChwYXJlbnQpLCBfcGFyZW50YWdlKSA6IF9wYXJlbnRhZ2UgPyBbX3BhcmVudGFnZSwgcGFyZW50XSA6IHBhcmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gYSBjaGlsZCB3aGVuIGl0IGlzIHJlbW92ZWQgdmlhIHtAbGluayAjcmVtb3ZlfS5cbiAgICogQHBhcmFtIHBhcmVudCBUaGUgcGFyZW50IHRvIHJlbW92ZVxuICAgKi9cbiAgcHJpdmF0ZSBfcmVtb3ZlUGFyZW50KHBhcmVudDogU3Vic2NyaXB0aW9uKSB7XG4gICAgY29uc3QgeyBfcGFyZW50YWdlIH0gPSB0aGlzO1xuICAgIGlmIChfcGFyZW50YWdlID09PSBwYXJlbnQpIHtcbiAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICBhcnJSZW1vdmUoX3BhcmVudGFnZSwgcGFyZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGZpbmFsaXplciBmcm9tIHRoaXMgc3Vic2NyaXB0aW9uIHRoYXQgd2FzIHByZXZpb3VzbHkgYWRkZWQgd2l0aCB0aGUge0BsaW5rICNhZGR9IG1ldGhvZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGBTdWJzY3JpcHRpb25gIGluc3RhbmNlcywgd2hlbiB1bnN1YnNjcmliZWQsIHdpbGwgYXV0b21hdGljYWxseSByZW1vdmUgdGhlbXNlbHZlc1xuICAgKiBmcm9tIGV2ZXJ5IG90aGVyIGBTdWJzY3JpcHRpb25gIHRoZXkgaGF2ZSBiZWVuIGFkZGVkIHRvLiBUaGlzIG1lYW5zIHRoYXQgdXNpbmcgdGhlIGByZW1vdmVgIG1ldGhvZFxuICAgKiBpcyBub3QgYSBjb21tb24gdGhpbmcgYW5kIHNob3VsZCBiZSB1c2VkIHRob3VnaHRmdWxseS5cbiAgICpcbiAgICogSWYgeW91IGFkZCB0aGUgc2FtZSBmaW5hbGl6ZXIgaW5zdGFuY2Ugb2YgYSBmdW5jdGlvbiBvciBhbiB1bnN1YnNjcmliYWJsZSBvYmplY3QgdG8gYSBgU3Vic2NyaXB0aW9uYCBpbnN0YW5jZVxuICAgKiBtb3JlIHRoYW4gb25jZSwgeW91IHdpbGwgbmVlZCB0byBjYWxsIGByZW1vdmVgIHRoZSBzYW1lIG51bWJlciBvZiB0aW1lcyB0byByZW1vdmUgYWxsIGluc3RhbmNlcy5cbiAgICpcbiAgICogQWxsIGZpbmFsaXplciBpbnN0YW5jZXMgYXJlIHJlbW92ZWQgdG8gZnJlZSB1cCBtZW1vcnkgdXBvbiB1bnN1YnNjcmlwdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHRlYXJkb3duIFRoZSBmaW5hbGl6ZXIgdG8gcmVtb3ZlIGZyb20gdGhpcyBzdWJzY3JpcHRpb25cbiAgICovXG4gIHJlbW92ZSh0ZWFyZG93bjogRXhjbHVkZTxUZWFyZG93bkxvZ2ljLCB2b2lkPik6IHZvaWQge1xuICAgIGNvbnN0IHsgX2ZpbmFsaXplcnMgfSA9IHRoaXM7XG4gICAgX2ZpbmFsaXplcnMgJiYgYXJyUmVtb3ZlKF9maW5hbGl6ZXJzLCB0ZWFyZG93bik7XG5cbiAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRlYXJkb3duLl9yZW1vdmVQYXJlbnQodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVUJTQ1JJUFRJT04gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N1YnNjcmlwdGlvbih2YWx1ZTogYW55KTogdmFsdWUgaXMgU3Vic2NyaXB0aW9uIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbiB8fFxuICAgICh2YWx1ZSAmJiAnY2xvc2VkJyBpbiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnJlbW92ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS5hZGQpICYmIGlzRnVuY3Rpb24odmFsdWUudW5zdWJzY3JpYmUpKVxuICApO1xufVxuXG5mdW5jdGlvbiBleGVjRmluYWxpemVyKGZpbmFsaXplcjogVW5zdWJzY3JpYmFibGUgfCAoKCkgPT4gdm9pZCkpIHtcbiAgaWYgKGlzRnVuY3Rpb24oZmluYWxpemVyKSkge1xuICAgIGZpbmFsaXplcigpO1xuICB9IGVsc2Uge1xuICAgIGZpbmFsaXplci51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlTm90aWZpY2F0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogVGhlIHtAbGluayBHbG9iYWxDb25maWd9IG9iamVjdCBmb3IgUnhKUy4gSXQgaXMgdXNlZCB0byBjb25maWd1cmUgdGhpbmdzXG4gKiBsaWtlIGhvdyB0byByZWFjdCBvbiB1bmhhbmRsZWQgZXJyb3JzLlxuICovXG5leHBvcnQgY29uc3QgY29uZmlnOiBHbG9iYWxDb25maWcgPSB7XG4gIG9uVW5oYW5kbGVkRXJyb3I6IG51bGwsXG4gIG9uU3RvcHBlZE5vdGlmaWNhdGlvbjogbnVsbCxcbiAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nOiBmYWxzZSxcbiAgdXNlRGVwcmVjYXRlZE5leHRDb250ZXh0OiBmYWxzZSxcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgUnhKUywgdXNlZCB0byBjb25maWd1cmUgdGhpbmdzXG4gKiBsaWtlIGhvdyB0byByZWFjdCBvbiB1bmhhbmRsZWQgZXJyb3JzLiBBY2Nlc3NpYmxlIHZpYSB7QGxpbmsgY29uZmlnfVxuICogb2JqZWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbENvbmZpZyB7XG4gIC8qKlxuICAgKiBBIHJlZ2lzdHJhdGlvbiBwb2ludCBmb3IgdW5oYW5kbGVkIGVycm9ycyBmcm9tIFJ4SlMuIFRoZXNlIGFyZSBlcnJvcnMgdGhhdFxuICAgKiBjYW5ub3Qgd2VyZSBub3QgaGFuZGxlZCBieSBjb25zdW1pbmcgY29kZSBpbiB0aGUgdXN1YWwgc3Vic2NyaXB0aW9uIHBhdGguIEZvclxuICAgKiBleGFtcGxlLCBpZiB5b3UgaGF2ZSB0aGlzIGNvbmZpZ3VyZWQsIGFuZCB5b3Ugc3Vic2NyaWJlIHRvIGFuIG9ic2VydmFibGUgd2l0aG91dFxuICAgKiBwcm92aWRpbmcgYW4gZXJyb3IgaGFuZGxlciwgZXJyb3JzIGZyb20gdGhhdCBzdWJzY3JpcHRpb24gd2lsbCBlbmQgdXAgaGVyZS4gVGhpc1xuICAgKiB3aWxsIF9hbHdheXNfIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseSBvbiBhbm90aGVyIGpvYiBpbiB0aGUgcnVudGltZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAqIHdlIGRvIG5vdCB3YW50IGVycm9ycyB0aHJvd24gaW4gdGhpcyB1c2VyLWNvbmZpZ3VyZWQgaGFuZGxlciB0byBpbnRlcmZlcmUgd2l0aCB0aGVcbiAgICogYmVoYXZpb3Igb2YgdGhlIGxpYnJhcnkuXG4gICAqL1xuICBvblVuaGFuZGxlZEVycm9yOiAoKGVycjogYW55KSA9PiB2b2lkKSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEEgcmVnaXN0cmF0aW9uIHBvaW50IGZvciBub3RpZmljYXRpb25zIHRoYXQgY2Fubm90IGJlIHNlbnQgdG8gc3Vic2NyaWJlcnMgYmVjYXVzZSB0aGV5XG4gICAqIGhhdmUgY29tcGxldGVkLCBlcnJvcmVkIG9yIGhhdmUgYmVlbiBleHBsaWNpdGx5IHVuc3Vic2NyaWJlZC4gQnkgZGVmYXVsdCwgbmV4dCwgY29tcGxldGVcbiAgICogYW5kIGVycm9yIG5vdGlmaWNhdGlvbnMgc2VudCB0byBzdG9wcGVkIHN1YnNjcmliZXJzIGFyZSBub29wcy4gSG93ZXZlciwgc29tZXRpbWVzIGNhbGxlcnNcbiAgICogbWlnaHQgd2FudCBhIGRpZmZlcmVudCBiZWhhdmlvci4gRm9yIGV4YW1wbGUsIHdpdGggc291cmNlcyB0aGF0IGF0dGVtcHQgdG8gcmVwb3J0IGVycm9yc1xuICAgKiB0byBzdG9wcGVkIHN1YnNjcmliZXJzLCBhIGNhbGxlciBjYW4gY29uZmlndXJlIFJ4SlMgdG8gdGhyb3cgYW4gdW5oYW5kbGVkIGVycm9yIGluc3RlYWQuXG4gICAqIFRoaXMgd2lsbCBfYWx3YXlzXyBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkgb24gYW5vdGhlciBqb2IgaW4gdGhlIHJ1bnRpbWUuIFRoaXMgaXMgYmVjYXVzZVxuICAgKiB3ZSBkbyBub3Qgd2FudCBlcnJvcnMgdGhyb3duIGluIHRoaXMgdXNlci1jb25maWd1cmVkIGhhbmRsZXIgdG8gaW50ZXJmZXJlIHdpdGggdGhlXG4gICAqIGJlaGF2aW9yIG9mIHRoZSBsaWJyYXJ5LlxuICAgKi9cbiAgb25TdG9wcGVkTm90aWZpY2F0aW9uOiAoKG5vdGlmaWNhdGlvbjogT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbjxhbnk+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHZvaWQpIHwgbnVsbDtcblxuICAvKipcbiAgICogVGhlIHByb21pc2UgY29uc3RydWN0b3IgdXNlZCBieSBkZWZhdWx0IGZvciB7QGxpbmsgT2JzZXJ2YWJsZSN0b1Byb21pc2UgdG9Qcm9taXNlfSBhbmQge0BsaW5rIE9ic2VydmFibGUjZm9yRWFjaCBmb3JFYWNofVxuICAgKiBtZXRob2RzLlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBBcyBvZiB2ZXJzaW9uIDgsIFJ4SlMgd2lsbCBubyBsb25nZXIgc3VwcG9ydCB0aGlzIHNvcnQgb2YgaW5qZWN0aW9uIG9mIGFcbiAgICogUHJvbWlzZSBjb25zdHJ1Y3Rvci4gSWYgeW91IG5lZWQgYSBQcm9taXNlIGltcGxlbWVudGF0aW9uIG90aGVyIHRoYW4gbmF0aXZlIHByb21pc2VzLFxuICAgKiBwbGVhc2UgcG9seWZpbGwvcGF0Y2ggUHJvbWlzZSBhcyB5b3Ugc2VlIGFwcHJvcHJpYXRlLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gICAqL1xuICBQcm9taXNlPzogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZTtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgdHVybnMgb24gc3luY2hyb25vdXMgZXJyb3IgcmV0aHJvd2luZywgd2hpY2ggaXMgYSBkZXByZWNhdGVkIGJlaGF2aW9yXG4gICAqIGluIHY2IGFuZCBoaWdoZXIuIFRoaXMgYmVoYXZpb3IgZW5hYmxlcyBiYWQgcGF0dGVybnMgbGlrZSB3cmFwcGluZyBhIHN1YnNjcmliZVxuICAgKiBjYWxsIGluIGEgdHJ5L2NhdGNoIGJsb2NrLiBJdCBhbHNvIGVuYWJsZXMgcHJvZHVjZXIgaW50ZXJmZXJlbmNlLCBhIG5hc3R5IGJ1Z1xuICAgKiB3aGVyZSBhIG11bHRpY2FzdCBjYW4gYmUgYnJva2VuIGZvciBhbGwgb2JzZXJ2ZXJzIGJ5IGEgZG93bnN0cmVhbSBjb25zdW1lciB3aXRoXG4gICAqIGFuIHVuaGFuZGxlZCBlcnJvci4gRE8gTk9UIFVTRSBUSElTIEZMQUcgVU5MRVNTIElUJ1MgTkVFREVEIFRPIEJVWSBUSU1FXG4gICAqIEZPUiBNSUdSQVRJT04gUkVBU09OUy5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgQXMgb2YgdmVyc2lvbiA4LCBSeEpTIHdpbGwgbm8gbG9uZ2VyIHN1cHBvcnQgc3luY2hyb25vdXMgdGhyb3dpbmdcbiAgICogb2YgdW5oYW5kbGVkIGVycm9ycy4gQWxsIGVycm9ycyB3aWxsIGJlIHRocm93biBvbiBhIHNlcGFyYXRlIGNhbGwgc3RhY2sgdG8gcHJldmVudCBiYWRcbiAgICogYmVoYXZpb3JzIGRlc2NyaWJlZCBhYm92ZS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgZW5hYmxlcyBhbiBhcy1vZi15ZXQgdW5kb2N1bWVudGVkIGZlYXR1cmUgZnJvbSB2NTogVGhlIGFiaWxpdHkgdG8gYWNjZXNzXG4gICAqIGB1bnN1YnNjcmliZSgpYCB2aWEgYHRoaXNgIGNvbnRleHQgaW4gYG5leHRgIGZ1bmN0aW9ucyBjcmVhdGVkIGluIG9ic2VydmVycyBwYXNzZWRcbiAgICogdG8gYHN1YnNjcmliZWAuXG4gICAqXG4gICAqIFRoaXMgaXMgYmVpbmcgcmVtb3ZlZCBiZWNhdXNlIHRoZSBwZXJmb3JtYW5jZSB3YXMgc2V2ZXJlbHkgcHJvYmxlbWF0aWMsIGFuZCBpdCBjb3VsZCBhbHNvIGNhdXNlXG4gICAqIGlzc3VlcyB3aGVuIHR5cGVzIG90aGVyIHRoYW4gUE9KT3MgYXJlIHBhc3NlZCB0byBzdWJzY3JpYmUgYXMgc3Vic2NyaWJlcnMsIGFzIHRoZXkgd2lsbCBsaWtlbHkgaGF2ZVxuICAgKiB0aGVpciBgdGhpc2AgY29udGV4dCBvdmVyd3JpdHRlbi5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgQXMgb2YgdmVyc2lvbiA4LCBSeEpTIHdpbGwgbm8gbG9uZ2VyIHN1cHBvcnQgYWx0ZXJpbmcgdGhlXG4gICAqIGNvbnRleHQgb2YgbmV4dCBmdW5jdGlvbnMgcHJvdmlkZWQgYXMgcGFydCBvZiBhbiBvYnNlcnZlciB0byBTdWJzY3JpYmUuIEluc3RlYWQsXG4gICAqIHlvdSB3aWxsIGhhdmUgYWNjZXNzIHRvIGEgc3Vic2NyaXB0aW9uIG9yIGEgc2lnbmFsIG9yIHRva2VuIHRoYXQgd2lsbCBhbGxvdyB5b3UgdG8gZG8gdGhpbmdzIGxpa2VcbiAgICogdW5zdWJzY3JpYmUgYW5kIHRlc3QgY2xvc2VkIHN0YXR1cy4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgdXNlRGVwcmVjYXRlZE5leHRDb250ZXh0OiBib29sZWFuO1xufVxuIiwgImltcG9ydCB0eXBlIHsgVGltZXJIYW5kbGUgfSBmcm9tICcuL3RpbWVySGFuZGxlJztcbnR5cGUgU2V0VGltZW91dEZ1bmN0aW9uID0gKGhhbmRsZXI6ICgpID0+IHZvaWQsIHRpbWVvdXQ/OiBudW1iZXIsIC4uLmFyZ3M6IGFueVtdKSA9PiBUaW1lckhhbmRsZTtcbnR5cGUgQ2xlYXJUaW1lb3V0RnVuY3Rpb24gPSAoaGFuZGxlOiBUaW1lckhhbmRsZSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIFRpbWVvdXRQcm92aWRlciB7XG4gIHNldFRpbWVvdXQ6IFNldFRpbWVvdXRGdW5jdGlvbjtcbiAgY2xlYXJUaW1lb3V0OiBDbGVhclRpbWVvdXRGdW5jdGlvbjtcbiAgZGVsZWdhdGU6XG4gICAgfCB7XG4gICAgICAgIHNldFRpbWVvdXQ6IFNldFRpbWVvdXRGdW5jdGlvbjtcbiAgICAgICAgY2xlYXJUaW1lb3V0OiBDbGVhclRpbWVvdXRGdW5jdGlvbjtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IHRpbWVvdXRQcm92aWRlcjogVGltZW91dFByb3ZpZGVyID0ge1xuICAvLyBXaGVuIGFjY2Vzc2luZyB0aGUgZGVsZWdhdGUsIHVzZSB0aGUgdmFyaWFibGUgcmF0aGVyIHRoYW4gYHRoaXNgIHNvIHRoYXRcbiAgLy8gdGhlIGZ1bmN0aW9ucyBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgYmVpbmcgYm91bmQgdG8gdGhlIHByb3ZpZGVyLlxuICBzZXRUaW1lb3V0KGhhbmRsZXI6ICgpID0+IHZvaWQsIHRpbWVvdXQ/OiBudW1iZXIsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCB7IGRlbGVnYXRlIH0gPSB0aW1lb3V0UHJvdmlkZXI7XG4gICAgaWYgKGRlbGVnYXRlPy5zZXRUaW1lb3V0KSB7XG4gICAgICByZXR1cm4gZGVsZWdhdGUuc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCwgLi4uYXJncyk7XG4gIH0sXG4gIGNsZWFyVGltZW91dChoYW5kbGUpIHtcbiAgICBjb25zdCB7IGRlbGVnYXRlIH0gPSB0aW1lb3V0UHJvdmlkZXI7XG4gICAgcmV0dXJuIChkZWxlZ2F0ZT8uY2xlYXJUaW1lb3V0IHx8IGNsZWFyVGltZW91dCkoaGFuZGxlIGFzIGFueSk7XG4gIH0sXG4gIGRlbGVnYXRlOiB1bmRlZmluZWQsXG59O1xuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcblxuLyoqXG4gKiBIYW5kbGVzIGFuIGVycm9yIG9uIGFub3RoZXIgam9iIGVpdGhlciB3aXRoIHRoZSB1c2VyLWNvbmZpZ3VyZWQge0BsaW5rIG9uVW5oYW5kbGVkRXJyb3J9LFxuICogb3IgYnkgdGhyb3dpbmcgaXQgb24gdGhhdCBuZXcgam9iIHNvIGl0IGNhbiBiZSBwaWNrZWQgdXAgYnkgYHdpbmRvdy5vbmVycm9yYCwgYHByb2Nlc3Mub24oJ2Vycm9yJylgLCBldGMuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZXJlIGlzIGFuIGVycm9yIHRoYXQgaXMgb3V0LW9mLWJhbmQgd2l0aCB0aGUgc3Vic2NyaXB0aW9uXG4gKiBvciB3aGVuIGFuIGVycm9yIGhpdHMgYSB0ZXJtaW5hbCBib3VuZGFyeSBvZiB0aGUgc3Vic2NyaXB0aW9uIGFuZCBubyBlcnJvciBoYW5kbGVyIHdhcyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0gZXJyIHRoZSBlcnJvciB0byByZXBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycjogYW55KSB7XG4gIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCB7IG9uVW5oYW5kbGVkRXJyb3IgfSA9IGNvbmZpZztcbiAgICBpZiAob25VbmhhbmRsZWRFcnJvcikge1xuICAgICAgLy8gRXhlY3V0ZSB0aGUgdXNlci1jb25maWd1cmVkIGVycm9yIGhhbmRsZXIuXG4gICAgICBvblVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRocm93IHNvIGl0IGlzIHBpY2tlZCB1cCBieSB0aGUgcnVudGltZSdzIHVuY2F1Z2h0IGVycm9yIG1lY2hhbmlzbS5cbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH0pO1xufVxuIiwgIi8qIHRzbGludDpkaXNhYmxlOm5vLWVtcHR5ICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxuIiwgImltcG9ydCB7IENvbXBsZXRlTm90aWZpY2F0aW9uLCBOZXh0Tm90aWZpY2F0aW9uLCBFcnJvck5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEEgY29tcGxldGlvbiBvYmplY3Qgb3B0aW1pemVkIGZvciBtZW1vcnkgdXNlIGFuZCBjcmVhdGVkIHRvIGJlIHRoZVxuICogc2FtZSBcInNoYXBlXCIgYXMgb3RoZXIgbm90aWZpY2F0aW9ucyBpbiB2OC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgQ09NUExFVEVfTk9USUZJQ0FUSU9OID0gKCgpID0+IGNyZWF0ZU5vdGlmaWNhdGlvbignQycsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKSBhcyBDb21wbGV0ZU5vdGlmaWNhdGlvbikoKTtcblxuLyoqXG4gKiBJbnRlcm5hbCB1c2Ugb25seS4gQ3JlYXRlcyBhbiBvcHRpbWl6ZWQgZXJyb3Igbm90aWZpY2F0aW9uIHRoYXQgaXMgdGhlIHNhbWUgXCJzaGFwZVwiXG4gKiBhcyBvdGhlciBub3RpZmljYXRpb25zLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvck5vdGlmaWNhdGlvbihlcnJvcjogYW55KTogRXJyb3JOb3RpZmljYXRpb24ge1xuICByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdFJywgdW5kZWZpbmVkLCBlcnJvcikgYXMgYW55O1xufVxuXG4vKipcbiAqIEludGVybmFsIHVzZSBvbmx5LiBDcmVhdGVzIGFuIG9wdGltaXplZCBuZXh0IG5vdGlmaWNhdGlvbiB0aGF0IGlzIHRoZSBzYW1lIFwic2hhcGVcIlxuICogYXMgb3RoZXIgbm90aWZpY2F0aW9ucy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dE5vdGlmaWNhdGlvbjxUPih2YWx1ZTogVCkge1xuICByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdOJywgdmFsdWUsIHVuZGVmaW5lZCkgYXMgTmV4dE5vdGlmaWNhdGlvbjxUPjtcbn1cblxuLyoqXG4gKiBFbnN1cmVzIHRoYXQgYWxsIG5vdGlmaWNhdGlvbnMgY3JlYXRlZCBpbnRlcm5hbGx5IGhhdmUgdGhlIHNhbWUgXCJzaGFwZVwiIGluIHY4LlxuICpcbiAqIFRPRE86IFRoaXMgaXMgb25seSBleHBvcnRlZCB0byBzdXBwb3J0IGEgY3JhenkgbGVnYWN5IHRlc3QgaW4gYGdyb3VwQnlgLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb24oa2luZDogJ04nIHwgJ0UnIHwgJ0MnLCB2YWx1ZTogYW55LCBlcnJvcjogYW55KSB7XG4gIHJldHVybiB7XG4gICAga2luZCxcbiAgICB2YWx1ZSxcbiAgICBlcnJvcixcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5sZXQgY29udGV4dDogeyBlcnJvclRocm93bjogYm9vbGVhbjsgZXJyb3I6IGFueSB9IHwgbnVsbCA9IG51bGw7XG5cbi8qKlxuICogSGFuZGxlcyBkZWFsaW5nIHdpdGggZXJyb3JzIGZvciBzdXBlci1ncm9zcyBtb2RlLiBDcmVhdGVzIGEgY29udGV4dCwgaW4gd2hpY2hcbiAqIGFueSBzeW5jaHJvbm91c2x5IHRocm93biBlcnJvcnMgd2lsbCBiZSBwYXNzZWQgdG8ge0BsaW5rIGNhcHR1cmVFcnJvcn0uIFdoaWNoXG4gKiB3aWxsIHJlY29yZCB0aGUgZXJyb3Igc3VjaCB0aGF0IGl0IHdpbGwgYmUgcmV0aHJvd24gYWZ0ZXIgdGhlIGNhbGwgYmFjayBpcyBjb21wbGV0ZS5cbiAqIFRPRE86IFJlbW92ZSBpbiB2OFxuICogQHBhcmFtIGNiIEFuIGltbWVkaWF0ZWx5IGV4ZWN1dGVkIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JDb250ZXh0KGNiOiAoKSA9PiB2b2lkKSB7XG4gIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgIGNvbnN0IGlzUm9vdCA9ICFjb250ZXh0O1xuICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgIGNvbnRleHQgPSB7IGVycm9yVGhyb3duOiBmYWxzZSwgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgY2IoKTtcbiAgICBpZiAoaXNSb290KSB7XG4gICAgICBjb25zdCB7IGVycm9yVGhyb3duLCBlcnJvciB9ID0gY29udGV4dCE7XG4gICAgICBjb250ZXh0ID0gbnVsbDtcbiAgICAgIGlmIChlcnJvclRocm93bikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgZ2VuZXJhbCBub24tZGVwcmVjYXRlZCBwYXRoIGZvciBldmVyeW9uZSB0aGF0XG4gICAgLy8gaXNuJ3QgY3JhenkgZW5vdWdoIHRvIHVzZSBzdXBlci1ncm9zcyBtb2RlICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKVxuICAgIGNiKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDYXB0dXJlcyBlcnJvcnMgb25seSBpbiBzdXBlci1ncm9zcyBtb2RlLlxuICogQHBhcmFtIGVyciB0aGUgZXJyb3IgdG8gY2FwdHVyZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUVycm9yKGVycjogYW55KSB7XG4gIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiBjb250ZXh0KSB7XG4gICAgY29udGV4dC5lcnJvclRocm93biA9IHRydWU7XG4gICAgY29udGV4dC5lcnJvciA9IGVycjtcbiAgfVxufVxuIiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZlciwgT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24sIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWwvbm9vcCc7XG5pbXBvcnQgeyBuZXh0Tm90aWZpY2F0aW9uLCBlcnJvck5vdGlmaWNhdGlvbiwgQ09NUExFVEVfTk9USUZJQ0FUSU9OIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25GYWN0b3JpZXMnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcbmltcG9ydCB7IGNhcHR1cmVFcnJvciB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xuXG4vKipcbiAqIEltcGxlbWVudHMgdGhlIHtAbGluayBPYnNlcnZlcn0gaW50ZXJmYWNlIGFuZCBleHRlbmRzIHRoZVxuICoge0BsaW5rIFN1YnNjcmlwdGlvbn0gY2xhc3MuIFdoaWxlIHRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGlzIHRoZSBwdWJsaWMgQVBJIGZvclxuICogY29uc3VtaW5nIHRoZSB2YWx1ZXMgb2YgYW4ge0BsaW5rIE9ic2VydmFibGV9LCBhbGwgT2JzZXJ2ZXJzIGdldCBjb252ZXJ0ZWQgdG9cbiAqIGEgU3Vic2NyaWJlciwgaW4gb3JkZXIgdG8gcHJvdmlkZSBTdWJzY3JpcHRpb24tbGlrZSBjYXBhYmlsaXRpZXMgc3VjaCBhc1xuICogYHVuc3Vic2NyaWJlYC4gU3Vic2NyaWJlciBpcyBhIGNvbW1vbiB0eXBlIGluIFJ4SlMsIGFuZCBjcnVjaWFsIGZvclxuICogaW1wbGVtZW50aW5nIG9wZXJhdG9ycywgYnV0IGl0IGlzIHJhcmVseSB1c2VkIGFzIGEgcHVibGljIEFQSS5cbiAqXG4gKiBAY2xhc3MgU3Vic2NyaWJlcjxUPlxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmlwdGlvbiBpbXBsZW1lbnRzIE9ic2VydmVyPFQ+IHtcbiAgLyoqXG4gICAqIEEgc3RhdGljIGZhY3RvcnkgZm9yIGEgU3Vic2NyaWJlciwgZ2l2ZW4gYSAocG90ZW50aWFsbHkgcGFydGlhbCkgZGVmaW5pdGlvblxuICAgKiBvZiBhbiBPYnNlcnZlci5cbiAgICogQHBhcmFtIG5leHQgVGhlIGBuZXh0YCBjYWxsYmFjayBvZiBhbiBPYnNlcnZlci5cbiAgICogQHBhcmFtIGVycm9yIFRoZSBgZXJyb3JgIGNhbGxiYWNrIG9mIGFuXG4gICAqIE9ic2VydmVyLlxuICAgKiBAcGFyYW0gY29tcGxldGUgVGhlIGBjb21wbGV0ZWAgY2FsbGJhY2sgb2YgYW5cbiAgICogT2JzZXJ2ZXIuXG4gICAqIEByZXR1cm4gQSBTdWJzY3JpYmVyIHdyYXBwaW5nIHRoZSAocGFydGlhbGx5IGRlZmluZWQpXG4gICAqIE9ic2VydmVyIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiBhcmd1bWVudHMuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBkZXByZWNhdGVkIERvIG5vdCB1c2UuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVGhlcmUgaXMgbm8gcmVwbGFjZW1lbnQgZm9yIHRoaXNcbiAgICogbWV0aG9kLCBhbmQgdGhlcmUgaXMgbm8gcmVhc29uIHRvIGJlIGNyZWF0aW5nIGluc3RhbmNlcyBvZiBgU3Vic2NyaWJlcmAgZGlyZWN0bHkuXG4gICAqIElmIHlvdSBoYXZlIGEgc3BlY2lmaWMgdXNlIGNhc2UsIHBsZWFzZSBmaWxlIGFuIGlzc3VlLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTxUPihuZXh0PzogKHg/OiBUKSA9PiB2b2lkLCBlcnJvcj86IChlPzogYW55KSA9PiB2b2lkLCBjb21wbGV0ZT86ICgpID0+IHZvaWQpOiBTdWJzY3JpYmVyPFQ+IHtcbiAgICByZXR1cm4gbmV3IFNhZmVTdWJzY3JpYmVyKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIHByb3RlY3RlZCBpc1N0b3BwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBwcm90ZWN0ZWQgZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55PiB8IE9ic2VydmVyPGFueT47IC8vIHRoaXMgYGFueWAgaXMgdGhlIGVzY2FwZSBoYXRjaCB0byBlcmFzZSBleHRyYSB0eXBlIHBhcmFtIChlLmcuIFIpXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LlxuICAgKiBUaGVyZSBpcyBubyByZWFzb24gdG8gZGlyZWN0bHkgY3JlYXRlIGFuIGluc3RhbmNlIG9mIFN1YnNjcmliZXIuIFRoaXMgdHlwZSBpcyBleHBvcnRlZCBmb3IgdHlwaW5ncyByZWFzb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24/OiBTdWJzY3JpYmVyPGFueT4gfCBPYnNlcnZlcjxhbnk+KSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoZGVzdGluYXRpb24pIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgY2hhaW4gc3Vic2NyaXB0aW9ucyB0b2dldGhlciBoZXJlLlxuICAgICAgLy8gaWYgZGVzdGluYXRpb24gaXMgYSBTdWJzY3JpcHRpb24sIHRoZW4gaXQgaXMgYSBTdWJzY3JpYmVyLlxuICAgICAgaWYgKGlzU3Vic2NyaXB0aW9uKGRlc3RpbmF0aW9uKSkge1xuICAgICAgICBkZXN0aW5hdGlvbi5hZGQodGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBFTVBUWV9PQlNFUlZFUjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBub3RpZmljYXRpb25zIG9mIHR5cGUgYG5leHRgIGZyb21cbiAgICogdGhlIE9ic2VydmFibGUsIHdpdGggYSB2YWx1ZS4gVGhlIE9ic2VydmFibGUgbWF5IGNhbGwgdGhpcyBtZXRob2QgMCBvciBtb3JlXG4gICAqIHRpbWVzLlxuICAgKiBAcGFyYW0ge1R9IFt2YWx1ZV0gVGhlIGBuZXh0YCB2YWx1ZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIG5leHQodmFsdWU/OiBUKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5leHROb3RpZmljYXRpb24odmFsdWUpLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmV4dCh2YWx1ZSEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIG5vdGlmaWNhdGlvbnMgb2YgdHlwZSBgZXJyb3JgIGZyb21cbiAgICogdGhlIE9ic2VydmFibGUsIHdpdGggYW4gYXR0YWNoZWQgYEVycm9yYC4gTm90aWZpZXMgdGhlIE9ic2VydmVyIHRoYXRcbiAgICogdGhlIE9ic2VydmFibGUgaGFzIGV4cGVyaWVuY2VkIGFuIGVycm9yIGNvbmRpdGlvbi5cbiAgICogQHBhcmFtIHthbnl9IFtlcnJdIFRoZSBgZXJyb3JgIGV4Y2VwdGlvbi5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGVycm9yKGVycj86IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihlcnJvck5vdGlmaWNhdGlvbihlcnIpLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBhIHZhbHVlbGVzcyBub3RpZmljYXRpb24gb2YgdHlwZVxuICAgKiBgY29tcGxldGVgIGZyb20gdGhlIE9ic2VydmFibGUuIE5vdGlmaWVzIHRoZSBPYnNlcnZlciB0aGF0IHRoZSBPYnNlcnZhYmxlXG4gICAqIGhhcyBmaW5pc2hlZCBzZW5kaW5nIHB1c2gtYmFzZWQgbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNvbXBsZXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihDT01QTEVURV9OT1RJRklDQVRJT04sIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHN1cGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbnVsbCE7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZXJyb3IoZXJyOiBhbnkpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGhpcyBiaW5kIGlzIGNhcHR1cmVkIGhlcmUgYmVjYXVzZSB3ZSB3YW50IHRvIGJlIGFibGUgdG8gaGF2ZVxuICogY29tcGF0aWJpbGl0eSB3aXRoIG1vbm9pZCBsaWJyYXJpZXMgdGhhdCB0ZW5kIHRvIHVzZSBhIG1ldGhvZCBuYW1lZFxuICogYGJpbmRgLiBJbiBwYXJ0aWN1bGFyLCBhIGxpYnJhcnkgY2FsbGVkIE1vbmlvIHJlcXVpcmVzIHRoaXMuXG4gKi9cbmNvbnN0IF9iaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG5cbmZ1bmN0aW9uIGJpbmQ8Rm4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4oZm46IEZuLCB0aGlzQXJnOiBhbnkpOiBGbiB7XG4gIHJldHVybiBfYmluZC5jYWxsKGZuLCB0aGlzQXJnKTtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBvcHRpbWl6YXRpb24gb25seSwgRE8gTk9UIEVYUE9TRS5cbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBDb25zdW1lck9ic2VydmVyPFQ+IGltcGxlbWVudHMgT2JzZXJ2ZXI8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcnRpYWxPYnNlcnZlcjogUGFydGlhbDxPYnNlcnZlcjxUPj4pIHt9XG5cbiAgbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFydGlhbE9ic2VydmVyIH0gPSB0aGlzO1xuICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIubmV4dCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgY29uc3QgeyBwYXJ0aWFsT2JzZXJ2ZXIgfSA9IHRoaXM7XG4gICAgaWYgKHBhcnRpYWxPYnNlcnZlci5lcnJvcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgY29tcGxldGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBwYXJ0aWFsT2JzZXJ2ZXIgfSA9IHRoaXM7XG4gICAgaWYgKHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWZlU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBvYnNlcnZlck9yTmV4dD86IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+IHwgKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGVycm9yPzogKChlPzogYW55KSA9PiB2b2lkKSB8IG51bGwsXG4gICAgY29tcGxldGU/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gICkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBsZXQgcGFydGlhbE9ic2VydmVyOiBQYXJ0aWFsPE9ic2VydmVyPFQ+PjtcbiAgICBpZiAoaXNGdW5jdGlvbihvYnNlcnZlck9yTmV4dCkgfHwgIW9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAvLyBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiwgbm90IGFuIG9ic2VydmVyLiBUaGUgbmV4dFxuICAgICAgLy8gdHdvIGFyZ3VtZW50cyAqY291bGQqIGJlIG9ic2VydmVycywgb3IgdGhleSBjb3VsZCBiZSBlbXB0eS5cbiAgICAgIHBhcnRpYWxPYnNlcnZlciA9IHtcbiAgICAgICAgbmV4dDogKG9ic2VydmVyT3JOZXh0ID8/IHVuZGVmaW5lZCkgYXMgKCgodmFsdWU6IFQpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSxcbiAgICAgICAgZXJyb3I6IGVycm9yID8/IHVuZGVmaW5lZCxcbiAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlID8/IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIHBhcnRpYWwgb2JzZXJ2ZXIuXG4gICAgICBsZXQgY29udGV4dDogYW55O1xuICAgICAgaWYgKHRoaXMgJiYgY29uZmlnLnVzZURlcHJlY2F0ZWROZXh0Q29udGV4dCkge1xuICAgICAgICAvLyBUaGlzIGlzIGEgZGVwcmVjYXRlZCBwYXRoIHRoYXQgbWFkZSBgdGhpcy51bnN1YnNjcmliZSgpYCBhdmFpbGFibGUgaW5cbiAgICAgICAgLy8gbmV4dCBoYW5kbGVyIGZ1bmN0aW9ucyBwYXNzZWQgdG8gc3Vic2NyaWJlLiBUaGlzIG9ubHkgZXhpc3RzIGJlaGluZCBhIGZsYWdcbiAgICAgICAgLy8gbm93LCBhcyBpdCBpcyAqdmVyeSogc2xvdy5cbiAgICAgICAgY29udGV4dCA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICBjb250ZXh0LnVuc3Vic2NyaWJlID0gKCkgPT4gdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgbmV4dDogb2JzZXJ2ZXJPck5leHQubmV4dCAmJiBiaW5kKG9ic2VydmVyT3JOZXh0Lm5leHQsIGNvbnRleHQpLFxuICAgICAgICAgIGVycm9yOiBvYnNlcnZlck9yTmV4dC5lcnJvciAmJiBiaW5kKG9ic2VydmVyT3JOZXh0LmVycm9yLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21wbGV0ZTogb2JzZXJ2ZXJPck5leHQuY29tcGxldGUgJiYgYmluZChvYnNlcnZlck9yTmV4dC5jb21wbGV0ZSwgY29udGV4dCksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGUgXCJub3JtYWxcIiBwYXRoLiBKdXN0IHVzZSB0aGUgcGFydGlhbCBvYnNlcnZlciBkaXJlY3RseS5cbiAgICAgICAgcGFydGlhbE9ic2VydmVyID0gb2JzZXJ2ZXJPck5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV3JhcCB0aGUgcGFydGlhbCBvYnNlcnZlciB0byBlbnN1cmUgaXQncyBhIGZ1bGwgb2JzZXJ2ZXIsIGFuZFxuICAgIC8vIG1ha2Ugc3VyZSBwcm9wZXIgZXJyb3IgaGFuZGxpbmcgaXMgYWNjb3VudGVkIGZvci5cbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IENvbnN1bWVyT2JzZXJ2ZXIocGFydGlhbE9ic2VydmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcjogYW55KSB7XG4gIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgIGNhcHR1cmVFcnJvcihlcnJvcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWRlYWwgcGF0aCwgd2UgcmVwb3J0IHRoaXMgYXMgYW4gdW5oYW5kbGVkIGVycm9yLFxuICAgIC8vIHdoaWNoIGlzIHRocm93biBvbiBhIG5ldyBjYWxsIHN0YWNrLlxuICAgIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGVycm9yIGhhbmRsZXIgdXNlZCB3aGVuIG5vIGVycm9yIGhhbmRsZXIgd2FzIHN1cHBsaWVkXG4gKiB0byB0aGUgU2FmZVN1YnNjcmliZXIgLS0gbWVhbmluZyBubyBlcnJvciBoYW5kbGVyIHdhcyBzdXBwbGllZFxuICogZG8gdGhlIGBzdWJzY3JpYmVgIGNhbGwgb24gb3VyIG9ic2VydmFibGUuXG4gKiBAcGFyYW0gZXJyIFRoZSBlcnJvciB0byBoYW5kbGVcbiAqL1xuZnVuY3Rpb24gZGVmYXVsdEVycm9ySGFuZGxlcihlcnI6IGFueSkge1xuICB0aHJvdyBlcnI7XG59XG5cbi8qKlxuICogQSBoYW5kbGVyIGZvciBub3RpZmljYXRpb25zIHRoYXQgY2Fubm90IGJlIHNlbnQgdG8gYSBzdG9wcGVkIHN1YnNjcmliZXIuXG4gKiBAcGFyYW0gbm90aWZpY2F0aW9uIFRoZSBub3RpZmljYXRpb24gYmVpbmcgc2VudFxuICogQHBhcmFtIHN1YnNjcmliZXIgVGhlIHN0b3BwZWQgc3Vic2NyaWJlclxuICovXG5mdW5jdGlvbiBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbjxhbnk+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pIHtcbiAgY29uc3QgeyBvblN0b3BwZWROb3RpZmljYXRpb24gfSA9IGNvbmZpZztcbiAgb25TdG9wcGVkTm90aWZpY2F0aW9uICYmIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KCgpID0+IG9uU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIHN1YnNjcmliZXIpKTtcbn1cblxuLyoqXG4gKiBUaGUgb2JzZXJ2ZXIgdXNlZCBhcyBhIHN0dWIgZm9yIHN1YnNjcmlwdGlvbnMgd2hlcmUgdGhlIHVzZXIgZGlkIG5vdFxuICogcGFzcyBhbnkgYXJndW1lbnRzIHRvIGBzdWJzY3JpYmVgLiBDb21lcyB3aXRoIHRoZSBkZWZhdWx0IGVycm9yIGhhbmRsaW5nXG4gKiBiZWhhdmlvci5cbiAqL1xuZXhwb3J0IGNvbnN0IEVNUFRZX09CU0VSVkVSOiBSZWFkb25seTxPYnNlcnZlcjxhbnk+PiAmIHsgY2xvc2VkOiB0cnVlIH0gPSB7XG4gIGNsb3NlZDogdHJ1ZSxcbiAgbmV4dDogbm9vcCxcbiAgZXJyb3I6IGRlZmF1bHRFcnJvckhhbmRsZXIsXG4gIGNvbXBsZXRlOiBub29wLFxufTtcbiIsICIvKipcbiAqIFN5bWJvbC5vYnNlcnZhYmxlIG9yIGEgc3RyaW5nIFwiQEBvYnNlcnZhYmxlXCIuIFVzZWQgZm9yIGludGVyb3BcbiAqXG4gKiBAZGVwcmVjYXRlZCBXZSB3aWxsIG5vIGxvbmdlciBiZSBleHBvcnRpbmcgdGhpcyBzeW1ib2wgaW4gdXBjb21pbmcgdmVyc2lvbnMgb2YgUnhKUy5cbiAqIEluc3RlYWQgcG9seWZpbGwgYW5kIHVzZSBTeW1ib2wub2JzZXJ2YWJsZSBkaXJlY3RseSAqb3IqIHVzZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9zeW1ib2wtb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgY29uc3Qgb2JzZXJ2YWJsZTogc3RyaW5nIHwgc3ltYm9sID0gKCgpID0+ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlKSB8fCAnQEBvYnNlcnZhYmxlJykoKTtcbiIsICIvKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgb25lIHBhcmFtZXRlciBhbmQganVzdCByZXR1cm5zIGl0LiBTaW1wbHkgcHV0LFxuICogdGhpcyBpcyBsaWtlIGA8VD4oeDogVCk6IFQgPT4geGAuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCBpbiBzb21lIGNhc2VzIHdoZW4gdXNpbmcgdGhpbmdzIGxpa2UgYG1lcmdlTWFwYFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSwgbWFwLCByYW5nZSwgbWVyZ2VNYXAsIGlkZW50aXR5IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSg1KSk7XG4gKlxuICogY29uc3QgcmVzdWx0JCA9IHNvdXJjZSQucGlwZShcbiAqICAgbWFwKGkgPT4gcmFuZ2UoaSkpLFxuICogICBtZXJnZU1hcChpZGVudGl0eSkgLy8gc2FtZSBhcyBtZXJnZU1hcCh4ID0+IHgpXG4gKiApO1xuICpcbiAqIHJlc3VsdCQuc3Vic2NyaWJlKHtcbiAqICAgbmV4dDogY29uc29sZS5sb2dcbiAqIH0pO1xuICogYGBgXG4gKlxuICogT3Igd2hlbiB5b3Ugd2FudCB0byBzZWxlY3RpdmVseSBhcHBseSBhbiBvcGVyYXRvclxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSwgaWRlbnRpdHkgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBzaG91bGRMaW1pdCA9ICgpID0+IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gKlxuICogY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApO1xuICpcbiAqIGNvbnN0IHJlc3VsdCQgPSBzb3VyY2UkLnBpcGUoc2hvdWxkTGltaXQoKSA/IHRha2UoNSkgOiBpZGVudGl0eSk7XG4gKlxuICogcmVzdWx0JC5zdWJzY3JpYmUoe1xuICogICBuZXh0OiBjb25zb2xlLmxvZ1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0geCBBbnkgdmFsdWUgdGhhdCBpcyByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyBUaGUgdmFsdWUgcGFzc2VkIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIgdG8gdGhpcyBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk8VD4oeDogVCk6IFQge1xuICByZXR1cm4geDtcbn1cbiIsICJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknO1xuaW1wb3J0IHsgVW5hcnlGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoKTogdHlwZW9mIGlkZW50aXR5O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQT4oZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+KTogVW5hcnlGdW5jdGlvbjxULCBBPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEI+KGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPiwgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+KTogVW5hcnlGdW5jdGlvbjxULCBCPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEM+KGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPiwgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LCBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4pOiBVbmFyeUZ1bmN0aW9uPFQsIEM+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRD4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPlxuKTogVW5hcnlGdW5jdGlvbjxULCBEPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEU+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPlxuKTogVW5hcnlGdW5jdGlvbjxULCBFPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEY+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEY+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRiwgRz4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj4sXG4gIGZuNzogVW5hcnlGdW5jdGlvbjxGLCBHPlxuKTogVW5hcnlGdW5jdGlvbjxULCBHPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz4sXG4gIGZuODogVW5hcnlGdW5jdGlvbjxHLCBIPlxuKTogVW5hcnlGdW5jdGlvbjxULCBIPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz4sXG4gIGZuODogVW5hcnlGdW5jdGlvbjxHLCBIPixcbiAgZm45OiBVbmFyeUZ1bmN0aW9uPEgsIEk+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEk+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRiwgRywgSCwgST4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj4sXG4gIGZuNzogVW5hcnlGdW5jdGlvbjxGLCBHPixcbiAgZm44OiBVbmFyeUZ1bmN0aW9uPEcsIEg+LFxuICBmbjk6IFVuYXJ5RnVuY3Rpb248SCwgST4sXG4gIC4uLmZuczogVW5hcnlGdW5jdGlvbjxhbnksIGFueT5bXVxuKTogVW5hcnlGdW5jdGlvbjxULCB1bmtub3duPjtcblxuLyoqXG4gKiBwaXBlKCkgY2FuIGJlIGNhbGxlZCBvbiBvbmUgb3IgbW9yZSBmdW5jdGlvbnMsIGVhY2ggb2Ygd2hpY2ggY2FuIHRha2Ugb25lIGFyZ3VtZW50IChcIlVuYXJ5RnVuY3Rpb25cIilcbiAqIGFuZCB1c2VzIGl0IHRvIHJldHVybiBhIHZhbHVlLlxuICogSXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgb25lIGFyZ3VtZW50LCBwYXNzZXMgaXQgdG8gdGhlIGZpcnN0IFVuYXJ5RnVuY3Rpb24sIGFuZCB0aGVuXG4gKiBwYXNzZXMgdGhlIHJlc3VsdCB0byB0aGUgbmV4dCBvbmUsIHBhc3NlcyB0aGF0IHJlc3VsdCB0byB0aGUgbmV4dCBvbmUsIGFuZCBzbyBvbi4gIFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGlwZSguLi5mbnM6IEFycmF5PFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+Pik6IFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+IHtcbiAgcmV0dXJuIHBpcGVGcm9tQXJyYXkoZm5zKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGVGcm9tQXJyYXk8VCwgUj4oZm5zOiBBcnJheTxVbmFyeUZ1bmN0aW9uPFQsIFI+Pik6IFVuYXJ5RnVuY3Rpb248VCwgUj4ge1xuICBpZiAoZm5zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBpZGVudGl0eSBhcyBVbmFyeUZ1bmN0aW9uPGFueSwgYW55PjtcbiAgfVxuXG4gIGlmIChmbnMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZuc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwaXBlZChpbnB1dDogVCk6IFIge1xuICAgIHJldHVybiBmbnMucmVkdWNlKChwcmV2OiBhbnksIGZuOiBVbmFyeUZ1bmN0aW9uPFQsIFI+KSA9PiBmbihwcmV2KSwgaW5wdXQgYXMgYW55KTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBPcGVyYXRvciB9IGZyb20gJy4vT3BlcmF0b3InO1xuaW1wb3J0IHsgU2FmZVN1YnNjcmliZXIsIFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24sIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFRlYXJkb3duTG9naWMsIE9wZXJhdG9yRnVuY3Rpb24sIFN1YnNjcmliYWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IHBpcGVGcm9tQXJyYXkgfSBmcm9tICcuL3V0aWwvcGlwZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgZXJyb3JDb250ZXh0IH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG5cbi8qKlxuICogQSByZXByZXNlbnRhdGlvbiBvZiBhbnkgc2V0IG9mIHZhbHVlcyBvdmVyIGFueSBhbW91bnQgb2YgdGltZS4gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBidWlsZGluZyBibG9ja1xuICogb2YgUnhKUy5cbiAqXG4gKiBAY2xhc3MgT2JzZXJ2YWJsZTxUPlxuICovXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIFN1YnNjcmliYWJsZTxUPiB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICovXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICovXG4gIG9wZXJhdG9yOiBPcGVyYXRvcjxhbnksIFQ+IHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3Vic2NyaWJlIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBPYnNlcnZhYmxlIGlzXG4gICAqIGluaXRpYWxseSBzdWJzY3JpYmVkIHRvLiBUaGlzIGZ1bmN0aW9uIGlzIGdpdmVuIGEgU3Vic2NyaWJlciwgdG8gd2hpY2ggbmV3IHZhbHVlc1xuICAgKiBjYW4gYmUgYG5leHRgZWQsIG9yIGFuIGBlcnJvcmAgbWV0aG9kIGNhbiBiZSBjYWxsZWQgdG8gcmFpc2UgYW4gZXJyb3IsIG9yXG4gICAqIGBjb21wbGV0ZWAgY2FuIGJlIGNhbGxlZCB0byBub3RpZnkgb2YgYSBzdWNjZXNzZnVsIGNvbXBsZXRpb24uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdWJzY3JpYmU/OiAodGhpczogT2JzZXJ2YWJsZTxUPiwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4gVGVhcmRvd25Mb2dpYykge1xuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICB9XG4gIH1cblxuICAvLyBIQUNLOiBTaW5jZSBUeXBlU2NyaXB0IGluaGVyaXRzIHN0YXRpYyBwcm9wZXJ0aWVzIHRvbywgd2UgaGF2ZSB0b1xuICAvLyBmaWdodCBhZ2FpbnN0IFR5cGVTY3JpcHQgaGVyZSBzbyBTdWJqZWN0IGNhbiBoYXZlIGEgZGlmZmVyZW50IHN0YXRpYyBjcmVhdGUgc2lnbmF0dXJlXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE9ic2VydmFibGUgYnkgY2FsbGluZyB0aGUgT2JzZXJ2YWJsZSBjb25zdHJ1Y3RvclxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJzY3JpYmU/IHRoZSBzdWJzY3JpYmVyIGZ1bmN0aW9uIHRvIGJlIHBhc3NlZCB0byB0aGUgT2JzZXJ2YWJsZSBjb25zdHJ1Y3RvclxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhIG5ldyBvYnNlcnZhYmxlXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgbmV3IE9ic2VydmFibGUoKWAgaW5zdGVhZC4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgPSA8VD4oc3Vic2NyaWJlPzogKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IFRlYXJkb3duTG9naWMpID0+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oc3Vic2NyaWJlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlLCB3aXRoIHRoaXMgT2JzZXJ2YWJsZSBpbnN0YW5jZSBhcyB0aGUgc291cmNlLCBhbmQgdGhlIHBhc3NlZFxuICAgKiBvcGVyYXRvciBkZWZpbmVkIGFzIHRoZSBuZXcgb2JzZXJ2YWJsZSdzIG9wZXJhdG9yLlxuICAgKiBAbWV0aG9kIGxpZnRcbiAgICogQHBhcmFtIG9wZXJhdG9yIHRoZSBvcGVyYXRvciBkZWZpbmluZyB0aGUgb3BlcmF0aW9uIHRvIHRha2Ugb24gdGhlIG9ic2VydmFibGVcbiAgICogQHJldHVybiBhIG5ldyBvYnNlcnZhYmxlIHdpdGggdGhlIE9wZXJhdG9yIGFwcGxpZWRcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gICAqIElmIHlvdSBoYXZlIGltcGxlbWVudGVkIGFuIG9wZXJhdG9yIHVzaW5nIGBsaWZ0YCwgaXQgaXMgcmVjb21tZW5kZWQgdGhhdCB5b3UgY3JlYXRlIGFuXG4gICAqIG9wZXJhdG9yIGJ5IHNpbXBseSByZXR1cm5pbmcgYG5ldyBPYnNlcnZhYmxlKClgIGRpcmVjdGx5LiBTZWUgXCJDcmVhdGluZyBuZXcgb3BlcmF0b3JzIGZyb21cbiAgICogc2NyYXRjaFwiIHNlY3Rpb24gaGVyZTogaHR0cHM6Ly9yeGpzLmRldi9ndWlkZS9vcGVyYXRvcnNcbiAgICovXG4gIGxpZnQ8Uj4ob3BlcmF0b3I/OiBPcGVyYXRvcjxULCBSPik6IE9ic2VydmFibGU8Uj4ge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxSPigpO1xuICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH1cblxuICBzdWJzY3JpYmUob2JzZXJ2ZXJPck5leHQ/OiBQYXJ0aWFsPE9ic2VydmVyPFQ+PiB8ICgodmFsdWU6IFQpID0+IHZvaWQpKTogU3Vic2NyaXB0aW9uO1xuICAvKiogQGRlcHJlY2F0ZWQgSW5zdGVhZCBvZiBwYXNzaW5nIHNlcGFyYXRlIGNhbGxiYWNrIGFyZ3VtZW50cywgdXNlIGFuIG9ic2VydmVyIGFyZ3VtZW50LiBTaWduYXR1cmVzIHRha2luZyBzZXBhcmF0ZSBjYWxsYmFjayBhcmd1bWVudHMgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zdWJzY3JpYmUtYXJndW1lbnRzICovXG4gIHN1YnNjcmliZShuZXh0PzogKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCBudWxsLCBlcnJvcj86ICgoZXJyb3I6IGFueSkgPT4gdm9pZCkgfCBudWxsLCBjb21wbGV0ZT86ICgoKSA9PiB2b2lkKSB8IG51bGwpOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBJbnZva2VzIGFuIGV4ZWN1dGlvbiBvZiBhbiBPYnNlcnZhYmxlIGFuZCByZWdpc3RlcnMgT2JzZXJ2ZXIgaGFuZGxlcnMgZm9yIG5vdGlmaWNhdGlvbnMgaXQgd2lsbCBlbWl0LlxuICAgKlxuICAgKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+VXNlIGl0IHdoZW4geW91IGhhdmUgYWxsIHRoZXNlIE9ic2VydmFibGVzLCBidXQgc3RpbGwgbm90aGluZyBpcyBoYXBwZW5pbmcuPC9zcGFuPlxuICAgKlxuICAgKiBgc3Vic2NyaWJlYCBpcyBub3QgYSByZWd1bGFyIG9wZXJhdG9yLCBidXQgYSBtZXRob2QgdGhhdCBjYWxscyBPYnNlcnZhYmxlJ3MgaW50ZXJuYWwgYHN1YnNjcmliZWAgZnVuY3Rpb24uIEl0XG4gICAqIG1pZ2h0IGJlIGZvciBleGFtcGxlIGEgZnVuY3Rpb24gdGhhdCB5b3UgcGFzc2VkIHRvIE9ic2VydmFibGUncyBjb25zdHJ1Y3RvciwgYnV0IG1vc3Qgb2YgdGhlIHRpbWUgaXQgaXNcbiAgICogYSBsaWJyYXJ5IGltcGxlbWVudGF0aW9uLCB3aGljaCBkZWZpbmVzIHdoYXQgd2lsbCBiZSBlbWl0dGVkIGJ5IGFuIE9ic2VydmFibGUsIGFuZCB3aGVuIGl0IGJlIHdpbGwgZW1pdHRlZC4gVGhpcyBtZWFuc1xuICAgKiB0aGF0IGNhbGxpbmcgYHN1YnNjcmliZWAgaXMgYWN0dWFsbHkgdGhlIG1vbWVudCB3aGVuIE9ic2VydmFibGUgc3RhcnRzIGl0cyB3b3JrLCBub3Qgd2hlbiBpdCBpcyBjcmVhdGVkLCBhcyBpdCBpcyBvZnRlblxuICAgKiB0aGUgdGhvdWdodC5cbiAgICpcbiAgICogQXBhcnQgZnJvbSBzdGFydGluZyB0aGUgZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUsIHRoaXMgbWV0aG9kIGFsbG93cyB5b3UgdG8gbGlzdGVuIGZvciB2YWx1ZXNcbiAgICogdGhhdCBhbiBPYnNlcnZhYmxlIGVtaXRzLCBhcyB3ZWxsIGFzIGZvciB3aGVuIGl0IGNvbXBsZXRlcyBvciBlcnJvcnMuIFlvdSBjYW4gYWNoaWV2ZSB0aGlzIGluIHR3b1xuICAgKiBvZiB0aGUgZm9sbG93aW5nIHdheXMuXG4gICAqXG4gICAqIFRoZSBmaXJzdCB3YXkgaXMgY3JlYXRpbmcgYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB7QGxpbmsgT2JzZXJ2ZXJ9IGludGVyZmFjZS4gSXQgc2hvdWxkIGhhdmUgbWV0aG9kc1xuICAgKiBkZWZpbmVkIGJ5IHRoYXQgaW50ZXJmYWNlLCBidXQgbm90ZSB0aGF0IGl0IHNob3VsZCBiZSBqdXN0IGEgcmVndWxhciBKYXZhU2NyaXB0IG9iamVjdCwgd2hpY2ggeW91IGNhbiBjcmVhdGVcbiAgICogeW91cnNlbGYgaW4gYW55IHdheSB5b3Ugd2FudCAoRVM2IGNsYXNzLCBjbGFzc2ljIGZ1bmN0aW9uIGNvbnN0cnVjdG9yLCBvYmplY3QgbGl0ZXJhbCBldGMuKS4gSW4gcGFydGljdWxhciwgZG9cbiAgICogbm90IGF0dGVtcHQgdG8gdXNlIGFueSBSeEpTIGltcGxlbWVudGF0aW9uIGRldGFpbHMgdG8gY3JlYXRlIE9ic2VydmVycyAtIHlvdSBkb24ndCBuZWVkIHRoZW0uIFJlbWVtYmVyIGFsc29cbiAgICogdGhhdCB5b3VyIG9iamVjdCBkb2VzIG5vdCBoYXZlIHRvIGltcGxlbWVudCBhbGwgbWV0aG9kcy4gSWYgeW91IGZpbmQgeW91cnNlbGYgY3JlYXRpbmcgYSBtZXRob2QgdGhhdCBkb2Vzbid0XG4gICAqIGRvIGFueXRoaW5nLCB5b3UgY2FuIHNpbXBseSBvbWl0IGl0LiBOb3RlIGhvd2V2ZXIsIGlmIHRoZSBgZXJyb3JgIG1ldGhvZCBpcyBub3QgcHJvdmlkZWQgYW5kIGFuIGVycm9yIGhhcHBlbnMsXG4gICAqIGl0IHdpbGwgYmUgdGhyb3duIGFzeW5jaHJvbm91c2x5LiBFcnJvcnMgdGhyb3duIGFzeW5jaHJvbm91c2x5IGNhbm5vdCBiZSBjYXVnaHQgdXNpbmcgYHRyeWAvYGNhdGNoYC4gSW5zdGVhZCxcbiAgICogdXNlIHRoZSB7QGxpbmsgb25VbmhhbmRsZWRFcnJvcn0gY29uZmlndXJhdGlvbiBvcHRpb24gb3IgdXNlIGEgcnVudGltZSBoYW5kbGVyIChsaWtlIGB3aW5kb3cub25lcnJvcmAgb3JcbiAgICogYHByb2Nlc3Mub24oJ2Vycm9yKWApIHRvIGJlIG5vdGlmaWVkIG9mIHVuaGFuZGxlZCBlcnJvcnMuIEJlY2F1c2Ugb2YgdGhpcywgaXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBwcm92aWRlXG4gICAqIGFuIGBlcnJvcmAgbWV0aG9kIHRvIGF2b2lkIG1pc3NpbmcgdGhyb3duIGVycm9ycy5cbiAgICpcbiAgICogVGhlIHNlY29uZCB3YXkgaXMgdG8gZ2l2ZSB1cCBvbiBPYnNlcnZlciBvYmplY3QgYWx0b2dldGhlciBhbmQgc2ltcGx5IHByb3ZpZGUgY2FsbGJhY2sgZnVuY3Rpb25zIGluIHBsYWNlIG9mIGl0cyBtZXRob2RzLlxuICAgKiBUaGlzIG1lYW5zIHlvdSBjYW4gcHJvdmlkZSB0aHJlZSBmdW5jdGlvbnMgYXMgYXJndW1lbnRzIHRvIGBzdWJzY3JpYmVgLCB3aGVyZSB0aGUgZmlyc3QgZnVuY3Rpb24gaXMgZXF1aXZhbGVudFxuICAgKiBvZiBhIGBuZXh0YCBtZXRob2QsIHRoZSBzZWNvbmQgb2YgYW4gYGVycm9yYCBtZXRob2QgYW5kIHRoZSB0aGlyZCBvZiBhIGBjb21wbGV0ZWAgbWV0aG9kLiBKdXN0IGFzIGluIGNhc2Ugb2YgYW4gT2JzZXJ2ZXIsXG4gICAqIGlmIHlvdSBkbyBub3QgbmVlZCB0byBsaXN0ZW4gZm9yIHNvbWV0aGluZywgeW91IGNhbiBvbWl0IGEgZnVuY3Rpb24gYnkgcGFzc2luZyBgdW5kZWZpbmVkYCBvciBgbnVsbGAsXG4gICAqIHNpbmNlIGBzdWJzY3JpYmVgIHJlY29nbml6ZXMgdGhlc2UgZnVuY3Rpb25zIGJ5IHdoZXJlIHRoZXkgd2VyZSBwbGFjZWQgaW4gZnVuY3Rpb24gY2FsbC4gV2hlbiBpdCBjb21lc1xuICAgKiB0byB0aGUgYGVycm9yYCBmdW5jdGlvbiwgYXMgd2l0aCBhbiBPYnNlcnZlciwgaWYgbm90IHByb3ZpZGVkLCBlcnJvcnMgZW1pdHRlZCBieSBhbiBPYnNlcnZhYmxlIHdpbGwgYmUgdGhyb3duIGFzeW5jaHJvbm91c2x5LlxuICAgKlxuICAgKiBZb3UgY2FuLCBob3dldmVyLCBzdWJzY3JpYmUgd2l0aCBubyBwYXJhbWV0ZXJzIGF0IGFsbC4gVGhpcyBtYXkgYmUgdGhlIGNhc2Ugd2hlcmUgeW91J3JlIG5vdCBpbnRlcmVzdGVkIGluIHRlcm1pbmFsIGV2ZW50c1xuICAgKiBhbmQgeW91IGFsc28gaGFuZGxlZCBlbWlzc2lvbnMgaW50ZXJuYWxseSBieSB1c2luZyBvcGVyYXRvcnMgKGUuZy4gdXNpbmcgYHRhcGApLlxuICAgKlxuICAgKiBXaGljaGV2ZXIgc3R5bGUgb2YgY2FsbGluZyBgc3Vic2NyaWJlYCB5b3UgdXNlLCBpbiBib3RoIGNhc2VzIGl0IHJldHVybnMgYSBTdWJzY3JpcHRpb24gb2JqZWN0LlxuICAgKiBUaGlzIG9iamVjdCBhbGxvd3MgeW91IHRvIGNhbGwgYHVuc3Vic2NyaWJlYCBvbiBpdCwgd2hpY2ggaW4gdHVybiB3aWxsIHN0b3AgdGhlIHdvcmsgdGhhdCBhbiBPYnNlcnZhYmxlIGRvZXMgYW5kIHdpbGwgY2xlYW5cbiAgICogdXAgYWxsIHJlc291cmNlcyB0aGF0IGFuIE9ic2VydmFibGUgdXNlZC4gTm90ZSB0aGF0IGNhbmNlbGxpbmcgYSBzdWJzY3JpcHRpb24gd2lsbCBub3QgY2FsbCBgY29tcGxldGVgIGNhbGxiYWNrXG4gICAqIHByb3ZpZGVkIHRvIGBzdWJzY3JpYmVgIGZ1bmN0aW9uLCB3aGljaCBpcyByZXNlcnZlZCBmb3IgYSByZWd1bGFyIGNvbXBsZXRpb24gc2lnbmFsIHRoYXQgY29tZXMgZnJvbSBhbiBPYnNlcnZhYmxlLlxuICAgKlxuICAgKiBSZW1lbWJlciB0aGF0IGNhbGxiYWNrcyBwcm92aWRlZCB0byBgc3Vic2NyaWJlYCBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5LlxuICAgKiBJdCBpcyBhbiBPYnNlcnZhYmxlIGl0c2VsZiB0aGF0IGRlY2lkZXMgd2hlbiB0aGVzZSBmdW5jdGlvbnMgd2lsbCBiZSBjYWxsZWQuIEZvciBleGFtcGxlIHtAbGluayBvZn1cbiAgICogYnkgZGVmYXVsdCBlbWl0cyBhbGwgaXRzIHZhbHVlcyBzeW5jaHJvbm91c2x5LiBBbHdheXMgY2hlY2sgZG9jdW1lbnRhdGlvbiBmb3IgaG93IGdpdmVuIE9ic2VydmFibGVcbiAgICogd2lsbCBiZWhhdmUgd2hlbiBzdWJzY3JpYmVkIGFuZCBpZiBpdHMgZGVmYXVsdCBiZWhhdmlvciBjYW4gYmUgbW9kaWZpZWQgd2l0aCBhIGBzY2hlZHVsZXJgLlxuICAgKlxuICAgKiAjIyMjIEV4YW1wbGVzXG4gICAqXG4gICAqIFN1YnNjcmliZSB3aXRoIGFuIHtAbGluayBndWlkZS9vYnNlcnZlciBPYnNlcnZlcn1cbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogY29uc3Qgc3VtT2JzZXJ2ZXIgPSB7XG4gICAqICAgc3VtOiAwLFxuICAgKiAgIG5leHQodmFsdWUpIHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdBZGRpbmc6ICcgKyB2YWx1ZSk7XG4gICAqICAgICB0aGlzLnN1bSA9IHRoaXMuc3VtICsgdmFsdWU7XG4gICAqICAgfSxcbiAgICogICBlcnJvcigpIHtcbiAgICogICAgIC8vIFdlIGFjdHVhbGx5IGNvdWxkIGp1c3QgcmVtb3ZlIHRoaXMgbWV0aG9kLFxuICAgKiAgICAgLy8gc2luY2Ugd2UgZG8gbm90IHJlYWxseSBjYXJlIGFib3V0IGVycm9ycyByaWdodCBub3cuXG4gICAqICAgfSxcbiAgICogICBjb21wbGV0ZSgpIHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdTdW0gZXF1YWxzOiAnICsgdGhpcy5zdW0pO1xuICAgKiAgIH1cbiAgICogfTtcbiAgICpcbiAgICogb2YoMSwgMiwgMykgLy8gU3luY2hyb25vdXNseSBlbWl0cyAxLCAyLCAzIGFuZCB0aGVuIGNvbXBsZXRlcy5cbiAgICogICAuc3Vic2NyaWJlKHN1bU9ic2VydmVyKTtcbiAgICpcbiAgICogLy8gTG9nczpcbiAgICogLy8gJ0FkZGluZzogMSdcbiAgICogLy8gJ0FkZGluZzogMidcbiAgICogLy8gJ0FkZGluZzogMydcbiAgICogLy8gJ1N1bSBlcXVhbHM6IDYnXG4gICAqIGBgYFxuICAgKlxuICAgKiBTdWJzY3JpYmUgd2l0aCBmdW5jdGlvbnMgKHtAbGluayBkZXByZWNhdGlvbnMvc3Vic2NyaWJlLWFyZ3VtZW50cyBkZXByZWNhdGVkfSlcbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJ1xuICAgKlxuICAgKiBsZXQgc3VtID0gMDtcbiAgICpcbiAgICogb2YoMSwgMiwgMykuc3Vic2NyaWJlKFxuICAgKiAgIHZhbHVlID0+IHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdBZGRpbmc6ICcgKyB2YWx1ZSk7XG4gICAqICAgICBzdW0gPSBzdW0gKyB2YWx1ZTtcbiAgICogICB9LFxuICAgKiAgIHVuZGVmaW5lZCxcbiAgICogICAoKSA9PiBjb25zb2xlLmxvZygnU3VtIGVxdWFsczogJyArIHN1bSlcbiAgICogKTtcbiAgICpcbiAgICogLy8gTG9nczpcbiAgICogLy8gJ0FkZGluZzogMSdcbiAgICogLy8gJ0FkZGluZzogMidcbiAgICogLy8gJ0FkZGluZzogMydcbiAgICogLy8gJ1N1bSBlcXVhbHM6IDYnXG4gICAqIGBgYFxuICAgKlxuICAgKiBDYW5jZWwgYSBzdWJzY3JpcHRpb25cbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogY29uc3Qgc3Vic2NyaXB0aW9uID0gaW50ZXJ2YWwoMTAwMCkuc3Vic2NyaWJlKHtcbiAgICogICBuZXh0KG51bSkge1xuICAgKiAgICAgY29uc29sZS5sb2cobnVtKVxuICAgKiAgIH0sXG4gICAqICAgY29tcGxldGUoKSB7XG4gICAqICAgICAvLyBXaWxsIG5vdCBiZSBjYWxsZWQsIGV2ZW4gd2hlbiBjYW5jZWxsaW5nIHN1YnNjcmlwdGlvbi5cbiAgICogICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZWQhJyk7XG4gICAqICAgfVxuICAgKiB9KTtcbiAgICpcbiAgICogc2V0VGltZW91dCgoKSA9PiB7XG4gICAqICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAqICAgY29uc29sZS5sb2coJ3Vuc3Vic2NyaWJlZCEnKTtcbiAgICogfSwgMjUwMCk7XG4gICAqXG4gICAqIC8vIExvZ3M6XG4gICAqIC8vIDAgYWZ0ZXIgMXNcbiAgICogLy8gMSBhZnRlciAyc1xuICAgKiAvLyAndW5zdWJzY3JpYmVkIScgYWZ0ZXIgMi41c1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtPYnNlcnZlcnxGdW5jdGlvbn0gb2JzZXJ2ZXJPck5leHQgKG9wdGlvbmFsKSBFaXRoZXIgYW4gb2JzZXJ2ZXIgd2l0aCBtZXRob2RzIHRvIGJlIGNhbGxlZCxcbiAgICogb3IgdGhlIGZpcnN0IG9mIHRocmVlIHBvc3NpYmxlIGhhbmRsZXJzLCB3aGljaCBpcyB0aGUgaGFuZGxlciBmb3IgZWFjaCB2YWx1ZSBlbWl0dGVkIGZyb20gdGhlIHN1YnNjcmliZWRcbiAgICogT2JzZXJ2YWJsZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZXJyb3IgKG9wdGlvbmFsKSBBIGhhbmRsZXIgZm9yIGEgdGVybWluYWwgZXZlbnQgcmVzdWx0aW5nIGZyb20gYW4gZXJyb3IuIElmIG5vIGVycm9yIGhhbmRsZXIgaXMgcHJvdmlkZWQsXG4gICAqIHRoZSBlcnJvciB3aWxsIGJlIHRocm93biBhc3luY2hyb25vdXNseSBhcyB1bmhhbmRsZWQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBsZXRlIChvcHRpb25hbCkgQSBoYW5kbGVyIGZvciBhIHRlcm1pbmFsIGV2ZW50IHJlc3VsdGluZyBmcm9tIHN1Y2Nlc3NmdWwgY29tcGxldGlvbi5cbiAgICogQHJldHVybiB7U3Vic2NyaXB0aW9ufSBhIHN1YnNjcmlwdGlvbiByZWZlcmVuY2UgdG8gdGhlIHJlZ2lzdGVyZWQgaGFuZGxlcnNcbiAgICogQG1ldGhvZCBzdWJzY3JpYmVcbiAgICovXG4gIHN1YnNjcmliZShcbiAgICBvYnNlcnZlck9yTmV4dD86IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+IHwgKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGVycm9yPzogKChlcnJvcjogYW55KSA9PiB2b2lkKSB8IG51bGwsXG4gICAgY29tcGxldGU/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3Qgc3Vic2NyaWJlciA9IGlzU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCkgPyBvYnNlcnZlck9yTmV4dCA6IG5ldyBTYWZlU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcblxuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICBjb25zdCB7IG9wZXJhdG9yLCBzb3VyY2UgfSA9IHRoaXM7XG4gICAgICBzdWJzY3JpYmVyLmFkZChcbiAgICAgICAgb3BlcmF0b3JcbiAgICAgICAgICA/IC8vIFdlJ3JlIGRlYWxpbmcgd2l0aCBhIHN1YnNjcmlwdGlvbiBpbiB0aGVcbiAgICAgICAgICAgIC8vIG9wZXJhdG9yIGNoYWluIHRvIG9uZSBvZiBvdXIgbGlmdGVkIG9wZXJhdG9ycy5cbiAgICAgICAgICAgIG9wZXJhdG9yLmNhbGwoc3Vic2NyaWJlciwgc291cmNlKVxuICAgICAgICAgIDogc291cmNlXG4gICAgICAgICAgPyAvLyBJZiBgc291cmNlYCBoYXMgYSB2YWx1ZSwgYnV0IGBvcGVyYXRvcmAgZG9lcyBub3QsIHNvbWV0aGluZyB0aGF0XG4gICAgICAgICAgICAvLyBoYWQgaW50aW1hdGUga25vd2xlZGdlIG9mIG91ciBBUEksIGxpa2Ugb3VyIGBTdWJqZWN0YCwgbXVzdCBoYXZlXG4gICAgICAgICAgICAvLyBzZXQgaXQuIFdlJ3JlIGdvaW5nIHRvIGp1c3QgY2FsbCBgX3N1YnNjcmliZWAgZGlyZWN0bHkuXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUoc3Vic2NyaWJlcilcbiAgICAgICAgICA6IC8vIEluIGFsbCBvdGhlciBjYXNlcywgd2UncmUgbGlrZWx5IHdyYXBwaW5nIGEgdXNlci1wcm92aWRlZCBpbml0aWFsaXplclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24sIHNvIHdlIG5lZWQgdG8gY2F0Y2ggZXJyb3JzIGFuZCBoYW5kbGUgdGhlbSBhcHByb3ByaWF0ZWx5LlxuICAgICAgICAgICAgdGhpcy5fdHJ5U3Vic2NyaWJlKHN1YnNjcmliZXIpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfdHJ5U3Vic2NyaWJlKHNpbms6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShzaW5rKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gcmV0dXJuIGFueXRoaW5nIGluIHRoaXMgY2FzZSxcbiAgICAgIC8vIGJlY2F1c2UgaXQncyBqdXN0IGdvaW5nIHRvIHRyeSB0byBgYWRkKClgIHRvIGEgc3Vic2NyaXB0aW9uXG4gICAgICAvLyBhYm92ZS5cbiAgICAgIHNpbmsuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlZCBhcyBhIE5PTi1DQU5DRUxMQUJMRSBtZWFucyBvZiBzdWJzY3JpYmluZyB0byBhbiBvYnNlcnZhYmxlLCBmb3IgdXNlIHdpdGhcbiAgICogQVBJcyB0aGF0IGV4cGVjdCBwcm9taXNlcywgbGlrZSBgYXN5bmMvYXdhaXRgLiBZb3UgY2Fubm90IHVuc3Vic2NyaWJlIGZyb20gdGhpcy5cbiAgICpcbiAgICogKipXQVJOSU5HKio6IE9ubHkgdXNlIHRoaXMgd2l0aCBvYnNlcnZhYmxlcyB5b3UgKmtub3cqIHdpbGwgY29tcGxldGUuIElmIHRoZSBzb3VyY2VcbiAgICogb2JzZXJ2YWJsZSBkb2VzIG5vdCBjb21wbGV0ZSwgeW91IHdpbGwgZW5kIHVwIHdpdGggYSBwcm9taXNlIHRoYXQgaXMgaHVuZyB1cCwgYW5kXG4gICAqIHBvdGVudGlhbGx5IGFsbCBvZiB0aGUgc3RhdGUgb2YgYW4gYXN5bmMgZnVuY3Rpb24gaGFuZ2luZyBvdXQgaW4gbWVtb3J5LiBUbyBhdm9pZFxuICAgKiB0aGlzIHNpdHVhdGlvbiwgbG9vayBpbnRvIGFkZGluZyBzb21ldGhpbmcgbGlrZSB7QGxpbmsgdGltZW91dH0sIHtAbGluayB0YWtlfSxcbiAgICoge0BsaW5rIHRha2VXaGlsZX0sIG9yIHtAbGluayB0YWtlVW50aWx9IGFtb25nc3Qgb3RoZXJzLlxuICAgKlxuICAgKiAjIyMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UgfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSg0KSk7XG4gICAqXG4gICAqIGFzeW5jIGZ1bmN0aW9uIGdldFRvdGFsKCkge1xuICAgKiAgIGxldCB0b3RhbCA9IDA7XG4gICAqXG4gICAqICAgYXdhaXQgc291cmNlJC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICogICAgIHRvdGFsICs9IHZhbHVlO1xuICAgKiAgICAgY29uc29sZS5sb2coJ29ic2VydmFibGUgLT4gJyArIHZhbHVlKTtcbiAgICogICB9KTtcbiAgICpcbiAgICogICByZXR1cm4gdG90YWw7XG4gICAqIH1cbiAgICpcbiAgICogZ2V0VG90YWwoKS50aGVuKFxuICAgKiAgIHRvdGFsID0+IGNvbnNvbGUubG9nKCdUb3RhbDogJyArIHRvdGFsKVxuICAgKiApO1xuICAgKlxuICAgKiAvLyBFeHBlY3RlZDpcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMCdcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMSdcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMidcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMydcbiAgICogLy8gJ1RvdGFsOiA2J1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIG5leHQgYSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIG9ic2VydmFibGVcbiAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCBlaXRoZXIgcmVzb2x2ZXMgb24gb2JzZXJ2YWJsZSBjb21wbGV0aW9uIG9yXG4gICAqICByZWplY3RzIHdpdGggdGhlIGhhbmRsZWQgZXJyb3JcbiAgICovXG4gIGZvckVhY2gobmV4dDogKHZhbHVlOiBUKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQHBhcmFtIG5leHQgYSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIG9ic2VydmFibGVcbiAgICogQHBhcmFtIHByb21pc2VDdG9yIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gdXNlZCB0byBpbnN0YW50aWF0ZSB0aGUgUHJvbWlzZVxuICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB0aGF0IGVpdGhlciByZXNvbHZlcyBvbiBvYnNlcnZhYmxlIGNvbXBsZXRpb24gb3JcbiAgICogIHJlamVjdHMgd2l0aCB0aGUgaGFuZGxlZCBlcnJvclxuICAgKiBAZGVwcmVjYXRlZCBQYXNzaW5nIGEgUHJvbWlzZSBjb25zdHJ1Y3RvciB3aWxsIG5vIGxvbmdlciBiZSBhdmFpbGFibGVcbiAgICogaW4gdXBjb21pbmcgdmVyc2lvbnMgb2YgUnhKUy4gVGhpcyBpcyBiZWNhdXNlIGl0IGFkZHMgd2VpZ2h0IHRvIHRoZSBsaWJyYXJ5LCBmb3IgdmVyeVxuICAgKiBsaXR0bGUgYmVuZWZpdC4gSWYgeW91IG5lZWQgdGhpcyBmdW5jdGlvbmFsaXR5LCBpdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSBlaXRoZXJcbiAgICogcG9seWZpbGwgUHJvbWlzZSwgb3IgeW91IGNyZWF0ZSBhbiBhZGFwdGVyIHRvIGNvbnZlcnQgdGhlIHJldHVybmVkIG5hdGl2ZSBwcm9taXNlXG4gICAqIHRvIHdoYXRldmVyIHByb21pc2UgaW1wbGVtZW50YXRpb24geW91IHdhbnRlZC4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgZm9yRWFjaChuZXh0OiAodmFsdWU6IFQpID0+IHZvaWQsIHByb21pc2VDdG9yOiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTx2b2lkPjtcblxuICBmb3JFYWNoKG5leHQ6ICh2YWx1ZTogVCkgPT4gdm9pZCwgcHJvbWlzZUN0b3I/OiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG5cbiAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBuZXcgU2FmZVN1YnNjcmliZXI8VD4oe1xuICAgICAgICBuZXh0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgIGNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9KSBhcyBQcm9taXNlPHZvaWQ+O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2U/LnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBpbnRlcm9wIHBvaW50IGRlZmluZWQgYnkgdGhlIGVzNy1vYnNlcnZhYmxlIHNwZWMgaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtb2JzZXJ2YWJsZVxuICAgKiBAbWV0aG9kIFN5bWJvbC5vYnNlcnZhYmxlXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IHRoaXMgaW5zdGFuY2Ugb2YgdGhlIG9ic2VydmFibGVcbiAgICovXG4gIFtTeW1ib2xfb2JzZXJ2YWJsZV0oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbiAgcGlwZSgpOiBPYnNlcnZhYmxlPFQ+O1xuICBwaXBlPEE+KG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPik6IE9ic2VydmFibGU8QT47XG4gIHBpcGU8QSwgQj4ob3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LCBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4pOiBPYnNlcnZhYmxlPEI+O1xuICBwaXBlPEEsIEIsIEM+KG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPiwgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LCBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4pOiBPYnNlcnZhYmxlPEM+O1xuICBwaXBlPEEsIEIsIEMsIEQ+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPlxuICApOiBPYnNlcnZhYmxlPEQ+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEU+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT5cbiAgKTogT2JzZXJ2YWJsZTxFPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPlxuICApOiBPYnNlcnZhYmxlPEY+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEc+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPlxuICApOiBPYnNlcnZhYmxlPEc+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPixcbiAgICBvcDg6IE9wZXJhdG9yRnVuY3Rpb248RywgSD5cbiAgKTogT2JzZXJ2YWJsZTxIPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz4sXG4gICAgb3A4OiBPcGVyYXRvckZ1bmN0aW9uPEcsIEg+LFxuICAgIG9wOTogT3BlcmF0b3JGdW5jdGlvbjxILCBJPlxuICApOiBPYnNlcnZhYmxlPEk+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPixcbiAgICBvcDg6IE9wZXJhdG9yRnVuY3Rpb248RywgSD4sXG4gICAgb3A5OiBPcGVyYXRvckZ1bmN0aW9uPEgsIEk+LFxuICAgIC4uLm9wZXJhdGlvbnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W11cbiAgKTogT2JzZXJ2YWJsZTx1bmtub3duPjtcbiAgLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuICAvKipcbiAgICogVXNlZCB0byBzdGl0Y2ggdG9nZXRoZXIgZnVuY3Rpb25hbCBvcGVyYXRvcnMgaW50byBhIGNoYWluLlxuICAgKiBAbWV0aG9kIHBpcGVcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gdGhlIE9ic2VydmFibGUgcmVzdWx0IG9mIGFsbCBvZiB0aGUgb3BlcmF0b3JzIGhhdmluZ1xuICAgKiBiZWVuIGNhbGxlZCBpbiB0aGUgb3JkZXIgdGhleSB3ZXJlIHBhc3NlZCBpbi5cbiAgICpcbiAgICogIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBpbXBvcnQgeyBpbnRlcnZhbCwgZmlsdGVyLCBtYXAsIHNjYW4gfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogaW50ZXJ2YWwoMTAwMClcbiAgICogICAucGlwZShcbiAgICogICAgIGZpbHRlcih4ID0+IHggJSAyID09PSAwKSxcbiAgICogICAgIG1hcCh4ID0+IHggKyB4KSxcbiAgICogICAgIHNjYW4oKGFjYywgeCkgPT4gYWNjICsgeClcbiAgICogICApXG4gICAqICAgLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICogYGBgXG4gICAqL1xuICBwaXBlKC4uLm9wZXJhdGlvbnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBwaXBlRnJvbUFycmF5KG9wZXJhdGlvbnMpKHRoaXMpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4gIC8qKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHtAbGluayBmaXJzdFZhbHVlRnJvbX0gYW5kIHtAbGluayBsYXN0VmFsdWVGcm9tfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy90by1wcm9taXNlICovXG4gIHRvUHJvbWlzZSgpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+O1xuICAvKiogQGRlcHJlY2F0ZWQgUmVwbGFjZWQgd2l0aCB7QGxpbmsgZmlyc3RWYWx1ZUZyb219IGFuZCB7QGxpbmsgbGFzdFZhbHVlRnJvbX0uIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvdG8tcHJvbWlzZSAqL1xuICB0b1Byb21pc2UoUHJvbWlzZUN0b3I6IHR5cGVvZiBQcm9taXNlKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgLyoqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2UgKi9cbiAgdG9Qcm9taXNlKFByb21pc2VDdG9yOiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoaXMgT2JzZXJ2YWJsZSBhbmQgZ2V0IGEgUHJvbWlzZSByZXNvbHZpbmcgb25cbiAgICogYGNvbXBsZXRlYCB3aXRoIHRoZSBsYXN0IGVtaXNzaW9uIChpZiBhbnkpLlxuICAgKlxuICAgKiAqKldBUk5JTkcqKjogT25seSB1c2UgdGhpcyB3aXRoIG9ic2VydmFibGVzIHlvdSAqa25vdyogd2lsbCBjb21wbGV0ZS4gSWYgdGhlIHNvdXJjZVxuICAgKiBvYnNlcnZhYmxlIGRvZXMgbm90IGNvbXBsZXRlLCB5b3Ugd2lsbCBlbmQgdXAgd2l0aCBhIHByb21pc2UgdGhhdCBpcyBodW5nIHVwLCBhbmRcbiAgICogcG90ZW50aWFsbHkgYWxsIG9mIHRoZSBzdGF0ZSBvZiBhbiBhc3luYyBmdW5jdGlvbiBoYW5naW5nIG91dCBpbiBtZW1vcnkuIFRvIGF2b2lkXG4gICAqIHRoaXMgc2l0dWF0aW9uLCBsb29rIGludG8gYWRkaW5nIHNvbWV0aGluZyBsaWtlIHtAbGluayB0aW1lb3V0fSwge0BsaW5rIHRha2V9LFxuICAgKiB7QGxpbmsgdGFrZVdoaWxlfSwgb3Ige0BsaW5rIHRha2VVbnRpbH0gYW1vbmdzdCBvdGhlcnMuXG4gICAqXG4gICAqIEBtZXRob2QgdG9Qcm9taXNlXG4gICAqIEBwYXJhbSBbcHJvbWlzZUN0b3JdIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gdXNlZCB0byBpbnN0YW50aWF0ZVxuICAgKiB0aGUgUHJvbWlzZVxuICAgKiBAcmV0dXJuIEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxhc3QgdmFsdWUgZW1pdCwgb3JcbiAgICogcmVqZWN0cyBvbiBhbiBlcnJvci4gSWYgdGhlcmUgd2VyZSBubyBlbWlzc2lvbnMsIFByb21pc2VcbiAgICogcmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQuXG4gICAqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2VcbiAgICovXG4gIHRvUHJvbWlzZShwcm9taXNlQ3Rvcj86IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+IHtcbiAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcblxuICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHZhbHVlOiBUIHwgdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zdWJzY3JpYmUoXG4gICAgICAgICh4OiBUKSA9PiAodmFsdWUgPSB4KSxcbiAgICAgICAgKGVycjogYW55KSA9PiByZWplY3QoZXJyKSxcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSh2YWx1ZSlcbiAgICAgICk7XG4gICAgfSkgYXMgUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgfVxufVxuXG4vKipcbiAqIERlY2lkZXMgYmV0d2VlbiBhIHBhc3NlZCBwcm9taXNlIGNvbnN0cnVjdG9yIGZyb20gY29uc3VtaW5nIGNvZGUsXG4gKiBBIGRlZmF1bHQgY29uZmlndXJlZCBwcm9taXNlIGNvbnN0cnVjdG9yLCBhbmQgdGhlIG5hdGl2ZSBwcm9taXNlXG4gKiBjb25zdHJ1Y3RvciBhbmQgcmV0dXJucyBpdC4gSWYgbm90aGluZyBjYW4gYmUgZm91bmQsIGl0IHdpbGwgdGhyb3dcbiAqIGFuIGVycm9yLlxuICogQHBhcmFtIHByb21pc2VDdG9yIFRoZSBvcHRpb25hbCBwcm9taXNlIGNvbnN0cnVjdG9yIHRvIHBhc3NlZCBieSBjb25zdW1pbmcgY29kZVxuICovXG5mdW5jdGlvbiBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3RvcjogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSB8IHVuZGVmaW5lZCkge1xuICByZXR1cm4gcHJvbWlzZUN0b3IgPz8gY29uZmlnLlByb21pc2UgPz8gUHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gaXNPYnNlcnZlcjxUPih2YWx1ZTogYW55KTogdmFsdWUgaXMgT2JzZXJ2ZXI8VD4ge1xuICByZXR1cm4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5uZXh0KSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmVycm9yKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmNvbXBsZXRlKTtcbn1cblxuZnVuY3Rpb24gaXNTdWJzY3JpYmVyPFQ+KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdWJzY3JpYmVyPFQ+IHtcbiAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHx8IChpc09ic2VydmVyKHZhbHVlKSAmJiBpc1N1YnNjcmlwdGlvbih2YWx1ZSkpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuLyoqXG4gKiBVc2VkIHRvIGRldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYW4gT2JzZXJ2YWJsZSB3aXRoIGEgbGlmdCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpZnQoc291cmNlOiBhbnkpOiBzb3VyY2UgaXMgeyBsaWZ0OiBJbnN0YW5jZVR5cGU8dHlwZW9mIE9ic2VydmFibGU+WydsaWZ0J10gfSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKHNvdXJjZT8ubGlmdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBgT3BlcmF0b3JGdW5jdGlvbmAuIFVzZWQgdG8gZGVmaW5lIG9wZXJhdG9ycyB0aHJvdWdob3V0IHRoZSBsaWJyYXJ5IGluIGEgY29uY2lzZSB3YXkuXG4gKiBAcGFyYW0gaW5pdCBUaGUgbG9naWMgdG8gY29ubmVjdCB0aGUgbGlmdGVkU291cmNlIHRvIHRoZSBzdWJzY3JpYmVyIGF0IHRoZSBtb21lbnQgb2Ygc3Vic2NyaXB0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3BlcmF0ZTxULCBSPihcbiAgaW5pdDogKGxpZnRlZFNvdXJjZTogT2JzZXJ2YWJsZTxUPiwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxSPikgPT4gKCgpID0+IHZvaWQpIHwgdm9pZFxuKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPiB7XG4gIHJldHVybiAoc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiB7XG4gICAgaWYgKGhhc0xpZnQoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KGZ1bmN0aW9uICh0aGlzOiBTdWJzY3JpYmVyPFI+LCBsaWZ0ZWRTb3VyY2U6IE9ic2VydmFibGU8VD4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gaW5pdChsaWZ0ZWRTb3VyY2UsIHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aGlzLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmFibGUgdG8gbGlmdCB1bmtub3duIE9ic2VydmFibGUgdHlwZScpO1xuICB9O1xufVxuIiwgImltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGFuIGBPcGVyYXRvclN1YnNjcmliZXJgLlxuICogQHBhcmFtIGRlc3RpbmF0aW9uIFRoZSBkb3duc3RyZWFtIHN1YnNjcmliZXIuXG4gKiBAcGFyYW0gb25OZXh0IEhhbmRsZXMgbmV4dCB2YWx1ZXMsIG9ubHkgY2FsbGVkIGlmIHRoaXMgc3Vic2NyaWJlciBpcyBub3Qgc3RvcHBlZCBvciBjbG9zZWQuIEFueVxuICogZXJyb3IgdGhhdCBvY2N1cnMgaW4gdGhpcyBmdW5jdGlvbiBpcyBjYXVnaHQgYW5kIHNlbnQgdG8gdGhlIGBlcnJvcmAgbWV0aG9kIG9mIHRoaXMgc3Vic2NyaWJlci5cbiAqIEBwYXJhbSBvbkVycm9yIEhhbmRsZXMgZXJyb3JzIGZyb20gdGhlIHN1YnNjcmlwdGlvbiwgYW55IGVycm9ycyB0aGF0IG9jY3VyIGluIHRoaXMgaGFuZGxlciBhcmUgY2F1Z2h0XG4gKiBhbmQgc2VuZCB0byB0aGUgYGRlc3RpbmF0aW9uYCBlcnJvciBoYW5kbGVyLlxuICogQHBhcmFtIG9uQ29tcGxldGUgSGFuZGxlcyBjb21wbGV0aW9uIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBzdWJzY3JpcHRpb24uIEFueSBlcnJvcnMgdGhhdCBvY2N1ciBpblxuICogdGhpcyBoYW5kbGVyIGFyZSBzZW50IHRvIHRoZSBgZGVzdGluYXRpb25gIGVycm9yIGhhbmRsZXIuXG4gKiBAcGFyYW0gb25GaW5hbGl6ZSBBZGRpdGlvbmFsIHRlYXJkb3duIGxvZ2ljIGhlcmUuIFRoaXMgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbiB0ZWFyZG93biBpZiB0aGVcbiAqIHN1YnNjcmliZXIgaXRzZWxmIGlzIG5vdCBhbHJlYWR5IGNsb3NlZC4gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYWxsIG90aGVyIHRlYXJkb3duIGxvZ2ljIGlzIGV4ZWN1dGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyPFQ+KFxuICBkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxhbnk+LFxuICBvbk5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG4gIG9uQ29tcGxldGU/OiAoKSA9PiB2b2lkLFxuICBvbkVycm9yPzogKGVycjogYW55KSA9PiB2b2lkLFxuICBvbkZpbmFsaXplPzogKCkgPT4gdm9pZFxuKTogU3Vic2NyaWJlcjxUPiB7XG4gIHJldHVybiBuZXcgT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUpO1xufVxuXG4vKipcbiAqIEEgZ2VuZXJpYyBoZWxwZXIgZm9yIGFsbG93aW5nIG9wZXJhdG9ycyB0byBiZSBjcmVhdGVkIHdpdGggYSBTdWJzY3JpYmVyIGFuZFxuICogdXNlIGNsb3N1cmVzIHRvIGNhcHR1cmUgbmVjZXNzYXJ5IHN0YXRlIGZyb20gdGhlIG9wZXJhdG9yIGZ1bmN0aW9uIGl0c2VsZi5cbiAqL1xuZXhwb3J0IGNsYXNzIE9wZXJhdG9yU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhbiBgT3BlcmF0b3JTdWJzY3JpYmVyYC5cbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uIFRoZSBkb3duc3RyZWFtIHN1YnNjcmliZXIuXG4gICAqIEBwYXJhbSBvbk5leHQgSGFuZGxlcyBuZXh0IHZhbHVlcywgb25seSBjYWxsZWQgaWYgdGhpcyBzdWJzY3JpYmVyIGlzIG5vdCBzdG9wcGVkIG9yIGNsb3NlZC4gQW55XG4gICAqIGVycm9yIHRoYXQgb2NjdXJzIGluIHRoaXMgZnVuY3Rpb24gaXMgY2F1Z2h0IGFuZCBzZW50IHRvIHRoZSBgZXJyb3JgIG1ldGhvZCBvZiB0aGlzIHN1YnNjcmliZXIuXG4gICAqIEBwYXJhbSBvbkVycm9yIEhhbmRsZXMgZXJyb3JzIGZyb20gdGhlIHN1YnNjcmlwdGlvbiwgYW55IGVycm9ycyB0aGF0IG9jY3VyIGluIHRoaXMgaGFuZGxlciBhcmUgY2F1Z2h0XG4gICAqIGFuZCBzZW5kIHRvIHRoZSBgZGVzdGluYXRpb25gIGVycm9yIGhhbmRsZXIuXG4gICAqIEBwYXJhbSBvbkNvbXBsZXRlIEhhbmRsZXMgY29tcGxldGlvbiBub3RpZmljYXRpb24gZnJvbSB0aGUgc3Vic2NyaXB0aW9uLiBBbnkgZXJyb3JzIHRoYXQgb2NjdXIgaW5cbiAgICogdGhpcyBoYW5kbGVyIGFyZSBzZW50IHRvIHRoZSBgZGVzdGluYXRpb25gIGVycm9yIGhhbmRsZXIuXG4gICAqIEBwYXJhbSBvbkZpbmFsaXplIEFkZGl0aW9uYWwgZmluYWxpemF0aW9uIGxvZ2ljIGhlcmUuIFRoaXMgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbiBmaW5hbGl6YXRpb24gaWYgdGhlXG4gICAqIHN1YnNjcmliZXIgaXRzZWxmIGlzIG5vdCBhbHJlYWR5IGNsb3NlZC4gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYWxsIG90aGVyIGZpbmFsaXphdGlvbiBsb2dpYyBpcyBleGVjdXRlZC5cbiAgICogQHBhcmFtIHNob3VsZFVuc3Vic2NyaWJlIEFuIG9wdGlvbmFsIGNoZWNrIHRvIHNlZSBpZiBhbiB1bnN1YnNjcmliZSBjYWxsIHNob3VsZCB0cnVseSB1bnN1YnNjcmliZS5cbiAgICogTk9URTogVGhpcyBjdXJyZW50bHkgKipPTkxZKiogZXhpc3RzIHRvIHN1cHBvcnQgdGhlIHN0cmFuZ2UgYmVoYXZpb3Igb2Yge0BsaW5rIGdyb3VwQnl9LCB3aGVyZSB1bnN1YnNjcmlwdGlvblxuICAgKiB0byB0aGUgcmVzdWx0aW5nIG9ic2VydmFibGUgZG9lcyBub3QgYWN0dWFsbHkgZGlzY29ubmVjdCBmcm9tIHRoZSBzb3VyY2UgaWYgdGhlcmUgYXJlIGFjdGl2ZSBzdWJzY3JpcHRpb25zXG4gICAqIHRvIGFueSBncm91cGVkIG9ic2VydmFibGUuIChETyBOT1QgRVhQT1NFIE9SIFVTRSBFWFRFUk5BTExZISEhKVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55PixcbiAgICBvbk5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG4gICAgb25Db21wbGV0ZT86ICgpID0+IHZvaWQsXG4gICAgb25FcnJvcj86IChlcnI6IGFueSkgPT4gdm9pZCxcbiAgICBwcml2YXRlIG9uRmluYWxpemU/OiAoKSA9PiB2b2lkLFxuICAgIHByaXZhdGUgc2hvdWxkVW5zdWJzY3JpYmU/OiAoKSA9PiBib29sZWFuXG4gICkge1xuICAgIC8vIEl0J3MgaW1wb3J0YW50IC0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgLSB0aGF0IGFsbCBvZiB0aGlzIGNsYXNzJ3NcbiAgICAvLyBtZW1iZXJzIGFyZSBpbml0aWFsaXplZCBhbmQgdGhhdCB0aGV5IGFyZSBhbHdheXMgaW5pdGlhbGl6ZWQgaW4gdGhlIHNhbWVcbiAgICAvLyBvcmRlci4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGFsbCBPcGVyYXRvclN1YnNjcmliZXIgaW5zdGFuY2VzIGhhdmUgdGhlXG4gICAgLy8gc2FtZSBoaWRkZW4gY2xhc3MgaW4gVjguIFRoaXMsIGluIHR1cm4sIHdpbGwgaGVscCBrZWVwIHRoZSBudW1iZXIgb2ZcbiAgICAvLyBoaWRkZW4gY2xhc3NlcyBpbnZvbHZlZCBpbiBwcm9wZXJ0eSBhY2Nlc3NlcyB3aXRoaW4gdGhlIGJhc2UgY2xhc3MgYXNcbiAgICAvLyBsb3cgYXMgcG9zc2libGUuIElmIHRoZSBudW1iZXIgb2YgaGlkZGVuIGNsYXNzZXMgaW52b2x2ZWQgZXhjZWVkcyBmb3VyLFxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhY2Nlc3NlcyB3aWxsIGJlY29tZSBtZWdhbW9ycGhpYyBhbmQgcGVyZm9ybWFuY2UgcGVuYWx0aWVzXG4gICAgLy8gd2lsbCBiZSBpbmN1cnJlZCAtIGkuZS4gaW5saW5lIGNhY2hlcyB3b24ndCBiZSB1c2VkLlxuICAgIC8vXG4gICAgLy8gVGhlIHJlYXNvbnMgZm9yIGVuc3VyaW5nIGFsbCBpbnN0YW5jZXMgaGF2ZSB0aGUgc2FtZSBoaWRkZW4gY2xhc3MgYXJlXG4gICAgLy8gZnVydGhlciBkaXNjdXNzZWQgaW4gdGhpcyBibG9nIHBvc3QgZnJvbSBCZW5lZGlrdCBNZXVyZXI6XG4gICAgLy8gaHR0cHM6Ly9iZW5lZGlrdG1ldXJlci5kZS8yMDE4LzAzLzIzL2ltcGFjdC1vZi1wb2x5bW9ycGhpc20tb24tY29tcG9uZW50LWJhc2VkLWZyYW1ld29ya3MtbGlrZS1yZWFjdC9cbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gICAgdGhpcy5fbmV4dCA9IG9uTmV4dFxuICAgICAgPyBmdW5jdGlvbiAodGhpczogT3BlcmF0b3JTdWJzY3JpYmVyPFQ+LCB2YWx1ZTogVCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvbk5leHQodmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDogc3VwZXIuX25leHQ7XG4gICAgdGhpcy5fZXJyb3IgPSBvbkVycm9yXG4gICAgICA/IGZ1bmN0aW9uICh0aGlzOiBPcGVyYXRvclN1YnNjcmliZXI8VD4sIGVycjogYW55KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIFNlbmQgYW55IGVycm9ycyB0aGF0IG9jY3VyIGRvd24gc3RyZWFtLlxuICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGZpbmFsaXphdGlvbi5cbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDogc3VwZXIuX2Vycm9yO1xuICAgIHRoaXMuX2NvbXBsZXRlID0gb25Db21wbGV0ZVxuICAgICAgPyBmdW5jdGlvbiAodGhpczogT3BlcmF0b3JTdWJzY3JpYmVyPFQ+KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIFNlbmQgYW55IGVycm9ycyB0aGF0IG9jY3VyIGRvd24gc3RyZWFtLlxuICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGZpbmFsaXphdGlvbi5cbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDogc3VwZXIuX2NvbXBsZXRlO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLnNob3VsZFVuc3Vic2NyaWJlIHx8IHRoaXMuc2hvdWxkVW5zdWJzY3JpYmUoKSkge1xuICAgICAgY29uc3QgeyBjbG9zZWQgfSA9IHRoaXM7XG4gICAgICBzdXBlci51bnN1YnNjcmliZSgpO1xuICAgICAgLy8gRXhlY3V0ZSBhZGRpdGlvbmFsIHRlYXJkb3duIGlmIHdlIGhhdmUgYW55IGFuZCB3ZSBkaWRuJ3QgYWxyZWFkeSBkbyBzby5cbiAgICAgICFjbG9zZWQgJiYgdGhpcy5vbkZpbmFsaXplPy4oKTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RVbnN1YnNjcmliZWRFcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JDdG9yIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbC4gRG8gbm90IGNvbnN0cnVjdCBlcnJvciBpbnN0YW5jZXMuXG4gICAqIENhbm5vdCBiZSB0YWdnZWQgYXMgaW50ZXJuYWw6IGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdGl2ZVgvcnhqcy9pc3N1ZXMvNjI2OVxuICAgKi9cbiAgbmV3ICgpOiBPYmplY3RVbnN1YnNjcmliZWRFcnJvcjtcbn1cblxuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiBhbiBhY3Rpb24gaXMgaW52YWxpZCBiZWNhdXNlIHRoZSBvYmplY3QgaGFzIGJlZW5cbiAqIHVuc3Vic2NyaWJlZC5cbiAqXG4gKiBAc2VlIHtAbGluayBTdWJqZWN0fVxuICogQHNlZSB7QGxpbmsgQmVoYXZpb3JTdWJqZWN0fVxuICpcbiAqIEBjbGFzcyBPYmplY3RVbnN1YnNjcmliZWRFcnJvclxuICovXG5leHBvcnQgY29uc3QgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3I6IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yQ3RvciA9IGNyZWF0ZUVycm9yQ2xhc3MoXG4gIChfc3VwZXIpID0+XG4gICAgZnVuY3Rpb24gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsKHRoaXM6IGFueSkge1xuICAgICAgX3N1cGVyKHRoaXMpO1xuICAgICAgdGhpcy5uYW1lID0gJ09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbiAgICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICB9XG4pO1xuIiwgImltcG9ydCB7IE9wZXJhdG9yIH0gZnJvbSAnLi9PcGVyYXRvcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBFTVBUWV9TVUJTQ1JJUFRJT04gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZlciwgU3Vic2NyaXB0aW9uTGlrZSwgVGVhcmRvd25Mb2dpYyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgfSBmcm9tICcuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcblxuLyoqXG4gKiBBIFN1YmplY3QgaXMgYSBzcGVjaWFsIHR5cGUgb2YgT2JzZXJ2YWJsZSB0aGF0IGFsbG93cyB2YWx1ZXMgdG8gYmVcbiAqIG11bHRpY2FzdGVkIHRvIG1hbnkgT2JzZXJ2ZXJzLiBTdWJqZWN0cyBhcmUgbGlrZSBFdmVudEVtaXR0ZXJzLlxuICpcbiAqIEV2ZXJ5IFN1YmplY3QgaXMgYW4gT2JzZXJ2YWJsZSBhbmQgYW4gT2JzZXJ2ZXIuIFlvdSBjYW4gc3Vic2NyaWJlIHRvIGFcbiAqIFN1YmplY3QsIGFuZCB5b3UgY2FuIGNhbGwgbmV4dCB0byBmZWVkIHZhbHVlcyBhcyB3ZWxsIGFzIGVycm9yIGFuZCBjb21wbGV0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFN1YmplY3Q8VD4gZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IGltcGxlbWVudHMgU3Vic2NyaXB0aW9uTGlrZSB7XG4gIGNsb3NlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY3VycmVudE9ic2VydmVyczogT2JzZXJ2ZXI8VD5bXSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgb2JzZXJ2ZXJzOiBPYnNlcnZlcjxUPltdID0gW107XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgaXNTdG9wcGVkID0gZmFsc2U7XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgaGFzRXJyb3IgPSBmYWxzZTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICB0aHJvd25FcnJvcjogYW55ID0gbnVsbDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFwic3ViamVjdFwiIGJ5IGJhc2ljYWxseSBnbHVpbmcgYW4gb2JzZXJ2ZXIgdG8gYW4gb2JzZXJ2YWJsZS5cbiAgICpcbiAgICogQG5vY29sbGFwc2VcbiAgICogQGRlcHJlY2F0ZWQgUmVjb21tZW5kZWQgeW91IGRvIG5vdCB1c2UuIFdpbGwgYmUgcmVtb3ZlZCBhdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUuIFBsYW5zIGZvciByZXBsYWNlbWVudCBzdGlsbCB1bmRlciBkaXNjdXNzaW9uLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgPSA8VD4oZGVzdGluYXRpb246IE9ic2VydmVyPFQ+LCBzb3VyY2U6IE9ic2VydmFibGU8VD4pOiBBbm9ueW1vdXNTdWJqZWN0PFQ+ID0+IHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c1N1YmplY3Q8VD4oZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gTk9URTogVGhpcyBtdXN0IGJlIGhlcmUgdG8gb2JzY3VyZSBPYnNlcnZhYmxlJ3MgY29uc3RydWN0b3IuXG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgbGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8VCwgUj4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBjb25zdCBzdWJqZWN0ID0gbmV3IEFub255bW91c1N1YmplY3QodGhpcywgdGhpcyk7XG4gICAgc3ViamVjdC5vcGVyYXRvciA9IG9wZXJhdG9yIGFzIGFueTtcbiAgICByZXR1cm4gc3ViamVjdCBhcyBhbnk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfdGhyb3dJZkNsb3NlZCgpIHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQodmFsdWU6IFQpIHtcbiAgICBlcnJvckNvbnRleHQoKCkgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudE9ic2VydmVycykge1xuICAgICAgICAgIHRoaXMuY3VycmVudE9ic2VydmVycyA9IEFycmF5LmZyb20odGhpcy5vYnNlcnZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGVycm9yKGVycjogYW55KSB7XG4gICAgZXJyb3JDb250ZXh0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aHJvd25FcnJvciA9IGVycjtcbiAgICAgICAgY29uc3QgeyBvYnNlcnZlcnMgfSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgb2JzZXJ2ZXJzLnNoaWZ0KCkhLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgeyBvYnNlcnZlcnMgfSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgb2JzZXJ2ZXJzLnNoaWZ0KCkhLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuaXNTdG9wcGVkID0gdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIHRoaXMub2JzZXJ2ZXJzID0gdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbCE7XG4gIH1cblxuICBnZXQgb2JzZXJ2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzPy5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgIHJldHVybiBzdXBlci5fdHJ5U3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgdGhpcy5fY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyhzdWJzY3JpYmVyKTtcbiAgICByZXR1cm4gdGhpcy5faW5uZXJTdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfaW5uZXJTdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSB7XG4gICAgY29uc3QgeyBoYXNFcnJvciwgaXNTdG9wcGVkLCBvYnNlcnZlcnMgfSA9IHRoaXM7XG4gICAgaWYgKGhhc0Vycm9yIHx8IGlzU3RvcHBlZCkge1xuICAgICAgcmV0dXJuIEVNUFRZX1NVQlNDUklQVElPTjtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbDtcbiAgICBvYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgICAgYXJyUmVtb3ZlKG9ic2VydmVycywgc3Vic2NyaWJlcik7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyhzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pIHtcbiAgICBjb25zdCB7IGhhc0Vycm9yLCB0aHJvd25FcnJvciwgaXNTdG9wcGVkIH0gPSB0aGlzO1xuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgc3Vic2NyaWJlci5lcnJvcih0aHJvd25FcnJvcik7XG4gICAgfSBlbHNlIGlmIChpc1N0b3BwZWQpIHtcbiAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlIHdpdGggdGhpcyBTdWJqZWN0IGFzIHRoZSBzb3VyY2UuIFlvdSBjYW4gZG8gdGhpc1xuICAgKiB0byBjcmVhdGUgY3VzdG9tIE9ic2VydmVyLXNpZGUgbG9naWMgb2YgdGhlIFN1YmplY3QgYW5kIGNvbmNlYWwgaXQgZnJvbVxuICAgKiBjb2RlIHRoYXQgdXNlcyB0aGUgT2JzZXJ2YWJsZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gT2JzZXJ2YWJsZSB0aGF0IHRoZSBTdWJqZWN0IGNhc3RzIHRvXG4gICAqL1xuICBhc09ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZTogYW55ID0gbmV3IE9ic2VydmFibGU8VD4oKTtcbiAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgQW5vbnltb3VzU3ViamVjdDxUPlxuICovXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzU3ViamVjdDxUPiBleHRlbmRzIFN1YmplY3Q8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gICAgcHVibGljIGRlc3RpbmF0aW9uPzogT2JzZXJ2ZXI8VD4sXG4gICAgc291cmNlPzogT2JzZXJ2YWJsZTxUPlxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICB9XG5cbiAgbmV4dCh2YWx1ZTogVCkge1xuICAgIHRoaXMuZGVzdGluYXRpb24/Lm5leHQ/Lih2YWx1ZSk7XG4gIH1cblxuICBlcnJvcihlcnI6IGFueSkge1xuICAgIHRoaXMuZGVzdGluYXRpb24/LmVycm9yPy4oZXJyKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuZGVzdGluYXRpb24/LmNvbXBsZXRlPy4oKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPik6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlPy5zdWJzY3JpYmUoc3Vic2NyaWJlcikgPz8gRU1QVFlfU1VCU0NSSVBUSU9OO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJy4vU3ViamVjdCc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcblxuLyoqXG4gKiBBIHZhcmlhbnQgb2YgU3ViamVjdCB0aGF0IHJlcXVpcmVzIGFuIGluaXRpYWwgdmFsdWUgYW5kIGVtaXRzIGl0cyBjdXJyZW50XG4gKiB2YWx1ZSB3aGVuZXZlciBpdCBpcyBzdWJzY3JpYmVkIHRvLlxuICpcbiAqIEBjbGFzcyBCZWhhdmlvclN1YmplY3Q8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIEJlaGF2aW9yU3ViamVjdDxUPiBleHRlbmRzIFN1YmplY3Q8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92YWx1ZTogVCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPik6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gc3VwZXIuX3N1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAhc3Vic2NyaXB0aW9uLmNsb3NlZCAmJiBzdWJzY3JpYmVyLm5leHQodGhpcy5fdmFsdWUpO1xuICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gIH1cblxuICBnZXRWYWx1ZSgpOiBUIHtcbiAgICBjb25zdCB7IGhhc0Vycm9yLCB0aHJvd25FcnJvciwgX3ZhbHVlIH0gPSB0aGlzO1xuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgdGhyb3cgdGhyb3duRXJyb3I7XG4gICAgfVxuICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICByZXR1cm4gX3ZhbHVlO1xuICB9XG5cbiAgbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHN1cGVyLm5leHQoKHRoaXMuX3ZhbHVlID0gdmFsdWUpKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2NoZWR1bGVyKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTY2hlZHVsZXJMaWtlIHtcbiAgcmV0dXJuIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUuc2NoZWR1bGUpO1xufVxuIiwgImltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi9pc1NjaGVkdWxlcic7XG5cbmZ1bmN0aW9uIGxhc3Q8VD4oYXJyOiBUW10pOiBUIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BSZXN1bHRTZWxlY3RvcihhcmdzOiBhbnlbXSk6ICgoLi4uYXJnczogdW5rbm93bltdKSA9PiB1bmtub3duKSB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGxhc3QoYXJncykpID8gYXJncy5wb3AoKSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFNjaGVkdWxlcihhcmdzOiBhbnlbXSk6IFNjaGVkdWxlckxpa2UgfCB1bmRlZmluZWQge1xuICByZXR1cm4gaXNTY2hlZHVsZXIobGFzdChhcmdzKSkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wTnVtYmVyKGFyZ3M6IGFueVtdLCBkZWZhdWx0VmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiB0eXBlb2YgbGFzdChhcmdzKSA9PT0gJ251bWJlcicgPyBhcmdzLnBvcCgpISA6IGRlZmF1bHRWYWx1ZTtcbn1cbiIsICJleHBvcnQgY29uc3QgaXNBcnJheUxpa2UgPSAoPFQ+KHg6IGFueSk6IHggaXMgQXJyYXlMaWtlPFQ+ID0+IHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgeCAhPT0gJ2Z1bmN0aW9uJyk7IiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tIFwiLi9pc0Z1bmN0aW9uXCI7XG5cbi8qKlxuICogVGVzdHMgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgXCJ0aGVubmFibGVcIi5cbiAqIEBwYXJhbSB2YWx1ZSB0aGUgb2JqZWN0IHRvIHRlc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgUHJvbWlzZUxpa2U8YW55PiB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKHZhbHVlPy50aGVuKTtcbn1cbiIsICJpbXBvcnQgeyBJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuLyoqIElkZW50aWZpZXMgYW4gaW5wdXQgYXMgYmVpbmcgT2JzZXJ2YWJsZSAoYnV0IG5vdCBuZWNlc3NhcnkgYW4gUnggT2JzZXJ2YWJsZSkgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0OiBhbnkpOiBpbnB1dCBpcyBJbnRlcm9wT2JzZXJ2YWJsZTxhbnk+IHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oaW5wdXRbU3ltYm9sX29ic2VydmFibGVdKTtcbn1cbiIsICJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXN5bmNJdGVyYWJsZTxUPihvYmo6IGFueSk6IG9iaiBpcyBBc3luY0l0ZXJhYmxlPFQ+IHtcbiAgcmV0dXJuIFN5bWJvbC5hc3luY0l0ZXJhdG9yICYmIGlzRnVuY3Rpb24ob2JqPy5bU3ltYm9sLmFzeW5jSXRlcmF0b3JdKTtcbn1cbiIsICIvKipcbiAqIENyZWF0ZXMgdGhlIFR5cGVFcnJvciB0byB0aHJvdyBpZiBhbiBpbnZhbGlkIG9iamVjdCBpcyBwYXNzZWQgdG8gYGZyb21gIG9yIGBzY2hlZHVsZWRgLlxuICogQHBhcmFtIGlucHV0IFRoZSBvYmplY3QgdGhhdCB3YXMgcGFzc2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQ6IGFueSkge1xuICAvLyBUT0RPOiBXZSBzaG91bGQgY3JlYXRlIGVycm9yIGNvZGVzIHRoYXQgY2FuIGJlIGxvb2tlZCB1cCwgc28gdGhpcyBjYW4gYmUgbGVzcyB2ZXJib3NlLlxuICByZXR1cm4gbmV3IFR5cGVFcnJvcihcbiAgICBgWW91IHByb3ZpZGVkICR7XG4gICAgICBpbnB1dCAhPT0gbnVsbCAmJiB0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnID8gJ2FuIGludmFsaWQgb2JqZWN0JyA6IGAnJHtpbnB1dH0nYFxuICAgIH0gd2hlcmUgYSBzdHJlYW0gd2FzIGV4cGVjdGVkLiBZb3UgY2FuIHByb3ZpZGUgYW4gT2JzZXJ2YWJsZSwgUHJvbWlzZSwgUmVhZGFibGVTdHJlYW0sIEFycmF5LCBBc3luY0l0ZXJhYmxlLCBvciBJdGVyYWJsZS5gXG4gICk7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbEl0ZXJhdG9yKCk6IHN5bWJvbCB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nIHx8ICFTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICByZXR1cm4gJ0BAaXRlcmF0b3InIGFzIGFueTtcbiAgfVxuXG4gIHJldHVybiBTeW1ib2wuaXRlcmF0b3I7XG59XG5cbmV4cG9ydCBjb25zdCBpdGVyYXRvciA9IGdldFN5bWJvbEl0ZXJhdG9yKCk7XG4iLCAiaW1wb3J0IHsgaXRlcmF0b3IgYXMgU3ltYm9sX2l0ZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9sL2l0ZXJhdG9yJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG4vKiogSWRlbnRpZmllcyBhbiBpbnB1dCBhcyBiZWluZyBhbiBJdGVyYWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSXRlcmFibGUoaW5wdXQ6IGFueSk6IGlucHV0IGlzIEl0ZXJhYmxlPGFueT4ge1xuICByZXR1cm4gaXNGdW5jdGlvbihpbnB1dD8uW1N5bWJvbF9pdGVyYXRvcl0pO1xufVxuIiwgImltcG9ydCB7IFJlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24qIHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3I8VD4ocmVhZGFibGVTdHJlYW06IFJlYWRhYmxlU3RyZWFtTGlrZTxUPik6IEFzeW5jR2VuZXJhdG9yPFQ+IHtcbiAgY29uc3QgcmVhZGVyID0gcmVhZGFibGVTdHJlYW0uZ2V0UmVhZGVyKCk7XG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB5aWVsZCB2YWx1ZSE7XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlYWRlci5yZWxlYXNlTG9jaygpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWRhYmxlU3RyZWFtTGlrZTxUPihvYmo6IGFueSk6IG9iaiBpcyBSZWFkYWJsZVN0cmVhbUxpa2U8VD4ge1xuICAvLyBXZSBkb24ndCB3YW50IHRvIHVzZSBpbnN0YW5jZW9mIGNoZWNrcyBiZWNhdXNlIHRoZXkgd291bGQgcmV0dXJuXG4gIC8vIGZhbHNlIGZvciBpbnN0YW5jZXMgZnJvbSBhbm90aGVyIFJlYWxtLCBsaWtlIGFuIDxpZnJhbWU+LlxuICByZXR1cm4gaXNGdW5jdGlvbihvYmo/LmdldFJlYWRlcik7XG59XG4iLCAiaW1wb3J0IHsgaXNBcnJheUxpa2UgfSBmcm9tICcuLi91dGlsL2lzQXJyYXlMaWtlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4uL3V0aWwvaXNQcm9taXNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgT2JzZXJ2ZWRWYWx1ZU9mLCBSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0ludGVyb3BPYnNlcnZhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yIH0gZnJvbSAnLi4vdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yJztcbmltcG9ydCB7IGlzSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzSXRlcmFibGUnO1xuaW1wb3J0IHsgaXNSZWFkYWJsZVN0cmVhbUxpa2UsIHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgcmVwb3J0VW5oYW5kbGVkRXJyb3IgfSBmcm9tICcuLi91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbm5lckZyb208TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PihpbnB1dDogTyk6IE9ic2VydmFibGU8T2JzZXJ2ZWRWYWx1ZU9mPE8+PjtcbmV4cG9ydCBmdW5jdGlvbiBpbm5lckZyb208VD4oaW5wdXQ6IE9ic2VydmFibGVJbnB1dDxUPik6IE9ic2VydmFibGU8VD4ge1xuICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgaWYgKGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbUludGVyb3BPYnNlcnZhYmxlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNQcm9taXNlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21Qcm9taXNlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzQXN5bmNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tQXN5bmNJdGVyYWJsZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21JdGVyYWJsZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc1JlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KTtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBSeEpTIE9ic2VydmFibGUgZnJvbSBhbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIGBTeW1ib2wub2JzZXJ2YWJsZWAuXG4gKiBAcGFyYW0gb2JqIEFuIG9iamVjdCB0aGF0IHByb3Blcmx5IGltcGxlbWVudHMgYFN5bWJvbC5vYnNlcnZhYmxlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21JbnRlcm9wT2JzZXJ2YWJsZTxUPihvYmo6IGFueSkge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICBjb25zdCBvYnMgPSBvYmpbU3ltYm9sX29ic2VydmFibGVdKCk7XG4gICAgaWYgKGlzRnVuY3Rpb24ob2JzLnN1YnNjcmliZSkpIHtcbiAgICAgIHJldHVybiBvYnMuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgYmUgY2F1Z2h0IGJ5IG9ic2VydmFibGUgc3Vic2NyaWJlIGZ1bmN0aW9uIGVycm9yIGhhbmRsaW5nLlxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb3ZpZGVkIG9iamVjdCBkb2VzIG5vdCBjb3JyZWN0bHkgaW1wbGVtZW50IFN5bWJvbC5vYnNlcnZhYmxlJyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFN5bmNocm9ub3VzbHkgZW1pdHMgdGhlIHZhbHVlcyBvZiBhbiBhcnJheSBsaWtlIGFuZCBjb21wbGV0ZXMuXG4gKiBUaGlzIGlzIGV4cG9ydGVkIGJlY2F1c2UgdGhlcmUgYXJlIGNyZWF0aW9uIGZ1bmN0aW9ucyBhbmQgb3BlcmF0b3JzIHRoYXQgbmVlZCB0b1xuICogbWFrZSBkaXJlY3QgdXNlIG9mIHRoZSBzYW1lIGxvZ2ljLCBhbmQgdGhlcmUncyBubyByZWFzb24gdG8gbWFrZSB0aGVtIHJ1biB0aHJvdWdoXG4gKiBgZnJvbWAgY29uZGl0aW9uYWxzIGJlY2F1c2Ugd2UgKmtub3cqIHRoZXkncmUgZGVhbGluZyB3aXRoIGFuIGFycmF5LlxuICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSB0byBlbWl0IHZhbHVlcyBmcm9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQXJyYXlMaWtlPFQ+KGFycmF5OiBBcnJheUxpa2U8VD4pIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgLy8gTG9vcCBvdmVyIHRoZSBhcnJheSBhbmQgZW1pdCBlYWNoIHZhbHVlLiBOb3RlIHR3byB0aGluZ3MgaGVyZTpcbiAgICAvLyAxLiBXZSdyZSBtYWtpbmcgc3VyZSB0aGF0IHRoZSBzdWJzY3JpYmVyIGlzIG5vdCBjbG9zZWQgb24gZWFjaCBsb29wLlxuICAgIC8vICAgIFRoaXMgaXMgc28gd2UgZG9uJ3QgY29udGludWUgbG9vcGluZyBvdmVyIGEgdmVyeSBsYXJnZSBhcnJheSBhZnRlclxuICAgIC8vICAgIHNvbWV0aGluZyBsaWtlIGEgYHRha2VgLCBgdGFrZVdoaWxlYCwgb3Igb3RoZXIgc3luY2hyb25vdXMgdW5zdWJzY3JpcHRpb25cbiAgICAvLyAgICBoYXMgYWxyZWFkeSB1bnN1YnNjcmliZWQuXG4gICAgLy8gMi4gSW4gdGhpcyBmb3JtLCByZWVudHJhbnQgY29kZSBjYW4gYWx0ZXIgdGhhdCBhcnJheSB3ZSdyZSBsb29waW5nIG92ZXIuXG4gICAgLy8gICAgVGhpcyBpcyBhIGtub3duIGlzc3VlLCBidXQgY29uc2lkZXJlZCBhbiBlZGdlIGNhc2UuIFRoZSBhbHRlcm5hdGl2ZSB3b3VsZFxuICAgIC8vICAgIGJlIHRvIGNvcHkgdGhlIGFycmF5IGJlZm9yZSBleGVjdXRpbmcgdGhlIGxvb3AsIGJ1dCB0aGlzIGhhc1xuICAgIC8vICAgIHBlcmZvcm1hbmNlIGltcGxpY2F0aW9ucy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aCAmJiAhc3Vic2NyaWJlci5jbG9zZWQ7IGkrKykge1xuICAgICAgc3Vic2NyaWJlci5uZXh0KGFycmF5W2ldKTtcbiAgICB9XG4gICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Qcm9taXNlPFQ+KHByb21pc2U6IFByb21pc2VMaWtlPFQ+KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIHByb21pc2VcbiAgICAgIC50aGVuKFxuICAgICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycjogYW55KSA9PiBzdWJzY3JpYmVyLmVycm9yKGVycilcbiAgICAgIClcbiAgICAgIC50aGVuKG51bGwsIHJlcG9ydFVuaGFuZGxlZEVycm9yKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSXRlcmFibGU8VD4oaXRlcmFibGU6IEl0ZXJhYmxlPFQ+KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgaXRlcmFibGUpIHtcbiAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUFzeW5jSXRlcmFibGU8VD4oYXN5bmNJdGVyYWJsZTogQXN5bmNJdGVyYWJsZTxUPikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICBwcm9jZXNzKGFzeW5jSXRlcmFibGUsIHN1YnNjcmliZXIpLmNhdGNoKChlcnIpID0+IHN1YnNjcmliZXIuZXJyb3IoZXJyKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJlYWRhYmxlU3RyZWFtTGlrZTxUPihyZWFkYWJsZVN0cmVhbTogUmVhZGFibGVTdHJlYW1MaWtlPFQ+KSB7XG4gIHJldHVybiBmcm9tQXN5bmNJdGVyYWJsZShyZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yKHJlYWRhYmxlU3RyZWFtKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3M8VD4oYXN5bmNJdGVyYWJsZTogQXN5bmNJdGVyYWJsZTxUPiwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikge1xuICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIGFzeW5jSXRlcmFibGUpIHtcbiAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgIC8vIEEgc2lkZS1lZmZlY3QgbWF5IGhhdmUgY2xvc2VkIG91ciBzdWJzY3JpYmVyLFxuICAgIC8vIGNoZWNrIGJlZm9yZSB0aGUgbmV4dCBpdGVyYXRpb24uXG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbn1cbiIsICJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgU2NoZWR1bGVyQWN0aW9uLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVNjaGVkdWxlKFxuICBwYXJlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbixcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlLFxuICB3b3JrOiAoKSA9PiB2b2lkLFxuICBkZWxheTogbnVtYmVyLFxuICByZXBlYXQ6IHRydWVcbik6IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVNjaGVkdWxlKFxuICBwYXJlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbixcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlLFxuICB3b3JrOiAoKSA9PiB2b2lkLFxuICBkZWxheT86IG51bWJlcixcbiAgcmVwZWF0PzogZmFsc2Vcbik6IFN1YnNjcmlwdGlvbjtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTY2hlZHVsZShcbiAgcGFyZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24sXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSxcbiAgd29yazogKCkgPT4gdm9pZCxcbiAgZGVsYXkgPSAwLFxuICByZXBlYXQgPSBmYWxzZVxuKTogU3Vic2NyaXB0aW9uIHwgdm9pZCB7XG4gIGNvbnN0IHNjaGVkdWxlU3Vic2NyaXB0aW9uID0gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICh0aGlzOiBTY2hlZHVsZXJBY3Rpb248YW55Pikge1xuICAgIHdvcmsoKTtcbiAgICBpZiAocmVwZWF0KSB7XG4gICAgICBwYXJlbnRTdWJzY3JpcHRpb24uYWRkKHRoaXMuc2NoZWR1bGUobnVsbCwgZGVsYXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfSwgZGVsYXkpO1xuXG4gIHBhcmVudFN1YnNjcmlwdGlvbi5hZGQoc2NoZWR1bGVTdWJzY3JpcHRpb24pO1xuXG4gIGlmICghcmVwZWF0KSB7XG4gICAgLy8gQmVjYXVzZSB1c2VyLWxhbmQgc2NoZWR1bGVyIGltcGxlbWVudGF0aW9ucyBhcmUgdW5saWtlbHkgdG8gcHJvcGVybHkgcmV1c2VcbiAgICAvLyBBY3Rpb25zIGZvciByZXBlYXQgc2NoZWR1bGluZywgd2UgY2FuJ3QgdHJ1c3QgdGhhdCB0aGUgcmV0dXJuZWQgc3Vic2NyaXB0aW9uXG4gICAgLy8gd2lsbCBjb250cm9sIHJlcGVhdCBzdWJzY3JpcHRpb24gc2NlbmFyaW9zLiBTbyB3ZSdyZSB0cnlpbmcgdG8gYXZvaWQgdXNpbmcgdGhlbVxuICAgIC8vIGluY29ycmVjdGx5IHdpdGhpbiB0aGlzIGxpYnJhcnkuXG4gICAgcmV0dXJuIHNjaGVkdWxlU3Vic2NyaXB0aW9uO1xuICB9XG59XG4iLCAiLyoqIEBwcmV0dGllciAqL1xuaW1wb3J0IHsgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5cbi8qKlxuICogUmUtZW1pdHMgYWxsIG5vdGlmaWNhdGlvbnMgZnJvbSBzb3VyY2UgT2JzZXJ2YWJsZSB3aXRoIHNwZWNpZmllZCBzY2hlZHVsZXIuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkVuc3VyZSBhIHNwZWNpZmljIHNjaGVkdWxlciBpcyB1c2VkLCBmcm9tIG91dHNpZGUgb2YgYW4gT2JzZXJ2YWJsZS48L3NwYW4+XG4gKlxuICogYG9ic2VydmVPbmAgaXMgYW4gb3BlcmF0b3IgdGhhdCBhY2NlcHRzIGEgc2NoZWR1bGVyIGFzIGEgZmlyc3QgcGFyYW1ldGVyLCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gcmVzY2hlZHVsZVxuICogbm90aWZpY2F0aW9ucyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS4gSXQgbWlnaHQgYmUgdXNlZnVsLCBpZiB5b3UgZG8gbm90IGhhdmUgY29udHJvbCBvdmVyXG4gKiBpbnRlcm5hbCBzY2hlZHVsZXIgb2YgYSBnaXZlbiBPYnNlcnZhYmxlLCBidXQgd2FudCB0byBjb250cm9sIHdoZW4gaXRzIHZhbHVlcyBhcmUgZW1pdHRlZCBuZXZlcnRoZWxlc3MuXG4gKlxuICogUmV0dXJuZWQgT2JzZXJ2YWJsZSBlbWl0cyB0aGUgc2FtZSBub3RpZmljYXRpb25zIChuZXh0ZWQgdmFsdWVzLCBjb21wbGV0ZSBhbmQgZXJyb3IgZXZlbnRzKSBhcyB0aGUgc291cmNlIE9ic2VydmFibGUsXG4gKiBidXQgcmVzY2hlZHVsZWQgd2l0aCBwcm92aWRlZCBzY2hlZHVsZXIuIE5vdGUgdGhhdCB0aGlzIGRvZXNuJ3QgbWVhbiB0aGF0IHNvdXJjZSBPYnNlcnZhYmxlcyBpbnRlcm5hbFxuICogc2NoZWR1bGVyIHdpbGwgYmUgcmVwbGFjZWQgaW4gYW55IHdheS4gT3JpZ2luYWwgc2NoZWR1bGVyIHN0aWxsIHdpbGwgYmUgdXNlZCwgYnV0IHdoZW4gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGVtaXRzXG4gKiBub3RpZmljYXRpb24sIGl0IHdpbGwgYmUgaW1tZWRpYXRlbHkgc2NoZWR1bGVkIGFnYWluIC0gdGhpcyB0aW1lIHdpdGggc2NoZWR1bGVyIHBhc3NlZCB0byBgb2JzZXJ2ZU9uYC5cbiAqIEFuIGFudGktcGF0dGVybiB3b3VsZCBiZSBjYWxsaW5nIGBvYnNlcnZlT25gIG9uIE9ic2VydmFibGUgdGhhdCBlbWl0cyBsb3RzIG9mIHZhbHVlcyBzeW5jaHJvbm91c2x5LCB0byBzcGxpdFxuICogdGhhdCBlbWlzc2lvbnMgaW50byBhc3luY2hyb25vdXMgY2h1bmtzLiBGb3IgdGhpcyB0byBoYXBwZW4sIHNjaGVkdWxlciB3b3VsZCBoYXZlIHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUgZGlyZWN0bHkgKHVzdWFsbHkgaW50byB0aGUgb3BlcmF0b3IgdGhhdCBjcmVhdGVzIGl0KS4gYG9ic2VydmVPbmAgc2ltcGx5IGRlbGF5cyBub3RpZmljYXRpb25zIGFcbiAqIGxpdHRsZSBiaXQgbW9yZSwgdG8gZW5zdXJlIHRoYXQgdGhleSBhcmUgZW1pdHRlZCBhdCBleHBlY3RlZCBtb21lbnRzLlxuICpcbiAqIEFzIGEgbWF0dGVyIG9mIGZhY3QsIGBvYnNlcnZlT25gIGFjY2VwdHMgc2Vjb25kIHBhcmFtZXRlciwgd2hpY2ggc3BlY2lmaWVzIGluIG1pbGxpc2Vjb25kcyB3aXRoIHdoYXQgZGVsYXkgbm90aWZpY2F0aW9uc1xuICogd2lsbCBiZSBlbWl0dGVkLiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4ge0BsaW5rIGRlbGF5fSBvcGVyYXRvciBhbmQgYG9ic2VydmVPbmAgaXMgdGhhdCBgb2JzZXJ2ZU9uYFxuICogd2lsbCBkZWxheSBhbGwgbm90aWZpY2F0aW9ucyAtIGluY2x1ZGluZyBlcnJvciBub3RpZmljYXRpb25zIC0gd2hpbGUgYGRlbGF5YCB3aWxsIHBhc3MgdGhyb3VnaCBlcnJvclxuICogZnJvbSBzb3VyY2UgT2JzZXJ2YWJsZSBpbW1lZGlhdGVseSB3aGVuIGl0IGlzIGVtaXR0ZWQuIEluIGdlbmVyYWwgaXQgaXMgaGlnaGx5IHJlY29tbWVuZGVkIHRvIHVzZSBgZGVsYXlgIG9wZXJhdG9yXG4gKiBmb3IgYW55IGtpbmQgb2YgZGVsYXlpbmcgb2YgdmFsdWVzIGluIHRoZSBzdHJlYW0sIHdoaWxlIHVzaW5nIGBvYnNlcnZlT25gIHRvIHNwZWNpZnkgd2hpY2ggc2NoZWR1bGVyIHNob3VsZCBiZSB1c2VkXG4gKiBmb3Igbm90aWZpY2F0aW9uIGVtaXNzaW9ucyBpbiBnZW5lcmFsLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBFbnN1cmUgdmFsdWVzIGluIHN1YnNjcmliZSBhcmUgY2FsbGVkIGp1c3QgYmVmb3JlIGJyb3dzZXIgcmVwYWludFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgb2JzZXJ2ZU9uLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHNvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAqIHNvbWVEaXYuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogMjAwcHg7YmFja2dyb3VuZDogIzA5Yyc7XG4gKiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNvbWVEaXYpO1xuICogY29uc3QgaW50ZXJ2YWxzID0gaW50ZXJ2YWwoMTApOyAgICAgIC8vIEludGVydmFscyBhcmUgc2NoZWR1bGVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCBhc3luYyBzY2hlZHVsZXIgYnkgZGVmYXVsdC4uLlxuICogaW50ZXJ2YWxzLnBpcGUoXG4gKiAgIG9ic2VydmVPbihhbmltYXRpb25GcmFtZVNjaGVkdWxlcikgLy8gLi4uYnV0IHdlIHdpbGwgb2JzZXJ2ZSBvbiBhbmltYXRpb25GcmFtZVxuICogKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjaGVkdWxlciB0byBlbnN1cmUgc21vb3RoIGFuaW1hdGlvbi5cbiAqIC5zdWJzY3JpYmUodmFsID0+IHtcbiAqICAgc29tZURpdi5zdHlsZS5oZWlnaHQgPSB2YWwgKyAncHgnO1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBkZWxheX1cbiAqXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFNjaGVkdWxlciB0aGF0IHdpbGwgYmUgdXNlZCB0byByZXNjaGVkdWxlIG5vdGlmaWNhdGlvbnMgZnJvbSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSBkZWxheSBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgc3RhdGVzIHdpdGggd2hhdCBkZWxheSBldmVyeSBub3RpZmljYXRpb24gc2hvdWxkIGJlIHJlc2NoZWR1bGVkLlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHNhbWVcbiAqIG5vdGlmaWNhdGlvbnMgYXMgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCBidXQgd2l0aCBwcm92aWRlZCBzY2hlZHVsZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlT248VD4oc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlLCBkZWxheSA9IDApOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD4ge1xuICByZXR1cm4gb3BlcmF0ZSgoc291cmNlLCBzdWJzY3JpYmVyKSA9PiB7XG4gICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihcbiAgICAgICAgc3Vic2NyaWJlcixcbiAgICAgICAgKHZhbHVlKSA9PiBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiBzdWJzY3JpYmVyLm5leHQodmFsdWUpLCBkZWxheSksXG4gICAgICAgICgpID0+IGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHN1YnNjcmliZXIuY29tcGxldGUoKSwgZGVsYXkpLFxuICAgICAgICAoZXJyKSA9PiBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiBzdWJzY3JpYmVyLmVycm9yKGVyciksIGRlbGF5KVxuICAgICAgKVxuICAgICk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IHN1YnNjcmliZXMgT2JzZXJ2ZXJzIHRvIHRoaXMgT2JzZXJ2YWJsZSBvbiB0aGUgc3BlY2lmaWVkIHtAbGluayBTY2hlZHVsZXJMaWtlfS5cbiAqXG4gKiBXaXRoIGBzdWJzY3JpYmVPbmAgeW91IGNhbiBkZWNpZGUgd2hhdCB0eXBlIG9mIHNjaGVkdWxlciBhIHNwZWNpZmljIE9ic2VydmFibGUgd2lsbCBiZSB1c2luZyB3aGVuIGl0IGlzIHN1YnNjcmliZWQgdG8uXG4gKlxuICogU2NoZWR1bGVycyBjb250cm9sIHRoZSBzcGVlZCBhbmQgb3JkZXIgb2YgZW1pc3Npb25zIHRvIG9ic2VydmVycyBmcm9tIGFuIE9ic2VydmFibGUgc3RyZWFtLlxuICpcbiAqICFbXShzdWJzY3JpYmVPbi5wbmcpXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIEdpdmVuIHRoZSBmb2xsb3dpbmcgY29kZTpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgYSA9IG9mKDEsIDIsIDMpO1xuICogY29uc3QgYiA9IG9mKDQsIDUsIDYpO1xuICpcbiAqIG1lcmdlKGEsIGIpLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gKlxuICogLy8gT3V0cHV0c1xuICogLy8gMVxuICogLy8gMlxuICogLy8gM1xuICogLy8gNFxuICogLy8gNVxuICogLy8gNlxuICogYGBgXG4gKlxuICogQm90aCBPYnNlcnZhYmxlIGBhYCBhbmQgYGJgIHdpbGwgZW1pdCB0aGVpciB2YWx1ZXMgZGlyZWN0bHkgYW5kIHN5bmNocm9ub3VzbHkgb25jZSB0aGV5IGFyZSBzdWJzY3JpYmVkIHRvLlxuICpcbiAqIElmIHdlIGluc3RlYWQgdXNlIHRoZSBgc3Vic2NyaWJlT25gIG9wZXJhdG9yIGRlY2xhcmluZyB0aGF0IHdlIHdhbnQgdG8gdXNlIHRoZSB7QGxpbmsgYXN5bmNTY2hlZHVsZXJ9IGZvciB2YWx1ZXMgZW1pdHRlZCBieSBPYnNlcnZhYmxlIGBhYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIHN1YnNjcmliZU9uLCBhc3luY1NjaGVkdWxlciwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBhID0gb2YoMSwgMiwgMykucGlwZShzdWJzY3JpYmVPbihhc3luY1NjaGVkdWxlcikpO1xuICogY29uc3QgYiA9IG9mKDQsIDUsIDYpO1xuICpcbiAqIG1lcmdlKGEsIGIpLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gKlxuICogLy8gT3V0cHV0c1xuICogLy8gNFxuICogLy8gNVxuICogLy8gNlxuICogLy8gMVxuICogLy8gMlxuICogLy8gM1xuICogYGBgXG4gKlxuICogVGhlIHJlYXNvbiBmb3IgdGhpcyBpcyB0aGF0IE9ic2VydmFibGUgYGJgIGVtaXRzIGl0cyB2YWx1ZXMgZGlyZWN0bHkgYW5kIHN5bmNocm9ub3VzbHkgbGlrZSBiZWZvcmVcbiAqIGJ1dCB0aGUgZW1pc3Npb25zIGZyb20gYGFgIGFyZSBzY2hlZHVsZWQgb24gdGhlIGV2ZW50IGxvb3AgYmVjYXVzZSB3ZSBhcmUgbm93IHVzaW5nIHRoZSB7QGxpbmsgYXN5bmNTY2hlZHVsZXJ9IGZvciB0aGF0IHNwZWNpZmljIE9ic2VydmFibGUuXG4gKlxuICogQHBhcmFtIHNjaGVkdWxlciBUaGUge0BsaW5rIFNjaGVkdWxlckxpa2V9IHRvIHBlcmZvcm0gc3Vic2NyaXB0aW9uIGFjdGlvbnMgb24uXG4gKiBAcGFyYW0gZGVsYXkgQSBkZWxheSB0byBwYXNzIHRvIHRoZSBzY2hlZHVsZXIgdG8gZGVsYXkgc3Vic2NyaXB0aW9uc1xuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIG1vZGlmaWVkIHNvIHRoYXQgaXRzXG4gKiBzdWJzY3JpcHRpb25zIGhhcHBlbiBvbiB0aGUgc3BlY2lmaWVkIHtAbGluayBTY2hlZHVsZXJMaWtlfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZU9uPFQ+KHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSwgZGVsYXk6IG51bWJlciA9IDApOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD4ge1xuICByZXR1cm4gb3BlcmF0ZSgoc291cmNlLCBzdWJzY3JpYmVyKSA9PiB7XG4gICAgc3Vic2NyaWJlci5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlciksIGRlbGF5KSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IG9ic2VydmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9vYnNlcnZlT24nO1xuaW1wb3J0IHsgc3Vic2NyaWJlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvc3Vic2NyaWJlT24nO1xuaW1wb3J0IHsgSW50ZXJvcE9ic2VydmFibGUsIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZU9ic2VydmFibGU8VD4oaW5wdXQ6IEludGVyb3BPYnNlcnZhYmxlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgcmV0dXJuIGlubmVyRnJvbShpbnB1dCkucGlwZShzdWJzY3JpYmVPbihzY2hlZHVsZXIpLCBvYnNlcnZlT24oc2NoZWR1bGVyKSk7XG59XG4iLCAiaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgb2JzZXJ2ZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL29ic2VydmVPbic7XG5pbXBvcnQgeyBzdWJzY3JpYmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9zdWJzY3JpYmVPbic7XG5pbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVQcm9taXNlPFQ+KGlucHV0OiBQcm9taXNlTGlrZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBpbm5lckZyb20oaW5wdXQpLnBpcGUoc3Vic2NyaWJlT24oc2NoZWR1bGVyKSwgb2JzZXJ2ZU9uKHNjaGVkdWxlcikpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUFycmF5PFQ+KGlucHV0OiBBcnJheUxpa2U8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oKHN1YnNjcmliZXIpID0+IHtcbiAgICAvLyBUaGUgY3VycmVudCBhcnJheSBpbmRleC5cbiAgICBsZXQgaSA9IDA7XG4gICAgLy8gU3RhcnQgaXRlcmF0aW5nIG92ZXIgdGhlIGFycmF5IGxpa2Ugb24gYSBzY2hlZHVsZS5cbiAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpID09PSBpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBoaXQgdGhlIGVuZCBvZiB0aGUgYXJyYXkgbGlrZSBpbiB0aGVcbiAgICAgICAgLy8gcHJldmlvdXMgam9iLCB3ZSBjYW4gY29tcGxldGUuXG4gICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSBsZXQncyBuZXh0IHRoZSB2YWx1ZSBhdCB0aGUgY3VycmVudCBpbmRleCxcbiAgICAgICAgLy8gdGhlbiBpbmNyZW1lbnQgb3VyIGluZGV4LlxuICAgICAgICBzdWJzY3JpYmVyLm5leHQoaW5wdXRbaSsrXSk7XG4gICAgICAgIC8vIElmIHRoZSBsYXN0IGVtaXNzaW9uIGRpZG4ndCBjYXVzZSB1cyB0byBjbG9zZSB0aGUgc3Vic2NyaWJlclxuICAgICAgICAvLyAodmlhIHRha2Ugb3Igc29tZSBzaWRlIGVmZmVjdCksIHJlc2NoZWR1bGUgdGhlIGpvYiBhbmQgd2UnbGxcbiAgICAgICAgLy8gbWFrZSBhbm90aGVyIHBhc3MuXG4gICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcblxuLyoqXG4gKiBVc2VkIGluIHtAbGluayBzY2hlZHVsZWR9IHRvIGNyZWF0ZSBhbiBvYnNlcnZhYmxlIGZyb20gYW4gSXRlcmFibGUuXG4gKiBAcGFyYW0gaW5wdXQgVGhlIGl0ZXJhYmxlIHRvIGNyZWF0ZSBhbiBvYnNlcnZhYmxlIGZyb21cbiAqIEBwYXJhbSBzY2hlZHVsZXIgVGhlIHNjaGVkdWxlciB0byB1c2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlSXRlcmFibGU8VD4oaW5wdXQ6IEl0ZXJhYmxlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgbGV0IGl0ZXJhdG9yOiBJdGVyYXRvcjxULCBUPjtcblxuICAgIC8vIFNjaGVkdWxlIHRoZSBpbml0aWFsIGNyZWF0aW9uIG9mIHRoZSBpdGVyYXRvciBmcm9tXG4gICAgLy8gdGhlIGl0ZXJhYmxlLiBUaGlzIGlzIHNvIHRoZSBjb2RlIGluIHRoZSBpdGVyYWJsZSBpc1xuICAgIC8vIG5vdCBjYWxsZWQgdW50aWwgdGhlIHNjaGVkdWxlZCBqb2IgZmlyZXMuXG4gICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4ge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBpdGVyYXRvci5cbiAgICAgIGl0ZXJhdG9yID0gKGlucHV0IGFzIGFueSlbU3ltYm9sX2l0ZXJhdG9yXSgpO1xuXG4gICAgICBleGVjdXRlU2NoZWR1bGUoXG4gICAgICAgIHN1YnNjcmliZXIsXG4gICAgICAgIHNjaGVkdWxlcixcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCB2YWx1ZTogVDtcbiAgICAgICAgICBsZXQgZG9uZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gUHVsbCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpdGVyYXRvclxuICAgICAgICAgICAgKHsgdmFsdWUsIGRvbmUgfSA9IGl0ZXJhdG9yLm5leHQoKSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBXZSBnb3QgYW4gZXJyb3Igd2hpbGUgcHVsbGluZyBmcm9tIHRoZSBpdGVyYXRvclxuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAvLyBJZiBpdCBpcyBcImRvbmVcIiB3ZSBqdXN0IGNvbXBsZXRlLiBUaGlzIG1pbWljcyB0aGVcbiAgICAgICAgICAgIC8vIGJlaGF2aW9yIG9mIEphdmFTY3JpcHQncyBgZm9yLi5vZmAgY29uc3VtcHRpb24gb2ZcbiAgICAgICAgICAgIC8vIGl0ZXJhYmxlcywgd2hpY2ggd2lsbCBub3QgZW1pdCB0aGUgdmFsdWUgZnJvbSBhbiBpdGVyYXRvclxuICAgICAgICAgICAgLy8gcmVzdWx0IG9mIGB7IGRvbmU6IHRydWU6IHZhbHVlOiAnaGVyZScgfWAuXG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoZSBpdGVyYWJsZSBpcyBub3QgZG9uZSwgZW1pdCB0aGUgdmFsdWUuXG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgMCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIER1cmluZyBmaW5hbGl6YXRpb24sIGlmIHdlIHNlZSB0aGlzIGl0ZXJhdG9yIGhhcyBhIGByZXR1cm5gIG1ldGhvZCxcbiAgICAvLyB0aGVuIHdlIGtub3cgaXQgaXMgYSBHZW5lcmF0b3IsIGFuZCBub3QganVzdCBhbiBJdGVyYXRvci4gU28gd2UgY2FsbFxuICAgIC8vIHRoZSBgcmV0dXJuKClgIGZ1bmN0aW9uLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgYW55IGBmaW5hbGx5IHsgfWAgYmxvY2tzXG4gICAgLy8gaW5zaWRlIG9mIHRoZSBnZW5lcmF0b3Igd2UgY2FuIGhpdCB3aWxsIGJlIGhpdCBwcm9wZXJseS5cbiAgICByZXR1cm4gKCkgPT4gaXNGdW5jdGlvbihpdGVyYXRvcj8ucmV0dXJuKSAmJiBpdGVyYXRvci5yZXR1cm4oKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlQXN5bmNJdGVyYWJsZTxUPihpbnB1dDogQXN5bmNJdGVyYWJsZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIGlmICghaW5wdXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0ZXJhYmxlIGNhbm5vdCBiZSBudWxsJyk7XG4gIH1cbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSBpbnB1dFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTtcbiAgICAgIGV4ZWN1dGVTY2hlZHVsZShcbiAgICAgICAgc3Vic2NyaWJlcixcbiAgICAgICAgc2NoZWR1bGVyLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaXRlcmF0b3IubmV4dCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCByZW1vdmUgdGhlIHN1YnNjcmlwdGlvbnMgZnJvbVxuICAgICAgICAgICAgICAvLyB0aGUgcGFyZW50IHN1YnNjcmlwdGlvbi5cbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIDAsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IFNjaGVkdWxlckxpa2UsIFJlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IHNjaGVkdWxlQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4vc2NoZWR1bGVBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlPFQ+KGlucHV0OiBSZWFkYWJsZVN0cmVhbUxpa2U8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gc2NoZWR1bGVBc3luY0l0ZXJhYmxlKHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IoaW5wdXQpLCBzY2hlZHVsZXIpO1xufVxuIiwgImltcG9ydCB7IHNjaGVkdWxlT2JzZXJ2YWJsZSB9IGZyb20gJy4vc2NoZWR1bGVPYnNlcnZhYmxlJztcbmltcG9ydCB7IHNjaGVkdWxlUHJvbWlzZSB9IGZyb20gJy4vc2NoZWR1bGVQcm9taXNlJztcbmltcG9ydCB7IHNjaGVkdWxlQXJyYXkgfSBmcm9tICcuL3NjaGVkdWxlQXJyYXknO1xuaW1wb3J0IHsgc2NoZWR1bGVJdGVyYWJsZSB9IGZyb20gJy4vc2NoZWR1bGVJdGVyYWJsZSc7XG5pbXBvcnQgeyBzY2hlZHVsZUFzeW5jSXRlcmFibGUgfSBmcm9tICcuL3NjaGVkdWxlQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBpc0ludGVyb3BPYnNlcnZhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4uL3V0aWwvaXNQcm9taXNlJztcbmltcG9ydCB7IGlzQXJyYXlMaWtlIH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5TGlrZSc7XG5pbXBvcnQgeyBpc0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0l0ZXJhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yIH0gZnJvbSAnLi4vdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yJztcbmltcG9ydCB7IGlzUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5pbXBvcnQgeyBzY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4vc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UnO1xuXG4vKipcbiAqIENvbnZlcnRzIGZyb20gYSBjb21tb24ge0BsaW5rIE9ic2VydmFibGVJbnB1dH0gdHlwZSB0byBhbiBvYnNlcnZhYmxlIHdoZXJlIHN1YnNjcmlwdGlvbiBhbmQgZW1pc3Npb25zXG4gKiBhcmUgc2NoZWR1bGVkIG9uIHRoZSBwcm92aWRlZCBzY2hlZHVsZXIuXG4gKlxuICogQHNlZSB7QGxpbmsgZnJvbX1cbiAqIEBzZWUge0BsaW5rIG9mfVxuICpcbiAqIEBwYXJhbSBpbnB1dCBUaGUgb2JzZXJ2YWJsZSwgYXJyYXksIHByb21pc2UsIGl0ZXJhYmxlLCBldGMgeW91IHdvdWxkIGxpa2UgdG8gc2NoZWR1bGVcbiAqIEBwYXJhbSBzY2hlZHVsZXIgVGhlIHNjaGVkdWxlciB0byB1c2UgdG8gc2NoZWR1bGUgdGhlIHN1YnNjcmlwdGlvbiBhbmQgZW1pc3Npb25zIGZyb21cbiAqIHRoZSByZXR1cm5lZCBvYnNlcnZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVkPFQ+KGlucHV0OiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8VD4ge1xuICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgIGlmIChpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlT2JzZXJ2YWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc1Byb21pc2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVQcm9taXNlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNBc3luY0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlQXN5bmNJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGlzSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGlzUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgfVxuICB0aHJvdyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dCk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0LCBTY2hlZHVsZXJMaWtlLCBPYnNlcnZlZFZhbHVlT2YgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBzY2hlZHVsZWQgfSBmcm9tICcuLi9zY2hlZHVsZWQvc2NoZWR1bGVkJztcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4vaW5uZXJGcm9tJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZyb208TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PihpbnB1dDogTyk6IE9ic2VydmFibGU8T2JzZXJ2ZWRWYWx1ZU9mPE8+Pjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHNjaGVkdWxlcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGBzY2hlZHVsZWRgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tPE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oaW5wdXQ6IE8sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSB8IHVuZGVmaW5lZCk6IE9ic2VydmFibGU8T2JzZXJ2ZWRWYWx1ZU9mPE8+PjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIE9ic2VydmFibGUgZnJvbSBhbiBBcnJheSwgYW4gYXJyYXktbGlrZSBvYmplY3QsIGEgUHJvbWlzZSwgYW4gaXRlcmFibGUgb2JqZWN0LCBvciBhbiBPYnNlcnZhYmxlLWxpa2Ugb2JqZWN0LlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5Db252ZXJ0cyBhbG1vc3QgYW55dGhpbmcgdG8gYW4gT2JzZXJ2YWJsZS48L3NwYW4+XG4gKlxuICogIVtdKGZyb20ucG5nKVxuICpcbiAqIGBmcm9tYCBjb252ZXJ0cyB2YXJpb3VzIG90aGVyIG9iamVjdHMgYW5kIGRhdGEgdHlwZXMgaW50byBPYnNlcnZhYmxlcy4gSXQgYWxzbyBjb252ZXJ0cyBhIFByb21pc2UsIGFuIGFycmF5LWxpa2UsIG9yIGFuXG4gKiA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvSXRlcmF0aW9uX3Byb3RvY29scyNpdGVyYWJsZVwiIHRhcmdldD1cIl9ibGFua1wiPml0ZXJhYmxlPC9hPlxuICogb2JqZWN0IGludG8gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBpdGVtcyBpbiB0aGF0IHByb21pc2UsIGFycmF5LCBvciBpdGVyYWJsZS4gQSBTdHJpbmcsIGluIHRoaXMgY29udGV4dCwgaXMgdHJlYXRlZFxuICogYXMgYW4gYXJyYXkgb2YgY2hhcmFjdGVycy4gT2JzZXJ2YWJsZS1saWtlIG9iamVjdHMgKGNvbnRhaW5zIGEgZnVuY3Rpb24gbmFtZWQgd2l0aCB0aGUgRVMyMDE1IFN5bWJvbCBmb3IgT2JzZXJ2YWJsZSkgY2FuIGFsc28gYmVcbiAqIGNvbnZlcnRlZCB0aHJvdWdoIHRoaXMgb3BlcmF0b3IuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBDb252ZXJ0cyBhbiBhcnJheSB0byBhbiBPYnNlcnZhYmxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBhcnJheSA9IFsxMCwgMjAsIDMwXTtcbiAqIGNvbnN0IHJlc3VsdCA9IGZyb20oYXJyYXkpO1xuICpcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gTG9nczpcbiAqIC8vIDEwXG4gKiAvLyAyMFxuICogLy8gMzBcbiAqIGBgYFxuICpcbiAqIENvbnZlcnQgYW4gaW5maW5pdGUgaXRlcmFibGUgKGZyb20gYSBnZW5lcmF0b3IpIHRvIGFuIE9ic2VydmFibGVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbSwgdGFrZSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGZ1bmN0aW9uKiBnZW5lcmF0ZURvdWJsZXMoc2VlZCkge1xuICogICAgbGV0IGkgPSBzZWVkO1xuICogICAgd2hpbGUgKHRydWUpIHtcbiAqICAgICAgeWllbGQgaTtcbiAqICAgICAgaSA9IDIgKiBpOyAvLyBkb3VibGUgaXRcbiAqICAgIH1cbiAqIH1cbiAqXG4gKiBjb25zdCBpdGVyYXRvciA9IGdlbmVyYXRlRG91YmxlcygzKTtcbiAqIGNvbnN0IHJlc3VsdCA9IGZyb20oaXRlcmF0b3IpLnBpcGUodGFrZSgxMCkpO1xuICpcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gTG9nczpcbiAqIC8vIDNcbiAqIC8vIDZcbiAqIC8vIDEyXG4gKiAvLyAyNFxuICogLy8gNDhcbiAqIC8vIDk2XG4gKiAvLyAxOTJcbiAqIC8vIDM4NFxuICogLy8gNzY4XG4gKiAvLyAxNTM2XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGBhc3luY1NjaGVkdWxlcmBcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbSwgYXN5bmNTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zb2xlLmxvZygnc3RhcnQnKTtcbiAqXG4gKiBjb25zdCBhcnJheSA9IFsxMCwgMjAsIDMwXTtcbiAqIGNvbnN0IHJlc3VsdCA9IGZyb20oYXJyYXksIGFzeW5jU2NoZWR1bGVyKTtcbiAqXG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIGNvbnNvbGUubG9nKCdlbmQnKTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gJ3N0YXJ0J1xuICogLy8gJ2VuZCdcbiAqIC8vIDEwXG4gKiAvLyAyMFxuICogLy8gMzBcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGZyb21FdmVudH1cbiAqIEBzZWUge0BsaW5rIGZyb21FdmVudFBhdHRlcm59XG4gKlxuICogQHBhcmFtIHtPYnNlcnZhYmxlSW5wdXQ8VD59IEEgc3Vic2NyaXB0aW9uIG9iamVjdCwgYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLWxpa2UsXG4gKiBhbiBBcnJheSwgYW4gaXRlcmFibGUsIG9yIGFuIGFycmF5LWxpa2Ugb2JqZWN0IHRvIGJlIGNvbnZlcnRlZC5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyTGlrZX0gQW4gb3B0aW9uYWwge0BsaW5rIFNjaGVkdWxlckxpa2V9IG9uIHdoaWNoIHRvIHNjaGVkdWxlIHRoZSBlbWlzc2lvbiBvZiB2YWx1ZXMuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbTxUPihpbnB1dDogT2JzZXJ2YWJsZUlucHV0PFQ+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiBzY2hlZHVsZXIgPyBzY2hlZHVsZWQoaW5wdXQsIHNjaGVkdWxlcikgOiBpbm5lckZyb20oaW5wdXQpO1xufVxuIiwgImltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcDxULCBSPihwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IFIpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+O1xuLyoqIEBkZXByZWNhdGVkIFVzZSBhIGNsb3N1cmUgaW5zdGVhZCBvZiBhIGB0aGlzQXJnYC4gU2lnbmF0dXJlcyBhY2NlcHRpbmcgYSBgdGhpc0FyZ2Agd2lsbCBiZSByZW1vdmVkIGluIHY4LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcDxULCBSLCBBPihwcm9qZWN0OiAodGhpczogQSwgdmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IFIsIHRoaXNBcmc6IEEpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+O1xuXG4vKipcbiAqIEFwcGxpZXMgYSBnaXZlbiBgcHJvamVjdGAgZnVuY3Rpb24gdG8gZWFjaCB2YWx1ZSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUsIGFuZCBlbWl0cyB0aGUgcmVzdWx0aW5nIHZhbHVlcyBhcyBhbiBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5MaWtlIFtBcnJheS5wcm90b3R5cGUubWFwKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L21hcCksXG4gKiBpdCBwYXNzZXMgZWFjaCBzb3VyY2UgdmFsdWUgdGhyb3VnaCBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIHRvIGdldFxuICogY29ycmVzcG9uZGluZyBvdXRwdXQgdmFsdWVzLjwvc3Bhbj5cbiAqXG4gKiAhW10obWFwLnBuZylcbiAqXG4gKiBTaW1pbGFyIHRvIHRoZSB3ZWxsIGtub3duIGBBcnJheS5wcm90b3R5cGUubWFwYCBmdW5jdGlvbiwgdGhpcyBvcGVyYXRvclxuICogYXBwbGllcyBhIHByb2plY3Rpb24gdG8gZWFjaCB2YWx1ZSBhbmQgZW1pdHMgdGhhdCBwcm9qZWN0aW9uIGluIHRoZSBvdXRwdXRcbiAqIE9ic2VydmFibGUuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIE1hcCBldmVyeSBjbGljayB0byB0aGUgYGNsaWVudFhgIHBvc2l0aW9uIG9mIHRoYXQgY2xpY2tcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbUV2ZW50LCBtYXAgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBjbGlja3MgPSBmcm9tRXZlbnQ8UG9pbnRlckV2ZW50Pihkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiBjb25zdCBwb3NpdGlvbnMgPSBjbGlja3MucGlwZShtYXAoZXYgPT4gZXYuY2xpZW50WCkpO1xuICpcbiAqIHBvc2l0aW9ucy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBtYXBUb31cbiAqIEBzZWUge0BsaW5rIHBsdWNrfVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWU6IFQsIGluZGV4OiBudW1iZXIpOiBSfSBwcm9qZWN0IFRoZSBmdW5jdGlvbiB0byBhcHBseVxuICogdG8gZWFjaCBgdmFsdWVgIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBUaGUgYGluZGV4YCBwYXJhbWV0ZXIgaXNcbiAqIHRoZSBudW1iZXIgYGlgIGZvciB0aGUgaS10aCBlbWlzc2lvbiB0aGF0IGhhcyBoYXBwZW5lZCBzaW5jZSB0aGVcbiAqIHN1YnNjcmlwdGlvbiwgc3RhcnRpbmcgZnJvbSB0aGUgbnVtYmVyIGAwYC5cbiAqIEBwYXJhbSB7YW55fSBbdGhpc0FyZ10gQW4gb3B0aW9uYWwgYXJndW1lbnQgdG8gZGVmaW5lIHdoYXQgYHRoaXNgIGlzIGluIHRoZVxuICogYHByb2plY3RgIGZ1bmN0aW9uLlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHZhbHVlcyBmcm9tIHRoZVxuICogc291cmNlIE9ic2VydmFibGUgdHJhbnNmb3JtZWQgYnkgdGhlIGdpdmVuIGBwcm9qZWN0YCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcDxULCBSPihwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IFIsIHRoaXNBcmc/OiBhbnkpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+IHtcbiAgcmV0dXJuIG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4ge1xuICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgdmFsdWUgZnJvbSB0aGUgc291cmNlLiBVc2VkIHdpdGggcHJvamVjdGlvbi5cbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIC8vIFN1YnNjcmliZSB0byB0aGUgc291cmNlLCBhbGwgZXJyb3JzIGFuZCBjb21wbGV0aW9ucyBhcmUgc2VudCBhbG9uZ1xuICAgIC8vIHRvIHRoZSBjb25zdW1lci5cbiAgICBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsICh2YWx1ZTogVCkgPT4ge1xuICAgICAgICAvLyBDYWxsIHRoZSBwcm9qZWN0aW9uIGZ1bmN0aW9uIHdpdGggdGhlIGFwcHJvcHJpYXRlIHRoaXMgY29udGV4dCxcbiAgICAgICAgLy8gYW5kIHNlbmQgdGhlIHJlc3VsdGluZyB2YWx1ZSB0byB0aGUgY29uc3VtZXIuXG4gICAgICAgIHN1YnNjcmliZXIubmV4dChwcm9qZWN0LmNhbGwodGhpc0FyZywgdmFsdWUsIGluZGV4KyspKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcIi4uL29wZXJhdG9ycy9tYXBcIjtcblxuY29uc3QgeyBpc0FycmF5IH0gPSBBcnJheTtcblxuZnVuY3Rpb24gY2FsbE9yQXBwbHk8VCwgUj4oZm46ICgoLi4udmFsdWVzOiBUW10pID0+IFIpLCBhcmdzOiBUfFRbXSk6IFIge1xuICAgIHJldHVybiBpc0FycmF5KGFyZ3MpID8gZm4oLi4uYXJncykgOiBmbihhcmdzKTtcbn1cblxuLyoqXG4gKiBVc2VkIGluIHNldmVyYWwgLS0gbW9zdGx5IGRlcHJlY2F0ZWQgLS0gc2l0dWF0aW9ucyB3aGVyZSB3ZSBuZWVkIHRvIFxuICogYXBwbHkgYSBsaXN0IG9mIGFyZ3VtZW50cyBvciBhIHNpbmdsZSBhcmd1bWVudCB0byBhIHJlc3VsdCBzZWxlY3Rvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcE9uZU9yTWFueUFyZ3M8VCwgUj4oZm46ICgoLi4udmFsdWVzOiBUW10pID0+IFIpKTogT3BlcmF0b3JGdW5jdGlvbjxUfFRbXSwgUj4ge1xuICAgIHJldHVybiBtYXAoYXJncyA9PiBjYWxsT3JBcHBseShmbiwgYXJncykpXG59IiwgImNvbnN0IHsgaXNBcnJheSB9ID0gQXJyYXk7XG5jb25zdCB7IGdldFByb3RvdHlwZU9mLCBwcm90b3R5cGU6IG9iamVjdFByb3RvLCBrZXlzOiBnZXRLZXlzIH0gPSBPYmplY3Q7XG5cbi8qKlxuICogVXNlZCBpbiBmdW5jdGlvbnMgd2hlcmUgZWl0aGVyIGEgbGlzdCBvZiBhcmd1bWVudHMsIGEgc2luZ2xlIGFycmF5IG9mIGFyZ3VtZW50cywgb3IgYVxuICogZGljdGlvbmFyeSBvZiBhcmd1bWVudHMgY2FuIGJlIHJldHVybmVkLiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIGFuIGBhcmdzYCBwcm9wZXJ0eSB3aXRoXG4gKiB0aGUgYXJndW1lbnRzIGluIGFuIGFycmF5LCBpZiBpdCBpcyBhIGRpY3Rpb25hcnksIGl0IHdpbGwgYWxzbyByZXR1cm4gdGhlIGBrZXlzYCBpbiBhbm90aGVyXG4gKiBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZ3NBcmdBcnJheU9yT2JqZWN0PFQsIE8gZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBUPj4oYXJnczogVFtdIHwgW09dIHwgW1RbXV0pOiB7IGFyZ3M6IFRbXTsga2V5czogc3RyaW5nW10gfCBudWxsIH0ge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdCA9IGFyZ3NbMF07XG4gICAgaWYgKGlzQXJyYXkoZmlyc3QpKSB7XG4gICAgICByZXR1cm4geyBhcmdzOiBmaXJzdCwga2V5czogbnVsbCB9O1xuICAgIH1cbiAgICBpZiAoaXNQT0pPKGZpcnN0KSkge1xuICAgICAgY29uc3Qga2V5cyA9IGdldEtleXMoZmlyc3QpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXJnczoga2V5cy5tYXAoKGtleSkgPT4gZmlyc3Rba2V5XSksXG4gICAgICAgIGtleXMsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGFyZ3M6IGFyZ3MgYXMgVFtdLCBrZXlzOiBudWxsIH07XG59XG5cbmZ1bmN0aW9uIGlzUE9KTyhvYmo6IGFueSk6IG9iaiBpcyBvYmplY3Qge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIGdldFByb3RvdHlwZU9mKG9iaikgPT09IG9iamVjdFByb3RvO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3Qoa2V5czogc3RyaW5nW10sIHZhbHVlczogYW55W10pIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKChyZXN1bHQsIGtleSwgaSkgPT4gKChyZXN1bHRba2V5XSA9IHZhbHVlc1tpXSksIHJlc3VsdCksIHt9IGFzIGFueSk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0LCBTY2hlZHVsZXJMaWtlLCBPYnNlcnZlZFZhbHVlT2YsIE9ic2VydmFibGVJbnB1dFR1cGxlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYXJnc0FyZ0FycmF5T3JPYmplY3QgfSBmcm9tICcuLi91dGlsL2FyZ3NBcmdBcnJheU9yT2JqZWN0JztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICcuL2Zyb20nO1xuaW1wb3J0IHsgaWRlbnRpdHkgfSBmcm9tICcuLi91dGlsL2lkZW50aXR5JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBtYXBPbmVPck1hbnlBcmdzIH0gZnJvbSAnLi4vdXRpbC9tYXBPbmVPck1hbnlBcmdzJztcbmltcG9ydCB7IHBvcFJlc3VsdFNlbGVjdG9yLCBwb3BTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2FyZ3MnO1xuaW1wb3J0IHsgY3JlYXRlT2JqZWN0IH0gZnJvbSAnLi4vdXRpbC9jcmVhdGVPYmplY3QnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi4vb3BlcmF0b3JzL09wZXJhdG9yU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBBbnlDYXRjaGVyIH0gZnJvbSAnLi4vQW55Q2F0Y2hlcic7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5cbi8vIGNvbWJpbmVMYXRlc3QoYW55KVxuLy8gV2UgcHV0IHRoaXMgZmlyc3QgYmVjYXVzZSB3ZSBuZWVkIHRvIGNhdGNoIGNhc2VzIHdoZXJlIHRoZSB1c2VyIGhhcyBzdXBwbGllZFxuLy8gX2V4YWN0bHkgYGFueWBfIGFzIHRoZSBhcmd1bWVudC4gU2luY2UgYGFueWAgbGl0ZXJhbGx5IG1hdGNoZXMgX2FueXRoaW5nXyxcbi8vIHdlIGRvbid0IHdhbnQgaXQgdG8gcmFuZG9tbHkgaGl0IG9uZSBvZiB0aGUgb3RoZXIgdHlwZSBzaWduYXR1cmVzIGJlbG93LFxuLy8gYXMgd2UgaGF2ZSBubyBpZGVhIGF0IGJ1aWxkLXRpbWUgd2hhdCB0eXBlIHdlIHNob3VsZCBiZSByZXR1cm5pbmcgd2hlbiBnaXZlbiBhbiBhbnkuXG5cbi8qKlxuICogWW91IGhhdmUgcGFzc2VkIGBhbnlgIGhlcmUsIHdlIGNhbid0IGZpZ3VyZSBvdXQgaWYgaXQgaXNcbiAqIGFuIGFycmF5IG9yIGFuIG9iamVjdCwgc28geW91J3JlIGdldHRpbmcgYHVua25vd25gLiBVc2UgYmV0dGVyIHR5cGVzLlxuICogQHBhcmFtIGFyZyBTb21ldGhpbmcgdHlwZWQgYXMgYGFueWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8VCBleHRlbmRzIEFueUNhdGNoZXI+KGFyZzogVCk6IE9ic2VydmFibGU8dW5rbm93bj47XG5cbi8vIGNvbWJpbmVMYXRlc3QoW2EsIGIsIGNdKVxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Qoc291cmNlczogW10pOiBPYnNlcnZhYmxlPG5ldmVyPjtcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KHNvdXJjZXM6IHJlYWRvbmx5IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPl0pOiBPYnNlcnZhYmxlPEE+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgc2NoZWR1bGVyYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYHNjaGVkdWxlZGAgYW5kIGBjb21iaW5lTGF0ZXN0QWxsYC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc2NoZWR1bGVyLWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdLCBSPihcbiAgc291cmNlczogcmVhZG9ubHkgWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSxcbiAgcmVzdWx0U2VsZWN0b3I6ICguLi52YWx1ZXM6IEEpID0+IFIsXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZVxuKTogT2JzZXJ2YWJsZTxSPjtcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10sIFI+KFxuICBzb3VyY2VzOiByZWFkb25seSBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dLFxuICByZXN1bHRTZWxlY3RvcjogKC4uLnZhbHVlczogQSkgPT4gUlxuKTogT2JzZXJ2YWJsZTxSPjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHNjaGVkdWxlcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGBzY2hlZHVsZWRgIGFuZCBgY29tYmluZUxhdGVzdEFsbGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oXG4gIHNvdXJjZXM6IHJlYWRvbmx5IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPl0sXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZVxuKTogT2JzZXJ2YWJsZTxBPjtcblxuLy8gY29tYmluZUxhdGVzdChhLCBiLCBjKVxuLyoqIEBkZXByZWNhdGVkIFBhc3MgYW4gYXJyYXkgb2Ygc291cmNlcyBpbnN0ZWFkLiBUaGUgcmVzdC1wYXJhbWV0ZXJzIHNpZ25hdHVyZSB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL2FycmF5LWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdPiguLi5zb3VyY2VzOiBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dKTogT2JzZXJ2YWJsZTxBPjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHNjaGVkdWxlcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGBzY2hlZHVsZWRgIGFuZCBgY29tYmluZUxhdGVzdEFsbGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXSwgUj4oXG4gIC4uLnNvdXJjZXNBbmRSZXN1bHRTZWxlY3RvckFuZFNjaGVkdWxlcjogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+LCAoLi4udmFsdWVzOiBBKSA9PiBSLCBTY2hlZHVsZXJMaWtlXVxuKTogT2JzZXJ2YWJsZTxSPjtcbi8qKiBAZGVwcmVjYXRlZCBQYXNzIGFuIGFycmF5IG9mIHNvdXJjZXMgaW5zdGVhZC4gVGhlIHJlc3QtcGFyYW1ldGVycyBzaWduYXR1cmUgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9hcnJheS1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXSwgUj4oXG4gIC4uLnNvdXJjZXNBbmRSZXN1bHRTZWxlY3RvcjogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+LCAoLi4udmFsdWVzOiBBKSA9PiBSXVxuKTogT2JzZXJ2YWJsZTxSPjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHNjaGVkdWxlcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGBzY2hlZHVsZWRgIGFuZCBgY29tYmluZUxhdGVzdEFsbGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oXG4gIC4uLnNvdXJjZXNBbmRTY2hlZHVsZXI6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPiwgU2NoZWR1bGVyTGlrZV1cbik6IE9ic2VydmFibGU8QT47XG5cbi8vIGNvbWJpbmVMYXRlc3Qoe2EsIGIsIGN9KVxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Qoc291cmNlc09iamVjdDogeyBbSyBpbiBhbnldOiBuZXZlciB9KTogT2JzZXJ2YWJsZTxuZXZlcj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgT2JzZXJ2YWJsZUlucHV0PGFueT4+PihcbiAgc291cmNlc09iamVjdDogVFxuKTogT2JzZXJ2YWJsZTx7IFtLIGluIGtleW9mIFRdOiBPYnNlcnZlZFZhbHVlT2Y8VFtLXT4gfT47XG5cbi8qKlxuICogQ29tYmluZXMgbXVsdGlwbGUgT2JzZXJ2YWJsZXMgdG8gY3JlYXRlIGFuIE9ic2VydmFibGUgd2hvc2UgdmFsdWVzIGFyZVxuICogY2FsY3VsYXRlZCBmcm9tIHRoZSBsYXRlc3QgdmFsdWVzIG9mIGVhY2ggb2YgaXRzIGlucHV0IE9ic2VydmFibGVzLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5XaGVuZXZlciBhbnkgaW5wdXQgT2JzZXJ2YWJsZSBlbWl0cyBhIHZhbHVlLCBpdFxuICogY29tcHV0ZXMgYSBmb3JtdWxhIHVzaW5nIHRoZSBsYXRlc3QgdmFsdWVzIGZyb20gYWxsIHRoZSBpbnB1dHMsIHRoZW4gZW1pdHNcbiAqIHRoZSBvdXRwdXQgb2YgdGhhdCBmb3JtdWxhLjwvc3Bhbj5cbiAqXG4gKiAhW10oY29tYmluZUxhdGVzdC5wbmcpXG4gKlxuICogYGNvbWJpbmVMYXRlc3RgIGNvbWJpbmVzIHRoZSB2YWx1ZXMgZnJvbSBhbGwgdGhlIE9ic2VydmFibGVzIHBhc3NlZCBpbiB0aGVcbiAqIG9ic2VydmFibGVzIGFycmF5LiBUaGlzIGlzIGRvbmUgYnkgc3Vic2NyaWJpbmcgdG8gZWFjaCBPYnNlcnZhYmxlIGluIG9yZGVyIGFuZCxcbiAqIHdoZW5ldmVyIGFueSBPYnNlcnZhYmxlIGVtaXRzLCBjb2xsZWN0aW5nIGFuIGFycmF5IG9mIHRoZSBtb3N0IHJlY2VudFxuICogdmFsdWVzIGZyb20gZWFjaCBPYnNlcnZhYmxlLiBTbyBpZiB5b3UgcGFzcyBgbmAgT2JzZXJ2YWJsZXMgdG8gdGhpcyBvcGVyYXRvcixcbiAqIHRoZSByZXR1cm5lZCBPYnNlcnZhYmxlIHdpbGwgYWx3YXlzIGVtaXQgYW4gYXJyYXkgb2YgYG5gIHZhbHVlcywgaW4gYW4gb3JkZXJcbiAqIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG9yZGVyIG9mIHRoZSBwYXNzZWQgT2JzZXJ2YWJsZXMgKHRoZSB2YWx1ZSBmcm9tIHRoZSBmaXJzdCBPYnNlcnZhYmxlXG4gKiB3aWxsIGJlIGF0IGluZGV4IDAgb2YgdGhlIGFycmF5IGFuZCBzbyBvbikuXG4gKlxuICogU3RhdGljIHZlcnNpb24gb2YgYGNvbWJpbmVMYXRlc3RgIGFjY2VwdHMgYW4gYXJyYXkgb2YgT2JzZXJ2YWJsZXMuIE5vdGUgdGhhdCBhbiBhcnJheSBvZlxuICogT2JzZXJ2YWJsZXMgaXMgYSBnb29kIGNob2ljZSwgaWYgeW91IGRvbid0IGtub3cgYmVmb3JlaGFuZCBob3cgbWFueSBPYnNlcnZhYmxlc1xuICogeW91IHdpbGwgY29tYmluZS4gUGFzc2luZyBhbiBlbXB0eSBhcnJheSB3aWxsIHJlc3VsdCBpbiBhbiBPYnNlcnZhYmxlIHRoYXRcbiAqIGNvbXBsZXRlcyBpbW1lZGlhdGVseS5cbiAqXG4gKiBUbyBlbnN1cmUgdGhlIG91dHB1dCBhcnJheSBhbHdheXMgaGFzIHRoZSBzYW1lIGxlbmd0aCwgYGNvbWJpbmVMYXRlc3RgIHdpbGxcbiAqIGFjdHVhbGx5IHdhaXQgZm9yIGFsbCBpbnB1dCBPYnNlcnZhYmxlcyB0byBlbWl0IGF0IGxlYXN0IG9uY2UsXG4gKiBiZWZvcmUgaXQgc3RhcnRzIGVtaXR0aW5nIHJlc3VsdHMuIFRoaXMgbWVhbnMgaWYgc29tZSBPYnNlcnZhYmxlIGVtaXRzXG4gKiB2YWx1ZXMgYmVmb3JlIG90aGVyIE9ic2VydmFibGVzIHN0YXJ0ZWQgZW1pdHRpbmcsIGFsbCB0aGVzZSB2YWx1ZXMgYnV0IHRoZSBsYXN0XG4gKiB3aWxsIGJlIGxvc3QuIE9uIHRoZSBvdGhlciBoYW5kLCBpZiBzb21lIE9ic2VydmFibGUgZG9lcyBub3QgZW1pdCBhIHZhbHVlIGJ1dFxuICogY29tcGxldGVzLCByZXN1bHRpbmcgT2JzZXJ2YWJsZSB3aWxsIGNvbXBsZXRlIGF0IHRoZSBzYW1lIG1vbWVudCB3aXRob3V0XG4gKiBlbWl0dGluZyBhbnl0aGluZywgc2luY2UgaXQgd2lsbCBub3cgYmUgaW1wb3NzaWJsZSB0byBpbmNsdWRlIGEgdmFsdWUgZnJvbSB0aGVcbiAqIGNvbXBsZXRlZCBPYnNlcnZhYmxlIGluIHRoZSByZXN1bHRpbmcgYXJyYXkuIEFsc28sIGlmIHNvbWUgaW5wdXQgT2JzZXJ2YWJsZSBkb2VzXG4gKiBub3QgZW1pdCBhbnkgdmFsdWUgYW5kIG5ldmVyIGNvbXBsZXRlcywgYGNvbWJpbmVMYXRlc3RgIHdpbGwgYWxzbyBuZXZlciBlbWl0XG4gKiBhbmQgbmV2ZXIgY29tcGxldGUsIHNpbmNlLCBhZ2FpbiwgaXQgd2lsbCB3YWl0IGZvciBhbGwgc3RyZWFtcyB0byBlbWl0IHNvbWVcbiAqIHZhbHVlLlxuICpcbiAqIElmIGF0IGxlYXN0IG9uZSBPYnNlcnZhYmxlIHdhcyBwYXNzZWQgdG8gYGNvbWJpbmVMYXRlc3RgIGFuZCBhbGwgcGFzc2VkIE9ic2VydmFibGVzXG4gKiBlbWl0dGVkIHNvbWV0aGluZywgdGhlIHJlc3VsdGluZyBPYnNlcnZhYmxlIHdpbGwgY29tcGxldGUgd2hlbiBhbGwgY29tYmluZWRcbiAqIHN0cmVhbXMgY29tcGxldGUuIFNvIGV2ZW4gaWYgc29tZSBPYnNlcnZhYmxlIGNvbXBsZXRlcywgdGhlIHJlc3VsdCBvZlxuICogYGNvbWJpbmVMYXRlc3RgIHdpbGwgc3RpbGwgZW1pdCB2YWx1ZXMgd2hlbiBvdGhlciBPYnNlcnZhYmxlcyBkby4gSW4gY2FzZVxuICogb2YgYSBjb21wbGV0ZWQgT2JzZXJ2YWJsZSwgaXRzIHZhbHVlIGZyb20gbm93IG9uIHdpbGwgYWx3YXlzIGJlIHRoZSBsYXN0XG4gKiBlbWl0dGVkIHZhbHVlLiBPbiB0aGUgb3RoZXIgaGFuZCwgaWYgYW55IE9ic2VydmFibGUgZXJyb3JzLCBgY29tYmluZUxhdGVzdGBcbiAqIHdpbGwgZXJyb3IgaW1tZWRpYXRlbHkgYXMgd2VsbCwgYW5kIGFsbCBvdGhlciBPYnNlcnZhYmxlcyB3aWxsIGJlIHVuc3Vic2NyaWJlZC5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIENvbWJpbmUgdHdvIHRpbWVyIE9ic2VydmFibGVzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IHRpbWVyLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgZmlyc3RUaW1lciA9IHRpbWVyKDAsIDEwMDApOyAvLyBlbWl0IDAsIDEsIDIuLi4gYWZ0ZXIgZXZlcnkgc2Vjb25kLCBzdGFydGluZyBmcm9tIG5vd1xuICogY29uc3Qgc2Vjb25kVGltZXIgPSB0aW1lcig1MDAsIDEwMDApOyAvLyBlbWl0IDAsIDEsIDIuLi4gYWZ0ZXIgZXZlcnkgc2Vjb25kLCBzdGFydGluZyAwLDVzIGZyb20gbm93XG4gKiBjb25zdCBjb21iaW5lZFRpbWVycyA9IGNvbWJpbmVMYXRlc3QoW2ZpcnN0VGltZXIsIHNlY29uZFRpbWVyXSk7XG4gKiBjb21iaW5lZFRpbWVycy5zdWJzY3JpYmUodmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpKTtcbiAqIC8vIExvZ3NcbiAqIC8vIFswLCAwXSBhZnRlciAwLjVzXG4gKiAvLyBbMSwgMF0gYWZ0ZXIgMXNcbiAqIC8vIFsxLCAxXSBhZnRlciAxLjVzXG4gKiAvLyBbMiwgMV0gYWZ0ZXIgMnNcbiAqIGBgYFxuICpcbiAqIENvbWJpbmUgYSBkaWN0aW9uYXJ5IG9mIE9ic2VydmFibGVzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBkZWxheSwgc3RhcnRXaXRoLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgb2JzZXJ2YWJsZXMgPSB7XG4gKiAgIGE6IG9mKDEpLnBpcGUoZGVsYXkoMTAwMCksIHN0YXJ0V2l0aCgwKSksXG4gKiAgIGI6IG9mKDUpLnBpcGUoZGVsYXkoNTAwMCksIHN0YXJ0V2l0aCgwKSksXG4gKiAgIGM6IG9mKDEwKS5waXBlKGRlbGF5KDEwMDAwKSwgc3RhcnRXaXRoKDApKVxuICogfTtcbiAqIGNvbnN0IGNvbWJpbmVkID0gY29tYmluZUxhdGVzdChvYnNlcnZhYmxlcyk7XG4gKiBjb21iaW5lZC5zdWJzY3JpYmUodmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpKTtcbiAqIC8vIExvZ3NcbiAqIC8vIHsgYTogMCwgYjogMCwgYzogMCB9IGltbWVkaWF0ZWx5XG4gKiAvLyB7IGE6IDEsIGI6IDAsIGM6IDAgfSBhZnRlciAxc1xuICogLy8geyBhOiAxLCBiOiA1LCBjOiAwIH0gYWZ0ZXIgNXNcbiAqIC8vIHsgYTogMSwgYjogNSwgYzogMTAgfSBhZnRlciAxMHNcbiAqIGBgYFxuICpcbiAqIENvbWJpbmUgYW4gYXJyYXkgb2YgT2JzZXJ2YWJsZXNcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIGRlbGF5LCBzdGFydFdpdGgsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBvYnNlcnZhYmxlcyA9IFsxLCA1LCAxMF0ubWFwKFxuICogICBuID0+IG9mKG4pLnBpcGUoXG4gKiAgICAgZGVsYXkobiAqIDEwMDApLCAvLyBlbWl0IDAgYW5kIHRoZW4gZW1pdCBuIGFmdGVyIG4gc2Vjb25kc1xuICogICAgIHN0YXJ0V2l0aCgwKVxuICogICApXG4gKiApO1xuICogY29uc3QgY29tYmluZWQgPSBjb21iaW5lTGF0ZXN0KG9ic2VydmFibGVzKTtcbiAqIGNvbWJpbmVkLnN1YnNjcmliZSh2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSkpO1xuICogLy8gTG9nc1xuICogLy8gWzAsIDAsIDBdIGltbWVkaWF0ZWx5XG4gKiAvLyBbMSwgMCwgMF0gYWZ0ZXIgMXNcbiAqIC8vIFsxLCA1LCAwXSBhZnRlciA1c1xuICogLy8gWzEsIDUsIDEwXSBhZnRlciAxMHNcbiAqIGBgYFxuICpcbiAqIFVzZSBtYXAgb3BlcmF0b3IgdG8gZHluYW1pY2FsbHkgY2FsY3VsYXRlIHRoZSBCb2R5LU1hc3MgSW5kZXhcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIGNvbWJpbmVMYXRlc3QsIG1hcCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHdlaWdodCA9IG9mKDcwLCA3MiwgNzYsIDc5LCA3NSk7XG4gKiBjb25zdCBoZWlnaHQgPSBvZigxLjc2LCAxLjc3LCAxLjc4KTtcbiAqIGNvbnN0IGJtaSA9IGNvbWJpbmVMYXRlc3QoW3dlaWdodCwgaGVpZ2h0XSkucGlwZShcbiAqICAgbWFwKChbdywgaF0pID0+IHcgLyAoaCAqIGgpKSxcbiAqICk7XG4gKiBibWkuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coJ0JNSSBpcyAnICsgeCkpO1xuICpcbiAqIC8vIFdpdGggb3V0cHV0IHRvIGNvbnNvbGU6XG4gKiAvLyBCTUkgaXMgMjQuMjEyMjkzMzg4NDI5NzUzXG4gKiAvLyBCTUkgaXMgMjMuOTM5NDgwOTkyMDUyMDlcbiAqIC8vIEJNSSBpcyAyMy42NzEyNTM2Mjk1OTIyMjJcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGNvbWJpbmVMYXRlc3RBbGx9XG4gKiBAc2VlIHtAbGluayBtZXJnZX1cbiAqIEBzZWUge0BsaW5rIHdpdGhMYXRlc3RGcm9tfVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZUlucHV0fSBbb2JzZXJ2YWJsZXNdIEFuIGFycmF5IG9mIGlucHV0IE9ic2VydmFibGVzIHRvIGNvbWJpbmUgd2l0aCBlYWNoIG90aGVyLlxuICogQW4gYXJyYXkgb2YgT2JzZXJ2YWJsZXMgbXVzdCBiZSBnaXZlbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbcHJvamVjdF0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gdG8gcHJvamVjdCB0aGUgdmFsdWVzIGZyb21cbiAqIHRoZSBjb21iaW5lZCBsYXRlc3QgdmFsdWVzIGludG8gYSBuZXcgdmFsdWUgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlLlxuICogQHBhcmFtIHtTY2hlZHVsZXJMaWtlfSBbc2NoZWR1bGVyPW51bGxdIFRoZSB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gdG8gdXNlIGZvciBzdWJzY3JpYmluZyB0b1xuICogZWFjaCBpbnB1dCBPYnNlcnZhYmxlLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSBvZiBwcm9qZWN0ZWQgdmFsdWVzIGZyb20gdGhlIG1vc3QgcmVjZW50XG4gKiB2YWx1ZXMgZnJvbSBlYWNoIGlucHV0IE9ic2VydmFibGUsIG9yIGFuIGFycmF5IG9mIHRoZSBtb3N0IHJlY2VudCB2YWx1ZXMgZnJvbVxuICogZWFjaCBpbnB1dCBPYnNlcnZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4sIFI+KC4uLmFyZ3M6IGFueVtdKTogT2JzZXJ2YWJsZTxSPiB8IE9ic2VydmFibGU8T2JzZXJ2ZWRWYWx1ZU9mPE8+W10+IHtcbiAgY29uc3Qgc2NoZWR1bGVyID0gcG9wU2NoZWR1bGVyKGFyZ3MpO1xuICBjb25zdCByZXN1bHRTZWxlY3RvciA9IHBvcFJlc3VsdFNlbGVjdG9yKGFyZ3MpO1xuXG4gIGNvbnN0IHsgYXJnczogb2JzZXJ2YWJsZXMsIGtleXMgfSA9IGFyZ3NBcmdBcnJheU9yT2JqZWN0KGFyZ3MpO1xuXG4gIGlmIChvYnNlcnZhYmxlcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBJZiBubyBvYnNlcnZhYmxlcyBhcmUgcGFzc2VkLCBvciBzb21lb25lIGhhcyBwYXNzZWQgYW4gZW1wdHkgYXJyYXlcbiAgICAvLyBvZiBvYnNlcnZhYmxlcywgb3IgZXZlbiBhbiBlbXB0eSBvYmplY3QgUE9KTywgd2UgbmVlZCB0byBqdXN0XG4gICAgLy8gY29tcGxldGUgKEVNUFRZKSwgYnV0IHdlIGhhdmUgdG8gaG9ub3IgdGhlIHNjaGVkdWxlciBwcm92aWRlZCBpZiBhbnkuXG4gICAgcmV0dXJuIGZyb20oW10sIHNjaGVkdWxlciBhcyBhbnkpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbmV3IE9ic2VydmFibGU8T2JzZXJ2ZWRWYWx1ZU9mPE8+W10+KFxuICAgIGNvbWJpbmVMYXRlc3RJbml0KFxuICAgICAgb2JzZXJ2YWJsZXMgYXMgT2JzZXJ2YWJsZUlucHV0PE9ic2VydmVkVmFsdWVPZjxPPj5bXSxcbiAgICAgIHNjaGVkdWxlcixcbiAgICAgIGtleXNcbiAgICAgICAgPyAvLyBBIGhhbmRsZXIgZm9yIHNjcnViYmluZyB0aGUgYXJyYXkgb2YgYXJncyBpbnRvIGEgZGljdGlvbmFyeS5cbiAgICAgICAgICAodmFsdWVzKSA9PiBjcmVhdGVPYmplY3Qoa2V5cywgdmFsdWVzKVxuICAgICAgICA6IC8vIEEgcGFzc3Rocm91Z2ggdG8ganVzdCByZXR1cm4gdGhlIGFycmF5XG4gICAgICAgICAgaWRlbnRpdHlcbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIHJlc3VsdFNlbGVjdG9yID8gKHJlc3VsdC5waXBlKG1hcE9uZU9yTWFueUFyZ3MocmVzdWx0U2VsZWN0b3IpKSBhcyBPYnNlcnZhYmxlPFI+KSA6IHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3RJbml0KFxuICBvYnNlcnZhYmxlczogT2JzZXJ2YWJsZUlucHV0PGFueT5bXSxcbiAgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSxcbiAgdmFsdWVUcmFuc2Zvcm06ICh2YWx1ZXM6IGFueVtdKSA9PiBhbnkgPSBpZGVudGl0eVxuKSB7XG4gIHJldHVybiAoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB7XG4gICAgLy8gVGhlIG91dGVyIHN1YnNjcmlwdGlvbi4gV2UncmUgY2FwdHVyaW5nIHRoaXMgaW4gYSBmdW5jdGlvblxuICAgIC8vIGJlY2F1c2Ugd2UgbWF5IGhhdmUgdG8gc2NoZWR1bGUgaXQuXG4gICAgbWF5YmVTY2hlZHVsZShcbiAgICAgIHNjaGVkdWxlcixcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IG9ic2VydmFibGVzO1xuICAgICAgICAvLyBBIHN0b3JlIGZvciB0aGUgdmFsdWVzIGVhY2ggb2JzZXJ2YWJsZSBoYXMgZW1pdHRlZCBzbyBmYXIuIFdlIG1hdGNoIG9ic2VydmFibGUgdG8gdmFsdWUgb24gaW5kZXguXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIGN1cnJlbnRseSBhY3RpdmUgc3Vic2NyaXB0aW9ucywgYXMgdGhleSBjb21wbGV0ZSwgd2UgZGVjcmVtZW50IHRoaXMgbnVtYmVyIHRvIHNlZSBpZlxuICAgICAgICAvLyB3ZSBhcmUgYWxsIGRvbmUgY29tYmluaW5nIHZhbHVlcywgc28gd2UgY2FuIGNvbXBsZXRlIHRoZSByZXN1bHQuXG4gICAgICAgIGxldCBhY3RpdmUgPSBsZW5ndGg7XG4gICAgICAgIC8vIFRoZSBudW1iZXIgb2YgaW5uZXIgc291cmNlcyB0aGF0IHN0aWxsIGhhdmVuJ3QgZW1pdHRlZCB0aGUgZmlyc3QgdmFsdWVcbiAgICAgICAgLy8gV2UgbmVlZCB0byB0cmFjayB0aGlzIGJlY2F1c2UgYWxsIHNvdXJjZXMgbmVlZCB0byBlbWl0IG9uZSB2YWx1ZSBpbiBvcmRlclxuICAgICAgICAvLyB0byBzdGFydCBlbWl0dGluZyB2YWx1ZXMuXG4gICAgICAgIGxldCByZW1haW5pbmdGaXJzdFZhbHVlcyA9IGxlbmd0aDtcbiAgICAgICAgLy8gVGhlIGxvb3AgdG8ga2ljayBvZmYgc3Vic2NyaXB0aW9uLiBXZSdyZSBrZXlpbmcgZXZlcnl0aGluZyBvbiBpbmRleCBgaWAgdG8gcmVsYXRlIHRoZSBvYnNlcnZhYmxlcyBwYXNzZWRcbiAgICAgICAgLy8gaW4gdG8gdGhlIHNsb3QgaW4gdGhlIG91dHB1dCBhcnJheSBvciB0aGUga2V5IGluIHRoZSBhcnJheSBvZiBrZXlzIGluIHRoZSBvdXRwdXQgZGljdGlvbmFyeS5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIG1heWJlU2NoZWR1bGUoXG4gICAgICAgICAgICBzY2hlZHVsZXIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGZyb20ob2JzZXJ2YWJsZXNbaV0sIHNjaGVkdWxlciBhcyBhbnkpO1xuICAgICAgICAgICAgICBsZXQgaGFzRmlyc3RWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihcbiAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIsXG4gICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB3ZSBnZXQgYSB2YWx1ZSwgcmVjb3JkIGl0IGluIG91ciBzZXQgb2YgdmFsdWVzLlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNGaXJzdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgdmFsdWUsIHJlY29yZCB0aGF0LlxuICAgICAgICAgICAgICAgICAgICAgIGhhc0ZpcnN0VmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0ZpcnN0VmFsdWVzLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZW1haW5pbmdGaXJzdFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFdlJ3JlIG5vdCB3YWl0aW5nIGZvciBhbnkgbW9yZVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZpcnN0IHZhbHVlcywgc28gd2UgY2FuIGVtaXQhXG4gICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlVHJhbnNmb3JtKHZhbHVlcy5zbGljZSgpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghLS1hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IGNvbXBsZXRlIHRoZSByZXN1bHQgaWYgd2UgaGF2ZSBubyBtb3JlIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGlubmVyIG9ic2VydmFibGVzLlxuICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJzY3JpYmVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN1YnNjcmliZXJcbiAgICApO1xuICB9O1xufVxuXG4vKipcbiAqIEEgc21hbGwgdXRpbGl0eSB0byBoYW5kbGUgdGhlIGNvdXBsZSBvZiBsb2NhdGlvbnMgd2hlcmUgd2Ugd2FudCB0byBzY2hlZHVsZSBpZiBhIHNjaGVkdWxlciB3YXMgcHJvdmlkZWQsXG4gKiBidXQgd2UgZG9uJ3QgaWYgdGhlcmUgd2FzIG5vIHNjaGVkdWxlci5cbiAqL1xuZnVuY3Rpb24gbWF5YmVTY2hlZHVsZShzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UgfCB1bmRlZmluZWQsIGV4ZWN1dGU6ICgpID0+IHZvaWQsIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKSB7XG4gIGlmIChzY2hlZHVsZXIpIHtcbiAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaXB0aW9uLCBzY2hlZHVsZXIsIGV4ZWN1dGUpO1xuICB9IGVsc2Uge1xuICAgIGV4ZWN1dGUoKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFBvaW50ZXJFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCB0eXBlIE1vdXNlRXZlbnQgPSBQb2ludGVyRXZlbnQgJiB7XG4gICAgY2xpZW50WD86IG51bWJlcjtcbiAgICBjbGllbnRZPzogbnVtYmVyO1xuICAgIHBvaW50ZXJJZD86IG51bWJlcjtcbiAgICBidXR0b25zPzogbnVtYmVyO1xufTtcbmV4cG9ydCB0eXBlIFdoZWVsRXZlbnQgPSBQb2ludGVyRXZlbnQgJiB7IGRlbHRhWDogbnVtYmVyOyBkZWx0YVk6IG51bWJlcjsgZGVsdGFaOiBudW1iZXIgfTtcbmV4cG9ydCB0eXBlIE1vdXNlSG9zdCA9IFZpZXcgJiB7XG4gICAgc2V0UG9pbnRlckNhcHR1cmU6IChwb2ludGVySWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgICByZWxlYXNlUG9pbnRlckNhcHR1cmU6IChwb2ludGVySWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgICBvbndoZWVsPzogKGU6IFdoZWVsRXZlbnQpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZW51bSBNb3VzZUJ1dHRvbiB7XG4gICAgTGVmdCA9IDEsXG4gICAgUmlnaHQgPSAyLFxuICAgIE1pZGRsZSA9IDQsXG4gICAgQWxsID0gNyxcbn1cblxuZXhwb3J0IGNvbnN0IE1vdmVhYmxlVmlldyA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIHBvc2l0aW9uOiBpbml0UG9zaXRpb24sXG4gICAgb25Nb3ZlLFxuICAgIG1vdXNlQnV0dG9uID0gTW91c2VCdXR0b24uQWxsLFxuICAgIGVuYWJsZVNjYWxpbmcgPSBmYWxzZSxcbiAgICB3aG9sZUNhbnZhcyA9IGZhbHNlLFxuICAgIGlubmVyQ2xhc3NOYW1lLFxuICAgIG91dGVyQ2xhc3NOYW1lLFxufToge1xuICAgIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbiAgICBIZWFkZXJDb21wb25lbnQ/OiAoKSA9PiBKU1guRWxlbWVudDtcbiAgICBwb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlciB9O1xuICAgIG9uTW92ZTogKHBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH0pID0+IHZvaWQ7XG4gICAgbW91c2VCdXR0b24/OiBNb3VzZUJ1dHRvbjtcbiAgICBlbmFibGVTY2FsaW5nPzogYm9vbGVhbjtcbiAgICB3aG9sZUNhbnZhcz86IGJvb2xlYW47XG4gICAgaW5uZXJDbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgb3V0ZXJDbGFzc05hbWU/OiBzdHJpbmc7XG59KSA9PiB7XG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHg6IGluaXRQb3NpdGlvbi54LFxuICAgICAgICB5OiBpbml0UG9zaXRpb24ueSxcbiAgICAgICAgc2NhbGU6IGluaXRQb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgZHJhZ1BvaW50ZXJJZDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeERyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeURyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeFBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgICAgIHlQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RhcnREcmFnID0gdXNlU3RhYmxlQ2FsbGJhY2soKGU6IE1vdXNlRXZlbnQsIGNvbnRleHRTY2FsZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICghKChlLmJ1dHRvbnMgPz8gMCkgJiBtb3VzZUJ1dHRvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB4UG9pbnRlciA9IGUuY2xpZW50WCA/PyAwO1xuICAgICAgICBjb25zdCB5UG9pbnRlciA9IGUuY2xpZW50WSA/PyAwO1xuICAgICAgICBjb25zb2xlLmxvZyhgc3RhcnREcmFnYCwgeyB4UG9pbnRlciwgeVBvaW50ZXIsIGUsIHBvc2l0aW9uLCBjb250ZXh0U2NhbGUgfSk7XG5cbiAgICAgICAgaG9zdFJlZi5jdXJyZW50Py5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCA/PyAwKTtcblxuICAgICAgICBzZXRQb3NpdGlvbihzID0+ICh7XG4gICAgICAgICAgICAuLi5zLFxuICAgICAgICAgICAgZHJhZ1BvaW50ZXJJZDogZS5wb2ludGVySWQsXG4gICAgICAgICAgICB4RHJhZ1N0YXJ0OiBzLngsXG4gICAgICAgICAgICB5RHJhZ1N0YXJ0OiBzLnksXG4gICAgICAgICAgICB4UG9pbnRlckRyYWdTdGFydDogeFBvaW50ZXIsXG4gICAgICAgICAgICB5UG9pbnRlckRyYWdTdGFydDogeVBvaW50ZXIsXG4gICAgICAgIH0pKTtcbiAgICB9KTtcbiAgICBjb25zdCBlbmREcmFnID0gdXNlU3RhYmxlQ2FsbGJhY2soKGU6IE1vdXNlRXZlbnQsIGNvbnRleHRTY2FsZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChwb3NpdGlvbi5kcmFnUG9pbnRlcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBob3N0UmVmLmN1cnJlbnQ/LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShwb3NpdGlvbi5kcmFnUG9pbnRlcklkKTtcblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeFBvaW50ZXIgPSBlLmNsaWVudFggPz8gMDtcbiAgICAgICAgY29uc3QgeVBvaW50ZXIgPSBlLmNsaWVudFkgPz8gMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGVuZERyYWdgLCB7IHhQb2ludGVyLCB5UG9pbnRlciwgZSwgcG9zaXRpb24sIGNvbnRleHRTY2FsZSB9KTtcblxuICAgICAgICBjb25zdCBuZXdYID1cbiAgICAgICAgICAgIChwb3NpdGlvbi54RHJhZ1N0YXJ0ID8/IDApXG4gICAgICAgICAgICArICh4UG9pbnRlciAtIChwb3NpdGlvbi54UG9pbnRlckRyYWdTdGFydCA/PyAwKSkgLyBjb250ZXh0U2NhbGU7XG4gICAgICAgIGNvbnN0IG5ld1kgPVxuICAgICAgICAgICAgKHBvc2l0aW9uLnlEcmFnU3RhcnQgPz8gMClcbiAgICAgICAgICAgICsgKHlQb2ludGVyIC0gKHBvc2l0aW9uLnlQb2ludGVyRHJhZ1N0YXJ0ID8/IDApKSAvIGNvbnRleHRTY2FsZTtcblxuICAgICAgICBzZXRQb3NpdGlvbihzID0+ICh7XG4gICAgICAgICAgICAuLi5zLFxuICAgICAgICAgICAgeDogbmV3WCxcbiAgICAgICAgICAgIHk6IG5ld1ksXG4gICAgICAgICAgICBkcmFnUG9pbnRlcklkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB4UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgeVBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIG9uTW92ZSh7XG4gICAgICAgICAgICB4OiBuZXdYLFxuICAgICAgICAgICAgeTogbmV3WSxcbiAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1vdmVEcmFnID0gdXNlU3RhYmxlQ2FsbGJhY2soKGU6IE1vdXNlRXZlbnQsIGNvbnRleHRTY2FsZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChwb3NpdGlvbi5kcmFnUG9pbnRlcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB4UG9pbnRlciA9IGUuY2xpZW50WCA/PyAwO1xuICAgICAgICBjb25zdCB5UG9pbnRlciA9IGUuY2xpZW50WSA/PyAwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgbW92ZURyYWdgLCB7IHhQb2ludGVyLCB5UG9pbnRlciwgZSwgcG9zaXRpb24sIGNvbnRleHRTY2FsZSB9KTtcblxuICAgICAgICBzZXRQb3NpdGlvbihzID0+ICh7XG4gICAgICAgICAgICAuLi5zLFxuICAgICAgICAgICAgeDogKHMueERyYWdTdGFydCA/PyAwKSArICh4UG9pbnRlciAtIChzLnhQb2ludGVyRHJhZ1N0YXJ0ID8/IDApKSAvIGNvbnRleHRTY2FsZSxcbiAgICAgICAgICAgIHk6IChzLnlEcmFnU3RhcnQgPz8gMCkgKyAoeVBvaW50ZXIgLSAocy55UG9pbnRlckRyYWdTdGFydCA/PyAwKSkgLyBjb250ZXh0U2NhbGUsXG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNjcm9sbFdoZWVsID0gdXNlU3RhYmxlQ2FsbGJhY2soKGU6IFdoZWVsRXZlbnQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG9ud2hlZWxgLCB7IGUsIHBvc2l0aW9uIH0pO1xuICAgICAgICBjb25zdCBkZWx0YVkgPSBlLmRlbHRhWTtcbiAgICAgICAgaWYgKCFkZWx0YVkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZW5hYmxlU2NhbGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIHNjYWxlOiBzLnNjYWxlICogTWF0aC5wb3coMC45LCBkZWx0YVkgPiAwID8gMSA6IC0xKSxcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaG9zdFJlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBNb3VzZUhvc3QpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvc3QgPSBob3N0UmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghaG9zdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYGhvc3RgLCB7IGhvc3QgfSk7XG4gICAgICAgIGhvc3Qub253aGVlbCA9IHNjcm9sbFdoZWVsO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaG9zdC5vbndoZWVsID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuICAgIH0sIFshaG9zdFJlZi5jdXJyZW50XSk7XG5cbiAgICBjb25zdCB3aG9sZUhvc3RSZWYgPSB1c2VSZWYobnVsbCBhcyBudWxsIHwgTW91c2VIb3N0KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBob3N0ID0gd2hvbGVIb3N0UmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghaG9zdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYGhvc3RgLCB7IGhvc3QgfSk7XG4gICAgICAgIGhvc3Qub253aGVlbCA9IHNjcm9sbFdoZWVsO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaG9zdC5vbndoZWVsID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuICAgIH0sIFshd2hvbGVIb3N0UmVmLmN1cnJlbnRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb3ZlYWJsZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICB7KHsgcG9zaXRpb246IGNvbnRhaW5lclBvc2l0aW9uIH0pID0+IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d2hvbGVDYW52YXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7SGVhZGVyQ29tcG9uZW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYmctd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDb21wb25lbnQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQcmVzc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4LTEgYmctZnVjaHNpYS02MDAgb3BhY2l0eS01MCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt3aG9sZUhvc3RSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249e2UgPT4gd2hvbGVDYW52YXMgJiYgc3RhcnREcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXtlID0+IGVuZERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTW92ZT17ZSA9PiBtb3ZlRHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9e2BmbGV4LTEgJHt3aG9sZUNhbnZhcyA/IGBvdmVyZmxvdy1oaWRkZW5gIDogYGB9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZXNzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e291dGVyQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2hvc3RSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249e2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob2xlQ2FudmFzICYmIHN0YXJ0RHJhZyhlLCBjb250YWluZXJQb3NpdGlvbi5zY2FsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17ZSA9PiBlbmREcmFnKGUsIGNvbnRhaW5lclBvc2l0aW9uLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTW92ZT17ZSA9PiBtb3ZlRHJhZyhlLCBjb250YWluZXJQb3NpdGlvbi5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lubmVyQ2xhc3NOYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weCkgc2NhbGUoJHtwb3NpdGlvbi5zY2FsZX0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtlID0+IHN0YXJ0RHJhZyhlLCBjb250YWluZXJQb3NpdGlvbi5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZlYWJsZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogcG9zaXRpb24ueCArIGNvbnRhaW5lclBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBwb3NpdGlvbi55ICsgY29udGFpbmVyUG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBwb3NpdGlvbi5zY2FsZSAqIGNvbnRhaW5lclBvc2l0aW9uLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG9sZUNhbnZhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW92ZWFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Nb3ZlYWJsZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBNb3ZlYWJsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICB3aG9sZUNhbnZhczogZmFsc2UsXG4gICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgfSxcbn0pO1xuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBUZXh0SW5wdXQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1vdXNlQnV0dG9uLCBNb3ZlYWJsZVZpZXcgfSBmcm9tICcuL21vdmVhYmxlLXZpZXcnO1xuaW1wb3J0IHsgUGlwZUVuZHBvaW50VmlldywgUGlwZVZpZXcgfSBmcm9tICcuL3BpcGVzJztcbmltcG9ydCB7IFNoZWV0VmlldywgU2hlZXRWaWV3RGF0YSB9IGZyb20gJy4vc2hlZXQnO1xuaW1wb3J0IHsgVmFsdWVFZGl0b3IsIFZhbHVlVmlld2VyTW9kZSB9IGZyb20gJy4vdmFsdWUtdmlldyc7XG5pbXBvcnQgeyBnZXRUeXBlTmFtZSB9IGZyb20gJy4vd29yay1uYW1lcyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVSdW5WYWx1ZV9jb25uZWN0aW9uT3ZlcnJpZGUgfSBmcm9tICcuLi9hbmFseXNpcy9jYWxjdWxhdGUtcnVuJztcbmltcG9ydCB7XG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHRUeXBlLFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBOb2RlSW5zdGFuY2VzVmlldyA9ICh7XG4gICAgbm9kZUluc3RhbmNlcyxcbiAgICBmdWxsID0gZmFsc2UsXG4gICAgaGlkZVRpdGxlcyA9IGZhbHNlLFxufToge1xuICAgIG5vZGVJbnN0YW5jZXM6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VbXTtcbiAgICBmdWxsPzogYm9vbGVhbjtcbiAgICBoaWRlVGl0bGVzPzogYm9vbGVhbjtcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UnVuVmFsdWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjcmVhdGVSdW5WYWx1ZSgpfT5cbiAgICAgICAgICAgIDxWaWV3IHRlc3RJRD0nTm9kZUluc3RhbmNlc1ZpZXc6VmlldycgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAge25vZGVJbnN0YW5jZXMubWFwKHggPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt4LmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZVZpZXcgbm9kZUluc3RhbmNlPXt4fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFJvb3RDb21wb25lbnRzVmlldyAvPlxuICAgICAgICA8L1J1blZhbHVlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcblxuY29uc3QgUm9vdENvbXBvbmVudHNWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50cyB9ID0gdXNlQ29udGV4dChSdW5WYWx1ZUNvbnRleHQpO1xuXG4gICAgY29uc3QgW3Jvb3RDb21wb25lbnRzLCBzZXRSb290Q29tcG9uZW50c10gPSB1c2VTdGF0ZSh7fSBhcyBSZWNvcmQ8c3RyaW5nLCAoKSA9PiBKU1guRWxlbWVudD4pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIENvbXBvbmVudHMuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFJvb3RDb21wb25lbnRzVmlldzogQ29tcG9uZW50cy5zdWJzY3JpYmVgLCB7IHggfSk7XG4gICAgICAgICAgICBzZXRSb290Q29tcG9uZW50cyh7IC4uLnggfSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IHRlc3RJRD0nUm9vdENvbXBvbmVudHNWaWV3OlZpZXcnIGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAge1suLi5PYmplY3QuZW50cmllcyhyb290Q29tcG9uZW50cyldLm1hcCgoW2ssIFZdKSA9PiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17a30+XG4gICAgICAgICAgICAgICAgICAgIDxWIC8+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IE5vZGVWaWV3ID0gKHsgbm9kZUluc3RhbmNlIH06IHsgbm9kZUluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlIH0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgfSk7XG4gICAgY29uc3QgbW92ZU5vZGUgPSB1c2VTdGFibGVDYWxsYmFjaygodmFsdWU6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBzZXRQb3NpdGlvbih2YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOb2RlVmlld2AsIHsgbm9kZUluc3RhbmNlIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd29ya2Zsb3cgPSBub2RlSW5zdGFuY2Uud29ya2Zsb3c7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMSc+XG4gICAgICAgICAgICA8TW92ZWFibGVWaWV3XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgeTogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHBvc2l0aW9uLnNjYWxlLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25Nb3ZlPXttb3ZlTm9kZX1cbiAgICAgICAgICAgICAgICBtb3VzZUJ1dHRvbj17TW91c2VCdXR0b24uTWlkZGxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wgcmVsYXRpdmUgYmctc2xhdGUtOTUwLzc1IGJvcmRlci1ibHVlLTEwMCBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIG0tWy0xcHhdIHJvdW5kZWQgcC0xJz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPntgJHtub2RlSW5zdGFuY2Uud29ya2Zsb3cubmFtZX0gIyR7bm9kZUluc3RhbmNlLmtleX1gfTwvVGV4dD5cblxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5pbnB1dHMubWFwKGlucHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5wdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZUNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZT17aW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbj17bm9kZUluc3RhbmNlLmlucHV0cy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0+IHgud29ya2Zsb3dJbnB1dCA9PT0gaW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3V0cHV0PXtub2RlSW5zdGFuY2Uud29ya2Zsb3cuYm9keS5raW5kICE9PSBgbm9kZXNgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cgZmxleC13cmFwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2RlSW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZUluc3RhbmNlLmNoaWxkcmVuLm1hcCh4ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3gua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZVZpZXcgbm9kZUluc3RhbmNlPXt4fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmJvZHkua2luZCA9PT0gYG9wZXJhdG9yYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5ib2R5Lm9wZXJhdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC0xIGp1c3RpZnktc3RhcnQgaXRlbXMtZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LVsxMHB4XSc+XHUyNkNGPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LWVuZCBpdGVtcy1lbmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5vdXRwdXRzLm1hcChvdXRwdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtvdXRwdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZUNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZT17b3V0cHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb249e25vZGVJbnN0YW5jZS5vdXRwdXRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPT4geC53b3JrZmxvd091dHB1dCA9PT0gb3V0cHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUlucHV0PXtub2RlSW5zdGFuY2Uud29ya2Zsb3cuYm9keS5raW5kICE9PSBgbm9kZXNgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuYm9keS5raW5kID09PSBgbm9kZXNgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYmctZ3JheS0yMDAgaC0xMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVJbnN0YW5jZVNoZWV0VmlldyBub2RlSW5zdGFuY2U9e25vZGVJbnN0YW5jZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBOb2RlSW5zdGFuY2VTaGVldFZpZXcgPSAoeyBub2RlSW5zdGFuY2UgfTogeyBub2RlSW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UgfSkgPT4ge1xuICAgIGNvbnN0IHJ1blZhbHVlQ29udGV4dCA9IHVzZUNvbnRleHQoUnVuVmFsdWVDb250ZXh0KTtcbiAgICBjb25zdCBbcnVucywgc2V0UnVuc10gPSB1c2VTdGF0ZSh1bmRlZmluZWQgYXMgdHlwZW9mIG5vZGVJbnN0YW5jZS5ydW5zKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWIgPSBydW5WYWx1ZUNvbnRleHQuVmFsdWVDaGFuZ2VkLnN1YnNjcmliZSh4ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOb2RlSW5zdGFuY2VTaGVldFZpZXc6IGNoYW5nZWRgLCB7IHJ1bnM6IG5vZGVJbnN0YW5jZS5ydW5zIH0pO1xuICAgICAgICAgICAgc2V0UnVucyhbLi4uKG5vZGVJbnN0YW5jZS5ydW5zID8/IFtdKV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0UnVucyhbLi4uKG5vZGVJbnN0YW5jZS5ydW5zID8/IFtdKV0pO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgY29uc29sZS5sb2coYE5vZGVJbnN0YW5jZVNoZWV0VmlldzogUkVOREVSYCwgeyBydW5zOiBub2RlSW5zdGFuY2UucnVucyB9KTtcblxuICAgIGlmICghcnVucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgPFRleHQ+RW1wdHk8L1RleHQ+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGFsbEhlYWRlcnM6IFNoZWV0Vmlld0RhdGFbYGhlYWRlcmBdID1cbiAgICAgICAgcnVucz8uZmxhdE1hcChyID0+IFtcbiAgICAgICAgICAgIC4uLnIuaW5wdXRzLm1hcCh4ID0+ICh7IG5hbWU6IHgubmFtZSwgbW9kZTogYGlucHV0YCBhcyBWYWx1ZVZpZXdlck1vZGUgfSkpLFxuICAgICAgICAgICAgLi4uci5pbm5lci5tYXAoeCA9PiAoeyBuYW1lOiB4Lm5hbWUsIG1vZGU6IGBpbm5lcmAgYXMgVmFsdWVWaWV3ZXJNb2RlIH0pKSxcbiAgICAgICAgICAgIC4uLnIub3V0cHV0cy5tYXAoeCA9PiAoeyBuYW1lOiB4Lm5hbWUsIG1vZGU6IGBvdXRwdXRgIGFzIFZhbHVlVmlld2VyTW9kZSB9KSksXG4gICAgICAgIF0pID8/IFtdO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IFsuLi5uZXcgTWFwKGFsbEhlYWRlcnMubWFwKHggPT4gW3gubmFtZSwgeF0pKS52YWx1ZXMoKV07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2hlZXRWaWV3XG4gICAgICAgICAgICBkYXRhPXt7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIHJvd3M6IHJ1bnMubWFwKHIgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbHM6IGhlYWRlcnMubWFwKGggPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGgubW9kZSA9PT0gYGlucHV0YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gci5pbnB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gaC5uYW1lKT8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGgubW9kZSA9PT0gYGlubmVyYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gci5pbm5lci5maW5kKHggPT4geC5uYW1lID09PSBoLm5hbWUpPy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaC5tb2RlID09PSBgb3V0cHV0YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gci5vdXRwdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGgubmFtZSk/LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApO1xufTtcblxuY29uc3QgZ2V0UGlwZUNvbm5lY3Rpb25LZXkgPSAoXG4gICAgY29ubmVjdGlvbjogUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLFxuICAgIGRpcmVjdGlvbjogYGluYCB8IGBvdXRgLFxuKSA9PiB7XG4gICAgcmV0dXJuIGAke2Nvbm5lY3Rpb24ua2V5fToke2RpcmVjdGlvbn1gO1xufTtcblxuY29uc3QgZ2V0UGlwZUtleSA9IChcbiAgICBwaXBlU2lkZTogUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXSB8IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgZGVzdGluYXRpb25gXSxcbiAgICBkaXJlY3Rpb246IGBpbmAgfCBgb3V0YCxcbikgPT4ge1xuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgaW5wdXRgKSB7XG4gICAgICAgIHJldHVybiBnZXRQaXBlQ29ubmVjdGlvbktleShwaXBlU2lkZS5pbnB1dCwgZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgaWYgKHBpcGVTaWRlLmtpbmQgPT09IGBvdXRwdXRgKSB7XG4gICAgICAgIHJldHVybiBnZXRQaXBlQ29ubmVjdGlvbktleShwaXBlU2lkZS5vdXRwdXQsIGRpcmVjdGlvbik7XG4gICAgfVxuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgZGF0YWApIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHBpcGVTaWRlLmtpbmQgPT09IGBvcGVyYXRvci1vdXRwdXRgKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgb3BlcmF0b3ItaW5wdXRgKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IFBpcGVWYWx1ZVZpZXcgPSAoe1xuICAgIHBpcGVWYWx1ZSxcbiAgICBzaWRlLFxufToge1xuICAgIHBpcGVWYWx1ZTogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlO1xuICAgIHNpZGU6IGBpbmZsb3dgIHwgYG91dGZsb3dgO1xufSkgPT4ge1xuICAgIGNvbnN0IHsgc291cmNlLCBkZXN0aW5hdGlvbiB9ID0gcGlwZVZhbHVlID8/IHt9O1xuICAgIGlmICghc291cmNlIHx8ICFkZXN0aW5hdGlvbikge1xuICAgICAgICByZXR1cm4gPD48Lz47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlSWQgPSBnZXRQaXBlS2V5KHNvdXJjZSwgYG91dGApO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uSWQgPSBnZXRQaXBlS2V5KGRlc3RpbmF0aW9uLCBgaW5gKTtcbiAgICBpZiAoIXNvdXJjZUlkIHx8ICFkZXN0aW5hdGlvbklkKSB7XG4gICAgICAgIHJldHVybiA8PjwvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gPFBpcGVWaWV3IHNvdXJjZUlkPXtzb3VyY2VJZH0gZGVzdGluYXRpb25JZD17ZGVzdGluYXRpb25JZH0gc2lkZT17c2lkZX0gLz47XG59O1xuXG5jb25zdCBOb2RlQ29ubmVjdGlvbiA9ICh7XG4gICAgdmFyaWFibGUsXG4gICAgY29ubmVjdGlvbixcbiAgICBoaWRlSW5wdXQsXG4gICAgaGlkZU91dHB1dCxcbn06IHtcbiAgICB2YXJpYWJsZToge1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgIHR5cGU/OiBQaXBlc2NyaXB0VHlwZTtcbiAgICAgICAgaWdub3JlZD86IGJvb2xlYW47XG4gICAgfTtcbiAgICBjb25uZWN0aW9uOiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2U7XG4gICAgaGlkZUlucHV0PzogYm9vbGVhbjtcbiAgICBoaWRlT3V0cHV0PzogYm9vbGVhbjtcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sdW1uJz5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICB7IWhpZGVJbnB1dCAmJiBjb25uZWN0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2Nvbm5lY3Rpb24ua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXcgaWQ9e2dldFBpcGVDb25uZWN0aW9uS2V5KGNvbm5lY3Rpb24sIGBpbmApfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZVZhbHVlVmlldyBwaXBlVmFsdWU9e2Nvbm5lY3Rpb24uaW5mbG93UGlwZX0gc2lkZT0naW5mbG93JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJsdWUtMzAwICR7dmFyaWFibGUuaWdub3JlZCA/IGBsaW5lLXRocm91Z2ggb3BhY2l0eS01MGAgOiBgYH1gfVxuICAgICAgICAgICAgICAgID57YCR7dmFyaWFibGUubmFtZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICB7dmFyaWFibGUudHlwZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbHVtbic+XG4gICAgICAgICAgICAgICAgICAgIHshaGlkZU91dHB1dCAmJiBjb25uZWN0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2Nvbm5lY3Rpb24ua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50VmlldyBpZD17Z2V0UGlwZUNvbm5lY3Rpb25LZXkoY29ubmVjdGlvbiwgYG91dGApfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25uZWN0aW9uLm91dGZsb3dQaXBlcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGZsb3dQaXBlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRmbG93UGlwZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0Zmxvd1BpcGUua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWYWx1ZVZpZXcgcGlwZVZhbHVlPXtvdXRmbG93UGlwZX0gc2lkZT0nb3V0ZmxvdycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICB7Y29ubmVjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3Rpb24ucnVucz8ubmFtZUluU2NvcGVcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGNvbm5lY3Rpb24ucnVucz8ubmFtZUluU2NvcGUgIT09IGNvbm5lY3Rpb24ubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtMzAwJz57YCR7Y29ubmVjdGlvbi5ydW5zLm5hbWVJblNjb3BlfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPE5vZGVDb25uZWN0aW9uVmFsdWUgY29ubmVjdGlvbj17Y29ubmVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3Rpb24uaW5mbG93UGlwZT8ucGlwZS5raW5kID09PSBgZGF0YWAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdtLVsxcHhdIGJnLXB1cnBsZS0xMDAgb3BhY2l0eS01MCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdweC0xIG1pbi13LVs2MHB4XSB0ZXh0LXB1cnBsZS00MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29ubmVjdGlvbi5pbmZsb3dQaXBlPy5waXBlLmpzb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBjcmVhdGVSdW5WYWx1ZSA9ICgpID0+ICh7XG4gICAgVmFsdWVDaGFuZ2VkOiBuZXcgU3ViamVjdDx2b2lkPigpLFxuICAgIENvbXBvbmVudHM6IG5ldyBCZWhhdmlvclN1YmplY3Qoe30gYXMgUmVjb3JkPHN0cmluZywgKCkgPT4gSlNYLkVsZW1lbnQ+KSxcbn0pO1xuZXhwb3J0IGNvbnN0IFJ1blZhbHVlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoY3JlYXRlUnVuVmFsdWUoKSk7XG5cbmNvbnN0IE5vZGVDb25uZWN0aW9uVmFsdWUgPSAoe1xuICAgIGNvbm5lY3Rpb24sXG59OiB7XG4gICAgY29ubmVjdGlvbjogUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlO1xufSkgPT4ge1xuICAgIGNvbnN0IHJ1blZhbHVlQ29udGV4dCA9IHVzZUNvbnRleHQoUnVuVmFsdWVDb250ZXh0KTtcblxuICAgIGNvbnN0IFtydW5WYWx1ZSwgc2V0UnVuVmFsdWVdID0gdXNlU3RhdGUoY29ubmVjdGlvbi5ydW5zPy52YWx1ZSk7XG4gICAgY29uc3QgW2hhc092ZXJyaWRlLCBzZXRIYXNPdmVycmlkZV0gPSB1c2VTdGF0ZSghIWNvbm5lY3Rpb24ucnVucz8ub3ZlcnJpZGUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3ViID0gcnVuVmFsdWVDb250ZXh0LlZhbHVlQ2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE5vZGVDb25uZWN0aW9uVmFsdWU6IFZhbHVlQ2hhbmdlZC5zdWJzY3JpYmVgLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGNvbm5lY3Rpb24ucnVucz8udmFsdWUsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0UnVuVmFsdWUoY29ubmVjdGlvbi5ydW5zPy52YWx1ZSk7XG4gICAgICAgICAgICBzZXRIYXNPdmVycmlkZShjb25uZWN0aW9uLnJ1bnM/Lm92ZXJyaWRlICE9PSB1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gKHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2Nvbm5lY3Rpb25PdmVycmlkZShjb25uZWN0aW9uLCB2YWx1ZSk7XG4gICAgICAgIHJ1blZhbHVlQ29udGV4dC5WYWx1ZUNoYW5nZWQubmV4dCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFZhbHVlRWRpdG9yXG4gICAgICAgICAgICAgICAgaWQ9e2Nvbm5lY3Rpb24ua2V5fVxuICAgICAgICAgICAgICAgIHZhbHVlPXtydW5WYWx1ZX1cbiAgICAgICAgICAgICAgICBoYXNPdmVycmlkZT17aGFzT3ZlcnJpZGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IFJlYWN0LCB7XG4gICAgY3JlYXRlQ29udGV4dCxcbiAgICB1c2VDb250ZXh0LFxuICAgIHVzZUVmZmVjdCxcbiAgICB1c2VMYXlvdXRFZmZlY3QsXG4gICAgdXNlUmVmLFxuICAgIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNb3ZlYWJsZUNvbnRleHQgfSBmcm9tICcuL21vdmVhYmxlLXZpZXcnO1xuaW1wb3J0IHsgUGlwZXNjcmlwdFBpcGVWYWx1ZSwgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlID0gKHtcbiAgICBub2RlSWQsXG4gICAgbmFtZSxcbiAgICBkaXJlY3Rpb24sXG59OiB7XG4gICAgbm9kZUlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRpcmVjdGlvbjogYG91dGAgfCBgaW5gO1xufSkgPT4ge1xuICAgIHJldHVybiBgbm9kZToke25vZGVJZH06JHtkaXJlY3Rpb259OiR7bmFtZX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3cgPSAoe1xuICAgIHdvcmtmbG93VXJpLFxuICAgIG5hbWUsXG4gICAgZGlyZWN0aW9uLFxufToge1xuICAgIHdvcmtmbG93VXJpOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRpcmVjdGlvbjogYG91dGAgfCBgaW5gO1xufSkgPT4ge1xuICAgIHJldHVybiBgd29ya2Zsb3c6JHt3b3JrZmxvd1VyaX06JHtkaXJlY3Rpb259OiR7bmFtZX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yUGlwZVNvdXJjZSA9ICh7XG4gICAgcGlwZSxcbiAgICB3b3JrZmxvdyxcbn06IHtcbiAgICBwaXBlOiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0UGlwZVZhbHVlO1xuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3c7XG59KSA9PiB7XG4gICAgaWYgKCFwaXBlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHBpcGUua2luZCA9PT0gYHdvcmtmbG93LW9wZXJhdG9yYCkge1xuICAgICAgICByZXR1cm4gW2BvcGVyYXRvcmBdLm1hcChuYW1lID0+XG4gICAgICAgICAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHBpcGUua2luZCA9PT0gYHdvcmtmbG93LWlucHV0YCkge1xuICAgICAgICByZXR1cm4gW3BpcGUud29ya2Zsb3dJbnB1dE5hbWVdLm1hcChuYW1lID0+XG4gICAgICAgICAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocGlwZS5raW5kID09PSBgbm9kZWApIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSh7XG4gICAgICAgICAgICAgICAgbm9kZUlkOiBwaXBlLnNvdXJjZU5vZGVJZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBwaXBlLnNvdXJjZU5vZGVPdXRwdXROYW1lLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvLyBpZihwaXBlLmtpbmQgPT09IGBkYXRhYCl7XG5cbiAgICAvLyB9XG5cbiAgICByZXR1cm4gW107XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUGlwZUVuZHBvaW50c1JlZ2lzdHJ5ID0gKCkgPT4gKHtcbiAgICBob3N0T2JzZXJ2YWJsZTogbmV3IFN1YmplY3QoKSBhcyBPYnNlcnZhYmxlPFZpZXc+LFxuICAgIGhvc3RWaWV3OiBudWxsIGFzIG51bGwgfCBWaWV3LFxuICAgIGVuZHBvaW50czoge30gYXMge1xuICAgICAgICBbaWQ6IHN0cmluZ106IHVuZGVmaW5lZCB8IFN1YmplY3Q8eyB4OiBudW1iZXI7IHk6IG51bWJlciB9PjtcbiAgICB9LFxuICAgIHBpcGVzOiBuZXcgQmVoYXZpb3JTdWJqZWN0KFxuICAgICAgICB7fSBhcyB7XG4gICAgICAgICAgICBbaWQ6IHN0cmluZ106XG4gICAgICAgICAgICAgICAgfCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB8IHsgc291cmNlSWQ6IHN0cmluZzsgZGVzdGluYXRpb25JZDogc3RyaW5nOyBzaWRlPzogYGluZmxvd2AgfCBgb3V0Zmxvd2AgfTtcbiAgICAgICAgfSxcbiAgICApLFxufSk7XG50eXBlIFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVQaXBlRW5kcG9pbnRzUmVnaXN0cnk+O1xuZXhwb3J0IGNvbnN0IFBpcGVFbmRwb2ludHNSZWdpc3RyeUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGNyZWF0ZVBpcGVFbmRwb2ludHNSZWdpc3RyeSgpKTtcblxuY29uc3QgZ2V0T3JDcmVhdGVFbmRwb2ludFN1YmplY3QgPSAocmVnaXN0cnk6IFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGUsIGlkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICByZWdpc3RyeS5lbmRwb2ludHNbaWRdXG4gICAgICAgID8/IChyZWdpc3RyeS5lbmRwb2ludHNbaWRdID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfSkpXG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBQaXBlVmlldyA9ICh7XG4gICAgc291cmNlSWQsXG4gICAgZGVzdGluYXRpb25JZCxcbiAgICBzaWRlID0gYGluZmxvd2AsXG59OiB7XG4gICAgc291cmNlSWQ6IHVuZGVmaW5lZCB8IHN0cmluZztcbiAgICBkZXN0aW5hdGlvbklkOiBzdHJpbmc7XG4gICAgc2lkZT86IGBpbmZsb3dgIHwgYG91dGZsb3dgO1xufSkgPT4ge1xuICAgIGNvbnN0IHsgcGlwZXM6IHBpcGVzU3ViamVjdCB9ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBgJHtzb3VyY2VJZH09PiR7ZGVzdGluYXRpb25JZH06OiR7c2lkZX1gO1xuICAgICAgICBjb25zdCBvbGQgPSBwaXBlc1N1YmplY3QudmFsdWU7XG4gICAgICAgIG9sZFtrZXldID0gIXNvdXJjZUlkXG4gICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICBzb3VyY2VJZCxcbiAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICBzaWRlLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICBwaXBlc1N1YmplY3QubmV4dChvbGQpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvbGQgPSBwaXBlc1N1YmplY3QudmFsdWU7XG4gICAgICAgICAgICBvbGRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHBpcGVzU3ViamVjdC5uZXh0KG9sZCk7XG4gICAgICAgIH07XG4gICAgfSwgW3NvdXJjZUlkLCBkZXN0aW5hdGlvbklkLCBzaWRlXSk7XG5cbiAgICByZXR1cm4gPD48Lz47XG59O1xuXG5leHBvcnQgY29uc3QgUGlwZVZpZXdIb3N0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGlwZXM6IHBpcGVzU3ViamVjdCB9ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0KTtcbiAgICBjb25zdCBbcGlwZXMsIHNldFBpcGVzXSA9IHVzZVN0YXRlKHBpcGVzU3ViamVjdC52YWx1ZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3ViID0gcGlwZXNTdWJqZWN0LnN1YnNjcmliZSh4ID0+IHtcbiAgICAgICAgICAgIHNldFBpcGVzKHsgLi4ueCB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyB0ZXN0SUQ9J1BpcGVWaWV3SG9zdCcgY2xhc3NOYW1lPSdhYnNvbHV0ZSB6LTEwIG9wYWNpdHktNzUnPlxuICAgICAgICAgICAge1suLi5PYmplY3QuZW50cmllcyhwaXBlcyldXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoW2ssIHZdKSA9PiAhIXYpXG4gICAgICAgICAgICAgICAgLm1hcCgoW2ssIHZdKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2t9Pnt2ICYmIDxQaXBlVmlld0xpbmUgey4uLnZ9IC8+fTwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuY29uc3QgUGlwZVZpZXdMaW5lID0gKHtcbiAgICBzb3VyY2VJZCxcbiAgICBkZXN0aW5hdGlvbklkLFxuICAgIHNpZGUgPSBgaW5mbG93YCxcbn06IHtcbiAgICBzb3VyY2VJZDogdW5kZWZpbmVkIHwgc3RyaW5nO1xuICAgIGRlc3RpbmF0aW9uSWQ6IHN0cmluZztcbiAgICBzaWRlPzogYGluZmxvd2AgfCBgb3V0Zmxvd2A7XG59KSA9PiB7XG4gICAgY29uc3QgcmVnaXN0cnkgPSB1c2VDb250ZXh0KFBpcGVFbmRwb2ludHNSZWdpc3RyeUNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVzdGluYXRpb25FbmRwb2ludCA9IGdldE9yQ3JlYXRlRW5kcG9pbnRTdWJqZWN0KHJlZ2lzdHJ5LCBkZXN0aW5hdGlvbklkKTtcbiAgICBjb25zdCBzb3VyY2VFbmRwb2ludCA9ICFzb3VyY2VJZCA/IHVuZGVmaW5lZCA6IGdldE9yQ3JlYXRlRW5kcG9pbnRTdWJqZWN0KHJlZ2lzdHJ5LCBzb3VyY2VJZCk7XG5cbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgc291cmNlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgZGVzdGluYXRpb246IHsgeDogMCwgeTogMCB9LFxuICAgIH0pO1xuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFzb3VyY2VFbmRwb2ludCB8fCAhZGVzdGluYXRpb25FbmRwb2ludCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVWaWV3ICFzb3VyY2VFbmRwb2ludCB8fCAhZGVzdGluYXRpb25FbmRwb2ludGAsIHtcbiAgICAgICAgICAgIC8vICAgICBzb3VyY2VJZCxcbiAgICAgICAgICAgIC8vICAgICBkZXN0aW5hdGlvbklkLFxuICAgICAgICAgICAgLy8gICAgIHJlZ2lzdHJ5LFxuICAgICAgICAgICAgLy8gICAgIHNvdXJjZUVuZHBvaW50LFxuICAgICAgICAgICAgLy8gICAgIGRlc3RpbmF0aW9uRW5kcG9pbnQsXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbml0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICAgICAgY29uc3Qgc3ViID0gY29tYmluZUxhdGVzdChbc291cmNlRW5kcG9pbnQsIGRlc3RpbmF0aW9uRW5kcG9pbnQsIGluaXRdKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoW3NvdXJjZSwgZGVzdGluYXRpb25dKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVWaWV3IGRyYXdgLCB7IHNvdXJjZSwgZGVzdGluYXRpb24gfSk7XG4gICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBpbml0aWFsXG4gICAgICAgIGNvbnNvbGUubG9nKGBpbml0aWFsYCwgeyBzb3VyY2VFbmRwb2ludCwgZGVzdGluYXRpb25FbmRwb2ludCB9KTtcbiAgICAgICAgaW5pdC5uZXh0KCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFshZGVzdGluYXRpb25FbmRwb2ludCwgIXNvdXJjZUVuZHBvaW50XSk7XG5cbiAgICBjb25zdCBkZWJ1ZyA9IGZhbHNlO1xuICAgIGNvbnN0IGlzT3V0ZmxvdyA9IHNpZGUgPT09IGBvdXRmbG93YDtcbiAgICBjb25zdCB4RGVsdGEgPSBwb3NpdGlvbi5kZXN0aW5hdGlvbi54IC0gcG9zaXRpb24uc291cmNlLng7XG4gICAgY29uc3QgeURlbHRhID0gcG9zaXRpb24uZGVzdGluYXRpb24ueSAtIHBvc2l0aW9uLnNvdXJjZS55O1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydCh4RGVsdGEgKiB4RGVsdGEgKyB5RGVsdGEgKiB5RGVsdGEpO1xuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMih5RGVsdGEsIHhEZWx0YSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIHRlc3RJRD17YFBpcGVWaWV3TGluZVxuICAgICAgICAgICAgJHtzb3VyY2VJZH1cbiAgICAgICAgICAgID0+JHtkZXN0aW5hdGlvbklkfVxuICAgICAgICAgICAgJHtzaWRlfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctMCBoLTAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJ1xuICAgICAgICA+XG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3ctMCBoLTAgYWJzb2x1dGUnPlxuICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtwb3NpdGlvbi5zb3VyY2UueCArIDR9cHgsJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5zb3VyY2UueSAtIDIgKyAoaXNPdXRmbG93ID8gMiA6IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9cHgpYCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke2FuZ2xlfXJhZClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzT3V0ZmxvdyA/IGBiZy1ibHVlLTQwMGAgOiBgYmctcmVkLTQwMGB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICB7ZGVidWcgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYWJzb2x1dGUgdHJhbnNsYXRlLXktWzEwMHB4XSByb3RhdGUtNDUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LVsxMDAwcHhdIHRleHQtWzRweF0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntgKCR7c291cmNlSWR9KT0+KCR7ZGVzdGluYXRpb25JZH0pYH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+e2AoJHtwb3NpdGlvbi5zb3VyY2UueH0sJHtwb3NpdGlvbi5zb3VyY2UueX0pPT4oJHtwb3NpdGlvbi5kZXN0aW5hdGlvbi54fSwke3Bvc2l0aW9uLmRlc3RpbmF0aW9uLnl9KWB9PC9UZXh0PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgUGlwZUVuZHBvaW50VmlldyA9ICh7IGlkIH06IHsgaWQ6IHN0cmluZyB9KSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IDEyO1xuXG4gICAgY29uc3QgcmVnaXN0cnkgPSB1c2VDb250ZXh0KFBpcGVFbmRwb2ludHNSZWdpc3RyeUNvbnRleHQpO1xuICAgIGNvbnN0IG1vdmVDb250ZXh0ID0gdXNlQ29udGV4dChNb3ZlYWJsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgdGFyZ2V0UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IFZpZXcpO1xuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVFbmRwb2ludFZpZXcgdXNlTGF5b3V0RWZmZWN0YCwgeyByZWdpc3RyeSB9KTtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoID0gcmVnaXN0cnkuaG9zdFZpZXc7XG4gICAgICAgICAgICBpZiAoIWgpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUGlwZUVuZHBvaW50VmlldyB1c2VMYXlvdXRFZmZlY3QgLSBob3N0IE5PVCBSRUFEWWAsIHsgcmVnaXN0cnkgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdCA9IHRhcmdldFJlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKCF0KSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVFbmRwb2ludFZpZXcgdXNlTGF5b3V0RWZmZWN0IC0gY29tcG9uZW50IE5PVCBSRUFEWWAsIHsgcmVnaXN0cnkgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0Lm1lYXN1cmVMYXlvdXQoaCwgKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdCBtZWFzdXJlTGF5b3V0IE5FWFRgLCB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlkLFxuICAgICAgICAgICAgICAgIC8vICAgICBsZWZ0LFxuICAgICAgICAgICAgICAgIC8vICAgICB0b3AsXG4gICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgLy8gICAgIHJlZ2lzdHJ5LFxuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgaWQpO1xuICAgICAgICAgICAgICAgIHMubmV4dCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IGxlZnQgKyBtb3ZlQ29udGV4dC5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICB5OiB0b3AgKyBtb3ZlQ29udGV4dC5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2FsY3VsYXRlKCk7XG4gICAgICAgIHJlZ2lzdHJ5Lmhvc3RPYnNlcnZhYmxlLnN1YnNjcmliZShoID0+IHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXG4gICAgICAgICEhdGFyZ2V0UmVmLmN1cnJlbnQsXG4gICAgICAgIG1vdmVDb250ZXh0LnBvc2l0aW9uLngsXG4gICAgICAgIG1vdmVDb250ZXh0LnBvc2l0aW9uLnksXG4gICAgICAgIG1vdmVDb250ZXh0LnBvc2l0aW9uLnNjYWxlLFxuICAgIF0pO1xuXG4gICAgY29uc3QgZGVidWcgPSBmYWxzZTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J3ctMiBoLTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxWaWV3IHJlZj17dGFyZ2V0UmVmfSBjbGFzc05hbWU9J3ctMCBoLTAgYWJzb2x1dGUgcHQtMSc+XG4gICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ibHVlLTQwMCBib3JkZXItWzFweF0gYm9yZGVyLWJsdWUtOTUwIHJvdW5kZWQtZnVsbCdcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogLXNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAtc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIHtkZWJ1ZyAmJiAoXG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0cmFuc2xhdGUteS1bMTAwcHhdIHJvdGF0ZS05MCc+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTQwMCc+e2lkfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFNjcm9sbFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBWYWx1ZVZpZXdlciwgVmFsdWVWaWV3ZXJNb2RlIH0gZnJvbSAnLi92YWx1ZS12aWV3JztcblxuZXhwb3J0IHR5cGUgU2hlZXRWaWV3RGF0YSA9IHtcbiAgICBoZWFkZXI6IHsgbmFtZTogc3RyaW5nOyBtb2RlOiBWYWx1ZVZpZXdlck1vZGUgfVtdO1xuICAgIHJvd3M6IHsgY2VsbHM6IHVua25vd25bXSB9W107XG59O1xuZXhwb3J0IGNvbnN0IFNoZWV0VmlldyA9ICh7IGRhdGEgfTogeyBkYXRhOiBTaGVldFZpZXdEYXRhIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyB0ZXN0SUQ9J1NoZWV0VmlldycgY2xhc3NOYW1lPSdmbGV4LWNvbCc+XG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICB7ZGF0YS5oZWFkZXIubWFwKHggPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt4Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Pnt4Lm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFNjcm9sbFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBtYXgtaC1bMjV2aF0nPlxuICAgICAgICAgICAgICAgIHtkYXRhLnJvd3MubWFwKChyLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3IuY2VsbHMubWFwKCh4LCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2p9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWYWx1ZVZpZXdlciB2YWx1ZT17eH0gbW9kZT17ZGF0YS5oZWFkZXJbal0ubW9kZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBUZXh0SW5wdXQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBSdW5WYWx1ZUNvbnRleHQgfSBmcm9tICcuL25vZGUtaW5zdGFuY2Utdmlldyc7XG5cbmV4cG9ydCBjb25zdCBWYWx1ZUVkaXRvciA9ICh7XG4gICAgaWQsXG4gICAgdmFsdWUsXG4gICAgaGFzT3ZlcnJpZGUsXG4gICAgb25DaGFuZ2UsXG59OiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB2YWx1ZTogdW5rbm93bjtcbiAgICBoYXNPdmVycmlkZTogYm9vbGVhbjtcbiAgICBvbkNoYW5nZTogKHZhbHVlOiB1bmtub3duKSA9PiB2b2lkO1xufSkgPT4ge1xuICAgIGNvbnN0IHJ1blZhbHVlQ29udGV4dCA9IHVzZUNvbnRleHQoUnVuVmFsdWVDb250ZXh0KTtcblxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gdXNlU3RhYmxlQ2FsbGJhY2soKHY6IHVua25vd24pID0+IHtcbiAgICAgICAgdG9nZ2xlRWRpdChmYWxzZSk7XG4gICAgICAgIG9uQ2hhbmdlKHYpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9nZ2xlRWRpdCA9IHVzZVN0YWJsZUNhbGxiYWNrKCh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBWYWx1ZUVkaXRvcjogdG9nZ2xlRWRpdGAsIHsgdmlzaWJsZSB9KTtcbiAgICAgICAgY29uc3QgbmV3U2hvd0VkaXQgPSB2aXNpYmxlO1xuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBydW5WYWx1ZUNvbnRleHQuQ29tcG9uZW50cy52YWx1ZTtcbiAgICAgICAgaWYgKG5ld1Nob3dFZGl0KSB7XG4gICAgICAgICAgICBjb21wb25lbnRzW2lkXSA9ICgpID0+IChcbiAgICAgICAgICAgICAgICA8VmFsdWVFZGl0TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHRvZ2dsZUVkaXQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIGNvbXBvbmVudHNbaWRdO1xuICAgICAgICB9XG4gICAgICAgIHJ1blZhbHVlQ29udGV4dC5Db21wb25lbnRzLm5leHQoY29tcG9uZW50cyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzSW49eygpID0+IHRvZ2dsZUVkaXQodHJ1ZSl9PlxuICAgICAgICAgICAgICAgIDxWYWx1ZVZpZXdlciB2YWx1ZT17dmFsdWV9IG1vZGU9e2hhc092ZXJyaWRlID8gYG92ZXJyaWRlYCA6IHVuZGVmaW5lZH0gLz5cbiAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IHR5cGUgVmFsdWVWaWV3ZXJNb2RlID0gdW5kZWZpbmVkIHwgYG92ZXJyaWRlYCB8IGBpbnB1dGAgfCBgb3V0cHV0YCB8IGBpbm5lcmA7XG5leHBvcnQgY29uc3QgVmFsdWVWaWV3ZXIgPSAoeyB2YWx1ZSwgbW9kZSB9OiB7IHZhbHVlOiB1bmtub3duOyBtb2RlPzogVmFsdWVWaWV3ZXJNb2RlIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtLVsxcHhdICR7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPT09IGBvdmVycmlkZWBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYGJnLWdyZWVuLTEwMGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gYGlucHV0YFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgYmctZ3JlZW4tMTAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtb2RlID09PSBgb3V0cHV0YFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgYmctZ3JlZW4tMTAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgYmctZ3JheS0xMDBgXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMSBtaW4tdy1bNjBweF0gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUgPT09IGBvdmVycmlkZWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGB0ZXh0LWdyZWVuLTYwMGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vZGUgPT09IGBpbnB1dGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGB0ZXh0LWdyZWVuLTYwMGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vZGUgPT09IGBvdXRwdXRgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgdGV4dC1ncmVlbi02MDBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgdGV4dC1ncmF5LTYwMGBcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkodmFsdWUpfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IFZhbHVlRWRpdE1vZGFsID0gKHtcbiAgICBpZCxcbiAgICB2YWx1ZTogdmFsdWVSYXcsXG4gICAgb25DaGFuZ2UsXG4gICAgb25DYW5jZWwsXG59OiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB2YWx1ZTogdW5rbm93bjtcbiAgICBvbkNoYW5nZTogKHZhbHVlOiB1bmtub3duKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xufSkgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoSlNPTi5zdHJpbmdpZnkodmFsdWVSYXcpKTtcbiAgICBjb25zdCBzYXZlID0gdXNlU3RhYmxlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgfSk7XG4gICAgY29uc3QgY2xlYXIgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gICAgY29uc3QgY2FuY2VsID0gdXNlU3RhYmxlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBvbkNhbmNlbCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdhYnNvbHV0ZSBmbGV4LWNvbCBiZy1ncmF5LTEwMCBwLTIgcm91bmRlZCB6LTEwJz5cbiAgICAgICAgICAgIDxUZXh0SW5wdXQgY2xhc3NOYW1lPSdiZy13aGl0ZScgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZVRleHQ9e3ggPT4gc2V0VmFsdWUoeCl9IC8+XG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzPXtjYW5jZWx9PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLWdyYXktMjAwIHAtMSBtLTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+Q2FuY2VsPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG5cbiAgICAgICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9e2NsZWFyfT5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy1yZWQtMjAwIHAtMSBtLTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+Q2xlYXI8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cblxuICAgICAgICAgICAgICAgIDxQcmVzc2FibGUgb25QcmVzcz17c2F2ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYmctYmx1ZS0yMDAgcC0xIG0tMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5TYXZlPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgeyBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgUGlwZXNjcmlwdFR5cGUsIFBpcGVzY3JpcHRXb3JrZmxvd0lucHV0IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0VHlwZU5hbWUgPSAodHlwZTogUGlwZXNjcmlwdFR5cGUpID0+IHtcbiAgICBpZiAodHlwZS5raW5kID09PSBgc2ltcGxlYCkge1xuICAgICAgICByZXR1cm4gdHlwZS50eXBlO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0eXBlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBXb3JrZmxvd0lucHV0TmFtZSA9ICh7IGlucHV0IH06IHsgaW5wdXQ6IFBpcGVzY3JpcHRXb3JrZmxvd0lucHV0IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ibHVlLTMwMCAke2lucHV0Lmlnbm9yZWQgPyBgbGluZS10aHJvdWdoIG9wYWNpdHktNTBgIDogYGB9YH1cbiAgICAgICAgPntgJHtpbnB1dC5uYW1lfWB9PC9UZXh0PlxuICAgICk7XG59O1xuIiwgImV4cG9ydCBjb25zdCBqc29uU3RyaW5naWZ5X3NhZmUgPSAob2JqUmF3OiB1bmtub3duLCBzaG91bGRGb3JtYXQ/OiBib29sZWFuKTogc3RyaW5nID0+IHtcbiAgICBsZXQgbmV4dElkID0gMTtcbiAgICB0eXBlIFJlZ2lzdHJ5ID0gTWFwPHVua25vd24sIHsgaWQ6IHN0cmluZzsgbWluRGVwdGg6IG51bWJlcjsgdmlzaXRlZD86IGJvb2xlYW4gfT47XG4gICAgY29uc3QgZGVlcFJlZ2lzdGVyID0gKG9iajogdW5rbm93biwgdmlzaXRlZDogUmVnaXN0cnksIGRlcHRoOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogIT09IGBvYmplY3RgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9iaikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2JqUmVnID0gdmlzaXRlZC5nZXQob2JqKTtcbiAgICAgICAgaWYgKG9ialJlZykge1xuICAgICAgICAgICAgb2JqUmVnLm1pbkRlcHRoID0gTWF0aC5taW4oZGVwdGgsIG9ialJlZy5taW5EZXB0aCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2aXNpdGVkLnNldChvYmosIHsgaWQ6IGBfaWRfJHtuZXh0SWQrK31fYCwgbWluRGVwdGg6IGRlcHRoIH0pO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIG9iai5mb3JFYWNoKHggPT4gZGVlcFJlZ2lzdGVyKHgsIHZpc2l0ZWQsIGRlcHRoICsgMSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2goeCA9PiBkZWVwUmVnaXN0ZXIoeCwgdmlzaXRlZCwgZGVwdGggKyAxKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVlcENsb25lID0gKG9iajogdW5rbm93biwgdmlzaXRlZDogUmVnaXN0cnksIGRlcHRoOiBudW1iZXIpOiB1bmtub3duID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09IGBvYmplY3RgKSB7XG4gICAgICAgICAgICBpZiAoIW9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHIgPSB2aXNpdGVkLmdldChvYmopO1xuICAgICAgICAgICAgaWYgKGRlcHRoID4gKHI/Lm1pbkRlcHRoID8/IDApIHx8IHI/LnZpc2l0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBfX19yZWY6IHZpc2l0ZWQuZ2V0KG9iaik/LmlkID8/IGBgLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgci52aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmoubWFwKHggPT4gZGVlcENsb25lKHgsIHZpc2l0ZWQsIGRlcHRoICsgMSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFt2aXNpdGVkLmdldChvYmopPy5pZCA/PyBgYF06IGBgLFxuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMob2JqKS5tYXAoKFtrLCB2XSkgPT4gW2ssIGRlZXBDbG9uZSh2LCB2aXNpdGVkLCBkZXB0aCArIDEpXSksXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICBjb25zdCByZWdpc3RyeTogUmVnaXN0cnkgPSBuZXcgTWFwKCk7XG4gICAgZGVlcFJlZ2lzdGVyKG9ialJhdywgcmVnaXN0cnksIDApO1xuICAgIGNvbnN0IG9iaiA9IGRlZXBDbG9uZShvYmpSYXcsIHJlZ2lzdHJ5LCAwKTtcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBbXSBhcyB1bmtub3duW107XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgc2hvdWxkRm9ybWF0ID8gMiA6IDApO1xufTtcbiIsICJpbXBvcnQgeyBqc29uU3RyaW5naWZ5X3NhZmUgfSBmcm9tICcuLi91dGlscy9qc29uJztcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUyMTcxNDgwLzU2NzUyNFxuY29uc3QgY3lyYjUzID0gKHN0cjogc3RyaW5nLCBzZWVkID0gMCkgPT4ge1xuICAgIGxldCBoMSA9IDB4ZGVhZGJlZWYgXiBzZWVkLFxuICAgICAgICBoMiA9IDB4NDFjNmNlNTcgXiBzZWVkO1xuICAgIGZvciAobGV0IGkgPSAwLCBjaDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoMSA9IE1hdGguaW11bChoMSBeIGNoLCAyNjU0NDM1NzYxKTtcbiAgICAgICAgaDIgPSBNYXRoLmltdWwoaDIgXiBjaCwgMTU5NzMzNDY3Nyk7XG4gICAgfVxuICAgIGgxID0gTWF0aC5pbXVsKGgxIF4gKGgxID4+PiAxNiksIDIyNDY4MjI1MDcpO1xuICAgIGgxIF49IE1hdGguaW11bChoMiBeIChoMiA+Pj4gMTMpLCAzMjY2NDg5OTA5KTtcbiAgICBoMiA9IE1hdGguaW11bChoMiBeIChoMiA+Pj4gMTYpLCAyMjQ2ODIyNTA3KTtcbiAgICBoMiBePSBNYXRoLmltdWwoaDEgXiAoaDEgPj4+IDEzKSwgMzI2NjQ4OTkwOSk7XG5cbiAgICByZXR1cm4gNDI5NDk2NzI5NiAqICgyMDk3MTUxICYgaDIpICsgKGgxID4+PiAwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYXNoQ29kZSA9ICh2YWx1ZTogdW5rbm93bikgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBqc29uU3RyaW5naWZ5X3NhZmUodmFsdWUpO1xuICAgIHJldHVybiBjeXJiNTMoanNvbik7XG59O1xuIiwgImltcG9ydCB7IGhhc2hDb2RlIH0gZnJvbSAnLi9oYXNoJztcbmltcG9ydCB7XG4gICAgUGlwZXNjcmlwdEJ1aWx0aW5PcGVyYXRvcixcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VfT3BlcmF0b3IsXG4gICAgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbklucHV0SW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIFRPRE86IGhhbmRsZSBjeWNsZXNcblxudHlwZSBSdW5Db250ZXh0ID0ge1xuICAgIHZpc2l0ZWQ6IFNldDxPbWl0PFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSwgYG91dGZsb3dQaXBlc2A+PjtcbiAgICBsYXp5OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVJ1biA9IChcbiAgICBkYXRhc2V0OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldCxcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0ID0geyB2aXNpdGVkOiBuZXcgU2V0KCksIGxhenk6IGZhbHNlIH0sXG4pID0+IHtcbiAgICBkYXRhc2V0LnJvb3ROb2RlSW5zdGFuY2VzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX25vZGVPdXRwdXQobm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjYWxjdWxhdGVSdW5fbmFtZXMoZGF0YXNldCk7XG4gICAgcmVjb3JkUnVuKGRhdGFzZXQpO1xufTtcbmNvbnN0IHJlY29yZFJ1biA9IChkYXRhc2V0OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldCkgPT4ge1xuICAgIGRhdGFzZXQuYWxsTm9kZUluc3RhbmNlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBjb25zdCBydW5WYWx1ZSA9IHtcbiAgICAgICAgICAgIGlucHV0czogbm9kZS5pbnB1dHMubWFwKHggPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiB4LnJ1bnM/Lm5hbWVJblNjb3BlID8/IHgubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogeC5ydW5zPy52YWx1ZSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIGlubmVyOiBub2RlLmNoaWxkcmVuLmZsYXRNYXAoYyA9PlxuICAgICAgICAgICAgICAgIGMub3V0cHV0cy5tYXAoeCA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB4LnJ1bnM/Lm5hbWVJblNjb3BlID8/IHgubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHgucnVucz8udmFsdWUsXG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG91dHB1dHM6IG5vZGUub3V0cHV0cy5tYXAoeCA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHgucnVucz8ubmFtZUluU2NvcGUgPz8geC5uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB4LnJ1bnM/LnZhbHVlLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBrZXkgPSBgJHtoYXNoQ29kZShydW5WYWx1ZSl9YDtcbiAgICAgICAgbm9kZS5ydW5zID0gbm9kZS5ydW5zID8/IFtdO1xuICAgICAgICBpZiAobm9kZS5ydW5zLnNvbWUoeCA9PiB4LmtleSA9PT0ga2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUucnVucy5wdXNoKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIC4uLnJ1blZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVSdW5WYWx1ZV9ub2RlT3V0cHV0ID0gKG5vZGU6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsIGNvbnRleHQ6IFJ1bkNvbnRleHQpID0+IHtcbiAgICAvLyBhbGwgb3V0cHV0cyBtdXN0IGJlIGV2YWx1YXRlZCAoYnV0IG1heSByZXR1cm4gdW5kZWZpbmVkKVxuICAgIG5vZGUub3V0cHV0cy5mb3JFYWNoKG91dHB1dCA9PiB7XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KG91dHB1dCwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWNvbnRleHQubGF6eSkge1xuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9ub2RlT3V0cHV0KHgsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5pbnB1dHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KHgsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlID0gKFxuICAgIGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSxcbiAgICB2YWx1ZTogdW5rbm93bixcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0ID0geyB2aXNpdGVkOiBuZXcgU2V0KCksIGxhenk6IGZhbHNlIH0sXG4pID0+IHtcbiAgICBpZiAoIWNvbm5lY3Rpb24ucnVucykge1xuICAgICAgICBjb25uZWN0aW9uLnJ1bnMgPSBjcmVhdGVSdW4oY29ubmVjdGlvbiwgY29udGV4dCk7XG4gICAgfVxuICAgIGNvbnN0IHsgcnVucyB9ID0gY29ubmVjdGlvbjtcbiAgICBydW5zLm92ZXJyaWRlID0gdmFsdWU7XG5cbiAgICBjb25zb2xlLmxvZyhgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlYCwgeyBjb25uZWN0aW9uIH0pO1xuXG4gICAgY29uc3QgYWxsQ29ubmVjdGlvbnMgPSBjb25uZWN0aW9uLm5vZGVJbnN0YW5jZS5kYXRhc2V0LmFsbE5vZGVJbnN0YW5jZXMuZmxhdE1hcCh4ID0+IFtcbiAgICAgICAgLi4ueC5pbnB1dHMsXG4gICAgICAgIC4uLngub3V0cHV0cyxcbiAgICBdKTtcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0PFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZT4oKTtcbiAgICBjb25zdCB1cGRhdGVEZXBlbmRlbnRzID0gKGM6IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSkgPT4ge1xuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9pbnB1dChjLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBkZXBlbmRlbnRzID0gYWxsQ29ubmVjdGlvbnMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiAhdmlzaXRlZC5oYXMoeCkgJiYgeC5ydW5zPy5kZXBlbmRlbmNpZXMuaW5jbHVkZXMoYyksXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB1cGRhdGVEZXBlbmRlbnRzYCwgeyBjLCBkZXBlbmRlbnRzIH0pO1xuICAgICAgICBkZXBlbmRlbnRzLmZvckVhY2goZCA9PiB2aXNpdGVkLmFkZChkKSk7XG4gICAgICAgIGRlcGVuZGVudHMuZm9yRWFjaChkID0+IHVwZGF0ZURlcGVuZGVudHMoZCkpO1xuICAgIH07XG5cbiAgICB1cGRhdGVEZXBlbmRlbnRzKGNvbm5lY3Rpb24pO1xuICAgIGNhbGN1bGF0ZVJ1bl9uYW1lcyhjb25uZWN0aW9uLm5vZGVJbnN0YW5jZS5kYXRhc2V0KTtcbiAgICByZWNvcmRSdW4oY29ubmVjdGlvbi5ub2RlSW5zdGFuY2UuZGF0YXNldCk7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVSdW5fbmFtZXMgPSAoZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQpID0+IHtcbiAgICBjb25zdCBjb250ZXh0cyA9IG5ldyBNYXA8UGlwZXNjcmlwdE5vZGVJbnN0YW5jZSwgUnVuQ29udGV4dD4oKTtcblxuICAgIGNvbnN0IGdsb2JhbCA9IHt9IGFzIFBpcGVzY3JpcHROb2RlSW5zdGFuY2U7XG4gICAgZGF0YXNldC5hbGxOb2RlSW5zdGFuY2VzLmZvckVhY2goeCA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHgucGFyZW50ID8/IGdsb2JhbDtcbiAgICAgICAgY29uc3QgY29udGV4dCA9XG4gICAgICAgICAgICBjb250ZXh0cy5nZXQocGFyZW50KVxuICAgICAgICAgICAgPz8gY29udGV4dHNcbiAgICAgICAgICAgICAgICAuc2V0KHBhcmVudCwge1xuICAgICAgICAgICAgICAgICAgICB2aXNpdGVkOiBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmdldChwYXJlbnQpITtcbiAgICAgICAgeC5vdXRwdXRzLmZvckVhY2gobyA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LnZpc2l0ZWQuYWRkKG8pO1xuXG4gICAgICAgICAgICBpZiAoIW8ucnVucykge1xuICAgICAgICAgICAgICAgIG8ucnVucyA9IGNyZWF0ZVJ1bihvLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8ucnVucy5uYW1lSW5TY29wZSA9IGdldFVuaXF1ZU5hbWUobywgY29udGV4dCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3QgZ2V0VW5pcXVlTmFtZSA9IChcbiAgICBjb25uZWN0aW9uOiBPbWl0PFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSwgYG91dGZsb3dQaXBlc2A+LFxuICAgIGNvbnRleHQ6IFJ1bkNvbnRleHQsXG4pID0+IHtcbiAgICBsZXQgbiA9IGNvbm5lY3Rpb24ubmFtZTtcblxuICAgIHdoaWxlIChbLi4uY29udGV4dC52aXNpdGVkXS5zb21lKHggPT4geCAhPT0gY29ubmVjdGlvbiAmJiB4Lm5hbWUgPT09IG4pKSB7XG4gICAgICAgIG4gPSBgJHtufV8ke2Nvbm5lY3Rpb24ubm9kZUluc3RhbmNlLmtleX1gO1xuICAgIH1cblxuICAgIHJldHVybiBuO1xufTtcblxuY29uc3QgY3JlYXRlUnVuID0gKFxuICAgIGNvbm5lY3Rpb246IE9taXQ8UGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLCBgb3V0Zmxvd1BpcGVzYD4sXG4gICAgY29udGV4dDogUnVuQ29udGV4dCxcbik6IFJlcXVpcmVkPFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZT5bYHJ1bnNgXSA9PiB7XG4gICAgLy8gY29uc3QgbmFtZUluU2NvcGUgPSBnZXRVbmlxdWVOYW1lKGNvbm5lY3Rpb24sIGNvbnRleHQpO1xuICAgIGNvbnN0IG5hbWVJblNjb3BlID0gY29ubmVjdGlvbi5uYW1lO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWVJblNjb3BlLFxuICAgICAgICBvdmVycmlkZTogdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICBkZXBlbmRlbmNpZXM6IFtdLFxuICAgIH07XG59O1xuXG5jb25zdCBjYWxjdWxhdGVSdW5WYWx1ZV9pbnB1dCA9IChcbiAgICBpbnB1dDogT21pdDxQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2UsIGBvdXRmbG93UGlwZXNgPixcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0LFxuKSA9PiB7XG4gICAgaWYgKGNvbnRleHQudmlzaXRlZC5oYXMoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5ydW5zO1xuICAgIH1cbiAgICBjb250ZXh0LnZpc2l0ZWQuYWRkKGlucHV0KTtcbiAgICBpZiAoaW5wdXQucnVucz8ub3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbnB1dC5ydW5zLnZhbHVlID0gaW5wdXQucnVucy5vdmVycmlkZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlucHV0LnJ1bnMgPSBjcmVhdGVSdW4oaW5wdXQsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgaW5mbG93UGlwZSA9IGlucHV0LmluZmxvd1BpcGU7XG4gICAgaWYgKCFpbmZsb3dQaXBlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBzb3VyY2UgfSA9IGluZmxvd1BpcGU7XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgZGF0YWApIHtcbiAgICAgICAgaW5wdXQucnVucyA9IHtcbiAgICAgICAgICAgIC4uLmlucHV0LnJ1bnMsXG4gICAgICAgICAgICB2YWx1ZTogSlNPTi5wYXJzZShzb3VyY2UuanNvbiksXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzb3VyY2Uua2luZCA9PT0gYGlucHV0YCkge1xuICAgICAgICBpbnB1dC5ydW5zID0ge1xuICAgICAgICAgICAgLi4uaW5wdXQucnVucyxcbiAgICAgICAgICAgIHZhbHVlOiBzb3VyY2UuaW5wdXQucnVucz8udmFsdWUsXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFtzb3VyY2UuaW5wdXRdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzb3VyY2Uua2luZCA9PT0gYG91dHB1dGApIHtcbiAgICAgICAgaW5wdXQucnVucyA9IHtcbiAgICAgICAgICAgIC4uLmlucHV0LnJ1bnMsXG4gICAgICAgICAgICB2YWx1ZTogc291cmNlLm91dHB1dC5ydW5zPy52YWx1ZSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW3NvdXJjZS5vdXRwdXRdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzb3VyY2Uua2luZCA9PT0gYG9wZXJhdG9yLW91dHB1dGApIHtcbiAgICAgICAgaW5wdXQucnVucyA9IHtcbiAgICAgICAgICAgIC4uLmlucHV0LnJ1bnMsXG4gICAgICAgICAgICAuLi5jYWxjdWxhdGVSdW5WYWx1ZV9vcGVyYXRvcihzb3VyY2Uubm9kZUluc3RhbmNlLCBjb250ZXh0KSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IF9uZXZlcjogbmV2ZXIgPSB1bmRlZmluZWQgYXMgdHlwZW9mIHNvdXJjZSBhcyBuZXZlcjtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVJ1blZhbHVlX29wZXJhdG9yID0gKFxuICAgIG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0LFxuKSA9PiB7XG4gICAgY29uc3QgY2FsY3VsYXRlQXJnc19pbmRleCA9IChcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICApOiB7XG4gICAgICAgIHZhbHVlOiBudW1iZXI7XG4gICAgICAgIGRlcGVuZGVuY2llczogUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlW107XG4gICAgfSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBub2RlSW5zdGFuY2UuaW5wdXRzW2luZGV4XTtcbiAgICAgICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkIGFzIHVua25vd24gYXMgbnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llczogW3ggYXMgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbklucHV0SW5zdGFuY2VdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9pbnB1dCh4LCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB4LnJ1bnM/LnZhbHVlIGFzIG51bWJlcixcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW3ggYXMgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbklucHV0SW5zdGFuY2VdLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVyYXRvcjogUGlwZXNjcmlwdEJ1aWx0aW5PcGVyYXRvciA9IG5vZGVJbnN0YW5jZS5vcGVyYXRvcjtcblxuICAgIC8vIGxhenlcbiAgICBjb25zdCBhUmVzdWx0ID0gY2FsY3VsYXRlQXJnc19pbmRleCgwKTtcbiAgICBjb25zdCBhID0gYVJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSBbLi4uYVJlc3VsdC5kZXBlbmRlbmNpZXNdO1xuXG4gICAgaWYgKG9wZXJhdG9yID09PSBgJiZgKSB7XG4gICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gY2FsY3VsYXRlQXJnc19pbmRleCgxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHY/LnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llczogWy4uLmRlcGVuZGVuY2llcywgLi4udi5kZXBlbmRlbmNpZXNdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYVJlc3VsdDtcbiAgICB9XG4gICAgaWYgKG9wZXJhdG9yID09PSBgfHxgKSB7XG4gICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgY29uc3QgdiA9IGNhbGN1bGF0ZUFyZ3NfaW5kZXgoMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2Py52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFsuLi5kZXBlbmRlbmNpZXMsIC4uLnYuZGVwZW5kZW5jaWVzXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFSZXN1bHQ7XG4gICAgfVxuICAgIGlmIChvcGVyYXRvciA9PT0gYGNvbmRpdGlvbmFsLXRlcm5hcnlgKSB7XG4gICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gY2FsY3VsYXRlQXJnc19pbmRleCgxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHY/LnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llczogWy4uLmRlcGVuZGVuY2llcywgLi4udi5kZXBlbmRlbmNpZXNdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2ID0gY2FsY3VsYXRlQXJnc19pbmRleCgyKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB2Py52YWx1ZSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogWy4uLmRlcGVuZGVuY2llcywgLi4udi5kZXBlbmRlbmNpZXNdLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIHVuYXJ5XG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIGA9YDpcbiAgICAgICAgICAgIHJldHVybiBhUmVzdWx0O1xuICAgICAgICBjYXNlIGBkZWNsYXJhdGlvbmA6XG4gICAgICAgICAgICByZXR1cm4gYVJlc3VsdDtcbiAgICAgICAgY2FzZSBgIWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiAhYSB9O1xuICAgICAgICBjYXNlIGArK2A6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICsgMSB9O1xuICAgICAgICBjYXNlIGAtLWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIC0gMSB9O1xuICAgIH1cblxuICAgIC8vIGJpbmFyeVxuICAgIGNvbnN0IGJSZXN1bHQgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDEpO1xuICAgIGNvbnN0IGIgPSBiUmVzdWx0LnZhbHVlO1xuICAgIGRlcGVuZGVuY2llcy5wdXNoKC4uLmJSZXN1bHQuZGVwZW5kZW5jaWVzKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSBgK2A6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICsgYiB9O1xuICAgICAgICBjYXNlIGAtYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgLSBiIH07XG4gICAgICAgIGNhc2UgYCpgOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAqIGIgfTtcbiAgICAgICAgY2FzZSBgL2A6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIC8gYiB9O1xuICAgICAgICBjYXNlIGAlYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgJSBiIH07XG4gICAgICAgIGNhc2UgYDxgOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSA8IGIgfTtcbiAgICAgICAgY2FzZSBgPmA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhID4gYiB9O1xuICAgICAgICBjYXNlIGA8PWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIDw9IGIgfTtcbiAgICAgICAgY2FzZSBgPj1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSA+PSBiIH07XG4gICAgICAgIGNhc2UgYD09YDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgPT09IGIgfTtcbiAgICAgICAgY2FzZSBgIT1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAhPT0gYiB9O1xuICAgIH1cblxuICAgIGNvbnN0IF9uZXZlcjogbmV2ZXIgPSB1bmRlZmluZWQgYXMgdHlwZW9mIG9wZXJhdG9yIGFzIG5ldmVyO1xuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IE1vdXNlQnV0dG9uLCBNb3ZlYWJsZVZpZXcgfSBmcm9tICcuL21vdmVhYmxlLXZpZXcnO1xuaW1wb3J0IHtcbiAgICBQaXBlRW5kcG9pbnRWaWV3LFxuICAgIFBpcGVWaWV3LFxuICAgIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSxcbiAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2UsXG4gICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyxcbn0gZnJvbSAnLi9waXBlcyc7XG5pbXBvcnQgeyBXb3JrZmxvd0lucHV0TmFtZSwgZ2V0VHlwZU5hbWUgfSBmcm9tICcuL3dvcmstbmFtZXMnO1xuaW1wb3J0IHsgUGlwZXNjcmlwdE5vZGUsIFBpcGVzY3JpcHRXb3JrZmxvdyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IFdvcmtGbG93VmlldyA9ICh7XG4gICAgd29ya2Zsb3csXG4gICAgZnVsbCA9IGZhbHNlLFxuICAgIGhpZGVUaXRsZXMgPSBmYWxzZSxcbn06IHtcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xuICAgIGZ1bGw/OiBib29sZWFuO1xuICAgIGhpZGVUaXRsZXM/OiBib29sZWFuO1xufSkgPT4ge1xuICAgIC8vICR7ZnVsbCA/IGBtaW4tdy1bMjB2d10gbWluLWgtWzIwdmhdYCA6IGBtaW4tdy1bMjBweF0gbWluLWgtWzEwcHhdYH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC1jb2x1bW4gcmVsYXRpdmUgYmctc2xhdGUtOTUwLzc1IGJvcmRlci1ibHVlLTEwMCBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIG0tWy0xcHhdIHJvdW5kZWRcbiAgICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHshaGlkZVRpdGxlcyAmJiAoXG4gICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPntgJHt3b3JrZmxvdy5uYW1lfWB9PC9UZXh0PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBmbGV4LTEnPlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCc+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5pbnB1dHMubWFwKGlucHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xIGZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtmbG93SW5wdXROYW1lIGlucHV0PXtpbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93VXJpOiB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpbnB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC0xJz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBhbmltYXRlLWJvdW5jZSB0ZXh0LVs4cHhdIGFic29sdXRlIHRvcC0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHUyNkNGXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmJvZHkubm9kZXM/Lm1hcChuID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17bi5ub2RlSWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlVmlldyBub2RlPXtufSBjb250YWluZXI9e3dvcmtmbG93fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTIgZmxleC1yb3cgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ibHVlLTQwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5ib2R5Lm9wZXJhdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYG9wZXJhdG9yYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLm1hcChvcGVyYXRvckVuZHBvaW50SWQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3BlcmF0b3JFbmRwb2ludElkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50VmlldyBpZD17b3BlcmF0b3JFbmRwb2ludElkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5pbnB1dHMubWFwKGluUGlwZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luUGlwZS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uSWQ9e29wZXJhdG9yRW5kcG9pbnRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpblBpcGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5vdXRwdXRzLm1hcChvdXRwdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0cHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xIGZsZXgtcm93IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZS5raW5kID09PSBgZGF0YWAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtcHVycGxlLTQwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3V0cHV0LnBpcGUuanNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvdXRwdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JQaXBlU291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXBlOiBvdXRwdXQucGlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pPy5tYXAoc291cmNlSWQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbklkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93VXJpOiB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvdXRwdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkPXtzb3VyY2VJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtYmx1ZS0zMDAnPntgJHtvdXRwdXQubmFtZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDwvVmlldz5cblxuICAgICAgICAgICAgeyFoaWRlVGl0bGVzICYmIChcbiAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e2Ake3dvcmtmbG93LndvcmtmbG93VXJpfWB9PC9UZXh0PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIHt3b3JrZmxvdy53b3JrZmxvd3M/Lm1hcCh3ID0+IChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt3Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIGxlZnQtMCB0b3AtMCBzY2FsZS01MCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V29ya0Zsb3dWaWV3IHdvcmtmbG93PXt3fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkpfSAqL31cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBOb2RlVmlldyA9ICh7IG5vZGUsIGNvbnRhaW5lciB9OiB7IG5vZGU6IFBpcGVzY3JpcHROb2RlOyBjb250YWluZXI6IFBpcGVzY3JpcHRXb3JrZmxvdyB9KSA9PiB7XG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHg6IG5vZGUubGF5b3V0Py5wb3NpdGlvbi54ID8/IDAsXG4gICAgICAgIHk6IG5vZGUubGF5b3V0Py5wb3NpdGlvbi55ID8/IDAsXG4gICAgICAgIHNjYWxlOiBub2RlLmxheW91dD8uc2NhbGUgPz8gMSxcbiAgICB9KTtcbiAgICBjb25zdCBtb3ZlTm9kZSA9IHVzZVN0YWJsZUNhbGxiYWNrKCh2YWx1ZTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlciB9KSA9PiB7XG4gICAgICAgIHNldFBvc2l0aW9uKHZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5vZGVWaWV3YCwgeyBub2RlLCBjb250YWluZXIgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB3b3JrZmxvdyA9ICgoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXIud29ya2Zsb3dzPy5maW5kKHcgPT4gdy53b3JrZmxvd1VyaSA9PT0gbm9kZS53b3JrZmxvd1VyaSk7XG4gICAgfSkoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TW92ZWFibGVWaWV3XG4gICAgICAgICAgICBwb3NpdGlvbj17e1xuICAgICAgICAgICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBzY2FsZTogcG9zaXRpb24uc2NhbGUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3ZlPXttb3ZlTm9kZX1cbiAgICAgICAgICAgIG1vdXNlQnV0dG9uPXtNb3VzZUJ1dHRvbi5MZWZ0fVxuICAgICAgICA+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleC1jb2x1bW4gYmctemluYy05NTAvNzUgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gbS1bLTFweF0gcm91bmRlZCdcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weClgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e3dvcmtmbG93Lm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTIgdGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz4je25vZGUubm9kZUlkfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAge3dvcmtmbG93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpbnB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQaXBlID0gbm9kZS5pbnB1dFBpcGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0+IHAubmFtZSA9PT0gaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dFBpcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRQaXBlLmtpbmQgPT09IGBkYXRhYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nbWwtWy0xNnB4XSBtci1bMTZweF0gdGV4dC1wdXJwbGUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dFBpcGUuanNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbWwtWy04cHhdIG1yLVswcHhdJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbm9kZS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yUGlwZVNvdXJjZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvdzogY29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlwZTogbm9kZS5pbnB1dFBpcGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4Lm5hbWUgPT09IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KT8ubWFwKHNvdXJjZUlkID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c291cmNlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25JZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpbnB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkPXtzb3VyY2VJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtmbG93SW5wdXROYW1lIGlucHV0PXtpbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3dvcmtmbG93fSBoaWRlVGl0bGVzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93Lm91dHB1dHMubWFwKG91dHB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dHB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xIGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtMzAwJz57YCR7b3V0cHV0Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+OjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbWwtWzBweF0gbXItWy04cHhdJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbm9kZS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvdXRwdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgey8qIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57bm9kZS5pbXBsZW1lbnRhdGlvbi59PC9UZXh0PiAqL31cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9Nb3ZlYWJsZVZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHsgY2FsY3VsYXRlUnVuIH0gZnJvbSAnLi9jYWxjdWxhdGUtcnVuJztcbmltcG9ydCB7XG4gICAgUGlwZXNjcmlwdE5vZGUsXG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldCxcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlX09wZXJhdG9yLFxuICAgIFBpcGVzY3JpcHRQaXBlVmFsdWUsXG4gICAgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHRXb3JrZmxvdyxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgbG9hZFJ1bnRpbWUgPSAoXG4gICAgd29ya2Zsb3dSYXc6IFBpcGVzY3JpcHRXb3JrZmxvdyxcbik6IHtcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xuICAgIGNvbnRleHQ6IFBpcGVzY3JpcHRSdW50aW1lQ29udGV4dDtcbiAgICBkYXRhc2V0OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldDtcbn0gPT4ge1xuICAgIGNvbnN0IHdvcmtmbG93ID0gd29ya2Zsb3dSYXcgYXMgUGlwZXNjcmlwdFdvcmtmbG93O1xuICAgIC8vIHdvcmtmbG93LnRyZWUgPSB7XG4gICAgLy8gICAgIGNvbnRhaW5lcjogdW5kZWZpbmVkLFxuICAgIC8vICAgICB1c2FnZXM6IFtdLFxuICAgIC8vIH07XG5cbiAgICBjb25zdCBnZXRXb3JrZmxvd3NSZWN1cnNpdmUgPSAodzogUGlwZXNjcmlwdFdvcmtmbG93KTogUGlwZXNjcmlwdFdvcmtmbG93W10gPT4ge1xuICAgICAgICByZXR1cm4gW3csIC4uLih3LndvcmtmbG93cz8uZmxhdE1hcCh3MiA9PiBnZXRXb3JrZmxvd3NSZWN1cnNpdmUodzIpKSA/PyBbXSldO1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxXb3JrZmxvd3MgPSBnZXRXb3JrZmxvd3NSZWN1cnNpdmUod29ya2Zsb3cpO1xuICAgIGNvbnN0IGFsbE5vZGVzID0gYWxsV29ya2Zsb3dzLmZsYXRNYXAodyA9PiAody5ib2R5LmtpbmQgPT09IGBub2Rlc2AgPyB3LmJvZHkubm9kZXMgOiBbXSkpO1xuICAgIGNvbnN0IGFsbFBpcGVzX3dvcmtmbG93T3V0cHV0cyA9IGFsbFdvcmtmbG93c1xuICAgICAgICAuZmxhdE1hcCh3ID0+IHcub3V0cHV0cy5mbGF0TWFwKG8gPT4gby5waXBlKSlcbiAgICAgICAgLmZpbHRlcih4ID0+IHgpXG4gICAgICAgIC5tYXAoeCA9PiB4ISk7XG4gICAgY29uc3QgYWxsUGlwZXNfbm9kZUlucHV0cyA9IGFsbE5vZGVzXG4gICAgICAgIC5mbGF0TWFwKG4gPT4gbi5pbnB1dFBpcGVzKVxuICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgLm1hcCh4ID0+IHghKTtcbiAgICBjb25zdCBhbGxQaXBlcyA9IFsuLi5hbGxQaXBlc193b3JrZmxvd091dHB1dHMsIC4uLmFsbFBpcGVzX25vZGVJbnB1dHNdO1xuXG4gICAgY29uc3QgZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQgPSB7XG4gICAgICAgIGFsbE5vZGVJbnN0YW5jZXM6IFtdLFxuICAgICAgICByb290Tm9kZUluc3RhbmNlczogW10sXG4gICAgfTtcbiAgICBjb25zdCBjb250ZXh0OiBQaXBlc2NyaXB0UnVudGltZUNvbnRleHQgPSB7XG4gICAgICAgIGFsbFdvcmtmbG93cyxcbiAgICAgICAgYWxsV29ya2Zsb3dzTWFwOiBuZXcgTWFwKGFsbFdvcmtmbG93cy5tYXAoeCA9PiBbeC53b3JrZmxvd1VyaSwgeF0pKSxcbiAgICAgICAgYWxsTm9kZXMsXG4gICAgICAgIGFsbE5vZGVzTWFwOiBuZXcgTWFwKGFsbE5vZGVzLm1hcCh4ID0+IFt4Lm5vZGVJZCwgeF0pKSxcbiAgICAgICAgYWxsUGlwZXMsXG4gICAgICAgIGRhdGFzZXQsXG4gICAgICAgIGFsbE5vZGVJbnN0YW5jZXM6IGRhdGFzZXQuYWxsTm9kZUluc3RhbmNlcyxcbiAgICAgICAgcm9vdE5vZGVJbnN0YW5jZXM6IGRhdGFzZXQucm9vdE5vZGVJbnN0YW5jZXMsXG4gICAgfTtcblxuICAgIGNvbnRleHQucm9vdE5vZGVJbnN0YW5jZXMucHVzaChcbiAgICAgICAgLi4uKHdvcmtmbG93LmJvZHkubm9kZXM/Lm1hcChub2RlID0+IGNyZWF0ZU5vZGVJbnN0YW5jZXMobm9kZSwgdW5kZWZpbmVkLCBjb250ZXh0KSkgPz8gW10pLFxuICAgICk7XG5cbiAgICBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbG9hZE5vZGVDb25uZWN0aW9uc19pbmZsb3dzKG5vZGUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsSW5mbG93UGlwZXMgPSBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXNcbiAgICAgICAgLmZsYXRNYXAoeCA9PiBbLi4ueC5pbnB1dHMubWFwKHkgPT4geS5pbmZsb3dQaXBlKSwgLi4ueC5vdXRwdXRzLm1hcCh5ID0+IHkuaW5mbG93UGlwZSldKVxuICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgLm1hcCh4ID0+IHghKTtcbiAgICBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbG9hZE5vZGVDb25uZWN0aW9uc19vdXRmbG93cyhub2RlLCBhbGxJbmZsb3dQaXBlcyk7XG4gICAgfSk7XG5cbiAgICBjYWxjdWxhdGVSdW4oZGF0YXNldCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3b3JrZmxvdyxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgZGF0YXNldCxcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUGlwZXNjcmlwdFJ1bnRpbWVDb250ZXh0ID0ge1xuICAgIGFsbFdvcmtmbG93czogUGlwZXNjcmlwdFdvcmtmbG93W107XG4gICAgYWxsV29ya2Zsb3dzTWFwOiBNYXA8c3RyaW5nLCBQaXBlc2NyaXB0V29ya2Zsb3c+O1xuICAgIGFsbE5vZGVzOiBQaXBlc2NyaXB0Tm9kZVtdO1xuICAgIGFsbE5vZGVzTWFwOiBNYXA8c3RyaW5nLCBQaXBlc2NyaXB0Tm9kZT47XG4gICAgYWxsUGlwZXM6IFBpcGVzY3JpcHRQaXBlVmFsdWVbXTtcblxuICAgIC8vIGNyZWF0ZWQgZHVyaW5nIGNyZWF0ZU5vZGVJbnN0YW5jZXNcbiAgICBkYXRhc2V0OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldDtcbiAgICBhbGxOb2RlSW5zdGFuY2VzOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlW107XG4gICAgcm9vdE5vZGVJbnN0YW5jZXM6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VbXTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5vZGVJbnN0YW5jZXMgPSAoXG4gICAgbm9kZTogUGlwZXNjcmlwdE5vZGUsXG4gICAgcGFyZW50OiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIGNvbnRleHQ6IFBpcGVzY3JpcHRSdW50aW1lQ29udGV4dCxcbik6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UgPT4ge1xuICAgIGNvbnN0IHdvcmtmbG93ID0gY29udGV4dC5hbGxXb3JrZmxvd3NNYXAuZ2V0KG5vZGUud29ya2Zsb3dVcmkpO1xuICAgIGlmICghd29ya2Zsb3cpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYG1pc3Npbmcgd29ya2Zsb3cgJHtub2RlLndvcmtmbG93VXJpfWApO1xuICAgIH1cbiAgICAvLyBub2RlLnRyZWUgPSB7XG4gICAgLy8gICAgIHdvcmtmbG93LFxuICAgIC8vIH07XG5cbiAgICBjb25zdCBpbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSA9IHtcbiAgICAgICAgZGF0YXNldDogY29udGV4dC5kYXRhc2V0LFxuICAgICAgICBrZXk6IGAke2NvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5sZW5ndGh9YCxcbiAgICAgICAgbm9kZSxcbiAgICAgICAgd29ya2Zsb3csXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuICAgIGNvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcblxuICAgIC8vIENyZWF0ZSBjb25uZWN0aW9ucyAod2l0aG91dCBwaXBlcylcbiAgICBpbnN0YW5jZS5pbnB1dHMgPSB3b3JrZmxvdy5pbnB1dHMubWFwKHdvcmtmbG93SW5wdXQgPT4gKHtcbiAgICAgICAga2V5OiBgJHtjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMubGVuZ3RofToke3dvcmtmbG93SW5wdXQubmFtZX06d29ya2Zsb3dJbnB1dGAsXG4gICAgICAgIG5vZGVJbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgIGtpbmQ6IGB3b3JrZmxvdy1pbnB1dGAsXG4gICAgICAgIHdvcmtmbG93SW5wdXQsXG4gICAgICAgIG5hbWU6IHdvcmtmbG93SW5wdXQubmFtZSxcbiAgICAgICAgaW5mbG93UGlwZTogdW5kZWZpbmVkLFxuICAgICAgICBvdXRmbG93UGlwZXM6IFtdLFxuICAgIH0pKTtcbiAgICBpbnN0YW5jZS5vdXRwdXRzID0gd29ya2Zsb3cub3V0cHV0cy5tYXAod29ya2Zsb3dPdXRwdXQgPT4gKHtcbiAgICAgICAga2V5OiBgJHtjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMubGVuZ3RofToke3dvcmtmbG93T3V0cHV0Lm5hbWV9OndvcmtmbG93T3V0cHV0YCxcbiAgICAgICAgbm9kZUluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAga2luZDogYHdvcmtmbG93LW91dHB1dGAsXG4gICAgICAgIHdvcmtmbG93T3V0cHV0LFxuICAgICAgICBuYW1lOiB3b3JrZmxvd091dHB1dC5uYW1lLFxuICAgICAgICBpbmZsb3dQaXBlOiB1bmRlZmluZWQsXG4gICAgICAgIG91dGZsb3dQaXBlczogW10sXG4gICAgfSkpO1xuXG4gICAgLy8gVE9ETzogaGFuZGxlIHJlY3Vyc2l2ZS9jeWNsaWNhbCB3b3JrZmxvd3NcbiAgICBpbnN0YW5jZS5jaGlsZHJlbiA9XG4gICAgICAgIHdvcmtmbG93LmJvZHkubm9kZXM/Lm1hcChuID0+IGNyZWF0ZU5vZGVJbnN0YW5jZXMobiwgaW5zdGFuY2UsIGNvbnRleHQpKSA/PyBbXTtcblxuICAgIGlmICh3b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmApIHtcbiAgICAgICAgaW5zdGFuY2Uub3BlcmF0b3IgPSB3b3JrZmxvdy5ib2R5Lm9wZXJhdG9yO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn07XG5cbmNvbnN0IGxvYWROb2RlQ29ubmVjdGlvbnNfaW5mbG93cyA9IChub2RlSW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UpID0+IHtcbiAgICAvLyBjb25uZWN0IGluZmxvd3NcbiAgICBub2RlSW5zdGFuY2UuaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBjb25zdCBub2RlSW5wdXQgPSBub2RlSW5zdGFuY2Uubm9kZS5pbnB1dFBpcGVzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGlucHV0Lm5hbWUpO1xuICAgICAgICBpZiAoIW5vZGVJbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0SW5mbG93U291cmNlID0gKCk6IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF0gPT4ge1xuICAgICAgICAgICAgY29uc3QgcGlwZVNvdXJjZSA9IG5vZGVJbnB1dDtcbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGBkYXRhYCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBkYXRhYCxcbiAgICAgICAgICAgICAgICAgICAganNvbjogcGlwZVNvdXJjZS5qc29uLFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgd29ya2Zsb3ctb3BlcmF0b3JgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYG9wZXJhdG9yLW91dHB1dGAsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJbnN0YW5jZTogbm9kZUluc3RhbmNlIGFzIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VfT3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGB3b3JrZmxvdy1pbnB1dGApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlV29ya2Zsb3dJbnB1dCA9IG5vZGVJbnN0YW5jZS5pbnB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gcGlwZVNvdXJjZS5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVXb3JrZmxvd0lucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiBnZXRJbmZsb3dTb3VyY2U6IE1pc3Npbmcgbm9kZVdvcmtmbG93SW5wdXQgJHtwaXBlU291cmNlLm5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYGlucHV0YCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5vZGVXb3JrZmxvd0lucHV0LFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgbm9kZWApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZWVyTm9kZU91dHB1dCA9IG5vZGVJbnN0YW5jZS5wYXJlbnQ/LmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKG4yID0+IG4yLm5vZGUubm9kZUlkID09PSBwaXBlU291cmNlLnNvdXJjZU5vZGVJZClcbiAgICAgICAgICAgICAgICAgICAgPy5vdXRwdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHBpcGVTb3VyY2Uuc291cmNlTm9kZU91dHB1dE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcGVlck5vZGVPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IGdldEluZmxvd1NvdXJjZTogTWlzc2luZyBwZWVyTm9kZU91dHB1dCAke3BpcGVTb3VyY2UubmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpcGVTb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5PdXRwdXRzOiBub2RlSW5zdGFuY2UuY2hpbGRyZW4ubWFwKHggPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5vdXRwdXRzLm1hcChvID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG8ua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogby5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBvLm5vZGVJbnN0YW5jZS5ub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgb3V0cHV0YCxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBwZWVyTm9kZU91dHB1dCxcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiB1bmtub3duIHBpcGVTb3VyY2UgJHsocGlwZVNvdXJjZSBhcyB7IGtpbmQ6IHN0cmluZyB9KS5raW5kfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzb3VyY2UgPSBnZXRJbmZsb3dTb3VyY2UoKTtcbiAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LmluZmxvd1BpcGUgPSB7XG4gICAgICAgICAgICBrZXk6IGAke2lucHV0LmtleX06cGlwZWAsXG4gICAgICAgICAgICBwaXBlOiBub2RlSW5wdXQsXG4gICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IGBpbnB1dGAsXG4gICAgICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgbm9kZUluc3RhbmNlLm91dHB1dHMuZm9yRWFjaChvdXRwdXQgPT4ge1xuICAgICAgICBjb25zdCB3b3JrZmxvd091dHB1dCA9IG5vZGVJbnN0YW5jZS53b3JrZmxvdy5vdXRwdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IG91dHB1dC5uYW1lKTtcbiAgICAgICAgY29uc3Qgd29ya2Zsb3dPdXRwdXRQaXBlID0gd29ya2Zsb3dPdXRwdXQ/LnBpcGU7XG4gICAgICAgIGlmICghd29ya2Zsb3dPdXRwdXRQaXBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZXRJbmZsb3dTb3VyY2UgPSAoKTogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwaXBlU291cmNlID0gd29ya2Zsb3dPdXRwdXRQaXBlO1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lOiBwaXBlU291cmNlTmFtZSB9ID0gd29ya2Zsb3dPdXRwdXQ7XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgZGF0YWApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgZGF0YWAsXG4gICAgICAgICAgICAgICAgICAgIGpzb246IHBpcGVTb3VyY2UuanNvbixcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYHdvcmtmbG93LW9wZXJhdG9yYCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBvcGVyYXRvci1vdXRwdXRgLFxuICAgICAgICAgICAgICAgICAgICBub2RlSW5zdGFuY2U6IG5vZGVJbnN0YW5jZSBhcyBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlX09wZXJhdG9yLFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgd29ya2Zsb3ctaW5wdXRgKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZVdvcmtmbG93SW5wdXQgPSBub2RlSW5zdGFuY2UuaW5wdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHBpcGVTb3VyY2VOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVXb3JrZmxvd0lucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiBnZXRJbmZsb3dTb3VyY2U6IE1pc3Npbmcgbm9kZVdvcmtmbG93SW5wdXQgJHtwaXBlU291cmNlTmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgaW5wdXRgLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dDogbm9kZVdvcmtmbG93SW5wdXQsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGBub2RlYCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyTm9kZU91dHB1dCA9IG5vZGVJbnN0YW5jZS5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAuZmluZChuMiA9PiBuMi5ub2RlLm5vZGVJZCA9PT0gcGlwZVNvdXJjZS5zb3VyY2VOb2RlSWQpXG4gICAgICAgICAgICAgICAgICAgID8ub3V0cHV0cy5maW5kKHggPT4geC5uYW1lID09PSBwaXBlU291cmNlTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpbm5lck5vZGVPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IGdldEluZmxvd1NvdXJjZTogTWlzc2luZyBwZWVyTm9kZU91dHB1dCAke3BpcGVTb3VyY2VOYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBvdXRwdXRgLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IGlubmVyTm9kZU91dHB1dCxcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiB1bmtub3duIHBpcGVTb3VyY2UgJHsocGlwZVNvdXJjZSBhcyB7IGtpbmQ6IHN0cmluZyB9KS5raW5kfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzb3VyY2UgPSBnZXRJbmZsb3dTb3VyY2UoKTtcbiAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dHB1dC5pbmZsb3dQaXBlID0ge1xuICAgICAgICAgICAga2V5OiBgJHtvdXRwdXQua2V5fTpwaXBlYCxcbiAgICAgICAgICAgIHBpcGU6IHdvcmtmbG93T3V0cHV0UGlwZSxcbiAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAga2luZDogYG91dHB1dGAsXG4gICAgICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGxvYWROb2RlQ29ubmVjdGlvbnNfb3V0Zmxvd3MgPSAoXG4gICAgbm9kZUluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIGFsbEluZmxvd1BpcGVzOiBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbXSxcbikgPT4ge1xuICAgIG5vZGVJbnN0YW5jZS5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0Lm91dGZsb3dQaXBlcyA9IGFsbEluZmxvd1BpcGVzLmZpbHRlcihcbiAgICAgICAgICAgIHggPT4geC5zb3VyY2Uua2luZCA9PT0gYGlucHV0YCAmJiB4LnNvdXJjZS5pbnB1dCA9PT0gaW5wdXQsXG4gICAgICAgICk7XG4gICAgfSk7XG4gICAgbm9kZUluc3RhbmNlLm91dHB1dHMuZm9yRWFjaChvdXRwdXQgPT4ge1xuICAgICAgICBvdXRwdXQub3V0Zmxvd1BpcGVzID0gYWxsSW5mbG93UGlwZXMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4LnNvdXJjZS5raW5kID09PSBgb3V0cHV0YCAmJiB4LnNvdXJjZS5vdXRwdXQgPT09IG91dHB1dCxcbiAgICAgICAgKTtcbiAgICB9KTtcbn07XG4iLCAiLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDEtZGVjbGFyYXRpb25zLzAyLnRzLndvcmtmbG93Lmpzb24nO1xuLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDItYXNzaWdubWVudHMvMDEudHMud29ya2Zsb3cuanNvbic7XG5pbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwMy1vcGVyYXRvcnMvMDQudHMud29ya2Zsb3cuanNvbic7XG4vLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwNC1tdXRhdGlvbi8wMS50cy53b3JrZmxvdy5qc29uJztcbi8vIGltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDA1LWxvZ2ljLzAyLnRzLndvcmtmbG93Lmpzb24nO1xuaW1wb3J0IHsgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi9zcmMvdHlwZXMnO1xuZXhwb3J0IHsgV29ya0NhbnZhc1ZpZXcgfSBmcm9tICcuL3NyYy91aS93b3JrLWNhbnZhcy12aWV3JztcbmV4cG9ydCBjb25zdCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvdyA9IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBhcyBQaXBlc2NyaXB0V29ya2Zsb3c7XG4iLCAiaW1wb3J0IHsgV29ya0NhbnZhc1ZpZXcsIGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93IH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9waXBlc2NyaXB0JztcblxuZXhwb3J0IGNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCB3b3JrZmxvdyA9IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93O1xuICAgIHJldHVybiA8V29ya0NhbnZhc1ZpZXcgd29ya2Zsb3c9e3dvcmtmbG93fSAvPjtcbn07XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIGJhY2tncm91bmRDb2xvciBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBhbmltYXRlZCBgdHJ1ZWAgdG8gYW5pbWF0ZSB0aGUgYmFja2dyb3VuZCBjb2xvciBjaGFuZ2UsIGBmYWxzZWAgdG8gY2hhbmdlIGltbWVkaWF0ZWx5LlxuICogQHBsYXRmb3JtIGFuZHJvaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyQmFja2dyb3VuZENvbG9yKGJhY2tncm91bmRDb2xvcjogc3RyaW5nLCBhbmltYXRlZDogYm9vbGVhbikge1xuICBTdGF0dXNCYXIuc2V0QmFja2dyb3VuZENvbG9yKGJhY2tncm91bmRDb2xvciwgYW5pbWF0ZWQpO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIHRoZSBuZXR3b3JrIGFjdGl2aXR5IGluZGljYXRvci5cbiAqIEBwYXJhbSB2aXNpYmxlIElmIHRoZSBuZXR3b3JrIGFjdGl2aXR5IGluZGljYXRvciBzaG91bGQgYmUgdmlzaWJsZS5cbiAqIEBwbGF0Zm9ybSBpb3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyTmV0d29ya0FjdGl2aXR5SW5kaWNhdG9yVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gIFN0YXR1c0Jhci5zZXROZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlKHZpc2libGUpO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhckFuaW1hdGlvbiB9IGZyb20gJy4vU3RhdHVzQmFyLnR5cGVzJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gaGlkZGVuIElmIHRoZSBzdGF0dXMgYmFyIHNob3VsZCBiZSBoaWRkZW4uXG4gKiBAcGFyYW0gYW5pbWF0aW9uIEFuaW1hdGlvbiB0byB1c2Ugd2hlbiB0b2dnbGluZyBoaWRkZW4sIGRlZmF1bHRzIHRvIGAnbm9uZSdgLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJIaWRkZW4oaGlkZGVuOiBib29sZWFuLCBhbmltYXRpb246IFN0YXR1c0JhckFuaW1hdGlvbikge1xuICBTdGF0dXNCYXIuc2V0SGlkZGVuKGhpZGRlbiwgYW5pbWF0aW9uKTtcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBTdGF0dXNCYXJTdHlsZSB9IGZyb20gJy4vU3RhdHVzQmFyLnR5cGVzJztcbmltcG9ydCBzdHlsZVRvQmFyU3R5bGUgZnJvbSAnLi9zdHlsZVRvQmFyU3R5bGUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBTZXQgdGhlIGJhciBzdHlsZSBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBzdHlsZSBUaGUgY29sb3Igb2YgdGhlIHN0YXR1cyBiYXIgdGV4dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyU3R5bGUoc3R5bGU6IFN0YXR1c0JhclN0eWxlKSB7XG4gIFN0YXR1c0Jhci5zZXRCYXJTdHlsZShzdHlsZVRvQmFyU3R5bGUoc3R5bGUpKTtcbn1cbiIsICJpbXBvcnQgeyBBcHBlYXJhbmNlLCBDb2xvclNjaGVtZU5hbWUgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBTdGF0dXNCYXJTdHlsZSB9IGZyb20gJy4vU3RhdHVzQmFyLnR5cGVzJztcblxuZnVuY3Rpb24gZ2V0Q29sb3JTY2hlbWUoKSB7XG4gIGlmIChBcHBlYXJhbmNlKSB7XG4gICAgcmV0dXJuIEFwcGVhcmFuY2UuZ2V0Q29sb3JTY2hlbWUoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ2xpZ2h0JztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHlsZVRvQmFyU3R5bGUoXG4gIHN0eWxlOiBTdGF0dXNCYXJTdHlsZSA9ICdhdXRvJyxcbiAgY29sb3JTY2hlbWU6IENvbG9yU2NoZW1lTmFtZSA9IGdldENvbG9yU2NoZW1lKClcbik6ICdsaWdodC1jb250ZW50JyB8ICdkYXJrLWNvbnRlbnQnIHtcbiAgaWYgKCFjb2xvclNjaGVtZSkge1xuICAgIGNvbG9yU2NoZW1lID0gJ2xpZ2h0JztcbiAgfVxuXG4gIGxldCByZXNvbHZlZFN0eWxlID0gc3R5bGU7XG4gIGlmIChzdHlsZSA9PT0gJ2F1dG8nKSB7XG4gICAgcmVzb2x2ZWRTdHlsZSA9IGNvbG9yU2NoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgfSBlbHNlIGlmIChzdHlsZSA9PT0gJ2ludmVydGVkJykge1xuICAgIHJlc29sdmVkU3R5bGUgPSBjb2xvclNjaGVtZSA9PT0gJ2xpZ2h0JyA/ICdsaWdodCcgOiAnZGFyayc7XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZWRTdHlsZSA9PT0gJ2xpZ2h0JyA/ICdsaWdodC1jb250ZW50JyA6ICdkYXJrLWNvbnRlbnQnO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFNldCB0aGUgdHJhbnNsdWNlbmN5IG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIHRyYW5zbHVjZW50IFdoZXRoZXIgdGhlIGFwcCBjYW4gZHJhdyB1bmRlciB0aGUgc3RhdHVzIGJhci4gV2hlbiBgdHJ1ZWAsIGNvbnRlbnQgd2lsbCBiZVxuICogcmVuZGVyZWQgdW5kZXIgdGhlIHN0YXR1cyBiYXIuIFRoaXMgaXMgYWx3YXlzIGB0cnVlYCBvbiBpT1MgYW5kIGNhbm5vdCBiZSBjaGFuZ2VkLlxuICogQHBsYXRmb3JtIGFuZHJvaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyVHJhbnNsdWNlbnQodHJhbnNsdWNlbnQ6IGJvb2xlYW4pIHtcbiAgU3RhdHVzQmFyLnNldFRyYW5zbHVjZW50KHRyYW5zbHVjZW50KTtcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdleHBvLXN0YXR1cy1iYXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcmVzc2FibGUsIFRleHQsIFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgY29uc3QgRXhhbXBsZVZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBpbmNyZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIHNldENvdW50KHMgPT4gcyArIDEpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgZmxleC1jb2wgZmxleC0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1yZWQtMTAwJz5cbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1jeWFuLTcwMCc+RXhhbXBsZVZpZXcgLi4uPC9UZXh0PlxuICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzPXtpbmNyZW1lbnR9PlxuICAgICAgICAgICAgICAgIDxUZXh0PntgSW5jcmVtZW50IGNvdW50OiR7Y291bnR9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQ+MDAzPC9UZXh0PlxuICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICA8U3RhdHVzQmFyIHN0eWxlPSdhdXRvJyAvPlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tICd0YWlsd2luZGNzcyc7XG5cbmV4cG9ydCBjb25zdCB0YWlsd2luZFRoZW1lOiBDb25maWdbYHRoZW1lYF0gPSB7XG4gICAgLy8gZWRpdCB5b3VyIHRhaWx3aW5kIHRoZW1lIGhlcmUhXG4gICAgLy8gaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9hZGRpbmctY3VzdG9tLXN0eWxlc1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsUUFBVSxDQUFDO0FBQUEsRUFDWCxTQUFXLENBQUM7QUFBQSxFQUNaLE1BQVE7QUFBQSxJQUNOLE1BQVE7QUFBQSxJQUNSLE9BQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxhQUFlO0FBQUEsUUFDZixRQUFVO0FBQUEsUUFDVixZQUFjLENBQUM7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsYUFBZTtBQUFBLE1BQ2YsTUFBUTtBQUFBLE1BQ1IsUUFBVSxDQUFDO0FBQUEsTUFDWCxTQUFXO0FBQUEsUUFDVDtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsTUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLGNBQWdCO0FBQUEsWUFDaEIsc0JBQXdCO0FBQUEsVUFDMUI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBYTtBQUFBLFFBQ1g7QUFBQSxVQUNFLGFBQWU7QUFBQSxVQUNmLE1BQVE7QUFBQSxVQUNSLFFBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsVUFBWTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFXO0FBQUEsWUFDVDtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0EsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLFVBQVk7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWU7QUFBQSxVQUNmLE1BQVE7QUFBQSxVQUNSLFFBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixVQUFZO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsVUFBWTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFXO0FBQUEsWUFDVDtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0EsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLFVBQVk7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWU7QUFBQSxVQUNmLE1BQVE7QUFBQSxVQUNSLFFBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixVQUFZO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFB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QVEsT0FBTyxDQUFDO0FBRXJCLFNBQ0ksQ0FBQyw2QkFBNkIsU0FBUyxPQUFPQSxTQUFRLFNBQ2xELENBQUNKLE1BQUssS0FBSyxTQUFTLFVBQVUsZ0JBQzFCLENBQUMsZ0JBQWdCLFVBQ1osQ0FBQyxFQUFFLFVBQVUsa0JBQWtCLE1BQzVCLENBQUMsZ0JBQWdCO0FBQUEsSUFDYixPQUFPO0FBQUEsTUFDSCxVQUFVO0FBQUEsUUFDTixHQUFHO0FBQUEsUUFDSCxHQUFHO0FBQUEsUUFDSCxPQUFPLGtCQUFrQjtBQUFBLE1BQzdCO0FBQUEsTUFDQSxhQUFhO0FBQUEsSUFDakI7QUFBQTtBQUFBLElBRUEsQ0FBQyxhQUFhO0FBQUEsS0FDYjtBQUFBLEVBQ0wsRUFaQyxnQkFBZ0IsVUFjekIsRUFoQkMsZ0JBQWdCLFNBaUJyQixFQWxCQ0EsTUFtQkwsRUFwQkMsNkJBQTZCO0FBc0J0Qzs7O0E2RC9HTyxJQUFNLDZCQUE2Qjs7O0FDTG5DLElBQU0sTUFBTSxNQUFNO0FBQ3JCLFFBQU0sV0FBVztBQUNqQixTQUFPLENBQUMsZUFBZSxVQUFVLFVBQVU7QUFDL0M7OztBQ0xBLFNBQVMsaUJBQWlCOzs7QUNBMUIsU0FBUyxhQUFBTSxrQkFBaUI7OztBQ0ExQixTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQTFCLFNBQVMsYUFBQUMsa0JBQWlCOzs7QUNBMUIsU0FBUyxrQkFBbUM7OztBQ0E1QyxTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQzFCLFNBQVMsWUFBQUMsaUJBQWdCO0FBQ3pCLFNBQVMsYUFBQUMsWUFBVyxRQUFBQyxPQUFNLFFBQUFDLGFBQVk7OztBQ0EvQixJQUFNLGdCQUFpQztBQUFBO0FBQUE7QUFHOUM7IiwKICAibmFtZXMiOiBbIlJlYWN0IiwgInVzZUxheW91dEVmZmVjdCIsICJ1c2VSZWYiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlByZXNzYWJsZSIsICJkIiwgImIiLCAiZnJvbSIsICJ2IiwgIlN1YnNjcmlwdGlvbiIsICJTdWJzY3JpYmVyIiwgIkNvbnN1bWVyT2JzZXJ2ZXIiLCAiU2FmZVN1YnNjcmliZXIiLCAiT2JzZXJ2YWJsZSIsICJvYnNlcnZhYmxlIiwgIk9wZXJhdG9yU3Vic2NyaWJlciIsICJlcnIiLCAiU3ViamVjdCIsICJvYnNlcnZhYmxlIiwgIkFub255bW91c1N1YmplY3QiLCAiQmVoYXZpb3JTdWJqZWN0IiwgImRlbGF5IiwgImRlbGF5IiwgImRlbGF5IiwgIml0ZXJhdG9yIiwgIml0ZXJhdG9yIiwgImlzQXJyYXkiLCAiaSIsICJ1c2VSZWYiLCAidXNlUmVmIiwgIlJlYWN0IiwgImNyZWF0ZUNvbnRleHQiLCAidXNlQ29udGV4dCIsICJ1c2VFZmZlY3QiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlJlYWN0IiwgImNyZWF0ZUNvbnRleHQiLCAidXNlRWZmZWN0IiwgInVzZVJlZiIsICJ1c2VTdGF0ZSIsICJWaWV3IiwgIlRleHQiLCAiY3JlYXRlQ29udGV4dCIsICJ1c2VFZmZlY3QiLCAib2xkIiwgInVzZVN0YXRlIiwgIlZpZXciLCAiUmVhY3QiLCAiVGV4dCIsICJ1c2VSZWYiLCAiUmVhY3QiLCAiVmlldyIsICJUZXh0IiwgInVzZUNvbnRleHQiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlByZXNzYWJsZSIsICJ1c2VDb250ZXh0IiwgIlByZXNzYWJsZSIsICJWaWV3IiwgIlRleHQiLCAidXNlU3RhdGUiLCAiVmlldyIsICJSZWFjdCIsICJUZXh0IiwgIlRleHQiLCAib2JqIiwgInZpc2l0ZWQiLCAiY29udGV4dCIsICJ2IiwgIlZpZXciLCAiUmVhY3QiLCAidXNlQ29udGV4dCIsICJ1c2VTdGF0ZSIsICJ1c2VFZmZlY3QiLCAiVGV4dCIsICJjcmVhdGVDb250ZXh0IiwgIlJlYWN0IiwgInVzZVN0YXRlIiwgIlZpZXciLCAiVGV4dCIsICJWaWV3IiwgIlRleHQiLCAiUmVhY3QiLCAiTm9kZVZpZXciLCAidXNlU3RhdGUiLCAiY29udGV4dCIsICJ1c2VSZWYiLCAidXNlU3RhdGUiLCAiVmlldyIsICJSZWFjdCIsICJQcmVzc2FibGUiLCAiVGV4dCIsICJjb250ZXh0IiwgInVzZUxheW91dEVmZmVjdCIsICJTdGF0dXNCYXIiLCAiU3RhdHVzQmFyIiwgIlN0YXR1c0JhciIsICJTdGF0dXNCYXIiLCAidXNlU3RhdGUiLCAiUHJlc3NhYmxlIiwgIlRleHQiLCAiVmlldyJdCn0K
