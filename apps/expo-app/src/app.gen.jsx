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
  useState as useState4
} from "react";
import { View as View5, Text as Text5 } from "react-native";
var NodeInstancesView = ({
  nodeInstances,
  full = false,
  hideTitles = false
}) => {
  return <View5 className="flex-row">{nodeInstances.map((x) => <React4.Fragment key={x.key}><NodeView2
    nodeInstance={x}
  /></React4.Fragment>)}</View5>;
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
var NodeConnectionValue = ({ connection }) => {
  const changeValue = (value) => {
  };
  return <>{connection.runs && <ValueEditor value={connection.runs.value} onChange={changeValue} />}</>;
};
var ValueEditor = ({ value, onChange }) => {
  return <Text5 className="text-purple-400 px-1">{JSON.stringify(value)}</Text5>;
};

// ../../packages/pipescript/src/analysis/calculate-run.ts
var calculateRun = (allNodeInstances, context2 = { visited: /* @__PURE__ */ new Set(), lazy: false }) => {
  const rootNodes = allNodeInstances.filter((x) => !x.parent);
  rootNodes.forEach((node) => {
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
var calculateRunValue_input = (input, context2) => {
  if (context2.visited.has(input)) {
    return input.runs;
  }
  context2.visited.add(input);
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
  const context2 = {
    allWorkflows,
    allWorkflowsMap: new Map(allWorkflows.map((x) => [x.workflowUri, x])),
    allNodes,
    allNodesMap: new Map(allNodes.map((x) => [x.nodeId, x])),
    allPipes,
    allNodeInstances: []
  };
  const rootNodeInstances = workflow.body.nodes?.map((node) => createNodeInstances(node, void 0, context2)) ?? [];
  context2.allNodeInstances.forEach((node) => {
    loadNodeConnections_inflows(node);
  });
  const allInflowPipes = context2.allNodeInstances.flatMap((x) => [...x.inputs.map((y) => y.inflowPipe), ...x.outputs.map((y) => y.inflowPipe)]).filter((x) => x).map((x) => x);
  context2.allNodeInstances.forEach((node) => {
    loadNodeConnections_outflows(node, allInflowPipes);
  });
  calculateRun(context2.allNodeInstances);
  return {
    workflow,
    context: context2,
    rootNodeInstances
  };
};
var createNodeInstances = (node, parent, context2) => {
  const workflow = context2.allWorkflowsMap.get(node.workflowUri);
  if (!workflow) {
    throw Error(`missing workflow ${node.workflowUri}`);
  }
  const instance = {
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
  const nodeInstancesRef = useRef6(loadRuntime(workflow).rootNodeInstances);
  const nodeInstances = nodeInstancesRef.current;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdGVzdHMvY29kZS8wMDAzLW9wZXJhdG9ycy8wNC50cy53b3JrZmxvdy5qc29uIiwgIi4uLy4uLy4uL3BhY2thZ2VzL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2sudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvd29yay1jYW52YXMtdmlldy50c3giLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNGdW5jdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9jcmVhdGVFcnJvckNsYXNzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvYXJyUmVtb3ZlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJzY3JpcHRpb24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL2NvbmZpZy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9ub29wLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9Ob3RpZmljYXRpb25GYWN0b3JpZXMudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvZXJyb3JDb250ZXh0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJzY3JpYmVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9waXBlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9PYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2xpZnQudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL1N1YmplY3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL2RhdGVUaW1lc3RhbXBQcm92aWRlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL0FjdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL2ludGVydmFsUHJvdmlkZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlci9Bc3luY0FjdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvU2NoZWR1bGVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNTY2hlZHVsZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlci9hc3luYy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9lbXB0eS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc1NjaGVkdWxlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9hcmdzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzQXJyYXlMaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzUHJvbWlzZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzQXN5bmNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zeW1ib2wvaXRlcmF0b3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9pbm5lckZyb20udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvZXhlY3V0ZVNjaGVkdWxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvb2JzZXJ2ZU9uLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc3Vic2NyaWJlT24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZU9ic2VydmFibGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXN5bmNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVkLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNEYXRlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL21hcE9uZU9yTWFueUFyZ3MudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvYXJnc0FyZ0FycmF5T3JPYmplY3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvY3JlYXRlT2JqZWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9tZXJnZUludGVybmFscy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlTWFwLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VBbGwudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9jb25jYXRBbGwudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29ic2VydmFibGUvY29uY2F0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL3RpbWVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvdGFrZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2lnbm9yZUVsZW1lbnRzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwVG8udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9kZWxheVdoZW4udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9kZWxheS50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS9tb3ZlYWJsZS12aWV3LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLWZsb3ctdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvcGlwZXMudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL3dvcmstbmFtZXMudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL25vZGUtaW5zdGFuY2Utdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvYW5hbHlzaXMvY2FsY3VsYXRlLXJ1bi50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy9hbmFseXNpcy9sb2FkLWRhdGEudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9pbmRleC50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9hcHAvc3JjL2luZGV4LnRzeCIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJCYWNrZ3JvdW5kQ29sb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyTmV0d29ya0FjdGl2aXR5SW5kaWNhdG9yVmlzaWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJIaWRkZW4udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyU3R5bGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc3R5bGVUb0JhclN0eWxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhclRyYW5zbHVjZW50LnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL2NsL3NyYy9pbmRleC50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvY2wvc3JjL2Rlc2lnbi90YWlsd2luZC90aGVtZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuICBcIm5hbWVcIjogXCJcIixcbiAgXCJ3b3JrZmxvd1VyaVwiOiBcIlwiLFxuICBcImlucHV0c1wiOiBbXSxcbiAgXCJvdXRwdXRzXCI6IFtdLFxuICBcImJvZHlcIjoge1xuICAgIFwia2luZFwiOiBcIm5vZGVzXCIsXG4gICAgXCJub2Rlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzXCIsXG4gICAgICAgIFwibm9kZUlkXCI6IFwibWFpblwiLFxuICAgICAgICBcImlucHV0UGlwZXNcIjogW11cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwid29ya2Zsb3dzXCI6IFtcbiAgICB7XG4gICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50c1wiLFxuICAgICAgXCJuYW1lXCI6IFwiZmlsZS50c1wiLFxuICAgICAgXCJpbnB1dHNcIjogW10sXG4gICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjJcIixcbiAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIndvcmtmbG93c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9hLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy9hLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCJkZWNsYXJhdGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvKlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvKlwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiKlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvLVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvLVwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiLVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvKlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvKlwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiKlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvK1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvK1wiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiK1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvK1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvK1wiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiK1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYi1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvYi1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiZGVjbGFyYXRpb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgIFwia2luZFwiOiBcIm5vZGVzXCIsXG4gICAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czoxXCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9hLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICBcImpzb25cIjogXCI0MlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czozXCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy8qXCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6MVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJhXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiZGF0YVwiLFxuICAgICAgICAgICAgICAgIFwianNvblwiOiBcIjNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6NFwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvLVwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgXCJqc29uXCI6IFwiMlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6M1wiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czo1XCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy8qXCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6MVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJhXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czo0XCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzOjZcIixcbiAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzLytcIixcbiAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czoxXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImFcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwidmFsdWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6N1wiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvK1wiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjZcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwidmFsdWVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgXCJqc29uXCI6IFwiN1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czoyXCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9iLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6N1wiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn0iLCAiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG4vKiogRW5zdXJlIHRoZSBpdGVtIGlzIGFsd2F5cyB0aGUgbGFzdCByZW5kZXJlZCB2YWx1ZSAqL1xuZXhwb3J0IGNvbnN0IHVzZVN0YWJsZSA9IDxUPihzdGFibGU6IFQpID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhYmxlKTtcbiAgICByZWYuY3VycmVudCA9IHN0YWJsZTtcbiAgICByZXR1cm4gcmVmO1xufTtcblxuLyoqIEVuc3VyZSB0aGUgY2FsbGJhY2sgaXMgYWx3YXlzIHRoZSBsYXN0IHJlbmRlcmVkIGNhbGxiYWNrLCBzbyBpdCBoYXMgcmVmZXJlbmNlIHRvIHRoZSBsYXN0IHN0YXRlXG4gKlxuICogTm8gbmVlZCBmb3IgZGVwZW5kZW5jaWVzLCB0aGlzIHdpbGwgc2ltcGx5IGhhdmUgYWNjZXNzIHRvIHRoZSB2YWx1ZXMgdGhhdCBleGlzdGVkIGluIHRoZSByZW5kZXJcbiAqIHdoZW4gaXQgd2FzIGNyZWF0ZWQgZHVyaW5nIHRoZSBsYXN0IHJlbmRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZVN0YWJsZUNhbGxiYWNrID0gPFRBcmdzIGV4dGVuZHMgdW5rbm93bltdLCBUUmV0dXJuPihcbiAgICBzdGFibGU6ICguLi5hcmdzOiBUQXJncykgPT4gVFJldHVybixcbikgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihzdGFibGUpO1xuICAgIHJlZi5jdXJyZW50ID0gc3RhYmxlO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdXNlUmVmKCguLi5hcmdzOiBUQXJncykgPT4gcmVmLmN1cnJlbnQoLi4uYXJncykpO1xuICAgIHJldHVybiBjYWxsYmFjay5jdXJyZW50O1xufTtcbiIsICJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFBvaW50ZXJFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBkZWxheSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNb3VzZUJ1dHRvbiwgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7IFdvcmtGbG93VmlldyB9IGZyb20gJy4vd29yay1mbG93LXZpZXcnO1xuaW1wb3J0IHsgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSwgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgTm9kZUluc3RhbmNlc1ZpZXcgfSBmcm9tICcuL25vZGUtaW5zdGFuY2Utdmlldyc7XG5pbXBvcnQgeyBsb2FkUnVudGltZSB9IGZyb20gJy4uL2FuYWx5c2lzL2xvYWQtZGF0YSc7XG5pbXBvcnQgeyBQaXBlRW5kcG9pbnRzUmVnaXN0cnksIFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGUgfSBmcm9tICcuL3BpcGVzJztcblxuZXhwb3J0IGNvbnN0IFdvcmtDYW52YXNWaWV3ID0gKHsgd29ya2Zsb3cgfTogeyB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93IH0pID0+IHtcbiAgICBjb25zdCBub2RlSW5zdGFuY2VzUmVmID0gdXNlUmVmKGxvYWRSdW50aW1lKHdvcmtmbG93KS5yb290Tm9kZUluc3RhbmNlcyk7XG4gICAgY29uc3Qgbm9kZUluc3RhbmNlcyA9IG5vZGVJbnN0YW5jZXNSZWYuY3VycmVudDtcblxuICAgIGNvbnN0IHZpZXdSZWYgPSB1c2VSZWYobnVsbCBhcyBudWxsIHwgVmlldyk7XG4gICAgY29uc3QgaG9zdFJlZiA9IHVzZVJlZihuZXcgU3ViamVjdDxWaWV3PigpKTtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlUmVmPFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGU+KHtcbiAgICAgICAgaG9zdE9ic2VydmFibGU6IGhvc3RSZWYuY3VycmVudC5waXBlKGRlbGF5KDI1MCkpLFxuICAgICAgICBob3N0VmlldzogbnVsbCxcbiAgICAgICAgZW5kcG9pbnRzOiB7fSxcbiAgICB9KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdmlld1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5jdXJyZW50Lmhvc3RWaWV3ID0gdmlld1JlZi5jdXJyZW50O1xuICAgICAgICBob3N0UmVmLmN1cnJlbnQubmV4dCh2aWV3UmVmLmN1cnJlbnQpO1xuICAgIH0sIFshdmlld1JlZi5jdXJyZW50XSk7XG5cbiAgICBjb25zdCB0YWJzID0gW2B3b3JrLWZsb3dgLCBgbm9kZS1pbnN0YW5jZXNgXSBhcyBjb25zdDtcbiAgICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoYHdvcmstZmxvd2AgYXMgdHlwZW9mIHRhYnNbbnVtYmVyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLXNsYXRlLTkwMCB3LWZ1bGwgaC1mdWxsIG92ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgICA8TW92ZWFibGVWaWV3XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbk1vdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBtb3VzZUJ1dHRvbj17TW91c2VCdXR0b24uTWlkZGxlfVxuICAgICAgICAgICAgICAgIGVuYWJsZVNjYWxpbmdcbiAgICAgICAgICAgICAgICB3aG9sZUNhbnZhc1xuICAgICAgICAgICAgICAgIG91dGVyQ2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJ1xuICAgICAgICAgICAgICAgIGlubmVyQ2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJ1xuICAgICAgICAgICAgICAgIEhlYWRlckNvbXBvbmVudD17dXNlU3RhYmxlQ2FsbGJhY2soKCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWJzLm1hcCh4ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzPXsoKSA9PiBzZXRUYWIoeCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtgcC0xIG0tMSBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIGJvcmRlci1ncmF5LTgwMCAke3RhYiA9PT0geCA/IGBgIDogYG9wYWNpdHktNTBgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtZ3JheS04MDAgJHt0YWIgPT09IHggPyBgYCA6IGBvcGFjaXR5LTUwYH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxWaWV3IHJlZj17dmlld1JlZn0gY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRzUmVnaXN0cnkuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHQuY3VycmVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFiID09PSBgd29yay1mbG93YCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtGbG93VmlldyB3b3JrZmxvdz17d29ya2Zsb3d9IGZ1bGwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFiID09PSBgbm9kZS1pbnN0YW5jZXNgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZUluc3RhbmNlc1ZpZXcgbm9kZUluc3RhbmNlcz17bm9kZUluc3RhbmNlc30gZnVsbCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9QaXBlRW5kcG9pbnRzUmVnaXN0cnkuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9Nb3ZlYWJsZVZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlO1xuICAgIGlmIChhc3luYykge1xuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xuICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XG4gICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG59O1xuIiwgIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWU6IGFueSk6IHZhbHVlIGlzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsICIvKipcbiAqIFVzZWQgdG8gY3JlYXRlIEVycm9yIHN1YmNsYXNzZXMgdW50aWwgdGhlIGNvbW11bml0eSBtb3ZlcyBhd2F5IGZyb20gRVM1LlxuICpcbiAqIFRoaXMgaXMgYmVjYXVzZSBjb21waWxpbmcgZnJvbSBUeXBlU2NyaXB0IGRvd24gdG8gRVM1IGhhcyBpc3N1ZXMgd2l0aCBzdWJjbGFzc2luZyBFcnJvcnNcbiAqIGFzIHdlbGwgYXMgb3RoZXIgYnVpbHQtaW4gdHlwZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTIxMjNcbiAqXG4gKiBAcGFyYW0gY3JlYXRlSW1wbCBBIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBhY3R1YWwgY29uc3RydWN0b3IgaW1wbGVtZW50YXRpb24uIFRoZSByZXR1cm5lZFxuICogZnVuY3Rpb24gc2hvdWxkIGJlIGEgbmFtZWQgZnVuY3Rpb24gdGhhdCBjYWxscyBgX3N1cGVyYCBpbnRlcm5hbGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXJyb3JDbGFzczxUPihjcmVhdGVJbXBsOiAoX3N1cGVyOiBhbnkpID0+IGFueSk6IFQge1xuICBjb25zdCBfc3VwZXIgPSAoaW5zdGFuY2U6IGFueSkgPT4ge1xuICAgIEVycm9yLmNhbGwoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gIH07XG5cbiAgY29uc3QgY3RvckZ1bmMgPSBjcmVhdGVJbXBsKF9zdXBlcik7XG4gIGN0b3JGdW5jLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgY3RvckZ1bmMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvckZ1bmM7XG4gIHJldHVybiBjdG9yRnVuYztcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcblxuZXhwb3J0IGludGVyZmFjZSBVbnN1YnNjcmlwdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICByZWFkb25seSBlcnJvcnM6IGFueVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuc3Vic2NyaXB0aW9uRXJyb3JDdG9yIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbC4gRG8gbm90IGNvbnN0cnVjdCBlcnJvciBpbnN0YW5jZXMuXG4gICAqIENhbm5vdCBiZSB0YWdnZWQgYXMgaW50ZXJuYWw6IGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdGl2ZVgvcnhqcy9pc3N1ZXMvNjI2OVxuICAgKi9cbiAgbmV3IChlcnJvcnM6IGFueVtdKTogVW5zdWJzY3JpcHRpb25FcnJvcjtcbn1cblxuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiBvbmUgb3IgbW9yZSBlcnJvcnMgaGF2ZSBvY2N1cnJlZCBkdXJpbmcgdGhlXG4gKiBgdW5zdWJzY3JpYmVgIG9mIGEge0BsaW5rIFN1YnNjcmlwdGlvbn0uXG4gKi9cbmV4cG9ydCBjb25zdCBVbnN1YnNjcmlwdGlvbkVycm9yOiBVbnN1YnNjcmlwdGlvbkVycm9yQ3RvciA9IGNyZWF0ZUVycm9yQ2xhc3MoXG4gIChfc3VwZXIpID0+XG4gICAgZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwodGhpczogYW55LCBlcnJvcnM6IChFcnJvciB8IHN0cmluZylbXSkge1xuICAgICAgX3N1cGVyKHRoaXMpO1xuICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3JzXG4gICAgICAgID8gYCR7ZXJyb3JzLmxlbmd0aH0gZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcbiR7ZXJyb3JzLm1hcCgoZXJyLCBpKSA9PiBgJHtpICsgMX0pICR7ZXJyLnRvU3RyaW5nKCl9YCkuam9pbignXFxuICAnKX1gXG4gICAgICAgIDogJyc7XG4gICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG4pO1xuIiwgIi8qKlxuICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gYW4gYXJyYXksIG11dGF0aW5nIGl0LlxuICogQHBhcmFtIGFyciBUaGUgYXJyYXkgdG8gcmVtb3ZlIHRoZSBpdGVtIGZyb21cbiAqIEBwYXJhbSBpdGVtIFRoZSBpdGVtIHRvIHJlbW92ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJyUmVtb3ZlPFQ+KGFycjogVFtdIHwgdW5kZWZpbmVkIHwgbnVsbCwgaXRlbTogVCkge1xuICBpZiAoYXJyKSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAwIDw9IGluZGV4ICYmIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IFVuc3Vic2NyaXB0aW9uRXJyb3IgfSBmcm9tICcuL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25MaWtlLCBUZWFyZG93bkxvZ2ljLCBVbnN1YnNjcmliYWJsZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGRpc3Bvc2FibGUgcmVzb3VyY2UsIHN1Y2ggYXMgdGhlIGV4ZWN1dGlvbiBvZiBhbiBPYnNlcnZhYmxlLiBBXG4gKiBTdWJzY3JpcHRpb24gaGFzIG9uZSBpbXBvcnRhbnQgbWV0aG9kLCBgdW5zdWJzY3JpYmVgLCB0aGF0IHRha2VzIG5vIGFyZ3VtZW50XG4gKiBhbmQganVzdCBkaXNwb3NlcyB0aGUgcmVzb3VyY2UgaGVsZCBieSB0aGUgc3Vic2NyaXB0aW9uLlxuICpcbiAqIEFkZGl0aW9uYWxseSwgc3Vic2NyaXB0aW9ucyBtYXkgYmUgZ3JvdXBlZCB0b2dldGhlciB0aHJvdWdoIHRoZSBgYWRkKClgXG4gKiBtZXRob2QsIHdoaWNoIHdpbGwgYXR0YWNoIGEgY2hpbGQgU3Vic2NyaXB0aW9uIHRvIHRoZSBjdXJyZW50IFN1YnNjcmlwdGlvbi5cbiAqIFdoZW4gYSBTdWJzY3JpcHRpb24gaXMgdW5zdWJzY3JpYmVkLCBhbGwgaXRzIGNoaWxkcmVuIChhbmQgaXRzIGdyYW5kY2hpbGRyZW4pXG4gKiB3aWxsIGJlIHVuc3Vic2NyaWJlZCBhcyB3ZWxsLlxuICpcbiAqIEBjbGFzcyBTdWJzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvbiBpbXBsZW1lbnRzIFN1YnNjcmlwdGlvbkxpa2Uge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgcHVibGljIHN0YXRpYyBFTVBUWSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZW1wdHkgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgZW1wdHkuY2xvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gZW1wdHk7XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIEEgZmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoaXMgU3Vic2NyaXB0aW9uIGhhcyBhbHJlYWR5IGJlZW4gdW5zdWJzY3JpYmVkLlxuICAgKi9cbiAgcHVibGljIGNsb3NlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3BhcmVudGFnZTogU3Vic2NyaXB0aW9uW10gfCBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgcmVnaXN0ZXJlZCBmaW5hbGl6ZXJzIHRvIGV4ZWN1dGUgdXBvbiB1bnN1YnNjcmlwdGlvbi4gQWRkaW5nIGFuZCByZW1vdmluZyBmcm9tIHRoaXNcbiAgICogbGlzdCBvY2N1cnMgaW4gdGhlIHtAbGluayAjYWRkfSBhbmQge0BsaW5rICNyZW1vdmV9IG1ldGhvZHMuXG4gICAqL1xuICBwcml2YXRlIF9maW5hbGl6ZXJzOiBFeGNsdWRlPFRlYXJkb3duTG9naWMsIHZvaWQ+W10gfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogQHBhcmFtIGluaXRpYWxUZWFyZG93biBBIGZ1bmN0aW9uIGV4ZWN1dGVkIGZpcnN0IGFzIHBhcnQgb2YgdGhlIGZpbmFsaXphdGlvblxuICAgKiBwcm9jZXNzIHRoYXQgaXMga2lja2VkIG9mZiB3aGVuIHtAbGluayAjdW5zdWJzY3JpYmV9IGlzIGNhbGxlZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5pdGlhbFRlYXJkb3duPzogKCkgPT4gdm9pZCkge31cblxuICAvKipcbiAgICogRGlzcG9zZXMgdGhlIHJlc291cmNlcyBoZWxkIGJ5IHRoZSBzdWJzY3JpcHRpb24uIE1heSwgZm9yIGluc3RhbmNlLCBjYW5jZWxcbiAgICogYW4gb25nb2luZyBPYnNlcnZhYmxlIGV4ZWN1dGlvbiBvciBjYW5jZWwgYW55IG90aGVyIHR5cGUgb2Ygd29yayB0aGF0XG4gICAqIHN0YXJ0ZWQgd2hlbiB0aGUgU3Vic2NyaXB0aW9uIHdhcyBjcmVhdGVkLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgbGV0IGVycm9yczogYW55W10gfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG5cbiAgICAgIC8vIFJlbW92ZSB0aGlzIGZyb20gaXQncyBwYXJlbnRzLlxuICAgICAgY29uc3QgeyBfcGFyZW50YWdlIH0gPSB0aGlzO1xuICAgICAgaWYgKF9wYXJlbnRhZ2UpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHBhcmVudCBvZiBfcGFyZW50YWdlKSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfcGFyZW50YWdlLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGluaXRpYWxUZWFyZG93bjogaW5pdGlhbEZpbmFsaXplciB9ID0gdGhpcztcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGluaXRpYWxGaW5hbGl6ZXIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaW5pdGlhbEZpbmFsaXplcigpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZXJyb3JzID0gZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IgPyBlLmVycm9ycyA6IFtlXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IF9maW5hbGl6ZXJzIH0gPSB0aGlzO1xuICAgICAgaWYgKF9maW5hbGl6ZXJzKSB7XG4gICAgICAgIHRoaXMuX2ZpbmFsaXplcnMgPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGZpbmFsaXplciBvZiBfZmluYWxpemVycykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBleGVjRmluYWxpemVyKGZpbmFsaXplcik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgPz8gW107XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lcnIuZXJyb3JzXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3IoZXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGZpbmFsaXplciB0byB0aGlzIHN1YnNjcmlwdGlvbiwgc28gdGhhdCBmaW5hbGl6YXRpb24gd2lsbCBiZSB1bnN1YnNjcmliZWQvY2FsbGVkXG4gICAqIHdoZW4gdGhpcyBzdWJzY3JpcHRpb24gaXMgdW5zdWJzY3JpYmVkLiBJZiB0aGlzIHN1YnNjcmlwdGlvbiBpcyBhbHJlYWR5IHtAbGluayAjY2xvc2VkfSxcbiAgICogYmVjYXVzZSBpdCBoYXMgYWxyZWFkeSBiZWVuIHVuc3Vic2NyaWJlZCwgdGhlbiB3aGF0ZXZlciBmaW5hbGl6ZXIgaXMgcGFzc2VkIHRvIGl0XG4gICAqIHdpbGwgYXV0b21hdGljYWxseSBiZSBleGVjdXRlZCAodW5sZXNzIHRoZSBmaW5hbGl6ZXIgaXRzZWxmIGlzIGFsc28gYSBjbG9zZWQgc3Vic2NyaXB0aW9uKS5cbiAgICpcbiAgICogQ2xvc2VkIFN1YnNjcmlwdGlvbnMgY2Fubm90IGJlIGFkZGVkIGFzIGZpbmFsaXplcnMgdG8gYW55IHN1YnNjcmlwdGlvbi4gQWRkaW5nIGEgY2xvc2VkXG4gICAqIHN1YnNjcmlwdGlvbiB0byBhIGFueSBzdWJzY3JpcHRpb24gd2lsbCByZXN1bHQgaW4gbm8gb3BlcmF0aW9uLiAoQSBub29wKS5cbiAgICpcbiAgICogQWRkaW5nIGEgc3Vic2NyaXB0aW9uIHRvIGl0c2VsZiwgb3IgYWRkaW5nIGBudWxsYCBvciBgdW5kZWZpbmVkYCB3aWxsIG5vdCBwZXJmb3JtIGFueVxuICAgKiBvcGVyYXRpb24gYXQgYWxsLiAoQSBub29wKS5cbiAgICpcbiAgICogYFN1YnNjcmlwdGlvbmAgaW5zdGFuY2VzIHRoYXQgYXJlIGFkZGVkIHRvIHRoaXMgaW5zdGFuY2Ugd2lsbCBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGVtc2VsdmVzXG4gICAqIGlmIHRoZXkgYXJlIHVuc3Vic2NyaWJlZC4gRnVuY3Rpb25zIGFuZCB7QGxpbmsgVW5zdWJzY3JpYmFibGV9IG9iamVjdHMgdGhhdCB5b3Ugd2lzaCB0byByZW1vdmVcbiAgICogd2lsbCBuZWVkIHRvIGJlIHJlbW92ZWQgbWFudWFsbHkgd2l0aCB7QGxpbmsgI3JlbW92ZX1cbiAgICpcbiAgICogQHBhcmFtIHRlYXJkb3duIFRoZSBmaW5hbGl6YXRpb24gbG9naWMgdG8gYWRkIHRvIHRoaXMgc3Vic2NyaXB0aW9uLlxuICAgKi9cbiAgYWRkKHRlYXJkb3duOiBUZWFyZG93bkxvZ2ljKTogdm9pZCB7XG4gICAgLy8gT25seSBhZGQgdGhlIGZpbmFsaXplciBpZiBpdCdzIG5vdCB1bmRlZmluZWRcbiAgICAvLyBhbmQgZG9uJ3QgYWRkIGEgc3Vic2NyaXB0aW9uIHRvIGl0c2VsZi5cbiAgICBpZiAodGVhcmRvd24gJiYgdGVhcmRvd24gIT09IHRoaXMpIHtcbiAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAvLyBJZiB0aGlzIHN1YnNjcmlwdGlvbiBpcyBhbHJlYWR5IGNsb3NlZCxcbiAgICAgICAgLy8gZXhlY3V0ZSB3aGF0ZXZlciBmaW5hbGl6ZXIgaXMgaGFuZGVkIHRvIGl0IGF1dG9tYXRpY2FsbHkuXG4gICAgICAgIGV4ZWNGaW5hbGl6ZXIodGVhcmRvd24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRlYXJkb3duIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgLy8gV2UgZG9uJ3QgYWRkIGNsb3NlZCBzdWJzY3JpcHRpb25zLCBhbmQgd2UgZG9uJ3QgYWRkIHRoZSBzYW1lIHN1YnNjcmlwdGlvblxuICAgICAgICAgIC8vIHR3aWNlLiBTdWJzY3JpcHRpb24gdW5zdWJzY3JpYmUgaXMgaWRlbXBvdGVudC5cbiAgICAgICAgICBpZiAodGVhcmRvd24uY2xvc2VkIHx8IHRlYXJkb3duLl9oYXNQYXJlbnQodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGVhcmRvd24uX2FkZFBhcmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICAodGhpcy5fZmluYWxpemVycyA9IHRoaXMuX2ZpbmFsaXplcnMgPz8gW10pLnB1c2godGVhcmRvd24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIGEgdGhpcyBzdWJzY3JpcHRpb24gYWxyZWFkeSBoYXMgYSBwYXJ0aWN1bGFyIHBhcmVudC5cbiAgICogVGhpcyB3aWxsIHNpZ25hbCB0aGF0IHRoaXMgc3Vic2NyaXB0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIHBhcmVudCBpbiBxdWVzdGlvbi5cbiAgICogQHBhcmFtIHBhcmVudCB0aGUgcGFyZW50IHRvIGNoZWNrIGZvclxuICAgKi9cbiAgcHJpdmF0ZSBfaGFzUGFyZW50KHBhcmVudDogU3Vic2NyaXB0aW9uKSB7XG4gICAgY29uc3QgeyBfcGFyZW50YWdlIH0gPSB0aGlzO1xuICAgIHJldHVybiBfcGFyZW50YWdlID09PSBwYXJlbnQgfHwgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgJiYgX3BhcmVudGFnZS5pbmNsdWRlcyhwYXJlbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcGFyZW50IHRvIHRoaXMgc3Vic2NyaXB0aW9uIHNvIGl0IGNhbiBiZSByZW1vdmVkIGZyb20gdGhlIHBhcmVudCBpZiBpdFxuICAgKiB1bnN1YnNjcmliZXMgb24gaXQncyBvd24uXG4gICAqXG4gICAqIE5PVEU6IFRISVMgQVNTVU1FUyBUSEFUIHtAbGluayBfaGFzUGFyZW50fSBIQVMgQUxSRUFEWSBCRUVOIENIRUNLRUQuXG4gICAqIEBwYXJhbSBwYXJlbnQgVGhlIHBhcmVudCBzdWJzY3JpcHRpb24gdG8gYWRkXG4gICAqL1xuICBwcml2YXRlIF9hZGRQYXJlbnQocGFyZW50OiBTdWJzY3JpcHRpb24pIHtcbiAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgdGhpcy5fcGFyZW50YWdlID0gQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSA/IChfcGFyZW50YWdlLnB1c2gocGFyZW50KSwgX3BhcmVudGFnZSkgOiBfcGFyZW50YWdlID8gW19wYXJlbnRhZ2UsIHBhcmVudF0gOiBwYXJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGEgY2hpbGQgd2hlbiBpdCBpcyByZW1vdmVkIHZpYSB7QGxpbmsgI3JlbW92ZX0uXG4gICAqIEBwYXJhbSBwYXJlbnQgVGhlIHBhcmVudCB0byByZW1vdmVcbiAgICovXG4gIHByaXZhdGUgX3JlbW92ZVBhcmVudChwYXJlbnQ6IFN1YnNjcmlwdGlvbikge1xuICAgIGNvbnN0IHsgX3BhcmVudGFnZSB9ID0gdGhpcztcbiAgICBpZiAoX3BhcmVudGFnZSA9PT0gcGFyZW50KSB7XG4gICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgYXJyUmVtb3ZlKF9wYXJlbnRhZ2UsIHBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBmaW5hbGl6ZXIgZnJvbSB0aGlzIHN1YnNjcmlwdGlvbiB0aGF0IHdhcyBwcmV2aW91c2x5IGFkZGVkIHdpdGggdGhlIHtAbGluayAjYWRkfSBtZXRob2QuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBgU3Vic2NyaXB0aW9uYCBpbnN0YW5jZXMsIHdoZW4gdW5zdWJzY3JpYmVkLCB3aWxsIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZW1zZWx2ZXNcbiAgICogZnJvbSBldmVyeSBvdGhlciBgU3Vic2NyaXB0aW9uYCB0aGV5IGhhdmUgYmVlbiBhZGRlZCB0by4gVGhpcyBtZWFucyB0aGF0IHVzaW5nIHRoZSBgcmVtb3ZlYCBtZXRob2RcbiAgICogaXMgbm90IGEgY29tbW9uIHRoaW5nIGFuZCBzaG91bGQgYmUgdXNlZCB0aG91Z2h0ZnVsbHkuXG4gICAqXG4gICAqIElmIHlvdSBhZGQgdGhlIHNhbWUgZmluYWxpemVyIGluc3RhbmNlIG9mIGEgZnVuY3Rpb24gb3IgYW4gdW5zdWJzY3JpYmFibGUgb2JqZWN0IHRvIGEgYFN1YnNjcmlwdGlvbmAgaW5zdGFuY2VcbiAgICogbW9yZSB0aGFuIG9uY2UsIHlvdSB3aWxsIG5lZWQgdG8gY2FsbCBgcmVtb3ZlYCB0aGUgc2FtZSBudW1iZXIgb2YgdGltZXMgdG8gcmVtb3ZlIGFsbCBpbnN0YW5jZXMuXG4gICAqXG4gICAqIEFsbCBmaW5hbGl6ZXIgaW5zdGFuY2VzIGFyZSByZW1vdmVkIHRvIGZyZWUgdXAgbWVtb3J5IHVwb24gdW5zdWJzY3JpcHRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB0ZWFyZG93biBUaGUgZmluYWxpemVyIHRvIHJlbW92ZSBmcm9tIHRoaXMgc3Vic2NyaXB0aW9uXG4gICAqL1xuICByZW1vdmUodGVhcmRvd246IEV4Y2x1ZGU8VGVhcmRvd25Mb2dpYywgdm9pZD4pOiB2b2lkIHtcbiAgICBjb25zdCB7IF9maW5hbGl6ZXJzIH0gPSB0aGlzO1xuICAgIF9maW5hbGl6ZXJzICYmIGFyclJlbW92ZShfZmluYWxpemVycywgdGVhcmRvd24pO1xuXG4gICAgaWYgKHRlYXJkb3duIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0ZWFyZG93bi5fcmVtb3ZlUGFyZW50KHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgRU1QVFlfU1VCU0NSSVBUSU9OID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTdWJzY3JpcHRpb24odmFsdWU6IGFueSk6IHZhbHVlIGlzIFN1YnNjcmlwdGlvbiB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24gfHxcbiAgICAodmFsdWUgJiYgJ2Nsb3NlZCcgaW4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5yZW1vdmUpICYmIGlzRnVuY3Rpb24odmFsdWUuYWRkKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnVuc3Vic2NyaWJlKSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gZXhlY0ZpbmFsaXplcihmaW5hbGl6ZXI6IFVuc3Vic2NyaWJhYmxlIHwgKCgpID0+IHZvaWQpKSB7XG4gIGlmIChpc0Z1bmN0aW9uKGZpbmFsaXplcikpIHtcbiAgICBmaW5hbGl6ZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBmaW5hbGl6ZXIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgR2xvYmFsQ29uZmlnfSBvYmplY3QgZm9yIFJ4SlMuIEl0IGlzIHVzZWQgdG8gY29uZmlndXJlIHRoaW5nc1xuICogbGlrZSBob3cgdG8gcmVhY3Qgb24gdW5oYW5kbGVkIGVycm9ycy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbmZpZzogR2xvYmFsQ29uZmlnID0ge1xuICBvblVuaGFuZGxlZEVycm9yOiBudWxsLFxuICBvblN0b3BwZWROb3RpZmljYXRpb246IG51bGwsXG4gIFByb21pc2U6IHVuZGVmaW5lZCxcbiAgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZzogZmFsc2UsXG4gIHVzZURlcHJlY2F0ZWROZXh0Q29udGV4dDogZmFsc2UsXG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIFJ4SlMsIHVzZWQgdG8gY29uZmlndXJlIHRoaW5nc1xuICogbGlrZSBob3cgdG8gcmVhY3Qgb24gdW5oYW5kbGVkIGVycm9ycy4gQWNjZXNzaWJsZSB2aWEge0BsaW5rIGNvbmZpZ31cbiAqIG9iamVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxDb25maWcge1xuICAvKipcbiAgICogQSByZWdpc3RyYXRpb24gcG9pbnQgZm9yIHVuaGFuZGxlZCBlcnJvcnMgZnJvbSBSeEpTLiBUaGVzZSBhcmUgZXJyb3JzIHRoYXRcbiAgICogY2Fubm90IHdlcmUgbm90IGhhbmRsZWQgYnkgY29uc3VtaW5nIGNvZGUgaW4gdGhlIHVzdWFsIHN1YnNjcmlwdGlvbiBwYXRoLiBGb3JcbiAgICogZXhhbXBsZSwgaWYgeW91IGhhdmUgdGhpcyBjb25maWd1cmVkLCBhbmQgeW91IHN1YnNjcmliZSB0byBhbiBvYnNlcnZhYmxlIHdpdGhvdXRcbiAgICogcHJvdmlkaW5nIGFuIGVycm9yIGhhbmRsZXIsIGVycm9ycyBmcm9tIHRoYXQgc3Vic2NyaXB0aW9uIHdpbGwgZW5kIHVwIGhlcmUuIFRoaXNcbiAgICogd2lsbCBfYWx3YXlzXyBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkgb24gYW5vdGhlciBqb2IgaW4gdGhlIHJ1bnRpbWUuIFRoaXMgaXMgYmVjYXVzZVxuICAgKiB3ZSBkbyBub3Qgd2FudCBlcnJvcnMgdGhyb3duIGluIHRoaXMgdXNlci1jb25maWd1cmVkIGhhbmRsZXIgdG8gaW50ZXJmZXJlIHdpdGggdGhlXG4gICAqIGJlaGF2aW9yIG9mIHRoZSBsaWJyYXJ5LlxuICAgKi9cbiAgb25VbmhhbmRsZWRFcnJvcjogKChlcnI6IGFueSkgPT4gdm9pZCkgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBBIHJlZ2lzdHJhdGlvbiBwb2ludCBmb3Igbm90aWZpY2F0aW9ucyB0aGF0IGNhbm5vdCBiZSBzZW50IHRvIHN1YnNjcmliZXJzIGJlY2F1c2UgdGhleVxuICAgKiBoYXZlIGNvbXBsZXRlZCwgZXJyb3JlZCBvciBoYXZlIGJlZW4gZXhwbGljaXRseSB1bnN1YnNjcmliZWQuIEJ5IGRlZmF1bHQsIG5leHQsIGNvbXBsZXRlXG4gICAqIGFuZCBlcnJvciBub3RpZmljYXRpb25zIHNlbnQgdG8gc3RvcHBlZCBzdWJzY3JpYmVycyBhcmUgbm9vcHMuIEhvd2V2ZXIsIHNvbWV0aW1lcyBjYWxsZXJzXG4gICAqIG1pZ2h0IHdhbnQgYSBkaWZmZXJlbnQgYmVoYXZpb3IuIEZvciBleGFtcGxlLCB3aXRoIHNvdXJjZXMgdGhhdCBhdHRlbXB0IHRvIHJlcG9ydCBlcnJvcnNcbiAgICogdG8gc3RvcHBlZCBzdWJzY3JpYmVycywgYSBjYWxsZXIgY2FuIGNvbmZpZ3VyZSBSeEpTIHRvIHRocm93IGFuIHVuaGFuZGxlZCBlcnJvciBpbnN0ZWFkLlxuICAgKiBUaGlzIHdpbGwgX2Fsd2F5c18gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5IG9uIGFub3RoZXIgam9iIGluIHRoZSBydW50aW1lLiBUaGlzIGlzIGJlY2F1c2VcbiAgICogd2UgZG8gbm90IHdhbnQgZXJyb3JzIHRocm93biBpbiB0aGlzIHVzZXItY29uZmlndXJlZCBoYW5kbGVyIHRvIGludGVyZmVyZSB3aXRoIHRoZVxuICAgKiBiZWhhdmlvciBvZiB0aGUgbGlicmFyeS5cbiAgICovXG4gIG9uU3RvcHBlZE5vdGlmaWNhdGlvbjogKChub3RpZmljYXRpb246IE9ic2VydmFibGVOb3RpZmljYXRpb248YW55Piwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB2b2lkKSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBwcm9taXNlIGNvbnN0cnVjdG9yIHVzZWQgYnkgZGVmYXVsdCBmb3Ige0BsaW5rIE9ic2VydmFibGUjdG9Qcm9taXNlIHRvUHJvbWlzZX0gYW5kIHtAbGluayBPYnNlcnZhYmxlI2ZvckVhY2ggZm9yRWFjaH1cbiAgICogbWV0aG9kcy5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgQXMgb2YgdmVyc2lvbiA4LCBSeEpTIHdpbGwgbm8gbG9uZ2VyIHN1cHBvcnQgdGhpcyBzb3J0IG9mIGluamVjdGlvbiBvZiBhXG4gICAqIFByb21pc2UgY29uc3RydWN0b3IuIElmIHlvdSBuZWVkIGEgUHJvbWlzZSBpbXBsZW1lbnRhdGlvbiBvdGhlciB0aGFuIG5hdGl2ZSBwcm9taXNlcyxcbiAgICogcGxlYXNlIHBvbHlmaWxsL3BhdGNoIFByb21pc2UgYXMgeW91IHNlZSBhcHByb3ByaWF0ZS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgUHJvbWlzZT86IFByb21pc2VDb25zdHJ1Y3Rvckxpa2U7XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHR1cm5zIG9uIHN5bmNocm9ub3VzIGVycm9yIHJldGhyb3dpbmcsIHdoaWNoIGlzIGEgZGVwcmVjYXRlZCBiZWhhdmlvclxuICAgKiBpbiB2NiBhbmQgaGlnaGVyLiBUaGlzIGJlaGF2aW9yIGVuYWJsZXMgYmFkIHBhdHRlcm5zIGxpa2Ugd3JhcHBpbmcgYSBzdWJzY3JpYmVcbiAgICogY2FsbCBpbiBhIHRyeS9jYXRjaCBibG9jay4gSXQgYWxzbyBlbmFibGVzIHByb2R1Y2VyIGludGVyZmVyZW5jZSwgYSBuYXN0eSBidWdcbiAgICogd2hlcmUgYSBtdWx0aWNhc3QgY2FuIGJlIGJyb2tlbiBmb3IgYWxsIG9ic2VydmVycyBieSBhIGRvd25zdHJlYW0gY29uc3VtZXIgd2l0aFxuICAgKiBhbiB1bmhhbmRsZWQgZXJyb3IuIERPIE5PVCBVU0UgVEhJUyBGTEFHIFVOTEVTUyBJVCdTIE5FRURFRCBUTyBCVVkgVElNRVxuICAgKiBGT1IgTUlHUkFUSU9OIFJFQVNPTlMuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIEFzIG9mIHZlcnNpb24gOCwgUnhKUyB3aWxsIG5vIGxvbmdlciBzdXBwb3J0IHN5bmNocm9ub3VzIHRocm93aW5nXG4gICAqIG9mIHVuaGFuZGxlZCBlcnJvcnMuIEFsbCBlcnJvcnMgd2lsbCBiZSB0aHJvd24gb24gYSBzZXBhcmF0ZSBjYWxsIHN0YWNrIHRvIHByZXZlbnQgYmFkXG4gICAqIGJlaGF2aW9ycyBkZXNjcmliZWQgYWJvdmUuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIGVuYWJsZXMgYW4gYXMtb2YteWV0IHVuZG9jdW1lbnRlZCBmZWF0dXJlIGZyb20gdjU6IFRoZSBhYmlsaXR5IHRvIGFjY2Vzc1xuICAgKiBgdW5zdWJzY3JpYmUoKWAgdmlhIGB0aGlzYCBjb250ZXh0IGluIGBuZXh0YCBmdW5jdGlvbnMgY3JlYXRlZCBpbiBvYnNlcnZlcnMgcGFzc2VkXG4gICAqIHRvIGBzdWJzY3JpYmVgLlxuICAgKlxuICAgKiBUaGlzIGlzIGJlaW5nIHJlbW92ZWQgYmVjYXVzZSB0aGUgcGVyZm9ybWFuY2Ugd2FzIHNldmVyZWx5IHByb2JsZW1hdGljLCBhbmQgaXQgY291bGQgYWxzbyBjYXVzZVxuICAgKiBpc3N1ZXMgd2hlbiB0eXBlcyBvdGhlciB0aGFuIFBPSk9zIGFyZSBwYXNzZWQgdG8gc3Vic2NyaWJlIGFzIHN1YnNjcmliZXJzLCBhcyB0aGV5IHdpbGwgbGlrZWx5IGhhdmVcbiAgICogdGhlaXIgYHRoaXNgIGNvbnRleHQgb3ZlcndyaXR0ZW4uXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIEFzIG9mIHZlcnNpb24gOCwgUnhKUyB3aWxsIG5vIGxvbmdlciBzdXBwb3J0IGFsdGVyaW5nIHRoZVxuICAgKiBjb250ZXh0IG9mIG5leHQgZnVuY3Rpb25zIHByb3ZpZGVkIGFzIHBhcnQgb2YgYW4gb2JzZXJ2ZXIgdG8gU3Vic2NyaWJlLiBJbnN0ZWFkLFxuICAgKiB5b3Ugd2lsbCBoYXZlIGFjY2VzcyB0byBhIHN1YnNjcmlwdGlvbiBvciBhIHNpZ25hbCBvciB0b2tlbiB0aGF0IHdpbGwgYWxsb3cgeW91IHRvIGRvIHRoaW5ncyBsaWtlXG4gICAqIHVuc3Vic2NyaWJlIGFuZCB0ZXN0IGNsb3NlZCBzdGF0dXMuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIHVzZURlcHJlY2F0ZWROZXh0Q29udGV4dDogYm9vbGVhbjtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRpbWVySGFuZGxlIH0gZnJvbSAnLi90aW1lckhhbmRsZSc7XG50eXBlIFNldFRpbWVvdXRGdW5jdGlvbiA9IChoYW5kbGVyOiAoKSA9PiB2b2lkLCB0aW1lb3V0PzogbnVtYmVyLCAuLi5hcmdzOiBhbnlbXSkgPT4gVGltZXJIYW5kbGU7XG50eXBlIENsZWFyVGltZW91dEZ1bmN0aW9uID0gKGhhbmRsZTogVGltZXJIYW5kbGUpID0+IHZvaWQ7XG5cbmludGVyZmFjZSBUaW1lb3V0UHJvdmlkZXIge1xuICBzZXRUaW1lb3V0OiBTZXRUaW1lb3V0RnVuY3Rpb247XG4gIGNsZWFyVGltZW91dDogQ2xlYXJUaW1lb3V0RnVuY3Rpb247XG4gIGRlbGVnYXRlOlxuICAgIHwge1xuICAgICAgICBzZXRUaW1lb3V0OiBTZXRUaW1lb3V0RnVuY3Rpb247XG4gICAgICAgIGNsZWFyVGltZW91dDogQ2xlYXJUaW1lb3V0RnVuY3Rpb247XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCB0aW1lb3V0UHJvdmlkZXI6IFRpbWVvdXRQcm92aWRlciA9IHtcbiAgLy8gV2hlbiBhY2Nlc3NpbmcgdGhlIGRlbGVnYXRlLCB1c2UgdGhlIHZhcmlhYmxlIHJhdGhlciB0aGFuIGB0aGlzYCBzbyB0aGF0XG4gIC8vIHRoZSBmdW5jdGlvbnMgY2FuIGJlIGNhbGxlZCB3aXRob3V0IGJlaW5nIGJvdW5kIHRvIHRoZSBwcm92aWRlci5cbiAgc2V0VGltZW91dChoYW5kbGVyOiAoKSA9PiB2b2lkLCB0aW1lb3V0PzogbnVtYmVyLCAuLi5hcmdzKSB7XG4gICAgY29uc3QgeyBkZWxlZ2F0ZSB9ID0gdGltZW91dFByb3ZpZGVyO1xuICAgIGlmIChkZWxlZ2F0ZT8uc2V0VGltZW91dCkge1xuICAgICAgcmV0dXJuIGRlbGVnYXRlLnNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCwgLi4uYXJncyk7XG4gICAgfVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQsIC4uLmFyZ3MpO1xuICB9LFxuICBjbGVhclRpbWVvdXQoaGFuZGxlKSB7XG4gICAgY29uc3QgeyBkZWxlZ2F0ZSB9ID0gdGltZW91dFByb3ZpZGVyO1xuICAgIHJldHVybiAoZGVsZWdhdGU/LmNsZWFyVGltZW91dCB8fCBjbGVhclRpbWVvdXQpKGhhbmRsZSBhcyBhbnkpO1xuICB9LFxuICBkZWxlZ2F0ZTogdW5kZWZpbmVkLFxufTtcbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi4vc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlcic7XG5cbi8qKlxuICogSGFuZGxlcyBhbiBlcnJvciBvbiBhbm90aGVyIGpvYiBlaXRoZXIgd2l0aCB0aGUgdXNlci1jb25maWd1cmVkIHtAbGluayBvblVuaGFuZGxlZEVycm9yfSxcbiAqIG9yIGJ5IHRocm93aW5nIGl0IG9uIHRoYXQgbmV3IGpvYiBzbyBpdCBjYW4gYmUgcGlja2VkIHVwIGJ5IGB3aW5kb3cub25lcnJvcmAsIGBwcm9jZXNzLm9uKCdlcnJvcicpYCwgZXRjLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCB3aGVuZXZlciB0aGVyZSBpcyBhbiBlcnJvciB0aGF0IGlzIG91dC1vZi1iYW5kIHdpdGggdGhlIHN1YnNjcmlwdGlvblxuICogb3Igd2hlbiBhbiBlcnJvciBoaXRzIGEgdGVybWluYWwgYm91bmRhcnkgb2YgdGhlIHN1YnNjcmlwdGlvbiBhbmQgbm8gZXJyb3IgaGFuZGxlciB3YXMgcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIGVyciB0aGUgZXJyb3IgdG8gcmVwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnI6IGFueSkge1xuICB0aW1lb3V0UHJvdmlkZXIuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgeyBvblVuaGFuZGxlZEVycm9yIH0gPSBjb25maWc7XG4gICAgaWYgKG9uVW5oYW5kbGVkRXJyb3IpIHtcbiAgICAgIC8vIEV4ZWN1dGUgdGhlIHVzZXItY29uZmlndXJlZCBlcnJvciBoYW5kbGVyLlxuICAgICAgb25VbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaHJvdyBzbyBpdCBpcyBwaWNrZWQgdXAgYnkgdGhlIHJ1bnRpbWUncyB1bmNhdWdodCBlcnJvciBtZWNoYW5pc20uXG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9KTtcbn1cbiIsICIvKiB0c2xpbnQ6ZGlzYWJsZTpuby1lbXB0eSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IH1cbiIsICJpbXBvcnQgeyBDb21wbGV0ZU5vdGlmaWNhdGlvbiwgTmV4dE5vdGlmaWNhdGlvbiwgRXJyb3JOb3RpZmljYXRpb24gfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBBIGNvbXBsZXRpb24gb2JqZWN0IG9wdGltaXplZCBmb3IgbWVtb3J5IHVzZSBhbmQgY3JlYXRlZCB0byBiZSB0aGVcbiAqIHNhbWUgXCJzaGFwZVwiIGFzIG90aGVyIG5vdGlmaWNhdGlvbnMgaW4gdjguXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IENPTVBMRVRFX05PVElGSUNBVElPTiA9ICgoKSA9PiBjcmVhdGVOb3RpZmljYXRpb24oJ0MnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCkgYXMgQ29tcGxldGVOb3RpZmljYXRpb24pKCk7XG5cbi8qKlxuICogSW50ZXJuYWwgdXNlIG9ubHkuIENyZWF0ZXMgYW4gb3B0aW1pemVkIGVycm9yIG5vdGlmaWNhdGlvbiB0aGF0IGlzIHRoZSBzYW1lIFwic2hhcGVcIlxuICogYXMgb3RoZXIgbm90aWZpY2F0aW9ucy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JOb3RpZmljYXRpb24oZXJyb3I6IGFueSk6IEVycm9yTm90aWZpY2F0aW9uIHtcbiAgcmV0dXJuIGNyZWF0ZU5vdGlmaWNhdGlvbignRScsIHVuZGVmaW5lZCwgZXJyb3IpIGFzIGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCB1c2Ugb25seS4gQ3JlYXRlcyBhbiBvcHRpbWl6ZWQgbmV4dCBub3RpZmljYXRpb24gdGhhdCBpcyB0aGUgc2FtZSBcInNoYXBlXCJcbiAqIGFzIG90aGVyIG5vdGlmaWNhdGlvbnMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHROb3RpZmljYXRpb248VD4odmFsdWU6IFQpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vdGlmaWNhdGlvbignTicsIHZhbHVlLCB1bmRlZmluZWQpIGFzIE5leHROb3RpZmljYXRpb248VD47XG59XG5cbi8qKlxuICogRW5zdXJlcyB0aGF0IGFsbCBub3RpZmljYXRpb25zIGNyZWF0ZWQgaW50ZXJuYWxseSBoYXZlIHRoZSBzYW1lIFwic2hhcGVcIiBpbiB2OC5cbiAqXG4gKiBUT0RPOiBUaGlzIGlzIG9ubHkgZXhwb3J0ZWQgdG8gc3VwcG9ydCBhIGNyYXp5IGxlZ2FjeSB0ZXN0IGluIGBncm91cEJ5YC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKGtpbmQ6ICdOJyB8ICdFJyB8ICdDJywgdmFsdWU6IGFueSwgZXJyb3I6IGFueSkge1xuICByZXR1cm4ge1xuICAgIGtpbmQsXG4gICAgdmFsdWUsXG4gICAgZXJyb3IsXG4gIH07XG59XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxubGV0IGNvbnRleHQ6IHsgZXJyb3JUaHJvd246IGJvb2xlYW47IGVycm9yOiBhbnkgfSB8IG51bGwgPSBudWxsO1xuXG4vKipcbiAqIEhhbmRsZXMgZGVhbGluZyB3aXRoIGVycm9ycyBmb3Igc3VwZXItZ3Jvc3MgbW9kZS4gQ3JlYXRlcyBhIGNvbnRleHQsIGluIHdoaWNoXG4gKiBhbnkgc3luY2hyb25vdXNseSB0aHJvd24gZXJyb3JzIHdpbGwgYmUgcGFzc2VkIHRvIHtAbGluayBjYXB0dXJlRXJyb3J9LiBXaGljaFxuICogd2lsbCByZWNvcmQgdGhlIGVycm9yIHN1Y2ggdGhhdCBpdCB3aWxsIGJlIHJldGhyb3duIGFmdGVyIHRoZSBjYWxsIGJhY2sgaXMgY29tcGxldGUuXG4gKiBUT0RPOiBSZW1vdmUgaW4gdjhcbiAqIEBwYXJhbSBjYiBBbiBpbW1lZGlhdGVseSBleGVjdXRlZCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yQ29udGV4dChjYjogKCkgPT4gdm9pZCkge1xuICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICBjb25zdCBpc1Jvb3QgPSAhY29udGV4dDtcbiAgICBpZiAoaXNSb290KSB7XG4gICAgICBjb250ZXh0ID0geyBlcnJvclRocm93bjogZmFsc2UsIGVycm9yOiBudWxsIH07XG4gICAgfVxuICAgIGNiKCk7XG4gICAgaWYgKGlzUm9vdCkge1xuICAgICAgY29uc3QgeyBlcnJvclRocm93biwgZXJyb3IgfSA9IGNvbnRleHQhO1xuICAgICAgY29udGV4dCA9IG51bGw7XG4gICAgICBpZiAoZXJyb3JUaHJvd24pIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFRoaXMgaXMgdGhlIGdlbmVyYWwgbm9uLWRlcHJlY2F0ZWQgcGF0aCBmb3IgZXZlcnlvbmUgdGhhdFxuICAgIC8vIGlzbid0IGNyYXp5IGVub3VnaCB0byB1c2Ugc3VwZXItZ3Jvc3MgbW9kZSAodXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZylcbiAgICBjYigpO1xuICB9XG59XG5cbi8qKlxuICogQ2FwdHVyZXMgZXJyb3JzIG9ubHkgaW4gc3VwZXItZ3Jvc3MgbW9kZS5cbiAqIEBwYXJhbSBlcnIgdGhlIGVycm9yIHRvIGNhcHR1cmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcHR1cmVFcnJvcihlcnI6IGFueSkge1xuICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgJiYgY29udGV4dCkge1xuICAgIGNvbnRleHQuZXJyb3JUaHJvd24gPSB0cnVlO1xuICAgIGNvbnRleHQuZXJyb3IgPSBlcnI7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIE9ic2VydmFibGVOb3RpZmljYXRpb24gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGlzU3Vic2NyaXB0aW9uLCBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyByZXBvcnRVbmhhbmRsZWRFcnJvciB9IGZyb20gJy4vdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvcic7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlsL25vb3AnO1xuaW1wb3J0IHsgbmV4dE5vdGlmaWNhdGlvbiwgZXJyb3JOb3RpZmljYXRpb24sIENPTVBMRVRFX05PVElGSUNBVElPTiB9IGZyb20gJy4vTm90aWZpY2F0aW9uRmFjdG9yaWVzJztcbmltcG9ydCB7IHRpbWVvdXRQcm92aWRlciB9IGZyb20gJy4vc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlcic7XG5pbXBvcnQgeyBjYXB0dXJlRXJyb3IgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRzIHRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGludGVyZmFjZSBhbmQgZXh0ZW5kcyB0aGVcbiAqIHtAbGluayBTdWJzY3JpcHRpb259IGNsYXNzLiBXaGlsZSB0aGUge0BsaW5rIE9ic2VydmVyfSBpcyB0aGUgcHVibGljIEFQSSBmb3JcbiAqIGNvbnN1bWluZyB0aGUgdmFsdWVzIG9mIGFuIHtAbGluayBPYnNlcnZhYmxlfSwgYWxsIE9ic2VydmVycyBnZXQgY29udmVydGVkIHRvXG4gKiBhIFN1YnNjcmliZXIsIGluIG9yZGVyIHRvIHByb3ZpZGUgU3Vic2NyaXB0aW9uLWxpa2UgY2FwYWJpbGl0aWVzIHN1Y2ggYXNcbiAqIGB1bnN1YnNjcmliZWAuIFN1YnNjcmliZXIgaXMgYSBjb21tb24gdHlwZSBpbiBSeEpTLCBhbmQgY3J1Y2lhbCBmb3JcbiAqIGltcGxlbWVudGluZyBvcGVyYXRvcnMsIGJ1dCBpdCBpcyByYXJlbHkgdXNlZCBhcyBhIHB1YmxpYyBBUEkuXG4gKlxuICogQGNsYXNzIFN1YnNjcmliZXI8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpcHRpb24gaW1wbGVtZW50cyBPYnNlcnZlcjxUPiB7XG4gIC8qKlxuICAgKiBBIHN0YXRpYyBmYWN0b3J5IGZvciBhIFN1YnNjcmliZXIsIGdpdmVuIGEgKHBvdGVudGlhbGx5IHBhcnRpYWwpIGRlZmluaXRpb25cbiAgICogb2YgYW4gT2JzZXJ2ZXIuXG4gICAqIEBwYXJhbSBuZXh0IFRoZSBgbmV4dGAgY2FsbGJhY2sgb2YgYW4gT2JzZXJ2ZXIuXG4gICAqIEBwYXJhbSBlcnJvciBUaGUgYGVycm9yYCBjYWxsYmFjayBvZiBhblxuICAgKiBPYnNlcnZlci5cbiAgICogQHBhcmFtIGNvbXBsZXRlIFRoZSBgY29tcGxldGVgIGNhbGxiYWNrIG9mIGFuXG4gICAqIE9ic2VydmVyLlxuICAgKiBAcmV0dXJuIEEgU3Vic2NyaWJlciB3cmFwcGluZyB0aGUgKHBhcnRpYWxseSBkZWZpbmVkKVxuICAgKiBPYnNlcnZlciByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gYXJndW1lbnRzLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKiBAZGVwcmVjYXRlZCBEbyBub3QgdXNlLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIFRoZXJlIGlzIG5vIHJlcGxhY2VtZW50IGZvciB0aGlzXG4gICAqIG1ldGhvZCwgYW5kIHRoZXJlIGlzIG5vIHJlYXNvbiB0byBiZSBjcmVhdGluZyBpbnN0YW5jZXMgb2YgYFN1YnNjcmliZXJgIGRpcmVjdGx5LlxuICAgKiBJZiB5b3UgaGF2ZSBhIHNwZWNpZmljIHVzZSBjYXNlLCBwbGVhc2UgZmlsZSBhbiBpc3N1ZS5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGU8VD4obmV4dD86ICh4PzogVCkgPT4gdm9pZCwgZXJyb3I/OiAoZT86IGFueSkgPT4gdm9pZCwgY29tcGxldGU/OiAoKSA9PiB2b2lkKTogU3Vic2NyaWJlcjxUPiB7XG4gICAgcmV0dXJuIG5ldyBTYWZlU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBwcm90ZWN0ZWQgaXNTdG9wcGVkOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgcHJvdGVjdGVkIGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPGFueT4gfCBPYnNlcnZlcjxhbnk+OyAvLyB0aGlzIGBhbnlgIGlzIHRoZSBlc2NhcGUgaGF0Y2ggdG8gZXJhc2UgZXh0cmEgdHlwZSBwYXJhbSAoZS5nLiBSKVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICogVGhlcmUgaXMgbm8gcmVhc29uIHRvIGRpcmVjdGx5IGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiBTdWJzY3JpYmVyLiBUaGlzIHR5cGUgaXMgZXhwb3J0ZWQgZm9yIHR5cGluZ3MgcmVhc29ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uPzogU3Vic2NyaWJlcjxhbnk+IHwgT2JzZXJ2ZXI8YW55Pikge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKGRlc3RpbmF0aW9uKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAvLyBBdXRvbWF0aWNhbGx5IGNoYWluIHN1YnNjcmlwdGlvbnMgdG9nZXRoZXIgaGVyZS5cbiAgICAgIC8vIGlmIGRlc3RpbmF0aW9uIGlzIGEgU3Vic2NyaXB0aW9uLCB0aGVuIGl0IGlzIGEgU3Vic2NyaWJlci5cbiAgICAgIGlmIChpc1N1YnNjcmlwdGlvbihkZXN0aW5hdGlvbikpIHtcbiAgICAgICAgZGVzdGluYXRpb24uYWRkKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gRU1QVFlfT0JTRVJWRVI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGNhbGxiYWNrIHRvIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBvZiB0eXBlIGBuZXh0YCBmcm9tXG4gICAqIHRoZSBPYnNlcnZhYmxlLCB3aXRoIGEgdmFsdWUuIFRoZSBPYnNlcnZhYmxlIG1heSBjYWxsIHRoaXMgbWV0aG9kIDAgb3IgbW9yZVxuICAgKiB0aW1lcy5cbiAgICogQHBhcmFtIHtUfSBbdmFsdWVdIFRoZSBgbmV4dGAgdmFsdWUuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBuZXh0KHZhbHVlPzogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihuZXh0Tm90aWZpY2F0aW9uKHZhbHVlKSwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25leHQodmFsdWUhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBub3RpZmljYXRpb25zIG9mIHR5cGUgYGVycm9yYCBmcm9tXG4gICAqIHRoZSBPYnNlcnZhYmxlLCB3aXRoIGFuIGF0dGFjaGVkIGBFcnJvcmAuIE5vdGlmaWVzIHRoZSBPYnNlcnZlciB0aGF0XG4gICAqIHRoZSBPYnNlcnZhYmxlIGhhcyBleHBlcmllbmNlZCBhbiBlcnJvciBjb25kaXRpb24uXG4gICAqIEBwYXJhbSB7YW55fSBbZXJyXSBUaGUgYGVycm9yYCBleGNlcHRpb24uXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBlcnJvcihlcnI/OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24oZXJyb3JOb3RpZmljYXRpb24oZXJyKSwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGNhbGxiYWNrIHRvIHJlY2VpdmUgYSB2YWx1ZWxlc3Mgbm90aWZpY2F0aW9uIG9mIHR5cGVcbiAgICogYGNvbXBsZXRlYCBmcm9tIHRoZSBPYnNlcnZhYmxlLiBOb3RpZmllcyB0aGUgT2JzZXJ2ZXIgdGhhdCB0aGUgT2JzZXJ2YWJsZVxuICAgKiBoYXMgZmluaXNoZWQgc2VuZGluZyBwdXNoLWJhc2VkIG5vdGlmaWNhdGlvbnMuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24oQ09NUExFVEVfTk9USUZJQ0FUSU9OLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICB1bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICBzdXBlci51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG51bGwhO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2Vycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgYmluZCBpcyBjYXB0dXJlZCBoZXJlIGJlY2F1c2Ugd2Ugd2FudCB0byBiZSBhYmxlIHRvIGhhdmVcbiAqIGNvbXBhdGliaWxpdHkgd2l0aCBtb25vaWQgbGlicmFyaWVzIHRoYXQgdGVuZCB0byB1c2UgYSBtZXRob2QgbmFtZWRcbiAqIGBiaW5kYC4gSW4gcGFydGljdWxhciwgYSBsaWJyYXJ5IGNhbGxlZCBNb25pbyByZXF1aXJlcyB0aGlzLlxuICovXG5jb25zdCBfYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuXG5mdW5jdGlvbiBiaW5kPEZuIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KGZuOiBGbiwgdGhpc0FyZzogYW55KTogRm4ge1xuICByZXR1cm4gX2JpbmQuY2FsbChmbiwgdGhpc0FyZyk7XG59XG5cbi8qKlxuICogSW50ZXJuYWwgb3B0aW1pemF0aW9uIG9ubHksIERPIE5PVCBFWFBPU0UuXG4gKiBAaW50ZXJuYWxcbiAqL1xuY2xhc3MgQ29uc3VtZXJPYnNlcnZlcjxUPiBpbXBsZW1lbnRzIE9ic2VydmVyPFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJ0aWFsT2JzZXJ2ZXI6IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+KSB7fVxuXG4gIG5leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBhcnRpYWxPYnNlcnZlciB9ID0gdGhpcztcbiAgICBpZiAocGFydGlhbE9ic2VydmVyLm5leHQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnRpYWxPYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFydGlhbE9ic2VydmVyIH0gPSB0aGlzO1xuICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnRpYWxPYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBsZXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFydGlhbE9ic2VydmVyIH0gPSB0aGlzO1xuICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIuY29tcGxldGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FmZVN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgb2JzZXJ2ZXJPck5leHQ/OiBQYXJ0aWFsPE9ic2VydmVyPFQ+PiB8ICgodmFsdWU6IFQpID0+IHZvaWQpIHwgbnVsbCxcbiAgICBlcnJvcj86ICgoZT86IGFueSkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGNvbXBsZXRlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICApIHtcbiAgICBzdXBlcigpO1xuXG4gICAgbGV0IHBhcnRpYWxPYnNlcnZlcjogUGFydGlhbDxPYnNlcnZlcjxUPj47XG4gICAgaWYgKGlzRnVuY3Rpb24ob2JzZXJ2ZXJPck5leHQpIHx8ICFvYnNlcnZlck9yTmV4dCkge1xuICAgICAgLy8gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24sIG5vdCBhbiBvYnNlcnZlci4gVGhlIG5leHRcbiAgICAgIC8vIHR3byBhcmd1bWVudHMgKmNvdWxkKiBiZSBvYnNlcnZlcnMsIG9yIHRoZXkgY291bGQgYmUgZW1wdHkuXG4gICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgIG5leHQ6IChvYnNlcnZlck9yTmV4dCA/PyB1bmRlZmluZWQpIGFzICgoKHZhbHVlOiBUKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCksXG4gICAgICAgIGVycm9yOiBlcnJvciA/PyB1bmRlZmluZWQsXG4gICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSA/PyB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBwYXJ0aWFsIG9ic2VydmVyLlxuICAgICAgbGV0IGNvbnRleHQ6IGFueTtcbiAgICAgIGlmICh0aGlzICYmIGNvbmZpZy51c2VEZXByZWNhdGVkTmV4dENvbnRleHQpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBhIGRlcHJlY2F0ZWQgcGF0aCB0aGF0IG1hZGUgYHRoaXMudW5zdWJzY3JpYmUoKWAgYXZhaWxhYmxlIGluXG4gICAgICAgIC8vIG5leHQgaGFuZGxlciBmdW5jdGlvbnMgcGFzc2VkIHRvIHN1YnNjcmliZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWhpbmQgYSBmbGFnXG4gICAgICAgIC8vIG5vdywgYXMgaXQgaXMgKnZlcnkqIHNsb3cuXG4gICAgICAgIGNvbnRleHQgPSBPYmplY3QuY3JlYXRlKG9ic2VydmVyT3JOZXh0KTtcbiAgICAgICAgY29udGV4dC51bnN1YnNjcmliZSA9ICgpID0+IHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyID0ge1xuICAgICAgICAgIG5leHQ6IG9ic2VydmVyT3JOZXh0Lm5leHQgJiYgYmluZChvYnNlcnZlck9yTmV4dC5uZXh0LCBjb250ZXh0KSxcbiAgICAgICAgICBlcnJvcjogb2JzZXJ2ZXJPck5leHQuZXJyb3IgJiYgYmluZChvYnNlcnZlck9yTmV4dC5lcnJvciwgY29udGV4dCksXG4gICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlICYmIGJpbmQob2JzZXJ2ZXJPck5leHQuY29tcGxldGUsIGNvbnRleHQpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGhlIFwibm9ybWFsXCIgcGF0aC4gSnVzdCB1c2UgdGhlIHBhcnRpYWwgb2JzZXJ2ZXIgZGlyZWN0bHkuXG4gICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdyYXAgdGhlIHBhcnRpYWwgb2JzZXJ2ZXIgdG8gZW5zdXJlIGl0J3MgYSBmdWxsIG9ic2VydmVyLCBhbmRcbiAgICAvLyBtYWtlIHN1cmUgcHJvcGVyIGVycm9yIGhhbmRsaW5nIGlzIGFjY291bnRlZCBmb3IuXG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBDb25zdW1lck9ic2VydmVyKHBhcnRpYWxPYnNlcnZlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3I6IGFueSkge1xuICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICBjYXB0dXJlRXJyb3IoZXJyb3IpO1xuICB9IGVsc2Uge1xuICAgIC8vIElkZWFsIHBhdGgsIHdlIHJlcG9ydCB0aGlzIGFzIGFuIHVuaGFuZGxlZCBlcnJvcixcbiAgICAvLyB3aGljaCBpcyB0aHJvd24gb24gYSBuZXcgY2FsbCBzdGFjay5cbiAgICByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlcnJvciBoYW5kbGVyIHVzZWQgd2hlbiBubyBlcnJvciBoYW5kbGVyIHdhcyBzdXBwbGllZFxuICogdG8gdGhlIFNhZmVTdWJzY3JpYmVyIC0tIG1lYW5pbmcgbm8gZXJyb3IgaGFuZGxlciB3YXMgc3VwcGxpZWRcbiAqIGRvIHRoZSBgc3Vic2NyaWJlYCBjYWxsIG9uIG91ciBvYnNlcnZhYmxlLlxuICogQHBhcmFtIGVyciBUaGUgZXJyb3IgdG8gaGFuZGxlXG4gKi9cbmZ1bmN0aW9uIGRlZmF1bHRFcnJvckhhbmRsZXIoZXJyOiBhbnkpIHtcbiAgdGhyb3cgZXJyO1xufVxuXG4vKipcbiAqIEEgaGFuZGxlciBmb3Igbm90aWZpY2F0aW9ucyB0aGF0IGNhbm5vdCBiZSBzZW50IHRvIGEgc3RvcHBlZCBzdWJzY3JpYmVyLlxuICogQHBhcmFtIG5vdGlmaWNhdGlvbiBUaGUgbm90aWZpY2F0aW9uIGJlaW5nIHNlbnRcbiAqIEBwYXJhbSBzdWJzY3JpYmVyIFRoZSBzdG9wcGVkIHN1YnNjcmliZXJcbiAqL1xuZnVuY3Rpb24gaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE9ic2VydmFibGVOb3RpZmljYXRpb248YW55Piwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSB7XG4gIGNvbnN0IHsgb25TdG9wcGVkTm90aWZpY2F0aW9uIH0gPSBjb25maWc7XG4gIG9uU3RvcHBlZE5vdGlmaWNhdGlvbiAmJiB0aW1lb3V0UHJvdmlkZXIuc2V0VGltZW91dCgoKSA9PiBvblN0b3BwZWROb3RpZmljYXRpb24obm90aWZpY2F0aW9uLCBzdWJzY3JpYmVyKSk7XG59XG5cbi8qKlxuICogVGhlIG9ic2VydmVyIHVzZWQgYXMgYSBzdHViIGZvciBzdWJzY3JpcHRpb25zIHdoZXJlIHRoZSB1c2VyIGRpZCBub3RcbiAqIHBhc3MgYW55IGFyZ3VtZW50cyB0byBgc3Vic2NyaWJlYC4gQ29tZXMgd2l0aCB0aGUgZGVmYXVsdCBlcnJvciBoYW5kbGluZ1xuICogYmVoYXZpb3IuXG4gKi9cbmV4cG9ydCBjb25zdCBFTVBUWV9PQlNFUlZFUjogUmVhZG9ubHk8T2JzZXJ2ZXI8YW55Pj4gJiB7IGNsb3NlZDogdHJ1ZSB9ID0ge1xuICBjbG9zZWQ6IHRydWUsXG4gIG5leHQ6IG5vb3AsXG4gIGVycm9yOiBkZWZhdWx0RXJyb3JIYW5kbGVyLFxuICBjb21wbGV0ZTogbm9vcCxcbn07XG4iLCAiLyoqXG4gKiBTeW1ib2wub2JzZXJ2YWJsZSBvciBhIHN0cmluZyBcIkBAb2JzZXJ2YWJsZVwiLiBVc2VkIGZvciBpbnRlcm9wXG4gKlxuICogQGRlcHJlY2F0ZWQgV2Ugd2lsbCBubyBsb25nZXIgYmUgZXhwb3J0aW5nIHRoaXMgc3ltYm9sIGluIHVwY29taW5nIHZlcnNpb25zIG9mIFJ4SlMuXG4gKiBJbnN0ZWFkIHBvbHlmaWxsIGFuZCB1c2UgU3ltYm9sLm9ic2VydmFibGUgZGlyZWN0bHkgKm9yKiB1c2UgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvc3ltYm9sLW9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGNvbnN0IG9ic2VydmFibGU6IHN0cmluZyB8IHN5bWJvbCA9ICgoKSA9PiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSkgfHwgJ0BAb2JzZXJ2YWJsZScpKCk7XG4iLCAiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIG9uZSBwYXJhbWV0ZXIgYW5kIGp1c3QgcmV0dXJucyBpdC4gU2ltcGx5IHB1dCxcbiAqIHRoaXMgaXMgbGlrZSBgPFQ+KHg6IFQpOiBUID0+IHhgLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogVGhpcyBpcyB1c2VmdWwgaW4gc29tZSBjYXNlcyB3aGVuIHVzaW5nIHRoaW5ncyBsaWtlIGBtZXJnZU1hcGBcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UsIG1hcCwgcmFuZ2UsIG1lcmdlTWFwLCBpZGVudGl0eSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHNvdXJjZSQgPSBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoNSkpO1xuICpcbiAqIGNvbnN0IHJlc3VsdCQgPSBzb3VyY2UkLnBpcGUoXG4gKiAgIG1hcChpID0+IHJhbmdlKGkpKSxcbiAqICAgbWVyZ2VNYXAoaWRlbnRpdHkpIC8vIHNhbWUgYXMgbWVyZ2VNYXAoeCA9PiB4KVxuICogKTtcbiAqXG4gKiByZXN1bHQkLnN1YnNjcmliZSh7XG4gKiAgIG5leHQ6IGNvbnNvbGUubG9nXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIE9yIHdoZW4geW91IHdhbnQgdG8gc2VsZWN0aXZlbHkgYXBwbHkgYW4gb3BlcmF0b3JcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UsIGlkZW50aXR5IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgc2hvdWxkTGltaXQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICpcbiAqIGNvbnN0IHNvdXJjZSQgPSBpbnRlcnZhbCgxMDAwKTtcbiAqXG4gKiBjb25zdCByZXN1bHQkID0gc291cmNlJC5waXBlKHNob3VsZExpbWl0KCkgPyB0YWtlKDUpIDogaWRlbnRpdHkpO1xuICpcbiAqIHJlc3VsdCQuc3Vic2NyaWJlKHtcbiAqICAgbmV4dDogY29uc29sZS5sb2dcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHggQW55IHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvblxuICogQHJldHVybnMgVGhlIHZhbHVlIHBhc3NlZCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyIHRvIHRoaXMgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5PFQ+KHg6IFQpOiBUIHtcbiAgcmV0dXJuIHg7XG59XG4iLCAiaW1wb3J0IHsgaWRlbnRpdHkgfSBmcm9tICcuL2lkZW50aXR5JztcbmltcG9ydCB7IFVuYXJ5RnVuY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwaXBlKCk6IHR5cGVvZiBpZGVudGl0eTtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEE+KGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPik6IFVuYXJ5RnVuY3Rpb248VCwgQT47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCPihmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPik6IFVuYXJ5RnVuY3Rpb248VCwgQj47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDPihmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPiwgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+KTogVW5hcnlGdW5jdGlvbjxULCBDPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQ+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD5cbik6IFVuYXJ5RnVuY3Rpb248VCwgRD47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT5cbik6IFVuYXJ5RnVuY3Rpb248VCwgRT47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPlxuKTogVW5hcnlGdW5jdGlvbjxULCBGPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEc+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz5cbik6IFVuYXJ5RnVuY3Rpb248VCwgRz47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPixcbiAgZm43OiBVbmFyeUZ1bmN0aW9uPEYsIEc+LFxuICBmbjg6IFVuYXJ5RnVuY3Rpb248RywgSD5cbik6IFVuYXJ5RnVuY3Rpb248VCwgSD47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPixcbiAgZm43OiBVbmFyeUZ1bmN0aW9uPEYsIEc+LFxuICBmbjg6IFVuYXJ5RnVuY3Rpb248RywgSD4sXG4gIGZuOTogVW5hcnlGdW5jdGlvbjxILCBJPlxuKTogVW5hcnlGdW5jdGlvbjxULCBJPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz4sXG4gIGZuODogVW5hcnlGdW5jdGlvbjxHLCBIPixcbiAgZm45OiBVbmFyeUZ1bmN0aW9uPEgsIEk+LFxuICAuLi5mbnM6IFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+W11cbik6IFVuYXJ5RnVuY3Rpb248VCwgdW5rbm93bj47XG5cbi8qKlxuICogcGlwZSgpIGNhbiBiZSBjYWxsZWQgb24gb25lIG9yIG1vcmUgZnVuY3Rpb25zLCBlYWNoIG9mIHdoaWNoIGNhbiB0YWtlIG9uZSBhcmd1bWVudCAoXCJVbmFyeUZ1bmN0aW9uXCIpXG4gKiBhbmQgdXNlcyBpdCB0byByZXR1cm4gYSB2YWx1ZS5cbiAqIEl0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIG9uZSBhcmd1bWVudCwgcGFzc2VzIGl0IHRvIHRoZSBmaXJzdCBVbmFyeUZ1bmN0aW9uLCBhbmQgdGhlblxuICogcGFzc2VzIHRoZSByZXN1bHQgdG8gdGhlIG5leHQgb25lLCBwYXNzZXMgdGhhdCByZXN1bHQgdG8gdGhlIG5leHQgb25lLCBhbmQgc28gb24uICBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoLi4uZm5zOiBBcnJheTxVbmFyeUZ1bmN0aW9uPGFueSwgYW55Pj4pOiBVbmFyeUZ1bmN0aW9uPGFueSwgYW55PiB7XG4gIHJldHVybiBwaXBlRnJvbUFycmF5KGZucyk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBwaXBlRnJvbUFycmF5PFQsIFI+KGZuczogQXJyYXk8VW5hcnlGdW5jdGlvbjxULCBSPj4pOiBVbmFyeUZ1bmN0aW9uPFQsIFI+IHtcbiAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gaWRlbnRpdHkgYXMgVW5hcnlGdW5jdGlvbjxhbnksIGFueT47XG4gIH1cblxuICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmbnNbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQ6IFQpOiBSIHtcbiAgICByZXR1cm4gZm5zLnJlZHVjZSgocHJldjogYW55LCBmbjogVW5hcnlGdW5jdGlvbjxULCBSPikgPT4gZm4ocHJldiksIGlucHV0IGFzIGFueSk7XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3IgfSBmcm9tICcuL09wZXJhdG9yJztcbmltcG9ydCB7IFNhZmVTdWJzY3JpYmVyLCBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IGlzU3Vic2NyaXB0aW9uLCBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBUZWFyZG93bkxvZ2ljLCBPcGVyYXRvckZ1bmN0aW9uLCBTdWJzY3JpYmFibGUsIE9ic2VydmVyIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBwaXBlRnJvbUFycmF5IH0gZnJvbSAnLi91dGlsL3BpcGUnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGVycm9yQ29udGV4dCB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xuXG4vKipcbiAqIEEgcmVwcmVzZW50YXRpb24gb2YgYW55IHNldCBvZiB2YWx1ZXMgb3ZlciBhbnkgYW1vdW50IG9mIHRpbWUuIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgYnVpbGRpbmcgYmxvY2tcbiAqIG9mIFJ4SlMuXG4gKlxuICogQGNsYXNzIE9ic2VydmFibGU8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIE9ic2VydmFibGU8VD4gaW1wbGVtZW50cyBTdWJzY3JpYmFibGU8VD4ge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gICAqL1xuICBzb3VyY2U6IE9ic2VydmFibGU8YW55PiB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gICAqL1xuICBvcGVyYXRvcjogT3BlcmF0b3I8YW55LCBUPiB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YnNjcmliZSB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgT2JzZXJ2YWJsZSBpc1xuICAgKiBpbml0aWFsbHkgc3Vic2NyaWJlZCB0by4gVGhpcyBmdW5jdGlvbiBpcyBnaXZlbiBhIFN1YnNjcmliZXIsIHRvIHdoaWNoIG5ldyB2YWx1ZXNcbiAgICogY2FuIGJlIGBuZXh0YGVkLCBvciBhbiBgZXJyb3JgIG1ldGhvZCBjYW4gYmUgY2FsbGVkIHRvIHJhaXNlIGFuIGVycm9yLCBvclxuICAgKiBgY29tcGxldGVgIGNhbiBiZSBjYWxsZWQgdG8gbm90aWZ5IG9mIGEgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3Vic2NyaWJlPzogKHRoaXM6IE9ic2VydmFibGU8VD4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IFRlYXJkb3duTG9naWMpIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgfVxuICB9XG5cbiAgLy8gSEFDSzogU2luY2UgVHlwZVNjcmlwdCBpbmhlcml0cyBzdGF0aWMgcHJvcGVydGllcyB0b28sIHdlIGhhdmUgdG9cbiAgLy8gZmlnaHQgYWdhaW5zdCBUeXBlU2NyaXB0IGhlcmUgc28gU3ViamVjdCBjYW4gaGF2ZSBhIGRpZmZlcmVudCBzdGF0aWMgY3JlYXRlIHNpZ25hdHVyZVxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlIGJ5IGNhbGxpbmcgdGhlIE9ic2VydmFibGUgY29uc3RydWN0b3JcbiAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICogQG1ldGhvZCBjcmVhdGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3Vic2NyaWJlPyB0aGUgc3Vic2NyaWJlciBmdW5jdGlvbiB0byBiZSBwYXNzZWQgdG8gdGhlIE9ic2VydmFibGUgY29uc3RydWN0b3JcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYSBuZXcgb2JzZXJ2YWJsZVxuICAgKiBAbm9jb2xsYXBzZVxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYG5ldyBPYnNlcnZhYmxlKClgIGluc3RlYWQuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGU6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55ID0gPFQ+KHN1YnNjcmliZT86IChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiBUZWFyZG93bkxvZ2ljKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KHN1YnNjcmliZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgT2JzZXJ2YWJsZSwgd2l0aCB0aGlzIE9ic2VydmFibGUgaW5zdGFuY2UgYXMgdGhlIHNvdXJjZSwgYW5kIHRoZSBwYXNzZWRcbiAgICogb3BlcmF0b3IgZGVmaW5lZCBhcyB0aGUgbmV3IG9ic2VydmFibGUncyBvcGVyYXRvci5cbiAgICogQG1ldGhvZCBsaWZ0XG4gICAqIEBwYXJhbSBvcGVyYXRvciB0aGUgb3BlcmF0b3IgZGVmaW5pbmcgdGhlIG9wZXJhdGlvbiB0byB0YWtlIG9uIHRoZSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm4gYSBuZXcgb2JzZXJ2YWJsZSB3aXRoIHRoZSBPcGVyYXRvciBhcHBsaWVkXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LlxuICAgKiBJZiB5b3UgaGF2ZSBpbXBsZW1lbnRlZCBhbiBvcGVyYXRvciB1c2luZyBgbGlmdGAsIGl0IGlzIHJlY29tbWVuZGVkIHRoYXQgeW91IGNyZWF0ZSBhblxuICAgKiBvcGVyYXRvciBieSBzaW1wbHkgcmV0dXJuaW5nIGBuZXcgT2JzZXJ2YWJsZSgpYCBkaXJlY3RseS4gU2VlIFwiQ3JlYXRpbmcgbmV3IG9wZXJhdG9ycyBmcm9tXG4gICAqIHNjcmF0Y2hcIiBzZWN0aW9uIGhlcmU6IGh0dHBzOi8vcnhqcy5kZXYvZ3VpZGUvb3BlcmF0b3JzXG4gICAqL1xuICBsaWZ0PFI+KG9wZXJhdG9yPzogT3BlcmF0b3I8VCwgUj4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8Uj4oKTtcbiAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG5cbiAgc3Vic2NyaWJlKG9ic2VydmVyT3JOZXh0PzogUGFydGlhbDxPYnNlcnZlcjxUPj4gfCAoKHZhbHVlOiBUKSA9PiB2b2lkKSk6IFN1YnNjcmlwdGlvbjtcbiAgLyoqIEBkZXByZWNhdGVkIEluc3RlYWQgb2YgcGFzc2luZyBzZXBhcmF0ZSBjYWxsYmFjayBhcmd1bWVudHMsIHVzZSBhbiBvYnNlcnZlciBhcmd1bWVudC4gU2lnbmF0dXJlcyB0YWtpbmcgc2VwYXJhdGUgY2FsbGJhY2sgYXJndW1lbnRzIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc3Vic2NyaWJlLWFyZ3VtZW50cyAqL1xuICBzdWJzY3JpYmUobmV4dD86ICgodmFsdWU6IFQpID0+IHZvaWQpIHwgbnVsbCwgZXJyb3I/OiAoKGVycm9yOiBhbnkpID0+IHZvaWQpIHwgbnVsbCwgY29tcGxldGU/OiAoKCkgPT4gdm9pZCkgfCBudWxsKTogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogSW52b2tlcyBhbiBleGVjdXRpb24gb2YgYW4gT2JzZXJ2YWJsZSBhbmQgcmVnaXN0ZXJzIE9ic2VydmVyIGhhbmRsZXJzIGZvciBub3RpZmljYXRpb25zIGl0IHdpbGwgZW1pdC5cbiAgICpcbiAgICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPlVzZSBpdCB3aGVuIHlvdSBoYXZlIGFsbCB0aGVzZSBPYnNlcnZhYmxlcywgYnV0IHN0aWxsIG5vdGhpbmcgaXMgaGFwcGVuaW5nLjwvc3Bhbj5cbiAgICpcbiAgICogYHN1YnNjcmliZWAgaXMgbm90IGEgcmVndWxhciBvcGVyYXRvciwgYnV0IGEgbWV0aG9kIHRoYXQgY2FsbHMgT2JzZXJ2YWJsZSdzIGludGVybmFsIGBzdWJzY3JpYmVgIGZ1bmN0aW9uLiBJdFxuICAgKiBtaWdodCBiZSBmb3IgZXhhbXBsZSBhIGZ1bmN0aW9uIHRoYXQgeW91IHBhc3NlZCB0byBPYnNlcnZhYmxlJ3MgY29uc3RydWN0b3IsIGJ1dCBtb3N0IG9mIHRoZSB0aW1lIGl0IGlzXG4gICAqIGEgbGlicmFyeSBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggZGVmaW5lcyB3aGF0IHdpbGwgYmUgZW1pdHRlZCBieSBhbiBPYnNlcnZhYmxlLCBhbmQgd2hlbiBpdCBiZSB3aWxsIGVtaXR0ZWQuIFRoaXMgbWVhbnNcbiAgICogdGhhdCBjYWxsaW5nIGBzdWJzY3JpYmVgIGlzIGFjdHVhbGx5IHRoZSBtb21lbnQgd2hlbiBPYnNlcnZhYmxlIHN0YXJ0cyBpdHMgd29yaywgbm90IHdoZW4gaXQgaXMgY3JlYXRlZCwgYXMgaXQgaXMgb2Z0ZW5cbiAgICogdGhlIHRob3VnaHQuXG4gICAqXG4gICAqIEFwYXJ0IGZyb20gc3RhcnRpbmcgdGhlIGV4ZWN1dGlvbiBvZiBhbiBPYnNlcnZhYmxlLCB0aGlzIG1ldGhvZCBhbGxvd3MgeW91IHRvIGxpc3RlbiBmb3IgdmFsdWVzXG4gICAqIHRoYXQgYW4gT2JzZXJ2YWJsZSBlbWl0cywgYXMgd2VsbCBhcyBmb3Igd2hlbiBpdCBjb21wbGV0ZXMgb3IgZXJyb3JzLiBZb3UgY2FuIGFjaGlldmUgdGhpcyBpbiB0d29cbiAgICogb2YgdGhlIGZvbGxvd2luZyB3YXlzLlxuICAgKlxuICAgKiBUaGUgZmlyc3Qgd2F5IGlzIGNyZWF0aW5nIGFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMge0BsaW5rIE9ic2VydmVyfSBpbnRlcmZhY2UuIEl0IHNob3VsZCBoYXZlIG1ldGhvZHNcbiAgICogZGVmaW5lZCBieSB0aGF0IGludGVyZmFjZSwgYnV0IG5vdGUgdGhhdCBpdCBzaG91bGQgYmUganVzdCBhIHJlZ3VsYXIgSmF2YVNjcmlwdCBvYmplY3QsIHdoaWNoIHlvdSBjYW4gY3JlYXRlXG4gICAqIHlvdXJzZWxmIGluIGFueSB3YXkgeW91IHdhbnQgKEVTNiBjbGFzcywgY2xhc3NpYyBmdW5jdGlvbiBjb25zdHJ1Y3Rvciwgb2JqZWN0IGxpdGVyYWwgZXRjLikuIEluIHBhcnRpY3VsYXIsIGRvXG4gICAqIG5vdCBhdHRlbXB0IHRvIHVzZSBhbnkgUnhKUyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIHRvIGNyZWF0ZSBPYnNlcnZlcnMgLSB5b3UgZG9uJ3QgbmVlZCB0aGVtLiBSZW1lbWJlciBhbHNvXG4gICAqIHRoYXQgeW91ciBvYmplY3QgZG9lcyBub3QgaGF2ZSB0byBpbXBsZW1lbnQgYWxsIG1ldGhvZHMuIElmIHlvdSBmaW5kIHlvdXJzZWxmIGNyZWF0aW5nIGEgbWV0aG9kIHRoYXQgZG9lc24ndFxuICAgKiBkbyBhbnl0aGluZywgeW91IGNhbiBzaW1wbHkgb21pdCBpdC4gTm90ZSBob3dldmVyLCBpZiB0aGUgYGVycm9yYCBtZXRob2QgaXMgbm90IHByb3ZpZGVkIGFuZCBhbiBlcnJvciBoYXBwZW5zLFxuICAgKiBpdCB3aWxsIGJlIHRocm93biBhc3luY2hyb25vdXNseS4gRXJyb3JzIHRocm93biBhc3luY2hyb25vdXNseSBjYW5ub3QgYmUgY2F1Z2h0IHVzaW5nIGB0cnlgL2BjYXRjaGAuIEluc3RlYWQsXG4gICAqIHVzZSB0aGUge0BsaW5rIG9uVW5oYW5kbGVkRXJyb3J9IGNvbmZpZ3VyYXRpb24gb3B0aW9uIG9yIHVzZSBhIHJ1bnRpbWUgaGFuZGxlciAobGlrZSBgd2luZG93Lm9uZXJyb3JgIG9yXG4gICAqIGBwcm9jZXNzLm9uKCdlcnJvcilgKSB0byBiZSBub3RpZmllZCBvZiB1bmhhbmRsZWQgZXJyb3JzLiBCZWNhdXNlIG9mIHRoaXMsIGl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgcHJvdmlkZVxuICAgKiBhbiBgZXJyb3JgIG1ldGhvZCB0byBhdm9pZCBtaXNzaW5nIHRocm93biBlcnJvcnMuXG4gICAqXG4gICAqIFRoZSBzZWNvbmQgd2F5IGlzIHRvIGdpdmUgdXAgb24gT2JzZXJ2ZXIgb2JqZWN0IGFsdG9nZXRoZXIgYW5kIHNpbXBseSBwcm92aWRlIGNhbGxiYWNrIGZ1bmN0aW9ucyBpbiBwbGFjZSBvZiBpdHMgbWV0aG9kcy5cbiAgICogVGhpcyBtZWFucyB5b3UgY2FuIHByb3ZpZGUgdGhyZWUgZnVuY3Rpb25zIGFzIGFyZ3VtZW50cyB0byBgc3Vic2NyaWJlYCwgd2hlcmUgdGhlIGZpcnN0IGZ1bmN0aW9uIGlzIGVxdWl2YWxlbnRcbiAgICogb2YgYSBgbmV4dGAgbWV0aG9kLCB0aGUgc2Vjb25kIG9mIGFuIGBlcnJvcmAgbWV0aG9kIGFuZCB0aGUgdGhpcmQgb2YgYSBgY29tcGxldGVgIG1ldGhvZC4gSnVzdCBhcyBpbiBjYXNlIG9mIGFuIE9ic2VydmVyLFxuICAgKiBpZiB5b3UgZG8gbm90IG5lZWQgdG8gbGlzdGVuIGZvciBzb21ldGhpbmcsIHlvdSBjYW4gb21pdCBhIGZ1bmN0aW9uIGJ5IHBhc3NpbmcgYHVuZGVmaW5lZGAgb3IgYG51bGxgLFxuICAgKiBzaW5jZSBgc3Vic2NyaWJlYCByZWNvZ25pemVzIHRoZXNlIGZ1bmN0aW9ucyBieSB3aGVyZSB0aGV5IHdlcmUgcGxhY2VkIGluIGZ1bmN0aW9uIGNhbGwuIFdoZW4gaXQgY29tZXNcbiAgICogdG8gdGhlIGBlcnJvcmAgZnVuY3Rpb24sIGFzIHdpdGggYW4gT2JzZXJ2ZXIsIGlmIG5vdCBwcm92aWRlZCwgZXJyb3JzIGVtaXR0ZWQgYnkgYW4gT2JzZXJ2YWJsZSB3aWxsIGJlIHRocm93biBhc3luY2hyb25vdXNseS5cbiAgICpcbiAgICogWW91IGNhbiwgaG93ZXZlciwgc3Vic2NyaWJlIHdpdGggbm8gcGFyYW1ldGVycyBhdCBhbGwuIFRoaXMgbWF5IGJlIHRoZSBjYXNlIHdoZXJlIHlvdSdyZSBub3QgaW50ZXJlc3RlZCBpbiB0ZXJtaW5hbCBldmVudHNcbiAgICogYW5kIHlvdSBhbHNvIGhhbmRsZWQgZW1pc3Npb25zIGludGVybmFsbHkgYnkgdXNpbmcgb3BlcmF0b3JzIChlLmcuIHVzaW5nIGB0YXBgKS5cbiAgICpcbiAgICogV2hpY2hldmVyIHN0eWxlIG9mIGNhbGxpbmcgYHN1YnNjcmliZWAgeW91IHVzZSwgaW4gYm90aCBjYXNlcyBpdCByZXR1cm5zIGEgU3Vic2NyaXB0aW9uIG9iamVjdC5cbiAgICogVGhpcyBvYmplY3QgYWxsb3dzIHlvdSB0byBjYWxsIGB1bnN1YnNjcmliZWAgb24gaXQsIHdoaWNoIGluIHR1cm4gd2lsbCBzdG9wIHRoZSB3b3JrIHRoYXQgYW4gT2JzZXJ2YWJsZSBkb2VzIGFuZCB3aWxsIGNsZWFuXG4gICAqIHVwIGFsbCByZXNvdXJjZXMgdGhhdCBhbiBPYnNlcnZhYmxlIHVzZWQuIE5vdGUgdGhhdCBjYW5jZWxsaW5nIGEgc3Vic2NyaXB0aW9uIHdpbGwgbm90IGNhbGwgYGNvbXBsZXRlYCBjYWxsYmFja1xuICAgKiBwcm92aWRlZCB0byBgc3Vic2NyaWJlYCBmdW5jdGlvbiwgd2hpY2ggaXMgcmVzZXJ2ZWQgZm9yIGEgcmVndWxhciBjb21wbGV0aW9uIHNpZ25hbCB0aGF0IGNvbWVzIGZyb20gYW4gT2JzZXJ2YWJsZS5cbiAgICpcbiAgICogUmVtZW1iZXIgdGhhdCBjYWxsYmFja3MgcHJvdmlkZWQgdG8gYHN1YnNjcmliZWAgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseS5cbiAgICogSXQgaXMgYW4gT2JzZXJ2YWJsZSBpdHNlbGYgdGhhdCBkZWNpZGVzIHdoZW4gdGhlc2UgZnVuY3Rpb25zIHdpbGwgYmUgY2FsbGVkLiBGb3IgZXhhbXBsZSB7QGxpbmsgb2Z9XG4gICAqIGJ5IGRlZmF1bHQgZW1pdHMgYWxsIGl0cyB2YWx1ZXMgc3luY2hyb25vdXNseS4gQWx3YXlzIGNoZWNrIGRvY3VtZW50YXRpb24gZm9yIGhvdyBnaXZlbiBPYnNlcnZhYmxlXG4gICAqIHdpbGwgYmVoYXZlIHdoZW4gc3Vic2NyaWJlZCBhbmQgaWYgaXRzIGRlZmF1bHQgYmVoYXZpb3IgY2FuIGJlIG1vZGlmaWVkIHdpdGggYSBgc2NoZWR1bGVyYC5cbiAgICpcbiAgICogIyMjIyBFeGFtcGxlc1xuICAgKlxuICAgKiBTdWJzY3JpYmUgd2l0aCBhbiB7QGxpbmsgZ3VpZGUvb2JzZXJ2ZXIgT2JzZXJ2ZXJ9XG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG4gICAqXG4gICAqIGNvbnN0IHN1bU9ic2VydmVyID0ge1xuICAgKiAgIHN1bTogMCxcbiAgICogICBuZXh0KHZhbHVlKSB7XG4gICAqICAgICBjb25zb2xlLmxvZygnQWRkaW5nOiAnICsgdmFsdWUpO1xuICAgKiAgICAgdGhpcy5zdW0gPSB0aGlzLnN1bSArIHZhbHVlO1xuICAgKiAgIH0sXG4gICAqICAgZXJyb3IoKSB7XG4gICAqICAgICAvLyBXZSBhY3R1YWxseSBjb3VsZCBqdXN0IHJlbW92ZSB0aGlzIG1ldGhvZCxcbiAgICogICAgIC8vIHNpbmNlIHdlIGRvIG5vdCByZWFsbHkgY2FyZSBhYm91dCBlcnJvcnMgcmlnaHQgbm93LlxuICAgKiAgIH0sXG4gICAqICAgY29tcGxldGUoKSB7XG4gICAqICAgICBjb25zb2xlLmxvZygnU3VtIGVxdWFsczogJyArIHRoaXMuc3VtKTtcbiAgICogICB9XG4gICAqIH07XG4gICAqXG4gICAqIG9mKDEsIDIsIDMpIC8vIFN5bmNocm9ub3VzbHkgZW1pdHMgMSwgMiwgMyBhbmQgdGhlbiBjb21wbGV0ZXMuXG4gICAqICAgLnN1YnNjcmliZShzdW1PYnNlcnZlcik7XG4gICAqXG4gICAqIC8vIExvZ3M6XG4gICAqIC8vICdBZGRpbmc6IDEnXG4gICAqIC8vICdBZGRpbmc6IDInXG4gICAqIC8vICdBZGRpbmc6IDMnXG4gICAqIC8vICdTdW0gZXF1YWxzOiA2J1xuICAgKiBgYGBcbiAgICpcbiAgICogU3Vic2NyaWJlIHdpdGggZnVuY3Rpb25zICh7QGxpbmsgZGVwcmVjYXRpb25zL3N1YnNjcmliZS1hcmd1bWVudHMgZGVwcmVjYXRlZH0pXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IG9mIH0gZnJvbSAncnhqcydcbiAgICpcbiAgICogbGV0IHN1bSA9IDA7XG4gICAqXG4gICAqIG9mKDEsIDIsIDMpLnN1YnNjcmliZShcbiAgICogICB2YWx1ZSA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZygnQWRkaW5nOiAnICsgdmFsdWUpO1xuICAgKiAgICAgc3VtID0gc3VtICsgdmFsdWU7XG4gICAqICAgfSxcbiAgICogICB1bmRlZmluZWQsXG4gICAqICAgKCkgPT4gY29uc29sZS5sb2coJ1N1bSBlcXVhbHM6ICcgKyBzdW0pXG4gICAqICk7XG4gICAqXG4gICAqIC8vIExvZ3M6XG4gICAqIC8vICdBZGRpbmc6IDEnXG4gICAqIC8vICdBZGRpbmc6IDInXG4gICAqIC8vICdBZGRpbmc6IDMnXG4gICAqIC8vICdTdW0gZXF1YWxzOiA2J1xuICAgKiBgYGBcbiAgICpcbiAgICogQ2FuY2VsIGEgc3Vic2NyaXB0aW9uXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IGludGVydmFsIH0gZnJvbSAncnhqcyc7XG4gICAqXG4gICAqIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGludGVydmFsKDEwMDApLnN1YnNjcmliZSh7XG4gICAqICAgbmV4dChudW0pIHtcbiAgICogICAgIGNvbnNvbGUubG9nKG51bSlcbiAgICogICB9LFxuICAgKiAgIGNvbXBsZXRlKCkge1xuICAgKiAgICAgLy8gV2lsbCBub3QgYmUgY2FsbGVkLCBldmVuIHdoZW4gY2FuY2VsbGluZyBzdWJzY3JpcHRpb24uXG4gICAqICAgICBjb25zb2xlLmxvZygnY29tcGxldGVkIScpO1xuICAgKiAgIH1cbiAgICogfSk7XG4gICAqXG4gICAqIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgKiAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgKiAgIGNvbnNvbGUubG9nKCd1bnN1YnNjcmliZWQhJyk7XG4gICAqIH0sIDI1MDApO1xuICAgKlxuICAgKiAvLyBMb2dzOlxuICAgKiAvLyAwIGFmdGVyIDFzXG4gICAqIC8vIDEgYWZ0ZXIgMnNcbiAgICogLy8gJ3Vuc3Vic2NyaWJlZCEnIGFmdGVyIDIuNXNcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7T2JzZXJ2ZXJ8RnVuY3Rpb259IG9ic2VydmVyT3JOZXh0IChvcHRpb25hbCkgRWl0aGVyIGFuIG9ic2VydmVyIHdpdGggbWV0aG9kcyB0byBiZSBjYWxsZWQsXG4gICAqIG9yIHRoZSBmaXJzdCBvZiB0aHJlZSBwb3NzaWJsZSBoYW5kbGVycywgd2hpY2ggaXMgdGhlIGhhbmRsZXIgZm9yIGVhY2ggdmFsdWUgZW1pdHRlZCBmcm9tIHRoZSBzdWJzY3JpYmVkXG4gICAqIE9ic2VydmFibGUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVycm9yIChvcHRpb25hbCkgQSBoYW5kbGVyIGZvciBhIHRlcm1pbmFsIGV2ZW50IHJlc3VsdGluZyBmcm9tIGFuIGVycm9yLiBJZiBubyBlcnJvciBoYW5kbGVyIGlzIHByb3ZpZGVkLFxuICAgKiB0aGUgZXJyb3Igd2lsbCBiZSB0aHJvd24gYXN5bmNocm9ub3VzbHkgYXMgdW5oYW5kbGVkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wbGV0ZSAob3B0aW9uYWwpIEEgaGFuZGxlciBmb3IgYSB0ZXJtaW5hbCBldmVudCByZXN1bHRpbmcgZnJvbSBzdWNjZXNzZnVsIGNvbXBsZXRpb24uXG4gICAqIEByZXR1cm4ge1N1YnNjcmlwdGlvbn0gYSBzdWJzY3JpcHRpb24gcmVmZXJlbmNlIHRvIHRoZSByZWdpc3RlcmVkIGhhbmRsZXJzXG4gICAqIEBtZXRob2Qgc3Vic2NyaWJlXG4gICAqL1xuICBzdWJzY3JpYmUoXG4gICAgb2JzZXJ2ZXJPck5leHQ/OiBQYXJ0aWFsPE9ic2VydmVyPFQ+PiB8ICgodmFsdWU6IFQpID0+IHZvaWQpIHwgbnVsbCxcbiAgICBlcnJvcj86ICgoZXJyb3I6IGFueSkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGNvbXBsZXRlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICApOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IHN1YnNjcmliZXIgPSBpc1N1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQpID8gb2JzZXJ2ZXJPck5leHQgOiBuZXcgU2FmZVN1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG5cbiAgICBlcnJvckNvbnRleHQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBvcGVyYXRvciwgc291cmNlIH0gPSB0aGlzO1xuICAgICAgc3Vic2NyaWJlci5hZGQoXG4gICAgICAgIG9wZXJhdG9yXG4gICAgICAgICAgPyAvLyBXZSdyZSBkZWFsaW5nIHdpdGggYSBzdWJzY3JpcHRpb24gaW4gdGhlXG4gICAgICAgICAgICAvLyBvcGVyYXRvciBjaGFpbiB0byBvbmUgb2Ygb3VyIGxpZnRlZCBvcGVyYXRvcnMuXG4gICAgICAgICAgICBvcGVyYXRvci5jYWxsKHN1YnNjcmliZXIsIHNvdXJjZSlcbiAgICAgICAgICA6IHNvdXJjZVxuICAgICAgICAgID8gLy8gSWYgYHNvdXJjZWAgaGFzIGEgdmFsdWUsIGJ1dCBgb3BlcmF0b3JgIGRvZXMgbm90LCBzb21ldGhpbmcgdGhhdFxuICAgICAgICAgICAgLy8gaGFkIGludGltYXRlIGtub3dsZWRnZSBvZiBvdXIgQVBJLCBsaWtlIG91ciBgU3ViamVjdGAsIG11c3QgaGF2ZVxuICAgICAgICAgICAgLy8gc2V0IGl0LiBXZSdyZSBnb2luZyB0byBqdXN0IGNhbGwgYF9zdWJzY3JpYmVgIGRpcmVjdGx5LlxuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlKHN1YnNjcmliZXIpXG4gICAgICAgICAgOiAvLyBJbiBhbGwgb3RoZXIgY2FzZXMsIHdlJ3JlIGxpa2VseSB3cmFwcGluZyBhIHVzZXItcHJvdmlkZWQgaW5pdGlhbGl6ZXJcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uLCBzbyB3ZSBuZWVkIHRvIGNhdGNoIGVycm9ycyBhbmQgaGFuZGxlIHRoZW0gYXBwcm9wcmlhdGVseS5cbiAgICAgICAgICAgIHRoaXMuX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3RyeVN1YnNjcmliZShzaW5rOiBTdWJzY3JpYmVyPFQ+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoc2luayk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIHJldHVybiBhbnl0aGluZyBpbiB0aGlzIGNhc2UsXG4gICAgICAvLyBiZWNhdXNlIGl0J3MganVzdCBnb2luZyB0byB0cnkgdG8gYGFkZCgpYCB0byBhIHN1YnNjcmlwdGlvblxuICAgICAgLy8gYWJvdmUuXG4gICAgICBzaW5rLmVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgYXMgYSBOT04tQ0FOQ0VMTEFCTEUgbWVhbnMgb2Ygc3Vic2NyaWJpbmcgdG8gYW4gb2JzZXJ2YWJsZSwgZm9yIHVzZSB3aXRoXG4gICAqIEFQSXMgdGhhdCBleHBlY3QgcHJvbWlzZXMsIGxpa2UgYGFzeW5jL2F3YWl0YC4gWW91IGNhbm5vdCB1bnN1YnNjcmliZSBmcm9tIHRoaXMuXG4gICAqXG4gICAqICoqV0FSTklORyoqOiBPbmx5IHVzZSB0aGlzIHdpdGggb2JzZXJ2YWJsZXMgeW91ICprbm93KiB3aWxsIGNvbXBsZXRlLiBJZiB0aGUgc291cmNlXG4gICAqIG9ic2VydmFibGUgZG9lcyBub3QgY29tcGxldGUsIHlvdSB3aWxsIGVuZCB1cCB3aXRoIGEgcHJvbWlzZSB0aGF0IGlzIGh1bmcgdXAsIGFuZFxuICAgKiBwb3RlbnRpYWxseSBhbGwgb2YgdGhlIHN0YXRlIG9mIGFuIGFzeW5jIGZ1bmN0aW9uIGhhbmdpbmcgb3V0IGluIG1lbW9yeS4gVG8gYXZvaWRcbiAgICogdGhpcyBzaXR1YXRpb24sIGxvb2sgaW50byBhZGRpbmcgc29tZXRoaW5nIGxpa2Uge0BsaW5rIHRpbWVvdXR9LCB7QGxpbmsgdGFrZX0sXG4gICAqIHtAbGluayB0YWtlV2hpbGV9LCBvciB7QGxpbmsgdGFrZVVudGlsfSBhbW9uZ3N0IG90aGVycy5cbiAgICpcbiAgICogIyMjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlIH0gZnJvbSAncnhqcyc7XG4gICAqXG4gICAqIGNvbnN0IHNvdXJjZSQgPSBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoNCkpO1xuICAgKlxuICAgKiBhc3luYyBmdW5jdGlvbiBnZXRUb3RhbCgpIHtcbiAgICogICBsZXQgdG90YWwgPSAwO1xuICAgKlxuICAgKiAgIGF3YWl0IHNvdXJjZSQuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAqICAgICB0b3RhbCArPSB2YWx1ZTtcbiAgICogICAgIGNvbnNvbGUubG9nKCdvYnNlcnZhYmxlIC0+ICcgKyB2YWx1ZSk7XG4gICAqICAgfSk7XG4gICAqXG4gICAqICAgcmV0dXJuIHRvdGFsO1xuICAgKiB9XG4gICAqXG4gICAqIGdldFRvdGFsKCkudGhlbihcbiAgICogICB0b3RhbCA9PiBjb25zb2xlLmxvZygnVG90YWw6ICcgKyB0b3RhbClcbiAgICogKTtcbiAgICpcbiAgICogLy8gRXhwZWN0ZWQ6XG4gICAqIC8vICdvYnNlcnZhYmxlIC0+IDAnXG4gICAqIC8vICdvYnNlcnZhYmxlIC0+IDEnXG4gICAqIC8vICdvYnNlcnZhYmxlIC0+IDInXG4gICAqIC8vICdvYnNlcnZhYmxlIC0+IDMnXG4gICAqIC8vICdUb3RhbDogNidcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBuZXh0IGEgaGFuZGxlciBmb3IgZWFjaCB2YWx1ZSBlbWl0dGVkIGJ5IHRoZSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgZWl0aGVyIHJlc29sdmVzIG9uIG9ic2VydmFibGUgY29tcGxldGlvbiBvclxuICAgKiAgcmVqZWN0cyB3aXRoIHRoZSBoYW5kbGVkIGVycm9yXG4gICAqL1xuICBmb3JFYWNoKG5leHQ6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBuZXh0IGEgaGFuZGxlciBmb3IgZWFjaCB2YWx1ZSBlbWl0dGVkIGJ5IHRoZSBvYnNlcnZhYmxlXG4gICAqIEBwYXJhbSBwcm9taXNlQ3RvciBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHVzZWQgdG8gaW5zdGFudGlhdGUgdGhlIFByb21pc2VcbiAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCBlaXRoZXIgcmVzb2x2ZXMgb24gb2JzZXJ2YWJsZSBjb21wbGV0aW9uIG9yXG4gICAqICByZWplY3RzIHdpdGggdGhlIGhhbmRsZWQgZXJyb3JcbiAgICogQGRlcHJlY2F0ZWQgUGFzc2luZyBhIFByb21pc2UgY29uc3RydWN0b3Igd2lsbCBubyBsb25nZXIgYmUgYXZhaWxhYmxlXG4gICAqIGluIHVwY29taW5nIHZlcnNpb25zIG9mIFJ4SlMuIFRoaXMgaXMgYmVjYXVzZSBpdCBhZGRzIHdlaWdodCB0byB0aGUgbGlicmFyeSwgZm9yIHZlcnlcbiAgICogbGl0dGxlIGJlbmVmaXQuIElmIHlvdSBuZWVkIHRoaXMgZnVuY3Rpb25hbGl0eSwgaXQgaXMgcmVjb21tZW5kZWQgdGhhdCB5b3UgZWl0aGVyXG4gICAqIHBvbHlmaWxsIFByb21pc2UsIG9yIHlvdSBjcmVhdGUgYW4gYWRhcHRlciB0byBjb252ZXJ0IHRoZSByZXR1cm5lZCBuYXRpdmUgcHJvbWlzZVxuICAgKiB0byB3aGF0ZXZlciBwcm9taXNlIGltcGxlbWVudGF0aW9uIHlvdSB3YW50ZWQuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIGZvckVhY2gobmV4dDogKHZhbHVlOiBUKSA9PiB2b2lkLCBwcm9taXNlQ3RvcjogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSk6IFByb21pc2U8dm9pZD47XG5cbiAgZm9yRWFjaChuZXh0OiAodmFsdWU6IFQpID0+IHZvaWQsIHByb21pc2VDdG9yPzogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuXG4gICAgcmV0dXJuIG5ldyBwcm9taXNlQ3Rvcjx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBzdWJzY3JpYmVyID0gbmV3IFNhZmVTdWJzY3JpYmVyPFQ+KHtcbiAgICAgICAgbmV4dDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICBjb21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfSkgYXMgUHJvbWlzZTx2b2lkPjtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlPy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gIH1cblxuICAvKipcbiAgICogQW4gaW50ZXJvcCBwb2ludCBkZWZpbmVkIGJ5IHRoZSBlczctb2JzZXJ2YWJsZSBzcGVjIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLW9ic2VydmFibGVcbiAgICogQG1ldGhvZCBTeW1ib2wub2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSB0aGlzIGluc3RhbmNlIG9mIHRoZSBvYnNlcnZhYmxlXG4gICAqL1xuICBbU3ltYm9sX29ic2VydmFibGVdKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4gIHBpcGUoKTogT2JzZXJ2YWJsZTxUPjtcbiAgcGlwZTxBPihvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4pOiBPYnNlcnZhYmxlPEE+O1xuICBwaXBlPEEsIEI+KG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPiwgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+KTogT2JzZXJ2YWJsZTxCPjtcbiAgcGlwZTxBLCBCLCBDPihvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPiwgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+KTogT2JzZXJ2YWJsZTxDPjtcbiAgcGlwZTxBLCBCLCBDLCBEPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD5cbiAgKTogT2JzZXJ2YWJsZTxEPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+XG4gICk6IE9ic2VydmFibGU8RT47XG4gIHBpcGU8QSwgQiwgQywgRCwgRSwgRj4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPixcbiAgICBvcDY6IE9wZXJhdG9yRnVuY3Rpb248RSwgRj5cbiAgKTogT2JzZXJ2YWJsZTxGPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz5cbiAgKTogT2JzZXJ2YWJsZTxHPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz4sXG4gICAgb3A4OiBPcGVyYXRvckZ1bmN0aW9uPEcsIEg+XG4gICk6IE9ic2VydmFibGU8SD47XG4gIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgST4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPixcbiAgICBvcDY6IE9wZXJhdG9yRnVuY3Rpb248RSwgRj4sXG4gICAgb3A3OiBPcGVyYXRvckZ1bmN0aW9uPEYsIEc+LFxuICAgIG9wODogT3BlcmF0b3JGdW5jdGlvbjxHLCBIPixcbiAgICBvcDk6IE9wZXJhdG9yRnVuY3Rpb248SCwgST5cbiAgKTogT2JzZXJ2YWJsZTxJPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz4sXG4gICAgb3A4OiBPcGVyYXRvckZ1bmN0aW9uPEcsIEg+LFxuICAgIG9wOTogT3BlcmF0b3JGdW5jdGlvbjxILCBJPixcbiAgICAuLi5vcGVyYXRpb25zOiBPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55PltdXG4gICk6IE9ic2VydmFibGU8dW5rbm93bj47XG4gIC8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gc3RpdGNoIHRvZ2V0aGVyIGZ1bmN0aW9uYWwgb3BlcmF0b3JzIGludG8gYSBjaGFpbi5cbiAgICogQG1ldGhvZCBwaXBlXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IHRoZSBPYnNlcnZhYmxlIHJlc3VsdCBvZiBhbGwgb2YgdGhlIG9wZXJhdG9ycyBoYXZpbmdcbiAgICogYmVlbiBjYWxsZWQgaW4gdGhlIG9yZGVyIHRoZXkgd2VyZSBwYXNzZWQgaW4uXG4gICAqXG4gICAqICMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgaW50ZXJ2YWwsIGZpbHRlciwgbWFwLCBzY2FuIH0gZnJvbSAncnhqcyc7XG4gICAqXG4gICAqIGludGVydmFsKDEwMDApXG4gICAqICAgLnBpcGUoXG4gICAqICAgICBmaWx0ZXIoeCA9PiB4ICUgMiA9PT0gMCksXG4gICAqICAgICBtYXAoeCA9PiB4ICsgeCksXG4gICAqICAgICBzY2FuKChhY2MsIHgpID0+IGFjYyArIHgpXG4gICAqICAgKVxuICAgKiAgIC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcGlwZSguLi5vcGVyYXRpb25zOiBPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55PltdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShvcGVyYXRpb25zKSh0aGlzKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuICAvKiogQGRlcHJlY2F0ZWQgUmVwbGFjZWQgd2l0aCB7QGxpbmsgZmlyc3RWYWx1ZUZyb219IGFuZCB7QGxpbmsgbGFzdFZhbHVlRnJvbX0uIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvdG8tcHJvbWlzZSAqL1xuICB0b1Byb21pc2UoKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgLyoqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2UgKi9cbiAgdG9Qcm9taXNlKFByb21pc2VDdG9yOiB0eXBlb2YgUHJvbWlzZSk6IFByb21pc2U8VCB8IHVuZGVmaW5lZD47XG4gIC8qKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHtAbGluayBmaXJzdFZhbHVlRnJvbX0gYW5kIHtAbGluayBsYXN0VmFsdWVGcm9tfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy90by1wcm9taXNlICovXG4gIHRvUHJvbWlzZShQcm9taXNlQ3RvcjogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSk6IFByb21pc2U8VCB8IHVuZGVmaW5lZD47XG4gIC8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGlzIE9ic2VydmFibGUgYW5kIGdldCBhIFByb21pc2UgcmVzb2x2aW5nIG9uXG4gICAqIGBjb21wbGV0ZWAgd2l0aCB0aGUgbGFzdCBlbWlzc2lvbiAoaWYgYW55KS5cbiAgICpcbiAgICogKipXQVJOSU5HKio6IE9ubHkgdXNlIHRoaXMgd2l0aCBvYnNlcnZhYmxlcyB5b3UgKmtub3cqIHdpbGwgY29tcGxldGUuIElmIHRoZSBzb3VyY2VcbiAgICogb2JzZXJ2YWJsZSBkb2VzIG5vdCBjb21wbGV0ZSwgeW91IHdpbGwgZW5kIHVwIHdpdGggYSBwcm9taXNlIHRoYXQgaXMgaHVuZyB1cCwgYW5kXG4gICAqIHBvdGVudGlhbGx5IGFsbCBvZiB0aGUgc3RhdGUgb2YgYW4gYXN5bmMgZnVuY3Rpb24gaGFuZ2luZyBvdXQgaW4gbWVtb3J5LiBUbyBhdm9pZFxuICAgKiB0aGlzIHNpdHVhdGlvbiwgbG9vayBpbnRvIGFkZGluZyBzb21ldGhpbmcgbGlrZSB7QGxpbmsgdGltZW91dH0sIHtAbGluayB0YWtlfSxcbiAgICoge0BsaW5rIHRha2VXaGlsZX0sIG9yIHtAbGluayB0YWtlVW50aWx9IGFtb25nc3Qgb3RoZXJzLlxuICAgKlxuICAgKiBAbWV0aG9kIHRvUHJvbWlzZVxuICAgKiBAcGFyYW0gW3Byb21pc2VDdG9yXSBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHVzZWQgdG8gaW5zdGFudGlhdGVcbiAgICogdGhlIFByb21pc2VcbiAgICogQHJldHVybiBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsYXN0IHZhbHVlIGVtaXQsIG9yXG4gICAqIHJlamVjdHMgb24gYW4gZXJyb3IuIElmIHRoZXJlIHdlcmUgbm8gZW1pc3Npb25zLCBQcm9taXNlXG4gICAqIHJlc29sdmVzIHdpdGggdW5kZWZpbmVkLlxuICAgKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHtAbGluayBmaXJzdFZhbHVlRnJvbX0gYW5kIHtAbGluayBsYXN0VmFsdWVGcm9tfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy90by1wcm9taXNlXG4gICAqL1xuICB0b1Byb21pc2UocHJvbWlzZUN0b3I/OiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XG4gICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG5cbiAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB2YWx1ZTogVCB8IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuc3Vic2NyaWJlKFxuICAgICAgICAoeDogVCkgPT4gKHZhbHVlID0geCksXG4gICAgICAgIChlcnI6IGFueSkgPT4gcmVqZWN0KGVyciksXG4gICAgICAgICgpID0+IHJlc29sdmUodmFsdWUpXG4gICAgICApO1xuICAgIH0pIGFzIFByb21pc2U8VCB8IHVuZGVmaW5lZD47XG4gIH1cbn1cblxuLyoqXG4gKiBEZWNpZGVzIGJldHdlZW4gYSBwYXNzZWQgcHJvbWlzZSBjb25zdHJ1Y3RvciBmcm9tIGNvbnN1bWluZyBjb2RlLFxuICogQSBkZWZhdWx0IGNvbmZpZ3VyZWQgcHJvbWlzZSBjb25zdHJ1Y3RvciwgYW5kIHRoZSBuYXRpdmUgcHJvbWlzZVxuICogY29uc3RydWN0b3IgYW5kIHJldHVybnMgaXQuIElmIG5vdGhpbmcgY2FuIGJlIGZvdW5kLCBpdCB3aWxsIHRocm93XG4gKiBhbiBlcnJvci5cbiAqIEBwYXJhbSBwcm9taXNlQ3RvciBUaGUgb3B0aW9uYWwgcHJvbWlzZSBjb25zdHJ1Y3RvciB0byBwYXNzZWQgYnkgY29uc3VtaW5nIGNvZGVcbiAqL1xuZnVuY3Rpb24gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3I6IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UgfCB1bmRlZmluZWQpIHtcbiAgcmV0dXJuIHByb21pc2VDdG9yID8/IGNvbmZpZy5Qcm9taXNlID8/IFByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGlzT2JzZXJ2ZXI8VD4odmFsdWU6IGFueSk6IHZhbHVlIGlzIE9ic2VydmVyPFQ+IHtcbiAgcmV0dXJuIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUubmV4dCkgJiYgaXNGdW5jdGlvbih2YWx1ZS5lcnJvcikgJiYgaXNGdW5jdGlvbih2YWx1ZS5jb21wbGV0ZSk7XG59XG5cbmZ1bmN0aW9uIGlzU3Vic2NyaWJlcjxUPih2YWx1ZTogYW55KTogdmFsdWUgaXMgU3Vic2NyaWJlcjxUPiB7XG4gIHJldHVybiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB8fCAoaXNPYnNlcnZlcih2YWx1ZSkgJiYgaXNTdWJzY3JpcHRpb24odmFsdWUpKTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbi8qKlxuICogVXNlZCB0byBkZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGFuIE9ic2VydmFibGUgd2l0aCBhIGxpZnQgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNMaWZ0KHNvdXJjZTogYW55KTogc291cmNlIGlzIHsgbGlmdDogSW5zdGFuY2VUeXBlPHR5cGVvZiBPYnNlcnZhYmxlPlsnbGlmdCddIH0ge1xuICByZXR1cm4gaXNGdW5jdGlvbihzb3VyY2U/LmxpZnQpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYE9wZXJhdG9yRnVuY3Rpb25gLiBVc2VkIHRvIGRlZmluZSBvcGVyYXRvcnMgdGhyb3VnaG91dCB0aGUgbGlicmFyeSBpbiBhIGNvbmNpc2Ugd2F5LlxuICogQHBhcmFtIGluaXQgVGhlIGxvZ2ljIHRvIGNvbm5lY3QgdGhlIGxpZnRlZFNvdXJjZSB0byB0aGUgc3Vic2NyaWJlciBhdCB0aGUgbW9tZW50IG9mIHN1YnNjcmlwdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9wZXJhdGU8VCwgUj4oXG4gIGluaXQ6IChsaWZ0ZWRTb3VyY2U6IE9ic2VydmFibGU8VD4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4pID0+ICgoKSA9PiB2b2lkKSB8IHZvaWRcbik6IE9wZXJhdG9yRnVuY3Rpb248VCwgUj4ge1xuICByZXR1cm4gKHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xuICAgIGlmIChoYXNMaWZ0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2UubGlmdChmdW5jdGlvbiAodGhpczogU3Vic2NyaWJlcjxSPiwgbGlmdGVkU291cmNlOiBPYnNlcnZhYmxlPFQ+KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGluaXQobGlmdGVkU291cmNlLCB0aGlzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5hYmxlIHRvIGxpZnQgdW5rbm93biBPYnNlcnZhYmxlIHR5cGUnKTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhbiBgT3BlcmF0b3JTdWJzY3JpYmVyYC5cbiAqIEBwYXJhbSBkZXN0aW5hdGlvbiBUaGUgZG93bnN0cmVhbSBzdWJzY3JpYmVyLlxuICogQHBhcmFtIG9uTmV4dCBIYW5kbGVzIG5leHQgdmFsdWVzLCBvbmx5IGNhbGxlZCBpZiB0aGlzIHN1YnNjcmliZXIgaXMgbm90IHN0b3BwZWQgb3IgY2xvc2VkLiBBbnlcbiAqIGVycm9yIHRoYXQgb2NjdXJzIGluIHRoaXMgZnVuY3Rpb24gaXMgY2F1Z2h0IGFuZCBzZW50IHRvIHRoZSBgZXJyb3JgIG1ldGhvZCBvZiB0aGlzIHN1YnNjcmliZXIuXG4gKiBAcGFyYW0gb25FcnJvciBIYW5kbGVzIGVycm9ycyBmcm9tIHRoZSBzdWJzY3JpcHRpb24sIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBpbiB0aGlzIGhhbmRsZXIgYXJlIGNhdWdodFxuICogYW5kIHNlbmQgdG8gdGhlIGBkZXN0aW5hdGlvbmAgZXJyb3IgaGFuZGxlci5cbiAqIEBwYXJhbSBvbkNvbXBsZXRlIEhhbmRsZXMgY29tcGxldGlvbiBub3RpZmljYXRpb24gZnJvbSB0aGUgc3Vic2NyaXB0aW9uLiBBbnkgZXJyb3JzIHRoYXQgb2NjdXIgaW5cbiAqIHRoaXMgaGFuZGxlciBhcmUgc2VudCB0byB0aGUgYGRlc3RpbmF0aW9uYCBlcnJvciBoYW5kbGVyLlxuICogQHBhcmFtIG9uRmluYWxpemUgQWRkaXRpb25hbCB0ZWFyZG93biBsb2dpYyBoZXJlLiBUaGlzIHdpbGwgb25seSBiZSBjYWxsZWQgb24gdGVhcmRvd24gaWYgdGhlXG4gKiBzdWJzY3JpYmVyIGl0c2VsZiBpcyBub3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGFsbCBvdGhlciB0ZWFyZG93biBsb2dpYyBpcyBleGVjdXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcjxUPihcbiAgZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55PixcbiAgb25OZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuICBvbkNvbXBsZXRlPzogKCkgPT4gdm9pZCxcbiAgb25FcnJvcj86IChlcnI6IGFueSkgPT4gdm9pZCxcbiAgb25GaW5hbGl6ZT86ICgpID0+IHZvaWRcbik6IFN1YnNjcmliZXI8VD4ge1xuICByZXR1cm4gbmV3IE9wZXJhdG9yU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgb25OZXh0LCBvbkNvbXBsZXRlLCBvbkVycm9yLCBvbkZpbmFsaXplKTtcbn1cblxuLyoqXG4gKiBBIGdlbmVyaWMgaGVscGVyIGZvciBhbGxvd2luZyBvcGVyYXRvcnMgdG8gYmUgY3JlYXRlZCB3aXRoIGEgU3Vic2NyaWJlciBhbmRcbiAqIHVzZSBjbG9zdXJlcyB0byBjYXB0dXJlIG5lY2Vzc2FyeSBzdGF0ZSBmcm9tIHRoZSBvcGVyYXRvciBmdW5jdGlvbiBpdHNlbGYuXG4gKi9cbmV4cG9ydCBjbGFzcyBPcGVyYXRvclN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYW4gYE9wZXJhdG9yU3Vic2NyaWJlcmAuXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbiBUaGUgZG93bnN0cmVhbSBzdWJzY3JpYmVyLlxuICAgKiBAcGFyYW0gb25OZXh0IEhhbmRsZXMgbmV4dCB2YWx1ZXMsIG9ubHkgY2FsbGVkIGlmIHRoaXMgc3Vic2NyaWJlciBpcyBub3Qgc3RvcHBlZCBvciBjbG9zZWQuIEFueVxuICAgKiBlcnJvciB0aGF0IG9jY3VycyBpbiB0aGlzIGZ1bmN0aW9uIGlzIGNhdWdodCBhbmQgc2VudCB0byB0aGUgYGVycm9yYCBtZXRob2Qgb2YgdGhpcyBzdWJzY3JpYmVyLlxuICAgKiBAcGFyYW0gb25FcnJvciBIYW5kbGVzIGVycm9ycyBmcm9tIHRoZSBzdWJzY3JpcHRpb24sIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBpbiB0aGlzIGhhbmRsZXIgYXJlIGNhdWdodFxuICAgKiBhbmQgc2VuZCB0byB0aGUgYGRlc3RpbmF0aW9uYCBlcnJvciBoYW5kbGVyLlxuICAgKiBAcGFyYW0gb25Db21wbGV0ZSBIYW5kbGVzIGNvbXBsZXRpb24gbm90aWZpY2F0aW9uIGZyb20gdGhlIHN1YnNjcmlwdGlvbi4gQW55IGVycm9ycyB0aGF0IG9jY3VyIGluXG4gICAqIHRoaXMgaGFuZGxlciBhcmUgc2VudCB0byB0aGUgYGRlc3RpbmF0aW9uYCBlcnJvciBoYW5kbGVyLlxuICAgKiBAcGFyYW0gb25GaW5hbGl6ZSBBZGRpdGlvbmFsIGZpbmFsaXphdGlvbiBsb2dpYyBoZXJlLiBUaGlzIHdpbGwgb25seSBiZSBjYWxsZWQgb24gZmluYWxpemF0aW9uIGlmIHRoZVxuICAgKiBzdWJzY3JpYmVyIGl0c2VsZiBpcyBub3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGFsbCBvdGhlciBmaW5hbGl6YXRpb24gbG9naWMgaXMgZXhlY3V0ZWQuXG4gICAqIEBwYXJhbSBzaG91bGRVbnN1YnNjcmliZSBBbiBvcHRpb25hbCBjaGVjayB0byBzZWUgaWYgYW4gdW5zdWJzY3JpYmUgY2FsbCBzaG91bGQgdHJ1bHkgdW5zdWJzY3JpYmUuXG4gICAqIE5PVEU6IFRoaXMgY3VycmVudGx5ICoqT05MWSoqIGV4aXN0cyB0byBzdXBwb3J0IHRoZSBzdHJhbmdlIGJlaGF2aW9yIG9mIHtAbGluayBncm91cEJ5fSwgd2hlcmUgdW5zdWJzY3JpcHRpb25cbiAgICogdG8gdGhlIHJlc3VsdGluZyBvYnNlcnZhYmxlIGRvZXMgbm90IGFjdHVhbGx5IGRpc2Nvbm5lY3QgZnJvbSB0aGUgc291cmNlIGlmIHRoZXJlIGFyZSBhY3RpdmUgc3Vic2NyaXB0aW9uc1xuICAgKiB0byBhbnkgZ3JvdXBlZCBvYnNlcnZhYmxlLiAoRE8gTk9UIEVYUE9TRSBPUiBVU0UgRVhURVJOQUxMWSEhISlcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPGFueT4sXG4gICAgb25OZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuICAgIG9uQ29tcGxldGU/OiAoKSA9PiB2b2lkLFxuICAgIG9uRXJyb3I/OiAoZXJyOiBhbnkpID0+IHZvaWQsXG4gICAgcHJpdmF0ZSBvbkZpbmFsaXplPzogKCkgPT4gdm9pZCxcbiAgICBwcml2YXRlIHNob3VsZFVuc3Vic2NyaWJlPzogKCkgPT4gYm9vbGVhblxuICApIHtcbiAgICAvLyBJdCdzIGltcG9ydGFudCAtIGZvciBwZXJmb3JtYW5jZSByZWFzb25zIC0gdGhhdCBhbGwgb2YgdGhpcyBjbGFzcydzXG4gICAgLy8gbWVtYmVycyBhcmUgaW5pdGlhbGl6ZWQgYW5kIHRoYXQgdGhleSBhcmUgYWx3YXlzIGluaXRpYWxpemVkIGluIHRoZSBzYW1lXG4gICAgLy8gb3JkZXIuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBhbGwgT3BlcmF0b3JTdWJzY3JpYmVyIGluc3RhbmNlcyBoYXZlIHRoZVxuICAgIC8vIHNhbWUgaGlkZGVuIGNsYXNzIGluIFY4LiBUaGlzLCBpbiB0dXJuLCB3aWxsIGhlbHAga2VlcCB0aGUgbnVtYmVyIG9mXG4gICAgLy8gaGlkZGVuIGNsYXNzZXMgaW52b2x2ZWQgaW4gcHJvcGVydHkgYWNjZXNzZXMgd2l0aGluIHRoZSBiYXNlIGNsYXNzIGFzXG4gICAgLy8gbG93IGFzIHBvc3NpYmxlLiBJZiB0aGUgbnVtYmVyIG9mIGhpZGRlbiBjbGFzc2VzIGludm9sdmVkIGV4Y2VlZHMgZm91cixcbiAgICAvLyB0aGUgcHJvcGVydHkgYWNjZXNzZXMgd2lsbCBiZWNvbWUgbWVnYW1vcnBoaWMgYW5kIHBlcmZvcm1hbmNlIHBlbmFsdGllc1xuICAgIC8vIHdpbGwgYmUgaW5jdXJyZWQgLSBpLmUuIGlubGluZSBjYWNoZXMgd29uJ3QgYmUgdXNlZC5cbiAgICAvL1xuICAgIC8vIFRoZSByZWFzb25zIGZvciBlbnN1cmluZyBhbGwgaW5zdGFuY2VzIGhhdmUgdGhlIHNhbWUgaGlkZGVuIGNsYXNzIGFyZVxuICAgIC8vIGZ1cnRoZXIgZGlzY3Vzc2VkIGluIHRoaXMgYmxvZyBwb3N0IGZyb20gQmVuZWRpa3QgTWV1cmVyOlxuICAgIC8vIGh0dHBzOi8vYmVuZWRpa3RtZXVyZXIuZGUvMjAxOC8wMy8yMy9pbXBhY3Qtb2YtcG9seW1vcnBoaXNtLW9uLWNvbXBvbmVudC1iYXNlZC1mcmFtZXdvcmtzLWxpa2UtcmVhY3QvXG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMuX25leHQgPSBvbk5leHRcbiAgICAgID8gZnVuY3Rpb24gKHRoaXM6IE9wZXJhdG9yU3Vic2NyaWJlcjxUPiwgdmFsdWU6IFQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb25OZXh0KHZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA6IHN1cGVyLl9uZXh0O1xuICAgIHRoaXMuX2Vycm9yID0gb25FcnJvclxuICAgICAgPyBmdW5jdGlvbiAodGhpczogT3BlcmF0b3JTdWJzY3JpYmVyPFQ+LCBlcnI6IGFueSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBTZW5kIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBkb3duIHN0cmVhbS5cbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBmaW5hbGl6YXRpb24uXG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA6IHN1cGVyLl9lcnJvcjtcbiAgICB0aGlzLl9jb21wbGV0ZSA9IG9uQ29tcGxldGVcbiAgICAgID8gZnVuY3Rpb24gKHRoaXM6IE9wZXJhdG9yU3Vic2NyaWJlcjxUPikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBTZW5kIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBkb3duIHN0cmVhbS5cbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBmaW5hbGl6YXRpb24uXG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA6IHN1cGVyLl9jb21wbGV0ZTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5zaG91bGRVbnN1YnNjcmliZSB8fCB0aGlzLnNob3VsZFVuc3Vic2NyaWJlKCkpIHtcbiAgICAgIGNvbnN0IHsgY2xvc2VkIH0gPSB0aGlzO1xuICAgICAgc3VwZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgIC8vIEV4ZWN1dGUgYWRkaXRpb25hbCB0ZWFyZG93biBpZiB3ZSBoYXZlIGFueSBhbmQgd2UgZGlkbid0IGFscmVhZHkgZG8gc28uXG4gICAgICAhY2xvc2VkICYmIHRoaXMub25GaW5hbGl6ZT8uKCk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlRXJyb3JDbGFzcyB9IGZyb20gJy4vY3JlYXRlRXJyb3JDbGFzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yQ3RvciB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIERvIG5vdCBjb25zdHJ1Y3QgZXJyb3IgaW5zdGFuY2VzLlxuICAgKiBDYW5ub3QgYmUgdGFnZ2VkIGFzIGludGVybmFsOiBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RpdmVYL3J4anMvaXNzdWVzLzYyNjlcbiAgICovXG4gIG5ldyAoKTogT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3I7XG59XG5cbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gYW4gYWN0aW9uIGlzIGludmFsaWQgYmVjYXVzZSB0aGUgb2JqZWN0IGhhcyBiZWVuXG4gKiB1bnN1YnNjcmliZWQuXG4gKlxuICogQHNlZSB7QGxpbmsgU3ViamVjdH1cbiAqIEBzZWUge0BsaW5rIEJlaGF2aW9yU3ViamVjdH1cbiAqXG4gKiBAY2xhc3MgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yOiBPYmplY3RVbnN1YnNjcmliZWRFcnJvckN0b3IgPSBjcmVhdGVFcnJvckNsYXNzKFxuICAoX3N1cGVyKSA9PlxuICAgIGZ1bmN0aW9uIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbCh0aGlzOiBhbnkpIHtcbiAgICAgIF9zdXBlcih0aGlzKTtcbiAgICAgIHRoaXMubmFtZSA9ICdPYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSAnb2JqZWN0IHVuc3Vic2NyaWJlZCc7XG4gICAgfVxuKTtcbiIsICJpbXBvcnQgeyBPcGVyYXRvciB9IGZyb20gJy4vT3BlcmF0b3InO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgRU1QVFlfU1VCU0NSSVBUSU9OIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIFN1YnNjcmlwdGlvbkxpa2UsIFRlYXJkb3duTG9naWMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIH0gZnJvbSAnLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4vdXRpbC9hcnJSZW1vdmUnO1xuaW1wb3J0IHsgZXJyb3JDb250ZXh0IH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG5cbi8qKlxuICogQSBTdWJqZWN0IGlzIGEgc3BlY2lhbCB0eXBlIG9mIE9ic2VydmFibGUgdGhhdCBhbGxvd3MgdmFsdWVzIHRvIGJlXG4gKiBtdWx0aWNhc3RlZCB0byBtYW55IE9ic2VydmVycy4gU3ViamVjdHMgYXJlIGxpa2UgRXZlbnRFbWl0dGVycy5cbiAqXG4gKiBFdmVyeSBTdWJqZWN0IGlzIGFuIE9ic2VydmFibGUgYW5kIGFuIE9ic2VydmVyLiBZb3UgY2FuIHN1YnNjcmliZSB0byBhXG4gKiBTdWJqZWN0LCBhbmQgeW91IGNhbiBjYWxsIG5leHQgdG8gZmVlZCB2YWx1ZXMgYXMgd2VsbCBhcyBlcnJvciBhbmQgY29tcGxldGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJqZWN0PFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIFN1YnNjcmlwdGlvbkxpa2Uge1xuICBjbG9zZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGN1cnJlbnRPYnNlcnZlcnM6IE9ic2VydmVyPFQ+W10gfCBudWxsID0gbnVsbDtcblxuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIG9ic2VydmVyczogT2JzZXJ2ZXI8VD5bXSA9IFtdO1xuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIGlzU3RvcHBlZCA9IGZhbHNlO1xuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIGhhc0Vycm9yID0gZmFsc2U7XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgdGhyb3duRXJyb3I6IGFueSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBcInN1YmplY3RcIiBieSBiYXNpY2FsbHkgZ2x1aW5nIGFuIG9ic2VydmVyIHRvIGFuIG9ic2VydmFibGUuXG4gICAqXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBkZXByZWNhdGVkIFJlY29tbWVuZGVkIHlvdSBkbyBub3QgdXNlLiBXaWxsIGJlIHJlbW92ZWQgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLiBQbGFucyBmb3IgcmVwbGFjZW1lbnQgc3RpbGwgdW5kZXIgZGlzY3Vzc2lvbi5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGU6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55ID0gPFQ+KGRlc3RpbmF0aW9uOiBPYnNlcnZlcjxUPiwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KTogQW5vbnltb3VzU3ViamVjdDxUPiA9PiB7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNTdWJqZWN0PFQ+KGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIE5PVEU6IFRoaXMgbXVzdCBiZSBoZXJlIHRvIG9ic2N1cmUgT2JzZXJ2YWJsZSdzIGNvbnN0cnVjdG9yLlxuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPFQsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgY29uc3Qgc3ViamVjdCA9IG5ldyBBbm9ueW1vdXNTdWJqZWN0KHRoaXMsIHRoaXMpO1xuICAgIHN1YmplY3Qub3BlcmF0b3IgPSBvcGVyYXRvciBhcyBhbnk7XG4gICAgcmV0dXJuIHN1YmplY3QgYXMgYW55O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3Rocm93SWZDbG9zZWQoKSB7XG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KHZhbHVlOiBUKSB7XG4gICAgZXJyb3JDb250ZXh0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRPYnNlcnZlcnMpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBBcnJheS5mcm9tKHRoaXMub2JzZXJ2ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMuY3VycmVudE9ic2VydmVycykge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBlcnJvcihlcnI6IGFueSkge1xuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGhyb3duRXJyb3IgPSBlcnI7XG4gICAgICAgIGNvbnN0IHsgb2JzZXJ2ZXJzIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAob2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpIS5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBlcnJvckNvbnRleHQoKCkgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHsgb2JzZXJ2ZXJzIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAob2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpIS5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICB0aGlzLmlzU3RvcHBlZCA9IHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLm9ic2VydmVycyA9IHRoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGwhO1xuICB9XG5cbiAgZ2V0IG9ic2VydmVkKCkge1xuICAgIHJldHVybiB0aGlzLm9ic2VydmVycz8ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF90cnlTdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPik6IFRlYXJkb3duTG9naWMge1xuICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICByZXR1cm4gc3VwZXIuX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPik6IFN1YnNjcmlwdGlvbiB7XG4gICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgIHRoaXMuX2NoZWNrRmluYWxpemVkU3RhdHVzZXMoc3Vic2NyaWJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2lubmVyU3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX2lubmVyU3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55Pikge1xuICAgIGNvbnN0IHsgaGFzRXJyb3IsIGlzU3RvcHBlZCwgb2JzZXJ2ZXJzIH0gPSB0aGlzO1xuICAgIGlmIChoYXNFcnJvciB8fCBpc1N0b3BwZWQpIHtcbiAgICAgIHJldHVybiBFTVBUWV9TVUJTQ1JJUFRJT047XG4gICAgfVxuICAgIHRoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgb2JzZXJ2ZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbDtcbiAgICAgIGFyclJlbW92ZShvYnNlcnZlcnMsIHN1YnNjcmliZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX2NoZWNrRmluYWxpemVkU3RhdHVzZXMoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSB7XG4gICAgY29uc3QgeyBoYXNFcnJvciwgdGhyb3duRXJyb3IsIGlzU3RvcHBlZCB9ID0gdGhpcztcbiAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhyb3duRXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoaXNTdG9wcGVkKSB7XG4gICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgT2JzZXJ2YWJsZSB3aXRoIHRoaXMgU3ViamVjdCBhcyB0aGUgc291cmNlLiBZb3UgY2FuIGRvIHRoaXNcbiAgICogdG8gY3JlYXRlIGN1c3RvbSBPYnNlcnZlci1zaWRlIGxvZ2ljIG9mIHRoZSBTdWJqZWN0IGFuZCBjb25jZWFsIGl0IGZyb21cbiAgICogY29kZSB0aGF0IHVzZXMgdGhlIE9ic2VydmFibGUuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IE9ic2VydmFibGUgdGhhdCB0aGUgU3ViamVjdCBjYXN0cyB0b1xuICAgKi9cbiAgYXNPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IG9ic2VydmFibGU6IGFueSA9IG5ldyBPYnNlcnZhYmxlPFQ+KCk7XG4gICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIEFub255bW91c1N1YmplY3Q8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIEFub255bW91c1N1YmplY3Q8VD4gZXh0ZW5kcyBTdWJqZWN0PFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICAgIHB1YmxpYyBkZXN0aW5hdGlvbj86IE9ic2VydmVyPFQ+LFxuICAgIHNvdXJjZT86IE9ic2VydmFibGU8VD5cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgfVxuXG4gIG5leHQodmFsdWU6IFQpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uPy5uZXh0Py4odmFsdWUpO1xuICB9XG5cbiAgZXJyb3IoZXJyOiBhbnkpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uPy5lcnJvcj8uKGVycik7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uPy5jb21wbGV0ZT8uKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZT8uc3Vic2NyaWJlKHN1YnNjcmliZXIpID8/IEVNUFRZX1NVQlNDUklQVElPTjtcbiAgfVxufVxuIiwgImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5cbi8qKlxuICogQSB2YXJpYW50IG9mIFN1YmplY3QgdGhhdCByZXF1aXJlcyBhbiBpbml0aWFsIHZhbHVlIGFuZCBlbWl0cyBpdHMgY3VycmVudFxuICogdmFsdWUgd2hlbmV2ZXIgaXQgaXMgc3Vic2NyaWJlZCB0by5cbiAqXG4gKiBAY2xhc3MgQmVoYXZpb3JTdWJqZWN0PFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBCZWhhdmlvclN1YmplY3Q8VD4gZXh0ZW5kcyBTdWJqZWN0PFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmFsdWU6IFQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IFQge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHN1cGVyLl9zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgIXN1YnNjcmlwdGlvbi5jbG9zZWQgJiYgc3Vic2NyaWJlci5uZXh0KHRoaXMuX3ZhbHVlKTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0VmFsdWUoKTogVCB7XG4gICAgY29uc3QgeyBoYXNFcnJvciwgdGhyb3duRXJyb3IsIF92YWx1ZSB9ID0gdGhpcztcbiAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgIHRocm93IHRocm93bkVycm9yO1xuICAgIH1cbiAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgcmV0dXJuIF92YWx1ZTtcbiAgfVxuXG4gIG5leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBzdXBlci5uZXh0KCh0aGlzLl92YWx1ZSA9IHZhbHVlKSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBUaW1lc3RhbXBQcm92aWRlciB9IGZyb20gJy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIERhdGVUaW1lc3RhbXBQcm92aWRlciBleHRlbmRzIFRpbWVzdGFtcFByb3ZpZGVyIHtcbiAgZGVsZWdhdGU6IFRpbWVzdGFtcFByb3ZpZGVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgZGF0ZVRpbWVzdGFtcFByb3ZpZGVyOiBEYXRlVGltZXN0YW1wUHJvdmlkZXIgPSB7XG4gIG5vdygpIHtcbiAgICAvLyBVc2UgdGhlIHZhcmlhYmxlIHJhdGhlciB0aGFuIGB0aGlzYCBzbyB0aGF0IHRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkXG4gICAgLy8gd2l0aG91dCBiZWluZyBib3VuZCB0byB0aGUgcHJvdmlkZXIuXG4gICAgcmV0dXJuIChkYXRlVGltZXN0YW1wUHJvdmlkZXIuZGVsZWdhdGUgfHwgRGF0ZSkubm93KCk7XG4gIH0sXG4gIGRlbGVnYXRlOiB1bmRlZmluZWQsXG59O1xuIiwgImltcG9ydCB7IFNjaGVkdWxlciB9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgU2NoZWR1bGVyQWN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIEEgdW5pdCBvZiB3b3JrIHRvIGJlIGV4ZWN1dGVkIGluIGEgYHNjaGVkdWxlcmAuIEFuIGFjdGlvbiBpcyB0eXBpY2FsbHlcbiAqIGNyZWF0ZWQgZnJvbSB3aXRoaW4gYSB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gYW5kIGFuIFJ4SlMgdXNlciBkb2VzIG5vdCBuZWVkIHRvIGNvbmNlcm5cbiAqIHRoZW1zZWx2ZXMgYWJvdXQgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBhbiBBY3Rpb24uXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIEFjdGlvbjxUPiBleHRlbmRzIFN1YnNjcmlwdGlvbiB7XG4gKiAgIG5ldyAoc2NoZWR1bGVyOiBTY2hlZHVsZXIsIHdvcms6IChzdGF0ZT86IFQpID0+IHZvaWQpO1xuICogICBzY2hlZHVsZShzdGF0ZT86IFQsIGRlbGF5OiBudW1iZXIgPSAwKTogU3Vic2NyaXB0aW9uO1xuICogfVxuICogYGBgXG4gKlxuICogQGNsYXNzIEFjdGlvbjxUPlxuICovXG5leHBvcnQgY2xhc3MgQWN0aW9uPFQ+IGV4dGVuZHMgU3Vic2NyaXB0aW9uIHtcbiAgY29uc3RydWN0b3Ioc2NoZWR1bGVyOiBTY2hlZHVsZXIsIHdvcms6ICh0aGlzOiBTY2hlZHVsZXJBY3Rpb248VD4sIHN0YXRlPzogVCkgPT4gdm9pZCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgLyoqXG4gICAqIFNjaGVkdWxlcyB0aGlzIGFjdGlvbiBvbiBpdHMgcGFyZW50IHtAbGluayBTY2hlZHVsZXJMaWtlfSBmb3IgZXhlY3V0aW9uLiBNYXkgYmUgcGFzc2VkXG4gICAqIHNvbWUgY29udGV4dCBvYmplY3QsIGBzdGF0ZWAuIE1heSBoYXBwZW4gYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLFxuICAgKiBhY2NvcmRpbmcgdG8gdGhlIGBkZWxheWAgcGFyYW1ldGVyLCBpZiBzcGVjaWZpZWQuXG4gICAqIEBwYXJhbSB7VH0gW3N0YXRlXSBTb21lIGNvbnRleHR1YWwgZGF0YSB0aGF0IHRoZSBgd29ya2AgZnVuY3Rpb24gdXNlcyB3aGVuXG4gICAqIGNhbGxlZCBieSB0aGUgU2NoZWR1bGVyLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5XSBUaW1lIHRvIHdhaXQgYmVmb3JlIGV4ZWN1dGluZyB0aGUgd29yaywgd2hlcmUgdGhlXG4gICAqIHRpbWUgdW5pdCBpcyBpbXBsaWNpdCBhbmQgZGVmaW5lZCBieSB0aGUgU2NoZWR1bGVyLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcHVibGljIHNjaGVkdWxlKHN0YXRlPzogVCwgZGVsYXk6IG51bWJlciA9IDApOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBUaW1lckhhbmRsZSB9IGZyb20gJy4vdGltZXJIYW5kbGUnO1xudHlwZSBTZXRJbnRlcnZhbEZ1bmN0aW9uID0gKGhhbmRsZXI6ICgpID0+IHZvaWQsIHRpbWVvdXQ/OiBudW1iZXIsIC4uLmFyZ3M6IGFueVtdKSA9PiBUaW1lckhhbmRsZTtcbnR5cGUgQ2xlYXJJbnRlcnZhbEZ1bmN0aW9uID0gKGhhbmRsZTogVGltZXJIYW5kbGUpID0+IHZvaWQ7XG5cbmludGVyZmFjZSBJbnRlcnZhbFByb3ZpZGVyIHtcbiAgc2V0SW50ZXJ2YWw6IFNldEludGVydmFsRnVuY3Rpb247XG4gIGNsZWFySW50ZXJ2YWw6IENsZWFySW50ZXJ2YWxGdW5jdGlvbjtcbiAgZGVsZWdhdGU6XG4gICAgfCB7XG4gICAgICAgIHNldEludGVydmFsOiBTZXRJbnRlcnZhbEZ1bmN0aW9uO1xuICAgICAgICBjbGVhckludGVydmFsOiBDbGVhckludGVydmFsRnVuY3Rpb247XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBpbnRlcnZhbFByb3ZpZGVyOiBJbnRlcnZhbFByb3ZpZGVyID0ge1xuICAvLyBXaGVuIGFjY2Vzc2luZyB0aGUgZGVsZWdhdGUsIHVzZSB0aGUgdmFyaWFibGUgcmF0aGVyIHRoYW4gYHRoaXNgIHNvIHRoYXRcbiAgLy8gdGhlIGZ1bmN0aW9ucyBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgYmVpbmcgYm91bmQgdG8gdGhlIHByb3ZpZGVyLlxuICBzZXRJbnRlcnZhbChoYW5kbGVyOiAoKSA9PiB2b2lkLCB0aW1lb3V0PzogbnVtYmVyLCAuLi5hcmdzKSB7XG4gICAgY29uc3QgeyBkZWxlZ2F0ZSB9ID0gaW50ZXJ2YWxQcm92aWRlcjtcbiAgICBpZiAoZGVsZWdhdGU/LnNldEludGVydmFsKSB7XG4gICAgICByZXR1cm4gZGVsZWdhdGUuc2V0SW50ZXJ2YWwoaGFuZGxlciwgdGltZW91dCwgLi4uYXJncyk7XG4gICAgfVxuICAgIHJldHVybiBzZXRJbnRlcnZhbChoYW5kbGVyLCB0aW1lb3V0LCAuLi5hcmdzKTtcbiAgfSxcbiAgY2xlYXJJbnRlcnZhbChoYW5kbGUpIHtcbiAgICBjb25zdCB7IGRlbGVnYXRlIH0gPSBpbnRlcnZhbFByb3ZpZGVyO1xuICAgIHJldHVybiAoZGVsZWdhdGU/LmNsZWFySW50ZXJ2YWwgfHwgY2xlYXJJbnRlcnZhbCkoaGFuZGxlIGFzIGFueSk7XG4gIH0sXG4gIGRlbGVnYXRlOiB1bmRlZmluZWQsXG59O1xuIiwgImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IFNjaGVkdWxlckFjdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBBc3luY1NjaGVkdWxlciB9IGZyb20gJy4vQXN5bmNTY2hlZHVsZXInO1xuaW1wb3J0IHsgaW50ZXJ2YWxQcm92aWRlciB9IGZyb20gJy4vaW50ZXJ2YWxQcm92aWRlcic7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuLi91dGlsL2FyclJlbW92ZSc7XG5pbXBvcnQgeyBUaW1lckhhbmRsZSB9IGZyb20gJy4vdGltZXJIYW5kbGUnO1xuXG5leHBvcnQgY2xhc3MgQXN5bmNBY3Rpb248VD4gZXh0ZW5kcyBBY3Rpb248VD4ge1xuICBwdWJsaWMgaWQ6IFRpbWVySGFuZGxlIHwgdW5kZWZpbmVkO1xuICBwdWJsaWMgc3RhdGU/OiBUO1xuICAvLyBAdHMtaWdub3JlOiBQcm9wZXJ0eSBoYXMgbm8gaW5pdGlhbGl6ZXIgYW5kIGlzIG5vdCBkZWZpbml0ZWx5IGFzc2lnbmVkXG4gIHB1YmxpYyBkZWxheTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgcGVuZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzY2hlZHVsZXI6IEFzeW5jU2NoZWR1bGVyLCBwcm90ZWN0ZWQgd29yazogKHRoaXM6IFNjaGVkdWxlckFjdGlvbjxUPiwgc3RhdGU/OiBUKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoc2NoZWR1bGVyLCB3b3JrKTtcbiAgfVxuXG4gIHB1YmxpYyBzY2hlZHVsZShzdGF0ZT86IFQsIGRlbGF5OiBudW1iZXIgPSAwKTogU3Vic2NyaXB0aW9uIHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyByZXBsYWNlIHRoZSBjdXJyZW50IHN0YXRlIHdpdGggdGhlIG5ldyBzdGF0ZS5cbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICBjb25zdCBpZCA9IHRoaXMuaWQ7XG4gICAgY29uc3Qgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG5cbiAgICAvL1xuICAgIC8vIEltcG9ydGFudCBpbXBsZW1lbnRhdGlvbiBub3RlOlxuICAgIC8vXG4gICAgLy8gQWN0aW9ucyBvbmx5IGV4ZWN1dGUgb25jZSBieSBkZWZhdWx0LCB1bmxlc3MgcmVzY2hlZHVsZWQgZnJvbSB3aXRoaW4gdGhlXG4gICAgLy8gc2NoZWR1bGVkIGNhbGxiYWNrLiBUaGlzIGFsbG93cyB1cyB0byBpbXBsZW1lbnQgc2luZ2xlIGFuZCByZXBlYXRcbiAgICAvLyBhY3Rpb25zIHZpYSB0aGUgc2FtZSBjb2RlIHBhdGgsIHdpdGhvdXQgYWRkaW5nIEFQSSBzdXJmYWNlIGFyZWEsIGFzIHdlbGxcbiAgICAvLyBhcyBtaW1pYyB0cmFkaXRpb25hbCByZWN1cnNpb24gYnV0IGFjcm9zcyBhc3luY2hyb25vdXMgYm91bmRhcmllcy5cbiAgICAvL1xuICAgIC8vIEhvd2V2ZXIsIEpTIHJ1bnRpbWVzIGFuZCB0aW1lcnMgZGlzdGluZ3Vpc2ggYmV0d2VlbiBpbnRlcnZhbHMgYWNoaWV2ZWQgYnlcbiAgICAvLyBzZXJpYWwgYHNldFRpbWVvdXRgIGNhbGxzIHZzLiBhIHNpbmdsZSBgc2V0SW50ZXJ2YWxgIGNhbGwuIEFuIGludGVydmFsIG9mXG4gICAgLy8gc2VyaWFsIGBzZXRUaW1lb3V0YCBjYWxscyBjYW4gYmUgaW5kaXZpZHVhbGx5IGRlbGF5ZWQsIHdoaWNoIGRlbGF5c1xuICAgIC8vIHNjaGVkdWxpbmcgdGhlIG5leHQgYHNldFRpbWVvdXRgLCBhbmQgc28gb24uIGBzZXRJbnRlcnZhbGAgYXR0ZW1wdHMgdG9cbiAgICAvLyBndWFyYW50ZWUgdGhlIGludGVydmFsIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBtb3JlIHByZWNpc2VseSB0byB0aGVcbiAgICAvLyBpbnRlcnZhbCBwZXJpb2QsIHJlZ2FyZGxlc3Mgb2YgbG9hZC5cbiAgICAvL1xuICAgIC8vIFRoZXJlZm9yZSwgd2UgdXNlIGBzZXRJbnRlcnZhbGAgdG8gc2NoZWR1bGUgc2luZ2xlIGFuZCByZXBlYXQgYWN0aW9ucy5cbiAgICAvLyBJZiB0aGUgYWN0aW9uIHJlc2NoZWR1bGVzIGl0c2VsZiB3aXRoIHRoZSBzYW1lIGRlbGF5LCB0aGUgaW50ZXJ2YWwgaXMgbm90XG4gICAgLy8gY2FuY2VsZWQuIElmIHRoZSBhY3Rpb24gZG9lc24ndCByZXNjaGVkdWxlLCBvciByZXNjaGVkdWxlcyB3aXRoIGFcbiAgICAvLyBkaWZmZXJlbnQgZGVsYXksIHRoZSBpbnRlcnZhbCB3aWxsIGJlIGNhbmNlbGVkIGFmdGVyIHNjaGVkdWxlZCBjYWxsYmFja1xuICAgIC8vIGV4ZWN1dGlvbi5cbiAgICAvL1xuICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBwZW5kaW5nIGZsYWcgaW5kaWNhdGluZyB0aGF0IHRoaXMgYWN0aW9uIGhhcyBiZWVuIHNjaGVkdWxlZCwgb3JcbiAgICAvLyBoYXMgcmVjdXJzaXZlbHkgcmVzY2hlZHVsZWQgaXRzZWxmLlxuICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG5cbiAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgLy8gSWYgdGhpcyBhY3Rpb24gaGFzIGFscmVhZHkgYW4gYXN5bmMgSWQsIGRvbid0IHJlcXVlc3QgYSBuZXcgb25lLlxuICAgIHRoaXMuaWQgPSB0aGlzLmlkID8/IHRoaXMucmVxdWVzdEFzeW5jSWQoc2NoZWR1bGVyLCB0aGlzLmlkLCBkZWxheSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3RlY3RlZCByZXF1ZXN0QXN5bmNJZChzY2hlZHVsZXI6IEFzeW5jU2NoZWR1bGVyLCBfaWQ/OiBUaW1lckhhbmRsZSwgZGVsYXk6IG51bWJlciA9IDApOiBUaW1lckhhbmRsZSB7XG4gICAgcmV0dXJuIGludGVydmFsUHJvdmlkZXIuc2V0SW50ZXJ2YWwoc2NoZWR1bGVyLmZsdXNoLmJpbmQoc2NoZWR1bGVyLCB0aGlzKSwgZGVsYXkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlY3ljbGVBc3luY0lkKF9zY2hlZHVsZXI6IEFzeW5jU2NoZWR1bGVyLCBpZD86IFRpbWVySGFuZGxlLCBkZWxheTogbnVtYmVyIHwgbnVsbCA9IDApOiBUaW1lckhhbmRsZSB8IHVuZGVmaW5lZCB7XG4gICAgLy8gSWYgdGhpcyBhY3Rpb24gaXMgcmVzY2hlZHVsZWQgd2l0aCB0aGUgc2FtZSBkZWxheSB0aW1lLCBkb24ndCBjbGVhciB0aGUgaW50ZXJ2YWwgaWQuXG4gICAgaWYgKGRlbGF5ICE9IG51bGwgJiYgdGhpcy5kZWxheSA9PT0gZGVsYXkgJiYgdGhpcy5wZW5kaW5nID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIGlmIHRoZSBhY3Rpb24ncyBkZWxheSB0aW1lIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IGRlbGF5LFxuICAgIC8vIG9yIHRoZSBhY3Rpb24gaGFzIGJlZW4gcmVzY2hlZHVsZWQgYmVmb3JlIGl0J3MgZXhlY3V0ZWQsIGNsZWFyIHRoZSBpbnRlcnZhbCBpZFxuICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICBpbnRlcnZhbFByb3ZpZGVyLmNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogSW1tZWRpYXRlbHkgZXhlY3V0ZXMgdGhpcyBhY3Rpb24gYW5kIHRoZSBgd29ya2AgaXQgY29udGFpbnMuXG4gICAqIEByZXR1cm4ge2FueX1cbiAgICovXG4gIHB1YmxpYyBleGVjdXRlKHN0YXRlOiBULCBkZWxheTogbnVtYmVyKTogYW55IHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ2V4ZWN1dGluZyBhIGNhbmNlbGxlZCBhY3Rpb24nKTtcbiAgICB9XG5cbiAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICBjb25zdCBlcnJvciA9IHRoaXMuX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGVuZGluZyA9PT0gZmFsc2UgJiYgdGhpcy5pZCAhPSBudWxsKSB7XG4gICAgICAvLyBEZXF1ZXVlIGlmIHRoZSBhY3Rpb24gZGlkbid0IHJlc2NoZWR1bGUgaXRzZWxmLiBEb24ndCBjYWxsXG4gICAgICAvLyB1bnN1YnNjcmliZSgpLCBiZWNhdXNlIHRoZSBhY3Rpb24gY291bGQgcmVzY2hlZHVsZSBsYXRlci5cbiAgICAgIC8vIEZvciBleGFtcGxlOlxuICAgICAgLy8gYGBgXG4gICAgICAvLyBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gZG9Xb3JrKGNvdW50ZXIpIHtcbiAgICAgIC8vICAgLyogLi4uIEknbSBhIGJ1c3kgd29ya2VyIGJlZSAuLi4gKi9cbiAgICAgIC8vICAgdmFyIG9yaWdpbmFsQWN0aW9uID0gdGhpcztcbiAgICAgIC8vICAgLyogd2FpdCAxMDBtcyBiZWZvcmUgcmVzY2hlZHVsaW5nIHRoZSBhY3Rpb24gKi9cbiAgICAgIC8vICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyAgICAgb3JpZ2luYWxBY3Rpb24uc2NoZWR1bGUoY291bnRlciArIDEpO1xuICAgICAgLy8gICB9LCAxMDApO1xuICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAvLyBgYGBcbiAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHRoaXMuc2NoZWR1bGVyLCB0aGlzLmlkLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2V4ZWN1dGUoc3RhdGU6IFQsIF9kZWxheTogbnVtYmVyKTogYW55IHtcbiAgICBsZXQgZXJyb3JlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBlcnJvclZhbHVlOiBhbnk7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMud29yayhzdGF0ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3JlZCA9IHRydWU7XG4gICAgICAvLyBIQUNLOiBTaW5jZSBjb2RlIGVsc2V3aGVyZSBpcyByZWx5aW5nIG9uIHRoZSBcInRydXRoaW5lc3NcIiBvZiB0aGVcbiAgICAgIC8vIHJldHVybiBoZXJlLCB3ZSBjYW4ndCBoYXZlIGl0IHJldHVybiBcIlwiIG9yIDAgb3IgZmFsc2UuXG4gICAgICAvLyBUT0RPOiBDbGVhbiB0aGlzIHVwIHdoZW4gd2UgcmVmYWN0b3Igc2NoZWR1bGVycyBtaWQtdmVyc2lvbi04IG9yIHNvLlxuICAgICAgZXJyb3JWYWx1ZSA9IGUgPyBlIDogbmV3IEVycm9yKCdTY2hlZHVsZWQgYWN0aW9uIHRocmV3IGZhbHN5IGVycm9yJyk7XG4gICAgfVxuICAgIGlmIChlcnJvcmVkKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICByZXR1cm4gZXJyb3JWYWx1ZTtcbiAgICB9XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICBjb25zdCB7IGlkLCBzY2hlZHVsZXIgfSA9IHRoaXM7XG4gICAgICBjb25zdCB7IGFjdGlvbnMgfSA9IHNjaGVkdWxlcjtcblxuICAgICAgdGhpcy53b3JrID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NoZWR1bGVyID0gbnVsbCE7XG4gICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcblxuICAgICAgYXJyUmVtb3ZlKGFjdGlvbnMsIHRoaXMpO1xuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQoc2NoZWR1bGVyLCBpZCwgbnVsbCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVsYXkgPSBudWxsITtcbiAgICAgIHN1cGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi9zY2hlZHVsZXIvQWN0aW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UsIFNjaGVkdWxlckFjdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZGF0ZVRpbWVzdGFtcFByb3ZpZGVyIH0gZnJvbSAnLi9zY2hlZHVsZXIvZGF0ZVRpbWVzdGFtcFByb3ZpZGVyJztcblxuLyoqXG4gKiBBbiBleGVjdXRpb24gY29udGV4dCBhbmQgYSBkYXRhIHN0cnVjdHVyZSB0byBvcmRlciB0YXNrcyBhbmQgc2NoZWR1bGUgdGhlaXJcbiAqIGV4ZWN1dGlvbi4gUHJvdmlkZXMgYSBub3Rpb24gb2YgKHBvdGVudGlhbGx5IHZpcnR1YWwpIHRpbWUsIHRocm91Z2ggdGhlXG4gKiBgbm93KClgIGdldHRlciBtZXRob2QuXG4gKlxuICogRWFjaCB1bml0IG9mIHdvcmsgaW4gYSBTY2hlZHVsZXIgaXMgY2FsbGVkIGFuIGBBY3Rpb25gLlxuICpcbiAqIGBgYHRzXG4gKiBjbGFzcyBTY2hlZHVsZXIge1xuICogICBub3coKTogbnVtYmVyO1xuICogICBzY2hlZHVsZSh3b3JrLCBkZWxheT8sIHN0YXRlPyk6IFN1YnNjcmlwdGlvbjtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBjbGFzcyBTY2hlZHVsZXJcbiAqIEBkZXByZWNhdGVkIFNjaGVkdWxlciBpcyBhbiBpbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwgb2YgUnhKUywgYW5kXG4gKiBzaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkuIFJhdGhlciwgY3JlYXRlIHlvdXIgb3duIGNsYXNzIGFuZCBpbXBsZW1lbnRcbiAqIHtAbGluayBTY2hlZHVsZXJMaWtlfS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LlxuICovXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVyIGltcGxlbWVudHMgU2NoZWR1bGVyTGlrZSB7XG4gIHB1YmxpYyBzdGF0aWMgbm93OiAoKSA9PiBudW1iZXIgPSBkYXRlVGltZXN0YW1wUHJvdmlkZXIubm93O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZWR1bGVyQWN0aW9uQ3RvcjogdHlwZW9mIEFjdGlvbiwgbm93OiAoKSA9PiBudW1iZXIgPSBTY2hlZHVsZXIubm93KSB7XG4gICAgdGhpcy5ub3cgPSBub3c7XG4gIH1cblxuICAvKipcbiAgICogQSBnZXR0ZXIgbWV0aG9kIHRoYXQgcmV0dXJucyBhIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgdGltZVxuICAgKiAoYXQgdGhlIHRpbWUgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkKSBhY2NvcmRpbmcgdG8gdGhlIHNjaGVkdWxlcidzIG93blxuICAgKiBpbnRlcm5hbCBjbG9jay5cbiAgICogQHJldHVybiB7bnVtYmVyfSBBIG51bWJlciB0aGF0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgdGltZS4gTWF5IG9yIG1heSBub3RcbiAgICogaGF2ZSBhIHJlbGF0aW9uIHRvIHdhbGwtY2xvY2sgdGltZS4gTWF5IG9yIG1heSBub3QgcmVmZXIgdG8gYSB0aW1lIHVuaXRcbiAgICogKGUuZy4gbWlsbGlzZWNvbmRzKS5cbiAgICovXG4gIHB1YmxpYyBub3c6ICgpID0+IG51bWJlcjtcblxuICAvKipcbiAgICogU2NoZWR1bGVzIGEgZnVuY3Rpb24sIGB3b3JrYCwgZm9yIGV4ZWN1dGlvbi4gTWF5IGhhcHBlbiBhdCBzb21lIHBvaW50IGluXG4gICAqIHRoZSBmdXR1cmUsIGFjY29yZGluZyB0byB0aGUgYGRlbGF5YCBwYXJhbWV0ZXIsIGlmIHNwZWNpZmllZC4gTWF5IGJlIHBhc3NlZFxuICAgKiBzb21lIGNvbnRleHQgb2JqZWN0LCBgc3RhdGVgLCB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgYHdvcmtgIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBUaGUgZ2l2ZW4gYXJndW1lbnRzIHdpbGwgYmUgcHJvY2Vzc2VkIGFuIHN0b3JlZCBhcyBhbiBBY3Rpb24gb2JqZWN0IGluIGFcbiAgICogcXVldWUgb2YgYWN0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbihzdGF0ZTogP1QpOiA/U3Vic2NyaXB0aW9ufSB3b3JrIEEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIGFcbiAgICogdGFzaywgb3Igc29tZSB1bml0IG9mIHdvcmsgdG8gYmUgZXhlY3V0ZWQgYnkgdGhlIFNjaGVkdWxlci5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheV0gVGltZSB0byB3YWl0IGJlZm9yZSBleGVjdXRpbmcgdGhlIHdvcmssIHdoZXJlIHRoZVxuICAgKiB0aW1lIHVuaXQgaXMgaW1wbGljaXQgYW5kIGRlZmluZWQgYnkgdGhlIFNjaGVkdWxlciBpdHNlbGYuXG4gICAqIEBwYXJhbSB7VH0gW3N0YXRlXSBTb21lIGNvbnRleHR1YWwgZGF0YSB0aGF0IHRoZSBgd29ya2AgZnVuY3Rpb24gdXNlcyB3aGVuXG4gICAqIGNhbGxlZCBieSB0aGUgU2NoZWR1bGVyLlxuICAgKiBAcmV0dXJuIHtTdWJzY3JpcHRpb259IEEgc3Vic2NyaXB0aW9uIGluIG9yZGVyIHRvIGJlIGFibGUgdG8gdW5zdWJzY3JpYmVcbiAgICogdGhlIHNjaGVkdWxlZCB3b3JrLlxuICAgKi9cbiAgcHVibGljIHNjaGVkdWxlPFQ+KHdvcms6ICh0aGlzOiBTY2hlZHVsZXJBY3Rpb248VD4sIHN0YXRlPzogVCkgPT4gdm9pZCwgZGVsYXk6IG51bWJlciA9IDAsIHN0YXRlPzogVCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLnNjaGVkdWxlckFjdGlvbkN0b3I8VD4odGhpcywgd29yaykuc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbiAgfVxufVxuIiwgImltcG9ydCB7IFNjaGVkdWxlciB9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgeyBBc3luY0FjdGlvbiB9IGZyb20gJy4vQXN5bmNBY3Rpb24nO1xuaW1wb3J0IHsgVGltZXJIYW5kbGUgfSBmcm9tICcuL3RpbWVySGFuZGxlJztcblxuZXhwb3J0IGNsYXNzIEFzeW5jU2NoZWR1bGVyIGV4dGVuZHMgU2NoZWR1bGVyIHtcbiAgcHVibGljIGFjdGlvbnM6IEFycmF5PEFzeW5jQWN0aW9uPGFueT4+ID0gW107XG4gIC8qKlxuICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgU2NoZWR1bGVyIGlzIGN1cnJlbnRseSBleGVjdXRpbmcgYSBiYXRjaCBvZlxuICAgKiBxdWV1ZWQgYWN0aW9ucy5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIF9hY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEFuIGludGVybmFsIElEIHVzZWQgdG8gdHJhY2sgdGhlIGxhdGVzdCBhc3luY2hyb25vdXMgdGFzayBzdWNoIGFzIHRob3NlXG4gICAqIGNvbWluZyBmcm9tIGBzZXRUaW1lb3V0YCwgYHNldEludGVydmFsYCwgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAsIGFuZFxuICAgKiBvdGhlcnMuXG4gICAqIEB0eXBlIHthbnl9XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIF9zY2hlZHVsZWQ6IFRpbWVySGFuZGxlIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFNjaGVkdWxlckFjdGlvbjogdHlwZW9mIEFjdGlvbiwgbm93OiAoKSA9PiBudW1iZXIgPSBTY2hlZHVsZXIubm93KSB7XG4gICAgc3VwZXIoU2NoZWR1bGVyQWN0aW9uLCBub3cpO1xuICB9XG5cbiAgcHVibGljIGZsdXNoKGFjdGlvbjogQXN5bmNBY3Rpb248YW55Pik6IHZvaWQge1xuICAgIGNvbnN0IHsgYWN0aW9ucyB9ID0gdGhpcztcblxuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBlcnJvcjogYW55O1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG5cbiAgICBkbyB7XG4gICAgICBpZiAoKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IHdoaWxlICgoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpISkpOyAvLyBleGhhdXN0IHRoZSBzY2hlZHVsZXIgcXVldWVcblxuICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB3aGlsZSAoKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSEpKSB7XG4gICAgICAgIGFjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgQXN5bmNBY3Rpb24gfSBmcm9tICcuL0FzeW5jQWN0aW9uJztcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG5cbi8qKlxuICpcbiAqIEFzeW5jIFNjaGVkdWxlclxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5TY2hlZHVsZSB0YXNrIGFzIGlmIHlvdSB1c2VkIHNldFRpbWVvdXQodGFzaywgZHVyYXRpb24pPC9zcGFuPlxuICpcbiAqIGBhc3luY2Agc2NoZWR1bGVyIHNjaGVkdWxlcyB0YXNrcyBhc3luY2hyb25vdXNseSwgYnkgcHV0dGluZyB0aGVtIG9uIHRoZSBKYXZhU2NyaXB0XG4gKiBldmVudCBsb29wIHF1ZXVlLiBJdCBpcyBiZXN0IHVzZWQgdG8gZGVsYXkgdGFza3MgaW4gdGltZSBvciB0byBzY2hlZHVsZSB0YXNrcyByZXBlYXRpbmdcbiAqIGluIGludGVydmFscy5cbiAqXG4gKiBJZiB5b3UganVzdCB3YW50IHRvIFwiZGVmZXJcIiB0YXNrLCB0aGF0IGlzIHRvIHBlcmZvcm0gaXQgcmlnaHQgYWZ0ZXIgY3VycmVudGx5XG4gKiBleGVjdXRpbmcgc3luY2hyb25vdXMgY29kZSBlbmRzIChjb21tb25seSBhY2hpZXZlZCBieSBgc2V0VGltZW91dChkZWZlcnJlZFRhc2ssIDApYCksXG4gKiBiZXR0ZXIgY2hvaWNlIHdpbGwgYmUgdGhlIHtAbGluayBhc2FwU2NoZWR1bGVyfSBzY2hlZHVsZXIuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqIFVzZSBhc3luYyBzY2hlZHVsZXIgdG8gZGVsYXkgdGFza1xuICogYGBgdHNcbiAqIGltcG9ydCB7IGFzeW5jU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgdGFzayA9ICgpID0+IGNvbnNvbGUubG9nKCdpdCB3b3JrcyEnKTtcbiAqXG4gKiBhc3luY1NjaGVkdWxlci5zY2hlZHVsZSh0YXNrLCAyMDAwKTtcbiAqXG4gKiAvLyBBZnRlciAyIHNlY29uZHMgbG9nczpcbiAqIC8vIFwiaXQgd29ya3MhXCJcbiAqIGBgYFxuICpcbiAqIFVzZSBhc3luYyBzY2hlZHVsZXIgdG8gcmVwZWF0IHRhc2sgaW4gaW50ZXJ2YWxzXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgYXN5bmNTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBmdW5jdGlvbiB0YXNrKHN0YXRlKSB7XG4gKiAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAqICAgdGhpcy5zY2hlZHVsZShzdGF0ZSArIDEsIDEwMDApOyAvLyBgdGhpc2AgcmVmZXJlbmNlcyBjdXJyZW50bHkgZXhlY3V0aW5nIEFjdGlvbixcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGljaCB3ZSByZXNjaGVkdWxlIHdpdGggbmV3IHN0YXRlIGFuZCBkZWxheVxuICogfVxuICpcbiAqIGFzeW5jU2NoZWR1bGVyLnNjaGVkdWxlKHRhc2ssIDMwMDAsIDApO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAwIGFmdGVyIDNzXG4gKiAvLyAxIGFmdGVyIDRzXG4gKiAvLyAyIGFmdGVyIDVzXG4gKiAvLyAzIGFmdGVyIDZzXG4gKiBgYGBcbiAqL1xuXG5leHBvcnQgY29uc3QgYXN5bmNTY2hlZHVsZXIgPSBuZXcgQXN5bmNTY2hlZHVsZXIoQXN5bmNBY3Rpb24pO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFJlbmFtZWQgdG8ge0BsaW5rIGFzeW5jU2NoZWR1bGVyfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICovXG5leHBvcnQgY29uc3QgYXN5bmMgPSBhc3luY1NjaGVkdWxlcjtcbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIEEgc2ltcGxlIE9ic2VydmFibGUgdGhhdCBlbWl0cyBubyBpdGVtcyB0byB0aGUgT2JzZXJ2ZXIgYW5kIGltbWVkaWF0ZWx5XG4gKiBlbWl0cyBhIGNvbXBsZXRlIG5vdGlmaWNhdGlvbi5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+SnVzdCBlbWl0cyAnY29tcGxldGUnLCBhbmQgbm90aGluZyBlbHNlLjwvc3Bhbj5cbiAqXG4gKiAhW10oZW1wdHkucG5nKVxuICpcbiAqIEEgc2ltcGxlIE9ic2VydmFibGUgdGhhdCBvbmx5IGVtaXRzIHRoZSBjb21wbGV0ZSBub3RpZmljYXRpb24uIEl0IGNhbiBiZSB1c2VkXG4gKiBmb3IgY29tcG9zaW5nIHdpdGggb3RoZXIgT2JzZXJ2YWJsZXMsIHN1Y2ggYXMgaW4gYSB7QGxpbmsgbWVyZ2VNYXB9LlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogTG9nIGNvbXBsZXRlIG5vdGlmaWNhdGlvblxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBFTVBUWSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIEVNUFRZLnN1YnNjcmliZSh7XG4gKiAgIG5leHQ6ICgpID0+IGNvbnNvbGUubG9nKCdOZXh0JyksXG4gKiAgIGNvbXBsZXRlOiAoKSA9PiBjb25zb2xlLmxvZygnQ29tcGxldGUhJylcbiAqIH0pO1xuICpcbiAqIC8vIE91dHB1dHNcbiAqIC8vIENvbXBsZXRlIVxuICogYGBgXG4gKlxuICogRW1pdCB0aGUgbnVtYmVyIDcsIHRoZW4gY29tcGxldGVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgRU1QVFksIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHJlc3VsdCA9IEVNUFRZLnBpcGUoc3RhcnRXaXRoKDcpKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gT3V0cHV0c1xuICogLy8gN1xuICogYGBgXG4gKlxuICogTWFwIGFuZCBmbGF0dGVuIG9ubHkgb2RkIG51bWJlcnMgdG8gdGhlIHNlcXVlbmNlIGAnYSdgLCBgJ2InYCwgYCdjJ2BcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIG1lcmdlTWFwLCBvZiwgRU1QVFkgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBpbnRlcnZhbCQgPSBpbnRlcnZhbCgxMDAwKTtcbiAqIGNvbnN0IHJlc3VsdCA9IGludGVydmFsJC5waXBlKFxuICogICBtZXJnZU1hcCh4ID0+IHggJSAyID09PSAxID8gb2YoJ2EnLCAnYicsICdjJykgOiBFTVBUWSksXG4gKiApO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBSZXN1bHRzIGluIHRoZSBmb2xsb3dpbmcgdG8gdGhlIGNvbnNvbGU6XG4gKiAvLyB4IGlzIGVxdWFsIHRvIHRoZSBjb3VudCBvbiB0aGUgaW50ZXJ2YWwsIGUuZy4gKDAsIDEsIDIsIDMsIC4uLilcbiAqIC8vIHggd2lsbCBvY2N1ciBldmVyeSAxMDAwbXNcbiAqIC8vIGlmIHggJSAyIGlzIGVxdWFsIHRvIDEsIHByaW50IGEsIGIsIGMgKGVhY2ggb24gaXRzIG93bilcbiAqIC8vIGlmIHggJSAyIGlzIG5vdCBlcXVhbCB0byAxLCBub3RoaW5nIHdpbGwgYmUgb3V0cHV0XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBPYnNlcnZhYmxlfVxuICogQHNlZSB7QGxpbmsgTkVWRVJ9XG4gKiBAc2VlIHtAbGluayBvZn1cbiAqIEBzZWUge0BsaW5rIHRocm93RXJyb3J9XG4gKi9cbmV4cG9ydCBjb25zdCBFTVBUWSA9IG5ldyBPYnNlcnZhYmxlPG5ldmVyPigoc3Vic2NyaWJlcikgPT4gc3Vic2NyaWJlci5jb21wbGV0ZSgpKTtcblxuLyoqXG4gKiBAcGFyYW0gc2NoZWR1bGVyIEEge0BsaW5rIFNjaGVkdWxlckxpa2V9IHRvIHVzZSBmb3Igc2NoZWR1bGluZ1xuICogdGhlIGVtaXNzaW9uIG9mIHRoZSBjb21wbGV0ZSBub3RpZmljYXRpb24uXG4gKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHRoZSB7QGxpbmsgRU1QVFl9IGNvbnN0YW50IG9yIHtAbGluayBzY2hlZHVsZWR9IChlLmcuIGBzY2hlZHVsZWQoW10sIHNjaGVkdWxlcilgKS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW1wdHkoc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gc2NoZWR1bGVyID8gZW1wdHlTY2hlZHVsZWQoc2NoZWR1bGVyKSA6IEVNUFRZO1xufVxuXG5mdW5jdGlvbiBlbXB0eVNjaGVkdWxlZChzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPG5ldmVyPigoc3Vic2NyaWJlcikgPT4gc2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHN1YnNjcmliZXIuY29tcGxldGUoKSkpO1xufVxuIiwgImltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2NoZWR1bGVyKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTY2hlZHVsZXJMaWtlIHtcbiAgcmV0dXJuIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUuc2NoZWR1bGUpO1xufVxuIiwgImltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi9pc1NjaGVkdWxlcic7XG5cbmZ1bmN0aW9uIGxhc3Q8VD4oYXJyOiBUW10pOiBUIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BSZXN1bHRTZWxlY3RvcihhcmdzOiBhbnlbXSk6ICgoLi4uYXJnczogdW5rbm93bltdKSA9PiB1bmtub3duKSB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGxhc3QoYXJncykpID8gYXJncy5wb3AoKSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFNjaGVkdWxlcihhcmdzOiBhbnlbXSk6IFNjaGVkdWxlckxpa2UgfCB1bmRlZmluZWQge1xuICByZXR1cm4gaXNTY2hlZHVsZXIobGFzdChhcmdzKSkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wTnVtYmVyKGFyZ3M6IGFueVtdLCBkZWZhdWx0VmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiB0eXBlb2YgbGFzdChhcmdzKSA9PT0gJ251bWJlcicgPyBhcmdzLnBvcCgpISA6IGRlZmF1bHRWYWx1ZTtcbn1cbiIsICJleHBvcnQgY29uc3QgaXNBcnJheUxpa2UgPSAoPFQ+KHg6IGFueSk6IHggaXMgQXJyYXlMaWtlPFQ+ID0+IHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgeCAhPT0gJ2Z1bmN0aW9uJyk7IiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tIFwiLi9pc0Z1bmN0aW9uXCI7XG5cbi8qKlxuICogVGVzdHMgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgXCJ0aGVubmFibGVcIi5cbiAqIEBwYXJhbSB2YWx1ZSB0aGUgb2JqZWN0IHRvIHRlc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgUHJvbWlzZUxpa2U8YW55PiB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKHZhbHVlPy50aGVuKTtcbn1cbiIsICJpbXBvcnQgeyBJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuLyoqIElkZW50aWZpZXMgYW4gaW5wdXQgYXMgYmVpbmcgT2JzZXJ2YWJsZSAoYnV0IG5vdCBuZWNlc3NhcnkgYW4gUnggT2JzZXJ2YWJsZSkgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0OiBhbnkpOiBpbnB1dCBpcyBJbnRlcm9wT2JzZXJ2YWJsZTxhbnk+IHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oaW5wdXRbU3ltYm9sX29ic2VydmFibGVdKTtcbn1cbiIsICJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXN5bmNJdGVyYWJsZTxUPihvYmo6IGFueSk6IG9iaiBpcyBBc3luY0l0ZXJhYmxlPFQ+IHtcbiAgcmV0dXJuIFN5bWJvbC5hc3luY0l0ZXJhdG9yICYmIGlzRnVuY3Rpb24ob2JqPy5bU3ltYm9sLmFzeW5jSXRlcmF0b3JdKTtcbn1cbiIsICIvKipcbiAqIENyZWF0ZXMgdGhlIFR5cGVFcnJvciB0byB0aHJvdyBpZiBhbiBpbnZhbGlkIG9iamVjdCBpcyBwYXNzZWQgdG8gYGZyb21gIG9yIGBzY2hlZHVsZWRgLlxuICogQHBhcmFtIGlucHV0IFRoZSBvYmplY3QgdGhhdCB3YXMgcGFzc2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQ6IGFueSkge1xuICAvLyBUT0RPOiBXZSBzaG91bGQgY3JlYXRlIGVycm9yIGNvZGVzIHRoYXQgY2FuIGJlIGxvb2tlZCB1cCwgc28gdGhpcyBjYW4gYmUgbGVzcyB2ZXJib3NlLlxuICByZXR1cm4gbmV3IFR5cGVFcnJvcihcbiAgICBgWW91IHByb3ZpZGVkICR7XG4gICAgICBpbnB1dCAhPT0gbnVsbCAmJiB0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnID8gJ2FuIGludmFsaWQgb2JqZWN0JyA6IGAnJHtpbnB1dH0nYFxuICAgIH0gd2hlcmUgYSBzdHJlYW0gd2FzIGV4cGVjdGVkLiBZb3UgY2FuIHByb3ZpZGUgYW4gT2JzZXJ2YWJsZSwgUHJvbWlzZSwgUmVhZGFibGVTdHJlYW0sIEFycmF5LCBBc3luY0l0ZXJhYmxlLCBvciBJdGVyYWJsZS5gXG4gICk7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbEl0ZXJhdG9yKCk6IHN5bWJvbCB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nIHx8ICFTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICByZXR1cm4gJ0BAaXRlcmF0b3InIGFzIGFueTtcbiAgfVxuXG4gIHJldHVybiBTeW1ib2wuaXRlcmF0b3I7XG59XG5cbmV4cG9ydCBjb25zdCBpdGVyYXRvciA9IGdldFN5bWJvbEl0ZXJhdG9yKCk7XG4iLCAiaW1wb3J0IHsgaXRlcmF0b3IgYXMgU3ltYm9sX2l0ZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9sL2l0ZXJhdG9yJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG4vKiogSWRlbnRpZmllcyBhbiBpbnB1dCBhcyBiZWluZyBhbiBJdGVyYWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSXRlcmFibGUoaW5wdXQ6IGFueSk6IGlucHV0IGlzIEl0ZXJhYmxlPGFueT4ge1xuICByZXR1cm4gaXNGdW5jdGlvbihpbnB1dD8uW1N5bWJvbF9pdGVyYXRvcl0pO1xufVxuIiwgImltcG9ydCB7IFJlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24qIHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3I8VD4ocmVhZGFibGVTdHJlYW06IFJlYWRhYmxlU3RyZWFtTGlrZTxUPik6IEFzeW5jR2VuZXJhdG9yPFQ+IHtcbiAgY29uc3QgcmVhZGVyID0gcmVhZGFibGVTdHJlYW0uZ2V0UmVhZGVyKCk7XG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB5aWVsZCB2YWx1ZSE7XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlYWRlci5yZWxlYXNlTG9jaygpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWRhYmxlU3RyZWFtTGlrZTxUPihvYmo6IGFueSk6IG9iaiBpcyBSZWFkYWJsZVN0cmVhbUxpa2U8VD4ge1xuICAvLyBXZSBkb24ndCB3YW50IHRvIHVzZSBpbnN0YW5jZW9mIGNoZWNrcyBiZWNhdXNlIHRoZXkgd291bGQgcmV0dXJuXG4gIC8vIGZhbHNlIGZvciBpbnN0YW5jZXMgZnJvbSBhbm90aGVyIFJlYWxtLCBsaWtlIGFuIDxpZnJhbWU+LlxuICByZXR1cm4gaXNGdW5jdGlvbihvYmo/LmdldFJlYWRlcik7XG59XG4iLCAiaW1wb3J0IHsgaXNBcnJheUxpa2UgfSBmcm9tICcuLi91dGlsL2lzQXJyYXlMaWtlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4uL3V0aWwvaXNQcm9taXNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgT2JzZXJ2ZWRWYWx1ZU9mLCBSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0ludGVyb3BPYnNlcnZhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yIH0gZnJvbSAnLi4vdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yJztcbmltcG9ydCB7IGlzSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzSXRlcmFibGUnO1xuaW1wb3J0IHsgaXNSZWFkYWJsZVN0cmVhbUxpa2UsIHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgcmVwb3J0VW5oYW5kbGVkRXJyb3IgfSBmcm9tICcuLi91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbm5lckZyb208TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PihpbnB1dDogTyk6IE9ic2VydmFibGU8T2JzZXJ2ZWRWYWx1ZU9mPE8+PjtcbmV4cG9ydCBmdW5jdGlvbiBpbm5lckZyb208VD4oaW5wdXQ6IE9ic2VydmFibGVJbnB1dDxUPik6IE9ic2VydmFibGU8VD4ge1xuICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgaWYgKGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbUludGVyb3BPYnNlcnZhYmxlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNQcm9taXNlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21Qcm9taXNlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzQXN5bmNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tQXN5bmNJdGVyYWJsZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21JdGVyYWJsZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc1JlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KTtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBSeEpTIE9ic2VydmFibGUgZnJvbSBhbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIGBTeW1ib2wub2JzZXJ2YWJsZWAuXG4gKiBAcGFyYW0gb2JqIEFuIG9iamVjdCB0aGF0IHByb3Blcmx5IGltcGxlbWVudHMgYFN5bWJvbC5vYnNlcnZhYmxlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21JbnRlcm9wT2JzZXJ2YWJsZTxUPihvYmo6IGFueSkge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICBjb25zdCBvYnMgPSBvYmpbU3ltYm9sX29ic2VydmFibGVdKCk7XG4gICAgaWYgKGlzRnVuY3Rpb24ob2JzLnN1YnNjcmliZSkpIHtcbiAgICAgIHJldHVybiBvYnMuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgYmUgY2F1Z2h0IGJ5IG9ic2VydmFibGUgc3Vic2NyaWJlIGZ1bmN0aW9uIGVycm9yIGhhbmRsaW5nLlxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb3ZpZGVkIG9iamVjdCBkb2VzIG5vdCBjb3JyZWN0bHkgaW1wbGVtZW50IFN5bWJvbC5vYnNlcnZhYmxlJyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFN5bmNocm9ub3VzbHkgZW1pdHMgdGhlIHZhbHVlcyBvZiBhbiBhcnJheSBsaWtlIGFuZCBjb21wbGV0ZXMuXG4gKiBUaGlzIGlzIGV4cG9ydGVkIGJlY2F1c2UgdGhlcmUgYXJlIGNyZWF0aW9uIGZ1bmN0aW9ucyBhbmQgb3BlcmF0b3JzIHRoYXQgbmVlZCB0b1xuICogbWFrZSBkaXJlY3QgdXNlIG9mIHRoZSBzYW1lIGxvZ2ljLCBhbmQgdGhlcmUncyBubyByZWFzb24gdG8gbWFrZSB0aGVtIHJ1biB0aHJvdWdoXG4gKiBgZnJvbWAgY29uZGl0aW9uYWxzIGJlY2F1c2Ugd2UgKmtub3cqIHRoZXkncmUgZGVhbGluZyB3aXRoIGFuIGFycmF5LlxuICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSB0byBlbWl0IHZhbHVlcyBmcm9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQXJyYXlMaWtlPFQ+KGFycmF5OiBBcnJheUxpa2U8VD4pIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgLy8gTG9vcCBvdmVyIHRoZSBhcnJheSBhbmQgZW1pdCBlYWNoIHZhbHVlLiBOb3RlIHR3byB0aGluZ3MgaGVyZTpcbiAgICAvLyAxLiBXZSdyZSBtYWtpbmcgc3VyZSB0aGF0IHRoZSBzdWJzY3JpYmVyIGlzIG5vdCBjbG9zZWQgb24gZWFjaCBsb29wLlxuICAgIC8vICAgIFRoaXMgaXMgc28gd2UgZG9uJ3QgY29udGludWUgbG9vcGluZyBvdmVyIGEgdmVyeSBsYXJnZSBhcnJheSBhZnRlclxuICAgIC8vICAgIHNvbWV0aGluZyBsaWtlIGEgYHRha2VgLCBgdGFrZVdoaWxlYCwgb3Igb3RoZXIgc3luY2hyb25vdXMgdW5zdWJzY3JpcHRpb25cbiAgICAvLyAgICBoYXMgYWxyZWFkeSB1bnN1YnNjcmliZWQuXG4gICAgLy8gMi4gSW4gdGhpcyBmb3JtLCByZWVudHJhbnQgY29kZSBjYW4gYWx0ZXIgdGhhdCBhcnJheSB3ZSdyZSBsb29waW5nIG92ZXIuXG4gICAgLy8gICAgVGhpcyBpcyBhIGtub3duIGlzc3VlLCBidXQgY29uc2lkZXJlZCBhbiBlZGdlIGNhc2UuIFRoZSBhbHRlcm5hdGl2ZSB3b3VsZFxuICAgIC8vICAgIGJlIHRvIGNvcHkgdGhlIGFycmF5IGJlZm9yZSBleGVjdXRpbmcgdGhlIGxvb3AsIGJ1dCB0aGlzIGhhc1xuICAgIC8vICAgIHBlcmZvcm1hbmNlIGltcGxpY2F0aW9ucy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aCAmJiAhc3Vic2NyaWJlci5jbG9zZWQ7IGkrKykge1xuICAgICAgc3Vic2NyaWJlci5uZXh0KGFycmF5W2ldKTtcbiAgICB9XG4gICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Qcm9taXNlPFQ+KHByb21pc2U6IFByb21pc2VMaWtlPFQ+KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIHByb21pc2VcbiAgICAgIC50aGVuKFxuICAgICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycjogYW55KSA9PiBzdWJzY3JpYmVyLmVycm9yKGVycilcbiAgICAgIClcbiAgICAgIC50aGVuKG51bGwsIHJlcG9ydFVuaGFuZGxlZEVycm9yKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSXRlcmFibGU8VD4oaXRlcmFibGU6IEl0ZXJhYmxlPFQ+KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgaXRlcmFibGUpIHtcbiAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUFzeW5jSXRlcmFibGU8VD4oYXN5bmNJdGVyYWJsZTogQXN5bmNJdGVyYWJsZTxUPikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICBwcm9jZXNzKGFzeW5jSXRlcmFibGUsIHN1YnNjcmliZXIpLmNhdGNoKChlcnIpID0+IHN1YnNjcmliZXIuZXJyb3IoZXJyKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJlYWRhYmxlU3RyZWFtTGlrZTxUPihyZWFkYWJsZVN0cmVhbTogUmVhZGFibGVTdHJlYW1MaWtlPFQ+KSB7XG4gIHJldHVybiBmcm9tQXN5bmNJdGVyYWJsZShyZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yKHJlYWRhYmxlU3RyZWFtKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3M8VD4oYXN5bmNJdGVyYWJsZTogQXN5bmNJdGVyYWJsZTxUPiwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikge1xuICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIGFzeW5jSXRlcmFibGUpIHtcbiAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgIC8vIEEgc2lkZS1lZmZlY3QgbWF5IGhhdmUgY2xvc2VkIG91ciBzdWJzY3JpYmVyLFxuICAgIC8vIGNoZWNrIGJlZm9yZSB0aGUgbmV4dCBpdGVyYXRpb24uXG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbn1cbiIsICJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgU2NoZWR1bGVyQWN0aW9uLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVNjaGVkdWxlKFxuICBwYXJlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbixcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlLFxuICB3b3JrOiAoKSA9PiB2b2lkLFxuICBkZWxheTogbnVtYmVyLFxuICByZXBlYXQ6IHRydWVcbik6IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVNjaGVkdWxlKFxuICBwYXJlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbixcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlLFxuICB3b3JrOiAoKSA9PiB2b2lkLFxuICBkZWxheT86IG51bWJlcixcbiAgcmVwZWF0PzogZmFsc2Vcbik6IFN1YnNjcmlwdGlvbjtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTY2hlZHVsZShcbiAgcGFyZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24sXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSxcbiAgd29yazogKCkgPT4gdm9pZCxcbiAgZGVsYXkgPSAwLFxuICByZXBlYXQgPSBmYWxzZVxuKTogU3Vic2NyaXB0aW9uIHwgdm9pZCB7XG4gIGNvbnN0IHNjaGVkdWxlU3Vic2NyaXB0aW9uID0gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICh0aGlzOiBTY2hlZHVsZXJBY3Rpb248YW55Pikge1xuICAgIHdvcmsoKTtcbiAgICBpZiAocmVwZWF0KSB7XG4gICAgICBwYXJlbnRTdWJzY3JpcHRpb24uYWRkKHRoaXMuc2NoZWR1bGUobnVsbCwgZGVsYXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfSwgZGVsYXkpO1xuXG4gIHBhcmVudFN1YnNjcmlwdGlvbi5hZGQoc2NoZWR1bGVTdWJzY3JpcHRpb24pO1xuXG4gIGlmICghcmVwZWF0KSB7XG4gICAgLy8gQmVjYXVzZSB1c2VyLWxhbmQgc2NoZWR1bGVyIGltcGxlbWVudGF0aW9ucyBhcmUgdW5saWtlbHkgdG8gcHJvcGVybHkgcmV1c2VcbiAgICAvLyBBY3Rpb25zIGZvciByZXBlYXQgc2NoZWR1bGluZywgd2UgY2FuJ3QgdHJ1c3QgdGhhdCB0aGUgcmV0dXJuZWQgc3Vic2NyaXB0aW9uXG4gICAgLy8gd2lsbCBjb250cm9sIHJlcGVhdCBzdWJzY3JpcHRpb24gc2NlbmFyaW9zLiBTbyB3ZSdyZSB0cnlpbmcgdG8gYXZvaWQgdXNpbmcgdGhlbVxuICAgIC8vIGluY29ycmVjdGx5IHdpdGhpbiB0aGlzIGxpYnJhcnkuXG4gICAgcmV0dXJuIHNjaGVkdWxlU3Vic2NyaXB0aW9uO1xuICB9XG59XG4iLCAiLyoqIEBwcmV0dGllciAqL1xuaW1wb3J0IHsgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5cbi8qKlxuICogUmUtZW1pdHMgYWxsIG5vdGlmaWNhdGlvbnMgZnJvbSBzb3VyY2UgT2JzZXJ2YWJsZSB3aXRoIHNwZWNpZmllZCBzY2hlZHVsZXIuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkVuc3VyZSBhIHNwZWNpZmljIHNjaGVkdWxlciBpcyB1c2VkLCBmcm9tIG91dHNpZGUgb2YgYW4gT2JzZXJ2YWJsZS48L3NwYW4+XG4gKlxuICogYG9ic2VydmVPbmAgaXMgYW4gb3BlcmF0b3IgdGhhdCBhY2NlcHRzIGEgc2NoZWR1bGVyIGFzIGEgZmlyc3QgcGFyYW1ldGVyLCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gcmVzY2hlZHVsZVxuICogbm90aWZpY2F0aW9ucyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS4gSXQgbWlnaHQgYmUgdXNlZnVsLCBpZiB5b3UgZG8gbm90IGhhdmUgY29udHJvbCBvdmVyXG4gKiBpbnRlcm5hbCBzY2hlZHVsZXIgb2YgYSBnaXZlbiBPYnNlcnZhYmxlLCBidXQgd2FudCB0byBjb250cm9sIHdoZW4gaXRzIHZhbHVlcyBhcmUgZW1pdHRlZCBuZXZlcnRoZWxlc3MuXG4gKlxuICogUmV0dXJuZWQgT2JzZXJ2YWJsZSBlbWl0cyB0aGUgc2FtZSBub3RpZmljYXRpb25zIChuZXh0ZWQgdmFsdWVzLCBjb21wbGV0ZSBhbmQgZXJyb3IgZXZlbnRzKSBhcyB0aGUgc291cmNlIE9ic2VydmFibGUsXG4gKiBidXQgcmVzY2hlZHVsZWQgd2l0aCBwcm92aWRlZCBzY2hlZHVsZXIuIE5vdGUgdGhhdCB0aGlzIGRvZXNuJ3QgbWVhbiB0aGF0IHNvdXJjZSBPYnNlcnZhYmxlcyBpbnRlcm5hbFxuICogc2NoZWR1bGVyIHdpbGwgYmUgcmVwbGFjZWQgaW4gYW55IHdheS4gT3JpZ2luYWwgc2NoZWR1bGVyIHN0aWxsIHdpbGwgYmUgdXNlZCwgYnV0IHdoZW4gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGVtaXRzXG4gKiBub3RpZmljYXRpb24sIGl0IHdpbGwgYmUgaW1tZWRpYXRlbHkgc2NoZWR1bGVkIGFnYWluIC0gdGhpcyB0aW1lIHdpdGggc2NoZWR1bGVyIHBhc3NlZCB0byBgb2JzZXJ2ZU9uYC5cbiAqIEFuIGFudGktcGF0dGVybiB3b3VsZCBiZSBjYWxsaW5nIGBvYnNlcnZlT25gIG9uIE9ic2VydmFibGUgdGhhdCBlbWl0cyBsb3RzIG9mIHZhbHVlcyBzeW5jaHJvbm91c2x5LCB0byBzcGxpdFxuICogdGhhdCBlbWlzc2lvbnMgaW50byBhc3luY2hyb25vdXMgY2h1bmtzLiBGb3IgdGhpcyB0byBoYXBwZW4sIHNjaGVkdWxlciB3b3VsZCBoYXZlIHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUgZGlyZWN0bHkgKHVzdWFsbHkgaW50byB0aGUgb3BlcmF0b3IgdGhhdCBjcmVhdGVzIGl0KS4gYG9ic2VydmVPbmAgc2ltcGx5IGRlbGF5cyBub3RpZmljYXRpb25zIGFcbiAqIGxpdHRsZSBiaXQgbW9yZSwgdG8gZW5zdXJlIHRoYXQgdGhleSBhcmUgZW1pdHRlZCBhdCBleHBlY3RlZCBtb21lbnRzLlxuICpcbiAqIEFzIGEgbWF0dGVyIG9mIGZhY3QsIGBvYnNlcnZlT25gIGFjY2VwdHMgc2Vjb25kIHBhcmFtZXRlciwgd2hpY2ggc3BlY2lmaWVzIGluIG1pbGxpc2Vjb25kcyB3aXRoIHdoYXQgZGVsYXkgbm90aWZpY2F0aW9uc1xuICogd2lsbCBiZSBlbWl0dGVkLiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4ge0BsaW5rIGRlbGF5fSBvcGVyYXRvciBhbmQgYG9ic2VydmVPbmAgaXMgdGhhdCBgb2JzZXJ2ZU9uYFxuICogd2lsbCBkZWxheSBhbGwgbm90aWZpY2F0aW9ucyAtIGluY2x1ZGluZyBlcnJvciBub3RpZmljYXRpb25zIC0gd2hpbGUgYGRlbGF5YCB3aWxsIHBhc3MgdGhyb3VnaCBlcnJvclxuICogZnJvbSBzb3VyY2UgT2JzZXJ2YWJsZSBpbW1lZGlhdGVseSB3aGVuIGl0IGlzIGVtaXR0ZWQuIEluIGdlbmVyYWwgaXQgaXMgaGlnaGx5IHJlY29tbWVuZGVkIHRvIHVzZSBgZGVsYXlgIG9wZXJhdG9yXG4gKiBmb3IgYW55IGtpbmQgb2YgZGVsYXlpbmcgb2YgdmFsdWVzIGluIHRoZSBzdHJlYW0sIHdoaWxlIHVzaW5nIGBvYnNlcnZlT25gIHRvIHNwZWNpZnkgd2hpY2ggc2NoZWR1bGVyIHNob3VsZCBiZSB1c2VkXG4gKiBmb3Igbm90aWZpY2F0aW9uIGVtaXNzaW9ucyBpbiBnZW5lcmFsLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBFbnN1cmUgdmFsdWVzIGluIHN1YnNjcmliZSBhcmUgY2FsbGVkIGp1c3QgYmVmb3JlIGJyb3dzZXIgcmVwYWludFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgb2JzZXJ2ZU9uLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHNvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAqIHNvbWVEaXYuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogMjAwcHg7YmFja2dyb3VuZDogIzA5Yyc7XG4gKiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNvbWVEaXYpO1xuICogY29uc3QgaW50ZXJ2YWxzID0gaW50ZXJ2YWwoMTApOyAgICAgIC8vIEludGVydmFscyBhcmUgc2NoZWR1bGVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCBhc3luYyBzY2hlZHVsZXIgYnkgZGVmYXVsdC4uLlxuICogaW50ZXJ2YWxzLnBpcGUoXG4gKiAgIG9ic2VydmVPbihhbmltYXRpb25GcmFtZVNjaGVkdWxlcikgLy8gLi4uYnV0IHdlIHdpbGwgb2JzZXJ2ZSBvbiBhbmltYXRpb25GcmFtZVxuICogKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjaGVkdWxlciB0byBlbnN1cmUgc21vb3RoIGFuaW1hdGlvbi5cbiAqIC5zdWJzY3JpYmUodmFsID0+IHtcbiAqICAgc29tZURpdi5zdHlsZS5oZWlnaHQgPSB2YWwgKyAncHgnO1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBkZWxheX1cbiAqXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFNjaGVkdWxlciB0aGF0IHdpbGwgYmUgdXNlZCB0byByZXNjaGVkdWxlIG5vdGlmaWNhdGlvbnMgZnJvbSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSBkZWxheSBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgc3RhdGVzIHdpdGggd2hhdCBkZWxheSBldmVyeSBub3RpZmljYXRpb24gc2hvdWxkIGJlIHJlc2NoZWR1bGVkLlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHNhbWVcbiAqIG5vdGlmaWNhdGlvbnMgYXMgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCBidXQgd2l0aCBwcm92aWRlZCBzY2hlZHVsZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlT248VD4oc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlLCBkZWxheSA9IDApOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD4ge1xuICByZXR1cm4gb3BlcmF0ZSgoc291cmNlLCBzdWJzY3JpYmVyKSA9PiB7XG4gICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihcbiAgICAgICAgc3Vic2NyaWJlcixcbiAgICAgICAgKHZhbHVlKSA9PiBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiBzdWJzY3JpYmVyLm5leHQodmFsdWUpLCBkZWxheSksXG4gICAgICAgICgpID0+IGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHN1YnNjcmliZXIuY29tcGxldGUoKSwgZGVsYXkpLFxuICAgICAgICAoZXJyKSA9PiBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiBzdWJzY3JpYmVyLmVycm9yKGVyciksIGRlbGF5KVxuICAgICAgKVxuICAgICk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IHN1YnNjcmliZXMgT2JzZXJ2ZXJzIHRvIHRoaXMgT2JzZXJ2YWJsZSBvbiB0aGUgc3BlY2lmaWVkIHtAbGluayBTY2hlZHVsZXJMaWtlfS5cbiAqXG4gKiBXaXRoIGBzdWJzY3JpYmVPbmAgeW91IGNhbiBkZWNpZGUgd2hhdCB0eXBlIG9mIHNjaGVkdWxlciBhIHNwZWNpZmljIE9ic2VydmFibGUgd2lsbCBiZSB1c2luZyB3aGVuIGl0IGlzIHN1YnNjcmliZWQgdG8uXG4gKlxuICogU2NoZWR1bGVycyBjb250cm9sIHRoZSBzcGVlZCBhbmQgb3JkZXIgb2YgZW1pc3Npb25zIHRvIG9ic2VydmVycyBmcm9tIGFuIE9ic2VydmFibGUgc3RyZWFtLlxuICpcbiAqICFbXShzdWJzY3JpYmVPbi5wbmcpXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIEdpdmVuIHRoZSBmb2xsb3dpbmcgY29kZTpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgYSA9IG9mKDEsIDIsIDMpO1xuICogY29uc3QgYiA9IG9mKDQsIDUsIDYpO1xuICpcbiAqIG1lcmdlKGEsIGIpLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gKlxuICogLy8gT3V0cHV0c1xuICogLy8gMVxuICogLy8gMlxuICogLy8gM1xuICogLy8gNFxuICogLy8gNVxuICogLy8gNlxuICogYGBgXG4gKlxuICogQm90aCBPYnNlcnZhYmxlIGBhYCBhbmQgYGJgIHdpbGwgZW1pdCB0aGVpciB2YWx1ZXMgZGlyZWN0bHkgYW5kIHN5bmNocm9ub3VzbHkgb25jZSB0aGV5IGFyZSBzdWJzY3JpYmVkIHRvLlxuICpcbiAqIElmIHdlIGluc3RlYWQgdXNlIHRoZSBgc3Vic2NyaWJlT25gIG9wZXJhdG9yIGRlY2xhcmluZyB0aGF0IHdlIHdhbnQgdG8gdXNlIHRoZSB7QGxpbmsgYXN5bmNTY2hlZHVsZXJ9IGZvciB2YWx1ZXMgZW1pdHRlZCBieSBPYnNlcnZhYmxlIGBhYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIHN1YnNjcmliZU9uLCBhc3luY1NjaGVkdWxlciwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBhID0gb2YoMSwgMiwgMykucGlwZShzdWJzY3JpYmVPbihhc3luY1NjaGVkdWxlcikpO1xuICogY29uc3QgYiA9IG9mKDQsIDUsIDYpO1xuICpcbiAqIG1lcmdlKGEsIGIpLnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gKlxuICogLy8gT3V0cHV0c1xuICogLy8gNFxuICogLy8gNVxuICogLy8gNlxuICogLy8gMVxuICogLy8gMlxuICogLy8gM1xuICogYGBgXG4gKlxuICogVGhlIHJlYXNvbiBmb3IgdGhpcyBpcyB0aGF0IE9ic2VydmFibGUgYGJgIGVtaXRzIGl0cyB2YWx1ZXMgZGlyZWN0bHkgYW5kIHN5bmNocm9ub3VzbHkgbGlrZSBiZWZvcmVcbiAqIGJ1dCB0aGUgZW1pc3Npb25zIGZyb20gYGFgIGFyZSBzY2hlZHVsZWQgb24gdGhlIGV2ZW50IGxvb3AgYmVjYXVzZSB3ZSBhcmUgbm93IHVzaW5nIHRoZSB7QGxpbmsgYXN5bmNTY2hlZHVsZXJ9IGZvciB0aGF0IHNwZWNpZmljIE9ic2VydmFibGUuXG4gKlxuICogQHBhcmFtIHNjaGVkdWxlciBUaGUge0BsaW5rIFNjaGVkdWxlckxpa2V9IHRvIHBlcmZvcm0gc3Vic2NyaXB0aW9uIGFjdGlvbnMgb24uXG4gKiBAcGFyYW0gZGVsYXkgQSBkZWxheSB0byBwYXNzIHRvIHRoZSBzY2hlZHVsZXIgdG8gZGVsYXkgc3Vic2NyaXB0aW9uc1xuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIG1vZGlmaWVkIHNvIHRoYXQgaXRzXG4gKiBzdWJzY3JpcHRpb25zIGhhcHBlbiBvbiB0aGUgc3BlY2lmaWVkIHtAbGluayBTY2hlZHVsZXJMaWtlfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZU9uPFQ+KHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSwgZGVsYXk6IG51bWJlciA9IDApOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD4ge1xuICByZXR1cm4gb3BlcmF0ZSgoc291cmNlLCBzdWJzY3JpYmVyKSA9PiB7XG4gICAgc3Vic2NyaWJlci5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlciksIGRlbGF5KSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IG9ic2VydmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9vYnNlcnZlT24nO1xuaW1wb3J0IHsgc3Vic2NyaWJlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvc3Vic2NyaWJlT24nO1xuaW1wb3J0IHsgSW50ZXJvcE9ic2VydmFibGUsIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZU9ic2VydmFibGU8VD4oaW5wdXQ6IEludGVyb3BPYnNlcnZhYmxlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgcmV0dXJuIGlubmVyRnJvbShpbnB1dCkucGlwZShzdWJzY3JpYmVPbihzY2hlZHVsZXIpLCBvYnNlcnZlT24oc2NoZWR1bGVyKSk7XG59XG4iLCAiaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgb2JzZXJ2ZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL29ic2VydmVPbic7XG5pbXBvcnQgeyBzdWJzY3JpYmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9zdWJzY3JpYmVPbic7XG5pbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVQcm9taXNlPFQ+KGlucHV0OiBQcm9taXNlTGlrZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBpbm5lckZyb20oaW5wdXQpLnBpcGUoc3Vic2NyaWJlT24oc2NoZWR1bGVyKSwgb2JzZXJ2ZU9uKHNjaGVkdWxlcikpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUFycmF5PFQ+KGlucHV0OiBBcnJheUxpa2U8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oKHN1YnNjcmliZXIpID0+IHtcbiAgICAvLyBUaGUgY3VycmVudCBhcnJheSBpbmRleC5cbiAgICBsZXQgaSA9IDA7XG4gICAgLy8gU3RhcnQgaXRlcmF0aW5nIG92ZXIgdGhlIGFycmF5IGxpa2Ugb24gYSBzY2hlZHVsZS5cbiAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpID09PSBpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBoaXQgdGhlIGVuZCBvZiB0aGUgYXJyYXkgbGlrZSBpbiB0aGVcbiAgICAgICAgLy8gcHJldmlvdXMgam9iLCB3ZSBjYW4gY29tcGxldGUuXG4gICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSBsZXQncyBuZXh0IHRoZSB2YWx1ZSBhdCB0aGUgY3VycmVudCBpbmRleCxcbiAgICAgICAgLy8gdGhlbiBpbmNyZW1lbnQgb3VyIGluZGV4LlxuICAgICAgICBzdWJzY3JpYmVyLm5leHQoaW5wdXRbaSsrXSk7XG4gICAgICAgIC8vIElmIHRoZSBsYXN0IGVtaXNzaW9uIGRpZG4ndCBjYXVzZSB1cyB0byBjbG9zZSB0aGUgc3Vic2NyaWJlclxuICAgICAgICAvLyAodmlhIHRha2Ugb3Igc29tZSBzaWRlIGVmZmVjdCksIHJlc2NoZWR1bGUgdGhlIGpvYiBhbmQgd2UnbGxcbiAgICAgICAgLy8gbWFrZSBhbm90aGVyIHBhc3MuXG4gICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcblxuLyoqXG4gKiBVc2VkIGluIHtAbGluayBzY2hlZHVsZWR9IHRvIGNyZWF0ZSBhbiBvYnNlcnZhYmxlIGZyb20gYW4gSXRlcmFibGUuXG4gKiBAcGFyYW0gaW5wdXQgVGhlIGl0ZXJhYmxlIHRvIGNyZWF0ZSBhbiBvYnNlcnZhYmxlIGZyb21cbiAqIEBwYXJhbSBzY2hlZHVsZXIgVGhlIHNjaGVkdWxlciB0byB1c2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlSXRlcmFibGU8VD4oaW5wdXQ6IEl0ZXJhYmxlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgbGV0IGl0ZXJhdG9yOiBJdGVyYXRvcjxULCBUPjtcblxuICAgIC8vIFNjaGVkdWxlIHRoZSBpbml0aWFsIGNyZWF0aW9uIG9mIHRoZSBpdGVyYXRvciBmcm9tXG4gICAgLy8gdGhlIGl0ZXJhYmxlLiBUaGlzIGlzIHNvIHRoZSBjb2RlIGluIHRoZSBpdGVyYWJsZSBpc1xuICAgIC8vIG5vdCBjYWxsZWQgdW50aWwgdGhlIHNjaGVkdWxlZCBqb2IgZmlyZXMuXG4gICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4ge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBpdGVyYXRvci5cbiAgICAgIGl0ZXJhdG9yID0gKGlucHV0IGFzIGFueSlbU3ltYm9sX2l0ZXJhdG9yXSgpO1xuXG4gICAgICBleGVjdXRlU2NoZWR1bGUoXG4gICAgICAgIHN1YnNjcmliZXIsXG4gICAgICAgIHNjaGVkdWxlcixcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCB2YWx1ZTogVDtcbiAgICAgICAgICBsZXQgZG9uZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gUHVsbCB0aGUgdmFsdWUgb3V0IG9mIHRoZSBpdGVyYXRvclxuICAgICAgICAgICAgKHsgdmFsdWUsIGRvbmUgfSA9IGl0ZXJhdG9yLm5leHQoKSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBXZSBnb3QgYW4gZXJyb3Igd2hpbGUgcHVsbGluZyBmcm9tIHRoZSBpdGVyYXRvclxuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAvLyBJZiBpdCBpcyBcImRvbmVcIiB3ZSBqdXN0IGNvbXBsZXRlLiBUaGlzIG1pbWljcyB0aGVcbiAgICAgICAgICAgIC8vIGJlaGF2aW9yIG9mIEphdmFTY3JpcHQncyBgZm9yLi5vZmAgY29uc3VtcHRpb24gb2ZcbiAgICAgICAgICAgIC8vIGl0ZXJhYmxlcywgd2hpY2ggd2lsbCBub3QgZW1pdCB0aGUgdmFsdWUgZnJvbSBhbiBpdGVyYXRvclxuICAgICAgICAgICAgLy8gcmVzdWx0IG9mIGB7IGRvbmU6IHRydWU6IHZhbHVlOiAnaGVyZScgfWAuXG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoZSBpdGVyYWJsZSBpcyBub3QgZG9uZSwgZW1pdCB0aGUgdmFsdWUuXG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgMCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIER1cmluZyBmaW5hbGl6YXRpb24sIGlmIHdlIHNlZSB0aGlzIGl0ZXJhdG9yIGhhcyBhIGByZXR1cm5gIG1ldGhvZCxcbiAgICAvLyB0aGVuIHdlIGtub3cgaXQgaXMgYSBHZW5lcmF0b3IsIGFuZCBub3QganVzdCBhbiBJdGVyYXRvci4gU28gd2UgY2FsbFxuICAgIC8vIHRoZSBgcmV0dXJuKClgIGZ1bmN0aW9uLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgYW55IGBmaW5hbGx5IHsgfWAgYmxvY2tzXG4gICAgLy8gaW5zaWRlIG9mIHRoZSBnZW5lcmF0b3Igd2UgY2FuIGhpdCB3aWxsIGJlIGhpdCBwcm9wZXJseS5cbiAgICByZXR1cm4gKCkgPT4gaXNGdW5jdGlvbihpdGVyYXRvcj8ucmV0dXJuKSAmJiBpdGVyYXRvci5yZXR1cm4oKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlQXN5bmNJdGVyYWJsZTxUPihpbnB1dDogQXN5bmNJdGVyYWJsZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIGlmICghaW5wdXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0ZXJhYmxlIGNhbm5vdCBiZSBudWxsJyk7XG4gIH1cbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSBpbnB1dFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTtcbiAgICAgIGV4ZWN1dGVTY2hlZHVsZShcbiAgICAgICAgc3Vic2NyaWJlcixcbiAgICAgICAgc2NoZWR1bGVyLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaXRlcmF0b3IubmV4dCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCByZW1vdmUgdGhlIHN1YnNjcmlwdGlvbnMgZnJvbVxuICAgICAgICAgICAgICAvLyB0aGUgcGFyZW50IHN1YnNjcmlwdGlvbi5cbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIDAsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IFNjaGVkdWxlckxpa2UsIFJlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IHNjaGVkdWxlQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4vc2NoZWR1bGVBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlPFQ+KGlucHV0OiBSZWFkYWJsZVN0cmVhbUxpa2U8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gc2NoZWR1bGVBc3luY0l0ZXJhYmxlKHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IoaW5wdXQpLCBzY2hlZHVsZXIpO1xufVxuIiwgImltcG9ydCB7IHNjaGVkdWxlT2JzZXJ2YWJsZSB9IGZyb20gJy4vc2NoZWR1bGVPYnNlcnZhYmxlJztcbmltcG9ydCB7IHNjaGVkdWxlUHJvbWlzZSB9IGZyb20gJy4vc2NoZWR1bGVQcm9taXNlJztcbmltcG9ydCB7IHNjaGVkdWxlQXJyYXkgfSBmcm9tICcuL3NjaGVkdWxlQXJyYXknO1xuaW1wb3J0IHsgc2NoZWR1bGVJdGVyYWJsZSB9IGZyb20gJy4vc2NoZWR1bGVJdGVyYWJsZSc7XG5pbXBvcnQgeyBzY2hlZHVsZUFzeW5jSXRlcmFibGUgfSBmcm9tICcuL3NjaGVkdWxlQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBpc0ludGVyb3BPYnNlcnZhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4uL3V0aWwvaXNQcm9taXNlJztcbmltcG9ydCB7IGlzQXJyYXlMaWtlIH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5TGlrZSc7XG5pbXBvcnQgeyBpc0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0l0ZXJhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yIH0gZnJvbSAnLi4vdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yJztcbmltcG9ydCB7IGlzUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5pbXBvcnQgeyBzY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4vc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UnO1xuXG4vKipcbiAqIENvbnZlcnRzIGZyb20gYSBjb21tb24ge0BsaW5rIE9ic2VydmFibGVJbnB1dH0gdHlwZSB0byBhbiBvYnNlcnZhYmxlIHdoZXJlIHN1YnNjcmlwdGlvbiBhbmQgZW1pc3Npb25zXG4gKiBhcmUgc2NoZWR1bGVkIG9uIHRoZSBwcm92aWRlZCBzY2hlZHVsZXIuXG4gKlxuICogQHNlZSB7QGxpbmsgZnJvbX1cbiAqIEBzZWUge0BsaW5rIG9mfVxuICpcbiAqIEBwYXJhbSBpbnB1dCBUaGUgb2JzZXJ2YWJsZSwgYXJyYXksIHByb21pc2UsIGl0ZXJhYmxlLCBldGMgeW91IHdvdWxkIGxpa2UgdG8gc2NoZWR1bGVcbiAqIEBwYXJhbSBzY2hlZHVsZXIgVGhlIHNjaGVkdWxlciB0byB1c2UgdG8gc2NoZWR1bGUgdGhlIHN1YnNjcmlwdGlvbiBhbmQgZW1pc3Npb25zIGZyb21cbiAqIHRoZSByZXR1cm5lZCBvYnNlcnZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVkPFQ+KGlucHV0OiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8VD4ge1xuICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgIGlmIChpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlT2JzZXJ2YWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc1Byb21pc2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVQcm9taXNlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNBc3luY0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlQXN5bmNJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGlzSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGlzUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgfVxuICB0aHJvdyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dCk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0LCBTY2hlZHVsZXJMaWtlLCBPYnNlcnZlZFZhbHVlT2YgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBzY2hlZHVsZWQgfSBmcm9tICcuLi9zY2hlZHVsZWQvc2NoZWR1bGVkJztcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4vaW5uZXJGcm9tJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZyb208TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PihpbnB1dDogTyk6IE9ic2VydmFibGU8T2JzZXJ2ZWRWYWx1ZU9mPE8+Pjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHNjaGVkdWxlcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGBzY2hlZHVsZWRgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tPE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oaW5wdXQ6IE8sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSB8IHVuZGVmaW5lZCk6IE9ic2VydmFibGU8T2JzZXJ2ZWRWYWx1ZU9mPE8+PjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIE9ic2VydmFibGUgZnJvbSBhbiBBcnJheSwgYW4gYXJyYXktbGlrZSBvYmplY3QsIGEgUHJvbWlzZSwgYW4gaXRlcmFibGUgb2JqZWN0LCBvciBhbiBPYnNlcnZhYmxlLWxpa2Ugb2JqZWN0LlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5Db252ZXJ0cyBhbG1vc3QgYW55dGhpbmcgdG8gYW4gT2JzZXJ2YWJsZS48L3NwYW4+XG4gKlxuICogIVtdKGZyb20ucG5nKVxuICpcbiAqIGBmcm9tYCBjb252ZXJ0cyB2YXJpb3VzIG90aGVyIG9iamVjdHMgYW5kIGRhdGEgdHlwZXMgaW50byBPYnNlcnZhYmxlcy4gSXQgYWxzbyBjb252ZXJ0cyBhIFByb21pc2UsIGFuIGFycmF5LWxpa2UsIG9yIGFuXG4gKiA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvSXRlcmF0aW9uX3Byb3RvY29scyNpdGVyYWJsZVwiIHRhcmdldD1cIl9ibGFua1wiPml0ZXJhYmxlPC9hPlxuICogb2JqZWN0IGludG8gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBpdGVtcyBpbiB0aGF0IHByb21pc2UsIGFycmF5LCBvciBpdGVyYWJsZS4gQSBTdHJpbmcsIGluIHRoaXMgY29udGV4dCwgaXMgdHJlYXRlZFxuICogYXMgYW4gYXJyYXkgb2YgY2hhcmFjdGVycy4gT2JzZXJ2YWJsZS1saWtlIG9iamVjdHMgKGNvbnRhaW5zIGEgZnVuY3Rpb24gbmFtZWQgd2l0aCB0aGUgRVMyMDE1IFN5bWJvbCBmb3IgT2JzZXJ2YWJsZSkgY2FuIGFsc28gYmVcbiAqIGNvbnZlcnRlZCB0aHJvdWdoIHRoaXMgb3BlcmF0b3IuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBDb252ZXJ0cyBhbiBhcnJheSB0byBhbiBPYnNlcnZhYmxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBhcnJheSA9IFsxMCwgMjAsIDMwXTtcbiAqIGNvbnN0IHJlc3VsdCA9IGZyb20oYXJyYXkpO1xuICpcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gTG9nczpcbiAqIC8vIDEwXG4gKiAvLyAyMFxuICogLy8gMzBcbiAqIGBgYFxuICpcbiAqIENvbnZlcnQgYW4gaW5maW5pdGUgaXRlcmFibGUgKGZyb20gYSBnZW5lcmF0b3IpIHRvIGFuIE9ic2VydmFibGVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbSwgdGFrZSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGZ1bmN0aW9uKiBnZW5lcmF0ZURvdWJsZXMoc2VlZCkge1xuICogICAgbGV0IGkgPSBzZWVkO1xuICogICAgd2hpbGUgKHRydWUpIHtcbiAqICAgICAgeWllbGQgaTtcbiAqICAgICAgaSA9IDIgKiBpOyAvLyBkb3VibGUgaXRcbiAqICAgIH1cbiAqIH1cbiAqXG4gKiBjb25zdCBpdGVyYXRvciA9IGdlbmVyYXRlRG91YmxlcygzKTtcbiAqIGNvbnN0IHJlc3VsdCA9IGZyb20oaXRlcmF0b3IpLnBpcGUodGFrZSgxMCkpO1xuICpcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gTG9nczpcbiAqIC8vIDNcbiAqIC8vIDZcbiAqIC8vIDEyXG4gKiAvLyAyNFxuICogLy8gNDhcbiAqIC8vIDk2XG4gKiAvLyAxOTJcbiAqIC8vIDM4NFxuICogLy8gNzY4XG4gKiAvLyAxNTM2XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGBhc3luY1NjaGVkdWxlcmBcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbSwgYXN5bmNTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zb2xlLmxvZygnc3RhcnQnKTtcbiAqXG4gKiBjb25zdCBhcnJheSA9IFsxMCwgMjAsIDMwXTtcbiAqIGNvbnN0IHJlc3VsdCA9IGZyb20oYXJyYXksIGFzeW5jU2NoZWR1bGVyKTtcbiAqXG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIGNvbnNvbGUubG9nKCdlbmQnKTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gJ3N0YXJ0J1xuICogLy8gJ2VuZCdcbiAqIC8vIDEwXG4gKiAvLyAyMFxuICogLy8gMzBcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGZyb21FdmVudH1cbiAqIEBzZWUge0BsaW5rIGZyb21FdmVudFBhdHRlcm59XG4gKlxuICogQHBhcmFtIHtPYnNlcnZhYmxlSW5wdXQ8VD59IEEgc3Vic2NyaXB0aW9uIG9iamVjdCwgYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLWxpa2UsXG4gKiBhbiBBcnJheSwgYW4gaXRlcmFibGUsIG9yIGFuIGFycmF5LWxpa2Ugb2JqZWN0IHRvIGJlIGNvbnZlcnRlZC5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyTGlrZX0gQW4gb3B0aW9uYWwge0BsaW5rIFNjaGVkdWxlckxpa2V9IG9uIHdoaWNoIHRvIHNjaGVkdWxlIHRoZSBlbWlzc2lvbiBvZiB2YWx1ZXMuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbTxUPihpbnB1dDogT2JzZXJ2YWJsZUlucHV0PFQ+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiBzY2hlZHVsZXIgPyBzY2hlZHVsZWQoaW5wdXQsIHNjaGVkdWxlcikgOiBpbm5lckZyb20oaW5wdXQpO1xufVxuIiwgIi8qKlxuICogQ2hlY2tzIHRvIHNlZSBpZiBhIHZhbHVlIGlzIG5vdCBvbmx5IGEgYERhdGVgIG9iamVjdCxcbiAqIGJ1dCBhICp2YWxpZCogYERhdGVgIG9iamVjdCB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYVxuICogbnVtYmVyLiBGb3IgZXhhbXBsZSwgYG5ldyBEYXRlKCdibGFoJylgIGlzIGluZGVlZCBhblxuICogYGluc3RhbmNlb2YgRGF0ZWAsIGhvd2V2ZXIgaXQgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBhXG4gKiBudW1iZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRGF0ZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgRGF0ZSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKHZhbHVlIGFzIGFueSk7XG59XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFwPFQsIFI+KHByb2plY3Q6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gUik6IE9wZXJhdG9yRnVuY3Rpb248VCwgUj47XG4vKiogQGRlcHJlY2F0ZWQgVXNlIGEgY2xvc3VyZSBpbnN0ZWFkIG9mIGEgYHRoaXNBcmdgLiBTaWduYXR1cmVzIGFjY2VwdGluZyBhIGB0aGlzQXJnYCB3aWxsIGJlIHJlbW92ZWQgaW4gdjguICovXG5leHBvcnQgZnVuY3Rpb24gbWFwPFQsIFIsIEE+KHByb2plY3Q6ICh0aGlzOiBBLCB2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gUiwgdGhpc0FyZzogQSk6IE9wZXJhdG9yRnVuY3Rpb248VCwgUj47XG5cbi8qKlxuICogQXBwbGllcyBhIGdpdmVuIGBwcm9qZWN0YCBmdW5jdGlvbiB0byBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSwgYW5kIGVtaXRzIHRoZSByZXN1bHRpbmcgdmFsdWVzIGFzIGFuIE9ic2VydmFibGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkxpa2UgW0FycmF5LnByb3RvdHlwZS5tYXAoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvbWFwKSxcbiAqIGl0IHBhc3NlcyBlYWNoIHNvdXJjZSB2YWx1ZSB0aHJvdWdoIGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gdG8gZ2V0XG4gKiBjb3JyZXNwb25kaW5nIG91dHB1dCB2YWx1ZXMuPC9zcGFuPlxuICpcbiAqICFbXShtYXAucG5nKVxuICpcbiAqIFNpbWlsYXIgdG8gdGhlIHdlbGwga25vd24gYEFycmF5LnByb3RvdHlwZS5tYXBgIGZ1bmN0aW9uLCB0aGlzIG9wZXJhdG9yXG4gKiBhcHBsaWVzIGEgcHJvamVjdGlvbiB0byBlYWNoIHZhbHVlIGFuZCBlbWl0cyB0aGF0IHByb2plY3Rpb24gaW4gdGhlIG91dHB1dFxuICogT2JzZXJ2YWJsZS5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogTWFwIGV2ZXJ5IGNsaWNrIHRvIHRoZSBgY2xpZW50WGAgcG9zaXRpb24gb2YgdGhhdCBjbGlja1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIG1hcCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGNsaWNrcyA9IGZyb21FdmVudDxQb2ludGVyRXZlbnQ+KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IHBvc2l0aW9ucyA9IGNsaWNrcy5waXBlKG1hcChldiA9PiBldi5jbGllbnRYKSk7XG4gKlxuICogcG9zaXRpb25zLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIG1hcFRvfVxuICogQHNlZSB7QGxpbmsgcGx1Y2t9XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZTogVCwgaW5kZXg6IG51bWJlcik6IFJ9IHByb2plY3QgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5XG4gKiB0byBlYWNoIGB2YWx1ZWAgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUuIFRoZSBgaW5kZXhgIHBhcmFtZXRlciBpc1xuICogdGhlIG51bWJlciBgaWAgZm9yIHRoZSBpLXRoIGVtaXNzaW9uIHRoYXQgaGFzIGhhcHBlbmVkIHNpbmNlIHRoZVxuICogc3Vic2NyaXB0aW9uLCBzdGFydGluZyBmcm9tIHRoZSBudW1iZXIgYDBgLlxuICogQHBhcmFtIHthbnl9IFt0aGlzQXJnXSBBbiBvcHRpb25hbCBhcmd1bWVudCB0byBkZWZpbmUgd2hhdCBgdGhpc2AgaXMgaW4gdGhlXG4gKiBgcHJvamVjdGAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgdmFsdWVzIGZyb20gdGhlXG4gKiBzb3VyY2UgT2JzZXJ2YWJsZSB0cmFuc2Zvcm1lZCBieSB0aGUgZ2l2ZW4gYHByb2plY3RgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwPFQsIFI+KHByb2plY3Q6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gUiwgdGhpc0FyZz86IGFueSk6IE9wZXJhdG9yRnVuY3Rpb248VCwgUj4ge1xuICByZXR1cm4gb3BlcmF0ZSgoc291cmNlLCBzdWJzY3JpYmVyKSA9PiB7XG4gICAgLy8gVGhlIGluZGV4IG9mIHRoZSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2UuIFVzZWQgd2l0aCBwcm9qZWN0aW9uLlxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgLy8gU3Vic2NyaWJlIHRvIHRoZSBzb3VyY2UsIGFsbCBlcnJvcnMgYW5kIGNvbXBsZXRpb25zIGFyZSBzZW50IGFsb25nXG4gICAgLy8gdG8gdGhlIGNvbnN1bWVyLlxuICAgIHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgKHZhbHVlOiBUKSA9PiB7XG4gICAgICAgIC8vIENhbGwgdGhlIHByb2plY3Rpb24gZnVuY3Rpb24gd2l0aCB0aGUgYXBwcm9wcmlhdGUgdGhpcyBjb250ZXh0LFxuICAgICAgICAvLyBhbmQgc2VuZCB0aGUgcmVzdWx0aW5nIHZhbHVlIHRvIHRoZSBjb25zdW1lci5cbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KHByb2plY3QuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgrKykpO1xuICAgICAgfSlcbiAgICApO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwiLi4vb3BlcmF0b3JzL21hcFwiO1xuXG5jb25zdCB7IGlzQXJyYXkgfSA9IEFycmF5O1xuXG5mdW5jdGlvbiBjYWxsT3JBcHBseTxULCBSPihmbjogKCguLi52YWx1ZXM6IFRbXSkgPT4gUiksIGFyZ3M6IFR8VFtdKTogUiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJncykgPyBmbiguLi5hcmdzKSA6IGZuKGFyZ3MpO1xufVxuXG4vKipcbiAqIFVzZWQgaW4gc2V2ZXJhbCAtLSBtb3N0bHkgZGVwcmVjYXRlZCAtLSBzaXR1YXRpb25zIHdoZXJlIHdlIG5lZWQgdG8gXG4gKiBhcHBseSBhIGxpc3Qgb2YgYXJndW1lbnRzIG9yIGEgc2luZ2xlIGFyZ3VtZW50IHRvIGEgcmVzdWx0IHNlbGVjdG9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwT25lT3JNYW55QXJnczxULCBSPihmbjogKCguLi52YWx1ZXM6IFRbXSkgPT4gUikpOiBPcGVyYXRvckZ1bmN0aW9uPFR8VFtdLCBSPiB7XG4gICAgcmV0dXJuIG1hcChhcmdzID0+IGNhbGxPckFwcGx5KGZuLCBhcmdzKSlcbn0iLCAiY29uc3QgeyBpc0FycmF5IH0gPSBBcnJheTtcbmNvbnN0IHsgZ2V0UHJvdG90eXBlT2YsIHByb3RvdHlwZTogb2JqZWN0UHJvdG8sIGtleXM6IGdldEtleXMgfSA9IE9iamVjdDtcblxuLyoqXG4gKiBVc2VkIGluIGZ1bmN0aW9ucyB3aGVyZSBlaXRoZXIgYSBsaXN0IG9mIGFyZ3VtZW50cywgYSBzaW5nbGUgYXJyYXkgb2YgYXJndW1lbnRzLCBvciBhXG4gKiBkaWN0aW9uYXJ5IG9mIGFyZ3VtZW50cyBjYW4gYmUgcmV0dXJuZWQuIFJldHVybnMgYW4gb2JqZWN0IHdpdGggYW4gYGFyZ3NgIHByb3BlcnR5IHdpdGhcbiAqIHRoZSBhcmd1bWVudHMgaW4gYW4gYXJyYXksIGlmIGl0IGlzIGEgZGljdGlvbmFyeSwgaXQgd2lsbCBhbHNvIHJldHVybiB0aGUgYGtleXNgIGluIGFub3RoZXJcbiAqIHByb3BlcnR5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJnc0FyZ0FycmF5T3JPYmplY3Q8VCwgTyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIFQ+PihhcmdzOiBUW10gfCBbT10gfCBbVFtdXSk6IHsgYXJnczogVFtdOyBrZXlzOiBzdHJpbmdbXSB8IG51bGwgfSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0ID0gYXJnc1swXTtcbiAgICBpZiAoaXNBcnJheShmaXJzdCkpIHtcbiAgICAgIHJldHVybiB7IGFyZ3M6IGZpcnN0LCBrZXlzOiBudWxsIH07XG4gICAgfVxuICAgIGlmIChpc1BPSk8oZmlyc3QpKSB7XG4gICAgICBjb25zdCBrZXlzID0gZ2V0S2V5cyhmaXJzdCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhcmdzOiBrZXlzLm1hcCgoa2V5KSA9PiBmaXJzdFtrZXldKSxcbiAgICAgICAga2V5cyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgYXJnczogYXJncyBhcyBUW10sIGtleXM6IG51bGwgfTtcbn1cblxuZnVuY3Rpb24gaXNQT0pPKG9iajogYW55KTogb2JqIGlzIG9iamVjdCB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gb2JqZWN0UHJvdG87XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdChrZXlzOiBzdHJpbmdbXSwgdmFsdWVzOiBhbnlbXSkge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoKHJlc3VsdCwga2V5LCBpKSA9PiAoKHJlc3VsdFtrZXldID0gdmFsdWVzW2ldKSwgcmVzdWx0KSwge30gYXMgYW55KTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIFNjaGVkdWxlckxpa2UsIE9ic2VydmVkVmFsdWVPZiwgT2JzZXJ2YWJsZUlucHV0VHVwbGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBhcmdzQXJnQXJyYXlPck9iamVjdCB9IGZyb20gJy4uL3V0aWwvYXJnc0FyZ0FycmF5T3JPYmplY3QnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJy4vZnJvbSc7XG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4uL3V0aWwvaWRlbnRpdHknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IG1hcE9uZU9yTWFueUFyZ3MgfSBmcm9tICcuLi91dGlsL21hcE9uZU9yTWFueUFyZ3MnO1xuaW1wb3J0IHsgcG9wUmVzdWx0U2VsZWN0b3IsIHBvcFNjaGVkdWxlciB9IGZyb20gJy4uL3V0aWwvYXJncyc7XG5pbXBvcnQgeyBjcmVhdGVPYmplY3QgfSBmcm9tICcuLi91dGlsL2NyZWF0ZU9iamVjdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuLi9vcGVyYXRvcnMvT3BlcmF0b3JTdWJzY3JpYmVyJztcbmltcG9ydCB7IEFueUNhdGNoZXIgfSBmcm9tICcuLi9BbnlDYXRjaGVyJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcblxuLy8gY29tYmluZUxhdGVzdChhbnkpXG4vLyBXZSBwdXQgdGhpcyBmaXJzdCBiZWNhdXNlIHdlIG5lZWQgdG8gY2F0Y2ggY2FzZXMgd2hlcmUgdGhlIHVzZXIgaGFzIHN1cHBsaWVkXG4vLyBfZXhhY3RseSBgYW55YF8gYXMgdGhlIGFyZ3VtZW50LiBTaW5jZSBgYW55YCBsaXRlcmFsbHkgbWF0Y2hlcyBfYW55dGhpbmdfLFxuLy8gd2UgZG9uJ3Qgd2FudCBpdCB0byByYW5kb21seSBoaXQgb25lIG9mIHRoZSBvdGhlciB0eXBlIHNpZ25hdHVyZXMgYmVsb3csXG4vLyBhcyB3ZSBoYXZlIG5vIGlkZWEgYXQgYnVpbGQtdGltZSB3aGF0IHR5cGUgd2Ugc2hvdWxkIGJlIHJldHVybmluZyB3aGVuIGdpdmVuIGFuIGFueS5cblxuLyoqXG4gKiBZb3UgaGF2ZSBwYXNzZWQgYGFueWAgaGVyZSwgd2UgY2FuJ3QgZmlndXJlIG91dCBpZiBpdCBpc1xuICogYW4gYXJyYXkgb3IgYW4gb2JqZWN0LCBzbyB5b3UncmUgZ2V0dGluZyBgdW5rbm93bmAuIFVzZSBiZXR0ZXIgdHlwZXMuXG4gKiBAcGFyYW0gYXJnIFNvbWV0aGluZyB0eXBlZCBhcyBgYW55YFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxUIGV4dGVuZHMgQW55Q2F0Y2hlcj4oYXJnOiBUKTogT2JzZXJ2YWJsZTx1bmtub3duPjtcblxuLy8gY29tYmluZUxhdGVzdChbYSwgYiwgY10pXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdChzb3VyY2VzOiBbXSk6IE9ic2VydmFibGU8bmV2ZXI+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oc291cmNlczogcmVhZG9ubHkgWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSk6IE9ic2VydmFibGU8QT47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10sIFI+KFxuICBzb3VyY2VzOiByZWFkb25seSBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dLFxuICByZXN1bHRTZWxlY3RvcjogKC4uLnZhbHVlczogQSkgPT4gUixcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlXG4pOiBPYnNlcnZhYmxlPFI+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXSwgUj4oXG4gIHNvdXJjZXM6IHJlYWRvbmx5IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPl0sXG4gIHJlc3VsdFNlbGVjdG9yOiAoLi4udmFsdWVzOiBBKSA9PiBSXG4pOiBPYnNlcnZhYmxlPFI+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgc2NoZWR1bGVyYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYHNjaGVkdWxlZGAgYW5kIGBjb21iaW5lTGF0ZXN0QWxsYC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc2NoZWR1bGVyLWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdPihcbiAgc291cmNlczogcmVhZG9ubHkgWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSxcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlXG4pOiBPYnNlcnZhYmxlPEE+O1xuXG4vLyBjb21iaW5lTGF0ZXN0KGEsIGIsIGMpXG4vKiogQGRlcHJlY2F0ZWQgUGFzcyBhbiBhcnJheSBvZiBzb3VyY2VzIGluc3RlYWQuIFRoZSByZXN0LXBhcmFtZXRlcnMgc2lnbmF0dXJlIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvYXJyYXktYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KC4uLnNvdXJjZXM6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPl0pOiBPYnNlcnZhYmxlPEE+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgc2NoZWR1bGVyYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYHNjaGVkdWxlZGAgYW5kIGBjb21iaW5lTGF0ZXN0QWxsYC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc2NoZWR1bGVyLWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdLCBSPihcbiAgLi4uc291cmNlc0FuZFJlc3VsdFNlbGVjdG9yQW5kU2NoZWR1bGVyOiBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT4sICguLi52YWx1ZXM6IEEpID0+IFIsIFNjaGVkdWxlckxpa2VdXG4pOiBPYnNlcnZhYmxlPFI+O1xuLyoqIEBkZXByZWNhdGVkIFBhc3MgYW4gYXJyYXkgb2Ygc291cmNlcyBpbnN0ZWFkLiBUaGUgcmVzdC1wYXJhbWV0ZXJzIHNpZ25hdHVyZSB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL2FycmF5LWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdLCBSPihcbiAgLi4uc291cmNlc0FuZFJlc3VsdFNlbGVjdG9yOiBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT4sICguLi52YWx1ZXM6IEEpID0+IFJdXG4pOiBPYnNlcnZhYmxlPFI+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgc2NoZWR1bGVyYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYHNjaGVkdWxlZGAgYW5kIGBjb21iaW5lTGF0ZXN0QWxsYC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc2NoZWR1bGVyLWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdPihcbiAgLi4uc291cmNlc0FuZFNjaGVkdWxlcjogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+LCBTY2hlZHVsZXJMaWtlXVxuKTogT2JzZXJ2YWJsZTxBPjtcblxuLy8gY29tYmluZUxhdGVzdCh7YSwgYiwgY30pXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdChzb3VyY2VzT2JqZWN0OiB7IFtLIGluIGFueV06IG5ldmVyIH0pOiBPYnNlcnZhYmxlPG5ldmVyPjtcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4+KFxuICBzb3VyY2VzT2JqZWN0OiBUXG4pOiBPYnNlcnZhYmxlPHsgW0sgaW4ga2V5b2YgVF06IE9ic2VydmVkVmFsdWVPZjxUW0tdPiB9PjtcblxuLyoqXG4gKiBDb21iaW5lcyBtdWx0aXBsZSBPYnNlcnZhYmxlcyB0byBjcmVhdGUgYW4gT2JzZXJ2YWJsZSB3aG9zZSB2YWx1ZXMgYXJlXG4gKiBjYWxjdWxhdGVkIGZyb20gdGhlIGxhdGVzdCB2YWx1ZXMgb2YgZWFjaCBvZiBpdHMgaW5wdXQgT2JzZXJ2YWJsZXMuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPldoZW5ldmVyIGFueSBpbnB1dCBPYnNlcnZhYmxlIGVtaXRzIGEgdmFsdWUsIGl0XG4gKiBjb21wdXRlcyBhIGZvcm11bGEgdXNpbmcgdGhlIGxhdGVzdCB2YWx1ZXMgZnJvbSBhbGwgdGhlIGlucHV0cywgdGhlbiBlbWl0c1xuICogdGhlIG91dHB1dCBvZiB0aGF0IGZvcm11bGEuPC9zcGFuPlxuICpcbiAqICFbXShjb21iaW5lTGF0ZXN0LnBuZylcbiAqXG4gKiBgY29tYmluZUxhdGVzdGAgY29tYmluZXMgdGhlIHZhbHVlcyBmcm9tIGFsbCB0aGUgT2JzZXJ2YWJsZXMgcGFzc2VkIGluIHRoZVxuICogb2JzZXJ2YWJsZXMgYXJyYXkuIFRoaXMgaXMgZG9uZSBieSBzdWJzY3JpYmluZyB0byBlYWNoIE9ic2VydmFibGUgaW4gb3JkZXIgYW5kLFxuICogd2hlbmV2ZXIgYW55IE9ic2VydmFibGUgZW1pdHMsIGNvbGxlY3RpbmcgYW4gYXJyYXkgb2YgdGhlIG1vc3QgcmVjZW50XG4gKiB2YWx1ZXMgZnJvbSBlYWNoIE9ic2VydmFibGUuIFNvIGlmIHlvdSBwYXNzIGBuYCBPYnNlcnZhYmxlcyB0byB0aGlzIG9wZXJhdG9yLFxuICogdGhlIHJldHVybmVkIE9ic2VydmFibGUgd2lsbCBhbHdheXMgZW1pdCBhbiBhcnJheSBvZiBgbmAgdmFsdWVzLCBpbiBhbiBvcmRlclxuICogY29ycmVzcG9uZGluZyB0byB0aGUgb3JkZXIgb2YgdGhlIHBhc3NlZCBPYnNlcnZhYmxlcyAodGhlIHZhbHVlIGZyb20gdGhlIGZpcnN0IE9ic2VydmFibGVcbiAqIHdpbGwgYmUgYXQgaW5kZXggMCBvZiB0aGUgYXJyYXkgYW5kIHNvIG9uKS5cbiAqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiBgY29tYmluZUxhdGVzdGAgYWNjZXB0cyBhbiBhcnJheSBvZiBPYnNlcnZhYmxlcy4gTm90ZSB0aGF0IGFuIGFycmF5IG9mXG4gKiBPYnNlcnZhYmxlcyBpcyBhIGdvb2QgY2hvaWNlLCBpZiB5b3UgZG9uJ3Qga25vdyBiZWZvcmVoYW5kIGhvdyBtYW55IE9ic2VydmFibGVzXG4gKiB5b3Ugd2lsbCBjb21iaW5lLiBQYXNzaW5nIGFuIGVtcHR5IGFycmF5IHdpbGwgcmVzdWx0IGluIGFuIE9ic2VydmFibGUgdGhhdFxuICogY29tcGxldGVzIGltbWVkaWF0ZWx5LlxuICpcbiAqIFRvIGVuc3VyZSB0aGUgb3V0cHV0IGFycmF5IGFsd2F5cyBoYXMgdGhlIHNhbWUgbGVuZ3RoLCBgY29tYmluZUxhdGVzdGAgd2lsbFxuICogYWN0dWFsbHkgd2FpdCBmb3IgYWxsIGlucHV0IE9ic2VydmFibGVzIHRvIGVtaXQgYXQgbGVhc3Qgb25jZSxcbiAqIGJlZm9yZSBpdCBzdGFydHMgZW1pdHRpbmcgcmVzdWx0cy4gVGhpcyBtZWFucyBpZiBzb21lIE9ic2VydmFibGUgZW1pdHNcbiAqIHZhbHVlcyBiZWZvcmUgb3RoZXIgT2JzZXJ2YWJsZXMgc3RhcnRlZCBlbWl0dGluZywgYWxsIHRoZXNlIHZhbHVlcyBidXQgdGhlIGxhc3RcbiAqIHdpbGwgYmUgbG9zdC4gT24gdGhlIG90aGVyIGhhbmQsIGlmIHNvbWUgT2JzZXJ2YWJsZSBkb2VzIG5vdCBlbWl0IGEgdmFsdWUgYnV0XG4gKiBjb21wbGV0ZXMsIHJlc3VsdGluZyBPYnNlcnZhYmxlIHdpbGwgY29tcGxldGUgYXQgdGhlIHNhbWUgbW9tZW50IHdpdGhvdXRcbiAqIGVtaXR0aW5nIGFueXRoaW5nLCBzaW5jZSBpdCB3aWxsIG5vdyBiZSBpbXBvc3NpYmxlIHRvIGluY2x1ZGUgYSB2YWx1ZSBmcm9tIHRoZVxuICogY29tcGxldGVkIE9ic2VydmFibGUgaW4gdGhlIHJlc3VsdGluZyBhcnJheS4gQWxzbywgaWYgc29tZSBpbnB1dCBPYnNlcnZhYmxlIGRvZXNcbiAqIG5vdCBlbWl0IGFueSB2YWx1ZSBhbmQgbmV2ZXIgY29tcGxldGVzLCBgY29tYmluZUxhdGVzdGAgd2lsbCBhbHNvIG5ldmVyIGVtaXRcbiAqIGFuZCBuZXZlciBjb21wbGV0ZSwgc2luY2UsIGFnYWluLCBpdCB3aWxsIHdhaXQgZm9yIGFsbCBzdHJlYW1zIHRvIGVtaXQgc29tZVxuICogdmFsdWUuXG4gKlxuICogSWYgYXQgbGVhc3Qgb25lIE9ic2VydmFibGUgd2FzIHBhc3NlZCB0byBgY29tYmluZUxhdGVzdGAgYW5kIGFsbCBwYXNzZWQgT2JzZXJ2YWJsZXNcbiAqIGVtaXR0ZWQgc29tZXRoaW5nLCB0aGUgcmVzdWx0aW5nIE9ic2VydmFibGUgd2lsbCBjb21wbGV0ZSB3aGVuIGFsbCBjb21iaW5lZFxuICogc3RyZWFtcyBjb21wbGV0ZS4gU28gZXZlbiBpZiBzb21lIE9ic2VydmFibGUgY29tcGxldGVzLCB0aGUgcmVzdWx0IG9mXG4gKiBgY29tYmluZUxhdGVzdGAgd2lsbCBzdGlsbCBlbWl0IHZhbHVlcyB3aGVuIG90aGVyIE9ic2VydmFibGVzIGRvLiBJbiBjYXNlXG4gKiBvZiBhIGNvbXBsZXRlZCBPYnNlcnZhYmxlLCBpdHMgdmFsdWUgZnJvbSBub3cgb24gd2lsbCBhbHdheXMgYmUgdGhlIGxhc3RcbiAqIGVtaXR0ZWQgdmFsdWUuIE9uIHRoZSBvdGhlciBoYW5kLCBpZiBhbnkgT2JzZXJ2YWJsZSBlcnJvcnMsIGBjb21iaW5lTGF0ZXN0YFxuICogd2lsbCBlcnJvciBpbW1lZGlhdGVseSBhcyB3ZWxsLCBhbmQgYWxsIG90aGVyIE9ic2VydmFibGVzIHdpbGwgYmUgdW5zdWJzY3JpYmVkLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogQ29tYmluZSB0d28gdGltZXIgT2JzZXJ2YWJsZXNcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgdGltZXIsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBmaXJzdFRpbWVyID0gdGltZXIoMCwgMTAwMCk7IC8vIGVtaXQgMCwgMSwgMi4uLiBhZnRlciBldmVyeSBzZWNvbmQsIHN0YXJ0aW5nIGZyb20gbm93XG4gKiBjb25zdCBzZWNvbmRUaW1lciA9IHRpbWVyKDUwMCwgMTAwMCk7IC8vIGVtaXQgMCwgMSwgMi4uLiBhZnRlciBldmVyeSBzZWNvbmQsIHN0YXJ0aW5nIDAsNXMgZnJvbSBub3dcbiAqIGNvbnN0IGNvbWJpbmVkVGltZXJzID0gY29tYmluZUxhdGVzdChbZmlyc3RUaW1lciwgc2Vjb25kVGltZXJdKTtcbiAqIGNvbWJpbmVkVGltZXJzLnN1YnNjcmliZSh2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSkpO1xuICogLy8gTG9nc1xuICogLy8gWzAsIDBdIGFmdGVyIDAuNXNcbiAqIC8vIFsxLCAwXSBhZnRlciAxc1xuICogLy8gWzEsIDFdIGFmdGVyIDEuNXNcbiAqIC8vIFsyLCAxXSBhZnRlciAyc1xuICogYGBgXG4gKlxuICogQ29tYmluZSBhIGRpY3Rpb25hcnkgb2YgT2JzZXJ2YWJsZXNcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIGRlbGF5LCBzdGFydFdpdGgsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBvYnNlcnZhYmxlcyA9IHtcbiAqICAgYTogb2YoMSkucGlwZShkZWxheSgxMDAwKSwgc3RhcnRXaXRoKDApKSxcbiAqICAgYjogb2YoNSkucGlwZShkZWxheSg1MDAwKSwgc3RhcnRXaXRoKDApKSxcbiAqICAgYzogb2YoMTApLnBpcGUoZGVsYXkoMTAwMDApLCBzdGFydFdpdGgoMCkpXG4gKiB9O1xuICogY29uc3QgY29tYmluZWQgPSBjb21iaW5lTGF0ZXN0KG9ic2VydmFibGVzKTtcbiAqIGNvbWJpbmVkLnN1YnNjcmliZSh2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSkpO1xuICogLy8gTG9nc1xuICogLy8geyBhOiAwLCBiOiAwLCBjOiAwIH0gaW1tZWRpYXRlbHlcbiAqIC8vIHsgYTogMSwgYjogMCwgYzogMCB9IGFmdGVyIDFzXG4gKiAvLyB7IGE6IDEsIGI6IDUsIGM6IDAgfSBhZnRlciA1c1xuICogLy8geyBhOiAxLCBiOiA1LCBjOiAxMCB9IGFmdGVyIDEwc1xuICogYGBgXG4gKlxuICogQ29tYmluZSBhbiBhcnJheSBvZiBPYnNlcnZhYmxlc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgZGVsYXksIHN0YXJ0V2l0aCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IG9ic2VydmFibGVzID0gWzEsIDUsIDEwXS5tYXAoXG4gKiAgIG4gPT4gb2YobikucGlwZShcbiAqICAgICBkZWxheShuICogMTAwMCksIC8vIGVtaXQgMCBhbmQgdGhlbiBlbWl0IG4gYWZ0ZXIgbiBzZWNvbmRzXG4gKiAgICAgc3RhcnRXaXRoKDApXG4gKiAgIClcbiAqICk7XG4gKiBjb25zdCBjb21iaW5lZCA9IGNvbWJpbmVMYXRlc3Qob2JzZXJ2YWJsZXMpO1xuICogY29tYmluZWQuc3Vic2NyaWJlKHZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSk7XG4gKiAvLyBMb2dzXG4gKiAvLyBbMCwgMCwgMF0gaW1tZWRpYXRlbHlcbiAqIC8vIFsxLCAwLCAwXSBhZnRlciAxc1xuICogLy8gWzEsIDUsIDBdIGFmdGVyIDVzXG4gKiAvLyBbMSwgNSwgMTBdIGFmdGVyIDEwc1xuICogYGBgXG4gKlxuICogVXNlIG1hcCBvcGVyYXRvciB0byBkeW5hbWljYWxseSBjYWxjdWxhdGUgdGhlIEJvZHktTWFzcyBJbmRleFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgY29tYmluZUxhdGVzdCwgbWFwIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgd2VpZ2h0ID0gb2YoNzAsIDcyLCA3NiwgNzksIDc1KTtcbiAqIGNvbnN0IGhlaWdodCA9IG9mKDEuNzYsIDEuNzcsIDEuNzgpO1xuICogY29uc3QgYm1pID0gY29tYmluZUxhdGVzdChbd2VpZ2h0LCBoZWlnaHRdKS5waXBlKFxuICogICBtYXAoKFt3LCBoXSkgPT4gdyAvIChoICogaCkpLFxuICogKTtcbiAqIGJtaS5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZygnQk1JIGlzICcgKyB4KSk7XG4gKlxuICogLy8gV2l0aCBvdXRwdXQgdG8gY29uc29sZTpcbiAqIC8vIEJNSSBpcyAyNC4yMTIyOTMzODg0Mjk3NTNcbiAqIC8vIEJNSSBpcyAyMy45Mzk0ODA5OTIwNTIwOVxuICogLy8gQk1JIGlzIDIzLjY3MTI1MzYyOTU5MjIyMlxuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgY29tYmluZUxhdGVzdEFsbH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlfVxuICogQHNlZSB7QGxpbmsgd2l0aExhdGVzdEZyb219XG4gKlxuICogQHBhcmFtIHtPYnNlcnZhYmxlSW5wdXR9IFtvYnNlcnZhYmxlc10gQW4gYXJyYXkgb2YgaW5wdXQgT2JzZXJ2YWJsZXMgdG8gY29tYmluZSB3aXRoIGVhY2ggb3RoZXIuXG4gKiBBbiBhcnJheSBvZiBPYnNlcnZhYmxlcyBtdXN0IGJlIGdpdmVuIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtwcm9qZWN0XSBBbiBvcHRpb25hbCBmdW5jdGlvbiB0byBwcm9qZWN0IHRoZSB2YWx1ZXMgZnJvbVxuICogdGhlIGNvbWJpbmVkIGxhdGVzdCB2YWx1ZXMgaW50byBhIG5ldyB2YWx1ZSBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKiBAcGFyYW0ge1NjaGVkdWxlckxpa2V9IFtzY2hlZHVsZXI9bnVsbF0gVGhlIHtAbGluayBTY2hlZHVsZXJMaWtlfSB0byB1c2UgZm9yIHN1YnNjcmliaW5nIHRvXG4gKiBlYWNoIGlucHV0IE9ic2VydmFibGUuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIG9mIHByb2plY3RlZCB2YWx1ZXMgZnJvbSB0aGUgbW9zdCByZWNlbnRcbiAqIHZhbHVlcyBmcm9tIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZSwgb3IgYW4gYXJyYXkgb2YgdGhlIG1vc3QgcmVjZW50IHZhbHVlcyBmcm9tXG4gKiBlYWNoIGlucHV0IE9ic2VydmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55PiwgUj4oLi4uYXJnczogYW55W10pOiBPYnNlcnZhYmxlPFI+IHwgT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz5bXT4ge1xuICBjb25zdCBzY2hlZHVsZXIgPSBwb3BTY2hlZHVsZXIoYXJncyk7XG4gIGNvbnN0IHJlc3VsdFNlbGVjdG9yID0gcG9wUmVzdWx0U2VsZWN0b3IoYXJncyk7XG5cbiAgY29uc3QgeyBhcmdzOiBvYnNlcnZhYmxlcywga2V5cyB9ID0gYXJnc0FyZ0FycmF5T3JPYmplY3QoYXJncyk7XG5cbiAgaWYgKG9ic2VydmFibGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIElmIG5vIG9ic2VydmFibGVzIGFyZSBwYXNzZWQsIG9yIHNvbWVvbmUgaGFzIHBhc3NlZCBhbiBlbXB0eSBhcnJheVxuICAgIC8vIG9mIG9ic2VydmFibGVzLCBvciBldmVuIGFuIGVtcHR5IG9iamVjdCBQT0pPLCB3ZSBuZWVkIHRvIGp1c3RcbiAgICAvLyBjb21wbGV0ZSAoRU1QVFkpLCBidXQgd2UgaGF2ZSB0byBob25vciB0aGUgc2NoZWR1bGVyIHByb3ZpZGVkIGlmIGFueS5cbiAgICByZXR1cm4gZnJvbShbXSwgc2NoZWR1bGVyIGFzIGFueSk7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBuZXcgT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz5bXT4oXG4gICAgY29tYmluZUxhdGVzdEluaXQoXG4gICAgICBvYnNlcnZhYmxlcyBhcyBPYnNlcnZhYmxlSW5wdXQ8T2JzZXJ2ZWRWYWx1ZU9mPE8+PltdLFxuICAgICAgc2NoZWR1bGVyLFxuICAgICAga2V5c1xuICAgICAgICA/IC8vIEEgaGFuZGxlciBmb3Igc2NydWJiaW5nIHRoZSBhcnJheSBvZiBhcmdzIGludG8gYSBkaWN0aW9uYXJ5LlxuICAgICAgICAgICh2YWx1ZXMpID0+IGNyZWF0ZU9iamVjdChrZXlzLCB2YWx1ZXMpXG4gICAgICAgIDogLy8gQSBwYXNzdGhyb3VnaCB0byBqdXN0IHJldHVybiB0aGUgYXJyYXlcbiAgICAgICAgICBpZGVudGl0eVxuICAgIClcbiAgKTtcblxuICByZXR1cm4gcmVzdWx0U2VsZWN0b3IgPyAocmVzdWx0LnBpcGUobWFwT25lT3JNYW55QXJncyhyZXN1bHRTZWxlY3RvcikpIGFzIE9ic2VydmFibGU8Uj4pIDogcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdEluaXQoXG4gIG9ic2VydmFibGVzOiBPYnNlcnZhYmxlSW5wdXQ8YW55PltdLFxuICBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlLFxuICB2YWx1ZVRyYW5zZm9ybTogKHZhbHVlczogYW55W10pID0+IGFueSA9IGlkZW50aXR5XG4pIHtcbiAgcmV0dXJuIChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHtcbiAgICAvLyBUaGUgb3V0ZXIgc3Vic2NyaXB0aW9uLiBXZSdyZSBjYXB0dXJpbmcgdGhpcyBpbiBhIGZ1bmN0aW9uXG4gICAgLy8gYmVjYXVzZSB3ZSBtYXkgaGF2ZSB0byBzY2hlZHVsZSBpdC5cbiAgICBtYXliZVNjaGVkdWxlKFxuICAgICAgc2NoZWR1bGVyLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gb2JzZXJ2YWJsZXM7XG4gICAgICAgIC8vIEEgc3RvcmUgZm9yIHRoZSB2YWx1ZXMgZWFjaCBvYnNlcnZhYmxlIGhhcyBlbWl0dGVkIHNvIGZhci4gV2UgbWF0Y2ggb2JzZXJ2YWJsZSB0byB2YWx1ZSBvbiBpbmRleC5cbiAgICAgICAgY29uc3QgdmFsdWVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgICAgIC8vIFRoZSBudW1iZXIgb2YgY3VycmVudGx5IGFjdGl2ZSBzdWJzY3JpcHRpb25zLCBhcyB0aGV5IGNvbXBsZXRlLCB3ZSBkZWNyZW1lbnQgdGhpcyBudW1iZXIgdG8gc2VlIGlmXG4gICAgICAgIC8vIHdlIGFyZSBhbGwgZG9uZSBjb21iaW5pbmcgdmFsdWVzLCBzbyB3ZSBjYW4gY29tcGxldGUgdGhlIHJlc3VsdC5cbiAgICAgICAgbGV0IGFjdGl2ZSA9IGxlbmd0aDtcbiAgICAgICAgLy8gVGhlIG51bWJlciBvZiBpbm5lciBzb3VyY2VzIHRoYXQgc3RpbGwgaGF2ZW4ndCBlbWl0dGVkIHRoZSBmaXJzdCB2YWx1ZVxuICAgICAgICAvLyBXZSBuZWVkIHRvIHRyYWNrIHRoaXMgYmVjYXVzZSBhbGwgc291cmNlcyBuZWVkIHRvIGVtaXQgb25lIHZhbHVlIGluIG9yZGVyXG4gICAgICAgIC8vIHRvIHN0YXJ0IGVtaXR0aW5nIHZhbHVlcy5cbiAgICAgICAgbGV0IHJlbWFpbmluZ0ZpcnN0VmFsdWVzID0gbGVuZ3RoO1xuICAgICAgICAvLyBUaGUgbG9vcCB0byBraWNrIG9mZiBzdWJzY3JpcHRpb24uIFdlJ3JlIGtleWluZyBldmVyeXRoaW5nIG9uIGluZGV4IGBpYCB0byByZWxhdGUgdGhlIG9ic2VydmFibGVzIHBhc3NlZFxuICAgICAgICAvLyBpbiB0byB0aGUgc2xvdCBpbiB0aGUgb3V0cHV0IGFycmF5IG9yIHRoZSBrZXkgaW4gdGhlIGFycmF5IG9mIGtleXMgaW4gdGhlIG91dHB1dCBkaWN0aW9uYXJ5LlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbWF5YmVTY2hlZHVsZShcbiAgICAgICAgICAgIHNjaGVkdWxlcixcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc291cmNlID0gZnJvbShvYnNlcnZhYmxlc1tpXSwgc2NoZWR1bGVyIGFzIGFueSk7XG4gICAgICAgICAgICAgIGxldCBoYXNGaXJzdFZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKFxuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcixcbiAgICAgICAgICAgICAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHdlIGdldCBhIHZhbHVlLCByZWNvcmQgaXQgaW4gb3VyIHNldCBvZiB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0ZpcnN0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCB2YWx1ZSwgcmVjb3JkIHRoYXQuXG4gICAgICAgICAgICAgICAgICAgICAgaGFzRmlyc3RWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nRmlyc3RWYWx1ZXMtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlbWFpbmluZ0ZpcnN0VmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gV2UncmUgbm90IHdhaXRpbmcgZm9yIGFueSBtb3JlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgdmFsdWVzLCBzbyB3ZSBjYW4gZW1pdCFcbiAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWVUcmFuc2Zvcm0odmFsdWVzLnNsaWNlKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG9ubHkgY29tcGxldGUgdGhlIHJlc3VsdCBpZiB3ZSBoYXZlIG5vIG1vcmUgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaW5uZXIgb2JzZXJ2YWJsZXMuXG4gICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1YnNjcmliZXJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3Vic2NyaWJlclxuICAgICk7XG4gIH07XG59XG5cbi8qKlxuICogQSBzbWFsbCB1dGlsaXR5IHRvIGhhbmRsZSB0aGUgY291cGxlIG9mIGxvY2F0aW9ucyB3aGVyZSB3ZSB3YW50IHRvIHNjaGVkdWxlIGlmIGEgc2NoZWR1bGVyIHdhcyBwcm92aWRlZCxcbiAqIGJ1dCB3ZSBkb24ndCBpZiB0aGVyZSB3YXMgbm8gc2NoZWR1bGVyLlxuICovXG5mdW5jdGlvbiBtYXliZVNjaGVkdWxlKHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSB8IHVuZGVmaW5lZCwgZXhlY3V0ZTogKCkgPT4gdm9pZCwgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pIHtcbiAgaWYgKHNjaGVkdWxlcikge1xuICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpcHRpb24sIHNjaGVkdWxlciwgZXhlY3V0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZXhlY3V0ZSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0LCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuXG4vKipcbiAqIEEgcHJvY2VzcyBlbWJvZHlpbmcgdGhlIGdlbmVyYWwgXCJtZXJnZVwiIHN0cmF0ZWd5LiBUaGlzIGlzIHVzZWQgaW5cbiAqIGBtZXJnZU1hcGAgYW5kIGBtZXJnZVNjYW5gIGJlY2F1c2UgdGhlIGxvZ2ljIGlzIG90aGVyd2lzZSBuZWFybHkgaWRlbnRpY2FsLlxuICogQHBhcmFtIHNvdXJjZSBUaGUgb3JpZ2luYWwgc291cmNlIG9ic2VydmFibGVcbiAqIEBwYXJhbSBzdWJzY3JpYmVyIFRoZSBjb25zdW1lciBzdWJzY3JpYmVyXG4gKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdGlvbiBmdW5jdGlvbiB0byBnZXQgb3VyIGlubmVyIHNvdXJjZXNcbiAqIEBwYXJhbSBjb25jdXJyZW50IFRoZSBudW1iZXIgb2YgY29uY3VycmVudCBpbm5lciBzdWJzY3JpcHRpb25zXG4gKiBAcGFyYW0gb25CZWZvcmVOZXh0IEFkZGl0aW9uYWwgbG9naWMgdG8gYXBwbHkgYmVmb3JlIG5leHRpbmcgdG8gb3VyIGNvbnN1bWVyXG4gKiBAcGFyYW0gZXhwYW5kIElmIGB0cnVlYCB0aGlzIHdpbGwgcGVyZm9ybSBhbiBcImV4cGFuZFwiIHN0cmF0ZWd5LCB3aGljaCBkaWZmZXJzIG9ubHlcbiAqIGluIHRoYXQgaXQgcmVjdXJzZXMsIGFuZCB0aGUgaW5uZXIgc3Vic2NyaXB0aW9uIG11c3QgYmUgc2NoZWR1bGUtYWJsZS5cbiAqIEBwYXJhbSBpbm5lclN1YlNjaGVkdWxlciBBIHNjaGVkdWxlciB0byB1c2UgdG8gc2NoZWR1bGUgaW5uZXIgc3Vic2NyaXB0aW9ucyxcbiAqIHRoaXMgaXMgdG8gc3VwcG9ydCB0aGUgZXhwYW5kIHN0cmF0ZWd5LCBtb3N0bHksIGFuZCBzaG91bGQgYmUgZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VJbnRlcm5hbHM8VCwgUj4oXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxUPixcbiAgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxSPixcbiAgcHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlSW5wdXQ8Uj4sXG4gIGNvbmN1cnJlbnQ6IG51bWJlcixcbiAgb25CZWZvcmVOZXh0PzogKGlubmVyVmFsdWU6IFIpID0+IHZvaWQsXG4gIGV4cGFuZD86IGJvb2xlYW4sXG4gIGlubmVyU3ViU2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSxcbiAgYWRkaXRpb25hbEZpbmFsaXplcj86ICgpID0+IHZvaWRcbikge1xuICAvLyBCdWZmZXJlZCB2YWx1ZXMsIGluIHRoZSBldmVudCBvZiBnb2luZyBvdmVyIG91ciBjb25jdXJyZW5jeSBsaW1pdFxuICBjb25zdCBidWZmZXI6IFRbXSA9IFtdO1xuICAvLyBUaGUgbnVtYmVyIG9mIGFjdGl2ZSBpbm5lciBzdWJzY3JpcHRpb25zLlxuICBsZXQgYWN0aXZlID0gMDtcbiAgLy8gQW4gaW5kZXggdG8gcGFzcyB0byBvdXIgYWNjdW11bGF0b3IgZnVuY3Rpb25cbiAgbGV0IGluZGV4ID0gMDtcbiAgLy8gV2hldGhlciBvciBub3QgdGhlIG91dGVyIHNvdXJjZSBoYXMgY29tcGxldGVkLlxuICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHdlIGNhbiBjb21wbGV0ZSBvdXIgcmVzdWx0IG9yIG5vdC5cbiAgICovXG4gIGNvbnN0IGNoZWNrQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgLy8gSWYgdGhlIG91dGVyIGhhcyBjb21wbGV0ZWQsIGFuZCBub3RoaW5nIGlzIGxlZnQgaW4gdGhlIGJ1ZmZlcixcbiAgICAvLyBhbmQgd2UgZG9uJ3QgaGF2ZSBhbnkgYWN0aXZlIGlubmVyIHN1YnNjcmlwdGlvbnMsIHRoZW4gd2UgY2FuXG4gICAgLy8gRW1pdCB0aGUgc3RhdGUgYW5kIGNvbXBsZXRlLlxuICAgIGlmIChpc0NvbXBsZXRlICYmICFidWZmZXIubGVuZ3RoICYmICFhY3RpdmUpIHtcbiAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSWYgd2UncmUgdW5kZXIgb3VyIGNvbmN1cnJlbmN5IGxpbWl0LCBqdXN0IHN0YXJ0IHRoZSBpbm5lciBzdWJzY3JpcHRpb24sIG90aGVyd2lzZSBidWZmZXIgYW5kIHdhaXQuXG4gIGNvbnN0IG91dGVyTmV4dCA9ICh2YWx1ZTogVCkgPT4gKGFjdGl2ZSA8IGNvbmN1cnJlbnQgPyBkb0lubmVyU3ViKHZhbHVlKSA6IGJ1ZmZlci5wdXNoKHZhbHVlKSk7XG5cbiAgY29uc3QgZG9Jbm5lclN1YiA9ICh2YWx1ZTogVCkgPT4ge1xuICAgIC8vIElmIHdlJ3JlIGV4cGFuZGluZywgd2UgbmVlZCB0byBlbWl0IHRoZSBvdXRlciB2YWx1ZXMgYW5kIHRoZSBpbm5lciB2YWx1ZXNcbiAgICAvLyBhcyB0aGUgaW5uZXJzIHdpbGwgXCJiZWNvbWUgb3V0ZXJzXCIgaW4gYSB3YXkgYXMgdGhleSBhcmUgcmVjdXJzaXZlbHkgZmVkXG4gICAgLy8gYmFjayB0byB0aGUgcHJvamVjdGlvbiBtZWNoYW5pc20uXG4gICAgZXhwYW5kICYmIHN1YnNjcmliZXIubmV4dCh2YWx1ZSBhcyBhbnkpO1xuXG4gICAgLy8gSW5jcmVtZW50IHRoZSBudW1iZXIgb2YgYWN0aXZlIHN1YnNjcmlwdGlvbnMgc28gd2UgY2FuIHRyYWNrIGl0XG4gICAgLy8gYWdhaW5zdCBvdXIgY29uY3VycmVuY3kgbGltaXQgbGF0ZXIuXG4gICAgYWN0aXZlKys7XG5cbiAgICAvLyBBIGZsYWcgdXNlZCB0byBzaG93IHRoYXQgdGhlIGlubmVyIG9ic2VydmFibGUgY29tcGxldGVkLlxuICAgIC8vIFRoaXMgaXMgY2hlY2tlZCBkdXJpbmcgZmluYWxpemF0aW9uIHRvIHNlZSBpZiB3ZSBzaG91bGRcbiAgICAvLyBtb3ZlIHRvIHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGJ1ZmZlciwgaWYgdGhlcmUgaXMgb24uXG4gICAgbGV0IGlubmVyQ29tcGxldGUgPSBmYWxzZTtcblxuICAgIC8vIFN0YXJ0IG91ciBpbm5lciBzdWJzY3JpcHRpb24uXG4gICAgaW5uZXJGcm9tKHByb2plY3QodmFsdWUsIGluZGV4KyspKS5zdWJzY3JpYmUoXG4gICAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoXG4gICAgICAgIHN1YnNjcmliZXIsXG4gICAgICAgIChpbm5lclZhbHVlKSA9PiB7XG4gICAgICAgICAgLy8gYG1lcmdlU2NhbmAgaGFzIGFkZGl0aW9uYWwgaGFuZGxpbmcgaGVyZS4gRm9yIGV4YW1wbGVcbiAgICAgICAgICAvLyB0YWtpbmcgdGhlIGlubmVyIHZhbHVlIGFuZCB1cGRhdGluZyBzdGF0ZS5cbiAgICAgICAgICBvbkJlZm9yZU5leHQ/Lihpbm5lclZhbHVlKTtcblxuICAgICAgICAgIGlmIChleHBhbmQpIHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGV4cGFuZGluZywgdGhlbiBqdXN0IHJlY3Vyc2UgYmFjayB0byBvdXIgb3V0ZXJcbiAgICAgICAgICAgIC8vIGhhbmRsZXIuIEl0IHdpbGwgZW1pdCB0aGUgdmFsdWUgZmlyc3QgdGhpbmcuXG4gICAgICAgICAgICBvdXRlck5leHQoaW5uZXJWYWx1ZSBhcyBhbnkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIGVtaXQgdGhlIGlubmVyIHZhbHVlLlxuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlubmVyVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIEZsYWcgdGhhdCB3ZSBoYXZlIGNvbXBsZXRlZCwgc28gd2Uga25vdyB0byBjaGVjayB0aGUgYnVmZmVyXG4gICAgICAgICAgLy8gZHVyaW5nIGZpbmFsaXphdGlvbi5cbiAgICAgICAgICBpbm5lckNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gRXJyb3JzIGFyZSBwYXNzZWQgdG8gdGhlIGRlc3RpbmF0aW9uLlxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAvLyBEdXJpbmcgZmluYWxpemF0aW9uLCBpZiB0aGUgaW5uZXIgY29tcGxldGVkIChpdCB3YXNuJ3QgZXJyb3JlZCBvclxuICAgICAgICAgIC8vIGNhbmNlbGxlZCksIHRoZW4gd2Ugd2FudCB0byB0cnkgdGhlIG5leHQgaXRlbSBpbiB0aGUgYnVmZmVyIGlmXG4gICAgICAgICAgLy8gdGhlcmUgaXMgb25lLlxuICAgICAgICAgIGlmIChpbm5lckNvbXBsZXRlKSB7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHdyYXAgdGhpcyBpbiBhIHRyeS9jYXRjaCBiZWNhdXNlIGl0IGhhcHBlbnMgZHVyaW5nXG4gICAgICAgICAgICAvLyBmaW5hbGl6YXRpb24sIHBvc3NpYmx5IGFzeW5jaHJvbm91c2x5LCBhbmQgd2Ugd2FudCB0byBwYXNzXG4gICAgICAgICAgICAvLyBhbnkgZXJyb3JzIHRoYXQgaGFwcGVuIChsaWtlIGluIGEgcHJvamVjdGlvbiBmdW5jdGlvbikgdG9cbiAgICAgICAgICAgIC8vIHRoZSBvdXRlciBTdWJzY3JpYmVyLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gSU5ORVIgU09VUkNFIENPTVBMRVRFXG4gICAgICAgICAgICAgIC8vIERlY3JlbWVudCB0aGUgYWN0aXZlIGNvdW50IHRvIGVuc3VyZSB0aGF0IHRoZSBuZXh0IHRpbWVcbiAgICAgICAgICAgICAgLy8gd2UgdHJ5IHRvIGNhbGwgYGRvSW5uZXJTdWJgLCB0aGUgbnVtYmVyIGlzIGFjY3VyYXRlLlxuICAgICAgICAgICAgICBhY3RpdmUtLTtcbiAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBtb3JlIHZhbHVlcyBpbiB0aGUgYnVmZmVyLCB0cnkgdG8gcHJvY2VzcyB0aG9zZVxuICAgICAgICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBjYWxsIHdpbGwgaW5jcmVtZW50IGBhY3RpdmVgIGFoZWFkIG9mIHRoZVxuICAgICAgICAgICAgICAvLyBuZXh0IGNvbmRpdGlvbmFsLCBpZiB0aGVyZSB3ZXJlIGFueSBtb3JlIGlubmVyIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgICAgICAgLy8gdG8gc3RhcnQuXG4gICAgICAgICAgICAgIHdoaWxlIChidWZmZXIubGVuZ3RoICYmIGFjdGl2ZSA8IGNvbmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJlZFZhbHVlID0gYnVmZmVyLnNoaWZ0KCkhO1xuICAgICAgICAgICAgICAgIC8vIFBhcnRpY3VsYXJseSBmb3IgYGV4cGFuZGAsIHdlIG5lZWQgdG8gY2hlY2sgdG8gc2VlIGlmIGEgc2NoZWR1bGVyIHdhcyBwcm92aWRlZFxuICAgICAgICAgICAgICAgIC8vIGZvciB3aGVuIHdlIHdhbnQgdG8gc3RhcnQgb3VyIGlubmVyIHN1YnNjcmlwdGlvbi4gT3RoZXJ3aXNlLCB3ZSBqdXN0IHN0YXJ0XG4gICAgICAgICAgICAgICAgLy8gYXJlIG5leHQgaW5uZXIgc3Vic2NyaXB0aW9uLlxuICAgICAgICAgICAgICAgIGlmIChpbm5lclN1YlNjaGVkdWxlcikge1xuICAgICAgICAgICAgICAgICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIGlubmVyU3ViU2NoZWR1bGVyLCAoKSA9PiBkb0lubmVyU3ViKGJ1ZmZlcmVkVmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZG9Jbm5lclN1YihidWZmZXJlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGNhbiBjb21wbGV0ZSwgYW5kIGNvbXBsZXRlIGlmIHNvLlxuICAgICAgICAgICAgICBjaGVja0NvbXBsZXRlKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgLy8gU3Vic2NyaWJlIHRvIG91ciBzb3VyY2Ugb2JzZXJ2YWJsZS5cbiAgc291cmNlLnN1YnNjcmliZShcbiAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgb3V0ZXJOZXh0LCAoKSA9PiB7XG4gICAgICAvLyBPdXRlciBjb21wbGV0ZWQsIG1ha2UgYSBub3RlIG9mIGl0LCBhbmQgY2hlY2sgdG8gc2VlIGlmIHdlIGNhbiBjb21wbGV0ZSBldmVyeXRoaW5nLlxuICAgICAgaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICBjaGVja0NvbXBsZXRlKCk7XG4gICAgfSlcbiAgKTtcblxuICAvLyBBZGRpdGlvbmFsIGZpbmFsaXphdGlvbiAoZm9yIHdoZW4gdGhlIGRlc3RpbmF0aW9uIGlzIHRvcm4gZG93bikuXG4gIC8vIE90aGVyIGZpbmFsaXphdGlvbiBpcyBhZGRlZCBpbXBsaWNpdGx5IHZpYSBzdWJzY3JpcHRpb24gYWJvdmUuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgYWRkaXRpb25hbEZpbmFsaXplcj8uKCk7XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0LCBPcGVyYXRvckZ1bmN0aW9uLCBPYnNlcnZlZFZhbHVlT2YgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL21hcCc7XG5pbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IG1lcmdlSW50ZXJuYWxzIH0gZnJvbSAnLi9tZXJnZUludGVybmFscyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXA8VCwgTyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PihcbiAgcHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPLFxuICBjb25jdXJyZW50PzogbnVtYmVyXG4pOiBPcGVyYXRvckZ1bmN0aW9uPFQsIE9ic2VydmVkVmFsdWVPZjxPPj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGByZXN1bHRTZWxlY3RvcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGFuIGlubmVyIGBtYXBgIGluc3RlYWQuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3Jlc3VsdFNlbGVjdG9yICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXA8VCwgTyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PihcbiAgcHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPLFxuICByZXN1bHRTZWxlY3RvcjogdW5kZWZpbmVkLFxuICBjb25jdXJyZW50PzogbnVtYmVyXG4pOiBPcGVyYXRvckZ1bmN0aW9uPFQsIE9ic2VydmVkVmFsdWVPZjxPPj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGByZXN1bHRTZWxlY3RvcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGFuIGlubmVyIGBtYXBgIGluc3RlYWQuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3Jlc3VsdFNlbGVjdG9yICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXA8VCwgUiwgTyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PihcbiAgcHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPLFxuICByZXN1bHRTZWxlY3RvcjogKG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IE9ic2VydmVkVmFsdWVPZjxPPiwgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIpID0+IFIsXG4gIGNvbmN1cnJlbnQ/OiBudW1iZXJcbik6IE9wZXJhdG9yRnVuY3Rpb248VCwgUj47XG4vKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG4vKipcbiAqIFByb2plY3RzIGVhY2ggc291cmNlIHZhbHVlIHRvIGFuIE9ic2VydmFibGUgd2hpY2ggaXMgbWVyZ2VkIGluIHRoZSBvdXRwdXRcbiAqIE9ic2VydmFibGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPk1hcHMgZWFjaCB2YWx1ZSB0byBhbiBPYnNlcnZhYmxlLCB0aGVuIGZsYXR0ZW5zIGFsbCBvZlxuICogdGhlc2UgaW5uZXIgT2JzZXJ2YWJsZXMgdXNpbmcge0BsaW5rIG1lcmdlQWxsfS48L3NwYW4+XG4gKlxuICogIVtdKG1lcmdlTWFwLnBuZylcbiAqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBpdGVtcyBiYXNlZCBvbiBhcHBseWluZyBhIGZ1bmN0aW9uIHRoYXQgeW91XG4gKiBzdXBwbHkgdG8gZWFjaCBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCB3aGVyZSB0aGF0IGZ1bmN0aW9uXG4gKiByZXR1cm5zIGFuIE9ic2VydmFibGUsIGFuZCB0aGVuIG1lcmdpbmcgdGhvc2UgcmVzdWx0aW5nIE9ic2VydmFibGVzIGFuZFxuICogZW1pdHRpbmcgdGhlIHJlc3VsdHMgb2YgdGhpcyBtZXJnZXIuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIE1hcCBhbmQgZmxhdHRlbiBlYWNoIGxldHRlciB0byBhbiBPYnNlcnZhYmxlIHRpY2tpbmcgZXZlcnkgMSBzZWNvbmRcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIG1lcmdlTWFwLCBpbnRlcnZhbCwgbWFwIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgbGV0dGVycyA9IG9mKCdhJywgJ2InLCAnYycpO1xuICogY29uc3QgcmVzdWx0ID0gbGV0dGVycy5waXBlKFxuICogICBtZXJnZU1hcCh4ID0+IGludGVydmFsKDEwMDApLnBpcGUobWFwKGkgPT4geCArIGkpKSlcbiAqICk7XG4gKlxuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBSZXN1bHRzIGluIHRoZSBmb2xsb3dpbmc6XG4gKiAvLyBhMFxuICogLy8gYjBcbiAqIC8vIGMwXG4gKiAvLyBhMVxuICogLy8gYjFcbiAqIC8vIGMxXG4gKiAvLyBjb250aW51ZXMgdG8gbGlzdCBhLCBiLCBjIGV2ZXJ5IHNlY29uZCB3aXRoIHJlc3BlY3RpdmUgYXNjZW5kaW5nIGludGVnZXJzXG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBjb25jYXRNYXB9XG4gKiBAc2VlIHtAbGluayBleGhhdXN0TWFwfVxuICogQHNlZSB7QGxpbmsgbWVyZ2V9XG4gKiBAc2VlIHtAbGluayBtZXJnZUFsbH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlTWFwVG99XG4gKiBAc2VlIHtAbGluayBtZXJnZVNjYW59XG4gKiBAc2VlIHtAbGluayBzd2l0Y2hNYXB9XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZTogVCwgP2luZGV4OiBudW1iZXIpOiBPYnNlcnZhYmxlSW5wdXR9IHByb2plY3QgQSBmdW5jdGlvblxuICogdGhhdCwgd2hlbiBhcHBsaWVkIHRvIGFuIGl0ZW0gZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUsIHJldHVybnMgYW5cbiAqIE9ic2VydmFibGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW2NvbmN1cnJlbnQ9SW5maW5pdHldIE1heGltdW0gbnVtYmVyIG9mIGlucHV0XG4gKiBPYnNlcnZhYmxlcyBiZWluZyBzdWJzY3JpYmVkIHRvIGNvbmN1cnJlbnRseS5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSByZXN1bHQgb2ZcbiAqIGFwcGx5aW5nIHRoZSBwcm9qZWN0aW9uIGZ1bmN0aW9uIChhbmQgdGhlIG9wdGlvbmFsIGRlcHJlY2F0ZWRcbiAqIGByZXN1bHRTZWxlY3RvcmApIHRvIGVhY2ggaXRlbSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBhbmQgbWVyZ2luZ1xuICogdGhlIHJlc3VsdHMgb2YgdGhlIE9ic2VydmFibGVzIG9idGFpbmVkIGZyb20gdGhpcyB0cmFuc2Zvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTWFwPFQsIFIsIE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oXG4gIHByb2plY3Q6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gTyxcbiAgcmVzdWx0U2VsZWN0b3I/OiAoKG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IE9ic2VydmVkVmFsdWVPZjxPPiwgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIpID0+IFIpIHwgbnVtYmVyLFxuICBjb25jdXJyZW50OiBudW1iZXIgPSBJbmZpbml0eVxuKTogT3BlcmF0b3JGdW5jdGlvbjxULCBPYnNlcnZlZFZhbHVlT2Y8Tz4gfCBSPiB7XG4gIGlmIChpc0Z1bmN0aW9uKHJlc3VsdFNlbGVjdG9yKSkge1xuICAgIC8vIERFUFJFQ0FURUQgUEFUSFxuICAgIHJldHVybiBtZXJnZU1hcCgoYSwgaSkgPT4gbWFwKChiOiBhbnksIGlpOiBudW1iZXIpID0+IHJlc3VsdFNlbGVjdG9yKGEsIGIsIGksIGlpKSkoaW5uZXJGcm9tKHByb2plY3QoYSwgaSkpKSwgY29uY3VycmVudCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHJlc3VsdFNlbGVjdG9yID09PSAnbnVtYmVyJykge1xuICAgIGNvbmN1cnJlbnQgPSByZXN1bHRTZWxlY3RvcjtcbiAgfVxuXG4gIHJldHVybiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IG1lcmdlSW50ZXJuYWxzKHNvdXJjZSwgc3Vic2NyaWJlciwgcHJvamVjdCwgY29uY3VycmVudCkpO1xufVxuIiwgImltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAnLi9tZXJnZU1hcCc7XG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4uL3V0aWwvaWRlbnRpdHknO1xuaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiwgT2JzZXJ2YWJsZUlucHV0LCBPYnNlcnZlZFZhbHVlT2YgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogQ29udmVydHMgYSBoaWdoZXItb3JkZXIgT2JzZXJ2YWJsZSBpbnRvIGEgZmlyc3Qtb3JkZXIgT2JzZXJ2YWJsZSB3aGljaFxuICogY29uY3VycmVudGx5IGRlbGl2ZXJzIGFsbCB2YWx1ZXMgdGhhdCBhcmUgZW1pdHRlZCBvbiB0aGUgaW5uZXIgT2JzZXJ2YWJsZXMuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkZsYXR0ZW5zIGFuIE9ic2VydmFibGUtb2YtT2JzZXJ2YWJsZXMuPC9zcGFuPlxuICpcbiAqICFbXShtZXJnZUFsbC5wbmcpXG4gKlxuICogYG1lcmdlQWxsYCBzdWJzY3JpYmVzIHRvIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBPYnNlcnZhYmxlcywgYWxzbyBrbm93biBhc1xuICogYSBoaWdoZXItb3JkZXIgT2JzZXJ2YWJsZS4gRWFjaCB0aW1lIGl0IG9ic2VydmVzIG9uZSBvZiB0aGVzZSBlbWl0dGVkIGlubmVyXG4gKiBPYnNlcnZhYmxlcywgaXQgc3Vic2NyaWJlcyB0byB0aGF0IGFuZCBkZWxpdmVycyBhbGwgdGhlIHZhbHVlcyBmcm9tIHRoZVxuICogaW5uZXIgT2JzZXJ2YWJsZSBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUuIFRoZSBvdXRwdXQgT2JzZXJ2YWJsZSBvbmx5XG4gKiBjb21wbGV0ZXMgb25jZSBhbGwgaW5uZXIgT2JzZXJ2YWJsZXMgaGF2ZSBjb21wbGV0ZWQuIEFueSBlcnJvciBkZWxpdmVyZWQgYnlcbiAqIGEgaW5uZXIgT2JzZXJ2YWJsZSB3aWxsIGJlIGltbWVkaWF0ZWx5IGVtaXR0ZWQgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogU3Bhd24gYSBuZXcgaW50ZXJ2YWwgT2JzZXJ2YWJsZSBmb3IgZWFjaCBjbGljayBldmVudCwgYW5kIGJsZW5kIHRoZWlyIG91dHB1dHMgYXMgb25lIE9ic2VydmFibGVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbUV2ZW50LCBtYXAsIGludGVydmFsLCBtZXJnZUFsbCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGNsaWNrcyA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiBjb25zdCBoaWdoZXJPcmRlciA9IGNsaWNrcy5waXBlKG1hcCgoKSA9PiBpbnRlcnZhbCgxMDAwKSkpO1xuICogY29uc3QgZmlyc3RPcmRlciA9IGhpZ2hlck9yZGVyLnBpcGUobWVyZ2VBbGwoKSk7XG4gKlxuICogZmlyc3RPcmRlci5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBDb3VudCBmcm9tIDAgdG8gOSBldmVyeSBzZWNvbmQgZm9yIGVhY2ggY2xpY2ssIGJ1dCBvbmx5IGFsbG93IDIgY29uY3VycmVudCB0aW1lcnNcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbUV2ZW50LCBtYXAsIGludGVydmFsLCB0YWtlLCBtZXJnZUFsbCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGNsaWNrcyA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiBjb25zdCBoaWdoZXJPcmRlciA9IGNsaWNrcy5waXBlKFxuICogICBtYXAoKCkgPT4gaW50ZXJ2YWwoMTAwMCkucGlwZSh0YWtlKDEwKSkpXG4gKiApO1xuICogY29uc3QgZmlyc3RPcmRlciA9IGhpZ2hlck9yZGVyLnBpcGUobWVyZ2VBbGwoMikpO1xuICpcbiAqIGZpcnN0T3JkZXIuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgY29tYmluZUxhdGVzdEFsbH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdEFsbH1cbiAqIEBzZWUge0BsaW5rIGV4aGF1c3RBbGx9XG4gKiBAc2VlIHtAbGluayBtZXJnZX1cbiAqIEBzZWUge0BsaW5rIG1lcmdlTWFwfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VNYXBUb31cbiAqIEBzZWUge0BsaW5rIG1lcmdlU2Nhbn1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaEFsbH1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaE1hcH1cbiAqIEBzZWUge0BsaW5rIHppcEFsbH1cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW2NvbmN1cnJlbnQ9SW5maW5pdHldIE1heGltdW0gbnVtYmVyIG9mIGlubmVyXG4gKiBPYnNlcnZhYmxlcyBiZWluZyBzdWJzY3JpYmVkIHRvIGNvbmN1cnJlbnRseS5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHZhbHVlcyBjb21pbmcgZnJvbVxuICogYWxsIHRoZSBpbm5lciBPYnNlcnZhYmxlcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQWxsPE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oY29uY3VycmVudDogbnVtYmVyID0gSW5maW5pdHkpOiBPcGVyYXRvckZ1bmN0aW9uPE8sIE9ic2VydmVkVmFsdWVPZjxPPj4ge1xuICByZXR1cm4gbWVyZ2VNYXAoaWRlbnRpdHksIGNvbmN1cnJlbnQpO1xufVxuIiwgImltcG9ydCB7IG1lcmdlQWxsIH0gZnJvbSAnLi9tZXJnZUFsbCc7XG5pbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uLCBPYnNlcnZhYmxlSW5wdXQsIE9ic2VydmVkVmFsdWVPZiB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBDb252ZXJ0cyBhIGhpZ2hlci1vcmRlciBPYnNlcnZhYmxlIGludG8gYSBmaXJzdC1vcmRlciBPYnNlcnZhYmxlIGJ5XG4gKiBjb25jYXRlbmF0aW5nIHRoZSBpbm5lciBPYnNlcnZhYmxlcyBpbiBvcmRlci5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+RmxhdHRlbnMgYW4gT2JzZXJ2YWJsZS1vZi1PYnNlcnZhYmxlcyBieSBwdXR0aW5nIG9uZVxuICogaW5uZXIgT2JzZXJ2YWJsZSBhZnRlciB0aGUgb3RoZXIuPC9zcGFuPlxuICpcbiAqICFbXShjb25jYXRBbGwuc3ZnKVxuICpcbiAqIEpvaW5zIGV2ZXJ5IE9ic2VydmFibGUgZW1pdHRlZCBieSB0aGUgc291cmNlIChhIGhpZ2hlci1vcmRlciBPYnNlcnZhYmxlKSwgaW5cbiAqIGEgc2VyaWFsIGZhc2hpb24uIEl0IHN1YnNjcmliZXMgdG8gZWFjaCBpbm5lciBPYnNlcnZhYmxlIG9ubHkgYWZ0ZXIgdGhlXG4gKiBwcmV2aW91cyBpbm5lciBPYnNlcnZhYmxlIGhhcyBjb21wbGV0ZWQsIGFuZCBtZXJnZXMgYWxsIG9mIHRoZWlyIHZhbHVlcyBpbnRvXG4gKiB0aGUgcmV0dXJuZWQgb2JzZXJ2YWJsZS5cbiAqXG4gKiBfX1dhcm5pbmc6X18gSWYgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGVtaXRzIE9ic2VydmFibGVzIHF1aWNrbHkgYW5kXG4gKiBlbmRsZXNzbHksIGFuZCB0aGUgaW5uZXIgT2JzZXJ2YWJsZXMgaXQgZW1pdHMgZ2VuZXJhbGx5IGNvbXBsZXRlIHNsb3dlciB0aGFuXG4gKiB0aGUgc291cmNlIGVtaXRzLCB5b3UgY2FuIHJ1biBpbnRvIG1lbW9yeSBpc3N1ZXMgYXMgdGhlIGluY29taW5nIE9ic2VydmFibGVzXG4gKiBjb2xsZWN0IGluIGFuIHVuYm91bmRlZCBidWZmZXIuXG4gKlxuICogTm90ZTogYGNvbmNhdEFsbGAgaXMgZXF1aXZhbGVudCB0byBgbWVyZ2VBbGxgIHdpdGggY29uY3VycmVuY3kgcGFyYW1ldGVyIHNldFxuICogdG8gYDFgLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBGb3IgZWFjaCBjbGljayBldmVudCwgdGljayBldmVyeSBzZWNvbmQgZnJvbSAwIHRvIDMsIHdpdGggbm8gY29uY3VycmVuY3lcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbUV2ZW50LCBtYXAsIGludGVydmFsLCB0YWtlLCBjb25jYXRBbGwgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBjbGlja3MgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogY29uc3QgaGlnaGVyT3JkZXIgPSBjbGlja3MucGlwZShcbiAqICAgbWFwKCgpID0+IGludGVydmFsKDEwMDApLnBpcGUodGFrZSg0KSkpXG4gKiApO1xuICogY29uc3QgZmlyc3RPcmRlciA9IGhpZ2hlck9yZGVyLnBpcGUoY29uY2F0QWxsKCkpO1xuICogZmlyc3RPcmRlci5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gUmVzdWx0cyBpbiB0aGUgZm9sbG93aW5nOlxuICogLy8gKHJlc3VsdHMgYXJlIG5vdCBjb25jdXJyZW50KVxuICogLy8gRm9yIGV2ZXJ5IGNsaWNrIG9uIHRoZSBcImRvY3VtZW50XCIgaXQgd2lsbCBlbWl0IHZhbHVlcyAwIHRvIDMgc3BhY2VkXG4gKiAvLyBvbiBhIDEwMDBtcyBpbnRlcnZhbFxuICogLy8gb25lIGNsaWNrID0gMTAwMG1zLT4gMCAtMTAwMG1zLT4gMSAtMTAwMG1zLT4gMiAtMTAwMG1zLT4gM1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgY29tYmluZUxhdGVzdEFsbH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcFRvfVxuICogQHNlZSB7QGxpbmsgZXhoYXVzdEFsbH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlQWxsfVxuICogQHNlZSB7QGxpbmsgc3dpdGNoQWxsfVxuICogQHNlZSB7QGxpbmsgc3dpdGNoTWFwfVxuICogQHNlZSB7QGxpbmsgemlwQWxsfVxuICpcbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSBlbWl0dGluZyB2YWx1ZXMgZnJvbSBhbGwgdGhlXG4gKiBpbm5lciBPYnNlcnZhYmxlcyBjb25jYXRlbmF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRBbGw8TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PigpOiBPcGVyYXRvckZ1bmN0aW9uPE8sIE9ic2VydmVkVmFsdWVPZjxPPj4ge1xuICByZXR1cm4gbWVyZ2VBbGwoMSk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0VHVwbGUsIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBjb25jYXRBbGwgfSBmcm9tICcuLi9vcGVyYXRvcnMvY29uY2F0QWxsJztcbmltcG9ydCB7IHBvcFNjaGVkdWxlciB9IGZyb20gJy4uL3V0aWwvYXJncyc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdDxUIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdPiguLi5pbnB1dHM6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxUPl0pOiBPYnNlcnZhYmxlPFRbbnVtYmVyXT47XG5leHBvcnQgZnVuY3Rpb24gY29uY2F0PFQgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KFxuICAuLi5pbnB1dHNBbmRTY2hlZHVsZXI6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxUPiwgU2NoZWR1bGVyTGlrZV1cbik6IE9ic2VydmFibGU8VFtudW1iZXJdPjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIG91dHB1dCBPYnNlcnZhYmxlIHdoaWNoIHNlcXVlbnRpYWxseSBlbWl0cyBhbGwgdmFsdWVzIGZyb20gdGhlIGZpcnN0IGdpdmVuXG4gKiBPYnNlcnZhYmxlIGFuZCB0aGVuIG1vdmVzIG9uIHRvIHRoZSBuZXh0LlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5Db25jYXRlbmF0ZXMgbXVsdGlwbGUgT2JzZXJ2YWJsZXMgdG9nZXRoZXIgYnlcbiAqIHNlcXVlbnRpYWxseSBlbWl0dGluZyB0aGVpciB2YWx1ZXMsIG9uZSBPYnNlcnZhYmxlIGFmdGVyIHRoZSBvdGhlci48L3NwYW4+XG4gKlxuICogIVtdKGNvbmNhdC5wbmcpXG4gKlxuICogYGNvbmNhdGAgam9pbnMgbXVsdGlwbGUgT2JzZXJ2YWJsZXMgdG9nZXRoZXIsIGJ5IHN1YnNjcmliaW5nIHRvIHRoZW0gb25lIGF0IGEgdGltZSBhbmRcbiAqIG1lcmdpbmcgdGhlaXIgcmVzdWx0cyBpbnRvIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS4gWW91IGNhbiBwYXNzIGVpdGhlciBhbiBhcnJheSBvZlxuICogT2JzZXJ2YWJsZXMsIG9yIHB1dCB0aGVtIGRpcmVjdGx5IGFzIGFyZ3VtZW50cy4gUGFzc2luZyBhbiBlbXB0eSBhcnJheSB3aWxsIHJlc3VsdFxuICogaW4gT2JzZXJ2YWJsZSB0aGF0IGNvbXBsZXRlcyBpbW1lZGlhdGVseS5cbiAqXG4gKiBgY29uY2F0YCB3aWxsIHN1YnNjcmliZSB0byBmaXJzdCBpbnB1dCBPYnNlcnZhYmxlIGFuZCBlbWl0IGFsbCBpdHMgdmFsdWVzLCB3aXRob3V0XG4gKiBjaGFuZ2luZyBvciBhZmZlY3RpbmcgdGhlbSBpbiBhbnkgd2F5LiBXaGVuIHRoYXQgT2JzZXJ2YWJsZSBjb21wbGV0ZXMsIGl0IHdpbGxcbiAqIHN1YnNjcmliZSB0byB0aGVuIG5leHQgT2JzZXJ2YWJsZSBwYXNzZWQgYW5kLCBhZ2FpbiwgZW1pdCBpdHMgdmFsdWVzLiBUaGlzIHdpbGwgYmVcbiAqIHJlcGVhdGVkLCB1bnRpbCB0aGUgb3BlcmF0b3IgcnVucyBvdXQgb2YgT2JzZXJ2YWJsZXMuIFdoZW4gbGFzdCBpbnB1dCBPYnNlcnZhYmxlIGNvbXBsZXRlcyxcbiAqIGBjb25jYXRgIHdpbGwgY29tcGxldGUgYXMgd2VsbC4gQXQgYW55IGdpdmVuIG1vbWVudCBvbmx5IG9uZSBPYnNlcnZhYmxlIHBhc3NlZCB0byBvcGVyYXRvclxuICogZW1pdHMgdmFsdWVzLiBJZiB5b3Ugd291bGQgbGlrZSB0byBlbWl0IHZhbHVlcyBmcm9tIHBhc3NlZCBPYnNlcnZhYmxlcyBjb25jdXJyZW50bHksIGNoZWNrIG91dFxuICoge0BsaW5rIG1lcmdlfSBpbnN0ZWFkLCBlc3BlY2lhbGx5IHdpdGggb3B0aW9uYWwgYGNvbmN1cnJlbnRgIHBhcmFtZXRlci4gQXMgYSBtYXR0ZXIgb2YgZmFjdCxcbiAqIGBjb25jYXRgIGlzIGFuIGVxdWl2YWxlbnQgb2YgYG1lcmdlYCBvcGVyYXRvciB3aXRoIGBjb25jdXJyZW50YCBwYXJhbWV0ZXIgc2V0IHRvIGAxYC5cbiAqXG4gKiBOb3RlIHRoYXQgaWYgc29tZSBpbnB1dCBPYnNlcnZhYmxlIG5ldmVyIGNvbXBsZXRlcywgYGNvbmNhdGAgd2lsbCBhbHNvIG5ldmVyIGNvbXBsZXRlXG4gKiBhbmQgT2JzZXJ2YWJsZXMgZm9sbG93aW5nIHRoZSBvbmUgdGhhdCBkaWQgbm90IGNvbXBsZXRlIHdpbGwgbmV2ZXIgYmUgc3Vic2NyaWJlZC4gT24gdGhlIG90aGVyXG4gKiBoYW5kLCBpZiBzb21lIE9ic2VydmFibGUgc2ltcGx5IGNvbXBsZXRlcyBpbW1lZGlhdGVseSBhZnRlciBpdCBpcyBzdWJzY3JpYmVkLCBpdCB3aWxsIGJlXG4gKiBpbnZpc2libGUgZm9yIGBjb25jYXRgLCB3aGljaCB3aWxsIGp1c3QgbW92ZSBvbiB0byB0aGUgbmV4dCBPYnNlcnZhYmxlLlxuICpcbiAqIElmIGFueSBPYnNlcnZhYmxlIGluIGNoYWluIGVycm9ycywgaW5zdGVhZCBvZiBwYXNzaW5nIGNvbnRyb2wgdG8gdGhlIG5leHQgT2JzZXJ2YWJsZSxcbiAqIGBjb25jYXRgIHdpbGwgZXJyb3IgaW1tZWRpYXRlbHkgYXMgd2VsbC4gT2JzZXJ2YWJsZXMgdGhhdCB3b3VsZCBiZSBzdWJzY3JpYmVkIGFmdGVyXG4gKiB0aGUgb25lIHRoYXQgZW1pdHRlZCBlcnJvciwgbmV2ZXIgd2lsbC5cbiAqXG4gKiBJZiB5b3UgcGFzcyB0byBgY29uY2F0YCB0aGUgc2FtZSBPYnNlcnZhYmxlIG1hbnkgdGltZXMsIGl0cyBzdHJlYW0gb2YgdmFsdWVzXG4gKiB3aWxsIGJlIFwicmVwbGF5ZWRcIiBvbiBldmVyeSBzdWJzY3JpcHRpb24sIHdoaWNoIG1lYW5zIHlvdSBjYW4gcmVwZWF0IGdpdmVuIE9ic2VydmFibGVcbiAqIGFzIG1hbnkgdGltZXMgYXMgeW91IGxpa2UuIElmIHBhc3NpbmcgdGhlIHNhbWUgT2JzZXJ2YWJsZSB0byBgY29uY2F0YCAxMDAwIHRpbWVzIGJlY29tZXMgdGVkaW91cyxcbiAqIHlvdSBjYW4gYWx3YXlzIHVzZSB7QGxpbmsgcmVwZWF0fS5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIENvbmNhdGVuYXRlIGEgdGltZXIgY291bnRpbmcgZnJvbSAwIHRvIDMgd2l0aCBhIHN5bmNocm9ub3VzIHNlcXVlbmNlIGZyb20gMSB0byAxMFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSwgcmFuZ2UsIGNvbmNhdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHRpbWVyID0gaW50ZXJ2YWwoMTAwMCkucGlwZSh0YWtlKDQpKTtcbiAqIGNvbnN0IHNlcXVlbmNlID0gcmFuZ2UoMSwgMTApO1xuICogY29uc3QgcmVzdWx0ID0gY29uY2F0KHRpbWVyLCBzZXF1ZW5jZSk7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIHJlc3VsdHMgaW46XG4gKiAvLyAwIC0xMDAwbXMtPiAxIC0xMDAwbXMtPiAyIC0xMDAwbXMtPiAzIC1pbW1lZGlhdGUtPiAxIC4uLiAxMFxuICogYGBgXG4gKlxuICogQ29uY2F0ZW5hdGUgMyBPYnNlcnZhYmxlc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSwgY29uY2F0IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgdGltZXIxID0gaW50ZXJ2YWwoMTAwMCkucGlwZSh0YWtlKDEwKSk7XG4gKiBjb25zdCB0aW1lcjIgPSBpbnRlcnZhbCgyMDAwKS5waXBlKHRha2UoNikpO1xuICogY29uc3QgdGltZXIzID0gaW50ZXJ2YWwoNTAwKS5waXBlKHRha2UoMTApKTtcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBjb25jYXQodGltZXIxLCB0aW1lcjIsIHRpbWVyMyk7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIHJlc3VsdHMgaW4gdGhlIGZvbGxvd2luZzpcbiAqIC8vIChQcmludHMgdG8gY29uc29sZSBzZXF1ZW50aWFsbHkpXG4gKiAvLyAtMTAwMG1zLT4gMCAtMTAwMG1zLT4gMSAtMTAwMG1zLT4gLi4uIDlcbiAqIC8vIC0yMDAwbXMtPiAwIC0yMDAwbXMtPiAxIC0yMDAwbXMtPiAuLi4gNVxuICogLy8gLTUwMG1zLT4gMCAtNTAwbXMtPiAxIC01MDBtcy0+IC4uLiA5XG4gKiBgYGBcbiAqXG4gKiBDb25jYXRlbmF0ZSB0aGUgc2FtZSBPYnNlcnZhYmxlIHRvIHJlcGVhdCBpdFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSwgY29uY2F0IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgdGltZXIgPSBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoMikpO1xuICpcbiAqIGNvbmNhdCh0aW1lciwgdGltZXIpIC8vIGNvbmNhdGVuYXRpbmcgdGhlIHNhbWUgT2JzZXJ2YWJsZSFcbiAqICAgLnN1YnNjcmliZSh7XG4gKiAgICAgbmV4dDogdmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpLFxuICogICAgIGNvbXBsZXRlOiAoKSA9PiBjb25zb2xlLmxvZygnLi4uYW5kIGl0IGlzIGRvbmUhJylcbiAqICAgfSk7XG4gKlxuICogLy8gTG9nczpcbiAqIC8vIDAgYWZ0ZXIgMXNcbiAqIC8vIDEgYWZ0ZXIgMnNcbiAqIC8vIDAgYWZ0ZXIgM3NcbiAqIC8vIDEgYWZ0ZXIgNHNcbiAqIC8vICcuLi5hbmQgaXQgaXMgZG9uZSEnIGFsc28gYWZ0ZXIgNHNcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGNvbmNhdEFsbH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcFRvfVxuICogQHNlZSB7QGxpbmsgc3RhcnRXaXRofVxuICogQHNlZSB7QGxpbmsgZW5kV2l0aH1cbiAqXG4gKiBAcGFyYW0gYXJncyBJbnB1dCBPYnNlcnZhYmxlcyB0byBjb25jYXRlbmF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzOiBhbnlbXSk6IE9ic2VydmFibGU8dW5rbm93bj4ge1xuICByZXR1cm4gY29uY2F0QWxsKCkoZnJvbShhcmdzLCBwb3BTY2hlZHVsZXIoYXJncykpKTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYXN5bmMgYXMgYXN5bmNTY2hlZHVsZXIgfSBmcm9tICcuLi9zY2hlZHVsZXIvYXN5bmMnO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmltcG9ydCB7IGlzVmFsaWREYXRlIH0gZnJvbSAnLi4vdXRpbC9pc0RhdGUnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IHdpbGwgd2FpdCBmb3IgYSBzcGVjaWZpZWQgdGltZSBwZXJpb2QsIG9yIGV4YWN0IGRhdGUsIGJlZm9yZVxuICogZW1pdHRpbmcgdGhlIG51bWJlciAwLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5Vc2VkIHRvIGVtaXQgYSBub3RpZmljYXRpb24gYWZ0ZXIgYSBkZWxheS48L3NwYW4+XG4gKlxuICogVGhpcyBvYnNlcnZhYmxlIGlzIHVzZWZ1bCBmb3IgY3JlYXRpbmcgZGVsYXlzIGluIGNvZGUsIG9yIHJhY2luZyBhZ2FpbnN0IG90aGVyIHZhbHVlc1xuICogZm9yIGFkLWhvYyB0aW1lb3V0cy5cbiAqXG4gKiBUaGUgYGRlbGF5YCBpcyBzcGVjaWZpZWQgYnkgZGVmYXVsdCBpbiBtaWxsaXNlY29uZHMsIGhvd2V2ZXIgcHJvdmlkaW5nIGEgY3VzdG9tIHNjaGVkdWxlciBjb3VsZFxuICogY3JlYXRlIGEgZGlmZmVyZW50IGJlaGF2aW9yLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogV2FpdCAzIHNlY29uZHMgYW5kIHN0YXJ0IGFub3RoZXIgb2JzZXJ2YWJsZVxuICpcbiAqIFlvdSBtaWdodCB3YW50IHRvIHVzZSBgdGltZXJgIHRvIGRlbGF5IHN1YnNjcmlwdGlvbiB0byBhblxuICogb2JzZXJ2YWJsZSBieSBhIHNldCBhbW91bnQgb2YgdGltZS4gSGVyZSB3ZSB1c2UgYSB0aW1lciB3aXRoXG4gKiB7QGxpbmsgY29uY2F0TWFwVG99IG9yIHtAbGluayBjb25jYXRNYXB9IGluIG9yZGVyIHRvIHdhaXRcbiAqIGEgZmV3IHNlY29uZHMgYW5kIHN0YXJ0IGEgc3Vic2NyaXB0aW9uIHRvIGEgc291cmNlLlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgdGltZXIsIGNvbmNhdE1hcCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIC8vIFRoaXMgY291bGQgYmUgYW55IG9ic2VydmFibGVcbiAqIGNvbnN0IHNvdXJjZSA9IG9mKDEsIDIsIDMpO1xuICpcbiAqIHRpbWVyKDMwMDApXG4gKiAgIC5waXBlKGNvbmNhdE1hcCgoKSA9PiBzb3VyY2UpKVxuICogICAuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAqIGBgYFxuICpcbiAqIFRha2UgYWxsIHZhbHVlcyB1bnRpbCB0aGUgc3RhcnQgb2YgdGhlIG5leHQgbWludXRlXG4gKlxuICogVXNpbmcgYSBgRGF0ZWAgYXMgdGhlIHRyaWdnZXIgZm9yIHRoZSBmaXJzdCBlbWlzc2lvbiwgeW91IGNhblxuICogZG8gdGhpbmdzIGxpa2Ugd2FpdCB1bnRpbCBtaWRuaWdodCB0byBmaXJlIGFuIGV2ZW50LCBvciBpbiB0aGlzIGNhc2UsXG4gKiB3YWl0IHVudGlsIGEgbmV3IG1pbnV0ZSBzdGFydHMgKGNob3NlbiBzbyB0aGUgZXhhbXBsZSB3b3VsZG4ndCB0YWtlXG4gKiB0b28gbG9uZyB0byBydW4pIGluIG9yZGVyIHRvIHN0b3Agd2F0Y2hpbmcgYSBzdHJlYW0uIExldmVyYWdpbmdcbiAqIHtAbGluayB0YWtlVW50aWx9LlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZVVudGlsLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuICpcbiAqIC8vIEJ1aWxkIGEgRGF0ZSBvYmplY3QgdGhhdCBtYXJrcyB0aGVcbiAqIC8vIG5leHQgbWludXRlLlxuICogY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICogY29uc3Qgc3RhcnRPZk5leHRNaW51dGUgPSBuZXcgRGF0ZShcbiAqICAgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcbiAqICAgY3VycmVudERhdGUuZ2V0TW9udGgoKSxcbiAqICAgY3VycmVudERhdGUuZ2V0RGF0ZSgpLFxuICogICBjdXJyZW50RGF0ZS5nZXRIb3VycygpLFxuICogICBjdXJyZW50RGF0ZS5nZXRNaW51dGVzKCkgKyAxXG4gKiApO1xuICpcbiAqIC8vIFRoaXMgY291bGQgYmUgYW55IG9ic2VydmFibGUgc3RyZWFtXG4gKiBjb25zdCBzb3VyY2UgPSBpbnRlcnZhbCgxMDAwKTtcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBzb3VyY2UucGlwZShcbiAqICAgdGFrZVVudGlsKHRpbWVyKHN0YXJ0T2ZOZXh0TWludXRlKSlcbiAqICk7XG4gKlxuICogcmVzdWx0LnN1YnNjcmliZShjb25zb2xlLmxvZyk7XG4gKiBgYGBcbiAqXG4gKiAjIyMgS25vd24gTGltaXRhdGlvbnNcbiAqXG4gKiAtIFRoZSB7QGxpbmsgYXN5bmNTY2hlZHVsZXJ9IHVzZXMgYHNldFRpbWVvdXRgIHdoaWNoIGhhcyBsaW1pdGF0aW9ucyBmb3IgaG93IGZhciBpbiB0aGUgZnV0dXJlIGl0IGNhbiBiZSBzY2hlZHVsZWQuXG4gKlxuICogLSBJZiBhIGBzY2hlZHVsZXJgIGlzIHByb3ZpZGVkIHRoYXQgcmV0dXJucyBhIHRpbWVzdGFtcCBvdGhlciB0aGFuIGFuIGVwb2NoIGZyb20gYG5vdygpYCwgYW5kXG4gKiBhIGBEYXRlYCBvYmplY3QgaXMgcGFzc2VkIHRvIHRoZSBgZHVlVGltZWAgYXJndW1lbnQsIHRoZSBjYWxjdWxhdGlvbiBmb3Igd2hlbiB0aGUgZmlyc3QgZW1pc3Npb25cbiAqIHNob3VsZCBvY2N1ciB3aWxsIGJlIGluY29ycmVjdC4gSW4gdGhpcyBjYXNlLCBpdCB3b3VsZCBiZSBiZXN0IHRvIGRvIHlvdXIgb3duIGNhbGN1bGF0aW9uc1xuICogYWhlYWQgb2YgdGltZSwgYW5kIHBhc3MgYSBgbnVtYmVyYCBpbiBhcyB0aGUgYGR1ZVRpbWVgLlxuICpcbiAqIEBwYXJhbSBkdWUgSWYgYSBgbnVtYmVyYCwgdGhlIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBlbWl0dGluZy5cbiAqIElmIGEgYERhdGVgLCB0aGUgZXhhY3QgdGltZSBhdCB3aGljaCB0byBlbWl0LlxuICogQHBhcmFtIHNjaGVkdWxlciBUaGUgc2NoZWR1bGVyIHRvIHVzZSB0byBzY2hlZHVsZSB0aGUgZGVsYXkuIERlZmF1bHRzIHRvIHtAbGluayBhc3luY1NjaGVkdWxlcn0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihkdWU6IG51bWJlciB8IERhdGUsIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPDA+O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IHN0YXJ0cyBhbiBpbnRlcnZhbCBhZnRlciBhIHNwZWNpZmllZCBkZWxheSwgZW1pdHRpbmcgaW5jcmVtZW50aW5nIG51bWJlcnMgLS0gc3RhcnRpbmcgYXQgYDBgIC0tXG4gKiBvbiBlYWNoIGludGVydmFsIGFmdGVyIHdvcmRzLlxuICpcbiAqIFRoZSBgZGVsYXlgIGFuZCBgaW50ZXJ2YWxEdXJhdGlvbmAgYXJlIHNwZWNpZmllZCBieSBkZWZhdWx0IGluIG1pbGxpc2Vjb25kcywgaG93ZXZlciBwcm92aWRpbmcgYSBjdXN0b20gc2NoZWR1bGVyIGNvdWxkXG4gKiBjcmVhdGUgYSBkaWZmZXJlbnQgYmVoYXZpb3IuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqICMjIyBTdGFydCBhbiBpbnRlcnZhbCB0aGF0IHN0YXJ0cyByaWdodCBhd2F5XG4gKlxuICogU2luY2Uge0BsaW5rIGludGVydmFsfSB3YWl0cyBmb3IgdGhlIHBhc3NlZCBkZWxheSBiZWZvcmUgc3RhcnRpbmcsXG4gKiBzb21ldGltZXMgdGhhdCdzIG5vdCBpZGVhbC4gWW91IG1heSB3YW50IHRvIHN0YXJ0IGFuIGludGVydmFsIGltbWVkaWF0ZWx5LlxuICogYHRpbWVyYCB3b3JrcyB3ZWxsIGZvciB0aGlzLiBIZXJlIHdlIGhhdmUgYm90aCBzaWRlLWJ5LXNpZGUgc28geW91IGNhblxuICogc2VlIHRoZW0gaW4gY29tcGFyaXNvbi5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBvYnNlcnZhYmxlIHdpbGwgbmV2ZXIgY29tcGxldGUuXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IHRpbWVyLCBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIHRpbWVyKDAsIDEwMDApLnN1YnNjcmliZShuID0+IGNvbnNvbGUubG9nKCd0aW1lcicsIG4pKTtcbiAqIGludGVydmFsKDEwMDApLnN1YnNjcmliZShuID0+IGNvbnNvbGUubG9nKCdpbnRlcnZhbCcsIG4pKTtcbiAqIGBgYFxuICpcbiAqICMjIyBLbm93biBMaW1pdGF0aW9uc1xuICpcbiAqIC0gVGhlIHtAbGluayBhc3luY1NjaGVkdWxlcn0gdXNlcyBgc2V0VGltZW91dGAgd2hpY2ggaGFzIGxpbWl0YXRpb25zIGZvciBob3cgZmFyIGluIHRoZSBmdXR1cmUgaXQgY2FuIGJlIHNjaGVkdWxlZC5cbiAqXG4gKiAtIElmIGEgYHNjaGVkdWxlcmAgaXMgcHJvdmlkZWQgdGhhdCByZXR1cm5zIGEgdGltZXN0YW1wIG90aGVyIHRoYW4gYW4gZXBvY2ggZnJvbSBgbm93KClgLCBhbmRcbiAqIGEgYERhdGVgIG9iamVjdCBpcyBwYXNzZWQgdG8gdGhlIGBkdWVUaW1lYCBhcmd1bWVudCwgdGhlIGNhbGN1bGF0aW9uIGZvciB3aGVuIHRoZSBmaXJzdCBlbWlzc2lvblxuICogc2hvdWxkIG9jY3VyIHdpbGwgYmUgaW5jb3JyZWN0LiBJbiB0aGlzIGNhc2UsIGl0IHdvdWxkIGJlIGJlc3QgdG8gZG8geW91ciBvd24gY2FsY3VsYXRpb25zXG4gKiBhaGVhZCBvZiB0aW1lLCBhbmQgcGFzcyBhIGBudW1iZXJgIGluIGFzIHRoZSBgc3RhcnREdWVgLlxuICogQHBhcmFtIHN0YXJ0RHVlIElmIGEgYG51bWJlcmAsIGlzIHRoZSB0aW1lIHRvIHdhaXQgYmVmb3JlIHN0YXJ0aW5nIHRoZSBpbnRlcnZhbC5cbiAqIElmIGEgYERhdGVgLCBpcyB0aGUgZXhhY3QgdGltZSBhdCB3aGljaCB0byBzdGFydCB0aGUgaW50ZXJ2YWwuXG4gKiBAcGFyYW0gaW50ZXJ2YWxEdXJhdGlvbiBUaGUgZGVsYXkgYmV0d2VlbiBlYWNoIHZhbHVlIGVtaXR0ZWQgaW4gdGhlIGludGVydmFsLiBQYXNzaW5nIGFcbiAqIG5lZ2F0aXZlIG51bWJlciBoZXJlIHdpbGwgcmVzdWx0IGluIGltbWVkaWF0ZSBjb21wbGV0aW9uIGFmdGVyIHRoZSBmaXJzdCB2YWx1ZSBpcyBlbWl0dGVkLCBhcyB0aG91Z2hcbiAqIG5vIGBpbnRlcnZhbER1cmF0aW9uYCB3YXMgcGFzc2VkIGF0IGFsbC5cbiAqIEBwYXJhbSBzY2hlZHVsZXIgVGhlIHNjaGVkdWxlciB0byB1c2UgdG8gc2NoZWR1bGUgdGhlIGRlbGF5LiBEZWZhdWx0cyB0byB7QGxpbmsgYXN5bmNTY2hlZHVsZXJ9LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZXIoc3RhcnREdWU6IG51bWJlciB8IERhdGUsIGludGVydmFsRHVyYXRpb246IG51bWJlciwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBUaGUgc2lnbmF0dXJlIGFsbG93aW5nIGB1bmRlZmluZWRgIHRvIGJlIHBhc3NlZCBmb3IgYGludGVydmFsRHVyYXRpb25gIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIHRoZSBgdGltZXIoZHVlVGltZSwgc2NoZWR1bGVyPylgIHNpZ25hdHVyZSBpbnN0ZWFkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZXIoZHVlVGltZTogbnVtYmVyIHwgRGF0ZSwgdW51c2VkOiB1bmRlZmluZWQsIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPDA+O1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZXIoXG4gIGR1ZVRpbWU6IG51bWJlciB8IERhdGUgPSAwLFxuICBpbnRlcnZhbE9yU2NoZWR1bGVyPzogbnVtYmVyIHwgU2NoZWR1bGVyTGlrZSxcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlID0gYXN5bmNTY2hlZHVsZXJcbik6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gIC8vIFNpbmNlIG5lZ2F0aXZlIGludGVydmFsRHVyYXRpb24gaXMgdHJlYXRlZCBhcyB0aG91Z2ggbm9cbiAgLy8gaW50ZXJ2YWwgd2FzIHNwZWNpZmllZCBhdCBhbGwsIHdlIHN0YXJ0IHdpdGggYSBuZWdhdGl2ZSBudW1iZXIuXG4gIGxldCBpbnRlcnZhbER1cmF0aW9uID0gLTE7XG5cbiAgaWYgKGludGVydmFsT3JTY2hlZHVsZXIgIT0gbnVsbCkge1xuICAgIC8vIElmIHdlIGhhdmUgYSBzZWNvbmQgYXJndW1lbnQsIGFuZCBpdCdzIGEgc2NoZWR1bGVyLFxuICAgIC8vIG92ZXJyaWRlIHRoZSBzY2hlZHVsZXIgd2UgaGFkIGRlZmF1bHRlZC4gT3RoZXJ3aXNlLFxuICAgIC8vIGl0IG11c3QgYmUgYW4gaW50ZXJ2YWwuXG4gICAgaWYgKGlzU2NoZWR1bGVyKGludGVydmFsT3JTY2hlZHVsZXIpKSB7XG4gICAgICBzY2hlZHVsZXIgPSBpbnRlcnZhbE9yU2NoZWR1bGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3RlIHRoYXQgdGhpcyAqY291bGQqIGJlIG5lZ2F0aXZlLCBpbiB3aGljaCBjYXNlXG4gICAgICAvLyBpdCdzIGxpa2Ugbm90IHBhc3NpbmcgYW4gaW50ZXJ2YWxEdXJhdGlvbiBhdCBhbGwuXG4gICAgICBpbnRlcnZhbER1cmF0aW9uID0gaW50ZXJ2YWxPclNjaGVkdWxlcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXIpID0+IHtcbiAgICAvLyBJZiBhIHZhbGlkIGRhdGUgaXMgcGFzc2VkLCBjYWxjdWxhdGUgaG93IGxvbmcgdG8gd2FpdCBiZWZvcmVcbiAgICAvLyBleGVjdXRpbmcgdGhlIGZpcnN0IHZhbHVlLi4uIG90aGVyd2lzZSwgaWYgaXQncyBhIG51bWJlciBqdXN0IHNjaGVkdWxlXG4gICAgLy8gdGhhdCBtYW55IG1pbGxpc2Vjb25kcyAob3Igc2NoZWR1bGVyLXNwZWNpZmllZCB1bml0IHNpemUpIGluIHRoZSBmdXR1cmUuXG4gICAgbGV0IGR1ZSA9IGlzVmFsaWREYXRlKGR1ZVRpbWUpID8gK2R1ZVRpbWUgLSBzY2hlZHVsZXIhLm5vdygpIDogZHVlVGltZTtcblxuICAgIGlmIChkdWUgPCAwKSB7XG4gICAgICAvLyBFbnN1cmUgd2UgZG9uJ3Qgc2NoZWR1bGUgaW4gdGhlIGZ1dHVyZS5cbiAgICAgIGR1ZSA9IDA7XG4gICAgfVxuXG4gICAgLy8gVGhlIGluY3JlbWVudGluZyB2YWx1ZSB3ZSBlbWl0LlxuICAgIGxldCBuID0gMDtcblxuICAgIC8vIFN0YXJ0IHRoZSB0aW1lci5cbiAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgLy8gRW1pdCB0aGUgbmV4dCB2YWx1ZSBhbmQgaW5jcmVtZW50LlxuICAgICAgICBzdWJzY3JpYmVyLm5leHQobisrKTtcblxuICAgICAgICBpZiAoMCA8PSBpbnRlcnZhbER1cmF0aW9uKSB7XG4gICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGludGVydmFsIGFmdGVyIHRoZSBpbml0aWFsIHRpbWVyLFxuICAgICAgICAgIC8vIHJlc2NoZWR1bGUgd2l0aCB0aGUgcGVyaW9kLlxuICAgICAgICAgIHRoaXMuc2NoZWR1bGUodW5kZWZpbmVkLCBpbnRlcnZhbER1cmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBXZSBkaWRuJ3QgaGF2ZSBhbiBpbnRlcnZhbC4gU28ganVzdCBjb21wbGV0ZS5cbiAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBkdWUpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBFTVBUWSB9IGZyb20gJy4uL29ic2VydmFibGUvZW1wdHknO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5cbi8qKlxuICogRW1pdHMgb25seSB0aGUgZmlyc3QgYGNvdW50YCB2YWx1ZXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPlRha2VzIHRoZSBmaXJzdCBgY291bnRgIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2UsIHRoZW5cbiAqIGNvbXBsZXRlcy48L3NwYW4+XG4gKlxuICogIVtdKHRha2UucG5nKVxuICpcbiAqIGB0YWtlYCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBvbmx5IHRoZSBmaXJzdCBgY291bnRgIHZhbHVlcyBlbWl0dGVkXG4gKiBieSB0aGUgc291cmNlIE9ic2VydmFibGUuIElmIHRoZSBzb3VyY2UgZW1pdHMgZmV3ZXIgdGhhbiBgY291bnRgIHZhbHVlcyB0aGVuXG4gKiBhbGwgb2YgaXRzIHZhbHVlcyBhcmUgZW1pdHRlZC4gQWZ0ZXIgdGhhdCwgaXQgY29tcGxldGVzLCByZWdhcmRsZXNzIGlmIHRoZVxuICogc291cmNlIGNvbXBsZXRlcy5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogVGFrZSB0aGUgZmlyc3QgNSBzZWNvbmRzIG9mIGFuIGluZmluaXRlIDEtc2Vjb25kIGludGVydmFsIE9ic2VydmFibGVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBpbnRlcnZhbENvdW50ID0gaW50ZXJ2YWwoMTAwMCk7XG4gKiBjb25zdCB0YWtlRml2ZSA9IGludGVydmFsQ291bnQucGlwZSh0YWtlKDUpKTtcbiAqIHRha2VGaXZlLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gMFxuICogLy8gMVxuICogLy8gMlxuICogLy8gM1xuICogLy8gNFxuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgdGFrZUxhc3R9XG4gKiBAc2VlIHtAbGluayB0YWtlVW50aWx9XG4gKiBAc2VlIHtAbGluayB0YWtlV2hpbGV9XG4gKiBAc2VlIHtAbGluayBza2lwfVxuICpcbiAqIEBwYXJhbSBjb3VudCBUaGUgbWF4aW11bSBudW1iZXIgb2YgYG5leHRgIHZhbHVlcyB0byBlbWl0LlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgb25seSB0aGUgZmlyc3RcbiAqIGBjb3VudGAgdmFsdWVzIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCBvciBhbGwgb2YgdGhlIHZhbHVlcyBmcm9tXG4gKiB0aGUgc291cmNlIGlmIHRoZSBzb3VyY2UgZW1pdHMgZmV3ZXIgdGhhbiBgY291bnRgIHZhbHVlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRha2U8VD4oY291bnQ6IG51bWJlcik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gIHJldHVybiBjb3VudCA8PSAwXG4gICAgPyAvLyBJZiB3ZSBhcmUgdGFraW5nIG5vIHZhbHVlcywgdGhhdCdzIGVtcHR5LlxuICAgICAgKCkgPT4gRU1QVFlcbiAgICA6IG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4ge1xuICAgICAgICBsZXQgc2VlbiA9IDA7XG4gICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICAgICAgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gSW5jcmVtZW50IHRoZSBudW1iZXIgb2YgdmFsdWVzIHdlIGhhdmUgc2VlbixcbiAgICAgICAgICAgIC8vIHRoZW4gY2hlY2sgaXQgYWdhaW5zdCB0aGUgYWxsb3dlZCBjb3VudCB0byBzZWVcbiAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBzdGlsbCBsZXR0aW5nIHZhbHVlcyB0aHJvdWdoLlxuICAgICAgICAgICAgaWYgKCsrc2VlbiA8PSBjb3VudCkge1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIG1ldCBvciBwYXNzZWQgb3VyIGFsbG93ZWQgY291bnQsXG4gICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY29tcGxldGUuIFdlIGhhdmUgdG8gZG8gPD0gaGVyZSxcbiAgICAgICAgICAgICAgLy8gYmVjYXVzZSByZS1lbnRyYW50IGNvZGUgd2lsbCBpbmNyZW1lbnQgYHNlZW5gIHR3aWNlLlxuICAgICAgICAgICAgICBpZiAoY291bnQgPD0gc2Vlbikge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbn1cbiIsICJpbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi4vdXRpbC9ub29wJztcblxuLyoqXG4gKiBJZ25vcmVzIGFsbCBpdGVtcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBhbmQgb25seSBwYXNzZXMgY2FsbHMgb2YgYGNvbXBsZXRlYCBvciBgZXJyb3JgLlxuICpcbiAqICFbXShpZ25vcmVFbGVtZW50cy5wbmcpXG4gKlxuICogVGhlIGBpZ25vcmVFbGVtZW50c2Agb3BlcmF0b3Igc3VwcHJlc3NlcyBhbGwgaXRlbXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUsXG4gKiBidXQgYWxsb3dzIGl0cyB0ZXJtaW5hdGlvbiBub3RpZmljYXRpb24gKGVpdGhlciBgZXJyb3JgIG9yIGBjb21wbGV0ZWApIHRvIHBhc3MgdGhyb3VnaCB1bmNoYW5nZWQuXG4gKlxuICogSWYgeW91IGRvIG5vdCBjYXJlIGFib3V0IHRoZSBpdGVtcyBiZWluZyBlbWl0dGVkIGJ5IGFuIE9ic2VydmFibGUsIGJ1dCB5b3UgZG8gd2FudCB0byBiZSBub3RpZmllZFxuICogd2hlbiBpdCBjb21wbGV0ZXMgb3Igd2hlbiBpdCB0ZXJtaW5hdGVzIHdpdGggYW4gZXJyb3IsIHlvdSBjYW4gYXBwbHkgdGhlIGBpZ25vcmVFbGVtZW50c2Agb3BlcmF0b3JcbiAqIHRvIHRoZSBPYnNlcnZhYmxlLCB3aGljaCB3aWxsIGVuc3VyZSB0aGF0IGl0IHdpbGwgbmV2ZXIgY2FsbCBpdHMgb2JzZXJ2ZXJzXHUyMDE5IGBuZXh0YCBoYW5kbGVycy5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogSWdub3JlIGFsbCBgbmV4dGAgZW1pc3Npb25zIGZyb20gdGhlIHNvdXJjZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgaWdub3JlRWxlbWVudHMgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBvZigneW91JywgJ3RhbGtpbmcnLCAndG8nLCAnbWUnKVxuICogICAucGlwZShpZ25vcmVFbGVtZW50cygpKVxuICogICAuc3Vic2NyaWJlKHtcbiAqICAgICBuZXh0OiB3b3JkID0+IGNvbnNvbGUubG9nKHdvcmQpLFxuICogICAgIGVycm9yOiBlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yOicsIGVyciksXG4gKiAgICAgY29tcGxldGU6ICgpID0+IGNvbnNvbGUubG9nKCd0aGUgZW5kJyksXG4gKiAgIH0pO1xuICpcbiAqIC8vIHJlc3VsdDpcbiAqIC8vICd0aGUgZW5kJ1xuICogYGBgXG4gKlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBlbXB0eSBPYnNlcnZhYmxlIHRoYXQgb25seSBjYWxsc1xuICogYGNvbXBsZXRlYCBvciBgZXJyb3JgLCBiYXNlZCBvbiB3aGljaCBvbmUgaXMgY2FsbGVkIGJ5IHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZ25vcmVFbGVtZW50cygpOiBPcGVyYXRvckZ1bmN0aW9uPHVua25vd24sIG5ldmVyPiB7XG4gIHJldHVybiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IHtcbiAgICBzb3VyY2Uuc3Vic2NyaWJlKGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBub29wKSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL21hcCc7XG5cbi8qKiBAZGVwcmVjYXRlZCBUbyBiZSByZW1vdmVkIGluIHY5LiBVc2Uge0BsaW5rIG1hcH0gaW5zdGVhZDogYG1hcCgoKSA9PiB2YWx1ZSlgLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvPFI+KHZhbHVlOiBSKTogT3BlcmF0b3JGdW5jdGlvbjx1bmtub3duLCBSPjtcbi8qKlxuICogQGRlcHJlY2F0ZWQgRG8gbm90IHNwZWNpZnkgZXhwbGljaXQgdHlwZSBwYXJhbWV0ZXJzLiBTaWduYXR1cmVzIHdpdGggdHlwZSBwYXJhbWV0ZXJzXG4gKiB0aGF0IGNhbm5vdCBiZSBpbmZlcnJlZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIGBtYXBUb2AgaXRzZWxmIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OSxcbiAqIHVzZSB7QGxpbmsgbWFwfSBpbnN0ZWFkOiBgbWFwKCgpID0+IHZhbHVlKWAuXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvPFQsIFI+KHZhbHVlOiBSKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPjtcblxuLyoqXG4gKiBFbWl0cyB0aGUgZ2l2ZW4gY29uc3RhbnQgdmFsdWUgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlIGV2ZXJ5IHRpbWUgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSBlbWl0cyBhIHZhbHVlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5MaWtlIHtAbGluayBtYXB9LCBidXQgaXQgbWFwcyBldmVyeSBzb3VyY2UgdmFsdWUgdG9cbiAqIHRoZSBzYW1lIG91dHB1dCB2YWx1ZSBldmVyeSB0aW1lLjwvc3Bhbj5cbiAqXG4gKiAhW10obWFwVG8ucG5nKVxuICpcbiAqIFRha2VzIGEgY29uc3RhbnQgYHZhbHVlYCBhcyBhcmd1bWVudCwgYW5kIGVtaXRzIHRoYXQgd2hlbmV2ZXIgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSBlbWl0cyBhIHZhbHVlLiBJbiBvdGhlciB3b3JkcywgaWdub3JlcyB0aGUgYWN0dWFsIHNvdXJjZSB2YWx1ZSxcbiAqIGFuZCBzaW1wbHkgdXNlcyB0aGUgZW1pc3Npb24gbW9tZW50IHRvIGtub3cgd2hlbiB0byBlbWl0IHRoZSBnaXZlbiBgdmFsdWVgLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBNYXAgZXZlcnkgY2xpY2sgdG8gdGhlIHN0cmluZyBgJ0hpJ2BcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbUV2ZW50LCBtYXBUbyB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGNsaWNrcyA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiBjb25zdCBncmVldGluZ3MgPSBjbGlja3MucGlwZShtYXBUbygnSGknKSk7XG4gKlxuICogZ3JlZXRpbmdzLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIG1hcH1cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIG1hcCBlYWNoIHNvdXJjZSB2YWx1ZSB0by5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBnaXZlbiBgdmFsdWVgXG4gKiBldmVyeSB0aW1lIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBlbWl0cy5cbiAqIEBkZXByZWNhdGVkIFRvIGJlIHJlbW92ZWQgaW4gdjkuIFVzZSB7QGxpbmsgbWFwfSBpbnN0ZWFkOiBgbWFwKCgpID0+IHZhbHVlKWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBUbzxSPih2YWx1ZTogUik6IE9wZXJhdG9yRnVuY3Rpb248dW5rbm93biwgUj4ge1xuICByZXR1cm4gbWFwKCgpID0+IHZhbHVlKTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIE9ic2VydmFibGVJbnB1dCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGNvbmNhdCB9IGZyb20gJy4uL29ic2VydmFibGUvY29uY2F0JztcbmltcG9ydCB7IHRha2UgfSBmcm9tICcuL3Rha2UnO1xuaW1wb3J0IHsgaWdub3JlRWxlbWVudHMgfSBmcm9tICcuL2lnbm9yZUVsZW1lbnRzJztcbmltcG9ydCB7IG1hcFRvIH0gZnJvbSAnLi9tYXBUbyc7XG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJy4vbWVyZ2VNYXAnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuXG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzdWJzY3JpcHRpb25EZWxheWAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxheVdoZW48VD4oXG4gIGRlbGF5RHVyYXRpb25TZWxlY3RvcjogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlSW5wdXQ8YW55PixcbiAgc3Vic2NyaXB0aW9uRGVsYXk6IE9ic2VydmFibGU8YW55PlxuKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5V2hlbjxUPihkZWxheUR1cmF0aW9uU2VsZWN0b3I6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gT2JzZXJ2YWJsZUlucHV0PGFueT4pOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD47XG5cbi8qKlxuICogRGVsYXlzIHRoZSBlbWlzc2lvbiBvZiBpdGVtcyBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBieSBhIGdpdmVuIHRpbWUgc3BhblxuICogZGV0ZXJtaW5lZCBieSB0aGUgZW1pc3Npb25zIG9mIGFub3RoZXIgT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+SXQncyBsaWtlIHtAbGluayBkZWxheX0sIGJ1dCB0aGUgdGltZSBzcGFuIG9mIHRoZVxuICogZGVsYXkgZHVyYXRpb24gaXMgZGV0ZXJtaW5lZCBieSBhIHNlY29uZCBPYnNlcnZhYmxlLjwvc3Bhbj5cbiAqXG4gKiAhW10oZGVsYXlXaGVuLnBuZylcbiAqXG4gKiBgZGVsYXlXaGVuYCBvcGVyYXRvciBzaGlmdHMgZWFjaCBlbWl0dGVkIHZhbHVlIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGJ5XG4gKiBhIHRpbWUgc3BhbiBkZXRlcm1pbmVkIGJ5IGFub3RoZXIgT2JzZXJ2YWJsZS4gV2hlbiB0aGUgc291cmNlIGVtaXRzIGEgdmFsdWUsXG4gKiB0aGUgYGRlbGF5RHVyYXRpb25TZWxlY3RvcmAgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIHZhbHVlIGVtaXR0ZWQgZnJvbVxuICogdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgYGRlbGF5RHVyYXRpb25TZWxlY3RvcmAuXG4gKiBUaGUgYGRlbGF5RHVyYXRpb25TZWxlY3RvcmAgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhbiB7QGxpbmsgT2JzZXJ2YWJsZUlucHV0fSxcbiAqIHRoYXQgaXMgaW50ZXJuYWxseSBjb252ZXJ0ZWQgdG8gYW4gT2JzZXJ2YWJsZSB0aGF0IGlzIGNhbGxlZCB0aGUgXCJkdXJhdGlvblwiXG4gKiBPYnNlcnZhYmxlLlxuICpcbiAqIFRoZSBzb3VyY2UgdmFsdWUgaXMgZW1pdHRlZCBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUgb25seSB3aGVuIHRoZSBcImR1cmF0aW9uXCJcbiAqIE9ic2VydmFibGUgZW1pdHMgKHtAbGluayBndWlkZS9nbG9zc2FyeS1hbmQtc2VtYW50aWNzI25leHQgbmV4dH1zKSBhbnkgdmFsdWUuXG4gKiBVcG9uIHRoYXQsIHRoZSBcImR1cmF0aW9uXCIgT2JzZXJ2YWJsZSBnZXRzIHVuc3Vic2NyaWJlZC5cbiAqXG4gKiBCZWZvcmUgUnhKUyBWNywgdGhlIHtAbGluayBndWlkZS9nbG9zc2FyeS1hbmQtc2VtYW50aWNzI2NvbXBsZXRlIGNvbXBsZXRpb259XG4gKiBvZiB0aGUgXCJkdXJhdGlvblwiIE9ic2VydmFibGUgd291bGQgaGF2ZSBiZWVuIHRyaWdnZXJpbmcgdGhlIGVtaXNzaW9uIG9mIHRoZVxuICogc291cmNlIHZhbHVlIHRvIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSwgYnV0IHdpdGggUnhKUyBWNywgdGhpcyBpcyBub3QgdGhlIGNhc2VcbiAqIGFueW1vcmUuXG4gKlxuICogT25seSBuZXh0IG5vdGlmaWNhdGlvbnMgKGZyb20gdGhlIFwiZHVyYXRpb25cIiBPYnNlcnZhYmxlKSB0cmlnZ2VyIHZhbHVlcyBmcm9tXG4gKiB0aGUgc291cmNlIE9ic2VydmFibGUgdG8gYmUgcGFzc2VkIHRvIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS4gSWYgdGhlIFwiZHVyYXRpb25cIlxuICogT2JzZXJ2YWJsZSBvbmx5IGVtaXRzIHRoZSBjb21wbGV0ZSBub3RpZmljYXRpb24gKHdpdGhvdXQgbmV4dCksIHRoZSB2YWx1ZVxuICogZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUgd2lsbCBuZXZlciBnZXQgdG8gdGhlIG91dHB1dCBPYnNlcnZhYmxlIC0gaXRcbiAqIHdpbGwgYmUgc3dhbGxvd2VkLiBJZiB0aGUgXCJkdXJhdGlvblwiIE9ic2VydmFibGUgZXJyb3JzLCB0aGUgZXJyb3Igd2lsbCBiZVxuICogcHJvcGFnYXRlZCB0byB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKlxuICogT3B0aW9uYWxseSwgYGRlbGF5V2hlbmAgdGFrZXMgYSBzZWNvbmQgYXJndW1lbnQsIGBzdWJzY3JpcHRpb25EZWxheWAsIHdoaWNoXG4gKiBpcyBhbiBPYnNlcnZhYmxlLiBXaGVuIGBzdWJzY3JpcHRpb25EZWxheWAgZW1pdHMgaXRzIGZpcnN0IHZhbHVlIG9yXG4gKiBjb21wbGV0ZXMsIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkIHRvIGFuZCBzdGFydHMgYmVoYXZpbmcgbGlrZVxuICogZGVzY3JpYmVkIGluIHRoZSBwcmV2aW91cyBwYXJhZ3JhcGguIElmIGBzdWJzY3JpcHRpb25EZWxheWAgaXMgbm90IHByb3ZpZGVkLFxuICogYGRlbGF5V2hlbmAgd2lsbCBzdWJzY3JpYmUgdG8gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGFzIHNvb24gYXMgdGhlIG91dHB1dFxuICogT2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBEZWxheSBlYWNoIGNsaWNrIGJ5IGEgcmFuZG9tIGFtb3VudCBvZiB0aW1lLCBiZXR3ZWVuIDAgYW5kIDUgc2Vjb25kc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIGRlbGF5V2hlbiwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBjbGlja3MgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogY29uc3QgZGVsYXllZENsaWNrcyA9IGNsaWNrcy5waXBlKFxuICogICBkZWxheVdoZW4oKCkgPT4gaW50ZXJ2YWwoTWF0aC5yYW5kb20oKSAqIDUwMDApKVxuICogKTtcbiAqIGRlbGF5ZWRDbGlja3Muc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgZGVsYXl9XG4gKiBAc2VlIHtAbGluayB0aHJvdHRsZX1cbiAqIEBzZWUge0BsaW5rIHRocm90dGxlVGltZX1cbiAqIEBzZWUge0BsaW5rIGRlYm91bmNlfVxuICogQHNlZSB7QGxpbmsgZGVib3VuY2VUaW1lfVxuICogQHNlZSB7QGxpbmsgc2FtcGxlfVxuICogQHNlZSB7QGxpbmsgc2FtcGxlVGltZX1cbiAqIEBzZWUge0BsaW5rIGF1ZGl0fVxuICogQHNlZSB7QGxpbmsgYXVkaXRUaW1lfVxuICpcbiAqIEBwYXJhbSBkZWxheUR1cmF0aW9uU2VsZWN0b3IgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gYE9ic2VydmFibGVJbnB1dGAgZm9yXG4gKiBlYWNoIGB2YWx1ZWAgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUsIHdoaWNoIGlzIHRoZW4gdXNlZCB0byBkZWxheSB0aGVcbiAqIGVtaXNzaW9uIG9mIHRoYXQgYHZhbHVlYCBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUgdW50aWwgdGhlIGBPYnNlcnZhYmxlSW5wdXRgXG4gKiByZXR1cm5lZCBmcm9tIHRoaXMgZnVuY3Rpb24gZW1pdHMgYSBuZXh0IHZhbHVlLiBXaGVuIGNhbGxlZCwgYmVzaWRlIGB2YWx1ZWAsXG4gKiB0aGlzIGZ1bmN0aW9uIHJlY2VpdmVzIGEgemVyby1iYXNlZCBgaW5kZXhgIG9mIHRoZSBlbWlzc2lvbiBvcmRlci5cbiAqIEBwYXJhbSBzdWJzY3JpcHRpb25EZWxheSBBbiBPYnNlcnZhYmxlIHRoYXQgdHJpZ2dlcnMgdGhlIHN1YnNjcmlwdGlvbiB0byB0aGVcbiAqIHNvdXJjZSBPYnNlcnZhYmxlIG9uY2UgaXQgZW1pdHMgYW55IHZhbHVlLlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZGVsYXlzIHRoZSBlbWlzc2lvbnMgb2ZcbiAqIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBieSBhbiBhbW91bnQgb2YgdGltZSBzcGVjaWZpZWQgYnkgdGhlIE9ic2VydmFibGVcbiAqIHJldHVybmVkIGJ5IGBkZWxheUR1cmF0aW9uU2VsZWN0b3JgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsYXlXaGVuPFQ+KFxuICBkZWxheUR1cmF0aW9uU2VsZWN0b3I6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gT2JzZXJ2YWJsZUlucHV0PGFueT4sXG4gIHN1YnNjcmlwdGlvbkRlbGF5PzogT2JzZXJ2YWJsZTxhbnk+XG4pOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD4ge1xuICBpZiAoc3Vic2NyaXB0aW9uRGVsYXkpIHtcbiAgICAvLyBERVBSRUNBVEVEIFBBVEhcbiAgICByZXR1cm4gKHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT5cbiAgICAgIGNvbmNhdChzdWJzY3JpcHRpb25EZWxheS5waXBlKHRha2UoMSksIGlnbm9yZUVsZW1lbnRzKCkpLCBzb3VyY2UucGlwZShkZWxheVdoZW4oZGVsYXlEdXJhdGlvblNlbGVjdG9yKSkpO1xuICB9XG5cbiAgcmV0dXJuIG1lcmdlTWFwKCh2YWx1ZSwgaW5kZXgpID0+IGlubmVyRnJvbShkZWxheUR1cmF0aW9uU2VsZWN0b3IodmFsdWUsIGluZGV4KSkucGlwZSh0YWtlKDEpLCBtYXBUbyh2YWx1ZSkpKTtcbn1cbiIsICJpbXBvcnQgeyBhc3luY1NjaGVkdWxlciB9IGZyb20gJy4uL3NjaGVkdWxlci9hc3luYyc7XG5pbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBkZWxheVdoZW4gfSBmcm9tICcuL2RlbGF5V2hlbic7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJy4uL29ic2VydmFibGUvdGltZXInO1xuXG4vKipcbiAqIERlbGF5cyB0aGUgZW1pc3Npb24gb2YgaXRlbXMgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgYnkgYSBnaXZlbiB0aW1lb3V0IG9yXG4gKiB1bnRpbCBhIGdpdmVuIERhdGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPlRpbWUgc2hpZnRzIGVhY2ggaXRlbSBieSBzb21lIHNwZWNpZmllZCBhbW91bnQgb2ZcbiAqIG1pbGxpc2Vjb25kcy48L3NwYW4+XG4gKlxuICogIVtdKGRlbGF5LnN2ZylcbiAqXG4gKiBJZiB0aGUgZGVsYXkgYXJndW1lbnQgaXMgYSBOdW1iZXIsIHRoaXMgb3BlcmF0b3IgdGltZSBzaGlmdHMgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSBieSB0aGF0IGFtb3VudCBvZiB0aW1lIGV4cHJlc3NlZCBpbiBtaWxsaXNlY29uZHMuIFRoZSByZWxhdGl2ZVxuICogdGltZSBpbnRlcnZhbHMgYmV0d2VlbiB0aGUgdmFsdWVzIGFyZSBwcmVzZXJ2ZWQuXG4gKlxuICogSWYgdGhlIGRlbGF5IGFyZ3VtZW50IGlzIGEgRGF0ZSwgdGhpcyBvcGVyYXRvciB0aW1lIHNoaWZ0cyB0aGUgc3RhcnQgb2YgdGhlXG4gKiBPYnNlcnZhYmxlIGV4ZWN1dGlvbiB1bnRpbCB0aGUgZ2l2ZW4gZGF0ZSBvY2N1cnMuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBEZWxheSBlYWNoIGNsaWNrIGJ5IG9uZSBzZWNvbmRcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbUV2ZW50LCBkZWxheSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGNsaWNrcyA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiBjb25zdCBkZWxheWVkQ2xpY2tzID0gY2xpY2tzLnBpcGUoZGVsYXkoMTAwMCkpOyAvLyBlYWNoIGNsaWNrIGVtaXR0ZWQgYWZ0ZXIgMSBzZWNvbmRcbiAqIGRlbGF5ZWRDbGlja3Muc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICogYGBgXG4gKlxuICogRGVsYXkgYWxsIGNsaWNrcyB1bnRpbCBhIGZ1dHVyZSBkYXRlIGhhcHBlbnNcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbUV2ZW50LCBkZWxheSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGNsaWNrcyA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiBjb25zdCBkYXRlID0gbmV3IERhdGUoJ01hcmNoIDE1LCAyMDUwIDEyOjAwOjAwJyk7IC8vIGluIHRoZSBmdXR1cmVcbiAqIGNvbnN0IGRlbGF5ZWRDbGlja3MgPSBjbGlja3MucGlwZShkZWxheShkYXRlKSk7IC8vIGNsaWNrIGVtaXR0ZWQgb25seSBhZnRlciB0aGF0IGRhdGVcbiAqIGRlbGF5ZWRDbGlja3Muc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgZGVsYXlXaGVufVxuICogQHNlZSB7QGxpbmsgdGhyb3R0bGV9XG4gKiBAc2VlIHtAbGluayB0aHJvdHRsZVRpbWV9XG4gKiBAc2VlIHtAbGluayBkZWJvdW5jZX1cbiAqIEBzZWUge0BsaW5rIGRlYm91bmNlVGltZX1cbiAqIEBzZWUge0BsaW5rIHNhbXBsZX1cbiAqIEBzZWUge0BsaW5rIHNhbXBsZVRpbWV9XG4gKiBAc2VlIHtAbGluayBhdWRpdH1cbiAqIEBzZWUge0BsaW5rIGF1ZGl0VGltZX1cbiAqXG4gKiBAcGFyYW0ge251bWJlcnxEYXRlfSBkdWUgVGhlIGRlbGF5IGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyAoYSBgbnVtYmVyYCkgb3JcbiAqIGEgYERhdGVgIHVudGlsIHdoaWNoIHRoZSBlbWlzc2lvbiBvZiB0aGUgc291cmNlIGl0ZW1zIGlzIGRlbGF5ZWQuXG4gKiBAcGFyYW0ge1NjaGVkdWxlckxpa2V9IFtzY2hlZHVsZXI9YXN5bmNdIFRoZSB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gdG8gdXNlIGZvclxuICogbWFuYWdpbmcgdGhlIHRpbWVycyB0aGF0IGhhbmRsZSB0aGUgdGltZS1zaGlmdCBmb3IgZWFjaCBpdGVtLlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZGVsYXlzIHRoZSBlbWlzc2lvbnMgb2ZcbiAqIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBieSB0aGUgc3BlY2lmaWVkIHRpbWVvdXQgb3IgRGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5PFQ+KGR1ZTogbnVtYmVyIHwgRGF0ZSwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlID0gYXN5bmNTY2hlZHVsZXIpOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD4ge1xuICBjb25zdCBkdXJhdGlvbiA9IHRpbWVyKGR1ZSwgc2NoZWR1bGVyKTtcbiAgcmV0dXJuIGRlbGF5V2hlbigoKSA9PiBkdXJhdGlvbik7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFByZXNzYWJsZSwgUG9pbnRlckV2ZW50IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IHR5cGUgTW91c2VFdmVudCA9IFBvaW50ZXJFdmVudCAmIHtcbiAgICBjbGllbnRYPzogbnVtYmVyO1xuICAgIGNsaWVudFk/OiBudW1iZXI7XG4gICAgcG9pbnRlcklkPzogbnVtYmVyO1xuICAgIGJ1dHRvbnM/OiBudW1iZXI7XG59O1xuZXhwb3J0IHR5cGUgV2hlZWxFdmVudCA9IFBvaW50ZXJFdmVudCAmIHsgZGVsdGFYOiBudW1iZXI7IGRlbHRhWTogbnVtYmVyOyBkZWx0YVo6IG51bWJlciB9O1xuZXhwb3J0IHR5cGUgTW91c2VIb3N0ID0gVmlldyAmIHtcbiAgICBzZXRQb2ludGVyQ2FwdHVyZTogKHBvaW50ZXJJZDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHJlbGVhc2VQb2ludGVyQ2FwdHVyZTogKHBvaW50ZXJJZDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIG9ud2hlZWw/OiAoZTogV2hlZWxFdmVudCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBlbnVtIE1vdXNlQnV0dG9uIHtcbiAgICBMZWZ0ID0gMSxcbiAgICBSaWdodCA9IDIsXG4gICAgTWlkZGxlID0gNCxcbiAgICBBbGwgPSA3LFxufVxuXG5leHBvcnQgY29uc3QgTW92ZWFibGVWaWV3ID0gKHtcbiAgICBjaGlsZHJlbixcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgcG9zaXRpb246IGluaXRQb3NpdGlvbixcbiAgICBvbk1vdmUsXG4gICAgbW91c2VCdXR0b24gPSBNb3VzZUJ1dHRvbi5BbGwsXG4gICAgZW5hYmxlU2NhbGluZyA9IGZhbHNlLFxuICAgIHdob2xlQ2FudmFzID0gZmFsc2UsXG4gICAgaW5uZXJDbGFzc05hbWUsXG4gICAgb3V0ZXJDbGFzc05hbWUsXG59OiB7XG4gICAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xuICAgIEhlYWRlckNvbXBvbmVudD86ICgpID0+IEpTWC5FbGVtZW50O1xuICAgIHBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH07XG4gICAgb25Nb3ZlOiAocG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXIgfSkgPT4gdm9pZDtcbiAgICBtb3VzZUJ1dHRvbj86IE1vdXNlQnV0dG9uO1xuICAgIGVuYWJsZVNjYWxpbmc/OiBib29sZWFuO1xuICAgIHdob2xlQ2FudmFzPzogYm9vbGVhbjtcbiAgICBpbm5lckNsYXNzTmFtZT86IHN0cmluZztcbiAgICBvdXRlckNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogaW5pdFBvc2l0aW9uLngsXG4gICAgICAgIHk6IGluaXRQb3NpdGlvbi55LFxuICAgICAgICBzY2FsZTogaW5pdFBvc2l0aW9uLnNjYWxlLFxuICAgICAgICBkcmFnUG9pbnRlcklkOiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB4RHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB5RHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB4UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeVBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdGFydERyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCEoKGUuYnV0dG9ucyA/PyAwKSAmIG1vdXNlQnV0dG9uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHhQb2ludGVyID0gZS5jbGllbnRYID8/IDA7XG4gICAgICAgIGNvbnN0IHlQb2ludGVyID0gZS5jbGllbnRZID8/IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGFydERyYWdgLCB7IHhQb2ludGVyLCB5UG9pbnRlciwgZSwgcG9zaXRpb24sIGNvbnRleHRTY2FsZSB9KTtcblxuICAgICAgICBob3N0UmVmLmN1cnJlbnQ/LnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkID8/IDApO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBkcmFnUG9pbnRlcklkOiBlLnBvaW50ZXJJZCxcbiAgICAgICAgICAgIHhEcmFnU3RhcnQ6IHMueCxcbiAgICAgICAgICAgIHlEcmFnU3RhcnQ6IHMueSxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB4UG9pbnRlcixcbiAgICAgICAgICAgIHlQb2ludGVyRHJhZ1N0YXJ0OiB5UG9pbnRlcixcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVuZERyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmRyYWdQb2ludGVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhvc3RSZWYuY3VycmVudD8ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHBvc2l0aW9uLmRyYWdQb2ludGVySWQpO1xuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB4UG9pbnRlciA9IGUuY2xpZW50WCA/PyAwO1xuICAgICAgICBjb25zdCB5UG9pbnRlciA9IGUuY2xpZW50WSA/PyAwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgZW5kRHJhZ2AsIHsgeFBvaW50ZXIsIHlQb2ludGVyLCBlLCBwb3NpdGlvbiwgY29udGV4dFNjYWxlIH0pO1xuXG4gICAgICAgIGNvbnN0IG5ld1ggPSAocG9zaXRpb24ueERyYWdTdGFydCA/PyAwKSArICh4UG9pbnRlciAtIChwb3NpdGlvbi54UG9pbnRlckRyYWdTdGFydCA/PyAwKSkgLyBjb250ZXh0U2NhbGU7XG4gICAgICAgIGNvbnN0IG5ld1kgPSAocG9zaXRpb24ueURyYWdTdGFydCA/PyAwKSArICh5UG9pbnRlciAtIChwb3NpdGlvbi55UG9pbnRlckRyYWdTdGFydCA/PyAwKSkgLyBjb250ZXh0U2NhbGU7XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIHg6IG5ld1gsXG4gICAgICAgICAgICB5OiBuZXdZLFxuICAgICAgICAgICAgZHJhZ1BvaW50ZXJJZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgeFBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHlQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBvbk1vdmUoe1xuICAgICAgICAgICAgeDogbmV3WCxcbiAgICAgICAgICAgIHk6IG5ld1ksXG4gICAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3ZlRHJhZyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBNb3VzZUV2ZW50LCBjb250ZXh0U2NhbGU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocG9zaXRpb24uZHJhZ1BvaW50ZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeFBvaW50ZXIgPSBlLmNsaWVudFggPz8gMDtcbiAgICAgICAgY29uc3QgeVBvaW50ZXIgPSBlLmNsaWVudFkgPz8gMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG1vdmVEcmFnYCwgeyB4UG9pbnRlciwgeVBvaW50ZXIsIGUsIHBvc2l0aW9uLCBjb250ZXh0U2NhbGUgfSk7XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIHg6IChzLnhEcmFnU3RhcnQgPz8gMCkgKyAoeFBvaW50ZXIgLSAocy54UG9pbnRlckRyYWdTdGFydCA/PyAwKSkgLyBjb250ZXh0U2NhbGUsXG4gICAgICAgICAgICB5OiAocy55RHJhZ1N0YXJ0ID8/IDApICsgKHlQb2ludGVyIC0gKHMueVBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzY3JvbGxXaGVlbCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbndoZWVsYCwgeyBlLCBwb3NpdGlvbiB9KTtcbiAgICAgICAgY29uc3QgZGVsdGFZID0gZS5kZWx0YVk7XG4gICAgICAgIGlmICghZGVsdGFZKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVuYWJsZVNjYWxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBzY2FsZTogcy5zY2FsZSAqIE1hdGgucG93KDAuOSwgZGVsdGFZID4gMCA/IDEgOiAtMSksXG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhvc3RSZWYgPSB1c2VSZWYobnVsbCBhcyBudWxsIHwgTW91c2VIb3N0KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBob3N0ID0gaG9zdFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBob3N0YCwgeyBob3N0IH0pO1xuICAgICAgICBob3N0Lm9ud2hlZWwgPSBzY3JvbGxXaGVlbDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhvc3Qub253aGVlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICB9LCBbIWhvc3RSZWYuY3VycmVudF0pO1xuXG4gICAgY29uc3Qgd2hvbGVIb3N0UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IE1vdXNlSG9zdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaG9zdCA9IHdob2xlSG9zdFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBob3N0YCwgeyBob3N0IH0pO1xuICAgICAgICBob3N0Lm9ud2hlZWwgPSBzY3JvbGxXaGVlbDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhvc3Qub253aGVlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICB9LCBbIXdob2xlSG9zdFJlZi5jdXJyZW50XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW92ZWFibGVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgeyh7IHBvc2l0aW9uOiBjb250ZXh0U2NhbGUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXgtY29sIGZsZXgtMSdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3dob2xlQ2FudmFzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXgtY29sJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0hlYWRlckNvbXBvbmVudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDb21wb25lbnQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQcmVzc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4LTEgYmctZnVjaHNpYS02MDAgb3BhY2l0eS01MCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt3aG9sZUhvc3RSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249e2UgPT4gd2hvbGVDYW52YXMgJiYgc3RhcnREcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXtlID0+IGVuZERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTW92ZT17ZSA9PiBtb3ZlRHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtMSAke3dob2xlQ2FudmFzID8gYG92ZXJmbG93LWhpZGRlbmAgOiBgYH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVzc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtvdXRlckNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtob3N0UmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtlID0+IHdob2xlQ2FudmFzICYmIHN0YXJ0RHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17ZSA9PiBlbmREcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e2UgPT4gbW92ZURyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVzc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5uZXJDbGFzc05hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4KSBzY2FsZSgke3Bvc2l0aW9uLnNjYWxlfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249e2UgPT4gc3RhcnREcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZlYWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcG9zaXRpb24sIHdob2xlQ2FudmFzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW92ZWFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L01vdmVhYmxlQ29udGV4dC5Db25zdW1lciA+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBNb3ZlYWJsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICB3aG9sZUNhbnZhczogZmFsc2UsXG4gICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgfSxcbn0pO1xuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwge1xuICAgIGNyZWF0ZUNvbnRleHQsXG4gICAgdXNlQ29udGV4dCxcbiAgICB1c2VFZmZlY3QsXG4gICAgdXNlTGF5b3V0RWZmZWN0LFxuICAgIHVzZVJlZixcbiAgICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCB6aXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlQ29udGV4dCwgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7XG4gICAgUGlwZXNjcmlwdE5vZGUsXG4gICAgUGlwZXNjcmlwdFBpcGUsXG4gICAgUGlwZXNjcmlwdFBpcGVWYWx1ZSxcbiAgICBQaXBlc2NyaXB0VHlwZSxcbiAgICBQaXBlc2NyaXB0VmFyaWFibGUsXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93LFxuICAgIFBpcGVzY3JpcHRXb3JrZmxvd0lucHV0LFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBQaXBlRW5kcG9pbnRWaWV3LCBQaXBlVmlldywgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlLCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2UsIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3cgfSBmcm9tICcuL3BpcGVzJztcbmltcG9ydCB7IFdvcmtmbG93SW5wdXROYW1lLCBnZXRUeXBlTmFtZSB9IGZyb20gJy4vd29yay1uYW1lcyc7XG5cbmV4cG9ydCBjb25zdCBXb3JrRmxvd1ZpZXcgPSAoe1xuICAgIHdvcmtmbG93LFxuICAgIGZ1bGwgPSBmYWxzZSxcbiAgICBoaWRlVGl0bGVzID0gZmFsc2UsXG59OiB7XG4gICAgd29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdztcbiAgICBmdWxsPzogYm9vbGVhbjtcbiAgICBoaWRlVGl0bGVzPzogYm9vbGVhbjtcbn0pID0+IHtcbiAgICAvLyAke2Z1bGwgPyBgbWluLXctWzIwdnddIG1pbi1oLVsyMHZoXWAgOiBgbWluLXctWzIwcHhdIG1pbi1oLVsxMHB4XWB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtY29sdW1uIHJlbGF0aXZlIGJnLXNsYXRlLTk1MC83NSBib3JkZXItYmx1ZS0xMDAgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSBtLVstMXB4XSByb3VuZGVkXG4gICAgICAgICAgICBgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IWhpZGVUaXRsZXMgJiYgKFxuICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57YCR7d29ya2Zsb3cubmFtZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cgZmxleC0xJz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQnPlxuICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpbnB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbnB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMSBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrZmxvd0lucHV0TmFtZSBpbnB1dD17aW5wdXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+OjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYGluYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nanVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUgYW5pbWF0ZS1ib3VuY2UgdGV4dC1bOHB4XSBhYnNvbHV0ZSB0b3AtMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjZDRlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5ib2R5Lm5vZGVzPy5tYXAobiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e24ubm9kZUlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZVZpZXcgbm9kZT17bn0gY29udGFpbmVyPXt3b3JrZmxvd30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuYm9keS5raW5kID09PSBgb3BlcmF0b3JgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTIgZmxleC1yb3cgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ibHVlLTQwMCc+e3dvcmtmbG93LmJvZHkub3BlcmF0b3J9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYG9wZXJhdG9yYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldLm1hcChvcGVyYXRvckVuZHBvaW50SWQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3BlcmF0b3JFbmRwb2ludElkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17b3BlcmF0b3JFbmRwb2ludElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmlucHV0cy5tYXAoaW5QaXBlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5QaXBlLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25JZD17b3BlcmF0b3JFbmRwb2ludElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGluUGlwZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtZW5kJz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93Lm91dHB1dHMubWFwKG91dHB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtvdXRwdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge291dHB1dC5waXBlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge291dHB1dC5waXBlLmtpbmQgPT09IGBkYXRhYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1wdXJwbGUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZS5qc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG91dHB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpcGU6IG91dHB1dC5waXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk/Lm1hcChzb3VyY2VJZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c291cmNlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uSWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG91dHB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlSWQ9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTMwMCc+e2Ake291dHB1dC5uYW1lfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuXG4gICAgICAgICAgICB7IWhpZGVUaXRsZXMgJiYgKFxuICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57YCR7d29ya2Zsb3cud29ya2Zsb3dVcml9YH08L1RleHQ+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Lyoge3dvcmtmbG93LndvcmtmbG93cz8ubWFwKHcgPT4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3cubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC0wIHRvcC0wIHNjYWxlLTUwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3d9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSl9ICovfVxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IE5vZGVWaWV3ID0gKHsgbm9kZSwgY29udGFpbmVyIH06IHsgbm9kZTogUGlwZXNjcmlwdE5vZGU7IGNvbnRhaW5lcjogUGlwZXNjcmlwdFdvcmtmbG93IH0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogbm9kZS5sYXlvdXQ/LnBvc2l0aW9uLnggPz8gMCxcbiAgICAgICAgeTogbm9kZS5sYXlvdXQ/LnBvc2l0aW9uLnkgPz8gMCxcbiAgICAgICAgc2NhbGU6IG5vZGUubGF5b3V0Py5zY2FsZSA/PyAxLFxuICAgIH0pO1xuICAgIGNvbnN0IG1vdmVOb2RlID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZhbHVlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgc2V0UG9zaXRpb24odmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTm9kZVZpZXdgLCB7IG5vZGUsIGNvbnRhaW5lciB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdvcmtmbG93ID0gKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci53b3JrZmxvd3M/LmZpbmQodyA9PiB3LndvcmtmbG93VXJpID09PSBub2RlLndvcmtmbG93VXJpKTtcbiAgICB9KSgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb3ZlYWJsZVZpZXdcbiAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICB5OiBwb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIHNjYWxlOiBwb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdmU9e21vdmVOb2RlfVxuICAgICAgICAgICAgbW91c2VCdXR0b249e01vdXNlQnV0dG9uLkxlZnR9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4LWNvbHVtbiBiZy16aW5jLTk1MC83NSBib3JkZXItYmx1ZS0xMDAgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSBtLVstMXB4XSByb3VuZGVkJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4KWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57d29ya2Zsb3cubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMiB0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPiN7bm9kZS5ub2RlSWR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICB7d29ya2Zsb3cgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5pbnB1dHMubWFwKGlucHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5wdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMSBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFBpcGUgPSBub2RlLmlucHV0UGlwZXMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPT4gcC5uYW1lID09PSBpbnB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlucHV0UGlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dFBpcGUua2luZCA9PT0gYGRhdGFgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdtbC1bLTE2cHhdIG1yLVsxNnB4XSB0ZXh0LXB1cnBsZS00MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lucHV0UGlwZS5qc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdtbC1bLThweF0gbXItWzBweF0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JQaXBlU291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93OiBjb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXBlOiBub2RlLmlucHV0UGlwZXMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0+IHgubmFtZSA9PT0gaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pPy5tYXAoc291cmNlSWQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzb3VyY2VJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbklkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IG5vZGUubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlSWQ9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya2Zsb3dJbnB1dE5hbWUgaW5wdXQ9e2lucHV0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtGbG93VmlldyB3b3JrZmxvdz17d29ya2Zsb3d9IGhpZGVUaXRsZXMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cub3V0cHV0cy5tYXAob3V0cHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0cHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtYmx1ZS0zMDAnPntgJHtvdXRwdXQubmFtZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdtbC1bMHB4XSBtci1bLThweF0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG91dHB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPntub2RlLmltcGxlbWVudGF0aW9uLn08L1RleHQ+ICovfVxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHtcbiAgICBjcmVhdGVDb250ZXh0LFxuICAgIHVzZUNvbnRleHQsXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZUxheW91dEVmZmVjdCxcbiAgICB1c2VSZWYsXG4gICAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFByZXNzYWJsZSwgUG9pbnRlckV2ZW50IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgY29tYmluZUxhdGVzdCwgemlwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1vdXNlQnV0dG9uLCBNb3ZlYWJsZUNvbnRleHQsIE1vdmVhYmxlVmlldyB9IGZyb20gJy4vbW92ZWFibGUtdmlldyc7XG5pbXBvcnQge1xuICAgIFBpcGVzY3JpcHROb2RlLFxuICAgIFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0UGlwZSxcbiAgICBQaXBlc2NyaXB0UGlwZVZhbHVlLFxuICAgIFBpcGVzY3JpcHRUeXBlLFxuICAgIFBpcGVzY3JpcHRWYXJpYWJsZSxcbiAgICBQaXBlc2NyaXB0V29ya2Zsb3csXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQsXG59IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSA9ICh7XG4gICAgbm9kZUlkLFxuICAgIG5hbWUsXG4gICAgZGlyZWN0aW9uLFxufToge1xuICAgIG5vZGVJZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXJlY3Rpb246IGBvdXRgIHwgYGluYDtcbn0pID0+IHtcbiAgICByZXR1cm4gYG5vZGU6JHtub2RlSWR9OiR7ZGlyZWN0aW9ufToke25hbWV9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93ID0gKHtcbiAgICB3b3JrZmxvd1VyaSxcbiAgICBuYW1lLFxuICAgIGRpcmVjdGlvbixcbn06IHtcbiAgICB3b3JrZmxvd1VyaTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXJlY3Rpb246IGBvdXRgIHwgYGluYDtcbn0pID0+IHtcbiAgICByZXR1cm4gYHdvcmtmbG93OiR7d29ya2Zsb3dVcml9OiR7ZGlyZWN0aW9ufToke25hbWV9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2UgPSAoe1xuICAgIHBpcGUsXG4gICAgd29ya2Zsb3csXG59OiB7XG4gICAgcGlwZTogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZTtcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xufSkgPT4ge1xuICAgIGlmICghcGlwZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChwaXBlLmtpbmQgPT09IGB3b3JrZmxvdy1vcGVyYXRvcmApIHtcbiAgICAgICAgcmV0dXJuIFtgb3BlcmF0b3JgXS5tYXAobmFtZSA9PlxuICAgICAgICAgICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChwaXBlLmtpbmQgPT09IGB3b3JrZmxvdy1pbnB1dGApIHtcbiAgICAgICAgcmV0dXJuIFtwaXBlLndvcmtmbG93SW5wdXROYW1lXS5tYXAobmFtZSA9PlxuICAgICAgICAgICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYGluYCxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHBpcGUua2luZCA9PT0gYG5vZGVgKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgIG5vZGVJZDogcGlwZS5zb3VyY2VOb2RlSWQsXG4gICAgICAgICAgICAgICAgbmFtZTogcGlwZS5zb3VyY2VOb2RlT3V0cHV0TmFtZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLy8gaWYocGlwZS5raW5kID09PSBgZGF0YWApe1xuXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIFtdO1xufTtcblxuZXhwb3J0IHR5cGUgUGlwZUVuZHBvaW50c1JlZ2lzdHJ5VHlwZSA9IHtcbiAgICBob3N0T2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxWaWV3PjtcbiAgICBob3N0VmlldzogbnVsbCB8IFZpZXc7XG4gICAgZW5kcG9pbnRzOiB7XG4gICAgICAgIFtpZDogc3RyaW5nXTogdW5kZWZpbmVkIHwgU3ViamVjdDx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+O1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IFBpcGVFbmRwb2ludHNSZWdpc3RyeSA9IGNyZWF0ZUNvbnRleHQ8UGlwZUVuZHBvaW50c1JlZ2lzdHJ5VHlwZT4oe1xuICAgIGhvc3RPYnNlcnZhYmxlOiBuZXcgU3ViamVjdCgpLFxuICAgIGhvc3RWaWV3OiBudWxsLFxuICAgIGVuZHBvaW50czoge30sXG59KTtcblxuY29uc3QgZ2V0T3JDcmVhdGVFbmRwb2ludFN1YmplY3QgPSAocmVnaXN0cnk6IFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGUsIGlkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICByZWdpc3RyeS5lbmRwb2ludHNbaWRdXG4gICAgICAgID8/IChyZWdpc3RyeS5lbmRwb2ludHNbaWRdID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfSkpXG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBQaXBlVmlldyA9ICh7XG4gICAgc291cmNlSWQsXG4gICAgZGVzdGluYXRpb25JZCxcbiAgICBzaWRlID0gYGluZmxvd2AsXG59OiB7XG4gICAgc291cmNlSWQ6IHVuZGVmaW5lZCB8IHN0cmluZztcbiAgICBkZXN0aW5hdGlvbklkOiBzdHJpbmc7XG4gICAgc2lkZT86IGBpbmZsb3dgIHwgYG91dGZsb3dgXG59KSA9PiB7XG4gICAgY29uc3QgcmVnaXN0cnkgPSB1c2VDb250ZXh0KFBpcGVFbmRwb2ludHNSZWdpc3RyeSk7XG5cbiAgICBjb25zdCBkZXN0aW5hdGlvbkVuZHBvaW50ID0gZ2V0T3JDcmVhdGVFbmRwb2ludFN1YmplY3QocmVnaXN0cnksIGRlc3RpbmF0aW9uSWQpO1xuICAgIGNvbnN0IHNvdXJjZUVuZHBvaW50ID0gIXNvdXJjZUlkID8gdW5kZWZpbmVkIDogZ2V0T3JDcmVhdGVFbmRwb2ludFN1YmplY3QocmVnaXN0cnksIHNvdXJjZUlkKTtcblxuICAgIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoe1xuICAgICAgICBzb3VyY2U6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICBkZXN0aW5hdGlvbjogeyB4OiAwLCB5OiAwIH0sXG4gICAgfSk7XG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXNvdXJjZUVuZHBvaW50IHx8ICFkZXN0aW5hdGlvbkVuZHBvaW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUGlwZVZpZXcgIXNvdXJjZUVuZHBvaW50IHx8ICFkZXN0aW5hdGlvbkVuZHBvaW50YCwge1xuICAgICAgICAgICAgICAgIHNvdXJjZUlkLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgcmVnaXN0cnksXG4gICAgICAgICAgICAgICAgc291cmNlRW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25FbmRwb2ludCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluaXQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAgICAgICBjb21iaW5lTGF0ZXN0KFtzb3VyY2VFbmRwb2ludCwgZGVzdGluYXRpb25FbmRwb2ludCwgaW5pdF0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChbc291cmNlLCBkZXN0aW5hdGlvbl0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUGlwZVZpZXcgZHJhd2AsIHsgc291cmNlLCBkZXN0aW5hdGlvbiB9KTtcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbih7IHNvdXJjZSwgZGVzdGluYXRpb24gfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGluaXRpYWxcbiAgICAgICAgY29uc29sZS5sb2coYGluaXRpYWxgKTtcbiAgICAgICAgaW5pdC5uZXh0KCk7XG4gICAgfSwgWyFkZXN0aW5hdGlvbkVuZHBvaW50LCAhc291cmNlRW5kcG9pbnRdKTtcblxuICAgIGNvbnN0IGRlYnVnID0gZmFsc2U7XG4gICAgY29uc3QgaXNPdXRmbG93ID0gc2lkZSA9PT0gYG91dGZsb3dgO1xuICAgIGNvbnN0IHhEZWx0YSA9IChpc091dGZsb3cgPyAtMSA6IDEpICogKHBvc2l0aW9uLmRlc3RpbmF0aW9uLnggLSBwb3NpdGlvbi5zb3VyY2UueCk7XG4gICAgY29uc3QgeURlbHRhID0gKGlzT3V0ZmxvdyA/IC0xIDogMSkgKiAocG9zaXRpb24uZGVzdGluYXRpb24ueSAtIHBvc2l0aW9uLnNvdXJjZS55KTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQoeERlbHRhICogeERlbHRhICsgeURlbHRhICogeURlbHRhKTtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoeURlbHRhLCB4RGVsdGEpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy0wIGgtMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LTAgaC0wIGFic29sdXRlJz5cbiAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7LXhEZWx0YSArIDR9cHgsJHsteURlbHRhIC0gMiArIChpc091dGZsb3cgPyA0IDogMCl9cHgpYCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke2FuZ2xlfXJhZClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzT3V0ZmxvdyA/IGBiZy1ibHVlLTQwMGAgOiBgYmctcmVkLTQwMGB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICB7ZGVidWcgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYWJzb2x1dGUgdHJhbnNsYXRlLXktWzEwMHB4XSByb3RhdGUtNDUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LVsxMDAwcHhdIHRleHQtWzRweF0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntgKCR7c291cmNlSWR9KT0+KCR7ZGVzdGluYXRpb25JZH0pYH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+e2AoJHtwb3NpdGlvbi5zb3VyY2UueH0sJHtwb3NpdGlvbi5zb3VyY2UueX0pPT4oJHtwb3NpdGlvbi5kZXN0aW5hdGlvbi54fSwke3Bvc2l0aW9uLmRlc3RpbmF0aW9uLnl9KWB9PC9UZXh0PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgUGlwZUVuZHBvaW50VmlldyA9ICh7IGlkIH06IHsgaWQ6IHN0cmluZzsgfSkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSAxMjtcblxuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnkpO1xuICAgIGNvbnN0IG1vdmVDb250ZXh0ID0gdXNlQ29udGV4dChNb3ZlYWJsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgdGFyZ2V0UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IFZpZXcpO1xuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVFbmRwb2ludFZpZXcgdXNlTGF5b3V0RWZmZWN0YCwgeyByZWdpc3RyeSB9KTtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoID0gcmVnaXN0cnkuaG9zdFZpZXc7XG4gICAgICAgICAgICBpZiAoIWgpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUGlwZUVuZHBvaW50VmlldyB1c2VMYXlvdXRFZmZlY3QgLSBob3N0IE5PVCBSRUFEWWAsIHsgcmVnaXN0cnkgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdCA9IHRhcmdldFJlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKCF0KSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVFbmRwb2ludFZpZXcgdXNlTGF5b3V0RWZmZWN0IC0gY29tcG9uZW50IE5PVCBSRUFEWWAsIHsgcmVnaXN0cnkgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0Lm1lYXN1cmVMYXlvdXQoaCwgKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdCBtZWFzdXJlTGF5b3V0IE5FWFRgLCB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlkLFxuICAgICAgICAgICAgICAgIC8vICAgICBsZWZ0LFxuICAgICAgICAgICAgICAgIC8vICAgICB0b3AsXG4gICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgLy8gICAgIHJlZ2lzdHJ5LFxuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgaWQpO1xuICAgICAgICAgICAgICAgIHMubmV4dCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IGxlZnQgKyBtb3ZlQ29udGV4dC5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICB5OiB0b3AgKyBtb3ZlQ29udGV4dC5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2FsY3VsYXRlKCk7XG4gICAgICAgIHJlZ2lzdHJ5Lmhvc3RPYnNlcnZhYmxlLnN1YnNjcmliZShoID0+IHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXG4gICAgICAgICEhdGFyZ2V0UmVmLmN1cnJlbnQsXG4gICAgICAgIG1vdmVDb250ZXh0LnBvc2l0aW9uLngsXG4gICAgICAgIG1vdmVDb250ZXh0LnBvc2l0aW9uLnksXG4gICAgICAgIG1vdmVDb250ZXh0LnBvc2l0aW9uLnNjYWxlLFxuICAgIF0pO1xuXG4gICAgY29uc3QgZGVidWcgPSBmYWxzZTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J3ctMiBoLTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxWaWV3IHJlZj17dGFyZ2V0UmVmfSBjbGFzc05hbWU9J3ctMCBoLTAgYWJzb2x1dGUgcHQtMSc+XG4gICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ibHVlLTQwMCBib3JkZXItWzFweF0gYm9yZGVyLWJsdWUtOTUwIHJvdW5kZWQtZnVsbCdcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogLXNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAtc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIHtkZWJ1ZyAmJiAoXG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0cmFuc2xhdGUteS1bMTAwcHhdIHJvdGF0ZS05MCc+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtYmx1ZS00MDAnXG4gICAgICAgICAgICAgICAgICAgID57aWR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHtcbiAgICBjcmVhdGVDb250ZXh0LFxuICAgIHVzZUNvbnRleHQsXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZUxheW91dEVmZmVjdCxcbiAgICB1c2VSZWYsXG4gICAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFByZXNzYWJsZSwgUG9pbnRlckV2ZW50IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgY29tYmluZUxhdGVzdCwgemlwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1vdXNlQnV0dG9uLCBNb3ZlYWJsZUNvbnRleHQsIE1vdmVhYmxlVmlldyB9IGZyb20gJy4vbW92ZWFibGUtdmlldyc7XG5pbXBvcnQge1xuICAgIFBpcGVzY3JpcHROb2RlLFxuICAgIFBpcGVzY3JpcHRQaXBlLFxuICAgIFBpcGVzY3JpcHRQaXBlVmFsdWUsXG4gICAgUGlwZXNjcmlwdFR5cGUsXG4gICAgUGlwZXNjcmlwdFZhcmlhYmxlLFxuICAgIFBpcGVzY3JpcHRXb3JrZmxvdyxcbiAgICBQaXBlc2NyaXB0V29ya2Zsb3dJbnB1dCxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0VHlwZU5hbWUgPSAodHlwZTogUGlwZXNjcmlwdFR5cGUpID0+IHtcbiAgICBpZiAodHlwZS5raW5kID09PSBgc2ltcGxlYCkge1xuICAgICAgICByZXR1cm4gdHlwZS50eXBlO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0eXBlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBXb3JrZmxvd0lucHV0TmFtZSA9ICh7IGlucHV0IH06IHsgaW5wdXQ6IFBpcGVzY3JpcHRXb3JrZmxvd0lucHV0IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ibHVlLTMwMCAke2lucHV0Lmlnbm9yZWQgPyBgbGluZS10aHJvdWdoIG9wYWNpdHktNTBgIDogYGB9YH1cbiAgICAgICAgPntgJHtpbnB1dC5uYW1lfWB9PC9UZXh0PlxuICAgICk7XG59OyIsICJpbXBvcnQgeyBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLCBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5wdXRJbnN0YW5jZSwgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLCBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2UsIFBpcGVzY3JpcHRUeXBlLCBQaXBlc2NyaXB0VmFyaWFibGUsIFBpcGVzY3JpcHRXb3JrZmxvdywgUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwge1xuICAgIGNyZWF0ZUNvbnRleHQsXG4gICAgdXNlQ29udGV4dCxcbiAgICB1c2VFZmZlY3QsXG4gICAgdXNlTGF5b3V0RWZmZWN0LFxuICAgIHVzZVJlZixcbiAgICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlVmlldyB9IGZyb20gXCIuL21vdmVhYmxlLXZpZXdcIjtcbmltcG9ydCB7IFBpcGVFbmRwb2ludFZpZXcsIFBpcGVWaWV3LCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2UsIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3cgfSBmcm9tIFwiLi9waXBlc1wiO1xuaW1wb3J0IHsgV29ya2Zsb3dJbnB1dE5hbWUsIGdldFR5cGVOYW1lIH0gZnJvbSBcIi4vd29yay1uYW1lc1wiO1xuXG5leHBvcnQgY29uc3QgTm9kZUluc3RhbmNlc1ZpZXcgPSAoe1xuICAgIG5vZGVJbnN0YW5jZXMsXG4gICAgZnVsbCA9IGZhbHNlLFxuICAgIGhpZGVUaXRsZXMgPSBmYWxzZSxcbn06IHtcbiAgICBub2RlSW5zdGFuY2VzOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlW107XG4gICAgZnVsbD86IGJvb2xlYW47XG4gICAgaGlkZVRpdGxlcz86IGJvb2xlYW47XG59KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9e2BmbGV4LXJvd2B9PlxuICAgICAgICAgICAge25vZGVJbnN0YW5jZXMubWFwKHggPT4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3gua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlSW5zdGFuY2U9e3h9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1ZpZXc+XG4gICAgKVxufVxuXG5jb25zdCBOb2RlVmlldyA9ICh7XG4gICAgbm9kZUluc3RhbmNlLFxufToge1xuICAgIG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZTtcbn0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgfSk7XG4gICAgY29uc3QgbW92ZU5vZGUgPSB1c2VTdGFibGVDYWxsYmFjaygodmFsdWU6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBzZXRQb3NpdGlvbih2YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOb2RlVmlld2AsIHsgbm9kZUluc3RhbmNlIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd29ya2Zsb3cgPSBub2RlSW5zdGFuY2Uud29ya2Zsb3c7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0xYH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPE1vdmVhYmxlVmlld1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IHBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBwb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uTW92ZT17bW92ZU5vZGV9XG4gICAgICAgICAgICAgICAgbW91c2VCdXR0b249e01vdXNlQnV0dG9uLkxlZnR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC1jb2x1bW4gcmVsYXRpdmUgYmctc2xhdGUtOTUwLzc1IGJvcmRlci1ibHVlLTEwMCBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIG0tWy0xcHhdIHJvdW5kZWQgcC0xYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57YCR7bm9kZUluc3RhbmNlLndvcmtmbG93Lm5hbWV9ICMke25vZGVJbnN0YW5jZS5rZXl9YH08L1RleHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpbnB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVDb25uZWN0aW9uIHZhcmlhYmxlPXtpbnB1dH0gY29ubmVjdGlvbj17bm9kZUluc3RhbmNlLmlucHV0cy5maW5kKHggPT4geC53b3JrZmxvd0lucHV0ID09PSBpbnB1dCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUgYW5pbWF0ZS1ib3VuY2UgdGV4dC1bOHB4XSBhYnNvbHV0ZSB0b3AtMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHUyNkNGXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZUluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtgZmxleC1yb3dgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVJbnN0YW5jZS5jaGlsZHJlbi5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt4LmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJbnN0YW5jZT17eH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVDb25uZWN0aW9uIHZhcmlhYmxlPXt7IG5hbWU6IHdvcmtmbG93LmJvZHkub3BlcmF0b3IgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbm5lY3Rpb25zSW49e25vZGVJbnN0YW5jZS5pbnB1dHN9IGNvbm5lY3Rpb25zT3V0PXtub2RlSW5zdGFuY2Uub3V0cHV0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cub3V0cHV0cy5tYXAob3V0cHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0cHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVDb25uZWN0aW9uIHZhcmlhYmxlPXtvdXRwdXR9IGNvbm5lY3Rpb249e25vZGVJbnN0YW5jZS5vdXRwdXRzLmZpbmQoeCA9PiB4LndvcmtmbG93T3V0cHV0ID09PSBvdXRwdXQpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuXG4gICAgICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59XG5cbmNvbnN0IGdldFBpcGVDb25uZWN0aW9uS2V5ID0gKGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSwgZGlyZWN0aW9uOiBgaW5gIHwgYG91dGApID0+IHtcbiAgICByZXR1cm4gYCR7Y29ubmVjdGlvbi5rZXl9OiR7ZGlyZWN0aW9ufWA7XG59XG5cbmNvbnN0IGdldFBpcGVLZXkgPSAocGlwZVNpZGU6IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF0gfCBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYGRlc3RpbmF0aW9uYF0sIGRpcmVjdGlvbjogYGluYCB8IGBvdXRgKSA9PiB7XG4gICAgaWYgKHBpcGVTaWRlLmtpbmQgPT09IGBpbnB1dGApIHtcbiAgICAgICAgcmV0dXJuIGdldFBpcGVDb25uZWN0aW9uS2V5KHBpcGVTaWRlLmlucHV0LCBkaXJlY3Rpb24pO1xuICAgIH1cbiAgICBpZiAocGlwZVNpZGUua2luZCA9PT0gYG91dHB1dGApIHtcbiAgICAgICAgcmV0dXJuIGdldFBpcGVDb25uZWN0aW9uS2V5KHBpcGVTaWRlLm91dHB1dCwgZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgaWYgKHBpcGVTaWRlLmtpbmQgPT09IGBkYXRhYCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocGlwZVNpZGUua2luZCA9PT0gYG9wZXJhdG9yLW91dHB1dGApIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHBpcGVTaWRlLmtpbmQgPT09IGBvcGVyYXRvci1pbnB1dGApIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBQaXBlVmFsdWVWaWV3ID0gKHtcbiAgICBwaXBlVmFsdWUsXG4gICAgc2lkZSxcbn06IHtcbiAgICBwaXBlVmFsdWU6IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZTtcbiAgICBzaWRlOiBgaW5mbG93YCB8IGBvdXRmbG93YCxcbn0pID0+IHtcblxuICAgIGNvbnN0IHsgc291cmNlLCBkZXN0aW5hdGlvbiB9ID0gcGlwZVZhbHVlID8/IHt9O1xuICAgIGlmICghc291cmNlIHx8ICFkZXN0aW5hdGlvbikge1xuICAgICAgICByZXR1cm4gPD48Lz47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlSWQgPSBnZXRQaXBlS2V5KHNvdXJjZSwgYG91dGApO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uSWQgPSBnZXRQaXBlS2V5KGRlc3RpbmF0aW9uLCBgaW5gKTtcbiAgICBpZiAoIXNvdXJjZUlkIHx8ICFkZXN0aW5hdGlvbklkKSB7XG4gICAgICAgIHJldHVybiA8PjwvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gPFBpcGVWaWV3IHNvdXJjZUlkPXtzb3VyY2VJZH0gZGVzdGluYXRpb25JZD17ZGVzdGluYXRpb25JZH0gc2lkZT17c2lkZX0gLz5cbn1cblxuY29uc3QgTm9kZUNvbm5lY3Rpb24gPSAoe1xuICAgIHZhcmlhYmxlLFxuICAgIGNvbm5lY3Rpb246IGNvbm5lY3Rpb25SYXcsXG4gICAgY29ubmVjdGlvbnNJbjogY29ubmVjdGlvbnNJblJhdyxcbiAgICBjb25uZWN0aW9uc091dDogY29ubmVjdGlvbnNPdXRSYXcsXG59OiB7XG4gICAgdmFyaWFibGU6IHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICB0eXBlPzogUGlwZXNjcmlwdFR5cGU7XG4gICAgICAgIGlnbm9yZWQ/OiBib29sZWFuO1xuICAgIH07XG4gICAgY29ubmVjdGlvbj86IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZTtcbiAgICBjb25uZWN0aW9uc0luPzogUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlW107XG4gICAgY29ubmVjdGlvbnNPdXQ/OiBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2VbXTtcbn0pID0+IHtcblxuICAgIGNvbnN0IGNvbm5lY3Rpb25zSW4gPSBjb25uZWN0aW9uc0luUmF3ID8/IChjb25uZWN0aW9uUmF3ID8gW2Nvbm5lY3Rpb25SYXddIDogW10pO1xuICAgIGNvbnN0IGNvbm5lY3Rpb25zT3V0ID0gY29ubmVjdGlvbnNPdXRSYXcgPz8gKGNvbm5lY3Rpb25SYXcgPyBbY29ubmVjdGlvblJhd10gOiBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2x1bW4nPlxuICAgICAgICAgICAgICAgIHtjb25uZWN0aW9uc0luLm1hcCh4ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eC5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtgYWJzb2x1dGUgcmlnaHQtMTBgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3guaW5mbG93UGlwZT8ucGlwZS5raW5kID09PSBgZGF0YWAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXB1cnBsZS00MDAgcHgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3guaW5mbG93UGlwZT8ucGlwZS5qc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50VmlldyBpZD17Z2V0UGlwZUNvbm5lY3Rpb25LZXkoeCwgYGluYCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWYWx1ZVZpZXcgcGlwZVZhbHVlPXt4LmluZmxvd1BpcGV9IHNpZGU9e2BpbmZsb3dgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlQ29ubmVjdGlvblZhbHVlIGNvbm5lY3Rpb249e3h9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtYmx1ZS0zMDAgJHt2YXJpYWJsZS5pZ25vcmVkID8gYGxpbmUtdGhyb3VnaCBvcGFjaXR5LTUwYCA6IGBgfWB9XG4gICAgICAgICAgICA+e2Ake3ZhcmlhYmxlLm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICB7dmFyaWFibGUudHlwZSAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbHVtbic+XG4gICAgICAgICAgICAgICAge2Nvbm5lY3Rpb25zT3V0Lm1hcCh4ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eC5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXcgaWQ9e2dldFBpcGVDb25uZWN0aW9uS2V5KHgsIGBvdXRgKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt4Lm91dGZsb3dQaXBlcy5tYXAob3V0Zmxvd1BpcGUgPT4gb3V0Zmxvd1BpcGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dGZsb3dQaXBlLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmFsdWVWaWV3IHBpcGVWYWx1ZT17b3V0Zmxvd1BpcGV9IHNpZGU9e2BvdXRmbG93YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufVxuXG5jb25zdCBOb2RlQ29ubmVjdGlvblZhbHVlID0gKHsgY29ubmVjdGlvbiB9OiB7IGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSB9KSA9PiB7XG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSAodmFsdWU6IHVua25vd24pID0+IHtcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y29ubmVjdGlvbi5ydW5zICYmIChcbiAgICAgICAgICAgICAgICA8VmFsdWVFZGl0b3IgdmFsdWU9e2Nvbm5lY3Rpb24ucnVucy52YWx1ZX0gb25DaGFuZ2U9e2NoYW5nZVZhbHVlfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuY29uc3QgVmFsdWVFZGl0b3IgPSAoeyB2YWx1ZSwgb25DaGFuZ2UgfTogeyB2YWx1ZTogdW5rbm93biwgb25DaGFuZ2U6ICh2YWx1ZTogdW5rbm93bikgPT4gdm9pZCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXB1cnBsZS00MDAgcHgtMSc+XG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkodmFsdWUpfVxuICAgICAgICA8L1RleHQ+XG4gICAgKTtcbn07IiwgImltcG9ydCB7XG4gICAgUGlwZXNjcmlwdEJ1aWx0aW5PcGVyYXRvcixcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VfT3BlcmF0b3IsXG4gICAgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbklucHV0SW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIFRPRE86IGhhbmRsZSBjeWNsZXNcblxudHlwZSBSdW5Db250ZXh0ID0ge1xuICAgIHZpc2l0ZWQ6IFNldDx1bmtub3duPjtcbiAgICBsYXp5OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVJ1biA9IChcbiAgICBhbGxOb2RlSW5zdGFuY2VzOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlW10sXG4gICAgY29udGV4dDogUnVuQ29udGV4dCA9IHsgdmlzaXRlZDogbmV3IFNldCgpLCBsYXp5OiBmYWxzZSB9LFxuKSA9PiB7XG4gICAgY29uc3Qgcm9vdE5vZGVzID0gYWxsTm9kZUluc3RhbmNlcy5maWx0ZXIoeCA9PiAheC5wYXJlbnQpO1xuXG4gICAgcm9vdE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX25vZGVPdXRwdXQobm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUnVuVmFsdWVfbm9kZU91dHB1dCA9IChub2RlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLCBjb250ZXh0OiBSdW5Db250ZXh0KSA9PiB7XG4gICAgLy8gYWxsIG91dHB1dHMgbXVzdCBiZSBldmFsdWF0ZWQgKGJ1dCBtYXkgcmV0dXJuIHVuZGVmaW5lZClcbiAgICBub2RlLm91dHB1dHMuZm9yRWFjaChvdXRwdXQgPT4ge1xuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9pbnB1dChvdXRwdXQsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFjb250ZXh0LmxhenkpIHtcbiAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgY2FsY3VsYXRlUnVuVmFsdWVfbm9kZU91dHB1dCh4LCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUuaW5wdXRzLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9pbnB1dCh4LCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29uc3QgY2FsY3VsYXRlUnVuVmFsdWVfaW5wdXQgPSAoXG4gICAgaW5wdXQ6IE9taXQ8UGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLCBgb3V0Zmxvd1BpcGVzYD4sXG4gICAgY29udGV4dDogUnVuQ29udGV4dCxcbikgPT4ge1xuICAgIGlmIChjb250ZXh0LnZpc2l0ZWQuaGFzKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQucnVucztcbiAgICB9XG4gICAgY29udGV4dC52aXNpdGVkLmFkZChpbnB1dCk7XG4gICAgaW5wdXQucnVucyA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IGluZmxvd1BpcGUgPSBpbnB1dC5pbmZsb3dQaXBlO1xuICAgIGlmICghaW5mbG93UGlwZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgc291cmNlIH0gPSBpbmZsb3dQaXBlO1xuICAgIGlmIChzb3VyY2Uua2luZCA9PT0gYGRhdGFgKSB7XG4gICAgICAgIGlucHV0LnJ1bnMgPSB7XG4gICAgICAgICAgICB2YWx1ZTogSlNPTi5wYXJzZShzb3VyY2UuanNvbiksXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzb3VyY2Uua2luZCA9PT0gYGlucHV0YCkge1xuICAgICAgICBpbnB1dC5ydW5zID0geyB2YWx1ZTogc291cmNlLmlucHV0LnJ1bnM/LnZhbHVlLCBkZXBlbmRlbmNpZXM6IFtzb3VyY2UuaW5wdXRdIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgb3V0cHV0YCkge1xuICAgICAgICBpbnB1dC5ydW5zID0geyB2YWx1ZTogc291cmNlLm91dHB1dC5ydW5zPy52YWx1ZSwgZGVwZW5kZW5jaWVzOiBbc291cmNlLm91dHB1dF0gfTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmtpbmQgPT09IGBvcGVyYXRvci1vdXRwdXRgKSB7XG4gICAgICAgIGlucHV0LnJ1bnMgPSBjYWxjdWxhdGVSdW5WYWx1ZV9vcGVyYXRvcihzb3VyY2Uubm9kZUluc3RhbmNlLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IF9uZXZlcjogbmV2ZXIgPSB1bmRlZmluZWQgYXMgdHlwZW9mIHNvdXJjZSBhcyBuZXZlcjtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVJ1blZhbHVlX29wZXJhdG9yID0gKFxuICAgIG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0LFxuKSA9PiB7XG4gICAgY29uc3QgY2FsY3VsYXRlQXJnc19pbmRleCA9IChcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICApOiB7XG4gICAgICAgIHZhbHVlOiBudW1iZXI7XG4gICAgICAgIGRlcGVuZGVuY2llczogUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlW107XG4gICAgfSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBub2RlSW5zdGFuY2UuaW5wdXRzW2luZGV4XTtcbiAgICAgICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkIGFzIHVua25vd24gYXMgbnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llczogW3ggYXMgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbklucHV0SW5zdGFuY2VdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9pbnB1dCh4LCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB4LnJ1bnM/LnZhbHVlIGFzIG51bWJlcixcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW3ggYXMgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbklucHV0SW5zdGFuY2VdLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVyYXRvcjogUGlwZXNjcmlwdEJ1aWx0aW5PcGVyYXRvciA9IG5vZGVJbnN0YW5jZS5vcGVyYXRvcjtcblxuICAgIC8vIGxhenlcbiAgICBjb25zdCBhUmVzdWx0ID0gY2FsY3VsYXRlQXJnc19pbmRleCgwKTtcbiAgICBjb25zdCBhID0gYVJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSBbLi4uYVJlc3VsdC5kZXBlbmRlbmNpZXNdO1xuXG4gICAgaWYgKG9wZXJhdG9yID09PSBgJiZgKSB7XG4gICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gY2FsY3VsYXRlQXJnc19pbmRleCgxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHY/LnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llczogWy4uLmRlcGVuZGVuY2llcywgLi4udi5kZXBlbmRlbmNpZXNdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYVJlc3VsdDtcbiAgICB9XG4gICAgaWYgKG9wZXJhdG9yID09PSBgfHxgKSB7XG4gICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgY29uc3QgdiA9IGNhbGN1bGF0ZUFyZ3NfaW5kZXgoMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2Py52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFsuLi5kZXBlbmRlbmNpZXMsIC4uLnYuZGVwZW5kZW5jaWVzXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFSZXN1bHQ7XG4gICAgfVxuICAgIGlmIChvcGVyYXRvciA9PT0gYGNvbmRpdGlvbmFsLXRlcm5hcnlgKSB7XG4gICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gY2FsY3VsYXRlQXJnc19pbmRleCgxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHY/LnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llczogWy4uLmRlcGVuZGVuY2llcywgLi4udi5kZXBlbmRlbmNpZXNdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2ID0gY2FsY3VsYXRlQXJnc19pbmRleCgyKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB2Py52YWx1ZSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogWy4uLmRlcGVuZGVuY2llcywgLi4udi5kZXBlbmRlbmNpZXNdLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIHVuYXJ5XG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIGA9YDpcbiAgICAgICAgICAgIHJldHVybiBhUmVzdWx0O1xuICAgICAgICBjYXNlIGBkZWNsYXJhdGlvbmA6XG4gICAgICAgICAgICByZXR1cm4gYVJlc3VsdDtcbiAgICAgICAgY2FzZSBgIWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiAhYSB9O1xuICAgICAgICBjYXNlIGArK2A6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICsgMSB9O1xuICAgICAgICBjYXNlIGAtLWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIC0gMSB9O1xuICAgIH1cblxuICAgIC8vIGJpbmFyeVxuICAgIGNvbnN0IGJSZXN1bHQgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDEpO1xuICAgIGNvbnN0IGIgPSBiUmVzdWx0LnZhbHVlO1xuICAgIGRlcGVuZGVuY2llcy5wdXNoKC4uLmJSZXN1bHQuZGVwZW5kZW5jaWVzKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSBgK2A6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICsgYiB9O1xuICAgICAgICBjYXNlIGAtYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgLSBiIH07XG4gICAgICAgIGNhc2UgYCpgOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAqIGIgfTtcbiAgICAgICAgY2FzZSBgL2A6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIC8gYiB9O1xuICAgICAgICBjYXNlIGAlYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgJSBiIH07XG4gICAgICAgIGNhc2UgYDxgOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSA8IGIgfTtcbiAgICAgICAgY2FzZSBgPmA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhID4gYiB9O1xuICAgICAgICBjYXNlIGA8PWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIDw9IGIgfTtcbiAgICAgICAgY2FzZSBgPj1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSA+PSBiIH07XG4gICAgICAgIGNhc2UgYD09YDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgPT09IGIgfTtcbiAgICAgICAgY2FzZSBgIT1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAhPT0gYiB9O1xuICAgIH1cblxuICAgIGNvbnN0IF9uZXZlcjogbmV2ZXIgPSB1bmRlZmluZWQgYXMgdHlwZW9mIG9wZXJhdG9yIGFzIG5ldmVyO1xuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4iLCAiaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0Tm9kZSxcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VfT3BlcmF0b3IsXG4gICAgUGlwZXNjcmlwdFBpcGVWYWx1ZSxcbiAgICBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93LFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVSdW4gfSBmcm9tICcuL2NhbGN1bGF0ZS1ydW4nO1xuXG5leHBvcnQgY29uc3QgbG9hZFJ1bnRpbWUgPSAoXG4gICAgd29ya2Zsb3dSYXc6IFBpcGVzY3JpcHRXb3JrZmxvdyxcbik6IHtcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xuICAgIGNvbnRleHQ6IFBpcGVzY3JpcHRSdW50aW1lQ29udGV4dDtcbiAgICByb290Tm9kZUluc3RhbmNlczogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZVtdO1xufSA9PiB7XG4gICAgY29uc3Qgd29ya2Zsb3cgPSB3b3JrZmxvd1JhdyBhcyBQaXBlc2NyaXB0V29ya2Zsb3c7XG4gICAgLy8gd29ya2Zsb3cudHJlZSA9IHtcbiAgICAvLyAgICAgY29udGFpbmVyOiB1bmRlZmluZWQsXG4gICAgLy8gICAgIHVzYWdlczogW10sXG4gICAgLy8gfTtcblxuICAgIGNvbnN0IGdldFdvcmtmbG93c1JlY3Vyc2l2ZSA9ICh3OiBQaXBlc2NyaXB0V29ya2Zsb3cpOiBQaXBlc2NyaXB0V29ya2Zsb3dbXSA9PiB7XG4gICAgICAgIHJldHVybiBbdywgLi4uKHcud29ya2Zsb3dzPy5mbGF0TWFwKHcyID0+IGdldFdvcmtmbG93c1JlY3Vyc2l2ZSh3MikpID8/IFtdKV07XG4gICAgfTtcblxuICAgIGNvbnN0IGFsbFdvcmtmbG93cyA9IGdldFdvcmtmbG93c1JlY3Vyc2l2ZSh3b3JrZmxvdyk7XG4gICAgY29uc3QgYWxsTm9kZXMgPSBhbGxXb3JrZmxvd3MuZmxhdE1hcCh3ID0+ICh3LmJvZHkua2luZCA9PT0gYG5vZGVzYCA/IHcuYm9keS5ub2RlcyA6IFtdKSk7XG4gICAgY29uc3QgYWxsUGlwZXNfd29ya2Zsb3dPdXRwdXRzID0gYWxsV29ya2Zsb3dzXG4gICAgICAgIC5mbGF0TWFwKHcgPT4gdy5vdXRwdXRzLmZsYXRNYXAobyA9PiBvLnBpcGUpKVxuICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgLm1hcCh4ID0+IHghKTtcbiAgICBjb25zdCBhbGxQaXBlc19ub2RlSW5wdXRzID0gYWxsTm9kZXNcbiAgICAgICAgLmZsYXRNYXAobiA9PiBuLmlucHV0UGlwZXMpXG4gICAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgICAubWFwKHggPT4geCEpO1xuICAgIGNvbnN0IGFsbFBpcGVzID0gWy4uLmFsbFBpcGVzX3dvcmtmbG93T3V0cHV0cywgLi4uYWxsUGlwZXNfbm9kZUlucHV0c107XG5cbiAgICBjb25zdCBjb250ZXh0OiBQaXBlc2NyaXB0UnVudGltZUNvbnRleHQgPSB7XG4gICAgICAgIGFsbFdvcmtmbG93cyxcbiAgICAgICAgYWxsV29ya2Zsb3dzTWFwOiBuZXcgTWFwKGFsbFdvcmtmbG93cy5tYXAoeCA9PiBbeC53b3JrZmxvd1VyaSwgeF0pKSxcbiAgICAgICAgYWxsTm9kZXMsXG4gICAgICAgIGFsbE5vZGVzTWFwOiBuZXcgTWFwKGFsbE5vZGVzLm1hcCh4ID0+IFt4Lm5vZGVJZCwgeF0pKSxcbiAgICAgICAgYWxsUGlwZXMsXG4gICAgICAgIGFsbE5vZGVJbnN0YW5jZXM6IFtdLFxuICAgIH07XG5cbiAgICBjb25zdCByb290Tm9kZUluc3RhbmNlcyA9XG4gICAgICAgIHdvcmtmbG93LmJvZHkubm9kZXM/Lm1hcChub2RlID0+IGNyZWF0ZU5vZGVJbnN0YW5jZXMobm9kZSwgdW5kZWZpbmVkLCBjb250ZXh0KSkgPz8gW107XG5cbiAgICBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbG9hZE5vZGVDb25uZWN0aW9uc19pbmZsb3dzKG5vZGUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsSW5mbG93UGlwZXMgPSBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXNcbiAgICAgICAgLmZsYXRNYXAoeCA9PiBbLi4ueC5pbnB1dHMubWFwKHkgPT4geS5pbmZsb3dQaXBlKSwgLi4ueC5vdXRwdXRzLm1hcCh5ID0+IHkuaW5mbG93UGlwZSldKVxuICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgLm1hcCh4ID0+IHghKTtcbiAgICBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbG9hZE5vZGVDb25uZWN0aW9uc19vdXRmbG93cyhub2RlLCBhbGxJbmZsb3dQaXBlcyk7XG4gICAgfSk7XG5cbiAgICBjYWxjdWxhdGVSdW4oY29udGV4dC5hbGxOb2RlSW5zdGFuY2VzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHdvcmtmbG93LFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICByb290Tm9kZUluc3RhbmNlcyxcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUGlwZXNjcmlwdFJ1bnRpbWVDb250ZXh0ID0ge1xuICAgIGFsbFdvcmtmbG93czogUGlwZXNjcmlwdFdvcmtmbG93W107XG4gICAgYWxsV29ya2Zsb3dzTWFwOiBNYXA8c3RyaW5nLCBQaXBlc2NyaXB0V29ya2Zsb3c+O1xuICAgIGFsbE5vZGVzOiBQaXBlc2NyaXB0Tm9kZVtdO1xuICAgIGFsbE5vZGVzTWFwOiBNYXA8c3RyaW5nLCBQaXBlc2NyaXB0Tm9kZT47XG4gICAgYWxsUGlwZXM6IFBpcGVzY3JpcHRQaXBlVmFsdWVbXTtcblxuICAgIC8vIGNyZWF0ZWQgZHVyaW5nIGNyZWF0ZU5vZGVJbnN0YW5jZXNcbiAgICBhbGxOb2RlSW5zdGFuY2VzOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlW107XG59O1xuXG5jb25zdCBjcmVhdGVOb2RlSW5zdGFuY2VzID0gKFxuICAgIG5vZGU6IFBpcGVzY3JpcHROb2RlLFxuICAgIHBhcmVudDogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSxcbiAgICBjb250ZXh0OiBQaXBlc2NyaXB0UnVudGltZUNvbnRleHQsXG4pOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlID0+IHtcbiAgICBjb25zdCB3b3JrZmxvdyA9IGNvbnRleHQuYWxsV29ya2Zsb3dzTWFwLmdldChub2RlLndvcmtmbG93VXJpKTtcbiAgICBpZiAoIXdvcmtmbG93KSB7XG4gICAgICAgIHRocm93IEVycm9yKGBtaXNzaW5nIHdvcmtmbG93ICR7bm9kZS53b3JrZmxvd1VyaX1gKTtcbiAgICB9XG4gICAgLy8gbm9kZS50cmVlID0ge1xuICAgIC8vICAgICB3b3JrZmxvdyxcbiAgICAvLyB9O1xuXG4gICAgY29uc3QgaW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UgPSB7XG4gICAgICAgIGtleTogYCR7Y29udGV4dC5hbGxOb2RlSW5zdGFuY2VzLmxlbmd0aH1gLFxuICAgICAgICBub2RlLFxuICAgICAgICB3b3JrZmxvdyxcbiAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgb3V0cHV0czogW10sXG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG4gICAgY29udGV4dC5hbGxOb2RlSW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuXG4gICAgLy8gQ3JlYXRlIGNvbm5lY3Rpb25zICh3aXRob3V0IHBpcGVzKVxuICAgIGluc3RhbmNlLmlucHV0cyA9IHdvcmtmbG93LmlucHV0cy5tYXAod29ya2Zsb3dJbnB1dCA9PiAoe1xuICAgICAgICBrZXk6IGAke2NvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5sZW5ndGh9OiR7d29ya2Zsb3dJbnB1dC5uYW1lfTp3b3JrZmxvd0lucHV0YCxcbiAgICAgICAgbm9kZUluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAga2luZDogYHdvcmtmbG93LWlucHV0YCxcbiAgICAgICAgd29ya2Zsb3dJbnB1dCxcbiAgICAgICAgbmFtZTogd29ya2Zsb3dJbnB1dC5uYW1lLFxuICAgICAgICBpbmZsb3dQaXBlOiB1bmRlZmluZWQsXG4gICAgICAgIG91dGZsb3dQaXBlczogW10sXG4gICAgfSkpO1xuICAgIGluc3RhbmNlLm91dHB1dHMgPSB3b3JrZmxvdy5vdXRwdXRzLm1hcCh3b3JrZmxvd091dHB1dCA9PiAoe1xuICAgICAgICBrZXk6IGAke2NvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5sZW5ndGh9OiR7d29ya2Zsb3dPdXRwdXQubmFtZX06d29ya2Zsb3dPdXRwdXRgLFxuICAgICAgICBub2RlSW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICBraW5kOiBgd29ya2Zsb3ctb3V0cHV0YCxcbiAgICAgICAgd29ya2Zsb3dPdXRwdXQsXG4gICAgICAgIG5hbWU6IHdvcmtmbG93T3V0cHV0Lm5hbWUsXG4gICAgICAgIGluZmxvd1BpcGU6IHVuZGVmaW5lZCxcbiAgICAgICAgb3V0Zmxvd1BpcGVzOiBbXSxcbiAgICB9KSk7XG5cbiAgICAvLyBUT0RPOiBoYW5kbGUgcmVjdXJzaXZlL2N5Y2xpY2FsIHdvcmtmbG93c1xuICAgIGluc3RhbmNlLmNoaWxkcmVuID1cbiAgICAgICAgd29ya2Zsb3cuYm9keS5ub2Rlcz8ubWFwKG4gPT4gY3JlYXRlTm9kZUluc3RhbmNlcyhuLCBpbnN0YW5jZSwgY29udGV4dCkpID8/IFtdO1xuXG4gICAgaWYgKHdvcmtmbG93LmJvZHkua2luZCA9PT0gYG9wZXJhdG9yYCkge1xuICAgICAgICBpbnN0YW5jZS5vcGVyYXRvciA9IHdvcmtmbG93LmJvZHkub3BlcmF0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuY29uc3QgbG9hZE5vZGVDb25uZWN0aW9uc19pbmZsb3dzID0gKG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSkgPT4ge1xuICAgIC8vIGNvbm5lY3QgaW5mbG93c1xuICAgIG5vZGVJbnN0YW5jZS5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVJbnB1dCA9IG5vZGVJbnN0YW5jZS5ub2RlLmlucHV0UGlwZXMuZmluZCh4ID0+IHgubmFtZSA9PT0gaW5wdXQubmFtZSk7XG4gICAgICAgIGlmICghbm9kZUlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZXRJbmZsb3dTb3VyY2UgPSAoKTogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwaXBlU291cmNlID0gbm9kZUlucHV0O1xuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYGRhdGFgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYGRhdGFgLFxuICAgICAgICAgICAgICAgICAgICBqc29uOiBwaXBlU291cmNlLmpzb24sXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGB3b3JrZmxvdy1vcGVyYXRvcmApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgb3BlcmF0b3Itb3V0cHV0YCxcbiAgICAgICAgICAgICAgICAgICAgbm9kZUluc3RhbmNlOiBub2RlSW5zdGFuY2UgYXMgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYHdvcmtmbG93LWlucHV0YCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVXb3JrZmxvd0lucHV0ID0gbm9kZUluc3RhbmNlLmlucHV0cy5maW5kKHggPT4geC5uYW1lID09PSBwaXBlU291cmNlLm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZVdvcmtmbG93SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IGdldEluZmxvd1NvdXJjZTogTWlzc2luZyBub2RlV29ya2Zsb3dJbnB1dCAke3BpcGVTb3VyY2UubmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgaW5wdXRgLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dDogbm9kZVdvcmtmbG93SW5wdXQsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGBub2RlYCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlZXJOb2RlT3V0cHV0ID0gbm9kZUluc3RhbmNlLnBhcmVudD8uY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgLmZpbmQobjIgPT4gbjIubm9kZS5ub2RlSWQgPT09IHBpcGVTb3VyY2Uuc291cmNlTm9kZUlkKVxuICAgICAgICAgICAgICAgICAgICA/Lm91dHB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gcGlwZVNvdXJjZS5zb3VyY2VOb2RlT3V0cHV0TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwZWVyTm9kZU91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogZ2V0SW5mbG93U291cmNlOiBNaXNzaW5nIHBlZXJOb2RlT3V0cHV0ICR7cGlwZVNvdXJjZS5uYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlwZVNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbk91dHB1dHM6IG5vZGVJbnN0YW5jZS5jaGlsZHJlbi5tYXAoeCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Lm91dHB1dHMubWFwKG8gPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogby5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IG8ubm9kZUluc3RhbmNlLm5vZGUubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBvdXRwdXRgLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IHBlZXJOb2RlT3V0cHV0LFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IHVua25vd24gcGlwZVNvdXJjZSAkeyhwaXBlU291cmNlIGFzIHsga2luZDogc3RyaW5nIH0pLmtpbmR9YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGdldEluZmxvd1NvdXJjZSgpO1xuICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQuaW5mbG93UGlwZSA9IHtcbiAgICAgICAgICAgIGtleTogYCR7aW5wdXQua2V5fTpwaXBlYCxcbiAgICAgICAgICAgIHBpcGU6IG5vZGVJbnB1dCxcbiAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAga2luZDogYGlucHV0YCxcbiAgICAgICAgICAgICAgICBpbnB1dDogaW5wdXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgbm9kZUluc3RhbmNlLm91dHB1dHMuZm9yRWFjaChvdXRwdXQgPT4ge1xuICAgICAgICBjb25zdCB3b3JrZmxvd091dHB1dCA9IG5vZGVJbnN0YW5jZS53b3JrZmxvdy5vdXRwdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IG91dHB1dC5uYW1lKTtcbiAgICAgICAgY29uc3Qgd29ya2Zsb3dPdXRwdXRQaXBlID0gd29ya2Zsb3dPdXRwdXQ/LnBpcGU7XG4gICAgICAgIGlmICghd29ya2Zsb3dPdXRwdXRQaXBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZXRJbmZsb3dTb3VyY2UgPSAoKTogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwaXBlU291cmNlID0gd29ya2Zsb3dPdXRwdXRQaXBlO1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lOiBwaXBlU291cmNlTmFtZSB9ID0gd29ya2Zsb3dPdXRwdXQ7XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgZGF0YWApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgZGF0YWAsXG4gICAgICAgICAgICAgICAgICAgIGpzb246IHBpcGVTb3VyY2UuanNvbixcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYHdvcmtmbG93LW9wZXJhdG9yYCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBvcGVyYXRvci1vdXRwdXRgLFxuICAgICAgICAgICAgICAgICAgICBub2RlSW5zdGFuY2U6IG5vZGVJbnN0YW5jZSBhcyBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlX09wZXJhdG9yLFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgd29ya2Zsb3ctaW5wdXRgKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZVdvcmtmbG93SW5wdXQgPSBub2RlSW5zdGFuY2UuaW5wdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHBpcGVTb3VyY2VOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVXb3JrZmxvd0lucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiBnZXRJbmZsb3dTb3VyY2U6IE1pc3Npbmcgbm9kZVdvcmtmbG93SW5wdXQgJHtwaXBlU291cmNlTmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgaW5wdXRgLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dDogbm9kZVdvcmtmbG93SW5wdXQsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGBub2RlYCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyTm9kZU91dHB1dCA9IG5vZGVJbnN0YW5jZS5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAuZmluZChuMiA9PiBuMi5ub2RlLm5vZGVJZCA9PT0gcGlwZVNvdXJjZS5zb3VyY2VOb2RlSWQpXG4gICAgICAgICAgICAgICAgICAgID8ub3V0cHV0cy5maW5kKHggPT4geC5uYW1lID09PSBwaXBlU291cmNlTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpbm5lck5vZGVPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IGdldEluZmxvd1NvdXJjZTogTWlzc2luZyBwZWVyTm9kZU91dHB1dCAke3BpcGVTb3VyY2VOYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBvdXRwdXRgLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IGlubmVyTm9kZU91dHB1dCxcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiB1bmtub3duIHBpcGVTb3VyY2UgJHsocGlwZVNvdXJjZSBhcyB7IGtpbmQ6IHN0cmluZyB9KS5raW5kfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzb3VyY2UgPSBnZXRJbmZsb3dTb3VyY2UoKTtcbiAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dHB1dC5pbmZsb3dQaXBlID0ge1xuICAgICAgICAgICAga2V5OiBgJHtvdXRwdXQua2V5fTpwaXBlYCxcbiAgICAgICAgICAgIHBpcGU6IHdvcmtmbG93T3V0cHV0UGlwZSxcbiAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAga2luZDogYG91dHB1dGAsXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBvdXRwdXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuY29uc3QgbG9hZE5vZGVDb25uZWN0aW9uc19vdXRmbG93cyA9IChcbiAgICBub2RlSW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsXG4gICAgYWxsSW5mbG93UGlwZXM6IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtdLFxuKSA9PiB7XG4gICAgbm9kZUluc3RhbmNlLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQub3V0Zmxvd1BpcGVzID0gYWxsSW5mbG93UGlwZXMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4LnNvdXJjZS5raW5kID09PSBgaW5wdXRgICYmIHguc291cmNlLmlucHV0ID09PSBpbnB1dCxcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgICBub2RlSW5zdGFuY2Uub3V0cHV0cy5mb3JFYWNoKG91dHB1dCA9PiB7XG4gICAgICAgIG91dHB1dC5vdXRmbG93UGlwZXMgPSBhbGxJbmZsb3dQaXBlcy5maWx0ZXIoXG4gICAgICAgICAgICB4ID0+IHguc291cmNlLmtpbmQgPT09IGBvdXRwdXRgICYmIHguc291cmNlLm91dHB1dCA9PT0gb3V0cHV0LFxuICAgICAgICApO1xuICAgIH0pO1xufTtcbiIsICIvLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwMS1kZWNsYXJhdGlvbnMvMDEudHMud29ya2Zsb3cuanNvbic7XG4vLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwMi1hc3NpZ25tZW50cy8wMS50cy53b3JrZmxvdy5qc29uJztcbmltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDAzLW9wZXJhdG9ycy8wNC50cy53b3JrZmxvdy5qc29uJztcbi8vIGltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDA0LW11dGF0aW9uLzAxLnRzLndvcmtmbG93Lmpzb24nO1xuLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDUtbG9naWMvMDIudHMud29ya2Zsb3cuanNvbic7XG5pbXBvcnQgeyBQaXBlc2NyaXB0V29ya2Zsb3cgfSBmcm9tICcuL3NyYy90eXBlcyc7XG5leHBvcnQgeyBXb3JrQ2FudmFzVmlldyB9IGZyb20gJy4vc3JjL3VpL3dvcmstY2FudmFzLXZpZXcnO1xuZXhwb3J0IGNvbnN0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93ID0gZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGFzIFBpcGVzY3JpcHRXb3JrZmxvdztcbiIsICJpbXBvcnQgeyBXb3JrQ2FudmFzVmlldywgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3cgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL3BpcGVzY3JpcHQnO1xuXG5leHBvcnQgY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IHdvcmtmbG93ID0gZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dcbiAgICByZXR1cm4gPFdvcmtDYW52YXNWaWV3IHdvcmtmbG93PXt3b3JrZmxvd30gLz47XG59O1xuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBiYWNrZ3JvdW5kQ29sb3IgVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gYW5pbWF0ZWQgYHRydWVgIHRvIGFuaW1hdGUgdGhlIGJhY2tncm91bmQgY29sb3IgY2hhbmdlLCBgZmFsc2VgIHRvIGNoYW5nZSBpbW1lZGlhdGVseS5cbiAqIEBwbGF0Zm9ybSBhbmRyb2lkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckJhY2tncm91bmRDb2xvcihiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZywgYW5pbWF0ZWQ6IGJvb2xlYW4pIHtcbiAgU3RhdHVzQmFyLnNldEJhY2tncm91bmRDb2xvcihiYWNrZ3JvdW5kQ29sb3IsIGFuaW1hdGVkKTtcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiB0aGUgbmV0d29yayBhY3Rpdml0eSBpbmRpY2F0b3IuXG4gKiBAcGFyYW0gdmlzaWJsZSBJZiB0aGUgbmV0d29yayBhY3Rpdml0eSBpbmRpY2F0b3Igc2hvdWxkIGJlIHZpc2libGUuXG4gKiBAcGxhdGZvcm0gaW9zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0Jhck5ldHdvcmtBY3Rpdml0eUluZGljYXRvclZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICBTdGF0dXNCYXIuc2V0TmV0d29ya0FjdGl2aXR5SW5kaWNhdG9yVmlzaWJsZSh2aXNpYmxlKTtcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBTdGF0dXNCYXJBbmltYXRpb24gfSBmcm9tICcuL1N0YXR1c0Jhci50eXBlcyc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIGhpZGRlbiBJZiB0aGUgc3RhdHVzIGJhciBzaG91bGQgYmUgaGlkZGVuLlxuICogQHBhcmFtIGFuaW1hdGlvbiBBbmltYXRpb24gdG8gdXNlIHdoZW4gdG9nZ2xpbmcgaGlkZGVuLCBkZWZhdWx0cyB0byBgJ25vbmUnYC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFySGlkZGVuKGhpZGRlbjogYm9vbGVhbiwgYW5pbWF0aW9uOiBTdGF0dXNCYXJBbmltYXRpb24pIHtcbiAgU3RhdHVzQmFyLnNldEhpZGRlbihoaWRkZW4sIGFuaW1hdGlvbik7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyU3R5bGUgfSBmcm9tICcuL1N0YXR1c0Jhci50eXBlcyc7XG5pbXBvcnQgc3R5bGVUb0JhclN0eWxlIGZyb20gJy4vc3R5bGVUb0JhclN0eWxlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogU2V0IHRoZSBiYXIgc3R5bGUgb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gc3R5bGUgVGhlIGNvbG9yIG9mIHRoZSBzdGF0dXMgYmFyIHRleHQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhclN0eWxlKHN0eWxlOiBTdGF0dXNCYXJTdHlsZSkge1xuICBTdGF0dXNCYXIuc2V0QmFyU3R5bGUoc3R5bGVUb0JhclN0eWxlKHN0eWxlKSk7XG59XG4iLCAiaW1wb3J0IHsgQXBwZWFyYW5jZSwgQ29sb3JTY2hlbWVOYW1lIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyU3R5bGUgfSBmcm9tICcuL1N0YXR1c0Jhci50eXBlcyc7XG5cbmZ1bmN0aW9uIGdldENvbG9yU2NoZW1lKCkge1xuICBpZiAoQXBwZWFyYW5jZSkge1xuICAgIHJldHVybiBBcHBlYXJhbmNlLmdldENvbG9yU2NoZW1lKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdsaWdodCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVUb0JhclN0eWxlKFxuICBzdHlsZTogU3RhdHVzQmFyU3R5bGUgPSAnYXV0bycsXG4gIGNvbG9yU2NoZW1lOiBDb2xvclNjaGVtZU5hbWUgPSBnZXRDb2xvclNjaGVtZSgpXG4pOiAnbGlnaHQtY29udGVudCcgfCAnZGFyay1jb250ZW50JyB7XG4gIGlmICghY29sb3JTY2hlbWUpIHtcbiAgICBjb2xvclNjaGVtZSA9ICdsaWdodCc7XG4gIH1cblxuICBsZXQgcmVzb2x2ZWRTdHlsZSA9IHN0eWxlO1xuICBpZiAoc3R5bGUgPT09ICdhdXRvJykge1xuICAgIHJlc29sdmVkU3R5bGUgPSBjb2xvclNjaGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XG4gIH0gZWxzZSBpZiAoc3R5bGUgPT09ICdpbnZlcnRlZCcpIHtcbiAgICByZXNvbHZlZFN0eWxlID0gY29sb3JTY2hlbWUgPT09ICdsaWdodCcgPyAnbGlnaHQnIDogJ2RhcmsnO1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVkU3R5bGUgPT09ICdsaWdodCcgPyAnbGlnaHQtY29udGVudCcgOiAnZGFyay1jb250ZW50Jztcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBTZXQgdGhlIHRyYW5zbHVjZW5jeSBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSB0cmFuc2x1Y2VudCBXaGV0aGVyIHRoZSBhcHAgY2FuIGRyYXcgdW5kZXIgdGhlIHN0YXR1cyBiYXIuIFdoZW4gYHRydWVgLCBjb250ZW50IHdpbGwgYmVcbiAqIHJlbmRlcmVkIHVuZGVyIHRoZSBzdGF0dXMgYmFyLiBUaGlzIGlzIGFsd2F5cyBgdHJ1ZWAgb24gaU9TIGFuZCBjYW5ub3QgYmUgY2hhbmdlZC5cbiAqIEBwbGF0Zm9ybSBhbmRyb2lkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhclRyYW5zbHVjZW50KHRyYW5zbHVjZW50OiBib29sZWFuKSB7XG4gIFN0YXR1c0Jhci5zZXRUcmFuc2x1Y2VudCh0cmFuc2x1Y2VudCk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnZXhwby1zdGF0dXMtYmFyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJlc3NhYmxlLCBUZXh0LCBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gKCkgPT4ge1xuICAgICAgICBzZXRDb3VudChzID0+IHMgKyAxKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIGZsZXgtY29sIGZsZXgtMSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctcmVkLTEwMCc+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtY3lhbi03MDAnPkV4YW1wbGVWaWV3IC4uLjwvVGV4dD5cbiAgICAgICAgICAgIDxQcmVzc2FibGUgb25QcmVzcz17aW5jcmVtZW50fT5cbiAgICAgICAgICAgICAgICA8VGV4dD57YEluY3JlbWVudCBjb3VudDoke2NvdW50fWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0PjAwMzwvVGV4dD5cbiAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgPFN0YXR1c0JhciBzdHlsZT0nYXV0bycgLz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuIiwgImltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSAndGFpbHdpbmRjc3MnO1xuXG5leHBvcnQgY29uc3QgdGFpbHdpbmRUaGVtZTogQ29uZmlnW2B0aGVtZWBdID0ge1xuICAgIC8vIGVkaXQgeW91ciB0YWlsd2luZCB0aGVtZSBoZXJlIVxuICAgIC8vIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYWRkaW5nLWN1c3RvbS1zdHlsZXNcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLGFBQWU7QUFBQSxFQUNmLFFBQVUsQ0FBQztBQUFBLEVBQ1gsU0FBVyxDQUFDO0FBQUEsRUFDWixNQUFRO0FBQUEsSUFDTixNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsYUFBZTtBQUFBLFFBQ2YsUUFBVTtBQUFBLFFBQ1YsWUFBYyxDQUFDO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLGFBQWU7QUFBQSxNQUNmLE1BQVE7QUFBQSxNQUNSLFFBQVUsQ0FBQztBQUFBLE1BQ1gsU0FBVztBQUFBLFFBQ1Q7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLE1BQVE7QUFBQSxVQUNWO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixjQUFnQjtBQUFBLFlBQ2hCLHNCQUF3QjtBQUFBLFVBQzFCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQWE7QUFBQSxRQUNYO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFXO0FBQUEsWUFDVDtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0EsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLFVBQVk7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWU7QUFBQSxVQUNmLE1BQVE7QUFBQSxVQUNSLFFBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixVQUFZO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsVUFBWTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFXO0FBQUEsWUFDVDtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0EsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLFVBQVk7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWU7QUFBQSxVQUNmLE1BQVE7QUFBQSxVQUNSLFFBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixVQUFZO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsVUFBWTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFD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QUFJLEtBQUssWUFBWSxJQUMvRixDQUFDRztBQUFBLE1BQ0csV0FBVyxpQkFBaUIsUUFBUSxJQUFJLEtBQUssWUFBWTtBQUFBLE1BQzNELEVBQUUsRUFGSEEsTUFHTCxFQUpDSCxNQUtMLEVBTkNFLFdBT0wsRUFSQ0QsT0FBTSxTQVNWLEVBQ0wsRUFaQ0QsTUFhSjtBQUFBLEdBRUQsQ0FBQ0EsTUFBSyxLQUFLLFNBQVMsVUFBVSw0Q0FDMUIsQ0FBQyxzQkFBc0IsU0FBUyxPQUFPSCxTQUFRO0FBQUEsS0FDMUMsUUFBUSxlQUNMLENBQUMsYUFBYSxVQUFVLFVBQVUsS0FBSztBQUFBLEtBRTFDLFFBQVEsb0JBQ0wsQ0FBQyxrQkFBa0IsZUFBZSxlQUFlLEtBQUs7QUFBQSxFQUU5RCxFQVBDLHNCQUFzQixTQVEzQixFQVRDRyxNQVVMLEVBeENDLGFBeUNMLEVBMUNDQTtBQTRDVDs7O0E2RXpFTyxJQUFNLDZCQUE2Qjs7O0FDTG5DLElBQU0sTUFBTSxNQUFNO0FBQ3JCLFFBQU0sV0FBVztBQUNqQixTQUFPLENBQUMsZUFBZSxVQUFVLFVBQVU7QUFDL0M7OztBQ0xBLFNBQVMsaUJBQWlCOzs7QUNBMUIsU0FBUyxhQUFBSSxrQkFBaUI7OztBQ0ExQixTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQTFCLFNBQVMsYUFBQUMsa0JBQWlCOzs7QUNBMUIsU0FBUyxrQkFBbUM7OztBQ0E1QyxTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQzFCLFNBQVMsWUFBQUMsaUJBQWdCO0FBQ3pCLFNBQVMsYUFBQUMsWUFBVyxRQUFBQyxPQUFNLFFBQUFDLGFBQVk7OztBQ0EvQixJQUFNLGdCQUFpQztBQUFBO0FBQUE7QUFHOUM7IiwKICAibmFtZXMiOiBbIlJlYWN0IiwgInVzZUxheW91dEVmZmVjdCIsICJ1c2VSZWYiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlByZXNzYWJsZSIsICJkIiwgImIiLCAiZnJvbSIsICJ2IiwgIlN1YnNjcmlwdGlvbiIsICJTdWJzY3JpYmVyIiwgIkNvbnN1bWVyT2JzZXJ2ZXIiLCAiU2FmZVN1YnNjcmliZXIiLCAiT2JzZXJ2YWJsZSIsICJvYnNlcnZhYmxlIiwgIk9wZXJhdG9yU3Vic2NyaWJlciIsICJlcnIiLCAiU3ViamVjdCIsICJvYnNlcnZhYmxlIiwgIkFub255bW91c1N1YmplY3QiLCAiQmVoYXZpb3JTdWJqZWN0IiwgIkFjdGlvbiIsICJkZWxheSIsICJBc3luY0FjdGlvbiIsICJkZWxheSIsICJTY2hlZHVsZXIiLCAiZGVsYXkiLCAiQXN5bmNTY2hlZHVsZXIiLCAiZGVsYXkiLCAiZGVsYXkiLCAiZGVsYXkiLCAiaXRlcmF0b3IiLCAiaXRlcmF0b3IiLCAiaXNBcnJheSIsICJpIiwgInVzZVJlZiIsICJ1c2VSZWYiLCAiUmVhY3QiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgImNyZWF0ZUNvbnRleHQiLCAidXNlUmVmIiwgInVzZVN0YXRlIiwgIlZpZXciLCAiVGV4dCIsICJjcmVhdGVDb250ZXh0IiwgInVzZVN0YXRlIiwgIlZpZXciLCAiVGV4dCIsICJ1c2VSZWYiLCAiVGV4dCIsICJWaWV3IiwgIlRleHQiLCAiUmVhY3QiLCAidXNlU3RhdGUiLCAiUmVhY3QiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlZpZXciLCAiUmVhY3QiLCAiTm9kZVZpZXciLCAidXNlU3RhdGUiLCAiVGV4dCIsICJjb250ZXh0IiwgInYiLCAiY29udGV4dCIsICJ1c2VSZWYiLCAiY29udGV4dCIsICJ1c2VMYXlvdXRFZmZlY3QiLCAidXNlU3RhdGUiLCAiVmlldyIsICJSZWFjdCIsICJQcmVzc2FibGUiLCAiVGV4dCIsICJTdGF0dXNCYXIiLCAiU3RhdHVzQmFyIiwgIlN0YXR1c0JhciIsICJTdGF0dXNCYXIiLCAidXNlU3RhdGUiLCAiUHJlc3NhYmxlIiwgIlRleHQiLCAiVmlldyJdCn0K
