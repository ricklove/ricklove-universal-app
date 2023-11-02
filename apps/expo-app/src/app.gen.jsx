// ../../packages/pipescript/src/tests/code/0005-logic/03.ts.workflow.json
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
          name: "a",
          type: {
            kind: "simple",
            type: "number"
          },
          pipe: {
            kind: "node",
            sourceNodeId: "file.ts:4",
            sourceNodeOutputName: "a"
          }
        },
        {
          name: "b",
          type: {
            kind: "simple",
            type: "number"
          },
          pipe: {
            kind: "node",
            sourceNodeId: "file.ts:4",
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
          workflowUri: "file.ts/b-declaration",
          name: "file.ts/b-declaration",
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
          body: {
            kind: "operator",
            operator: "declaration"
          }
        },
        {
          workflowUri: "file.ts/>",
          name: "file.ts/>",
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
                type: "bool"
              },
              pipe: {
                kind: "workflow-operator"
              }
            }
          ],
          body: {
            kind: "operator",
            operator: ">"
          }
        },
        {
          workflowUri: "file.ts/if-body",
          name: "file.ts/if-body",
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
            },
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
              name: "b",
              type: {
                kind: "simple",
                type: "number"
              },
              pipe: {
                kind: "node",
                sourceNodeId: "file.ts/if-body:3",
                sourceNodeOutputName: "b"
              }
            },
            {
              name: "a",
              type: {
                kind: "simple",
                type: "number"
              },
              pipe: {
                kind: "node",
                sourceNodeId: "file.ts/if-body:3",
                sourceNodeOutputName: "a"
              }
            }
          ],
          workflows: [
            {
              workflowUri: "file.ts/if-body/b=",
              name: "file.ts/if-body/b=",
              inputs: [
                {
                  name: "value",
                  type: {
                    kind: "simple",
                    type: "int"
                  }
                },
                {
                  name: "old",
                  type: {
                    kind: "simple",
                    type: "number"
                  },
                  ignored: true
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
                    kind: "workflow-operator"
                  }
                }
              ],
              body: {
                kind: "operator",
                operator: "="
              }
            },
            {
              workflowUri: "file.ts/if-body/>",
              name: "file.ts/if-body/>",
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
                    type: "number"
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
                    kind: "workflow-operator"
                  }
                }
              ],
              body: {
                kind: "operator",
                operator: ">"
              }
            },
            {
              workflowUri: "file.ts/if-body/if-body",
              name: "file.ts/if-body/if-body",
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
                },
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
                  name: "b",
                  type: {
                    kind: "simple",
                    type: "number"
                  },
                  pipe: {
                    kind: "node",
                    sourceNodeId: "file.ts/if-body/if-body:1",
                    sourceNodeOutputName: "b"
                  }
                },
                {
                  name: "a",
                  type: {
                    kind: "simple",
                    type: "number"
                  },
                  pipe: {
                    kind: "node",
                    sourceNodeId: "file.ts/if-body/if-body:2",
                    sourceNodeOutputName: "a"
                  }
                }
              ],
              workflows: [
                {
                  workflowUri: "file.ts/if-body/if-body/b=",
                  name: "file.ts/if-body/if-body/b=",
                  inputs: [
                    {
                      name: "value",
                      type: {
                        kind: "simple",
                        type: "int"
                      }
                    },
                    {
                      name: "old",
                      type: {
                        kind: "simple",
                        type: "number"
                      },
                      ignored: true
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
                        kind: "workflow-operator"
                      }
                    }
                  ],
                  body: {
                    kind: "operator",
                    operator: "="
                  }
                },
                {
                  workflowUri: "file.ts/if-body/if-body/a=",
                  name: "file.ts/if-body/if-body/a=",
                  inputs: [
                    {
                      name: "value",
                      type: {
                        kind: "simple",
                        type: "int"
                      }
                    },
                    {
                      name: "old",
                      type: {
                        kind: "simple",
                        type: "number"
                      },
                      ignored: true
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
                    operator: "="
                  }
                }
              ],
              body: {
                kind: "nodes",
                nodes: [
                  {
                    nodeId: "file.ts/if-body/if-body:1",
                    workflowUri: "file.ts/if-body/if-body/b=",
                    inputPipes: [
                      {
                        name: "value",
                        kind: "data",
                        json: "46"
                      },
                      {
                        name: "old",
                        kind: "workflow-input",
                        workflowInputName: "b"
                      }
                    ]
                  },
                  {
                    nodeId: "file.ts/if-body/if-body:2",
                    workflowUri: "file.ts/if-body/if-body/a=",
                    inputPipes: [
                      {
                        name: "value",
                        kind: "data",
                        json: "50"
                      },
                      {
                        name: "old",
                        kind: "workflow-input",
                        workflowInputName: "a"
                      }
                    ]
                  }
                ],
                control: "if"
              }
            }
          ],
          body: {
            kind: "nodes",
            nodes: [
              {
                nodeId: "file.ts/if-body:1",
                workflowUri: "file.ts/if-body/b=",
                inputPipes: [
                  {
                    name: "value",
                    kind: "data",
                    json: "43"
                  },
                  {
                    name: "old",
                    kind: "workflow-input",
                    workflowInputName: "b"
                  }
                ]
              },
              {
                nodeId: "file.ts/if-body:2",
                workflowUri: "file.ts/if-body/>",
                inputPipes: [
                  {
                    name: "left",
                    kind: "workflow-input",
                    workflowInputName: "a"
                  },
                  {
                    name: "right",
                    kind: "node",
                    sourceNodeId: "file.ts/if-body:1",
                    sourceNodeOutputName: "b"
                  }
                ]
              },
              {
                nodeId: "file.ts/if-body:3",
                workflowUri: "file.ts/if-body/if-body",
                inputPipes: [
                  {
                    name: "condition",
                    kind: "node",
                    sourceNodeId: "file.ts/if-body:2",
                    sourceNodeOutputName: "value"
                  },
                  {
                    name: "b",
                    kind: "node",
                    sourceNodeId: "file.ts/if-body:1",
                    sourceNodeOutputName: "b"
                  },
                  {
                    name: "a",
                    kind: "workflow-input",
                    workflowInputName: "a"
                  }
                ]
              }
            ],
            control: "if"
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
            nodeId: "file.ts:2",
            workflowUri: "file.ts/b-declaration",
            inputPipes: []
          },
          {
            nodeId: "file.ts:3",
            workflowUri: "file.ts/>",
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
                json: "40"
              }
            ]
          },
          {
            nodeId: "file.ts:4",
            workflowUri: "file.ts/if-body",
            inputPipes: [
              {
                name: "condition",
                kind: "node",
                sourceNodeId: "file.ts:3",
                sourceNodeOutputName: "value"
              },
              {
                name: "b",
                kind: "node",
                sourceNodeId: "file.ts:2",
                sourceNodeOutputName: "b"
              },
              {
                name: "a",
                kind: "node",
                sourceNodeId: "file.ts:1",
                sourceNodeOutputName: "a"
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
import { View as View5, Text as Text6, Pressable as Pressable3 } from "react-native";

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
  return <View2 testID={`PipeEndpointView:${id}`} className="w-2 h-2 justify-center items-center">
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

// ../../packages/pipescript/src/code-generation/file.ts
var indent = (text, depth = 1) => {
  if (!text) {
    return ``;
  }
  return text.split(`
`).map((x) => `${[...new Array(depth)].map((x2) => `    `)}${x}
`).join(``);
};
var operatorExpressions = [
  // assignment
  ...[`declaration`, `=`].map((operator) => ({
    operator,
    template: (argNames) => `${argNames[0]}`
  })),
  // prefix unary
  ...[`!`].map((operator) => ({
    operator,
    template: (argNames) => `${operator}${argNames[0]}`
  })),
  // postfix unary
  ...[`++`, `--`].map((operator) => ({
    operator,
    template: (argNames) => `${argNames[0]}${operator}`
  })),
  // binary
  ...[`+`, `-`, `*`, `/`, `%`, `&&`, `||`, `==`, `!=`, `<`, `>`, `<=`, `>=`].map(
    (operator) => ({
      operator,
      template: (argNames) => `${argNames[0]} ${operator} ${argNames[1]}`
    })
  ),
  // custom
  ...[`conditional-ternary`].map((operator) => ({
    operator,
    template: (argNames) => `${argNames[0]} ? ${argNames[1]} : ${argNames[2]}`
  }))
];
var SIMPLIFY_SINGLE_RETURN = true;
var create_getCallExpression = (workflow) => {
  const functionName = getFunctionName(workflow);
  if (workflow.body.kind === `operator`) {
    const { operator } = workflow.body;
    const fun = operatorExpressions.find((f) => f.operator === operator);
    if (!fun) {
      return () => `/* missing operator ${operator}*/`;
    }
    return fun.template;
  }
  return (args) => {
    return `${functionName}(${args.join(`, `)})`;
  };
};
var convertWorkflowToFunctionDeclaration = (workflow, dataset, builder = {
  declaredWorkflows: []
}) => {
  if (builder.declaredWorkflows.find((x) => x.workflow === workflow)) {
    return;
  }
  const declaration = {
    workflow,
    getCallExpression: create_getCallExpression(workflow)
  };
  builder.declaredWorkflows.push(declaration);
  if (workflow.body.kind === `operator`) {
    return;
  }
  const nestedFunctionDeclarations = workflow.workflows?.map((w) => convertWorkflowToFunctionDeclaration(w, dataset, builder)).filter((x) => x).map((x) => x) ?? [];
  const statements = workflow.body.nodes.map((node) => {
    const nodeInstance = dataset.allNodeInstances.find((x) => x.node === node);
    const workflow2 = nodeInstance?.workflow;
    if (!workflow2) {
      return `/* missing workflow ${node.workflowUri} */`;
    }
    const fun = builder.declaredWorkflows.find((x) => x.workflow === workflow2);
    if (!fun) {
      return `/* missing workflow function ${node.workflowUri} */`;
    }
    const args = nodeInstance.inputs.map((x) => {
      const source = x.inflowPipe?.source;
      if (!source) {
        return `undefined /* disconnected */`;
      }
      if (source.kind === `data`) {
        return source.json;
      }
      if (source.kind === `input`) {
        return source.input.runs?.nameInScope ?? source.input.name;
      }
      if (source.kind === `output`) {
        return source.output.runs?.nameInScope ?? source.output.name;
      }
      if (source.kind === `operator-output`) {
        return `undefined /* an operator cannot an argument of the same node */`;
      }
      return `undefined /* unknown source.kind ${source.kind} */`;
    });
    const funCall = fun.getCallExpression(args);
    const outputsItems = nodeInstance.outputs.map((x) => {
      return x.runs?.nameInScope ?? x.name;
    });
    const outputsExpression = SIMPLIFY_SINGLE_RETURN && outputsItems.length === 1 ? `${outputsItems[0]}` : outputsItems.length ? `{ ${outputsItems.join(`, `)} }` : `/* missing output item */ _unknown`;
    return `const ${outputsExpression} = ${funCall};`;
  });
  const workflowNodeInstance = dataset.allNodeInstances.find(
    (x) => x.node.workflowUri === workflow.workflowUri
  );
  const getName_workflowInput = (workflowInput) => {
    return workflowNodeInstance?.inputs.find((x) => x.workflowInput === workflowInput)?.runs?.nameInScope;
  };
  const getName_workflowOutput = (workflowOutput) => {
    return workflowNodeInstance?.outputs.find((x) => x.workflowOutput === workflowOutput)?.runs?.nameInScope;
  };
  const returnStatement = (() => {
    if (!workflow.outputs.length) {
      return void 0;
    }
    const returnItems = workflow.outputs.map((x) => ({
      name: `${getName_workflowOutput(x) ?? x.name}`,
      rename: `${getName_workflowOutput(x) ?? x.name}`
      // rename: `${x.name}`,
    }));
    if (SIMPLIFY_SINGLE_RETURN && workflow.outputs.length === 1) {
      return `return ${returnItems[0].name};`;
    }
    return `return { ${returnItems.map((x) => x.name === x.rename ? `${x.name}` : `${x.rename}: ${x.name}`).join(`, `)} };`;
  })();
  const parameters = workflow.inputs.map(
    (workflowInput) => generateDeclaration(workflowInput, getName_workflowInput(workflowInput))
  );
  const parametersCode = parameters.join(`, `).length > 40 ? `
${indent(`${parameters.join(`,
`)},`)}
` : parameters.join(`, `);
  const functionName = getFunctionName(workflow);
  const content = `function ${functionName}(${parametersCode}) {
${indent(nestedFunctionDeclarations.map((x) => x.content).join(`

`))}${indent(
    [...statements, returnStatement].filter((x) => x).join(`
`)
  )}}`;
  return {
    content
  };
};
var getFunctionName = (workflow) => {
  const functionName = workflow.workflowUri.replace(/[^A-Za-z0-9]+/g, `_`);
  return functionName;
};
var generateDeclaration = (x, nameInScope) => {
  return `${nameInScope ?? x.name}${x.type.nullable ? `?` : ``}: ${generateType(x.type)}${x.type.array ? `[]` : ``}`;
};
var generateType = (type) => {
  if (type.kind === `literal`) {
    if (type.type === `string`) {
      return `\`${type.value}\``;
    }
    return `${type.value}`;
  }
  if (type.kind === `simple`) {
    if (type.type === `int` || type.type === `float`) {
      return `number`;
    }
    return `${type.type}`;
  }
  if (type.kind === `object`) {
    return `{${type.fields.map((x) => generateDeclaration(x)).join(`,
`)}}`;
  }
  if (type.kind === `type`) {
    return type.name;
  }
  if (type.kind === `node`) {
    return `/* TODO: function callbacks */ fun_${type.node.nodeId}`;
  }
  return `unknown`;
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
      node.runs.splice(
        node.runs.findIndex((x) => x.key === key),
        1
      );
    }
    const code = node.workflow.body.kind === `operator` ? {
      content: `${create_getCallExpression(node.workflow)(
        node.workflow.inputs.map((workflowInput) => {
          const nodeInput = node.inputs.find(
            (x) => x.workflowInput === workflowInput
          );
          const valueRaw = nodeInput?.runs?.value;
          const value = typeof valueRaw !== `object` ? `${valueRaw}` : void 0;
          const name = nodeInput?.runs?.nameInScope ?? workflowInput.name;
          return value ? `${name}(${value})` : name;
        })
      )}`
    } : convertWorkflowToFunctionDeclaration(node.workflow, node.dataset);
    node.runs.unshift({
      key,
      code: code?.content,
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
  const global = { outputs: [] };
  const allNodesSorted = [];
  const addNodeRecursive = (parent) => {
    if (allNodesSorted.includes(parent)) {
      return;
    }
    allNodesSorted.push(parent);
    [...parent.children].reverse().forEach((x) => addNodeRecursive(x));
    parent.inputs.forEach((x) => {
      if (x.inflowPipe?.source.kind === `input`) {
        addNodeRecursive(x.inflowPipe.source.input.nodeInstance);
      }
    });
  };
  dataset.rootNodeInstances.forEach((x) => {
    addNodeRecursive(x);
  });
  dataset.allNodeInstances.forEach((x) => {
    addNodeRecursive(x);
  });
  allNodesSorted.forEach((x) => {
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
  if (source.kind === `conditional-output`) {
    if (!source.condition.runs?.value) {
      input.runs = {
        ...input.runs,
        value: source.default.runs?.value,
        dependencies: [source.condition, source.default]
      };
      return;
    }
    input.runs = {
      ...input.runs,
      value: source.output.runs?.value,
      dependencies: [source.condition, source.output]
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
  return <>
    {nodeInstance.workflow.name.endsWith(`if-body`) && <View5 className="basis-[100%] h-0" />}
    <View5 className=""><MoveableView
      position={{
        x: position.x,
        y: position.y,
        scale: position.scale
      }}
      onMove={moveNode}
      mouseButton={4 /* Middle */}
    ><View5 className="flex-col relative bg-slate-950/75 border-blue-100 border-solid border-[1px] rounded">
      <Text6 className="text-yellow-400 self-center">{`${nodeInstance.workflow.name} #${nodeInstance.key}`}</Text6>
      <View5 className="flex-col flex-1">
        <View5 className="flex-col justify-start items-start p-1">{workflow.inputs.map((input) => <React4.Fragment key={input.name}><NodeConnection
          variable={input}
          connection={nodeInstance.inputs.find(
            (x) => x.workflowInput === input
          )}
          hideOutput={nodeInstance.workflow.body.kind !== `nodes`}
        /></React4.Fragment>)}</View5>
        <View5 className="flex-1"><View5 className="flex-row">
          {
            /* <View className='flex-1' /> */
          }
          <View5 className="flex-row flex-wrap max-w-[100vw] m-[-1px]">
            {nodeInstance.children.length && <>{nodeInstance.children.map((x) => <React4.Fragment key={x.key}><NodeView nodeInstance={x} /></React4.Fragment>)}</>}
            {workflow.body.kind === `operator` && <><Text6 className="text-blue-600">{workflow.body.operator}</Text6></>}
          </View5>
          {
            /* <View className='flex-1 justify-start items-end'>
                <Text className='text-white text-[10px]'>⛏</Text>
            </View> */
          }
        </View5></View5>
        <View5 className="flex-col justify-end items-end p-1">{workflow.outputs.map((output) => <React4.Fragment key={output.name}><NodeConnection
          variable={output}
          connection={nodeInstance.outputs.find(
            (x) => x.workflowOutput === output
          )}
          hideInput={nodeInstance.workflow.body.kind !== `nodes`}
        /></React4.Fragment>)}</View5>
      </View5>
      <Footer nodeInstance={nodeInstance} />
    </View5></MoveableView></View5>
  </>;
};
var Footer = ({ nodeInstance }) => {
  const tabs = [`none`, `sheet`, `code`, `both`];
  const [tab, setTab] = useState4(
    nodeInstance.workflow.body.kind === `operator` ? `code` : `sheet`
  );
  return <>
    <View5 className="flex-row">{tabs.map((x) => <React4.Fragment key={x}><Pressable3 onPress={() => setTab(x)}><View5 className={`p-1 bg-gray-200 ${tab === x ? `` : `opacity-50`}`}><Text6>{x}</Text6></View5></Pressable3></React4.Fragment>)}</View5>
    {(tab === `code` || tab === `both`) && <View5 className="bg-gray-200"><Text6 className="whitespace-pre">{nodeInstance.runs?.[0]?.code}</Text6></View5>}
    {(tab === `sheet` || tab === `both`) && <View5 className="bg-gray-200"><NodeInstanceSheetView nodeInstance={nodeInstance} /></View5>}
  </>;
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
        const nodeWorkflowInput = nodeInstance.parent?.inputs.find(
          (x) => x.name === pipeSource.workflowInputName
        );
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
        if (nodeInstance.workflow.body.kind === `nodes` && nodeInstance.workflow.body.control === `if`) {
          return {
            kind: `conditional-output`,
            output: innerNodeOutput,
            condition: nodeInstance.inputs.find((x) => x.name === `condition`),
            default: nodeInstance.inputs.find((x) => x.name === pipeSourceName)
          };
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
  return <View7 className="bg-slate-900 w-full h-full max-h-[100vh] overflow-hidden"><MoveableView
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdGVzdHMvY29kZS8wMDA1LWxvZ2ljLzAzLnRzLndvcmtmbG93Lmpzb24iLCAiLi4vLi4vLi4vcGFja2FnZXMvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjay50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLWNhbnZhcy12aWV3LnRzeCIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc0Z1bmN0aW9uLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2NyZWF0ZUVycm9yQ2xhc3MudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9hcnJSZW1vdmUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL1N1YnNjcmlwdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvY29uZmlnLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL25vb3AudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL05vdGlmaWNhdGlvbkZhY3Rvcmllcy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9lcnJvckNvbnRleHQudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL1N1YnNjcmliZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3N5bWJvbC9vYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lkZW50aXR5LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL3BpcGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL09ic2VydmFibGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvbGlmdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL09wZXJhdG9yU3Vic2NyaWJlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvU3ViamVjdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzU2NoZWR1bGVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2FyZ3MudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNBcnJheUxpa2UudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNQcm9taXNlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNBc3luY0l0ZXJhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3N5bWJvbC9pdGVyYXRvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc0l0ZXJhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2lubmVyRnJvbS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9leGVjdXRlU2NoZWR1bGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9vYnNlcnZlT24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9zdWJzY3JpYmVPbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlT2JzZXJ2YWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlUHJvbWlzZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXJyYXkudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUl0ZXJhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVBc3luY0l0ZXJhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZWQudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29ic2VydmFibGUvZnJvbS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL21hcC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9tYXBPbmVPck1hbnlBcmdzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2FyZ3NBcmdBcnJheU9yT2JqZWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2NyZWF0ZU9iamVjdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb21iaW5lTGF0ZXN0LnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL21vdmVhYmxlLXZpZXcudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL25vZGUtaW5zdGFuY2Utdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvcGlwZXMudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL3NoZWV0LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS92YWx1ZS12aWV3LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLW5hbWVzLnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91dGlscy9qc29uLnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL2FuYWx5c2lzL2hhc2gudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvY29kZS1nZW5lcmF0aW9uL2ZpbGUudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvYW5hbHlzaXMvY2FsY3VsYXRlLXJ1bi50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLWZsb3ctdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvYW5hbHlzaXMvbG9hZC1kYXRhLnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvaW5kZXgudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvYXBwL3NyYy9pbmRleC50c3giLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyQmFja2dyb3VuZENvbG9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0Jhck5ldHdvcmtBY3Rpdml0eUluZGljYXRvclZpc2libGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFySGlkZGVuLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhclN0eWxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3N0eWxlVG9CYXJTdHlsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJUcmFuc2x1Y2VudC50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9jbC9zcmMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL2NsL3NyYy9kZXNpZ24vdGFpbHdpbmQvdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcbiAgXCJuYW1lXCI6IFwiXCIsXG4gIFwid29ya2Zsb3dVcmlcIjogXCJcIixcbiAgXCJpbnB1dHNcIjogW10sXG4gIFwib3V0cHV0c1wiOiBbXSxcbiAgXCJib2R5XCI6IHtcbiAgICBcImtpbmRcIjogXCJub2Rlc1wiLFxuICAgIFwibm9kZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50c1wiLFxuICAgICAgICBcIm5vZGVJZFwiOiBcIm1haW5cIixcbiAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIndvcmtmbG93c1wiOiBbXG4gICAge1xuICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHNcIixcbiAgICAgIFwibmFtZVwiOiBcImZpbGUudHNcIixcbiAgICAgIFwiaW5wdXRzXCI6IFtdLFxuICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czo0XCIsXG4gICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjRcIixcbiAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIndvcmtmbG93c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9hLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy9hLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCJkZWNsYXJhdGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYi1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvYi1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCJkZWNsYXJhdGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvPlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvPlwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcIj5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2lmLWJvZHlcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzL2lmLWJvZHlcIixcbiAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbmRpdGlvblwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHMvaWYtYm9keTozXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzL2lmLWJvZHk6M1wiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJhXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJ3b3JrZmxvd3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5L2I9XCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvaWYtYm9keS9iPVwiLFxuICAgICAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib2xkXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImlnbm9yZWRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcIj1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5Lz5cIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy9pZi1ib2R5Lz5cIixcbiAgICAgICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiPlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keVwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keVwiLFxuICAgICAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5L2lmLWJvZHk6MVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5L2lmLWJvZHk6MlwiLFxuICAgICAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcIndvcmtmbG93c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvaWYtYm9keS9pZi1ib2R5L2I9XCIsXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keS9iPVwiLFxuICAgICAgICAgICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImlnbm9yZWRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiPVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5L2lmLWJvZHkvYT1cIixcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvaWYtYm9keS9pZi1ib2R5L2E9XCIsXG4gICAgICAgICAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiaWdub3JlZFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCI9XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZXNcIixcbiAgICAgICAgICAgICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keToxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keS9iPVwiLFxuICAgICAgICAgICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImpzb25cIjogXCI0NlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtmbG93SW5wdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHMvaWYtYm9keS9pZi1ib2R5OjJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvaWYtYm9keS9pZi1ib2R5L2E9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwianNvblwiOiBcIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya2Zsb3dJbnB1dE5hbWVcIjogXCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29udHJvbFwiOiBcImlmXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVzXCIsXG4gICAgICAgICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5OjFcIixcbiAgICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5L2I9XCIsXG4gICAgICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiZGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICBcImpzb25cIjogXCI0M1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3b3JrZmxvd0lucHV0TmFtZVwiOiBcImJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5OjJcIixcbiAgICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5Lz5cIixcbiAgICAgICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid29ya2Zsb3dJbnB1dE5hbWVcIjogXCJhXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzL2lmLWJvZHk6MVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzL2lmLWJvZHk6M1wiLFxuICAgICAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keVwiLFxuICAgICAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbmRpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5OjJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHMvaWYtYm9keToxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJiXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3b3JrZmxvd0lucHV0TmFtZVwiOiBcImFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY29udHJvbFwiOiBcImlmXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImJvZHlcIjoge1xuICAgICAgICBcImtpbmRcIjogXCJub2Rlc1wiLFxuICAgICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6MVwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYS1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgXCJqc29uXCI6IFwiNDJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6MlwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYi1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6M1wiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvPlwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjFcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICBcImpzb25cIjogXCI0MFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czo0XCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5XCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czozXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjJcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czoxXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImFcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdXG59IiwgImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuLyoqIEVuc3VyZSB0aGUgaXRlbSBpcyBhbHdheXMgdGhlIGxhc3QgcmVuZGVyZWQgdmFsdWUgKi9cbmV4cG9ydCBjb25zdCB1c2VTdGFibGUgPSA8VD4oc3RhYmxlOiBUKSA9PiB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YWJsZSk7XG4gICAgcmVmLmN1cnJlbnQgPSBzdGFibGU7XG4gICAgcmV0dXJuIHJlZjtcbn07XG5cbi8qKiBFbnN1cmUgdGhlIGNhbGxiYWNrIGlzIGFsd2F5cyB0aGUgbGFzdCByZW5kZXJlZCBjYWxsYmFjaywgc28gaXQgaGFzIHJlZmVyZW5jZSB0byB0aGUgbGFzdCBzdGF0ZVxuICpcbiAqIE5vIG5lZWQgZm9yIGRlcGVuZGVuY2llcywgdGhpcyB3aWxsIHNpbXBseSBoYXZlIGFjY2VzcyB0byB0aGUgdmFsdWVzIHRoYXQgZXhpc3RlZCBpbiB0aGUgcmVuZGVyXG4gKiB3aGVuIGl0IHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgbGFzdCByZW5kZXIuXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VTdGFibGVDYWxsYmFjayA9IDxUQXJncyBleHRlbmRzIHVua25vd25bXSwgVFJldHVybj4oXG4gICAgc3RhYmxlOiAoLi4uYXJnczogVEFyZ3MpID0+IFRSZXR1cm4sXG4pID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhYmxlKTtcbiAgICByZWYuY3VycmVudCA9IHN0YWJsZTtcbiAgICBjb25zdCBjYWxsYmFjayA9IHVzZVJlZigoLi4uYXJnczogVEFyZ3MpID0+IHJlZi5jdXJyZW50KC4uLmFyZ3MpKTtcbiAgICByZXR1cm4gY2FsbGJhY2suY3VycmVudDtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgZGVsYXkgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlQ29udGV4dCwgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7IE5vZGVJbnN0YW5jZXNWaWV3IH0gZnJvbSAnLi9ub2RlLWluc3RhbmNlLXZpZXcnO1xuaW1wb3J0IHsgUGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dCwgUGlwZVZpZXdIb3N0LCBjcmVhdGVQaXBlRW5kcG9pbnRzUmVnaXN0cnkgfSBmcm9tICcuL3BpcGVzJztcbmltcG9ydCB7IFdvcmtGbG93VmlldyB9IGZyb20gJy4vd29yay1mbG93LXZpZXcnO1xuaW1wb3J0IHsgbG9hZFJ1bnRpbWUgfSBmcm9tICcuLi9hbmFseXNpcy9sb2FkLWRhdGEnO1xuaW1wb3J0IHsgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgV29ya0NhbnZhc1ZpZXcgPSAoeyB3b3JrZmxvdyB9OiB7IHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3cgfSkgPT4ge1xuICAgIGNvbnN0IG5vZGVJbnN0YW5jZXNEYXRhc2V0UmVmID0gdXNlUmVmKGxvYWRSdW50aW1lKHdvcmtmbG93KS5kYXRhc2V0KTtcbiAgICBjb25zdCBub2RlSW5zdGFuY2VzID0gbm9kZUluc3RhbmNlc0RhdGFzZXRSZWYuY3VycmVudC5yb290Tm9kZUluc3RhbmNlcztcblxuICAgIGNvbnN0IHRhYnMgPSBbYHdvcmstZmxvd2AsIGBub2RlLWluc3RhbmNlc2BdIGFzIGNvbnN0O1xuICAgIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZShgbm9kZS1pbnN0YW5jZXNgIGFzICh0eXBlb2YgdGFicylbbnVtYmVyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLXNsYXRlLTkwMCB3LWZ1bGwgaC1mdWxsIG1heC1oLVsxMDB2aF0gb3ZlcmZsb3ctaGlkZGVuJz5cbiAgICAgICAgICAgIDxNb3ZlYWJsZVZpZXdcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uTW92ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG1vdXNlQnV0dG9uPXtNb3VzZUJ1dHRvbi5NaWRkbGV9XG4gICAgICAgICAgICAgICAgZW5hYmxlU2NhbGluZ1xuICAgICAgICAgICAgICAgIHdob2xlQ2FudmFzXG4gICAgICAgICAgICAgICAgb3V0ZXJDbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwnXG4gICAgICAgICAgICAgICAgaW5uZXJDbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwnXG4gICAgICAgICAgICAgICAgSGVhZGVyQ29tcG9uZW50PXt1c2VTdGFibGVDYWxsYmFjaygoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYnMubWFwKHggPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9eygpID0+IHNldFRhYih4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMSBtLTEgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSBib3JkZXItZ3JheS04MDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiID09PSB4ID8gYGAgOiBgb3BhY2l0eS01MGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWdyYXktODAwICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIgPT09IHggPyBgYCA6IGBvcGFjaXR5LTUwYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBpcGVWaWV3Q29udGV4dEhvc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYiA9PT0gYHdvcmstZmxvd2AgJiYgPFdvcmtGbG93VmlldyB3b3JrZmxvdz17d29ya2Zsb3d9IGZ1bGwgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFiID09PSBgbm9kZS1pbnN0YW5jZXNgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZUluc3RhbmNlc1ZpZXcgbm9kZUluc3RhbmNlcz17bm9kZUluc3RhbmNlc30gZnVsbCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvUGlwZVZpZXdDb250ZXh0SG9zdD5cbiAgICAgICAgICAgIDwvTW92ZWFibGVWaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IFBpcGVWaWV3Q29udGV4dEhvc3QgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBKU1guRWxlbWVudCB9KSA9PiB7XG4gICAgY29uc3Qgdmlld1JlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBWaWV3KTtcbiAgICBjb25zdCBob3N0UmVmID0gdXNlUmVmKG5ldyBTdWJqZWN0PFZpZXc+KCkpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VSZWYoY3JlYXRlUGlwZUVuZHBvaW50c1JlZ2lzdHJ5KCkpO1xuXG4gICAgY29uc3QgW3BpcGVzLCBzZXRQaXBlc10gPSB1c2VTdGF0ZShjb250ZXh0LmN1cnJlbnQucGlwZXMudmFsdWUpO1xuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF2aWV3UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmN1cnJlbnQuaG9zdFZpZXcgPSB2aWV3UmVmLmN1cnJlbnQ7XG4gICAgICAgIGhvc3RSZWYuY3VycmVudC5uZXh0KHZpZXdSZWYuY3VycmVudCk7XG5cbiAgICAgICAgY29uc3Qgc3ViID0gY29udGV4dC5jdXJyZW50LnBpcGVzLnN1YnNjcmliZSh2ID0+IHtcbiAgICAgICAgICAgIHNldFBpcGVzKHYpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0UGlwZXMocGlwZXMpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSwgWyF2aWV3UmVmLmN1cnJlbnRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0LmN1cnJlbnR9PlxuICAgICAgICAgICAgPFZpZXcgcmVmPXt2aWV3UmVmfSBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwnPlxuICAgICAgICAgICAgICAgIDxNb3ZlYWJsZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICAgICAgICAgIHsoeyBwb3NpdGlvbjogY29udGFpbmVyUG9zaXRpb24gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmVhYmxlQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBjb250YWluZXJQb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvbGVDYW52YXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZVZpZXdIb3N0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb3ZlYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Nb3ZlYWJsZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvUGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcbiIsICIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlO1xuICAgIGlmIChhc3luYykge1xuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xuICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XG4gICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG59O1xuIiwgIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWU6IGFueSk6IHZhbHVlIGlzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsICIvKipcbiAqIFVzZWQgdG8gY3JlYXRlIEVycm9yIHN1YmNsYXNzZXMgdW50aWwgdGhlIGNvbW11bml0eSBtb3ZlcyBhd2F5IGZyb20gRVM1LlxuICpcbiAqIFRoaXMgaXMgYmVjYXVzZSBjb21waWxpbmcgZnJvbSBUeXBlU2NyaXB0IGRvd24gdG8gRVM1IGhhcyBpc3N1ZXMgd2l0aCBzdWJjbGFzc2luZyBFcnJvcnNcbiAqIGFzIHdlbGwgYXMgb3RoZXIgYnVpbHQtaW4gdHlwZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTIxMjNcbiAqXG4gKiBAcGFyYW0gY3JlYXRlSW1wbCBBIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBhY3R1YWwgY29uc3RydWN0b3IgaW1wbGVtZW50YXRpb24uIFRoZSByZXR1cm5lZFxuICogZnVuY3Rpb24gc2hvdWxkIGJlIGEgbmFtZWQgZnVuY3Rpb24gdGhhdCBjYWxscyBgX3N1cGVyYCBpbnRlcm5hbGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXJyb3JDbGFzczxUPihjcmVhdGVJbXBsOiAoX3N1cGVyOiBhbnkpID0+IGFueSk6IFQge1xuICBjb25zdCBfc3VwZXIgPSAoaW5zdGFuY2U6IGFueSkgPT4ge1xuICAgIEVycm9yLmNhbGwoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gIH07XG5cbiAgY29uc3QgY3RvckZ1bmMgPSBjcmVhdGVJbXBsKF9zdXBlcik7XG4gIGN0b3JGdW5jLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgY3RvckZ1bmMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvckZ1bmM7XG4gIHJldHVybiBjdG9yRnVuYztcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcblxuZXhwb3J0IGludGVyZmFjZSBVbnN1YnNjcmlwdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICByZWFkb25seSBlcnJvcnM6IGFueVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuc3Vic2NyaXB0aW9uRXJyb3JDdG9yIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbC4gRG8gbm90IGNvbnN0cnVjdCBlcnJvciBpbnN0YW5jZXMuXG4gICAqIENhbm5vdCBiZSB0YWdnZWQgYXMgaW50ZXJuYWw6IGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdGl2ZVgvcnhqcy9pc3N1ZXMvNjI2OVxuICAgKi9cbiAgbmV3IChlcnJvcnM6IGFueVtdKTogVW5zdWJzY3JpcHRpb25FcnJvcjtcbn1cblxuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiBvbmUgb3IgbW9yZSBlcnJvcnMgaGF2ZSBvY2N1cnJlZCBkdXJpbmcgdGhlXG4gKiBgdW5zdWJzY3JpYmVgIG9mIGEge0BsaW5rIFN1YnNjcmlwdGlvbn0uXG4gKi9cbmV4cG9ydCBjb25zdCBVbnN1YnNjcmlwdGlvbkVycm9yOiBVbnN1YnNjcmlwdGlvbkVycm9yQ3RvciA9IGNyZWF0ZUVycm9yQ2xhc3MoXG4gIChfc3VwZXIpID0+XG4gICAgZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwodGhpczogYW55LCBlcnJvcnM6IChFcnJvciB8IHN0cmluZylbXSkge1xuICAgICAgX3N1cGVyKHRoaXMpO1xuICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3JzXG4gICAgICAgID8gYCR7ZXJyb3JzLmxlbmd0aH0gZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcbiR7ZXJyb3JzLm1hcCgoZXJyLCBpKSA9PiBgJHtpICsgMX0pICR7ZXJyLnRvU3RyaW5nKCl9YCkuam9pbignXFxuICAnKX1gXG4gICAgICAgIDogJyc7XG4gICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG4pO1xuIiwgIi8qKlxuICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gYW4gYXJyYXksIG11dGF0aW5nIGl0LlxuICogQHBhcmFtIGFyciBUaGUgYXJyYXkgdG8gcmVtb3ZlIHRoZSBpdGVtIGZyb21cbiAqIEBwYXJhbSBpdGVtIFRoZSBpdGVtIHRvIHJlbW92ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJyUmVtb3ZlPFQ+KGFycjogVFtdIHwgdW5kZWZpbmVkIHwgbnVsbCwgaXRlbTogVCkge1xuICBpZiAoYXJyKSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAwIDw9IGluZGV4ICYmIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IFVuc3Vic2NyaXB0aW9uRXJyb3IgfSBmcm9tICcuL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25MaWtlLCBUZWFyZG93bkxvZ2ljLCBVbnN1YnNjcmliYWJsZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGRpc3Bvc2FibGUgcmVzb3VyY2UsIHN1Y2ggYXMgdGhlIGV4ZWN1dGlvbiBvZiBhbiBPYnNlcnZhYmxlLiBBXG4gKiBTdWJzY3JpcHRpb24gaGFzIG9uZSBpbXBvcnRhbnQgbWV0aG9kLCBgdW5zdWJzY3JpYmVgLCB0aGF0IHRha2VzIG5vIGFyZ3VtZW50XG4gKiBhbmQganVzdCBkaXNwb3NlcyB0aGUgcmVzb3VyY2UgaGVsZCBieSB0aGUgc3Vic2NyaXB0aW9uLlxuICpcbiAqIEFkZGl0aW9uYWxseSwgc3Vic2NyaXB0aW9ucyBtYXkgYmUgZ3JvdXBlZCB0b2dldGhlciB0aHJvdWdoIHRoZSBgYWRkKClgXG4gKiBtZXRob2QsIHdoaWNoIHdpbGwgYXR0YWNoIGEgY2hpbGQgU3Vic2NyaXB0aW9uIHRvIHRoZSBjdXJyZW50IFN1YnNjcmlwdGlvbi5cbiAqIFdoZW4gYSBTdWJzY3JpcHRpb24gaXMgdW5zdWJzY3JpYmVkLCBhbGwgaXRzIGNoaWxkcmVuIChhbmQgaXRzIGdyYW5kY2hpbGRyZW4pXG4gKiB3aWxsIGJlIHVuc3Vic2NyaWJlZCBhcyB3ZWxsLlxuICpcbiAqIEBjbGFzcyBTdWJzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvbiBpbXBsZW1lbnRzIFN1YnNjcmlwdGlvbkxpa2Uge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgcHVibGljIHN0YXRpYyBFTVBUWSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZW1wdHkgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgZW1wdHkuY2xvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gZW1wdHk7XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIEEgZmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoaXMgU3Vic2NyaXB0aW9uIGhhcyBhbHJlYWR5IGJlZW4gdW5zdWJzY3JpYmVkLlxuICAgKi9cbiAgcHVibGljIGNsb3NlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3BhcmVudGFnZTogU3Vic2NyaXB0aW9uW10gfCBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgcmVnaXN0ZXJlZCBmaW5hbGl6ZXJzIHRvIGV4ZWN1dGUgdXBvbiB1bnN1YnNjcmlwdGlvbi4gQWRkaW5nIGFuZCByZW1vdmluZyBmcm9tIHRoaXNcbiAgICogbGlzdCBvY2N1cnMgaW4gdGhlIHtAbGluayAjYWRkfSBhbmQge0BsaW5rICNyZW1vdmV9IG1ldGhvZHMuXG4gICAqL1xuICBwcml2YXRlIF9maW5hbGl6ZXJzOiBFeGNsdWRlPFRlYXJkb3duTG9naWMsIHZvaWQ+W10gfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogQHBhcmFtIGluaXRpYWxUZWFyZG93biBBIGZ1bmN0aW9uIGV4ZWN1dGVkIGZpcnN0IGFzIHBhcnQgb2YgdGhlIGZpbmFsaXphdGlvblxuICAgKiBwcm9jZXNzIHRoYXQgaXMga2lja2VkIG9mZiB3aGVuIHtAbGluayAjdW5zdWJzY3JpYmV9IGlzIGNhbGxlZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5pdGlhbFRlYXJkb3duPzogKCkgPT4gdm9pZCkge31cblxuICAvKipcbiAgICogRGlzcG9zZXMgdGhlIHJlc291cmNlcyBoZWxkIGJ5IHRoZSBzdWJzY3JpcHRpb24uIE1heSwgZm9yIGluc3RhbmNlLCBjYW5jZWxcbiAgICogYW4gb25nb2luZyBPYnNlcnZhYmxlIGV4ZWN1dGlvbiBvciBjYW5jZWwgYW55IG90aGVyIHR5cGUgb2Ygd29yayB0aGF0XG4gICAqIHN0YXJ0ZWQgd2hlbiB0aGUgU3Vic2NyaXB0aW9uIHdhcyBjcmVhdGVkLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgbGV0IGVycm9yczogYW55W10gfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG5cbiAgICAgIC8vIFJlbW92ZSB0aGlzIGZyb20gaXQncyBwYXJlbnRzLlxuICAgICAgY29uc3QgeyBfcGFyZW50YWdlIH0gPSB0aGlzO1xuICAgICAgaWYgKF9wYXJlbnRhZ2UpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHBhcmVudCBvZiBfcGFyZW50YWdlKSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfcGFyZW50YWdlLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGluaXRpYWxUZWFyZG93bjogaW5pdGlhbEZpbmFsaXplciB9ID0gdGhpcztcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGluaXRpYWxGaW5hbGl6ZXIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaW5pdGlhbEZpbmFsaXplcigpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZXJyb3JzID0gZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IgPyBlLmVycm9ycyA6IFtlXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IF9maW5hbGl6ZXJzIH0gPSB0aGlzO1xuICAgICAgaWYgKF9maW5hbGl6ZXJzKSB7XG4gICAgICAgIHRoaXMuX2ZpbmFsaXplcnMgPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGZpbmFsaXplciBvZiBfZmluYWxpemVycykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBleGVjRmluYWxpemVyKGZpbmFsaXplcik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgPz8gW107XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lcnIuZXJyb3JzXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3IoZXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGZpbmFsaXplciB0byB0aGlzIHN1YnNjcmlwdGlvbiwgc28gdGhhdCBmaW5hbGl6YXRpb24gd2lsbCBiZSB1bnN1YnNjcmliZWQvY2FsbGVkXG4gICAqIHdoZW4gdGhpcyBzdWJzY3JpcHRpb24gaXMgdW5zdWJzY3JpYmVkLiBJZiB0aGlzIHN1YnNjcmlwdGlvbiBpcyBhbHJlYWR5IHtAbGluayAjY2xvc2VkfSxcbiAgICogYmVjYXVzZSBpdCBoYXMgYWxyZWFkeSBiZWVuIHVuc3Vic2NyaWJlZCwgdGhlbiB3aGF0ZXZlciBmaW5hbGl6ZXIgaXMgcGFzc2VkIHRvIGl0XG4gICAqIHdpbGwgYXV0b21hdGljYWxseSBiZSBleGVjdXRlZCAodW5sZXNzIHRoZSBmaW5hbGl6ZXIgaXRzZWxmIGlzIGFsc28gYSBjbG9zZWQgc3Vic2NyaXB0aW9uKS5cbiAgICpcbiAgICogQ2xvc2VkIFN1YnNjcmlwdGlvbnMgY2Fubm90IGJlIGFkZGVkIGFzIGZpbmFsaXplcnMgdG8gYW55IHN1YnNjcmlwdGlvbi4gQWRkaW5nIGEgY2xvc2VkXG4gICAqIHN1YnNjcmlwdGlvbiB0byBhIGFueSBzdWJzY3JpcHRpb24gd2lsbCByZXN1bHQgaW4gbm8gb3BlcmF0aW9uLiAoQSBub29wKS5cbiAgICpcbiAgICogQWRkaW5nIGEgc3Vic2NyaXB0aW9uIHRvIGl0c2VsZiwgb3IgYWRkaW5nIGBudWxsYCBvciBgdW5kZWZpbmVkYCB3aWxsIG5vdCBwZXJmb3JtIGFueVxuICAgKiBvcGVyYXRpb24gYXQgYWxsLiAoQSBub29wKS5cbiAgICpcbiAgICogYFN1YnNjcmlwdGlvbmAgaW5zdGFuY2VzIHRoYXQgYXJlIGFkZGVkIHRvIHRoaXMgaW5zdGFuY2Ugd2lsbCBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGVtc2VsdmVzXG4gICAqIGlmIHRoZXkgYXJlIHVuc3Vic2NyaWJlZC4gRnVuY3Rpb25zIGFuZCB7QGxpbmsgVW5zdWJzY3JpYmFibGV9IG9iamVjdHMgdGhhdCB5b3Ugd2lzaCB0byByZW1vdmVcbiAgICogd2lsbCBuZWVkIHRvIGJlIHJlbW92ZWQgbWFudWFsbHkgd2l0aCB7QGxpbmsgI3JlbW92ZX1cbiAgICpcbiAgICogQHBhcmFtIHRlYXJkb3duIFRoZSBmaW5hbGl6YXRpb24gbG9naWMgdG8gYWRkIHRvIHRoaXMgc3Vic2NyaXB0aW9uLlxuICAgKi9cbiAgYWRkKHRlYXJkb3duOiBUZWFyZG93bkxvZ2ljKTogdm9pZCB7XG4gICAgLy8gT25seSBhZGQgdGhlIGZpbmFsaXplciBpZiBpdCdzIG5vdCB1bmRlZmluZWRcbiAgICAvLyBhbmQgZG9uJ3QgYWRkIGEgc3Vic2NyaXB0aW9uIHRvIGl0c2VsZi5cbiAgICBpZiAodGVhcmRvd24gJiYgdGVhcmRvd24gIT09IHRoaXMpIHtcbiAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAvLyBJZiB0aGlzIHN1YnNjcmlwdGlvbiBpcyBhbHJlYWR5IGNsb3NlZCxcbiAgICAgICAgLy8gZXhlY3V0ZSB3aGF0ZXZlciBmaW5hbGl6ZXIgaXMgaGFuZGVkIHRvIGl0IGF1dG9tYXRpY2FsbHkuXG4gICAgICAgIGV4ZWNGaW5hbGl6ZXIodGVhcmRvd24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRlYXJkb3duIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgLy8gV2UgZG9uJ3QgYWRkIGNsb3NlZCBzdWJzY3JpcHRpb25zLCBhbmQgd2UgZG9uJ3QgYWRkIHRoZSBzYW1lIHN1YnNjcmlwdGlvblxuICAgICAgICAgIC8vIHR3aWNlLiBTdWJzY3JpcHRpb24gdW5zdWJzY3JpYmUgaXMgaWRlbXBvdGVudC5cbiAgICAgICAgICBpZiAodGVhcmRvd24uY2xvc2VkIHx8IHRlYXJkb3duLl9oYXNQYXJlbnQodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGVhcmRvd24uX2FkZFBhcmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICAodGhpcy5fZmluYWxpemVycyA9IHRoaXMuX2ZpbmFsaXplcnMgPz8gW10pLnB1c2godGVhcmRvd24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIGEgdGhpcyBzdWJzY3JpcHRpb24gYWxyZWFkeSBoYXMgYSBwYXJ0aWN1bGFyIHBhcmVudC5cbiAgICogVGhpcyB3aWxsIHNpZ25hbCB0aGF0IHRoaXMgc3Vic2NyaXB0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIHBhcmVudCBpbiBxdWVzdGlvbi5cbiAgICogQHBhcmFtIHBhcmVudCB0aGUgcGFyZW50IHRvIGNoZWNrIGZvclxuICAgKi9cbiAgcHJpdmF0ZSBfaGFzUGFyZW50KHBhcmVudDogU3Vic2NyaXB0aW9uKSB7XG4gICAgY29uc3QgeyBfcGFyZW50YWdlIH0gPSB0aGlzO1xuICAgIHJldHVybiBfcGFyZW50YWdlID09PSBwYXJlbnQgfHwgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgJiYgX3BhcmVudGFnZS5pbmNsdWRlcyhwYXJlbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcGFyZW50IHRvIHRoaXMgc3Vic2NyaXB0aW9uIHNvIGl0IGNhbiBiZSByZW1vdmVkIGZyb20gdGhlIHBhcmVudCBpZiBpdFxuICAgKiB1bnN1YnNjcmliZXMgb24gaXQncyBvd24uXG4gICAqXG4gICAqIE5PVEU6IFRISVMgQVNTVU1FUyBUSEFUIHtAbGluayBfaGFzUGFyZW50fSBIQVMgQUxSRUFEWSBCRUVOIENIRUNLRUQuXG4gICAqIEBwYXJhbSBwYXJlbnQgVGhlIHBhcmVudCBzdWJzY3JpcHRpb24gdG8gYWRkXG4gICAqL1xuICBwcml2YXRlIF9hZGRQYXJlbnQocGFyZW50OiBTdWJzY3JpcHRpb24pIHtcbiAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgdGhpcy5fcGFyZW50YWdlID0gQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSA/IChfcGFyZW50YWdlLnB1c2gocGFyZW50KSwgX3BhcmVudGFnZSkgOiBfcGFyZW50YWdlID8gW19wYXJlbnRhZ2UsIHBhcmVudF0gOiBwYXJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGEgY2hpbGQgd2hlbiBpdCBpcyByZW1vdmVkIHZpYSB7QGxpbmsgI3JlbW92ZX0uXG4gICAqIEBwYXJhbSBwYXJlbnQgVGhlIHBhcmVudCB0byByZW1vdmVcbiAgICovXG4gIHByaXZhdGUgX3JlbW92ZVBhcmVudChwYXJlbnQ6IFN1YnNjcmlwdGlvbikge1xuICAgIGNvbnN0IHsgX3BhcmVudGFnZSB9ID0gdGhpcztcbiAgICBpZiAoX3BhcmVudGFnZSA9PT0gcGFyZW50KSB7XG4gICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgYXJyUmVtb3ZlKF9wYXJlbnRhZ2UsIHBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBmaW5hbGl6ZXIgZnJvbSB0aGlzIHN1YnNjcmlwdGlvbiB0aGF0IHdhcyBwcmV2aW91c2x5IGFkZGVkIHdpdGggdGhlIHtAbGluayAjYWRkfSBtZXRob2QuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBgU3Vic2NyaXB0aW9uYCBpbnN0YW5jZXMsIHdoZW4gdW5zdWJzY3JpYmVkLCB3aWxsIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZW1zZWx2ZXNcbiAgICogZnJvbSBldmVyeSBvdGhlciBgU3Vic2NyaXB0aW9uYCB0aGV5IGhhdmUgYmVlbiBhZGRlZCB0by4gVGhpcyBtZWFucyB0aGF0IHVzaW5nIHRoZSBgcmVtb3ZlYCBtZXRob2RcbiAgICogaXMgbm90IGEgY29tbW9uIHRoaW5nIGFuZCBzaG91bGQgYmUgdXNlZCB0aG91Z2h0ZnVsbHkuXG4gICAqXG4gICAqIElmIHlvdSBhZGQgdGhlIHNhbWUgZmluYWxpemVyIGluc3RhbmNlIG9mIGEgZnVuY3Rpb24gb3IgYW4gdW5zdWJzY3JpYmFibGUgb2JqZWN0IHRvIGEgYFN1YnNjcmlwdGlvbmAgaW5zdGFuY2VcbiAgICogbW9yZSB0aGFuIG9uY2UsIHlvdSB3aWxsIG5lZWQgdG8gY2FsbCBgcmVtb3ZlYCB0aGUgc2FtZSBudW1iZXIgb2YgdGltZXMgdG8gcmVtb3ZlIGFsbCBpbnN0YW5jZXMuXG4gICAqXG4gICAqIEFsbCBmaW5hbGl6ZXIgaW5zdGFuY2VzIGFyZSByZW1vdmVkIHRvIGZyZWUgdXAgbWVtb3J5IHVwb24gdW5zdWJzY3JpcHRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB0ZWFyZG93biBUaGUgZmluYWxpemVyIHRvIHJlbW92ZSBmcm9tIHRoaXMgc3Vic2NyaXB0aW9uXG4gICAqL1xuICByZW1vdmUodGVhcmRvd246IEV4Y2x1ZGU8VGVhcmRvd25Mb2dpYywgdm9pZD4pOiB2b2lkIHtcbiAgICBjb25zdCB7IF9maW5hbGl6ZXJzIH0gPSB0aGlzO1xuICAgIF9maW5hbGl6ZXJzICYmIGFyclJlbW92ZShfZmluYWxpemVycywgdGVhcmRvd24pO1xuXG4gICAgaWYgKHRlYXJkb3duIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0ZWFyZG93bi5fcmVtb3ZlUGFyZW50KHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgRU1QVFlfU1VCU0NSSVBUSU9OID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTdWJzY3JpcHRpb24odmFsdWU6IGFueSk6IHZhbHVlIGlzIFN1YnNjcmlwdGlvbiB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24gfHxcbiAgICAodmFsdWUgJiYgJ2Nsb3NlZCcgaW4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5yZW1vdmUpICYmIGlzRnVuY3Rpb24odmFsdWUuYWRkKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnVuc3Vic2NyaWJlKSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gZXhlY0ZpbmFsaXplcihmaW5hbGl6ZXI6IFVuc3Vic2NyaWJhYmxlIHwgKCgpID0+IHZvaWQpKSB7XG4gIGlmIChpc0Z1bmN0aW9uKGZpbmFsaXplcikpIHtcbiAgICBmaW5hbGl6ZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBmaW5hbGl6ZXIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgR2xvYmFsQ29uZmlnfSBvYmplY3QgZm9yIFJ4SlMuIEl0IGlzIHVzZWQgdG8gY29uZmlndXJlIHRoaW5nc1xuICogbGlrZSBob3cgdG8gcmVhY3Qgb24gdW5oYW5kbGVkIGVycm9ycy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbmZpZzogR2xvYmFsQ29uZmlnID0ge1xuICBvblVuaGFuZGxlZEVycm9yOiBudWxsLFxuICBvblN0b3BwZWROb3RpZmljYXRpb246IG51bGwsXG4gIFByb21pc2U6IHVuZGVmaW5lZCxcbiAgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZzogZmFsc2UsXG4gIHVzZURlcHJlY2F0ZWROZXh0Q29udGV4dDogZmFsc2UsXG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIFJ4SlMsIHVzZWQgdG8gY29uZmlndXJlIHRoaW5nc1xuICogbGlrZSBob3cgdG8gcmVhY3Qgb24gdW5oYW5kbGVkIGVycm9ycy4gQWNjZXNzaWJsZSB2aWEge0BsaW5rIGNvbmZpZ31cbiAqIG9iamVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxDb25maWcge1xuICAvKipcbiAgICogQSByZWdpc3RyYXRpb24gcG9pbnQgZm9yIHVuaGFuZGxlZCBlcnJvcnMgZnJvbSBSeEpTLiBUaGVzZSBhcmUgZXJyb3JzIHRoYXRcbiAgICogY2Fubm90IHdlcmUgbm90IGhhbmRsZWQgYnkgY29uc3VtaW5nIGNvZGUgaW4gdGhlIHVzdWFsIHN1YnNjcmlwdGlvbiBwYXRoLiBGb3JcbiAgICogZXhhbXBsZSwgaWYgeW91IGhhdmUgdGhpcyBjb25maWd1cmVkLCBhbmQgeW91IHN1YnNjcmliZSB0byBhbiBvYnNlcnZhYmxlIHdpdGhvdXRcbiAgICogcHJvdmlkaW5nIGFuIGVycm9yIGhhbmRsZXIsIGVycm9ycyBmcm9tIHRoYXQgc3Vic2NyaXB0aW9uIHdpbGwgZW5kIHVwIGhlcmUuIFRoaXNcbiAgICogd2lsbCBfYWx3YXlzXyBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkgb24gYW5vdGhlciBqb2IgaW4gdGhlIHJ1bnRpbWUuIFRoaXMgaXMgYmVjYXVzZVxuICAgKiB3ZSBkbyBub3Qgd2FudCBlcnJvcnMgdGhyb3duIGluIHRoaXMgdXNlci1jb25maWd1cmVkIGhhbmRsZXIgdG8gaW50ZXJmZXJlIHdpdGggdGhlXG4gICAqIGJlaGF2aW9yIG9mIHRoZSBsaWJyYXJ5LlxuICAgKi9cbiAgb25VbmhhbmRsZWRFcnJvcjogKChlcnI6IGFueSkgPT4gdm9pZCkgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBBIHJlZ2lzdHJhdGlvbiBwb2ludCBmb3Igbm90aWZpY2F0aW9ucyB0aGF0IGNhbm5vdCBiZSBzZW50IHRvIHN1YnNjcmliZXJzIGJlY2F1c2UgdGhleVxuICAgKiBoYXZlIGNvbXBsZXRlZCwgZXJyb3JlZCBvciBoYXZlIGJlZW4gZXhwbGljaXRseSB1bnN1YnNjcmliZWQuIEJ5IGRlZmF1bHQsIG5leHQsIGNvbXBsZXRlXG4gICAqIGFuZCBlcnJvciBub3RpZmljYXRpb25zIHNlbnQgdG8gc3RvcHBlZCBzdWJzY3JpYmVycyBhcmUgbm9vcHMuIEhvd2V2ZXIsIHNvbWV0aW1lcyBjYWxsZXJzXG4gICAqIG1pZ2h0IHdhbnQgYSBkaWZmZXJlbnQgYmVoYXZpb3IuIEZvciBleGFtcGxlLCB3aXRoIHNvdXJjZXMgdGhhdCBhdHRlbXB0IHRvIHJlcG9ydCBlcnJvcnNcbiAgICogdG8gc3RvcHBlZCBzdWJzY3JpYmVycywgYSBjYWxsZXIgY2FuIGNvbmZpZ3VyZSBSeEpTIHRvIHRocm93IGFuIHVuaGFuZGxlZCBlcnJvciBpbnN0ZWFkLlxuICAgKiBUaGlzIHdpbGwgX2Fsd2F5c18gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5IG9uIGFub3RoZXIgam9iIGluIHRoZSBydW50aW1lLiBUaGlzIGlzIGJlY2F1c2VcbiAgICogd2UgZG8gbm90IHdhbnQgZXJyb3JzIHRocm93biBpbiB0aGlzIHVzZXItY29uZmlndXJlZCBoYW5kbGVyIHRvIGludGVyZmVyZSB3aXRoIHRoZVxuICAgKiBiZWhhdmlvciBvZiB0aGUgbGlicmFyeS5cbiAgICovXG4gIG9uU3RvcHBlZE5vdGlmaWNhdGlvbjogKChub3RpZmljYXRpb246IE9ic2VydmFibGVOb3RpZmljYXRpb248YW55Piwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB2b2lkKSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBwcm9taXNlIGNvbnN0cnVjdG9yIHVzZWQgYnkgZGVmYXVsdCBmb3Ige0BsaW5rIE9ic2VydmFibGUjdG9Qcm9taXNlIHRvUHJvbWlzZX0gYW5kIHtAbGluayBPYnNlcnZhYmxlI2ZvckVhY2ggZm9yRWFjaH1cbiAgICogbWV0aG9kcy5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgQXMgb2YgdmVyc2lvbiA4LCBSeEpTIHdpbGwgbm8gbG9uZ2VyIHN1cHBvcnQgdGhpcyBzb3J0IG9mIGluamVjdGlvbiBvZiBhXG4gICAqIFByb21pc2UgY29uc3RydWN0b3IuIElmIHlvdSBuZWVkIGEgUHJvbWlzZSBpbXBsZW1lbnRhdGlvbiBvdGhlciB0aGFuIG5hdGl2ZSBwcm9taXNlcyxcbiAgICogcGxlYXNlIHBvbHlmaWxsL3BhdGNoIFByb21pc2UgYXMgeW91IHNlZSBhcHByb3ByaWF0ZS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgUHJvbWlzZT86IFByb21pc2VDb25zdHJ1Y3Rvckxpa2U7XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHR1cm5zIG9uIHN5bmNocm9ub3VzIGVycm9yIHJldGhyb3dpbmcsIHdoaWNoIGlzIGEgZGVwcmVjYXRlZCBiZWhhdmlvclxuICAgKiBpbiB2NiBhbmQgaGlnaGVyLiBUaGlzIGJlaGF2aW9yIGVuYWJsZXMgYmFkIHBhdHRlcm5zIGxpa2Ugd3JhcHBpbmcgYSBzdWJzY3JpYmVcbiAgICogY2FsbCBpbiBhIHRyeS9jYXRjaCBibG9jay4gSXQgYWxzbyBlbmFibGVzIHByb2R1Y2VyIGludGVyZmVyZW5jZSwgYSBuYXN0eSBidWdcbiAgICogd2hlcmUgYSBtdWx0aWNhc3QgY2FuIGJlIGJyb2tlbiBmb3IgYWxsIG9ic2VydmVycyBieSBhIGRvd25zdHJlYW0gY29uc3VtZXIgd2l0aFxuICAgKiBhbiB1bmhhbmRsZWQgZXJyb3IuIERPIE5PVCBVU0UgVEhJUyBGTEFHIFVOTEVTUyBJVCdTIE5FRURFRCBUTyBCVVkgVElNRVxuICAgKiBGT1IgTUlHUkFUSU9OIFJFQVNPTlMuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIEFzIG9mIHZlcnNpb24gOCwgUnhKUyB3aWxsIG5vIGxvbmdlciBzdXBwb3J0IHN5bmNocm9ub3VzIHRocm93aW5nXG4gICAqIG9mIHVuaGFuZGxlZCBlcnJvcnMuIEFsbCBlcnJvcnMgd2lsbCBiZSB0aHJvd24gb24gYSBzZXBhcmF0ZSBjYWxsIHN0YWNrIHRvIHByZXZlbnQgYmFkXG4gICAqIGJlaGF2aW9ycyBkZXNjcmliZWQgYWJvdmUuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIGVuYWJsZXMgYW4gYXMtb2YteWV0IHVuZG9jdW1lbnRlZCBmZWF0dXJlIGZyb20gdjU6IFRoZSBhYmlsaXR5IHRvIGFjY2Vzc1xuICAgKiBgdW5zdWJzY3JpYmUoKWAgdmlhIGB0aGlzYCBjb250ZXh0IGluIGBuZXh0YCBmdW5jdGlvbnMgY3JlYXRlZCBpbiBvYnNlcnZlcnMgcGFzc2VkXG4gICAqIHRvIGBzdWJzY3JpYmVgLlxuICAgKlxuICAgKiBUaGlzIGlzIGJlaW5nIHJlbW92ZWQgYmVjYXVzZSB0aGUgcGVyZm9ybWFuY2Ugd2FzIHNldmVyZWx5IHByb2JsZW1hdGljLCBhbmQgaXQgY291bGQgYWxzbyBjYXVzZVxuICAgKiBpc3N1ZXMgd2hlbiB0eXBlcyBvdGhlciB0aGFuIFBPSk9zIGFyZSBwYXNzZWQgdG8gc3Vic2NyaWJlIGFzIHN1YnNjcmliZXJzLCBhcyB0aGV5IHdpbGwgbGlrZWx5IGhhdmVcbiAgICogdGhlaXIgYHRoaXNgIGNvbnRleHQgb3ZlcndyaXR0ZW4uXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIEFzIG9mIHZlcnNpb24gOCwgUnhKUyB3aWxsIG5vIGxvbmdlciBzdXBwb3J0IGFsdGVyaW5nIHRoZVxuICAgKiBjb250ZXh0IG9mIG5leHQgZnVuY3Rpb25zIHByb3ZpZGVkIGFzIHBhcnQgb2YgYW4gb2JzZXJ2ZXIgdG8gU3Vic2NyaWJlLiBJbnN0ZWFkLFxuICAgKiB5b3Ugd2lsbCBoYXZlIGFjY2VzcyB0byBhIHN1YnNjcmlwdGlvbiBvciBhIHNpZ25hbCBvciB0b2tlbiB0aGF0IHdpbGwgYWxsb3cgeW91IHRvIGRvIHRoaW5ncyBsaWtlXG4gICAqIHVuc3Vic2NyaWJlIGFuZCB0ZXN0IGNsb3NlZCBzdGF0dXMuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIHVzZURlcHJlY2F0ZWROZXh0Q29udGV4dDogYm9vbGVhbjtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRpbWVySGFuZGxlIH0gZnJvbSAnLi90aW1lckhhbmRsZSc7XG50eXBlIFNldFRpbWVvdXRGdW5jdGlvbiA9IChoYW5kbGVyOiAoKSA9PiB2b2lkLCB0aW1lb3V0PzogbnVtYmVyLCAuLi5hcmdzOiBhbnlbXSkgPT4gVGltZXJIYW5kbGU7XG50eXBlIENsZWFyVGltZW91dEZ1bmN0aW9uID0gKGhhbmRsZTogVGltZXJIYW5kbGUpID0+IHZvaWQ7XG5cbmludGVyZmFjZSBUaW1lb3V0UHJvdmlkZXIge1xuICBzZXRUaW1lb3V0OiBTZXRUaW1lb3V0RnVuY3Rpb247XG4gIGNsZWFyVGltZW91dDogQ2xlYXJUaW1lb3V0RnVuY3Rpb247XG4gIGRlbGVnYXRlOlxuICAgIHwge1xuICAgICAgICBzZXRUaW1lb3V0OiBTZXRUaW1lb3V0RnVuY3Rpb247XG4gICAgICAgIGNsZWFyVGltZW91dDogQ2xlYXJUaW1lb3V0RnVuY3Rpb247XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCB0aW1lb3V0UHJvdmlkZXI6IFRpbWVvdXRQcm92aWRlciA9IHtcbiAgLy8gV2hlbiBhY2Nlc3NpbmcgdGhlIGRlbGVnYXRlLCB1c2UgdGhlIHZhcmlhYmxlIHJhdGhlciB0aGFuIGB0aGlzYCBzbyB0aGF0XG4gIC8vIHRoZSBmdW5jdGlvbnMgY2FuIGJlIGNhbGxlZCB3aXRob3V0IGJlaW5nIGJvdW5kIHRvIHRoZSBwcm92aWRlci5cbiAgc2V0VGltZW91dChoYW5kbGVyOiAoKSA9PiB2b2lkLCB0aW1lb3V0PzogbnVtYmVyLCAuLi5hcmdzKSB7XG4gICAgY29uc3QgeyBkZWxlZ2F0ZSB9ID0gdGltZW91dFByb3ZpZGVyO1xuICAgIGlmIChkZWxlZ2F0ZT8uc2V0VGltZW91dCkge1xuICAgICAgcmV0dXJuIGRlbGVnYXRlLnNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCwgLi4uYXJncyk7XG4gICAgfVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQsIC4uLmFyZ3MpO1xuICB9LFxuICBjbGVhclRpbWVvdXQoaGFuZGxlKSB7XG4gICAgY29uc3QgeyBkZWxlZ2F0ZSB9ID0gdGltZW91dFByb3ZpZGVyO1xuICAgIHJldHVybiAoZGVsZWdhdGU/LmNsZWFyVGltZW91dCB8fCBjbGVhclRpbWVvdXQpKGhhbmRsZSBhcyBhbnkpO1xuICB9LFxuICBkZWxlZ2F0ZTogdW5kZWZpbmVkLFxufTtcbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi4vc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlcic7XG5cbi8qKlxuICogSGFuZGxlcyBhbiBlcnJvciBvbiBhbm90aGVyIGpvYiBlaXRoZXIgd2l0aCB0aGUgdXNlci1jb25maWd1cmVkIHtAbGluayBvblVuaGFuZGxlZEVycm9yfSxcbiAqIG9yIGJ5IHRocm93aW5nIGl0IG9uIHRoYXQgbmV3IGpvYiBzbyBpdCBjYW4gYmUgcGlja2VkIHVwIGJ5IGB3aW5kb3cub25lcnJvcmAsIGBwcm9jZXNzLm9uKCdlcnJvcicpYCwgZXRjLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCB3aGVuZXZlciB0aGVyZSBpcyBhbiBlcnJvciB0aGF0IGlzIG91dC1vZi1iYW5kIHdpdGggdGhlIHN1YnNjcmlwdGlvblxuICogb3Igd2hlbiBhbiBlcnJvciBoaXRzIGEgdGVybWluYWwgYm91bmRhcnkgb2YgdGhlIHN1YnNjcmlwdGlvbiBhbmQgbm8gZXJyb3IgaGFuZGxlciB3YXMgcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIGVyciB0aGUgZXJyb3IgdG8gcmVwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnI6IGFueSkge1xuICB0aW1lb3V0UHJvdmlkZXIuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgeyBvblVuaGFuZGxlZEVycm9yIH0gPSBjb25maWc7XG4gICAgaWYgKG9uVW5oYW5kbGVkRXJyb3IpIHtcbiAgICAgIC8vIEV4ZWN1dGUgdGhlIHVzZXItY29uZmlndXJlZCBlcnJvciBoYW5kbGVyLlxuICAgICAgb25VbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaHJvdyBzbyBpdCBpcyBwaWNrZWQgdXAgYnkgdGhlIHJ1bnRpbWUncyB1bmNhdWdodCBlcnJvciBtZWNoYW5pc20uXG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9KTtcbn1cbiIsICIvKiB0c2xpbnQ6ZGlzYWJsZTpuby1lbXB0eSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IH1cbiIsICJpbXBvcnQgeyBDb21wbGV0ZU5vdGlmaWNhdGlvbiwgTmV4dE5vdGlmaWNhdGlvbiwgRXJyb3JOb3RpZmljYXRpb24gfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBBIGNvbXBsZXRpb24gb2JqZWN0IG9wdGltaXplZCBmb3IgbWVtb3J5IHVzZSBhbmQgY3JlYXRlZCB0byBiZSB0aGVcbiAqIHNhbWUgXCJzaGFwZVwiIGFzIG90aGVyIG5vdGlmaWNhdGlvbnMgaW4gdjguXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IENPTVBMRVRFX05PVElGSUNBVElPTiA9ICgoKSA9PiBjcmVhdGVOb3RpZmljYXRpb24oJ0MnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCkgYXMgQ29tcGxldGVOb3RpZmljYXRpb24pKCk7XG5cbi8qKlxuICogSW50ZXJuYWwgdXNlIG9ubHkuIENyZWF0ZXMgYW4gb3B0aW1pemVkIGVycm9yIG5vdGlmaWNhdGlvbiB0aGF0IGlzIHRoZSBzYW1lIFwic2hhcGVcIlxuICogYXMgb3RoZXIgbm90aWZpY2F0aW9ucy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JOb3RpZmljYXRpb24oZXJyb3I6IGFueSk6IEVycm9yTm90aWZpY2F0aW9uIHtcbiAgcmV0dXJuIGNyZWF0ZU5vdGlmaWNhdGlvbignRScsIHVuZGVmaW5lZCwgZXJyb3IpIGFzIGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCB1c2Ugb25seS4gQ3JlYXRlcyBhbiBvcHRpbWl6ZWQgbmV4dCBub3RpZmljYXRpb24gdGhhdCBpcyB0aGUgc2FtZSBcInNoYXBlXCJcbiAqIGFzIG90aGVyIG5vdGlmaWNhdGlvbnMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHROb3RpZmljYXRpb248VD4odmFsdWU6IFQpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vdGlmaWNhdGlvbignTicsIHZhbHVlLCB1bmRlZmluZWQpIGFzIE5leHROb3RpZmljYXRpb248VD47XG59XG5cbi8qKlxuICogRW5zdXJlcyB0aGF0IGFsbCBub3RpZmljYXRpb25zIGNyZWF0ZWQgaW50ZXJuYWxseSBoYXZlIHRoZSBzYW1lIFwic2hhcGVcIiBpbiB2OC5cbiAqXG4gKiBUT0RPOiBUaGlzIGlzIG9ubHkgZXhwb3J0ZWQgdG8gc3VwcG9ydCBhIGNyYXp5IGxlZ2FjeSB0ZXN0IGluIGBncm91cEJ5YC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKGtpbmQ6ICdOJyB8ICdFJyB8ICdDJywgdmFsdWU6IGFueSwgZXJyb3I6IGFueSkge1xuICByZXR1cm4ge1xuICAgIGtpbmQsXG4gICAgdmFsdWUsXG4gICAgZXJyb3IsXG4gIH07XG59XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxubGV0IGNvbnRleHQ6IHsgZXJyb3JUaHJvd246IGJvb2xlYW47IGVycm9yOiBhbnkgfSB8IG51bGwgPSBudWxsO1xuXG4vKipcbiAqIEhhbmRsZXMgZGVhbGluZyB3aXRoIGVycm9ycyBmb3Igc3VwZXItZ3Jvc3MgbW9kZS4gQ3JlYXRlcyBhIGNvbnRleHQsIGluIHdoaWNoXG4gKiBhbnkgc3luY2hyb25vdXNseSB0aHJvd24gZXJyb3JzIHdpbGwgYmUgcGFzc2VkIHRvIHtAbGluayBjYXB0dXJlRXJyb3J9LiBXaGljaFxuICogd2lsbCByZWNvcmQgdGhlIGVycm9yIHN1Y2ggdGhhdCBpdCB3aWxsIGJlIHJldGhyb3duIGFmdGVyIHRoZSBjYWxsIGJhY2sgaXMgY29tcGxldGUuXG4gKiBUT0RPOiBSZW1vdmUgaW4gdjhcbiAqIEBwYXJhbSBjYiBBbiBpbW1lZGlhdGVseSBleGVjdXRlZCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yQ29udGV4dChjYjogKCkgPT4gdm9pZCkge1xuICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICBjb25zdCBpc1Jvb3QgPSAhY29udGV4dDtcbiAgICBpZiAoaXNSb290KSB7XG4gICAgICBjb250ZXh0ID0geyBlcnJvclRocm93bjogZmFsc2UsIGVycm9yOiBudWxsIH07XG4gICAgfVxuICAgIGNiKCk7XG4gICAgaWYgKGlzUm9vdCkge1xuICAgICAgY29uc3QgeyBlcnJvclRocm93biwgZXJyb3IgfSA9IGNvbnRleHQhO1xuICAgICAgY29udGV4dCA9IG51bGw7XG4gICAgICBpZiAoZXJyb3JUaHJvd24pIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFRoaXMgaXMgdGhlIGdlbmVyYWwgbm9uLWRlcHJlY2F0ZWQgcGF0aCBmb3IgZXZlcnlvbmUgdGhhdFxuICAgIC8vIGlzbid0IGNyYXp5IGVub3VnaCB0byB1c2Ugc3VwZXItZ3Jvc3MgbW9kZSAodXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZylcbiAgICBjYigpO1xuICB9XG59XG5cbi8qKlxuICogQ2FwdHVyZXMgZXJyb3JzIG9ubHkgaW4gc3VwZXItZ3Jvc3MgbW9kZS5cbiAqIEBwYXJhbSBlcnIgdGhlIGVycm9yIHRvIGNhcHR1cmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcHR1cmVFcnJvcihlcnI6IGFueSkge1xuICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgJiYgY29udGV4dCkge1xuICAgIGNvbnRleHQuZXJyb3JUaHJvd24gPSB0cnVlO1xuICAgIGNvbnRleHQuZXJyb3IgPSBlcnI7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIE9ic2VydmFibGVOb3RpZmljYXRpb24gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGlzU3Vic2NyaXB0aW9uLCBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyByZXBvcnRVbmhhbmRsZWRFcnJvciB9IGZyb20gJy4vdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvcic7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlsL25vb3AnO1xuaW1wb3J0IHsgbmV4dE5vdGlmaWNhdGlvbiwgZXJyb3JOb3RpZmljYXRpb24sIENPTVBMRVRFX05PVElGSUNBVElPTiB9IGZyb20gJy4vTm90aWZpY2F0aW9uRmFjdG9yaWVzJztcbmltcG9ydCB7IHRpbWVvdXRQcm92aWRlciB9IGZyb20gJy4vc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlcic7XG5pbXBvcnQgeyBjYXB0dXJlRXJyb3IgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRzIHRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGludGVyZmFjZSBhbmQgZXh0ZW5kcyB0aGVcbiAqIHtAbGluayBTdWJzY3JpcHRpb259IGNsYXNzLiBXaGlsZSB0aGUge0BsaW5rIE9ic2VydmVyfSBpcyB0aGUgcHVibGljIEFQSSBmb3JcbiAqIGNvbnN1bWluZyB0aGUgdmFsdWVzIG9mIGFuIHtAbGluayBPYnNlcnZhYmxlfSwgYWxsIE9ic2VydmVycyBnZXQgY29udmVydGVkIHRvXG4gKiBhIFN1YnNjcmliZXIsIGluIG9yZGVyIHRvIHByb3ZpZGUgU3Vic2NyaXB0aW9uLWxpa2UgY2FwYWJpbGl0aWVzIHN1Y2ggYXNcbiAqIGB1bnN1YnNjcmliZWAuIFN1YnNjcmliZXIgaXMgYSBjb21tb24gdHlwZSBpbiBSeEpTLCBhbmQgY3J1Y2lhbCBmb3JcbiAqIGltcGxlbWVudGluZyBvcGVyYXRvcnMsIGJ1dCBpdCBpcyByYXJlbHkgdXNlZCBhcyBhIHB1YmxpYyBBUEkuXG4gKlxuICogQGNsYXNzIFN1YnNjcmliZXI8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpcHRpb24gaW1wbGVtZW50cyBPYnNlcnZlcjxUPiB7XG4gIC8qKlxuICAgKiBBIHN0YXRpYyBmYWN0b3J5IGZvciBhIFN1YnNjcmliZXIsIGdpdmVuIGEgKHBvdGVudGlhbGx5IHBhcnRpYWwpIGRlZmluaXRpb25cbiAgICogb2YgYW4gT2JzZXJ2ZXIuXG4gICAqIEBwYXJhbSBuZXh0IFRoZSBgbmV4dGAgY2FsbGJhY2sgb2YgYW4gT2JzZXJ2ZXIuXG4gICAqIEBwYXJhbSBlcnJvciBUaGUgYGVycm9yYCBjYWxsYmFjayBvZiBhblxuICAgKiBPYnNlcnZlci5cbiAgICogQHBhcmFtIGNvbXBsZXRlIFRoZSBgY29tcGxldGVgIGNhbGxiYWNrIG9mIGFuXG4gICAqIE9ic2VydmVyLlxuICAgKiBAcmV0dXJuIEEgU3Vic2NyaWJlciB3cmFwcGluZyB0aGUgKHBhcnRpYWxseSBkZWZpbmVkKVxuICAgKiBPYnNlcnZlciByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gYXJndW1lbnRzLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKiBAZGVwcmVjYXRlZCBEbyBub3QgdXNlLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIFRoZXJlIGlzIG5vIHJlcGxhY2VtZW50IGZvciB0aGlzXG4gICAqIG1ldGhvZCwgYW5kIHRoZXJlIGlzIG5vIHJlYXNvbiB0byBiZSBjcmVhdGluZyBpbnN0YW5jZXMgb2YgYFN1YnNjcmliZXJgIGRpcmVjdGx5LlxuICAgKiBJZiB5b3UgaGF2ZSBhIHNwZWNpZmljIHVzZSBjYXNlLCBwbGVhc2UgZmlsZSBhbiBpc3N1ZS5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGU8VD4obmV4dD86ICh4PzogVCkgPT4gdm9pZCwgZXJyb3I/OiAoZT86IGFueSkgPT4gdm9pZCwgY29tcGxldGU/OiAoKSA9PiB2b2lkKTogU3Vic2NyaWJlcjxUPiB7XG4gICAgcmV0dXJuIG5ldyBTYWZlU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBwcm90ZWN0ZWQgaXNTdG9wcGVkOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgcHJvdGVjdGVkIGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPGFueT4gfCBPYnNlcnZlcjxhbnk+OyAvLyB0aGlzIGBhbnlgIGlzIHRoZSBlc2NhcGUgaGF0Y2ggdG8gZXJhc2UgZXh0cmEgdHlwZSBwYXJhbSAoZS5nLiBSKVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICogVGhlcmUgaXMgbm8gcmVhc29uIHRvIGRpcmVjdGx5IGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiBTdWJzY3JpYmVyLiBUaGlzIHR5cGUgaXMgZXhwb3J0ZWQgZm9yIHR5cGluZ3MgcmVhc29ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uPzogU3Vic2NyaWJlcjxhbnk+IHwgT2JzZXJ2ZXI8YW55Pikge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKGRlc3RpbmF0aW9uKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAvLyBBdXRvbWF0aWNhbGx5IGNoYWluIHN1YnNjcmlwdGlvbnMgdG9nZXRoZXIgaGVyZS5cbiAgICAgIC8vIGlmIGRlc3RpbmF0aW9uIGlzIGEgU3Vic2NyaXB0aW9uLCB0aGVuIGl0IGlzIGEgU3Vic2NyaWJlci5cbiAgICAgIGlmIChpc1N1YnNjcmlwdGlvbihkZXN0aW5hdGlvbikpIHtcbiAgICAgICAgZGVzdGluYXRpb24uYWRkKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gRU1QVFlfT0JTRVJWRVI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGNhbGxiYWNrIHRvIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBvZiB0eXBlIGBuZXh0YCBmcm9tXG4gICAqIHRoZSBPYnNlcnZhYmxlLCB3aXRoIGEgdmFsdWUuIFRoZSBPYnNlcnZhYmxlIG1heSBjYWxsIHRoaXMgbWV0aG9kIDAgb3IgbW9yZVxuICAgKiB0aW1lcy5cbiAgICogQHBhcmFtIHtUfSBbdmFsdWVdIFRoZSBgbmV4dGAgdmFsdWUuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBuZXh0KHZhbHVlPzogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihuZXh0Tm90aWZpY2F0aW9uKHZhbHVlKSwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25leHQodmFsdWUhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBub3RpZmljYXRpb25zIG9mIHR5cGUgYGVycm9yYCBmcm9tXG4gICAqIHRoZSBPYnNlcnZhYmxlLCB3aXRoIGFuIGF0dGFjaGVkIGBFcnJvcmAuIE5vdGlmaWVzIHRoZSBPYnNlcnZlciB0aGF0XG4gICAqIHRoZSBPYnNlcnZhYmxlIGhhcyBleHBlcmllbmNlZCBhbiBlcnJvciBjb25kaXRpb24uXG4gICAqIEBwYXJhbSB7YW55fSBbZXJyXSBUaGUgYGVycm9yYCBleGNlcHRpb24uXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBlcnJvcihlcnI/OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24oZXJyb3JOb3RpZmljYXRpb24oZXJyKSwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGNhbGxiYWNrIHRvIHJlY2VpdmUgYSB2YWx1ZWxlc3Mgbm90aWZpY2F0aW9uIG9mIHR5cGVcbiAgICogYGNvbXBsZXRlYCBmcm9tIHRoZSBPYnNlcnZhYmxlLiBOb3RpZmllcyB0aGUgT2JzZXJ2ZXIgdGhhdCB0aGUgT2JzZXJ2YWJsZVxuICAgKiBoYXMgZmluaXNoZWQgc2VuZGluZyBwdXNoLWJhc2VkIG5vdGlmaWNhdGlvbnMuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24oQ09NUExFVEVfTk9USUZJQ0FUSU9OLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICB1bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICBzdXBlci51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG51bGwhO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2Vycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgYmluZCBpcyBjYXB0dXJlZCBoZXJlIGJlY2F1c2Ugd2Ugd2FudCB0byBiZSBhYmxlIHRvIGhhdmVcbiAqIGNvbXBhdGliaWxpdHkgd2l0aCBtb25vaWQgbGlicmFyaWVzIHRoYXQgdGVuZCB0byB1c2UgYSBtZXRob2QgbmFtZWRcbiAqIGBiaW5kYC4gSW4gcGFydGljdWxhciwgYSBsaWJyYXJ5IGNhbGxlZCBNb25pbyByZXF1aXJlcyB0aGlzLlxuICovXG5jb25zdCBfYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuXG5mdW5jdGlvbiBiaW5kPEZuIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KGZuOiBGbiwgdGhpc0FyZzogYW55KTogRm4ge1xuICByZXR1cm4gX2JpbmQuY2FsbChmbiwgdGhpc0FyZyk7XG59XG5cbi8qKlxuICogSW50ZXJuYWwgb3B0aW1pemF0aW9uIG9ubHksIERPIE5PVCBFWFBPU0UuXG4gKiBAaW50ZXJuYWxcbiAqL1xuY2xhc3MgQ29uc3VtZXJPYnNlcnZlcjxUPiBpbXBsZW1lbnRzIE9ic2VydmVyPFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJ0aWFsT2JzZXJ2ZXI6IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+KSB7fVxuXG4gIG5leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBhcnRpYWxPYnNlcnZlciB9ID0gdGhpcztcbiAgICBpZiAocGFydGlhbE9ic2VydmVyLm5leHQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnRpYWxPYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFydGlhbE9ic2VydmVyIH0gPSB0aGlzO1xuICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnRpYWxPYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBsZXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFydGlhbE9ic2VydmVyIH0gPSB0aGlzO1xuICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIuY29tcGxldGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FmZVN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgb2JzZXJ2ZXJPck5leHQ/OiBQYXJ0aWFsPE9ic2VydmVyPFQ+PiB8ICgodmFsdWU6IFQpID0+IHZvaWQpIHwgbnVsbCxcbiAgICBlcnJvcj86ICgoZT86IGFueSkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGNvbXBsZXRlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICApIHtcbiAgICBzdXBlcigpO1xuXG4gICAgbGV0IHBhcnRpYWxPYnNlcnZlcjogUGFydGlhbDxPYnNlcnZlcjxUPj47XG4gICAgaWYgKGlzRnVuY3Rpb24ob2JzZXJ2ZXJPck5leHQpIHx8ICFvYnNlcnZlck9yTmV4dCkge1xuICAgICAgLy8gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24sIG5vdCBhbiBvYnNlcnZlci4gVGhlIG5leHRcbiAgICAgIC8vIHR3byBhcmd1bWVudHMgKmNvdWxkKiBiZSBvYnNlcnZlcnMsIG9yIHRoZXkgY291bGQgYmUgZW1wdHkuXG4gICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgIG5leHQ6IChvYnNlcnZlck9yTmV4dCA/PyB1bmRlZmluZWQpIGFzICgoKHZhbHVlOiBUKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCksXG4gICAgICAgIGVycm9yOiBlcnJvciA/PyB1bmRlZmluZWQsXG4gICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSA/PyB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBwYXJ0aWFsIG9ic2VydmVyLlxuICAgICAgbGV0IGNvbnRleHQ6IGFueTtcbiAgICAgIGlmICh0aGlzICYmIGNvbmZpZy51c2VEZXByZWNhdGVkTmV4dENvbnRleHQpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBhIGRlcHJlY2F0ZWQgcGF0aCB0aGF0IG1hZGUgYHRoaXMudW5zdWJzY3JpYmUoKWAgYXZhaWxhYmxlIGluXG4gICAgICAgIC8vIG5leHQgaGFuZGxlciBmdW5jdGlvbnMgcGFzc2VkIHRvIHN1YnNjcmliZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWhpbmQgYSBmbGFnXG4gICAgICAgIC8vIG5vdywgYXMgaXQgaXMgKnZlcnkqIHNsb3cuXG4gICAgICAgIGNvbnRleHQgPSBPYmplY3QuY3JlYXRlKG9ic2VydmVyT3JOZXh0KTtcbiAgICAgICAgY29udGV4dC51bnN1YnNjcmliZSA9ICgpID0+IHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyID0ge1xuICAgICAgICAgIG5leHQ6IG9ic2VydmVyT3JOZXh0Lm5leHQgJiYgYmluZChvYnNlcnZlck9yTmV4dC5uZXh0LCBjb250ZXh0KSxcbiAgICAgICAgICBlcnJvcjogb2JzZXJ2ZXJPck5leHQuZXJyb3IgJiYgYmluZChvYnNlcnZlck9yTmV4dC5lcnJvciwgY29udGV4dCksXG4gICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlICYmIGJpbmQob2JzZXJ2ZXJPck5leHQuY29tcGxldGUsIGNvbnRleHQpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGhlIFwibm9ybWFsXCIgcGF0aC4gSnVzdCB1c2UgdGhlIHBhcnRpYWwgb2JzZXJ2ZXIgZGlyZWN0bHkuXG4gICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdyYXAgdGhlIHBhcnRpYWwgb2JzZXJ2ZXIgdG8gZW5zdXJlIGl0J3MgYSBmdWxsIG9ic2VydmVyLCBhbmRcbiAgICAvLyBtYWtlIHN1cmUgcHJvcGVyIGVycm9yIGhhbmRsaW5nIGlzIGFjY291bnRlZCBmb3IuXG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBDb25zdW1lck9ic2VydmVyKHBhcnRpYWxPYnNlcnZlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3I6IGFueSkge1xuICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICBjYXB0dXJlRXJyb3IoZXJyb3IpO1xuICB9IGVsc2Uge1xuICAgIC8vIElkZWFsIHBhdGgsIHdlIHJlcG9ydCB0aGlzIGFzIGFuIHVuaGFuZGxlZCBlcnJvcixcbiAgICAvLyB3aGljaCBpcyB0aHJvd24gb24gYSBuZXcgY2FsbCBzdGFjay5cbiAgICByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlcnJvciBoYW5kbGVyIHVzZWQgd2hlbiBubyBlcnJvciBoYW5kbGVyIHdhcyBzdXBwbGllZFxuICogdG8gdGhlIFNhZmVTdWJzY3JpYmVyIC0tIG1lYW5pbmcgbm8gZXJyb3IgaGFuZGxlciB3YXMgc3VwcGxpZWRcbiAqIGRvIHRoZSBgc3Vic2NyaWJlYCBjYWxsIG9uIG91ciBvYnNlcnZhYmxlLlxuICogQHBhcmFtIGVyciBUaGUgZXJyb3IgdG8gaGFuZGxlXG4gKi9cbmZ1bmN0aW9uIGRlZmF1bHRFcnJvckhhbmRsZXIoZXJyOiBhbnkpIHtcbiAgdGhyb3cgZXJyO1xufVxuXG4vKipcbiAqIEEgaGFuZGxlciBmb3Igbm90aWZpY2F0aW9ucyB0aGF0IGNhbm5vdCBiZSBzZW50IHRvIGEgc3RvcHBlZCBzdWJzY3JpYmVyLlxuICogQHBhcmFtIG5vdGlmaWNhdGlvbiBUaGUgbm90aWZpY2F0aW9uIGJlaW5nIHNlbnRcbiAqIEBwYXJhbSBzdWJzY3JpYmVyIFRoZSBzdG9wcGVkIHN1YnNjcmliZXJcbiAqL1xuZnVuY3Rpb24gaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE9ic2VydmFibGVOb3RpZmljYXRpb248YW55Piwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSB7XG4gIGNvbnN0IHsgb25TdG9wcGVkTm90aWZpY2F0aW9uIH0gPSBjb25maWc7XG4gIG9uU3RvcHBlZE5vdGlmaWNhdGlvbiAmJiB0aW1lb3V0UHJvdmlkZXIuc2V0VGltZW91dCgoKSA9PiBvblN0b3BwZWROb3RpZmljYXRpb24obm90aWZpY2F0aW9uLCBzdWJzY3JpYmVyKSk7XG59XG5cbi8qKlxuICogVGhlIG9ic2VydmVyIHVzZWQgYXMgYSBzdHViIGZvciBzdWJzY3JpcHRpb25zIHdoZXJlIHRoZSB1c2VyIGRpZCBub3RcbiAqIHBhc3MgYW55IGFyZ3VtZW50cyB0byBgc3Vic2NyaWJlYC4gQ29tZXMgd2l0aCB0aGUgZGVmYXVsdCBlcnJvciBoYW5kbGluZ1xuICogYmVoYXZpb3IuXG4gKi9cbmV4cG9ydCBjb25zdCBFTVBUWV9PQlNFUlZFUjogUmVhZG9ubHk8T2JzZXJ2ZXI8YW55Pj4gJiB7IGNsb3NlZDogdHJ1ZSB9ID0ge1xuICBjbG9zZWQ6IHRydWUsXG4gIG5leHQ6IG5vb3AsXG4gIGVycm9yOiBkZWZhdWx0RXJyb3JIYW5kbGVyLFxuICBjb21wbGV0ZTogbm9vcCxcbn07XG4iLCAiLyoqXG4gKiBTeW1ib2wub2JzZXJ2YWJsZSBvciBhIHN0cmluZyBcIkBAb2JzZXJ2YWJsZVwiLiBVc2VkIGZvciBpbnRlcm9wXG4gKlxuICogQGRlcHJlY2F0ZWQgV2Ugd2lsbCBubyBsb25nZXIgYmUgZXhwb3J0aW5nIHRoaXMgc3ltYm9sIGluIHVwY29taW5nIHZlcnNpb25zIG9mIFJ4SlMuXG4gKiBJbnN0ZWFkIHBvbHlmaWxsIGFuZCB1c2UgU3ltYm9sLm9ic2VydmFibGUgZGlyZWN0bHkgKm9yKiB1c2UgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvc3ltYm9sLW9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGNvbnN0IG9ic2VydmFibGU6IHN0cmluZyB8IHN5bWJvbCA9ICgoKSA9PiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSkgfHwgJ0BAb2JzZXJ2YWJsZScpKCk7XG4iLCAiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIG9uZSBwYXJhbWV0ZXIgYW5kIGp1c3QgcmV0dXJucyBpdC4gU2ltcGx5IHB1dCxcbiAqIHRoaXMgaXMgbGlrZSBgPFQ+KHg6IFQpOiBUID0+IHhgLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogVGhpcyBpcyB1c2VmdWwgaW4gc29tZSBjYXNlcyB3aGVuIHVzaW5nIHRoaW5ncyBsaWtlIGBtZXJnZU1hcGBcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UsIG1hcCwgcmFuZ2UsIG1lcmdlTWFwLCBpZGVudGl0eSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHNvdXJjZSQgPSBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoNSkpO1xuICpcbiAqIGNvbnN0IHJlc3VsdCQgPSBzb3VyY2UkLnBpcGUoXG4gKiAgIG1hcChpID0+IHJhbmdlKGkpKSxcbiAqICAgbWVyZ2VNYXAoaWRlbnRpdHkpIC8vIHNhbWUgYXMgbWVyZ2VNYXAoeCA9PiB4KVxuICogKTtcbiAqXG4gKiByZXN1bHQkLnN1YnNjcmliZSh7XG4gKiAgIG5leHQ6IGNvbnNvbGUubG9nXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIE9yIHdoZW4geW91IHdhbnQgdG8gc2VsZWN0aXZlbHkgYXBwbHkgYW4gb3BlcmF0b3JcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UsIGlkZW50aXR5IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgc2hvdWxkTGltaXQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICpcbiAqIGNvbnN0IHNvdXJjZSQgPSBpbnRlcnZhbCgxMDAwKTtcbiAqXG4gKiBjb25zdCByZXN1bHQkID0gc291cmNlJC5waXBlKHNob3VsZExpbWl0KCkgPyB0YWtlKDUpIDogaWRlbnRpdHkpO1xuICpcbiAqIHJlc3VsdCQuc3Vic2NyaWJlKHtcbiAqICAgbmV4dDogY29uc29sZS5sb2dcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHggQW55IHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvblxuICogQHJldHVybnMgVGhlIHZhbHVlIHBhc3NlZCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyIHRvIHRoaXMgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5PFQ+KHg6IFQpOiBUIHtcbiAgcmV0dXJuIHg7XG59XG4iLCAiaW1wb3J0IHsgaWRlbnRpdHkgfSBmcm9tICcuL2lkZW50aXR5JztcbmltcG9ydCB7IFVuYXJ5RnVuY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwaXBlKCk6IHR5cGVvZiBpZGVudGl0eTtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEE+KGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPik6IFVuYXJ5RnVuY3Rpb248VCwgQT47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCPihmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPik6IFVuYXJ5RnVuY3Rpb248VCwgQj47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDPihmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPiwgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+KTogVW5hcnlGdW5jdGlvbjxULCBDPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQ+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD5cbik6IFVuYXJ5RnVuY3Rpb248VCwgRD47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT5cbik6IFVuYXJ5RnVuY3Rpb248VCwgRT47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPlxuKTogVW5hcnlGdW5jdGlvbjxULCBGPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEc+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz5cbik6IFVuYXJ5RnVuY3Rpb248VCwgRz47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPixcbiAgZm43OiBVbmFyeUZ1bmN0aW9uPEYsIEc+LFxuICBmbjg6IFVuYXJ5RnVuY3Rpb248RywgSD5cbik6IFVuYXJ5RnVuY3Rpb248VCwgSD47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPixcbiAgZm43OiBVbmFyeUZ1bmN0aW9uPEYsIEc+LFxuICBmbjg6IFVuYXJ5RnVuY3Rpb248RywgSD4sXG4gIGZuOTogVW5hcnlGdW5jdGlvbjxILCBJPlxuKTogVW5hcnlGdW5jdGlvbjxULCBJPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz4sXG4gIGZuODogVW5hcnlGdW5jdGlvbjxHLCBIPixcbiAgZm45OiBVbmFyeUZ1bmN0aW9uPEgsIEk+LFxuICAuLi5mbnM6IFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+W11cbik6IFVuYXJ5RnVuY3Rpb248VCwgdW5rbm93bj47XG5cbi8qKlxuICogcGlwZSgpIGNhbiBiZSBjYWxsZWQgb24gb25lIG9yIG1vcmUgZnVuY3Rpb25zLCBlYWNoIG9mIHdoaWNoIGNhbiB0YWtlIG9uZSBhcmd1bWVudCAoXCJVbmFyeUZ1bmN0aW9uXCIpXG4gKiBhbmQgdXNlcyBpdCB0byByZXR1cm4gYSB2YWx1ZS5cbiAqIEl0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIG9uZSBhcmd1bWVudCwgcGFzc2VzIGl0IHRvIHRoZSBmaXJzdCBVbmFyeUZ1bmN0aW9uLCBhbmQgdGhlblxuICogcGFzc2VzIHRoZSByZXN1bHQgdG8gdGhlIG5leHQgb25lLCBwYXNzZXMgdGhhdCByZXN1bHQgdG8gdGhlIG5leHQgb25lLCBhbmQgc28gb24uICBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoLi4uZm5zOiBBcnJheTxVbmFyeUZ1bmN0aW9uPGFueSwgYW55Pj4pOiBVbmFyeUZ1bmN0aW9uPGFueSwgYW55PiB7XG4gIHJldHVybiBwaXBlRnJvbUFycmF5KGZucyk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBwaXBlRnJvbUFycmF5PFQsIFI+KGZuczogQXJyYXk8VW5hcnlGdW5jdGlvbjxULCBSPj4pOiBVbmFyeUZ1bmN0aW9uPFQsIFI+IHtcbiAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gaWRlbnRpdHkgYXMgVW5hcnlGdW5jdGlvbjxhbnksIGFueT47XG4gIH1cblxuICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmbnNbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQ6IFQpOiBSIHtcbiAgICByZXR1cm4gZm5zLnJlZHVjZSgocHJldjogYW55LCBmbjogVW5hcnlGdW5jdGlvbjxULCBSPikgPT4gZm4ocHJldiksIGlucHV0IGFzIGFueSk7XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3IgfSBmcm9tICcuL09wZXJhdG9yJztcbmltcG9ydCB7IFNhZmVTdWJzY3JpYmVyLCBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IGlzU3Vic2NyaXB0aW9uLCBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBUZWFyZG93bkxvZ2ljLCBPcGVyYXRvckZ1bmN0aW9uLCBTdWJzY3JpYmFibGUsIE9ic2VydmVyIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBwaXBlRnJvbUFycmF5IH0gZnJvbSAnLi91dGlsL3BpcGUnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGVycm9yQ29udGV4dCB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xuXG4vKipcbiAqIEEgcmVwcmVzZW50YXRpb24gb2YgYW55IHNldCBvZiB2YWx1ZXMgb3ZlciBhbnkgYW1vdW50IG9mIHRpbWUuIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgYnVpbGRpbmcgYmxvY2tcbiAqIG9mIFJ4SlMuXG4gKlxuICogQGNsYXNzIE9ic2VydmFibGU8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIE9ic2VydmFibGU8VD4gaW1wbGVtZW50cyBTdWJzY3JpYmFibGU8VD4ge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gICAqL1xuICBzb3VyY2U6IE9ic2VydmFibGU8YW55PiB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gICAqL1xuICBvcGVyYXRvcjogT3BlcmF0b3I8YW55LCBUPiB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YnNjcmliZSB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgT2JzZXJ2YWJsZSBpc1xuICAgKiBpbml0aWFsbHkgc3Vic2NyaWJlZCB0by4gVGhpcyBmdW5jdGlvbiBpcyBnaXZlbiBhIFN1YnNjcmliZXIsIHRvIHdoaWNoIG5ldyB2YWx1ZXNcbiAgICogY2FuIGJlIGBuZXh0YGVkLCBvciBhbiBgZXJyb3JgIG1ldGhvZCBjYW4gYmUgY2FsbGVkIHRvIHJhaXNlIGFuIGVycm9yLCBvclxuICAgKiBgY29tcGxldGVgIGNhbiBiZSBjYWxsZWQgdG8gbm90aWZ5IG9mIGEgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3Vic2NyaWJlPzogKHRoaXM6IE9ic2VydmFibGU8VD4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IFRlYXJkb3duTG9naWMpIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgfVxuICB9XG5cbiAgLy8gSEFDSzogU2luY2UgVHlwZVNjcmlwdCBpbmhlcml0cyBzdGF0aWMgcHJvcGVydGllcyB0b28sIHdlIGhhdmUgdG9cbiAgLy8gZmlnaHQgYWdhaW5zdCBUeXBlU2NyaXB0IGhlcmUgc28gU3ViamVjdCBjYW4gaGF2ZSBhIGRpZmZlcmVudCBzdGF0aWMgY3JlYXRlIHNpZ25hdHVyZVxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlIGJ5IGNhbGxpbmcgdGhlIE9ic2VydmFibGUgY29uc3RydWN0b3JcbiAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICogQG1ldGhvZCBjcmVhdGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3Vic2NyaWJlPyB0aGUgc3Vic2NyaWJlciBmdW5jdGlvbiB0byBiZSBwYXNzZWQgdG8gdGhlIE9ic2VydmFibGUgY29uc3RydWN0b3JcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYSBuZXcgb2JzZXJ2YWJsZVxuICAgKiBAbm9jb2xsYXBzZVxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYG5ldyBPYnNlcnZhYmxlKClgIGluc3RlYWQuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGU6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55ID0gPFQ+KHN1YnNjcmliZT86IChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiBUZWFyZG93bkxvZ2ljKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KHN1YnNjcmliZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgT2JzZXJ2YWJsZSwgd2l0aCB0aGlzIE9ic2VydmFibGUgaW5zdGFuY2UgYXMgdGhlIHNvdXJjZSwgYW5kIHRoZSBwYXNzZWRcbiAgICogb3BlcmF0b3IgZGVmaW5lZCBhcyB0aGUgbmV3IG9ic2VydmFibGUncyBvcGVyYXRvci5cbiAgICogQG1ldGhvZCBsaWZ0XG4gICAqIEBwYXJhbSBvcGVyYXRvciB0aGUgb3BlcmF0b3IgZGVmaW5pbmcgdGhlIG9wZXJhdGlvbiB0byB0YWtlIG9uIHRoZSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm4gYSBuZXcgb2JzZXJ2YWJsZSB3aXRoIHRoZSBPcGVyYXRvciBhcHBsaWVkXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LlxuICAgKiBJZiB5b3UgaGF2ZSBpbXBsZW1lbnRlZCBhbiBvcGVyYXRvciB1c2luZyBgbGlmdGAsIGl0IGlzIHJlY29tbWVuZGVkIHRoYXQgeW91IGNyZWF0ZSBhblxuICAgKiBvcGVyYXRvciBieSBzaW1wbHkgcmV0dXJuaW5nIGBuZXcgT2JzZXJ2YWJsZSgpYCBkaXJlY3RseS4gU2VlIFwiQ3JlYXRpbmcgbmV3IG9wZXJhdG9ycyBmcm9tXG4gICAqIHNjcmF0Y2hcIiBzZWN0aW9uIGhlcmU6IGh0dHBzOi8vcnhqcy5kZXYvZ3VpZGUvb3BlcmF0b3JzXG4gICAqL1xuICBsaWZ0PFI+KG9wZXJhdG9yPzogT3BlcmF0b3I8VCwgUj4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8Uj4oKTtcbiAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG5cbiAgc3Vic2NyaWJlKG9ic2VydmVyT3JOZXh0PzogUGFydGlhbDxPYnNlcnZlcjxUPj4gfCAoKHZhbHVlOiBUKSA9PiB2b2lkKSk6IFN1YnNjcmlwdGlvbjtcbiAgLyoqIEBkZXByZWNhdGVkIEluc3RlYWQgb2YgcGFzc2luZyBzZXBhcmF0ZSBjYWxsYmFjayBhcmd1bWVudHMsIHVzZSBhbiBvYnNlcnZlciBhcmd1bWVudC4gU2lnbmF0dXJlcyB0YWtpbmcgc2VwYXJhdGUgY2FsbGJhY2sgYXJndW1lbnRzIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc3Vic2NyaWJlLWFyZ3VtZW50cyAqL1xuICBzdWJzY3JpYmUobmV4dD86ICgodmFsdWU6IFQpID0+IHZvaWQpIHwgbnVsbCwgZXJyb3I/OiAoKGVycm9yOiBhbnkpID0+IHZvaWQpIHwgbnVsbCwgY29tcGxldGU/OiAoKCkgPT4gdm9pZCkgfCBudWxsKTogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogSW52b2tlcyBhbiBleGVjdXRpb24gb2YgYW4gT2JzZXJ2YWJsZSBhbmQgcmVnaXN0ZXJzIE9ic2VydmVyIGhhbmRsZXJzIGZvciBub3RpZmljYXRpb25zIGl0IHdpbGwgZW1pdC5cbiAgICpcbiAgICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPlVzZSBpdCB3aGVuIHlvdSBoYXZlIGFsbCB0aGVzZSBPYnNlcnZhYmxlcywgYnV0IHN0aWxsIG5vdGhpbmcgaXMgaGFwcGVuaW5nLjwvc3Bhbj5cbiAgICpcbiAgICogYHN1YnNjcmliZWAgaXMgbm90IGEgcmVndWxhciBvcGVyYXRvciwgYnV0IGEgbWV0aG9kIHRoYXQgY2FsbHMgT2JzZXJ2YWJsZSdzIGludGVybmFsIGBzdWJzY3JpYmVgIGZ1bmN0aW9uLiBJdFxuICAgKiBtaWdodCBiZSBmb3IgZXhhbXBsZSBhIGZ1bmN0aW9uIHRoYXQgeW91IHBhc3NlZCB0byBPYnNlcnZhYmxlJ3MgY29uc3RydWN0b3IsIGJ1dCBtb3N0IG9mIHRoZSB0aW1lIGl0IGlzXG4gICAqIGEgbGlicmFyeSBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggZGVmaW5lcyB3aGF0IHdpbGwgYmUgZW1pdHRlZCBieSBhbiBPYnNlcnZhYmxlLCBhbmQgd2hlbiBpdCBiZSB3aWxsIGVtaXR0ZWQuIFRoaXMgbWVhbnNcbiAgICogdGhhdCBjYWxsaW5nIGBzdWJzY3JpYmVgIGlzIGFjdHVhbGx5IHRoZSBtb21lbnQgd2hlbiBPYnNlcnZhYmxlIHN0YXJ0cyBpdHMgd29yaywgbm90IHdoZW4gaXQgaXMgY3JlYXRlZCwgYXMgaXQgaXMgb2Z0ZW5cbiAgICogdGhlIHRob3VnaHQuXG4gICAqXG4gICAqIEFwYXJ0IGZyb20gc3RhcnRpbmcgdGhlIGV4ZWN1dGlvbiBvZiBhbiBPYnNlcnZhYmxlLCB0aGlzIG1ldGhvZCBhbGxvd3MgeW91IHRvIGxpc3RlbiBmb3IgdmFsdWVzXG4gICAqIHRoYXQgYW4gT2JzZXJ2YWJsZSBlbWl0cywgYXMgd2VsbCBhcyBmb3Igd2hlbiBpdCBjb21wbGV0ZXMgb3IgZXJyb3JzLiBZb3UgY2FuIGFjaGlldmUgdGhpcyBpbiB0d29cbiAgICogb2YgdGhlIGZvbGxvd2luZyB3YXlzLlxuICAgKlxuICAgKiBUaGUgZmlyc3Qgd2F5IGlzIGNyZWF0aW5nIGFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMge0BsaW5rIE9ic2VydmVyfSBpbnRlcmZhY2UuIEl0IHNob3VsZCBoYXZlIG1ldGhvZHNcbiAgICogZGVmaW5lZCBieSB0aGF0IGludGVyZmFjZSwgYnV0IG5vdGUgdGhhdCBpdCBzaG91bGQgYmUganVzdCBhIHJlZ3VsYXIgSmF2YVNjcmlwdCBvYmplY3QsIHdoaWNoIHlvdSBjYW4gY3JlYXRlXG4gICAqIHlvdXJzZWxmIGluIGFueSB3YXkgeW91IHdhbnQgKEVTNiBjbGFzcywgY2xhc3NpYyBmdW5jdGlvbiBjb25zdHJ1Y3Rvciwgb2JqZWN0IGxpdGVyYWwgZXRjLikuIEluIHBhcnRpY3VsYXIsIGRvXG4gICAqIG5vdCBhdHRlbXB0IHRvIHVzZSBhbnkgUnhKUyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIHRvIGNyZWF0ZSBPYnNlcnZlcnMgLSB5b3UgZG9uJ3QgbmVlZCB0aGVtLiBSZW1lbWJlciBhbHNvXG4gICAqIHRoYXQgeW91ciBvYmplY3QgZG9lcyBub3QgaGF2ZSB0byBpbXBsZW1lbnQgYWxsIG1ldGhvZHMuIElmIHlvdSBmaW5kIHlvdXJzZWxmIGNyZWF0aW5nIGEgbWV0aG9kIHRoYXQgZG9lc24ndFxuICAgKiBkbyBhbnl0aGluZywgeW91IGNhbiBzaW1wbHkgb21pdCBpdC4gTm90ZSBob3dldmVyLCBpZiB0aGUgYGVycm9yYCBtZXRob2QgaXMgbm90IHByb3ZpZGVkIGFuZCBhbiBlcnJvciBoYXBwZW5zLFxuICAgKiBpdCB3aWxsIGJlIHRocm93biBhc3luY2hyb25vdXNseS4gRXJyb3JzIHRocm93biBhc3luY2hyb25vdXNseSBjYW5ub3QgYmUgY2F1Z2h0IHVzaW5nIGB0cnlgL2BjYXRjaGAuIEluc3RlYWQsXG4gICAqIHVzZSB0aGUge0BsaW5rIG9uVW5oYW5kbGVkRXJyb3J9IGNvbmZpZ3VyYXRpb24gb3B0aW9uIG9yIHVzZSBhIHJ1bnRpbWUgaGFuZGxlciAobGlrZSBgd2luZG93Lm9uZXJyb3JgIG9yXG4gICAqIGBwcm9jZXNzLm9uKCdlcnJvcilgKSB0byBiZSBub3RpZmllZCBvZiB1bmhhbmRsZWQgZXJyb3JzLiBCZWNhdXNlIG9mIHRoaXMsIGl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgcHJvdmlkZVxuICAgKiBhbiBgZXJyb3JgIG1ldGhvZCB0byBhdm9pZCBtaXNzaW5nIHRocm93biBlcnJvcnMuXG4gICAqXG4gICAqIFRoZSBzZWNvbmQgd2F5IGlzIHRvIGdpdmUgdXAgb24gT2JzZXJ2ZXIgb2JqZWN0IGFsdG9nZXRoZXIgYW5kIHNpbXBseSBwcm92aWRlIGNhbGxiYWNrIGZ1bmN0aW9ucyBpbiBwbGFjZSBvZiBpdHMgbWV0aG9kcy5cbiAgICogVGhpcyBtZWFucyB5b3UgY2FuIHByb3ZpZGUgdGhyZWUgZnVuY3Rpb25zIGFzIGFyZ3VtZW50cyB0byBgc3Vic2NyaWJlYCwgd2hlcmUgdGhlIGZpcnN0IGZ1bmN0aW9uIGlzIGVxdWl2YWxlbnRcbiAgICogb2YgYSBgbmV4dGAgbWV0aG9kLCB0aGUgc2Vjb25kIG9mIGFuIGBlcnJvcmAgbWV0aG9kIGFuZCB0aGUgdGhpcmQgb2YgYSBgY29tcGxldGVgIG1ldGhvZC4gSnVzdCBhcyBpbiBjYXNlIG9mIGFuIE9ic2VydmVyLFxuICAgKiBpZiB5b3UgZG8gbm90IG5lZWQgdG8gbGlzdGVuIGZvciBzb21ldGhpbmcsIHlvdSBjYW4gb21pdCBhIGZ1bmN0aW9uIGJ5IHBhc3NpbmcgYHVuZGVmaW5lZGAgb3IgYG51bGxgLFxuICAgKiBzaW5jZSBgc3Vic2NyaWJlYCByZWNvZ25pemVzIHRoZXNlIGZ1bmN0aW9ucyBieSB3aGVyZSB0aGV5IHdlcmUgcGxhY2VkIGluIGZ1bmN0aW9uIGNhbGwuIFdoZW4gaXQgY29tZXNcbiAgICogdG8gdGhlIGBlcnJvcmAgZnVuY3Rpb24sIGFzIHdpdGggYW4gT2JzZXJ2ZXIsIGlmIG5vdCBwcm92aWRlZCwgZXJyb3JzIGVtaXR0ZWQgYnkgYW4gT2JzZXJ2YWJsZSB3aWxsIGJlIHRocm93biBhc3luY2hyb25vdXNseS5cbiAgICpcbiAgICogWW91IGNhbiwgaG93ZXZlciwgc3Vic2NyaWJlIHdpdGggbm8gcGFyYW1ldGVycyBhdCBhbGwuIFRoaXMgbWF5IGJlIHRoZSBjYXNlIHdoZXJlIHlvdSdyZSBub3QgaW50ZXJlc3RlZCBpbiB0ZXJtaW5hbCBldmVudHNcbiAgICogYW5kIHlvdSBhbHNvIGhhbmRsZWQgZW1pc3Npb25zIGludGVybmFsbHkgYnkgdXNpbmcgb3BlcmF0b3JzIChlLmcuIHVzaW5nIGB0YXBgKS5cbiAgICpcbiAgICogV2hpY2hldmVyIHN0eWxlIG9mIGNhbGxpbmcgYHN1YnNjcmliZWAgeW91IHVzZSwgaW4gYm90aCBjYXNlcyBpdCByZXR1cm5zIGEgU3Vic2NyaXB0aW9uIG9iamVjdC5cbiAgICogVGhpcyBvYmplY3QgYWxsb3dzIHlvdSB0byBjYWxsIGB1bnN1YnNjcmliZWAgb24gaXQsIHdoaWNoIGluIHR1cm4gd2lsbCBzdG9wIHRoZSB3b3JrIHRoYXQgYW4gT2JzZXJ2YWJsZSBkb2VzIGFuZCB3aWxsIGNsZWFuXG4gICAqIHVwIGFsbCByZXNvdXJjZXMgdGhhdCBhbiBPYnNlcnZhYmxlIHVzZWQuIE5vdGUgdGhhdCBjYW5jZWxsaW5nIGEgc3Vic2NyaXB0aW9uIHdpbGwgbm90IGNhbGwgYGNvbXBsZXRlYCBjYWxsYmFja1xuICAgKiBwcm92aWRlZCB0byBgc3Vic2NyaWJlYCBmdW5jdGlvbiwgd2hpY2ggaXMgcmVzZXJ2ZWQgZm9yIGEgcmVndWxhciBjb21wbGV0aW9uIHNpZ25hbCB0aGF0IGNvbWVzIGZyb20gYW4gT2JzZXJ2YWJsZS5cbiAgICpcbiAgICogUmVtZW1iZXIgdGhhdCBjYWxsYmFja3MgcHJvdmlkZWQgdG8gYHN1YnNjcmliZWAgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseS5cbiAgICogSXQgaXMgYW4gT2JzZXJ2YWJsZSBpdHNlbGYgdGhhdCBkZWNpZGVzIHdoZW4gdGhlc2UgZnVuY3Rpb25zIHdpbGwgYmUgY2FsbGVkLiBGb3IgZXhhbXBsZSB7QGxpbmsgb2Z9XG4gICAqIGJ5IGRlZmF1bHQgZW1pdHMgYWxsIGl0cyB2YWx1ZXMgc3luY2hyb25vdXNseS4gQWx3YXlzIGNoZWNrIGRvY3VtZW50YXRpb24gZm9yIGhvdyBnaXZlbiBPYnNlcnZhYmxlXG4gICAqIHdpbGwgYmVoYXZlIHdoZW4gc3Vic2NyaWJlZCBhbmQgaWYgaXRzIGRlZmF1bHQgYmVoYXZpb3IgY2FuIGJlIG1vZGlmaWVkIHdpdGggYSBgc2NoZWR1bGVyYC5cbiAgICpcbiAgICogIyMjIyBFeGFtcGxlc1xuICAgKlxuICAgKiBTdWJzY3JpYmUgd2l0aCBhbiB7QGxpbmsgZ3VpZGUvb2JzZXJ2ZXIgT2JzZXJ2ZXJ9XG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG4gICAqXG4gICAqIGNvbnN0IHN1bU9ic2VydmVyID0ge1xuICAgKiAgIHN1bTogMCxcbiAgICogICBuZXh0KHZhbHVlKSB7XG4gICAqICAgICBjb25zb2xlLmxvZygnQWRkaW5nOiAnICsgdmFsdWUpO1xuICAgKiAgICAgdGhpcy5zdW0gPSB0aGlzLnN1bSArIHZhbHVlO1xuICAgKiAgIH0sXG4gICAqICAgZXJyb3IoKSB7XG4gICAqICAgICAvLyBXZSBhY3R1YWxseSBjb3VsZCBqdXN0IHJlbW92ZSB0aGlzIG1ldGhvZCxcbiAgICogICAgIC8vIHNpbmNlIHdlIGRvIG5vdCByZWFsbHkgY2FyZSBhYm91dCBlcnJvcnMgcmlnaHQgbm93LlxuICAgKiAgIH0sXG4gICAqICAgY29tcGxldGUoKSB7XG4gICAqICAgICBjb25zb2xlLmxvZygnU3VtIGVxdWFsczogJyArIHRoaXMuc3VtKTtcbiAgICogICB9XG4gICAqIH07XG4gICAqXG4gICAqIG9mKDEsIDIsIDMpIC8vIFN5bmNocm9ub3VzbHkgZW1pdHMgMSwgMiwgMyBhbmQgdGhlbiBjb21wbGV0ZXMuXG4gICAqICAgLnN1YnNjcmliZShzdW1PYnNlcnZlcik7XG4gICAqXG4gICAqIC8vIExvZ3M6XG4gICAqIC8vICdBZGRpbmc6IDEnXG4gICAqIC8vICdBZGRpbmc6IDInXG4gICAqIC8vICdBZGRpbmc6IDMnXG4gICAqIC8vICdTdW0gZXF1YWxzOiA2J1xuICAgKiBgYGBcbiAgICpcbiAgICogU3Vic2NyaWJlIHdpdGggZnVuY3Rpb25zICh7QGxpbmsgZGVwcmVjYXRpb25zL3N1YnNjcmliZS1hcmd1bWVudHMgZGVwcmVjYXRlZH0pXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IG9mIH0gZnJvbSAncnhqcydcbiAgICpcbiAgICogbGV0IHN1bSA9IDA7XG4gICAqXG4gICAqIG9mKDEsIDIsIDMpLnN1YnNjcmliZShcbiAgICogICB2YWx1ZSA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZygnQWRkaW5nOiAnICsgdmFsdWUpO1xuICAgKiAgICAgc3VtID0gc3VtICsgdmFsdWU7XG4gICAqICAgfSxcbiAgICogICB1bmRlZmluZWQsXG4gICAqICAgKCkgPT4gY29uc29sZS5sb2coJ1N1bSBlcXVhbHM6ICcgKyBzdW0pXG4gICAqICk7XG4gICAqXG4gICAqIC8vIExvZ3M6XG4gICAqIC8vICdBZGRpbmc6IDEnXG4gICAqIC8vICdBZGRpbmc6IDInXG4gICAqIC8vICdBZGRpbmc6IDMnXG4gICAqIC8vICdTdW0gZXF1YWxzOiA2J1xuICAgKiBgYGBcbiAgICpcbiAgICogQ2FuY2VsIGEgc3Vic2NyaXB0aW9uXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IGludGVydmFsIH0gZnJvbSAncnhqcyc7XG4gICAqXG4gICAqIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGludGVydmFsKDEwMDApLnN1YnNjcmliZSh7XG4gICAqICAgbmV4dChudW0pIHtcbiAgICogICAgIGNvbnNvbGUubG9nKG51bSlcbiAgICogICB9LFxuICAgKiAgIGNvbXBsZXRlKCkge1xuICAgKiAgICAgLy8gV2lsbCBub3QgYmUgY2FsbGVkLCBldmVuIHdoZW4gY2FuY2VsbGluZyBzdWJzY3JpcHRpb24uXG4gICAqICAgICBjb25zb2xlLmxvZygnY29tcGxldGVkIScpO1xuICAgKiAgIH1cbiAgICogfSk7XG4gICAqXG4gICAqIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgKiAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgKiAgIGNvbnNvbGUubG9nKCd1bnN1YnNjcmliZWQhJyk7XG4gICAqIH0sIDI1MDApO1xuICAgKlxuICAgKiAvLyBMb2dzOlxuICAgKiAvLyAwIGFmdGVyIDFzXG4gICAqIC8vIDEgYWZ0ZXIgMnNcbiAgICogLy8gJ3Vuc3Vic2NyaWJlZCEnIGFmdGVyIDIuNXNcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7T2JzZXJ2ZXJ8RnVuY3Rpb259IG9ic2VydmVyT3JOZXh0IChvcHRpb25hbCkgRWl0aGVyIGFuIG9ic2VydmVyIHdpdGggbWV0aG9kcyB0byBiZSBjYWxsZWQsXG4gICAqIG9yIHRoZSBmaXJzdCBvZiB0aHJlZSBwb3NzaWJsZSBoYW5kbGVycywgd2hpY2ggaXMgdGhlIGhhbmRsZXIgZm9yIGVhY2ggdmFsdWUgZW1pdHRlZCBmcm9tIHRoZSBzdWJzY3JpYmVkXG4gICAqIE9ic2VydmFibGUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVycm9yIChvcHRpb25hbCkgQSBoYW5kbGVyIGZvciBhIHRlcm1pbmFsIGV2ZW50IHJlc3VsdGluZyBmcm9tIGFuIGVycm9yLiBJZiBubyBlcnJvciBoYW5kbGVyIGlzIHByb3ZpZGVkLFxuICAgKiB0aGUgZXJyb3Igd2lsbCBiZSB0aHJvd24gYXN5bmNocm9ub3VzbHkgYXMgdW5oYW5kbGVkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wbGV0ZSAob3B0aW9uYWwpIEEgaGFuZGxlciBmb3IgYSB0ZXJtaW5hbCBldmVudCByZXN1bHRpbmcgZnJvbSBzdWNjZXNzZnVsIGNvbXBsZXRpb24uXG4gICAqIEByZXR1cm4ge1N1YnNjcmlwdGlvbn0gYSBzdWJzY3JpcHRpb24gcmVmZXJlbmNlIHRvIHRoZSByZWdpc3RlcmVkIGhhbmRsZXJzXG4gICAqIEBtZXRob2Qgc3Vic2NyaWJlXG4gICAqL1xuICBzdWJzY3JpYmUoXG4gICAgb2JzZXJ2ZXJPck5leHQ/OiBQYXJ0aWFsPE9ic2VydmVyPFQ+PiB8ICgodmFsdWU6IFQpID0+IHZvaWQpIHwgbnVsbCxcbiAgICBlcnJvcj86ICgoZXJyb3I6IGFueSkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGNvbXBsZXRlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICApOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IHN1YnNjcmliZXIgPSBpc1N1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQpID8gb2JzZXJ2ZXJPck5leHQgOiBuZXcgU2FmZVN1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG5cbiAgICBlcnJvckNvbnRleHQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBvcGVyYXRvciwgc291cmNlIH0gPSB0aGlzO1xuICAgICAgc3Vic2NyaWJlci5hZGQoXG4gICAgICAgIG9wZXJhdG9yXG4gICAgICAgICAgPyAvLyBXZSdyZSBkZWFsaW5nIHdpdGggYSBzdWJzY3JpcHRpb24gaW4gdGhlXG4gICAgICAgICAgICAvLyBvcGVyYXRvciBjaGFpbiB0byBvbmUgb2Ygb3VyIGxpZnRlZCBvcGVyYXRvcnMuXG4gICAgICAgICAgICBvcGVyYXRvci5jYWxsKHN1YnNjcmliZXIsIHNvdXJjZSlcbiAgICAgICAgICA6IHNvdXJjZVxuICAgICAgICAgID8gLy8gSWYgYHNvdXJjZWAgaGFzIGEgdmFsdWUsIGJ1dCBgb3BlcmF0b3JgIGRvZXMgbm90LCBzb21ldGhpbmcgdGhhdFxuICAgICAgICAgICAgLy8gaGFkIGludGltYXRlIGtub3dsZWRnZSBvZiBvdXIgQVBJLCBsaWtlIG91ciBgU3ViamVjdGAsIG11c3QgaGF2ZVxuICAgICAgICAgICAgLy8gc2V0IGl0LiBXZSdyZSBnb2luZyB0byBqdXN0IGNhbGwgYF9zdWJzY3JpYmVgIGRpcmVjdGx5LlxuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlKHN1YnNjcmliZXIpXG4gICAgICAgICAgOiAvLyBJbiBhbGwgb3RoZXIgY2FzZXMsIHdlJ3JlIGxpa2VseSB3cmFwcGluZyBhIHVzZXItcHJvdmlkZWQgaW5pdGlhbGl6ZXJcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uLCBzbyB3ZSBuZWVkIHRvIGNhdGNoIGVycm9ycyBhbmQgaGFuZGxlIHRoZW0gYXBwcm9wcmlhdGVseS5cbiAgICAgICAgICAgIHRoaXMuX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3RyeVN1YnNjcmliZShzaW5rOiBTdWJzY3JpYmVyPFQ+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoc2luayk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIHJldHVybiBhbnl0aGluZyBpbiB0aGlzIGNhc2UsXG4gICAgICAvLyBiZWNhdXNlIGl0J3MganVzdCBnb2luZyB0byB0cnkgdG8gYGFkZCgpYCB0byBhIHN1YnNjcmlwdGlvblxuICAgICAgLy8gYWJvdmUuXG4gICAgICBzaW5rLmVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgYXMgYSBOT04tQ0FOQ0VMTEFCTEUgbWVhbnMgb2Ygc3Vic2NyaWJpbmcgdG8gYW4gb2JzZXJ2YWJsZSwgZm9yIHVzZSB3aXRoXG4gICAqIEFQSXMgdGhhdCBleHBlY3QgcHJvbWlzZXMsIGxpa2UgYGFzeW5jL2F3YWl0YC4gWW91IGNhbm5vdCB1bnN1YnNjcmliZSBmcm9tIHRoaXMuXG4gICAqXG4gICAqICoqV0FSTklORyoqOiBPbmx5IHVzZSB0aGlzIHdpdGggb2JzZXJ2YWJsZXMgeW91ICprbm93KiB3aWxsIGNvbXBsZXRlLiBJZiB0aGUgc291cmNlXG4gICAqIG9ic2VydmFibGUgZG9lcyBub3QgY29tcGxldGUsIHlvdSB3aWxsIGVuZCB1cCB3aXRoIGEgcHJvbWlzZSB0aGF0IGlzIGh1bmcgdXAsIGFuZFxuICAgKiBwb3RlbnRpYWxseSBhbGwgb2YgdGhlIHN0YXRlIG9mIGFuIGFzeW5jIGZ1bmN0aW9uIGhhbmdpbmcgb3V0IGluIG1lbW9yeS4gVG8gYXZvaWRcbiAgICogdGhpcyBzaXR1YXRpb24sIGxvb2sgaW50byBhZGRpbmcgc29tZXRoaW5nIGxpa2Uge0BsaW5rIHRpbWVvdXR9LCB7QGxpbmsgdGFrZX0sXG4gICAqIHtAbGluayB0YWtlV2hpbGV9LCBvciB7QGxpbmsgdGFrZVVudGlsfSBhbW9uZ3N0IG90aGVycy5cbiAgICpcbiAgICogIyMjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlIH0gZnJvbSAncnhqcyc7XG4gICAqXG4gICAqIGNvbnN0IHNvdXJjZSQgPSBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoNCkpO1xuICAgKlxuICAgKiBhc3luYyBmdW5jdGlvbiBnZXRUb3RhbCgpIHtcbiAgICogICBsZXQgdG90YWwgPSAwO1xuICAgKlxuICAgKiAgIGF3YWl0IHNvdXJjZSQuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAqICAgICB0b3RhbCArPSB2YWx1ZTtcbiAgICogICAgIGNvbnNvbGUubG9nKCdvYnNlcnZhYmxlIC0+ICcgKyB2YWx1ZSk7XG4gICAqICAgfSk7XG4gICAqXG4gICAqICAgcmV0dXJuIHRvdGFsO1xuICAgKiB9XG4gICAqXG4gICAqIGdldFRvdGFsKCkudGhlbihcbiAgICogICB0b3RhbCA9PiBjb25zb2xlLmxvZygnVG90YWw6ICcgKyB0b3RhbClcbiAgICogKTtcbiAgICpcbiAgICogLy8gRXhwZWN0ZWQ6XG4gICAqIC8vICdvYnNlcnZhYmxlIC0+IDAnXG4gICAqIC8vICdvYnNlcnZhYmxlIC0+IDEnXG4gICAqIC8vICdvYnNlcnZhYmxlIC0+IDInXG4gICAqIC8vICdvYnNlcnZhYmxlIC0+IDMnXG4gICAqIC8vICdUb3RhbDogNidcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBuZXh0IGEgaGFuZGxlciBmb3IgZWFjaCB2YWx1ZSBlbWl0dGVkIGJ5IHRoZSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgZWl0aGVyIHJlc29sdmVzIG9uIG9ic2VydmFibGUgY29tcGxldGlvbiBvclxuICAgKiAgcmVqZWN0cyB3aXRoIHRoZSBoYW5kbGVkIGVycm9yXG4gICAqL1xuICBmb3JFYWNoKG5leHQ6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBuZXh0IGEgaGFuZGxlciBmb3IgZWFjaCB2YWx1ZSBlbWl0dGVkIGJ5IHRoZSBvYnNlcnZhYmxlXG4gICAqIEBwYXJhbSBwcm9taXNlQ3RvciBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHVzZWQgdG8gaW5zdGFudGlhdGUgdGhlIFByb21pc2VcbiAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCBlaXRoZXIgcmVzb2x2ZXMgb24gb2JzZXJ2YWJsZSBjb21wbGV0aW9uIG9yXG4gICAqICByZWplY3RzIHdpdGggdGhlIGhhbmRsZWQgZXJyb3JcbiAgICogQGRlcHJlY2F0ZWQgUGFzc2luZyBhIFByb21pc2UgY29uc3RydWN0b3Igd2lsbCBubyBsb25nZXIgYmUgYXZhaWxhYmxlXG4gICAqIGluIHVwY29taW5nIHZlcnNpb25zIG9mIFJ4SlMuIFRoaXMgaXMgYmVjYXVzZSBpdCBhZGRzIHdlaWdodCB0byB0aGUgbGlicmFyeSwgZm9yIHZlcnlcbiAgICogbGl0dGxlIGJlbmVmaXQuIElmIHlvdSBuZWVkIHRoaXMgZnVuY3Rpb25hbGl0eSwgaXQgaXMgcmVjb21tZW5kZWQgdGhhdCB5b3UgZWl0aGVyXG4gICAqIHBvbHlmaWxsIFByb21pc2UsIG9yIHlvdSBjcmVhdGUgYW4gYWRhcHRlciB0byBjb252ZXJ0IHRoZSByZXR1cm5lZCBuYXRpdmUgcHJvbWlzZVxuICAgKiB0byB3aGF0ZXZlciBwcm9taXNlIGltcGxlbWVudGF0aW9uIHlvdSB3YW50ZWQuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIGZvckVhY2gobmV4dDogKHZhbHVlOiBUKSA9PiB2b2lkLCBwcm9taXNlQ3RvcjogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSk6IFByb21pc2U8dm9pZD47XG5cbiAgZm9yRWFjaChuZXh0OiAodmFsdWU6IFQpID0+IHZvaWQsIHByb21pc2VDdG9yPzogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuXG4gICAgcmV0dXJuIG5ldyBwcm9taXNlQ3Rvcjx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBzdWJzY3JpYmVyID0gbmV3IFNhZmVTdWJzY3JpYmVyPFQ+KHtcbiAgICAgICAgbmV4dDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICBjb21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfSkgYXMgUHJvbWlzZTx2b2lkPjtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlPy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gIH1cblxuICAvKipcbiAgICogQW4gaW50ZXJvcCBwb2ludCBkZWZpbmVkIGJ5IHRoZSBlczctb2JzZXJ2YWJsZSBzcGVjIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLW9ic2VydmFibGVcbiAgICogQG1ldGhvZCBTeW1ib2wub2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSB0aGlzIGluc3RhbmNlIG9mIHRoZSBvYnNlcnZhYmxlXG4gICAqL1xuICBbU3ltYm9sX29ic2VydmFibGVdKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4gIHBpcGUoKTogT2JzZXJ2YWJsZTxUPjtcbiAgcGlwZTxBPihvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4pOiBPYnNlcnZhYmxlPEE+O1xuICBwaXBlPEEsIEI+KG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPiwgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+KTogT2JzZXJ2YWJsZTxCPjtcbiAgcGlwZTxBLCBCLCBDPihvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPiwgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+KTogT2JzZXJ2YWJsZTxDPjtcbiAgcGlwZTxBLCBCLCBDLCBEPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD5cbiAgKTogT2JzZXJ2YWJsZTxEPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+XG4gICk6IE9ic2VydmFibGU8RT47XG4gIHBpcGU8QSwgQiwgQywgRCwgRSwgRj4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPixcbiAgICBvcDY6IE9wZXJhdG9yRnVuY3Rpb248RSwgRj5cbiAgKTogT2JzZXJ2YWJsZTxGPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz5cbiAgKTogT2JzZXJ2YWJsZTxHPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz4sXG4gICAgb3A4OiBPcGVyYXRvckZ1bmN0aW9uPEcsIEg+XG4gICk6IE9ic2VydmFibGU8SD47XG4gIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgST4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPixcbiAgICBvcDY6IE9wZXJhdG9yRnVuY3Rpb248RSwgRj4sXG4gICAgb3A3OiBPcGVyYXRvckZ1bmN0aW9uPEYsIEc+LFxuICAgIG9wODogT3BlcmF0b3JGdW5jdGlvbjxHLCBIPixcbiAgICBvcDk6IE9wZXJhdG9yRnVuY3Rpb248SCwgST5cbiAgKTogT2JzZXJ2YWJsZTxJPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz4sXG4gICAgb3A4OiBPcGVyYXRvckZ1bmN0aW9uPEcsIEg+LFxuICAgIG9wOTogT3BlcmF0b3JGdW5jdGlvbjxILCBJPixcbiAgICAuLi5vcGVyYXRpb25zOiBPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55PltdXG4gICk6IE9ic2VydmFibGU8dW5rbm93bj47XG4gIC8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gc3RpdGNoIHRvZ2V0aGVyIGZ1bmN0aW9uYWwgb3BlcmF0b3JzIGludG8gYSBjaGFpbi5cbiAgICogQG1ldGhvZCBwaXBlXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IHRoZSBPYnNlcnZhYmxlIHJlc3VsdCBvZiBhbGwgb2YgdGhlIG9wZXJhdG9ycyBoYXZpbmdcbiAgICogYmVlbiBjYWxsZWQgaW4gdGhlIG9yZGVyIHRoZXkgd2VyZSBwYXNzZWQgaW4uXG4gICAqXG4gICAqICMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgaW50ZXJ2YWwsIGZpbHRlciwgbWFwLCBzY2FuIH0gZnJvbSAncnhqcyc7XG4gICAqXG4gICAqIGludGVydmFsKDEwMDApXG4gICAqICAgLnBpcGUoXG4gICAqICAgICBmaWx0ZXIoeCA9PiB4ICUgMiA9PT0gMCksXG4gICAqICAgICBtYXAoeCA9PiB4ICsgeCksXG4gICAqICAgICBzY2FuKChhY2MsIHgpID0+IGFjYyArIHgpXG4gICAqICAgKVxuICAgKiAgIC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcGlwZSguLi5vcGVyYXRpb25zOiBPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55PltdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShvcGVyYXRpb25zKSh0aGlzKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuICAvKiogQGRlcHJlY2F0ZWQgUmVwbGFjZWQgd2l0aCB7QGxpbmsgZmlyc3RWYWx1ZUZyb219IGFuZCB7QGxpbmsgbGFzdFZhbHVlRnJvbX0uIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvdG8tcHJvbWlzZSAqL1xuICB0b1Byb21pc2UoKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgLyoqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2UgKi9cbiAgdG9Qcm9taXNlKFByb21pc2VDdG9yOiB0eXBlb2YgUHJvbWlzZSk6IFByb21pc2U8VCB8IHVuZGVmaW5lZD47XG4gIC8qKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHtAbGluayBmaXJzdFZhbHVlRnJvbX0gYW5kIHtAbGluayBsYXN0VmFsdWVGcm9tfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy90by1wcm9taXNlICovXG4gIHRvUHJvbWlzZShQcm9taXNlQ3RvcjogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSk6IFByb21pc2U8VCB8IHVuZGVmaW5lZD47XG4gIC8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGlzIE9ic2VydmFibGUgYW5kIGdldCBhIFByb21pc2UgcmVzb2x2aW5nIG9uXG4gICAqIGBjb21wbGV0ZWAgd2l0aCB0aGUgbGFzdCBlbWlzc2lvbiAoaWYgYW55KS5cbiAgICpcbiAgICogKipXQVJOSU5HKio6IE9ubHkgdXNlIHRoaXMgd2l0aCBvYnNlcnZhYmxlcyB5b3UgKmtub3cqIHdpbGwgY29tcGxldGUuIElmIHRoZSBzb3VyY2VcbiAgICogb2JzZXJ2YWJsZSBkb2VzIG5vdCBjb21wbGV0ZSwgeW91IHdpbGwgZW5kIHVwIHdpdGggYSBwcm9taXNlIHRoYXQgaXMgaHVuZyB1cCwgYW5kXG4gICAqIHBvdGVudGlhbGx5IGFsbCBvZiB0aGUgc3RhdGUgb2YgYW4gYXN5bmMgZnVuY3Rpb24gaGFuZ2luZyBvdXQgaW4gbWVtb3J5LiBUbyBhdm9pZFxuICAgKiB0aGlzIHNpdHVhdGlvbiwgbG9vayBpbnRvIGFkZGluZyBzb21ldGhpbmcgbGlrZSB7QGxpbmsgdGltZW91dH0sIHtAbGluayB0YWtlfSxcbiAgICoge0BsaW5rIHRha2VXaGlsZX0sIG9yIHtAbGluayB0YWtlVW50aWx9IGFtb25nc3Qgb3RoZXJzLlxuICAgKlxuICAgKiBAbWV0aG9kIHRvUHJvbWlzZVxuICAgKiBAcGFyYW0gW3Byb21pc2VDdG9yXSBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHVzZWQgdG8gaW5zdGFudGlhdGVcbiAgICogdGhlIFByb21pc2VcbiAgICogQHJldHVybiBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsYXN0IHZhbHVlIGVtaXQsIG9yXG4gICAqIHJlamVjdHMgb24gYW4gZXJyb3IuIElmIHRoZXJlIHdlcmUgbm8gZW1pc3Npb25zLCBQcm9taXNlXG4gICAqIHJlc29sdmVzIHdpdGggdW5kZWZpbmVkLlxuICAgKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHtAbGluayBmaXJzdFZhbHVlRnJvbX0gYW5kIHtAbGluayBsYXN0VmFsdWVGcm9tfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy90by1wcm9taXNlXG4gICAqL1xuICB0b1Byb21pc2UocHJvbWlzZUN0b3I/OiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XG4gICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG5cbiAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB2YWx1ZTogVCB8IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuc3Vic2NyaWJlKFxuICAgICAgICAoeDogVCkgPT4gKHZhbHVlID0geCksXG4gICAgICAgIChlcnI6IGFueSkgPT4gcmVqZWN0KGVyciksXG4gICAgICAgICgpID0+IHJlc29sdmUodmFsdWUpXG4gICAgICApO1xuICAgIH0pIGFzIFByb21pc2U8VCB8IHVuZGVmaW5lZD47XG4gIH1cbn1cblxuLyoqXG4gKiBEZWNpZGVzIGJldHdlZW4gYSBwYXNzZWQgcHJvbWlzZSBjb25zdHJ1Y3RvciBmcm9tIGNvbnN1bWluZyBjb2RlLFxuICogQSBkZWZhdWx0IGNvbmZpZ3VyZWQgcHJvbWlzZSBjb25zdHJ1Y3RvciwgYW5kIHRoZSBuYXRpdmUgcHJvbWlzZVxuICogY29uc3RydWN0b3IgYW5kIHJldHVybnMgaXQuIElmIG5vdGhpbmcgY2FuIGJlIGZvdW5kLCBpdCB3aWxsIHRocm93XG4gKiBhbiBlcnJvci5cbiAqIEBwYXJhbSBwcm9taXNlQ3RvciBUaGUgb3B0aW9uYWwgcHJvbWlzZSBjb25zdHJ1Y3RvciB0byBwYXNzZWQgYnkgY29uc3VtaW5nIGNvZGVcbiAqL1xuZnVuY3Rpb24gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3I6IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UgfCB1bmRlZmluZWQpIHtcbiAgcmV0dXJuIHByb21pc2VDdG9yID8/IGNvbmZpZy5Qcm9taXNlID8/IFByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGlzT2JzZXJ2ZXI8VD4odmFsdWU6IGFueSk6IHZhbHVlIGlzIE9ic2VydmVyPFQ+IHtcbiAgcmV0dXJuIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUubmV4dCkgJiYgaXNGdW5jdGlvbih2YWx1ZS5lcnJvcikgJiYgaXNGdW5jdGlvbih2YWx1ZS5jb21wbGV0ZSk7XG59XG5cbmZ1bmN0aW9uIGlzU3Vic2NyaWJlcjxUPih2YWx1ZTogYW55KTogdmFsdWUgaXMgU3Vic2NyaWJlcjxUPiB7XG4gIHJldHVybiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB8fCAoaXNPYnNlcnZlcih2YWx1ZSkgJiYgaXNTdWJzY3JpcHRpb24odmFsdWUpKTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbi8qKlxuICogVXNlZCB0byBkZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGFuIE9ic2VydmFibGUgd2l0aCBhIGxpZnQgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNMaWZ0KHNvdXJjZTogYW55KTogc291cmNlIGlzIHsgbGlmdDogSW5zdGFuY2VUeXBlPHR5cGVvZiBPYnNlcnZhYmxlPlsnbGlmdCddIH0ge1xuICByZXR1cm4gaXNGdW5jdGlvbihzb3VyY2U/LmxpZnQpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYE9wZXJhdG9yRnVuY3Rpb25gLiBVc2VkIHRvIGRlZmluZSBvcGVyYXRvcnMgdGhyb3VnaG91dCB0aGUgbGlicmFyeSBpbiBhIGNvbmNpc2Ugd2F5LlxuICogQHBhcmFtIGluaXQgVGhlIGxvZ2ljIHRvIGNvbm5lY3QgdGhlIGxpZnRlZFNvdXJjZSB0byB0aGUgc3Vic2NyaWJlciBhdCB0aGUgbW9tZW50IG9mIHN1YnNjcmlwdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9wZXJhdGU8VCwgUj4oXG4gIGluaXQ6IChsaWZ0ZWRTb3VyY2U6IE9ic2VydmFibGU8VD4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4pID0+ICgoKSA9PiB2b2lkKSB8IHZvaWRcbik6IE9wZXJhdG9yRnVuY3Rpb248VCwgUj4ge1xuICByZXR1cm4gKHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xuICAgIGlmIChoYXNMaWZ0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2UubGlmdChmdW5jdGlvbiAodGhpczogU3Vic2NyaWJlcjxSPiwgbGlmdGVkU291cmNlOiBPYnNlcnZhYmxlPFQ+KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGluaXQobGlmdGVkU291cmNlLCB0aGlzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5hYmxlIHRvIGxpZnQgdW5rbm93biBPYnNlcnZhYmxlIHR5cGUnKTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhbiBgT3BlcmF0b3JTdWJzY3JpYmVyYC5cbiAqIEBwYXJhbSBkZXN0aW5hdGlvbiBUaGUgZG93bnN0cmVhbSBzdWJzY3JpYmVyLlxuICogQHBhcmFtIG9uTmV4dCBIYW5kbGVzIG5leHQgdmFsdWVzLCBvbmx5IGNhbGxlZCBpZiB0aGlzIHN1YnNjcmliZXIgaXMgbm90IHN0b3BwZWQgb3IgY2xvc2VkLiBBbnlcbiAqIGVycm9yIHRoYXQgb2NjdXJzIGluIHRoaXMgZnVuY3Rpb24gaXMgY2F1Z2h0IGFuZCBzZW50IHRvIHRoZSBgZXJyb3JgIG1ldGhvZCBvZiB0aGlzIHN1YnNjcmliZXIuXG4gKiBAcGFyYW0gb25FcnJvciBIYW5kbGVzIGVycm9ycyBmcm9tIHRoZSBzdWJzY3JpcHRpb24sIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBpbiB0aGlzIGhhbmRsZXIgYXJlIGNhdWdodFxuICogYW5kIHNlbmQgdG8gdGhlIGBkZXN0aW5hdGlvbmAgZXJyb3IgaGFuZGxlci5cbiAqIEBwYXJhbSBvbkNvbXBsZXRlIEhhbmRsZXMgY29tcGxldGlvbiBub3RpZmljYXRpb24gZnJvbSB0aGUgc3Vic2NyaXB0aW9uLiBBbnkgZXJyb3JzIHRoYXQgb2NjdXIgaW5cbiAqIHRoaXMgaGFuZGxlciBhcmUgc2VudCB0byB0aGUgYGRlc3RpbmF0aW9uYCBlcnJvciBoYW5kbGVyLlxuICogQHBhcmFtIG9uRmluYWxpemUgQWRkaXRpb25hbCB0ZWFyZG93biBsb2dpYyBoZXJlLiBUaGlzIHdpbGwgb25seSBiZSBjYWxsZWQgb24gdGVhcmRvd24gaWYgdGhlXG4gKiBzdWJzY3JpYmVyIGl0c2VsZiBpcyBub3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGFsbCBvdGhlciB0ZWFyZG93biBsb2dpYyBpcyBleGVjdXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcjxUPihcbiAgZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55PixcbiAgb25OZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuICBvbkNvbXBsZXRlPzogKCkgPT4gdm9pZCxcbiAgb25FcnJvcj86IChlcnI6IGFueSkgPT4gdm9pZCxcbiAgb25GaW5hbGl6ZT86ICgpID0+IHZvaWRcbik6IFN1YnNjcmliZXI8VD4ge1xuICByZXR1cm4gbmV3IE9wZXJhdG9yU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgb25OZXh0LCBvbkNvbXBsZXRlLCBvbkVycm9yLCBvbkZpbmFsaXplKTtcbn1cblxuLyoqXG4gKiBBIGdlbmVyaWMgaGVscGVyIGZvciBhbGxvd2luZyBvcGVyYXRvcnMgdG8gYmUgY3JlYXRlZCB3aXRoIGEgU3Vic2NyaWJlciBhbmRcbiAqIHVzZSBjbG9zdXJlcyB0byBjYXB0dXJlIG5lY2Vzc2FyeSBzdGF0ZSBmcm9tIHRoZSBvcGVyYXRvciBmdW5jdGlvbiBpdHNlbGYuXG4gKi9cbmV4cG9ydCBjbGFzcyBPcGVyYXRvclN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYW4gYE9wZXJhdG9yU3Vic2NyaWJlcmAuXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbiBUaGUgZG93bnN0cmVhbSBzdWJzY3JpYmVyLlxuICAgKiBAcGFyYW0gb25OZXh0IEhhbmRsZXMgbmV4dCB2YWx1ZXMsIG9ubHkgY2FsbGVkIGlmIHRoaXMgc3Vic2NyaWJlciBpcyBub3Qgc3RvcHBlZCBvciBjbG9zZWQuIEFueVxuICAgKiBlcnJvciB0aGF0IG9jY3VycyBpbiB0aGlzIGZ1bmN0aW9uIGlzIGNhdWdodCBhbmQgc2VudCB0byB0aGUgYGVycm9yYCBtZXRob2Qgb2YgdGhpcyBzdWJzY3JpYmVyLlxuICAgKiBAcGFyYW0gb25FcnJvciBIYW5kbGVzIGVycm9ycyBmcm9tIHRoZSBzdWJzY3JpcHRpb24sIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBpbiB0aGlzIGhhbmRsZXIgYXJlIGNhdWdodFxuICAgKiBhbmQgc2VuZCB0byB0aGUgYGRlc3RpbmF0aW9uYCBlcnJvciBoYW5kbGVyLlxuICAgKiBAcGFyYW0gb25Db21wbGV0ZSBIYW5kbGVzIGNvbXBsZXRpb24gbm90aWZpY2F0aW9uIGZyb20gdGhlIHN1YnNjcmlwdGlvbi4gQW55IGVycm9ycyB0aGF0IG9jY3VyIGluXG4gICAqIHRoaXMgaGFuZGxlciBhcmUgc2VudCB0byB0aGUgYGRlc3RpbmF0aW9uYCBlcnJvciBoYW5kbGVyLlxuICAgKiBAcGFyYW0gb25GaW5hbGl6ZSBBZGRpdGlvbmFsIGZpbmFsaXphdGlvbiBsb2dpYyBoZXJlLiBUaGlzIHdpbGwgb25seSBiZSBjYWxsZWQgb24gZmluYWxpemF0aW9uIGlmIHRoZVxuICAgKiBzdWJzY3JpYmVyIGl0c2VsZiBpcyBub3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGFsbCBvdGhlciBmaW5hbGl6YXRpb24gbG9naWMgaXMgZXhlY3V0ZWQuXG4gICAqIEBwYXJhbSBzaG91bGRVbnN1YnNjcmliZSBBbiBvcHRpb25hbCBjaGVjayB0byBzZWUgaWYgYW4gdW5zdWJzY3JpYmUgY2FsbCBzaG91bGQgdHJ1bHkgdW5zdWJzY3JpYmUuXG4gICAqIE5PVEU6IFRoaXMgY3VycmVudGx5ICoqT05MWSoqIGV4aXN0cyB0byBzdXBwb3J0IHRoZSBzdHJhbmdlIGJlaGF2aW9yIG9mIHtAbGluayBncm91cEJ5fSwgd2hlcmUgdW5zdWJzY3JpcHRpb25cbiAgICogdG8gdGhlIHJlc3VsdGluZyBvYnNlcnZhYmxlIGRvZXMgbm90IGFjdHVhbGx5IGRpc2Nvbm5lY3QgZnJvbSB0aGUgc291cmNlIGlmIHRoZXJlIGFyZSBhY3RpdmUgc3Vic2NyaXB0aW9uc1xuICAgKiB0byBhbnkgZ3JvdXBlZCBvYnNlcnZhYmxlLiAoRE8gTk9UIEVYUE9TRSBPUiBVU0UgRVhURVJOQUxMWSEhISlcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPGFueT4sXG4gICAgb25OZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuICAgIG9uQ29tcGxldGU/OiAoKSA9PiB2b2lkLFxuICAgIG9uRXJyb3I/OiAoZXJyOiBhbnkpID0+IHZvaWQsXG4gICAgcHJpdmF0ZSBvbkZpbmFsaXplPzogKCkgPT4gdm9pZCxcbiAgICBwcml2YXRlIHNob3VsZFVuc3Vic2NyaWJlPzogKCkgPT4gYm9vbGVhblxuICApIHtcbiAgICAvLyBJdCdzIGltcG9ydGFudCAtIGZvciBwZXJmb3JtYW5jZSByZWFzb25zIC0gdGhhdCBhbGwgb2YgdGhpcyBjbGFzcydzXG4gICAgLy8gbWVtYmVycyBhcmUgaW5pdGlhbGl6ZWQgYW5kIHRoYXQgdGhleSBhcmUgYWx3YXlzIGluaXRpYWxpemVkIGluIHRoZSBzYW1lXG4gICAgLy8gb3JkZXIuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBhbGwgT3BlcmF0b3JTdWJzY3JpYmVyIGluc3RhbmNlcyBoYXZlIHRoZVxuICAgIC8vIHNhbWUgaGlkZGVuIGNsYXNzIGluIFY4LiBUaGlzLCBpbiB0dXJuLCB3aWxsIGhlbHAga2VlcCB0aGUgbnVtYmVyIG9mXG4gICAgLy8gaGlkZGVuIGNsYXNzZXMgaW52b2x2ZWQgaW4gcHJvcGVydHkgYWNjZXNzZXMgd2l0aGluIHRoZSBiYXNlIGNsYXNzIGFzXG4gICAgLy8gbG93IGFzIHBvc3NpYmxlLiBJZiB0aGUgbnVtYmVyIG9mIGhpZGRlbiBjbGFzc2VzIGludm9sdmVkIGV4Y2VlZHMgZm91cixcbiAgICAvLyB0aGUgcHJvcGVydHkgYWNjZXNzZXMgd2lsbCBiZWNvbWUgbWVnYW1vcnBoaWMgYW5kIHBlcmZvcm1hbmNlIHBlbmFsdGllc1xuICAgIC8vIHdpbGwgYmUgaW5jdXJyZWQgLSBpLmUuIGlubGluZSBjYWNoZXMgd29uJ3QgYmUgdXNlZC5cbiAgICAvL1xuICAgIC8vIFRoZSByZWFzb25zIGZvciBlbnN1cmluZyBhbGwgaW5zdGFuY2VzIGhhdmUgdGhlIHNhbWUgaGlkZGVuIGNsYXNzIGFyZVxuICAgIC8vIGZ1cnRoZXIgZGlzY3Vzc2VkIGluIHRoaXMgYmxvZyBwb3N0IGZyb20gQmVuZWRpa3QgTWV1cmVyOlxuICAgIC8vIGh0dHBzOi8vYmVuZWRpa3RtZXVyZXIuZGUvMjAxOC8wMy8yMy9pbXBhY3Qtb2YtcG9seW1vcnBoaXNtLW9uLWNvbXBvbmVudC1iYXNlZC1mcmFtZXdvcmtzLWxpa2UtcmVhY3QvXG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMuX25leHQgPSBvbk5leHRcbiAgICAgID8gZnVuY3Rpb24gKHRoaXM6IE9wZXJhdG9yU3Vic2NyaWJlcjxUPiwgdmFsdWU6IFQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb25OZXh0KHZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA6IHN1cGVyLl9uZXh0O1xuICAgIHRoaXMuX2Vycm9yID0gb25FcnJvclxuICAgICAgPyBmdW5jdGlvbiAodGhpczogT3BlcmF0b3JTdWJzY3JpYmVyPFQ+LCBlcnI6IGFueSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBTZW5kIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBkb3duIHN0cmVhbS5cbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBmaW5hbGl6YXRpb24uXG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA6IHN1cGVyLl9lcnJvcjtcbiAgICB0aGlzLl9jb21wbGV0ZSA9IG9uQ29tcGxldGVcbiAgICAgID8gZnVuY3Rpb24gKHRoaXM6IE9wZXJhdG9yU3Vic2NyaWJlcjxUPikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBTZW5kIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBkb3duIHN0cmVhbS5cbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBmaW5hbGl6YXRpb24uXG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA6IHN1cGVyLl9jb21wbGV0ZTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5zaG91bGRVbnN1YnNjcmliZSB8fCB0aGlzLnNob3VsZFVuc3Vic2NyaWJlKCkpIHtcbiAgICAgIGNvbnN0IHsgY2xvc2VkIH0gPSB0aGlzO1xuICAgICAgc3VwZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgIC8vIEV4ZWN1dGUgYWRkaXRpb25hbCB0ZWFyZG93biBpZiB3ZSBoYXZlIGFueSBhbmQgd2UgZGlkbid0IGFscmVhZHkgZG8gc28uXG4gICAgICAhY2xvc2VkICYmIHRoaXMub25GaW5hbGl6ZT8uKCk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlRXJyb3JDbGFzcyB9IGZyb20gJy4vY3JlYXRlRXJyb3JDbGFzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yQ3RvciB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIERvIG5vdCBjb25zdHJ1Y3QgZXJyb3IgaW5zdGFuY2VzLlxuICAgKiBDYW5ub3QgYmUgdGFnZ2VkIGFzIGludGVybmFsOiBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RpdmVYL3J4anMvaXNzdWVzLzYyNjlcbiAgICovXG4gIG5ldyAoKTogT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3I7XG59XG5cbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gYW4gYWN0aW9uIGlzIGludmFsaWQgYmVjYXVzZSB0aGUgb2JqZWN0IGhhcyBiZWVuXG4gKiB1bnN1YnNjcmliZWQuXG4gKlxuICogQHNlZSB7QGxpbmsgU3ViamVjdH1cbiAqIEBzZWUge0BsaW5rIEJlaGF2aW9yU3ViamVjdH1cbiAqXG4gKiBAY2xhc3MgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yOiBPYmplY3RVbnN1YnNjcmliZWRFcnJvckN0b3IgPSBjcmVhdGVFcnJvckNsYXNzKFxuICAoX3N1cGVyKSA9PlxuICAgIGZ1bmN0aW9uIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbCh0aGlzOiBhbnkpIHtcbiAgICAgIF9zdXBlcih0aGlzKTtcbiAgICAgIHRoaXMubmFtZSA9ICdPYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSAnb2JqZWN0IHVuc3Vic2NyaWJlZCc7XG4gICAgfVxuKTtcbiIsICJpbXBvcnQgeyBPcGVyYXRvciB9IGZyb20gJy4vT3BlcmF0b3InO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgRU1QVFlfU1VCU0NSSVBUSU9OIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIFN1YnNjcmlwdGlvbkxpa2UsIFRlYXJkb3duTG9naWMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIH0gZnJvbSAnLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4vdXRpbC9hcnJSZW1vdmUnO1xuaW1wb3J0IHsgZXJyb3JDb250ZXh0IH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG5cbi8qKlxuICogQSBTdWJqZWN0IGlzIGEgc3BlY2lhbCB0eXBlIG9mIE9ic2VydmFibGUgdGhhdCBhbGxvd3MgdmFsdWVzIHRvIGJlXG4gKiBtdWx0aWNhc3RlZCB0byBtYW55IE9ic2VydmVycy4gU3ViamVjdHMgYXJlIGxpa2UgRXZlbnRFbWl0dGVycy5cbiAqXG4gKiBFdmVyeSBTdWJqZWN0IGlzIGFuIE9ic2VydmFibGUgYW5kIGFuIE9ic2VydmVyLiBZb3UgY2FuIHN1YnNjcmliZSB0byBhXG4gKiBTdWJqZWN0LCBhbmQgeW91IGNhbiBjYWxsIG5leHQgdG8gZmVlZCB2YWx1ZXMgYXMgd2VsbCBhcyBlcnJvciBhbmQgY29tcGxldGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJqZWN0PFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIFN1YnNjcmlwdGlvbkxpa2Uge1xuICBjbG9zZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGN1cnJlbnRPYnNlcnZlcnM6IE9ic2VydmVyPFQ+W10gfCBudWxsID0gbnVsbDtcblxuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIG9ic2VydmVyczogT2JzZXJ2ZXI8VD5bXSA9IFtdO1xuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIGlzU3RvcHBlZCA9IGZhbHNlO1xuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIGhhc0Vycm9yID0gZmFsc2U7XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgdGhyb3duRXJyb3I6IGFueSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBcInN1YmplY3RcIiBieSBiYXNpY2FsbHkgZ2x1aW5nIGFuIG9ic2VydmVyIHRvIGFuIG9ic2VydmFibGUuXG4gICAqXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBkZXByZWNhdGVkIFJlY29tbWVuZGVkIHlvdSBkbyBub3QgdXNlLiBXaWxsIGJlIHJlbW92ZWQgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLiBQbGFucyBmb3IgcmVwbGFjZW1lbnQgc3RpbGwgdW5kZXIgZGlzY3Vzc2lvbi5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGU6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55ID0gPFQ+KGRlc3RpbmF0aW9uOiBPYnNlcnZlcjxUPiwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KTogQW5vbnltb3VzU3ViamVjdDxUPiA9PiB7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNTdWJqZWN0PFQ+KGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIE5PVEU6IFRoaXMgbXVzdCBiZSBoZXJlIHRvIG9ic2N1cmUgT2JzZXJ2YWJsZSdzIGNvbnN0cnVjdG9yLlxuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPFQsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgY29uc3Qgc3ViamVjdCA9IG5ldyBBbm9ueW1vdXNTdWJqZWN0KHRoaXMsIHRoaXMpO1xuICAgIHN1YmplY3Qub3BlcmF0b3IgPSBvcGVyYXRvciBhcyBhbnk7XG4gICAgcmV0dXJuIHN1YmplY3QgYXMgYW55O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3Rocm93SWZDbG9zZWQoKSB7XG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KHZhbHVlOiBUKSB7XG4gICAgZXJyb3JDb250ZXh0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRPYnNlcnZlcnMpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBBcnJheS5mcm9tKHRoaXMub2JzZXJ2ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMuY3VycmVudE9ic2VydmVycykge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBlcnJvcihlcnI6IGFueSkge1xuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGhyb3duRXJyb3IgPSBlcnI7XG4gICAgICAgIGNvbnN0IHsgb2JzZXJ2ZXJzIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAob2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpIS5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBlcnJvckNvbnRleHQoKCkgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHsgb2JzZXJ2ZXJzIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAob2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpIS5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICB0aGlzLmlzU3RvcHBlZCA9IHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLm9ic2VydmVycyA9IHRoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGwhO1xuICB9XG5cbiAgZ2V0IG9ic2VydmVkKCkge1xuICAgIHJldHVybiB0aGlzLm9ic2VydmVycz8ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF90cnlTdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPik6IFRlYXJkb3duTG9naWMge1xuICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICByZXR1cm4gc3VwZXIuX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPik6IFN1YnNjcmlwdGlvbiB7XG4gICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgIHRoaXMuX2NoZWNrRmluYWxpemVkU3RhdHVzZXMoc3Vic2NyaWJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2lubmVyU3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX2lubmVyU3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55Pikge1xuICAgIGNvbnN0IHsgaGFzRXJyb3IsIGlzU3RvcHBlZCwgb2JzZXJ2ZXJzIH0gPSB0aGlzO1xuICAgIGlmIChoYXNFcnJvciB8fCBpc1N0b3BwZWQpIHtcbiAgICAgIHJldHVybiBFTVBUWV9TVUJTQ1JJUFRJT047XG4gICAgfVxuICAgIHRoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgb2JzZXJ2ZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbDtcbiAgICAgIGFyclJlbW92ZShvYnNlcnZlcnMsIHN1YnNjcmliZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX2NoZWNrRmluYWxpemVkU3RhdHVzZXMoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSB7XG4gICAgY29uc3QgeyBoYXNFcnJvciwgdGhyb3duRXJyb3IsIGlzU3RvcHBlZCB9ID0gdGhpcztcbiAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhyb3duRXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoaXNTdG9wcGVkKSB7XG4gICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgT2JzZXJ2YWJsZSB3aXRoIHRoaXMgU3ViamVjdCBhcyB0aGUgc291cmNlLiBZb3UgY2FuIGRvIHRoaXNcbiAgICogdG8gY3JlYXRlIGN1c3RvbSBPYnNlcnZlci1zaWRlIGxvZ2ljIG9mIHRoZSBTdWJqZWN0IGFuZCBjb25jZWFsIGl0IGZyb21cbiAgICogY29kZSB0aGF0IHVzZXMgdGhlIE9ic2VydmFibGUuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IE9ic2VydmFibGUgdGhhdCB0aGUgU3ViamVjdCBjYXN0cyB0b1xuICAgKi9cbiAgYXNPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IG9ic2VydmFibGU6IGFueSA9IG5ldyBPYnNlcnZhYmxlPFQ+KCk7XG4gICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIEFub255bW91c1N1YmplY3Q8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIEFub255bW91c1N1YmplY3Q8VD4gZXh0ZW5kcyBTdWJqZWN0PFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICAgIHB1YmxpYyBkZXN0aW5hdGlvbj86IE9ic2VydmVyPFQ+LFxuICAgIHNvdXJjZT86IE9ic2VydmFibGU8VD5cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgfVxuXG4gIG5leHQodmFsdWU6IFQpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uPy5uZXh0Py4odmFsdWUpO1xuICB9XG5cbiAgZXJyb3IoZXJyOiBhbnkpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uPy5lcnJvcj8uKGVycik7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uPy5jb21wbGV0ZT8uKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZT8uc3Vic2NyaWJlKHN1YnNjcmliZXIpID8/IEVNUFRZX1NVQlNDUklQVElPTjtcbiAgfVxufVxuIiwgImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5cbi8qKlxuICogQSB2YXJpYW50IG9mIFN1YmplY3QgdGhhdCByZXF1aXJlcyBhbiBpbml0aWFsIHZhbHVlIGFuZCBlbWl0cyBpdHMgY3VycmVudFxuICogdmFsdWUgd2hlbmV2ZXIgaXQgaXMgc3Vic2NyaWJlZCB0by5cbiAqXG4gKiBAY2xhc3MgQmVoYXZpb3JTdWJqZWN0PFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBCZWhhdmlvclN1YmplY3Q8VD4gZXh0ZW5kcyBTdWJqZWN0PFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmFsdWU6IFQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IFQge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHN1cGVyLl9zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgIXN1YnNjcmlwdGlvbi5jbG9zZWQgJiYgc3Vic2NyaWJlci5uZXh0KHRoaXMuX3ZhbHVlKTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0VmFsdWUoKTogVCB7XG4gICAgY29uc3QgeyBoYXNFcnJvciwgdGhyb3duRXJyb3IsIF92YWx1ZSB9ID0gdGhpcztcbiAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgIHRocm93IHRocm93bkVycm9yO1xuICAgIH1cbiAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgcmV0dXJuIF92YWx1ZTtcbiAgfVxuXG4gIG5leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBzdXBlci5uZXh0KCh0aGlzLl92YWx1ZSA9IHZhbHVlKSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NjaGVkdWxlcih2YWx1ZTogYW55KTogdmFsdWUgaXMgU2NoZWR1bGVyTGlrZSB7XG4gIHJldHVybiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnNjaGVkdWxlKTtcbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBpc1NjaGVkdWxlciB9IGZyb20gJy4vaXNTY2hlZHVsZXInO1xuXG5mdW5jdGlvbiBsYXN0PFQ+KGFycjogVFtdKTogVCB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wUmVzdWx0U2VsZWN0b3IoYXJnczogYW55W10pOiAoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdW5rbm93bikgfCB1bmRlZmluZWQge1xuICByZXR1cm4gaXNGdW5jdGlvbihsYXN0KGFyZ3MpKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BTY2hlZHVsZXIoYXJnczogYW55W10pOiBTY2hlZHVsZXJMaWtlIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGlzU2NoZWR1bGVyKGxhc3QoYXJncykpID8gYXJncy5wb3AoKSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcE51bWJlcihhcmdzOiBhbnlbXSwgZGVmYXVsdFZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIGxhc3QoYXJncykgPT09ICdudW1iZXInID8gYXJncy5wb3AoKSEgOiBkZWZhdWx0VmFsdWU7XG59XG4iLCAiZXhwb3J0IGNvbnN0IGlzQXJyYXlMaWtlID0gKDxUPih4OiBhbnkpOiB4IGlzIEFycmF5TGlrZTxUPiA9PiB4ICYmIHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHggIT09ICdmdW5jdGlvbicpOyIsICJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSBcIi4vaXNGdW5jdGlvblwiO1xuXG4vKipcbiAqIFRlc3RzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIFwidGhlbm5hYmxlXCIuXG4gKiBAcGFyYW0gdmFsdWUgdGhlIG9iamVjdCB0byB0ZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2UodmFsdWU6IGFueSk6IHZhbHVlIGlzIFByb21pc2VMaWtlPGFueT4ge1xuICByZXR1cm4gaXNGdW5jdGlvbih2YWx1ZT8udGhlbik7XG59XG4iLCAiaW1wb3J0IHsgSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbi8qKiBJZGVudGlmaWVzIGFuIGlucHV0IGFzIGJlaW5nIE9ic2VydmFibGUgKGJ1dCBub3QgbmVjZXNzYXJ5IGFuIFJ4IE9ic2VydmFibGUpICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dDogYW55KTogaW5wdXQgaXMgSW50ZXJvcE9ic2VydmFibGU8YW55PiB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGlucHV0W1N5bWJvbF9vYnNlcnZhYmxlXSk7XG59XG4iLCAiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FzeW5jSXRlcmFibGU8VD4ob2JqOiBhbnkpOiBvYmogaXMgQXN5bmNJdGVyYWJsZTxUPiB7XG4gIHJldHVybiBTeW1ib2wuYXN5bmNJdGVyYXRvciAmJiBpc0Z1bmN0aW9uKG9iaj8uW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG59XG4iLCAiLyoqXG4gKiBDcmVhdGVzIHRoZSBUeXBlRXJyb3IgdG8gdGhyb3cgaWYgYW4gaW52YWxpZCBvYmplY3QgaXMgcGFzc2VkIHRvIGBmcm9tYCBvciBgc2NoZWR1bGVkYC5cbiAqIEBwYXJhbSBpbnB1dCBUaGUgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0OiBhbnkpIHtcbiAgLy8gVE9ETzogV2Ugc2hvdWxkIGNyZWF0ZSBlcnJvciBjb2RlcyB0aGF0IGNhbiBiZSBsb29rZWQgdXAsIHNvIHRoaXMgY2FuIGJlIGxlc3MgdmVyYm9zZS5cbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXG4gICAgYFlvdSBwcm92aWRlZCAke1xuICAgICAgaW5wdXQgIT09IG51bGwgJiYgdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyA/ICdhbiBpbnZhbGlkIG9iamVjdCcgOiBgJyR7aW5wdXR9J2BcbiAgICB9IHdoZXJlIGEgc3RyZWFtIHdhcyBleHBlY3RlZC4gWW91IGNhbiBwcm92aWRlIGFuIE9ic2VydmFibGUsIFByb21pc2UsIFJlYWRhYmxlU3RyZWFtLCBBcnJheSwgQXN5bmNJdGVyYWJsZSwgb3IgSXRlcmFibGUuYFxuICApO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBnZXRTeW1ib2xJdGVyYXRvcigpOiBzeW1ib2wge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCAhU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgcmV0dXJuICdAQGl0ZXJhdG9yJyBhcyBhbnk7XG4gIH1cblxuICByZXR1cm4gU3ltYm9sLml0ZXJhdG9yO1xufVxuXG5leHBvcnQgY29uc3QgaXRlcmF0b3IgPSBnZXRTeW1ib2xJdGVyYXRvcigpO1xuIiwgImltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuLyoqIElkZW50aWZpZXMgYW4gaW5wdXQgYXMgYmVpbmcgYW4gSXRlcmFibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0l0ZXJhYmxlKGlucHV0OiBhbnkpOiBpbnB1dCBpcyBJdGVyYWJsZTxhbnk+IHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oaW5wdXQ/LltTeW1ib2xfaXRlcmF0b3JdKTtcbn1cbiIsICJpbXBvcnQgeyBSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uKiByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yPFQ+KHJlYWRhYmxlU3RyZWFtOiBSZWFkYWJsZVN0cmVhbUxpa2U8VD4pOiBBc3luY0dlbmVyYXRvcjxUPiB7XG4gIGNvbnN0IHJlYWRlciA9IHJlYWRhYmxlU3RyZWFtLmdldFJlYWRlcigpO1xuICB0cnkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgeWllbGQgdmFsdWUhO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWFkZXIucmVsZWFzZUxvY2soKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkYWJsZVN0cmVhbUxpa2U8VD4ob2JqOiBhbnkpOiBvYmogaXMgUmVhZGFibGVTdHJlYW1MaWtlPFQ+IHtcbiAgLy8gV2UgZG9uJ3Qgd2FudCB0byB1c2UgaW5zdGFuY2VvZiBjaGVja3MgYmVjYXVzZSB0aGV5IHdvdWxkIHJldHVyblxuICAvLyBmYWxzZSBmb3IgaW5zdGFuY2VzIGZyb20gYW5vdGhlciBSZWFsbSwgbGlrZSBhbiA8aWZyYW1lPi5cbiAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqPy5nZXRSZWFkZXIpO1xufVxuIiwgImltcG9ydCB7IGlzQXJyYXlMaWtlIH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5TGlrZSc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuLi91dGlsL2lzUHJvbWlzZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIE9ic2VydmVkVmFsdWVPZiwgUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FzeW5jSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvciB9IGZyb20gJy4uL3V0aWwvdGhyb3dVbm9ic2VydmFibGVFcnJvcic7XG5pbXBvcnQgeyBpc0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzUmVhZGFibGVTdHJlYW1MaWtlLCByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi4vdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvcic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJGcm9tPE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oaW5wdXQ6IE8pOiBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPj47XG5leHBvcnQgZnVuY3Rpb24gaW5uZXJGcm9tPFQ+KGlucHV0OiBPYnNlcnZhYmxlSW5wdXQ8VD4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgaWYgKGlucHV0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgIGlmIChpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21JbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tUHJvbWlzZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc0FzeW5jSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbUFzeW5jSXRlcmFibGUoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tSXRlcmFibGUoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbVJlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gUnhKUyBPYnNlcnZhYmxlIGZyb20gYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyBgU3ltYm9sLm9ic2VydmFibGVgLlxuICogQHBhcmFtIG9iaiBBbiBvYmplY3QgdGhhdCBwcm9wZXJseSBpbXBsZW1lbnRzIGBTeW1ib2wub2JzZXJ2YWJsZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSW50ZXJvcE9ic2VydmFibGU8VD4ob2JqOiBhbnkpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgY29uc3Qgb2JzID0gb2JqW1N5bWJvbF9vYnNlcnZhYmxlXSgpO1xuICAgIGlmIChpc0Z1bmN0aW9uKG9icy5zdWJzY3JpYmUpKSB7XG4gICAgICByZXR1cm4gb2JzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIGJlIGNhdWdodCBieSBvYnNlcnZhYmxlIHN1YnNjcmliZSBmdW5jdGlvbiBlcnJvciBoYW5kbGluZy5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm92aWRlZCBvYmplY3QgZG9lcyBub3QgY29ycmVjdGx5IGltcGxlbWVudCBTeW1ib2wub2JzZXJ2YWJsZScpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTeW5jaHJvbm91c2x5IGVtaXRzIHRoZSB2YWx1ZXMgb2YgYW4gYXJyYXkgbGlrZSBhbmQgY29tcGxldGVzLlxuICogVGhpcyBpcyBleHBvcnRlZCBiZWNhdXNlIHRoZXJlIGFyZSBjcmVhdGlvbiBmdW5jdGlvbnMgYW5kIG9wZXJhdG9ycyB0aGF0IG5lZWQgdG9cbiAqIG1ha2UgZGlyZWN0IHVzZSBvZiB0aGUgc2FtZSBsb2dpYywgYW5kIHRoZXJlJ3Mgbm8gcmVhc29uIHRvIG1ha2UgdGhlbSBydW4gdGhyb3VnaFxuICogYGZyb21gIGNvbmRpdGlvbmFscyBiZWNhdXNlIHdlICprbm93KiB0aGV5J3JlIGRlYWxpbmcgd2l0aCBhbiBhcnJheS5cbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gZW1pdCB2YWx1ZXMgZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUFycmF5TGlrZTxUPihhcnJheTogQXJyYXlMaWtlPFQ+KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIC8vIExvb3Agb3ZlciB0aGUgYXJyYXkgYW5kIGVtaXQgZWFjaCB2YWx1ZS4gTm90ZSB0d28gdGhpbmdzIGhlcmU6XG4gICAgLy8gMS4gV2UncmUgbWFraW5nIHN1cmUgdGhhdCB0aGUgc3Vic2NyaWJlciBpcyBub3QgY2xvc2VkIG9uIGVhY2ggbG9vcC5cbiAgICAvLyAgICBUaGlzIGlzIHNvIHdlIGRvbid0IGNvbnRpbnVlIGxvb3Bpbmcgb3ZlciBhIHZlcnkgbGFyZ2UgYXJyYXkgYWZ0ZXJcbiAgICAvLyAgICBzb21ldGhpbmcgbGlrZSBhIGB0YWtlYCwgYHRha2VXaGlsZWAsIG9yIG90aGVyIHN5bmNocm9ub3VzIHVuc3Vic2NyaXB0aW9uXG4gICAgLy8gICAgaGFzIGFscmVhZHkgdW5zdWJzY3JpYmVkLlxuICAgIC8vIDIuIEluIHRoaXMgZm9ybSwgcmVlbnRyYW50IGNvZGUgY2FuIGFsdGVyIHRoYXQgYXJyYXkgd2UncmUgbG9vcGluZyBvdmVyLlxuICAgIC8vICAgIFRoaXMgaXMgYSBrbm93biBpc3N1ZSwgYnV0IGNvbnNpZGVyZWQgYW4gZWRnZSBjYXNlLiBUaGUgYWx0ZXJuYXRpdmUgd291bGRcbiAgICAvLyAgICBiZSB0byBjb3B5IHRoZSBhcnJheSBiZWZvcmUgZXhlY3V0aW5nIHRoZSBsb29wLCBidXQgdGhpcyBoYXNcbiAgICAvLyAgICBwZXJmb3JtYW5jZSBpbXBsaWNhdGlvbnMuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGggJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpXSk7XG4gICAgfVxuICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUHJvbWlzZTxUPihwcm9taXNlOiBQcm9taXNlTGlrZTxUPikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICBwcm9taXNlXG4gICAgICAudGhlbihcbiAgICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnI6IGFueSkgPT4gc3Vic2NyaWJlci5lcnJvcihlcnIpXG4gICAgICApXG4gICAgICAudGhlbihudWxsLCByZXBvcnRVbmhhbmRsZWRFcnJvcik7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUl0ZXJhYmxlPFQ+KGl0ZXJhYmxlOiBJdGVyYWJsZTxUPikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGl0ZXJhYmxlKSB7XG4gICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Bc3luY0l0ZXJhYmxlPFQ+KGFzeW5jSXRlcmFibGU6IEFzeW5jSXRlcmFibGU8VD4pIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgcHJvY2Vzcyhhc3luY0l0ZXJhYmxlLCBzdWJzY3JpYmVyKS5jYXRjaCgoZXJyKSA9PiBzdWJzY3JpYmVyLmVycm9yKGVycikpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21SZWFkYWJsZVN0cmVhbUxpa2U8VD4ocmVhZGFibGVTdHJlYW06IFJlYWRhYmxlU3RyZWFtTGlrZTxUPikge1xuICByZXR1cm4gZnJvbUFzeW5jSXRlcmFibGUocmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcihyZWFkYWJsZVN0cmVhbSkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzPFQ+KGFzeW5jSXRlcmFibGU6IEFzeW5jSXRlcmFibGU8VD4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pIHtcbiAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBhc3luY0l0ZXJhYmxlKSB7XG4gICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAvLyBBIHNpZGUtZWZmZWN0IG1heSBoYXZlIGNsb3NlZCBvdXIgc3Vic2NyaWJlcixcbiAgICAvLyBjaGVjayBiZWZvcmUgdGhlIG5leHQgaXRlcmF0aW9uLlxuICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG59XG4iLCAiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFNjaGVkdWxlckFjdGlvbiwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTY2hlZHVsZShcbiAgcGFyZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24sXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSxcbiAgd29yazogKCkgPT4gdm9pZCxcbiAgZGVsYXk6IG51bWJlcixcbiAgcmVwZWF0OiB0cnVlXG4pOiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTY2hlZHVsZShcbiAgcGFyZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24sXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSxcbiAgd29yazogKCkgPT4gdm9pZCxcbiAgZGVsYXk/OiBudW1iZXIsXG4gIHJlcGVhdD86IGZhbHNlXG4pOiBTdWJzY3JpcHRpb247XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU2NoZWR1bGUoXG4gIHBhcmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsXG4gIHdvcms6ICgpID0+IHZvaWQsXG4gIGRlbGF5ID0gMCxcbiAgcmVwZWF0ID0gZmFsc2Vcbik6IFN1YnNjcmlwdGlvbiB8IHZvaWQge1xuICBjb25zdCBzY2hlZHVsZVN1YnNjcmlwdGlvbiA9IHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAodGhpczogU2NoZWR1bGVyQWN0aW9uPGFueT4pIHtcbiAgICB3b3JrKCk7XG4gICAgaWYgKHJlcGVhdCkge1xuICAgICAgcGFyZW50U3Vic2NyaXB0aW9uLmFkZCh0aGlzLnNjaGVkdWxlKG51bGwsIGRlbGF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH0sIGRlbGF5KTtcblxuICBwYXJlbnRTdWJzY3JpcHRpb24uYWRkKHNjaGVkdWxlU3Vic2NyaXB0aW9uKTtcblxuICBpZiAoIXJlcGVhdCkge1xuICAgIC8vIEJlY2F1c2UgdXNlci1sYW5kIHNjaGVkdWxlciBpbXBsZW1lbnRhdGlvbnMgYXJlIHVubGlrZWx5IHRvIHByb3Blcmx5IHJldXNlXG4gICAgLy8gQWN0aW9ucyBmb3IgcmVwZWF0IHNjaGVkdWxpbmcsIHdlIGNhbid0IHRydXN0IHRoYXQgdGhlIHJldHVybmVkIHN1YnNjcmlwdGlvblxuICAgIC8vIHdpbGwgY29udHJvbCByZXBlYXQgc3Vic2NyaXB0aW9uIHNjZW5hcmlvcy4gU28gd2UncmUgdHJ5aW5nIHRvIGF2b2lkIHVzaW5nIHRoZW1cbiAgICAvLyBpbmNvcnJlY3RseSB3aXRoaW4gdGhpcyBsaWJyYXJ5LlxuICAgIHJldHVybiBzY2hlZHVsZVN1YnNjcmlwdGlvbjtcbiAgfVxufVxuIiwgIi8qKiBAcHJldHRpZXIgKi9cbmltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuXG4vKipcbiAqIFJlLWVtaXRzIGFsbCBub3RpZmljYXRpb25zIGZyb20gc291cmNlIE9ic2VydmFibGUgd2l0aCBzcGVjaWZpZWQgc2NoZWR1bGVyLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5FbnN1cmUgYSBzcGVjaWZpYyBzY2hlZHVsZXIgaXMgdXNlZCwgZnJvbSBvdXRzaWRlIG9mIGFuIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqIGBvYnNlcnZlT25gIGlzIGFuIG9wZXJhdG9yIHRoYXQgYWNjZXB0cyBhIHNjaGVkdWxlciBhcyBhIGZpcnN0IHBhcmFtZXRlciwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHJlc2NoZWR1bGVcbiAqIG5vdGlmaWNhdGlvbnMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUuIEl0IG1pZ2h0IGJlIHVzZWZ1bCwgaWYgeW91IGRvIG5vdCBoYXZlIGNvbnRyb2wgb3ZlclxuICogaW50ZXJuYWwgc2NoZWR1bGVyIG9mIGEgZ2l2ZW4gT2JzZXJ2YWJsZSwgYnV0IHdhbnQgdG8gY29udHJvbCB3aGVuIGl0cyB2YWx1ZXMgYXJlIGVtaXR0ZWQgbmV2ZXJ0aGVsZXNzLlxuICpcbiAqIFJldHVybmVkIE9ic2VydmFibGUgZW1pdHMgdGhlIHNhbWUgbm90aWZpY2F0aW9ucyAobmV4dGVkIHZhbHVlcywgY29tcGxldGUgYW5kIGVycm9yIGV2ZW50cykgYXMgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLFxuICogYnV0IHJlc2NoZWR1bGVkIHdpdGggcHJvdmlkZWQgc2NoZWR1bGVyLiBOb3RlIHRoYXQgdGhpcyBkb2Vzbid0IG1lYW4gdGhhdCBzb3VyY2UgT2JzZXJ2YWJsZXMgaW50ZXJuYWxcbiAqIHNjaGVkdWxlciB3aWxsIGJlIHJlcGxhY2VkIGluIGFueSB3YXkuIE9yaWdpbmFsIHNjaGVkdWxlciBzdGlsbCB3aWxsIGJlIHVzZWQsIGJ1dCB3aGVuIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBlbWl0c1xuICogbm90aWZpY2F0aW9uLCBpdCB3aWxsIGJlIGltbWVkaWF0ZWx5IHNjaGVkdWxlZCBhZ2FpbiAtIHRoaXMgdGltZSB3aXRoIHNjaGVkdWxlciBwYXNzZWQgdG8gYG9ic2VydmVPbmAuXG4gKiBBbiBhbnRpLXBhdHRlcm4gd291bGQgYmUgY2FsbGluZyBgb2JzZXJ2ZU9uYCBvbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgbG90cyBvZiB2YWx1ZXMgc3luY2hyb25vdXNseSwgdG8gc3BsaXRcbiAqIHRoYXQgZW1pc3Npb25zIGludG8gYXN5bmNocm9ub3VzIGNodW5rcy4gRm9yIHRoaXMgdG8gaGFwcGVuLCBzY2hlZHVsZXIgd291bGQgaGF2ZSB0byBiZSBwYXNzZWQgaW50byB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGRpcmVjdGx5ICh1c3VhbGx5IGludG8gdGhlIG9wZXJhdG9yIHRoYXQgY3JlYXRlcyBpdCkuIGBvYnNlcnZlT25gIHNpbXBseSBkZWxheXMgbm90aWZpY2F0aW9ucyBhXG4gKiBsaXR0bGUgYml0IG1vcmUsIHRvIGVuc3VyZSB0aGF0IHRoZXkgYXJlIGVtaXR0ZWQgYXQgZXhwZWN0ZWQgbW9tZW50cy5cbiAqXG4gKiBBcyBhIG1hdHRlciBvZiBmYWN0LCBgb2JzZXJ2ZU9uYCBhY2NlcHRzIHNlY29uZCBwYXJhbWV0ZXIsIHdoaWNoIHNwZWNpZmllcyBpbiBtaWxsaXNlY29uZHMgd2l0aCB3aGF0IGRlbGF5IG5vdGlmaWNhdGlvbnNcbiAqIHdpbGwgYmUgZW1pdHRlZC4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIHtAbGluayBkZWxheX0gb3BlcmF0b3IgYW5kIGBvYnNlcnZlT25gIGlzIHRoYXQgYG9ic2VydmVPbmBcbiAqIHdpbGwgZGVsYXkgYWxsIG5vdGlmaWNhdGlvbnMgLSBpbmNsdWRpbmcgZXJyb3Igbm90aWZpY2F0aW9ucyAtIHdoaWxlIGBkZWxheWAgd2lsbCBwYXNzIHRocm91Z2ggZXJyb3JcbiAqIGZyb20gc291cmNlIE9ic2VydmFibGUgaW1tZWRpYXRlbHkgd2hlbiBpdCBpcyBlbWl0dGVkLiBJbiBnZW5lcmFsIGl0IGlzIGhpZ2hseSByZWNvbW1lbmRlZCB0byB1c2UgYGRlbGF5YCBvcGVyYXRvclxuICogZm9yIGFueSBraW5kIG9mIGRlbGF5aW5nIG9mIHZhbHVlcyBpbiB0aGUgc3RyZWFtLCB3aGlsZSB1c2luZyBgb2JzZXJ2ZU9uYCB0byBzcGVjaWZ5IHdoaWNoIHNjaGVkdWxlciBzaG91bGQgYmUgdXNlZFxuICogZm9yIG5vdGlmaWNhdGlvbiBlbWlzc2lvbnMgaW4gZ2VuZXJhbC5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogRW5zdXJlIHZhbHVlcyBpbiBzdWJzY3JpYmUgYXJlIGNhbGxlZCBqdXN0IGJlZm9yZSBicm93c2VyIHJlcGFpbnRcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIG9ic2VydmVPbiwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBzb21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gKiBzb21lRGl2LnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDIwMHB4O2JhY2tncm91bmQ6ICMwOWMnO1xuICogZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzb21lRGl2KTtcbiAqIGNvbnN0IGludGVydmFscyA9IGludGVydmFsKDEwKTsgICAgICAvLyBJbnRlcnZhbHMgYXJlIHNjaGVkdWxlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpdGggYXN5bmMgc2NoZWR1bGVyIGJ5IGRlZmF1bHQuLi5cbiAqIGludGVydmFscy5waXBlKFxuICogICBvYnNlcnZlT24oYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpIC8vIC4uLmJ1dCB3ZSB3aWxsIG9ic2VydmUgb24gYW5pbWF0aW9uRnJhbWVcbiAqICkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZXIgdG8gZW5zdXJlIHNtb290aCBhbmltYXRpb24uXG4gKiAuc3Vic2NyaWJlKHZhbCA9PiB7XG4gKiAgIHNvbWVEaXYuc3R5bGUuaGVpZ2h0ID0gdmFsICsgJ3B4JztcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgZGVsYXl9XG4gKlxuICogQHBhcmFtIHNjaGVkdWxlciBTY2hlZHVsZXIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcmVzY2hlZHVsZSBub3RpZmljYXRpb25zIGZyb20gc291cmNlIE9ic2VydmFibGUuXG4gKiBAcGFyYW0gZGVsYXkgTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IHN0YXRlcyB3aXRoIHdoYXQgZGVsYXkgZXZlcnkgbm90aWZpY2F0aW9uIHNob3VsZCBiZSByZXNjaGVkdWxlZC5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBzYW1lXG4gKiBub3RpZmljYXRpb25zIGFzIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgYnV0IHdpdGggcHJvdmlkZWQgc2NoZWR1bGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZU9uPFQ+KHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSwgZGVsYXkgPSAwKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcbiAgcmV0dXJuIG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4ge1xuICAgIHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoXG4gICAgICAgIHN1YnNjcmliZXIsXG4gICAgICAgICh2YWx1ZSkgPT4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4gc3Vic2NyaWJlci5uZXh0KHZhbHVlKSwgZGVsYXkpLFxuICAgICAgICAoKSA9PiBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiBzdWJzY3JpYmVyLmNvbXBsZXRlKCksIGRlbGF5KSxcbiAgICAgICAgKGVycikgPT4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4gc3Vic2NyaWJlci5lcnJvcihlcnIpLCBkZWxheSlcbiAgICAgIClcbiAgICApO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcblxuLyoqXG4gKiBBc3luY2hyb25vdXNseSBzdWJzY3JpYmVzIE9ic2VydmVycyB0byB0aGlzIE9ic2VydmFibGUgb24gdGhlIHNwZWNpZmllZCB7QGxpbmsgU2NoZWR1bGVyTGlrZX0uXG4gKlxuICogV2l0aCBgc3Vic2NyaWJlT25gIHlvdSBjYW4gZGVjaWRlIHdoYXQgdHlwZSBvZiBzY2hlZHVsZXIgYSBzcGVjaWZpYyBPYnNlcnZhYmxlIHdpbGwgYmUgdXNpbmcgd2hlbiBpdCBpcyBzdWJzY3JpYmVkIHRvLlxuICpcbiAqIFNjaGVkdWxlcnMgY29udHJvbCB0aGUgc3BlZWQgYW5kIG9yZGVyIG9mIGVtaXNzaW9ucyB0byBvYnNlcnZlcnMgZnJvbSBhbiBPYnNlcnZhYmxlIHN0cmVhbS5cbiAqXG4gKiAhW10oc3Vic2NyaWJlT24ucG5nKVxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBHaXZlbiB0aGUgZm9sbG93aW5nIGNvZGU6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGEgPSBvZigxLCAyLCAzKTtcbiAqIGNvbnN0IGIgPSBvZig0LCA1LCA2KTtcbiAqXG4gKiBtZXJnZShhLCBiKS5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICpcbiAqIC8vIE91dHB1dHNcbiAqIC8vIDFcbiAqIC8vIDJcbiAqIC8vIDNcbiAqIC8vIDRcbiAqIC8vIDVcbiAqIC8vIDZcbiAqIGBgYFxuICpcbiAqIEJvdGggT2JzZXJ2YWJsZSBgYWAgYW5kIGBiYCB3aWxsIGVtaXQgdGhlaXIgdmFsdWVzIGRpcmVjdGx5IGFuZCBzeW5jaHJvbm91c2x5IG9uY2UgdGhleSBhcmUgc3Vic2NyaWJlZCB0by5cbiAqXG4gKiBJZiB3ZSBpbnN0ZWFkIHVzZSB0aGUgYHN1YnNjcmliZU9uYCBvcGVyYXRvciBkZWNsYXJpbmcgdGhhdCB3ZSB3YW50IHRvIHVzZSB0aGUge0BsaW5rIGFzeW5jU2NoZWR1bGVyfSBmb3IgdmFsdWVzIGVtaXR0ZWQgYnkgT2JzZXJ2YWJsZSBgYWA6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBzdWJzY3JpYmVPbiwgYXN5bmNTY2hlZHVsZXIsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgYSA9IG9mKDEsIDIsIDMpLnBpcGUoc3Vic2NyaWJlT24oYXN5bmNTY2hlZHVsZXIpKTtcbiAqIGNvbnN0IGIgPSBvZig0LCA1LCA2KTtcbiAqXG4gKiBtZXJnZShhLCBiKS5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICpcbiAqIC8vIE91dHB1dHNcbiAqIC8vIDRcbiAqIC8vIDVcbiAqIC8vIDZcbiAqIC8vIDFcbiAqIC8vIDJcbiAqIC8vIDNcbiAqIGBgYFxuICpcbiAqIFRoZSByZWFzb24gZm9yIHRoaXMgaXMgdGhhdCBPYnNlcnZhYmxlIGBiYCBlbWl0cyBpdHMgdmFsdWVzIGRpcmVjdGx5IGFuZCBzeW5jaHJvbm91c2x5IGxpa2UgYmVmb3JlXG4gKiBidXQgdGhlIGVtaXNzaW9ucyBmcm9tIGBhYCBhcmUgc2NoZWR1bGVkIG9uIHRoZSBldmVudCBsb29wIGJlY2F1c2Ugd2UgYXJlIG5vdyB1c2luZyB0aGUge0BsaW5rIGFzeW5jU2NoZWR1bGVyfSBmb3IgdGhhdCBzcGVjaWZpYyBPYnNlcnZhYmxlLlxuICpcbiAqIEBwYXJhbSBzY2hlZHVsZXIgVGhlIHtAbGluayBTY2hlZHVsZXJMaWtlfSB0byBwZXJmb3JtIHN1YnNjcmlwdGlvbiBhY3Rpb25zIG9uLlxuICogQHBhcmFtIGRlbGF5IEEgZGVsYXkgdG8gcGFzcyB0byB0aGUgc2NoZWR1bGVyIHRvIGRlbGF5IHN1YnNjcmlwdGlvbnNcbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSBtb2RpZmllZCBzbyB0aGF0IGl0c1xuICogc3Vic2NyaXB0aW9ucyBoYXBwZW4gb24gdGhlIHNwZWNpZmllZCB7QGxpbmsgU2NoZWR1bGVyTGlrZX0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVPbjxUPihzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsIGRlbGF5OiBudW1iZXIgPSAwKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcbiAgcmV0dXJuIG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4ge1xuICAgIHN1YnNjcmliZXIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpLCBkZWxheSkpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBvYnNlcnZlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvb2JzZXJ2ZU9uJztcbmltcG9ydCB7IHN1YnNjcmliZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL3N1YnNjcmliZU9uJztcbmltcG9ydCB7IEludGVyb3BPYnNlcnZhYmxlLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVPYnNlcnZhYmxlPFQ+KGlucHV0OiBJbnRlcm9wT2JzZXJ2YWJsZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBpbm5lckZyb20oaW5wdXQpLnBpcGUoc3Vic2NyaWJlT24oc2NoZWR1bGVyKSwgb2JzZXJ2ZU9uKHNjaGVkdWxlcikpO1xufVxuIiwgImltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IG9ic2VydmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9vYnNlcnZlT24nO1xuaW1wb3J0IHsgc3Vic2NyaWJlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvc3Vic2NyaWJlT24nO1xuaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlUHJvbWlzZTxUPihpbnB1dDogUHJvbWlzZUxpa2U8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gaW5uZXJGcm9tKGlucHV0KS5waXBlKHN1YnNjcmliZU9uKHNjaGVkdWxlciksIG9ic2VydmVPbihzY2hlZHVsZXIpKTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBcnJheTxUPihpbnB1dDogQXJyYXlMaWtlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgLy8gVGhlIGN1cnJlbnQgYXJyYXkgaW5kZXguXG4gICAgbGV0IGkgPSAwO1xuICAgIC8vIFN0YXJ0IGl0ZXJhdGluZyBvdmVyIHRoZSBhcnJheSBsaWtlIG9uIGEgc2NoZWR1bGUuXG4gICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaSA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgdGhlIGFycmF5IGxpa2UgaW4gdGhlXG4gICAgICAgIC8vIHByZXZpb3VzIGpvYiwgd2UgY2FuIGNvbXBsZXRlLlxuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgbGV0J3MgbmV4dCB0aGUgdmFsdWUgYXQgdGhlIGN1cnJlbnQgaW5kZXgsXG4gICAgICAgIC8vIHRoZW4gaW5jcmVtZW50IG91ciBpbmRleC5cbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlucHV0W2krK10pO1xuICAgICAgICAvLyBJZiB0aGUgbGFzdCBlbWlzc2lvbiBkaWRuJ3QgY2F1c2UgdXMgdG8gY2xvc2UgdGhlIHN1YnNjcmliZXJcbiAgICAgICAgLy8gKHZpYSB0YWtlIG9yIHNvbWUgc2lkZSBlZmZlY3QpLCByZXNjaGVkdWxlIHRoZSBqb2IgYW5kIHdlJ2xsXG4gICAgICAgIC8vIG1ha2UgYW5vdGhlciBwYXNzLlxuICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5cbi8qKlxuICogVXNlZCBpbiB7QGxpbmsgc2NoZWR1bGVkfSB0byBjcmVhdGUgYW4gb2JzZXJ2YWJsZSBmcm9tIGFuIEl0ZXJhYmxlLlxuICogQHBhcmFtIGlucHV0IFRoZSBpdGVyYWJsZSB0byBjcmVhdGUgYW4gb2JzZXJ2YWJsZSBmcm9tXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFRoZSBzY2hlZHVsZXIgdG8gdXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUl0ZXJhYmxlPFQ+KGlucHV0OiBJdGVyYWJsZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIGxldCBpdGVyYXRvcjogSXRlcmF0b3I8VCwgVD47XG5cbiAgICAvLyBTY2hlZHVsZSB0aGUgaW5pdGlhbCBjcmVhdGlvbiBvZiB0aGUgaXRlcmF0b3IgZnJvbVxuICAgIC8vIHRoZSBpdGVyYWJsZS4gVGhpcyBpcyBzbyB0aGUgY29kZSBpbiB0aGUgaXRlcmFibGUgaXNcbiAgICAvLyBub3QgY2FsbGVkIHVudGlsIHRoZSBzY2hlZHVsZWQgam9iIGZpcmVzLlxuICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgaXRlcmF0b3IuXG4gICAgICBpdGVyYXRvciA9IChpbnB1dCBhcyBhbnkpW1N5bWJvbF9pdGVyYXRvcl0oKTtcblxuICAgICAgZXhlY3V0ZVNjaGVkdWxlKFxuICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICBzY2hlZHVsZXIsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgdmFsdWU6IFQ7XG4gICAgICAgICAgbGV0IGRvbmU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFB1bGwgdGhlIHZhbHVlIG91dCBvZiB0aGUgaXRlcmF0b3JcbiAgICAgICAgICAgICh7IHZhbHVlLCBkb25lIH0gPSBpdGVyYXRvci5uZXh0KCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gV2UgZ290IGFuIGVycm9yIHdoaWxlIHB1bGxpbmcgZnJvbSB0aGUgaXRlcmF0b3JcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgLy8gSWYgaXQgaXMgXCJkb25lXCIgd2UganVzdCBjb21wbGV0ZS4gVGhpcyBtaW1pY3MgdGhlXG4gICAgICAgICAgICAvLyBiZWhhdmlvciBvZiBKYXZhU2NyaXB0J3MgYGZvci4ub2ZgIGNvbnN1bXB0aW9uIG9mXG4gICAgICAgICAgICAvLyBpdGVyYWJsZXMsIHdoaWNoIHdpbGwgbm90IGVtaXQgdGhlIHZhbHVlIGZyb20gYW4gaXRlcmF0b3JcbiAgICAgICAgICAgIC8vIHJlc3VsdCBvZiBgeyBkb25lOiB0cnVlOiB2YWx1ZTogJ2hlcmUnIH1gLlxuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGUgaXRlcmFibGUgaXMgbm90IGRvbmUsIGVtaXQgdGhlIHZhbHVlLlxuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIDAsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBEdXJpbmcgZmluYWxpemF0aW9uLCBpZiB3ZSBzZWUgdGhpcyBpdGVyYXRvciBoYXMgYSBgcmV0dXJuYCBtZXRob2QsXG4gICAgLy8gdGhlbiB3ZSBrbm93IGl0IGlzIGEgR2VuZXJhdG9yLCBhbmQgbm90IGp1c3QgYW4gSXRlcmF0b3IuIFNvIHdlIGNhbGxcbiAgICAvLyB0aGUgYHJldHVybigpYCBmdW5jdGlvbi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGFueSBgZmluYWxseSB7IH1gIGJsb2Nrc1xuICAgIC8vIGluc2lkZSBvZiB0aGUgZ2VuZXJhdG9yIHdlIGNhbiBoaXQgd2lsbCBiZSBoaXQgcHJvcGVybHkuXG4gICAgcmV0dXJuICgpID0+IGlzRnVuY3Rpb24oaXRlcmF0b3I/LnJldHVybikgJiYgaXRlcmF0b3IucmV0dXJuKCk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUFzeW5jSXRlcmFibGU8VD4oaW5wdXQ6IEFzeW5jSXRlcmFibGU8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICBpZiAoIWlucHV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJdGVyYWJsZSBjYW5ub3QgYmUgbnVsbCcpO1xuICB9XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gaW5wdXRbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7XG4gICAgICBleGVjdXRlU2NoZWR1bGUoXG4gICAgICAgIHN1YnNjcmliZXIsXG4gICAgICAgIHNjaGVkdWxlcixcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGl0ZXJhdG9yLm5leHQoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgcmVtb3ZlIHRoZSBzdWJzY3JpcHRpb25zIGZyb21cbiAgICAgICAgICAgICAgLy8gdGhlIHBhcmVudCBzdWJzY3JpcHRpb24uXG4gICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAwLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXJMaWtlLCBSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzY2hlZHVsZUFzeW5jSXRlcmFibGUgfSBmcm9tICcuL3NjaGVkdWxlQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZTxUPihpbnB1dDogUmVhZGFibGVTdHJlYW1MaWtlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHNjaGVkdWxlQXN5bmNJdGVyYWJsZShyZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yKGlucHV0KSwgc2NoZWR1bGVyKTtcbn1cbiIsICJpbXBvcnQgeyBzY2hlZHVsZU9ic2VydmFibGUgfSBmcm9tICcuL3NjaGVkdWxlT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzY2hlZHVsZVByb21pc2UgfSBmcm9tICcuL3NjaGVkdWxlUHJvbWlzZSc7XG5pbXBvcnQgeyBzY2hlZHVsZUFycmF5IH0gZnJvbSAnLi9zY2hlZHVsZUFycmF5JztcbmltcG9ydCB7IHNjaGVkdWxlSXRlcmFibGUgfSBmcm9tICcuL3NjaGVkdWxlSXRlcmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgaXNJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuLi91dGlsL2lzUHJvbWlzZSc7XG5pbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJdGVyYWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FzeW5jSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvciB9IGZyb20gJy4uL3V0aWwvdGhyb3dVbm9ic2VydmFibGVFcnJvcic7XG5pbXBvcnQgeyBpc1JlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuaW1wb3J0IHsgc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuL3NjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlJztcblxuLyoqXG4gKiBDb252ZXJ0cyBmcm9tIGEgY29tbW9uIHtAbGluayBPYnNlcnZhYmxlSW5wdXR9IHR5cGUgdG8gYW4gb2JzZXJ2YWJsZSB3aGVyZSBzdWJzY3JpcHRpb24gYW5kIGVtaXNzaW9uc1xuICogYXJlIHNjaGVkdWxlZCBvbiB0aGUgcHJvdmlkZWQgc2NoZWR1bGVyLlxuICpcbiAqIEBzZWUge0BsaW5rIGZyb219XG4gKiBAc2VlIHtAbGluayBvZn1cbiAqXG4gKiBAcGFyYW0gaW5wdXQgVGhlIG9ic2VydmFibGUsIGFycmF5LCBwcm9taXNlLCBpdGVyYWJsZSwgZXRjIHlvdSB3b3VsZCBsaWtlIHRvIHNjaGVkdWxlXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFRoZSBzY2hlZHVsZXIgdG8gdXNlIHRvIHNjaGVkdWxlIHRoZSBzdWJzY3JpcHRpb24gYW5kIGVtaXNzaW9ucyBmcm9tXG4gKiB0aGUgcmV0dXJuZWQgb2JzZXJ2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlZDxUPihpbnB1dDogT2JzZXJ2YWJsZUlucHV0PFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZUFycmF5KGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNQcm9taXNlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlUHJvbWlzZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGlzQXN5bmNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZUFzeW5jSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc1JlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gIH1cbiAgdGhyb3cgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgU2NoZWR1bGVyTGlrZSwgT2JzZXJ2ZWRWYWx1ZU9mIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgc2NoZWR1bGVkIH0gZnJvbSAnLi4vc2NoZWR1bGVkL3NjaGVkdWxlZCc7XG5pbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuL2lubmVyRnJvbSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tPE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oaW5wdXQ6IE8pOiBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc2NoZWR1bGVyLWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbTxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KGlucHV0OiBPLCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UgfCB1bmRlZmluZWQpOiBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPj47XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlIGZyb20gYW4gQXJyYXksIGFuIGFycmF5LWxpa2Ugb2JqZWN0LCBhIFByb21pc2UsIGFuIGl0ZXJhYmxlIG9iamVjdCwgb3IgYW4gT2JzZXJ2YWJsZS1saWtlIG9iamVjdC5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+Q29udmVydHMgYWxtb3N0IGFueXRoaW5nIHRvIGFuIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqICFbXShmcm9tLnBuZylcbiAqXG4gKiBgZnJvbWAgY29udmVydHMgdmFyaW91cyBvdGhlciBvYmplY3RzIGFuZCBkYXRhIHR5cGVzIGludG8gT2JzZXJ2YWJsZXMuIEl0IGFsc28gY29udmVydHMgYSBQcm9taXNlLCBhbiBhcnJheS1saWtlLCBvciBhblxuICogPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMjaXRlcmFibGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5pdGVyYWJsZTwvYT5cbiAqIG9iamVjdCBpbnRvIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgaXRlbXMgaW4gdGhhdCBwcm9taXNlLCBhcnJheSwgb3IgaXRlcmFibGUuIEEgU3RyaW5nLCBpbiB0aGlzIGNvbnRleHQsIGlzIHRyZWF0ZWRcbiAqIGFzIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMuIE9ic2VydmFibGUtbGlrZSBvYmplY3RzIChjb250YWlucyBhIGZ1bmN0aW9uIG5hbWVkIHdpdGggdGhlIEVTMjAxNSBTeW1ib2wgZm9yIE9ic2VydmFibGUpIGNhbiBhbHNvIGJlXG4gKiBjb252ZXJ0ZWQgdGhyb3VnaCB0aGlzIG9wZXJhdG9yLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogQ29udmVydHMgYW4gYXJyYXkgdG8gYW4gT2JzZXJ2YWJsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgYXJyYXkgPSBbMTAsIDIwLCAzMF07XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tKGFycmF5KTtcbiAqXG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAxMFxuICogLy8gMjBcbiAqIC8vIDMwXG4gKiBgYGBcbiAqXG4gKiBDb252ZXJ0IGFuIGluZmluaXRlIGl0ZXJhYmxlIChmcm9tIGEgZ2VuZXJhdG9yKSB0byBhbiBPYnNlcnZhYmxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb20sIHRha2UgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBmdW5jdGlvbiogZ2VuZXJhdGVEb3VibGVzKHNlZWQpIHtcbiAqICAgIGxldCBpID0gc2VlZDtcbiAqICAgIHdoaWxlICh0cnVlKSB7XG4gKiAgICAgIHlpZWxkIGk7XG4gKiAgICAgIGkgPSAyICogaTsgLy8gZG91YmxlIGl0XG4gKiAgICB9XG4gKiB9XG4gKlxuICogY29uc3QgaXRlcmF0b3IgPSBnZW5lcmF0ZURvdWJsZXMoMyk7XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tKGl0ZXJhdG9yKS5waXBlKHRha2UoMTApKTtcbiAqXG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAzXG4gKiAvLyA2XG4gKiAvLyAxMlxuICogLy8gMjRcbiAqIC8vIDQ4XG4gKiAvLyA5NlxuICogLy8gMTkyXG4gKiAvLyAzODRcbiAqIC8vIDc2OFxuICogLy8gMTUzNlxuICogYGBgXG4gKlxuICogV2l0aCBgYXN5bmNTY2hlZHVsZXJgXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb20sIGFzeW5jU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc29sZS5sb2coJ3N0YXJ0Jyk7XG4gKlxuICogY29uc3QgYXJyYXkgPSBbMTAsIDIwLCAzMF07XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tKGFycmF5LCBhc3luY1NjaGVkdWxlcik7XG4gKlxuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBjb25zb2xlLmxvZygnZW5kJyk7XG4gKlxuICogLy8gTG9nczpcbiAqIC8vICdzdGFydCdcbiAqIC8vICdlbmQnXG4gKiAvLyAxMFxuICogLy8gMjBcbiAqIC8vIDMwXG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBmcm9tRXZlbnR9XG4gKiBAc2VlIHtAbGluayBmcm9tRXZlbnRQYXR0ZXJufVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZUlucHV0PFQ+fSBBIHN1YnNjcmlwdGlvbiBvYmplY3QsIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZS1saWtlLFxuICogYW4gQXJyYXksIGFuIGl0ZXJhYmxlLCBvciBhbiBhcnJheS1saWtlIG9iamVjdCB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcGFyYW0ge1NjaGVkdWxlckxpa2V9IEFuIG9wdGlvbmFsIHtAbGluayBTY2hlZHVsZXJMaWtlfSBvbiB3aGljaCB0byBzY2hlZHVsZSB0aGUgZW1pc3Npb24gb2YgdmFsdWVzLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxUPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb208VD4oaW5wdXQ6IE9ic2VydmFibGVJbnB1dDxUPiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gc2NoZWR1bGVyID8gc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpIDogaW5uZXJGcm9tKGlucHV0KTtcbn1cbiIsICJpbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgUj4ocHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPjtcbi8qKiBAZGVwcmVjYXRlZCBVc2UgYSBjbG9zdXJlIGluc3RlYWQgb2YgYSBgdGhpc0FyZ2AuIFNpZ25hdHVyZXMgYWNjZXB0aW5nIGEgYHRoaXNBcmdgIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgUiwgQT4ocHJvamVjdDogKHRoaXM6IEEsIHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSLCB0aGlzQXJnOiBBKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPjtcblxuLyoqXG4gKiBBcHBsaWVzIGEgZ2l2ZW4gYHByb2plY3RgIGZ1bmN0aW9uIHRvIGVhY2ggdmFsdWUgZW1pdHRlZCBieSB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlLCBhbmQgZW1pdHMgdGhlIHJlc3VsdGluZyB2YWx1ZXMgYXMgYW4gT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+TGlrZSBbQXJyYXkucHJvdG90eXBlLm1hcCgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9tYXApLFxuICogaXQgcGFzc2VzIGVhY2ggc291cmNlIHZhbHVlIHRocm91Z2ggYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0byBnZXRcbiAqIGNvcnJlc3BvbmRpbmcgb3V0cHV0IHZhbHVlcy48L3NwYW4+XG4gKlxuICogIVtdKG1hcC5wbmcpXG4gKlxuICogU2ltaWxhciB0byB0aGUgd2VsbCBrbm93biBgQXJyYXkucHJvdG90eXBlLm1hcGAgZnVuY3Rpb24sIHRoaXMgb3BlcmF0b3JcbiAqIGFwcGxpZXMgYSBwcm9qZWN0aW9uIHRvIGVhY2ggdmFsdWUgYW5kIGVtaXRzIHRoYXQgcHJvamVjdGlvbiBpbiB0aGUgb3V0cHV0XG4gKiBPYnNlcnZhYmxlLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBNYXAgZXZlcnkgY2xpY2sgdG8gdGhlIGBjbGllbnRYYCBwb3NpdGlvbiBvZiB0aGF0IGNsaWNrXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb21FdmVudCwgbWFwIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50PFBvaW50ZXJFdmVudD4oZG9jdW1lbnQsICdjbGljaycpO1xuICogY29uc3QgcG9zaXRpb25zID0gY2xpY2tzLnBpcGUobWFwKGV2ID0+IGV2LmNsaWVudFgpKTtcbiAqXG4gKiBwb3NpdGlvbnMuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgbWFwVG99XG4gKiBAc2VlIHtAbGluayBwbHVja31cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKTogUn0gcHJvamVjdCBUaGUgZnVuY3Rpb24gdG8gYXBwbHlcbiAqIHRvIGVhY2ggYHZhbHVlYCBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS4gVGhlIGBpbmRleGAgcGFyYW1ldGVyIGlzXG4gKiB0aGUgbnVtYmVyIGBpYCBmb3IgdGhlIGktdGggZW1pc3Npb24gdGhhdCBoYXMgaGFwcGVuZWQgc2luY2UgdGhlXG4gKiBzdWJzY3JpcHRpb24sIHN0YXJ0aW5nIGZyb20gdGhlIG51bWJlciBgMGAuXG4gKiBAcGFyYW0ge2FueX0gW3RoaXNBcmddIEFuIG9wdGlvbmFsIGFyZ3VtZW50IHRvIGRlZmluZSB3aGF0IGB0aGlzYCBpcyBpbiB0aGVcbiAqIGBwcm9qZWN0YCBmdW5jdGlvbi5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSB2YWx1ZXMgZnJvbSB0aGVcbiAqIHNvdXJjZSBPYnNlcnZhYmxlIHRyYW5zZm9ybWVkIGJ5IHRoZSBnaXZlbiBgcHJvamVjdGAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgUj4ocHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSLCB0aGlzQXJnPzogYW55KTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPiB7XG4gIHJldHVybiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IHtcbiAgICAvLyBUaGUgaW5kZXggb2YgdGhlIHZhbHVlIGZyb20gdGhlIHNvdXJjZS4gVXNlZCB3aXRoIHByb2plY3Rpb24uXG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHNvdXJjZSwgYWxsIGVycm9ycyBhbmQgY29tcGxldGlvbnMgYXJlIHNlbnQgYWxvbmdcbiAgICAvLyB0byB0aGUgY29uc3VtZXIuXG4gICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCAodmFsdWU6IFQpID0+IHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgcHJvamVjdGlvbiBmdW5jdGlvbiB3aXRoIHRoZSBhcHByb3ByaWF0ZSB0aGlzIGNvbnRleHQsXG4gICAgICAgIC8vIGFuZCBzZW5kIHRoZSByZXN1bHRpbmcgdmFsdWUgdG8gdGhlIGNvbnN1bWVyLlxuICAgICAgICBzdWJzY3JpYmVyLm5leHQocHJvamVjdC5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCsrKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCIuLi9vcGVyYXRvcnMvbWFwXCI7XG5cbmNvbnN0IHsgaXNBcnJheSB9ID0gQXJyYXk7XG5cbmZ1bmN0aW9uIGNhbGxPckFwcGx5PFQsIFI+KGZuOiAoKC4uLnZhbHVlczogVFtdKSA9PiBSKSwgYXJnczogVHxUW10pOiBSIHtcbiAgICByZXR1cm4gaXNBcnJheShhcmdzKSA/IGZuKC4uLmFyZ3MpIDogZm4oYXJncyk7XG59XG5cbi8qKlxuICogVXNlZCBpbiBzZXZlcmFsIC0tIG1vc3RseSBkZXByZWNhdGVkIC0tIHNpdHVhdGlvbnMgd2hlcmUgd2UgbmVlZCB0byBcbiAqIGFwcGx5IGEgbGlzdCBvZiBhcmd1bWVudHMgb3IgYSBzaW5nbGUgYXJndW1lbnQgdG8gYSByZXN1bHQgc2VsZWN0b3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBPbmVPck1hbnlBcmdzPFQsIFI+KGZuOiAoKC4uLnZhbHVlczogVFtdKSA9PiBSKSk6IE9wZXJhdG9yRnVuY3Rpb248VHxUW10sIFI+IHtcbiAgICByZXR1cm4gbWFwKGFyZ3MgPT4gY2FsbE9yQXBwbHkoZm4sIGFyZ3MpKVxufSIsICJjb25zdCB7IGlzQXJyYXkgfSA9IEFycmF5O1xuY29uc3QgeyBnZXRQcm90b3R5cGVPZiwgcHJvdG90eXBlOiBvYmplY3RQcm90bywga2V5czogZ2V0S2V5cyB9ID0gT2JqZWN0O1xuXG4vKipcbiAqIFVzZWQgaW4gZnVuY3Rpb25zIHdoZXJlIGVpdGhlciBhIGxpc3Qgb2YgYXJndW1lbnRzLCBhIHNpbmdsZSBhcnJheSBvZiBhcmd1bWVudHMsIG9yIGFcbiAqIGRpY3Rpb25hcnkgb2YgYXJndW1lbnRzIGNhbiBiZSByZXR1cm5lZC4gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhbiBgYXJnc2AgcHJvcGVydHkgd2l0aFxuICogdGhlIGFyZ3VtZW50cyBpbiBhbiBhcnJheSwgaWYgaXQgaXMgYSBkaWN0aW9uYXJ5LCBpdCB3aWxsIGFsc28gcmV0dXJuIHRoZSBga2V5c2AgaW4gYW5vdGhlclxuICogcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmdzQXJnQXJyYXlPck9iamVjdDxULCBPIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgVD4+KGFyZ3M6IFRbXSB8IFtPXSB8IFtUW11dKTogeyBhcmdzOiBUW107IGtleXM6IHN0cmluZ1tdIHwgbnVsbCB9IHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3QgPSBhcmdzWzBdO1xuICAgIGlmIChpc0FycmF5KGZpcnN0KSkge1xuICAgICAgcmV0dXJuIHsgYXJnczogZmlyc3QsIGtleXM6IG51bGwgfTtcbiAgICB9XG4gICAgaWYgKGlzUE9KTyhmaXJzdCkpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBnZXRLZXlzKGZpcnN0KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFyZ3M6IGtleXMubWFwKChrZXkpID0+IGZpcnN0W2tleV0pLFxuICAgICAgICBrZXlzLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBhcmdzOiBhcmdzIGFzIFRbXSwga2V5czogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBpc1BPSk8ob2JqOiBhbnkpOiBvYmogaXMgb2JqZWN0IHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBnZXRQcm90b3R5cGVPZihvYmopID09PSBvYmplY3RQcm90bztcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0KGtleXM6IHN0cmluZ1tdLCB2YWx1ZXM6IGFueVtdKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZSgocmVzdWx0LCBrZXksIGkpID0+ICgocmVzdWx0W2tleV0gPSB2YWx1ZXNbaV0pLCByZXN1bHQpLCB7fSBhcyBhbnkpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgU2NoZWR1bGVyTGlrZSwgT2JzZXJ2ZWRWYWx1ZU9mLCBPYnNlcnZhYmxlSW5wdXRUdXBsZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGFyZ3NBcmdBcnJheU9yT2JqZWN0IH0gZnJvbSAnLi4vdXRpbC9hcmdzQXJnQXJyYXlPck9iamVjdCc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcbmltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi4vdXRpbC9pZGVudGl0eSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgbWFwT25lT3JNYW55QXJncyB9IGZyb20gJy4uL3V0aWwvbWFwT25lT3JNYW55QXJncyc7XG5pbXBvcnQgeyBwb3BSZXN1bHRTZWxlY3RvciwgcG9wU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9hcmdzJztcbmltcG9ydCB7IGNyZWF0ZU9iamVjdCB9IGZyb20gJy4uL3V0aWwvY3JlYXRlT2JqZWN0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4uL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXInO1xuaW1wb3J0IHsgQW55Q2F0Y2hlciB9IGZyb20gJy4uL0FueUNhdGNoZXInO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuXG4vLyBjb21iaW5lTGF0ZXN0KGFueSlcbi8vIFdlIHB1dCB0aGlzIGZpcnN0IGJlY2F1c2Ugd2UgbmVlZCB0byBjYXRjaCBjYXNlcyB3aGVyZSB0aGUgdXNlciBoYXMgc3VwcGxpZWRcbi8vIF9leGFjdGx5IGBhbnlgXyBhcyB0aGUgYXJndW1lbnQuIFNpbmNlIGBhbnlgIGxpdGVyYWxseSBtYXRjaGVzIF9hbnl0aGluZ18sXG4vLyB3ZSBkb24ndCB3YW50IGl0IHRvIHJhbmRvbWx5IGhpdCBvbmUgb2YgdGhlIG90aGVyIHR5cGUgc2lnbmF0dXJlcyBiZWxvdyxcbi8vIGFzIHdlIGhhdmUgbm8gaWRlYSBhdCBidWlsZC10aW1lIHdoYXQgdHlwZSB3ZSBzaG91bGQgYmUgcmV0dXJuaW5nIHdoZW4gZ2l2ZW4gYW4gYW55LlxuXG4vKipcbiAqIFlvdSBoYXZlIHBhc3NlZCBgYW55YCBoZXJlLCB3ZSBjYW4ndCBmaWd1cmUgb3V0IGlmIGl0IGlzXG4gKiBhbiBhcnJheSBvciBhbiBvYmplY3QsIHNvIHlvdSdyZSBnZXR0aW5nIGB1bmtub3duYC4gVXNlIGJldHRlciB0eXBlcy5cbiAqIEBwYXJhbSBhcmcgU29tZXRoaW5nIHR5cGVkIGFzIGBhbnlgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PFQgZXh0ZW5kcyBBbnlDYXRjaGVyPihhcmc6IFQpOiBPYnNlcnZhYmxlPHVua25vd24+O1xuXG4vLyBjb21iaW5lTGF0ZXN0KFthLCBiLCBjXSlcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0KHNvdXJjZXM6IFtdKTogT2JzZXJ2YWJsZTxuZXZlcj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdPihzb3VyY2VzOiByZWFkb25seSBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dKTogT2JzZXJ2YWJsZTxBPjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHNjaGVkdWxlcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGBzY2hlZHVsZWRgIGFuZCBgY29tYmluZUxhdGVzdEFsbGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXSwgUj4oXG4gIHNvdXJjZXM6IHJlYWRvbmx5IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPl0sXG4gIHJlc3VsdFNlbGVjdG9yOiAoLi4udmFsdWVzOiBBKSA9PiBSLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2Vcbik6IE9ic2VydmFibGU8Uj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdLCBSPihcbiAgc291cmNlczogcmVhZG9ubHkgWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSxcbiAgcmVzdWx0U2VsZWN0b3I6ICguLi52YWx1ZXM6IEEpID0+IFJcbik6IE9ic2VydmFibGU8Uj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KFxuICBzb3VyY2VzOiByZWFkb25seSBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2Vcbik6IE9ic2VydmFibGU8QT47XG5cbi8vIGNvbWJpbmVMYXRlc3QoYSwgYiwgYylcbi8qKiBAZGVwcmVjYXRlZCBQYXNzIGFuIGFycmF5IG9mIHNvdXJjZXMgaW5zdGVhZC4gVGhlIHJlc3QtcGFyYW1ldGVycyBzaWduYXR1cmUgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9hcnJheS1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oLi4uc291cmNlczogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSk6IE9ic2VydmFibGU8QT47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10sIFI+KFxuICAuLi5zb3VyY2VzQW5kUmVzdWx0U2VsZWN0b3JBbmRTY2hlZHVsZXI6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPiwgKC4uLnZhbHVlczogQSkgPT4gUiwgU2NoZWR1bGVyTGlrZV1cbik6IE9ic2VydmFibGU8Uj47XG4vKiogQGRlcHJlY2F0ZWQgUGFzcyBhbiBhcnJheSBvZiBzb3VyY2VzIGluc3RlYWQuIFRoZSByZXN0LXBhcmFtZXRlcnMgc2lnbmF0dXJlIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvYXJyYXktYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10sIFI+KFxuICAuLi5zb3VyY2VzQW5kUmVzdWx0U2VsZWN0b3I6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPiwgKC4uLnZhbHVlczogQSkgPT4gUl1cbik6IE9ic2VydmFibGU8Uj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KFxuICAuLi5zb3VyY2VzQW5kU2NoZWR1bGVyOiBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT4sIFNjaGVkdWxlckxpa2VdXG4pOiBPYnNlcnZhYmxlPEE+O1xuXG4vLyBjb21iaW5lTGF0ZXN0KHthLCBiLCBjfSlcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0KHNvdXJjZXNPYmplY3Q6IHsgW0sgaW4gYW55XTogbmV2ZXIgfSk6IE9ic2VydmFibGU8bmV2ZXI+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIE9ic2VydmFibGVJbnB1dDxhbnk+Pj4oXG4gIHNvdXJjZXNPYmplY3Q6IFRcbik6IE9ic2VydmFibGU8eyBbSyBpbiBrZXlvZiBUXTogT2JzZXJ2ZWRWYWx1ZU9mPFRbS10+IH0+O1xuXG4vKipcbiAqIENvbWJpbmVzIG11bHRpcGxlIE9ic2VydmFibGVzIHRvIGNyZWF0ZSBhbiBPYnNlcnZhYmxlIHdob3NlIHZhbHVlcyBhcmVcbiAqIGNhbGN1bGF0ZWQgZnJvbSB0aGUgbGF0ZXN0IHZhbHVlcyBvZiBlYWNoIG9mIGl0cyBpbnB1dCBPYnNlcnZhYmxlcy5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+V2hlbmV2ZXIgYW55IGlucHV0IE9ic2VydmFibGUgZW1pdHMgYSB2YWx1ZSwgaXRcbiAqIGNvbXB1dGVzIGEgZm9ybXVsYSB1c2luZyB0aGUgbGF0ZXN0IHZhbHVlcyBmcm9tIGFsbCB0aGUgaW5wdXRzLCB0aGVuIGVtaXRzXG4gKiB0aGUgb3V0cHV0IG9mIHRoYXQgZm9ybXVsYS48L3NwYW4+XG4gKlxuICogIVtdKGNvbWJpbmVMYXRlc3QucG5nKVxuICpcbiAqIGBjb21iaW5lTGF0ZXN0YCBjb21iaW5lcyB0aGUgdmFsdWVzIGZyb20gYWxsIHRoZSBPYnNlcnZhYmxlcyBwYXNzZWQgaW4gdGhlXG4gKiBvYnNlcnZhYmxlcyBhcnJheS4gVGhpcyBpcyBkb25lIGJ5IHN1YnNjcmliaW5nIHRvIGVhY2ggT2JzZXJ2YWJsZSBpbiBvcmRlciBhbmQsXG4gKiB3aGVuZXZlciBhbnkgT2JzZXJ2YWJsZSBlbWl0cywgY29sbGVjdGluZyBhbiBhcnJheSBvZiB0aGUgbW9zdCByZWNlbnRcbiAqIHZhbHVlcyBmcm9tIGVhY2ggT2JzZXJ2YWJsZS4gU28gaWYgeW91IHBhc3MgYG5gIE9ic2VydmFibGVzIHRvIHRoaXMgb3BlcmF0b3IsXG4gKiB0aGUgcmV0dXJuZWQgT2JzZXJ2YWJsZSB3aWxsIGFsd2F5cyBlbWl0IGFuIGFycmF5IG9mIGBuYCB2YWx1ZXMsIGluIGFuIG9yZGVyXG4gKiBjb3JyZXNwb25kaW5nIHRvIHRoZSBvcmRlciBvZiB0aGUgcGFzc2VkIE9ic2VydmFibGVzICh0aGUgdmFsdWUgZnJvbSB0aGUgZmlyc3QgT2JzZXJ2YWJsZVxuICogd2lsbCBiZSBhdCBpbmRleCAwIG9mIHRoZSBhcnJheSBhbmQgc28gb24pLlxuICpcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIGBjb21iaW5lTGF0ZXN0YCBhY2NlcHRzIGFuIGFycmF5IG9mIE9ic2VydmFibGVzLiBOb3RlIHRoYXQgYW4gYXJyYXkgb2ZcbiAqIE9ic2VydmFibGVzIGlzIGEgZ29vZCBjaG9pY2UsIGlmIHlvdSBkb24ndCBrbm93IGJlZm9yZWhhbmQgaG93IG1hbnkgT2JzZXJ2YWJsZXNcbiAqIHlvdSB3aWxsIGNvbWJpbmUuIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgd2lsbCByZXN1bHQgaW4gYW4gT2JzZXJ2YWJsZSB0aGF0XG4gKiBjb21wbGV0ZXMgaW1tZWRpYXRlbHkuXG4gKlxuICogVG8gZW5zdXJlIHRoZSBvdXRwdXQgYXJyYXkgYWx3YXlzIGhhcyB0aGUgc2FtZSBsZW5ndGgsIGBjb21iaW5lTGF0ZXN0YCB3aWxsXG4gKiBhY3R1YWxseSB3YWl0IGZvciBhbGwgaW5wdXQgT2JzZXJ2YWJsZXMgdG8gZW1pdCBhdCBsZWFzdCBvbmNlLFxuICogYmVmb3JlIGl0IHN0YXJ0cyBlbWl0dGluZyByZXN1bHRzLiBUaGlzIG1lYW5zIGlmIHNvbWUgT2JzZXJ2YWJsZSBlbWl0c1xuICogdmFsdWVzIGJlZm9yZSBvdGhlciBPYnNlcnZhYmxlcyBzdGFydGVkIGVtaXR0aW5nLCBhbGwgdGhlc2UgdmFsdWVzIGJ1dCB0aGUgbGFzdFxuICogd2lsbCBiZSBsb3N0LiBPbiB0aGUgb3RoZXIgaGFuZCwgaWYgc29tZSBPYnNlcnZhYmxlIGRvZXMgbm90IGVtaXQgYSB2YWx1ZSBidXRcbiAqIGNvbXBsZXRlcywgcmVzdWx0aW5nIE9ic2VydmFibGUgd2lsbCBjb21wbGV0ZSBhdCB0aGUgc2FtZSBtb21lbnQgd2l0aG91dFxuICogZW1pdHRpbmcgYW55dGhpbmcsIHNpbmNlIGl0IHdpbGwgbm93IGJlIGltcG9zc2libGUgdG8gaW5jbHVkZSBhIHZhbHVlIGZyb20gdGhlXG4gKiBjb21wbGV0ZWQgT2JzZXJ2YWJsZSBpbiB0aGUgcmVzdWx0aW5nIGFycmF5LiBBbHNvLCBpZiBzb21lIGlucHV0IE9ic2VydmFibGUgZG9lc1xuICogbm90IGVtaXQgYW55IHZhbHVlIGFuZCBuZXZlciBjb21wbGV0ZXMsIGBjb21iaW5lTGF0ZXN0YCB3aWxsIGFsc28gbmV2ZXIgZW1pdFxuICogYW5kIG5ldmVyIGNvbXBsZXRlLCBzaW5jZSwgYWdhaW4sIGl0IHdpbGwgd2FpdCBmb3IgYWxsIHN0cmVhbXMgdG8gZW1pdCBzb21lXG4gKiB2YWx1ZS5cbiAqXG4gKiBJZiBhdCBsZWFzdCBvbmUgT2JzZXJ2YWJsZSB3YXMgcGFzc2VkIHRvIGBjb21iaW5lTGF0ZXN0YCBhbmQgYWxsIHBhc3NlZCBPYnNlcnZhYmxlc1xuICogZW1pdHRlZCBzb21ldGhpbmcsIHRoZSByZXN1bHRpbmcgT2JzZXJ2YWJsZSB3aWxsIGNvbXBsZXRlIHdoZW4gYWxsIGNvbWJpbmVkXG4gKiBzdHJlYW1zIGNvbXBsZXRlLiBTbyBldmVuIGlmIHNvbWUgT2JzZXJ2YWJsZSBjb21wbGV0ZXMsIHRoZSByZXN1bHQgb2ZcbiAqIGBjb21iaW5lTGF0ZXN0YCB3aWxsIHN0aWxsIGVtaXQgdmFsdWVzIHdoZW4gb3RoZXIgT2JzZXJ2YWJsZXMgZG8uIEluIGNhc2VcbiAqIG9mIGEgY29tcGxldGVkIE9ic2VydmFibGUsIGl0cyB2YWx1ZSBmcm9tIG5vdyBvbiB3aWxsIGFsd2F5cyBiZSB0aGUgbGFzdFxuICogZW1pdHRlZCB2YWx1ZS4gT24gdGhlIG90aGVyIGhhbmQsIGlmIGFueSBPYnNlcnZhYmxlIGVycm9ycywgYGNvbWJpbmVMYXRlc3RgXG4gKiB3aWxsIGVycm9yIGltbWVkaWF0ZWx5IGFzIHdlbGwsIGFuZCBhbGwgb3RoZXIgT2JzZXJ2YWJsZXMgd2lsbCBiZSB1bnN1YnNjcmliZWQuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBDb21iaW5lIHR3byB0aW1lciBPYnNlcnZhYmxlc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyB0aW1lciwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGZpcnN0VGltZXIgPSB0aW1lcigwLCAxMDAwKTsgLy8gZW1pdCAwLCAxLCAyLi4uIGFmdGVyIGV2ZXJ5IHNlY29uZCwgc3RhcnRpbmcgZnJvbSBub3dcbiAqIGNvbnN0IHNlY29uZFRpbWVyID0gdGltZXIoNTAwLCAxMDAwKTsgLy8gZW1pdCAwLCAxLCAyLi4uIGFmdGVyIGV2ZXJ5IHNlY29uZCwgc3RhcnRpbmcgMCw1cyBmcm9tIG5vd1xuICogY29uc3QgY29tYmluZWRUaW1lcnMgPSBjb21iaW5lTGF0ZXN0KFtmaXJzdFRpbWVyLCBzZWNvbmRUaW1lcl0pO1xuICogY29tYmluZWRUaW1lcnMuc3Vic2NyaWJlKHZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSk7XG4gKiAvLyBMb2dzXG4gKiAvLyBbMCwgMF0gYWZ0ZXIgMC41c1xuICogLy8gWzEsIDBdIGFmdGVyIDFzXG4gKiAvLyBbMSwgMV0gYWZ0ZXIgMS41c1xuICogLy8gWzIsIDFdIGFmdGVyIDJzXG4gKiBgYGBcbiAqXG4gKiBDb21iaW5lIGEgZGljdGlvbmFyeSBvZiBPYnNlcnZhYmxlc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgZGVsYXksIHN0YXJ0V2l0aCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IG9ic2VydmFibGVzID0ge1xuICogICBhOiBvZigxKS5waXBlKGRlbGF5KDEwMDApLCBzdGFydFdpdGgoMCkpLFxuICogICBiOiBvZig1KS5waXBlKGRlbGF5KDUwMDApLCBzdGFydFdpdGgoMCkpLFxuICogICBjOiBvZigxMCkucGlwZShkZWxheSgxMDAwMCksIHN0YXJ0V2l0aCgwKSlcbiAqIH07XG4gKiBjb25zdCBjb21iaW5lZCA9IGNvbWJpbmVMYXRlc3Qob2JzZXJ2YWJsZXMpO1xuICogY29tYmluZWQuc3Vic2NyaWJlKHZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSk7XG4gKiAvLyBMb2dzXG4gKiAvLyB7IGE6IDAsIGI6IDAsIGM6IDAgfSBpbW1lZGlhdGVseVxuICogLy8geyBhOiAxLCBiOiAwLCBjOiAwIH0gYWZ0ZXIgMXNcbiAqIC8vIHsgYTogMSwgYjogNSwgYzogMCB9IGFmdGVyIDVzXG4gKiAvLyB7IGE6IDEsIGI6IDUsIGM6IDEwIH0gYWZ0ZXIgMTBzXG4gKiBgYGBcbiAqXG4gKiBDb21iaW5lIGFuIGFycmF5IG9mIE9ic2VydmFibGVzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBkZWxheSwgc3RhcnRXaXRoLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgb2JzZXJ2YWJsZXMgPSBbMSwgNSwgMTBdLm1hcChcbiAqICAgbiA9PiBvZihuKS5waXBlKFxuICogICAgIGRlbGF5KG4gKiAxMDAwKSwgLy8gZW1pdCAwIGFuZCB0aGVuIGVtaXQgbiBhZnRlciBuIHNlY29uZHNcbiAqICAgICBzdGFydFdpdGgoMClcbiAqICAgKVxuICogKTtcbiAqIGNvbnN0IGNvbWJpbmVkID0gY29tYmluZUxhdGVzdChvYnNlcnZhYmxlcyk7XG4gKiBjb21iaW5lZC5zdWJzY3JpYmUodmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpKTtcbiAqIC8vIExvZ3NcbiAqIC8vIFswLCAwLCAwXSBpbW1lZGlhdGVseVxuICogLy8gWzEsIDAsIDBdIGFmdGVyIDFzXG4gKiAvLyBbMSwgNSwgMF0gYWZ0ZXIgNXNcbiAqIC8vIFsxLCA1LCAxMF0gYWZ0ZXIgMTBzXG4gKiBgYGBcbiAqXG4gKiBVc2UgbWFwIG9wZXJhdG9yIHRvIGR5bmFtaWNhbGx5IGNhbGN1bGF0ZSB0aGUgQm9keS1NYXNzIEluZGV4XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBjb21iaW5lTGF0ZXN0LCBtYXAgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCB3ZWlnaHQgPSBvZig3MCwgNzIsIDc2LCA3OSwgNzUpO1xuICogY29uc3QgaGVpZ2h0ID0gb2YoMS43NiwgMS43NywgMS43OCk7XG4gKiBjb25zdCBibWkgPSBjb21iaW5lTGF0ZXN0KFt3ZWlnaHQsIGhlaWdodF0pLnBpcGUoXG4gKiAgIG1hcCgoW3csIGhdKSA9PiB3IC8gKGggKiBoKSksXG4gKiApO1xuICogYm1pLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKCdCTUkgaXMgJyArIHgpKTtcbiAqXG4gKiAvLyBXaXRoIG91dHB1dCB0byBjb25zb2xlOlxuICogLy8gQk1JIGlzIDI0LjIxMjI5MzM4ODQyOTc1M1xuICogLy8gQk1JIGlzIDIzLjkzOTQ4MDk5MjA1MjA5XG4gKiAvLyBCTUkgaXMgMjMuNjcxMjUzNjI5NTkyMjIyXG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBjb21iaW5lTGF0ZXN0QWxsfVxuICogQHNlZSB7QGxpbmsgbWVyZ2V9XG4gKiBAc2VlIHtAbGluayB3aXRoTGF0ZXN0RnJvbX1cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGVJbnB1dH0gW29ic2VydmFibGVzXSBBbiBhcnJheSBvZiBpbnB1dCBPYnNlcnZhYmxlcyB0byBjb21iaW5lIHdpdGggZWFjaCBvdGhlci5cbiAqIEFuIGFycmF5IG9mIE9ic2VydmFibGVzIG11c3QgYmUgZ2l2ZW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW3Byb2plY3RdIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIHByb2plY3QgdGhlIHZhbHVlcyBmcm9tXG4gKiB0aGUgY29tYmluZWQgbGF0ZXN0IHZhbHVlcyBpbnRvIGEgbmV3IHZhbHVlIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyTGlrZX0gW3NjaGVkdWxlcj1udWxsXSBUaGUge0BsaW5rIFNjaGVkdWxlckxpa2V9IHRvIHVzZSBmb3Igc3Vic2NyaWJpbmcgdG9cbiAqIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgb2YgcHJvamVjdGVkIHZhbHVlcyBmcm9tIHRoZSBtb3N0IHJlY2VudFxuICogdmFsdWVzIGZyb20gZWFjaCBpbnB1dCBPYnNlcnZhYmxlLCBvciBhbiBhcnJheSBvZiB0aGUgbW9zdCByZWNlbnQgdmFsdWVzIGZyb21cbiAqIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+LCBSPiguLi5hcmdzOiBhbnlbXSk6IE9ic2VydmFibGU8Uj4gfCBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPltdPiB7XG4gIGNvbnN0IHNjaGVkdWxlciA9IHBvcFNjaGVkdWxlcihhcmdzKTtcbiAgY29uc3QgcmVzdWx0U2VsZWN0b3IgPSBwb3BSZXN1bHRTZWxlY3RvcihhcmdzKTtcblxuICBjb25zdCB7IGFyZ3M6IG9ic2VydmFibGVzLCBrZXlzIH0gPSBhcmdzQXJnQXJyYXlPck9iamVjdChhcmdzKTtcblxuICBpZiAob2JzZXJ2YWJsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSWYgbm8gb2JzZXJ2YWJsZXMgYXJlIHBhc3NlZCwgb3Igc29tZW9uZSBoYXMgcGFzc2VkIGFuIGVtcHR5IGFycmF5XG4gICAgLy8gb2Ygb2JzZXJ2YWJsZXMsIG9yIGV2ZW4gYW4gZW1wdHkgb2JqZWN0IFBPSk8sIHdlIG5lZWQgdG8ganVzdFxuICAgIC8vIGNvbXBsZXRlIChFTVBUWSksIGJ1dCB3ZSBoYXZlIHRvIGhvbm9yIHRoZSBzY2hlZHVsZXIgcHJvdmlkZWQgaWYgYW55LlxuICAgIHJldHVybiBmcm9tKFtdLCBzY2hlZHVsZXIgYXMgYW55KTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPltdPihcbiAgICBjb21iaW5lTGF0ZXN0SW5pdChcbiAgICAgIG9ic2VydmFibGVzIGFzIE9ic2VydmFibGVJbnB1dDxPYnNlcnZlZFZhbHVlT2Y8Tz4+W10sXG4gICAgICBzY2hlZHVsZXIsXG4gICAgICBrZXlzXG4gICAgICAgID8gLy8gQSBoYW5kbGVyIGZvciBzY3J1YmJpbmcgdGhlIGFycmF5IG9mIGFyZ3MgaW50byBhIGRpY3Rpb25hcnkuXG4gICAgICAgICAgKHZhbHVlcykgPT4gY3JlYXRlT2JqZWN0KGtleXMsIHZhbHVlcylcbiAgICAgICAgOiAvLyBBIHBhc3N0aHJvdWdoIHRvIGp1c3QgcmV0dXJuIHRoZSBhcnJheVxuICAgICAgICAgIGlkZW50aXR5XG4gICAgKVxuICApO1xuXG4gIHJldHVybiByZXN1bHRTZWxlY3RvciA/IChyZXN1bHQucGlwZShtYXBPbmVPck1hbnlBcmdzKHJlc3VsdFNlbGVjdG9yKSkgYXMgT2JzZXJ2YWJsZTxSPikgOiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0SW5pdChcbiAgb2JzZXJ2YWJsZXM6IE9ic2VydmFibGVJbnB1dDxhbnk+W10sXG4gIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UsXG4gIHZhbHVlVHJhbnNmb3JtOiAodmFsdWVzOiBhbnlbXSkgPT4gYW55ID0gaWRlbnRpdHlcbikge1xuICByZXR1cm4gKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4ge1xuICAgIC8vIFRoZSBvdXRlciBzdWJzY3JpcHRpb24uIFdlJ3JlIGNhcHR1cmluZyB0aGlzIGluIGEgZnVuY3Rpb25cbiAgICAvLyBiZWNhdXNlIHdlIG1heSBoYXZlIHRvIHNjaGVkdWxlIGl0LlxuICAgIG1heWJlU2NoZWR1bGUoXG4gICAgICBzY2hlZHVsZXIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBvYnNlcnZhYmxlcztcbiAgICAgICAgLy8gQSBzdG9yZSBmb3IgdGhlIHZhbHVlcyBlYWNoIG9ic2VydmFibGUgaGFzIGVtaXR0ZWQgc28gZmFyLiBXZSBtYXRjaCBvYnNlcnZhYmxlIHRvIHZhbHVlIG9uIGluZGV4LlxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgLy8gVGhlIG51bWJlciBvZiBjdXJyZW50bHkgYWN0aXZlIHN1YnNjcmlwdGlvbnMsIGFzIHRoZXkgY29tcGxldGUsIHdlIGRlY3JlbWVudCB0aGlzIG51bWJlciB0byBzZWUgaWZcbiAgICAgICAgLy8gd2UgYXJlIGFsbCBkb25lIGNvbWJpbmluZyB2YWx1ZXMsIHNvIHdlIGNhbiBjb21wbGV0ZSB0aGUgcmVzdWx0LlxuICAgICAgICBsZXQgYWN0aXZlID0gbGVuZ3RoO1xuICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIGlubmVyIHNvdXJjZXMgdGhhdCBzdGlsbCBoYXZlbid0IGVtaXR0ZWQgdGhlIGZpcnN0IHZhbHVlXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdHJhY2sgdGhpcyBiZWNhdXNlIGFsbCBzb3VyY2VzIG5lZWQgdG8gZW1pdCBvbmUgdmFsdWUgaW4gb3JkZXJcbiAgICAgICAgLy8gdG8gc3RhcnQgZW1pdHRpbmcgdmFsdWVzLlxuICAgICAgICBsZXQgcmVtYWluaW5nRmlyc3RWYWx1ZXMgPSBsZW5ndGg7XG4gICAgICAgIC8vIFRoZSBsb29wIHRvIGtpY2sgb2ZmIHN1YnNjcmlwdGlvbi4gV2UncmUga2V5aW5nIGV2ZXJ5dGhpbmcgb24gaW5kZXggYGlgIHRvIHJlbGF0ZSB0aGUgb2JzZXJ2YWJsZXMgcGFzc2VkXG4gICAgICAgIC8vIGluIHRvIHRoZSBzbG90IGluIHRoZSBvdXRwdXQgYXJyYXkgb3IgdGhlIGtleSBpbiB0aGUgYXJyYXkgb2Yga2V5cyBpbiB0aGUgb3V0cHV0IGRpY3Rpb25hcnkuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBtYXliZVNjaGVkdWxlKFxuICAgICAgICAgICAgc2NoZWR1bGVyLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBmcm9tKG9ic2VydmFibGVzW2ldLCBzY2hlZHVsZXIgYXMgYW55KTtcbiAgICAgICAgICAgICAgbGV0IGhhc0ZpcnN0VmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoXG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gd2UgZ2V0IGEgdmFsdWUsIHJlY29yZCBpdCBpbiBvdXIgc2V0IG9mIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzRmlyc3RWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IHZhbHVlLCByZWNvcmQgdGhhdC5cbiAgICAgICAgICAgICAgICAgICAgICBoYXNGaXJzdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdGaXJzdFZhbHVlcy0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVtYWluaW5nRmlyc3RWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSdyZSBub3Qgd2FpdGluZyBmb3IgYW55IG1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCB2YWx1ZXMsIHNvIHdlIGNhbiBlbWl0IVxuICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZVRyYW5zZm9ybSh2YWx1ZXMuc2xpY2UoKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gV2Ugb25seSBjb21wbGV0ZSB0aGUgcmVzdWx0IGlmIHdlIGhhdmUgbm8gbW9yZSBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBpbm5lciBvYnNlcnZhYmxlcy5cbiAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Vic2NyaWJlclxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmVyXG4gICAgKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBBIHNtYWxsIHV0aWxpdHkgdG8gaGFuZGxlIHRoZSBjb3VwbGUgb2YgbG9jYXRpb25zIHdoZXJlIHdlIHdhbnQgdG8gc2NoZWR1bGUgaWYgYSBzY2hlZHVsZXIgd2FzIHByb3ZpZGVkLFxuICogYnV0IHdlIGRvbid0IGlmIHRoZXJlIHdhcyBubyBzY2hlZHVsZXIuXG4gKi9cbmZ1bmN0aW9uIG1heWJlU2NoZWR1bGUoc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlIHwgdW5kZWZpbmVkLCBleGVjdXRlOiAoKSA9PiB2b2lkLCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikge1xuICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmlwdGlvbiwgc2NoZWR1bGVyLCBleGVjdXRlKTtcbiAgfSBlbHNlIHtcbiAgICBleGVjdXRlKCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgdHlwZSBNb3VzZUV2ZW50ID0gUG9pbnRlckV2ZW50ICYge1xuICAgIGNsaWVudFg/OiBudW1iZXI7XG4gICAgY2xpZW50WT86IG51bWJlcjtcbiAgICBwb2ludGVySWQ/OiBudW1iZXI7XG4gICAgYnV0dG9ucz86IG51bWJlcjtcbn07XG5leHBvcnQgdHlwZSBXaGVlbEV2ZW50ID0gUG9pbnRlckV2ZW50ICYgeyBkZWx0YVg6IG51bWJlcjsgZGVsdGFZOiBudW1iZXI7IGRlbHRhWjogbnVtYmVyIH07XG5leHBvcnQgdHlwZSBNb3VzZUhvc3QgPSBWaWV3ICYge1xuICAgIHNldFBvaW50ZXJDYXB0dXJlOiAocG9pbnRlcklkOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgcmVsZWFzZVBvaW50ZXJDYXB0dXJlOiAocG9pbnRlcklkOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgb253aGVlbD86IChlOiBXaGVlbEV2ZW50KSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGVudW0gTW91c2VCdXR0b24ge1xuICAgIExlZnQgPSAxLFxuICAgIFJpZ2h0ID0gMixcbiAgICBNaWRkbGUgPSA0LFxuICAgIEFsbCA9IDcsXG59XG5cbmV4cG9ydCBjb25zdCBNb3ZlYWJsZVZpZXcgPSAoe1xuICAgIGNoaWxkcmVuLFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBwb3NpdGlvbjogaW5pdFBvc2l0aW9uLFxuICAgIG9uTW92ZSxcbiAgICBtb3VzZUJ1dHRvbiA9IE1vdXNlQnV0dG9uLkFsbCxcbiAgICBlbmFibGVTY2FsaW5nID0gZmFsc2UsXG4gICAgd2hvbGVDYW52YXMgPSBmYWxzZSxcbiAgICBpbm5lckNsYXNzTmFtZSxcbiAgICBvdXRlckNsYXNzTmFtZSxcbn06IHtcbiAgICBjaGlsZHJlbjogSlNYLkVsZW1lbnQ7XG4gICAgSGVhZGVyQ29tcG9uZW50PzogKCkgPT4gSlNYLkVsZW1lbnQ7XG4gICAgcG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXIgfTtcbiAgICBvbk1vdmU6IChwb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlciB9KSA9PiB2b2lkO1xuICAgIG1vdXNlQnV0dG9uPzogTW91c2VCdXR0b247XG4gICAgZW5hYmxlU2NhbGluZz86IGJvb2xlYW47XG4gICAgd2hvbGVDYW52YXM/OiBib29sZWFuO1xuICAgIGlubmVyQ2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIG91dGVyQ2xhc3NOYW1lPzogc3RyaW5nO1xufSkgPT4ge1xuICAgIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoe1xuICAgICAgICB4OiBpbml0UG9zaXRpb24ueCxcbiAgICAgICAgeTogaW5pdFBvc2l0aW9uLnksXG4gICAgICAgIHNjYWxlOiBpbml0UG9zaXRpb24uc2NhbGUsXG4gICAgICAgIGRyYWdQb2ludGVySWQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgICAgIHhEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgICAgIHlEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB5UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICB9KTtcblxuICAgIGNvbnN0IHN0YXJ0RHJhZyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBNb3VzZUV2ZW50LCBjb250ZXh0U2NhbGU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoISgoZS5idXR0b25zID8/IDApICYgbW91c2VCdXR0b24pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeFBvaW50ZXIgPSBlLmNsaWVudFggPz8gMDtcbiAgICAgICAgY29uc3QgeVBvaW50ZXIgPSBlLmNsaWVudFkgPz8gMDtcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXJ0RHJhZ2AsIHsgeFBvaW50ZXIsIHlQb2ludGVyLCBlLCBwb3NpdGlvbiwgY29udGV4dFNjYWxlIH0pO1xuXG4gICAgICAgIGhvc3RSZWYuY3VycmVudD8uc2V0UG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQgPz8gMCk7XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIGRyYWdQb2ludGVySWQ6IGUucG9pbnRlcklkLFxuICAgICAgICAgICAgeERyYWdTdGFydDogcy54LFxuICAgICAgICAgICAgeURyYWdTdGFydDogcy55LFxuICAgICAgICAgICAgeFBvaW50ZXJEcmFnU3RhcnQ6IHhQb2ludGVyLFxuICAgICAgICAgICAgeVBvaW50ZXJEcmFnU3RhcnQ6IHlQb2ludGVyLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG4gICAgY29uc3QgZW5kRHJhZyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBNb3VzZUV2ZW50LCBjb250ZXh0U2NhbGU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocG9zaXRpb24uZHJhZ1BvaW50ZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaG9zdFJlZi5jdXJyZW50Py5yZWxlYXNlUG9pbnRlckNhcHR1cmUocG9zaXRpb24uZHJhZ1BvaW50ZXJJZCk7XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHhQb2ludGVyID0gZS5jbGllbnRYID8/IDA7XG4gICAgICAgIGNvbnN0IHlQb2ludGVyID0gZS5jbGllbnRZID8/IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBlbmREcmFnYCwgeyB4UG9pbnRlciwgeVBvaW50ZXIsIGUsIHBvc2l0aW9uLCBjb250ZXh0U2NhbGUgfSk7XG5cbiAgICAgICAgY29uc3QgbmV3WCA9XG4gICAgICAgICAgICAocG9zaXRpb24ueERyYWdTdGFydCA/PyAwKVxuICAgICAgICAgICAgKyAoeFBvaW50ZXIgLSAocG9zaXRpb24ueFBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlO1xuICAgICAgICBjb25zdCBuZXdZID1cbiAgICAgICAgICAgIChwb3NpdGlvbi55RHJhZ1N0YXJ0ID8/IDApXG4gICAgICAgICAgICArICh5UG9pbnRlciAtIChwb3NpdGlvbi55UG9pbnRlckRyYWdTdGFydCA/PyAwKSkgLyBjb250ZXh0U2NhbGU7XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIHg6IG5ld1gsXG4gICAgICAgICAgICB5OiBuZXdZLFxuICAgICAgICAgICAgZHJhZ1BvaW50ZXJJZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgeFBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHlQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBvbk1vdmUoe1xuICAgICAgICAgICAgeDogbmV3WCxcbiAgICAgICAgICAgIHk6IG5ld1ksXG4gICAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3ZlRHJhZyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBNb3VzZUV2ZW50LCBjb250ZXh0U2NhbGU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocG9zaXRpb24uZHJhZ1BvaW50ZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeFBvaW50ZXIgPSBlLmNsaWVudFggPz8gMDtcbiAgICAgICAgY29uc3QgeVBvaW50ZXIgPSBlLmNsaWVudFkgPz8gMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG1vdmVEcmFnYCwgeyB4UG9pbnRlciwgeVBvaW50ZXIsIGUsIHBvc2l0aW9uLCBjb250ZXh0U2NhbGUgfSk7XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIHg6IChzLnhEcmFnU3RhcnQgPz8gMCkgKyAoeFBvaW50ZXIgLSAocy54UG9pbnRlckRyYWdTdGFydCA/PyAwKSkgLyBjb250ZXh0U2NhbGUsXG4gICAgICAgICAgICB5OiAocy55RHJhZ1N0YXJ0ID8/IDApICsgKHlQb2ludGVyIC0gKHMueVBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzY3JvbGxXaGVlbCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbndoZWVsYCwgeyBlLCBwb3NpdGlvbiB9KTtcbiAgICAgICAgY29uc3QgZGVsdGFZID0gZS5kZWx0YVk7XG4gICAgICAgIGlmICghZGVsdGFZKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVuYWJsZVNjYWxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBzY2FsZTogcy5zY2FsZSAqIE1hdGgucG93KDAuOSwgZGVsdGFZID4gMCA/IDEgOiAtMSksXG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhvc3RSZWYgPSB1c2VSZWYobnVsbCBhcyBudWxsIHwgTW91c2VIb3N0KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBob3N0ID0gaG9zdFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBob3N0YCwgeyBob3N0IH0pO1xuICAgICAgICBob3N0Lm9ud2hlZWwgPSBzY3JvbGxXaGVlbDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhvc3Qub253aGVlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICB9LCBbIWhvc3RSZWYuY3VycmVudF0pO1xuXG4gICAgY29uc3Qgd2hvbGVIb3N0UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IE1vdXNlSG9zdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaG9zdCA9IHdob2xlSG9zdFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBob3N0YCwgeyBob3N0IH0pO1xuICAgICAgICBob3N0Lm9ud2hlZWwgPSBzY3JvbGxXaGVlbDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhvc3Qub253aGVlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICB9LCBbIXdob2xlSG9zdFJlZi5jdXJyZW50XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW92ZWFibGVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgeyh7IHBvc2l0aW9uOiBjb250YWluZXJQb3NpdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAge3dob2xlQ2FudmFzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0hlYWRlckNvbXBvbmVudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ29tcG9uZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleC0xIGJnLWZ1Y2hzaWEtNjAwIG9wYWNpdHktNTAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17d2hvbGVIb3N0UmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtlID0+IHdob2xlQ2FudmFzICYmIHN0YXJ0RHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17ZSA9PiBlbmREcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e2UgPT4gbW92ZURyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtgZmxleC0xICR7d2hvbGVDYW52YXMgPyBgb3ZlcmZsb3ctaGlkZGVuYCA6IGBgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVzc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtvdXRlckNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtob3N0UmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG9sZUNhbnZhcyAmJiBzdGFydERyYWcoZSwgY29udGFpbmVyUG9zaXRpb24uc2NhbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9e2UgPT4gZW5kRHJhZyhlLCBjb250YWluZXJQb3NpdGlvbi5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e2UgPT4gbW92ZURyYWcoZSwgY29udGFpbmVyUG9zaXRpb24uc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZXNzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbm5lckNsYXNzTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgpIHNjYWxlKCR7cG9zaXRpb24uc2NhbGV9KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17ZSA9PiBzdGFydERyYWcoZSwgY29udGFpbmVyUG9zaXRpb24uc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92ZWFibGVDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHBvc2l0aW9uLnggKyBjb250YWluZXJQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogcG9zaXRpb24ueSArIGNvbnRhaW5lclBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogcG9zaXRpb24uc2NhbGUgKiBjb250YWluZXJQb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvbGVDYW52YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vdmVhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvTW92ZWFibGVDb250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgTW92ZWFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gICAgd2hvbGVDYW52YXM6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgIH0sXG59KTtcbiIsICJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFByZXNzYWJsZSwgVGV4dElucHV0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNb3VzZUJ1dHRvbiwgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7IFBpcGVFbmRwb2ludFZpZXcsIFBpcGVWaWV3IH0gZnJvbSAnLi9waXBlcyc7XG5pbXBvcnQgeyBTaGVldFZpZXcsIFNoZWV0Vmlld0RhdGEgfSBmcm9tICcuL3NoZWV0JztcbmltcG9ydCB7IFZhbHVlRWRpdG9yLCBWYWx1ZVZpZXdlck1vZGUgfSBmcm9tICcuL3ZhbHVlLXZpZXcnO1xuaW1wb3J0IHsgZ2V0VHlwZU5hbWUgfSBmcm9tICcuL3dvcmstbmFtZXMnO1xuaW1wb3J0IHsgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlIH0gZnJvbSAnLi4vYW5hbHlzaXMvY2FsY3VsYXRlLXJ1bic7XG5pbXBvcnQge1xuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0VHlwZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgTm9kZUluc3RhbmNlc1ZpZXcgPSAoe1xuICAgIG5vZGVJbnN0YW5jZXMsXG4gICAgZnVsbCA9IGZhbHNlLFxuICAgIGhpZGVUaXRsZXMgPSBmYWxzZSxcbn06IHtcbiAgICBub2RlSW5zdGFuY2VzOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlW107XG4gICAgZnVsbD86IGJvb2xlYW47XG4gICAgaGlkZVRpdGxlcz86IGJvb2xlYW47XG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJ1blZhbHVlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y3JlYXRlUnVuVmFsdWUoKX0+XG4gICAgICAgICAgICA8VmlldyB0ZXN0SUQ9J05vZGVJbnN0YW5jZXNWaWV3OlZpZXcnIGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgIHtub2RlSW5zdGFuY2VzLm1hcCh4ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eC5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3IG5vZGVJbnN0YW5jZT17eH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxSb290Q29tcG9uZW50c1ZpZXcgLz5cbiAgICAgICAgPC9SdW5WYWx1ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmNvbnN0IFJvb3RDb21wb25lbnRzVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudHMgfSA9IHVzZUNvbnRleHQoUnVuVmFsdWVDb250ZXh0KTtcblxuICAgIGNvbnN0IFtyb290Q29tcG9uZW50cywgc2V0Um9vdENvbXBvbmVudHNdID0gdXNlU3RhdGUoe30gYXMgUmVjb3JkPHN0cmluZywgKCkgPT4gSlNYLkVsZW1lbnQ+KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBDb21wb25lbnRzLnN1YnNjcmliZSh4ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSb290Q29tcG9uZW50c1ZpZXc6IENvbXBvbmVudHMuc3Vic2NyaWJlYCwgeyB4IH0pO1xuICAgICAgICAgICAgc2V0Um9vdENvbXBvbmVudHMoeyAuLi54IH0pO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyB0ZXN0SUQ9J1Jvb3RDb21wb25lbnRzVmlldzpWaWV3JyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgIHtbLi4uT2JqZWN0LmVudHJpZXMocm9vdENvbXBvbmVudHMpXS5tYXAoKFtrLCBWXSkgPT4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2t9PlxuICAgICAgICAgICAgICAgICAgICA8ViAvPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBOb2RlVmlldyA9ICh7IG5vZGVJbnN0YW5jZSB9OiB7IG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSB9KSA9PiB7XG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgIH0pO1xuICAgIGNvbnN0IG1vdmVOb2RlID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZhbHVlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgc2V0UG9zaXRpb24odmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTm9kZVZpZXdgLCB7IG5vZGVJbnN0YW5jZSB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdvcmtmbG93ID0gbm9kZUluc3RhbmNlLndvcmtmbG93O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtub2RlSW5zdGFuY2Uud29ya2Zsb3cubmFtZS5lbmRzV2l0aChgaWYtYm9keWApICYmIChcbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Jhc2lzLVsxMDAlXSBoLTAnIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgIDxNb3ZlYWJsZVZpZXdcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBwb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHBvc2l0aW9uLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbk1vdmU9e21vdmVOb2RlfVxuICAgICAgICAgICAgICAgICAgICBtb3VzZUJ1dHRvbj17TW91c2VCdXR0b24uTWlkZGxlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCByZWxhdGl2ZSBiZy1zbGF0ZS05NTAvNzUgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gcm91bmRlZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e2Ake25vZGVJbnN0YW5jZS53b3JrZmxvdy5uYW1lfSAjJHtub2RlSW5zdGFuY2Uua2V5fWB9PC9UZXh0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IHAtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5pbnB1dHMubWFwKGlucHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlQ29ubmVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZT17aW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb249e25vZGVJbnN0YW5jZS5pbnB1dHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPT4geC53b3JrZmxvd0lucHV0ID09PSBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU91dHB1dD17bm9kZUluc3RhbmNlLndvcmtmbG93LmJvZHkua2luZCAhPT0gYG5vZGVzYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBmbGV4LXdyYXAgbWF4LXctWzEwMHZ3XSBtLVstMXB4XSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVJbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVJbnN0YW5jZS5jaGlsZHJlbi5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eC5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZVZpZXcgbm9kZUluc3RhbmNlPXt4fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuYm9keS5raW5kID09PSBgb3BlcmF0b3JgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTYwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmJvZHkub3BlcmF0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEganVzdGlmeS1zdGFydCBpdGVtcy1lbmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LVsxMHB4XSc+XHUyNkNGPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCBwLTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cub3V0cHV0cy5tYXAob3V0cHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dHB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZUNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGU9e291dHB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbj17bm9kZUluc3RhbmNlLm91dHB1dHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPT4geC53b3JrZmxvd091dHB1dCA9PT0gb3V0cHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlSW5wdXQ9e25vZGVJbnN0YW5jZS53b3JrZmxvdy5ib2R5LmtpbmQgIT09IGBub2Rlc2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXIgbm9kZUluc3RhbmNlPXtub2RlSW5zdGFuY2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IEZvb3RlciA9ICh7IG5vZGVJbnN0YW5jZSB9OiB7IG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSB9KSA9PiB7XG4gICAgY29uc3QgdGFicyA9IFtgbm9uZWAsIGBzaGVldGAsIGBjb2RlYCwgYGJvdGhgXSBhcyBjb25zdDtcbiAgICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoXG4gICAgICAgIG5vZGVJbnN0YW5jZS53b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmBcbiAgICAgICAgICAgID8gYGNvZGVgXG4gICAgICAgICAgICA6IChgc2hlZXRgIGFzICh0eXBlb2YgdGFicylbbnVtYmVyXSksXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICB7dGFicy5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzPXsoKSA9PiBzZXRUYWIoeCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17YHAtMSBiZy1ncmF5LTIwMCAke3RhYiA9PT0geCA/IGBgIDogYG9wYWNpdHktNTBgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD57eH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICB7KHRhYiA9PT0gYGNvZGVgIHx8IHRhYiA9PT0gYGJvdGhgKSAmJiAoXG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy1ncmF5LTIwMCc+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1wcmUnPntub2RlSW5zdGFuY2UucnVucz8uWzBdPy5jb2RlfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyh0YWIgPT09IGBzaGVldGAgfHwgdGFiID09PSBgYm90aGApICYmIChcbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLWdyYXktMjAwJz5cbiAgICAgICAgICAgICAgICAgICAgPE5vZGVJbnN0YW5jZVNoZWV0VmlldyBub2RlSW5zdGFuY2U9e25vZGVJbnN0YW5jZX0gLz5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgTm9kZUluc3RhbmNlU2hlZXRWaWV3ID0gKHsgbm9kZUluc3RhbmNlIH06IHsgbm9kZUluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlIH0pID0+IHtcbiAgICBjb25zdCBydW5WYWx1ZUNvbnRleHQgPSB1c2VDb250ZXh0KFJ1blZhbHVlQ29udGV4dCk7XG4gICAgY29uc3QgW3J1bnMsIHNldFJ1bnNdID0gdXNlU3RhdGUodW5kZWZpbmVkIGFzIHR5cGVvZiBub2RlSW5zdGFuY2UucnVucyk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3ViID0gcnVuVmFsdWVDb250ZXh0LlZhbHVlQ2hhbmdlZC5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTm9kZUluc3RhbmNlU2hlZXRWaWV3OiBjaGFuZ2VkYCwgeyBydW5zOiBub2RlSW5zdGFuY2UucnVucyB9KTtcbiAgICAgICAgICAgIHNldFJ1bnMoWy4uLihub2RlSW5zdGFuY2UucnVucyA/PyBbXSldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFJ1bnMoWy4uLihub2RlSW5zdGFuY2UucnVucyA/PyBbXSldKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnNvbGUubG9nKGBOb2RlSW5zdGFuY2VTaGVldFZpZXc6IFJFTkRFUmAsIHsgcnVuczogbm9kZUluc3RhbmNlLnJ1bnMgfSk7XG5cbiAgICBpZiAoIXJ1bnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxUZXh0PkVtcHR5PC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICApO1xuICAgIH1cbiAgICBjb25zdCBhbGxIZWFkZXJzOiBTaGVldFZpZXdEYXRhW2BoZWFkZXJgXSA9XG4gICAgICAgIHJ1bnM/LmZsYXRNYXAociA9PiBbXG4gICAgICAgICAgICAuLi5yLmlucHV0cy5tYXAoeCA9PiAoeyBuYW1lOiB4Lm5hbWUsIG1vZGU6IGBpbnB1dGAgYXMgVmFsdWVWaWV3ZXJNb2RlIH0pKSxcbiAgICAgICAgICAgIC4uLnIuaW5uZXIubWFwKHggPT4gKHsgbmFtZTogeC5uYW1lLCBtb2RlOiBgaW5uZXJgIGFzIFZhbHVlVmlld2VyTW9kZSB9KSksXG4gICAgICAgICAgICAuLi5yLm91dHB1dHMubWFwKHggPT4gKHsgbmFtZTogeC5uYW1lLCBtb2RlOiBgb3V0cHV0YCBhcyBWYWx1ZVZpZXdlck1vZGUgfSkpLFxuICAgICAgICBdKSA/PyBbXTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBbLi4ubmV3IE1hcChhbGxIZWFkZXJzLm1hcCh4ID0+IFt4Lm5hbWUsIHhdKSkudmFsdWVzKCldO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNoZWV0Vmlld1xuICAgICAgICAgICAgZGF0YT17e1xuICAgICAgICAgICAgICAgIGhlYWRlcjogaGVhZGVycyxcbiAgICAgICAgICAgICAgICByb3dzOiBydW5zLm1hcChyID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzOiBoZWFkZXJzLm1hcChoID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBoLm1vZGUgPT09IGBpbnB1dGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHIuaW5wdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGgubmFtZSk/LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBoLm1vZGUgPT09IGBpbm5lcmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHIuaW5uZXIuZmluZCh4ID0+IHgubmFtZSA9PT0gaC5uYW1lKT8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGgubW9kZSA9PT0gYG91dHB1dGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHIub3V0cHV0cy5maW5kKHggPT4geC5uYW1lID09PSBoLm5hbWUpPy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IGdldFBpcGVDb25uZWN0aW9uS2V5ID0gKFxuICAgIGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSxcbiAgICBkaXJlY3Rpb246IGBpbmAgfCBgb3V0YCxcbikgPT4ge1xuICAgIHJldHVybiBgJHtjb25uZWN0aW9uLmtleX06JHtkaXJlY3Rpb259YDtcbn07XG5cbmNvbnN0IGdldFBpcGVLZXkgPSAoXG4gICAgcGlwZVNpZGU6IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF0gfCBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYGRlc3RpbmF0aW9uYF0sXG4gICAgZGlyZWN0aW9uOiBgaW5gIHwgYG91dGAsXG4pID0+IHtcbiAgICBpZiAocGlwZVNpZGUua2luZCA9PT0gYGlucHV0YCkge1xuICAgICAgICByZXR1cm4gZ2V0UGlwZUNvbm5lY3Rpb25LZXkocGlwZVNpZGUuaW5wdXQsIGRpcmVjdGlvbik7XG4gICAgfVxuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgb3V0cHV0YCkge1xuICAgICAgICByZXR1cm4gZ2V0UGlwZUNvbm5lY3Rpb25LZXkocGlwZVNpZGUub3V0cHV0LCBkaXJlY3Rpb24pO1xuICAgIH1cbiAgICBpZiAocGlwZVNpZGUua2luZCA9PT0gYGRhdGFgKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgb3BlcmF0b3Itb3V0cHV0YCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocGlwZVNpZGUua2luZCA9PT0gYG9wZXJhdG9yLWlucHV0YCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBQaXBlVmFsdWVWaWV3ID0gKHtcbiAgICBwaXBlVmFsdWUsXG4gICAgc2lkZSxcbn06IHtcbiAgICBwaXBlVmFsdWU6IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZTtcbiAgICBzaWRlOiBgaW5mbG93YCB8IGBvdXRmbG93YDtcbn0pID0+IHtcbiAgICBjb25zdCB7IHNvdXJjZSwgZGVzdGluYXRpb24gfSA9IHBpcGVWYWx1ZSA/PyB7fTtcbiAgICBpZiAoIXNvdXJjZSB8fCAhZGVzdGluYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIDw+PC8+O1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZUlkID0gZ2V0UGlwZUtleShzb3VyY2UsIGBvdXRgKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbklkID0gZ2V0UGlwZUtleShkZXN0aW5hdGlvbiwgYGluYCk7XG4gICAgaWYgKCFzb3VyY2VJZCB8fCAhZGVzdGluYXRpb25JZCkge1xuICAgICAgICByZXR1cm4gPD48Lz47XG4gICAgfVxuXG4gICAgcmV0dXJuIDxQaXBlVmlldyBzb3VyY2VJZD17c291cmNlSWR9IGRlc3RpbmF0aW9uSWQ9e2Rlc3RpbmF0aW9uSWR9IHNpZGU9e3NpZGV9IC8+O1xufTtcblxuY29uc3QgTm9kZUNvbm5lY3Rpb24gPSAoe1xuICAgIHZhcmlhYmxlLFxuICAgIGNvbm5lY3Rpb24sXG4gICAgaGlkZUlucHV0LFxuICAgIGhpZGVPdXRwdXQsXG59OiB7XG4gICAgdmFyaWFibGU6IHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICB0eXBlPzogUGlwZXNjcmlwdFR5cGU7XG4gICAgICAgIGlnbm9yZWQ/OiBib29sZWFuO1xuICAgIH07XG4gICAgY29ubmVjdGlvbjogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlO1xuICAgIGhpZGVJbnB1dD86IGJvb2xlYW47XG4gICAgaGlkZU91dHB1dD86IGJvb2xlYW47XG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbHVtbic+XG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sdW1uJz5cbiAgICAgICAgICAgICAgICAgICAgeyFoaWRlSW5wdXQgJiYgY29ubmVjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtjb25uZWN0aW9uLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3IGlkPXtnZXRQaXBlQ29ubmVjdGlvbktleShjb25uZWN0aW9uLCBgaW5gKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWYWx1ZVZpZXcgcGlwZVZhbHVlPXtjb25uZWN0aW9uLmluZmxvd1BpcGV9IHNpZGU9J2luZmxvdycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ibHVlLTMwMCAke3ZhcmlhYmxlLmlnbm9yZWQgPyBgbGluZS10aHJvdWdoIG9wYWNpdHktNTBgIDogYGB9YH1cbiAgICAgICAgICAgICAgICA+e2Ake3ZhcmlhYmxlLm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAge3ZhcmlhYmxlLnR5cGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICB7IWhpZGVPdXRwdXQgJiYgY29ubmVjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtjb25uZWN0aW9uLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXcgaWQ9e2dldFBpcGVDb25uZWN0aW9uS2V5KGNvbm5lY3Rpb24sIGBvdXRgKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29ubmVjdGlvbi5vdXRmbG93UGlwZXMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRmbG93UGlwZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0Zmxvd1BpcGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dGZsb3dQaXBlLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmFsdWVWaWV3IHBpcGVWYWx1ZT17b3V0Zmxvd1BpcGV9IHNpZGU9J291dGZsb3cnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAge2Nvbm5lY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHtjb25uZWN0aW9uLnJ1bnM/Lm5hbWVJblNjb3BlXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBjb25uZWN0aW9uLnJ1bnM/Lm5hbWVJblNjb3BlICE9PSBjb25uZWN0aW9uLm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTMwMCc+e2Ake2Nvbm5lY3Rpb24ucnVucy5uYW1lSW5TY29wZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxOb2RlQ29ubmVjdGlvblZhbHVlIGNvbm5lY3Rpb249e2Nvbm5lY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIHtjb25uZWN0aW9uLmluZmxvd1BpcGU/LnBpcGUua2luZCA9PT0gYGRhdGFgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbS1bMXB4XSBiZy1wdXJwbGUtMTAwIG9wYWNpdHktNTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncHgtMSBtaW4tdy1bNjBweF0gdGV4dC1wdXJwbGUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3Rpb24uaW5mbG93UGlwZT8ucGlwZS5qc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuY29uc3QgY3JlYXRlUnVuVmFsdWUgPSAoKSA9PiAoe1xuICAgIFZhbHVlQ2hhbmdlZDogbmV3IFN1YmplY3Q8dm9pZD4oKSxcbiAgICBDb21wb25lbnRzOiBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9IGFzIFJlY29yZDxzdHJpbmcsICgpID0+IEpTWC5FbGVtZW50PiksXG59KTtcbmV4cG9ydCBjb25zdCBSdW5WYWx1ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGNyZWF0ZVJ1blZhbHVlKCkpO1xuXG5jb25zdCBOb2RlQ29ubmVjdGlvblZhbHVlID0gKHtcbiAgICBjb25uZWN0aW9uLFxufToge1xuICAgIGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZTtcbn0pID0+IHtcbiAgICBjb25zdCBydW5WYWx1ZUNvbnRleHQgPSB1c2VDb250ZXh0KFJ1blZhbHVlQ29udGV4dCk7XG5cbiAgICBjb25zdCBbcnVuVmFsdWUsIHNldFJ1blZhbHVlXSA9IHVzZVN0YXRlKGNvbm5lY3Rpb24ucnVucz8udmFsdWUpO1xuICAgIGNvbnN0IFtoYXNPdmVycmlkZSwgc2V0SGFzT3ZlcnJpZGVdID0gdXNlU3RhdGUoISFjb25uZWN0aW9uLnJ1bnM/Lm92ZXJyaWRlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YiA9IHJ1blZhbHVlQ29udGV4dC5WYWx1ZUNoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOb2RlQ29ubmVjdGlvblZhbHVlOiBWYWx1ZUNoYW5nZWQuc3Vic2NyaWJlYCwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBjb25uZWN0aW9uLnJ1bnM/LnZhbHVlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFJ1blZhbHVlKGNvbm5lY3Rpb24ucnVucz8udmFsdWUpO1xuICAgICAgICAgICAgc2V0SGFzT3ZlcnJpZGUoY29ubmVjdGlvbi5ydW5zPy5vdmVycmlkZSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBjaGFuZ2VWYWx1ZSA9ICh2YWx1ZTogdW5rbm93bikgPT4ge1xuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9jb25uZWN0aW9uT3ZlcnJpZGUoY29ubmVjdGlvbiwgdmFsdWUpO1xuICAgICAgICBydW5WYWx1ZUNvbnRleHQuVmFsdWVDaGFuZ2VkLm5leHQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxWYWx1ZUVkaXRvclxuICAgICAgICAgICAgICAgIGlkPXtjb25uZWN0aW9uLmtleX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cnVuVmFsdWV9XG4gICAgICAgICAgICAgICAgaGFzT3ZlcnJpZGU9e2hhc092ZXJyaWRlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuIiwgImltcG9ydCBSZWFjdCwge1xuICAgIGNyZWF0ZUNvbnRleHQsXG4gICAgdXNlQ29udGV4dCxcbiAgICB1c2VFZmZlY3QsXG4gICAgdXNlTGF5b3V0RWZmZWN0LFxuICAgIHVzZVJlZixcbiAgICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW92ZWFibGVDb250ZXh0IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7IFBpcGVzY3JpcHRQaXBlVmFsdWUsIFBpcGVzY3JpcHRXb3JrZmxvdyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSA9ICh7XG4gICAgbm9kZUlkLFxuICAgIG5hbWUsXG4gICAgZGlyZWN0aW9uLFxufToge1xuICAgIG5vZGVJZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXJlY3Rpb246IGBvdXRgIHwgYGluYDtcbn0pID0+IHtcbiAgICByZXR1cm4gYG5vZGU6JHtub2RlSWR9OiR7ZGlyZWN0aW9ufToke25hbWV9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93ID0gKHtcbiAgICB3b3JrZmxvd1VyaSxcbiAgICBuYW1lLFxuICAgIGRpcmVjdGlvbixcbn06IHtcbiAgICB3b3JrZmxvd1VyaTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXJlY3Rpb246IGBvdXRgIHwgYGluYDtcbn0pID0+IHtcbiAgICByZXR1cm4gYHdvcmtmbG93OiR7d29ya2Zsb3dVcml9OiR7ZGlyZWN0aW9ufToke25hbWV9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2UgPSAoe1xuICAgIHBpcGUsXG4gICAgd29ya2Zsb3csXG59OiB7XG4gICAgcGlwZTogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZTtcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xufSkgPT4ge1xuICAgIGlmICghcGlwZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChwaXBlLmtpbmQgPT09IGB3b3JrZmxvdy1vcGVyYXRvcmApIHtcbiAgICAgICAgcmV0dXJuIFtgb3BlcmF0b3JgXS5tYXAobmFtZSA9PlxuICAgICAgICAgICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChwaXBlLmtpbmQgPT09IGB3b3JrZmxvdy1pbnB1dGApIHtcbiAgICAgICAgcmV0dXJuIFtwaXBlLndvcmtmbG93SW5wdXROYW1lXS5tYXAobmFtZSA9PlxuICAgICAgICAgICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYGluYCxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHBpcGUua2luZCA9PT0gYG5vZGVgKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgIG5vZGVJZDogcGlwZS5zb3VyY2VOb2RlSWQsXG4gICAgICAgICAgICAgICAgbmFtZTogcGlwZS5zb3VyY2VOb2RlT3V0cHV0TmFtZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLy8gaWYocGlwZS5raW5kID09PSBgZGF0YWApe1xuXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIFtdO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBpcGVFbmRwb2ludHNSZWdpc3RyeSA9ICgpID0+ICh7XG4gICAgaG9zdE9ic2VydmFibGU6IG5ldyBTdWJqZWN0KCkgYXMgT2JzZXJ2YWJsZTxWaWV3PixcbiAgICBob3N0VmlldzogbnVsbCBhcyBudWxsIHwgVmlldyxcbiAgICBlbmRwb2ludHM6IHt9IGFzIHtcbiAgICAgICAgW2lkOiBzdHJpbmddOiB1bmRlZmluZWQgfCBTdWJqZWN0PHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT47XG4gICAgfSxcbiAgICBwaXBlczogbmV3IEJlaGF2aW9yU3ViamVjdChcbiAgICAgICAge30gYXMge1xuICAgICAgICAgICAgW2lkOiBzdHJpbmddOlxuICAgICAgICAgICAgICAgIHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfCB7IHNvdXJjZUlkOiBzdHJpbmc7IGRlc3RpbmF0aW9uSWQ6IHN0cmluZzsgc2lkZT86IGBpbmZsb3dgIHwgYG91dGZsb3dgIH07XG4gICAgICAgIH0sXG4gICAgKSxcbn0pO1xudHlwZSBQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlID0gUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlUGlwZUVuZHBvaW50c1JlZ2lzdHJ5PjtcbmV4cG9ydCBjb25zdCBQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0ID0gY3JlYXRlQ29udGV4dChjcmVhdGVQaXBlRW5kcG9pbnRzUmVnaXN0cnkoKSk7XG5cbmNvbnN0IGdldE9yQ3JlYXRlRW5kcG9pbnRTdWJqZWN0ID0gKHJlZ2lzdHJ5OiBQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlLCBpZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgcmVnaXN0cnkuZW5kcG9pbnRzW2lkXVxuICAgICAgICA/PyAocmVnaXN0cnkuZW5kcG9pbnRzW2lkXSA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH0pKVxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgUGlwZVZpZXcgPSAoe1xuICAgIHNvdXJjZUlkLFxuICAgIGRlc3RpbmF0aW9uSWQsXG4gICAgc2lkZSA9IGBpbmZsb3dgLFxufToge1xuICAgIHNvdXJjZUlkOiB1bmRlZmluZWQgfCBzdHJpbmc7XG4gICAgZGVzdGluYXRpb25JZDogc3RyaW5nO1xuICAgIHNpZGU/OiBgaW5mbG93YCB8IGBvdXRmbG93YDtcbn0pID0+IHtcbiAgICBjb25zdCB7IHBpcGVzOiBwaXBlc1N1YmplY3QgfSA9IHVzZUNvbnRleHQoUGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7c291cmNlSWR9PT4ke2Rlc3RpbmF0aW9uSWR9Ojoke3NpZGV9YDtcbiAgICAgICAgY29uc3Qgb2xkID0gcGlwZXNTdWJqZWN0LnZhbHVlO1xuICAgICAgICBvbGRba2V5XSA9ICFzb3VyY2VJZFxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgc291cmNlSWQsXG4gICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbklkLFxuICAgICAgICAgICAgICAgICAgc2lkZSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgcGlwZXNTdWJqZWN0Lm5leHQob2xkKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2xkID0gcGlwZXNTdWJqZWN0LnZhbHVlO1xuICAgICAgICAgICAgb2xkW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBwaXBlc1N1YmplY3QubmV4dChvbGQpO1xuICAgICAgICB9O1xuICAgIH0sIFtzb3VyY2VJZCwgZGVzdGluYXRpb25JZCwgc2lkZV0pO1xuXG4gICAgcmV0dXJuIDw+PC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IFBpcGVWaWV3SG9zdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBpcGVzOiBwaXBlc1N1YmplY3QgfSA9IHVzZUNvbnRleHQoUGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dCk7XG4gICAgY29uc3QgW3BpcGVzLCBzZXRQaXBlc10gPSB1c2VTdGF0ZShwaXBlc1N1YmplY3QudmFsdWUpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YiA9IHBpcGVzU3ViamVjdC5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgICAgICBzZXRQaXBlcyh7IC4uLnggfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgdGVzdElEPSdQaXBlVmlld0hvc3QnIGNsYXNzTmFtZT0nYWJzb2x1dGUgei0xMCBvcGFjaXR5LTc1Jz5cbiAgICAgICAgICAgIHtbLi4uT2JqZWN0LmVudHJpZXMocGlwZXMpXVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKFtrLCB2XSkgPT4gISF2KVxuICAgICAgICAgICAgICAgIC5tYXAoKFtrLCB2XSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtrfT57diAmJiA8UGlwZVZpZXdMaW5lIHsuLi52fSAvPn08L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IFBpcGVWaWV3TGluZSA9ICh7XG4gICAgc291cmNlSWQsXG4gICAgZGVzdGluYXRpb25JZCxcbiAgICBzaWRlID0gYGluZmxvd2AsXG59OiB7XG4gICAgc291cmNlSWQ6IHVuZGVmaW5lZCB8IHN0cmluZztcbiAgICBkZXN0aW5hdGlvbklkOiBzdHJpbmc7XG4gICAgc2lkZT86IGBpbmZsb3dgIHwgYG91dGZsb3dgO1xufSkgPT4ge1xuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0KTtcblxuICAgIGNvbnN0IGRlc3RpbmF0aW9uRW5kcG9pbnQgPSBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgZGVzdGluYXRpb25JZCk7XG4gICAgY29uc3Qgc291cmNlRW5kcG9pbnQgPSAhc291cmNlSWQgPyB1bmRlZmluZWQgOiBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgc291cmNlSWQpO1xuXG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHNvdXJjZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIGRlc3RpbmF0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICB9KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghc291cmNlRW5kcG9pbnQgfHwgIWRlc3RpbmF0aW9uRW5kcG9pbnQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlVmlldyAhc291cmNlRW5kcG9pbnQgfHwgIWRlc3RpbmF0aW9uRW5kcG9pbnRgLCB7XG4gICAgICAgICAgICAvLyAgICAgc291cmNlSWQsXG4gICAgICAgICAgICAvLyAgICAgZGVzdGluYXRpb25JZCxcbiAgICAgICAgICAgIC8vICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgIC8vICAgICBzb3VyY2VFbmRwb2ludCxcbiAgICAgICAgICAgIC8vICAgICBkZXN0aW5hdGlvbkVuZHBvaW50LFxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5pdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgICAgIGNvbnN0IHN1YiA9IGNvbWJpbmVMYXRlc3QoW3NvdXJjZUVuZHBvaW50LCBkZXN0aW5hdGlvbkVuZHBvaW50LCBpbml0XSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKFtzb3VyY2UsIGRlc3RpbmF0aW9uXSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlVmlldyBkcmF3YCwgeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0pO1xuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKHsgc291cmNlLCBkZXN0aW5hdGlvbiB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaW5pdGlhbFxuICAgICAgICBjb25zb2xlLmxvZyhgaW5pdGlhbGAsIHsgc291cmNlRW5kcG9pbnQsIGRlc3RpbmF0aW9uRW5kcG9pbnQgfSk7XG4gICAgICAgIGluaXQubmV4dCgpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbIWRlc3RpbmF0aW9uRW5kcG9pbnQsICFzb3VyY2VFbmRwb2ludF0pO1xuXG4gICAgY29uc3QgZGVidWcgPSBmYWxzZTtcbiAgICBjb25zdCBpc091dGZsb3cgPSBzaWRlID09PSBgb3V0Zmxvd2A7XG4gICAgY29uc3QgeERlbHRhID0gcG9zaXRpb24uZGVzdGluYXRpb24ueCAtIHBvc2l0aW9uLnNvdXJjZS54O1xuICAgIGNvbnN0IHlEZWx0YSA9IHBvc2l0aW9uLmRlc3RpbmF0aW9uLnkgLSBwb3NpdGlvbi5zb3VyY2UueTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQoeERlbHRhICogeERlbHRhICsgeURlbHRhICogeURlbHRhKTtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoeURlbHRhLCB4RGVsdGEpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICB0ZXN0SUQ9e2BQaXBlVmlld0xpbmVcbiAgICAgICAgICAgICR7c291cmNlSWR9XG4gICAgICAgICAgICA9PiR7ZGVzdGluYXRpb25JZH1cbiAgICAgICAgICAgICR7c2lkZX1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTAgaC0wIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcidcbiAgICAgICAgPlxuICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LTAgaC0wIGFic29sdXRlJz5cbiAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24uc291cmNlLnggKyA0fXB4LCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uc291cmNlLnkgLSAyICsgKGlzT3V0ZmxvdyA/IDIgOiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfXB4KWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHthbmdsZX1yYWQpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc091dGZsb3cgPyBgYmctYmx1ZS00MDBgIDogYGJnLXJlZC00MDBgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAge2RlYnVnICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIHRyYW5zbGF0ZS15LVsxMDBweF0gcm90YXRlLTQ1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy1bMTAwMHB4XSB0ZXh0LVs0cHhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57YCgke3NvdXJjZUlkfSk9Pigke2Rlc3RpbmF0aW9uSWR9KWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntgKCR7cG9zaXRpb24uc291cmNlLnh9LCR7cG9zaXRpb24uc291cmNlLnl9KT0+KCR7cG9zaXRpb24uZGVzdGluYXRpb24ueH0sJHtwb3NpdGlvbi5kZXN0aW5hdGlvbi55fSlgfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFBpcGVFbmRwb2ludFZpZXcgPSAoeyBpZCB9OiB7IGlkOiBzdHJpbmcgfSkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSAxMjtcblxuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0KTtcbiAgICBjb25zdCBtb3ZlQ29udGV4dCA9IHVzZUNvbnRleHQoTW92ZWFibGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHRhcmdldFJlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBWaWV3KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdGAsIHsgcmVnaXN0cnkgfSk7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaCA9IHJlZ2lzdHJ5Lmhvc3RWaWV3O1xuICAgICAgICAgICAgaWYgKCFoKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVFbmRwb2ludFZpZXcgdXNlTGF5b3V0RWZmZWN0IC0gaG9zdCBOT1QgUkVBRFlgLCB7IHJlZ2lzdHJ5IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHQgPSB0YXJnZXRSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghdCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdCAtIGNvbXBvbmVudCBOT1QgUkVBRFlgLCB7IHJlZ2lzdHJ5IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdC5tZWFzdXJlTGF5b3V0KGgsIChsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUGlwZUVuZHBvaW50VmlldyB1c2VMYXlvdXRFZmZlY3QgbWVhc3VyZUxheW91dCBORVhUYCwge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZCxcbiAgICAgICAgICAgICAgICAvLyAgICAgbGVmdCxcbiAgICAgICAgICAgICAgICAvLyAgICAgdG9wLFxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIC8vICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gZ2V0T3JDcmVhdGVFbmRwb2ludFN1YmplY3QocmVnaXN0cnksIGlkKTtcbiAgICAgICAgICAgICAgICBzLm5leHQoe1xuICAgICAgICAgICAgICAgICAgICB4OiBsZWZ0ICsgbW92ZUNvbnRleHQucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG9wICsgbW92ZUNvbnRleHQucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNhbGN1bGF0ZSgpO1xuICAgICAgICByZWdpc3RyeS5ob3N0T2JzZXJ2YWJsZS5zdWJzY3JpYmUoaCA9PiB7XG4gICAgICAgICAgICBjYWxjdWxhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW1xuICAgICAgICAhIXRhcmdldFJlZi5jdXJyZW50LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi54LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi55LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi5zY2FsZSxcbiAgICBdKTtcblxuICAgIGNvbnN0IGRlYnVnID0gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgdGVzdElEPXtgUGlwZUVuZHBvaW50Vmlldzoke2lkfWB9IGNsYXNzTmFtZT0ndy0yIGgtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPFZpZXcgcmVmPXt0YXJnZXRSZWZ9IGNsYXNzTmFtZT0ndy0wIGgtMCBhYnNvbHV0ZSBwdC0xJz5cbiAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNDAwIGJvcmRlci1bMXB4XSBib3JkZXItYmx1ZS05NTAgcm91bmRlZC1mdWxsJ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAtc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IC1zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAge2RlYnVnICYmIChcbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIHRyYW5zbGF0ZS15LVsxMDBweF0gcm90YXRlLTkwJz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNDAwJz57aWR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgU2Nyb2xsVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFZhbHVlVmlld2VyLCBWYWx1ZVZpZXdlck1vZGUgfSBmcm9tICcuL3ZhbHVlLXZpZXcnO1xuXG5leHBvcnQgdHlwZSBTaGVldFZpZXdEYXRhID0ge1xuICAgIGhlYWRlcjogeyBuYW1lOiBzdHJpbmc7IG1vZGU6IFZhbHVlVmlld2VyTW9kZSB9W107XG4gICAgcm93czogeyBjZWxsczogdW5rbm93bltdIH1bXTtcbn07XG5leHBvcnQgY29uc3QgU2hlZXRWaWV3ID0gKHsgZGF0YSB9OiB7IGRhdGE6IFNoZWV0Vmlld0RhdGEgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IHRlc3RJRD0nU2hlZXRWaWV3JyBjbGFzc05hbWU9J2ZsZXgtY29sJz5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgIHtkYXRhLmhlYWRlci5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3gubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e3gubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8U2Nyb2xsVmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIG1heC1oLVsyNXZoXSc+XG4gICAgICAgICAgICAgICAge2RhdGEucm93cy5tYXAoKHIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ci5jZWxscy5tYXAoKHgsIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17an0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZhbHVlVmlld2VyIHZhbHVlPXt4fSBtb2RlPXtkYXRhLmhlYWRlcltqXS5tb2RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFRleHRJbnB1dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFJ1blZhbHVlQ29udGV4dCB9IGZyb20gJy4vbm9kZS1pbnN0YW5jZS12aWV3JztcblxuZXhwb3J0IGNvbnN0IFZhbHVlRWRpdG9yID0gKHtcbiAgICBpZCxcbiAgICB2YWx1ZSxcbiAgICBoYXNPdmVycmlkZSxcbiAgICBvbkNoYW5nZSxcbn06IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHZhbHVlOiB1bmtub3duO1xuICAgIGhhc092ZXJyaWRlOiBib29sZWFuO1xuICAgIG9uQ2hhbmdlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XG59KSA9PiB7XG4gICAgY29uc3QgcnVuVmFsdWVDb250ZXh0ID0gdXNlQ29udGV4dChSdW5WYWx1ZUNvbnRleHQpO1xuXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSB1c2VTdGFibGVDYWxsYmFjaygodjogdW5rbm93bikgPT4ge1xuICAgICAgICB0b2dnbGVFZGl0KGZhbHNlKTtcbiAgICAgICAgb25DaGFuZ2Uodik7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2dnbGVFZGl0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFZhbHVlRWRpdG9yOiB0b2dnbGVFZGl0YCwgeyB2aXNpYmxlIH0pO1xuICAgICAgICBjb25zdCBuZXdTaG93RWRpdCA9IHZpc2libGU7XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHJ1blZhbHVlQ29udGV4dC5Db21wb25lbnRzLnZhbHVlO1xuICAgICAgICBpZiAobmV3U2hvd0VkaXQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHNbaWRdID0gKCkgPT4gKFxuICAgICAgICAgICAgICAgIDxWYWx1ZUVkaXRNb2RhbFxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdG9nZ2xlRWRpdChmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgY29tcG9uZW50c1tpZF07XG4gICAgICAgIH1cbiAgICAgICAgcnVuVmFsdWVDb250ZXh0LkNvbXBvbmVudHMubmV4dChjb21wb25lbnRzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3NJbj17KCkgPT4gdG9nZ2xlRWRpdCh0cnVlKX0+XG4gICAgICAgICAgICAgICAgPFZhbHVlVmlld2VyIHZhbHVlPXt2YWx1ZX0gbW9kZT17aGFzT3ZlcnJpZGUgPyBgb3ZlcnJpZGVgIDogdW5kZWZpbmVkfSAvPlxuICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgdHlwZSBWYWx1ZVZpZXdlck1vZGUgPSB1bmRlZmluZWQgfCBgb3ZlcnJpZGVgIHwgYGlucHV0YCB8IGBvdXRwdXRgIHwgYGlubmVyYDtcbmV4cG9ydCBjb25zdCBWYWx1ZVZpZXdlciA9ICh7IHZhbHVlLCBtb2RlIH06IHsgdmFsdWU6IHVua25vd247IG1vZGU/OiBWYWx1ZVZpZXdlck1vZGUgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG0tWzFweF0gJHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gYG92ZXJyaWRlYFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgYmctZ3JlZW4tMTAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtb2RlID09PSBgaW5wdXRgXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBiZy1ncmVlbi0xMDBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG1vZGUgPT09IGBvdXRwdXRgXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBiZy1ncmVlbi0xMDBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBiZy1ncmF5LTEwMGBcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0xIG1pbi13LVs2MHB4XSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gYG92ZXJyaWRlYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYHRleHQtZ3JlZW4tNjAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gYGlucHV0YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYHRleHQtZ3JlZW4tNjAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gYG91dHB1dGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGB0ZXh0LWdyZWVuLTYwMGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGB0ZXh0LWdyYXktNjAwYFxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgVmFsdWVFZGl0TW9kYWwgPSAoe1xuICAgIGlkLFxuICAgIHZhbHVlOiB2YWx1ZVJhdyxcbiAgICBvbkNoYW5nZSxcbiAgICBvbkNhbmNlbCxcbn06IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHZhbHVlOiB1bmtub3duO1xuICAgIG9uQ2hhbmdlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XG4gICAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG59KSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShKU09OLnN0cmluZ2lmeSh2YWx1ZVJhdykpO1xuICAgIGNvbnN0IHNhdmUgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICB9KTtcbiAgICBjb25zdCBjbGVhciA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgICBjb25zdCBjYW5jZWwgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIG9uQ2FuY2VsKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIGZsZXgtY29sIGJnLWdyYXktMTAwIHAtMiByb3VuZGVkIHotMTAnPlxuICAgICAgICAgICAgPFRleHRJbnB1dCBjbGFzc05hbWU9J2JnLXdoaXRlJyB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlVGV4dD17eCA9PiBzZXRWYWx1ZSh4KX0gLz5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9e2NhbmNlbH0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYmctZ3JheS0yMDAgcC0xIG0tMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5DYW5jZWw8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cblxuICAgICAgICAgICAgICAgIDxQcmVzc2FibGUgb25QcmVzcz17Y2xlYXJ9PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLXJlZC0yMDAgcC0xIG0tMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5DbGVhcjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuXG4gICAgICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzPXtzYXZlfT5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy1ibHVlLTIwMCBwLTEgbS0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlNhdmU8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuIiwgImltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBQaXBlc2NyaXB0VHlwZSwgUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlTmFtZSA9ICh0eXBlOiBQaXBlc2NyaXB0VHlwZSkgPT4ge1xuICAgIGlmICh0eXBlLmtpbmQgPT09IGBzaW1wbGVgKSB7XG4gICAgICAgIHJldHVybiB0eXBlLnR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHR5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IFdvcmtmbG93SW5wdXROYW1lID0gKHsgaW5wdXQgfTogeyBpbnB1dDogUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJsdWUtMzAwICR7aW5wdXQuaWdub3JlZCA/IGBsaW5lLXRocm91Z2ggb3BhY2l0eS01MGAgOiBgYH1gfVxuICAgICAgICA+e2Ake2lucHV0Lm5hbWV9YH08L1RleHQ+XG4gICAgKTtcbn07XG4iLCAiZXhwb3J0IGNvbnN0IGpzb25TdHJpbmdpZnlfc2FmZSA9IChvYmpSYXc6IHVua25vd24sIHNob3VsZEZvcm1hdD86IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xuICAgIGxldCBuZXh0SWQgPSAxO1xuICAgIHR5cGUgUmVnaXN0cnkgPSBNYXA8dW5rbm93biwgeyBpZDogc3RyaW5nOyBtaW5EZXB0aDogbnVtYmVyOyB2aXNpdGVkPzogYm9vbGVhbiB9PjtcbiAgICBjb25zdCBkZWVwUmVnaXN0ZXIgPSAob2JqOiB1bmtub3duLCB2aXNpdGVkOiBSZWdpc3RyeSwgZGVwdGg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiAhPT0gYG9iamVjdGApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYmpSZWcgPSB2aXNpdGVkLmdldChvYmopO1xuICAgICAgICBpZiAob2JqUmVnKSB7XG4gICAgICAgICAgICBvYmpSZWcubWluRGVwdGggPSBNYXRoLm1pbihkZXB0aCwgb2JqUmVnLm1pbkRlcHRoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpc2l0ZWQuc2V0KG9iaiwgeyBpZDogYF9pZF8ke25leHRJZCsrfV9gLCBtaW5EZXB0aDogZGVwdGggfSk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgb2JqLmZvckVhY2goeCA9PiBkZWVwUmVnaXN0ZXIoeCwgdmlzaXRlZCwgZGVwdGggKyAxKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaCh4ID0+IGRlZXBSZWdpc3Rlcih4LCB2aXNpdGVkLCBkZXB0aCArIDEpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWVwQ2xvbmUgPSAob2JqOiB1bmtub3duLCB2aXNpdGVkOiBSZWdpc3RyeSwgZGVwdGg6IG51bWJlcik6IHVua25vd24gPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gYG9iamVjdGApIHtcbiAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgciA9IHZpc2l0ZWQuZ2V0KG9iaik7XG4gICAgICAgICAgICBpZiAoZGVwdGggPiAocj8ubWluRGVwdGggPz8gMCkgfHwgcj8udmlzaXRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIF9fX3JlZjogdmlzaXRlZC5nZXQob2JqKT8uaWQgPz8gYGAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICByLnZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iai5tYXAoeCA9PiBkZWVwQ2xvbmUoeCwgdmlzaXRlZCwgZGVwdGggKyAxKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW3Zpc2l0ZWQuZ2V0KG9iaik/LmlkID8/IGBgXTogYGAsXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLm1hcCgoW2ssIHZdKSA9PiBbaywgZGVlcENsb25lKHYsIHZpc2l0ZWQsIGRlcHRoICsgMSldKSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZ2lzdHJ5OiBSZWdpc3RyeSA9IG5ldyBNYXAoKTtcbiAgICBkZWVwUmVnaXN0ZXIob2JqUmF3LCByZWdpc3RyeSwgMCk7XG4gICAgY29uc3Qgb2JqID0gZGVlcENsb25lKG9ialJhdywgcmVnaXN0cnksIDApO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IFtdIGFzIHVua25vd25bXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCBzaG91bGRGb3JtYXQgPyAyIDogMCk7XG59O1xuIiwgImltcG9ydCB7IGpzb25TdHJpbmdpZnlfc2FmZSB9IGZyb20gJy4uL3V0aWxzL2pzb24nO1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTIxNzE0ODAvNTY3NTI0XG5jb25zdCBjeXJiNTMgPSAoc3RyOiBzdHJpbmcsIHNlZWQgPSAwKSA9PiB7XG4gICAgbGV0IGgxID0gMHhkZWFkYmVlZiBeIHNlZWQsXG4gICAgICAgIGgyID0gMHg0MWM2Y2U1NyBeIHNlZWQ7XG4gICAgZm9yIChsZXQgaSA9IDAsIGNoOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGgxID0gTWF0aC5pbXVsKGgxIF4gY2gsIDI2NTQ0MzU3NjEpO1xuICAgICAgICBoMiA9IE1hdGguaW11bChoMiBeIGNoLCAxNTk3MzM0Njc3KTtcbiAgICB9XG4gICAgaDEgPSBNYXRoLmltdWwoaDEgXiAoaDEgPj4+IDE2KSwgMjI0NjgyMjUwNyk7XG4gICAgaDEgXj0gTWF0aC5pbXVsKGgyIF4gKGgyID4+PiAxMyksIDMyNjY0ODk5MDkpO1xuICAgIGgyID0gTWF0aC5pbXVsKGgyIF4gKGgyID4+PiAxNiksIDIyNDY4MjI1MDcpO1xuICAgIGgyIF49IE1hdGguaW11bChoMSBeIChoMSA+Pj4gMTMpLCAzMjY2NDg5OTA5KTtcblxuICAgIHJldHVybiA0Mjk0OTY3Mjk2ICogKDIwOTcxNTEgJiBoMikgKyAoaDEgPj4+IDApO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhc2hDb2RlID0gKHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGpzb25TdHJpbmdpZnlfc2FmZSh2YWx1ZSk7XG4gICAgcmV0dXJuIGN5cmI1Myhqc29uKTtcbn07XG4iLCAiaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0QnVpbHRpbk9wZXJhdG9yLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIFBpcGVzY3JpcHRUeXBlLFxuICAgIFBpcGVzY3JpcHRWYXJpYWJsZSxcbiAgICBQaXBlc2NyaXB0V29ya2Zsb3csXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQsXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93T3V0cHV0LFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGluZGVudCA9ICh0ZXh0OiBzdHJpbmcsIGRlcHRoOiBudW1iZXIgPSAxKSA9PiB7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHJldHVybiBgYDtcbiAgICB9XG4gICAgcmV0dXJuIHRleHRcbiAgICAgICAgLnNwbGl0KGBcXG5gKVxuICAgICAgICAubWFwKHggPT4gYCR7Wy4uLm5ldyBBcnJheShkZXB0aCldLm1hcCh4ID0+IGAgICAgYCl9JHt4fVxcbmApXG4gICAgICAgIC5qb2luKGBgKTtcbn07XG5cbmNvbnN0IG9wZXJhdG9yRXhwcmVzc2lvbnMgPSBbXG4gICAgLy8gYXNzaWdubWVudFxuICAgIC4uLihbYGRlY2xhcmF0aW9uYCwgYD1gXSBhcyBjb25zdCkubWFwKG9wZXJhdG9yID0+ICh7XG4gICAgICAgIG9wZXJhdG9yLFxuICAgICAgICB0ZW1wbGF0ZTogKGFyZ05hbWVzOiBzdHJpbmdbXSkgPT4gYCR7YXJnTmFtZXNbMF19YCxcbiAgICB9KSksXG4gICAgLy8gcHJlZml4IHVuYXJ5XG4gICAgLi4uKFtgIWBdIGFzIGNvbnN0KS5tYXAob3BlcmF0b3IgPT4gKHtcbiAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgIHRlbXBsYXRlOiAoYXJnTmFtZXM6IHN0cmluZ1tdKSA9PiBgJHtvcGVyYXRvcn0ke2FyZ05hbWVzWzBdfWAsXG4gICAgfSkpLFxuICAgIC8vIHBvc3RmaXggdW5hcnlcbiAgICAuLi4oW2ArK2AsIGAtLWBdIGFzIGNvbnN0KS5tYXAob3BlcmF0b3IgPT4gKHtcbiAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgIHRlbXBsYXRlOiAoYXJnTmFtZXM6IHN0cmluZ1tdKSA9PiBgJHthcmdOYW1lc1swXX0ke29wZXJhdG9yfWAsXG4gICAgfSkpLFxuICAgIC8vIGJpbmFyeVxuICAgIC4uLihbYCtgLCBgLWAsIGAqYCwgYC9gLCBgJWAsIGAmJmAsIGB8fGAsIGA9PWAsIGAhPWAsIGA8YCwgYD5gLCBgPD1gLCBgPj1gXSBhcyBjb25zdCkubWFwKFxuICAgICAgICBvcGVyYXRvciA9PiAoe1xuICAgICAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogKGFyZ05hbWVzOiBzdHJpbmdbXSkgPT4gYCR7YXJnTmFtZXNbMF19ICR7b3BlcmF0b3J9ICR7YXJnTmFtZXNbMV19YCxcbiAgICAgICAgfSksXG4gICAgKSxcbiAgICAvLyBjdXN0b21cbiAgICAuLi4oW2Bjb25kaXRpb25hbC10ZXJuYXJ5YF0gYXMgY29uc3QpLm1hcChvcGVyYXRvciA9PiAoe1xuICAgICAgICBvcGVyYXRvcixcbiAgICAgICAgdGVtcGxhdGU6IChhcmdOYW1lczogc3RyaW5nW10pID0+IGAke2FyZ05hbWVzWzBdfSA/ICR7YXJnTmFtZXNbMV19IDogJHthcmdOYW1lc1syXX1gLFxuICAgIH0pKSxcbl0gc2F0aXNmaWVzIHtcbiAgICBvcGVyYXRvcjogUGlwZXNjcmlwdEJ1aWx0aW5PcGVyYXRvcjtcbiAgICB0ZW1wbGF0ZTogKGFyZ05hbWVzOiBzdHJpbmdbXSkgPT4gc3RyaW5nO1xufVtdO1xuXG50eXBlIEJ1aWxkZXIgPSB7XG4gICAgZGVjbGFyZWRXb3JrZmxvd3M6IHtcbiAgICAgICAgd29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdztcbiAgICAgICAgZ2V0Q2FsbEV4cHJlc3Npb246IChhcmdzOiBzdHJpbmdbXSkgPT4gc3RyaW5nO1xuICAgIH1bXTtcbn07XG5cbi8qKiBDb252ZXJ0IHdvcmtmbG93IHRvIHR5cGVzY3JpcHQgZmlsZSB3aXRoIGV4cG9ydHNcbiAqXG4gKiAtIG5lc3RlZCB3b3JrZmxvd3MgYXJlIGZ1bmN0aW9uc1xuICogLSBvdXRwdXRzIGFyZSBleHBvcnRzXG4gKiAtIHJvb3ROb2RlcyBhcmUgZmxhdCBjb2RlXG4gKlxuICovXG5leHBvcnQgY29uc3QgY29udmVydFdvcmtmbG93VG9UeXBlc2NyaXB0RmlsZSA9IChcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93LFxuICAgIGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIGJ1aWxkZXI6IEJ1aWxkZXIgPSB7XG4gICAgICAgIGRlY2xhcmVkV29ya2Zsb3dzOiBbXSxcbiAgICB9LFxuKSA9PiB7XG4gICAgY29uc3QgbmVzdGVkRnVuY3Rpb25EZWNsYXJhdGlvbnMgPVxuICAgICAgICB3b3JrZmxvdy53b3JrZmxvd3NcbiAgICAgICAgICAgID8ubWFwKHcgPT4gY29udmVydFdvcmtmbG93VG9GdW5jdGlvbkRlY2xhcmF0aW9uKHcsIGRhdGFzZXQsIGJ1aWxkZXIpKVxuICAgICAgICAgICAgLmZpbHRlcih4ID0+IHgpXG4gICAgICAgICAgICAubWFwKHggPT4geCEpID8/IFtdO1xuXG4gICAgY29uc3QgY29udGVudCA9IGAke25lc3RlZEZ1bmN0aW9uRGVjbGFyYXRpb25zLm1hcCh4ID0+IHguY29udGVudCkuam9pbihgXFxuXFxuYCl9YDtcblxuICAgIC8vIGNvbnN0IHsgY29udGVudCB9ID0gY29udmVydE5vZGVzVG9GaWxlKHJvb3ROb2RlSW5zdGFuY2VzLCB3b3JrZmxvdywgYnVpbGRlcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250ZW50LFxuICAgIH07XG59O1xuXG5jb25zdCBTSU1QTElGWV9TSU5HTEVfUkVUVVJOID0gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZV9nZXRDYWxsRXhwcmVzc2lvbiA9ICh3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93KSA9PiB7XG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gZ2V0RnVuY3Rpb25OYW1lKHdvcmtmbG93KTtcblxuICAgIGlmICh3b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmApIHtcbiAgICAgICAgY29uc3QgeyBvcGVyYXRvciB9ID0gd29ya2Zsb3cuYm9keTtcbiAgICAgICAgY29uc3QgZnVuID0gb3BlcmF0b3JFeHByZXNzaW9ucy5maW5kKGYgPT4gZi5vcGVyYXRvciA9PT0gb3BlcmF0b3IpO1xuICAgICAgICBpZiAoIWZ1bikge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IGAvKiBtaXNzaW5nIG9wZXJhdG9yICR7b3BlcmF0b3J9Ki9gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW4udGVtcGxhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIChhcmdzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7ZnVuY3Rpb25OYW1lfSgke2FyZ3Muam9pbihgLCBgKX0pYDtcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRXb3JrZmxvd1RvRnVuY3Rpb25EZWNsYXJhdGlvbiA9IChcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93LFxuICAgIGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIGJ1aWxkZXI6IEJ1aWxkZXIgPSB7XG4gICAgICAgIGRlY2xhcmVkV29ya2Zsb3dzOiBbXSxcbiAgICB9LFxuKTogdW5kZWZpbmVkIHwgeyBjb250ZW50OiBzdHJpbmcgfSA9PiB7XG4gICAgaWYgKGJ1aWxkZXIuZGVjbGFyZWRXb3JrZmxvd3MuZmluZCh4ID0+IHgud29ya2Zsb3cgPT09IHdvcmtmbG93KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVjbGFyYXRpb246IEJ1aWxkZXJbYGRlY2xhcmVkV29ya2Zsb3dzYF1bbnVtYmVyXSA9IHtcbiAgICAgICAgd29ya2Zsb3csXG4gICAgICAgIGdldENhbGxFeHByZXNzaW9uOiBjcmVhdGVfZ2V0Q2FsbEV4cHJlc3Npb24od29ya2Zsb3cpLFxuICAgIH07XG4gICAgYnVpbGRlci5kZWNsYXJlZFdvcmtmbG93cy5wdXNoKGRlY2xhcmF0aW9uKTtcblxuICAgIGlmICh3b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5lc3RlZEZ1bmN0aW9uRGVjbGFyYXRpb25zID1cbiAgICAgICAgd29ya2Zsb3cud29ya2Zsb3dzXG4gICAgICAgICAgICA/Lm1hcCh3ID0+IGNvbnZlcnRXb3JrZmxvd1RvRnVuY3Rpb25EZWNsYXJhdGlvbih3LCBkYXRhc2V0LCBidWlsZGVyKSlcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgICAgICAgLm1hcCh4ID0+IHghKSA/PyBbXTtcblxuICAgIGNvbnN0IHN0YXRlbWVudHMgPSB3b3JrZmxvdy5ib2R5Lm5vZGVzLm1hcChub2RlID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZUluc3RhbmNlID0gZGF0YXNldC5hbGxOb2RlSW5zdGFuY2VzLmZpbmQoeCA9PiB4Lm5vZGUgPT09IG5vZGUpO1xuICAgICAgICBjb25zdCB3b3JrZmxvdyA9IG5vZGVJbnN0YW5jZT8ud29ya2Zsb3c7XG4gICAgICAgIGlmICghd29ya2Zsb3cpIHtcbiAgICAgICAgICAgIHJldHVybiBgLyogbWlzc2luZyB3b3JrZmxvdyAke25vZGUud29ya2Zsb3dVcml9ICovYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmdW4gPSBidWlsZGVyLmRlY2xhcmVkV29ya2Zsb3dzLmZpbmQoeCA9PiB4LndvcmtmbG93ID09PSB3b3JrZmxvdyk7XG4gICAgICAgIGlmICghZnVuKSB7XG4gICAgICAgICAgICByZXR1cm4gYC8qIG1pc3Npbmcgd29ya2Zsb3cgZnVuY3Rpb24gJHtub2RlLndvcmtmbG93VXJpfSAqL2A7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXJncyA9IG5vZGVJbnN0YW5jZS5pbnB1dHMubWFwKHggPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0geC5pbmZsb3dQaXBlPy5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgdW5kZWZpbmVkIC8qIGRpc2Nvbm5lY3RlZCAqL2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc291cmNlLmtpbmQgPT09IGBkYXRhYCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UuanNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzb3VyY2Uua2luZCA9PT0gYGlucHV0YCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UuaW5wdXQucnVucz8ubmFtZUluU2NvcGUgPz8gc291cmNlLmlucHV0Lm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc291cmNlLmtpbmQgPT09IGBvdXRwdXRgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5vdXRwdXQucnVucz8ubmFtZUluU2NvcGUgPz8gc291cmNlLm91dHB1dC5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvdXJjZS5raW5kID09PSBgb3BlcmF0b3Itb3V0cHV0YCkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZVxuICAgICAgICAgICAgICAgIHJldHVybiBgdW5kZWZpbmVkIC8qIGFuIG9wZXJhdG9yIGNhbm5vdCBhbiBhcmd1bWVudCBvZiB0aGUgc2FtZSBub2RlICovYDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGB1bmRlZmluZWQgLyogdW5rbm93biBzb3VyY2Uua2luZCAkeyhzb3VyY2UgYXMgeyBraW5kOiBzdHJpbmcgfSkua2luZH0gKi9gO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZnVuQ2FsbCA9IGZ1bi5nZXRDYWxsRXhwcmVzc2lvbihhcmdzKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0c0l0ZW1zID0gbm9kZUluc3RhbmNlLm91dHB1dHMubWFwKHggPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHgucnVucz8ubmFtZUluU2NvcGUgPz8geC5uYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb3V0cHV0c0V4cHJlc3Npb24gPVxuICAgICAgICAgICAgU0lNUExJRllfU0lOR0xFX1JFVFVSTiAmJiBvdXRwdXRzSXRlbXMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAgICAgPyBgJHtvdXRwdXRzSXRlbXNbMF19YFxuICAgICAgICAgICAgICAgIDogb3V0cHV0c0l0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gYHsgJHtvdXRwdXRzSXRlbXMuam9pbihgLCBgKX0gfWBcbiAgICAgICAgICAgICAgICA6IGAvKiBtaXNzaW5nIG91dHB1dCBpdGVtICovIF91bmtub3duYDtcbiAgICAgICAgcmV0dXJuIGBjb25zdCAke291dHB1dHNFeHByZXNzaW9ufSA9ICR7ZnVuQ2FsbH07YDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdvcmtmbG93Tm9kZUluc3RhbmNlID0gZGF0YXNldC5hbGxOb2RlSW5zdGFuY2VzLmZpbmQoXG4gICAgICAgIHggPT4geC5ub2RlLndvcmtmbG93VXJpID09PSB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICApO1xuICAgIGNvbnN0IGdldE5hbWVfd29ya2Zsb3dJbnB1dCA9ICh3b3JrZmxvd0lucHV0OiBQaXBlc2NyaXB0V29ya2Zsb3dJbnB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gd29ya2Zsb3dOb2RlSW5zdGFuY2U/LmlucHV0cy5maW5kKHggPT4geC53b3JrZmxvd0lucHV0ID09PSB3b3JrZmxvd0lucHV0KT8ucnVuc1xuICAgICAgICAgICAgPy5uYW1lSW5TY29wZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldE5hbWVfd29ya2Zsb3dPdXRwdXQgPSAod29ya2Zsb3dPdXRwdXQ6IFBpcGVzY3JpcHRXb3JrZmxvd091dHB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gd29ya2Zsb3dOb2RlSW5zdGFuY2U/Lm91dHB1dHMuZmluZCh4ID0+IHgud29ya2Zsb3dPdXRwdXQgPT09IHdvcmtmbG93T3V0cHV0KT8ucnVuc1xuICAgICAgICAgICAgPy5uYW1lSW5TY29wZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50ID0gKCgpID0+IHtcbiAgICAgICAgaWYgKCF3b3JrZmxvdy5vdXRwdXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldHVybkl0ZW1zID0gd29ya2Zsb3cub3V0cHV0cy5tYXAoeCA9PiAoe1xuICAgICAgICAgICAgbmFtZTogYCR7Z2V0TmFtZV93b3JrZmxvd091dHB1dCh4KSA/PyB4Lm5hbWV9YCxcbiAgICAgICAgICAgIHJlbmFtZTogYCR7Z2V0TmFtZV93b3JrZmxvd091dHB1dCh4KSA/PyB4Lm5hbWV9YCxcbiAgICAgICAgICAgIC8vIHJlbmFtZTogYCR7eC5uYW1lfWAsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoU0lNUExJRllfU0lOR0xFX1JFVFVSTiAmJiB3b3JrZmxvdy5vdXRwdXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGByZXR1cm4gJHtyZXR1cm5JdGVtc1swXS5uYW1lfTtgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGByZXR1cm4geyAke3JldHVybkl0ZW1zXG4gICAgICAgICAgICAubWFwKHggPT4gKHgubmFtZSA9PT0geC5yZW5hbWUgPyBgJHt4Lm5hbWV9YCA6IGAke3gucmVuYW1lfTogJHt4Lm5hbWV9YCkpXG4gICAgICAgICAgICAuam9pbihgLCBgKX0gfTtgO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gd29ya2Zsb3cuaW5wdXRzLm1hcCh3b3JrZmxvd0lucHV0ID0+XG4gICAgICAgIGdlbmVyYXRlRGVjbGFyYXRpb24od29ya2Zsb3dJbnB1dCwgZ2V0TmFtZV93b3JrZmxvd0lucHV0KHdvcmtmbG93SW5wdXQpKSxcbiAgICApO1xuICAgIGNvbnN0IHBhcmFtZXRlcnNDb2RlID1cbiAgICAgICAgcGFyYW1ldGVycy5qb2luKGAsIGApLmxlbmd0aCA+IDQwXG4gICAgICAgICAgICA/IGBcXG4ke2luZGVudChgJHtwYXJhbWV0ZXJzLmpvaW4oYCxcXG5gKX0sYCl9XFxuYFxuICAgICAgICAgICAgOiBwYXJhbWV0ZXJzLmpvaW4oYCwgYCk7XG5cbiAgICBjb25zdCBmdW5jdGlvbk5hbWUgPSBnZXRGdW5jdGlvbk5hbWUod29ya2Zsb3cpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgZnVuY3Rpb24gJHtmdW5jdGlvbk5hbWV9KCR7cGFyYW1ldGVyc0NvZGV9KSB7XG4ke2luZGVudChuZXN0ZWRGdW5jdGlvbkRlY2xhcmF0aW9ucy5tYXAoeCA9PiB4LmNvbnRlbnQpLmpvaW4oYFxcblxcbmApKX0ke2luZGVudChcbiAgICAgICAgWy4uLnN0YXRlbWVudHMsIHJldHVyblN0YXRlbWVudF0uZmlsdGVyKHggPT4geCkuam9pbihgXFxuYCksXG4gICAgKX19YDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRlbnQsXG4gICAgfTtcbn07XG5cbmNvbnN0IGdldEZ1bmN0aW9uTmFtZSA9ICh3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93KSA9PiB7XG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gd29ya2Zsb3cud29ya2Zsb3dVcmkucmVwbGFjZSgvW15BLVphLXowLTldKy9nLCBgX2ApO1xuICAgIHJldHVybiBmdW5jdGlvbk5hbWU7XG59O1xuXG5jb25zdCBnZW5lcmF0ZURlY2xhcmF0aW9uID0gKHg6IFBpcGVzY3JpcHRWYXJpYWJsZSwgbmFtZUluU2NvcGU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBgJHtuYW1lSW5TY29wZSA/PyB4Lm5hbWV9JHt4LnR5cGUubnVsbGFibGUgPyBgP2AgOiBgYH06ICR7Z2VuZXJhdGVUeXBlKHgudHlwZSl9JHtcbiAgICAgICAgeC50eXBlLmFycmF5ID8gYFtdYCA6IGBgXG4gICAgfWA7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVR5cGUgPSAodHlwZTogUGlwZXNjcmlwdFR5cGUpOiBzdHJpbmcgPT4ge1xuICAgIGlmICh0eXBlLmtpbmQgPT09IGBsaXRlcmFsYCkge1xuICAgICAgICBpZiAodHlwZS50eXBlID09PSBgc3RyaW5nYCkge1xuICAgICAgICAgICAgcmV0dXJuIGBcXGAke3R5cGUudmFsdWV9XFxgYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dHlwZS52YWx1ZX1gO1xuICAgIH1cblxuICAgIGlmICh0eXBlLmtpbmQgPT09IGBzaW1wbGVgKSB7XG4gICAgICAgIGlmICh0eXBlLnR5cGUgPT09IGBpbnRgIHx8IHR5cGUudHlwZSA9PT0gYGZsb2F0YCkge1xuICAgICAgICAgICAgcmV0dXJuIGBudW1iZXJgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt0eXBlLnR5cGV9YDtcbiAgICB9XG5cbiAgICBpZiAodHlwZS5raW5kID09PSBgb2JqZWN0YCkge1xuICAgICAgICByZXR1cm4gYHske3R5cGUuZmllbGRzLm1hcCh4ID0+IGdlbmVyYXRlRGVjbGFyYXRpb24oeCkpLmpvaW4oYCxcXG5gKX19YDtcbiAgICB9XG5cbiAgICBpZiAodHlwZS5raW5kID09PSBgdHlwZWApIHtcbiAgICAgICAgcmV0dXJuIHR5cGUubmFtZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZS5raW5kID09PSBgbm9kZWApIHtcbiAgICAgICAgcmV0dXJuIGAvKiBUT0RPOiBmdW5jdGlvbiBjYWxsYmFja3MgKi8gZnVuXyR7dHlwZS5ub2RlLm5vZGVJZH1gO1xuICAgIH1cblxuICAgIHJldHVybiBgdW5rbm93bmA7XG59O1xuIiwgImltcG9ydCB7IGhhc2hDb2RlIH0gZnJvbSAnLi9oYXNoJztcbmltcG9ydCB7XG4gICAgY29udmVydFdvcmtmbG93VG9GdW5jdGlvbkRlY2xhcmF0aW9uLFxuICAgIGNyZWF0ZV9nZXRDYWxsRXhwcmVzc2lvbixcbn0gZnJvbSAnLi4vY29kZS1nZW5lcmF0aW9uL2ZpbGUnO1xuaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0QnVpbHRpbk9wZXJhdG9yLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQsXG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5wdXRJbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2UsXG59IGZyb20gJy4uL3R5cGVzJztcblxuLy8gVE9ETzogaGFuZGxlIGN5Y2xlc1xuXG50eXBlIFJ1bkNvbnRleHQgPSB7XG4gICAgdmlzaXRlZDogU2V0PE9taXQ8UGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLCBgb3V0Zmxvd1BpcGVzYD4+O1xuICAgIGxhenk6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUnVuID0gKFxuICAgIGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIGNvbnRleHQ6IFJ1bkNvbnRleHQgPSB7IHZpc2l0ZWQ6IG5ldyBTZXQoKSwgbGF6eTogZmFsc2UgfSxcbikgPT4ge1xuICAgIGRhdGFzZXQucm9vdE5vZGVJbnN0YW5jZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgY2FsY3VsYXRlUnVuVmFsdWVfbm9kZU91dHB1dChub2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNhbGN1bGF0ZVJ1bl9uYW1lcyhkYXRhc2V0KTtcbiAgICByZWNvcmRSdW4oZGF0YXNldCk7XG59O1xuY29uc3QgcmVjb3JkUnVuID0gKGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0KSA9PiB7XG4gICAgZGF0YXNldC5hbGxOb2RlSW5zdGFuY2VzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1blZhbHVlID0ge1xuICAgICAgICAgICAgaW5wdXRzOiBub2RlLmlucHV0cy5tYXAoeCA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHgucnVucz8ubmFtZUluU2NvcGUgPz8geC5uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB4LnJ1bnM/LnZhbHVlLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgaW5uZXI6IG5vZGUuY2hpbGRyZW4uZmxhdE1hcChjID0+XG4gICAgICAgICAgICAgICAgYy5vdXRwdXRzLm1hcCh4ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHgucnVucz8ubmFtZUluU2NvcGUgPz8geC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeC5ydW5zPy52YWx1ZSxcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgb3V0cHV0czogbm9kZS5vdXRwdXRzLm1hcCh4ID0+ICh7XG4gICAgICAgICAgICAgICAgbmFtZTogeC5ydW5zPy5uYW1lSW5TY29wZSA/PyB4Lm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHgucnVucz8udmFsdWUsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGtleSA9IGAke2hhc2hDb2RlKHJ1blZhbHVlKX1gO1xuICAgICAgICBub2RlLnJ1bnMgPSBub2RlLnJ1bnMgPz8gW107XG4gICAgICAgIGlmIChub2RlLnJ1bnMuc29tZSh4ID0+IHgua2V5ID09PSBrZXkpKSB7XG4gICAgICAgICAgICAvLyBkZWxldGUgb2xkIHRvIG1vdmUgbGFzdCB0byB0aGUgdG9wXG4gICAgICAgICAgICBub2RlLnJ1bnMuc3BsaWNlKFxuICAgICAgICAgICAgICAgIG5vZGUucnVucy5maW5kSW5kZXgoeCA9PiB4LmtleSA9PT0ga2V5KSxcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGRvbid0IGFkZCBuZXdcbiAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvZGUgPVxuICAgICAgICAgICAgbm9kZS53b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmBcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBgJHtjcmVhdGVfZ2V0Q2FsbEV4cHJlc3Npb24obm9kZS53b3JrZmxvdykoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUud29ya2Zsb3cuaW5wdXRzLm1hcCh3b3JrZmxvd0lucHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVJbnB1dCA9IG5vZGUuaW5wdXRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4LndvcmtmbG93SW5wdXQgPT09IHdvcmtmbG93SW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVJhdyA9IG5vZGVJbnB1dD8ucnVucz8udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlUmF3ICE9PSBgb2JqZWN0YCA/IGAke3ZhbHVlUmF3fWAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBub2RlSW5wdXQ/LnJ1bnM/Lm5hbWVJblNjb3BlID8/IHdvcmtmbG93SW5wdXQubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IGAke25hbWV9KCR7dmFsdWV9KWAgOiBuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICApfWAsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBjb252ZXJ0V29ya2Zsb3dUb0Z1bmN0aW9uRGVjbGFyYXRpb24obm9kZS53b3JrZmxvdywgbm9kZS5kYXRhc2V0KTtcbiAgICAgICAgbm9kZS5ydW5zLnVuc2hpZnQoe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgY29kZTogY29kZT8uY29udGVudCxcbiAgICAgICAgICAgIC4uLnJ1blZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVSdW5WYWx1ZV9ub2RlT3V0cHV0ID0gKG5vZGU6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsIGNvbnRleHQ6IFJ1bkNvbnRleHQpID0+IHtcbiAgICAvLyBhbGwgb3V0cHV0cyBtdXN0IGJlIGV2YWx1YXRlZCAoYnV0IG1heSByZXR1cm4gdW5kZWZpbmVkKVxuICAgIG5vZGUub3V0cHV0cy5mb3JFYWNoKG91dHB1dCA9PiB7XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KG91dHB1dCwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWNvbnRleHQubGF6eSkge1xuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9ub2RlT3V0cHV0KHgsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5pbnB1dHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KHgsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlID0gKFxuICAgIGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSxcbiAgICB2YWx1ZTogdW5rbm93bixcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0ID0geyB2aXNpdGVkOiBuZXcgU2V0KCksIGxhenk6IGZhbHNlIH0sXG4pID0+IHtcbiAgICBpZiAoIWNvbm5lY3Rpb24ucnVucykge1xuICAgICAgICBjb25uZWN0aW9uLnJ1bnMgPSBjcmVhdGVSdW4oY29ubmVjdGlvbiwgY29udGV4dCk7XG4gICAgfVxuICAgIGNvbnN0IHsgcnVucyB9ID0gY29ubmVjdGlvbjtcbiAgICBydW5zLm92ZXJyaWRlID0gdmFsdWU7XG5cbiAgICBjb25zb2xlLmxvZyhgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlYCwgeyBjb25uZWN0aW9uIH0pO1xuXG4gICAgY29uc3QgYWxsQ29ubmVjdGlvbnMgPSBjb25uZWN0aW9uLm5vZGVJbnN0YW5jZS5kYXRhc2V0LmFsbE5vZGVJbnN0YW5jZXMuZmxhdE1hcCh4ID0+IFtcbiAgICAgICAgLi4ueC5pbnB1dHMsXG4gICAgICAgIC4uLngub3V0cHV0cyxcbiAgICBdKTtcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0PFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZT4oKTtcbiAgICBjb25zdCB1cGRhdGVEZXBlbmRlbnRzID0gKGM6IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSkgPT4ge1xuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9pbnB1dChjLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBkZXBlbmRlbnRzID0gYWxsQ29ubmVjdGlvbnMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiAhdmlzaXRlZC5oYXMoeCkgJiYgeC5ydW5zPy5kZXBlbmRlbmNpZXMuaW5jbHVkZXMoYyksXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB1cGRhdGVEZXBlbmRlbnRzYCwgeyBjLCBkZXBlbmRlbnRzIH0pO1xuICAgICAgICBkZXBlbmRlbnRzLmZvckVhY2goZCA9PiB2aXNpdGVkLmFkZChkKSk7XG4gICAgICAgIGRlcGVuZGVudHMuZm9yRWFjaChkID0+IHVwZGF0ZURlcGVuZGVudHMoZCkpO1xuICAgIH07XG5cbiAgICB1cGRhdGVEZXBlbmRlbnRzKGNvbm5lY3Rpb24pO1xuICAgIGNhbGN1bGF0ZVJ1bl9uYW1lcyhjb25uZWN0aW9uLm5vZGVJbnN0YW5jZS5kYXRhc2V0KTtcbiAgICByZWNvcmRSdW4oY29ubmVjdGlvbi5ub2RlSW5zdGFuY2UuZGF0YXNldCk7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVSdW5fbmFtZXMgPSAoZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQpID0+IHtcbiAgICBjb25zdCBjb250ZXh0cyA9IG5ldyBNYXA8UGlwZXNjcmlwdE5vZGVJbnN0YW5jZSwgUnVuQ29udGV4dD4oKTtcblxuICAgIGNvbnN0IGdsb2JhbCA9IHsgb3V0cHV0czogW10gfSBhcyB1bmtub3duIGFzIFBpcGVzY3JpcHROb2RlSW5zdGFuY2U7XG5cbiAgICBjb25zdCBhbGxOb2Rlc1NvcnRlZCA9IFtdIGFzIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VbXTtcblxuICAgIGNvbnN0IGFkZE5vZGVSZWN1cnNpdmUgPSAocGFyZW50OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlKSA9PiB7XG4gICAgICAgIGlmIChhbGxOb2Rlc1NvcnRlZC5pbmNsdWRlcyhwYXJlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhbGxOb2Rlc1NvcnRlZC5wdXNoKHBhcmVudCk7XG4gICAgICAgIFsuLi5wYXJlbnQuY2hpbGRyZW5dLnJldmVyc2UoKS5mb3JFYWNoKHggPT4gYWRkTm9kZVJlY3Vyc2l2ZSh4KSk7XG4gICAgICAgIHBhcmVudC5pbnB1dHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGlmICh4LmluZmxvd1BpcGU/LnNvdXJjZS5raW5kID09PSBgaW5wdXRgKSB7XG4gICAgICAgICAgICAgICAgYWRkTm9kZVJlY3Vyc2l2ZSh4LmluZmxvd1BpcGUuc291cmNlLmlucHV0Lm5vZGVJbnN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZGF0YXNldC5yb290Tm9kZUluc3RhbmNlcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBhZGROb2RlUmVjdXJzaXZlKHgpO1xuICAgIH0pO1xuICAgIGRhdGFzZXQuYWxsTm9kZUluc3RhbmNlcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBhZGROb2RlUmVjdXJzaXZlKHgpO1xuICAgIH0pO1xuXG4gICAgYWxsTm9kZXNTb3J0ZWQuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0geC5wYXJlbnQgPz8gZ2xvYmFsO1xuICAgICAgICBjb25zdCBjb250ZXh0ID1cbiAgICAgICAgICAgIGNvbnRleHRzLmdldChwYXJlbnQpXG4gICAgICAgICAgICA/PyBjb250ZXh0c1xuICAgICAgICAgICAgICAgIC5zZXQocGFyZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2l0ZWQ6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgICAgICAgICAgbGF6eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZ2V0KHBhcmVudCkhO1xuICAgICAgICB4Lm91dHB1dHMuZm9yRWFjaChvID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQudmlzaXRlZC5hZGQobyk7XG5cbiAgICAgICAgICAgIGlmICghby5ydW5zKSB7XG4gICAgICAgICAgICAgICAgby5ydW5zID0gY3JlYXRlUnVuKG8sIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby5ydW5zLm5hbWVJblNjb3BlID0gZ2V0VW5pcXVlTmFtZShvLCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBnZXRVbmlxdWVOYW1lID0gKFxuICAgIGNvbm5lY3Rpb246IE9taXQ8UGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLCBgb3V0Zmxvd1BpcGVzYD4sXG4gICAgY29udGV4dDogUnVuQ29udGV4dCxcbikgPT4ge1xuICAgIGxldCBuID0gY29ubmVjdGlvbi5uYW1lO1xuXG4gICAgd2hpbGUgKFsuLi5jb250ZXh0LnZpc2l0ZWRdLnNvbWUoeCA9PiB4ICE9PSBjb25uZWN0aW9uICYmIHgubmFtZSA9PT0gbikpIHtcbiAgICAgICAgbiA9IGAke259XyR7Y29ubmVjdGlvbi5ub2RlSW5zdGFuY2Uua2V5fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG47XG59O1xuXG5jb25zdCBjcmVhdGVSdW4gPSAoXG4gICAgY29ubmVjdGlvbjogT21pdDxQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2UsIGBvdXRmbG93UGlwZXNgPixcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0LFxuKTogUmVxdWlyZWQ8UGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlPltgcnVuc2BdID0+IHtcbiAgICAvLyBjb25zdCBuYW1lSW5TY29wZSA9IGdldFVuaXF1ZU5hbWUoY29ubmVjdGlvbiwgY29udGV4dCk7XG4gICAgY29uc3QgbmFtZUluU2NvcGUgPSBjb25uZWN0aW9uLm5hbWU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZUluU2NvcGUsXG4gICAgICAgIG92ZXJyaWRlOiB1bmRlZmluZWQsXG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgfTtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0ID0gKFxuICAgIGlucHV0OiBPbWl0PFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSwgYG91dGZsb3dQaXBlc2A+LFxuICAgIGNvbnRleHQ6IFJ1bkNvbnRleHQsXG4pID0+IHtcbiAgICBpZiAoY29udGV4dC52aXNpdGVkLmhhcyhpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJ1bnM7XG4gICAgfVxuICAgIGNvbnRleHQudmlzaXRlZC5hZGQoaW5wdXQpO1xuICAgIGlmIChpbnB1dC5ydW5zPy5vdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlucHV0LnJ1bnMudmFsdWUgPSBpbnB1dC5ydW5zLm92ZXJyaWRlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5wdXQucnVucyA9IGNyZWF0ZVJ1bihpbnB1dCwgY29udGV4dCk7XG5cbiAgICBjb25zdCBpbmZsb3dQaXBlID0gaW5wdXQuaW5mbG93UGlwZTtcbiAgICBpZiAoIWluZmxvd1BpcGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHNvdXJjZSB9ID0gaW5mbG93UGlwZTtcbiAgICBpZiAoc291cmNlLmtpbmQgPT09IGBkYXRhYCkge1xuICAgICAgICBpbnB1dC5ydW5zID0ge1xuICAgICAgICAgICAgLi4uaW5wdXQucnVucyxcbiAgICAgICAgICAgIHZhbHVlOiBKU09OLnBhcnNlKHNvdXJjZS5qc29uKSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgaW5wdXRgKSB7XG4gICAgICAgIGlucHV0LnJ1bnMgPSB7XG4gICAgICAgICAgICAuLi5pbnB1dC5ydW5zLFxuICAgICAgICAgICAgdmFsdWU6IHNvdXJjZS5pbnB1dC5ydW5zPy52YWx1ZSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW3NvdXJjZS5pbnB1dF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgb3V0cHV0YCkge1xuICAgICAgICBpbnB1dC5ydW5zID0ge1xuICAgICAgICAgICAgLi4uaW5wdXQucnVucyxcbiAgICAgICAgICAgIHZhbHVlOiBzb3VyY2Uub3V0cHV0LnJ1bnM/LnZhbHVlLFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbc291cmNlLm91dHB1dF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgY29uZGl0aW9uYWwtb3V0cHV0YCkge1xuICAgICAgICBpZiAoIXNvdXJjZS5jb25kaXRpb24ucnVucz8udmFsdWUpIHtcbiAgICAgICAgICAgIGlucHV0LnJ1bnMgPSB7XG4gICAgICAgICAgICAgICAgLi4uaW5wdXQucnVucyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc291cmNlLmRlZmF1bHQucnVucz8udmFsdWUsXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbc291cmNlLmNvbmRpdGlvbiwgc291cmNlLmRlZmF1bHRdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LnJ1bnMgPSB7XG4gICAgICAgICAgICAuLi5pbnB1dC5ydW5zLFxuICAgICAgICAgICAgdmFsdWU6IHNvdXJjZS5vdXRwdXQucnVucz8udmFsdWUsXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFtzb3VyY2UuY29uZGl0aW9uLCBzb3VyY2Uub3V0cHV0XSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmtpbmQgPT09IGBvcGVyYXRvci1vdXRwdXRgKSB7XG4gICAgICAgIGlucHV0LnJ1bnMgPSB7XG4gICAgICAgICAgICAuLi5pbnB1dC5ydW5zLFxuICAgICAgICAgICAgLi4uY2FsY3VsYXRlUnVuVmFsdWVfb3BlcmF0b3Ioc291cmNlLm5vZGVJbnN0YW5jZSwgY29udGV4dCksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBfbmV2ZXI6IG5ldmVyID0gdW5kZWZpbmVkIGFzIHR5cGVvZiBzb3VyY2UgYXMgbmV2ZXI7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVSdW5WYWx1ZV9vcGVyYXRvciA9IChcbiAgICBub2RlSW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VfT3BlcmF0b3IsXG4gICAgY29udGV4dDogUnVuQ29udGV4dCxcbikgPT4ge1xuICAgIGNvbnN0IGNhbGN1bGF0ZUFyZ3NfaW5kZXggPSAoXG4gICAgICAgIGluZGV4OiBudW1iZXIsXG4gICAgKToge1xuICAgICAgICB2YWx1ZTogbnVtYmVyO1xuICAgICAgICBkZXBlbmRlbmNpZXM6IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZVtdO1xuICAgIH0gPT4ge1xuICAgICAgICBjb25zdCB4ID0gbm9kZUluc3RhbmNlLmlucHV0c1tpbmRleF07XG4gICAgICAgIGlmICh4ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCBhcyB1bmtub3duIGFzIG51bWJlcixcbiAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFt4IGFzIFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnB1dEluc3RhbmNlXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FsY3VsYXRlUnVuVmFsdWVfaW5wdXQoeCwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogeC5ydW5zPy52YWx1ZSBhcyBudW1iZXIsXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFt4IGFzIFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnB1dEluc3RhbmNlXSxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlcmF0b3I6IFBpcGVzY3JpcHRCdWlsdGluT3BlcmF0b3IgPSBub2RlSW5zdGFuY2Uub3BlcmF0b3I7XG5cbiAgICAvLyBsYXp5XG4gICAgY29uc3QgYVJlc3VsdCA9IGNhbGN1bGF0ZUFyZ3NfaW5kZXgoMCk7XG4gICAgY29uc3QgYSA9IGFSZXN1bHQudmFsdWU7XG4gICAgY29uc3QgZGVwZW5kZW5jaWVzID0gWy4uLmFSZXN1bHQuZGVwZW5kZW5jaWVzXTtcblxuICAgIGlmIChvcGVyYXRvciA9PT0gYCYmYCkge1xuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgY29uc3QgdiA9IGNhbGN1bGF0ZUFyZ3NfaW5kZXgoMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2Py52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFsuLi5kZXBlbmRlbmNpZXMsIC4uLnYuZGVwZW5kZW5jaWVzXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFSZXN1bHQ7XG4gICAgfVxuICAgIGlmIChvcGVyYXRvciA9PT0gYHx8YCkge1xuICAgICAgICBpZiAoIWEpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdj8udmFsdWUsXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbLi4uZGVwZW5kZW5jaWVzLCAuLi52LmRlcGVuZGVuY2llc10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhUmVzdWx0O1xuICAgIH1cbiAgICBpZiAob3BlcmF0b3IgPT09IGBjb25kaXRpb25hbC10ZXJuYXJ5YCkge1xuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgY29uc3QgdiA9IGNhbGN1bGF0ZUFyZ3NfaW5kZXgoMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2Py52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFsuLi5kZXBlbmRlbmNpZXMsIC4uLnYuZGVwZW5kZW5jaWVzXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdiA9IGNhbGN1bGF0ZUFyZ3NfaW5kZXgoMik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogdj8udmFsdWUsXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFsuLi5kZXBlbmRlbmNpZXMsIC4uLnYuZGVwZW5kZW5jaWVzXSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB1bmFyeVxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSBgPWA6XG4gICAgICAgICAgICByZXR1cm4gYVJlc3VsdDtcbiAgICAgICAgY2FzZSBgZGVjbGFyYXRpb25gOlxuICAgICAgICAgICAgcmV0dXJuIGFSZXN1bHQ7XG4gICAgICAgIGNhc2UgYCFgOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogIWEgfTtcbiAgICAgICAgY2FzZSBgKytgOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSArIDEgfTtcbiAgICAgICAgY2FzZSBgLS1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAtIDEgfTtcbiAgICB9XG5cbiAgICAvLyBiaW5hcnlcbiAgICBjb25zdCBiUmVzdWx0ID0gY2FsY3VsYXRlQXJnc19pbmRleCgxKTtcbiAgICBjb25zdCBiID0gYlJlc3VsdC52YWx1ZTtcbiAgICBkZXBlbmRlbmNpZXMucHVzaCguLi5iUmVzdWx0LmRlcGVuZGVuY2llcyk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgYCtgOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSArIGIgfTtcbiAgICAgICAgY2FzZSBgLWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIC0gYiB9O1xuICAgICAgICBjYXNlIGAqYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgKiBiIH07XG4gICAgICAgIGNhc2UgYC9gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAvIGIgfTtcbiAgICAgICAgY2FzZSBgJWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICUgYiB9O1xuICAgICAgICBjYXNlIGA8YDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgPCBiIH07XG4gICAgICAgIGNhc2UgYD5gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSA+IGIgfTtcbiAgICAgICAgY2FzZSBgPD1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSA8PSBiIH07XG4gICAgICAgIGNhc2UgYD49YDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgPj0gYiB9O1xuICAgICAgICBjYXNlIGA9PWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhID09PSBiIH07XG4gICAgICAgIGNhc2UgYCE9YDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgIT09IGIgfTtcbiAgICB9XG5cbiAgICBjb25zdCBfbmV2ZXI6IG5ldmVyID0gdW5kZWZpbmVkIGFzIHR5cGVvZiBvcGVyYXRvciBhcyBuZXZlcjtcblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBNb3VzZUJ1dHRvbiwgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7XG4gICAgUGlwZUVuZHBvaW50VmlldyxcbiAgICBQaXBlVmlldyxcbiAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUsXG4gICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JQaXBlU291cmNlLFxuICAgIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3csXG59IGZyb20gJy4vcGlwZXMnO1xuaW1wb3J0IHsgV29ya2Zsb3dJbnB1dE5hbWUsIGdldFR5cGVOYW1lIH0gZnJvbSAnLi93b3JrLW5hbWVzJztcbmltcG9ydCB7IFBpcGVzY3JpcHROb2RlLCBQaXBlc2NyaXB0V29ya2Zsb3cgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBXb3JrRmxvd1ZpZXcgPSAoe1xuICAgIHdvcmtmbG93LFxuICAgIGZ1bGwgPSBmYWxzZSxcbiAgICBoaWRlVGl0bGVzID0gZmFsc2UsXG59OiB7XG4gICAgd29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdztcbiAgICBmdWxsPzogYm9vbGVhbjtcbiAgICBoaWRlVGl0bGVzPzogYm9vbGVhbjtcbn0pID0+IHtcbiAgICAvLyAke2Z1bGwgPyBgbWluLXctWzIwdnddIG1pbi1oLVsyMHZoXWAgOiBgbWluLXctWzIwcHhdIG1pbi1oLVsxMHB4XWB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtY29sdW1uIHJlbGF0aXZlIGJnLXNsYXRlLTk1MC83NSBib3JkZXItYmx1ZS0xMDAgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSBtLVstMXB4XSByb3VuZGVkXG4gICAgICAgICAgICBgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IWhpZGVUaXRsZXMgJiYgKFxuICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57YCR7d29ya2Zsb3cubmFtZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cgZmxleC0xJz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQnPlxuICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpbnB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbnB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMSBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrZmxvd0lucHV0TmFtZSBpbnB1dD17aW5wdXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+OjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYGluYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nanVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUgYW5pbWF0ZS1ib3VuY2UgdGV4dC1bOHB4XSBhYnNvbHV0ZSB0b3AtMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjZDRlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5ib2R5Lm5vZGVzPy5tYXAobiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e24ubm9kZUlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZVZpZXcgbm9kZT17bn0gY29udGFpbmVyPXt3b3JrZmxvd30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuYm9keS5raW5kID09PSBgb3BlcmF0b3JgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0yIGZsZXgtcm93IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtYmx1ZS00MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuYm9keS5vcGVyYXRvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93VXJpOiB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBvcGVyYXRvcmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5tYXAob3BlcmF0b3JFbmRwb2ludElkID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e29wZXJhdG9yRW5kcG9pbnRJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXcgaWQ9e29wZXJhdG9yRW5kcG9pbnRJZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpblBpcGUgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpblBpcGUubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZVZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbklkPXtvcGVyYXRvckVuZHBvaW50SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlSWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93VXJpOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaW5QaXBlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LWVuZCBpdGVtcy1lbmQnPlxuICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cub3V0cHV0cy5tYXAob3V0cHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dHB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMSBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3V0cHV0LnBpcGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3V0cHV0LnBpcGUua2luZCA9PT0gYGRhdGFgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXB1cnBsZS00MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge291dHB1dC5waXBlLmpzb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncHItMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93VXJpOiB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb3V0cHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yUGlwZVNvdXJjZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlwZTogb3V0cHV0LnBpcGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KT8ubWFwKHNvdXJjZUlkID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZVZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzb3VyY2VJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25JZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb3V0cHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZD17c291cmNlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncHItMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtMzAwJz57YCR7b3V0cHV0Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+OjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L1ZpZXc+XG5cbiAgICAgICAgICAgIHshaGlkZVRpdGxlcyAmJiAoXG4gICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPntgJHt3b3JrZmxvdy53b3JrZmxvd1VyaX1gfTwvVGV4dD5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsvKiB7d29ya2Zsb3cud29ya2Zsb3dzPy5tYXAodyA9PiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17dy5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgc2NhbGUtNTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtGbG93VmlldyB3b3JrZmxvdz17d30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKX0gKi99XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuY29uc3QgTm9kZVZpZXcgPSAoeyBub2RlLCBjb250YWluZXIgfTogeyBub2RlOiBQaXBlc2NyaXB0Tm9kZTsgY29udGFpbmVyOiBQaXBlc2NyaXB0V29ya2Zsb3cgfSkgPT4ge1xuICAgIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoe1xuICAgICAgICB4OiBub2RlLmxheW91dD8ucG9zaXRpb24ueCA/PyAwLFxuICAgICAgICB5OiBub2RlLmxheW91dD8ucG9zaXRpb24ueSA/PyAwLFxuICAgICAgICBzY2FsZTogbm9kZS5sYXlvdXQ/LnNjYWxlID8/IDEsXG4gICAgfSk7XG4gICAgY29uc3QgbW92ZU5vZGUgPSB1c2VTdGFibGVDYWxsYmFjaygodmFsdWU6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBzZXRQb3NpdGlvbih2YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOb2RlVmlld2AsIHsgbm9kZSwgY29udGFpbmVyIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd29ya2Zsb3cgPSAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLndvcmtmbG93cz8uZmluZCh3ID0+IHcud29ya2Zsb3dVcmkgPT09IG5vZGUud29ya2Zsb3dVcmkpO1xuICAgIH0pKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vdmVhYmxlVmlld1xuICAgICAgICAgICAgcG9zaXRpb249e3tcbiAgICAgICAgICAgICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIHk6IHBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgc2NhbGU6IHBvc2l0aW9uLnNjYWxlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW92ZT17bW92ZU5vZGV9XG4gICAgICAgICAgICBtb3VzZUJ1dHRvbj17TW91c2VCdXR0b24uTGVmdH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXgtY29sdW1uIGJnLXppbmMtOTUwLzc1IGJvcmRlci1ibHVlLTEwMCBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIG0tWy0xcHhdIHJvdW5kZWQnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogcG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBwb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgpYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPnt3b3JrZmxvdy5uYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0yIHRleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+I3tub2RlLm5vZGVJZH08L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIHt3b3JrZmxvdyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cgZmxleC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmlucHV0cy5tYXAoaW5wdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbnB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xIGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UGlwZSA9IG5vZGUuaW5wdXRQaXBlcy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9PiBwLm5hbWUgPT09IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5wdXRQaXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lucHV0UGlwZS5raW5kID09PSBgZGF0YWAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J21sLVstMTZweF0gbXItWzE2cHhdIHRleHQtcHVycGxlLTQwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRQaXBlLmpzb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J21sLVstOHB4XSBtci1bMHB4XSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IG5vZGUubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYGluYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpbnB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3c6IGNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpcGU6IG5vZGUuaW5wdXRQaXBlcy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPT4geC5uYW1lID09PSBpbnB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk/Lm1hcChzb3VyY2VJZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZVZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uSWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbm9kZS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYGluYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZD17c291cmNlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrZmxvd0lucHV0TmFtZSBpbnB1dD17aW5wdXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+OjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya0Zsb3dWaWV3IHdvcmtmbG93PXt3b3JrZmxvd30gaGlkZVRpdGxlcyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LWVuZCBpdGVtcy1lbmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5vdXRwdXRzLm1hcChvdXRwdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtvdXRwdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMSBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTMwMCc+e2Ake291dHB1dC5uYW1lfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncHItMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J21sLVswcHhdIG1yLVstOHB4XSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IG5vZGUubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb3V0cHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e25vZGUuaW1wbGVtZW50YXRpb24ufTwvVGV4dD4gKi99XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvTW92ZWFibGVWaWV3PlxuICAgICk7XG59O1xuIiwgImltcG9ydCB7IGNhbGN1bGF0ZVJ1biB9IGZyb20gJy4vY2FsY3VsYXRlLXJ1bic7XG5pbXBvcnQge1xuICAgIFBpcGVzY3JpcHROb2RlLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQsXG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICBQaXBlc2NyaXB0UGlwZVZhbHVlLFxuICAgIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0V29ya2Zsb3csXG59IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGxvYWRSdW50aW1lID0gKFxuICAgIHdvcmtmbG93UmF3OiBQaXBlc2NyaXB0V29ya2Zsb3csXG4pOiB7XG4gICAgd29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdztcbiAgICBjb250ZXh0OiBQaXBlc2NyaXB0UnVudGltZUNvbnRleHQ7XG4gICAgZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQ7XG59ID0+IHtcbiAgICBjb25zdCB3b3JrZmxvdyA9IHdvcmtmbG93UmF3IGFzIFBpcGVzY3JpcHRXb3JrZmxvdztcbiAgICAvLyB3b3JrZmxvdy50cmVlID0ge1xuICAgIC8vICAgICBjb250YWluZXI6IHVuZGVmaW5lZCxcbiAgICAvLyAgICAgdXNhZ2VzOiBbXSxcbiAgICAvLyB9O1xuXG4gICAgY29uc3QgZ2V0V29ya2Zsb3dzUmVjdXJzaXZlID0gKHc6IFBpcGVzY3JpcHRXb3JrZmxvdyk6IFBpcGVzY3JpcHRXb3JrZmxvd1tdID0+IHtcbiAgICAgICAgcmV0dXJuIFt3LCAuLi4ody53b3JrZmxvd3M/LmZsYXRNYXAodzIgPT4gZ2V0V29ya2Zsb3dzUmVjdXJzaXZlKHcyKSkgPz8gW10pXTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWxsV29ya2Zsb3dzID0gZ2V0V29ya2Zsb3dzUmVjdXJzaXZlKHdvcmtmbG93KTtcbiAgICBjb25zdCBhbGxOb2RlcyA9IGFsbFdvcmtmbG93cy5mbGF0TWFwKHcgPT4gKHcuYm9keS5raW5kID09PSBgbm9kZXNgID8gdy5ib2R5Lm5vZGVzIDogW10pKTtcbiAgICBjb25zdCBhbGxQaXBlc193b3JrZmxvd091dHB1dHMgPSBhbGxXb3JrZmxvd3NcbiAgICAgICAgLmZsYXRNYXAodyA9PiB3Lm91dHB1dHMuZmxhdE1hcChvID0+IG8ucGlwZSkpXG4gICAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgICAubWFwKHggPT4geCEpO1xuICAgIGNvbnN0IGFsbFBpcGVzX25vZGVJbnB1dHMgPSBhbGxOb2Rlc1xuICAgICAgICAuZmxhdE1hcChuID0+IG4uaW5wdXRQaXBlcylcbiAgICAgICAgLmZpbHRlcih4ID0+IHgpXG4gICAgICAgIC5tYXAoeCA9PiB4ISk7XG4gICAgY29uc3QgYWxsUGlwZXMgPSBbLi4uYWxsUGlwZXNfd29ya2Zsb3dPdXRwdXRzLCAuLi5hbGxQaXBlc19ub2RlSW5wdXRzXTtcblxuICAgIGNvbnN0IGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0ID0ge1xuICAgICAgICBhbGxOb2RlSW5zdGFuY2VzOiBbXSxcbiAgICAgICAgcm9vdE5vZGVJbnN0YW5jZXM6IFtdLFxuICAgIH07XG4gICAgY29uc3QgY29udGV4dDogUGlwZXNjcmlwdFJ1bnRpbWVDb250ZXh0ID0ge1xuICAgICAgICBhbGxXb3JrZmxvd3MsXG4gICAgICAgIGFsbFdvcmtmbG93c01hcDogbmV3IE1hcChhbGxXb3JrZmxvd3MubWFwKHggPT4gW3gud29ya2Zsb3dVcmksIHhdKSksXG4gICAgICAgIGFsbE5vZGVzLFxuICAgICAgICBhbGxOb2Rlc01hcDogbmV3IE1hcChhbGxOb2Rlcy5tYXAoeCA9PiBbeC5ub2RlSWQsIHhdKSksXG4gICAgICAgIGFsbFBpcGVzLFxuICAgICAgICBkYXRhc2V0LFxuICAgICAgICBhbGxOb2RlSW5zdGFuY2VzOiBkYXRhc2V0LmFsbE5vZGVJbnN0YW5jZXMsXG4gICAgICAgIHJvb3ROb2RlSW5zdGFuY2VzOiBkYXRhc2V0LnJvb3ROb2RlSW5zdGFuY2VzLFxuICAgIH07XG5cbiAgICBjb250ZXh0LnJvb3ROb2RlSW5zdGFuY2VzLnB1c2goXG4gICAgICAgIC4uLih3b3JrZmxvdy5ib2R5Lm5vZGVzPy5tYXAobm9kZSA9PiBjcmVhdGVOb2RlSW5zdGFuY2VzKG5vZGUsIHVuZGVmaW5lZCwgY29udGV4dCkpID8/IFtdKSxcbiAgICApO1xuXG4gICAgY29udGV4dC5hbGxOb2RlSW5zdGFuY2VzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGxvYWROb2RlQ29ubmVjdGlvbnNfaW5mbG93cyhub2RlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFsbEluZmxvd1BpcGVzID0gY29udGV4dC5hbGxOb2RlSW5zdGFuY2VzXG4gICAgICAgIC5mbGF0TWFwKHggPT4gWy4uLnguaW5wdXRzLm1hcCh5ID0+IHkuaW5mbG93UGlwZSksIC4uLngub3V0cHV0cy5tYXAoeSA9PiB5LmluZmxvd1BpcGUpXSlcbiAgICAgICAgLmZpbHRlcih4ID0+IHgpXG4gICAgICAgIC5tYXAoeCA9PiB4ISk7XG4gICAgY29udGV4dC5hbGxOb2RlSW5zdGFuY2VzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGxvYWROb2RlQ29ubmVjdGlvbnNfb3V0Zmxvd3Mobm9kZSwgYWxsSW5mbG93UGlwZXMpO1xuICAgIH0pO1xuXG4gICAgY2FsY3VsYXRlUnVuKGRhdGFzZXQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd29ya2Zsb3csXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRhdGFzZXQsXG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFBpcGVzY3JpcHRSdW50aW1lQ29udGV4dCA9IHtcbiAgICBhbGxXb3JrZmxvd3M6IFBpcGVzY3JpcHRXb3JrZmxvd1tdO1xuICAgIGFsbFdvcmtmbG93c01hcDogTWFwPHN0cmluZywgUGlwZXNjcmlwdFdvcmtmbG93PjtcbiAgICBhbGxOb2RlczogUGlwZXNjcmlwdE5vZGVbXTtcbiAgICBhbGxOb2Rlc01hcDogTWFwPHN0cmluZywgUGlwZXNjcmlwdE5vZGU+O1xuICAgIGFsbFBpcGVzOiBQaXBlc2NyaXB0UGlwZVZhbHVlW107XG5cbiAgICAvLyBjcmVhdGVkIGR1cmluZyBjcmVhdGVOb2RlSW5zdGFuY2VzXG4gICAgZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQ7XG4gICAgYWxsTm9kZUluc3RhbmNlczogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZVtdO1xuICAgIHJvb3ROb2RlSW5zdGFuY2VzOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlW107XG59O1xuXG5jb25zdCBjcmVhdGVOb2RlSW5zdGFuY2VzID0gKFxuICAgIG5vZGU6IFBpcGVzY3JpcHROb2RlLFxuICAgIHBhcmVudDogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSxcbiAgICBjb250ZXh0OiBQaXBlc2NyaXB0UnVudGltZUNvbnRleHQsXG4pOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlID0+IHtcbiAgICBjb25zdCB3b3JrZmxvdyA9IGNvbnRleHQuYWxsV29ya2Zsb3dzTWFwLmdldChub2RlLndvcmtmbG93VXJpKTtcbiAgICBpZiAoIXdvcmtmbG93KSB7XG4gICAgICAgIHRocm93IEVycm9yKGBtaXNzaW5nIHdvcmtmbG93ICR7bm9kZS53b3JrZmxvd1VyaX1gKTtcbiAgICB9XG4gICAgLy8gbm9kZS50cmVlID0ge1xuICAgIC8vICAgICB3b3JrZmxvdyxcbiAgICAvLyB9O1xuXG4gICAgY29uc3QgaW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UgPSB7XG4gICAgICAgIGRhdGFzZXQ6IGNvbnRleHQuZGF0YXNldCxcbiAgICAgICAga2V5OiBgJHtjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMubGVuZ3RofWAsXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHdvcmtmbG93LFxuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBvdXRwdXRzOiBbXSxcbiAgICAgICAgcGFyZW50LFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcbiAgICBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG5cbiAgICAvLyBDcmVhdGUgY29ubmVjdGlvbnMgKHdpdGhvdXQgcGlwZXMpXG4gICAgaW5zdGFuY2UuaW5wdXRzID0gd29ya2Zsb3cuaW5wdXRzLm1hcCh3b3JrZmxvd0lucHV0ID0+ICh7XG4gICAgICAgIGtleTogYCR7Y29udGV4dC5hbGxOb2RlSW5zdGFuY2VzLmxlbmd0aH06JHt3b3JrZmxvd0lucHV0Lm5hbWV9OndvcmtmbG93SW5wdXRgLFxuICAgICAgICBub2RlSW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICBraW5kOiBgd29ya2Zsb3ctaW5wdXRgLFxuICAgICAgICB3b3JrZmxvd0lucHV0LFxuICAgICAgICBuYW1lOiB3b3JrZmxvd0lucHV0Lm5hbWUsXG4gICAgICAgIGluZmxvd1BpcGU6IHVuZGVmaW5lZCxcbiAgICAgICAgb3V0Zmxvd1BpcGVzOiBbXSxcbiAgICB9KSk7XG4gICAgaW5zdGFuY2Uub3V0cHV0cyA9IHdvcmtmbG93Lm91dHB1dHMubWFwKHdvcmtmbG93T3V0cHV0ID0+ICh7XG4gICAgICAgIGtleTogYCR7Y29udGV4dC5hbGxOb2RlSW5zdGFuY2VzLmxlbmd0aH06JHt3b3JrZmxvd091dHB1dC5uYW1lfTp3b3JrZmxvd091dHB1dGAsXG4gICAgICAgIG5vZGVJbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgIGtpbmQ6IGB3b3JrZmxvdy1vdXRwdXRgLFxuICAgICAgICB3b3JrZmxvd091dHB1dCxcbiAgICAgICAgbmFtZTogd29ya2Zsb3dPdXRwdXQubmFtZSxcbiAgICAgICAgaW5mbG93UGlwZTogdW5kZWZpbmVkLFxuICAgICAgICBvdXRmbG93UGlwZXM6IFtdLFxuICAgIH0pKTtcblxuICAgIC8vIFRPRE86IGhhbmRsZSByZWN1cnNpdmUvY3ljbGljYWwgd29ya2Zsb3dzXG4gICAgaW5zdGFuY2UuY2hpbGRyZW4gPVxuICAgICAgICB3b3JrZmxvdy5ib2R5Lm5vZGVzPy5tYXAobiA9PiBjcmVhdGVOb2RlSW5zdGFuY2VzKG4sIGluc3RhbmNlLCBjb250ZXh0KSkgPz8gW107XG5cbiAgICBpZiAod29ya2Zsb3cuYm9keS5raW5kID09PSBgb3BlcmF0b3JgKSB7XG4gICAgICAgIGluc3RhbmNlLm9wZXJhdG9yID0gd29ya2Zsb3cuYm9keS5vcGVyYXRvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59O1xuXG5jb25zdCBsb2FkTm9kZUNvbm5lY3Rpb25zX2luZmxvd3MgPSAobm9kZUluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlKSA9PiB7XG4gICAgLy8gY29ubmVjdCBpbmZsb3dzXG4gICAgbm9kZUluc3RhbmNlLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZUlucHV0ID0gbm9kZUluc3RhbmNlLm5vZGUuaW5wdXRQaXBlcy5maW5kKHggPT4geC5uYW1lID09PSBpbnB1dC5uYW1lKTtcbiAgICAgICAgaWYgKCFub2RlSW5wdXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldEluZmxvd1NvdXJjZSA9ICgpOiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBpcGVTb3VyY2UgPSBub2RlSW5wdXQ7XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgZGF0YWApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgZGF0YWAsXG4gICAgICAgICAgICAgICAgICAgIGpzb246IHBpcGVTb3VyY2UuanNvbixcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYHdvcmtmbG93LW9wZXJhdG9yYCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBvcGVyYXRvci1vdXRwdXRgLFxuICAgICAgICAgICAgICAgICAgICBub2RlSW5zdGFuY2U6IG5vZGVJbnN0YW5jZSBhcyBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlX09wZXJhdG9yLFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgd29ya2Zsb3ctaW5wdXRgKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZVdvcmtmbG93SW5wdXQgPSBub2RlSW5zdGFuY2UucGFyZW50Py5pbnB1dHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgeCA9PiB4Lm5hbWUgPT09IHBpcGVTb3VyY2Uud29ya2Zsb3dJbnB1dE5hbWUsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVXb3JrZmxvd0lucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiBnZXRJbmZsb3dTb3VyY2U6IE1pc3Npbmcgbm9kZVdvcmtmbG93SW5wdXQgJHtwaXBlU291cmNlLm5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYGlucHV0YCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5vZGVXb3JrZmxvd0lucHV0LFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgbm9kZWApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZWVyTm9kZU91dHB1dCA9IG5vZGVJbnN0YW5jZS5wYXJlbnQ/LmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKG4yID0+IG4yLm5vZGUubm9kZUlkID09PSBwaXBlU291cmNlLnNvdXJjZU5vZGVJZClcbiAgICAgICAgICAgICAgICAgICAgPy5vdXRwdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHBpcGVTb3VyY2Uuc291cmNlTm9kZU91dHB1dE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcGVlck5vZGVPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IGdldEluZmxvd1NvdXJjZTogTWlzc2luZyBwZWVyTm9kZU91dHB1dCAke3BpcGVTb3VyY2UubmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpcGVTb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5PdXRwdXRzOiBub2RlSW5zdGFuY2UuY2hpbGRyZW4ubWFwKHggPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5vdXRwdXRzLm1hcChvID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG8ua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogby5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBvLm5vZGVJbnN0YW5jZS5ub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBvdXRwdXRgLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IHBlZXJOb2RlT3V0cHV0LFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IHVua25vd24gcGlwZVNvdXJjZSAkeyhwaXBlU291cmNlIGFzIHsga2luZDogc3RyaW5nIH0pLmtpbmR9YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGdldEluZmxvd1NvdXJjZSgpO1xuICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQuaW5mbG93UGlwZSA9IHtcbiAgICAgICAgICAgIGtleTogYCR7aW5wdXQua2V5fTpwaXBlYCxcbiAgICAgICAgICAgIHBpcGU6IG5vZGVJbnB1dCxcbiAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAga2luZDogYGlucHV0YCxcbiAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBub2RlSW5zdGFuY2Uub3V0cHV0cy5mb3JFYWNoKG91dHB1dCA9PiB7XG4gICAgICAgIGNvbnN0IHdvcmtmbG93T3V0cHV0ID0gbm9kZUluc3RhbmNlLndvcmtmbG93Lm91dHB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gb3V0cHV0Lm5hbWUpO1xuICAgICAgICBjb25zdCB3b3JrZmxvd091dHB1dFBpcGUgPSB3b3JrZmxvd091dHB1dD8ucGlwZTtcbiAgICAgICAgaWYgKCF3b3JrZmxvd091dHB1dFBpcGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldEluZmxvd1NvdXJjZSA9ICgpOiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBpcGVTb3VyY2UgPSB3b3JrZmxvd091dHB1dFBpcGU7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWU6IHBpcGVTb3VyY2VOYW1lIH0gPSB3b3JrZmxvd091dHB1dDtcbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGBkYXRhYCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBkYXRhYCxcbiAgICAgICAgICAgICAgICAgICAganNvbjogcGlwZVNvdXJjZS5qc29uLFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgd29ya2Zsb3ctb3BlcmF0b3JgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYG9wZXJhdG9yLW91dHB1dGAsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJbnN0YW5jZTogbm9kZUluc3RhbmNlIGFzIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VfT3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGB3b3JrZmxvdy1pbnB1dGApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlV29ya2Zsb3dJbnB1dCA9IG5vZGVJbnN0YW5jZS5pbnB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gcGlwZVNvdXJjZU5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZVdvcmtmbG93SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IGdldEluZmxvd1NvdXJjZTogTWlzc2luZyBub2RlV29ya2Zsb3dJbnB1dCAke3BpcGVTb3VyY2VOYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBpbnB1dGAsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBub2RlV29ya2Zsb3dJbnB1dCxcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYG5vZGVgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5uZXJOb2RlT3V0cHV0ID0gbm9kZUluc3RhbmNlLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKG4yID0+IG4yLm5vZGUubm9kZUlkID09PSBwaXBlU291cmNlLnNvdXJjZU5vZGVJZClcbiAgICAgICAgICAgICAgICAgICAgPy5vdXRwdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHBpcGVTb3VyY2VOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlubmVyTm9kZU91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogZ2V0SW5mbG93U291cmNlOiBNaXNzaW5nIHBlZXJOb2RlT3V0cHV0ICR7cGlwZVNvdXJjZU5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJbnN0YW5jZS53b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBub2Rlc2BcbiAgICAgICAgICAgICAgICAgICAgJiYgbm9kZUluc3RhbmNlLndvcmtmbG93LmJvZHkuY29udHJvbCA9PT0gYGlmYFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZDogYGNvbmRpdGlvbmFsLW91dHB1dGAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IGlubmVyTm9kZU91dHB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogbm9kZUluc3RhbmNlLmlucHV0cy5maW5kKHggPT4geC5uYW1lID09PSBgY29uZGl0aW9uYCkhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogbm9kZUluc3RhbmNlLmlucHV0cy5maW5kKHggPT4geC5uYW1lID09PSBwaXBlU291cmNlTmFtZSkhLFxuICAgICAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBvdXRwdXRgLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IGlubmVyTm9kZU91dHB1dCxcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiB1bmtub3duIHBpcGVTb3VyY2UgJHsocGlwZVNvdXJjZSBhcyB7IGtpbmQ6IHN0cmluZyB9KS5raW5kfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzb3VyY2UgPSBnZXRJbmZsb3dTb3VyY2UoKTtcbiAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dHB1dC5pbmZsb3dQaXBlID0ge1xuICAgICAgICAgICAga2V5OiBgJHtvdXRwdXQua2V5fTpwaXBlYCxcbiAgICAgICAgICAgIHBpcGU6IHdvcmtmbG93T3V0cHV0UGlwZSxcbiAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAga2luZDogYG91dHB1dGAsXG4gICAgICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGxvYWROb2RlQ29ubmVjdGlvbnNfb3V0Zmxvd3MgPSAoXG4gICAgbm9kZUluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIGFsbEluZmxvd1BpcGVzOiBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbXSxcbikgPT4ge1xuICAgIG5vZGVJbnN0YW5jZS5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0Lm91dGZsb3dQaXBlcyA9IGFsbEluZmxvd1BpcGVzLmZpbHRlcihcbiAgICAgICAgICAgIHggPT4geC5zb3VyY2Uua2luZCA9PT0gYGlucHV0YCAmJiB4LnNvdXJjZS5pbnB1dCA9PT0gaW5wdXQsXG4gICAgICAgICk7XG4gICAgfSk7XG4gICAgbm9kZUluc3RhbmNlLm91dHB1dHMuZm9yRWFjaChvdXRwdXQgPT4ge1xuICAgICAgICBvdXRwdXQub3V0Zmxvd1BpcGVzID0gYWxsSW5mbG93UGlwZXMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4LnNvdXJjZS5raW5kID09PSBgb3V0cHV0YCAmJiB4LnNvdXJjZS5vdXRwdXQgPT09IG91dHB1dCxcbiAgICAgICAgKTtcbiAgICB9KTtcbn07XG4iLCAiLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDEtZGVjbGFyYXRpb25zLzAyLnRzLndvcmtmbG93Lmpzb24nO1xuLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDItYXNzaWdubWVudHMvMDEudHMud29ya2Zsb3cuanNvbic7XG4vLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwMy1vcGVyYXRvcnMvMDQudHMud29ya2Zsb3cuanNvbic7XG4vLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwNC1tdXRhdGlvbi8wMS50cy53b3JrZmxvdy5qc29uJztcbmltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDA1LWxvZ2ljLzAzLnRzLndvcmtmbG93Lmpzb24nO1xuaW1wb3J0IHsgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi9zcmMvdHlwZXMnO1xuZXhwb3J0IHsgV29ya0NhbnZhc1ZpZXcgfSBmcm9tICcuL3NyYy91aS93b3JrLWNhbnZhcy12aWV3JztcbmV4cG9ydCBjb25zdCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvdyA9IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBhcyBQaXBlc2NyaXB0V29ya2Zsb3c7XG4iLCAiaW1wb3J0IHsgV29ya0NhbnZhc1ZpZXcsIGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93IH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9waXBlc2NyaXB0JztcblxuZXhwb3J0IGNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCB3b3JrZmxvdyA9IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93O1xuICAgIHJldHVybiA8V29ya0NhbnZhc1ZpZXcgd29ya2Zsb3c9e3dvcmtmbG93fSAvPjtcbn07XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIGJhY2tncm91bmRDb2xvciBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBhbmltYXRlZCBgdHJ1ZWAgdG8gYW5pbWF0ZSB0aGUgYmFja2dyb3VuZCBjb2xvciBjaGFuZ2UsIGBmYWxzZWAgdG8gY2hhbmdlIGltbWVkaWF0ZWx5LlxuICogQHBsYXRmb3JtIGFuZHJvaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyQmFja2dyb3VuZENvbG9yKGJhY2tncm91bmRDb2xvcjogc3RyaW5nLCBhbmltYXRlZDogYm9vbGVhbikge1xuICBTdGF0dXNCYXIuc2V0QmFja2dyb3VuZENvbG9yKGJhY2tncm91bmRDb2xvciwgYW5pbWF0ZWQpO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIHRoZSBuZXR3b3JrIGFjdGl2aXR5IGluZGljYXRvci5cbiAqIEBwYXJhbSB2aXNpYmxlIElmIHRoZSBuZXR3b3JrIGFjdGl2aXR5IGluZGljYXRvciBzaG91bGQgYmUgdmlzaWJsZS5cbiAqIEBwbGF0Zm9ybSBpb3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyTmV0d29ya0FjdGl2aXR5SW5kaWNhdG9yVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gIFN0YXR1c0Jhci5zZXROZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlKHZpc2libGUpO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhckFuaW1hdGlvbiB9IGZyb20gJy4vU3RhdHVzQmFyLnR5cGVzJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gaGlkZGVuIElmIHRoZSBzdGF0dXMgYmFyIHNob3VsZCBiZSBoaWRkZW4uXG4gKiBAcGFyYW0gYW5pbWF0aW9uIEFuaW1hdGlvbiB0byB1c2Ugd2hlbiB0b2dnbGluZyBoaWRkZW4sIGRlZmF1bHRzIHRvIGAnbm9uZSdgLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJIaWRkZW4oaGlkZGVuOiBib29sZWFuLCBhbmltYXRpb246IFN0YXR1c0JhckFuaW1hdGlvbikge1xuICBTdGF0dXNCYXIuc2V0SGlkZGVuKGhpZGRlbiwgYW5pbWF0aW9uKTtcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBTdGF0dXNCYXJTdHlsZSB9IGZyb20gJy4vU3RhdHVzQmFyLnR5cGVzJztcbmltcG9ydCBzdHlsZVRvQmFyU3R5bGUgZnJvbSAnLi9zdHlsZVRvQmFyU3R5bGUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBTZXQgdGhlIGJhciBzdHlsZSBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBzdHlsZSBUaGUgY29sb3Igb2YgdGhlIHN0YXR1cyBiYXIgdGV4dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyU3R5bGUoc3R5bGU6IFN0YXR1c0JhclN0eWxlKSB7XG4gIFN0YXR1c0Jhci5zZXRCYXJTdHlsZShzdHlsZVRvQmFyU3R5bGUoc3R5bGUpKTtcbn1cbiIsICJpbXBvcnQgeyBBcHBlYXJhbmNlLCBDb2xvclNjaGVtZU5hbWUgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBTdGF0dXNCYXJTdHlsZSB9IGZyb20gJy4vU3RhdHVzQmFyLnR5cGVzJztcblxuZnVuY3Rpb24gZ2V0Q29sb3JTY2hlbWUoKSB7XG4gIGlmIChBcHBlYXJhbmNlKSB7XG4gICAgcmV0dXJuIEFwcGVhcmFuY2UuZ2V0Q29sb3JTY2hlbWUoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ2xpZ2h0JztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHlsZVRvQmFyU3R5bGUoXG4gIHN0eWxlOiBTdGF0dXNCYXJTdHlsZSA9ICdhdXRvJyxcbiAgY29sb3JTY2hlbWU6IENvbG9yU2NoZW1lTmFtZSA9IGdldENvbG9yU2NoZW1lKClcbik6ICdsaWdodC1jb250ZW50JyB8ICdkYXJrLWNvbnRlbnQnIHtcbiAgaWYgKCFjb2xvclNjaGVtZSkge1xuICAgIGNvbG9yU2NoZW1lID0gJ2xpZ2h0JztcbiAgfVxuXG4gIGxldCByZXNvbHZlZFN0eWxlID0gc3R5bGU7XG4gIGlmIChzdHlsZSA9PT0gJ2F1dG8nKSB7XG4gICAgcmVzb2x2ZWRTdHlsZSA9IGNvbG9yU2NoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgfSBlbHNlIGlmIChzdHlsZSA9PT0gJ2ludmVydGVkJykge1xuICAgIHJlc29sdmVkU3R5bGUgPSBjb2xvclNjaGVtZSA9PT0gJ2xpZ2h0JyA/ICdsaWdodCcgOiAnZGFyayc7XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZWRTdHlsZSA9PT0gJ2xpZ2h0JyA/ICdsaWdodC1jb250ZW50JyA6ICdkYXJrLWNvbnRlbnQnO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFNldCB0aGUgdHJhbnNsdWNlbmN5IG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIHRyYW5zbHVjZW50IFdoZXRoZXIgdGhlIGFwcCBjYW4gZHJhdyB1bmRlciB0aGUgc3RhdHVzIGJhci4gV2hlbiBgdHJ1ZWAsIGNvbnRlbnQgd2lsbCBiZVxuICogcmVuZGVyZWQgdW5kZXIgdGhlIHN0YXR1cyBiYXIuIFRoaXMgaXMgYWx3YXlzIGB0cnVlYCBvbiBpT1MgYW5kIGNhbm5vdCBiZSBjaGFuZ2VkLlxuICogQHBsYXRmb3JtIGFuZHJvaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyVHJhbnNsdWNlbnQodHJhbnNsdWNlbnQ6IGJvb2xlYW4pIHtcbiAgU3RhdHVzQmFyLnNldFRyYW5zbHVjZW50KHRyYW5zbHVjZW50KTtcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdleHBvLXN0YXR1cy1iYXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcmVzc2FibGUsIFRleHQsIFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgY29uc3QgRXhhbXBsZVZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBpbmNyZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIHNldENvdW50KHMgPT4gcyArIDEpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgZmxleC1jb2wgZmxleC0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1yZWQtMTAwJz5cbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1jeWFuLTcwMCc+RXhhbXBsZVZpZXcgLi4uPC9UZXh0PlxuICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzPXtpbmNyZW1lbnR9PlxuICAgICAgICAgICAgICAgIDxUZXh0PntgSW5jcmVtZW50IGNvdW50OiR7Y291bnR9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQ+MDAzPC9UZXh0PlxuICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICA8U3RhdHVzQmFyIHN0eWxlPSdhdXRvJyAvPlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tICd0YWlsd2luZGNzcyc7XG5cbmV4cG9ydCBjb25zdCB0YWlsd2luZFRoZW1lOiBDb25maWdbYHRoZW1lYF0gPSB7XG4gICAgLy8gZWRpdCB5b3VyIHRhaWx3aW5kIHRoZW1lIGhlcmUhXG4gICAgLy8gaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9hZGRpbmctY3VzdG9tLXN0eWxlc1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsUUFBVSxDQUFDO0FBQUEsRUFDWCxTQUFXLENBQUM7QUFBQSxFQUNaLE1BQVE7QUFBQSxJQUNOLE1BQVE7QUFBQSxJQUNSLE9BQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxhQUFlO0FBQUEsUUFDZixRQUFVO0FBQUEsUUFDVixZQUFjLENBQUM7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsYUFBZTtBQUFBLE1BQ2YsTUFBUTtBQUFBLE1BQ1IsUUFBVSxDQUFDO0FBQUEsTUFDWCxTQUFXO0FBQUEsUUFDVDtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsTUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLGNBQWdCO0FBQUEsWUFDaEIsc0JBQXdCO0FBQUEsVUFDMUI7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBUTtBQUFBLFVBQ1IsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsTUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLGNBQWdCO0FBQUEsWUFDaEIsc0JBQXdCO0FBQUEsVUFDMUI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBYTtBQUFBLFFBQ1g7QUFBQSxVQUNFLGFBQWU7QUFBQSxVQUNmLE1BQVE7QUFBQSxVQUNSLFFBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsVUFBWTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVSxDQUFDO0FBQUEsVUFDWCxTQUFXO0FBQUEsWUFDVDtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixVQUFZO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsVUFBWTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FB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QUFBQSxRQUNILE9BQU8sa0JBQWtCO0FBQUEsTUFDN0I7QUFBQSxNQUNBLGFBQWE7QUFBQSxJQUNqQjtBQUFBO0FBQUEsSUFFQSxDQUFDLGFBQWE7QUFBQSxLQUNiO0FBQUEsRUFDTCxFQVpDLGdCQUFnQixVQWN6QixFQWhCQyxnQkFBZ0IsU0FpQnJCLEVBbEJDQSxNQW1CTCxFQXBCQyw2QkFBNkI7QUFzQnRDOzs7QThEL0dPLElBQU0sNkJBQTZCOzs7QUNMbkMsSUFBTSxNQUFNLE1BQU07QUFDckIsUUFBTSxXQUFXO0FBQ2pCLFNBQU8sQ0FBQyxlQUFlLFVBQVUsVUFBVTtBQUMvQzs7O0FDTEEsU0FBUyxpQkFBaUI7OztBQ0ExQixTQUFTLGFBQUFNLGtCQUFpQjs7O0FDQTFCLFNBQVMsYUFBQUMsa0JBQWlCOzs7QUNBMUIsU0FBUyxhQUFBQyxrQkFBaUI7OztBQ0ExQixTQUFTLGtCQUFtQzs7O0FDQTVDLFNBQVMsYUFBQUMsa0JBQWlCOzs7QUNDMUIsU0FBUyxZQUFBQyxpQkFBZ0I7QUFDekIsU0FBUyxhQUFBQyxZQUFXLFFBQUFDLE9BQU0sUUFBQUMsYUFBWTs7O0FDQS9CLElBQU0sZ0JBQWlDO0FBQUE7QUFBQTtBQUc5QzsiLAogICJuYW1lcyI6IFsiUmVhY3QiLCAidXNlTGF5b3V0RWZmZWN0IiwgInVzZVJlZiIsICJ1c2VTdGF0ZSIsICJWaWV3IiwgIlRleHQiLCAiUHJlc3NhYmxlIiwgImQiLCAiYiIsICJmcm9tIiwgInYiLCAiU3Vic2NyaXB0aW9uIiwgIlN1YnNjcmliZXIiLCAiQ29uc3VtZXJPYnNlcnZlciIsICJTYWZlU3Vic2NyaWJlciIsICJPYnNlcnZhYmxlIiwgIm9ic2VydmFibGUiLCAiT3BlcmF0b3JTdWJzY3JpYmVyIiwgImVyciIsICJTdWJqZWN0IiwgIm9ic2VydmFibGUiLCAiQW5vbnltb3VzU3ViamVjdCIsICJCZWhhdmlvclN1YmplY3QiLCAiZGVsYXkiLCAiZGVsYXkiLCAiZGVsYXkiLCAiaXRlcmF0b3IiLCAiaXRlcmF0b3IiLCAiaXNBcnJheSIsICJpIiwgInVzZVJlZiIsICJ1c2VSZWYiLCAiUmVhY3QiLCAiY3JlYXRlQ29udGV4dCIsICJ1c2VDb250ZXh0IiwgInVzZUVmZmVjdCIsICJ1c2VTdGF0ZSIsICJWaWV3IiwgIlRleHQiLCAiUHJlc3NhYmxlIiwgIlJlYWN0IiwgImNyZWF0ZUNvbnRleHQiLCAidXNlRWZmZWN0IiwgInVzZVJlZiIsICJ1c2VTdGF0ZSIsICJWaWV3IiwgIlRleHQiLCAiY3JlYXRlQ29udGV4dCIsICJ1c2VFZmZlY3QiLCAib2xkIiwgInVzZVN0YXRlIiwgIlZpZXciLCAiUmVhY3QiLCAiVGV4dCIsICJ1c2VSZWYiLCAiUmVhY3QiLCAiVmlldyIsICJUZXh0IiwgInVzZUNvbnRleHQiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlByZXNzYWJsZSIsICJ1c2VDb250ZXh0IiwgIlByZXNzYWJsZSIsICJWaWV3IiwgIlRleHQiLCAidXNlU3RhdGUiLCAiVmlldyIsICJSZWFjdCIsICJUZXh0IiwgIlRleHQiLCAib2JqIiwgInZpc2l0ZWQiLCAieCIsICJ3b3JrZmxvdyIsICJjb250ZXh0IiwgInYiLCAiVmlldyIsICJSZWFjdCIsICJ1c2VDb250ZXh0IiwgInVzZVN0YXRlIiwgInVzZUVmZmVjdCIsICJUZXh0IiwgIlByZXNzYWJsZSIsICJjcmVhdGVDb250ZXh0IiwgIlJlYWN0IiwgInVzZVN0YXRlIiwgIlZpZXciLCAiVGV4dCIsICJWaWV3IiwgIlRleHQiLCAiUmVhY3QiLCAiTm9kZVZpZXciLCAidXNlU3RhdGUiLCAiY29udGV4dCIsICJ1c2VSZWYiLCAidXNlU3RhdGUiLCAiVmlldyIsICJSZWFjdCIsICJQcmVzc2FibGUiLCAiVGV4dCIsICJjb250ZXh0IiwgInVzZUxheW91dEVmZmVjdCIsICJTdGF0dXNCYXIiLCAiU3RhdHVzQmFyIiwgIlN0YXR1c0JhciIsICJTdGF0dXNCYXIiLCAidXNlU3RhdGUiLCAiUHJlc3NhYmxlIiwgIlRleHQiLCAiVmlldyJdCn0K
