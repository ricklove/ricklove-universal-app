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
import React4, { useLayoutEffect as useLayoutEffect3, useRef as useRef5, useState as useState5 } from "react";
import { View as View6, Text as Text6, Pressable as Pressable5 } from "react-native";

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
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
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
  return <MoveableContext.Consumer>{({ position: contextScale }) => <><View className="flex-col flex-1">
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

// ../../packages/pipescript/src/ui/node-instance-view.tsx
import React2, { createContext as createContext3, useContext as useContext2, useEffect as useEffect2, useState as useState3 } from "react";
import { View as View4, Text as Text4, Pressable as Pressable3, TextInput } from "react-native";

// ../../packages/pipescript/src/ui/pipes.tsx
import { createContext as createContext2, useContext, useLayoutEffect, useRef as useRef3, useState as useState2 } from "react";
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
  return <><View2 /></>;
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
  return <RunValueContext.Provider value={createRunValue()}>
    <View4 testID="NodeInstancesView:View" className="flex-row">{nodeInstances.map((x) => <React2.Fragment key={x.key}><NodeView nodeInstance={x} /></React2.Fragment>)}</View4>
    <RootComponentsView />
  </RunValueContext.Provider>;
};
var RootComponentsView = () => {
  const { Components } = useContext2(RunValueContext);
  const [rootComponents, setRootComponents] = useState3({});
  useEffect2(() => {
    Components.subscribe((x) => {
      console.log(`RootComponentsView: Components.subscribe`, { x });
      setRootComponents({ ...x });
    });
  }, []);
  return <View4 testID="RootComponentsView:View" className="flex-row">{[...Object.entries(rootComponents)].map(([k, V]) => <React2.Fragment key={k}><V /></React2.Fragment>)}</View4>;
};
var NodeView = ({ nodeInstance }) => {
  const [position, setPosition] = useState3({
    x: 0,
    y: 0,
    scale: 1
  });
  const moveNode = useStableCallback((value) => {
    setPosition(value);
    console.log(`NodeView`, { nodeInstance });
  });
  const workflow = nodeInstance.workflow;
  return <View4 className="p-1"><MoveableView
    position={{
      x: position.x,
      y: position.y,
      scale: position.scale
    }}
    onMove={moveNode}
    mouseButton={4 /* Middle */}
  ><View4 className="flex-col relative bg-slate-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded p-1">
    <Text4 className="text-yellow-400 self-center">{`${nodeInstance.workflow.name} #${nodeInstance.key}`}</Text4>
    <View4 className="flex-col flex-1">
      <View4 className="flex-col justify-start items-start">{workflow.inputs.map((input) => <React2.Fragment key={input.name}><NodeConnection
        variable={input}
        connection={nodeInstance.inputs.find(
          (x) => x.workflowInput === input
        )}
        hideOutput={nodeInstance.workflow.body.kind !== `nodes`}
      /></React2.Fragment>)}</View4>
      <View4 className="flex-1"><View4 className="flex-col justify-center items-center">
        <View4 className="justify-center items-center"><Text4 className="text-white animate-bounce text-[8px] absolute top-2">{"\u26CF"}</Text4></View4>
        <View4 className="flex-row flex-wrap">
          {nodeInstance.children.length && <>{nodeInstance.children.map((x) => <React2.Fragment key={x.key}><NodeView nodeInstance={x} /></React2.Fragment>)}</>}
          {workflow.body.kind === `operator` && <><Text4 className="text-blue-600">{workflow.body.operator}</Text4></>}
        </View4>
      </View4></View4>
      <View4 className="flex-col justify-end items-end">{workflow.outputs.map((output) => <React2.Fragment key={output.name}><NodeConnection
        variable={output}
        connection={nodeInstance.outputs.find(
          (x) => x.workflowOutput === output
        )}
        hideInput={nodeInstance.workflow.body.kind !== `nodes`}
      /></React2.Fragment>)}</View4>
    </View4>
  </View4></MoveableView></View4>;
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
  return <View4 className="flex-column">
    <View4 className="flex-row justify-start items-center">
      <View4 className="flex-column">{!hideInput && connection && <React2.Fragment key={connection.key}><View4 className="flex-row justify-start items-center">
        <PipeEndpointView id={getPipeConnectionKey(connection, `in`)} />
        <PipeValueView pipeValue={connection.inflowPipe} side="inflow" />
      </View4></React2.Fragment>}</View4>
      <View4 className="pl-1" />
      <Text4
        className={`text-blue-300 ${variable.ignored ? `line-through opacity-50` : ``}`}
      >{`${variable.name}`}</Text4>
      {variable.type && <>
        <Text4 className="text-white">:</Text4>
        <Text4 className="pl-1 text-green-800">{`${getTypeName(
          variable.type
        )}`}</Text4>
      </>}
      <View4 className="pl-1" />
      <View4 className="flex-column">{!hideOutput && connection && <React2.Fragment key={connection.key}>
        <PipeEndpointView id={getPipeConnectionKey(connection, `out`)} />
        {connection.outflowPipes.map(
          (outflowPipe) => outflowPipe && <React2.Fragment key={outflowPipe.key}><PipeValueView pipeValue={outflowPipe} side="outflow" /></React2.Fragment>
        )}
      </React2.Fragment>}</View4>
    </View4>
    {connection && <>
      <NodeConnectionValue connection={connection} />
      {connection.inflowPipe?.pipe.kind === `data` && <View4 className="m-[1px] bg-purple-100 opacity-50"><Text4 className="px-1 min-w-[60px] text-purple-400">{connection.inflowPipe?.pipe.json}</Text4></View4>}
    </>}
  </View4>;
};
var createRunValue = () => ({
  ValueChanged: new Subject(),
  Components: new BehaviorSubject({})
});
var RunValueContext = createContext3(createRunValue());
var NodeConnectionValue = ({
  connection
}) => {
  const runValueContext = useContext2(RunValueContext);
  const [runValue, setRunValue] = useState3(connection.runs?.value);
  const [hasOverride, setHasOverride] = useState3(!!connection.runs?.override);
  useEffect2(() => {
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
  return <><ValueEditorContainer
    id={connection.key}
    value={runValue}
    hasOverride={hasOverride}
    onChange={changeValue}
  /></>;
};
var ValueEditorContainer = ({
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
      components[id] = () => <ValueEditor
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
  return <><Pressable3 onPressIn={() => toggleEdit(true)}><View4 className={`m-[1px] ${hasOverride ? `bg-green-100 ` : `bg-purple-100`}`}><Text4
    className={`px-1 min-w-[60px] ${hasOverride ? `text-green-600` : `text-purple-600`}`}
  >{JSON.stringify(value)}</Text4></View4></Pressable3></>;
};
var ValueEditor = ({
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
  return <View4 className="absolute flex-col bg-gray-100 p-2 rounded z-10">
    <TextInput className="bg-white" value={value} onChangeText={(x) => setValue(x)} />
    <View4 className="flex-row justify-between">
      <Pressable3 onPress={cancel}><View4 className="bg-gray-200 p-1 m-1"><Text4>Cancel</Text4></View4></Pressable3>
      <Pressable3 onPress={clear}><View4 className="bg-red-200 p-1 m-1"><Text4>Clear</Text4></View4></Pressable3>
      <Pressable3 onPress={save}><View4 className="bg-blue-200 p-1 m-1"><Text4>Save</Text4></View4></Pressable3>
    </View4>
  </View4>;
};

// ../../packages/pipescript/src/ui/work-flow-view.tsx
import React3, {
  useState as useState4
} from "react";
import { View as View5, Text as Text5 } from "react-native";
var WorkFlowView = ({
  workflow,
  full = false,
  hideTitles = false
}) => {
  return <View5
    className={`flex-column relative bg-slate-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded
            `}
  >
    {!hideTitles && <Text5 className="text-yellow-400 self-center">{`${workflow.name}`}</Text5>}
    <View5 className="flex-row flex-1">
      <View5 className="flex-col justify-start items-start">{workflow.inputs.map((input) => <React3.Fragment key={input.name}><View5 className="p-1 flex-row justify-start items-center">
        <WorkflowInputName input={input} />
        <Text5 className="text-white">:</Text5>
        <Text5 className="pl-1 text-green-800">{`${getTypeName(
          input.type
        )}`}</Text5>
        <Text5 className="pl-1" />
        <View5 className=""><PipeEndpointView
          id={calculatePipeEndpointIdForWorkflow({
            workflowUri: workflow.workflowUri,
            direction: `in`,
            name: input.name
          })}
        /></View5>
        <Text5 className="pl-1" />
      </View5></React3.Fragment>)}</View5>
      <View5 className="flex-1"><View5 className="flex-col justify-center items-center">
        <View5 className="justify-center items-center"><Text5 className="text-white animate-bounce text-[8px] absolute top-2">{"\u26CF"}</Text5></View5>
        <View5 className="flex-row">
          {workflow.body.nodes?.map((n) => <React3.Fragment key={n.nodeId}><View5 className="p-2"><NodeView2 node={n} container={workflow} /></View5></React3.Fragment>)}
          {workflow.body.kind === `operator` && <><View5 className="p-2 flex-row items-center">
            <Text5 className="pl-1 text-blue-400">{workflow.body.operator}</Text5>
            <Text5 className="pl-1" />
            <View5 className="">{[
              calculatePipeEndpointIdForWorkflow({
                workflowUri: workflow.workflowUri,
                direction: `out`,
                name: `operator`
              })
            ].map((operatorEndpointId) => <React3.Fragment key={operatorEndpointId}>
              <PipeEndpointView id={operatorEndpointId} />
              {workflow.inputs.map((inPipe) => <React3.Fragment key={inPipe.name}><PipeView
                destinationId={operatorEndpointId}
                sourceId={calculatePipeEndpointIdForWorkflow(
                  {
                    workflowUri: workflow.workflowUri,
                    direction: `in`,
                    name: inPipe.name
                  }
                )}
              /></React3.Fragment>)}
            </React3.Fragment>)}</View5>
          </View5></>}
        </View5>
      </View5></View5>
      <View5 className="flex-col justify-end items-end">{workflow.outputs.map((output) => <React3.Fragment key={output.name}><View5 className="p-1 flex-row justify-end items-center">
        {output.pipe && <>{output.pipe.kind === `data` && <Text5 className="text-purple-400">{output.pipe.json}</Text5>}</>}
        <Text5 className="pr-1" />
        <View5 className="">
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
        </View5>
        <Text5 className="pr-1" />
        <Text5 className="text-blue-300">{`${output.name}`}</Text5>
        <Text5 className="text-white">:</Text5>
        <Text5 className="pl-1 text-green-800">{`${getTypeName(
          output.type
        )}`}</Text5>
      </View5></React3.Fragment>)}</View5>
    </View5>
    {!hideTitles && <Text5 className="text-yellow-400 self-center">{`${workflow.workflowUri}`}</Text5>}
    {
      /* {workflow.workflows?.map(w => (
          <React.Fragment key={w.name}>
              <View className='absolute left-0 top-0 scale-50'>
                  <WorkFlowView workflow={w} />
              </View>
          </React.Fragment>
      ))} */
    }
  </View5>;
};
var NodeView2 = ({ node, container }) => {
  const [position, setPosition] = useState4({
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
  ><View5
    className="flex-column bg-zinc-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded"
    style={{
      left: position.x,
      top: position.y
      // transform: `translate(${position.x}px, ${position.y}px)`,
    }}
  >
    <View5 className="flex-row justify-center">
      {workflow && <Text5 className="text-yellow-400 self-center">{workflow.name}</Text5>}
      <Text5 className="pl-2 text-yellow-400 self-center">
        {"#"}
        {node.nodeId}
      </Text5>
    </View5>
    {workflow && <View5 className="flex-row flex-1">
      <View5 className="flex-col justify-start items-start">{workflow.inputs.map((input) => <React3.Fragment key={input.name}><View5 className="p-1 flex-row justify-center items-center relative">
        {(() => {
          const inputPipe = node.inputPipes.find(
            (p) => p.name === input.name
          );
          if (!inputPipe) {
            return void 0;
          }
          return <>{inputPipe.kind === `data` && <Text5 className="ml-[-16px] mr-[16px] text-purple-400">{inputPipe.json}</Text5>}</>;
        })()}
        <View5 className="ml-[-8px] mr-[0px]">
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
        </View5>
        <Text5 className="pl-1" />
        <WorkflowInputName input={input} />
        {
          /* <Text className='text-white'>:</Text>
          <Text className='pl-1 text-green-800'>{`${getTypeName(
              input.type,
          )}`}</Text> */
        }
      </View5></React3.Fragment>)}</View5>
      <View5 className="flex-1"><WorkFlowView workflow={workflow} hideTitles /></View5>
      <View5 className="flex-col justify-end items-end">{workflow.outputs.map((output) => <React3.Fragment key={output.name}><View5 className="p-1 flex-row justify-center items-center relative">
        <Text5 className="text-blue-300">{`${output.name}`}</Text5>
        {
          /* <Text className='text-white'>:</Text>
          <Text className='pl-1 text-green-800'>{`${getTypeName(
              output.type,
          )}`}</Text> */
        }
        <Text5 className="pr-1" />
        <View5 className="ml-[0px] mr-[-8px]"><PipeEndpointView
          id={calculatePipeEndpointIdForNode({
            nodeId: node.nodeId,
            direction: `out`,
            name: output.name
          })}
        /></View5>
      </View5></React3.Fragment>)}</View5>
    </View5>}
    {
      /* <Text className='text-yellow-400 self-center'>{node.implementation.}</Text> */
    }
  </View5></MoveableView>;
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
  const nodeInstancesDatasetRef = useRef5(loadRuntime(workflow).dataset);
  const nodeInstances = nodeInstancesDatasetRef.current.rootNodeInstances;
  const viewRef = useRef5(null);
  const hostRef = useRef5(new Subject());
  const context2 = useRef5(createPipeEndpointsRegistry());
  const [pipes, setPipes] = useState5(context2.current.pipes.value);
  useLayoutEffect3(() => {
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
    HeaderComponent={useStableCallback(() => <View6 className="flex-row">{tabs.map((x) => <React4.Fragment key={x}><Pressable5 onPress={() => setTab(x)}><View6
      className={`p-1 m-1 border-solid border-[1px] border-gray-800 ${tab === x ? `` : `opacity-50`}`}
    ><Text6
      className={`text-gray-800 ${tab === x ? `` : `opacity-50`}`}
    >{x}</Text6></View6></Pressable5></React4.Fragment>)}</View6>)}
  ><View6 ref={viewRef} className="w-full h-full justify-center items-center"><PipeEndpointsRegistryContext.Provider value={context2.current}>
    {tab === `work-flow` && <WorkFlowView workflow={workflow} full />}
    {tab === `node-instances` && <NodeInstancesView nodeInstances={nodeInstances} full />}
  </PipeEndpointsRegistryContext.Provider></View6></MoveableView></View6>;
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
import { Pressable as Pressable6, Text as Text7, View as View7 } from "react-native";

// ../../packages/cl/src/design/tailwind/theme.ts
var tailwindTheme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
};
export {
  App,
  tailwindTheme
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdGVzdHMvY29kZS8wMDAzLW9wZXJhdG9ycy8wNC50cy53b3JrZmxvdy5qc29uIiwgIi4uLy4uLy4uL3BhY2thZ2VzL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2sudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvd29yay1jYW52YXMtdmlldy50c3giLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNGdW5jdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9jcmVhdGVFcnJvckNsYXNzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvYXJyUmVtb3ZlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJzY3JpcHRpb24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL2NvbmZpZy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9ub29wLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9Ob3RpZmljYXRpb25GYWN0b3JpZXMudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvZXJyb3JDb250ZXh0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJzY3JpYmVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9waXBlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9PYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9TdWJqZWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3QudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvbW92ZWFibGUtdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvbm9kZS1pbnN0YW5jZS12aWV3LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS9waXBlcy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvd29yay1uYW1lcy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvYW5hbHlzaXMvY2FsY3VsYXRlLXJ1bi50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLWZsb3ctdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvYW5hbHlzaXMvbG9hZC1kYXRhLnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvaW5kZXgudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvYXBwL3NyYy9pbmRleC50c3giLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyQmFja2dyb3VuZENvbG9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0Jhck5ldHdvcmtBY3Rpdml0eUluZGljYXRvclZpc2libGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFySGlkZGVuLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhclN0eWxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3N0eWxlVG9CYXJTdHlsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJUcmFuc2x1Y2VudC50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9jbC9zcmMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL2NsL3NyYy9kZXNpZ24vdGFpbHdpbmQvdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcbiAgXCJuYW1lXCI6IFwiXCIsXG4gIFwid29ya2Zsb3dVcmlcIjogXCJcIixcbiAgXCJpbnB1dHNcIjogW10sXG4gIFwib3V0cHV0c1wiOiBbXSxcbiAgXCJib2R5XCI6IHtcbiAgICBcImtpbmRcIjogXCJub2Rlc1wiLFxuICAgIFwibm9kZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50c1wiLFxuICAgICAgICBcIm5vZGVJZFwiOiBcIm1haW5cIixcbiAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIndvcmtmbG93c1wiOiBbXG4gICAge1xuICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHNcIixcbiAgICAgIFwibmFtZVwiOiBcImZpbGUudHNcIixcbiAgICAgIFwiaW5wdXRzXCI6IFtdLFxuICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czoyXCIsXG4gICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ3b3JrZmxvd3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYS1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvYS1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiZGVjbGFyYXRpb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzLypcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzLypcIixcbiAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcIipcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzLy1cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzLy1cIixcbiAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcIi1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzLypcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzLypcIixcbiAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcIipcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzLytcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzLytcIixcbiAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcIitcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzLytcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzLytcIixcbiAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcIitcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2ItZGVjbGFyYXRpb25cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzL2ItZGVjbGFyYXRpb25cIixcbiAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcImRlY2xhcmF0aW9uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImJvZHlcIjoge1xuICAgICAgICBcImtpbmRcIjogXCJub2Rlc1wiLFxuICAgICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6MVwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYS1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgXCJqc29uXCI6IFwiNDJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6M1wiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvKlwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjFcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICBcImpzb25cIjogXCIzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzOjRcIixcbiAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzLy1cIixcbiAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiZGF0YVwiLFxuICAgICAgICAgICAgICAgIFwianNvblwiOiBcIjJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjNcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwidmFsdWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6NVwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvKlwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjFcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6NFwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czo2XCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy8rXCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHM6MVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJhXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czo1XCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzOjdcIixcbiAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzLytcIixcbiAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czo2XCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiZGF0YVwiLFxuICAgICAgICAgICAgICAgIFwianNvblwiOiBcIjdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6MlwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYi1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjdcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwidmFsdWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdXG59IiwgImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuLyoqIEVuc3VyZSB0aGUgaXRlbSBpcyBhbHdheXMgdGhlIGxhc3QgcmVuZGVyZWQgdmFsdWUgKi9cbmV4cG9ydCBjb25zdCB1c2VTdGFibGUgPSA8VD4oc3RhYmxlOiBUKSA9PiB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YWJsZSk7XG4gICAgcmVmLmN1cnJlbnQgPSBzdGFibGU7XG4gICAgcmV0dXJuIHJlZjtcbn07XG5cbi8qKiBFbnN1cmUgdGhlIGNhbGxiYWNrIGlzIGFsd2F5cyB0aGUgbGFzdCByZW5kZXJlZCBjYWxsYmFjaywgc28gaXQgaGFzIHJlZmVyZW5jZSB0byB0aGUgbGFzdCBzdGF0ZVxuICpcbiAqIE5vIG5lZWQgZm9yIGRlcGVuZGVuY2llcywgdGhpcyB3aWxsIHNpbXBseSBoYXZlIGFjY2VzcyB0byB0aGUgdmFsdWVzIHRoYXQgZXhpc3RlZCBpbiB0aGUgcmVuZGVyXG4gKiB3aGVuIGl0IHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgbGFzdCByZW5kZXIuXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VTdGFibGVDYWxsYmFjayA9IDxUQXJncyBleHRlbmRzIHVua25vd25bXSwgVFJldHVybj4oXG4gICAgc3RhYmxlOiAoLi4uYXJnczogVEFyZ3MpID0+IFRSZXR1cm4sXG4pID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhYmxlKTtcbiAgICByZWYuY3VycmVudCA9IHN0YWJsZTtcbiAgICBjb25zdCBjYWxsYmFjayA9IHVzZVJlZigoLi4uYXJnczogVEFyZ3MpID0+IHJlZi5jdXJyZW50KC4uLmFyZ3MpKTtcbiAgICByZXR1cm4gY2FsbGJhY2suY3VycmVudDtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgZGVsYXkgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlVmlldyB9IGZyb20gJy4vbW92ZWFibGUtdmlldyc7XG5pbXBvcnQgeyBOb2RlSW5zdGFuY2VzVmlldyB9IGZyb20gJy4vbm9kZS1pbnN0YW5jZS12aWV3JztcbmltcG9ydCB7IFBpcGVFbmRwb2ludHNSZWdpc3RyeUNvbnRleHQsIGNyZWF0ZVBpcGVFbmRwb2ludHNSZWdpc3RyeSB9IGZyb20gJy4vcGlwZXMnO1xuaW1wb3J0IHsgV29ya0Zsb3dWaWV3IH0gZnJvbSAnLi93b3JrLWZsb3ctdmlldyc7XG5pbXBvcnQgeyBsb2FkUnVudGltZSB9IGZyb20gJy4uL2FuYWx5c2lzL2xvYWQtZGF0YSc7XG5pbXBvcnQgeyBQaXBlc2NyaXB0V29ya2Zsb3cgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBXb3JrQ2FudmFzVmlldyA9ICh7IHdvcmtmbG93IH06IHsgd29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdyB9KSA9PiB7XG4gICAgY29uc3Qgbm9kZUluc3RhbmNlc0RhdGFzZXRSZWYgPSB1c2VSZWYobG9hZFJ1bnRpbWUod29ya2Zsb3cpLmRhdGFzZXQpO1xuICAgIGNvbnN0IG5vZGVJbnN0YW5jZXMgPSBub2RlSW5zdGFuY2VzRGF0YXNldFJlZi5jdXJyZW50LnJvb3ROb2RlSW5zdGFuY2VzO1xuXG4gICAgY29uc3Qgdmlld1JlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBWaWV3KTtcbiAgICBjb25zdCBob3N0UmVmID0gdXNlUmVmKG5ldyBTdWJqZWN0PFZpZXc+KCkpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VSZWYoY3JlYXRlUGlwZUVuZHBvaW50c1JlZ2lzdHJ5KCkpO1xuXG4gICAgY29uc3QgW3BpcGVzLCBzZXRQaXBlc10gPSB1c2VTdGF0ZShjb250ZXh0LmN1cnJlbnQucGlwZXMudmFsdWUpO1xuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF2aWV3UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmN1cnJlbnQuaG9zdFZpZXcgPSB2aWV3UmVmLmN1cnJlbnQ7XG4gICAgICAgIGhvc3RSZWYuY3VycmVudC5uZXh0KHZpZXdSZWYuY3VycmVudCk7XG5cbiAgICAgICAgY29uc3Qgc3ViID0gY29udGV4dC5jdXJyZW50LnBpcGVzLnN1YnNjcmliZSh2ID0+IHtcbiAgICAgICAgICAgIHNldFBpcGVzKHYpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0UGlwZXMocGlwZXMpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSwgWyF2aWV3UmVmLmN1cnJlbnRdKTtcblxuICAgIGNvbnN0IHRhYnMgPSBbYHdvcmstZmxvd2AsIGBub2RlLWluc3RhbmNlc2BdIGFzIGNvbnN0O1xuICAgIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZShgd29yay1mbG93YCBhcyAodHlwZW9mIHRhYnMpW251bWJlcl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy1zbGF0ZS05MDAgdy1mdWxsIGgtZnVsbCBvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgICAgICAgPE1vdmVhYmxlVmlld1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25Nb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbW91c2VCdXR0b249e01vdXNlQnV0dG9uLk1pZGRsZX1cbiAgICAgICAgICAgICAgICBlbmFibGVTY2FsaW5nXG4gICAgICAgICAgICAgICAgd2hvbGVDYW52YXNcbiAgICAgICAgICAgICAgICBvdXRlckNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCdcbiAgICAgICAgICAgICAgICBpbm5lckNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCdcbiAgICAgICAgICAgICAgICBIZWFkZXJDb21wb25lbnQ9e3VzZVN0YWJsZUNhbGxiYWNrKCgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFicy5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVzc2FibGUgb25QcmVzcz17KCkgPT4gc2V0VGFiKHgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0xIG0tMSBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIGJvcmRlci1ncmF5LTgwMCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIgPT09IHggPyBgYCA6IGBvcGFjaXR5LTUwYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtZ3JheS04MDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYiA9PT0geCA/IGBgIDogYG9wYWNpdHktNTBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VmlldyByZWY9e3ZpZXdSZWZ9IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dC5jdXJyZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWIgPT09IGB3b3JrLWZsb3dgICYmIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3dvcmtmbG93fSBmdWxsIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYiA9PT0gYG5vZGUtaW5zdGFuY2VzYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVJbnN0YW5jZXNWaWV3IG5vZGVJbnN0YW5jZXM9e25vZGVJbnN0YW5jZXN9IGZ1bGwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuIiwgIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2U7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChlbnYuc3RhY2subGVuZ3RoKSB7XG4gICAgICB2YXIgcmVjID0gZW52LnN0YWNrLnBvcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlYy5kaXNwb3NlICYmIHJlYy5kaXNwb3NlLmNhbGwocmVjLnZhbHVlKTtcbiAgICAgICAgaWYgKHJlYy5hc3luYykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbn07XG4iLCAiLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZTogYW55KTogdmFsdWUgaXMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuIiwgIi8qKlxuICogVXNlZCB0byBjcmVhdGUgRXJyb3Igc3ViY2xhc3NlcyB1bnRpbCB0aGUgY29tbXVuaXR5IG1vdmVzIGF3YXkgZnJvbSBFUzUuXG4gKlxuICogVGhpcyBpcyBiZWNhdXNlIGNvbXBpbGluZyBmcm9tIFR5cGVTY3JpcHQgZG93biB0byBFUzUgaGFzIGlzc3VlcyB3aXRoIHN1YmNsYXNzaW5nIEVycm9yc1xuICogYXMgd2VsbCBhcyBvdGhlciBidWlsdC1pbiB0eXBlczogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMjEyM1xuICpcbiAqIEBwYXJhbSBjcmVhdGVJbXBsIEEgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGFjdHVhbCBjb25zdHJ1Y3RvciBpbXBsZW1lbnRhdGlvbi4gVGhlIHJldHVybmVkXG4gKiBmdW5jdGlvbiBzaG91bGQgYmUgYSBuYW1lZCBmdW5jdGlvbiB0aGF0IGNhbGxzIGBfc3VwZXJgIGludGVybmFsbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFcnJvckNsYXNzPFQ+KGNyZWF0ZUltcGw6IChfc3VwZXI6IGFueSkgPT4gYW55KTogVCB7XG4gIGNvbnN0IF9zdXBlciA9IChpbnN0YW5jZTogYW55KSA9PiB7XG4gICAgRXJyb3IuY2FsbChpbnN0YW5jZSk7XG4gICAgaW5zdGFuY2Uuc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgfTtcblxuICBjb25zdCBjdG9yRnVuYyA9IGNyZWF0ZUltcGwoX3N1cGVyKTtcbiAgY3RvckZ1bmMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICBjdG9yRnVuYy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yRnVuYztcbiAgcmV0dXJuIGN0b3JGdW5jO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUVycm9yQ2xhc3MgfSBmcm9tICcuL2NyZWF0ZUVycm9yQ2xhc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVuc3Vic2NyaXB0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHJlYWRvbmx5IGVycm9yczogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5zdWJzY3JpcHRpb25FcnJvckN0b3Ige1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLiBEbyBub3QgY29uc3RydWN0IGVycm9yIGluc3RhbmNlcy5cbiAgICogQ2Fubm90IGJlIHRhZ2dlZCBhcyBpbnRlcm5hbDogaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlWC9yeGpzL2lzc3Vlcy82MjY5XG4gICAqL1xuICBuZXcgKGVycm9yczogYW55W10pOiBVbnN1YnNjcmlwdGlvbkVycm9yO1xufVxuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIG9uZSBvciBtb3JlIGVycm9ycyBoYXZlIG9jY3VycmVkIGR1cmluZyB0aGVcbiAqIGB1bnN1YnNjcmliZWAgb2YgYSB7QGxpbmsgU3Vic2NyaXB0aW9ufS5cbiAqL1xuZXhwb3J0IGNvbnN0IFVuc3Vic2NyaXB0aW9uRXJyb3I6IFVuc3Vic2NyaXB0aW9uRXJyb3JDdG9yID0gY3JlYXRlRXJyb3JDbGFzcyhcbiAgKF9zdXBlcikgPT5cbiAgICBmdW5jdGlvbiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbCh0aGlzOiBhbnksIGVycm9yczogKEVycm9yIHwgc3RyaW5nKVtdKSB7XG4gICAgICBfc3VwZXIodGhpcyk7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvcnNcbiAgICAgICAgPyBgJHtlcnJvcnMubGVuZ3RofSBlcnJvcnMgb2NjdXJyZWQgZHVyaW5nIHVuc3Vic2NyaXB0aW9uOlxuJHtlcnJvcnMubWFwKChlcnIsIGkpID0+IGAke2kgKyAxfSkgJHtlcnIudG9TdHJpbmcoKX1gKS5qb2luKCdcXG4gICcpfWBcbiAgICAgICAgOiAnJztcbiAgICAgIHRoaXMubmFtZSA9ICdVbnN1YnNjcmlwdGlvbkVycm9yJztcbiAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH1cbik7XG4iLCAiLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhbiBhcnJheSwgbXV0YXRpbmcgaXQuXG4gKiBAcGFyYW0gYXJyIFRoZSBhcnJheSB0byByZW1vdmUgdGhlIGl0ZW0gZnJvbVxuICogQHBhcmFtIGl0ZW0gVGhlIGl0ZW0gdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJSZW1vdmU8VD4oYXJyOiBUW10gfCB1bmRlZmluZWQgfCBudWxsLCBpdGVtOiBUKSB7XG4gIGlmIChhcnIpIHtcbiAgICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIDAgPD0gaW5kZXggJiYgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgVW5zdWJzY3JpcHRpb25FcnJvciB9IGZyb20gJy4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkxpa2UsIFRlYXJkb3duTG9naWMsIFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuL3V0aWwvYXJyUmVtb3ZlJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZGlzcG9zYWJsZSByZXNvdXJjZSwgc3VjaCBhcyB0aGUgZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUuIEFcbiAqIFN1YnNjcmlwdGlvbiBoYXMgb25lIGltcG9ydGFudCBtZXRob2QsIGB1bnN1YnNjcmliZWAsIHRoYXQgdGFrZXMgbm8gYXJndW1lbnRcbiAqIGFuZCBqdXN0IGRpc3Bvc2VzIHRoZSByZXNvdXJjZSBoZWxkIGJ5IHRoZSBzdWJzY3JpcHRpb24uXG4gKlxuICogQWRkaXRpb25hbGx5LCBzdWJzY3JpcHRpb25zIG1heSBiZSBncm91cGVkIHRvZ2V0aGVyIHRocm91Z2ggdGhlIGBhZGQoKWBcbiAqIG1ldGhvZCwgd2hpY2ggd2lsbCBhdHRhY2ggYSBjaGlsZCBTdWJzY3JpcHRpb24gdG8gdGhlIGN1cnJlbnQgU3Vic2NyaXB0aW9uLlxuICogV2hlbiBhIFN1YnNjcmlwdGlvbiBpcyB1bnN1YnNjcmliZWQsIGFsbCBpdHMgY2hpbGRyZW4gKGFuZCBpdHMgZ3JhbmRjaGlsZHJlbilcbiAqIHdpbGwgYmUgdW5zdWJzY3JpYmVkIGFzIHdlbGwuXG4gKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uIGltcGxlbWVudHMgU3Vic2NyaXB0aW9uTGlrZSB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBwdWJsaWMgc3RhdGljIEVNUFRZID0gKCgpID0+IHtcbiAgICBjb25zdCBlbXB0eSA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBlbXB0eS5jbG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiBlbXB0eTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogQSBmbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhpcyBTdWJzY3JpcHRpb24gaGFzIGFscmVhZHkgYmVlbiB1bnN1YnNjcmliZWQuXG4gICAqL1xuICBwdWJsaWMgY2xvc2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcGFyZW50YWdlOiBTdWJzY3JpcHRpb25bXSB8IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiByZWdpc3RlcmVkIGZpbmFsaXplcnMgdG8gZXhlY3V0ZSB1cG9uIHVuc3Vic2NyaXB0aW9uLiBBZGRpbmcgYW5kIHJlbW92aW5nIGZyb20gdGhpc1xuICAgKiBsaXN0IG9jY3VycyBpbiB0aGUge0BsaW5rICNhZGR9IGFuZCB7QGxpbmsgI3JlbW92ZX0gbWV0aG9kcy5cbiAgICovXG4gIHByaXZhdGUgX2ZpbmFsaXplcnM6IEV4Y2x1ZGU8VGVhcmRvd25Mb2dpYywgdm9pZD5bXSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gaW5pdGlhbFRlYXJkb3duIEEgZnVuY3Rpb24gZXhlY3V0ZWQgZmlyc3QgYXMgcGFydCBvZiB0aGUgZmluYWxpemF0aW9uXG4gICAqIHByb2Nlc3MgdGhhdCBpcyBraWNrZWQgb2ZmIHdoZW4ge0BsaW5rICN1bnN1YnNjcmliZX0gaXMgY2FsbGVkLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbml0aWFsVGVhcmRvd24/OiAoKSA9PiB2b2lkKSB7fVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlcyB0aGUgcmVzb3VyY2VzIGhlbGQgYnkgdGhlIHN1YnNjcmlwdGlvbi4gTWF5LCBmb3IgaW5zdGFuY2UsIGNhbmNlbFxuICAgKiBhbiBvbmdvaW5nIE9ic2VydmFibGUgZXhlY3V0aW9uIG9yIGNhbmNlbCBhbnkgb3RoZXIgdHlwZSBvZiB3b3JrIHRoYXRcbiAgICogc3RhcnRlZCB3aGVuIHRoZSBTdWJzY3JpcHRpb24gd2FzIGNyZWF0ZWQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB1bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBsZXQgZXJyb3JzOiBhbnlbXSB8IHVuZGVmaW5lZDtcblxuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcblxuICAgICAgLy8gUmVtb3ZlIHRoaXMgZnJvbSBpdCdzIHBhcmVudHMuXG4gICAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgICBpZiAoX3BhcmVudGFnZSkge1xuICAgICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgICAgIGZvciAoY29uc3QgcGFyZW50IG9mIF9wYXJlbnRhZ2UpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9wYXJlbnRhZ2UucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgaW5pdGlhbFRlYXJkb3duOiBpbml0aWFsRmluYWxpemVyIH0gPSB0aGlzO1xuICAgICAgaWYgKGlzRnVuY3Rpb24oaW5pdGlhbEZpbmFsaXplcikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpbml0aWFsRmluYWxpemVyKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBlcnJvcnMgPSBlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvciA/IGUuZXJyb3JzIDogW2VdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgX2ZpbmFsaXplcnMgfSA9IHRoaXM7XG4gICAgICBpZiAoX2ZpbmFsaXplcnMpIHtcbiAgICAgICAgdGhpcy5fZmluYWxpemVycyA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgZmluYWxpemVyIG9mIF9maW5hbGl6ZXJzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGV4ZWNGaW5hbGl6ZXIoZmluYWxpemVyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyA/PyBbXTtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVyci5lcnJvcnNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZmluYWxpemVyIHRvIHRoaXMgc3Vic2NyaXB0aW9uLCBzbyB0aGF0IGZpbmFsaXphdGlvbiB3aWxsIGJlIHVuc3Vic2NyaWJlZC9jYWxsZWRcbiAgICogd2hlbiB0aGlzIHN1YnNjcmlwdGlvbiBpcyB1bnN1YnNjcmliZWQuIElmIHRoaXMgc3Vic2NyaXB0aW9uIGlzIGFscmVhZHkge0BsaW5rICNjbG9zZWR9LFxuICAgKiBiZWNhdXNlIGl0IGhhcyBhbHJlYWR5IGJlZW4gdW5zdWJzY3JpYmVkLCB0aGVuIHdoYXRldmVyIGZpbmFsaXplciBpcyBwYXNzZWQgdG8gaXRcbiAgICogd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGV4ZWN1dGVkICh1bmxlc3MgdGhlIGZpbmFsaXplciBpdHNlbGYgaXMgYWxzbyBhIGNsb3NlZCBzdWJzY3JpcHRpb24pLlxuICAgKlxuICAgKiBDbG9zZWQgU3Vic2NyaXB0aW9ucyBjYW5ub3QgYmUgYWRkZWQgYXMgZmluYWxpemVycyB0byBhbnkgc3Vic2NyaXB0aW9uLiBBZGRpbmcgYSBjbG9zZWRcbiAgICogc3Vic2NyaXB0aW9uIHRvIGEgYW55IHN1YnNjcmlwdGlvbiB3aWxsIHJlc3VsdCBpbiBubyBvcGVyYXRpb24uIChBIG5vb3ApLlxuICAgKlxuICAgKiBBZGRpbmcgYSBzdWJzY3JpcHRpb24gdG8gaXRzZWxmLCBvciBhZGRpbmcgYG51bGxgIG9yIGB1bmRlZmluZWRgIHdpbGwgbm90IHBlcmZvcm0gYW55XG4gICAqIG9wZXJhdGlvbiBhdCBhbGwuIChBIG5vb3ApLlxuICAgKlxuICAgKiBgU3Vic2NyaXB0aW9uYCBpbnN0YW5jZXMgdGhhdCBhcmUgYWRkZWQgdG8gdGhpcyBpbnN0YW5jZSB3aWxsIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZW1zZWx2ZXNcbiAgICogaWYgdGhleSBhcmUgdW5zdWJzY3JpYmVkLiBGdW5jdGlvbnMgYW5kIHtAbGluayBVbnN1YnNjcmliYWJsZX0gb2JqZWN0cyB0aGF0IHlvdSB3aXNoIHRvIHJlbW92ZVxuICAgKiB3aWxsIG5lZWQgdG8gYmUgcmVtb3ZlZCBtYW51YWxseSB3aXRoIHtAbGluayAjcmVtb3ZlfVxuICAgKlxuICAgKiBAcGFyYW0gdGVhcmRvd24gVGhlIGZpbmFsaXphdGlvbiBsb2dpYyB0byBhZGQgdG8gdGhpcyBzdWJzY3JpcHRpb24uXG4gICAqL1xuICBhZGQodGVhcmRvd246IFRlYXJkb3duTG9naWMpOiB2b2lkIHtcbiAgICAvLyBPbmx5IGFkZCB0aGUgZmluYWxpemVyIGlmIGl0J3Mgbm90IHVuZGVmaW5lZFxuICAgIC8vIGFuZCBkb24ndCBhZGQgYSBzdWJzY3JpcHRpb24gdG8gaXRzZWxmLlxuICAgIGlmICh0ZWFyZG93biAmJiB0ZWFyZG93biAhPT0gdGhpcykge1xuICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgIC8vIElmIHRoaXMgc3Vic2NyaXB0aW9uIGlzIGFscmVhZHkgY2xvc2VkLFxuICAgICAgICAvLyBleGVjdXRlIHdoYXRldmVyIGZpbmFsaXplciBpcyBoYW5kZWQgdG8gaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgZXhlY0ZpbmFsaXplcih0ZWFyZG93bik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAvLyBXZSBkb24ndCBhZGQgY2xvc2VkIHN1YnNjcmlwdGlvbnMsIGFuZCB3ZSBkb24ndCBhZGQgdGhlIHNhbWUgc3Vic2NyaXB0aW9uXG4gICAgICAgICAgLy8gdHdpY2UuIFN1YnNjcmlwdGlvbiB1bnN1YnNjcmliZSBpcyBpZGVtcG90ZW50LlxuICAgICAgICAgIGlmICh0ZWFyZG93bi5jbG9zZWQgfHwgdGVhcmRvd24uX2hhc1BhcmVudCh0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZWFyZG93bi5fYWRkUGFyZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgICh0aGlzLl9maW5hbGl6ZXJzID0gdGhpcy5fZmluYWxpemVycyA/PyBbXSkucHVzaCh0ZWFyZG93bik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgYSB0aGlzIHN1YnNjcmlwdGlvbiBhbHJlYWR5IGhhcyBhIHBhcnRpY3VsYXIgcGFyZW50LlxuICAgKiBUaGlzIHdpbGwgc2lnbmFsIHRoYXQgdGhpcyBzdWJzY3JpcHRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgcGFyZW50IGluIHF1ZXN0aW9uLlxuICAgKiBAcGFyYW0gcGFyZW50IHRoZSBwYXJlbnQgdG8gY2hlY2sgZm9yXG4gICAqL1xuICBwcml2YXRlIF9oYXNQYXJlbnQocGFyZW50OiBTdWJzY3JpcHRpb24pIHtcbiAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgcmV0dXJuIF9wYXJlbnRhZ2UgPT09IHBhcmVudCB8fCAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSAmJiBfcGFyZW50YWdlLmluY2x1ZGVzKHBhcmVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwYXJlbnQgdG8gdGhpcyBzdWJzY3JpcHRpb24gc28gaXQgY2FuIGJlIHJlbW92ZWQgZnJvbSB0aGUgcGFyZW50IGlmIGl0XG4gICAqIHVuc3Vic2NyaWJlcyBvbiBpdCdzIG93bi5cbiAgICpcbiAgICogTk9URTogVEhJUyBBU1NVTUVTIFRIQVQge0BsaW5rIF9oYXNQYXJlbnR9IEhBUyBBTFJFQURZIEJFRU4gQ0hFQ0tFRC5cbiAgICogQHBhcmFtIHBhcmVudCBUaGUgcGFyZW50IHN1YnNjcmlwdGlvbiB0byBhZGRcbiAgICovXG4gIHByaXZhdGUgX2FkZFBhcmVudChwYXJlbnQ6IFN1YnNjcmlwdGlvbikge1xuICAgIGNvbnN0IHsgX3BhcmVudGFnZSB9ID0gdGhpcztcbiAgICB0aGlzLl9wYXJlbnRhZ2UgPSBBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpID8gKF9wYXJlbnRhZ2UucHVzaChwYXJlbnQpLCBfcGFyZW50YWdlKSA6IF9wYXJlbnRhZ2UgPyBbX3BhcmVudGFnZSwgcGFyZW50XSA6IHBhcmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gYSBjaGlsZCB3aGVuIGl0IGlzIHJlbW92ZWQgdmlhIHtAbGluayAjcmVtb3ZlfS5cbiAgICogQHBhcmFtIHBhcmVudCBUaGUgcGFyZW50IHRvIHJlbW92ZVxuICAgKi9cbiAgcHJpdmF0ZSBfcmVtb3ZlUGFyZW50KHBhcmVudDogU3Vic2NyaXB0aW9uKSB7XG4gICAgY29uc3QgeyBfcGFyZW50YWdlIH0gPSB0aGlzO1xuICAgIGlmIChfcGFyZW50YWdlID09PSBwYXJlbnQpIHtcbiAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICBhcnJSZW1vdmUoX3BhcmVudGFnZSwgcGFyZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGZpbmFsaXplciBmcm9tIHRoaXMgc3Vic2NyaXB0aW9uIHRoYXQgd2FzIHByZXZpb3VzbHkgYWRkZWQgd2l0aCB0aGUge0BsaW5rICNhZGR9IG1ldGhvZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGBTdWJzY3JpcHRpb25gIGluc3RhbmNlcywgd2hlbiB1bnN1YnNjcmliZWQsIHdpbGwgYXV0b21hdGljYWxseSByZW1vdmUgdGhlbXNlbHZlc1xuICAgKiBmcm9tIGV2ZXJ5IG90aGVyIGBTdWJzY3JpcHRpb25gIHRoZXkgaGF2ZSBiZWVuIGFkZGVkIHRvLiBUaGlzIG1lYW5zIHRoYXQgdXNpbmcgdGhlIGByZW1vdmVgIG1ldGhvZFxuICAgKiBpcyBub3QgYSBjb21tb24gdGhpbmcgYW5kIHNob3VsZCBiZSB1c2VkIHRob3VnaHRmdWxseS5cbiAgICpcbiAgICogSWYgeW91IGFkZCB0aGUgc2FtZSBmaW5hbGl6ZXIgaW5zdGFuY2Ugb2YgYSBmdW5jdGlvbiBvciBhbiB1bnN1YnNjcmliYWJsZSBvYmplY3QgdG8gYSBgU3Vic2NyaXB0aW9uYCBpbnN0YW5jZVxuICAgKiBtb3JlIHRoYW4gb25jZSwgeW91IHdpbGwgbmVlZCB0byBjYWxsIGByZW1vdmVgIHRoZSBzYW1lIG51bWJlciBvZiB0aW1lcyB0byByZW1vdmUgYWxsIGluc3RhbmNlcy5cbiAgICpcbiAgICogQWxsIGZpbmFsaXplciBpbnN0YW5jZXMgYXJlIHJlbW92ZWQgdG8gZnJlZSB1cCBtZW1vcnkgdXBvbiB1bnN1YnNjcmlwdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHRlYXJkb3duIFRoZSBmaW5hbGl6ZXIgdG8gcmVtb3ZlIGZyb20gdGhpcyBzdWJzY3JpcHRpb25cbiAgICovXG4gIHJlbW92ZSh0ZWFyZG93bjogRXhjbHVkZTxUZWFyZG93bkxvZ2ljLCB2b2lkPik6IHZvaWQge1xuICAgIGNvbnN0IHsgX2ZpbmFsaXplcnMgfSA9IHRoaXM7XG4gICAgX2ZpbmFsaXplcnMgJiYgYXJyUmVtb3ZlKF9maW5hbGl6ZXJzLCB0ZWFyZG93bik7XG5cbiAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRlYXJkb3duLl9yZW1vdmVQYXJlbnQodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVUJTQ1JJUFRJT04gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N1YnNjcmlwdGlvbih2YWx1ZTogYW55KTogdmFsdWUgaXMgU3Vic2NyaXB0aW9uIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbiB8fFxuICAgICh2YWx1ZSAmJiAnY2xvc2VkJyBpbiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnJlbW92ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS5hZGQpICYmIGlzRnVuY3Rpb24odmFsdWUudW5zdWJzY3JpYmUpKVxuICApO1xufVxuXG5mdW5jdGlvbiBleGVjRmluYWxpemVyKGZpbmFsaXplcjogVW5zdWJzY3JpYmFibGUgfCAoKCkgPT4gdm9pZCkpIHtcbiAgaWYgKGlzRnVuY3Rpb24oZmluYWxpemVyKSkge1xuICAgIGZpbmFsaXplcigpO1xuICB9IGVsc2Uge1xuICAgIGZpbmFsaXplci51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlTm90aWZpY2F0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogVGhlIHtAbGluayBHbG9iYWxDb25maWd9IG9iamVjdCBmb3IgUnhKUy4gSXQgaXMgdXNlZCB0byBjb25maWd1cmUgdGhpbmdzXG4gKiBsaWtlIGhvdyB0byByZWFjdCBvbiB1bmhhbmRsZWQgZXJyb3JzLlxuICovXG5leHBvcnQgY29uc3QgY29uZmlnOiBHbG9iYWxDb25maWcgPSB7XG4gIG9uVW5oYW5kbGVkRXJyb3I6IG51bGwsXG4gIG9uU3RvcHBlZE5vdGlmaWNhdGlvbjogbnVsbCxcbiAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nOiBmYWxzZSxcbiAgdXNlRGVwcmVjYXRlZE5leHRDb250ZXh0OiBmYWxzZSxcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgUnhKUywgdXNlZCB0byBjb25maWd1cmUgdGhpbmdzXG4gKiBsaWtlIGhvdyB0byByZWFjdCBvbiB1bmhhbmRsZWQgZXJyb3JzLiBBY2Nlc3NpYmxlIHZpYSB7QGxpbmsgY29uZmlnfVxuICogb2JqZWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbENvbmZpZyB7XG4gIC8qKlxuICAgKiBBIHJlZ2lzdHJhdGlvbiBwb2ludCBmb3IgdW5oYW5kbGVkIGVycm9ycyBmcm9tIFJ4SlMuIFRoZXNlIGFyZSBlcnJvcnMgdGhhdFxuICAgKiBjYW5ub3Qgd2VyZSBub3QgaGFuZGxlZCBieSBjb25zdW1pbmcgY29kZSBpbiB0aGUgdXN1YWwgc3Vic2NyaXB0aW9uIHBhdGguIEZvclxuICAgKiBleGFtcGxlLCBpZiB5b3UgaGF2ZSB0aGlzIGNvbmZpZ3VyZWQsIGFuZCB5b3Ugc3Vic2NyaWJlIHRvIGFuIG9ic2VydmFibGUgd2l0aG91dFxuICAgKiBwcm92aWRpbmcgYW4gZXJyb3IgaGFuZGxlciwgZXJyb3JzIGZyb20gdGhhdCBzdWJzY3JpcHRpb24gd2lsbCBlbmQgdXAgaGVyZS4gVGhpc1xuICAgKiB3aWxsIF9hbHdheXNfIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseSBvbiBhbm90aGVyIGpvYiBpbiB0aGUgcnVudGltZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAqIHdlIGRvIG5vdCB3YW50IGVycm9ycyB0aHJvd24gaW4gdGhpcyB1c2VyLWNvbmZpZ3VyZWQgaGFuZGxlciB0byBpbnRlcmZlcmUgd2l0aCB0aGVcbiAgICogYmVoYXZpb3Igb2YgdGhlIGxpYnJhcnkuXG4gICAqL1xuICBvblVuaGFuZGxlZEVycm9yOiAoKGVycjogYW55KSA9PiB2b2lkKSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEEgcmVnaXN0cmF0aW9uIHBvaW50IGZvciBub3RpZmljYXRpb25zIHRoYXQgY2Fubm90IGJlIHNlbnQgdG8gc3Vic2NyaWJlcnMgYmVjYXVzZSB0aGV5XG4gICAqIGhhdmUgY29tcGxldGVkLCBlcnJvcmVkIG9yIGhhdmUgYmVlbiBleHBsaWNpdGx5IHVuc3Vic2NyaWJlZC4gQnkgZGVmYXVsdCwgbmV4dCwgY29tcGxldGVcbiAgICogYW5kIGVycm9yIG5vdGlmaWNhdGlvbnMgc2VudCB0byBzdG9wcGVkIHN1YnNjcmliZXJzIGFyZSBub29wcy4gSG93ZXZlciwgc29tZXRpbWVzIGNhbGxlcnNcbiAgICogbWlnaHQgd2FudCBhIGRpZmZlcmVudCBiZWhhdmlvci4gRm9yIGV4YW1wbGUsIHdpdGggc291cmNlcyB0aGF0IGF0dGVtcHQgdG8gcmVwb3J0IGVycm9yc1xuICAgKiB0byBzdG9wcGVkIHN1YnNjcmliZXJzLCBhIGNhbGxlciBjYW4gY29uZmlndXJlIFJ4SlMgdG8gdGhyb3cgYW4gdW5oYW5kbGVkIGVycm9yIGluc3RlYWQuXG4gICAqIFRoaXMgd2lsbCBfYWx3YXlzXyBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkgb24gYW5vdGhlciBqb2IgaW4gdGhlIHJ1bnRpbWUuIFRoaXMgaXMgYmVjYXVzZVxuICAgKiB3ZSBkbyBub3Qgd2FudCBlcnJvcnMgdGhyb3duIGluIHRoaXMgdXNlci1jb25maWd1cmVkIGhhbmRsZXIgdG8gaW50ZXJmZXJlIHdpdGggdGhlXG4gICAqIGJlaGF2aW9yIG9mIHRoZSBsaWJyYXJ5LlxuICAgKi9cbiAgb25TdG9wcGVkTm90aWZpY2F0aW9uOiAoKG5vdGlmaWNhdGlvbjogT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbjxhbnk+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHZvaWQpIHwgbnVsbDtcblxuICAvKipcbiAgICogVGhlIHByb21pc2UgY29uc3RydWN0b3IgdXNlZCBieSBkZWZhdWx0IGZvciB7QGxpbmsgT2JzZXJ2YWJsZSN0b1Byb21pc2UgdG9Qcm9taXNlfSBhbmQge0BsaW5rIE9ic2VydmFibGUjZm9yRWFjaCBmb3JFYWNofVxuICAgKiBtZXRob2RzLlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBBcyBvZiB2ZXJzaW9uIDgsIFJ4SlMgd2lsbCBubyBsb25nZXIgc3VwcG9ydCB0aGlzIHNvcnQgb2YgaW5qZWN0aW9uIG9mIGFcbiAgICogUHJvbWlzZSBjb25zdHJ1Y3Rvci4gSWYgeW91IG5lZWQgYSBQcm9taXNlIGltcGxlbWVudGF0aW9uIG90aGVyIHRoYW4gbmF0aXZlIHByb21pc2VzLFxuICAgKiBwbGVhc2UgcG9seWZpbGwvcGF0Y2ggUHJvbWlzZSBhcyB5b3Ugc2VlIGFwcHJvcHJpYXRlLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gICAqL1xuICBQcm9taXNlPzogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZTtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgdHVybnMgb24gc3luY2hyb25vdXMgZXJyb3IgcmV0aHJvd2luZywgd2hpY2ggaXMgYSBkZXByZWNhdGVkIGJlaGF2aW9yXG4gICAqIGluIHY2IGFuZCBoaWdoZXIuIFRoaXMgYmVoYXZpb3IgZW5hYmxlcyBiYWQgcGF0dGVybnMgbGlrZSB3cmFwcGluZyBhIHN1YnNjcmliZVxuICAgKiBjYWxsIGluIGEgdHJ5L2NhdGNoIGJsb2NrLiBJdCBhbHNvIGVuYWJsZXMgcHJvZHVjZXIgaW50ZXJmZXJlbmNlLCBhIG5hc3R5IGJ1Z1xuICAgKiB3aGVyZSBhIG11bHRpY2FzdCBjYW4gYmUgYnJva2VuIGZvciBhbGwgb2JzZXJ2ZXJzIGJ5IGEgZG93bnN0cmVhbSBjb25zdW1lciB3aXRoXG4gICAqIGFuIHVuaGFuZGxlZCBlcnJvci4gRE8gTk9UIFVTRSBUSElTIEZMQUcgVU5MRVNTIElUJ1MgTkVFREVEIFRPIEJVWSBUSU1FXG4gICAqIEZPUiBNSUdSQVRJT04gUkVBU09OUy5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgQXMgb2YgdmVyc2lvbiA4LCBSeEpTIHdpbGwgbm8gbG9uZ2VyIHN1cHBvcnQgc3luY2hyb25vdXMgdGhyb3dpbmdcbiAgICogb2YgdW5oYW5kbGVkIGVycm9ycy4gQWxsIGVycm9ycyB3aWxsIGJlIHRocm93biBvbiBhIHNlcGFyYXRlIGNhbGwgc3RhY2sgdG8gcHJldmVudCBiYWRcbiAgICogYmVoYXZpb3JzIGRlc2NyaWJlZCBhYm92ZS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgZW5hYmxlcyBhbiBhcy1vZi15ZXQgdW5kb2N1bWVudGVkIGZlYXR1cmUgZnJvbSB2NTogVGhlIGFiaWxpdHkgdG8gYWNjZXNzXG4gICAqIGB1bnN1YnNjcmliZSgpYCB2aWEgYHRoaXNgIGNvbnRleHQgaW4gYG5leHRgIGZ1bmN0aW9ucyBjcmVhdGVkIGluIG9ic2VydmVycyBwYXNzZWRcbiAgICogdG8gYHN1YnNjcmliZWAuXG4gICAqXG4gICAqIFRoaXMgaXMgYmVpbmcgcmVtb3ZlZCBiZWNhdXNlIHRoZSBwZXJmb3JtYW5jZSB3YXMgc2V2ZXJlbHkgcHJvYmxlbWF0aWMsIGFuZCBpdCBjb3VsZCBhbHNvIGNhdXNlXG4gICAqIGlzc3VlcyB3aGVuIHR5cGVzIG90aGVyIHRoYW4gUE9KT3MgYXJlIHBhc3NlZCB0byBzdWJzY3JpYmUgYXMgc3Vic2NyaWJlcnMsIGFzIHRoZXkgd2lsbCBsaWtlbHkgaGF2ZVxuICAgKiB0aGVpciBgdGhpc2AgY29udGV4dCBvdmVyd3JpdHRlbi5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgQXMgb2YgdmVyc2lvbiA4LCBSeEpTIHdpbGwgbm8gbG9uZ2VyIHN1cHBvcnQgYWx0ZXJpbmcgdGhlXG4gICAqIGNvbnRleHQgb2YgbmV4dCBmdW5jdGlvbnMgcHJvdmlkZWQgYXMgcGFydCBvZiBhbiBvYnNlcnZlciB0byBTdWJzY3JpYmUuIEluc3RlYWQsXG4gICAqIHlvdSB3aWxsIGhhdmUgYWNjZXNzIHRvIGEgc3Vic2NyaXB0aW9uIG9yIGEgc2lnbmFsIG9yIHRva2VuIHRoYXQgd2lsbCBhbGxvdyB5b3UgdG8gZG8gdGhpbmdzIGxpa2VcbiAgICogdW5zdWJzY3JpYmUgYW5kIHRlc3QgY2xvc2VkIHN0YXR1cy4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgdXNlRGVwcmVjYXRlZE5leHRDb250ZXh0OiBib29sZWFuO1xufVxuIiwgImltcG9ydCB0eXBlIHsgVGltZXJIYW5kbGUgfSBmcm9tICcuL3RpbWVySGFuZGxlJztcbnR5cGUgU2V0VGltZW91dEZ1bmN0aW9uID0gKGhhbmRsZXI6ICgpID0+IHZvaWQsIHRpbWVvdXQ/OiBudW1iZXIsIC4uLmFyZ3M6IGFueVtdKSA9PiBUaW1lckhhbmRsZTtcbnR5cGUgQ2xlYXJUaW1lb3V0RnVuY3Rpb24gPSAoaGFuZGxlOiBUaW1lckhhbmRsZSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIFRpbWVvdXRQcm92aWRlciB7XG4gIHNldFRpbWVvdXQ6IFNldFRpbWVvdXRGdW5jdGlvbjtcbiAgY2xlYXJUaW1lb3V0OiBDbGVhclRpbWVvdXRGdW5jdGlvbjtcbiAgZGVsZWdhdGU6XG4gICAgfCB7XG4gICAgICAgIHNldFRpbWVvdXQ6IFNldFRpbWVvdXRGdW5jdGlvbjtcbiAgICAgICAgY2xlYXJUaW1lb3V0OiBDbGVhclRpbWVvdXRGdW5jdGlvbjtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IHRpbWVvdXRQcm92aWRlcjogVGltZW91dFByb3ZpZGVyID0ge1xuICAvLyBXaGVuIGFjY2Vzc2luZyB0aGUgZGVsZWdhdGUsIHVzZSB0aGUgdmFyaWFibGUgcmF0aGVyIHRoYW4gYHRoaXNgIHNvIHRoYXRcbiAgLy8gdGhlIGZ1bmN0aW9ucyBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgYmVpbmcgYm91bmQgdG8gdGhlIHByb3ZpZGVyLlxuICBzZXRUaW1lb3V0KGhhbmRsZXI6ICgpID0+IHZvaWQsIHRpbWVvdXQ/OiBudW1iZXIsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCB7IGRlbGVnYXRlIH0gPSB0aW1lb3V0UHJvdmlkZXI7XG4gICAgaWYgKGRlbGVnYXRlPy5zZXRUaW1lb3V0KSB7XG4gICAgICByZXR1cm4gZGVsZWdhdGUuc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCwgLi4uYXJncyk7XG4gIH0sXG4gIGNsZWFyVGltZW91dChoYW5kbGUpIHtcbiAgICBjb25zdCB7IGRlbGVnYXRlIH0gPSB0aW1lb3V0UHJvdmlkZXI7XG4gICAgcmV0dXJuIChkZWxlZ2F0ZT8uY2xlYXJUaW1lb3V0IHx8IGNsZWFyVGltZW91dCkoaGFuZGxlIGFzIGFueSk7XG4gIH0sXG4gIGRlbGVnYXRlOiB1bmRlZmluZWQsXG59O1xuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcblxuLyoqXG4gKiBIYW5kbGVzIGFuIGVycm9yIG9uIGFub3RoZXIgam9iIGVpdGhlciB3aXRoIHRoZSB1c2VyLWNvbmZpZ3VyZWQge0BsaW5rIG9uVW5oYW5kbGVkRXJyb3J9LFxuICogb3IgYnkgdGhyb3dpbmcgaXQgb24gdGhhdCBuZXcgam9iIHNvIGl0IGNhbiBiZSBwaWNrZWQgdXAgYnkgYHdpbmRvdy5vbmVycm9yYCwgYHByb2Nlc3Mub24oJ2Vycm9yJylgLCBldGMuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZXJlIGlzIGFuIGVycm9yIHRoYXQgaXMgb3V0LW9mLWJhbmQgd2l0aCB0aGUgc3Vic2NyaXB0aW9uXG4gKiBvciB3aGVuIGFuIGVycm9yIGhpdHMgYSB0ZXJtaW5hbCBib3VuZGFyeSBvZiB0aGUgc3Vic2NyaXB0aW9uIGFuZCBubyBlcnJvciBoYW5kbGVyIHdhcyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0gZXJyIHRoZSBlcnJvciB0byByZXBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycjogYW55KSB7XG4gIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCB7IG9uVW5oYW5kbGVkRXJyb3IgfSA9IGNvbmZpZztcbiAgICBpZiAob25VbmhhbmRsZWRFcnJvcikge1xuICAgICAgLy8gRXhlY3V0ZSB0aGUgdXNlci1jb25maWd1cmVkIGVycm9yIGhhbmRsZXIuXG4gICAgICBvblVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRocm93IHNvIGl0IGlzIHBpY2tlZCB1cCBieSB0aGUgcnVudGltZSdzIHVuY2F1Z2h0IGVycm9yIG1lY2hhbmlzbS5cbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH0pO1xufVxuIiwgIi8qIHRzbGludDpkaXNhYmxlOm5vLWVtcHR5ICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxuIiwgImltcG9ydCB7IENvbXBsZXRlTm90aWZpY2F0aW9uLCBOZXh0Tm90aWZpY2F0aW9uLCBFcnJvck5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEEgY29tcGxldGlvbiBvYmplY3Qgb3B0aW1pemVkIGZvciBtZW1vcnkgdXNlIGFuZCBjcmVhdGVkIHRvIGJlIHRoZVxuICogc2FtZSBcInNoYXBlXCIgYXMgb3RoZXIgbm90aWZpY2F0aW9ucyBpbiB2OC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgQ09NUExFVEVfTk9USUZJQ0FUSU9OID0gKCgpID0+IGNyZWF0ZU5vdGlmaWNhdGlvbignQycsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKSBhcyBDb21wbGV0ZU5vdGlmaWNhdGlvbikoKTtcblxuLyoqXG4gKiBJbnRlcm5hbCB1c2Ugb25seS4gQ3JlYXRlcyBhbiBvcHRpbWl6ZWQgZXJyb3Igbm90aWZpY2F0aW9uIHRoYXQgaXMgdGhlIHNhbWUgXCJzaGFwZVwiXG4gKiBhcyBvdGhlciBub3RpZmljYXRpb25zLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvck5vdGlmaWNhdGlvbihlcnJvcjogYW55KTogRXJyb3JOb3RpZmljYXRpb24ge1xuICByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdFJywgdW5kZWZpbmVkLCBlcnJvcikgYXMgYW55O1xufVxuXG4vKipcbiAqIEludGVybmFsIHVzZSBvbmx5LiBDcmVhdGVzIGFuIG9wdGltaXplZCBuZXh0IG5vdGlmaWNhdGlvbiB0aGF0IGlzIHRoZSBzYW1lIFwic2hhcGVcIlxuICogYXMgb3RoZXIgbm90aWZpY2F0aW9ucy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dE5vdGlmaWNhdGlvbjxUPih2YWx1ZTogVCkge1xuICByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdOJywgdmFsdWUsIHVuZGVmaW5lZCkgYXMgTmV4dE5vdGlmaWNhdGlvbjxUPjtcbn1cblxuLyoqXG4gKiBFbnN1cmVzIHRoYXQgYWxsIG5vdGlmaWNhdGlvbnMgY3JlYXRlZCBpbnRlcm5hbGx5IGhhdmUgdGhlIHNhbWUgXCJzaGFwZVwiIGluIHY4LlxuICpcbiAqIFRPRE86IFRoaXMgaXMgb25seSBleHBvcnRlZCB0byBzdXBwb3J0IGEgY3JhenkgbGVnYWN5IHRlc3QgaW4gYGdyb3VwQnlgLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb24oa2luZDogJ04nIHwgJ0UnIHwgJ0MnLCB2YWx1ZTogYW55LCBlcnJvcjogYW55KSB7XG4gIHJldHVybiB7XG4gICAga2luZCxcbiAgICB2YWx1ZSxcbiAgICBlcnJvcixcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5sZXQgY29udGV4dDogeyBlcnJvclRocm93bjogYm9vbGVhbjsgZXJyb3I6IGFueSB9IHwgbnVsbCA9IG51bGw7XG5cbi8qKlxuICogSGFuZGxlcyBkZWFsaW5nIHdpdGggZXJyb3JzIGZvciBzdXBlci1ncm9zcyBtb2RlLiBDcmVhdGVzIGEgY29udGV4dCwgaW4gd2hpY2hcbiAqIGFueSBzeW5jaHJvbm91c2x5IHRocm93biBlcnJvcnMgd2lsbCBiZSBwYXNzZWQgdG8ge0BsaW5rIGNhcHR1cmVFcnJvcn0uIFdoaWNoXG4gKiB3aWxsIHJlY29yZCB0aGUgZXJyb3Igc3VjaCB0aGF0IGl0IHdpbGwgYmUgcmV0aHJvd24gYWZ0ZXIgdGhlIGNhbGwgYmFjayBpcyBjb21wbGV0ZS5cbiAqIFRPRE86IFJlbW92ZSBpbiB2OFxuICogQHBhcmFtIGNiIEFuIGltbWVkaWF0ZWx5IGV4ZWN1dGVkIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JDb250ZXh0KGNiOiAoKSA9PiB2b2lkKSB7XG4gIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgIGNvbnN0IGlzUm9vdCA9ICFjb250ZXh0O1xuICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgIGNvbnRleHQgPSB7IGVycm9yVGhyb3duOiBmYWxzZSwgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgY2IoKTtcbiAgICBpZiAoaXNSb290KSB7XG4gICAgICBjb25zdCB7IGVycm9yVGhyb3duLCBlcnJvciB9ID0gY29udGV4dCE7XG4gICAgICBjb250ZXh0ID0gbnVsbDtcbiAgICAgIGlmIChlcnJvclRocm93bikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgZ2VuZXJhbCBub24tZGVwcmVjYXRlZCBwYXRoIGZvciBldmVyeW9uZSB0aGF0XG4gICAgLy8gaXNuJ3QgY3JhenkgZW5vdWdoIHRvIHVzZSBzdXBlci1ncm9zcyBtb2RlICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKVxuICAgIGNiKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDYXB0dXJlcyBlcnJvcnMgb25seSBpbiBzdXBlci1ncm9zcyBtb2RlLlxuICogQHBhcmFtIGVyciB0aGUgZXJyb3IgdG8gY2FwdHVyZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUVycm9yKGVycjogYW55KSB7XG4gIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiBjb250ZXh0KSB7XG4gICAgY29udGV4dC5lcnJvclRocm93biA9IHRydWU7XG4gICAgY29udGV4dC5lcnJvciA9IGVycjtcbiAgfVxufVxuIiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZlciwgT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24sIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWwvbm9vcCc7XG5pbXBvcnQgeyBuZXh0Tm90aWZpY2F0aW9uLCBlcnJvck5vdGlmaWNhdGlvbiwgQ09NUExFVEVfTk9USUZJQ0FUSU9OIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25GYWN0b3JpZXMnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcbmltcG9ydCB7IGNhcHR1cmVFcnJvciB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xuXG4vKipcbiAqIEltcGxlbWVudHMgdGhlIHtAbGluayBPYnNlcnZlcn0gaW50ZXJmYWNlIGFuZCBleHRlbmRzIHRoZVxuICoge0BsaW5rIFN1YnNjcmlwdGlvbn0gY2xhc3MuIFdoaWxlIHRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGlzIHRoZSBwdWJsaWMgQVBJIGZvclxuICogY29uc3VtaW5nIHRoZSB2YWx1ZXMgb2YgYW4ge0BsaW5rIE9ic2VydmFibGV9LCBhbGwgT2JzZXJ2ZXJzIGdldCBjb252ZXJ0ZWQgdG9cbiAqIGEgU3Vic2NyaWJlciwgaW4gb3JkZXIgdG8gcHJvdmlkZSBTdWJzY3JpcHRpb24tbGlrZSBjYXBhYmlsaXRpZXMgc3VjaCBhc1xuICogYHVuc3Vic2NyaWJlYC4gU3Vic2NyaWJlciBpcyBhIGNvbW1vbiB0eXBlIGluIFJ4SlMsIGFuZCBjcnVjaWFsIGZvclxuICogaW1wbGVtZW50aW5nIG9wZXJhdG9ycywgYnV0IGl0IGlzIHJhcmVseSB1c2VkIGFzIGEgcHVibGljIEFQSS5cbiAqXG4gKiBAY2xhc3MgU3Vic2NyaWJlcjxUPlxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmlwdGlvbiBpbXBsZW1lbnRzIE9ic2VydmVyPFQ+IHtcbiAgLyoqXG4gICAqIEEgc3RhdGljIGZhY3RvcnkgZm9yIGEgU3Vic2NyaWJlciwgZ2l2ZW4gYSAocG90ZW50aWFsbHkgcGFydGlhbCkgZGVmaW5pdGlvblxuICAgKiBvZiBhbiBPYnNlcnZlci5cbiAgICogQHBhcmFtIG5leHQgVGhlIGBuZXh0YCBjYWxsYmFjayBvZiBhbiBPYnNlcnZlci5cbiAgICogQHBhcmFtIGVycm9yIFRoZSBgZXJyb3JgIGNhbGxiYWNrIG9mIGFuXG4gICAqIE9ic2VydmVyLlxuICAgKiBAcGFyYW0gY29tcGxldGUgVGhlIGBjb21wbGV0ZWAgY2FsbGJhY2sgb2YgYW5cbiAgICogT2JzZXJ2ZXIuXG4gICAqIEByZXR1cm4gQSBTdWJzY3JpYmVyIHdyYXBwaW5nIHRoZSAocGFydGlhbGx5IGRlZmluZWQpXG4gICAqIE9ic2VydmVyIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiBhcmd1bWVudHMuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBkZXByZWNhdGVkIERvIG5vdCB1c2UuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVGhlcmUgaXMgbm8gcmVwbGFjZW1lbnQgZm9yIHRoaXNcbiAgICogbWV0aG9kLCBhbmQgdGhlcmUgaXMgbm8gcmVhc29uIHRvIGJlIGNyZWF0aW5nIGluc3RhbmNlcyBvZiBgU3Vic2NyaWJlcmAgZGlyZWN0bHkuXG4gICAqIElmIHlvdSBoYXZlIGEgc3BlY2lmaWMgdXNlIGNhc2UsIHBsZWFzZSBmaWxlIGFuIGlzc3VlLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTxUPihuZXh0PzogKHg/OiBUKSA9PiB2b2lkLCBlcnJvcj86IChlPzogYW55KSA9PiB2b2lkLCBjb21wbGV0ZT86ICgpID0+IHZvaWQpOiBTdWJzY3JpYmVyPFQ+IHtcbiAgICByZXR1cm4gbmV3IFNhZmVTdWJzY3JpYmVyKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIHByb3RlY3RlZCBpc1N0b3BwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBwcm90ZWN0ZWQgZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55PiB8IE9ic2VydmVyPGFueT47IC8vIHRoaXMgYGFueWAgaXMgdGhlIGVzY2FwZSBoYXRjaCB0byBlcmFzZSBleHRyYSB0eXBlIHBhcmFtIChlLmcuIFIpXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LlxuICAgKiBUaGVyZSBpcyBubyByZWFzb24gdG8gZGlyZWN0bHkgY3JlYXRlIGFuIGluc3RhbmNlIG9mIFN1YnNjcmliZXIuIFRoaXMgdHlwZSBpcyBleHBvcnRlZCBmb3IgdHlwaW5ncyByZWFzb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24/OiBTdWJzY3JpYmVyPGFueT4gfCBPYnNlcnZlcjxhbnk+KSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoZGVzdGluYXRpb24pIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgY2hhaW4gc3Vic2NyaXB0aW9ucyB0b2dldGhlciBoZXJlLlxuICAgICAgLy8gaWYgZGVzdGluYXRpb24gaXMgYSBTdWJzY3JpcHRpb24sIHRoZW4gaXQgaXMgYSBTdWJzY3JpYmVyLlxuICAgICAgaWYgKGlzU3Vic2NyaXB0aW9uKGRlc3RpbmF0aW9uKSkge1xuICAgICAgICBkZXN0aW5hdGlvbi5hZGQodGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBFTVBUWV9PQlNFUlZFUjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBub3RpZmljYXRpb25zIG9mIHR5cGUgYG5leHRgIGZyb21cbiAgICogdGhlIE9ic2VydmFibGUsIHdpdGggYSB2YWx1ZS4gVGhlIE9ic2VydmFibGUgbWF5IGNhbGwgdGhpcyBtZXRob2QgMCBvciBtb3JlXG4gICAqIHRpbWVzLlxuICAgKiBAcGFyYW0ge1R9IFt2YWx1ZV0gVGhlIGBuZXh0YCB2YWx1ZS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIG5leHQodmFsdWU/OiBUKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5leHROb3RpZmljYXRpb24odmFsdWUpLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmV4dCh2YWx1ZSEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIG5vdGlmaWNhdGlvbnMgb2YgdHlwZSBgZXJyb3JgIGZyb21cbiAgICogdGhlIE9ic2VydmFibGUsIHdpdGggYW4gYXR0YWNoZWQgYEVycm9yYC4gTm90aWZpZXMgdGhlIE9ic2VydmVyIHRoYXRcbiAgICogdGhlIE9ic2VydmFibGUgaGFzIGV4cGVyaWVuY2VkIGFuIGVycm9yIGNvbmRpdGlvbi5cbiAgICogQHBhcmFtIHthbnl9IFtlcnJdIFRoZSBgZXJyb3JgIGV4Y2VwdGlvbi5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGVycm9yKGVycj86IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihlcnJvck5vdGlmaWNhdGlvbihlcnIpLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBhIHZhbHVlbGVzcyBub3RpZmljYXRpb24gb2YgdHlwZVxuICAgKiBgY29tcGxldGVgIGZyb20gdGhlIE9ic2VydmFibGUuIE5vdGlmaWVzIHRoZSBPYnNlcnZlciB0aGF0IHRoZSBPYnNlcnZhYmxlXG4gICAqIGhhcyBmaW5pc2hlZCBzZW5kaW5nIHB1c2gtYmFzZWQgbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNvbXBsZXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihDT01QTEVURV9OT1RJRklDQVRJT04sIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHN1cGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbnVsbCE7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZXJyb3IoZXJyOiBhbnkpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGhpcyBiaW5kIGlzIGNhcHR1cmVkIGhlcmUgYmVjYXVzZSB3ZSB3YW50IHRvIGJlIGFibGUgdG8gaGF2ZVxuICogY29tcGF0aWJpbGl0eSB3aXRoIG1vbm9pZCBsaWJyYXJpZXMgdGhhdCB0ZW5kIHRvIHVzZSBhIG1ldGhvZCBuYW1lZFxuICogYGJpbmRgLiBJbiBwYXJ0aWN1bGFyLCBhIGxpYnJhcnkgY2FsbGVkIE1vbmlvIHJlcXVpcmVzIHRoaXMuXG4gKi9cbmNvbnN0IF9iaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG5cbmZ1bmN0aW9uIGJpbmQ8Rm4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4oZm46IEZuLCB0aGlzQXJnOiBhbnkpOiBGbiB7XG4gIHJldHVybiBfYmluZC5jYWxsKGZuLCB0aGlzQXJnKTtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBvcHRpbWl6YXRpb24gb25seSwgRE8gTk9UIEVYUE9TRS5cbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBDb25zdW1lck9ic2VydmVyPFQ+IGltcGxlbWVudHMgT2JzZXJ2ZXI8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcnRpYWxPYnNlcnZlcjogUGFydGlhbDxPYnNlcnZlcjxUPj4pIHt9XG5cbiAgbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFydGlhbE9ic2VydmVyIH0gPSB0aGlzO1xuICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIubmV4dCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgY29uc3QgeyBwYXJ0aWFsT2JzZXJ2ZXIgfSA9IHRoaXM7XG4gICAgaWYgKHBhcnRpYWxPYnNlcnZlci5lcnJvcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgY29tcGxldGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBwYXJ0aWFsT2JzZXJ2ZXIgfSA9IHRoaXM7XG4gICAgaWYgKHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWZlU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBvYnNlcnZlck9yTmV4dD86IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+IHwgKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGVycm9yPzogKChlPzogYW55KSA9PiB2b2lkKSB8IG51bGwsXG4gICAgY29tcGxldGU/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gICkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBsZXQgcGFydGlhbE9ic2VydmVyOiBQYXJ0aWFsPE9ic2VydmVyPFQ+PjtcbiAgICBpZiAoaXNGdW5jdGlvbihvYnNlcnZlck9yTmV4dCkgfHwgIW9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAvLyBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBmdW5jdGlvbiwgbm90IGFuIG9ic2VydmVyLiBUaGUgbmV4dFxuICAgICAgLy8gdHdvIGFyZ3VtZW50cyAqY291bGQqIGJlIG9ic2VydmVycywgb3IgdGhleSBjb3VsZCBiZSBlbXB0eS5cbiAgICAgIHBhcnRpYWxPYnNlcnZlciA9IHtcbiAgICAgICAgbmV4dDogKG9ic2VydmVyT3JOZXh0ID8/IHVuZGVmaW5lZCkgYXMgKCgodmFsdWU6IFQpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSxcbiAgICAgICAgZXJyb3I6IGVycm9yID8/IHVuZGVmaW5lZCxcbiAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlID8/IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIHBhcnRpYWwgb2JzZXJ2ZXIuXG4gICAgICBsZXQgY29udGV4dDogYW55O1xuICAgICAgaWYgKHRoaXMgJiYgY29uZmlnLnVzZURlcHJlY2F0ZWROZXh0Q29udGV4dCkge1xuICAgICAgICAvLyBUaGlzIGlzIGEgZGVwcmVjYXRlZCBwYXRoIHRoYXQgbWFkZSBgdGhpcy51bnN1YnNjcmliZSgpYCBhdmFpbGFibGUgaW5cbiAgICAgICAgLy8gbmV4dCBoYW5kbGVyIGZ1bmN0aW9ucyBwYXNzZWQgdG8gc3Vic2NyaWJlLiBUaGlzIG9ubHkgZXhpc3RzIGJlaGluZCBhIGZsYWdcbiAgICAgICAgLy8gbm93LCBhcyBpdCBpcyAqdmVyeSogc2xvdy5cbiAgICAgICAgY29udGV4dCA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICBjb250ZXh0LnVuc3Vic2NyaWJlID0gKCkgPT4gdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgbmV4dDogb2JzZXJ2ZXJPck5leHQubmV4dCAmJiBiaW5kKG9ic2VydmVyT3JOZXh0Lm5leHQsIGNvbnRleHQpLFxuICAgICAgICAgIGVycm9yOiBvYnNlcnZlck9yTmV4dC5lcnJvciAmJiBiaW5kKG9ic2VydmVyT3JOZXh0LmVycm9yLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21wbGV0ZTogb2JzZXJ2ZXJPck5leHQuY29tcGxldGUgJiYgYmluZChvYnNlcnZlck9yTmV4dC5jb21wbGV0ZSwgY29udGV4dCksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGUgXCJub3JtYWxcIiBwYXRoLiBKdXN0IHVzZSB0aGUgcGFydGlhbCBvYnNlcnZlciBkaXJlY3RseS5cbiAgICAgICAgcGFydGlhbE9ic2VydmVyID0gb2JzZXJ2ZXJPck5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV3JhcCB0aGUgcGFydGlhbCBvYnNlcnZlciB0byBlbnN1cmUgaXQncyBhIGZ1bGwgb2JzZXJ2ZXIsIGFuZFxuICAgIC8vIG1ha2Ugc3VyZSBwcm9wZXIgZXJyb3IgaGFuZGxpbmcgaXMgYWNjb3VudGVkIGZvci5cbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IENvbnN1bWVyT2JzZXJ2ZXIocGFydGlhbE9ic2VydmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcjogYW55KSB7XG4gIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgIGNhcHR1cmVFcnJvcihlcnJvcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWRlYWwgcGF0aCwgd2UgcmVwb3J0IHRoaXMgYXMgYW4gdW5oYW5kbGVkIGVycm9yLFxuICAgIC8vIHdoaWNoIGlzIHRocm93biBvbiBhIG5ldyBjYWxsIHN0YWNrLlxuICAgIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGVycm9yIGhhbmRsZXIgdXNlZCB3aGVuIG5vIGVycm9yIGhhbmRsZXIgd2FzIHN1cHBsaWVkXG4gKiB0byB0aGUgU2FmZVN1YnNjcmliZXIgLS0gbWVhbmluZyBubyBlcnJvciBoYW5kbGVyIHdhcyBzdXBwbGllZFxuICogZG8gdGhlIGBzdWJzY3JpYmVgIGNhbGwgb24gb3VyIG9ic2VydmFibGUuXG4gKiBAcGFyYW0gZXJyIFRoZSBlcnJvciB0byBoYW5kbGVcbiAqL1xuZnVuY3Rpb24gZGVmYXVsdEVycm9ySGFuZGxlcihlcnI6IGFueSkge1xuICB0aHJvdyBlcnI7XG59XG5cbi8qKlxuICogQSBoYW5kbGVyIGZvciBub3RpZmljYXRpb25zIHRoYXQgY2Fubm90IGJlIHNlbnQgdG8gYSBzdG9wcGVkIHN1YnNjcmliZXIuXG4gKiBAcGFyYW0gbm90aWZpY2F0aW9uIFRoZSBub3RpZmljYXRpb24gYmVpbmcgc2VudFxuICogQHBhcmFtIHN1YnNjcmliZXIgVGhlIHN0b3BwZWQgc3Vic2NyaWJlclxuICovXG5mdW5jdGlvbiBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbjxhbnk+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pIHtcbiAgY29uc3QgeyBvblN0b3BwZWROb3RpZmljYXRpb24gfSA9IGNvbmZpZztcbiAgb25TdG9wcGVkTm90aWZpY2F0aW9uICYmIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KCgpID0+IG9uU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIHN1YnNjcmliZXIpKTtcbn1cblxuLyoqXG4gKiBUaGUgb2JzZXJ2ZXIgdXNlZCBhcyBhIHN0dWIgZm9yIHN1YnNjcmlwdGlvbnMgd2hlcmUgdGhlIHVzZXIgZGlkIG5vdFxuICogcGFzcyBhbnkgYXJndW1lbnRzIHRvIGBzdWJzY3JpYmVgLiBDb21lcyB3aXRoIHRoZSBkZWZhdWx0IGVycm9yIGhhbmRsaW5nXG4gKiBiZWhhdmlvci5cbiAqL1xuZXhwb3J0IGNvbnN0IEVNUFRZX09CU0VSVkVSOiBSZWFkb25seTxPYnNlcnZlcjxhbnk+PiAmIHsgY2xvc2VkOiB0cnVlIH0gPSB7XG4gIGNsb3NlZDogdHJ1ZSxcbiAgbmV4dDogbm9vcCxcbiAgZXJyb3I6IGRlZmF1bHRFcnJvckhhbmRsZXIsXG4gIGNvbXBsZXRlOiBub29wLFxufTtcbiIsICIvKipcbiAqIFN5bWJvbC5vYnNlcnZhYmxlIG9yIGEgc3RyaW5nIFwiQEBvYnNlcnZhYmxlXCIuIFVzZWQgZm9yIGludGVyb3BcbiAqXG4gKiBAZGVwcmVjYXRlZCBXZSB3aWxsIG5vIGxvbmdlciBiZSBleHBvcnRpbmcgdGhpcyBzeW1ib2wgaW4gdXBjb21pbmcgdmVyc2lvbnMgb2YgUnhKUy5cbiAqIEluc3RlYWQgcG9seWZpbGwgYW5kIHVzZSBTeW1ib2wub2JzZXJ2YWJsZSBkaXJlY3RseSAqb3IqIHVzZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9zeW1ib2wtb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgY29uc3Qgb2JzZXJ2YWJsZTogc3RyaW5nIHwgc3ltYm9sID0gKCgpID0+ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlKSB8fCAnQEBvYnNlcnZhYmxlJykoKTtcbiIsICIvKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgb25lIHBhcmFtZXRlciBhbmQganVzdCByZXR1cm5zIGl0LiBTaW1wbHkgcHV0LFxuICogdGhpcyBpcyBsaWtlIGA8VD4oeDogVCk6IFQgPT4geGAuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCBpbiBzb21lIGNhc2VzIHdoZW4gdXNpbmcgdGhpbmdzIGxpa2UgYG1lcmdlTWFwYFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSwgbWFwLCByYW5nZSwgbWVyZ2VNYXAsIGlkZW50aXR5IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSg1KSk7XG4gKlxuICogY29uc3QgcmVzdWx0JCA9IHNvdXJjZSQucGlwZShcbiAqICAgbWFwKGkgPT4gcmFuZ2UoaSkpLFxuICogICBtZXJnZU1hcChpZGVudGl0eSkgLy8gc2FtZSBhcyBtZXJnZU1hcCh4ID0+IHgpXG4gKiApO1xuICpcbiAqIHJlc3VsdCQuc3Vic2NyaWJlKHtcbiAqICAgbmV4dDogY29uc29sZS5sb2dcbiAqIH0pO1xuICogYGBgXG4gKlxuICogT3Igd2hlbiB5b3Ugd2FudCB0byBzZWxlY3RpdmVseSBhcHBseSBhbiBvcGVyYXRvclxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSwgaWRlbnRpdHkgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBzaG91bGRMaW1pdCA9ICgpID0+IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gKlxuICogY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApO1xuICpcbiAqIGNvbnN0IHJlc3VsdCQgPSBzb3VyY2UkLnBpcGUoc2hvdWxkTGltaXQoKSA/IHRha2UoNSkgOiBpZGVudGl0eSk7XG4gKlxuICogcmVzdWx0JC5zdWJzY3JpYmUoe1xuICogICBuZXh0OiBjb25zb2xlLmxvZ1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0geCBBbnkgdmFsdWUgdGhhdCBpcyByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyBUaGUgdmFsdWUgcGFzc2VkIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIgdG8gdGhpcyBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk8VD4oeDogVCk6IFQge1xuICByZXR1cm4geDtcbn1cbiIsICJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknO1xuaW1wb3J0IHsgVW5hcnlGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoKTogdHlwZW9mIGlkZW50aXR5O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQT4oZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+KTogVW5hcnlGdW5jdGlvbjxULCBBPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEI+KGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPiwgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+KTogVW5hcnlGdW5jdGlvbjxULCBCPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEM+KGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPiwgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LCBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4pOiBVbmFyeUZ1bmN0aW9uPFQsIEM+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRD4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPlxuKTogVW5hcnlGdW5jdGlvbjxULCBEPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEU+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPlxuKTogVW5hcnlGdW5jdGlvbjxULCBFPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEY+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEY+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRiwgRz4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj4sXG4gIGZuNzogVW5hcnlGdW5jdGlvbjxGLCBHPlxuKTogVW5hcnlGdW5jdGlvbjxULCBHPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz4sXG4gIGZuODogVW5hcnlGdW5jdGlvbjxHLCBIPlxuKTogVW5hcnlGdW5jdGlvbjxULCBIPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz4sXG4gIGZuODogVW5hcnlGdW5jdGlvbjxHLCBIPixcbiAgZm45OiBVbmFyeUZ1bmN0aW9uPEgsIEk+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEk+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRiwgRywgSCwgST4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj4sXG4gIGZuNzogVW5hcnlGdW5jdGlvbjxGLCBHPixcbiAgZm44OiBVbmFyeUZ1bmN0aW9uPEcsIEg+LFxuICBmbjk6IFVuYXJ5RnVuY3Rpb248SCwgST4sXG4gIC4uLmZuczogVW5hcnlGdW5jdGlvbjxhbnksIGFueT5bXVxuKTogVW5hcnlGdW5jdGlvbjxULCB1bmtub3duPjtcblxuLyoqXG4gKiBwaXBlKCkgY2FuIGJlIGNhbGxlZCBvbiBvbmUgb3IgbW9yZSBmdW5jdGlvbnMsIGVhY2ggb2Ygd2hpY2ggY2FuIHRha2Ugb25lIGFyZ3VtZW50IChcIlVuYXJ5RnVuY3Rpb25cIilcbiAqIGFuZCB1c2VzIGl0IHRvIHJldHVybiBhIHZhbHVlLlxuICogSXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgb25lIGFyZ3VtZW50LCBwYXNzZXMgaXQgdG8gdGhlIGZpcnN0IFVuYXJ5RnVuY3Rpb24sIGFuZCB0aGVuXG4gKiBwYXNzZXMgdGhlIHJlc3VsdCB0byB0aGUgbmV4dCBvbmUsIHBhc3NlcyB0aGF0IHJlc3VsdCB0byB0aGUgbmV4dCBvbmUsIGFuZCBzbyBvbi4gIFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGlwZSguLi5mbnM6IEFycmF5PFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+Pik6IFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+IHtcbiAgcmV0dXJuIHBpcGVGcm9tQXJyYXkoZm5zKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGVGcm9tQXJyYXk8VCwgUj4oZm5zOiBBcnJheTxVbmFyeUZ1bmN0aW9uPFQsIFI+Pik6IFVuYXJ5RnVuY3Rpb248VCwgUj4ge1xuICBpZiAoZm5zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBpZGVudGl0eSBhcyBVbmFyeUZ1bmN0aW9uPGFueSwgYW55PjtcbiAgfVxuXG4gIGlmIChmbnMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZuc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwaXBlZChpbnB1dDogVCk6IFIge1xuICAgIHJldHVybiBmbnMucmVkdWNlKChwcmV2OiBhbnksIGZuOiBVbmFyeUZ1bmN0aW9uPFQsIFI+KSA9PiBmbihwcmV2KSwgaW5wdXQgYXMgYW55KTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBPcGVyYXRvciB9IGZyb20gJy4vT3BlcmF0b3InO1xuaW1wb3J0IHsgU2FmZVN1YnNjcmliZXIsIFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24sIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFRlYXJkb3duTG9naWMsIE9wZXJhdG9yRnVuY3Rpb24sIFN1YnNjcmliYWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IHBpcGVGcm9tQXJyYXkgfSBmcm9tICcuL3V0aWwvcGlwZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgZXJyb3JDb250ZXh0IH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG5cbi8qKlxuICogQSByZXByZXNlbnRhdGlvbiBvZiBhbnkgc2V0IG9mIHZhbHVlcyBvdmVyIGFueSBhbW91bnQgb2YgdGltZS4gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBidWlsZGluZyBibG9ja1xuICogb2YgUnhKUy5cbiAqXG4gKiBAY2xhc3MgT2JzZXJ2YWJsZTxUPlxuICovXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIFN1YnNjcmliYWJsZTxUPiB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICovXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICovXG4gIG9wZXJhdG9yOiBPcGVyYXRvcjxhbnksIFQ+IHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3Vic2NyaWJlIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBPYnNlcnZhYmxlIGlzXG4gICAqIGluaXRpYWxseSBzdWJzY3JpYmVkIHRvLiBUaGlzIGZ1bmN0aW9uIGlzIGdpdmVuIGEgU3Vic2NyaWJlciwgdG8gd2hpY2ggbmV3IHZhbHVlc1xuICAgKiBjYW4gYmUgYG5leHRgZWQsIG9yIGFuIGBlcnJvcmAgbWV0aG9kIGNhbiBiZSBjYWxsZWQgdG8gcmFpc2UgYW4gZXJyb3IsIG9yXG4gICAqIGBjb21wbGV0ZWAgY2FuIGJlIGNhbGxlZCB0byBub3RpZnkgb2YgYSBzdWNjZXNzZnVsIGNvbXBsZXRpb24uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdWJzY3JpYmU/OiAodGhpczogT2JzZXJ2YWJsZTxUPiwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4gVGVhcmRvd25Mb2dpYykge1xuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICB9XG4gIH1cblxuICAvLyBIQUNLOiBTaW5jZSBUeXBlU2NyaXB0IGluaGVyaXRzIHN0YXRpYyBwcm9wZXJ0aWVzIHRvbywgd2UgaGF2ZSB0b1xuICAvLyBmaWdodCBhZ2FpbnN0IFR5cGVTY3JpcHQgaGVyZSBzbyBTdWJqZWN0IGNhbiBoYXZlIGEgZGlmZmVyZW50IHN0YXRpYyBjcmVhdGUgc2lnbmF0dXJlXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE9ic2VydmFibGUgYnkgY2FsbGluZyB0aGUgT2JzZXJ2YWJsZSBjb25zdHJ1Y3RvclxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJzY3JpYmU/IHRoZSBzdWJzY3JpYmVyIGZ1bmN0aW9uIHRvIGJlIHBhc3NlZCB0byB0aGUgT2JzZXJ2YWJsZSBjb25zdHJ1Y3RvclxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhIG5ldyBvYnNlcnZhYmxlXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgbmV3IE9ic2VydmFibGUoKWAgaW5zdGVhZC4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkgPSA8VD4oc3Vic2NyaWJlPzogKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IFRlYXJkb3duTG9naWMpID0+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oc3Vic2NyaWJlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlLCB3aXRoIHRoaXMgT2JzZXJ2YWJsZSBpbnN0YW5jZSBhcyB0aGUgc291cmNlLCBhbmQgdGhlIHBhc3NlZFxuICAgKiBvcGVyYXRvciBkZWZpbmVkIGFzIHRoZSBuZXcgb2JzZXJ2YWJsZSdzIG9wZXJhdG9yLlxuICAgKiBAbWV0aG9kIGxpZnRcbiAgICogQHBhcmFtIG9wZXJhdG9yIHRoZSBvcGVyYXRvciBkZWZpbmluZyB0aGUgb3BlcmF0aW9uIHRvIHRha2Ugb24gdGhlIG9ic2VydmFibGVcbiAgICogQHJldHVybiBhIG5ldyBvYnNlcnZhYmxlIHdpdGggdGhlIE9wZXJhdG9yIGFwcGxpZWRcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gICAqIElmIHlvdSBoYXZlIGltcGxlbWVudGVkIGFuIG9wZXJhdG9yIHVzaW5nIGBsaWZ0YCwgaXQgaXMgcmVjb21tZW5kZWQgdGhhdCB5b3UgY3JlYXRlIGFuXG4gICAqIG9wZXJhdG9yIGJ5IHNpbXBseSByZXR1cm5pbmcgYG5ldyBPYnNlcnZhYmxlKClgIGRpcmVjdGx5LiBTZWUgXCJDcmVhdGluZyBuZXcgb3BlcmF0b3JzIGZyb21cbiAgICogc2NyYXRjaFwiIHNlY3Rpb24gaGVyZTogaHR0cHM6Ly9yeGpzLmRldi9ndWlkZS9vcGVyYXRvcnNcbiAgICovXG4gIGxpZnQ8Uj4ob3BlcmF0b3I/OiBPcGVyYXRvcjxULCBSPik6IE9ic2VydmFibGU8Uj4ge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxSPigpO1xuICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH1cblxuICBzdWJzY3JpYmUob2JzZXJ2ZXJPck5leHQ/OiBQYXJ0aWFsPE9ic2VydmVyPFQ+PiB8ICgodmFsdWU6IFQpID0+IHZvaWQpKTogU3Vic2NyaXB0aW9uO1xuICAvKiogQGRlcHJlY2F0ZWQgSW5zdGVhZCBvZiBwYXNzaW5nIHNlcGFyYXRlIGNhbGxiYWNrIGFyZ3VtZW50cywgdXNlIGFuIG9ic2VydmVyIGFyZ3VtZW50LiBTaWduYXR1cmVzIHRha2luZyBzZXBhcmF0ZSBjYWxsYmFjayBhcmd1bWVudHMgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zdWJzY3JpYmUtYXJndW1lbnRzICovXG4gIHN1YnNjcmliZShuZXh0PzogKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCBudWxsLCBlcnJvcj86ICgoZXJyb3I6IGFueSkgPT4gdm9pZCkgfCBudWxsLCBjb21wbGV0ZT86ICgoKSA9PiB2b2lkKSB8IG51bGwpOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBJbnZva2VzIGFuIGV4ZWN1dGlvbiBvZiBhbiBPYnNlcnZhYmxlIGFuZCByZWdpc3RlcnMgT2JzZXJ2ZXIgaGFuZGxlcnMgZm9yIG5vdGlmaWNhdGlvbnMgaXQgd2lsbCBlbWl0LlxuICAgKlxuICAgKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+VXNlIGl0IHdoZW4geW91IGhhdmUgYWxsIHRoZXNlIE9ic2VydmFibGVzLCBidXQgc3RpbGwgbm90aGluZyBpcyBoYXBwZW5pbmcuPC9zcGFuPlxuICAgKlxuICAgKiBgc3Vic2NyaWJlYCBpcyBub3QgYSByZWd1bGFyIG9wZXJhdG9yLCBidXQgYSBtZXRob2QgdGhhdCBjYWxscyBPYnNlcnZhYmxlJ3MgaW50ZXJuYWwgYHN1YnNjcmliZWAgZnVuY3Rpb24uIEl0XG4gICAqIG1pZ2h0IGJlIGZvciBleGFtcGxlIGEgZnVuY3Rpb24gdGhhdCB5b3UgcGFzc2VkIHRvIE9ic2VydmFibGUncyBjb25zdHJ1Y3RvciwgYnV0IG1vc3Qgb2YgdGhlIHRpbWUgaXQgaXNcbiAgICogYSBsaWJyYXJ5IGltcGxlbWVudGF0aW9uLCB3aGljaCBkZWZpbmVzIHdoYXQgd2lsbCBiZSBlbWl0dGVkIGJ5IGFuIE9ic2VydmFibGUsIGFuZCB3aGVuIGl0IGJlIHdpbGwgZW1pdHRlZC4gVGhpcyBtZWFuc1xuICAgKiB0aGF0IGNhbGxpbmcgYHN1YnNjcmliZWAgaXMgYWN0dWFsbHkgdGhlIG1vbWVudCB3aGVuIE9ic2VydmFibGUgc3RhcnRzIGl0cyB3b3JrLCBub3Qgd2hlbiBpdCBpcyBjcmVhdGVkLCBhcyBpdCBpcyBvZnRlblxuICAgKiB0aGUgdGhvdWdodC5cbiAgICpcbiAgICogQXBhcnQgZnJvbSBzdGFydGluZyB0aGUgZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUsIHRoaXMgbWV0aG9kIGFsbG93cyB5b3UgdG8gbGlzdGVuIGZvciB2YWx1ZXNcbiAgICogdGhhdCBhbiBPYnNlcnZhYmxlIGVtaXRzLCBhcyB3ZWxsIGFzIGZvciB3aGVuIGl0IGNvbXBsZXRlcyBvciBlcnJvcnMuIFlvdSBjYW4gYWNoaWV2ZSB0aGlzIGluIHR3b1xuICAgKiBvZiB0aGUgZm9sbG93aW5nIHdheXMuXG4gICAqXG4gICAqIFRoZSBmaXJzdCB3YXkgaXMgY3JlYXRpbmcgYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB7QGxpbmsgT2JzZXJ2ZXJ9IGludGVyZmFjZS4gSXQgc2hvdWxkIGhhdmUgbWV0aG9kc1xuICAgKiBkZWZpbmVkIGJ5IHRoYXQgaW50ZXJmYWNlLCBidXQgbm90ZSB0aGF0IGl0IHNob3VsZCBiZSBqdXN0IGEgcmVndWxhciBKYXZhU2NyaXB0IG9iamVjdCwgd2hpY2ggeW91IGNhbiBjcmVhdGVcbiAgICogeW91cnNlbGYgaW4gYW55IHdheSB5b3Ugd2FudCAoRVM2IGNsYXNzLCBjbGFzc2ljIGZ1bmN0aW9uIGNvbnN0cnVjdG9yLCBvYmplY3QgbGl0ZXJhbCBldGMuKS4gSW4gcGFydGljdWxhciwgZG9cbiAgICogbm90IGF0dGVtcHQgdG8gdXNlIGFueSBSeEpTIGltcGxlbWVudGF0aW9uIGRldGFpbHMgdG8gY3JlYXRlIE9ic2VydmVycyAtIHlvdSBkb24ndCBuZWVkIHRoZW0uIFJlbWVtYmVyIGFsc29cbiAgICogdGhhdCB5b3VyIG9iamVjdCBkb2VzIG5vdCBoYXZlIHRvIGltcGxlbWVudCBhbGwgbWV0aG9kcy4gSWYgeW91IGZpbmQgeW91cnNlbGYgY3JlYXRpbmcgYSBtZXRob2QgdGhhdCBkb2Vzbid0XG4gICAqIGRvIGFueXRoaW5nLCB5b3UgY2FuIHNpbXBseSBvbWl0IGl0LiBOb3RlIGhvd2V2ZXIsIGlmIHRoZSBgZXJyb3JgIG1ldGhvZCBpcyBub3QgcHJvdmlkZWQgYW5kIGFuIGVycm9yIGhhcHBlbnMsXG4gICAqIGl0IHdpbGwgYmUgdGhyb3duIGFzeW5jaHJvbm91c2x5LiBFcnJvcnMgdGhyb3duIGFzeW5jaHJvbm91c2x5IGNhbm5vdCBiZSBjYXVnaHQgdXNpbmcgYHRyeWAvYGNhdGNoYC4gSW5zdGVhZCxcbiAgICogdXNlIHRoZSB7QGxpbmsgb25VbmhhbmRsZWRFcnJvcn0gY29uZmlndXJhdGlvbiBvcHRpb24gb3IgdXNlIGEgcnVudGltZSBoYW5kbGVyIChsaWtlIGB3aW5kb3cub25lcnJvcmAgb3JcbiAgICogYHByb2Nlc3Mub24oJ2Vycm9yKWApIHRvIGJlIG5vdGlmaWVkIG9mIHVuaGFuZGxlZCBlcnJvcnMuIEJlY2F1c2Ugb2YgdGhpcywgaXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBwcm92aWRlXG4gICAqIGFuIGBlcnJvcmAgbWV0aG9kIHRvIGF2b2lkIG1pc3NpbmcgdGhyb3duIGVycm9ycy5cbiAgICpcbiAgICogVGhlIHNlY29uZCB3YXkgaXMgdG8gZ2l2ZSB1cCBvbiBPYnNlcnZlciBvYmplY3QgYWx0b2dldGhlciBhbmQgc2ltcGx5IHByb3ZpZGUgY2FsbGJhY2sgZnVuY3Rpb25zIGluIHBsYWNlIG9mIGl0cyBtZXRob2RzLlxuICAgKiBUaGlzIG1lYW5zIHlvdSBjYW4gcHJvdmlkZSB0aHJlZSBmdW5jdGlvbnMgYXMgYXJndW1lbnRzIHRvIGBzdWJzY3JpYmVgLCB3aGVyZSB0aGUgZmlyc3QgZnVuY3Rpb24gaXMgZXF1aXZhbGVudFxuICAgKiBvZiBhIGBuZXh0YCBtZXRob2QsIHRoZSBzZWNvbmQgb2YgYW4gYGVycm9yYCBtZXRob2QgYW5kIHRoZSB0aGlyZCBvZiBhIGBjb21wbGV0ZWAgbWV0aG9kLiBKdXN0IGFzIGluIGNhc2Ugb2YgYW4gT2JzZXJ2ZXIsXG4gICAqIGlmIHlvdSBkbyBub3QgbmVlZCB0byBsaXN0ZW4gZm9yIHNvbWV0aGluZywgeW91IGNhbiBvbWl0IGEgZnVuY3Rpb24gYnkgcGFzc2luZyBgdW5kZWZpbmVkYCBvciBgbnVsbGAsXG4gICAqIHNpbmNlIGBzdWJzY3JpYmVgIHJlY29nbml6ZXMgdGhlc2UgZnVuY3Rpb25zIGJ5IHdoZXJlIHRoZXkgd2VyZSBwbGFjZWQgaW4gZnVuY3Rpb24gY2FsbC4gV2hlbiBpdCBjb21lc1xuICAgKiB0byB0aGUgYGVycm9yYCBmdW5jdGlvbiwgYXMgd2l0aCBhbiBPYnNlcnZlciwgaWYgbm90IHByb3ZpZGVkLCBlcnJvcnMgZW1pdHRlZCBieSBhbiBPYnNlcnZhYmxlIHdpbGwgYmUgdGhyb3duIGFzeW5jaHJvbm91c2x5LlxuICAgKlxuICAgKiBZb3UgY2FuLCBob3dldmVyLCBzdWJzY3JpYmUgd2l0aCBubyBwYXJhbWV0ZXJzIGF0IGFsbC4gVGhpcyBtYXkgYmUgdGhlIGNhc2Ugd2hlcmUgeW91J3JlIG5vdCBpbnRlcmVzdGVkIGluIHRlcm1pbmFsIGV2ZW50c1xuICAgKiBhbmQgeW91IGFsc28gaGFuZGxlZCBlbWlzc2lvbnMgaW50ZXJuYWxseSBieSB1c2luZyBvcGVyYXRvcnMgKGUuZy4gdXNpbmcgYHRhcGApLlxuICAgKlxuICAgKiBXaGljaGV2ZXIgc3R5bGUgb2YgY2FsbGluZyBgc3Vic2NyaWJlYCB5b3UgdXNlLCBpbiBib3RoIGNhc2VzIGl0IHJldHVybnMgYSBTdWJzY3JpcHRpb24gb2JqZWN0LlxuICAgKiBUaGlzIG9iamVjdCBhbGxvd3MgeW91IHRvIGNhbGwgYHVuc3Vic2NyaWJlYCBvbiBpdCwgd2hpY2ggaW4gdHVybiB3aWxsIHN0b3AgdGhlIHdvcmsgdGhhdCBhbiBPYnNlcnZhYmxlIGRvZXMgYW5kIHdpbGwgY2xlYW5cbiAgICogdXAgYWxsIHJlc291cmNlcyB0aGF0IGFuIE9ic2VydmFibGUgdXNlZC4gTm90ZSB0aGF0IGNhbmNlbGxpbmcgYSBzdWJzY3JpcHRpb24gd2lsbCBub3QgY2FsbCBgY29tcGxldGVgIGNhbGxiYWNrXG4gICAqIHByb3ZpZGVkIHRvIGBzdWJzY3JpYmVgIGZ1bmN0aW9uLCB3aGljaCBpcyByZXNlcnZlZCBmb3IgYSByZWd1bGFyIGNvbXBsZXRpb24gc2lnbmFsIHRoYXQgY29tZXMgZnJvbSBhbiBPYnNlcnZhYmxlLlxuICAgKlxuICAgKiBSZW1lbWJlciB0aGF0IGNhbGxiYWNrcyBwcm92aWRlZCB0byBgc3Vic2NyaWJlYCBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5LlxuICAgKiBJdCBpcyBhbiBPYnNlcnZhYmxlIGl0c2VsZiB0aGF0IGRlY2lkZXMgd2hlbiB0aGVzZSBmdW5jdGlvbnMgd2lsbCBiZSBjYWxsZWQuIEZvciBleGFtcGxlIHtAbGluayBvZn1cbiAgICogYnkgZGVmYXVsdCBlbWl0cyBhbGwgaXRzIHZhbHVlcyBzeW5jaHJvbm91c2x5LiBBbHdheXMgY2hlY2sgZG9jdW1lbnRhdGlvbiBmb3IgaG93IGdpdmVuIE9ic2VydmFibGVcbiAgICogd2lsbCBiZWhhdmUgd2hlbiBzdWJzY3JpYmVkIGFuZCBpZiBpdHMgZGVmYXVsdCBiZWhhdmlvciBjYW4gYmUgbW9kaWZpZWQgd2l0aCBhIGBzY2hlZHVsZXJgLlxuICAgKlxuICAgKiAjIyMjIEV4YW1wbGVzXG4gICAqXG4gICAqIFN1YnNjcmliZSB3aXRoIGFuIHtAbGluayBndWlkZS9vYnNlcnZlciBPYnNlcnZlcn1cbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogY29uc3Qgc3VtT2JzZXJ2ZXIgPSB7XG4gICAqICAgc3VtOiAwLFxuICAgKiAgIG5leHQodmFsdWUpIHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdBZGRpbmc6ICcgKyB2YWx1ZSk7XG4gICAqICAgICB0aGlzLnN1bSA9IHRoaXMuc3VtICsgdmFsdWU7XG4gICAqICAgfSxcbiAgICogICBlcnJvcigpIHtcbiAgICogICAgIC8vIFdlIGFjdHVhbGx5IGNvdWxkIGp1c3QgcmVtb3ZlIHRoaXMgbWV0aG9kLFxuICAgKiAgICAgLy8gc2luY2Ugd2UgZG8gbm90IHJlYWxseSBjYXJlIGFib3V0IGVycm9ycyByaWdodCBub3cuXG4gICAqICAgfSxcbiAgICogICBjb21wbGV0ZSgpIHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdTdW0gZXF1YWxzOiAnICsgdGhpcy5zdW0pO1xuICAgKiAgIH1cbiAgICogfTtcbiAgICpcbiAgICogb2YoMSwgMiwgMykgLy8gU3luY2hyb25vdXNseSBlbWl0cyAxLCAyLCAzIGFuZCB0aGVuIGNvbXBsZXRlcy5cbiAgICogICAuc3Vic2NyaWJlKHN1bU9ic2VydmVyKTtcbiAgICpcbiAgICogLy8gTG9nczpcbiAgICogLy8gJ0FkZGluZzogMSdcbiAgICogLy8gJ0FkZGluZzogMidcbiAgICogLy8gJ0FkZGluZzogMydcbiAgICogLy8gJ1N1bSBlcXVhbHM6IDYnXG4gICAqIGBgYFxuICAgKlxuICAgKiBTdWJzY3JpYmUgd2l0aCBmdW5jdGlvbnMgKHtAbGluayBkZXByZWNhdGlvbnMvc3Vic2NyaWJlLWFyZ3VtZW50cyBkZXByZWNhdGVkfSlcbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJ1xuICAgKlxuICAgKiBsZXQgc3VtID0gMDtcbiAgICpcbiAgICogb2YoMSwgMiwgMykuc3Vic2NyaWJlKFxuICAgKiAgIHZhbHVlID0+IHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdBZGRpbmc6ICcgKyB2YWx1ZSk7XG4gICAqICAgICBzdW0gPSBzdW0gKyB2YWx1ZTtcbiAgICogICB9LFxuICAgKiAgIHVuZGVmaW5lZCxcbiAgICogICAoKSA9PiBjb25zb2xlLmxvZygnU3VtIGVxdWFsczogJyArIHN1bSlcbiAgICogKTtcbiAgICpcbiAgICogLy8gTG9nczpcbiAgICogLy8gJ0FkZGluZzogMSdcbiAgICogLy8gJ0FkZGluZzogMidcbiAgICogLy8gJ0FkZGluZzogMydcbiAgICogLy8gJ1N1bSBlcXVhbHM6IDYnXG4gICAqIGBgYFxuICAgKlxuICAgKiBDYW5jZWwgYSBzdWJzY3JpcHRpb25cbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogY29uc3Qgc3Vic2NyaXB0aW9uID0gaW50ZXJ2YWwoMTAwMCkuc3Vic2NyaWJlKHtcbiAgICogICBuZXh0KG51bSkge1xuICAgKiAgICAgY29uc29sZS5sb2cobnVtKVxuICAgKiAgIH0sXG4gICAqICAgY29tcGxldGUoKSB7XG4gICAqICAgICAvLyBXaWxsIG5vdCBiZSBjYWxsZWQsIGV2ZW4gd2hlbiBjYW5jZWxsaW5nIHN1YnNjcmlwdGlvbi5cbiAgICogICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZWQhJyk7XG4gICAqICAgfVxuICAgKiB9KTtcbiAgICpcbiAgICogc2V0VGltZW91dCgoKSA9PiB7XG4gICAqICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAqICAgY29uc29sZS5sb2coJ3Vuc3Vic2NyaWJlZCEnKTtcbiAgICogfSwgMjUwMCk7XG4gICAqXG4gICAqIC8vIExvZ3M6XG4gICAqIC8vIDAgYWZ0ZXIgMXNcbiAgICogLy8gMSBhZnRlciAyc1xuICAgKiAvLyAndW5zdWJzY3JpYmVkIScgYWZ0ZXIgMi41c1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtPYnNlcnZlcnxGdW5jdGlvbn0gb2JzZXJ2ZXJPck5leHQgKG9wdGlvbmFsKSBFaXRoZXIgYW4gb2JzZXJ2ZXIgd2l0aCBtZXRob2RzIHRvIGJlIGNhbGxlZCxcbiAgICogb3IgdGhlIGZpcnN0IG9mIHRocmVlIHBvc3NpYmxlIGhhbmRsZXJzLCB3aGljaCBpcyB0aGUgaGFuZGxlciBmb3IgZWFjaCB2YWx1ZSBlbWl0dGVkIGZyb20gdGhlIHN1YnNjcmliZWRcbiAgICogT2JzZXJ2YWJsZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZXJyb3IgKG9wdGlvbmFsKSBBIGhhbmRsZXIgZm9yIGEgdGVybWluYWwgZXZlbnQgcmVzdWx0aW5nIGZyb20gYW4gZXJyb3IuIElmIG5vIGVycm9yIGhhbmRsZXIgaXMgcHJvdmlkZWQsXG4gICAqIHRoZSBlcnJvciB3aWxsIGJlIHRocm93biBhc3luY2hyb25vdXNseSBhcyB1bmhhbmRsZWQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBsZXRlIChvcHRpb25hbCkgQSBoYW5kbGVyIGZvciBhIHRlcm1pbmFsIGV2ZW50IHJlc3VsdGluZyBmcm9tIHN1Y2Nlc3NmdWwgY29tcGxldGlvbi5cbiAgICogQHJldHVybiB7U3Vic2NyaXB0aW9ufSBhIHN1YnNjcmlwdGlvbiByZWZlcmVuY2UgdG8gdGhlIHJlZ2lzdGVyZWQgaGFuZGxlcnNcbiAgICogQG1ldGhvZCBzdWJzY3JpYmVcbiAgICovXG4gIHN1YnNjcmliZShcbiAgICBvYnNlcnZlck9yTmV4dD86IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+IHwgKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGVycm9yPzogKChlcnJvcjogYW55KSA9PiB2b2lkKSB8IG51bGwsXG4gICAgY29tcGxldGU/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG4gICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3Qgc3Vic2NyaWJlciA9IGlzU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCkgPyBvYnNlcnZlck9yTmV4dCA6IG5ldyBTYWZlU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcblxuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICBjb25zdCB7IG9wZXJhdG9yLCBzb3VyY2UgfSA9IHRoaXM7XG4gICAgICBzdWJzY3JpYmVyLmFkZChcbiAgICAgICAgb3BlcmF0b3JcbiAgICAgICAgICA/IC8vIFdlJ3JlIGRlYWxpbmcgd2l0aCBhIHN1YnNjcmlwdGlvbiBpbiB0aGVcbiAgICAgICAgICAgIC8vIG9wZXJhdG9yIGNoYWluIHRvIG9uZSBvZiBvdXIgbGlmdGVkIG9wZXJhdG9ycy5cbiAgICAgICAgICAgIG9wZXJhdG9yLmNhbGwoc3Vic2NyaWJlciwgc291cmNlKVxuICAgICAgICAgIDogc291cmNlXG4gICAgICAgICAgPyAvLyBJZiBgc291cmNlYCBoYXMgYSB2YWx1ZSwgYnV0IGBvcGVyYXRvcmAgZG9lcyBub3QsIHNvbWV0aGluZyB0aGF0XG4gICAgICAgICAgICAvLyBoYWQgaW50aW1hdGUga25vd2xlZGdlIG9mIG91ciBBUEksIGxpa2Ugb3VyIGBTdWJqZWN0YCwgbXVzdCBoYXZlXG4gICAgICAgICAgICAvLyBzZXQgaXQuIFdlJ3JlIGdvaW5nIHRvIGp1c3QgY2FsbCBgX3N1YnNjcmliZWAgZGlyZWN0bHkuXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUoc3Vic2NyaWJlcilcbiAgICAgICAgICA6IC8vIEluIGFsbCBvdGhlciBjYXNlcywgd2UncmUgbGlrZWx5IHdyYXBwaW5nIGEgdXNlci1wcm92aWRlZCBpbml0aWFsaXplclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24sIHNvIHdlIG5lZWQgdG8gY2F0Y2ggZXJyb3JzIGFuZCBoYW5kbGUgdGhlbSBhcHByb3ByaWF0ZWx5LlxuICAgICAgICAgICAgdGhpcy5fdHJ5U3Vic2NyaWJlKHN1YnNjcmliZXIpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfdHJ5U3Vic2NyaWJlKHNpbms6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShzaW5rKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gcmV0dXJuIGFueXRoaW5nIGluIHRoaXMgY2FzZSxcbiAgICAgIC8vIGJlY2F1c2UgaXQncyBqdXN0IGdvaW5nIHRvIHRyeSB0byBgYWRkKClgIHRvIGEgc3Vic2NyaXB0aW9uXG4gICAgICAvLyBhYm92ZS5cbiAgICAgIHNpbmsuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlZCBhcyBhIE5PTi1DQU5DRUxMQUJMRSBtZWFucyBvZiBzdWJzY3JpYmluZyB0byBhbiBvYnNlcnZhYmxlLCBmb3IgdXNlIHdpdGhcbiAgICogQVBJcyB0aGF0IGV4cGVjdCBwcm9taXNlcywgbGlrZSBgYXN5bmMvYXdhaXRgLiBZb3UgY2Fubm90IHVuc3Vic2NyaWJlIGZyb20gdGhpcy5cbiAgICpcbiAgICogKipXQVJOSU5HKio6IE9ubHkgdXNlIHRoaXMgd2l0aCBvYnNlcnZhYmxlcyB5b3UgKmtub3cqIHdpbGwgY29tcGxldGUuIElmIHRoZSBzb3VyY2VcbiAgICogb2JzZXJ2YWJsZSBkb2VzIG5vdCBjb21wbGV0ZSwgeW91IHdpbGwgZW5kIHVwIHdpdGggYSBwcm9taXNlIHRoYXQgaXMgaHVuZyB1cCwgYW5kXG4gICAqIHBvdGVudGlhbGx5IGFsbCBvZiB0aGUgc3RhdGUgb2YgYW4gYXN5bmMgZnVuY3Rpb24gaGFuZ2luZyBvdXQgaW4gbWVtb3J5LiBUbyBhdm9pZFxuICAgKiB0aGlzIHNpdHVhdGlvbiwgbG9vayBpbnRvIGFkZGluZyBzb21ldGhpbmcgbGlrZSB7QGxpbmsgdGltZW91dH0sIHtAbGluayB0YWtlfSxcbiAgICoge0BsaW5rIHRha2VXaGlsZX0sIG9yIHtAbGluayB0YWtlVW50aWx9IGFtb25nc3Qgb3RoZXJzLlxuICAgKlxuICAgKiAjIyMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UgfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSg0KSk7XG4gICAqXG4gICAqIGFzeW5jIGZ1bmN0aW9uIGdldFRvdGFsKCkge1xuICAgKiAgIGxldCB0b3RhbCA9IDA7XG4gICAqXG4gICAqICAgYXdhaXQgc291cmNlJC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICogICAgIHRvdGFsICs9IHZhbHVlO1xuICAgKiAgICAgY29uc29sZS5sb2coJ29ic2VydmFibGUgLT4gJyArIHZhbHVlKTtcbiAgICogICB9KTtcbiAgICpcbiAgICogICByZXR1cm4gdG90YWw7XG4gICAqIH1cbiAgICpcbiAgICogZ2V0VG90YWwoKS50aGVuKFxuICAgKiAgIHRvdGFsID0+IGNvbnNvbGUubG9nKCdUb3RhbDogJyArIHRvdGFsKVxuICAgKiApO1xuICAgKlxuICAgKiAvLyBFeHBlY3RlZDpcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMCdcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMSdcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMidcbiAgICogLy8gJ29ic2VydmFibGUgLT4gMydcbiAgICogLy8gJ1RvdGFsOiA2J1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIG5leHQgYSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIG9ic2VydmFibGVcbiAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCBlaXRoZXIgcmVzb2x2ZXMgb24gb2JzZXJ2YWJsZSBjb21wbGV0aW9uIG9yXG4gICAqICByZWplY3RzIHdpdGggdGhlIGhhbmRsZWQgZXJyb3JcbiAgICovXG4gIGZvckVhY2gobmV4dDogKHZhbHVlOiBUKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQHBhcmFtIG5leHQgYSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIG9ic2VydmFibGVcbiAgICogQHBhcmFtIHByb21pc2VDdG9yIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gdXNlZCB0byBpbnN0YW50aWF0ZSB0aGUgUHJvbWlzZVxuICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB0aGF0IGVpdGhlciByZXNvbHZlcyBvbiBvYnNlcnZhYmxlIGNvbXBsZXRpb24gb3JcbiAgICogIHJlamVjdHMgd2l0aCB0aGUgaGFuZGxlZCBlcnJvclxuICAgKiBAZGVwcmVjYXRlZCBQYXNzaW5nIGEgUHJvbWlzZSBjb25zdHJ1Y3RvciB3aWxsIG5vIGxvbmdlciBiZSBhdmFpbGFibGVcbiAgICogaW4gdXBjb21pbmcgdmVyc2lvbnMgb2YgUnhKUy4gVGhpcyBpcyBiZWNhdXNlIGl0IGFkZHMgd2VpZ2h0IHRvIHRoZSBsaWJyYXJ5LCBmb3IgdmVyeVxuICAgKiBsaXR0bGUgYmVuZWZpdC4gSWYgeW91IG5lZWQgdGhpcyBmdW5jdGlvbmFsaXR5LCBpdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSBlaXRoZXJcbiAgICogcG9seWZpbGwgUHJvbWlzZSwgb3IgeW91IGNyZWF0ZSBhbiBhZGFwdGVyIHRvIGNvbnZlcnQgdGhlIHJldHVybmVkIG5hdGl2ZSBwcm9taXNlXG4gICAqIHRvIHdoYXRldmVyIHByb21pc2UgaW1wbGVtZW50YXRpb24geW91IHdhbnRlZC4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgZm9yRWFjaChuZXh0OiAodmFsdWU6IFQpID0+IHZvaWQsIHByb21pc2VDdG9yOiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTx2b2lkPjtcblxuICBmb3JFYWNoKG5leHQ6ICh2YWx1ZTogVCkgPT4gdm9pZCwgcHJvbWlzZUN0b3I/OiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG5cbiAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBuZXcgU2FmZVN1YnNjcmliZXI8VD4oe1xuICAgICAgICBuZXh0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgIGNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9KSBhcyBQcm9taXNlPHZvaWQ+O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2U/LnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBpbnRlcm9wIHBvaW50IGRlZmluZWQgYnkgdGhlIGVzNy1vYnNlcnZhYmxlIHNwZWMgaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtb2JzZXJ2YWJsZVxuICAgKiBAbWV0aG9kIFN5bWJvbC5vYnNlcnZhYmxlXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IHRoaXMgaW5zdGFuY2Ugb2YgdGhlIG9ic2VydmFibGVcbiAgICovXG4gIFtTeW1ib2xfb2JzZXJ2YWJsZV0oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbiAgcGlwZSgpOiBPYnNlcnZhYmxlPFQ+O1xuICBwaXBlPEE+KG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPik6IE9ic2VydmFibGU8QT47XG4gIHBpcGU8QSwgQj4ob3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LCBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4pOiBPYnNlcnZhYmxlPEI+O1xuICBwaXBlPEEsIEIsIEM+KG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPiwgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LCBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4pOiBPYnNlcnZhYmxlPEM+O1xuICBwaXBlPEEsIEIsIEMsIEQ+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPlxuICApOiBPYnNlcnZhYmxlPEQ+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEU+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT5cbiAgKTogT2JzZXJ2YWJsZTxFPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPlxuICApOiBPYnNlcnZhYmxlPEY+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEc+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPlxuICApOiBPYnNlcnZhYmxlPEc+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEg+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPixcbiAgICBvcDg6IE9wZXJhdG9yRnVuY3Rpb248RywgSD5cbiAgKTogT2JzZXJ2YWJsZTxIPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz4sXG4gICAgb3A4OiBPcGVyYXRvckZ1bmN0aW9uPEcsIEg+LFxuICAgIG9wOTogT3BlcmF0b3JGdW5jdGlvbjxILCBJPlxuICApOiBPYnNlcnZhYmxlPEk+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPixcbiAgICBvcDg6IE9wZXJhdG9yRnVuY3Rpb248RywgSD4sXG4gICAgb3A5OiBPcGVyYXRvckZ1bmN0aW9uPEgsIEk+LFxuICAgIC4uLm9wZXJhdGlvbnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W11cbiAgKTogT2JzZXJ2YWJsZTx1bmtub3duPjtcbiAgLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuICAvKipcbiAgICogVXNlZCB0byBzdGl0Y2ggdG9nZXRoZXIgZnVuY3Rpb25hbCBvcGVyYXRvcnMgaW50byBhIGNoYWluLlxuICAgKiBAbWV0aG9kIHBpcGVcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gdGhlIE9ic2VydmFibGUgcmVzdWx0IG9mIGFsbCBvZiB0aGUgb3BlcmF0b3JzIGhhdmluZ1xuICAgKiBiZWVuIGNhbGxlZCBpbiB0aGUgb3JkZXIgdGhleSB3ZXJlIHBhc3NlZCBpbi5cbiAgICpcbiAgICogIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBpbXBvcnQgeyBpbnRlcnZhbCwgZmlsdGVyLCBtYXAsIHNjYW4gfSBmcm9tICdyeGpzJztcbiAgICpcbiAgICogaW50ZXJ2YWwoMTAwMClcbiAgICogICAucGlwZShcbiAgICogICAgIGZpbHRlcih4ID0+IHggJSAyID09PSAwKSxcbiAgICogICAgIG1hcCh4ID0+IHggKyB4KSxcbiAgICogICAgIHNjYW4oKGFjYywgeCkgPT4gYWNjICsgeClcbiAgICogICApXG4gICAqICAgLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICogYGBgXG4gICAqL1xuICBwaXBlKC4uLm9wZXJhdGlvbnM6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+W10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBwaXBlRnJvbUFycmF5KG9wZXJhdGlvbnMpKHRoaXMpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4gIC8qKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHtAbGluayBmaXJzdFZhbHVlRnJvbX0gYW5kIHtAbGluayBsYXN0VmFsdWVGcm9tfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy90by1wcm9taXNlICovXG4gIHRvUHJvbWlzZSgpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+O1xuICAvKiogQGRlcHJlY2F0ZWQgUmVwbGFjZWQgd2l0aCB7QGxpbmsgZmlyc3RWYWx1ZUZyb219IGFuZCB7QGxpbmsgbGFzdFZhbHVlRnJvbX0uIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvdG8tcHJvbWlzZSAqL1xuICB0b1Byb21pc2UoUHJvbWlzZUN0b3I6IHR5cGVvZiBQcm9taXNlKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgLyoqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2UgKi9cbiAgdG9Qcm9taXNlKFByb21pc2VDdG9yOiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoaXMgT2JzZXJ2YWJsZSBhbmQgZ2V0IGEgUHJvbWlzZSByZXNvbHZpbmcgb25cbiAgICogYGNvbXBsZXRlYCB3aXRoIHRoZSBsYXN0IGVtaXNzaW9uIChpZiBhbnkpLlxuICAgKlxuICAgKiAqKldBUk5JTkcqKjogT25seSB1c2UgdGhpcyB3aXRoIG9ic2VydmFibGVzIHlvdSAqa25vdyogd2lsbCBjb21wbGV0ZS4gSWYgdGhlIHNvdXJjZVxuICAgKiBvYnNlcnZhYmxlIGRvZXMgbm90IGNvbXBsZXRlLCB5b3Ugd2lsbCBlbmQgdXAgd2l0aCBhIHByb21pc2UgdGhhdCBpcyBodW5nIHVwLCBhbmRcbiAgICogcG90ZW50aWFsbHkgYWxsIG9mIHRoZSBzdGF0ZSBvZiBhbiBhc3luYyBmdW5jdGlvbiBoYW5naW5nIG91dCBpbiBtZW1vcnkuIFRvIGF2b2lkXG4gICAqIHRoaXMgc2l0dWF0aW9uLCBsb29rIGludG8gYWRkaW5nIHNvbWV0aGluZyBsaWtlIHtAbGluayB0aW1lb3V0fSwge0BsaW5rIHRha2V9LFxuICAgKiB7QGxpbmsgdGFrZVdoaWxlfSwgb3Ige0BsaW5rIHRha2VVbnRpbH0gYW1vbmdzdCBvdGhlcnMuXG4gICAqXG4gICAqIEBtZXRob2QgdG9Qcm9taXNlXG4gICAqIEBwYXJhbSBbcHJvbWlzZUN0b3JdIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gdXNlZCB0byBpbnN0YW50aWF0ZVxuICAgKiB0aGUgUHJvbWlzZVxuICAgKiBAcmV0dXJuIEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxhc3QgdmFsdWUgZW1pdCwgb3JcbiAgICogcmVqZWN0cyBvbiBhbiBlcnJvci4gSWYgdGhlcmUgd2VyZSBubyBlbWlzc2lvbnMsIFByb21pc2VcbiAgICogcmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQuXG4gICAqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2VcbiAgICovXG4gIHRvUHJvbWlzZShwcm9taXNlQ3Rvcj86IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+IHtcbiAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcblxuICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHZhbHVlOiBUIHwgdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zdWJzY3JpYmUoXG4gICAgICAgICh4OiBUKSA9PiAodmFsdWUgPSB4KSxcbiAgICAgICAgKGVycjogYW55KSA9PiByZWplY3QoZXJyKSxcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSh2YWx1ZSlcbiAgICAgICk7XG4gICAgfSkgYXMgUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgfVxufVxuXG4vKipcbiAqIERlY2lkZXMgYmV0d2VlbiBhIHBhc3NlZCBwcm9taXNlIGNvbnN0cnVjdG9yIGZyb20gY29uc3VtaW5nIGNvZGUsXG4gKiBBIGRlZmF1bHQgY29uZmlndXJlZCBwcm9taXNlIGNvbnN0cnVjdG9yLCBhbmQgdGhlIG5hdGl2ZSBwcm9taXNlXG4gKiBjb25zdHJ1Y3RvciBhbmQgcmV0dXJucyBpdC4gSWYgbm90aGluZyBjYW4gYmUgZm91bmQsIGl0IHdpbGwgdGhyb3dcbiAqIGFuIGVycm9yLlxuICogQHBhcmFtIHByb21pc2VDdG9yIFRoZSBvcHRpb25hbCBwcm9taXNlIGNvbnN0cnVjdG9yIHRvIHBhc3NlZCBieSBjb25zdW1pbmcgY29kZVxuICovXG5mdW5jdGlvbiBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3RvcjogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSB8IHVuZGVmaW5lZCkge1xuICByZXR1cm4gcHJvbWlzZUN0b3IgPz8gY29uZmlnLlByb21pc2UgPz8gUHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gaXNPYnNlcnZlcjxUPih2YWx1ZTogYW55KTogdmFsdWUgaXMgT2JzZXJ2ZXI8VD4ge1xuICByZXR1cm4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5uZXh0KSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmVycm9yKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmNvbXBsZXRlKTtcbn1cblxuZnVuY3Rpb24gaXNTdWJzY3JpYmVyPFQ+KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdWJzY3JpYmVyPFQ+IHtcbiAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHx8IChpc09ic2VydmVyKHZhbHVlKSAmJiBpc1N1YnNjcmlwdGlvbih2YWx1ZSkpO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUVycm9yQ2xhc3MgfSBmcm9tICcuL2NyZWF0ZUVycm9yQ2xhc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RVbnN1YnNjcmliZWRFcnJvckN0b3Ige1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLiBEbyBub3QgY29uc3RydWN0IGVycm9yIGluc3RhbmNlcy5cbiAgICogQ2Fubm90IGJlIHRhZ2dlZCBhcyBpbnRlcm5hbDogaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlWC9yeGpzL2lzc3Vlcy82MjY5XG4gICAqL1xuICBuZXcgKCk6IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yO1xufVxuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIGFuIGFjdGlvbiBpcyBpbnZhbGlkIGJlY2F1c2UgdGhlIG9iamVjdCBoYXMgYmVlblxuICogdW5zdWJzY3JpYmVkLlxuICpcbiAqIEBzZWUge0BsaW5rIFN1YmplY3R9XG4gKiBAc2VlIHtAbGluayBCZWhhdmlvclN1YmplY3R9XG4gKlxuICogQGNsYXNzIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBPYmplY3RVbnN1YnNjcmliZWRFcnJvcjogT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JDdG9yID0gY3JlYXRlRXJyb3JDbGFzcyhcbiAgKF9zdXBlcikgPT5cbiAgICBmdW5jdGlvbiBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGwodGhpczogYW55KSB7XG4gICAgICBfc3VwZXIodGhpcyk7XG4gICAgICB0aGlzLm5hbWUgPSAnT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuICAgICAgdGhpcy5tZXNzYWdlID0gJ29iamVjdCB1bnN1YnNjcmliZWQnO1xuICAgIH1cbik7XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3IgfSBmcm9tICcuL09wZXJhdG9yJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIEVNUFRZX1NVQlNDUklQVElPTiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IE9ic2VydmVyLCBTdWJzY3JpcHRpb25MaWtlLCBUZWFyZG93bkxvZ2ljIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBPYmplY3RVbnN1YnNjcmliZWRFcnJvciB9IGZyb20gJy4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuL3V0aWwvYXJyUmVtb3ZlJztcbmltcG9ydCB7IGVycm9yQ29udGV4dCB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xuXG4vKipcbiAqIEEgU3ViamVjdCBpcyBhIHNwZWNpYWwgdHlwZSBvZiBPYnNlcnZhYmxlIHRoYXQgYWxsb3dzIHZhbHVlcyB0byBiZVxuICogbXVsdGljYXN0ZWQgdG8gbWFueSBPYnNlcnZlcnMuIFN1YmplY3RzIGFyZSBsaWtlIEV2ZW50RW1pdHRlcnMuXG4gKlxuICogRXZlcnkgU3ViamVjdCBpcyBhbiBPYnNlcnZhYmxlIGFuZCBhbiBPYnNlcnZlci4gWW91IGNhbiBzdWJzY3JpYmUgdG8gYVxuICogU3ViamVjdCwgYW5kIHlvdSBjYW4gY2FsbCBuZXh0IHRvIGZlZWQgdmFsdWVzIGFzIHdlbGwgYXMgZXJyb3IgYW5kIGNvbXBsZXRlLlxuICovXG5leHBvcnQgY2xhc3MgU3ViamVjdDxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4gaW1wbGVtZW50cyBTdWJzY3JpcHRpb25MaWtlIHtcbiAgY2xvc2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjdXJyZW50T2JzZXJ2ZXJzOiBPYnNlcnZlcjxUPltdIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBvYnNlcnZlcnM6IE9ic2VydmVyPFQ+W10gPSBbXTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBpc1N0b3BwZWQgPSBmYWxzZTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBoYXNFcnJvciA9IGZhbHNlO1xuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIHRocm93bkVycm9yOiBhbnkgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgXCJzdWJqZWN0XCIgYnkgYmFzaWNhbGx5IGdsdWluZyBhbiBvYnNlcnZlciB0byBhbiBvYnNlcnZhYmxlLlxuICAgKlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKiBAZGVwcmVjYXRlZCBSZWNvbW1lbmRlZCB5b3UgZG8gbm90IHVzZS4gV2lsbCBiZSByZW1vdmVkIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS4gUGxhbnMgZm9yIHJlcGxhY2VtZW50IHN0aWxsIHVuZGVyIGRpc2N1c3Npb24uXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlOiAoLi4uYXJnczogYW55W10pID0+IGFueSA9IDxUPihkZXN0aW5hdGlvbjogT2JzZXJ2ZXI8VD4sIHNvdXJjZTogT2JzZXJ2YWJsZTxUPik6IEFub255bW91c1N1YmplY3Q8VD4gPT4ge1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzU3ViamVjdDxUPihkZXN0aW5hdGlvbiwgc291cmNlKTtcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBOT1RFOiBUaGlzIG11c3QgYmUgaGVyZSB0byBvYnNjdXJlIE9ic2VydmFibGUncyBjb25zdHJ1Y3Rvci5cbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBsaWZ0PFI+KG9wZXJhdG9yOiBPcGVyYXRvcjxULCBSPik6IE9ic2VydmFibGU8Uj4ge1xuICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgQW5vbnltb3VzU3ViamVjdCh0aGlzLCB0aGlzKTtcbiAgICBzdWJqZWN0Lm9wZXJhdG9yID0gb3BlcmF0b3IgYXMgYW55O1xuICAgIHJldHVybiBzdWJqZWN0IGFzIGFueTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF90aHJvd0lmQ2xvc2VkKCkge1xuICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgdGhyb3cgbmV3IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCh2YWx1ZTogVCkge1xuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50T2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gQXJyYXkuZnJvbSh0aGlzLm9ic2VydmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiB0aGlzLmN1cnJlbnRPYnNlcnZlcnMpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZXJyb3IoZXJyOiBhbnkpIHtcbiAgICBlcnJvckNvbnRleHQoKCkgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRocm93bkVycm9yID0gZXJyO1xuICAgICAgICBjb25zdCB7IG9ic2VydmVycyB9ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKG9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgICBvYnNlcnZlcnMuc2hpZnQoKSEuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgZXJyb3JDb250ZXh0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCB7IG9ic2VydmVycyB9ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKG9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgICBvYnNlcnZlcnMuc2hpZnQoKSEuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5pc1N0b3BwZWQgPSB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsITtcbiAgfVxuXG4gIGdldCBvYnNlcnZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnM/Lmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfdHJ5U3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgcmV0dXJuIHN1cGVyLl90cnlTdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBTdWJzY3JpcHRpb24ge1xuICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICB0aGlzLl9jaGVja0ZpbmFsaXplZFN0YXR1c2VzKHN1YnNjcmliZXIpO1xuICAgIHJldHVybiB0aGlzLl9pbm5lclN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9pbm5lclN1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pIHtcbiAgICBjb25zdCB7IGhhc0Vycm9yLCBpc1N0b3BwZWQsIG9ic2VydmVycyB9ID0gdGhpcztcbiAgICBpZiAoaGFzRXJyb3IgfHwgaXNTdG9wcGVkKSB7XG4gICAgICByZXR1cm4gRU1QVFlfU1VCU0NSSVBUSU9OO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgIG9ic2VydmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICBhcnJSZW1vdmUob2JzZXJ2ZXJzLCBzdWJzY3JpYmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9jaGVja0ZpbmFsaXplZFN0YXR1c2VzKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55Pikge1xuICAgIGNvbnN0IHsgaGFzRXJyb3IsIHRocm93bkVycm9yLCBpc1N0b3BwZWQgfSA9IHRoaXM7XG4gICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICBzdWJzY3JpYmVyLmVycm9yKHRocm93bkVycm9yKTtcbiAgICB9IGVsc2UgaWYgKGlzU3RvcHBlZCkge1xuICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE9ic2VydmFibGUgd2l0aCB0aGlzIFN1YmplY3QgYXMgdGhlIHNvdXJjZS4gWW91IGNhbiBkbyB0aGlzXG4gICAqIHRvIGNyZWF0ZSBjdXN0b20gT2JzZXJ2ZXItc2lkZSBsb2dpYyBvZiB0aGUgU3ViamVjdCBhbmQgY29uY2VhbCBpdCBmcm9tXG4gICAqIGNvZGUgdGhhdCB1c2VzIHRoZSBPYnNlcnZhYmxlLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBPYnNlcnZhYmxlIHRoYXQgdGhlIFN1YmplY3QgY2FzdHMgdG9cbiAgICovXG4gIGFzT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlOiBhbnkgPSBuZXcgT2JzZXJ2YWJsZTxUPigpO1xuICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBBbm9ueW1vdXNTdWJqZWN0PFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNTdWJqZWN0PFQ+IGV4dGVuZHMgU3ViamVjdDxUPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgICBwdWJsaWMgZGVzdGluYXRpb24/OiBPYnNlcnZlcjxUPixcbiAgICBzb3VyY2U/OiBPYnNlcnZhYmxlPFQ+XG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIH1cblxuICBuZXh0KHZhbHVlOiBUKSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbj8ubmV4dD8uKHZhbHVlKTtcbiAgfVxuXG4gIGVycm9yKGVycjogYW55KSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbj8uZXJyb3I/LihlcnIpO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbj8uY29tcGxldGU/LigpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2U/LnN1YnNjcmliZShzdWJzY3JpYmVyKSA/PyBFTVBUWV9TVUJTQ1JJUFRJT047XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAnLi9TdWJqZWN0JztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuXG4vKipcbiAqIEEgdmFyaWFudCBvZiBTdWJqZWN0IHRoYXQgcmVxdWlyZXMgYW4gaW5pdGlhbCB2YWx1ZSBhbmQgZW1pdHMgaXRzIGN1cnJlbnRcbiAqIHZhbHVlIHdoZW5ldmVyIGl0IGlzIHN1YnNjcmliZWQgdG8uXG4gKlxuICogQGNsYXNzIEJlaGF2aW9yU3ViamVjdDxUPlxuICovXG5leHBvcnQgY2xhc3MgQmVoYXZpb3JTdWJqZWN0PFQ+IGV4dGVuZHMgU3ViamVjdDxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZhbHVlOiBUKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBzdXBlci5fc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICFzdWJzY3JpcHRpb24uY2xvc2VkICYmIHN1YnNjcmliZXIubmV4dCh0aGlzLl92YWx1ZSk7XG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldFZhbHVlKCk6IFQge1xuICAgIGNvbnN0IHsgaGFzRXJyb3IsIHRocm93bkVycm9yLCBfdmFsdWUgfSA9IHRoaXM7XG4gICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICB0aHJvdyB0aHJvd25FcnJvcjtcbiAgICB9XG4gICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgIHJldHVybiBfdmFsdWU7XG4gIH1cblxuICBuZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgc3VwZXIubmV4dCgodGhpcy5fdmFsdWUgPSB2YWx1ZSkpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFByZXNzYWJsZSwgUG9pbnRlckV2ZW50IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IHR5cGUgTW91c2VFdmVudCA9IFBvaW50ZXJFdmVudCAmIHtcbiAgICBjbGllbnRYPzogbnVtYmVyO1xuICAgIGNsaWVudFk/OiBudW1iZXI7XG4gICAgcG9pbnRlcklkPzogbnVtYmVyO1xuICAgIGJ1dHRvbnM/OiBudW1iZXI7XG59O1xuZXhwb3J0IHR5cGUgV2hlZWxFdmVudCA9IFBvaW50ZXJFdmVudCAmIHsgZGVsdGFYOiBudW1iZXI7IGRlbHRhWTogbnVtYmVyOyBkZWx0YVo6IG51bWJlciB9O1xuZXhwb3J0IHR5cGUgTW91c2VIb3N0ID0gVmlldyAmIHtcbiAgICBzZXRQb2ludGVyQ2FwdHVyZTogKHBvaW50ZXJJZDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHJlbGVhc2VQb2ludGVyQ2FwdHVyZTogKHBvaW50ZXJJZDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIG9ud2hlZWw/OiAoZTogV2hlZWxFdmVudCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBlbnVtIE1vdXNlQnV0dG9uIHtcbiAgICBMZWZ0ID0gMSxcbiAgICBSaWdodCA9IDIsXG4gICAgTWlkZGxlID0gNCxcbiAgICBBbGwgPSA3LFxufVxuXG5leHBvcnQgY29uc3QgTW92ZWFibGVWaWV3ID0gKHtcbiAgICBjaGlsZHJlbixcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgcG9zaXRpb246IGluaXRQb3NpdGlvbixcbiAgICBvbk1vdmUsXG4gICAgbW91c2VCdXR0b24gPSBNb3VzZUJ1dHRvbi5BbGwsXG4gICAgZW5hYmxlU2NhbGluZyA9IGZhbHNlLFxuICAgIHdob2xlQ2FudmFzID0gZmFsc2UsXG4gICAgaW5uZXJDbGFzc05hbWUsXG4gICAgb3V0ZXJDbGFzc05hbWUsXG59OiB7XG4gICAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xuICAgIEhlYWRlckNvbXBvbmVudD86ICgpID0+IEpTWC5FbGVtZW50O1xuICAgIHBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH07XG4gICAgb25Nb3ZlOiAocG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXIgfSkgPT4gdm9pZDtcbiAgICBtb3VzZUJ1dHRvbj86IE1vdXNlQnV0dG9uO1xuICAgIGVuYWJsZVNjYWxpbmc/OiBib29sZWFuO1xuICAgIHdob2xlQ2FudmFzPzogYm9vbGVhbjtcbiAgICBpbm5lckNsYXNzTmFtZT86IHN0cmluZztcbiAgICBvdXRlckNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogaW5pdFBvc2l0aW9uLngsXG4gICAgICAgIHk6IGluaXRQb3NpdGlvbi55LFxuICAgICAgICBzY2FsZTogaW5pdFBvc2l0aW9uLnNjYWxlLFxuICAgICAgICBkcmFnUG9pbnRlcklkOiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB4RHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB5RHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB4UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeVBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdGFydERyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCEoKGUuYnV0dG9ucyA/PyAwKSAmIG1vdXNlQnV0dG9uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHhQb2ludGVyID0gZS5jbGllbnRYID8/IDA7XG4gICAgICAgIGNvbnN0IHlQb2ludGVyID0gZS5jbGllbnRZID8/IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGFydERyYWdgLCB7IHhQb2ludGVyLCB5UG9pbnRlciwgZSwgcG9zaXRpb24sIGNvbnRleHRTY2FsZSB9KTtcblxuICAgICAgICBob3N0UmVmLmN1cnJlbnQ/LnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkID8/IDApO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBkcmFnUG9pbnRlcklkOiBlLnBvaW50ZXJJZCxcbiAgICAgICAgICAgIHhEcmFnU3RhcnQ6IHMueCxcbiAgICAgICAgICAgIHlEcmFnU3RhcnQ6IHMueSxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB4UG9pbnRlcixcbiAgICAgICAgICAgIHlQb2ludGVyRHJhZ1N0YXJ0OiB5UG9pbnRlcixcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVuZERyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmRyYWdQb2ludGVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhvc3RSZWYuY3VycmVudD8ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHBvc2l0aW9uLmRyYWdQb2ludGVySWQpO1xuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB4UG9pbnRlciA9IGUuY2xpZW50WCA/PyAwO1xuICAgICAgICBjb25zdCB5UG9pbnRlciA9IGUuY2xpZW50WSA/PyAwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgZW5kRHJhZ2AsIHsgeFBvaW50ZXIsIHlQb2ludGVyLCBlLCBwb3NpdGlvbiwgY29udGV4dFNjYWxlIH0pO1xuXG4gICAgICAgIGNvbnN0IG5ld1ggPVxuICAgICAgICAgICAgKHBvc2l0aW9uLnhEcmFnU3RhcnQgPz8gMClcbiAgICAgICAgICAgICsgKHhQb2ludGVyIC0gKHBvc2l0aW9uLnhQb2ludGVyRHJhZ1N0YXJ0ID8/IDApKSAvIGNvbnRleHRTY2FsZTtcbiAgICAgICAgY29uc3QgbmV3WSA9XG4gICAgICAgICAgICAocG9zaXRpb24ueURyYWdTdGFydCA/PyAwKVxuICAgICAgICAgICAgKyAoeVBvaW50ZXIgLSAocG9zaXRpb24ueVBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICB4OiBuZXdYLFxuICAgICAgICAgICAgeTogbmV3WSxcbiAgICAgICAgICAgIGRyYWdQb2ludGVySWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICB5UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgb25Nb3ZlKHtcbiAgICAgICAgICAgIHg6IG5ld1gsXG4gICAgICAgICAgICB5OiBuZXdZLFxuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbW92ZURyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmRyYWdQb2ludGVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHhQb2ludGVyID0gZS5jbGllbnRYID8/IDA7XG4gICAgICAgIGNvbnN0IHlQb2ludGVyID0gZS5jbGllbnRZID8/IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBtb3ZlRHJhZ2AsIHsgeFBvaW50ZXIsIHlQb2ludGVyLCBlLCBwb3NpdGlvbiwgY29udGV4dFNjYWxlIH0pO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICB4OiAocy54RHJhZ1N0YXJ0ID8/IDApICsgKHhQb2ludGVyIC0gKHMueFBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlLFxuICAgICAgICAgICAgeTogKHMueURyYWdTdGFydCA/PyAwKSArICh5UG9pbnRlciAtIChzLnlQb2ludGVyRHJhZ1N0YXJ0ID8/IDApKSAvIGNvbnRleHRTY2FsZSxcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2Nyb2xsV2hlZWwgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogV2hlZWxFdmVudCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgb253aGVlbGAsIHsgZSwgcG9zaXRpb24gfSk7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IGUuZGVsdGFZO1xuICAgICAgICBpZiAoIWRlbHRhWSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlbmFibGVTY2FsaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRQb3NpdGlvbihzID0+ICh7XG4gICAgICAgICAgICAuLi5zLFxuICAgICAgICAgICAgc2NhbGU6IHMuc2NhbGUgKiBNYXRoLnBvdygwLjksIGRlbHRhWSA+IDAgPyAxIDogLTEpLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBob3N0UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IE1vdXNlSG9zdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaG9zdCA9IGhvc3RSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFob3N0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgaG9zdGAsIHsgaG9zdCB9KTtcbiAgICAgICAgaG9zdC5vbndoZWVsID0gc2Nyb2xsV2hlZWw7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBob3N0Lm9ud2hlZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgfSwgWyFob3N0UmVmLmN1cnJlbnRdKTtcblxuICAgIGNvbnN0IHdob2xlSG9zdFJlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBNb3VzZUhvc3QpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvc3QgPSB3aG9sZUhvc3RSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFob3N0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgaG9zdGAsIHsgaG9zdCB9KTtcbiAgICAgICAgaG9zdC5vbndoZWVsID0gc2Nyb2xsV2hlZWw7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBob3N0Lm9ud2hlZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgfSwgWyF3aG9sZUhvc3RSZWYuY3VycmVudF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vdmVhYmxlQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIHsoeyBwb3NpdGlvbjogY29udGV4dFNjYWxlIH0pID0+IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d2hvbGVDYW52YXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7SGVhZGVyQ29tcG9uZW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYmctd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDb21wb25lbnQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQcmVzc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4LTEgYmctZnVjaHNpYS02MDAgb3BhY2l0eS01MCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt3aG9sZUhvc3RSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249e2UgPT4gd2hvbGVDYW52YXMgJiYgc3RhcnREcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXtlID0+IGVuZERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTW92ZT17ZSA9PiBtb3ZlRHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9e2BmbGV4LTEgJHt3aG9sZUNhbnZhcyA/IGBvdmVyZmxvdy1oaWRkZW5gIDogYGB9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZXNzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e291dGVyQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2hvc3RSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249e2UgPT4gd2hvbGVDYW52YXMgJiYgc3RhcnREcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXtlID0+IGVuZERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTW92ZT17ZSA9PiBtb3ZlRHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZXNzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbm5lckNsYXNzTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgpIHNjYWxlKCR7cG9zaXRpb24uc2NhbGV9KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17ZSA9PiBzdGFydERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmVhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwb3NpdGlvbiwgd2hvbGVDYW52YXMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb3ZlYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L01vdmVhYmxlQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IE1vdmVhYmxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICAgIHdob2xlQ2FudmFzOiBmYWxzZSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICBzY2FsZTogMSxcbiAgICB9LFxufSk7XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFRleHRJbnB1dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlVmlldyB9IGZyb20gJy4vbW92ZWFibGUtdmlldyc7XG5pbXBvcnQgeyBQaXBlRW5kcG9pbnRWaWV3LCBQaXBlVmlldyB9IGZyb20gJy4vcGlwZXMnO1xuaW1wb3J0IHsgZ2V0VHlwZU5hbWUgfSBmcm9tICcuL3dvcmstbmFtZXMnO1xuaW1wb3J0IHsgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlIH0gZnJvbSAnLi4vYW5hbHlzaXMvY2FsY3VsYXRlLXJ1bic7XG5pbXBvcnQge1xuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0VHlwZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgTm9kZUluc3RhbmNlc1ZpZXcgPSAoe1xuICAgIG5vZGVJbnN0YW5jZXMsXG4gICAgZnVsbCA9IGZhbHNlLFxuICAgIGhpZGVUaXRsZXMgPSBmYWxzZSxcbn06IHtcbiAgICBub2RlSW5zdGFuY2VzOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlW107XG4gICAgZnVsbD86IGJvb2xlYW47XG4gICAgaGlkZVRpdGxlcz86IGJvb2xlYW47XG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJ1blZhbHVlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y3JlYXRlUnVuVmFsdWUoKX0+XG4gICAgICAgICAgICA8VmlldyB0ZXN0SUQ9J05vZGVJbnN0YW5jZXNWaWV3OlZpZXcnIGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgIHtub2RlSW5zdGFuY2VzLm1hcCh4ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eC5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3IG5vZGVJbnN0YW5jZT17eH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxSb290Q29tcG9uZW50c1ZpZXcgLz5cbiAgICAgICAgPC9SdW5WYWx1ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmNvbnN0IFJvb3RDb21wb25lbnRzVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudHMgfSA9IHVzZUNvbnRleHQoUnVuVmFsdWVDb250ZXh0KTtcblxuICAgIGNvbnN0IFtyb290Q29tcG9uZW50cywgc2V0Um9vdENvbXBvbmVudHNdID0gdXNlU3RhdGUoe30gYXMgUmVjb3JkPHN0cmluZywgKCkgPT4gSlNYLkVsZW1lbnQ+KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBDb21wb25lbnRzLnN1YnNjcmliZSh4ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSb290Q29tcG9uZW50c1ZpZXc6IENvbXBvbmVudHMuc3Vic2NyaWJlYCwgeyB4IH0pO1xuICAgICAgICAgICAgc2V0Um9vdENvbXBvbmVudHMoeyAuLi54IH0pO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyB0ZXN0SUQ9J1Jvb3RDb21wb25lbnRzVmlldzpWaWV3JyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgIHtbLi4uT2JqZWN0LmVudHJpZXMocm9vdENvbXBvbmVudHMpXS5tYXAoKFtrLCBWXSkgPT4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2t9PlxuICAgICAgICAgICAgICAgICAgICA8ViAvPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBOb2RlVmlldyA9ICh7IG5vZGVJbnN0YW5jZSB9OiB7IG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSB9KSA9PiB7XG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgIH0pO1xuICAgIGNvbnN0IG1vdmVOb2RlID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZhbHVlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgc2V0UG9zaXRpb24odmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTm9kZVZpZXdgLCB7IG5vZGVJbnN0YW5jZSB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdvcmtmbG93ID0gbm9kZUluc3RhbmNlLndvcmtmbG93O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEnPlxuICAgICAgICAgICAgPE1vdmVhYmxlVmlld1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IHBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBwb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uTW92ZT17bW92ZU5vZGV9XG4gICAgICAgICAgICAgICAgbW91c2VCdXR0b249e01vdXNlQnV0dG9uLk1pZGRsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIHJlbGF0aXZlIGJnLXNsYXRlLTk1MC83NSBib3JkZXItYmx1ZS0xMDAgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSBtLVstMXB4XSByb3VuZGVkIHAtMSc+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57YCR7bm9kZUluc3RhbmNlLndvcmtmbG93Lm5hbWV9ICMke25vZGVJbnN0YW5jZS5rZXl9YH08L1RleHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpbnB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVDb25uZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGU9e2lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb249e25vZGVJbnN0YW5jZS5pbnB1dHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4LndvcmtmbG93SW5wdXQgPT09IGlucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU91dHB1dD17bm9kZUluc3RhbmNlLndvcmtmbG93LmJvZHkua2luZCAhPT0gYG5vZGVzYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUgYW5pbWF0ZS1ib3VuY2UgdGV4dC1bOHB4XSBhYnNvbHV0ZSB0b3AtMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHUyNkNGXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBmbGV4LXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVJbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2RlSW5zdGFuY2UuY2hpbGRyZW4ubWFwKHggPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eC5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlVmlldyBub2RlSW5zdGFuY2U9e3h9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuYm9keS5raW5kID09PSBgb3BlcmF0b3JgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtYmx1ZS02MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmJvZHkub3BlcmF0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93Lm91dHB1dHMubWFwKG91dHB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dHB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlQ29ubmVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlPXtvdXRwdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbj17bm9kZUluc3RhbmNlLm91dHB1dHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4LndvcmtmbG93T3V0cHV0ID09PSBvdXRwdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlSW5wdXQ9e25vZGVJbnN0YW5jZS53b3JrZmxvdy5ib2R5LmtpbmQgIT09IGBub2Rlc2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9Nb3ZlYWJsZVZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuY29uc3QgZ2V0UGlwZUNvbm5lY3Rpb25LZXkgPSAoXG4gICAgY29ubmVjdGlvbjogUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLFxuICAgIGRpcmVjdGlvbjogYGluYCB8IGBvdXRgLFxuKSA9PiB7XG4gICAgcmV0dXJuIGAke2Nvbm5lY3Rpb24ua2V5fToke2RpcmVjdGlvbn1gO1xufTtcblxuY29uc3QgZ2V0UGlwZUtleSA9IChcbiAgICBwaXBlU2lkZTogUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXSB8IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgZGVzdGluYXRpb25gXSxcbiAgICBkaXJlY3Rpb246IGBpbmAgfCBgb3V0YCxcbikgPT4ge1xuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgaW5wdXRgKSB7XG4gICAgICAgIHJldHVybiBnZXRQaXBlQ29ubmVjdGlvbktleShwaXBlU2lkZS5pbnB1dCwgZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgaWYgKHBpcGVTaWRlLmtpbmQgPT09IGBvdXRwdXRgKSB7XG4gICAgICAgIHJldHVybiBnZXRQaXBlQ29ubmVjdGlvbktleShwaXBlU2lkZS5vdXRwdXQsIGRpcmVjdGlvbik7XG4gICAgfVxuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgZGF0YWApIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHBpcGVTaWRlLmtpbmQgPT09IGBvcGVyYXRvci1vdXRwdXRgKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgb3BlcmF0b3ItaW5wdXRgKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IFBpcGVWYWx1ZVZpZXcgPSAoe1xuICAgIHBpcGVWYWx1ZSxcbiAgICBzaWRlLFxufToge1xuICAgIHBpcGVWYWx1ZTogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlO1xuICAgIHNpZGU6IGBpbmZsb3dgIHwgYG91dGZsb3dgO1xufSkgPT4ge1xuICAgIGNvbnN0IHsgc291cmNlLCBkZXN0aW5hdGlvbiB9ID0gcGlwZVZhbHVlID8/IHt9O1xuICAgIGlmICghc291cmNlIHx8ICFkZXN0aW5hdGlvbikge1xuICAgICAgICByZXR1cm4gPD48Lz47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlSWQgPSBnZXRQaXBlS2V5KHNvdXJjZSwgYG91dGApO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uSWQgPSBnZXRQaXBlS2V5KGRlc3RpbmF0aW9uLCBgaW5gKTtcbiAgICBpZiAoIXNvdXJjZUlkIHx8ICFkZXN0aW5hdGlvbklkKSB7XG4gICAgICAgIHJldHVybiA8PjwvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gPFBpcGVWaWV3IHNvdXJjZUlkPXtzb3VyY2VJZH0gZGVzdGluYXRpb25JZD17ZGVzdGluYXRpb25JZH0gc2lkZT17c2lkZX0gLz47XG59O1xuXG5jb25zdCBOb2RlQ29ubmVjdGlvbiA9ICh7XG4gICAgdmFyaWFibGUsXG4gICAgY29ubmVjdGlvbixcbiAgICBoaWRlSW5wdXQsXG4gICAgaGlkZU91dHB1dCxcbn06IHtcbiAgICB2YXJpYWJsZToge1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgIHR5cGU/OiBQaXBlc2NyaXB0VHlwZTtcbiAgICAgICAgaWdub3JlZD86IGJvb2xlYW47XG4gICAgfTtcbiAgICBjb25uZWN0aW9uOiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2U7XG4gICAgaGlkZUlucHV0PzogYm9vbGVhbjtcbiAgICBoaWRlT3V0cHV0PzogYm9vbGVhbjtcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sdW1uJz5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICB7IWhpZGVJbnB1dCAmJiBjb25uZWN0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2Nvbm5lY3Rpb24ua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXcgaWQ9e2dldFBpcGVDb25uZWN0aW9uS2V5KGNvbm5lY3Rpb24sIGBpbmApfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZVZhbHVlVmlldyBwaXBlVmFsdWU9e2Nvbm5lY3Rpb24uaW5mbG93UGlwZX0gc2lkZT0naW5mbG93JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJsdWUtMzAwICR7dmFyaWFibGUuaWdub3JlZCA/IGBsaW5lLXRocm91Z2ggb3BhY2l0eS01MGAgOiBgYH1gfVxuICAgICAgICAgICAgICAgID57YCR7dmFyaWFibGUubmFtZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICB7dmFyaWFibGUudHlwZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbHVtbic+XG4gICAgICAgICAgICAgICAgICAgIHshaGlkZU91dHB1dCAmJiBjb25uZWN0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2Nvbm5lY3Rpb24ua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50VmlldyBpZD17Z2V0UGlwZUNvbm5lY3Rpb25LZXkoY29ubmVjdGlvbiwgYG91dGApfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25uZWN0aW9uLm91dGZsb3dQaXBlcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGZsb3dQaXBlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRmbG93UGlwZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0Zmxvd1BpcGUua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWYWx1ZVZpZXcgcGlwZVZhbHVlPXtvdXRmbG93UGlwZX0gc2lkZT0nb3V0ZmxvdycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICB7Y29ubmVjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPE5vZGVDb25uZWN0aW9uVmFsdWUgY29ubmVjdGlvbj17Y29ubmVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3Rpb24uaW5mbG93UGlwZT8ucGlwZS5raW5kID09PSBgZGF0YWAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdtLVsxcHhdIGJnLXB1cnBsZS0xMDAgb3BhY2l0eS01MCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdweC0xIG1pbi13LVs2MHB4XSB0ZXh0LXB1cnBsZS00MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29ubmVjdGlvbi5pbmZsb3dQaXBlPy5waXBlLmpzb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBjcmVhdGVSdW5WYWx1ZSA9ICgpID0+ICh7XG4gICAgVmFsdWVDaGFuZ2VkOiBuZXcgU3ViamVjdDx2b2lkPigpLFxuICAgIENvbXBvbmVudHM6IG5ldyBCZWhhdmlvclN1YmplY3Qoe30gYXMgUmVjb3JkPHN0cmluZywgKCkgPT4gSlNYLkVsZW1lbnQ+KSxcbn0pO1xuZXhwb3J0IGNvbnN0IFJ1blZhbHVlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoY3JlYXRlUnVuVmFsdWUoKSk7XG5cbmNvbnN0IE5vZGVDb25uZWN0aW9uVmFsdWUgPSAoe1xuICAgIGNvbm5lY3Rpb24sXG59OiB7XG4gICAgY29ubmVjdGlvbjogUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlO1xufSkgPT4ge1xuICAgIGNvbnN0IHJ1blZhbHVlQ29udGV4dCA9IHVzZUNvbnRleHQoUnVuVmFsdWVDb250ZXh0KTtcblxuICAgIGNvbnN0IFtydW5WYWx1ZSwgc2V0UnVuVmFsdWVdID0gdXNlU3RhdGUoY29ubmVjdGlvbi5ydW5zPy52YWx1ZSk7XG4gICAgY29uc3QgW2hhc092ZXJyaWRlLCBzZXRIYXNPdmVycmlkZV0gPSB1c2VTdGF0ZSghIWNvbm5lY3Rpb24ucnVucz8ub3ZlcnJpZGUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3ViID0gcnVuVmFsdWVDb250ZXh0LlZhbHVlQ2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE5vZGVDb25uZWN0aW9uVmFsdWU6IFZhbHVlQ2hhbmdlZC5zdWJzY3JpYmVgLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGNvbm5lY3Rpb24ucnVucz8udmFsdWUsXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0UnVuVmFsdWUoY29ubmVjdGlvbi5ydW5zPy52YWx1ZSk7XG4gICAgICAgICAgICBzZXRIYXNPdmVycmlkZShjb25uZWN0aW9uLnJ1bnM/Lm92ZXJyaWRlICE9PSB1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gKHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2Nvbm5lY3Rpb25PdmVycmlkZShjb25uZWN0aW9uLCB2YWx1ZSk7XG4gICAgICAgIHJ1blZhbHVlQ29udGV4dC5WYWx1ZUNoYW5nZWQubmV4dCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFZhbHVlRWRpdG9yQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgaWQ9e2Nvbm5lY3Rpb24ua2V5fVxuICAgICAgICAgICAgICAgIHZhbHVlPXtydW5WYWx1ZX1cbiAgICAgICAgICAgICAgICBoYXNPdmVycmlkZT17aGFzT3ZlcnJpZGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IFZhbHVlRWRpdG9yQ29udGFpbmVyID0gKHtcbiAgICBpZCxcbiAgICB2YWx1ZSxcbiAgICBoYXNPdmVycmlkZSxcbiAgICBvbkNoYW5nZSxcbn06IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHZhbHVlOiB1bmtub3duO1xuICAgIGhhc092ZXJyaWRlOiBib29sZWFuO1xuICAgIG9uQ2hhbmdlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XG59KSA9PiB7XG4gICAgY29uc3QgcnVuVmFsdWVDb250ZXh0ID0gdXNlQ29udGV4dChSdW5WYWx1ZUNvbnRleHQpO1xuXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSB1c2VTdGFibGVDYWxsYmFjaygodjogdW5rbm93bikgPT4ge1xuICAgICAgICB0b2dnbGVFZGl0KGZhbHNlKTtcbiAgICAgICAgb25DaGFuZ2Uodik7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2dnbGVFZGl0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFZhbHVlRWRpdG9yOiB0b2dnbGVFZGl0YCwgeyB2aXNpYmxlIH0pO1xuICAgICAgICBjb25zdCBuZXdTaG93RWRpdCA9IHZpc2libGU7XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHJ1blZhbHVlQ29udGV4dC5Db21wb25lbnRzLnZhbHVlO1xuICAgICAgICBpZiAobmV3U2hvd0VkaXQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHNbaWRdID0gKCkgPT4gKFxuICAgICAgICAgICAgICAgIDxWYWx1ZUVkaXRvclxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdG9nZ2xlRWRpdChmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgY29tcG9uZW50c1tpZF07XG4gICAgICAgIH1cbiAgICAgICAgcnVuVmFsdWVDb250ZXh0LkNvbXBvbmVudHMubmV4dChjb21wb25lbnRzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3NJbj17KCkgPT4gdG9nZ2xlRWRpdCh0cnVlKX0+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtgbS1bMXB4XSAke2hhc092ZXJyaWRlID8gYGJnLWdyZWVuLTEwMCBgIDogYGJnLXB1cnBsZS0xMDBgfWB9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMSBtaW4tdy1bNjBweF0gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNPdmVycmlkZSA/IGB0ZXh0LWdyZWVuLTYwMGAgOiBgdGV4dC1wdXJwbGUtNjAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IFZhbHVlRWRpdG9yID0gKHtcbiAgICBpZCxcbiAgICB2YWx1ZTogdmFsdWVSYXcsXG4gICAgb25DaGFuZ2UsXG4gICAgb25DYW5jZWwsXG59OiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB2YWx1ZTogdW5rbm93bjtcbiAgICBvbkNoYW5nZTogKHZhbHVlOiB1bmtub3duKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xufSkgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoSlNPTi5zdHJpbmdpZnkodmFsdWVSYXcpKTtcbiAgICBjb25zdCBzYXZlID0gdXNlU3RhYmxlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgfSk7XG4gICAgY29uc3QgY2xlYXIgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gICAgY29uc3QgY2FuY2VsID0gdXNlU3RhYmxlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBvbkNhbmNlbCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdhYnNvbHV0ZSBmbGV4LWNvbCBiZy1ncmF5LTEwMCBwLTIgcm91bmRlZCB6LTEwJz5cbiAgICAgICAgICAgIDxUZXh0SW5wdXQgY2xhc3NOYW1lPSdiZy13aGl0ZScgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZVRleHQ9e3ggPT4gc2V0VmFsdWUoeCl9IC8+XG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzPXtjYW5jZWx9PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLWdyYXktMjAwIHAtMSBtLTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+Q2FuY2VsPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG5cbiAgICAgICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9e2NsZWFyfT5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy1yZWQtMjAwIHAtMSBtLTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+Q2xlYXI8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cblxuICAgICAgICAgICAgICAgIDxQcmVzc2FibGUgb25QcmVzcz17c2F2ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYmctYmx1ZS0yMDAgcC0xIG0tMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5TYXZlPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNb3ZlYWJsZUNvbnRleHQgfSBmcm9tICcuL21vdmVhYmxlLXZpZXcnO1xuaW1wb3J0IHsgUGlwZXNjcmlwdFBpcGVWYWx1ZSwgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlID0gKHtcbiAgICBub2RlSWQsXG4gICAgbmFtZSxcbiAgICBkaXJlY3Rpb24sXG59OiB7XG4gICAgbm9kZUlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRpcmVjdGlvbjogYG91dGAgfCBgaW5gO1xufSkgPT4ge1xuICAgIHJldHVybiBgbm9kZToke25vZGVJZH06JHtkaXJlY3Rpb259OiR7bmFtZX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3cgPSAoe1xuICAgIHdvcmtmbG93VXJpLFxuICAgIG5hbWUsXG4gICAgZGlyZWN0aW9uLFxufToge1xuICAgIHdvcmtmbG93VXJpOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRpcmVjdGlvbjogYG91dGAgfCBgaW5gO1xufSkgPT4ge1xuICAgIHJldHVybiBgd29ya2Zsb3c6JHt3b3JrZmxvd1VyaX06JHtkaXJlY3Rpb259OiR7bmFtZX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yUGlwZVNvdXJjZSA9ICh7XG4gICAgcGlwZSxcbiAgICB3b3JrZmxvdyxcbn06IHtcbiAgICBwaXBlOiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0UGlwZVZhbHVlO1xuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3c7XG59KSA9PiB7XG4gICAgaWYgKCFwaXBlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHBpcGUua2luZCA9PT0gYHdvcmtmbG93LW9wZXJhdG9yYCkge1xuICAgICAgICByZXR1cm4gW2BvcGVyYXRvcmBdLm1hcChuYW1lID0+XG4gICAgICAgICAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHBpcGUua2luZCA9PT0gYHdvcmtmbG93LWlucHV0YCkge1xuICAgICAgICByZXR1cm4gW3BpcGUud29ya2Zsb3dJbnB1dE5hbWVdLm1hcChuYW1lID0+XG4gICAgICAgICAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocGlwZS5raW5kID09PSBgbm9kZWApIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSh7XG4gICAgICAgICAgICAgICAgbm9kZUlkOiBwaXBlLnNvdXJjZU5vZGVJZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBwaXBlLnNvdXJjZU5vZGVPdXRwdXROYW1lLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvLyBpZihwaXBlLmtpbmQgPT09IGBkYXRhYCl7XG5cbiAgICAvLyB9XG5cbiAgICByZXR1cm4gW107XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUGlwZUVuZHBvaW50c1JlZ2lzdHJ5ID0gKCkgPT4gKHtcbiAgICBob3N0T2JzZXJ2YWJsZTogbmV3IFN1YmplY3QoKSBhcyBPYnNlcnZhYmxlPFZpZXc+LFxuICAgIGhvc3RWaWV3OiBudWxsIGFzIG51bGwgfCBWaWV3LFxuICAgIGVuZHBvaW50czoge30gYXMge1xuICAgICAgICBbaWQ6IHN0cmluZ106IHVuZGVmaW5lZCB8IFN1YmplY3Q8eyB4OiBudW1iZXI7IHk6IG51bWJlciB9PjtcbiAgICB9LFxuICAgIHBpcGVzOiBuZXcgQmVoYXZpb3JTdWJqZWN0KFxuICAgICAgICB7fSBhcyB7XG4gICAgICAgICAgICBbaWQ6IHN0cmluZ106IHVuZGVmaW5lZCB8IHsgc291cmNlSWQ6IHN0cmluZzsgZGVzdGluYXRpb25JZDogc3RyaW5nIH07XG4gICAgICAgIH0sXG4gICAgKSxcbn0pO1xudHlwZSBQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlID0gUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlUGlwZUVuZHBvaW50c1JlZ2lzdHJ5PjtcbmV4cG9ydCBjb25zdCBQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0ID0gY3JlYXRlQ29udGV4dChjcmVhdGVQaXBlRW5kcG9pbnRzUmVnaXN0cnkoKSk7XG5cbmNvbnN0IGdldE9yQ3JlYXRlRW5kcG9pbnRTdWJqZWN0ID0gKHJlZ2lzdHJ5OiBQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlLCBpZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgcmVnaXN0cnkuZW5kcG9pbnRzW2lkXVxuICAgICAgICA/PyAocmVnaXN0cnkuZW5kcG9pbnRzW2lkXSA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH0pKVxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgUGlwZVZpZXcgPSAoe1xuICAgIHNvdXJjZUlkLFxuICAgIGRlc3RpbmF0aW9uSWQsXG4gICAgc2lkZSA9IGBpbmZsb3dgLFxufToge1xuICAgIHNvdXJjZUlkOiB1bmRlZmluZWQgfCBzdHJpbmc7XG4gICAgZGVzdGluYXRpb25JZDogc3RyaW5nO1xuICAgIHNpZGU/OiBgaW5mbG93YCB8IGBvdXRmbG93YDtcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFZpZXcgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IFBpcGVWaWV3TGluZSA9ICh7XG4gICAgc291cmNlSWQsXG4gICAgZGVzdGluYXRpb25JZCxcbiAgICBzaWRlID0gYGluZmxvd2AsXG59OiB7XG4gICAgc291cmNlSWQ6IHVuZGVmaW5lZCB8IHN0cmluZztcbiAgICBkZXN0aW5hdGlvbklkOiBzdHJpbmc7XG4gICAgc2lkZT86IGBpbmZsb3dgIHwgYG91dGZsb3dgO1xufSkgPT4ge1xuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0KTtcblxuICAgIGNvbnN0IGRlc3RpbmF0aW9uRW5kcG9pbnQgPSBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgZGVzdGluYXRpb25JZCk7XG4gICAgY29uc3Qgc291cmNlRW5kcG9pbnQgPSAhc291cmNlSWQgPyB1bmRlZmluZWQgOiBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgc291cmNlSWQpO1xuXG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHNvdXJjZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIGRlc3RpbmF0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICB9KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghc291cmNlRW5kcG9pbnQgfHwgIWRlc3RpbmF0aW9uRW5kcG9pbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQaXBlVmlldyAhc291cmNlRW5kcG9pbnQgfHwgIWRlc3RpbmF0aW9uRW5kcG9pbnRgLCB7XG4gICAgICAgICAgICAgICAgc291cmNlSWQsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25JZCxcbiAgICAgICAgICAgICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgICAgICBzb3VyY2VFbmRwb2ludCxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbkVuZHBvaW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5pdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgICAgIGNvbWJpbmVMYXRlc3QoW3NvdXJjZUVuZHBvaW50LCBkZXN0aW5hdGlvbkVuZHBvaW50LCBpbml0XSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKFtzb3VyY2UsIGRlc3RpbmF0aW9uXSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlVmlldyBkcmF3YCwgeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0pO1xuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKHsgc291cmNlLCBkZXN0aW5hdGlvbiB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaW5pdGlhbFxuICAgICAgICBjb25zb2xlLmxvZyhgaW5pdGlhbGApO1xuICAgICAgICBpbml0Lm5leHQoKTtcbiAgICB9LCBbIWRlc3RpbmF0aW9uRW5kcG9pbnQsICFzb3VyY2VFbmRwb2ludF0pO1xuXG4gICAgY29uc3QgZGVidWcgPSBmYWxzZTtcbiAgICBjb25zdCBpc091dGZsb3cgPSBzaWRlID09PSBgb3V0Zmxvd2A7XG4gICAgY29uc3QgeERlbHRhID0gKGlzT3V0ZmxvdyA/IC0xIDogMSkgKiAocG9zaXRpb24uZGVzdGluYXRpb24ueCAtIHBvc2l0aW9uLnNvdXJjZS54KTtcbiAgICBjb25zdCB5RGVsdGEgPSAoaXNPdXRmbG93ID8gLTEgOiAxKSAqIChwb3NpdGlvbi5kZXN0aW5hdGlvbi55IC0gcG9zaXRpb24uc291cmNlLnkpO1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydCh4RGVsdGEgKiB4RGVsdGEgKyB5RGVsdGEgKiB5RGVsdGEpO1xuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMih5RGVsdGEsIHhEZWx0YSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LTAgaC0wIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3ctMCBoLTAgYWJzb2x1dGUnPlxuICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHsteERlbHRhICsgNH1weCwke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC15RGVsdGEgLSAyICsgKGlzT3V0ZmxvdyA/IDIgOiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfXB4KWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHthbmdsZX1yYWQpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc091dGZsb3cgPyBgYmctYmx1ZS00MDBgIDogYGJnLXJlZC00MDBgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAge2RlYnVnICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIHRyYW5zbGF0ZS15LVsxMDBweF0gcm90YXRlLTQ1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy1bMTAwMHB4XSB0ZXh0LVs0cHhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57YCgke3NvdXJjZUlkfSk9Pigke2Rlc3RpbmF0aW9uSWR9KWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntgKCR7cG9zaXRpb24uc291cmNlLnh9LCR7cG9zaXRpb24uc291cmNlLnl9KT0+KCR7cG9zaXRpb24uZGVzdGluYXRpb24ueH0sJHtwb3NpdGlvbi5kZXN0aW5hdGlvbi55fSlgfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFBpcGVFbmRwb2ludFZpZXcgPSAoeyBpZCB9OiB7IGlkOiBzdHJpbmcgfSkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSAxMjtcblxuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0KTtcbiAgICBjb25zdCBtb3ZlQ29udGV4dCA9IHVzZUNvbnRleHQoTW92ZWFibGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHRhcmdldFJlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBWaWV3KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdGAsIHsgcmVnaXN0cnkgfSk7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaCA9IHJlZ2lzdHJ5Lmhvc3RWaWV3O1xuICAgICAgICAgICAgaWYgKCFoKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVFbmRwb2ludFZpZXcgdXNlTGF5b3V0RWZmZWN0IC0gaG9zdCBOT1QgUkVBRFlgLCB7IHJlZ2lzdHJ5IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHQgPSB0YXJnZXRSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghdCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdCAtIGNvbXBvbmVudCBOT1QgUkVBRFlgLCB7IHJlZ2lzdHJ5IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdC5tZWFzdXJlTGF5b3V0KGgsIChsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUGlwZUVuZHBvaW50VmlldyB1c2VMYXlvdXRFZmZlY3QgbWVhc3VyZUxheW91dCBORVhUYCwge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZCxcbiAgICAgICAgICAgICAgICAvLyAgICAgbGVmdCxcbiAgICAgICAgICAgICAgICAvLyAgICAgdG9wLFxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIC8vICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gZ2V0T3JDcmVhdGVFbmRwb2ludFN1YmplY3QocmVnaXN0cnksIGlkKTtcbiAgICAgICAgICAgICAgICBzLm5leHQoe1xuICAgICAgICAgICAgICAgICAgICB4OiBsZWZ0ICsgbW92ZUNvbnRleHQucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG9wICsgbW92ZUNvbnRleHQucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNhbGN1bGF0ZSgpO1xuICAgICAgICByZWdpc3RyeS5ob3N0T2JzZXJ2YWJsZS5zdWJzY3JpYmUoaCA9PiB7XG4gICAgICAgICAgICBjYWxjdWxhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW1xuICAgICAgICAhIXRhcmdldFJlZi5jdXJyZW50LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi54LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi55LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi5zY2FsZSxcbiAgICBdKTtcblxuICAgIGNvbnN0IGRlYnVnID0gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LTIgaC0yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8VmlldyByZWY9e3RhcmdldFJlZn0gY2xhc3NOYW1lPSd3LTAgaC0wIGFic29sdXRlIHB0LTEnPlxuICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS00MDAgYm9yZGVyLVsxcHhdIGJvcmRlci1ibHVlLTk1MCByb3VuZGVkLWZ1bGwnXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IC1zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogLXNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICB7ZGVidWcgJiYgKFxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYWJzb2x1dGUgdHJhbnNsYXRlLXktWzEwMHB4XSByb3RhdGUtOTAnPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtYmx1ZS00MDAnPntpZH08L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwge1xuICAgIGNyZWF0ZUNvbnRleHQsXG4gICAgdXNlQ29udGV4dCxcbiAgICB1c2VFZmZlY3QsXG4gICAgdXNlTGF5b3V0RWZmZWN0LFxuICAgIHVzZVJlZixcbiAgICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCB6aXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlQ29udGV4dCwgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7XG4gICAgUGlwZXNjcmlwdE5vZGUsXG4gICAgUGlwZXNjcmlwdFBpcGUsXG4gICAgUGlwZXNjcmlwdFBpcGVWYWx1ZSxcbiAgICBQaXBlc2NyaXB0VHlwZSxcbiAgICBQaXBlc2NyaXB0VmFyaWFibGUsXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93LFxuICAgIFBpcGVzY3JpcHRXb3JrZmxvd0lucHV0LFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlTmFtZSA9ICh0eXBlOiBQaXBlc2NyaXB0VHlwZSkgPT4ge1xuICAgIGlmICh0eXBlLmtpbmQgPT09IGBzaW1wbGVgKSB7XG4gICAgICAgIHJldHVybiB0eXBlLnR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHR5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IFdvcmtmbG93SW5wdXROYW1lID0gKHsgaW5wdXQgfTogeyBpbnB1dDogUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJsdWUtMzAwICR7aW5wdXQuaWdub3JlZCA/IGBsaW5lLXRocm91Z2ggb3BhY2l0eS01MGAgOiBgYH1gfVxuICAgICAgICA+e2Ake2lucHV0Lm5hbWV9YH08L1RleHQ+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0QnVpbHRpbk9wZXJhdG9yLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQsXG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5wdXRJbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2UsXG59IGZyb20gJy4uL3R5cGVzJztcblxuLy8gVE9ETzogaGFuZGxlIGN5Y2xlc1xuXG50eXBlIFJ1bkNvbnRleHQgPSB7XG4gICAgdmlzaXRlZDogU2V0PHVua25vd24+O1xuICAgIGxhenk6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUnVuID0gKFxuICAgIGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIGNvbnRleHQ6IFJ1bkNvbnRleHQgPSB7IHZpc2l0ZWQ6IG5ldyBTZXQoKSwgbGF6eTogZmFsc2UgfSxcbikgPT4ge1xuICAgIGRhdGFzZXQucm9vdE5vZGVJbnN0YW5jZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgY2FsY3VsYXRlUnVuVmFsdWVfbm9kZU91dHB1dChub2RlLCBjb250ZXh0KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVSdW5WYWx1ZV9ub2RlT3V0cHV0ID0gKG5vZGU6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsIGNvbnRleHQ6IFJ1bkNvbnRleHQpID0+IHtcbiAgICAvLyBhbGwgb3V0cHV0cyBtdXN0IGJlIGV2YWx1YXRlZCAoYnV0IG1heSByZXR1cm4gdW5kZWZpbmVkKVxuICAgIG5vZGUub3V0cHV0cy5mb3JFYWNoKG91dHB1dCA9PiB7XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KG91dHB1dCwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWNvbnRleHQubGF6eSkge1xuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9ub2RlT3V0cHV0KHgsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5pbnB1dHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KHgsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlID0gKFxuICAgIGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSxcbiAgICB2YWx1ZTogdW5rbm93bixcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0ID0geyB2aXNpdGVkOiBuZXcgU2V0KCksIGxhenk6IGZhbHNlIH0sXG4pID0+IHtcbiAgICBpZiAoIWNvbm5lY3Rpb24ucnVucykge1xuICAgICAgICBjb25uZWN0aW9uLnJ1bnMgPSB7XG4gICAgICAgICAgICBvdmVycmlkZTogdmFsdWUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgcnVucyB9ID0gY29ubmVjdGlvbjtcbiAgICBydW5zLm92ZXJyaWRlID0gdmFsdWU7XG5cbiAgICBjb25zb2xlLmxvZyhgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlYCwgeyBjb25uZWN0aW9uIH0pO1xuXG4gICAgY29uc3QgYWxsQ29ubmVjdGlvbnMgPSBjb25uZWN0aW9uLm5vZGVJbnN0YW5jZS5kYXRhc2V0LmFsbE5vZGVJbnN0YW5jZXMuZmxhdE1hcCh4ID0+IFtcbiAgICAgICAgLi4ueC5pbnB1dHMsXG4gICAgICAgIC4uLngub3V0cHV0cyxcbiAgICBdKTtcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0PFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZT4oKTtcbiAgICBjb25zdCB1cGRhdGVEZXBlbmRlbnRzID0gKGM6IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSkgPT4ge1xuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9pbnB1dChjLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBkZXBlbmRlbnRzID0gYWxsQ29ubmVjdGlvbnMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiAhdmlzaXRlZC5oYXMoeCkgJiYgeC5ydW5zPy5kZXBlbmRlbmNpZXMuaW5jbHVkZXMoYyksXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB1cGRhdGVEZXBlbmRlbnRzYCwgeyBjLCBkZXBlbmRlbnRzIH0pO1xuICAgICAgICBkZXBlbmRlbnRzLmZvckVhY2goZCA9PiB2aXNpdGVkLmFkZChkKSk7XG4gICAgICAgIGRlcGVuZGVudHMuZm9yRWFjaChkID0+IHVwZGF0ZURlcGVuZGVudHMoZCkpO1xuICAgIH07XG5cbiAgICB1cGRhdGVEZXBlbmRlbnRzKGNvbm5lY3Rpb24pO1xufTtcblxuY29uc3QgY2FsY3VsYXRlUnVuVmFsdWVfaW5wdXQgPSAoXG4gICAgaW5wdXQ6IE9taXQ8UGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLCBgb3V0Zmxvd1BpcGVzYD4sXG4gICAgY29udGV4dDogUnVuQ29udGV4dCxcbikgPT4ge1xuICAgIGlmIChjb250ZXh0LnZpc2l0ZWQuaGFzKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQucnVucztcbiAgICB9XG4gICAgY29udGV4dC52aXNpdGVkLmFkZChpbnB1dCk7XG4gICAgaWYgKGlucHV0LnJ1bnM/Lm92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5wdXQucnVucy52YWx1ZSA9IGlucHV0LnJ1bnMub3ZlcnJpZGU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnB1dC5ydW5zID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgaW5mbG93UGlwZSA9IGlucHV0LmluZmxvd1BpcGU7XG4gICAgaWYgKCFpbmZsb3dQaXBlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBzb3VyY2UgfSA9IGluZmxvd1BpcGU7XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgZGF0YWApIHtcbiAgICAgICAgaW5wdXQucnVucyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBKU09OLnBhcnNlKHNvdXJjZS5qc29uKSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgaW5wdXRgKSB7XG4gICAgICAgIGlucHV0LnJ1bnMgPSB7IHZhbHVlOiBzb3VyY2UuaW5wdXQucnVucz8udmFsdWUsIGRlcGVuZGVuY2llczogW3NvdXJjZS5pbnB1dF0gfTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmtpbmQgPT09IGBvdXRwdXRgKSB7XG4gICAgICAgIGlucHV0LnJ1bnMgPSB7IHZhbHVlOiBzb3VyY2Uub3V0cHV0LnJ1bnM/LnZhbHVlLCBkZXBlbmRlbmNpZXM6IFtzb3VyY2Uub3V0cHV0XSB9O1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzb3VyY2Uua2luZCA9PT0gYG9wZXJhdG9yLW91dHB1dGApIHtcbiAgICAgICAgaW5wdXQucnVucyA9IGNhbGN1bGF0ZVJ1blZhbHVlX29wZXJhdG9yKHNvdXJjZS5ub2RlSW5zdGFuY2UsIGNvbnRleHQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgX25ldmVyOiBuZXZlciA9IHVuZGVmaW5lZCBhcyB0eXBlb2Ygc291cmNlIGFzIG5ldmVyO1xufTtcblxuY29uc3QgY2FsY3VsYXRlUnVuVmFsdWVfb3BlcmF0b3IgPSAoXG4gICAgbm9kZUluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlX09wZXJhdG9yLFxuICAgIGNvbnRleHQ6IFJ1bkNvbnRleHQsXG4pID0+IHtcbiAgICBjb25zdCBjYWxjdWxhdGVBcmdzX2luZGV4ID0gKFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICk6IHtcbiAgICAgICAgdmFsdWU6IG51bWJlcjtcbiAgICAgICAgZGVwZW5kZW5jaWVzOiBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2VbXTtcbiAgICB9ID0+IHtcbiAgICAgICAgY29uc3QgeCA9IG5vZGVJbnN0YW5jZS5pbnB1dHNbaW5kZXhdO1xuICAgICAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQgYXMgdW5rbm93biBhcyBudW1iZXIsXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbeCBhcyBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5wdXRJbnN0YW5jZV0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KHgsIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHgucnVucz8udmFsdWUgYXMgbnVtYmVyLFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbeCBhcyBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5wdXRJbnN0YW5jZV0sXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZXJhdG9yOiBQaXBlc2NyaXB0QnVpbHRpbk9wZXJhdG9yID0gbm9kZUluc3RhbmNlLm9wZXJhdG9yO1xuXG4gICAgLy8gbGF6eVxuICAgIGNvbnN0IGFSZXN1bHQgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDApO1xuICAgIGNvbnN0IGEgPSBhUmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IFsuLi5hUmVzdWx0LmRlcGVuZGVuY2llc107XG5cbiAgICBpZiAob3BlcmF0b3IgPT09IGAmJmApIHtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdj8udmFsdWUsXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbLi4uZGVwZW5kZW5jaWVzLCAuLi52LmRlcGVuZGVuY2llc10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhUmVzdWx0O1xuICAgIH1cbiAgICBpZiAob3BlcmF0b3IgPT09IGB8fGApIHtcbiAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gY2FsY3VsYXRlQXJnc19pbmRleCgxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHY/LnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llczogWy4uLmRlcGVuZGVuY2llcywgLi4udi5kZXBlbmRlbmNpZXNdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYVJlc3VsdDtcbiAgICB9XG4gICAgaWYgKG9wZXJhdG9yID09PSBgY29uZGl0aW9uYWwtdGVybmFyeWApIHtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdj8udmFsdWUsXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbLi4uZGVwZW5kZW5jaWVzLCAuLi52LmRlcGVuZGVuY2llc10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHYgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHY/LnZhbHVlLFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbLi4uZGVwZW5kZW5jaWVzLCAuLi52LmRlcGVuZGVuY2llc10sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gdW5hcnlcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgYD1gOlxuICAgICAgICAgICAgcmV0dXJuIGFSZXN1bHQ7XG4gICAgICAgIGNhc2UgYGRlY2xhcmF0aW9uYDpcbiAgICAgICAgICAgIHJldHVybiBhUmVzdWx0O1xuICAgICAgICBjYXNlIGAhYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6ICFhIH07XG4gICAgICAgIGNhc2UgYCsrYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgKyAxIH07XG4gICAgICAgIGNhc2UgYC0tYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgLSAxIH07XG4gICAgfVxuXG4gICAgLy8gYmluYXJ5XG4gICAgY29uc3QgYlJlc3VsdCA9IGNhbGN1bGF0ZUFyZ3NfaW5kZXgoMSk7XG4gICAgY29uc3QgYiA9IGJSZXN1bHQudmFsdWU7XG4gICAgZGVwZW5kZW5jaWVzLnB1c2goLi4uYlJlc3VsdC5kZXBlbmRlbmNpZXMpO1xuXG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIGArYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgKyBiIH07XG4gICAgICAgIGNhc2UgYC1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAtIGIgfTtcbiAgICAgICAgY2FzZSBgKmA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICogYiB9O1xuICAgICAgICBjYXNlIGAvYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgLyBiIH07XG4gICAgICAgIGNhc2UgYCVgOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAlIGIgfTtcbiAgICAgICAgY2FzZSBgPGA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIDwgYiB9O1xuICAgICAgICBjYXNlIGA+YDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgPiBiIH07XG4gICAgICAgIGNhc2UgYDw9YDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgPD0gYiB9O1xuICAgICAgICBjYXNlIGA+PWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhID49IGIgfTtcbiAgICAgICAgY2FzZSBgPT1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSA9PT0gYiB9O1xuICAgICAgICBjYXNlIGAhPWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICE9PSBiIH07XG4gICAgfVxuXG4gICAgY29uc3QgX25ldmVyOiBuZXZlciA9IHVuZGVmaW5lZCBhcyB0eXBlb2Ygb3BlcmF0b3IgYXMgbmV2ZXI7XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbiIsICJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHtcbiAgICBjcmVhdGVDb250ZXh0LFxuICAgIHVzZUNvbnRleHQsXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZUxheW91dEVmZmVjdCxcbiAgICB1c2VSZWYsXG4gICAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFByZXNzYWJsZSwgUG9pbnRlckV2ZW50IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgY29tYmluZUxhdGVzdCwgemlwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1vdXNlQnV0dG9uLCBNb3ZlYWJsZUNvbnRleHQsIE1vdmVhYmxlVmlldyB9IGZyb20gJy4vbW92ZWFibGUtdmlldyc7XG5pbXBvcnQge1xuICAgIFBpcGVFbmRwb2ludFZpZXcsXG4gICAgUGlwZVZpZXcsXG4gICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlLFxuICAgIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yUGlwZVNvdXJjZSxcbiAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93LFxufSBmcm9tICcuL3BpcGVzJztcbmltcG9ydCB7IFdvcmtmbG93SW5wdXROYW1lLCBnZXRUeXBlTmFtZSB9IGZyb20gJy4vd29yay1uYW1lcyc7XG5pbXBvcnQge1xuICAgIFBpcGVzY3JpcHROb2RlLFxuICAgIFBpcGVzY3JpcHRQaXBlLFxuICAgIFBpcGVzY3JpcHRQaXBlVmFsdWUsXG4gICAgUGlwZXNjcmlwdFR5cGUsXG4gICAgUGlwZXNjcmlwdFZhcmlhYmxlLFxuICAgIFBpcGVzY3JpcHRXb3JrZmxvdyxcbiAgICBQaXBlc2NyaXB0V29ya2Zsb3dJbnB1dCxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgV29ya0Zsb3dWaWV3ID0gKHtcbiAgICB3b3JrZmxvdyxcbiAgICBmdWxsID0gZmFsc2UsXG4gICAgaGlkZVRpdGxlcyA9IGZhbHNlLFxufToge1xuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3c7XG4gICAgZnVsbD86IGJvb2xlYW47XG4gICAgaGlkZVRpdGxlcz86IGJvb2xlYW47XG59KSA9PiB7XG4gICAgLy8gJHtmdWxsID8gYG1pbi13LVsyMHZ3XSBtaW4taC1bMjB2aF1gIDogYG1pbi13LVsyMHB4XSBtaW4taC1bMTBweF1gfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LWNvbHVtbiByZWxhdGl2ZSBiZy1zbGF0ZS05NTAvNzUgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gbS1bLTFweF0gcm91bmRlZFxuICAgICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyFoaWRlVGl0bGVzICYmIChcbiAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e2Ake3dvcmtmbG93Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmlucHV0cy5tYXAoaW5wdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5wdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya2Zsb3dJbnB1dE5hbWUgaW5wdXQ9e2lucHV0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGFuaW1hdGUtYm91bmNlIHRleHQtWzhweF0gYWJzb2x1dGUgdG9wLTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdTI2Q0ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuYm9keS5ub2Rlcz8ubWFwKG4gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtuLm5vZGVJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3IG5vZGU9e259IGNvbnRhaW5lcj17d29ya2Zsb3d9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmJvZHkua2luZCA9PT0gYG9wZXJhdG9yYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMiBmbGV4LXJvdyBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWJsdWUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmJvZHkub3BlcmF0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgb3BlcmF0b3JgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0ubWFwKG9wZXJhdG9yRW5kcG9pbnRJZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtvcGVyYXRvckVuZHBvaW50SWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3IGlkPXtvcGVyYXRvckVuZHBvaW50SWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmlucHV0cy5tYXAoaW5QaXBlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5QaXBlLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25JZD17b3BlcmF0b3JFbmRwb2ludElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYGluYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGluUGlwZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtZW5kJz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93Lm91dHB1dHMubWFwKG91dHB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtvdXRwdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge291dHB1dC5waXBlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge291dHB1dC5waXBlLmtpbmQgPT09IGBkYXRhYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1wdXJwbGUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZS5qc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG91dHB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpcGU6IG91dHB1dC5waXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk/Lm1hcChzb3VyY2VJZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c291cmNlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uSWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG91dHB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlSWQ9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTMwMCc+e2Ake291dHB1dC5uYW1lfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuXG4gICAgICAgICAgICB7IWhpZGVUaXRsZXMgJiYgKFxuICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57YCR7d29ya2Zsb3cud29ya2Zsb3dVcml9YH08L1RleHQ+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Lyoge3dvcmtmbG93LndvcmtmbG93cz8ubWFwKHcgPT4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3cubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC0wIHRvcC0wIHNjYWxlLTUwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3d9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSl9ICovfVxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IE5vZGVWaWV3ID0gKHsgbm9kZSwgY29udGFpbmVyIH06IHsgbm9kZTogUGlwZXNjcmlwdE5vZGU7IGNvbnRhaW5lcjogUGlwZXNjcmlwdFdvcmtmbG93IH0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogbm9kZS5sYXlvdXQ/LnBvc2l0aW9uLnggPz8gMCxcbiAgICAgICAgeTogbm9kZS5sYXlvdXQ/LnBvc2l0aW9uLnkgPz8gMCxcbiAgICAgICAgc2NhbGU6IG5vZGUubGF5b3V0Py5zY2FsZSA/PyAxLFxuICAgIH0pO1xuICAgIGNvbnN0IG1vdmVOb2RlID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZhbHVlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgc2V0UG9zaXRpb24odmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTm9kZVZpZXdgLCB7IG5vZGUsIGNvbnRhaW5lciB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdvcmtmbG93ID0gKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci53b3JrZmxvd3M/LmZpbmQodyA9PiB3LndvcmtmbG93VXJpID09PSBub2RlLndvcmtmbG93VXJpKTtcbiAgICB9KSgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb3ZlYWJsZVZpZXdcbiAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICB5OiBwb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIHNjYWxlOiBwb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdmU9e21vdmVOb2RlfVxuICAgICAgICAgICAgbW91c2VCdXR0b249e01vdXNlQnV0dG9uLkxlZnR9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4LWNvbHVtbiBiZy16aW5jLTk1MC83NSBib3JkZXItYmx1ZS0xMDAgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSBtLVstMXB4XSByb3VuZGVkJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4KWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57d29ya2Zsb3cubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMiB0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPiN7bm9kZS5ub2RlSWR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICB7d29ya2Zsb3cgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5pbnB1dHMubWFwKGlucHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5wdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMSBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFBpcGUgPSBub2RlLmlucHV0UGlwZXMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPT4gcC5uYW1lID09PSBpbnB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlucHV0UGlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dFBpcGUua2luZCA9PT0gYGRhdGFgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdtbC1bLTE2cHhdIG1yLVsxNnB4XSB0ZXh0LXB1cnBsZS00MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lucHV0UGlwZS5qc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdtbC1bLThweF0gbXItWzBweF0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JQaXBlU291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93OiBjb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXBlOiBub2RlLmlucHV0UGlwZXMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0+IHgubmFtZSA9PT0gaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pPy5tYXAoc291cmNlSWQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzb3VyY2VJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbklkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IG5vZGUubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlSWQ9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya2Zsb3dJbnB1dE5hbWUgaW5wdXQ9e2lucHV0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtGbG93VmlldyB3b3JrZmxvdz17d29ya2Zsb3d9IGhpZGVUaXRsZXMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cub3V0cHV0cy5tYXAob3V0cHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0cHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtYmx1ZS0zMDAnPntgJHtvdXRwdXQubmFtZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdtbC1bMHB4XSBtci1bLThweF0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG91dHB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPntub2RlLmltcGxlbWVudGF0aW9uLn08L1RleHQ+ICovfVxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgeyBjYWxjdWxhdGVSdW4gfSBmcm9tICcuL2NhbGN1bGF0ZS1ydW4nO1xuaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0Tm9kZSxcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VfT3BlcmF0b3IsXG4gICAgUGlwZXNjcmlwdFBpcGVWYWx1ZSxcbiAgICBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93LFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkUnVudGltZSA9IChcbiAgICB3b3JrZmxvd1JhdzogUGlwZXNjcmlwdFdvcmtmbG93LFxuKToge1xuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3c7XG4gICAgY29udGV4dDogUGlwZXNjcmlwdFJ1bnRpbWVDb250ZXh0O1xuICAgIGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0O1xufSA9PiB7XG4gICAgY29uc3Qgd29ya2Zsb3cgPSB3b3JrZmxvd1JhdyBhcyBQaXBlc2NyaXB0V29ya2Zsb3c7XG4gICAgLy8gd29ya2Zsb3cudHJlZSA9IHtcbiAgICAvLyAgICAgY29udGFpbmVyOiB1bmRlZmluZWQsXG4gICAgLy8gICAgIHVzYWdlczogW10sXG4gICAgLy8gfTtcblxuICAgIGNvbnN0IGdldFdvcmtmbG93c1JlY3Vyc2l2ZSA9ICh3OiBQaXBlc2NyaXB0V29ya2Zsb3cpOiBQaXBlc2NyaXB0V29ya2Zsb3dbXSA9PiB7XG4gICAgICAgIHJldHVybiBbdywgLi4uKHcud29ya2Zsb3dzPy5mbGF0TWFwKHcyID0+IGdldFdvcmtmbG93c1JlY3Vyc2l2ZSh3MikpID8/IFtdKV07XG4gICAgfTtcblxuICAgIGNvbnN0IGFsbFdvcmtmbG93cyA9IGdldFdvcmtmbG93c1JlY3Vyc2l2ZSh3b3JrZmxvdyk7XG4gICAgY29uc3QgYWxsTm9kZXMgPSBhbGxXb3JrZmxvd3MuZmxhdE1hcCh3ID0+ICh3LmJvZHkua2luZCA9PT0gYG5vZGVzYCA/IHcuYm9keS5ub2RlcyA6IFtdKSk7XG4gICAgY29uc3QgYWxsUGlwZXNfd29ya2Zsb3dPdXRwdXRzID0gYWxsV29ya2Zsb3dzXG4gICAgICAgIC5mbGF0TWFwKHcgPT4gdy5vdXRwdXRzLmZsYXRNYXAobyA9PiBvLnBpcGUpKVxuICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgLm1hcCh4ID0+IHghKTtcbiAgICBjb25zdCBhbGxQaXBlc19ub2RlSW5wdXRzID0gYWxsTm9kZXNcbiAgICAgICAgLmZsYXRNYXAobiA9PiBuLmlucHV0UGlwZXMpXG4gICAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgICAubWFwKHggPT4geCEpO1xuICAgIGNvbnN0IGFsbFBpcGVzID0gWy4uLmFsbFBpcGVzX3dvcmtmbG93T3V0cHV0cywgLi4uYWxsUGlwZXNfbm9kZUlucHV0c107XG5cbiAgICBjb25zdCBkYXRhc2V0OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldCA9IHtcbiAgICAgICAgYWxsTm9kZUluc3RhbmNlczogW10sXG4gICAgICAgIHJvb3ROb2RlSW5zdGFuY2VzOiBbXSxcbiAgICB9O1xuICAgIGNvbnN0IGNvbnRleHQ6IFBpcGVzY3JpcHRSdW50aW1lQ29udGV4dCA9IHtcbiAgICAgICAgYWxsV29ya2Zsb3dzLFxuICAgICAgICBhbGxXb3JrZmxvd3NNYXA6IG5ldyBNYXAoYWxsV29ya2Zsb3dzLm1hcCh4ID0+IFt4LndvcmtmbG93VXJpLCB4XSkpLFxuICAgICAgICBhbGxOb2RlcyxcbiAgICAgICAgYWxsTm9kZXNNYXA6IG5ldyBNYXAoYWxsTm9kZXMubWFwKHggPT4gW3gubm9kZUlkLCB4XSkpLFxuICAgICAgICBhbGxQaXBlcyxcbiAgICAgICAgZGF0YXNldCxcbiAgICAgICAgYWxsTm9kZUluc3RhbmNlczogZGF0YXNldC5hbGxOb2RlSW5zdGFuY2VzLFxuICAgICAgICByb290Tm9kZUluc3RhbmNlczogZGF0YXNldC5yb290Tm9kZUluc3RhbmNlcyxcbiAgICB9O1xuXG4gICAgY29udGV4dC5yb290Tm9kZUluc3RhbmNlcy5wdXNoKFxuICAgICAgICAuLi4od29ya2Zsb3cuYm9keS5ub2Rlcz8ubWFwKG5vZGUgPT4gY3JlYXRlTm9kZUluc3RhbmNlcyhub2RlLCB1bmRlZmluZWQsIGNvbnRleHQpKSA/PyBbXSksXG4gICAgKTtcblxuICAgIGNvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBsb2FkTm9kZUNvbm5lY3Rpb25zX2luZmxvd3Mobm9kZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhbGxJbmZsb3dQaXBlcyA9IGNvbnRleHQuYWxsTm9kZUluc3RhbmNlc1xuICAgICAgICAuZmxhdE1hcCh4ID0+IFsuLi54LmlucHV0cy5tYXAoeSA9PiB5LmluZmxvd1BpcGUpLCAuLi54Lm91dHB1dHMubWFwKHkgPT4geS5pbmZsb3dQaXBlKV0pXG4gICAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgICAubWFwKHggPT4geCEpO1xuICAgIGNvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBsb2FkTm9kZUNvbm5lY3Rpb25zX291dGZsb3dzKG5vZGUsIGFsbEluZmxvd1BpcGVzKTtcbiAgICB9KTtcblxuICAgIGNhbGN1bGF0ZVJ1bihkYXRhc2V0KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHdvcmtmbG93LFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBkYXRhc2V0LFxuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBQaXBlc2NyaXB0UnVudGltZUNvbnRleHQgPSB7XG4gICAgYWxsV29ya2Zsb3dzOiBQaXBlc2NyaXB0V29ya2Zsb3dbXTtcbiAgICBhbGxXb3JrZmxvd3NNYXA6IE1hcDxzdHJpbmcsIFBpcGVzY3JpcHRXb3JrZmxvdz47XG4gICAgYWxsTm9kZXM6IFBpcGVzY3JpcHROb2RlW107XG4gICAgYWxsTm9kZXNNYXA6IE1hcDxzdHJpbmcsIFBpcGVzY3JpcHROb2RlPjtcbiAgICBhbGxQaXBlczogUGlwZXNjcmlwdFBpcGVWYWx1ZVtdO1xuXG4gICAgLy8gY3JlYXRlZCBkdXJpbmcgY3JlYXRlTm9kZUluc3RhbmNlc1xuICAgIGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0O1xuICAgIGFsbE5vZGVJbnN0YW5jZXM6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VbXTtcbiAgICByb290Tm9kZUluc3RhbmNlczogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZVtdO1xufTtcblxuY29uc3QgY3JlYXRlTm9kZUluc3RhbmNlcyA9IChcbiAgICBub2RlOiBQaXBlc2NyaXB0Tm9kZSxcbiAgICBwYXJlbnQ6IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsXG4gICAgY29udGV4dDogUGlwZXNjcmlwdFJ1bnRpbWVDb250ZXh0LFxuKTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSA9PiB7XG4gICAgY29uc3Qgd29ya2Zsb3cgPSBjb250ZXh0LmFsbFdvcmtmbG93c01hcC5nZXQobm9kZS53b3JrZmxvd1VyaSk7XG4gICAgaWYgKCF3b3JrZmxvdykge1xuICAgICAgICB0aHJvdyBFcnJvcihgbWlzc2luZyB3b3JrZmxvdyAke25vZGUud29ya2Zsb3dVcml9YCk7XG4gICAgfVxuICAgIC8vIG5vZGUudHJlZSA9IHtcbiAgICAvLyAgICAgd29ya2Zsb3csXG4gICAgLy8gfTtcblxuICAgIGNvbnN0IGluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlID0ge1xuICAgICAgICBkYXRhc2V0OiBjb250ZXh0LmRhdGFzZXQsXG4gICAgICAgIGtleTogYCR7Y29udGV4dC5hbGxOb2RlSW5zdGFuY2VzLmxlbmd0aH1gLFxuICAgICAgICBub2RlLFxuICAgICAgICB3b3JrZmxvdyxcbiAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgb3V0cHV0czogW10sXG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG4gICAgY29udGV4dC5hbGxOb2RlSW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuXG4gICAgLy8gQ3JlYXRlIGNvbm5lY3Rpb25zICh3aXRob3V0IHBpcGVzKVxuICAgIGluc3RhbmNlLmlucHV0cyA9IHdvcmtmbG93LmlucHV0cy5tYXAod29ya2Zsb3dJbnB1dCA9PiAoe1xuICAgICAgICBrZXk6IGAke2NvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5sZW5ndGh9OiR7d29ya2Zsb3dJbnB1dC5uYW1lfTp3b3JrZmxvd0lucHV0YCxcbiAgICAgICAgbm9kZUluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAga2luZDogYHdvcmtmbG93LWlucHV0YCxcbiAgICAgICAgd29ya2Zsb3dJbnB1dCxcbiAgICAgICAgbmFtZTogd29ya2Zsb3dJbnB1dC5uYW1lLFxuICAgICAgICBpbmZsb3dQaXBlOiB1bmRlZmluZWQsXG4gICAgICAgIG91dGZsb3dQaXBlczogW10sXG4gICAgfSkpO1xuICAgIGluc3RhbmNlLm91dHB1dHMgPSB3b3JrZmxvdy5vdXRwdXRzLm1hcCh3b3JrZmxvd091dHB1dCA9PiAoe1xuICAgICAgICBrZXk6IGAke2NvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5sZW5ndGh9OiR7d29ya2Zsb3dPdXRwdXQubmFtZX06d29ya2Zsb3dPdXRwdXRgLFxuICAgICAgICBub2RlSW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICBraW5kOiBgd29ya2Zsb3ctb3V0cHV0YCxcbiAgICAgICAgd29ya2Zsb3dPdXRwdXQsXG4gICAgICAgIG5hbWU6IHdvcmtmbG93T3V0cHV0Lm5hbWUsXG4gICAgICAgIGluZmxvd1BpcGU6IHVuZGVmaW5lZCxcbiAgICAgICAgb3V0Zmxvd1BpcGVzOiBbXSxcbiAgICB9KSk7XG5cbiAgICAvLyBUT0RPOiBoYW5kbGUgcmVjdXJzaXZlL2N5Y2xpY2FsIHdvcmtmbG93c1xuICAgIGluc3RhbmNlLmNoaWxkcmVuID1cbiAgICAgICAgd29ya2Zsb3cuYm9keS5ub2Rlcz8ubWFwKG4gPT4gY3JlYXRlTm9kZUluc3RhbmNlcyhuLCBpbnN0YW5jZSwgY29udGV4dCkpID8/IFtdO1xuXG4gICAgaWYgKHdvcmtmbG93LmJvZHkua2luZCA9PT0gYG9wZXJhdG9yYCkge1xuICAgICAgICBpbnN0YW5jZS5vcGVyYXRvciA9IHdvcmtmbG93LmJvZHkub3BlcmF0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuY29uc3QgbG9hZE5vZGVDb25uZWN0aW9uc19pbmZsb3dzID0gKG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSkgPT4ge1xuICAgIC8vIGNvbm5lY3QgaW5mbG93c1xuICAgIG5vZGVJbnN0YW5jZS5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVJbnB1dCA9IG5vZGVJbnN0YW5jZS5ub2RlLmlucHV0UGlwZXMuZmluZCh4ID0+IHgubmFtZSA9PT0gaW5wdXQubmFtZSk7XG4gICAgICAgIGlmICghbm9kZUlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZXRJbmZsb3dTb3VyY2UgPSAoKTogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwaXBlU291cmNlID0gbm9kZUlucHV0O1xuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYGRhdGFgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYGRhdGFgLFxuICAgICAgICAgICAgICAgICAgICBqc29uOiBwaXBlU291cmNlLmpzb24sXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGB3b3JrZmxvdy1vcGVyYXRvcmApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgb3BlcmF0b3Itb3V0cHV0YCxcbiAgICAgICAgICAgICAgICAgICAgbm9kZUluc3RhbmNlOiBub2RlSW5zdGFuY2UgYXMgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYHdvcmtmbG93LWlucHV0YCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVXb3JrZmxvd0lucHV0ID0gbm9kZUluc3RhbmNlLmlucHV0cy5maW5kKHggPT4geC5uYW1lID09PSBwaXBlU291cmNlLm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZVdvcmtmbG93SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IGdldEluZmxvd1NvdXJjZTogTWlzc2luZyBub2RlV29ya2Zsb3dJbnB1dCAke3BpcGVTb3VyY2UubmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgaW5wdXRgLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dDogbm9kZVdvcmtmbG93SW5wdXQsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGBub2RlYCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlZXJOb2RlT3V0cHV0ID0gbm9kZUluc3RhbmNlLnBhcmVudD8uY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgLmZpbmQobjIgPT4gbjIubm9kZS5ub2RlSWQgPT09IHBpcGVTb3VyY2Uuc291cmNlTm9kZUlkKVxuICAgICAgICAgICAgICAgICAgICA/Lm91dHB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gcGlwZVNvdXJjZS5zb3VyY2VOb2RlT3V0cHV0TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwZWVyTm9kZU91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogZ2V0SW5mbG93U291cmNlOiBNaXNzaW5nIHBlZXJOb2RlT3V0cHV0ICR7cGlwZVNvdXJjZS5uYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlwZVNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbk91dHB1dHM6IG5vZGVJbnN0YW5jZS5jaGlsZHJlbi5tYXAoeCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Lm91dHB1dHMubWFwKG8gPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogby5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IG8ubm9kZUluc3RhbmNlLm5vZGUubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBvdXRwdXRgLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IHBlZXJOb2RlT3V0cHV0LFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IHVua25vd24gcGlwZVNvdXJjZSAkeyhwaXBlU291cmNlIGFzIHsga2luZDogc3RyaW5nIH0pLmtpbmR9YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGdldEluZmxvd1NvdXJjZSgpO1xuICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQuaW5mbG93UGlwZSA9IHtcbiAgICAgICAgICAgIGtleTogYCR7aW5wdXQua2V5fTpwaXBlYCxcbiAgICAgICAgICAgIHBpcGU6IG5vZGVJbnB1dCxcbiAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAga2luZDogYGlucHV0YCxcbiAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBub2RlSW5zdGFuY2Uub3V0cHV0cy5mb3JFYWNoKG91dHB1dCA9PiB7XG4gICAgICAgIGNvbnN0IHdvcmtmbG93T3V0cHV0ID0gbm9kZUluc3RhbmNlLndvcmtmbG93Lm91dHB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gb3V0cHV0Lm5hbWUpO1xuICAgICAgICBjb25zdCB3b3JrZmxvd091dHB1dFBpcGUgPSB3b3JrZmxvd091dHB1dD8ucGlwZTtcbiAgICAgICAgaWYgKCF3b3JrZmxvd091dHB1dFBpcGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldEluZmxvd1NvdXJjZSA9ICgpOiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBpcGVTb3VyY2UgPSB3b3JrZmxvd091dHB1dFBpcGU7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWU6IHBpcGVTb3VyY2VOYW1lIH0gPSB3b3JrZmxvd091dHB1dDtcbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGBkYXRhYCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBkYXRhYCxcbiAgICAgICAgICAgICAgICAgICAganNvbjogcGlwZVNvdXJjZS5qc29uLFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgd29ya2Zsb3ctb3BlcmF0b3JgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYG9wZXJhdG9yLW91dHB1dGAsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJbnN0YW5jZTogbm9kZUluc3RhbmNlIGFzIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VfT3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGB3b3JrZmxvdy1pbnB1dGApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlV29ya2Zsb3dJbnB1dCA9IG5vZGVJbnN0YW5jZS5pbnB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gcGlwZVNvdXJjZU5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZVdvcmtmbG93SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IGdldEluZmxvd1NvdXJjZTogTWlzc2luZyBub2RlV29ya2Zsb3dJbnB1dCAke3BpcGVTb3VyY2VOYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBpbnB1dGAsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBub2RlV29ya2Zsb3dJbnB1dCxcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYG5vZGVgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5uZXJOb2RlT3V0cHV0ID0gbm9kZUluc3RhbmNlLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKG4yID0+IG4yLm5vZGUubm9kZUlkID09PSBwaXBlU291cmNlLnNvdXJjZU5vZGVJZClcbiAgICAgICAgICAgICAgICAgICAgPy5vdXRwdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHBpcGVTb3VyY2VOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlubmVyTm9kZU91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogZ2V0SW5mbG93U291cmNlOiBNaXNzaW5nIHBlZXJOb2RlT3V0cHV0ICR7cGlwZVNvdXJjZU5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYG91dHB1dGAsXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dDogaW5uZXJOb2RlT3V0cHV0LFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IHVua25vd24gcGlwZVNvdXJjZSAkeyhwaXBlU291cmNlIGFzIHsga2luZDogc3RyaW5nIH0pLmtpbmR9YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGdldEluZmxvd1NvdXJjZSgpO1xuICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0cHV0LmluZmxvd1BpcGUgPSB7XG4gICAgICAgICAgICBrZXk6IGAke291dHB1dC5rZXl9OnBpcGVgLFxuICAgICAgICAgICAgcGlwZTogd29ya2Zsb3dPdXRwdXRQaXBlLFxuICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgZGVzdGluYXRpb246IHtcbiAgICAgICAgICAgICAgICBraW5kOiBgb3V0cHV0YCxcbiAgICAgICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuY29uc3QgbG9hZE5vZGVDb25uZWN0aW9uc19vdXRmbG93cyA9IChcbiAgICBub2RlSW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsXG4gICAgYWxsSW5mbG93UGlwZXM6IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtdLFxuKSA9PiB7XG4gICAgbm9kZUluc3RhbmNlLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQub3V0Zmxvd1BpcGVzID0gYWxsSW5mbG93UGlwZXMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4LnNvdXJjZS5raW5kID09PSBgaW5wdXRgICYmIHguc291cmNlLmlucHV0ID09PSBpbnB1dCxcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgICBub2RlSW5zdGFuY2Uub3V0cHV0cy5mb3JFYWNoKG91dHB1dCA9PiB7XG4gICAgICAgIG91dHB1dC5vdXRmbG93UGlwZXMgPSBhbGxJbmZsb3dQaXBlcy5maWx0ZXIoXG4gICAgICAgICAgICB4ID0+IHguc291cmNlLmtpbmQgPT09IGBvdXRwdXRgICYmIHguc291cmNlLm91dHB1dCA9PT0gb3V0cHV0LFxuICAgICAgICApO1xuICAgIH0pO1xufTtcbiIsICIvLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwMS1kZWNsYXJhdGlvbnMvMDEudHMud29ya2Zsb3cuanNvbic7XG4vLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwMi1hc3NpZ25tZW50cy8wMS50cy53b3JrZmxvdy5qc29uJztcbmltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDAzLW9wZXJhdG9ycy8wNC50cy53b3JrZmxvdy5qc29uJztcbi8vIGltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDA0LW11dGF0aW9uLzAxLnRzLndvcmtmbG93Lmpzb24nO1xuLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDUtbG9naWMvMDIudHMud29ya2Zsb3cuanNvbic7XG5pbXBvcnQgeyBQaXBlc2NyaXB0V29ya2Zsb3cgfSBmcm9tICcuL3NyYy90eXBlcyc7XG5leHBvcnQgeyBXb3JrQ2FudmFzVmlldyB9IGZyb20gJy4vc3JjL3VpL3dvcmstY2FudmFzLXZpZXcnO1xuZXhwb3J0IGNvbnN0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93ID0gZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGFzIFBpcGVzY3JpcHRXb3JrZmxvdztcbiIsICJpbXBvcnQgeyBXb3JrQ2FudmFzVmlldywgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3cgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL3BpcGVzY3JpcHQnO1xuXG5leHBvcnQgY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IHdvcmtmbG93ID0gZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3c7XG4gICAgcmV0dXJuIDxXb3JrQ2FudmFzVmlldyB3b3JrZmxvdz17d29ya2Zsb3d9IC8+O1xufTtcbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gYmFja2dyb3VuZENvbG9yIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIGFuaW1hdGVkIGB0cnVlYCB0byBhbmltYXRlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGNoYW5nZSwgYGZhbHNlYCB0byBjaGFuZ2UgaW1tZWRpYXRlbHkuXG4gKiBAcGxhdGZvcm0gYW5kcm9pZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJCYWNrZ3JvdW5kQ29sb3IoYmFja2dyb3VuZENvbG9yOiBzdHJpbmcsIGFuaW1hdGVkOiBib29sZWFuKSB7XG4gIFN0YXR1c0Jhci5zZXRCYWNrZ3JvdW5kQ29sb3IoYmFja2dyb3VuZENvbG9yLCBhbmltYXRlZCk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgdGhlIG5ldHdvcmsgYWN0aXZpdHkgaW5kaWNhdG9yLlxuICogQHBhcmFtIHZpc2libGUgSWYgdGhlIG5ldHdvcmsgYWN0aXZpdHkgaW5kaWNhdG9yIHNob3VsZCBiZSB2aXNpYmxlLlxuICogQHBsYXRmb3JtIGlvc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJOZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgU3RhdHVzQmFyLnNldE5ldHdvcmtBY3Rpdml0eUluZGljYXRvclZpc2libGUodmlzaWJsZSk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyQW5pbWF0aW9uIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBoaWRkZW4gSWYgdGhlIHN0YXR1cyBiYXIgc2hvdWxkIGJlIGhpZGRlbi5cbiAqIEBwYXJhbSBhbmltYXRpb24gQW5pbWF0aW9uIHRvIHVzZSB3aGVuIHRvZ2dsaW5nIGhpZGRlbiwgZGVmYXVsdHMgdG8gYCdub25lJ2AuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckhpZGRlbihoaWRkZW46IGJvb2xlYW4sIGFuaW1hdGlvbjogU3RhdHVzQmFyQW5pbWF0aW9uKSB7XG4gIFN0YXR1c0Jhci5zZXRIaWRkZW4oaGlkZGVuLCBhbmltYXRpb24pO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhclN0eWxlIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuaW1wb3J0IHN0eWxlVG9CYXJTdHlsZSBmcm9tICcuL3N0eWxlVG9CYXJTdHlsZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFNldCB0aGUgYmFyIHN0eWxlIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIHN0eWxlIFRoZSBjb2xvciBvZiB0aGUgc3RhdHVzIGJhciB0ZXh0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJTdHlsZShzdHlsZTogU3RhdHVzQmFyU3R5bGUpIHtcbiAgU3RhdHVzQmFyLnNldEJhclN0eWxlKHN0eWxlVG9CYXJTdHlsZShzdHlsZSkpO1xufVxuIiwgImltcG9ydCB7IEFwcGVhcmFuY2UsIENvbG9yU2NoZW1lTmFtZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhclN0eWxlIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuXG5mdW5jdGlvbiBnZXRDb2xvclNjaGVtZSgpIHtcbiAgaWYgKEFwcGVhcmFuY2UpIHtcbiAgICByZXR1cm4gQXBwZWFyYW5jZS5nZXRDb2xvclNjaGVtZSgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnbGlnaHQnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlVG9CYXJTdHlsZShcbiAgc3R5bGU6IFN0YXR1c0JhclN0eWxlID0gJ2F1dG8nLFxuICBjb2xvclNjaGVtZTogQ29sb3JTY2hlbWVOYW1lID0gZ2V0Q29sb3JTY2hlbWUoKVxuKTogJ2xpZ2h0LWNvbnRlbnQnIHwgJ2RhcmstY29udGVudCcge1xuICBpZiAoIWNvbG9yU2NoZW1lKSB7XG4gICAgY29sb3JTY2hlbWUgPSAnbGlnaHQnO1xuICB9XG5cbiAgbGV0IHJlc29sdmVkU3R5bGUgPSBzdHlsZTtcbiAgaWYgKHN0eWxlID09PSAnYXV0bycpIHtcbiAgICByZXNvbHZlZFN0eWxlID0gY29sb3JTY2hlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xuICB9IGVsc2UgaWYgKHN0eWxlID09PSAnaW52ZXJ0ZWQnKSB7XG4gICAgcmVzb2x2ZWRTdHlsZSA9IGNvbG9yU2NoZW1lID09PSAnbGlnaHQnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlZFN0eWxlID09PSAnbGlnaHQnID8gJ2xpZ2h0LWNvbnRlbnQnIDogJ2RhcmstY29udGVudCc7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogU2V0IHRoZSB0cmFuc2x1Y2VuY3kgb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gdHJhbnNsdWNlbnQgV2hldGhlciB0aGUgYXBwIGNhbiBkcmF3IHVuZGVyIHRoZSBzdGF0dXMgYmFyLiBXaGVuIGB0cnVlYCwgY29udGVudCB3aWxsIGJlXG4gKiByZW5kZXJlZCB1bmRlciB0aGUgc3RhdHVzIGJhci4gVGhpcyBpcyBhbHdheXMgYHRydWVgIG9uIGlPUyBhbmQgY2Fubm90IGJlIGNoYW5nZWQuXG4gKiBAcGxhdGZvcm0gYW5kcm9pZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJUcmFuc2x1Y2VudCh0cmFuc2x1Y2VudDogYm9vbGVhbikge1xuICBTdGF0dXNCYXIuc2V0VHJhbnNsdWNlbnQodHJhbnNsdWNlbnQpO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ2V4cG8tc3RhdHVzLWJhcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByZXNzYWJsZSwgVGV4dCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGluY3JlbWVudCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q291bnQocyA9PiBzICsgMSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBmbGV4LWNvbCBmbGV4LTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXJlZC0xMDAnPlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWN5YW4tNzAwJz5FeGFtcGxlVmlldyAuLi48L1RleHQ+XG4gICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9e2luY3JlbWVudH0+XG4gICAgICAgICAgICAgICAgPFRleHQ+e2BJbmNyZW1lbnQgY291bnQ6JHtjb3VudH1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dD4wMDM8L1RleHQ+XG4gICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgIDxTdGF0dXNCYXIgc3R5bGU9J2F1dG8nIC8+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gJ3RhaWx3aW5kY3NzJztcblxuZXhwb3J0IGNvbnN0IHRhaWx3aW5kVGhlbWU6IENvbmZpZ1tgdGhlbWVgXSA9IHtcbiAgICAvLyBlZGl0IHlvdXIgdGFpbHdpbmQgdGhlbWUgaGVyZSFcbiAgICAvLyBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2FkZGluZy1jdXN0b20tc3R5bGVzXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixhQUFlO0FBQUEsRUFDZixRQUFVLENBQUM7QUFBQSxFQUNYLFNBQVcsQ0FBQztBQUFBLEVBQ1osTUFBUTtBQUFBLElBQ04sTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLGFBQWU7QUFBQSxRQUNmLFFBQVU7QUFBQSxRQUNWLFlBQWMsQ0FBQztBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxhQUFlO0FBQUEsTUFDZixNQUFRO0FBQUEsTUFDUixRQUFVLENBQUM7QUFBQSxNQUNYLFNBQVc7QUFBQSxRQUNUO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixNQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsY0FBZ0I7QUFBQSxZQUNoQixzQkFBd0I7QUFBQSxVQUMxQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFhO0FBQUEsUUFDWDtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixVQUFZO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsVUFBWTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFXO0FBQUEsWUFDVDtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0EsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLFVBQVk7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWU7QUFBQSxVQUNmLE1BQVE7QUFBQSxVQUNSLFFBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixVQUFZO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsVUFBWTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFXO0FBQUEsWUFDVDtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0EsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLFVBQVk7QUFBQSxVQUNk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QUFZOzs7QUNBL0IsSUFBTSxnQkFBaUM7QUFBQTtBQUFBO0FBRzlDOyIsCiAgIm5hbWVzIjogWyJSZWFjdCIsICJ1c2VMYXlvdXRFZmZlY3QiLCAidXNlUmVmIiwgInVzZVN0YXRlIiwgIlZpZXciLCAiVGV4dCIsICJQcmVzc2FibGUiLCAiZCIsICJiIiwgIlN1YnNjcmlwdGlvbiIsICJTdWJzY3JpYmVyIiwgIkNvbnN1bWVyT2JzZXJ2ZXIiLCAiU2FmZVN1YnNjcmliZXIiLCAiT2JzZXJ2YWJsZSIsICJvYnNlcnZhYmxlIiwgIlN1YmplY3QiLCAib2JzZXJ2YWJsZSIsICJBbm9ueW1vdXNTdWJqZWN0IiwgIkJlaGF2aW9yU3ViamVjdCIsICJ1c2VSZWYiLCAidXNlUmVmIiwgIlJlYWN0IiwgImNyZWF0ZUNvbnRleHQiLCAidXNlQ29udGV4dCIsICJ1c2VFZmZlY3QiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlByZXNzYWJsZSIsICJjcmVhdGVDb250ZXh0IiwgInVzZVJlZiIsICJ1c2VTdGF0ZSIsICJWaWV3IiwgIlRleHQiLCAiY3JlYXRlQ29udGV4dCIsICJWaWV3IiwgInVzZVJlZiIsICJWaWV3IiwgIlRleHQiLCAiVGV4dCIsICJjb250ZXh0IiwgInYiLCAiVmlldyIsICJSZWFjdCIsICJ1c2VDb250ZXh0IiwgInVzZVN0YXRlIiwgInVzZUVmZmVjdCIsICJUZXh0IiwgImNyZWF0ZUNvbnRleHQiLCAiUHJlc3NhYmxlIiwgIlJlYWN0IiwgInVzZVN0YXRlIiwgIlZpZXciLCAiVGV4dCIsICJWaWV3IiwgIlRleHQiLCAiUmVhY3QiLCAiTm9kZVZpZXciLCAidXNlU3RhdGUiLCAiY29udGV4dCIsICJ1c2VSZWYiLCAiY29udGV4dCIsICJ1c2VTdGF0ZSIsICJ1c2VMYXlvdXRFZmZlY3QiLCAiVmlldyIsICJSZWFjdCIsICJQcmVzc2FibGUiLCAiVGV4dCIsICJTdGF0dXNCYXIiLCAiU3RhdHVzQmFyIiwgIlN0YXR1c0JhciIsICJTdGF0dXNCYXIiLCAidXNlU3RhdGUiLCAiUHJlc3NhYmxlIiwgIlRleHQiLCAiVmlldyJdCn0K
