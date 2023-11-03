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
var create_getCallExpression = (workflow, dataset, builder = {
  declaredWorkflows: []
}) => {
  const functionName = getFunctionName(workflow);
  if (workflow.body.kind === `operator`) {
    const { operator } = workflow.body;
    const fun = operatorExpressions.find((f) => f.operator === operator);
    if (!fun) {
      return () => `/* missing operator ${operator}*/`;
    }
    return fun.template;
  }
  if (workflow.body.control) {
    return (args) => create_getControlBody(workflow, dataset, builder)?.(args) ?? ``;
  }
  return (args) => {
    return `${functionName}(${args.join(`, `)})`;
  };
};
var create_getControlBody = (workflow, dataset, builder = {
  declaredWorkflows: []
}) => {
  const workflowTyped = workflow;
  const control = workflowTyped.body.control;
  if (control === `if`) {
    return (args) => {
      const workflowNodeInstance = dataset.allNodeInstances.find(
        (x) => x.node.workflowUri === workflow.workflowUri
      );
      const namesInScope = workflowNodeInstance?.inputs.map(
        (x) => x.runs?.nameInScope ?? x.name
      );
      const outputNames = workflowNodeInstance?.outputs.map((x) => x.runs?.nameInScope ?? x.name) ?? [];
      const statements = createBodyStatements(workflowTyped, dataset, builder, namesInScope);
      return `${(outputNames?.length ?? 0) > 1 ? `let { ${outputNames.join(`, `)} };` : outputNames.length === 1 ? `let ${outputNames[0]};` : ``}
if (${args.slice(0, 1).join(`, `)}) {
${indent(statements.join(`
`))}}`;
    };
  }
  const _never = control;
};
var convertWorkflowToFunctionDeclaration = (workflow, dataset, builder = {
  declaredWorkflows: []
}) => {
  if (builder.declaredWorkflows.find((x) => x.workflow === workflow)) {
    return;
  }
  const declaration = {
    workflow,
    getCallExpression: create_getCallExpression(workflow, dataset, builder)
  };
  builder.declaredWorkflows.push(declaration);
  if (workflow.body.kind === `operator`) {
    return;
  }
  const nestedFunctionDeclarations = workflow.workflows?.map((w) => convertWorkflowToFunctionDeclaration(w, dataset, builder)).filter((x) => x).map((x) => x) ?? [];
  const statements = createBodyStatements(
    workflow,
    dataset,
    builder
  );
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
  if (workflow.body.control) {
    return;
  }
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
function createBodyStatements(workflow, dataset, builder, namesInScope) {
  return workflow.body.nodes.map((node) => {
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
    if (workflow2.body.kind === `nodes` && workflow2.body.control) {
      const control = workflow2.body.control;
      if (control === `if`) {
        return funCall;
      }
    }
    const outputsItems = nodeInstance.outputs.map((x) => {
      return x.runs?.nameInScope ?? x.name;
    });
    const outputsExpression = SIMPLIFY_SINGLE_RETURN && outputsItems.length === 1 ? `${outputsItems[0]}` : outputsItems.length ? `{ ${outputsItems.join(`, `)} }` : `/* missing output item */ _unknown`;
    if (namesInScope?.some((x) => outputsItems.some((o) => o === x))) {
      return `${outputsExpression} = ${funCall};`;
    }
    return `const ${outputsExpression} = ${funCall};`;
  });
}

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
      content: `${create_getCallExpression(
        node.workflow,
        node.dataset
      )(
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
  const control = workflow.body.kind === `nodes` ? workflow.body.control : void 0;
  const operator = workflow.body.kind === `operator` ? workflow.body.operator : void 0;
  return <>
    {control && <View5 className="basis-[100%] h-0" />}
    <View5 className=""><MoveableView
      position={{
        x: position.x,
        y: position.y,
        scale: position.scale
      }}
      onMove={moveNode}
      mouseButton={4 /* Middle */}
    ><View5 className="flex-col relative bg-slate-950/75 border-blue-100 border-solid border-[1px] rounded">
      <View5
        className={`flex-row items-center px-1 ${control ? `bg-yellow-900` : operator ? `bg-blue-900` : `bg-gray-800`}`}
      >
        <Text6 className="text-gray-400">{`${nodeInstance.workflow.name.split(`/`).slice(-1)[0]} #${nodeInstance.key}`}</Text6>
        <View5 className="flex-1" />
        {control && <Text6 className="text-yellow-400">{`${control}`}</Text6>}
        {operator && <Text6 className="text-yellow-400">{`${operator.substring(
          0,
          3
        )}`}</Text6>}
      </View5>
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
  if (pipeSide.kind === `conditional-output`) {
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
  const _never = pipeSide;
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
  if (source.kind === `conditional-output`) {
    const sourceConditionId = getPipeKey(
      {
        kind: `input`,
        input: source.condition
      },
      `out`
    );
    const sourceDefaultId = getPipeKey(
      {
        kind: `input`,
        input: source.default
      },
      `out`
    );
    return <>
      <PipeView sourceId={sourceId} destinationId={destinationId} side={side} />
      {
        /* <PipeView sourceId={sourceConditionId} destinationId={destinationId} side={side} /> */
      }
      <PipeView sourceId={sourceDefaultId} destinationId={destinationId} side={side} />
    </>;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdGVzdHMvY29kZS8wMDA1LWxvZ2ljLzAzLnRzLndvcmtmbG93Lmpzb24iLCAiLi4vLi4vLi4vcGFja2FnZXMvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjay50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLWNhbnZhcy12aWV3LnRzeCIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc0Z1bmN0aW9uLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2NyZWF0ZUVycm9yQ2xhc3MudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9hcnJSZW1vdmUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL1N1YnNjcmlwdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvY29uZmlnLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL25vb3AudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL05vdGlmaWNhdGlvbkZhY3Rvcmllcy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9lcnJvckNvbnRleHQudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL1N1YnNjcmliZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3N5bWJvbC9vYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lkZW50aXR5LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL3BpcGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL09ic2VydmFibGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvbGlmdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL09wZXJhdG9yU3Vic2NyaWJlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvU3ViamVjdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzU2NoZWR1bGVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2FyZ3MudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNBcnJheUxpa2UudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNQcm9taXNlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNBc3luY0l0ZXJhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3N5bWJvbC9pdGVyYXRvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc0l0ZXJhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2lubmVyRnJvbS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9leGVjdXRlU2NoZWR1bGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9vYnNlcnZlT24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9zdWJzY3JpYmVPbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlT2JzZXJ2YWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlUHJvbWlzZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXJyYXkudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUl0ZXJhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVBc3luY0l0ZXJhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZWQudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29ic2VydmFibGUvZnJvbS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL21hcC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9tYXBPbmVPck1hbnlBcmdzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2FyZ3NBcmdBcnJheU9yT2JqZWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2NyZWF0ZU9iamVjdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb21iaW5lTGF0ZXN0LnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL21vdmVhYmxlLXZpZXcudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL25vZGUtaW5zdGFuY2Utdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvcGlwZXMudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL3NoZWV0LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS92YWx1ZS12aWV3LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLW5hbWVzLnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91dGlscy9qc29uLnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL2FuYWx5c2lzL2hhc2gudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvY29kZS1nZW5lcmF0aW9uL2ZpbGUudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvYW5hbHlzaXMvY2FsY3VsYXRlLXJ1bi50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLWZsb3ctdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvYW5hbHlzaXMvbG9hZC1kYXRhLnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvaW5kZXgudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvYXBwL3NyYy9pbmRleC50c3giLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyQmFja2dyb3VuZENvbG9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0Jhck5ldHdvcmtBY3Rpdml0eUluZGljYXRvclZpc2libGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFySGlkZGVuLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhclN0eWxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3N0eWxlVG9CYXJTdHlsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJUcmFuc2x1Y2VudC50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9jbC9zcmMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL2NsL3NyYy9kZXNpZ24vdGFpbHdpbmQvdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcbiAgXCJuYW1lXCI6IFwiXCIsXG4gIFwid29ya2Zsb3dVcmlcIjogXCJcIixcbiAgXCJpbnB1dHNcIjogW10sXG4gIFwib3V0cHV0c1wiOiBbXSxcbiAgXCJib2R5XCI6IHtcbiAgICBcImtpbmRcIjogXCJub2Rlc1wiLFxuICAgIFwibm9kZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50c1wiLFxuICAgICAgICBcIm5vZGVJZFwiOiBcIm1haW5cIixcbiAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIndvcmtmbG93c1wiOiBbXG4gICAge1xuICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHNcIixcbiAgICAgIFwibmFtZVwiOiBcImZpbGUudHNcIixcbiAgICAgIFwiaW5wdXRzXCI6IFtdLFxuICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czo0XCIsXG4gICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjRcIixcbiAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIndvcmtmbG93c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9hLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy9hLWRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCJkZWNsYXJhdGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYi1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvYi1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCJkZWNsYXJhdGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvPlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvPlwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcIj5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2lmLWJvZHlcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzL2lmLWJvZHlcIixcbiAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbmRpdGlvblwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHMvaWYtYm9keTozXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzL2lmLWJvZHk6M1wiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJhXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJ3b3JrZmxvd3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5L2I9XCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvaWYtYm9keS9iPVwiLFxuICAgICAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib2xkXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImlnbm9yZWRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcIj1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5Lz5cIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy9pZi1ib2R5Lz5cIixcbiAgICAgICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiPlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keVwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keVwiLFxuICAgICAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5L2lmLWJvZHk6MVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5L2lmLWJvZHk6MlwiLFxuICAgICAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcIndvcmtmbG93c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvaWYtYm9keS9pZi1ib2R5L2I9XCIsXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keS9iPVwiLFxuICAgICAgICAgICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImlnbm9yZWRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiPVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5L2lmLWJvZHkvYT1cIixcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvaWYtYm9keS9pZi1ib2R5L2E9XCIsXG4gICAgICAgICAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiaWdub3JlZFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCI9XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZXNcIixcbiAgICAgICAgICAgICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keToxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keS9iPVwiLFxuICAgICAgICAgICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImpzb25cIjogXCI0NlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtmbG93SW5wdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHMvaWYtYm9keS9pZi1ib2R5OjJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvaWYtYm9keS9pZi1ib2R5L2E9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwianNvblwiOiBcIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya2Zsb3dJbnB1dE5hbWVcIjogXCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29udHJvbFwiOiBcImlmXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVzXCIsXG4gICAgICAgICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5OjFcIixcbiAgICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5L2I9XCIsXG4gICAgICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiZGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICBcImpzb25cIjogXCI0M1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3b3JrZmxvd0lucHV0TmFtZVwiOiBcImJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5OjJcIixcbiAgICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5Lz5cIixcbiAgICAgICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid29ya2Zsb3dJbnB1dE5hbWVcIjogXCJhXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzL2lmLWJvZHk6MVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzL2lmLWJvZHk6M1wiLFxuICAgICAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keVwiLFxuICAgICAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbmRpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5OjJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHMvaWYtYm9keToxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJiXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3b3JrZmxvd0lucHV0TmFtZVwiOiBcImFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY29udHJvbFwiOiBcImlmXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImJvZHlcIjoge1xuICAgICAgICBcImtpbmRcIjogXCJub2Rlc1wiLFxuICAgICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6MVwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYS1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgXCJqc29uXCI6IFwiNDJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6MlwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYi1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6M1wiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvPlwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjFcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICBcImpzb25cIjogXCI0MFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czo0XCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5XCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czozXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjJcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czoxXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImFcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdXG59IiwgImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuLyoqIEVuc3VyZSB0aGUgaXRlbSBpcyBhbHdheXMgdGhlIGxhc3QgcmVuZGVyZWQgdmFsdWUgKi9cbmV4cG9ydCBjb25zdCB1c2VTdGFibGUgPSA8VD4oc3RhYmxlOiBUKSA9PiB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YWJsZSk7XG4gICAgcmVmLmN1cnJlbnQgPSBzdGFibGU7XG4gICAgcmV0dXJuIHJlZjtcbn07XG5cbi8qKiBFbnN1cmUgdGhlIGNhbGxiYWNrIGlzIGFsd2F5cyB0aGUgbGFzdCByZW5kZXJlZCBjYWxsYmFjaywgc28gaXQgaGFzIHJlZmVyZW5jZSB0byB0aGUgbGFzdCBzdGF0ZVxuICpcbiAqIE5vIG5lZWQgZm9yIGRlcGVuZGVuY2llcywgdGhpcyB3aWxsIHNpbXBseSBoYXZlIGFjY2VzcyB0byB0aGUgdmFsdWVzIHRoYXQgZXhpc3RlZCBpbiB0aGUgcmVuZGVyXG4gKiB3aGVuIGl0IHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgbGFzdCByZW5kZXIuXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VTdGFibGVDYWxsYmFjayA9IDxUQXJncyBleHRlbmRzIHVua25vd25bXSwgVFJldHVybj4oXG4gICAgc3RhYmxlOiAoLi4uYXJnczogVEFyZ3MpID0+IFRSZXR1cm4sXG4pID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhYmxlKTtcbiAgICByZWYuY3VycmVudCA9IHN0YWJsZTtcbiAgICBjb25zdCBjYWxsYmFjayA9IHVzZVJlZigoLi4uYXJnczogVEFyZ3MpID0+IHJlZi5jdXJyZW50KC4uLmFyZ3MpKTtcbiAgICByZXR1cm4gY2FsbGJhY2suY3VycmVudDtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgZGVsYXkgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlQ29udGV4dCwgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7IE5vZGVJbnN0YW5jZXNWaWV3IH0gZnJvbSAnLi9ub2RlLWluc3RhbmNlLXZpZXcnO1xuaW1wb3J0IHsgUGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dCwgUGlwZVZpZXdIb3N0LCBjcmVhdGVQaXBlRW5kcG9pbnRzUmVnaXN0cnkgfSBmcm9tICcuL3BpcGVzJztcbmltcG9ydCB7IFdvcmtGbG93VmlldyB9IGZyb20gJy4vd29yay1mbG93LXZpZXcnO1xuaW1wb3J0IHsgbG9hZFJ1bnRpbWUgfSBmcm9tICcuLi9hbmFseXNpcy9sb2FkLWRhdGEnO1xuaW1wb3J0IHsgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgV29ya0NhbnZhc1ZpZXcgPSAoeyB3b3JrZmxvdyB9OiB7IHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3cgfSkgPT4ge1xuICAgIGNvbnN0IG5vZGVJbnN0YW5jZXNEYXRhc2V0UmVmID0gdXNlUmVmKGxvYWRSdW50aW1lKHdvcmtmbG93KS5kYXRhc2V0KTtcbiAgICBjb25zdCBub2RlSW5zdGFuY2VzID0gbm9kZUluc3RhbmNlc0RhdGFzZXRSZWYuY3VycmVudC5yb290Tm9kZUluc3RhbmNlcztcblxuICAgIGNvbnN0IHRhYnMgPSBbYHdvcmstZmxvd2AsIGBub2RlLWluc3RhbmNlc2BdIGFzIGNvbnN0O1xuICAgIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZShgbm9kZS1pbnN0YW5jZXNgIGFzICh0eXBlb2YgdGFicylbbnVtYmVyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLXNsYXRlLTkwMCB3LWZ1bGwgaC1mdWxsIG1heC1oLVsxMDB2aF0gb3ZlcmZsb3ctaGlkZGVuJz5cbiAgICAgICAgICAgIDxNb3ZlYWJsZVZpZXdcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uTW92ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG1vdXNlQnV0dG9uPXtNb3VzZUJ1dHRvbi5NaWRkbGV9XG4gICAgICAgICAgICAgICAgZW5hYmxlU2NhbGluZ1xuICAgICAgICAgICAgICAgIHdob2xlQ2FudmFzXG4gICAgICAgICAgICAgICAgb3V0ZXJDbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwnXG4gICAgICAgICAgICAgICAgaW5uZXJDbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwnXG4gICAgICAgICAgICAgICAgSGVhZGVyQ29tcG9uZW50PXt1c2VTdGFibGVDYWxsYmFjaygoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYnMubWFwKHggPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9eygpID0+IHNldFRhYih4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMSBtLTEgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSBib3JkZXItZ3JheS04MDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiID09PSB4ID8gYGAgOiBgb3BhY2l0eS01MGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWdyYXktODAwICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIgPT09IHggPyBgYCA6IGBvcGFjaXR5LTUwYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBpcGVWaWV3Q29udGV4dEhvc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYiA9PT0gYHdvcmstZmxvd2AgJiYgPFdvcmtGbG93VmlldyB3b3JrZmxvdz17d29ya2Zsb3d9IGZ1bGwgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFiID09PSBgbm9kZS1pbnN0YW5jZXNgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZUluc3RhbmNlc1ZpZXcgbm9kZUluc3RhbmNlcz17bm9kZUluc3RhbmNlc30gZnVsbCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvUGlwZVZpZXdDb250ZXh0SG9zdD5cbiAgICAgICAgICAgIDwvTW92ZWFibGVWaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IFBpcGVWaWV3Q29udGV4dEhvc3QgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBKU1guRWxlbWVudCB9KSA9PiB7XG4gICAgY29uc3Qgdmlld1JlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBWaWV3KTtcbiAgICBjb25zdCBob3N0UmVmID0gdXNlUmVmKG5ldyBTdWJqZWN0PFZpZXc+KCkpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VSZWYoY3JlYXRlUGlwZUVuZHBvaW50c1JlZ2lzdHJ5KCkpO1xuXG4gICAgY29uc3QgW3BpcGVzLCBzZXRQaXBlc10gPSB1c2VTdGF0ZShjb250ZXh0LmN1cnJlbnQucGlwZXMudmFsdWUpO1xuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF2aWV3UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmN1cnJlbnQuaG9zdFZpZXcgPSB2aWV3UmVmLmN1cnJlbnQ7XG4gICAgICAgIGhvc3RSZWYuY3VycmVudC5uZXh0KHZpZXdSZWYuY3VycmVudCk7XG5cbiAgICAgICAgY29uc3Qgc3ViID0gY29udGV4dC5jdXJyZW50LnBpcGVzLnN1YnNjcmliZSh2ID0+IHtcbiAgICAgICAgICAgIHNldFBpcGVzKHYpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0UGlwZXMocGlwZXMpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSwgWyF2aWV3UmVmLmN1cnJlbnRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0LmN1cnJlbnR9PlxuICAgICAgICAgICAgPFZpZXcgcmVmPXt2aWV3UmVmfSBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwnPlxuICAgICAgICAgICAgICAgIDxNb3ZlYWJsZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICAgICAgICAgIHsoeyBwb3NpdGlvbjogY29udGFpbmVyUG9zaXRpb24gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmVhYmxlQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBjb250YWluZXJQb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvbGVDYW52YXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZVZpZXdIb3N0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb3ZlYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Nb3ZlYWJsZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvUGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcbiIsICIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlO1xuICAgIGlmIChhc3luYykge1xuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xuICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XG4gICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG59O1xuIiwgIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWU6IGFueSk6IHZhbHVlIGlzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsICIvKipcbiAqIFVzZWQgdG8gY3JlYXRlIEVycm9yIHN1YmNsYXNzZXMgdW50aWwgdGhlIGNvbW11bml0eSBtb3ZlcyBhd2F5IGZyb20gRVM1LlxuICpcbiAqIFRoaXMgaXMgYmVjYXVzZSBjb21waWxpbmcgZnJvbSBUeXBlU2NyaXB0IGRvd24gdG8gRVM1IGhhcyBpc3N1ZXMgd2l0aCBzdWJjbGFzc2luZyBFcnJvcnNcbiAqIGFzIHdlbGwgYXMgb3RoZXIgYnVpbHQtaW4gdHlwZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTIxMjNcbiAqXG4gKiBAcGFyYW0gY3JlYXRlSW1wbCBBIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBhY3R1YWwgY29uc3RydWN0b3IgaW1wbGVtZW50YXRpb24uIFRoZSByZXR1cm5lZFxuICogZnVuY3Rpb24gc2hvdWxkIGJlIGEgbmFtZWQgZnVuY3Rpb24gdGhhdCBjYWxscyBgX3N1cGVyYCBpbnRlcm5hbGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXJyb3JDbGFzczxUPihjcmVhdGVJbXBsOiAoX3N1cGVyOiBhbnkpID0+IGFueSk6IFQge1xuICBjb25zdCBfc3VwZXIgPSAoaW5zdGFuY2U6IGFueSkgPT4ge1xuICAgIEVycm9yLmNhbGwoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gIH07XG5cbiAgY29uc3QgY3RvckZ1bmMgPSBjcmVhdGVJbXBsKF9zdXBlcik7XG4gIGN0b3JGdW5jLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgY3RvckZ1bmMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvckZ1bmM7XG4gIHJldHVybiBjdG9yRnVuYztcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcblxuZXhwb3J0IGludGVyZmFjZSBVbnN1YnNjcmlwdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICByZWFkb25seSBlcnJvcnM6IGFueVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuc3Vic2NyaXB0aW9uRXJyb3JDdG9yIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbC4gRG8gbm90IGNvbnN0cnVjdCBlcnJvciBpbnN0YW5jZXMuXG4gICAqIENhbm5vdCBiZSB0YWdnZWQgYXMgaW50ZXJuYWw6IGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdGl2ZVgvcnhqcy9pc3N1ZXMvNjI2OVxuICAgKi9cbiAgbmV3IChlcnJvcnM6IGFueVtdKTogVW5zdWJzY3JpcHRpb25FcnJvcjtcbn1cblxuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiBvbmUgb3IgbW9yZSBlcnJvcnMgaGF2ZSBvY2N1cnJlZCBkdXJpbmcgdGhlXG4gKiBgdW5zdWJzY3JpYmVgIG9mIGEge0BsaW5rIFN1YnNjcmlwdGlvbn0uXG4gKi9cbmV4cG9ydCBjb25zdCBVbnN1YnNjcmlwdGlvbkVycm9yOiBVbnN1YnNjcmlwdGlvbkVycm9yQ3RvciA9IGNyZWF0ZUVycm9yQ2xhc3MoXG4gIChfc3VwZXIpID0+XG4gICAgZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwodGhpczogYW55LCBlcnJvcnM6IChFcnJvciB8IHN0cmluZylbXSkge1xuICAgICAgX3N1cGVyKHRoaXMpO1xuICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3JzXG4gICAgICAgID8gYCR7ZXJyb3JzLmxlbmd0aH0gZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcbiR7ZXJyb3JzLm1hcCgoZXJyLCBpKSA9PiBgJHtpICsgMX0pICR7ZXJyLnRvU3RyaW5nKCl9YCkuam9pbignXFxuICAnKX1gXG4gICAgICAgIDogJyc7XG4gICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG4pO1xuIiwgIi8qKlxuICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gYW4gYXJyYXksIG11dGF0aW5nIGl0LlxuICogQHBhcmFtIGFyciBUaGUgYXJyYXkgdG8gcmVtb3ZlIHRoZSBpdGVtIGZyb21cbiAqIEBwYXJhbSBpdGVtIFRoZSBpdGVtIHRvIHJlbW92ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJyUmVtb3ZlPFQ+KGFycjogVFtdIHwgdW5kZWZpbmVkIHwgbnVsbCwgaXRlbTogVCkge1xuICBpZiAoYXJyKSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAwIDw9IGluZGV4ICYmIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IFVuc3Vic2NyaXB0aW9uRXJyb3IgfSBmcm9tICcuL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25MaWtlLCBUZWFyZG93bkxvZ2ljLCBVbnN1YnNjcmliYWJsZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGRpc3Bvc2FibGUgcmVzb3VyY2UsIHN1Y2ggYXMgdGhlIGV4ZWN1dGlvbiBvZiBhbiBPYnNlcnZhYmxlLiBBXG4gKiBTdWJzY3JpcHRpb24gaGFzIG9uZSBpbXBvcnRhbnQgbWV0aG9kLCBgdW5zdWJzY3JpYmVgLCB0aGF0IHRha2VzIG5vIGFyZ3VtZW50XG4gKiBhbmQganVzdCBkaXNwb3NlcyB0aGUgcmVzb3VyY2UgaGVsZCBieSB0aGUgc3Vic2NyaXB0aW9uLlxuICpcbiAqIEFkZGl0aW9uYWxseSwgc3Vic2NyaXB0aW9ucyBtYXkgYmUgZ3JvdXBlZCB0b2dldGhlciB0aHJvdWdoIHRoZSBgYWRkKClgXG4gKiBtZXRob2QsIHdoaWNoIHdpbGwgYXR0YWNoIGEgY2hpbGQgU3Vic2NyaXB0aW9uIHRvIHRoZSBjdXJyZW50IFN1YnNjcmlwdGlvbi5cbiAqIFdoZW4gYSBTdWJzY3JpcHRpb24gaXMgdW5zdWJzY3JpYmVkLCBhbGwgaXRzIGNoaWxkcmVuIChhbmQgaXRzIGdyYW5kY2hpbGRyZW4pXG4gKiB3aWxsIGJlIHVuc3Vic2NyaWJlZCBhcyB3ZWxsLlxuICpcbiAqIEBjbGFzcyBTdWJzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvbiBpbXBsZW1lbnRzIFN1YnNjcmlwdGlvbkxpa2Uge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgcHVibGljIHN0YXRpYyBFTVBUWSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZW1wdHkgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgZW1wdHkuY2xvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gZW1wdHk7XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIEEgZmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoaXMgU3Vic2NyaXB0aW9uIGhhcyBhbHJlYWR5IGJlZW4gdW5zdWJzY3JpYmVkLlxuICAgKi9cbiAgcHVibGljIGNsb3NlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3BhcmVudGFnZTogU3Vic2NyaXB0aW9uW10gfCBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgcmVnaXN0ZXJlZCBmaW5hbGl6ZXJzIHRvIGV4ZWN1dGUgdXBvbiB1bnN1YnNjcmlwdGlvbi4gQWRkaW5nIGFuZCByZW1vdmluZyBmcm9tIHRoaXNcbiAgICogbGlzdCBvY2N1cnMgaW4gdGhlIHtAbGluayAjYWRkfSBhbmQge0BsaW5rICNyZW1vdmV9IG1ldGhvZHMuXG4gICAqL1xuICBwcml2YXRlIF9maW5hbGl6ZXJzOiBFeGNsdWRlPFRlYXJkb3duTG9naWMsIHZvaWQ+W10gfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogQHBhcmFtIGluaXRpYWxUZWFyZG93biBBIGZ1bmN0aW9uIGV4ZWN1dGVkIGZpcnN0IGFzIHBhcnQgb2YgdGhlIGZpbmFsaXphdGlvblxuICAgKiBwcm9jZXNzIHRoYXQgaXMga2lja2VkIG9mZiB3aGVuIHtAbGluayAjdW5zdWJzY3JpYmV9IGlzIGNhbGxlZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5pdGlhbFRlYXJkb3duPzogKCkgPT4gdm9pZCkge31cblxuICAvKipcbiAgICogRGlzcG9zZXMgdGhlIHJlc291cmNlcyBoZWxkIGJ5IHRoZSBzdWJzY3JpcHRpb24uIE1heSwgZm9yIGluc3RhbmNlLCBjYW5jZWxcbiAgICogYW4gb25nb2luZyBPYnNlcnZhYmxlIGV4ZWN1dGlvbiBvciBjYW5jZWwgYW55IG90aGVyIHR5cGUgb2Ygd29yayB0aGF0XG4gICAqIHN0YXJ0ZWQgd2hlbiB0aGUgU3Vic2NyaXB0aW9uIHdhcyBjcmVhdGVkLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgbGV0IGVycm9yczogYW55W10gfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG5cbiAgICAgIC8vIFJlbW92ZSB0aGlzIGZyb20gaXQncyBwYXJlbnRzLlxuICAgICAgY29uc3QgeyBfcGFyZW50YWdlIH0gPSB0aGlzO1xuICAgICAgaWYgKF9wYXJlbnRhZ2UpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHBhcmVudCBvZiBfcGFyZW50YWdlKSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfcGFyZW50YWdlLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGluaXRpYWxUZWFyZG93bjogaW5pdGlhbEZpbmFsaXplciB9ID0gdGhpcztcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGluaXRpYWxGaW5hbGl6ZXIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaW5pdGlhbEZpbmFsaXplcigpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZXJyb3JzID0gZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IgPyBlLmVycm9ycyA6IFtlXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IF9maW5hbGl6ZXJzIH0gPSB0aGlzO1xuICAgICAgaWYgKF9maW5hbGl6ZXJzKSB7XG4gICAgICAgIHRoaXMuX2ZpbmFsaXplcnMgPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGZpbmFsaXplciBvZiBfZmluYWxpemVycykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBleGVjRmluYWxpemVyKGZpbmFsaXplcik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgPz8gW107XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lcnIuZXJyb3JzXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3IoZXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGZpbmFsaXplciB0byB0aGlzIHN1YnNjcmlwdGlvbiwgc28gdGhhdCBmaW5hbGl6YXRpb24gd2lsbCBiZSB1bnN1YnNjcmliZWQvY2FsbGVkXG4gICAqIHdoZW4gdGhpcyBzdWJzY3JpcHRpb24gaXMgdW5zdWJzY3JpYmVkLiBJZiB0aGlzIHN1YnNjcmlwdGlvbiBpcyBhbHJlYWR5IHtAbGluayAjY2xvc2VkfSxcbiAgICogYmVjYXVzZSBpdCBoYXMgYWxyZWFkeSBiZWVuIHVuc3Vic2NyaWJlZCwgdGhlbiB3aGF0ZXZlciBmaW5hbGl6ZXIgaXMgcGFzc2VkIHRvIGl0XG4gICAqIHdpbGwgYXV0b21hdGljYWxseSBiZSBleGVjdXRlZCAodW5sZXNzIHRoZSBmaW5hbGl6ZXIgaXRzZWxmIGlzIGFsc28gYSBjbG9zZWQgc3Vic2NyaXB0aW9uKS5cbiAgICpcbiAgICogQ2xvc2VkIFN1YnNjcmlwdGlvbnMgY2Fubm90IGJlIGFkZGVkIGFzIGZpbmFsaXplcnMgdG8gYW55IHN1YnNjcmlwdGlvbi4gQWRkaW5nIGEgY2xvc2VkXG4gICAqIHN1YnNjcmlwdGlvbiB0byBhIGFueSBzdWJzY3JpcHRpb24gd2lsbCByZXN1bHQgaW4gbm8gb3BlcmF0aW9uLiAoQSBub29wKS5cbiAgICpcbiAgICogQWRkaW5nIGEgc3Vic2NyaXB0aW9uIHRvIGl0c2VsZiwgb3IgYWRkaW5nIGBudWxsYCBvciBgdW5kZWZpbmVkYCB3aWxsIG5vdCBwZXJmb3JtIGFueVxuICAgKiBvcGVyYXRpb24gYXQgYWxsLiAoQSBub29wKS5cbiAgICpcbiAgICogYFN1YnNjcmlwdGlvbmAgaW5zdGFuY2VzIHRoYXQgYXJlIGFkZGVkIHRvIHRoaXMgaW5zdGFuY2Ugd2lsbCBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGVtc2VsdmVzXG4gICAqIGlmIHRoZXkgYXJlIHVuc3Vic2NyaWJlZC4gRnVuY3Rpb25zIGFuZCB7QGxpbmsgVW5zdWJzY3JpYmFibGV9IG9iamVjdHMgdGhhdCB5b3Ugd2lzaCB0byByZW1vdmVcbiAgICogd2lsbCBuZWVkIHRvIGJlIHJlbW92ZWQgbWFudWFsbHkgd2l0aCB7QGxpbmsgI3JlbW92ZX1cbiAgICpcbiAgICogQHBhcmFtIHRlYXJkb3duIFRoZSBmaW5hbGl6YXRpb24gbG9naWMgdG8gYWRkIHRvIHRoaXMgc3Vic2NyaXB0aW9uLlxuICAgKi9cbiAgYWRkKHRlYXJkb3duOiBUZWFyZG93bkxvZ2ljKTogdm9pZCB7XG4gICAgLy8gT25seSBhZGQgdGhlIGZpbmFsaXplciBpZiBpdCdzIG5vdCB1bmRlZmluZWRcbiAgICAvLyBhbmQgZG9uJ3QgYWRkIGEgc3Vic2NyaXB0aW9uIHRvIGl0c2VsZi5cbiAgICBpZiAodGVhcmRvd24gJiYgdGVhcmRvd24gIT09IHRoaXMpIHtcbiAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAvLyBJZiB0aGlzIHN1YnNjcmlwdGlvbiBpcyBhbHJlYWR5IGNsb3NlZCxcbiAgICAgICAgLy8gZXhlY3V0ZSB3aGF0ZXZlciBmaW5hbGl6ZXIgaXMgaGFuZGVkIHRvIGl0IGF1dG9tYXRpY2FsbHkuXG4gICAgICAgIGV4ZWNGaW5hbGl6ZXIodGVhcmRvd24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRlYXJkb3duIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgLy8gV2UgZG9uJ3QgYWRkIGNsb3NlZCBzdWJzY3JpcHRpb25zLCBhbmQgd2UgZG9uJ3QgYWRkIHRoZSBzYW1lIHN1YnNjcmlwdGlvblxuICAgICAgICAgIC8vIHR3aWNlLiBTdWJzY3JpcHRpb24gdW5zdWJzY3JpYmUgaXMgaWRlbXBvdGVudC5cbiAgICAgICAgICBpZiAodGVhcmRvd24uY2xvc2VkIHx8IHRlYXJkb3duLl9oYXNQYXJlbnQodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGVhcmRvd24uX2FkZFBhcmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICAodGhpcy5fZmluYWxpemVycyA9IHRoaXMuX2ZpbmFsaXplcnMgPz8gW10pLnB1c2godGVhcmRvd24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIGEgdGhpcyBzdWJzY3JpcHRpb24gYWxyZWFkeSBoYXMgYSBwYXJ0aWN1bGFyIHBhcmVudC5cbiAgICogVGhpcyB3aWxsIHNpZ25hbCB0aGF0IHRoaXMgc3Vic2NyaXB0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIHBhcmVudCBpbiBxdWVzdGlvbi5cbiAgICogQHBhcmFtIHBhcmVudCB0aGUgcGFyZW50IHRvIGNoZWNrIGZvclxuICAgKi9cbiAgcHJpdmF0ZSBfaGFzUGFyZW50KHBhcmVudDogU3Vic2NyaXB0aW9uKSB7XG4gICAgY29uc3QgeyBfcGFyZW50YWdlIH0gPSB0aGlzO1xuICAgIHJldHVybiBfcGFyZW50YWdlID09PSBwYXJlbnQgfHwgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgJiYgX3BhcmVudGFnZS5pbmNsdWRlcyhwYXJlbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcGFyZW50IHRvIHRoaXMgc3Vic2NyaXB0aW9uIHNvIGl0IGNhbiBiZSByZW1vdmVkIGZyb20gdGhlIHBhcmVudCBpZiBpdFxuICAgKiB1bnN1YnNjcmliZXMgb24gaXQncyBvd24uXG4gICAqXG4gICAqIE5PVEU6IFRISVMgQVNTVU1FUyBUSEFUIHtAbGluayBfaGFzUGFyZW50fSBIQVMgQUxSRUFEWSBCRUVOIENIRUNLRUQuXG4gICAqIEBwYXJhbSBwYXJlbnQgVGhlIHBhcmVudCBzdWJzY3JpcHRpb24gdG8gYWRkXG4gICAqL1xuICBwcml2YXRlIF9hZGRQYXJlbnQocGFyZW50OiBTdWJzY3JpcHRpb24pIHtcbiAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgdGhpcy5fcGFyZW50YWdlID0gQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSA/IChfcGFyZW50YWdlLnB1c2gocGFyZW50KSwgX3BhcmVudGFnZSkgOiBfcGFyZW50YWdlID8gW19wYXJlbnRhZ2UsIHBhcmVudF0gOiBwYXJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGEgY2hpbGQgd2hlbiBpdCBpcyByZW1vdmVkIHZpYSB7QGxpbmsgI3JlbW92ZX0uXG4gICAqIEBwYXJhbSBwYXJlbnQgVGhlIHBhcmVudCB0byByZW1vdmVcbiAgICovXG4gIHByaXZhdGUgX3JlbW92ZVBhcmVudChwYXJlbnQ6IFN1YnNjcmlwdGlvbikge1xuICAgIGNvbnN0IHsgX3BhcmVudGFnZSB9ID0gdGhpcztcbiAgICBpZiAoX3BhcmVudGFnZSA9PT0gcGFyZW50KSB7XG4gICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgYXJyUmVtb3ZlKF9wYXJlbnRhZ2UsIHBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBmaW5hbGl6ZXIgZnJvbSB0aGlzIHN1YnNjcmlwdGlvbiB0aGF0IHdhcyBwcmV2aW91c2x5IGFkZGVkIHdpdGggdGhlIHtAbGluayAjYWRkfSBtZXRob2QuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBgU3Vic2NyaXB0aW9uYCBpbnN0YW5jZXMsIHdoZW4gdW5zdWJzY3JpYmVkLCB3aWxsIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZW1zZWx2ZXNcbiAgICogZnJvbSBldmVyeSBvdGhlciBgU3Vic2NyaXB0aW9uYCB0aGV5IGhhdmUgYmVlbiBhZGRlZCB0by4gVGhpcyBtZWFucyB0aGF0IHVzaW5nIHRoZSBgcmVtb3ZlYCBtZXRob2RcbiAgICogaXMgbm90IGEgY29tbW9uIHRoaW5nIGFuZCBzaG91bGQgYmUgdXNlZCB0aG91Z2h0ZnVsbHkuXG4gICAqXG4gICAqIElmIHlvdSBhZGQgdGhlIHNhbWUgZmluYWxpemVyIGluc3RhbmNlIG9mIGEgZnVuY3Rpb24gb3IgYW4gdW5zdWJzY3JpYmFibGUgb2JqZWN0IHRvIGEgYFN1YnNjcmlwdGlvbmAgaW5zdGFuY2VcbiAgICogbW9yZSB0aGFuIG9uY2UsIHlvdSB3aWxsIG5lZWQgdG8gY2FsbCBgcmVtb3ZlYCB0aGUgc2FtZSBudW1iZXIgb2YgdGltZXMgdG8gcmVtb3ZlIGFsbCBpbnN0YW5jZXMuXG4gICAqXG4gICAqIEFsbCBmaW5hbGl6ZXIgaW5zdGFuY2VzIGFyZSByZW1vdmVkIHRvIGZyZWUgdXAgbWVtb3J5IHVwb24gdW5zdWJzY3JpcHRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB0ZWFyZG93biBUaGUgZmluYWxpemVyIHRvIHJlbW92ZSBmcm9tIHRoaXMgc3Vic2NyaXB0aW9uXG4gICAqL1xuICByZW1vdmUodGVhcmRvd246IEV4Y2x1ZGU8VGVhcmRvd25Mb2dpYywgdm9pZD4pOiB2b2lkIHtcbiAgICBjb25zdCB7IF9maW5hbGl6ZXJzIH0gPSB0aGlzO1xuICAgIF9maW5hbGl6ZXJzICYmIGFyclJlbW92ZShfZmluYWxpemVycywgdGVhcmRvd24pO1xuXG4gICAgaWYgKHRlYXJkb3duIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0ZWFyZG93bi5fcmVtb3ZlUGFyZW50KHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgRU1QVFlfU1VCU0NSSVBUSU9OID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTdWJzY3JpcHRpb24odmFsdWU6IGFueSk6IHZhbHVlIGlzIFN1YnNjcmlwdGlvbiB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24gfHxcbiAgICAodmFsdWUgJiYgJ2Nsb3NlZCcgaW4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5yZW1vdmUpICYmIGlzRnVuY3Rpb24odmFsdWUuYWRkKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnVuc3Vic2NyaWJlKSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gZXhlY0ZpbmFsaXplcihmaW5hbGl6ZXI6IFVuc3Vic2NyaWJhYmxlIHwgKCgpID0+IHZvaWQpKSB7XG4gIGlmIChpc0Z1bmN0aW9uKGZpbmFsaXplcikpIHtcbiAgICBmaW5hbGl6ZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBmaW5hbGl6ZXIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgR2xvYmFsQ29uZmlnfSBvYmplY3QgZm9yIFJ4SlMuIEl0IGlzIHVzZWQgdG8gY29uZmlndXJlIHRoaW5nc1xuICogbGlrZSBob3cgdG8gcmVhY3Qgb24gdW5oYW5kbGVkIGVycm9ycy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbmZpZzogR2xvYmFsQ29uZmlnID0ge1xuICBvblVuaGFuZGxlZEVycm9yOiBudWxsLFxuICBvblN0b3BwZWROb3RpZmljYXRpb246IG51bGwsXG4gIFByb21pc2U6IHVuZGVmaW5lZCxcbiAgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZzogZmFsc2UsXG4gIHVzZURlcHJlY2F0ZWROZXh0Q29udGV4dDogZmFsc2UsXG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIFJ4SlMsIHVzZWQgdG8gY29uZmlndXJlIHRoaW5nc1xuICogbGlrZSBob3cgdG8gcmVhY3Qgb24gdW5oYW5kbGVkIGVycm9ycy4gQWNjZXNzaWJsZSB2aWEge0BsaW5rIGNvbmZpZ31cbiAqIG9iamVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxDb25maWcge1xuICAvKipcbiAgICogQSByZWdpc3RyYXRpb24gcG9pbnQgZm9yIHVuaGFuZGxlZCBlcnJvcnMgZnJvbSBSeEpTLiBUaGVzZSBhcmUgZXJyb3JzIHRoYXRcbiAgICogY2Fubm90IHdlcmUgbm90IGhhbmRsZWQgYnkgY29uc3VtaW5nIGNvZGUgaW4gdGhlIHVzdWFsIHN1YnNjcmlwdGlvbiBwYXRoLiBGb3JcbiAgICogZXhhbXBsZSwgaWYgeW91IGhhdmUgdGhpcyBjb25maWd1cmVkLCBhbmQgeW91IHN1YnNjcmliZSB0byBhbiBvYnNlcnZhYmxlIHdpdGhvdXRcbiAgICogcHJvdmlkaW5nIGFuIGVycm9yIGhhbmRsZXIsIGVycm9ycyBmcm9tIHRoYXQgc3Vic2NyaXB0aW9uIHdpbGwgZW5kIHVwIGhlcmUuIFRoaXNcbiAgICogd2lsbCBfYWx3YXlzXyBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkgb24gYW5vdGhlciBqb2IgaW4gdGhlIHJ1bnRpbWUuIFRoaXMgaXMgYmVjYXVzZVxuICAgKiB3ZSBkbyBub3Qgd2FudCBlcnJvcnMgdGhyb3duIGluIHRoaXMgdXNlci1jb25maWd1cmVkIGhhbmRsZXIgdG8gaW50ZXJmZXJlIHdpdGggdGhlXG4gICAqIGJlaGF2aW9yIG9mIHRoZSBsaWJyYXJ5LlxuICAgKi9cbiAgb25VbmhhbmRsZWRFcnJvcjogKChlcnI6IGFueSkgPT4gdm9pZCkgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBBIHJlZ2lzdHJhdGlvbiBwb2ludCBmb3Igbm90aWZpY2F0aW9ucyB0aGF0IGNhbm5vdCBiZSBzZW50IHRvIHN1YnNjcmliZXJzIGJlY2F1c2UgdGhleVxuICAgKiBoYXZlIGNvbXBsZXRlZCwgZXJyb3JlZCBvciBoYXZlIGJlZW4gZXhwbGljaXRseSB1bnN1YnNjcmliZWQuIEJ5IGRlZmF1bHQsIG5leHQsIGNvbXBsZXRlXG4gICAqIGFuZCBlcnJvciBub3RpZmljYXRpb25zIHNlbnQgdG8gc3RvcHBlZCBzdWJzY3JpYmVycyBhcmUgbm9vcHMuIEhvd2V2ZXIsIHNvbWV0aW1lcyBjYWxsZXJzXG4gICAqIG1pZ2h0IHdhbnQgYSBkaWZmZXJlbnQgYmVoYXZpb3IuIEZvciBleGFtcGxlLCB3aXRoIHNvdXJjZXMgdGhhdCBhdHRlbXB0IHRvIHJlcG9ydCBlcnJvcnNcbiAgICogdG8gc3RvcHBlZCBzdWJzY3JpYmVycywgYSBjYWxsZXIgY2FuIGNvbmZpZ3VyZSBSeEpTIHRvIHRocm93IGFuIHVuaGFuZGxlZCBlcnJvciBpbnN0ZWFkLlxuICAgKiBUaGlzIHdpbGwgX2Fsd2F5c18gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5IG9uIGFub3RoZXIgam9iIGluIHRoZSBydW50aW1lLiBUaGlzIGlzIGJlY2F1c2VcbiAgICogd2UgZG8gbm90IHdhbnQgZXJyb3JzIHRocm93biBpbiB0aGlzIHVzZXItY29uZmlndXJlZCBoYW5kbGVyIHRvIGludGVyZmVyZSB3aXRoIHRoZVxuICAgKiBiZWhhdmlvciBvZiB0aGUgbGlicmFyeS5cbiAgICovXG4gIG9uU3RvcHBlZE5vdGlmaWNhdGlvbjogKChub3RpZmljYXRpb246IE9ic2VydmFibGVOb3RpZmljYXRpb248YW55Piwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB2b2lkKSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBwcm9taXNlIGNvbnN0cnVjdG9yIHVzZWQgYnkgZGVmYXVsdCBmb3Ige0BsaW5rIE9ic2VydmFibGUjdG9Qcm9taXNlIHRvUHJvbWlzZX0gYW5kIHtAbGluayBPYnNlcnZhYmxlI2ZvckVhY2ggZm9yRWFjaH1cbiAgICogbWV0aG9kcy5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgQXMgb2YgdmVyc2lvbiA4LCBSeEpTIHdpbGwgbm8gbG9uZ2VyIHN1cHBvcnQgdGhpcyBzb3J0IG9mIGluamVjdGlvbiBvZiBhXG4gICAqIFByb21pc2UgY29uc3RydWN0b3IuIElmIHlvdSBuZWVkIGEgUHJvbWlzZSBpbXBsZW1lbnRhdGlvbiBvdGhlciB0aGFuIG5hdGl2ZSBwcm9taXNlcyxcbiAgICogcGxlYXNlIHBvbHlmaWxsL3BhdGNoIFByb21pc2UgYXMgeW91IHNlZSBhcHByb3ByaWF0ZS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LlxuICAgKi9cbiAgUHJvbWlzZT86IFByb21pc2VDb25zdHJ1Y3Rvckxpa2U7XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHR1cm5zIG9uIHN5bmNocm9ub3VzIGVycm9yIHJldGhyb3dpbmcsIHdoaWNoIGlzIGEgZGVwcmVjYXRlZCBiZWhhdmlvclxuICAgKiBpbiB2NiBhbmQgaGlnaGVyLiBUaGlzIGJlaGF2aW9yIGVuYWJsZXMgYmFkIHBhdHRlcm5zIGxpa2Ugd3JhcHBpbmcgYSBzdWJzY3JpYmVcbiAgICogY2FsbCBpbiBhIHRyeS9jYXRjaCBibG9jay4gSXQgYWxzbyBlbmFibGVzIHByb2R1Y2VyIGludGVyZmVyZW5jZSwgYSBuYXN0eSBidWdcbiAgICogd2hlcmUgYSBtdWx0aWNhc3QgY2FuIGJlIGJyb2tlbiBmb3IgYWxsIG9ic2VydmVycyBieSBhIGRvd25zdHJlYW0gY29uc3VtZXIgd2l0aFxuICAgKiBhbiB1bmhhbmRsZWQgZXJyb3IuIERPIE5PVCBVU0UgVEhJUyBGTEFHIFVOTEVTUyBJVCdTIE5FRURFRCBUTyBCVVkgVElNRVxuICAgKiBGT1IgTUlHUkFUSU9OIFJFQVNPTlMuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIEFzIG9mIHZlcnNpb24gOCwgUnhKUyB3aWxsIG5vIGxvbmdlciBzdXBwb3J0IHN5bmNocm9ub3VzIHRocm93aW5nXG4gICAqIG9mIHVuaGFuZGxlZCBlcnJvcnMuIEFsbCBlcnJvcnMgd2lsbCBiZSB0aHJvd24gb24gYSBzZXBhcmF0ZSBjYWxsIHN0YWNrIHRvIHByZXZlbnQgYmFkXG4gICAqIGJlaGF2aW9ycyBkZXNjcmliZWQgYWJvdmUuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIGVuYWJsZXMgYW4gYXMtb2YteWV0IHVuZG9jdW1lbnRlZCBmZWF0dXJlIGZyb20gdjU6IFRoZSBhYmlsaXR5IHRvIGFjY2Vzc1xuICAgKiBgdW5zdWJzY3JpYmUoKWAgdmlhIGB0aGlzYCBjb250ZXh0IGluIGBuZXh0YCBmdW5jdGlvbnMgY3JlYXRlZCBpbiBvYnNlcnZlcnMgcGFzc2VkXG4gICAqIHRvIGBzdWJzY3JpYmVgLlxuICAgKlxuICAgKiBUaGlzIGlzIGJlaW5nIHJlbW92ZWQgYmVjYXVzZSB0aGUgcGVyZm9ybWFuY2Ugd2FzIHNldmVyZWx5IHByb2JsZW1hdGljLCBhbmQgaXQgY291bGQgYWxzbyBjYXVzZVxuICAgKiBpc3N1ZXMgd2hlbiB0eXBlcyBvdGhlciB0aGFuIFBPSk9zIGFyZSBwYXNzZWQgdG8gc3Vic2NyaWJlIGFzIHN1YnNjcmliZXJzLCBhcyB0aGV5IHdpbGwgbGlrZWx5IGhhdmVcbiAgICogdGhlaXIgYHRoaXNgIGNvbnRleHQgb3ZlcndyaXR0ZW4uXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIEFzIG9mIHZlcnNpb24gOCwgUnhKUyB3aWxsIG5vIGxvbmdlciBzdXBwb3J0IGFsdGVyaW5nIHRoZVxuICAgKiBjb250ZXh0IG9mIG5leHQgZnVuY3Rpb25zIHByb3ZpZGVkIGFzIHBhcnQgb2YgYW4gb2JzZXJ2ZXIgdG8gU3Vic2NyaWJlLiBJbnN0ZWFkLFxuICAgKiB5b3Ugd2lsbCBoYXZlIGFjY2VzcyB0byBhIHN1YnNjcmlwdGlvbiBvciBhIHNpZ25hbCBvciB0b2tlbiB0aGF0IHdpbGwgYWxsb3cgeW91IHRvIGRvIHRoaW5ncyBsaWtlXG4gICAqIHVuc3Vic2NyaWJlIGFuZCB0ZXN0IGNsb3NlZCBzdGF0dXMuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIHVzZURlcHJlY2F0ZWROZXh0Q29udGV4dDogYm9vbGVhbjtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRpbWVySGFuZGxlIH0gZnJvbSAnLi90aW1lckhhbmRsZSc7XG50eXBlIFNldFRpbWVvdXRGdW5jdGlvbiA9IChoYW5kbGVyOiAoKSA9PiB2b2lkLCB0aW1lb3V0PzogbnVtYmVyLCAuLi5hcmdzOiBhbnlbXSkgPT4gVGltZXJIYW5kbGU7XG50eXBlIENsZWFyVGltZW91dEZ1bmN0aW9uID0gKGhhbmRsZTogVGltZXJIYW5kbGUpID0+IHZvaWQ7XG5cbmludGVyZmFjZSBUaW1lb3V0UHJvdmlkZXIge1xuICBzZXRUaW1lb3V0OiBTZXRUaW1lb3V0RnVuY3Rpb247XG4gIGNsZWFyVGltZW91dDogQ2xlYXJUaW1lb3V0RnVuY3Rpb247XG4gIGRlbGVnYXRlOlxuICAgIHwge1xuICAgICAgICBzZXRUaW1lb3V0OiBTZXRUaW1lb3V0RnVuY3Rpb247XG4gICAgICAgIGNsZWFyVGltZW91dDogQ2xlYXJUaW1lb3V0RnVuY3Rpb247XG4gICAgICB9XG4gICAgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCB0aW1lb3V0UHJvdmlkZXI6IFRpbWVvdXRQcm92aWRlciA9IHtcbiAgLy8gV2hlbiBhY2Nlc3NpbmcgdGhlIGRlbGVnYXRlLCB1c2UgdGhlIHZhcmlhYmxlIHJhdGhlciB0aGFuIGB0aGlzYCBzbyB0aGF0XG4gIC8vIHRoZSBmdW5jdGlvbnMgY2FuIGJlIGNhbGxlZCB3aXRob3V0IGJlaW5nIGJvdW5kIHRvIHRoZSBwcm92aWRlci5cbiAgc2V0VGltZW91dChoYW5kbGVyOiAoKSA9PiB2b2lkLCB0aW1lb3V0PzogbnVtYmVyLCAuLi5hcmdzKSB7XG4gICAgY29uc3QgeyBkZWxlZ2F0ZSB9ID0gdGltZW91dFByb3ZpZGVyO1xuICAgIGlmIChkZWxlZ2F0ZT8uc2V0VGltZW91dCkge1xuICAgICAgcmV0dXJuIGRlbGVnYXRlLnNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCwgLi4uYXJncyk7XG4gICAgfVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQsIC4uLmFyZ3MpO1xuICB9LFxuICBjbGVhclRpbWVvdXQoaGFuZGxlKSB7XG4gICAgY29uc3QgeyBkZWxlZ2F0ZSB9ID0gdGltZW91dFByb3ZpZGVyO1xuICAgIHJldHVybiAoZGVsZWdhdGU/LmNsZWFyVGltZW91dCB8fCBjbGVhclRpbWVvdXQpKGhhbmRsZSBhcyBhbnkpO1xuICB9LFxuICBkZWxlZ2F0ZTogdW5kZWZpbmVkLFxufTtcbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi4vc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlcic7XG5cbi8qKlxuICogSGFuZGxlcyBhbiBlcnJvciBvbiBhbm90aGVyIGpvYiBlaXRoZXIgd2l0aCB0aGUgdXNlci1jb25maWd1cmVkIHtAbGluayBvblVuaGFuZGxlZEVycm9yfSxcbiAqIG9yIGJ5IHRocm93aW5nIGl0IG9uIHRoYXQgbmV3IGpvYiBzbyBpdCBjYW4gYmUgcGlja2VkIHVwIGJ5IGB3aW5kb3cub25lcnJvcmAsIGBwcm9jZXNzLm9uKCdlcnJvcicpYCwgZXRjLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCB3aGVuZXZlciB0aGVyZSBpcyBhbiBlcnJvciB0aGF0IGlzIG91dC1vZi1iYW5kIHdpdGggdGhlIHN1YnNjcmlwdGlvblxuICogb3Igd2hlbiBhbiBlcnJvciBoaXRzIGEgdGVybWluYWwgYm91bmRhcnkgb2YgdGhlIHN1YnNjcmlwdGlvbiBhbmQgbm8gZXJyb3IgaGFuZGxlciB3YXMgcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIGVyciB0aGUgZXJyb3IgdG8gcmVwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnI6IGFueSkge1xuICB0aW1lb3V0UHJvdmlkZXIuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgeyBvblVuaGFuZGxlZEVycm9yIH0gPSBjb25maWc7XG4gICAgaWYgKG9uVW5oYW5kbGVkRXJyb3IpIHtcbiAgICAgIC8vIEV4ZWN1dGUgdGhlIHVzZXItY29uZmlndXJlZCBlcnJvciBoYW5kbGVyLlxuICAgICAgb25VbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaHJvdyBzbyBpdCBpcyBwaWNrZWQgdXAgYnkgdGhlIHJ1bnRpbWUncyB1bmNhdWdodCBlcnJvciBtZWNoYW5pc20uXG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9KTtcbn1cbiIsICIvKiB0c2xpbnQ6ZGlzYWJsZTpuby1lbXB0eSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IH1cbiIsICJpbXBvcnQgeyBDb21wbGV0ZU5vdGlmaWNhdGlvbiwgTmV4dE5vdGlmaWNhdGlvbiwgRXJyb3JOb3RpZmljYXRpb24gfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBBIGNvbXBsZXRpb24gb2JqZWN0IG9wdGltaXplZCBmb3IgbWVtb3J5IHVzZSBhbmQgY3JlYXRlZCB0byBiZSB0aGVcbiAqIHNhbWUgXCJzaGFwZVwiIGFzIG90aGVyIG5vdGlmaWNhdGlvbnMgaW4gdjguXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IENPTVBMRVRFX05PVElGSUNBVElPTiA9ICgoKSA9PiBjcmVhdGVOb3RpZmljYXRpb24oJ0MnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCkgYXMgQ29tcGxldGVOb3RpZmljYXRpb24pKCk7XG5cbi8qKlxuICogSW50ZXJuYWwgdXNlIG9ubHkuIENyZWF0ZXMgYW4gb3B0aW1pemVkIGVycm9yIG5vdGlmaWNhdGlvbiB0aGF0IGlzIHRoZSBzYW1lIFwic2hhcGVcIlxuICogYXMgb3RoZXIgbm90aWZpY2F0aW9ucy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JOb3RpZmljYXRpb24oZXJyb3I6IGFueSk6IEVycm9yTm90aWZpY2F0aW9uIHtcbiAgcmV0dXJuIGNyZWF0ZU5vdGlmaWNhdGlvbignRScsIHVuZGVmaW5lZCwgZXJyb3IpIGFzIGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCB1c2Ugb25seS4gQ3JlYXRlcyBhbiBvcHRpbWl6ZWQgbmV4dCBub3RpZmljYXRpb24gdGhhdCBpcyB0aGUgc2FtZSBcInNoYXBlXCJcbiAqIGFzIG90aGVyIG5vdGlmaWNhdGlvbnMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHROb3RpZmljYXRpb248VD4odmFsdWU6IFQpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vdGlmaWNhdGlvbignTicsIHZhbHVlLCB1bmRlZmluZWQpIGFzIE5leHROb3RpZmljYXRpb248VD47XG59XG5cbi8qKlxuICogRW5zdXJlcyB0aGF0IGFsbCBub3RpZmljYXRpb25zIGNyZWF0ZWQgaW50ZXJuYWxseSBoYXZlIHRoZSBzYW1lIFwic2hhcGVcIiBpbiB2OC5cbiAqXG4gKiBUT0RPOiBUaGlzIGlzIG9ubHkgZXhwb3J0ZWQgdG8gc3VwcG9ydCBhIGNyYXp5IGxlZ2FjeSB0ZXN0IGluIGBncm91cEJ5YC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKGtpbmQ6ICdOJyB8ICdFJyB8ICdDJywgdmFsdWU6IGFueSwgZXJyb3I6IGFueSkge1xuICByZXR1cm4ge1xuICAgIGtpbmQsXG4gICAgdmFsdWUsXG4gICAgZXJyb3IsXG4gIH07XG59XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxubGV0IGNvbnRleHQ6IHsgZXJyb3JUaHJvd246IGJvb2xlYW47IGVycm9yOiBhbnkgfSB8IG51bGwgPSBudWxsO1xuXG4vKipcbiAqIEhhbmRsZXMgZGVhbGluZyB3aXRoIGVycm9ycyBmb3Igc3VwZXItZ3Jvc3MgbW9kZS4gQ3JlYXRlcyBhIGNvbnRleHQsIGluIHdoaWNoXG4gKiBhbnkgc3luY2hyb25vdXNseSB0aHJvd24gZXJyb3JzIHdpbGwgYmUgcGFzc2VkIHRvIHtAbGluayBjYXB0dXJlRXJyb3J9LiBXaGljaFxuICogd2lsbCByZWNvcmQgdGhlIGVycm9yIHN1Y2ggdGhhdCBpdCB3aWxsIGJlIHJldGhyb3duIGFmdGVyIHRoZSBjYWxsIGJhY2sgaXMgY29tcGxldGUuXG4gKiBUT0RPOiBSZW1vdmUgaW4gdjhcbiAqIEBwYXJhbSBjYiBBbiBpbW1lZGlhdGVseSBleGVjdXRlZCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yQ29udGV4dChjYjogKCkgPT4gdm9pZCkge1xuICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICBjb25zdCBpc1Jvb3QgPSAhY29udGV4dDtcbiAgICBpZiAoaXNSb290KSB7XG4gICAgICBjb250ZXh0ID0geyBlcnJvclRocm93bjogZmFsc2UsIGVycm9yOiBudWxsIH07XG4gICAgfVxuICAgIGNiKCk7XG4gICAgaWYgKGlzUm9vdCkge1xuICAgICAgY29uc3QgeyBlcnJvclRocm93biwgZXJyb3IgfSA9IGNvbnRleHQhO1xuICAgICAgY29udGV4dCA9IG51bGw7XG4gICAgICBpZiAoZXJyb3JUaHJvd24pIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFRoaXMgaXMgdGhlIGdlbmVyYWwgbm9uLWRlcHJlY2F0ZWQgcGF0aCBmb3IgZXZlcnlvbmUgdGhhdFxuICAgIC8vIGlzbid0IGNyYXp5IGVub3VnaCB0byB1c2Ugc3VwZXItZ3Jvc3MgbW9kZSAodXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZylcbiAgICBjYigpO1xuICB9XG59XG5cbi8qKlxuICogQ2FwdHVyZXMgZXJyb3JzIG9ubHkgaW4gc3VwZXItZ3Jvc3MgbW9kZS5cbiAqIEBwYXJhbSBlcnIgdGhlIGVycm9yIHRvIGNhcHR1cmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcHR1cmVFcnJvcihlcnI6IGFueSkge1xuICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgJiYgY29udGV4dCkge1xuICAgIGNvbnRleHQuZXJyb3JUaHJvd24gPSB0cnVlO1xuICAgIGNvbnRleHQuZXJyb3IgPSBlcnI7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIE9ic2VydmFibGVOb3RpZmljYXRpb24gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGlzU3Vic2NyaXB0aW9uLCBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyByZXBvcnRVbmhhbmRsZWRFcnJvciB9IGZyb20gJy4vdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvcic7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlsL25vb3AnO1xuaW1wb3J0IHsgbmV4dE5vdGlmaWNhdGlvbiwgZXJyb3JOb3RpZmljYXRpb24sIENPTVBMRVRFX05PVElGSUNBVElPTiB9IGZyb20gJy4vTm90aWZpY2F0aW9uRmFjdG9yaWVzJztcbmltcG9ydCB7IHRpbWVvdXRQcm92aWRlciB9IGZyb20gJy4vc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlcic7XG5pbXBvcnQgeyBjYXB0dXJlRXJyb3IgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRzIHRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGludGVyZmFjZSBhbmQgZXh0ZW5kcyB0aGVcbiAqIHtAbGluayBTdWJzY3JpcHRpb259IGNsYXNzLiBXaGlsZSB0aGUge0BsaW5rIE9ic2VydmVyfSBpcyB0aGUgcHVibGljIEFQSSBmb3JcbiAqIGNvbnN1bWluZyB0aGUgdmFsdWVzIG9mIGFuIHtAbGluayBPYnNlcnZhYmxlfSwgYWxsIE9ic2VydmVycyBnZXQgY29udmVydGVkIHRvXG4gKiBhIFN1YnNjcmliZXIsIGluIG9yZGVyIHRvIHByb3ZpZGUgU3Vic2NyaXB0aW9uLWxpa2UgY2FwYWJpbGl0aWVzIHN1Y2ggYXNcbiAqIGB1bnN1YnNjcmliZWAuIFN1YnNjcmliZXIgaXMgYSBjb21tb24gdHlwZSBpbiBSeEpTLCBhbmQgY3J1Y2lhbCBmb3JcbiAqIGltcGxlbWVudGluZyBvcGVyYXRvcnMsIGJ1dCBpdCBpcyByYXJlbHkgdXNlZCBhcyBhIHB1YmxpYyBBUEkuXG4gKlxuICogQGNsYXNzIFN1YnNjcmliZXI8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpcHRpb24gaW1wbGVtZW50cyBPYnNlcnZlcjxUPiB7XG4gIC8qKlxuICAgKiBBIHN0YXRpYyBmYWN0b3J5IGZvciBhIFN1YnNjcmliZXIsIGdpdmVuIGEgKHBvdGVudGlhbGx5IHBhcnRpYWwpIGRlZmluaXRpb25cbiAgICogb2YgYW4gT2JzZXJ2ZXIuXG4gICAqIEBwYXJhbSBuZXh0IFRoZSBgbmV4dGAgY2FsbGJhY2sgb2YgYW4gT2JzZXJ2ZXIuXG4gICAqIEBwYXJhbSBlcnJvciBUaGUgYGVycm9yYCBjYWxsYmFjayBvZiBhblxuICAgKiBPYnNlcnZlci5cbiAgICogQHBhcmFtIGNvbXBsZXRlIFRoZSBgY29tcGxldGVgIGNhbGxiYWNrIG9mIGFuXG4gICAqIE9ic2VydmVyLlxuICAgKiBAcmV0dXJuIEEgU3Vic2NyaWJlciB3cmFwcGluZyB0aGUgKHBhcnRpYWxseSBkZWZpbmVkKVxuICAgKiBPYnNlcnZlciByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gYXJndW1lbnRzLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKiBAZGVwcmVjYXRlZCBEbyBub3QgdXNlLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIFRoZXJlIGlzIG5vIHJlcGxhY2VtZW50IGZvciB0aGlzXG4gICAqIG1ldGhvZCwgYW5kIHRoZXJlIGlzIG5vIHJlYXNvbiB0byBiZSBjcmVhdGluZyBpbnN0YW5jZXMgb2YgYFN1YnNjcmliZXJgIGRpcmVjdGx5LlxuICAgKiBJZiB5b3UgaGF2ZSBhIHNwZWNpZmljIHVzZSBjYXNlLCBwbGVhc2UgZmlsZSBhbiBpc3N1ZS5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGU8VD4obmV4dD86ICh4PzogVCkgPT4gdm9pZCwgZXJyb3I/OiAoZT86IGFueSkgPT4gdm9pZCwgY29tcGxldGU/OiAoKSA9PiB2b2lkKTogU3Vic2NyaWJlcjxUPiB7XG4gICAgcmV0dXJuIG5ldyBTYWZlU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBwcm90ZWN0ZWQgaXNTdG9wcGVkOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgcHJvdGVjdGVkIGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPGFueT4gfCBPYnNlcnZlcjxhbnk+OyAvLyB0aGlzIGBhbnlgIGlzIHRoZSBlc2NhcGUgaGF0Y2ggdG8gZXJhc2UgZXh0cmEgdHlwZSBwYXJhbSAoZS5nLiBSKVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICogVGhlcmUgaXMgbm8gcmVhc29uIHRvIGRpcmVjdGx5IGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiBTdWJzY3JpYmVyLiBUaGlzIHR5cGUgaXMgZXhwb3J0ZWQgZm9yIHR5cGluZ3MgcmVhc29ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uPzogU3Vic2NyaWJlcjxhbnk+IHwgT2JzZXJ2ZXI8YW55Pikge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKGRlc3RpbmF0aW9uKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAvLyBBdXRvbWF0aWNhbGx5IGNoYWluIHN1YnNjcmlwdGlvbnMgdG9nZXRoZXIgaGVyZS5cbiAgICAgIC8vIGlmIGRlc3RpbmF0aW9uIGlzIGEgU3Vic2NyaXB0aW9uLCB0aGVuIGl0IGlzIGEgU3Vic2NyaWJlci5cbiAgICAgIGlmIChpc1N1YnNjcmlwdGlvbihkZXN0aW5hdGlvbikpIHtcbiAgICAgICAgZGVzdGluYXRpb24uYWRkKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gRU1QVFlfT0JTRVJWRVI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGNhbGxiYWNrIHRvIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBvZiB0eXBlIGBuZXh0YCBmcm9tXG4gICAqIHRoZSBPYnNlcnZhYmxlLCB3aXRoIGEgdmFsdWUuIFRoZSBPYnNlcnZhYmxlIG1heSBjYWxsIHRoaXMgbWV0aG9kIDAgb3IgbW9yZVxuICAgKiB0aW1lcy5cbiAgICogQHBhcmFtIHtUfSBbdmFsdWVdIFRoZSBgbmV4dGAgdmFsdWUuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBuZXh0KHZhbHVlPzogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihuZXh0Tm90aWZpY2F0aW9uKHZhbHVlKSwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25leHQodmFsdWUhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBub3RpZmljYXRpb25zIG9mIHR5cGUgYGVycm9yYCBmcm9tXG4gICAqIHRoZSBPYnNlcnZhYmxlLCB3aXRoIGFuIGF0dGFjaGVkIGBFcnJvcmAuIE5vdGlmaWVzIHRoZSBPYnNlcnZlciB0aGF0XG4gICAqIHRoZSBPYnNlcnZhYmxlIGhhcyBleHBlcmllbmNlZCBhbiBlcnJvciBjb25kaXRpb24uXG4gICAqIEBwYXJhbSB7YW55fSBbZXJyXSBUaGUgYGVycm9yYCBleGNlcHRpb24uXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBlcnJvcihlcnI/OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24oZXJyb3JOb3RpZmljYXRpb24oZXJyKSwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGNhbGxiYWNrIHRvIHJlY2VpdmUgYSB2YWx1ZWxlc3Mgbm90aWZpY2F0aW9uIG9mIHR5cGVcbiAgICogYGNvbXBsZXRlYCBmcm9tIHRoZSBPYnNlcnZhYmxlLiBOb3RpZmllcyB0aGUgT2JzZXJ2ZXIgdGhhdCB0aGUgT2JzZXJ2YWJsZVxuICAgKiBoYXMgZmluaXNoZWQgc2VuZGluZyBwdXNoLWJhc2VkIG5vdGlmaWNhdGlvbnMuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24oQ09NUExFVEVfTk9USUZJQ0FUSU9OLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICB1bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICBzdXBlci51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG51bGwhO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2Vycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgYmluZCBpcyBjYXB0dXJlZCBoZXJlIGJlY2F1c2Ugd2Ugd2FudCB0byBiZSBhYmxlIHRvIGhhdmVcbiAqIGNvbXBhdGliaWxpdHkgd2l0aCBtb25vaWQgbGlicmFyaWVzIHRoYXQgdGVuZCB0byB1c2UgYSBtZXRob2QgbmFtZWRcbiAqIGBiaW5kYC4gSW4gcGFydGljdWxhciwgYSBsaWJyYXJ5IGNhbGxlZCBNb25pbyByZXF1aXJlcyB0aGlzLlxuICovXG5jb25zdCBfYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuXG5mdW5jdGlvbiBiaW5kPEZuIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KGZuOiBGbiwgdGhpc0FyZzogYW55KTogRm4ge1xuICByZXR1cm4gX2JpbmQuY2FsbChmbiwgdGhpc0FyZyk7XG59XG5cbi8qKlxuICogSW50ZXJuYWwgb3B0aW1pemF0aW9uIG9ubHksIERPIE5PVCBFWFBPU0UuXG4gKiBAaW50ZXJuYWxcbiAqL1xuY2xhc3MgQ29uc3VtZXJPYnNlcnZlcjxUPiBpbXBsZW1lbnRzIE9ic2VydmVyPFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJ0aWFsT2JzZXJ2ZXI6IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+KSB7fVxuXG4gIG5leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBhcnRpYWxPYnNlcnZlciB9ID0gdGhpcztcbiAgICBpZiAocGFydGlhbE9ic2VydmVyLm5leHQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnRpYWxPYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFydGlhbE9ic2VydmVyIH0gPSB0aGlzO1xuICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnRpYWxPYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBsZXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFydGlhbE9ic2VydmVyIH0gPSB0aGlzO1xuICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIuY29tcGxldGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FmZVN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgb2JzZXJ2ZXJPck5leHQ/OiBQYXJ0aWFsPE9ic2VydmVyPFQ+PiB8ICgodmFsdWU6IFQpID0+IHZvaWQpIHwgbnVsbCxcbiAgICBlcnJvcj86ICgoZT86IGFueSkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGNvbXBsZXRlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICApIHtcbiAgICBzdXBlcigpO1xuXG4gICAgbGV0IHBhcnRpYWxPYnNlcnZlcjogUGFydGlhbDxPYnNlcnZlcjxUPj47XG4gICAgaWYgKGlzRnVuY3Rpb24ob2JzZXJ2ZXJPck5leHQpIHx8ICFvYnNlcnZlck9yTmV4dCkge1xuICAgICAgLy8gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24sIG5vdCBhbiBvYnNlcnZlci4gVGhlIG5leHRcbiAgICAgIC8vIHR3byBhcmd1bWVudHMgKmNvdWxkKiBiZSBvYnNlcnZlcnMsIG9yIHRoZXkgY291bGQgYmUgZW1wdHkuXG4gICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgIG5leHQ6IChvYnNlcnZlck9yTmV4dCA/PyB1bmRlZmluZWQpIGFzICgoKHZhbHVlOiBUKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCksXG4gICAgICAgIGVycm9yOiBlcnJvciA/PyB1bmRlZmluZWQsXG4gICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSA/PyB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBwYXJ0aWFsIG9ic2VydmVyLlxuICAgICAgbGV0IGNvbnRleHQ6IGFueTtcbiAgICAgIGlmICh0aGlzICYmIGNvbmZpZy51c2VEZXByZWNhdGVkTmV4dENvbnRleHQpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBhIGRlcHJlY2F0ZWQgcGF0aCB0aGF0IG1hZGUgYHRoaXMudW5zdWJzY3JpYmUoKWAgYXZhaWxhYmxlIGluXG4gICAgICAgIC8vIG5leHQgaGFuZGxlciBmdW5jdGlvbnMgcGFzc2VkIHRvIHN1YnNjcmliZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWhpbmQgYSBmbGFnXG4gICAgICAgIC8vIG5vdywgYXMgaXQgaXMgKnZlcnkqIHNsb3cuXG4gICAgICAgIGNvbnRleHQgPSBPYmplY3QuY3JlYXRlKG9ic2VydmVyT3JOZXh0KTtcbiAgICAgICAgY29udGV4dC51bnN1YnNjcmliZSA9ICgpID0+IHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgcGFydGlhbE9ic2VydmVyID0ge1xuICAgICAgICAgIG5leHQ6IG9ic2VydmVyT3JOZXh0Lm5leHQgJiYgYmluZChvYnNlcnZlck9yTmV4dC5uZXh0LCBjb250ZXh0KSxcbiAgICAgICAgICBlcnJvcjogb2JzZXJ2ZXJPck5leHQuZXJyb3IgJiYgYmluZChvYnNlcnZlck9yTmV4dC5lcnJvciwgY29udGV4dCksXG4gICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlICYmIGJpbmQob2JzZXJ2ZXJPck5leHQuY29tcGxldGUsIGNvbnRleHQpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGhlIFwibm9ybWFsXCIgcGF0aC4gSnVzdCB1c2UgdGhlIHBhcnRpYWwgb2JzZXJ2ZXIgZGlyZWN0bHkuXG4gICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdyYXAgdGhlIHBhcnRpYWwgb2JzZXJ2ZXIgdG8gZW5zdXJlIGl0J3MgYSBmdWxsIG9ic2VydmVyLCBhbmRcbiAgICAvLyBtYWtlIHN1cmUgcHJvcGVyIGVycm9yIGhhbmRsaW5nIGlzIGFjY291bnRlZCBmb3IuXG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBDb25zdW1lck9ic2VydmVyKHBhcnRpYWxPYnNlcnZlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3I6IGFueSkge1xuICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICBjYXB0dXJlRXJyb3IoZXJyb3IpO1xuICB9IGVsc2Uge1xuICAgIC8vIElkZWFsIHBhdGgsIHdlIHJlcG9ydCB0aGlzIGFzIGFuIHVuaGFuZGxlZCBlcnJvcixcbiAgICAvLyB3aGljaCBpcyB0aHJvd24gb24gYSBuZXcgY2FsbCBzdGFjay5cbiAgICByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlcnJvciBoYW5kbGVyIHVzZWQgd2hlbiBubyBlcnJvciBoYW5kbGVyIHdhcyBzdXBwbGllZFxuICogdG8gdGhlIFNhZmVTdWJzY3JpYmVyIC0tIG1lYW5pbmcgbm8gZXJyb3IgaGFuZGxlciB3YXMgc3VwcGxpZWRcbiAqIGRvIHRoZSBgc3Vic2NyaWJlYCBjYWxsIG9uIG91ciBvYnNlcnZhYmxlLlxuICogQHBhcmFtIGVyciBUaGUgZXJyb3IgdG8gaGFuZGxlXG4gKi9cbmZ1bmN0aW9uIGRlZmF1bHRFcnJvckhhbmRsZXIoZXJyOiBhbnkpIHtcbiAgdGhyb3cgZXJyO1xufVxuXG4vKipcbiAqIEEgaGFuZGxlciBmb3Igbm90aWZpY2F0aW9ucyB0aGF0IGNhbm5vdCBiZSBzZW50IHRvIGEgc3RvcHBlZCBzdWJzY3JpYmVyLlxuICogQHBhcmFtIG5vdGlmaWNhdGlvbiBUaGUgbm90aWZpY2F0aW9uIGJlaW5nIHNlbnRcbiAqIEBwYXJhbSBzdWJzY3JpYmVyIFRoZSBzdG9wcGVkIHN1YnNjcmliZXJcbiAqL1xuZnVuY3Rpb24gaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE9ic2VydmFibGVOb3RpZmljYXRpb248YW55Piwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSB7XG4gIGNvbnN0IHsgb25TdG9wcGVkTm90aWZpY2F0aW9uIH0gPSBjb25maWc7XG4gIG9uU3RvcHBlZE5vdGlmaWNhdGlvbiAmJiB0aW1lb3V0UHJvdmlkZXIuc2V0VGltZW91dCgoKSA9PiBvblN0b3BwZWROb3RpZmljYXRpb24obm90aWZpY2F0aW9uLCBzdWJzY3JpYmVyKSk7XG59XG5cbi8qKlxuICogVGhlIG9ic2VydmVyIHVzZWQgYXMgYSBzdHViIGZvciBzdWJzY3JpcHRpb25zIHdoZXJlIHRoZSB1c2VyIGRpZCBub3RcbiAqIHBhc3MgYW55IGFyZ3VtZW50cyB0byBgc3Vic2NyaWJlYC4gQ29tZXMgd2l0aCB0aGUgZGVmYXVsdCBlcnJvciBoYW5kbGluZ1xuICogYmVoYXZpb3IuXG4gKi9cbmV4cG9ydCBjb25zdCBFTVBUWV9PQlNFUlZFUjogUmVhZG9ubHk8T2JzZXJ2ZXI8YW55Pj4gJiB7IGNsb3NlZDogdHJ1ZSB9ID0ge1xuICBjbG9zZWQ6IHRydWUsXG4gIG5leHQ6IG5vb3AsXG4gIGVycm9yOiBkZWZhdWx0RXJyb3JIYW5kbGVyLFxuICBjb21wbGV0ZTogbm9vcCxcbn07XG4iLCAiLyoqXG4gKiBTeW1ib2wub2JzZXJ2YWJsZSBvciBhIHN0cmluZyBcIkBAb2JzZXJ2YWJsZVwiLiBVc2VkIGZvciBpbnRlcm9wXG4gKlxuICogQGRlcHJlY2F0ZWQgV2Ugd2lsbCBubyBsb25nZXIgYmUgZXhwb3J0aW5nIHRoaXMgc3ltYm9sIGluIHVwY29taW5nIHZlcnNpb25zIG9mIFJ4SlMuXG4gKiBJbnN0ZWFkIHBvbHlmaWxsIGFuZCB1c2UgU3ltYm9sLm9ic2VydmFibGUgZGlyZWN0bHkgKm9yKiB1c2UgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvc3ltYm9sLW9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGNvbnN0IG9ic2VydmFibGU6IHN0cmluZyB8IHN5bWJvbCA9ICgoKSA9PiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSkgfHwgJ0BAb2JzZXJ2YWJsZScpKCk7XG4iLCAiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIG9uZSBwYXJhbWV0ZXIgYW5kIGp1c3QgcmV0dXJucyBpdC4gU2ltcGx5IHB1dCxcbiAqIHRoaXMgaXMgbGlrZSBgPFQ+KHg6IFQpOiBUID0+IHhgLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogVGhpcyBpcyB1c2VmdWwgaW4gc29tZSBjYXNlcyB3aGVuIHVzaW5nIHRoaW5ncyBsaWtlIGBtZXJnZU1hcGBcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UsIG1hcCwgcmFuZ2UsIG1lcmdlTWFwLCBpZGVudGl0eSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHNvdXJjZSQgPSBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoNSkpO1xuICpcbiAqIGNvbnN0IHJlc3VsdCQgPSBzb3VyY2UkLnBpcGUoXG4gKiAgIG1hcChpID0+IHJhbmdlKGkpKSxcbiAqICAgbWVyZ2VNYXAoaWRlbnRpdHkpIC8vIHNhbWUgYXMgbWVyZ2VNYXAoeCA9PiB4KVxuICogKTtcbiAqXG4gKiByZXN1bHQkLnN1YnNjcmliZSh7XG4gKiAgIG5leHQ6IGNvbnNvbGUubG9nXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIE9yIHdoZW4geW91IHdhbnQgdG8gc2VsZWN0aXZlbHkgYXBwbHkgYW4gb3BlcmF0b3JcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIHRha2UsIGlkZW50aXR5IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgc2hvdWxkTGltaXQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICpcbiAqIGNvbnN0IHNvdXJjZSQgPSBpbnRlcnZhbCgxMDAwKTtcbiAqXG4gKiBjb25zdCByZXN1bHQkID0gc291cmNlJC5waXBlKHNob3VsZExpbWl0KCkgPyB0YWtlKDUpIDogaWRlbnRpdHkpO1xuICpcbiAqIHJlc3VsdCQuc3Vic2NyaWJlKHtcbiAqICAgbmV4dDogY29uc29sZS5sb2dcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHggQW55IHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvblxuICogQHJldHVybnMgVGhlIHZhbHVlIHBhc3NlZCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyIHRvIHRoaXMgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5PFQ+KHg6IFQpOiBUIHtcbiAgcmV0dXJuIHg7XG59XG4iLCAiaW1wb3J0IHsgaWRlbnRpdHkgfSBmcm9tICcuL2lkZW50aXR5JztcbmltcG9ydCB7IFVuYXJ5RnVuY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwaXBlKCk6IHR5cGVvZiBpZGVudGl0eTtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEE+KGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPik6IFVuYXJ5RnVuY3Rpb248VCwgQT47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCPihmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPik6IFVuYXJ5RnVuY3Rpb248VCwgQj47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDPihmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPiwgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+KTogVW5hcnlGdW5jdGlvbjxULCBDPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQ+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD5cbik6IFVuYXJ5RnVuY3Rpb248VCwgRD47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT5cbik6IFVuYXJ5RnVuY3Rpb248VCwgRT47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPlxuKTogVW5hcnlGdW5jdGlvbjxULCBGPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEc+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz5cbik6IFVuYXJ5RnVuY3Rpb248VCwgRz47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPixcbiAgZm43OiBVbmFyeUZ1bmN0aW9uPEYsIEc+LFxuICBmbjg6IFVuYXJ5RnVuY3Rpb248RywgSD5cbik6IFVuYXJ5RnVuY3Rpb248VCwgSD47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPixcbiAgZm43OiBVbmFyeUZ1bmN0aW9uPEYsIEc+LFxuICBmbjg6IFVuYXJ5RnVuY3Rpb248RywgSD4sXG4gIGZuOTogVW5hcnlGdW5jdGlvbjxILCBJPlxuKTogVW5hcnlGdW5jdGlvbjxULCBJPjtcbmV4cG9ydCBmdW5jdGlvbiBwaXBlPFQsIEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICBmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4sXG4gIGZuMjogVW5hcnlGdW5jdGlvbjxBLCBCPixcbiAgZm4zOiBVbmFyeUZ1bmN0aW9uPEIsIEM+LFxuICBmbjQ6IFVuYXJ5RnVuY3Rpb248QywgRD4sXG4gIGZuNTogVW5hcnlGdW5jdGlvbjxELCBFPixcbiAgZm42OiBVbmFyeUZ1bmN0aW9uPEUsIEY+LFxuICBmbjc6IFVuYXJ5RnVuY3Rpb248RiwgRz4sXG4gIGZuODogVW5hcnlGdW5jdGlvbjxHLCBIPixcbiAgZm45OiBVbmFyeUZ1bmN0aW9uPEgsIEk+LFxuICAuLi5mbnM6IFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+W11cbik6IFVuYXJ5RnVuY3Rpb248VCwgdW5rbm93bj47XG5cbi8qKlxuICogcGlwZSgpIGNhbiBiZSBjYWxsZWQgb24gb25lIG9yIG1vcmUgZnVuY3Rpb25zLCBlYWNoIG9mIHdoaWNoIGNhbiB0YWtlIG9uZSBhcmd1bWVudCAoXCJVbmFyeUZ1bmN0aW9uXCIpXG4gKiBhbmQgdXNlcyBpdCB0byByZXR1cm4gYSB2YWx1ZS5cbiAqIEl0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIG9uZSBhcmd1bWVudCwgcGFzc2VzIGl0IHRvIHRoZSBmaXJzdCBVbmFyeUZ1bmN0aW9uLCBhbmQgdGhlblxuICogcGFzc2VzIHRoZSByZXN1bHQgdG8gdGhlIG5leHQgb25lLCBwYXNzZXMgdGhhdCByZXN1bHQgdG8gdGhlIG5leHQgb25lLCBhbmQgc28gb24uICBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoLi4uZm5zOiBBcnJheTxVbmFyeUZ1bmN0aW9uPGFueSwgYW55Pj4pOiBVbmFyeUZ1bmN0aW9uPGFueSwgYW55PiB7XG4gIHJldHVybiBwaXBlRnJvbUFycmF5KGZucyk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBwaXBlRnJvbUFycmF5PFQsIFI+KGZuczogQXJyYXk8VW5hcnlGdW5jdGlvbjxULCBSPj4pOiBVbmFyeUZ1bmN0aW9uPFQsIFI+IHtcbiAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gaWRlbnRpdHkgYXMgVW5hcnlGdW5jdGlvbjxhbnksIGFueT47XG4gIH1cblxuICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmbnNbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQ6IFQpOiBSIHtcbiAgICByZXR1cm4gZm5zLnJlZHVjZSgocHJldjogYW55LCBmbjogVW5hcnlGdW5jdGlvbjxULCBSPikgPT4gZm4ocHJldiksIGlucHV0IGFzIGFueSk7XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3IgfSBmcm9tICcuL09wZXJhdG9yJztcbmltcG9ydCB7IFNhZmVTdWJzY3JpYmVyLCBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IGlzU3Vic2NyaXB0aW9uLCBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBUZWFyZG93bkxvZ2ljLCBPcGVyYXRvckZ1bmN0aW9uLCBTdWJzY3JpYmFibGUsIE9ic2VydmVyIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBwaXBlRnJvbUFycmF5IH0gZnJvbSAnLi91dGlsL3BpcGUnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGVycm9yQ29udGV4dCB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xuXG4vKipcbiAqIEEgcmVwcmVzZW50YXRpb24gb2YgYW55IHNldCBvZiB2YWx1ZXMgb3ZlciBhbnkgYW1vdW50IG9mIHRpbWUuIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgYnVpbGRpbmcgYmxvY2tcbiAqIG9mIFJ4SlMuXG4gKlxuICogQGNsYXNzIE9ic2VydmFibGU8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIE9ic2VydmFibGU8VD4gaW1wbGVtZW50cyBTdWJzY3JpYmFibGU8VD4ge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gICAqL1xuICBzb3VyY2U6IE9ic2VydmFibGU8YW55PiB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gICAqL1xuICBvcGVyYXRvcjogT3BlcmF0b3I8YW55LCBUPiB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YnNjcmliZSB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgT2JzZXJ2YWJsZSBpc1xuICAgKiBpbml0aWFsbHkgc3Vic2NyaWJlZCB0by4gVGhpcyBmdW5jdGlvbiBpcyBnaXZlbiBhIFN1YnNjcmliZXIsIHRvIHdoaWNoIG5ldyB2YWx1ZXNcbiAgICogY2FuIGJlIGBuZXh0YGVkLCBvciBhbiBgZXJyb3JgIG1ldGhvZCBjYW4gYmUgY2FsbGVkIHRvIHJhaXNlIGFuIGVycm9yLCBvclxuICAgKiBgY29tcGxldGVgIGNhbiBiZSBjYWxsZWQgdG8gbm90aWZ5IG9mIGEgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3Vic2NyaWJlPzogKHRoaXM6IE9ic2VydmFibGU8VD4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IFRlYXJkb3duTG9naWMpIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgfVxuICB9XG5cbiAgLy8gSEFDSzogU2luY2UgVHlwZVNjcmlwdCBpbmhlcml0cyBzdGF0aWMgcHJvcGVydGllcyB0b28sIHdlIGhhdmUgdG9cbiAgLy8gZmlnaHQgYWdhaW5zdCBUeXBlU2NyaXB0IGhlcmUgc28gU3ViamVjdCBjYW4gaGF2ZSBhIGRpZmZlcmVudCBzdGF0aWMgY3JlYXRlIHNpZ25hdHVyZVxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlIGJ5IGNhbGxpbmcgdGhlIE9ic2VydmFibGUgY29uc3RydWN0b3JcbiAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICogQG1ldGhvZCBjcmVhdGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3Vic2NyaWJlPyB0aGUgc3Vic2NyaWJlciBmdW5jdGlvbiB0byBiZSBwYXNzZWQgdG8gdGhlIE9ic2VydmFibGUgY29uc3RydWN0b3JcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYSBuZXcgb2JzZXJ2YWJsZVxuICAgKiBAbm9jb2xsYXBzZVxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYG5ldyBPYnNlcnZhYmxlKClgIGluc3RlYWQuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGU6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55ID0gPFQ+KHN1YnNjcmliZT86IChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiBUZWFyZG93bkxvZ2ljKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KHN1YnNjcmliZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgT2JzZXJ2YWJsZSwgd2l0aCB0aGlzIE9ic2VydmFibGUgaW5zdGFuY2UgYXMgdGhlIHNvdXJjZSwgYW5kIHRoZSBwYXNzZWRcbiAgICogb3BlcmF0b3IgZGVmaW5lZCBhcyB0aGUgbmV3IG9ic2VydmFibGUncyBvcGVyYXRvci5cbiAgICogQG1ldGhvZCBsaWZ0XG4gICAqIEBwYXJhbSBvcGVyYXRvciB0aGUgb3BlcmF0b3IgZGVmaW5pbmcgdGhlIG9wZXJhdGlvbiB0byB0YWtlIG9uIHRoZSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm4gYSBuZXcgb2JzZXJ2YWJsZSB3aXRoIHRoZSBPcGVyYXRvciBhcHBsaWVkXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LlxuICAgKiBJZiB5b3UgaGF2ZSBpbXBsZW1lbnRlZCBhbiBvcGVyYXRvciB1c2luZyBgbGlmdGAsIGl0IGlzIHJlY29tbWVuZGVkIHRoYXQgeW91IGNyZWF0ZSBhblxuICAgKiBvcGVyYXRvciBieSBzaW1wbHkgcmV0dXJuaW5nIGBuZXcgT2JzZXJ2YWJsZSgpYCBkaXJlY3RseS4gU2VlIFwiQ3JlYXRpbmcgbmV3IG9wZXJhdG9ycyBmcm9tXG4gICAqIHNjcmF0Y2hcIiBzZWN0aW9uIGhlcmU6IGh0dHBzOi8vcnhqcy5kZXYvZ3VpZGUvb3BlcmF0b3JzXG4gICAqL1xuICBsaWZ0PFI+KG9wZXJhdG9yPzogT3BlcmF0b3I8VCwgUj4pOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8Uj4oKTtcbiAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG5cbiAgc3Vic2NyaWJlKG9ic2VydmVyT3JOZXh0PzogUGFydGlhbDxPYnNlcnZlcjxUPj4gfCAoKHZhbHVlOiBUKSA9PiB2b2lkKSk6IFN1YnNjcmlwdGlvbjtcbiAgLyoqIEBkZXByZWNhdGVkIEluc3RlYWQgb2YgcGFzc2luZyBzZXBhcmF0ZSBjYWxsYmFjayBhcmd1bWVudHMsIHVzZSBhbiBvYnNlcnZlciBhcmd1bWVudC4gU2lnbmF0dXJlcyB0YWtpbmcgc2VwYXJhdGUgY2FsbGJhY2sgYXJndW1lbnRzIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc3Vic2NyaWJlLWFyZ3VtZW50cyAqL1xuICBzdWJzY3JpYmUobmV4dD86ICgodmFsdWU6IFQpID0+IHZvaWQpIHwgbnVsbCwgZXJyb3I/OiAoKGVycm9yOiBhbnkpID0+IHZvaWQpIHwgbnVsbCwgY29tcGxldGU/OiAoKCkgPT4gdm9pZCkgfCBudWxsKTogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogSW52b2tlcyBhbiBleGVjdXRpb24gb2YgYW4gT2JzZXJ2YWJsZSBhbmQgcmVnaXN0ZXJzIE9ic2VydmVyIGhhbmRsZXJzIGZvciBub3RpZmljYXRpb25zIGl0IHdpbGwgZW1pdC5cbiAgICpcbiAgICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPlVzZSBpdCB3aGVuIHlvdSBoYXZlIGFsbCB0aGVzZSBPYnNlcnZhYmxlcywgYnV0IHN0aWxsIG5vdGhpbmcgaXMgaGFwcGVuaW5nLjwvc3Bhbj5cbiAgICpcbiAgICogYHN1YnNjcmliZWAgaXMgbm90IGEgcmVndWxhciBvcGVyYXRvciwgYnV0IGEgbWV0aG9kIHRoYXQgY2FsbHMgT2JzZXJ2YWJsZSdzIGludGVybmFsIGBzdWJzY3JpYmVgIGZ1bmN0aW9uLiBJdFxuICAgKiBtaWdodCBiZSBmb3IgZXhhbXBsZSBhIGZ1bmN0aW9uIHRoYXQgeW91IHBhc3NlZCB0byBPYnNlcnZhYmxlJ3MgY29uc3RydWN0b3IsIGJ1dCBtb3N0IG9mIHRoZSB0aW1lIGl0IGlzXG4gICAqIGEgbGlicmFyeSBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggZGVmaW5lcyB3aGF0IHdpbGwgYmUgZW1pdHRlZCBieSBhbiBPYnNlcnZhYmxlLCBhbmQgd2hlbiBpdCBiZSB3aWxsIGVtaXR0ZWQuIFRoaXMgbWVhbnNcbiAgICogdGhhdCBjYWxsaW5nIGBzdWJzY3JpYmVgIGlzIGFjdHVhbGx5IHRoZSBtb21lbnQgd2hlbiBPYnNlcnZhYmxlIHN0YXJ0cyBpdHMgd29yaywgbm90IHdoZW4gaXQgaXMgY3JlYXRlZCwgYXMgaXQgaXMgb2Z0ZW5cbiAgICogdGhlIHRob3VnaHQuXG4gICAqXG4gICAqIEFwYXJ0IGZyb20gc3RhcnRpbmcgdGhlIGV4ZWN1dGlvbiBvZiBhbiBPYnNlcnZhYmxlLCB0aGlzIG1ldGhvZCBhbGxvd3MgeW91IHRvIGxpc3RlbiBmb3IgdmFsdWVzXG4gICAqIHRoYXQgYW4gT2JzZXJ2YWJsZSBlbWl0cywgYXMgd2VsbCBhcyBmb3Igd2hlbiBpdCBjb21wbGV0ZXMgb3IgZXJyb3JzLiBZb3UgY2FuIGFjaGlldmUgdGhpcyBpbiB0d29cbiAgICogb2YgdGhlIGZvbGxvd2luZyB3YXlzLlxuICAgKlxuICAgKiBUaGUgZmlyc3Qgd2F5IGlzIGNyZWF0aW5nIGFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMge0BsaW5rIE9ic2VydmVyfSBpbnRlcmZhY2UuIEl0IHNob3VsZCBoYXZlIG1ldGhvZHNcbiAgICogZGVmaW5lZCBieSB0aGF0IGludGVyZmFjZSwgYnV0IG5vdGUgdGhhdCBpdCBzaG91bGQgYmUganVzdCBhIHJlZ3VsYXIgSmF2YVNjcmlwdCBvYmplY3QsIHdoaWNoIHlvdSBjYW4gY3JlYXRlXG4gICAqIHlvdXJzZWxmIGluIGFueSB3YXkgeW91IHdhbnQgKEVTNiBjbGFzcywgY2xhc3NpYyBmdW5jdGlvbiBjb25zdHJ1Y3Rvciwgb2JqZWN0IGxpdGVyYWwgZXRjLikuIEluIHBhcnRpY3VsYXIsIGRvXG4gICAqIG5vdCBhdHRlbXB0IHRvIHVzZSBhbnkgUnhKUyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIHRvIGNyZWF0ZSBPYnNlcnZlcnMgLSB5b3UgZG9uJ3QgbmVlZCB0aGVtLiBSZW1lbWJlciBhbHNvXG4gICAqIHRoYXQgeW91ciBvYmplY3QgZG9lcyBub3QgaGF2ZSB0byBpbXBsZW1lbnQgYWxsIG1ldGhvZHMuIElmIHlvdSBmaW5kIHlvdXJzZWxmIGNyZWF0aW5nIGEgbWV0aG9kIHRoYXQgZG9lc24ndFxuICAgKiBkbyBhbnl0aGluZywgeW91IGNhbiBzaW1wbHkgb21pdCBpdC4gTm90ZSBob3dldmVyLCBpZiB0aGUgYGVycm9yYCBtZXRob2QgaXMgbm90IHByb3ZpZGVkIGFuZCBhbiBlcnJvciBoYXBwZW5zLFxuICAgKiBpdCB3aWxsIGJlIHRocm93biBhc3luY2hyb25vdXNseS4gRXJyb3JzIHRocm93biBhc3luY2hyb25vdXNseSBjYW5ub3QgYmUgY2F1Z2h0IHVzaW5nIGB0cnlgL2BjYXRjaGAuIEluc3RlYWQsXG4gICAqIHVzZSB0aGUge0BsaW5rIG9uVW5oYW5kbGVkRXJyb3J9IGNvbmZpZ3VyYXRpb24gb3B0aW9uIG9yIHVzZSBhIHJ1bnRpbWUgaGFuZGxlciAobGlrZSBgd2luZG93Lm9uZXJyb3JgIG9yXG4gICAqIGBwcm9jZXNzLm9uKCdlcnJvcilgKSB0byBiZSBub3RpZmllZCBvZiB1bmhhbmRsZWQgZXJyb3JzLiBCZWNhdXNlIG9mIHRoaXMsIGl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgcHJvdmlkZVxuICAgKiBhbiBgZXJyb3JgIG1ldGhvZCB0byBhdm9pZCBtaXNzaW5nIHRocm93biBlcnJvcnMuXG4gICAqXG4gICAqIFRoZSBzZWNvbmQgd2F5IGlzIHRvIGdpdmUgdXAgb24gT2JzZXJ2ZXIgb2JqZWN0IGFsdG9nZXRoZXIgYW5kIHNpbXBseSBwcm92aWRlIGNhbGxiYWNrIGZ1bmN0aW9ucyBpbiBwbGFjZSBvZiBpdHMgbWV0aG9kcy5cbiAgICogVGhpcyBtZWFucyB5b3UgY2FuIHByb3ZpZGUgdGhyZWUgZnVuY3Rpb25zIGFzIGFyZ3VtZW50cyB0byBgc3Vic2NyaWJlYCwgd2hlcmUgdGhlIGZpcnN0IGZ1bmN0aW9uIGlzIGVxdWl2YWxlbnRcbiAgICogb2YgYSBgbmV4dGAgbWV0aG9kLCB0aGUgc2Vjb25kIG9mIGFuIGBlcnJvcmAgbWV0aG9kIGFuZCB0aGUgdGhpcmQgb2YgYSBgY29tcGxldGVgIG1ldGhvZC4gSnVzdCBhcyBpbiBjYXNlIG9mIGFuIE9ic2VydmVyLFxuICAgKiBpZiB5b3UgZG8gbm90IG5lZWQgdG8gbGlzdGVuIGZvciBzb21ldGhpbmcsIHlvdSBjYW4gb21pdCBhIGZ1bmN0aW9uIGJ5IHBhc3NpbmcgYHVuZGVmaW5lZGAgb3IgYG51bGxgLFxuICAgKiBzaW5jZSBgc3Vic2NyaWJlYCByZWNvZ25pemVzIHRoZXNlIGZ1bmN0aW9ucyBieSB3aGVyZSB0aGV5IHdlcmUgcGxhY2VkIGluIGZ1bmN0aW9uIGNhbGwuIFdoZW4gaXQgY29tZXNcbiAgICogdG8gdGhlIGBlcnJvcmAgZnVuY3Rpb24sIGFzIHdpdGggYW4gT2JzZXJ2ZXIsIGlmIG5vdCBwcm92aWRlZCwgZXJyb3JzIGVtaXR0ZWQgYnkgYW4gT2JzZXJ2YWJsZSB3aWxsIGJlIHRocm93biBhc3luY2hyb25vdXNseS5cbiAgICpcbiAgICogWW91IGNhbiwgaG93ZXZlciwgc3Vic2NyaWJlIHdpdGggbm8gcGFyYW1ldGVycyBhdCBhbGwuIFRoaXMgbWF5IGJlIHRoZSBjYXNlIHdoZXJlIHlvdSdyZSBub3QgaW50ZXJlc3RlZCBpbiB0ZXJtaW5hbCBldmVudHNcbiAgICogYW5kIHlvdSBhbHNvIGhhbmRsZWQgZW1pc3Npb25zIGludGVybmFsbHkgYnkgdXNpbmcgb3BlcmF0b3JzIChlLmcuIHVzaW5nIGB0YXBgKS5cbiAgICpcbiAgICogV2hpY2hldmVyIHN0eWxlIG9mIGNhbGxpbmcgYHN1YnNjcmliZWAgeW91IHVzZSwgaW4gYm90aCBjYXNlcyBpdCByZXR1cm5zIGEgU3Vic2NyaXB0aW9uIG9iamVjdC5cbiAgICogVGhpcyBvYmplY3QgYWxsb3dzIHlvdSB0byBjYWxsIGB1bnN1YnNjcmliZWAgb24gaXQsIHdoaWNoIGluIHR1cm4gd2lsbCBzdG9wIHRoZSB3b3JrIHRoYXQgYW4gT2JzZXJ2YWJsZSBkb2VzIGFuZCB3aWxsIGNsZWFuXG4gICAqIHVwIGFsbCByZXNvdXJjZXMgdGhhdCBhbiBPYnNlcnZhYmxlIHVzZWQuIE5vdGUgdGhhdCBjYW5jZWxsaW5nIGEgc3Vic2NyaXB0aW9uIHdpbGwgbm90IGNhbGwgYGNvbXBsZXRlYCBjYWxsYmFja1xuICAgKiBwcm92aWRlZCB0byBgc3Vic2NyaWJlYCBmdW5jdGlvbiwgd2hpY2ggaXMgcmVzZXJ2ZWQgZm9yIGEgcmVndWxhciBjb21wbGV0aW9uIHNpZ25hbCB0aGF0IGNvbWVzIGZyb20gYW4gT2JzZXJ2YWJsZS5cbiAgICpcbiAgICogUmVtZW1iZXIgdGhhdCBjYWxsYmFja3MgcHJvdmlkZWQgdG8gYHN1YnNjcmliZWAgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseS5cbiAgICogSXQgaXMgYW4gT2JzZXJ2YWJsZSBpdHNlbGYgdGhhdCBkZWNpZGVzIHdoZW4gdGhlc2UgZnVuY3Rpb25zIHdpbGwgYmUgY2FsbGVkLiBGb3IgZXhhbXBsZSB7QGxpbmsgb2Z9XG4gICAqIGJ5IGRlZmF1bHQgZW1pdHMgYWxsIGl0cyB2YWx1ZXMgc3luY2hyb25vdXNseS4gQWx3YXlzIGNoZWNrIGRvY3VtZW50YXRpb24gZm9yIGhvdyBnaXZlbiBPYnNlcnZhYmxlXG4gICAqIHdpbGwgYmVoYXZlIHdoZW4gc3Vic2NyaWJlZCBhbmQgaWYgaXRzIGRlZmF1bHQgYmVoYXZpb3IgY2FuIGJlIG1vZGlmaWVkIHdpdGggYSBgc2NoZWR1bGVyYC5cbiAgICpcbiAgICogIyMjIyBFeGFtcGxlc1xuICAgKlxuICAgKiBTdWJzY3JpYmUgd2l0aCBhbiB7QGxpbmsgZ3VpZGUvb2JzZXJ2ZXIgT2JzZXJ2ZXJ9XG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG4gICAqXG4gICAqIGNvbnN0IHN1bU9ic2VydmVyID0ge1xuICAgKiAgIHN1bTogMCxcbiAgICogICBuZXh0KHZhbHVlKSB7XG4gICAqICAgICBjb25zb2xlLmxvZygnQWRkaW5nOiAnICsgdmFsdWUpO1xuICAgKiAgICAgdGhpcy5zdW0gPSB0aGlzLnN1bSArIHZhbHVlO1xuICAgKiAgIH0sXG4gICAqICAgZXJyb3IoKSB7XG4gICAqICAgICAvLyBXZSBhY3R1YWxseSBjb3VsZCBqdXN0IHJlbW92ZSB0aGlzIG1ldGhvZCxcbiAgICogICAgIC8vIHNpbmNlIHdlIGRvIG5vdCByZWFsbHkgY2FyZSBhYm91dCBlcnJvcnMgcmlnaHQgbm93LlxuICAgKiAgIH0sXG4gICAqICAgY29tcGxldGUoKSB7XG4gICAqICAgICBjb25zb2xlLmxvZygnU3VtIGVxdWFsczogJyArIHRoaXMuc3VtKTtcbiAgICogICB9XG4gICAqIH07XG4gICAqXG4gICAqIG9mKDEsIDIsIDMpIC8vIFN5bmNocm9ub3VzbHkgZW1pdHMgMSwgMiwgMyBhbmQgdGhlbiBjb21wbGV0ZXMuXG4gICAqICAgLnN1YnNjcmliZShzdW1PYnNlcnZlcik7XG4gICAqXG4gICAqIC8vIExvZ3M6XG4gICAqIC8vICdBZGRpbmc6IDEnXG4gICAqIC8vICdBZGRpbmc6IDInXG4gICAqIC8vICdBZGRpbmc6IDMnXG4gICAqIC8vICdTdW0gZXF1YWxzOiA2J1xuICAgKiBgYGBcbiAgICpcbiAgICogU3Vic2NyaWJlIHdpdGggZnVuY3Rpb25zICh7QGxpbmsgZGVwcmVjYXRpb25zL3N1YnNjcmliZS1hcmd1bWVudHMgZGVwcmVjYXRlZH0pXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IG9mIH0gZnJvbSAncnhqcydcbiAgICpcbiAgICogbGV0IHN1bSA9IDA7XG4gICAqXG4gICAqIG9mKDEsIDIsIDMpLnN1YnNjcmliZShcbiAgICogICB2YWx1ZSA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZygnQWRkaW5nOiAnICsgdmFsdWUpO1xuICAgKiAgICAgc3VtID0gc3VtICsgdmFsdWU7XG4gICAqICAgfSxcbiAgICogICB1bmRlZmluZWQsXG4gICAqICAgKCkgPT4gY29uc29sZS5sb2coJ1N1bSBlcXVhbHM6ICcgKyBzdW0pXG4gICAqICk7XG4gICAqXG4gICAqIC8vIExvZ3M6XG4gICAqIC8vICdBZGRpbmc6IDEnXG4gICAqIC8vICdBZGRpbmc6IDInXG4gICAqIC8vICdBZGRpbmc6IDMnXG4gICAqIC8vICdTdW0gZXF1YWxzOiA2J1xuICAgKiBgYGBcbiAgICpcbiAgICogQ2FuY2VsIGEgc3Vic2NyaXB0aW9uXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IGludGVydmFsIH0gZnJvbSAncnhqcyc7XG4gICAqXG4gICAqIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGludGVydmFsKDEwMDApLnN1YnNjcmliZSh7XG4gICAqICAgbmV4dChudW0pIHtcbiAgICogICAgIGNvbnNvbGUubG9nKG51bSlcbiAgICogICB9LFxuICAgKiAgIGNvbXBsZXRlKCkge1xuICAgKiAgICAgLy8gV2lsbCBub3QgYmUgY2FsbGVkLCBldmVuIHdoZW4gY2FuY2VsbGluZyBzdWJzY3JpcHRpb24uXG4gICAqICAgICBjb25zb2xlLmxvZygnY29tcGxldGVkIScpO1xuICAgKiAgIH1cbiAgICogfSk7XG4gICAqXG4gICAqIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgKiAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgKiAgIGNvbnNvbGUubG9nKCd1bnN1YnNjcmliZWQhJyk7XG4gICAqIH0sIDI1MDApO1xuICAgKlxuICAgKiAvLyBMb2dzOlxuICAgKiAvLyAwIGFmdGVyIDFzXG4gICAqIC8vIDEgYWZ0ZXIgMnNcbiAgICogLy8gJ3Vuc3Vic2NyaWJlZCEnIGFmdGVyIDIuNXNcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7T2JzZXJ2ZXJ8RnVuY3Rpb259IG9ic2VydmVyT3JOZXh0IChvcHRpb25hbCkgRWl0aGVyIGFuIG9ic2VydmVyIHdpdGggbWV0aG9kcyB0byBiZSBjYWxsZWQsXG4gICAqIG9yIHRoZSBmaXJzdCBvZiB0aHJlZSBwb3NzaWJsZSBoYW5kbGVycywgd2hpY2ggaXMgdGhlIGhhbmRsZXIgZm9yIGVhY2ggdmFsdWUgZW1pdHRlZCBmcm9tIHRoZSBzdWJzY3JpYmVkXG4gICAqIE9ic2VydmFibGUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVycm9yIChvcHRpb25hbCkgQSBoYW5kbGVyIGZvciBhIHRlcm1pbmFsIGV2ZW50IHJlc3VsdGluZyBmcm9tIGFuIGVycm9yLiBJZiBubyBlcnJvciBoYW5kbGVyIGlzIHByb3ZpZGVkLFxuICAgKiB0aGUgZXJyb3Igd2lsbCBiZSB0aHJvd24gYXN5bmNocm9ub3VzbHkgYXMgdW5oYW5kbGVkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wbGV0ZSAob3B0aW9uYWwpIEEgaGFuZGxlciBmb3IgYSB0ZXJtaW5hbCBldmVudCByZXN1bHRpbmcgZnJvbSBzdWNjZXNzZnVsIGNvbXBsZXRpb24uXG4gICAqIEByZXR1cm4ge1N1YnNjcmlwdGlvbn0gYSBzdWJzY3JpcHRpb24gcmVmZXJlbmNlIHRvIHRoZSByZWdpc3RlcmVkIGhhbmRsZXJzXG4gICAqIEBtZXRob2Qgc3Vic2NyaWJlXG4gICAqL1xuICBzdWJzY3JpYmUoXG4gICAgb2JzZXJ2ZXJPck5leHQ/OiBQYXJ0aWFsPE9ic2VydmVyPFQ+PiB8ICgodmFsdWU6IFQpID0+IHZvaWQpIHwgbnVsbCxcbiAgICBlcnJvcj86ICgoZXJyb3I6IGFueSkgPT4gdm9pZCkgfCBudWxsLFxuICAgIGNvbXBsZXRlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICApOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IHN1YnNjcmliZXIgPSBpc1N1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQpID8gb2JzZXJ2ZXJPck5leHQgOiBuZXcgU2FmZVN1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG5cbiAgICBlcnJvckNvbnRleHQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBvcGVyYXRvciwgc291cmNlIH0gPSB0aGlzO1xuICAgICAgc3Vic2NyaWJlci5hZGQoXG4gICAgICAgIG9wZXJhdG9yXG4gICAgICAgICAgPyAvLyBXZSdyZSBkZWFsaW5nIHdpdGggYSBzdWJzY3JpcHRpb24gaW4gdGhlXG4gICAgICAgICAgICAvLyBvcGVyYXRvciBjaGFpbiB0byBvbmUgb2Ygb3VyIGxpZnRlZCBvcGVyYXRvcnMuXG4gICAgICAgICAgICBvcGVyYXRvci5jYWxsKHN1YnNjcmliZXIsIHNvdXJjZSlcbiAgICAgICAgICA6IHNvdXJjZVxuICAgICAgICAgID8gLy8gSWYgYHNvdXJjZWAgaGFzIGEgdmFsdWUsIGJ1dCBgb3BlcmF0b3JgIGRvZXMgbm90LCBzb21ldGhpbmcgdGhhdFxuICAgICAgICAgICAgLy8gaGFkIGludGltYXRlIGtub3dsZWRnZSBvZiBvdXIgQVBJLCBsaWtlIG91ciBgU3ViamVjdGAsIG11c3QgaGF2ZVxuICAgICAgICAgICAgLy8gc2V0IGl0LiBXZSdyZSBnb2luZyB0byBqdXN0IGNhbGwgYF9zdWJzY3JpYmVgIGRpcmVjdGx5LlxuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlKHN1YnNjcmliZXIpXG4gICAgICAgICAgOiAvLyBJbiBhbGwgb3RoZXIgY2FzZXMsIHdlJ3JlIGxpa2VseSB3cmFwcGluZyBhIHVzZXItcHJvdmlkZWQgaW5pdGlhbGl6ZXJcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uLCBzbyB3ZSBuZWVkIHRvIGNhdGNoIGVycm9ycyBhbmQgaGFuZGxlIHRoZW0gYXBwcm9wcmlhdGVseS5cbiAgICAgICAgICAgIHRoaXMuX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3RyeVN1YnNjcmliZShzaW5rOiBTdWJzY3JpYmVyPFQ+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoc2luayk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIHJldHVybiBhbnl0aGluZyBpbiB0aGlzIGNhc2UsXG4gICAgICAvLyBiZWNhdXNlIGl0J3MganVzdCBnb2luZyB0byB0cnkgdG8gYGFkZCgpYCB0byBhIHN1YnNjcmlwdGlvblxuICAgICAgLy8gYWJvdmUuXG4gICAgICBzaW5rLmVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgYXMgYSBOT04tQ0FOQ0VMTEFCTEUgbWVhbnMgb2Ygc3Vic2NyaWJpbmcgdG8gYW4gb2JzZXJ2YWJsZSwgZm9yIHVzZSB3aXRoXG4gICAqIEFQSXMgdGhhdCBleHBlY3QgcHJvbWlzZXMsIGxpa2UgYGFzeW5jL2F3YWl0YC4gWW91IGNhbm5vdCB1bnN1YnNjcmliZSBmcm9tIHRoaXMuXG4gICAqXG4gICAqICoqV0FSTklORyoqOiBPbmx5IHVzZSB0aGlzIHdpdGggb2JzZXJ2YWJsZXMgeW91ICprbm93KiB3aWxsIGNvbXBsZXRlLiBJZiB0aGUgc291cmNlXG4gICAqIG9ic2VydmFibGUgZG9lcyBub3QgY29tcGxldGUsIHlvdSB3aWxsIGVuZCB1cCB3aXRoIGEgcHJvbWlzZSB0aGF0IGlzIGh1bmcgdXAsIGFuZFxuICAgKiBwb3RlbnRpYWxseSBhbGwgb2YgdGhlIHN0YXRlIG9mIGFuIGFzeW5jIGZ1bmN0aW9uIGhhbmdpbmcgb3V0IGluIG1lbW9yeS4gVG8gYXZvaWRcbiAgICogdGhpcyBzaXR1YXRpb24sIGxvb2sgaW50byBhZGRpbmcgc29tZXRoaW5nIGxpa2Uge0BsaW5rIHRpbWVvdXR9LCB7QGxpbmsgdGFrZX0sXG4gICAqIHtAbGluayB0YWtlV2hpbGV9LCBvciB7QGxpbmsgdGFrZVVudGlsfSBhbW9uZ3N0IG90aGVycy5cbiAgICpcbiAgICogIyMjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlIH0gZnJvbSAncnhqcyc7XG4gICAqXG4gICAqIGNvbnN0IHNvdXJjZSQgPSBpbnRlcnZhbCgxMDAwKS5waXBlKHRha2UoNCkpO1xuICAgKlxuICAgKiBhc3luYyBmdW5jdGlvbiBnZXRUb3RhbCgpIHtcbiAgICogICBsZXQgdG90YWwgPSAwO1xuICAgKlxuICAgKiAgIGF3YWl0IHNvdXJjZSQuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAqICAgICB0b3RhbCArPSB2YWx1ZTtcbiAgICogICAgIGNvbnNvbGUubG9nKCdvYnNlcnZhYmxlIC0+ICcgKyB2YWx1ZSk7XG4gICAqICAgfSk7XG4gICAqXG4gICAqICAgcmV0dXJuIHRvdGFsO1xuICAgKiB9XG4gICAqXG4gICAqIGdldFRvdGFsKCkudGhlbihcbiAgICogICB0b3RhbCA9PiBjb25zb2xlLmxvZygnVG90YWw6ICcgKyB0b3RhbClcbiAgICogKTtcbiAgICpcbiAgICogLy8gRXhwZWN0ZWQ6XG4gICAqIC8vICdvYnNlcnZhYmxlIC0+IDAnXG4gICAqIC8vICdvYnNlcnZhYmxlIC0+IDEnXG4gICAqIC8vICdvYnNlcnZhYmxlIC0+IDInXG4gICAqIC8vICdvYnNlcnZhYmxlIC0+IDMnXG4gICAqIC8vICdUb3RhbDogNidcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBuZXh0IGEgaGFuZGxlciBmb3IgZWFjaCB2YWx1ZSBlbWl0dGVkIGJ5IHRoZSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgZWl0aGVyIHJlc29sdmVzIG9uIG9ic2VydmFibGUgY29tcGxldGlvbiBvclxuICAgKiAgcmVqZWN0cyB3aXRoIHRoZSBoYW5kbGVkIGVycm9yXG4gICAqL1xuICBmb3JFYWNoKG5leHQ6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBuZXh0IGEgaGFuZGxlciBmb3IgZWFjaCB2YWx1ZSBlbWl0dGVkIGJ5IHRoZSBvYnNlcnZhYmxlXG4gICAqIEBwYXJhbSBwcm9taXNlQ3RvciBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHVzZWQgdG8gaW5zdGFudGlhdGUgdGhlIFByb21pc2VcbiAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCBlaXRoZXIgcmVzb2x2ZXMgb24gb2JzZXJ2YWJsZSBjb21wbGV0aW9uIG9yXG4gICAqICByZWplY3RzIHdpdGggdGhlIGhhbmRsZWQgZXJyb3JcbiAgICogQGRlcHJlY2F0ZWQgUGFzc2luZyBhIFByb21pc2UgY29uc3RydWN0b3Igd2lsbCBubyBsb25nZXIgYmUgYXZhaWxhYmxlXG4gICAqIGluIHVwY29taW5nIHZlcnNpb25zIG9mIFJ4SlMuIFRoaXMgaXMgYmVjYXVzZSBpdCBhZGRzIHdlaWdodCB0byB0aGUgbGlicmFyeSwgZm9yIHZlcnlcbiAgICogbGl0dGxlIGJlbmVmaXQuIElmIHlvdSBuZWVkIHRoaXMgZnVuY3Rpb25hbGl0eSwgaXQgaXMgcmVjb21tZW5kZWQgdGhhdCB5b3UgZWl0aGVyXG4gICAqIHBvbHlmaWxsIFByb21pc2UsIG9yIHlvdSBjcmVhdGUgYW4gYWRhcHRlciB0byBjb252ZXJ0IHRoZSByZXR1cm5lZCBuYXRpdmUgcHJvbWlzZVxuICAgKiB0byB3aGF0ZXZlciBwcm9taXNlIGltcGxlbWVudGF0aW9uIHlvdSB3YW50ZWQuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIGZvckVhY2gobmV4dDogKHZhbHVlOiBUKSA9PiB2b2lkLCBwcm9taXNlQ3RvcjogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSk6IFByb21pc2U8dm9pZD47XG5cbiAgZm9yRWFjaChuZXh0OiAodmFsdWU6IFQpID0+IHZvaWQsIHByb21pc2VDdG9yPzogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuXG4gICAgcmV0dXJuIG5ldyBwcm9taXNlQ3Rvcjx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBzdWJzY3JpYmVyID0gbmV3IFNhZmVTdWJzY3JpYmVyPFQ+KHtcbiAgICAgICAgbmV4dDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICBjb21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfSkgYXMgUHJvbWlzZTx2b2lkPjtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlPy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gIH1cblxuICAvKipcbiAgICogQW4gaW50ZXJvcCBwb2ludCBkZWZpbmVkIGJ5IHRoZSBlczctb2JzZXJ2YWJsZSBzcGVjIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLW9ic2VydmFibGVcbiAgICogQG1ldGhvZCBTeW1ib2wub2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSB0aGlzIGluc3RhbmNlIG9mIHRoZSBvYnNlcnZhYmxlXG4gICAqL1xuICBbU3ltYm9sX29ic2VydmFibGVdKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4gIHBpcGUoKTogT2JzZXJ2YWJsZTxUPjtcbiAgcGlwZTxBPihvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4pOiBPYnNlcnZhYmxlPEE+O1xuICBwaXBlPEEsIEI+KG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPiwgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+KTogT2JzZXJ2YWJsZTxCPjtcbiAgcGlwZTxBLCBCLCBDPihvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPiwgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+KTogT2JzZXJ2YWJsZTxDPjtcbiAgcGlwZTxBLCBCLCBDLCBEPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD5cbiAgKTogT2JzZXJ2YWJsZTxEPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+XG4gICk6IE9ic2VydmFibGU8RT47XG4gIHBpcGU8QSwgQiwgQywgRCwgRSwgRj4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPixcbiAgICBvcDY6IE9wZXJhdG9yRnVuY3Rpb248RSwgRj5cbiAgKTogT2JzZXJ2YWJsZTxGPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz5cbiAgKTogT2JzZXJ2YWJsZTxHPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBIPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz4sXG4gICAgb3A4OiBPcGVyYXRvckZ1bmN0aW9uPEcsIEg+XG4gICk6IE9ic2VydmFibGU8SD47XG4gIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgST4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPixcbiAgICBvcDY6IE9wZXJhdG9yRnVuY3Rpb248RSwgRj4sXG4gICAgb3A3OiBPcGVyYXRvckZ1bmN0aW9uPEYsIEc+LFxuICAgIG9wODogT3BlcmF0b3JGdW5jdGlvbjxHLCBIPixcbiAgICBvcDk6IE9wZXJhdG9yRnVuY3Rpb248SCwgST5cbiAgKTogT2JzZXJ2YWJsZTxJPjtcbiAgcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgICBvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sXG4gICAgb3AyOiBPcGVyYXRvckZ1bmN0aW9uPEEsIEI+LFxuICAgIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPixcbiAgICBvcDQ6IE9wZXJhdG9yRnVuY3Rpb248QywgRD4sXG4gICAgb3A1OiBPcGVyYXRvckZ1bmN0aW9uPEQsIEU+LFxuICAgIG9wNjogT3BlcmF0b3JGdW5jdGlvbjxFLCBGPixcbiAgICBvcDc6IE9wZXJhdG9yRnVuY3Rpb248RiwgRz4sXG4gICAgb3A4OiBPcGVyYXRvckZ1bmN0aW9uPEcsIEg+LFxuICAgIG9wOTogT3BlcmF0b3JGdW5jdGlvbjxILCBJPixcbiAgICAuLi5vcGVyYXRpb25zOiBPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55PltdXG4gICk6IE9ic2VydmFibGU8dW5rbm93bj47XG4gIC8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gc3RpdGNoIHRvZ2V0aGVyIGZ1bmN0aW9uYWwgb3BlcmF0b3JzIGludG8gYSBjaGFpbi5cbiAgICogQG1ldGhvZCBwaXBlXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IHRoZSBPYnNlcnZhYmxlIHJlc3VsdCBvZiBhbGwgb2YgdGhlIG9wZXJhdG9ycyBoYXZpbmdcbiAgICogYmVlbiBjYWxsZWQgaW4gdGhlIG9yZGVyIHRoZXkgd2VyZSBwYXNzZWQgaW4uXG4gICAqXG4gICAqICMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgaW50ZXJ2YWwsIGZpbHRlciwgbWFwLCBzY2FuIH0gZnJvbSAncnhqcyc7XG4gICAqXG4gICAqIGludGVydmFsKDEwMDApXG4gICAqICAgLnBpcGUoXG4gICAqICAgICBmaWx0ZXIoeCA9PiB4ICUgMiA9PT0gMCksXG4gICAqICAgICBtYXAoeCA9PiB4ICsgeCksXG4gICAqICAgICBzY2FuKChhY2MsIHgpID0+IGFjYyArIHgpXG4gICAqICAgKVxuICAgKiAgIC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcGlwZSguLi5vcGVyYXRpb25zOiBPcGVyYXRvckZ1bmN0aW9uPGFueSwgYW55PltdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShvcGVyYXRpb25zKSh0aGlzKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuICAvKiogQGRlcHJlY2F0ZWQgUmVwbGFjZWQgd2l0aCB7QGxpbmsgZmlyc3RWYWx1ZUZyb219IGFuZCB7QGxpbmsgbGFzdFZhbHVlRnJvbX0uIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvdG8tcHJvbWlzZSAqL1xuICB0b1Byb21pc2UoKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPjtcbiAgLyoqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2UgKi9cbiAgdG9Qcm9taXNlKFByb21pc2VDdG9yOiB0eXBlb2YgUHJvbWlzZSk6IFByb21pc2U8VCB8IHVuZGVmaW5lZD47XG4gIC8qKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHtAbGluayBmaXJzdFZhbHVlRnJvbX0gYW5kIHtAbGluayBsYXN0VmFsdWVGcm9tfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy90by1wcm9taXNlICovXG4gIHRvUHJvbWlzZShQcm9taXNlQ3RvcjogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSk6IFByb21pc2U8VCB8IHVuZGVmaW5lZD47XG4gIC8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGlzIE9ic2VydmFibGUgYW5kIGdldCBhIFByb21pc2UgcmVzb2x2aW5nIG9uXG4gICAqIGBjb21wbGV0ZWAgd2l0aCB0aGUgbGFzdCBlbWlzc2lvbiAoaWYgYW55KS5cbiAgICpcbiAgICogKipXQVJOSU5HKio6IE9ubHkgdXNlIHRoaXMgd2l0aCBvYnNlcnZhYmxlcyB5b3UgKmtub3cqIHdpbGwgY29tcGxldGUuIElmIHRoZSBzb3VyY2VcbiAgICogb2JzZXJ2YWJsZSBkb2VzIG5vdCBjb21wbGV0ZSwgeW91IHdpbGwgZW5kIHVwIHdpdGggYSBwcm9taXNlIHRoYXQgaXMgaHVuZyB1cCwgYW5kXG4gICAqIHBvdGVudGlhbGx5IGFsbCBvZiB0aGUgc3RhdGUgb2YgYW4gYXN5bmMgZnVuY3Rpb24gaGFuZ2luZyBvdXQgaW4gbWVtb3J5LiBUbyBhdm9pZFxuICAgKiB0aGlzIHNpdHVhdGlvbiwgbG9vayBpbnRvIGFkZGluZyBzb21ldGhpbmcgbGlrZSB7QGxpbmsgdGltZW91dH0sIHtAbGluayB0YWtlfSxcbiAgICoge0BsaW5rIHRha2VXaGlsZX0sIG9yIHtAbGluayB0YWtlVW50aWx9IGFtb25nc3Qgb3RoZXJzLlxuICAgKlxuICAgKiBAbWV0aG9kIHRvUHJvbWlzZVxuICAgKiBAcGFyYW0gW3Byb21pc2VDdG9yXSBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHVzZWQgdG8gaW5zdGFudGlhdGVcbiAgICogdGhlIFByb21pc2VcbiAgICogQHJldHVybiBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsYXN0IHZhbHVlIGVtaXQsIG9yXG4gICAqIHJlamVjdHMgb24gYW4gZXJyb3IuIElmIHRoZXJlIHdlcmUgbm8gZW1pc3Npb25zLCBQcm9taXNlXG4gICAqIHJlc29sdmVzIHdpdGggdW5kZWZpbmVkLlxuICAgKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHtAbGluayBmaXJzdFZhbHVlRnJvbX0gYW5kIHtAbGluayBsYXN0VmFsdWVGcm9tfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy90by1wcm9taXNlXG4gICAqL1xuICB0b1Byb21pc2UocHJvbWlzZUN0b3I/OiBQcm9taXNlQ29uc3RydWN0b3JMaWtlKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XG4gICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG5cbiAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB2YWx1ZTogVCB8IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuc3Vic2NyaWJlKFxuICAgICAgICAoeDogVCkgPT4gKHZhbHVlID0geCksXG4gICAgICAgIChlcnI6IGFueSkgPT4gcmVqZWN0KGVyciksXG4gICAgICAgICgpID0+IHJlc29sdmUodmFsdWUpXG4gICAgICApO1xuICAgIH0pIGFzIFByb21pc2U8VCB8IHVuZGVmaW5lZD47XG4gIH1cbn1cblxuLyoqXG4gKiBEZWNpZGVzIGJldHdlZW4gYSBwYXNzZWQgcHJvbWlzZSBjb25zdHJ1Y3RvciBmcm9tIGNvbnN1bWluZyBjb2RlLFxuICogQSBkZWZhdWx0IGNvbmZpZ3VyZWQgcHJvbWlzZSBjb25zdHJ1Y3RvciwgYW5kIHRoZSBuYXRpdmUgcHJvbWlzZVxuICogY29uc3RydWN0b3IgYW5kIHJldHVybnMgaXQuIElmIG5vdGhpbmcgY2FuIGJlIGZvdW5kLCBpdCB3aWxsIHRocm93XG4gKiBhbiBlcnJvci5cbiAqIEBwYXJhbSBwcm9taXNlQ3RvciBUaGUgb3B0aW9uYWwgcHJvbWlzZSBjb25zdHJ1Y3RvciB0byBwYXNzZWQgYnkgY29uc3VtaW5nIGNvZGVcbiAqL1xuZnVuY3Rpb24gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3I6IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UgfCB1bmRlZmluZWQpIHtcbiAgcmV0dXJuIHByb21pc2VDdG9yID8/IGNvbmZpZy5Qcm9taXNlID8/IFByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGlzT2JzZXJ2ZXI8VD4odmFsdWU6IGFueSk6IHZhbHVlIGlzIE9ic2VydmVyPFQ+IHtcbiAgcmV0dXJuIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUubmV4dCkgJiYgaXNGdW5jdGlvbih2YWx1ZS5lcnJvcikgJiYgaXNGdW5jdGlvbih2YWx1ZS5jb21wbGV0ZSk7XG59XG5cbmZ1bmN0aW9uIGlzU3Vic2NyaWJlcjxUPih2YWx1ZTogYW55KTogdmFsdWUgaXMgU3Vic2NyaWJlcjxUPiB7XG4gIHJldHVybiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB8fCAoaXNPYnNlcnZlcih2YWx1ZSkgJiYgaXNTdWJzY3JpcHRpb24odmFsdWUpKTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbi8qKlxuICogVXNlZCB0byBkZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGFuIE9ic2VydmFibGUgd2l0aCBhIGxpZnQgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNMaWZ0KHNvdXJjZTogYW55KTogc291cmNlIGlzIHsgbGlmdDogSW5zdGFuY2VUeXBlPHR5cGVvZiBPYnNlcnZhYmxlPlsnbGlmdCddIH0ge1xuICByZXR1cm4gaXNGdW5jdGlvbihzb3VyY2U/LmxpZnQpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYE9wZXJhdG9yRnVuY3Rpb25gLiBVc2VkIHRvIGRlZmluZSBvcGVyYXRvcnMgdGhyb3VnaG91dCB0aGUgbGlicmFyeSBpbiBhIGNvbmNpc2Ugd2F5LlxuICogQHBhcmFtIGluaXQgVGhlIGxvZ2ljIHRvIGNvbm5lY3QgdGhlIGxpZnRlZFNvdXJjZSB0byB0aGUgc3Vic2NyaWJlciBhdCB0aGUgbW9tZW50IG9mIHN1YnNjcmlwdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9wZXJhdGU8VCwgUj4oXG4gIGluaXQ6IChsaWZ0ZWRTb3VyY2U6IE9ic2VydmFibGU8VD4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4pID0+ICgoKSA9PiB2b2lkKSB8IHZvaWRcbik6IE9wZXJhdG9yRnVuY3Rpb248VCwgUj4ge1xuICByZXR1cm4gKHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xuICAgIGlmIChoYXNMaWZ0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2UubGlmdChmdW5jdGlvbiAodGhpczogU3Vic2NyaWJlcjxSPiwgbGlmdGVkU291cmNlOiBPYnNlcnZhYmxlPFQ+KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGluaXQobGlmdGVkU291cmNlLCB0aGlzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5hYmxlIHRvIGxpZnQgdW5rbm93biBPYnNlcnZhYmxlIHR5cGUnKTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhbiBgT3BlcmF0b3JTdWJzY3JpYmVyYC5cbiAqIEBwYXJhbSBkZXN0aW5hdGlvbiBUaGUgZG93bnN0cmVhbSBzdWJzY3JpYmVyLlxuICogQHBhcmFtIG9uTmV4dCBIYW5kbGVzIG5leHQgdmFsdWVzLCBvbmx5IGNhbGxlZCBpZiB0aGlzIHN1YnNjcmliZXIgaXMgbm90IHN0b3BwZWQgb3IgY2xvc2VkLiBBbnlcbiAqIGVycm9yIHRoYXQgb2NjdXJzIGluIHRoaXMgZnVuY3Rpb24gaXMgY2F1Z2h0IGFuZCBzZW50IHRvIHRoZSBgZXJyb3JgIG1ldGhvZCBvZiB0aGlzIHN1YnNjcmliZXIuXG4gKiBAcGFyYW0gb25FcnJvciBIYW5kbGVzIGVycm9ycyBmcm9tIHRoZSBzdWJzY3JpcHRpb24sIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBpbiB0aGlzIGhhbmRsZXIgYXJlIGNhdWdodFxuICogYW5kIHNlbmQgdG8gdGhlIGBkZXN0aW5hdGlvbmAgZXJyb3IgaGFuZGxlci5cbiAqIEBwYXJhbSBvbkNvbXBsZXRlIEhhbmRsZXMgY29tcGxldGlvbiBub3RpZmljYXRpb24gZnJvbSB0aGUgc3Vic2NyaXB0aW9uLiBBbnkgZXJyb3JzIHRoYXQgb2NjdXIgaW5cbiAqIHRoaXMgaGFuZGxlciBhcmUgc2VudCB0byB0aGUgYGRlc3RpbmF0aW9uYCBlcnJvciBoYW5kbGVyLlxuICogQHBhcmFtIG9uRmluYWxpemUgQWRkaXRpb25hbCB0ZWFyZG93biBsb2dpYyBoZXJlLiBUaGlzIHdpbGwgb25seSBiZSBjYWxsZWQgb24gdGVhcmRvd24gaWYgdGhlXG4gKiBzdWJzY3JpYmVyIGl0c2VsZiBpcyBub3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGFsbCBvdGhlciB0ZWFyZG93biBsb2dpYyBpcyBleGVjdXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcjxUPihcbiAgZGVzdGluYXRpb246IFN1YnNjcmliZXI8YW55PixcbiAgb25OZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuICBvbkNvbXBsZXRlPzogKCkgPT4gdm9pZCxcbiAgb25FcnJvcj86IChlcnI6IGFueSkgPT4gdm9pZCxcbiAgb25GaW5hbGl6ZT86ICgpID0+IHZvaWRcbik6IFN1YnNjcmliZXI8VD4ge1xuICByZXR1cm4gbmV3IE9wZXJhdG9yU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgb25OZXh0LCBvbkNvbXBsZXRlLCBvbkVycm9yLCBvbkZpbmFsaXplKTtcbn1cblxuLyoqXG4gKiBBIGdlbmVyaWMgaGVscGVyIGZvciBhbGxvd2luZyBvcGVyYXRvcnMgdG8gYmUgY3JlYXRlZCB3aXRoIGEgU3Vic2NyaWJlciBhbmRcbiAqIHVzZSBjbG9zdXJlcyB0byBjYXB0dXJlIG5lY2Vzc2FyeSBzdGF0ZSBmcm9tIHRoZSBvcGVyYXRvciBmdW5jdGlvbiBpdHNlbGYuXG4gKi9cbmV4cG9ydCBjbGFzcyBPcGVyYXRvclN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYW4gYE9wZXJhdG9yU3Vic2NyaWJlcmAuXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbiBUaGUgZG93bnN0cmVhbSBzdWJzY3JpYmVyLlxuICAgKiBAcGFyYW0gb25OZXh0IEhhbmRsZXMgbmV4dCB2YWx1ZXMsIG9ubHkgY2FsbGVkIGlmIHRoaXMgc3Vic2NyaWJlciBpcyBub3Qgc3RvcHBlZCBvciBjbG9zZWQuIEFueVxuICAgKiBlcnJvciB0aGF0IG9jY3VycyBpbiB0aGlzIGZ1bmN0aW9uIGlzIGNhdWdodCBhbmQgc2VudCB0byB0aGUgYGVycm9yYCBtZXRob2Qgb2YgdGhpcyBzdWJzY3JpYmVyLlxuICAgKiBAcGFyYW0gb25FcnJvciBIYW5kbGVzIGVycm9ycyBmcm9tIHRoZSBzdWJzY3JpcHRpb24sIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBpbiB0aGlzIGhhbmRsZXIgYXJlIGNhdWdodFxuICAgKiBhbmQgc2VuZCB0byB0aGUgYGRlc3RpbmF0aW9uYCBlcnJvciBoYW5kbGVyLlxuICAgKiBAcGFyYW0gb25Db21wbGV0ZSBIYW5kbGVzIGNvbXBsZXRpb24gbm90aWZpY2F0aW9uIGZyb20gdGhlIHN1YnNjcmlwdGlvbi4gQW55IGVycm9ycyB0aGF0IG9jY3VyIGluXG4gICAqIHRoaXMgaGFuZGxlciBhcmUgc2VudCB0byB0aGUgYGRlc3RpbmF0aW9uYCBlcnJvciBoYW5kbGVyLlxuICAgKiBAcGFyYW0gb25GaW5hbGl6ZSBBZGRpdGlvbmFsIGZpbmFsaXphdGlvbiBsb2dpYyBoZXJlLiBUaGlzIHdpbGwgb25seSBiZSBjYWxsZWQgb24gZmluYWxpemF0aW9uIGlmIHRoZVxuICAgKiBzdWJzY3JpYmVyIGl0c2VsZiBpcyBub3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGFsbCBvdGhlciBmaW5hbGl6YXRpb24gbG9naWMgaXMgZXhlY3V0ZWQuXG4gICAqIEBwYXJhbSBzaG91bGRVbnN1YnNjcmliZSBBbiBvcHRpb25hbCBjaGVjayB0byBzZWUgaWYgYW4gdW5zdWJzY3JpYmUgY2FsbCBzaG91bGQgdHJ1bHkgdW5zdWJzY3JpYmUuXG4gICAqIE5PVEU6IFRoaXMgY3VycmVudGx5ICoqT05MWSoqIGV4aXN0cyB0byBzdXBwb3J0IHRoZSBzdHJhbmdlIGJlaGF2aW9yIG9mIHtAbGluayBncm91cEJ5fSwgd2hlcmUgdW5zdWJzY3JpcHRpb25cbiAgICogdG8gdGhlIHJlc3VsdGluZyBvYnNlcnZhYmxlIGRvZXMgbm90IGFjdHVhbGx5IGRpc2Nvbm5lY3QgZnJvbSB0aGUgc291cmNlIGlmIHRoZXJlIGFyZSBhY3RpdmUgc3Vic2NyaXB0aW9uc1xuICAgKiB0byBhbnkgZ3JvdXBlZCBvYnNlcnZhYmxlLiAoRE8gTk9UIEVYUE9TRSBPUiBVU0UgRVhURVJOQUxMWSEhISlcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPGFueT4sXG4gICAgb25OZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuICAgIG9uQ29tcGxldGU/OiAoKSA9PiB2b2lkLFxuICAgIG9uRXJyb3I/OiAoZXJyOiBhbnkpID0+IHZvaWQsXG4gICAgcHJpdmF0ZSBvbkZpbmFsaXplPzogKCkgPT4gdm9pZCxcbiAgICBwcml2YXRlIHNob3VsZFVuc3Vic2NyaWJlPzogKCkgPT4gYm9vbGVhblxuICApIHtcbiAgICAvLyBJdCdzIGltcG9ydGFudCAtIGZvciBwZXJmb3JtYW5jZSByZWFzb25zIC0gdGhhdCBhbGwgb2YgdGhpcyBjbGFzcydzXG4gICAgLy8gbWVtYmVycyBhcmUgaW5pdGlhbGl6ZWQgYW5kIHRoYXQgdGhleSBhcmUgYWx3YXlzIGluaXRpYWxpemVkIGluIHRoZSBzYW1lXG4gICAgLy8gb3JkZXIuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBhbGwgT3BlcmF0b3JTdWJzY3JpYmVyIGluc3RhbmNlcyBoYXZlIHRoZVxuICAgIC8vIHNhbWUgaGlkZGVuIGNsYXNzIGluIFY4LiBUaGlzLCBpbiB0dXJuLCB3aWxsIGhlbHAga2VlcCB0aGUgbnVtYmVyIG9mXG4gICAgLy8gaGlkZGVuIGNsYXNzZXMgaW52b2x2ZWQgaW4gcHJvcGVydHkgYWNjZXNzZXMgd2l0aGluIHRoZSBiYXNlIGNsYXNzIGFzXG4gICAgLy8gbG93IGFzIHBvc3NpYmxlLiBJZiB0aGUgbnVtYmVyIG9mIGhpZGRlbiBjbGFzc2VzIGludm9sdmVkIGV4Y2VlZHMgZm91cixcbiAgICAvLyB0aGUgcHJvcGVydHkgYWNjZXNzZXMgd2lsbCBiZWNvbWUgbWVnYW1vcnBoaWMgYW5kIHBlcmZvcm1hbmNlIHBlbmFsdGllc1xuICAgIC8vIHdpbGwgYmUgaW5jdXJyZWQgLSBpLmUuIGlubGluZSBjYWNoZXMgd29uJ3QgYmUgdXNlZC5cbiAgICAvL1xuICAgIC8vIFRoZSByZWFzb25zIGZvciBlbnN1cmluZyBhbGwgaW5zdGFuY2VzIGhhdmUgdGhlIHNhbWUgaGlkZGVuIGNsYXNzIGFyZVxuICAgIC8vIGZ1cnRoZXIgZGlzY3Vzc2VkIGluIHRoaXMgYmxvZyBwb3N0IGZyb20gQmVuZWRpa3QgTWV1cmVyOlxuICAgIC8vIGh0dHBzOi8vYmVuZWRpa3RtZXVyZXIuZGUvMjAxOC8wMy8yMy9pbXBhY3Qtb2YtcG9seW1vcnBoaXNtLW9uLWNvbXBvbmVudC1iYXNlZC1mcmFtZXdvcmtzLWxpa2UtcmVhY3QvXG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMuX25leHQgPSBvbk5leHRcbiAgICAgID8gZnVuY3Rpb24gKHRoaXM6IE9wZXJhdG9yU3Vic2NyaWJlcjxUPiwgdmFsdWU6IFQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb25OZXh0KHZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA6IHN1cGVyLl9uZXh0O1xuICAgIHRoaXMuX2Vycm9yID0gb25FcnJvclxuICAgICAgPyBmdW5jdGlvbiAodGhpczogT3BlcmF0b3JTdWJzY3JpYmVyPFQ+LCBlcnI6IGFueSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBTZW5kIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBkb3duIHN0cmVhbS5cbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBmaW5hbGl6YXRpb24uXG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA6IHN1cGVyLl9lcnJvcjtcbiAgICB0aGlzLl9jb21wbGV0ZSA9IG9uQ29tcGxldGVcbiAgICAgID8gZnVuY3Rpb24gKHRoaXM6IE9wZXJhdG9yU3Vic2NyaWJlcjxUPikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBTZW5kIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBkb3duIHN0cmVhbS5cbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBmaW5hbGl6YXRpb24uXG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA6IHN1cGVyLl9jb21wbGV0ZTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5zaG91bGRVbnN1YnNjcmliZSB8fCB0aGlzLnNob3VsZFVuc3Vic2NyaWJlKCkpIHtcbiAgICAgIGNvbnN0IHsgY2xvc2VkIH0gPSB0aGlzO1xuICAgICAgc3VwZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgIC8vIEV4ZWN1dGUgYWRkaXRpb25hbCB0ZWFyZG93biBpZiB3ZSBoYXZlIGFueSBhbmQgd2UgZGlkbid0IGFscmVhZHkgZG8gc28uXG4gICAgICAhY2xvc2VkICYmIHRoaXMub25GaW5hbGl6ZT8uKCk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlRXJyb3JDbGFzcyB9IGZyb20gJy4vY3JlYXRlRXJyb3JDbGFzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yQ3RvciB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIERvIG5vdCBjb25zdHJ1Y3QgZXJyb3IgaW5zdGFuY2VzLlxuICAgKiBDYW5ub3QgYmUgdGFnZ2VkIGFzIGludGVybmFsOiBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RpdmVYL3J4anMvaXNzdWVzLzYyNjlcbiAgICovXG4gIG5ldyAoKTogT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3I7XG59XG5cbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gYW4gYWN0aW9uIGlzIGludmFsaWQgYmVjYXVzZSB0aGUgb2JqZWN0IGhhcyBiZWVuXG4gKiB1bnN1YnNjcmliZWQuXG4gKlxuICogQHNlZSB7QGxpbmsgU3ViamVjdH1cbiAqIEBzZWUge0BsaW5rIEJlaGF2aW9yU3ViamVjdH1cbiAqXG4gKiBAY2xhc3MgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yOiBPYmplY3RVbnN1YnNjcmliZWRFcnJvckN0b3IgPSBjcmVhdGVFcnJvckNsYXNzKFxuICAoX3N1cGVyKSA9PlxuICAgIGZ1bmN0aW9uIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbCh0aGlzOiBhbnkpIHtcbiAgICAgIF9zdXBlcih0aGlzKTtcbiAgICAgIHRoaXMubmFtZSA9ICdPYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSAnb2JqZWN0IHVuc3Vic2NyaWJlZCc7XG4gICAgfVxuKTtcbiIsICJpbXBvcnQgeyBPcGVyYXRvciB9IGZyb20gJy4vT3BlcmF0b3InO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgRU1QVFlfU1VCU0NSSVBUSU9OIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIFN1YnNjcmlwdGlvbkxpa2UsIFRlYXJkb3duTG9naWMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIH0gZnJvbSAnLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4vdXRpbC9hcnJSZW1vdmUnO1xuaW1wb3J0IHsgZXJyb3JDb250ZXh0IH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG5cbi8qKlxuICogQSBTdWJqZWN0IGlzIGEgc3BlY2lhbCB0eXBlIG9mIE9ic2VydmFibGUgdGhhdCBhbGxvd3MgdmFsdWVzIHRvIGJlXG4gKiBtdWx0aWNhc3RlZCB0byBtYW55IE9ic2VydmVycy4gU3ViamVjdHMgYXJlIGxpa2UgRXZlbnRFbWl0dGVycy5cbiAqXG4gKiBFdmVyeSBTdWJqZWN0IGlzIGFuIE9ic2VydmFibGUgYW5kIGFuIE9ic2VydmVyLiBZb3UgY2FuIHN1YnNjcmliZSB0byBhXG4gKiBTdWJqZWN0LCBhbmQgeW91IGNhbiBjYWxsIG5leHQgdG8gZmVlZCB2YWx1ZXMgYXMgd2VsbCBhcyBlcnJvciBhbmQgY29tcGxldGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJqZWN0PFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIFN1YnNjcmlwdGlvbkxpa2Uge1xuICBjbG9zZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGN1cnJlbnRPYnNlcnZlcnM6IE9ic2VydmVyPFQ+W10gfCBudWxsID0gbnVsbDtcblxuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIG9ic2VydmVyczogT2JzZXJ2ZXI8VD5bXSA9IFtdO1xuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIGlzU3RvcHBlZCA9IGZhbHNlO1xuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIGhhc0Vycm9yID0gZmFsc2U7XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgdGhyb3duRXJyb3I6IGFueSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBcInN1YmplY3RcIiBieSBiYXNpY2FsbHkgZ2x1aW5nIGFuIG9ic2VydmVyIHRvIGFuIG9ic2VydmFibGUuXG4gICAqXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBkZXByZWNhdGVkIFJlY29tbWVuZGVkIHlvdSBkbyBub3QgdXNlLiBXaWxsIGJlIHJlbW92ZWQgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLiBQbGFucyBmb3IgcmVwbGFjZW1lbnQgc3RpbGwgdW5kZXIgZGlzY3Vzc2lvbi5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGU6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55ID0gPFQ+KGRlc3RpbmF0aW9uOiBPYnNlcnZlcjxUPiwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KTogQW5vbnltb3VzU3ViamVjdDxUPiA9PiB7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNTdWJqZWN0PFQ+KGRlc3RpbmF0aW9uLCBzb3VyY2UpO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIE5PVEU6IFRoaXMgbXVzdCBiZSBoZXJlIHRvIG9ic2N1cmUgT2JzZXJ2YWJsZSdzIGNvbnN0cnVjdG9yLlxuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPFQsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgY29uc3Qgc3ViamVjdCA9IG5ldyBBbm9ueW1vdXNTdWJqZWN0KHRoaXMsIHRoaXMpO1xuICAgIHN1YmplY3Qub3BlcmF0b3IgPSBvcGVyYXRvciBhcyBhbnk7XG4gICAgcmV0dXJuIHN1YmplY3QgYXMgYW55O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3Rocm93SWZDbG9zZWQoKSB7XG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KHZhbHVlOiBUKSB7XG4gICAgZXJyb3JDb250ZXh0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRPYnNlcnZlcnMpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBBcnJheS5mcm9tKHRoaXMub2JzZXJ2ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMuY3VycmVudE9ic2VydmVycykge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBlcnJvcihlcnI6IGFueSkge1xuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGhyb3duRXJyb3IgPSBlcnI7XG4gICAgICAgIGNvbnN0IHsgb2JzZXJ2ZXJzIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAob2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpIS5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBlcnJvckNvbnRleHQoKCkgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHsgb2JzZXJ2ZXJzIH0gPSB0aGlzO1xuICAgICAgICB3aGlsZSAob2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpIS5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICB0aGlzLmlzU3RvcHBlZCA9IHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLm9ic2VydmVycyA9IHRoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGwhO1xuICB9XG5cbiAgZ2V0IG9ic2VydmVkKCkge1xuICAgIHJldHVybiB0aGlzLm9ic2VydmVycz8ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF90cnlTdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPik6IFRlYXJkb3duTG9naWMge1xuICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICByZXR1cm4gc3VwZXIuX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPik6IFN1YnNjcmlwdGlvbiB7XG4gICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgIHRoaXMuX2NoZWNrRmluYWxpemVkU3RhdHVzZXMoc3Vic2NyaWJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2lubmVyU3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX2lubmVyU3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55Pikge1xuICAgIGNvbnN0IHsgaGFzRXJyb3IsIGlzU3RvcHBlZCwgb2JzZXJ2ZXJzIH0gPSB0aGlzO1xuICAgIGlmIChoYXNFcnJvciB8fCBpc1N0b3BwZWQpIHtcbiAgICAgIHJldHVybiBFTVBUWV9TVUJTQ1JJUFRJT047XG4gICAgfVxuICAgIHRoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgb2JzZXJ2ZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gbnVsbDtcbiAgICAgIGFyclJlbW92ZShvYnNlcnZlcnMsIHN1YnNjcmliZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX2NoZWNrRmluYWxpemVkU3RhdHVzZXMoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSB7XG4gICAgY29uc3QgeyBoYXNFcnJvciwgdGhyb3duRXJyb3IsIGlzU3RvcHBlZCB9ID0gdGhpcztcbiAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhyb3duRXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoaXNTdG9wcGVkKSB7XG4gICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgT2JzZXJ2YWJsZSB3aXRoIHRoaXMgU3ViamVjdCBhcyB0aGUgc291cmNlLiBZb3UgY2FuIGRvIHRoaXNcbiAgICogdG8gY3JlYXRlIGN1c3RvbSBPYnNlcnZlci1zaWRlIGxvZ2ljIG9mIHRoZSBTdWJqZWN0IGFuZCBjb25jZWFsIGl0IGZyb21cbiAgICogY29kZSB0aGF0IHVzZXMgdGhlIE9ic2VydmFibGUuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IE9ic2VydmFibGUgdGhhdCB0aGUgU3ViamVjdCBjYXN0cyB0b1xuICAgKi9cbiAgYXNPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IG9ic2VydmFibGU6IGFueSA9IG5ldyBPYnNlcnZhYmxlPFQ+KCk7XG4gICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIEFub255bW91c1N1YmplY3Q8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIEFub255bW91c1N1YmplY3Q8VD4gZXh0ZW5kcyBTdWJqZWN0PFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICAgIHB1YmxpYyBkZXN0aW5hdGlvbj86IE9ic2VydmVyPFQ+LFxuICAgIHNvdXJjZT86IE9ic2VydmFibGU8VD5cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgfVxuXG4gIG5leHQodmFsdWU6IFQpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uPy5uZXh0Py4odmFsdWUpO1xuICB9XG5cbiAgZXJyb3IoZXJyOiBhbnkpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uPy5lcnJvcj8uKGVycik7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uPy5jb21wbGV0ZT8uKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZT8uc3Vic2NyaWJlKHN1YnNjcmliZXIpID8/IEVNUFRZX1NVQlNDUklQVElPTjtcbiAgfVxufVxuIiwgImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5cbi8qKlxuICogQSB2YXJpYW50IG9mIFN1YmplY3QgdGhhdCByZXF1aXJlcyBhbiBpbml0aWFsIHZhbHVlIGFuZCBlbWl0cyBpdHMgY3VycmVudFxuICogdmFsdWUgd2hlbmV2ZXIgaXQgaXMgc3Vic2NyaWJlZCB0by5cbiAqXG4gKiBAY2xhc3MgQmVoYXZpb3JTdWJqZWN0PFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBCZWhhdmlvclN1YmplY3Q8VD4gZXh0ZW5kcyBTdWJqZWN0PFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmFsdWU6IFQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IFQge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHN1cGVyLl9zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgIXN1YnNjcmlwdGlvbi5jbG9zZWQgJiYgc3Vic2NyaWJlci5uZXh0KHRoaXMuX3ZhbHVlKTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0VmFsdWUoKTogVCB7XG4gICAgY29uc3QgeyBoYXNFcnJvciwgdGhyb3duRXJyb3IsIF92YWx1ZSB9ID0gdGhpcztcbiAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgIHRocm93IHRocm93bkVycm9yO1xuICAgIH1cbiAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgcmV0dXJuIF92YWx1ZTtcbiAgfVxuXG4gIG5leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBzdXBlci5uZXh0KCh0aGlzLl92YWx1ZSA9IHZhbHVlKSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NjaGVkdWxlcih2YWx1ZTogYW55KTogdmFsdWUgaXMgU2NoZWR1bGVyTGlrZSB7XG4gIHJldHVybiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnNjaGVkdWxlKTtcbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBpc1NjaGVkdWxlciB9IGZyb20gJy4vaXNTY2hlZHVsZXInO1xuXG5mdW5jdGlvbiBsYXN0PFQ+KGFycjogVFtdKTogVCB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wUmVzdWx0U2VsZWN0b3IoYXJnczogYW55W10pOiAoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdW5rbm93bikgfCB1bmRlZmluZWQge1xuICByZXR1cm4gaXNGdW5jdGlvbihsYXN0KGFyZ3MpKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BTY2hlZHVsZXIoYXJnczogYW55W10pOiBTY2hlZHVsZXJMaWtlIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGlzU2NoZWR1bGVyKGxhc3QoYXJncykpID8gYXJncy5wb3AoKSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcE51bWJlcihhcmdzOiBhbnlbXSwgZGVmYXVsdFZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIGxhc3QoYXJncykgPT09ICdudW1iZXInID8gYXJncy5wb3AoKSEgOiBkZWZhdWx0VmFsdWU7XG59XG4iLCAiZXhwb3J0IGNvbnN0IGlzQXJyYXlMaWtlID0gKDxUPih4OiBhbnkpOiB4IGlzIEFycmF5TGlrZTxUPiA9PiB4ICYmIHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHggIT09ICdmdW5jdGlvbicpOyIsICJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSBcIi4vaXNGdW5jdGlvblwiO1xuXG4vKipcbiAqIFRlc3RzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIFwidGhlbm5hYmxlXCIuXG4gKiBAcGFyYW0gdmFsdWUgdGhlIG9iamVjdCB0byB0ZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2UodmFsdWU6IGFueSk6IHZhbHVlIGlzIFByb21pc2VMaWtlPGFueT4ge1xuICByZXR1cm4gaXNGdW5jdGlvbih2YWx1ZT8udGhlbik7XG59XG4iLCAiaW1wb3J0IHsgSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbi8qKiBJZGVudGlmaWVzIGFuIGlucHV0IGFzIGJlaW5nIE9ic2VydmFibGUgKGJ1dCBub3QgbmVjZXNzYXJ5IGFuIFJ4IE9ic2VydmFibGUpICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dDogYW55KTogaW5wdXQgaXMgSW50ZXJvcE9ic2VydmFibGU8YW55PiB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGlucHV0W1N5bWJvbF9vYnNlcnZhYmxlXSk7XG59XG4iLCAiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FzeW5jSXRlcmFibGU8VD4ob2JqOiBhbnkpOiBvYmogaXMgQXN5bmNJdGVyYWJsZTxUPiB7XG4gIHJldHVybiBTeW1ib2wuYXN5bmNJdGVyYXRvciAmJiBpc0Z1bmN0aW9uKG9iaj8uW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG59XG4iLCAiLyoqXG4gKiBDcmVhdGVzIHRoZSBUeXBlRXJyb3IgdG8gdGhyb3cgaWYgYW4gaW52YWxpZCBvYmplY3QgaXMgcGFzc2VkIHRvIGBmcm9tYCBvciBgc2NoZWR1bGVkYC5cbiAqIEBwYXJhbSBpbnB1dCBUaGUgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0OiBhbnkpIHtcbiAgLy8gVE9ETzogV2Ugc2hvdWxkIGNyZWF0ZSBlcnJvciBjb2RlcyB0aGF0IGNhbiBiZSBsb29rZWQgdXAsIHNvIHRoaXMgY2FuIGJlIGxlc3MgdmVyYm9zZS5cbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXG4gICAgYFlvdSBwcm92aWRlZCAke1xuICAgICAgaW5wdXQgIT09IG51bGwgJiYgdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyA/ICdhbiBpbnZhbGlkIG9iamVjdCcgOiBgJyR7aW5wdXR9J2BcbiAgICB9IHdoZXJlIGEgc3RyZWFtIHdhcyBleHBlY3RlZC4gWW91IGNhbiBwcm92aWRlIGFuIE9ic2VydmFibGUsIFByb21pc2UsIFJlYWRhYmxlU3RyZWFtLCBBcnJheSwgQXN5bmNJdGVyYWJsZSwgb3IgSXRlcmFibGUuYFxuICApO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBnZXRTeW1ib2xJdGVyYXRvcigpOiBzeW1ib2wge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCAhU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgcmV0dXJuICdAQGl0ZXJhdG9yJyBhcyBhbnk7XG4gIH1cblxuICByZXR1cm4gU3ltYm9sLml0ZXJhdG9yO1xufVxuXG5leHBvcnQgY29uc3QgaXRlcmF0b3IgPSBnZXRTeW1ib2xJdGVyYXRvcigpO1xuIiwgImltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuLyoqIElkZW50aWZpZXMgYW4gaW5wdXQgYXMgYmVpbmcgYW4gSXRlcmFibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0l0ZXJhYmxlKGlucHV0OiBhbnkpOiBpbnB1dCBpcyBJdGVyYWJsZTxhbnk+IHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oaW5wdXQ/LltTeW1ib2xfaXRlcmF0b3JdKTtcbn1cbiIsICJpbXBvcnQgeyBSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uKiByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yPFQ+KHJlYWRhYmxlU3RyZWFtOiBSZWFkYWJsZVN0cmVhbUxpa2U8VD4pOiBBc3luY0dlbmVyYXRvcjxUPiB7XG4gIGNvbnN0IHJlYWRlciA9IHJlYWRhYmxlU3RyZWFtLmdldFJlYWRlcigpO1xuICB0cnkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgeWllbGQgdmFsdWUhO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWFkZXIucmVsZWFzZUxvY2soKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkYWJsZVN0cmVhbUxpa2U8VD4ob2JqOiBhbnkpOiBvYmogaXMgUmVhZGFibGVTdHJlYW1MaWtlPFQ+IHtcbiAgLy8gV2UgZG9uJ3Qgd2FudCB0byB1c2UgaW5zdGFuY2VvZiBjaGVja3MgYmVjYXVzZSB0aGV5IHdvdWxkIHJldHVyblxuICAvLyBmYWxzZSBmb3IgaW5zdGFuY2VzIGZyb20gYW5vdGhlciBSZWFsbSwgbGlrZSBhbiA8aWZyYW1lPi5cbiAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqPy5nZXRSZWFkZXIpO1xufVxuIiwgImltcG9ydCB7IGlzQXJyYXlMaWtlIH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5TGlrZSc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuLi91dGlsL2lzUHJvbWlzZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIE9ic2VydmVkVmFsdWVPZiwgUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FzeW5jSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvciB9IGZyb20gJy4uL3V0aWwvdGhyb3dVbm9ic2VydmFibGVFcnJvcic7XG5pbXBvcnQgeyBpc0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzUmVhZGFibGVTdHJlYW1MaWtlLCByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi4vdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvcic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJGcm9tPE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oaW5wdXQ6IE8pOiBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPj47XG5leHBvcnQgZnVuY3Rpb24gaW5uZXJGcm9tPFQ+KGlucHV0OiBPYnNlcnZhYmxlSW5wdXQ8VD4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgaWYgKGlucHV0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgIGlmIChpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21JbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tUHJvbWlzZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc0FzeW5jSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbUFzeW5jSXRlcmFibGUoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tSXRlcmFibGUoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbVJlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gUnhKUyBPYnNlcnZhYmxlIGZyb20gYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyBgU3ltYm9sLm9ic2VydmFibGVgLlxuICogQHBhcmFtIG9iaiBBbiBvYmplY3QgdGhhdCBwcm9wZXJseSBpbXBsZW1lbnRzIGBTeW1ib2wub2JzZXJ2YWJsZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSW50ZXJvcE9ic2VydmFibGU8VD4ob2JqOiBhbnkpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgY29uc3Qgb2JzID0gb2JqW1N5bWJvbF9vYnNlcnZhYmxlXSgpO1xuICAgIGlmIChpc0Z1bmN0aW9uKG9icy5zdWJzY3JpYmUpKSB7XG4gICAgICByZXR1cm4gb2JzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIGJlIGNhdWdodCBieSBvYnNlcnZhYmxlIHN1YnNjcmliZSBmdW5jdGlvbiBlcnJvciBoYW5kbGluZy5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm92aWRlZCBvYmplY3QgZG9lcyBub3QgY29ycmVjdGx5IGltcGxlbWVudCBTeW1ib2wub2JzZXJ2YWJsZScpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTeW5jaHJvbm91c2x5IGVtaXRzIHRoZSB2YWx1ZXMgb2YgYW4gYXJyYXkgbGlrZSBhbmQgY29tcGxldGVzLlxuICogVGhpcyBpcyBleHBvcnRlZCBiZWNhdXNlIHRoZXJlIGFyZSBjcmVhdGlvbiBmdW5jdGlvbnMgYW5kIG9wZXJhdG9ycyB0aGF0IG5lZWQgdG9cbiAqIG1ha2UgZGlyZWN0IHVzZSBvZiB0aGUgc2FtZSBsb2dpYywgYW5kIHRoZXJlJ3Mgbm8gcmVhc29uIHRvIG1ha2UgdGhlbSBydW4gdGhyb3VnaFxuICogYGZyb21gIGNvbmRpdGlvbmFscyBiZWNhdXNlIHdlICprbm93KiB0aGV5J3JlIGRlYWxpbmcgd2l0aCBhbiBhcnJheS5cbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gZW1pdCB2YWx1ZXMgZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUFycmF5TGlrZTxUPihhcnJheTogQXJyYXlMaWtlPFQ+KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIC8vIExvb3Agb3ZlciB0aGUgYXJyYXkgYW5kIGVtaXQgZWFjaCB2YWx1ZS4gTm90ZSB0d28gdGhpbmdzIGhlcmU6XG4gICAgLy8gMS4gV2UncmUgbWFraW5nIHN1cmUgdGhhdCB0aGUgc3Vic2NyaWJlciBpcyBub3QgY2xvc2VkIG9uIGVhY2ggbG9vcC5cbiAgICAvLyAgICBUaGlzIGlzIHNvIHdlIGRvbid0IGNvbnRpbnVlIGxvb3Bpbmcgb3ZlciBhIHZlcnkgbGFyZ2UgYXJyYXkgYWZ0ZXJcbiAgICAvLyAgICBzb21ldGhpbmcgbGlrZSBhIGB0YWtlYCwgYHRha2VXaGlsZWAsIG9yIG90aGVyIHN5bmNocm9ub3VzIHVuc3Vic2NyaXB0aW9uXG4gICAgLy8gICAgaGFzIGFscmVhZHkgdW5zdWJzY3JpYmVkLlxuICAgIC8vIDIuIEluIHRoaXMgZm9ybSwgcmVlbnRyYW50IGNvZGUgY2FuIGFsdGVyIHRoYXQgYXJyYXkgd2UncmUgbG9vcGluZyBvdmVyLlxuICAgIC8vICAgIFRoaXMgaXMgYSBrbm93biBpc3N1ZSwgYnV0IGNvbnNpZGVyZWQgYW4gZWRnZSBjYXNlLiBUaGUgYWx0ZXJuYXRpdmUgd291bGRcbiAgICAvLyAgICBiZSB0byBjb3B5IHRoZSBhcnJheSBiZWZvcmUgZXhlY3V0aW5nIHRoZSBsb29wLCBidXQgdGhpcyBoYXNcbiAgICAvLyAgICBwZXJmb3JtYW5jZSBpbXBsaWNhdGlvbnMuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGggJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpXSk7XG4gICAgfVxuICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUHJvbWlzZTxUPihwcm9taXNlOiBQcm9taXNlTGlrZTxUPikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICBwcm9taXNlXG4gICAgICAudGhlbihcbiAgICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnI6IGFueSkgPT4gc3Vic2NyaWJlci5lcnJvcihlcnIpXG4gICAgICApXG4gICAgICAudGhlbihudWxsLCByZXBvcnRVbmhhbmRsZWRFcnJvcik7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbUl0ZXJhYmxlPFQ+KGl0ZXJhYmxlOiBJdGVyYWJsZTxUPikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGl0ZXJhYmxlKSB7XG4gICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Bc3luY0l0ZXJhYmxlPFQ+KGFzeW5jSXRlcmFibGU6IEFzeW5jSXRlcmFibGU8VD4pIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgcHJvY2Vzcyhhc3luY0l0ZXJhYmxlLCBzdWJzY3JpYmVyKS5jYXRjaCgoZXJyKSA9PiBzdWJzY3JpYmVyLmVycm9yKGVycikpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21SZWFkYWJsZVN0cmVhbUxpa2U8VD4ocmVhZGFibGVTdHJlYW06IFJlYWRhYmxlU3RyZWFtTGlrZTxUPikge1xuICByZXR1cm4gZnJvbUFzeW5jSXRlcmFibGUocmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcihyZWFkYWJsZVN0cmVhbSkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzPFQ+KGFzeW5jSXRlcmFibGU6IEFzeW5jSXRlcmFibGU8VD4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pIHtcbiAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBhc3luY0l0ZXJhYmxlKSB7XG4gICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAvLyBBIHNpZGUtZWZmZWN0IG1heSBoYXZlIGNsb3NlZCBvdXIgc3Vic2NyaWJlcixcbiAgICAvLyBjaGVjayBiZWZvcmUgdGhlIG5leHQgaXRlcmF0aW9uLlxuICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG59XG4iLCAiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFNjaGVkdWxlckFjdGlvbiwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTY2hlZHVsZShcbiAgcGFyZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24sXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSxcbiAgd29yazogKCkgPT4gdm9pZCxcbiAgZGVsYXk6IG51bWJlcixcbiAgcmVwZWF0OiB0cnVlXG4pOiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTY2hlZHVsZShcbiAgcGFyZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24sXG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSxcbiAgd29yazogKCkgPT4gdm9pZCxcbiAgZGVsYXk/OiBudW1iZXIsXG4gIHJlcGVhdD86IGZhbHNlXG4pOiBTdWJzY3JpcHRpb247XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU2NoZWR1bGUoXG4gIHBhcmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsXG4gIHdvcms6ICgpID0+IHZvaWQsXG4gIGRlbGF5ID0gMCxcbiAgcmVwZWF0ID0gZmFsc2Vcbik6IFN1YnNjcmlwdGlvbiB8IHZvaWQge1xuICBjb25zdCBzY2hlZHVsZVN1YnNjcmlwdGlvbiA9IHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAodGhpczogU2NoZWR1bGVyQWN0aW9uPGFueT4pIHtcbiAgICB3b3JrKCk7XG4gICAgaWYgKHJlcGVhdCkge1xuICAgICAgcGFyZW50U3Vic2NyaXB0aW9uLmFkZCh0aGlzLnNjaGVkdWxlKG51bGwsIGRlbGF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH0sIGRlbGF5KTtcblxuICBwYXJlbnRTdWJzY3JpcHRpb24uYWRkKHNjaGVkdWxlU3Vic2NyaXB0aW9uKTtcblxuICBpZiAoIXJlcGVhdCkge1xuICAgIC8vIEJlY2F1c2UgdXNlci1sYW5kIHNjaGVkdWxlciBpbXBsZW1lbnRhdGlvbnMgYXJlIHVubGlrZWx5IHRvIHByb3Blcmx5IHJldXNlXG4gICAgLy8gQWN0aW9ucyBmb3IgcmVwZWF0IHNjaGVkdWxpbmcsIHdlIGNhbid0IHRydXN0IHRoYXQgdGhlIHJldHVybmVkIHN1YnNjcmlwdGlvblxuICAgIC8vIHdpbGwgY29udHJvbCByZXBlYXQgc3Vic2NyaXB0aW9uIHNjZW5hcmlvcy4gU28gd2UncmUgdHJ5aW5nIHRvIGF2b2lkIHVzaW5nIHRoZW1cbiAgICAvLyBpbmNvcnJlY3RseSB3aXRoaW4gdGhpcyBsaWJyYXJ5LlxuICAgIHJldHVybiBzY2hlZHVsZVN1YnNjcmlwdGlvbjtcbiAgfVxufVxuIiwgIi8qKiBAcHJldHRpZXIgKi9cbmltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuXG4vKipcbiAqIFJlLWVtaXRzIGFsbCBub3RpZmljYXRpb25zIGZyb20gc291cmNlIE9ic2VydmFibGUgd2l0aCBzcGVjaWZpZWQgc2NoZWR1bGVyLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5FbnN1cmUgYSBzcGVjaWZpYyBzY2hlZHVsZXIgaXMgdXNlZCwgZnJvbSBvdXRzaWRlIG9mIGFuIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqIGBvYnNlcnZlT25gIGlzIGFuIG9wZXJhdG9yIHRoYXQgYWNjZXB0cyBhIHNjaGVkdWxlciBhcyBhIGZpcnN0IHBhcmFtZXRlciwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHJlc2NoZWR1bGVcbiAqIG5vdGlmaWNhdGlvbnMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUuIEl0IG1pZ2h0IGJlIHVzZWZ1bCwgaWYgeW91IGRvIG5vdCBoYXZlIGNvbnRyb2wgb3ZlclxuICogaW50ZXJuYWwgc2NoZWR1bGVyIG9mIGEgZ2l2ZW4gT2JzZXJ2YWJsZSwgYnV0IHdhbnQgdG8gY29udHJvbCB3aGVuIGl0cyB2YWx1ZXMgYXJlIGVtaXR0ZWQgbmV2ZXJ0aGVsZXNzLlxuICpcbiAqIFJldHVybmVkIE9ic2VydmFibGUgZW1pdHMgdGhlIHNhbWUgbm90aWZpY2F0aW9ucyAobmV4dGVkIHZhbHVlcywgY29tcGxldGUgYW5kIGVycm9yIGV2ZW50cykgYXMgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLFxuICogYnV0IHJlc2NoZWR1bGVkIHdpdGggcHJvdmlkZWQgc2NoZWR1bGVyLiBOb3RlIHRoYXQgdGhpcyBkb2Vzbid0IG1lYW4gdGhhdCBzb3VyY2UgT2JzZXJ2YWJsZXMgaW50ZXJuYWxcbiAqIHNjaGVkdWxlciB3aWxsIGJlIHJlcGxhY2VkIGluIGFueSB3YXkuIE9yaWdpbmFsIHNjaGVkdWxlciBzdGlsbCB3aWxsIGJlIHVzZWQsIGJ1dCB3aGVuIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBlbWl0c1xuICogbm90aWZpY2F0aW9uLCBpdCB3aWxsIGJlIGltbWVkaWF0ZWx5IHNjaGVkdWxlZCBhZ2FpbiAtIHRoaXMgdGltZSB3aXRoIHNjaGVkdWxlciBwYXNzZWQgdG8gYG9ic2VydmVPbmAuXG4gKiBBbiBhbnRpLXBhdHRlcm4gd291bGQgYmUgY2FsbGluZyBgb2JzZXJ2ZU9uYCBvbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgbG90cyBvZiB2YWx1ZXMgc3luY2hyb25vdXNseSwgdG8gc3BsaXRcbiAqIHRoYXQgZW1pc3Npb25zIGludG8gYXN5bmNocm9ub3VzIGNodW5rcy4gRm9yIHRoaXMgdG8gaGFwcGVuLCBzY2hlZHVsZXIgd291bGQgaGF2ZSB0byBiZSBwYXNzZWQgaW50byB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGRpcmVjdGx5ICh1c3VhbGx5IGludG8gdGhlIG9wZXJhdG9yIHRoYXQgY3JlYXRlcyBpdCkuIGBvYnNlcnZlT25gIHNpbXBseSBkZWxheXMgbm90aWZpY2F0aW9ucyBhXG4gKiBsaXR0bGUgYml0IG1vcmUsIHRvIGVuc3VyZSB0aGF0IHRoZXkgYXJlIGVtaXR0ZWQgYXQgZXhwZWN0ZWQgbW9tZW50cy5cbiAqXG4gKiBBcyBhIG1hdHRlciBvZiBmYWN0LCBgb2JzZXJ2ZU9uYCBhY2NlcHRzIHNlY29uZCBwYXJhbWV0ZXIsIHdoaWNoIHNwZWNpZmllcyBpbiBtaWxsaXNlY29uZHMgd2l0aCB3aGF0IGRlbGF5IG5vdGlmaWNhdGlvbnNcbiAqIHdpbGwgYmUgZW1pdHRlZC4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIHtAbGluayBkZWxheX0gb3BlcmF0b3IgYW5kIGBvYnNlcnZlT25gIGlzIHRoYXQgYG9ic2VydmVPbmBcbiAqIHdpbGwgZGVsYXkgYWxsIG5vdGlmaWNhdGlvbnMgLSBpbmNsdWRpbmcgZXJyb3Igbm90aWZpY2F0aW9ucyAtIHdoaWxlIGBkZWxheWAgd2lsbCBwYXNzIHRocm91Z2ggZXJyb3JcbiAqIGZyb20gc291cmNlIE9ic2VydmFibGUgaW1tZWRpYXRlbHkgd2hlbiBpdCBpcyBlbWl0dGVkLiBJbiBnZW5lcmFsIGl0IGlzIGhpZ2hseSByZWNvbW1lbmRlZCB0byB1c2UgYGRlbGF5YCBvcGVyYXRvclxuICogZm9yIGFueSBraW5kIG9mIGRlbGF5aW5nIG9mIHZhbHVlcyBpbiB0aGUgc3RyZWFtLCB3aGlsZSB1c2luZyBgb2JzZXJ2ZU9uYCB0byBzcGVjaWZ5IHdoaWNoIHNjaGVkdWxlciBzaG91bGQgYmUgdXNlZFxuICogZm9yIG5vdGlmaWNhdGlvbiBlbWlzc2lvbnMgaW4gZ2VuZXJhbC5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogRW5zdXJlIHZhbHVlcyBpbiBzdWJzY3JpYmUgYXJlIGNhbGxlZCBqdXN0IGJlZm9yZSBicm93c2VyIHJlcGFpbnRcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaW50ZXJ2YWwsIG9ic2VydmVPbiwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBzb21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gKiBzb21lRGl2LnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDIwMHB4O2JhY2tncm91bmQ6ICMwOWMnO1xuICogZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzb21lRGl2KTtcbiAqIGNvbnN0IGludGVydmFscyA9IGludGVydmFsKDEwKTsgICAgICAvLyBJbnRlcnZhbHMgYXJlIHNjaGVkdWxlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpdGggYXN5bmMgc2NoZWR1bGVyIGJ5IGRlZmF1bHQuLi5cbiAqIGludGVydmFscy5waXBlKFxuICogICBvYnNlcnZlT24oYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpIC8vIC4uLmJ1dCB3ZSB3aWxsIG9ic2VydmUgb24gYW5pbWF0aW9uRnJhbWVcbiAqICkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZXIgdG8gZW5zdXJlIHNtb290aCBhbmltYXRpb24uXG4gKiAuc3Vic2NyaWJlKHZhbCA9PiB7XG4gKiAgIHNvbWVEaXYuc3R5bGUuaGVpZ2h0ID0gdmFsICsgJ3B4JztcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgZGVsYXl9XG4gKlxuICogQHBhcmFtIHNjaGVkdWxlciBTY2hlZHVsZXIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcmVzY2hlZHVsZSBub3RpZmljYXRpb25zIGZyb20gc291cmNlIE9ic2VydmFibGUuXG4gKiBAcGFyYW0gZGVsYXkgTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IHN0YXRlcyB3aXRoIHdoYXQgZGVsYXkgZXZlcnkgbm90aWZpY2F0aW9uIHNob3VsZCBiZSByZXNjaGVkdWxlZC5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBzYW1lXG4gKiBub3RpZmljYXRpb25zIGFzIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgYnV0IHdpdGggcHJvdmlkZWQgc2NoZWR1bGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZU9uPFQ+KHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSwgZGVsYXkgPSAwKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcbiAgcmV0dXJuIG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4ge1xuICAgIHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoXG4gICAgICAgIHN1YnNjcmliZXIsXG4gICAgICAgICh2YWx1ZSkgPT4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4gc3Vic2NyaWJlci5uZXh0KHZhbHVlKSwgZGVsYXkpLFxuICAgICAgICAoKSA9PiBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiBzdWJzY3JpYmVyLmNvbXBsZXRlKCksIGRlbGF5KSxcbiAgICAgICAgKGVycikgPT4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4gc3Vic2NyaWJlci5lcnJvcihlcnIpLCBkZWxheSlcbiAgICAgIClcbiAgICApO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcblxuLyoqXG4gKiBBc3luY2hyb25vdXNseSBzdWJzY3JpYmVzIE9ic2VydmVycyB0byB0aGlzIE9ic2VydmFibGUgb24gdGhlIHNwZWNpZmllZCB7QGxpbmsgU2NoZWR1bGVyTGlrZX0uXG4gKlxuICogV2l0aCBgc3Vic2NyaWJlT25gIHlvdSBjYW4gZGVjaWRlIHdoYXQgdHlwZSBvZiBzY2hlZHVsZXIgYSBzcGVjaWZpYyBPYnNlcnZhYmxlIHdpbGwgYmUgdXNpbmcgd2hlbiBpdCBpcyBzdWJzY3JpYmVkIHRvLlxuICpcbiAqIFNjaGVkdWxlcnMgY29udHJvbCB0aGUgc3BlZWQgYW5kIG9yZGVyIG9mIGVtaXNzaW9ucyB0byBvYnNlcnZlcnMgZnJvbSBhbiBPYnNlcnZhYmxlIHN0cmVhbS5cbiAqXG4gKiAhW10oc3Vic2NyaWJlT24ucG5nKVxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBHaXZlbiB0aGUgZm9sbG93aW5nIGNvZGU6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGEgPSBvZigxLCAyLCAzKTtcbiAqIGNvbnN0IGIgPSBvZig0LCA1LCA2KTtcbiAqXG4gKiBtZXJnZShhLCBiKS5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICpcbiAqIC8vIE91dHB1dHNcbiAqIC8vIDFcbiAqIC8vIDJcbiAqIC8vIDNcbiAqIC8vIDRcbiAqIC8vIDVcbiAqIC8vIDZcbiAqIGBgYFxuICpcbiAqIEJvdGggT2JzZXJ2YWJsZSBgYWAgYW5kIGBiYCB3aWxsIGVtaXQgdGhlaXIgdmFsdWVzIGRpcmVjdGx5IGFuZCBzeW5jaHJvbm91c2x5IG9uY2UgdGhleSBhcmUgc3Vic2NyaWJlZCB0by5cbiAqXG4gKiBJZiB3ZSBpbnN0ZWFkIHVzZSB0aGUgYHN1YnNjcmliZU9uYCBvcGVyYXRvciBkZWNsYXJpbmcgdGhhdCB3ZSB3YW50IHRvIHVzZSB0aGUge0BsaW5rIGFzeW5jU2NoZWR1bGVyfSBmb3IgdmFsdWVzIGVtaXR0ZWQgYnkgT2JzZXJ2YWJsZSBgYWA6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBzdWJzY3JpYmVPbiwgYXN5bmNTY2hlZHVsZXIsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgYSA9IG9mKDEsIDIsIDMpLnBpcGUoc3Vic2NyaWJlT24oYXN5bmNTY2hlZHVsZXIpKTtcbiAqIGNvbnN0IGIgPSBvZig0LCA1LCA2KTtcbiAqXG4gKiBtZXJnZShhLCBiKS5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICpcbiAqIC8vIE91dHB1dHNcbiAqIC8vIDRcbiAqIC8vIDVcbiAqIC8vIDZcbiAqIC8vIDFcbiAqIC8vIDJcbiAqIC8vIDNcbiAqIGBgYFxuICpcbiAqIFRoZSByZWFzb24gZm9yIHRoaXMgaXMgdGhhdCBPYnNlcnZhYmxlIGBiYCBlbWl0cyBpdHMgdmFsdWVzIGRpcmVjdGx5IGFuZCBzeW5jaHJvbm91c2x5IGxpa2UgYmVmb3JlXG4gKiBidXQgdGhlIGVtaXNzaW9ucyBmcm9tIGBhYCBhcmUgc2NoZWR1bGVkIG9uIHRoZSBldmVudCBsb29wIGJlY2F1c2Ugd2UgYXJlIG5vdyB1c2luZyB0aGUge0BsaW5rIGFzeW5jU2NoZWR1bGVyfSBmb3IgdGhhdCBzcGVjaWZpYyBPYnNlcnZhYmxlLlxuICpcbiAqIEBwYXJhbSBzY2hlZHVsZXIgVGhlIHtAbGluayBTY2hlZHVsZXJMaWtlfSB0byBwZXJmb3JtIHN1YnNjcmlwdGlvbiBhY3Rpb25zIG9uLlxuICogQHBhcmFtIGRlbGF5IEEgZGVsYXkgdG8gcGFzcyB0byB0aGUgc2NoZWR1bGVyIHRvIGRlbGF5IHN1YnNjcmlwdGlvbnNcbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSBtb2RpZmllZCBzbyB0aGF0IGl0c1xuICogc3Vic2NyaXB0aW9ucyBoYXBwZW4gb24gdGhlIHNwZWNpZmllZCB7QGxpbmsgU2NoZWR1bGVyTGlrZX0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVPbjxUPihzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsIGRlbGF5OiBudW1iZXIgPSAwKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcbiAgcmV0dXJuIG9wZXJhdGUoKHNvdXJjZSwgc3Vic2NyaWJlcikgPT4ge1xuICAgIHN1YnNjcmliZXIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpLCBkZWxheSkpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBvYnNlcnZlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvb2JzZXJ2ZU9uJztcbmltcG9ydCB7IHN1YnNjcmliZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL3N1YnNjcmliZU9uJztcbmltcG9ydCB7IEludGVyb3BPYnNlcnZhYmxlLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVPYnNlcnZhYmxlPFQ+KGlucHV0OiBJbnRlcm9wT2JzZXJ2YWJsZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBpbm5lckZyb20oaW5wdXQpLnBpcGUoc3Vic2NyaWJlT24oc2NoZWR1bGVyKSwgb2JzZXJ2ZU9uKHNjaGVkdWxlcikpO1xufVxuIiwgImltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IG9ic2VydmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9vYnNlcnZlT24nO1xuaW1wb3J0IHsgc3Vic2NyaWJlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvc3Vic2NyaWJlT24nO1xuaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlUHJvbWlzZTxUPihpbnB1dDogUHJvbWlzZUxpa2U8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gaW5uZXJGcm9tKGlucHV0KS5waXBlKHN1YnNjcmliZU9uKHNjaGVkdWxlciksIG9ic2VydmVPbihzY2hlZHVsZXIpKTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBcnJheTxUPihpbnB1dDogQXJyYXlMaWtlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgLy8gVGhlIGN1cnJlbnQgYXJyYXkgaW5kZXguXG4gICAgbGV0IGkgPSAwO1xuICAgIC8vIFN0YXJ0IGl0ZXJhdGluZyBvdmVyIHRoZSBhcnJheSBsaWtlIG9uIGEgc2NoZWR1bGUuXG4gICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaSA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgdGhlIGFycmF5IGxpa2UgaW4gdGhlXG4gICAgICAgIC8vIHByZXZpb3VzIGpvYiwgd2UgY2FuIGNvbXBsZXRlLlxuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgbGV0J3MgbmV4dCB0aGUgdmFsdWUgYXQgdGhlIGN1cnJlbnQgaW5kZXgsXG4gICAgICAgIC8vIHRoZW4gaW5jcmVtZW50IG91ciBpbmRleC5cbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlucHV0W2krK10pO1xuICAgICAgICAvLyBJZiB0aGUgbGFzdCBlbWlzc2lvbiBkaWRuJ3QgY2F1c2UgdXMgdG8gY2xvc2UgdGhlIHN1YnNjcmliZXJcbiAgICAgICAgLy8gKHZpYSB0YWtlIG9yIHNvbWUgc2lkZSBlZmZlY3QpLCByZXNjaGVkdWxlIHRoZSBqb2IgYW5kIHdlJ2xsXG4gICAgICAgIC8vIG1ha2UgYW5vdGhlciBwYXNzLlxuICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5cbi8qKlxuICogVXNlZCBpbiB7QGxpbmsgc2NoZWR1bGVkfSB0byBjcmVhdGUgYW4gb2JzZXJ2YWJsZSBmcm9tIGFuIEl0ZXJhYmxlLlxuICogQHBhcmFtIGlucHV0IFRoZSBpdGVyYWJsZSB0byBjcmVhdGUgYW4gb2JzZXJ2YWJsZSBmcm9tXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFRoZSBzY2hlZHVsZXIgdG8gdXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUl0ZXJhYmxlPFQ+KGlucHV0OiBJdGVyYWJsZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIGxldCBpdGVyYXRvcjogSXRlcmF0b3I8VCwgVD47XG5cbiAgICAvLyBTY2hlZHVsZSB0aGUgaW5pdGlhbCBjcmVhdGlvbiBvZiB0aGUgaXRlcmF0b3IgZnJvbVxuICAgIC8vIHRoZSBpdGVyYWJsZS4gVGhpcyBpcyBzbyB0aGUgY29kZSBpbiB0aGUgaXRlcmFibGUgaXNcbiAgICAvLyBub3QgY2FsbGVkIHVudGlsIHRoZSBzY2hlZHVsZWQgam9iIGZpcmVzLlxuICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgaXRlcmF0b3IuXG4gICAgICBpdGVyYXRvciA9IChpbnB1dCBhcyBhbnkpW1N5bWJvbF9pdGVyYXRvcl0oKTtcblxuICAgICAgZXhlY3V0ZVNjaGVkdWxlKFxuICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICBzY2hlZHVsZXIsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgdmFsdWU6IFQ7XG4gICAgICAgICAgbGV0IGRvbmU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFB1bGwgdGhlIHZhbHVlIG91dCBvZiB0aGUgaXRlcmF0b3JcbiAgICAgICAgICAgICh7IHZhbHVlLCBkb25lIH0gPSBpdGVyYXRvci5uZXh0KCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gV2UgZ290IGFuIGVycm9yIHdoaWxlIHB1bGxpbmcgZnJvbSB0aGUgaXRlcmF0b3JcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgLy8gSWYgaXQgaXMgXCJkb25lXCIgd2UganVzdCBjb21wbGV0ZS4gVGhpcyBtaW1pY3MgdGhlXG4gICAgICAgICAgICAvLyBiZWhhdmlvciBvZiBKYXZhU2NyaXB0J3MgYGZvci4ub2ZgIGNvbnN1bXB0aW9uIG9mXG4gICAgICAgICAgICAvLyBpdGVyYWJsZXMsIHdoaWNoIHdpbGwgbm90IGVtaXQgdGhlIHZhbHVlIGZyb20gYW4gaXRlcmF0b3JcbiAgICAgICAgICAgIC8vIHJlc3VsdCBvZiBgeyBkb25lOiB0cnVlOiB2YWx1ZTogJ2hlcmUnIH1gLlxuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGUgaXRlcmFibGUgaXMgbm90IGRvbmUsIGVtaXQgdGhlIHZhbHVlLlxuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIDAsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBEdXJpbmcgZmluYWxpemF0aW9uLCBpZiB3ZSBzZWUgdGhpcyBpdGVyYXRvciBoYXMgYSBgcmV0dXJuYCBtZXRob2QsXG4gICAgLy8gdGhlbiB3ZSBrbm93IGl0IGlzIGEgR2VuZXJhdG9yLCBhbmQgbm90IGp1c3QgYW4gSXRlcmF0b3IuIFNvIHdlIGNhbGxcbiAgICAvLyB0aGUgYHJldHVybigpYCBmdW5jdGlvbi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGFueSBgZmluYWxseSB7IH1gIGJsb2Nrc1xuICAgIC8vIGluc2lkZSBvZiB0aGUgZ2VuZXJhdG9yIHdlIGNhbiBoaXQgd2lsbCBiZSBoaXQgcHJvcGVybHkuXG4gICAgcmV0dXJuICgpID0+IGlzRnVuY3Rpb24oaXRlcmF0b3I/LnJldHVybikgJiYgaXRlcmF0b3IucmV0dXJuKCk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUFzeW5jSXRlcmFibGU8VD4oaW5wdXQ6IEFzeW5jSXRlcmFibGU8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICBpZiAoIWlucHV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJdGVyYWJsZSBjYW5ub3QgYmUgbnVsbCcpO1xuICB9XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gaW5wdXRbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7XG4gICAgICBleGVjdXRlU2NoZWR1bGUoXG4gICAgICAgIHN1YnNjcmliZXIsXG4gICAgICAgIHNjaGVkdWxlcixcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGl0ZXJhdG9yLm5leHQoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgcmVtb3ZlIHRoZSBzdWJzY3JpcHRpb25zIGZyb21cbiAgICAgICAgICAgICAgLy8gdGhlIHBhcmVudCBzdWJzY3JpcHRpb24uXG4gICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAwLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXJMaWtlLCBSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzY2hlZHVsZUFzeW5jSXRlcmFibGUgfSBmcm9tICcuL3NjaGVkdWxlQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZTxUPihpbnB1dDogUmVhZGFibGVTdHJlYW1MaWtlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHNjaGVkdWxlQXN5bmNJdGVyYWJsZShyZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yKGlucHV0KSwgc2NoZWR1bGVyKTtcbn1cbiIsICJpbXBvcnQgeyBzY2hlZHVsZU9ic2VydmFibGUgfSBmcm9tICcuL3NjaGVkdWxlT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzY2hlZHVsZVByb21pc2UgfSBmcm9tICcuL3NjaGVkdWxlUHJvbWlzZSc7XG5pbXBvcnQgeyBzY2hlZHVsZUFycmF5IH0gZnJvbSAnLi9zY2hlZHVsZUFycmF5JztcbmltcG9ydCB7IHNjaGVkdWxlSXRlcmFibGUgfSBmcm9tICcuL3NjaGVkdWxlSXRlcmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgaXNJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuLi91dGlsL2lzUHJvbWlzZSc7XG5pbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJdGVyYWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FzeW5jSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvciB9IGZyb20gJy4uL3V0aWwvdGhyb3dVbm9ic2VydmFibGVFcnJvcic7XG5pbXBvcnQgeyBpc1JlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuaW1wb3J0IHsgc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuL3NjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlJztcblxuLyoqXG4gKiBDb252ZXJ0cyBmcm9tIGEgY29tbW9uIHtAbGluayBPYnNlcnZhYmxlSW5wdXR9IHR5cGUgdG8gYW4gb2JzZXJ2YWJsZSB3aGVyZSBzdWJzY3JpcHRpb24gYW5kIGVtaXNzaW9uc1xuICogYXJlIHNjaGVkdWxlZCBvbiB0aGUgcHJvdmlkZWQgc2NoZWR1bGVyLlxuICpcbiAqIEBzZWUge0BsaW5rIGZyb219XG4gKiBAc2VlIHtAbGluayBvZn1cbiAqXG4gKiBAcGFyYW0gaW5wdXQgVGhlIG9ic2VydmFibGUsIGFycmF5LCBwcm9taXNlLCBpdGVyYWJsZSwgZXRjIHlvdSB3b3VsZCBsaWtlIHRvIHNjaGVkdWxlXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFRoZSBzY2hlZHVsZXIgdG8gdXNlIHRvIHNjaGVkdWxlIHRoZSBzdWJzY3JpcHRpb24gYW5kIGVtaXNzaW9ucyBmcm9tXG4gKiB0aGUgcmV0dXJuZWQgb2JzZXJ2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlZDxUPihpbnB1dDogT2JzZXJ2YWJsZUlucHV0PFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZUFycmF5KGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNQcm9taXNlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlUHJvbWlzZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGlzQXN5bmNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZUFzeW5jSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc1JlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gIH1cbiAgdGhyb3cgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgU2NoZWR1bGVyTGlrZSwgT2JzZXJ2ZWRWYWx1ZU9mIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgc2NoZWR1bGVkIH0gZnJvbSAnLi4vc2NoZWR1bGVkL3NjaGVkdWxlZCc7XG5pbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuL2lubmVyRnJvbSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tPE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4oaW5wdXQ6IE8pOiBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc2NoZWR1bGVyLWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbTxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KGlucHV0OiBPLCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UgfCB1bmRlZmluZWQpOiBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPj47XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlIGZyb20gYW4gQXJyYXksIGFuIGFycmF5LWxpa2Ugb2JqZWN0LCBhIFByb21pc2UsIGFuIGl0ZXJhYmxlIG9iamVjdCwgb3IgYW4gT2JzZXJ2YWJsZS1saWtlIG9iamVjdC5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+Q29udmVydHMgYWxtb3N0IGFueXRoaW5nIHRvIGFuIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqICFbXShmcm9tLnBuZylcbiAqXG4gKiBgZnJvbWAgY29udmVydHMgdmFyaW91cyBvdGhlciBvYmplY3RzIGFuZCBkYXRhIHR5cGVzIGludG8gT2JzZXJ2YWJsZXMuIEl0IGFsc28gY29udmVydHMgYSBQcm9taXNlLCBhbiBhcnJheS1saWtlLCBvciBhblxuICogPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMjaXRlcmFibGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5pdGVyYWJsZTwvYT5cbiAqIG9iamVjdCBpbnRvIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgaXRlbXMgaW4gdGhhdCBwcm9taXNlLCBhcnJheSwgb3IgaXRlcmFibGUuIEEgU3RyaW5nLCBpbiB0aGlzIGNvbnRleHQsIGlzIHRyZWF0ZWRcbiAqIGFzIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMuIE9ic2VydmFibGUtbGlrZSBvYmplY3RzIChjb250YWlucyBhIGZ1bmN0aW9uIG5hbWVkIHdpdGggdGhlIEVTMjAxNSBTeW1ib2wgZm9yIE9ic2VydmFibGUpIGNhbiBhbHNvIGJlXG4gKiBjb252ZXJ0ZWQgdGhyb3VnaCB0aGlzIG9wZXJhdG9yLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogQ29udmVydHMgYW4gYXJyYXkgdG8gYW4gT2JzZXJ2YWJsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgYXJyYXkgPSBbMTAsIDIwLCAzMF07XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tKGFycmF5KTtcbiAqXG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAxMFxuICogLy8gMjBcbiAqIC8vIDMwXG4gKiBgYGBcbiAqXG4gKiBDb252ZXJ0IGFuIGluZmluaXRlIGl0ZXJhYmxlIChmcm9tIGEgZ2VuZXJhdG9yKSB0byBhbiBPYnNlcnZhYmxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb20sIHRha2UgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBmdW5jdGlvbiogZ2VuZXJhdGVEb3VibGVzKHNlZWQpIHtcbiAqICAgIGxldCBpID0gc2VlZDtcbiAqICAgIHdoaWxlICh0cnVlKSB7XG4gKiAgICAgIHlpZWxkIGk7XG4gKiAgICAgIGkgPSAyICogaTsgLy8gZG91YmxlIGl0XG4gKiAgICB9XG4gKiB9XG4gKlxuICogY29uc3QgaXRlcmF0b3IgPSBnZW5lcmF0ZURvdWJsZXMoMyk7XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tKGl0ZXJhdG9yKS5waXBlKHRha2UoMTApKTtcbiAqXG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAzXG4gKiAvLyA2XG4gKiAvLyAxMlxuICogLy8gMjRcbiAqIC8vIDQ4XG4gKiAvLyA5NlxuICogLy8gMTkyXG4gKiAvLyAzODRcbiAqIC8vIDc2OFxuICogLy8gMTUzNlxuICogYGBgXG4gKlxuICogV2l0aCBgYXN5bmNTY2hlZHVsZXJgXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb20sIGFzeW5jU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc29sZS5sb2coJ3N0YXJ0Jyk7XG4gKlxuICogY29uc3QgYXJyYXkgPSBbMTAsIDIwLCAzMF07XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tKGFycmF5LCBhc3luY1NjaGVkdWxlcik7XG4gKlxuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBjb25zb2xlLmxvZygnZW5kJyk7XG4gKlxuICogLy8gTG9nczpcbiAqIC8vICdzdGFydCdcbiAqIC8vICdlbmQnXG4gKiAvLyAxMFxuICogLy8gMjBcbiAqIC8vIDMwXG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBmcm9tRXZlbnR9XG4gKiBAc2VlIHtAbGluayBmcm9tRXZlbnRQYXR0ZXJufVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZUlucHV0PFQ+fSBBIHN1YnNjcmlwdGlvbiBvYmplY3QsIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZS1saWtlLFxuICogYW4gQXJyYXksIGFuIGl0ZXJhYmxlLCBvciBhbiBhcnJheS1saWtlIG9iamVjdCB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcGFyYW0ge1NjaGVkdWxlckxpa2V9IEFuIG9wdGlvbmFsIHtAbGluayBTY2hlZHVsZXJMaWtlfSBvbiB3aGljaCB0byBzY2hlZHVsZSB0aGUgZW1pc3Npb24gb2YgdmFsdWVzLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxUPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb208VD4oaW5wdXQ6IE9ic2VydmFibGVJbnB1dDxUPiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gc2NoZWR1bGVyID8gc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpIDogaW5uZXJGcm9tKGlucHV0KTtcbn1cbiIsICJpbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgUj4ocHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPjtcbi8qKiBAZGVwcmVjYXRlZCBVc2UgYSBjbG9zdXJlIGluc3RlYWQgb2YgYSBgdGhpc0FyZ2AuIFNpZ25hdHVyZXMgYWNjZXB0aW5nIGEgYHRoaXNBcmdgIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgUiwgQT4ocHJvamVjdDogKHRoaXM6IEEsIHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSLCB0aGlzQXJnOiBBKTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPjtcblxuLyoqXG4gKiBBcHBsaWVzIGEgZ2l2ZW4gYHByb2plY3RgIGZ1bmN0aW9uIHRvIGVhY2ggdmFsdWUgZW1pdHRlZCBieSB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlLCBhbmQgZW1pdHMgdGhlIHJlc3VsdGluZyB2YWx1ZXMgYXMgYW4gT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+TGlrZSBbQXJyYXkucHJvdG90eXBlLm1hcCgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9tYXApLFxuICogaXQgcGFzc2VzIGVhY2ggc291cmNlIHZhbHVlIHRocm91Z2ggYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0byBnZXRcbiAqIGNvcnJlc3BvbmRpbmcgb3V0cHV0IHZhbHVlcy48L3NwYW4+XG4gKlxuICogIVtdKG1hcC5wbmcpXG4gKlxuICogU2ltaWxhciB0byB0aGUgd2VsbCBrbm93biBgQXJyYXkucHJvdG90eXBlLm1hcGAgZnVuY3Rpb24sIHRoaXMgb3BlcmF0b3JcbiAqIGFwcGxpZXMgYSBwcm9qZWN0aW9uIHRvIGVhY2ggdmFsdWUgYW5kIGVtaXRzIHRoYXQgcHJvamVjdGlvbiBpbiB0aGUgb3V0cHV0XG4gKiBPYnNlcnZhYmxlLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqXG4gKiBNYXAgZXZlcnkgY2xpY2sgdG8gdGhlIGBjbGllbnRYYCBwb3NpdGlvbiBvZiB0aGF0IGNsaWNrXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGZyb21FdmVudCwgbWFwIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50PFBvaW50ZXJFdmVudD4oZG9jdW1lbnQsICdjbGljaycpO1xuICogY29uc3QgcG9zaXRpb25zID0gY2xpY2tzLnBpcGUobWFwKGV2ID0+IGV2LmNsaWVudFgpKTtcbiAqXG4gKiBwb3NpdGlvbnMuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgbWFwVG99XG4gKiBAc2VlIHtAbGluayBwbHVja31cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKTogUn0gcHJvamVjdCBUaGUgZnVuY3Rpb24gdG8gYXBwbHlcbiAqIHRvIGVhY2ggYHZhbHVlYCBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS4gVGhlIGBpbmRleGAgcGFyYW1ldGVyIGlzXG4gKiB0aGUgbnVtYmVyIGBpYCBmb3IgdGhlIGktdGggZW1pc3Npb24gdGhhdCBoYXMgaGFwcGVuZWQgc2luY2UgdGhlXG4gKiBzdWJzY3JpcHRpb24sIHN0YXJ0aW5nIGZyb20gdGhlIG51bWJlciBgMGAuXG4gKiBAcGFyYW0ge2FueX0gW3RoaXNBcmddIEFuIG9wdGlvbmFsIGFyZ3VtZW50IHRvIGRlZmluZSB3aGF0IGB0aGlzYCBpcyBpbiB0aGVcbiAqIGBwcm9qZWN0YCBmdW5jdGlvbi5cbiAqIEByZXR1cm4gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSB2YWx1ZXMgZnJvbSB0aGVcbiAqIHNvdXJjZSBPYnNlcnZhYmxlIHRyYW5zZm9ybWVkIGJ5IHRoZSBnaXZlbiBgcHJvamVjdGAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgUj4ocHJvamVjdDogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyKSA9PiBSLCB0aGlzQXJnPzogYW55KTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPiB7XG4gIHJldHVybiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IHtcbiAgICAvLyBUaGUgaW5kZXggb2YgdGhlIHZhbHVlIGZyb20gdGhlIHNvdXJjZS4gVXNlZCB3aXRoIHByb2plY3Rpb24uXG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHNvdXJjZSwgYWxsIGVycm9ycyBhbmQgY29tcGxldGlvbnMgYXJlIHNlbnQgYWxvbmdcbiAgICAvLyB0byB0aGUgY29uc3VtZXIuXG4gICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCAodmFsdWU6IFQpID0+IHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgcHJvamVjdGlvbiBmdW5jdGlvbiB3aXRoIHRoZSBhcHByb3ByaWF0ZSB0aGlzIGNvbnRleHQsXG4gICAgICAgIC8vIGFuZCBzZW5kIHRoZSByZXN1bHRpbmcgdmFsdWUgdG8gdGhlIGNvbnN1bWVyLlxuICAgICAgICBzdWJzY3JpYmVyLm5leHQocHJvamVjdC5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCsrKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCIuLi9vcGVyYXRvcnMvbWFwXCI7XG5cbmNvbnN0IHsgaXNBcnJheSB9ID0gQXJyYXk7XG5cbmZ1bmN0aW9uIGNhbGxPckFwcGx5PFQsIFI+KGZuOiAoKC4uLnZhbHVlczogVFtdKSA9PiBSKSwgYXJnczogVHxUW10pOiBSIHtcbiAgICByZXR1cm4gaXNBcnJheShhcmdzKSA/IGZuKC4uLmFyZ3MpIDogZm4oYXJncyk7XG59XG5cbi8qKlxuICogVXNlZCBpbiBzZXZlcmFsIC0tIG1vc3RseSBkZXByZWNhdGVkIC0tIHNpdHVhdGlvbnMgd2hlcmUgd2UgbmVlZCB0byBcbiAqIGFwcGx5IGEgbGlzdCBvZiBhcmd1bWVudHMgb3IgYSBzaW5nbGUgYXJndW1lbnQgdG8gYSByZXN1bHQgc2VsZWN0b3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBPbmVPck1hbnlBcmdzPFQsIFI+KGZuOiAoKC4uLnZhbHVlczogVFtdKSA9PiBSKSk6IE9wZXJhdG9yRnVuY3Rpb248VHxUW10sIFI+IHtcbiAgICByZXR1cm4gbWFwKGFyZ3MgPT4gY2FsbE9yQXBwbHkoZm4sIGFyZ3MpKVxufSIsICJjb25zdCB7IGlzQXJyYXkgfSA9IEFycmF5O1xuY29uc3QgeyBnZXRQcm90b3R5cGVPZiwgcHJvdG90eXBlOiBvYmplY3RQcm90bywga2V5czogZ2V0S2V5cyB9ID0gT2JqZWN0O1xuXG4vKipcbiAqIFVzZWQgaW4gZnVuY3Rpb25zIHdoZXJlIGVpdGhlciBhIGxpc3Qgb2YgYXJndW1lbnRzLCBhIHNpbmdsZSBhcnJheSBvZiBhcmd1bWVudHMsIG9yIGFcbiAqIGRpY3Rpb25hcnkgb2YgYXJndW1lbnRzIGNhbiBiZSByZXR1cm5lZC4gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhbiBgYXJnc2AgcHJvcGVydHkgd2l0aFxuICogdGhlIGFyZ3VtZW50cyBpbiBhbiBhcnJheSwgaWYgaXQgaXMgYSBkaWN0aW9uYXJ5LCBpdCB3aWxsIGFsc28gcmV0dXJuIHRoZSBga2V5c2AgaW4gYW5vdGhlclxuICogcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmdzQXJnQXJyYXlPck9iamVjdDxULCBPIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgVD4+KGFyZ3M6IFRbXSB8IFtPXSB8IFtUW11dKTogeyBhcmdzOiBUW107IGtleXM6IHN0cmluZ1tdIHwgbnVsbCB9IHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3QgPSBhcmdzWzBdO1xuICAgIGlmIChpc0FycmF5KGZpcnN0KSkge1xuICAgICAgcmV0dXJuIHsgYXJnczogZmlyc3QsIGtleXM6IG51bGwgfTtcbiAgICB9XG4gICAgaWYgKGlzUE9KTyhmaXJzdCkpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBnZXRLZXlzKGZpcnN0KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFyZ3M6IGtleXMubWFwKChrZXkpID0+IGZpcnN0W2tleV0pLFxuICAgICAgICBrZXlzLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBhcmdzOiBhcmdzIGFzIFRbXSwga2V5czogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBpc1BPSk8ob2JqOiBhbnkpOiBvYmogaXMgb2JqZWN0IHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBnZXRQcm90b3R5cGVPZihvYmopID09PSBvYmplY3RQcm90bztcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0KGtleXM6IHN0cmluZ1tdLCB2YWx1ZXM6IGFueVtdKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZSgocmVzdWx0LCBrZXksIGkpID0+ICgocmVzdWx0W2tleV0gPSB2YWx1ZXNbaV0pLCByZXN1bHQpLCB7fSBhcyBhbnkpO1xufVxuIiwgImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCwgU2NoZWR1bGVyTGlrZSwgT2JzZXJ2ZWRWYWx1ZU9mLCBPYnNlcnZhYmxlSW5wdXRUdXBsZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGFyZ3NBcmdBcnJheU9yT2JqZWN0IH0gZnJvbSAnLi4vdXRpbC9hcmdzQXJnQXJyYXlPck9iamVjdCc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcbmltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi4vdXRpbC9pZGVudGl0eSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgbWFwT25lT3JNYW55QXJncyB9IGZyb20gJy4uL3V0aWwvbWFwT25lT3JNYW55QXJncyc7XG5pbXBvcnQgeyBwb3BSZXN1bHRTZWxlY3RvciwgcG9wU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9hcmdzJztcbmltcG9ydCB7IGNyZWF0ZU9iamVjdCB9IGZyb20gJy4uL3V0aWwvY3JlYXRlT2JqZWN0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4uL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXInO1xuaW1wb3J0IHsgQW55Q2F0Y2hlciB9IGZyb20gJy4uL0FueUNhdGNoZXInO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuXG4vLyBjb21iaW5lTGF0ZXN0KGFueSlcbi8vIFdlIHB1dCB0aGlzIGZpcnN0IGJlY2F1c2Ugd2UgbmVlZCB0byBjYXRjaCBjYXNlcyB3aGVyZSB0aGUgdXNlciBoYXMgc3VwcGxpZWRcbi8vIF9leGFjdGx5IGBhbnlgXyBhcyB0aGUgYXJndW1lbnQuIFNpbmNlIGBhbnlgIGxpdGVyYWxseSBtYXRjaGVzIF9hbnl0aGluZ18sXG4vLyB3ZSBkb24ndCB3YW50IGl0IHRvIHJhbmRvbWx5IGhpdCBvbmUgb2YgdGhlIG90aGVyIHR5cGUgc2lnbmF0dXJlcyBiZWxvdyxcbi8vIGFzIHdlIGhhdmUgbm8gaWRlYSBhdCBidWlsZC10aW1lIHdoYXQgdHlwZSB3ZSBzaG91bGQgYmUgcmV0dXJuaW5nIHdoZW4gZ2l2ZW4gYW4gYW55LlxuXG4vKipcbiAqIFlvdSBoYXZlIHBhc3NlZCBgYW55YCBoZXJlLCB3ZSBjYW4ndCBmaWd1cmUgb3V0IGlmIGl0IGlzXG4gKiBhbiBhcnJheSBvciBhbiBvYmplY3QsIHNvIHlvdSdyZSBnZXR0aW5nIGB1bmtub3duYC4gVXNlIGJldHRlciB0eXBlcy5cbiAqIEBwYXJhbSBhcmcgU29tZXRoaW5nIHR5cGVkIGFzIGBhbnlgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PFQgZXh0ZW5kcyBBbnlDYXRjaGVyPihhcmc6IFQpOiBPYnNlcnZhYmxlPHVua25vd24+O1xuXG4vLyBjb21iaW5lTGF0ZXN0KFthLCBiLCBjXSlcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0KHNvdXJjZXM6IFtdKTogT2JzZXJ2YWJsZTxuZXZlcj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdPihzb3VyY2VzOiByZWFkb25seSBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dKTogT2JzZXJ2YWJsZTxBPjtcbi8qKiBAZGVwcmVjYXRlZCBUaGUgYHNjaGVkdWxlcmAgcGFyYW1ldGVyIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gVXNlIGBzY2hlZHVsZWRgIGFuZCBgY29tYmluZUxhdGVzdEFsbGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXSwgUj4oXG4gIHNvdXJjZXM6IHJlYWRvbmx5IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPl0sXG4gIHJlc3VsdFNlbGVjdG9yOiAoLi4udmFsdWVzOiBBKSA9PiBSLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2Vcbik6IE9ic2VydmFibGU8Uj47XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdLCBSPihcbiAgc291cmNlczogcmVhZG9ubHkgWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSxcbiAgcmVzdWx0U2VsZWN0b3I6ICguLi52YWx1ZXM6IEEpID0+IFJcbik6IE9ic2VydmFibGU8Uj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KFxuICBzb3VyY2VzOiByZWFkb25seSBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2Vcbik6IE9ic2VydmFibGU8QT47XG5cbi8vIGNvbWJpbmVMYXRlc3QoYSwgYiwgYylcbi8qKiBAZGVwcmVjYXRlZCBQYXNzIGFuIGFycmF5IG9mIHNvdXJjZXMgaW5zdGVhZC4gVGhlIHJlc3QtcGFyYW1ldGVycyBzaWduYXR1cmUgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9hcnJheS1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oLi4uc291cmNlczogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSk6IE9ic2VydmFibGU8QT47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10sIFI+KFxuICAuLi5zb3VyY2VzQW5kUmVzdWx0U2VsZWN0b3JBbmRTY2hlZHVsZXI6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPiwgKC4uLnZhbHVlczogQSkgPT4gUiwgU2NoZWR1bGVyTGlrZV1cbik6IE9ic2VydmFibGU8Uj47XG4vKiogQGRlcHJlY2F0ZWQgUGFzcyBhbiBhcnJheSBvZiBzb3VyY2VzIGluc3RlYWQuIFRoZSByZXN0LXBhcmFtZXRlcnMgc2lnbmF0dXJlIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvYXJyYXktYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10sIFI+KFxuICAuLi5zb3VyY2VzQW5kUmVzdWx0U2VsZWN0b3I6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPiwgKC4uLnZhbHVlczogQSkgPT4gUl1cbik6IE9ic2VydmFibGU8Uj47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KFxuICAuLi5zb3VyY2VzQW5kU2NoZWR1bGVyOiBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT4sIFNjaGVkdWxlckxpa2VdXG4pOiBPYnNlcnZhYmxlPEE+O1xuXG4vLyBjb21iaW5lTGF0ZXN0KHthLCBiLCBjfSlcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0KHNvdXJjZXNPYmplY3Q6IHsgW0sgaW4gYW55XTogbmV2ZXIgfSk6IE9ic2VydmFibGU8bmV2ZXI+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIE9ic2VydmFibGVJbnB1dDxhbnk+Pj4oXG4gIHNvdXJjZXNPYmplY3Q6IFRcbik6IE9ic2VydmFibGU8eyBbSyBpbiBrZXlvZiBUXTogT2JzZXJ2ZWRWYWx1ZU9mPFRbS10+IH0+O1xuXG4vKipcbiAqIENvbWJpbmVzIG11bHRpcGxlIE9ic2VydmFibGVzIHRvIGNyZWF0ZSBhbiBPYnNlcnZhYmxlIHdob3NlIHZhbHVlcyBhcmVcbiAqIGNhbGN1bGF0ZWQgZnJvbSB0aGUgbGF0ZXN0IHZhbHVlcyBvZiBlYWNoIG9mIGl0cyBpbnB1dCBPYnNlcnZhYmxlcy5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+V2hlbmV2ZXIgYW55IGlucHV0IE9ic2VydmFibGUgZW1pdHMgYSB2YWx1ZSwgaXRcbiAqIGNvbXB1dGVzIGEgZm9ybXVsYSB1c2luZyB0aGUgbGF0ZXN0IHZhbHVlcyBmcm9tIGFsbCB0aGUgaW5wdXRzLCB0aGVuIGVtaXRzXG4gKiB0aGUgb3V0cHV0IG9mIHRoYXQgZm9ybXVsYS48L3NwYW4+XG4gKlxuICogIVtdKGNvbWJpbmVMYXRlc3QucG5nKVxuICpcbiAqIGBjb21iaW5lTGF0ZXN0YCBjb21iaW5lcyB0aGUgdmFsdWVzIGZyb20gYWxsIHRoZSBPYnNlcnZhYmxlcyBwYXNzZWQgaW4gdGhlXG4gKiBvYnNlcnZhYmxlcyBhcnJheS4gVGhpcyBpcyBkb25lIGJ5IHN1YnNjcmliaW5nIHRvIGVhY2ggT2JzZXJ2YWJsZSBpbiBvcmRlciBhbmQsXG4gKiB3aGVuZXZlciBhbnkgT2JzZXJ2YWJsZSBlbWl0cywgY29sbGVjdGluZyBhbiBhcnJheSBvZiB0aGUgbW9zdCByZWNlbnRcbiAqIHZhbHVlcyBmcm9tIGVhY2ggT2JzZXJ2YWJsZS4gU28gaWYgeW91IHBhc3MgYG5gIE9ic2VydmFibGVzIHRvIHRoaXMgb3BlcmF0b3IsXG4gKiB0aGUgcmV0dXJuZWQgT2JzZXJ2YWJsZSB3aWxsIGFsd2F5cyBlbWl0IGFuIGFycmF5IG9mIGBuYCB2YWx1ZXMsIGluIGFuIG9yZGVyXG4gKiBjb3JyZXNwb25kaW5nIHRvIHRoZSBvcmRlciBvZiB0aGUgcGFzc2VkIE9ic2VydmFibGVzICh0aGUgdmFsdWUgZnJvbSB0aGUgZmlyc3QgT2JzZXJ2YWJsZVxuICogd2lsbCBiZSBhdCBpbmRleCAwIG9mIHRoZSBhcnJheSBhbmQgc28gb24pLlxuICpcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIGBjb21iaW5lTGF0ZXN0YCBhY2NlcHRzIGFuIGFycmF5IG9mIE9ic2VydmFibGVzLiBOb3RlIHRoYXQgYW4gYXJyYXkgb2ZcbiAqIE9ic2VydmFibGVzIGlzIGEgZ29vZCBjaG9pY2UsIGlmIHlvdSBkb24ndCBrbm93IGJlZm9yZWhhbmQgaG93IG1hbnkgT2JzZXJ2YWJsZXNcbiAqIHlvdSB3aWxsIGNvbWJpbmUuIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgd2lsbCByZXN1bHQgaW4gYW4gT2JzZXJ2YWJsZSB0aGF0XG4gKiBjb21wbGV0ZXMgaW1tZWRpYXRlbHkuXG4gKlxuICogVG8gZW5zdXJlIHRoZSBvdXRwdXQgYXJyYXkgYWx3YXlzIGhhcyB0aGUgc2FtZSBsZW5ndGgsIGBjb21iaW5lTGF0ZXN0YCB3aWxsXG4gKiBhY3R1YWxseSB3YWl0IGZvciBhbGwgaW5wdXQgT2JzZXJ2YWJsZXMgdG8gZW1pdCBhdCBsZWFzdCBvbmNlLFxuICogYmVmb3JlIGl0IHN0YXJ0cyBlbWl0dGluZyByZXN1bHRzLiBUaGlzIG1lYW5zIGlmIHNvbWUgT2JzZXJ2YWJsZSBlbWl0c1xuICogdmFsdWVzIGJlZm9yZSBvdGhlciBPYnNlcnZhYmxlcyBzdGFydGVkIGVtaXR0aW5nLCBhbGwgdGhlc2UgdmFsdWVzIGJ1dCB0aGUgbGFzdFxuICogd2lsbCBiZSBsb3N0LiBPbiB0aGUgb3RoZXIgaGFuZCwgaWYgc29tZSBPYnNlcnZhYmxlIGRvZXMgbm90IGVtaXQgYSB2YWx1ZSBidXRcbiAqIGNvbXBsZXRlcywgcmVzdWx0aW5nIE9ic2VydmFibGUgd2lsbCBjb21wbGV0ZSBhdCB0aGUgc2FtZSBtb21lbnQgd2l0aG91dFxuICogZW1pdHRpbmcgYW55dGhpbmcsIHNpbmNlIGl0IHdpbGwgbm93IGJlIGltcG9zc2libGUgdG8gaW5jbHVkZSBhIHZhbHVlIGZyb20gdGhlXG4gKiBjb21wbGV0ZWQgT2JzZXJ2YWJsZSBpbiB0aGUgcmVzdWx0aW5nIGFycmF5LiBBbHNvLCBpZiBzb21lIGlucHV0IE9ic2VydmFibGUgZG9lc1xuICogbm90IGVtaXQgYW55IHZhbHVlIGFuZCBuZXZlciBjb21wbGV0ZXMsIGBjb21iaW5lTGF0ZXN0YCB3aWxsIGFsc28gbmV2ZXIgZW1pdFxuICogYW5kIG5ldmVyIGNvbXBsZXRlLCBzaW5jZSwgYWdhaW4sIGl0IHdpbGwgd2FpdCBmb3IgYWxsIHN0cmVhbXMgdG8gZW1pdCBzb21lXG4gKiB2YWx1ZS5cbiAqXG4gKiBJZiBhdCBsZWFzdCBvbmUgT2JzZXJ2YWJsZSB3YXMgcGFzc2VkIHRvIGBjb21iaW5lTGF0ZXN0YCBhbmQgYWxsIHBhc3NlZCBPYnNlcnZhYmxlc1xuICogZW1pdHRlZCBzb21ldGhpbmcsIHRoZSByZXN1bHRpbmcgT2JzZXJ2YWJsZSB3aWxsIGNvbXBsZXRlIHdoZW4gYWxsIGNvbWJpbmVkXG4gKiBzdHJlYW1zIGNvbXBsZXRlLiBTbyBldmVuIGlmIHNvbWUgT2JzZXJ2YWJsZSBjb21wbGV0ZXMsIHRoZSByZXN1bHQgb2ZcbiAqIGBjb21iaW5lTGF0ZXN0YCB3aWxsIHN0aWxsIGVtaXQgdmFsdWVzIHdoZW4gb3RoZXIgT2JzZXJ2YWJsZXMgZG8uIEluIGNhc2VcbiAqIG9mIGEgY29tcGxldGVkIE9ic2VydmFibGUsIGl0cyB2YWx1ZSBmcm9tIG5vdyBvbiB3aWxsIGFsd2F5cyBiZSB0aGUgbGFzdFxuICogZW1pdHRlZCB2YWx1ZS4gT24gdGhlIG90aGVyIGhhbmQsIGlmIGFueSBPYnNlcnZhYmxlIGVycm9ycywgYGNvbWJpbmVMYXRlc3RgXG4gKiB3aWxsIGVycm9yIGltbWVkaWF0ZWx5IGFzIHdlbGwsIGFuZCBhbGwgb3RoZXIgT2JzZXJ2YWJsZXMgd2lsbCBiZSB1bnN1YnNjcmliZWQuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBDb21iaW5lIHR3byB0aW1lciBPYnNlcnZhYmxlc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyB0aW1lciwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGZpcnN0VGltZXIgPSB0aW1lcigwLCAxMDAwKTsgLy8gZW1pdCAwLCAxLCAyLi4uIGFmdGVyIGV2ZXJ5IHNlY29uZCwgc3RhcnRpbmcgZnJvbSBub3dcbiAqIGNvbnN0IHNlY29uZFRpbWVyID0gdGltZXIoNTAwLCAxMDAwKTsgLy8gZW1pdCAwLCAxLCAyLi4uIGFmdGVyIGV2ZXJ5IHNlY29uZCwgc3RhcnRpbmcgMCw1cyBmcm9tIG5vd1xuICogY29uc3QgY29tYmluZWRUaW1lcnMgPSBjb21iaW5lTGF0ZXN0KFtmaXJzdFRpbWVyLCBzZWNvbmRUaW1lcl0pO1xuICogY29tYmluZWRUaW1lcnMuc3Vic2NyaWJlKHZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSk7XG4gKiAvLyBMb2dzXG4gKiAvLyBbMCwgMF0gYWZ0ZXIgMC41c1xuICogLy8gWzEsIDBdIGFmdGVyIDFzXG4gKiAvLyBbMSwgMV0gYWZ0ZXIgMS41c1xuICogLy8gWzIsIDFdIGFmdGVyIDJzXG4gKiBgYGBcbiAqXG4gKiBDb21iaW5lIGEgZGljdGlvbmFyeSBvZiBPYnNlcnZhYmxlc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgZGVsYXksIHN0YXJ0V2l0aCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IG9ic2VydmFibGVzID0ge1xuICogICBhOiBvZigxKS5waXBlKGRlbGF5KDEwMDApLCBzdGFydFdpdGgoMCkpLFxuICogICBiOiBvZig1KS5waXBlKGRlbGF5KDUwMDApLCBzdGFydFdpdGgoMCkpLFxuICogICBjOiBvZigxMCkucGlwZShkZWxheSgxMDAwMCksIHN0YXJ0V2l0aCgwKSlcbiAqIH07XG4gKiBjb25zdCBjb21iaW5lZCA9IGNvbWJpbmVMYXRlc3Qob2JzZXJ2YWJsZXMpO1xuICogY29tYmluZWQuc3Vic2NyaWJlKHZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSk7XG4gKiAvLyBMb2dzXG4gKiAvLyB7IGE6IDAsIGI6IDAsIGM6IDAgfSBpbW1lZGlhdGVseVxuICogLy8geyBhOiAxLCBiOiAwLCBjOiAwIH0gYWZ0ZXIgMXNcbiAqIC8vIHsgYTogMSwgYjogNSwgYzogMCB9IGFmdGVyIDVzXG4gKiAvLyB7IGE6IDEsIGI6IDUsIGM6IDEwIH0gYWZ0ZXIgMTBzXG4gKiBgYGBcbiAqXG4gKiBDb21iaW5lIGFuIGFycmF5IG9mIE9ic2VydmFibGVzXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBkZWxheSwgc3RhcnRXaXRoLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgb2JzZXJ2YWJsZXMgPSBbMSwgNSwgMTBdLm1hcChcbiAqICAgbiA9PiBvZihuKS5waXBlKFxuICogICAgIGRlbGF5KG4gKiAxMDAwKSwgLy8gZW1pdCAwIGFuZCB0aGVuIGVtaXQgbiBhZnRlciBuIHNlY29uZHNcbiAqICAgICBzdGFydFdpdGgoMClcbiAqICAgKVxuICogKTtcbiAqIGNvbnN0IGNvbWJpbmVkID0gY29tYmluZUxhdGVzdChvYnNlcnZhYmxlcyk7XG4gKiBjb21iaW5lZC5zdWJzY3JpYmUodmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpKTtcbiAqIC8vIExvZ3NcbiAqIC8vIFswLCAwLCAwXSBpbW1lZGlhdGVseVxuICogLy8gWzEsIDAsIDBdIGFmdGVyIDFzXG4gKiAvLyBbMSwgNSwgMF0gYWZ0ZXIgNXNcbiAqIC8vIFsxLCA1LCAxMF0gYWZ0ZXIgMTBzXG4gKiBgYGBcbiAqXG4gKiBVc2UgbWFwIG9wZXJhdG9yIHRvIGR5bmFtaWNhbGx5IGNhbGN1bGF0ZSB0aGUgQm9keS1NYXNzIEluZGV4XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG9mLCBjb21iaW5lTGF0ZXN0LCBtYXAgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCB3ZWlnaHQgPSBvZig3MCwgNzIsIDc2LCA3OSwgNzUpO1xuICogY29uc3QgaGVpZ2h0ID0gb2YoMS43NiwgMS43NywgMS43OCk7XG4gKiBjb25zdCBibWkgPSBjb21iaW5lTGF0ZXN0KFt3ZWlnaHQsIGhlaWdodF0pLnBpcGUoXG4gKiAgIG1hcCgoW3csIGhdKSA9PiB3IC8gKGggKiBoKSksXG4gKiApO1xuICogYm1pLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKCdCTUkgaXMgJyArIHgpKTtcbiAqXG4gKiAvLyBXaXRoIG91dHB1dCB0byBjb25zb2xlOlxuICogLy8gQk1JIGlzIDI0LjIxMjI5MzM4ODQyOTc1M1xuICogLy8gQk1JIGlzIDIzLjkzOTQ4MDk5MjA1MjA5XG4gKiAvLyBCTUkgaXMgMjMuNjcxMjUzNjI5NTkyMjIyXG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBjb21iaW5lTGF0ZXN0QWxsfVxuICogQHNlZSB7QGxpbmsgbWVyZ2V9XG4gKiBAc2VlIHtAbGluayB3aXRoTGF0ZXN0RnJvbX1cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGVJbnB1dH0gW29ic2VydmFibGVzXSBBbiBhcnJheSBvZiBpbnB1dCBPYnNlcnZhYmxlcyB0byBjb21iaW5lIHdpdGggZWFjaCBvdGhlci5cbiAqIEFuIGFycmF5IG9mIE9ic2VydmFibGVzIG11c3QgYmUgZ2l2ZW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW3Byb2plY3RdIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIHByb2plY3QgdGhlIHZhbHVlcyBmcm9tXG4gKiB0aGUgY29tYmluZWQgbGF0ZXN0IHZhbHVlcyBpbnRvIGEgbmV3IHZhbHVlIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyTGlrZX0gW3NjaGVkdWxlcj1udWxsXSBUaGUge0BsaW5rIFNjaGVkdWxlckxpa2V9IHRvIHVzZSBmb3Igc3Vic2NyaWJpbmcgdG9cbiAqIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgb2YgcHJvamVjdGVkIHZhbHVlcyBmcm9tIHRoZSBtb3N0IHJlY2VudFxuICogdmFsdWVzIGZyb20gZWFjaCBpbnB1dCBPYnNlcnZhYmxlLCBvciBhbiBhcnJheSBvZiB0aGUgbW9zdCByZWNlbnQgdmFsdWVzIGZyb21cbiAqIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+LCBSPiguLi5hcmdzOiBhbnlbXSk6IE9ic2VydmFibGU8Uj4gfCBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPltdPiB7XG4gIGNvbnN0IHNjaGVkdWxlciA9IHBvcFNjaGVkdWxlcihhcmdzKTtcbiAgY29uc3QgcmVzdWx0U2VsZWN0b3IgPSBwb3BSZXN1bHRTZWxlY3RvcihhcmdzKTtcblxuICBjb25zdCB7IGFyZ3M6IG9ic2VydmFibGVzLCBrZXlzIH0gPSBhcmdzQXJnQXJyYXlPck9iamVjdChhcmdzKTtcblxuICBpZiAob2JzZXJ2YWJsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSWYgbm8gb2JzZXJ2YWJsZXMgYXJlIHBhc3NlZCwgb3Igc29tZW9uZSBoYXMgcGFzc2VkIGFuIGVtcHR5IGFycmF5XG4gICAgLy8gb2Ygb2JzZXJ2YWJsZXMsIG9yIGV2ZW4gYW4gZW1wdHkgb2JqZWN0IFBPSk8sIHdlIG5lZWQgdG8ganVzdFxuICAgIC8vIGNvbXBsZXRlIChFTVBUWSksIGJ1dCB3ZSBoYXZlIHRvIGhvbm9yIHRoZSBzY2hlZHVsZXIgcHJvdmlkZWQgaWYgYW55LlxuICAgIHJldHVybiBmcm9tKFtdLCBzY2hlZHVsZXIgYXMgYW55KTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBPYnNlcnZhYmxlPE9ic2VydmVkVmFsdWVPZjxPPltdPihcbiAgICBjb21iaW5lTGF0ZXN0SW5pdChcbiAgICAgIG9ic2VydmFibGVzIGFzIE9ic2VydmFibGVJbnB1dDxPYnNlcnZlZFZhbHVlT2Y8Tz4+W10sXG4gICAgICBzY2hlZHVsZXIsXG4gICAgICBrZXlzXG4gICAgICAgID8gLy8gQSBoYW5kbGVyIGZvciBzY3J1YmJpbmcgdGhlIGFycmF5IG9mIGFyZ3MgaW50byBhIGRpY3Rpb25hcnkuXG4gICAgICAgICAgKHZhbHVlcykgPT4gY3JlYXRlT2JqZWN0KGtleXMsIHZhbHVlcylcbiAgICAgICAgOiAvLyBBIHBhc3N0aHJvdWdoIHRvIGp1c3QgcmV0dXJuIHRoZSBhcnJheVxuICAgICAgICAgIGlkZW50aXR5XG4gICAgKVxuICApO1xuXG4gIHJldHVybiByZXN1bHRTZWxlY3RvciA/IChyZXN1bHQucGlwZShtYXBPbmVPck1hbnlBcmdzKHJlc3VsdFNlbGVjdG9yKSkgYXMgT2JzZXJ2YWJsZTxSPikgOiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0SW5pdChcbiAgb2JzZXJ2YWJsZXM6IE9ic2VydmFibGVJbnB1dDxhbnk+W10sXG4gIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UsXG4gIHZhbHVlVHJhbnNmb3JtOiAodmFsdWVzOiBhbnlbXSkgPT4gYW55ID0gaWRlbnRpdHlcbikge1xuICByZXR1cm4gKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4ge1xuICAgIC8vIFRoZSBvdXRlciBzdWJzY3JpcHRpb24uIFdlJ3JlIGNhcHR1cmluZyB0aGlzIGluIGEgZnVuY3Rpb25cbiAgICAvLyBiZWNhdXNlIHdlIG1heSBoYXZlIHRvIHNjaGVkdWxlIGl0LlxuICAgIG1heWJlU2NoZWR1bGUoXG4gICAgICBzY2hlZHVsZXIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBvYnNlcnZhYmxlcztcbiAgICAgICAgLy8gQSBzdG9yZSBmb3IgdGhlIHZhbHVlcyBlYWNoIG9ic2VydmFibGUgaGFzIGVtaXR0ZWQgc28gZmFyLiBXZSBtYXRjaCBvYnNlcnZhYmxlIHRvIHZhbHVlIG9uIGluZGV4LlxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgLy8gVGhlIG51bWJlciBvZiBjdXJyZW50bHkgYWN0aXZlIHN1YnNjcmlwdGlvbnMsIGFzIHRoZXkgY29tcGxldGUsIHdlIGRlY3JlbWVudCB0aGlzIG51bWJlciB0byBzZWUgaWZcbiAgICAgICAgLy8gd2UgYXJlIGFsbCBkb25lIGNvbWJpbmluZyB2YWx1ZXMsIHNvIHdlIGNhbiBjb21wbGV0ZSB0aGUgcmVzdWx0LlxuICAgICAgICBsZXQgYWN0aXZlID0gbGVuZ3RoO1xuICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIGlubmVyIHNvdXJjZXMgdGhhdCBzdGlsbCBoYXZlbid0IGVtaXR0ZWQgdGhlIGZpcnN0IHZhbHVlXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdHJhY2sgdGhpcyBiZWNhdXNlIGFsbCBzb3VyY2VzIG5lZWQgdG8gZW1pdCBvbmUgdmFsdWUgaW4gb3JkZXJcbiAgICAgICAgLy8gdG8gc3RhcnQgZW1pdHRpbmcgdmFsdWVzLlxuICAgICAgICBsZXQgcmVtYWluaW5nRmlyc3RWYWx1ZXMgPSBsZW5ndGg7XG4gICAgICAgIC8vIFRoZSBsb29wIHRvIGtpY2sgb2ZmIHN1YnNjcmlwdGlvbi4gV2UncmUga2V5aW5nIGV2ZXJ5dGhpbmcgb24gaW5kZXggYGlgIHRvIHJlbGF0ZSB0aGUgb2JzZXJ2YWJsZXMgcGFzc2VkXG4gICAgICAgIC8vIGluIHRvIHRoZSBzbG90IGluIHRoZSBvdXRwdXQgYXJyYXkgb3IgdGhlIGtleSBpbiB0aGUgYXJyYXkgb2Yga2V5cyBpbiB0aGUgb3V0cHV0IGRpY3Rpb25hcnkuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBtYXliZVNjaGVkdWxlKFxuICAgICAgICAgICAgc2NoZWR1bGVyLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBmcm9tKG9ic2VydmFibGVzW2ldLCBzY2hlZHVsZXIgYXMgYW55KTtcbiAgICAgICAgICAgICAgbGV0IGhhc0ZpcnN0VmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoXG4gICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gd2UgZ2V0IGEgdmFsdWUsIHJlY29yZCBpdCBpbiBvdXIgc2V0IG9mIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzRmlyc3RWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IHZhbHVlLCByZWNvcmQgdGhhdC5cbiAgICAgICAgICAgICAgICAgICAgICBoYXNGaXJzdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdGaXJzdFZhbHVlcy0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVtYWluaW5nRmlyc3RWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSdyZSBub3Qgd2FpdGluZyBmb3IgYW55IG1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCB2YWx1ZXMsIHNvIHdlIGNhbiBlbWl0IVxuICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZVRyYW5zZm9ybSh2YWx1ZXMuc2xpY2UoKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gV2Ugb25seSBjb21wbGV0ZSB0aGUgcmVzdWx0IGlmIHdlIGhhdmUgbm8gbW9yZSBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBpbm5lciBvYnNlcnZhYmxlcy5cbiAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Vic2NyaWJlclxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmVyXG4gICAgKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBBIHNtYWxsIHV0aWxpdHkgdG8gaGFuZGxlIHRoZSBjb3VwbGUgb2YgbG9jYXRpb25zIHdoZXJlIHdlIHdhbnQgdG8gc2NoZWR1bGUgaWYgYSBzY2hlZHVsZXIgd2FzIHByb3ZpZGVkLFxuICogYnV0IHdlIGRvbid0IGlmIHRoZXJlIHdhcyBubyBzY2hlZHVsZXIuXG4gKi9cbmZ1bmN0aW9uIG1heWJlU2NoZWR1bGUoc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlIHwgdW5kZWZpbmVkLCBleGVjdXRlOiAoKSA9PiB2b2lkLCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikge1xuICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmlwdGlvbiwgc2NoZWR1bGVyLCBleGVjdXRlKTtcbiAgfSBlbHNlIHtcbiAgICBleGVjdXRlKCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgdHlwZSBNb3VzZUV2ZW50ID0gUG9pbnRlckV2ZW50ICYge1xuICAgIGNsaWVudFg/OiBudW1iZXI7XG4gICAgY2xpZW50WT86IG51bWJlcjtcbiAgICBwb2ludGVySWQ/OiBudW1iZXI7XG4gICAgYnV0dG9ucz86IG51bWJlcjtcbn07XG5leHBvcnQgdHlwZSBXaGVlbEV2ZW50ID0gUG9pbnRlckV2ZW50ICYgeyBkZWx0YVg6IG51bWJlcjsgZGVsdGFZOiBudW1iZXI7IGRlbHRhWjogbnVtYmVyIH07XG5leHBvcnQgdHlwZSBNb3VzZUhvc3QgPSBWaWV3ICYge1xuICAgIHNldFBvaW50ZXJDYXB0dXJlOiAocG9pbnRlcklkOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgcmVsZWFzZVBvaW50ZXJDYXB0dXJlOiAocG9pbnRlcklkOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgb253aGVlbD86IChlOiBXaGVlbEV2ZW50KSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGVudW0gTW91c2VCdXR0b24ge1xuICAgIExlZnQgPSAxLFxuICAgIFJpZ2h0ID0gMixcbiAgICBNaWRkbGUgPSA0LFxuICAgIEFsbCA9IDcsXG59XG5cbmV4cG9ydCBjb25zdCBNb3ZlYWJsZVZpZXcgPSAoe1xuICAgIGNoaWxkcmVuLFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBwb3NpdGlvbjogaW5pdFBvc2l0aW9uLFxuICAgIG9uTW92ZSxcbiAgICBtb3VzZUJ1dHRvbiA9IE1vdXNlQnV0dG9uLkFsbCxcbiAgICBlbmFibGVTY2FsaW5nID0gZmFsc2UsXG4gICAgd2hvbGVDYW52YXMgPSBmYWxzZSxcbiAgICBpbm5lckNsYXNzTmFtZSxcbiAgICBvdXRlckNsYXNzTmFtZSxcbn06IHtcbiAgICBjaGlsZHJlbjogSlNYLkVsZW1lbnQ7XG4gICAgSGVhZGVyQ29tcG9uZW50PzogKCkgPT4gSlNYLkVsZW1lbnQ7XG4gICAgcG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXIgfTtcbiAgICBvbk1vdmU6IChwb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlciB9KSA9PiB2b2lkO1xuICAgIG1vdXNlQnV0dG9uPzogTW91c2VCdXR0b247XG4gICAgZW5hYmxlU2NhbGluZz86IGJvb2xlYW47XG4gICAgd2hvbGVDYW52YXM/OiBib29sZWFuO1xuICAgIGlubmVyQ2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIG91dGVyQ2xhc3NOYW1lPzogc3RyaW5nO1xufSkgPT4ge1xuICAgIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoe1xuICAgICAgICB4OiBpbml0UG9zaXRpb24ueCxcbiAgICAgICAgeTogaW5pdFBvc2l0aW9uLnksXG4gICAgICAgIHNjYWxlOiBpbml0UG9zaXRpb24uc2NhbGUsXG4gICAgICAgIGRyYWdQb2ludGVySWQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgICAgIHhEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgICAgIHlEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB5UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICB9KTtcblxuICAgIGNvbnN0IHN0YXJ0RHJhZyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBNb3VzZUV2ZW50LCBjb250ZXh0U2NhbGU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoISgoZS5idXR0b25zID8/IDApICYgbW91c2VCdXR0b24pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeFBvaW50ZXIgPSBlLmNsaWVudFggPz8gMDtcbiAgICAgICAgY29uc3QgeVBvaW50ZXIgPSBlLmNsaWVudFkgPz8gMDtcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXJ0RHJhZ2AsIHsgeFBvaW50ZXIsIHlQb2ludGVyLCBlLCBwb3NpdGlvbiwgY29udGV4dFNjYWxlIH0pO1xuXG4gICAgICAgIGhvc3RSZWYuY3VycmVudD8uc2V0UG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQgPz8gMCk7XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIGRyYWdQb2ludGVySWQ6IGUucG9pbnRlcklkLFxuICAgICAgICAgICAgeERyYWdTdGFydDogcy54LFxuICAgICAgICAgICAgeURyYWdTdGFydDogcy55LFxuICAgICAgICAgICAgeFBvaW50ZXJEcmFnU3RhcnQ6IHhQb2ludGVyLFxuICAgICAgICAgICAgeVBvaW50ZXJEcmFnU3RhcnQ6IHlQb2ludGVyLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG4gICAgY29uc3QgZW5kRHJhZyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBNb3VzZUV2ZW50LCBjb250ZXh0U2NhbGU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocG9zaXRpb24uZHJhZ1BvaW50ZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaG9zdFJlZi5jdXJyZW50Py5yZWxlYXNlUG9pbnRlckNhcHR1cmUocG9zaXRpb24uZHJhZ1BvaW50ZXJJZCk7XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHhQb2ludGVyID0gZS5jbGllbnRYID8/IDA7XG4gICAgICAgIGNvbnN0IHlQb2ludGVyID0gZS5jbGllbnRZID8/IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBlbmREcmFnYCwgeyB4UG9pbnRlciwgeVBvaW50ZXIsIGUsIHBvc2l0aW9uLCBjb250ZXh0U2NhbGUgfSk7XG5cbiAgICAgICAgY29uc3QgbmV3WCA9XG4gICAgICAgICAgICAocG9zaXRpb24ueERyYWdTdGFydCA/PyAwKVxuICAgICAgICAgICAgKyAoeFBvaW50ZXIgLSAocG9zaXRpb24ueFBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlO1xuICAgICAgICBjb25zdCBuZXdZID1cbiAgICAgICAgICAgIChwb3NpdGlvbi55RHJhZ1N0YXJ0ID8/IDApXG4gICAgICAgICAgICArICh5UG9pbnRlciAtIChwb3NpdGlvbi55UG9pbnRlckRyYWdTdGFydCA/PyAwKSkgLyBjb250ZXh0U2NhbGU7XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIHg6IG5ld1gsXG4gICAgICAgICAgICB5OiBuZXdZLFxuICAgICAgICAgICAgZHJhZ1BvaW50ZXJJZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgeFBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHlQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBvbk1vdmUoe1xuICAgICAgICAgICAgeDogbmV3WCxcbiAgICAgICAgICAgIHk6IG5ld1ksXG4gICAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3ZlRHJhZyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBNb3VzZUV2ZW50LCBjb250ZXh0U2NhbGU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocG9zaXRpb24uZHJhZ1BvaW50ZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeFBvaW50ZXIgPSBlLmNsaWVudFggPz8gMDtcbiAgICAgICAgY29uc3QgeVBvaW50ZXIgPSBlLmNsaWVudFkgPz8gMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG1vdmVEcmFnYCwgeyB4UG9pbnRlciwgeVBvaW50ZXIsIGUsIHBvc2l0aW9uLCBjb250ZXh0U2NhbGUgfSk7XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIHg6IChzLnhEcmFnU3RhcnQgPz8gMCkgKyAoeFBvaW50ZXIgLSAocy54UG9pbnRlckRyYWdTdGFydCA/PyAwKSkgLyBjb250ZXh0U2NhbGUsXG4gICAgICAgICAgICB5OiAocy55RHJhZ1N0YXJ0ID8/IDApICsgKHlQb2ludGVyIC0gKHMueVBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzY3JvbGxXaGVlbCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbndoZWVsYCwgeyBlLCBwb3NpdGlvbiB9KTtcbiAgICAgICAgY29uc3QgZGVsdGFZID0gZS5kZWx0YVk7XG4gICAgICAgIGlmICghZGVsdGFZKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVuYWJsZVNjYWxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBzY2FsZTogcy5zY2FsZSAqIE1hdGgucG93KDAuOSwgZGVsdGFZID4gMCA/IDEgOiAtMSksXG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhvc3RSZWYgPSB1c2VSZWYobnVsbCBhcyBudWxsIHwgTW91c2VIb3N0KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBob3N0ID0gaG9zdFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBob3N0YCwgeyBob3N0IH0pO1xuICAgICAgICBob3N0Lm9ud2hlZWwgPSBzY3JvbGxXaGVlbDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhvc3Qub253aGVlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICB9LCBbIWhvc3RSZWYuY3VycmVudF0pO1xuXG4gICAgY29uc3Qgd2hvbGVIb3N0UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IE1vdXNlSG9zdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaG9zdCA9IHdob2xlSG9zdFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBob3N0YCwgeyBob3N0IH0pO1xuICAgICAgICBob3N0Lm9ud2hlZWwgPSBzY3JvbGxXaGVlbDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhvc3Qub253aGVlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICB9LCBbIXdob2xlSG9zdFJlZi5jdXJyZW50XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW92ZWFibGVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgeyh7IHBvc2l0aW9uOiBjb250YWluZXJQb3NpdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAge3dob2xlQ2FudmFzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0hlYWRlckNvbXBvbmVudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ29tcG9uZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleC0xIGJnLWZ1Y2hzaWEtNjAwIG9wYWNpdHktNTAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17d2hvbGVIb3N0UmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtlID0+IHdob2xlQ2FudmFzICYmIHN0YXJ0RHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17ZSA9PiBlbmREcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e2UgPT4gbW92ZURyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtgZmxleC0xICR7d2hvbGVDYW52YXMgPyBgb3ZlcmZsb3ctaGlkZGVuYCA6IGBgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVzc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtvdXRlckNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtob3N0UmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG9sZUNhbnZhcyAmJiBzdGFydERyYWcoZSwgY29udGFpbmVyUG9zaXRpb24uc2NhbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9e2UgPT4gZW5kRHJhZyhlLCBjb250YWluZXJQb3NpdGlvbi5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e2UgPT4gbW92ZURyYWcoZSwgY29udGFpbmVyUG9zaXRpb24uc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZXNzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbm5lckNsYXNzTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgpIHNjYWxlKCR7cG9zaXRpb24uc2NhbGV9KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17ZSA9PiBzdGFydERyYWcoZSwgY29udGFpbmVyUG9zaXRpb24uc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92ZWFibGVDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHBvc2l0aW9uLnggKyBjb250YWluZXJQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogcG9zaXRpb24ueSArIGNvbnRhaW5lclBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogcG9zaXRpb24uc2NhbGUgKiBjb250YWluZXJQb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvbGVDYW52YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vdmVhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvTW92ZWFibGVDb250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgTW92ZWFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gICAgd2hvbGVDYW52YXM6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgIH0sXG59KTtcbiIsICJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFByZXNzYWJsZSwgVGV4dElucHV0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNb3VzZUJ1dHRvbiwgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7IFBpcGVFbmRwb2ludFZpZXcsIFBpcGVWaWV3IH0gZnJvbSAnLi9waXBlcyc7XG5pbXBvcnQgeyBTaGVldFZpZXcsIFNoZWV0Vmlld0RhdGEgfSBmcm9tICcuL3NoZWV0JztcbmltcG9ydCB7IFZhbHVlRWRpdG9yLCBWYWx1ZVZpZXdlck1vZGUgfSBmcm9tICcuL3ZhbHVlLXZpZXcnO1xuaW1wb3J0IHsgZ2V0VHlwZU5hbWUgfSBmcm9tICcuL3dvcmstbmFtZXMnO1xuaW1wb3J0IHsgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlIH0gZnJvbSAnLi4vYW5hbHlzaXMvY2FsY3VsYXRlLXJ1bic7XG5pbXBvcnQge1xuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0VHlwZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgTm9kZUluc3RhbmNlc1ZpZXcgPSAoe1xuICAgIG5vZGVJbnN0YW5jZXMsXG4gICAgZnVsbCA9IGZhbHNlLFxuICAgIGhpZGVUaXRsZXMgPSBmYWxzZSxcbn06IHtcbiAgICBub2RlSW5zdGFuY2VzOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlW107XG4gICAgZnVsbD86IGJvb2xlYW47XG4gICAgaGlkZVRpdGxlcz86IGJvb2xlYW47XG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJ1blZhbHVlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y3JlYXRlUnVuVmFsdWUoKX0+XG4gICAgICAgICAgICA8VmlldyB0ZXN0SUQ9J05vZGVJbnN0YW5jZXNWaWV3OlZpZXcnIGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgIHtub2RlSW5zdGFuY2VzLm1hcCh4ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eC5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3IG5vZGVJbnN0YW5jZT17eH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxSb290Q29tcG9uZW50c1ZpZXcgLz5cbiAgICAgICAgPC9SdW5WYWx1ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmNvbnN0IFJvb3RDb21wb25lbnRzVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudHMgfSA9IHVzZUNvbnRleHQoUnVuVmFsdWVDb250ZXh0KTtcblxuICAgIGNvbnN0IFtyb290Q29tcG9uZW50cywgc2V0Um9vdENvbXBvbmVudHNdID0gdXNlU3RhdGUoe30gYXMgUmVjb3JkPHN0cmluZywgKCkgPT4gSlNYLkVsZW1lbnQ+KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBDb21wb25lbnRzLnN1YnNjcmliZSh4ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSb290Q29tcG9uZW50c1ZpZXc6IENvbXBvbmVudHMuc3Vic2NyaWJlYCwgeyB4IH0pO1xuICAgICAgICAgICAgc2V0Um9vdENvbXBvbmVudHMoeyAuLi54IH0pO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyB0ZXN0SUQ9J1Jvb3RDb21wb25lbnRzVmlldzpWaWV3JyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgIHtbLi4uT2JqZWN0LmVudHJpZXMocm9vdENvbXBvbmVudHMpXS5tYXAoKFtrLCBWXSkgPT4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2t9PlxuICAgICAgICAgICAgICAgICAgICA8ViAvPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBOb2RlVmlldyA9ICh7IG5vZGVJbnN0YW5jZSB9OiB7IG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSB9KSA9PiB7XG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgIH0pO1xuICAgIGNvbnN0IG1vdmVOb2RlID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZhbHVlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgc2V0UG9zaXRpb24odmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTm9kZVZpZXdgLCB7IG5vZGVJbnN0YW5jZSB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdvcmtmbG93ID0gbm9kZUluc3RhbmNlLndvcmtmbG93O1xuXG4gICAgY29uc3QgY29udHJvbCA9IHdvcmtmbG93LmJvZHkua2luZCA9PT0gYG5vZGVzYCA/IHdvcmtmbG93LmJvZHkuY29udHJvbCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBvcGVyYXRvciA9IHdvcmtmbG93LmJvZHkua2luZCA9PT0gYG9wZXJhdG9yYCA/IHdvcmtmbG93LmJvZHkub3BlcmF0b3IgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NvbnRyb2wgJiYgPFZpZXcgY2xhc3NOYW1lPSdiYXNpcy1bMTAwJV0gaC0wJyAvPn1cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICA8TW92ZWFibGVWaWV3XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBwb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3ZlPXttb3ZlTm9kZX1cbiAgICAgICAgICAgICAgICAgICAgbW91c2VCdXR0b249e01vdXNlQnV0dG9uLk1pZGRsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wgcmVsYXRpdmUgYmctc2xhdGUtOTUwLzc1IGJvcmRlci1ibHVlLTEwMCBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIHJvdW5kZWQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcHgtMSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sID8gYGJnLXllbGxvdy05MDBgIDogb3BlcmF0b3IgPyBgYmctYmx1ZS05MDBgIDogYGJnLWdyYXktODAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCc+e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSW5zdGFuY2Uud29ya2Zsb3cubmFtZS5zcGxpdChgL2ApLnNsaWNlKC0xKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIyR7bm9kZUluc3RhbmNlLmtleX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbCAmJiA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCc+e2Ake2NvbnRyb2x9YH08L1RleHQ+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcGVyYXRvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwJz57YCR7b3BlcmF0b3Iuc3Vic3RyaW5nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wgZmxleC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgcC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmlucHV0cy5tYXAoaW5wdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5wdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVDb25uZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlPXtpbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbj17bm9kZUluc3RhbmNlLmlucHV0cy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4LndvcmtmbG93SW5wdXQgPT09IGlucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3V0cHV0PXtub2RlSW5zdGFuY2Uud29ya2Zsb3cuYm9keS5raW5kICE9PSBgbm9kZXNgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMScgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGZsZXgtd3JhcCBtYXgtdy1bMTAwdnddIG0tWy0xcHhdJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZUluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZUluc3RhbmNlLmNoaWxkcmVuLm1hcCh4ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt4LmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlVmlldyBub2RlSW5zdGFuY2U9e3h9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuYm9keS5vcGVyYXRvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHRleHQtWzEwcHhdJz5cdTI2Q0Y8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtZW5kIHAtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5vdXRwdXRzLm1hcChvdXRwdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0cHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlQ29ubmVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZT17b3V0cHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uPXtub2RlSW5zdGFuY2Uub3V0cHV0cy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4LndvcmtmbG93T3V0cHV0ID09PSBvdXRwdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVJbnB1dD17bm9kZUluc3RhbmNlLndvcmtmbG93LmJvZHkua2luZCAhPT0gYG5vZGVzYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlciBub2RlSW5zdGFuY2U9e25vZGVJbnN0YW5jZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvTW92ZWFibGVWaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgRm9vdGVyID0gKHsgbm9kZUluc3RhbmNlIH06IHsgbm9kZUluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlIH0pID0+IHtcbiAgICBjb25zdCB0YWJzID0gW2Bub25lYCwgYHNoZWV0YCwgYGNvZGVgLCBgYm90aGBdIGFzIGNvbnN0O1xuICAgIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZShcbiAgICAgICAgbm9kZUluc3RhbmNlLndvcmtmbG93LmJvZHkua2luZCA9PT0gYG9wZXJhdG9yYFxuICAgICAgICAgICAgPyBgY29kZWBcbiAgICAgICAgICAgIDogKGBzaGVldGAgYXMgKHR5cGVvZiB0YWJzKVtudW1iZXJdKSxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgIHt0YWJzLm1hcCh4ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9eygpID0+IHNldFRhYih4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtgcC0xIGJnLWdyYXktMjAwICR7dGFiID09PSB4ID8gYGAgOiBgb3BhY2l0eS01MGB9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Pnt4fTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIHsodGFiID09PSBgY29kZWAgfHwgdGFiID09PSBgYm90aGApICYmIChcbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLWdyYXktMjAwJz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd3aGl0ZXNwYWNlLXByZSc+e25vZGVJbnN0YW5jZS5ydW5zPy5bMF0/LmNvZGV9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7KHRhYiA9PT0gYHNoZWV0YCB8fCB0YWIgPT09IGBib3RoYCkgJiYgKFxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYmctZ3JheS0yMDAnPlxuICAgICAgICAgICAgICAgICAgICA8Tm9kZUluc3RhbmNlU2hlZXRWaWV3IG5vZGVJbnN0YW5jZT17bm9kZUluc3RhbmNlfSAvPlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5jb25zdCBOb2RlSW5zdGFuY2VTaGVldFZpZXcgPSAoeyBub2RlSW5zdGFuY2UgfTogeyBub2RlSW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UgfSkgPT4ge1xuICAgIGNvbnN0IHJ1blZhbHVlQ29udGV4dCA9IHVzZUNvbnRleHQoUnVuVmFsdWVDb250ZXh0KTtcbiAgICBjb25zdCBbcnVucywgc2V0UnVuc10gPSB1c2VTdGF0ZSh1bmRlZmluZWQgYXMgdHlwZW9mIG5vZGVJbnN0YW5jZS5ydW5zKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWIgPSBydW5WYWx1ZUNvbnRleHQuVmFsdWVDaGFuZ2VkLnN1YnNjcmliZSh4ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOb2RlSW5zdGFuY2VTaGVldFZpZXc6IGNoYW5nZWRgLCB7IHJ1bnM6IG5vZGVJbnN0YW5jZS5ydW5zIH0pO1xuICAgICAgICAgICAgc2V0UnVucyhbLi4uKG5vZGVJbnN0YW5jZS5ydW5zID8/IFtdKV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0UnVucyhbLi4uKG5vZGVJbnN0YW5jZS5ydW5zID8/IFtdKV0pO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgY29uc29sZS5sb2coYE5vZGVJbnN0YW5jZVNoZWV0VmlldzogUkVOREVSYCwgeyBydW5zOiBub2RlSW5zdGFuY2UucnVucyB9KTtcblxuICAgIGlmICghcnVucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgPFRleHQ+RW1wdHk8L1RleHQ+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGFsbEhlYWRlcnM6IFNoZWV0Vmlld0RhdGFbYGhlYWRlcmBdID1cbiAgICAgICAgcnVucz8uZmxhdE1hcChyID0+IFtcbiAgICAgICAgICAgIC4uLnIuaW5wdXRzLm1hcCh4ID0+ICh7IG5hbWU6IHgubmFtZSwgbW9kZTogYGlucHV0YCBhcyBWYWx1ZVZpZXdlck1vZGUgfSkpLFxuICAgICAgICAgICAgLi4uci5pbm5lci5tYXAoeCA9PiAoeyBuYW1lOiB4Lm5hbWUsIG1vZGU6IGBpbm5lcmAgYXMgVmFsdWVWaWV3ZXJNb2RlIH0pKSxcbiAgICAgICAgICAgIC4uLnIub3V0cHV0cy5tYXAoeCA9PiAoeyBuYW1lOiB4Lm5hbWUsIG1vZGU6IGBvdXRwdXRgIGFzIFZhbHVlVmlld2VyTW9kZSB9KSksXG4gICAgICAgIF0pID8/IFtdO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IFsuLi5uZXcgTWFwKGFsbEhlYWRlcnMubWFwKHggPT4gW3gubmFtZSwgeF0pKS52YWx1ZXMoKV07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2hlZXRWaWV3XG4gICAgICAgICAgICBkYXRhPXt7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIHJvd3M6IHJ1bnMubWFwKHIgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbHM6IGhlYWRlcnMubWFwKGggPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGgubW9kZSA9PT0gYGlucHV0YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gci5pbnB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gaC5uYW1lKT8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGgubW9kZSA9PT0gYGlubmVyYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gci5pbm5lci5maW5kKHggPT4geC5uYW1lID09PSBoLm5hbWUpPy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaC5tb2RlID09PSBgb3V0cHV0YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gci5vdXRwdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGgubmFtZSk/LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApO1xufTtcblxuY29uc3QgZ2V0UGlwZUNvbm5lY3Rpb25LZXkgPSAoXG4gICAgY29ubmVjdGlvbjogUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLFxuICAgIGRpcmVjdGlvbjogYGluYCB8IGBvdXRgLFxuKSA9PiB7XG4gICAgcmV0dXJuIGAke2Nvbm5lY3Rpb24ua2V5fToke2RpcmVjdGlvbn1gO1xufTtcblxuY29uc3QgZ2V0UGlwZUtleSA9IChcbiAgICBwaXBlU2lkZTogUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXSB8IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgZGVzdGluYXRpb25gXSxcbiAgICBkaXJlY3Rpb246IGBpbmAgfCBgb3V0YCxcbikgPT4ge1xuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgaW5wdXRgKSB7XG4gICAgICAgIHJldHVybiBnZXRQaXBlQ29ubmVjdGlvbktleShwaXBlU2lkZS5pbnB1dCwgZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgaWYgKHBpcGVTaWRlLmtpbmQgPT09IGBvdXRwdXRgKSB7XG4gICAgICAgIHJldHVybiBnZXRQaXBlQ29ubmVjdGlvbktleShwaXBlU2lkZS5vdXRwdXQsIGRpcmVjdGlvbik7XG4gICAgfVxuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgY29uZGl0aW9uYWwtb3V0cHV0YCkge1xuICAgICAgICByZXR1cm4gZ2V0UGlwZUNvbm5lY3Rpb25LZXkocGlwZVNpZGUub3V0cHV0LCBkaXJlY3Rpb24pO1xuICAgIH1cbiAgICBpZiAocGlwZVNpZGUua2luZCA9PT0gYGRhdGFgKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgb3BlcmF0b3Itb3V0cHV0YCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocGlwZVNpZGUua2luZCA9PT0gYG9wZXJhdG9yLWlucHV0YCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICBjb25zdCBfbmV2ZXI6IG5ldmVyID0gcGlwZVNpZGU7XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuY29uc3QgUGlwZVZhbHVlVmlldyA9ICh7XG4gICAgcGlwZVZhbHVlLFxuICAgIHNpZGUsXG59OiB7XG4gICAgcGlwZVZhbHVlOiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2U7XG4gICAgc2lkZTogYGluZmxvd2AgfCBgb3V0Zmxvd2A7XG59KSA9PiB7XG4gICAgY29uc3QgeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0gPSBwaXBlVmFsdWUgPz8ge307XG4gICAgaWYgKCFzb3VyY2UgfHwgIWRlc3RpbmF0aW9uKSB7XG4gICAgICAgIHJldHVybiA8PjwvPjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VJZCA9IGdldFBpcGVLZXkoc291cmNlLCBgb3V0YCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25JZCA9IGdldFBpcGVLZXkoZGVzdGluYXRpb24sIGBpbmApO1xuICAgIGlmICghc291cmNlSWQgfHwgIWRlc3RpbmF0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIDw+PC8+O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2Uua2luZCA9PT0gYGNvbmRpdGlvbmFsLW91dHB1dGApIHtcbiAgICAgICAgY29uc3Qgc291cmNlQ29uZGl0aW9uSWQgPSBnZXRQaXBlS2V5KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtpbmQ6IGBpbnB1dGAsXG4gICAgICAgICAgICAgICAgaW5wdXQ6IHNvdXJjZS5jb25kaXRpb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYG91dGAsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNvdXJjZURlZmF1bHRJZCA9IGdldFBpcGVLZXkoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2luZDogYGlucHV0YCxcbiAgICAgICAgICAgICAgICBpbnB1dDogc291cmNlLmRlZmF1bHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYG91dGAsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxQaXBlVmlldyBzb3VyY2VJZD17c291cmNlSWR9IGRlc3RpbmF0aW9uSWQ9e2Rlc3RpbmF0aW9uSWR9IHNpZGU9e3NpZGV9IC8+XG4gICAgICAgICAgICAgICAgey8qIDxQaXBlVmlldyBzb3VyY2VJZD17c291cmNlQ29uZGl0aW9uSWR9IGRlc3RpbmF0aW9uSWQ9e2Rlc3RpbmF0aW9uSWR9IHNpZGU9e3NpZGV9IC8+ICovfVxuICAgICAgICAgICAgICAgIDxQaXBlVmlldyBzb3VyY2VJZD17c291cmNlRGVmYXVsdElkfSBkZXN0aW5hdGlvbklkPXtkZXN0aW5hdGlvbklkfSBzaWRlPXtzaWRlfSAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxQaXBlVmlldyBzb3VyY2VJZD17c291cmNlSWR9IGRlc3RpbmF0aW9uSWQ9e2Rlc3RpbmF0aW9uSWR9IHNpZGU9e3NpZGV9IC8+O1xufTtcblxuY29uc3QgTm9kZUNvbm5lY3Rpb24gPSAoe1xuICAgIHZhcmlhYmxlLFxuICAgIGNvbm5lY3Rpb24sXG4gICAgaGlkZUlucHV0LFxuICAgIGhpZGVPdXRwdXQsXG59OiB7XG4gICAgdmFyaWFibGU6IHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICB0eXBlPzogUGlwZXNjcmlwdFR5cGU7XG4gICAgICAgIGlnbm9yZWQ/OiBib29sZWFuO1xuICAgIH07XG4gICAgY29ubmVjdGlvbjogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlO1xuICAgIGhpZGVJbnB1dD86IGJvb2xlYW47XG4gICAgaGlkZU91dHB1dD86IGJvb2xlYW47XG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbHVtbic+XG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sdW1uJz5cbiAgICAgICAgICAgICAgICAgICAgeyFoaWRlSW5wdXQgJiYgY29ubmVjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtjb25uZWN0aW9uLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3IGlkPXtnZXRQaXBlQ29ubmVjdGlvbktleShjb25uZWN0aW9uLCBgaW5gKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWYWx1ZVZpZXcgcGlwZVZhbHVlPXtjb25uZWN0aW9uLmluZmxvd1BpcGV9IHNpZGU9J2luZmxvdycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ibHVlLTMwMCAke3ZhcmlhYmxlLmlnbm9yZWQgPyBgbGluZS10aHJvdWdoIG9wYWNpdHktNTBgIDogYGB9YH1cbiAgICAgICAgICAgICAgICA+e2Ake3ZhcmlhYmxlLm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAge3ZhcmlhYmxlLnR5cGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICB7IWhpZGVPdXRwdXQgJiYgY29ubmVjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtjb25uZWN0aW9uLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXcgaWQ9e2dldFBpcGVDb25uZWN0aW9uS2V5KGNvbm5lY3Rpb24sIGBvdXRgKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29ubmVjdGlvbi5vdXRmbG93UGlwZXMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRmbG93UGlwZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0Zmxvd1BpcGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dGZsb3dQaXBlLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmFsdWVWaWV3IHBpcGVWYWx1ZT17b3V0Zmxvd1BpcGV9IHNpZGU9J291dGZsb3cnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAge2Nvbm5lY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHtjb25uZWN0aW9uLnJ1bnM/Lm5hbWVJblNjb3BlXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBjb25uZWN0aW9uLnJ1bnM/Lm5hbWVJblNjb3BlICE9PSBjb25uZWN0aW9uLm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTMwMCc+e2Ake2Nvbm5lY3Rpb24ucnVucy5uYW1lSW5TY29wZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxOb2RlQ29ubmVjdGlvblZhbHVlIGNvbm5lY3Rpb249e2Nvbm5lY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIHtjb25uZWN0aW9uLmluZmxvd1BpcGU/LnBpcGUua2luZCA9PT0gYGRhdGFgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbS1bMXB4XSBiZy1wdXJwbGUtMTAwIG9wYWNpdHktNTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncHgtMSBtaW4tdy1bNjBweF0gdGV4dC1wdXJwbGUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3Rpb24uaW5mbG93UGlwZT8ucGlwZS5qc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuY29uc3QgY3JlYXRlUnVuVmFsdWUgPSAoKSA9PiAoe1xuICAgIFZhbHVlQ2hhbmdlZDogbmV3IFN1YmplY3Q8dm9pZD4oKSxcbiAgICBDb21wb25lbnRzOiBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9IGFzIFJlY29yZDxzdHJpbmcsICgpID0+IEpTWC5FbGVtZW50PiksXG59KTtcbmV4cG9ydCBjb25zdCBSdW5WYWx1ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGNyZWF0ZVJ1blZhbHVlKCkpO1xuXG5jb25zdCBOb2RlQ29ubmVjdGlvblZhbHVlID0gKHtcbiAgICBjb25uZWN0aW9uLFxufToge1xuICAgIGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZTtcbn0pID0+IHtcbiAgICBjb25zdCBydW5WYWx1ZUNvbnRleHQgPSB1c2VDb250ZXh0KFJ1blZhbHVlQ29udGV4dCk7XG5cbiAgICBjb25zdCBbcnVuVmFsdWUsIHNldFJ1blZhbHVlXSA9IHVzZVN0YXRlKGNvbm5lY3Rpb24ucnVucz8udmFsdWUpO1xuICAgIGNvbnN0IFtoYXNPdmVycmlkZSwgc2V0SGFzT3ZlcnJpZGVdID0gdXNlU3RhdGUoISFjb25uZWN0aW9uLnJ1bnM/Lm92ZXJyaWRlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YiA9IHJ1blZhbHVlQ29udGV4dC5WYWx1ZUNoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOb2RlQ29ubmVjdGlvblZhbHVlOiBWYWx1ZUNoYW5nZWQuc3Vic2NyaWJlYCwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBjb25uZWN0aW9uLnJ1bnM/LnZhbHVlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFJ1blZhbHVlKGNvbm5lY3Rpb24ucnVucz8udmFsdWUpO1xuICAgICAgICAgICAgc2V0SGFzT3ZlcnJpZGUoY29ubmVjdGlvbi5ydW5zPy5vdmVycmlkZSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBjaGFuZ2VWYWx1ZSA9ICh2YWx1ZTogdW5rbm93bikgPT4ge1xuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9jb25uZWN0aW9uT3ZlcnJpZGUoY29ubmVjdGlvbiwgdmFsdWUpO1xuICAgICAgICBydW5WYWx1ZUNvbnRleHQuVmFsdWVDaGFuZ2VkLm5leHQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxWYWx1ZUVkaXRvclxuICAgICAgICAgICAgICAgIGlkPXtjb25uZWN0aW9uLmtleX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cnVuVmFsdWV9XG4gICAgICAgICAgICAgICAgaGFzT3ZlcnJpZGU9e2hhc092ZXJyaWRlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuIiwgImltcG9ydCBSZWFjdCwge1xuICAgIGNyZWF0ZUNvbnRleHQsXG4gICAgdXNlQ29udGV4dCxcbiAgICB1c2VFZmZlY3QsXG4gICAgdXNlTGF5b3V0RWZmZWN0LFxuICAgIHVzZVJlZixcbiAgICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW92ZWFibGVDb250ZXh0IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7IFBpcGVzY3JpcHRQaXBlVmFsdWUsIFBpcGVzY3JpcHRXb3JrZmxvdyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSA9ICh7XG4gICAgbm9kZUlkLFxuICAgIG5hbWUsXG4gICAgZGlyZWN0aW9uLFxufToge1xuICAgIG5vZGVJZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXJlY3Rpb246IGBvdXRgIHwgYGluYDtcbn0pID0+IHtcbiAgICByZXR1cm4gYG5vZGU6JHtub2RlSWR9OiR7ZGlyZWN0aW9ufToke25hbWV9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93ID0gKHtcbiAgICB3b3JrZmxvd1VyaSxcbiAgICBuYW1lLFxuICAgIGRpcmVjdGlvbixcbn06IHtcbiAgICB3b3JrZmxvd1VyaTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXJlY3Rpb246IGBvdXRgIHwgYGluYDtcbn0pID0+IHtcbiAgICByZXR1cm4gYHdvcmtmbG93OiR7d29ya2Zsb3dVcml9OiR7ZGlyZWN0aW9ufToke25hbWV9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2UgPSAoe1xuICAgIHBpcGUsXG4gICAgd29ya2Zsb3csXG59OiB7XG4gICAgcGlwZTogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZTtcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xufSkgPT4ge1xuICAgIGlmICghcGlwZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChwaXBlLmtpbmQgPT09IGB3b3JrZmxvdy1vcGVyYXRvcmApIHtcbiAgICAgICAgcmV0dXJuIFtgb3BlcmF0b3JgXS5tYXAobmFtZSA9PlxuICAgICAgICAgICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChwaXBlLmtpbmQgPT09IGB3b3JrZmxvdy1pbnB1dGApIHtcbiAgICAgICAgcmV0dXJuIFtwaXBlLndvcmtmbG93SW5wdXROYW1lXS5tYXAobmFtZSA9PlxuICAgICAgICAgICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYGluYCxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHBpcGUua2luZCA9PT0gYG5vZGVgKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgIG5vZGVJZDogcGlwZS5zb3VyY2VOb2RlSWQsXG4gICAgICAgICAgICAgICAgbmFtZTogcGlwZS5zb3VyY2VOb2RlT3V0cHV0TmFtZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLy8gaWYocGlwZS5raW5kID09PSBgZGF0YWApe1xuXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIFtdO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBpcGVFbmRwb2ludHNSZWdpc3RyeSA9ICgpID0+ICh7XG4gICAgaG9zdE9ic2VydmFibGU6IG5ldyBTdWJqZWN0KCkgYXMgT2JzZXJ2YWJsZTxWaWV3PixcbiAgICBob3N0VmlldzogbnVsbCBhcyBudWxsIHwgVmlldyxcbiAgICBlbmRwb2ludHM6IHt9IGFzIHtcbiAgICAgICAgW2lkOiBzdHJpbmddOiB1bmRlZmluZWQgfCBTdWJqZWN0PHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT47XG4gICAgfSxcbiAgICBwaXBlczogbmV3IEJlaGF2aW9yU3ViamVjdChcbiAgICAgICAge30gYXMge1xuICAgICAgICAgICAgW2lkOiBzdHJpbmddOlxuICAgICAgICAgICAgICAgIHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfCB7IHNvdXJjZUlkOiBzdHJpbmc7IGRlc3RpbmF0aW9uSWQ6IHN0cmluZzsgc2lkZT86IGBpbmZsb3dgIHwgYG91dGZsb3dgIH07XG4gICAgICAgIH0sXG4gICAgKSxcbn0pO1xudHlwZSBQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlID0gUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlUGlwZUVuZHBvaW50c1JlZ2lzdHJ5PjtcbmV4cG9ydCBjb25zdCBQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0ID0gY3JlYXRlQ29udGV4dChjcmVhdGVQaXBlRW5kcG9pbnRzUmVnaXN0cnkoKSk7XG5cbmNvbnN0IGdldE9yQ3JlYXRlRW5kcG9pbnRTdWJqZWN0ID0gKHJlZ2lzdHJ5OiBQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlLCBpZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgcmVnaXN0cnkuZW5kcG9pbnRzW2lkXVxuICAgICAgICA/PyAocmVnaXN0cnkuZW5kcG9pbnRzW2lkXSA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH0pKVxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgUGlwZVZpZXcgPSAoe1xuICAgIHNvdXJjZUlkLFxuICAgIGRlc3RpbmF0aW9uSWQsXG4gICAgc2lkZSA9IGBpbmZsb3dgLFxufToge1xuICAgIHNvdXJjZUlkOiB1bmRlZmluZWQgfCBzdHJpbmc7XG4gICAgZGVzdGluYXRpb25JZDogc3RyaW5nO1xuICAgIHNpZGU/OiBgaW5mbG93YCB8IGBvdXRmbG93YDtcbn0pID0+IHtcbiAgICBjb25zdCB7IHBpcGVzOiBwaXBlc1N1YmplY3QgfSA9IHVzZUNvbnRleHQoUGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7c291cmNlSWR9PT4ke2Rlc3RpbmF0aW9uSWR9Ojoke3NpZGV9YDtcbiAgICAgICAgY29uc3Qgb2xkID0gcGlwZXNTdWJqZWN0LnZhbHVlO1xuICAgICAgICBvbGRba2V5XSA9ICFzb3VyY2VJZFxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgc291cmNlSWQsXG4gICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbklkLFxuICAgICAgICAgICAgICAgICAgc2lkZSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgcGlwZXNTdWJqZWN0Lm5leHQob2xkKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2xkID0gcGlwZXNTdWJqZWN0LnZhbHVlO1xuICAgICAgICAgICAgb2xkW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBwaXBlc1N1YmplY3QubmV4dChvbGQpO1xuICAgICAgICB9O1xuICAgIH0sIFtzb3VyY2VJZCwgZGVzdGluYXRpb25JZCwgc2lkZV0pO1xuXG4gICAgcmV0dXJuIDw+PC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IFBpcGVWaWV3SG9zdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBpcGVzOiBwaXBlc1N1YmplY3QgfSA9IHVzZUNvbnRleHQoUGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dCk7XG4gICAgY29uc3QgW3BpcGVzLCBzZXRQaXBlc10gPSB1c2VTdGF0ZShwaXBlc1N1YmplY3QudmFsdWUpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YiA9IHBpcGVzU3ViamVjdC5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgICAgICBzZXRQaXBlcyh7IC4uLnggfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgdGVzdElEPSdQaXBlVmlld0hvc3QnIGNsYXNzTmFtZT0nYWJzb2x1dGUgei0xMCBvcGFjaXR5LTc1Jz5cbiAgICAgICAgICAgIHtbLi4uT2JqZWN0LmVudHJpZXMocGlwZXMpXVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKFtrLCB2XSkgPT4gISF2KVxuICAgICAgICAgICAgICAgIC5tYXAoKFtrLCB2XSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtrfT57diAmJiA8UGlwZVZpZXdMaW5lIHsuLi52fSAvPn08L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IFBpcGVWaWV3TGluZSA9ICh7XG4gICAgc291cmNlSWQsXG4gICAgZGVzdGluYXRpb25JZCxcbiAgICBzaWRlID0gYGluZmxvd2AsXG59OiB7XG4gICAgc291cmNlSWQ6IHVuZGVmaW5lZCB8IHN0cmluZztcbiAgICBkZXN0aW5hdGlvbklkOiBzdHJpbmc7XG4gICAgc2lkZT86IGBpbmZsb3dgIHwgYG91dGZsb3dgO1xufSkgPT4ge1xuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0KTtcblxuICAgIGNvbnN0IGRlc3RpbmF0aW9uRW5kcG9pbnQgPSBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgZGVzdGluYXRpb25JZCk7XG4gICAgY29uc3Qgc291cmNlRW5kcG9pbnQgPSAhc291cmNlSWQgPyB1bmRlZmluZWQgOiBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgc291cmNlSWQpO1xuXG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHNvdXJjZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIGRlc3RpbmF0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICB9KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghc291cmNlRW5kcG9pbnQgfHwgIWRlc3RpbmF0aW9uRW5kcG9pbnQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlVmlldyAhc291cmNlRW5kcG9pbnQgfHwgIWRlc3RpbmF0aW9uRW5kcG9pbnRgLCB7XG4gICAgICAgICAgICAvLyAgICAgc291cmNlSWQsXG4gICAgICAgICAgICAvLyAgICAgZGVzdGluYXRpb25JZCxcbiAgICAgICAgICAgIC8vICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgIC8vICAgICBzb3VyY2VFbmRwb2ludCxcbiAgICAgICAgICAgIC8vICAgICBkZXN0aW5hdGlvbkVuZHBvaW50LFxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5pdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgICAgIGNvbnN0IHN1YiA9IGNvbWJpbmVMYXRlc3QoW3NvdXJjZUVuZHBvaW50LCBkZXN0aW5hdGlvbkVuZHBvaW50LCBpbml0XSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKFtzb3VyY2UsIGRlc3RpbmF0aW9uXSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlVmlldyBkcmF3YCwgeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0pO1xuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKHsgc291cmNlLCBkZXN0aW5hdGlvbiB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaW5pdGlhbFxuICAgICAgICBjb25zb2xlLmxvZyhgaW5pdGlhbGAsIHsgc291cmNlRW5kcG9pbnQsIGRlc3RpbmF0aW9uRW5kcG9pbnQgfSk7XG4gICAgICAgIGluaXQubmV4dCgpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbIWRlc3RpbmF0aW9uRW5kcG9pbnQsICFzb3VyY2VFbmRwb2ludF0pO1xuXG4gICAgY29uc3QgZGVidWcgPSBmYWxzZTtcbiAgICBjb25zdCBpc091dGZsb3cgPSBzaWRlID09PSBgb3V0Zmxvd2A7XG4gICAgY29uc3QgeERlbHRhID0gcG9zaXRpb24uZGVzdGluYXRpb24ueCAtIHBvc2l0aW9uLnNvdXJjZS54O1xuICAgIGNvbnN0IHlEZWx0YSA9IHBvc2l0aW9uLmRlc3RpbmF0aW9uLnkgLSBwb3NpdGlvbi5zb3VyY2UueTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQoeERlbHRhICogeERlbHRhICsgeURlbHRhICogeURlbHRhKTtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoeURlbHRhLCB4RGVsdGEpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICB0ZXN0SUQ9e2BQaXBlVmlld0xpbmVcbiAgICAgICAgICAgICR7c291cmNlSWR9XG4gICAgICAgICAgICA9PiR7ZGVzdGluYXRpb25JZH1cbiAgICAgICAgICAgICR7c2lkZX1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTAgaC0wIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcidcbiAgICAgICAgPlxuICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LTAgaC0wIGFic29sdXRlJz5cbiAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24uc291cmNlLnggKyA0fXB4LCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uc291cmNlLnkgLSAyICsgKGlzT3V0ZmxvdyA/IDIgOiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfXB4KWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHthbmdsZX1yYWQpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc091dGZsb3cgPyBgYmctYmx1ZS00MDBgIDogYGJnLXJlZC00MDBgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAge2RlYnVnICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIHRyYW5zbGF0ZS15LVsxMDBweF0gcm90YXRlLTQ1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy1bMTAwMHB4XSB0ZXh0LVs0cHhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57YCgke3NvdXJjZUlkfSk9Pigke2Rlc3RpbmF0aW9uSWR9KWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntgKCR7cG9zaXRpb24uc291cmNlLnh9LCR7cG9zaXRpb24uc291cmNlLnl9KT0+KCR7cG9zaXRpb24uZGVzdGluYXRpb24ueH0sJHtwb3NpdGlvbi5kZXN0aW5hdGlvbi55fSlgfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFBpcGVFbmRwb2ludFZpZXcgPSAoeyBpZCB9OiB7IGlkOiBzdHJpbmcgfSkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSAxMjtcblxuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0KTtcbiAgICBjb25zdCBtb3ZlQ29udGV4dCA9IHVzZUNvbnRleHQoTW92ZWFibGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHRhcmdldFJlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBWaWV3KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdGAsIHsgcmVnaXN0cnkgfSk7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaCA9IHJlZ2lzdHJ5Lmhvc3RWaWV3O1xuICAgICAgICAgICAgaWYgKCFoKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVFbmRwb2ludFZpZXcgdXNlTGF5b3V0RWZmZWN0IC0gaG9zdCBOT1QgUkVBRFlgLCB7IHJlZ2lzdHJ5IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHQgPSB0YXJnZXRSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghdCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdCAtIGNvbXBvbmVudCBOT1QgUkVBRFlgLCB7IHJlZ2lzdHJ5IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdC5tZWFzdXJlTGF5b3V0KGgsIChsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUGlwZUVuZHBvaW50VmlldyB1c2VMYXlvdXRFZmZlY3QgbWVhc3VyZUxheW91dCBORVhUYCwge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZCxcbiAgICAgICAgICAgICAgICAvLyAgICAgbGVmdCxcbiAgICAgICAgICAgICAgICAvLyAgICAgdG9wLFxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIC8vICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gZ2V0T3JDcmVhdGVFbmRwb2ludFN1YmplY3QocmVnaXN0cnksIGlkKTtcbiAgICAgICAgICAgICAgICBzLm5leHQoe1xuICAgICAgICAgICAgICAgICAgICB4OiBsZWZ0ICsgbW92ZUNvbnRleHQucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG9wICsgbW92ZUNvbnRleHQucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNhbGN1bGF0ZSgpO1xuICAgICAgICByZWdpc3RyeS5ob3N0T2JzZXJ2YWJsZS5zdWJzY3JpYmUoaCA9PiB7XG4gICAgICAgICAgICBjYWxjdWxhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW1xuICAgICAgICAhIXRhcmdldFJlZi5jdXJyZW50LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi54LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi55LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi5zY2FsZSxcbiAgICBdKTtcblxuICAgIGNvbnN0IGRlYnVnID0gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgdGVzdElEPXtgUGlwZUVuZHBvaW50Vmlldzoke2lkfWB9IGNsYXNzTmFtZT0ndy0yIGgtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPFZpZXcgcmVmPXt0YXJnZXRSZWZ9IGNsYXNzTmFtZT0ndy0wIGgtMCBhYnNvbHV0ZSBwdC0xJz5cbiAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNDAwIGJvcmRlci1bMXB4XSBib3JkZXItYmx1ZS05NTAgcm91bmRlZC1mdWxsJ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAtc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IC1zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAge2RlYnVnICYmIChcbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIHRyYW5zbGF0ZS15LVsxMDBweF0gcm90YXRlLTkwJz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNDAwJz57aWR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgU2Nyb2xsVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFZhbHVlVmlld2VyLCBWYWx1ZVZpZXdlck1vZGUgfSBmcm9tICcuL3ZhbHVlLXZpZXcnO1xuXG5leHBvcnQgdHlwZSBTaGVldFZpZXdEYXRhID0ge1xuICAgIGhlYWRlcjogeyBuYW1lOiBzdHJpbmc7IG1vZGU6IFZhbHVlVmlld2VyTW9kZSB9W107XG4gICAgcm93czogeyBjZWxsczogdW5rbm93bltdIH1bXTtcbn07XG5leHBvcnQgY29uc3QgU2hlZXRWaWV3ID0gKHsgZGF0YSB9OiB7IGRhdGE6IFNoZWV0Vmlld0RhdGEgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IHRlc3RJRD0nU2hlZXRWaWV3JyBjbGFzc05hbWU9J2ZsZXgtY29sJz5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgIHtkYXRhLmhlYWRlci5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3gubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e3gubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8U2Nyb2xsVmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIG1heC1oLVsyNXZoXSc+XG4gICAgICAgICAgICAgICAge2RhdGEucm93cy5tYXAoKHIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ci5jZWxscy5tYXAoKHgsIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17an0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZhbHVlVmlld2VyIHZhbHVlPXt4fSBtb2RlPXtkYXRhLmhlYWRlcltqXS5tb2RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFRleHRJbnB1dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFJ1blZhbHVlQ29udGV4dCB9IGZyb20gJy4vbm9kZS1pbnN0YW5jZS12aWV3JztcblxuZXhwb3J0IGNvbnN0IFZhbHVlRWRpdG9yID0gKHtcbiAgICBpZCxcbiAgICB2YWx1ZSxcbiAgICBoYXNPdmVycmlkZSxcbiAgICBvbkNoYW5nZSxcbn06IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHZhbHVlOiB1bmtub3duO1xuICAgIGhhc092ZXJyaWRlOiBib29sZWFuO1xuICAgIG9uQ2hhbmdlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XG59KSA9PiB7XG4gICAgY29uc3QgcnVuVmFsdWVDb250ZXh0ID0gdXNlQ29udGV4dChSdW5WYWx1ZUNvbnRleHQpO1xuXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSB1c2VTdGFibGVDYWxsYmFjaygodjogdW5rbm93bikgPT4ge1xuICAgICAgICB0b2dnbGVFZGl0KGZhbHNlKTtcbiAgICAgICAgb25DaGFuZ2Uodik7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2dnbGVFZGl0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFZhbHVlRWRpdG9yOiB0b2dnbGVFZGl0YCwgeyB2aXNpYmxlIH0pO1xuICAgICAgICBjb25zdCBuZXdTaG93RWRpdCA9IHZpc2libGU7XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHJ1blZhbHVlQ29udGV4dC5Db21wb25lbnRzLnZhbHVlO1xuICAgICAgICBpZiAobmV3U2hvd0VkaXQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHNbaWRdID0gKCkgPT4gKFxuICAgICAgICAgICAgICAgIDxWYWx1ZUVkaXRNb2RhbFxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdG9nZ2xlRWRpdChmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgY29tcG9uZW50c1tpZF07XG4gICAgICAgIH1cbiAgICAgICAgcnVuVmFsdWVDb250ZXh0LkNvbXBvbmVudHMubmV4dChjb21wb25lbnRzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3NJbj17KCkgPT4gdG9nZ2xlRWRpdCh0cnVlKX0+XG4gICAgICAgICAgICAgICAgPFZhbHVlVmlld2VyIHZhbHVlPXt2YWx1ZX0gbW9kZT17aGFzT3ZlcnJpZGUgPyBgb3ZlcnJpZGVgIDogdW5kZWZpbmVkfSAvPlxuICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgdHlwZSBWYWx1ZVZpZXdlck1vZGUgPSB1bmRlZmluZWQgfCBgb3ZlcnJpZGVgIHwgYGlucHV0YCB8IGBvdXRwdXRgIHwgYGlubmVyYDtcbmV4cG9ydCBjb25zdCBWYWx1ZVZpZXdlciA9ICh7IHZhbHVlLCBtb2RlIH06IHsgdmFsdWU6IHVua25vd247IG1vZGU/OiBWYWx1ZVZpZXdlck1vZGUgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG0tWzFweF0gJHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gYG92ZXJyaWRlYFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgYmctZ3JlZW4tMTAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtb2RlID09PSBgaW5wdXRgXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBiZy1ncmVlbi0xMDBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG1vZGUgPT09IGBvdXRwdXRgXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBiZy1ncmVlbi0xMDBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBiZy1ncmF5LTEwMGBcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0xIG1pbi13LVs2MHB4XSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gYG92ZXJyaWRlYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYHRleHQtZ3JlZW4tNjAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gYGlucHV0YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYHRleHQtZ3JlZW4tNjAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gYG91dHB1dGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGB0ZXh0LWdyZWVuLTYwMGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGB0ZXh0LWdyYXktNjAwYFxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgVmFsdWVFZGl0TW9kYWwgPSAoe1xuICAgIGlkLFxuICAgIHZhbHVlOiB2YWx1ZVJhdyxcbiAgICBvbkNoYW5nZSxcbiAgICBvbkNhbmNlbCxcbn06IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHZhbHVlOiB1bmtub3duO1xuICAgIG9uQ2hhbmdlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XG4gICAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG59KSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShKU09OLnN0cmluZ2lmeSh2YWx1ZVJhdykpO1xuICAgIGNvbnN0IHNhdmUgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICB9KTtcbiAgICBjb25zdCBjbGVhciA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgICBjb25zdCBjYW5jZWwgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIG9uQ2FuY2VsKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIGZsZXgtY29sIGJnLWdyYXktMTAwIHAtMiByb3VuZGVkIHotMTAnPlxuICAgICAgICAgICAgPFRleHRJbnB1dCBjbGFzc05hbWU9J2JnLXdoaXRlJyB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlVGV4dD17eCA9PiBzZXRWYWx1ZSh4KX0gLz5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9e2NhbmNlbH0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYmctZ3JheS0yMDAgcC0xIG0tMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5DYW5jZWw8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cblxuICAgICAgICAgICAgICAgIDxQcmVzc2FibGUgb25QcmVzcz17Y2xlYXJ9PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLXJlZC0yMDAgcC0xIG0tMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5DbGVhcjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuXG4gICAgICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzPXtzYXZlfT5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy1ibHVlLTIwMCBwLTEgbS0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlNhdmU8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuIiwgImltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBQaXBlc2NyaXB0VHlwZSwgUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlTmFtZSA9ICh0eXBlOiBQaXBlc2NyaXB0VHlwZSkgPT4ge1xuICAgIGlmICh0eXBlLmtpbmQgPT09IGBzaW1wbGVgKSB7XG4gICAgICAgIHJldHVybiB0eXBlLnR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHR5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IFdvcmtmbG93SW5wdXROYW1lID0gKHsgaW5wdXQgfTogeyBpbnB1dDogUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJsdWUtMzAwICR7aW5wdXQuaWdub3JlZCA/IGBsaW5lLXRocm91Z2ggb3BhY2l0eS01MGAgOiBgYH1gfVxuICAgICAgICA+e2Ake2lucHV0Lm5hbWV9YH08L1RleHQ+XG4gICAgKTtcbn07XG4iLCAiZXhwb3J0IGNvbnN0IGpzb25TdHJpbmdpZnlfc2FmZSA9IChvYmpSYXc6IHVua25vd24sIHNob3VsZEZvcm1hdD86IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xuICAgIGxldCBuZXh0SWQgPSAxO1xuICAgIHR5cGUgUmVnaXN0cnkgPSBNYXA8dW5rbm93biwgeyBpZDogc3RyaW5nOyBtaW5EZXB0aDogbnVtYmVyOyB2aXNpdGVkPzogYm9vbGVhbiB9PjtcbiAgICBjb25zdCBkZWVwUmVnaXN0ZXIgPSAob2JqOiB1bmtub3duLCB2aXNpdGVkOiBSZWdpc3RyeSwgZGVwdGg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiAhPT0gYG9iamVjdGApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYmpSZWcgPSB2aXNpdGVkLmdldChvYmopO1xuICAgICAgICBpZiAob2JqUmVnKSB7XG4gICAgICAgICAgICBvYmpSZWcubWluRGVwdGggPSBNYXRoLm1pbihkZXB0aCwgb2JqUmVnLm1pbkRlcHRoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpc2l0ZWQuc2V0KG9iaiwgeyBpZDogYF9pZF8ke25leHRJZCsrfV9gLCBtaW5EZXB0aDogZGVwdGggfSk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgb2JqLmZvckVhY2goeCA9PiBkZWVwUmVnaXN0ZXIoeCwgdmlzaXRlZCwgZGVwdGggKyAxKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaCh4ID0+IGRlZXBSZWdpc3Rlcih4LCB2aXNpdGVkLCBkZXB0aCArIDEpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWVwQ2xvbmUgPSAob2JqOiB1bmtub3duLCB2aXNpdGVkOiBSZWdpc3RyeSwgZGVwdGg6IG51bWJlcik6IHVua25vd24gPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gYG9iamVjdGApIHtcbiAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgciA9IHZpc2l0ZWQuZ2V0KG9iaik7XG4gICAgICAgICAgICBpZiAoZGVwdGggPiAocj8ubWluRGVwdGggPz8gMCkgfHwgcj8udmlzaXRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIF9fX3JlZjogdmlzaXRlZC5nZXQob2JqKT8uaWQgPz8gYGAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICByLnZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iai5tYXAoeCA9PiBkZWVwQ2xvbmUoeCwgdmlzaXRlZCwgZGVwdGggKyAxKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW3Zpc2l0ZWQuZ2V0KG9iaik/LmlkID8/IGBgXTogYGAsXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLm1hcCgoW2ssIHZdKSA9PiBbaywgZGVlcENsb25lKHYsIHZpc2l0ZWQsIGRlcHRoICsgMSldKSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZ2lzdHJ5OiBSZWdpc3RyeSA9IG5ldyBNYXAoKTtcbiAgICBkZWVwUmVnaXN0ZXIob2JqUmF3LCByZWdpc3RyeSwgMCk7XG4gICAgY29uc3Qgb2JqID0gZGVlcENsb25lKG9ialJhdywgcmVnaXN0cnksIDApO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IFtdIGFzIHVua25vd25bXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCBzaG91bGRGb3JtYXQgPyAyIDogMCk7XG59O1xuIiwgImltcG9ydCB7IGpzb25TdHJpbmdpZnlfc2FmZSB9IGZyb20gJy4uL3V0aWxzL2pzb24nO1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTIxNzE0ODAvNTY3NTI0XG5jb25zdCBjeXJiNTMgPSAoc3RyOiBzdHJpbmcsIHNlZWQgPSAwKSA9PiB7XG4gICAgbGV0IGgxID0gMHhkZWFkYmVlZiBeIHNlZWQsXG4gICAgICAgIGgyID0gMHg0MWM2Y2U1NyBeIHNlZWQ7XG4gICAgZm9yIChsZXQgaSA9IDAsIGNoOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGgxID0gTWF0aC5pbXVsKGgxIF4gY2gsIDI2NTQ0MzU3NjEpO1xuICAgICAgICBoMiA9IE1hdGguaW11bChoMiBeIGNoLCAxNTk3MzM0Njc3KTtcbiAgICB9XG4gICAgaDEgPSBNYXRoLmltdWwoaDEgXiAoaDEgPj4+IDE2KSwgMjI0NjgyMjUwNyk7XG4gICAgaDEgXj0gTWF0aC5pbXVsKGgyIF4gKGgyID4+PiAxMyksIDMyNjY0ODk5MDkpO1xuICAgIGgyID0gTWF0aC5pbXVsKGgyIF4gKGgyID4+PiAxNiksIDIyNDY4MjI1MDcpO1xuICAgIGgyIF49IE1hdGguaW11bChoMSBeIChoMSA+Pj4gMTMpLCAzMjY2NDg5OTA5KTtcblxuICAgIHJldHVybiA0Mjk0OTY3Mjk2ICogKDIwOTcxNTEgJiBoMikgKyAoaDEgPj4+IDApO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhc2hDb2RlID0gKHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGpzb25TdHJpbmdpZnlfc2FmZSh2YWx1ZSk7XG4gICAgcmV0dXJuIGN5cmI1Myhqc29uKTtcbn07XG4iLCAiaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0QnVpbHRpbk9wZXJhdG9yLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIFBpcGVzY3JpcHRUeXBlLFxuICAgIFBpcGVzY3JpcHRWYXJpYWJsZSxcbiAgICBQaXBlc2NyaXB0V29ya2Zsb3csXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQsXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93T3V0cHV0LFxuICAgIFBpcGVzY3JpcHRXb3JrZmxvd19XaXRoTm9kZXMsXG59IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgaW5kZW50ID0gKHRleHQ6IHN0cmluZywgZGVwdGg6IG51bWJlciA9IDEpID0+IHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgcmV0dXJuIGBgO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dFxuICAgICAgICAuc3BsaXQoYFxcbmApXG4gICAgICAgIC5tYXAoeCA9PiBgJHtbLi4ubmV3IEFycmF5KGRlcHRoKV0ubWFwKHggPT4gYCAgICBgKX0ke3h9XFxuYClcbiAgICAgICAgLmpvaW4oYGApO1xufTtcblxuY29uc3Qgb3BlcmF0b3JFeHByZXNzaW9ucyA9IFtcbiAgICAvLyBhc3NpZ25tZW50XG4gICAgLi4uKFtgZGVjbGFyYXRpb25gLCBgPWBdIGFzIGNvbnN0KS5tYXAob3BlcmF0b3IgPT4gKHtcbiAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgIHRlbXBsYXRlOiAoYXJnTmFtZXM6IHN0cmluZ1tdKSA9PiBgJHthcmdOYW1lc1swXX1gLFxuICAgIH0pKSxcbiAgICAvLyBwcmVmaXggdW5hcnlcbiAgICAuLi4oW2AhYF0gYXMgY29uc3QpLm1hcChvcGVyYXRvciA9PiAoe1xuICAgICAgICBvcGVyYXRvcixcbiAgICAgICAgdGVtcGxhdGU6IChhcmdOYW1lczogc3RyaW5nW10pID0+IGAke29wZXJhdG9yfSR7YXJnTmFtZXNbMF19YCxcbiAgICB9KSksXG4gICAgLy8gcG9zdGZpeCB1bmFyeVxuICAgIC4uLihbYCsrYCwgYC0tYF0gYXMgY29uc3QpLm1hcChvcGVyYXRvciA9PiAoe1xuICAgICAgICBvcGVyYXRvcixcbiAgICAgICAgdGVtcGxhdGU6IChhcmdOYW1lczogc3RyaW5nW10pID0+IGAke2FyZ05hbWVzWzBdfSR7b3BlcmF0b3J9YCxcbiAgICB9KSksXG4gICAgLy8gYmluYXJ5XG4gICAgLi4uKFtgK2AsIGAtYCwgYCpgLCBgL2AsIGAlYCwgYCYmYCwgYHx8YCwgYD09YCwgYCE9YCwgYDxgLCBgPmAsIGA8PWAsIGA+PWBdIGFzIGNvbnN0KS5tYXAoXG4gICAgICAgIG9wZXJhdG9yID0+ICh7XG4gICAgICAgICAgICBvcGVyYXRvcixcbiAgICAgICAgICAgIHRlbXBsYXRlOiAoYXJnTmFtZXM6IHN0cmluZ1tdKSA9PiBgJHthcmdOYW1lc1swXX0gJHtvcGVyYXRvcn0gJHthcmdOYW1lc1sxXX1gLFxuICAgICAgICB9KSxcbiAgICApLFxuICAgIC8vIGN1c3RvbVxuICAgIC4uLihbYGNvbmRpdGlvbmFsLXRlcm5hcnlgXSBhcyBjb25zdCkubWFwKG9wZXJhdG9yID0+ICh7XG4gICAgICAgIG9wZXJhdG9yLFxuICAgICAgICB0ZW1wbGF0ZTogKGFyZ05hbWVzOiBzdHJpbmdbXSkgPT4gYCR7YXJnTmFtZXNbMF19ID8gJHthcmdOYW1lc1sxXX0gOiAke2FyZ05hbWVzWzJdfWAsXG4gICAgfSkpLFxuXSBzYXRpc2ZpZXMge1xuICAgIG9wZXJhdG9yOiBQaXBlc2NyaXB0QnVpbHRpbk9wZXJhdG9yO1xuICAgIHRlbXBsYXRlOiAoYXJnTmFtZXM6IHN0cmluZ1tdKSA9PiBzdHJpbmc7XG59W107XG5cbnR5cGUgQnVpbGRlciA9IHtcbiAgICBkZWNsYXJlZFdvcmtmbG93czoge1xuICAgICAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xuICAgICAgICBnZXRDYWxsRXhwcmVzc2lvbjogKGFyZ3M6IHN0cmluZ1tdKSA9PiBzdHJpbmc7XG4gICAgfVtdO1xufTtcblxuLyoqIENvbnZlcnQgd29ya2Zsb3cgdG8gdHlwZXNjcmlwdCBmaWxlIHdpdGggZXhwb3J0c1xuICpcbiAqIC0gbmVzdGVkIHdvcmtmbG93cyBhcmUgZnVuY3Rpb25zXG4gKiAtIG91dHB1dHMgYXJlIGV4cG9ydHNcbiAqIC0gcm9vdE5vZGVzIGFyZSBmbGF0IGNvZGVcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBjb252ZXJ0V29ya2Zsb3dUb1R5cGVzY3JpcHRGaWxlID0gKFxuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3csXG4gICAgZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQsXG4gICAgYnVpbGRlcjogQnVpbGRlciA9IHtcbiAgICAgICAgZGVjbGFyZWRXb3JrZmxvd3M6IFtdLFxuICAgIH0sXG4pID0+IHtcbiAgICBjb25zdCBuZXN0ZWRGdW5jdGlvbkRlY2xhcmF0aW9ucyA9XG4gICAgICAgIHdvcmtmbG93LndvcmtmbG93c1xuICAgICAgICAgICAgPy5tYXAodyA9PiBjb252ZXJ0V29ya2Zsb3dUb0Z1bmN0aW9uRGVjbGFyYXRpb24odywgZGF0YXNldCwgYnVpbGRlcikpXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgICAgIC5tYXAoeCA9PiB4ISkgPz8gW107XG5cbiAgICBjb25zdCBjb250ZW50ID0gYCR7bmVzdGVkRnVuY3Rpb25EZWNsYXJhdGlvbnMubWFwKHggPT4geC5jb250ZW50KS5qb2luKGBcXG5cXG5gKX1gO1xuXG4gICAgLy8gY29uc3QgeyBjb250ZW50IH0gPSBjb252ZXJ0Tm9kZXNUb0ZpbGUocm9vdE5vZGVJbnN0YW5jZXMsIHdvcmtmbG93LCBidWlsZGVyKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRlbnQsXG4gICAgfTtcbn07XG5cbmNvbnN0IFNJTVBMSUZZX1NJTkdMRV9SRVRVUk4gPSB0cnVlO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlX2dldENhbGxFeHByZXNzaW9uID0gKFxuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3csXG4gICAgZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQsXG4gICAgYnVpbGRlcjogQnVpbGRlciA9IHtcbiAgICAgICAgZGVjbGFyZWRXb3JrZmxvd3M6IFtdLFxuICAgIH0sXG4pID0+IHtcbiAgICBjb25zdCBmdW5jdGlvbk5hbWUgPSBnZXRGdW5jdGlvbk5hbWUod29ya2Zsb3cpO1xuXG4gICAgaWYgKHdvcmtmbG93LmJvZHkua2luZCA9PT0gYG9wZXJhdG9yYCkge1xuICAgICAgICBjb25zdCB7IG9wZXJhdG9yIH0gPSB3b3JrZmxvdy5ib2R5O1xuICAgICAgICBjb25zdCBmdW4gPSBvcGVyYXRvckV4cHJlc3Npb25zLmZpbmQoZiA9PiBmLm9wZXJhdG9yID09PSBvcGVyYXRvcik7XG4gICAgICAgIGlmICghZnVuKSB7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gYC8qIG1pc3Npbmcgb3BlcmF0b3IgJHtvcGVyYXRvcn0qL2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bi50ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBpZiAod29ya2Zsb3cuYm9keS5jb250cm9sKSB7XG4gICAgICAgIHJldHVybiAoYXJnczogc3RyaW5nW10pID0+IGNyZWF0ZV9nZXRDb250cm9sQm9keSh3b3JrZmxvdywgZGF0YXNldCwgYnVpbGRlcik/LihhcmdzKSA/PyBgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gKGFyZ3M6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtmdW5jdGlvbk5hbWV9KCR7YXJncy5qb2luKGAsIGApfSlgO1xuICAgIH07XG59O1xuXG5jb25zdCBjcmVhdGVfZ2V0Q29udHJvbEJvZHkgPSAoXG4gICAgd29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdyxcbiAgICBkYXRhc2V0OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldCxcbiAgICBidWlsZGVyOiBCdWlsZGVyID0ge1xuICAgICAgICBkZWNsYXJlZFdvcmtmbG93czogW10sXG4gICAgfSxcbikgPT4ge1xuICAgIGNvbnN0IHdvcmtmbG93VHlwZWQgPSB3b3JrZmxvdyBhcyBQaXBlc2NyaXB0V29ya2Zsb3dfV2l0aE5vZGVzO1xuICAgIGNvbnN0IGNvbnRyb2wgPSB3b3JrZmxvd1R5cGVkLmJvZHkuY29udHJvbDtcbiAgICBpZiAoY29udHJvbCA9PT0gYGlmYCkge1xuICAgICAgICByZXR1cm4gKGFyZ3M6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3b3JrZmxvd05vZGVJbnN0YW5jZSA9IGRhdGFzZXQuYWxsTm9kZUluc3RhbmNlcy5maW5kKFxuICAgICAgICAgICAgICAgIHggPT4geC5ub2RlLndvcmtmbG93VXJpID09PSB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuYW1lc0luU2NvcGUgPSB3b3JrZmxvd05vZGVJbnN0YW5jZT8uaW5wdXRzLm1hcChcbiAgICAgICAgICAgICAgICB4ID0+IHgucnVucz8ubmFtZUluU2NvcGUgPz8geC5uYW1lLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dE5hbWVzID1cbiAgICAgICAgICAgICAgICB3b3JrZmxvd05vZGVJbnN0YW5jZT8ub3V0cHV0cy5tYXAoeCA9PiB4LnJ1bnM/Lm5hbWVJblNjb3BlID8/IHgubmFtZSkgPz8gW107XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRzID0gY3JlYXRlQm9keVN0YXRlbWVudHMod29ya2Zsb3dUeXBlZCwgZGF0YXNldCwgYnVpbGRlciwgbmFtZXNJblNjb3BlKTtcbiAgICAgICAgICAgIHJldHVybiBgJHtcbiAgICAgICAgICAgICAgICAob3V0cHV0TmFtZXM/Lmxlbmd0aCA/PyAwKSA+IDFcbiAgICAgICAgICAgICAgICAgICAgPyBgbGV0IHsgJHtvdXRwdXROYW1lcy5qb2luKGAsIGApfSB9O2BcbiAgICAgICAgICAgICAgICAgICAgOiBvdXRwdXROYW1lcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICAgICAgICAgPyBgbGV0ICR7b3V0cHV0TmFtZXNbMF19O2BcbiAgICAgICAgICAgICAgICAgICAgOiBgYFxuICAgICAgICAgICAgfVxuaWYgKCR7YXJncy5zbGljZSgwLCAxKS5qb2luKGAsIGApfSkge1xuJHtpbmRlbnQoc3RhdGVtZW50cy5qb2luKGBcXG5gKSl9fWA7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgIGNvbnN0IF9uZXZlcjogdW5kZWZpbmVkID0gY29udHJvbDtcbn07XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0V29ya2Zsb3dUb0Z1bmN0aW9uRGVjbGFyYXRpb24gPSAoXG4gICAgd29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdyxcbiAgICBkYXRhc2V0OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldCxcbiAgICBidWlsZGVyOiBCdWlsZGVyID0ge1xuICAgICAgICBkZWNsYXJlZFdvcmtmbG93czogW10sXG4gICAgfSxcbik6IHVuZGVmaW5lZCB8IHsgY29udGVudDogc3RyaW5nIH0gPT4ge1xuICAgIGlmIChidWlsZGVyLmRlY2xhcmVkV29ya2Zsb3dzLmZpbmQoeCA9PiB4LndvcmtmbG93ID09PSB3b3JrZmxvdykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uOiBCdWlsZGVyW2BkZWNsYXJlZFdvcmtmbG93c2BdW251bWJlcl0gPSB7XG4gICAgICAgIHdvcmtmbG93LFxuICAgICAgICBnZXRDYWxsRXhwcmVzc2lvbjogY3JlYXRlX2dldENhbGxFeHByZXNzaW9uKHdvcmtmbG93LCBkYXRhc2V0LCBidWlsZGVyKSxcbiAgICB9O1xuICAgIGJ1aWxkZXIuZGVjbGFyZWRXb3JrZmxvd3MucHVzaChkZWNsYXJhdGlvbik7XG5cbiAgICBpZiAod29ya2Zsb3cuYm9keS5raW5kID09PSBgb3BlcmF0b3JgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXN0ZWRGdW5jdGlvbkRlY2xhcmF0aW9ucyA9XG4gICAgICAgIHdvcmtmbG93LndvcmtmbG93c1xuICAgICAgICAgICAgPy5tYXAodyA9PiBjb252ZXJ0V29ya2Zsb3dUb0Z1bmN0aW9uRGVjbGFyYXRpb24odywgZGF0YXNldCwgYnVpbGRlcikpXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgICAgIC5tYXAoeCA9PiB4ISkgPz8gW107XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRzID0gY3JlYXRlQm9keVN0YXRlbWVudHMoXG4gICAgICAgIHdvcmtmbG93IGFzIFBpcGVzY3JpcHRXb3JrZmxvd19XaXRoTm9kZXMsXG4gICAgICAgIGRhdGFzZXQsXG4gICAgICAgIGJ1aWxkZXIsXG4gICAgKTtcblxuICAgIGNvbnN0IHdvcmtmbG93Tm9kZUluc3RhbmNlID0gZGF0YXNldC5hbGxOb2RlSW5zdGFuY2VzLmZpbmQoXG4gICAgICAgIHggPT4geC5ub2RlLndvcmtmbG93VXJpID09PSB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICApO1xuICAgIGNvbnN0IGdldE5hbWVfd29ya2Zsb3dJbnB1dCA9ICh3b3JrZmxvd0lucHV0OiBQaXBlc2NyaXB0V29ya2Zsb3dJbnB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gd29ya2Zsb3dOb2RlSW5zdGFuY2U/LmlucHV0cy5maW5kKHggPT4geC53b3JrZmxvd0lucHV0ID09PSB3b3JrZmxvd0lucHV0KT8ucnVuc1xuICAgICAgICAgICAgPy5uYW1lSW5TY29wZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldE5hbWVfd29ya2Zsb3dPdXRwdXQgPSAod29ya2Zsb3dPdXRwdXQ6IFBpcGVzY3JpcHRXb3JrZmxvd091dHB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gd29ya2Zsb3dOb2RlSW5zdGFuY2U/Lm91dHB1dHMuZmluZCh4ID0+IHgud29ya2Zsb3dPdXRwdXQgPT09IHdvcmtmbG93T3V0cHV0KT8ucnVuc1xuICAgICAgICAgICAgPy5uYW1lSW5TY29wZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50ID0gKCgpID0+IHtcbiAgICAgICAgaWYgKCF3b3JrZmxvdy5vdXRwdXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldHVybkl0ZW1zID0gd29ya2Zsb3cub3V0cHV0cy5tYXAoeCA9PiAoe1xuICAgICAgICAgICAgbmFtZTogYCR7Z2V0TmFtZV93b3JrZmxvd091dHB1dCh4KSA/PyB4Lm5hbWV9YCxcbiAgICAgICAgICAgIHJlbmFtZTogYCR7Z2V0TmFtZV93b3JrZmxvd091dHB1dCh4KSA/PyB4Lm5hbWV9YCxcbiAgICAgICAgICAgIC8vIHJlbmFtZTogYCR7eC5uYW1lfWAsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoU0lNUExJRllfU0lOR0xFX1JFVFVSTiAmJiB3b3JrZmxvdy5vdXRwdXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGByZXR1cm4gJHtyZXR1cm5JdGVtc1swXS5uYW1lfTtgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGByZXR1cm4geyAke3JldHVybkl0ZW1zXG4gICAgICAgICAgICAubWFwKHggPT4gKHgubmFtZSA9PT0geC5yZW5hbWUgPyBgJHt4Lm5hbWV9YCA6IGAke3gucmVuYW1lfTogJHt4Lm5hbWV9YCkpXG4gICAgICAgICAgICAuam9pbihgLCBgKX0gfTtgO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gd29ya2Zsb3cuaW5wdXRzLm1hcCh3b3JrZmxvd0lucHV0ID0+XG4gICAgICAgIGdlbmVyYXRlRGVjbGFyYXRpb24od29ya2Zsb3dJbnB1dCwgZ2V0TmFtZV93b3JrZmxvd0lucHV0KHdvcmtmbG93SW5wdXQpKSxcbiAgICApO1xuICAgIGNvbnN0IHBhcmFtZXRlcnNDb2RlID1cbiAgICAgICAgcGFyYW1ldGVycy5qb2luKGAsIGApLmxlbmd0aCA+IDQwXG4gICAgICAgICAgICA/IGBcXG4ke2luZGVudChgJHtwYXJhbWV0ZXJzLmpvaW4oYCxcXG5gKX0sYCl9XFxuYFxuICAgICAgICAgICAgOiBwYXJhbWV0ZXJzLmpvaW4oYCwgYCk7XG5cbiAgICBjb25zdCBmdW5jdGlvbk5hbWUgPSBnZXRGdW5jdGlvbk5hbWUod29ya2Zsb3cpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgZnVuY3Rpb24gJHtmdW5jdGlvbk5hbWV9KCR7cGFyYW1ldGVyc0NvZGV9KSB7XG4ke2luZGVudChuZXN0ZWRGdW5jdGlvbkRlY2xhcmF0aW9ucy5tYXAoeCA9PiB4LmNvbnRlbnQpLmpvaW4oYFxcblxcbmApKX0ke2luZGVudChcbiAgICAgICAgWy4uLnN0YXRlbWVudHMsIHJldHVyblN0YXRlbWVudF0uZmlsdGVyKHggPT4geCkuam9pbihgXFxuYCksXG4gICAgKX19YDtcblxuICAgIGlmICh3b3JrZmxvdy5ib2R5LmNvbnRyb2wpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRlbnQsXG4gICAgfTtcbn07XG5cbmNvbnN0IGdldEZ1bmN0aW9uTmFtZSA9ICh3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93KSA9PiB7XG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gd29ya2Zsb3cud29ya2Zsb3dVcmkucmVwbGFjZSgvW15BLVphLXowLTldKy9nLCBgX2ApO1xuICAgIHJldHVybiBmdW5jdGlvbk5hbWU7XG59O1xuXG5jb25zdCBnZW5lcmF0ZURlY2xhcmF0aW9uID0gKHg6IFBpcGVzY3JpcHRWYXJpYWJsZSwgbmFtZUluU2NvcGU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBgJHtuYW1lSW5TY29wZSA/PyB4Lm5hbWV9JHt4LnR5cGUubnVsbGFibGUgPyBgP2AgOiBgYH06ICR7Z2VuZXJhdGVUeXBlKHgudHlwZSl9JHtcbiAgICAgICAgeC50eXBlLmFycmF5ID8gYFtdYCA6IGBgXG4gICAgfWA7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVR5cGUgPSAodHlwZTogUGlwZXNjcmlwdFR5cGUpOiBzdHJpbmcgPT4ge1xuICAgIGlmICh0eXBlLmtpbmQgPT09IGBsaXRlcmFsYCkge1xuICAgICAgICBpZiAodHlwZS50eXBlID09PSBgc3RyaW5nYCkge1xuICAgICAgICAgICAgcmV0dXJuIGBcXGAke3R5cGUudmFsdWV9XFxgYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dHlwZS52YWx1ZX1gO1xuICAgIH1cblxuICAgIGlmICh0eXBlLmtpbmQgPT09IGBzaW1wbGVgKSB7XG4gICAgICAgIGlmICh0eXBlLnR5cGUgPT09IGBpbnRgIHx8IHR5cGUudHlwZSA9PT0gYGZsb2F0YCkge1xuICAgICAgICAgICAgcmV0dXJuIGBudW1iZXJgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt0eXBlLnR5cGV9YDtcbiAgICB9XG5cbiAgICBpZiAodHlwZS5raW5kID09PSBgb2JqZWN0YCkge1xuICAgICAgICByZXR1cm4gYHske3R5cGUuZmllbGRzLm1hcCh4ID0+IGdlbmVyYXRlRGVjbGFyYXRpb24oeCkpLmpvaW4oYCxcXG5gKX19YDtcbiAgICB9XG5cbiAgICBpZiAodHlwZS5raW5kID09PSBgdHlwZWApIHtcbiAgICAgICAgcmV0dXJuIHR5cGUubmFtZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZS5raW5kID09PSBgbm9kZWApIHtcbiAgICAgICAgcmV0dXJuIGAvKiBUT0RPOiBmdW5jdGlvbiBjYWxsYmFja3MgKi8gZnVuXyR7dHlwZS5ub2RlLm5vZGVJZH1gO1xuICAgIH1cblxuICAgIHJldHVybiBgdW5rbm93bmA7XG59O1xuZnVuY3Rpb24gY3JlYXRlQm9keVN0YXRlbWVudHMoXG4gICAgd29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvd19XaXRoTm9kZXMsXG4gICAgZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQsXG4gICAgYnVpbGRlcjogQnVpbGRlcixcbiAgICBuYW1lc0luU2NvcGU/OiBzdHJpbmdbXSxcbikge1xuICAgIHJldHVybiB3b3JrZmxvdy5ib2R5Lm5vZGVzLm1hcChub2RlID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZUluc3RhbmNlID0gZGF0YXNldC5hbGxOb2RlSW5zdGFuY2VzLmZpbmQoeCA9PiB4Lm5vZGUgPT09IG5vZGUpO1xuICAgICAgICBjb25zdCB3b3JrZmxvdyA9IG5vZGVJbnN0YW5jZT8ud29ya2Zsb3c7XG4gICAgICAgIGlmICghd29ya2Zsb3cpIHtcbiAgICAgICAgICAgIHJldHVybiBgLyogbWlzc2luZyB3b3JrZmxvdyAke25vZGUud29ya2Zsb3dVcml9ICovYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmdW4gPSBidWlsZGVyLmRlY2xhcmVkV29ya2Zsb3dzLmZpbmQoeCA9PiB4LndvcmtmbG93ID09PSB3b3JrZmxvdyk7XG4gICAgICAgIGlmICghZnVuKSB7XG4gICAgICAgICAgICByZXR1cm4gYC8qIG1pc3Npbmcgd29ya2Zsb3cgZnVuY3Rpb24gJHtub2RlLndvcmtmbG93VXJpfSAqL2A7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXJncyA9IG5vZGVJbnN0YW5jZS5pbnB1dHMubWFwKHggPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0geC5pbmZsb3dQaXBlPy5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgdW5kZWZpbmVkIC8qIGRpc2Nvbm5lY3RlZCAqL2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc291cmNlLmtpbmQgPT09IGBkYXRhYCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UuanNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzb3VyY2Uua2luZCA9PT0gYGlucHV0YCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UuaW5wdXQucnVucz8ubmFtZUluU2NvcGUgPz8gc291cmNlLmlucHV0Lm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc291cmNlLmtpbmQgPT09IGBvdXRwdXRgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5vdXRwdXQucnVucz8ubmFtZUluU2NvcGUgPz8gc291cmNlLm91dHB1dC5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvdXJjZS5raW5kID09PSBgb3BlcmF0b3Itb3V0cHV0YCkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZVxuICAgICAgICAgICAgICAgIHJldHVybiBgdW5kZWZpbmVkIC8qIGFuIG9wZXJhdG9yIGNhbm5vdCBhbiBhcmd1bWVudCBvZiB0aGUgc2FtZSBub2RlICovYDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGB1bmRlZmluZWQgLyogdW5rbm93biBzb3VyY2Uua2luZCAkeyhzb3VyY2UgYXMgeyBraW5kOiBzdHJpbmcgfSkua2luZH0gKi9gO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZnVuQ2FsbCA9IGZ1bi5nZXRDYWxsRXhwcmVzc2lvbihhcmdzKTtcblxuICAgICAgICBpZiAod29ya2Zsb3cuYm9keS5raW5kID09PSBgbm9kZXNgICYmIHdvcmtmbG93LmJvZHkuY29udHJvbCkge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbCA9IHdvcmtmbG93LmJvZHkuY29udHJvbDtcbiAgICAgICAgICAgIGlmIChjb250cm9sID09PSBgaWZgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bkNhbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdXRwdXRzSXRlbXMgPSBub2RlSW5zdGFuY2Uub3V0cHV0cy5tYXAoeCA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5ydW5zPy5uYW1lSW5TY29wZSA/PyB4Lm5hbWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvdXRwdXRzRXhwcmVzc2lvbiA9XG4gICAgICAgICAgICBTSU1QTElGWV9TSU5HTEVfUkVUVVJOICYmIG91dHB1dHNJdGVtcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICAgICA/IGAke291dHB1dHNJdGVtc1swXX1gXG4gICAgICAgICAgICAgICAgOiBvdXRwdXRzSXRlbXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBgeyAke291dHB1dHNJdGVtcy5qb2luKGAsIGApfSB9YFxuICAgICAgICAgICAgICAgIDogYC8qIG1pc3Npbmcgb3V0cHV0IGl0ZW0gKi8gX3Vua25vd25gO1xuXG4gICAgICAgIGlmIChuYW1lc0luU2NvcGU/LnNvbWUoeCA9PiBvdXRwdXRzSXRlbXMuc29tZShvID0+IG8gPT09IHgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGAke291dHB1dHNFeHByZXNzaW9ufSA9ICR7ZnVuQ2FsbH07YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgY29uc3QgJHtvdXRwdXRzRXhwcmVzc2lvbn0gPSAke2Z1bkNhbGx9O2A7XG4gICAgfSk7XG59XG4iLCAiaW1wb3J0IHsgaGFzaENvZGUgfSBmcm9tICcuL2hhc2gnO1xuaW1wb3J0IHtcbiAgICBjb252ZXJ0V29ya2Zsb3dUb0Z1bmN0aW9uRGVjbGFyYXRpb24sXG4gICAgY3JlYXRlX2dldENhbGxFeHByZXNzaW9uLFxufSBmcm9tICcuLi9jb2RlLWdlbmVyYXRpb24vZmlsZSc7XG5pbXBvcnQge1xuICAgIFBpcGVzY3JpcHRCdWlsdGluT3BlcmF0b3IsXG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldCxcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlX09wZXJhdG9yLFxuICAgIFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnB1dEluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyBUT0RPOiBoYW5kbGUgY3ljbGVzXG5cbnR5cGUgUnVuQ29udGV4dCA9IHtcbiAgICB2aXNpdGVkOiBTZXQ8T21pdDxQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2UsIGBvdXRmbG93UGlwZXNgPj47XG4gICAgbGF6eTogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVSdW4gPSAoXG4gICAgZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQsXG4gICAgY29udGV4dDogUnVuQ29udGV4dCA9IHsgdmlzaXRlZDogbmV3IFNldCgpLCBsYXp5OiBmYWxzZSB9LFxuKSA9PiB7XG4gICAgZGF0YXNldC5yb290Tm9kZUluc3RhbmNlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9ub2RlT3V0cHV0KG5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY2FsY3VsYXRlUnVuX25hbWVzKGRhdGFzZXQpO1xuICAgIHJlY29yZFJ1bihkYXRhc2V0KTtcbn07XG5jb25zdCByZWNvcmRSdW4gPSAoZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQpID0+IHtcbiAgICBkYXRhc2V0LmFsbE5vZGVJbnN0YW5jZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgY29uc3QgcnVuVmFsdWUgPSB7XG4gICAgICAgICAgICBpbnB1dHM6IG5vZGUuaW5wdXRzLm1hcCh4ID0+ICh7XG4gICAgICAgICAgICAgICAgbmFtZTogeC5ydW5zPy5uYW1lSW5TY29wZSA/PyB4Lm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHgucnVucz8udmFsdWUsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBpbm5lcjogbm9kZS5jaGlsZHJlbi5mbGF0TWFwKGMgPT5cbiAgICAgICAgICAgICAgICBjLm91dHB1dHMubWFwKHggPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogeC5ydW5zPy5uYW1lSW5TY29wZSA/PyB4Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB4LnJ1bnM/LnZhbHVlLFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBvdXRwdXRzOiBub2RlLm91dHB1dHMubWFwKHggPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiB4LnJ1bnM/Lm5hbWVJblNjb3BlID8/IHgubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogeC5ydW5zPy52YWx1ZSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7aGFzaENvZGUocnVuVmFsdWUpfWA7XG4gICAgICAgIG5vZGUucnVucyA9IG5vZGUucnVucyA/PyBbXTtcbiAgICAgICAgaWYgKG5vZGUucnVucy5zb21lKHggPT4geC5rZXkgPT09IGtleSkpIHtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBvbGQgdG8gbW92ZSBsYXN0IHRvIHRoZSB0b3BcbiAgICAgICAgICAgIG5vZGUucnVucy5zcGxpY2UoXG4gICAgICAgICAgICAgICAgbm9kZS5ydW5zLmZpbmRJbmRleCh4ID0+IHgua2V5ID09PSBrZXkpLFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gZG9uJ3QgYWRkIG5ld1xuICAgICAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29kZSA9XG4gICAgICAgICAgICBub2RlLndvcmtmbG93LmJvZHkua2luZCA9PT0gYG9wZXJhdG9yYFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGAke2NyZWF0ZV9nZXRDYWxsRXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS53b3JrZmxvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kYXRhc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUud29ya2Zsb3cuaW5wdXRzLm1hcCh3b3JrZmxvd0lucHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVJbnB1dCA9IG5vZGUuaW5wdXRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4LndvcmtmbG93SW5wdXQgPT09IHdvcmtmbG93SW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVJhdyA9IG5vZGVJbnB1dD8ucnVucz8udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlUmF3ICE9PSBgb2JqZWN0YCA/IGAke3ZhbHVlUmF3fWAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBub2RlSW5wdXQ/LnJ1bnM/Lm5hbWVJblNjb3BlID8/IHdvcmtmbG93SW5wdXQubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IGAke25hbWV9KCR7dmFsdWV9KWAgOiBuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICApfWAsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBjb252ZXJ0V29ya2Zsb3dUb0Z1bmN0aW9uRGVjbGFyYXRpb24obm9kZS53b3JrZmxvdywgbm9kZS5kYXRhc2V0KTtcbiAgICAgICAgbm9kZS5ydW5zLnVuc2hpZnQoe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgY29kZTogY29kZT8uY29udGVudCxcbiAgICAgICAgICAgIC4uLnJ1blZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVSdW5WYWx1ZV9ub2RlT3V0cHV0ID0gKG5vZGU6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsIGNvbnRleHQ6IFJ1bkNvbnRleHQpID0+IHtcbiAgICAvLyBhbGwgb3V0cHV0cyBtdXN0IGJlIGV2YWx1YXRlZCAoYnV0IG1heSByZXR1cm4gdW5kZWZpbmVkKVxuICAgIG5vZGUub3V0cHV0cy5mb3JFYWNoKG91dHB1dCA9PiB7XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KG91dHB1dCwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWNvbnRleHQubGF6eSkge1xuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9ub2RlT3V0cHV0KHgsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5pbnB1dHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KHgsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlID0gKFxuICAgIGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSxcbiAgICB2YWx1ZTogdW5rbm93bixcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0ID0geyB2aXNpdGVkOiBuZXcgU2V0KCksIGxhenk6IGZhbHNlIH0sXG4pID0+IHtcbiAgICBpZiAoIWNvbm5lY3Rpb24ucnVucykge1xuICAgICAgICBjb25uZWN0aW9uLnJ1bnMgPSBjcmVhdGVSdW4oY29ubmVjdGlvbiwgY29udGV4dCk7XG4gICAgfVxuICAgIGNvbnN0IHsgcnVucyB9ID0gY29ubmVjdGlvbjtcbiAgICBydW5zLm92ZXJyaWRlID0gdmFsdWU7XG5cbiAgICBjb25zb2xlLmxvZyhgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlYCwgeyBjb25uZWN0aW9uIH0pO1xuXG4gICAgY29uc3QgYWxsQ29ubmVjdGlvbnMgPSBjb25uZWN0aW9uLm5vZGVJbnN0YW5jZS5kYXRhc2V0LmFsbE5vZGVJbnN0YW5jZXMuZmxhdE1hcCh4ID0+IFtcbiAgICAgICAgLi4ueC5pbnB1dHMsXG4gICAgICAgIC4uLngub3V0cHV0cyxcbiAgICBdKTtcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0PFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZT4oKTtcbiAgICBjb25zdCB1cGRhdGVEZXBlbmRlbnRzID0gKGM6IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSkgPT4ge1xuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9pbnB1dChjLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBkZXBlbmRlbnRzID0gYWxsQ29ubmVjdGlvbnMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiAhdmlzaXRlZC5oYXMoeCkgJiYgeC5ydW5zPy5kZXBlbmRlbmNpZXMuaW5jbHVkZXMoYyksXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB1cGRhdGVEZXBlbmRlbnRzYCwgeyBjLCBkZXBlbmRlbnRzIH0pO1xuICAgICAgICBkZXBlbmRlbnRzLmZvckVhY2goZCA9PiB2aXNpdGVkLmFkZChkKSk7XG4gICAgICAgIGRlcGVuZGVudHMuZm9yRWFjaChkID0+IHVwZGF0ZURlcGVuZGVudHMoZCkpO1xuICAgIH07XG5cbiAgICB1cGRhdGVEZXBlbmRlbnRzKGNvbm5lY3Rpb24pO1xuICAgIGNhbGN1bGF0ZVJ1bl9uYW1lcyhjb25uZWN0aW9uLm5vZGVJbnN0YW5jZS5kYXRhc2V0KTtcbiAgICByZWNvcmRSdW4oY29ubmVjdGlvbi5ub2RlSW5zdGFuY2UuZGF0YXNldCk7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVSdW5fbmFtZXMgPSAoZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQpID0+IHtcbiAgICBjb25zdCBjb250ZXh0cyA9IG5ldyBNYXA8UGlwZXNjcmlwdE5vZGVJbnN0YW5jZSwgUnVuQ29udGV4dD4oKTtcblxuICAgIGNvbnN0IGdsb2JhbCA9IHsgb3V0cHV0czogW10gfSBhcyB1bmtub3duIGFzIFBpcGVzY3JpcHROb2RlSW5zdGFuY2U7XG5cbiAgICBjb25zdCBhbGxOb2Rlc1NvcnRlZCA9IFtdIGFzIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VbXTtcblxuICAgIGNvbnN0IGFkZE5vZGVSZWN1cnNpdmUgPSAocGFyZW50OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlKSA9PiB7XG4gICAgICAgIGlmIChhbGxOb2Rlc1NvcnRlZC5pbmNsdWRlcyhwYXJlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhbGxOb2Rlc1NvcnRlZC5wdXNoKHBhcmVudCk7XG4gICAgICAgIFsuLi5wYXJlbnQuY2hpbGRyZW5dLnJldmVyc2UoKS5mb3JFYWNoKHggPT4gYWRkTm9kZVJlY3Vyc2l2ZSh4KSk7XG4gICAgICAgIHBhcmVudC5pbnB1dHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGlmICh4LmluZmxvd1BpcGU/LnNvdXJjZS5raW5kID09PSBgaW5wdXRgKSB7XG4gICAgICAgICAgICAgICAgYWRkTm9kZVJlY3Vyc2l2ZSh4LmluZmxvd1BpcGUuc291cmNlLmlucHV0Lm5vZGVJbnN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZGF0YXNldC5yb290Tm9kZUluc3RhbmNlcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBhZGROb2RlUmVjdXJzaXZlKHgpO1xuICAgIH0pO1xuICAgIGRhdGFzZXQuYWxsTm9kZUluc3RhbmNlcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBhZGROb2RlUmVjdXJzaXZlKHgpO1xuICAgIH0pO1xuXG4gICAgYWxsTm9kZXNTb3J0ZWQuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0geC5wYXJlbnQgPz8gZ2xvYmFsO1xuICAgICAgICBjb25zdCBjb250ZXh0ID1cbiAgICAgICAgICAgIGNvbnRleHRzLmdldChwYXJlbnQpXG4gICAgICAgICAgICA/PyBjb250ZXh0c1xuICAgICAgICAgICAgICAgIC5zZXQocGFyZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2l0ZWQ6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgICAgICAgICAgbGF6eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZ2V0KHBhcmVudCkhO1xuICAgICAgICB4Lm91dHB1dHMuZm9yRWFjaChvID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQudmlzaXRlZC5hZGQobyk7XG5cbiAgICAgICAgICAgIGlmICghby5ydW5zKSB7XG4gICAgICAgICAgICAgICAgby5ydW5zID0gY3JlYXRlUnVuKG8sIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby5ydW5zLm5hbWVJblNjb3BlID0gZ2V0VW5pcXVlTmFtZShvLCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBnZXRVbmlxdWVOYW1lID0gKFxuICAgIGNvbm5lY3Rpb246IE9taXQ8UGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLCBgb3V0Zmxvd1BpcGVzYD4sXG4gICAgY29udGV4dDogUnVuQ29udGV4dCxcbikgPT4ge1xuICAgIGxldCBuID0gY29ubmVjdGlvbi5uYW1lO1xuXG4gICAgd2hpbGUgKFsuLi5jb250ZXh0LnZpc2l0ZWRdLnNvbWUoeCA9PiB4ICE9PSBjb25uZWN0aW9uICYmIHgubmFtZSA9PT0gbikpIHtcbiAgICAgICAgbiA9IGAke259XyR7Y29ubmVjdGlvbi5ub2RlSW5zdGFuY2Uua2V5fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG47XG59O1xuXG5jb25zdCBjcmVhdGVSdW4gPSAoXG4gICAgY29ubmVjdGlvbjogT21pdDxQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2UsIGBvdXRmbG93UGlwZXNgPixcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0LFxuKTogUmVxdWlyZWQ8UGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlPltgcnVuc2BdID0+IHtcbiAgICAvLyBjb25zdCBuYW1lSW5TY29wZSA9IGdldFVuaXF1ZU5hbWUoY29ubmVjdGlvbiwgY29udGV4dCk7XG4gICAgY29uc3QgbmFtZUluU2NvcGUgPSBjb25uZWN0aW9uLm5hbWU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZUluU2NvcGUsXG4gICAgICAgIG92ZXJyaWRlOiB1bmRlZmluZWQsXG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgfTtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0ID0gKFxuICAgIGlucHV0OiBPbWl0PFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSwgYG91dGZsb3dQaXBlc2A+LFxuICAgIGNvbnRleHQ6IFJ1bkNvbnRleHQsXG4pID0+IHtcbiAgICBpZiAoY29udGV4dC52aXNpdGVkLmhhcyhpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJ1bnM7XG4gICAgfVxuICAgIGNvbnRleHQudmlzaXRlZC5hZGQoaW5wdXQpO1xuICAgIGlmIChpbnB1dC5ydW5zPy5vdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlucHV0LnJ1bnMudmFsdWUgPSBpbnB1dC5ydW5zLm92ZXJyaWRlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5wdXQucnVucyA9IGNyZWF0ZVJ1bihpbnB1dCwgY29udGV4dCk7XG5cbiAgICBjb25zdCBpbmZsb3dQaXBlID0gaW5wdXQuaW5mbG93UGlwZTtcbiAgICBpZiAoIWluZmxvd1BpcGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHNvdXJjZSB9ID0gaW5mbG93UGlwZTtcbiAgICBpZiAoc291cmNlLmtpbmQgPT09IGBkYXRhYCkge1xuICAgICAgICBpbnB1dC5ydW5zID0ge1xuICAgICAgICAgICAgLi4uaW5wdXQucnVucyxcbiAgICAgICAgICAgIHZhbHVlOiBKU09OLnBhcnNlKHNvdXJjZS5qc29uKSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgaW5wdXRgKSB7XG4gICAgICAgIGlucHV0LnJ1bnMgPSB7XG4gICAgICAgICAgICAuLi5pbnB1dC5ydW5zLFxuICAgICAgICAgICAgdmFsdWU6IHNvdXJjZS5pbnB1dC5ydW5zPy52YWx1ZSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW3NvdXJjZS5pbnB1dF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgb3V0cHV0YCkge1xuICAgICAgICBpbnB1dC5ydW5zID0ge1xuICAgICAgICAgICAgLi4uaW5wdXQucnVucyxcbiAgICAgICAgICAgIHZhbHVlOiBzb3VyY2Uub3V0cHV0LnJ1bnM/LnZhbHVlLFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbc291cmNlLm91dHB1dF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgY29uZGl0aW9uYWwtb3V0cHV0YCkge1xuICAgICAgICBpZiAoIXNvdXJjZS5jb25kaXRpb24ucnVucz8udmFsdWUpIHtcbiAgICAgICAgICAgIGlucHV0LnJ1bnMgPSB7XG4gICAgICAgICAgICAgICAgLi4uaW5wdXQucnVucyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc291cmNlLmRlZmF1bHQucnVucz8udmFsdWUsXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbc291cmNlLmNvbmRpdGlvbiwgc291cmNlLmRlZmF1bHRdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LnJ1bnMgPSB7XG4gICAgICAgICAgICAuLi5pbnB1dC5ydW5zLFxuICAgICAgICAgICAgdmFsdWU6IHNvdXJjZS5vdXRwdXQucnVucz8udmFsdWUsXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFtzb3VyY2UuY29uZGl0aW9uLCBzb3VyY2Uub3V0cHV0XSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmtpbmQgPT09IGBvcGVyYXRvci1vdXRwdXRgKSB7XG4gICAgICAgIGlucHV0LnJ1bnMgPSB7XG4gICAgICAgICAgICAuLi5pbnB1dC5ydW5zLFxuICAgICAgICAgICAgLi4uY2FsY3VsYXRlUnVuVmFsdWVfb3BlcmF0b3Ioc291cmNlLm5vZGVJbnN0YW5jZSwgY29udGV4dCksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgY29uc3QgX25ldmVyOiBuZXZlciA9IHVuZGVmaW5lZCBhcyB0eXBlb2Ygc291cmNlIGFzIG5ldmVyO1xufTtcblxuY29uc3QgY2FsY3VsYXRlUnVuVmFsdWVfb3BlcmF0b3IgPSAoXG4gICAgbm9kZUluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlX09wZXJhdG9yLFxuICAgIGNvbnRleHQ6IFJ1bkNvbnRleHQsXG4pID0+IHtcbiAgICBjb25zdCBjYWxjdWxhdGVBcmdzX2luZGV4ID0gKFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICk6IHtcbiAgICAgICAgdmFsdWU6IG51bWJlcjtcbiAgICAgICAgZGVwZW5kZW5jaWVzOiBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2VbXTtcbiAgICB9ID0+IHtcbiAgICAgICAgY29uc3QgeCA9IG5vZGVJbnN0YW5jZS5pbnB1dHNbaW5kZXhdO1xuICAgICAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQgYXMgdW5rbm93biBhcyBudW1iZXIsXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbeCBhcyBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5wdXRJbnN0YW5jZV0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KHgsIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHgucnVucz8udmFsdWUgYXMgbnVtYmVyLFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbeCBhcyBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5wdXRJbnN0YW5jZV0sXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZXJhdG9yOiBQaXBlc2NyaXB0QnVpbHRpbk9wZXJhdG9yID0gbm9kZUluc3RhbmNlLm9wZXJhdG9yO1xuXG4gICAgLy8gbGF6eVxuICAgIGNvbnN0IGFSZXN1bHQgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDApO1xuICAgIGNvbnN0IGEgPSBhUmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IFsuLi5hUmVzdWx0LmRlcGVuZGVuY2llc107XG5cbiAgICBpZiAob3BlcmF0b3IgPT09IGAmJmApIHtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdj8udmFsdWUsXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbLi4uZGVwZW5kZW5jaWVzLCAuLi52LmRlcGVuZGVuY2llc10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhUmVzdWx0O1xuICAgIH1cbiAgICBpZiAob3BlcmF0b3IgPT09IGB8fGApIHtcbiAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gY2FsY3VsYXRlQXJnc19pbmRleCgxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHY/LnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llczogWy4uLmRlcGVuZGVuY2llcywgLi4udi5kZXBlbmRlbmNpZXNdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYVJlc3VsdDtcbiAgICB9XG4gICAgaWYgKG9wZXJhdG9yID09PSBgY29uZGl0aW9uYWwtdGVybmFyeWApIHtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdj8udmFsdWUsXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbLi4uZGVwZW5kZW5jaWVzLCAuLi52LmRlcGVuZGVuY2llc10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHYgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHY/LnZhbHVlLFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbLi4uZGVwZW5kZW5jaWVzLCAuLi52LmRlcGVuZGVuY2llc10sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gdW5hcnlcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgYD1gOlxuICAgICAgICAgICAgcmV0dXJuIGFSZXN1bHQ7XG4gICAgICAgIGNhc2UgYGRlY2xhcmF0aW9uYDpcbiAgICAgICAgICAgIHJldHVybiBhUmVzdWx0O1xuICAgICAgICBjYXNlIGAhYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6ICFhIH07XG4gICAgICAgIGNhc2UgYCsrYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgKyAxIH07XG4gICAgICAgIGNhc2UgYC0tYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgLSAxIH07XG4gICAgfVxuXG4gICAgLy8gYmluYXJ5XG4gICAgY29uc3QgYlJlc3VsdCA9IGNhbGN1bGF0ZUFyZ3NfaW5kZXgoMSk7XG4gICAgY29uc3QgYiA9IGJSZXN1bHQudmFsdWU7XG4gICAgZGVwZW5kZW5jaWVzLnB1c2goLi4uYlJlc3VsdC5kZXBlbmRlbmNpZXMpO1xuXG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIGArYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgKyBiIH07XG4gICAgICAgIGNhc2UgYC1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAtIGIgfTtcbiAgICAgICAgY2FzZSBgKmA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICogYiB9O1xuICAgICAgICBjYXNlIGAvYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgLyBiIH07XG4gICAgICAgIGNhc2UgYCVgOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAlIGIgfTtcbiAgICAgICAgY2FzZSBgPGA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIDwgYiB9O1xuICAgICAgICBjYXNlIGA+YDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgPiBiIH07XG4gICAgICAgIGNhc2UgYDw9YDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgPD0gYiB9O1xuICAgICAgICBjYXNlIGA+PWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhID49IGIgfTtcbiAgICAgICAgY2FzZSBgPT1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSA9PT0gYiB9O1xuICAgICAgICBjYXNlIGAhPWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICE9PSBiIH07XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgIGNvbnN0IF9uZXZlcjogbmV2ZXIgPSB1bmRlZmluZWQgYXMgdHlwZW9mIG9wZXJhdG9yIGFzIG5ldmVyO1xuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IE1vdXNlQnV0dG9uLCBNb3ZlYWJsZVZpZXcgfSBmcm9tICcuL21vdmVhYmxlLXZpZXcnO1xuaW1wb3J0IHtcbiAgICBQaXBlRW5kcG9pbnRWaWV3LFxuICAgIFBpcGVWaWV3LFxuICAgIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSxcbiAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2UsXG4gICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyxcbn0gZnJvbSAnLi9waXBlcyc7XG5pbXBvcnQgeyBXb3JrZmxvd0lucHV0TmFtZSwgZ2V0VHlwZU5hbWUgfSBmcm9tICcuL3dvcmstbmFtZXMnO1xuaW1wb3J0IHsgUGlwZXNjcmlwdE5vZGUsIFBpcGVzY3JpcHRXb3JrZmxvdyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IFdvcmtGbG93VmlldyA9ICh7XG4gICAgd29ya2Zsb3csXG4gICAgZnVsbCA9IGZhbHNlLFxuICAgIGhpZGVUaXRsZXMgPSBmYWxzZSxcbn06IHtcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xuICAgIGZ1bGw/OiBib29sZWFuO1xuICAgIGhpZGVUaXRsZXM/OiBib29sZWFuO1xufSkgPT4ge1xuICAgIC8vICR7ZnVsbCA/IGBtaW4tdy1bMjB2d10gbWluLWgtWzIwdmhdYCA6IGBtaW4tdy1bMjBweF0gbWluLWgtWzEwcHhdYH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC1jb2x1bW4gcmVsYXRpdmUgYmctc2xhdGUtOTUwLzc1IGJvcmRlci1ibHVlLTEwMCBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIG0tWy0xcHhdIHJvdW5kZWRcbiAgICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHshaGlkZVRpdGxlcyAmJiAoXG4gICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPntgJHt3b3JrZmxvdy5uYW1lfWB9PC9UZXh0PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBmbGV4LTEnPlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCc+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5pbnB1dHMubWFwKGlucHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xIGZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtmbG93SW5wdXROYW1lIGlucHV0PXtpbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93VXJpOiB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpbnB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC0xJz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBhbmltYXRlLWJvdW5jZSB0ZXh0LVs4cHhdIGFic29sdXRlIHRvcC0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHUyNkNGXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmJvZHkubm9kZXM/Lm1hcChuID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17bi5ub2RlSWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlVmlldyBub2RlPXtufSBjb250YWluZXI9e3dvcmtmbG93fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTIgZmxleC1yb3cgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ibHVlLTQwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5ib2R5Lm9wZXJhdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYG9wZXJhdG9yYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLm1hcChvcGVyYXRvckVuZHBvaW50SWQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3BlcmF0b3JFbmRwb2ludElkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50VmlldyBpZD17b3BlcmF0b3JFbmRwb2ludElkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5pbnB1dHMubWFwKGluUGlwZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luUGlwZS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uSWQ9e29wZXJhdG9yRW5kcG9pbnRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpblBpcGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5vdXRwdXRzLm1hcChvdXRwdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0cHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xIGZsZXgtcm93IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZS5raW5kID09PSBgZGF0YWAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtcHVycGxlLTQwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3V0cHV0LnBpcGUuanNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvdXRwdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JQaXBlU291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXBlOiBvdXRwdXQucGlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pPy5tYXAoc291cmNlSWQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbklkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93VXJpOiB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvdXRwdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkPXtzb3VyY2VJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtYmx1ZS0zMDAnPntgJHtvdXRwdXQubmFtZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDwvVmlldz5cblxuICAgICAgICAgICAgeyFoaWRlVGl0bGVzICYmIChcbiAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e2Ake3dvcmtmbG93LndvcmtmbG93VXJpfWB9PC9UZXh0PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIHt3b3JrZmxvdy53b3JrZmxvd3M/Lm1hcCh3ID0+IChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt3Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIGxlZnQtMCB0b3AtMCBzY2FsZS01MCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V29ya0Zsb3dWaWV3IHdvcmtmbG93PXt3fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkpfSAqL31cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBOb2RlVmlldyA9ICh7IG5vZGUsIGNvbnRhaW5lciB9OiB7IG5vZGU6IFBpcGVzY3JpcHROb2RlOyBjb250YWluZXI6IFBpcGVzY3JpcHRXb3JrZmxvdyB9KSA9PiB7XG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHg6IG5vZGUubGF5b3V0Py5wb3NpdGlvbi54ID8/IDAsXG4gICAgICAgIHk6IG5vZGUubGF5b3V0Py5wb3NpdGlvbi55ID8/IDAsXG4gICAgICAgIHNjYWxlOiBub2RlLmxheW91dD8uc2NhbGUgPz8gMSxcbiAgICB9KTtcbiAgICBjb25zdCBtb3ZlTm9kZSA9IHVzZVN0YWJsZUNhbGxiYWNrKCh2YWx1ZTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlciB9KSA9PiB7XG4gICAgICAgIHNldFBvc2l0aW9uKHZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5vZGVWaWV3YCwgeyBub2RlLCBjb250YWluZXIgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB3b3JrZmxvdyA9ICgoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXIud29ya2Zsb3dzPy5maW5kKHcgPT4gdy53b3JrZmxvd1VyaSA9PT0gbm9kZS53b3JrZmxvd1VyaSk7XG4gICAgfSkoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TW92ZWFibGVWaWV3XG4gICAgICAgICAgICBwb3NpdGlvbj17e1xuICAgICAgICAgICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBzY2FsZTogcG9zaXRpb24uc2NhbGUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3ZlPXttb3ZlTm9kZX1cbiAgICAgICAgICAgIG1vdXNlQnV0dG9uPXtNb3VzZUJ1dHRvbi5MZWZ0fVxuICAgICAgICA+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleC1jb2x1bW4gYmctemluYy05NTAvNzUgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gbS1bLTFweF0gcm91bmRlZCdcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weClgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e3dvcmtmbG93Lm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTIgdGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz4je25vZGUubm9kZUlkfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAge3dvcmtmbG93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpbnB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQaXBlID0gbm9kZS5pbnB1dFBpcGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0+IHAubmFtZSA9PT0gaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dFBpcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRQaXBlLmtpbmQgPT09IGBkYXRhYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nbWwtWy0xNnB4XSBtci1bMTZweF0gdGV4dC1wdXJwbGUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dFBpcGUuanNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbWwtWy04cHhdIG1yLVswcHhdJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbm9kZS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yUGlwZVNvdXJjZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvdzogY29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlwZTogbm9kZS5pbnB1dFBpcGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4Lm5hbWUgPT09IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KT8ubWFwKHNvdXJjZUlkID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c291cmNlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25JZD17Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgaW5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpbnB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkPXtzb3VyY2VJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtmbG93SW5wdXROYW1lIGlucHV0PXtpbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3dvcmtmbG93fSBoaWRlVGl0bGVzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93Lm91dHB1dHMubWFwKG91dHB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dHB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xIGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtMzAwJz57YCR7b3V0cHV0Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+OjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BsLTEgdGV4dC1ncmVlbi04MDAnPntgJHtnZXRUeXBlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbWwtWzBweF0gbXItWy04cHhdJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogbm9kZS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvdXRwdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgey8qIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57bm9kZS5pbXBsZW1lbnRhdGlvbi59PC9UZXh0PiAqL31cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9Nb3ZlYWJsZVZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHsgY2FsY3VsYXRlUnVuIH0gZnJvbSAnLi9jYWxjdWxhdGUtcnVuJztcbmltcG9ydCB7XG4gICAgUGlwZXNjcmlwdE5vZGUsXG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldCxcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlX09wZXJhdG9yLFxuICAgIFBpcGVzY3JpcHRQaXBlVmFsdWUsXG4gICAgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHRXb3JrZmxvdyxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgbG9hZFJ1bnRpbWUgPSAoXG4gICAgd29ya2Zsb3dSYXc6IFBpcGVzY3JpcHRXb3JrZmxvdyxcbik6IHtcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xuICAgIGNvbnRleHQ6IFBpcGVzY3JpcHRSdW50aW1lQ29udGV4dDtcbiAgICBkYXRhc2V0OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldDtcbn0gPT4ge1xuICAgIGNvbnN0IHdvcmtmbG93ID0gd29ya2Zsb3dSYXcgYXMgUGlwZXNjcmlwdFdvcmtmbG93O1xuICAgIC8vIHdvcmtmbG93LnRyZWUgPSB7XG4gICAgLy8gICAgIGNvbnRhaW5lcjogdW5kZWZpbmVkLFxuICAgIC8vICAgICB1c2FnZXM6IFtdLFxuICAgIC8vIH07XG5cbiAgICBjb25zdCBnZXRXb3JrZmxvd3NSZWN1cnNpdmUgPSAodzogUGlwZXNjcmlwdFdvcmtmbG93KTogUGlwZXNjcmlwdFdvcmtmbG93W10gPT4ge1xuICAgICAgICByZXR1cm4gW3csIC4uLih3LndvcmtmbG93cz8uZmxhdE1hcCh3MiA9PiBnZXRXb3JrZmxvd3NSZWN1cnNpdmUodzIpKSA/PyBbXSldO1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxXb3JrZmxvd3MgPSBnZXRXb3JrZmxvd3NSZWN1cnNpdmUod29ya2Zsb3cpO1xuICAgIGNvbnN0IGFsbE5vZGVzID0gYWxsV29ya2Zsb3dzLmZsYXRNYXAodyA9PiAody5ib2R5LmtpbmQgPT09IGBub2Rlc2AgPyB3LmJvZHkubm9kZXMgOiBbXSkpO1xuICAgIGNvbnN0IGFsbFBpcGVzX3dvcmtmbG93T3V0cHV0cyA9IGFsbFdvcmtmbG93c1xuICAgICAgICAuZmxhdE1hcCh3ID0+IHcub3V0cHV0cy5mbGF0TWFwKG8gPT4gby5waXBlKSlcbiAgICAgICAgLmZpbHRlcih4ID0+IHgpXG4gICAgICAgIC5tYXAoeCA9PiB4ISk7XG4gICAgY29uc3QgYWxsUGlwZXNfbm9kZUlucHV0cyA9IGFsbE5vZGVzXG4gICAgICAgIC5mbGF0TWFwKG4gPT4gbi5pbnB1dFBpcGVzKVxuICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgLm1hcCh4ID0+IHghKTtcbiAgICBjb25zdCBhbGxQaXBlcyA9IFsuLi5hbGxQaXBlc193b3JrZmxvd091dHB1dHMsIC4uLmFsbFBpcGVzX25vZGVJbnB1dHNdO1xuXG4gICAgY29uc3QgZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQgPSB7XG4gICAgICAgIGFsbE5vZGVJbnN0YW5jZXM6IFtdLFxuICAgICAgICByb290Tm9kZUluc3RhbmNlczogW10sXG4gICAgfTtcbiAgICBjb25zdCBjb250ZXh0OiBQaXBlc2NyaXB0UnVudGltZUNvbnRleHQgPSB7XG4gICAgICAgIGFsbFdvcmtmbG93cyxcbiAgICAgICAgYWxsV29ya2Zsb3dzTWFwOiBuZXcgTWFwKGFsbFdvcmtmbG93cy5tYXAoeCA9PiBbeC53b3JrZmxvd1VyaSwgeF0pKSxcbiAgICAgICAgYWxsTm9kZXMsXG4gICAgICAgIGFsbE5vZGVzTWFwOiBuZXcgTWFwKGFsbE5vZGVzLm1hcCh4ID0+IFt4Lm5vZGVJZCwgeF0pKSxcbiAgICAgICAgYWxsUGlwZXMsXG4gICAgICAgIGRhdGFzZXQsXG4gICAgICAgIGFsbE5vZGVJbnN0YW5jZXM6IGRhdGFzZXQuYWxsTm9kZUluc3RhbmNlcyxcbiAgICAgICAgcm9vdE5vZGVJbnN0YW5jZXM6IGRhdGFzZXQucm9vdE5vZGVJbnN0YW5jZXMsXG4gICAgfTtcblxuICAgIGNvbnRleHQucm9vdE5vZGVJbnN0YW5jZXMucHVzaChcbiAgICAgICAgLi4uKHdvcmtmbG93LmJvZHkubm9kZXM/Lm1hcChub2RlID0+IGNyZWF0ZU5vZGVJbnN0YW5jZXMobm9kZSwgdW5kZWZpbmVkLCBjb250ZXh0KSkgPz8gW10pLFxuICAgICk7XG5cbiAgICBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbG9hZE5vZGVDb25uZWN0aW9uc19pbmZsb3dzKG5vZGUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsSW5mbG93UGlwZXMgPSBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXNcbiAgICAgICAgLmZsYXRNYXAoeCA9PiBbLi4ueC5pbnB1dHMubWFwKHkgPT4geS5pbmZsb3dQaXBlKSwgLi4ueC5vdXRwdXRzLm1hcCh5ID0+IHkuaW5mbG93UGlwZSldKVxuICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgLm1hcCh4ID0+IHghKTtcbiAgICBjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbG9hZE5vZGVDb25uZWN0aW9uc19vdXRmbG93cyhub2RlLCBhbGxJbmZsb3dQaXBlcyk7XG4gICAgfSk7XG5cbiAgICBjYWxjdWxhdGVSdW4oZGF0YXNldCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3b3JrZmxvdyxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgZGF0YXNldCxcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUGlwZXNjcmlwdFJ1bnRpbWVDb250ZXh0ID0ge1xuICAgIGFsbFdvcmtmbG93czogUGlwZXNjcmlwdFdvcmtmbG93W107XG4gICAgYWxsV29ya2Zsb3dzTWFwOiBNYXA8c3RyaW5nLCBQaXBlc2NyaXB0V29ya2Zsb3c+O1xuICAgIGFsbE5vZGVzOiBQaXBlc2NyaXB0Tm9kZVtdO1xuICAgIGFsbE5vZGVzTWFwOiBNYXA8c3RyaW5nLCBQaXBlc2NyaXB0Tm9kZT47XG4gICAgYWxsUGlwZXM6IFBpcGVzY3JpcHRQaXBlVmFsdWVbXTtcblxuICAgIC8vIGNyZWF0ZWQgZHVyaW5nIGNyZWF0ZU5vZGVJbnN0YW5jZXNcbiAgICBkYXRhc2V0OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldDtcbiAgICBhbGxOb2RlSW5zdGFuY2VzOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlW107XG4gICAgcm9vdE5vZGVJbnN0YW5jZXM6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VbXTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5vZGVJbnN0YW5jZXMgPSAoXG4gICAgbm9kZTogUGlwZXNjcmlwdE5vZGUsXG4gICAgcGFyZW50OiB1bmRlZmluZWQgfCBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIGNvbnRleHQ6IFBpcGVzY3JpcHRSdW50aW1lQ29udGV4dCxcbik6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UgPT4ge1xuICAgIGNvbnN0IHdvcmtmbG93ID0gY29udGV4dC5hbGxXb3JrZmxvd3NNYXAuZ2V0KG5vZGUud29ya2Zsb3dVcmkpO1xuICAgIGlmICghd29ya2Zsb3cpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYG1pc3Npbmcgd29ya2Zsb3cgJHtub2RlLndvcmtmbG93VXJpfWApO1xuICAgIH1cbiAgICAvLyBub2RlLnRyZWUgPSB7XG4gICAgLy8gICAgIHdvcmtmbG93LFxuICAgIC8vIH07XG5cbiAgICBjb25zdCBpbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSA9IHtcbiAgICAgICAgZGF0YXNldDogY29udGV4dC5kYXRhc2V0LFxuICAgICAgICBrZXk6IGAke2NvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5sZW5ndGh9YCxcbiAgICAgICAgbm9kZSxcbiAgICAgICAgd29ya2Zsb3csXG4gICAgICAgIGlucHV0czogW10sXG4gICAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuICAgIGNvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcblxuICAgIC8vIENyZWF0ZSBjb25uZWN0aW9ucyAod2l0aG91dCBwaXBlcylcbiAgICBpbnN0YW5jZS5pbnB1dHMgPSB3b3JrZmxvdy5pbnB1dHMubWFwKHdvcmtmbG93SW5wdXQgPT4gKHtcbiAgICAgICAga2V5OiBgJHtjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMubGVuZ3RofToke3dvcmtmbG93SW5wdXQubmFtZX06d29ya2Zsb3dJbnB1dGAsXG4gICAgICAgIG5vZGVJbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgIGtpbmQ6IGB3b3JrZmxvdy1pbnB1dGAsXG4gICAgICAgIHdvcmtmbG93SW5wdXQsXG4gICAgICAgIG5hbWU6IHdvcmtmbG93SW5wdXQubmFtZSxcbiAgICAgICAgaW5mbG93UGlwZTogdW5kZWZpbmVkLFxuICAgICAgICBvdXRmbG93UGlwZXM6IFtdLFxuICAgIH0pKTtcbiAgICBpbnN0YW5jZS5vdXRwdXRzID0gd29ya2Zsb3cub3V0cHV0cy5tYXAod29ya2Zsb3dPdXRwdXQgPT4gKHtcbiAgICAgICAga2V5OiBgJHtjb250ZXh0LmFsbE5vZGVJbnN0YW5jZXMubGVuZ3RofToke3dvcmtmbG93T3V0cHV0Lm5hbWV9OndvcmtmbG93T3V0cHV0YCxcbiAgICAgICAgbm9kZUluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAga2luZDogYHdvcmtmbG93LW91dHB1dGAsXG4gICAgICAgIHdvcmtmbG93T3V0cHV0LFxuICAgICAgICBuYW1lOiB3b3JrZmxvd091dHB1dC5uYW1lLFxuICAgICAgICBpbmZsb3dQaXBlOiB1bmRlZmluZWQsXG4gICAgICAgIG91dGZsb3dQaXBlczogW10sXG4gICAgfSkpO1xuXG4gICAgLy8gVE9ETzogaGFuZGxlIHJlY3Vyc2l2ZS9jeWNsaWNhbCB3b3JrZmxvd3NcbiAgICBpbnN0YW5jZS5jaGlsZHJlbiA9XG4gICAgICAgIHdvcmtmbG93LmJvZHkubm9kZXM/Lm1hcChuID0+IGNyZWF0ZU5vZGVJbnN0YW5jZXMobiwgaW5zdGFuY2UsIGNvbnRleHQpKSA/PyBbXTtcblxuICAgIGlmICh3b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmApIHtcbiAgICAgICAgaW5zdGFuY2Uub3BlcmF0b3IgPSB3b3JrZmxvdy5ib2R5Lm9wZXJhdG9yO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn07XG5cbmNvbnN0IGxvYWROb2RlQ29ubmVjdGlvbnNfaW5mbG93cyA9IChub2RlSW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UpID0+IHtcbiAgICAvLyBjb25uZWN0IGluZmxvd3NcbiAgICBub2RlSW5zdGFuY2UuaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBjb25zdCBub2RlSW5wdXQgPSBub2RlSW5zdGFuY2Uubm9kZS5pbnB1dFBpcGVzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGlucHV0Lm5hbWUpO1xuICAgICAgICBpZiAoIW5vZGVJbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0SW5mbG93U291cmNlID0gKCk6IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF0gPT4ge1xuICAgICAgICAgICAgY29uc3QgcGlwZVNvdXJjZSA9IG5vZGVJbnB1dDtcbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGBkYXRhYCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBkYXRhYCxcbiAgICAgICAgICAgICAgICAgICAganNvbjogcGlwZVNvdXJjZS5qc29uLFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgd29ya2Zsb3ctb3BlcmF0b3JgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYG9wZXJhdG9yLW91dHB1dGAsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJbnN0YW5jZTogbm9kZUluc3RhbmNlIGFzIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VfT3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGB3b3JrZmxvdy1pbnB1dGApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlV29ya2Zsb3dJbnB1dCA9IG5vZGVJbnN0YW5jZS5wYXJlbnQ/LmlucHV0cy5maW5kKFxuICAgICAgICAgICAgICAgICAgICB4ID0+IHgubmFtZSA9PT0gcGlwZVNvdXJjZS53b3JrZmxvd0lucHV0TmFtZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZVdvcmtmbG93SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IGdldEluZmxvd1NvdXJjZTogTWlzc2luZyBub2RlV29ya2Zsb3dJbnB1dCAke3BpcGVTb3VyY2UubmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgaW5wdXRgLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dDogbm9kZVdvcmtmbG93SW5wdXQsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGBub2RlYCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlZXJOb2RlT3V0cHV0ID0gbm9kZUluc3RhbmNlLnBhcmVudD8uY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgLmZpbmQobjIgPT4gbjIubm9kZS5ub2RlSWQgPT09IHBpcGVTb3VyY2Uuc291cmNlTm9kZUlkKVxuICAgICAgICAgICAgICAgICAgICA/Lm91dHB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gcGlwZVNvdXJjZS5zb3VyY2VOb2RlT3V0cHV0TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwZWVyTm9kZU91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogZ2V0SW5mbG93U291cmNlOiBNaXNzaW5nIHBlZXJOb2RlT3V0cHV0ICR7cGlwZVNvdXJjZS5uYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlwZVNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbk91dHB1dHM6IG5vZGVJbnN0YW5jZS5jaGlsZHJlbi5tYXAoeCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Lm91dHB1dHMubWFwKG8gPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogby5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IG8ubm9kZUluc3RhbmNlLm5vZGUubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYG91dHB1dGAsXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dDogcGVlck5vZGVPdXRwdXQsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogdW5rbm93biBwaXBlU291cmNlICR7KHBpcGVTb3VyY2UgYXMgeyBraW5kOiBzdHJpbmcgfSkua2luZH1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc291cmNlID0gZ2V0SW5mbG93U291cmNlKCk7XG4gICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dC5pbmZsb3dQaXBlID0ge1xuICAgICAgICAgICAga2V5OiBgJHtpbnB1dC5rZXl9OnBpcGVgLFxuICAgICAgICAgICAgcGlwZTogbm9kZUlucHV0LFxuICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgZGVzdGluYXRpb246IHtcbiAgICAgICAgICAgICAgICBraW5kOiBgaW5wdXRgLFxuICAgICAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIG5vZGVJbnN0YW5jZS5vdXRwdXRzLmZvckVhY2gob3V0cHV0ID0+IHtcbiAgICAgICAgY29uc3Qgd29ya2Zsb3dPdXRwdXQgPSBub2RlSW5zdGFuY2Uud29ya2Zsb3cub3V0cHV0cy5maW5kKHggPT4geC5uYW1lID09PSBvdXRwdXQubmFtZSk7XG4gICAgICAgIGNvbnN0IHdvcmtmbG93T3V0cHV0UGlwZSA9IHdvcmtmbG93T3V0cHV0Py5waXBlO1xuICAgICAgICBpZiAoIXdvcmtmbG93T3V0cHV0UGlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0SW5mbG93U291cmNlID0gKCk6IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF0gPT4ge1xuICAgICAgICAgICAgY29uc3QgcGlwZVNvdXJjZSA9IHdvcmtmbG93T3V0cHV0UGlwZTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZTogcGlwZVNvdXJjZU5hbWUgfSA9IHdvcmtmbG93T3V0cHV0O1xuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYGRhdGFgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYGRhdGFgLFxuICAgICAgICAgICAgICAgICAgICBqc29uOiBwaXBlU291cmNlLmpzb24sXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGB3b3JrZmxvdy1vcGVyYXRvcmApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgb3BlcmF0b3Itb3V0cHV0YCxcbiAgICAgICAgICAgICAgICAgICAgbm9kZUluc3RhbmNlOiBub2RlSW5zdGFuY2UgYXMgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYHdvcmtmbG93LWlucHV0YCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVXb3JrZmxvd0lucHV0ID0gbm9kZUluc3RhbmNlLmlucHV0cy5maW5kKHggPT4geC5uYW1lID09PSBwaXBlU291cmNlTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlV29ya2Zsb3dJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogZ2V0SW5mbG93U291cmNlOiBNaXNzaW5nIG5vZGVXb3JrZmxvd0lucHV0ICR7cGlwZVNvdXJjZU5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYGlucHV0YCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5vZGVXb3JrZmxvd0lucHV0LFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgbm9kZWApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lck5vZGVPdXRwdXQgPSBub2RlSW5zdGFuY2UuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgLmZpbmQobjIgPT4gbjIubm9kZS5ub2RlSWQgPT09IHBpcGVTb3VyY2Uuc291cmNlTm9kZUlkKVxuICAgICAgICAgICAgICAgICAgICA/Lm91dHB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gcGlwZVNvdXJjZU5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghaW5uZXJOb2RlT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiBnZXRJbmZsb3dTb3VyY2U6IE1pc3NpbmcgcGVlck5vZGVPdXRwdXQgJHtwaXBlU291cmNlTmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbm9kZUluc3RhbmNlLndvcmtmbG93LmJvZHkua2luZCA9PT0gYG5vZGVzYFxuICAgICAgICAgICAgICAgICAgICAmJiBub2RlSW5zdGFuY2Uud29ya2Zsb3cuYm9keS5jb250cm9sID09PSBgaWZgXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBraW5kOiBgY29uZGl0aW9uYWwtb3V0cHV0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dDogaW5uZXJOb2RlT3V0cHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBub2RlSW5zdGFuY2UuaW5wdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGBjb25kaXRpb25gKSEsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBub2RlSW5zdGFuY2UuaW5wdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHBpcGVTb3VyY2VOYW1lKSEsXG4gICAgICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYG91dHB1dGAsXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dDogaW5uZXJOb2RlT3V0cHV0LFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYGxvYWROb2RlQ29ubmVjdGlvbnM6IHVua25vd24gcGlwZVNvdXJjZSAkeyhwaXBlU291cmNlIGFzIHsga2luZDogc3RyaW5nIH0pLmtpbmR9YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGdldEluZmxvd1NvdXJjZSgpO1xuICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0cHV0LmluZmxvd1BpcGUgPSB7XG4gICAgICAgICAgICBrZXk6IGAke291dHB1dC5rZXl9OnBpcGVgLFxuICAgICAgICAgICAgcGlwZTogd29ya2Zsb3dPdXRwdXRQaXBlLFxuICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgZGVzdGluYXRpb246IHtcbiAgICAgICAgICAgICAgICBraW5kOiBgb3V0cHV0YCxcbiAgICAgICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuY29uc3QgbG9hZE5vZGVDb25uZWN0aW9uc19vdXRmbG93cyA9IChcbiAgICBub2RlSW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsXG4gICAgYWxsSW5mbG93UGlwZXM6IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtdLFxuKSA9PiB7XG4gICAgbm9kZUluc3RhbmNlLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQub3V0Zmxvd1BpcGVzID0gYWxsSW5mbG93UGlwZXMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4LnNvdXJjZS5raW5kID09PSBgaW5wdXRgICYmIHguc291cmNlLmlucHV0ID09PSBpbnB1dCxcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgICBub2RlSW5zdGFuY2Uub3V0cHV0cy5mb3JFYWNoKG91dHB1dCA9PiB7XG4gICAgICAgIG91dHB1dC5vdXRmbG93UGlwZXMgPSBhbGxJbmZsb3dQaXBlcy5maWx0ZXIoXG4gICAgICAgICAgICB4ID0+IHguc291cmNlLmtpbmQgPT09IGBvdXRwdXRgICYmIHguc291cmNlLm91dHB1dCA9PT0gb3V0cHV0LFxuICAgICAgICApO1xuICAgIH0pO1xufTtcbiIsICIvLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwMS1kZWNsYXJhdGlvbnMvMDIudHMud29ya2Zsb3cuanNvbic7XG4vLyBpbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwMi1hc3NpZ25tZW50cy8wMS50cy53b3JrZmxvdy5qc29uJztcbi8vIGltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDAzLW9wZXJhdG9ycy8wNC50cy53b3JrZmxvdy5qc29uJztcbi8vIGltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDA0LW11dGF0aW9uLzAxLnRzLndvcmtmbG93Lmpzb24nO1xuaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDUtbG9naWMvMDMudHMud29ya2Zsb3cuanNvbic7XG5pbXBvcnQgeyBQaXBlc2NyaXB0V29ya2Zsb3cgfSBmcm9tICcuL3NyYy90eXBlcyc7XG5leHBvcnQgeyBXb3JrQ2FudmFzVmlldyB9IGZyb20gJy4vc3JjL3VpL3dvcmstY2FudmFzLXZpZXcnO1xuZXhwb3J0IGNvbnN0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93ID0gZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGFzIFBpcGVzY3JpcHRXb3JrZmxvdztcbiIsICJpbXBvcnQgeyBXb3JrQ2FudmFzVmlldywgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3cgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL3BpcGVzY3JpcHQnO1xuXG5leHBvcnQgY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IHdvcmtmbG93ID0gZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3c7XG4gICAgcmV0dXJuIDxXb3JrQ2FudmFzVmlldyB3b3JrZmxvdz17d29ya2Zsb3d9IC8+O1xufTtcbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gYmFja2dyb3VuZENvbG9yIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIGFuaW1hdGVkIGB0cnVlYCB0byBhbmltYXRlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGNoYW5nZSwgYGZhbHNlYCB0byBjaGFuZ2UgaW1tZWRpYXRlbHkuXG4gKiBAcGxhdGZvcm0gYW5kcm9pZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJCYWNrZ3JvdW5kQ29sb3IoYmFja2dyb3VuZENvbG9yOiBzdHJpbmcsIGFuaW1hdGVkOiBib29sZWFuKSB7XG4gIFN0YXR1c0Jhci5zZXRCYWNrZ3JvdW5kQ29sb3IoYmFja2dyb3VuZENvbG9yLCBhbmltYXRlZCk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgdGhlIG5ldHdvcmsgYWN0aXZpdHkgaW5kaWNhdG9yLlxuICogQHBhcmFtIHZpc2libGUgSWYgdGhlIG5ldHdvcmsgYWN0aXZpdHkgaW5kaWNhdG9yIHNob3VsZCBiZSB2aXNpYmxlLlxuICogQHBsYXRmb3JtIGlvc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJOZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgU3RhdHVzQmFyLnNldE5ldHdvcmtBY3Rpdml0eUluZGljYXRvclZpc2libGUodmlzaWJsZSk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyQW5pbWF0aW9uIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBoaWRkZW4gSWYgdGhlIHN0YXR1cyBiYXIgc2hvdWxkIGJlIGhpZGRlbi5cbiAqIEBwYXJhbSBhbmltYXRpb24gQW5pbWF0aW9uIHRvIHVzZSB3aGVuIHRvZ2dsaW5nIGhpZGRlbiwgZGVmYXVsdHMgdG8gYCdub25lJ2AuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckhpZGRlbihoaWRkZW46IGJvb2xlYW4sIGFuaW1hdGlvbjogU3RhdHVzQmFyQW5pbWF0aW9uKSB7XG4gIFN0YXR1c0Jhci5zZXRIaWRkZW4oaGlkZGVuLCBhbmltYXRpb24pO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhclN0eWxlIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuaW1wb3J0IHN0eWxlVG9CYXJTdHlsZSBmcm9tICcuL3N0eWxlVG9CYXJTdHlsZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFNldCB0aGUgYmFyIHN0eWxlIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIHN0eWxlIFRoZSBjb2xvciBvZiB0aGUgc3RhdHVzIGJhciB0ZXh0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJTdHlsZShzdHlsZTogU3RhdHVzQmFyU3R5bGUpIHtcbiAgU3RhdHVzQmFyLnNldEJhclN0eWxlKHN0eWxlVG9CYXJTdHlsZShzdHlsZSkpO1xufVxuIiwgImltcG9ydCB7IEFwcGVhcmFuY2UsIENvbG9yU2NoZW1lTmFtZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhclN0eWxlIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuXG5mdW5jdGlvbiBnZXRDb2xvclNjaGVtZSgpIHtcbiAgaWYgKEFwcGVhcmFuY2UpIHtcbiAgICByZXR1cm4gQXBwZWFyYW5jZS5nZXRDb2xvclNjaGVtZSgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnbGlnaHQnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlVG9CYXJTdHlsZShcbiAgc3R5bGU6IFN0YXR1c0JhclN0eWxlID0gJ2F1dG8nLFxuICBjb2xvclNjaGVtZTogQ29sb3JTY2hlbWVOYW1lID0gZ2V0Q29sb3JTY2hlbWUoKVxuKTogJ2xpZ2h0LWNvbnRlbnQnIHwgJ2RhcmstY29udGVudCcge1xuICBpZiAoIWNvbG9yU2NoZW1lKSB7XG4gICAgY29sb3JTY2hlbWUgPSAnbGlnaHQnO1xuICB9XG5cbiAgbGV0IHJlc29sdmVkU3R5bGUgPSBzdHlsZTtcbiAgaWYgKHN0eWxlID09PSAnYXV0bycpIHtcbiAgICByZXNvbHZlZFN0eWxlID0gY29sb3JTY2hlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xuICB9IGVsc2UgaWYgKHN0eWxlID09PSAnaW52ZXJ0ZWQnKSB7XG4gICAgcmVzb2x2ZWRTdHlsZSA9IGNvbG9yU2NoZW1lID09PSAnbGlnaHQnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlZFN0eWxlID09PSAnbGlnaHQnID8gJ2xpZ2h0LWNvbnRlbnQnIDogJ2RhcmstY29udGVudCc7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogU2V0IHRoZSB0cmFuc2x1Y2VuY3kgb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gdHJhbnNsdWNlbnQgV2hldGhlciB0aGUgYXBwIGNhbiBkcmF3IHVuZGVyIHRoZSBzdGF0dXMgYmFyLiBXaGVuIGB0cnVlYCwgY29udGVudCB3aWxsIGJlXG4gKiByZW5kZXJlZCB1bmRlciB0aGUgc3RhdHVzIGJhci4gVGhpcyBpcyBhbHdheXMgYHRydWVgIG9uIGlPUyBhbmQgY2Fubm90IGJlIGNoYW5nZWQuXG4gKiBAcGxhdGZvcm0gYW5kcm9pZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJUcmFuc2x1Y2VudCh0cmFuc2x1Y2VudDogYm9vbGVhbikge1xuICBTdGF0dXNCYXIuc2V0VHJhbnNsdWNlbnQodHJhbnNsdWNlbnQpO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ2V4cG8tc3RhdHVzLWJhcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByZXNzYWJsZSwgVGV4dCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGluY3JlbWVudCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q291bnQocyA9PiBzICsgMSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBmbGV4LWNvbCBmbGV4LTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXJlZC0xMDAnPlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWN5YW4tNzAwJz5FeGFtcGxlVmlldyAuLi48L1RleHQ+XG4gICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9e2luY3JlbWVudH0+XG4gICAgICAgICAgICAgICAgPFRleHQ+e2BJbmNyZW1lbnQgY291bnQ6JHtjb3VudH1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dD4wMDM8L1RleHQ+XG4gICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgIDxTdGF0dXNCYXIgc3R5bGU9J2F1dG8nIC8+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gJ3RhaWx3aW5kY3NzJztcblxuZXhwb3J0IGNvbnN0IHRhaWx3aW5kVGhlbWU6IENvbmZpZ1tgdGhlbWVgXSA9IHtcbiAgICAvLyBlZGl0IHlvdXIgdGFpbHdpbmQgdGhlbWUgaGVyZSFcbiAgICAvLyBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2FkZGluZy1jdXN0b20tc3R5bGVzXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixhQUFlO0FBQUEsRUFDZixRQUFVLENBQUM7QUFBQSxFQUNYLFNBQVcsQ0FBQztBQUFBLEVBQ1osTUFBUTtBQUFBLElBQ04sTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLGFBQWU7QUFBQSxRQUNmLFFBQVU7QUFBQSxRQUNWLFlBQWMsQ0FBQztBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxhQUFlO0FBQUEsTUFDZixNQUFRO0FBQUEsTUFDUixRQUFVLENBQUM7QUFBQSxNQUNYLFNBQVc7QUFBQSxRQUNUO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixNQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsY0FBZ0I7QUFBQSxZQUNoQixzQkFBd0I7QUFBQSxVQUMxQjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFRO0FBQUEsVUFDUixNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixNQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsY0FBZ0I7QUFBQSxZQUNoQixzQkFBd0I7QUFBQSxVQUMxQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFhO0FBQUEsUUFDWDtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixVQUFZO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVLENBQUM7QUFBQSxVQUNYLFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLFVBQVk7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWU7QUFBQSxVQUNmLE1BQVE7QUFBQSxVQUNSLFFBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixVQUFZO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlB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OiBbIlJlYWN0IiwgInVzZUxheW91dEVmZmVjdCIsICJ1c2VSZWYiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlByZXNzYWJsZSIsICJkIiwgImIiLCAiZnJvbSIsICJ2IiwgIlN1YnNjcmlwdGlvbiIsICJTdWJzY3JpYmVyIiwgIkNvbnN1bWVyT2JzZXJ2ZXIiLCAiU2FmZVN1YnNjcmliZXIiLCAiT2JzZXJ2YWJsZSIsICJvYnNlcnZhYmxlIiwgIk9wZXJhdG9yU3Vic2NyaWJlciIsICJlcnIiLCAiU3ViamVjdCIsICJvYnNlcnZhYmxlIiwgIkFub255bW91c1N1YmplY3QiLCAiQmVoYXZpb3JTdWJqZWN0IiwgImRlbGF5IiwgImRlbGF5IiwgImRlbGF5IiwgIml0ZXJhdG9yIiwgIml0ZXJhdG9yIiwgImlzQXJyYXkiLCAiaSIsICJ1c2VSZWYiLCAidXNlUmVmIiwgIlJlYWN0IiwgImNyZWF0ZUNvbnRleHQiLCAidXNlQ29udGV4dCIsICJ1c2VFZmZlY3QiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlByZXNzYWJsZSIsICJSZWFjdCIsICJjcmVhdGVDb250ZXh0IiwgInVzZUVmZmVjdCIsICJ1c2VSZWYiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgImNyZWF0ZUNvbnRleHQiLCAidXNlRWZmZWN0IiwgIm9sZCIsICJ1c2VTdGF0ZSIsICJWaWV3IiwgIlJlYWN0IiwgIlRleHQiLCAidXNlUmVmIiwgIlJlYWN0IiwgIlZpZXciLCAiVGV4dCIsICJ1c2VDb250ZXh0IiwgInVzZVN0YXRlIiwgIlZpZXciLCAiVGV4dCIsICJQcmVzc2FibGUiLCAidXNlQ29udGV4dCIsICJQcmVzc2FibGUiLCAiVmlldyIsICJUZXh0IiwgInVzZVN0YXRlIiwgIlZpZXciLCAiUmVhY3QiLCAiVGV4dCIsICJUZXh0IiwgIm9iaiIsICJ2aXNpdGVkIiwgIngiLCAid29ya2Zsb3ciLCAiY29udGV4dCIsICJ2IiwgIlZpZXciLCAiUmVhY3QiLCAidXNlQ29udGV4dCIsICJ1c2VTdGF0ZSIsICJ1c2VFZmZlY3QiLCAiVGV4dCIsICJQcmVzc2FibGUiLCAiY3JlYXRlQ29udGV4dCIsICJSZWFjdCIsICJ1c2VTdGF0ZSIsICJWaWV3IiwgIlRleHQiLCAiVmlldyIsICJUZXh0IiwgIlJlYWN0IiwgIk5vZGVWaWV3IiwgInVzZVN0YXRlIiwgImNvbnRleHQiLCAidXNlUmVmIiwgInVzZVN0YXRlIiwgIlZpZXciLCAiUmVhY3QiLCAiUHJlc3NhYmxlIiwgIlRleHQiLCAiY29udGV4dCIsICJ1c2VMYXlvdXRFZmZlY3QiLCAiU3RhdHVzQmFyIiwgIlN0YXR1c0JhciIsICJTdGF0dXNCYXIiLCAiU3RhdHVzQmFyIiwgInVzZVN0YXRlIiwgIlByZXNzYWJsZSIsICJUZXh0IiwgIlZpZXciXQp9Cg==
