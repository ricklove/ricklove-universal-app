// ../../packages/pipescript/src/tests/code/0004-mutation/01.ts.workflow.json
var ts_workflow_default = {
  workflowUri: "file.ts",
  name: "file.ts",
  inputs: [],
  outputs: [
    {
      name: "a",
      type: {
        kind: "simple",
        type: "number"
      },
      pipe: {
        kind: "node",
        sourceNodeId: "file.ts:2",
        sourceNodeOutputName: "a"
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
            type: "number"
          }
        }
      ],
      outputs: [
        {
          name: "a",
          type: {
            kind: "simple",
            type: "number"
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
      workflowUri: "file.ts/a=",
      name: "file.ts/a=",
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
          name: "a",
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
      nodeId: "file.ts:1",
      implementation: {
        kind: "workflow",
        workflowUri: "file.ts/a-declaration"
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
      nodeId: "file.ts:2",
      implementation: {
        kind: "workflow",
        workflowUri: "file.ts/a="
      },
      inputPipes: [
        {
          name: "old",
          kind: "node",
          sourceNodeId: "file.ts:1",
          sourceNodeOutputName: "a"
        },
        {
          name: "value",
          kind: "data",
          json: "43"
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
    {debug && <><View2 className="w-[1000px] text-[4px]">
      <Text2 className="text-white">{`(${sourceId})=>(${destinationId})`}</Text2>
      <Text2 className="text-white">{`(${position.source.x},${position.source.y})=>(${position.destination.x},${position.destination.y})`}</Text2>
    </View2></>}
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdGVzdHMvY29kZS8wMDA0LW11dGF0aW9uLzAxLnRzLndvcmtmbG93Lmpzb24iLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvd29yay1jYW52YXMtdmlldy50c3giLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNGdW5jdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9jcmVhdGVFcnJvckNsYXNzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvYXJyUmVtb3ZlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJzY3JpcHRpb24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL2NvbmZpZy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9ub29wLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9Ob3RpZmljYXRpb25GYWN0b3JpZXMudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvZXJyb3JDb250ZXh0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJzY3JpYmVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9waXBlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9PYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2xpZnQudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL1N1YmplY3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL2RhdGVUaW1lc3RhbXBQcm92aWRlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL0FjdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL2ludGVydmFsUHJvdmlkZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlci9Bc3luY0FjdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvU2NoZWR1bGVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNTY2hlZHVsZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlci9hc3luYy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9lbXB0eS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc1NjaGVkdWxlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9hcmdzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzQXJyYXlMaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzUHJvbWlzZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzQXN5bmNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zeW1ib2wvaXRlcmF0b3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9pbm5lckZyb20udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvZXhlY3V0ZVNjaGVkdWxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvb2JzZXJ2ZU9uLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc3Vic2NyaWJlT24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZU9ic2VydmFibGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXN5bmNJdGVyYWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVkLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNEYXRlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL21hcE9uZU9yTWFueUFyZ3MudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvYXJnc0FyZ0FycmF5T3JPYmplY3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvY3JlYXRlT2JqZWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3QudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9tZXJnZUludGVybmFscy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlTWFwLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VBbGwudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9jb25jYXRBbGwudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29ic2VydmFibGUvY29uY2F0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL3RpbWVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvdGFrZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2lnbm9yZUVsZW1lbnRzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwVG8udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9kZWxheVdoZW4udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9kZWxheS50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrLnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL21vdmVhYmxlLXZpZXcudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL3dvcmstZmxvdy12aWV3LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L2luZGV4LnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL2FwcC9zcmMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhckJhY2tncm91bmRDb2xvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJOZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhckhpZGRlbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJTdHlsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zdHlsZVRvQmFyU3R5bGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyVHJhbnNsdWNlbnQudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvY2wvc3JjL2luZGV4LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9jbC9zcmMvZGVzaWduL3RhaWx3aW5kL3RoZW1lLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG4gIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzXCIsXG4gIFwibmFtZVwiOiBcImZpbGUudHNcIixcbiAgXCJpbnB1dHNcIjogW10sXG4gIFwib3V0cHV0c1wiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICB9LFxuICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6MlwiLFxuICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYVwiXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcIndvcmtmbG93c1wiOiBbXG4gICAge1xuICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYS1kZWNsYXJhdGlvblwiLFxuICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy9hLWRlY2xhcmF0aW9uXCIsXG4gICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctaW5wdXRcIixcbiAgICAgICAgICAgIFwid29ya2Zsb3dJbnB1dE5hbWVzXCI6IFtcbiAgICAgICAgICAgICAgXCJhXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5vZGVzXCI6IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9hPVwiLFxuICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy9hPVwiLFxuICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwib2xkXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaWdub3JlZFwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LWlucHV0XCIsXG4gICAgICAgICAgICBcIndvcmtmbG93SW5wdXROYW1lc1wiOiBbXG4gICAgICAgICAgICAgIFwidmFsdWVcIlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibm9kZXNcIjogW11cbiAgICB9XG4gIF0sXG4gIFwibm9kZXNcIjogW1xuICAgIHtcbiAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czoxXCIsXG4gICAgICBcImltcGxlbWVudGF0aW9uXCI6IHtcbiAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3dcIixcbiAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYS1kZWNsYXJhdGlvblwiXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgXCJqc29uXCI6IFwiNDJcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6MlwiLFxuICAgICAgXCJpbXBsZW1lbnRhdGlvblwiOiB7XG4gICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93XCIsXG4gICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2E9XCJcbiAgICAgIH0sXG4gICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwib2xkXCIsXG4gICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czoxXCIsXG4gICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgXCJqc29uXCI6IFwiNDNcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgZGVsYXkgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlVmlldyB9IGZyb20gJy4vbW92ZWFibGUtdmlldyc7XG5pbXBvcnQgeyBQaXBlRW5kcG9pbnRzUmVnaXN0cnksIFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGUsIFdvcmtGbG93VmlldyB9IGZyb20gJy4vd29yay1mbG93LXZpZXcnO1xuaW1wb3J0IHsgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgV29ya0NhbnZhc1ZpZXcgPSAoeyB3b3JrZmxvdyB9OiB7IHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3cgfSkgPT4ge1xuICAgIGNvbnN0IHZpZXdSZWYgPSB1c2VSZWYobnVsbCBhcyBudWxsIHwgVmlldyk7XG4gICAgY29uc3QgaG9zdFJlZiA9IHVzZVJlZihuZXcgU3ViamVjdDxWaWV3PigpKTtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlUmVmPFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGU+KHtcbiAgICAgICAgaG9zdE9ic2VydmFibGU6IGhvc3RSZWYuY3VycmVudC5waXBlKGRlbGF5KDI1MCkpLFxuICAgICAgICBob3N0VmlldzogbnVsbCxcbiAgICAgICAgZW5kcG9pbnRzOiB7fSxcbiAgICB9KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdmlld1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5jdXJyZW50Lmhvc3RWaWV3ID0gdmlld1JlZi5jdXJyZW50O1xuICAgICAgICBob3N0UmVmLmN1cnJlbnQubmV4dCh2aWV3UmVmLmN1cnJlbnQpO1xuICAgIH0sIFshdmlld1JlZi5jdXJyZW50XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLXNsYXRlLTkwMCB3LWZ1bGwgaC1mdWxsIG92ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgICA8TW92ZWFibGVWaWV3XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbk1vdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBtb3VzZUJ1dHRvbj17TW91c2VCdXR0b24uTWlkZGxlfVxuICAgICAgICAgICAgICAgIGVuYWJsZVNjYWxpbmdcbiAgICAgICAgICAgICAgICB3aG9sZUNhbnZhc1xuICAgICAgICAgICAgICAgIG91dGVyQ2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJ1xuICAgICAgICAgICAgICAgIGlubmVyQ2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxWaWV3IHJlZj17dmlld1JlZn0gY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRzUmVnaXN0cnkuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHQuY3VycmVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V29ya0Zsb3dWaWV3IHdvcmtmbG93PXt3b3JrZmxvd30gZnVsbCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BpcGVFbmRwb2ludHNSZWdpc3RyeS5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuIiwgIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2U7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChlbnYuc3RhY2subGVuZ3RoKSB7XG4gICAgICB2YXIgcmVjID0gZW52LnN0YWNrLnBvcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlYy5kaXNwb3NlICYmIHJlYy5kaXNwb3NlLmNhbGwocmVjLnZhbHVlKTtcbiAgICAgICAgaWYgKHJlYy5hc3luYykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbn07XG4iLCAiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZTogYW55KTogdmFsdWUgaXMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuIiwgIi8qKlxuICogVXNlZCB0byBjcmVhdGUgRXJyb3Igc3ViY2xhc3NlcyB1bnRpbCB0aGUgY29tbXVuaXR5IG1vdmVzIGF3YXkgZnJvbSBFUzUuXG4gKlxuICogVGhpcyBpcyBiZWNhdXNlIGNvbXBpbGluZyBmcm9tIFR5cGVTY3JpcHQgZG93biB0byBFUzUgaGFzIGlzc3VlcyB3aXRoIHN1YmNsYXNzaW5nIEVycm9yc1xuICogYXMgd2VsbCBhcyBvdGhlciBidWlsdC1pbiB0eXBlczogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMjEyM1xuICpcbiAqIEBwYXJhbSBjcmVhdGVJbXBsIEEgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGFjdHVhbCBjb25zdHJ1Y3RvciBpbXBsZW1lbnRhdGlvbi4gVGhlIHJldHVybmVkXG4gKiBmdW5jdGlvbiBzaG91bGQgYmUgYSBuYW1lZCBmdW5jdGlvbiB0aGF0IGNhbGxzIGBfc3VwZXJgIGludGVybmFsbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFcnJvckNsYXNzPFQ+KGNyZWF0ZUltcGw6IChfc3VwZXI6IGFueSkgPT4gYW55KTogVCB7XG4gIGNvbnN0IF9zdXBlciA9IChpbnN0YW5jZTogYW55KSA9PiB7XG4gICAgRXJyb3IuY2FsbChpbnN0YW5jZSk7XG4gICAgaW5zdGFuY2Uuc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgfTtcblxuICBjb25zdCBjdG9yRnVuYyA9IGNyZWF0ZUltcGwoX3N1cGVyKTtcbiAgY3RvckZ1bmMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICBjdG9yRnVuYy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yRnVuYztcbiAgcmV0dXJuIGN0b3JGdW5jO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUVycm9yQ2xhc3MgfSBmcm9tICcuL2NyZWF0ZUVycm9yQ2xhc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVuc3Vic2NyaXB0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHJlYWRvbmx5IGVycm9yczogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5zdWJzY3JpcHRpb25FcnJvckN0b3Ige1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLiBEbyBub3QgY29uc3RydWN0IGVycm9yIGluc3RhbmNlcy5cbiAgICogQ2Fubm90IGJlIHRhZ2dlZCBhcyBpbnRlcm5hbDogaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlWC9yeGpzL2lzc3Vlcy82MjY5XG4gICAqL1xuICBuZXcgKGVycm9yczogYW55W10pOiBVbnN1YnNjcmlwdGlvbkVycm9yO1xufVxuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIG9uZSBvciBtb3JlIGVycm9ycyBoYXZlIG9jY3VycmVkIGR1cmluZyB0aGVcbiAqIGB1bnN1YnNjcmliZWAgb2YgYSB7QGxpbmsgU3Vic2NyaXB0aW9ufS5cbiAqL1xuZXhwb3J0IGNvbnN0IFVuc3Vic2NyaXB0aW9uRXJyb3I6IFVuc3Vic2NyaXB0aW9uRXJyb3JDdG9yID0gY3JlYXRlRXJyb3JDbGFzcyhcbiAgKF9zdXBlcikgPT5cbiAgICBmdW5jdGlvbiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbCh0aGlzOiBhbnksIGVycm9yczogKEVycm9yIHwgc3RyaW5nKVtdKSB7XG4gICAgICBfc3VwZXIodGhpcyk7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvcnNcbiAgICAgICAgPyBgJHtlcnJvcnMubGVuZ3RofSBlcnJvcnMgb2NjdXJyZWQgZHVyaW5nIHVuc3Vic2NyaXB0aW9uOlxuJHtlcnJvcnMubWFwKChlcnIsIGkpID0+IGAke2kgKyAxfSkgJHtlcnIudG9TdHJpbmcoKX1gKS5qb2luKCdcXG4gICcpfWBcbiAgICAgICAgOiAnJztcbiAgICAgIHRoaXMubmFtZSA9ICdVbnN1YnNjcmlwdGlvbkVycm9yJztcbiAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH1cbik7XG4iLCAiLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhbiBhcnJheSwgbXV0YXRpbmcgaXQuXG4gKiBAcGFyYW0gYXJyIFRoZSBhcnJheSB0byByZW1vdmUgdGhlIGl0ZW0gZnJvbVxuICogQHBhcmFtIGl0ZW0gVGhlIGl0ZW0gdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJSZW1vdmU8VD4oYXJyOiBUW10gfCB1bmRlZmluZWQgfCBudWxsLCBpdGVtOiBUKSB7XG4gIGlmIChhcnIpIHtcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIDAgPD0gaW5kZXggJiYgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgVW5zdWJzY3JpcHRpb25FcnJvciB9IGZyb20gJy4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkxpa2UsIFRlYXJkb3duTG9naWMsIFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuL3V0aWwvYXJyUmVtb3ZlJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZGlzcG9zYWJsZSByZXNvdXJjZSwgc3VjaCBhcyB0aGUgZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUuIEFcbiAqIFN1YnNjcmlwdGlvbiBoYXMgb25lIGltcG9ydGFudCBtZXRob2QsIGB1bnN1YnNjcmliZWAsIHRoYXQgdGFrZXMgbm8gYXJndW1lbnRcbiAqIGFuZCBqdXN0IGRpc3Bvc2VzIHRoZSByZXNvdXJjZSBoZWxkIGJ5IHRoZSBzdWJzY3JpcHRpb24uXG4gKlxuICogQWRkaXRpb25hbGx5LCBzdWJzY3JpcHRpb25zIG1heSBiZSBncm91cGVkIHRvZ2V0aGVyIHRocm91Z2ggdGhlIGBhZGQoKWBcbiAqIG1ldGhvZCwgd2hpY2ggd2lsbCBhdHRhY2ggYSBjaGlsZCBTdWJzY3JpcHRpb24gdG8gdGhlIGN1cnJlbnQgU3Vic2NyaXB0aW9uLlxuICogV2hlbiBhIFN1YnNjcmlwdGlvbiBpcyB1bnN1YnNjcmliZWQsIGFsbCBpdHMgY2hpbGRyZW4gKGFuZCBpdHMgZ3JhbmRjaGlsZHJlbilcbiAqIHdpbGwgYmUgdW5zdWJzY3JpYmVkIGFzIHdlbGwuXG4gKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uIGltcGxlbWVudHMgU3Vic2NyaXB0aW9uTGlrZSB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBwdWJsaWMgc3RhdGljIEVNUFRZID0gKCgpID0+IHtcbiAgICBjb25zdCBlbXB0eSA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBlbXB0eS5jbG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiBlbXB0eTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogQSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhpcyBTdWJzY3JpcHRpb24gaGFzIGFscmVhZHkgYmVlbiB1bnN1YnNjcmliZWQuXG4gICAqL1xuICBwdWJsaWMgY2xvc2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcGFyZW50YWdlOiBTdWJzY3JpcHRpb25bXSB8IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiByZWdpc3RlcmVkIGZpbmFsaXplcnMgdG8gZXhlY3V0ZSB1cG9uIHVuc3Vic2NyaXB0aW9uLiBBZGRpbmcgYW5kIHJlbW92aW5nIGZyb20gdGhpc1xuICAgKiBsaXN0IG9jY3VycyBpbiB0aGUge0BsaW5rICNhZGR9IGFuZCB7QGxpbmsgI3JlbW92ZX0gbWV0aG9kcy5cbiAgICovXG4gIHByaXZhdGUgX2ZpbmFsaXplcnM6IEV4Y2x1ZGU8VGVhcmRvd25Mb2dpYywgdm9pZD5bXSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gaW5pdGlhbFRlYXJkb3duIEEgZnVuY3Rpb24gZXhlY3V0ZWQgZmlyc3QgYXMgcGFydCBvZiB0aGUgZmluYWxpemF0aW9uXG4gICAqIHByb2Nlc3MgdGhhdCBpcyBraWNrZWQgb2ZmIHdoZW4ge0BsaW5rICN1bnN1YnNjcmliZX0gaXMgY2FsbGVkLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbml0aWFsVGVhcmRvd24/OiAoKSA9PiB2b2lkKSB7fVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlcyB0aGUgcmVzb3VyY2VzIGhlbGQgYnkgdGhlIHN1YnNjcmlwdGlvbi4gTWF5LCBmb3IgaW5zdGFuY2UsIGNhbmNlbFxuICAgKiBhbiBvbmdvaW5nIE9ic2VydmFibGUgZXhlY3V0aW9uIG9yIGNhbmNlbCBhbnkgb3RoZXIgdHlwZSBvZiB3b3JrIHRoYXRcbiAgICogc3RhcnRlZCB3aGVuIHRoZSBTdWJzY3JpcHRpb24gd2FzIGNyZWF0ZWQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB1bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBsZXQgZXJyb3JzOiBhbnlbXSB8IHVuZGVmaW5lZDtcblxuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcblxuICAgICAgLy8gUmVtb3ZlIHRoaXMgZnJvbSBpdCdzIHBhcmVudHMuXG4gICAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgICBpZiAoX3BhcmVudGFnZSkge1xuICAgICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgICAgIGZvciAoY29uc3QgcGFyZW50IG9mIF9wYXJlbnRhZ2UpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9wYXJlbnRhZ2UucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgaW5pdGlhbFRlYXJkb3duOiBpbml0aWFsRmluYWxpemVyIH0gPSB0aGlzO1xuICAgICAgaWYgKGlzRnVuY3Rpb24oaW5pdGlhbEZpbmFsaXplcikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpbml0aWFsRmluYWxpemVyKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBlcnJvcnMgPSBlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvciA/IGUuZXJyb3JzIDogW2VdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgX2ZpbmFsaXplcnMgfSA9IHRoaXM7XG4gICAgICBpZiAoX2ZpbmFsaXplcnMpIHtcbiAgICAgICAgdGhpcy5fZmluYWxpemVycyA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgZmluYWxpemVyIG9mIF9maW5hbGl6ZXJzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGV4ZWNGaW5hbGl6ZXIoZmluYWxpemVyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyA/PyBbXTtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVyci5lcnJvcnNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZmluYWxpemVyIHRvIHRoaXMgc3Vic2NyaXB0aW9uLCBzbyB0aGF0IGZpbmFsaXphdGlvbiB3aWxsIGJlIHVuc3Vic2NyaWJlZC9jYWxsZWRcbiAgICogd2hlbiB0aGlzIHN1YnNjcmlwdGlvbiBpcyB1bnN1YnNjcmliZWQuIElmIHRoaXMgc3Vic2NyaXB0aW9uIGlzIGFscmVhZHkge0BsaW5rICNjbG9zZWR9LFxuICAgKiBiZWNhdXNlIGl0IGhhcyBhbHJlYWR5IGJlZW4gdW5zdWJzY3JpYmVkLCB0aGVuIHdoYXRldmVyIGZpbmFsaXplciBpcyBwYXNzZWQgdG8gaXRcbiAgICogd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGV4ZWN1dGVkICh1bmxlc3MgdGhlIGZpbmFsaXplciBpdHNlbGYgaXMgYWxzbyBhIGNsb3NlZCBzdWJzY3JpcHRpb24pLlxuICAgKlxuICAgKiBDbG9zZWQgU3Vic2NyaXB0aW9ucyBjYW5ub3QgYmUgYWRkZWQgYXMgZmluYWxpemVycyB0byBhbnkgc3Vic2NyaXB0aW9uLiBBZGRpbmcgYSBjbG9zZWRcbiAgICogc3Vic2NyaXB0aW9uIHRvIGEgYW55IHN1YnNjcmlwdGlvbiB3aWxsIHJlc3VsdCBpbiBubyBvcGVyYXRpb24uIChBIG5vb3ApLlxuICAgKlxuICAgKiBBZGRpbmcgYSBzdWJzY3JpcHRpb24gdG8gaXRzZWxmLCBvciBhZGRpbmcgYG51bGxgIG9yIGB1bmRlZmluZWRgIHdpbGwgbm90IHBlcmZvcm0gYW55XG4gICAqIG9wZXJhdGlvbiBhdCBhbGwuIChBIG5vb3ApLlxuICAgKlxuICAgKiBgU3Vic2NyaXB0aW9uYCBpbnN0YW5jZXMgdGhhdCBhcmUgYWRkZWQgdG8gdGhpcyBpbnN0YW5jZSB3aWxsIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZW1zZWx2ZXNcbiAgICogaWYgdGhleSBhcmUgdW5zdWJzY3JpYmVkLiBGdW5jdGlvbnMgYW5kIHtAbGluayBVbnN1YnNjcmliYWJsZX0gb2JqZWN0cyB0aGF0IHlvdSB3aXNoIHRvIHJlbW92ZVxuICAgKiB3aWxsIG5lZWQgdG8gYmUgcmVtb3ZlZCBtYW51YWxseSB3aXRoIHtAbGluayAjcmVtb3ZlfVxuICAgKlxuICAgKiBAcGFyYW0gdGVhcmRvd24gVGhlIGZpbmFsaXphdGlvbiBsb2dpYyB0byBhZGQgdG8gdGhpcyBzdWJzY3JpcHRpb24uXG4gICAqL1xuICBhZGQodGVhcmRvd246IFRlYXJkb3duTG9naWMpOiB2b2lkIHtcbiAgICAvLyBPbmx5IGFkZCB0aGUgZmluYWxpemVyIGlmIGl0J3Mgbm90IHVuZGVmaW5lZFxuICAgIC8vIGFuZCBkb24ndCBhZGQgYSBzdWJzY3JpcHRpb24gdG8gaXRzZWxmLlxuICAgIGlmICh0ZWFyZG93biAmJiB0ZWFyZG93biAhPT0gdGhpcykge1xuICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgIC8vIElmIHRoaXMgc3Vic2NyaXB0aW9uIGlzIGFscmVhZHkgY2xvc2VkLFxuICAgICAgICAvLyBleGVjdXRlIHdoYXRldmVyIGZpbmFsaXplciBpcyBoYW5kZWQgdG8gaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgZXhlY0ZpbmFsaXplcih0ZWFyZG93bik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAvLyBXZSBkb24ndCBhZGQgY2xvc2VkIHN1YnNjcmlwdGlvbnMsIGFuZCB3ZSBkb24ndCBhZGQgdGhlIHNhbWUgc3Vic2NyaXB0aW9uXG4gICAgICAgICAgLy8gdHdpY2UuIFN1YnNjcmlwdGlvbiB1bnN1YnNjcmliZSBpcyBpZGVtcG90ZW50LlxuICAgICAgICAgIGlmICh0ZWFyZG93bi5jbG9zZWQgfHwgdGVhcmRvd24uX2hhc1BhcmVudCh0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZWFyZG93bi5fYWRkUGFyZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgICh0aGlzLl9maW5hbGl6ZXJzID0gdGhpcy5fZmluYWxpemVycyA/PyBbXSkucHVzaCh0ZWFyZG93bik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgYSB0aGlzIHN1YnNjcmlwdGlvbiBhbHJlYWR5IGhhcyBhIHBhcnRpY3VsYXIgcGFyZW50LlxuICAgKiBUaGlzIHdpbGwgc2lnbmFsIHRoYXQgdGhpcyBzdWJzY3JpcHRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgcGFyZW50IGluIHF1ZXN0aW9uLlxuICAgKiBAcGFyYW0gcGFyZW50IHRoZSBwYXJlbnQgdG8gY2hlY2sgZm9yXG4gICAqL1xuICBwcml2YXRlIF9oYXNQYXJlbnQocGFyZW50OiBTdWJzY3JpcHRpb24pIHtcbiAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgcmV0dXJuIF9wYXJlbnRhZ2UgPT09IHBhcmVudCB8fCAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSAmJiBfcGFyZW50YWdlLmluY2x1ZGVzKHBhcmVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwYXJlbnQgdG8gdGhpcyBzdWJzY3JpcHRpb24gc28gaXQgY2FuIGJlIHJlbW92ZWQgZnJvbSB0aGUgcGFyZW50IGlmIGl0XG4gICAqIHVuc3Vic2NyaWJlcyBvbiBpdCdzIG93bi5cbiAgICpcbiAgICogTk9URTogVEhJUyBBU1NVTUVTIFRIQVQge0BsaW5rIF9oYXNQYXJlbnR9IEhBUyBBTFJFQURZIEJFRU4gQ0hFQ0tFRC5cbiAgICogQHBhcmFtIHBhcmVudCBUaGUgcGFyZW50IHN1YnNjcmlwdGlvbiB0byBhZGRcbiAgICovXG4gIHByaXZhdGUgX2FkZFBhcmVudChwYXJlbnQ6IFN1YnNjcmlwdGlvbikge1xuICAgIGNvbnN0IHsgX3BhcmVudGFnZSB9ID0gdGhpcztcbiAgICB0aGlzLl9wYXJlbnRhZ2UgPSBBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpID8gKF9wYXJlbnRhZ2UucHVzaChwYXJlbnQpLCBfcGFyZW50YWdlKSA6IF9wYXJlbnRhZ2UgPyBbX3BhcmVudGFnZSwgcGFyZW50XSA6IHBhcmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gYSBjaGlsZCB3aGVuIGl0IGlzIHJlbW92ZWQgdmlhIHtAbGluayAjcmVtb3ZlfS5cbiAgICogQHBhcmFtIHBhcmVudCBUaGUgcGFyZW50IHRvIHJlbW92ZVxuICAgKi9cbiAgcHJpdmF0ZSBfcmVtb3ZlUGFyZW50KHBhcmVudDogU3Vic2NyaXB0aW9uKSB7XG4gICAgY29uc3QgeyBfcGFyZW50YWdlIH0gPSB0aGlzO1xuICAgIGlmIChfcGFyZW50YWdlID09PSBwYXJlbnQpIHtcbiAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICBhcnJSZW1vdmUoX3BhcmVudGFnZSwgcGFyZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGZpbmFsaXplciBmcm9tIHRoaXMgc3Vic2NyaXB0aW9uIHRoYXQgd2FzIHByZXZpb3VzbHkgYWRkZWQgd2l0aCB0aGUge0BsaW5rICNhZGR9IG1ldGhvZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGBTdWJzY3JpcHRpb25gIGluc3RhbmNlcywgd2hlbiB1bnN1YnNjcmliZWQsIHdpbGwgYXV0b21hdGljYWxseSByZW1vdmUgdGhlbXNlbHZlc1xuICAgKiBmcm9tIGV2ZXJ5IG90aGVyIGBTdWJzY3JpcHRpb25gIHRoZXkgaGF2ZSBiZWVuIGFkZGVkIHRvLiBUaGlzIG1lYW5zIHRoYXQgdXNpbmcgdGhlIGByZW1vdmVgIG1ldGhvZFxuICAgKiBpcyBub3QgYSBjb21tb24gdGhpbmcgYW5kIHNob3VsZCBiZSB1c2VkIHRob3VnaHRmdWxseS5cbiAgICpcbiAgICogSWYgeW91IGFkZCB0aGUgc2FtZSBmaW5hbGl6ZXIgaW5zdGFuY2Ugb2YgYSBmdW5jdGlvbiBvciBhbiB1bnN1YnNjcmliYWJsZSBvYmplY3QgdG8gYSBgU3Vic2NyaXB0aW9uYCBpbnN0YW5jZVxuICAgKiBtb3JlIHRoYW4gb25jZSwgeW91IHdpbGwgbmVlZCB0byBjYWxsIGByZW1vdmVgIHRoZSBzYW1lIG51bWJlciBvZiB0aW1lcyB0byByZW1vdmUgYWxsIGluc3RhbmNlcy5cbiAgICpcbiAgICogQWxsIGZpbmFsaXplciBpbnN0YW5jZXMgYXJlIHJlbW92ZWQgdG8gZnJlZSB1cCBtZW1vcnkgdXBvbiB1bnN1YnNjcmlwdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHRlYXJkb3duIFRoZSBmaW5hbGl6ZXIgdG8gcmVtb3ZlIGZyb20gdGhpcyBzdWJzY3JpcHRpb25cbiAgICovXG4gIHJlbW92ZSh0ZWFyZG93bjogRXhjbHVkZTxUZWFyZG93bkxvZ2ljLCB2b2lkPik6IHZvaWQge1xuICAgIGNvbnN0IHsgX2ZpbmFsaXplcnMgfSA9IHRoaXM7XG4gICAgX2ZpbmFsaXplcnMgJiYgYXJyUmVtb3ZlKF9maW5hbGl6ZXJzLCB0ZWFyZG93bik7XG5cbiAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRlYXJkb3duLl9yZW1vdmVQYXJlbnQodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVUJTQ1JJUFRJT04gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N1YnNjcmlwdGlvbih2YWx1ZTogYW55KTogdmFsdWUgaXMgU3Vic2NyaXB0aW9uIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbiB8fFxuICAgICh2YWx1ZSAmJiAnY2xvc2VkJyBpbiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnJlbW92ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS5hZGQpICYmIGlzRnVuY3Rpb24odmFsdWUudW5zdWJzY3JpYmUpKVxuICApO1xufVxuXG5mdW5jdGlvbiBleGVjRmluYWxpemVyKGZpbmFsaXplcjogVW5zdWJzY3JpYmFibGUgfCAoKCkgPT4gdm9pZCkpIHtcbiAgaWYgKGlzRnVuY3Rpb24oZmluYWxpemVyKSkge1xuICAgIGZpbmFsaXplcigpO1xuICB9IGVsc2Uge1xuICAgIGZpbmFsaXplci51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlTm90aWZpY2F0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogVGhlIHtAbGluayBHbG9iYWxDb25maWd9IG9iamVjdCBmb3IgUnhKUy4gSXQgaXMgdXNlZCB0byBjb25maWd1cmUgdGhpbmdzXG4gKiBsaWtlIGhvdyB0byByZWFjdCBvbiB1bmhhbmRsZWQgZXJyb3JzLlxuICovXG5leHBvcnQgY29uc3QgY29uZmlnOiBHbG9iYWxDb25maWcgPSB7XG4gIG9uVW5oYW5kbGVkRXJyb3I6IG51bGwsXG4gIG9uU3RvcHBlZE5vdGlmaWNhdGlvbjogbnVsbCxcbiAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nOiBmYWxzZSxcbiAgdXNlRGVwcmVjYXRlZE5leHRDb250ZXh0OiBmYWxzZSxcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgUnhKUywgdXNlZCB0byBjb25maWd1cmUgdGhpbmdzXG4gKiBsaWtlIGhvdyB0byByZWFjdCBvbiB1bmhhbmRsZWQgZXJyb3JzLiBBY2Nlc3NpYmxlIHZpYSB7QGxpbmsgY29uZmlnfVxuICogb2JqZWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbENvbmZpZyB7XG4gIC8qKlxuICAgKiBBIHJlZ2lzdHJhdGlvbiBwb2ludCBmb3IgdW5oYW5kbGVkIGVycm9ycyBmcm9tIFJ4SlMuIFRoZXNlIGFyZSBlcnJvcnMgdGhhdFxuICAgKiBjYW5ub3Qgd2VyZSBub3QgaGFuZGxlZCBieSBjb25zdW1pbmcgY29kZSBpbiB0aGUgdXN1YWwgc3Vic2NyaXB0aW9uIHBhdGguIEZvclxuICAgKiBleGFtcGxlLCBpZiB5b3UgaGF2ZSB0aGlzIGNvbmZpZ3VyZWQsIGFuZCB5b3Ugc3Vic2NyaWJlIHRvIGFuIG9ic2VydmFibGUgd2l0aG91dFxuICAgKiBwcm92aWRpbmcgYW4gZXJyb3IgaGFuZGxlciwgZXJyb3JzIGZyb20gdGhhdCBzdWJzY3JpcHRpb24gd2lsbCBlbmQgdXAgaGVyZS4gVGhpc1xuICAgKiB3aWxsIF9hbHdheXNfIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseSBvbiBhbm90aGVyIGpvYiBpbiB0aGUgcnVudGltZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAqIHdlIGRvIG5vdCB3YW50IGVycm9ycyB0aHJvd24gaW4gdGhpcyB1c2VyLWNvbmZpZ3VyZWQgaGFuZGxlciB0byBpbnRlcmZlcmUgd2l0aCB0aGVcbiAgICogYmVoYXZpb3Igb2YgdGhlIGxpYnJhcnkuXG4gICAqL1xuICBvblVuaGFuZGxlZEVycm9yOiAoKGVycjogYW55KSA9PiB2b2lkKSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEEgcmVnaXN0cmF0aW9uIHBvaW50IGZvciBub3RpZmljYXRpb25zIHRoYXQgY2Fubm90IGJlIHNlbnQgdG8gc3Vic2NyaWJlcnMgYmVjYXVzZSB0aGV5XG4gICAqIGhhdmUgY29tcGxldGVkLCBlcnJvcmVkIG9yIGhhdmUgYmVlbiBleHBsaWNpdGx5IHVuc3Vic2NyaWJlZC4gQnkgZGVmYXVsdCwgbmV4dCwgY29tcGxldGVcbiAgICogYW5kIGVycm9yIG5vdGlmaWNhdGlvbnMgc2VudCB0byBzdG9wcGVkIHN1YnNjcmliZXJzIGFyZSBub29wcy4gSG93ZXZlciwgc29tZXRpbWVzIGNhbGxlcnNcbiAgICogbWlnaHQgd2FudCBhIGRpZmZlcmVudCBiZWhhdmlvci4gRm9yIGV4YW1wbGUsIHdpdGggc291cmNlcyB0aGF0IGF0dGVtcHQgdG8gcmVwb3J0IGVycm9yc1xuICAgKiB0byBzdG9wcGVkIHN1YnNjcmliZXJzLCBhIGNhbGxlciBjYW4gY29uZmlndXJlIFJ4SlMgdG8gdGhyb3cgYW4gdW5oYW5kbGVkIGVycm9yIGluc3RlYWQuXG4gICAqIFRoaXMgd2lsbCBfYWx3YXlzXyBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkgb24gYW5vdGhlciBqb2IgaW4gdGhlIHJ1bnRpbWUuIFRoaXMgaXMgYmVjYXVzZVxuICAgKiB3ZSBkbyBub3Qgd2FudCBlcnJvcnMgdGhyb3duIGluIHRoaXMgdXNlci1jb25maWd1cmVkIGhhbmRsZXIgdG8gaW50ZXJmZXJlIHdpdGggdGhlXG4gICAqIGJlaGF2aW9yIG9mIHRoZSBsaWJyYXJ5LlxuICAgKi9cbiAgb25TdG9wcGVkTm90aWZpY2F0aW9uOiAoKG5vdGlmaWNhdGlvbjogT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbjxhbnk+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHZvaWQpIHwgbnVsbDtcblxuICAvKipcbiAgICogVGhlIHByb21pc2UgY29uc3RydWN0b3IgdXNlZCBieSBkZWZhdWx0IGZvciB7QGxpbmsgT2JzZXJ2YWJsZSN0b1Byb21pc2UgdG9Qcm9taXNlfSBhbmQge0BsaW5rIE9ic2VydmFibGUjZm9yRWFjaCBmb3JFYWNofVxuICAgKiBtZXRob2RzLlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBBcyBvZiB2ZXJzaW9uIDgsIFJ4SlMgd2lsbCBubyBsb25nZXIgc3VwcG9ydCB0aGlzIHNvcnQgb2YgaW5qZWN0aW9uIG9mIGFcbiAgICogUHJvbWlzZSBjb25zdHJ1Y3Rvci4gSWYgeW91IG5lZWQgYSBQcm9taXNlIGltcGxlbWVudGF0aW9uIG90aGVyIHRoYW4gbmF0aXZlIHByb21pc2VzLFxuICAgKiBwbGVhc2UgcG9seWZpbGwvcGF0Y2ggUHJvbWlzZSBhcyB5b3Ugc2VlIGFwcHJvcHJpYXRlLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gICAqL1xuICBQcm9taXNlPzogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZTtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgdHVybnMgb24gc3luY2hyb25vdXMgZXJyb3IgcmV0aHJvd2luZywgd2hpY2ggaXMgYSBkZXByZWNhdGVkIGJlaGF2aW9yXG4gICAqIGluIHY2IGFuZCBoaWdoZXIuIFRoaXMgYmVoYXZpb3IgZW5hYmxlcyBiYWQgcGF0dGVybnMgbGlrZSB3cmFwcGluZyBhIHN1YnNjcmliZVxuICAgKiBjYWxsIGluIGEgdHJ5L2NhdGNoIGJsb2NrLiBJdCBhbHNvIGVuYWJsZXMgcHJvZHVjZXIgaW50ZXJmZXJlbmNlLCBhIG5hc3R5IGJ1Z1xuICAgKiB3aGVyZSBhIG11bHRpY2FzdCBjYW4gYmUgYnJva2VuIGZvciBhbGwgb2JzZXJ2ZXJzIGJ5IGEgZG93bnN0cmVhbSBjb25zdW1lciB3aXRoXG4gICAqIGFuIHVuaGFuZGxlZCBlcnJvci4gRE8gTk9UIFVTRSBUSElTIEZMQUcgVU5MRVNTIElUJ1MgTkVFREVEIFRPIEJVWSBUSU1FXG4gICAqIEZPUiBNSUdSQVRJT04gUkVBU09OUy5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgQXMgb2YgdmVyc2lvbiA4LCBSeEpTIHdpbGwgbm8gbG9uZ2VyIHN1cHBvcnQgc3luY2hyb25vdXMgdGhyb3dpbmdcbiAgICogb2YgdW5oYW5kbGVkIGVycm9ycy4gQWxsIGVycm9ycyB3aWxsIGJlIHRocm93biBvbiBhIHNlcGFyYXRlIGNhbGwgc3RhY2sgdG8gcHJldmVudCBiYWRcbiAgICogYmVoYXZpb3JzIGRlc2NyaWJlZCBhYm92ZS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgZW5hYmxlcyBhbiBhcy1vZi15ZXQgdW5kb2N1bWVudGVkIGZlYXR1cmUgZnJvbSB2NTogVGhlIGFiaWxpdHkgdG8gYWNjZXNzXG4gICAqIGB1bnN1YnNjcmliZSgpYCB2aWEgYHRoaXNgIGNvbnRleHQgaW4gYG5leHRgIGZ1bmN0aW9ucyBjcmVhdGVkIGluIG9ic2VydmVycyBwYXNzZWRcbiAgICogdG8gYHN1YnNjcmliZWAuXG4gICAqXG4gICAqIFRoaXMgaXMgYmVpbmcgcmVtb3ZlZCBiZWNhdXNlIHRoZSBwZXJmb3JtYW5jZSB3YXMgc2V2ZXJlbHkgcHJvYmxlbWF0aWMsIGFuZCBpdCBjb3VsZCBhbHNvIGNhdXNlXG4gICAqIGlzc3VlcyB3aGVuIHR5cGVzIG90aGVyIHRoYW4gUE9KT3MgYXJlIHBhc3NlZCB0byBzdWJzY3JpYmUgYXMgc3Vic2NyaWJlcnMsIGFzIHRoZXkgd2lsbCBsaWtlbHkgaGF2ZVxuICAgKiB0aGVpciBgdGhpc2AgY29udGV4dCBvdmVyd3JpdHRlbi5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgQXMgb2YgdmVyc2lvbiA4LCBSeEpTIHdpbGwgbm8gbG9uZ2VyIHN1cHBvcnQgYWx0ZXJpbmcgdGhlXG4gICAqIGNvbnRleHQgb2YgbmV4dCBmdW5jdGlvbnMgcHJvdmlkZWQgYXMgcGFydCBvZiBhbiBvYnNlcnZlciB0byBTdWJzY3JpYmUuIEluc3RlYWQsXG4gICAqIHlvdSB3aWxsIGhhdmUgYWNjZXNzIHRvIGEgc3Vic2NyaXB0aW9uIG9yIGEgc2lnbmFsIG9yIHRva2VuIHRoYXQgd2lsbCBhbGxvdyB5b3UgdG8gZG8gdGhpbmdzIGxpa2VcbiAgICogdW5zdWJzY3JpYmUgYW5kIHRlc3QgY2xvc2VkIHN0YXR1cy4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgdXNlRGVwcmVjYXRlZE5leHRDb250ZXh0OiBib29sZWFuO1xufVxuIiwgImltcG9ydCB0eXBlIHsgVGltZXJIYW5kbGUgfSBmcm9tICcuL3RpbWVySGFuZGxlJztcbnR5cGUgU2V0VGltZW91dEZ1bmN0aW9uID0gKGhhbmRsZXI6ICgpID0+IHZvaWQsIHRpbWVvdXQ/OiBudW1iZXIsIC4uLmFyZ3M6IGFueVtdKSA9PiBUaW1lckhhbmRsZTtcbnR5cGUgQ2xlYXJUaW1lb3V0RnVuY3Rpb24gPSAoaGFuZGxlOiBUaW1lckhhbmRsZSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIFRpbWVvdXRQcm92aWRlciB7XG4gIHNldFRpbWVvdXQ6IFNldFRpbWVvdXRGdW5jdGlvbjtcbiAgY2xlYXJUaW1lb3V0OiBDbGVhclRpbWVvdXRGdW5jdGlvbjtcbiAgZGVsZWdhdGU6XG4gICAgfCB7XG4gICAgICAgIHNldFRpbWVvdXQ6IFNldFRpbWVvdXRGdW5jdGlvbjtcbiAgICAgICAgY2xlYXJUaW1lb3V0OiBDbGVhclRpbWVvdXRGdW5jdGlvbjtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IHRpbWVvdXRQcm92aWRlcjogVGltZW91dFByb3ZpZGVyID0ge1xuICAvLyBXaGVuIGFjY2Vzc2luZyB0aGUgZGVsZWdhdGUsIHVzZSB0aGUgdmFyaWFibGUgcmF0aGVyIHRoYW4gYHRoaXNgIHNvIHRoYXRcbiAgLy8gdGhlIGZ1bmN0aW9ucyBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgYmVpbmcgYm91bmQgdG8gdGhlIHByb3ZpZGVyLlxuICBzZXRUaW1lb3V0KGhhbmRsZXI6ICgpID0+IHZvaWQsIHRpbWVvdXQ/OiBudW1iZXIsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCB7IGRlbGVnYXRlIH0gPSB0aW1lb3V0UHJvdmlkZXI7XG4gICAgaWYgKGRlbGVnYXRlPy5zZXRUaW1lb3V0KSB7XG4gICAgICByZXR1cm4gZGVsZWdhdGUuc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCwgLi4uYXJncyk7XG4gIH0sXG4gIGNsZWFyVGltZW91dChoYW5kbGUpIHtcbiAgICBjb25zdCB7IGRlbGVnYXRlIH0gPSB0aW1lb3V0UHJvdmlkZXI7XG4gICAgcmV0dXJuIChkZWxlZ2F0ZT8uY2xlYXJUaW1lb3V0IHx8IGNsZWFyVGltZW91dCkoaGFuZGxlIGFzIGFueSk7XG4gIH0sXG4gIGRlbGVnYXRlOiB1bmRlZmluZWQsXG59O1xuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcblxuLyoqXG4gKiBIYW5kbGVzIGFuIGVycm9yIG9uIGFub3RoZXIgam9iIGVpdGhlciB3aXRoIHRoZSB1c2VyLWNvbmZpZ3VyZWQge0BsaW5rIG9uVW5oYW5kbGVkRXJyb3J9LFxuICogb3IgYnkgdGhyb3dpbmcgaXQgb24gdGhhdCBuZXcgam9iIHNvIGl0IGNhbiBiZSBwaWNrZWQgdXAgYnkgYHdpbmRvdy5vbmVycm9yYCwgYHByb2Nlc3Mub24oJ2Vycm9yJylgLCBldGMuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZXJlIGlzIGFuIGVycm9yIHRoYXQgaXMgb3V0LW9mLWJhbmQgd2l0aCB0aGUgc3Vic2NyaXB0aW9uXG4gKiBvciB3aGVuIGFuIGVycm9yIGhpdHMgYSB0ZXJtaW5hbCBib3VuZGFyeSBvZiB0aGUgc3Vic2NyaXB0aW9uIGFuZCBubyBlcnJvciBoYW5kbGVyIHdhcyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0gZXJyIHRoZSBlcnJvciB0byByZXBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycjogYW55KSB7XG4gIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCB7IG9uVW5oYW5kbGVkRXJyb3IgfSA9IGNvbmZpZztcbiAgICBpZiAob25VbmhhbmRsZWRFcnJvcikge1xuICAgICAgLy8gRXhlY3V0ZSB0aGUgdXNlci1jb25maWd1cmVkIGVycm9yIGhhbmRsZXIuXG4gICAgICBvblVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRocm93IHNvIGl0IGlzIHBpY2tlZCB1cCBieSB0aGUgcnVudGltZSdzIHVuY2F1Z2h0IGVycm9yIG1lY2hhbmlzbS5cbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH0pO1xufVxuIiwgIi8qIHRzbGludDpkaXNhYmxlOm5vLWVtcHR5ICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxuIiwgImltcG9ydCB7IENvbXBsZXRlTm90aWZpY2F0aW9uLCBOZXh0Tm90aWZpY2F0aW9uLCBFcnJvck5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEEgY29tcGxldGlvbiBvYmplY3Qgb3B0aW1pemVkIGZvciBtZW1vcnkgdXNlIGFuZCBjcmVhdGVkIHRvIGJlIHRoZVxuICogc2FtZSBcInNoYXBlXCIgYXMgb3RoZXIgbm90aWZpY2F0aW9ucyBpbiB2OC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgQ09NUExFVEVfTk9USUZJQ0FUSU9OID0gKCgpID0+IGNyZWF0ZU5vdGlmaWNhdGlvbignQycsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKSBhcyBDb21wbGV0ZU5vdGlmaWNhdGlvbikoKTtcblxuLyoqXG4gKiBJbnRlcm5hbCB1c2Ugb25seS4gQ3JlYXRlcyBhbiBvcHRpbWl6ZWQgZXJyb3Igbm90aWZpY2F0aW9uIHRoYXQgaXMgdGhlIHNhbWUgXCJzaGFwZVwiXG4gKiBhcyBvdGhlciBub3RpZmljYXRpb25zLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvck5vdGlmaWNhdGlvbihlcnJvcjogYW55KTogRXJyb3JOb3RpZmljYXRpb24ge1xuICByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdFJywgdW5kZWZpbmVkLCBlcnJvcikgYXMgYW55O1xufVxuXG4vKipcbiAqIEludGVybmFsIHVzZSBvbmx5LiBDcmVhdGVzIGFuIG9wdGltaXplZCBuZXh0IG5vdGlmaWNhdGlvbiB0aGF0IGlzIHRoZSBzYW1lIFwic2hhcGVcIlxuICogYXMgb3RoZXIgbm90aWZpY2F0aW9ucy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dE5vdGlmaWNhdGlvbjxUPih2YWx1ZTogVCkge1xuICByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdOJywgdmFsdWUsIHVuZGVmaW5lZCkgYXMgTmV4dE5vdGlmaWNhdGlvbjxUPjtcbn1cblxuLyoqXG4gKiBFbnN1cmVzIHRoYXQgYWxsIG5vdGlmaWNhdGlvbnMgY3JlYXRlZCBpbnRlcm5hbGx5IGhhdmUgdGhlIHNhbWUgXCJzaGFwZVwiIGluIHY4LlxuICpcbiAqIFRPRE86IFRoaXMgaXMgb25seSBleHBvcnRlZCB0byBzdXBwb3J0IGEgY3JhenkgbGVnYWN5IHRlc3QgaW4gYGdyb3VwQnlgLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb24oa2luZDogJ04nIHwgJ0UnIHwgJ0MnLCB2YWx1ZTogYW55LCBlcnJvcjogYW55KSB7XG4gIHJldHVybiB7XG4gICAga2luZCxcbiAgICB2YWx1ZSxcbiAgICBlcnJvcixcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5sZXQgY29udGV4dDogeyBlcnJvclRocm93bjogYm9vbGVhbjsgZXJyb3I6IGFueSB9IHwgbnVsbCA9IG51bGw7XG5cbi8qKlxuICogSGFuZGxlcyBkZWFsaW5nIHdpdGggZXJyb3JzIGZvciBzdXBlci1ncm9zcyBtb2RlLiBDcmVhdGVzIGEgY29udGV4dCwgaW4gd2hpY2hcbiAqIGFueSBzeW5jaHJvbm91c2x5IHRocm93biBlcnJvcnMgd2lsbCBiZSBwYXNzZWQgdG8ge0BsaW5rIGNhcHR1cmVFcnJvcn0uIFdoaWNoXG4gKiB3aWxsIHJlY29yZCB0aGUgZXJyb3Igc3VjaCB0aGF0IGl0IHdpbGwgYmUgcmV0aHJvd24gYWZ0ZXIgdGhlIGNhbGwgYmFjayBpcyBjb21wbGV0ZS5cbiAqIFRPRE86IFJlbW92ZSBpbiB2OFxuICogQHBhcmFtIGNiIEFuIGltbWVkaWF0ZWx5IGV4ZWN1dGVkIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JDb250ZXh0KGNiOiAoKSA9PiB2b2lkKSB7XG4gIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgIGNvbnN0IGlzUm9vdCA9ICFjb250ZXh0O1xuICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgIGNvbnRleHQgPSB7IGVycm9yVGhyb3duOiBmYWxzZSwgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgY2IoKTtcbiAgICBpZiAoaXNSb290KSB7XG4gICAgICBjb25zdCB7IGVycm9yVGhyb3duLCBlcnJvciB9ID0gY29udGV4dCE7XG4gICAgICBjb250ZXh0ID0gbnVsbDtcbiAgICAgIGlmIChlcnJvclRocm93bikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgZ2VuZXJhbCBub24tZGVwcmVjYXRlZCBwYXRoIGZvciBldmVyeW9uZSB0aGF0XG4gICAgLy8gaXNuJ3QgY3JhenkgZW5vdWdoIHRvIHVzZSBzdXBlci1ncm9zcyBtb2RlICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKVxuICAgIGNiKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDYXB0dXJlcyBlcnJvcnMgb25seSBpbiBzdXBlci1ncm9zcyBtb2RlLlxuICogQHBhcmFtIGVyciB0aGUgZXJyb3IgdG8gY2FwdHVyZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUVycm9yKGVycjogYW55KSB7XG4gIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiBjb250ZXh0KSB7XG4gICAgY29udGV4dC5lcnJvclRocm93biA9IHRydWU7XG4gICAgY29udGV4dC5lcnJvciA9IGVycjtcbiAgfVxufVxuIiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZlciwgT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24sIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWwvbm9vcCc7XG5pbXBvcnQgeyBuZXh0Tm90aWZpY2F0aW9uLCBlcnJvck5vdGlmaWNhdGlvbiwgQ09NUExFVEVfTk9USUZJQ0FUSU9OIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25GYWN0b3JpZXMnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcbmltcG9ydCB7IGNhcHR1cmVFcnJvciB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xuXG4vKipcbiAqIEltcGxlbWVudHMgdGhlIHtAbGluayBPYnNlcnZlcn0gaW50ZXJmYWNlIGFuZCBleHRlbmRzIHRoZVxuICoge0BsaW5rIFN1YnNjcmlwdGlvbn0gY2xhc3MuIFdoaWxlIHRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGlzIHRoZSBwdWJsaWMgQVBJIGZvclxuICogY29uc3VtaW5nIHRoZSB2YWx1ZXMgb2YgYW4ge0BsaW5rIE9ic2VydmFibGV9LCBhbGwgT2JzZXJ2ZXJzIGdldCBjb252ZXJ0ZWQgdG9cbiAqIGEgU3Vic2NyaWJlciwgaW4gb3JkZXIgdG8gcHJvdmlkZSBTdWJzY3JpcHRpb24tbGlrZSBjYXBhYmlsaXRpZXMgc3VjaCBhc1xuICogYHVuc3Vic2NyaWJlYC4gU3Vic2NyaWJlciBpcyBhIGNvbW1vbiB0eXBlIGluIFJ4SlMsIGFuZCBjcnVjaWFsIGZvclxuICogaW1wbGVtZW50aW5nIG9wZXJhdG9ycywgYnV0IGl0IGlzIHJhcmVseSB1c2VkIGFzIGEgcHVibGljIEFQSS5cbiAqXG4gKiBAY2xhc3MgU3Vic2NyaWJlcjxUPlxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmlwdGlvbiBpbXBsZW1lbnRzIE9ic2VydmVyPFQ+IHtcbiAgLyoqXG4gICAqIEEgc3RhdGljIGZhY3RvcnkgZm9yIGEgU3Vic2NyaWJlciwgZ2l2ZW4gYSAocG90ZW50aWFsbHkgcGFydGlhbCkgZGVmaW5pdGlvblxuICAgKiBvZiBhbiBPYnNlcnZlci5cbiAgICogQHBhcmFtIG5leHQgVGhlIGBuZXh0YCBjYWxsYmFjayBvZiBhbiBPYnNlcnZlci5cbiAgICogQHBhcmFtIGVycm9yIFRoZSBgZXJyb3JgIGNhbGxiYWNrIG9mIGFuXG4gICAqIE9ic2VydmVyLlxuICAgKiBAcGFyYW0gY29tcGxldGUgVGhlIGBjb21wbGV0ZWAgY2FsbGJhY2sgb2YgYW5cbiAgICogT2JzZXJ2ZXIuXG4gICAqIEByZXR1cm4gQSBTdWJzY3JpYmVyIHdyYXBwaW5nIHRoZSAocGFydGlhbGx5IGRlZmluZWQpXG4gICAqIE9ic2VydmVyIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiBhcmd1bWVudHMuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBkZXByZWNhdGVkIERvIG5vdCB1c2UuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVGhlcmUgaXMgbm8gcmVwbGFjZW1lbnQgZm9yIHRoaXNcbiAgICogbWV0aG9kLCBhbmQgdGhlcmUgaXMgbm8gcmVhc29uIHRvIGJlIGNyZWF0aW5nIGluc3RhbmNlcyBvZiBgU3Vic2NyaWJlcmAgZGlyZWN0bHkuXG4gICAqIElmIHlvdSBoYXZlIGEgc3BlY2lmaWMgdXNlIGNhc2UsIHBsZWFzZSBmaWxlIGFuIGlzc3VlLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTxUPihuZXh0PzogKHg/OiBUKSA9PiB2b2lkLCBlcnJvcj86IChlPzogYW55KSA9PiB2b2lkLCBjb21wbGV0ZT86ICgpID0+IHZvaWQpOiBTdWJzY3JpYmVyPFQ+IHtcbiAgICByZXR1cm4gbmV3IFNhZmVTdWJzY3JpYmVyKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIHByb3RlY3RlZCBpc1N0b3BwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBwcm90ZWN0ZWQgZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55PiB8IE9ic2VydmVyPGFueT47IC8vIHRoaXMgYGFueWAgaXMgdGhlIGVzY2FwZSBoYXRjaCB0byBlcmFzZSBleHRyYSB0eXBlIHBhcmFtIChlLmcuIFIpXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LlxuICAgKiBUaGVyZSBpcyBubyByZWFzb24gdG8gZGlyZWN0bHkgY3JlYXRlIGFuIGluc3RhbmNlIG9mIFN1YnNjcmliZXIuIFRoaXMgdHlwZSBpcyBleHBvcnRlZCBmb3IgdHlwaW5ncyByZWFzb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24/OiBTdWJzY3JpYmVyPGFueT4gfCBPYnNlcnZlcjxhbnk+KSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoZGVzdGluYXRpb24pIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgY2hhaW4gc3Vic2NyaXB0aW9ucyB0b2dldGhlciBoZXJlLlxuICAgICAgLy8gaWYgZGVzdGluYXRpb24gaXMgYSBTdWJzY3JpcHRpb24sIHRoZW4gaXQgaXMgYSBTdWJzY3JpYmVyLlxuICAgICAgaWYgKGlzU3Vic2NyaXB0aW9uKGRlc3RpbmF0aW9uKSkge1xuICAgICAgICBkZXN0aW5hdGlvbi5hZGQodGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBFTVBUWV9PQlNFUlZFUjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBub3RpZmljYXRpb25zIG9mIHR5cGUgYG5leHRgIGZyb21cbiAgICogdGhlIE9ic2VydmFibGUsIHdpdGggYSB2YWx1ZS4gVGhlIE9ic2VydmFibGUgbWF5IGNhbGwgdGhpcyBtZXRob2QgMCBvciBtb3JlXG4gICAqIHRpbWVzLlxuICAgKiBAcGFyYW0ge1R9IFt2YWx1ZV0gVGhlIGBuZXh0YCB2YWx1ZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIG5leHQodmFsdWU/OiBUKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5leHROb3RpZmljYXRpb24odmFsdWUpLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmV4dCh2YWx1ZSEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIG5vdGlmaWNhdGlvbnMgb2YgdHlwZSBgZXJyb3JgIGZyb21cbiAgICogdGhlIE9ic2VydmFibGUsIHdpdGggYW4gYXR0YWNoZWQgYEVycm9yYC4gTm90aWZpZXMgdGhlIE9ic2VydmVyIHRoYXRcbiAgICogdGhlIE9ic2VydmFibGUgaGFzIGV4cGVyaWVuY2VkIGFuIGVycm9yIGNvbmRpdGlvbi5cbiAgICogQHBhcmFtIHthbnl9IFtlcnJdIFRoZSBgZXJyb3JgIGV4Y2VwdGlvbi5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGVycm9yKGVycj86IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihlcnJvck5vdGlmaWNhdGlvbihlcnIpLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBhIHZhbHVlbGVzcyBub3RpZmljYXRpb24gb2YgdHlwZVxuICAgKiBgY29tcGxldGVgIGZyb20gdGhlIE9ic2VydmFibGUuIE5vdGlmaWVzIHRoZSBPYnNlcnZlciB0aGF0IHRoZSBPYnNlcnZhYmxlXG4gICAqIGhhcyBmaW5pc2hlZCBzZW5kaW5nIHB1c2gtYmFzZWQgbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNvbXBsZXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihDT01QTEVURV9OT1RJRklDQVRJT04sIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHN1cGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbnVsbCE7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZXJyb3IoZXJyOiBhbnkpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGhpcyBiaW5kIGlzIGNhcHR1cmVkIGhlcmUgYmVjYXVzZSB3ZSB3YW50IHRvIGJlIGFibGUgdG8gaGF2ZVxuICogY29tcGF0aWJpbGl0eSB3aXRoIG1vbm9pZCBsaWJyYXJpZXMgdGhhdCB0ZW5kIHRvIHVzZSBhIG1ldGhvZCBuYW1lZFxuICogYGJpbmRgLiBJbiBwYXJ0aWN1bGFyLCBhIGxpYnJhcnkgY2FsbGVkIE1vbmlvIHJlcXVpcmVzIHRoaXMuXG4gKi9cbmNvbnN0IF9iaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG5cbmZ1bmN0aW9uIGJpbmQ8Rm4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4oZm46IEZuLCB0aGlzQXJnOiBhbnkpOiBGbiB7XG4gIHJldHVybiBfYmluZC5jYWxsKGZuLCB0aGlzQXJnKTtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBvcHRpbWl6YXRpb24gb25seSwgRE8gTk9UIEVYUE9TRS5cbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBDb25zdW1lck9ic2VydmVyPFQ+IGltcGxlbWVudHMgT2JzZXJ2ZXI8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcnRpYWxPYnNlcnZlcjogUGFydGlhbDxPYnNlcnZlcjxUPj4pIHt9XG5cbiAgbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFydGlhbE9ic2VydmVyIH0gPSB0aGlzO1xuICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIubmV4dCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgY29uc3QgeyBwYXJ0aWFsT2JzZXJ2ZXIgfSA9IHRoaXM7XG4gICAgaWYgKHBhcnRpYWxPYnNlcnZlci5lcnJvcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgY29tcGxldGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBwYXJ0aWFsT2JzZXJ2ZXIgfSA9IHRoaXM7XG4gICAgaWYgKHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWZlU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBvYnNlcnZlck9yTmV4dD86IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+IHwgKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGVycm9yPzogKChlPzogYW55KSA9PiB2b2lkKSB8IG51bGwsXG4gICAgY29tcGxldGU/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gICkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBsZXQgcGFydGlhbE9ic2VydmVyOiBQYXJ0aWFsPE9ic2VydmVyPFQ+PjtcbiAgICBpZiAoaXNGdW5jdGlvbihvYnNlcnZlck9yTmV4dCkgfHwgIW9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAvLyBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiwgbm90IGFuIG9ic2VydmVyLiBUaGUgbmV4dFxuICAgICAgLy8gdHdvIGFyZ3VtZW50cyAqY291bGQqIGJlIG9ic2VydmVycywgb3IgdGhleSBjb3VsZCBiZSBlbXB0eS5cbiAgICAgIHBhcnRpYWxPYnNlcnZlciA9IHtcbiAgICAgICAgbmV4dDogKG9ic2VydmVyT3JOZXh0ID8/IHVuZGVmaW5lZCkgYXMgKCgodmFsdWU6IFQpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSxcbiAgICAgICAgZXJyb3I6IGVycm9yID8/IHVuZGVmaW5lZCxcbiAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlID8/IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIHBhcnRpYWwgb2JzZXJ2ZXIuXG4gICAgICBsZXQgY29udGV4dDogYW55O1xuICAgICAgaWYgKHRoaXMgJiYgY29uZmlnLnVzZURlcHJlY2F0ZWROZXh0Q29udGV4dCkge1xuICAgICAgICAvLyBUaGlzIGlzIGEgZGVwcmVjYXRlZCBwYXRoIHRoYXQgbWFkZSBgdGhpcy51bnN1YnNjcmliZSgpYCBhdmFpbGFibGUgaW5cbiAgICAgICAgLy8gbmV4dCBoYW5kbGVyIGZ1bmN0aW9ucyBwYXNzZWQgdG8gc3Vic2NyaWJlLiBUaGlzIG9ubHkgZXhpc3RzIGJlaGluZCBhIGZsYWdcbiAgICAgICAgLy8gbm93LCBhcyBpdCBpcyAqdmVyeSogc2xvdy5cbiAgICAgICAgY29udGV4dCA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICBjb250ZXh0LnVuc3Vic2NyaWJlID0gKCkgPT4gdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgbmV4dDogb2JzZXJ2ZXJPck5leHQubmV4dCAmJiBiaW5kKG9ic2VydmVyT3JOZXh0Lm5leHQsIGNvbnRleHQpLFxuICAgICAgICAgIGVycm9yOiBvYnNlcnZlck9yTmV4dC5lcnJvciAmJiBiaW5kKG9ic2VydmVyT3JOZXh0LmVycm9yLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21wbGV0ZTogb2JzZXJ2ZXJPck5leHQuY29tcGxldGUgJiYgYmluZChvYnNlcnZlck9yTmV4dC5jb21wbGV0ZSwgY29udGV4dCksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGUgXCJub3JtYWxcIiBwYXRoLiBKdXN0IHVzZSB0aGUgcGFydGlhbCBvYnNlcnZlciBkaXJlY3RseS5cbiAgICAgICAgcGFydGlhbE9ic2VydmVyID0gb2JzZXJ2ZXJPck5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV3JhcCB0aGUgcGFydGlhbCBvYnNlcnZlciB0byBlbnN1cmUgaXQncyBhIGZ1bGwgb2JzZXJ2ZXIsIGFuZFxuICAgIC8vIG1ha2Ugc3VyZSBwcm9wZXIgZXJyb3IgaGFuZGxpbmcgaXMgYWNjb3VudGVkIGZvci5cbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IENvbnN1bWVyT2JzZXJ2ZXIocGFydGlhbE9ic2VydmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcjogYW55KSB7XG4gIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgIGNhcHR1cmVFcnJvcihlcnJvcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWRlYWwgcGF0aCwgd2UgcmVwb3J0IHRoaXMgYXMgYW4gdW5oYW5kbGVkIGVycm9yLFxuICAgIC8vIHdoaWNoIGlzIHRocm93biBvbiBhIG5ldyBjYWxsIHN0YWNrLlxuICAgIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGVycm9yIGhhbmRsZXIgdXNlZCB3aGVuIG5vIGVycm9yIGhhbmRsZXIgd2FzIHN1cHBsaWVkXG4gKiB0byB0aGUgU2FmZVN1YnNjcmliZXIgLS0gbWVhbmluZyBubyBlcnJvciBoYW5kbGVyIHdhcyBzdXBwbGllZFxuICogZG8gdGhlIGBzdWJzY3JpYmVgIGNhbGwgb24gb3VyIG9ic2VydmFibGUuXG4gKiBAcGFyYW0gZXJyIFRoZSBlcnJvciB0byBoYW5kbGVcbiAqL1xuZnVuY3Rpb24gZGVmYXVsdEVycm9ySGFuZGxlcihlcnI6IGFueSkge1xuICB0aHJvdyBlcnI7XG59XG5cbi8qKlxuICogQSBoYW5kbGVyIGZvciBub3RpZmljYXRpb25zIHRoYXQgY2Fubm90IGJlIHNlbnQgdG8gYSBzdG9wcGVkIHN1YnNjcmliZXIuXG4gKiBAcGFyYW0gbm90aWZpY2F0aW9uIFRoZSBub3RpZmljYXRpb24gYmVpbmcgc2VudFxuICogQHBhcmFtIHN1YnNjcmliZXIgVGhlIHN0b3BwZWQgc3Vic2NyaWJlclxuICovXG5mdW5jdGlvbiBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbjxhbnk+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pIHtcbiAgY29uc3QgeyBvblN0b3BwZWROb3RpZmljYXRpb24gfSA9IGNvbmZpZztcbiAgb25TdG9wcGVkTm90aWZpY2F0aW9uICYmIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KCgpID0+IG9uU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIHN1YnNjcmliZXIpKTtcbn1cblxuLyoqXG4gKiBUaGUgb2JzZXJ2ZXIgdXNlZCBhcyBhIHN0dWIgZm9yIHN1YnNjcmlwdGlvbnMgd2hlcmUgdGhlIHVzZXIgZGlkIG5vdFxuICogcGFzcyBhbnkgYXJndW1lbnRzIHRvIGBzdWJzY3JpYmVgLiBDb21lcyB3aXRoIHRoZSBkZWZhdWx0IGVycm9yIGhhbmRsaW5nXG4gKiBiZWhhdmlvci5cbiAqL1xuZXhwb3J0IGNvbnN0IEVNUFRZX09CU0VSVkVSOiBSZWFkb25seTxPYnNlcnZlcjxhbnk+PiAmIHsgY2xvc2VkOiB0cnVlIH0gPSB7XG4gIGNsb3NlZDogdHJ1ZSxcbiAgbmV4dDogbm9vcCxcbiAgZXJyb3I6IGRlZmF1bHRFcnJvckhhbmRsZXIsXG4gIGNvbXBsZXRlOiBub29wLFxufTtcbiIsICIvKipcbiAqIFN5bWJvbC5vYnNlcnZhYmxlIG9yIGEgc3RyaW5nIFwiQEBvYnNlcnZhYmxlXCIuIFVzZWQgZm9yIGludGVyb3BcbiAqXG4gKiBAZGVwcmVjYXRlZCBXZSB3aWxsIG5vIGxvbmdlciBiZSBleHBvcnRpbmcgdGhpcyBzeW1ib2wgaW4gdXBjb21pbmcgdmVyc2lvbnMgb2YgUnhKUy5cbiAqIEluc3RlYWQgcG9seWZpbGwgYW5kIHVzZSBTeW1ib2wub2JzZXJ2YWJsZSBkaXJlY3RseSAqb3IqIHVzZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9zeW1ib2wtb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgY29uc3Qgb2JzZXJ2YWJsZTogc3RyaW5nIHwgc3ltYm9sID0gKCgpID0+ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlKSB8fCAnQEBvYnNlcnZhYmxlJykoKTtcbiIsICIvKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgb25lIHBhcmFtZXRlciBhbmQganVzdCByZXR1cm5zIGl0LiBTaW1wbHkgcHV0LFxuICogdGhpcyBpcyBsaWtlIGA8VD4oeDogVCk6IFQgPT4geGAuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCBpbiBzb21lIGNhc2VzIHdoZW4gdXNpbmcgdGhpbmdzIGxpa2UgYG1lcmdlTWFwYFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSwgbWFwLCByYW5nZSwgbWVyZ2VNYXAsIGlkZW50aXR5IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSg1KSk7XG4gKlxuICogY29uc3QgcmVzdWx0JCA9IHNvdXJjZSQucGlwZShcbiAqICAgbWFwKGkgPT4gcmFuZ2UoaSkpLFxuICogICBtZXJnZU1hcChpZGVudGl0eSkgLy8gc2FtZSBhcyBtZXJnZU1hcCh4ID0+IHgpXG4gKiApO1xuICpcbiAqIHJlc3VsdCQuc3Vic2NyaWJlKHtcbiAqICAgbmV4dDogY29uc29sZS5sb2dcbiAqIH0pO1xuICogYGBgXG4gKlxuICogT3Igd2hlbiB5b3Ugd2FudCB0byBzZWxlY3RpdmVseSBhcHBseSBhbiBvcGVyYXRvclxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSwgaWRlbnRpdHkgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBzaG91bGRMaW1pdCA9ICgpID0+IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gKlxuICogY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApO1xuICpcbiAqIGNvbnN0IHJlc3VsdCQgPSBzb3VyY2UkLnBpcGUoc2hvdWxkTGltaXQoKSA/IHRha2UoNSkgOiBpZGVudGl0eSk7XG4gKlxuICogcmVzdWx0JC5zdWJzY3JpYmUoe1xuICogICBuZXh0OiBjb25zb2xlLmxvZ1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0geCBBbnkgdmFsdWUgdGhhdCBpcyByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyBUaGUgdmFsdWUgcGFzc2VkIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIgdG8gdGhpcyBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk8VD4oeDogVCk6IFQge1xuICByZXR1cm4geDtcbn1cbiIsICJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknO1xuaW1wb3J0IHsgVW5hcnlGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoKTogdHlwZW9mIGlkZW50aXR5O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQT4oZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+KTogVW5hcnlGdW5jdGlvbjxULCBBPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEI+KGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPiwgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+KTogVW5hcnlGdW5jdGlvbjxULCBCPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEM+KGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPiwgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LCBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4pOiBVbmFyeUZ1bmN0aW9uPFQsIEM+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRD4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPlxuKTogVW5hcnlGdW5jdGlvbjxULCBEPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEU+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPlxuKTogVW5hcnlGdW5jdGlvbjxULCBFPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEY+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEY+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRiwgRz4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj4sXG4gIGZuNzogVW5hcnlGdW5jdGlvbjxGLCBHPlxuKTogVW5hcnlGdW5jdGlvbjxULCBHPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz4sXG4gIGZuODogVW5hcnlGdW5jdGlvbjxHLCBIPlxuKTogVW5hcnlGdW5jdGlvbjxULCBIPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz4sXG4gIGZuODogVW5hcnlGdW5jdGlvbjxHLCBIPixcbiAgZm45OiBVbmFyeUZ1bmN0aW9uPEgsIEk+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEk+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRiwgRywgSCwgST4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj4sXG4gIGZuNzogVW5hcnlGdW5jdGlvbjxGLCBHPixcbiAgZm44OiBVbmFyeUZ1bmN0aW9uPEcsIEg+LFxuICBmbjk6IFVuYXJ5RnVuY3Rpb248SCwgST4sXG4gIC4uLmZuczogVW5hcnlGdW5jdGlvbjxhbnksIGFueT5bXVxuKTogVW5hcnlGdW5jdGlvbjxULCB1bmtub3duPjtcblxuLyoqXG4gKiBwaXBlKCkgY2FuIGJlIGNhbGxlZCBvbiBvbmUgb3IgbW9yZSBmdW5jdGlvbnMsIGVhY2ggb2Ygd2hpY2ggY2FuIHRha2Ugb25lIGFyZ3VtZW50IChcIlVuYXJ5RnVuY3Rpb25cIilcbiAqIGFuZCB1c2VzIGl0IHRvIHJldHVybiBhIHZhbHVlLlxuICogSXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgb25lIGFyZ3VtZW50LCBwYXNzZXMgaXQgdG8gdGhlIGZpcnN0IFVuYXJ5RnVuY3Rpb24sIGFuZCB0aGVuXG4gKiBwYXNzZXMgdGhlIHJlc3VsdCB0byB0aGUgbmV4dCBvbmUsIHBhc3NlcyB0aGF0IHJlc3VsdCB0byB0aGUgbmV4dCBvbmUsIGFuZCBzbyBvbi4gIFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGlwZSguLi5mbnM6IEFycmF5PFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+Pik6IFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+IHtcbiAgcmV0dXJuIHBpcGVGcm9tQXJyYXkoZm5zKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGVGcm9tQXJyYXk8VCwgUj4oZm5zOiBBcnJheTxVbmFyeUZ1bmN0aW9uPFQsIFI+Pik6IFVuYXJ5RnVuY3Rpb248VCwgUj4ge1xuICBpZiAoZm5zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBpZGVudGl0eSBhcyBVbmFyeUZ1bmN0aW9uPGFueSwgYW55PjtcbiAgfVxuXG4gIGlmIChmbnMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZuc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwaXBlZChpbnB1dDogVCk6IFIge1xuICAgIHJldHVybiBmbnMucmVkdWNlKChwcmV2OiBhbnksIGZuOiBVbmFyeUZ1bmN0aW9uPFQsIFI+KSA9PiBmbihwcmV2KSwgaW5wdXQgYXMgYW55KTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBPcGVyYXRvciB9IGZyb20gJy4vT3BlcmF0b3InO1xuaW1wb3J0IHsgU2FmZVN1YnNjcmliZXIsIFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24sIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFRlYXJkb3duTG9naWMsIE9wZXJhdG9yRnVuY3Rpb24sIFN1YnNjcmliYWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IHBpcGVGcm9tQXJyYXkgfSBmcm9tICcuL3V0aWwvcGlwZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgZXJyb3JDb250ZXh0IH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG5cbi8qKlxuICogQSByZXByZXNlbnRhdGlvbiBvZiBhbnkgc2V0IG9mIHZhbHVlcyBvdmVyIGFueSBhbW91bnQgb2YgdGltZS4gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBidWlsZGluZyBibG9ja1xuICogb2YgUnhKUy5cbiAqXG4gKiBAY2xhc3MgT2JzZXJ2YWJsZTxUPlxuICovXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIFN1YnNjcmliYWJsZTxUPiB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICovXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICovXG4gIG9wZXJhdG9yOiBPcGVyYXRvcjxhbnksIFQ+IHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3Vic2NyaWJlIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBPYnNlcnZhYmxlIGlzXG4gICAqIGluaXRpYWxseSBzdWJzY3JpYmVkIHRvLiBUaGlzIGZ1bmN0aW9uIGlzIGdpdmVuIGEgU3Vic2NyaWJlciwgdG8gd2hpY2ggbmV3IHZhbHVlc1xuICAgKiBjYW4gYmUgYG5leHRgZWQsIG9yIGFuIGBlcnJvcmAgbWV0aG9kIGNhbiBiZSBjYWxsZWQgdG8gcmFpc2UgYW4gZXJyb3IsIG9yXG4gICAqIGBjb21wbGV0ZWAgY2FuIGJlIGNhbGxlZCB0byBub3RpZnkgb2YgYSBzdWNjZXNzZnVsIGNvbXBsZXRpb24uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdWJzY3JpYmU/OiAodGhpczogT2JzZXJ2YWJsZTxUPiwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4gVGVhcmRvd25Mb2dpYykge1xuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICB9XG4gIH1cblxuICAvLyBIQUNLOiBTaW5jZSBUeXBlU2NyaXB0IGluaGVyaXRzIHN0YXRpYyBwcm9wZXJ0aWVzIHRvbywgd2UgaGF2ZSB0b1xuICAvLyBmaWdodCBhZ2FpbnN0IFR5cGVTY3JpcHQgaGVyZSBzbyBTdWJqZWN0IGNhbiBoYXZlIGEgZGlmZmVyZW50IHN0YXRpYyBjcmVhdGUgc2lnbmF0dXJlXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE9ic2VydmFibGUgYnkgY2FsbGluZyB0aGUgT2JzZXJ2YWJsZSBjb25zdHJ1Y3RvclxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJzY3JpYmU/IHRoZSBzdWJzY3JpYmVyIGZ1bmN0aW9uIHRvIGJlIHBhc3NlZCB0byB0aGUgT2JzZXJ2YWJsZSBjb25zdHJ1Y3RvclxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhIG5ldyBvYnNlcnZhYmxlXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgbmV3IE9ic2VydmFibGUoKWAgaW5zdGVhZC4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgPSA8VD4oc3Vic2NyaWJlPzogKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IFRlYXJkb3duTG9naWMpID0+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oc3Vic2NyaWJlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlLCB3aXRoIHRoaXMgT2JzZXJ2YWJsZSBpbnN0YW5jZSBhcyB0aGUgc291cmNlLCBhbmQgdGhlIHBhc3NlZFxuICAgKiBvcGVyYXRvciBkZWZpbmVkIGFzIHRoZSBuZXcgb2JzZXJ2YWJsZSdzIG9wZXJhdG9yLlxuICAgKiBAbWV0aG9kIGxpZnRcbiAgICogQHBhcmFtIG9wZXJhdG9yIHRoZSBvcGVyYXRvciBkZWZpbmluZyB0aGUgb3BlcmF0aW9uIHRvIHRha2Ugb24gdGhlIG9ic2VydmFibGVcbiAgICogQHJldHVybiBhIG5ldyBvYnNlcnZhYmxlIHdpdGggdGhlIE9wZXJhdG9yIGFwcGxpZWRcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gICAqIElmIHlvdSBoYXZlIGltcGxlbWVudGVkIGFuIG9wZXJhdG9yIHVzaW5nIGBsaWZ0YCwgaXQgaXMgcmVjb21tZW5kZWQgdGhhdCB5b3UgY3JlYXRlIGFuXG4gICAqIG9wZXJhdG9yIGJ5IHNpbXBseSByZXR1cm5pbmcgYG5ldyBPYnNlcnZhYmxlKClgIGRpcmVjdGx5LiBTZWUgXCJDcmVhdGluZyBuZXcgb3BlcmF0b3JzIGZyb21cbiAgICogc2NyYXRjaFwiIHNlY3Rpb24gaGVyZTogaHR0cHM6Ly9yeGpzLmRldi9ndWlkZS9vcGVyYXRvcnNcbiAgICovXG4gIGxpZnQ8Uj4ob3BlcmF0b3I/OiBPcGVyYXRvcjxULCBSPik6IE9ic2VydmFibGU8Uj4ge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxSPigpO1xuICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH1cblxuICBzdWJzY3JpYmUob2JzZXJ2ZXJPck5leHQ/OiBQYXJ0aWFsPE9ic2VydmVyPFQ+PiB8ICgodmFsdWU6IFQpID0+IHZvaWQpKTogU3Vic2NyaXB0aW9uO1xuICAvKiogQGRlcHJlY2F0ZWQgSW5zdGVhZCBvZiBwYXNzaW5nIHNlcGFyYXRlIGNhbGxiYWNrIGFyZ3VtZW50cywgdXNlIGFuIG9ic2VydmVyIGFyZ3VtZW50LiBTaWduYXR1cmVzIHRha2luZyBzZXBhcmF0ZSBjYWxsYmFjayBhcmd1bWVudHMgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zdWJzY3JpYmUtYXJndW1lbnRzICovXG4gIHN1YnNjcmliZShuZXh0PzogKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCBudWxsLCBlcnJvcj86ICgoZXJyb3I6IGFueSkgPT4gdm9pZCkgfCBudWxsLCBjb21wbGV0ZT86ICgoKSA9PiB2b2lkKSB8IG51bGwpOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBJbnZva2VzIGFuIGV4ZWN1dGlvbiBvZiBhbiBPYnNlcnZhYmxlIGFuZCByZWdpc3RlcnMgT2JzZXJ2ZXIgaGFuZGxlcnMgZm9yIG5vdGlmaWNhdGlvbnMgaXQgd2lsbCBlbWl0LlxuICAgKlxuICAgKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+VXNlIGl0IHdoZW4geW91IGhhdmUgYWxsIHRoZXNlIE9ic2VydmFibGVzLCBidXQgc3RpbGwgbm90aGluZyBpcyBoYXBwZW5pbmcuPC9zcGFuPlxuICAgKlxuICAgKiBgc3Vic2NyaWJlYCBpcyBub3QgYSByZWd1bGFyIG9wZXJhdG9yLCBidXQgYSBtZXRob2QgdGhhdCBjYWxscyBPYnNlcnZhYmxlJ3MgaW50ZXJuYWwgYHN1YnNjcmliZWAgZnVuY3Rpb24uIEl0XG4gICAqIG1pZ2h0IGJlIGZvciBleGFtcGxlIGEgZnVuY3Rpb24gdGhhdCB5b3UgcGFzc2VkIHRvIE9ic2VydmFibGUncyBjb25zdHJ1Y3RvciwgYnV0IG1vc3Qgb2YgdGhlIHRpbWUgaXQgaXNcbiAgICogYSBsaWJyYXJ5IGltcGxlbWVudGF0aW9uLCB3aGljaCBkZWZpbmVzIHdoYXQgd2lsbCBiZSBlbWl0dGVkIGJ5IGFuIE9ic2VydmFibGUsIGFuZCB3aGVuIGl0IGJlIHdpbGwgZW1pdHRlZC4gVGhpcyBtZWFuc1xuICAgKiB0aGF0IGNhbGxpbmcgYHN1YnNjcmliZWAgaXMgYWN0dWFsbHkgdGhlIG1vbWVudCB3aGVuIE9ic2VydmFibGUgc3RhcnRzIGl0cyB3b3JrLCBub3Qgd2hlbiBpdCBpcyBjcmVhdGVkLCBhcyBpdCBpcyBvZnRlblxuICAgKiB0aGUgdGhvdWdodC5cbiAgICpcbiAgICogQXBhcnQgZnJvbSBzdGFydGluZyB0aGUgZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUsIHRoaXMgbWV0aG9kIGFsbG93cyB5b3UgdG8gbGlzdGVuIGZvciB2YWx1ZXNcbiAgICogdGhhdCBhbiBPYnNlcnZhYmxlIGVtaXRzLCBhcyB3ZWxsIGFzIGZvciB3aGVuIGl0IGNvbXBsZXRlcyBvciBlcnJvcnMuIFlvdSBjYW4gYWNoaWV2ZSB0aGlzIGluIHR3b1xuICAgKiBvZiB0aGUgZm9sbG93aW5nIHdheXMuXG4gICAqXG4gICAqIFRoZSBmaXJzdCB3YXkgaXMgY3JlYXRpbmcgYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB7QGxpbmsgT2JzZXJ2ZXJ9IGludGVyZmFjZS4gSXQgc2hvdWxkIGhhdmUgbWV0aG9kc1xuICAgKiBkZWZpbmVkIGJ5IHRoYXQgaW50ZXJmYWNlLCBidXQgbm90ZSB0aGF0IGl0IHNob3VsZCBiZSBqdXN0IGEgcmVndWxhciBKYXZhU2NyaXB0IG9iamVjdCwgd2hpY2ggeW91IGNhbiBjcmVhdGVcbiAgICogeW91cnNlbGYgaW4gYW55IHdheSB5b3Ugd2FudCAoRVM2IGNsYXNzLCBjbGFzc2ljIGZ1bmN0aW9uIGNvbnN0cnVjdG9yLCBvYmplY3QgbGl0ZXJhbCBldGMuKS4gSW4gcGFydGljdWxhciwgZG9cbiAgICogbm90IGF0dGVtcHQgdG8gdXNlIGFueSBSeEpTIGltcGxlbWVudGF0aW9uIGRldGFpbHMgdG8gY3JlYXRlIE9ic2VydmVycyAtIHlvdSBkb24ndCBuZWVkIHRoZW0uIFJlbWVtYmVyIGFsc29cbiAgICogdGhhdCB5b3VyIG9iamVjdCBkb2VzIG5vdCBoYXZlIHRvIGltcGxlbWVudCBhbGwgbWV0aG9kcy4gSWYgeW91IGZpbmQgeW91cnNlbGYgY3JlYXRpbmcgYSBtZXRob2QgdGhhdCBkb2Vzbid0XG4gICAqIGRvIGFueXRoaW5nLCB5b3UgY2FuIHNpbXBseSBvbWl0IGl0LiBOb3RlIGhvd2V2ZXIsIGlmIHRoZSBgZXJyb3JgIG1ldGhvZCBpcyBub3QgcHJvdmlkZWQgYW5kIGFuIGVycm9yIGhhcHBlbnMsXG4gICAqIGl0IHdpbGwgYmUgdGhyb3duIGFzeW5jaHJvbm91c2x5LiBFcnJvcnMgdGhyb3duIGFzeW5jaHJvbm91c2x5IGNhbm5vdCBiZSBjYXVnaHQgdXNpbmcgYHRyeWAvYGNhdGNoYC4gSW5zdGVhZCxcbiAgICogdXNlIHRoZSB7QGxpbmsgb25VbmhhbmRsZWRFcnJvcn0gY29uZmlndXJhdGlvbiBvcHRpb24gb3IgdXNlIGEgcnVudGltZSBoYW5kbGVyIChsaWtlIGB3aW5kb3cub25lcnJvcmAgb3JcbiAgICogYHByb2Nlc3Mub24oJ2Vycm9yKWApIHRvIGJlIG5vdGlmaWVkIG9mIHVuaGFuZGxlZCBlcnJvcnMuIEJlY2F1c2Ugb2YgdGhpcywgaXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBwcm92aWRlXG4gICAqIGFuIGBlcnJvcmAgbWV0aG9kIHRvIGF2b2lkIG1pc3NpbmcgdGhyb3duIGVycm9ycy5cbiAgICpcbiAgICogVGhlIHNlY29uZCB3YXkgaXMgdG8gZ2l2ZSB1cCBvbiBPYnNlcnZlciBvYmplY3QgYWx0b2dldGhlciBhbmQgc2ltcGx5IHByb3ZpZGUgY2FsbGJhY2sgZnVuY3Rpb25zIGluIHBsYWNlIG9mIGl0cyBtZXRob2RzLlxuICAgKiBUaGlzIG1lYW5zIHlvdSBjYW4gcHJvdmlkZSB0aHJlZSBmdW5jdGlvbnMgYXMgYXJndW1lbnRzIHRvIGBzdWJzY3JpYmVgLCB3aGVyZSB0aGUgZmlyc3QgZnVuY3Rpb24gaXMgZXF1aXZhbGVudFxuICAgKiBvZiBhIGBuZXh0YCBtZXRob2QsIHRoZSBzZWNvbmQgb2YgYW4gYGVycm9yYCBtZXRob2QgYW5kIHRoZSB0aGlyZCBvZiBhIGBjb21wbGV0ZWAgbWV0aG9kLiBKdXN0IGFzIGluIGNhc2Ugb2YgYW4gT2JzZXJ2ZXIsXG4gICAqIGlmIHlvdSBkbyBub3QgbmVlZCB0byBsaXN0ZW4gZm9yIHNvbWV0aGluZywgeW91IGNhbiBvbWl0IGEgZnVuY3Rpb24gYnkgcGFzc2luZyBgdW5kZWZpbmVkYCBvciBgbnVsbGAsXG4gICAqIHNpbmNlIGBzdWJzY3JpYmVgIHJlY29nbml6ZXMgdGhlc2UgZnVuY3Rpb25zIGJ5IHdoZXJlIHRoZXkgd2VyZSBwbGFjZWQgaW4gZnVuY3Rpb24gY2FsbC4gV2hlbiBpdCBjb21lc1xuICAgKiB0byB0aGUgYGVycm9yYCBmdW5jdGlvbiwgYXMgd2l0aCBhbiBPYnNlcnZlciwgaWYgbm90IHByb3ZpZGVkLCBlcnJvcnMgZW1pdHRlZCBieSBhbiBPYnNlcnZhYmxlIHdpbGwgYmUgdGhyb3duIGFzeW5jaHJvbm91c2x5LlxuICAgKlxuICAgKiBZb3UgY2FuLCBob3dldmVyLCBzdWJzY3JpYmUgd2l0aCBubyBwYXJhbWV0ZXJzIGF0IGFsbC4gVGhpcyBtYXkgYmUgdGhlIGNhc2Ugd2hlcmUgeW91J3JlIG5vdCBpbnRlcmVzdGVkIGluIHRlcm1pbmFsIGV2ZW50c1xuICAgKiBhbmQgeW91IGFsc28gaGFuZGxlZCBlbWlzc2lvbnMgaW50ZXJuYWxseSBieSB1c2luZyBvcGVyYXRvcnMgKGUuZy4gdXNpbmcgYHRhcGApLlxuICAgKlxuICAgKiBXaGljaGV2ZXIgc3R5bGUgb2YgY2FsbGluZyBgc3Vic2NyaWJlYCB5b3UgdXNlLCBpbiBib3RoIGNhc2VzIGl0IHJldHVybnMgYSBTdWJzY3JpcHRpb24gb2JqZWN0LlxuICAgKiBUaGlzIG9iamVjdCBhbGxvd3MgeW91IHRvIGNhbGwgYHVuc3Vic2NyaWJlYCBvbiBpdCwgd2hpY2ggaW4gdHVybiB3aWxsIHN0b3AgdGhlIHdvcmsgdGhhdCBhbiBPYnNlcnZhYmxlIGRvZXMgYW5kIHdpbGwgY2xlYW5cbiAgICogdXAgYWxsIHJlc291cmNlcyB0aGF0IGFuIE9ic2VydmFibGUgdXNlZC4gTm90ZSB0aGF0IGNhbmNlbGxpbmcgYSBzdWJzY3JpcHRpb24gd2lsbCBub3QgY2FsbCBgY29tcGxldGVgIGNhbGxiYWNrXG4gICAqIHByb3ZpZGVkIHRvIGBzdWJzY3JpYmVgIGZ1bmN0aW9uLCB3aGljaCBpcyByZXNlcnZlZCBmb3IgYSByZWd1bGFyIGNvbXBsZXRpb24gc2lnbmFsIHRoYXQgY29tZXMgZnJvbSBhbiBPYnNlcnZhYmxlLlxuICAgKlxuICAgKiBSZW1lbWJlciB0aGF0IGNhbGxiYWNrcyBwcm92aWRlZCB0byBgc3Vic2NyaWJlYCBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5LlxuICAgKiBJdCBpcyBhbiBPYnNlcnZhYmxlIGl0c2VsZiB0aGF0IGRlY2lkZXMgd2hlbiB0aGVzZSBmdW5jdGlvbnMgd2lsbCBiZSBjYWxsZWQuIEZvciBleGFtcGxlIHtAbGluayBvZn1cbiAgICogYnkgZGVmYXVsdCBlbWl0cyBhbGwgaXRzIHZhbHVlcyBzeW5jaHJvbm91c2x5LiBBbHdheXMgY2hlY2sgZG9jdW1lbnRhdGlvbiBmb3IgaG93IGdpdmVuIE9ic2VydmFibGVcbiAgICogd2lsbCBiZWhhdmUgd2hlbiBzdWJzY3JpYmVkIGFuZCBpZiBpdHMgZGVmYXVsdCBiZWhhdmlvciBjYW4gYmUgbW9kaWZpZWQgd2l0aCBhIGBzY2hlZHVsZXJgLlxuICAgKlxuICAgKiAjIyMjIEV4YW1wbGVzXG4gICAqXG4gICAqIFN1YnNjcmliZSB3aXRoIGFuIHtAbGluayBndWlkZS9vYnNlcnZlciBPYnNlcnZlcn1cbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogY29uc3Qgc3VtT2JzZXJ2ZXIgPSB7XG4gICAqICAgc3VtOiAwLFxuICAgKiAgIG5leHQodmFsdWUpIHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdBZGRpbmc6ICcgKyB2YWx1ZSk7XG4gICAqICAgICB0aGlzLnN1bSA9IHRoaXMuc3VtICsgdmFsdWU7XG4gICAqICAgfSxcbiAgICogICBlcnJvcigpIHtcbiAgICogICAgIC8vIFdlIGFjdHVhbGx5IGNvdWxkIGp1c3QgcmVtb3ZlIHRoaXMgbWV0aG9kLFxuICAgKiAgICAgLy8gc2luY2Ugd2UgZG8gbm90IHJlYWxseSBjYXJlIGFib3V0IGVycm9ycyByaWdodCBub3cuXG4gICAqICAgfSxcbiAgICogICBjb21wbGV0ZSgpIHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdTdW0gZXF1YWxzOiAnICsgdGhpcy5zdW0pO1xuICAgKiAgIH1cbiAgICogfTtcbiAgICpcbiAgICogb2YoMSwgMiwgMykgLy8gU3luY2hyb25vdXNseSBlbWl0cyAxLCAyLCAzIGFuZCB0aGVuIGNvbXBsZXRlcy5cbiAgICogICAuc3Vic2NyaWJlKHN1bU9ic2VydmVyKTtcbiAgICpcbiAgICogLy8gTG9nczpcbiAgICogLy8gJ0FkZGluZzogMSdcbiAgICogLy8gJ0FkZGluZzogMidcbiAgICogLy8gJ0FkZGluZzogMydcbiAgICogLy8gJ1N1bSBlcXVhbHM6IDYnXG4gICAqIGBgYFxuICAgKlxuICAgKiBTdWJzY3JpYmUgd2l0aCBmdW5jdGlvbnMgKHtAbGluayBkZXByZWNhdGlvbnMvc3Vic2NyaWJlLWFyZ3VtZW50cyBkZXByZWNhdGVkfSlcbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJ1xuICAgKlxuICAgKiBsZXQgc3VtID0gMDtcbiAgICpcbiAgICogb2YoMSwgMiwgMykuc3Vic2NyaWJlKFxuICAgKiAgIHZhbHVlID0+IHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdBZGRpbmc6ICcgKyB2YWx1ZSk7XG4gICAqICAgICBzdW0gPSBzdW0gKyB2YWx1ZTtcbiAgICogICB9LFxuICAgKiAgIHVuZGVmaW5lZCxcbiAgICogICAoKSA9PiBjb25zb2xlLmxvZygnU3VtIGVxdWFsczogJyArIHN1bSlcbiAgICogKTtcbiAgICpcbiAgICogLy8gTG9nczpcbiAgICogLy8gJ0FkZGluZzogMSdcbiAgICogLy8gJ0FkZGluZzogMidcbiAgICogLy8gJ0FkZGluZzogMydcbiAgICogLy8gJ1N1bSBlcXVhbHM6IDYnXG4gICAqIGBgYFxuICAgKlxuICAgKiBDYW5jZWwgYSBzdWJzY3JpcHRpb25cbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogY29uc3Qgc3Vic2NyaXB0aW9uID0gaW50ZXJ2YWwoMTAwMCkuc3Vic2NyaWJlKHtcbiAgICogICBuZXh0KG51bSkge1xuICAgKiAgICAgY29uc29sZS5sb2cobnVtKVxuICAgKiAgIH0sXG4gICAqICAgY29tcGxldGUoKSB7XG4gICAqICAgICAvLyBXaWxsIG5vdCBiZSBjYWxsZWQsIGV2ZW4gd2hlbiBjYW5jZWxsaW5nIHN1YnNjcmlwdGlvbi5cbiAgICogICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZWQhJyk7XG4gICAqICAgfVxuICAgKiB9KTtcbiAgICpcbiAgICogc2V0VGltZW91dCgoKSA9PiB7XG4gICAqICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAqICAgY29uc29sZS5sb2coJ3Vuc3Vic2NyaWJlZCEnKTtcbiAgICogfSwgMjUwMCk7XG4gICAqXG4gICAqIC8vIExvZ3M6XG4gICAqIC8vIDAgYWZ0ZXIgMXNcbiAgICogLy8gMSBhZnRlciAyc1xuICAgKiAvLyAndW5zdWJzY3JpYmVkIScgYWZ0ZXIgMi41c1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtPYnNlcnZlcnxGdW5jdGlvbn0gb2JzZXJ2ZXJPck5leHQgKG9wdGlvbmFsKSBFaXRoZXIgYW4gb2JzZXJ2ZXIgd2l0aCBtZXRob2RzIHRvIGJlIGNhbGxlZCxcbiAgICogb3IgdGhlIGZpcnN0IG9mIHRocmVlIHBvc3NpYmxlIGhhbmRsZXJzLCB3aGljaCBpcyB0aGUgaGFuZGxlciBmb3IgZWFjaCB2YWx1ZSBlbWl0dGVkIGZyb20gdGhlIHN1YnNjcmliZWRcbiAgICogT2JzZXJ2YWJsZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZXJyb3IgKG9wdGlvbmFsKSBBIGhhbmRsZXIgZm9yIGEgdGVybWluYWwgZXZlbnQgcmVzdWx0aW5nIGZyb20gYW4gZXJyb3IuIElmIG5vIGVycm9yIGhhbmRsZXIgaXMgcHJvdmlkZWQsXG4gICAqIHRoZSBlcnJvciB3aWxsIGJlIHRocm93biBhc3luY2hyb25vdXNseSBhcyB1bmhhbmRsZWQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBsZXRlIChvcHRpb25hbCkgQSBoYW5kbGVyIGZvciBhIHRlcm1pbmFsIGV2ZW50IHJlc3VsdGluZyBmcm9tIHN1Y2Nlc3NmdWwgY29tcGxldGlvbi5cbiAgICogQHJldHVybiB7U3Vic2NyaXB0aW9ufSBhIHN1YnNjcmlwdGlvbiByZWZlcmVuY2UgdG8gdGhlIHJlZ2lzdGVyZWQgaGFuZGxlcnNcbiAgICogQG1ldGhvZCBzdWJzY3JpYmVcbiAgICovXG4gIHN1YnNjcmliZShcbiAgICBvYnNlcnZlck9yTmV4dD86IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+IHwgKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGVycm9yPzogKChlcnJvcjogYW55KSA9PiB2b2lkKSB8IG51bGwsXG4gICAgY29tcGxldGU/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3Qgc3Vic2NyaWJlciA9IGlzU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCkgPyBvYnNlcnZlck9yTmV4dCA6IG5ldyBTYWZlU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcblxuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICBjb25zdCB7IG9wZXJhdG9yLCBzb3VyY2UgfSA9IHRoaXM7XG4gICAgICBzdWJzY3JpYmVyLmFkZChcbiAgICAgICAgb3BlcmF0b3JcbiAgICAgICAgICA/IC8vIFdlJ3JlIGRlYWxpbmcgd2l0aCBhIHN1YnNjcmlwdGlvbiBpbiB0aGVcbiAgICAgICAgICAgIC8vIG9wZXJhdG9yIGNoYWluIHRvIG9uZSBvZiBvdXIgbGlmdGVkIG9wZXJhdG9ycy5cbiAgICAgICAgICAgIG9wZXJhdG9yLmNhbGwoc3Vic2NyaWJlciwgc291cmNlKVxuICAgICAgICAgIDogc291cmNlXG4gICAgICAgICAgPyAvLyBJZiBgc291cmNlYCBoYXMgYSB2YWx1ZSwgYnV0IGBvcGVyYXRvcmAgZG9lcyBub3QsIHNvbWV0aGluZyB0aGF0XG4gICAgICAgICAgICAvLyBoYWQgaW50aW1hdGUga25vd2xlZGdlIG9mIG91ciBBUEksIGxpa2Ugb3VyIGBTdWJqZWN0YCwgbXVzdCBoYXZlXG4gICAgICAgICAgICAvLyBzZXQgaXQuIFdlJ3JlIGdvaW5nIHRvIGp1c3QgY2FsbCBgX3N1YnNjcmliZWAgZGlyZWN0bHkuXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUoc3Vic2NyaWJlcilcbiAgICAgICAgICA6IC8vIEluIGFsbCBvdGhlciBjYXNlcywgd2UncmUgbGlrZWx5IHdyYXBwaW5nIGEgdXNlci1wcm92aWRlZCBpbml0aWFsaXplclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24sIHNvIHdlIG5lZWQgdG8gY2F0Y2ggZXJyb3JzIGFuZCBoYW5kbGUgdGhlbSBhcHByb3ByaWF0ZWx5LlxuICAgICAgICAgICAgdGhpcy5fdHJ5U3Vic2NyaWJlKHN1YnNjcmliZXIpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfdHJ5U3Vic2NyaWJlKHNpbms6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShzaW5rKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gcmV0dXJuIGFueXRoaW5nIGluIHRoaXMgY2FzZSxcbiAgICAgIC8vIGJlY2F1c2UgaXQncyBqdXN0IGdvaW5nIHRvIHRyeSB0byBgYWRkKClgIHRvIGEgc3Vic2NyaXB0aW9uXG4gICAgICAvLyBhYm92ZS5cbiAgICAgIHNpbmsuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlZCBhcyBhIE5PTi1DQU5DRUxMQUJMRSBtZWFucyBvZiBzdWJzY3JpYmluZyB0byBhbiBvYnNlcnZhYmxlLCBmb3IgdXNlIHdpdGhcbiAgICogQVBJcyB0aGF0IGV4cGVjdCBwcm9taXNlcywgbGlrZSBgYXN5bmMvYXdhaXRgLiBZb3UgY2Fubm90IHVuc3Vic2NyaWJlIGZyb20gdGhpcy5cbiAgICpcbiAgICogKipXQVJOSU5HKio6IE9ubHkgdXNlIHRoaXMgd2l0aCBvYnNlcnZhYmxlcyB5b3UgKmtub3cqIHdpbGwgY29tcGxldGUuIElmIHRoZSBzb3VyY2VcbiAgICogb2JzZXJ2YWJsZSBkb2VzIG5vdCBjb21wbGV0ZSwgeW91IHdpbGwgZW5kIHVwIHdpdGggYSBwcm9taXNlIHRoYXQgaXMgaHVuZyB1cCwgYW5kXG4gICAqIHBvdGVudGlhbGx5IGFsbCBvZiB0aGUgc3RhdGUgb2YgYW4gYXN5bmMgZnVuY3Rpb24gaGFuZ2luZyBvdXQgaW4gbWVtb3J5LiBUbyBhdm9pZFxuICAgKiB0aGlzIHNpdHVhdGlvbiwgbG9vayBpbnRvIGFkZGluZyBzb21ldGhpbmcgbGlrZSB7QGxpbmsgdGltZW91dH0sIHtAbGluayB0YWtlfSxcbiAgICoge0BsaW5rIHRha2VXaGlsZX0sIG9yIHtAbGluayB0YWtlVW50aWx9IGFtb25nc3Qgb3RoZXJzLlxuICAgKlxuICAgKiAjIyMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UgfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSg0KSk7XG4gICAqXG4gICAqIGFzeW5jIGZ1bmN0aW9uIGdldFRvdGFsKCkge1xuICAgKiAgIGxldCB0b3RhbCA9IDA7XG4gICAqXG4gICAqICAgYXdhaXQgc291cmNlJC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICogICAgIHRvdGFsICs9IHZhbHVlO1xuICAgKiAgICAgY29uc29sZS5sb2coJ29ic2VydmFibGUgLT4gJyArIHZhbHVlKTtcbiAgICogICB9KTtcbiAgICpcbiAgICogICByZXR1cm4gdG90YWw7XG4gICAqIH1cbiAgICpcbiAgICogZ2V0VG90YWwoKS50aGVuKFxuICAgKiAgIHRvdGFsID0+IGNvbnNvbGUubG9nKCdUb3RhbDogJyArIHRvdGFsKVxuICAgKiApO1xuICAgKlxuICAgKiAvLyBFeHBlY3RlZDpcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMCdcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMSdcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMidcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMydcbiAgICogLy8gJ1RvdGFsOiA2J1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIG5leHQgYSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIG9ic2VydmFibGVcbiAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCBlaXRoZXIgcmVzb2x2ZXMgb24gb2JzZXJ2YWJsZSBjb21wbGV0aW9uIG9yXG4gICAqICByZWplY3RzIHdpdGggdGhlIGhhbmRsZWQgZXJyb3JcbiAgICovXG4gIGZvckVhY2gobmV4dDogKHZhbHVlOiBUKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQHBhcmFtIG5leHQgYSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIG9ic2VydmFibGVcbiAgICogQHBhcmFtIHByb21pc2VDdG9yIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gdXNlZCB0byBpbnN0YW50aWF0ZSB0aGUgUHJvbWlzZVxuICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB0aGF0IGVpdGhlciByZXNvbHZlcyBvbiBvYnNlcnZhYmxlIGNvbXBsZXRpb24gb3JcbiAgICogIHJlamVjdHMgd2l0aCB0aGUgaGFuZGxlZCBlcnJvclxuICAgKiBAZGVwcmVjYXRlZCBQYXNzaW5nIGEgUHJvbWlzZSBjb25zdHJ1Y3RvciB3aWxsIG5vIGxvbmdlciBiZSBhdmFpbGFibGVcbiAgICogaW4gdXBjb21pbmcgdmVyc2lvbnMgb2YgUnhKUy4gVGhpcyBpcyBiZWNhdXNlIGl0IGFkZHMgd2VpZ2h0IHRvIHRoZSBsaWJyYXJ5LCBmb3IgdmVyeVxuICAgKiBsaXR0bGUgYmVuZWZpdC4gSWYgeW91IG5lZWQgdGhpcyBmdW5jdGlvbmFsaXR5LCBpdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSBlaXRoZXJcbiAgICogcG9seWZpbGwgUHJvbWlzZSwgb3IgeW91IGNyZWF0ZSBhbiBhZGFwdGVyIHRvIGNvbnZlcnQgdGhlIHJldHVybmVkIG5hdGl2ZSBwcm9taXNlXG4gICAqIHRvIHdoYXRldmVyIHByb21pc2UgaW1wbGVtZW50YXRpb24geW91IHdhbnRlZC4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgZm9yRWFjaChuZXh0OiAodmFsdWU6IFQpID0+IHZvaWQsIHByb21pc2VDdG9yOiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTx2b2lkPjtcblxuICBmb3JFYWNoKG5leHQ6ICh2YWx1ZTogVCkgPT4gdm9pZCwgcHJvbWlzZUN0b3I/OiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG5cbiAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBuZXcgU2FmZVN1YnNjcmliZXI8VD4oe1xuICAgICAgICBuZXh0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgIGNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9KSBhcyBQcm9taXNlPHZvaWQ+O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2U/LnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBpbnRlcm9wIHBvaW50IGRlZmluZWQgYnkgdGhlIGVzNy1vYnNlcnZhYmxlIHNwZWMgaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtb2JzZXJ2YWJsZVxuICAgKiBAbWV0aG9kIFN5bWJvbC5vYnNlcnZhYmxlXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IHRoaXMgaW5zdGFuY2Ugb2YgdGhlIG9ic2VydmFibGVcbiAgICovXG4gIFtTeW1ib2xfb2JzZXJ2YWJsZV0oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbiAgcGlwZSgpOiBPYnNlcnZhYmxlPFQ+O1xuICBwaXBlPEE+KG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPik6IE9ic2VydmFibGU8QT47XG4gIHBpcGU8QSwgQj4ob3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LCBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4pOiBPYnNlcnZhYmxlPEI+O1xuICBwaXBlPEEsIEIsIEM+KG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPiwgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LCBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4pOiBPYnNlcnZhYmxlPEM+O1xuICBwaXBlPEEsIEIsIEMsIEQ+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPlxuICApOiBPYnNlcnZhYmxlPEQ+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEU+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT5cbiAgKTogT2JzZXJ2YWJsZTxFPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPlxuICApOiBPYnNlcnZhYmxlPEY+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEc+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPlxuICApOiBPYnNlcnZhYmxlPEc+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPixcbiAgICBvcDg6IE9wZXJhdG9yRnVuY3Rpb248RywgSD5cbiAgKTogT2JzZXJ2YWJsZTxIPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz4sXG4gICAgb3A4OiBPcGVyYXRvckZ1bmN0aW9uPEcsIEg+LFxuICAgIG9wOTogT3BlcmF0b3JGdW5jdGlvbjxILCBJPlxuICApOiBPYnNlcnZhYmxlPEk+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPixcbiAgICBvcDg6IE9wZXJhdG9yRnVuY3Rpb248RywgSD4sXG4gICAgb3A5OiBPcGVyYXRvckZ1bmN0aW9uPEgsIEk+LFxuICAgIC4uLm9wZXJhdGlvbnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W11cbiAgKTogT2JzZXJ2YWJsZTx1bmtub3duPjtcbiAgLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuICAvKipcbiAgICogVXNlZCB0byBzdGl0Y2ggdG9nZXRoZXIgZnVuY3Rpb25hbCBvcGVyYXRvcnMgaW50byBhIGNoYWluLlxuICAgKiBAbWV0aG9kIHBpcGVcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gdGhlIE9ic2VydmFibGUgcmVzdWx0IG9mIGFsbCBvZiB0aGUgb3BlcmF0b3JzIGhhdmluZ1xuICAgKiBiZWVuIGNhbGxlZCBpbiB0aGUgb3JkZXIgdGhleSB3ZXJlIHBhc3NlZCBpbi5cbiAgICpcbiAgICogIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBpbXBvcnQgeyBpbnRlcnZhbCwgZmlsdGVyLCBtYXAsIHNjYW4gfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogaW50ZXJ2YWwoMTAwMClcbiAgICogICAucGlwZShcbiAgICogICAgIGZpbHRlcih4ID0+IHggJSAyID09PSAwKSxcbiAgICogICAgIG1hcCh4ID0+IHggKyB4KSxcbiAgICogICAgIHNjYW4oKGFjYywgeCkgPT4gYWNjICsgeClcbiAgICogICApXG4gICAqICAgLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICogYGBgXG4gICAqL1xuICBwaXBlKC4uLm9wZXJhdGlvbnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBwaXBlRnJvbUFycmF5KG9wZXJhdGlvbnMpKHRoaXMpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4gIC8qKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHtAbGluayBmaXJzdFZhbHVlRnJvbX0gYW5kIHtAbGluayBsYXN0VmFsdWVGcm9tfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy90by1wcm9taXNlICovXG4gIHRvUHJvbWlzZSgpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+O1xuICAvKiogQGRlcHJlY2F0ZWQgUmVwbGFjZWQgd2l0aCB7QGxpbmsgZmlyc3RWYWx1ZUZyb219IGFuZCB7QGxpbmsgbGFzdFZhbHVlRnJvbX0uIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvdG8tcHJvbWlzZSAqL1xuICB0b1Byb21pc2UoUHJvbWlzZUN0b3I6IHR5cGVvZiBQcm9taXNlKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgLyoqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2UgKi9cbiAgdG9Qcm9taXNlKFByb21pc2VDdG9yOiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoaXMgT2JzZXJ2YWJsZSBhbmQgZ2V0IGEgUHJvbWlzZSByZXNvbHZpbmcgb25cbiAgICogYGNvbXBsZXRlYCB3aXRoIHRoZSBsYXN0IGVtaXNzaW9uIChpZiBhbnkpLlxuICAgKlxuICAgKiAqKldBUk5JTkcqKjogT25seSB1c2UgdGhpcyB3aXRoIG9ic2VydmFibGVzIHlvdSAqa25vdyogd2lsbCBjb21wbGV0ZS4gSWYgdGhlIHNvdXJjZVxuICAgKiBvYnNlcnZhYmxlIGRvZXMgbm90IGNvbXBsZXRlLCB5b3Ugd2lsbCBlbmQgdXAgd2l0aCBhIHByb21pc2UgdGhhdCBpcyBodW5nIHVwLCBhbmRcbiAgICogcG90ZW50aWFsbHkgYWxsIG9mIHRoZSBzdGF0ZSBvZiBhbiBhc3luYyBmdW5jdGlvbiBoYW5naW5nIG91dCBpbiBtZW1vcnkuIFRvIGF2b2lkXG4gICAqIHRoaXMgc2l0dWF0aW9uLCBsb29rIGludG8gYWRkaW5nIHNvbWV0aGluZyBsaWtlIHtAbGluayB0aW1lb3V0fSwge0BsaW5rIHRha2V9LFxuICAgKiB7QGxpbmsgdGFrZVdoaWxlfSwgb3Ige0BsaW5rIHRha2VVbnRpbH0gYW1vbmdzdCBvdGhlcnMuXG4gICAqXG4gICAqIEBtZXRob2QgdG9Qcm9taXNlXG4gICAqIEBwYXJhbSBbcHJvbWlzZUN0b3JdIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gdXNlZCB0byBpbnN0YW50aWF0ZVxuICAgKiB0aGUgUHJvbWlzZVxuICAgKiBAcmV0dXJuIEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxhc3QgdmFsdWUgZW1pdCwgb3JcbiAgICogcmVqZWN0cyBvbiBhbiBlcnJvci4gSWYgdGhlcmUgd2VyZSBubyBlbWlzc2lvbnMsIFByb21pc2VcbiAgICogcmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQuXG4gICAqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2VcbiAgICovXG4gIHRvUHJvbWlzZShwcm9taXNlQ3Rvcj86IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+IHtcbiAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcblxuICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHZhbHVlOiBUIHwgdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zdWJzY3JpYmUoXG4gICAgICAgICh4OiBUKSA9PiAodmFsdWUgPSB4KSxcbiAgICAgICAgKGVycjogYW55KSA9PiByZWplY3QoZXJyKSxcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSh2YWx1ZSlcbiAgICAgICk7XG4gICAgfSkgYXMgUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgfVxufVxuXG4vKipcbiAqIERlY2lkZXMgYmV0d2VlbiBhIHBhc3NlZCBwcm9taXNlIGNvbnN0cnVjdG9yIGZyb20gY29uc3VtaW5nIGNvZGUsXG4gKiBBIGRlZmF1bHQgY29uZmlndXJlZCBwcm9taXNlIGNvbnN0cnVjdG9yLCBhbmQgdGhlIG5hdGl2ZSBwcm9taXNlXG4gKiBjb25zdHJ1Y3RvciBhbmQgcmV0dXJucyBpdC4gSWYgbm90aGluZyBjYW4gYmUgZm91bmQsIGl0IHdpbGwgdGhyb3dcbiAqIGFuIGVycm9yLlxuICogQHBhcmFtIHByb21pc2VDdG9yIFRoZSBvcHRpb25hbCBwcm9taXNlIGNvbnN0cnVjdG9yIHRvIHBhc3NlZCBieSBjb25zdW1pbmcgY29kZVxuICovXG5mdW5jdGlvbiBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3RvcjogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSB8IHVuZGVmaW5lZCkge1xuICByZXR1cm4gcHJvbWlzZUN0b3IgPz8gY29uZmlnLlByb21pc2UgPz8gUHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gaXNPYnNlcnZlcjxUPih2YWx1ZTogYW55KTogdmFsdWUgaXMgT2JzZXJ2ZXI8VD4ge1xuICByZXR1cm4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5uZXh0KSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmVycm9yKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmNvbXBsZXRlKTtcbn1cblxuZnVuY3Rpb24gaXNTdWJzY3JpYmVyPFQ+KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdWJzY3JpYmVyPFQ+IHtcbiAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHx8IChpc09ic2VydmVyKHZhbHVlKSAmJiBpc1N1YnNjcmlwdGlvbih2YWx1ZSkpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuLyoqXG4gKiBVc2VkIHRvIGRldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYW4gT2JzZXJ2YWJsZSB3aXRoIGEgbGlmdCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpZnQoc291cmNlOiBhbnkpOiBzb3VyY2UgaXMgeyBsaWZ0OiBJbnN0YW5jZVR5cGU8dHlwZW9mIE9ic2VydmFibGU+WydsaWZ0J10gfSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKHNvdXJjZT8ubGlmdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBgT3BlcmF0b3JGdW5jdGlvbmAuIFVzZWQgdG8gZGVmaW5lIG9wZXJhdG9ycyB0aHJvdWdob3V0IHRoZSBsaWJyYXJ5IGluIGEgY29uY2lzZSB3YXkuXG4gKiBAcGFyYW0gaW5pdCBUaGUgbG9naWMgdG8gY29ubmVjdCB0aGUgbGlmdGVkU291cmNlIHRvIHRoZSBzdWJzY3JpYmVyIGF0IHRoZSBtb21lbnQgb2Ygc3Vic2NyaXB0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3BlcmF0ZTxULCBSPihcbiAgaW5pdDogKGxpZnRlZFNvdXJjZTogT2JzZXJ2YWJsZTxUPiwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxSPikgPT4gKCgpID0+IHZvaWQpIHwgdm9pZFxuKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPiB7XG4gIHJldHVybiAoc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiB7XG4gICAgaWYgKGhhc0xpZnQoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KGZ1bmN0aW9uICh0aGlzOiBTdWJzY3JpYmVyPFI+LCBsaWZ0ZWRTb3VyY2U6IE9ic2VydmFibGU8VD4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gaW5pdChsaWZ0ZWRTb3VyY2UsIHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aGlzLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmFibGUgdG8gbGlmdCB1bmtub3duIE9ic2VydmFibGUgdHlwZScpO1xuICB9O1xufVxuIiwgImltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGFuIGBPcGVyYXRvclN1YnNjcmliZXJgLlxuICogQHBhcmFtIGRlc3RpbmF0aW9uIFRoZSBkb3duc3RyZWFtIHN1YnNjcmliZXIuXG4gKiBAcGFyYW0gb25OZXh0IEhhbmRsZXMgbmV4dCB2YWx1ZXMsIG9ubHkgY2FsbGVkIGlmIHRoaXMgc3Vic2NyaWJlciBpcyBub3Qgc3RvcHBlZCBvciBjbG9zZWQuIEFueVxuICogZXJyb3IgdGhhdCBvY2N1cnMgaW4gdGhpcyBmdW5jdGlvbiBpcyBjYXVnaHQgYW5kIHNlbnQgdG8gdGhlIGBlcnJvcmAgbWV0aG9kIG9mIHRoaXMgc3Vic2NyaWJlci5cbiAqIEBwYXJhbSBvbkVycm9yIEhhbmRsZXMgZXJyb3JzIGZyb20gdGhlIHN1YnNjcmlwdGlvbiwgYW55IGVycm9ycyB0aGF0IG9jY3VyIGluIHRoaXMgaGFuZGxlciBhcmUgY2F1Z2h0XG4gKiBhbmQgc2VuZCB0byB0aGUgYGRlc3RpbmF0aW9uYCBlcnJvciBoYW5kbGVyLlxuICogQHBhcmFtIG9uQ29tcGxldGUgSGFuZGxlcyBjb21wbGV0aW9uIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBzdWJzY3JpcHRpb24uIEFueSBlcnJvcnMgdGhhdCBvY2N1ciBpblxuICogdGhpcyBoYW5kbGVyIGFyZSBzZW50IHRvIHRoZSBgZGVzdGluYXRpb25gIGVycm9yIGhhbmRsZXIuXG4gKiBAcGFyYW0gb25GaW5hbGl6ZSBBZGRpdGlvbmFsIHRlYXJkb3duIGxvZ2ljIGhlcmUuIFRoaXMgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbiB0ZWFyZG93biBpZiB0aGVcbiAqIHN1YnNjcmliZXIgaXRzZWxmIGlzIG5vdCBhbHJlYWR5IGNsb3NlZC4gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYWxsIG90aGVyIHRlYXJkb3duIGxvZ2ljIGlzIGV4ZWN1dGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyPFQ+KFxuICBkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxhbnk+LFxuICBvbk5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG4gIG9uQ29tcGxldGU/OiAoKSA9PiB2b2lkLFxuICBvbkVycm9yPzogKGVycjogYW55KSA9PiB2b2lkLFxuICBvbkZpbmFsaXplPzogKCkgPT4gdm9pZFxuKTogU3Vic2NyaWJlcjxUPiB7XG4gIHJldHVybiBuZXcgT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUpO1xufVxuXG4vKipcbiAqIEEgZ2VuZXJpYyBoZWxwZXIgZm9yIGFsbG93aW5nIG9wZXJhdG9ycyB0byBiZSBjcmVhdGVkIHdpdGggYSBTdWJzY3JpYmVyIGFuZFxuICogdXNlIGNsb3N1cmVzIHRvIGNhcHR1cmUgbmVjZXNzYXJ5IHN0YXRlIGZyb20gdGhlIG9wZXJhdG9yIGZ1bmN0aW9uIGl0c2VsZi5cbiAqL1xuZXhwb3J0IGNsYXNzIE9wZXJhdG9yU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhbiBgT3BlcmF0b3JTdWJzY3JpYmVyYC5cbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uIFRoZSBkb3duc3RyZWFtIHN1YnNjcmliZXIuXG4gICAqIEBwYXJhbSBvbk5leHQgSGFuZGxlcyBuZXh0IHZhbHVlcywgb25seSBjYWxsZWQgaWYgdGhpcyBzdWJzY3JpYmVyIGlzIG5vdCBzdG9wcGVkIG9yIGNsb3NlZC4gQW55XG4gICAqIGVycm9yIHRoYXQgb2NjdXJzIGluIHRoaXMgZnVuY3Rpb24gaXMgY2F1Z2h0IGFuZCBzZW50IHRvIHRoZSBgZXJyb3JgIG1ldGhvZCBvZiB0aGlzIHN1YnNjcmliZXIuXG4gICAqIEBwYXJhbSBvbkVycm9yIEhhbmRsZXMgZXJyb3JzIGZyb20gdGhlIHN1YnNjcmlwdGlvbiwgYW55IGVycm9ycyB0aGF0IG9jY3VyIGluIHRoaXMgaGFuZGxlciBhcmUgY2F1Z2h0XG4gICAqIGFuZCBzZW5kIHRvIHRoZSBgZGVzdGluYXRpb25gIGVycm9yIGhhbmRsZXIuXG4gICAqIEBwYXJhbSBvbkNvbXBsZXRlIEhhbmRsZXMgY29tcGxldGlvbiBub3RpZmljYXRpb24gZnJvbSB0aGUgc3Vic2NyaXB0aW9uLiBBbnkgZXJyb3JzIHRoYXQgb2NjdXIgaW5cbiAgICogdGhpcyBoYW5kbGVyIGFyZSBzZW50IHRvIHRoZSBgZGVzdGluYXRpb25gIGVycm9yIGhhbmRsZXIuXG4gICAqIEBwYXJhbSBvbkZpbmFsaXplIEFkZGl0aW9uYWwgZmluYWxpemF0aW9uIGxvZ2ljIGhlcmUuIFRoaXMgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbiBmaW5hbGl6YXRpb24gaWYgdGhlXG4gICAqIHN1YnNjcmliZXIgaXRzZWxmIGlzIG5vdCBhbHJlYWR5IGNsb3NlZC4gVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgYWxsIG90aGVyIGZpbmFsaXphdGlvbiBsb2dpYyBpcyBleGVjdXRlZC5cbiAgICogQHBhcmFtIHNob3VsZFVuc3Vic2NyaWJlIEFuIG9wdGlvbmFsIGNoZWNrIHRvIHNlZSBpZiBhbiB1bnN1YnNjcmliZSBjYWxsIHNob3VsZCB0cnVseSB1bnN1YnNjcmliZS5cbiAgICogTk9URTogVGhpcyBjdXJyZW50bHkgKipPTkxZKiogZXhpc3RzIHRvIHN1cHBvcnQgdGhlIHN0cmFuZ2UgYmVoYXZpb3Igb2Yge0BsaW5rIGdyb3VwQnl9LCB3aGVyZSB1bnN1YnNjcmlwdGlvblxuICAgKiB0byB0aGUgcmVzdWx0aW5nIG9ic2VydmFibGUgZG9lcyBub3QgYWN0dWFsbHkgZGlzY29ubmVjdCBmcm9tIHRoZSBzb3VyY2UgaWYgdGhlcmUgYXJlIGFjdGl2ZSBzdWJzY3JpcHRpb25zXG4gICAqIHRvIGFueSBncm91cGVkIG9ic2VydmFibGUuIChETyBOT1QgRVhQT1NFIE9SIFVTRSBFWFRFUk5BTExZISEhKVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55PixcbiAgICBvbk5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG4gICAgb25Db21wbGV0ZT86ICgpID0+IHZvaWQsXG4gICAgb25FcnJvcj86IChlcnI6IGFueSkgPT4gdm9pZCxcbiAgICBwcml2YXRlIG9uRmluYWxpemU/OiAoKSA9PiB2b2lkLFxuICAgIHByaXZhdGUgc2hvdWxkVW5zdWJzY3JpYmU/OiAoKSA9PiBib29sZWFuXG4gICkge1xuICAgIC8vIEl0J3MgaW1wb3J0YW50IC0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgLSB0aGF0IGFsbCBvZiB0aGlzIGNsYXNzJ3NcbiAgICAvLyBtZW1iZXJzIGFyZSBpbml0aWFsaXplZCBhbmQgdGhhdCB0aGV5IGFyZSBhbHdheXMgaW5pdGlhbGl6ZWQgaW4gdGhlIHNhbWVcbiAgICAvLyBvcmRlci4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGFsbCBPcGVyYXRvclN1YnNjcmliZXIgaW5zdGFuY2VzIGhhdmUgdGhlXG4gICAgLy8gc2FtZSBoaWRkZW4gY2xhc3MgaW4gVjguIFRoaXMsIGluIHR1cm4sIHdpbGwgaGVscCBrZWVwIHRoZSBudW1iZXIgb2ZcbiAgICAvLyBoaWRkZW4gY2xhc3NlcyBpbnZvbHZlZCBpbiBwcm9wZXJ0eSBhY2Nlc3NlcyB3aXRoaW4gdGhlIGJhc2UgY2xhc3MgYXNcbiAgICAvLyBsb3cgYXMgcG9zc2libGUuIElmIHRoZSBudW1iZXIgb2YgaGlkZGVuIGNsYXNzZXMgaW52b2x2ZWQgZXhjZWVkcyBmb3VyLFxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhY2Nlc3NlcyB3aWxsIGJlY29tZSBtZWdhbW9ycGhpYyBhbmQgcGVyZm9ybWFuY2UgcGVuYWx0aWVzXG4gICAgLy8gd2lsbCBiZSBpbmN1cnJlZCAtIGkuZS4gaW5saW5lIGNhY2hlcyB3b24ndCBiZSB1c2VkLlxuICAgIC8vXG4gICAgLy8gVGhlIHJlYXNvbnMgZm9yIGVuc3VyaW5nIGFsbCBpbnN0YW5jZXMgaGF2ZSB0aGUgc2FtZSBoaWRkZW4gY2xhc3MgYXJlXG4gICAgLy8gZnVydGhlciBkaXNjdXNzZWQgaW4gdGhpcyBibG9nIHBvc3QgZnJvbSBCZW5lZGlrdCBNZXVyZXI6XG4gICAgLy8gaHR0cHM6Ly9iZW5lZGlrdG1ldXJlci5kZS8yMDE4LzAzLzIzL2ltcGFjdC1vZi1wb2x5bW9ycGhpc20tb24tY29tcG9uZW50LWJhc2VkLWZyYW1ld29ya3MtbGlrZS1yZWFjdC9cbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gICAgdGhpcy5fbmV4dCA9IG9uTmV4dFxuICAgICAgPyBmdW5jdGlvbiAodGhpczogT3BlcmF0b3JTdWJzY3JpYmVyPFQ+LCB2YWx1ZTogVCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvbk5leHQodmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDogc3VwZXIuX25leHQ7XG4gICAgdGhpcy5fZXJyb3IgPSBvbkVycm9yXG4gICAgICA/IGZ1bmN0aW9uICh0aGlzOiBPcGVyYXRvclN1YnNjcmliZXI8VD4sIGVycjogYW55KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIFNlbmQgYW55IGVycm9ycyB0aGF0IG9jY3VyIGRvd24gc3RyZWFtLlxuICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGZpbmFsaXphdGlvbi5cbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDogc3VwZXIuX2Vycm9yO1xuICAgIHRoaXMuX2NvbXBsZXRlID0gb25Db21wbGV0ZVxuICAgICAgPyBmdW5jdGlvbiAodGhpczogT3BlcmF0b3JTdWJzY3JpYmVyPFQ+KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIFNlbmQgYW55IGVycm9ycyB0aGF0IG9jY3VyIGRvd24gc3RyZWFtLlxuICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGZpbmFsaXphdGlvbi5cbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDogc3VwZXIuX2NvbXBsZXRlO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLnNob3VsZFVuc3Vic2NyaWJlIHx8IHRoaXMuc2hvdWxkVW5zdWJzY3JpYmUoKSkge1xuICAgICAgY29uc3QgeyBjbG9zZWQgfSA9IHRoaXM7XG4gICAgICBzdXBlci51bnN1YnNjcmliZSgpO1xuICAgICAgLy8gRXhlY3V0ZSBhZGRpdGlvbmFsIHRlYXJkb3duIGlmIHdlIGhhdmUgYW55IGFuZCB3ZSBkaWRuJ3QgYWxyZWFkeSBkbyBzby5cbiAgICAgICFjbG9zZWQgJiYgdGhpcy5vbkZpbmFsaXplPy4oKTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RVbnN1YnNjcmliZWRFcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JDdG9yIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbC4gRG8gbm90IGNvbnN0cnVjdCBlcnJvciBpbnN0YW5jZXMuXG4gICAqIENhbm5vdCBiZSB0YWdnZWQgYXMgaW50ZXJuYWw6IGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdGl2ZVgvcnhqcy9pc3N1ZXMvNjI2OVxuICAgKi9cbiAgbmV3ICgpOiBPYmplY3RVbnN1YnNjcmliZWRFcnJvcjtcbn1cblxuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiBhbiBhY3Rpb24gaXMgaW52YWxpZCBiZWNhdXNlIHRoZSBvYmplY3QgaGFzIGJlZW5cbiAqIHVuc3Vic2NyaWJlZC5cbiAqXG4gKiBAc2VlIHtAbGluayBTdWJqZWN0fVxuICogQHNlZSB7QGxpbmsgQmVoYXZpb3JTdWJqZWN0fVxuICpcbiAqIEBjbGFzcyBPYmplY3RVbnN1YnNjcmliZWRFcnJvclxuICovXG5leHBvcnQgY29uc3QgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3I6IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yQ3RvciA9IGNyZWF0ZUVycm9yQ2xhc3MoXG4gIChfc3VwZXIpID0+XG4gICAgZnVuY3Rpb24gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsKHRoaXM6IGFueSkge1xuICAgICAgX3N1cGVyKHRoaXMpO1xuICAgICAgdGhpcy5uYW1lID0gJ09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbiAgICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICB9XG4pO1xuIiwgImltcG9ydCB7IE9wZXJhdG9yIH0gZnJvbSAnLi9PcGVyYXRvcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBFTVBUWV9TVUJTQ1JJUFRJT04gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZlciwgU3Vic2NyaXB0aW9uTGlrZSwgVGVhcmRvd25Mb2dpYyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgfSBmcm9tICcuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcblxuLyoqXG4gKiBBIFN1YmplY3QgaXMgYSBzcGVjaWFsIHR5cGUgb2YgT2JzZXJ2YWJsZSB0aGF0IGFsbG93cyB2YWx1ZXMgdG8gYmVcbiAqIG11bHRpY2FzdGVkIHRvIG1hbnkgT2JzZXJ2ZXJzLiBTdWJqZWN0cyBhcmUgbGlrZSBFdmVudEVtaXR0ZXJzLlxuICpcbiAqIEV2ZXJ5IFN1YmplY3QgaXMgYW4gT2JzZXJ2YWJsZSBhbmQgYW4gT2JzZXJ2ZXIuIFlvdSBjYW4gc3Vic2NyaWJlIHRvIGFcbiAqIFN1YmplY3QsIGFuZCB5b3UgY2FuIGNhbGwgbmV4dCB0byBmZWVkIHZhbHVlcyBhcyB3ZWxsIGFzIGVycm9yIGFuZCBjb21wbGV0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFN1YmplY3Q8VD4gZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IGltcGxlbWVudHMgU3Vic2NyaXB0aW9uTGlrZSB7XG4gIGNsb3NlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY3VycmVudE9ic2VydmVyczogT2JzZXJ2ZXI8VD5bXSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgb2JzZXJ2ZXJzOiBPYnNlcnZlcjxUPltdID0gW107XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgaXNTdG9wcGVkID0gZmFsc2U7XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgaGFzRXJyb3IgPSBmYWxzZTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICB0aHJvd25FcnJvcjogYW55ID0gbnVsbDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFwic3ViamVjdFwiIGJ5IGJhc2ljYWxseSBnbHVpbmcgYW4gb2JzZXJ2ZXIgdG8gYW4gb2JzZXJ2YWJsZS5cbiAgICpcbiAgICogQG5vY29sbGFwc2VcbiAgICogQGRlcHJlY2F0ZWQgUmVjb21tZW5kZWQgeW91IGRvIG5vdCB1c2UuIFdpbGwgYmUgcmVtb3ZlZCBhdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUuIFBsYW5zIGZvciByZXBsYWNlbWVudCBzdGlsbCB1bmRlciBkaXNjdXNzaW9uLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgPSA8VD4oZGVzdGluYXRpb246IE9ic2VydmVyPFQ+LCBzb3VyY2U6IE9ic2VydmFibGU8VD4pOiBBbm9ueW1vdXNTdWJqZWN0PFQ+ID0+IHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c1N1YmplY3Q8VD4oZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gTk9URTogVGhpcyBtdXN0IGJlIGhlcmUgdG8gb2JzY3VyZSBPYnNlcnZhYmxlJ3MgY29uc3RydWN0b3IuXG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgbGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8VCwgUj4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBjb25zdCBzdWJqZWN0ID0gbmV3IEFub255bW91c1N1YmplY3QodGhpcywgdGhpcyk7XG4gICAgc3ViamVjdC5vcGVyYXRvciA9IG9wZXJhdG9yIGFzIGFueTtcbiAgICByZXR1cm4gc3ViamVjdCBhcyBhbnk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfdGhyb3dJZkNsb3NlZCgpIHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQodmFsdWU6IFQpIHtcbiAgICBlcnJvckNvbnRleHQoKCkgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudE9ic2VydmVycykge1xuICAgICAgICAgIHRoaXMuY3VycmVudE9ic2VydmVycyA9IEFycmF5LmZyb20odGhpcy5vYnNlcnZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGVycm9yKGVycjogYW55KSB7XG4gICAgZXJyb3JDb250ZXh0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aHJvd25FcnJvciA9IGVycjtcbiAgICAgICAgY29uc3QgeyBvYnNlcnZlcnMgfSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgb2JzZXJ2ZXJzLnNoaWZ0KCkhLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgeyBvYnNlcnZlcnMgfSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgb2JzZXJ2ZXJzLnNoaWZ0KCkhLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuaXNTdG9wcGVkID0gdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIHRoaXMub2JzZXJ2ZXJzID0gdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbCE7XG4gIH1cblxuICBnZXQgb2JzZXJ2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzPy5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgIHJldHVybiBzdXBlci5fdHJ5U3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgdGhpcy5fY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyhzdWJzY3JpYmVyKTtcbiAgICByZXR1cm4gdGhpcy5faW5uZXJTdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfaW5uZXJTdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSB7XG4gICAgY29uc3QgeyBoYXNFcnJvciwgaXNTdG9wcGVkLCBvYnNlcnZlcnMgfSA9IHRoaXM7XG4gICAgaWYgKGhhc0Vycm9yIHx8IGlzU3RvcHBlZCkge1xuICAgICAgcmV0dXJuIEVNUFRZX1NVQlNDUklQVElPTjtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbDtcbiAgICBvYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgICAgYXJyUmVtb3ZlKG9ic2VydmVycywgc3Vic2NyaWJlcik7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyhzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pIHtcbiAgICBjb25zdCB7IGhhc0Vycm9yLCB0aHJvd25FcnJvciwgaXNTdG9wcGVkIH0gPSB0aGlzO1xuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgc3Vic2NyaWJlci5lcnJvcih0aHJvd25FcnJvcik7XG4gICAgfSBlbHNlIGlmIChpc1N0b3BwZWQpIHtcbiAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlIHdpdGggdGhpcyBTdWJqZWN0IGFzIHRoZSBzb3VyY2UuIFlvdSBjYW4gZG8gdGhpc1xuICAgKiB0byBjcmVhdGUgY3VzdG9tIE9ic2VydmVyLXNpZGUgbG9naWMgb2YgdGhlIFN1YmplY3QgYW5kIGNvbmNlYWwgaXQgZnJvbVxuICAgKiBjb2RlIHRoYXQgdXNlcyB0aGUgT2JzZXJ2YWJsZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gT2JzZXJ2YWJsZSB0aGF0IHRoZSBTdWJqZWN0IGNhc3RzIHRvXG4gICAqL1xuICBhc09ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZTogYW55ID0gbmV3IE9ic2VydmFibGU8VD4oKTtcbiAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgQW5vbnltb3VzU3ViamVjdDxUPlxuICovXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzU3ViamVjdDxUPiBleHRlbmRzIFN1YmplY3Q8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gICAgcHVibGljIGRlc3RpbmF0aW9uPzogT2JzZXJ2ZXI8VD4sXG4gICAgc291cmNlPzogT2JzZXJ2YWJsZTxUPlxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICB9XG5cbiAgbmV4dCh2YWx1ZTogVCkge1xuICAgIHRoaXMuZGVzdGluYXRpb24/Lm5leHQ/Lih2YWx1ZSk7XG4gIH1cblxuICBlcnJvcihlcnI6IGFueSkge1xuICAgIHRoaXMuZGVzdGluYXRpb24/LmVycm9yPy4oZXJyKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuZGVzdGluYXRpb24/LmNvbXBsZXRlPy4oKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPik6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlPy5zdWJzY3JpYmUoc3Vic2NyaWJlcikgPz8gRU1QVFlfU1VCU0NSSVBUSU9OO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJy4vU3ViamVjdCc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcblxuLyoqXG4gKiBBIHZhcmlhbnQgb2YgU3ViamVjdCB0aGF0IHJlcXVpcmVzIGFuIGluaXRpYWwgdmFsdWUgYW5kIGVtaXRzIGl0cyBjdXJyZW50XG4gKiB2YWx1ZSB3aGVuZXZlciBpdCBpcyBzdWJzY3JpYmVkIHRvLlxuICpcbiAqIEBjbGFzcyBCZWhhdmlvclN1YmplY3Q8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIEJlaGF2aW9yU3ViamVjdDxUPiBleHRlbmRzIFN1YmplY3Q8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92YWx1ZTogVCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPik6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gc3VwZXIuX3N1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAhc3Vic2NyaXB0aW9uLmNsb3NlZCAmJiBzdWJzY3JpYmVyLm5leHQodGhpcy5fdmFsdWUpO1xuICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gIH1cblxuICBnZXRWYWx1ZSgpOiBUIHtcbiAgICBjb25zdCB7IGhhc0Vycm9yLCB0aHJvd25FcnJvciwgX3ZhbHVlIH0gPSB0aGlzO1xuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgdGhyb3cgdGhyb3duRXJyb3I7XG4gICAgfVxuICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICByZXR1cm4gX3ZhbHVlO1xuICB9XG5cbiAgbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHN1cGVyLm5leHQoKHRoaXMuX3ZhbHVlID0gdmFsdWUpKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IFRpbWVzdGFtcFByb3ZpZGVyIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgRGF0ZVRpbWVzdGFtcFByb3ZpZGVyIGV4dGVuZHMgVGltZXN0YW1wUHJvdmlkZXIge1xuICBkZWxlZ2F0ZTogVGltZXN0YW1wUHJvdmlkZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBkYXRlVGltZXN0YW1wUHJvdmlkZXI6IERhdGVUaW1lc3RhbXBQcm92aWRlciA9IHtcbiAgbm93KCkge1xuICAgIC8vIFVzZSB0aGUgdmFyaWFibGUgcmF0aGVyIHRoYW4gYHRoaXNgIHNvIHRoYXQgdGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWRcbiAgICAvLyB3aXRob3V0IGJlaW5nIGJvdW5kIHRvIHRoZSBwcm92aWRlci5cbiAgICByZXR1cm4gKGRhdGVUaW1lc3RhbXBQcm92aWRlci5kZWxlZ2F0ZSB8fCBEYXRlKS5ub3coKTtcbiAgfSxcbiAgZGVsZWdhdGU6IHVuZGVmaW5lZCxcbn07XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBTY2hlZHVsZXJBY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogQSB1bml0IG9mIHdvcmsgdG8gYmUgZXhlY3V0ZWQgaW4gYSBgc2NoZWR1bGVyYC4gQW4gYWN0aW9uIGlzIHR5cGljYWxseVxuICogY3JlYXRlZCBmcm9tIHdpdGhpbiBhIHtAbGluayBTY2hlZHVsZXJMaWtlfSBhbmQgYW4gUnhKUyB1c2VyIGRvZXMgbm90IG5lZWQgdG8gY29uY2VyblxuICogdGhlbXNlbHZlcyBhYm91dCBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGFuIEFjdGlvbi5cbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgQWN0aW9uPFQ+IGV4dGVuZHMgU3Vic2NyaXB0aW9uIHtcbiAqICAgbmV3IChzY2hlZHVsZXI6IFNjaGVkdWxlciwgd29yazogKHN0YXRlPzogVCkgPT4gdm9pZCk7XG4gKiAgIHNjaGVkdWxlKHN0YXRlPzogVCwgZGVsYXk6IG51bWJlciA9IDApOiBTdWJzY3JpcHRpb247XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAY2xhc3MgQWN0aW9uPFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBBY3Rpb248VD4gZXh0ZW5kcyBTdWJzY3JpcHRpb24ge1xuICBjb25zdHJ1Y3RvcihzY2hlZHVsZXI6IFNjaGVkdWxlciwgd29yazogKHRoaXM6IFNjaGVkdWxlckFjdGlvbjxUPiwgc3RhdGU/OiBUKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICAvKipcbiAgICogU2NoZWR1bGVzIHRoaXMgYWN0aW9uIG9uIGl0cyBwYXJlbnQge0BsaW5rIFNjaGVkdWxlckxpa2V9IGZvciBleGVjdXRpb24uIE1heSBiZSBwYXNzZWRcbiAgICogc29tZSBjb250ZXh0IG9iamVjdCwgYHN0YXRlYC4gTWF5IGhhcHBlbiBhdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUsXG4gICAqIGFjY29yZGluZyB0byB0aGUgYGRlbGF5YCBwYXJhbWV0ZXIsIGlmIHNwZWNpZmllZC5cbiAgICogQHBhcmFtIHtUfSBbc3RhdGVdIFNvbWUgY29udGV4dHVhbCBkYXRhIHRoYXQgdGhlIGB3b3JrYCBmdW5jdGlvbiB1c2VzIHdoZW5cbiAgICogY2FsbGVkIGJ5IHRoZSBTY2hlZHVsZXIuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXldIFRpbWUgdG8gd2FpdCBiZWZvcmUgZXhlY3V0aW5nIHRoZSB3b3JrLCB3aGVyZSB0aGVcbiAgICogdGltZSB1bml0IGlzIGltcGxpY2l0IGFuZCBkZWZpbmVkIGJ5IHRoZSBTY2hlZHVsZXIuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBwdWJsaWMgc2NoZWR1bGUoc3RhdGU/OiBULCBkZWxheTogbnVtYmVyID0gMCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRpbWVySGFuZGxlIH0gZnJvbSAnLi90aW1lckhhbmRsZSc7XG50eXBlIFNldEludGVydmFsRnVuY3Rpb24gPSAoaGFuZGxlcjogKCkgPT4gdm9pZCwgdGltZW91dD86IG51bWJlciwgLi4uYXJnczogYW55W10pID0+IFRpbWVySGFuZGxlO1xudHlwZSBDbGVhckludGVydmFsRnVuY3Rpb24gPSAoaGFuZGxlOiBUaW1lckhhbmRsZSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIEludGVydmFsUHJvdmlkZXIge1xuICBzZXRJbnRlcnZhbDogU2V0SW50ZXJ2YWxGdW5jdGlvbjtcbiAgY2xlYXJJbnRlcnZhbDogQ2xlYXJJbnRlcnZhbEZ1bmN0aW9uO1xuICBkZWxlZ2F0ZTpcbiAgICB8IHtcbiAgICAgICAgc2V0SW50ZXJ2YWw6IFNldEludGVydmFsRnVuY3Rpb247XG4gICAgICAgIGNsZWFySW50ZXJ2YWw6IENsZWFySW50ZXJ2YWxGdW5jdGlvbjtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IGludGVydmFsUHJvdmlkZXI6IEludGVydmFsUHJvdmlkZXIgPSB7XG4gIC8vIFdoZW4gYWNjZXNzaW5nIHRoZSBkZWxlZ2F0ZSwgdXNlIHRoZSB2YXJpYWJsZSByYXRoZXIgdGhhbiBgdGhpc2Agc28gdGhhdFxuICAvLyB0aGUgZnVuY3Rpb25zIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBiZWluZyBib3VuZCB0byB0aGUgcHJvdmlkZXIuXG4gIHNldEludGVydmFsKGhhbmRsZXI6ICgpID0+IHZvaWQsIHRpbWVvdXQ/OiBudW1iZXIsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCB7IGRlbGVnYXRlIH0gPSBpbnRlcnZhbFByb3ZpZGVyO1xuICAgIGlmIChkZWxlZ2F0ZT8uc2V0SW50ZXJ2YWwpIHtcbiAgICAgIHJldHVybiBkZWxlZ2F0ZS5zZXRJbnRlcnZhbChoYW5kbGVyLCB0aW1lb3V0LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHNldEludGVydmFsKGhhbmRsZXIsIHRpbWVvdXQsIC4uLmFyZ3MpO1xuICB9LFxuICBjbGVhckludGVydmFsKGhhbmRsZSkge1xuICAgIGNvbnN0IHsgZGVsZWdhdGUgfSA9IGludGVydmFsUHJvdmlkZXI7XG4gICAgcmV0dXJuIChkZWxlZ2F0ZT8uY2xlYXJJbnRlcnZhbCB8fCBjbGVhckludGVydmFsKShoYW5kbGUgYXMgYW55KTtcbiAgfSxcbiAgZGVsZWdhdGU6IHVuZGVmaW5lZCxcbn07XG4iLCAiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgU2NoZWR1bGVyQWN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG5pbXBvcnQgeyBpbnRlcnZhbFByb3ZpZGVyIH0gZnJvbSAnLi9pbnRlcnZhbFByb3ZpZGVyJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4uL3V0aWwvYXJyUmVtb3ZlJztcbmltcG9ydCB7IFRpbWVySGFuZGxlIH0gZnJvbSAnLi90aW1lckhhbmRsZSc7XG5cbmV4cG9ydCBjbGFzcyBBc3luY0FjdGlvbjxUPiBleHRlbmRzIEFjdGlvbjxUPiB7XG4gIHB1YmxpYyBpZDogVGltZXJIYW5kbGUgfCB1bmRlZmluZWQ7XG4gIHB1YmxpYyBzdGF0ZT86IFQ7XG4gIC8vIEB0cy1pZ25vcmU6IFByb3BlcnR5IGhhcyBubyBpbml0aWFsaXplciBhbmQgaXMgbm90IGRlZmluaXRlbHkgYXNzaWduZWRcbiAgcHVibGljIGRlbGF5OiBudW1iZXI7XG4gIHByb3RlY3RlZCBwZW5kaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNjaGVkdWxlcjogQXN5bmNTY2hlZHVsZXIsIHByb3RlY3RlZCB3b3JrOiAodGhpczogU2NoZWR1bGVyQWN0aW9uPFQ+LCBzdGF0ZT86IFQpID0+IHZvaWQpIHtcbiAgICBzdXBlcihzY2hlZHVsZXIsIHdvcmspO1xuICB9XG5cbiAgcHVibGljIHNjaGVkdWxlKHN0YXRlPzogVCwgZGVsYXk6IG51bWJlciA9IDApOiBTdWJzY3JpcHRpb24ge1xuICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIHJlcGxhY2UgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aCB0aGUgbmV3IHN0YXRlLlxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIGNvbnN0IGlkID0gdGhpcy5pZDtcbiAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcblxuICAgIC8vXG4gICAgLy8gSW1wb3J0YW50IGltcGxlbWVudGF0aW9uIG5vdGU6XG4gICAgLy9cbiAgICAvLyBBY3Rpb25zIG9ubHkgZXhlY3V0ZSBvbmNlIGJ5IGRlZmF1bHQsIHVubGVzcyByZXNjaGVkdWxlZCBmcm9tIHdpdGhpbiB0aGVcbiAgICAvLyBzY2hlZHVsZWQgY2FsbGJhY2suIFRoaXMgYWxsb3dzIHVzIHRvIGltcGxlbWVudCBzaW5nbGUgYW5kIHJlcGVhdFxuICAgIC8vIGFjdGlvbnMgdmlhIHRoZSBzYW1lIGNvZGUgcGF0aCwgd2l0aG91dCBhZGRpbmcgQVBJIHN1cmZhY2UgYXJlYSwgYXMgd2VsbFxuICAgIC8vIGFzIG1pbWljIHRyYWRpdGlvbmFsIHJlY3Vyc2lvbiBidXQgYWNyb3NzIGFzeW5jaHJvbm91cyBib3VuZGFyaWVzLlxuICAgIC8vXG4gICAgLy8gSG93ZXZlciwgSlMgcnVudGltZXMgYW5kIHRpbWVycyBkaXN0aW5ndWlzaCBiZXR3ZWVuIGludGVydmFscyBhY2hpZXZlZCBieVxuICAgIC8vIHNlcmlhbCBgc2V0VGltZW91dGAgY2FsbHMgdnMuIGEgc2luZ2xlIGBzZXRJbnRlcnZhbGAgY2FsbC4gQW4gaW50ZXJ2YWwgb2ZcbiAgICAvLyBzZXJpYWwgYHNldFRpbWVvdXRgIGNhbGxzIGNhbiBiZSBpbmRpdmlkdWFsbHkgZGVsYXllZCwgd2hpY2ggZGVsYXlzXG4gICAgLy8gc2NoZWR1bGluZyB0aGUgbmV4dCBgc2V0VGltZW91dGAsIGFuZCBzbyBvbi4gYHNldEludGVydmFsYCBhdHRlbXB0cyB0b1xuICAgIC8vIGd1YXJhbnRlZSB0aGUgaW50ZXJ2YWwgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIG1vcmUgcHJlY2lzZWx5IHRvIHRoZVxuICAgIC8vIGludGVydmFsIHBlcmlvZCwgcmVnYXJkbGVzcyBvZiBsb2FkLlxuICAgIC8vXG4gICAgLy8gVGhlcmVmb3JlLCB3ZSB1c2UgYHNldEludGVydmFsYCB0byBzY2hlZHVsZSBzaW5nbGUgYW5kIHJlcGVhdCBhY3Rpb25zLlxuICAgIC8vIElmIHRoZSBhY3Rpb24gcmVzY2hlZHVsZXMgaXRzZWxmIHdpdGggdGhlIHNhbWUgZGVsYXksIHRoZSBpbnRlcnZhbCBpcyBub3RcbiAgICAvLyBjYW5jZWxlZC4gSWYgdGhlIGFjdGlvbiBkb2Vzbid0IHJlc2NoZWR1bGUsIG9yIHJlc2NoZWR1bGVzIHdpdGggYVxuICAgIC8vIGRpZmZlcmVudCBkZWxheSwgdGhlIGludGVydmFsIHdpbGwgYmUgY2FuY2VsZWQgYWZ0ZXIgc2NoZWR1bGVkIGNhbGxiYWNrXG4gICAgLy8gZXhlY3V0aW9uLlxuICAgIC8vXG4gICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIHBlbmRpbmcgZmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhpcyBhY3Rpb24gaGFzIGJlZW4gc2NoZWR1bGVkLCBvclxuICAgIC8vIGhhcyByZWN1cnNpdmVseSByZXNjaGVkdWxlZCBpdHNlbGYuXG4gICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAvLyBJZiB0aGlzIGFjdGlvbiBoYXMgYWxyZWFkeSBhbiBhc3luYyBJZCwgZG9uJ3QgcmVxdWVzdCBhIG5ldyBvbmUuXG4gICAgdGhpcy5pZCA9IHRoaXMuaWQgPz8gdGhpcy5yZXF1ZXN0QXN5bmNJZChzY2hlZHVsZXIsIHRoaXMuaWQsIGRlbGF5KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlcXVlc3RBc3luY0lkKHNjaGVkdWxlcjogQXN5bmNTY2hlZHVsZXIsIF9pZD86IFRpbWVySGFuZGxlLCBkZWxheTogbnVtYmVyID0gMCk6IFRpbWVySGFuZGxlIHtcbiAgICByZXR1cm4gaW50ZXJ2YWxQcm92aWRlci5zZXRJbnRlcnZhbChzY2hlZHVsZXIuZmx1c2guYmluZChzY2hlZHVsZXIsIHRoaXMpLCBkZWxheSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVjeWNsZUFzeW5jSWQoX3NjaGVkdWxlcjogQXN5bmNTY2hlZHVsZXIsIGlkPzogVGltZXJIYW5kbGUsIGRlbGF5OiBudW1iZXIgfCBudWxsID0gMCk6IFRpbWVySGFuZGxlIHwgdW5kZWZpbmVkIHtcbiAgICAvLyBJZiB0aGlzIGFjdGlvbiBpcyByZXNjaGVkdWxlZCB3aXRoIHRoZSBzYW1lIGRlbGF5IHRpbWUsIGRvbid0IGNsZWFyIHRoZSBpbnRlcnZhbCBpZC5cbiAgICBpZiAoZGVsYXkgIT0gbnVsbCAmJiB0aGlzLmRlbGF5ID09PSBkZWxheSAmJiB0aGlzLnBlbmRpbmcgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgaWYgdGhlIGFjdGlvbidzIGRlbGF5IHRpbWUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGN1cnJlbnQgZGVsYXksXG4gICAgLy8gb3IgdGhlIGFjdGlvbiBoYXMgYmVlbiByZXNjaGVkdWxlZCBiZWZvcmUgaXQncyBleGVjdXRlZCwgY2xlYXIgdGhlIGludGVydmFsIGlkXG4gICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgIGludGVydmFsUHJvdmlkZXIuY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbW1lZGlhdGVseSBleGVjdXRlcyB0aGlzIGFjdGlvbiBhbmQgdGhlIGB3b3JrYCBpdCBjb250YWlucy5cbiAgICogQHJldHVybiB7YW55fVxuICAgKi9cbiAgcHVibGljIGV4ZWN1dGUoc3RhdGU6IFQsIGRlbGF5OiBudW1iZXIpOiBhbnkge1xuICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignZXhlY3V0aW5nIGEgY2FuY2VsbGVkIGFjdGlvbicpO1xuICAgIH1cblxuICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgIGNvbnN0IGVycm9yID0gdGhpcy5fZXhlY3V0ZShzdGF0ZSwgZGVsYXkpO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wZW5kaW5nID09PSBmYWxzZSAmJiB0aGlzLmlkICE9IG51bGwpIHtcbiAgICAgIC8vIERlcXVldWUgaWYgdGhlIGFjdGlvbiBkaWRuJ3QgcmVzY2hlZHVsZSBpdHNlbGYuIERvbid0IGNhbGxcbiAgICAgIC8vIHVuc3Vic2NyaWJlKCksIGJlY2F1c2UgdGhlIGFjdGlvbiBjb3VsZCByZXNjaGVkdWxlIGxhdGVyLlxuICAgICAgLy8gRm9yIGV4YW1wbGU6XG4gICAgICAvLyBgYGBcbiAgICAgIC8vIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiBkb1dvcmsoY291bnRlcikge1xuICAgICAgLy8gICAvKiAuLi4gSSdtIGEgYnVzeSB3b3JrZXIgYmVlIC4uLiAqL1xuICAgICAgLy8gICB2YXIgb3JpZ2luYWxBY3Rpb24gPSB0aGlzO1xuICAgICAgLy8gICAvKiB3YWl0IDEwMG1zIGJlZm9yZSByZXNjaGVkdWxpbmcgdGhlIGFjdGlvbiAqL1xuICAgICAgLy8gICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vICAgICBvcmlnaW5hbEFjdGlvbi5zY2hlZHVsZShjb3VudGVyICsgMSk7XG4gICAgICAvLyAgIH0sIDEwMCk7XG4gICAgICAvLyB9LCAxMDAwKTtcbiAgICAgIC8vIGBgYFxuICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQodGhpcy5zY2hlZHVsZXIsIHRoaXMuaWQsIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfZXhlY3V0ZShzdGF0ZTogVCwgX2RlbGF5OiBudW1iZXIpOiBhbnkge1xuICAgIGxldCBlcnJvcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGVycm9yVmFsdWU6IGFueTtcbiAgICB0cnkge1xuICAgICAgdGhpcy53b3JrKHN0YXRlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvcmVkID0gdHJ1ZTtcbiAgICAgIC8vIEhBQ0s6IFNpbmNlIGNvZGUgZWxzZXdoZXJlIGlzIHJlbHlpbmcgb24gdGhlIFwidHJ1dGhpbmVzc1wiIG9mIHRoZVxuICAgICAgLy8gcmV0dXJuIGhlcmUsIHdlIGNhbid0IGhhdmUgaXQgcmV0dXJuIFwiXCIgb3IgMCBvciBmYWxzZS5cbiAgICAgIC8vIFRPRE86IENsZWFuIHRoaXMgdXAgd2hlbiB3ZSByZWZhY3RvciBzY2hlZHVsZXJzIG1pZC12ZXJzaW9uLTggb3Igc28uXG4gICAgICBlcnJvclZhbHVlID0gZSA/IGUgOiBuZXcgRXJyb3IoJ1NjaGVkdWxlZCBhY3Rpb24gdGhyZXcgZmFsc3kgZXJyb3InKTtcbiAgICB9XG4gICAgaWYgKGVycm9yZWQpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHJldHVybiBlcnJvclZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIGNvbnN0IHsgaWQsIHNjaGVkdWxlciB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHsgYWN0aW9ucyB9ID0gc2NoZWR1bGVyO1xuXG4gICAgICB0aGlzLndvcmsgPSB0aGlzLnN0YXRlID0gdGhpcy5zY2hlZHVsZXIgPSBudWxsITtcbiAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuXG4gICAgICBhcnJSZW1vdmUoYWN0aW9ucywgdGhpcyk7XG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBudWxsKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZWxheSA9IG51bGwhO1xuICAgICAgc3VwZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuL3NjaGVkdWxlci9BY3Rpb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSwgU2NoZWR1bGVyQWN0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBkYXRlVGltZXN0YW1wUHJvdmlkZXIgfSBmcm9tICcuL3NjaGVkdWxlci9kYXRlVGltZXN0YW1wUHJvdmlkZXInO1xuXG4vKipcbiAqIEFuIGV4ZWN1dGlvbiBjb250ZXh0IGFuZCBhIGRhdGEgc3RydWN0dXJlIHRvIG9yZGVyIHRhc2tzIGFuZCBzY2hlZHVsZSB0aGVpclxuICogZXhlY3V0aW9uLiBQcm92aWRlcyBhIG5vdGlvbiBvZiAocG90ZW50aWFsbHkgdmlydHVhbCkgdGltZSwgdGhyb3VnaCB0aGVcbiAqIGBub3coKWAgZ2V0dGVyIG1ldGhvZC5cbiAqXG4gKiBFYWNoIHVuaXQgb2Ygd29yayBpbiBhIFNjaGVkdWxlciBpcyBjYWxsZWQgYW4gYEFjdGlvbmAuXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIFNjaGVkdWxlciB7XG4gKiAgIG5vdygpOiBudW1iZXI7XG4gKiAgIHNjaGVkdWxlKHdvcmssIGRlbGF5Pywgc3RhdGU/KTogU3Vic2NyaXB0aW9uO1xuICogfVxuICogYGBgXG4gKlxuICogQGNsYXNzIFNjaGVkdWxlclxuICogQGRlcHJlY2F0ZWQgU2NoZWR1bGVyIGlzIGFuIGludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCBvZiBSeEpTLCBhbmRcbiAqIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseS4gUmF0aGVyLCBjcmVhdGUgeW91ciBvd24gY2xhc3MgYW5kIGltcGxlbWVudFxuICoge0BsaW5rIFNjaGVkdWxlckxpa2V9LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2hlZHVsZXIgaW1wbGVtZW50cyBTY2hlZHVsZXJMaWtlIHtcbiAgcHVibGljIHN0YXRpYyBub3c6ICgpID0+IG51bWJlciA9IGRhdGVUaW1lc3RhbXBQcm92aWRlci5ub3c7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzY2hlZHVsZXJBY3Rpb25DdG9yOiB0eXBlb2YgQWN0aW9uLCBub3c6ICgpID0+IG51bWJlciA9IFNjaGVkdWxlci5ub3cpIHtcbiAgICB0aGlzLm5vdyA9IG5vdztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGdldHRlciBtZXRob2QgdGhhdCByZXR1cm5zIGEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCB0aW1lXG4gICAqIChhdCB0aGUgdGltZSB0aGlzIGZ1bmN0aW9uIHdhcyBjYWxsZWQpIGFjY29yZGluZyB0byB0aGUgc2NoZWR1bGVyJ3Mgb3duXG4gICAqIGludGVybmFsIGNsb2NrLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCB0aW1lLiBNYXkgb3IgbWF5IG5vdFxuICAgKiBoYXZlIGEgcmVsYXRpb24gdG8gd2FsbC1jbG9jayB0aW1lLiBNYXkgb3IgbWF5IG5vdCByZWZlciB0byBhIHRpbWUgdW5pdFxuICAgKiAoZS5nLiBtaWxsaXNlY29uZHMpLlxuICAgKi9cbiAgcHVibGljIG5vdzogKCkgPT4gbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTY2hlZHVsZXMgYSBmdW5jdGlvbiwgYHdvcmtgLCBmb3IgZXhlY3V0aW9uLiBNYXkgaGFwcGVuIGF0IHNvbWUgcG9pbnQgaW5cbiAgICogdGhlIGZ1dHVyZSwgYWNjb3JkaW5nIHRvIHRoZSBgZGVsYXlgIHBhcmFtZXRlciwgaWYgc3BlY2lmaWVkLiBNYXkgYmUgcGFzc2VkXG4gICAqIHNvbWUgY29udGV4dCBvYmplY3QsIGBzdGF0ZWAsIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBgd29ya2AgZnVuY3Rpb24uXG4gICAqXG4gICAqIFRoZSBnaXZlbiBhcmd1bWVudHMgd2lsbCBiZSBwcm9jZXNzZWQgYW4gc3RvcmVkIGFzIGFuIEFjdGlvbiBvYmplY3QgaW4gYVxuICAgKiBxdWV1ZSBvZiBhY3Rpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKHN0YXRlOiA/VCk6ID9TdWJzY3JpcHRpb259IHdvcmsgQSBmdW5jdGlvbiByZXByZXNlbnRpbmcgYVxuICAgKiB0YXNrLCBvciBzb21lIHVuaXQgb2Ygd29yayB0byBiZSBleGVjdXRlZCBieSB0aGUgU2NoZWR1bGVyLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5XSBUaW1lIHRvIHdhaXQgYmVmb3JlIGV4ZWN1dGluZyB0aGUgd29yaywgd2hlcmUgdGhlXG4gICAqIHRpbWUgdW5pdCBpcyBpbXBsaWNpdCBhbmQgZGVmaW5lZCBieSB0aGUgU2NoZWR1bGVyIGl0c2VsZi5cbiAgICogQHBhcmFtIHtUfSBbc3RhdGVdIFNvbWUgY29udGV4dHVhbCBkYXRhIHRoYXQgdGhlIGB3b3JrYCBmdW5jdGlvbiB1c2VzIHdoZW5cbiAgICogY2FsbGVkIGJ5IHRoZSBTY2hlZHVsZXIuXG4gICAqIEByZXR1cm4ge1N1YnNjcmlwdGlvbn0gQSBzdWJzY3JpcHRpb24gaW4gb3JkZXIgdG8gYmUgYWJsZSB0byB1bnN1YnNjcmliZVxuICAgKiB0aGUgc2NoZWR1bGVkIHdvcmsuXG4gICAqL1xuICBwdWJsaWMgc2NoZWR1bGU8VD4od29yazogKHRoaXM6IFNjaGVkdWxlckFjdGlvbjxUPiwgc3RhdGU/OiBUKSA9PiB2b2lkLCBkZWxheTogbnVtYmVyID0gMCwgc3RhdGU/OiBUKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuc2NoZWR1bGVyQWN0aW9uQ3RvcjxUPih0aGlzLCB3b3JrKS5zY2hlZHVsZShzdGF0ZSwgZGVsYXkpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IEFzeW5jQWN0aW9uIH0gZnJvbSAnLi9Bc3luY0FjdGlvbic7XG5pbXBvcnQgeyBUaW1lckhhbmRsZSB9IGZyb20gJy4vdGltZXJIYW5kbGUnO1xuXG5leHBvcnQgY2xhc3MgQXN5bmNTY2hlZHVsZXIgZXh0ZW5kcyBTY2hlZHVsZXIge1xuICBwdWJsaWMgYWN0aW9uczogQXJyYXk8QXN5bmNBY3Rpb248YW55Pj4gPSBbXTtcbiAgLyoqXG4gICAqIEEgZmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBTY2hlZHVsZXIgaXMgY3VycmVudGx5IGV4ZWN1dGluZyBhIGJhdGNoIG9mXG4gICAqIHF1ZXVlZCBhY3Rpb25zLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogQW4gaW50ZXJuYWwgSUQgdXNlZCB0byB0cmFjayB0aGUgbGF0ZXN0IGFzeW5jaHJvbm91cyB0YXNrIHN1Y2ggYXMgdGhvc2VcbiAgICogY29taW5nIGZyb20gYHNldFRpbWVvdXRgLCBgc2V0SW50ZXJ2YWxgLCBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCwgYW5kXG4gICAqIG90aGVycy5cbiAgICogQHR5cGUge2FueX1cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX3NjaGVkdWxlZDogVGltZXJIYW5kbGUgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoU2NoZWR1bGVyQWN0aW9uOiB0eXBlb2YgQWN0aW9uLCBub3c6ICgpID0+IG51bWJlciA9IFNjaGVkdWxlci5ub3cpIHtcbiAgICBzdXBlcihTY2hlZHVsZXJBY3Rpb24sIG5vdyk7XG4gIH1cblxuICBwdWJsaWMgZmx1c2goYWN0aW9uOiBBc3luY0FjdGlvbjxhbnk+KTogdm9pZCB7XG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGVycm9yOiBhbnk7XG4gICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcblxuICAgIGRvIHtcbiAgICAgIGlmICgoZXJyb3IgPSBhY3Rpb24uZXhlY3V0ZShhY3Rpb24uc3RhdGUsIGFjdGlvbi5kZWxheSkpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkhKSk7IC8vIGV4aGF1c3QgdGhlIHNjaGVkdWxlciBxdWV1ZVxuXG4gICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHdoaWxlICgoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpISkpIHtcbiAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBBc3luY0FjdGlvbiB9IGZyb20gJy4vQXN5bmNBY3Rpb24nO1xuaW1wb3J0IHsgQXN5bmNTY2hlZHVsZXIgfSBmcm9tICcuL0FzeW5jU2NoZWR1bGVyJztcblxuLyoqXG4gKlxuICogQXN5bmMgU2NoZWR1bGVyXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPlNjaGVkdWxlIHRhc2sgYXMgaWYgeW91IHVzZWQgc2V0VGltZW91dCh0YXNrLCBkdXJhdGlvbik8L3NwYW4+XG4gKlxuICogYGFzeW5jYCBzY2hlZHVsZXIgc2NoZWR1bGVzIHRhc2tzIGFzeW5jaHJvbm91c2x5LCBieSBwdXR0aW5nIHRoZW0gb24gdGhlIEphdmFTY3JpcHRcbiAqIGV2ZW50IGxvb3AgcXVldWUuIEl0IGlzIGJlc3QgdXNlZCB0byBkZWxheSB0YXNrcyBpbiB0aW1lIG9yIHRvIHNjaGVkdWxlIHRhc2tzIHJlcGVhdGluZ1xuICogaW4gaW50ZXJ2YWxzLlxuICpcbiAqIElmIHlvdSBqdXN0IHdhbnQgdG8gXCJkZWZlclwiIHRhc2ssIHRoYXQgaXMgdG8gcGVyZm9ybSBpdCByaWdodCBhZnRlciBjdXJyZW50bHlcbiAqIGV4ZWN1dGluZyBzeW5jaHJvbm91cyBjb2RlIGVuZHMgKGNvbW1vbmx5IGFjaGlldmVkIGJ5IGBzZXRUaW1lb3V0KGRlZmVycmVkVGFzaywgMClgKSxcbiAqIGJldHRlciBjaG9pY2Ugd2lsbCBiZSB0aGUge0BsaW5rIGFzYXBTY2hlZHVsZXJ9IHNjaGVkdWxlci5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICogVXNlIGFzeW5jIHNjaGVkdWxlciB0byBkZWxheSB0YXNrXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgYXN5bmNTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCB0YXNrID0gKCkgPT4gY29uc29sZS5sb2coJ2l0IHdvcmtzIScpO1xuICpcbiAqIGFzeW5jU2NoZWR1bGVyLnNjaGVkdWxlKHRhc2ssIDIwMDApO1xuICpcbiAqIC8vIEFmdGVyIDIgc2Vjb25kcyBsb2dzOlxuICogLy8gXCJpdCB3b3JrcyFcIlxuICogYGBgXG4gKlxuICogVXNlIGFzeW5jIHNjaGVkdWxlciB0byByZXBlYXQgdGFzayBpbiBpbnRlcnZhbHNcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBhc3luY1NjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGZ1bmN0aW9uIHRhc2soc3RhdGUpIHtcbiAqICAgY29uc29sZS5sb2coc3RhdGUpO1xuICogICB0aGlzLnNjaGVkdWxlKHN0YXRlICsgMSwgMTAwMCk7IC8vIGB0aGlzYCByZWZlcmVuY2VzIGN1cnJlbnRseSBleGVjdXRpbmcgQWN0aW9uLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoaWNoIHdlIHJlc2NoZWR1bGUgd2l0aCBuZXcgc3RhdGUgYW5kIGRlbGF5XG4gKiB9XG4gKlxuICogYXN5bmNTY2hlZHVsZXIuc2NoZWR1bGUodGFzaywgMzAwMCwgMCk7XG4gKlxuICogLy8gTG9nczpcbiAqIC8vIDAgYWZ0ZXIgM3NcbiAqIC8vIDEgYWZ0ZXIgNHNcbiAqIC8vIDIgYWZ0ZXIgNXNcbiAqIC8vIDMgYWZ0ZXIgNnNcbiAqIGBgYFxuICovXG5cbmV4cG9ydCBjb25zdCBhc3luY1NjaGVkdWxlciA9IG5ldyBBc3luY1NjaGVkdWxlcihBc3luY0FjdGlvbik7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgUmVuYW1lZCB0byB7QGxpbmsgYXN5bmNTY2hlZHVsZXJ9LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gKi9cbmV4cG9ydCBjb25zdCBhc3luYyA9IGFzeW5jU2NoZWR1bGVyO1xuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogQSBzaW1wbGUgT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG5vIGl0ZW1zIHRvIHRoZSBPYnNlcnZlciBhbmQgaW1tZWRpYXRlbHlcbiAqIGVtaXRzIGEgY29tcGxldGUgbm90aWZpY2F0aW9uLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5KdXN0IGVtaXRzICdjb21wbGV0ZScsIGFuZCBub3RoaW5nIGVsc2UuPC9zcGFuPlxuICpcbiAqICFbXShlbXB0eS5wbmcpXG4gKlxuICogQSBzaW1wbGUgT2JzZXJ2YWJsZSB0aGF0IG9ubHkgZW1pdHMgdGhlIGNvbXBsZXRlIG5vdGlmaWNhdGlvbi4gSXQgY2FuIGJlIHVzZWRcbiAqIGZvciBjb21wb3Npbmcgd2l0aCBvdGhlciBPYnNlcnZhYmxlcywgc3VjaCBhcyBpbiBhIHtAbGluayBtZXJnZU1hcH0uXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBMb2cgY29tcGxldGUgbm90aWZpY2F0aW9uXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEVNUFRZIH0gZnJvbSAncnhqcyc7XG4gKlxuICogRU1QVFkuc3Vic2NyaWJlKHtcbiAqICAgbmV4dDogKCkgPT4gY29uc29sZS5sb2coJ05leHQnKSxcbiAqICAgY29tcGxldGU6ICgpID0+IGNvbnNvbGUubG9nKCdDb21wbGV0ZSEnKVxuICogfSk7XG4gKlxuICogLy8gT3V0cHV0c1xuICogLy8gQ29tcGxldGUhXG4gKiBgYGBcbiAqXG4gKiBFbWl0IHRoZSBudW1iZXIgNywgdGhlbiBjb21wbGV0ZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBFTVBUWSwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgcmVzdWx0ID0gRU1QVFkucGlwZShzdGFydFdpdGgoNykpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBPdXRwdXRzXG4gKiAvLyA3XG4gKiBgYGBcbiAqXG4gKiBNYXAgYW5kIGZsYXR0ZW4gb25seSBvZGQgbnVtYmVycyB0byB0aGUgc2VxdWVuY2UgYCdhJ2AsIGAnYidgLCBgJ2MnYFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgbWVyZ2VNYXAsIG9mLCBFTVBUWSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGludGVydmFsJCA9IGludGVydmFsKDEwMDApO1xuICogY29uc3QgcmVzdWx0ID0gaW50ZXJ2YWwkLnBpcGUoXG4gKiAgIG1lcmdlTWFwKHggPT4geCAlIDIgPT09IDEgPyBvZignYScsICdiJywgJ2MnKSA6IEVNUFRZKSxcbiAqICk7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIFJlc3VsdHMgaW4gdGhlIGZvbGxvd2luZyB0byB0aGUgY29uc29sZTpcbiAqIC8vIHggaXMgZXF1YWwgdG8gdGhlIGNvdW50IG9uIHRoZSBpbnRlcnZhbCwgZS5nLiAoMCwgMSwgMiwgMywgLi4uKVxuICogLy8geCB3aWxsIG9jY3VyIGV2ZXJ5IDEwMDBtc1xuICogLy8gaWYgeCAlIDIgaXMgZXF1YWwgdG8gMSwgcHJpbnQgYSwgYiwgYyAoZWFjaCBvbiBpdHMgb3duKVxuICogLy8gaWYgeCAlIDIgaXMgbm90IGVxdWFsIHRvIDEsIG5vdGhpbmcgd2lsbCBiZSBvdXRwdXRcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIE9ic2VydmFibGV9XG4gKiBAc2VlIHtAbGluayBORVZFUn1cbiAqIEBzZWUge0BsaW5rIG9mfVxuICogQHNlZSB7QGxpbmsgdGhyb3dFcnJvcn1cbiAqL1xuZXhwb3J0IGNvbnN0IEVNUFRZID0gbmV3IE9ic2VydmFibGU8bmV2ZXI+KChzdWJzY3JpYmVyKSA9PiBzdWJzY3JpYmVyLmNvbXBsZXRlKCkpO1xuXG4vKipcbiAqIEBwYXJhbSBzY2hlZHVsZXIgQSB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gdG8gdXNlIGZvciBzY2hlZHVsaW5nXG4gKiB0aGUgZW1pc3Npb24gb2YgdGhlIGNvbXBsZXRlIG5vdGlmaWNhdGlvbi5cbiAqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGggdGhlIHtAbGluayBFTVBUWX0gY29uc3RhbnQgb3Ige0BsaW5rIHNjaGVkdWxlZH0gKGUuZy4gYHNjaGVkdWxlZChbXSwgc2NoZWR1bGVyKWApLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eShzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBzY2hlZHVsZXIgPyBlbXB0eVNjaGVkdWxlZChzY2hlZHVsZXIpIDogRU1QVFk7XG59XG5cbmZ1bmN0aW9uIGVtcHR5U2NoZWR1bGVkKHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8bmV2ZXI+KChzdWJzY3JpYmVyKSA9PiBzY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4gc3Vic2NyaWJlci5jb21wbGV0ZSgpKSk7XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTY2hlZHVsZXIodmFsdWU6IGFueSk6IHZhbHVlIGlzIFNjaGVkdWxlckxpa2Uge1xuICByZXR1cm4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5zY2hlZHVsZSk7XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuL2lzU2NoZWR1bGVyJztcblxuZnVuY3Rpb24gbGFzdDxUPihhcnI6IFRbXSk6IFQgfCB1bmRlZmluZWQge1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFJlc3VsdFNlbGVjdG9yKGFyZ3M6IGFueVtdKTogKCguLi5hcmdzOiB1bmtub3duW10pID0+IHVua25vd24pIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24obGFzdChhcmdzKSkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wU2NoZWR1bGVyKGFyZ3M6IGFueVtdKTogU2NoZWR1bGVyTGlrZSB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBpc1NjaGVkdWxlcihsYXN0KGFyZ3MpKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BOdW1iZXIoYXJnczogYW55W10sIGRlZmF1bHRWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiBsYXN0KGFyZ3MpID09PSAnbnVtYmVyJyA/IGFyZ3MucG9wKCkhIDogZGVmYXVsdFZhbHVlO1xufVxuIiwgImV4cG9ydCBjb25zdCBpc0FycmF5TGlrZSA9ICg8VD4oeDogYW55KTogeCBpcyBBcnJheUxpa2U8VD4gPT4geCAmJiB0eXBlb2YgeC5sZW5ndGggPT09ICdudW1iZXInICYmIHR5cGVvZiB4ICE9PSAnZnVuY3Rpb24nKTsiLCAiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gXCIuL2lzRnVuY3Rpb25cIjtcblxuLyoqXG4gKiBUZXN0cyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBcInRoZW5uYWJsZVwiLlxuICogQHBhcmFtIHZhbHVlIHRoZSBvYmplY3QgdG8gdGVzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBQcm9taXNlTGlrZTxhbnk+IHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24odmFsdWU/LnRoZW4pO1xufVxuIiwgImltcG9ydCB7IEludGVyb3BPYnNlcnZhYmxlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG4vKiogSWRlbnRpZmllcyBhbiBpbnB1dCBhcyBiZWluZyBPYnNlcnZhYmxlIChidXQgbm90IG5lY2Vzc2FyeSBhbiBSeCBPYnNlcnZhYmxlKSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQ6IGFueSk6IGlucHV0IGlzIEludGVyb3BPYnNlcnZhYmxlPGFueT4ge1xuICByZXR1cm4gaXNGdW5jdGlvbihpbnB1dFtTeW1ib2xfb2JzZXJ2YWJsZV0pO1xufVxuIiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3luY0l0ZXJhYmxlPFQ+KG9iajogYW55KTogb2JqIGlzIEFzeW5jSXRlcmFibGU8VD4ge1xuICByZXR1cm4gU3ltYm9sLmFzeW5jSXRlcmF0b3IgJiYgaXNGdW5jdGlvbihvYmo/LltTeW1ib2wuYXN5bmNJdGVyYXRvcl0pO1xufVxuIiwgIi8qKlxuICogQ3JlYXRlcyB0aGUgVHlwZUVycm9yIHRvIHRocm93IGlmIGFuIGludmFsaWQgb2JqZWN0IGlzIHBhc3NlZCB0byBgZnJvbWAgb3IgYHNjaGVkdWxlZGAuXG4gKiBAcGFyYW0gaW5wdXQgVGhlIG9iamVjdCB0aGF0IHdhcyBwYXNzZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dDogYW55KSB7XG4gIC8vIFRPRE86IFdlIHNob3VsZCBjcmVhdGUgZXJyb3IgY29kZXMgdGhhdCBjYW4gYmUgbG9va2VkIHVwLCBzbyB0aGlzIGNhbiBiZSBsZXNzIHZlcmJvc2UuXG4gIHJldHVybiBuZXcgVHlwZUVycm9yKFxuICAgIGBZb3UgcHJvdmlkZWQgJHtcbiAgICAgIGlucHV0ICE9PSBudWxsICYmIHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgPyAnYW4gaW52YWxpZCBvYmplY3QnIDogYCcke2lucHV0fSdgXG4gICAgfSB3aGVyZSBhIHN0cmVhbSB3YXMgZXhwZWN0ZWQuIFlvdSBjYW4gcHJvdmlkZSBhbiBPYnNlcnZhYmxlLCBQcm9taXNlLCBSZWFkYWJsZVN0cmVhbSwgQXJyYXksIEFzeW5jSXRlcmFibGUsIG9yIEl0ZXJhYmxlLmBcbiAgKTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sSXRlcmF0b3IoKTogc3ltYm9sIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgIVN5bWJvbC5pdGVyYXRvcikge1xuICAgIHJldHVybiAnQEBpdGVyYXRvcicgYXMgYW55O1xuICB9XG5cbiAgcmV0dXJuIFN5bWJvbC5pdGVyYXRvcjtcbn1cblxuZXhwb3J0IGNvbnN0IGl0ZXJhdG9yID0gZ2V0U3ltYm9sSXRlcmF0b3IoKTtcbiIsICJpbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbi8qKiBJZGVudGlmaWVzIGFuIGlucHV0IGFzIGJlaW5nIGFuIEl0ZXJhYmxlICovXG5leHBvcnQgZnVuY3Rpb24gaXNJdGVyYWJsZShpbnB1dDogYW55KTogaW5wdXQgaXMgSXRlcmFibGU8YW55PiB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGlucHV0Py5bU3ltYm9sX2l0ZXJhdG9yXSk7XG59XG4iLCAiaW1wb3J0IHsgUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiogcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcjxUPihyZWFkYWJsZVN0cmVhbTogUmVhZGFibGVTdHJlYW1MaWtlPFQ+KTogQXN5bmNHZW5lcmF0b3I8VD4ge1xuICBjb25zdCByZWFkZXIgPSByZWFkYWJsZVN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgIGlmIChkb25lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHlpZWxkIHZhbHVlITtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVhZGVyLnJlbGVhc2VMb2NrKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZGFibGVTdHJlYW1MaWtlPFQ+KG9iajogYW55KTogb2JqIGlzIFJlYWRhYmxlU3RyZWFtTGlrZTxUPiB7XG4gIC8vIFdlIGRvbid0IHdhbnQgdG8gdXNlIGluc3RhbmNlb2YgY2hlY2tzIGJlY2F1c2UgdGhleSB3b3VsZCByZXR1cm5cbiAgLy8gZmFsc2UgZm9yIGluc3RhbmNlcyBmcm9tIGFub3RoZXIgUmVhbG0sIGxpa2UgYW4gPGlmcmFtZT4uXG4gIHJldHVybiBpc0Z1bmN0aW9uKG9iaj8uZ2V0UmVhZGVyKTtcbn1cbiIsICJpbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0LCBPYnNlcnZlZFZhbHVlT2YsIFJlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0FzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IgfSBmcm9tICcuLi91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3InO1xuaW1wb3J0IHsgaXNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJdGVyYWJsZSc7XG5pbXBvcnQgeyBpc1JlYWRhYmxlU3RyZWFtTGlrZSwgcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvciB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyByZXBvcnRVbmhhbmRsZWRFcnJvciB9IGZyb20gJy4uL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3InO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N5bWJvbC9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlubmVyRnJvbTxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KGlucHV0OiBPKTogT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz4+O1xuZXhwb3J0IGZ1bmN0aW9uIGlubmVyRnJvbTxUPihpbnB1dDogT2JzZXJ2YWJsZUlucHV0PFQ+KTogT2JzZXJ2YWJsZTxUPiB7XG4gIGlmIChpbnB1dCBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheUxpa2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc1Byb21pc2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbVByb21pc2UoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNBc3luY0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbUl0ZXJhYmxlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21SZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIFJ4SlMgT2JzZXJ2YWJsZSBmcm9tIGFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgYFN5bWJvbC5vYnNlcnZhYmxlYC5cbiAqIEBwYXJhbSBvYmogQW4gb2JqZWN0IHRoYXQgcHJvcGVybHkgaW1wbGVtZW50cyBgU3ltYm9sLm9ic2VydmFibGVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUludGVyb3BPYnNlcnZhYmxlPFQ+KG9iajogYW55KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIGNvbnN0IG9icyA9IG9ialtTeW1ib2xfb2JzZXJ2YWJsZV0oKTtcbiAgICBpZiAoaXNGdW5jdGlvbihvYnMuc3Vic2NyaWJlKSkge1xuICAgICAgcmV0dXJuIG9icy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfVxuICAgIC8vIFNob3VsZCBiZSBjYXVnaHQgYnkgb2JzZXJ2YWJsZSBzdWJzY3JpYmUgZnVuY3Rpb24gZXJyb3IgaGFuZGxpbmcuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvdmlkZWQgb2JqZWN0IGRvZXMgbm90IGNvcnJlY3RseSBpbXBsZW1lbnQgU3ltYm9sLm9ic2VydmFibGUnKTtcbiAgfSk7XG59XG5cbi8qKlxuICogU3luY2hyb25vdXNseSBlbWl0cyB0aGUgdmFsdWVzIG9mIGFuIGFycmF5IGxpa2UgYW5kIGNvbXBsZXRlcy5cbiAqIFRoaXMgaXMgZXhwb3J0ZWQgYmVjYXVzZSB0aGVyZSBhcmUgY3JlYXRpb24gZnVuY3Rpb25zIGFuZCBvcGVyYXRvcnMgdGhhdCBuZWVkIHRvXG4gKiBtYWtlIGRpcmVjdCB1c2Ugb2YgdGhlIHNhbWUgbG9naWMsIGFuZCB0aGVyZSdzIG5vIHJlYXNvbiB0byBtYWtlIHRoZW0gcnVuIHRocm91Z2hcbiAqIGBmcm9tYCBjb25kaXRpb25hbHMgYmVjYXVzZSB3ZSAqa25vdyogdGhleSdyZSBkZWFsaW5nIHdpdGggYW4gYXJyYXkuXG4gKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IHRvIGVtaXQgdmFsdWVzIGZyb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21BcnJheUxpa2U8VD4oYXJyYXk6IEFycmF5TGlrZTxUPikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICAvLyBMb29wIG92ZXIgdGhlIGFycmF5IGFuZCBlbWl0IGVhY2ggdmFsdWUuIE5vdGUgdHdvIHRoaW5ncyBoZXJlOlxuICAgIC8vIDEuIFdlJ3JlIG1ha2luZyBzdXJlIHRoYXQgdGhlIHN1YnNjcmliZXIgaXMgbm90IGNsb3NlZCBvbiBlYWNoIGxvb3AuXG4gICAgLy8gICAgVGhpcyBpcyBzbyB3ZSBkb24ndCBjb250aW51ZSBsb29waW5nIG92ZXIgYSB2ZXJ5IGxhcmdlIGFycmF5IGFmdGVyXG4gICAgLy8gICAgc29tZXRoaW5nIGxpa2UgYSBgdGFrZWAsIGB0YWtlV2hpbGVgLCBvciBvdGhlciBzeW5jaHJvbm91cyB1bnN1YnNjcmlwdGlvblxuICAgIC8vICAgIGhhcyBhbHJlYWR5IHVuc3Vic2NyaWJlZC5cbiAgICAvLyAyLiBJbiB0aGlzIGZvcm0sIHJlZW50cmFudCBjb2RlIGNhbiBhbHRlciB0aGF0IGFycmF5IHdlJ3JlIGxvb3Bpbmcgb3Zlci5cbiAgICAvLyAgICBUaGlzIGlzIGEga25vd24gaXNzdWUsIGJ1dCBjb25zaWRlcmVkIGFuIGVkZ2UgY2FzZS4gVGhlIGFsdGVybmF0aXZlIHdvdWxkXG4gICAgLy8gICAgYmUgdG8gY29weSB0aGUgYXJyYXkgYmVmb3JlIGV4ZWN1dGluZyB0aGUgbG9vcCwgYnV0IHRoaXMgaGFzXG4gICAgLy8gICAgcGVyZm9ybWFuY2UgaW1wbGljYXRpb25zLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICBzdWJzY3JpYmVyLm5leHQoYXJyYXlbaV0pO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVByb21pc2U8VD4ocHJvbWlzZTogUHJvbWlzZUxpa2U8VD4pIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgcHJvbWlzZVxuICAgICAgLnRoZW4oXG4gICAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyOiBhbnkpID0+IHN1YnNjcmliZXIuZXJyb3IoZXJyKVxuICAgICAgKVxuICAgICAgLnRoZW4obnVsbCwgcmVwb3J0VW5oYW5kbGVkRXJyb3IpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21JdGVyYWJsZTxUPihpdGVyYWJsZTogSXRlcmFibGU8VD4pIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBpdGVyYWJsZSkge1xuICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQXN5bmNJdGVyYWJsZTxUPihhc3luY0l0ZXJhYmxlOiBBc3luY0l0ZXJhYmxlPFQ+KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIHByb2Nlc3MoYXN5bmNJdGVyYWJsZSwgc3Vic2NyaWJlcikuY2F0Y2goKGVycikgPT4gc3Vic2NyaWJlci5lcnJvcihlcnIpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUmVhZGFibGVTdHJlYW1MaWtlPFQ+KHJlYWRhYmxlU3RyZWFtOiBSZWFkYWJsZVN0cmVhbUxpa2U8VD4pIHtcbiAgcmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IocmVhZGFibGVTdHJlYW0pKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2VzczxUPihhc3luY0l0ZXJhYmxlOiBBc3luY0l0ZXJhYmxlPFQ+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSB7XG4gIGZvciBhd2FpdCAoY29uc3QgdmFsdWUgb2YgYXN5bmNJdGVyYWJsZSkge1xuICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgLy8gQSBzaWRlLWVmZmVjdCBtYXkgaGF2ZSBjbG9zZWQgb3VyIHN1YnNjcmliZXIsXG4gICAgLy8gY2hlY2sgYmVmb3JlIHRoZSBuZXh0IGl0ZXJhdGlvbi5cbiAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xufVxuIiwgImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBTY2hlZHVsZXJBY3Rpb24sIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU2NoZWR1bGUoXG4gIHBhcmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsXG4gIHdvcms6ICgpID0+IHZvaWQsXG4gIGRlbGF5OiBudW1iZXIsXG4gIHJlcGVhdDogdHJ1ZVxuKTogdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU2NoZWR1bGUoXG4gIHBhcmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsXG4gIHdvcms6ICgpID0+IHZvaWQsXG4gIGRlbGF5PzogbnVtYmVyLFxuICByZXBlYXQ/OiBmYWxzZVxuKTogU3Vic2NyaXB0aW9uO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVNjaGVkdWxlKFxuICBwYXJlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbixcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlLFxuICB3b3JrOiAoKSA9PiB2b2lkLFxuICBkZWxheSA9IDAsXG4gIHJlcGVhdCA9IGZhbHNlXG4pOiBTdWJzY3JpcHRpb24gfCB2b2lkIHtcbiAgY29uc3Qgc2NoZWR1bGVTdWJzY3JpcHRpb24gPSBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKHRoaXM6IFNjaGVkdWxlckFjdGlvbjxhbnk+KSB7XG4gICAgd29yaygpO1xuICAgIGlmIChyZXBlYXQpIHtcbiAgICAgIHBhcmVudFN1YnNjcmlwdGlvbi5hZGQodGhpcy5zY2hlZHVsZShudWxsLCBkZWxheSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9LCBkZWxheSk7XG5cbiAgcGFyZW50U3Vic2NyaXB0aW9uLmFkZChzY2hlZHVsZVN1YnNjcmlwdGlvbik7XG5cbiAgaWYgKCFyZXBlYXQpIHtcbiAgICAvLyBCZWNhdXNlIHVzZXItbGFuZCBzY2hlZHVsZXIgaW1wbGVtZW50YXRpb25zIGFyZSB1bmxpa2VseSB0byBwcm9wZXJseSByZXVzZVxuICAgIC8vIEFjdGlvbnMgZm9yIHJlcGVhdCBzY2hlZHVsaW5nLCB3ZSBjYW4ndCB0cnVzdCB0aGF0IHRoZSByZXR1cm5lZCBzdWJzY3JpcHRpb25cbiAgICAvLyB3aWxsIGNvbnRyb2wgcmVwZWF0IHN1YnNjcmlwdGlvbiBzY2VuYXJpb3MuIFNvIHdlJ3JlIHRyeWluZyB0byBhdm9pZCB1c2luZyB0aGVtXG4gICAgLy8gaW5jb3JyZWN0bHkgd2l0aGluIHRoaXMgbGlicmFyeS5cbiAgICByZXR1cm4gc2NoZWR1bGVTdWJzY3JpcHRpb247XG4gIH1cbn1cbiIsICIvKiogQHByZXR0aWVyICovXG5pbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcblxuLyoqXG4gKiBSZS1lbWl0cyBhbGwgbm90aWZpY2F0aW9ucyBmcm9tIHNvdXJjZSBPYnNlcnZhYmxlIHdpdGggc3BlY2lmaWVkIHNjaGVkdWxlci5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+RW5zdXJlIGEgc3BlY2lmaWMgc2NoZWR1bGVyIGlzIHVzZWQsIGZyb20gb3V0c2lkZSBvZiBhbiBPYnNlcnZhYmxlLjwvc3Bhbj5cbiAqXG4gKiBgb2JzZXJ2ZU9uYCBpcyBhbiBvcGVyYXRvciB0aGF0IGFjY2VwdHMgYSBzY2hlZHVsZXIgYXMgYSBmaXJzdCBwYXJhbWV0ZXIsIHdoaWNoIHdpbGwgYmUgdXNlZCB0byByZXNjaGVkdWxlXG4gKiBub3RpZmljYXRpb25zIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBJdCBtaWdodCBiZSB1c2VmdWwsIGlmIHlvdSBkbyBub3QgaGF2ZSBjb250cm9sIG92ZXJcbiAqIGludGVybmFsIHNjaGVkdWxlciBvZiBhIGdpdmVuIE9ic2VydmFibGUsIGJ1dCB3YW50IHRvIGNvbnRyb2wgd2hlbiBpdHMgdmFsdWVzIGFyZSBlbWl0dGVkIG5ldmVydGhlbGVzcy5cbiAqXG4gKiBSZXR1cm5lZCBPYnNlcnZhYmxlIGVtaXRzIHRoZSBzYW1lIG5vdGlmaWNhdGlvbnMgKG5leHRlZCB2YWx1ZXMsIGNvbXBsZXRlIGFuZCBlcnJvciBldmVudHMpIGFzIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSxcbiAqIGJ1dCByZXNjaGVkdWxlZCB3aXRoIHByb3ZpZGVkIHNjaGVkdWxlci4gTm90ZSB0aGF0IHRoaXMgZG9lc24ndCBtZWFuIHRoYXQgc291cmNlIE9ic2VydmFibGVzIGludGVybmFsXG4gKiBzY2hlZHVsZXIgd2lsbCBiZSByZXBsYWNlZCBpbiBhbnkgd2F5LiBPcmlnaW5hbCBzY2hlZHVsZXIgc3RpbGwgd2lsbCBiZSB1c2VkLCBidXQgd2hlbiB0aGUgc291cmNlIE9ic2VydmFibGUgZW1pdHNcbiAqIG5vdGlmaWNhdGlvbiwgaXQgd2lsbCBiZSBpbW1lZGlhdGVseSBzY2hlZHVsZWQgYWdhaW4gLSB0aGlzIHRpbWUgd2l0aCBzY2hlZHVsZXIgcGFzc2VkIHRvIGBvYnNlcnZlT25gLlxuICogQW4gYW50aS1wYXR0ZXJuIHdvdWxkIGJlIGNhbGxpbmcgYG9ic2VydmVPbmAgb24gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGxvdHMgb2YgdmFsdWVzIHN5bmNocm9ub3VzbHksIHRvIHNwbGl0XG4gKiB0aGF0IGVtaXNzaW9ucyBpbnRvIGFzeW5jaHJvbm91cyBjaHVua3MuIEZvciB0aGlzIHRvIGhhcHBlbiwgc2NoZWR1bGVyIHdvdWxkIGhhdmUgdG8gYmUgcGFzc2VkIGludG8gdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSBkaXJlY3RseSAodXN1YWxseSBpbnRvIHRoZSBvcGVyYXRvciB0aGF0IGNyZWF0ZXMgaXQpLiBgb2JzZXJ2ZU9uYCBzaW1wbHkgZGVsYXlzIG5vdGlmaWNhdGlvbnMgYVxuICogbGl0dGxlIGJpdCBtb3JlLCB0byBlbnN1cmUgdGhhdCB0aGV5IGFyZSBlbWl0dGVkIGF0IGV4cGVjdGVkIG1vbWVudHMuXG4gKlxuICogQXMgYSBtYXR0ZXIgb2YgZmFjdCwgYG9ic2VydmVPbmAgYWNjZXB0cyBzZWNvbmQgcGFyYW1ldGVyLCB3aGljaCBzcGVjaWZpZXMgaW4gbWlsbGlzZWNvbmRzIHdpdGggd2hhdCBkZWxheSBub3RpZmljYXRpb25zXG4gKiB3aWxsIGJlIGVtaXR0ZWQuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiB7QGxpbmsgZGVsYXl9IG9wZXJhdG9yIGFuZCBgb2JzZXJ2ZU9uYCBpcyB0aGF0IGBvYnNlcnZlT25gXG4gKiB3aWxsIGRlbGF5IGFsbCBub3RpZmljYXRpb25zIC0gaW5jbHVkaW5nIGVycm9yIG5vdGlmaWNhdGlvbnMgLSB3aGlsZSBgZGVsYXlgIHdpbGwgcGFzcyB0aHJvdWdoIGVycm9yXG4gKiBmcm9tIHNvdXJjZSBPYnNlcnZhYmxlIGltbWVkaWF0ZWx5IHdoZW4gaXQgaXMgZW1pdHRlZC4gSW4gZ2VuZXJhbCBpdCBpcyBoaWdobHkgcmVjb21tZW5kZWQgdG8gdXNlIGBkZWxheWAgb3BlcmF0b3JcbiAqIGZvciBhbnkga2luZCBvZiBkZWxheWluZyBvZiB2YWx1ZXMgaW4gdGhlIHN0cmVhbSwgd2hpbGUgdXNpbmcgYG9ic2VydmVPbmAgdG8gc3BlY2lmeSB3aGljaCBzY2hlZHVsZXIgc2hvdWxkIGJlIHVzZWRcbiAqIGZvciBub3RpZmljYXRpb24gZW1pc3Npb25zIGluIGdlbmVyYWwuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIEVuc3VyZSB2YWx1ZXMgaW4gc3Vic2NyaWJlIGFyZSBjYWxsZWQganVzdCBiZWZvcmUgYnJvd3NlciByZXBhaW50XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCBvYnNlcnZlT24sIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgc29tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICogc29tZURpdi5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiAyMDBweDtiYWNrZ3JvdW5kOiAjMDljJztcbiAqIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc29tZURpdik7XG4gKiBjb25zdCBpbnRlcnZhbHMgPSBpbnRlcnZhbCgxMCk7ICAgICAgLy8gSW50ZXJ2YWxzIGFyZSBzY2hlZHVsZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGFzeW5jIHNjaGVkdWxlciBieSBkZWZhdWx0Li4uXG4gKiBpbnRlcnZhbHMucGlwZShcbiAqICAgb2JzZXJ2ZU9uKGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSAvLyAuLi5idXQgd2Ugd2lsbCBvYnNlcnZlIG9uIGFuaW1hdGlvbkZyYW1lXG4gKiApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2NoZWR1bGVyIHRvIGVuc3VyZSBzbW9vdGggYW5pbWF0aW9uLlxuICogLnN1YnNjcmliZSh2YWwgPT4ge1xuICogICBzb21lRGl2LnN0eWxlLmhlaWdodCA9IHZhbCArICdweCc7XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGRlbGF5fVxuICpcbiAqIEBwYXJhbSBzY2hlZHVsZXIgU2NoZWR1bGVyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHJlc2NoZWR1bGUgbm90aWZpY2F0aW9ucyBmcm9tIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQHBhcmFtIGRlbGF5IE51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBzdGF0ZXMgd2l0aCB3aGF0IGRlbGF5IGV2ZXJ5IG5vdGlmaWNhdGlvbiBzaG91bGQgYmUgcmVzY2hlZHVsZWQuXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgc2FtZVxuICogbm90aWZpY2F0aW9ucyBhcyB0aGUgc291cmNlIE9ic2VydmFibGUsIGJ1dCB3aXRoIHByb3ZpZGVkIHNjaGVkdWxlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVPbjxUPihzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsIGRlbGF5ID0gMCk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gIHJldHVybiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IHtcbiAgICBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKFxuICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICAodmFsdWUpID0+IGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHN1YnNjcmliZXIubmV4dCh2YWx1ZSksIGRlbGF5KSxcbiAgICAgICAgKCkgPT4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4gc3Vic2NyaWJlci5jb21wbGV0ZSgpLCBkZWxheSksXG4gICAgICAgIChlcnIpID0+IGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHN1YnNjcmliZXIuZXJyb3IoZXJyKSwgZGVsYXkpXG4gICAgICApXG4gICAgKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5cbi8qKlxuICogQXN5bmNocm9ub3VzbHkgc3Vic2NyaWJlcyBPYnNlcnZlcnMgdG8gdGhpcyBPYnNlcnZhYmxlIG9uIHRoZSBzcGVjaWZpZWQge0BsaW5rIFNjaGVkdWxlckxpa2V9LlxuICpcbiAqIFdpdGggYHN1YnNjcmliZU9uYCB5b3UgY2FuIGRlY2lkZSB3aGF0IHR5cGUgb2Ygc2NoZWR1bGVyIGEgc3BlY2lmaWMgT2JzZXJ2YWJsZSB3aWxsIGJlIHVzaW5nIHdoZW4gaXQgaXMgc3Vic2NyaWJlZCB0by5cbiAqXG4gKiBTY2hlZHVsZXJzIGNvbnRyb2wgdGhlIHNwZWVkIGFuZCBvcmRlciBvZiBlbWlzc2lvbnMgdG8gb2JzZXJ2ZXJzIGZyb20gYW4gT2JzZXJ2YWJsZSBzdHJlYW0uXG4gKlxuICogIVtdKHN1YnNjcmliZU9uLnBuZylcbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogR2l2ZW4gdGhlIGZvbGxvd2luZyBjb2RlOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBhID0gb2YoMSwgMiwgMyk7XG4gKiBjb25zdCBiID0gb2YoNCwgNSwgNik7XG4gKlxuICogbWVyZ2UoYSwgYikuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAqXG4gKiAvLyBPdXRwdXRzXG4gKiAvLyAxXG4gKiAvLyAyXG4gKiAvLyAzXG4gKiAvLyA0XG4gKiAvLyA1XG4gKiAvLyA2XG4gKiBgYGBcbiAqXG4gKiBCb3RoIE9ic2VydmFibGUgYGFgIGFuZCBgYmAgd2lsbCBlbWl0IHRoZWlyIHZhbHVlcyBkaXJlY3RseSBhbmQgc3luY2hyb25vdXNseSBvbmNlIHRoZXkgYXJlIHN1YnNjcmliZWQgdG8uXG4gKlxuICogSWYgd2UgaW5zdGVhZCB1c2UgdGhlIGBzdWJzY3JpYmVPbmAgb3BlcmF0b3IgZGVjbGFyaW5nIHRoYXQgd2Ugd2FudCB0byB1c2UgdGhlIHtAbGluayBhc3luY1NjaGVkdWxlcn0gZm9yIHZhbHVlcyBlbWl0dGVkIGJ5IE9ic2VydmFibGUgYGFgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgc3Vic2NyaWJlT24sIGFzeW5jU2NoZWR1bGVyLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGEgPSBvZigxLCAyLCAzKS5waXBlKHN1YnNjcmliZU9uKGFzeW5jU2NoZWR1bGVyKSk7XG4gKiBjb25zdCBiID0gb2YoNCwgNSwgNik7XG4gKlxuICogbWVyZ2UoYSwgYikuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAqXG4gKiAvLyBPdXRwdXRzXG4gKiAvLyA0XG4gKiAvLyA1XG4gKiAvLyA2XG4gKiAvLyAxXG4gKiAvLyAyXG4gKiAvLyAzXG4gKiBgYGBcbiAqXG4gKiBUaGUgcmVhc29uIGZvciB0aGlzIGlzIHRoYXQgT2JzZXJ2YWJsZSBgYmAgZW1pdHMgaXRzIHZhbHVlcyBkaXJlY3RseSBhbmQgc3luY2hyb25vdXNseSBsaWtlIGJlZm9yZVxuICogYnV0IHRoZSBlbWlzc2lvbnMgZnJvbSBgYWAgYXJlIHNjaGVkdWxlZCBvbiB0aGUgZXZlbnQgbG9vcCBiZWNhdXNlIHdlIGFyZSBub3cgdXNpbmcgdGhlIHtAbGluayBhc3luY1NjaGVkdWxlcn0gZm9yIHRoYXQgc3BlY2lmaWMgT2JzZXJ2YWJsZS5cbiAqXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFRoZSB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gdG8gcGVyZm9ybSBzdWJzY3JpcHRpb24gYWN0aW9ucyBvbi5cbiAqIEBwYXJhbSBkZWxheSBBIGRlbGF5IHRvIHBhc3MgdG8gdGhlIHNjaGVkdWxlciB0byBkZWxheSBzdWJzY3JpcHRpb25zXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgbW9kaWZpZWQgc28gdGhhdCBpdHNcbiAqIHN1YnNjcmlwdGlvbnMgaGFwcGVuIG9uIHRoZSBzcGVjaWZpZWQge0BsaW5rIFNjaGVkdWxlckxpa2V9LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlT248VD4oc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlLCBkZWxheTogbnVtYmVyID0gMCk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gIHJldHVybiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IHtcbiAgICBzdWJzY3JpYmVyLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKSwgZGVsYXkpKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgb2JzZXJ2ZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL29ic2VydmVPbic7XG5pbXBvcnQgeyBzdWJzY3JpYmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9zdWJzY3JpYmVPbic7XG5pbXBvcnQgeyBJbnRlcm9wT2JzZXJ2YWJsZSwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlT2JzZXJ2YWJsZTxUPihpbnB1dDogSW50ZXJvcE9ic2VydmFibGU8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gaW5uZXJGcm9tKGlucHV0KS5waXBlKHN1YnNjcmliZU9uKHNjaGVkdWxlciksIG9ic2VydmVPbihzY2hlZHVsZXIpKTtcbn1cbiIsICJpbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBvYnNlcnZlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvb2JzZXJ2ZU9uJztcbmltcG9ydCB7IHN1YnNjcmliZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL3N1YnNjcmliZU9uJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZVByb21pc2U8VD4oaW5wdXQ6IFByb21pc2VMaWtlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgcmV0dXJuIGlubmVyRnJvbShpbnB1dCkucGlwZShzdWJzY3JpYmVPbihzY2hlZHVsZXIpLCBvYnNlcnZlT24oc2NoZWR1bGVyKSk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlQXJyYXk8VD4oaW5wdXQ6IEFycmF5TGlrZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIC8vIFRoZSBjdXJyZW50IGFycmF5IGluZGV4LlxuICAgIGxldCBpID0gMDtcbiAgICAvLyBTdGFydCBpdGVyYXRpbmcgb3ZlciB0aGUgYXJyYXkgbGlrZSBvbiBhIHNjaGVkdWxlLlxuICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGkgPT09IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGhpdCB0aGUgZW5kIG9mIHRoZSBhcnJheSBsaWtlIGluIHRoZVxuICAgICAgICAvLyBwcmV2aW91cyBqb2IsIHdlIGNhbiBjb21wbGV0ZS5cbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlIGxldCdzIG5leHQgdGhlIHZhbHVlIGF0IHRoZSBjdXJyZW50IGluZGV4LFxuICAgICAgICAvLyB0aGVuIGluY3JlbWVudCBvdXIgaW5kZXguXG4gICAgICAgIHN1YnNjcmliZXIubmV4dChpbnB1dFtpKytdKTtcbiAgICAgICAgLy8gSWYgdGhlIGxhc3QgZW1pc3Npb24gZGlkbid0IGNhdXNlIHVzIHRvIGNsb3NlIHRoZSBzdWJzY3JpYmVyXG4gICAgICAgIC8vICh2aWEgdGFrZSBvciBzb21lIHNpZGUgZWZmZWN0KSwgcmVzY2hlZHVsZSB0aGUgam9iIGFuZCB3ZSdsbFxuICAgICAgICAvLyBtYWtlIGFub3RoZXIgcGFzcy5cbiAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXRlcmF0b3IgYXMgU3ltYm9sX2l0ZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9sL2l0ZXJhdG9yJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuXG4vKipcbiAqIFVzZWQgaW4ge0BsaW5rIHNjaGVkdWxlZH0gdG8gY3JlYXRlIGFuIG9ic2VydmFibGUgZnJvbSBhbiBJdGVyYWJsZS5cbiAqIEBwYXJhbSBpbnB1dCBUaGUgaXRlcmFibGUgdG8gY3JlYXRlIGFuIG9ic2VydmFibGUgZnJvbVxuICogQHBhcmFtIHNjaGVkdWxlciBUaGUgc2NoZWR1bGVyIHRvIHVzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVJdGVyYWJsZTxUPihpbnB1dDogSXRlcmFibGU8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oKHN1YnNjcmliZXIpID0+IHtcbiAgICBsZXQgaXRlcmF0b3I6IEl0ZXJhdG9yPFQsIFQ+O1xuXG4gICAgLy8gU2NoZWR1bGUgdGhlIGluaXRpYWwgY3JlYXRpb24gb2YgdGhlIGl0ZXJhdG9yIGZyb21cbiAgICAvLyB0aGUgaXRlcmFibGUuIFRoaXMgaXMgc28gdGhlIGNvZGUgaW4gdGhlIGl0ZXJhYmxlIGlzXG4gICAgLy8gbm90IGNhbGxlZCB1bnRpbCB0aGUgc2NoZWR1bGVkIGpvYiBmaXJlcy5cbiAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgdGhlIGl0ZXJhdG9yLlxuICAgICAgaXRlcmF0b3IgPSAoaW5wdXQgYXMgYW55KVtTeW1ib2xfaXRlcmF0b3JdKCk7XG5cbiAgICAgIGV4ZWN1dGVTY2hlZHVsZShcbiAgICAgICAgc3Vic2NyaWJlcixcbiAgICAgICAgc2NoZWR1bGVyLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZhbHVlOiBUO1xuICAgICAgICAgIGxldCBkb25lOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBQdWxsIHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGl0ZXJhdG9yXG4gICAgICAgICAgICAoeyB2YWx1ZSwgZG9uZSB9ID0gaXRlcmF0b3IubmV4dCgpKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIFdlIGdvdCBhbiBlcnJvciB3aGlsZSBwdWxsaW5nIGZyb20gdGhlIGl0ZXJhdG9yXG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIC8vIElmIGl0IGlzIFwiZG9uZVwiIHdlIGp1c3QgY29tcGxldGUuIFRoaXMgbWltaWNzIHRoZVxuICAgICAgICAgICAgLy8gYmVoYXZpb3Igb2YgSmF2YVNjcmlwdCdzIGBmb3IuLm9mYCBjb25zdW1wdGlvbiBvZlxuICAgICAgICAgICAgLy8gaXRlcmFibGVzLCB3aGljaCB3aWxsIG5vdCBlbWl0IHRoZSB2YWx1ZSBmcm9tIGFuIGl0ZXJhdG9yXG4gICAgICAgICAgICAvLyByZXN1bHQgb2YgYHsgZG9uZTogdHJ1ZTogdmFsdWU6ICdoZXJlJyB9YC5cbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhlIGl0ZXJhYmxlIGlzIG5vdCBkb25lLCBlbWl0IHRoZSB2YWx1ZS5cbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAwLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gRHVyaW5nIGZpbmFsaXphdGlvbiwgaWYgd2Ugc2VlIHRoaXMgaXRlcmF0b3IgaGFzIGEgYHJldHVybmAgbWV0aG9kLFxuICAgIC8vIHRoZW4gd2Uga25vdyBpdCBpcyBhIEdlbmVyYXRvciwgYW5kIG5vdCBqdXN0IGFuIEl0ZXJhdG9yLiBTbyB3ZSBjYWxsXG4gICAgLy8gdGhlIGByZXR1cm4oKWAgZnVuY3Rpb24uIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBhbnkgYGZpbmFsbHkgeyB9YCBibG9ja3NcbiAgICAvLyBpbnNpZGUgb2YgdGhlIGdlbmVyYXRvciB3ZSBjYW4gaGl0IHdpbGwgYmUgaGl0IHByb3Blcmx5LlxuICAgIHJldHVybiAoKSA9PiBpc0Z1bmN0aW9uKGl0ZXJhdG9yPy5yZXR1cm4pICYmIGl0ZXJhdG9yLnJldHVybigpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBc3luY0l0ZXJhYmxlPFQ+KGlucHV0OiBBc3luY0l0ZXJhYmxlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgaWYgKCFpbnB1dCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSXRlcmFibGUgY2Fubm90IGJlIG51bGwnKTtcbiAgfVxuICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oKHN1YnNjcmliZXIpID0+IHtcbiAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IGlucHV0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpO1xuICAgICAgZXhlY3V0ZVNjaGVkdWxlKFxuICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICBzY2hlZHVsZXIsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpdGVyYXRvci5uZXh0KCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHJlbW92ZSB0aGUgc3Vic2NyaXB0aW9ucyBmcm9tXG4gICAgICAgICAgICAgIC8vIHRoZSBwYXJlbnQgc3Vic2NyaXB0aW9uLlxuICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgMCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSwgUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvciB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2U8VD4oaW5wdXQ6IFJlYWRhYmxlU3RyZWFtTGlrZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiBzY2hlZHVsZUFzeW5jSXRlcmFibGUocmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcihpbnB1dCksIHNjaGVkdWxlcik7XG59XG4iLCAiaW1wb3J0IHsgc2NoZWR1bGVPYnNlcnZhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZU9ic2VydmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVQcm9taXNlIH0gZnJvbSAnLi9zY2hlZHVsZVByb21pc2UnO1xuaW1wb3J0IHsgc2NoZWR1bGVBcnJheSB9IGZyb20gJy4vc2NoZWR1bGVBcnJheSc7XG5pbXBvcnQgeyBzY2hlZHVsZUl0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUl0ZXJhYmxlJztcbmltcG9ydCB7IHNjaGVkdWxlQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4vc2NoZWR1bGVBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgaXNBcnJheUxpa2UgfSBmcm9tICcuLi91dGlsL2lzQXJyYXlMaWtlJztcbmltcG9ydCB7IGlzSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzSXRlcmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0LCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0FzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IgfSBmcm9tICcuLi91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3InO1xuaW1wb3J0IHsgaXNSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcbmltcG9ydCB7IHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi9zY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZSc7XG5cbi8qKlxuICogQ29udmVydHMgZnJvbSBhIGNvbW1vbiB7QGxpbmsgT2JzZXJ2YWJsZUlucHV0fSB0eXBlIHRvIGFuIG9ic2VydmFibGUgd2hlcmUgc3Vic2NyaXB0aW9uIGFuZCBlbWlzc2lvbnNcbiAqIGFyZSBzY2hlZHVsZWQgb24gdGhlIHByb3ZpZGVkIHNjaGVkdWxlci5cbiAqXG4gKiBAc2VlIHtAbGluayBmcm9tfVxuICogQHNlZSB7QGxpbmsgb2Z9XG4gKlxuICogQHBhcmFtIGlucHV0IFRoZSBvYnNlcnZhYmxlLCBhcnJheSwgcHJvbWlzZSwgaXRlcmFibGUsIGV0YyB5b3Ugd291bGQgbGlrZSB0byBzY2hlZHVsZVxuICogQHBhcmFtIHNjaGVkdWxlciBUaGUgc2NoZWR1bGVyIHRvIHVzZSB0byBzY2hlZHVsZSB0aGUgc3Vic2NyaXB0aW9uIGFuZCBlbWlzc2lvbnMgZnJvbVxuICogdGhlIHJldHVybmVkIG9ic2VydmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZWQ8VD4oaW5wdXQ6IE9ic2VydmFibGVJbnB1dDxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTxUPiB7XG4gIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgaWYgKGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVPYnNlcnZhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheUxpa2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc0FzeW5jSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVBc3luY0l0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICB9XG4gIHRocm93IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0KTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIFNjaGVkdWxlckxpa2UsIE9ic2VydmVkVmFsdWVPZiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IHNjaGVkdWxlZCB9IGZyb20gJy4uL3NjaGVkdWxlZC9zY2hlZHVsZWQnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi9pbm5lckZyb20nO1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbTxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KGlucHV0OiBPKTogT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz4+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgc2NoZWR1bGVyYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYHNjaGVkdWxlZGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb208TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PihpbnB1dDogTywgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlIHwgdW5kZWZpbmVkKTogT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz4+O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZSBmcm9tIGFuIEFycmF5LCBhbiBhcnJheS1saWtlIG9iamVjdCwgYSBQcm9taXNlLCBhbiBpdGVyYWJsZSBvYmplY3QsIG9yIGFuIE9ic2VydmFibGUtbGlrZSBvYmplY3QuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkNvbnZlcnRzIGFsbW9zdCBhbnl0aGluZyB0byBhbiBPYnNlcnZhYmxlLjwvc3Bhbj5cbiAqXG4gKiAhW10oZnJvbS5wbmcpXG4gKlxuICogYGZyb21gIGNvbnZlcnRzIHZhcmlvdXMgb3RoZXIgb2JqZWN0cyBhbmQgZGF0YSB0eXBlcyBpbnRvIE9ic2VydmFibGVzLiBJdCBhbHNvIGNvbnZlcnRzIGEgUHJvbWlzZSwgYW4gYXJyYXktbGlrZSwgb3IgYW5cbiAqIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9JdGVyYXRpb25fcHJvdG9jb2xzI2l0ZXJhYmxlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aXRlcmFibGU8L2E+XG4gKiBvYmplY3QgaW50byBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIGl0ZW1zIGluIHRoYXQgcHJvbWlzZSwgYXJyYXksIG9yIGl0ZXJhYmxlLiBBIFN0cmluZywgaW4gdGhpcyBjb250ZXh0LCBpcyB0cmVhdGVkXG4gKiBhcyBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzLiBPYnNlcnZhYmxlLWxpa2Ugb2JqZWN0cyAoY29udGFpbnMgYSBmdW5jdGlvbiBuYW1lZCB3aXRoIHRoZSBFUzIwMTUgU3ltYm9sIGZvciBPYnNlcnZhYmxlKSBjYW4gYWxzbyBiZVxuICogY29udmVydGVkIHRocm91Z2ggdGhpcyBvcGVyYXRvci5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIENvbnZlcnRzIGFuIGFycmF5IHRvIGFuIE9ic2VydmFibGVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGFycmF5ID0gWzEwLCAyMCwgMzBdO1xuICogY29uc3QgcmVzdWx0ID0gZnJvbShhcnJheSk7XG4gKlxuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gMTBcbiAqIC8vIDIwXG4gKiAvLyAzMFxuICogYGBgXG4gKlxuICogQ29udmVydCBhbiBpbmZpbml0ZSBpdGVyYWJsZSAoZnJvbSBhIGdlbmVyYXRvcikgdG8gYW4gT2JzZXJ2YWJsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tLCB0YWtlIH0gZnJvbSAncnhqcyc7XG4gKlxuICogZnVuY3Rpb24qIGdlbmVyYXRlRG91YmxlcyhzZWVkKSB7XG4gKiAgICBsZXQgaSA9IHNlZWQ7XG4gKiAgICB3aGlsZSAodHJ1ZSkge1xuICogICAgICB5aWVsZCBpO1xuICogICAgICBpID0gMiAqIGk7IC8vIGRvdWJsZSBpdFxuICogICAgfVxuICogfVxuICpcbiAqIGNvbnN0IGl0ZXJhdG9yID0gZ2VuZXJhdGVEb3VibGVzKDMpO1xuICogY29uc3QgcmVzdWx0ID0gZnJvbShpdGVyYXRvcikucGlwZSh0YWtlKDEwKSk7XG4gKlxuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gM1xuICogLy8gNlxuICogLy8gMTJcbiAqIC8vIDI0XG4gKiAvLyA0OFxuICogLy8gOTZcbiAqIC8vIDE5MlxuICogLy8gMzg0XG4gKiAvLyA3NjhcbiAqIC8vIDE1MzZcbiAqIGBgYFxuICpcbiAqIFdpdGggYGFzeW5jU2NoZWR1bGVyYFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tLCBhc3luY1NjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnNvbGUubG9nKCdzdGFydCcpO1xuICpcbiAqIGNvbnN0IGFycmF5ID0gWzEwLCAyMCwgMzBdO1xuICogY29uc3QgcmVzdWx0ID0gZnJvbShhcnJheSwgYXN5bmNTY2hlZHVsZXIpO1xuICpcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogY29uc29sZS5sb2coJ2VuZCcpO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAnc3RhcnQnXG4gKiAvLyAnZW5kJ1xuICogLy8gMTBcbiAqIC8vIDIwXG4gKiAvLyAzMFxuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgZnJvbUV2ZW50fVxuICogQHNlZSB7QGxpbmsgZnJvbUV2ZW50UGF0dGVybn1cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGVJbnB1dDxUPn0gQSBzdWJzY3JpcHRpb24gb2JqZWN0LCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUtbGlrZSxcbiAqIGFuIEFycmF5LCBhbiBpdGVyYWJsZSwgb3IgYW4gYXJyYXktbGlrZSBvYmplY3QgdG8gYmUgY29udmVydGVkLlxuICogQHBhcmFtIHtTY2hlZHVsZXJMaWtlfSBBbiBvcHRpb25hbCB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gb24gd2hpY2ggdG8gc2NoZWR1bGUgdGhlIGVtaXNzaW9uIG9mIHZhbHVlcy5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8VD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tPFQ+KGlucHV0OiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHNjaGVkdWxlciA/IHNjaGVkdWxlZChpbnB1dCwgc2NoZWR1bGVyKSA6IGlubmVyRnJvbShpbnB1dCk7XG59XG4iLCAiLyoqXG4gKiBDaGVja3MgdG8gc2VlIGlmIGEgdmFsdWUgaXMgbm90IG9ubHkgYSBgRGF0ZWAgb2JqZWN0LFxuICogYnV0IGEgKnZhbGlkKiBgRGF0ZWAgb2JqZWN0IHRoYXQgY2FuIGJlIGNvbnZlcnRlZCB0byBhXG4gKiBudW1iZXIuIEZvciBleGFtcGxlLCBgbmV3IERhdGUoJ2JsYWgnKWAgaXMgaW5kZWVkIGFuXG4gKiBgaW5zdGFuY2VvZiBEYXRlYCwgaG93ZXZlciBpdCBjYW5ub3QgYmUgY29udmVydGVkIHRvIGFcbiAqIG51bWJlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWREYXRlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBEYXRlIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiAhaXNOYU4odmFsdWUgYXMgYW55KTtcbn1cbiIsICJpbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgUj4ocHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPjtcbi8qKiBAZGVwcmVjYXRlZCBVc2UgYSBjbG9zdXJlIGluc3RlYWQgb2YgYSBgdGhpc0FyZ2AuIFNpZ25hdHVyZXMgYWNjZXB0aW5nIGEgYHRoaXNBcmdgIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgUiwgQT4ocHJvamVjdDogKHRoaXM6IEEsIHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSLCB0aGlzQXJnOiBBKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPjtcblxuLyoqXG4gKiBBcHBsaWVzIGEgZ2l2ZW4gYHByb2plY3RgIGZ1bmN0aW9uIHRvIGVhY2ggdmFsdWUgZW1pdHRlZCBieSB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlLCBhbmQgZW1pdHMgdGhlIHJlc3VsdGluZyB2YWx1ZXMgYXMgYW4gT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+TGlrZSBbQXJyYXkucHJvdG90eXBlLm1hcCgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9tYXApLFxuICogaXQgcGFzc2VzIGVhY2ggc291cmNlIHZhbHVlIHRocm91Z2ggYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0byBnZXRcbiAqIGNvcnJlc3BvbmRpbmcgb3V0cHV0IHZhbHVlcy48L3NwYW4+XG4gKlxuICogIVtdKG1hcC5wbmcpXG4gKlxuICogU2ltaWxhciB0byB0aGUgd2VsbCBrbm93biBgQXJyYXkucHJvdG90eXBlLm1hcGAgZnVuY3Rpb24sIHRoaXMgb3BlcmF0b3JcbiAqIGFwcGxpZXMgYSBwcm9qZWN0aW9uIHRvIGVhY2ggdmFsdWUgYW5kIGVtaXRzIHRoYXQgcHJvamVjdGlvbiBpbiB0aGUgb3V0cHV0XG4gKiBPYnNlcnZhYmxlLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBNYXAgZXZlcnkgY2xpY2sgdG8gdGhlIGBjbGllbnRYYCBwb3NpdGlvbiBvZiB0aGF0IGNsaWNrXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb21FdmVudCwgbWFwIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50PFBvaW50ZXJFdmVudD4oZG9jdW1lbnQsICdjbGljaycpO1xuICogY29uc3QgcG9zaXRpb25zID0gY2xpY2tzLnBpcGUobWFwKGV2ID0+IGV2LmNsaWVudFgpKTtcbiAqXG4gKiBwb3NpdGlvbnMuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgbWFwVG99XG4gKiBAc2VlIHtAbGluayBwbHVja31cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKTogUn0gcHJvamVjdCBUaGUgZnVuY3Rpb24gdG8gYXBwbHlcbiAqIHRvIGVhY2ggYHZhbHVlYCBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS4gVGhlIGBpbmRleGAgcGFyYW1ldGVyIGlzXG4gKiB0aGUgbnVtYmVyIGBpYCBmb3IgdGhlIGktdGggZW1pc3Npb24gdGhhdCBoYXMgaGFwcGVuZWQgc2luY2UgdGhlXG4gKiBzdWJzY3JpcHRpb24sIHN0YXJ0aW5nIGZyb20gdGhlIG51bWJlciBgMGAuXG4gKiBAcGFyYW0ge2FueX0gW3RoaXNBcmddIEFuIG9wdGlvbmFsIGFyZ3VtZW50IHRvIGRlZmluZSB3aGF0IGB0aGlzYCBpcyBpbiB0aGVcbiAqIGBwcm9qZWN0YCBmdW5jdGlvbi5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSB2YWx1ZXMgZnJvbSB0aGVcbiAqIHNvdXJjZSBPYnNlcnZhYmxlIHRyYW5zZm9ybWVkIGJ5IHRoZSBnaXZlbiBgcHJvamVjdGAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgUj4ocHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSLCB0aGlzQXJnPzogYW55KTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPiB7XG4gIHJldHVybiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IHtcbiAgICAvLyBUaGUgaW5kZXggb2YgdGhlIHZhbHVlIGZyb20gdGhlIHNvdXJjZS4gVXNlZCB3aXRoIHByb2plY3Rpb24uXG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHNvdXJjZSwgYWxsIGVycm9ycyBhbmQgY29tcGxldGlvbnMgYXJlIHNlbnQgYWxvbmdcbiAgICAvLyB0byB0aGUgY29uc3VtZXIuXG4gICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCAodmFsdWU6IFQpID0+IHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgcHJvamVjdGlvbiBmdW5jdGlvbiB3aXRoIHRoZSBhcHByb3ByaWF0ZSB0aGlzIGNvbnRleHQsXG4gICAgICAgIC8vIGFuZCBzZW5kIHRoZSByZXN1bHRpbmcgdmFsdWUgdG8gdGhlIGNvbnN1bWVyLlxuICAgICAgICBzdWJzY3JpYmVyLm5leHQocHJvamVjdC5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCsrKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCIuLi9vcGVyYXRvcnMvbWFwXCI7XG5cbmNvbnN0IHsgaXNBcnJheSB9ID0gQXJyYXk7XG5cbmZ1bmN0aW9uIGNhbGxPckFwcGx5PFQsIFI+KGZuOiAoKC4uLnZhbHVlczogVFtdKSA9PiBSKSwgYXJnczogVHxUW10pOiBSIHtcbiAgICByZXR1cm4gaXNBcnJheShhcmdzKSA/IGZuKC4uLmFyZ3MpIDogZm4oYXJncyk7XG59XG5cbi8qKlxuICogVXNlZCBpbiBzZXZlcmFsIC0tIG1vc3RseSBkZXByZWNhdGVkIC0tIHNpdHVhdGlvbnMgd2hlcmUgd2UgbmVlZCB0byBcbiAqIGFwcGx5IGEgbGlzdCBvZiBhcmd1bWVudHMgb3IgYSBzaW5nbGUgYXJndW1lbnQgdG8gYSByZXN1bHQgc2VsZWN0b3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBPbmVPck1hbnlBcmdzPFQsIFI+KGZuOiAoKC4uLnZhbHVlczogVFtdKSA9PiBSKSk6IE9wZXJhdG9yRnVuY3Rpb248VHxUW10sIFI+IHtcbiAgICByZXR1cm4gbWFwKGFyZ3MgPT4gY2FsbE9yQXBwbHkoZm4sIGFyZ3MpKVxufSIsICJjb25zdCB7IGlzQXJyYXkgfSA9IEFycmF5O1xuY29uc3QgeyBnZXRQcm90b3R5cGVPZiwgcHJvdG90eXBlOiBvYmplY3RQcm90bywga2V5czogZ2V0S2V5cyB9ID0gT2JqZWN0O1xuXG4vKipcbiAqIFVzZWQgaW4gZnVuY3Rpb25zIHdoZXJlIGVpdGhlciBhIGxpc3Qgb2YgYXJndW1lbnRzLCBhIHNpbmdsZSBhcnJheSBvZiBhcmd1bWVudHMsIG9yIGFcbiAqIGRpY3Rpb25hcnkgb2YgYXJndW1lbnRzIGNhbiBiZSByZXR1cm5lZC4gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhbiBgYXJnc2AgcHJvcGVydHkgd2l0aFxuICogdGhlIGFyZ3VtZW50cyBpbiBhbiBhcnJheSwgaWYgaXQgaXMgYSBkaWN0aW9uYXJ5LCBpdCB3aWxsIGFsc28gcmV0dXJuIHRoZSBga2V5c2AgaW4gYW5vdGhlclxuICogcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmdzQXJnQXJyYXlPck9iamVjdDxULCBPIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgVD4+KGFyZ3M6IFRbXSB8IFtPXSB8IFtUW11dKTogeyBhcmdzOiBUW107IGtleXM6IHN0cmluZ1tdIHwgbnVsbCB9IHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3QgPSBhcmdzWzBdO1xuICAgIGlmIChpc0FycmF5KGZpcnN0KSkge1xuICAgICAgcmV0dXJuIHsgYXJnczogZmlyc3QsIGtleXM6IG51bGwgfTtcbiAgICB9XG4gICAgaWYgKGlzUE9KTyhmaXJzdCkpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBnZXRLZXlzKGZpcnN0KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFyZ3M6IGtleXMubWFwKChrZXkpID0+IGZpcnN0W2tleV0pLFxuICAgICAgICBrZXlzLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBhcmdzOiBhcmdzIGFzIFRbXSwga2V5czogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBpc1BPSk8ob2JqOiBhbnkpOiBvYmogaXMgb2JqZWN0IHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBnZXRQcm90b3R5cGVPZihvYmopID09PSBvYmplY3RQcm90bztcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0KGtleXM6IHN0cmluZ1tdLCB2YWx1ZXM6IGFueVtdKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZSgocmVzdWx0LCBrZXksIGkpID0+ICgocmVzdWx0W2tleV0gPSB2YWx1ZXNbaV0pLCByZXN1bHQpLCB7fSBhcyBhbnkpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgU2NoZWR1bGVyTGlrZSwgT2JzZXJ2ZWRWYWx1ZU9mLCBPYnNlcnZhYmxlSW5wdXRUdXBsZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGFyZ3NBcmdBcnJheU9yT2JqZWN0IH0gZnJvbSAnLi4vdXRpbC9hcmdzQXJnQXJyYXlPck9iamVjdCc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcbmltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi4vdXRpbC9pZGVudGl0eSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgbWFwT25lT3JNYW55QXJncyB9IGZyb20gJy4uL3V0aWwvbWFwT25lT3JNYW55QXJncyc7XG5pbXBvcnQgeyBwb3BSZXN1bHRTZWxlY3RvciwgcG9wU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9hcmdzJztcbmltcG9ydCB7IGNyZWF0ZU9iamVjdCB9IGZyb20gJy4uL3V0aWwvY3JlYXRlT2JqZWN0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4uL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXInO1xuaW1wb3J0IHsgQW55Q2F0Y2hlciB9IGZyb20gJy4uL0FueUNhdGNoZXInO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuXG4vLyBjb21iaW5lTGF0ZXN0KGFueSlcbi8vIFdlIHB1dCB0aGlzIGZpcnN0IGJlY2F1c2Ugd2UgbmVlZCB0byBjYXRjaCBjYXNlcyB3aGVyZSB0aGUgdXNlciBoYXMgc3VwcGxpZWRcbi8vIF9leGFjdGx5IGBhbnlgXyBhcyB0aGUgYXJndW1lbnQuIFNpbmNlIGBhbnlgIGxpdGVyYWxseSBtYXRjaGVzIF9hbnl0aGluZ18sXG4vLyB3ZSBkb24ndCB3YW50IGl0IHRvIHJhbmRvbWx5IGhpdCBvbmUgb2YgdGhlIG90aGVyIHR5cGUgc2lnbmF0dXJlcyBiZWxvdyxcbi8vIGFzIHdlIGhhdmUgbm8gaWRlYSBhdCBidWlsZC10aW1lIHdoYXQgdHlwZSB3ZSBzaG91bGQgYmUgcmV0dXJuaW5nIHdoZW4gZ2l2ZW4gYW4gYW55LlxuXG4vKipcbiAqIFlvdSBoYXZlIHBhc3NlZCBgYW55YCBoZXJlLCB3ZSBjYW4ndCBmaWd1cmUgb3V0IGlmIGl0IGlzXG4gKiBhbiBhcnJheSBvciBhbiBvYmplY3QsIHNvIHlvdSdyZSBnZXR0aW5nIGB1bmtub3duYC4gVXNlIGJldHRlciB0eXBlcy5cbiAqIEBwYXJhbSBhcmcgU29tZXRoaW5nIHR5cGVkIGFzIGBhbnlgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PFQgZXh0ZW5kcyBBbnlDYXRjaGVyPihhcmc6IFQpOiBPYnNlcnZhYmxlPHVua25vd24+O1xuXG4vLyBjb21iaW5lTGF0ZXN0KFthLCBiLCBjXSlcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0KHNvdXJjZXM6IFtdKTogT2JzZXJ2YWJsZTxuZXZlcj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdPihzb3VyY2VzOiByZWFkb25seSBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dKTogT2JzZXJ2YWJsZTxBPjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHNjaGVkdWxlcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGBzY2hlZHVsZWRgIGFuZCBgY29tYmluZUxhdGVzdEFsbGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXSwgUj4oXG4gIHNvdXJjZXM6IHJlYWRvbmx5IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPl0sXG4gIHJlc3VsdFNlbGVjdG9yOiAoLi4udmFsdWVzOiBBKSA9PiBSLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2Vcbik6IE9ic2VydmFibGU8Uj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdLCBSPihcbiAgc291cmNlczogcmVhZG9ubHkgWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSxcbiAgcmVzdWx0U2VsZWN0b3I6ICguLi52YWx1ZXM6IEEpID0+IFJcbik6IE9ic2VydmFibGU8Uj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KFxuICBzb3VyY2VzOiByZWFkb25seSBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2Vcbik6IE9ic2VydmFibGU8QT47XG5cbi8vIGNvbWJpbmVMYXRlc3QoYSwgYiwgYylcbi8qKiBAZGVwcmVjYXRlZCBQYXNzIGFuIGFycmF5IG9mIHNvdXJjZXMgaW5zdGVhZC4gVGhlIHJlc3QtcGFyYW1ldGVycyBzaWduYXR1cmUgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9hcnJheS1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oLi4uc291cmNlczogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSk6IE9ic2VydmFibGU8QT47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10sIFI+KFxuICAuLi5zb3VyY2VzQW5kUmVzdWx0U2VsZWN0b3JBbmRTY2hlZHVsZXI6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPiwgKC4uLnZhbHVlczogQSkgPT4gUiwgU2NoZWR1bGVyTGlrZV1cbik6IE9ic2VydmFibGU8Uj47XG4vKiogQGRlcHJlY2F0ZWQgUGFzcyBhbiBhcnJheSBvZiBzb3VyY2VzIGluc3RlYWQuIFRoZSByZXN0LXBhcmFtZXRlcnMgc2lnbmF0dXJlIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvYXJyYXktYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10sIFI+KFxuICAuLi5zb3VyY2VzQW5kUmVzdWx0U2VsZWN0b3I6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPiwgKC4uLnZhbHVlczogQSkgPT4gUl1cbik6IE9ic2VydmFibGU8Uj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KFxuICAuLi5zb3VyY2VzQW5kU2NoZWR1bGVyOiBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT4sIFNjaGVkdWxlckxpa2VdXG4pOiBPYnNlcnZhYmxlPEE+O1xuXG4vLyBjb21iaW5lTGF0ZXN0KHthLCBiLCBjfSlcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0KHNvdXJjZXNPYmplY3Q6IHsgW0sgaW4gYW55XTogbmV2ZXIgfSk6IE9ic2VydmFibGU8bmV2ZXI+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIE9ic2VydmFibGVJbnB1dDxhbnk+Pj4oXG4gIHNvdXJjZXNPYmplY3Q6IFRcbik6IE9ic2VydmFibGU8eyBbSyBpbiBrZXlvZiBUXTogT2JzZXJ2ZWRWYWx1ZU9mPFRbS10+IH0+O1xuXG4vKipcbiAqIENvbWJpbmVzIG11bHRpcGxlIE9ic2VydmFibGVzIHRvIGNyZWF0ZSBhbiBPYnNlcnZhYmxlIHdob3NlIHZhbHVlcyBhcmVcbiAqIGNhbGN1bGF0ZWQgZnJvbSB0aGUgbGF0ZXN0IHZhbHVlcyBvZiBlYWNoIG9mIGl0cyBpbnB1dCBPYnNlcnZhYmxlcy5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+V2hlbmV2ZXIgYW55IGlucHV0IE9ic2VydmFibGUgZW1pdHMgYSB2YWx1ZSwgaXRcbiAqIGNvbXB1dGVzIGEgZm9ybXVsYSB1c2luZyB0aGUgbGF0ZXN0IHZhbHVlcyBmcm9tIGFsbCB0aGUgaW5wdXRzLCB0aGVuIGVtaXRzXG4gKiB0aGUgb3V0cHV0IG9mIHRoYXQgZm9ybXVsYS48L3NwYW4+XG4gKlxuICogIVtdKGNvbWJpbmVMYXRlc3QucG5nKVxuICpcbiAqIGBjb21iaW5lTGF0ZXN0YCBjb21iaW5lcyB0aGUgdmFsdWVzIGZyb20gYWxsIHRoZSBPYnNlcnZhYmxlcyBwYXNzZWQgaW4gdGhlXG4gKiBvYnNlcnZhYmxlcyBhcnJheS4gVGhpcyBpcyBkb25lIGJ5IHN1YnNjcmliaW5nIHRvIGVhY2ggT2JzZXJ2YWJsZSBpbiBvcmRlciBhbmQsXG4gKiB3aGVuZXZlciBhbnkgT2JzZXJ2YWJsZSBlbWl0cywgY29sbGVjdGluZyBhbiBhcnJheSBvZiB0aGUgbW9zdCByZWNlbnRcbiAqIHZhbHVlcyBmcm9tIGVhY2ggT2JzZXJ2YWJsZS4gU28gaWYgeW91IHBhc3MgYG5gIE9ic2VydmFibGVzIHRvIHRoaXMgb3BlcmF0b3IsXG4gKiB0aGUgcmV0dXJuZWQgT2JzZXJ2YWJsZSB3aWxsIGFsd2F5cyBlbWl0IGFuIGFycmF5IG9mIGBuYCB2YWx1ZXMsIGluIGFuIG9yZGVyXG4gKiBjb3JyZXNwb25kaW5nIHRvIHRoZSBvcmRlciBvZiB0aGUgcGFzc2VkIE9ic2VydmFibGVzICh0aGUgdmFsdWUgZnJvbSB0aGUgZmlyc3QgT2JzZXJ2YWJsZVxuICogd2lsbCBiZSBhdCBpbmRleCAwIG9mIHRoZSBhcnJheSBhbmQgc28gb24pLlxuICpcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIGBjb21iaW5lTGF0ZXN0YCBhY2NlcHRzIGFuIGFycmF5IG9mIE9ic2VydmFibGVzLiBOb3RlIHRoYXQgYW4gYXJyYXkgb2ZcbiAqIE9ic2VydmFibGVzIGlzIGEgZ29vZCBjaG9pY2UsIGlmIHlvdSBkb24ndCBrbm93IGJlZm9yZWhhbmQgaG93IG1hbnkgT2JzZXJ2YWJsZXNcbiAqIHlvdSB3aWxsIGNvbWJpbmUuIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgd2lsbCByZXN1bHQgaW4gYW4gT2JzZXJ2YWJsZSB0aGF0XG4gKiBjb21wbGV0ZXMgaW1tZWRpYXRlbHkuXG4gKlxuICogVG8gZW5zdXJlIHRoZSBvdXRwdXQgYXJyYXkgYWx3YXlzIGhhcyB0aGUgc2FtZSBsZW5ndGgsIGBjb21iaW5lTGF0ZXN0YCB3aWxsXG4gKiBhY3R1YWxseSB3YWl0IGZvciBhbGwgaW5wdXQgT2JzZXJ2YWJsZXMgdG8gZW1pdCBhdCBsZWFzdCBvbmNlLFxuICogYmVmb3JlIGl0IHN0YXJ0cyBlbWl0dGluZyByZXN1bHRzLiBUaGlzIG1lYW5zIGlmIHNvbWUgT2JzZXJ2YWJsZSBlbWl0c1xuICogdmFsdWVzIGJlZm9yZSBvdGhlciBPYnNlcnZhYmxlcyBzdGFydGVkIGVtaXR0aW5nLCBhbGwgdGhlc2UgdmFsdWVzIGJ1dCB0aGUgbGFzdFxuICogd2lsbCBiZSBsb3N0LiBPbiB0aGUgb3RoZXIgaGFuZCwgaWYgc29tZSBPYnNlcnZhYmxlIGRvZXMgbm90IGVtaXQgYSB2YWx1ZSBidXRcbiAqIGNvbXBsZXRlcywgcmVzdWx0aW5nIE9ic2VydmFibGUgd2lsbCBjb21wbGV0ZSBhdCB0aGUgc2FtZSBtb21lbnQgd2l0aG91dFxuICogZW1pdHRpbmcgYW55dGhpbmcsIHNpbmNlIGl0IHdpbGwgbm93IGJlIGltcG9zc2libGUgdG8gaW5jbHVkZSBhIHZhbHVlIGZyb20gdGhlXG4gKiBjb21wbGV0ZWQgT2JzZXJ2YWJsZSBpbiB0aGUgcmVzdWx0aW5nIGFycmF5LiBBbHNvLCBpZiBzb21lIGlucHV0IE9ic2VydmFibGUgZG9lc1xuICogbm90IGVtaXQgYW55IHZhbHVlIGFuZCBuZXZlciBjb21wbGV0ZXMsIGBjb21iaW5lTGF0ZXN0YCB3aWxsIGFsc28gbmV2ZXIgZW1pdFxuICogYW5kIG5ldmVyIGNvbXBsZXRlLCBzaW5jZSwgYWdhaW4sIGl0IHdpbGwgd2FpdCBmb3IgYWxsIHN0cmVhbXMgdG8gZW1pdCBzb21lXG4gKiB2YWx1ZS5cbiAqXG4gKiBJZiBhdCBsZWFzdCBvbmUgT2JzZXJ2YWJsZSB3YXMgcGFzc2VkIHRvIGBjb21iaW5lTGF0ZXN0YCBhbmQgYWxsIHBhc3NlZCBPYnNlcnZhYmxlc1xuICogZW1pdHRlZCBzb21ldGhpbmcsIHRoZSByZXN1bHRpbmcgT2JzZXJ2YWJsZSB3aWxsIGNvbXBsZXRlIHdoZW4gYWxsIGNvbWJpbmVkXG4gKiBzdHJlYW1zIGNvbXBsZXRlLiBTbyBldmVuIGlmIHNvbWUgT2JzZXJ2YWJsZSBjb21wbGV0ZXMsIHRoZSByZXN1bHQgb2ZcbiAqIGBjb21iaW5lTGF0ZXN0YCB3aWxsIHN0aWxsIGVtaXQgdmFsdWVzIHdoZW4gb3RoZXIgT2JzZXJ2YWJsZXMgZG8uIEluIGNhc2VcbiAqIG9mIGEgY29tcGxldGVkIE9ic2VydmFibGUsIGl0cyB2YWx1ZSBmcm9tIG5vdyBvbiB3aWxsIGFsd2F5cyBiZSB0aGUgbGFzdFxuICogZW1pdHRlZCB2YWx1ZS4gT24gdGhlIG90aGVyIGhhbmQsIGlmIGFueSBPYnNlcnZhYmxlIGVycm9ycywgYGNvbWJpbmVMYXRlc3RgXG4gKiB3aWxsIGVycm9yIGltbWVkaWF0ZWx5IGFzIHdlbGwsIGFuZCBhbGwgb3RoZXIgT2JzZXJ2YWJsZXMgd2lsbCBiZSB1bnN1YnNjcmliZWQuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBDb21iaW5lIHR3byB0aW1lciBPYnNlcnZhYmxlc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyB0aW1lciwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGZpcnN0VGltZXIgPSB0aW1lcigwLCAxMDAwKTsgLy8gZW1pdCAwLCAxLCAyLi4uIGFmdGVyIGV2ZXJ5IHNlY29uZCwgc3RhcnRpbmcgZnJvbSBub3dcbiAqIGNvbnN0IHNlY29uZFRpbWVyID0gdGltZXIoNTAwLCAxMDAwKTsgLy8gZW1pdCAwLCAxLCAyLi4uIGFmdGVyIGV2ZXJ5IHNlY29uZCwgc3RhcnRpbmcgMCw1cyBmcm9tIG5vd1xuICogY29uc3QgY29tYmluZWRUaW1lcnMgPSBjb21iaW5lTGF0ZXN0KFtmaXJzdFRpbWVyLCBzZWNvbmRUaW1lcl0pO1xuICogY29tYmluZWRUaW1lcnMuc3Vic2NyaWJlKHZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSk7XG4gKiAvLyBMb2dzXG4gKiAvLyBbMCwgMF0gYWZ0ZXIgMC41c1xuICogLy8gWzEsIDBdIGFmdGVyIDFzXG4gKiAvLyBbMSwgMV0gYWZ0ZXIgMS41c1xuICogLy8gWzIsIDFdIGFmdGVyIDJzXG4gKiBgYGBcbiAqXG4gKiBDb21iaW5lIGEgZGljdGlvbmFyeSBvZiBPYnNlcnZhYmxlc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgZGVsYXksIHN0YXJ0V2l0aCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IG9ic2VydmFibGVzID0ge1xuICogICBhOiBvZigxKS5waXBlKGRlbGF5KDEwMDApLCBzdGFydFdpdGgoMCkpLFxuICogICBiOiBvZig1KS5waXBlKGRlbGF5KDUwMDApLCBzdGFydFdpdGgoMCkpLFxuICogICBjOiBvZigxMCkucGlwZShkZWxheSgxMDAwMCksIHN0YXJ0V2l0aCgwKSlcbiAqIH07XG4gKiBjb25zdCBjb21iaW5lZCA9IGNvbWJpbmVMYXRlc3Qob2JzZXJ2YWJsZXMpO1xuICogY29tYmluZWQuc3Vic2NyaWJlKHZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSk7XG4gKiAvLyBMb2dzXG4gKiAvLyB7IGE6IDAsIGI6IDAsIGM6IDAgfSBpbW1lZGlhdGVseVxuICogLy8geyBhOiAxLCBiOiAwLCBjOiAwIH0gYWZ0ZXIgMXNcbiAqIC8vIHsgYTogMSwgYjogNSwgYzogMCB9IGFmdGVyIDVzXG4gKiAvLyB7IGE6IDEsIGI6IDUsIGM6IDEwIH0gYWZ0ZXIgMTBzXG4gKiBgYGBcbiAqXG4gKiBDb21iaW5lIGFuIGFycmF5IG9mIE9ic2VydmFibGVzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBkZWxheSwgc3RhcnRXaXRoLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgb2JzZXJ2YWJsZXMgPSBbMSwgNSwgMTBdLm1hcChcbiAqICAgbiA9PiBvZihuKS5waXBlKFxuICogICAgIGRlbGF5KG4gKiAxMDAwKSwgLy8gZW1pdCAwIGFuZCB0aGVuIGVtaXQgbiBhZnRlciBuIHNlY29uZHNcbiAqICAgICBzdGFydFdpdGgoMClcbiAqICAgKVxuICogKTtcbiAqIGNvbnN0IGNvbWJpbmVkID0gY29tYmluZUxhdGVzdChvYnNlcnZhYmxlcyk7XG4gKiBjb21iaW5lZC5zdWJzY3JpYmUodmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpKTtcbiAqIC8vIExvZ3NcbiAqIC8vIFswLCAwLCAwXSBpbW1lZGlhdGVseVxuICogLy8gWzEsIDAsIDBdIGFmdGVyIDFzXG4gKiAvLyBbMSwgNSwgMF0gYWZ0ZXIgNXNcbiAqIC8vIFsxLCA1LCAxMF0gYWZ0ZXIgMTBzXG4gKiBgYGBcbiAqXG4gKiBVc2UgbWFwIG9wZXJhdG9yIHRvIGR5bmFtaWNhbGx5IGNhbGN1bGF0ZSB0aGUgQm9keS1NYXNzIEluZGV4XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBjb21iaW5lTGF0ZXN0LCBtYXAgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCB3ZWlnaHQgPSBvZig3MCwgNzIsIDc2LCA3OSwgNzUpO1xuICogY29uc3QgaGVpZ2h0ID0gb2YoMS43NiwgMS43NywgMS43OCk7XG4gKiBjb25zdCBibWkgPSBjb21iaW5lTGF0ZXN0KFt3ZWlnaHQsIGhlaWdodF0pLnBpcGUoXG4gKiAgIG1hcCgoW3csIGhdKSA9PiB3IC8gKGggKiBoKSksXG4gKiApO1xuICogYm1pLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKCdCTUkgaXMgJyArIHgpKTtcbiAqXG4gKiAvLyBXaXRoIG91dHB1dCB0byBjb25zb2xlOlxuICogLy8gQk1JIGlzIDI0LjIxMjI5MzM4ODQyOTc1M1xuICogLy8gQk1JIGlzIDIzLjkzOTQ4MDk5MjA1MjA5XG4gKiAvLyBCTUkgaXMgMjMuNjcxMjUzNjI5NTkyMjIyXG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBjb21iaW5lTGF0ZXN0QWxsfVxuICogQHNlZSB7QGxpbmsgbWVyZ2V9XG4gKiBAc2VlIHtAbGluayB3aXRoTGF0ZXN0RnJvbX1cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGVJbnB1dH0gW29ic2VydmFibGVzXSBBbiBhcnJheSBvZiBpbnB1dCBPYnNlcnZhYmxlcyB0byBjb21iaW5lIHdpdGggZWFjaCBvdGhlci5cbiAqIEFuIGFycmF5IG9mIE9ic2VydmFibGVzIG11c3QgYmUgZ2l2ZW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW3Byb2plY3RdIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIHByb2plY3QgdGhlIHZhbHVlcyBmcm9tXG4gKiB0aGUgY29tYmluZWQgbGF0ZXN0IHZhbHVlcyBpbnRvIGEgbmV3IHZhbHVlIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyTGlrZX0gW3NjaGVkdWxlcj1udWxsXSBUaGUge0BsaW5rIFNjaGVkdWxlckxpa2V9IHRvIHVzZSBmb3Igc3Vic2NyaWJpbmcgdG9cbiAqIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgb2YgcHJvamVjdGVkIHZhbHVlcyBmcm9tIHRoZSBtb3N0IHJlY2VudFxuICogdmFsdWVzIGZyb20gZWFjaCBpbnB1dCBPYnNlcnZhYmxlLCBvciBhbiBhcnJheSBvZiB0aGUgbW9zdCByZWNlbnQgdmFsdWVzIGZyb21cbiAqIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+LCBSPiguLi5hcmdzOiBhbnlbXSk6IE9ic2VydmFibGU8Uj4gfCBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPltdPiB7XG4gIGNvbnN0IHNjaGVkdWxlciA9IHBvcFNjaGVkdWxlcihhcmdzKTtcbiAgY29uc3QgcmVzdWx0U2VsZWN0b3IgPSBwb3BSZXN1bHRTZWxlY3RvcihhcmdzKTtcblxuICBjb25zdCB7IGFyZ3M6IG9ic2VydmFibGVzLCBrZXlzIH0gPSBhcmdzQXJnQXJyYXlPck9iamVjdChhcmdzKTtcblxuICBpZiAob2JzZXJ2YWJsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSWYgbm8gb2JzZXJ2YWJsZXMgYXJlIHBhc3NlZCwgb3Igc29tZW9uZSBoYXMgcGFzc2VkIGFuIGVtcHR5IGFycmF5XG4gICAgLy8gb2Ygb2JzZXJ2YWJsZXMsIG9yIGV2ZW4gYW4gZW1wdHkgb2JqZWN0IFBPSk8sIHdlIG5lZWQgdG8ganVzdFxuICAgIC8vIGNvbXBsZXRlIChFTVBUWSksIGJ1dCB3ZSBoYXZlIHRvIGhvbm9yIHRoZSBzY2hlZHVsZXIgcHJvdmlkZWQgaWYgYW55LlxuICAgIHJldHVybiBmcm9tKFtdLCBzY2hlZHVsZXIgYXMgYW55KTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPltdPihcbiAgICBjb21iaW5lTGF0ZXN0SW5pdChcbiAgICAgIG9ic2VydmFibGVzIGFzIE9ic2VydmFibGVJbnB1dDxPYnNlcnZlZFZhbHVlT2Y8Tz4+W10sXG4gICAgICBzY2hlZHVsZXIsXG4gICAgICBrZXlzXG4gICAgICAgID8gLy8gQSBoYW5kbGVyIGZvciBzY3J1YmJpbmcgdGhlIGFycmF5IG9mIGFyZ3MgaW50byBhIGRpY3Rpb25hcnkuXG4gICAgICAgICAgKHZhbHVlcykgPT4gY3JlYXRlT2JqZWN0KGtleXMsIHZhbHVlcylcbiAgICAgICAgOiAvLyBBIHBhc3N0aHJvdWdoIHRvIGp1c3QgcmV0dXJuIHRoZSBhcnJheVxuICAgICAgICAgIGlkZW50aXR5XG4gICAgKVxuICApO1xuXG4gIHJldHVybiByZXN1bHRTZWxlY3RvciA/IChyZXN1bHQucGlwZShtYXBPbmVPck1hbnlBcmdzKHJlc3VsdFNlbGVjdG9yKSkgYXMgT2JzZXJ2YWJsZTxSPikgOiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0SW5pdChcbiAgb2JzZXJ2YWJsZXM6IE9ic2VydmFibGVJbnB1dDxhbnk+W10sXG4gIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UsXG4gIHZhbHVlVHJhbnNmb3JtOiAodmFsdWVzOiBhbnlbXSkgPT4gYW55ID0gaWRlbnRpdHlcbikge1xuICByZXR1cm4gKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4ge1xuICAgIC8vIFRoZSBvdXRlciBzdWJzY3JpcHRpb24uIFdlJ3JlIGNhcHR1cmluZyB0aGlzIGluIGEgZnVuY3Rpb25cbiAgICAvLyBiZWNhdXNlIHdlIG1heSBoYXZlIHRvIHNjaGVkdWxlIGl0LlxuICAgIG1heWJlU2NoZWR1bGUoXG4gICAgICBzY2hlZHVsZXIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBvYnNlcnZhYmxlcztcbiAgICAgICAgLy8gQSBzdG9yZSBmb3IgdGhlIHZhbHVlcyBlYWNoIG9ic2VydmFibGUgaGFzIGVtaXR0ZWQgc28gZmFyLiBXZSBtYXRjaCBvYnNlcnZhYmxlIHRvIHZhbHVlIG9uIGluZGV4LlxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgLy8gVGhlIG51bWJlciBvZiBjdXJyZW50bHkgYWN0aXZlIHN1YnNjcmlwdGlvbnMsIGFzIHRoZXkgY29tcGxldGUsIHdlIGRlY3JlbWVudCB0aGlzIG51bWJlciB0byBzZWUgaWZcbiAgICAgICAgLy8gd2UgYXJlIGFsbCBkb25lIGNvbWJpbmluZyB2YWx1ZXMsIHNvIHdlIGNhbiBjb21wbGV0ZSB0aGUgcmVzdWx0LlxuICAgICAgICBsZXQgYWN0aXZlID0gbGVuZ3RoO1xuICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIGlubmVyIHNvdXJjZXMgdGhhdCBzdGlsbCBoYXZlbid0IGVtaXR0ZWQgdGhlIGZpcnN0IHZhbHVlXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdHJhY2sgdGhpcyBiZWNhdXNlIGFsbCBzb3VyY2VzIG5lZWQgdG8gZW1pdCBvbmUgdmFsdWUgaW4gb3JkZXJcbiAgICAgICAgLy8gdG8gc3RhcnQgZW1pdHRpbmcgdmFsdWVzLlxuICAgICAgICBsZXQgcmVtYWluaW5nRmlyc3RWYWx1ZXMgPSBsZW5ndGg7XG4gICAgICAgIC8vIFRoZSBsb29wIHRvIGtpY2sgb2ZmIHN1YnNjcmlwdGlvbi4gV2UncmUga2V5aW5nIGV2ZXJ5dGhpbmcgb24gaW5kZXggYGlgIHRvIHJlbGF0ZSB0aGUgb2JzZXJ2YWJsZXMgcGFzc2VkXG4gICAgICAgIC8vIGluIHRvIHRoZSBzbG90IGluIHRoZSBvdXRwdXQgYXJyYXkgb3IgdGhlIGtleSBpbiB0aGUgYXJyYXkgb2Yga2V5cyBpbiB0aGUgb3V0cHV0IGRpY3Rpb25hcnkuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBtYXliZVNjaGVkdWxlKFxuICAgICAgICAgICAgc2NoZWR1bGVyLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBmcm9tKG9ic2VydmFibGVzW2ldLCBzY2hlZHVsZXIgYXMgYW55KTtcbiAgICAgICAgICAgICAgbGV0IGhhc0ZpcnN0VmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoXG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gd2UgZ2V0IGEgdmFsdWUsIHJlY29yZCBpdCBpbiBvdXIgc2V0IG9mIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzRmlyc3RWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IHZhbHVlLCByZWNvcmQgdGhhdC5cbiAgICAgICAgICAgICAgICAgICAgICBoYXNGaXJzdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdGaXJzdFZhbHVlcy0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVtYWluaW5nRmlyc3RWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSdyZSBub3Qgd2FpdGluZyBmb3IgYW55IG1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCB2YWx1ZXMsIHNvIHdlIGNhbiBlbWl0IVxuICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZVRyYW5zZm9ybSh2YWx1ZXMuc2xpY2UoKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gV2Ugb25seSBjb21wbGV0ZSB0aGUgcmVzdWx0IGlmIHdlIGhhdmUgbm8gbW9yZSBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBpbm5lciBvYnNlcnZhYmxlcy5cbiAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Vic2NyaWJlclxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmVyXG4gICAgKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBBIHNtYWxsIHV0aWxpdHkgdG8gaGFuZGxlIHRoZSBjb3VwbGUgb2YgbG9jYXRpb25zIHdoZXJlIHdlIHdhbnQgdG8gc2NoZWR1bGUgaWYgYSBzY2hlZHVsZXIgd2FzIHByb3ZpZGVkLFxuICogYnV0IHdlIGRvbid0IGlmIHRoZXJlIHdhcyBubyBzY2hlZHVsZXIuXG4gKi9cbmZ1bmN0aW9uIG1heWJlU2NoZWR1bGUoc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlIHwgdW5kZWZpbmVkLCBleGVjdXRlOiAoKSA9PiB2b2lkLCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikge1xuICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmlwdGlvbiwgc2NoZWR1bGVyLCBleGVjdXRlKTtcbiAgfSBlbHNlIHtcbiAgICBleGVjdXRlKCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5cbi8qKlxuICogQSBwcm9jZXNzIGVtYm9keWluZyB0aGUgZ2VuZXJhbCBcIm1lcmdlXCIgc3RyYXRlZ3kuIFRoaXMgaXMgdXNlZCBpblxuICogYG1lcmdlTWFwYCBhbmQgYG1lcmdlU2NhbmAgYmVjYXVzZSB0aGUgbG9naWMgaXMgb3RoZXJ3aXNlIG5lYXJseSBpZGVudGljYWwuXG4gKiBAcGFyYW0gc291cmNlIFRoZSBvcmlnaW5hbCBzb3VyY2Ugb2JzZXJ2YWJsZVxuICogQHBhcmFtIHN1YnNjcmliZXIgVGhlIGNvbnN1bWVyIHN1YnNjcmliZXJcbiAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0aW9uIGZ1bmN0aW9uIHRvIGdldCBvdXIgaW5uZXIgc291cmNlc1xuICogQHBhcmFtIGNvbmN1cnJlbnQgVGhlIG51bWJlciBvZiBjb25jdXJyZW50IGlubmVyIHN1YnNjcmlwdGlvbnNcbiAqIEBwYXJhbSBvbkJlZm9yZU5leHQgQWRkaXRpb25hbCBsb2dpYyB0byBhcHBseSBiZWZvcmUgbmV4dGluZyB0byBvdXIgY29uc3VtZXJcbiAqIEBwYXJhbSBleHBhbmQgSWYgYHRydWVgIHRoaXMgd2lsbCBwZXJmb3JtIGFuIFwiZXhwYW5kXCIgc3RyYXRlZ3ksIHdoaWNoIGRpZmZlcnMgb25seVxuICogaW4gdGhhdCBpdCByZWN1cnNlcywgYW5kIHRoZSBpbm5lciBzdWJzY3JpcHRpb24gbXVzdCBiZSBzY2hlZHVsZS1hYmxlLlxuICogQHBhcmFtIGlubmVyU3ViU2NoZWR1bGVyIEEgc2NoZWR1bGVyIHRvIHVzZSB0byBzY2hlZHVsZSBpbm5lciBzdWJzY3JpcHRpb25zLFxuICogdGhpcyBpcyB0byBzdXBwb3J0IHRoZSBleHBhbmQgc3RyYXRlZ3ksIG1vc3RseSwgYW5kIHNob3VsZCBiZSBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUludGVybmFsczxULCBSPihcbiAgc291cmNlOiBPYnNlcnZhYmxlPFQ+LFxuICBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFI+LFxuICBwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGVJbnB1dDxSPixcbiAgY29uY3VycmVudDogbnVtYmVyLFxuICBvbkJlZm9yZU5leHQ/OiAoaW5uZXJWYWx1ZTogUikgPT4gdm9pZCxcbiAgZXhwYW5kPzogYm9vbGVhbixcbiAgaW5uZXJTdWJTY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlLFxuICBhZGRpdGlvbmFsRmluYWxpemVyPzogKCkgPT4gdm9pZFxuKSB7XG4gIC8vIEJ1ZmZlcmVkIHZhbHVlcywgaW4gdGhlIGV2ZW50IG9mIGdvaW5nIG92ZXIgb3VyIGNvbmN1cnJlbmN5IGxpbWl0XG4gIGNvbnN0IGJ1ZmZlcjogVFtdID0gW107XG4gIC8vIFRoZSBudW1iZXIgb2YgYWN0aXZlIGlubmVyIHN1YnNjcmlwdGlvbnMuXG4gIGxldCBhY3RpdmUgPSAwO1xuICAvLyBBbiBpbmRleCB0byBwYXNzIHRvIG91ciBhY2N1bXVsYXRvciBmdW5jdGlvblxuICBsZXQgaW5kZXggPSAwO1xuICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgb3V0ZXIgc291cmNlIGhhcyBjb21wbGV0ZWQuXG4gIGxldCBpc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgd2UgY2FuIGNvbXBsZXRlIG91ciByZXN1bHQgb3Igbm90LlxuICAgKi9cbiAgY29uc3QgY2hlY2tDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAvLyBJZiB0aGUgb3V0ZXIgaGFzIGNvbXBsZXRlZCwgYW5kIG5vdGhpbmcgaXMgbGVmdCBpbiB0aGUgYnVmZmVyLFxuICAgIC8vIGFuZCB3ZSBkb24ndCBoYXZlIGFueSBhY3RpdmUgaW5uZXIgc3Vic2NyaXB0aW9ucywgdGhlbiB3ZSBjYW5cbiAgICAvLyBFbWl0IHRoZSBzdGF0ZSBhbmQgY29tcGxldGUuXG4gICAgaWYgKGlzQ29tcGxldGUgJiYgIWJ1ZmZlci5sZW5ndGggJiYgIWFjdGl2ZSkge1xuICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBJZiB3ZSdyZSB1bmRlciBvdXIgY29uY3VycmVuY3kgbGltaXQsIGp1c3Qgc3RhcnQgdGhlIGlubmVyIHN1YnNjcmlwdGlvbiwgb3RoZXJ3aXNlIGJ1ZmZlciBhbmQgd2FpdC5cbiAgY29uc3Qgb3V0ZXJOZXh0ID0gKHZhbHVlOiBUKSA9PiAoYWN0aXZlIDwgY29uY3VycmVudCA/IGRvSW5uZXJTdWIodmFsdWUpIDogYnVmZmVyLnB1c2godmFsdWUpKTtcblxuICBjb25zdCBkb0lubmVyU3ViID0gKHZhbHVlOiBUKSA9PiB7XG4gICAgLy8gSWYgd2UncmUgZXhwYW5kaW5nLCB3ZSBuZWVkIHRvIGVtaXQgdGhlIG91dGVyIHZhbHVlcyBhbmQgdGhlIGlubmVyIHZhbHVlc1xuICAgIC8vIGFzIHRoZSBpbm5lcnMgd2lsbCBcImJlY29tZSBvdXRlcnNcIiBpbiBhIHdheSBhcyB0aGV5IGFyZSByZWN1cnNpdmVseSBmZWRcbiAgICAvLyBiYWNrIHRvIHRoZSBwcm9qZWN0aW9uIG1lY2hhbmlzbS5cbiAgICBleHBhbmQgJiYgc3Vic2NyaWJlci5uZXh0KHZhbHVlIGFzIGFueSk7XG5cbiAgICAvLyBJbmNyZW1lbnQgdGhlIG51bWJlciBvZiBhY3RpdmUgc3Vic2NyaXB0aW9ucyBzbyB3ZSBjYW4gdHJhY2sgaXRcbiAgICAvLyBhZ2FpbnN0IG91ciBjb25jdXJyZW5jeSBsaW1pdCBsYXRlci5cbiAgICBhY3RpdmUrKztcblxuICAgIC8vIEEgZmxhZyB1c2VkIHRvIHNob3cgdGhhdCB0aGUgaW5uZXIgb2JzZXJ2YWJsZSBjb21wbGV0ZWQuXG4gICAgLy8gVGhpcyBpcyBjaGVja2VkIGR1cmluZyBmaW5hbGl6YXRpb24gdG8gc2VlIGlmIHdlIHNob3VsZFxuICAgIC8vIG1vdmUgdG8gdGhlIG5leHQgaXRlbSBpbiB0aGUgYnVmZmVyLCBpZiB0aGVyZSBpcyBvbi5cbiAgICBsZXQgaW5uZXJDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgLy8gU3RhcnQgb3VyIGlubmVyIHN1YnNjcmlwdGlvbi5cbiAgICBpbm5lckZyb20ocHJvamVjdCh2YWx1ZSwgaW5kZXgrKykpLnN1YnNjcmliZShcbiAgICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihcbiAgICAgICAgc3Vic2NyaWJlcixcbiAgICAgICAgKGlubmVyVmFsdWUpID0+IHtcbiAgICAgICAgICAvLyBgbWVyZ2VTY2FuYCBoYXMgYWRkaXRpb25hbCBoYW5kbGluZyBoZXJlLiBGb3IgZXhhbXBsZVxuICAgICAgICAgIC8vIHRha2luZyB0aGUgaW5uZXIgdmFsdWUgYW5kIHVwZGF0aW5nIHN0YXRlLlxuICAgICAgICAgIG9uQmVmb3JlTmV4dD8uKGlubmVyVmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGV4cGFuZCkge1xuICAgICAgICAgICAgLy8gSWYgd2UncmUgZXhwYW5kaW5nLCB0aGVuIGp1c3QgcmVjdXJzZSBiYWNrIHRvIG91ciBvdXRlclxuICAgICAgICAgICAgLy8gaGFuZGxlci4gSXQgd2lsbCBlbWl0IHRoZSB2YWx1ZSBmaXJzdCB0aGluZy5cbiAgICAgICAgICAgIG91dGVyTmV4dChpbm5lclZhbHVlIGFzIGFueSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgZW1pdCB0aGUgaW5uZXIgdmFsdWUuXG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gRmxhZyB0aGF0IHdlIGhhdmUgY29tcGxldGVkLCBzbyB3ZSBrbm93IHRvIGNoZWNrIHRoZSBidWZmZXJcbiAgICAgICAgICAvLyBkdXJpbmcgZmluYWxpemF0aW9uLlxuICAgICAgICAgIGlubmVyQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICAvLyBFcnJvcnMgYXJlIHBhc3NlZCB0byB0aGUgZGVzdGluYXRpb24uXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIER1cmluZyBmaW5hbGl6YXRpb24sIGlmIHRoZSBpbm5lciBjb21wbGV0ZWQgKGl0IHdhc24ndCBlcnJvcmVkIG9yXG4gICAgICAgICAgLy8gY2FuY2VsbGVkKSwgdGhlbiB3ZSB3YW50IHRvIHRyeSB0aGUgbmV4dCBpdGVtIGluIHRoZSBidWZmZXIgaWZcbiAgICAgICAgICAvLyB0aGVyZSBpcyBvbmUuXG4gICAgICAgICAgaWYgKGlubmVyQ29tcGxldGUpIHtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gd3JhcCB0aGlzIGluIGEgdHJ5L2NhdGNoIGJlY2F1c2UgaXQgaGFwcGVucyBkdXJpbmdcbiAgICAgICAgICAgIC8vIGZpbmFsaXphdGlvbiwgcG9zc2libHkgYXN5bmNocm9ub3VzbHksIGFuZCB3ZSB3YW50IHRvIHBhc3NcbiAgICAgICAgICAgIC8vIGFueSBlcnJvcnMgdGhhdCBoYXBwZW4gKGxpa2UgaW4gYSBwcm9qZWN0aW9uIGZ1bmN0aW9uKSB0b1xuICAgICAgICAgICAgLy8gdGhlIG91dGVyIFN1YnNjcmliZXIuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyBJTk5FUiBTT1VSQ0UgQ09NUExFVEVcbiAgICAgICAgICAgICAgLy8gRGVjcmVtZW50IHRoZSBhY3RpdmUgY291bnQgdG8gZW5zdXJlIHRoYXQgdGhlIG5leHQgdGltZVxuICAgICAgICAgICAgICAvLyB3ZSB0cnkgdG8gY2FsbCBgZG9Jbm5lclN1YmAsIHRoZSBudW1iZXIgaXMgYWNjdXJhdGUuXG4gICAgICAgICAgICAgIGFjdGl2ZS0tO1xuICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIG1vcmUgdmFsdWVzIGluIHRoZSBidWZmZXIsIHRyeSB0byBwcm9jZXNzIHRob3NlXG4gICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGNhbGwgd2lsbCBpbmNyZW1lbnQgYGFjdGl2ZWAgYWhlYWQgb2YgdGhlXG4gICAgICAgICAgICAgIC8vIG5leHQgY29uZGl0aW9uYWwsIGlmIHRoZXJlIHdlcmUgYW55IG1vcmUgaW5uZXIgc3Vic2NyaXB0aW9uc1xuICAgICAgICAgICAgICAvLyB0byBzdGFydC5cbiAgICAgICAgICAgICAgd2hpbGUgKGJ1ZmZlci5sZW5ndGggJiYgYWN0aXZlIDwgY29uY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlcmVkVmFsdWUgPSBidWZmZXIuc2hpZnQoKSE7XG4gICAgICAgICAgICAgICAgLy8gUGFydGljdWxhcmx5IGZvciBgZXhwYW5kYCwgd2UgbmVlZCB0byBjaGVjayB0byBzZWUgaWYgYSBzY2hlZHVsZXIgd2FzIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgLy8gZm9yIHdoZW4gd2Ugd2FudCB0byBzdGFydCBvdXIgaW5uZXIgc3Vic2NyaXB0aW9uLiBPdGhlcndpc2UsIHdlIGp1c3Qgc3RhcnRcbiAgICAgICAgICAgICAgICAvLyBhcmUgbmV4dCBpbm5lciBzdWJzY3JpcHRpb24uXG4gICAgICAgICAgICAgICAgaWYgKGlubmVyU3ViU2NoZWR1bGVyKSB7XG4gICAgICAgICAgICAgICAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgaW5uZXJTdWJTY2hlZHVsZXIsICgpID0+IGRvSW5uZXJTdWIoYnVmZmVyZWRWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBkb0lubmVyU3ViKGJ1ZmZlcmVkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgd2UgY2FuIGNvbXBsZXRlLCBhbmQgY29tcGxldGUgaWYgc28uXG4gICAgICAgICAgICAgIGNoZWNrQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICAvLyBTdWJzY3JpYmUgdG8gb3VyIHNvdXJjZSBvYnNlcnZhYmxlLlxuICBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBvdXRlck5leHQsICgpID0+IHtcbiAgICAgIC8vIE91dGVyIGNvbXBsZXRlZCwgbWFrZSBhIG5vdGUgb2YgaXQsIGFuZCBjaGVjayB0byBzZWUgaWYgd2UgY2FuIGNvbXBsZXRlIGV2ZXJ5dGhpbmcuXG4gICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIGNoZWNrQ29tcGxldGUoKTtcbiAgICB9KVxuICApO1xuXG4gIC8vIEFkZGl0aW9uYWwgZmluYWxpemF0aW9uIChmb3Igd2hlbiB0aGUgZGVzdGluYXRpb24gaXMgdG9ybiBkb3duKS5cbiAgLy8gT3RoZXIgZmluYWxpemF0aW9uIGlzIGFkZGVkIGltcGxpY2l0bHkgdmlhIHN1YnNjcmlwdGlvbiBhYm92ZS5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBhZGRpdGlvbmFsRmluYWxpemVyPy4oKTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIE9wZXJhdG9yRnVuY3Rpb24sIE9ic2VydmVkVmFsdWVPZiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vbWFwJztcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgbWVyZ2VJbnRlcm5hbHMgfSBmcm9tICcuL21lcmdlSW50ZXJuYWxzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1hcDxULCBPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KFxuICBwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE8sXG4gIGNvbmN1cnJlbnQ/OiBudW1iZXJcbik6IE9wZXJhdG9yRnVuY3Rpb248VCwgT2JzZXJ2ZWRWYWx1ZU9mPE8+Pjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHJlc3VsdFNlbGVjdG9yYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYW4gaW5uZXIgYG1hcGAgaW5zdGVhZC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvcmVzdWx0U2VsZWN0b3IgKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1hcDxULCBPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KFxuICBwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE8sXG4gIHJlc3VsdFNlbGVjdG9yOiB1bmRlZmluZWQsXG4gIGNvbmN1cnJlbnQ/OiBudW1iZXJcbik6IE9wZXJhdG9yRnVuY3Rpb248VCwgT2JzZXJ2ZWRWYWx1ZU9mPE8+Pjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHJlc3VsdFNlbGVjdG9yYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYW4gaW5uZXIgYG1hcGAgaW5zdGVhZC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvcmVzdWx0U2VsZWN0b3IgKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1hcDxULCBSLCBPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KFxuICBwcm9qZWN0OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE8sXG4gIHJlc3VsdFNlbGVjdG9yOiAob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogT2JzZXJ2ZWRWYWx1ZU9mPE8+LCBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcikgPT4gUixcbiAgY29uY3VycmVudD86IG51bWJlclxuKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPjtcbi8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5cbi8qKlxuICogUHJvamVjdHMgZWFjaCBzb3VyY2UgdmFsdWUgdG8gYW4gT2JzZXJ2YWJsZSB3aGljaCBpcyBtZXJnZWQgaW4gdGhlIG91dHB1dFxuICogT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+TWFwcyBlYWNoIHZhbHVlIHRvIGFuIE9ic2VydmFibGUsIHRoZW4gZmxhdHRlbnMgYWxsIG9mXG4gKiB0aGVzZSBpbm5lciBPYnNlcnZhYmxlcyB1c2luZyB7QGxpbmsgbWVyZ2VBbGx9Ljwvc3Bhbj5cbiAqXG4gKiAhW10obWVyZ2VNYXAucG5nKVxuICpcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGl0ZW1zIGJhc2VkIG9uIGFwcGx5aW5nIGEgZnVuY3Rpb24gdGhhdCB5b3VcbiAqIHN1cHBseSB0byBlYWNoIGl0ZW0gZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUsIHdoZXJlIHRoYXQgZnVuY3Rpb25cbiAqIHJldHVybnMgYW4gT2JzZXJ2YWJsZSwgYW5kIHRoZW4gbWVyZ2luZyB0aG9zZSByZXN1bHRpbmcgT2JzZXJ2YWJsZXMgYW5kXG4gKiBlbWl0dGluZyB0aGUgcmVzdWx0cyBvZiB0aGlzIG1lcmdlci5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogTWFwIGFuZCBmbGF0dGVuIGVhY2ggbGV0dGVyIHRvIGFuIE9ic2VydmFibGUgdGlja2luZyBldmVyeSAxIHNlY29uZFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgbWVyZ2VNYXAsIGludGVydmFsLCBtYXAgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBsZXR0ZXJzID0gb2YoJ2EnLCAnYicsICdjJyk7XG4gKiBjb25zdCByZXN1bHQgPSBsZXR0ZXJzLnBpcGUoXG4gKiAgIG1lcmdlTWFwKHggPT4gaW50ZXJ2YWwoMTAwMCkucGlwZShtYXAoaSA9PiB4ICsgaSkpKVxuICogKTtcbiAqXG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIFJlc3VsdHMgaW4gdGhlIGZvbGxvd2luZzpcbiAqIC8vIGEwXG4gKiAvLyBiMFxuICogLy8gYzBcbiAqIC8vIGExXG4gKiAvLyBiMVxuICogLy8gYzFcbiAqIC8vIGNvbnRpbnVlcyB0byBsaXN0IGEsIGIsIGMgZXZlcnkgc2Vjb25kIHdpdGggcmVzcGVjdGl2ZSBhc2NlbmRpbmcgaW50ZWdlcnNcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcH1cbiAqIEBzZWUge0BsaW5rIGV4aGF1c3RNYXB9XG4gKiBAc2VlIHtAbGluayBtZXJnZX1cbiAqIEBzZWUge0BsaW5rIG1lcmdlQWxsfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VNYXBUb31cbiAqIEBzZWUge0BsaW5rIG1lcmdlU2Nhbn1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaE1hcH1cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHZhbHVlOiBULCA/aW5kZXg6IG51bWJlcik6IE9ic2VydmFibGVJbnB1dH0gcHJvamVjdCBBIGZ1bmN0aW9uXG4gKiB0aGF0LCB3aGVuIGFwcGxpZWQgdG8gYW4gaXRlbSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgcmV0dXJucyBhblxuICogT2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY29uY3VycmVudD1JbmZpbml0eV0gTWF4aW11bSBudW1iZXIgb2YgaW5wdXRcbiAqIE9ic2VydmFibGVzIGJlaW5nIHN1YnNjcmliZWQgdG8gY29uY3VycmVudGx5LlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHJlc3VsdCBvZlxuICogYXBwbHlpbmcgdGhlIHByb2plY3Rpb24gZnVuY3Rpb24gKGFuZCB0aGUgb3B0aW9uYWwgZGVwcmVjYXRlZFxuICogYHJlc3VsdFNlbGVjdG9yYCkgdG8gZWFjaCBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGFuZCBtZXJnaW5nXG4gKiB0aGUgcmVzdWx0cyBvZiB0aGUgT2JzZXJ2YWJsZXMgb2J0YWluZWQgZnJvbSB0aGlzIHRyYW5zZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXA8VCwgUiwgTyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PihcbiAgcHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPLFxuICByZXN1bHRTZWxlY3Rvcj86ICgob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogT2JzZXJ2ZWRWYWx1ZU9mPE8+LCBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcikgPT4gUikgfCBudW1iZXIsXG4gIGNvbmN1cnJlbnQ6IG51bWJlciA9IEluZmluaXR5XG4pOiBPcGVyYXRvckZ1bmN0aW9uPFQsIE9ic2VydmVkVmFsdWVPZjxPPiB8IFI+IHtcbiAgaWYgKGlzRnVuY3Rpb24ocmVzdWx0U2VsZWN0b3IpKSB7XG4gICAgLy8gREVQUkVDQVRFRCBQQVRIXG4gICAgcmV0dXJuIG1lcmdlTWFwKChhLCBpKSA9PiBtYXAoKGI6IGFueSwgaWk6IG51bWJlcikgPT4gcmVzdWx0U2VsZWN0b3IoYSwgYiwgaSwgaWkpKShpbm5lckZyb20ocHJvamVjdChhLCBpKSkpLCBjb25jdXJyZW50KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdudW1iZXInKSB7XG4gICAgY29uY3VycmVudCA9IHJlc3VsdFNlbGVjdG9yO1xuICB9XG5cbiAgcmV0dXJuIG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4gbWVyZ2VJbnRlcm5hbHMoc291cmNlLCBzdWJzY3JpYmVyLCBwcm9qZWN0LCBjb25jdXJyZW50KSk7XG59XG4iLCAiaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICcuL21lcmdlTWFwJztcbmltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi4vdXRpbC9pZGVudGl0eSc7XG5pbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uLCBPYnNlcnZhYmxlSW5wdXQsIE9ic2VydmVkVmFsdWVPZiB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBDb252ZXJ0cyBhIGhpZ2hlci1vcmRlciBPYnNlcnZhYmxlIGludG8gYSBmaXJzdC1vcmRlciBPYnNlcnZhYmxlIHdoaWNoXG4gKiBjb25jdXJyZW50bHkgZGVsaXZlcnMgYWxsIHZhbHVlcyB0aGF0IGFyZSBlbWl0dGVkIG9uIHRoZSBpbm5lciBPYnNlcnZhYmxlcy5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+RmxhdHRlbnMgYW4gT2JzZXJ2YWJsZS1vZi1PYnNlcnZhYmxlcy48L3NwYW4+XG4gKlxuICogIVtdKG1lcmdlQWxsLnBuZylcbiAqXG4gKiBgbWVyZ2VBbGxgIHN1YnNjcmliZXMgdG8gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIE9ic2VydmFibGVzLCBhbHNvIGtub3duIGFzXG4gKiBhIGhpZ2hlci1vcmRlciBPYnNlcnZhYmxlLiBFYWNoIHRpbWUgaXQgb2JzZXJ2ZXMgb25lIG9mIHRoZXNlIGVtaXR0ZWQgaW5uZXJcbiAqIE9ic2VydmFibGVzLCBpdCBzdWJzY3JpYmVzIHRvIHRoYXQgYW5kIGRlbGl2ZXJzIGFsbCB0aGUgdmFsdWVzIGZyb20gdGhlXG4gKiBpbm5lciBPYnNlcnZhYmxlIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS4gVGhlIG91dHB1dCBPYnNlcnZhYmxlIG9ubHlcbiAqIGNvbXBsZXRlcyBvbmNlIGFsbCBpbm5lciBPYnNlcnZhYmxlcyBoYXZlIGNvbXBsZXRlZC4gQW55IGVycm9yIGRlbGl2ZXJlZCBieVxuICogYSBpbm5lciBPYnNlcnZhYmxlIHdpbGwgYmUgaW1tZWRpYXRlbHkgZW1pdHRlZCBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBTcGF3biBhIG5ldyBpbnRlcnZhbCBPYnNlcnZhYmxlIGZvciBlYWNoIGNsaWNrIGV2ZW50LCBhbmQgYmxlbmQgdGhlaXIgb3V0cHV0cyBhcyBvbmUgT2JzZXJ2YWJsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIG1hcCwgaW50ZXJ2YWwsIG1lcmdlQWxsIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IGhpZ2hlck9yZGVyID0gY2xpY2tzLnBpcGUobWFwKCgpID0+IGludGVydmFsKDEwMDApKSk7XG4gKiBjb25zdCBmaXJzdE9yZGVyID0gaGlnaGVyT3JkZXIucGlwZShtZXJnZUFsbCgpKTtcbiAqXG4gKiBmaXJzdE9yZGVyLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqIGBgYFxuICpcbiAqIENvdW50IGZyb20gMCB0byA5IGV2ZXJ5IHNlY29uZCBmb3IgZWFjaCBjbGljaywgYnV0IG9ubHkgYWxsb3cgMiBjb25jdXJyZW50IHRpbWVyc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIG1hcCwgaW50ZXJ2YWwsIHRha2UsIG1lcmdlQWxsIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IGhpZ2hlck9yZGVyID0gY2xpY2tzLnBpcGUoXG4gKiAgIG1hcCgoKSA9PiBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoMTApKSlcbiAqICk7XG4gKiBjb25zdCBmaXJzdE9yZGVyID0gaGlnaGVyT3JkZXIucGlwZShtZXJnZUFsbCgyKSk7XG4gKlxuICogZmlyc3RPcmRlci5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBjb21iaW5lTGF0ZXN0QWxsfVxuICogQHNlZSB7QGxpbmsgY29uY2F0QWxsfVxuICogQHNlZSB7QGxpbmsgZXhoYXVzdEFsbH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VNYXB9XG4gKiBAc2VlIHtAbGluayBtZXJnZU1hcFRvfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VTY2FufVxuICogQHNlZSB7QGxpbmsgc3dpdGNoQWxsfVxuICogQHNlZSB7QGxpbmsgc3dpdGNoTWFwfVxuICogQHNlZSB7QGxpbmsgemlwQWxsfVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbY29uY3VycmVudD1JbmZpbml0eV0gTWF4aW11bSBudW1iZXIgb2YgaW5uZXJcbiAqIE9ic2VydmFibGVzIGJlaW5nIHN1YnNjcmliZWQgdG8gY29uY3VycmVudGx5LlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdmFsdWVzIGNvbWluZyBmcm9tXG4gKiBhbGwgdGhlIGlubmVyIE9ic2VydmFibGVzIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VBbGw8TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+Pihjb25jdXJyZW50OiBudW1iZXIgPSBJbmZpbml0eSk6IE9wZXJhdG9yRnVuY3Rpb248TywgT2JzZXJ2ZWRWYWx1ZU9mPE8+PiB7XG4gIHJldHVybiBtZXJnZU1hcChpZGVudGl0eSwgY29uY3VycmVudCk7XG59XG4iLCAiaW1wb3J0IHsgbWVyZ2VBbGwgfSBmcm9tICcuL21lcmdlQWxsJztcbmltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24sIE9ic2VydmFibGVJbnB1dCwgT2JzZXJ2ZWRWYWx1ZU9mIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgaGlnaGVyLW9yZGVyIE9ic2VydmFibGUgaW50byBhIGZpcnN0LW9yZGVyIE9ic2VydmFibGUgYnlcbiAqIGNvbmNhdGVuYXRpbmcgdGhlIGlubmVyIE9ic2VydmFibGVzIGluIG9yZGVyLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5GbGF0dGVucyBhbiBPYnNlcnZhYmxlLW9mLU9ic2VydmFibGVzIGJ5IHB1dHRpbmcgb25lXG4gKiBpbm5lciBPYnNlcnZhYmxlIGFmdGVyIHRoZSBvdGhlci48L3NwYW4+XG4gKlxuICogIVtdKGNvbmNhdEFsbC5zdmcpXG4gKlxuICogSm9pbnMgZXZlcnkgT2JzZXJ2YWJsZSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgKGEgaGlnaGVyLW9yZGVyIE9ic2VydmFibGUpLCBpblxuICogYSBzZXJpYWwgZmFzaGlvbi4gSXQgc3Vic2NyaWJlcyB0byBlYWNoIGlubmVyIE9ic2VydmFibGUgb25seSBhZnRlciB0aGVcbiAqIHByZXZpb3VzIGlubmVyIE9ic2VydmFibGUgaGFzIGNvbXBsZXRlZCwgYW5kIG1lcmdlcyBhbGwgb2YgdGhlaXIgdmFsdWVzIGludG9cbiAqIHRoZSByZXR1cm5lZCBvYnNlcnZhYmxlLlxuICpcbiAqIF9fV2FybmluZzpfXyBJZiB0aGUgc291cmNlIE9ic2VydmFibGUgZW1pdHMgT2JzZXJ2YWJsZXMgcXVpY2tseSBhbmRcbiAqIGVuZGxlc3NseSwgYW5kIHRoZSBpbm5lciBPYnNlcnZhYmxlcyBpdCBlbWl0cyBnZW5lcmFsbHkgY29tcGxldGUgc2xvd2VyIHRoYW5cbiAqIHRoZSBzb3VyY2UgZW1pdHMsIHlvdSBjYW4gcnVuIGludG8gbWVtb3J5IGlzc3VlcyBhcyB0aGUgaW5jb21pbmcgT2JzZXJ2YWJsZXNcbiAqIGNvbGxlY3QgaW4gYW4gdW5ib3VuZGVkIGJ1ZmZlci5cbiAqXG4gKiBOb3RlOiBgY29uY2F0QWxsYCBpcyBlcXVpdmFsZW50IHRvIGBtZXJnZUFsbGAgd2l0aCBjb25jdXJyZW5jeSBwYXJhbWV0ZXIgc2V0XG4gKiB0byBgMWAuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIEZvciBlYWNoIGNsaWNrIGV2ZW50LCB0aWNrIGV2ZXJ5IHNlY29uZCBmcm9tIDAgdG8gMywgd2l0aCBubyBjb25jdXJyZW5jeVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIG1hcCwgaW50ZXJ2YWwsIHRha2UsIGNvbmNhdEFsbCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGNsaWNrcyA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiBjb25zdCBoaWdoZXJPcmRlciA9IGNsaWNrcy5waXBlKFxuICogICBtYXAoKCkgPT4gaW50ZXJ2YWwoMTAwMCkucGlwZSh0YWtlKDQpKSlcbiAqICk7XG4gKiBjb25zdCBmaXJzdE9yZGVyID0gaGlnaGVyT3JkZXIucGlwZShjb25jYXRBbGwoKSk7XG4gKiBmaXJzdE9yZGVyLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBSZXN1bHRzIGluIHRoZSBmb2xsb3dpbmc6XG4gKiAvLyAocmVzdWx0cyBhcmUgbm90IGNvbmN1cnJlbnQpXG4gKiAvLyBGb3IgZXZlcnkgY2xpY2sgb24gdGhlIFwiZG9jdW1lbnRcIiBpdCB3aWxsIGVtaXQgdmFsdWVzIDAgdG8gMyBzcGFjZWRcbiAqIC8vIG9uIGEgMTAwMG1zIGludGVydmFsXG4gKiAvLyBvbmUgY2xpY2sgPSAxMDAwbXMtPiAwIC0xMDAwbXMtPiAxIC0xMDAwbXMtPiAyIC0xMDAwbXMtPiAzXG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBjb21iaW5lTGF0ZXN0QWxsfVxuICogQHNlZSB7QGxpbmsgY29uY2F0fVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwfVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwVG99XG4gKiBAc2VlIHtAbGluayBleGhhdXN0QWxsfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VBbGx9XG4gKiBAc2VlIHtAbGluayBzd2l0Y2hBbGx9XG4gKiBAc2VlIHtAbGluayBzd2l0Y2hNYXB9XG4gKiBAc2VlIHtAbGluayB6aXBBbGx9XG4gKlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIGVtaXR0aW5nIHZhbHVlcyBmcm9tIGFsbCB0aGVcbiAqIGlubmVyIE9ic2VydmFibGVzIGNvbmNhdGVuYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdEFsbDxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KCk6IE9wZXJhdG9yRnVuY3Rpb248TywgT2JzZXJ2ZWRWYWx1ZU9mPE8+PiB7XG4gIHJldHVybiBtZXJnZUFsbCgxKTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXRUdXBsZSwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGNvbmNhdEFsbCB9IGZyb20gJy4uL29wZXJhdG9ycy9jb25jYXRBbGwnO1xuaW1wb3J0IHsgcG9wU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9hcmdzJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICcuL2Zyb20nO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0PFQgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KC4uLmlucHV0czogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPFQ+XSk6IE9ic2VydmFibGU8VFtudW1iZXJdPjtcbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQ8VCBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oXG4gIC4uLmlucHV0c0FuZFNjaGVkdWxlcjogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPFQ+LCBTY2hlZHVsZXJMaWtlXVxuKTogT2JzZXJ2YWJsZTxUW251bWJlcl0+O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gb3V0cHV0IE9ic2VydmFibGUgd2hpY2ggc2VxdWVudGlhbGx5IGVtaXRzIGFsbCB2YWx1ZXMgZnJvbSB0aGUgZmlyc3QgZ2l2ZW5cbiAqIE9ic2VydmFibGUgYW5kIHRoZW4gbW92ZXMgb24gdG8gdGhlIG5leHQuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkNvbmNhdGVuYXRlcyBtdWx0aXBsZSBPYnNlcnZhYmxlcyB0b2dldGhlciBieVxuICogc2VxdWVudGlhbGx5IGVtaXR0aW5nIHRoZWlyIHZhbHVlcywgb25lIE9ic2VydmFibGUgYWZ0ZXIgdGhlIG90aGVyLjwvc3Bhbj5cbiAqXG4gKiAhW10oY29uY2F0LnBuZylcbiAqXG4gKiBgY29uY2F0YCBqb2lucyBtdWx0aXBsZSBPYnNlcnZhYmxlcyB0b2dldGhlciwgYnkgc3Vic2NyaWJpbmcgdG8gdGhlbSBvbmUgYXQgYSB0aW1lIGFuZFxuICogbWVyZ2luZyB0aGVpciByZXN1bHRzIGludG8gdGhlIG91dHB1dCBPYnNlcnZhYmxlLiBZb3UgY2FuIHBhc3MgZWl0aGVyIGFuIGFycmF5IG9mXG4gKiBPYnNlcnZhYmxlcywgb3IgcHV0IHRoZW0gZGlyZWN0bHkgYXMgYXJndW1lbnRzLiBQYXNzaW5nIGFuIGVtcHR5IGFycmF5IHdpbGwgcmVzdWx0XG4gKiBpbiBPYnNlcnZhYmxlIHRoYXQgY29tcGxldGVzIGltbWVkaWF0ZWx5LlxuICpcbiAqIGBjb25jYXRgIHdpbGwgc3Vic2NyaWJlIHRvIGZpcnN0IGlucHV0IE9ic2VydmFibGUgYW5kIGVtaXQgYWxsIGl0cyB2YWx1ZXMsIHdpdGhvdXRcbiAqIGNoYW5naW5nIG9yIGFmZmVjdGluZyB0aGVtIGluIGFueSB3YXkuIFdoZW4gdGhhdCBPYnNlcnZhYmxlIGNvbXBsZXRlcywgaXQgd2lsbFxuICogc3Vic2NyaWJlIHRvIHRoZW4gbmV4dCBPYnNlcnZhYmxlIHBhc3NlZCBhbmQsIGFnYWluLCBlbWl0IGl0cyB2YWx1ZXMuIFRoaXMgd2lsbCBiZVxuICogcmVwZWF0ZWQsIHVudGlsIHRoZSBvcGVyYXRvciBydW5zIG91dCBvZiBPYnNlcnZhYmxlcy4gV2hlbiBsYXN0IGlucHV0IE9ic2VydmFibGUgY29tcGxldGVzLFxuICogYGNvbmNhdGAgd2lsbCBjb21wbGV0ZSBhcyB3ZWxsLiBBdCBhbnkgZ2l2ZW4gbW9tZW50IG9ubHkgb25lIE9ic2VydmFibGUgcGFzc2VkIHRvIG9wZXJhdG9yXG4gKiBlbWl0cyB2YWx1ZXMuIElmIHlvdSB3b3VsZCBsaWtlIHRvIGVtaXQgdmFsdWVzIGZyb20gcGFzc2VkIE9ic2VydmFibGVzIGNvbmN1cnJlbnRseSwgY2hlY2sgb3V0XG4gKiB7QGxpbmsgbWVyZ2V9IGluc3RlYWQsIGVzcGVjaWFsbHkgd2l0aCBvcHRpb25hbCBgY29uY3VycmVudGAgcGFyYW1ldGVyLiBBcyBhIG1hdHRlciBvZiBmYWN0LFxuICogYGNvbmNhdGAgaXMgYW4gZXF1aXZhbGVudCBvZiBgbWVyZ2VgIG9wZXJhdG9yIHdpdGggYGNvbmN1cnJlbnRgIHBhcmFtZXRlciBzZXQgdG8gYDFgLlxuICpcbiAqIE5vdGUgdGhhdCBpZiBzb21lIGlucHV0IE9ic2VydmFibGUgbmV2ZXIgY29tcGxldGVzLCBgY29uY2F0YCB3aWxsIGFsc28gbmV2ZXIgY29tcGxldGVcbiAqIGFuZCBPYnNlcnZhYmxlcyBmb2xsb3dpbmcgdGhlIG9uZSB0aGF0IGRpZCBub3QgY29tcGxldGUgd2lsbCBuZXZlciBiZSBzdWJzY3JpYmVkLiBPbiB0aGUgb3RoZXJcbiAqIGhhbmQsIGlmIHNvbWUgT2JzZXJ2YWJsZSBzaW1wbHkgY29tcGxldGVzIGltbWVkaWF0ZWx5IGFmdGVyIGl0IGlzIHN1YnNjcmliZWQsIGl0IHdpbGwgYmVcbiAqIGludmlzaWJsZSBmb3IgYGNvbmNhdGAsIHdoaWNoIHdpbGwganVzdCBtb3ZlIG9uIHRvIHRoZSBuZXh0IE9ic2VydmFibGUuXG4gKlxuICogSWYgYW55IE9ic2VydmFibGUgaW4gY2hhaW4gZXJyb3JzLCBpbnN0ZWFkIG9mIHBhc3NpbmcgY29udHJvbCB0byB0aGUgbmV4dCBPYnNlcnZhYmxlLFxuICogYGNvbmNhdGAgd2lsbCBlcnJvciBpbW1lZGlhdGVseSBhcyB3ZWxsLiBPYnNlcnZhYmxlcyB0aGF0IHdvdWxkIGJlIHN1YnNjcmliZWQgYWZ0ZXJcbiAqIHRoZSBvbmUgdGhhdCBlbWl0dGVkIGVycm9yLCBuZXZlciB3aWxsLlxuICpcbiAqIElmIHlvdSBwYXNzIHRvIGBjb25jYXRgIHRoZSBzYW1lIE9ic2VydmFibGUgbWFueSB0aW1lcywgaXRzIHN0cmVhbSBvZiB2YWx1ZXNcbiAqIHdpbGwgYmUgXCJyZXBsYXllZFwiIG9uIGV2ZXJ5IHN1YnNjcmlwdGlvbiwgd2hpY2ggbWVhbnMgeW91IGNhbiByZXBlYXQgZ2l2ZW4gT2JzZXJ2YWJsZVxuICogYXMgbWFueSB0aW1lcyBhcyB5b3UgbGlrZS4gSWYgcGFzc2luZyB0aGUgc2FtZSBPYnNlcnZhYmxlIHRvIGBjb25jYXRgIDEwMDAgdGltZXMgYmVjb21lcyB0ZWRpb3VzLFxuICogeW91IGNhbiBhbHdheXMgdXNlIHtAbGluayByZXBlYXR9LlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogQ29uY2F0ZW5hdGUgYSB0aW1lciBjb3VudGluZyBmcm9tIDAgdG8gMyB3aXRoIGEgc3luY2hyb25vdXMgc2VxdWVuY2UgZnJvbSAxIHRvIDEwXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlLCByYW5nZSwgY29uY2F0IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgdGltZXIgPSBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoNCkpO1xuICogY29uc3Qgc2VxdWVuY2UgPSByYW5nZSgxLCAxMCk7XG4gKiBjb25zdCByZXN1bHQgPSBjb25jYXQodGltZXIsIHNlcXVlbmNlKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gcmVzdWx0cyBpbjpcbiAqIC8vIDAgLTEwMDBtcy0+IDEgLTEwMDBtcy0+IDIgLTEwMDBtcy0+IDMgLWltbWVkaWF0ZS0+IDEgLi4uIDEwXG4gKiBgYGBcbiAqXG4gKiBDb25jYXRlbmF0ZSAzIE9ic2VydmFibGVzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlLCBjb25jYXQgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCB0aW1lcjEgPSBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoMTApKTtcbiAqIGNvbnN0IHRpbWVyMiA9IGludGVydmFsKDIwMDApLnBpcGUodGFrZSg2KSk7XG4gKiBjb25zdCB0aW1lcjMgPSBpbnRlcnZhbCg1MDApLnBpcGUodGFrZSgxMCkpO1xuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbmNhdCh0aW1lcjEsIHRpbWVyMiwgdGltZXIzKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gcmVzdWx0cyBpbiB0aGUgZm9sbG93aW5nOlxuICogLy8gKFByaW50cyB0byBjb25zb2xlIHNlcXVlbnRpYWxseSlcbiAqIC8vIC0xMDAwbXMtPiAwIC0xMDAwbXMtPiAxIC0xMDAwbXMtPiAuLi4gOVxuICogLy8gLTIwMDBtcy0+IDAgLTIwMDBtcy0+IDEgLTIwMDBtcy0+IC4uLiA1XG4gKiAvLyAtNTAwbXMtPiAwIC01MDBtcy0+IDEgLTUwMG1zLT4gLi4uIDlcbiAqIGBgYFxuICpcbiAqIENvbmNhdGVuYXRlIHRoZSBzYW1lIE9ic2VydmFibGUgdG8gcmVwZWF0IGl0XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlLCBjb25jYXQgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCB0aW1lciA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSgyKSk7XG4gKlxuICogY29uY2F0KHRpbWVyLCB0aW1lcikgLy8gY29uY2F0ZW5hdGluZyB0aGUgc2FtZSBPYnNlcnZhYmxlIVxuICogICAuc3Vic2NyaWJlKHtcbiAqICAgICBuZXh0OiB2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSksXG4gKiAgICAgY29tcGxldGU6ICgpID0+IGNvbnNvbGUubG9nKCcuLi5hbmQgaXQgaXMgZG9uZSEnKVxuICogICB9KTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gMCBhZnRlciAxc1xuICogLy8gMSBhZnRlciAyc1xuICogLy8gMCBhZnRlciAzc1xuICogLy8gMSBhZnRlciA0c1xuICogLy8gJy4uLmFuZCBpdCBpcyBkb25lIScgYWxzbyBhZnRlciA0c1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgY29uY2F0QWxsfVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwfVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwVG99XG4gKiBAc2VlIHtAbGluayBzdGFydFdpdGh9XG4gKiBAc2VlIHtAbGluayBlbmRXaXRofVxuICpcbiAqIEBwYXJhbSBhcmdzIElucHV0IE9ic2VydmFibGVzIHRvIGNvbmNhdGVuYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3M6IGFueVtdKTogT2JzZXJ2YWJsZTx1bmtub3duPiB7XG4gIHJldHVybiBjb25jYXRBbGwoKShmcm9tKGFyZ3MsIHBvcFNjaGVkdWxlcihhcmdzKSkpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBhc3luYyBhcyBhc3luY1NjaGVkdWxlciB9IGZyb20gJy4uL3NjaGVkdWxlci9hc3luYyc7XG5pbXBvcnQgeyBpc1NjaGVkdWxlciB9IGZyb20gJy4uL3V0aWwvaXNTY2hlZHVsZXInO1xuaW1wb3J0IHsgaXNWYWxpZERhdGUgfSBmcm9tICcuLi91dGlsL2lzRGF0ZSc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgd2lsbCB3YWl0IGZvciBhIHNwZWNpZmllZCB0aW1lIHBlcmlvZCwgb3IgZXhhY3QgZGF0ZSwgYmVmb3JlXG4gKiBlbWl0dGluZyB0aGUgbnVtYmVyIDAuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPlVzZWQgdG8gZW1pdCBhIG5vdGlmaWNhdGlvbiBhZnRlciBhIGRlbGF5Ljwvc3Bhbj5cbiAqXG4gKiBUaGlzIG9ic2VydmFibGUgaXMgdXNlZnVsIGZvciBjcmVhdGluZyBkZWxheXMgaW4gY29kZSwgb3IgcmFjaW5nIGFnYWluc3Qgb3RoZXIgdmFsdWVzXG4gKiBmb3IgYWQtaG9jIHRpbWVvdXRzLlxuICpcbiAqIFRoZSBgZGVsYXlgIGlzIHNwZWNpZmllZCBieSBkZWZhdWx0IGluIG1pbGxpc2Vjb25kcywgaG93ZXZlciBwcm92aWRpbmcgYSBjdXN0b20gc2NoZWR1bGVyIGNvdWxkXG4gKiBjcmVhdGUgYSBkaWZmZXJlbnQgYmVoYXZpb3IuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBXYWl0IDMgc2Vjb25kcyBhbmQgc3RhcnQgYW5vdGhlciBvYnNlcnZhYmxlXG4gKlxuICogWW91IG1pZ2h0IHdhbnQgdG8gdXNlIGB0aW1lcmAgdG8gZGVsYXkgc3Vic2NyaXB0aW9uIHRvIGFuXG4gKiBvYnNlcnZhYmxlIGJ5IGEgc2V0IGFtb3VudCBvZiB0aW1lLiBIZXJlIHdlIHVzZSBhIHRpbWVyIHdpdGhcbiAqIHtAbGluayBjb25jYXRNYXBUb30gb3Ige0BsaW5rIGNvbmNhdE1hcH0gaW4gb3JkZXIgdG8gd2FpdFxuICogYSBmZXcgc2Vjb25kcyBhbmQgc3RhcnQgYSBzdWJzY3JpcHRpb24gdG8gYSBzb3VyY2UuXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCB0aW1lciwgY29uY2F0TWFwIH0gZnJvbSAncnhqcyc7XG4gKlxuICogLy8gVGhpcyBjb3VsZCBiZSBhbnkgb2JzZXJ2YWJsZVxuICogY29uc3Qgc291cmNlID0gb2YoMSwgMiwgMyk7XG4gKlxuICogdGltZXIoMzAwMClcbiAqICAgLnBpcGUoY29uY2F0TWFwKCgpID0+IHNvdXJjZSkpXG4gKiAgIC5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICogYGBgXG4gKlxuICogVGFrZSBhbGwgdmFsdWVzIHVudGlsIHRoZSBzdGFydCBvZiB0aGUgbmV4dCBtaW51dGVcbiAqXG4gKiBVc2luZyBhIGBEYXRlYCBhcyB0aGUgdHJpZ2dlciBmb3IgdGhlIGZpcnN0IGVtaXNzaW9uLCB5b3UgY2FuXG4gKiBkbyB0aGluZ3MgbGlrZSB3YWl0IHVudGlsIG1pZG5pZ2h0IHRvIGZpcmUgYW4gZXZlbnQsIG9yIGluIHRoaXMgY2FzZSxcbiAqIHdhaXQgdW50aWwgYSBuZXcgbWludXRlIHN0YXJ0cyAoY2hvc2VuIHNvIHRoZSBleGFtcGxlIHdvdWxkbid0IHRha2VcbiAqIHRvbyBsb25nIHRvIHJ1bikgaW4gb3JkZXIgdG8gc3RvcCB3YXRjaGluZyBhIHN0cmVhbS4gTGV2ZXJhZ2luZ1xuICoge0BsaW5rIHRha2VVbnRpbH0uXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlVW50aWwsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG4gKlxuICogLy8gQnVpbGQgYSBEYXRlIG9iamVjdCB0aGF0IG1hcmtzIHRoZVxuICogLy8gbmV4dCBtaW51dGUuXG4gKiBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gKiBjb25zdCBzdGFydE9mTmV4dE1pbnV0ZSA9IG5ldyBEYXRlKFxuICogICBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLFxuICogICBjdXJyZW50RGF0ZS5nZXRNb250aCgpLFxuICogICBjdXJyZW50RGF0ZS5nZXREYXRlKCksXG4gKiAgIGN1cnJlbnREYXRlLmdldEhvdXJzKCksXG4gKiAgIGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKSArIDFcbiAqICk7XG4gKlxuICogLy8gVGhpcyBjb3VsZCBiZSBhbnkgb2JzZXJ2YWJsZSBzdHJlYW1cbiAqIGNvbnN0IHNvdXJjZSA9IGludGVydmFsKDEwMDApO1xuICpcbiAqIGNvbnN0IHJlc3VsdCA9IHNvdXJjZS5waXBlKFxuICogICB0YWtlVW50aWwodGltZXIoc3RhcnRPZk5leHRNaW51dGUpKVxuICogKTtcbiAqXG4gKiByZXN1bHQuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAqIGBgYFxuICpcbiAqICMjIyBLbm93biBMaW1pdGF0aW9uc1xuICpcbiAqIC0gVGhlIHtAbGluayBhc3luY1NjaGVkdWxlcn0gdXNlcyBgc2V0VGltZW91dGAgd2hpY2ggaGFzIGxpbWl0YXRpb25zIGZvciBob3cgZmFyIGluIHRoZSBmdXR1cmUgaXQgY2FuIGJlIHNjaGVkdWxlZC5cbiAqXG4gKiAtIElmIGEgYHNjaGVkdWxlcmAgaXMgcHJvdmlkZWQgdGhhdCByZXR1cm5zIGEgdGltZXN0YW1wIG90aGVyIHRoYW4gYW4gZXBvY2ggZnJvbSBgbm93KClgLCBhbmRcbiAqIGEgYERhdGVgIG9iamVjdCBpcyBwYXNzZWQgdG8gdGhlIGBkdWVUaW1lYCBhcmd1bWVudCwgdGhlIGNhbGN1bGF0aW9uIGZvciB3aGVuIHRoZSBmaXJzdCBlbWlzc2lvblxuICogc2hvdWxkIG9jY3VyIHdpbGwgYmUgaW5jb3JyZWN0LiBJbiB0aGlzIGNhc2UsIGl0IHdvdWxkIGJlIGJlc3QgdG8gZG8geW91ciBvd24gY2FsY3VsYXRpb25zXG4gKiBhaGVhZCBvZiB0aW1lLCBhbmQgcGFzcyBhIGBudW1iZXJgIGluIGFzIHRoZSBgZHVlVGltZWAuXG4gKlxuICogQHBhcmFtIGR1ZSBJZiBhIGBudW1iZXJgLCB0aGUgYW1vdW50IG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIGVtaXR0aW5nLlxuICogSWYgYSBgRGF0ZWAsIHRoZSBleGFjdCB0aW1lIGF0IHdoaWNoIHRvIGVtaXQuXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFRoZSBzY2hlZHVsZXIgdG8gdXNlIHRvIHNjaGVkdWxlIHRoZSBkZWxheS4gRGVmYXVsdHMgdG8ge0BsaW5rIGFzeW5jU2NoZWR1bGVyfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyKGR1ZTogbnVtYmVyIHwgRGF0ZSwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8MD47XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgc3RhcnRzIGFuIGludGVydmFsIGFmdGVyIGEgc3BlY2lmaWVkIGRlbGF5LCBlbWl0dGluZyBpbmNyZW1lbnRpbmcgbnVtYmVycyAtLSBzdGFydGluZyBhdCBgMGAgLS1cbiAqIG9uIGVhY2ggaW50ZXJ2YWwgYWZ0ZXIgd29yZHMuXG4gKlxuICogVGhlIGBkZWxheWAgYW5kIGBpbnRlcnZhbER1cmF0aW9uYCBhcmUgc3BlY2lmaWVkIGJ5IGRlZmF1bHQgaW4gbWlsbGlzZWNvbmRzLCBob3dldmVyIHByb3ZpZGluZyBhIGN1c3RvbSBzY2hlZHVsZXIgY291bGRcbiAqIGNyZWF0ZSBhIGRpZmZlcmVudCBiZWhhdmlvci5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogIyMjIFN0YXJ0IGFuIGludGVydmFsIHRoYXQgc3RhcnRzIHJpZ2h0IGF3YXlcbiAqXG4gKiBTaW5jZSB7QGxpbmsgaW50ZXJ2YWx9IHdhaXRzIGZvciB0aGUgcGFzc2VkIGRlbGF5IGJlZm9yZSBzdGFydGluZyxcbiAqIHNvbWV0aW1lcyB0aGF0J3Mgbm90IGlkZWFsLiBZb3UgbWF5IHdhbnQgdG8gc3RhcnQgYW4gaW50ZXJ2YWwgaW1tZWRpYXRlbHkuXG4gKiBgdGltZXJgIHdvcmtzIHdlbGwgZm9yIHRoaXMuIEhlcmUgd2UgaGF2ZSBib3RoIHNpZGUtYnktc2lkZSBzbyB5b3UgY2FuXG4gKiBzZWUgdGhlbSBpbiBjb21wYXJpc29uLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIG9ic2VydmFibGUgd2lsbCBuZXZlciBjb21wbGV0ZS5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgdGltZXIsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG4gKlxuICogdGltZXIoMCwgMTAwMCkuc3Vic2NyaWJlKG4gPT4gY29uc29sZS5sb2coJ3RpbWVyJywgbikpO1xuICogaW50ZXJ2YWwoMTAwMCkuc3Vic2NyaWJlKG4gPT4gY29uc29sZS5sb2coJ2ludGVydmFsJywgbikpO1xuICogYGBgXG4gKlxuICogIyMjIEtub3duIExpbWl0YXRpb25zXG4gKlxuICogLSBUaGUge0BsaW5rIGFzeW5jU2NoZWR1bGVyfSB1c2VzIGBzZXRUaW1lb3V0YCB3aGljaCBoYXMgbGltaXRhdGlvbnMgZm9yIGhvdyBmYXIgaW4gdGhlIGZ1dHVyZSBpdCBjYW4gYmUgc2NoZWR1bGVkLlxuICpcbiAqIC0gSWYgYSBgc2NoZWR1bGVyYCBpcyBwcm92aWRlZCB0aGF0IHJldHVybnMgYSB0aW1lc3RhbXAgb3RoZXIgdGhhbiBhbiBlcG9jaCBmcm9tIGBub3coKWAsIGFuZFxuICogYSBgRGF0ZWAgb2JqZWN0IGlzIHBhc3NlZCB0byB0aGUgYGR1ZVRpbWVgIGFyZ3VtZW50LCB0aGUgY2FsY3VsYXRpb24gZm9yIHdoZW4gdGhlIGZpcnN0IGVtaXNzaW9uXG4gKiBzaG91bGQgb2NjdXIgd2lsbCBiZSBpbmNvcnJlY3QuIEluIHRoaXMgY2FzZSwgaXQgd291bGQgYmUgYmVzdCB0byBkbyB5b3VyIG93biBjYWxjdWxhdGlvbnNcbiAqIGFoZWFkIG9mIHRpbWUsIGFuZCBwYXNzIGEgYG51bWJlcmAgaW4gYXMgdGhlIGBzdGFydER1ZWAuXG4gKiBAcGFyYW0gc3RhcnREdWUgSWYgYSBgbnVtYmVyYCwgaXMgdGhlIHRpbWUgdG8gd2FpdCBiZWZvcmUgc3RhcnRpbmcgdGhlIGludGVydmFsLlxuICogSWYgYSBgRGF0ZWAsIGlzIHRoZSBleGFjdCB0aW1lIGF0IHdoaWNoIHRvIHN0YXJ0IHRoZSBpbnRlcnZhbC5cbiAqIEBwYXJhbSBpbnRlcnZhbER1cmF0aW9uIFRoZSBkZWxheSBiZXR3ZWVuIGVhY2ggdmFsdWUgZW1pdHRlZCBpbiB0aGUgaW50ZXJ2YWwuIFBhc3NpbmcgYVxuICogbmVnYXRpdmUgbnVtYmVyIGhlcmUgd2lsbCByZXN1bHQgaW4gaW1tZWRpYXRlIGNvbXBsZXRpb24gYWZ0ZXIgdGhlIGZpcnN0IHZhbHVlIGlzIGVtaXR0ZWQsIGFzIHRob3VnaFxuICogbm8gYGludGVydmFsRHVyYXRpb25gIHdhcyBwYXNzZWQgYXQgYWxsLlxuICogQHBhcmFtIHNjaGVkdWxlciBUaGUgc2NoZWR1bGVyIHRvIHVzZSB0byBzY2hlZHVsZSB0aGUgZGVsYXkuIERlZmF1bHRzIHRvIHtAbGluayBhc3luY1NjaGVkdWxlcn0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihzdGFydER1ZTogbnVtYmVyIHwgRGF0ZSwgaW50ZXJ2YWxEdXJhdGlvbjogbnVtYmVyLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFRoZSBzaWduYXR1cmUgYWxsb3dpbmcgYHVuZGVmaW5lZGAgdG8gYmUgcGFzc2VkIGZvciBgaW50ZXJ2YWxEdXJhdGlvbmAgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgdGhlIGB0aW1lcihkdWVUaW1lLCBzY2hlZHVsZXI/KWAgc2lnbmF0dXJlIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihkdWVUaW1lOiBudW1iZXIgfCBEYXRlLCB1bnVzZWQ6IHVuZGVmaW5lZCwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8MD47XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihcbiAgZHVlVGltZTogbnVtYmVyIHwgRGF0ZSA9IDAsXG4gIGludGVydmFsT3JTY2hlZHVsZXI/OiBudW1iZXIgfCBTY2hlZHVsZXJMaWtlLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UgPSBhc3luY1NjaGVkdWxlclxuKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgLy8gU2luY2UgbmVnYXRpdmUgaW50ZXJ2YWxEdXJhdGlvbiBpcyB0cmVhdGVkIGFzIHRob3VnaCBub1xuICAvLyBpbnRlcnZhbCB3YXMgc3BlY2lmaWVkIGF0IGFsbCwgd2Ugc3RhcnQgd2l0aCBhIG5lZ2F0aXZlIG51bWJlci5cbiAgbGV0IGludGVydmFsRHVyYXRpb24gPSAtMTtcblxuICBpZiAoaW50ZXJ2YWxPclNjaGVkdWxlciAhPSBudWxsKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhIHNlY29uZCBhcmd1bWVudCwgYW5kIGl0J3MgYSBzY2hlZHVsZXIsXG4gICAgLy8gb3ZlcnJpZGUgdGhlIHNjaGVkdWxlciB3ZSBoYWQgZGVmYXVsdGVkLiBPdGhlcndpc2UsXG4gICAgLy8gaXQgbXVzdCBiZSBhbiBpbnRlcnZhbC5cbiAgICBpZiAoaXNTY2hlZHVsZXIoaW50ZXJ2YWxPclNjaGVkdWxlcikpIHtcbiAgICAgIHNjaGVkdWxlciA9IGludGVydmFsT3JTY2hlZHVsZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vdGUgdGhhdCB0aGlzICpjb3VsZCogYmUgbmVnYXRpdmUsIGluIHdoaWNoIGNhc2VcbiAgICAgIC8vIGl0J3MgbGlrZSBub3QgcGFzc2luZyBhbiBpbnRlcnZhbER1cmF0aW9uIGF0IGFsbC5cbiAgICAgIGludGVydmFsRHVyYXRpb24gPSBpbnRlcnZhbE9yU2NoZWR1bGVyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcikgPT4ge1xuICAgIC8vIElmIGEgdmFsaWQgZGF0ZSBpcyBwYXNzZWQsIGNhbGN1bGF0ZSBob3cgbG9uZyB0byB3YWl0IGJlZm9yZVxuICAgIC8vIGV4ZWN1dGluZyB0aGUgZmlyc3QgdmFsdWUuLi4gb3RoZXJ3aXNlLCBpZiBpdCdzIGEgbnVtYmVyIGp1c3Qgc2NoZWR1bGVcbiAgICAvLyB0aGF0IG1hbnkgbWlsbGlzZWNvbmRzIChvciBzY2hlZHVsZXItc3BlY2lmaWVkIHVuaXQgc2l6ZSkgaW4gdGhlIGZ1dHVyZS5cbiAgICBsZXQgZHVlID0gaXNWYWxpZERhdGUoZHVlVGltZSkgPyArZHVlVGltZSAtIHNjaGVkdWxlciEubm93KCkgOiBkdWVUaW1lO1xuXG4gICAgaWYgKGR1ZSA8IDApIHtcbiAgICAgIC8vIEVuc3VyZSB3ZSBkb24ndCBzY2hlZHVsZSBpbiB0aGUgZnV0dXJlLlxuICAgICAgZHVlID0gMDtcbiAgICB9XG5cbiAgICAvLyBUaGUgaW5jcmVtZW50aW5nIHZhbHVlIHdlIGVtaXQuXG4gICAgbGV0IG4gPSAwO1xuXG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyLlxuICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAvLyBFbWl0IHRoZSBuZXh0IHZhbHVlIGFuZCBpbmNyZW1lbnQuXG4gICAgICAgIHN1YnNjcmliZXIubmV4dChuKyspO1xuXG4gICAgICAgIGlmICgwIDw9IGludGVydmFsRHVyYXRpb24pIHtcbiAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgaW50ZXJ2YWwgYWZ0ZXIgdGhlIGluaXRpYWwgdGltZXIsXG4gICAgICAgICAgLy8gcmVzY2hlZHVsZSB3aXRoIHRoZSBwZXJpb2QuXG4gICAgICAgICAgdGhpcy5zY2hlZHVsZSh1bmRlZmluZWQsIGludGVydmFsRHVyYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFdlIGRpZG4ndCBoYXZlIGFuIGludGVydmFsLiBTbyBqdXN0IGNvbXBsZXRlLlxuICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGR1ZSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEVNUFRZIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9lbXB0eSc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcblxuLyoqXG4gKiBFbWl0cyBvbmx5IHRoZSBmaXJzdCBgY291bnRgIHZhbHVlcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+VGFrZXMgdGhlIGZpcnN0IGBjb3VudGAgdmFsdWVzIGZyb20gdGhlIHNvdXJjZSwgdGhlblxuICogY29tcGxldGVzLjwvc3Bhbj5cbiAqXG4gKiAhW10odGFrZS5wbmcpXG4gKlxuICogYHRha2VgIHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG9ubHkgdGhlIGZpcnN0IGBjb3VudGAgdmFsdWVzIGVtaXR0ZWRcbiAqIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS4gSWYgdGhlIHNvdXJjZSBlbWl0cyBmZXdlciB0aGFuIGBjb3VudGAgdmFsdWVzIHRoZW5cbiAqIGFsbCBvZiBpdHMgdmFsdWVzIGFyZSBlbWl0dGVkLiBBZnRlciB0aGF0LCBpdCBjb21wbGV0ZXMsIHJlZ2FyZGxlc3MgaWYgdGhlXG4gKiBzb3VyY2UgY29tcGxldGVzLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBUYWtlIHRoZSBmaXJzdCA1IHNlY29uZHMgb2YgYW4gaW5maW5pdGUgMS1zZWNvbmQgaW50ZXJ2YWwgT2JzZXJ2YWJsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGludGVydmFsQ291bnQgPSBpbnRlcnZhbCgxMDAwKTtcbiAqIGNvbnN0IHRha2VGaXZlID0gaW50ZXJ2YWxDb3VudC5waXBlKHRha2UoNSkpO1xuICogdGFrZUZpdmUuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAwXG4gKiAvLyAxXG4gKiAvLyAyXG4gKiAvLyAzXG4gKiAvLyA0XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayB0YWtlTGFzdH1cbiAqIEBzZWUge0BsaW5rIHRha2VVbnRpbH1cbiAqIEBzZWUge0BsaW5rIHRha2VXaGlsZX1cbiAqIEBzZWUge0BsaW5rIHNraXB9XG4gKlxuICogQHBhcmFtIGNvdW50IFRoZSBtYXhpbXVtIG51bWJlciBvZiBgbmV4dGAgdmFsdWVzIHRvIGVtaXQuXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBvbmx5IHRoZSBmaXJzdFxuICogYGNvdW50YCB2YWx1ZXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUsIG9yIGFsbCBvZiB0aGUgdmFsdWVzIGZyb21cbiAqIHRoZSBzb3VyY2UgaWYgdGhlIHNvdXJjZSBlbWl0cyBmZXdlciB0aGFuIGBjb3VudGAgdmFsdWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFrZTxUPihjb3VudDogbnVtYmVyKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcbiAgcmV0dXJuIGNvdW50IDw9IDBcbiAgICA/IC8vIElmIHdlIGFyZSB0YWtpbmcgbm8gdmFsdWVzLCB0aGF0J3MgZW1wdHkuXG4gICAgICAoKSA9PiBFTVBUWVxuICAgIDogb3BlcmF0ZSgoc291cmNlLCBzdWJzY3JpYmVyKSA9PiB7XG4gICAgICAgIGxldCBzZWVuID0gMDtcbiAgICAgICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgICAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIG51bWJlciBvZiB2YWx1ZXMgd2UgaGF2ZSBzZWVuLFxuICAgICAgICAgICAgLy8gdGhlbiBjaGVjayBpdCBhZ2FpbnN0IHRoZSBhbGxvd2VkIGNvdW50IHRvIHNlZVxuICAgICAgICAgICAgLy8gaWYgd2UgYXJlIHN0aWxsIGxldHRpbmcgdmFsdWVzIHRocm91Z2guXG4gICAgICAgICAgICBpZiAoKytzZWVuIDw9IGNvdW50KSB7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgbWV0IG9yIHBhc3NlZCBvdXIgYWxsb3dlZCBjb3VudCxcbiAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjb21wbGV0ZS4gV2UgaGF2ZSB0byBkbyA8PSBoZXJlLFxuICAgICAgICAgICAgICAvLyBiZWNhdXNlIHJlLWVudHJhbnQgY29kZSB3aWxsIGluY3JlbWVudCBgc2VlbmAgdHdpY2UuXG4gICAgICAgICAgICAgIGlmIChjb3VudCA8PSBzZWVuKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xufVxuIiwgImltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlsL25vb3AnO1xuXG4vKipcbiAqIElnbm9yZXMgYWxsIGl0ZW1zIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGFuZCBvbmx5IHBhc3NlcyBjYWxscyBvZiBgY29tcGxldGVgIG9yIGBlcnJvcmAuXG4gKlxuICogIVtdKGlnbm9yZUVsZW1lbnRzLnBuZylcbiAqXG4gKiBUaGUgYGlnbm9yZUVsZW1lbnRzYCBvcGVyYXRvciBzdXBwcmVzc2VzIGFsbCBpdGVtcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSxcbiAqIGJ1dCBhbGxvd3MgaXRzIHRlcm1pbmF0aW9uIG5vdGlmaWNhdGlvbiAoZWl0aGVyIGBlcnJvcmAgb3IgYGNvbXBsZXRlYCkgdG8gcGFzcyB0aHJvdWdoIHVuY2hhbmdlZC5cbiAqXG4gKiBJZiB5b3UgZG8gbm90IGNhcmUgYWJvdXQgdGhlIGl0ZW1zIGJlaW5nIGVtaXR0ZWQgYnkgYW4gT2JzZXJ2YWJsZSwgYnV0IHlvdSBkbyB3YW50IHRvIGJlIG5vdGlmaWVkXG4gKiB3aGVuIGl0IGNvbXBsZXRlcyBvciB3aGVuIGl0IHRlcm1pbmF0ZXMgd2l0aCBhbiBlcnJvciwgeW91IGNhbiBhcHBseSB0aGUgYGlnbm9yZUVsZW1lbnRzYCBvcGVyYXRvclxuICogdG8gdGhlIE9ic2VydmFibGUsIHdoaWNoIHdpbGwgZW5zdXJlIHRoYXQgaXQgd2lsbCBuZXZlciBjYWxsIGl0cyBvYnNlcnZlcnNcdTIwMTkgYG5leHRgIGhhbmRsZXJzLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBJZ25vcmUgYWxsIGBuZXh0YCBlbWlzc2lvbnMgZnJvbSB0aGUgc291cmNlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBpZ25vcmVFbGVtZW50cyB9IGZyb20gJ3J4anMnO1xuICpcbiAqIG9mKCd5b3UnLCAndGFsa2luZycsICd0bycsICdtZScpXG4gKiAgIC5waXBlKGlnbm9yZUVsZW1lbnRzKCkpXG4gKiAgIC5zdWJzY3JpYmUoe1xuICogICAgIG5leHQ6IHdvcmQgPT4gY29uc29sZS5sb2cod29yZCksXG4gKiAgICAgZXJyb3I6IGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3I6JywgZXJyKSxcbiAqICAgICBjb21wbGV0ZTogKCkgPT4gY29uc29sZS5sb2coJ3RoZSBlbmQnKSxcbiAqICAgfSk7XG4gKlxuICogLy8gcmVzdWx0OlxuICogLy8gJ3RoZSBlbmQnXG4gKiBgYGBcbiAqXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGVtcHR5IE9ic2VydmFibGUgdGhhdCBvbmx5IGNhbGxzXG4gKiBgY29tcGxldGVgIG9yIGBlcnJvcmAsIGJhc2VkIG9uIHdoaWNoIG9uZSBpcyBjYWxsZWQgYnkgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlnbm9yZUVsZW1lbnRzKCk6IE9wZXJhdG9yRnVuY3Rpb248dW5rbm93biwgbmV2ZXI+IHtcbiAgcmV0dXJuIG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4ge1xuICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIG5vb3ApKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vbWFwJztcblxuLyoqIEBkZXByZWNhdGVkIFRvIGJlIHJlbW92ZWQgaW4gdjkuIFVzZSB7QGxpbmsgbWFwfSBpbnN0ZWFkOiBgbWFwKCgpID0+IHZhbHVlKWAuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwVG88Uj4odmFsdWU6IFIpOiBPcGVyYXRvckZ1bmN0aW9uPHVua25vd24sIFI+O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBEbyBub3Qgc3BlY2lmeSBleHBsaWNpdCB0eXBlIHBhcmFtZXRlcnMuIFNpZ25hdHVyZXMgd2l0aCB0eXBlIHBhcmFtZXRlcnNcbiAqIHRoYXQgY2Fubm90IGJlIGluZmVycmVkIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gYG1hcFRvYCBpdHNlbGYgd2lsbCBiZSByZW1vdmVkIGluIHY5LFxuICogdXNlIHtAbGluayBtYXB9IGluc3RlYWQ6IGBtYXAoKCkgPT4gdmFsdWUpYC5cbiAqICovXG5leHBvcnQgZnVuY3Rpb24gbWFwVG88VCwgUj4odmFsdWU6IFIpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+O1xuXG4vKipcbiAqIEVtaXRzIHRoZSBnaXZlbiBjb25zdGFudCB2YWx1ZSBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUgZXZlcnkgdGltZSB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGVtaXRzIGEgdmFsdWUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkxpa2Uge0BsaW5rIG1hcH0sIGJ1dCBpdCBtYXBzIGV2ZXJ5IHNvdXJjZSB2YWx1ZSB0b1xuICogdGhlIHNhbWUgb3V0cHV0IHZhbHVlIGV2ZXJ5IHRpbWUuPC9zcGFuPlxuICpcbiAqICFbXShtYXBUby5wbmcpXG4gKlxuICogVGFrZXMgYSBjb25zdGFudCBgdmFsdWVgIGFzIGFyZ3VtZW50LCBhbmQgZW1pdHMgdGhhdCB3aGVuZXZlciB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGVtaXRzIGEgdmFsdWUuIEluIG90aGVyIHdvcmRzLCBpZ25vcmVzIHRoZSBhY3R1YWwgc291cmNlIHZhbHVlLFxuICogYW5kIHNpbXBseSB1c2VzIHRoZSBlbWlzc2lvbiBtb21lbnQgdG8ga25vdyB3aGVuIHRvIGVtaXQgdGhlIGdpdmVuIGB2YWx1ZWAuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIE1hcCBldmVyeSBjbGljayB0byB0aGUgc3RyaW5nIGAnSGknYFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIG1hcFRvIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IGdyZWV0aW5ncyA9IGNsaWNrcy5waXBlKG1hcFRvKCdIaScpKTtcbiAqXG4gKiBncmVldGluZ3Muc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgbWFwfVxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gbWFwIGVhY2ggc291cmNlIHZhbHVlIHRvLlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIGdpdmVuIGB2YWx1ZWBcbiAqIGV2ZXJ5IHRpbWUgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGVtaXRzLlxuICogQGRlcHJlY2F0ZWQgVG8gYmUgcmVtb3ZlZCBpbiB2OS4gVXNlIHtAbGluayBtYXB9IGluc3RlYWQ6IGBtYXAoKCkgPT4gdmFsdWUpYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvPFI+KHZhbHVlOiBSKTogT3BlcmF0b3JGdW5jdGlvbjx1bmtub3duLCBSPiB7XG4gIHJldHVybiBtYXAoKCkgPT4gdmFsdWUpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgT2JzZXJ2YWJsZUlucHV0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgY29uY2F0IH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9jb25jYXQnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJy4vdGFrZSc7XG5pbXBvcnQgeyBpZ25vcmVFbGVtZW50cyB9IGZyb20gJy4vaWdub3JlRWxlbWVudHMnO1xuaW1wb3J0IHsgbWFwVG8gfSBmcm9tICcuL21hcFRvJztcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAnLi9tZXJnZU1hcCc7XG5pbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5cbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHN1YnNjcmlwdGlvbkRlbGF5YCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5V2hlbjxUPihcbiAgZGVsYXlEdXJhdGlvblNlbGVjdG9yOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpID0+IE9ic2VydmFibGVJbnB1dDxhbnk+LFxuICBzdWJzY3JpcHRpb25EZWxheTogT2JzZXJ2YWJsZTxhbnk+XG4pOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD47XG5leHBvcnQgZnVuY3Rpb24gZGVsYXlXaGVuPFQ+KGRlbGF5RHVyYXRpb25TZWxlY3RvcjogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlSW5wdXQ8YW55Pik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPjtcblxuLyoqXG4gKiBEZWxheXMgdGhlIGVtaXNzaW9uIG9mIGl0ZW1zIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGJ5IGEgZ2l2ZW4gdGltZSBzcGFuXG4gKiBkZXRlcm1pbmVkIGJ5IHRoZSBlbWlzc2lvbnMgb2YgYW5vdGhlciBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5JdCdzIGxpa2Uge0BsaW5rIGRlbGF5fSwgYnV0IHRoZSB0aW1lIHNwYW4gb2YgdGhlXG4gKiBkZWxheSBkdXJhdGlvbiBpcyBkZXRlcm1pbmVkIGJ5IGEgc2Vjb25kIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqICFbXShkZWxheVdoZW4ucG5nKVxuICpcbiAqIGBkZWxheVdoZW5gIG9wZXJhdG9yIHNoaWZ0cyBlYWNoIGVtaXR0ZWQgdmFsdWUgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgYnlcbiAqIGEgdGltZSBzcGFuIGRldGVybWluZWQgYnkgYW5vdGhlciBPYnNlcnZhYmxlLiBXaGVuIHRoZSBzb3VyY2UgZW1pdHMgYSB2YWx1ZSxcbiAqIHRoZSBgZGVsYXlEdXJhdGlvblNlbGVjdG9yYCBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgdmFsdWUgZW1pdHRlZCBmcm9tXG4gKiB0aGUgc291cmNlIE9ic2VydmFibGUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBgZGVsYXlEdXJhdGlvblNlbGVjdG9yYC5cbiAqIFRoZSBgZGVsYXlEdXJhdGlvblNlbGVjdG9yYCBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGFuIHtAbGluayBPYnNlcnZhYmxlSW5wdXR9LFxuICogdGhhdCBpcyBpbnRlcm5hbGx5IGNvbnZlcnRlZCB0byBhbiBPYnNlcnZhYmxlIHRoYXQgaXMgY2FsbGVkIHRoZSBcImR1cmF0aW9uXCJcbiAqIE9ic2VydmFibGUuXG4gKlxuICogVGhlIHNvdXJjZSB2YWx1ZSBpcyBlbWl0dGVkIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSBvbmx5IHdoZW4gdGhlIFwiZHVyYXRpb25cIlxuICogT2JzZXJ2YWJsZSBlbWl0cyAoe0BsaW5rIGd1aWRlL2dsb3NzYXJ5LWFuZC1zZW1hbnRpY3MjbmV4dCBuZXh0fXMpIGFueSB2YWx1ZS5cbiAqIFVwb24gdGhhdCwgdGhlIFwiZHVyYXRpb25cIiBPYnNlcnZhYmxlIGdldHMgdW5zdWJzY3JpYmVkLlxuICpcbiAqIEJlZm9yZSBSeEpTIFY3LCB0aGUge0BsaW5rIGd1aWRlL2dsb3NzYXJ5LWFuZC1zZW1hbnRpY3MjY29tcGxldGUgY29tcGxldGlvbn1cbiAqIG9mIHRoZSBcImR1cmF0aW9uXCIgT2JzZXJ2YWJsZSB3b3VsZCBoYXZlIGJlZW4gdHJpZ2dlcmluZyB0aGUgZW1pc3Npb24gb2YgdGhlXG4gKiBzb3VyY2UgdmFsdWUgdG8gdGhlIG91dHB1dCBPYnNlcnZhYmxlLCBidXQgd2l0aCBSeEpTIFY3LCB0aGlzIGlzIG5vdCB0aGUgY2FzZVxuICogYW55bW9yZS5cbiAqXG4gKiBPbmx5IG5leHQgbm90aWZpY2F0aW9ucyAoZnJvbSB0aGUgXCJkdXJhdGlvblwiIE9ic2VydmFibGUpIHRyaWdnZXIgdmFsdWVzIGZyb21cbiAqIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB0byBiZSBwYXNzZWQgdG8gdGhlIG91dHB1dCBPYnNlcnZhYmxlLiBJZiB0aGUgXCJkdXJhdGlvblwiXG4gKiBPYnNlcnZhYmxlIG9ubHkgZW1pdHMgdGhlIGNvbXBsZXRlIG5vdGlmaWNhdGlvbiAod2l0aG91dCBuZXh0KSwgdGhlIHZhbHVlXG4gKiBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB3aWxsIG5ldmVyIGdldCB0byB0aGUgb3V0cHV0IE9ic2VydmFibGUgLSBpdFxuICogd2lsbCBiZSBzd2FsbG93ZWQuIElmIHRoZSBcImR1cmF0aW9uXCIgT2JzZXJ2YWJsZSBlcnJvcnMsIHRoZSBlcnJvciB3aWxsIGJlXG4gKiBwcm9wYWdhdGVkIHRvIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqXG4gKiBPcHRpb25hbGx5LCBgZGVsYXlXaGVuYCB0YWtlcyBhIHNlY29uZCBhcmd1bWVudCwgYHN1YnNjcmlwdGlvbkRlbGF5YCwgd2hpY2hcbiAqIGlzIGFuIE9ic2VydmFibGUuIFdoZW4gYHN1YnNjcmlwdGlvbkRlbGF5YCBlbWl0cyBpdHMgZmlyc3QgdmFsdWUgb3JcbiAqIGNvbXBsZXRlcywgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGlzIHN1YnNjcmliZWQgdG8gYW5kIHN0YXJ0cyBiZWhhdmluZyBsaWtlXG4gKiBkZXNjcmliZWQgaW4gdGhlIHByZXZpb3VzIHBhcmFncmFwaC4gSWYgYHN1YnNjcmlwdGlvbkRlbGF5YCBpcyBub3QgcHJvdmlkZWQsXG4gKiBgZGVsYXlXaGVuYCB3aWxsIHN1YnNjcmliZSB0byB0aGUgc291cmNlIE9ic2VydmFibGUgYXMgc29vbiBhcyB0aGUgb3V0cHV0XG4gKiBPYnNlcnZhYmxlIGlzIHN1YnNjcmliZWQuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIERlbGF5IGVhY2ggY2xpY2sgYnkgYSByYW5kb20gYW1vdW50IG9mIHRpbWUsIGJldHdlZW4gMCBhbmQgNSBzZWNvbmRzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb21FdmVudCwgZGVsYXlXaGVuLCBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGNsaWNrcyA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiBjb25zdCBkZWxheWVkQ2xpY2tzID0gY2xpY2tzLnBpcGUoXG4gKiAgIGRlbGF5V2hlbigoKSA9PiBpbnRlcnZhbChNYXRoLnJhbmRvbSgpICogNTAwMCkpXG4gKiApO1xuICogZGVsYXllZENsaWNrcy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBkZWxheX1cbiAqIEBzZWUge0BsaW5rIHRocm90dGxlfVxuICogQHNlZSB7QGxpbmsgdGhyb3R0bGVUaW1lfVxuICogQHNlZSB7QGxpbmsgZGVib3VuY2V9XG4gKiBAc2VlIHtAbGluayBkZWJvdW5jZVRpbWV9XG4gKiBAc2VlIHtAbGluayBzYW1wbGV9XG4gKiBAc2VlIHtAbGluayBzYW1wbGVUaW1lfVxuICogQHNlZSB7QGxpbmsgYXVkaXR9XG4gKiBAc2VlIHtAbGluayBhdWRpdFRpbWV9XG4gKlxuICogQHBhcmFtIGRlbGF5RHVyYXRpb25TZWxlY3RvciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBgT2JzZXJ2YWJsZUlucHV0YCBmb3JcbiAqIGVhY2ggYHZhbHVlYCBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgd2hpY2ggaXMgdGhlbiB1c2VkIHRvIGRlbGF5IHRoZVxuICogZW1pc3Npb24gb2YgdGhhdCBgdmFsdWVgIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSB1bnRpbCB0aGUgYE9ic2VydmFibGVJbnB1dGBcbiAqIHJldHVybmVkIGZyb20gdGhpcyBmdW5jdGlvbiBlbWl0cyBhIG5leHQgdmFsdWUuIFdoZW4gY2FsbGVkLCBiZXNpZGUgYHZhbHVlYCxcbiAqIHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgYSB6ZXJvLWJhc2VkIGBpbmRleGAgb2YgdGhlIGVtaXNzaW9uIG9yZGVyLlxuICogQHBhcmFtIHN1YnNjcmlwdGlvbkRlbGF5IEFuIE9ic2VydmFibGUgdGhhdCB0cmlnZ2VycyB0aGUgc3Vic2NyaXB0aW9uIHRvIHRoZVxuICogc291cmNlIE9ic2VydmFibGUgb25jZSBpdCBlbWl0cyBhbnkgdmFsdWUuXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBkZWxheXMgdGhlIGVtaXNzaW9ucyBvZlxuICogdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGJ5IGFuIGFtb3VudCBvZiB0aW1lIHNwZWNpZmllZCBieSB0aGUgT2JzZXJ2YWJsZVxuICogcmV0dXJuZWQgYnkgYGRlbGF5RHVyYXRpb25TZWxlY3RvcmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxheVdoZW48VD4oXG4gIGRlbGF5RHVyYXRpb25TZWxlY3RvcjogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBPYnNlcnZhYmxlSW5wdXQ8YW55PixcbiAgc3Vic2NyaXB0aW9uRGVsYXk/OiBPYnNlcnZhYmxlPGFueT5cbik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gIGlmIChzdWJzY3JpcHRpb25EZWxheSkge1xuICAgIC8vIERFUFJFQ0FURUQgUEFUSFxuICAgIHJldHVybiAoc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PlxuICAgICAgY29uY2F0KHN1YnNjcmlwdGlvbkRlbGF5LnBpcGUodGFrZSgxKSwgaWdub3JlRWxlbWVudHMoKSksIHNvdXJjZS5waXBlKGRlbGF5V2hlbihkZWxheUR1cmF0aW9uU2VsZWN0b3IpKSk7XG4gIH1cblxuICByZXR1cm4gbWVyZ2VNYXAoKHZhbHVlLCBpbmRleCkgPT4gaW5uZXJGcm9tKGRlbGF5RHVyYXRpb25TZWxlY3Rvcih2YWx1ZSwgaW5kZXgpKS5waXBlKHRha2UoMSksIG1hcFRvKHZhbHVlKSkpO1xufVxuIiwgImltcG9ydCB7IGFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGRlbGF5V2hlbiB9IGZyb20gJy4vZGVsYXlXaGVuJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS90aW1lcic7XG5cbi8qKlxuICogRGVsYXlzIHRoZSBlbWlzc2lvbiBvZiBpdGVtcyBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBieSBhIGdpdmVuIHRpbWVvdXQgb3JcbiAqIHVudGlsIGEgZ2l2ZW4gRGF0ZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+VGltZSBzaGlmdHMgZWFjaCBpdGVtIGJ5IHNvbWUgc3BlY2lmaWVkIGFtb3VudCBvZlxuICogbWlsbGlzZWNvbmRzLjwvc3Bhbj5cbiAqXG4gKiAhW10oZGVsYXkuc3ZnKVxuICpcbiAqIElmIHRoZSBkZWxheSBhcmd1bWVudCBpcyBhIE51bWJlciwgdGhpcyBvcGVyYXRvciB0aW1lIHNoaWZ0cyB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGJ5IHRoYXQgYW1vdW50IG9mIHRpbWUgZXhwcmVzc2VkIGluIG1pbGxpc2Vjb25kcy4gVGhlIHJlbGF0aXZlXG4gKiB0aW1lIGludGVydmFscyBiZXR3ZWVuIHRoZSB2YWx1ZXMgYXJlIHByZXNlcnZlZC5cbiAqXG4gKiBJZiB0aGUgZGVsYXkgYXJndW1lbnQgaXMgYSBEYXRlLCB0aGlzIG9wZXJhdG9yIHRpbWUgc2hpZnRzIHRoZSBzdGFydCBvZiB0aGVcbiAqIE9ic2VydmFibGUgZXhlY3V0aW9uIHVudGlsIHRoZSBnaXZlbiBkYXRlIG9jY3Vycy5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIERlbGF5IGVhY2ggY2xpY2sgYnkgb25lIHNlY29uZFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIGRlbGF5IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IGRlbGF5ZWRDbGlja3MgPSBjbGlja3MucGlwZShkZWxheSgxMDAwKSk7IC8vIGVhY2ggY2xpY2sgZW1pdHRlZCBhZnRlciAxIHNlY29uZFxuICogZGVsYXllZENsaWNrcy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBEZWxheSBhbGwgY2xpY2tzIHVudGlsIGEgZnV0dXJlIGRhdGUgaGFwcGVuc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIGRlbGF5IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgnTWFyY2ggMTUsIDIwNTAgMTI6MDA6MDAnKTsgLy8gaW4gdGhlIGZ1dHVyZVxuICogY29uc3QgZGVsYXllZENsaWNrcyA9IGNsaWNrcy5waXBlKGRlbGF5KGRhdGUpKTsgLy8gY2xpY2sgZW1pdHRlZCBvbmx5IGFmdGVyIHRoYXQgZGF0ZVxuICogZGVsYXllZENsaWNrcy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBkZWxheVdoZW59XG4gKiBAc2VlIHtAbGluayB0aHJvdHRsZX1cbiAqIEBzZWUge0BsaW5rIHRocm90dGxlVGltZX1cbiAqIEBzZWUge0BsaW5rIGRlYm91bmNlfVxuICogQHNlZSB7QGxpbmsgZGVib3VuY2VUaW1lfVxuICogQHNlZSB7QGxpbmsgc2FtcGxlfVxuICogQHNlZSB7QGxpbmsgc2FtcGxlVGltZX1cbiAqIEBzZWUge0BsaW5rIGF1ZGl0fVxuICogQHNlZSB7QGxpbmsgYXVkaXRUaW1lfVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfERhdGV9IGR1ZSBUaGUgZGVsYXkgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIChhIGBudW1iZXJgKSBvclxuICogYSBgRGF0ZWAgdW50aWwgd2hpY2ggdGhlIGVtaXNzaW9uIG9mIHRoZSBzb3VyY2UgaXRlbXMgaXMgZGVsYXllZC5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyTGlrZX0gW3NjaGVkdWxlcj1hc3luY10gVGhlIHtAbGluayBTY2hlZHVsZXJMaWtlfSB0byB1c2UgZm9yXG4gKiBtYW5hZ2luZyB0aGUgdGltZXJzIHRoYXQgaGFuZGxlIHRoZSB0aW1lLXNoaWZ0IGZvciBlYWNoIGl0ZW0uXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBkZWxheXMgdGhlIGVtaXNzaW9ucyBvZlxuICogdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGJ5IHRoZSBzcGVjaWZpZWQgdGltZW91dCBvciBEYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsYXk8VD4oZHVlOiBudW1iZXIgfCBEYXRlLCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UgPSBhc3luY1NjaGVkdWxlcik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gIGNvbnN0IGR1cmF0aW9uID0gdGltZXIoZHVlLCBzY2hlZHVsZXIpO1xuICByZXR1cm4gZGVsYXlXaGVuKCgpID0+IGR1cmF0aW9uKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbi8qKiBFbnN1cmUgdGhlIGl0ZW0gaXMgYWx3YXlzIHRoZSBsYXN0IHJlbmRlcmVkIHZhbHVlICovXG5leHBvcnQgY29uc3QgdXNlU3RhYmxlID0gPFQ+KHN0YWJsZTogVCkgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihzdGFibGUpO1xuICAgIHJlZi5jdXJyZW50ID0gc3RhYmxlO1xuICAgIHJldHVybiByZWY7XG59O1xuXG4vKiogRW5zdXJlIHRoZSBjYWxsYmFjayBpcyBhbHdheXMgdGhlIGxhc3QgcmVuZGVyZWQgY2FsbGJhY2ssIHNvIGl0IGhhcyByZWZlcmVuY2UgdG8gdGhlIGxhc3Qgc3RhdGVcbiAqXG4gKiBObyBuZWVkIGZvciBkZXBlbmRlbmNpZXMsIHRoaXMgd2lsbCBzaW1wbHkgaGF2ZSBhY2Nlc3MgdG8gdGhlIHZhbHVlcyB0aGF0IGV4aXN0ZWQgaW4gdGhlIHJlbmRlclxuICogd2hlbiBpdCB3YXMgY3JlYXRlZCBkdXJpbmcgdGhlIGxhc3QgcmVuZGVyLlxuICovXG5leHBvcnQgY29uc3QgdXNlU3RhYmxlQ2FsbGJhY2sgPSA8VEFyZ3MgZXh0ZW5kcyB1bmtub3duW10sIFRSZXR1cm4+KFxuICAgIHN0YWJsZTogKC4uLmFyZ3M6IFRBcmdzKSA9PiBUUmV0dXJuLFxuKSA9PiB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YWJsZSk7XG4gICAgcmVmLmN1cnJlbnQgPSBzdGFibGU7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB1c2VSZWYoKC4uLmFyZ3M6IFRBcmdzKSA9PiByZWYuY3VycmVudCguLi5hcmdzKSk7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmN1cnJlbnQ7XG59O1xuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFBvaW50ZXJFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCB0eXBlIE1vdXNlRXZlbnQgPSBQb2ludGVyRXZlbnQgJiB7XG4gICAgY2xpZW50WD86IG51bWJlcjtcbiAgICBjbGllbnRZPzogbnVtYmVyO1xuICAgIHBvaW50ZXJJZD86IG51bWJlcjtcbiAgICBidXR0b25zPzogbnVtYmVyO1xufTtcbmV4cG9ydCB0eXBlIFdoZWVsRXZlbnQgPSBQb2ludGVyRXZlbnQgJiB7IGRlbHRhWDogbnVtYmVyOyBkZWx0YVk6IG51bWJlcjsgZGVsdGFaOiBudW1iZXIgfTtcbmV4cG9ydCB0eXBlIE1vdXNlSG9zdCA9IFZpZXcgJiB7XG4gICAgc2V0UG9pbnRlckNhcHR1cmU6IChwb2ludGVySWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgICByZWxlYXNlUG9pbnRlckNhcHR1cmU6IChwb2ludGVySWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgICBvbndoZWVsPzogKGU6IFdoZWVsRXZlbnQpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZW51bSBNb3VzZUJ1dHRvbiB7XG4gICAgTGVmdCA9IDEsXG4gICAgUmlnaHQgPSAyLFxuICAgIE1pZGRsZSA9IDQsXG4gICAgQWxsID0gNyxcbn1cblxuZXhwb3J0IGNvbnN0IE1vdmVhYmxlVmlldyA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgcG9zaXRpb246IGluaXRQb3NpdGlvbixcbiAgICBvbk1vdmUsXG4gICAgbW91c2VCdXR0b24gPSBNb3VzZUJ1dHRvbi5BbGwsXG4gICAgZW5hYmxlU2NhbGluZyA9IGZhbHNlLFxuICAgIHdob2xlQ2FudmFzID0gZmFsc2UsXG4gICAgaW5uZXJDbGFzc05hbWUsXG4gICAgb3V0ZXJDbGFzc05hbWUsXG59OiB7XG4gICAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xuICAgIHBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH07XG4gICAgb25Nb3ZlOiAocG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXIgfSkgPT4gdm9pZDtcbiAgICBtb3VzZUJ1dHRvbj86IE1vdXNlQnV0dG9uO1xuICAgIGVuYWJsZVNjYWxpbmc/OiBib29sZWFuO1xuICAgIHdob2xlQ2FudmFzPzogYm9vbGVhbjtcbiAgICBpbm5lckNsYXNzTmFtZT86IHN0cmluZztcbiAgICBvdXRlckNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogaW5pdFBvc2l0aW9uLngsXG4gICAgICAgIHk6IGluaXRQb3NpdGlvbi55LFxuICAgICAgICBzY2FsZTogaW5pdFBvc2l0aW9uLnNjYWxlLFxuICAgICAgICBkcmFnUG9pbnRlcklkOiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB4RHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB5RHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB4UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeVBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdGFydERyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCEoKGUuYnV0dG9ucyA/PyAwKSAmIG1vdXNlQnV0dG9uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHhQb2ludGVyID0gZS5jbGllbnRYID8/IDA7XG4gICAgICAgIGNvbnN0IHlQb2ludGVyID0gZS5jbGllbnRZID8/IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBzdGFydERyYWdgLCB7IHhQb2ludGVyLCB5UG9pbnRlciwgZSwgcG9zaXRpb24sIGNvbnRleHRTY2FsZSB9KTtcblxuICAgICAgICBob3N0UmVmLmN1cnJlbnQ/LnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkID8/IDApO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBkcmFnUG9pbnRlcklkOiBlLnBvaW50ZXJJZCxcbiAgICAgICAgICAgIHhEcmFnU3RhcnQ6IHMueCxcbiAgICAgICAgICAgIHlEcmFnU3RhcnQ6IHMueSxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB4UG9pbnRlcixcbiAgICAgICAgICAgIHlQb2ludGVyRHJhZ1N0YXJ0OiB5UG9pbnRlcixcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVuZERyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmRyYWdQb2ludGVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhvc3RSZWYuY3VycmVudD8ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHBvc2l0aW9uLmRyYWdQb2ludGVySWQpO1xuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB4UG9pbnRlciA9IGUuY2xpZW50WCA/PyAwO1xuICAgICAgICBjb25zdCB5UG9pbnRlciA9IGUuY2xpZW50WSA/PyAwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgZW5kRHJhZ2AsIHsgeFBvaW50ZXIsIHlQb2ludGVyLCBlLCBwb3NpdGlvbiwgY29udGV4dFNjYWxlIH0pO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICB4OiAocy54RHJhZ1N0YXJ0ID8/IDApICsgKHhQb2ludGVyIC0gKHMueFBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlLFxuICAgICAgICAgICAgeTogKHMueURyYWdTdGFydCA/PyAwKSArICh5UG9pbnRlciAtIChzLnlQb2ludGVyRHJhZ1N0YXJ0ID8/IDApKSAvIGNvbnRleHRTY2FsZSxcbiAgICAgICAgICAgIGRyYWdQb2ludGVySWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICB5UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3ZlRHJhZyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBNb3VzZUV2ZW50LCBjb250ZXh0U2NhbGU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocG9zaXRpb24uZHJhZ1BvaW50ZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeFBvaW50ZXIgPSBlLmNsaWVudFggPz8gMDtcbiAgICAgICAgY29uc3QgeVBvaW50ZXIgPSBlLmNsaWVudFkgPz8gMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG1vdmVEcmFnYCwgeyB4UG9pbnRlciwgeVBvaW50ZXIsIGUsIHBvc2l0aW9uLCBjb250ZXh0U2NhbGUgfSk7XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIHg6IChzLnhEcmFnU3RhcnQgPz8gMCkgKyAoeFBvaW50ZXIgLSAocy54UG9pbnRlckRyYWdTdGFydCA/PyAwKSkgLyBjb250ZXh0U2NhbGUsXG4gICAgICAgICAgICB5OiAocy55RHJhZ1N0YXJ0ID8/IDApICsgKHlQb2ludGVyIC0gKHMueVBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzY3JvbGxXaGVlbCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbndoZWVsYCwgeyBlLCBwb3NpdGlvbiB9KTtcbiAgICAgICAgY29uc3QgZGVsdGFZID0gZS5kZWx0YVk7XG4gICAgICAgIGlmICghZGVsdGFZKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVuYWJsZVNjYWxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBzY2FsZTogcy5zY2FsZSAqIE1hdGgucG93KDAuOSwgZGVsdGFZID4gMCA/IDEgOiAtMSksXG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhvc3RSZWYgPSB1c2VSZWYobnVsbCBhcyBudWxsIHwgTW91c2VIb3N0KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBob3N0ID0gaG9zdFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBob3N0YCwgeyBob3N0IH0pO1xuICAgICAgICBob3N0Lm9ud2hlZWwgPSBzY3JvbGxXaGVlbDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhvc3Qub253aGVlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICB9LCBbIWhvc3RSZWYuY3VycmVudF0pO1xuXG4gICAgY29uc3Qgd2hvbGVIb3N0UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IE1vdXNlSG9zdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaG9zdCA9IHdob2xlSG9zdFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBob3N0YCwgeyBob3N0IH0pO1xuICAgICAgICBob3N0Lm9ud2hlZWwgPSBzY3JvbGxXaGVlbDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhvc3Qub253aGVlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICB9LCBbIXdob2xlSG9zdFJlZi5jdXJyZW50XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW92ZWFibGVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgeyh7IHBvc2l0aW9uOiBjb250ZXh0U2NhbGUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHt3aG9sZUNhbnZhcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3dob2xlSG9zdFJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtlID0+IHdob2xlQ2FudmFzICYmIHN0YXJ0RHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXtlID0+IGVuZERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJNb3ZlPXtlID0+IG1vdmVEcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e291dGVyQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtob3N0UmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17ZSA9PiB3aG9sZUNhbnZhcyAmJiBzdGFydERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXtlID0+IGVuZERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e2UgPT4gbW92ZURyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByZXNzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5uZXJDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4KSBzY2FsZSgke3Bvc2l0aW9uLnNjYWxlfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17ZSA9PiBzdGFydERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92ZWFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHBvc2l0aW9uLCB3aG9sZUNhbnZhcyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW92ZWFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Nb3ZlYWJsZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBNb3ZlYWJsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICB3aG9sZUNhbnZhczogZmFsc2UsXG4gICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgfSxcbn0pO1xuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwge1xuICAgIGNyZWF0ZUNvbnRleHQsXG4gICAgdXNlQ29udGV4dCxcbiAgICB1c2VFZmZlY3QsXG4gICAgdXNlTGF5b3V0RWZmZWN0LFxuICAgIHVzZVJlZixcbiAgICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCB6aXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlQ29udGV4dCwgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7XG4gICAgUGlwZXNjcmlwdE5vZGUsXG4gICAgUGlwZXNjcmlwdFBpcGUsXG4gICAgUGlwZXNjcmlwdFBpcGVWYWx1ZSxcbiAgICBQaXBlc2NyaXB0VHlwZSxcbiAgICBQaXBlc2NyaXB0VmFyaWFibGUsXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93LFxuICAgIFBpcGVzY3JpcHRXb3JrZmxvd0lucHV0LFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGdldFR5cGVOYW1lID0gKHR5cGU6IFBpcGVzY3JpcHRUeXBlKSA9PiB7XG4gICAgaWYgKHR5cGUua2luZCA9PT0gYHNpbXBsZWApIHtcbiAgICAgICAgcmV0dXJuIHR5cGUudHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodHlwZSk7XG59O1xuXG5jb25zdCBXb3JrZmxvd0lucHV0TmFtZSA9ICh7IGlucHV0IH06IHsgaW5wdXQ6IFBpcGVzY3JpcHRXb3JrZmxvd0lucHV0IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ibHVlLTMwMCAke2lucHV0Lmlnbm9yZWQgPyBgbGluZS10aHJvdWdoIG9wYWNpdHktNTBgIDogYGB9YH1cbiAgICAgICAgPntgJHtpbnB1dC5uYW1lfWB9PC9UZXh0PlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgV29ya0Zsb3dWaWV3ID0gKHtcbiAgICB3b3JrZmxvdyxcbiAgICBmdWxsID0gZmFsc2UsXG4gICAgaGlkZVRpdGxlcyA9IGZhbHNlLFxufToge1xuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3c7XG4gICAgZnVsbD86IGJvb2xlYW47XG4gICAgaGlkZVRpdGxlcz86IGJvb2xlYW47XG59KSA9PiB7XG4gICAgLy8gJHtmdWxsID8gYG1pbi13LVsyMHZ3XSBtaW4taC1bMjB2aF1gIDogYG1pbi13LVsyMHB4XSBtaW4taC1bMTBweF1gfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LWNvbHVtbiByZWxhdGl2ZSBiZy1zbGF0ZS05NTAvNzUgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gbS1bLTFweF0gcm91bmRlZFxuICAgICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyFoaWRlVGl0bGVzICYmIChcbiAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e2Ake3dvcmtmbG93Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmlucHV0cy5tYXAoaW5wdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5wdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya2Zsb3dJbnB1dE5hbWUgaW5wdXQ9e2lucHV0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyPXt3b3JrZmxvd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nanVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUgYW5pbWF0ZS1ib3VuY2UgdGV4dC1bOHB4XSBhYnNvbHV0ZSB0b3AtMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjZDRlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5ub2Rlcy5tYXAobiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e24ubm9kZUlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZVZpZXcgbm9kZT17bn0gY29udGFpbmVyPXt3b3JrZmxvd30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5vdXRwdXRzLm1hcChvdXRwdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0cHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xIGZsZXgtcm93IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZS5raW5kID09PSBgZGF0YWAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtcHVycGxlLTQwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3V0cHV0LnBpcGUuanNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvdXRwdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI9e3dvcmtmbG93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpcGU6IG91dHB1dC5waXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk/Lm1hcChzb3VyY2VJZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c291cmNlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uSWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG91dHB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlSWQ9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTMwMCc+e2Ake291dHB1dC5uYW1lfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuXG4gICAgICAgICAgICB7IWhpZGVUaXRsZXMgJiYgKFxuICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57YCR7d29ya2Zsb3cud29ya2Zsb3dVcml9YH08L1RleHQ+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Lyoge3dvcmtmbG93LndvcmtmbG93cz8ubWFwKHcgPT4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3cubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC0wIHRvcC0wIHNjYWxlLTUwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3d9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSl9ICovfVxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IE5vZGVWaWV3ID0gKHsgbm9kZSwgY29udGFpbmVyIH06IHsgbm9kZTogUGlwZXNjcmlwdE5vZGU7IGNvbnRhaW5lcjogUGlwZXNjcmlwdFdvcmtmbG93IH0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogbm9kZS5sYXlvdXQ/LnBvc2l0aW9uLnggPz8gMCxcbiAgICAgICAgeTogbm9kZS5sYXlvdXQ/LnBvc2l0aW9uLnkgPz8gMCxcbiAgICAgICAgc2NhbGU6IG5vZGUubGF5b3V0Py5zY2FsZSA/PyAxLFxuICAgIH0pO1xuICAgIGNvbnN0IG1vdmVOb2RlID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZhbHVlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgc2V0UG9zaXRpb24odmFsdWUpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd29ya2Zsb3cgPSAoKCkgPT4ge1xuICAgICAgICBpZiAobm9kZS5pbXBsZW1lbnRhdGlvbi5raW5kID09PSBgd29ya2Zsb3dgKSB7XG4gICAgICAgICAgICBjb25zdCBpbXAgPSBub2RlLmltcGxlbWVudGF0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci53b3JrZmxvd3M/LmZpbmQodyA9PiB3LndvcmtmbG93VXJpID09PSBpbXAud29ya2Zsb3dVcmkpO1xuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TW92ZWFibGVWaWV3XG4gICAgICAgICAgICBwb3NpdGlvbj17e1xuICAgICAgICAgICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBzY2FsZTogcG9zaXRpb24uc2NhbGUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3ZlPXttb3ZlTm9kZX1cbiAgICAgICAgICAgIG1vdXNlQnV0dG9uPXtNb3VzZUJ1dHRvbi5MZWZ0fVxuICAgICAgICA+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleC1jb2x1bW4gYmctemluYy05NTAvNzUgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gbS1bLTFweF0gcm91bmRlZCdcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weClgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e3dvcmtmbG93Lm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTIgdGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz4je25vZGUubm9kZUlkfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAge3dvcmtmbG93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpbnB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQaXBlID0gbm9kZS5pbnB1dFBpcGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0+IHAubmFtZSA9PT0gaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dFBpcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRQaXBlLmtpbmQgPT09IGBkYXRhYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nbWwtWy0xNnB4XSBtci1bMTZweF0gdGV4dC1wdXJwbGUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dFBpcGUuanNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbWwtWy04cHhdIG1yLVswcHhdJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbm9kZS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcj17Y29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JQaXBlU291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93OiBjb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXBlOiBub2RlLmlucHV0UGlwZXMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0+IHgubmFtZSA9PT0gaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pPy5tYXAoc291cmNlSWQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzb3VyY2VJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbklkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IG5vZGUubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlSWQ9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya2Zsb3dJbnB1dE5hbWUgaW5wdXQ9e2lucHV0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtGbG93VmlldyB3b3JrZmxvdz17d29ya2Zsb3d9IGhpZGVUaXRsZXMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cub3V0cHV0cy5tYXAob3V0cHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0cHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtYmx1ZS0zMDAnPntgJHtvdXRwdXQubmFtZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdtbC1bMHB4XSBtci1bLThweF0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG91dHB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI9e2NvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e25vZGUuaW1wbGVtZW50YXRpb24ufTwvVGV4dD4gKi99XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvTW92ZWFibGVWaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUgPSAoe1xuICAgIG5vZGVJZCxcbiAgICBuYW1lLFxuICAgIGRpcmVjdGlvbixcbn06IHtcbiAgICBub2RlSWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGlyZWN0aW9uOiBgb3V0YCB8IGBpbmA7XG59KSA9PiB7XG4gICAgcmV0dXJuIGBub2RlOiR7bm9kZUlkfToke2RpcmVjdGlvbn06JHtuYW1lfWA7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93ID0gKHtcbiAgICB3b3JrZmxvd1VyaSxcbiAgICBuYW1lLFxuICAgIGRpcmVjdGlvbixcbn06IHtcbiAgICB3b3JrZmxvd1VyaTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXJlY3Rpb246IGBvdXRgIHwgYGluYDtcbn0pID0+IHtcbiAgICByZXR1cm4gYHdvcmtmbG93OiR7d29ya2Zsb3dVcml9OiR7ZGlyZWN0aW9ufToke25hbWV9YDtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yUGlwZVNvdXJjZSA9ICh7XG4gICAgcGlwZSxcbiAgICB3b3JrZmxvdyxcbn06IHtcbiAgICBwaXBlOiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0UGlwZVZhbHVlO1xuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3c7XG59KSA9PiB7XG4gICAgaWYgKCFwaXBlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHBpcGUua2luZCA9PT0gYHdvcmtmbG93LWlucHV0YCkge1xuICAgICAgICByZXR1cm4gcGlwZS53b3JrZmxvd0lucHV0TmFtZXMubWFwKG5hbWUgPT5cbiAgICAgICAgICAgIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgIHdvcmtmbG93VXJpOiB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChwaXBlLmtpbmQgPT09IGBub2RlYCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlKHtcbiAgICAgICAgICAgICAgICBub2RlSWQ6IHBpcGUuc291cmNlTm9kZUlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IHBpcGUuc291cmNlTm9kZU91dHB1dE5hbWUsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8vIGlmKHBpcGUua2luZCA9PT0gYGRhdGFgKXtcblxuICAgIC8vIH1cblxuICAgIHJldHVybiBbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGUgPSB7XG4gICAgaG9zdE9ic2VydmFibGU6IE9ic2VydmFibGU8Vmlldz47XG4gICAgaG9zdFZpZXc6IG51bGwgfCBWaWV3O1xuICAgIGVuZHBvaW50czoge1xuICAgICAgICBbaWQ6IHN0cmluZ106IHVuZGVmaW5lZCB8IFN1YmplY3Q8eyB4OiBudW1iZXI7IHk6IG51bWJlciB9PjtcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBQaXBlRW5kcG9pbnRzUmVnaXN0cnkgPSBjcmVhdGVDb250ZXh0PFBpcGVFbmRwb2ludHNSZWdpc3RyeVR5cGU+KHtcbiAgICBob3N0T2JzZXJ2YWJsZTogbmV3IFN1YmplY3QoKSxcbiAgICBob3N0VmlldzogbnVsbCxcbiAgICBlbmRwb2ludHM6IHt9LFxufSk7XG5cbmNvbnN0IGdldE9yQ3JlYXRlRW5kcG9pbnRTdWJqZWN0ID0gKHJlZ2lzdHJ5OiBQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlLCBpZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgcmVnaXN0cnkuZW5kcG9pbnRzW2lkXVxuICAgICAgICA/PyAocmVnaXN0cnkuZW5kcG9pbnRzW2lkXSA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH0pKVxuICAgICk7XG59O1xuXG5jb25zdCBQaXBlVmlldyA9ICh7XG4gICAgc291cmNlSWQsXG4gICAgZGVzdGluYXRpb25JZCxcbn06IHtcbiAgICBzb3VyY2VJZDogdW5kZWZpbmVkIHwgc3RyaW5nO1xuICAgIGRlc3RpbmF0aW9uSWQ6IHN0cmluZztcbn0pID0+IHtcbiAgICBjb25zdCByZWdpc3RyeSA9IHVzZUNvbnRleHQoUGlwZUVuZHBvaW50c1JlZ2lzdHJ5KTtcblxuICAgIGNvbnN0IGRlc3RpbmF0aW9uRW5kcG9pbnQgPSBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgZGVzdGluYXRpb25JZCk7XG4gICAgY29uc3Qgc291cmNlRW5kcG9pbnQgPSAhc291cmNlSWQgPyB1bmRlZmluZWQgOiBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgc291cmNlSWQpO1xuXG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHNvdXJjZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIGRlc3RpbmF0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICB9KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghc291cmNlRW5kcG9pbnQgfHwgIWRlc3RpbmF0aW9uRW5kcG9pbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQaXBlVmlldyAhc291cmNlRW5kcG9pbnQgfHwgIWRlc3RpbmF0aW9uRW5kcG9pbnRgLCB7XG4gICAgICAgICAgICAgICAgc291cmNlSWQsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25JZCxcbiAgICAgICAgICAgICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgICAgICBzb3VyY2VFbmRwb2ludCxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbkVuZHBvaW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5pdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgICAgIGNvbWJpbmVMYXRlc3QoW3NvdXJjZUVuZHBvaW50LCBkZXN0aW5hdGlvbkVuZHBvaW50LCBpbml0XSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKFtzb3VyY2UsIGRlc3RpbmF0aW9uXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQaXBlVmlldyBkcmF3YCwgeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0pO1xuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKHsgc291cmNlLCBkZXN0aW5hdGlvbiB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaW5pdGlhbFxuICAgICAgICBjb25zb2xlLmxvZyhgaW5pdGlhbGApO1xuICAgICAgICBpbml0Lm5leHQoKTtcbiAgICB9LCBbIWRlc3RpbmF0aW9uRW5kcG9pbnQsICFzb3VyY2VFbmRwb2ludF0pO1xuXG4gICAgY29uc3QgZGVidWcgPSBmYWxzZTtcbiAgICBjb25zdCB4RGVsdGEgPSBwb3NpdGlvbi5kZXN0aW5hdGlvbi54IC0gcG9zaXRpb24uc291cmNlLng7XG4gICAgY29uc3QgeURlbHRhID0gcG9zaXRpb24uZGVzdGluYXRpb24ueSAtIHBvc2l0aW9uLnNvdXJjZS55O1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydCh4RGVsdGEgKiB4RGVsdGEgKyB5RGVsdGEgKiB5RGVsdGEpO1xuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMih5RGVsdGEsIHhEZWx0YSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LTAgaC0wIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3ctMCBoLTAgYWJzb2x1dGUnPlxuICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHsteERlbHRhICsgNH1weCwkey15RGVsdGEgLSAyfXB4KWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHthbmdsZX1yYWQpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1yZWQtNDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cblxuICAgICAgICAgICAgICAgIHtkZWJ1ZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3ctWzEwMDBweF0gdGV4dC1bNHB4XSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57YCgke3NvdXJjZUlkfSk9Pigke2Rlc3RpbmF0aW9uSWR9KWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+e2AoJHtwb3NpdGlvbi5zb3VyY2UueH0sJHtwb3NpdGlvbi5zb3VyY2UueX0pPT4oJHtwb3NpdGlvbi5kZXN0aW5hdGlvbi54fSwke3Bvc2l0aW9uLmRlc3RpbmF0aW9uLnl9KWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IFBpcGVFbmRwb2ludFZpZXcgPSAoeyBpZCwgY29udGFpbmVyIH06IHsgaWQ6IHN0cmluZzsgY29udGFpbmVyOiBQaXBlc2NyaXB0V29ya2Zsb3cgfSkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSAxMjtcblxuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnkpO1xuICAgIGNvbnN0IG1vdmVDb250ZXh0ID0gdXNlQ29udGV4dChNb3ZlYWJsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgdGFyZ2V0UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IFZpZXcpO1xuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVFbmRwb2ludFZpZXcgdXNlTGF5b3V0RWZmZWN0YCwgeyByZWdpc3RyeSB9KTtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoID0gcmVnaXN0cnkuaG9zdFZpZXc7XG4gICAgICAgICAgICBpZiAoIWgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUGlwZUVuZHBvaW50VmlldyB1c2VMYXlvdXRFZmZlY3QgLSBob3N0IE5PVCBSRUFEWWAsIHsgcmVnaXN0cnkgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdCA9IHRhcmdldFJlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKCF0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFBpcGVFbmRwb2ludFZpZXcgdXNlTGF5b3V0RWZmZWN0IC0gY29tcG9uZW50IE5PVCBSRUFEWWAsIHsgcmVnaXN0cnkgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0Lm1lYXN1cmVMYXlvdXQoaCwgKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdCBtZWFzdXJlTGF5b3V0IE5FWFRgLCB7XG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJ5LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgaWQpO1xuICAgICAgICAgICAgICAgIHMubmV4dCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IGxlZnQgKyBtb3ZlQ29udGV4dC5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICB5OiB0b3AgKyBtb3ZlQ29udGV4dC5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2FsY3VsYXRlKCk7XG4gICAgICAgIHJlZ2lzdHJ5Lmhvc3RPYnNlcnZhYmxlLnN1YnNjcmliZShoID0+IHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXG4gICAgICAgICEhdGFyZ2V0UmVmLmN1cnJlbnQsXG4gICAgICAgIG1vdmVDb250ZXh0LnBvc2l0aW9uLngsXG4gICAgICAgIG1vdmVDb250ZXh0LnBvc2l0aW9uLnksXG4gICAgICAgIG1vdmVDb250ZXh0LnBvc2l0aW9uLnNjYWxlLFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LTIgaC0yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8VmlldyByZWY9e3RhcmdldFJlZn0gY2xhc3NOYW1lPSd3LTAgaC0wIGFic29sdXRlIHB0LTEnPlxuICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS00MDAgYm9yZGVyLVsxcHhdIGJvcmRlci1ibHVlLTk1MCByb3VuZGVkLWZ1bGwnXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IC1zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogLXNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICIvLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwMS1kZWNsYXJhdGlvbnMvMDEudHMud29ya2Zsb3cuanNvbic7XG4vLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwMi1hc3NpZ25tZW50cy8wMy50cy53b3JrZmxvdy5qc29uJztcbi8vIGltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDAzLW9wZXJhdG9ycy8wMS50cy53b3JrZmxvdy5qc29uJztcbmltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDA0LW11dGF0aW9uLzAxLnRzLndvcmtmbG93Lmpzb24nO1xuLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDUtbG9naWMvMDIudHMud29ya2Zsb3cuanNvbic7XG5pbXBvcnQgeyBQaXBlc2NyaXB0V29ya2Zsb3cgfSBmcm9tICcuL3NyYy90eXBlcyc7XG5leHBvcnQgeyBXb3JrQ2FudmFzVmlldyB9IGZyb20gJy4vc3JjL3VpL3dvcmstY2FudmFzLXZpZXcnO1xuZXhwb3J0IGNvbnN0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93ID0gZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGFzIFBpcGVzY3JpcHRXb3JrZmxvdztcbiIsICJpbXBvcnQgeyBXb3JrQ2FudmFzVmlldywgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3cgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL3BpcGVzY3JpcHQnO1xuXG5leHBvcnQgY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiA8V29ya0NhbnZhc1ZpZXcgd29ya2Zsb3c9e2V4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93fSAvPjtcbn07XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIGJhY2tncm91bmRDb2xvciBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBhbmltYXRlZCBgdHJ1ZWAgdG8gYW5pbWF0ZSB0aGUgYmFja2dyb3VuZCBjb2xvciBjaGFuZ2UsIGBmYWxzZWAgdG8gY2hhbmdlIGltbWVkaWF0ZWx5LlxuICogQHBsYXRmb3JtIGFuZHJvaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyQmFja2dyb3VuZENvbG9yKGJhY2tncm91bmRDb2xvcjogc3RyaW5nLCBhbmltYXRlZDogYm9vbGVhbikge1xuICBTdGF0dXNCYXIuc2V0QmFja2dyb3VuZENvbG9yKGJhY2tncm91bmRDb2xvciwgYW5pbWF0ZWQpO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIHRoZSBuZXR3b3JrIGFjdGl2aXR5IGluZGljYXRvci5cbiAqIEBwYXJhbSB2aXNpYmxlIElmIHRoZSBuZXR3b3JrIGFjdGl2aXR5IGluZGljYXRvciBzaG91bGQgYmUgdmlzaWJsZS5cbiAqIEBwbGF0Zm9ybSBpb3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyTmV0d29ya0FjdGl2aXR5SW5kaWNhdG9yVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gIFN0YXR1c0Jhci5zZXROZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlKHZpc2libGUpO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhckFuaW1hdGlvbiB9IGZyb20gJy4vU3RhdHVzQmFyLnR5cGVzJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gaGlkZGVuIElmIHRoZSBzdGF0dXMgYmFyIHNob3VsZCBiZSBoaWRkZW4uXG4gKiBAcGFyYW0gYW5pbWF0aW9uIEFuaW1hdGlvbiB0byB1c2Ugd2hlbiB0b2dnbGluZyBoaWRkZW4sIGRlZmF1bHRzIHRvIGAnbm9uZSdgLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJIaWRkZW4oaGlkZGVuOiBib29sZWFuLCBhbmltYXRpb246IFN0YXR1c0JhckFuaW1hdGlvbikge1xuICBTdGF0dXNCYXIuc2V0SGlkZGVuKGhpZGRlbiwgYW5pbWF0aW9uKTtcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBTdGF0dXNCYXJTdHlsZSB9IGZyb20gJy4vU3RhdHVzQmFyLnR5cGVzJztcbmltcG9ydCBzdHlsZVRvQmFyU3R5bGUgZnJvbSAnLi9zdHlsZVRvQmFyU3R5bGUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBTZXQgdGhlIGJhciBzdHlsZSBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBzdHlsZSBUaGUgY29sb3Igb2YgdGhlIHN0YXR1cyBiYXIgdGV4dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyU3R5bGUoc3R5bGU6IFN0YXR1c0JhclN0eWxlKSB7XG4gIFN0YXR1c0Jhci5zZXRCYXJTdHlsZShzdHlsZVRvQmFyU3R5bGUoc3R5bGUpKTtcbn1cbiIsICJpbXBvcnQgeyBBcHBlYXJhbmNlLCBDb2xvclNjaGVtZU5hbWUgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBTdGF0dXNCYXJTdHlsZSB9IGZyb20gJy4vU3RhdHVzQmFyLnR5cGVzJztcblxuZnVuY3Rpb24gZ2V0Q29sb3JTY2hlbWUoKSB7XG4gIGlmIChBcHBlYXJhbmNlKSB7XG4gICAgcmV0dXJuIEFwcGVhcmFuY2UuZ2V0Q29sb3JTY2hlbWUoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ2xpZ2h0JztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHlsZVRvQmFyU3R5bGUoXG4gIHN0eWxlOiBTdGF0dXNCYXJTdHlsZSA9ICdhdXRvJyxcbiAgY29sb3JTY2hlbWU6IENvbG9yU2NoZW1lTmFtZSA9IGdldENvbG9yU2NoZW1lKClcbik6ICdsaWdodC1jb250ZW50JyB8ICdkYXJrLWNvbnRlbnQnIHtcbiAgaWYgKCFjb2xvclNjaGVtZSkge1xuICAgIGNvbG9yU2NoZW1lID0gJ2xpZ2h0JztcbiAgfVxuXG4gIGxldCByZXNvbHZlZFN0eWxlID0gc3R5bGU7XG4gIGlmIChzdHlsZSA9PT0gJ2F1dG8nKSB7XG4gICAgcmVzb2x2ZWRTdHlsZSA9IGNvbG9yU2NoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgfSBlbHNlIGlmIChzdHlsZSA9PT0gJ2ludmVydGVkJykge1xuICAgIHJlc29sdmVkU3R5bGUgPSBjb2xvclNjaGVtZSA9PT0gJ2xpZ2h0JyA/ICdsaWdodCcgOiAnZGFyayc7XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZWRTdHlsZSA9PT0gJ2xpZ2h0JyA/ICdsaWdodC1jb250ZW50JyA6ICdkYXJrLWNvbnRlbnQnO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFNldCB0aGUgdHJhbnNsdWNlbmN5IG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIHRyYW5zbHVjZW50IFdoZXRoZXIgdGhlIGFwcCBjYW4gZHJhdyB1bmRlciB0aGUgc3RhdHVzIGJhci4gV2hlbiBgdHJ1ZWAsIGNvbnRlbnQgd2lsbCBiZVxuICogcmVuZGVyZWQgdW5kZXIgdGhlIHN0YXR1cyBiYXIuIFRoaXMgaXMgYWx3YXlzIGB0cnVlYCBvbiBpT1MgYW5kIGNhbm5vdCBiZSBjaGFuZ2VkLlxuICogQHBsYXRmb3JtIGFuZHJvaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyVHJhbnNsdWNlbnQodHJhbnNsdWNlbnQ6IGJvb2xlYW4pIHtcbiAgU3RhdHVzQmFyLnNldFRyYW5zbHVjZW50KHRyYW5zbHVjZW50KTtcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdleHBvLXN0YXR1cy1iYXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcmVzc2FibGUsIFRleHQsIFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgY29uc3QgRXhhbXBsZVZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBpbmNyZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIHNldENvdW50KHMgPT4gcyArIDEpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgZmxleC1jb2wgZmxleC0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1yZWQtMTAwJz5cbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1jeWFuLTcwMCc+RXhhbXBsZVZpZXcgLi4uPC9UZXh0PlxuICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzPXtpbmNyZW1lbnR9PlxuICAgICAgICAgICAgICAgIDxUZXh0PntgSW5jcmVtZW50IGNvdW50OiR7Y291bnR9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQ+MDAzPC9UZXh0PlxuICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICA8U3RhdHVzQmFyIHN0eWxlPSdhdXRvJyAvPlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tICd0YWlsd2luZGNzcyc7XG5cbmV4cG9ydCBjb25zdCB0YWlsd2luZFRoZW1lOiBDb25maWdbYHRoZW1lYF0gPSB7XG4gICAgLy8gZWRpdCB5b3VyIHRhaWx3aW5kIHRoZW1lIGhlcmUhXG4gICAgLy8gaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9hZGRpbmctY3VzdG9tLXN0eWxlc1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUFBLEVBQ0UsYUFBZTtBQUFBLEVBQ2YsTUFBUTtBQUFBLEVBQ1IsUUFBVSxDQUFDO0FBQUEsRUFDWCxTQUFXO0FBQUEsSUFDVDtBQUFBLE1BQ0UsTUFBUTtBQUFBLE1BQ1IsTUFBUTtBQUFBLFFBQ04sTUFBUTtBQUFBLFFBQ1IsTUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLE1BQVE7QUFBQSxRQUNOLE1BQVE7QUFBQSxRQUNSLGNBQWdCO0FBQUEsUUFDaEIsc0JBQXdCO0FBQUEsTUFDMUI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLGFBQWU7QUFBQSxNQUNmLE1BQVE7QUFBQSxNQUNSLFFBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixNQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFXO0FBQUEsUUFDVDtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsTUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLG9CQUFzQjtBQUFBLGNBQ3BCO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsT0FBUyxDQUFDO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxNQUNFLGFBQWU7QUFBQSxNQUNmLE1BQVE7QUFBQSxNQUNSLFFBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixNQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0EsU0FBVztBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixNQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFXO0FBQUEsUUFDVDtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsTUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLG9CQUFzQjtBQUFBLGNBQ3BCO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsT0FBUyxDQUFDO0FBQUEsSUFDWjtBQUFB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QU0sTUFBTTtBQUNyQixTQUFPLENBQUMsZUFBZSxVQUFVLDRCQUE0QjtBQUNqRTs7O0FDSkEsU0FBUyxpQkFBaUI7OztBQ0ExQixTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQTFCLFNBQVMsYUFBQUMsa0JBQWlCOzs7QUNBMUIsU0FBUyxhQUFBQyxrQkFBaUI7OztBQ0ExQixTQUFTLGtCQUFtQzs7O0FDQTVDLFNBQVMsYUFBQUMsa0JBQWlCOzs7QUNDMUIsU0FBUyxZQUFBQyxpQkFBZ0I7QUFDekIsU0FBUyxhQUFBQyxZQUFXLFFBQUFDLE9BQU0sUUFBQUMsYUFBWTs7O0FDQS9CLElBQU0sZ0JBQWlDO0FBQUE7QUFBQTtBQUc5QzsiLAogICJuYW1lcyI6IFsidXNlTGF5b3V0RWZmZWN0IiwgInVzZVJlZiIsICJWaWV3IiwgImQiLCAiYiIsICJmcm9tIiwgInYiLCAiU3Vic2NyaXB0aW9uIiwgIlN1YnNjcmliZXIiLCAiQ29uc3VtZXJPYnNlcnZlciIsICJTYWZlU3Vic2NyaWJlciIsICJPYnNlcnZhYmxlIiwgIm9ic2VydmFibGUiLCAiT3BlcmF0b3JTdWJzY3JpYmVyIiwgImVyciIsICJTdWJqZWN0IiwgIm9ic2VydmFibGUiLCAiQW5vbnltb3VzU3ViamVjdCIsICJCZWhhdmlvclN1YmplY3QiLCAiQWN0aW9uIiwgImRlbGF5IiwgIkFzeW5jQWN0aW9uIiwgImRlbGF5IiwgIlNjaGVkdWxlciIsICJkZWxheSIsICJBc3luY1NjaGVkdWxlciIsICJkZWxheSIsICJkZWxheSIsICJkZWxheSIsICJpdGVyYXRvciIsICJpdGVyYXRvciIsICJpc0FycmF5IiwgImkiLCAidXNlUmVmIiwgInVzZVJlZiIsICJSZWFjdCIsICJjcmVhdGVDb250ZXh0IiwgInVzZVJlZiIsICJ1c2VTdGF0ZSIsICJWaWV3IiwgIlRleHQiLCAiVGV4dCIsICJWaWV3IiwgIlJlYWN0IiwgInVzZVN0YXRlIiwgImNyZWF0ZUNvbnRleHQiLCAidXNlUmVmIiwgInVzZVJlZiIsICJjb250ZXh0IiwgInVzZUxheW91dEVmZmVjdCIsICJWaWV3IiwgIlN0YXR1c0JhciIsICJTdGF0dXNCYXIiLCAiU3RhdHVzQmFyIiwgIlN0YXR1c0JhciIsICJ1c2VTdGF0ZSIsICJQcmVzc2FibGUiLCAiVGV4dCIsICJWaWV3Il0KfQo=
