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
import React5, { useLayoutEffect as useLayoutEffect4, useRef as useRef6, useState as useState5 } from "react";
import { View as View6, Text as Text6, Pressable as Pressable6 } from "react-native";

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
  function Subscription3(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription3.prototype.unsubscribe = function() {
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
  Subscription3.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription3) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription3.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription3.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription3.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription3.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription3) {
      teardown._removeParent(this);
    }
  };
  Subscription3.EMPTY = function() {
    var empty = new Subscription3();
    empty.closed = true;
    return empty;
  }();
  return Subscription3;
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
  __extends(BehaviorSubject3, _super);
  function BehaviorSubject3(_value) {
    var _this = _super.call(this) || this;
    _this._value = _value;
    return _this;
  }
  Object.defineProperty(BehaviorSubject3.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  });
  BehaviorSubject3.prototype._subscribe = function(subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  };
  BehaviorSubject3.prototype.getValue = function() {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  };
  BehaviorSubject3.prototype.next = function(value) {
    _super.prototype.next.call(this, this._value = value);
  };
  return BehaviorSubject3;
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
  return <MoveableContext.Consumer>{({ position: contextScale }) => <><View
    className="flex-col flex-1"
  >
    {wholeCanvas && <View
      className="flex-col"
    >
      {HeaderComponent && <View
        className="bg-white"
      ><HeaderComponent /></View>}
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
    <View
      className={`flex-1 ${wholeCanvas ? `overflow-hidden` : ``}`}
    ><Pressable
      className={outerClassName}
      ref={hostRef}
      onPointerDown={(e) => wholeCanvas && startDrag(e, contextScale.scale)}
      onPointerUp={(e) => endDrag(e, contextScale.scale)}
      onPointerMove={(e) => moveDrag(e, contextScale.scale)}
    ><Pressable
      className={`${innerClassName}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`
      }}
      onPointerDown={(e) => startDrag(e, contextScale.scale)}
    ><MoveableContext.Provider value={{ position, wholeCanvas }}>{children}</MoveableContext.Provider></Pressable></Pressable></View>
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

// ../../packages/pipescript/src/ui/work-flow-view.tsx
import React3, {
  useState as useState3
} from "react";
import { View as View4, Text as Text4 } from "react-native";

// ../../packages/pipescript/src/ui/pipes.tsx
import {
  createContext as createContext2,
  useContext,
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
  destinationId,
  side = `inflow`
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
        setPosition({ source, destination });
      }
    );
    console.log(`initial`);
    init.next();
  }, [!destinationEndpoint, !sourceEndpoint]);
  const debug = false;
  const isOutflow = side === `outflow`;
  const xDelta = (isOutflow ? -1 : 1) * (position.destination.x - position.source.x);
  const yDelta = (isOutflow ? -1 : 1) * (position.destination.y - position.source.y);
  const length = Math.sqrt(xDelta * xDelta + yDelta * yDelta);
  const angle = Math.atan2(yDelta, xDelta);
  return <View2 className="w-0 h-0 justify-center items-center">
    <View2 className="w-0 h-0 absolute"><View2
      style={{
        transform: `translate(${-xDelta + 4}px,${-yDelta - 2 + (isOutflow ? 4 : 0)}px)`
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
  const registry = useContext(PipeEndpointsRegistry);
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
    {debug && <View2 className="absolute translate-y-[100px] rotate-90"><Text2
      className="text-blue-400"
    >{id}</Text2></View2>}
  </View2>;
};

// ../../packages/pipescript/src/ui/work-names.tsx
import { Text as Text3 } from "react-native";
var getTypeName = (type) => {
  if (type.kind === `simple`) {
    return type.type;
  }
  return JSON.stringify(type);
};
var WorkflowInputName = ({ input }) => {
  return <Text3
    className={`text-blue-300 ${input.ignored ? `line-through opacity-50` : ``}`}
  >{`${input.name}`}</Text3>;
};

// ../../packages/pipescript/src/ui/work-flow-view.tsx
var WorkFlowView = ({
  workflow,
  full = false,
  hideTitles = false
}) => {
  return <View4
    className={`flex-column relative bg-slate-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded
            `}
  >
    {!hideTitles && <Text4 className="text-yellow-400 self-center">{`${workflow.name}`}</Text4>}
    <View4 className="flex-row flex-1">
      <View4 className="flex-col justify-start items-start">{workflow.inputs.map((input) => <React3.Fragment key={input.name}><View4 className="p-1 flex-row justify-start items-center">
        <WorkflowInputName input={input} />
        <Text4 className="text-white">:</Text4>
        <Text4 className="pl-1 text-green-800">{`${getTypeName(
          input.type
        )}`}</Text4>
        <Text4 className="pl-1" />
        <View4 className=""><PipeEndpointView
          id={calculatePipeEndpointIdForWorkflow({
            workflowUri: workflow.workflowUri,
            direction: `in`,
            name: input.name
          })}
        /></View4>
        <Text4 className="pl-1" />
      </View4></React3.Fragment>)}</View4>
      <View4 className="flex-1"><View4 className="flex-col justify-center items-center">
        <View4 className="justify-center items-center"><Text4 className="text-white animate-bounce text-[8px] absolute top-2">{"\u26CF"}</Text4></View4>
        <View4 className="flex-row">
          {workflow.body.nodes?.map((n) => <React3.Fragment key={n.nodeId}><View4 className="p-2"><NodeView node={n} container={workflow} /></View4></React3.Fragment>)}
          {workflow.body.kind === `operator` && <React3.Fragment><View4 className="p-2 flex-row items-center">
            <Text4 className="pl-1 text-blue-400">{workflow.body.operator}</Text4>
            <Text4 className="pl-1" />
            <View4 className="">{[calculatePipeEndpointIdForWorkflow({
              workflowUri: workflow.workflowUri,
              direction: `out`,
              name: `operator`
            })].map((operatorEndpointId) => <React3.Fragment key={operatorEndpointId}>
              <PipeEndpointView
                id={operatorEndpointId}
              />
              {workflow.inputs.map((inPipe) => <React3.Fragment key={inPipe.name}><PipeView
                destinationId={operatorEndpointId}
                sourceId={calculatePipeEndpointIdForWorkflow({
                  workflowUri: workflow.workflowUri,
                  direction: `in`,
                  name: inPipe.name
                })}
              /></React3.Fragment>)}
            </React3.Fragment>)}</View4>
          </View4></React3.Fragment>}
        </View4>
      </View4></View4>
      <View4 className="flex-col justify-end items-end">{workflow.outputs.map((output) => <React3.Fragment key={output.name}><View4 className="p-1 flex-row justify-end items-center">
        {output.pipe && <>{output.pipe.kind === `data` && <Text4 className="text-purple-400">{output.pipe.json}</Text4>}</>}
        <Text4 className="pr-1" />
        <View4 className="">
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
        </View4>
        <Text4 className="pr-1" />
        <Text4 className="text-blue-300">{`${output.name}`}</Text4>
        <Text4 className="text-white">:</Text4>
        <Text4 className="pl-1 text-green-800">{`${getTypeName(
          output.type
        )}`}</Text4>
      </View4></React3.Fragment>)}</View4>
    </View4>
    {!hideTitles && <Text4 className="text-yellow-400 self-center">{`${workflow.workflowUri}`}</Text4>}
    {
      /* {workflow.workflows?.map(w => (
          <React.Fragment key={w.name}>
              <View className='absolute left-0 top-0 scale-50'>
                  <WorkFlowView workflow={w} />
              </View>
          </React.Fragment>
      ))} */
    }
  </View4>;
};
var NodeView = ({ node, container }) => {
  const [position, setPosition] = useState3({
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
  ><View4
    className="flex-column bg-zinc-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded"
    style={{
      left: position.x,
      top: position.y
      // transform: `translate(${position.x}px, ${position.y}px)`,
    }}
  >
    <View4 className="flex-row justify-center">
      {workflow && <Text4 className="text-yellow-400 self-center">{workflow.name}</Text4>}
      <Text4 className="pl-2 text-yellow-400 self-center">
        {"#"}
        {node.nodeId}
      </Text4>
    </View4>
    {workflow && <View4 className="flex-row flex-1">
      <View4 className="flex-col justify-start items-start">{workflow.inputs.map((input) => <React3.Fragment key={input.name}><View4 className="p-1 flex-row justify-center items-center relative">
        {(() => {
          const inputPipe = node.inputPipes.find(
            (p) => p.name === input.name
          );
          if (!inputPipe) {
            return void 0;
          }
          return <>{inputPipe.kind === `data` && <Text4 className="ml-[-16px] mr-[16px] text-purple-400">{inputPipe.json}</Text4>}</>;
        })()}
        <View4 className="ml-[-8px] mr-[0px]">
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
        </View4>
        <Text4 className="pl-1" />
        <WorkflowInputName input={input} />
        {
          /* <Text className='text-white'>:</Text>
          <Text className='pl-1 text-green-800'>{`${getTypeName(
              input.type,
          )}`}</Text> */
        }
      </View4></React3.Fragment>)}</View4>
      <View4 className="flex-1"><WorkFlowView workflow={workflow} hideTitles /></View4>
      <View4 className="flex-col justify-end items-end">{workflow.outputs.map((output) => <React3.Fragment key={output.name}><View4 className="p-1 flex-row justify-center items-center relative">
        <Text4 className="text-blue-300">{`${output.name}`}</Text4>
        {
          /* <Text className='text-white'>:</Text>
          <Text className='pl-1 text-green-800'>{`${getTypeName(
              output.type,
          )}`}</Text> */
        }
        <Text4 className="pr-1" />
        <View4 className="ml-[0px] mr-[-8px]"><PipeEndpointView
          id={calculatePipeEndpointIdForNode({
            nodeId: node.nodeId,
            direction: `out`,
            name: output.name
          })}
        /></View4>
      </View4></React3.Fragment>)}</View4>
    </View4>}
    {
      /* <Text className='text-yellow-400 self-center'>{node.implementation.}</Text> */
    }
  </View4></MoveableView>;
};

// ../../packages/pipescript/src/ui/node-instance-view.tsx
import React4, {
  createContext as createContext4,
  useContext as useContext3,
  useEffect as useEffect4,
  useState as useState4
} from "react";
import { View as View5, Text as Text5 } from "react-native";

// ../../packages/pipescript/src/analysis/calculate-run.ts
var calculateRun = (dataset, context2 = { visited: /* @__PURE__ */ new Set(), lazy: false }) => {
  dataset.rootNodeInstances.forEach((node) => {
    calculateRunValue_nodeOutput(node, context2);
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
    connection.runs = {
      override: value,
      value,
      dependencies: []
    };
  }
  const { runs } = connection;
  const allConnections = connection.nodeInstance.dataset.allNodeInstances.flatMap((x) => [
    ...x.inputs,
    ...x.outputs
  ]);
  const updateDependents = (dependencies) => {
    const deps = new Set(dependencies);
    const dependents = allConnections.filter((x) => x.runs?.dependencies.some((d) => deps.has(d)));
    dependents.forEach((d) => calculateRunValue_input(d, context2));
    dependents.forEach((d) => updateDependents(d.runs?.dependencies ?? []));
  };
  updateDependents(runs.dependencies);
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
  input.runs = void 0;
  const inflowPipe = input.inflowPipe;
  if (!inflowPipe) {
    return;
  }
  const { source } = inflowPipe;
  if (source.kind === `data`) {
    input.runs = {
      value: JSON.parse(source.json),
      dependencies: []
    };
    return;
  }
  if (source.kind === `input`) {
    input.runs = { value: source.input.runs?.value, dependencies: [source.input] };
    return;
  }
  if (source.kind === `output`) {
    input.runs = { value: source.output.runs?.value, dependencies: [source.output] };
    return;
  }
  if (source.kind === `operator-output`) {
    input.runs = calculateRunValue_operator(source.nodeInstance, context2);
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
  return <RunValueContext.Provider value={{ ValueChanged: new Subject() }}><View5 className="flex-row">{nodeInstances.map((x) => <React4.Fragment key={x.key}><NodeView2
    nodeInstance={x}
  /></React4.Fragment>)}</View5></RunValueContext.Provider>;
};
var NodeView2 = ({
  nodeInstance
}) => {
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
  return <View5
    className="p-1"
  ><MoveableView
    position={{
      x: position.x,
      y: position.y,
      scale: position.scale
    }}
    onMove={moveNode}
    mouseButton={1 /* Left */}
  ><View5
    className="flex-column relative bg-slate-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded p-1"
  >
    <Text5 className="text-yellow-400 self-center">{`${nodeInstance.workflow.name} #${nodeInstance.key}`}</Text5>
    <View5 className="flex-row flex-1">
      <View5 className="flex-col justify-start items-start">{workflow.inputs.map((input) => <React4.Fragment key={input.name}><NodeConnection variable={input} connection={nodeInstance.inputs.find((x) => x.workflowInput === input)} /></React4.Fragment>)}</View5>
      <View5 className="flex-1"><View5 className="flex-col justify-center items-center">
        <View5 className="justify-center items-center"><Text5 className="text-white animate-bounce text-[8px] absolute top-2">{"\u26CF"}</Text5></View5>
        <View5 className="flex-row">
          {nodeInstance.children.length && <View5 className="flex-row">{nodeInstance.children.map((x) => <React4.Fragment key={x.key}><NodeView2
            nodeInstance={x}
          /></React4.Fragment>)}</View5>}
          {workflow.body.kind === `operator` && <React4.Fragment><NodeConnection
            variable={{ name: workflow.body.operator }}
          /></React4.Fragment>}
        </View5>
      </View5></View5>
      <View5 className="flex-col justify-end items-end">{workflow.outputs.map((output) => <React4.Fragment key={output.name}><NodeConnection variable={output} connection={nodeInstance.outputs.find((x) => x.workflowOutput === output)} /></React4.Fragment>)}</View5>
    </View5>
  </View5></MoveableView></View5>;
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
  connection: connectionRaw,
  connectionsIn: connectionsInRaw,
  connectionsOut: connectionsOutRaw
}) => {
  const connectionsIn = connectionsInRaw ?? (connectionRaw ? [connectionRaw] : []);
  const connectionsOut = connectionsOutRaw ?? (connectionRaw ? [connectionRaw] : []);
  return <View5 className="flex-row justify-start items-center">
    <View5 className="flex-column">{connectionsIn.map((x) => <React4.Fragment key={x.key}><View5 className="flex-row justify-start items-center">
      <View5 className="absolute right-10">{x.inflowPipe?.pipe.kind === `data` && <Text5 className="text-purple-400 px-1">{x.inflowPipe?.pipe.json}</Text5>}</View5>
      <PipeEndpointView id={getPipeConnectionKey(x, `in`)} />
      <PipeValueView pipeValue={x.inflowPipe} side="inflow" />
      <NodeConnectionValue connection={x} />
    </View5></React4.Fragment>)}</View5>
    <Text5 className="pl-1" />
    <Text5
      className={`text-blue-300 ${variable.ignored ? `line-through opacity-50` : ``}`}
    >{`${variable.name}`}</Text5>
    {variable.type && <>
      <Text5 className="text-white">:</Text5>
      <Text5 className="pl-1 text-green-800">{`${getTypeName(
        variable.type
      )}`}</Text5>
    </>}
    <Text5 className="pl-1" />
    <View5 className="flex-column">{connectionsOut.map((x) => <React4.Fragment key={x.key}>
      <PipeEndpointView id={getPipeConnectionKey(x, `out`)} />
      {x.outflowPipes.map((outflowPipe) => outflowPipe && <React4.Fragment key={outflowPipe.key}><PipeValueView pipeValue={outflowPipe} side="outflow" /></React4.Fragment>)}
    </React4.Fragment>)}</View5>
  </View5>;
};
var RunValueContext = createContext4({
  ValueChanged: new Subject()
});
var NodeConnectionValue = ({ connection }) => {
  const runValueContext = useContext3(RunValueContext);
  const [runValue, setRunValue] = useState4(connection.runs?.value);
  useEffect4(() => {
    runValueContext.ValueChanged.subscribe(() => {
      setRunValue(connection.runs?.value);
    });
  }, []);
  const changeValue = (value) => {
    calculateRunValue_connectionOverride(connection, value);
    runValueContext.ValueChanged.next();
  };
  return <>{runValue && <ValueEditor value={runValue} onChange={changeValue} />}</>;
};
var ValueEditor = ({ value, onChange }) => {
  return <Text5 className="text-purple-400 px-1">{JSON.stringify(value)}</Text5>;
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
  const nodeInstancesDatasetRef = useRef6(loadRuntime(workflow).dataset);
  const nodeInstances = nodeInstancesDatasetRef.current.rootNodeInstances;
  const viewRef = useRef6(null);
  const hostRef = useRef6(new Subject());
  const context2 = useRef6({
    hostObservable: hostRef.current.pipe(delay(250)),
    hostView: null,
    endpoints: {}
  });
  useLayoutEffect4(() => {
    if (!viewRef.current) {
      return;
    }
    context2.current.hostView = viewRef.current;
    hostRef.current.next(viewRef.current);
  }, [!viewRef.current]);
  const tabs = [`work-flow`, `node-instances`];
  const [tab, setTab] = useState5(`work-flow`);
  return <View6 className="bg-slate-900 w-full h-full overflow-hidden"><MoveableView
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
    HeaderComponent={useStableCallback(() => <View6 className="flex-row">{tabs.map((x) => <React5.Fragment key={x}><Pressable6 onPress={() => setTab(x)}><View6 className={`p-1 m-1 border-solid border-[1px] border-gray-800 ${tab === x ? `` : `opacity-50`}`}><Text6
      className={`text-gray-800 ${tab === x ? `` : `opacity-50`}`}
    >{x}</Text6></View6></Pressable6></React5.Fragment>)}</View6>)}
  ><View6 ref={viewRef} className="w-full h-full justify-center items-center"><PipeEndpointsRegistry.Provider value={context2.current}>
    {tab === `work-flow` && <WorkFlowView workflow={workflow} full />}
    {tab === `node-instances` && <NodeInstancesView nodeInstances={nodeInstances} full />}
  </PipeEndpointsRegistry.Provider></View6></MoveableView></View6>;
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
import { useState as useState6 } from "react";
import { Pressable as Pressable7, Text as Text7, View as View7 } from "react-native";

// ../../packages/cl/src/design/tailwind/theme.ts
var tailwindTheme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
};
export {
  App,
  tailwindTheme
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdGVzdHMvY29kZS8wMDAzLW9wZXJhdG9ycy8wNC50cy53b3JrZmxvdy5qc29uIiwgIi4uLy4uLy4uL3BhY2thZ2VzL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2sudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvd29yay1jYW52YXMtdmlldy50c3giLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNGdW5jdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9jcmVhdGVFcnJvckNsYXNzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvYXJyUmVtb3ZlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJzY3JpcHRpb24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL2NvbmZpZy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9ub29wLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9Ob3RpZmljYXRpb25GYWN0b3JpZXMudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvZXJyb3JDb250ZXh0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJzY3JpYmVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9waXBlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9PYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2xpZnQudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL1N1YmplY3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL2RhdGVUaW1lc3RhbXBQcm92aWRlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL0FjdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL2ludGVydmFsUHJvdmlkZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlci9Bc3luY0FjdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvU2NoZWR1bGVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNTY2hlZHVsZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlci9hc3luYy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9lbXB0eS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc1NjaGVkdWxlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9hcmdzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzQXJyYXlMaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzUHJvbWlzZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzQXN5bmNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zeW1ib2wvaXRlcmF0b3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9pbm5lckZyb20udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvZXhlY3V0ZVNjaGVkdWxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvb2JzZXJ2ZU9uLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc3Vic2NyaWJlT24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZU9ic2VydmFibGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXN5bmNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVkLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNEYXRlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL21hcE9uZU9yTWFueUFyZ3MudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvYXJnc0FyZ0FycmF5T3JPYmplY3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvY3JlYXRlT2JqZWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9tZXJnZUludGVybmFscy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlTWFwLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VBbGwudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9jb25jYXRBbGwudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29ic2VydmFibGUvY29uY2F0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL3RpbWVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvdGFrZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2lnbm9yZUVsZW1lbnRzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwVG8udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9kZWxheVdoZW4udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9kZWxheS50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS9tb3ZlYWJsZS12aWV3LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLWZsb3ctdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvcGlwZXMudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL3dvcmstbmFtZXMudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL25vZGUtaW5zdGFuY2Utdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvYW5hbHlzaXMvY2FsY3VsYXRlLXJ1bi50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy9hbmFseXNpcy9sb2FkLWRhdGEudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9pbmRleC50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9hcHAvc3JjL2luZGV4LnRzeCIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJCYWNrZ3JvdW5kQ29sb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyTmV0d29ya0FjdGl2aXR5SW5kaWNhdG9yVmlzaWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJIaWRkZW4udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyU3R5bGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc3R5bGVUb0JhclN0eWxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhclRyYW5zbHVjZW50LnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL2NsL3NyYy9pbmRleC50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvY2wvc3JjL2Rlc2lnbi90YWlsd2luZC90aGVtZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuICBcIm5hbWVcIjogXCJcIixcbiAgXCJ3b3JrZmxvd1VyaVwiOiBcIlwiLFxuICBcImlucHV0c1wiOiBbXSxcbiAgXCJvdXRwdXRzXCI6IFtdLFxuICBcImJvZHlcIjoge1xuICAgIFwia2luZFwiOiBcIm5vZGVzXCIsXG4gICAgXCJub2Rlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzXCIsXG4gICAgICAgIFwibm9kZUlkXCI6IFwibWFpblwiLFxuICAgICAgICBcImlucHV0UGlwZXNcIjogW11cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwid29ya2Zsb3dzXCI6IFtcbiAgICB7XG4gICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50c1wiLFxuICAgICAgXCJuYW1lXCI6IFwiZmlsZS50c1wiLFxuICAgICAgXCJpbnB1dHNcIjogW10sXG4gICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjJcIixcbiAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIndvcmtmbG93c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9hLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy9hLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCJkZWNsYXJhdGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvKlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvKlwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiKlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvLVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvLVwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiLVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvKlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvKlwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiKlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvK1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvK1wiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiK1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvK1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvK1wiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiK1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYi1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvYi1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiZGVjbGFyYXRpb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgIFwia2luZFwiOiBcIm5vZGVzXCIsXG4gICAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czoxXCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9hLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICBcImpzb25cIjogXCI0MlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czozXCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy8qXCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6MVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJhXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiZGF0YVwiLFxuICAgICAgICAgICAgICAgIFwianNvblwiOiBcIjNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6NFwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvLVwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgXCJqc29uXCI6IFwiMlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6M1wiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czo1XCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy8qXCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6MVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJhXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czo0XCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzOjZcIixcbiAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzLytcIixcbiAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czoxXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImFcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwidmFsdWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6N1wiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvK1wiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjZcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwidmFsdWVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgXCJqc29uXCI6IFwiN1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czoyXCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9iLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6N1wiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn0iLCAiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG4vKiogRW5zdXJlIHRoZSBpdGVtIGlzIGFsd2F5cyB0aGUgbGFzdCByZW5kZXJlZCB2YWx1ZSAqL1xuZXhwb3J0IGNvbnN0IHVzZVN0YWJsZSA9IDxUPihzdGFibGU6IFQpID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhYmxlKTtcbiAgICByZWYuY3VycmVudCA9IHN0YWJsZTtcbiAgICByZXR1cm4gcmVmO1xufTtcblxuLyoqIEVuc3VyZSB0aGUgY2FsbGJhY2sgaXMgYWx3YXlzIHRoZSBsYXN0IHJlbmRlcmVkIGNhbGxiYWNrLCBzbyBpdCBoYXMgcmVmZXJlbmNlIHRvIHRoZSBsYXN0IHN0YXRlXG4gKlxuICogTm8gbmVlZCBmb3IgZGVwZW5kZW5jaWVzLCB0aGlzIHdpbGwgc2ltcGx5IGhhdmUgYWNjZXNzIHRvIHRoZSB2YWx1ZXMgdGhhdCBleGlzdGVkIGluIHRoZSByZW5kZXJcbiAqIHdoZW4gaXQgd2FzIGNyZWF0ZWQgZHVyaW5nIHRoZSBsYXN0IHJlbmRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZVN0YWJsZUNhbGxiYWNrID0gPFRBcmdzIGV4dGVuZHMgdW5rbm93bltdLCBUUmV0dXJuPihcbiAgICBzdGFibGU6ICguLi5hcmdzOiBUQXJncykgPT4gVFJldHVybixcbikgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihzdGFibGUpO1xuICAgIHJlZi5jdXJyZW50ID0gc3RhYmxlO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdXNlUmVmKCguLi5hcmdzOiBUQXJncykgPT4gcmVmLmN1cnJlbnQoLi4uYXJncykpO1xuICAgIHJldHVybiBjYWxsYmFjay5jdXJyZW50O1xufTtcbiIsICJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFBvaW50ZXJFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBkZWxheSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNb3VzZUJ1dHRvbiwgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7IFdvcmtGbG93VmlldyB9IGZyb20gJy4vd29yay1mbG93LXZpZXcnO1xuaW1wb3J0IHsgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSwgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgTm9kZUluc3RhbmNlc1ZpZXcgfSBmcm9tICcuL25vZGUtaW5zdGFuY2Utdmlldyc7XG5pbXBvcnQgeyBsb2FkUnVudGltZSB9IGZyb20gJy4uL2FuYWx5c2lzL2xvYWQtZGF0YSc7XG5pbXBvcnQgeyBQaXBlRW5kcG9pbnRzUmVnaXN0cnksIFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGUgfSBmcm9tICcuL3BpcGVzJztcblxuZXhwb3J0IGNvbnN0IFdvcmtDYW52YXNWaWV3ID0gKHsgd29ya2Zsb3cgfTogeyB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93IH0pID0+IHtcbiAgICBjb25zdCBub2RlSW5zdGFuY2VzRGF0YXNldFJlZiA9IHVzZVJlZihsb2FkUnVudGltZSh3b3JrZmxvdykuZGF0YXNldCk7XG4gICAgY29uc3Qgbm9kZUluc3RhbmNlcyA9IG5vZGVJbnN0YW5jZXNEYXRhc2V0UmVmLmN1cnJlbnQucm9vdE5vZGVJbnN0YW5jZXM7XG5cbiAgICBjb25zdCB2aWV3UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IFZpZXcpO1xuICAgIGNvbnN0IGhvc3RSZWYgPSB1c2VSZWYobmV3IFN1YmplY3Q8Vmlldz4oKSk7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZVJlZjxQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlPih7XG4gICAgICAgIGhvc3RPYnNlcnZhYmxlOiBob3N0UmVmLmN1cnJlbnQucGlwZShkZWxheSgyNTApKSxcbiAgICAgICAgaG9zdFZpZXc6IG51bGwsXG4gICAgICAgIGVuZHBvaW50czoge30sXG4gICAgfSk7XG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXZpZXdSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuY3VycmVudC5ob3N0VmlldyA9IHZpZXdSZWYuY3VycmVudDtcbiAgICAgICAgaG9zdFJlZi5jdXJyZW50Lm5leHQodmlld1JlZi5jdXJyZW50KTtcbiAgICB9LCBbIXZpZXdSZWYuY3VycmVudF0pO1xuXG4gICAgY29uc3QgdGFicyA9IFtgd29yay1mbG93YCwgYG5vZGUtaW5zdGFuY2VzYF0gYXMgY29uc3Q7XG4gICAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKGB3b3JrLWZsb3dgIGFzIHR5cGVvZiB0YWJzW251bWJlcl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy1zbGF0ZS05MDAgdy1mdWxsIGgtZnVsbCBvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgICAgICAgPE1vdmVhYmxlVmlld1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25Nb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbW91c2VCdXR0b249e01vdXNlQnV0dG9uLk1pZGRsZX1cbiAgICAgICAgICAgICAgICBlbmFibGVTY2FsaW5nXG4gICAgICAgICAgICAgICAgd2hvbGVDYW52YXNcbiAgICAgICAgICAgICAgICBvdXRlckNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCdcbiAgICAgICAgICAgICAgICBpbm5lckNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCdcbiAgICAgICAgICAgICAgICBIZWFkZXJDb21wb25lbnQ9e3VzZVN0YWJsZUNhbGxiYWNrKCgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFicy5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVzc2FibGUgb25QcmVzcz17KCkgPT4gc2V0VGFiKHgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17YHAtMSBtLTEgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSBib3JkZXItZ3JheS04MDAgJHt0YWIgPT09IHggPyBgYCA6IGBvcGFjaXR5LTUwYH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWdyYXktODAwICR7dGFiID09PSB4ID8gYGAgOiBgb3BhY2l0eS01MGB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3h9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VmlldyByZWY9e3ZpZXdSZWZ9IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50c1JlZ2lzdHJ5LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0LmN1cnJlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYiA9PT0gYHdvcmstZmxvd2AgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3dvcmtmbG93fSBmdWxsIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYiA9PT0gYG5vZGUtaW5zdGFuY2VzYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVJbnN0YW5jZXNWaWV3IG5vZGVJbnN0YW5jZXM9e25vZGVJbnN0YW5jZXN9IGZ1bGwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGlwZUVuZHBvaW50c1JlZ2lzdHJ5LlByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDwvTW92ZWFibGVWaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG4iLCAiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sICovXG5cbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xuICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XG4gICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgfVxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgfVxuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XG4gIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxuICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xuICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcbiAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XG4gIHZhciBfLCBkb25lID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcbiAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xuICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcbiAgICAgIH1cbiAgfVxuICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XG4gIGRvbmUgPSB0cnVlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcbiAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XG4gIH1cbiAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gIH1cbn1cblxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIG9bazJdID0gbVtrXTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcbiAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xuICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgfVxuICB9O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICB0cnkge1xuICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gIGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICB9XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xuICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgcltrXSA9IGFbal07XG4gIHJldHVybiByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xuICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgfVxuICB9XG4gIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XG4gIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxuICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cbiAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xuICB2YXIgaSwgcDtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xuICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcbiAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgcmV0dXJuIGNvb2tlZDtcbn07XG5cbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gIG9bXCJkZWZhdWx0XCJdID0gdjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XG4gIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xuICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XG4gIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xuICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkLlwiKTtcbiAgICB2YXIgZGlzcG9zZTtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuYXN5bmNEaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuYXN5bmNEaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKGRpc3Bvc2UgPT09IHZvaWQgMCkge1xuICAgICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmRpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XG4gICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcbiAgfVxuICBlbHNlIGlmIChhc3luYykge1xuICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XG4gIGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcbiAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgd2hpbGUgKGVudi5zdGFjay5sZW5ndGgpIHtcbiAgICAgIHZhciByZWMgPSBlbnYuc3RhY2sucG9wKCk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjLmRpc3Bvc2UgJiYgcmVjLmRpc3Bvc2UuY2FsbChyZWMudmFsdWUpO1xuICAgICAgICBpZiAocmVjLmFzeW5jKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihuZXh0LCBmdW5jdGlvbihlKSB7IGZhaWwoZSk7IHJldHVybiBuZXh0KCk7IH0pO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICBmYWlsKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW52Lmhhc0Vycm9yKSB0aHJvdyBlbnYuZXJyb3I7XG4gIH1cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBfX2V4dGVuZHMsXG4gIF9fYXNzaWduLFxuICBfX3Jlc3QsXG4gIF9fZGVjb3JhdGUsXG4gIF9fcGFyYW0sXG4gIF9fbWV0YWRhdGEsXG4gIF9fYXdhaXRlcixcbiAgX19nZW5lcmF0b3IsXG4gIF9fY3JlYXRlQmluZGluZyxcbiAgX19leHBvcnRTdGFyLFxuICBfX3ZhbHVlcyxcbiAgX19yZWFkLFxuICBfX3NwcmVhZCxcbiAgX19zcHJlYWRBcnJheXMsXG4gIF9fc3ByZWFkQXJyYXksXG4gIF9fYXdhaXQsXG4gIF9fYXN5bmNHZW5lcmF0b3IsXG4gIF9fYXN5bmNEZWxlZ2F0b3IsXG4gIF9fYXN5bmNWYWx1ZXMsXG4gIF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxuICBfX2ltcG9ydFN0YXIsXG4gIF9faW1wb3J0RGVmYXVsdCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEluLFxuICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSxcbiAgX19kaXNwb3NlUmVzb3VyY2VzLFxufTtcbiIsICIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgZnVuY3Rpb24uXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyAoLi4uYXJnczogYW55W10pID0+IGFueSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG4iLCAiLyoqXG4gKiBVc2VkIHRvIGNyZWF0ZSBFcnJvciBzdWJjbGFzc2VzIHVudGlsIHRoZSBjb21tdW5pdHkgbW92ZXMgYXdheSBmcm9tIEVTNS5cbiAqXG4gKiBUaGlzIGlzIGJlY2F1c2UgY29tcGlsaW5nIGZyb20gVHlwZVNjcmlwdCBkb3duIHRvIEVTNSBoYXMgaXNzdWVzIHdpdGggc3ViY2xhc3NpbmcgRXJyb3JzXG4gKiBhcyB3ZWxsIGFzIG90aGVyIGJ1aWx0LWluIHR5cGVzOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEyMTIzXG4gKlxuICogQHBhcmFtIGNyZWF0ZUltcGwgQSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgYWN0dWFsIGNvbnN0cnVjdG9yIGltcGxlbWVudGF0aW9uLiBUaGUgcmV0dXJuZWRcbiAqIGZ1bmN0aW9uIHNob3VsZCBiZSBhIG5hbWVkIGZ1bmN0aW9uIHRoYXQgY2FsbHMgYF9zdXBlcmAgaW50ZXJuYWxseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVycm9yQ2xhc3M8VD4oY3JlYXRlSW1wbDogKF9zdXBlcjogYW55KSA9PiBhbnkpOiBUIHtcbiAgY29uc3QgX3N1cGVyID0gKGluc3RhbmNlOiBhbnkpID0+IHtcbiAgICBFcnJvci5jYWxsKGluc3RhbmNlKTtcbiAgICBpbnN0YW5jZS5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICB9O1xuXG4gIGNvbnN0IGN0b3JGdW5jID0gY3JlYXRlSW1wbChfc3VwZXIpO1xuICBjdG9yRnVuYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gIGN0b3JGdW5jLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JGdW5jO1xuICByZXR1cm4gY3RvckZ1bmM7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlRXJyb3JDbGFzcyB9IGZyb20gJy4vY3JlYXRlRXJyb3JDbGFzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5zdWJzY3JpcHRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgcmVhZG9ubHkgZXJyb3JzOiBhbnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbnN1YnNjcmlwdGlvbkVycm9yQ3RvciB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIERvIG5vdCBjb25zdHJ1Y3QgZXJyb3IgaW5zdGFuY2VzLlxuICAgKiBDYW5ub3QgYmUgdGFnZ2VkIGFzIGludGVybmFsOiBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RpdmVYL3J4anMvaXNzdWVzLzYyNjlcbiAgICovXG4gIG5ldyAoZXJyb3JzOiBhbnlbXSk6IFVuc3Vic2NyaXB0aW9uRXJyb3I7XG59XG5cbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gb25lIG9yIG1vcmUgZXJyb3JzIGhhdmUgb2NjdXJyZWQgZHVyaW5nIHRoZVxuICogYHVuc3Vic2NyaWJlYCBvZiBhIHtAbGluayBTdWJzY3JpcHRpb259LlxuICovXG5leHBvcnQgY29uc3QgVW5zdWJzY3JpcHRpb25FcnJvcjogVW5zdWJzY3JpcHRpb25FcnJvckN0b3IgPSBjcmVhdGVFcnJvckNsYXNzKFxuICAoX3N1cGVyKSA9PlxuICAgIGZ1bmN0aW9uIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsKHRoaXM6IGFueSwgZXJyb3JzOiAoRXJyb3IgfCBzdHJpbmcpW10pIHtcbiAgICAgIF9zdXBlcih0aGlzKTtcbiAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9yc1xuICAgICAgICA/IGAke2Vycm9ycy5sZW5ndGh9IGVycm9ycyBvY2N1cnJlZCBkdXJpbmcgdW5zdWJzY3JpcHRpb246XG4ke2Vycm9ycy5tYXAoKGVyciwgaSkgPT4gYCR7aSArIDF9KSAke2Vyci50b1N0cmluZygpfWApLmpvaW4oJ1xcbiAgJyl9YFxuICAgICAgICA6ICcnO1xuICAgICAgdGhpcy5uYW1lID0gJ1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuKTtcbiIsICIvKipcbiAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGFuIGFycmF5LCBtdXRhdGluZyBpdC5cbiAqIEBwYXJhbSBhcnIgVGhlIGFycmF5IHRvIHJlbW92ZSB0aGUgaXRlbSBmcm9tXG4gKiBAcGFyYW0gaXRlbSBUaGUgaXRlbSB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyclJlbW92ZTxUPihhcnI6IFRbXSB8IHVuZGVmaW5lZCB8IG51bGwsIGl0ZW06IFQpIHtcbiAgaWYgKGFycikge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgMCA8PSBpbmRleCAmJiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBVbnN1YnNjcmlwdGlvbkVycm9yIH0gZnJvbSAnLi91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uTGlrZSwgVGVhcmRvd25Mb2dpYywgVW5zdWJzY3JpYmFibGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4vdXRpbC9hcnJSZW1vdmUnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBkaXNwb3NhYmxlIHJlc291cmNlLCBzdWNoIGFzIHRoZSBleGVjdXRpb24gb2YgYW4gT2JzZXJ2YWJsZS4gQVxuICogU3Vic2NyaXB0aW9uIGhhcyBvbmUgaW1wb3J0YW50IG1ldGhvZCwgYHVuc3Vic2NyaWJlYCwgdGhhdCB0YWtlcyBubyBhcmd1bWVudFxuICogYW5kIGp1c3QgZGlzcG9zZXMgdGhlIHJlc291cmNlIGhlbGQgYnkgdGhlIHN1YnNjcmlwdGlvbi5cbiAqXG4gKiBBZGRpdGlvbmFsbHksIHN1YnNjcmlwdGlvbnMgbWF5IGJlIGdyb3VwZWQgdG9nZXRoZXIgdGhyb3VnaCB0aGUgYGFkZCgpYFxuICogbWV0aG9kLCB3aGljaCB3aWxsIGF0dGFjaCBhIGNoaWxkIFN1YnNjcmlwdGlvbiB0byB0aGUgY3VycmVudCBTdWJzY3JpcHRpb24uXG4gKiBXaGVuIGEgU3Vic2NyaXB0aW9uIGlzIHVuc3Vic2NyaWJlZCwgYWxsIGl0cyBjaGlsZHJlbiAoYW5kIGl0cyBncmFuZGNoaWxkcmVuKVxuICogd2lsbCBiZSB1bnN1YnNjcmliZWQgYXMgd2VsbC5cbiAqXG4gKiBAY2xhc3MgU3Vic2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb24gaW1wbGVtZW50cyBTdWJzY3JpcHRpb25MaWtlIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHB1YmxpYyBzdGF0aWMgRU1QVFkgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGVtcHR5ID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIGVtcHR5LmNsb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIGVtcHR5O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciB0aGlzIFN1YnNjcmlwdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHVuc3Vic2NyaWJlZC5cbiAgICovXG4gIHB1YmxpYyBjbG9zZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIF9wYXJlbnRhZ2U6IFN1YnNjcmlwdGlvbltdIHwgU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHJlZ2lzdGVyZWQgZmluYWxpemVycyB0byBleGVjdXRlIHVwb24gdW5zdWJzY3JpcHRpb24uIEFkZGluZyBhbmQgcmVtb3ZpbmcgZnJvbSB0aGlzXG4gICAqIGxpc3Qgb2NjdXJzIGluIHRoZSB7QGxpbmsgI2FkZH0gYW5kIHtAbGluayAjcmVtb3ZlfSBtZXRob2RzLlxuICAgKi9cbiAgcHJpdmF0ZSBfZmluYWxpemVyczogRXhjbHVkZTxUZWFyZG93bkxvZ2ljLCB2b2lkPltdIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBpbml0aWFsVGVhcmRvd24gQSBmdW5jdGlvbiBleGVjdXRlZCBmaXJzdCBhcyBwYXJ0IG9mIHRoZSBmaW5hbGl6YXRpb25cbiAgICogcHJvY2VzcyB0aGF0IGlzIGtpY2tlZCBvZmYgd2hlbiB7QGxpbmsgI3Vuc3Vic2NyaWJlfSBpcyBjYWxsZWQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluaXRpYWxUZWFyZG93bj86ICgpID0+IHZvaWQpIHt9XG5cbiAgLyoqXG4gICAqIERpc3Bvc2VzIHRoZSByZXNvdXJjZXMgaGVsZCBieSB0aGUgc3Vic2NyaXB0aW9uLiBNYXksIGZvciBpbnN0YW5jZSwgY2FuY2VsXG4gICAqIGFuIG9uZ29pbmcgT2JzZXJ2YWJsZSBleGVjdXRpb24gb3IgY2FuY2VsIGFueSBvdGhlciB0eXBlIG9mIHdvcmsgdGhhdFxuICAgKiBzdGFydGVkIHdoZW4gdGhlIFN1YnNjcmlwdGlvbiB3YXMgY3JlYXRlZC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIGxldCBlcnJvcnM6IGFueVtdIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuXG4gICAgICAvLyBSZW1vdmUgdGhpcyBmcm9tIGl0J3MgcGFyZW50cy5cbiAgICAgIGNvbnN0IHsgX3BhcmVudGFnZSB9ID0gdGhpcztcbiAgICAgIGlmIChfcGFyZW50YWdlKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwYXJlbnQgb2YgX3BhcmVudGFnZSkge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3BhcmVudGFnZS5yZW1vdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBpbml0aWFsVGVhcmRvd246IGluaXRpYWxGaW5hbGl6ZXIgfSA9IHRoaXM7XG4gICAgICBpZiAoaXNGdW5jdGlvbihpbml0aWFsRmluYWxpemVyKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGluaXRpYWxGaW5hbGl6ZXIoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGVycm9ycyA9IGUgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yID8gZS5lcnJvcnMgOiBbZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBfZmluYWxpemVycyB9ID0gdGhpcztcbiAgICAgIGlmIChfZmluYWxpemVycykge1xuICAgICAgICB0aGlzLl9maW5hbGl6ZXJzID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBmaW5hbGl6ZXIgb2YgX2ZpbmFsaXplcnMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZXhlY0ZpbmFsaXplcihmaW5hbGl6ZXIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzID8/IFtdO1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZXJyLmVycm9yc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgIHRocm93IG5ldyBVbnN1YnNjcmlwdGlvbkVycm9yKGVycm9ycyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBmaW5hbGl6ZXIgdG8gdGhpcyBzdWJzY3JpcHRpb24sIHNvIHRoYXQgZmluYWxpemF0aW9uIHdpbGwgYmUgdW5zdWJzY3JpYmVkL2NhbGxlZFxuICAgKiB3aGVuIHRoaXMgc3Vic2NyaXB0aW9uIGlzIHVuc3Vic2NyaWJlZC4gSWYgdGhpcyBzdWJzY3JpcHRpb24gaXMgYWxyZWFkeSB7QGxpbmsgI2Nsb3NlZH0sXG4gICAqIGJlY2F1c2UgaXQgaGFzIGFscmVhZHkgYmVlbiB1bnN1YnNjcmliZWQsIHRoZW4gd2hhdGV2ZXIgZmluYWxpemVyIGlzIHBhc3NlZCB0byBpdFxuICAgKiB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgZXhlY3V0ZWQgKHVubGVzcyB0aGUgZmluYWxpemVyIGl0c2VsZiBpcyBhbHNvIGEgY2xvc2VkIHN1YnNjcmlwdGlvbikuXG4gICAqXG4gICAqIENsb3NlZCBTdWJzY3JpcHRpb25zIGNhbm5vdCBiZSBhZGRlZCBhcyBmaW5hbGl6ZXJzIHRvIGFueSBzdWJzY3JpcHRpb24uIEFkZGluZyBhIGNsb3NlZFxuICAgKiBzdWJzY3JpcHRpb24gdG8gYSBhbnkgc3Vic2NyaXB0aW9uIHdpbGwgcmVzdWx0IGluIG5vIG9wZXJhdGlvbi4gKEEgbm9vcCkuXG4gICAqXG4gICAqIEFkZGluZyBhIHN1YnNjcmlwdGlvbiB0byBpdHNlbGYsIG9yIGFkZGluZyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgd2lsbCBub3QgcGVyZm9ybSBhbnlcbiAgICogb3BlcmF0aW9uIGF0IGFsbC4gKEEgbm9vcCkuXG4gICAqXG4gICAqIGBTdWJzY3JpcHRpb25gIGluc3RhbmNlcyB0aGF0IGFyZSBhZGRlZCB0byB0aGlzIGluc3RhbmNlIHdpbGwgYXV0b21hdGljYWxseSByZW1vdmUgdGhlbXNlbHZlc1xuICAgKiBpZiB0aGV5IGFyZSB1bnN1YnNjcmliZWQuIEZ1bmN0aW9ucyBhbmQge0BsaW5rIFVuc3Vic2NyaWJhYmxlfSBvYmplY3RzIHRoYXQgeW91IHdpc2ggdG8gcmVtb3ZlXG4gICAqIHdpbGwgbmVlZCB0byBiZSByZW1vdmVkIG1hbnVhbGx5IHdpdGgge0BsaW5rICNyZW1vdmV9XG4gICAqXG4gICAqIEBwYXJhbSB0ZWFyZG93biBUaGUgZmluYWxpemF0aW9uIGxvZ2ljIHRvIGFkZCB0byB0aGlzIHN1YnNjcmlwdGlvbi5cbiAgICovXG4gIGFkZCh0ZWFyZG93bjogVGVhcmRvd25Mb2dpYyk6IHZvaWQge1xuICAgIC8vIE9ubHkgYWRkIHRoZSBmaW5hbGl6ZXIgaWYgaXQncyBub3QgdW5kZWZpbmVkXG4gICAgLy8gYW5kIGRvbid0IGFkZCBhIHN1YnNjcmlwdGlvbiB0byBpdHNlbGYuXG4gICAgaWYgKHRlYXJkb3duICYmIHRlYXJkb3duICE9PSB0aGlzKSB7XG4gICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBzdWJzY3JpcHRpb24gaXMgYWxyZWFkeSBjbG9zZWQsXG4gICAgICAgIC8vIGV4ZWN1dGUgd2hhdGV2ZXIgZmluYWxpemVyIGlzIGhhbmRlZCB0byBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICBleGVjRmluYWxpemVyKHRlYXJkb3duKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0ZWFyZG93biBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgIC8vIFdlIGRvbid0IGFkZCBjbG9zZWQgc3Vic2NyaXB0aW9ucywgYW5kIHdlIGRvbid0IGFkZCB0aGUgc2FtZSBzdWJzY3JpcHRpb25cbiAgICAgICAgICAvLyB0d2ljZS4gU3Vic2NyaXB0aW9uIHVuc3Vic2NyaWJlIGlzIGlkZW1wb3RlbnQuXG4gICAgICAgICAgaWYgKHRlYXJkb3duLmNsb3NlZCB8fCB0ZWFyZG93bi5faGFzUGFyZW50KHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRlYXJkb3duLl9hZGRQYXJlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgKHRoaXMuX2ZpbmFsaXplcnMgPSB0aGlzLl9maW5hbGl6ZXJzID8/IFtdKS5wdXNoKHRlYXJkb3duKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiBhIHRoaXMgc3Vic2NyaXB0aW9uIGFscmVhZHkgaGFzIGEgcGFydGljdWxhciBwYXJlbnQuXG4gICAqIFRoaXMgd2lsbCBzaWduYWwgdGhhdCB0aGlzIHN1YnNjcmlwdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBwYXJlbnQgaW4gcXVlc3Rpb24uXG4gICAqIEBwYXJhbSBwYXJlbnQgdGhlIHBhcmVudCB0byBjaGVjayBmb3JcbiAgICovXG4gIHByaXZhdGUgX2hhc1BhcmVudChwYXJlbnQ6IFN1YnNjcmlwdGlvbikge1xuICAgIGNvbnN0IHsgX3BhcmVudGFnZSB9ID0gdGhpcztcbiAgICByZXR1cm4gX3BhcmVudGFnZSA9PT0gcGFyZW50IHx8IChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpICYmIF9wYXJlbnRhZ2UuaW5jbHVkZXMocGFyZW50KSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHBhcmVudCB0byB0aGlzIHN1YnNjcmlwdGlvbiBzbyBpdCBjYW4gYmUgcmVtb3ZlZCBmcm9tIHRoZSBwYXJlbnQgaWYgaXRcbiAgICogdW5zdWJzY3JpYmVzIG9uIGl0J3Mgb3duLlxuICAgKlxuICAgKiBOT1RFOiBUSElTIEFTU1VNRVMgVEhBVCB7QGxpbmsgX2hhc1BhcmVudH0gSEFTIEFMUkVBRFkgQkVFTiBDSEVDS0VELlxuICAgKiBAcGFyYW0gcGFyZW50IFRoZSBwYXJlbnQgc3Vic2NyaXB0aW9uIHRvIGFkZFxuICAgKi9cbiAgcHJpdmF0ZSBfYWRkUGFyZW50KHBhcmVudDogU3Vic2NyaXB0aW9uKSB7XG4gICAgY29uc3QgeyBfcGFyZW50YWdlIH0gPSB0aGlzO1xuICAgIHRoaXMuX3BhcmVudGFnZSA9IEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgPyAoX3BhcmVudGFnZS5wdXNoKHBhcmVudCksIF9wYXJlbnRhZ2UpIDogX3BhcmVudGFnZSA/IFtfcGFyZW50YWdlLCBwYXJlbnRdIDogcGFyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBhIGNoaWxkIHdoZW4gaXQgaXMgcmVtb3ZlZCB2aWEge0BsaW5rICNyZW1vdmV9LlxuICAgKiBAcGFyYW0gcGFyZW50IFRoZSBwYXJlbnQgdG8gcmVtb3ZlXG4gICAqL1xuICBwcml2YXRlIF9yZW1vdmVQYXJlbnQocGFyZW50OiBTdWJzY3JpcHRpb24pIHtcbiAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgaWYgKF9wYXJlbnRhZ2UgPT09IHBhcmVudCkge1xuICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkpIHtcbiAgICAgIGFyclJlbW92ZShfcGFyZW50YWdlLCBwYXJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgZmluYWxpemVyIGZyb20gdGhpcyBzdWJzY3JpcHRpb24gdGhhdCB3YXMgcHJldmlvdXNseSBhZGRlZCB3aXRoIHRoZSB7QGxpbmsgI2FkZH0gbWV0aG9kLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgYFN1YnNjcmlwdGlvbmAgaW5zdGFuY2VzLCB3aGVuIHVuc3Vic2NyaWJlZCwgd2lsbCBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGVtc2VsdmVzXG4gICAqIGZyb20gZXZlcnkgb3RoZXIgYFN1YnNjcmlwdGlvbmAgdGhleSBoYXZlIGJlZW4gYWRkZWQgdG8uIFRoaXMgbWVhbnMgdGhhdCB1c2luZyB0aGUgYHJlbW92ZWAgbWV0aG9kXG4gICAqIGlzIG5vdCBhIGNvbW1vbiB0aGluZyBhbmQgc2hvdWxkIGJlIHVzZWQgdGhvdWdodGZ1bGx5LlxuICAgKlxuICAgKiBJZiB5b3UgYWRkIHRoZSBzYW1lIGZpbmFsaXplciBpbnN0YW5jZSBvZiBhIGZ1bmN0aW9uIG9yIGFuIHVuc3Vic2NyaWJhYmxlIG9iamVjdCB0byBhIGBTdWJzY3JpcHRpb25gIGluc3RhbmNlXG4gICAqIG1vcmUgdGhhbiBvbmNlLCB5b3Ugd2lsbCBuZWVkIHRvIGNhbGwgYHJlbW92ZWAgdGhlIHNhbWUgbnVtYmVyIG9mIHRpbWVzIHRvIHJlbW92ZSBhbGwgaW5zdGFuY2VzLlxuICAgKlxuICAgKiBBbGwgZmluYWxpemVyIGluc3RhbmNlcyBhcmUgcmVtb3ZlZCB0byBmcmVlIHVwIG1lbW9yeSB1cG9uIHVuc3Vic2NyaXB0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gdGVhcmRvd24gVGhlIGZpbmFsaXplciB0byByZW1vdmUgZnJvbSB0aGlzIHN1YnNjcmlwdGlvblxuICAgKi9cbiAgcmVtb3ZlKHRlYXJkb3duOiBFeGNsdWRlPFRlYXJkb3duTG9naWMsIHZvaWQ+KTogdm9pZCB7XG4gICAgY29uc3QgeyBfZmluYWxpemVycyB9ID0gdGhpcztcbiAgICBfZmluYWxpemVycyAmJiBhcnJSZW1vdmUoX2ZpbmFsaXplcnMsIHRlYXJkb3duKTtcblxuICAgIGlmICh0ZWFyZG93biBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgdGVhcmRvd24uX3JlbW92ZVBhcmVudCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NVQlNDUklQVElPTiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3Vic2NyaXB0aW9uKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdWJzY3JpcHRpb24ge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uIHx8XG4gICAgKHZhbHVlICYmICdjbG9zZWQnIGluIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUucmVtb3ZlKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmFkZCkgJiYgaXNGdW5jdGlvbih2YWx1ZS51bnN1YnNjcmliZSkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGV4ZWNGaW5hbGl6ZXIoZmluYWxpemVyOiBVbnN1YnNjcmliYWJsZSB8ICgoKSA9PiB2b2lkKSkge1xuICBpZiAoaXNGdW5jdGlvbihmaW5hbGl6ZXIpKSB7XG4gICAgZmluYWxpemVyKCk7XG4gIH0gZWxzZSB7XG4gICAgZmluYWxpemVyLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IE9ic2VydmFibGVOb3RpZmljYXRpb24gfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBUaGUge0BsaW5rIEdsb2JhbENvbmZpZ30gb2JqZWN0IGZvciBSeEpTLiBJdCBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGluZ3NcbiAqIGxpa2UgaG93IHRvIHJlYWN0IG9uIHVuaGFuZGxlZCBlcnJvcnMuXG4gKi9cbmV4cG9ydCBjb25zdCBjb25maWc6IEdsb2JhbENvbmZpZyA9IHtcbiAgb25VbmhhbmRsZWRFcnJvcjogbnVsbCxcbiAgb25TdG9wcGVkTm90aWZpY2F0aW9uOiBudWxsLFxuICBQcm9taXNlOiB1bmRlZmluZWQsXG4gIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc6IGZhbHNlLFxuICB1c2VEZXByZWNhdGVkTmV4dENvbnRleHQ6IGZhbHNlLFxufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciBSeEpTLCB1c2VkIHRvIGNvbmZpZ3VyZSB0aGluZ3NcbiAqIGxpa2UgaG93IHRvIHJlYWN0IG9uIHVuaGFuZGxlZCBlcnJvcnMuIEFjY2Vzc2libGUgdmlhIHtAbGluayBjb25maWd9XG4gKiBvYmplY3QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIEEgcmVnaXN0cmF0aW9uIHBvaW50IGZvciB1bmhhbmRsZWQgZXJyb3JzIGZyb20gUnhKUy4gVGhlc2UgYXJlIGVycm9ycyB0aGF0XG4gICAqIGNhbm5vdCB3ZXJlIG5vdCBoYW5kbGVkIGJ5IGNvbnN1bWluZyBjb2RlIGluIHRoZSB1c3VhbCBzdWJzY3JpcHRpb24gcGF0aC4gRm9yXG4gICAqIGV4YW1wbGUsIGlmIHlvdSBoYXZlIHRoaXMgY29uZmlndXJlZCwgYW5kIHlvdSBzdWJzY3JpYmUgdG8gYW4gb2JzZXJ2YWJsZSB3aXRob3V0XG4gICAqIHByb3ZpZGluZyBhbiBlcnJvciBoYW5kbGVyLCBlcnJvcnMgZnJvbSB0aGF0IHN1YnNjcmlwdGlvbiB3aWxsIGVuZCB1cCBoZXJlLiBUaGlzXG4gICAqIHdpbGwgX2Fsd2F5c18gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5IG9uIGFub3RoZXIgam9iIGluIHRoZSBydW50aW1lLiBUaGlzIGlzIGJlY2F1c2VcbiAgICogd2UgZG8gbm90IHdhbnQgZXJyb3JzIHRocm93biBpbiB0aGlzIHVzZXItY29uZmlndXJlZCBoYW5kbGVyIHRvIGludGVyZmVyZSB3aXRoIHRoZVxuICAgKiBiZWhhdmlvciBvZiB0aGUgbGlicmFyeS5cbiAgICovXG4gIG9uVW5oYW5kbGVkRXJyb3I6ICgoZXJyOiBhbnkpID0+IHZvaWQpIHwgbnVsbDtcblxuICAvKipcbiAgICogQSByZWdpc3RyYXRpb24gcG9pbnQgZm9yIG5vdGlmaWNhdGlvbnMgdGhhdCBjYW5ub3QgYmUgc2VudCB0byBzdWJzY3JpYmVycyBiZWNhdXNlIHRoZXlcbiAgICogaGF2ZSBjb21wbGV0ZWQsIGVycm9yZWQgb3IgaGF2ZSBiZWVuIGV4cGxpY2l0bHkgdW5zdWJzY3JpYmVkLiBCeSBkZWZhdWx0LCBuZXh0LCBjb21wbGV0ZVxuICAgKiBhbmQgZXJyb3Igbm90aWZpY2F0aW9ucyBzZW50IHRvIHN0b3BwZWQgc3Vic2NyaWJlcnMgYXJlIG5vb3BzLiBIb3dldmVyLCBzb21ldGltZXMgY2FsbGVyc1xuICAgKiBtaWdodCB3YW50IGEgZGlmZmVyZW50IGJlaGF2aW9yLiBGb3IgZXhhbXBsZSwgd2l0aCBzb3VyY2VzIHRoYXQgYXR0ZW1wdCB0byByZXBvcnQgZXJyb3JzXG4gICAqIHRvIHN0b3BwZWQgc3Vic2NyaWJlcnMsIGEgY2FsbGVyIGNhbiBjb25maWd1cmUgUnhKUyB0byB0aHJvdyBhbiB1bmhhbmRsZWQgZXJyb3IgaW5zdGVhZC5cbiAgICogVGhpcyB3aWxsIF9hbHdheXNfIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseSBvbiBhbm90aGVyIGpvYiBpbiB0aGUgcnVudGltZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAqIHdlIGRvIG5vdCB3YW50IGVycm9ycyB0aHJvd24gaW4gdGhpcyB1c2VyLWNvbmZpZ3VyZWQgaGFuZGxlciB0byBpbnRlcmZlcmUgd2l0aCB0aGVcbiAgICogYmVoYXZpb3Igb2YgdGhlIGxpYnJhcnkuXG4gICAqL1xuICBvblN0b3BwZWROb3RpZmljYXRpb246ICgobm90aWZpY2F0aW9uOiBPYnNlcnZhYmxlTm90aWZpY2F0aW9uPGFueT4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4gdm9pZCkgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgcHJvbWlzZSBjb25zdHJ1Y3RvciB1c2VkIGJ5IGRlZmF1bHQgZm9yIHtAbGluayBPYnNlcnZhYmxlI3RvUHJvbWlzZSB0b1Byb21pc2V9IGFuZCB7QGxpbmsgT2JzZXJ2YWJsZSNmb3JFYWNoIGZvckVhY2h9XG4gICAqIG1ldGhvZHMuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIEFzIG9mIHZlcnNpb24gOCwgUnhKUyB3aWxsIG5vIGxvbmdlciBzdXBwb3J0IHRoaXMgc29ydCBvZiBpbmplY3Rpb24gb2YgYVxuICAgKiBQcm9taXNlIGNvbnN0cnVjdG9yLiBJZiB5b3UgbmVlZCBhIFByb21pc2UgaW1wbGVtZW50YXRpb24gb3RoZXIgdGhhbiBuYXRpdmUgcHJvbWlzZXMsXG4gICAqIHBsZWFzZSBwb2x5ZmlsbC9wYXRjaCBQcm9taXNlIGFzIHlvdSBzZWUgYXBwcm9wcmlhdGUuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIFByb21pc2U/OiBQcm9taXNlQ29uc3RydWN0b3JMaWtlO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0dXJucyBvbiBzeW5jaHJvbm91cyBlcnJvciByZXRocm93aW5nLCB3aGljaCBpcyBhIGRlcHJlY2F0ZWQgYmVoYXZpb3JcbiAgICogaW4gdjYgYW5kIGhpZ2hlci4gVGhpcyBiZWhhdmlvciBlbmFibGVzIGJhZCBwYXR0ZXJucyBsaWtlIHdyYXBwaW5nIGEgc3Vic2NyaWJlXG4gICAqIGNhbGwgaW4gYSB0cnkvY2F0Y2ggYmxvY2suIEl0IGFsc28gZW5hYmxlcyBwcm9kdWNlciBpbnRlcmZlcmVuY2UsIGEgbmFzdHkgYnVnXG4gICAqIHdoZXJlIGEgbXVsdGljYXN0IGNhbiBiZSBicm9rZW4gZm9yIGFsbCBvYnNlcnZlcnMgYnkgYSBkb3duc3RyZWFtIGNvbnN1bWVyIHdpdGhcbiAgICogYW4gdW5oYW5kbGVkIGVycm9yLiBETyBOT1QgVVNFIFRISVMgRkxBRyBVTkxFU1MgSVQnUyBORUVERUQgVE8gQlVZIFRJTUVcbiAgICogRk9SIE1JR1JBVElPTiBSRUFTT05TLlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBBcyBvZiB2ZXJzaW9uIDgsIFJ4SlMgd2lsbCBubyBsb25nZXIgc3VwcG9ydCBzeW5jaHJvbm91cyB0aHJvd2luZ1xuICAgKiBvZiB1bmhhbmRsZWQgZXJyb3JzLiBBbGwgZXJyb3JzIHdpbGwgYmUgdGhyb3duIG9uIGEgc2VwYXJhdGUgY2FsbCBzdGFjayB0byBwcmV2ZW50IGJhZFxuICAgKiBiZWhhdmlvcnMgZGVzY3JpYmVkIGFib3ZlLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gICAqL1xuICB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBlbmFibGVzIGFuIGFzLW9mLXlldCB1bmRvY3VtZW50ZWQgZmVhdHVyZSBmcm9tIHY1OiBUaGUgYWJpbGl0eSB0byBhY2Nlc3NcbiAgICogYHVuc3Vic2NyaWJlKClgIHZpYSBgdGhpc2AgY29udGV4dCBpbiBgbmV4dGAgZnVuY3Rpb25zIGNyZWF0ZWQgaW4gb2JzZXJ2ZXJzIHBhc3NlZFxuICAgKiB0byBgc3Vic2NyaWJlYC5cbiAgICpcbiAgICogVGhpcyBpcyBiZWluZyByZW1vdmVkIGJlY2F1c2UgdGhlIHBlcmZvcm1hbmNlIHdhcyBzZXZlcmVseSBwcm9ibGVtYXRpYywgYW5kIGl0IGNvdWxkIGFsc28gY2F1c2VcbiAgICogaXNzdWVzIHdoZW4gdHlwZXMgb3RoZXIgdGhhbiBQT0pPcyBhcmUgcGFzc2VkIHRvIHN1YnNjcmliZSBhcyBzdWJzY3JpYmVycywgYXMgdGhleSB3aWxsIGxpa2VseSBoYXZlXG4gICAqIHRoZWlyIGB0aGlzYCBjb250ZXh0IG92ZXJ3cml0dGVuLlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBBcyBvZiB2ZXJzaW9uIDgsIFJ4SlMgd2lsbCBubyBsb25nZXIgc3VwcG9ydCBhbHRlcmluZyB0aGVcbiAgICogY29udGV4dCBvZiBuZXh0IGZ1bmN0aW9ucyBwcm92aWRlZCBhcyBwYXJ0IG9mIGFuIG9ic2VydmVyIHRvIFN1YnNjcmliZS4gSW5zdGVhZCxcbiAgICogeW91IHdpbGwgaGF2ZSBhY2Nlc3MgdG8gYSBzdWJzY3JpcHRpb24gb3IgYSBzaWduYWwgb3IgdG9rZW4gdGhhdCB3aWxsIGFsbG93IHlvdSB0byBkbyB0aGluZ3MgbGlrZVxuICAgKiB1bnN1YnNjcmliZSBhbmQgdGVzdCBjbG9zZWQgc3RhdHVzLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gICAqL1xuICB1c2VEZXByZWNhdGVkTmV4dENvbnRleHQ6IGJvb2xlYW47XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBUaW1lckhhbmRsZSB9IGZyb20gJy4vdGltZXJIYW5kbGUnO1xudHlwZSBTZXRUaW1lb3V0RnVuY3Rpb24gPSAoaGFuZGxlcjogKCkgPT4gdm9pZCwgdGltZW91dD86IG51bWJlciwgLi4uYXJnczogYW55W10pID0+IFRpbWVySGFuZGxlO1xudHlwZSBDbGVhclRpbWVvdXRGdW5jdGlvbiA9IChoYW5kbGU6IFRpbWVySGFuZGxlKSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgVGltZW91dFByb3ZpZGVyIHtcbiAgc2V0VGltZW91dDogU2V0VGltZW91dEZ1bmN0aW9uO1xuICBjbGVhclRpbWVvdXQ6IENsZWFyVGltZW91dEZ1bmN0aW9uO1xuICBkZWxlZ2F0ZTpcbiAgICB8IHtcbiAgICAgICAgc2V0VGltZW91dDogU2V0VGltZW91dEZ1bmN0aW9uO1xuICAgICAgICBjbGVhclRpbWVvdXQ6IENsZWFyVGltZW91dEZ1bmN0aW9uO1xuICAgICAgfVxuICAgIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgdGltZW91dFByb3ZpZGVyOiBUaW1lb3V0UHJvdmlkZXIgPSB7XG4gIC8vIFdoZW4gYWNjZXNzaW5nIHRoZSBkZWxlZ2F0ZSwgdXNlIHRoZSB2YXJpYWJsZSByYXRoZXIgdGhhbiBgdGhpc2Agc28gdGhhdFxuICAvLyB0aGUgZnVuY3Rpb25zIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBiZWluZyBib3VuZCB0byB0aGUgcHJvdmlkZXIuXG4gIHNldFRpbWVvdXQoaGFuZGxlcjogKCkgPT4gdm9pZCwgdGltZW91dD86IG51bWJlciwgLi4uYXJncykge1xuICAgIGNvbnN0IHsgZGVsZWdhdGUgfSA9IHRpbWVvdXRQcm92aWRlcjtcbiAgICBpZiAoZGVsZWdhdGU/LnNldFRpbWVvdXQpIHtcbiAgICAgIHJldHVybiBkZWxlZ2F0ZS5zZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQsIC4uLmFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0LCAuLi5hcmdzKTtcbiAgfSxcbiAgY2xlYXJUaW1lb3V0KGhhbmRsZSkge1xuICAgIGNvbnN0IHsgZGVsZWdhdGUgfSA9IHRpbWVvdXRQcm92aWRlcjtcbiAgICByZXR1cm4gKGRlbGVnYXRlPy5jbGVhclRpbWVvdXQgfHwgY2xlYXJUaW1lb3V0KShoYW5kbGUgYXMgYW55KTtcbiAgfSxcbiAgZGVsZWdhdGU6IHVuZGVmaW5lZCxcbn07XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IHRpbWVvdXRQcm92aWRlciB9IGZyb20gJy4uL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXInO1xuXG4vKipcbiAqIEhhbmRsZXMgYW4gZXJyb3Igb24gYW5vdGhlciBqb2IgZWl0aGVyIHdpdGggdGhlIHVzZXItY29uZmlndXJlZCB7QGxpbmsgb25VbmhhbmRsZWRFcnJvcn0sXG4gKiBvciBieSB0aHJvd2luZyBpdCBvbiB0aGF0IG5ldyBqb2Igc28gaXQgY2FuIGJlIHBpY2tlZCB1cCBieSBgd2luZG93Lm9uZXJyb3JgLCBgcHJvY2Vzcy5vbignZXJyb3InKWAsIGV0Yy5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlcmUgaXMgYW4gZXJyb3IgdGhhdCBpcyBvdXQtb2YtYmFuZCB3aXRoIHRoZSBzdWJzY3JpcHRpb25cbiAqIG9yIHdoZW4gYW4gZXJyb3IgaGl0cyBhIHRlcm1pbmFsIGJvdW5kYXJ5IG9mIHRoZSBzdWJzY3JpcHRpb24gYW5kIG5vIGVycm9yIGhhbmRsZXIgd2FzIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSBlcnIgdGhlIGVycm9yIHRvIHJlcG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyOiBhbnkpIHtcbiAgdGltZW91dFByb3ZpZGVyLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IHsgb25VbmhhbmRsZWRFcnJvciB9ID0gY29uZmlnO1xuICAgIGlmIChvblVuaGFuZGxlZEVycm9yKSB7XG4gICAgICAvLyBFeGVjdXRlIHRoZSB1c2VyLWNvbmZpZ3VyZWQgZXJyb3IgaGFuZGxlci5cbiAgICAgIG9uVW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhyb3cgc28gaXQgaXMgcGlja2VkIHVwIGJ5IHRoZSBydW50aW1lJ3MgdW5jYXVnaHQgZXJyb3IgbWVjaGFuaXNtLlxuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfSk7XG59XG4iLCAiLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHkgKi9cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkgeyB9XG4iLCAiaW1wb3J0IHsgQ29tcGxldGVOb3RpZmljYXRpb24sIE5leHROb3RpZmljYXRpb24sIEVycm9yTm90aWZpY2F0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogQSBjb21wbGV0aW9uIG9iamVjdCBvcHRpbWl6ZWQgZm9yIG1lbW9yeSB1c2UgYW5kIGNyZWF0ZWQgdG8gYmUgdGhlXG4gKiBzYW1lIFwic2hhcGVcIiBhcyBvdGhlciBub3RpZmljYXRpb25zIGluIHY4LlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBDT01QTEVURV9OT1RJRklDQVRJT04gPSAoKCkgPT4gY3JlYXRlTm90aWZpY2F0aW9uKCdDJywgdW5kZWZpbmVkLCB1bmRlZmluZWQpIGFzIENvbXBsZXRlTm90aWZpY2F0aW9uKSgpO1xuXG4vKipcbiAqIEludGVybmFsIHVzZSBvbmx5LiBDcmVhdGVzIGFuIG9wdGltaXplZCBlcnJvciBub3RpZmljYXRpb24gdGhhdCBpcyB0aGUgc2FtZSBcInNoYXBlXCJcbiAqIGFzIG90aGVyIG5vdGlmaWNhdGlvbnMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yTm90aWZpY2F0aW9uKGVycm9yOiBhbnkpOiBFcnJvck5vdGlmaWNhdGlvbiB7XG4gIHJldHVybiBjcmVhdGVOb3RpZmljYXRpb24oJ0UnLCB1bmRlZmluZWQsIGVycm9yKSBhcyBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJuYWwgdXNlIG9ubHkuIENyZWF0ZXMgYW4gb3B0aW1pemVkIG5leHQgbm90aWZpY2F0aW9uIHRoYXQgaXMgdGhlIHNhbWUgXCJzaGFwZVwiXG4gKiBhcyBvdGhlciBub3RpZmljYXRpb25zLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Tm90aWZpY2F0aW9uPFQ+KHZhbHVlOiBUKSB7XG4gIHJldHVybiBjcmVhdGVOb3RpZmljYXRpb24oJ04nLCB2YWx1ZSwgdW5kZWZpbmVkKSBhcyBOZXh0Tm90aWZpY2F0aW9uPFQ+O1xufVxuXG4vKipcbiAqIEVuc3VyZXMgdGhhdCBhbGwgbm90aWZpY2F0aW9ucyBjcmVhdGVkIGludGVybmFsbHkgaGF2ZSB0aGUgc2FtZSBcInNoYXBlXCIgaW4gdjguXG4gKlxuICogVE9ETzogVGhpcyBpcyBvbmx5IGV4cG9ydGVkIHRvIHN1cHBvcnQgYSBjcmF6eSBsZWdhY3kgdGVzdCBpbiBgZ3JvdXBCeWAuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbihraW5kOiAnTicgfCAnRScgfCAnQycsIHZhbHVlOiBhbnksIGVycm9yOiBhbnkpIHtcbiAgcmV0dXJuIHtcbiAgICBraW5kLFxuICAgIHZhbHVlLFxuICAgIGVycm9yLFxuICB9O1xufVxuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmxldCBjb250ZXh0OiB7IGVycm9yVGhyb3duOiBib29sZWFuOyBlcnJvcjogYW55IH0gfCBudWxsID0gbnVsbDtcblxuLyoqXG4gKiBIYW5kbGVzIGRlYWxpbmcgd2l0aCBlcnJvcnMgZm9yIHN1cGVyLWdyb3NzIG1vZGUuIENyZWF0ZXMgYSBjb250ZXh0LCBpbiB3aGljaFxuICogYW55IHN5bmNocm9ub3VzbHkgdGhyb3duIGVycm9ycyB3aWxsIGJlIHBhc3NlZCB0byB7QGxpbmsgY2FwdHVyZUVycm9yfS4gV2hpY2hcbiAqIHdpbGwgcmVjb3JkIHRoZSBlcnJvciBzdWNoIHRoYXQgaXQgd2lsbCBiZSByZXRocm93biBhZnRlciB0aGUgY2FsbCBiYWNrIGlzIGNvbXBsZXRlLlxuICogVE9ETzogUmVtb3ZlIGluIHY4XG4gKiBAcGFyYW0gY2IgQW4gaW1tZWRpYXRlbHkgZXhlY3V0ZWQgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckNvbnRleHQoY2I6ICgpID0+IHZvaWQpIHtcbiAgaWYgKGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgY29uc3QgaXNSb290ID0gIWNvbnRleHQ7XG4gICAgaWYgKGlzUm9vdCkge1xuICAgICAgY29udGV4dCA9IHsgZXJyb3JUaHJvd246IGZhbHNlLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cbiAgICBjYigpO1xuICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgIGNvbnN0IHsgZXJyb3JUaHJvd24sIGVycm9yIH0gPSBjb250ZXh0ITtcbiAgICAgIGNvbnRleHQgPSBudWxsO1xuICAgICAgaWYgKGVycm9yVGhyb3duKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBnZW5lcmFsIG5vbi1kZXByZWNhdGVkIHBhdGggZm9yIGV2ZXJ5b25lIHRoYXRcbiAgICAvLyBpc24ndCBjcmF6eSBlbm91Z2ggdG8gdXNlIHN1cGVyLWdyb3NzIG1vZGUgKHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpXG4gICAgY2IoKTtcbiAgfVxufVxuXG4vKipcbiAqIENhcHR1cmVzIGVycm9ycyBvbmx5IGluIHN1cGVyLWdyb3NzIG1vZGUuXG4gKiBAcGFyYW0gZXJyIHRoZSBlcnJvciB0byBjYXB0dXJlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXB0dXJlRXJyb3IoZXJyOiBhbnkpIHtcbiAgaWYgKGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nICYmIGNvbnRleHQpIHtcbiAgICBjb250ZXh0LmVycm9yVGhyb3duID0gdHJ1ZTtcbiAgICBjb250ZXh0LmVycm9yID0gZXJyO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IE9ic2VydmVyLCBPYnNlcnZhYmxlTm90aWZpY2F0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBpc1N1YnNjcmlwdGlvbiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgcmVwb3J0VW5oYW5kbGVkRXJyb3IgfSBmcm9tICcuL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3InO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbC9ub29wJztcbmltcG9ydCB7IG5leHROb3RpZmljYXRpb24sIGVycm9yTm90aWZpY2F0aW9uLCBDT01QTEVURV9OT1RJRklDQVRJT04gfSBmcm9tICcuL05vdGlmaWNhdGlvbkZhY3Rvcmllcyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXInO1xuaW1wb3J0IHsgY2FwdHVyZUVycm9yIH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG5cbi8qKlxuICogSW1wbGVtZW50cyB0aGUge0BsaW5rIE9ic2VydmVyfSBpbnRlcmZhY2UgYW5kIGV4dGVuZHMgdGhlXG4gKiB7QGxpbmsgU3Vic2NyaXB0aW9ufSBjbGFzcy4gV2hpbGUgdGhlIHtAbGluayBPYnNlcnZlcn0gaXMgdGhlIHB1YmxpYyBBUEkgZm9yXG4gKiBjb25zdW1pbmcgdGhlIHZhbHVlcyBvZiBhbiB7QGxpbmsgT2JzZXJ2YWJsZX0sIGFsbCBPYnNlcnZlcnMgZ2V0IGNvbnZlcnRlZCB0b1xuICogYSBTdWJzY3JpYmVyLCBpbiBvcmRlciB0byBwcm92aWRlIFN1YnNjcmlwdGlvbi1saWtlIGNhcGFiaWxpdGllcyBzdWNoIGFzXG4gKiBgdW5zdWJzY3JpYmVgLiBTdWJzY3JpYmVyIGlzIGEgY29tbW9uIHR5cGUgaW4gUnhKUywgYW5kIGNydWNpYWwgZm9yXG4gKiBpbXBsZW1lbnRpbmcgb3BlcmF0b3JzLCBidXQgaXQgaXMgcmFyZWx5IHVzZWQgYXMgYSBwdWJsaWMgQVBJLlxuICpcbiAqIEBjbGFzcyBTdWJzY3JpYmVyPFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaXB0aW9uIGltcGxlbWVudHMgT2JzZXJ2ZXI8VD4ge1xuICAvKipcbiAgICogQSBzdGF0aWMgZmFjdG9yeSBmb3IgYSBTdWJzY3JpYmVyLCBnaXZlbiBhIChwb3RlbnRpYWxseSBwYXJ0aWFsKSBkZWZpbml0aW9uXG4gICAqIG9mIGFuIE9ic2VydmVyLlxuICAgKiBAcGFyYW0gbmV4dCBUaGUgYG5leHRgIGNhbGxiYWNrIG9mIGFuIE9ic2VydmVyLlxuICAgKiBAcGFyYW0gZXJyb3IgVGhlIGBlcnJvcmAgY2FsbGJhY2sgb2YgYW5cbiAgICogT2JzZXJ2ZXIuXG4gICAqIEBwYXJhbSBjb21wbGV0ZSBUaGUgYGNvbXBsZXRlYCBjYWxsYmFjayBvZiBhblxuICAgKiBPYnNlcnZlci5cbiAgICogQHJldHVybiBBIFN1YnNjcmliZXIgd3JhcHBpbmcgdGhlIChwYXJ0aWFsbHkgZGVmaW5lZClcbiAgICogT2JzZXJ2ZXIgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIGFyZ3VtZW50cy5cbiAgICogQG5vY29sbGFwc2VcbiAgICogQGRlcHJlY2F0ZWQgRG8gbm90IHVzZS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBUaGVyZSBpcyBubyByZXBsYWNlbWVudCBmb3IgdGhpc1xuICAgKiBtZXRob2QsIGFuZCB0aGVyZSBpcyBubyByZWFzb24gdG8gYmUgY3JlYXRpbmcgaW5zdGFuY2VzIG9mIGBTdWJzY3JpYmVyYCBkaXJlY3RseS5cbiAgICogSWYgeW91IGhhdmUgYSBzcGVjaWZpYyB1c2UgY2FzZSwgcGxlYXNlIGZpbGUgYW4gaXNzdWUuXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlPFQ+KG5leHQ/OiAoeD86IFQpID0+IHZvaWQsIGVycm9yPzogKGU/OiBhbnkpID0+IHZvaWQsIGNvbXBsZXRlPzogKCkgPT4gdm9pZCk6IFN1YnNjcmliZXI8VD4ge1xuICAgIHJldHVybiBuZXcgU2FmZVN1YnNjcmliZXIobmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgcHJvdGVjdGVkIGlzU3RvcHBlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIHByb3RlY3RlZCBkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxhbnk+IHwgT2JzZXJ2ZXI8YW55PjsgLy8gdGhpcyBgYW55YCBpcyB0aGUgZXNjYXBlIGhhdGNoIHRvIGVyYXNlIGV4dHJhIHR5cGUgcGFyYW0gKGUuZy4gUilcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gICAqIFRoZXJlIGlzIG5vIHJlYXNvbiB0byBkaXJlY3RseSBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgU3Vic2NyaWJlci4gVGhpcyB0eXBlIGlzIGV4cG9ydGVkIGZvciB0eXBpbmdzIHJlYXNvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbj86IFN1YnNjcmliZXI8YW55PiB8IE9ic2VydmVyPGFueT4pIHtcbiAgICBzdXBlcigpO1xuICAgIGlmIChkZXN0aW5hdGlvbikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgLy8gQXV0b21hdGljYWxseSBjaGFpbiBzdWJzY3JpcHRpb25zIHRvZ2V0aGVyIGhlcmUuXG4gICAgICAvLyBpZiBkZXN0aW5hdGlvbiBpcyBhIFN1YnNjcmlwdGlvbiwgdGhlbiBpdCBpcyBhIFN1YnNjcmliZXIuXG4gICAgICBpZiAoaXNTdWJzY3JpcHRpb24oZGVzdGluYXRpb24pKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uLmFkZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IEVNUFRZX09CU0VSVkVSO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIG5vdGlmaWNhdGlvbnMgb2YgdHlwZSBgbmV4dGAgZnJvbVxuICAgKiB0aGUgT2JzZXJ2YWJsZSwgd2l0aCBhIHZhbHVlLiBUaGUgT2JzZXJ2YWJsZSBtYXkgY2FsbCB0aGlzIG1ldGhvZCAwIG9yIG1vcmVcbiAgICogdGltZXMuXG4gICAqIEBwYXJhbSB7VH0gW3ZhbHVlXSBUaGUgYG5leHRgIHZhbHVlLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgbmV4dCh2YWx1ZT86IFQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24obmV4dE5vdGlmaWNhdGlvbih2YWx1ZSksIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uZXh0KHZhbHVlISk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGNhbGxiYWNrIHRvIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBvZiB0eXBlIGBlcnJvcmAgZnJvbVxuICAgKiB0aGUgT2JzZXJ2YWJsZSwgd2l0aCBhbiBhdHRhY2hlZCBgRXJyb3JgLiBOb3RpZmllcyB0aGUgT2JzZXJ2ZXIgdGhhdFxuICAgKiB0aGUgT2JzZXJ2YWJsZSBoYXMgZXhwZXJpZW5jZWQgYW4gZXJyb3IgY29uZGl0aW9uLlxuICAgKiBAcGFyYW0ge2FueX0gW2Vycl0gVGhlIGBlcnJvcmAgZXhjZXB0aW9uLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZXJyb3IoZXJyPzogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKGVycm9yTm90aWZpY2F0aW9uKGVyciksIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIGEgdmFsdWVsZXNzIG5vdGlmaWNhdGlvbiBvZiB0eXBlXG4gICAqIGBjb21wbGV0ZWAgZnJvbSB0aGUgT2JzZXJ2YWJsZS4gTm90aWZpZXMgdGhlIE9ic2VydmVyIHRoYXQgdGhlIE9ic2VydmFibGVcbiAgICogaGFzIGZpbmlzaGVkIHNlbmRpbmcgcHVzaC1iYXNlZCBub3RpZmljYXRpb25zLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKENPTVBMRVRFX05PVElGSUNBVElPTiwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2NvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgc3VwZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBudWxsITtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9lcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGJpbmQgaXMgY2FwdHVyZWQgaGVyZSBiZWNhdXNlIHdlIHdhbnQgdG8gYmUgYWJsZSB0byBoYXZlXG4gKiBjb21wYXRpYmlsaXR5IHdpdGggbW9ub2lkIGxpYnJhcmllcyB0aGF0IHRlbmQgdG8gdXNlIGEgbWV0aG9kIG5hbWVkXG4gKiBgYmluZGAuIEluIHBhcnRpY3VsYXIsIGEgbGlicmFyeSBjYWxsZWQgTW9uaW8gcmVxdWlyZXMgdGhpcy5cbiAqL1xuY29uc3QgX2JpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZDtcblxuZnVuY3Rpb24gYmluZDxGbiBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihmbjogRm4sIHRoaXNBcmc6IGFueSk6IEZuIHtcbiAgcmV0dXJuIF9iaW5kLmNhbGwoZm4sIHRoaXNBcmcpO1xufVxuXG4vKipcbiAqIEludGVybmFsIG9wdGltaXphdGlvbiBvbmx5LCBETyBOT1QgRVhQT1NFLlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIENvbnN1bWVyT2JzZXJ2ZXI8VD4gaW1wbGVtZW50cyBPYnNlcnZlcjxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFydGlhbE9ic2VydmVyOiBQYXJ0aWFsPE9ic2VydmVyPFQ+Pikge31cblxuICBuZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgY29uc3QgeyBwYXJ0aWFsT2JzZXJ2ZXIgfSA9IHRoaXM7XG4gICAgaWYgKHBhcnRpYWxPYnNlcnZlci5uZXh0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXJyb3IoZXJyOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBhcnRpYWxPYnNlcnZlciB9ID0gdGhpcztcbiAgICBpZiAocGFydGlhbE9ic2VydmVyLmVycm9yKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICBjb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBhcnRpYWxPYnNlcnZlciB9ID0gdGhpcztcbiAgICBpZiAocGFydGlhbE9ic2VydmVyLmNvbXBsZXRlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZmVTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIG9ic2VydmVyT3JOZXh0PzogUGFydGlhbDxPYnNlcnZlcjxUPj4gfCAoKHZhbHVlOiBUKSA9PiB2b2lkKSB8IG51bGwsXG4gICAgZXJyb3I/OiAoKGU/OiBhbnkpID0+IHZvaWQpIHwgbnVsbCxcbiAgICBjb21wbGV0ZT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGxldCBwYXJ0aWFsT2JzZXJ2ZXI6IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+O1xuICAgIGlmIChpc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSB8fCAhb2JzZXJ2ZXJPck5leHQpIHtcbiAgICAgIC8vIFRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uLCBub3QgYW4gb2JzZXJ2ZXIuIFRoZSBuZXh0XG4gICAgICAvLyB0d28gYXJndW1lbnRzICpjb3VsZCogYmUgb2JzZXJ2ZXJzLCBvciB0aGV5IGNvdWxkIGJlIGVtcHR5LlxuICAgICAgcGFydGlhbE9ic2VydmVyID0ge1xuICAgICAgICBuZXh0OiAob2JzZXJ2ZXJPck5leHQgPz8gdW5kZWZpbmVkKSBhcyAoKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCB1bmRlZmluZWQpLFxuICAgICAgICBlcnJvcjogZXJyb3IgPz8gdW5kZWZpbmVkLFxuICAgICAgICBjb21wbGV0ZTogY29tcGxldGUgPz8gdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgcGFydGlhbCBvYnNlcnZlci5cbiAgICAgIGxldCBjb250ZXh0OiBhbnk7XG4gICAgICBpZiAodGhpcyAmJiBjb25maWcudXNlRGVwcmVjYXRlZE5leHRDb250ZXh0KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYSBkZXByZWNhdGVkIHBhdGggdGhhdCBtYWRlIGB0aGlzLnVuc3Vic2NyaWJlKClgIGF2YWlsYWJsZSBpblxuICAgICAgICAvLyBuZXh0IGhhbmRsZXIgZnVuY3Rpb25zIHBhc3NlZCB0byBzdWJzY3JpYmUuIFRoaXMgb25seSBleGlzdHMgYmVoaW5kIGEgZmxhZ1xuICAgICAgICAvLyBub3csIGFzIGl0IGlzICp2ZXJ5KiBzbG93LlxuICAgICAgICBjb250ZXh0ID0gT2JqZWN0LmNyZWF0ZShvYnNlcnZlck9yTmV4dCk7XG4gICAgICAgIGNvbnRleHQudW5zdWJzY3JpYmUgPSAoKSA9PiB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IHtcbiAgICAgICAgICBuZXh0OiBvYnNlcnZlck9yTmV4dC5uZXh0ICYmIGJpbmQob2JzZXJ2ZXJPck5leHQubmV4dCwgY29udGV4dCksXG4gICAgICAgICAgZXJyb3I6IG9ic2VydmVyT3JOZXh0LmVycm9yICYmIGJpbmQob2JzZXJ2ZXJPck5leHQuZXJyb3IsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbXBsZXRlOiBvYnNlcnZlck9yTmV4dC5jb21wbGV0ZSAmJiBiaW5kKG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlLCBjb250ZXh0KSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZSBcIm5vcm1hbFwiIHBhdGguIEp1c3QgdXNlIHRoZSBwYXJ0aWFsIG9ic2VydmVyIGRpcmVjdGx5LlxuICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSBvYnNlcnZlck9yTmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXcmFwIHRoZSBwYXJ0aWFsIG9ic2VydmVyIHRvIGVuc3VyZSBpdCdzIGEgZnVsbCBvYnNlcnZlciwgYW5kXG4gICAgLy8gbWFrZSBzdXJlIHByb3BlciBlcnJvciBoYW5kbGluZyBpcyBhY2NvdW50ZWQgZm9yLlxuICAgIHRoaXMuZGVzdGluYXRpb24gPSBuZXcgQ29uc3VtZXJPYnNlcnZlcihwYXJ0aWFsT2JzZXJ2ZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yOiBhbnkpIHtcbiAgaWYgKGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgY2FwdHVyZUVycm9yKGVycm9yKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZGVhbCBwYXRoLCB3ZSByZXBvcnQgdGhpcyBhcyBhbiB1bmhhbmRsZWQgZXJyb3IsXG4gICAgLy8gd2hpY2ggaXMgdGhyb3duIG9uIGEgbmV3IGNhbGwgc3RhY2suXG4gICAgcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICB9XG59XG5cbi8qKlxuICogQW4gZXJyb3IgaGFuZGxlciB1c2VkIHdoZW4gbm8gZXJyb3IgaGFuZGxlciB3YXMgc3VwcGxpZWRcbiAqIHRvIHRoZSBTYWZlU3Vic2NyaWJlciAtLSBtZWFuaW5nIG5vIGVycm9yIGhhbmRsZXIgd2FzIHN1cHBsaWVkXG4gKiBkbyB0aGUgYHN1YnNjcmliZWAgY2FsbCBvbiBvdXIgb2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSBlcnIgVGhlIGVycm9yIHRvIGhhbmRsZVxuICovXG5mdW5jdGlvbiBkZWZhdWx0RXJyb3JIYW5kbGVyKGVycjogYW55KSB7XG4gIHRocm93IGVycjtcbn1cblxuLyoqXG4gKiBBIGhhbmRsZXIgZm9yIG5vdGlmaWNhdGlvbnMgdGhhdCBjYW5ub3QgYmUgc2VudCB0byBhIHN0b3BwZWQgc3Vic2NyaWJlci5cbiAqIEBwYXJhbSBub3RpZmljYXRpb24gVGhlIG5vdGlmaWNhdGlvbiBiZWluZyBzZW50XG4gKiBAcGFyYW0gc3Vic2NyaWJlciBUaGUgc3RvcHBlZCBzdWJzY3JpYmVyXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBPYnNlcnZhYmxlTm90aWZpY2F0aW9uPGFueT4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55Pikge1xuICBjb25zdCB7IG9uU3RvcHBlZE5vdGlmaWNhdGlvbiB9ID0gY29uZmlnO1xuICBvblN0b3BwZWROb3RpZmljYXRpb24gJiYgdGltZW91dFByb3ZpZGVyLnNldFRpbWVvdXQoKCkgPT4gb25TdG9wcGVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgc3Vic2NyaWJlcikpO1xufVxuXG4vKipcbiAqIFRoZSBvYnNlcnZlciB1c2VkIGFzIGEgc3R1YiBmb3Igc3Vic2NyaXB0aW9ucyB3aGVyZSB0aGUgdXNlciBkaWQgbm90XG4gKiBwYXNzIGFueSBhcmd1bWVudHMgdG8gYHN1YnNjcmliZWAuIENvbWVzIHdpdGggdGhlIGRlZmF1bHQgZXJyb3IgaGFuZGxpbmdcbiAqIGJlaGF2aW9yLlxuICovXG5leHBvcnQgY29uc3QgRU1QVFlfT0JTRVJWRVI6IFJlYWRvbmx5PE9ic2VydmVyPGFueT4+ICYgeyBjbG9zZWQ6IHRydWUgfSA9IHtcbiAgY2xvc2VkOiB0cnVlLFxuICBuZXh0OiBub29wLFxuICBlcnJvcjogZGVmYXVsdEVycm9ySGFuZGxlcixcbiAgY29tcGxldGU6IG5vb3AsXG59O1xuIiwgIi8qKlxuICogU3ltYm9sLm9ic2VydmFibGUgb3IgYSBzdHJpbmcgXCJAQG9ic2VydmFibGVcIi4gVXNlZCBmb3IgaW50ZXJvcFxuICpcbiAqIEBkZXByZWNhdGVkIFdlIHdpbGwgbm8gbG9uZ2VyIGJlIGV4cG9ydGluZyB0aGlzIHN5bWJvbCBpbiB1cGNvbWluZyB2ZXJzaW9ucyBvZiBSeEpTLlxuICogSW5zdGVhZCBwb2x5ZmlsbCBhbmQgdXNlIFN5bWJvbC5vYnNlcnZhYmxlIGRpcmVjdGx5ICpvciogdXNlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3N5bWJvbC1vYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBjb25zdCBvYnNlcnZhYmxlOiBzdHJpbmcgfCBzeW1ib2wgPSAoKCkgPT4gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLm9ic2VydmFibGUpIHx8ICdAQG9ic2VydmFibGUnKSgpO1xuIiwgIi8qKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyBvbmUgcGFyYW1ldGVyIGFuZCBqdXN0IHJldHVybnMgaXQuIFNpbXBseSBwdXQsXG4gKiB0aGlzIGlzIGxpa2UgYDxUPih4OiBUKTogVCA9PiB4YC5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIFRoaXMgaXMgdXNlZnVsIGluIHNvbWUgY2FzZXMgd2hlbiB1c2luZyB0aGluZ3MgbGlrZSBgbWVyZ2VNYXBgXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlLCBtYXAsIHJhbmdlLCBtZXJnZU1hcCwgaWRlbnRpdHkgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBzb3VyY2UkID0gaW50ZXJ2YWwoMTAwMCkucGlwZSh0YWtlKDUpKTtcbiAqXG4gKiBjb25zdCByZXN1bHQkID0gc291cmNlJC5waXBlKFxuICogICBtYXAoaSA9PiByYW5nZShpKSksXG4gKiAgIG1lcmdlTWFwKGlkZW50aXR5KSAvLyBzYW1lIGFzIG1lcmdlTWFwKHggPT4geClcbiAqICk7XG4gKlxuICogcmVzdWx0JC5zdWJzY3JpYmUoe1xuICogICBuZXh0OiBjb25zb2xlLmxvZ1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBPciB3aGVuIHlvdSB3YW50IHRvIHNlbGVjdGl2ZWx5IGFwcGx5IGFuIG9wZXJhdG9yXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlLCBpZGVudGl0eSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHNob3VsZExpbWl0ID0gKCkgPT4gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAqXG4gKiBjb25zdCBzb3VyY2UkID0gaW50ZXJ2YWwoMTAwMCk7XG4gKlxuICogY29uc3QgcmVzdWx0JCA9IHNvdXJjZSQucGlwZShzaG91bGRMaW1pdCgpID8gdGFrZSg1KSA6IGlkZW50aXR5KTtcbiAqXG4gKiByZXN1bHQkLnN1YnNjcmliZSh7XG4gKiAgIG5leHQ6IGNvbnNvbGUubG9nXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB4IEFueSB2YWx1ZSB0aGF0IGlzIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb25cbiAqIEByZXR1cm5zIFRoZSB2YWx1ZSBwYXNzZWQgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciB0byB0aGlzIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTxUPih4OiBUKTogVCB7XG4gIHJldHVybiB4O1xufVxuIiwgImltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi9pZGVudGl0eSc7XG5pbXBvcnQgeyBVbmFyeUZ1bmN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGlwZSgpOiB0eXBlb2YgaWRlbnRpdHk7XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBPihmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4pOiBVbmFyeUZ1bmN0aW9uPFQsIEE+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQj4oZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LCBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4pOiBVbmFyeUZ1bmN0aW9uPFQsIEI+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQz4oZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LCBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPik6IFVuYXJ5RnVuY3Rpb248VCwgQz47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBEPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEQ+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRT4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEU+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRj4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj5cbik6IFVuYXJ5RnVuY3Rpb248VCwgRj47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGLCBHPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPixcbiAgZm43OiBVbmFyeUZ1bmN0aW9uPEYsIEc+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEc+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRiwgRywgSD4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj4sXG4gIGZuNzogVW5hcnlGdW5jdGlvbjxGLCBHPixcbiAgZm44OiBVbmFyeUZ1bmN0aW9uPEcsIEg+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEg+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRiwgRywgSCwgST4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj4sXG4gIGZuNzogVW5hcnlGdW5jdGlvbjxGLCBHPixcbiAgZm44OiBVbmFyeUZ1bmN0aW9uPEcsIEg+LFxuICBmbjk6IFVuYXJ5RnVuY3Rpb248SCwgST5cbik6IFVuYXJ5RnVuY3Rpb248VCwgST47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPixcbiAgZm43OiBVbmFyeUZ1bmN0aW9uPEYsIEc+LFxuICBmbjg6IFVuYXJ5RnVuY3Rpb248RywgSD4sXG4gIGZuOTogVW5hcnlGdW5jdGlvbjxILCBJPixcbiAgLi4uZm5zOiBVbmFyeUZ1bmN0aW9uPGFueSwgYW55PltdXG4pOiBVbmFyeUZ1bmN0aW9uPFQsIHVua25vd24+O1xuXG4vKipcbiAqIHBpcGUoKSBjYW4gYmUgY2FsbGVkIG9uIG9uZSBvciBtb3JlIGZ1bmN0aW9ucywgZWFjaCBvZiB3aGljaCBjYW4gdGFrZSBvbmUgYXJndW1lbnQgKFwiVW5hcnlGdW5jdGlvblwiKVxuICogYW5kIHVzZXMgaXQgdG8gcmV0dXJuIGEgdmFsdWUuXG4gKiBJdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBvbmUgYXJndW1lbnQsIHBhc3NlcyBpdCB0byB0aGUgZmlyc3QgVW5hcnlGdW5jdGlvbiwgYW5kIHRoZW5cbiAqIHBhc3NlcyB0aGUgcmVzdWx0IHRvIHRoZSBuZXh0IG9uZSwgcGFzc2VzIHRoYXQgcmVzdWx0IHRvIHRoZSBuZXh0IG9uZSwgYW5kIHNvIG9uLiAgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwaXBlKC4uLmZuczogQXJyYXk8VW5hcnlGdW5jdGlvbjxhbnksIGFueT4+KTogVW5hcnlGdW5jdGlvbjxhbnksIGFueT4ge1xuICByZXR1cm4gcGlwZUZyb21BcnJheShmbnMpO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gcGlwZUZyb21BcnJheTxULCBSPihmbnM6IEFycmF5PFVuYXJ5RnVuY3Rpb248VCwgUj4+KTogVW5hcnlGdW5jdGlvbjxULCBSPiB7XG4gIGlmIChmbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5IGFzIFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+O1xuICB9XG5cbiAgaWYgKGZucy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZm5zWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHBpcGVkKGlucHV0OiBUKTogUiB7XG4gICAgcmV0dXJuIGZucy5yZWR1Y2UoKHByZXY6IGFueSwgZm46IFVuYXJ5RnVuY3Rpb248VCwgUj4pID0+IGZuKHByZXYpLCBpbnB1dCBhcyBhbnkpO1xuICB9O1xufVxuIiwgImltcG9ydCB7IE9wZXJhdG9yIH0gZnJvbSAnLi9PcGVyYXRvcic7XG5pbXBvcnQgeyBTYWZlU3Vic2NyaWJlciwgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBpc1N1YnNjcmlwdGlvbiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgVGVhcmRvd25Mb2dpYywgT3BlcmF0b3JGdW5jdGlvbiwgU3Vic2NyaWJhYmxlLCBPYnNlcnZlciB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHsgcGlwZUZyb21BcnJheSB9IGZyb20gJy4vdXRpbC9waXBlJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcblxuLyoqXG4gKiBBIHJlcHJlc2VudGF0aW9uIG9mIGFueSBzZXQgb2YgdmFsdWVzIG92ZXIgYW55IGFtb3VudCBvZiB0aW1lLiBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIGJ1aWxkaW5nIGJsb2NrXG4gKiBvZiBSeEpTLlxuICpcbiAqIEBjbGFzcyBPYnNlcnZhYmxlPFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlPFQ+IGltcGxlbWVudHMgU3Vic2NyaWJhYmxlPFQ+IHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LlxuICAgKi9cbiAgc291cmNlOiBPYnNlcnZhYmxlPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LlxuICAgKi9cbiAgb3BlcmF0b3I6IE9wZXJhdG9yPGFueSwgVD4gfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJzY3JpYmUgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIE9ic2VydmFibGUgaXNcbiAgICogaW5pdGlhbGx5IHN1YnNjcmliZWQgdG8uIFRoaXMgZnVuY3Rpb24gaXMgZ2l2ZW4gYSBTdWJzY3JpYmVyLCB0byB3aGljaCBuZXcgdmFsdWVzXG4gICAqIGNhbiBiZSBgbmV4dGBlZCwgb3IgYW4gYGVycm9yYCBtZXRob2QgY2FuIGJlIGNhbGxlZCB0byByYWlzZSBhbiBlcnJvciwgb3JcbiAgICogYGNvbXBsZXRlYCBjYW4gYmUgY2FsbGVkIHRvIG5vdGlmeSBvZiBhIHN1Y2Nlc3NmdWwgY29tcGxldGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHN1YnNjcmliZT86ICh0aGlzOiBPYnNlcnZhYmxlPFQ+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiBUZWFyZG93bkxvZ2ljKSB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhBQ0s6IFNpbmNlIFR5cGVTY3JpcHQgaW5oZXJpdHMgc3RhdGljIHByb3BlcnRpZXMgdG9vLCB3ZSBoYXZlIHRvXG4gIC8vIGZpZ2h0IGFnYWluc3QgVHlwZVNjcmlwdCBoZXJlIHNvIFN1YmplY3QgY2FuIGhhdmUgYSBkaWZmZXJlbnQgc3RhdGljIGNyZWF0ZSBzaWduYXR1cmVcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgT2JzZXJ2YWJsZSBieSBjYWxsaW5nIHRoZSBPYnNlcnZhYmxlIGNvbnN0cnVjdG9yXG4gICAqIEBvd25lciBPYnNlcnZhYmxlXG4gICAqIEBtZXRob2QgY3JlYXRlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YnNjcmliZT8gdGhlIHN1YnNjcmliZXIgZnVuY3Rpb24gdG8gYmUgcGFzc2VkIHRvIHRoZSBPYnNlcnZhYmxlIGNvbnN0cnVjdG9yXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IGEgbmV3IG9ic2VydmFibGVcbiAgICogQG5vY29sbGFwc2VcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBuZXcgT2JzZXJ2YWJsZSgpYCBpbnN0ZWFkLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlOiAoLi4uYXJnczogYW55W10pID0+IGFueSA9IDxUPihzdWJzY3JpYmU/OiAoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4gVGVhcmRvd25Mb2dpYykgPT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPihzdWJzY3JpYmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE9ic2VydmFibGUsIHdpdGggdGhpcyBPYnNlcnZhYmxlIGluc3RhbmNlIGFzIHRoZSBzb3VyY2UsIGFuZCB0aGUgcGFzc2VkXG4gICAqIG9wZXJhdG9yIGRlZmluZWQgYXMgdGhlIG5ldyBvYnNlcnZhYmxlJ3Mgb3BlcmF0b3IuXG4gICAqIEBtZXRob2QgbGlmdFxuICAgKiBAcGFyYW0gb3BlcmF0b3IgdGhlIG9wZXJhdG9yIGRlZmluaW5nIHRoZSBvcGVyYXRpb24gdG8gdGFrZSBvbiB0aGUgb2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIGEgbmV3IG9ic2VydmFibGUgd2l0aCB0aGUgT3BlcmF0b3IgYXBwbGllZFxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICogSWYgeW91IGhhdmUgaW1wbGVtZW50ZWQgYW4gb3BlcmF0b3IgdXNpbmcgYGxpZnRgLCBpdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSBjcmVhdGUgYW5cbiAgICogb3BlcmF0b3IgYnkgc2ltcGx5IHJldHVybmluZyBgbmV3IE9ic2VydmFibGUoKWAgZGlyZWN0bHkuIFNlZSBcIkNyZWF0aW5nIG5ldyBvcGVyYXRvcnMgZnJvbVxuICAgKiBzY3JhdGNoXCIgc2VjdGlvbiBoZXJlOiBodHRwczovL3J4anMuZGV2L2d1aWRlL29wZXJhdG9yc1xuICAgKi9cbiAgbGlmdDxSPihvcGVyYXRvcj86IE9wZXJhdG9yPFQsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPFI+KCk7XG4gICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgIG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxuXG4gIHN1YnNjcmliZShvYnNlcnZlck9yTmV4dD86IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+IHwgKCh2YWx1ZTogVCkgPT4gdm9pZCkpOiBTdWJzY3JpcHRpb247XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnN0ZWFkIG9mIHBhc3Npbmcgc2VwYXJhdGUgY2FsbGJhY2sgYXJndW1lbnRzLCB1c2UgYW4gb2JzZXJ2ZXIgYXJndW1lbnQuIFNpZ25hdHVyZXMgdGFraW5nIHNlcGFyYXRlIGNhbGxiYWNrIGFyZ3VtZW50cyB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3N1YnNjcmliZS1hcmd1bWVudHMgKi9cbiAgc3Vic2NyaWJlKG5leHQ/OiAoKHZhbHVlOiBUKSA9PiB2b2lkKSB8IG51bGwsIGVycm9yPzogKChlcnJvcjogYW55KSA9PiB2b2lkKSB8IG51bGwsIGNvbXBsZXRlPzogKCgpID0+IHZvaWQpIHwgbnVsbCk6IFN1YnNjcmlwdGlvbjtcbiAgLyoqXG4gICAqIEludm9rZXMgYW4gZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUgYW5kIHJlZ2lzdGVycyBPYnNlcnZlciBoYW5kbGVycyBmb3Igbm90aWZpY2F0aW9ucyBpdCB3aWxsIGVtaXQuXG4gICAqXG4gICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5Vc2UgaXQgd2hlbiB5b3UgaGF2ZSBhbGwgdGhlc2UgT2JzZXJ2YWJsZXMsIGJ1dCBzdGlsbCBub3RoaW5nIGlzIGhhcHBlbmluZy48L3NwYW4+XG4gICAqXG4gICAqIGBzdWJzY3JpYmVgIGlzIG5vdCBhIHJlZ3VsYXIgb3BlcmF0b3IsIGJ1dCBhIG1ldGhvZCB0aGF0IGNhbGxzIE9ic2VydmFibGUncyBpbnRlcm5hbCBgc3Vic2NyaWJlYCBmdW5jdGlvbi4gSXRcbiAgICogbWlnaHQgYmUgZm9yIGV4YW1wbGUgYSBmdW5jdGlvbiB0aGF0IHlvdSBwYXNzZWQgdG8gT2JzZXJ2YWJsZSdzIGNvbnN0cnVjdG9yLCBidXQgbW9zdCBvZiB0aGUgdGltZSBpdCBpc1xuICAgKiBhIGxpYnJhcnkgaW1wbGVtZW50YXRpb24sIHdoaWNoIGRlZmluZXMgd2hhdCB3aWxsIGJlIGVtaXR0ZWQgYnkgYW4gT2JzZXJ2YWJsZSwgYW5kIHdoZW4gaXQgYmUgd2lsbCBlbWl0dGVkLiBUaGlzIG1lYW5zXG4gICAqIHRoYXQgY2FsbGluZyBgc3Vic2NyaWJlYCBpcyBhY3R1YWxseSB0aGUgbW9tZW50IHdoZW4gT2JzZXJ2YWJsZSBzdGFydHMgaXRzIHdvcmssIG5vdCB3aGVuIGl0IGlzIGNyZWF0ZWQsIGFzIGl0IGlzIG9mdGVuXG4gICAqIHRoZSB0aG91Z2h0LlxuICAgKlxuICAgKiBBcGFydCBmcm9tIHN0YXJ0aW5nIHRoZSBleGVjdXRpb24gb2YgYW4gT2JzZXJ2YWJsZSwgdGhpcyBtZXRob2QgYWxsb3dzIHlvdSB0byBsaXN0ZW4gZm9yIHZhbHVlc1xuICAgKiB0aGF0IGFuIE9ic2VydmFibGUgZW1pdHMsIGFzIHdlbGwgYXMgZm9yIHdoZW4gaXQgY29tcGxldGVzIG9yIGVycm9ycy4gWW91IGNhbiBhY2hpZXZlIHRoaXMgaW4gdHdvXG4gICAqIG9mIHRoZSBmb2xsb3dpbmcgd2F5cy5cbiAgICpcbiAgICogVGhlIGZpcnN0IHdheSBpcyBjcmVhdGluZyBhbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHtAbGluayBPYnNlcnZlcn0gaW50ZXJmYWNlLiBJdCBzaG91bGQgaGF2ZSBtZXRob2RzXG4gICAqIGRlZmluZWQgYnkgdGhhdCBpbnRlcmZhY2UsIGJ1dCBub3RlIHRoYXQgaXQgc2hvdWxkIGJlIGp1c3QgYSByZWd1bGFyIEphdmFTY3JpcHQgb2JqZWN0LCB3aGljaCB5b3UgY2FuIGNyZWF0ZVxuICAgKiB5b3Vyc2VsZiBpbiBhbnkgd2F5IHlvdSB3YW50IChFUzYgY2xhc3MsIGNsYXNzaWMgZnVuY3Rpb24gY29uc3RydWN0b3IsIG9iamVjdCBsaXRlcmFsIGV0Yy4pLiBJbiBwYXJ0aWN1bGFyLCBkb1xuICAgKiBub3QgYXR0ZW1wdCB0byB1c2UgYW55IFJ4SlMgaW1wbGVtZW50YXRpb24gZGV0YWlscyB0byBjcmVhdGUgT2JzZXJ2ZXJzIC0geW91IGRvbid0IG5lZWQgdGhlbS4gUmVtZW1iZXIgYWxzb1xuICAgKiB0aGF0IHlvdXIgb2JqZWN0IGRvZXMgbm90IGhhdmUgdG8gaW1wbGVtZW50IGFsbCBtZXRob2RzLiBJZiB5b3UgZmluZCB5b3Vyc2VsZiBjcmVhdGluZyBhIG1ldGhvZCB0aGF0IGRvZXNuJ3RcbiAgICogZG8gYW55dGhpbmcsIHlvdSBjYW4gc2ltcGx5IG9taXQgaXQuIE5vdGUgaG93ZXZlciwgaWYgdGhlIGBlcnJvcmAgbWV0aG9kIGlzIG5vdCBwcm92aWRlZCBhbmQgYW4gZXJyb3IgaGFwcGVucyxcbiAgICogaXQgd2lsbCBiZSB0aHJvd24gYXN5bmNocm9ub3VzbHkuIEVycm9ycyB0aHJvd24gYXN5bmNocm9ub3VzbHkgY2Fubm90IGJlIGNhdWdodCB1c2luZyBgdHJ5YC9gY2F0Y2hgLiBJbnN0ZWFkLFxuICAgKiB1c2UgdGhlIHtAbGluayBvblVuaGFuZGxlZEVycm9yfSBjb25maWd1cmF0aW9uIG9wdGlvbiBvciB1c2UgYSBydW50aW1lIGhhbmRsZXIgKGxpa2UgYHdpbmRvdy5vbmVycm9yYCBvclxuICAgKiBgcHJvY2Vzcy5vbignZXJyb3IpYCkgdG8gYmUgbm90aWZpZWQgb2YgdW5oYW5kbGVkIGVycm9ycy4gQmVjYXVzZSBvZiB0aGlzLCBpdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IHByb3ZpZGVcbiAgICogYW4gYGVycm9yYCBtZXRob2QgdG8gYXZvaWQgbWlzc2luZyB0aHJvd24gZXJyb3JzLlxuICAgKlxuICAgKiBUaGUgc2Vjb25kIHdheSBpcyB0byBnaXZlIHVwIG9uIE9ic2VydmVyIG9iamVjdCBhbHRvZ2V0aGVyIGFuZCBzaW1wbHkgcHJvdmlkZSBjYWxsYmFjayBmdW5jdGlvbnMgaW4gcGxhY2Ugb2YgaXRzIG1ldGhvZHMuXG4gICAqIFRoaXMgbWVhbnMgeW91IGNhbiBwcm92aWRlIHRocmVlIGZ1bmN0aW9ucyBhcyBhcmd1bWVudHMgdG8gYHN1YnNjcmliZWAsIHdoZXJlIHRoZSBmaXJzdCBmdW5jdGlvbiBpcyBlcXVpdmFsZW50XG4gICAqIG9mIGEgYG5leHRgIG1ldGhvZCwgdGhlIHNlY29uZCBvZiBhbiBgZXJyb3JgIG1ldGhvZCBhbmQgdGhlIHRoaXJkIG9mIGEgYGNvbXBsZXRlYCBtZXRob2QuIEp1c3QgYXMgaW4gY2FzZSBvZiBhbiBPYnNlcnZlcixcbiAgICogaWYgeW91IGRvIG5vdCBuZWVkIHRvIGxpc3RlbiBmb3Igc29tZXRoaW5nLCB5b3UgY2FuIG9taXQgYSBmdW5jdGlvbiBieSBwYXNzaW5nIGB1bmRlZmluZWRgIG9yIGBudWxsYCxcbiAgICogc2luY2UgYHN1YnNjcmliZWAgcmVjb2duaXplcyB0aGVzZSBmdW5jdGlvbnMgYnkgd2hlcmUgdGhleSB3ZXJlIHBsYWNlZCBpbiBmdW5jdGlvbiBjYWxsLiBXaGVuIGl0IGNvbWVzXG4gICAqIHRvIHRoZSBgZXJyb3JgIGZ1bmN0aW9uLCBhcyB3aXRoIGFuIE9ic2VydmVyLCBpZiBub3QgcHJvdmlkZWQsIGVycm9ycyBlbWl0dGVkIGJ5IGFuIE9ic2VydmFibGUgd2lsbCBiZSB0aHJvd24gYXN5bmNocm9ub3VzbHkuXG4gICAqXG4gICAqIFlvdSBjYW4sIGhvd2V2ZXIsIHN1YnNjcmliZSB3aXRoIG5vIHBhcmFtZXRlcnMgYXQgYWxsLiBUaGlzIG1heSBiZSB0aGUgY2FzZSB3aGVyZSB5b3UncmUgbm90IGludGVyZXN0ZWQgaW4gdGVybWluYWwgZXZlbnRzXG4gICAqIGFuZCB5b3UgYWxzbyBoYW5kbGVkIGVtaXNzaW9ucyBpbnRlcm5hbGx5IGJ5IHVzaW5nIG9wZXJhdG9ycyAoZS5nLiB1c2luZyBgdGFwYCkuXG4gICAqXG4gICAqIFdoaWNoZXZlciBzdHlsZSBvZiBjYWxsaW5nIGBzdWJzY3JpYmVgIHlvdSB1c2UsIGluIGJvdGggY2FzZXMgaXQgcmV0dXJucyBhIFN1YnNjcmlwdGlvbiBvYmplY3QuXG4gICAqIFRoaXMgb2JqZWN0IGFsbG93cyB5b3UgdG8gY2FsbCBgdW5zdWJzY3JpYmVgIG9uIGl0LCB3aGljaCBpbiB0dXJuIHdpbGwgc3RvcCB0aGUgd29yayB0aGF0IGFuIE9ic2VydmFibGUgZG9lcyBhbmQgd2lsbCBjbGVhblxuICAgKiB1cCBhbGwgcmVzb3VyY2VzIHRoYXQgYW4gT2JzZXJ2YWJsZSB1c2VkLiBOb3RlIHRoYXQgY2FuY2VsbGluZyBhIHN1YnNjcmlwdGlvbiB3aWxsIG5vdCBjYWxsIGBjb21wbGV0ZWAgY2FsbGJhY2tcbiAgICogcHJvdmlkZWQgdG8gYHN1YnNjcmliZWAgZnVuY3Rpb24sIHdoaWNoIGlzIHJlc2VydmVkIGZvciBhIHJlZ3VsYXIgY29tcGxldGlvbiBzaWduYWwgdGhhdCBjb21lcyBmcm9tIGFuIE9ic2VydmFibGUuXG4gICAqXG4gICAqIFJlbWVtYmVyIHRoYXQgY2FsbGJhY2tzIHByb3ZpZGVkIHRvIGBzdWJzY3JpYmVgIGFyZSBub3QgZ3VhcmFudGVlZCB0byBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkuXG4gICAqIEl0IGlzIGFuIE9ic2VydmFibGUgaXRzZWxmIHRoYXQgZGVjaWRlcyB3aGVuIHRoZXNlIGZ1bmN0aW9ucyB3aWxsIGJlIGNhbGxlZC4gRm9yIGV4YW1wbGUge0BsaW5rIG9mfVxuICAgKiBieSBkZWZhdWx0IGVtaXRzIGFsbCBpdHMgdmFsdWVzIHN5bmNocm9ub3VzbHkuIEFsd2F5cyBjaGVjayBkb2N1bWVudGF0aW9uIGZvciBob3cgZ2l2ZW4gT2JzZXJ2YWJsZVxuICAgKiB3aWxsIGJlaGF2ZSB3aGVuIHN1YnNjcmliZWQgYW5kIGlmIGl0cyBkZWZhdWx0IGJlaGF2aW9yIGNhbiBiZSBtb2RpZmllZCB3aXRoIGEgYHNjaGVkdWxlcmAuXG4gICAqXG4gICAqICMjIyMgRXhhbXBsZXNcbiAgICpcbiAgICogU3Vic2NyaWJlIHdpdGggYW4ge0BsaW5rIGd1aWRlL29ic2VydmVyIE9ic2VydmVyfVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBpbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuICAgKlxuICAgKiBjb25zdCBzdW1PYnNlcnZlciA9IHtcbiAgICogICBzdW06IDAsXG4gICAqICAgbmV4dCh2YWx1ZSkge1xuICAgKiAgICAgY29uc29sZS5sb2coJ0FkZGluZzogJyArIHZhbHVlKTtcbiAgICogICAgIHRoaXMuc3VtID0gdGhpcy5zdW0gKyB2YWx1ZTtcbiAgICogICB9LFxuICAgKiAgIGVycm9yKCkge1xuICAgKiAgICAgLy8gV2UgYWN0dWFsbHkgY291bGQganVzdCByZW1vdmUgdGhpcyBtZXRob2QsXG4gICAqICAgICAvLyBzaW5jZSB3ZSBkbyBub3QgcmVhbGx5IGNhcmUgYWJvdXQgZXJyb3JzIHJpZ2h0IG5vdy5cbiAgICogICB9LFxuICAgKiAgIGNvbXBsZXRlKCkge1xuICAgKiAgICAgY29uc29sZS5sb2coJ1N1bSBlcXVhbHM6ICcgKyB0aGlzLnN1bSk7XG4gICAqICAgfVxuICAgKiB9O1xuICAgKlxuICAgKiBvZigxLCAyLCAzKSAvLyBTeW5jaHJvbm91c2x5IGVtaXRzIDEsIDIsIDMgYW5kIHRoZW4gY29tcGxldGVzLlxuICAgKiAgIC5zdWJzY3JpYmUoc3VtT2JzZXJ2ZXIpO1xuICAgKlxuICAgKiAvLyBMb2dzOlxuICAgKiAvLyAnQWRkaW5nOiAxJ1xuICAgKiAvLyAnQWRkaW5nOiAyJ1xuICAgKiAvLyAnQWRkaW5nOiAzJ1xuICAgKiAvLyAnU3VtIGVxdWFsczogNidcbiAgICogYGBgXG4gICAqXG4gICAqIFN1YnNjcmliZSB3aXRoIGZ1bmN0aW9ucyAoe0BsaW5rIGRlcHJlY2F0aW9ucy9zdWJzY3JpYmUtYXJndW1lbnRzIGRlcHJlY2F0ZWR9KVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBpbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnXG4gICAqXG4gICAqIGxldCBzdW0gPSAwO1xuICAgKlxuICAgKiBvZigxLCAyLCAzKS5zdWJzY3JpYmUoXG4gICAqICAgdmFsdWUgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coJ0FkZGluZzogJyArIHZhbHVlKTtcbiAgICogICAgIHN1bSA9IHN1bSArIHZhbHVlO1xuICAgKiAgIH0sXG4gICAqICAgdW5kZWZpbmVkLFxuICAgKiAgICgpID0+IGNvbnNvbGUubG9nKCdTdW0gZXF1YWxzOiAnICsgc3VtKVxuICAgKiApO1xuICAgKlxuICAgKiAvLyBMb2dzOlxuICAgKiAvLyAnQWRkaW5nOiAxJ1xuICAgKiAvLyAnQWRkaW5nOiAyJ1xuICAgKiAvLyAnQWRkaW5nOiAzJ1xuICAgKiAvLyAnU3VtIGVxdWFsczogNidcbiAgICogYGBgXG4gICAqXG4gICAqIENhbmNlbCBhIHN1YnNjcmlwdGlvblxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBpbXBvcnQgeyBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuICAgKlxuICAgKiBjb25zdCBzdWJzY3JpcHRpb24gPSBpbnRlcnZhbCgxMDAwKS5zdWJzY3JpYmUoe1xuICAgKiAgIG5leHQobnVtKSB7XG4gICAqICAgICBjb25zb2xlLmxvZyhudW0pXG4gICAqICAgfSxcbiAgICogICBjb21wbGV0ZSgpIHtcbiAgICogICAgIC8vIFdpbGwgbm90IGJlIGNhbGxlZCwgZXZlbiB3aGVuIGNhbmNlbGxpbmcgc3Vic2NyaXB0aW9uLlxuICAgKiAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlZCEnKTtcbiAgICogICB9XG4gICAqIH0pO1xuICAgKlxuICAgKiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICogICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICogICBjb25zb2xlLmxvZygndW5zdWJzY3JpYmVkIScpO1xuICAgKiB9LCAyNTAwKTtcbiAgICpcbiAgICogLy8gTG9nczpcbiAgICogLy8gMCBhZnRlciAxc1xuICAgKiAvLyAxIGFmdGVyIDJzXG4gICAqIC8vICd1bnN1YnNjcmliZWQhJyBhZnRlciAyLjVzXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge09ic2VydmVyfEZ1bmN0aW9ufSBvYnNlcnZlck9yTmV4dCAob3B0aW9uYWwpIEVpdGhlciBhbiBvYnNlcnZlciB3aXRoIG1ldGhvZHMgdG8gYmUgY2FsbGVkLFxuICAgKiBvciB0aGUgZmlyc3Qgb2YgdGhyZWUgcG9zc2libGUgaGFuZGxlcnMsIHdoaWNoIGlzIHRoZSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgZnJvbSB0aGUgc3Vic2NyaWJlZFxuICAgKiBPYnNlcnZhYmxlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvciAob3B0aW9uYWwpIEEgaGFuZGxlciBmb3IgYSB0ZXJtaW5hbCBldmVudCByZXN1bHRpbmcgZnJvbSBhbiBlcnJvci4gSWYgbm8gZXJyb3IgaGFuZGxlciBpcyBwcm92aWRlZCxcbiAgICogdGhlIGVycm9yIHdpbGwgYmUgdGhyb3duIGFzeW5jaHJvbm91c2x5IGFzIHVuaGFuZGxlZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGxldGUgKG9wdGlvbmFsKSBBIGhhbmRsZXIgZm9yIGEgdGVybWluYWwgZXZlbnQgcmVzdWx0aW5nIGZyb20gc3VjY2Vzc2Z1bCBjb21wbGV0aW9uLlxuICAgKiBAcmV0dXJuIHtTdWJzY3JpcHRpb259IGEgc3Vic2NyaXB0aW9uIHJlZmVyZW5jZSB0byB0aGUgcmVnaXN0ZXJlZCBoYW5kbGVyc1xuICAgKiBAbWV0aG9kIHN1YnNjcmliZVxuICAgKi9cbiAgc3Vic2NyaWJlKFxuICAgIG9ic2VydmVyT3JOZXh0PzogUGFydGlhbDxPYnNlcnZlcjxUPj4gfCAoKHZhbHVlOiBUKSA9PiB2b2lkKSB8IG51bGwsXG4gICAgZXJyb3I/OiAoKGVycm9yOiBhbnkpID0+IHZvaWQpIHwgbnVsbCxcbiAgICBjb21wbGV0ZT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBzdWJzY3JpYmVyID0gaXNTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0KSA/IG9ic2VydmVyT3JOZXh0IDogbmV3IFNhZmVTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuXG4gICAgZXJyb3JDb250ZXh0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgb3BlcmF0b3IsIHNvdXJjZSB9ID0gdGhpcztcbiAgICAgIHN1YnNjcmliZXIuYWRkKFxuICAgICAgICBvcGVyYXRvclxuICAgICAgICAgID8gLy8gV2UncmUgZGVhbGluZyB3aXRoIGEgc3Vic2NyaXB0aW9uIGluIHRoZVxuICAgICAgICAgICAgLy8gb3BlcmF0b3IgY2hhaW4gdG8gb25lIG9mIG91ciBsaWZ0ZWQgb3BlcmF0b3JzLlxuICAgICAgICAgICAgb3BlcmF0b3IuY2FsbChzdWJzY3JpYmVyLCBzb3VyY2UpXG4gICAgICAgICAgOiBzb3VyY2VcbiAgICAgICAgICA/IC8vIElmIGBzb3VyY2VgIGhhcyBhIHZhbHVlLCBidXQgYG9wZXJhdG9yYCBkb2VzIG5vdCwgc29tZXRoaW5nIHRoYXRcbiAgICAgICAgICAgIC8vIGhhZCBpbnRpbWF0ZSBrbm93bGVkZ2Ugb2Ygb3VyIEFQSSwgbGlrZSBvdXIgYFN1YmplY3RgLCBtdXN0IGhhdmVcbiAgICAgICAgICAgIC8vIHNldCBpdC4gV2UncmUgZ29pbmcgdG8ganVzdCBjYWxsIGBfc3Vic2NyaWJlYCBkaXJlY3RseS5cbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZShzdWJzY3JpYmVyKVxuICAgICAgICAgIDogLy8gSW4gYWxsIG90aGVyIGNhc2VzLCB3ZSdyZSBsaWtlbHkgd3JhcHBpbmcgYSB1c2VyLXByb3ZpZGVkIGluaXRpYWxpemVyXG4gICAgICAgICAgICAvLyBmdW5jdGlvbiwgc28gd2UgbmVlZCB0byBjYXRjaCBlcnJvcnMgYW5kIGhhbmRsZSB0aGVtIGFwcHJvcHJpYXRlbHkuXG4gICAgICAgICAgICB0aGlzLl90cnlTdWJzY3JpYmUoc3Vic2NyaWJlcilcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF90cnlTdWJzY3JpYmUoc2luazogU3Vic2NyaWJlcjxUPik6IFRlYXJkb3duTG9naWMge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlKHNpbmspO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byByZXR1cm4gYW55dGhpbmcgaW4gdGhpcyBjYXNlLFxuICAgICAgLy8gYmVjYXVzZSBpdCdzIGp1c3QgZ29pbmcgdG8gdHJ5IHRvIGBhZGQoKWAgdG8gYSBzdWJzY3JpcHRpb25cbiAgICAgIC8vIGFib3ZlLlxuICAgICAgc2luay5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIGFzIGEgTk9OLUNBTkNFTExBQkxFIG1lYW5zIG9mIHN1YnNjcmliaW5nIHRvIGFuIG9ic2VydmFibGUsIGZvciB1c2Ugd2l0aFxuICAgKiBBUElzIHRoYXQgZXhwZWN0IHByb21pc2VzLCBsaWtlIGBhc3luYy9hd2FpdGAuIFlvdSBjYW5ub3QgdW5zdWJzY3JpYmUgZnJvbSB0aGlzLlxuICAgKlxuICAgKiAqKldBUk5JTkcqKjogT25seSB1c2UgdGhpcyB3aXRoIG9ic2VydmFibGVzIHlvdSAqa25vdyogd2lsbCBjb21wbGV0ZS4gSWYgdGhlIHNvdXJjZVxuICAgKiBvYnNlcnZhYmxlIGRvZXMgbm90IGNvbXBsZXRlLCB5b3Ugd2lsbCBlbmQgdXAgd2l0aCBhIHByb21pc2UgdGhhdCBpcyBodW5nIHVwLCBhbmRcbiAgICogcG90ZW50aWFsbHkgYWxsIG9mIHRoZSBzdGF0ZSBvZiBhbiBhc3luYyBmdW5jdGlvbiBoYW5naW5nIG91dCBpbiBtZW1vcnkuIFRvIGF2b2lkXG4gICAqIHRoaXMgc2l0dWF0aW9uLCBsb29rIGludG8gYWRkaW5nIHNvbWV0aGluZyBsaWtlIHtAbGluayB0aW1lb3V0fSwge0BsaW5rIHRha2V9LFxuICAgKiB7QGxpbmsgdGFrZVdoaWxlfSwgb3Ige0BsaW5rIHRha2VVbnRpbH0gYW1vbmdzdCBvdGhlcnMuXG4gICAqXG4gICAqICMjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSB9IGZyb20gJ3J4anMnO1xuICAgKlxuICAgKiBjb25zdCBzb3VyY2UkID0gaW50ZXJ2YWwoMTAwMCkucGlwZSh0YWtlKDQpKTtcbiAgICpcbiAgICogYXN5bmMgZnVuY3Rpb24gZ2V0VG90YWwoKSB7XG4gICAqICAgbGV0IHRvdGFsID0gMDtcbiAgICpcbiAgICogICBhd2FpdCBzb3VyY2UkLmZvckVhY2godmFsdWUgPT4ge1xuICAgKiAgICAgdG90YWwgKz0gdmFsdWU7XG4gICAqICAgICBjb25zb2xlLmxvZygnb2JzZXJ2YWJsZSAtPiAnICsgdmFsdWUpO1xuICAgKiAgIH0pO1xuICAgKlxuICAgKiAgIHJldHVybiB0b3RhbDtcbiAgICogfVxuICAgKlxuICAgKiBnZXRUb3RhbCgpLnRoZW4oXG4gICAqICAgdG90YWwgPT4gY29uc29sZS5sb2coJ1RvdGFsOiAnICsgdG90YWwpXG4gICAqICk7XG4gICAqXG4gICAqIC8vIEV4cGVjdGVkOlxuICAgKiAvLyAnb2JzZXJ2YWJsZSAtPiAwJ1xuICAgKiAvLyAnb2JzZXJ2YWJsZSAtPiAxJ1xuICAgKiAvLyAnb2JzZXJ2YWJsZSAtPiAyJ1xuICAgKiAvLyAnb2JzZXJ2YWJsZSAtPiAzJ1xuICAgKiAvLyAnVG90YWw6IDYnXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gbmV4dCBhIGhhbmRsZXIgZm9yIGVhY2ggdmFsdWUgZW1pdHRlZCBieSB0aGUgb2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB0aGF0IGVpdGhlciByZXNvbHZlcyBvbiBvYnNlcnZhYmxlIGNvbXBsZXRpb24gb3JcbiAgICogIHJlamVjdHMgd2l0aCB0aGUgaGFuZGxlZCBlcnJvclxuICAgKi9cbiAgZm9yRWFjaChuZXh0OiAodmFsdWU6IFQpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gbmV4dCBhIGhhbmRsZXIgZm9yIGVhY2ggdmFsdWUgZW1pdHRlZCBieSB0aGUgb2JzZXJ2YWJsZVxuICAgKiBAcGFyYW0gcHJvbWlzZUN0b3IgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB1c2VkIHRvIGluc3RhbnRpYXRlIHRoZSBQcm9taXNlXG4gICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgZWl0aGVyIHJlc29sdmVzIG9uIG9ic2VydmFibGUgY29tcGxldGlvbiBvclxuICAgKiAgcmVqZWN0cyB3aXRoIHRoZSBoYW5kbGVkIGVycm9yXG4gICAqIEBkZXByZWNhdGVkIFBhc3NpbmcgYSBQcm9taXNlIGNvbnN0cnVjdG9yIHdpbGwgbm8gbG9uZ2VyIGJlIGF2YWlsYWJsZVxuICAgKiBpbiB1cGNvbWluZyB2ZXJzaW9ucyBvZiBSeEpTLiBUaGlzIGlzIGJlY2F1c2UgaXQgYWRkcyB3ZWlnaHQgdG8gdGhlIGxpYnJhcnksIGZvciB2ZXJ5XG4gICAqIGxpdHRsZSBiZW5lZml0LiBJZiB5b3UgbmVlZCB0aGlzIGZ1bmN0aW9uYWxpdHksIGl0IGlzIHJlY29tbWVuZGVkIHRoYXQgeW91IGVpdGhlclxuICAgKiBwb2x5ZmlsbCBQcm9taXNlLCBvciB5b3UgY3JlYXRlIGFuIGFkYXB0ZXIgdG8gY29udmVydCB0aGUgcmV0dXJuZWQgbmF0aXZlIHByb21pc2VcbiAgICogdG8gd2hhdGV2ZXIgcHJvbWlzZSBpbXBsZW1lbnRhdGlvbiB5b3Ugd2FudGVkLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gICAqL1xuICBmb3JFYWNoKG5leHQ6ICh2YWx1ZTogVCkgPT4gdm9pZCwgcHJvbWlzZUN0b3I6IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIGZvckVhY2gobmV4dDogKHZhbHVlOiBUKSA9PiB2b2lkLCBwcm9taXNlQ3Rvcj86IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcblxuICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3I8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IG5ldyBTYWZlU3Vic2NyaWJlcjxUPih7XG4gICAgICAgIG5leHQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXh0KHZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgc3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgY29tcGxldGU6IHJlc29sdmUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH0pIGFzIFByb21pc2U8dm9pZD47XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55Pik6IFRlYXJkb3duTG9naWMge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZT8uc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIGludGVyb3AgcG9pbnQgZGVmaW5lZCBieSB0aGUgZXM3LW9ic2VydmFibGUgc3BlYyBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG4gICAqIEBtZXRob2QgU3ltYm9sLm9ic2VydmFibGVcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gdGhpcyBpbnN0YW5jZSBvZiB0aGUgb2JzZXJ2YWJsZVxuICAgKi9cbiAgW1N5bWJvbF9vYnNlcnZhYmxlXSgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuICBwaXBlKCk6IE9ic2VydmFibGU8VD47XG4gIHBpcGU8QT4ob3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+KTogT2JzZXJ2YWJsZTxBPjtcbiAgcGlwZTxBLCBCPihvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPik6IE9ic2VydmFibGU8Qj47XG4gIHBpcGU8QSwgQiwgQz4ob3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LCBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPik6IE9ic2VydmFibGU8Qz47XG4gIHBpcGU8QSwgQiwgQywgRD4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+XG4gICk6IE9ic2VydmFibGU8RD47XG4gIHBpcGU8QSwgQiwgQywgRCwgRT4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPlxuICApOiBPYnNlcnZhYmxlPEU+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEY+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+XG4gICk6IE9ic2VydmFibGU8Rj47XG4gIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRz4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPixcbiAgICBvcDY6IE9wZXJhdG9yRnVuY3Rpb248RSwgRj4sXG4gICAgb3A3OiBPcGVyYXRvckZ1bmN0aW9uPEYsIEc+XG4gICk6IE9ic2VydmFibGU8Rz47XG4gIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPixcbiAgICBvcDY6IE9wZXJhdG9yRnVuY3Rpb248RSwgRj4sXG4gICAgb3A3OiBPcGVyYXRvckZ1bmN0aW9uPEYsIEc+LFxuICAgIG9wODogT3BlcmF0b3JGdW5jdGlvbjxHLCBIPlxuICApOiBPYnNlcnZhYmxlPEg+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPixcbiAgICBvcDg6IE9wZXJhdG9yRnVuY3Rpb248RywgSD4sXG4gICAgb3A5OiBPcGVyYXRvckZ1bmN0aW9uPEgsIEk+XG4gICk6IE9ic2VydmFibGU8ST47XG4gIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgST4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPixcbiAgICBvcDY6IE9wZXJhdG9yRnVuY3Rpb248RSwgRj4sXG4gICAgb3A3OiBPcGVyYXRvckZ1bmN0aW9uPEYsIEc+LFxuICAgIG9wODogT3BlcmF0b3JGdW5jdGlvbjxHLCBIPixcbiAgICBvcDk6IE9wZXJhdG9yRnVuY3Rpb248SCwgST4sXG4gICAgLi4ub3BlcmF0aW9uczogT3BlcmF0b3JGdW5jdGlvbjxhbnksIGFueT5bXVxuICApOiBPYnNlcnZhYmxlPHVua25vd24+O1xuICAvKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHN0aXRjaCB0b2dldGhlciBmdW5jdGlvbmFsIG9wZXJhdG9ycyBpbnRvIGEgY2hhaW4uXG4gICAqIEBtZXRob2QgcGlwZVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSB0aGUgT2JzZXJ2YWJsZSByZXN1bHQgb2YgYWxsIG9mIHRoZSBvcGVyYXRvcnMgaGF2aW5nXG4gICAqIGJlZW4gY2FsbGVkIGluIHRoZSBvcmRlciB0aGV5IHdlcmUgcGFzc2VkIGluLlxuICAgKlxuICAgKiAjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IGludGVydmFsLCBmaWx0ZXIsIG1hcCwgc2NhbiB9IGZyb20gJ3J4anMnO1xuICAgKlxuICAgKiBpbnRlcnZhbCgxMDAwKVxuICAgKiAgIC5waXBlKFxuICAgKiAgICAgZmlsdGVyKHggPT4geCAlIDIgPT09IDApLFxuICAgKiAgICAgbWFwKHggPT4geCArIHgpLFxuICAgKiAgICAgc2NhbigoYWNjLCB4KSA9PiBhY2MgKyB4KVxuICAgKiAgIClcbiAgICogICAuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICAgKiBgYGBcbiAgICovXG4gIHBpcGUoLi4ub3BlcmF0aW9uczogT3BlcmF0b3JGdW5jdGlvbjxhbnksIGFueT5bXSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHBpcGVGcm9tQXJyYXkob3BlcmF0aW9ucykodGhpcyk7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbiAgLyoqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2UgKi9cbiAgdG9Qcm9taXNlKCk6IFByb21pc2U8VCB8IHVuZGVmaW5lZD47XG4gIC8qKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHtAbGluayBmaXJzdFZhbHVlRnJvbX0gYW5kIHtAbGluayBsYXN0VmFsdWVGcm9tfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy90by1wcm9taXNlICovXG4gIHRvUHJvbWlzZShQcm9taXNlQ3RvcjogdHlwZW9mIFByb21pc2UpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+O1xuICAvKiogQGRlcHJlY2F0ZWQgUmVwbGFjZWQgd2l0aCB7QGxpbmsgZmlyc3RWYWx1ZUZyb219IGFuZCB7QGxpbmsgbGFzdFZhbHVlRnJvbX0uIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvdG8tcHJvbWlzZSAqL1xuICB0b1Byb21pc2UoUHJvbWlzZUN0b3I6IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+O1xuICAvKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gdGhpcyBPYnNlcnZhYmxlIGFuZCBnZXQgYSBQcm9taXNlIHJlc29sdmluZyBvblxuICAgKiBgY29tcGxldGVgIHdpdGggdGhlIGxhc3QgZW1pc3Npb24gKGlmIGFueSkuXG4gICAqXG4gICAqICoqV0FSTklORyoqOiBPbmx5IHVzZSB0aGlzIHdpdGggb2JzZXJ2YWJsZXMgeW91ICprbm93KiB3aWxsIGNvbXBsZXRlLiBJZiB0aGUgc291cmNlXG4gICAqIG9ic2VydmFibGUgZG9lcyBub3QgY29tcGxldGUsIHlvdSB3aWxsIGVuZCB1cCB3aXRoIGEgcHJvbWlzZSB0aGF0IGlzIGh1bmcgdXAsIGFuZFxuICAgKiBwb3RlbnRpYWxseSBhbGwgb2YgdGhlIHN0YXRlIG9mIGFuIGFzeW5jIGZ1bmN0aW9uIGhhbmdpbmcgb3V0IGluIG1lbW9yeS4gVG8gYXZvaWRcbiAgICogdGhpcyBzaXR1YXRpb24sIGxvb2sgaW50byBhZGRpbmcgc29tZXRoaW5nIGxpa2Uge0BsaW5rIHRpbWVvdXR9LCB7QGxpbmsgdGFrZX0sXG4gICAqIHtAbGluayB0YWtlV2hpbGV9LCBvciB7QGxpbmsgdGFrZVVudGlsfSBhbW9uZ3N0IG90aGVycy5cbiAgICpcbiAgICogQG1ldGhvZCB0b1Byb21pc2VcbiAgICogQHBhcmFtIFtwcm9taXNlQ3Rvcl0gYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB1c2VkIHRvIGluc3RhbnRpYXRlXG4gICAqIHRoZSBQcm9taXNlXG4gICAqIEByZXR1cm4gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbGFzdCB2YWx1ZSBlbWl0LCBvclxuICAgKiByZWplY3RzIG9uIGFuIGVycm9yLiBJZiB0aGVyZSB3ZXJlIG5vIGVtaXNzaW9ucywgUHJvbWlzZVxuICAgKiByZXNvbHZlcyB3aXRoIHVuZGVmaW5lZC5cbiAgICogQGRlcHJlY2F0ZWQgUmVwbGFjZWQgd2l0aCB7QGxpbmsgZmlyc3RWYWx1ZUZyb219IGFuZCB7QGxpbmsgbGFzdFZhbHVlRnJvbX0uIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvdG8tcHJvbWlzZVxuICAgKi9cbiAgdG9Qcm9taXNlKHByb21pc2VDdG9yPzogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSk6IFByb21pc2U8VCB8IHVuZGVmaW5lZD4ge1xuICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuXG4gICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgdmFsdWU6IFQgfCB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnN1YnNjcmliZShcbiAgICAgICAgKHg6IFQpID0+ICh2YWx1ZSA9IHgpLFxuICAgICAgICAoZXJyOiBhbnkpID0+IHJlamVjdChlcnIpLFxuICAgICAgICAoKSA9PiByZXNvbHZlKHZhbHVlKVxuICAgICAgKTtcbiAgICB9KSBhcyBQcm9taXNlPFQgfCB1bmRlZmluZWQ+O1xuICB9XG59XG5cbi8qKlxuICogRGVjaWRlcyBiZXR3ZWVuIGEgcGFzc2VkIHByb21pc2UgY29uc3RydWN0b3IgZnJvbSBjb25zdW1pbmcgY29kZSxcbiAqIEEgZGVmYXVsdCBjb25maWd1cmVkIHByb21pc2UgY29uc3RydWN0b3IsIGFuZCB0aGUgbmF0aXZlIHByb21pc2VcbiAqIGNvbnN0cnVjdG9yIGFuZCByZXR1cm5zIGl0LiBJZiBub3RoaW5nIGNhbiBiZSBmb3VuZCwgaXQgd2lsbCB0aHJvd1xuICogYW4gZXJyb3IuXG4gKiBAcGFyYW0gcHJvbWlzZUN0b3IgVGhlIG9wdGlvbmFsIHByb21pc2UgY29uc3RydWN0b3IgdG8gcGFzc2VkIGJ5IGNvbnN1bWluZyBjb2RlXG4gKi9cbmZ1bmN0aW9uIGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yOiBQcm9taXNlQ29uc3RydWN0b3JMaWtlIHwgdW5kZWZpbmVkKSB7XG4gIHJldHVybiBwcm9taXNlQ3RvciA/PyBjb25maWcuUHJvbWlzZSA/PyBQcm9taXNlO1xufVxuXG5mdW5jdGlvbiBpc09ic2VydmVyPFQ+KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBPYnNlcnZlcjxUPiB7XG4gIHJldHVybiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLm5leHQpICYmIGlzRnVuY3Rpb24odmFsdWUuZXJyb3IpICYmIGlzRnVuY3Rpb24odmFsdWUuY29tcGxldGUpO1xufVxuXG5mdW5jdGlvbiBpc1N1YnNjcmliZXI8VD4odmFsdWU6IGFueSk6IHZhbHVlIGlzIFN1YnNjcmliZXI8VD4ge1xuICByZXR1cm4gKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaWJlcikgfHwgKGlzT2JzZXJ2ZXIodmFsdWUpICYmIGlzU3Vic2NyaXB0aW9uKHZhbHVlKSk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG4vKipcbiAqIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhbiBPYnNlcnZhYmxlIHdpdGggYSBsaWZ0IGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzTGlmdChzb3VyY2U6IGFueSk6IHNvdXJjZSBpcyB7IGxpZnQ6IEluc3RhbmNlVHlwZTx0eXBlb2YgT2JzZXJ2YWJsZT5bJ2xpZnQnXSB9IHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oc291cmNlPy5saWZ0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGBPcGVyYXRvckZ1bmN0aW9uYC4gVXNlZCB0byBkZWZpbmUgb3BlcmF0b3JzIHRocm91Z2hvdXQgdGhlIGxpYnJhcnkgaW4gYSBjb25jaXNlIHdheS5cbiAqIEBwYXJhbSBpbml0IFRoZSBsb2dpYyB0byBjb25uZWN0IHRoZSBsaWZ0ZWRTb3VyY2UgdG8gdGhlIHN1YnNjcmliZXIgYXQgdGhlIG1vbWVudCBvZiBzdWJzY3JpcHRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcGVyYXRlPFQsIFI+KFxuICBpbml0OiAobGlmdGVkU291cmNlOiBPYnNlcnZhYmxlPFQ+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFI+KSA9PiAoKCkgPT4gdm9pZCkgfCB2b2lkXG4pOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+IHtcbiAgcmV0dXJuIChzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IHtcbiAgICBpZiAoaGFzTGlmdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLmxpZnQoZnVuY3Rpb24gKHRoaXM6IFN1YnNjcmliZXI8Uj4sIGxpZnRlZFNvdXJjZTogT2JzZXJ2YWJsZTxUPikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBpbml0KGxpZnRlZFNvdXJjZSwgdGhpcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VuYWJsZSB0byBsaWZ0IHVua25vd24gT2JzZXJ2YWJsZSB0eXBlJyk7XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYW4gYE9wZXJhdG9yU3Vic2NyaWJlcmAuXG4gKiBAcGFyYW0gZGVzdGluYXRpb24gVGhlIGRvd25zdHJlYW0gc3Vic2NyaWJlci5cbiAqIEBwYXJhbSBvbk5leHQgSGFuZGxlcyBuZXh0IHZhbHVlcywgb25seSBjYWxsZWQgaWYgdGhpcyBzdWJzY3JpYmVyIGlzIG5vdCBzdG9wcGVkIG9yIGNsb3NlZC4gQW55XG4gKiBlcnJvciB0aGF0IG9jY3VycyBpbiB0aGlzIGZ1bmN0aW9uIGlzIGNhdWdodCBhbmQgc2VudCB0byB0aGUgYGVycm9yYCBtZXRob2Qgb2YgdGhpcyBzdWJzY3JpYmVyLlxuICogQHBhcmFtIG9uRXJyb3IgSGFuZGxlcyBlcnJvcnMgZnJvbSB0aGUgc3Vic2NyaXB0aW9uLCBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgaW4gdGhpcyBoYW5kbGVyIGFyZSBjYXVnaHRcbiAqIGFuZCBzZW5kIHRvIHRoZSBgZGVzdGluYXRpb25gIGVycm9yIGhhbmRsZXIuXG4gKiBAcGFyYW0gb25Db21wbGV0ZSBIYW5kbGVzIGNvbXBsZXRpb24gbm90aWZpY2F0aW9uIGZyb20gdGhlIHN1YnNjcmlwdGlvbi4gQW55IGVycm9ycyB0aGF0IG9jY3VyIGluXG4gKiB0aGlzIGhhbmRsZXIgYXJlIHNlbnQgdG8gdGhlIGBkZXN0aW5hdGlvbmAgZXJyb3IgaGFuZGxlci5cbiAqIEBwYXJhbSBvbkZpbmFsaXplIEFkZGl0aW9uYWwgdGVhcmRvd24gbG9naWMgaGVyZS4gVGhpcyB3aWxsIG9ubHkgYmUgY2FsbGVkIG9uIHRlYXJkb3duIGlmIHRoZVxuICogc3Vic2NyaWJlciBpdHNlbGYgaXMgbm90IGFscmVhZHkgY2xvc2VkLiBUaGlzIGlzIGNhbGxlZCBhZnRlciBhbGwgb3RoZXIgdGVhcmRvd24gbG9naWMgaXMgZXhlY3V0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXI8VD4oXG4gIGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPGFueT4sXG4gIG9uTmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCxcbiAgb25Db21wbGV0ZT86ICgpID0+IHZvaWQsXG4gIG9uRXJyb3I/OiAoZXJyOiBhbnkpID0+IHZvaWQsXG4gIG9uRmluYWxpemU/OiAoKSA9PiB2b2lkXG4pOiBTdWJzY3JpYmVyPFQ+IHtcbiAgcmV0dXJuIG5ldyBPcGVyYXRvclN1YnNjcmliZXIoZGVzdGluYXRpb24sIG9uTmV4dCwgb25Db21wbGV0ZSwgb25FcnJvciwgb25GaW5hbGl6ZSk7XG59XG5cbi8qKlxuICogQSBnZW5lcmljIGhlbHBlciBmb3IgYWxsb3dpbmcgb3BlcmF0b3JzIHRvIGJlIGNyZWF0ZWQgd2l0aCBhIFN1YnNjcmliZXIgYW5kXG4gKiB1c2UgY2xvc3VyZXMgdG8gY2FwdHVyZSBuZWNlc3Nhcnkgc3RhdGUgZnJvbSB0aGUgb3BlcmF0b3IgZnVuY3Rpb24gaXRzZWxmLlxuICovXG5leHBvcnQgY2xhc3MgT3BlcmF0b3JTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGFuIGBPcGVyYXRvclN1YnNjcmliZXJgLlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb24gVGhlIGRvd25zdHJlYW0gc3Vic2NyaWJlci5cbiAgICogQHBhcmFtIG9uTmV4dCBIYW5kbGVzIG5leHQgdmFsdWVzLCBvbmx5IGNhbGxlZCBpZiB0aGlzIHN1YnNjcmliZXIgaXMgbm90IHN0b3BwZWQgb3IgY2xvc2VkLiBBbnlcbiAgICogZXJyb3IgdGhhdCBvY2N1cnMgaW4gdGhpcyBmdW5jdGlvbiBpcyBjYXVnaHQgYW5kIHNlbnQgdG8gdGhlIGBlcnJvcmAgbWV0aG9kIG9mIHRoaXMgc3Vic2NyaWJlci5cbiAgICogQHBhcmFtIG9uRXJyb3IgSGFuZGxlcyBlcnJvcnMgZnJvbSB0aGUgc3Vic2NyaXB0aW9uLCBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgaW4gdGhpcyBoYW5kbGVyIGFyZSBjYXVnaHRcbiAgICogYW5kIHNlbmQgdG8gdGhlIGBkZXN0aW5hdGlvbmAgZXJyb3IgaGFuZGxlci5cbiAgICogQHBhcmFtIG9uQ29tcGxldGUgSGFuZGxlcyBjb21wbGV0aW9uIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBzdWJzY3JpcHRpb24uIEFueSBlcnJvcnMgdGhhdCBvY2N1ciBpblxuICAgKiB0aGlzIGhhbmRsZXIgYXJlIHNlbnQgdG8gdGhlIGBkZXN0aW5hdGlvbmAgZXJyb3IgaGFuZGxlci5cbiAgICogQHBhcmFtIG9uRmluYWxpemUgQWRkaXRpb25hbCBmaW5hbGl6YXRpb24gbG9naWMgaGVyZS4gVGhpcyB3aWxsIG9ubHkgYmUgY2FsbGVkIG9uIGZpbmFsaXphdGlvbiBpZiB0aGVcbiAgICogc3Vic2NyaWJlciBpdHNlbGYgaXMgbm90IGFscmVhZHkgY2xvc2VkLiBUaGlzIGlzIGNhbGxlZCBhZnRlciBhbGwgb3RoZXIgZmluYWxpemF0aW9uIGxvZ2ljIGlzIGV4ZWN1dGVkLlxuICAgKiBAcGFyYW0gc2hvdWxkVW5zdWJzY3JpYmUgQW4gb3B0aW9uYWwgY2hlY2sgdG8gc2VlIGlmIGFuIHVuc3Vic2NyaWJlIGNhbGwgc2hvdWxkIHRydWx5IHVuc3Vic2NyaWJlLlxuICAgKiBOT1RFOiBUaGlzIGN1cnJlbnRseSAqKk9OTFkqKiBleGlzdHMgdG8gc3VwcG9ydCB0aGUgc3RyYW5nZSBiZWhhdmlvciBvZiB7QGxpbmsgZ3JvdXBCeX0sIHdoZXJlIHVuc3Vic2NyaXB0aW9uXG4gICAqIHRvIHRoZSByZXN1bHRpbmcgb2JzZXJ2YWJsZSBkb2VzIG5vdCBhY3R1YWxseSBkaXNjb25uZWN0IGZyb20gdGhlIHNvdXJjZSBpZiB0aGVyZSBhcmUgYWN0aXZlIHN1YnNjcmlwdGlvbnNcbiAgICogdG8gYW55IGdyb3VwZWQgb2JzZXJ2YWJsZS4gKERPIE5PVCBFWFBPU0UgT1IgVVNFIEVYVEVSTkFMTFkhISEpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxhbnk+LFxuICAgIG9uTmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCxcbiAgICBvbkNvbXBsZXRlPzogKCkgPT4gdm9pZCxcbiAgICBvbkVycm9yPzogKGVycjogYW55KSA9PiB2b2lkLFxuICAgIHByaXZhdGUgb25GaW5hbGl6ZT86ICgpID0+IHZvaWQsXG4gICAgcHJpdmF0ZSBzaG91bGRVbnN1YnNjcmliZT86ICgpID0+IGJvb2xlYW5cbiAgKSB7XG4gICAgLy8gSXQncyBpbXBvcnRhbnQgLSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyAtIHRoYXQgYWxsIG9mIHRoaXMgY2xhc3Mnc1xuICAgIC8vIG1lbWJlcnMgYXJlIGluaXRpYWxpemVkIGFuZCB0aGF0IHRoZXkgYXJlIGFsd2F5cyBpbml0aWFsaXplZCBpbiB0aGUgc2FtZVxuICAgIC8vIG9yZGVyLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgYWxsIE9wZXJhdG9yU3Vic2NyaWJlciBpbnN0YW5jZXMgaGF2ZSB0aGVcbiAgICAvLyBzYW1lIGhpZGRlbiBjbGFzcyBpbiBWOC4gVGhpcywgaW4gdHVybiwgd2lsbCBoZWxwIGtlZXAgdGhlIG51bWJlciBvZlxuICAgIC8vIGhpZGRlbiBjbGFzc2VzIGludm9sdmVkIGluIHByb3BlcnR5IGFjY2Vzc2VzIHdpdGhpbiB0aGUgYmFzZSBjbGFzcyBhc1xuICAgIC8vIGxvdyBhcyBwb3NzaWJsZS4gSWYgdGhlIG51bWJlciBvZiBoaWRkZW4gY2xhc3NlcyBpbnZvbHZlZCBleGNlZWRzIGZvdXIsXG4gICAgLy8gdGhlIHByb3BlcnR5IGFjY2Vzc2VzIHdpbGwgYmVjb21lIG1lZ2Ftb3JwaGljIGFuZCBwZXJmb3JtYW5jZSBwZW5hbHRpZXNcbiAgICAvLyB3aWxsIGJlIGluY3VycmVkIC0gaS5lLiBpbmxpbmUgY2FjaGVzIHdvbid0IGJlIHVzZWQuXG4gICAgLy9cbiAgICAvLyBUaGUgcmVhc29ucyBmb3IgZW5zdXJpbmcgYWxsIGluc3RhbmNlcyBoYXZlIHRoZSBzYW1lIGhpZGRlbiBjbGFzcyBhcmVcbiAgICAvLyBmdXJ0aGVyIGRpc2N1c3NlZCBpbiB0aGlzIGJsb2cgcG9zdCBmcm9tIEJlbmVkaWt0IE1ldXJlcjpcbiAgICAvLyBodHRwczovL2JlbmVkaWt0bWV1cmVyLmRlLzIwMTgvMDMvMjMvaW1wYWN0LW9mLXBvbHltb3JwaGlzbS1vbi1jb21wb25lbnQtYmFzZWQtZnJhbWV3b3Jrcy1saWtlLXJlYWN0L1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLl9uZXh0ID0gb25OZXh0XG4gICAgICA/IGZ1bmN0aW9uICh0aGlzOiBPcGVyYXRvclN1YnNjcmliZXI8VD4sIHZhbHVlOiBUKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9uTmV4dCh2YWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgOiBzdXBlci5fbmV4dDtcbiAgICB0aGlzLl9lcnJvciA9IG9uRXJyb3JcbiAgICAgID8gZnVuY3Rpb24gKHRoaXM6IE9wZXJhdG9yU3Vic2NyaWJlcjxUPiwgZXJyOiBhbnkpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb25FcnJvcihlcnIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gU2VuZCBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgZG93biBzdHJlYW0uXG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgZmluYWxpemF0aW9uLlxuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgOiBzdXBlci5fZXJyb3I7XG4gICAgdGhpcy5fY29tcGxldGUgPSBvbkNvbXBsZXRlXG4gICAgICA/IGZ1bmN0aW9uICh0aGlzOiBPcGVyYXRvclN1YnNjcmliZXI8VD4pIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gU2VuZCBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgZG93biBzdHJlYW0uXG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgZmluYWxpemF0aW9uLlxuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgOiBzdXBlci5fY29tcGxldGU7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMuc2hvdWxkVW5zdWJzY3JpYmUgfHwgdGhpcy5zaG91bGRVbnN1YnNjcmliZSgpKSB7XG4gICAgICBjb25zdCB7IGNsb3NlZCB9ID0gdGhpcztcbiAgICAgIHN1cGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAvLyBFeGVjdXRlIGFkZGl0aW9uYWwgdGVhcmRvd24gaWYgd2UgaGF2ZSBhbnkgYW5kIHdlIGRpZG4ndCBhbHJlYWR5IGRvIHNvLlxuICAgICAgIWNsb3NlZCAmJiB0aGlzLm9uRmluYWxpemU/LigpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUVycm9yQ2xhc3MgfSBmcm9tICcuL2NyZWF0ZUVycm9yQ2xhc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RVbnN1YnNjcmliZWRFcnJvckN0b3Ige1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLiBEbyBub3QgY29uc3RydWN0IGVycm9yIGluc3RhbmNlcy5cbiAgICogQ2Fubm90IGJlIHRhZ2dlZCBhcyBpbnRlcm5hbDogaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlWC9yeGpzL2lzc3Vlcy82MjY5XG4gICAqL1xuICBuZXcgKCk6IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yO1xufVxuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIGFuIGFjdGlvbiBpcyBpbnZhbGlkIGJlY2F1c2UgdGhlIG9iamVjdCBoYXMgYmVlblxuICogdW5zdWJzY3JpYmVkLlxuICpcbiAqIEBzZWUge0BsaW5rIFN1YmplY3R9XG4gKiBAc2VlIHtAbGluayBCZWhhdmlvclN1YmplY3R9XG4gKlxuICogQGNsYXNzIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBPYmplY3RVbnN1YnNjcmliZWRFcnJvcjogT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JDdG9yID0gY3JlYXRlRXJyb3JDbGFzcyhcbiAgKF9zdXBlcikgPT5cbiAgICBmdW5jdGlvbiBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGwodGhpczogYW55KSB7XG4gICAgICBfc3VwZXIodGhpcyk7XG4gICAgICB0aGlzLm5hbWUgPSAnT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuICAgICAgdGhpcy5tZXNzYWdlID0gJ29iamVjdCB1bnN1YnNjcmliZWQnO1xuICAgIH1cbik7XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3IgfSBmcm9tICcuL09wZXJhdG9yJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIEVNUFRZX1NVQlNDUklQVElPTiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IE9ic2VydmVyLCBTdWJzY3JpcHRpb25MaWtlLCBUZWFyZG93bkxvZ2ljIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBPYmplY3RVbnN1YnNjcmliZWRFcnJvciB9IGZyb20gJy4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuL3V0aWwvYXJyUmVtb3ZlJztcbmltcG9ydCB7IGVycm9yQ29udGV4dCB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xuXG4vKipcbiAqIEEgU3ViamVjdCBpcyBhIHNwZWNpYWwgdHlwZSBvZiBPYnNlcnZhYmxlIHRoYXQgYWxsb3dzIHZhbHVlcyB0byBiZVxuICogbXVsdGljYXN0ZWQgdG8gbWFueSBPYnNlcnZlcnMuIFN1YmplY3RzIGFyZSBsaWtlIEV2ZW50RW1pdHRlcnMuXG4gKlxuICogRXZlcnkgU3ViamVjdCBpcyBhbiBPYnNlcnZhYmxlIGFuZCBhbiBPYnNlcnZlci4gWW91IGNhbiBzdWJzY3JpYmUgdG8gYVxuICogU3ViamVjdCwgYW5kIHlvdSBjYW4gY2FsbCBuZXh0IHRvIGZlZWQgdmFsdWVzIGFzIHdlbGwgYXMgZXJyb3IgYW5kIGNvbXBsZXRlLlxuICovXG5leHBvcnQgY2xhc3MgU3ViamVjdDxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4gaW1wbGVtZW50cyBTdWJzY3JpcHRpb25MaWtlIHtcbiAgY2xvc2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjdXJyZW50T2JzZXJ2ZXJzOiBPYnNlcnZlcjxUPltdIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBvYnNlcnZlcnM6IE9ic2VydmVyPFQ+W10gPSBbXTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBpc1N0b3BwZWQgPSBmYWxzZTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBoYXNFcnJvciA9IGZhbHNlO1xuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIHRocm93bkVycm9yOiBhbnkgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgXCJzdWJqZWN0XCIgYnkgYmFzaWNhbGx5IGdsdWluZyBhbiBvYnNlcnZlciB0byBhbiBvYnNlcnZhYmxlLlxuICAgKlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKiBAZGVwcmVjYXRlZCBSZWNvbW1lbmRlZCB5b3UgZG8gbm90IHVzZS4gV2lsbCBiZSByZW1vdmVkIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS4gUGxhbnMgZm9yIHJlcGxhY2VtZW50IHN0aWxsIHVuZGVyIGRpc2N1c3Npb24uXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlOiAoLi4uYXJnczogYW55W10pID0+IGFueSA9IDxUPihkZXN0aW5hdGlvbjogT2JzZXJ2ZXI8VD4sIHNvdXJjZTogT2JzZXJ2YWJsZTxUPik6IEFub255bW91c1N1YmplY3Q8VD4gPT4ge1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzU3ViamVjdDxUPihkZXN0aW5hdGlvbiwgc291cmNlKTtcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBOT1RFOiBUaGlzIG11c3QgYmUgaGVyZSB0byBvYnNjdXJlIE9ic2VydmFibGUncyBjb25zdHJ1Y3Rvci5cbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBsaWZ0PFI+KG9wZXJhdG9yOiBPcGVyYXRvcjxULCBSPik6IE9ic2VydmFibGU8Uj4ge1xuICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgQW5vbnltb3VzU3ViamVjdCh0aGlzLCB0aGlzKTtcbiAgICBzdWJqZWN0Lm9wZXJhdG9yID0gb3BlcmF0b3IgYXMgYW55O1xuICAgIHJldHVybiBzdWJqZWN0IGFzIGFueTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF90aHJvd0lmQ2xvc2VkKCkge1xuICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgdGhyb3cgbmV3IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCh2YWx1ZTogVCkge1xuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50T2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gQXJyYXkuZnJvbSh0aGlzLm9ic2VydmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiB0aGlzLmN1cnJlbnRPYnNlcnZlcnMpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZXJyb3IoZXJyOiBhbnkpIHtcbiAgICBlcnJvckNvbnRleHQoKCkgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRocm93bkVycm9yID0gZXJyO1xuICAgICAgICBjb25zdCB7IG9ic2VydmVycyB9ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKG9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgICBvYnNlcnZlcnMuc2hpZnQoKSEuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgZXJyb3JDb250ZXh0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCB7IG9ic2VydmVycyB9ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKG9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgICBvYnNlcnZlcnMuc2hpZnQoKSEuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5pc1N0b3BwZWQgPSB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsITtcbiAgfVxuXG4gIGdldCBvYnNlcnZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnM/Lmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfdHJ5U3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgcmV0dXJuIHN1cGVyLl90cnlTdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBTdWJzY3JpcHRpb24ge1xuICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICB0aGlzLl9jaGVja0ZpbmFsaXplZFN0YXR1c2VzKHN1YnNjcmliZXIpO1xuICAgIHJldHVybiB0aGlzLl9pbm5lclN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9pbm5lclN1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pIHtcbiAgICBjb25zdCB7IGhhc0Vycm9yLCBpc1N0b3BwZWQsIG9ic2VydmVycyB9ID0gdGhpcztcbiAgICBpZiAoaGFzRXJyb3IgfHwgaXNTdG9wcGVkKSB7XG4gICAgICByZXR1cm4gRU1QVFlfU1VCU0NSSVBUSU9OO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgIG9ic2VydmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICBhcnJSZW1vdmUob2JzZXJ2ZXJzLCBzdWJzY3JpYmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9jaGVja0ZpbmFsaXplZFN0YXR1c2VzKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55Pikge1xuICAgIGNvbnN0IHsgaGFzRXJyb3IsIHRocm93bkVycm9yLCBpc1N0b3BwZWQgfSA9IHRoaXM7XG4gICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICBzdWJzY3JpYmVyLmVycm9yKHRocm93bkVycm9yKTtcbiAgICB9IGVsc2UgaWYgKGlzU3RvcHBlZCkge1xuICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE9ic2VydmFibGUgd2l0aCB0aGlzIFN1YmplY3QgYXMgdGhlIHNvdXJjZS4gWW91IGNhbiBkbyB0aGlzXG4gICAqIHRvIGNyZWF0ZSBjdXN0b20gT2JzZXJ2ZXItc2lkZSBsb2dpYyBvZiB0aGUgU3ViamVjdCBhbmQgY29uY2VhbCBpdCBmcm9tXG4gICAqIGNvZGUgdGhhdCB1c2VzIHRoZSBPYnNlcnZhYmxlLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBPYnNlcnZhYmxlIHRoYXQgdGhlIFN1YmplY3QgY2FzdHMgdG9cbiAgICovXG4gIGFzT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlOiBhbnkgPSBuZXcgT2JzZXJ2YWJsZTxUPigpO1xuICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBBbm9ueW1vdXNTdWJqZWN0PFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNTdWJqZWN0PFQ+IGV4dGVuZHMgU3ViamVjdDxUPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgICBwdWJsaWMgZGVzdGluYXRpb24/OiBPYnNlcnZlcjxUPixcbiAgICBzb3VyY2U/OiBPYnNlcnZhYmxlPFQ+XG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIH1cblxuICBuZXh0KHZhbHVlOiBUKSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbj8ubmV4dD8uKHZhbHVlKTtcbiAgfVxuXG4gIGVycm9yKGVycjogYW55KSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbj8uZXJyb3I/LihlcnIpO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbj8uY29tcGxldGU/LigpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2U/LnN1YnNjcmliZShzdWJzY3JpYmVyKSA/PyBFTVBUWV9TVUJTQ1JJUFRJT047XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAnLi9TdWJqZWN0JztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuXG4vKipcbiAqIEEgdmFyaWFudCBvZiBTdWJqZWN0IHRoYXQgcmVxdWlyZXMgYW4gaW5pdGlhbCB2YWx1ZSBhbmQgZW1pdHMgaXRzIGN1cnJlbnRcbiAqIHZhbHVlIHdoZW5ldmVyIGl0IGlzIHN1YnNjcmliZWQgdG8uXG4gKlxuICogQGNsYXNzIEJlaGF2aW9yU3ViamVjdDxUPlxuICovXG5leHBvcnQgY2xhc3MgQmVoYXZpb3JTdWJqZWN0PFQ+IGV4dGVuZHMgU3ViamVjdDxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZhbHVlOiBUKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBzdXBlci5fc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICFzdWJzY3JpcHRpb24uY2xvc2VkICYmIHN1YnNjcmliZXIubmV4dCh0aGlzLl92YWx1ZSk7XG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldFZhbHVlKCk6IFQge1xuICAgIGNvbnN0IHsgaGFzRXJyb3IsIHRocm93bkVycm9yLCBfdmFsdWUgfSA9IHRoaXM7XG4gICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICB0aHJvdyB0aHJvd25FcnJvcjtcbiAgICB9XG4gICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgIHJldHVybiBfdmFsdWU7XG4gIH1cblxuICBuZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgc3VwZXIubmV4dCgodGhpcy5fdmFsdWUgPSB2YWx1ZSkpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgVGltZXN0YW1wUHJvdmlkZXIgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBEYXRlVGltZXN0YW1wUHJvdmlkZXIgZXh0ZW5kcyBUaW1lc3RhbXBQcm92aWRlciB7XG4gIGRlbGVnYXRlOiBUaW1lc3RhbXBQcm92aWRlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IGRhdGVUaW1lc3RhbXBQcm92aWRlcjogRGF0ZVRpbWVzdGFtcFByb3ZpZGVyID0ge1xuICBub3coKSB7XG4gICAgLy8gVXNlIHRoZSB2YXJpYWJsZSByYXRoZXIgdGhhbiBgdGhpc2Agc28gdGhhdCB0aGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZFxuICAgIC8vIHdpdGhvdXQgYmVpbmcgYm91bmQgdG8gdGhlIHByb3ZpZGVyLlxuICAgIHJldHVybiAoZGF0ZVRpbWVzdGFtcFByb3ZpZGVyLmRlbGVnYXRlIHx8IERhdGUpLm5vdygpO1xuICB9LFxuICBkZWxlZ2F0ZTogdW5kZWZpbmVkLFxufTtcbiIsICJpbXBvcnQgeyBTY2hlZHVsZXIgfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFNjaGVkdWxlckFjdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBBIHVuaXQgb2Ygd29yayB0byBiZSBleGVjdXRlZCBpbiBhIGBzY2hlZHVsZXJgLiBBbiBhY3Rpb24gaXMgdHlwaWNhbGx5XG4gKiBjcmVhdGVkIGZyb20gd2l0aGluIGEge0BsaW5rIFNjaGVkdWxlckxpa2V9IGFuZCBhbiBSeEpTIHVzZXIgZG9lcyBub3QgbmVlZCB0byBjb25jZXJuXG4gKiB0aGVtc2VsdmVzIGFib3V0IGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgYW4gQWN0aW9uLlxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBBY3Rpb248VD4gZXh0ZW5kcyBTdWJzY3JpcHRpb24ge1xuICogICBuZXcgKHNjaGVkdWxlcjogU2NoZWR1bGVyLCB3b3JrOiAoc3RhdGU/OiBUKSA9PiB2b2lkKTtcbiAqICAgc2NoZWR1bGUoc3RhdGU/OiBULCBkZWxheTogbnVtYmVyID0gMCk6IFN1YnNjcmlwdGlvbjtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBjbGFzcyBBY3Rpb248VD5cbiAqL1xuZXhwb3J0IGNsYXNzIEFjdGlvbjxUPiBleHRlbmRzIFN1YnNjcmlwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHNjaGVkdWxlcjogU2NoZWR1bGVyLCB3b3JrOiAodGhpczogU2NoZWR1bGVyQWN0aW9uPFQ+LCBzdGF0ZT86IFQpID0+IHZvaWQpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIC8qKlxuICAgKiBTY2hlZHVsZXMgdGhpcyBhY3Rpb24gb24gaXRzIHBhcmVudCB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gZm9yIGV4ZWN1dGlvbi4gTWF5IGJlIHBhc3NlZFxuICAgKiBzb21lIGNvbnRleHQgb2JqZWN0LCBgc3RhdGVgLiBNYXkgaGFwcGVuIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZSxcbiAgICogYWNjb3JkaW5nIHRvIHRoZSBgZGVsYXlgIHBhcmFtZXRlciwgaWYgc3BlY2lmaWVkLlxuICAgKiBAcGFyYW0ge1R9IFtzdGF0ZV0gU29tZSBjb250ZXh0dWFsIGRhdGEgdGhhdCB0aGUgYHdvcmtgIGZ1bmN0aW9uIHVzZXMgd2hlblxuICAgKiBjYWxsZWQgYnkgdGhlIFNjaGVkdWxlci5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheV0gVGltZSB0byB3YWl0IGJlZm9yZSBleGVjdXRpbmcgdGhlIHdvcmssIHdoZXJlIHRoZVxuICAgKiB0aW1lIHVuaXQgaXMgaW1wbGljaXQgYW5kIGRlZmluZWQgYnkgdGhlIFNjaGVkdWxlci5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHB1YmxpYyBzY2hlZHVsZShzdGF0ZT86IFQsIGRlbGF5OiBudW1iZXIgPSAwKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgVGltZXJIYW5kbGUgfSBmcm9tICcuL3RpbWVySGFuZGxlJztcbnR5cGUgU2V0SW50ZXJ2YWxGdW5jdGlvbiA9IChoYW5kbGVyOiAoKSA9PiB2b2lkLCB0aW1lb3V0PzogbnVtYmVyLCAuLi5hcmdzOiBhbnlbXSkgPT4gVGltZXJIYW5kbGU7XG50eXBlIENsZWFySW50ZXJ2YWxGdW5jdGlvbiA9IChoYW5kbGU6IFRpbWVySGFuZGxlKSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgSW50ZXJ2YWxQcm92aWRlciB7XG4gIHNldEludGVydmFsOiBTZXRJbnRlcnZhbEZ1bmN0aW9uO1xuICBjbGVhckludGVydmFsOiBDbGVhckludGVydmFsRnVuY3Rpb247XG4gIGRlbGVnYXRlOlxuICAgIHwge1xuICAgICAgICBzZXRJbnRlcnZhbDogU2V0SW50ZXJ2YWxGdW5jdGlvbjtcbiAgICAgICAgY2xlYXJJbnRlcnZhbDogQ2xlYXJJbnRlcnZhbEZ1bmN0aW9uO1xuICAgICAgfVxuICAgIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgaW50ZXJ2YWxQcm92aWRlcjogSW50ZXJ2YWxQcm92aWRlciA9IHtcbiAgLy8gV2hlbiBhY2Nlc3NpbmcgdGhlIGRlbGVnYXRlLCB1c2UgdGhlIHZhcmlhYmxlIHJhdGhlciB0aGFuIGB0aGlzYCBzbyB0aGF0XG4gIC8vIHRoZSBmdW5jdGlvbnMgY2FuIGJlIGNhbGxlZCB3aXRob3V0IGJlaW5nIGJvdW5kIHRvIHRoZSBwcm92aWRlci5cbiAgc2V0SW50ZXJ2YWwoaGFuZGxlcjogKCkgPT4gdm9pZCwgdGltZW91dD86IG51bWJlciwgLi4uYXJncykge1xuICAgIGNvbnN0IHsgZGVsZWdhdGUgfSA9IGludGVydmFsUHJvdmlkZXI7XG4gICAgaWYgKGRlbGVnYXRlPy5zZXRJbnRlcnZhbCkge1xuICAgICAgcmV0dXJuIGRlbGVnYXRlLnNldEludGVydmFsKGhhbmRsZXIsIHRpbWVvdXQsIC4uLmFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gc2V0SW50ZXJ2YWwoaGFuZGxlciwgdGltZW91dCwgLi4uYXJncyk7XG4gIH0sXG4gIGNsZWFySW50ZXJ2YWwoaGFuZGxlKSB7XG4gICAgY29uc3QgeyBkZWxlZ2F0ZSB9ID0gaW50ZXJ2YWxQcm92aWRlcjtcbiAgICByZXR1cm4gKGRlbGVnYXRlPy5jbGVhckludGVydmFsIHx8IGNsZWFySW50ZXJ2YWwpKGhhbmRsZSBhcyBhbnkpO1xuICB9LFxuICBkZWxlZ2F0ZTogdW5kZWZpbmVkLFxufTtcbiIsICJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgeyBTY2hlZHVsZXJBY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgQXN5bmNTY2hlZHVsZXIgfSBmcm9tICcuL0FzeW5jU2NoZWR1bGVyJztcbmltcG9ydCB7IGludGVydmFsUHJvdmlkZXIgfSBmcm9tICcuL2ludGVydmFsUHJvdmlkZXInO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi4vdXRpbC9hcnJSZW1vdmUnO1xuaW1wb3J0IHsgVGltZXJIYW5kbGUgfSBmcm9tICcuL3RpbWVySGFuZGxlJztcblxuZXhwb3J0IGNsYXNzIEFzeW5jQWN0aW9uPFQ+IGV4dGVuZHMgQWN0aW9uPFQ+IHtcbiAgcHVibGljIGlkOiBUaW1lckhhbmRsZSB8IHVuZGVmaW5lZDtcbiAgcHVibGljIHN0YXRlPzogVDtcbiAgLy8gQHRzLWlnbm9yZTogUHJvcGVydHkgaGFzIG5vIGluaXRpYWxpemVyIGFuZCBpcyBub3QgZGVmaW5pdGVseSBhc3NpZ25lZFxuICBwdWJsaWMgZGVsYXk6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHBlbmRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2NoZWR1bGVyOiBBc3luY1NjaGVkdWxlciwgcHJvdGVjdGVkIHdvcms6ICh0aGlzOiBTY2hlZHVsZXJBY3Rpb248VD4sIHN0YXRlPzogVCkgPT4gdm9pZCkge1xuICAgIHN1cGVyKHNjaGVkdWxlciwgd29yayk7XG4gIH1cblxuICBwdWJsaWMgc2NoZWR1bGUoc3RhdGU/OiBULCBkZWxheTogbnVtYmVyID0gMCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgcmVwbGFjZSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIHRoZSBuZXcgc3RhdGUuXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgY29uc3QgaWQgPSB0aGlzLmlkO1xuICAgIGNvbnN0IHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuXG4gICAgLy9cbiAgICAvLyBJbXBvcnRhbnQgaW1wbGVtZW50YXRpb24gbm90ZTpcbiAgICAvL1xuICAgIC8vIEFjdGlvbnMgb25seSBleGVjdXRlIG9uY2UgYnkgZGVmYXVsdCwgdW5sZXNzIHJlc2NoZWR1bGVkIGZyb20gd2l0aGluIHRoZVxuICAgIC8vIHNjaGVkdWxlZCBjYWxsYmFjay4gVGhpcyBhbGxvd3MgdXMgdG8gaW1wbGVtZW50IHNpbmdsZSBhbmQgcmVwZWF0XG4gICAgLy8gYWN0aW9ucyB2aWEgdGhlIHNhbWUgY29kZSBwYXRoLCB3aXRob3V0IGFkZGluZyBBUEkgc3VyZmFjZSBhcmVhLCBhcyB3ZWxsXG4gICAgLy8gYXMgbWltaWMgdHJhZGl0aW9uYWwgcmVjdXJzaW9uIGJ1dCBhY3Jvc3MgYXN5bmNocm9ub3VzIGJvdW5kYXJpZXMuXG4gICAgLy9cbiAgICAvLyBIb3dldmVyLCBKUyBydW50aW1lcyBhbmQgdGltZXJzIGRpc3Rpbmd1aXNoIGJldHdlZW4gaW50ZXJ2YWxzIGFjaGlldmVkIGJ5XG4gICAgLy8gc2VyaWFsIGBzZXRUaW1lb3V0YCBjYWxscyB2cy4gYSBzaW5nbGUgYHNldEludGVydmFsYCBjYWxsLiBBbiBpbnRlcnZhbCBvZlxuICAgIC8vIHNlcmlhbCBgc2V0VGltZW91dGAgY2FsbHMgY2FuIGJlIGluZGl2aWR1YWxseSBkZWxheWVkLCB3aGljaCBkZWxheXNcbiAgICAvLyBzY2hlZHVsaW5nIHRoZSBuZXh0IGBzZXRUaW1lb3V0YCwgYW5kIHNvIG9uLiBgc2V0SW50ZXJ2YWxgIGF0dGVtcHRzIHRvXG4gICAgLy8gZ3VhcmFudGVlIHRoZSBpbnRlcnZhbCBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgbW9yZSBwcmVjaXNlbHkgdG8gdGhlXG4gICAgLy8gaW50ZXJ2YWwgcGVyaW9kLCByZWdhcmRsZXNzIG9mIGxvYWQuXG4gICAgLy9cbiAgICAvLyBUaGVyZWZvcmUsIHdlIHVzZSBgc2V0SW50ZXJ2YWxgIHRvIHNjaGVkdWxlIHNpbmdsZSBhbmQgcmVwZWF0IGFjdGlvbnMuXG4gICAgLy8gSWYgdGhlIGFjdGlvbiByZXNjaGVkdWxlcyBpdHNlbGYgd2l0aCB0aGUgc2FtZSBkZWxheSwgdGhlIGludGVydmFsIGlzIG5vdFxuICAgIC8vIGNhbmNlbGVkLiBJZiB0aGUgYWN0aW9uIGRvZXNuJ3QgcmVzY2hlZHVsZSwgb3IgcmVzY2hlZHVsZXMgd2l0aCBhXG4gICAgLy8gZGlmZmVyZW50IGRlbGF5LCB0aGUgaW50ZXJ2YWwgd2lsbCBiZSBjYW5jZWxlZCBhZnRlciBzY2hlZHVsZWQgY2FsbGJhY2tcbiAgICAvLyBleGVjdXRpb24uXG4gICAgLy9cbiAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQoc2NoZWR1bGVyLCBpZCwgZGVsYXkpO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgcGVuZGluZyBmbGFnIGluZGljYXRpbmcgdGhhdCB0aGlzIGFjdGlvbiBoYXMgYmVlbiBzY2hlZHVsZWQsIG9yXG4gICAgLy8gaGFzIHJlY3Vyc2l2ZWx5IHJlc2NoZWR1bGVkIGl0c2VsZi5cbiAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgIC8vIElmIHRoaXMgYWN0aW9uIGhhcyBhbHJlYWR5IGFuIGFzeW5jIElkLCBkb24ndCByZXF1ZXN0IGEgbmV3IG9uZS5cbiAgICB0aGlzLmlkID0gdGhpcy5pZCA/PyB0aGlzLnJlcXVlc3RBc3luY0lkKHNjaGVkdWxlciwgdGhpcy5pZCwgZGVsYXkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVxdWVzdEFzeW5jSWQoc2NoZWR1bGVyOiBBc3luY1NjaGVkdWxlciwgX2lkPzogVGltZXJIYW5kbGUsIGRlbGF5OiBudW1iZXIgPSAwKTogVGltZXJIYW5kbGUge1xuICAgIHJldHVybiBpbnRlcnZhbFByb3ZpZGVyLnNldEludGVydmFsKHNjaGVkdWxlci5mbHVzaC5iaW5kKHNjaGVkdWxlciwgdGhpcyksIGRlbGF5KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWN5Y2xlQXN5bmNJZChfc2NoZWR1bGVyOiBBc3luY1NjaGVkdWxlciwgaWQ/OiBUaW1lckhhbmRsZSwgZGVsYXk6IG51bWJlciB8IG51bGwgPSAwKTogVGltZXJIYW5kbGUgfCB1bmRlZmluZWQge1xuICAgIC8vIElmIHRoaXMgYWN0aW9uIGlzIHJlc2NoZWR1bGVkIHdpdGggdGhlIHNhbWUgZGVsYXkgdGltZSwgZG9uJ3QgY2xlYXIgdGhlIGludGVydmFsIGlkLlxuICAgIGlmIChkZWxheSAhPSBudWxsICYmIHRoaXMuZGVsYXkgPT09IGRlbGF5ICYmIHRoaXMucGVuZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgYWN0aW9uJ3MgZGVsYXkgdGltZSBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgY3VycmVudCBkZWxheSxcbiAgICAvLyBvciB0aGUgYWN0aW9uIGhhcyBiZWVuIHJlc2NoZWR1bGVkIGJlZm9yZSBpdCdzIGV4ZWN1dGVkLCBjbGVhciB0aGUgaW50ZXJ2YWwgaWRcbiAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgaW50ZXJ2YWxQcm92aWRlci5jbGVhckludGVydmFsKGlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEltbWVkaWF0ZWx5IGV4ZWN1dGVzIHRoaXMgYWN0aW9uIGFuZCB0aGUgYHdvcmtgIGl0IGNvbnRhaW5zLlxuICAgKiBAcmV0dXJuIHthbnl9XG4gICAqL1xuICBwdWJsaWMgZXhlY3V0ZShzdGF0ZTogVCwgZGVsYXk6IG51bWJlcik6IGFueSB7XG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdleGVjdXRpbmcgYSBjYW5jZWxsZWQgYWN0aW9uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgY29uc3QgZXJyb3IgPSB0aGlzLl9leGVjdXRlKHN0YXRlLCBkZWxheSk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBlbmRpbmcgPT09IGZhbHNlICYmIHRoaXMuaWQgIT0gbnVsbCkge1xuICAgICAgLy8gRGVxdWV1ZSBpZiB0aGUgYWN0aW9uIGRpZG4ndCByZXNjaGVkdWxlIGl0c2VsZi4gRG9uJ3QgY2FsbFxuICAgICAgLy8gdW5zdWJzY3JpYmUoKSwgYmVjYXVzZSB0aGUgYWN0aW9uIGNvdWxkIHJlc2NoZWR1bGUgbGF0ZXIuXG4gICAgICAvLyBGb3IgZXhhbXBsZTpcbiAgICAgIC8vIGBgYFxuICAgICAgLy8gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uIGRvV29yayhjb3VudGVyKSB7XG4gICAgICAvLyAgIC8qIC4uLiBJJ20gYSBidXN5IHdvcmtlciBiZWUgLi4uICovXG4gICAgICAvLyAgIHZhciBvcmlnaW5hbEFjdGlvbiA9IHRoaXM7XG4gICAgICAvLyAgIC8qIHdhaXQgMTAwbXMgYmVmb3JlIHJlc2NoZWR1bGluZyB0aGUgYWN0aW9uICovXG4gICAgICAvLyAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gICAgIG9yaWdpbmFsQWN0aW9uLnNjaGVkdWxlKGNvdW50ZXIgKyAxKTtcbiAgICAgIC8vICAgfSwgMTAwKTtcbiAgICAgIC8vIH0sIDEwMDApO1xuICAgICAgLy8gYGBgXG4gICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZCh0aGlzLnNjaGVkdWxlciwgdGhpcy5pZCwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9leGVjdXRlKHN0YXRlOiBULCBfZGVsYXk6IG51bWJlcik6IGFueSB7XG4gICAgbGV0IGVycm9yZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgZXJyb3JWYWx1ZTogYW55O1xuICAgIHRyeSB7XG4gICAgICB0aGlzLndvcmsoc3RhdGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yZWQgPSB0cnVlO1xuICAgICAgLy8gSEFDSzogU2luY2UgY29kZSBlbHNld2hlcmUgaXMgcmVseWluZyBvbiB0aGUgXCJ0cnV0aGluZXNzXCIgb2YgdGhlXG4gICAgICAvLyByZXR1cm4gaGVyZSwgd2UgY2FuJ3QgaGF2ZSBpdCByZXR1cm4gXCJcIiBvciAwIG9yIGZhbHNlLlxuICAgICAgLy8gVE9ETzogQ2xlYW4gdGhpcyB1cCB3aGVuIHdlIHJlZmFjdG9yIHNjaGVkdWxlcnMgbWlkLXZlcnNpb24tOCBvciBzby5cbiAgICAgIGVycm9yVmFsdWUgPSBlID8gZSA6IG5ldyBFcnJvcignU2NoZWR1bGVkIGFjdGlvbiB0aHJldyBmYWxzeSBlcnJvcicpO1xuICAgIH1cbiAgICBpZiAoZXJyb3JlZCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgcmV0dXJuIGVycm9yVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgY29uc3QgeyBpZCwgc2NoZWR1bGVyIH0gPSB0aGlzO1xuICAgICAgY29uc3QgeyBhY3Rpb25zIH0gPSBzY2hlZHVsZXI7XG5cbiAgICAgIHRoaXMud29yayA9IHRoaXMuc3RhdGUgPSB0aGlzLnNjaGVkdWxlciA9IG51bGwhO1xuICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG5cbiAgICAgIGFyclJlbW92ZShhY3Rpb25zLCB0aGlzKTtcbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIG51bGwpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbGF5ID0gbnVsbCE7XG4gICAgICBzdXBlci51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vc2NoZWR1bGVyL0FjdGlvbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBTY2hlZHVsZXJMaWtlLCBTY2hlZHVsZXJBY3Rpb24gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGRhdGVUaW1lc3RhbXBQcm92aWRlciB9IGZyb20gJy4vc2NoZWR1bGVyL2RhdGVUaW1lc3RhbXBQcm92aWRlcic7XG5cbi8qKlxuICogQW4gZXhlY3V0aW9uIGNvbnRleHQgYW5kIGEgZGF0YSBzdHJ1Y3R1cmUgdG8gb3JkZXIgdGFza3MgYW5kIHNjaGVkdWxlIHRoZWlyXG4gKiBleGVjdXRpb24uIFByb3ZpZGVzIGEgbm90aW9uIG9mIChwb3RlbnRpYWxseSB2aXJ0dWFsKSB0aW1lLCB0aHJvdWdoIHRoZVxuICogYG5vdygpYCBnZXR0ZXIgbWV0aG9kLlxuICpcbiAqIEVhY2ggdW5pdCBvZiB3b3JrIGluIGEgU2NoZWR1bGVyIGlzIGNhbGxlZCBhbiBgQWN0aW9uYC5cbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgU2NoZWR1bGVyIHtcbiAqICAgbm93KCk6IG51bWJlcjtcbiAqICAgc2NoZWR1bGUod29yaywgZGVsYXk/LCBzdGF0ZT8pOiBTdWJzY3JpcHRpb247XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAY2xhc3MgU2NoZWR1bGVyXG4gKiBAZGVwcmVjYXRlZCBTY2hlZHVsZXIgaXMgYW4gaW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsIG9mIFJ4SlMsIGFuZFxuICogc2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5LiBSYXRoZXIsIGNyZWF0ZSB5b3VyIG93biBjbGFzcyBhbmQgaW1wbGVtZW50XG4gKiB7QGxpbmsgU2NoZWR1bGVyTGlrZX0uIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNjaGVkdWxlciBpbXBsZW1lbnRzIFNjaGVkdWxlckxpa2Uge1xuICBwdWJsaWMgc3RhdGljIG5vdzogKCkgPT4gbnVtYmVyID0gZGF0ZVRpbWVzdGFtcFByb3ZpZGVyLm5vdztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjaGVkdWxlckFjdGlvbkN0b3I6IHR5cGVvZiBBY3Rpb24sIG5vdzogKCkgPT4gbnVtYmVyID0gU2NoZWR1bGVyLm5vdykge1xuICAgIHRoaXMubm93ID0gbm93O1xuICB9XG5cbiAgLyoqXG4gICAqIEEgZ2V0dGVyIG1ldGhvZCB0aGF0IHJldHVybnMgYSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHRpbWVcbiAgICogKGF0IHRoZSB0aW1lIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZCkgYWNjb3JkaW5nIHRvIHRoZSBzY2hlZHVsZXIncyBvd25cbiAgICogaW50ZXJuYWwgY2xvY2suXG4gICAqIEByZXR1cm4ge251bWJlcn0gQSBudW1iZXIgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHRpbWUuIE1heSBvciBtYXkgbm90XG4gICAqIGhhdmUgYSByZWxhdGlvbiB0byB3YWxsLWNsb2NrIHRpbWUuIE1heSBvciBtYXkgbm90IHJlZmVyIHRvIGEgdGltZSB1bml0XG4gICAqIChlLmcuIG1pbGxpc2Vjb25kcykuXG4gICAqL1xuICBwdWJsaWMgbm93OiAoKSA9PiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNjaGVkdWxlcyBhIGZ1bmN0aW9uLCBgd29ya2AsIGZvciBleGVjdXRpb24uIE1heSBoYXBwZW4gYXQgc29tZSBwb2ludCBpblxuICAgKiB0aGUgZnV0dXJlLCBhY2NvcmRpbmcgdG8gdGhlIGBkZWxheWAgcGFyYW1ldGVyLCBpZiBzcGVjaWZpZWQuIE1heSBiZSBwYXNzZWRcbiAgICogc29tZSBjb250ZXh0IG9iamVjdCwgYHN0YXRlYCwgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGB3b3JrYCBmdW5jdGlvbi5cbiAgICpcbiAgICogVGhlIGdpdmVuIGFyZ3VtZW50cyB3aWxsIGJlIHByb2Nlc3NlZCBhbiBzdG9yZWQgYXMgYW4gQWN0aW9uIG9iamVjdCBpbiBhXG4gICAqIHF1ZXVlIG9mIGFjdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RhdGU6ID9UKTogP1N1YnNjcmlwdGlvbn0gd29yayBBIGZ1bmN0aW9uIHJlcHJlc2VudGluZyBhXG4gICAqIHRhc2ssIG9yIHNvbWUgdW5pdCBvZiB3b3JrIHRvIGJlIGV4ZWN1dGVkIGJ5IHRoZSBTY2hlZHVsZXIuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXldIFRpbWUgdG8gd2FpdCBiZWZvcmUgZXhlY3V0aW5nIHRoZSB3b3JrLCB3aGVyZSB0aGVcbiAgICogdGltZSB1bml0IGlzIGltcGxpY2l0IGFuZCBkZWZpbmVkIGJ5IHRoZSBTY2hlZHVsZXIgaXRzZWxmLlxuICAgKiBAcGFyYW0ge1R9IFtzdGF0ZV0gU29tZSBjb250ZXh0dWFsIGRhdGEgdGhhdCB0aGUgYHdvcmtgIGZ1bmN0aW9uIHVzZXMgd2hlblxuICAgKiBjYWxsZWQgYnkgdGhlIFNjaGVkdWxlci5cbiAgICogQHJldHVybiB7U3Vic2NyaXB0aW9ufSBBIHN1YnNjcmlwdGlvbiBpbiBvcmRlciB0byBiZSBhYmxlIHRvIHVuc3Vic2NyaWJlXG4gICAqIHRoZSBzY2hlZHVsZWQgd29yay5cbiAgICovXG4gIHB1YmxpYyBzY2hlZHVsZTxUPih3b3JrOiAodGhpczogU2NoZWR1bGVyQWN0aW9uPFQ+LCBzdGF0ZT86IFQpID0+IHZvaWQsIGRlbGF5OiBudW1iZXIgPSAwLCBzdGF0ZT86IFQpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBuZXcgdGhpcy5zY2hlZHVsZXJBY3Rpb25DdG9yPFQ+KHRoaXMsIHdvcmspLnNjaGVkdWxlKHN0YXRlLCBkZWxheSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXIgfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgQXN5bmNBY3Rpb24gfSBmcm9tICcuL0FzeW5jQWN0aW9uJztcbmltcG9ydCB7IFRpbWVySGFuZGxlIH0gZnJvbSAnLi90aW1lckhhbmRsZSc7XG5cbmV4cG9ydCBjbGFzcyBBc3luY1NjaGVkdWxlciBleHRlbmRzIFNjaGVkdWxlciB7XG4gIHB1YmxpYyBhY3Rpb25zOiBBcnJheTxBc3luY0FjdGlvbjxhbnk+PiA9IFtdO1xuICAvKipcbiAgICogQSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIFNjaGVkdWxlciBpcyBjdXJyZW50bHkgZXhlY3V0aW5nIGEgYmF0Y2ggb2ZcbiAgICogcXVldWVkIGFjdGlvbnMuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBBbiBpbnRlcm5hbCBJRCB1c2VkIHRvIHRyYWNrIHRoZSBsYXRlc3QgYXN5bmNocm9ub3VzIHRhc2sgc3VjaCBhcyB0aG9zZVxuICAgKiBjb21pbmcgZnJvbSBgc2V0VGltZW91dGAsIGBzZXRJbnRlcnZhbGAsIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgLCBhbmRcbiAgICogb3RoZXJzLlxuICAgKiBAdHlwZSB7YW55fVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfc2NoZWR1bGVkOiBUaW1lckhhbmRsZSB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihTY2hlZHVsZXJBY3Rpb246IHR5cGVvZiBBY3Rpb24sIG5vdzogKCkgPT4gbnVtYmVyID0gU2NoZWR1bGVyLm5vdykge1xuICAgIHN1cGVyKFNjaGVkdWxlckFjdGlvbiwgbm93KTtcbiAgfVxuXG4gIHB1YmxpYyBmbHVzaChhY3Rpb246IEFzeW5jQWN0aW9uPGFueT4pOiB2b2lkIHtcbiAgICBjb25zdCB7IGFjdGlvbnMgfSA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZXJyb3I6IGFueTtcbiAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuXG4gICAgZG8ge1xuICAgICAgaWYgKChlcnJvciA9IGFjdGlvbi5leGVjdXRlKGFjdGlvbi5zdGF0ZSwgYWN0aW9uLmRlbGF5KSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSEpKTsgLy8gZXhoYXVzdCB0aGUgc2NoZWR1bGVyIHF1ZXVlXG5cbiAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgd2hpbGUgKChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkhKSkge1xuICAgICAgICBhY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IEFzeW5jQWN0aW9uIH0gZnJvbSAnLi9Bc3luY0FjdGlvbic7XG5pbXBvcnQgeyBBc3luY1NjaGVkdWxlciB9IGZyb20gJy4vQXN5bmNTY2hlZHVsZXInO1xuXG4vKipcbiAqXG4gKiBBc3luYyBTY2hlZHVsZXJcbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+U2NoZWR1bGUgdGFzayBhcyBpZiB5b3UgdXNlZCBzZXRUaW1lb3V0KHRhc2ssIGR1cmF0aW9uKTwvc3Bhbj5cbiAqXG4gKiBgYXN5bmNgIHNjaGVkdWxlciBzY2hlZHVsZXMgdGFza3MgYXN5bmNocm9ub3VzbHksIGJ5IHB1dHRpbmcgdGhlbSBvbiB0aGUgSmF2YVNjcmlwdFxuICogZXZlbnQgbG9vcCBxdWV1ZS4gSXQgaXMgYmVzdCB1c2VkIHRvIGRlbGF5IHRhc2tzIGluIHRpbWUgb3IgdG8gc2NoZWR1bGUgdGFza3MgcmVwZWF0aW5nXG4gKiBpbiBpbnRlcnZhbHMuXG4gKlxuICogSWYgeW91IGp1c3Qgd2FudCB0byBcImRlZmVyXCIgdGFzaywgdGhhdCBpcyB0byBwZXJmb3JtIGl0IHJpZ2h0IGFmdGVyIGN1cnJlbnRseVxuICogZXhlY3V0aW5nIHN5bmNocm9ub3VzIGNvZGUgZW5kcyAoY29tbW9ubHkgYWNoaWV2ZWQgYnkgYHNldFRpbWVvdXQoZGVmZXJyZWRUYXNrLCAwKWApLFxuICogYmV0dGVyIGNob2ljZSB3aWxsIGJlIHRoZSB7QGxpbmsgYXNhcFNjaGVkdWxlcn0gc2NoZWR1bGVyLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKiBVc2UgYXN5bmMgc2NoZWR1bGVyIHRvIGRlbGF5IHRhc2tcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBhc3luY1NjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHRhc2sgPSAoKSA9PiBjb25zb2xlLmxvZygnaXQgd29ya3MhJyk7XG4gKlxuICogYXN5bmNTY2hlZHVsZXIuc2NoZWR1bGUodGFzaywgMjAwMCk7XG4gKlxuICogLy8gQWZ0ZXIgMiBzZWNvbmRzIGxvZ3M6XG4gKiAvLyBcIml0IHdvcmtzIVwiXG4gKiBgYGBcbiAqXG4gKiBVc2UgYXN5bmMgc2NoZWR1bGVyIHRvIHJlcGVhdCB0YXNrIGluIGludGVydmFsc1xuICogYGBgdHNcbiAqIGltcG9ydCB7IGFzeW5jU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG4gKlxuICogZnVuY3Rpb24gdGFzayhzdGF0ZSkge1xuICogICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gKiAgIHRoaXMuc2NoZWR1bGUoc3RhdGUgKyAxLCAxMDAwKTsgLy8gYHRoaXNgIHJlZmVyZW5jZXMgY3VycmVudGx5IGV4ZWN1dGluZyBBY3Rpb24sXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hpY2ggd2UgcmVzY2hlZHVsZSB3aXRoIG5ldyBzdGF0ZSBhbmQgZGVsYXlcbiAqIH1cbiAqXG4gKiBhc3luY1NjaGVkdWxlci5zY2hlZHVsZSh0YXNrLCAzMDAwLCAwKTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gMCBhZnRlciAzc1xuICogLy8gMSBhZnRlciA0c1xuICogLy8gMiBhZnRlciA1c1xuICogLy8gMyBhZnRlciA2c1xuICogYGBgXG4gKi9cblxuZXhwb3J0IGNvbnN0IGFzeW5jU2NoZWR1bGVyID0gbmV3IEFzeW5jU2NoZWR1bGVyKEFzeW5jQWN0aW9uKTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBSZW5hbWVkIHRvIHtAbGluayBhc3luY1NjaGVkdWxlcn0uIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzeW5jID0gYXN5bmNTY2hlZHVsZXI7XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBBIHNpbXBsZSBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgbm8gaXRlbXMgdG8gdGhlIE9ic2VydmVyIGFuZCBpbW1lZGlhdGVseVxuICogZW1pdHMgYSBjb21wbGV0ZSBub3RpZmljYXRpb24uXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkp1c3QgZW1pdHMgJ2NvbXBsZXRlJywgYW5kIG5vdGhpbmcgZWxzZS48L3NwYW4+XG4gKlxuICogIVtdKGVtcHR5LnBuZylcbiAqXG4gKiBBIHNpbXBsZSBPYnNlcnZhYmxlIHRoYXQgb25seSBlbWl0cyB0aGUgY29tcGxldGUgbm90aWZpY2F0aW9uLiBJdCBjYW4gYmUgdXNlZFxuICogZm9yIGNvbXBvc2luZyB3aXRoIG90aGVyIE9ic2VydmFibGVzLCBzdWNoIGFzIGluIGEge0BsaW5rIG1lcmdlTWFwfS5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIExvZyBjb21wbGV0ZSBub3RpZmljYXRpb25cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgRU1QVFkgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBFTVBUWS5zdWJzY3JpYmUoe1xuICogICBuZXh0OiAoKSA9PiBjb25zb2xlLmxvZygnTmV4dCcpLFxuICogICBjb21wbGV0ZTogKCkgPT4gY29uc29sZS5sb2coJ0NvbXBsZXRlIScpXG4gKiB9KTtcbiAqXG4gKiAvLyBPdXRwdXRzXG4gKiAvLyBDb21wbGV0ZSFcbiAqIGBgYFxuICpcbiAqIEVtaXQgdGhlIG51bWJlciA3LCB0aGVuIGNvbXBsZXRlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEVNUFRZLCBzdGFydFdpdGggfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBFTVBUWS5waXBlKHN0YXJ0V2l0aCg3KSk7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIE91dHB1dHNcbiAqIC8vIDdcbiAqIGBgYFxuICpcbiAqIE1hcCBhbmQgZmxhdHRlbiBvbmx5IG9kZCBudW1iZXJzIHRvIHRoZSBzZXF1ZW5jZSBgJ2EnYCwgYCdiJ2AsIGAnYydgXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCBtZXJnZU1hcCwgb2YsIEVNUFRZIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgaW50ZXJ2YWwkID0gaW50ZXJ2YWwoMTAwMCk7XG4gKiBjb25zdCByZXN1bHQgPSBpbnRlcnZhbCQucGlwZShcbiAqICAgbWVyZ2VNYXAoeCA9PiB4ICUgMiA9PT0gMSA/IG9mKCdhJywgJ2InLCAnYycpIDogRU1QVFkpLFxuICogKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gUmVzdWx0cyBpbiB0aGUgZm9sbG93aW5nIHRvIHRoZSBjb25zb2xlOlxuICogLy8geCBpcyBlcXVhbCB0byB0aGUgY291bnQgb24gdGhlIGludGVydmFsLCBlLmcuICgwLCAxLCAyLCAzLCAuLi4pXG4gKiAvLyB4IHdpbGwgb2NjdXIgZXZlcnkgMTAwMG1zXG4gKiAvLyBpZiB4ICUgMiBpcyBlcXVhbCB0byAxLCBwcmludCBhLCBiLCBjIChlYWNoIG9uIGl0cyBvd24pXG4gKiAvLyBpZiB4ICUgMiBpcyBub3QgZXF1YWwgdG8gMSwgbm90aGluZyB3aWxsIGJlIG91dHB1dFxuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgT2JzZXJ2YWJsZX1cbiAqIEBzZWUge0BsaW5rIE5FVkVSfVxuICogQHNlZSB7QGxpbmsgb2Z9XG4gKiBAc2VlIHtAbGluayB0aHJvd0Vycm9yfVxuICovXG5leHBvcnQgY29uc3QgRU1QVFkgPSBuZXcgT2JzZXJ2YWJsZTxuZXZlcj4oKHN1YnNjcmliZXIpID0+IHN1YnNjcmliZXIuY29tcGxldGUoKSk7XG5cbi8qKlxuICogQHBhcmFtIHNjaGVkdWxlciBBIHtAbGluayBTY2hlZHVsZXJMaWtlfSB0byB1c2UgZm9yIHNjaGVkdWxpbmdcbiAqIHRoZSBlbWlzc2lvbiBvZiB0aGUgY29tcGxldGUgbm90aWZpY2F0aW9uLlxuICogQGRlcHJlY2F0ZWQgUmVwbGFjZWQgd2l0aCB0aGUge0BsaW5rIEVNUFRZfSBjb25zdGFudCBvciB7QGxpbmsgc2NoZWR1bGVkfSAoZS5nLiBgc2NoZWR1bGVkKFtdLCBzY2hlZHVsZXIpYCkuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5KHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpIHtcbiAgcmV0dXJuIHNjaGVkdWxlciA/IGVtcHR5U2NoZWR1bGVkKHNjaGVkdWxlcikgOiBFTVBUWTtcbn1cblxuZnVuY3Rpb24gZW1wdHlTY2hlZHVsZWQoc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxuZXZlcj4oKHN1YnNjcmliZXIpID0+IHNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiBzdWJzY3JpYmVyLmNvbXBsZXRlKCkpKTtcbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NjaGVkdWxlcih2YWx1ZTogYW55KTogdmFsdWUgaXMgU2NoZWR1bGVyTGlrZSB7XG4gIHJldHVybiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnNjaGVkdWxlKTtcbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBpc1NjaGVkdWxlciB9IGZyb20gJy4vaXNTY2hlZHVsZXInO1xuXG5mdW5jdGlvbiBsYXN0PFQ+KGFycjogVFtdKTogVCB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wUmVzdWx0U2VsZWN0b3IoYXJnczogYW55W10pOiAoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdW5rbm93bikgfCB1bmRlZmluZWQge1xuICByZXR1cm4gaXNGdW5jdGlvbihsYXN0KGFyZ3MpKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BTY2hlZHVsZXIoYXJnczogYW55W10pOiBTY2hlZHVsZXJMaWtlIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGlzU2NoZWR1bGVyKGxhc3QoYXJncykpID8gYXJncy5wb3AoKSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcE51bWJlcihhcmdzOiBhbnlbXSwgZGVmYXVsdFZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIGxhc3QoYXJncykgPT09ICdudW1iZXInID8gYXJncy5wb3AoKSEgOiBkZWZhdWx0VmFsdWU7XG59XG4iLCAiZXhwb3J0IGNvbnN0IGlzQXJyYXlMaWtlID0gKDxUPih4OiBhbnkpOiB4IGlzIEFycmF5TGlrZTxUPiA9PiB4ICYmIHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHggIT09ICdmdW5jdGlvbicpOyIsICJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSBcIi4vaXNGdW5jdGlvblwiO1xuXG4vKipcbiAqIFRlc3RzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIFwidGhlbm5hYmxlXCIuXG4gKiBAcGFyYW0gdmFsdWUgdGhlIG9iamVjdCB0byB0ZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2UodmFsdWU6IGFueSk6IHZhbHVlIGlzIFByb21pc2VMaWtlPGFueT4ge1xuICByZXR1cm4gaXNGdW5jdGlvbih2YWx1ZT8udGhlbik7XG59XG4iLCAiaW1wb3J0IHsgSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbi8qKiBJZGVudGlmaWVzIGFuIGlucHV0IGFzIGJlaW5nIE9ic2VydmFibGUgKGJ1dCBub3QgbmVjZXNzYXJ5IGFuIFJ4IE9ic2VydmFibGUpICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dDogYW55KTogaW5wdXQgaXMgSW50ZXJvcE9ic2VydmFibGU8YW55PiB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGlucHV0W1N5bWJvbF9vYnNlcnZhYmxlXSk7XG59XG4iLCAiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FzeW5jSXRlcmFibGU8VD4ob2JqOiBhbnkpOiBvYmogaXMgQXN5bmNJdGVyYWJsZTxUPiB7XG4gIHJldHVybiBTeW1ib2wuYXN5bmNJdGVyYXRvciAmJiBpc0Z1bmN0aW9uKG9iaj8uW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG59XG4iLCAiLyoqXG4gKiBDcmVhdGVzIHRoZSBUeXBlRXJyb3IgdG8gdGhyb3cgaWYgYW4gaW52YWxpZCBvYmplY3QgaXMgcGFzc2VkIHRvIGBmcm9tYCBvciBgc2NoZWR1bGVkYC5cbiAqIEBwYXJhbSBpbnB1dCBUaGUgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0OiBhbnkpIHtcbiAgLy8gVE9ETzogV2Ugc2hvdWxkIGNyZWF0ZSBlcnJvciBjb2RlcyB0aGF0IGNhbiBiZSBsb29rZWQgdXAsIHNvIHRoaXMgY2FuIGJlIGxlc3MgdmVyYm9zZS5cbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXG4gICAgYFlvdSBwcm92aWRlZCAke1xuICAgICAgaW5wdXQgIT09IG51bGwgJiYgdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyA/ICdhbiBpbnZhbGlkIG9iamVjdCcgOiBgJyR7aW5wdXR9J2BcbiAgICB9IHdoZXJlIGEgc3RyZWFtIHdhcyBleHBlY3RlZC4gWW91IGNhbiBwcm92aWRlIGFuIE9ic2VydmFibGUsIFByb21pc2UsIFJlYWRhYmxlU3RyZWFtLCBBcnJheSwgQXN5bmNJdGVyYWJsZSwgb3IgSXRlcmFibGUuYFxuICApO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBnZXRTeW1ib2xJdGVyYXRvcigpOiBzeW1ib2wge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCAhU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgcmV0dXJuICdAQGl0ZXJhdG9yJyBhcyBhbnk7XG4gIH1cblxuICByZXR1cm4gU3ltYm9sLml0ZXJhdG9yO1xufVxuXG5leHBvcnQgY29uc3QgaXRlcmF0b3IgPSBnZXRTeW1ib2xJdGVyYXRvcigpO1xuIiwgImltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuLyoqIElkZW50aWZpZXMgYW4gaW5wdXQgYXMgYmVpbmcgYW4gSXRlcmFibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0l0ZXJhYmxlKGlucHV0OiBhbnkpOiBpbnB1dCBpcyBJdGVyYWJsZTxhbnk+IHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oaW5wdXQ/LltTeW1ib2xfaXRlcmF0b3JdKTtcbn1cbiIsICJpbXBvcnQgeyBSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uKiByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yPFQ+KHJlYWRhYmxlU3RyZWFtOiBSZWFkYWJsZVN0cmVhbUxpa2U8VD4pOiBBc3luY0dlbmVyYXRvcjxUPiB7XG4gIGNvbnN0IHJlYWRlciA9IHJlYWRhYmxlU3RyZWFtLmdldFJlYWRlcigpO1xuICB0cnkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgeWllbGQgdmFsdWUhO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWFkZXIucmVsZWFzZUxvY2soKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkYWJsZVN0cmVhbUxpa2U8VD4ob2JqOiBhbnkpOiBvYmogaXMgUmVhZGFibGVTdHJlYW1MaWtlPFQ+IHtcbiAgLy8gV2UgZG9uJ3Qgd2FudCB0byB1c2UgaW5zdGFuY2VvZiBjaGVja3MgYmVjYXVzZSB0aGV5IHdvdWxkIHJldHVyblxuICAvLyBmYWxzZSBmb3IgaW5zdGFuY2VzIGZyb20gYW5vdGhlciBSZWFsbSwgbGlrZSBhbiA8aWZyYW1lPi5cbiAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqPy5nZXRSZWFkZXIpO1xufVxuIiwgImltcG9ydCB7IGlzQXJyYXlMaWtlIH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5TGlrZSc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuLi91dGlsL2lzUHJvbWlzZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIE9ic2VydmVkVmFsdWVPZiwgUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FzeW5jSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvciB9IGZyb20gJy4uL3V0aWwvdGhyb3dVbm9ic2VydmFibGVFcnJvcic7XG5pbXBvcnQgeyBpc0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzUmVhZGFibGVTdHJlYW1MaWtlLCByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi4vdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvcic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJGcm9tPE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oaW5wdXQ6IE8pOiBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPj47XG5leHBvcnQgZnVuY3Rpb24gaW5uZXJGcm9tPFQ+KGlucHV0OiBPYnNlcnZhYmxlSW5wdXQ8VD4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgaWYgKGlucHV0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgIGlmIChpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21JbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tUHJvbWlzZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc0FzeW5jSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbUFzeW5jSXRlcmFibGUoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tSXRlcmFibGUoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbVJlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gUnhKUyBPYnNlcnZhYmxlIGZyb20gYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyBgU3ltYm9sLm9ic2VydmFibGVgLlxuICogQHBhcmFtIG9iaiBBbiBvYmplY3QgdGhhdCBwcm9wZXJseSBpbXBsZW1lbnRzIGBTeW1ib2wub2JzZXJ2YWJsZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSW50ZXJvcE9ic2VydmFibGU8VD4ob2JqOiBhbnkpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgY29uc3Qgb2JzID0gb2JqW1N5bWJvbF9vYnNlcnZhYmxlXSgpO1xuICAgIGlmIChpc0Z1bmN0aW9uKG9icy5zdWJzY3JpYmUpKSB7XG4gICAgICByZXR1cm4gb2JzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIGJlIGNhdWdodCBieSBvYnNlcnZhYmxlIHN1YnNjcmliZSBmdW5jdGlvbiBlcnJvciBoYW5kbGluZy5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm92aWRlZCBvYmplY3QgZG9lcyBub3QgY29ycmVjdGx5IGltcGxlbWVudCBTeW1ib2wub2JzZXJ2YWJsZScpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTeW5jaHJvbm91c2x5IGVtaXRzIHRoZSB2YWx1ZXMgb2YgYW4gYXJyYXkgbGlrZSBhbmQgY29tcGxldGVzLlxuICogVGhpcyBpcyBleHBvcnRlZCBiZWNhdXNlIHRoZXJlIGFyZSBjcmVhdGlvbiBmdW5jdGlvbnMgYW5kIG9wZXJhdG9ycyB0aGF0IG5lZWQgdG9cbiAqIG1ha2UgZGlyZWN0IHVzZSBvZiB0aGUgc2FtZSBsb2dpYywgYW5kIHRoZXJlJ3Mgbm8gcmVhc29uIHRvIG1ha2UgdGhlbSBydW4gdGhyb3VnaFxuICogYGZyb21gIGNvbmRpdGlvbmFscyBiZWNhdXNlIHdlICprbm93KiB0aGV5J3JlIGRlYWxpbmcgd2l0aCBhbiBhcnJheS5cbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gZW1pdCB2YWx1ZXMgZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUFycmF5TGlrZTxUPihhcnJheTogQXJyYXlMaWtlPFQ+KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIC8vIExvb3Agb3ZlciB0aGUgYXJyYXkgYW5kIGVtaXQgZWFjaCB2YWx1ZS4gTm90ZSB0d28gdGhpbmdzIGhlcmU6XG4gICAgLy8gMS4gV2UncmUgbWFraW5nIHN1cmUgdGhhdCB0aGUgc3Vic2NyaWJlciBpcyBub3QgY2xvc2VkIG9uIGVhY2ggbG9vcC5cbiAgICAvLyAgICBUaGlzIGlzIHNvIHdlIGRvbid0IGNvbnRpbnVlIGxvb3Bpbmcgb3ZlciBhIHZlcnkgbGFyZ2UgYXJyYXkgYWZ0ZXJcbiAgICAvLyAgICBzb21ldGhpbmcgbGlrZSBhIGB0YWtlYCwgYHRha2VXaGlsZWAsIG9yIG90aGVyIHN5bmNocm9ub3VzIHVuc3Vic2NyaXB0aW9uXG4gICAgLy8gICAgaGFzIGFscmVhZHkgdW5zdWJzY3JpYmVkLlxuICAgIC8vIDIuIEluIHRoaXMgZm9ybSwgcmVlbnRyYW50IGNvZGUgY2FuIGFsdGVyIHRoYXQgYXJyYXkgd2UncmUgbG9vcGluZyBvdmVyLlxuICAgIC8vICAgIFRoaXMgaXMgYSBrbm93biBpc3N1ZSwgYnV0IGNvbnNpZGVyZWQgYW4gZWRnZSBjYXNlLiBUaGUgYWx0ZXJuYXRpdmUgd291bGRcbiAgICAvLyAgICBiZSB0byBjb3B5IHRoZSBhcnJheSBiZWZvcmUgZXhlY3V0aW5nIHRoZSBsb29wLCBidXQgdGhpcyBoYXNcbiAgICAvLyAgICBwZXJmb3JtYW5jZSBpbXBsaWNhdGlvbnMuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGggJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpXSk7XG4gICAgfVxuICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUHJvbWlzZTxUPihwcm9taXNlOiBQcm9taXNlTGlrZTxUPikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICBwcm9taXNlXG4gICAgICAudGhlbihcbiAgICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnI6IGFueSkgPT4gc3Vic2NyaWJlci5lcnJvcihlcnIpXG4gICAgICApXG4gICAgICAudGhlbihudWxsLCByZXBvcnRVbmhhbmRsZWRFcnJvcik7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUl0ZXJhYmxlPFQ+KGl0ZXJhYmxlOiBJdGVyYWJsZTxUPikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGl0ZXJhYmxlKSB7XG4gICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Bc3luY0l0ZXJhYmxlPFQ+KGFzeW5jSXRlcmFibGU6IEFzeW5jSXRlcmFibGU8VD4pIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgcHJvY2Vzcyhhc3luY0l0ZXJhYmxlLCBzdWJzY3JpYmVyKS5jYXRjaCgoZXJyKSA9PiBzdWJzY3JpYmVyLmVycm9yKGVycikpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21SZWFkYWJsZVN0cmVhbUxpa2U8VD4ocmVhZGFibGVTdHJlYW06IFJlYWRhYmxlU3RyZWFtTGlrZTxUPikge1xuICByZXR1cm4gZnJvbUFzeW5jSXRlcmFibGUocmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcihyZWFkYWJsZVN0cmVhbSkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzPFQ+KGFzeW5jSXRlcmFibGU6IEFzeW5jSXRlcmFibGU8VD4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pIHtcbiAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBhc3luY0l0ZXJhYmxlKSB7XG4gICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAvLyBBIHNpZGUtZWZmZWN0IG1heSBoYXZlIGNsb3NlZCBvdXIgc3Vic2NyaWJlcixcbiAgICAvLyBjaGVjayBiZWZvcmUgdGhlIG5leHQgaXRlcmF0aW9uLlxuICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG59XG4iLCAiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFNjaGVkdWxlckFjdGlvbiwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTY2hlZHVsZShcbiAgcGFyZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24sXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSxcbiAgd29yazogKCkgPT4gdm9pZCxcbiAgZGVsYXk6IG51bWJlcixcbiAgcmVwZWF0OiB0cnVlXG4pOiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTY2hlZHVsZShcbiAgcGFyZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24sXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSxcbiAgd29yazogKCkgPT4gdm9pZCxcbiAgZGVsYXk/OiBudW1iZXIsXG4gIHJlcGVhdD86IGZhbHNlXG4pOiBTdWJzY3JpcHRpb247XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU2NoZWR1bGUoXG4gIHBhcmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsXG4gIHdvcms6ICgpID0+IHZvaWQsXG4gIGRlbGF5ID0gMCxcbiAgcmVwZWF0ID0gZmFsc2Vcbik6IFN1YnNjcmlwdGlvbiB8IHZvaWQge1xuICBjb25zdCBzY2hlZHVsZVN1YnNjcmlwdGlvbiA9IHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAodGhpczogU2NoZWR1bGVyQWN0aW9uPGFueT4pIHtcbiAgICB3b3JrKCk7XG4gICAgaWYgKHJlcGVhdCkge1xuICAgICAgcGFyZW50U3Vic2NyaXB0aW9uLmFkZCh0aGlzLnNjaGVkdWxlKG51bGwsIGRlbGF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH0sIGRlbGF5KTtcblxuICBwYXJlbnRTdWJzY3JpcHRpb24uYWRkKHNjaGVkdWxlU3Vic2NyaXB0aW9uKTtcblxuICBpZiAoIXJlcGVhdCkge1xuICAgIC8vIEJlY2F1c2UgdXNlci1sYW5kIHNjaGVkdWxlciBpbXBsZW1lbnRhdGlvbnMgYXJlIHVubGlrZWx5IHRvIHByb3Blcmx5IHJldXNlXG4gICAgLy8gQWN0aW9ucyBmb3IgcmVwZWF0IHNjaGVkdWxpbmcsIHdlIGNhbid0IHRydXN0IHRoYXQgdGhlIHJldHVybmVkIHN1YnNjcmlwdGlvblxuICAgIC8vIHdpbGwgY29udHJvbCByZXBlYXQgc3Vic2NyaXB0aW9uIHNjZW5hcmlvcy4gU28gd2UncmUgdHJ5aW5nIHRvIGF2b2lkIHVzaW5nIHRoZW1cbiAgICAvLyBpbmNvcnJlY3RseSB3aXRoaW4gdGhpcyBsaWJyYXJ5LlxuICAgIHJldHVybiBzY2hlZHVsZVN1YnNjcmlwdGlvbjtcbiAgfVxufVxuIiwgIi8qKiBAcHJldHRpZXIgKi9cbmltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuXG4vKipcbiAqIFJlLWVtaXRzIGFsbCBub3RpZmljYXRpb25zIGZyb20gc291cmNlIE9ic2VydmFibGUgd2l0aCBzcGVjaWZpZWQgc2NoZWR1bGVyLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5FbnN1cmUgYSBzcGVjaWZpYyBzY2hlZHVsZXIgaXMgdXNlZCwgZnJvbSBvdXRzaWRlIG9mIGFuIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqIGBvYnNlcnZlT25gIGlzIGFuIG9wZXJhdG9yIHRoYXQgYWNjZXB0cyBhIHNjaGVkdWxlciBhcyBhIGZpcnN0IHBhcmFtZXRlciwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHJlc2NoZWR1bGVcbiAqIG5vdGlmaWNhdGlvbnMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUuIEl0IG1pZ2h0IGJlIHVzZWZ1bCwgaWYgeW91IGRvIG5vdCBoYXZlIGNvbnRyb2wgb3ZlclxuICogaW50ZXJuYWwgc2NoZWR1bGVyIG9mIGEgZ2l2ZW4gT2JzZXJ2YWJsZSwgYnV0IHdhbnQgdG8gY29udHJvbCB3aGVuIGl0cyB2YWx1ZXMgYXJlIGVtaXR0ZWQgbmV2ZXJ0aGVsZXNzLlxuICpcbiAqIFJldHVybmVkIE9ic2VydmFibGUgZW1pdHMgdGhlIHNhbWUgbm90aWZpY2F0aW9ucyAobmV4dGVkIHZhbHVlcywgY29tcGxldGUgYW5kIGVycm9yIGV2ZW50cykgYXMgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLFxuICogYnV0IHJlc2NoZWR1bGVkIHdpdGggcHJvdmlkZWQgc2NoZWR1bGVyLiBOb3RlIHRoYXQgdGhpcyBkb2Vzbid0IG1lYW4gdGhhdCBzb3VyY2UgT2JzZXJ2YWJsZXMgaW50ZXJuYWxcbiAqIHNjaGVkdWxlciB3aWxsIGJlIHJlcGxhY2VkIGluIGFueSB3YXkuIE9yaWdpbmFsIHNjaGVkdWxlciBzdGlsbCB3aWxsIGJlIHVzZWQsIGJ1dCB3aGVuIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBlbWl0c1xuICogbm90aWZpY2F0aW9uLCBpdCB3aWxsIGJlIGltbWVkaWF0ZWx5IHNjaGVkdWxlZCBhZ2FpbiAtIHRoaXMgdGltZSB3aXRoIHNjaGVkdWxlciBwYXNzZWQgdG8gYG9ic2VydmVPbmAuXG4gKiBBbiBhbnRpLXBhdHRlcm4gd291bGQgYmUgY2FsbGluZyBgb2JzZXJ2ZU9uYCBvbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgbG90cyBvZiB2YWx1ZXMgc3luY2hyb25vdXNseSwgdG8gc3BsaXRcbiAqIHRoYXQgZW1pc3Npb25zIGludG8gYXN5bmNocm9ub3VzIGNodW5rcy4gRm9yIHRoaXMgdG8gaGFwcGVuLCBzY2hlZHVsZXIgd291bGQgaGF2ZSB0byBiZSBwYXNzZWQgaW50byB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGRpcmVjdGx5ICh1c3VhbGx5IGludG8gdGhlIG9wZXJhdG9yIHRoYXQgY3JlYXRlcyBpdCkuIGBvYnNlcnZlT25gIHNpbXBseSBkZWxheXMgbm90aWZpY2F0aW9ucyBhXG4gKiBsaXR0bGUgYml0IG1vcmUsIHRvIGVuc3VyZSB0aGF0IHRoZXkgYXJlIGVtaXR0ZWQgYXQgZXhwZWN0ZWQgbW9tZW50cy5cbiAqXG4gKiBBcyBhIG1hdHRlciBvZiBmYWN0LCBgb2JzZXJ2ZU9uYCBhY2NlcHRzIHNlY29uZCBwYXJhbWV0ZXIsIHdoaWNoIHNwZWNpZmllcyBpbiBtaWxsaXNlY29uZHMgd2l0aCB3aGF0IGRlbGF5IG5vdGlmaWNhdGlvbnNcbiAqIHdpbGwgYmUgZW1pdHRlZC4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIHtAbGluayBkZWxheX0gb3BlcmF0b3IgYW5kIGBvYnNlcnZlT25gIGlzIHRoYXQgYG9ic2VydmVPbmBcbiAqIHdpbGwgZGVsYXkgYWxsIG5vdGlmaWNhdGlvbnMgLSBpbmNsdWRpbmcgZXJyb3Igbm90aWZpY2F0aW9ucyAtIHdoaWxlIGBkZWxheWAgd2lsbCBwYXNzIHRocm91Z2ggZXJyb3JcbiAqIGZyb20gc291cmNlIE9ic2VydmFibGUgaW1tZWRpYXRlbHkgd2hlbiBpdCBpcyBlbWl0dGVkLiBJbiBnZW5lcmFsIGl0IGlzIGhpZ2hseSByZWNvbW1lbmRlZCB0byB1c2UgYGRlbGF5YCBvcGVyYXRvclxuICogZm9yIGFueSBraW5kIG9mIGRlbGF5aW5nIG9mIHZhbHVlcyBpbiB0aGUgc3RyZWFtLCB3aGlsZSB1c2luZyBgb2JzZXJ2ZU9uYCB0byBzcGVjaWZ5IHdoaWNoIHNjaGVkdWxlciBzaG91bGQgYmUgdXNlZFxuICogZm9yIG5vdGlmaWNhdGlvbiBlbWlzc2lvbnMgaW4gZ2VuZXJhbC5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogRW5zdXJlIHZhbHVlcyBpbiBzdWJzY3JpYmUgYXJlIGNhbGxlZCBqdXN0IGJlZm9yZSBicm93c2VyIHJlcGFpbnRcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIG9ic2VydmVPbiwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBzb21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gKiBzb21lRGl2LnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDIwMHB4O2JhY2tncm91bmQ6ICMwOWMnO1xuICogZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzb21lRGl2KTtcbiAqIGNvbnN0IGludGVydmFscyA9IGludGVydmFsKDEwKTsgICAgICAvLyBJbnRlcnZhbHMgYXJlIHNjaGVkdWxlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpdGggYXN5bmMgc2NoZWR1bGVyIGJ5IGRlZmF1bHQuLi5cbiAqIGludGVydmFscy5waXBlKFxuICogICBvYnNlcnZlT24oYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpIC8vIC4uLmJ1dCB3ZSB3aWxsIG9ic2VydmUgb24gYW5pbWF0aW9uRnJhbWVcbiAqICkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZXIgdG8gZW5zdXJlIHNtb290aCBhbmltYXRpb24uXG4gKiAuc3Vic2NyaWJlKHZhbCA9PiB7XG4gKiAgIHNvbWVEaXYuc3R5bGUuaGVpZ2h0ID0gdmFsICsgJ3B4JztcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgZGVsYXl9XG4gKlxuICogQHBhcmFtIHNjaGVkdWxlciBTY2hlZHVsZXIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcmVzY2hlZHVsZSBub3RpZmljYXRpb25zIGZyb20gc291cmNlIE9ic2VydmFibGUuXG4gKiBAcGFyYW0gZGVsYXkgTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IHN0YXRlcyB3aXRoIHdoYXQgZGVsYXkgZXZlcnkgbm90aWZpY2F0aW9uIHNob3VsZCBiZSByZXNjaGVkdWxlZC5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBzYW1lXG4gKiBub3RpZmljYXRpb25zIGFzIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgYnV0IHdpdGggcHJvdmlkZWQgc2NoZWR1bGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZU9uPFQ+KHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSwgZGVsYXkgPSAwKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcbiAgcmV0dXJuIG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4ge1xuICAgIHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoXG4gICAgICAgIHN1YnNjcmliZXIsXG4gICAgICAgICh2YWx1ZSkgPT4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4gc3Vic2NyaWJlci5uZXh0KHZhbHVlKSwgZGVsYXkpLFxuICAgICAgICAoKSA9PiBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiBzdWJzY3JpYmVyLmNvbXBsZXRlKCksIGRlbGF5KSxcbiAgICAgICAgKGVycikgPT4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4gc3Vic2NyaWJlci5lcnJvcihlcnIpLCBkZWxheSlcbiAgICAgIClcbiAgICApO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcblxuLyoqXG4gKiBBc3luY2hyb25vdXNseSBzdWJzY3JpYmVzIE9ic2VydmVycyB0byB0aGlzIE9ic2VydmFibGUgb24gdGhlIHNwZWNpZmllZCB7QGxpbmsgU2NoZWR1bGVyTGlrZX0uXG4gKlxuICogV2l0aCBgc3Vic2NyaWJlT25gIHlvdSBjYW4gZGVjaWRlIHdoYXQgdHlwZSBvZiBzY2hlZHVsZXIgYSBzcGVjaWZpYyBPYnNlcnZhYmxlIHdpbGwgYmUgdXNpbmcgd2hlbiBpdCBpcyBzdWJzY3JpYmVkIHRvLlxuICpcbiAqIFNjaGVkdWxlcnMgY29udHJvbCB0aGUgc3BlZWQgYW5kIG9yZGVyIG9mIGVtaXNzaW9ucyB0byBvYnNlcnZlcnMgZnJvbSBhbiBPYnNlcnZhYmxlIHN0cmVhbS5cbiAqXG4gKiAhW10oc3Vic2NyaWJlT24ucG5nKVxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBHaXZlbiB0aGUgZm9sbG93aW5nIGNvZGU6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGEgPSBvZigxLCAyLCAzKTtcbiAqIGNvbnN0IGIgPSBvZig0LCA1LCA2KTtcbiAqXG4gKiBtZXJnZShhLCBiKS5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICpcbiAqIC8vIE91dHB1dHNcbiAqIC8vIDFcbiAqIC8vIDJcbiAqIC8vIDNcbiAqIC8vIDRcbiAqIC8vIDVcbiAqIC8vIDZcbiAqIGBgYFxuICpcbiAqIEJvdGggT2JzZXJ2YWJsZSBgYWAgYW5kIGBiYCB3aWxsIGVtaXQgdGhlaXIgdmFsdWVzIGRpcmVjdGx5IGFuZCBzeW5jaHJvbm91c2x5IG9uY2UgdGhleSBhcmUgc3Vic2NyaWJlZCB0by5cbiAqXG4gKiBJZiB3ZSBpbnN0ZWFkIHVzZSB0aGUgYHN1YnNjcmliZU9uYCBvcGVyYXRvciBkZWNsYXJpbmcgdGhhdCB3ZSB3YW50IHRvIHVzZSB0aGUge0BsaW5rIGFzeW5jU2NoZWR1bGVyfSBmb3IgdmFsdWVzIGVtaXR0ZWQgYnkgT2JzZXJ2YWJsZSBgYWA6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBzdWJzY3JpYmVPbiwgYXN5bmNTY2hlZHVsZXIsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgYSA9IG9mKDEsIDIsIDMpLnBpcGUoc3Vic2NyaWJlT24oYXN5bmNTY2hlZHVsZXIpKTtcbiAqIGNvbnN0IGIgPSBvZig0LCA1LCA2KTtcbiAqXG4gKiBtZXJnZShhLCBiKS5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICpcbiAqIC8vIE91dHB1dHNcbiAqIC8vIDRcbiAqIC8vIDVcbiAqIC8vIDZcbiAqIC8vIDFcbiAqIC8vIDJcbiAqIC8vIDNcbiAqIGBgYFxuICpcbiAqIFRoZSByZWFzb24gZm9yIHRoaXMgaXMgdGhhdCBPYnNlcnZhYmxlIGBiYCBlbWl0cyBpdHMgdmFsdWVzIGRpcmVjdGx5IGFuZCBzeW5jaHJvbm91c2x5IGxpa2UgYmVmb3JlXG4gKiBidXQgdGhlIGVtaXNzaW9ucyBmcm9tIGBhYCBhcmUgc2NoZWR1bGVkIG9uIHRoZSBldmVudCBsb29wIGJlY2F1c2Ugd2UgYXJlIG5vdyB1c2luZyB0aGUge0BsaW5rIGFzeW5jU2NoZWR1bGVyfSBmb3IgdGhhdCBzcGVjaWZpYyBPYnNlcnZhYmxlLlxuICpcbiAqIEBwYXJhbSBzY2hlZHVsZXIgVGhlIHtAbGluayBTY2hlZHVsZXJMaWtlfSB0byBwZXJmb3JtIHN1YnNjcmlwdGlvbiBhY3Rpb25zIG9uLlxuICogQHBhcmFtIGRlbGF5IEEgZGVsYXkgdG8gcGFzcyB0byB0aGUgc2NoZWR1bGVyIHRvIGRlbGF5IHN1YnNjcmlwdGlvbnNcbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSBtb2RpZmllZCBzbyB0aGF0IGl0c1xuICogc3Vic2NyaXB0aW9ucyBoYXBwZW4gb24gdGhlIHNwZWNpZmllZCB7QGxpbmsgU2NoZWR1bGVyTGlrZX0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVPbjxUPihzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsIGRlbGF5OiBudW1iZXIgPSAwKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcbiAgcmV0dXJuIG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4ge1xuICAgIHN1YnNjcmliZXIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpLCBkZWxheSkpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBvYnNlcnZlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvb2JzZXJ2ZU9uJztcbmltcG9ydCB7IHN1YnNjcmliZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL3N1YnNjcmliZU9uJztcbmltcG9ydCB7IEludGVyb3BPYnNlcnZhYmxlLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVPYnNlcnZhYmxlPFQ+KGlucHV0OiBJbnRlcm9wT2JzZXJ2YWJsZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBpbm5lckZyb20oaW5wdXQpLnBpcGUoc3Vic2NyaWJlT24oc2NoZWR1bGVyKSwgb2JzZXJ2ZU9uKHNjaGVkdWxlcikpO1xufVxuIiwgImltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IG9ic2VydmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9vYnNlcnZlT24nO1xuaW1wb3J0IHsgc3Vic2NyaWJlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvc3Vic2NyaWJlT24nO1xuaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlUHJvbWlzZTxUPihpbnB1dDogUHJvbWlzZUxpa2U8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gaW5uZXJGcm9tKGlucHV0KS5waXBlKHN1YnNjcmliZU9uKHNjaGVkdWxlciksIG9ic2VydmVPbihzY2hlZHVsZXIpKTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBcnJheTxUPihpbnB1dDogQXJyYXlMaWtlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgLy8gVGhlIGN1cnJlbnQgYXJyYXkgaW5kZXguXG4gICAgbGV0IGkgPSAwO1xuICAgIC8vIFN0YXJ0IGl0ZXJhdGluZyBvdmVyIHRoZSBhcnJheSBsaWtlIG9uIGEgc2NoZWR1bGUuXG4gICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaSA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgdGhlIGFycmF5IGxpa2UgaW4gdGhlXG4gICAgICAgIC8vIHByZXZpb3VzIGpvYiwgd2UgY2FuIGNvbXBsZXRlLlxuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgbGV0J3MgbmV4dCB0aGUgdmFsdWUgYXQgdGhlIGN1cnJlbnQgaW5kZXgsXG4gICAgICAgIC8vIHRoZW4gaW5jcmVtZW50IG91ciBpbmRleC5cbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlucHV0W2krK10pO1xuICAgICAgICAvLyBJZiB0aGUgbGFzdCBlbWlzc2lvbiBkaWRuJ3QgY2F1c2UgdXMgdG8gY2xvc2UgdGhlIHN1YnNjcmliZXJcbiAgICAgICAgLy8gKHZpYSB0YWtlIG9yIHNvbWUgc2lkZSBlZmZlY3QpLCByZXNjaGVkdWxlIHRoZSBqb2IgYW5kIHdlJ2xsXG4gICAgICAgIC8vIG1ha2UgYW5vdGhlciBwYXNzLlxuICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5cbi8qKlxuICogVXNlZCBpbiB7QGxpbmsgc2NoZWR1bGVkfSB0byBjcmVhdGUgYW4gb2JzZXJ2YWJsZSBmcm9tIGFuIEl0ZXJhYmxlLlxuICogQHBhcmFtIGlucHV0IFRoZSBpdGVyYWJsZSB0byBjcmVhdGUgYW4gb2JzZXJ2YWJsZSBmcm9tXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFRoZSBzY2hlZHVsZXIgdG8gdXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUl0ZXJhYmxlPFQ+KGlucHV0OiBJdGVyYWJsZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIGxldCBpdGVyYXRvcjogSXRlcmF0b3I8VCwgVD47XG5cbiAgICAvLyBTY2hlZHVsZSB0aGUgaW5pdGlhbCBjcmVhdGlvbiBvZiB0aGUgaXRlcmF0b3IgZnJvbVxuICAgIC8vIHRoZSBpdGVyYWJsZS4gVGhpcyBpcyBzbyB0aGUgY29kZSBpbiB0aGUgaXRlcmFibGUgaXNcbiAgICAvLyBub3QgY2FsbGVkIHVudGlsIHRoZSBzY2hlZHVsZWQgam9iIGZpcmVzLlxuICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgaXRlcmF0b3IuXG4gICAgICBpdGVyYXRvciA9IChpbnB1dCBhcyBhbnkpW1N5bWJvbF9pdGVyYXRvcl0oKTtcblxuICAgICAgZXhlY3V0ZVNjaGVkdWxlKFxuICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICBzY2hlZHVsZXIsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgdmFsdWU6IFQ7XG4gICAgICAgICAgbGV0IGRvbmU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFB1bGwgdGhlIHZhbHVlIG91dCBvZiB0aGUgaXRlcmF0b3JcbiAgICAgICAgICAgICh7IHZhbHVlLCBkb25lIH0gPSBpdGVyYXRvci5uZXh0KCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gV2UgZ290IGFuIGVycm9yIHdoaWxlIHB1bGxpbmcgZnJvbSB0aGUgaXRlcmF0b3JcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgLy8gSWYgaXQgaXMgXCJkb25lXCIgd2UganVzdCBjb21wbGV0ZS4gVGhpcyBtaW1pY3MgdGhlXG4gICAgICAgICAgICAvLyBiZWhhdmlvciBvZiBKYXZhU2NyaXB0J3MgYGZvci4ub2ZgIGNvbnN1bXB0aW9uIG9mXG4gICAgICAgICAgICAvLyBpdGVyYWJsZXMsIHdoaWNoIHdpbGwgbm90IGVtaXQgdGhlIHZhbHVlIGZyb20gYW4gaXRlcmF0b3JcbiAgICAgICAgICAgIC8vIHJlc3VsdCBvZiBgeyBkb25lOiB0cnVlOiB2YWx1ZTogJ2hlcmUnIH1gLlxuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGUgaXRlcmFibGUgaXMgbm90IGRvbmUsIGVtaXQgdGhlIHZhbHVlLlxuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIDAsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBEdXJpbmcgZmluYWxpemF0aW9uLCBpZiB3ZSBzZWUgdGhpcyBpdGVyYXRvciBoYXMgYSBgcmV0dXJuYCBtZXRob2QsXG4gICAgLy8gdGhlbiB3ZSBrbm93IGl0IGlzIGEgR2VuZXJhdG9yLCBhbmQgbm90IGp1c3QgYW4gSXRlcmF0b3IuIFNvIHdlIGNhbGxcbiAgICAvLyB0aGUgYHJldHVybigpYCBmdW5jdGlvbi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGFueSBgZmluYWxseSB7IH1gIGJsb2Nrc1xuICAgIC8vIGluc2lkZSBvZiB0aGUgZ2VuZXJhdG9yIHdlIGNhbiBoaXQgd2lsbCBiZSBoaXQgcHJvcGVybHkuXG4gICAgcmV0dXJuICgpID0+IGlzRnVuY3Rpb24oaXRlcmF0b3I/LnJldHVybikgJiYgaXRlcmF0b3IucmV0dXJuKCk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUFzeW5jSXRlcmFibGU8VD4oaW5wdXQ6IEFzeW5jSXRlcmFibGU8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICBpZiAoIWlucHV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJdGVyYWJsZSBjYW5ub3QgYmUgbnVsbCcpO1xuICB9XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gaW5wdXRbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7XG4gICAgICBleGVjdXRlU2NoZWR1bGUoXG4gICAgICAgIHN1YnNjcmliZXIsXG4gICAgICAgIHNjaGVkdWxlcixcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGl0ZXJhdG9yLm5leHQoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgcmVtb3ZlIHRoZSBzdWJzY3JpcHRpb25zIGZyb21cbiAgICAgICAgICAgICAgLy8gdGhlIHBhcmVudCBzdWJzY3JpcHRpb24uXG4gICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAwLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXJMaWtlLCBSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzY2hlZHVsZUFzeW5jSXRlcmFibGUgfSBmcm9tICcuL3NjaGVkdWxlQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZTxUPihpbnB1dDogUmVhZGFibGVTdHJlYW1MaWtlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHNjaGVkdWxlQXN5bmNJdGVyYWJsZShyZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yKGlucHV0KSwgc2NoZWR1bGVyKTtcbn1cbiIsICJpbXBvcnQgeyBzY2hlZHVsZU9ic2VydmFibGUgfSBmcm9tICcuL3NjaGVkdWxlT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzY2hlZHVsZVByb21pc2UgfSBmcm9tICcuL3NjaGVkdWxlUHJvbWlzZSc7XG5pbXBvcnQgeyBzY2hlZHVsZUFycmF5IH0gZnJvbSAnLi9zY2hlZHVsZUFycmF5JztcbmltcG9ydCB7IHNjaGVkdWxlSXRlcmFibGUgfSBmcm9tICcuL3NjaGVkdWxlSXRlcmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgaXNJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuLi91dGlsL2lzUHJvbWlzZSc7XG5pbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJdGVyYWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FzeW5jSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvciB9IGZyb20gJy4uL3V0aWwvdGhyb3dVbm9ic2VydmFibGVFcnJvcic7XG5pbXBvcnQgeyBpc1JlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuaW1wb3J0IHsgc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuL3NjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlJztcblxuLyoqXG4gKiBDb252ZXJ0cyBmcm9tIGEgY29tbW9uIHtAbGluayBPYnNlcnZhYmxlSW5wdXR9IHR5cGUgdG8gYW4gb2JzZXJ2YWJsZSB3aGVyZSBzdWJzY3JpcHRpb24gYW5kIGVtaXNzaW9uc1xuICogYXJlIHNjaGVkdWxlZCBvbiB0aGUgcHJvdmlkZWQgc2NoZWR1bGVyLlxuICpcbiAqIEBzZWUge0BsaW5rIGZyb219XG4gKiBAc2VlIHtAbGluayBvZn1cbiAqXG4gKiBAcGFyYW0gaW5wdXQgVGhlIG9ic2VydmFibGUsIGFycmF5LCBwcm9taXNlLCBpdGVyYWJsZSwgZXRjIHlvdSB3b3VsZCBsaWtlIHRvIHNjaGVkdWxlXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFRoZSBzY2hlZHVsZXIgdG8gdXNlIHRvIHNjaGVkdWxlIHRoZSBzdWJzY3JpcHRpb24gYW5kIGVtaXNzaW9ucyBmcm9tXG4gKiB0aGUgcmV0dXJuZWQgb2JzZXJ2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlZDxUPihpbnB1dDogT2JzZXJ2YWJsZUlucHV0PFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZUFycmF5KGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNQcm9taXNlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlUHJvbWlzZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGlzQXN5bmNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZUFzeW5jSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc1JlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gIH1cbiAgdGhyb3cgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgU2NoZWR1bGVyTGlrZSwgT2JzZXJ2ZWRWYWx1ZU9mIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgc2NoZWR1bGVkIH0gZnJvbSAnLi4vc2NoZWR1bGVkL3NjaGVkdWxlZCc7XG5pbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuL2lubmVyRnJvbSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tPE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oaW5wdXQ6IE8pOiBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc2NoZWR1bGVyLWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbTxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KGlucHV0OiBPLCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UgfCB1bmRlZmluZWQpOiBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPj47XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlIGZyb20gYW4gQXJyYXksIGFuIGFycmF5LWxpa2Ugb2JqZWN0LCBhIFByb21pc2UsIGFuIGl0ZXJhYmxlIG9iamVjdCwgb3IgYW4gT2JzZXJ2YWJsZS1saWtlIG9iamVjdC5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+Q29udmVydHMgYWxtb3N0IGFueXRoaW5nIHRvIGFuIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqICFbXShmcm9tLnBuZylcbiAqXG4gKiBgZnJvbWAgY29udmVydHMgdmFyaW91cyBvdGhlciBvYmplY3RzIGFuZCBkYXRhIHR5cGVzIGludG8gT2JzZXJ2YWJsZXMuIEl0IGFsc28gY29udmVydHMgYSBQcm9taXNlLCBhbiBhcnJheS1saWtlLCBvciBhblxuICogPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMjaXRlcmFibGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5pdGVyYWJsZTwvYT5cbiAqIG9iamVjdCBpbnRvIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgaXRlbXMgaW4gdGhhdCBwcm9taXNlLCBhcnJheSwgb3IgaXRlcmFibGUuIEEgU3RyaW5nLCBpbiB0aGlzIGNvbnRleHQsIGlzIHRyZWF0ZWRcbiAqIGFzIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMuIE9ic2VydmFibGUtbGlrZSBvYmplY3RzIChjb250YWlucyBhIGZ1bmN0aW9uIG5hbWVkIHdpdGggdGhlIEVTMjAxNSBTeW1ib2wgZm9yIE9ic2VydmFibGUpIGNhbiBhbHNvIGJlXG4gKiBjb252ZXJ0ZWQgdGhyb3VnaCB0aGlzIG9wZXJhdG9yLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogQ29udmVydHMgYW4gYXJyYXkgdG8gYW4gT2JzZXJ2YWJsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgYXJyYXkgPSBbMTAsIDIwLCAzMF07XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tKGFycmF5KTtcbiAqXG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAxMFxuICogLy8gMjBcbiAqIC8vIDMwXG4gKiBgYGBcbiAqXG4gKiBDb252ZXJ0IGFuIGluZmluaXRlIGl0ZXJhYmxlIChmcm9tIGEgZ2VuZXJhdG9yKSB0byBhbiBPYnNlcnZhYmxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb20sIHRha2UgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBmdW5jdGlvbiogZ2VuZXJhdGVEb3VibGVzKHNlZWQpIHtcbiAqICAgIGxldCBpID0gc2VlZDtcbiAqICAgIHdoaWxlICh0cnVlKSB7XG4gKiAgICAgIHlpZWxkIGk7XG4gKiAgICAgIGkgPSAyICogaTsgLy8gZG91YmxlIGl0XG4gKiAgICB9XG4gKiB9XG4gKlxuICogY29uc3QgaXRlcmF0b3IgPSBnZW5lcmF0ZURvdWJsZXMoMyk7XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tKGl0ZXJhdG9yKS5waXBlKHRha2UoMTApKTtcbiAqXG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAzXG4gKiAvLyA2XG4gKiAvLyAxMlxuICogLy8gMjRcbiAqIC8vIDQ4XG4gKiAvLyA5NlxuICogLy8gMTkyXG4gKiAvLyAzODRcbiAqIC8vIDc2OFxuICogLy8gMTUzNlxuICogYGBgXG4gKlxuICogV2l0aCBgYXN5bmNTY2hlZHVsZXJgXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb20sIGFzeW5jU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc29sZS5sb2coJ3N0YXJ0Jyk7XG4gKlxuICogY29uc3QgYXJyYXkgPSBbMTAsIDIwLCAzMF07XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tKGFycmF5LCBhc3luY1NjaGVkdWxlcik7XG4gKlxuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBjb25zb2xlLmxvZygnZW5kJyk7XG4gKlxuICogLy8gTG9nczpcbiAqIC8vICdzdGFydCdcbiAqIC8vICdlbmQnXG4gKiAvLyAxMFxuICogLy8gMjBcbiAqIC8vIDMwXG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBmcm9tRXZlbnR9XG4gKiBAc2VlIHtAbGluayBmcm9tRXZlbnRQYXR0ZXJufVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZUlucHV0PFQ+fSBBIHN1YnNjcmlwdGlvbiBvYmplY3QsIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZS1saWtlLFxuICogYW4gQXJyYXksIGFuIGl0ZXJhYmxlLCBvciBhbiBhcnJheS1saWtlIG9iamVjdCB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcGFyYW0ge1NjaGVkdWxlckxpa2V9IEFuIG9wdGlvbmFsIHtAbGluayBTY2hlZHVsZXJMaWtlfSBvbiB3aGljaCB0byBzY2hlZHVsZSB0aGUgZW1pc3Npb24gb2YgdmFsdWVzLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxUPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb208VD4oaW5wdXQ6IE9ic2VydmFibGVJbnB1dDxUPiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gc2NoZWR1bGVyID8gc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpIDogaW5uZXJGcm9tKGlucHV0KTtcbn1cbiIsICIvKipcbiAqIENoZWNrcyB0byBzZWUgaWYgYSB2YWx1ZSBpcyBub3Qgb25seSBhIGBEYXRlYCBvYmplY3QsXG4gKiBidXQgYSAqdmFsaWQqIGBEYXRlYCBvYmplY3QgdGhhdCBjYW4gYmUgY29udmVydGVkIHRvIGFcbiAqIG51bWJlci4gRm9yIGV4YW1wbGUsIGBuZXcgRGF0ZSgnYmxhaCcpYCBpcyBpbmRlZWQgYW5cbiAqIGBpbnN0YW5jZW9mIERhdGVgLCBob3dldmVyIGl0IGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gYVxuICogbnVtYmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZERhdGUodmFsdWU6IGFueSk6IHZhbHVlIGlzIERhdGUge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTih2YWx1ZSBhcyBhbnkpO1xufVxuIiwgImltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcDxULCBSPihwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IFIpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+O1xuLyoqIEBkZXByZWNhdGVkIFVzZSBhIGNsb3N1cmUgaW5zdGVhZCBvZiBhIGB0aGlzQXJnYC4gU2lnbmF0dXJlcyBhY2NlcHRpbmcgYSBgdGhpc0FyZ2Agd2lsbCBiZSByZW1vdmVkIGluIHY4LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcDxULCBSLCBBPihwcm9qZWN0OiAodGhpczogQSwgdmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IFIsIHRoaXNBcmc6IEEpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+O1xuXG4vKipcbiAqIEFwcGxpZXMgYSBnaXZlbiBgcHJvamVjdGAgZnVuY3Rpb24gdG8gZWFjaCB2YWx1ZSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUsIGFuZCBlbWl0cyB0aGUgcmVzdWx0aW5nIHZhbHVlcyBhcyBhbiBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5MaWtlIFtBcnJheS5wcm90b3R5cGUubWFwKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L21hcCksXG4gKiBpdCBwYXNzZXMgZWFjaCBzb3VyY2UgdmFsdWUgdGhyb3VnaCBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIHRvIGdldFxuICogY29ycmVzcG9uZGluZyBvdXRwdXQgdmFsdWVzLjwvc3Bhbj5cbiAqXG4gKiAhW10obWFwLnBuZylcbiAqXG4gKiBTaW1pbGFyIHRvIHRoZSB3ZWxsIGtub3duIGBBcnJheS5wcm90b3R5cGUubWFwYCBmdW5jdGlvbiwgdGhpcyBvcGVyYXRvclxuICogYXBwbGllcyBhIHByb2plY3Rpb24gdG8gZWFjaCB2YWx1ZSBhbmQgZW1pdHMgdGhhdCBwcm9qZWN0aW9uIGluIHRoZSBvdXRwdXRcbiAqIE9ic2VydmFibGUuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIE1hcCBldmVyeSBjbGljayB0byB0aGUgYGNsaWVudFhgIHBvc2l0aW9uIG9mIHRoYXQgY2xpY2tcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbUV2ZW50LCBtYXAgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBjbGlja3MgPSBmcm9tRXZlbnQ8UG9pbnRlckV2ZW50Pihkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiBjb25zdCBwb3NpdGlvbnMgPSBjbGlja3MucGlwZShtYXAoZXYgPT4gZXYuY2xpZW50WCkpO1xuICpcbiAqIHBvc2l0aW9ucy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBtYXBUb31cbiAqIEBzZWUge0BsaW5rIHBsdWNrfVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWU6IFQsIGluZGV4OiBudW1iZXIpOiBSfSBwcm9qZWN0IFRoZSBmdW5jdGlvbiB0byBhcHBseVxuICogdG8gZWFjaCBgdmFsdWVgIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBUaGUgYGluZGV4YCBwYXJhbWV0ZXIgaXNcbiAqIHRoZSBudW1iZXIgYGlgIGZvciB0aGUgaS10aCBlbWlzc2lvbiB0aGF0IGhhcyBoYXBwZW5lZCBzaW5jZSB0aGVcbiAqIHN1YnNjcmlwdGlvbiwgc3RhcnRpbmcgZnJvbSB0aGUgbnVtYmVyIGAwYC5cbiAqIEBwYXJhbSB7YW55fSBbdGhpc0FyZ10gQW4gb3B0aW9uYWwgYXJndW1lbnQgdG8gZGVmaW5lIHdoYXQgYHRoaXNgIGlzIGluIHRoZVxuICogYHByb2plY3RgIGZ1bmN0aW9uLlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHZhbHVlcyBmcm9tIHRoZVxuICogc291cmNlIE9ic2VydmFibGUgdHJhbnNmb3JtZWQgYnkgdGhlIGdpdmVuIGBwcm9qZWN0YCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcDxULCBSPihwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IFIsIHRoaXNBcmc/OiBhbnkpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+IHtcbiAgcmV0dXJuIG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4ge1xuICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgdmFsdWUgZnJvbSB0aGUgc291cmNlLiBVc2VkIHdpdGggcHJvamVjdGlvbi5cbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIC8vIFN1YnNjcmliZSB0byB0aGUgc291cmNlLCBhbGwgZXJyb3JzIGFuZCBjb21wbGV0aW9ucyBhcmUgc2VudCBhbG9uZ1xuICAgIC8vIHRvIHRoZSBjb25zdW1lci5cbiAgICBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsICh2YWx1ZTogVCkgPT4ge1xuICAgICAgICAvLyBDYWxsIHRoZSBwcm9qZWN0aW9uIGZ1bmN0aW9uIHdpdGggdGhlIGFwcHJvcHJpYXRlIHRoaXMgY29udGV4dCxcbiAgICAgICAgLy8gYW5kIHNlbmQgdGhlIHJlc3VsdGluZyB2YWx1ZSB0byB0aGUgY29uc3VtZXIuXG4gICAgICAgIHN1YnNjcmliZXIubmV4dChwcm9qZWN0LmNhbGwodGhpc0FyZywgdmFsdWUsIGluZGV4KyspKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcIi4uL29wZXJhdG9ycy9tYXBcIjtcblxuY29uc3QgeyBpc0FycmF5IH0gPSBBcnJheTtcblxuZnVuY3Rpb24gY2FsbE9yQXBwbHk8VCwgUj4oZm46ICgoLi4udmFsdWVzOiBUW10pID0+IFIpLCBhcmdzOiBUfFRbXSk6IFIge1xuICAgIHJldHVybiBpc0FycmF5KGFyZ3MpID8gZm4oLi4uYXJncykgOiBmbihhcmdzKTtcbn1cblxuLyoqXG4gKiBVc2VkIGluIHNldmVyYWwgLS0gbW9zdGx5IGRlcHJlY2F0ZWQgLS0gc2l0dWF0aW9ucyB3aGVyZSB3ZSBuZWVkIHRvIFxuICogYXBwbHkgYSBsaXN0IG9mIGFyZ3VtZW50cyBvciBhIHNpbmdsZSBhcmd1bWVudCB0byBhIHJlc3VsdCBzZWxlY3Rvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcE9uZU9yTWFueUFyZ3M8VCwgUj4oZm46ICgoLi4udmFsdWVzOiBUW10pID0+IFIpKTogT3BlcmF0b3JGdW5jdGlvbjxUfFRbXSwgUj4ge1xuICAgIHJldHVybiBtYXAoYXJncyA9PiBjYWxsT3JBcHBseShmbiwgYXJncykpXG59IiwgImNvbnN0IHsgaXNBcnJheSB9ID0gQXJyYXk7XG5jb25zdCB7IGdldFByb3RvdHlwZU9mLCBwcm90b3R5cGU6IG9iamVjdFByb3RvLCBrZXlzOiBnZXRLZXlzIH0gPSBPYmplY3Q7XG5cbi8qKlxuICogVXNlZCBpbiBmdW5jdGlvbnMgd2hlcmUgZWl0aGVyIGEgbGlzdCBvZiBhcmd1bWVudHMsIGEgc2luZ2xlIGFycmF5IG9mIGFyZ3VtZW50cywgb3IgYVxuICogZGljdGlvbmFyeSBvZiBhcmd1bWVudHMgY2FuIGJlIHJldHVybmVkLiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIGFuIGBhcmdzYCBwcm9wZXJ0eSB3aXRoXG4gKiB0aGUgYXJndW1lbnRzIGluIGFuIGFycmF5LCBpZiBpdCBpcyBhIGRpY3Rpb25hcnksIGl0IHdpbGwgYWxzbyByZXR1cm4gdGhlIGBrZXlzYCBpbiBhbm90aGVyXG4gKiBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZ3NBcmdBcnJheU9yT2JqZWN0PFQsIE8gZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBUPj4oYXJnczogVFtdIHwgW09dIHwgW1RbXV0pOiB7IGFyZ3M6IFRbXTsga2V5czogc3RyaW5nW10gfCBudWxsIH0ge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdCA9IGFyZ3NbMF07XG4gICAgaWYgKGlzQXJyYXkoZmlyc3QpKSB7XG4gICAgICByZXR1cm4geyBhcmdzOiBmaXJzdCwga2V5czogbnVsbCB9O1xuICAgIH1cbiAgICBpZiAoaXNQT0pPKGZpcnN0KSkge1xuICAgICAgY29uc3Qga2V5cyA9IGdldEtleXMoZmlyc3QpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXJnczoga2V5cy5tYXAoKGtleSkgPT4gZmlyc3Rba2V5XSksXG4gICAgICAgIGtleXMsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGFyZ3M6IGFyZ3MgYXMgVFtdLCBrZXlzOiBudWxsIH07XG59XG5cbmZ1bmN0aW9uIGlzUE9KTyhvYmo6IGFueSk6IG9iaiBpcyBvYmplY3Qge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIGdldFByb3RvdHlwZU9mKG9iaikgPT09IG9iamVjdFByb3RvO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3Qoa2V5czogc3RyaW5nW10sIHZhbHVlczogYW55W10pIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKChyZXN1bHQsIGtleSwgaSkgPT4gKChyZXN1bHRba2V5XSA9IHZhbHVlc1tpXSksIHJlc3VsdCksIHt9IGFzIGFueSk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0LCBTY2hlZHVsZXJMaWtlLCBPYnNlcnZlZFZhbHVlT2YsIE9ic2VydmFibGVJbnB1dFR1cGxlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYXJnc0FyZ0FycmF5T3JPYmplY3QgfSBmcm9tICcuLi91dGlsL2FyZ3NBcmdBcnJheU9yT2JqZWN0JztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICcuL2Zyb20nO1xuaW1wb3J0IHsgaWRlbnRpdHkgfSBmcm9tICcuLi91dGlsL2lkZW50aXR5JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBtYXBPbmVPck1hbnlBcmdzIH0gZnJvbSAnLi4vdXRpbC9tYXBPbmVPck1hbnlBcmdzJztcbmltcG9ydCB7IHBvcFJlc3VsdFNlbGVjdG9yLCBwb3BTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2FyZ3MnO1xuaW1wb3J0IHsgY3JlYXRlT2JqZWN0IH0gZnJvbSAnLi4vdXRpbC9jcmVhdGVPYmplY3QnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi4vb3BlcmF0b3JzL09wZXJhdG9yU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBBbnlDYXRjaGVyIH0gZnJvbSAnLi4vQW55Q2F0Y2hlcic7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5cbi8vIGNvbWJpbmVMYXRlc3QoYW55KVxuLy8gV2UgcHV0IHRoaXMgZmlyc3QgYmVjYXVzZSB3ZSBuZWVkIHRvIGNhdGNoIGNhc2VzIHdoZXJlIHRoZSB1c2VyIGhhcyBzdXBwbGllZFxuLy8gX2V4YWN0bHkgYGFueWBfIGFzIHRoZSBhcmd1bWVudC4gU2luY2UgYGFueWAgbGl0ZXJhbGx5IG1hdGNoZXMgX2FueXRoaW5nXyxcbi8vIHdlIGRvbid0IHdhbnQgaXQgdG8gcmFuZG9tbHkgaGl0IG9uZSBvZiB0aGUgb3RoZXIgdHlwZSBzaWduYXR1cmVzIGJlbG93LFxuLy8gYXMgd2UgaGF2ZSBubyBpZGVhIGF0IGJ1aWxkLXRpbWUgd2hhdCB0eXBlIHdlIHNob3VsZCBiZSByZXR1cm5pbmcgd2hlbiBnaXZlbiBhbiBhbnkuXG5cbi8qKlxuICogWW91IGhhdmUgcGFzc2VkIGBhbnlgIGhlcmUsIHdlIGNhbid0IGZpZ3VyZSBvdXQgaWYgaXQgaXNcbiAqIGFuIGFycmF5IG9yIGFuIG9iamVjdCwgc28geW91J3JlIGdldHRpbmcgYHVua25vd25gLiBVc2UgYmV0dGVyIHR5cGVzLlxuICogQHBhcmFtIGFyZyBTb21ldGhpbmcgdHlwZWQgYXMgYGFueWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8VCBleHRlbmRzIEFueUNhdGNoZXI+KGFyZzogVCk6IE9ic2VydmFibGU8dW5rbm93bj47XG5cbi8vIGNvbWJpbmVMYXRlc3QoW2EsIGIsIGNdKVxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Qoc291cmNlczogW10pOiBPYnNlcnZhYmxlPG5ldmVyPjtcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KHNvdXJjZXM6IHJlYWRvbmx5IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPl0pOiBPYnNlcnZhYmxlPEE+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgc2NoZWR1bGVyYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYHNjaGVkdWxlZGAgYW5kIGBjb21iaW5lTGF0ZXN0QWxsYC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc2NoZWR1bGVyLWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdLCBSPihcbiAgc291cmNlczogcmVhZG9ubHkgWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSxcbiAgcmVzdWx0U2VsZWN0b3I6ICguLi52YWx1ZXM6IEEpID0+IFIsXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZVxuKTogT2JzZXJ2YWJsZTxSPjtcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10sIFI+KFxuICBzb3VyY2VzOiByZWFkb25seSBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dLFxuICByZXN1bHRTZWxlY3RvcjogKC4uLnZhbHVlczogQSkgPT4gUlxuKTogT2JzZXJ2YWJsZTxSPjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHNjaGVkdWxlcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGBzY2hlZHVsZWRgIGFuZCBgY29tYmluZUxhdGVzdEFsbGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oXG4gIHNvdXJjZXM6IHJlYWRvbmx5IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPl0sXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZVxuKTogT2JzZXJ2YWJsZTxBPjtcblxuLy8gY29tYmluZUxhdGVzdChhLCBiLCBjKVxuLyoqIEBkZXByZWNhdGVkIFBhc3MgYW4gYXJyYXkgb2Ygc291cmNlcyBpbnN0ZWFkLiBUaGUgcmVzdC1wYXJhbWV0ZXJzIHNpZ25hdHVyZSB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL2FycmF5LWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdPiguLi5zb3VyY2VzOiBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dKTogT2JzZXJ2YWJsZTxBPjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHNjaGVkdWxlcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGBzY2hlZHVsZWRgIGFuZCBgY29tYmluZUxhdGVzdEFsbGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXSwgUj4oXG4gIC4uLnNvdXJjZXNBbmRSZXN1bHRTZWxlY3RvckFuZFNjaGVkdWxlcjogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+LCAoLi4udmFsdWVzOiBBKSA9PiBSLCBTY2hlZHVsZXJMaWtlXVxuKTogT2JzZXJ2YWJsZTxSPjtcbi8qKiBAZGVwcmVjYXRlZCBQYXNzIGFuIGFycmF5IG9mIHNvdXJjZXMgaW5zdGVhZC4gVGhlIHJlc3QtcGFyYW1ldGVycyBzaWduYXR1cmUgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9hcnJheS1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXSwgUj4oXG4gIC4uLnNvdXJjZXNBbmRSZXN1bHRTZWxlY3RvcjogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+LCAoLi4udmFsdWVzOiBBKSA9PiBSXVxuKTogT2JzZXJ2YWJsZTxSPjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHNjaGVkdWxlcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGBzY2hlZHVsZWRgIGFuZCBgY29tYmluZUxhdGVzdEFsbGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oXG4gIC4uLnNvdXJjZXNBbmRTY2hlZHVsZXI6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPiwgU2NoZWR1bGVyTGlrZV1cbik6IE9ic2VydmFibGU8QT47XG5cbi8vIGNvbWJpbmVMYXRlc3Qoe2EsIGIsIGN9KVxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Qoc291cmNlc09iamVjdDogeyBbSyBpbiBhbnldOiBuZXZlciB9KTogT2JzZXJ2YWJsZTxuZXZlcj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgT2JzZXJ2YWJsZUlucHV0PGFueT4+PihcbiAgc291cmNlc09iamVjdDogVFxuKTogT2JzZXJ2YWJsZTx7IFtLIGluIGtleW9mIFRdOiBPYnNlcnZlZFZhbHVlT2Y8VFtLXT4gfT47XG5cbi8qKlxuICogQ29tYmluZXMgbXVsdGlwbGUgT2JzZXJ2YWJsZXMgdG8gY3JlYXRlIGFuIE9ic2VydmFibGUgd2hvc2UgdmFsdWVzIGFyZVxuICogY2FsY3VsYXRlZCBmcm9tIHRoZSBsYXRlc3QgdmFsdWVzIG9mIGVhY2ggb2YgaXRzIGlucHV0IE9ic2VydmFibGVzLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5XaGVuZXZlciBhbnkgaW5wdXQgT2JzZXJ2YWJsZSBlbWl0cyBhIHZhbHVlLCBpdFxuICogY29tcHV0ZXMgYSBmb3JtdWxhIHVzaW5nIHRoZSBsYXRlc3QgdmFsdWVzIGZyb20gYWxsIHRoZSBpbnB1dHMsIHRoZW4gZW1pdHNcbiAqIHRoZSBvdXRwdXQgb2YgdGhhdCBmb3JtdWxhLjwvc3Bhbj5cbiAqXG4gKiAhW10oY29tYmluZUxhdGVzdC5wbmcpXG4gKlxuICogYGNvbWJpbmVMYXRlc3RgIGNvbWJpbmVzIHRoZSB2YWx1ZXMgZnJvbSBhbGwgdGhlIE9ic2VydmFibGVzIHBhc3NlZCBpbiB0aGVcbiAqIG9ic2VydmFibGVzIGFycmF5LiBUaGlzIGlzIGRvbmUgYnkgc3Vic2NyaWJpbmcgdG8gZWFjaCBPYnNlcnZhYmxlIGluIG9yZGVyIGFuZCxcbiAqIHdoZW5ldmVyIGFueSBPYnNlcnZhYmxlIGVtaXRzLCBjb2xsZWN0aW5nIGFuIGFycmF5IG9mIHRoZSBtb3N0IHJlY2VudFxuICogdmFsdWVzIGZyb20gZWFjaCBPYnNlcnZhYmxlLiBTbyBpZiB5b3UgcGFzcyBgbmAgT2JzZXJ2YWJsZXMgdG8gdGhpcyBvcGVyYXRvcixcbiAqIHRoZSByZXR1cm5lZCBPYnNlcnZhYmxlIHdpbGwgYWx3YXlzIGVtaXQgYW4gYXJyYXkgb2YgYG5gIHZhbHVlcywgaW4gYW4gb3JkZXJcbiAqIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG9yZGVyIG9mIHRoZSBwYXNzZWQgT2JzZXJ2YWJsZXMgKHRoZSB2YWx1ZSBmcm9tIHRoZSBmaXJzdCBPYnNlcnZhYmxlXG4gKiB3aWxsIGJlIGF0IGluZGV4IDAgb2YgdGhlIGFycmF5IGFuZCBzbyBvbikuXG4gKlxuICogU3RhdGljIHZlcnNpb24gb2YgYGNvbWJpbmVMYXRlc3RgIGFjY2VwdHMgYW4gYXJyYXkgb2YgT2JzZXJ2YWJsZXMuIE5vdGUgdGhhdCBhbiBhcnJheSBvZlxuICogT2JzZXJ2YWJsZXMgaXMgYSBnb29kIGNob2ljZSwgaWYgeW91IGRvbid0IGtub3cgYmVmb3JlaGFuZCBob3cgbWFueSBPYnNlcnZhYmxlc1xuICogeW91IHdpbGwgY29tYmluZS4gUGFzc2luZyBhbiBlbXB0eSBhcnJheSB3aWxsIHJlc3VsdCBpbiBhbiBPYnNlcnZhYmxlIHRoYXRcbiAqIGNvbXBsZXRlcyBpbW1lZGlhdGVseS5cbiAqXG4gKiBUbyBlbnN1cmUgdGhlIG91dHB1dCBhcnJheSBhbHdheXMgaGFzIHRoZSBzYW1lIGxlbmd0aCwgYGNvbWJpbmVMYXRlc3RgIHdpbGxcbiAqIGFjdHVhbGx5IHdhaXQgZm9yIGFsbCBpbnB1dCBPYnNlcnZhYmxlcyB0byBlbWl0IGF0IGxlYXN0IG9uY2UsXG4gKiBiZWZvcmUgaXQgc3RhcnRzIGVtaXR0aW5nIHJlc3VsdHMuIFRoaXMgbWVhbnMgaWYgc29tZSBPYnNlcnZhYmxlIGVtaXRzXG4gKiB2YWx1ZXMgYmVmb3JlIG90aGVyIE9ic2VydmFibGVzIHN0YXJ0ZWQgZW1pdHRpbmcsIGFsbCB0aGVzZSB2YWx1ZXMgYnV0IHRoZSBsYXN0XG4gKiB3aWxsIGJlIGxvc3QuIE9uIHRoZSBvdGhlciBoYW5kLCBpZiBzb21lIE9ic2VydmFibGUgZG9lcyBub3QgZW1pdCBhIHZhbHVlIGJ1dFxuICogY29tcGxldGVzLCByZXN1bHRpbmcgT2JzZXJ2YWJsZSB3aWxsIGNvbXBsZXRlIGF0IHRoZSBzYW1lIG1vbWVudCB3aXRob3V0XG4gKiBlbWl0dGluZyBhbnl0aGluZywgc2luY2UgaXQgd2lsbCBub3cgYmUgaW1wb3NzaWJsZSB0byBpbmNsdWRlIGEgdmFsdWUgZnJvbSB0aGVcbiAqIGNvbXBsZXRlZCBPYnNlcnZhYmxlIGluIHRoZSByZXN1bHRpbmcgYXJyYXkuIEFsc28sIGlmIHNvbWUgaW5wdXQgT2JzZXJ2YWJsZSBkb2VzXG4gKiBub3QgZW1pdCBhbnkgdmFsdWUgYW5kIG5ldmVyIGNvbXBsZXRlcywgYGNvbWJpbmVMYXRlc3RgIHdpbGwgYWxzbyBuZXZlciBlbWl0XG4gKiBhbmQgbmV2ZXIgY29tcGxldGUsIHNpbmNlLCBhZ2FpbiwgaXQgd2lsbCB3YWl0IGZvciBhbGwgc3RyZWFtcyB0byBlbWl0IHNvbWVcbiAqIHZhbHVlLlxuICpcbiAqIElmIGF0IGxlYXN0IG9uZSBPYnNlcnZhYmxlIHdhcyBwYXNzZWQgdG8gYGNvbWJpbmVMYXRlc3RgIGFuZCBhbGwgcGFzc2VkIE9ic2VydmFibGVzXG4gKiBlbWl0dGVkIHNvbWV0aGluZywgdGhlIHJlc3VsdGluZyBPYnNlcnZhYmxlIHdpbGwgY29tcGxldGUgd2hlbiBhbGwgY29tYmluZWRcbiAqIHN0cmVhbXMgY29tcGxldGUuIFNvIGV2ZW4gaWYgc29tZSBPYnNlcnZhYmxlIGNvbXBsZXRlcywgdGhlIHJlc3VsdCBvZlxuICogYGNvbWJpbmVMYXRlc3RgIHdpbGwgc3RpbGwgZW1pdCB2YWx1ZXMgd2hlbiBvdGhlciBPYnNlcnZhYmxlcyBkby4gSW4gY2FzZVxuICogb2YgYSBjb21wbGV0ZWQgT2JzZXJ2YWJsZSwgaXRzIHZhbHVlIGZyb20gbm93IG9uIHdpbGwgYWx3YXlzIGJlIHRoZSBsYXN0XG4gKiBlbWl0dGVkIHZhbHVlLiBPbiB0aGUgb3RoZXIgaGFuZCwgaWYgYW55IE9ic2VydmFibGUgZXJyb3JzLCBgY29tYmluZUxhdGVzdGBcbiAqIHdpbGwgZXJyb3IgaW1tZWRpYXRlbHkgYXMgd2VsbCwgYW5kIGFsbCBvdGhlciBPYnNlcnZhYmxlcyB3aWxsIGJlIHVuc3Vic2NyaWJlZC5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIENvbWJpbmUgdHdvIHRpbWVyIE9ic2VydmFibGVzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IHRpbWVyLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgZmlyc3RUaW1lciA9IHRpbWVyKDAsIDEwMDApOyAvLyBlbWl0IDAsIDEsIDIuLi4gYWZ0ZXIgZXZlcnkgc2Vjb25kLCBzdGFydGluZyBmcm9tIG5vd1xuICogY29uc3Qgc2Vjb25kVGltZXIgPSB0aW1lcig1MDAsIDEwMDApOyAvLyBlbWl0IDAsIDEsIDIuLi4gYWZ0ZXIgZXZlcnkgc2Vjb25kLCBzdGFydGluZyAwLDVzIGZyb20gbm93XG4gKiBjb25zdCBjb21iaW5lZFRpbWVycyA9IGNvbWJpbmVMYXRlc3QoW2ZpcnN0VGltZXIsIHNlY29uZFRpbWVyXSk7XG4gKiBjb21iaW5lZFRpbWVycy5zdWJzY3JpYmUodmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpKTtcbiAqIC8vIExvZ3NcbiAqIC8vIFswLCAwXSBhZnRlciAwLjVzXG4gKiAvLyBbMSwgMF0gYWZ0ZXIgMXNcbiAqIC8vIFsxLCAxXSBhZnRlciAxLjVzXG4gKiAvLyBbMiwgMV0gYWZ0ZXIgMnNcbiAqIGBgYFxuICpcbiAqIENvbWJpbmUgYSBkaWN0aW9uYXJ5IG9mIE9ic2VydmFibGVzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBkZWxheSwgc3RhcnRXaXRoLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgb2JzZXJ2YWJsZXMgPSB7XG4gKiAgIGE6IG9mKDEpLnBpcGUoZGVsYXkoMTAwMCksIHN0YXJ0V2l0aCgwKSksXG4gKiAgIGI6IG9mKDUpLnBpcGUoZGVsYXkoNTAwMCksIHN0YXJ0V2l0aCgwKSksXG4gKiAgIGM6IG9mKDEwKS5waXBlKGRlbGF5KDEwMDAwKSwgc3RhcnRXaXRoKDApKVxuICogfTtcbiAqIGNvbnN0IGNvbWJpbmVkID0gY29tYmluZUxhdGVzdChvYnNlcnZhYmxlcyk7XG4gKiBjb21iaW5lZC5zdWJzY3JpYmUodmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpKTtcbiAqIC8vIExvZ3NcbiAqIC8vIHsgYTogMCwgYjogMCwgYzogMCB9IGltbWVkaWF0ZWx5XG4gKiAvLyB7IGE6IDEsIGI6IDAsIGM6IDAgfSBhZnRlciAxc1xuICogLy8geyBhOiAxLCBiOiA1LCBjOiAwIH0gYWZ0ZXIgNXNcbiAqIC8vIHsgYTogMSwgYjogNSwgYzogMTAgfSBhZnRlciAxMHNcbiAqIGBgYFxuICpcbiAqIENvbWJpbmUgYW4gYXJyYXkgb2YgT2JzZXJ2YWJsZXNcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIGRlbGF5LCBzdGFydFdpdGgsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBvYnNlcnZhYmxlcyA9IFsxLCA1LCAxMF0ubWFwKFxuICogICBuID0+IG9mKG4pLnBpcGUoXG4gKiAgICAgZGVsYXkobiAqIDEwMDApLCAvLyBlbWl0IDAgYW5kIHRoZW4gZW1pdCBuIGFmdGVyIG4gc2Vjb25kc1xuICogICAgIHN0YXJ0V2l0aCgwKVxuICogICApXG4gKiApO1xuICogY29uc3QgY29tYmluZWQgPSBjb21iaW5lTGF0ZXN0KG9ic2VydmFibGVzKTtcbiAqIGNvbWJpbmVkLnN1YnNjcmliZSh2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSkpO1xuICogLy8gTG9nc1xuICogLy8gWzAsIDAsIDBdIGltbWVkaWF0ZWx5XG4gKiAvLyBbMSwgMCwgMF0gYWZ0ZXIgMXNcbiAqIC8vIFsxLCA1LCAwXSBhZnRlciA1c1xuICogLy8gWzEsIDUsIDEwXSBhZnRlciAxMHNcbiAqIGBgYFxuICpcbiAqIFVzZSBtYXAgb3BlcmF0b3IgdG8gZHluYW1pY2FsbHkgY2FsY3VsYXRlIHRoZSBCb2R5LU1hc3MgSW5kZXhcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIGNvbWJpbmVMYXRlc3QsIG1hcCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHdlaWdodCA9IG9mKDcwLCA3MiwgNzYsIDc5LCA3NSk7XG4gKiBjb25zdCBoZWlnaHQgPSBvZigxLjc2LCAxLjc3LCAxLjc4KTtcbiAqIGNvbnN0IGJtaSA9IGNvbWJpbmVMYXRlc3QoW3dlaWdodCwgaGVpZ2h0XSkucGlwZShcbiAqICAgbWFwKChbdywgaF0pID0+IHcgLyAoaCAqIGgpKSxcbiAqICk7XG4gKiBibWkuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coJ0JNSSBpcyAnICsgeCkpO1xuICpcbiAqIC8vIFdpdGggb3V0cHV0IHRvIGNvbnNvbGU6XG4gKiAvLyBCTUkgaXMgMjQuMjEyMjkzMzg4NDI5NzUzXG4gKiAvLyBCTUkgaXMgMjMuOTM5NDgwOTkyMDUyMDlcbiAqIC8vIEJNSSBpcyAyMy42NzEyNTM2Mjk1OTIyMjJcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGNvbWJpbmVMYXRlc3RBbGx9XG4gKiBAc2VlIHtAbGluayBtZXJnZX1cbiAqIEBzZWUge0BsaW5rIHdpdGhMYXRlc3RGcm9tfVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZUlucHV0fSBbb2JzZXJ2YWJsZXNdIEFuIGFycmF5IG9mIGlucHV0IE9ic2VydmFibGVzIHRvIGNvbWJpbmUgd2l0aCBlYWNoIG90aGVyLlxuICogQW4gYXJyYXkgb2YgT2JzZXJ2YWJsZXMgbXVzdCBiZSBnaXZlbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbcHJvamVjdF0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gdG8gcHJvamVjdCB0aGUgdmFsdWVzIGZyb21cbiAqIHRoZSBjb21iaW5lZCBsYXRlc3QgdmFsdWVzIGludG8gYSBuZXcgdmFsdWUgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlLlxuICogQHBhcmFtIHtTY2hlZHVsZXJMaWtlfSBbc2NoZWR1bGVyPW51bGxdIFRoZSB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gdG8gdXNlIGZvciBzdWJzY3JpYmluZyB0b1xuICogZWFjaCBpbnB1dCBPYnNlcnZhYmxlLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSBvZiBwcm9qZWN0ZWQgdmFsdWVzIGZyb20gdGhlIG1vc3QgcmVjZW50XG4gKiB2YWx1ZXMgZnJvbSBlYWNoIGlucHV0IE9ic2VydmFibGUsIG9yIGFuIGFycmF5IG9mIHRoZSBtb3N0IHJlY2VudCB2YWx1ZXMgZnJvbVxuICogZWFjaCBpbnB1dCBPYnNlcnZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4sIFI+KC4uLmFyZ3M6IGFueVtdKTogT2JzZXJ2YWJsZTxSPiB8IE9ic2VydmFibGU8T2JzZXJ2ZWRWYWx1ZU9mPE8+W10+IHtcbiAgY29uc3Qgc2NoZWR1bGVyID0gcG9wU2NoZWR1bGVyKGFyZ3MpO1xuICBjb25zdCByZXN1bHRTZWxlY3RvciA9IHBvcFJlc3VsdFNlbGVjdG9yKGFyZ3MpO1xuXG4gIGNvbnN0IHsgYXJnczogb2JzZXJ2YWJsZXMsIGtleXMgfSA9IGFyZ3NBcmdBcnJheU9yT2JqZWN0KGFyZ3MpO1xuXG4gIGlmIChvYnNlcnZhYmxlcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBJZiBubyBvYnNlcnZhYmxlcyBhcmUgcGFzc2VkLCBvciBzb21lb25lIGhhcyBwYXNzZWQgYW4gZW1wdHkgYXJyYXlcbiAgICAvLyBvZiBvYnNlcnZhYmxlcywgb3IgZXZlbiBhbiBlbXB0eSBvYmplY3QgUE9KTywgd2UgbmVlZCB0byBqdXN0XG4gICAgLy8gY29tcGxldGUgKEVNUFRZKSwgYnV0IHdlIGhhdmUgdG8gaG9ub3IgdGhlIHNjaGVkdWxlciBwcm92aWRlZCBpZiBhbnkuXG4gICAgcmV0dXJuIGZyb20oW10sIHNjaGVkdWxlciBhcyBhbnkpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbmV3IE9ic2VydmFibGU8T2JzZXJ2ZWRWYWx1ZU9mPE8+W10+KFxuICAgIGNvbWJpbmVMYXRlc3RJbml0KFxuICAgICAgb2JzZXJ2YWJsZXMgYXMgT2JzZXJ2YWJsZUlucHV0PE9ic2VydmVkVmFsdWVPZjxPPj5bXSxcbiAgICAgIHNjaGVkdWxlcixcbiAgICAgIGtleXNcbiAgICAgICAgPyAvLyBBIGhhbmRsZXIgZm9yIHNjcnViYmluZyB0aGUgYXJyYXkgb2YgYXJncyBpbnRvIGEgZGljdGlvbmFyeS5cbiAgICAgICAgICAodmFsdWVzKSA9PiBjcmVhdGVPYmplY3Qoa2V5cywgdmFsdWVzKVxuICAgICAgICA6IC8vIEEgcGFzc3Rocm91Z2ggdG8ganVzdCByZXR1cm4gdGhlIGFycmF5XG4gICAgICAgICAgaWRlbnRpdHlcbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIHJlc3VsdFNlbGVjdG9yID8gKHJlc3VsdC5waXBlKG1hcE9uZU9yTWFueUFyZ3MocmVzdWx0U2VsZWN0b3IpKSBhcyBPYnNlcnZhYmxlPFI+KSA6IHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3RJbml0KFxuICBvYnNlcnZhYmxlczogT2JzZXJ2YWJsZUlucHV0PGFueT5bXSxcbiAgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSxcbiAgdmFsdWVUcmFuc2Zvcm06ICh2YWx1ZXM6IGFueVtdKSA9PiBhbnkgPSBpZGVudGl0eVxuKSB7XG4gIHJldHVybiAoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB7XG4gICAgLy8gVGhlIG91dGVyIHN1YnNjcmlwdGlvbi4gV2UncmUgY2FwdHVyaW5nIHRoaXMgaW4gYSBmdW5jdGlvblxuICAgIC8vIGJlY2F1c2Ugd2UgbWF5IGhhdmUgdG8gc2NoZWR1bGUgaXQuXG4gICAgbWF5YmVTY2hlZHVsZShcbiAgICAgIHNjaGVkdWxlcixcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IG9ic2VydmFibGVzO1xuICAgICAgICAvLyBBIHN0b3JlIGZvciB0aGUgdmFsdWVzIGVhY2ggb2JzZXJ2YWJsZSBoYXMgZW1pdHRlZCBzbyBmYXIuIFdlIG1hdGNoIG9ic2VydmFibGUgdG8gdmFsdWUgb24gaW5kZXguXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIGN1cnJlbnRseSBhY3RpdmUgc3Vic2NyaXB0aW9ucywgYXMgdGhleSBjb21wbGV0ZSwgd2UgZGVjcmVtZW50IHRoaXMgbnVtYmVyIHRvIHNlZSBpZlxuICAgICAgICAvLyB3ZSBhcmUgYWxsIGRvbmUgY29tYmluaW5nIHZhbHVlcywgc28gd2UgY2FuIGNvbXBsZXRlIHRoZSByZXN1bHQuXG4gICAgICAgIGxldCBhY3RpdmUgPSBsZW5ndGg7XG4gICAgICAgIC8vIFRoZSBudW1iZXIgb2YgaW5uZXIgc291cmNlcyB0aGF0IHN0aWxsIGhhdmVuJ3QgZW1pdHRlZCB0aGUgZmlyc3QgdmFsdWVcbiAgICAgICAgLy8gV2UgbmVlZCB0byB0cmFjayB0aGlzIGJlY2F1c2UgYWxsIHNvdXJjZXMgbmVlZCB0byBlbWl0IG9uZSB2YWx1ZSBpbiBvcmRlclxuICAgICAgICAvLyB0byBzdGFydCBlbWl0dGluZyB2YWx1ZXMuXG4gICAgICAgIGxldCByZW1haW5pbmdGaXJzdFZhbHVlcyA9IGxlbmd0aDtcbiAgICAgICAgLy8gVGhlIGxvb3AgdG8ga2ljayBvZmYgc3Vic2NyaXB0aW9uLiBXZSdyZSBrZXlpbmcgZXZlcnl0aGluZyBvbiBpbmRleCBgaWAgdG8gcmVsYXRlIHRoZSBvYnNlcnZhYmxlcyBwYXNzZWRcbiAgICAgICAgLy8gaW4gdG8gdGhlIHNsb3QgaW4gdGhlIG91dHB1dCBhcnJheSBvciB0aGUga2V5IGluIHRoZSBhcnJheSBvZiBrZXlzIGluIHRoZSBvdXRwdXQgZGljdGlvbmFyeS5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIG1heWJlU2NoZWR1bGUoXG4gICAgICAgICAgICBzY2hlZHVsZXIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGZyb20ob2JzZXJ2YWJsZXNbaV0sIHNjaGVkdWxlciBhcyBhbnkpO1xuICAgICAgICAgICAgICBsZXQgaGFzRmlyc3RWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihcbiAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIsXG4gICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB3ZSBnZXQgYSB2YWx1ZSwgcmVjb3JkIGl0IGluIG91ciBzZXQgb2YgdmFsdWVzLlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNGaXJzdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgdmFsdWUsIHJlY29yZCB0aGF0LlxuICAgICAgICAgICAgICAgICAgICAgIGhhc0ZpcnN0VmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0ZpcnN0VmFsdWVzLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZW1haW5pbmdGaXJzdFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFdlJ3JlIG5vdCB3YWl0aW5nIGZvciBhbnkgbW9yZVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZpcnN0IHZhbHVlcywgc28gd2UgY2FuIGVtaXQhXG4gICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlVHJhbnNmb3JtKHZhbHVlcy5zbGljZSgpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghLS1hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IGNvbXBsZXRlIHRoZSByZXN1bHQgaWYgd2UgaGF2ZSBubyBtb3JlIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGlubmVyIG9ic2VydmFibGVzLlxuICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJzY3JpYmVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN1YnNjcmliZXJcbiAgICApO1xuICB9O1xufVxuXG4vKipcbiAqIEEgc21hbGwgdXRpbGl0eSB0byBoYW5kbGUgdGhlIGNvdXBsZSBvZiBsb2NhdGlvbnMgd2hlcmUgd2Ugd2FudCB0byBzY2hlZHVsZSBpZiBhIHNjaGVkdWxlciB3YXMgcHJvdmlkZWQsXG4gKiBidXQgd2UgZG9uJ3QgaWYgdGhlcmUgd2FzIG5vIHNjaGVkdWxlci5cbiAqL1xuZnVuY3Rpb24gbWF5YmVTY2hlZHVsZShzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UgfCB1bmRlZmluZWQsIGV4ZWN1dGU6ICgpID0+IHZvaWQsIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKSB7XG4gIGlmIChzY2hlZHVsZXIpIHtcbiAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaXB0aW9uLCBzY2hlZHVsZXIsIGV4ZWN1dGUpO1xuICB9IGVsc2Uge1xuICAgIGV4ZWN1dGUoKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcblxuLyoqXG4gKiBBIHByb2Nlc3MgZW1ib2R5aW5nIHRoZSBnZW5lcmFsIFwibWVyZ2VcIiBzdHJhdGVneS4gVGhpcyBpcyB1c2VkIGluXG4gKiBgbWVyZ2VNYXBgIGFuZCBgbWVyZ2VTY2FuYCBiZWNhdXNlIHRoZSBsb2dpYyBpcyBvdGhlcndpc2UgbmVhcmx5IGlkZW50aWNhbC5cbiAqIEBwYXJhbSBzb3VyY2UgVGhlIG9yaWdpbmFsIHNvdXJjZSBvYnNlcnZhYmxlXG4gKiBAcGFyYW0gc3Vic2NyaWJlciBUaGUgY29uc3VtZXIgc3Vic2NyaWJlclxuICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3Rpb24gZnVuY3Rpb24gdG8gZ2V0IG91ciBpbm5lciBzb3VyY2VzXG4gKiBAcGFyYW0gY29uY3VycmVudCBUaGUgbnVtYmVyIG9mIGNvbmN1cnJlbnQgaW5uZXIgc3Vic2NyaXB0aW9uc1xuICogQHBhcmFtIG9uQmVmb3JlTmV4dCBBZGRpdGlvbmFsIGxvZ2ljIHRvIGFwcGx5IGJlZm9yZSBuZXh0aW5nIHRvIG91ciBjb25zdW1lclxuICogQHBhcmFtIGV4cGFuZCBJZiBgdHJ1ZWAgdGhpcyB3aWxsIHBlcmZvcm0gYW4gXCJleHBhbmRcIiBzdHJhdGVneSwgd2hpY2ggZGlmZmVycyBvbmx5XG4gKiBpbiB0aGF0IGl0IHJlY3Vyc2VzLCBhbmQgdGhlIGlubmVyIHN1YnNjcmlwdGlvbiBtdXN0IGJlIHNjaGVkdWxlLWFibGUuXG4gKiBAcGFyYW0gaW5uZXJTdWJTY2hlZHVsZXIgQSBzY2hlZHVsZXIgdG8gdXNlIHRvIHNjaGVkdWxlIGlubmVyIHN1YnNjcmlwdGlvbnMsXG4gKiB0aGlzIGlzIHRvIHN1cHBvcnQgdGhlIGV4cGFuZCBzdHJhdGVneSwgbW9zdGx5LCBhbmQgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSW50ZXJuYWxzPFQsIFI+KFxuICBzb3VyY2U6IE9ic2VydmFibGU8VD4sXG4gIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4sXG4gIHByb2plY3Q6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gT2JzZXJ2YWJsZUlucHV0PFI+LFxuICBjb25jdXJyZW50OiBudW1iZXIsXG4gIG9uQmVmb3JlTmV4dD86IChpbm5lclZhbHVlOiBSKSA9PiB2b2lkLFxuICBleHBhbmQ/OiBib29sZWFuLFxuICBpbm5lclN1YlNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UsXG4gIGFkZGl0aW9uYWxGaW5hbGl6ZXI/OiAoKSA9PiB2b2lkXG4pIHtcbiAgLy8gQnVmZmVyZWQgdmFsdWVzLCBpbiB0aGUgZXZlbnQgb2YgZ29pbmcgb3ZlciBvdXIgY29uY3VycmVuY3kgbGltaXRcbiAgY29uc3QgYnVmZmVyOiBUW10gPSBbXTtcbiAgLy8gVGhlIG51bWJlciBvZiBhY3RpdmUgaW5uZXIgc3Vic2NyaXB0aW9ucy5cbiAgbGV0IGFjdGl2ZSA9IDA7XG4gIC8vIEFuIGluZGV4IHRvIHBhc3MgdG8gb3VyIGFjY3VtdWxhdG9yIGZ1bmN0aW9uXG4gIGxldCBpbmRleCA9IDA7XG4gIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBvdXRlciBzb3VyY2UgaGFzIGNvbXBsZXRlZC5cbiAgbGV0IGlzQ29tcGxldGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB3ZSBjYW4gY29tcGxldGUgb3VyIHJlc3VsdCBvciBub3QuXG4gICAqL1xuICBjb25zdCBjaGVja0NvbXBsZXRlID0gKCkgPT4ge1xuICAgIC8vIElmIHRoZSBvdXRlciBoYXMgY29tcGxldGVkLCBhbmQgbm90aGluZyBpcyBsZWZ0IGluIHRoZSBidWZmZXIsXG4gICAgLy8gYW5kIHdlIGRvbid0IGhhdmUgYW55IGFjdGl2ZSBpbm5lciBzdWJzY3JpcHRpb25zLCB0aGVuIHdlIGNhblxuICAgIC8vIEVtaXQgdGhlIHN0YXRlIGFuZCBjb21wbGV0ZS5cbiAgICBpZiAoaXNDb21wbGV0ZSAmJiAhYnVmZmVyLmxlbmd0aCAmJiAhYWN0aXZlKSB7XG4gICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIElmIHdlJ3JlIHVuZGVyIG91ciBjb25jdXJyZW5jeSBsaW1pdCwganVzdCBzdGFydCB0aGUgaW5uZXIgc3Vic2NyaXB0aW9uLCBvdGhlcndpc2UgYnVmZmVyIGFuZCB3YWl0LlxuICBjb25zdCBvdXRlck5leHQgPSAodmFsdWU6IFQpID0+IChhY3RpdmUgPCBjb25jdXJyZW50ID8gZG9Jbm5lclN1Yih2YWx1ZSkgOiBidWZmZXIucHVzaCh2YWx1ZSkpO1xuXG4gIGNvbnN0IGRvSW5uZXJTdWIgPSAodmFsdWU6IFQpID0+IHtcbiAgICAvLyBJZiB3ZSdyZSBleHBhbmRpbmcsIHdlIG5lZWQgdG8gZW1pdCB0aGUgb3V0ZXIgdmFsdWVzIGFuZCB0aGUgaW5uZXIgdmFsdWVzXG4gICAgLy8gYXMgdGhlIGlubmVycyB3aWxsIFwiYmVjb21lIG91dGVyc1wiIGluIGEgd2F5IGFzIHRoZXkgYXJlIHJlY3Vyc2l2ZWx5IGZlZFxuICAgIC8vIGJhY2sgdG8gdGhlIHByb2plY3Rpb24gbWVjaGFuaXNtLlxuICAgIGV4cGFuZCAmJiBzdWJzY3JpYmVyLm5leHQodmFsdWUgYXMgYW55KTtcblxuICAgIC8vIEluY3JlbWVudCB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBzdWJzY3JpcHRpb25zIHNvIHdlIGNhbiB0cmFjayBpdFxuICAgIC8vIGFnYWluc3Qgb3VyIGNvbmN1cnJlbmN5IGxpbWl0IGxhdGVyLlxuICAgIGFjdGl2ZSsrO1xuXG4gICAgLy8gQSBmbGFnIHVzZWQgdG8gc2hvdyB0aGF0IHRoZSBpbm5lciBvYnNlcnZhYmxlIGNvbXBsZXRlZC5cbiAgICAvLyBUaGlzIGlzIGNoZWNrZWQgZHVyaW5nIGZpbmFsaXphdGlvbiB0byBzZWUgaWYgd2Ugc2hvdWxkXG4gICAgLy8gbW92ZSB0byB0aGUgbmV4dCBpdGVtIGluIHRoZSBidWZmZXIsIGlmIHRoZXJlIGlzIG9uLlxuICAgIGxldCBpbm5lckNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAvLyBTdGFydCBvdXIgaW5uZXIgc3Vic2NyaXB0aW9uLlxuICAgIGlubmVyRnJvbShwcm9qZWN0KHZhbHVlLCBpbmRleCsrKSkuc3Vic2NyaWJlKFxuICAgICAgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKFxuICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICAoaW5uZXJWYWx1ZSkgPT4ge1xuICAgICAgICAgIC8vIGBtZXJnZVNjYW5gIGhhcyBhZGRpdGlvbmFsIGhhbmRsaW5nIGhlcmUuIEZvciBleGFtcGxlXG4gICAgICAgICAgLy8gdGFraW5nIHRoZSBpbm5lciB2YWx1ZSBhbmQgdXBkYXRpbmcgc3RhdGUuXG4gICAgICAgICAgb25CZWZvcmVOZXh0Py4oaW5uZXJWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAoZXhwYW5kKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBleHBhbmRpbmcsIHRoZW4ganVzdCByZWN1cnNlIGJhY2sgdG8gb3VyIG91dGVyXG4gICAgICAgICAgICAvLyBoYW5kbGVyLiBJdCB3aWxsIGVtaXQgdGhlIHZhbHVlIGZpcnN0IHRoaW5nLlxuICAgICAgICAgICAgb3V0ZXJOZXh0KGlubmVyVmFsdWUgYXMgYW55KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBlbWl0IHRoZSBpbm5lciB2YWx1ZS5cbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChpbm5lclZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAvLyBGbGFnIHRoYXQgd2UgaGF2ZSBjb21wbGV0ZWQsIHNvIHdlIGtub3cgdG8gY2hlY2sgdGhlIGJ1ZmZlclxuICAgICAgICAgIC8vIGR1cmluZyBmaW5hbGl6YXRpb24uXG4gICAgICAgICAgaW5uZXJDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIEVycm9ycyBhcmUgcGFzc2VkIHRvIHRoZSBkZXN0aW5hdGlvbi5cbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gRHVyaW5nIGZpbmFsaXphdGlvbiwgaWYgdGhlIGlubmVyIGNvbXBsZXRlZCAoaXQgd2Fzbid0IGVycm9yZWQgb3JcbiAgICAgICAgICAvLyBjYW5jZWxsZWQpLCB0aGVuIHdlIHdhbnQgdG8gdHJ5IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGJ1ZmZlciBpZlxuICAgICAgICAgIC8vIHRoZXJlIGlzIG9uZS5cbiAgICAgICAgICBpZiAoaW5uZXJDb21wbGV0ZSkge1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byB3cmFwIHRoaXMgaW4gYSB0cnkvY2F0Y2ggYmVjYXVzZSBpdCBoYXBwZW5zIGR1cmluZ1xuICAgICAgICAgICAgLy8gZmluYWxpemF0aW9uLCBwb3NzaWJseSBhc3luY2hyb25vdXNseSwgYW5kIHdlIHdhbnQgdG8gcGFzc1xuICAgICAgICAgICAgLy8gYW55IGVycm9ycyB0aGF0IGhhcHBlbiAobGlrZSBpbiBhIHByb2plY3Rpb24gZnVuY3Rpb24pIHRvXG4gICAgICAgICAgICAvLyB0aGUgb3V0ZXIgU3Vic2NyaWJlci5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIElOTkVSIFNPVVJDRSBDT01QTEVURVxuICAgICAgICAgICAgICAvLyBEZWNyZW1lbnQgdGhlIGFjdGl2ZSBjb3VudCB0byBlbnN1cmUgdGhhdCB0aGUgbmV4dCB0aW1lXG4gICAgICAgICAgICAgIC8vIHdlIHRyeSB0byBjYWxsIGBkb0lubmVyU3ViYCwgdGhlIG51bWJlciBpcyBhY2N1cmF0ZS5cbiAgICAgICAgICAgICAgYWN0aXZlLS07XG4gICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgbW9yZSB2YWx1ZXMgaW4gdGhlIGJ1ZmZlciwgdHJ5IHRvIHByb2Nlc3MgdGhvc2VcbiAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgY2FsbCB3aWxsIGluY3JlbWVudCBgYWN0aXZlYCBhaGVhZCBvZiB0aGVcbiAgICAgICAgICAgICAgLy8gbmV4dCBjb25kaXRpb25hbCwgaWYgdGhlcmUgd2VyZSBhbnkgbW9yZSBpbm5lciBzdWJzY3JpcHRpb25zXG4gICAgICAgICAgICAgIC8vIHRvIHN0YXJ0LlxuICAgICAgICAgICAgICB3aGlsZSAoYnVmZmVyLmxlbmd0aCAmJiBhY3RpdmUgPCBjb25jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyZWRWYWx1ZSA9IGJ1ZmZlci5zaGlmdCgpITtcbiAgICAgICAgICAgICAgICAvLyBQYXJ0aWN1bGFybHkgZm9yIGBleHBhbmRgLCB3ZSBuZWVkIHRvIGNoZWNrIHRvIHNlZSBpZiBhIHNjaGVkdWxlciB3YXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAvLyBmb3Igd2hlbiB3ZSB3YW50IHRvIHN0YXJ0IG91ciBpbm5lciBzdWJzY3JpcHRpb24uIE90aGVyd2lzZSwgd2UganVzdCBzdGFydFxuICAgICAgICAgICAgICAgIC8vIGFyZSBuZXh0IGlubmVyIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgICAgICAgICBpZiAoaW5uZXJTdWJTY2hlZHVsZXIpIHtcbiAgICAgICAgICAgICAgICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBpbm5lclN1YlNjaGVkdWxlciwgKCkgPT4gZG9Jbm5lclN1YihidWZmZXJlZFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRvSW5uZXJTdWIoYnVmZmVyZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBjYW4gY29tcGxldGUsIGFuZCBjb21wbGV0ZSBpZiBzby5cbiAgICAgICAgICAgICAgY2hlY2tDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIC8vIFN1YnNjcmliZSB0byBvdXIgc291cmNlIG9ic2VydmFibGUuXG4gIHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIG91dGVyTmV4dCwgKCkgPT4ge1xuICAgICAgLy8gT3V0ZXIgY29tcGxldGVkLCBtYWtlIGEgbm90ZSBvZiBpdCwgYW5kIGNoZWNrIHRvIHNlZSBpZiB3ZSBjYW4gY29tcGxldGUgZXZlcnl0aGluZy5cbiAgICAgIGlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgY2hlY2tDb21wbGV0ZSgpO1xuICAgIH0pXG4gICk7XG5cbiAgLy8gQWRkaXRpb25hbCBmaW5hbGl6YXRpb24gKGZvciB3aGVuIHRoZSBkZXN0aW5hdGlvbiBpcyB0b3JuIGRvd24pLlxuICAvLyBPdGhlciBmaW5hbGl6YXRpb24gaXMgYWRkZWQgaW1wbGljaXRseSB2aWEgc3Vic2NyaXB0aW9uIGFib3ZlLlxuICByZXR1cm4gKCkgPT4ge1xuICAgIGFkZGl0aW9uYWxGaW5hbGl6ZXI/LigpO1xuICB9O1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgT3BlcmF0b3JGdW5jdGlvbiwgT2JzZXJ2ZWRWYWx1ZU9mIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9tYXAnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBtZXJnZUludGVybmFscyB9IGZyb20gJy4vbWVyZ2VJbnRlcm5hbHMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTWFwPFQsIE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oXG4gIHByb2plY3Q6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gTyxcbiAgY29uY3VycmVudD86IG51bWJlclxuKTogT3BlcmF0b3JGdW5jdGlvbjxULCBPYnNlcnZlZFZhbHVlT2Y8Tz4+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgcmVzdWx0U2VsZWN0b3JgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBhbiBpbm5lciBgbWFwYCBpbnN0ZWFkLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9yZXN1bHRTZWxlY3RvciAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTWFwPFQsIE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oXG4gIHByb2plY3Q6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gTyxcbiAgcmVzdWx0U2VsZWN0b3I6IHVuZGVmaW5lZCxcbiAgY29uY3VycmVudD86IG51bWJlclxuKTogT3BlcmF0b3JGdW5jdGlvbjxULCBPYnNlcnZlZFZhbHVlT2Y8Tz4+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgcmVzdWx0U2VsZWN0b3JgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBhbiBpbm5lciBgbWFwYCBpbnN0ZWFkLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9yZXN1bHRTZWxlY3RvciAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTWFwPFQsIFIsIE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oXG4gIHByb2plY3Q6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gTyxcbiAgcmVzdWx0U2VsZWN0b3I6IChvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBPYnNlcnZlZFZhbHVlT2Y8Tz4sIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyKSA9PiBSLFxuICBjb25jdXJyZW50PzogbnVtYmVyXG4pOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+O1xuLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuLyoqXG4gKiBQcm9qZWN0cyBlYWNoIHNvdXJjZSB2YWx1ZSB0byBhbiBPYnNlcnZhYmxlIHdoaWNoIGlzIG1lcmdlZCBpbiB0aGUgb3V0cHV0XG4gKiBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5NYXBzIGVhY2ggdmFsdWUgdG8gYW4gT2JzZXJ2YWJsZSwgdGhlbiBmbGF0dGVucyBhbGwgb2ZcbiAqIHRoZXNlIGlubmVyIE9ic2VydmFibGVzIHVzaW5nIHtAbGluayBtZXJnZUFsbH0uPC9zcGFuPlxuICpcbiAqICFbXShtZXJnZU1hcC5wbmcpXG4gKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgaXRlbXMgYmFzZWQgb24gYXBwbHlpbmcgYSBmdW5jdGlvbiB0aGF0IHlvdVxuICogc3VwcGx5IHRvIGVhY2ggaXRlbSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgd2hlcmUgdGhhdCBmdW5jdGlvblxuICogcmV0dXJucyBhbiBPYnNlcnZhYmxlLCBhbmQgdGhlbiBtZXJnaW5nIHRob3NlIHJlc3VsdGluZyBPYnNlcnZhYmxlcyBhbmRcbiAqIGVtaXR0aW5nIHRoZSByZXN1bHRzIG9mIHRoaXMgbWVyZ2VyLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBNYXAgYW5kIGZsYXR0ZW4gZWFjaCBsZXR0ZXIgdG8gYW4gT2JzZXJ2YWJsZSB0aWNraW5nIGV2ZXJ5IDEgc2Vjb25kXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBtZXJnZU1hcCwgaW50ZXJ2YWwsIG1hcCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGxldHRlcnMgPSBvZignYScsICdiJywgJ2MnKTtcbiAqIGNvbnN0IHJlc3VsdCA9IGxldHRlcnMucGlwZShcbiAqICAgbWVyZ2VNYXAoeCA9PiBpbnRlcnZhbCgxMDAwKS5waXBlKG1hcChpID0+IHggKyBpKSkpXG4gKiApO1xuICpcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gUmVzdWx0cyBpbiB0aGUgZm9sbG93aW5nOlxuICogLy8gYTBcbiAqIC8vIGIwXG4gKiAvLyBjMFxuICogLy8gYTFcbiAqIC8vIGIxXG4gKiAvLyBjMVxuICogLy8gY29udGludWVzIHRvIGxpc3QgYSwgYiwgYyBldmVyeSBzZWNvbmQgd2l0aCByZXNwZWN0aXZlIGFzY2VuZGluZyBpbnRlZ2Vyc1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwfVxuICogQHNlZSB7QGxpbmsgZXhoYXVzdE1hcH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VBbGx9XG4gKiBAc2VlIHtAbGluayBtZXJnZU1hcFRvfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VTY2FufVxuICogQHNlZSB7QGxpbmsgc3dpdGNoTWFwfVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWU6IFQsID9pbmRleDogbnVtYmVyKTogT2JzZXJ2YWJsZUlucHV0fSBwcm9qZWN0IEEgZnVuY3Rpb25cbiAqIHRoYXQsIHdoZW4gYXBwbGllZCB0byBhbiBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCByZXR1cm5zIGFuXG4gKiBPYnNlcnZhYmxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtjb25jdXJyZW50PUluZmluaXR5XSBNYXhpbXVtIG51bWJlciBvZiBpbnB1dFxuICogT2JzZXJ2YWJsZXMgYmVpbmcgc3Vic2NyaWJlZCB0byBjb25jdXJyZW50bHkuXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgcmVzdWx0IG9mXG4gKiBhcHBseWluZyB0aGUgcHJvamVjdGlvbiBmdW5jdGlvbiAoYW5kIHRoZSBvcHRpb25hbCBkZXByZWNhdGVkXG4gKiBgcmVzdWx0U2VsZWN0b3JgKSB0byBlYWNoIGl0ZW0gZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUgYW5kIG1lcmdpbmdcbiAqIHRoZSByZXN1bHRzIG9mIHRoZSBPYnNlcnZhYmxlcyBvYnRhaW5lZCBmcm9tIHRoaXMgdHJhbnNmb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1hcDxULCBSLCBPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KFxuICBwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE8sXG4gIHJlc3VsdFNlbGVjdG9yPzogKChvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBPYnNlcnZlZFZhbHVlT2Y8Tz4sIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyKSA9PiBSKSB8IG51bWJlcixcbiAgY29uY3VycmVudDogbnVtYmVyID0gSW5maW5pdHlcbik6IE9wZXJhdG9yRnVuY3Rpb248VCwgT2JzZXJ2ZWRWYWx1ZU9mPE8+IHwgUj4ge1xuICBpZiAoaXNGdW5jdGlvbihyZXN1bHRTZWxlY3RvcikpIHtcbiAgICAvLyBERVBSRUNBVEVEIFBBVEhcbiAgICByZXR1cm4gbWVyZ2VNYXAoKGEsIGkpID0+IG1hcCgoYjogYW55LCBpaTogbnVtYmVyKSA9PiByZXN1bHRTZWxlY3RvcihhLCBiLCBpLCBpaSkpKGlubmVyRnJvbShwcm9qZWN0KGEsIGkpKSksIGNvbmN1cnJlbnQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiByZXN1bHRTZWxlY3RvciA9PT0gJ251bWJlcicpIHtcbiAgICBjb25jdXJyZW50ID0gcmVzdWx0U2VsZWN0b3I7XG4gIH1cblxuICByZXR1cm4gb3BlcmF0ZSgoc291cmNlLCBzdWJzY3JpYmVyKSA9PiBtZXJnZUludGVybmFscyhzb3VyY2UsIHN1YnNjcmliZXIsIHByb2plY3QsIGNvbmN1cnJlbnQpKTtcbn1cbiIsICJpbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJy4vbWVyZ2VNYXAnO1xuaW1wb3J0IHsgaWRlbnRpdHkgfSBmcm9tICcuLi91dGlsL2lkZW50aXR5JztcbmltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24sIE9ic2VydmFibGVJbnB1dCwgT2JzZXJ2ZWRWYWx1ZU9mIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgaGlnaGVyLW9yZGVyIE9ic2VydmFibGUgaW50byBhIGZpcnN0LW9yZGVyIE9ic2VydmFibGUgd2hpY2hcbiAqIGNvbmN1cnJlbnRseSBkZWxpdmVycyBhbGwgdmFsdWVzIHRoYXQgYXJlIGVtaXR0ZWQgb24gdGhlIGlubmVyIE9ic2VydmFibGVzLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5GbGF0dGVucyBhbiBPYnNlcnZhYmxlLW9mLU9ic2VydmFibGVzLjwvc3Bhbj5cbiAqXG4gKiAhW10obWVyZ2VBbGwucG5nKVxuICpcbiAqIGBtZXJnZUFsbGAgc3Vic2NyaWJlcyB0byBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgT2JzZXJ2YWJsZXMsIGFsc28ga25vd24gYXNcbiAqIGEgaGlnaGVyLW9yZGVyIE9ic2VydmFibGUuIEVhY2ggdGltZSBpdCBvYnNlcnZlcyBvbmUgb2YgdGhlc2UgZW1pdHRlZCBpbm5lclxuICogT2JzZXJ2YWJsZXMsIGl0IHN1YnNjcmliZXMgdG8gdGhhdCBhbmQgZGVsaXZlcnMgYWxsIHRoZSB2YWx1ZXMgZnJvbSB0aGVcbiAqIGlubmVyIE9ic2VydmFibGUgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlLiBUaGUgb3V0cHV0IE9ic2VydmFibGUgb25seVxuICogY29tcGxldGVzIG9uY2UgYWxsIGlubmVyIE9ic2VydmFibGVzIGhhdmUgY29tcGxldGVkLiBBbnkgZXJyb3IgZGVsaXZlcmVkIGJ5XG4gKiBhIGlubmVyIE9ic2VydmFibGUgd2lsbCBiZSBpbW1lZGlhdGVseSBlbWl0dGVkIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIFNwYXduIGEgbmV3IGludGVydmFsIE9ic2VydmFibGUgZm9yIGVhY2ggY2xpY2sgZXZlbnQsIGFuZCBibGVuZCB0aGVpciBvdXRwdXRzIGFzIG9uZSBPYnNlcnZhYmxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb21FdmVudCwgbWFwLCBpbnRlcnZhbCwgbWVyZ2VBbGwgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBjbGlja3MgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogY29uc3QgaGlnaGVyT3JkZXIgPSBjbGlja3MucGlwZShtYXAoKCkgPT4gaW50ZXJ2YWwoMTAwMCkpKTtcbiAqIGNvbnN0IGZpcnN0T3JkZXIgPSBoaWdoZXJPcmRlci5waXBlKG1lcmdlQWxsKCkpO1xuICpcbiAqIGZpcnN0T3JkZXIuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICogYGBgXG4gKlxuICogQ291bnQgZnJvbSAwIHRvIDkgZXZlcnkgc2Vjb25kIGZvciBlYWNoIGNsaWNrLCBidXQgb25seSBhbGxvdyAyIGNvbmN1cnJlbnQgdGltZXJzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb21FdmVudCwgbWFwLCBpbnRlcnZhbCwgdGFrZSwgbWVyZ2VBbGwgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBjbGlja3MgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogY29uc3QgaGlnaGVyT3JkZXIgPSBjbGlja3MucGlwZShcbiAqICAgbWFwKCgpID0+IGludGVydmFsKDEwMDApLnBpcGUodGFrZSgxMCkpKVxuICogKTtcbiAqIGNvbnN0IGZpcnN0T3JkZXIgPSBoaWdoZXJPcmRlci5waXBlKG1lcmdlQWxsKDIpKTtcbiAqXG4gKiBmaXJzdE9yZGVyLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGNvbWJpbmVMYXRlc3RBbGx9XG4gKiBAc2VlIHtAbGluayBjb25jYXRBbGx9XG4gKiBAc2VlIHtAbGluayBleGhhdXN0QWxsfVxuICogQHNlZSB7QGxpbmsgbWVyZ2V9XG4gKiBAc2VlIHtAbGluayBtZXJnZU1hcH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlTWFwVG99XG4gKiBAc2VlIHtAbGluayBtZXJnZVNjYW59XG4gKiBAc2VlIHtAbGluayBzd2l0Y2hBbGx9XG4gKiBAc2VlIHtAbGluayBzd2l0Y2hNYXB9XG4gKiBAc2VlIHtAbGluayB6aXBBbGx9XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFtjb25jdXJyZW50PUluZmluaXR5XSBNYXhpbXVtIG51bWJlciBvZiBpbm5lclxuICogT2JzZXJ2YWJsZXMgYmVpbmcgc3Vic2NyaWJlZCB0byBjb25jdXJyZW50bHkuXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB2YWx1ZXMgY29taW5nIGZyb21cbiAqIGFsbCB0aGUgaW5uZXIgT2JzZXJ2YWJsZXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUFsbDxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KGNvbmN1cnJlbnQ6IG51bWJlciA9IEluZmluaXR5KTogT3BlcmF0b3JGdW5jdGlvbjxPLCBPYnNlcnZlZFZhbHVlT2Y8Tz4+IHtcbiAgcmV0dXJuIG1lcmdlTWFwKGlkZW50aXR5LCBjb25jdXJyZW50KTtcbn1cbiIsICJpbXBvcnQgeyBtZXJnZUFsbCB9IGZyb20gJy4vbWVyZ2VBbGwnO1xuaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiwgT2JzZXJ2YWJsZUlucHV0LCBPYnNlcnZlZFZhbHVlT2YgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogQ29udmVydHMgYSBoaWdoZXItb3JkZXIgT2JzZXJ2YWJsZSBpbnRvIGEgZmlyc3Qtb3JkZXIgT2JzZXJ2YWJsZSBieVxuICogY29uY2F0ZW5hdGluZyB0aGUgaW5uZXIgT2JzZXJ2YWJsZXMgaW4gb3JkZXIuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkZsYXR0ZW5zIGFuIE9ic2VydmFibGUtb2YtT2JzZXJ2YWJsZXMgYnkgcHV0dGluZyBvbmVcbiAqIGlubmVyIE9ic2VydmFibGUgYWZ0ZXIgdGhlIG90aGVyLjwvc3Bhbj5cbiAqXG4gKiAhW10oY29uY2F0QWxsLnN2ZylcbiAqXG4gKiBKb2lucyBldmVyeSBPYnNlcnZhYmxlIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSAoYSBoaWdoZXItb3JkZXIgT2JzZXJ2YWJsZSksIGluXG4gKiBhIHNlcmlhbCBmYXNoaW9uLiBJdCBzdWJzY3JpYmVzIHRvIGVhY2ggaW5uZXIgT2JzZXJ2YWJsZSBvbmx5IGFmdGVyIHRoZVxuICogcHJldmlvdXMgaW5uZXIgT2JzZXJ2YWJsZSBoYXMgY29tcGxldGVkLCBhbmQgbWVyZ2VzIGFsbCBvZiB0aGVpciB2YWx1ZXMgaW50b1xuICogdGhlIHJldHVybmVkIG9ic2VydmFibGUuXG4gKlxuICogX19XYXJuaW5nOl9fIElmIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBlbWl0cyBPYnNlcnZhYmxlcyBxdWlja2x5IGFuZFxuICogZW5kbGVzc2x5LCBhbmQgdGhlIGlubmVyIE9ic2VydmFibGVzIGl0IGVtaXRzIGdlbmVyYWxseSBjb21wbGV0ZSBzbG93ZXIgdGhhblxuICogdGhlIHNvdXJjZSBlbWl0cywgeW91IGNhbiBydW4gaW50byBtZW1vcnkgaXNzdWVzIGFzIHRoZSBpbmNvbWluZyBPYnNlcnZhYmxlc1xuICogY29sbGVjdCBpbiBhbiB1bmJvdW5kZWQgYnVmZmVyLlxuICpcbiAqIE5vdGU6IGBjb25jYXRBbGxgIGlzIGVxdWl2YWxlbnQgdG8gYG1lcmdlQWxsYCB3aXRoIGNvbmN1cnJlbmN5IHBhcmFtZXRlciBzZXRcbiAqIHRvIGAxYC5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogRm9yIGVhY2ggY2xpY2sgZXZlbnQsIHRpY2sgZXZlcnkgc2Vjb25kIGZyb20gMCB0byAzLCB3aXRoIG5vIGNvbmN1cnJlbmN5XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb21FdmVudCwgbWFwLCBpbnRlcnZhbCwgdGFrZSwgY29uY2F0QWxsIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IGhpZ2hlck9yZGVyID0gY2xpY2tzLnBpcGUoXG4gKiAgIG1hcCgoKSA9PiBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoNCkpKVxuICogKTtcbiAqIGNvbnN0IGZpcnN0T3JkZXIgPSBoaWdoZXJPcmRlci5waXBlKGNvbmNhdEFsbCgpKTtcbiAqIGZpcnN0T3JkZXIuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIFJlc3VsdHMgaW4gdGhlIGZvbGxvd2luZzpcbiAqIC8vIChyZXN1bHRzIGFyZSBub3QgY29uY3VycmVudClcbiAqIC8vIEZvciBldmVyeSBjbGljayBvbiB0aGUgXCJkb2N1bWVudFwiIGl0IHdpbGwgZW1pdCB2YWx1ZXMgMCB0byAzIHNwYWNlZFxuICogLy8gb24gYSAxMDAwbXMgaW50ZXJ2YWxcbiAqIC8vIG9uZSBjbGljayA9IDEwMDBtcy0+IDAgLTEwMDBtcy0+IDEgLTEwMDBtcy0+IDIgLTEwMDBtcy0+IDNcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGNvbWJpbmVMYXRlc3RBbGx9XG4gKiBAc2VlIHtAbGluayBjb25jYXR9XG4gKiBAc2VlIHtAbGluayBjb25jYXRNYXB9XG4gKiBAc2VlIHtAbGluayBjb25jYXRNYXBUb31cbiAqIEBzZWUge0BsaW5rIGV4aGF1c3RBbGx9XG4gKiBAc2VlIHtAbGluayBtZXJnZUFsbH1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaEFsbH1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaE1hcH1cbiAqIEBzZWUge0BsaW5rIHppcEFsbH1cbiAqXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgZW1pdHRpbmcgdmFsdWVzIGZyb20gYWxsIHRoZVxuICogaW5uZXIgT2JzZXJ2YWJsZXMgY29uY2F0ZW5hdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0QWxsPE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oKTogT3BlcmF0b3JGdW5jdGlvbjxPLCBPYnNlcnZlZFZhbHVlT2Y8Tz4+IHtcbiAgcmV0dXJuIG1lcmdlQWxsKDEpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dFR1cGxlLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgY29uY2F0QWxsIH0gZnJvbSAnLi4vb3BlcmF0b3JzL2NvbmNhdEFsbCc7XG5pbXBvcnQgeyBwb3BTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2FyZ3MnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJy4vZnJvbSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQ8VCBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oLi4uaW5wdXRzOiBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8VD5dKTogT2JzZXJ2YWJsZTxUW251bWJlcl0+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdDxUIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdPihcbiAgLi4uaW5wdXRzQW5kU2NoZWR1bGVyOiBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8VD4sIFNjaGVkdWxlckxpa2VdXG4pOiBPYnNlcnZhYmxlPFRbbnVtYmVyXT47XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvdXRwdXQgT2JzZXJ2YWJsZSB3aGljaCBzZXF1ZW50aWFsbHkgZW1pdHMgYWxsIHZhbHVlcyBmcm9tIHRoZSBmaXJzdCBnaXZlblxuICogT2JzZXJ2YWJsZSBhbmQgdGhlbiBtb3ZlcyBvbiB0byB0aGUgbmV4dC5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+Q29uY2F0ZW5hdGVzIG11bHRpcGxlIE9ic2VydmFibGVzIHRvZ2V0aGVyIGJ5XG4gKiBzZXF1ZW50aWFsbHkgZW1pdHRpbmcgdGhlaXIgdmFsdWVzLCBvbmUgT2JzZXJ2YWJsZSBhZnRlciB0aGUgb3RoZXIuPC9zcGFuPlxuICpcbiAqICFbXShjb25jYXQucG5nKVxuICpcbiAqIGBjb25jYXRgIGpvaW5zIG11bHRpcGxlIE9ic2VydmFibGVzIHRvZ2V0aGVyLCBieSBzdWJzY3JpYmluZyB0byB0aGVtIG9uZSBhdCBhIHRpbWUgYW5kXG4gKiBtZXJnaW5nIHRoZWlyIHJlc3VsdHMgaW50byB0aGUgb3V0cHV0IE9ic2VydmFibGUuIFlvdSBjYW4gcGFzcyBlaXRoZXIgYW4gYXJyYXkgb2ZcbiAqIE9ic2VydmFibGVzLCBvciBwdXQgdGhlbSBkaXJlY3RseSBhcyBhcmd1bWVudHMuIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgd2lsbCByZXN1bHRcbiAqIGluIE9ic2VydmFibGUgdGhhdCBjb21wbGV0ZXMgaW1tZWRpYXRlbHkuXG4gKlxuICogYGNvbmNhdGAgd2lsbCBzdWJzY3JpYmUgdG8gZmlyc3QgaW5wdXQgT2JzZXJ2YWJsZSBhbmQgZW1pdCBhbGwgaXRzIHZhbHVlcywgd2l0aG91dFxuICogY2hhbmdpbmcgb3IgYWZmZWN0aW5nIHRoZW0gaW4gYW55IHdheS4gV2hlbiB0aGF0IE9ic2VydmFibGUgY29tcGxldGVzLCBpdCB3aWxsXG4gKiBzdWJzY3JpYmUgdG8gdGhlbiBuZXh0IE9ic2VydmFibGUgcGFzc2VkIGFuZCwgYWdhaW4sIGVtaXQgaXRzIHZhbHVlcy4gVGhpcyB3aWxsIGJlXG4gKiByZXBlYXRlZCwgdW50aWwgdGhlIG9wZXJhdG9yIHJ1bnMgb3V0IG9mIE9ic2VydmFibGVzLiBXaGVuIGxhc3QgaW5wdXQgT2JzZXJ2YWJsZSBjb21wbGV0ZXMsXG4gKiBgY29uY2F0YCB3aWxsIGNvbXBsZXRlIGFzIHdlbGwuIEF0IGFueSBnaXZlbiBtb21lbnQgb25seSBvbmUgT2JzZXJ2YWJsZSBwYXNzZWQgdG8gb3BlcmF0b3JcbiAqIGVtaXRzIHZhbHVlcy4gSWYgeW91IHdvdWxkIGxpa2UgdG8gZW1pdCB2YWx1ZXMgZnJvbSBwYXNzZWQgT2JzZXJ2YWJsZXMgY29uY3VycmVudGx5LCBjaGVjayBvdXRcbiAqIHtAbGluayBtZXJnZX0gaW5zdGVhZCwgZXNwZWNpYWxseSB3aXRoIG9wdGlvbmFsIGBjb25jdXJyZW50YCBwYXJhbWV0ZXIuIEFzIGEgbWF0dGVyIG9mIGZhY3QsXG4gKiBgY29uY2F0YCBpcyBhbiBlcXVpdmFsZW50IG9mIGBtZXJnZWAgb3BlcmF0b3Igd2l0aCBgY29uY3VycmVudGAgcGFyYW1ldGVyIHNldCB0byBgMWAuXG4gKlxuICogTm90ZSB0aGF0IGlmIHNvbWUgaW5wdXQgT2JzZXJ2YWJsZSBuZXZlciBjb21wbGV0ZXMsIGBjb25jYXRgIHdpbGwgYWxzbyBuZXZlciBjb21wbGV0ZVxuICogYW5kIE9ic2VydmFibGVzIGZvbGxvd2luZyB0aGUgb25lIHRoYXQgZGlkIG5vdCBjb21wbGV0ZSB3aWxsIG5ldmVyIGJlIHN1YnNjcmliZWQuIE9uIHRoZSBvdGhlclxuICogaGFuZCwgaWYgc29tZSBPYnNlcnZhYmxlIHNpbXBseSBjb21wbGV0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgaXQgaXMgc3Vic2NyaWJlZCwgaXQgd2lsbCBiZVxuICogaW52aXNpYmxlIGZvciBgY29uY2F0YCwgd2hpY2ggd2lsbCBqdXN0IG1vdmUgb24gdG8gdGhlIG5leHQgT2JzZXJ2YWJsZS5cbiAqXG4gKiBJZiBhbnkgT2JzZXJ2YWJsZSBpbiBjaGFpbiBlcnJvcnMsIGluc3RlYWQgb2YgcGFzc2luZyBjb250cm9sIHRvIHRoZSBuZXh0IE9ic2VydmFibGUsXG4gKiBgY29uY2F0YCB3aWxsIGVycm9yIGltbWVkaWF0ZWx5IGFzIHdlbGwuIE9ic2VydmFibGVzIHRoYXQgd291bGQgYmUgc3Vic2NyaWJlZCBhZnRlclxuICogdGhlIG9uZSB0aGF0IGVtaXR0ZWQgZXJyb3IsIG5ldmVyIHdpbGwuXG4gKlxuICogSWYgeW91IHBhc3MgdG8gYGNvbmNhdGAgdGhlIHNhbWUgT2JzZXJ2YWJsZSBtYW55IHRpbWVzLCBpdHMgc3RyZWFtIG9mIHZhbHVlc1xuICogd2lsbCBiZSBcInJlcGxheWVkXCIgb24gZXZlcnkgc3Vic2NyaXB0aW9uLCB3aGljaCBtZWFucyB5b3UgY2FuIHJlcGVhdCBnaXZlbiBPYnNlcnZhYmxlXG4gKiBhcyBtYW55IHRpbWVzIGFzIHlvdSBsaWtlLiBJZiBwYXNzaW5nIHRoZSBzYW1lIE9ic2VydmFibGUgdG8gYGNvbmNhdGAgMTAwMCB0aW1lcyBiZWNvbWVzIHRlZGlvdXMsXG4gKiB5b3UgY2FuIGFsd2F5cyB1c2Uge0BsaW5rIHJlcGVhdH0uXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBDb25jYXRlbmF0ZSBhIHRpbWVyIGNvdW50aW5nIGZyb20gMCB0byAzIHdpdGggYSBzeW5jaHJvbm91cyBzZXF1ZW5jZSBmcm9tIDEgdG8gMTBcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UsIHJhbmdlLCBjb25jYXQgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCB0aW1lciA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSg0KSk7XG4gKiBjb25zdCBzZXF1ZW5jZSA9IHJhbmdlKDEsIDEwKTtcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbmNhdCh0aW1lciwgc2VxdWVuY2UpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyByZXN1bHRzIGluOlxuICogLy8gMCAtMTAwMG1zLT4gMSAtMTAwMG1zLT4gMiAtMTAwMG1zLT4gMyAtaW1tZWRpYXRlLT4gMSAuLi4gMTBcbiAqIGBgYFxuICpcbiAqIENvbmNhdGVuYXRlIDMgT2JzZXJ2YWJsZXNcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UsIGNvbmNhdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHRpbWVyMSA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSgxMCkpO1xuICogY29uc3QgdGltZXIyID0gaW50ZXJ2YWwoMjAwMCkucGlwZSh0YWtlKDYpKTtcbiAqIGNvbnN0IHRpbWVyMyA9IGludGVydmFsKDUwMCkucGlwZSh0YWtlKDEwKSk7XG4gKlxuICogY29uc3QgcmVzdWx0ID0gY29uY2F0KHRpbWVyMSwgdGltZXIyLCB0aW1lcjMpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyByZXN1bHRzIGluIHRoZSBmb2xsb3dpbmc6XG4gKiAvLyAoUHJpbnRzIHRvIGNvbnNvbGUgc2VxdWVudGlhbGx5KVxuICogLy8gLTEwMDBtcy0+IDAgLTEwMDBtcy0+IDEgLTEwMDBtcy0+IC4uLiA5XG4gKiAvLyAtMjAwMG1zLT4gMCAtMjAwMG1zLT4gMSAtMjAwMG1zLT4gLi4uIDVcbiAqIC8vIC01MDBtcy0+IDAgLTUwMG1zLT4gMSAtNTAwbXMtPiAuLi4gOVxuICogYGBgXG4gKlxuICogQ29uY2F0ZW5hdGUgdGhlIHNhbWUgT2JzZXJ2YWJsZSB0byByZXBlYXQgaXRcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UsIGNvbmNhdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHRpbWVyID0gaW50ZXJ2YWwoMTAwMCkucGlwZSh0YWtlKDIpKTtcbiAqXG4gKiBjb25jYXQodGltZXIsIHRpbWVyKSAvLyBjb25jYXRlbmF0aW5nIHRoZSBzYW1lIE9ic2VydmFibGUhXG4gKiAgIC5zdWJzY3JpYmUoe1xuICogICAgIG5leHQ6IHZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSxcbiAqICAgICBjb21wbGV0ZTogKCkgPT4gY29uc29sZS5sb2coJy4uLmFuZCBpdCBpcyBkb25lIScpXG4gKiAgIH0pO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAwIGFmdGVyIDFzXG4gKiAvLyAxIGFmdGVyIDJzXG4gKiAvLyAwIGFmdGVyIDNzXG4gKiAvLyAxIGFmdGVyIDRzXG4gKiAvLyAnLi4uYW5kIGl0IGlzIGRvbmUhJyBhbHNvIGFmdGVyIDRzXG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBjb25jYXRBbGx9XG4gKiBAc2VlIHtAbGluayBjb25jYXRNYXB9XG4gKiBAc2VlIHtAbGluayBjb25jYXRNYXBUb31cbiAqIEBzZWUge0BsaW5rIHN0YXJ0V2l0aH1cbiAqIEBzZWUge0BsaW5rIGVuZFdpdGh9XG4gKlxuICogQHBhcmFtIGFyZ3MgSW5wdXQgT2JzZXJ2YWJsZXMgdG8gY29uY2F0ZW5hdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoLi4uYXJnczogYW55W10pOiBPYnNlcnZhYmxlPHVua25vd24+IHtcbiAgcmV0dXJuIGNvbmNhdEFsbCgpKGZyb20oYXJncywgcG9wU2NoZWR1bGVyKGFyZ3MpKSk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGFzeW5jIGFzIGFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9pc1NjaGVkdWxlcic7XG5pbXBvcnQgeyBpc1ZhbGlkRGF0ZSB9IGZyb20gJy4uL3V0aWwvaXNEYXRlJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCB3aWxsIHdhaXQgZm9yIGEgc3BlY2lmaWVkIHRpbWUgcGVyaW9kLCBvciBleGFjdCBkYXRlLCBiZWZvcmVcbiAqIGVtaXR0aW5nIHRoZSBudW1iZXIgMC5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+VXNlZCB0byBlbWl0IGEgbm90aWZpY2F0aW9uIGFmdGVyIGEgZGVsYXkuPC9zcGFuPlxuICpcbiAqIFRoaXMgb2JzZXJ2YWJsZSBpcyB1c2VmdWwgZm9yIGNyZWF0aW5nIGRlbGF5cyBpbiBjb2RlLCBvciByYWNpbmcgYWdhaW5zdCBvdGhlciB2YWx1ZXNcbiAqIGZvciBhZC1ob2MgdGltZW91dHMuXG4gKlxuICogVGhlIGBkZWxheWAgaXMgc3BlY2lmaWVkIGJ5IGRlZmF1bHQgaW4gbWlsbGlzZWNvbmRzLCBob3dldmVyIHByb3ZpZGluZyBhIGN1c3RvbSBzY2hlZHVsZXIgY291bGRcbiAqIGNyZWF0ZSBhIGRpZmZlcmVudCBiZWhhdmlvci5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIFdhaXQgMyBzZWNvbmRzIGFuZCBzdGFydCBhbm90aGVyIG9ic2VydmFibGVcbiAqXG4gKiBZb3UgbWlnaHQgd2FudCB0byB1c2UgYHRpbWVyYCB0byBkZWxheSBzdWJzY3JpcHRpb24gdG8gYW5cbiAqIG9ic2VydmFibGUgYnkgYSBzZXQgYW1vdW50IG9mIHRpbWUuIEhlcmUgd2UgdXNlIGEgdGltZXIgd2l0aFxuICoge0BsaW5rIGNvbmNhdE1hcFRvfSBvciB7QGxpbmsgY29uY2F0TWFwfSBpbiBvcmRlciB0byB3YWl0XG4gKiBhIGZldyBzZWNvbmRzIGFuZCBzdGFydCBhIHN1YnNjcmlwdGlvbiB0byBhIHNvdXJjZS5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIHRpbWVyLCBjb25jYXRNYXAgfSBmcm9tICdyeGpzJztcbiAqXG4gKiAvLyBUaGlzIGNvdWxkIGJlIGFueSBvYnNlcnZhYmxlXG4gKiBjb25zdCBzb3VyY2UgPSBvZigxLCAyLCAzKTtcbiAqXG4gKiB0aW1lcigzMDAwKVxuICogICAucGlwZShjb25jYXRNYXAoKCkgPT4gc291cmNlKSlcbiAqICAgLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gKiBgYGBcbiAqXG4gKiBUYWtlIGFsbCB2YWx1ZXMgdW50aWwgdGhlIHN0YXJ0IG9mIHRoZSBuZXh0IG1pbnV0ZVxuICpcbiAqIFVzaW5nIGEgYERhdGVgIGFzIHRoZSB0cmlnZ2VyIGZvciB0aGUgZmlyc3QgZW1pc3Npb24sIHlvdSBjYW5cbiAqIGRvIHRoaW5ncyBsaWtlIHdhaXQgdW50aWwgbWlkbmlnaHQgdG8gZmlyZSBhbiBldmVudCwgb3IgaW4gdGhpcyBjYXNlLFxuICogd2FpdCB1bnRpbCBhIG5ldyBtaW51dGUgc3RhcnRzIChjaG9zZW4gc28gdGhlIGV4YW1wbGUgd291bGRuJ3QgdGFrZVxuICogdG9vIGxvbmcgdG8gcnVuKSBpbiBvcmRlciB0byBzdG9wIHdhdGNoaW5nIGEgc3RyZWFtLiBMZXZlcmFnaW5nXG4gKiB7QGxpbmsgdGFrZVVudGlsfS5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2VVbnRpbCwgdGltZXIgfSBmcm9tICdyeGpzJztcbiAqXG4gKiAvLyBCdWlsZCBhIERhdGUgb2JqZWN0IHRoYXQgbWFya3MgdGhlXG4gKiAvLyBuZXh0IG1pbnV0ZS5cbiAqIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAqIGNvbnN0IHN0YXJ0T2ZOZXh0TWludXRlID0gbmV3IERhdGUoXG4gKiAgIGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksXG4gKiAgIGN1cnJlbnREYXRlLmdldE1vbnRoKCksXG4gKiAgIGN1cnJlbnREYXRlLmdldERhdGUoKSxcbiAqICAgY3VycmVudERhdGUuZ2V0SG91cnMoKSxcbiAqICAgY3VycmVudERhdGUuZ2V0TWludXRlcygpICsgMVxuICogKTtcbiAqXG4gKiAvLyBUaGlzIGNvdWxkIGJlIGFueSBvYnNlcnZhYmxlIHN0cmVhbVxuICogY29uc3Qgc291cmNlID0gaW50ZXJ2YWwoMTAwMCk7XG4gKlxuICogY29uc3QgcmVzdWx0ID0gc291cmNlLnBpcGUoXG4gKiAgIHRha2VVbnRpbCh0aW1lcihzdGFydE9mTmV4dE1pbnV0ZSkpXG4gKiApO1xuICpcbiAqIHJlc3VsdC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICogYGBgXG4gKlxuICogIyMjIEtub3duIExpbWl0YXRpb25zXG4gKlxuICogLSBUaGUge0BsaW5rIGFzeW5jU2NoZWR1bGVyfSB1c2VzIGBzZXRUaW1lb3V0YCB3aGljaCBoYXMgbGltaXRhdGlvbnMgZm9yIGhvdyBmYXIgaW4gdGhlIGZ1dHVyZSBpdCBjYW4gYmUgc2NoZWR1bGVkLlxuICpcbiAqIC0gSWYgYSBgc2NoZWR1bGVyYCBpcyBwcm92aWRlZCB0aGF0IHJldHVybnMgYSB0aW1lc3RhbXAgb3RoZXIgdGhhbiBhbiBlcG9jaCBmcm9tIGBub3coKWAsIGFuZFxuICogYSBgRGF0ZWAgb2JqZWN0IGlzIHBhc3NlZCB0byB0aGUgYGR1ZVRpbWVgIGFyZ3VtZW50LCB0aGUgY2FsY3VsYXRpb24gZm9yIHdoZW4gdGhlIGZpcnN0IGVtaXNzaW9uXG4gKiBzaG91bGQgb2NjdXIgd2lsbCBiZSBpbmNvcnJlY3QuIEluIHRoaXMgY2FzZSwgaXQgd291bGQgYmUgYmVzdCB0byBkbyB5b3VyIG93biBjYWxjdWxhdGlvbnNcbiAqIGFoZWFkIG9mIHRpbWUsIGFuZCBwYXNzIGEgYG51bWJlcmAgaW4gYXMgdGhlIGBkdWVUaW1lYC5cbiAqXG4gKiBAcGFyYW0gZHVlIElmIGEgYG51bWJlcmAsIHRoZSBhbW91bnQgb2YgdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgZW1pdHRpbmcuXG4gKiBJZiBhIGBEYXRlYCwgdGhlIGV4YWN0IHRpbWUgYXQgd2hpY2ggdG8gZW1pdC5cbiAqIEBwYXJhbSBzY2hlZHVsZXIgVGhlIHNjaGVkdWxlciB0byB1c2UgdG8gc2NoZWR1bGUgdGhlIGRlbGF5LiBEZWZhdWx0cyB0byB7QGxpbmsgYXN5bmNTY2hlZHVsZXJ9LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZXIoZHVlOiBudW1iZXIgfCBEYXRlLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTwwPjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBzdGFydHMgYW4gaW50ZXJ2YWwgYWZ0ZXIgYSBzcGVjaWZpZWQgZGVsYXksIGVtaXR0aW5nIGluY3JlbWVudGluZyBudW1iZXJzIC0tIHN0YXJ0aW5nIGF0IGAwYCAtLVxuICogb24gZWFjaCBpbnRlcnZhbCBhZnRlciB3b3Jkcy5cbiAqXG4gKiBUaGUgYGRlbGF5YCBhbmQgYGludGVydmFsRHVyYXRpb25gIGFyZSBzcGVjaWZpZWQgYnkgZGVmYXVsdCBpbiBtaWxsaXNlY29uZHMsIGhvd2V2ZXIgcHJvdmlkaW5nIGEgY3VzdG9tIHNjaGVkdWxlciBjb3VsZFxuICogY3JlYXRlIGEgZGlmZmVyZW50IGJlaGF2aW9yLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiAjIyMgU3RhcnQgYW4gaW50ZXJ2YWwgdGhhdCBzdGFydHMgcmlnaHQgYXdheVxuICpcbiAqIFNpbmNlIHtAbGluayBpbnRlcnZhbH0gd2FpdHMgZm9yIHRoZSBwYXNzZWQgZGVsYXkgYmVmb3JlIHN0YXJ0aW5nLFxuICogc29tZXRpbWVzIHRoYXQncyBub3QgaWRlYWwuIFlvdSBtYXkgd2FudCB0byBzdGFydCBhbiBpbnRlcnZhbCBpbW1lZGlhdGVseS5cbiAqIGB0aW1lcmAgd29ya3Mgd2VsbCBmb3IgdGhpcy4gSGVyZSB3ZSBoYXZlIGJvdGggc2lkZS1ieS1zaWRlIHNvIHlvdSBjYW5cbiAqIHNlZSB0aGVtIGluIGNvbXBhcmlzb24uXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgb2JzZXJ2YWJsZSB3aWxsIG5ldmVyIGNvbXBsZXRlLlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyB0aW1lciwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbiAqXG4gKiB0aW1lcigwLCAxMDAwKS5zdWJzY3JpYmUobiA9PiBjb25zb2xlLmxvZygndGltZXInLCBuKSk7XG4gKiBpbnRlcnZhbCgxMDAwKS5zdWJzY3JpYmUobiA9PiBjb25zb2xlLmxvZygnaW50ZXJ2YWwnLCBuKSk7XG4gKiBgYGBcbiAqXG4gKiAjIyMgS25vd24gTGltaXRhdGlvbnNcbiAqXG4gKiAtIFRoZSB7QGxpbmsgYXN5bmNTY2hlZHVsZXJ9IHVzZXMgYHNldFRpbWVvdXRgIHdoaWNoIGhhcyBsaW1pdGF0aW9ucyBmb3IgaG93IGZhciBpbiB0aGUgZnV0dXJlIGl0IGNhbiBiZSBzY2hlZHVsZWQuXG4gKlxuICogLSBJZiBhIGBzY2hlZHVsZXJgIGlzIHByb3ZpZGVkIHRoYXQgcmV0dXJucyBhIHRpbWVzdGFtcCBvdGhlciB0aGFuIGFuIGVwb2NoIGZyb20gYG5vdygpYCwgYW5kXG4gKiBhIGBEYXRlYCBvYmplY3QgaXMgcGFzc2VkIHRvIHRoZSBgZHVlVGltZWAgYXJndW1lbnQsIHRoZSBjYWxjdWxhdGlvbiBmb3Igd2hlbiB0aGUgZmlyc3QgZW1pc3Npb25cbiAqIHNob3VsZCBvY2N1ciB3aWxsIGJlIGluY29ycmVjdC4gSW4gdGhpcyBjYXNlLCBpdCB3b3VsZCBiZSBiZXN0IHRvIGRvIHlvdXIgb3duIGNhbGN1bGF0aW9uc1xuICogYWhlYWQgb2YgdGltZSwgYW5kIHBhc3MgYSBgbnVtYmVyYCBpbiBhcyB0aGUgYHN0YXJ0RHVlYC5cbiAqIEBwYXJhbSBzdGFydER1ZSBJZiBhIGBudW1iZXJgLCBpcyB0aGUgdGltZSB0byB3YWl0IGJlZm9yZSBzdGFydGluZyB0aGUgaW50ZXJ2YWwuXG4gKiBJZiBhIGBEYXRlYCwgaXMgdGhlIGV4YWN0IHRpbWUgYXQgd2hpY2ggdG8gc3RhcnQgdGhlIGludGVydmFsLlxuICogQHBhcmFtIGludGVydmFsRHVyYXRpb24gVGhlIGRlbGF5IGJldHdlZW4gZWFjaCB2YWx1ZSBlbWl0dGVkIGluIHRoZSBpbnRlcnZhbC4gUGFzc2luZyBhXG4gKiBuZWdhdGl2ZSBudW1iZXIgaGVyZSB3aWxsIHJlc3VsdCBpbiBpbW1lZGlhdGUgY29tcGxldGlvbiBhZnRlciB0aGUgZmlyc3QgdmFsdWUgaXMgZW1pdHRlZCwgYXMgdGhvdWdoXG4gKiBubyBgaW50ZXJ2YWxEdXJhdGlvbmAgd2FzIHBhc3NlZCBhdCBhbGwuXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFRoZSBzY2hlZHVsZXIgdG8gdXNlIHRvIHNjaGVkdWxlIHRoZSBkZWxheS4gRGVmYXVsdHMgdG8ge0BsaW5rIGFzeW5jU2NoZWR1bGVyfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyKHN0YXJ0RHVlOiBudW1iZXIgfCBEYXRlLCBpbnRlcnZhbER1cmF0aW9uOiBudW1iZXIsIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVGhlIHNpZ25hdHVyZSBhbGxvd2luZyBgdW5kZWZpbmVkYCB0byBiZSBwYXNzZWQgZm9yIGBpbnRlcnZhbER1cmF0aW9uYCB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSB0aGUgYHRpbWVyKGR1ZVRpbWUsIHNjaGVkdWxlcj8pYCBzaWduYXR1cmUgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyKGR1ZVRpbWU6IG51bWJlciB8IERhdGUsIHVudXNlZDogdW5kZWZpbmVkLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTwwPjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyKFxuICBkdWVUaW1lOiBudW1iZXIgfCBEYXRlID0gMCxcbiAgaW50ZXJ2YWxPclNjaGVkdWxlcj86IG51bWJlciB8IFNjaGVkdWxlckxpa2UsXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSA9IGFzeW5jU2NoZWR1bGVyXG4pOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAvLyBTaW5jZSBuZWdhdGl2ZSBpbnRlcnZhbER1cmF0aW9uIGlzIHRyZWF0ZWQgYXMgdGhvdWdoIG5vXG4gIC8vIGludGVydmFsIHdhcyBzcGVjaWZpZWQgYXQgYWxsLCB3ZSBzdGFydCB3aXRoIGEgbmVnYXRpdmUgbnVtYmVyLlxuICBsZXQgaW50ZXJ2YWxEdXJhdGlvbiA9IC0xO1xuXG4gIGlmIChpbnRlcnZhbE9yU2NoZWR1bGVyICE9IG51bGwpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGEgc2Vjb25kIGFyZ3VtZW50LCBhbmQgaXQncyBhIHNjaGVkdWxlcixcbiAgICAvLyBvdmVycmlkZSB0aGUgc2NoZWR1bGVyIHdlIGhhZCBkZWZhdWx0ZWQuIE90aGVyd2lzZSxcbiAgICAvLyBpdCBtdXN0IGJlIGFuIGludGVydmFsLlxuICAgIGlmIChpc1NjaGVkdWxlcihpbnRlcnZhbE9yU2NoZWR1bGVyKSkge1xuICAgICAgc2NoZWR1bGVyID0gaW50ZXJ2YWxPclNjaGVkdWxlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgKmNvdWxkKiBiZSBuZWdhdGl2ZSwgaW4gd2hpY2ggY2FzZVxuICAgICAgLy8gaXQncyBsaWtlIG5vdCBwYXNzaW5nIGFuIGludGVydmFsRHVyYXRpb24gYXQgYWxsLlxuICAgICAgaW50ZXJ2YWxEdXJhdGlvbiA9IGludGVydmFsT3JTY2hlZHVsZXI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyKSA9PiB7XG4gICAgLy8gSWYgYSB2YWxpZCBkYXRlIGlzIHBhc3NlZCwgY2FsY3VsYXRlIGhvdyBsb25nIHRvIHdhaXQgYmVmb3JlXG4gICAgLy8gZXhlY3V0aW5nIHRoZSBmaXJzdCB2YWx1ZS4uLiBvdGhlcndpc2UsIGlmIGl0J3MgYSBudW1iZXIganVzdCBzY2hlZHVsZVxuICAgIC8vIHRoYXQgbWFueSBtaWxsaXNlY29uZHMgKG9yIHNjaGVkdWxlci1zcGVjaWZpZWQgdW5pdCBzaXplKSBpbiB0aGUgZnV0dXJlLlxuICAgIGxldCBkdWUgPSBpc1ZhbGlkRGF0ZShkdWVUaW1lKSA/ICtkdWVUaW1lIC0gc2NoZWR1bGVyIS5ub3coKSA6IGR1ZVRpbWU7XG5cbiAgICBpZiAoZHVlIDwgMCkge1xuICAgICAgLy8gRW5zdXJlIHdlIGRvbid0IHNjaGVkdWxlIGluIHRoZSBmdXR1cmUuXG4gICAgICBkdWUgPSAwO1xuICAgIH1cblxuICAgIC8vIFRoZSBpbmNyZW1lbnRpbmcgdmFsdWUgd2UgZW1pdC5cbiAgICBsZXQgbiA9IDA7XG5cbiAgICAvLyBTdGFydCB0aGUgdGltZXIuXG4gICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIC8vIEVtaXQgdGhlIG5leHQgdmFsdWUgYW5kIGluY3JlbWVudC5cbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KG4rKyk7XG5cbiAgICAgICAgaWYgKDAgPD0gaW50ZXJ2YWxEdXJhdGlvbikge1xuICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBpbnRlcnZhbCBhZnRlciB0aGUgaW5pdGlhbCB0aW1lcixcbiAgICAgICAgICAvLyByZXNjaGVkdWxlIHdpdGggdGhlIHBlcmlvZC5cbiAgICAgICAgICB0aGlzLnNjaGVkdWxlKHVuZGVmaW5lZCwgaW50ZXJ2YWxEdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gV2UgZGlkbid0IGhhdmUgYW4gaW50ZXJ2YWwuIFNvIGp1c3QgY29tcGxldGUuXG4gICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgZHVlKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRU1QVFkgfSBmcm9tICcuLi9vYnNlcnZhYmxlL2VtcHR5JztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuXG4vKipcbiAqIEVtaXRzIG9ubHkgdGhlIGZpcnN0IGBjb3VudGAgdmFsdWVzIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5UYWtlcyB0aGUgZmlyc3QgYGNvdW50YCB2YWx1ZXMgZnJvbSB0aGUgc291cmNlLCB0aGVuXG4gKiBjb21wbGV0ZXMuPC9zcGFuPlxuICpcbiAqICFbXSh0YWtlLnBuZylcbiAqXG4gKiBgdGFrZWAgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgb25seSB0aGUgZmlyc3QgYGNvdW50YCB2YWx1ZXMgZW1pdHRlZFxuICogYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBJZiB0aGUgc291cmNlIGVtaXRzIGZld2VyIHRoYW4gYGNvdW50YCB2YWx1ZXMgdGhlblxuICogYWxsIG9mIGl0cyB2YWx1ZXMgYXJlIGVtaXR0ZWQuIEFmdGVyIHRoYXQsIGl0IGNvbXBsZXRlcywgcmVnYXJkbGVzcyBpZiB0aGVcbiAqIHNvdXJjZSBjb21wbGV0ZXMuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIFRha2UgdGhlIGZpcnN0IDUgc2Vjb25kcyBvZiBhbiBpbmZpbml0ZSAxLXNlY29uZCBpbnRlcnZhbCBPYnNlcnZhYmxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgaW50ZXJ2YWxDb3VudCA9IGludGVydmFsKDEwMDApO1xuICogY29uc3QgdGFrZUZpdmUgPSBpbnRlcnZhbENvdW50LnBpcGUodGFrZSg1KSk7XG4gKiB0YWtlRml2ZS5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gTG9nczpcbiAqIC8vIDBcbiAqIC8vIDFcbiAqIC8vIDJcbiAqIC8vIDNcbiAqIC8vIDRcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIHRha2VMYXN0fVxuICogQHNlZSB7QGxpbmsgdGFrZVVudGlsfVxuICogQHNlZSB7QGxpbmsgdGFrZVdoaWxlfVxuICogQHNlZSB7QGxpbmsgc2tpcH1cbiAqXG4gKiBAcGFyYW0gY291bnQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGBuZXh0YCB2YWx1ZXMgdG8gZW1pdC5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG9ubHkgdGhlIGZpcnN0XG4gKiBgY291bnRgIHZhbHVlcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgb3IgYWxsIG9mIHRoZSB2YWx1ZXMgZnJvbVxuICogdGhlIHNvdXJjZSBpZiB0aGUgc291cmNlIGVtaXRzIGZld2VyIHRoYW4gYGNvdW50YCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWtlPFQ+KGNvdW50OiBudW1iZXIpOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD4ge1xuICByZXR1cm4gY291bnQgPD0gMFxuICAgID8gLy8gSWYgd2UgYXJlIHRha2luZyBubyB2YWx1ZXMsIHRoYXQncyBlbXB0eS5cbiAgICAgICgpID0+IEVNUFRZXG4gICAgOiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IHtcbiAgICAgICAgbGV0IHNlZW4gPSAwO1xuICAgICAgICBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIC8vIEluY3JlbWVudCB0aGUgbnVtYmVyIG9mIHZhbHVlcyB3ZSBoYXZlIHNlZW4sXG4gICAgICAgICAgICAvLyB0aGVuIGNoZWNrIGl0IGFnYWluc3QgdGhlIGFsbG93ZWQgY291bnQgdG8gc2VlXG4gICAgICAgICAgICAvLyBpZiB3ZSBhcmUgc3RpbGwgbGV0dGluZyB2YWx1ZXMgdGhyb3VnaC5cbiAgICAgICAgICAgIGlmICgrK3NlZW4gPD0gY291bnQpIHtcbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBtZXQgb3IgcGFzc2VkIG91ciBhbGxvd2VkIGNvdW50LFxuICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGNvbXBsZXRlLiBXZSBoYXZlIHRvIGRvIDw9IGhlcmUsXG4gICAgICAgICAgICAgIC8vIGJlY2F1c2UgcmUtZW50cmFudCBjb2RlIHdpbGwgaW5jcmVtZW50IGBzZWVuYCB0d2ljZS5cbiAgICAgICAgICAgICAgaWYgKGNvdW50IDw9IHNlZW4pIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG59XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uL3V0aWwvbm9vcCc7XG5cbi8qKlxuICogSWdub3JlcyBhbGwgaXRlbXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUgYW5kIG9ubHkgcGFzc2VzIGNhbGxzIG9mIGBjb21wbGV0ZWAgb3IgYGVycm9yYC5cbiAqXG4gKiAhW10oaWdub3JlRWxlbWVudHMucG5nKVxuICpcbiAqIFRoZSBgaWdub3JlRWxlbWVudHNgIG9wZXJhdG9yIHN1cHByZXNzZXMgYWxsIGl0ZW1zIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLFxuICogYnV0IGFsbG93cyBpdHMgdGVybWluYXRpb24gbm90aWZpY2F0aW9uIChlaXRoZXIgYGVycm9yYCBvciBgY29tcGxldGVgKSB0byBwYXNzIHRocm91Z2ggdW5jaGFuZ2VkLlxuICpcbiAqIElmIHlvdSBkbyBub3QgY2FyZSBhYm91dCB0aGUgaXRlbXMgYmVpbmcgZW1pdHRlZCBieSBhbiBPYnNlcnZhYmxlLCBidXQgeW91IGRvIHdhbnQgdG8gYmUgbm90aWZpZWRcbiAqIHdoZW4gaXQgY29tcGxldGVzIG9yIHdoZW4gaXQgdGVybWluYXRlcyB3aXRoIGFuIGVycm9yLCB5b3UgY2FuIGFwcGx5IHRoZSBgaWdub3JlRWxlbWVudHNgIG9wZXJhdG9yXG4gKiB0byB0aGUgT2JzZXJ2YWJsZSwgd2hpY2ggd2lsbCBlbnN1cmUgdGhhdCBpdCB3aWxsIG5ldmVyIGNhbGwgaXRzIG9ic2VydmVyc1x1MjAxOSBgbmV4dGAgaGFuZGxlcnMuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIElnbm9yZSBhbGwgYG5leHRgIGVtaXNzaW9ucyBmcm9tIHRoZSBzb3VyY2VcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIGlnbm9yZUVsZW1lbnRzIH0gZnJvbSAncnhqcyc7XG4gKlxuICogb2YoJ3lvdScsICd0YWxraW5nJywgJ3RvJywgJ21lJylcbiAqICAgLnBpcGUoaWdub3JlRWxlbWVudHMoKSlcbiAqICAgLnN1YnNjcmliZSh7XG4gKiAgICAgbmV4dDogd29yZCA9PiBjb25zb2xlLmxvZyh3b3JkKSxcbiAqICAgICBlcnJvcjogZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcjonLCBlcnIpLFxuICogICAgIGNvbXBsZXRlOiAoKSA9PiBjb25zb2xlLmxvZygndGhlIGVuZCcpLFxuICogICB9KTtcbiAqXG4gKiAvLyByZXN1bHQ6XG4gKiAvLyAndGhlIGVuZCdcbiAqIGBgYFxuICpcbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gZW1wdHkgT2JzZXJ2YWJsZSB0aGF0IG9ubHkgY2FsbHNcbiAqIGBjb21wbGV0ZWAgb3IgYGVycm9yYCwgYmFzZWQgb24gd2hpY2ggb25lIGlzIGNhbGxlZCBieSB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaWdub3JlRWxlbWVudHMoKTogT3BlcmF0b3JGdW5jdGlvbjx1bmtub3duLCBuZXZlcj4ge1xuICByZXR1cm4gb3BlcmF0ZSgoc291cmNlLCBzdWJzY3JpYmVyKSA9PiB7XG4gICAgc291cmNlLnN1YnNjcmliZShjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgbm9vcCkpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9tYXAnO1xuXG4vKiogQGRlcHJlY2F0ZWQgVG8gYmUgcmVtb3ZlZCBpbiB2OS4gVXNlIHtAbGluayBtYXB9IGluc3RlYWQ6IGBtYXAoKCkgPT4gdmFsdWUpYC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBUbzxSPih2YWx1ZTogUik6IE9wZXJhdG9yRnVuY3Rpb248dW5rbm93biwgUj47XG4vKipcbiAqIEBkZXByZWNhdGVkIERvIG5vdCBzcGVjaWZ5IGV4cGxpY2l0IHR5cGUgcGFyYW1ldGVycy4gU2lnbmF0dXJlcyB3aXRoIHR5cGUgcGFyYW1ldGVyc1xuICogdGhhdCBjYW5ub3QgYmUgaW5mZXJyZWQgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBgbWFwVG9gIGl0c2VsZiB3aWxsIGJlIHJlbW92ZWQgaW4gdjksXG4gKiB1c2Uge0BsaW5rIG1hcH0gaW5zdGVhZDogYG1hcCgoKSA9PiB2YWx1ZSlgLlxuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBUbzxULCBSPih2YWx1ZTogUik6IE9wZXJhdG9yRnVuY3Rpb248VCwgUj47XG5cbi8qKlxuICogRW1pdHMgdGhlIGdpdmVuIGNvbnN0YW50IHZhbHVlIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSBldmVyeSB0aW1lIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUgZW1pdHMgYSB2YWx1ZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+TGlrZSB7QGxpbmsgbWFwfSwgYnV0IGl0IG1hcHMgZXZlcnkgc291cmNlIHZhbHVlIHRvXG4gKiB0aGUgc2FtZSBvdXRwdXQgdmFsdWUgZXZlcnkgdGltZS48L3NwYW4+XG4gKlxuICogIVtdKG1hcFRvLnBuZylcbiAqXG4gKiBUYWtlcyBhIGNvbnN0YW50IGB2YWx1ZWAgYXMgYXJndW1lbnQsIGFuZCBlbWl0cyB0aGF0IHdoZW5ldmVyIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUgZW1pdHMgYSB2YWx1ZS4gSW4gb3RoZXIgd29yZHMsIGlnbm9yZXMgdGhlIGFjdHVhbCBzb3VyY2UgdmFsdWUsXG4gKiBhbmQgc2ltcGx5IHVzZXMgdGhlIGVtaXNzaW9uIG1vbWVudCB0byBrbm93IHdoZW4gdG8gZW1pdCB0aGUgZ2l2ZW4gYHZhbHVlYC5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogTWFwIGV2ZXJ5IGNsaWNrIHRvIHRoZSBzdHJpbmcgYCdIaSdgXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb21FdmVudCwgbWFwVG8gfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBjbGlja3MgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogY29uc3QgZ3JlZXRpbmdzID0gY2xpY2tzLnBpcGUobWFwVG8oJ0hpJykpO1xuICpcbiAqIGdyZWV0aW5ncy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBtYXB9XG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBtYXAgZWFjaCBzb3VyY2UgdmFsdWUgdG8uXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgZ2l2ZW4gYHZhbHVlYFxuICogZXZlcnkgdGltZSB0aGUgc291cmNlIE9ic2VydmFibGUgZW1pdHMuXG4gKiBAZGVwcmVjYXRlZCBUbyBiZSByZW1vdmVkIGluIHY5LiBVc2Uge0BsaW5rIG1hcH0gaW5zdGVhZDogYG1hcCgoKSA9PiB2YWx1ZSlgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwVG88Uj4odmFsdWU6IFIpOiBPcGVyYXRvckZ1bmN0aW9uPHVua25vd24sIFI+IHtcbiAgcmV0dXJuIG1hcCgoKSA9PiB2YWx1ZSk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBPYnNlcnZhYmxlSW5wdXQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBjb25jYXQgfSBmcm9tICcuLi9vYnNlcnZhYmxlL2NvbmNhdCc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAnLi90YWtlJztcbmltcG9ydCB7IGlnbm9yZUVsZW1lbnRzIH0gZnJvbSAnLi9pZ25vcmVFbGVtZW50cyc7XG5pbXBvcnQgeyBtYXBUbyB9IGZyb20gJy4vbWFwVG8nO1xuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICcuL21lcmdlTWFwJztcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcblxuLyoqIEBkZXByZWNhdGVkIFRoZSBgc3Vic2NyaXB0aW9uRGVsYXlgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguICovXG5leHBvcnQgZnVuY3Rpb24gZGVsYXlXaGVuPFQ+KFxuICBkZWxheUR1cmF0aW9uU2VsZWN0b3I6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gT2JzZXJ2YWJsZUlucHV0PGFueT4sXG4gIHN1YnNjcmlwdGlvbkRlbGF5OiBPYnNlcnZhYmxlPGFueT5cbik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPjtcbmV4cG9ydCBmdW5jdGlvbiBkZWxheVdoZW48VD4oZGVsYXlEdXJhdGlvblNlbGVjdG9yOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGVJbnB1dDxhbnk+KTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+O1xuXG4vKipcbiAqIERlbGF5cyB0aGUgZW1pc3Npb24gb2YgaXRlbXMgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgYnkgYSBnaXZlbiB0aW1lIHNwYW5cbiAqIGRldGVybWluZWQgYnkgdGhlIGVtaXNzaW9ucyBvZiBhbm90aGVyIE9ic2VydmFibGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkl0J3MgbGlrZSB7QGxpbmsgZGVsYXl9LCBidXQgdGhlIHRpbWUgc3BhbiBvZiB0aGVcbiAqIGRlbGF5IGR1cmF0aW9uIGlzIGRldGVybWluZWQgYnkgYSBzZWNvbmQgT2JzZXJ2YWJsZS48L3NwYW4+XG4gKlxuICogIVtdKGRlbGF5V2hlbi5wbmcpXG4gKlxuICogYGRlbGF5V2hlbmAgb3BlcmF0b3Igc2hpZnRzIGVhY2ggZW1pdHRlZCB2YWx1ZSBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBieVxuICogYSB0aW1lIHNwYW4gZGV0ZXJtaW5lZCBieSBhbm90aGVyIE9ic2VydmFibGUuIFdoZW4gdGhlIHNvdXJjZSBlbWl0cyBhIHZhbHVlLFxuICogdGhlIGBkZWxheUR1cmF0aW9uU2VsZWN0b3JgIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSB2YWx1ZSBlbWl0dGVkIGZyb21cbiAqIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGBkZWxheUR1cmF0aW9uU2VsZWN0b3JgLlxuICogVGhlIGBkZWxheUR1cmF0aW9uU2VsZWN0b3JgIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYW4ge0BsaW5rIE9ic2VydmFibGVJbnB1dH0sXG4gKiB0aGF0IGlzIGludGVybmFsbHkgY29udmVydGVkIHRvIGFuIE9ic2VydmFibGUgdGhhdCBpcyBjYWxsZWQgdGhlIFwiZHVyYXRpb25cIlxuICogT2JzZXJ2YWJsZS5cbiAqXG4gKiBUaGUgc291cmNlIHZhbHVlIGlzIGVtaXR0ZWQgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlIG9ubHkgd2hlbiB0aGUgXCJkdXJhdGlvblwiXG4gKiBPYnNlcnZhYmxlIGVtaXRzICh7QGxpbmsgZ3VpZGUvZ2xvc3NhcnktYW5kLXNlbWFudGljcyNuZXh0IG5leHR9cykgYW55IHZhbHVlLlxuICogVXBvbiB0aGF0LCB0aGUgXCJkdXJhdGlvblwiIE9ic2VydmFibGUgZ2V0cyB1bnN1YnNjcmliZWQuXG4gKlxuICogQmVmb3JlIFJ4SlMgVjcsIHRoZSB7QGxpbmsgZ3VpZGUvZ2xvc3NhcnktYW5kLXNlbWFudGljcyNjb21wbGV0ZSBjb21wbGV0aW9ufVxuICogb2YgdGhlIFwiZHVyYXRpb25cIiBPYnNlcnZhYmxlIHdvdWxkIGhhdmUgYmVlbiB0cmlnZ2VyaW5nIHRoZSBlbWlzc2lvbiBvZiB0aGVcbiAqIHNvdXJjZSB2YWx1ZSB0byB0aGUgb3V0cHV0IE9ic2VydmFibGUsIGJ1dCB3aXRoIFJ4SlMgVjcsIHRoaXMgaXMgbm90IHRoZSBjYXNlXG4gKiBhbnltb3JlLlxuICpcbiAqIE9ubHkgbmV4dCBub3RpZmljYXRpb25zIChmcm9tIHRoZSBcImR1cmF0aW9uXCIgT2JzZXJ2YWJsZSkgdHJpZ2dlciB2YWx1ZXMgZnJvbVxuICogdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHRvIGJlIHBhc3NlZCB0byB0aGUgb3V0cHV0IE9ic2VydmFibGUuIElmIHRoZSBcImR1cmF0aW9uXCJcbiAqIE9ic2VydmFibGUgb25seSBlbWl0cyB0aGUgY29tcGxldGUgbm90aWZpY2F0aW9uICh3aXRob3V0IG5leHQpLCB0aGUgdmFsdWVcbiAqIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHdpbGwgbmV2ZXIgZ2V0IHRvIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSAtIGl0XG4gKiB3aWxsIGJlIHN3YWxsb3dlZC4gSWYgdGhlIFwiZHVyYXRpb25cIiBPYnNlcnZhYmxlIGVycm9ycywgdGhlIGVycm9yIHdpbGwgYmVcbiAqIHByb3BhZ2F0ZWQgdG8gdGhlIG91dHB1dCBPYnNlcnZhYmxlLlxuICpcbiAqIE9wdGlvbmFsbHksIGBkZWxheVdoZW5gIHRha2VzIGEgc2Vjb25kIGFyZ3VtZW50LCBgc3Vic2NyaXB0aW9uRGVsYXlgLCB3aGljaFxuICogaXMgYW4gT2JzZXJ2YWJsZS4gV2hlbiBgc3Vic2NyaXB0aW9uRGVsYXlgIGVtaXRzIGl0cyBmaXJzdCB2YWx1ZSBvclxuICogY29tcGxldGVzLCB0aGUgc291cmNlIE9ic2VydmFibGUgaXMgc3Vic2NyaWJlZCB0byBhbmQgc3RhcnRzIGJlaGF2aW5nIGxpa2VcbiAqIGRlc2NyaWJlZCBpbiB0aGUgcHJldmlvdXMgcGFyYWdyYXBoLiBJZiBgc3Vic2NyaXB0aW9uRGVsYXlgIGlzIG5vdCBwcm92aWRlZCxcbiAqIGBkZWxheVdoZW5gIHdpbGwgc3Vic2NyaWJlIHRvIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBhcyBzb29uIGFzIHRoZSBvdXRwdXRcbiAqIE9ic2VydmFibGUgaXMgc3Vic2NyaWJlZC5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogRGVsYXkgZWFjaCBjbGljayBieSBhIHJhbmRvbSBhbW91bnQgb2YgdGltZSwgYmV0d2VlbiAwIGFuZCA1IHNlY29uZHNcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbUV2ZW50LCBkZWxheVdoZW4sIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IGRlbGF5ZWRDbGlja3MgPSBjbGlja3MucGlwZShcbiAqICAgZGVsYXlXaGVuKCgpID0+IGludGVydmFsKE1hdGgucmFuZG9tKCkgKiA1MDAwKSlcbiAqICk7XG4gKiBkZWxheWVkQ2xpY2tzLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGRlbGF5fVxuICogQHNlZSB7QGxpbmsgdGhyb3R0bGV9XG4gKiBAc2VlIHtAbGluayB0aHJvdHRsZVRpbWV9XG4gKiBAc2VlIHtAbGluayBkZWJvdW5jZX1cbiAqIEBzZWUge0BsaW5rIGRlYm91bmNlVGltZX1cbiAqIEBzZWUge0BsaW5rIHNhbXBsZX1cbiAqIEBzZWUge0BsaW5rIHNhbXBsZVRpbWV9XG4gKiBAc2VlIHtAbGluayBhdWRpdH1cbiAqIEBzZWUge0BsaW5rIGF1ZGl0VGltZX1cbiAqXG4gKiBAcGFyYW0gZGVsYXlEdXJhdGlvblNlbGVjdG9yIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGBPYnNlcnZhYmxlSW5wdXRgIGZvclxuICogZWFjaCBgdmFsdWVgIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCB3aGljaCBpcyB0aGVuIHVzZWQgdG8gZGVsYXkgdGhlXG4gKiBlbWlzc2lvbiBvZiB0aGF0IGB2YWx1ZWAgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlIHVudGlsIHRoZSBgT2JzZXJ2YWJsZUlucHV0YFxuICogcmV0dXJuZWQgZnJvbSB0aGlzIGZ1bmN0aW9uIGVtaXRzIGEgbmV4dCB2YWx1ZS4gV2hlbiBjYWxsZWQsIGJlc2lkZSBgdmFsdWVgLFxuICogdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBhIHplcm8tYmFzZWQgYGluZGV4YCBvZiB0aGUgZW1pc3Npb24gb3JkZXIuXG4gKiBAcGFyYW0gc3Vic2NyaXB0aW9uRGVsYXkgQW4gT2JzZXJ2YWJsZSB0aGF0IHRyaWdnZXJzIHRoZSBzdWJzY3JpcHRpb24gdG8gdGhlXG4gKiBzb3VyY2UgT2JzZXJ2YWJsZSBvbmNlIGl0IGVtaXRzIGFueSB2YWx1ZS5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGRlbGF5cyB0aGUgZW1pc3Npb25zIG9mXG4gKiB0aGUgc291cmNlIE9ic2VydmFibGUgYnkgYW4gYW1vdW50IG9mIHRpbWUgc3BlY2lmaWVkIGJ5IHRoZSBPYnNlcnZhYmxlXG4gKiByZXR1cm5lZCBieSBgZGVsYXlEdXJhdGlvblNlbGVjdG9yYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5V2hlbjxUPihcbiAgZGVsYXlEdXJhdGlvblNlbGVjdG9yOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGVJbnB1dDxhbnk+LFxuICBzdWJzY3JpcHRpb25EZWxheT86IE9ic2VydmFibGU8YW55PlxuKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcbiAgaWYgKHN1YnNjcmlwdGlvbkRlbGF5KSB7XG4gICAgLy8gREVQUkVDQVRFRCBQQVRIXG4gICAgcmV0dXJuIChzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+XG4gICAgICBjb25jYXQoc3Vic2NyaXB0aW9uRGVsYXkucGlwZSh0YWtlKDEpLCBpZ25vcmVFbGVtZW50cygpKSwgc291cmNlLnBpcGUoZGVsYXlXaGVuKGRlbGF5RHVyYXRpb25TZWxlY3RvcikpKTtcbiAgfVxuXG4gIHJldHVybiBtZXJnZU1hcCgodmFsdWUsIGluZGV4KSA9PiBpbm5lckZyb20oZGVsYXlEdXJhdGlvblNlbGVjdG9yKHZhbHVlLCBpbmRleCkpLnBpcGUodGFrZSgxKSwgbWFwVG8odmFsdWUpKSk7XG59XG4iLCAiaW1wb3J0IHsgYXN5bmNTY2hlZHVsZXIgfSBmcm9tICcuLi9zY2hlZHVsZXIvYXN5bmMnO1xuaW1wb3J0IHsgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZGVsYXlXaGVuIH0gZnJvbSAnLi9kZWxheVdoZW4nO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tICcuLi9vYnNlcnZhYmxlL3RpbWVyJztcblxuLyoqXG4gKiBEZWxheXMgdGhlIGVtaXNzaW9uIG9mIGl0ZW1zIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGJ5IGEgZ2l2ZW4gdGltZW91dCBvclxuICogdW50aWwgYSBnaXZlbiBEYXRlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5UaW1lIHNoaWZ0cyBlYWNoIGl0ZW0gYnkgc29tZSBzcGVjaWZpZWQgYW1vdW50IG9mXG4gKiBtaWxsaXNlY29uZHMuPC9zcGFuPlxuICpcbiAqICFbXShkZWxheS5zdmcpXG4gKlxuICogSWYgdGhlIGRlbGF5IGFyZ3VtZW50IGlzIGEgTnVtYmVyLCB0aGlzIG9wZXJhdG9yIHRpbWUgc2hpZnRzIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUgYnkgdGhhdCBhbW91bnQgb2YgdGltZSBleHByZXNzZWQgaW4gbWlsbGlzZWNvbmRzLiBUaGUgcmVsYXRpdmVcbiAqIHRpbWUgaW50ZXJ2YWxzIGJldHdlZW4gdGhlIHZhbHVlcyBhcmUgcHJlc2VydmVkLlxuICpcbiAqIElmIHRoZSBkZWxheSBhcmd1bWVudCBpcyBhIERhdGUsIHRoaXMgb3BlcmF0b3IgdGltZSBzaGlmdHMgdGhlIHN0YXJ0IG9mIHRoZVxuICogT2JzZXJ2YWJsZSBleGVjdXRpb24gdW50aWwgdGhlIGdpdmVuIGRhdGUgb2NjdXJzLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogRGVsYXkgZWFjaCBjbGljayBieSBvbmUgc2Vjb25kXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb21FdmVudCwgZGVsYXkgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBjbGlja3MgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogY29uc3QgZGVsYXllZENsaWNrcyA9IGNsaWNrcy5waXBlKGRlbGF5KDEwMDApKTsgLy8gZWFjaCBjbGljayBlbWl0dGVkIGFmdGVyIDEgc2Vjb25kXG4gKiBkZWxheWVkQ2xpY2tzLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqIGBgYFxuICpcbiAqIERlbGF5IGFsbCBjbGlja3MgdW50aWwgYSBmdXR1cmUgZGF0ZSBoYXBwZW5zXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb21FdmVudCwgZGVsYXkgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBjbGlja3MgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCdNYXJjaCAxNSwgMjA1MCAxMjowMDowMCcpOyAvLyBpbiB0aGUgZnV0dXJlXG4gKiBjb25zdCBkZWxheWVkQ2xpY2tzID0gY2xpY2tzLnBpcGUoZGVsYXkoZGF0ZSkpOyAvLyBjbGljayBlbWl0dGVkIG9ubHkgYWZ0ZXIgdGhhdCBkYXRlXG4gKiBkZWxheWVkQ2xpY2tzLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGRlbGF5V2hlbn1cbiAqIEBzZWUge0BsaW5rIHRocm90dGxlfVxuICogQHNlZSB7QGxpbmsgdGhyb3R0bGVUaW1lfVxuICogQHNlZSB7QGxpbmsgZGVib3VuY2V9XG4gKiBAc2VlIHtAbGluayBkZWJvdW5jZVRpbWV9XG4gKiBAc2VlIHtAbGluayBzYW1wbGV9XG4gKiBAc2VlIHtAbGluayBzYW1wbGVUaW1lfVxuICogQHNlZSB7QGxpbmsgYXVkaXR9XG4gKiBAc2VlIHtAbGluayBhdWRpdFRpbWV9XG4gKlxuICogQHBhcmFtIHtudW1iZXJ8RGF0ZX0gZHVlIFRoZSBkZWxheSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgKGEgYG51bWJlcmApIG9yXG4gKiBhIGBEYXRlYCB1bnRpbCB3aGljaCB0aGUgZW1pc3Npb24gb2YgdGhlIHNvdXJjZSBpdGVtcyBpcyBkZWxheWVkLlxuICogQHBhcmFtIHtTY2hlZHVsZXJMaWtlfSBbc2NoZWR1bGVyPWFzeW5jXSBUaGUge0BsaW5rIFNjaGVkdWxlckxpa2V9IHRvIHVzZSBmb3JcbiAqIG1hbmFnaW5nIHRoZSB0aW1lcnMgdGhhdCBoYW5kbGUgdGhlIHRpbWUtc2hpZnQgZm9yIGVhY2ggaXRlbS5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGRlbGF5cyB0aGUgZW1pc3Npb25zIG9mXG4gKiB0aGUgc291cmNlIE9ic2VydmFibGUgYnkgdGhlIHNwZWNpZmllZCB0aW1lb3V0IG9yIERhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxheTxUPihkdWU6IG51bWJlciB8IERhdGUsIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSA9IGFzeW5jU2NoZWR1bGVyKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcbiAgY29uc3QgZHVyYXRpb24gPSB0aW1lcihkdWUsIHNjaGVkdWxlcik7XG4gIHJldHVybiBkZWxheVdoZW4oKCkgPT4gZHVyYXRpb24pO1xufVxuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFBvaW50ZXJFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCB0eXBlIE1vdXNlRXZlbnQgPSBQb2ludGVyRXZlbnQgJiB7XG4gICAgY2xpZW50WD86IG51bWJlcjtcbiAgICBjbGllbnRZPzogbnVtYmVyO1xuICAgIHBvaW50ZXJJZD86IG51bWJlcjtcbiAgICBidXR0b25zPzogbnVtYmVyO1xufTtcbmV4cG9ydCB0eXBlIFdoZWVsRXZlbnQgPSBQb2ludGVyRXZlbnQgJiB7IGRlbHRhWDogbnVtYmVyOyBkZWx0YVk6IG51bWJlcjsgZGVsdGFaOiBudW1iZXIgfTtcbmV4cG9ydCB0eXBlIE1vdXNlSG9zdCA9IFZpZXcgJiB7XG4gICAgc2V0UG9pbnRlckNhcHR1cmU6IChwb2ludGVySWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgICByZWxlYXNlUG9pbnRlckNhcHR1cmU6IChwb2ludGVySWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgICBvbndoZWVsPzogKGU6IFdoZWVsRXZlbnQpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZW51bSBNb3VzZUJ1dHRvbiB7XG4gICAgTGVmdCA9IDEsXG4gICAgUmlnaHQgPSAyLFxuICAgIE1pZGRsZSA9IDQsXG4gICAgQWxsID0gNyxcbn1cblxuZXhwb3J0IGNvbnN0IE1vdmVhYmxlVmlldyA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIHBvc2l0aW9uOiBpbml0UG9zaXRpb24sXG4gICAgb25Nb3ZlLFxuICAgIG1vdXNlQnV0dG9uID0gTW91c2VCdXR0b24uQWxsLFxuICAgIGVuYWJsZVNjYWxpbmcgPSBmYWxzZSxcbiAgICB3aG9sZUNhbnZhcyA9IGZhbHNlLFxuICAgIGlubmVyQ2xhc3NOYW1lLFxuICAgIG91dGVyQ2xhc3NOYW1lLFxufToge1xuICAgIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbiAgICBIZWFkZXJDb21wb25lbnQ/OiAoKSA9PiBKU1guRWxlbWVudDtcbiAgICBwb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlciB9O1xuICAgIG9uTW92ZTogKHBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH0pID0+IHZvaWQ7XG4gICAgbW91c2VCdXR0b24/OiBNb3VzZUJ1dHRvbjtcbiAgICBlbmFibGVTY2FsaW5nPzogYm9vbGVhbjtcbiAgICB3aG9sZUNhbnZhcz86IGJvb2xlYW47XG4gICAgaW5uZXJDbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgb3V0ZXJDbGFzc05hbWU/OiBzdHJpbmc7XG59KSA9PiB7XG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHg6IGluaXRQb3NpdGlvbi54LFxuICAgICAgICB5OiBpbml0UG9zaXRpb24ueSxcbiAgICAgICAgc2NhbGU6IGluaXRQb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgZHJhZ1BvaW50ZXJJZDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeERyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeURyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeFBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgICAgIHlQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RhcnREcmFnID0gdXNlU3RhYmxlQ2FsbGJhY2soKGU6IE1vdXNlRXZlbnQsIGNvbnRleHRTY2FsZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICghKChlLmJ1dHRvbnMgPz8gMCkgJiBtb3VzZUJ1dHRvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB4UG9pbnRlciA9IGUuY2xpZW50WCA/PyAwO1xuICAgICAgICBjb25zdCB5UG9pbnRlciA9IGUuY2xpZW50WSA/PyAwO1xuICAgICAgICBjb25zb2xlLmxvZyhgc3RhcnREcmFnYCwgeyB4UG9pbnRlciwgeVBvaW50ZXIsIGUsIHBvc2l0aW9uLCBjb250ZXh0U2NhbGUgfSk7XG5cbiAgICAgICAgaG9zdFJlZi5jdXJyZW50Py5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCA/PyAwKTtcblxuICAgICAgICBzZXRQb3NpdGlvbihzID0+ICh7XG4gICAgICAgICAgICAuLi5zLFxuICAgICAgICAgICAgZHJhZ1BvaW50ZXJJZDogZS5wb2ludGVySWQsXG4gICAgICAgICAgICB4RHJhZ1N0YXJ0OiBzLngsXG4gICAgICAgICAgICB5RHJhZ1N0YXJ0OiBzLnksXG4gICAgICAgICAgICB4UG9pbnRlckRyYWdTdGFydDogeFBvaW50ZXIsXG4gICAgICAgICAgICB5UG9pbnRlckRyYWdTdGFydDogeVBvaW50ZXIsXG4gICAgICAgIH0pKTtcbiAgICB9KTtcbiAgICBjb25zdCBlbmREcmFnID0gdXNlU3RhYmxlQ2FsbGJhY2soKGU6IE1vdXNlRXZlbnQsIGNvbnRleHRTY2FsZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChwb3NpdGlvbi5kcmFnUG9pbnRlcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBob3N0UmVmLmN1cnJlbnQ/LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShwb3NpdGlvbi5kcmFnUG9pbnRlcklkKTtcblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeFBvaW50ZXIgPSBlLmNsaWVudFggPz8gMDtcbiAgICAgICAgY29uc3QgeVBvaW50ZXIgPSBlLmNsaWVudFkgPz8gMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGVuZERyYWdgLCB7IHhQb2ludGVyLCB5UG9pbnRlciwgZSwgcG9zaXRpb24sIGNvbnRleHRTY2FsZSB9KTtcblxuICAgICAgICBjb25zdCBuZXdYID0gKHBvc2l0aW9uLnhEcmFnU3RhcnQgPz8gMCkgKyAoeFBvaW50ZXIgLSAocG9zaXRpb24ueFBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlO1xuICAgICAgICBjb25zdCBuZXdZID0gKHBvc2l0aW9uLnlEcmFnU3RhcnQgPz8gMCkgKyAoeVBvaW50ZXIgLSAocG9zaXRpb24ueVBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICB4OiBuZXdYLFxuICAgICAgICAgICAgeTogbmV3WSxcbiAgICAgICAgICAgIGRyYWdQb2ludGVySWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICB5UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgb25Nb3ZlKHtcbiAgICAgICAgICAgIHg6IG5ld1gsXG4gICAgICAgICAgICB5OiBuZXdZLFxuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbW92ZURyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmRyYWdQb2ludGVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHhQb2ludGVyID0gZS5jbGllbnRYID8/IDA7XG4gICAgICAgIGNvbnN0IHlQb2ludGVyID0gZS5jbGllbnRZID8/IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBtb3ZlRHJhZ2AsIHsgeFBvaW50ZXIsIHlQb2ludGVyLCBlLCBwb3NpdGlvbiwgY29udGV4dFNjYWxlIH0pO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICB4OiAocy54RHJhZ1N0YXJ0ID8/IDApICsgKHhQb2ludGVyIC0gKHMueFBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlLFxuICAgICAgICAgICAgeTogKHMueURyYWdTdGFydCA/PyAwKSArICh5UG9pbnRlciAtIChzLnlQb2ludGVyRHJhZ1N0YXJ0ID8/IDApKSAvIGNvbnRleHRTY2FsZSxcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2Nyb2xsV2hlZWwgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogV2hlZWxFdmVudCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgb253aGVlbGAsIHsgZSwgcG9zaXRpb24gfSk7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IGUuZGVsdGFZO1xuICAgICAgICBpZiAoIWRlbHRhWSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlbmFibGVTY2FsaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRQb3NpdGlvbihzID0+ICh7XG4gICAgICAgICAgICAuLi5zLFxuICAgICAgICAgICAgc2NhbGU6IHMuc2NhbGUgKiBNYXRoLnBvdygwLjksIGRlbHRhWSA+IDAgPyAxIDogLTEpLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBob3N0UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IE1vdXNlSG9zdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaG9zdCA9IGhvc3RSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFob3N0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgaG9zdGAsIHsgaG9zdCB9KTtcbiAgICAgICAgaG9zdC5vbndoZWVsID0gc2Nyb2xsV2hlZWw7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBob3N0Lm9ud2hlZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgfSwgWyFob3N0UmVmLmN1cnJlbnRdKTtcblxuICAgIGNvbnN0IHdob2xlSG9zdFJlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBNb3VzZUhvc3QpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvc3QgPSB3aG9sZUhvc3RSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFob3N0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgaG9zdGAsIHsgaG9zdCB9KTtcbiAgICAgICAgaG9zdC5vbndoZWVsID0gc2Nyb2xsV2hlZWw7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBob3N0Lm9ud2hlZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgfSwgWyF3aG9sZUhvc3RSZWYuY3VycmVudF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vdmVhYmxlQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIHsoeyBwb3NpdGlvbjogY29udGV4dFNjYWxlIH0pID0+IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4LWNvbCBmbGV4LTEnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aG9sZUNhbnZhcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4LWNvbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtIZWFkZXJDb21wb25lbnQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ29tcG9uZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleC0xIGJnLWZ1Y2hzaWEtNjAwIG9wYWNpdHktNTAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17d2hvbGVIb3N0UmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtlID0+IHdob2xlQ2FudmFzICYmIHN0YXJ0RHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17ZSA9PiBlbmREcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e2UgPT4gbW92ZURyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgJHt3aG9sZUNhbnZhcyA/IGBvdmVyZmxvdy1oaWRkZW5gIDogYGB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17b3V0ZXJDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aG9zdFJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17ZSA9PiB3aG9sZUNhbnZhcyAmJiBzdGFydERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9e2UgPT4gZW5kRHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJNb3ZlPXtlID0+IG1vdmVEcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lubmVyQ2xhc3NOYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weCkgc2NhbGUoJHtwb3NpdGlvbi5zY2FsZX0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtlID0+IHN0YXJ0RHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92ZWFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHBvc2l0aW9uLCB3aG9sZUNhbnZhcyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vdmVhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9Nb3ZlYWJsZUNvbnRleHQuQ29uc3VtZXIgPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgTW92ZWFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gICAgd2hvbGVDYW52YXM6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgIH0sXG59KTtcbiIsICJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHtcbiAgICBjcmVhdGVDb250ZXh0LFxuICAgIHVzZUNvbnRleHQsXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZUxheW91dEVmZmVjdCxcbiAgICB1c2VSZWYsXG4gICAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFByZXNzYWJsZSwgUG9pbnRlckV2ZW50IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgY29tYmluZUxhdGVzdCwgemlwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1vdXNlQnV0dG9uLCBNb3ZlYWJsZUNvbnRleHQsIE1vdmVhYmxlVmlldyB9IGZyb20gJy4vbW92ZWFibGUtdmlldyc7XG5pbXBvcnQge1xuICAgIFBpcGVzY3JpcHROb2RlLFxuICAgIFBpcGVzY3JpcHRQaXBlLFxuICAgIFBpcGVzY3JpcHRQaXBlVmFsdWUsXG4gICAgUGlwZXNjcmlwdFR5cGUsXG4gICAgUGlwZXNjcmlwdFZhcmlhYmxlLFxuICAgIFBpcGVzY3JpcHRXb3JrZmxvdyxcbiAgICBQaXBlc2NyaXB0V29ya2Zsb3dJbnB1dCxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgUGlwZUVuZHBvaW50VmlldywgUGlwZVZpZXcsIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSwgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JQaXBlU291cmNlLCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93IH0gZnJvbSAnLi9waXBlcyc7XG5pbXBvcnQgeyBXb3JrZmxvd0lucHV0TmFtZSwgZ2V0VHlwZU5hbWUgfSBmcm9tICcuL3dvcmstbmFtZXMnO1xuXG5leHBvcnQgY29uc3QgV29ya0Zsb3dWaWV3ID0gKHtcbiAgICB3b3JrZmxvdyxcbiAgICBmdWxsID0gZmFsc2UsXG4gICAgaGlkZVRpdGxlcyA9IGZhbHNlLFxufToge1xuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3c7XG4gICAgZnVsbD86IGJvb2xlYW47XG4gICAgaGlkZVRpdGxlcz86IGJvb2xlYW47XG59KSA9PiB7XG4gICAgLy8gJHtmdWxsID8gYG1pbi13LVsyMHZ3XSBtaW4taC1bMjB2aF1gIDogYG1pbi13LVsyMHB4XSBtaW4taC1bMTBweF1gfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LWNvbHVtbiByZWxhdGl2ZSBiZy1zbGF0ZS05NTAvNzUgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gbS1bLTFweF0gcm91bmRlZFxuICAgICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyFoaWRlVGl0bGVzICYmIChcbiAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e2Ake3dvcmtmbG93Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmlucHV0cy5tYXAoaW5wdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5wdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya2Zsb3dJbnB1dE5hbWUgaW5wdXQ9e2lucHV0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGFuaW1hdGUtYm91bmNlIHRleHQtWzhweF0gYWJzb2x1dGUgdG9wLTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdTI2Q0ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuYm9keS5ub2Rlcz8ubWFwKG4gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtuLm5vZGVJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3IG5vZGU9e259IGNvbnRhaW5lcj17d29ya2Zsb3d9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmJvZHkua2luZCA9PT0gYG9wZXJhdG9yYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0yIGZsZXgtcm93IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtYmx1ZS00MDAnPnt3b3JrZmxvdy5ib2R5Lm9wZXJhdG9yfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7W2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBvcGVyYXRvcmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXS5tYXAob3BlcmF0b3JFbmRwb2ludElkID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e29wZXJhdG9yRW5kcG9pbnRJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e29wZXJhdG9yRW5kcG9pbnRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5pbnB1dHMubWFwKGluUGlwZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luUGlwZS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uSWQ9e29wZXJhdG9yRW5kcG9pbnRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93VXJpOiB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpblBpcGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5vdXRwdXRzLm1hcChvdXRwdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0cHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xIGZsZXgtcm93IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZS5raW5kID09PSBgZGF0YWAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtcHVycGxlLTQwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3V0cHV0LnBpcGUuanNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvdXRwdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JQaXBlU291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXBlOiBvdXRwdXQucGlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pPy5tYXAoc291cmNlSWQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbklkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93VXJpOiB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvdXRwdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkPXtzb3VyY2VJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtYmx1ZS0zMDAnPntgJHtvdXRwdXQubmFtZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDwvVmlldz5cblxuICAgICAgICAgICAgeyFoaWRlVGl0bGVzICYmIChcbiAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e2Ake3dvcmtmbG93LndvcmtmbG93VXJpfWB9PC9UZXh0PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIHt3b3JrZmxvdy53b3JrZmxvd3M/Lm1hcCh3ID0+IChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt3Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIGxlZnQtMCB0b3AtMCBzY2FsZS01MCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V29ya0Zsb3dWaWV3IHdvcmtmbG93PXt3fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkpfSAqL31cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBOb2RlVmlldyA9ICh7IG5vZGUsIGNvbnRhaW5lciB9OiB7IG5vZGU6IFBpcGVzY3JpcHROb2RlOyBjb250YWluZXI6IFBpcGVzY3JpcHRXb3JrZmxvdyB9KSA9PiB7XG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHg6IG5vZGUubGF5b3V0Py5wb3NpdGlvbi54ID8/IDAsXG4gICAgICAgIHk6IG5vZGUubGF5b3V0Py5wb3NpdGlvbi55ID8/IDAsXG4gICAgICAgIHNjYWxlOiBub2RlLmxheW91dD8uc2NhbGUgPz8gMSxcbiAgICB9KTtcbiAgICBjb25zdCBtb3ZlTm9kZSA9IHVzZVN0YWJsZUNhbGxiYWNrKCh2YWx1ZTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlciB9KSA9PiB7XG4gICAgICAgIHNldFBvc2l0aW9uKHZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5vZGVWaWV3YCwgeyBub2RlLCBjb250YWluZXIgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB3b3JrZmxvdyA9ICgoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXIud29ya2Zsb3dzPy5maW5kKHcgPT4gdy53b3JrZmxvd1VyaSA9PT0gbm9kZS53b3JrZmxvd1VyaSk7XG4gICAgfSkoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TW92ZWFibGVWaWV3XG4gICAgICAgICAgICBwb3NpdGlvbj17e1xuICAgICAgICAgICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBzY2FsZTogcG9zaXRpb24uc2NhbGUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3ZlPXttb3ZlTm9kZX1cbiAgICAgICAgICAgIG1vdXNlQnV0dG9uPXtNb3VzZUJ1dHRvbi5MZWZ0fVxuICAgICAgICA+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleC1jb2x1bW4gYmctemluYy05NTAvNzUgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gbS1bLTFweF0gcm91bmRlZCdcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weClgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e3dvcmtmbG93Lm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTIgdGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz4je25vZGUubm9kZUlkfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAge3dvcmtmbG93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpbnB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQaXBlID0gbm9kZS5pbnB1dFBpcGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0+IHAubmFtZSA9PT0gaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dFBpcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRQaXBlLmtpbmQgPT09IGBkYXRhYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nbWwtWy0xNnB4XSBtci1bMTZweF0gdGV4dC1wdXJwbGUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dFBpcGUuanNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbWwtWy04cHhdIG1yLVswcHhdJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbm9kZS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yUGlwZVNvdXJjZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvdzogY29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlwZTogbm9kZS5pbnB1dFBpcGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4Lm5hbWUgPT09IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KT8ubWFwKHNvdXJjZUlkID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c291cmNlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25JZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpbnB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkPXtzb3VyY2VJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtmbG93SW5wdXROYW1lIGlucHV0PXtpbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3dvcmtmbG93fSBoaWRlVGl0bGVzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93Lm91dHB1dHMubWFwKG91dHB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dHB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xIGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtMzAwJz57YCR7b3V0cHV0Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+OjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbWwtWzBweF0gbXItWy04cHhdJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbm9kZS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvdXRwdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgey8qIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57bm9kZS5pbXBsZW1lbnRhdGlvbi59PC9UZXh0PiAqL31cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9Nb3ZlYWJsZVZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7XG4gICAgY3JlYXRlQ29udGV4dCxcbiAgICB1c2VDb250ZXh0LFxuICAgIHVzZUVmZmVjdCxcbiAgICB1c2VMYXlvdXRFZmZlY3QsXG4gICAgdXNlUmVmLFxuICAgIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFBvaW50ZXJFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIHppcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNb3VzZUJ1dHRvbiwgTW92ZWFibGVDb250ZXh0LCBNb3ZlYWJsZVZpZXcgfSBmcm9tICcuL21vdmVhYmxlLXZpZXcnO1xuaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0Tm9kZSxcbiAgICBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdFBpcGUsXG4gICAgUGlwZXNjcmlwdFBpcGVWYWx1ZSxcbiAgICBQaXBlc2NyaXB0VHlwZSxcbiAgICBQaXBlc2NyaXB0VmFyaWFibGUsXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93LFxuICAgIFBpcGVzY3JpcHRXb3JrZmxvd0lucHV0LFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUgPSAoe1xuICAgIG5vZGVJZCxcbiAgICBuYW1lLFxuICAgIGRpcmVjdGlvbixcbn06IHtcbiAgICBub2RlSWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGlyZWN0aW9uOiBgb3V0YCB8IGBpbmA7XG59KSA9PiB7XG4gICAgcmV0dXJuIGBub2RlOiR7bm9kZUlkfToke2RpcmVjdGlvbn06JHtuYW1lfWA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyA9ICh7XG4gICAgd29ya2Zsb3dVcmksXG4gICAgbmFtZSxcbiAgICBkaXJlY3Rpb24sXG59OiB7XG4gICAgd29ya2Zsb3dVcmk6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGlyZWN0aW9uOiBgb3V0YCB8IGBpbmA7XG59KSA9PiB7XG4gICAgcmV0dXJuIGB3b3JrZmxvdzoke3dvcmtmbG93VXJpfToke2RpcmVjdGlvbn06JHtuYW1lfWA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JQaXBlU291cmNlID0gKHtcbiAgICBwaXBlLFxuICAgIHdvcmtmbG93LFxufToge1xuICAgIHBpcGU6IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHRQaXBlVmFsdWU7XG4gICAgd29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdztcbn0pID0+IHtcbiAgICBpZiAoIXBpcGUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAocGlwZS5raW5kID09PSBgd29ya2Zsb3ctb3BlcmF0b3JgKSB7XG4gICAgICAgIHJldHVybiBbYG9wZXJhdG9yYF0ubWFwKG5hbWUgPT5cbiAgICAgICAgICAgIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgIHdvcmtmbG93VXJpOiB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocGlwZS5raW5kID09PSBgd29ya2Zsb3ctaW5wdXRgKSB7XG4gICAgICAgIHJldHVybiBbcGlwZS53b3JrZmxvd0lucHV0TmFtZV0ubWFwKG5hbWUgPT5cbiAgICAgICAgICAgIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgIHdvcmtmbG93VXJpOiB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChwaXBlLmtpbmQgPT09IGBub2RlYCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlKHtcbiAgICAgICAgICAgICAgICBub2RlSWQ6IHBpcGUuc291cmNlTm9kZUlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IHBpcGUuc291cmNlTm9kZU91dHB1dE5hbWUsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8vIGlmKHBpcGUua2luZCA9PT0gYGRhdGFgKXtcblxuICAgIC8vIH1cblxuICAgIHJldHVybiBbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGUgPSB7XG4gICAgaG9zdE9ic2VydmFibGU6IE9ic2VydmFibGU8Vmlldz47XG4gICAgaG9zdFZpZXc6IG51bGwgfCBWaWV3O1xuICAgIGVuZHBvaW50czoge1xuICAgICAgICBbaWQ6IHN0cmluZ106IHVuZGVmaW5lZCB8IFN1YmplY3Q8eyB4OiBudW1iZXI7IHk6IG51bWJlciB9PjtcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBQaXBlRW5kcG9pbnRzUmVnaXN0cnkgPSBjcmVhdGVDb250ZXh0PFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGU+KHtcbiAgICBob3N0T2JzZXJ2YWJsZTogbmV3IFN1YmplY3QoKSxcbiAgICBob3N0VmlldzogbnVsbCxcbiAgICBlbmRwb2ludHM6IHt9LFxufSk7XG5cbmNvbnN0IGdldE9yQ3JlYXRlRW5kcG9pbnRTdWJqZWN0ID0gKHJlZ2lzdHJ5OiBQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlLCBpZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgcmVnaXN0cnkuZW5kcG9pbnRzW2lkXVxuICAgICAgICA/PyAocmVnaXN0cnkuZW5kcG9pbnRzW2lkXSA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH0pKVxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgUGlwZVZpZXcgPSAoe1xuICAgIHNvdXJjZUlkLFxuICAgIGRlc3RpbmF0aW9uSWQsXG4gICAgc2lkZSA9IGBpbmZsb3dgLFxufToge1xuICAgIHNvdXJjZUlkOiB1bmRlZmluZWQgfCBzdHJpbmc7XG4gICAgZGVzdGluYXRpb25JZDogc3RyaW5nO1xuICAgIHNpZGU/OiBgaW5mbG93YCB8IGBvdXRmbG93YFxufSkgPT4ge1xuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnkpO1xuXG4gICAgY29uc3QgZGVzdGluYXRpb25FbmRwb2ludCA9IGdldE9yQ3JlYXRlRW5kcG9pbnRTdWJqZWN0KHJlZ2lzdHJ5LCBkZXN0aW5hdGlvbklkKTtcbiAgICBjb25zdCBzb3VyY2VFbmRwb2ludCA9ICFzb3VyY2VJZCA/IHVuZGVmaW5lZCA6IGdldE9yQ3JlYXRlRW5kcG9pbnRTdWJqZWN0KHJlZ2lzdHJ5LCBzb3VyY2VJZCk7XG5cbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgc291cmNlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgZGVzdGluYXRpb246IHsgeDogMCwgeTogMCB9LFxuICAgIH0pO1xuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFzb3VyY2VFbmRwb2ludCB8fCAhZGVzdGluYXRpb25FbmRwb2ludCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFBpcGVWaWV3ICFzb3VyY2VFbmRwb2ludCB8fCAhZGVzdGluYXRpb25FbmRwb2ludGAsIHtcbiAgICAgICAgICAgICAgICBzb3VyY2VJZCxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbklkLFxuICAgICAgICAgICAgICAgIHJlZ2lzdHJ5LFxuICAgICAgICAgICAgICAgIHNvdXJjZUVuZHBvaW50LFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uRW5kcG9pbnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbml0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICAgICAgY29tYmluZUxhdGVzdChbc291cmNlRW5kcG9pbnQsIGRlc3RpbmF0aW9uRW5kcG9pbnQsIGluaXRdKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoW3NvdXJjZSwgZGVzdGluYXRpb25dKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVWaWV3IGRyYXdgLCB7IHNvdXJjZSwgZGVzdGluYXRpb24gfSk7XG4gICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBpbml0aWFsXG4gICAgICAgIGNvbnNvbGUubG9nKGBpbml0aWFsYCk7XG4gICAgICAgIGluaXQubmV4dCgpO1xuICAgIH0sIFshZGVzdGluYXRpb25FbmRwb2ludCwgIXNvdXJjZUVuZHBvaW50XSk7XG5cbiAgICBjb25zdCBkZWJ1ZyA9IGZhbHNlO1xuICAgIGNvbnN0IGlzT3V0ZmxvdyA9IHNpZGUgPT09IGBvdXRmbG93YDtcbiAgICBjb25zdCB4RGVsdGEgPSAoaXNPdXRmbG93ID8gLTEgOiAxKSAqIChwb3NpdGlvbi5kZXN0aW5hdGlvbi54IC0gcG9zaXRpb24uc291cmNlLngpO1xuICAgIGNvbnN0IHlEZWx0YSA9IChpc091dGZsb3cgPyAtMSA6IDEpICogKHBvc2l0aW9uLmRlc3RpbmF0aW9uLnkgLSBwb3NpdGlvbi5zb3VyY2UueSk7XG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHhEZWx0YSAqIHhEZWx0YSArIHlEZWx0YSAqIHlEZWx0YSk7XG4gICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHlEZWx0YSwgeERlbHRhKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J3ctMCBoLTAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy0wIGgtMCBhYnNvbHV0ZSc+XG4gICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgkey14RGVsdGEgKyA0fXB4LCR7LXlEZWx0YSAtIDIgKyAoaXNPdXRmbG93ID8gNCA6IDApfXB4KWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHthbmdsZX1yYWQpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc091dGZsb3cgPyBgYmctYmx1ZS00MDBgIDogYGJnLXJlZC00MDBgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAge2RlYnVnICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIHRyYW5zbGF0ZS15LVsxMDBweF0gcm90YXRlLTQ1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy1bMTAwMHB4XSB0ZXh0LVs0cHhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57YCgke3NvdXJjZUlkfSk9Pigke2Rlc3RpbmF0aW9uSWR9KWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntgKCR7cG9zaXRpb24uc291cmNlLnh9LCR7cG9zaXRpb24uc291cmNlLnl9KT0+KCR7cG9zaXRpb24uZGVzdGluYXRpb24ueH0sJHtwb3NpdGlvbi5kZXN0aW5hdGlvbi55fSlgfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFBpcGVFbmRwb2ludFZpZXcgPSAoeyBpZCB9OiB7IGlkOiBzdHJpbmc7IH0pID0+IHtcbiAgICBjb25zdCBzaXplID0gMTI7XG5cbiAgICBjb25zdCByZWdpc3RyeSA9IHVzZUNvbnRleHQoUGlwZUVuZHBvaW50c1JlZ2lzdHJ5KTtcbiAgICBjb25zdCBtb3ZlQ29udGV4dCA9IHVzZUNvbnRleHQoTW92ZWFibGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHRhcmdldFJlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBWaWV3KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdGAsIHsgcmVnaXN0cnkgfSk7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaCA9IHJlZ2lzdHJ5Lmhvc3RWaWV3O1xuICAgICAgICAgICAgaWYgKCFoKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVFbmRwb2ludFZpZXcgdXNlTGF5b3V0RWZmZWN0IC0gaG9zdCBOT1QgUkVBRFlgLCB7IHJlZ2lzdHJ5IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHQgPSB0YXJnZXRSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghdCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdCAtIGNvbXBvbmVudCBOT1QgUkVBRFlgLCB7IHJlZ2lzdHJ5IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdC5tZWFzdXJlTGF5b3V0KGgsIChsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUGlwZUVuZHBvaW50VmlldyB1c2VMYXlvdXRFZmZlY3QgbWVhc3VyZUxheW91dCBORVhUYCwge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZCxcbiAgICAgICAgICAgICAgICAvLyAgICAgbGVmdCxcbiAgICAgICAgICAgICAgICAvLyAgICAgdG9wLFxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIC8vICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gZ2V0T3JDcmVhdGVFbmRwb2ludFN1YmplY3QocmVnaXN0cnksIGlkKTtcbiAgICAgICAgICAgICAgICBzLm5leHQoe1xuICAgICAgICAgICAgICAgICAgICB4OiBsZWZ0ICsgbW92ZUNvbnRleHQucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG9wICsgbW92ZUNvbnRleHQucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNhbGN1bGF0ZSgpO1xuICAgICAgICByZWdpc3RyeS5ob3N0T2JzZXJ2YWJsZS5zdWJzY3JpYmUoaCA9PiB7XG4gICAgICAgICAgICBjYWxjdWxhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW1xuICAgICAgICAhIXRhcmdldFJlZi5jdXJyZW50LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi54LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi55LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi5zY2FsZSxcbiAgICBdKTtcblxuICAgIGNvbnN0IGRlYnVnID0gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LTIgaC0yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8VmlldyByZWY9e3RhcmdldFJlZn0gY2xhc3NOYW1lPSd3LTAgaC0wIGFic29sdXRlIHB0LTEnPlxuICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS00MDAgYm9yZGVyLVsxcHhdIGJvcmRlci1ibHVlLTk1MCByb3VuZGVkLWZ1bGwnXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IC1zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogLXNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICB7ZGVidWcgJiYgKFxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYWJzb2x1dGUgdHJhbnNsYXRlLXktWzEwMHB4XSByb3RhdGUtOTAnPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNDAwJ1xuICAgICAgICAgICAgICAgICAgICA+e2lkfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7XG4gICAgY3JlYXRlQ29udGV4dCxcbiAgICB1c2VDb250ZXh0LFxuICAgIHVzZUVmZmVjdCxcbiAgICB1c2VMYXlvdXRFZmZlY3QsXG4gICAgdXNlUmVmLFxuICAgIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFBvaW50ZXJFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIHppcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNb3VzZUJ1dHRvbiwgTW92ZWFibGVDb250ZXh0LCBNb3ZlYWJsZVZpZXcgfSBmcm9tICcuL21vdmVhYmxlLXZpZXcnO1xuaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0Tm9kZSxcbiAgICBQaXBlc2NyaXB0UGlwZSxcbiAgICBQaXBlc2NyaXB0UGlwZVZhbHVlLFxuICAgIFBpcGVzY3JpcHRUeXBlLFxuICAgIFBpcGVzY3JpcHRWYXJpYWJsZSxcbiAgICBQaXBlc2NyaXB0V29ya2Zsb3csXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQsXG59IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldFR5cGVOYW1lID0gKHR5cGU6IFBpcGVzY3JpcHRUeXBlKSA9PiB7XG4gICAgaWYgKHR5cGUua2luZCA9PT0gYHNpbXBsZWApIHtcbiAgICAgICAgcmV0dXJuIHR5cGUudHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgV29ya2Zsb3dJbnB1dE5hbWUgPSAoeyBpbnB1dCB9OiB7IGlucHV0OiBQaXBlc2NyaXB0V29ya2Zsb3dJbnB1dCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtYmx1ZS0zMDAgJHtpbnB1dC5pZ25vcmVkID8gYGxpbmUtdGhyb3VnaCBvcGFjaXR5LTUwYCA6IGBgfWB9XG4gICAgICAgID57YCR7aW5wdXQubmFtZX1gfTwvVGV4dD5cbiAgICApO1xufTsiLCAiaW1wb3J0IHsgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSwgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbklucHV0SW5zdGFuY2UsIFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSwgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlLCBQaXBlc2NyaXB0VHlwZSwgUGlwZXNjcmlwdFZhcmlhYmxlLCBQaXBlc2NyaXB0V29ya2Zsb3csIFBpcGVzY3JpcHRXb3JrZmxvd0lucHV0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHtcbiAgICBjcmVhdGVDb250ZXh0LFxuICAgIHVzZUNvbnRleHQsXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZUxheW91dEVmZmVjdCxcbiAgICB1c2VSZWYsXG4gICAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFByZXNzYWJsZSwgUG9pbnRlckV2ZW50IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IE1vdXNlQnV0dG9uLCBNb3ZlYWJsZVZpZXcgfSBmcm9tIFwiLi9tb3ZlYWJsZS12aWV3XCI7XG5pbXBvcnQgeyBQaXBlRW5kcG9pbnRWaWV3LCBQaXBlVmlldywgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JQaXBlU291cmNlLCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93IH0gZnJvbSBcIi4vcGlwZXNcIjtcbmltcG9ydCB7IFdvcmtmbG93SW5wdXROYW1lLCBnZXRUeXBlTmFtZSB9IGZyb20gXCIuL3dvcmstbmFtZXNcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVJ1blZhbHVlX2Nvbm5lY3Rpb25PdmVycmlkZSB9IGZyb20gXCIuLi9hbmFseXNpcy9jYWxjdWxhdGUtcnVuXCI7XG5cbmV4cG9ydCBjb25zdCBOb2RlSW5zdGFuY2VzVmlldyA9ICh7XG4gICAgbm9kZUluc3RhbmNlcyxcbiAgICBmdWxsID0gZmFsc2UsXG4gICAgaGlkZVRpdGxlcyA9IGZhbHNlLFxufToge1xuICAgIG5vZGVJbnN0YW5jZXM6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VbXTtcbiAgICBmdWxsPzogYm9vbGVhbjtcbiAgICBoaWRlVGl0bGVzPzogYm9vbGVhbjtcbn0pID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSdW5WYWx1ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgVmFsdWVDaGFuZ2VkOiBuZXcgU3ViamVjdCgpIH19PlxuICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtgZmxleC1yb3dgfT5cbiAgICAgICAgICAgICAgICB7bm9kZUluc3RhbmNlcy5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3gua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJbnN0YW5jZT17eH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvUnVuVmFsdWVDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuY29uc3QgTm9kZVZpZXcgPSAoe1xuICAgIG5vZGVJbnN0YW5jZSxcbn06IHtcbiAgICBub2RlSW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2U7XG59KSA9PiB7XG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgIH0pO1xuICAgIGNvbnN0IG1vdmVOb2RlID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZhbHVlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgc2V0UG9zaXRpb24odmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTm9kZVZpZXdgLCB7IG5vZGVJbnN0YW5jZSB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdvcmtmbG93ID0gbm9kZUluc3RhbmNlLndvcmtmbG93O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMWB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxNb3ZlYWJsZVZpZXdcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICB5OiBwb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogcG9zaXRpb24uc2NhbGUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbk1vdmU9e21vdmVOb2RlfVxuICAgICAgICAgICAgICAgIG1vdXNlQnV0dG9uPXtNb3VzZUJ1dHRvbi5MZWZ0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtY29sdW1uIHJlbGF0aXZlIGJnLXNsYXRlLTk1MC83NSBib3JkZXItYmx1ZS0xMDAgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSBtLVstMXB4XSByb3VuZGVkIHAtMWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e2Ake25vZGVJbnN0YW5jZS53b3JrZmxvdy5uYW1lfSAjJHtub2RlSW5zdGFuY2Uua2V5fWB9PC9UZXh0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cgZmxleC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmlucHV0cy5tYXAoaW5wdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbnB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlQ29ubmVjdGlvbiB2YXJpYWJsZT17aW5wdXR9IGNvbm5lY3Rpb249e25vZGVJbnN0YW5jZS5pbnB1dHMuZmluZCh4ID0+IHgud29ya2Zsb3dJbnB1dCA9PT0gaW5wdXQpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGFuaW1hdGUtYm91bmNlIHRleHQtWzhweF0gYWJzb2x1dGUgdG9wLTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjZDRlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVJbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17YGZsZXgtcm93YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2RlSW5zdGFuY2UuY2hpbGRyZW4ubWFwKHggPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eC5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSW5zdGFuY2U9e3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuYm9keS5raW5kID09PSBgb3BlcmF0b3JgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlQ29ubmVjdGlvbiB2YXJpYWJsZT17eyBuYW1lOiB3b3JrZmxvdy5ib2R5Lm9wZXJhdG9yIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25uZWN0aW9uc0luPXtub2RlSW5zdGFuY2UuaW5wdXRzfSBjb25uZWN0aW9uc091dD17bm9kZUluc3RhbmNlLm91dHB1dHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93Lm91dHB1dHMubWFwKG91dHB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dHB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlQ29ubmVjdGlvbiB2YXJpYWJsZT17b3V0cHV0fSBjb25uZWN0aW9uPXtub2RlSW5zdGFuY2Uub3V0cHV0cy5maW5kKHggPT4geC53b3JrZmxvd091dHB1dCA9PT0gb3V0cHV0KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cblxuICAgICAgICAgICAgPC9Nb3ZlYWJsZVZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufVxuXG5jb25zdCBnZXRQaXBlQ29ubmVjdGlvbktleSA9IChjb25uZWN0aW9uOiBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2UsIGRpcmVjdGlvbjogYGluYCB8IGBvdXRgKSA9PiB7XG4gICAgcmV0dXJuIGAke2Nvbm5lY3Rpb24ua2V5fToke2RpcmVjdGlvbn1gO1xufVxuXG5jb25zdCBnZXRQaXBlS2V5ID0gKHBpcGVTaWRlOiBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2BkZXN0aW5hdGlvbmBdLCBkaXJlY3Rpb246IGBpbmAgfCBgb3V0YCkgPT4ge1xuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgaW5wdXRgKSB7XG4gICAgICAgIHJldHVybiBnZXRQaXBlQ29ubmVjdGlvbktleShwaXBlU2lkZS5pbnB1dCwgZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgaWYgKHBpcGVTaWRlLmtpbmQgPT09IGBvdXRwdXRgKSB7XG4gICAgICAgIHJldHVybiBnZXRQaXBlQ29ubmVjdGlvbktleShwaXBlU2lkZS5vdXRwdXQsIGRpcmVjdGlvbik7XG4gICAgfVxuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgZGF0YWApIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHBpcGVTaWRlLmtpbmQgPT09IGBvcGVyYXRvci1vdXRwdXRgKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgb3BlcmF0b3ItaW5wdXRgKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgUGlwZVZhbHVlVmlldyA9ICh7XG4gICAgcGlwZVZhbHVlLFxuICAgIHNpZGUsXG59OiB7XG4gICAgcGlwZVZhbHVlOiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2U7XG4gICAgc2lkZTogYGluZmxvd2AgfCBgb3V0Zmxvd2AsXG59KSA9PiB7XG5cbiAgICBjb25zdCB7IHNvdXJjZSwgZGVzdGluYXRpb24gfSA9IHBpcGVWYWx1ZSA/PyB7fTtcbiAgICBpZiAoIXNvdXJjZSB8fCAhZGVzdGluYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIDw+PC8+O1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZUlkID0gZ2V0UGlwZUtleShzb3VyY2UsIGBvdXRgKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbklkID0gZ2V0UGlwZUtleShkZXN0aW5hdGlvbiwgYGluYCk7XG4gICAgaWYgKCFzb3VyY2VJZCB8fCAhZGVzdGluYXRpb25JZCkge1xuICAgICAgICByZXR1cm4gPD48Lz47XG4gICAgfVxuXG4gICAgcmV0dXJuIDxQaXBlVmlldyBzb3VyY2VJZD17c291cmNlSWR9IGRlc3RpbmF0aW9uSWQ9e2Rlc3RpbmF0aW9uSWR9IHNpZGU9e3NpZGV9IC8+XG59XG5cbmNvbnN0IE5vZGVDb25uZWN0aW9uID0gKHtcbiAgICB2YXJpYWJsZSxcbiAgICBjb25uZWN0aW9uOiBjb25uZWN0aW9uUmF3LFxuICAgIGNvbm5lY3Rpb25zSW46IGNvbm5lY3Rpb25zSW5SYXcsXG4gICAgY29ubmVjdGlvbnNPdXQ6IGNvbm5lY3Rpb25zT3V0UmF3LFxufToge1xuICAgIHZhcmlhYmxlOiB7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgdHlwZT86IFBpcGVzY3JpcHRUeXBlO1xuICAgICAgICBpZ25vcmVkPzogYm9vbGVhbjtcbiAgICB9O1xuICAgIGNvbm5lY3Rpb24/OiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2U7XG4gICAgY29ubmVjdGlvbnNJbj86IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZVtdO1xuICAgIGNvbm5lY3Rpb25zT3V0PzogUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlW107XG59KSA9PiB7XG5cbiAgICBjb25zdCBjb25uZWN0aW9uc0luID0gY29ubmVjdGlvbnNJblJhdyA/PyAoY29ubmVjdGlvblJhdyA/IFtjb25uZWN0aW9uUmF3XSA6IFtdKTtcbiAgICBjb25zdCBjb25uZWN0aW9uc091dCA9IGNvbm5lY3Rpb25zT3V0UmF3ID8/IChjb25uZWN0aW9uUmF3ID8gW2Nvbm5lY3Rpb25SYXddIDogW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sdW1uJz5cbiAgICAgICAgICAgICAgICB7Y29ubmVjdGlvbnNJbi5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3gua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17YGFic29sdXRlIHJpZ2h0LTEwYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt4LmluZmxvd1BpcGU/LnBpcGUua2luZCA9PT0gYGRhdGFgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1wdXJwbGUtNDAwIHB4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt4LmluZmxvd1BpcGU/LnBpcGUuanNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXcgaWQ9e2dldFBpcGVDb25uZWN0aW9uS2V5KHgsIGBpbmApfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmFsdWVWaWV3IHBpcGVWYWx1ZT17eC5pbmZsb3dQaXBlfSBzaWRlPXtgaW5mbG93YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZUNvbm5lY3Rpb25WYWx1ZSBjb25uZWN0aW9uPXt4fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJsdWUtMzAwICR7dmFyaWFibGUuaWdub3JlZCA/IGBsaW5lLXRocm91Z2ggb3BhY2l0eS01MGAgOiBgYH1gfVxuICAgICAgICAgICAgPntgJHt2YXJpYWJsZS5uYW1lfWB9PC9UZXh0PlxuICAgICAgICAgICAge3ZhcmlhYmxlLnR5cGUgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+OjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2x1bW4nPlxuICAgICAgICAgICAgICAgIHtjb25uZWN0aW9uc091dC5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3gua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3IGlkPXtnZXRQaXBlQ29ubmVjdGlvbktleSh4LCBgb3V0YCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eC5vdXRmbG93UGlwZXMubWFwKG91dGZsb3dQaXBlID0+IG91dGZsb3dQaXBlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtvdXRmbG93UGlwZS5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZVZhbHVlVmlldyBwaXBlVmFsdWU9e291dGZsb3dQaXBlfSBzaWRlPXtgb3V0Zmxvd2B9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFJ1blZhbHVlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICAgIFZhbHVlQ2hhbmdlZDogbmV3IFN1YmplY3Q8dm9pZD4oKSxcbn0pO1xuXG5jb25zdCBOb2RlQ29ubmVjdGlvblZhbHVlID0gKHsgY29ubmVjdGlvbiB9OiB7IGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSB9KSA9PiB7XG4gICAgY29uc3QgcnVuVmFsdWVDb250ZXh0ID0gdXNlQ29udGV4dChSdW5WYWx1ZUNvbnRleHQpO1xuXG4gICAgY29uc3QgW3J1blZhbHVlLCBzZXRSdW5WYWx1ZV0gPSB1c2VTdGF0ZShjb25uZWN0aW9uLnJ1bnM/LnZhbHVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJ1blZhbHVlQ29udGV4dC5WYWx1ZUNoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHNldFJ1blZhbHVlKGNvbm5lY3Rpb24ucnVucz8udmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gKHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2Nvbm5lY3Rpb25PdmVycmlkZShjb25uZWN0aW9uLCB2YWx1ZSk7XG4gICAgICAgIHJ1blZhbHVlQ29udGV4dC5WYWx1ZUNoYW5nZWQubmV4dCgpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7cnVuVmFsdWUgJiYgKFxuICAgICAgICAgICAgICAgIDxWYWx1ZUVkaXRvciB2YWx1ZT17cnVuVmFsdWV9IG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmNvbnN0IFZhbHVlRWRpdG9yID0gKHsgdmFsdWUsIG9uQ2hhbmdlIH06IHsgdmFsdWU6IHVua25vd24sIG9uQ2hhbmdlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1wdXJwbGUtNDAwIHB4LTEnPlxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHZhbHVlKX1cbiAgICAgICAgPC9UZXh0PlxuICAgICk7XG59OyIsICJpbXBvcnQge1xuICAgIFBpcGVzY3JpcHRCdWlsdGluT3BlcmF0b3IsXG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldCxcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlX09wZXJhdG9yLFxuICAgIFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnB1dEluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyBUT0RPOiBoYW5kbGUgY3ljbGVzXG5cbnR5cGUgUnVuQ29udGV4dCA9IHtcbiAgICB2aXNpdGVkOiBTZXQ8dW5rbm93bj47XG4gICAgbGF6eTogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVSdW4gPSAoXG4gICAgZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQsXG4gICAgY29udGV4dDogUnVuQ29udGV4dCA9IHsgdmlzaXRlZDogbmV3IFNldCgpLCBsYXp5OiBmYWxzZSB9LFxuKSA9PiB7XG4gICAgZGF0YXNldC5yb290Tm9kZUluc3RhbmNlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9ub2RlT3V0cHV0KG5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVJ1blZhbHVlX25vZGVPdXRwdXQgPSAobm9kZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSwgY29udGV4dDogUnVuQ29udGV4dCkgPT4ge1xuICAgIC8vIGFsbCBvdXRwdXRzIG11c3QgYmUgZXZhbHVhdGVkIChidXQgbWF5IHJldHVybiB1bmRlZmluZWQpXG4gICAgbm9kZS5vdXRwdXRzLmZvckVhY2gob3V0cHV0ID0+IHtcbiAgICAgICAgY2FsY3VsYXRlUnVuVmFsdWVfaW5wdXQob3V0cHV0LCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGlmICghY29udGV4dC5sYXp5KSB7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX25vZGVPdXRwdXQoeCwgY29udGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLmlucHV0cy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgY2FsY3VsYXRlUnVuVmFsdWVfaW5wdXQoeCwgY29udGV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVSdW5WYWx1ZV9jb25uZWN0aW9uT3ZlcnJpZGUgPSAoXG4gICAgY29ubmVjdGlvbjogUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLFxuICAgIHZhbHVlOiB1bmtub3duLFxuICAgIGNvbnRleHQ6IFJ1bkNvbnRleHQgPSB7IHZpc2l0ZWQ6IG5ldyBTZXQoKSwgbGF6eTogZmFsc2UgfSxcbikgPT4ge1xuICAgIGlmICghY29ubmVjdGlvbi5ydW5zKSB7XG4gICAgICAgIGNvbm5lY3Rpb24ucnVucyA9IHtcbiAgICAgICAgICAgIG92ZXJyaWRlOiB2YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgcnVucyB9ID0gY29ubmVjdGlvbjtcbiAgICBjb25zdCBhbGxDb25uZWN0aW9ucyA9IGNvbm5lY3Rpb24ubm9kZUluc3RhbmNlLmRhdGFzZXQuYWxsTm9kZUluc3RhbmNlcy5mbGF0TWFwKHggPT4gW1xuICAgICAgICAuLi54LmlucHV0cyxcbiAgICAgICAgLi4ueC5vdXRwdXRzLFxuICAgIF0pO1xuXG4gICAgY29uc3QgdXBkYXRlRGVwZW5kZW50cyA9IChkZXBlbmRlbmNpZXM6IHR5cGVvZiBydW5zLmRlcGVuZGVuY2llcykgPT4ge1xuICAgICAgICBjb25zdCBkZXBzID0gbmV3IFNldChkZXBlbmRlbmNpZXMpO1xuICAgICAgICBjb25zdCBkZXBlbmRlbnRzID0gYWxsQ29ubmVjdGlvbnMuZmlsdGVyKHggPT4geC5ydW5zPy5kZXBlbmRlbmNpZXMuc29tZShkID0+IGRlcHMuaGFzKGQpKSk7XG4gICAgICAgIGRlcGVuZGVudHMuZm9yRWFjaChkID0+IGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KGQsIGNvbnRleHQpKTtcbiAgICAgICAgZGVwZW5kZW50cy5mb3JFYWNoKGQgPT4gdXBkYXRlRGVwZW5kZW50cyhkLnJ1bnM/LmRlcGVuZGVuY2llcyA/PyBbXSkpO1xuICAgIH07XG5cbiAgICB1cGRhdGVEZXBlbmRlbnRzKHJ1bnMuZGVwZW5kZW5jaWVzKTtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0ID0gKFxuICAgIGlucHV0OiBPbWl0PFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSwgYG91dGZsb3dQaXBlc2A+LFxuICAgIGNvbnRleHQ6IFJ1bkNvbnRleHQsXG4pID0+IHtcbiAgICBpZiAoY29udGV4dC52aXNpdGVkLmhhcyhpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJ1bnM7XG4gICAgfVxuICAgIGNvbnRleHQudmlzaXRlZC5hZGQoaW5wdXQpO1xuICAgIGlmIChpbnB1dC5ydW5zPy5vdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlucHV0LnJ1bnMudmFsdWUgPSBpbnB1dC5ydW5zLm92ZXJyaWRlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5wdXQucnVucyA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IGluZmxvd1BpcGUgPSBpbnB1dC5pbmZsb3dQaXBlO1xuICAgIGlmICghaW5mbG93UGlwZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgc291cmNlIH0gPSBpbmZsb3dQaXBlO1xuICAgIGlmIChzb3VyY2Uua2luZCA9PT0gYGRhdGFgKSB7XG4gICAgICAgIGlucHV0LnJ1bnMgPSB7XG4gICAgICAgICAgICB2YWx1ZTogSlNPTi5wYXJzZShzb3VyY2UuanNvbiksXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzb3VyY2Uua2luZCA9PT0gYGlucHV0YCkge1xuICAgICAgICBpbnB1dC5ydW5zID0geyB2YWx1ZTogc291cmNlLmlucHV0LnJ1bnM/LnZhbHVlLCBkZXBlbmRlbmNpZXM6IFtzb3VyY2UuaW5wdXRdIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgb3V0cHV0YCkge1xuICAgICAgICBpbnB1dC5ydW5zID0geyB2YWx1ZTogc291cmNlLm91dHB1dC5ydW5zPy52YWx1ZSwgZGVwZW5kZW5jaWVzOiBbc291cmNlLm91dHB1dF0gfTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmtpbmQgPT09IGBvcGVyYXRvci1vdXRwdXRgKSB7XG4gICAgICAgIGlucHV0LnJ1bnMgPSBjYWxjdWxhdGVSdW5WYWx1ZV9vcGVyYXRvcihzb3VyY2Uubm9kZUluc3RhbmNlLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IF9uZXZlcjogbmV2ZXIgPSB1bmRlZmluZWQgYXMgdHlwZW9mIHNvdXJjZSBhcyBuZXZlcjtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVJ1blZhbHVlX29wZXJhdG9yID0gKFxuICAgIG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0LFxuKSA9PiB7XG4gICAgY29uc3QgY2FsY3VsYXRlQXJnc19pbmRleCA9IChcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICApOiB7XG4gICAgICAgIHZhbHVlOiBudW1iZXI7XG4gICAgICAgIGRlcGVuZGVuY2llczogUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlW107XG4gICAgfSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBub2RlSW5zdGFuY2UuaW5wdXRzW2luZGV4XTtcbiAgICAgICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkIGFzIHVua25vd24gYXMgbnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llczogW3ggYXMgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbklucHV0SW5zdGFuY2VdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9pbnB1dCh4LCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB4LnJ1bnM/LnZhbHVlIGFzIG51bWJlcixcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW3ggYXMgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbklucHV0SW5zdGFuY2VdLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVyYXRvcjogUGlwZXNjcmlwdEJ1aWx0aW5PcGVyYXRvciA9IG5vZGVJbnN0YW5jZS5vcGVyYXRvcjtcblxuICAgIC8vIGxhenlcbiAgICBjb25zdCBhUmVzdWx0ID0gY2FsY3VsYXRlQXJnc19pbmRleCgwKTtcbiAgICBjb25zdCBhID0gYVJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSBbLi4uYVJlc3VsdC5kZXBlbmRlbmNpZXNdO1xuXG4gICAgaWYgKG9wZXJhdG9yID09PSBgJiZgKSB7XG4gICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gY2FsY3VsYXRlQXJnc19pbmRleCgxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHY/LnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llczogWy4uLmRlcGVuZGVuY2llcywgLi4udi5kZXBlbmRlbmNpZXNdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYVJlc3VsdDtcbiAgICB9XG4gICAgaWYgKG9wZXJhdG9yID09PSBgfHxgKSB7XG4gICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgY29uc3QgdiA9IGNhbGN1bGF0ZUFyZ3NfaW5kZXgoMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2Py52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFsuLi5kZXBlbmRlbmNpZXMsIC4uLnYuZGVwZW5kZW5jaWVzXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFSZXN1bHQ7XG4gICAgfVxuICAgIGlmIChvcGVyYXRvciA9PT0gYGNvbmRpdGlvbmFsLXRlcm5hcnlgKSB7XG4gICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gY2FsY3VsYXRlQXJnc19pbmRleCgxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHY/LnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llczogWy4uLmRlcGVuZGVuY2llcywgLi4udi5kZXBlbmRlbmNpZXNdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2ID0gY2FsY3VsYXRlQXJnc19pbmRleCgyKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB2Py52YWx1ZSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogWy4uLmRlcGVuZGVuY2llcywgLi4udi5kZXBlbmRlbmNpZXNdLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIHVuYXJ5XG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIGA9YDpcbiAgICAgICAgICAgIHJldHVybiBhUmVzdWx0O1xuICAgICAgICBjYXNlIGBkZWNsYXJhdGlvbmA6XG4gICAgICAgICAgICByZXR1cm4gYVJlc3VsdDtcbiAgICAgICAgY2FzZSBgIWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiAhYSB9O1xuICAgICAgICBjYXNlIGArK2A6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICsgMSB9O1xuICAgICAgICBjYXNlIGAtLWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIC0gMSB9O1xuICAgIH1cblxuICAgIC8vIGJpbmFyeVxuICAgIGNvbnN0IGJSZXN1bHQgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDEpO1xuICAgIGNvbnN0IGIgPSBiUmVzdWx0LnZhbHVlO1xuICAgIGRlcGVuZGVuY2llcy5wdXNoKC4uLmJSZXN1bHQuZGVwZW5kZW5jaWVzKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSBgK2A6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICsgYiB9O1xuICAgICAgICBjYXNlIGAtYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgLSBiIH07XG4gICAgICAgIGNhc2UgYCpgOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAqIGIgfTtcbiAgICAgICAgY2FzZSBgL2A6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIC8gYiB9O1xuICAgICAgICBjYXNlIGAlYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgJSBiIH07XG4gICAgICAgIGNhc2UgYDxgOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSA8IGIgfTtcbiAgICAgICAgY2FzZSBgPmA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhID4gYiB9O1xuICAgICAgICBjYXNlIGA8PWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIDw9IGIgfTtcbiAgICAgICAgY2FzZSBgPj1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSA+PSBiIH07XG4gICAgICAgIGNhc2UgYD09YDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgPT09IGIgfTtcbiAgICAgICAgY2FzZSBgIT1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAhPT0gYiB9O1xuICAgIH1cblxuICAgIGNvbnN0IF9uZXZlcjogbmV2ZXIgPSB1bmRlZmluZWQgYXMgdHlwZW9mIG9wZXJhdG9yIGFzIG5ldmVyO1xuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4iLCAiaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0Tm9kZSxcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VfT3BlcmF0b3IsXG4gICAgUGlwZXNjcmlwdFBpcGVWYWx1ZSxcbiAgICBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93LFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVSdW4gfSBmcm9tICcuL2NhbGN1bGF0ZS1ydW4nO1xuXG5leHBvcnQgY29uc3QgbG9hZFJ1bnRpbWUgPSAoXG4gICAgd29ya2Zsb3dSYXc6IFBpcGVzY3JpcHRXb3JrZmxvdyxcbik6IHtcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xuICAgIGNvbnRleHQ6IFBpcGVzY3JpcHRSdW50aW1lQ29udGV4dDtcbiAgICBkYXRhc2V0OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldDtcbn0gPT4ge1xuICAgIGNvbnN0IHdvcmtmbG93ID0gd29ya2Zsb3dSYXcgYXMgUGlwZXNjcmlwdFdvcmtmbG93O1xuICAgIC8vIHdvcmtmbG93LnRyZWUgPSB7XG4gICAgLy8gICAgIGNvbnRhaW5lcjogdW5kZWZpbmVkLFxuICAgIC8vICAgICB1c2FnZXM6IFtdLFxuICAgIC8vIH07XG5cbiAgICBjb25zdCBnZXRXb3JrZmxvd3NSZWN1cnNpdmUgPSAodzogUGlwZXNjcmlwdFdvcmtmbG93KTogUGlwZXNjcmlwdFdvcmtmbG93W10gPT4ge1xuICAgICAgICByZXR1cm4gW3csIC4uLih3LndvcmtmbG93cz8uZmxhdE1hcCh3MiA9PiBnZXRXb3JrZmxvd3NSZWN1cnNpdmUodzIpKSA/PyBbXSldO1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxXb3JrZmxvd3MgPSBnZXRXb3JrZmxvd3NSZWN1cnNpdmUod29ya2Zsb3cpO1xuICAgIGNvbnN0IGFsbE5vZGVzID0gYWxsV29ya2Zsb3dzLmZsYXRNYXAodyA9PiAody5ib2R5LmtpbmQgPT09IGBub2Rlc2AgPyB3LmJvZHkubm9kZXMgOiBbXSkpO1xuICAgIGNvbnN0IGFsbFBpcGVzX3dvcmtmbG93T3V0cHV0cyA9IGFsbFdvcmtmbG93c1xuICAgICAgICAuZmxhdE1hcCh3ID0+IHcub3V0cHV0cy5mbGF0TWFwKG8gPT4gby5waXBlKSlcbiAgICAgICAgLmZpbHRlcih4ID0+IHgpXG4gICAgICAgIC5tYXAoeCA9PiB4ISk7XG4gICAgY29uc3QgYWxsUGlwZXNfbm9kZUlucHV0cyA9IGFsbE5vZGVzXG4gICAgICAgIC5mbGF0TWFwKG4gPT4gbi5pbnB1dFBpcGVzKVxuICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgLm1hcCh4ID0+IHghKTtcbiAgICBjb25zdCBhbGxQaXBlcyA9IFsuLi5hbGxQaXBlc193b3JrZmxvd091dHB1dHMsIC4uLmFsbFBpcGVzX25vZGVJbnB1dHNdO1xuXG4gICAgY29uc3QgZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQgPSB7XG4gICAgICAgIGFsbE5vZGVJbnN0YW5jZXM6IFtdLFxuICAgICAgICByb290Tm9kZUluc3RhbmNlczogW10sXG4gICAgfTtcbiAgICBjb25zdCBjb250ZXh0OiBQaXBlc2NyaXB0UnVudGltZUNvbnRleHQgPSB7XG4gICAgICAgIGFsbFdvcmtmbG93cyxcbiAgICAgICAgYWxsV29ya2Zsb3dzTWFwOiBuZXcgTWFwKGFsbFdvcmtmbG93cy5tYXAoeCA9PiBbeC53b3JrZmxvd1VyaSwgeF0pKSxcbiAgICAgICAgYWxsTm9kZXMsXG4gICAgICAgIGFsbE5vZGVzTWFwOiBuZXcgTWFwKGFsbE5vZGVzLm1hcCh4ID0+IFt4Lm5vZGVJZCwgeF0pKSxcbiAgICAgICAgYWxsUGlwZXMsXG4gICAgICAgIGRhdGFzZXQsXG4gICAgICAgIGFsbE5vZGVJbnN0YW5jZXM6IGRhdGFzZXQuYWxsTm9kZUluc3RhbmNlcyxcbiAgICAgICAgcm9vdE5vZGVJbnN0YW5jZXM6IGRhdGFzZXQucm9vdE5vZGVJbnN0YW5jZXMsXG4gICAgfTtcblxuICAgIGNvbnRleHQucm9vdE5vZGVJbnN0YW5jZXMucHVzaChcbiAgICAgICAgLi4uKHdvcmtmbG93LmJvZHkubm9kZXM/Lm1hcChub2RlID0+IGNyZWF0ZU5vZGVJbnN0YW5jZXMobm9kZSwgdW5kZWZpbmVkLCBjb250ZXh0KSkgPz8gW10pLFxuICAgICk7XG5cbiAgICBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbG9hZE5vZGVDb25uZWN0aW9uc19pbmZsb3dzKG5vZGUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsSW5mbG93UGlwZXMgPSBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXNcbiAgICAgICAgLmZsYXRNYXAoeCA9PiBbLi4ueC5pbnB1dHMubWFwKHkgPT4geS5pbmZsb3dQaXBlKSwgLi4ueC5vdXRwdXRzLm1hcCh5ID0+IHkuaW5mbG93UGlwZSldKVxuICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgLm1hcCh4ID0+IHghKTtcbiAgICBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbG9hZE5vZGVDb25uZWN0aW9uc19vdXRmbG93cyhub2RlLCBhbGxJbmZsb3dQaXBlcyk7XG4gICAgfSk7XG5cbiAgICBjYWxjdWxhdGVSdW4oZGF0YXNldCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3b3JrZmxvdyxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgZGF0YXNldCxcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUGlwZXNjcmlwdFJ1bnRpbWVDb250ZXh0ID0ge1xuICAgIGFsbFdvcmtmbG93czogUGlwZXNjcmlwdFdvcmtmbG93W107XG4gICAgYWxsV29ya2Zsb3dzTWFwOiBNYXA8c3RyaW5nLCBQaXBlc2NyaXB0V29ya2Zsb3c+O1xuICAgIGFsbE5vZGVzOiBQaXBlc2NyaXB0Tm9kZVtdO1xuICAgIGFsbE5vZGVzTWFwOiBNYXA8c3RyaW5nLCBQaXBlc2NyaXB0Tm9kZT47XG4gICAgYWxsUGlwZXM6IFBpcGVzY3JpcHRQaXBlVmFsdWVbXTtcblxuICAgIC8vIGNyZWF0ZWQgZHVyaW5nIGNyZWF0ZU5vZGVJbnN0YW5jZXNcbiAgICBkYXRhc2V0OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldDtcbiAgICBhbGxOb2RlSW5zdGFuY2VzOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlW107XG4gICAgcm9vdE5vZGVJbnN0YW5jZXM6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VbXTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5vZGVJbnN0YW5jZXMgPSAoXG4gICAgbm9kZTogUGlwZXNjcmlwdE5vZGUsXG4gICAgcGFyZW50OiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIGNvbnRleHQ6IFBpcGVzY3JpcHRSdW50aW1lQ29udGV4dCxcbik6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UgPT4ge1xuICAgIGNvbnN0IHdvcmtmbG93ID0gY29udGV4dC5hbGxXb3JrZmxvd3NNYXAuZ2V0KG5vZGUud29ya2Zsb3dVcmkpO1xuICAgIGlmICghd29ya2Zsb3cpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYG1pc3Npbmcgd29ya2Zsb3cgJHtub2RlLndvcmtmbG93VXJpfWApO1xuICAgIH1cbiAgICAvLyBub2RlLnRyZWUgPSB7XG4gICAgLy8gICAgIHdvcmtmbG93LFxuICAgIC8vIH07XG5cbiAgICBjb25zdCBpbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSA9IHtcbiAgICAgICAgZGF0YXNldDogY29udGV4dC5kYXRhc2V0LFxuICAgICAgICBrZXk6IGAke2NvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5sZW5ndGh9YCxcbiAgICAgICAgbm9kZSxcbiAgICAgICAgd29ya2Zsb3csXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuICAgIGNvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcblxuICAgIC8vIENyZWF0ZSBjb25uZWN0aW9ucyAod2l0aG91dCBwaXBlcylcbiAgICBpbnN0YW5jZS5pbnB1dHMgPSB3b3JrZmxvdy5pbnB1dHMubWFwKHdvcmtmbG93SW5wdXQgPT4gKHtcbiAgICAgICAga2V5OiBgJHtjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMubGVuZ3RofToke3dvcmtmbG93SW5wdXQubmFtZX06d29ya2Zsb3dJbnB1dGAsXG4gICAgICAgIG5vZGVJbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgIGtpbmQ6IGB3b3JrZmxvdy1pbnB1dGAsXG4gICAgICAgIHdvcmtmbG93SW5wdXQsXG4gICAgICAgIG5hbWU6IHdvcmtmbG93SW5wdXQubmFtZSxcbiAgICAgICAgaW5mbG93UGlwZTogdW5kZWZpbmVkLFxuICAgICAgICBvdXRmbG93UGlwZXM6IFtdLFxuICAgIH0pKTtcbiAgICBpbnN0YW5jZS5vdXRwdXRzID0gd29ya2Zsb3cub3V0cHV0cy5tYXAod29ya2Zsb3dPdXRwdXQgPT4gKHtcbiAgICAgICAga2V5OiBgJHtjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMubGVuZ3RofToke3dvcmtmbG93T3V0cHV0Lm5hbWV9OndvcmtmbG93T3V0cHV0YCxcbiAgICAgICAgbm9kZUluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAga2luZDogYHdvcmtmbG93LW91dHB1dGAsXG4gICAgICAgIHdvcmtmbG93T3V0cHV0LFxuICAgICAgICBuYW1lOiB3b3JrZmxvd091dHB1dC5uYW1lLFxuICAgICAgICBpbmZsb3dQaXBlOiB1bmRlZmluZWQsXG4gICAgICAgIG91dGZsb3dQaXBlczogW10sXG4gICAgfSkpO1xuXG4gICAgLy8gVE9ETzogaGFuZGxlIHJlY3Vyc2l2ZS9jeWNsaWNhbCB3b3JrZmxvd3NcbiAgICBpbnN0YW5jZS5jaGlsZHJlbiA9XG4gICAgICAgIHdvcmtmbG93LmJvZHkubm9kZXM/Lm1hcChuID0+IGNyZWF0ZU5vZGVJbnN0YW5jZXMobiwgaW5zdGFuY2UsIGNvbnRleHQpKSA/PyBbXTtcblxuICAgIGlmICh3b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmApIHtcbiAgICAgICAgaW5zdGFuY2Uub3BlcmF0b3IgPSB3b3JrZmxvdy5ib2R5Lm9wZXJhdG9yO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn07XG5cbmNvbnN0IGxvYWROb2RlQ29ubmVjdGlvbnNfaW5mbG93cyA9IChub2RlSW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UpID0+IHtcbiAgICAvLyBjb25uZWN0IGluZmxvd3NcbiAgICBub2RlSW5zdGFuY2UuaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBjb25zdCBub2RlSW5wdXQgPSBub2RlSW5zdGFuY2Uubm9kZS5pbnB1dFBpcGVzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGlucHV0Lm5hbWUpO1xuICAgICAgICBpZiAoIW5vZGVJbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0SW5mbG93U291cmNlID0gKCk6IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF0gPT4ge1xuICAgICAgICAgICAgY29uc3QgcGlwZVNvdXJjZSA9IG5vZGVJbnB1dDtcbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGBkYXRhYCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBkYXRhYCxcbiAgICAgICAgICAgICAgICAgICAganNvbjogcGlwZVNvdXJjZS5qc29uLFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgd29ya2Zsb3ctb3BlcmF0b3JgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYG9wZXJhdG9yLW91dHB1dGAsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJbnN0YW5jZTogbm9kZUluc3RhbmNlIGFzIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VfT3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGB3b3JrZmxvdy1pbnB1dGApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlV29ya2Zsb3dJbnB1dCA9IG5vZGVJbnN0YW5jZS5pbnB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gcGlwZVNvdXJjZS5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVXb3JrZmxvd0lucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiBnZXRJbmZsb3dTb3VyY2U6IE1pc3Npbmcgbm9kZVdvcmtmbG93SW5wdXQgJHtwaXBlU291cmNlLm5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYGlucHV0YCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5vZGVXb3JrZmxvd0lucHV0LFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgbm9kZWApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZWVyTm9kZU91dHB1dCA9IG5vZGVJbnN0YW5jZS5wYXJlbnQ/LmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKG4yID0+IG4yLm5vZGUubm9kZUlkID09PSBwaXBlU291cmNlLnNvdXJjZU5vZGVJZClcbiAgICAgICAgICAgICAgICAgICAgPy5vdXRwdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHBpcGVTb3VyY2Uuc291cmNlTm9kZU91dHB1dE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcGVlck5vZGVPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IGdldEluZmxvd1NvdXJjZTogTWlzc2luZyBwZWVyTm9kZU91dHB1dCAke3BpcGVTb3VyY2UubmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpcGVTb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5PdXRwdXRzOiBub2RlSW5zdGFuY2UuY2hpbGRyZW4ubWFwKHggPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5vdXRwdXRzLm1hcChvID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG8ua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogby5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBvLm5vZGVJbnN0YW5jZS5ub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgb3V0cHV0YCxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBwZWVyTm9kZU91dHB1dCxcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiB1bmtub3duIHBpcGVTb3VyY2UgJHsocGlwZVNvdXJjZSBhcyB7IGtpbmQ6IHN0cmluZyB9KS5raW5kfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzb3VyY2UgPSBnZXRJbmZsb3dTb3VyY2UoKTtcbiAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LmluZmxvd1BpcGUgPSB7XG4gICAgICAgICAgICBrZXk6IGAke2lucHV0LmtleX06cGlwZWAsXG4gICAgICAgICAgICBwaXBlOiBub2RlSW5wdXQsXG4gICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IGBpbnB1dGAsXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIG5vZGVJbnN0YW5jZS5vdXRwdXRzLmZvckVhY2gob3V0cHV0ID0+IHtcbiAgICAgICAgY29uc3Qgd29ya2Zsb3dPdXRwdXQgPSBub2RlSW5zdGFuY2Uud29ya2Zsb3cub3V0cHV0cy5maW5kKHggPT4geC5uYW1lID09PSBvdXRwdXQubmFtZSk7XG4gICAgICAgIGNvbnN0IHdvcmtmbG93T3V0cHV0UGlwZSA9IHdvcmtmbG93T3V0cHV0Py5waXBlO1xuICAgICAgICBpZiAoIXdvcmtmbG93T3V0cHV0UGlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0SW5mbG93U291cmNlID0gKCk6IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF0gPT4ge1xuICAgICAgICAgICAgY29uc3QgcGlwZVNvdXJjZSA9IHdvcmtmbG93T3V0cHV0UGlwZTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZTogcGlwZVNvdXJjZU5hbWUgfSA9IHdvcmtmbG93T3V0cHV0O1xuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYGRhdGFgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYGRhdGFgLFxuICAgICAgICAgICAgICAgICAgICBqc29uOiBwaXBlU291cmNlLmpzb24sXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGB3b3JrZmxvdy1vcGVyYXRvcmApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgb3BlcmF0b3Itb3V0cHV0YCxcbiAgICAgICAgICAgICAgICAgICAgbm9kZUluc3RhbmNlOiBub2RlSW5zdGFuY2UgYXMgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYHdvcmtmbG93LWlucHV0YCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVXb3JrZmxvd0lucHV0ID0gbm9kZUluc3RhbmNlLmlucHV0cy5maW5kKHggPT4geC5uYW1lID09PSBwaXBlU291cmNlTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlV29ya2Zsb3dJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogZ2V0SW5mbG93U291cmNlOiBNaXNzaW5nIG5vZGVXb3JrZmxvd0lucHV0ICR7cGlwZVNvdXJjZU5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYGlucHV0YCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5vZGVXb3JrZmxvd0lucHV0LFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgbm9kZWApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lck5vZGVPdXRwdXQgPSBub2RlSW5zdGFuY2UuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgLmZpbmQobjIgPT4gbjIubm9kZS5ub2RlSWQgPT09IHBpcGVTb3VyY2Uuc291cmNlTm9kZUlkKVxuICAgICAgICAgICAgICAgICAgICA/Lm91dHB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gcGlwZVNvdXJjZU5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghaW5uZXJOb2RlT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiBnZXRJbmZsb3dTb3VyY2U6IE1pc3NpbmcgcGVlck5vZGVPdXRwdXQgJHtwaXBlU291cmNlTmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgb3V0cHV0YCxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBpbm5lck5vZGVPdXRwdXQsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogdW5rbm93biBwaXBlU291cmNlICR7KHBpcGVTb3VyY2UgYXMgeyBraW5kOiBzdHJpbmcgfSkua2luZH1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc291cmNlID0gZ2V0SW5mbG93U291cmNlKCk7XG4gICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBvdXRwdXQuaW5mbG93UGlwZSA9IHtcbiAgICAgICAgICAgIGtleTogYCR7b3V0cHV0LmtleX06cGlwZWAsXG4gICAgICAgICAgICBwaXBlOiB3b3JrZmxvd091dHB1dFBpcGUsXG4gICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IGBvdXRwdXRgLFxuICAgICAgICAgICAgICAgIG91dHB1dDogb3V0cHV0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGxvYWROb2RlQ29ubmVjdGlvbnNfb3V0Zmxvd3MgPSAoXG4gICAgbm9kZUluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIGFsbEluZmxvd1BpcGVzOiBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbXSxcbikgPT4ge1xuICAgIG5vZGVJbnN0YW5jZS5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0Lm91dGZsb3dQaXBlcyA9IGFsbEluZmxvd1BpcGVzLmZpbHRlcihcbiAgICAgICAgICAgIHggPT4geC5zb3VyY2Uua2luZCA9PT0gYGlucHV0YCAmJiB4LnNvdXJjZS5pbnB1dCA9PT0gaW5wdXQsXG4gICAgICAgICk7XG4gICAgfSk7XG4gICAgbm9kZUluc3RhbmNlLm91dHB1dHMuZm9yRWFjaChvdXRwdXQgPT4ge1xuICAgICAgICBvdXRwdXQub3V0Zmxvd1BpcGVzID0gYWxsSW5mbG93UGlwZXMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4LnNvdXJjZS5raW5kID09PSBgb3V0cHV0YCAmJiB4LnNvdXJjZS5vdXRwdXQgPT09IG91dHB1dCxcbiAgICAgICAgKTtcbiAgICB9KTtcbn07XG4iLCAiLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDEtZGVjbGFyYXRpb25zLzAxLnRzLndvcmtmbG93Lmpzb24nO1xuLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDItYXNzaWdubWVudHMvMDEudHMud29ya2Zsb3cuanNvbic7XG5pbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwMy1vcGVyYXRvcnMvMDQudHMud29ya2Zsb3cuanNvbic7XG4vLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwNC1tdXRhdGlvbi8wMS50cy53b3JrZmxvdy5qc29uJztcbi8vIGltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDA1LWxvZ2ljLzAyLnRzLndvcmtmbG93Lmpzb24nO1xuaW1wb3J0IHsgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi9zcmMvdHlwZXMnO1xuZXhwb3J0IHsgV29ya0NhbnZhc1ZpZXcgfSBmcm9tICcuL3NyYy91aS93b3JrLWNhbnZhcy12aWV3JztcbmV4cG9ydCBjb25zdCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvdyA9IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBhcyBQaXBlc2NyaXB0V29ya2Zsb3c7XG4iLCAiaW1wb3J0IHsgV29ya0NhbnZhc1ZpZXcsIGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93IH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9waXBlc2NyaXB0JztcblxuZXhwb3J0IGNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCB3b3JrZmxvdyA9IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93XG4gICAgcmV0dXJuIDxXb3JrQ2FudmFzVmlldyB3b3JrZmxvdz17d29ya2Zsb3d9IC8+O1xufTtcbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gYmFja2dyb3VuZENvbG9yIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIGFuaW1hdGVkIGB0cnVlYCB0byBhbmltYXRlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGNoYW5nZSwgYGZhbHNlYCB0byBjaGFuZ2UgaW1tZWRpYXRlbHkuXG4gKiBAcGxhdGZvcm0gYW5kcm9pZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJCYWNrZ3JvdW5kQ29sb3IoYmFja2dyb3VuZENvbG9yOiBzdHJpbmcsIGFuaW1hdGVkOiBib29sZWFuKSB7XG4gIFN0YXR1c0Jhci5zZXRCYWNrZ3JvdW5kQ29sb3IoYmFja2dyb3VuZENvbG9yLCBhbmltYXRlZCk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgdGhlIG5ldHdvcmsgYWN0aXZpdHkgaW5kaWNhdG9yLlxuICogQHBhcmFtIHZpc2libGUgSWYgdGhlIG5ldHdvcmsgYWN0aXZpdHkgaW5kaWNhdG9yIHNob3VsZCBiZSB2aXNpYmxlLlxuICogQHBsYXRmb3JtIGlvc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJOZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgU3RhdHVzQmFyLnNldE5ldHdvcmtBY3Rpdml0eUluZGljYXRvclZpc2libGUodmlzaWJsZSk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyQW5pbWF0aW9uIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBoaWRkZW4gSWYgdGhlIHN0YXR1cyBiYXIgc2hvdWxkIGJlIGhpZGRlbi5cbiAqIEBwYXJhbSBhbmltYXRpb24gQW5pbWF0aW9uIHRvIHVzZSB3aGVuIHRvZ2dsaW5nIGhpZGRlbiwgZGVmYXVsdHMgdG8gYCdub25lJ2AuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckhpZGRlbihoaWRkZW46IGJvb2xlYW4sIGFuaW1hdGlvbjogU3RhdHVzQmFyQW5pbWF0aW9uKSB7XG4gIFN0YXR1c0Jhci5zZXRIaWRkZW4oaGlkZGVuLCBhbmltYXRpb24pO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhclN0eWxlIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuaW1wb3J0IHN0eWxlVG9CYXJTdHlsZSBmcm9tICcuL3N0eWxlVG9CYXJTdHlsZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFNldCB0aGUgYmFyIHN0eWxlIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIHN0eWxlIFRoZSBjb2xvciBvZiB0aGUgc3RhdHVzIGJhciB0ZXh0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJTdHlsZShzdHlsZTogU3RhdHVzQmFyU3R5bGUpIHtcbiAgU3RhdHVzQmFyLnNldEJhclN0eWxlKHN0eWxlVG9CYXJTdHlsZShzdHlsZSkpO1xufVxuIiwgImltcG9ydCB7IEFwcGVhcmFuY2UsIENvbG9yU2NoZW1lTmFtZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhclN0eWxlIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuXG5mdW5jdGlvbiBnZXRDb2xvclNjaGVtZSgpIHtcbiAgaWYgKEFwcGVhcmFuY2UpIHtcbiAgICByZXR1cm4gQXBwZWFyYW5jZS5nZXRDb2xvclNjaGVtZSgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnbGlnaHQnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlVG9CYXJTdHlsZShcbiAgc3R5bGU6IFN0YXR1c0JhclN0eWxlID0gJ2F1dG8nLFxuICBjb2xvclNjaGVtZTogQ29sb3JTY2hlbWVOYW1lID0gZ2V0Q29sb3JTY2hlbWUoKVxuKTogJ2xpZ2h0LWNvbnRlbnQnIHwgJ2RhcmstY29udGVudCcge1xuICBpZiAoIWNvbG9yU2NoZW1lKSB7XG4gICAgY29sb3JTY2hlbWUgPSAnbGlnaHQnO1xuICB9XG5cbiAgbGV0IHJlc29sdmVkU3R5bGUgPSBzdHlsZTtcbiAgaWYgKHN0eWxlID09PSAnYXV0bycpIHtcbiAgICByZXNvbHZlZFN0eWxlID0gY29sb3JTY2hlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xuICB9IGVsc2UgaWYgKHN0eWxlID09PSAnaW52ZXJ0ZWQnKSB7XG4gICAgcmVzb2x2ZWRTdHlsZSA9IGNvbG9yU2NoZW1lID09PSAnbGlnaHQnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlZFN0eWxlID09PSAnbGlnaHQnID8gJ2xpZ2h0LWNvbnRlbnQnIDogJ2RhcmstY29udGVudCc7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogU2V0IHRoZSB0cmFuc2x1Y2VuY3kgb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gdHJhbnNsdWNlbnQgV2hldGhlciB0aGUgYXBwIGNhbiBkcmF3IHVuZGVyIHRoZSBzdGF0dXMgYmFyLiBXaGVuIGB0cnVlYCwgY29udGVudCB3aWxsIGJlXG4gKiByZW5kZXJlZCB1bmRlciB0aGUgc3RhdHVzIGJhci4gVGhpcyBpcyBhbHdheXMgYHRydWVgIG9uIGlPUyBhbmQgY2Fubm90IGJlIGNoYW5nZWQuXG4gKiBAcGxhdGZvcm0gYW5kcm9pZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJUcmFuc2x1Y2VudCh0cmFuc2x1Y2VudDogYm9vbGVhbikge1xuICBTdGF0dXNCYXIuc2V0VHJhbnNsdWNlbnQodHJhbnNsdWNlbnQpO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ2V4cG8tc3RhdHVzLWJhcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByZXNzYWJsZSwgVGV4dCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGluY3JlbWVudCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q291bnQocyA9PiBzICsgMSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBmbGV4LWNvbCBmbGV4LTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXJlZC0xMDAnPlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWN5YW4tNzAwJz5FeGFtcGxlVmlldyAuLi48L1RleHQ+XG4gICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9e2luY3JlbWVudH0+XG4gICAgICAgICAgICAgICAgPFRleHQ+e2BJbmNyZW1lbnQgY291bnQ6JHtjb3VudH1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dD4wMDM8L1RleHQ+XG4gICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgIDxTdGF0dXNCYXIgc3R5bGU9J2F1dG8nIC8+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gJ3RhaWx3aW5kY3NzJztcblxuZXhwb3J0IGNvbnN0IHRhaWx3aW5kVGhlbWU6IENvbmZpZ1tgdGhlbWVgXSA9IHtcbiAgICAvLyBlZGl0IHlvdXIgdGFpbHdpbmQgdGhlbWUgaGVyZSFcbiAgICAvLyBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2FkZGluZy1jdXN0b20tc3R5bGVzXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixhQUFlO0FBQUEsRUFDZixRQUFVLENBQUM7QUFBQSxFQUNYLFNBQVcsQ0FBQztBQUFBLEVBQ1osTUFBUTtBQUFBLElBQ04sTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLGFBQWU7QUFBQSxRQUNmLFFBQVU7QUFBQSxRQUNWLFlBQWMsQ0FBQztBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxhQUFlO0FBQUEsTUFDZixNQUFRO0FBQUEsTUFDUixRQUFVLENBQUM7QUFBQSxNQUNYLFNBQVc7QUFBQSxRQUNUO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixNQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsY0FBZ0I7QUFBQSxZQUNoQixzQkFBd0I7QUFBQSxVQUMxQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFhO0FBQUEsUUFDWDtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixVQUFZO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsVUFBWTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFXO0FBQUEsWUFDVDtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0EsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLFVBQVk7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWU7QUFBQSxVQUNmLE1BQVE7QUFBQSxVQUNSLFFBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixVQUFZO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsVUFBWTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFXO0FBQUEsWUFDVDtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0Es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Q0QsTUFhSjtBQUFBLEdBRUQsQ0FBQ0EsTUFBSyxLQUFLLFNBQVMsVUFBVSw0Q0FDMUIsQ0FBQyxzQkFBc0IsU0FBUyxPQUFPSCxTQUFRO0FBQUEsS0FDMUMsUUFBUSxlQUNMLENBQUMsYUFBYSxVQUFVLFVBQVUsS0FBSztBQUFBLEtBRTFDLFFBQVEsb0JBQ0wsQ0FBQyxrQkFBa0IsZUFBZSxlQUFlLEtBQUs7QUFBQSxFQUU5RCxFQVBDLHNCQUFzQixTQVEzQixFQVRDRyxNQVVMLEVBeENDLGFBeUNMLEVBMUNDQTtBQTRDVDs7O0E2RXpFTyxJQUFNLDZCQUE2Qjs7O0FDTG5DLElBQU0sTUFBTSxNQUFNO0FBQ3JCLFFBQU0sV0FBVztBQUNqQixTQUFPLENBQUMsZUFBZSxVQUFVLFVBQVU7QUFDL0M7OztBQ0xBLFNBQVMsaUJBQWlCOzs7QUNBMUIsU0FBUyxhQUFBSSxrQkFBaUI7OztBQ0ExQixTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQTFCLFNBQVMsYUFBQUMsa0JBQWlCOzs7QUNBMUIsU0FBUyxrQkFBbUM7OztBQ0E1QyxTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQzFCLFNBQVMsWUFBQUMsaUJBQWdCO0FBQ3pCLFNBQVMsYUFBQUMsWUFBVyxRQUFBQyxPQUFNLFFBQUFDLGFBQVk7OztBQ0EvQixJQUFNLGdCQUFpQztBQUFBO0FBQUE7QUFHOUM7IiwKICAibmFtZXMiOiBbIlJlYWN0IiwgInVzZUxheW91dEVmZmVjdCIsICJ1c2VSZWYiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlByZXNzYWJsZSIsICJkIiwgImIiLCAiZnJvbSIsICJ2IiwgIlN1YnNjcmlwdGlvbiIsICJTdWJzY3JpYmVyIiwgIkNvbnN1bWVyT2JzZXJ2ZXIiLCAiU2FmZVN1YnNjcmliZXIiLCAiT2JzZXJ2YWJsZSIsICJvYnNlcnZhYmxlIiwgIk9wZXJhdG9yU3Vic2NyaWJlciIsICJlcnIiLCAiU3ViamVjdCIsICJvYnNlcnZhYmxlIiwgIkFub255bW91c1N1YmplY3QiLCAiQmVoYXZpb3JTdWJqZWN0IiwgIkFjdGlvbiIsICJkZWxheSIsICJBc3luY0FjdGlvbiIsICJkZWxheSIsICJTY2hlZHVsZXIiLCAiZGVsYXkiLCAiQXN5bmNTY2hlZHVsZXIiLCAiZGVsYXkiLCAiZGVsYXkiLCAiZGVsYXkiLCAiaXRlcmF0b3IiLCAiaXRlcmF0b3IiLCAiaXNBcnJheSIsICJpIiwgInVzZVJlZiIsICJ1c2VSZWYiLCAiUmVhY3QiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgImNyZWF0ZUNvbnRleHQiLCAidXNlUmVmIiwgInVzZVN0YXRlIiwgIlZpZXciLCAiVGV4dCIsICJjcmVhdGVDb250ZXh0IiwgInVzZVN0YXRlIiwgIlZpZXciLCAiVGV4dCIsICJ1c2VSZWYiLCAiVGV4dCIsICJWaWV3IiwgIlRleHQiLCAiUmVhY3QiLCAidXNlU3RhdGUiLCAiUmVhY3QiLCAiY3JlYXRlQ29udGV4dCIsICJ1c2VDb250ZXh0IiwgInVzZUVmZmVjdCIsICJ1c2VTdGF0ZSIsICJWaWV3IiwgIlRleHQiLCAiY29udGV4dCIsICJ2IiwgIlZpZXciLCAiUmVhY3QiLCAiTm9kZVZpZXciLCAidXNlU3RhdGUiLCAiVGV4dCIsICJjcmVhdGVDb250ZXh0IiwgInVzZUNvbnRleHQiLCAidXNlRWZmZWN0IiwgImNvbnRleHQiLCAidXNlUmVmIiwgImNvbnRleHQiLCAidXNlTGF5b3V0RWZmZWN0IiwgInVzZVN0YXRlIiwgIlZpZXciLCAiUmVhY3QiLCAiUHJlc3NhYmxlIiwgIlRleHQiLCAiU3RhdHVzQmFyIiwgIlN0YXR1c0JhciIsICJTdGF0dXNCYXIiLCAiU3RhdHVzQmFyIiwgInVzZVN0YXRlIiwgIlByZXNzYWJsZSIsICJUZXh0IiwgIlZpZXciXQp9Cg==
