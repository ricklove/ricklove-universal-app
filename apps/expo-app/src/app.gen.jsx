// ../../packages/pipescript/src/tests/code/0005-logic/02.ts.workflow.json
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
                type: "int"
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
                sourceNodeId: "file.ts/if-body:4",
                sourceNodeOutputName: "b"
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
                    sourceNodeId: "file.ts/if-body/if-body:2",
                    sourceNodeOutputName: "b"
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
                  workflowUri: "file.ts/if-body/if-body/out/b",
                  name: "file.ts/if-body/if-body/out/b",
                  inputs: [
                    {
                      name: "condition",
                      type: {
                        kind: "simple",
                        type: "bool"
                      }
                    },
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
                    operator: "conditional-ternary"
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
                    workflowUri: "file.ts/if-body/if-body/out/b",
                    inputPipes: [
                      {
                        name: "condition",
                        kind: "workflow-input",
                        workflowInputName: "condition"
                      },
                      {
                        name: "left",
                        kind: "node",
                        sourceNodeId: "file.ts/if-body/if-body:1",
                        sourceNodeOutputName: "b"
                      },
                      {
                        name: "right",
                        kind: "workflow-input",
                        workflowInputName: "b"
                      }
                    ]
                  }
                ]
              }
            },
            {
              workflowUri: "file.ts/if-body/out/b",
              name: "file.ts/if-body/out/b",
              inputs: [
                {
                  name: "condition",
                  type: {
                    kind: "simple",
                    type: "bool"
                  }
                },
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
                operator: "conditional-ternary"
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
                  }
                ]
              },
              {
                nodeId: "file.ts/if-body:4",
                workflowUri: "file.ts/if-body/out/b",
                inputPipes: [
                  {
                    name: "condition",
                    kind: "workflow-input",
                    workflowInputName: "condition"
                  },
                  {
                    name: "left",
                    kind: "node",
                    sourceNodeId: "file.ts/if-body:3",
                    sourceNodeOutputName: "b"
                  },
                  {
                    name: "right",
                    kind: "workflow-input",
                    workflowInputName: "b"
                  }
                ]
              }
            ]
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
    <View5 className="p-1"><MoveableView
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdGVzdHMvY29kZS8wMDA1LWxvZ2ljLzAyLnRzLndvcmtmbG93Lmpzb24iLCAiLi4vLi4vLi4vcGFja2FnZXMvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjay50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLWNhbnZhcy12aWV3LnRzeCIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc0Z1bmN0aW9uLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2NyZWF0ZUVycm9yQ2xhc3MudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9hcnJSZW1vdmUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL1N1YnNjcmlwdGlvbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvY29uZmlnLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL25vb3AudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL05vdGlmaWNhdGlvbkZhY3Rvcmllcy50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9lcnJvckNvbnRleHQudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL1N1YnNjcmliZXIudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3N5bWJvbC9vYnNlcnZhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lkZW50aXR5LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL3BpcGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL09ic2VydmFibGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvbGlmdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL09wZXJhdG9yU3Vic2NyaWJlci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvU3ViamVjdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzU2NoZWR1bGVyLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2FyZ3MudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNBcnJheUxpa2UudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNQcm9taXNlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3V0aWwvaXNBc3luY0l0ZXJhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3IudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3N5bWJvbC9pdGVyYXRvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9pc0l0ZXJhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2lubmVyRnJvbS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9leGVjdXRlU2NoZWR1bGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9vYnNlcnZlT24udHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9zdWJzY3JpYmVPbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlT2JzZXJ2YWJsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlUHJvbWlzZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXJyYXkudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUl0ZXJhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVBc3luY0l0ZXJhYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZWQudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29ic2VydmFibGUvZnJvbS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL21hcC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvdXRpbC9tYXBPbmVPck1hbnlBcmdzLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2FyZ3NBcmdBcnJheU9yT2JqZWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC91dGlsL2NyZWF0ZU9iamVjdC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb21iaW5lTGF0ZXN0LnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL21vdmVhYmxlLXZpZXcudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL25vZGUtaW5zdGFuY2Utdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvcGlwZXMudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL3VpL3NoZWV0LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS92YWx1ZS12aWV3LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLW5hbWVzLnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91dGlscy9qc29uLnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvc3JjL2FuYWx5c2lzL2hhc2gudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvY29kZS1nZW5lcmF0aW9uL2ZpbGUudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvYW5hbHlzaXMvY2FsY3VsYXRlLXJ1bi50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLWZsb3ctdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvYW5hbHlzaXMvbG9hZC1kYXRhLnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL3BpcGVzY3JpcHQvaW5kZXgudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvYXBwL3NyYy9pbmRleC50c3giLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyQmFja2dyb3VuZENvbG9yLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0Jhck5ldHdvcmtBY3Rpdml0eUluZGljYXRvclZpc2libGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFySGlkZGVuLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhclN0eWxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3N0eWxlVG9CYXJTdHlsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJUcmFuc2x1Y2VudC50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9jbC9zcmMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL3BhY2thZ2VzL2NsL3NyYy9kZXNpZ24vdGFpbHdpbmQvdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcbiAgXCJuYW1lXCI6IFwiXCIsXG4gIFwid29ya2Zsb3dVcmlcIjogXCJcIixcbiAgXCJpbnB1dHNcIjogW10sXG4gIFwib3V0cHV0c1wiOiBbXSxcbiAgXCJib2R5XCI6IHtcbiAgICBcImtpbmRcIjogXCJub2Rlc1wiLFxuICAgIFwibm9kZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50c1wiLFxuICAgICAgICBcIm5vZGVJZFwiOiBcIm1haW5cIixcbiAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIndvcmtmbG93c1wiOiBbXG4gICAge1xuICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHNcIixcbiAgICAgIFwibmFtZVwiOiBcImZpbGUudHNcIixcbiAgICAgIFwiaW5wdXRzXCI6IFtdLFxuICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czo0XCIsXG4gICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ3b3JrZmxvd3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYS1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvYS1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiZGVjbGFyYXRpb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2ItZGVjbGFyYXRpb25cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzL2ItZGVjbGFyYXRpb25cIixcbiAgICAgICAgICBcImlucHV0c1wiOiBbXSxcbiAgICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiZGVjbGFyYXRpb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzLz5cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzLz5cIixcbiAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCI+XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy9pZi1ib2R5XCIsXG4gICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb25kaXRpb25cIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzL2lmLWJvZHk6NFwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJ3b3JrZmxvd3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5L2I9XCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvaWYtYm9keS9iPVwiLFxuICAgICAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib2xkXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImlnbm9yZWRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInBpcGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImJvZHlcIjoge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcIj1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5Lz5cIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy9pZi1ib2R5Lz5cIixcbiAgICAgICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LW9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICBcIm9wZXJhdG9yXCI6IFwiPlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keVwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keVwiLFxuICAgICAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHMvaWYtYm9keS9pZi1ib2R5OjJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJ3b3JrZmxvd3NcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keS9iPVwiLFxuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmlsZS50cy9pZi1ib2R5L2lmLWJvZHkvYj1cIixcbiAgICAgICAgICAgICAgICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZ25vcmVkXCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcIj1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvaWYtYm9keS9pZi1ib2R5L291dC9iXCIsXG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keS9vdXQvYlwiLFxuICAgICAgICAgICAgICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcInNpbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwicGlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1vcGVyYXRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcGVyYXRvclwiOiBcImNvbmRpdGlvbmFsLXRlcm5hcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2Rlc1wiLFxuICAgICAgICAgICAgICAgIFwibm9kZXNcIjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHMvaWYtYm9keS9pZi1ib2R5OjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvaWYtYm9keS9pZi1ib2R5L2I9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwianNvblwiOiBcIjQ2XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid29ya2Zsb3dJbnB1dE5hbWVcIjogXCJiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5L2lmLWJvZHk6MlwiLFxuICAgICAgICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5L2lmLWJvZHkvb3V0L2JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb25kaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtmbG93SW5wdXROYW1lXCI6IFwiY29uZGl0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5L2lmLWJvZHk6MVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtmbG93SW5wdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5L291dC9iXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpbGUudHMvaWYtYm9keS9vdXQvYlwiLFxuICAgICAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJzaW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYlwiLFxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwic2ltcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJwaXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctb3BlcmF0b3JcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgICAgIFwib3BlcmF0b3JcIjogXCJjb25kaXRpb25hbC10ZXJuYXJ5XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVzXCIsXG4gICAgICAgICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5OjFcIixcbiAgICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5L2I9XCIsXG4gICAgICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiZGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICBcImpzb25cIjogXCI0M1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwid29ya2Zsb3ctaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3b3JrZmxvd0lucHV0TmFtZVwiOiBcImJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5OjJcIixcbiAgICAgICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5Lz5cIixcbiAgICAgICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid29ya2Zsb3dJbnB1dE5hbWVcIjogXCJhXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIm5vZGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzL2lmLWJvZHk6MVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJub2RlSWRcIjogXCJmaWxlLnRzL2lmLWJvZHk6M1wiLFxuICAgICAgICAgICAgICAgIFwid29ya2Zsb3dVcmlcIjogXCJmaWxlLnRzL2lmLWJvZHkvaWYtYm9keVwiLFxuICAgICAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbmRpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50cy9pZi1ib2R5OjJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHMvaWYtYm9keToxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJiXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHMvaWYtYm9keTo0XCIsXG4gICAgICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvaWYtYm9keS9vdXQvYlwiLFxuICAgICAgICAgICAgICAgIFwiaW5wdXRQaXBlc1wiOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbmRpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJ3b3JrZmxvdy1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBcIndvcmtmbG93SW5wdXROYW1lXCI6IFwiY29uZGl0aW9uXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVJZFwiOiBcImZpbGUudHMvaWYtYm9keTozXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic291cmNlTm9kZU91dHB1dE5hbWVcIjogXCJiXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIndvcmtmbG93LWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid29ya2Zsb3dJbnB1dE5hbWVcIjogXCJiXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImJvZHlcIjoge1xuICAgICAgICBcImtpbmRcIjogXCJub2Rlc1wiLFxuICAgICAgICBcIm5vZGVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6MVwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYS1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgXCJqc29uXCI6IFwiNDJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6MlwiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvYi1kZWNsYXJhdGlvblwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIm5vZGVJZFwiOiBcImZpbGUudHM6M1wiLFxuICAgICAgICAgICAgXCJ3b3JrZmxvd1VyaVwiOiBcImZpbGUudHMvPlwiLFxuICAgICAgICAgICAgXCJpbnB1dFBpcGVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjFcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICBcImpzb25cIjogXCI0MFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibm9kZUlkXCI6IFwiZmlsZS50czo0XCIsXG4gICAgICAgICAgICBcIndvcmtmbG93VXJpXCI6IFwiZmlsZS50cy9pZi1ib2R5XCIsXG4gICAgICAgICAgICBcImlucHV0UGlwZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29uZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czozXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJcIixcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlSWRcIjogXCJmaWxlLnRzOjJcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZU5vZGVPdXRwdXROYW1lXCI6IFwiYlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlTm9kZUlkXCI6IFwiZmlsZS50czoxXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VOb2RlT3V0cHV0TmFtZVwiOiBcImFcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdXG59IiwgImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuLyoqIEVuc3VyZSB0aGUgaXRlbSBpcyBhbHdheXMgdGhlIGxhc3QgcmVuZGVyZWQgdmFsdWUgKi9cbmV4cG9ydCBjb25zdCB1c2VTdGFibGUgPSA8VD4oc3RhYmxlOiBUKSA9PiB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YWJsZSk7XG4gICAgcmVmLmN1cnJlbnQgPSBzdGFibGU7XG4gICAgcmV0dXJuIHJlZjtcbn07XG5cbi8qKiBFbnN1cmUgdGhlIGNhbGxiYWNrIGlzIGFsd2F5cyB0aGUgbGFzdCByZW5kZXJlZCBjYWxsYmFjaywgc28gaXQgaGFzIHJlZmVyZW5jZSB0byB0aGUgbGFzdCBzdGF0ZVxuICpcbiAqIE5vIG5lZWQgZm9yIGRlcGVuZGVuY2llcywgdGhpcyB3aWxsIHNpbXBseSBoYXZlIGFjY2VzcyB0byB0aGUgdmFsdWVzIHRoYXQgZXhpc3RlZCBpbiB0aGUgcmVuZGVyXG4gKiB3aGVuIGl0IHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgbGFzdCByZW5kZXIuXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VTdGFibGVDYWxsYmFjayA9IDxUQXJncyBleHRlbmRzIHVua25vd25bXSwgVFJldHVybj4oXG4gICAgc3RhYmxlOiAoLi4uYXJnczogVEFyZ3MpID0+IFRSZXR1cm4sXG4pID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhYmxlKTtcbiAgICByZWYuY3VycmVudCA9IHN0YWJsZTtcbiAgICBjb25zdCBjYWxsYmFjayA9IHVzZVJlZigoLi4uYXJnczogVEFyZ3MpID0+IHJlZi5jdXJyZW50KC4uLmFyZ3MpKTtcbiAgICByZXR1cm4gY2FsbGJhY2suY3VycmVudDtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgZGVsYXkgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlQ29udGV4dCwgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7IE5vZGVJbnN0YW5jZXNWaWV3IH0gZnJvbSAnLi9ub2RlLWluc3RhbmNlLXZpZXcnO1xuaW1wb3J0IHsgUGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dCwgUGlwZVZpZXdIb3N0LCBjcmVhdGVQaXBlRW5kcG9pbnRzUmVnaXN0cnkgfSBmcm9tICcuL3BpcGVzJztcbmltcG9ydCB7IFdvcmtGbG93VmlldyB9IGZyb20gJy4vd29yay1mbG93LXZpZXcnO1xuaW1wb3J0IHsgbG9hZFJ1bnRpbWUgfSBmcm9tICcuLi9hbmFseXNpcy9sb2FkLWRhdGEnO1xuaW1wb3J0IHsgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgV29ya0NhbnZhc1ZpZXcgPSAoeyB3b3JrZmxvdyB9OiB7IHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3cgfSkgPT4ge1xuICAgIGNvbnN0IG5vZGVJbnN0YW5jZXNEYXRhc2V0UmVmID0gdXNlUmVmKGxvYWRSdW50aW1lKHdvcmtmbG93KS5kYXRhc2V0KTtcbiAgICBjb25zdCBub2RlSW5zdGFuY2VzID0gbm9kZUluc3RhbmNlc0RhdGFzZXRSZWYuY3VycmVudC5yb290Tm9kZUluc3RhbmNlcztcblxuICAgIGNvbnN0IHRhYnMgPSBbYHdvcmstZmxvd2AsIGBub2RlLWluc3RhbmNlc2BdIGFzIGNvbnN0O1xuICAgIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZShgbm9kZS1pbnN0YW5jZXNgIGFzICh0eXBlb2YgdGFicylbbnVtYmVyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLXNsYXRlLTkwMCB3LWZ1bGwgaC1mdWxsIG92ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgICA8TW92ZWFibGVWaWV3XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbk1vdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBtb3VzZUJ1dHRvbj17TW91c2VCdXR0b24uTWlkZGxlfVxuICAgICAgICAgICAgICAgIGVuYWJsZVNjYWxpbmdcbiAgICAgICAgICAgICAgICB3aG9sZUNhbnZhc1xuICAgICAgICAgICAgICAgIG91dGVyQ2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJ1xuICAgICAgICAgICAgICAgIGlubmVyQ2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJ1xuICAgICAgICAgICAgICAgIEhlYWRlckNvbXBvbmVudD17dXNlU3RhYmxlQ2FsbGJhY2soKCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWJzLm1hcCh4ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzPXsoKSA9PiBzZXRUYWIoeCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTEgbS0xIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gYm9yZGVyLWdyYXktODAwICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYiA9PT0geCA/IGBgIDogYG9wYWNpdHktNTBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ncmF5LTgwMCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiID09PSB4ID8gYGAgOiBgb3BhY2l0eS01MGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaXBlVmlld0NvbnRleHRIb3N0PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWIgPT09IGB3b3JrLWZsb3dgICYmIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3dvcmtmbG93fSBmdWxsIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYiA9PT0gYG5vZGUtaW5zdGFuY2VzYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVJbnN0YW5jZXNWaWV3IG5vZGVJbnN0YW5jZXM9e25vZGVJbnN0YW5jZXN9IGZ1bGwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1BpcGVWaWV3Q29udGV4dEhvc3Q+XG4gICAgICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBQaXBlVmlld0NvbnRleHRIb3N0ID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogSlNYLkVsZW1lbnQgfSkgPT4ge1xuICAgIGNvbnN0IHZpZXdSZWYgPSB1c2VSZWYobnVsbCBhcyBudWxsIHwgVmlldyk7XG4gICAgY29uc3QgaG9zdFJlZiA9IHVzZVJlZihuZXcgU3ViamVjdDxWaWV3PigpKTtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlUmVmKGNyZWF0ZVBpcGVFbmRwb2ludHNSZWdpc3RyeSgpKTtcblxuICAgIGNvbnN0IFtwaXBlcywgc2V0UGlwZXNdID0gdXNlU3RhdGUoY29udGV4dC5jdXJyZW50LnBpcGVzLnZhbHVlKTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdmlld1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5jdXJyZW50Lmhvc3RWaWV3ID0gdmlld1JlZi5jdXJyZW50O1xuICAgICAgICBob3N0UmVmLmN1cnJlbnQubmV4dCh2aWV3UmVmLmN1cnJlbnQpO1xuXG4gICAgICAgIGNvbnN0IHN1YiA9IGNvbnRleHQuY3VycmVudC5waXBlcy5zdWJzY3JpYmUodiA9PiB7XG4gICAgICAgICAgICBzZXRQaXBlcyh2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFBpcGVzKHBpcGVzKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFshdmlld1JlZi5jdXJyZW50XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dC5jdXJyZW50fT5cbiAgICAgICAgICAgIDxWaWV3IHJlZj17dmlld1JlZn0gY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJz5cbiAgICAgICAgICAgICAgICA8TW92ZWFibGVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgICAgICAgICB7KHsgcG9zaXRpb246IGNvbnRhaW5lclBvc2l0aW9uIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZlYWJsZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogY29udGFpbmVyUG9zaXRpb24uc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob2xlQ2FudmFzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3SG9zdCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW92ZWFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvTW92ZWFibGVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L1BpcGVFbmRwb2ludHNSZWdpc3RyeUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG4iLCAiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sICovXG5cbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xuICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XG4gICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgfVxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgfVxuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XG4gIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxuICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xuICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcbiAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XG4gIHZhciBfLCBkb25lID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcbiAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xuICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcbiAgICAgIH1cbiAgfVxuICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XG4gIGRvbmUgPSB0cnVlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcbiAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XG4gIH1cbiAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gIH1cbn1cblxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIG9bazJdID0gbVtrXTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcbiAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xuICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgfVxuICB9O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICB0cnkge1xuICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gIGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICB9XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xuICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgcltrXSA9IGFbal07XG4gIHJldHVybiByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xuICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgfVxuICB9XG4gIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XG4gIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxuICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cbiAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xuICB2YXIgaSwgcDtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xuICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcbiAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgcmV0dXJuIGNvb2tlZDtcbn07XG5cbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gIG9bXCJkZWZhdWx0XCJdID0gdjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XG4gIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xuICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XG4gIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xuICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkLlwiKTtcbiAgICB2YXIgZGlzcG9zZTtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuYXN5bmNEaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuYXN5bmNEaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKGRpc3Bvc2UgPT09IHZvaWQgMCkge1xuICAgICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmRpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XG4gICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcbiAgfVxuICBlbHNlIGlmIChhc3luYykge1xuICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XG4gIGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcbiAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgd2hpbGUgKGVudi5zdGFjay5sZW5ndGgpIHtcbiAgICAgIHZhciByZWMgPSBlbnYuc3RhY2sucG9wKCk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjLmRpc3Bvc2UgJiYgcmVjLmRpc3Bvc2UuY2FsbChyZWMudmFsdWUpO1xuICAgICAgICBpZiAocmVjLmFzeW5jKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihuZXh0LCBmdW5jdGlvbihlKSB7IGZhaWwoZSk7IHJldHVybiBuZXh0KCk7IH0pO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICBmYWlsKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW52Lmhhc0Vycm9yKSB0aHJvdyBlbnYuZXJyb3I7XG4gIH1cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBfX2V4dGVuZHMsXG4gIF9fYXNzaWduLFxuICBfX3Jlc3QsXG4gIF9fZGVjb3JhdGUsXG4gIF9fcGFyYW0sXG4gIF9fbWV0YWRhdGEsXG4gIF9fYXdhaXRlcixcbiAgX19nZW5lcmF0b3IsXG4gIF9fY3JlYXRlQmluZGluZyxcbiAgX19leHBvcnRTdGFyLFxuICBfX3ZhbHVlcyxcbiAgX19yZWFkLFxuICBfX3NwcmVhZCxcbiAgX19zcHJlYWRBcnJheXMsXG4gIF9fc3ByZWFkQXJyYXksXG4gIF9fYXdhaXQsXG4gIF9fYXN5bmNHZW5lcmF0b3IsXG4gIF9fYXN5bmNEZWxlZ2F0b3IsXG4gIF9fYXN5bmNWYWx1ZXMsXG4gIF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxuICBfX2ltcG9ydFN0YXIsXG4gIF9faW1wb3J0RGVmYXVsdCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEluLFxuICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSxcbiAgX19kaXNwb3NlUmVzb3VyY2VzLFxufTtcbiIsICIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgZnVuY3Rpb24uXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyAoLi4uYXJnczogYW55W10pID0+IGFueSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG4iLCAiLyoqXG4gKiBVc2VkIHRvIGNyZWF0ZSBFcnJvciBzdWJjbGFzc2VzIHVudGlsIHRoZSBjb21tdW5pdHkgbW92ZXMgYXdheSBmcm9tIEVTNS5cbiAqXG4gKiBUaGlzIGlzIGJlY2F1c2UgY29tcGlsaW5nIGZyb20gVHlwZVNjcmlwdCBkb3duIHRvIEVTNSBoYXMgaXNzdWVzIHdpdGggc3ViY2xhc3NpbmcgRXJyb3JzXG4gKiBhcyB3ZWxsIGFzIG90aGVyIGJ1aWx0LWluIHR5cGVzOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEyMTIzXG4gKlxuICogQHBhcmFtIGNyZWF0ZUltcGwgQSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgYWN0dWFsIGNvbnN0cnVjdG9yIGltcGxlbWVudGF0aW9uLiBUaGUgcmV0dXJuZWRcbiAqIGZ1bmN0aW9uIHNob3VsZCBiZSBhIG5hbWVkIGZ1bmN0aW9uIHRoYXQgY2FsbHMgYF9zdXBlcmAgaW50ZXJuYWxseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVycm9yQ2xhc3M8VD4oY3JlYXRlSW1wbDogKF9zdXBlcjogYW55KSA9PiBhbnkpOiBUIHtcbiAgY29uc3QgX3N1cGVyID0gKGluc3RhbmNlOiBhbnkpID0+IHtcbiAgICBFcnJvci5jYWxsKGluc3RhbmNlKTtcbiAgICBpbnN0YW5jZS5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICB9O1xuXG4gIGNvbnN0IGN0b3JGdW5jID0gY3JlYXRlSW1wbChfc3VwZXIpO1xuICBjdG9yRnVuYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gIGN0b3JGdW5jLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JGdW5jO1xuICByZXR1cm4gY3RvckZ1bmM7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlRXJyb3JDbGFzcyB9IGZyb20gJy4vY3JlYXRlRXJyb3JDbGFzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5zdWJzY3JpcHRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgcmVhZG9ubHkgZXJyb3JzOiBhbnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbnN1YnNjcmlwdGlvbkVycm9yQ3RvciB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIERvIG5vdCBjb25zdHJ1Y3QgZXJyb3IgaW5zdGFuY2VzLlxuICAgKiBDYW5ub3QgYmUgdGFnZ2VkIGFzIGludGVybmFsOiBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RpdmVYL3J4anMvaXNzdWVzLzYyNjlcbiAgICovXG4gIG5ldyAoZXJyb3JzOiBhbnlbXSk6IFVuc3Vic2NyaXB0aW9uRXJyb3I7XG59XG5cbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gb25lIG9yIG1vcmUgZXJyb3JzIGhhdmUgb2NjdXJyZWQgZHVyaW5nIHRoZVxuICogYHVuc3Vic2NyaWJlYCBvZiBhIHtAbGluayBTdWJzY3JpcHRpb259LlxuICovXG5leHBvcnQgY29uc3QgVW5zdWJzY3JpcHRpb25FcnJvcjogVW5zdWJzY3JpcHRpb25FcnJvckN0b3IgPSBjcmVhdGVFcnJvckNsYXNzKFxuICAoX3N1cGVyKSA9PlxuICAgIGZ1bmN0aW9uIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsKHRoaXM6IGFueSwgZXJyb3JzOiAoRXJyb3IgfCBzdHJpbmcpW10pIHtcbiAgICAgIF9zdXBlcih0aGlzKTtcbiAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9yc1xuICAgICAgICA/IGAke2Vycm9ycy5sZW5ndGh9IGVycm9ycyBvY2N1cnJlZCBkdXJpbmcgdW5zdWJzY3JpcHRpb246XG4ke2Vycm9ycy5tYXAoKGVyciwgaSkgPT4gYCR7aSArIDF9KSAke2Vyci50b1N0cmluZygpfWApLmpvaW4oJ1xcbiAgJyl9YFxuICAgICAgICA6ICcnO1xuICAgICAgdGhpcy5uYW1lID0gJ1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuKTtcbiIsICIvKipcbiAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGFuIGFycmF5LCBtdXRhdGluZyBpdC5cbiAqIEBwYXJhbSBhcnIgVGhlIGFycmF5IHRvIHJlbW92ZSB0aGUgaXRlbSBmcm9tXG4gKiBAcGFyYW0gaXRlbSBUaGUgaXRlbSB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyclJlbW92ZTxUPihhcnI6IFRbXSB8IHVuZGVmaW5lZCB8IG51bGwsIGl0ZW06IFQpIHtcbiAgaWYgKGFycikge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgMCA8PSBpbmRleCAmJiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBVbnN1YnNjcmlwdGlvbkVycm9yIH0gZnJvbSAnLi91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uTGlrZSwgVGVhcmRvd25Mb2dpYywgVW5zdWJzY3JpYmFibGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4vdXRpbC9hcnJSZW1vdmUnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBkaXNwb3NhYmxlIHJlc291cmNlLCBzdWNoIGFzIHRoZSBleGVjdXRpb24gb2YgYW4gT2JzZXJ2YWJsZS4gQVxuICogU3Vic2NyaXB0aW9uIGhhcyBvbmUgaW1wb3J0YW50IG1ldGhvZCwgYHVuc3Vic2NyaWJlYCwgdGhhdCB0YWtlcyBubyBhcmd1bWVudFxuICogYW5kIGp1c3QgZGlzcG9zZXMgdGhlIHJlc291cmNlIGhlbGQgYnkgdGhlIHN1YnNjcmlwdGlvbi5cbiAqXG4gKiBBZGRpdGlvbmFsbHksIHN1YnNjcmlwdGlvbnMgbWF5IGJlIGdyb3VwZWQgdG9nZXRoZXIgdGhyb3VnaCB0aGUgYGFkZCgpYFxuICogbWV0aG9kLCB3aGljaCB3aWxsIGF0dGFjaCBhIGNoaWxkIFN1YnNjcmlwdGlvbiB0byB0aGUgY3VycmVudCBTdWJzY3JpcHRpb24uXG4gKiBXaGVuIGEgU3Vic2NyaXB0aW9uIGlzIHVuc3Vic2NyaWJlZCwgYWxsIGl0cyBjaGlsZHJlbiAoYW5kIGl0cyBncmFuZGNoaWxkcmVuKVxuICogd2lsbCBiZSB1bnN1YnNjcmliZWQgYXMgd2VsbC5cbiAqXG4gKiBAY2xhc3MgU3Vic2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb24gaW1wbGVtZW50cyBTdWJzY3JpcHRpb25MaWtlIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHB1YmxpYyBzdGF0aWMgRU1QVFkgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGVtcHR5ID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIGVtcHR5LmNsb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIGVtcHR5O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciB0aGlzIFN1YnNjcmlwdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHVuc3Vic2NyaWJlZC5cbiAgICovXG4gIHB1YmxpYyBjbG9zZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIF9wYXJlbnRhZ2U6IFN1YnNjcmlwdGlvbltdIHwgU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHJlZ2lzdGVyZWQgZmluYWxpemVycyB0byBleGVjdXRlIHVwb24gdW5zdWJzY3JpcHRpb24uIEFkZGluZyBhbmQgcmVtb3ZpbmcgZnJvbSB0aGlzXG4gICAqIGxpc3Qgb2NjdXJzIGluIHRoZSB7QGxpbmsgI2FkZH0gYW5kIHtAbGluayAjcmVtb3ZlfSBtZXRob2RzLlxuICAgKi9cbiAgcHJpdmF0ZSBfZmluYWxpemVyczogRXhjbHVkZTxUZWFyZG93bkxvZ2ljLCB2b2lkPltdIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBpbml0aWFsVGVhcmRvd24gQSBmdW5jdGlvbiBleGVjdXRlZCBmaXJzdCBhcyBwYXJ0IG9mIHRoZSBmaW5hbGl6YXRpb25cbiAgICogcHJvY2VzcyB0aGF0IGlzIGtpY2tlZCBvZmYgd2hlbiB7QGxpbmsgI3Vuc3Vic2NyaWJlfSBpcyBjYWxsZWQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluaXRpYWxUZWFyZG93bj86ICgpID0+IHZvaWQpIHt9XG5cbiAgLyoqXG4gICAqIERpc3Bvc2VzIHRoZSByZXNvdXJjZXMgaGVsZCBieSB0aGUgc3Vic2NyaXB0aW9uLiBNYXksIGZvciBpbnN0YW5jZSwgY2FuY2VsXG4gICAqIGFuIG9uZ29pbmcgT2JzZXJ2YWJsZSBleGVjdXRpb24gb3IgY2FuY2VsIGFueSBvdGhlciB0eXBlIG9mIHdvcmsgdGhhdFxuICAgKiBzdGFydGVkIHdoZW4gdGhlIFN1YnNjcmlwdGlvbiB3YXMgY3JlYXRlZC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIGxldCBlcnJvcnM6IGFueVtdIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuXG4gICAgICAvLyBSZW1vdmUgdGhpcyBmcm9tIGl0J3MgcGFyZW50cy5cbiAgICAgIGNvbnN0IHsgX3BhcmVudGFnZSB9ID0gdGhpcztcbiAgICAgIGlmIChfcGFyZW50YWdlKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwYXJlbnQgb2YgX3BhcmVudGFnZSkge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3BhcmVudGFnZS5yZW1vdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBpbml0aWFsVGVhcmRvd246IGluaXRpYWxGaW5hbGl6ZXIgfSA9IHRoaXM7XG4gICAgICBpZiAoaXNGdW5jdGlvbihpbml0aWFsRmluYWxpemVyKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGluaXRpYWxGaW5hbGl6ZXIoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGVycm9ycyA9IGUgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yID8gZS5lcnJvcnMgOiBbZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBfZmluYWxpemVycyB9ID0gdGhpcztcbiAgICAgIGlmIChfZmluYWxpemVycykge1xuICAgICAgICB0aGlzLl9maW5hbGl6ZXJzID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBmaW5hbGl6ZXIgb2YgX2ZpbmFsaXplcnMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZXhlY0ZpbmFsaXplcihmaW5hbGl6ZXIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzID8/IFtdO1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZXJyLmVycm9yc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgIHRocm93IG5ldyBVbnN1YnNjcmlwdGlvbkVycm9yKGVycm9ycyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBmaW5hbGl6ZXIgdG8gdGhpcyBzdWJzY3JpcHRpb24sIHNvIHRoYXQgZmluYWxpemF0aW9uIHdpbGwgYmUgdW5zdWJzY3JpYmVkL2NhbGxlZFxuICAgKiB3aGVuIHRoaXMgc3Vic2NyaXB0aW9uIGlzIHVuc3Vic2NyaWJlZC4gSWYgdGhpcyBzdWJzY3JpcHRpb24gaXMgYWxyZWFkeSB7QGxpbmsgI2Nsb3NlZH0sXG4gICAqIGJlY2F1c2UgaXQgaGFzIGFscmVhZHkgYmVlbiB1bnN1YnNjcmliZWQsIHRoZW4gd2hhdGV2ZXIgZmluYWxpemVyIGlzIHBhc3NlZCB0byBpdFxuICAgKiB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgZXhlY3V0ZWQgKHVubGVzcyB0aGUgZmluYWxpemVyIGl0c2VsZiBpcyBhbHNvIGEgY2xvc2VkIHN1YnNjcmlwdGlvbikuXG4gICAqXG4gICAqIENsb3NlZCBTdWJzY3JpcHRpb25zIGNhbm5vdCBiZSBhZGRlZCBhcyBmaW5hbGl6ZXJzIHRvIGFueSBzdWJzY3JpcHRpb24uIEFkZGluZyBhIGNsb3NlZFxuICAgKiBzdWJzY3JpcHRpb24gdG8gYSBhbnkgc3Vic2NyaXB0aW9uIHdpbGwgcmVzdWx0IGluIG5vIG9wZXJhdGlvbi4gKEEgbm9vcCkuXG4gICAqXG4gICAqIEFkZGluZyBhIHN1YnNjcmlwdGlvbiB0byBpdHNlbGYsIG9yIGFkZGluZyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgd2lsbCBub3QgcGVyZm9ybSBhbnlcbiAgICogb3BlcmF0aW9uIGF0IGFsbC4gKEEgbm9vcCkuXG4gICAqXG4gICAqIGBTdWJzY3JpcHRpb25gIGluc3RhbmNlcyB0aGF0IGFyZSBhZGRlZCB0byB0aGlzIGluc3RhbmNlIHdpbGwgYXV0b21hdGljYWxseSByZW1vdmUgdGhlbXNlbHZlc1xuICAgKiBpZiB0aGV5IGFyZSB1bnN1YnNjcmliZWQuIEZ1bmN0aW9ucyBhbmQge0BsaW5rIFVuc3Vic2NyaWJhYmxlfSBvYmplY3RzIHRoYXQgeW91IHdpc2ggdG8gcmVtb3ZlXG4gICAqIHdpbGwgbmVlZCB0byBiZSByZW1vdmVkIG1hbnVhbGx5IHdpdGgge0BsaW5rICNyZW1vdmV9XG4gICAqXG4gICAqIEBwYXJhbSB0ZWFyZG93biBUaGUgZmluYWxpemF0aW9uIGxvZ2ljIHRvIGFkZCB0byB0aGlzIHN1YnNjcmlwdGlvbi5cbiAgICovXG4gIGFkZCh0ZWFyZG93bjogVGVhcmRvd25Mb2dpYyk6IHZvaWQge1xuICAgIC8vIE9ubHkgYWRkIHRoZSBmaW5hbGl6ZXIgaWYgaXQncyBub3QgdW5kZWZpbmVkXG4gICAgLy8gYW5kIGRvbid0IGFkZCBhIHN1YnNjcmlwdGlvbiB0byBpdHNlbGYuXG4gICAgaWYgKHRlYXJkb3duICYmIHRlYXJkb3duICE9PSB0aGlzKSB7XG4gICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBzdWJzY3JpcHRpb24gaXMgYWxyZWFkeSBjbG9zZWQsXG4gICAgICAgIC8vIGV4ZWN1dGUgd2hhdGV2ZXIgZmluYWxpemVyIGlzIGhhbmRlZCB0byBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICBleGVjRmluYWxpemVyKHRlYXJkb3duKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0ZWFyZG93biBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgIC8vIFdlIGRvbid0IGFkZCBjbG9zZWQgc3Vic2NyaXB0aW9ucywgYW5kIHdlIGRvbid0IGFkZCB0aGUgc2FtZSBzdWJzY3JpcHRpb25cbiAgICAgICAgICAvLyB0d2ljZS4gU3Vic2NyaXB0aW9uIHVuc3Vic2NyaWJlIGlzIGlkZW1wb3RlbnQuXG4gICAgICAgICAgaWYgKHRlYXJkb3duLmNsb3NlZCB8fCB0ZWFyZG93bi5faGFzUGFyZW50KHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRlYXJkb3duLl9hZGRQYXJlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgKHRoaXMuX2ZpbmFsaXplcnMgPSB0aGlzLl9maW5hbGl6ZXJzID8/IFtdKS5wdXNoKHRlYXJkb3duKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiBhIHRoaXMgc3Vic2NyaXB0aW9uIGFscmVhZHkgaGFzIGEgcGFydGljdWxhciBwYXJlbnQuXG4gICAqIFRoaXMgd2lsbCBzaWduYWwgdGhhdCB0aGlzIHN1YnNjcmlwdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBwYXJlbnQgaW4gcXVlc3Rpb24uXG4gICAqIEBwYXJhbSBwYXJlbnQgdGhlIHBhcmVudCB0byBjaGVjayBmb3JcbiAgICovXG4gIHByaXZhdGUgX2hhc1BhcmVudChwYXJlbnQ6IFN1YnNjcmlwdGlvbikge1xuICAgIGNvbnN0IHsgX3BhcmVudGFnZSB9ID0gdGhpcztcbiAgICByZXR1cm4gX3BhcmVudGFnZSA9PT0gcGFyZW50IHx8IChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpICYmIF9wYXJlbnRhZ2UuaW5jbHVkZXMocGFyZW50KSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHBhcmVudCB0byB0aGlzIHN1YnNjcmlwdGlvbiBzbyBpdCBjYW4gYmUgcmVtb3ZlZCBmcm9tIHRoZSBwYXJlbnQgaWYgaXRcbiAgICogdW5zdWJzY3JpYmVzIG9uIGl0J3Mgb3duLlxuICAgKlxuICAgKiBOT1RFOiBUSElTIEFTU1VNRVMgVEhBVCB7QGxpbmsgX2hhc1BhcmVudH0gSEFTIEFMUkVBRFkgQkVFTiBDSEVDS0VELlxuICAgKiBAcGFyYW0gcGFyZW50IFRoZSBwYXJlbnQgc3Vic2NyaXB0aW9uIHRvIGFkZFxuICAgKi9cbiAgcHJpdmF0ZSBfYWRkUGFyZW50KHBhcmVudDogU3Vic2NyaXB0aW9uKSB7XG4gICAgY29uc3QgeyBfcGFyZW50YWdlIH0gPSB0aGlzO1xuICAgIHRoaXMuX3BhcmVudGFnZSA9IEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgPyAoX3BhcmVudGFnZS5wdXNoKHBhcmVudCksIF9wYXJlbnRhZ2UpIDogX3BhcmVudGFnZSA/IFtfcGFyZW50YWdlLCBwYXJlbnRdIDogcGFyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBhIGNoaWxkIHdoZW4gaXQgaXMgcmVtb3ZlZCB2aWEge0BsaW5rICNyZW1vdmV9LlxuICAgKiBAcGFyYW0gcGFyZW50IFRoZSBwYXJlbnQgdG8gcmVtb3ZlXG4gICAqL1xuICBwcml2YXRlIF9yZW1vdmVQYXJlbnQocGFyZW50OiBTdWJzY3JpcHRpb24pIHtcbiAgICBjb25zdCB7IF9wYXJlbnRhZ2UgfSA9IHRoaXM7XG4gICAgaWYgKF9wYXJlbnRhZ2UgPT09IHBhcmVudCkge1xuICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkpIHtcbiAgICAgIGFyclJlbW92ZShfcGFyZW50YWdlLCBwYXJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgZmluYWxpemVyIGZyb20gdGhpcyBzdWJzY3JpcHRpb24gdGhhdCB3YXMgcHJldmlvdXNseSBhZGRlZCB3aXRoIHRoZSB7QGxpbmsgI2FkZH0gbWV0aG9kLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgYFN1YnNjcmlwdGlvbmAgaW5zdGFuY2VzLCB3aGVuIHVuc3Vic2NyaWJlZCwgd2lsbCBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGVtc2VsdmVzXG4gICAqIGZyb20gZXZlcnkgb3RoZXIgYFN1YnNjcmlwdGlvbmAgdGhleSBoYXZlIGJlZW4gYWRkZWQgdG8uIFRoaXMgbWVhbnMgdGhhdCB1c2luZyB0aGUgYHJlbW92ZWAgbWV0aG9kXG4gICAqIGlzIG5vdCBhIGNvbW1vbiB0aGluZyBhbmQgc2hvdWxkIGJlIHVzZWQgdGhvdWdodGZ1bGx5LlxuICAgKlxuICAgKiBJZiB5b3UgYWRkIHRoZSBzYW1lIGZpbmFsaXplciBpbnN0YW5jZSBvZiBhIGZ1bmN0aW9uIG9yIGFuIHVuc3Vic2NyaWJhYmxlIG9iamVjdCB0byBhIGBTdWJzY3JpcHRpb25gIGluc3RhbmNlXG4gICAqIG1vcmUgdGhhbiBvbmNlLCB5b3Ugd2lsbCBuZWVkIHRvIGNhbGwgYHJlbW92ZWAgdGhlIHNhbWUgbnVtYmVyIG9mIHRpbWVzIHRvIHJlbW92ZSBhbGwgaW5zdGFuY2VzLlxuICAgKlxuICAgKiBBbGwgZmluYWxpemVyIGluc3RhbmNlcyBhcmUgcmVtb3ZlZCB0byBmcmVlIHVwIG1lbW9yeSB1cG9uIHVuc3Vic2NyaXB0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gdGVhcmRvd24gVGhlIGZpbmFsaXplciB0byByZW1vdmUgZnJvbSB0aGlzIHN1YnNjcmlwdGlvblxuICAgKi9cbiAgcmVtb3ZlKHRlYXJkb3duOiBFeGNsdWRlPFRlYXJkb3duTG9naWMsIHZvaWQ+KTogdm9pZCB7XG4gICAgY29uc3QgeyBfZmluYWxpemVycyB9ID0gdGhpcztcbiAgICBfZmluYWxpemVycyAmJiBhcnJSZW1vdmUoX2ZpbmFsaXplcnMsIHRlYXJkb3duKTtcblxuICAgIGlmICh0ZWFyZG93biBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgdGVhcmRvd24uX3JlbW92ZVBhcmVudCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NVQlNDUklQVElPTiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3Vic2NyaXB0aW9uKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdWJzY3JpcHRpb24ge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uIHx8XG4gICAgKHZhbHVlICYmICdjbG9zZWQnIGluIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUucmVtb3ZlKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmFkZCkgJiYgaXNGdW5jdGlvbih2YWx1ZS51bnN1YnNjcmliZSkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGV4ZWNGaW5hbGl6ZXIoZmluYWxpemVyOiBVbnN1YnNjcmliYWJsZSB8ICgoKSA9PiB2b2lkKSkge1xuICBpZiAoaXNGdW5jdGlvbihmaW5hbGl6ZXIpKSB7XG4gICAgZmluYWxpemVyKCk7XG4gIH0gZWxzZSB7XG4gICAgZmluYWxpemVyLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IE9ic2VydmFibGVOb3RpZmljYXRpb24gfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBUaGUge0BsaW5rIEdsb2JhbENvbmZpZ30gb2JqZWN0IGZvciBSeEpTLiBJdCBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGluZ3NcbiAqIGxpa2UgaG93IHRvIHJlYWN0IG9uIHVuaGFuZGxlZCBlcnJvcnMuXG4gKi9cbmV4cG9ydCBjb25zdCBjb25maWc6IEdsb2JhbENvbmZpZyA9IHtcbiAgb25VbmhhbmRsZWRFcnJvcjogbnVsbCxcbiAgb25TdG9wcGVkTm90aWZpY2F0aW9uOiBudWxsLFxuICBQcm9taXNlOiB1bmRlZmluZWQsXG4gIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc6IGZhbHNlLFxuICB1c2VEZXByZWNhdGVkTmV4dENvbnRleHQ6IGZhbHNlLFxufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciBSeEpTLCB1c2VkIHRvIGNvbmZpZ3VyZSB0aGluZ3NcbiAqIGxpa2UgaG93IHRvIHJlYWN0IG9uIHVuaGFuZGxlZCBlcnJvcnMuIEFjY2Vzc2libGUgdmlhIHtAbGluayBjb25maWd9XG4gKiBvYmplY3QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIEEgcmVnaXN0cmF0aW9uIHBvaW50IGZvciB1bmhhbmRsZWQgZXJyb3JzIGZyb20gUnhKUy4gVGhlc2UgYXJlIGVycm9ycyB0aGF0XG4gICAqIGNhbm5vdCB3ZXJlIG5vdCBoYW5kbGVkIGJ5IGNvbnN1bWluZyBjb2RlIGluIHRoZSB1c3VhbCBzdWJzY3JpcHRpb24gcGF0aC4gRm9yXG4gICAqIGV4YW1wbGUsIGlmIHlvdSBoYXZlIHRoaXMgY29uZmlndXJlZCwgYW5kIHlvdSBzdWJzY3JpYmUgdG8gYW4gb2JzZXJ2YWJsZSB3aXRob3V0XG4gICAqIHByb3ZpZGluZyBhbiBlcnJvciBoYW5kbGVyLCBlcnJvcnMgZnJvbSB0aGF0IHN1YnNjcmlwdGlvbiB3aWxsIGVuZCB1cCBoZXJlLiBUaGlzXG4gICAqIHdpbGwgX2Fsd2F5c18gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5IG9uIGFub3RoZXIgam9iIGluIHRoZSBydW50aW1lLiBUaGlzIGlzIGJlY2F1c2VcbiAgICogd2UgZG8gbm90IHdhbnQgZXJyb3JzIHRocm93biBpbiB0aGlzIHVzZXItY29uZmlndXJlZCBoYW5kbGVyIHRvIGludGVyZmVyZSB3aXRoIHRoZVxuICAgKiBiZWhhdmlvciBvZiB0aGUgbGlicmFyeS5cbiAgICovXG4gIG9uVW5oYW5kbGVkRXJyb3I6ICgoZXJyOiBhbnkpID0+IHZvaWQpIHwgbnVsbDtcblxuICAvKipcbiAgICogQSByZWdpc3RyYXRpb24gcG9pbnQgZm9yIG5vdGlmaWNhdGlvbnMgdGhhdCBjYW5ub3QgYmUgc2VudCB0byBzdWJzY3JpYmVycyBiZWNhdXNlIHRoZXlcbiAgICogaGF2ZSBjb21wbGV0ZWQsIGVycm9yZWQgb3IgaGF2ZSBiZWVuIGV4cGxpY2l0bHkgdW5zdWJzY3JpYmVkLiBCeSBkZWZhdWx0LCBuZXh0LCBjb21wbGV0ZVxuICAgKiBhbmQgZXJyb3Igbm90aWZpY2F0aW9ucyBzZW50IHRvIHN0b3BwZWQgc3Vic2NyaWJlcnMgYXJlIG5vb3BzLiBIb3dldmVyLCBzb21ldGltZXMgY2FsbGVyc1xuICAgKiBtaWdodCB3YW50IGEgZGlmZmVyZW50IGJlaGF2aW9yLiBGb3IgZXhhbXBsZSwgd2l0aCBzb3VyY2VzIHRoYXQgYXR0ZW1wdCB0byByZXBvcnQgZXJyb3JzXG4gICAqIHRvIHN0b3BwZWQgc3Vic2NyaWJlcnMsIGEgY2FsbGVyIGNhbiBjb25maWd1cmUgUnhKUyB0byB0aHJvdyBhbiB1bmhhbmRsZWQgZXJyb3IgaW5zdGVhZC5cbiAgICogVGhpcyB3aWxsIF9hbHdheXNfIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseSBvbiBhbm90aGVyIGpvYiBpbiB0aGUgcnVudGltZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAqIHdlIGRvIG5vdCB3YW50IGVycm9ycyB0aHJvd24gaW4gdGhpcyB1c2VyLWNvbmZpZ3VyZWQgaGFuZGxlciB0byBpbnRlcmZlcmUgd2l0aCB0aGVcbiAgICogYmVoYXZpb3Igb2YgdGhlIGxpYnJhcnkuXG4gICAqL1xuICBvblN0b3BwZWROb3RpZmljYXRpb246ICgobm90aWZpY2F0aW9uOiBPYnNlcnZhYmxlTm90aWZpY2F0aW9uPGFueT4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4gdm9pZCkgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgcHJvbWlzZSBjb25zdHJ1Y3RvciB1c2VkIGJ5IGRlZmF1bHQgZm9yIHtAbGluayBPYnNlcnZhYmxlI3RvUHJvbWlzZSB0b1Byb21pc2V9IGFuZCB7QGxpbmsgT2JzZXJ2YWJsZSNmb3JFYWNoIGZvckVhY2h9XG4gICAqIG1ldGhvZHMuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIEFzIG9mIHZlcnNpb24gOCwgUnhKUyB3aWxsIG5vIGxvbmdlciBzdXBwb3J0IHRoaXMgc29ydCBvZiBpbmplY3Rpb24gb2YgYVxuICAgKiBQcm9taXNlIGNvbnN0cnVjdG9yLiBJZiB5b3UgbmVlZCBhIFByb21pc2UgaW1wbGVtZW50YXRpb24gb3RoZXIgdGhhbiBuYXRpdmUgcHJvbWlzZXMsXG4gICAqIHBsZWFzZSBwb2x5ZmlsbC9wYXRjaCBQcm9taXNlIGFzIHlvdSBzZWUgYXBwcm9wcmlhdGUuIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC5cbiAgICovXG4gIFByb21pc2U/OiBQcm9taXNlQ29uc3RydWN0b3JMaWtlO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0dXJucyBvbiBzeW5jaHJvbm91cyBlcnJvciByZXRocm93aW5nLCB3aGljaCBpcyBhIGRlcHJlY2F0ZWQgYmVoYXZpb3JcbiAgICogaW4gdjYgYW5kIGhpZ2hlci4gVGhpcyBiZWhhdmlvciBlbmFibGVzIGJhZCBwYXR0ZXJucyBsaWtlIHdyYXBwaW5nIGEgc3Vic2NyaWJlXG4gICAqIGNhbGwgaW4gYSB0cnkvY2F0Y2ggYmxvY2suIEl0IGFsc28gZW5hYmxlcyBwcm9kdWNlciBpbnRlcmZlcmVuY2UsIGEgbmFzdHkgYnVnXG4gICAqIHdoZXJlIGEgbXVsdGljYXN0IGNhbiBiZSBicm9rZW4gZm9yIGFsbCBvYnNlcnZlcnMgYnkgYSBkb3duc3RyZWFtIGNvbnN1bWVyIHdpdGhcbiAgICogYW4gdW5oYW5kbGVkIGVycm9yLiBETyBOT1QgVVNFIFRISVMgRkxBRyBVTkxFU1MgSVQnUyBORUVERUQgVE8gQlVZIFRJTUVcbiAgICogRk9SIE1JR1JBVElPTiBSRUFTT05TLlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBBcyBvZiB2ZXJzaW9uIDgsIFJ4SlMgd2lsbCBubyBsb25nZXIgc3VwcG9ydCBzeW5jaHJvbm91cyB0aHJvd2luZ1xuICAgKiBvZiB1bmhhbmRsZWQgZXJyb3JzLiBBbGwgZXJyb3JzIHdpbGwgYmUgdGhyb3duIG9uIGEgc2VwYXJhdGUgY2FsbCBzdGFjayB0byBwcmV2ZW50IGJhZFxuICAgKiBiZWhhdmlvcnMgZGVzY3JpYmVkIGFib3ZlLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gICAqL1xuICB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBlbmFibGVzIGFuIGFzLW9mLXlldCB1bmRvY3VtZW50ZWQgZmVhdHVyZSBmcm9tIHY1OiBUaGUgYWJpbGl0eSB0byBhY2Nlc3NcbiAgICogYHVuc3Vic2NyaWJlKClgIHZpYSBgdGhpc2AgY29udGV4dCBpbiBgbmV4dGAgZnVuY3Rpb25zIGNyZWF0ZWQgaW4gb2JzZXJ2ZXJzIHBhc3NlZFxuICAgKiB0byBgc3Vic2NyaWJlYC5cbiAgICpcbiAgICogVGhpcyBpcyBiZWluZyByZW1vdmVkIGJlY2F1c2UgdGhlIHBlcmZvcm1hbmNlIHdhcyBzZXZlcmVseSBwcm9ibGVtYXRpYywgYW5kIGl0IGNvdWxkIGFsc28gY2F1c2VcbiAgICogaXNzdWVzIHdoZW4gdHlwZXMgb3RoZXIgdGhhbiBQT0pPcyBhcmUgcGFzc2VkIHRvIHN1YnNjcmliZSBhcyBzdWJzY3JpYmVycywgYXMgdGhleSB3aWxsIGxpa2VseSBoYXZlXG4gICAqIHRoZWlyIGB0aGlzYCBjb250ZXh0IG92ZXJ3cml0dGVuLlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBBcyBvZiB2ZXJzaW9uIDgsIFJ4SlMgd2lsbCBubyBsb25nZXIgc3VwcG9ydCBhbHRlcmluZyB0aGVcbiAgICogY29udGV4dCBvZiBuZXh0IGZ1bmN0aW9ucyBwcm92aWRlZCBhcyBwYXJ0IG9mIGFuIG9ic2VydmVyIHRvIFN1YnNjcmliZS4gSW5zdGVhZCxcbiAgICogeW91IHdpbGwgaGF2ZSBhY2Nlc3MgdG8gYSBzdWJzY3JpcHRpb24gb3IgYSBzaWduYWwgb3IgdG9rZW4gdGhhdCB3aWxsIGFsbG93IHlvdSB0byBkbyB0aGluZ3MgbGlrZVxuICAgKiB1bnN1YnNjcmliZSBhbmQgdGVzdCBjbG9zZWQgc3RhdHVzLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gICAqL1xuICB1c2VEZXByZWNhdGVkTmV4dENvbnRleHQ6IGJvb2xlYW47XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBUaW1lckhhbmRsZSB9IGZyb20gJy4vdGltZXJIYW5kbGUnO1xudHlwZSBTZXRUaW1lb3V0RnVuY3Rpb24gPSAoaGFuZGxlcjogKCkgPT4gdm9pZCwgdGltZW91dD86IG51bWJlciwgLi4uYXJnczogYW55W10pID0+IFRpbWVySGFuZGxlO1xudHlwZSBDbGVhclRpbWVvdXRGdW5jdGlvbiA9IChoYW5kbGU6IFRpbWVySGFuZGxlKSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgVGltZW91dFByb3ZpZGVyIHtcbiAgc2V0VGltZW91dDogU2V0VGltZW91dEZ1bmN0aW9uO1xuICBjbGVhclRpbWVvdXQ6IENsZWFyVGltZW91dEZ1bmN0aW9uO1xuICBkZWxlZ2F0ZTpcbiAgICB8IHtcbiAgICAgICAgc2V0VGltZW91dDogU2V0VGltZW91dEZ1bmN0aW9uO1xuICAgICAgICBjbGVhclRpbWVvdXQ6IENsZWFyVGltZW91dEZ1bmN0aW9uO1xuICAgICAgfVxuICAgIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgdGltZW91dFByb3ZpZGVyOiBUaW1lb3V0UHJvdmlkZXIgPSB7XG4gIC8vIFdoZW4gYWNjZXNzaW5nIHRoZSBkZWxlZ2F0ZSwgdXNlIHRoZSB2YXJpYWJsZSByYXRoZXIgdGhhbiBgdGhpc2Agc28gdGhhdFxuICAvLyB0aGUgZnVuY3Rpb25zIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBiZWluZyBib3VuZCB0byB0aGUgcHJvdmlkZXIuXG4gIHNldFRpbWVvdXQoaGFuZGxlcjogKCkgPT4gdm9pZCwgdGltZW91dD86IG51bWJlciwgLi4uYXJncykge1xuICAgIGNvbnN0IHsgZGVsZWdhdGUgfSA9IHRpbWVvdXRQcm92aWRlcjtcbiAgICBpZiAoZGVsZWdhdGU/LnNldFRpbWVvdXQpIHtcbiAgICAgIHJldHVybiBkZWxlZ2F0ZS5zZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQsIC4uLmFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0LCAuLi5hcmdzKTtcbiAgfSxcbiAgY2xlYXJUaW1lb3V0KGhhbmRsZSkge1xuICAgIGNvbnN0IHsgZGVsZWdhdGUgfSA9IHRpbWVvdXRQcm92aWRlcjtcbiAgICByZXR1cm4gKGRlbGVnYXRlPy5jbGVhclRpbWVvdXQgfHwgY2xlYXJUaW1lb3V0KShoYW5kbGUgYXMgYW55KTtcbiAgfSxcbiAgZGVsZWdhdGU6IHVuZGVmaW5lZCxcbn07XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IHRpbWVvdXRQcm92aWRlciB9IGZyb20gJy4uL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXInO1xuXG4vKipcbiAqIEhhbmRsZXMgYW4gZXJyb3Igb24gYW5vdGhlciBqb2IgZWl0aGVyIHdpdGggdGhlIHVzZXItY29uZmlndXJlZCB7QGxpbmsgb25VbmhhbmRsZWRFcnJvcn0sXG4gKiBvciBieSB0aHJvd2luZyBpdCBvbiB0aGF0IG5ldyBqb2Igc28gaXQgY2FuIGJlIHBpY2tlZCB1cCBieSBgd2luZG93Lm9uZXJyb3JgLCBgcHJvY2Vzcy5vbignZXJyb3InKWAsIGV0Yy5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlcmUgaXMgYW4gZXJyb3IgdGhhdCBpcyBvdXQtb2YtYmFuZCB3aXRoIHRoZSBzdWJzY3JpcHRpb25cbiAqIG9yIHdoZW4gYW4gZXJyb3IgaGl0cyBhIHRlcm1pbmFsIGJvdW5kYXJ5IG9mIHRoZSBzdWJzY3JpcHRpb24gYW5kIG5vIGVycm9yIGhhbmRsZXIgd2FzIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSBlcnIgdGhlIGVycm9yIHRvIHJlcG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyOiBhbnkpIHtcbiAgdGltZW91dFByb3ZpZGVyLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IHsgb25VbmhhbmRsZWRFcnJvciB9ID0gY29uZmlnO1xuICAgIGlmIChvblVuaGFuZGxlZEVycm9yKSB7XG4gICAgICAvLyBFeGVjdXRlIHRoZSB1c2VyLWNvbmZpZ3VyZWQgZXJyb3IgaGFuZGxlci5cbiAgICAgIG9uVW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhyb3cgc28gaXQgaXMgcGlja2VkIHVwIGJ5IHRoZSBydW50aW1lJ3MgdW5jYXVnaHQgZXJyb3IgbWVjaGFuaXNtLlxuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfSk7XG59XG4iLCAiLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHkgKi9cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkgeyB9XG4iLCAiaW1wb3J0IHsgQ29tcGxldGVOb3RpZmljYXRpb24sIE5leHROb3RpZmljYXRpb24sIEVycm9yTm90aWZpY2F0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogQSBjb21wbGV0aW9uIG9iamVjdCBvcHRpbWl6ZWQgZm9yIG1lbW9yeSB1c2UgYW5kIGNyZWF0ZWQgdG8gYmUgdGhlXG4gKiBzYW1lIFwic2hhcGVcIiBhcyBvdGhlciBub3RpZmljYXRpb25zIGluIHY4LlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBDT01QTEVURV9OT1RJRklDQVRJT04gPSAoKCkgPT4gY3JlYXRlTm90aWZpY2F0aW9uKCdDJywgdW5kZWZpbmVkLCB1bmRlZmluZWQpIGFzIENvbXBsZXRlTm90aWZpY2F0aW9uKSgpO1xuXG4vKipcbiAqIEludGVybmFsIHVzZSBvbmx5LiBDcmVhdGVzIGFuIG9wdGltaXplZCBlcnJvciBub3RpZmljYXRpb24gdGhhdCBpcyB0aGUgc2FtZSBcInNoYXBlXCJcbiAqIGFzIG90aGVyIG5vdGlmaWNhdGlvbnMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yTm90aWZpY2F0aW9uKGVycm9yOiBhbnkpOiBFcnJvck5vdGlmaWNhdGlvbiB7XG4gIHJldHVybiBjcmVhdGVOb3RpZmljYXRpb24oJ0UnLCB1bmRlZmluZWQsIGVycm9yKSBhcyBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJuYWwgdXNlIG9ubHkuIENyZWF0ZXMgYW4gb3B0aW1pemVkIG5leHQgbm90aWZpY2F0aW9uIHRoYXQgaXMgdGhlIHNhbWUgXCJzaGFwZVwiXG4gKiBhcyBvdGhlciBub3RpZmljYXRpb25zLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Tm90aWZpY2F0aW9uPFQ+KHZhbHVlOiBUKSB7XG4gIHJldHVybiBjcmVhdGVOb3RpZmljYXRpb24oJ04nLCB2YWx1ZSwgdW5kZWZpbmVkKSBhcyBOZXh0Tm90aWZpY2F0aW9uPFQ+O1xufVxuXG4vKipcbiAqIEVuc3VyZXMgdGhhdCBhbGwgbm90aWZpY2F0aW9ucyBjcmVhdGVkIGludGVybmFsbHkgaGF2ZSB0aGUgc2FtZSBcInNoYXBlXCIgaW4gdjguXG4gKlxuICogVE9ETzogVGhpcyBpcyBvbmx5IGV4cG9ydGVkIHRvIHN1cHBvcnQgYSBjcmF6eSBsZWdhY3kgdGVzdCBpbiBgZ3JvdXBCeWAuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbihraW5kOiAnTicgfCAnRScgfCAnQycsIHZhbHVlOiBhbnksIGVycm9yOiBhbnkpIHtcbiAgcmV0dXJuIHtcbiAgICBraW5kLFxuICAgIHZhbHVlLFxuICAgIGVycm9yLFxuICB9O1xufVxuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmxldCBjb250ZXh0OiB7IGVycm9yVGhyb3duOiBib29sZWFuOyBlcnJvcjogYW55IH0gfCBudWxsID0gbnVsbDtcblxuLyoqXG4gKiBIYW5kbGVzIGRlYWxpbmcgd2l0aCBlcnJvcnMgZm9yIHN1cGVyLWdyb3NzIG1vZGUuIENyZWF0ZXMgYSBjb250ZXh0LCBpbiB3aGljaFxuICogYW55IHN5bmNocm9ub3VzbHkgdGhyb3duIGVycm9ycyB3aWxsIGJlIHBhc3NlZCB0byB7QGxpbmsgY2FwdHVyZUVycm9yfS4gV2hpY2hcbiAqIHdpbGwgcmVjb3JkIHRoZSBlcnJvciBzdWNoIHRoYXQgaXQgd2lsbCBiZSByZXRocm93biBhZnRlciB0aGUgY2FsbCBiYWNrIGlzIGNvbXBsZXRlLlxuICogVE9ETzogUmVtb3ZlIGluIHY4XG4gKiBAcGFyYW0gY2IgQW4gaW1tZWRpYXRlbHkgZXhlY3V0ZWQgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckNvbnRleHQoY2I6ICgpID0+IHZvaWQpIHtcbiAgaWYgKGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgY29uc3QgaXNSb290ID0gIWNvbnRleHQ7XG4gICAgaWYgKGlzUm9vdCkge1xuICAgICAgY29udGV4dCA9IHsgZXJyb3JUaHJvd246IGZhbHNlLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cbiAgICBjYigpO1xuICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgIGNvbnN0IHsgZXJyb3JUaHJvd24sIGVycm9yIH0gPSBjb250ZXh0ITtcbiAgICAgIGNvbnRleHQgPSBudWxsO1xuICAgICAgaWYgKGVycm9yVGhyb3duKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBnZW5lcmFsIG5vbi1kZXByZWNhdGVkIHBhdGggZm9yIGV2ZXJ5b25lIHRoYXRcbiAgICAvLyBpc24ndCBjcmF6eSBlbm91Z2ggdG8gdXNlIHN1cGVyLWdyb3NzIG1vZGUgKHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpXG4gICAgY2IoKTtcbiAgfVxufVxuXG4vKipcbiAqIENhcHR1cmVzIGVycm9ycyBvbmx5IGluIHN1cGVyLWdyb3NzIG1vZGUuXG4gKiBAcGFyYW0gZXJyIHRoZSBlcnJvciB0byBjYXB0dXJlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXB0dXJlRXJyb3IoZXJyOiBhbnkpIHtcbiAgaWYgKGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nICYmIGNvbnRleHQpIHtcbiAgICBjb250ZXh0LmVycm9yVGhyb3duID0gdHJ1ZTtcbiAgICBjb250ZXh0LmVycm9yID0gZXJyO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IE9ic2VydmVyLCBPYnNlcnZhYmxlTm90aWZpY2F0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBpc1N1YnNjcmlwdGlvbiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgcmVwb3J0VW5oYW5kbGVkRXJyb3IgfSBmcm9tICcuL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3InO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbC9ub29wJztcbmltcG9ydCB7IG5leHROb3RpZmljYXRpb24sIGVycm9yTm90aWZpY2F0aW9uLCBDT01QTEVURV9OT1RJRklDQVRJT04gfSBmcm9tICcuL05vdGlmaWNhdGlvbkZhY3Rvcmllcyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXInO1xuaW1wb3J0IHsgY2FwdHVyZUVycm9yIH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG5cbi8qKlxuICogSW1wbGVtZW50cyB0aGUge0BsaW5rIE9ic2VydmVyfSBpbnRlcmZhY2UgYW5kIGV4dGVuZHMgdGhlXG4gKiB7QGxpbmsgU3Vic2NyaXB0aW9ufSBjbGFzcy4gV2hpbGUgdGhlIHtAbGluayBPYnNlcnZlcn0gaXMgdGhlIHB1YmxpYyBBUEkgZm9yXG4gKiBjb25zdW1pbmcgdGhlIHZhbHVlcyBvZiBhbiB7QGxpbmsgT2JzZXJ2YWJsZX0sIGFsbCBPYnNlcnZlcnMgZ2V0IGNvbnZlcnRlZCB0b1xuICogYSBTdWJzY3JpYmVyLCBpbiBvcmRlciB0byBwcm92aWRlIFN1YnNjcmlwdGlvbi1saWtlIGNhcGFiaWxpdGllcyBzdWNoIGFzXG4gKiBgdW5zdWJzY3JpYmVgLiBTdWJzY3JpYmVyIGlzIGEgY29tbW9uIHR5cGUgaW4gUnhKUywgYW5kIGNydWNpYWwgZm9yXG4gKiBpbXBsZW1lbnRpbmcgb3BlcmF0b3JzLCBidXQgaXQgaXMgcmFyZWx5IHVzZWQgYXMgYSBwdWJsaWMgQVBJLlxuICpcbiAqIEBjbGFzcyBTdWJzY3JpYmVyPFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaXB0aW9uIGltcGxlbWVudHMgT2JzZXJ2ZXI8VD4ge1xuICAvKipcbiAgICogQSBzdGF0aWMgZmFjdG9yeSBmb3IgYSBTdWJzY3JpYmVyLCBnaXZlbiBhIChwb3RlbnRpYWxseSBwYXJ0aWFsKSBkZWZpbml0aW9uXG4gICAqIG9mIGFuIE9ic2VydmVyLlxuICAgKiBAcGFyYW0gbmV4dCBUaGUgYG5leHRgIGNhbGxiYWNrIG9mIGFuIE9ic2VydmVyLlxuICAgKiBAcGFyYW0gZXJyb3IgVGhlIGBlcnJvcmAgY2FsbGJhY2sgb2YgYW5cbiAgICogT2JzZXJ2ZXIuXG4gICAqIEBwYXJhbSBjb21wbGV0ZSBUaGUgYGNvbXBsZXRlYCBjYWxsYmFjayBvZiBhblxuICAgKiBPYnNlcnZlci5cbiAgICogQHJldHVybiBBIFN1YnNjcmliZXIgd3JhcHBpbmcgdGhlIChwYXJ0aWFsbHkgZGVmaW5lZClcbiAgICogT2JzZXJ2ZXIgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIGFyZ3VtZW50cy5cbiAgICogQG5vY29sbGFwc2VcbiAgICogQGRlcHJlY2F0ZWQgRG8gbm90IHVzZS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBUaGVyZSBpcyBubyByZXBsYWNlbWVudCBmb3IgdGhpc1xuICAgKiBtZXRob2QsIGFuZCB0aGVyZSBpcyBubyByZWFzb24gdG8gYmUgY3JlYXRpbmcgaW5zdGFuY2VzIG9mIGBTdWJzY3JpYmVyYCBkaXJlY3RseS5cbiAgICogSWYgeW91IGhhdmUgYSBzcGVjaWZpYyB1c2UgY2FzZSwgcGxlYXNlIGZpbGUgYW4gaXNzdWUuXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlPFQ+KG5leHQ/OiAoeD86IFQpID0+IHZvaWQsIGVycm9yPzogKGU/OiBhbnkpID0+IHZvaWQsIGNvbXBsZXRlPzogKCkgPT4gdm9pZCk6IFN1YnNjcmliZXI8VD4ge1xuICAgIHJldHVybiBuZXcgU2FmZVN1YnNjcmliZXIobmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgcHJvdGVjdGVkIGlzU3RvcHBlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIHByb3RlY3RlZCBkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxhbnk+IHwgT2JzZXJ2ZXI8YW55PjsgLy8gdGhpcyBgYW55YCBpcyB0aGUgZXNjYXBlIGhhdGNoIHRvIGVyYXNlIGV4dHJhIHR5cGUgcGFyYW0gKGUuZy4gUilcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguXG4gICAqIFRoZXJlIGlzIG5vIHJlYXNvbiB0byBkaXJlY3RseSBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgU3Vic2NyaWJlci4gVGhpcyB0eXBlIGlzIGV4cG9ydGVkIGZvciB0eXBpbmdzIHJlYXNvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbj86IFN1YnNjcmliZXI8YW55PiB8IE9ic2VydmVyPGFueT4pIHtcbiAgICBzdXBlcigpO1xuICAgIGlmIChkZXN0aW5hdGlvbikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgLy8gQXV0b21hdGljYWxseSBjaGFpbiBzdWJzY3JpcHRpb25zIHRvZ2V0aGVyIGhlcmUuXG4gICAgICAvLyBpZiBkZXN0aW5hdGlvbiBpcyBhIFN1YnNjcmlwdGlvbiwgdGhlbiBpdCBpcyBhIFN1YnNjcmliZXIuXG4gICAgICBpZiAoaXNTdWJzY3JpcHRpb24oZGVzdGluYXRpb24pKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uLmFkZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IEVNUFRZX09CU0VSVkVSO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIG5vdGlmaWNhdGlvbnMgb2YgdHlwZSBgbmV4dGAgZnJvbVxuICAgKiB0aGUgT2JzZXJ2YWJsZSwgd2l0aCBhIHZhbHVlLiBUaGUgT2JzZXJ2YWJsZSBtYXkgY2FsbCB0aGlzIG1ldGhvZCAwIG9yIG1vcmVcbiAgICogdGltZXMuXG4gICAqIEBwYXJhbSB7VH0gW3ZhbHVlXSBUaGUgYG5leHRgIHZhbHVlLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgbmV4dCh2YWx1ZT86IFQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24obmV4dE5vdGlmaWNhdGlvbih2YWx1ZSksIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uZXh0KHZhbHVlISk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGNhbGxiYWNrIHRvIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBvZiB0eXBlIGBlcnJvcmAgZnJvbVxuICAgKiB0aGUgT2JzZXJ2YWJsZSwgd2l0aCBhbiBhdHRhY2hlZCBgRXJyb3JgLiBOb3RpZmllcyB0aGUgT2JzZXJ2ZXIgdGhhdFxuICAgKiB0aGUgT2JzZXJ2YWJsZSBoYXMgZXhwZXJpZW5jZWQgYW4gZXJyb3IgY29uZGl0aW9uLlxuICAgKiBAcGFyYW0ge2FueX0gW2Vycl0gVGhlIGBlcnJvcmAgZXhjZXB0aW9uLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZXJyb3IoZXJyPzogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKGVycm9yTm90aWZpY2F0aW9uKGVyciksIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIGEgdmFsdWVsZXNzIG5vdGlmaWNhdGlvbiBvZiB0eXBlXG4gICAqIGBjb21wbGV0ZWAgZnJvbSB0aGUgT2JzZXJ2YWJsZS4gTm90aWZpZXMgdGhlIE9ic2VydmVyIHRoYXQgdGhlIE9ic2VydmFibGVcbiAgICogaGFzIGZpbmlzaGVkIHNlbmRpbmcgcHVzaC1iYXNlZCBub3RpZmljYXRpb25zLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKENPTVBMRVRFX05PVElGSUNBVElPTiwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2NvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgc3VwZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBudWxsITtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9lcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGJpbmQgaXMgY2FwdHVyZWQgaGVyZSBiZWNhdXNlIHdlIHdhbnQgdG8gYmUgYWJsZSB0byBoYXZlXG4gKiBjb21wYXRpYmlsaXR5IHdpdGggbW9ub2lkIGxpYnJhcmllcyB0aGF0IHRlbmQgdG8gdXNlIGEgbWV0aG9kIG5hbWVkXG4gKiBgYmluZGAuIEluIHBhcnRpY3VsYXIsIGEgbGlicmFyeSBjYWxsZWQgTW9uaW8gcmVxdWlyZXMgdGhpcy5cbiAqL1xuY29uc3QgX2JpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZDtcblxuZnVuY3Rpb24gYmluZDxGbiBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihmbjogRm4sIHRoaXNBcmc6IGFueSk6IEZuIHtcbiAgcmV0dXJuIF9iaW5kLmNhbGwoZm4sIHRoaXNBcmcpO1xufVxuXG4vKipcbiAqIEludGVybmFsIG9wdGltaXphdGlvbiBvbmx5LCBETyBOT1QgRVhQT1NFLlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIENvbnN1bWVyT2JzZXJ2ZXI8VD4gaW1wbGVtZW50cyBPYnNlcnZlcjxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFydGlhbE9ic2VydmVyOiBQYXJ0aWFsPE9ic2VydmVyPFQ+Pikge31cblxuICBuZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgY29uc3QgeyBwYXJ0aWFsT2JzZXJ2ZXIgfSA9IHRoaXM7XG4gICAgaWYgKHBhcnRpYWxPYnNlcnZlci5uZXh0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXJyb3IoZXJyOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBhcnRpYWxPYnNlcnZlciB9ID0gdGhpcztcbiAgICBpZiAocGFydGlhbE9ic2VydmVyLmVycm9yKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICBjb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBhcnRpYWxPYnNlcnZlciB9ID0gdGhpcztcbiAgICBpZiAocGFydGlhbE9ic2VydmVyLmNvbXBsZXRlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZmVTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIG9ic2VydmVyT3JOZXh0PzogUGFydGlhbDxPYnNlcnZlcjxUPj4gfCAoKHZhbHVlOiBUKSA9PiB2b2lkKSB8IG51bGwsXG4gICAgZXJyb3I/OiAoKGU/OiBhbnkpID0+IHZvaWQpIHwgbnVsbCxcbiAgICBjb21wbGV0ZT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGxldCBwYXJ0aWFsT2JzZXJ2ZXI6IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+O1xuICAgIGlmIChpc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSB8fCAhb2JzZXJ2ZXJPck5leHQpIHtcbiAgICAgIC8vIFRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uLCBub3QgYW4gb2JzZXJ2ZXIuIFRoZSBuZXh0XG4gICAgICAvLyB0d28gYXJndW1lbnRzICpjb3VsZCogYmUgb2JzZXJ2ZXJzLCBvciB0aGV5IGNvdWxkIGJlIGVtcHR5LlxuICAgICAgcGFydGlhbE9ic2VydmVyID0ge1xuICAgICAgICBuZXh0OiAob2JzZXJ2ZXJPck5leHQgPz8gdW5kZWZpbmVkKSBhcyAoKCh2YWx1ZTogVCkgPT4gdm9pZCkgfCB1bmRlZmluZWQpLFxuICAgICAgICBlcnJvcjogZXJyb3IgPz8gdW5kZWZpbmVkLFxuICAgICAgICBjb21wbGV0ZTogY29tcGxldGUgPz8gdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgcGFydGlhbCBvYnNlcnZlci5cbiAgICAgIGxldCBjb250ZXh0OiBhbnk7XG4gICAgICBpZiAodGhpcyAmJiBjb25maWcudXNlRGVwcmVjYXRlZE5leHRDb250ZXh0KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYSBkZXByZWNhdGVkIHBhdGggdGhhdCBtYWRlIGB0aGlzLnVuc3Vic2NyaWJlKClgIGF2YWlsYWJsZSBpblxuICAgICAgICAvLyBuZXh0IGhhbmRsZXIgZnVuY3Rpb25zIHBhc3NlZCB0byBzdWJzY3JpYmUuIFRoaXMgb25seSBleGlzdHMgYmVoaW5kIGEgZmxhZ1xuICAgICAgICAvLyBub3csIGFzIGl0IGlzICp2ZXJ5KiBzbG93LlxuICAgICAgICBjb250ZXh0ID0gT2JqZWN0LmNyZWF0ZShvYnNlcnZlck9yTmV4dCk7XG4gICAgICAgIGNvbnRleHQudW5zdWJzY3JpYmUgPSAoKSA9PiB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IHtcbiAgICAgICAgICBuZXh0OiBvYnNlcnZlck9yTmV4dC5uZXh0ICYmIGJpbmQob2JzZXJ2ZXJPck5leHQubmV4dCwgY29udGV4dCksXG4gICAgICAgICAgZXJyb3I6IG9ic2VydmVyT3JOZXh0LmVycm9yICYmIGJpbmQob2JzZXJ2ZXJPck5leHQuZXJyb3IsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbXBsZXRlOiBvYnNlcnZlck9yTmV4dC5jb21wbGV0ZSAmJiBiaW5kKG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlLCBjb250ZXh0KSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZSBcIm5vcm1hbFwiIHBhdGguIEp1c3QgdXNlIHRoZSBwYXJ0aWFsIG9ic2VydmVyIGRpcmVjdGx5LlxuICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSBvYnNlcnZlck9yTmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXcmFwIHRoZSBwYXJ0aWFsIG9ic2VydmVyIHRvIGVuc3VyZSBpdCdzIGEgZnVsbCBvYnNlcnZlciwgYW5kXG4gICAgLy8gbWFrZSBzdXJlIHByb3BlciBlcnJvciBoYW5kbGluZyBpcyBhY2NvdW50ZWQgZm9yLlxuICAgIHRoaXMuZGVzdGluYXRpb24gPSBuZXcgQ29uc3VtZXJPYnNlcnZlcihwYXJ0aWFsT2JzZXJ2ZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yOiBhbnkpIHtcbiAgaWYgKGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgY2FwdHVyZUVycm9yKGVycm9yKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZGVhbCBwYXRoLCB3ZSByZXBvcnQgdGhpcyBhcyBhbiB1bmhhbmRsZWQgZXJyb3IsXG4gICAgLy8gd2hpY2ggaXMgdGhyb3duIG9uIGEgbmV3IGNhbGwgc3RhY2suXG4gICAgcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICB9XG59XG5cbi8qKlxuICogQW4gZXJyb3IgaGFuZGxlciB1c2VkIHdoZW4gbm8gZXJyb3IgaGFuZGxlciB3YXMgc3VwcGxpZWRcbiAqIHRvIHRoZSBTYWZlU3Vic2NyaWJlciAtLSBtZWFuaW5nIG5vIGVycm9yIGhhbmRsZXIgd2FzIHN1cHBsaWVkXG4gKiBkbyB0aGUgYHN1YnNjcmliZWAgY2FsbCBvbiBvdXIgb2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSBlcnIgVGhlIGVycm9yIHRvIGhhbmRsZVxuICovXG5mdW5jdGlvbiBkZWZhdWx0RXJyb3JIYW5kbGVyKGVycjogYW55KSB7XG4gIHRocm93IGVycjtcbn1cblxuLyoqXG4gKiBBIGhhbmRsZXIgZm9yIG5vdGlmaWNhdGlvbnMgdGhhdCBjYW5ub3QgYmUgc2VudCB0byBhIHN0b3BwZWQgc3Vic2NyaWJlci5cbiAqIEBwYXJhbSBub3RpZmljYXRpb24gVGhlIG5vdGlmaWNhdGlvbiBiZWluZyBzZW50XG4gKiBAcGFyYW0gc3Vic2NyaWJlciBUaGUgc3RvcHBlZCBzdWJzY3JpYmVyXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBPYnNlcnZhYmxlTm90aWZpY2F0aW9uPGFueT4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55Pikge1xuICBjb25zdCB7IG9uU3RvcHBlZE5vdGlmaWNhdGlvbiB9ID0gY29uZmlnO1xuICBvblN0b3BwZWROb3RpZmljYXRpb24gJiYgdGltZW91dFByb3ZpZGVyLnNldFRpbWVvdXQoKCkgPT4gb25TdG9wcGVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgc3Vic2NyaWJlcikpO1xufVxuXG4vKipcbiAqIFRoZSBvYnNlcnZlciB1c2VkIGFzIGEgc3R1YiBmb3Igc3Vic2NyaXB0aW9ucyB3aGVyZSB0aGUgdXNlciBkaWQgbm90XG4gKiBwYXNzIGFueSBhcmd1bWVudHMgdG8gYHN1YnNjcmliZWAuIENvbWVzIHdpdGggdGhlIGRlZmF1bHQgZXJyb3IgaGFuZGxpbmdcbiAqIGJlaGF2aW9yLlxuICovXG5leHBvcnQgY29uc3QgRU1QVFlfT0JTRVJWRVI6IFJlYWRvbmx5PE9ic2VydmVyPGFueT4+ICYgeyBjbG9zZWQ6IHRydWUgfSA9IHtcbiAgY2xvc2VkOiB0cnVlLFxuICBuZXh0OiBub29wLFxuICBlcnJvcjogZGVmYXVsdEVycm9ySGFuZGxlcixcbiAgY29tcGxldGU6IG5vb3AsXG59O1xuIiwgIi8qKlxuICogU3ltYm9sLm9ic2VydmFibGUgb3IgYSBzdHJpbmcgXCJAQG9ic2VydmFibGVcIi4gVXNlZCBmb3IgaW50ZXJvcFxuICpcbiAqIEBkZXByZWNhdGVkIFdlIHdpbGwgbm8gbG9uZ2VyIGJlIGV4cG9ydGluZyB0aGlzIHN5bWJvbCBpbiB1cGNvbWluZyB2ZXJzaW9ucyBvZiBSeEpTLlxuICogSW5zdGVhZCBwb2x5ZmlsbCBhbmQgdXNlIFN5bWJvbC5vYnNlcnZhYmxlIGRpcmVjdGx5ICpvciogdXNlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3N5bWJvbC1vYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBjb25zdCBvYnNlcnZhYmxlOiBzdHJpbmcgfCBzeW1ib2wgPSAoKCkgPT4gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLm9ic2VydmFibGUpIHx8ICdAQG9ic2VydmFibGUnKSgpO1xuIiwgIi8qKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyBvbmUgcGFyYW1ldGVyIGFuZCBqdXN0IHJldHVybnMgaXQuIFNpbXBseSBwdXQsXG4gKiB0aGlzIGlzIGxpa2UgYDxUPih4OiBUKTogVCA9PiB4YC5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIFRoaXMgaXMgdXNlZnVsIGluIHNvbWUgY2FzZXMgd2hlbiB1c2luZyB0aGluZ3MgbGlrZSBgbWVyZ2VNYXBgXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlLCBtYXAsIHJhbmdlLCBtZXJnZU1hcCwgaWRlbnRpdHkgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBzb3VyY2UkID0gaW50ZXJ2YWwoMTAwMCkucGlwZSh0YWtlKDUpKTtcbiAqXG4gKiBjb25zdCByZXN1bHQkID0gc291cmNlJC5waXBlKFxuICogICBtYXAoaSA9PiByYW5nZShpKSksXG4gKiAgIG1lcmdlTWFwKGlkZW50aXR5KSAvLyBzYW1lIGFzIG1lcmdlTWFwKHggPT4geClcbiAqICk7XG4gKlxuICogcmVzdWx0JC5zdWJzY3JpYmUoe1xuICogICBuZXh0OiBjb25zb2xlLmxvZ1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBPciB3aGVuIHlvdSB3YW50IHRvIHNlbGVjdGl2ZWx5IGFwcGx5IGFuIG9wZXJhdG9yXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCB0YWtlLCBpZGVudGl0eSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IHNob3VsZExpbWl0ID0gKCkgPT4gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAqXG4gKiBjb25zdCBzb3VyY2UkID0gaW50ZXJ2YWwoMTAwMCk7XG4gKlxuICogY29uc3QgcmVzdWx0JCA9IHNvdXJjZSQucGlwZShzaG91bGRMaW1pdCgpID8gdGFrZSg1KSA6IGlkZW50aXR5KTtcbiAqXG4gKiByZXN1bHQkLnN1YnNjcmliZSh7XG4gKiAgIG5leHQ6IGNvbnNvbGUubG9nXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB4IEFueSB2YWx1ZSB0aGF0IGlzIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb25cbiAqIEByZXR1cm5zIFRoZSB2YWx1ZSBwYXNzZWQgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciB0byB0aGlzIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTxUPih4OiBUKTogVCB7XG4gIHJldHVybiB4O1xufVxuIiwgImltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi9pZGVudGl0eSc7XG5pbXBvcnQgeyBVbmFyeUZ1bmN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGlwZSgpOiB0eXBlb2YgaWRlbnRpdHk7XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBPihmbjE6IFVuYXJ5RnVuY3Rpb248VCwgQT4pOiBVbmFyeUZ1bmN0aW9uPFQsIEE+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQj4oZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LCBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4pOiBVbmFyeUZ1bmN0aW9uPFQsIEI+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQz4oZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LCBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPik6IFVuYXJ5RnVuY3Rpb248VCwgQz47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBEPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEQ+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRT4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEU+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRj4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj5cbik6IFVuYXJ5RnVuY3Rpb248VCwgRj47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGLCBHPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPixcbiAgZm43OiBVbmFyeUZ1bmN0aW9uPEYsIEc+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEc+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRiwgRywgSD4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj4sXG4gIGZuNzogVW5hcnlGdW5jdGlvbjxGLCBHPixcbiAgZm44OiBVbmFyeUZ1bmN0aW9uPEcsIEg+XG4pOiBVbmFyeUZ1bmN0aW9uPFQsIEg+O1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8VCwgQSwgQiwgQywgRCwgRSwgRiwgRywgSCwgST4oXG4gIGZuMTogVW5hcnlGdW5jdGlvbjxULCBBPixcbiAgZm4yOiBVbmFyeUZ1bmN0aW9uPEEsIEI+LFxuICBmbjM6IFVuYXJ5RnVuY3Rpb248QiwgQz4sXG4gIGZuNDogVW5hcnlGdW5jdGlvbjxDLCBEPixcbiAgZm41OiBVbmFyeUZ1bmN0aW9uPEQsIEU+LFxuICBmbjY6IFVuYXJ5RnVuY3Rpb248RSwgRj4sXG4gIGZuNzogVW5hcnlGdW5jdGlvbjxGLCBHPixcbiAgZm44OiBVbmFyeUZ1bmN0aW9uPEcsIEg+LFxuICBmbjk6IFVuYXJ5RnVuY3Rpb248SCwgST5cbik6IFVuYXJ5RnVuY3Rpb248VCwgST47XG5leHBvcnQgZnVuY3Rpb24gcGlwZTxULCBBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgZm4xOiBVbmFyeUZ1bmN0aW9uPFQsIEE+LFxuICBmbjI6IFVuYXJ5RnVuY3Rpb248QSwgQj4sXG4gIGZuMzogVW5hcnlGdW5jdGlvbjxCLCBDPixcbiAgZm40OiBVbmFyeUZ1bmN0aW9uPEMsIEQ+LFxuICBmbjU6IFVuYXJ5RnVuY3Rpb248RCwgRT4sXG4gIGZuNjogVW5hcnlGdW5jdGlvbjxFLCBGPixcbiAgZm43OiBVbmFyeUZ1bmN0aW9uPEYsIEc+LFxuICBmbjg6IFVuYXJ5RnVuY3Rpb248RywgSD4sXG4gIGZuOTogVW5hcnlGdW5jdGlvbjxILCBJPixcbiAgLi4uZm5zOiBVbmFyeUZ1bmN0aW9uPGFueSwgYW55PltdXG4pOiBVbmFyeUZ1bmN0aW9uPFQsIHVua25vd24+O1xuXG4vKipcbiAqIHBpcGUoKSBjYW4gYmUgY2FsbGVkIG9uIG9uZSBvciBtb3JlIGZ1bmN0aW9ucywgZWFjaCBvZiB3aGljaCBjYW4gdGFrZSBvbmUgYXJndW1lbnQgKFwiVW5hcnlGdW5jdGlvblwiKVxuICogYW5kIHVzZXMgaXQgdG8gcmV0dXJuIGEgdmFsdWUuXG4gKiBJdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBvbmUgYXJndW1lbnQsIHBhc3NlcyBpdCB0byB0aGUgZmlyc3QgVW5hcnlGdW5jdGlvbiwgYW5kIHRoZW5cbiAqIHBhc3NlcyB0aGUgcmVzdWx0IHRvIHRoZSBuZXh0IG9uZSwgcGFzc2VzIHRoYXQgcmVzdWx0IHRvIHRoZSBuZXh0IG9uZSwgYW5kIHNvIG9uLiAgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwaXBlKC4uLmZuczogQXJyYXk8VW5hcnlGdW5jdGlvbjxhbnksIGFueT4+KTogVW5hcnlGdW5jdGlvbjxhbnksIGFueT4ge1xuICByZXR1cm4gcGlwZUZyb21BcnJheShmbnMpO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gcGlwZUZyb21BcnJheTxULCBSPihmbnM6IEFycmF5PFVuYXJ5RnVuY3Rpb248VCwgUj4+KTogVW5hcnlGdW5jdGlvbjxULCBSPiB7XG4gIGlmIChmbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5IGFzIFVuYXJ5RnVuY3Rpb248YW55LCBhbnk+O1xuICB9XG5cbiAgaWYgKGZucy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZm5zWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHBpcGVkKGlucHV0OiBUKTogUiB7XG4gICAgcmV0dXJuIGZucy5yZWR1Y2UoKHByZXY6IGFueSwgZm46IFVuYXJ5RnVuY3Rpb248VCwgUj4pID0+IGZuKHByZXYpLCBpbnB1dCBhcyBhbnkpO1xuICB9O1xufVxuIiwgImltcG9ydCB7IE9wZXJhdG9yIH0gZnJvbSAnLi9PcGVyYXRvcic7XG5pbXBvcnQgeyBTYWZlU3Vic2NyaWJlciwgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBpc1N1YnNjcmlwdGlvbiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgVGVhcmRvd25Mb2dpYywgT3BlcmF0b3JGdW5jdGlvbiwgU3Vic2NyaWJhYmxlLCBPYnNlcnZlciB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHsgcGlwZUZyb21BcnJheSB9IGZyb20gJy4vdXRpbC9waXBlJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcblxuLyoqXG4gKiBBIHJlcHJlc2VudGF0aW9uIG9mIGFueSBzZXQgb2YgdmFsdWVzIG92ZXIgYW55IGFtb3VudCBvZiB0aW1lLiBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIGJ1aWxkaW5nIGJsb2NrXG4gKiBvZiBSeEpTLlxuICpcbiAqIEBjbGFzcyBPYnNlcnZhYmxlPFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlPFQ+IGltcGxlbWVudHMgU3Vic2NyaWJhYmxlPFQ+IHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LlxuICAgKi9cbiAgc291cmNlOiBPYnNlcnZhYmxlPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LlxuICAgKi9cbiAgb3BlcmF0b3I6IE9wZXJhdG9yPGFueSwgVD4gfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJzY3JpYmUgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIE9ic2VydmFibGUgaXNcbiAgICogaW5pdGlhbGx5IHN1YnNjcmliZWQgdG8uIFRoaXMgZnVuY3Rpb24gaXMgZ2l2ZW4gYSBTdWJzY3JpYmVyLCB0byB3aGljaCBuZXcgdmFsdWVzXG4gICAqIGNhbiBiZSBgbmV4dGBlZCwgb3IgYW4gYGVycm9yYCBtZXRob2QgY2FuIGJlIGNhbGxlZCB0byByYWlzZSBhbiBlcnJvciwgb3JcbiAgICogYGNvbXBsZXRlYCBjYW4gYmUgY2FsbGVkIHRvIG5vdGlmeSBvZiBhIHN1Y2Nlc3NmdWwgY29tcGxldGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHN1YnNjcmliZT86ICh0aGlzOiBPYnNlcnZhYmxlPFQ+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiBUZWFyZG93bkxvZ2ljKSB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhBQ0s6IFNpbmNlIFR5cGVTY3JpcHQgaW5oZXJpdHMgc3RhdGljIHByb3BlcnRpZXMgdG9vLCB3ZSBoYXZlIHRvXG4gIC8vIGZpZ2h0IGFnYWluc3QgVHlwZVNjcmlwdCBoZXJlIHNvIFN1YmplY3QgY2FuIGhhdmUgYSBkaWZmZXJlbnQgc3RhdGljIGNyZWF0ZSBzaWduYXR1cmVcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgT2JzZXJ2YWJsZSBieSBjYWxsaW5nIHRoZSBPYnNlcnZhYmxlIGNvbnN0cnVjdG9yXG4gICAqIEBvd25lciBPYnNlcnZhYmxlXG4gICAqIEBtZXRob2QgY3JlYXRlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YnNjcmliZT8gdGhlIHN1YnNjcmliZXIgZnVuY3Rpb24gdG8gYmUgcGFzc2VkIHRvIHRoZSBPYnNlcnZhYmxlIGNvbnN0cnVjdG9yXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IGEgbmV3IG9ic2VydmFibGVcbiAgICogQG5vY29sbGFwc2VcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBuZXcgT2JzZXJ2YWJsZSgpYCBpbnN0ZWFkLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlOiAoLi4uYXJnczogYW55W10pID0+IGFueSA9IDxUPihzdWJzY3JpYmU/OiAoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4gVGVhcmRvd25Mb2dpYykgPT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPihzdWJzY3JpYmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE9ic2VydmFibGUsIHdpdGggdGhpcyBPYnNlcnZhYmxlIGluc3RhbmNlIGFzIHRoZSBzb3VyY2UsIGFuZCB0aGUgcGFzc2VkXG4gICAqIG9wZXJhdG9yIGRlZmluZWQgYXMgdGhlIG5ldyBvYnNlcnZhYmxlJ3Mgb3BlcmF0b3IuXG4gICAqIEBtZXRob2QgbGlmdFxuICAgKiBAcGFyYW0gb3BlcmF0b3IgdGhlIG9wZXJhdG9yIGRlZmluaW5nIHRoZSBvcGVyYXRpb24gdG8gdGFrZSBvbiB0aGUgb2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIGEgbmV3IG9ic2VydmFibGUgd2l0aCB0aGUgT3BlcmF0b3IgYXBwbGllZFxuICAgKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC5cbiAgICogSWYgeW91IGhhdmUgaW1wbGVtZW50ZWQgYW4gb3BlcmF0b3IgdXNpbmcgYGxpZnRgLCBpdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSBjcmVhdGUgYW5cbiAgICogb3BlcmF0b3IgYnkgc2ltcGx5IHJldHVybmluZyBgbmV3IE9ic2VydmFibGUoKWAgZGlyZWN0bHkuIFNlZSBcIkNyZWF0aW5nIG5ldyBvcGVyYXRvcnMgZnJvbVxuICAgKiBzY3JhdGNoXCIgc2VjdGlvbiBoZXJlOiBodHRwczovL3J4anMuZGV2L2d1aWRlL29wZXJhdG9yc1xuICAgKi9cbiAgbGlmdDxSPihvcGVyYXRvcj86IE9wZXJhdG9yPFQsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPFI+KCk7XG4gICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgIG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxuXG4gIHN1YnNjcmliZShvYnNlcnZlck9yTmV4dD86IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+IHwgKCh2YWx1ZTogVCkgPT4gdm9pZCkpOiBTdWJzY3JpcHRpb247XG4gIC8qKiBAZGVwcmVjYXRlZCBJbnN0ZWFkIG9mIHBhc3Npbmcgc2VwYXJhdGUgY2FsbGJhY2sgYXJndW1lbnRzLCB1c2UgYW4gb2JzZXJ2ZXIgYXJndW1lbnQuIFNpZ25hdHVyZXMgdGFraW5nIHNlcGFyYXRlIGNhbGxiYWNrIGFyZ3VtZW50cyB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3N1YnNjcmliZS1hcmd1bWVudHMgKi9cbiAgc3Vic2NyaWJlKG5leHQ/OiAoKHZhbHVlOiBUKSA9PiB2b2lkKSB8IG51bGwsIGVycm9yPzogKChlcnJvcjogYW55KSA9PiB2b2lkKSB8IG51bGwsIGNvbXBsZXRlPzogKCgpID0+IHZvaWQpIHwgbnVsbCk6IFN1YnNjcmlwdGlvbjtcbiAgLyoqXG4gICAqIEludm9rZXMgYW4gZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUgYW5kIHJlZ2lzdGVycyBPYnNlcnZlciBoYW5kbGVycyBmb3Igbm90aWZpY2F0aW9ucyBpdCB3aWxsIGVtaXQuXG4gICAqXG4gICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5Vc2UgaXQgd2hlbiB5b3UgaGF2ZSBhbGwgdGhlc2UgT2JzZXJ2YWJsZXMsIGJ1dCBzdGlsbCBub3RoaW5nIGlzIGhhcHBlbmluZy48L3NwYW4+XG4gICAqXG4gICAqIGBzdWJzY3JpYmVgIGlzIG5vdCBhIHJlZ3VsYXIgb3BlcmF0b3IsIGJ1dCBhIG1ldGhvZCB0aGF0IGNhbGxzIE9ic2VydmFibGUncyBpbnRlcm5hbCBgc3Vic2NyaWJlYCBmdW5jdGlvbi4gSXRcbiAgICogbWlnaHQgYmUgZm9yIGV4YW1wbGUgYSBmdW5jdGlvbiB0aGF0IHlvdSBwYXNzZWQgdG8gT2JzZXJ2YWJsZSdzIGNvbnN0cnVjdG9yLCBidXQgbW9zdCBvZiB0aGUgdGltZSBpdCBpc1xuICAgKiBhIGxpYnJhcnkgaW1wbGVtZW50YXRpb24sIHdoaWNoIGRlZmluZXMgd2hhdCB3aWxsIGJlIGVtaXR0ZWQgYnkgYW4gT2JzZXJ2YWJsZSwgYW5kIHdoZW4gaXQgYmUgd2lsbCBlbWl0dGVkLiBUaGlzIG1lYW5zXG4gICAqIHRoYXQgY2FsbGluZyBgc3Vic2NyaWJlYCBpcyBhY3R1YWxseSB0aGUgbW9tZW50IHdoZW4gT2JzZXJ2YWJsZSBzdGFydHMgaXRzIHdvcmssIG5vdCB3aGVuIGl0IGlzIGNyZWF0ZWQsIGFzIGl0IGlzIG9mdGVuXG4gICAqIHRoZSB0aG91Z2h0LlxuICAgKlxuICAgKiBBcGFydCBmcm9tIHN0YXJ0aW5nIHRoZSBleGVjdXRpb24gb2YgYW4gT2JzZXJ2YWJsZSwgdGhpcyBtZXRob2QgYWxsb3dzIHlvdSB0byBsaXN0ZW4gZm9yIHZhbHVlc1xuICAgKiB0aGF0IGFuIE9ic2VydmFibGUgZW1pdHMsIGFzIHdlbGwgYXMgZm9yIHdoZW4gaXQgY29tcGxldGVzIG9yIGVycm9ycy4gWW91IGNhbiBhY2hpZXZlIHRoaXMgaW4gdHdvXG4gICAqIG9mIHRoZSBmb2xsb3dpbmcgd2F5cy5cbiAgICpcbiAgICogVGhlIGZpcnN0IHdheSBpcyBjcmVhdGluZyBhbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHtAbGluayBPYnNlcnZlcn0gaW50ZXJmYWNlLiBJdCBzaG91bGQgaGF2ZSBtZXRob2RzXG4gICAqIGRlZmluZWQgYnkgdGhhdCBpbnRlcmZhY2UsIGJ1dCBub3RlIHRoYXQgaXQgc2hvdWxkIGJlIGp1c3QgYSByZWd1bGFyIEphdmFTY3JpcHQgb2JqZWN0LCB3aGljaCB5b3UgY2FuIGNyZWF0ZVxuICAgKiB5b3Vyc2VsZiBpbiBhbnkgd2F5IHlvdSB3YW50IChFUzYgY2xhc3MsIGNsYXNzaWMgZnVuY3Rpb24gY29uc3RydWN0b3IsIG9iamVjdCBsaXRlcmFsIGV0Yy4pLiBJbiBwYXJ0aWN1bGFyLCBkb1xuICAgKiBub3QgYXR0ZW1wdCB0byB1c2UgYW55IFJ4SlMgaW1wbGVtZW50YXRpb24gZGV0YWlscyB0byBjcmVhdGUgT2JzZXJ2ZXJzIC0geW91IGRvbid0IG5lZWQgdGhlbS4gUmVtZW1iZXIgYWxzb1xuICAgKiB0aGF0IHlvdXIgb2JqZWN0IGRvZXMgbm90IGhhdmUgdG8gaW1wbGVtZW50IGFsbCBtZXRob2RzLiBJZiB5b3UgZmluZCB5b3Vyc2VsZiBjcmVhdGluZyBhIG1ldGhvZCB0aGF0IGRvZXNuJ3RcbiAgICogZG8gYW55dGhpbmcsIHlvdSBjYW4gc2ltcGx5IG9taXQgaXQuIE5vdGUgaG93ZXZlciwgaWYgdGhlIGBlcnJvcmAgbWV0aG9kIGlzIG5vdCBwcm92aWRlZCBhbmQgYW4gZXJyb3IgaGFwcGVucyxcbiAgICogaXQgd2lsbCBiZSB0aHJvd24gYXN5bmNocm9ub3VzbHkuIEVycm9ycyB0aHJvd24gYXN5bmNocm9ub3VzbHkgY2Fubm90IGJlIGNhdWdodCB1c2luZyBgdHJ5YC9gY2F0Y2hgLiBJbnN0ZWFkLFxuICAgKiB1c2UgdGhlIHtAbGluayBvblVuaGFuZGxlZEVycm9yfSBjb25maWd1cmF0aW9uIG9wdGlvbiBvciB1c2UgYSBydW50aW1lIGhhbmRsZXIgKGxpa2UgYHdpbmRvdy5vbmVycm9yYCBvclxuICAgKiBgcHJvY2Vzcy5vbignZXJyb3IpYCkgdG8gYmUgbm90aWZpZWQgb2YgdW5oYW5kbGVkIGVycm9ycy4gQmVjYXVzZSBvZiB0aGlzLCBpdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IHByb3ZpZGVcbiAgICogYW4gYGVycm9yYCBtZXRob2QgdG8gYXZvaWQgbWlzc2luZyB0aHJvd24gZXJyb3JzLlxuICAgKlxuICAgKiBUaGUgc2Vjb25kIHdheSBpcyB0byBnaXZlIHVwIG9uIE9ic2VydmVyIG9iamVjdCBhbHRvZ2V0aGVyIGFuZCBzaW1wbHkgcHJvdmlkZSBjYWxsYmFjayBmdW5jdGlvbnMgaW4gcGxhY2Ugb2YgaXRzIG1ldGhvZHMuXG4gICAqIFRoaXMgbWVhbnMgeW91IGNhbiBwcm92aWRlIHRocmVlIGZ1bmN0aW9ucyBhcyBhcmd1bWVudHMgdG8gYHN1YnNjcmliZWAsIHdoZXJlIHRoZSBmaXJzdCBmdW5jdGlvbiBpcyBlcXVpdmFsZW50XG4gICAqIG9mIGEgYG5leHRgIG1ldGhvZCwgdGhlIHNlY29uZCBvZiBhbiBgZXJyb3JgIG1ldGhvZCBhbmQgdGhlIHRoaXJkIG9mIGEgYGNvbXBsZXRlYCBtZXRob2QuIEp1c3QgYXMgaW4gY2FzZSBvZiBhbiBPYnNlcnZlcixcbiAgICogaWYgeW91IGRvIG5vdCBuZWVkIHRvIGxpc3RlbiBmb3Igc29tZXRoaW5nLCB5b3UgY2FuIG9taXQgYSBmdW5jdGlvbiBieSBwYXNzaW5nIGB1bmRlZmluZWRgIG9yIGBudWxsYCxcbiAgICogc2luY2UgYHN1YnNjcmliZWAgcmVjb2duaXplcyB0aGVzZSBmdW5jdGlvbnMgYnkgd2hlcmUgdGhleSB3ZXJlIHBsYWNlZCBpbiBmdW5jdGlvbiBjYWxsLiBXaGVuIGl0IGNvbWVzXG4gICAqIHRvIHRoZSBgZXJyb3JgIGZ1bmN0aW9uLCBhcyB3aXRoIGFuIE9ic2VydmVyLCBpZiBub3QgcHJvdmlkZWQsIGVycm9ycyBlbWl0dGVkIGJ5IGFuIE9ic2VydmFibGUgd2lsbCBiZSB0aHJvd24gYXN5bmNocm9ub3VzbHkuXG4gICAqXG4gICAqIFlvdSBjYW4sIGhvd2V2ZXIsIHN1YnNjcmliZSB3aXRoIG5vIHBhcmFtZXRlcnMgYXQgYWxsLiBUaGlzIG1heSBiZSB0aGUgY2FzZSB3aGVyZSB5b3UncmUgbm90IGludGVyZXN0ZWQgaW4gdGVybWluYWwgZXZlbnRzXG4gICAqIGFuZCB5b3UgYWxzbyBoYW5kbGVkIGVtaXNzaW9ucyBpbnRlcm5hbGx5IGJ5IHVzaW5nIG9wZXJhdG9ycyAoZS5nLiB1c2luZyBgdGFwYCkuXG4gICAqXG4gICAqIFdoaWNoZXZlciBzdHlsZSBvZiBjYWxsaW5nIGBzdWJzY3JpYmVgIHlvdSB1c2UsIGluIGJvdGggY2FzZXMgaXQgcmV0dXJucyBhIFN1YnNjcmlwdGlvbiBvYmplY3QuXG4gICAqIFRoaXMgb2JqZWN0IGFsbG93cyB5b3UgdG8gY2FsbCBgdW5zdWJzY3JpYmVgIG9uIGl0LCB3aGljaCBpbiB0dXJuIHdpbGwgc3RvcCB0aGUgd29yayB0aGF0IGFuIE9ic2VydmFibGUgZG9lcyBhbmQgd2lsbCBjbGVhblxuICAgKiB1cCBhbGwgcmVzb3VyY2VzIHRoYXQgYW4gT2JzZXJ2YWJsZSB1c2VkLiBOb3RlIHRoYXQgY2FuY2VsbGluZyBhIHN1YnNjcmlwdGlvbiB3aWxsIG5vdCBjYWxsIGBjb21wbGV0ZWAgY2FsbGJhY2tcbiAgICogcHJvdmlkZWQgdG8gYHN1YnNjcmliZWAgZnVuY3Rpb24sIHdoaWNoIGlzIHJlc2VydmVkIGZvciBhIHJlZ3VsYXIgY29tcGxldGlvbiBzaWduYWwgdGhhdCBjb21lcyBmcm9tIGFuIE9ic2VydmFibGUuXG4gICAqXG4gICAqIFJlbWVtYmVyIHRoYXQgY2FsbGJhY2tzIHByb3ZpZGVkIHRvIGBzdWJzY3JpYmVgIGFyZSBub3QgZ3VhcmFudGVlZCB0byBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkuXG4gICAqIEl0IGlzIGFuIE9ic2VydmFibGUgaXRzZWxmIHRoYXQgZGVjaWRlcyB3aGVuIHRoZXNlIGZ1bmN0aW9ucyB3aWxsIGJlIGNhbGxlZC4gRm9yIGV4YW1wbGUge0BsaW5rIG9mfVxuICAgKiBieSBkZWZhdWx0IGVtaXRzIGFsbCBpdHMgdmFsdWVzIHN5bmNocm9ub3VzbHkuIEFsd2F5cyBjaGVjayBkb2N1bWVudGF0aW9uIGZvciBob3cgZ2l2ZW4gT2JzZXJ2YWJsZVxuICAgKiB3aWxsIGJlaGF2ZSB3aGVuIHN1YnNjcmliZWQgYW5kIGlmIGl0cyBkZWZhdWx0IGJlaGF2aW9yIGNhbiBiZSBtb2RpZmllZCB3aXRoIGEgYHNjaGVkdWxlcmAuXG4gICAqXG4gICAqICMjIyMgRXhhbXBsZXNcbiAgICpcbiAgICogU3Vic2NyaWJlIHdpdGggYW4ge0BsaW5rIGd1aWRlL29ic2VydmVyIE9ic2VydmVyfVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBpbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuICAgKlxuICAgKiBjb25zdCBzdW1PYnNlcnZlciA9IHtcbiAgICogICBzdW06IDAsXG4gICAqICAgbmV4dCh2YWx1ZSkge1xuICAgKiAgICAgY29uc29sZS5sb2coJ0FkZGluZzogJyArIHZhbHVlKTtcbiAgICogICAgIHRoaXMuc3VtID0gdGhpcy5zdW0gKyB2YWx1ZTtcbiAgICogICB9LFxuICAgKiAgIGVycm9yKCkge1xuICAgKiAgICAgLy8gV2UgYWN0dWFsbHkgY291bGQganVzdCByZW1vdmUgdGhpcyBtZXRob2QsXG4gICAqICAgICAvLyBzaW5jZSB3ZSBkbyBub3QgcmVhbGx5IGNhcmUgYWJvdXQgZXJyb3JzIHJpZ2h0IG5vdy5cbiAgICogICB9LFxuICAgKiAgIGNvbXBsZXRlKCkge1xuICAgKiAgICAgY29uc29sZS5sb2coJ1N1bSBlcXVhbHM6ICcgKyB0aGlzLnN1bSk7XG4gICAqICAgfVxuICAgKiB9O1xuICAgKlxuICAgKiBvZigxLCAyLCAzKSAvLyBTeW5jaHJvbm91c2x5IGVtaXRzIDEsIDIsIDMgYW5kIHRoZW4gY29tcGxldGVzLlxuICAgKiAgIC5zdWJzY3JpYmUoc3VtT2JzZXJ2ZXIpO1xuICAgKlxuICAgKiAvLyBMb2dzOlxuICAgKiAvLyAnQWRkaW5nOiAxJ1xuICAgKiAvLyAnQWRkaW5nOiAyJ1xuICAgKiAvLyAnQWRkaW5nOiAzJ1xuICAgKiAvLyAnU3VtIGVxdWFsczogNidcbiAgICogYGBgXG4gICAqXG4gICAqIFN1YnNjcmliZSB3aXRoIGZ1bmN0aW9ucyAoe0BsaW5rIGRlcHJlY2F0aW9ucy9zdWJzY3JpYmUtYXJndW1lbnRzIGRlcHJlY2F0ZWR9KVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBpbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnXG4gICAqXG4gICAqIGxldCBzdW0gPSAwO1xuICAgKlxuICAgKiBvZigxLCAyLCAzKS5zdWJzY3JpYmUoXG4gICAqICAgdmFsdWUgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coJ0FkZGluZzogJyArIHZhbHVlKTtcbiAgICogICAgIHN1bSA9IHN1bSArIHZhbHVlO1xuICAgKiAgIH0sXG4gICAqICAgdW5kZWZpbmVkLFxuICAgKiAgICgpID0+IGNvbnNvbGUubG9nKCdTdW0gZXF1YWxzOiAnICsgc3VtKVxuICAgKiApO1xuICAgKlxuICAgKiAvLyBMb2dzOlxuICAgKiAvLyAnQWRkaW5nOiAxJ1xuICAgKiAvLyAnQWRkaW5nOiAyJ1xuICAgKiAvLyAnQWRkaW5nOiAzJ1xuICAgKiAvLyAnU3VtIGVxdWFsczogNidcbiAgICogYGBgXG4gICAqXG4gICAqIENhbmNlbCBhIHN1YnNjcmlwdGlvblxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBpbXBvcnQgeyBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuICAgKlxuICAgKiBjb25zdCBzdWJzY3JpcHRpb24gPSBpbnRlcnZhbCgxMDAwKS5zdWJzY3JpYmUoe1xuICAgKiAgIG5leHQobnVtKSB7XG4gICAqICAgICBjb25zb2xlLmxvZyhudW0pXG4gICAqICAgfSxcbiAgICogICBjb21wbGV0ZSgpIHtcbiAgICogICAgIC8vIFdpbGwgbm90IGJlIGNhbGxlZCwgZXZlbiB3aGVuIGNhbmNlbGxpbmcgc3Vic2NyaXB0aW9uLlxuICAgKiAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlZCEnKTtcbiAgICogICB9XG4gICAqIH0pO1xuICAgKlxuICAgKiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICogICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICogICBjb25zb2xlLmxvZygndW5zdWJzY3JpYmVkIScpO1xuICAgKiB9LCAyNTAwKTtcbiAgICpcbiAgICogLy8gTG9nczpcbiAgICogLy8gMCBhZnRlciAxc1xuICAgKiAvLyAxIGFmdGVyIDJzXG4gICAqIC8vICd1bnN1YnNjcmliZWQhJyBhZnRlciAyLjVzXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge09ic2VydmVyfEZ1bmN0aW9ufSBvYnNlcnZlck9yTmV4dCAob3B0aW9uYWwpIEVpdGhlciBhbiBvYnNlcnZlciB3aXRoIG1ldGhvZHMgdG8gYmUgY2FsbGVkLFxuICAgKiBvciB0aGUgZmlyc3Qgb2YgdGhyZWUgcG9zc2libGUgaGFuZGxlcnMsIHdoaWNoIGlzIHRoZSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgZnJvbSB0aGUgc3Vic2NyaWJlZFxuICAgKiBPYnNlcnZhYmxlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvciAob3B0aW9uYWwpIEEgaGFuZGxlciBmb3IgYSB0ZXJtaW5hbCBldmVudCByZXN1bHRpbmcgZnJvbSBhbiBlcnJvci4gSWYgbm8gZXJyb3IgaGFuZGxlciBpcyBwcm92aWRlZCxcbiAgICogdGhlIGVycm9yIHdpbGwgYmUgdGhyb3duIGFzeW5jaHJvbm91c2x5IGFzIHVuaGFuZGxlZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGxldGUgKG9wdGlvbmFsKSBBIGhhbmRsZXIgZm9yIGEgdGVybWluYWwgZXZlbnQgcmVzdWx0aW5nIGZyb20gc3VjY2Vzc2Z1bCBjb21wbGV0aW9uLlxuICAgKiBAcmV0dXJuIHtTdWJzY3JpcHRpb259IGEgc3Vic2NyaXB0aW9uIHJlZmVyZW5jZSB0byB0aGUgcmVnaXN0ZXJlZCBoYW5kbGVyc1xuICAgKiBAbWV0aG9kIHN1YnNjcmliZVxuICAgKi9cbiAgc3Vic2NyaWJlKFxuICAgIG9ic2VydmVyT3JOZXh0PzogUGFydGlhbDxPYnNlcnZlcjxUPj4gfCAoKHZhbHVlOiBUKSA9PiB2b2lkKSB8IG51bGwsXG4gICAgZXJyb3I/OiAoKGVycm9yOiBhbnkpID0+IHZvaWQpIHwgbnVsbCxcbiAgICBjb21wbGV0ZT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBzdWJzY3JpYmVyID0gaXNTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0KSA/IG9ic2VydmVyT3JOZXh0IDogbmV3IFNhZmVTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuXG4gICAgZXJyb3JDb250ZXh0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgb3BlcmF0b3IsIHNvdXJjZSB9ID0gdGhpcztcbiAgICAgIHN1YnNjcmliZXIuYWRkKFxuICAgICAgICBvcGVyYXRvclxuICAgICAgICAgID8gLy8gV2UncmUgZGVhbGluZyB3aXRoIGEgc3Vic2NyaXB0aW9uIGluIHRoZVxuICAgICAgICAgICAgLy8gb3BlcmF0b3IgY2hhaW4gdG8gb25lIG9mIG91ciBsaWZ0ZWQgb3BlcmF0b3JzLlxuICAgICAgICAgICAgb3BlcmF0b3IuY2FsbChzdWJzY3JpYmVyLCBzb3VyY2UpXG4gICAgICAgICAgOiBzb3VyY2VcbiAgICAgICAgICA/IC8vIElmIGBzb3VyY2VgIGhhcyBhIHZhbHVlLCBidXQgYG9wZXJhdG9yYCBkb2VzIG5vdCwgc29tZXRoaW5nIHRoYXRcbiAgICAgICAgICAgIC8vIGhhZCBpbnRpbWF0ZSBrbm93bGVkZ2Ugb2Ygb3VyIEFQSSwgbGlrZSBvdXIgYFN1YmplY3RgLCBtdXN0IGhhdmVcbiAgICAgICAgICAgIC8vIHNldCBpdC4gV2UncmUgZ29pbmcgdG8ganVzdCBjYWxsIGBfc3Vic2NyaWJlYCBkaXJlY3RseS5cbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZShzdWJzY3JpYmVyKVxuICAgICAgICAgIDogLy8gSW4gYWxsIG90aGVyIGNhc2VzLCB3ZSdyZSBsaWtlbHkgd3JhcHBpbmcgYSB1c2VyLXByb3ZpZGVkIGluaXRpYWxpemVyXG4gICAgICAgICAgICAvLyBmdW5jdGlvbiwgc28gd2UgbmVlZCB0byBjYXRjaCBlcnJvcnMgYW5kIGhhbmRsZSB0aGVtIGFwcHJvcHJpYXRlbHkuXG4gICAgICAgICAgICB0aGlzLl90cnlTdWJzY3JpYmUoc3Vic2NyaWJlcilcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF90cnlTdWJzY3JpYmUoc2luazogU3Vic2NyaWJlcjxUPik6IFRlYXJkb3duTG9naWMge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlKHNpbmspO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byByZXR1cm4gYW55dGhpbmcgaW4gdGhpcyBjYXNlLFxuICAgICAgLy8gYmVjYXVzZSBpdCdzIGp1c3QgZ29pbmcgdG8gdHJ5IHRvIGBhZGQoKWAgdG8gYSBzdWJzY3JpcHRpb25cbiAgICAgIC8vIGFib3ZlLlxuICAgICAgc2luay5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIGFzIGEgTk9OLUNBTkNFTExBQkxFIG1lYW5zIG9mIHN1YnNjcmliaW5nIHRvIGFuIG9ic2VydmFibGUsIGZvciB1c2Ugd2l0aFxuICAgKiBBUElzIHRoYXQgZXhwZWN0IHByb21pc2VzLCBsaWtlIGBhc3luYy9hd2FpdGAuIFlvdSBjYW5ub3QgdW5zdWJzY3JpYmUgZnJvbSB0aGlzLlxuICAgKlxuICAgKiAqKldBUk5JTkcqKjogT25seSB1c2UgdGhpcyB3aXRoIG9ic2VydmFibGVzIHlvdSAqa25vdyogd2lsbCBjb21wbGV0ZS4gSWYgdGhlIHNvdXJjZVxuICAgKiBvYnNlcnZhYmxlIGRvZXMgbm90IGNvbXBsZXRlLCB5b3Ugd2lsbCBlbmQgdXAgd2l0aCBhIHByb21pc2UgdGhhdCBpcyBodW5nIHVwLCBhbmRcbiAgICogcG90ZW50aWFsbHkgYWxsIG9mIHRoZSBzdGF0ZSBvZiBhbiBhc3luYyBmdW5jdGlvbiBoYW5naW5nIG91dCBpbiBtZW1vcnkuIFRvIGF2b2lkXG4gICAqIHRoaXMgc2l0dWF0aW9uLCBsb29rIGludG8gYWRkaW5nIHNvbWV0aGluZyBsaWtlIHtAbGluayB0aW1lb3V0fSwge0BsaW5rIHRha2V9LFxuICAgKiB7QGxpbmsgdGFrZVdoaWxlfSwgb3Ige0BsaW5rIHRha2VVbnRpbH0gYW1vbmdzdCBvdGhlcnMuXG4gICAqXG4gICAqICMjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBpbXBvcnQgeyBpbnRlcnZhbCwgdGFrZSB9IGZyb20gJ3J4anMnO1xuICAgKlxuICAgKiBjb25zdCBzb3VyY2UkID0gaW50ZXJ2YWwoMTAwMCkucGlwZSh0YWtlKDQpKTtcbiAgICpcbiAgICogYXN5bmMgZnVuY3Rpb24gZ2V0VG90YWwoKSB7XG4gICAqICAgbGV0IHRvdGFsID0gMDtcbiAgICpcbiAgICogICBhd2FpdCBzb3VyY2UkLmZvckVhY2godmFsdWUgPT4ge1xuICAgKiAgICAgdG90YWwgKz0gdmFsdWU7XG4gICAqICAgICBjb25zb2xlLmxvZygnb2JzZXJ2YWJsZSAtPiAnICsgdmFsdWUpO1xuICAgKiAgIH0pO1xuICAgKlxuICAgKiAgIHJldHVybiB0b3RhbDtcbiAgICogfVxuICAgKlxuICAgKiBnZXRUb3RhbCgpLnRoZW4oXG4gICAqICAgdG90YWwgPT4gY29uc29sZS5sb2coJ1RvdGFsOiAnICsgdG90YWwpXG4gICAqICk7XG4gICAqXG4gICAqIC8vIEV4cGVjdGVkOlxuICAgKiAvLyAnb2JzZXJ2YWJsZSAtPiAwJ1xuICAgKiAvLyAnb2JzZXJ2YWJsZSAtPiAxJ1xuICAgKiAvLyAnb2JzZXJ2YWJsZSAtPiAyJ1xuICAgKiAvLyAnb2JzZXJ2YWJsZSAtPiAzJ1xuICAgKiAvLyAnVG90YWw6IDYnXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gbmV4dCBhIGhhbmRsZXIgZm9yIGVhY2ggdmFsdWUgZW1pdHRlZCBieSB0aGUgb2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB0aGF0IGVpdGhlciByZXNvbHZlcyBvbiBvYnNlcnZhYmxlIGNvbXBsZXRpb24gb3JcbiAgICogIHJlamVjdHMgd2l0aCB0aGUgaGFuZGxlZCBlcnJvclxuICAgKi9cbiAgZm9yRWFjaChuZXh0OiAodmFsdWU6IFQpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gbmV4dCBhIGhhbmRsZXIgZm9yIGVhY2ggdmFsdWUgZW1pdHRlZCBieSB0aGUgb2JzZXJ2YWJsZVxuICAgKiBAcGFyYW0gcHJvbWlzZUN0b3IgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB1c2VkIHRvIGluc3RhbnRpYXRlIHRoZSBQcm9taXNlXG4gICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgZWl0aGVyIHJlc29sdmVzIG9uIG9ic2VydmFibGUgY29tcGxldGlvbiBvclxuICAgKiAgcmVqZWN0cyB3aXRoIHRoZSBoYW5kbGVkIGVycm9yXG4gICAqIEBkZXByZWNhdGVkIFBhc3NpbmcgYSBQcm9taXNlIGNvbnN0cnVjdG9yIHdpbGwgbm8gbG9uZ2VyIGJlIGF2YWlsYWJsZVxuICAgKiBpbiB1cGNvbWluZyB2ZXJzaW9ucyBvZiBSeEpTLiBUaGlzIGlzIGJlY2F1c2UgaXQgYWRkcyB3ZWlnaHQgdG8gdGhlIGxpYnJhcnksIGZvciB2ZXJ5XG4gICAqIGxpdHRsZSBiZW5lZml0LiBJZiB5b3UgbmVlZCB0aGlzIGZ1bmN0aW9uYWxpdHksIGl0IGlzIHJlY29tbWVuZGVkIHRoYXQgeW91IGVpdGhlclxuICAgKiBwb2x5ZmlsbCBQcm9taXNlLCBvciB5b3UgY3JlYXRlIGFuIGFkYXB0ZXIgdG8gY29udmVydCB0aGUgcmV0dXJuZWQgbmF0aXZlIHByb21pc2VcbiAgICogdG8gd2hhdGV2ZXIgcHJvbWlzZSBpbXBsZW1lbnRhdGlvbiB5b3Ugd2FudGVkLiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguXG4gICAqL1xuICBmb3JFYWNoKG5leHQ6ICh2YWx1ZTogVCkgPT4gdm9pZCwgcHJvbWlzZUN0b3I6IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIGZvckVhY2gobmV4dDogKHZhbHVlOiBUKSA9PiB2b2lkLCBwcm9taXNlQ3Rvcj86IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcblxuICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3I8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IG5ldyBTYWZlU3Vic2NyaWJlcjxUPih7XG4gICAgICAgIG5leHQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXh0KHZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgc3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgY29tcGxldGU6IHJlc29sdmUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH0pIGFzIFByb21pc2U8dm9pZD47XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55Pik6IFRlYXJkb3duTG9naWMge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZT8uc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIGludGVyb3AgcG9pbnQgZGVmaW5lZCBieSB0aGUgZXM3LW9ic2VydmFibGUgc3BlYyBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG4gICAqIEBtZXRob2QgU3ltYm9sLm9ic2VydmFibGVcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gdGhpcyBpbnN0YW5jZSBvZiB0aGUgb2JzZXJ2YWJsZVxuICAgKi9cbiAgW1N5bWJvbF9vYnNlcnZhYmxlXSgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuICBwaXBlKCk6IE9ic2VydmFibGU8VD47XG4gIHBpcGU8QT4ob3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+KTogT2JzZXJ2YWJsZTxBPjtcbiAgcGlwZTxBLCBCPihvcDE6IE9wZXJhdG9yRnVuY3Rpb248VCwgQT4sIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPik6IE9ic2VydmFibGU8Qj47XG4gIHBpcGU8QSwgQiwgQz4ob3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LCBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sIG9wMzogT3BlcmF0b3JGdW5jdGlvbjxCLCBDPik6IE9ic2VydmFibGU8Qz47XG4gIHBpcGU8QSwgQiwgQywgRD4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+XG4gICk6IE9ic2VydmFibGU8RD47XG4gIHBpcGU8QSwgQiwgQywgRCwgRT4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPlxuICApOiBPYnNlcnZhYmxlPEU+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEY+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+XG4gICk6IE9ic2VydmFibGU8Rj47XG4gIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRz4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPixcbiAgICBvcDY6IE9wZXJhdG9yRnVuY3Rpb248RSwgRj4sXG4gICAgb3A3OiBPcGVyYXRvckZ1bmN0aW9uPEYsIEc+XG4gICk6IE9ic2VydmFibGU8Rz47XG4gIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPixcbiAgICBvcDY6IE9wZXJhdG9yRnVuY3Rpb248RSwgRj4sXG4gICAgb3A3OiBPcGVyYXRvckZ1bmN0aW9uPEYsIEc+LFxuICAgIG9wODogT3BlcmF0b3JGdW5jdGlvbjxHLCBIPlxuICApOiBPYnNlcnZhYmxlPEg+O1xuICBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEk+KFxuICAgIG9wMTogT3BlcmF0b3JGdW5jdGlvbjxULCBBPixcbiAgICBvcDI6IE9wZXJhdG9yRnVuY3Rpb248QSwgQj4sXG4gICAgb3AzOiBPcGVyYXRvckZ1bmN0aW9uPEIsIEM+LFxuICAgIG9wNDogT3BlcmF0b3JGdW5jdGlvbjxDLCBEPixcbiAgICBvcDU6IE9wZXJhdG9yRnVuY3Rpb248RCwgRT4sXG4gICAgb3A2OiBPcGVyYXRvckZ1bmN0aW9uPEUsIEY+LFxuICAgIG9wNzogT3BlcmF0b3JGdW5jdGlvbjxGLCBHPixcbiAgICBvcDg6IE9wZXJhdG9yRnVuY3Rpb248RywgSD4sXG4gICAgb3A5OiBPcGVyYXRvckZ1bmN0aW9uPEgsIEk+XG4gICk6IE9ic2VydmFibGU8ST47XG4gIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgST4oXG4gICAgb3AxOiBPcGVyYXRvckZ1bmN0aW9uPFQsIEE+LFxuICAgIG9wMjogT3BlcmF0b3JGdW5jdGlvbjxBLCBCPixcbiAgICBvcDM6IE9wZXJhdG9yRnVuY3Rpb248QiwgQz4sXG4gICAgb3A0OiBPcGVyYXRvckZ1bmN0aW9uPEMsIEQ+LFxuICAgIG9wNTogT3BlcmF0b3JGdW5jdGlvbjxELCBFPixcbiAgICBvcDY6IE9wZXJhdG9yRnVuY3Rpb248RSwgRj4sXG4gICAgb3A3OiBPcGVyYXRvckZ1bmN0aW9uPEYsIEc+LFxuICAgIG9wODogT3BlcmF0b3JGdW5jdGlvbjxHLCBIPixcbiAgICBvcDk6IE9wZXJhdG9yRnVuY3Rpb248SCwgST4sXG4gICAgLi4ub3BlcmF0aW9uczogT3BlcmF0b3JGdW5jdGlvbjxhbnksIGFueT5bXVxuICApOiBPYnNlcnZhYmxlPHVua25vd24+O1xuICAvKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHN0aXRjaCB0b2dldGhlciBmdW5jdGlvbmFsIG9wZXJhdG9ycyBpbnRvIGEgY2hhaW4uXG4gICAqIEBtZXRob2QgcGlwZVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSB0aGUgT2JzZXJ2YWJsZSByZXN1bHQgb2YgYWxsIG9mIHRoZSBvcGVyYXRvcnMgaGF2aW5nXG4gICAqIGJlZW4gY2FsbGVkIGluIHRoZSBvcmRlciB0aGV5IHdlcmUgcGFzc2VkIGluLlxuICAgKlxuICAgKiAjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGltcG9ydCB7IGludGVydmFsLCBmaWx0ZXIsIG1hcCwgc2NhbiB9IGZyb20gJ3J4anMnO1xuICAgKlxuICAgKiBpbnRlcnZhbCgxMDAwKVxuICAgKiAgIC5waXBlKFxuICAgKiAgICAgZmlsdGVyKHggPT4geCAlIDIgPT09IDApLFxuICAgKiAgICAgbWFwKHggPT4geCArIHgpLFxuICAgKiAgICAgc2NhbigoYWNjLCB4KSA9PiBhY2MgKyB4KVxuICAgKiAgIClcbiAgICogICAuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICAgKiBgYGBcbiAgICovXG4gIHBpcGUoLi4ub3BlcmF0aW9uczogT3BlcmF0b3JGdW5jdGlvbjxhbnksIGFueT5bXSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHBpcGVGcm9tQXJyYXkob3BlcmF0aW9ucykodGhpcyk7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbiAgLyoqIEBkZXByZWNhdGVkIFJlcGxhY2VkIHdpdGgge0BsaW5rIGZpcnN0VmFsdWVGcm9tfSBhbmQge0BsaW5rIGxhc3RWYWx1ZUZyb219LiBXaWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3RvLXByb21pc2UgKi9cbiAgdG9Qcm9taXNlKCk6IFByb21pc2U8VCB8IHVuZGVmaW5lZD47XG4gIC8qKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCB3aXRoIHtAbGluayBmaXJzdFZhbHVlRnJvbX0gYW5kIHtAbGluayBsYXN0VmFsdWVGcm9tfS4gV2lsbCBiZSByZW1vdmVkIGluIHY4LiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy90by1wcm9taXNlICovXG4gIHRvUHJvbWlzZShQcm9taXNlQ3RvcjogdHlwZW9mIFByb21pc2UpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+O1xuICAvKiogQGRlcHJlY2F0ZWQgUmVwbGFjZWQgd2l0aCB7QGxpbmsgZmlyc3RWYWx1ZUZyb219IGFuZCB7QGxpbmsgbGFzdFZhbHVlRnJvbX0uIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvdG8tcHJvbWlzZSAqL1xuICB0b1Byb21pc2UoUHJvbWlzZUN0b3I6IFByb21pc2VDb25zdHJ1Y3Rvckxpa2UpOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+O1xuICAvKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gdGhpcyBPYnNlcnZhYmxlIGFuZCBnZXQgYSBQcm9taXNlIHJlc29sdmluZyBvblxuICAgKiBgY29tcGxldGVgIHdpdGggdGhlIGxhc3QgZW1pc3Npb24gKGlmIGFueSkuXG4gICAqXG4gICAqICoqV0FSTklORyoqOiBPbmx5IHVzZSB0aGlzIHdpdGggb2JzZXJ2YWJsZXMgeW91ICprbm93KiB3aWxsIGNvbXBsZXRlLiBJZiB0aGUgc291cmNlXG4gICAqIG9ic2VydmFibGUgZG9lcyBub3QgY29tcGxldGUsIHlvdSB3aWxsIGVuZCB1cCB3aXRoIGEgcHJvbWlzZSB0aGF0IGlzIGh1bmcgdXAsIGFuZFxuICAgKiBwb3RlbnRpYWxseSBhbGwgb2YgdGhlIHN0YXRlIG9mIGFuIGFzeW5jIGZ1bmN0aW9uIGhhbmdpbmcgb3V0IGluIG1lbW9yeS4gVG8gYXZvaWRcbiAgICogdGhpcyBzaXR1YXRpb24sIGxvb2sgaW50byBhZGRpbmcgc29tZXRoaW5nIGxpa2Uge0BsaW5rIHRpbWVvdXR9LCB7QGxpbmsgdGFrZX0sXG4gICAqIHtAbGluayB0YWtlV2hpbGV9LCBvciB7QGxpbmsgdGFrZVVudGlsfSBhbW9uZ3N0IG90aGVycy5cbiAgICpcbiAgICogQG1ldGhvZCB0b1Byb21pc2VcbiAgICogQHBhcmFtIFtwcm9taXNlQ3Rvcl0gYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB1c2VkIHRvIGluc3RhbnRpYXRlXG4gICAqIHRoZSBQcm9taXNlXG4gICAqIEByZXR1cm4gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbGFzdCB2YWx1ZSBlbWl0LCBvclxuICAgKiByZWplY3RzIG9uIGFuIGVycm9yLiBJZiB0aGVyZSB3ZXJlIG5vIGVtaXNzaW9ucywgUHJvbWlzZVxuICAgKiByZXNvbHZlcyB3aXRoIHVuZGVmaW5lZC5cbiAgICogQGRlcHJlY2F0ZWQgUmVwbGFjZWQgd2l0aCB7QGxpbmsgZmlyc3RWYWx1ZUZyb219IGFuZCB7QGxpbmsgbGFzdFZhbHVlRnJvbX0uIFdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvdG8tcHJvbWlzZVxuICAgKi9cbiAgdG9Qcm9taXNlKHByb21pc2VDdG9yPzogUHJvbWlzZUNvbnN0cnVjdG9yTGlrZSk6IFByb21pc2U8VCB8IHVuZGVmaW5lZD4ge1xuICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuXG4gICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgdmFsdWU6IFQgfCB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnN1YnNjcmliZShcbiAgICAgICAgKHg6IFQpID0+ICh2YWx1ZSA9IHgpLFxuICAgICAgICAoZXJyOiBhbnkpID0+IHJlamVjdChlcnIpLFxuICAgICAgICAoKSA9PiByZXNvbHZlKHZhbHVlKVxuICAgICAgKTtcbiAgICB9KSBhcyBQcm9taXNlPFQgfCB1bmRlZmluZWQ+O1xuICB9XG59XG5cbi8qKlxuICogRGVjaWRlcyBiZXR3ZWVuIGEgcGFzc2VkIHByb21pc2UgY29uc3RydWN0b3IgZnJvbSBjb25zdW1pbmcgY29kZSxcbiAqIEEgZGVmYXVsdCBjb25maWd1cmVkIHByb21pc2UgY29uc3RydWN0b3IsIGFuZCB0aGUgbmF0aXZlIHByb21pc2VcbiAqIGNvbnN0cnVjdG9yIGFuZCByZXR1cm5zIGl0LiBJZiBub3RoaW5nIGNhbiBiZSBmb3VuZCwgaXQgd2lsbCB0aHJvd1xuICogYW4gZXJyb3IuXG4gKiBAcGFyYW0gcHJvbWlzZUN0b3IgVGhlIG9wdGlvbmFsIHByb21pc2UgY29uc3RydWN0b3IgdG8gcGFzc2VkIGJ5IGNvbnN1bWluZyBjb2RlXG4gKi9cbmZ1bmN0aW9uIGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yOiBQcm9taXNlQ29uc3RydWN0b3JMaWtlIHwgdW5kZWZpbmVkKSB7XG4gIHJldHVybiBwcm9taXNlQ3RvciA/PyBjb25maWcuUHJvbWlzZSA/PyBQcm9taXNlO1xufVxuXG5mdW5jdGlvbiBpc09ic2VydmVyPFQ+KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBPYnNlcnZlcjxUPiB7XG4gIHJldHVybiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLm5leHQpICYmIGlzRnVuY3Rpb24odmFsdWUuZXJyb3IpICYmIGlzRnVuY3Rpb24odmFsdWUuY29tcGxldGUpO1xufVxuXG5mdW5jdGlvbiBpc1N1YnNjcmliZXI8VD4odmFsdWU6IGFueSk6IHZhbHVlIGlzIFN1YnNjcmliZXI8VD4ge1xuICByZXR1cm4gKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaWJlcikgfHwgKGlzT2JzZXJ2ZXIodmFsdWUpICYmIGlzU3Vic2NyaXB0aW9uKHZhbHVlKSk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG4vKipcbiAqIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhbiBPYnNlcnZhYmxlIHdpdGggYSBsaWZ0IGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzTGlmdChzb3VyY2U6IGFueSk6IHNvdXJjZSBpcyB7IGxpZnQ6IEluc3RhbmNlVHlwZTx0eXBlb2YgT2JzZXJ2YWJsZT5bJ2xpZnQnXSB9IHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oc291cmNlPy5saWZ0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGBPcGVyYXRvckZ1bmN0aW9uYC4gVXNlZCB0byBkZWZpbmUgb3BlcmF0b3JzIHRocm91Z2hvdXQgdGhlIGxpYnJhcnkgaW4gYSBjb25jaXNlIHdheS5cbiAqIEBwYXJhbSBpbml0IFRoZSBsb2dpYyB0byBjb25uZWN0IHRoZSBsaWZ0ZWRTb3VyY2UgdG8gdGhlIHN1YnNjcmliZXIgYXQgdGhlIG1vbWVudCBvZiBzdWJzY3JpcHRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcGVyYXRlPFQsIFI+KFxuICBpbml0OiAobGlmdGVkU291cmNlOiBPYnNlcnZhYmxlPFQ+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFI+KSA9PiAoKCkgPT4gdm9pZCkgfCB2b2lkXG4pOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+IHtcbiAgcmV0dXJuIChzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IHtcbiAgICBpZiAoaGFzTGlmdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLmxpZnQoZnVuY3Rpb24gKHRoaXM6IFN1YnNjcmliZXI8Uj4sIGxpZnRlZFNvdXJjZTogT2JzZXJ2YWJsZTxUPikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBpbml0KGxpZnRlZFNvdXJjZSwgdGhpcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VuYWJsZSB0byBsaWZ0IHVua25vd24gT2JzZXJ2YWJsZSB0eXBlJyk7XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYW4gYE9wZXJhdG9yU3Vic2NyaWJlcmAuXG4gKiBAcGFyYW0gZGVzdGluYXRpb24gVGhlIGRvd25zdHJlYW0gc3Vic2NyaWJlci5cbiAqIEBwYXJhbSBvbk5leHQgSGFuZGxlcyBuZXh0IHZhbHVlcywgb25seSBjYWxsZWQgaWYgdGhpcyBzdWJzY3JpYmVyIGlzIG5vdCBzdG9wcGVkIG9yIGNsb3NlZC4gQW55XG4gKiBlcnJvciB0aGF0IG9jY3VycyBpbiB0aGlzIGZ1bmN0aW9uIGlzIGNhdWdodCBhbmQgc2VudCB0byB0aGUgYGVycm9yYCBtZXRob2Qgb2YgdGhpcyBzdWJzY3JpYmVyLlxuICogQHBhcmFtIG9uRXJyb3IgSGFuZGxlcyBlcnJvcnMgZnJvbSB0aGUgc3Vic2NyaXB0aW9uLCBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgaW4gdGhpcyBoYW5kbGVyIGFyZSBjYXVnaHRcbiAqIGFuZCBzZW5kIHRvIHRoZSBgZGVzdGluYXRpb25gIGVycm9yIGhhbmRsZXIuXG4gKiBAcGFyYW0gb25Db21wbGV0ZSBIYW5kbGVzIGNvbXBsZXRpb24gbm90aWZpY2F0aW9uIGZyb20gdGhlIHN1YnNjcmlwdGlvbi4gQW55IGVycm9ycyB0aGF0IG9jY3VyIGluXG4gKiB0aGlzIGhhbmRsZXIgYXJlIHNlbnQgdG8gdGhlIGBkZXN0aW5hdGlvbmAgZXJyb3IgaGFuZGxlci5cbiAqIEBwYXJhbSBvbkZpbmFsaXplIEFkZGl0aW9uYWwgdGVhcmRvd24gbG9naWMgaGVyZS4gVGhpcyB3aWxsIG9ubHkgYmUgY2FsbGVkIG9uIHRlYXJkb3duIGlmIHRoZVxuICogc3Vic2NyaWJlciBpdHNlbGYgaXMgbm90IGFscmVhZHkgY2xvc2VkLiBUaGlzIGlzIGNhbGxlZCBhZnRlciBhbGwgb3RoZXIgdGVhcmRvd24gbG9naWMgaXMgZXhlY3V0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXI8VD4oXG4gIGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPGFueT4sXG4gIG9uTmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCxcbiAgb25Db21wbGV0ZT86ICgpID0+IHZvaWQsXG4gIG9uRXJyb3I/OiAoZXJyOiBhbnkpID0+IHZvaWQsXG4gIG9uRmluYWxpemU/OiAoKSA9PiB2b2lkXG4pOiBTdWJzY3JpYmVyPFQ+IHtcbiAgcmV0dXJuIG5ldyBPcGVyYXRvclN1YnNjcmliZXIoZGVzdGluYXRpb24sIG9uTmV4dCwgb25Db21wbGV0ZSwgb25FcnJvciwgb25GaW5hbGl6ZSk7XG59XG5cbi8qKlxuICogQSBnZW5lcmljIGhlbHBlciBmb3IgYWxsb3dpbmcgb3BlcmF0b3JzIHRvIGJlIGNyZWF0ZWQgd2l0aCBhIFN1YnNjcmliZXIgYW5kXG4gKiB1c2UgY2xvc3VyZXMgdG8gY2FwdHVyZSBuZWNlc3Nhcnkgc3RhdGUgZnJvbSB0aGUgb3BlcmF0b3IgZnVuY3Rpb24gaXRzZWxmLlxuICovXG5leHBvcnQgY2xhc3MgT3BlcmF0b3JTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGFuIGBPcGVyYXRvclN1YnNjcmliZXJgLlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb24gVGhlIGRvd25zdHJlYW0gc3Vic2NyaWJlci5cbiAgICogQHBhcmFtIG9uTmV4dCBIYW5kbGVzIG5leHQgdmFsdWVzLCBvbmx5IGNhbGxlZCBpZiB0aGlzIHN1YnNjcmliZXIgaXMgbm90IHN0b3BwZWQgb3IgY2xvc2VkLiBBbnlcbiAgICogZXJyb3IgdGhhdCBvY2N1cnMgaW4gdGhpcyBmdW5jdGlvbiBpcyBjYXVnaHQgYW5kIHNlbnQgdG8gdGhlIGBlcnJvcmAgbWV0aG9kIG9mIHRoaXMgc3Vic2NyaWJlci5cbiAgICogQHBhcmFtIG9uRXJyb3IgSGFuZGxlcyBlcnJvcnMgZnJvbSB0aGUgc3Vic2NyaXB0aW9uLCBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgaW4gdGhpcyBoYW5kbGVyIGFyZSBjYXVnaHRcbiAgICogYW5kIHNlbmQgdG8gdGhlIGBkZXN0aW5hdGlvbmAgZXJyb3IgaGFuZGxlci5cbiAgICogQHBhcmFtIG9uQ29tcGxldGUgSGFuZGxlcyBjb21wbGV0aW9uIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBzdWJzY3JpcHRpb24uIEFueSBlcnJvcnMgdGhhdCBvY2N1ciBpblxuICAgKiB0aGlzIGhhbmRsZXIgYXJlIHNlbnQgdG8gdGhlIGBkZXN0aW5hdGlvbmAgZXJyb3IgaGFuZGxlci5cbiAgICogQHBhcmFtIG9uRmluYWxpemUgQWRkaXRpb25hbCBmaW5hbGl6YXRpb24gbG9naWMgaGVyZS4gVGhpcyB3aWxsIG9ubHkgYmUgY2FsbGVkIG9uIGZpbmFsaXphdGlvbiBpZiB0aGVcbiAgICogc3Vic2NyaWJlciBpdHNlbGYgaXMgbm90IGFscmVhZHkgY2xvc2VkLiBUaGlzIGlzIGNhbGxlZCBhZnRlciBhbGwgb3RoZXIgZmluYWxpemF0aW9uIGxvZ2ljIGlzIGV4ZWN1dGVkLlxuICAgKiBAcGFyYW0gc2hvdWxkVW5zdWJzY3JpYmUgQW4gb3B0aW9uYWwgY2hlY2sgdG8gc2VlIGlmIGFuIHVuc3Vic2NyaWJlIGNhbGwgc2hvdWxkIHRydWx5IHVuc3Vic2NyaWJlLlxuICAgKiBOT1RFOiBUaGlzIGN1cnJlbnRseSAqKk9OTFkqKiBleGlzdHMgdG8gc3VwcG9ydCB0aGUgc3RyYW5nZSBiZWhhdmlvciBvZiB7QGxpbmsgZ3JvdXBCeX0sIHdoZXJlIHVuc3Vic2NyaXB0aW9uXG4gICAqIHRvIHRoZSByZXN1bHRpbmcgb2JzZXJ2YWJsZSBkb2VzIG5vdCBhY3R1YWxseSBkaXNjb25uZWN0IGZyb20gdGhlIHNvdXJjZSBpZiB0aGVyZSBhcmUgYWN0aXZlIHN1YnNjcmlwdGlvbnNcbiAgICogdG8gYW55IGdyb3VwZWQgb2JzZXJ2YWJsZS4gKERPIE5PVCBFWFBPU0UgT1IgVVNFIEVYVEVSTkFMTFkhISEpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxhbnk+LFxuICAgIG9uTmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCxcbiAgICBvbkNvbXBsZXRlPzogKCkgPT4gdm9pZCxcbiAgICBvbkVycm9yPzogKGVycjogYW55KSA9PiB2b2lkLFxuICAgIHByaXZhdGUgb25GaW5hbGl6ZT86ICgpID0+IHZvaWQsXG4gICAgcHJpdmF0ZSBzaG91bGRVbnN1YnNjcmliZT86ICgpID0+IGJvb2xlYW5cbiAgKSB7XG4gICAgLy8gSXQncyBpbXBvcnRhbnQgLSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyAtIHRoYXQgYWxsIG9mIHRoaXMgY2xhc3Mnc1xuICAgIC8vIG1lbWJlcnMgYXJlIGluaXRpYWxpemVkIGFuZCB0aGF0IHRoZXkgYXJlIGFsd2F5cyBpbml0aWFsaXplZCBpbiB0aGUgc2FtZVxuICAgIC8vIG9yZGVyLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgYWxsIE9wZXJhdG9yU3Vic2NyaWJlciBpbnN0YW5jZXMgaGF2ZSB0aGVcbiAgICAvLyBzYW1lIGhpZGRlbiBjbGFzcyBpbiBWOC4gVGhpcywgaW4gdHVybiwgd2lsbCBoZWxwIGtlZXAgdGhlIG51bWJlciBvZlxuICAgIC8vIGhpZGRlbiBjbGFzc2VzIGludm9sdmVkIGluIHByb3BlcnR5IGFjY2Vzc2VzIHdpdGhpbiB0aGUgYmFzZSBjbGFzcyBhc1xuICAgIC8vIGxvdyBhcyBwb3NzaWJsZS4gSWYgdGhlIG51bWJlciBvZiBoaWRkZW4gY2xhc3NlcyBpbnZvbHZlZCBleGNlZWRzIGZvdXIsXG4gICAgLy8gdGhlIHByb3BlcnR5IGFjY2Vzc2VzIHdpbGwgYmVjb21lIG1lZ2Ftb3JwaGljIGFuZCBwZXJmb3JtYW5jZSBwZW5hbHRpZXNcbiAgICAvLyB3aWxsIGJlIGluY3VycmVkIC0gaS5lLiBpbmxpbmUgY2FjaGVzIHdvbid0IGJlIHVzZWQuXG4gICAgLy9cbiAgICAvLyBUaGUgcmVhc29ucyBmb3IgZW5zdXJpbmcgYWxsIGluc3RhbmNlcyBoYXZlIHRoZSBzYW1lIGhpZGRlbiBjbGFzcyBhcmVcbiAgICAvLyBmdXJ0aGVyIGRpc2N1c3NlZCBpbiB0aGlzIGJsb2cgcG9zdCBmcm9tIEJlbmVkaWt0IE1ldXJlcjpcbiAgICAvLyBodHRwczovL2JlbmVkaWt0bWV1cmVyLmRlLzIwMTgvMDMvMjMvaW1wYWN0LW9mLXBvbHltb3JwaGlzbS1vbi1jb21wb25lbnQtYmFzZWQtZnJhbWV3b3Jrcy1saWtlLXJlYWN0L1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLl9uZXh0ID0gb25OZXh0XG4gICAgICA/IGZ1bmN0aW9uICh0aGlzOiBPcGVyYXRvclN1YnNjcmliZXI8VD4sIHZhbHVlOiBUKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9uTmV4dCh2YWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgOiBzdXBlci5fbmV4dDtcbiAgICB0aGlzLl9lcnJvciA9IG9uRXJyb3JcbiAgICAgID8gZnVuY3Rpb24gKHRoaXM6IE9wZXJhdG9yU3Vic2NyaWJlcjxUPiwgZXJyOiBhbnkpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb25FcnJvcihlcnIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gU2VuZCBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgZG93biBzdHJlYW0uXG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgZmluYWxpemF0aW9uLlxuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgOiBzdXBlci5fZXJyb3I7XG4gICAgdGhpcy5fY29tcGxldGUgPSBvbkNvbXBsZXRlXG4gICAgICA/IGZ1bmN0aW9uICh0aGlzOiBPcGVyYXRvclN1YnNjcmliZXI8VD4pIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gU2VuZCBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgZG93biBzdHJlYW0uXG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgZmluYWxpemF0aW9uLlxuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgOiBzdXBlci5fY29tcGxldGU7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMuc2hvdWxkVW5zdWJzY3JpYmUgfHwgdGhpcy5zaG91bGRVbnN1YnNjcmliZSgpKSB7XG4gICAgICBjb25zdCB7IGNsb3NlZCB9ID0gdGhpcztcbiAgICAgIHN1cGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAvLyBFeGVjdXRlIGFkZGl0aW9uYWwgdGVhcmRvd24gaWYgd2UgaGF2ZSBhbnkgYW5kIHdlIGRpZG4ndCBhbHJlYWR5IGRvIHNvLlxuICAgICAgIWNsb3NlZCAmJiB0aGlzLm9uRmluYWxpemU/LigpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUVycm9yQ2xhc3MgfSBmcm9tICcuL2NyZWF0ZUVycm9yQ2xhc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RVbnN1YnNjcmliZWRFcnJvckN0b3Ige1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLiBEbyBub3QgY29uc3RydWN0IGVycm9yIGluc3RhbmNlcy5cbiAgICogQ2Fubm90IGJlIHRhZ2dlZCBhcyBpbnRlcm5hbDogaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlWC9yeGpzL2lzc3Vlcy82MjY5XG4gICAqL1xuICBuZXcgKCk6IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yO1xufVxuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIGFuIGFjdGlvbiBpcyBpbnZhbGlkIGJlY2F1c2UgdGhlIG9iamVjdCBoYXMgYmVlblxuICogdW5zdWJzY3JpYmVkLlxuICpcbiAqIEBzZWUge0BsaW5rIFN1YmplY3R9XG4gKiBAc2VlIHtAbGluayBCZWhhdmlvclN1YmplY3R9XG4gKlxuICogQGNsYXNzIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBPYmplY3RVbnN1YnNjcmliZWRFcnJvcjogT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JDdG9yID0gY3JlYXRlRXJyb3JDbGFzcyhcbiAgKF9zdXBlcikgPT5cbiAgICBmdW5jdGlvbiBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGwodGhpczogYW55KSB7XG4gICAgICBfc3VwZXIodGhpcyk7XG4gICAgICB0aGlzLm5hbWUgPSAnT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuICAgICAgdGhpcy5tZXNzYWdlID0gJ29iamVjdCB1bnN1YnNjcmliZWQnO1xuICAgIH1cbik7XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3IgfSBmcm9tICcuL09wZXJhdG9yJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIEVNUFRZX1NVQlNDUklQVElPTiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IE9ic2VydmVyLCBTdWJzY3JpcHRpb25MaWtlLCBUZWFyZG93bkxvZ2ljIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBPYmplY3RVbnN1YnNjcmliZWRFcnJvciB9IGZyb20gJy4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuL3V0aWwvYXJyUmVtb3ZlJztcbmltcG9ydCB7IGVycm9yQ29udGV4dCB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xuXG4vKipcbiAqIEEgU3ViamVjdCBpcyBhIHNwZWNpYWwgdHlwZSBvZiBPYnNlcnZhYmxlIHRoYXQgYWxsb3dzIHZhbHVlcyB0byBiZVxuICogbXVsdGljYXN0ZWQgdG8gbWFueSBPYnNlcnZlcnMuIFN1YmplY3RzIGFyZSBsaWtlIEV2ZW50RW1pdHRlcnMuXG4gKlxuICogRXZlcnkgU3ViamVjdCBpcyBhbiBPYnNlcnZhYmxlIGFuZCBhbiBPYnNlcnZlci4gWW91IGNhbiBzdWJzY3JpYmUgdG8gYVxuICogU3ViamVjdCwgYW5kIHlvdSBjYW4gY2FsbCBuZXh0IHRvIGZlZWQgdmFsdWVzIGFzIHdlbGwgYXMgZXJyb3IgYW5kIGNvbXBsZXRlLlxuICovXG5leHBvcnQgY2xhc3MgU3ViamVjdDxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4gaW1wbGVtZW50cyBTdWJzY3JpcHRpb25MaWtlIHtcbiAgY2xvc2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjdXJyZW50T2JzZXJ2ZXJzOiBPYnNlcnZlcjxUPltdIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBvYnNlcnZlcnM6IE9ic2VydmVyPFQ+W10gPSBbXTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBpc1N0b3BwZWQgPSBmYWxzZTtcbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBoYXNFcnJvciA9IGZhbHNlO1xuICAvKiogQGRlcHJlY2F0ZWQgSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsLCBkbyBub3QgdXNlIGRpcmVjdGx5LiBXaWxsIGJlIG1hZGUgaW50ZXJuYWwgaW4gdjguICovXG4gIHRocm93bkVycm9yOiBhbnkgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgXCJzdWJqZWN0XCIgYnkgYmFzaWNhbGx5IGdsdWluZyBhbiBvYnNlcnZlciB0byBhbiBvYnNlcnZhYmxlLlxuICAgKlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKiBAZGVwcmVjYXRlZCBSZWNvbW1lbmRlZCB5b3UgZG8gbm90IHVzZS4gV2lsbCBiZSByZW1vdmVkIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS4gUGxhbnMgZm9yIHJlcGxhY2VtZW50IHN0aWxsIHVuZGVyIGRpc2N1c3Npb24uXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlOiAoLi4uYXJnczogYW55W10pID0+IGFueSA9IDxUPihkZXN0aW5hdGlvbjogT2JzZXJ2ZXI8VD4sIHNvdXJjZTogT2JzZXJ2YWJsZTxUPik6IEFub255bW91c1N1YmplY3Q8VD4gPT4ge1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzU3ViamVjdDxUPihkZXN0aW5hdGlvbiwgc291cmNlKTtcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBOT1RFOiBUaGlzIG11c3QgYmUgaGVyZSB0byBvYnNjdXJlIE9ic2VydmFibGUncyBjb25zdHJ1Y3Rvci5cbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIEludGVybmFsIGltcGxlbWVudGF0aW9uIGRldGFpbCwgZG8gbm90IHVzZSBkaXJlY3RseS4gV2lsbCBiZSBtYWRlIGludGVybmFsIGluIHY4LiAqL1xuICBsaWZ0PFI+KG9wZXJhdG9yOiBPcGVyYXRvcjxULCBSPik6IE9ic2VydmFibGU8Uj4ge1xuICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgQW5vbnltb3VzU3ViamVjdCh0aGlzLCB0aGlzKTtcbiAgICBzdWJqZWN0Lm9wZXJhdG9yID0gb3BlcmF0b3IgYXMgYW55O1xuICAgIHJldHVybiBzdWJqZWN0IGFzIGFueTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF90aHJvd0lmQ2xvc2VkKCkge1xuICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgdGhyb3cgbmV3IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCh2YWx1ZTogVCkge1xuICAgIGVycm9yQ29udGV4dCgoKSA9PiB7XG4gICAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50T2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gQXJyYXkuZnJvbSh0aGlzLm9ic2VydmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiB0aGlzLmN1cnJlbnRPYnNlcnZlcnMpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZXJyb3IoZXJyOiBhbnkpIHtcbiAgICBlcnJvckNvbnRleHQoKCkgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRocm93bkVycm9yID0gZXJyO1xuICAgICAgICBjb25zdCB7IG9ic2VydmVycyB9ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKG9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgICBvYnNlcnZlcnMuc2hpZnQoKSEuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgZXJyb3JDb250ZXh0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCB7IG9ic2VydmVycyB9ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKG9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgICBvYnNlcnZlcnMuc2hpZnQoKSEuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5pc1N0b3BwZWQgPSB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsITtcbiAgfVxuXG4gIGdldCBvYnNlcnZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnM/Lmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfdHJ5U3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICB0aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgcmV0dXJuIHN1cGVyLl90cnlTdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBTdWJzY3JpcHRpb24ge1xuICAgIHRoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICB0aGlzLl9jaGVja0ZpbmFsaXplZFN0YXR1c2VzKHN1YnNjcmliZXIpO1xuICAgIHJldHVybiB0aGlzLl9pbm5lclN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9pbm5lclN1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pIHtcbiAgICBjb25zdCB7IGhhc0Vycm9yLCBpc1N0b3BwZWQsIG9ic2VydmVycyB9ID0gdGhpcztcbiAgICBpZiAoaGFzRXJyb3IgfHwgaXNTdG9wcGVkKSB7XG4gICAgICByZXR1cm4gRU1QVFlfU1VCU0NSSVBUSU9OO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgIG9ic2VydmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICBhcnJSZW1vdmUob2JzZXJ2ZXJzLCBzdWJzY3JpYmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIF9jaGVja0ZpbmFsaXplZFN0YXR1c2VzKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55Pikge1xuICAgIGNvbnN0IHsgaGFzRXJyb3IsIHRocm93bkVycm9yLCBpc1N0b3BwZWQgfSA9IHRoaXM7XG4gICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICBzdWJzY3JpYmVyLmVycm9yKHRocm93bkVycm9yKTtcbiAgICB9IGVsc2UgaWYgKGlzU3RvcHBlZCkge1xuICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE9ic2VydmFibGUgd2l0aCB0aGlzIFN1YmplY3QgYXMgdGhlIHNvdXJjZS4gWW91IGNhbiBkbyB0aGlzXG4gICAqIHRvIGNyZWF0ZSBjdXN0b20gT2JzZXJ2ZXItc2lkZSBsb2dpYyBvZiB0aGUgU3ViamVjdCBhbmQgY29uY2VhbCBpdCBmcm9tXG4gICAqIGNvZGUgdGhhdCB1c2VzIHRoZSBPYnNlcnZhYmxlLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBPYnNlcnZhYmxlIHRoYXQgdGhlIFN1YmplY3QgY2FzdHMgdG9cbiAgICovXG4gIGFzT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlOiBhbnkgPSBuZXcgT2JzZXJ2YWJsZTxUPigpO1xuICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBBbm9ueW1vdXNTdWJqZWN0PFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNTdWJqZWN0PFQ+IGV4dGVuZHMgU3ViamVjdDxUPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBAZGVwcmVjYXRlZCBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwsIGRvIG5vdCB1c2UgZGlyZWN0bHkuIFdpbGwgYmUgbWFkZSBpbnRlcm5hbCBpbiB2OC4gKi9cbiAgICBwdWJsaWMgZGVzdGluYXRpb24/OiBPYnNlcnZlcjxUPixcbiAgICBzb3VyY2U/OiBPYnNlcnZhYmxlPFQ+XG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIH1cblxuICBuZXh0KHZhbHVlOiBUKSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbj8ubmV4dD8uKHZhbHVlKTtcbiAgfVxuXG4gIGVycm9yKGVycjogYW55KSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbj8uZXJyb3I/LihlcnIpO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbj8uY29tcGxldGU/LigpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2U/LnN1YnNjcmliZShzdWJzY3JpYmVyKSA/PyBFTVBUWV9TVUJTQ1JJUFRJT047XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAnLi9TdWJqZWN0JztcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuXG4vKipcbiAqIEEgdmFyaWFudCBvZiBTdWJqZWN0IHRoYXQgcmVxdWlyZXMgYW4gaW5pdGlhbCB2YWx1ZSBhbmQgZW1pdHMgaXRzIGN1cnJlbnRcbiAqIHZhbHVlIHdoZW5ldmVyIGl0IGlzIHN1YnNjcmliZWQgdG8uXG4gKlxuICogQGNsYXNzIEJlaGF2aW9yU3ViamVjdDxUPlxuICovXG5leHBvcnQgY2xhc3MgQmVoYXZpb3JTdWJqZWN0PFQ+IGV4dGVuZHMgU3ViamVjdDxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZhbHVlOiBUKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBzdXBlci5fc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICFzdWJzY3JpcHRpb24uY2xvc2VkICYmIHN1YnNjcmliZXIubmV4dCh0aGlzLl92YWx1ZSk7XG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldFZhbHVlKCk6IFQge1xuICAgIGNvbnN0IHsgaGFzRXJyb3IsIHRocm93bkVycm9yLCBfdmFsdWUgfSA9IHRoaXM7XG4gICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICB0aHJvdyB0aHJvd25FcnJvcjtcbiAgICB9XG4gICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgIHJldHVybiBfdmFsdWU7XG4gIH1cblxuICBuZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgc3VwZXIubmV4dCgodGhpcy5fdmFsdWUgPSB2YWx1ZSkpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTY2hlZHVsZXIodmFsdWU6IGFueSk6IHZhbHVlIGlzIFNjaGVkdWxlckxpa2Uge1xuICByZXR1cm4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5zY2hlZHVsZSk7XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuL2lzU2NoZWR1bGVyJztcblxuZnVuY3Rpb24gbGFzdDxUPihhcnI6IFRbXSk6IFQgfCB1bmRlZmluZWQge1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFJlc3VsdFNlbGVjdG9yKGFyZ3M6IGFueVtdKTogKCguLi5hcmdzOiB1bmtub3duW10pID0+IHVua25vd24pIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24obGFzdChhcmdzKSkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wU2NoZWR1bGVyKGFyZ3M6IGFueVtdKTogU2NoZWR1bGVyTGlrZSB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBpc1NjaGVkdWxlcihsYXN0KGFyZ3MpKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BOdW1iZXIoYXJnczogYW55W10sIGRlZmF1bHRWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiBsYXN0KGFyZ3MpID09PSAnbnVtYmVyJyA/IGFyZ3MucG9wKCkhIDogZGVmYXVsdFZhbHVlO1xufVxuIiwgImV4cG9ydCBjb25zdCBpc0FycmF5TGlrZSA9ICg8VD4oeDogYW55KTogeCBpcyBBcnJheUxpa2U8VD4gPT4geCAmJiB0eXBlb2YgeC5sZW5ndGggPT09ICdudW1iZXInICYmIHR5cGVvZiB4ICE9PSAnZnVuY3Rpb24nKTsiLCAiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gXCIuL2lzRnVuY3Rpb25cIjtcblxuLyoqXG4gKiBUZXN0cyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBcInRoZW5uYWJsZVwiLlxuICogQHBhcmFtIHZhbHVlIHRoZSBvYmplY3QgdG8gdGVzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBQcm9taXNlTGlrZTxhbnk+IHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24odmFsdWU/LnRoZW4pO1xufVxuIiwgImltcG9ydCB7IEludGVyb3BPYnNlcnZhYmxlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG4vKiogSWRlbnRpZmllcyBhbiBpbnB1dCBhcyBiZWluZyBPYnNlcnZhYmxlIChidXQgbm90IG5lY2Vzc2FyeSBhbiBSeCBPYnNlcnZhYmxlKSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQ6IGFueSk6IGlucHV0IGlzIEludGVyb3BPYnNlcnZhYmxlPGFueT4ge1xuICByZXR1cm4gaXNGdW5jdGlvbihpbnB1dFtTeW1ib2xfb2JzZXJ2YWJsZV0pO1xufVxuIiwgImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3luY0l0ZXJhYmxlPFQ+KG9iajogYW55KTogb2JqIGlzIEFzeW5jSXRlcmFibGU8VD4ge1xuICByZXR1cm4gU3ltYm9sLmFzeW5jSXRlcmF0b3IgJiYgaXNGdW5jdGlvbihvYmo/LltTeW1ib2wuYXN5bmNJdGVyYXRvcl0pO1xufVxuIiwgIi8qKlxuICogQ3JlYXRlcyB0aGUgVHlwZUVycm9yIHRvIHRocm93IGlmIGFuIGludmFsaWQgb2JqZWN0IGlzIHBhc3NlZCB0byBgZnJvbWAgb3IgYHNjaGVkdWxlZGAuXG4gKiBAcGFyYW0gaW5wdXQgVGhlIG9iamVjdCB0aGF0IHdhcyBwYXNzZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dDogYW55KSB7XG4gIC8vIFRPRE86IFdlIHNob3VsZCBjcmVhdGUgZXJyb3IgY29kZXMgdGhhdCBjYW4gYmUgbG9va2VkIHVwLCBzbyB0aGlzIGNhbiBiZSBsZXNzIHZlcmJvc2UuXG4gIHJldHVybiBuZXcgVHlwZUVycm9yKFxuICAgIGBZb3UgcHJvdmlkZWQgJHtcbiAgICAgIGlucHV0ICE9PSBudWxsICYmIHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgPyAnYW4gaW52YWxpZCBvYmplY3QnIDogYCcke2lucHV0fSdgXG4gICAgfSB3aGVyZSBhIHN0cmVhbSB3YXMgZXhwZWN0ZWQuIFlvdSBjYW4gcHJvdmlkZSBhbiBPYnNlcnZhYmxlLCBQcm9taXNlLCBSZWFkYWJsZVN0cmVhbSwgQXJyYXksIEFzeW5jSXRlcmFibGUsIG9yIEl0ZXJhYmxlLmBcbiAgKTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sSXRlcmF0b3IoKTogc3ltYm9sIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgIVN5bWJvbC5pdGVyYXRvcikge1xuICAgIHJldHVybiAnQEBpdGVyYXRvcicgYXMgYW55O1xuICB9XG5cbiAgcmV0dXJuIFN5bWJvbC5pdGVyYXRvcjtcbn1cblxuZXhwb3J0IGNvbnN0IGl0ZXJhdG9yID0gZ2V0U3ltYm9sSXRlcmF0b3IoKTtcbiIsICJpbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbi8qKiBJZGVudGlmaWVzIGFuIGlucHV0IGFzIGJlaW5nIGFuIEl0ZXJhYmxlICovXG5leHBvcnQgZnVuY3Rpb24gaXNJdGVyYWJsZShpbnB1dDogYW55KTogaW5wdXQgaXMgSXRlcmFibGU8YW55PiB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGlucHV0Py5bU3ltYm9sX2l0ZXJhdG9yXSk7XG59XG4iLCAiaW1wb3J0IHsgUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiogcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcjxUPihyZWFkYWJsZVN0cmVhbTogUmVhZGFibGVTdHJlYW1MaWtlPFQ+KTogQXN5bmNHZW5lcmF0b3I8VD4ge1xuICBjb25zdCByZWFkZXIgPSByZWFkYWJsZVN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgIGlmIChkb25lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHlpZWxkIHZhbHVlITtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVhZGVyLnJlbGVhc2VMb2NrKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZGFibGVTdHJlYW1MaWtlPFQ+KG9iajogYW55KTogb2JqIGlzIFJlYWRhYmxlU3RyZWFtTGlrZTxUPiB7XG4gIC8vIFdlIGRvbid0IHdhbnQgdG8gdXNlIGluc3RhbmNlb2YgY2hlY2tzIGJlY2F1c2UgdGhleSB3b3VsZCByZXR1cm5cbiAgLy8gZmFsc2UgZm9yIGluc3RhbmNlcyBmcm9tIGFub3RoZXIgUmVhbG0sIGxpa2UgYW4gPGlmcmFtZT4uXG4gIHJldHVybiBpc0Z1bmN0aW9uKG9iaj8uZ2V0UmVhZGVyKTtcbn1cbiIsICJpbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0LCBPYnNlcnZlZFZhbHVlT2YsIFJlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0FzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IgfSBmcm9tICcuLi91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3InO1xuaW1wb3J0IHsgaXNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJdGVyYWJsZSc7XG5pbXBvcnQgeyBpc1JlYWRhYmxlU3RyZWFtTGlrZSwgcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvciB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyByZXBvcnRVbmhhbmRsZWRFcnJvciB9IGZyb20gJy4uL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3InO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N5bWJvbC9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlubmVyRnJvbTxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KGlucHV0OiBPKTogT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz4+O1xuZXhwb3J0IGZ1bmN0aW9uIGlubmVyRnJvbTxUPihpbnB1dDogT2JzZXJ2YWJsZUlucHV0PFQ+KTogT2JzZXJ2YWJsZTxUPiB7XG4gIGlmIChpbnB1dCBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBmcm9tSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheUxpa2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZShpbnB1dCk7XG4gICAgfVxuICAgIGlmIChpc1Byb21pc2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbVByb21pc2UoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAoaXNBc3luY0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gZnJvbUl0ZXJhYmxlKGlucHV0KTtcbiAgICB9XG4gICAgaWYgKGlzUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZyb21SZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIFJ4SlMgT2JzZXJ2YWJsZSBmcm9tIGFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgYFN5bWJvbC5vYnNlcnZhYmxlYC5cbiAqIEBwYXJhbSBvYmogQW4gb2JqZWN0IHRoYXQgcHJvcGVybHkgaW1wbGVtZW50cyBgU3ltYm9sLm9ic2VydmFibGVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUludGVyb3BPYnNlcnZhYmxlPFQ+KG9iajogYW55KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIGNvbnN0IG9icyA9IG9ialtTeW1ib2xfb2JzZXJ2YWJsZV0oKTtcbiAgICBpZiAoaXNGdW5jdGlvbihvYnMuc3Vic2NyaWJlKSkge1xuICAgICAgcmV0dXJuIG9icy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfVxuICAgIC8vIFNob3VsZCBiZSBjYXVnaHQgYnkgb2JzZXJ2YWJsZSBzdWJzY3JpYmUgZnVuY3Rpb24gZXJyb3IgaGFuZGxpbmcuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvdmlkZWQgb2JqZWN0IGRvZXMgbm90IGNvcnJlY3RseSBpbXBsZW1lbnQgU3ltYm9sLm9ic2VydmFibGUnKTtcbiAgfSk7XG59XG5cbi8qKlxuICogU3luY2hyb25vdXNseSBlbWl0cyB0aGUgdmFsdWVzIG9mIGFuIGFycmF5IGxpa2UgYW5kIGNvbXBsZXRlcy5cbiAqIFRoaXMgaXMgZXhwb3J0ZWQgYmVjYXVzZSB0aGVyZSBhcmUgY3JlYXRpb24gZnVuY3Rpb25zIGFuZCBvcGVyYXRvcnMgdGhhdCBuZWVkIHRvXG4gKiBtYWtlIGRpcmVjdCB1c2Ugb2YgdGhlIHNhbWUgbG9naWMsIGFuZCB0aGVyZSdzIG5vIHJlYXNvbiB0byBtYWtlIHRoZW0gcnVuIHRocm91Z2hcbiAqIGBmcm9tYCBjb25kaXRpb25hbHMgYmVjYXVzZSB3ZSAqa25vdyogdGhleSdyZSBkZWFsaW5nIHdpdGggYW4gYXJyYXkuXG4gKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IHRvIGVtaXQgdmFsdWVzIGZyb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21BcnJheUxpa2U8VD4oYXJyYXk6IEFycmF5TGlrZTxUPikge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pID0+IHtcbiAgICAvLyBMb29wIG92ZXIgdGhlIGFycmF5IGFuZCBlbWl0IGVhY2ggdmFsdWUuIE5vdGUgdHdvIHRoaW5ncyBoZXJlOlxuICAgIC8vIDEuIFdlJ3JlIG1ha2luZyBzdXJlIHRoYXQgdGhlIHN1YnNjcmliZXIgaXMgbm90IGNsb3NlZCBvbiBlYWNoIGxvb3AuXG4gICAgLy8gICAgVGhpcyBpcyBzbyB3ZSBkb24ndCBjb250aW51ZSBsb29waW5nIG92ZXIgYSB2ZXJ5IGxhcmdlIGFycmF5IGFmdGVyXG4gICAgLy8gICAgc29tZXRoaW5nIGxpa2UgYSBgdGFrZWAsIGB0YWtlV2hpbGVgLCBvciBvdGhlciBzeW5jaHJvbm91cyB1bnN1YnNjcmlwdGlvblxuICAgIC8vICAgIGhhcyBhbHJlYWR5IHVuc3Vic2NyaWJlZC5cbiAgICAvLyAyLiBJbiB0aGlzIGZvcm0sIHJlZW50cmFudCBjb2RlIGNhbiBhbHRlciB0aGF0IGFycmF5IHdlJ3JlIGxvb3Bpbmcgb3Zlci5cbiAgICAvLyAgICBUaGlzIGlzIGEga25vd24gaXNzdWUsIGJ1dCBjb25zaWRlcmVkIGFuIGVkZ2UgY2FzZS4gVGhlIGFsdGVybmF0aXZlIHdvdWxkXG4gICAgLy8gICAgYmUgdG8gY29weSB0aGUgYXJyYXkgYmVmb3JlIGV4ZWN1dGluZyB0aGUgbG9vcCwgYnV0IHRoaXMgaGFzXG4gICAgLy8gICAgcGVyZm9ybWFuY2UgaW1wbGljYXRpb25zLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICBzdWJzY3JpYmVyLm5leHQoYXJyYXlbaV0pO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVByb21pc2U8VD4ocHJvbWlzZTogUHJvbWlzZUxpa2U8VD4pIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgcHJvbWlzZVxuICAgICAgLnRoZW4oXG4gICAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyOiBhbnkpID0+IHN1YnNjcmliZXIuZXJyb3IoZXJyKVxuICAgICAgKVxuICAgICAgLnRoZW4obnVsbCwgcmVwb3J0VW5oYW5kbGVkRXJyb3IpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21JdGVyYWJsZTxUPihpdGVyYWJsZTogSXRlcmFibGU8VD4pIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSA9PiB7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBpdGVyYWJsZSkge1xuICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQXN5bmNJdGVyYWJsZTxUPihhc3luY0l0ZXJhYmxlOiBBc3luY0l0ZXJhYmxlPFQ+KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgIHByb2Nlc3MoYXN5bmNJdGVyYWJsZSwgc3Vic2NyaWJlcikuY2F0Y2goKGVycikgPT4gc3Vic2NyaWJlci5lcnJvcihlcnIpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUmVhZGFibGVTdHJlYW1MaWtlPFQ+KHJlYWRhYmxlU3RyZWFtOiBSZWFkYWJsZVN0cmVhbUxpa2U8VD4pIHtcbiAgcmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IocmVhZGFibGVTdHJlYW0pKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2VzczxUPihhc3luY0l0ZXJhYmxlOiBBc3luY0l0ZXJhYmxlPFQ+LCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSB7XG4gIGZvciBhd2FpdCAoY29uc3QgdmFsdWUgb2YgYXN5bmNJdGVyYWJsZSkge1xuICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgLy8gQSBzaWRlLWVmZmVjdCBtYXkgaGF2ZSBjbG9zZWQgb3VyIHN1YnNjcmliZXIsXG4gICAgLy8gY2hlY2sgYmVmb3JlIHRoZSBuZXh0IGl0ZXJhdGlvbi5cbiAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xufVxuIiwgImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBTY2hlZHVsZXJBY3Rpb24sIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU2NoZWR1bGUoXG4gIHBhcmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsXG4gIHdvcms6ICgpID0+IHZvaWQsXG4gIGRlbGF5OiBudW1iZXIsXG4gIHJlcGVhdDogdHJ1ZVxuKTogdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlU2NoZWR1bGUoXG4gIHBhcmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uLFxuICBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsXG4gIHdvcms6ICgpID0+IHZvaWQsXG4gIGRlbGF5PzogbnVtYmVyLFxuICByZXBlYXQ/OiBmYWxzZVxuKTogU3Vic2NyaXB0aW9uO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVNjaGVkdWxlKFxuICBwYXJlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbixcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlLFxuICB3b3JrOiAoKSA9PiB2b2lkLFxuICBkZWxheSA9IDAsXG4gIHJlcGVhdCA9IGZhbHNlXG4pOiBTdWJzY3JpcHRpb24gfCB2b2lkIHtcbiAgY29uc3Qgc2NoZWR1bGVTdWJzY3JpcHRpb24gPSBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKHRoaXM6IFNjaGVkdWxlckFjdGlvbjxhbnk+KSB7XG4gICAgd29yaygpO1xuICAgIGlmIChyZXBlYXQpIHtcbiAgICAgIHBhcmVudFN1YnNjcmlwdGlvbi5hZGQodGhpcy5zY2hlZHVsZShudWxsLCBkZWxheSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9LCBkZWxheSk7XG5cbiAgcGFyZW50U3Vic2NyaXB0aW9uLmFkZChzY2hlZHVsZVN1YnNjcmlwdGlvbik7XG5cbiAgaWYgKCFyZXBlYXQpIHtcbiAgICAvLyBCZWNhdXNlIHVzZXItbGFuZCBzY2hlZHVsZXIgaW1wbGVtZW50YXRpb25zIGFyZSB1bmxpa2VseSB0byBwcm9wZXJseSByZXVzZVxuICAgIC8vIEFjdGlvbnMgZm9yIHJlcGVhdCBzY2hlZHVsaW5nLCB3ZSBjYW4ndCB0cnVzdCB0aGF0IHRoZSByZXR1cm5lZCBzdWJzY3JpcHRpb25cbiAgICAvLyB3aWxsIGNvbnRyb2wgcmVwZWF0IHN1YnNjcmlwdGlvbiBzY2VuYXJpb3MuIFNvIHdlJ3JlIHRyeWluZyB0byBhdm9pZCB1c2luZyB0aGVtXG4gICAgLy8gaW5jb3JyZWN0bHkgd2l0aGluIHRoaXMgbGlicmFyeS5cbiAgICByZXR1cm4gc2NoZWR1bGVTdWJzY3JpcHRpb247XG4gIH1cbn1cbiIsICIvKiogQHByZXR0aWVyICovXG5pbXBvcnQgeyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sIFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcblxuLyoqXG4gKiBSZS1lbWl0cyBhbGwgbm90aWZpY2F0aW9ucyBmcm9tIHNvdXJjZSBPYnNlcnZhYmxlIHdpdGggc3BlY2lmaWVkIHNjaGVkdWxlci5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+RW5zdXJlIGEgc3BlY2lmaWMgc2NoZWR1bGVyIGlzIHVzZWQsIGZyb20gb3V0c2lkZSBvZiBhbiBPYnNlcnZhYmxlLjwvc3Bhbj5cbiAqXG4gKiBgb2JzZXJ2ZU9uYCBpcyBhbiBvcGVyYXRvciB0aGF0IGFjY2VwdHMgYSBzY2hlZHVsZXIgYXMgYSBmaXJzdCBwYXJhbWV0ZXIsIHdoaWNoIHdpbGwgYmUgdXNlZCB0byByZXNjaGVkdWxlXG4gKiBub3RpZmljYXRpb25zIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBJdCBtaWdodCBiZSB1c2VmdWwsIGlmIHlvdSBkbyBub3QgaGF2ZSBjb250cm9sIG92ZXJcbiAqIGludGVybmFsIHNjaGVkdWxlciBvZiBhIGdpdmVuIE9ic2VydmFibGUsIGJ1dCB3YW50IHRvIGNvbnRyb2wgd2hlbiBpdHMgdmFsdWVzIGFyZSBlbWl0dGVkIG5ldmVydGhlbGVzcy5cbiAqXG4gKiBSZXR1cm5lZCBPYnNlcnZhYmxlIGVtaXRzIHRoZSBzYW1lIG5vdGlmaWNhdGlvbnMgKG5leHRlZCB2YWx1ZXMsIGNvbXBsZXRlIGFuZCBlcnJvciBldmVudHMpIGFzIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSxcbiAqIGJ1dCByZXNjaGVkdWxlZCB3aXRoIHByb3ZpZGVkIHNjaGVkdWxlci4gTm90ZSB0aGF0IHRoaXMgZG9lc24ndCBtZWFuIHRoYXQgc291cmNlIE9ic2VydmFibGVzIGludGVybmFsXG4gKiBzY2hlZHVsZXIgd2lsbCBiZSByZXBsYWNlZCBpbiBhbnkgd2F5LiBPcmlnaW5hbCBzY2hlZHVsZXIgc3RpbGwgd2lsbCBiZSB1c2VkLCBidXQgd2hlbiB0aGUgc291cmNlIE9ic2VydmFibGUgZW1pdHNcbiAqIG5vdGlmaWNhdGlvbiwgaXQgd2lsbCBiZSBpbW1lZGlhdGVseSBzY2hlZHVsZWQgYWdhaW4gLSB0aGlzIHRpbWUgd2l0aCBzY2hlZHVsZXIgcGFzc2VkIHRvIGBvYnNlcnZlT25gLlxuICogQW4gYW50aS1wYXR0ZXJuIHdvdWxkIGJlIGNhbGxpbmcgYG9ic2VydmVPbmAgb24gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGxvdHMgb2YgdmFsdWVzIHN5bmNocm9ub3VzbHksIHRvIHNwbGl0XG4gKiB0aGF0IGVtaXNzaW9ucyBpbnRvIGFzeW5jaHJvbm91cyBjaHVua3MuIEZvciB0aGlzIHRvIGhhcHBlbiwgc2NoZWR1bGVyIHdvdWxkIGhhdmUgdG8gYmUgcGFzc2VkIGludG8gdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSBkaXJlY3RseSAodXN1YWxseSBpbnRvIHRoZSBvcGVyYXRvciB0aGF0IGNyZWF0ZXMgaXQpLiBgb2JzZXJ2ZU9uYCBzaW1wbHkgZGVsYXlzIG5vdGlmaWNhdGlvbnMgYVxuICogbGl0dGxlIGJpdCBtb3JlLCB0byBlbnN1cmUgdGhhdCB0aGV5IGFyZSBlbWl0dGVkIGF0IGV4cGVjdGVkIG1vbWVudHMuXG4gKlxuICogQXMgYSBtYXR0ZXIgb2YgZmFjdCwgYG9ic2VydmVPbmAgYWNjZXB0cyBzZWNvbmQgcGFyYW1ldGVyLCB3aGljaCBzcGVjaWZpZXMgaW4gbWlsbGlzZWNvbmRzIHdpdGggd2hhdCBkZWxheSBub3RpZmljYXRpb25zXG4gKiB3aWxsIGJlIGVtaXR0ZWQuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiB7QGxpbmsgZGVsYXl9IG9wZXJhdG9yIGFuZCBgb2JzZXJ2ZU9uYCBpcyB0aGF0IGBvYnNlcnZlT25gXG4gKiB3aWxsIGRlbGF5IGFsbCBub3RpZmljYXRpb25zIC0gaW5jbHVkaW5nIGVycm9yIG5vdGlmaWNhdGlvbnMgLSB3aGlsZSBgZGVsYXlgIHdpbGwgcGFzcyB0aHJvdWdoIGVycm9yXG4gKiBmcm9tIHNvdXJjZSBPYnNlcnZhYmxlIGltbWVkaWF0ZWx5IHdoZW4gaXQgaXMgZW1pdHRlZC4gSW4gZ2VuZXJhbCBpdCBpcyBoaWdobHkgcmVjb21tZW5kZWQgdG8gdXNlIGBkZWxheWAgb3BlcmF0b3JcbiAqIGZvciBhbnkga2luZCBvZiBkZWxheWluZyBvZiB2YWx1ZXMgaW4gdGhlIHN0cmVhbSwgd2hpbGUgdXNpbmcgYG9ic2VydmVPbmAgdG8gc3BlY2lmeSB3aGljaCBzY2hlZHVsZXIgc2hvdWxkIGJlIHVzZWRcbiAqIGZvciBub3RpZmljYXRpb24gZW1pc3Npb25zIGluIGdlbmVyYWwuXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIEVuc3VyZSB2YWx1ZXMgaW4gc3Vic2NyaWJlIGFyZSBjYWxsZWQganVzdCBiZWZvcmUgYnJvd3NlciByZXBhaW50XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGludGVydmFsLCBvYnNlcnZlT24sIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgc29tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICogc29tZURpdi5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiAyMDBweDtiYWNrZ3JvdW5kOiAjMDljJztcbiAqIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc29tZURpdik7XG4gKiBjb25zdCBpbnRlcnZhbHMgPSBpbnRlcnZhbCgxMCk7ICAgICAgLy8gSW50ZXJ2YWxzIGFyZSBzY2hlZHVsZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGFzeW5jIHNjaGVkdWxlciBieSBkZWZhdWx0Li4uXG4gKiBpbnRlcnZhbHMucGlwZShcbiAqICAgb2JzZXJ2ZU9uKGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSAvLyAuLi5idXQgd2Ugd2lsbCBvYnNlcnZlIG9uIGFuaW1hdGlvbkZyYW1lXG4gKiApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2NoZWR1bGVyIHRvIGVuc3VyZSBzbW9vdGggYW5pbWF0aW9uLlxuICogLnN1YnNjcmliZSh2YWwgPT4ge1xuICogICBzb21lRGl2LnN0eWxlLmhlaWdodCA9IHZhbCArICdweCc7XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGRlbGF5fVxuICpcbiAqIEBwYXJhbSBzY2hlZHVsZXIgU2NoZWR1bGVyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHJlc2NoZWR1bGUgbm90aWZpY2F0aW9ucyBmcm9tIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQHBhcmFtIGRlbGF5IE51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBzdGF0ZXMgd2l0aCB3aGF0IGRlbGF5IGV2ZXJ5IG5vdGlmaWNhdGlvbiBzaG91bGQgYmUgcmVzY2hlZHVsZWQuXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgc2FtZVxuICogbm90aWZpY2F0aW9ucyBhcyB0aGUgc291cmNlIE9ic2VydmFibGUsIGJ1dCB3aXRoIHByb3ZpZGVkIHNjaGVkdWxlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVPbjxUPihzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UsIGRlbGF5ID0gMCk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gIHJldHVybiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IHtcbiAgICBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKFxuICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICAodmFsdWUpID0+IGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHN1YnNjcmliZXIubmV4dCh2YWx1ZSksIGRlbGF5KSxcbiAgICAgICAgKCkgPT4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgKCkgPT4gc3Vic2NyaWJlci5jb21wbGV0ZSgpLCBkZWxheSksXG4gICAgICAgIChlcnIpID0+IGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsICgpID0+IHN1YnNjcmliZXIuZXJyb3IoZXJyKSwgZGVsYXkpXG4gICAgICApXG4gICAgKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5cbi8qKlxuICogQXN5bmNocm9ub3VzbHkgc3Vic2NyaWJlcyBPYnNlcnZlcnMgdG8gdGhpcyBPYnNlcnZhYmxlIG9uIHRoZSBzcGVjaWZpZWQge0BsaW5rIFNjaGVkdWxlckxpa2V9LlxuICpcbiAqIFdpdGggYHN1YnNjcmliZU9uYCB5b3UgY2FuIGRlY2lkZSB3aGF0IHR5cGUgb2Ygc2NoZWR1bGVyIGEgc3BlY2lmaWMgT2JzZXJ2YWJsZSB3aWxsIGJlIHVzaW5nIHdoZW4gaXQgaXMgc3Vic2NyaWJlZCB0by5cbiAqXG4gKiBTY2hlZHVsZXJzIGNvbnRyb2wgdGhlIHNwZWVkIGFuZCBvcmRlciBvZiBlbWlzc2lvbnMgdG8gb2JzZXJ2ZXJzIGZyb20gYW4gT2JzZXJ2YWJsZSBzdHJlYW0uXG4gKlxuICogIVtdKHN1YnNjcmliZU9uLnBuZylcbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogR2l2ZW4gdGhlIGZvbGxvd2luZyBjb2RlOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBhID0gb2YoMSwgMiwgMyk7XG4gKiBjb25zdCBiID0gb2YoNCwgNSwgNik7XG4gKlxuICogbWVyZ2UoYSwgYikuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAqXG4gKiAvLyBPdXRwdXRzXG4gKiAvLyAxXG4gKiAvLyAyXG4gKiAvLyAzXG4gKiAvLyA0XG4gKiAvLyA1XG4gKiAvLyA2XG4gKiBgYGBcbiAqXG4gKiBCb3RoIE9ic2VydmFibGUgYGFgIGFuZCBgYmAgd2lsbCBlbWl0IHRoZWlyIHZhbHVlcyBkaXJlY3RseSBhbmQgc3luY2hyb25vdXNseSBvbmNlIHRoZXkgYXJlIHN1YnNjcmliZWQgdG8uXG4gKlxuICogSWYgd2UgaW5zdGVhZCB1c2UgdGhlIGBzdWJzY3JpYmVPbmAgb3BlcmF0b3IgZGVjbGFyaW5nIHRoYXQgd2Ugd2FudCB0byB1c2UgdGhlIHtAbGluayBhc3luY1NjaGVkdWxlcn0gZm9yIHZhbHVlcyBlbWl0dGVkIGJ5IE9ic2VydmFibGUgYGFgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgc3Vic2NyaWJlT24sIGFzeW5jU2NoZWR1bGVyLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGEgPSBvZigxLCAyLCAzKS5waXBlKHN1YnNjcmliZU9uKGFzeW5jU2NoZWR1bGVyKSk7XG4gKiBjb25zdCBiID0gb2YoNCwgNSwgNik7XG4gKlxuICogbWVyZ2UoYSwgYikuc3Vic2NyaWJlKGNvbnNvbGUubG9nKTtcbiAqXG4gKiAvLyBPdXRwdXRzXG4gKiAvLyA0XG4gKiAvLyA1XG4gKiAvLyA2XG4gKiAvLyAxXG4gKiAvLyAyXG4gKiAvLyAzXG4gKiBgYGBcbiAqXG4gKiBUaGUgcmVhc29uIGZvciB0aGlzIGlzIHRoYXQgT2JzZXJ2YWJsZSBgYmAgZW1pdHMgaXRzIHZhbHVlcyBkaXJlY3RseSBhbmQgc3luY2hyb25vdXNseSBsaWtlIGJlZm9yZVxuICogYnV0IHRoZSBlbWlzc2lvbnMgZnJvbSBgYWAgYXJlIHNjaGVkdWxlZCBvbiB0aGUgZXZlbnQgbG9vcCBiZWNhdXNlIHdlIGFyZSBub3cgdXNpbmcgdGhlIHtAbGluayBhc3luY1NjaGVkdWxlcn0gZm9yIHRoYXQgc3BlY2lmaWMgT2JzZXJ2YWJsZS5cbiAqXG4gKiBAcGFyYW0gc2NoZWR1bGVyIFRoZSB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gdG8gcGVyZm9ybSBzdWJzY3JpcHRpb24gYWN0aW9ucyBvbi5cbiAqIEBwYXJhbSBkZWxheSBBIGRlbGF5IHRvIHBhc3MgdG8gdGhlIHNjaGVkdWxlciB0byBkZWxheSBzdWJzY3JpcHRpb25zXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgbW9kaWZpZWQgc28gdGhhdCBpdHNcbiAqIHN1YnNjcmlwdGlvbnMgaGFwcGVuIG9uIHRoZSBzcGVjaWZpZWQge0BsaW5rIFNjaGVkdWxlckxpa2V9LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlT248VD4oc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlLCBkZWxheTogbnVtYmVyID0gMCk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gIHJldHVybiBvcGVyYXRlKChzb3VyY2UsIHN1YnNjcmliZXIpID0+IHtcbiAgICBzdWJzY3JpYmVyLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKSwgZGVsYXkpKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgb2JzZXJ2ZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL29ic2VydmVPbic7XG5pbXBvcnQgeyBzdWJzY3JpYmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9zdWJzY3JpYmVPbic7XG5pbXBvcnQgeyBJbnRlcm9wT2JzZXJ2YWJsZSwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlT2JzZXJ2YWJsZTxUPihpbnB1dDogSW50ZXJvcE9ic2VydmFibGU8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gaW5uZXJGcm9tKGlucHV0KS5waXBlKHN1YnNjcmliZU9uKHNjaGVkdWxlciksIG9ic2VydmVPbihzY2hlZHVsZXIpKTtcbn1cbiIsICJpbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBvYnNlcnZlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvb2JzZXJ2ZU9uJztcbmltcG9ydCB7IHN1YnNjcmliZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL3N1YnNjcmliZU9uJztcbmltcG9ydCB7IFNjaGVkdWxlckxpa2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZVByb21pc2U8VD4oaW5wdXQ6IFByb21pc2VMaWtlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgcmV0dXJuIGlubmVyRnJvbShpbnB1dCkucGlwZShzdWJzY3JpYmVPbihzY2hlZHVsZXIpLCBvYnNlcnZlT24oc2NoZWR1bGVyKSk7XG59XG4iLCAiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlQXJyYXk8VD4oaW5wdXQ6IEFycmF5TGlrZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIC8vIFRoZSBjdXJyZW50IGFycmF5IGluZGV4LlxuICAgIGxldCBpID0gMDtcbiAgICAvLyBTdGFydCBpdGVyYXRpbmcgb3ZlciB0aGUgYXJyYXkgbGlrZSBvbiBhIHNjaGVkdWxlLlxuICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGkgPT09IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGhpdCB0aGUgZW5kIG9mIHRoZSBhcnJheSBsaWtlIGluIHRoZVxuICAgICAgICAvLyBwcmV2aW91cyBqb2IsIHdlIGNhbiBjb21wbGV0ZS5cbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlIGxldCdzIG5leHQgdGhlIHZhbHVlIGF0IHRoZSBjdXJyZW50IGluZGV4LFxuICAgICAgICAvLyB0aGVuIGluY3JlbWVudCBvdXIgaW5kZXguXG4gICAgICAgIHN1YnNjcmliZXIubmV4dChpbnB1dFtpKytdKTtcbiAgICAgICAgLy8gSWYgdGhlIGxhc3QgZW1pc3Npb24gZGlkbid0IGNhdXNlIHVzIHRvIGNsb3NlIHRoZSBzdWJzY3JpYmVyXG4gICAgICAgIC8vICh2aWEgdGFrZSBvciBzb21lIHNpZGUgZWZmZWN0KSwgcmVzY2hlZHVsZSB0aGUgam9iIGFuZCB3ZSdsbFxuICAgICAgICAvLyBtYWtlIGFub3RoZXIgcGFzcy5cbiAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXRlcmF0b3IgYXMgU3ltYm9sX2l0ZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9sL2l0ZXJhdG9yJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuXG4vKipcbiAqIFVzZWQgaW4ge0BsaW5rIHNjaGVkdWxlZH0gdG8gY3JlYXRlIGFuIG9ic2VydmFibGUgZnJvbSBhbiBJdGVyYWJsZS5cbiAqIEBwYXJhbSBpbnB1dCBUaGUgaXRlcmFibGUgdG8gY3JlYXRlIGFuIG9ic2VydmFibGUgZnJvbVxuICogQHBhcmFtIHNjaGVkdWxlciBUaGUgc2NoZWR1bGVyIHRvIHVzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVJdGVyYWJsZTxUPihpbnB1dDogSXRlcmFibGU8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSkge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oKHN1YnNjcmliZXIpID0+IHtcbiAgICBsZXQgaXRlcmF0b3I6IEl0ZXJhdG9yPFQsIFQ+O1xuXG4gICAgLy8gU2NoZWR1bGUgdGhlIGluaXRpYWwgY3JlYXRpb24gb2YgdGhlIGl0ZXJhdG9yIGZyb21cbiAgICAvLyB0aGUgaXRlcmFibGUuIFRoaXMgaXMgc28gdGhlIGNvZGUgaW4gdGhlIGl0ZXJhYmxlIGlzXG4gICAgLy8gbm90IGNhbGxlZCB1bnRpbCB0aGUgc2NoZWR1bGVkIGpvYiBmaXJlcy5cbiAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgdGhlIGl0ZXJhdG9yLlxuICAgICAgaXRlcmF0b3IgPSAoaW5wdXQgYXMgYW55KVtTeW1ib2xfaXRlcmF0b3JdKCk7XG5cbiAgICAgIGV4ZWN1dGVTY2hlZHVsZShcbiAgICAgICAgc3Vic2NyaWJlcixcbiAgICAgICAgc2NoZWR1bGVyLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZhbHVlOiBUO1xuICAgICAgICAgIGxldCBkb25lOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBQdWxsIHRoZSB2YWx1ZSBvdXQgb2YgdGhlIGl0ZXJhdG9yXG4gICAgICAgICAgICAoeyB2YWx1ZSwgZG9uZSB9ID0gaXRlcmF0b3IubmV4dCgpKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIFdlIGdvdCBhbiBlcnJvciB3aGlsZSBwdWxsaW5nIGZyb20gdGhlIGl0ZXJhdG9yXG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIC8vIElmIGl0IGlzIFwiZG9uZVwiIHdlIGp1c3QgY29tcGxldGUuIFRoaXMgbWltaWNzIHRoZVxuICAgICAgICAgICAgLy8gYmVoYXZpb3Igb2YgSmF2YVNjcmlwdCdzIGBmb3IuLm9mYCBjb25zdW1wdGlvbiBvZlxuICAgICAgICAgICAgLy8gaXRlcmFibGVzLCB3aGljaCB3aWxsIG5vdCBlbWl0IHRoZSB2YWx1ZSBmcm9tIGFuIGl0ZXJhdG9yXG4gICAgICAgICAgICAvLyByZXN1bHQgb2YgYHsgZG9uZTogdHJ1ZTogdmFsdWU6ICdoZXJlJyB9YC5cbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhlIGl0ZXJhYmxlIGlzIG5vdCBkb25lLCBlbWl0IHRoZSB2YWx1ZS5cbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAwLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gRHVyaW5nIGZpbmFsaXphdGlvbiwgaWYgd2Ugc2VlIHRoaXMgaXRlcmF0b3IgaGFzIGEgYHJldHVybmAgbWV0aG9kLFxuICAgIC8vIHRoZW4gd2Uga25vdyBpdCBpcyBhIEdlbmVyYXRvciwgYW5kIG5vdCBqdXN0IGFuIEl0ZXJhdG9yLiBTbyB3ZSBjYWxsXG4gICAgLy8gdGhlIGByZXR1cm4oKWAgZnVuY3Rpb24uIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBhbnkgYGZpbmFsbHkgeyB9YCBibG9ja3NcbiAgICAvLyBpbnNpZGUgb2YgdGhlIGdlbmVyYXRvciB3ZSBjYW4gaGl0IHdpbGwgYmUgaGl0IHByb3Blcmx5LlxuICAgIHJldHVybiAoKSA9PiBpc0Z1bmN0aW9uKGl0ZXJhdG9yPy5yZXR1cm4pICYmIGl0ZXJhdG9yLnJldHVybigpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBc3luY0l0ZXJhYmxlPFQ+KGlucHV0OiBBc3luY0l0ZXJhYmxlPFQ+LCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UpIHtcbiAgaWYgKCFpbnB1dCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSXRlcmFibGUgY2Fubm90IGJlIG51bGwnKTtcbiAgfVxuICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oKHN1YnNjcmliZXIpID0+IHtcbiAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVyYXRvciA9IGlucHV0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpO1xuICAgICAgZXhlY3V0ZVNjaGVkdWxlKFxuICAgICAgICBzdWJzY3JpYmVyLFxuICAgICAgICBzY2hlZHVsZXIsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpdGVyYXRvci5uZXh0KCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHJlbW92ZSB0aGUgc3Vic2NyaXB0aW9ucyBmcm9tXG4gICAgICAgICAgICAgIC8vIHRoZSBwYXJlbnQgc3Vic2NyaXB0aW9uLlxuICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgMCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgU2NoZWR1bGVyTGlrZSwgUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvciB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2U8VD4oaW5wdXQ6IFJlYWRhYmxlU3RyZWFtTGlrZTxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiBzY2hlZHVsZUFzeW5jSXRlcmFibGUocmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcihpbnB1dCksIHNjaGVkdWxlcik7XG59XG4iLCAiaW1wb3J0IHsgc2NoZWR1bGVPYnNlcnZhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZU9ic2VydmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVQcm9taXNlIH0gZnJvbSAnLi9zY2hlZHVsZVByb21pc2UnO1xuaW1wb3J0IHsgc2NoZWR1bGVBcnJheSB9IGZyb20gJy4vc2NoZWR1bGVBcnJheSc7XG5pbXBvcnQgeyBzY2hlZHVsZUl0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUl0ZXJhYmxlJztcbmltcG9ydCB7IHNjaGVkdWxlQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4vc2NoZWR1bGVBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgaXNBcnJheUxpa2UgfSBmcm9tICcuLi91dGlsL2lzQXJyYXlMaWtlJztcbmltcG9ydCB7IGlzSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzSXRlcmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUlucHV0LCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0FzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IgfSBmcm9tICcuLi91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3InO1xuaW1wb3J0IHsgaXNSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcbmltcG9ydCB7IHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi9zY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZSc7XG5cbi8qKlxuICogQ29udmVydHMgZnJvbSBhIGNvbW1vbiB7QGxpbmsgT2JzZXJ2YWJsZUlucHV0fSB0eXBlIHRvIGFuIG9ic2VydmFibGUgd2hlcmUgc3Vic2NyaXB0aW9uIGFuZCBlbWlzc2lvbnNcbiAqIGFyZSBzY2hlZHVsZWQgb24gdGhlIHByb3ZpZGVkIHNjaGVkdWxlci5cbiAqXG4gKiBAc2VlIHtAbGluayBmcm9tfVxuICogQHNlZSB7QGxpbmsgb2Z9XG4gKlxuICogQHBhcmFtIGlucHV0IFRoZSBvYnNlcnZhYmxlLCBhcnJheSwgcHJvbWlzZSwgaXRlcmFibGUsIGV0YyB5b3Ugd291bGQgbGlrZSB0byBzY2hlZHVsZVxuICogQHBhcmFtIHNjaGVkdWxlciBUaGUgc2NoZWR1bGVyIHRvIHVzZSB0byBzY2hlZHVsZSB0aGUgc3Vic2NyaXB0aW9uIGFuZCBlbWlzc2lvbnMgZnJvbVxuICogdGhlIHJldHVybmVkIG9ic2VydmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZWQ8VD4oaW5wdXQ6IE9ic2VydmFibGVJbnB1dDxUPiwgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlKTogT2JzZXJ2YWJsZTxUPiB7XG4gIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgaWYgKGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVPYnNlcnZhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheUxpa2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChpc0FzeW5jSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVBc3luY0l0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICBpZiAoaXNSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxuICB9XG4gIHRocm93IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0KTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIFNjaGVkdWxlckxpa2UsIE9ic2VydmVkVmFsdWVPZiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IHNjaGVkdWxlZCB9IGZyb20gJy4uL3NjaGVkdWxlZC9zY2hlZHVsZWQnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi9pbm5lckZyb20nO1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbTxPIGV4dGVuZHMgT2JzZXJ2YWJsZUlucHV0PGFueT4+KGlucHV0OiBPKTogT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz4+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgc2NoZWR1bGVyYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYHNjaGVkdWxlZGAuIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL3NjaGVkdWxlci1hcmd1bWVudCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb208TyBleHRlbmRzIE9ic2VydmFibGVJbnB1dDxhbnk+PihpbnB1dDogTywgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlIHwgdW5kZWZpbmVkKTogT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz4+O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZSBmcm9tIGFuIEFycmF5LCBhbiBhcnJheS1saWtlIG9iamVjdCwgYSBQcm9taXNlLCBhbiBpdGVyYWJsZSBvYmplY3QsIG9yIGFuIE9ic2VydmFibGUtbGlrZSBvYmplY3QuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkNvbnZlcnRzIGFsbW9zdCBhbnl0aGluZyB0byBhbiBPYnNlcnZhYmxlLjwvc3Bhbj5cbiAqXG4gKiAhW10oZnJvbS5wbmcpXG4gKlxuICogYGZyb21gIGNvbnZlcnRzIHZhcmlvdXMgb3RoZXIgb2JqZWN0cyBhbmQgZGF0YSB0eXBlcyBpbnRvIE9ic2VydmFibGVzLiBJdCBhbHNvIGNvbnZlcnRzIGEgUHJvbWlzZSwgYW4gYXJyYXktbGlrZSwgb3IgYW5cbiAqIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9JdGVyYXRpb25fcHJvdG9jb2xzI2l0ZXJhYmxlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aXRlcmFibGU8L2E+XG4gKiBvYmplY3QgaW50byBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIGl0ZW1zIGluIHRoYXQgcHJvbWlzZSwgYXJyYXksIG9yIGl0ZXJhYmxlLiBBIFN0cmluZywgaW4gdGhpcyBjb250ZXh0LCBpcyB0cmVhdGVkXG4gKiBhcyBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzLiBPYnNlcnZhYmxlLWxpa2Ugb2JqZWN0cyAoY29udGFpbnMgYSBmdW5jdGlvbiBuYW1lZCB3aXRoIHRoZSBFUzIwMTUgU3ltYm9sIGZvciBPYnNlcnZhYmxlKSBjYW4gYWxzbyBiZVxuICogY29udmVydGVkIHRocm91Z2ggdGhpcyBvcGVyYXRvci5cbiAqXG4gKiAjIyBFeGFtcGxlc1xuICpcbiAqIENvbnZlcnRzIGFuIGFycmF5IHRvIGFuIE9ic2VydmFibGVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGFycmF5ID0gWzEwLCAyMCwgMzBdO1xuICogY29uc3QgcmVzdWx0ID0gZnJvbShhcnJheSk7XG4gKlxuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gMTBcbiAqIC8vIDIwXG4gKiAvLyAzMFxuICogYGBgXG4gKlxuICogQ29udmVydCBhbiBpbmZpbml0ZSBpdGVyYWJsZSAoZnJvbSBhIGdlbmVyYXRvcikgdG8gYW4gT2JzZXJ2YWJsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tLCB0YWtlIH0gZnJvbSAncnhqcyc7XG4gKlxuICogZnVuY3Rpb24qIGdlbmVyYXRlRG91YmxlcyhzZWVkKSB7XG4gKiAgICBsZXQgaSA9IHNlZWQ7XG4gKiAgICB3aGlsZSAodHJ1ZSkge1xuICogICAgICB5aWVsZCBpO1xuICogICAgICBpID0gMiAqIGk7IC8vIGRvdWJsZSBpdFxuICogICAgfVxuICogfVxuICpcbiAqIGNvbnN0IGl0ZXJhdG9yID0gZ2VuZXJhdGVEb3VibGVzKDMpO1xuICogY29uc3QgcmVzdWx0ID0gZnJvbShpdGVyYXRvcikucGlwZSh0YWtlKDEwKSk7XG4gKlxuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiAvLyBMb2dzOlxuICogLy8gM1xuICogLy8gNlxuICogLy8gMTJcbiAqIC8vIDI0XG4gKiAvLyA0OFxuICogLy8gOTZcbiAqIC8vIDE5MlxuICogLy8gMzg0XG4gKiAvLyA3NjhcbiAqIC8vIDE1MzZcbiAqIGBgYFxuICpcbiAqIFdpdGggYGFzeW5jU2NoZWR1bGVyYFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tLCBhc3luY1NjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnNvbGUubG9nKCdzdGFydCcpO1xuICpcbiAqIGNvbnN0IGFycmF5ID0gWzEwLCAyMCwgMzBdO1xuICogY29uc3QgcmVzdWx0ID0gZnJvbShhcnJheSwgYXN5bmNTY2hlZHVsZXIpO1xuICpcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogY29uc29sZS5sb2coJ2VuZCcpO1xuICpcbiAqIC8vIExvZ3M6XG4gKiAvLyAnc3RhcnQnXG4gKiAvLyAnZW5kJ1xuICogLy8gMTBcbiAqIC8vIDIwXG4gKiAvLyAzMFxuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgZnJvbUV2ZW50fVxuICogQHNlZSB7QGxpbmsgZnJvbUV2ZW50UGF0dGVybn1cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGVJbnB1dDxUPn0gQSBzdWJzY3JpcHRpb24gb2JqZWN0LCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUtbGlrZSxcbiAqIGFuIEFycmF5LCBhbiBpdGVyYWJsZSwgb3IgYW4gYXJyYXktbGlrZSBvYmplY3QgdG8gYmUgY29udmVydGVkLlxuICogQHBhcmFtIHtTY2hlZHVsZXJMaWtlfSBBbiBvcHRpb25hbCB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gb24gd2hpY2ggdG8gc2NoZWR1bGUgdGhlIGVtaXNzaW9uIG9mIHZhbHVlcy5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8VD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tPFQ+KGlucHV0OiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIHNjaGVkdWxlciA/IHNjaGVkdWxlZChpbnB1dCwgc2NoZWR1bGVyKSA6IGlubmVyRnJvbShpbnB1dCk7XG59XG4iLCAiaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFwPFQsIFI+KHByb2plY3Q6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gUik6IE9wZXJhdG9yRnVuY3Rpb248VCwgUj47XG4vKiogQGRlcHJlY2F0ZWQgVXNlIGEgY2xvc3VyZSBpbnN0ZWFkIG9mIGEgYHRoaXNBcmdgLiBTaWduYXR1cmVzIGFjY2VwdGluZyBhIGB0aGlzQXJnYCB3aWxsIGJlIHJlbW92ZWQgaW4gdjguICovXG5leHBvcnQgZnVuY3Rpb24gbWFwPFQsIFIsIEE+KHByb2plY3Q6ICh0aGlzOiBBLCB2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gUiwgdGhpc0FyZzogQSk6IE9wZXJhdG9yRnVuY3Rpb248VCwgUj47XG5cbi8qKlxuICogQXBwbGllcyBhIGdpdmVuIGBwcm9qZWN0YCBmdW5jdGlvbiB0byBlYWNoIHZhbHVlIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSwgYW5kIGVtaXRzIHRoZSByZXN1bHRpbmcgdmFsdWVzIGFzIGFuIE9ic2VydmFibGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkxpa2UgW0FycmF5LnByb3RvdHlwZS5tYXAoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvbWFwKSxcbiAqIGl0IHBhc3NlcyBlYWNoIHNvdXJjZSB2YWx1ZSB0aHJvdWdoIGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gdG8gZ2V0XG4gKiBjb3JyZXNwb25kaW5nIG91dHB1dCB2YWx1ZXMuPC9zcGFuPlxuICpcbiAqICFbXShtYXAucG5nKVxuICpcbiAqIFNpbWlsYXIgdG8gdGhlIHdlbGwga25vd24gYEFycmF5LnByb3RvdHlwZS5tYXBgIGZ1bmN0aW9uLCB0aGlzIG9wZXJhdG9yXG4gKiBhcHBsaWVzIGEgcHJvamVjdGlvbiB0byBlYWNoIHZhbHVlIGFuZCBlbWl0cyB0aGF0IHByb2plY3Rpb24gaW4gdGhlIG91dHB1dFxuICogT2JzZXJ2YWJsZS5cbiAqXG4gKiAjIyBFeGFtcGxlXG4gKlxuICogTWFwIGV2ZXJ5IGNsaWNrIHRvIHRoZSBgY2xpZW50WGAgcG9zaXRpb24gb2YgdGhhdCBjbGlja1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQsIG1hcCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IGNsaWNrcyA9IGZyb21FdmVudDxQb2ludGVyRXZlbnQ+KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IHBvc2l0aW9ucyA9IGNsaWNrcy5waXBlKG1hcChldiA9PiBldi5jbGllbnRYKSk7XG4gKlxuICogcG9zaXRpb25zLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIG1hcFRvfVxuICogQHNlZSB7QGxpbmsgcGx1Y2t9XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZTogVCwgaW5kZXg6IG51bWJlcik6IFJ9IHByb2plY3QgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5XG4gKiB0byBlYWNoIGB2YWx1ZWAgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUuIFRoZSBgaW5kZXhgIHBhcmFtZXRlciBpc1xuICogdGhlIG51bWJlciBgaWAgZm9yIHRoZSBpLXRoIGVtaXNzaW9uIHRoYXQgaGFzIGhhcHBlbmVkIHNpbmNlIHRoZVxuICogc3Vic2NyaXB0aW9uLCBzdGFydGluZyBmcm9tIHRoZSBudW1iZXIgYDBgLlxuICogQHBhcmFtIHthbnl9IFt0aGlzQXJnXSBBbiBvcHRpb25hbCBhcmd1bWVudCB0byBkZWZpbmUgd2hhdCBgdGhpc2AgaXMgaW4gdGhlXG4gKiBgcHJvamVjdGAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgdmFsdWVzIGZyb20gdGhlXG4gKiBzb3VyY2UgT2JzZXJ2YWJsZSB0cmFuc2Zvcm1lZCBieSB0aGUgZ2l2ZW4gYHByb2plY3RgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwPFQsIFI+KHByb2plY3Q6ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikgPT4gUiwgdGhpc0FyZz86IGFueSk6IE9wZXJhdG9yRnVuY3Rpb248VCwgUj4ge1xuICByZXR1cm4gb3BlcmF0ZSgoc291cmNlLCBzdWJzY3JpYmVyKSA9PiB7XG4gICAgLy8gVGhlIGluZGV4IG9mIHRoZSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2UuIFVzZWQgd2l0aCBwcm9qZWN0aW9uLlxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgLy8gU3Vic2NyaWJlIHRvIHRoZSBzb3VyY2UsIGFsbCBlcnJvcnMgYW5kIGNvbXBsZXRpb25zIGFyZSBzZW50IGFsb25nXG4gICAgLy8gdG8gdGhlIGNvbnN1bWVyLlxuICAgIHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgKHZhbHVlOiBUKSA9PiB7XG4gICAgICAgIC8vIENhbGwgdGhlIHByb2plY3Rpb24gZnVuY3Rpb24gd2l0aCB0aGUgYXBwcm9wcmlhdGUgdGhpcyBjb250ZXh0LFxuICAgICAgICAvLyBhbmQgc2VuZCB0aGUgcmVzdWx0aW5nIHZhbHVlIHRvIHRoZSBjb25zdW1lci5cbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KHByb2plY3QuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgrKykpO1xuICAgICAgfSlcbiAgICApO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwiLi4vb3BlcmF0b3JzL21hcFwiO1xuXG5jb25zdCB7IGlzQXJyYXkgfSA9IEFycmF5O1xuXG5mdW5jdGlvbiBjYWxsT3JBcHBseTxULCBSPihmbjogKCguLi52YWx1ZXM6IFRbXSkgPT4gUiksIGFyZ3M6IFR8VFtdKTogUiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJncykgPyBmbiguLi5hcmdzKSA6IGZuKGFyZ3MpO1xufVxuXG4vKipcbiAqIFVzZWQgaW4gc2V2ZXJhbCAtLSBtb3N0bHkgZGVwcmVjYXRlZCAtLSBzaXR1YXRpb25zIHdoZXJlIHdlIG5lZWQgdG8gXG4gKiBhcHBseSBhIGxpc3Qgb2YgYXJndW1lbnRzIG9yIGEgc2luZ2xlIGFyZ3VtZW50IHRvIGEgcmVzdWx0IHNlbGVjdG9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwT25lT3JNYW55QXJnczxULCBSPihmbjogKCguLi52YWx1ZXM6IFRbXSkgPT4gUikpOiBPcGVyYXRvckZ1bmN0aW9uPFR8VFtdLCBSPiB7XG4gICAgcmV0dXJuIG1hcChhcmdzID0+IGNhbGxPckFwcGx5KGZuLCBhcmdzKSlcbn0iLCAiY29uc3QgeyBpc0FycmF5IH0gPSBBcnJheTtcbmNvbnN0IHsgZ2V0UHJvdG90eXBlT2YsIHByb3RvdHlwZTogb2JqZWN0UHJvdG8sIGtleXM6IGdldEtleXMgfSA9IE9iamVjdDtcblxuLyoqXG4gKiBVc2VkIGluIGZ1bmN0aW9ucyB3aGVyZSBlaXRoZXIgYSBsaXN0IG9mIGFyZ3VtZW50cywgYSBzaW5nbGUgYXJyYXkgb2YgYXJndW1lbnRzLCBvciBhXG4gKiBkaWN0aW9uYXJ5IG9mIGFyZ3VtZW50cyBjYW4gYmUgcmV0dXJuZWQuIFJldHVybnMgYW4gb2JqZWN0IHdpdGggYW4gYGFyZ3NgIHByb3BlcnR5IHdpdGhcbiAqIHRoZSBhcmd1bWVudHMgaW4gYW4gYXJyYXksIGlmIGl0IGlzIGEgZGljdGlvbmFyeSwgaXQgd2lsbCBhbHNvIHJldHVybiB0aGUgYGtleXNgIGluIGFub3RoZXJcbiAqIHByb3BlcnR5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJnc0FyZ0FycmF5T3JPYmplY3Q8VCwgTyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIFQ+PihhcmdzOiBUW10gfCBbT10gfCBbVFtdXSk6IHsgYXJnczogVFtdOyBrZXlzOiBzdHJpbmdbXSB8IG51bGwgfSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0ID0gYXJnc1swXTtcbiAgICBpZiAoaXNBcnJheShmaXJzdCkpIHtcbiAgICAgIHJldHVybiB7IGFyZ3M6IGZpcnN0LCBrZXlzOiBudWxsIH07XG4gICAgfVxuICAgIGlmIChpc1BPSk8oZmlyc3QpKSB7XG4gICAgICBjb25zdCBrZXlzID0gZ2V0S2V5cyhmaXJzdCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhcmdzOiBrZXlzLm1hcCgoa2V5KSA9PiBmaXJzdFtrZXldKSxcbiAgICAgICAga2V5cyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgYXJnczogYXJncyBhcyBUW10sIGtleXM6IG51bGwgfTtcbn1cblxuZnVuY3Rpb24gaXNQT0pPKG9iajogYW55KTogb2JqIGlzIG9iamVjdCB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gb2JqZWN0UHJvdG87XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdChrZXlzOiBzdHJpbmdbXSwgdmFsdWVzOiBhbnlbXSkge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoKHJlc3VsdCwga2V5LCBpKSA9PiAoKHJlc3VsdFtrZXldID0gdmFsdWVzW2ldKSwgcmVzdWx0KSwge30gYXMgYW55KTtcbn1cbiIsICJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIFNjaGVkdWxlckxpa2UsIE9ic2VydmVkVmFsdWVPZiwgT2JzZXJ2YWJsZUlucHV0VHVwbGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBhcmdzQXJnQXJyYXlPck9iamVjdCB9IGZyb20gJy4uL3V0aWwvYXJnc0FyZ0FycmF5T3JPYmplY3QnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJy4vZnJvbSc7XG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4uL3V0aWwvaWRlbnRpdHknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IG1hcE9uZU9yTWFueUFyZ3MgfSBmcm9tICcuLi91dGlsL21hcE9uZU9yTWFueUFyZ3MnO1xuaW1wb3J0IHsgcG9wUmVzdWx0U2VsZWN0b3IsIHBvcFNjaGVkdWxlciB9IGZyb20gJy4uL3V0aWwvYXJncyc7XG5pbXBvcnQgeyBjcmVhdGVPYmplY3QgfSBmcm9tICcuLi91dGlsL2NyZWF0ZU9iamVjdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuLi9vcGVyYXRvcnMvT3BlcmF0b3JTdWJzY3JpYmVyJztcbmltcG9ydCB7IEFueUNhdGNoZXIgfSBmcm9tICcuLi9BbnlDYXRjaGVyJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcblxuLy8gY29tYmluZUxhdGVzdChhbnkpXG4vLyBXZSBwdXQgdGhpcyBmaXJzdCBiZWNhdXNlIHdlIG5lZWQgdG8gY2F0Y2ggY2FzZXMgd2hlcmUgdGhlIHVzZXIgaGFzIHN1cHBsaWVkXG4vLyBfZXhhY3RseSBgYW55YF8gYXMgdGhlIGFyZ3VtZW50LiBTaW5jZSBgYW55YCBsaXRlcmFsbHkgbWF0Y2hlcyBfYW55dGhpbmdfLFxuLy8gd2UgZG9uJ3Qgd2FudCBpdCB0byByYW5kb21seSBoaXQgb25lIG9mIHRoZSBvdGhlciB0eXBlIHNpZ25hdHVyZXMgYmVsb3csXG4vLyBhcyB3ZSBoYXZlIG5vIGlkZWEgYXQgYnVpbGQtdGltZSB3aGF0IHR5cGUgd2Ugc2hvdWxkIGJlIHJldHVybmluZyB3aGVuIGdpdmVuIGFuIGFueS5cblxuLyoqXG4gKiBZb3UgaGF2ZSBwYXNzZWQgYGFueWAgaGVyZSwgd2UgY2FuJ3QgZmlndXJlIG91dCBpZiBpdCBpc1xuICogYW4gYXJyYXkgb3IgYW4gb2JqZWN0LCBzbyB5b3UncmUgZ2V0dGluZyBgdW5rbm93bmAuIFVzZSBiZXR0ZXIgdHlwZXMuXG4gKiBAcGFyYW0gYXJnIFNvbWV0aGluZyB0eXBlZCBhcyBgYW55YFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxUIGV4dGVuZHMgQW55Q2F0Y2hlcj4oYXJnOiBUKTogT2JzZXJ2YWJsZTx1bmtub3duPjtcblxuLy8gY29tYmluZUxhdGVzdChbYSwgYiwgY10pXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdChzb3VyY2VzOiBbXSk6IE9ic2VydmFibGU8bmV2ZXI+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXT4oc291cmNlczogcmVhZG9ubHkgWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSk6IE9ic2VydmFibGU8QT47XG4vKiogQGRlcHJlY2F0ZWQgVGhlIGBzY2hlZHVsZXJgIHBhcmFtZXRlciB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIFVzZSBgc2NoZWR1bGVkYCBhbmQgYGNvbWJpbmVMYXRlc3RBbGxgLiBEZXRhaWxzOiBodHRwczovL3J4anMuZGV2L2RlcHJlY2F0aW9ucy9zY2hlZHVsZXItYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10sIFI+KFxuICBzb3VyY2VzOiByZWFkb25seSBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT5dLFxuICByZXN1bHRTZWxlY3RvcjogKC4uLnZhbHVlczogQSkgPT4gUixcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlXG4pOiBPYnNlcnZhYmxlPFI+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8QSBleHRlbmRzIHJlYWRvbmx5IHVua25vd25bXSwgUj4oXG4gIHNvdXJjZXM6IHJlYWRvbmx5IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPl0sXG4gIHJlc3VsdFNlbGVjdG9yOiAoLi4udmFsdWVzOiBBKSA9PiBSXG4pOiBPYnNlcnZhYmxlPFI+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgc2NoZWR1bGVyYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYHNjaGVkdWxlZGAgYW5kIGBjb21iaW5lTGF0ZXN0QWxsYC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc2NoZWR1bGVyLWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdPihcbiAgc291cmNlczogcmVhZG9ubHkgWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+XSxcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXJMaWtlXG4pOiBPYnNlcnZhYmxlPEE+O1xuXG4vLyBjb21iaW5lTGF0ZXN0KGEsIGIsIGMpXG4vKiogQGRlcHJlY2F0ZWQgUGFzcyBhbiBhcnJheSBvZiBzb3VyY2VzIGluc3RlYWQuIFRoZSByZXN0LXBhcmFtZXRlcnMgc2lnbmF0dXJlIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvYXJyYXktYXJndW1lbnQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PEEgZXh0ZW5kcyByZWFkb25seSB1bmtub3duW10+KC4uLnNvdXJjZXM6IFsuLi5PYnNlcnZhYmxlSW5wdXRUdXBsZTxBPl0pOiBPYnNlcnZhYmxlPEE+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgc2NoZWR1bGVyYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYHNjaGVkdWxlZGAgYW5kIGBjb21iaW5lTGF0ZXN0QWxsYC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc2NoZWR1bGVyLWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdLCBSPihcbiAgLi4uc291cmNlc0FuZFJlc3VsdFNlbGVjdG9yQW5kU2NoZWR1bGVyOiBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT4sICguLi52YWx1ZXM6IEEpID0+IFIsIFNjaGVkdWxlckxpa2VdXG4pOiBPYnNlcnZhYmxlPFI+O1xuLyoqIEBkZXByZWNhdGVkIFBhc3MgYW4gYXJyYXkgb2Ygc291cmNlcyBpbnN0ZWFkLiBUaGUgcmVzdC1wYXJhbWV0ZXJzIHNpZ25hdHVyZSB3aWxsIGJlIHJlbW92ZWQgaW4gdjguIERldGFpbHM6IGh0dHBzOi8vcnhqcy5kZXYvZGVwcmVjYXRpb25zL2FycmF5LWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdLCBSPihcbiAgLi4uc291cmNlc0FuZFJlc3VsdFNlbGVjdG9yOiBbLi4uT2JzZXJ2YWJsZUlucHV0VHVwbGU8QT4sICguLi52YWx1ZXM6IEEpID0+IFJdXG4pOiBPYnNlcnZhYmxlPFI+O1xuLyoqIEBkZXByZWNhdGVkIFRoZSBgc2NoZWR1bGVyYCBwYXJhbWV0ZXIgd2lsbCBiZSByZW1vdmVkIGluIHY4LiBVc2UgYHNjaGVkdWxlZGAgYW5kIGBjb21iaW5lTGF0ZXN0QWxsYC4gRGV0YWlsczogaHR0cHM6Ly9yeGpzLmRldi9kZXByZWNhdGlvbnMvc2NoZWR1bGVyLWFyZ3VtZW50ICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxBIGV4dGVuZHMgcmVhZG9ubHkgdW5rbm93bltdPihcbiAgLi4uc291cmNlc0FuZFNjaGVkdWxlcjogWy4uLk9ic2VydmFibGVJbnB1dFR1cGxlPEE+LCBTY2hlZHVsZXJMaWtlXVxuKTogT2JzZXJ2YWJsZTxBPjtcblxuLy8gY29tYmluZUxhdGVzdCh7YSwgYiwgY30pXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdChzb3VyY2VzT2JqZWN0OiB7IFtLIGluIGFueV06IG5ldmVyIH0pOiBPYnNlcnZhYmxlPG5ldmVyPjtcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBPYnNlcnZhYmxlSW5wdXQ8YW55Pj4+KFxuICBzb3VyY2VzT2JqZWN0OiBUXG4pOiBPYnNlcnZhYmxlPHsgW0sgaW4ga2V5b2YgVF06IE9ic2VydmVkVmFsdWVPZjxUW0tdPiB9PjtcblxuLyoqXG4gKiBDb21iaW5lcyBtdWx0aXBsZSBPYnNlcnZhYmxlcyB0byBjcmVhdGUgYW4gT2JzZXJ2YWJsZSB3aG9zZSB2YWx1ZXMgYXJlXG4gKiBjYWxjdWxhdGVkIGZyb20gdGhlIGxhdGVzdCB2YWx1ZXMgb2YgZWFjaCBvZiBpdHMgaW5wdXQgT2JzZXJ2YWJsZXMuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPldoZW5ldmVyIGFueSBpbnB1dCBPYnNlcnZhYmxlIGVtaXRzIGEgdmFsdWUsIGl0XG4gKiBjb21wdXRlcyBhIGZvcm11bGEgdXNpbmcgdGhlIGxhdGVzdCB2YWx1ZXMgZnJvbSBhbGwgdGhlIGlucHV0cywgdGhlbiBlbWl0c1xuICogdGhlIG91dHB1dCBvZiB0aGF0IGZvcm11bGEuPC9zcGFuPlxuICpcbiAqICFbXShjb21iaW5lTGF0ZXN0LnBuZylcbiAqXG4gKiBgY29tYmluZUxhdGVzdGAgY29tYmluZXMgdGhlIHZhbHVlcyBmcm9tIGFsbCB0aGUgT2JzZXJ2YWJsZXMgcGFzc2VkIGluIHRoZVxuICogb2JzZXJ2YWJsZXMgYXJyYXkuIFRoaXMgaXMgZG9uZSBieSBzdWJzY3JpYmluZyB0byBlYWNoIE9ic2VydmFibGUgaW4gb3JkZXIgYW5kLFxuICogd2hlbmV2ZXIgYW55IE9ic2VydmFibGUgZW1pdHMsIGNvbGxlY3RpbmcgYW4gYXJyYXkgb2YgdGhlIG1vc3QgcmVjZW50XG4gKiB2YWx1ZXMgZnJvbSBlYWNoIE9ic2VydmFibGUuIFNvIGlmIHlvdSBwYXNzIGBuYCBPYnNlcnZhYmxlcyB0byB0aGlzIG9wZXJhdG9yLFxuICogdGhlIHJldHVybmVkIE9ic2VydmFibGUgd2lsbCBhbHdheXMgZW1pdCBhbiBhcnJheSBvZiBgbmAgdmFsdWVzLCBpbiBhbiBvcmRlclxuICogY29ycmVzcG9uZGluZyB0byB0aGUgb3JkZXIgb2YgdGhlIHBhc3NlZCBPYnNlcnZhYmxlcyAodGhlIHZhbHVlIGZyb20gdGhlIGZpcnN0IE9ic2VydmFibGVcbiAqIHdpbGwgYmUgYXQgaW5kZXggMCBvZiB0aGUgYXJyYXkgYW5kIHNvIG9uKS5cbiAqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiBgY29tYmluZUxhdGVzdGAgYWNjZXB0cyBhbiBhcnJheSBvZiBPYnNlcnZhYmxlcy4gTm90ZSB0aGF0IGFuIGFycmF5IG9mXG4gKiBPYnNlcnZhYmxlcyBpcyBhIGdvb2QgY2hvaWNlLCBpZiB5b3UgZG9uJ3Qga25vdyBiZWZvcmVoYW5kIGhvdyBtYW55IE9ic2VydmFibGVzXG4gKiB5b3Ugd2lsbCBjb21iaW5lLiBQYXNzaW5nIGFuIGVtcHR5IGFycmF5IHdpbGwgcmVzdWx0IGluIGFuIE9ic2VydmFibGUgdGhhdFxuICogY29tcGxldGVzIGltbWVkaWF0ZWx5LlxuICpcbiAqIFRvIGVuc3VyZSB0aGUgb3V0cHV0IGFycmF5IGFsd2F5cyBoYXMgdGhlIHNhbWUgbGVuZ3RoLCBgY29tYmluZUxhdGVzdGAgd2lsbFxuICogYWN0dWFsbHkgd2FpdCBmb3IgYWxsIGlucHV0IE9ic2VydmFibGVzIHRvIGVtaXQgYXQgbGVhc3Qgb25jZSxcbiAqIGJlZm9yZSBpdCBzdGFydHMgZW1pdHRpbmcgcmVzdWx0cy4gVGhpcyBtZWFucyBpZiBzb21lIE9ic2VydmFibGUgZW1pdHNcbiAqIHZhbHVlcyBiZWZvcmUgb3RoZXIgT2JzZXJ2YWJsZXMgc3RhcnRlZCBlbWl0dGluZywgYWxsIHRoZXNlIHZhbHVlcyBidXQgdGhlIGxhc3RcbiAqIHdpbGwgYmUgbG9zdC4gT24gdGhlIG90aGVyIGhhbmQsIGlmIHNvbWUgT2JzZXJ2YWJsZSBkb2VzIG5vdCBlbWl0IGEgdmFsdWUgYnV0XG4gKiBjb21wbGV0ZXMsIHJlc3VsdGluZyBPYnNlcnZhYmxlIHdpbGwgY29tcGxldGUgYXQgdGhlIHNhbWUgbW9tZW50IHdpdGhvdXRcbiAqIGVtaXR0aW5nIGFueXRoaW5nLCBzaW5jZSBpdCB3aWxsIG5vdyBiZSBpbXBvc3NpYmxlIHRvIGluY2x1ZGUgYSB2YWx1ZSBmcm9tIHRoZVxuICogY29tcGxldGVkIE9ic2VydmFibGUgaW4gdGhlIHJlc3VsdGluZyBhcnJheS4gQWxzbywgaWYgc29tZSBpbnB1dCBPYnNlcnZhYmxlIGRvZXNcbiAqIG5vdCBlbWl0IGFueSB2YWx1ZSBhbmQgbmV2ZXIgY29tcGxldGVzLCBgY29tYmluZUxhdGVzdGAgd2lsbCBhbHNvIG5ldmVyIGVtaXRcbiAqIGFuZCBuZXZlciBjb21wbGV0ZSwgc2luY2UsIGFnYWluLCBpdCB3aWxsIHdhaXQgZm9yIGFsbCBzdHJlYW1zIHRvIGVtaXQgc29tZVxuICogdmFsdWUuXG4gKlxuICogSWYgYXQgbGVhc3Qgb25lIE9ic2VydmFibGUgd2FzIHBhc3NlZCB0byBgY29tYmluZUxhdGVzdGAgYW5kIGFsbCBwYXNzZWQgT2JzZXJ2YWJsZXNcbiAqIGVtaXR0ZWQgc29tZXRoaW5nLCB0aGUgcmVzdWx0aW5nIE9ic2VydmFibGUgd2lsbCBjb21wbGV0ZSB3aGVuIGFsbCBjb21iaW5lZFxuICogc3RyZWFtcyBjb21wbGV0ZS4gU28gZXZlbiBpZiBzb21lIE9ic2VydmFibGUgY29tcGxldGVzLCB0aGUgcmVzdWx0IG9mXG4gKiBgY29tYmluZUxhdGVzdGAgd2lsbCBzdGlsbCBlbWl0IHZhbHVlcyB3aGVuIG90aGVyIE9ic2VydmFibGVzIGRvLiBJbiBjYXNlXG4gKiBvZiBhIGNvbXBsZXRlZCBPYnNlcnZhYmxlLCBpdHMgdmFsdWUgZnJvbSBub3cgb24gd2lsbCBhbHdheXMgYmUgdGhlIGxhc3RcbiAqIGVtaXR0ZWQgdmFsdWUuIE9uIHRoZSBvdGhlciBoYW5kLCBpZiBhbnkgT2JzZXJ2YWJsZSBlcnJvcnMsIGBjb21iaW5lTGF0ZXN0YFxuICogd2lsbCBlcnJvciBpbW1lZGlhdGVseSBhcyB3ZWxsLCBhbmQgYWxsIG90aGVyIE9ic2VydmFibGVzIHdpbGwgYmUgdW5zdWJzY3JpYmVkLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogQ29tYmluZSB0d28gdGltZXIgT2JzZXJ2YWJsZXNcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgdGltZXIsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBmaXJzdFRpbWVyID0gdGltZXIoMCwgMTAwMCk7IC8vIGVtaXQgMCwgMSwgMi4uLiBhZnRlciBldmVyeSBzZWNvbmQsIHN0YXJ0aW5nIGZyb20gbm93XG4gKiBjb25zdCBzZWNvbmRUaW1lciA9IHRpbWVyKDUwMCwgMTAwMCk7IC8vIGVtaXQgMCwgMSwgMi4uLiBhZnRlciBldmVyeSBzZWNvbmQsIHN0YXJ0aW5nIDAsNXMgZnJvbSBub3dcbiAqIGNvbnN0IGNvbWJpbmVkVGltZXJzID0gY29tYmluZUxhdGVzdChbZmlyc3RUaW1lciwgc2Vjb25kVGltZXJdKTtcbiAqIGNvbWJpbmVkVGltZXJzLnN1YnNjcmliZSh2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSkpO1xuICogLy8gTG9nc1xuICogLy8gWzAsIDBdIGFmdGVyIDAuNXNcbiAqIC8vIFsxLCAwXSBhZnRlciAxc1xuICogLy8gWzEsIDFdIGFmdGVyIDEuNXNcbiAqIC8vIFsyLCAxXSBhZnRlciAyc1xuICogYGBgXG4gKlxuICogQ29tYmluZSBhIGRpY3Rpb25hcnkgb2YgT2JzZXJ2YWJsZXNcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgb2YsIGRlbGF5LCBzdGFydFdpdGgsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBvYnNlcnZhYmxlcyA9IHtcbiAqICAgYTogb2YoMSkucGlwZShkZWxheSgxMDAwKSwgc3RhcnRXaXRoKDApKSxcbiAqICAgYjogb2YoNSkucGlwZShkZWxheSg1MDAwKSwgc3RhcnRXaXRoKDApKSxcbiAqICAgYzogb2YoMTApLnBpcGUoZGVsYXkoMTAwMDApLCBzdGFydFdpdGgoMCkpXG4gKiB9O1xuICogY29uc3QgY29tYmluZWQgPSBjb21iaW5lTGF0ZXN0KG9ic2VydmFibGVzKTtcbiAqIGNvbWJpbmVkLnN1YnNjcmliZSh2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSkpO1xuICogLy8gTG9nc1xuICogLy8geyBhOiAwLCBiOiAwLCBjOiAwIH0gaW1tZWRpYXRlbHlcbiAqIC8vIHsgYTogMSwgYjogMCwgYzogMCB9IGFmdGVyIDFzXG4gKiAvLyB7IGE6IDEsIGI6IDUsIGM6IDAgfSBhZnRlciA1c1xuICogLy8geyBhOiAxLCBiOiA1LCBjOiAxMCB9IGFmdGVyIDEwc1xuICogYGBgXG4gKlxuICogQ29tYmluZSBhbiBhcnJheSBvZiBPYnNlcnZhYmxlc1xuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgZGVsYXksIHN0YXJ0V2l0aCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuICpcbiAqIGNvbnN0IG9ic2VydmFibGVzID0gWzEsIDUsIDEwXS5tYXAoXG4gKiAgIG4gPT4gb2YobikucGlwZShcbiAqICAgICBkZWxheShuICogMTAwMCksIC8vIGVtaXQgMCBhbmQgdGhlbiBlbWl0IG4gYWZ0ZXIgbiBzZWNvbmRzXG4gKiAgICAgc3RhcnRXaXRoKDApXG4gKiAgIClcbiAqICk7XG4gKiBjb25zdCBjb21iaW5lZCA9IGNvbWJpbmVMYXRlc3Qob2JzZXJ2YWJsZXMpO1xuICogY29tYmluZWQuc3Vic2NyaWJlKHZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSk7XG4gKiAvLyBMb2dzXG4gKiAvLyBbMCwgMCwgMF0gaW1tZWRpYXRlbHlcbiAqIC8vIFsxLCAwLCAwXSBhZnRlciAxc1xuICogLy8gWzEsIDUsIDBdIGFmdGVyIDVzXG4gKiAvLyBbMSwgNSwgMTBdIGFmdGVyIDEwc1xuICogYGBgXG4gKlxuICogVXNlIG1hcCBvcGVyYXRvciB0byBkeW5hbWljYWxseSBjYWxjdWxhdGUgdGhlIEJvZHktTWFzcyBJbmRleFxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBvZiwgY29tYmluZUxhdGVzdCwgbWFwIH0gZnJvbSAncnhqcyc7XG4gKlxuICogY29uc3Qgd2VpZ2h0ID0gb2YoNzAsIDcyLCA3NiwgNzksIDc1KTtcbiAqIGNvbnN0IGhlaWdodCA9IG9mKDEuNzYsIDEuNzcsIDEuNzgpO1xuICogY29uc3QgYm1pID0gY29tYmluZUxhdGVzdChbd2VpZ2h0LCBoZWlnaHRdKS5waXBlKFxuICogICBtYXAoKFt3LCBoXSkgPT4gdyAvIChoICogaCkpLFxuICogKTtcbiAqIGJtaS5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZygnQk1JIGlzICcgKyB4KSk7XG4gKlxuICogLy8gV2l0aCBvdXRwdXQgdG8gY29uc29sZTpcbiAqIC8vIEJNSSBpcyAyNC4yMTIyOTMzODg0Mjk3NTNcbiAqIC8vIEJNSSBpcyAyMy45Mzk0ODA5OTIwNTIwOVxuICogLy8gQk1JIGlzIDIzLjY3MTI1MzYyOTU5MjIyMlxuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgY29tYmluZUxhdGVzdEFsbH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlfVxuICogQHNlZSB7QGxpbmsgd2l0aExhdGVzdEZyb219XG4gKlxuICogQHBhcmFtIHtPYnNlcnZhYmxlSW5wdXR9IFtvYnNlcnZhYmxlc10gQW4gYXJyYXkgb2YgaW5wdXQgT2JzZXJ2YWJsZXMgdG8gY29tYmluZSB3aXRoIGVhY2ggb3RoZXIuXG4gKiBBbiBhcnJheSBvZiBPYnNlcnZhYmxlcyBtdXN0IGJlIGdpdmVuIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtwcm9qZWN0XSBBbiBvcHRpb25hbCBmdW5jdGlvbiB0byBwcm9qZWN0IHRoZSB2YWx1ZXMgZnJvbVxuICogdGhlIGNvbWJpbmVkIGxhdGVzdCB2YWx1ZXMgaW50byBhIG5ldyB2YWx1ZSBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKiBAcGFyYW0ge1NjaGVkdWxlckxpa2V9IFtzY2hlZHVsZXI9bnVsbF0gVGhlIHtAbGluayBTY2hlZHVsZXJMaWtlfSB0byB1c2UgZm9yIHN1YnNjcmliaW5nIHRvXG4gKiBlYWNoIGlucHV0IE9ic2VydmFibGUuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIG9mIHByb2plY3RlZCB2YWx1ZXMgZnJvbSB0aGUgbW9zdCByZWNlbnRcbiAqIHZhbHVlcyBmcm9tIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZSwgb3IgYW4gYXJyYXkgb2YgdGhlIG1vc3QgcmVjZW50IHZhbHVlcyBmcm9tXG4gKiBlYWNoIGlucHV0IE9ic2VydmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0PE8gZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8YW55PiwgUj4oLi4uYXJnczogYW55W10pOiBPYnNlcnZhYmxlPFI+IHwgT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz5bXT4ge1xuICBjb25zdCBzY2hlZHVsZXIgPSBwb3BTY2hlZHVsZXIoYXJncyk7XG4gIGNvbnN0IHJlc3VsdFNlbGVjdG9yID0gcG9wUmVzdWx0U2VsZWN0b3IoYXJncyk7XG5cbiAgY29uc3QgeyBhcmdzOiBvYnNlcnZhYmxlcywga2V5cyB9ID0gYXJnc0FyZ0FycmF5T3JPYmplY3QoYXJncyk7XG5cbiAgaWYgKG9ic2VydmFibGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIElmIG5vIG9ic2VydmFibGVzIGFyZSBwYXNzZWQsIG9yIHNvbWVvbmUgaGFzIHBhc3NlZCBhbiBlbXB0eSBhcnJheVxuICAgIC8vIG9mIG9ic2VydmFibGVzLCBvciBldmVuIGFuIGVtcHR5IG9iamVjdCBQT0pPLCB3ZSBuZWVkIHRvIGp1c3RcbiAgICAvLyBjb21wbGV0ZSAoRU1QVFkpLCBidXQgd2UgaGF2ZSB0byBob25vciB0aGUgc2NoZWR1bGVyIHByb3ZpZGVkIGlmIGFueS5cbiAgICByZXR1cm4gZnJvbShbXSwgc2NoZWR1bGVyIGFzIGFueSk7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBuZXcgT2JzZXJ2YWJsZTxPYnNlcnZlZFZhbHVlT2Y8Tz5bXT4oXG4gICAgY29tYmluZUxhdGVzdEluaXQoXG4gICAgICBvYnNlcnZhYmxlcyBhcyBPYnNlcnZhYmxlSW5wdXQ8T2JzZXJ2ZWRWYWx1ZU9mPE8+PltdLFxuICAgICAgc2NoZWR1bGVyLFxuICAgICAga2V5c1xuICAgICAgICA/IC8vIEEgaGFuZGxlciBmb3Igc2NydWJiaW5nIHRoZSBhcnJheSBvZiBhcmdzIGludG8gYSBkaWN0aW9uYXJ5LlxuICAgICAgICAgICh2YWx1ZXMpID0+IGNyZWF0ZU9iamVjdChrZXlzLCB2YWx1ZXMpXG4gICAgICAgIDogLy8gQSBwYXNzdGhyb3VnaCB0byBqdXN0IHJldHVybiB0aGUgYXJyYXlcbiAgICAgICAgICBpZGVudGl0eVxuICAgIClcbiAgKTtcblxuICByZXR1cm4gcmVzdWx0U2VsZWN0b3IgPyAocmVzdWx0LnBpcGUobWFwT25lT3JNYW55QXJncyhyZXN1bHRTZWxlY3RvcikpIGFzIE9ic2VydmFibGU8Uj4pIDogcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdEluaXQoXG4gIG9ic2VydmFibGVzOiBPYnNlcnZhYmxlSW5wdXQ8YW55PltdLFxuICBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlLFxuICB2YWx1ZVRyYW5zZm9ybTogKHZhbHVlczogYW55W10pID0+IGFueSA9IGlkZW50aXR5XG4pIHtcbiAgcmV0dXJuIChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHtcbiAgICAvLyBUaGUgb3V0ZXIgc3Vic2NyaXB0aW9uLiBXZSdyZSBjYXB0dXJpbmcgdGhpcyBpbiBhIGZ1bmN0aW9uXG4gICAgLy8gYmVjYXVzZSB3ZSBtYXkgaGF2ZSB0byBzY2hlZHVsZSBpdC5cbiAgICBtYXliZVNjaGVkdWxlKFxuICAgICAgc2NoZWR1bGVyLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gb2JzZXJ2YWJsZXM7XG4gICAgICAgIC8vIEEgc3RvcmUgZm9yIHRoZSB2YWx1ZXMgZWFjaCBvYnNlcnZhYmxlIGhhcyBlbWl0dGVkIHNvIGZhci4gV2UgbWF0Y2ggb2JzZXJ2YWJsZSB0byB2YWx1ZSBvbiBpbmRleC5cbiAgICAgICAgY29uc3QgdmFsdWVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgICAgIC8vIFRoZSBudW1iZXIgb2YgY3VycmVudGx5IGFjdGl2ZSBzdWJzY3JpcHRpb25zLCBhcyB0aGV5IGNvbXBsZXRlLCB3ZSBkZWNyZW1lbnQgdGhpcyBudW1iZXIgdG8gc2VlIGlmXG4gICAgICAgIC8vIHdlIGFyZSBhbGwgZG9uZSBjb21iaW5pbmcgdmFsdWVzLCBzbyB3ZSBjYW4gY29tcGxldGUgdGhlIHJlc3VsdC5cbiAgICAgICAgbGV0IGFjdGl2ZSA9IGxlbmd0aDtcbiAgICAgICAgLy8gVGhlIG51bWJlciBvZiBpbm5lciBzb3VyY2VzIHRoYXQgc3RpbGwgaGF2ZW4ndCBlbWl0dGVkIHRoZSBmaXJzdCB2YWx1ZVxuICAgICAgICAvLyBXZSBuZWVkIHRvIHRyYWNrIHRoaXMgYmVjYXVzZSBhbGwgc291cmNlcyBuZWVkIHRvIGVtaXQgb25lIHZhbHVlIGluIG9yZGVyXG4gICAgICAgIC8vIHRvIHN0YXJ0IGVtaXR0aW5nIHZhbHVlcy5cbiAgICAgICAgbGV0IHJlbWFpbmluZ0ZpcnN0VmFsdWVzID0gbGVuZ3RoO1xuICAgICAgICAvLyBUaGUgbG9vcCB0byBraWNrIG9mZiBzdWJzY3JpcHRpb24uIFdlJ3JlIGtleWluZyBldmVyeXRoaW5nIG9uIGluZGV4IGBpYCB0byByZWxhdGUgdGhlIG9ic2VydmFibGVzIHBhc3NlZFxuICAgICAgICAvLyBpbiB0byB0aGUgc2xvdCBpbiB0aGUgb3V0cHV0IGFycmF5IG9yIHRoZSBrZXkgaW4gdGhlIGFycmF5IG9mIGtleXMgaW4gdGhlIG91dHB1dCBkaWN0aW9uYXJ5LlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbWF5YmVTY2hlZHVsZShcbiAgICAgICAgICAgIHNjaGVkdWxlcixcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc291cmNlID0gZnJvbShvYnNlcnZhYmxlc1tpXSwgc2NoZWR1bGVyIGFzIGFueSk7XG4gICAgICAgICAgICAgIGxldCBoYXNGaXJzdFZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKFxuICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcixcbiAgICAgICAgICAgICAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHdlIGdldCBhIHZhbHVlLCByZWNvcmQgaXQgaW4gb3VyIHNldCBvZiB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0ZpcnN0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCB2YWx1ZSwgcmVjb3JkIHRoYXQuXG4gICAgICAgICAgICAgICAgICAgICAgaGFzRmlyc3RWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nRmlyc3RWYWx1ZXMtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlbWFpbmluZ0ZpcnN0VmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gV2UncmUgbm90IHdhaXRpbmcgZm9yIGFueSBtb3JlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgdmFsdWVzLCBzbyB3ZSBjYW4gZW1pdCFcbiAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWVUcmFuc2Zvcm0odmFsdWVzLnNsaWNlKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG9ubHkgY29tcGxldGUgdGhlIHJlc3VsdCBpZiB3ZSBoYXZlIG5vIG1vcmUgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaW5uZXIgb2JzZXJ2YWJsZXMuXG4gICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1YnNjcmliZXJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3Vic2NyaWJlclxuICAgICk7XG4gIH07XG59XG5cbi8qKlxuICogQSBzbWFsbCB1dGlsaXR5IHRvIGhhbmRsZSB0aGUgY291cGxlIG9mIGxvY2F0aW9ucyB3aGVyZSB3ZSB3YW50IHRvIHNjaGVkdWxlIGlmIGEgc2NoZWR1bGVyIHdhcyBwcm92aWRlZCxcbiAqIGJ1dCB3ZSBkb24ndCBpZiB0aGVyZSB3YXMgbm8gc2NoZWR1bGVyLlxuICovXG5mdW5jdGlvbiBtYXliZVNjaGVkdWxlKHNjaGVkdWxlcjogU2NoZWR1bGVyTGlrZSB8IHVuZGVmaW5lZCwgZXhlY3V0ZTogKCkgPT4gdm9pZCwgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pIHtcbiAgaWYgKHNjaGVkdWxlcikge1xuICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpcHRpb24sIHNjaGVkdWxlciwgZXhlY3V0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZXhlY3V0ZSgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFByZXNzYWJsZSwgUG9pbnRlckV2ZW50IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IHR5cGUgTW91c2VFdmVudCA9IFBvaW50ZXJFdmVudCAmIHtcbiAgICBjbGllbnRYPzogbnVtYmVyO1xuICAgIGNsaWVudFk/OiBudW1iZXI7XG4gICAgcG9pbnRlcklkPzogbnVtYmVyO1xuICAgIGJ1dHRvbnM/OiBudW1iZXI7XG59O1xuZXhwb3J0IHR5cGUgV2hlZWxFdmVudCA9IFBvaW50ZXJFdmVudCAmIHsgZGVsdGFYOiBudW1iZXI7IGRlbHRhWTogbnVtYmVyOyBkZWx0YVo6IG51bWJlciB9O1xuZXhwb3J0IHR5cGUgTW91c2VIb3N0ID0gVmlldyAmIHtcbiAgICBzZXRQb2ludGVyQ2FwdHVyZTogKHBvaW50ZXJJZDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHJlbGVhc2VQb2ludGVyQ2FwdHVyZTogKHBvaW50ZXJJZDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIG9ud2hlZWw/OiAoZTogV2hlZWxFdmVudCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBlbnVtIE1vdXNlQnV0dG9uIHtcbiAgICBMZWZ0ID0gMSxcbiAgICBSaWdodCA9IDIsXG4gICAgTWlkZGxlID0gNCxcbiAgICBBbGwgPSA3LFxufVxuXG5leHBvcnQgY29uc3QgTW92ZWFibGVWaWV3ID0gKHtcbiAgICBjaGlsZHJlbixcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgcG9zaXRpb246IGluaXRQb3NpdGlvbixcbiAgICBvbk1vdmUsXG4gICAgbW91c2VCdXR0b24gPSBNb3VzZUJ1dHRvbi5BbGwsXG4gICAgZW5hYmxlU2NhbGluZyA9IGZhbHNlLFxuICAgIHdob2xlQ2FudmFzID0gZmFsc2UsXG4gICAgaW5uZXJDbGFzc05hbWUsXG4gICAgb3V0ZXJDbGFzc05hbWUsXG59OiB7XG4gICAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xuICAgIEhlYWRlckNvbXBvbmVudD86ICgpID0+IEpTWC5FbGVtZW50O1xuICAgIHBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH07XG4gICAgb25Nb3ZlOiAocG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXIgfSkgPT4gdm9pZDtcbiAgICBtb3VzZUJ1dHRvbj86IE1vdXNlQnV0dG9uO1xuICAgIGVuYWJsZVNjYWxpbmc/OiBib29sZWFuO1xuICAgIHdob2xlQ2FudmFzPzogYm9vbGVhbjtcbiAgICBpbm5lckNsYXNzTmFtZT86IHN0cmluZztcbiAgICBvdXRlckNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogaW5pdFBvc2l0aW9uLngsXG4gICAgICAgIHk6IGluaXRQb3NpdGlvbi55LFxuICAgICAgICBzY2FsZTogaW5pdFBvc2l0aW9uLnNjYWxlLFxuICAgICAgICBkcmFnUG9pbnRlcklkOiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB4RHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB5RHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB4UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeVBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdGFydERyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCEoKGUuYnV0dG9ucyA/PyAwKSAmIG1vdXNlQnV0dG9uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHhQb2ludGVyID0gZS5jbGllbnRYID8/IDA7XG4gICAgICAgIGNvbnN0IHlQb2ludGVyID0gZS5jbGllbnRZID8/IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGFydERyYWdgLCB7IHhQb2ludGVyLCB5UG9pbnRlciwgZSwgcG9zaXRpb24sIGNvbnRleHRTY2FsZSB9KTtcblxuICAgICAgICBob3N0UmVmLmN1cnJlbnQ/LnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkID8/IDApO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBkcmFnUG9pbnRlcklkOiBlLnBvaW50ZXJJZCxcbiAgICAgICAgICAgIHhEcmFnU3RhcnQ6IHMueCxcbiAgICAgICAgICAgIHlEcmFnU3RhcnQ6IHMueSxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB4UG9pbnRlcixcbiAgICAgICAgICAgIHlQb2ludGVyRHJhZ1N0YXJ0OiB5UG9pbnRlcixcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVuZERyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmRyYWdQb2ludGVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhvc3RSZWYuY3VycmVudD8ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHBvc2l0aW9uLmRyYWdQb2ludGVySWQpO1xuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB4UG9pbnRlciA9IGUuY2xpZW50WCA/PyAwO1xuICAgICAgICBjb25zdCB5UG9pbnRlciA9IGUuY2xpZW50WSA/PyAwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgZW5kRHJhZ2AsIHsgeFBvaW50ZXIsIHlQb2ludGVyLCBlLCBwb3NpdGlvbiwgY29udGV4dFNjYWxlIH0pO1xuXG4gICAgICAgIGNvbnN0IG5ld1ggPVxuICAgICAgICAgICAgKHBvc2l0aW9uLnhEcmFnU3RhcnQgPz8gMClcbiAgICAgICAgICAgICsgKHhQb2ludGVyIC0gKHBvc2l0aW9uLnhQb2ludGVyRHJhZ1N0YXJ0ID8/IDApKSAvIGNvbnRleHRTY2FsZTtcbiAgICAgICAgY29uc3QgbmV3WSA9XG4gICAgICAgICAgICAocG9zaXRpb24ueURyYWdTdGFydCA/PyAwKVxuICAgICAgICAgICAgKyAoeVBvaW50ZXIgLSAocG9zaXRpb24ueVBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICB4OiBuZXdYLFxuICAgICAgICAgICAgeTogbmV3WSxcbiAgICAgICAgICAgIGRyYWdQb2ludGVySWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICB5UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgb25Nb3ZlKHtcbiAgICAgICAgICAgIHg6IG5ld1gsXG4gICAgICAgICAgICB5OiBuZXdZLFxuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbW92ZURyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmRyYWdQb2ludGVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHhQb2ludGVyID0gZS5jbGllbnRYID8/IDA7XG4gICAgICAgIGNvbnN0IHlQb2ludGVyID0gZS5jbGllbnRZID8/IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBtb3ZlRHJhZ2AsIHsgeFBvaW50ZXIsIHlQb2ludGVyLCBlLCBwb3NpdGlvbiwgY29udGV4dFNjYWxlIH0pO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICB4OiAocy54RHJhZ1N0YXJ0ID8/IDApICsgKHhQb2ludGVyIC0gKHMueFBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlLFxuICAgICAgICAgICAgeTogKHMueURyYWdTdGFydCA/PyAwKSArICh5UG9pbnRlciAtIChzLnlQb2ludGVyRHJhZ1N0YXJ0ID8/IDApKSAvIGNvbnRleHRTY2FsZSxcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2Nyb2xsV2hlZWwgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogV2hlZWxFdmVudCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgb253aGVlbGAsIHsgZSwgcG9zaXRpb24gfSk7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IGUuZGVsdGFZO1xuICAgICAgICBpZiAoIWRlbHRhWSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlbmFibGVTY2FsaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRQb3NpdGlvbihzID0+ICh7XG4gICAgICAgICAgICAuLi5zLFxuICAgICAgICAgICAgc2NhbGU6IHMuc2NhbGUgKiBNYXRoLnBvdygwLjksIGRlbHRhWSA+IDAgPyAxIDogLTEpLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBob3N0UmVmID0gdXNlUmVmKG51bGwgYXMgbnVsbCB8IE1vdXNlSG9zdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaG9zdCA9IGhvc3RSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFob3N0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgaG9zdGAsIHsgaG9zdCB9KTtcbiAgICAgICAgaG9zdC5vbndoZWVsID0gc2Nyb2xsV2hlZWw7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBob3N0Lm9ud2hlZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgfSwgWyFob3N0UmVmLmN1cnJlbnRdKTtcblxuICAgIGNvbnN0IHdob2xlSG9zdFJlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBNb3VzZUhvc3QpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvc3QgPSB3aG9sZUhvc3RSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFob3N0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgaG9zdGAsIHsgaG9zdCB9KTtcbiAgICAgICAgaG9zdC5vbndoZWVsID0gc2Nyb2xsV2hlZWw7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBob3N0Lm9ud2hlZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgfSwgWyF3aG9sZUhvc3RSZWYuY3VycmVudF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vdmVhYmxlQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIHsoeyBwb3NpdGlvbjogY29udGFpbmVyUG9zaXRpb24gfSkgPT4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wgZmxleC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aG9sZUNhbnZhcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtIZWFkZXJDb21wb25lbnQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNvbXBvbmVudCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFByZXNzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXgtMSBiZy1mdWNoc2lhLTYwMCBvcGFjaXR5LTUwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3dob2xlSG9zdFJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17ZSA9PiB3aG9sZUNhbnZhcyAmJiBzdGFydERyYWcoZSwgY29udGV4dFNjYWxlLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9e2UgPT4gZW5kRHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJNb3ZlPXtlID0+IG1vdmVEcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17YGZsZXgtMSAke3dob2xlQ2FudmFzID8gYG92ZXJmbG93LWhpZGRlbmAgOiBgYH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17b3V0ZXJDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aG9zdFJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17ZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvbGVDYW52YXMgJiYgc3RhcnREcmFnKGUsIGNvbnRhaW5lclBvc2l0aW9uLnNjYWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXtlID0+IGVuZERyYWcoZSwgY29udGFpbmVyUG9zaXRpb24uc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJNb3ZlPXtlID0+IG1vdmVEcmFnKGUsIGNvbnRhaW5lclBvc2l0aW9uLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVzc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5uZXJDbGFzc05hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4KSBzY2FsZSgke3Bvc2l0aW9uLnNjYWxlfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249e2UgPT4gc3RhcnREcmFnKGUsIGNvbnRhaW5lclBvc2l0aW9uLnNjYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmVhYmxlQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBwb3NpdGlvbi54ICsgY29udGFpbmVyUG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHBvc2l0aW9uLnkgKyBjb250YWluZXJQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHBvc2l0aW9uLnNjYWxlICogY29udGFpbmVyUG9zaXRpb24uc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdob2xlQ2FudmFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb3ZlYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L01vdmVhYmxlQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IE1vdmVhYmxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICAgIHdob2xlQ2FudmFzOiBmYWxzZSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICBzY2FsZTogMSxcbiAgICB9LFxufSk7XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFRleHRJbnB1dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlVmlldyB9IGZyb20gJy4vbW92ZWFibGUtdmlldyc7XG5pbXBvcnQgeyBQaXBlRW5kcG9pbnRWaWV3LCBQaXBlVmlldyB9IGZyb20gJy4vcGlwZXMnO1xuaW1wb3J0IHsgU2hlZXRWaWV3LCBTaGVldFZpZXdEYXRhIH0gZnJvbSAnLi9zaGVldCc7XG5pbXBvcnQgeyBWYWx1ZUVkaXRvciwgVmFsdWVWaWV3ZXJNb2RlIH0gZnJvbSAnLi92YWx1ZS12aWV3JztcbmltcG9ydCB7IGdldFR5cGVOYW1lIH0gZnJvbSAnLi93b3JrLW5hbWVzJztcbmltcG9ydCB7IGNhbGN1bGF0ZVJ1blZhbHVlX2Nvbm5lY3Rpb25PdmVycmlkZSB9IGZyb20gJy4uL2FuYWx5c2lzL2NhbGN1bGF0ZS1ydW4nO1xuaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdFR5cGUsXG59IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IE5vZGVJbnN0YW5jZXNWaWV3ID0gKHtcbiAgICBub2RlSW5zdGFuY2VzLFxuICAgIGZ1bGwgPSBmYWxzZSxcbiAgICBoaWRlVGl0bGVzID0gZmFsc2UsXG59OiB7XG4gICAgbm9kZUluc3RhbmNlczogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZVtdO1xuICAgIGZ1bGw/OiBib29sZWFuO1xuICAgIGhpZGVUaXRsZXM/OiBib29sZWFuO1xufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSdW5WYWx1ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NyZWF0ZVJ1blZhbHVlKCl9PlxuICAgICAgICAgICAgPFZpZXcgdGVzdElEPSdOb2RlSW5zdGFuY2VzVmlldzpWaWV3JyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICB7bm9kZUluc3RhbmNlcy5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3gua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlVmlldyBub2RlSW5zdGFuY2U9e3h9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8Um9vdENvbXBvbmVudHNWaWV3IC8+XG4gICAgICAgIDwvUnVuVmFsdWVDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5jb25zdCBSb290Q29tcG9uZW50c1ZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnRzIH0gPSB1c2VDb250ZXh0KFJ1blZhbHVlQ29udGV4dCk7XG5cbiAgICBjb25zdCBbcm9vdENvbXBvbmVudHMsIHNldFJvb3RDb21wb25lbnRzXSA9IHVzZVN0YXRlKHt9IGFzIFJlY29yZDxzdHJpbmcsICgpID0+IEpTWC5FbGVtZW50Pik7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQ29tcG9uZW50cy5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUm9vdENvbXBvbmVudHNWaWV3OiBDb21wb25lbnRzLnN1YnNjcmliZWAsIHsgeCB9KTtcbiAgICAgICAgICAgIHNldFJvb3RDb21wb25lbnRzKHsgLi4ueCB9KTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgdGVzdElEPSdSb290Q29tcG9uZW50c1ZpZXc6VmlldycgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICAgICAgICB7Wy4uLk9iamVjdC5lbnRyaWVzKHJvb3RDb21wb25lbnRzKV0ubWFwKChbaywgVl0pID0+IChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtrfT5cbiAgICAgICAgICAgICAgICAgICAgPFYgLz5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuY29uc3QgTm9kZVZpZXcgPSAoeyBub2RlSW5zdGFuY2UgfTogeyBub2RlSW5zdGFuY2U6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UgfSkgPT4ge1xuICAgIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICBzY2FsZTogMSxcbiAgICB9KTtcbiAgICBjb25zdCBtb3ZlTm9kZSA9IHVzZVN0YWJsZUNhbGxiYWNrKCh2YWx1ZTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlciB9KSA9PiB7XG4gICAgICAgIHNldFBvc2l0aW9uKHZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5vZGVWaWV3YCwgeyBub2RlSW5zdGFuY2UgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB3b3JrZmxvdyA9IG5vZGVJbnN0YW5jZS53b3JrZmxvdztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7bm9kZUluc3RhbmNlLndvcmtmbG93Lm5hbWUuZW5kc1dpdGgoYGlmLWJvZHlgKSAmJiAoXG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiYXNpcy1bMTAwJV0gaC0wJyAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0xJz5cbiAgICAgICAgICAgICAgICA8TW92ZWFibGVWaWV3XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBwb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3ZlPXttb3ZlTm9kZX1cbiAgICAgICAgICAgICAgICAgICAgbW91c2VCdXR0b249e01vdXNlQnV0dG9uLk1pZGRsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wgcmVsYXRpdmUgYmctc2xhdGUtOTUwLzc1IGJvcmRlci1ibHVlLTEwMCBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIG0tWy0xcHhdIHJvdW5kZWQgcC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57YCR7bm9kZUluc3RhbmNlLndvcmtmbG93Lm5hbWV9ICMke25vZGVJbnN0YW5jZS5rZXl9YH08L1RleHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wgZmxleC0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpbnB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbnB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZUNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGU9e2lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uPXtub2RlSW5zdGFuY2UuaW5wdXRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0+IHgud29ya2Zsb3dJbnB1dCA9PT0gaW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPdXRwdXQ9e25vZGVJbnN0YW5jZS53b3JrZmxvdy5ib2R5LmtpbmQgIT09IGBub2Rlc2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGZsZXgtd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVJbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVJbnN0YW5jZS5jaGlsZHJlbi5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17eC5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZVZpZXcgbm9kZUluc3RhbmNlPXt4fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuYm9keS5raW5kID09PSBgb3BlcmF0b3JgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTYwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmJvZHkub3BlcmF0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHRleHQtWzEwcHhdJz5cdTI2Q0Y8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LWVuZCBpdGVtcy1lbmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cub3V0cHV0cy5tYXAob3V0cHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dHB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZUNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGU9e291dHB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbj17bm9kZUluc3RhbmNlLm91dHB1dHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPT4geC53b3JrZmxvd091dHB1dCA9PT0gb3V0cHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlSW5wdXQ9e25vZGVJbnN0YW5jZS53b3JrZmxvdy5ib2R5LmtpbmQgIT09IGBub2Rlc2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXIgbm9kZUluc3RhbmNlPXtub2RlSW5zdGFuY2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IEZvb3RlciA9ICh7IG5vZGVJbnN0YW5jZSB9OiB7IG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSB9KSA9PiB7XG4gICAgY29uc3QgdGFicyA9IFtgbm9uZWAsIGBzaGVldGAsIGBjb2RlYCwgYGJvdGhgXSBhcyBjb25zdDtcbiAgICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoXG4gICAgICAgIG5vZGVJbnN0YW5jZS53b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmBcbiAgICAgICAgICAgID8gYGNvZGVgXG4gICAgICAgICAgICA6IChgc2hlZXRgIGFzICh0eXBlb2YgdGFicylbbnVtYmVyXSksXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICB7dGFicy5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzPXsoKSA9PiBzZXRUYWIoeCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17YHAtMSBiZy1ncmF5LTIwMCAke3RhYiA9PT0geCA/IGBgIDogYG9wYWNpdHktNTBgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD57eH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICB7KHRhYiA9PT0gYGNvZGVgIHx8IHRhYiA9PT0gYGJvdGhgKSAmJiAoXG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy1ncmF5LTIwMCc+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1wcmUnPntub2RlSW5zdGFuY2UucnVucz8uWzBdPy5jb2RlfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyh0YWIgPT09IGBzaGVldGAgfHwgdGFiID09PSBgYm90aGApICYmIChcbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLWdyYXktMjAwJz5cbiAgICAgICAgICAgICAgICAgICAgPE5vZGVJbnN0YW5jZVNoZWV0VmlldyBub2RlSW5zdGFuY2U9e25vZGVJbnN0YW5jZX0gLz5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgTm9kZUluc3RhbmNlU2hlZXRWaWV3ID0gKHsgbm9kZUluc3RhbmNlIH06IHsgbm9kZUluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlIH0pID0+IHtcbiAgICBjb25zdCBydW5WYWx1ZUNvbnRleHQgPSB1c2VDb250ZXh0KFJ1blZhbHVlQ29udGV4dCk7XG4gICAgY29uc3QgW3J1bnMsIHNldFJ1bnNdID0gdXNlU3RhdGUodW5kZWZpbmVkIGFzIHR5cGVvZiBub2RlSW5zdGFuY2UucnVucyk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3ViID0gcnVuVmFsdWVDb250ZXh0LlZhbHVlQ2hhbmdlZC5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTm9kZUluc3RhbmNlU2hlZXRWaWV3OiBjaGFuZ2VkYCwgeyBydW5zOiBub2RlSW5zdGFuY2UucnVucyB9KTtcbiAgICAgICAgICAgIHNldFJ1bnMoWy4uLihub2RlSW5zdGFuY2UucnVucyA/PyBbXSldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFJ1bnMoWy4uLihub2RlSW5zdGFuY2UucnVucyA/PyBbXSldKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnNvbGUubG9nKGBOb2RlSW5zdGFuY2VTaGVldFZpZXc6IFJFTkRFUmAsIHsgcnVuczogbm9kZUluc3RhbmNlLnJ1bnMgfSk7XG5cbiAgICBpZiAoIXJ1bnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxUZXh0PkVtcHR5PC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICApO1xuICAgIH1cbiAgICBjb25zdCBhbGxIZWFkZXJzOiBTaGVldFZpZXdEYXRhW2BoZWFkZXJgXSA9XG4gICAgICAgIHJ1bnM/LmZsYXRNYXAociA9PiBbXG4gICAgICAgICAgICAuLi5yLmlucHV0cy5tYXAoeCA9PiAoeyBuYW1lOiB4Lm5hbWUsIG1vZGU6IGBpbnB1dGAgYXMgVmFsdWVWaWV3ZXJNb2RlIH0pKSxcbiAgICAgICAgICAgIC4uLnIuaW5uZXIubWFwKHggPT4gKHsgbmFtZTogeC5uYW1lLCBtb2RlOiBgaW5uZXJgIGFzIFZhbHVlVmlld2VyTW9kZSB9KSksXG4gICAgICAgICAgICAuLi5yLm91dHB1dHMubWFwKHggPT4gKHsgbmFtZTogeC5uYW1lLCBtb2RlOiBgb3V0cHV0YCBhcyBWYWx1ZVZpZXdlck1vZGUgfSkpLFxuICAgICAgICBdKSA/PyBbXTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBbLi4ubmV3IE1hcChhbGxIZWFkZXJzLm1hcCh4ID0+IFt4Lm5hbWUsIHhdKSkudmFsdWVzKCldO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNoZWV0Vmlld1xuICAgICAgICAgICAgZGF0YT17e1xuICAgICAgICAgICAgICAgIGhlYWRlcjogaGVhZGVycyxcbiAgICAgICAgICAgICAgICByb3dzOiBydW5zLm1hcChyID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzOiBoZWFkZXJzLm1hcChoID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBoLm1vZGUgPT09IGBpbnB1dGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHIuaW5wdXRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGgubmFtZSk/LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBoLm1vZGUgPT09IGBpbm5lcmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHIuaW5uZXIuZmluZCh4ID0+IHgubmFtZSA9PT0gaC5uYW1lKT8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGgubW9kZSA9PT0gYG91dHB1dGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHIub3V0cHV0cy5maW5kKHggPT4geC5uYW1lID09PSBoLm5hbWUpPy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IGdldFBpcGVDb25uZWN0aW9uS2V5ID0gKFxuICAgIGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSxcbiAgICBkaXJlY3Rpb246IGBpbmAgfCBgb3V0YCxcbikgPT4ge1xuICAgIHJldHVybiBgJHtjb25uZWN0aW9uLmtleX06JHtkaXJlY3Rpb259YDtcbn07XG5cbmNvbnN0IGdldFBpcGVLZXkgPSAoXG4gICAgcGlwZVNpZGU6IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF0gfCBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYGRlc3RpbmF0aW9uYF0sXG4gICAgZGlyZWN0aW9uOiBgaW5gIHwgYG91dGAsXG4pID0+IHtcbiAgICBpZiAocGlwZVNpZGUua2luZCA9PT0gYGlucHV0YCkge1xuICAgICAgICByZXR1cm4gZ2V0UGlwZUNvbm5lY3Rpb25LZXkocGlwZVNpZGUuaW5wdXQsIGRpcmVjdGlvbik7XG4gICAgfVxuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgb3V0cHV0YCkge1xuICAgICAgICByZXR1cm4gZ2V0UGlwZUNvbm5lY3Rpb25LZXkocGlwZVNpZGUub3V0cHV0LCBkaXJlY3Rpb24pO1xuICAgIH1cbiAgICBpZiAocGlwZVNpZGUua2luZCA9PT0gYGRhdGFgKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChwaXBlU2lkZS5raW5kID09PSBgb3BlcmF0b3Itb3V0cHV0YCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocGlwZVNpZGUua2luZCA9PT0gYG9wZXJhdG9yLWlucHV0YCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBQaXBlVmFsdWVWaWV3ID0gKHtcbiAgICBwaXBlVmFsdWUsXG4gICAgc2lkZSxcbn06IHtcbiAgICBwaXBlVmFsdWU6IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZTtcbiAgICBzaWRlOiBgaW5mbG93YCB8IGBvdXRmbG93YDtcbn0pID0+IHtcbiAgICBjb25zdCB7IHNvdXJjZSwgZGVzdGluYXRpb24gfSA9IHBpcGVWYWx1ZSA/PyB7fTtcbiAgICBpZiAoIXNvdXJjZSB8fCAhZGVzdGluYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIDw+PC8+O1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZUlkID0gZ2V0UGlwZUtleShzb3VyY2UsIGBvdXRgKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbklkID0gZ2V0UGlwZUtleShkZXN0aW5hdGlvbiwgYGluYCk7XG4gICAgaWYgKCFzb3VyY2VJZCB8fCAhZGVzdGluYXRpb25JZCkge1xuICAgICAgICByZXR1cm4gPD48Lz47XG4gICAgfVxuXG4gICAgcmV0dXJuIDxQaXBlVmlldyBzb3VyY2VJZD17c291cmNlSWR9IGRlc3RpbmF0aW9uSWQ9e2Rlc3RpbmF0aW9uSWR9IHNpZGU9e3NpZGV9IC8+O1xufTtcblxuY29uc3QgTm9kZUNvbm5lY3Rpb24gPSAoe1xuICAgIHZhcmlhYmxlLFxuICAgIGNvbm5lY3Rpb24sXG4gICAgaGlkZUlucHV0LFxuICAgIGhpZGVPdXRwdXQsXG59OiB7XG4gICAgdmFyaWFibGU6IHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICB0eXBlPzogUGlwZXNjcmlwdFR5cGU7XG4gICAgICAgIGlnbm9yZWQ/OiBib29sZWFuO1xuICAgIH07XG4gICAgY29ubmVjdGlvbjogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlO1xuICAgIGhpZGVJbnB1dD86IGJvb2xlYW47XG4gICAgaGlkZU91dHB1dD86IGJvb2xlYW47XG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbHVtbic+XG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sdW1uJz5cbiAgICAgICAgICAgICAgICAgICAgeyFoaWRlSW5wdXQgJiYgY29ubmVjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtjb25uZWN0aW9uLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3IGlkPXtnZXRQaXBlQ29ubmVjdGlvbktleShjb25uZWN0aW9uLCBgaW5gKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWYWx1ZVZpZXcgcGlwZVZhbHVlPXtjb25uZWN0aW9uLmluZmxvd1BpcGV9IHNpZGU9J2luZmxvdycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3BsLTEnIC8+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ibHVlLTMwMCAke3ZhcmlhYmxlLmlnbm9yZWQgPyBgbGluZS10aHJvdWdoIG9wYWNpdHktNTBgIDogYGB9YH1cbiAgICAgICAgICAgICAgICA+e2Ake3ZhcmlhYmxlLm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAge3ZhcmlhYmxlLnR5cGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICB7IWhpZGVPdXRwdXQgJiYgY29ubmVjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtjb25uZWN0aW9uLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVFbmRwb2ludFZpZXcgaWQ9e2dldFBpcGVDb25uZWN0aW9uS2V5KGNvbm5lY3Rpb24sIGBvdXRgKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29ubmVjdGlvbi5vdXRmbG93UGlwZXMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRmbG93UGlwZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0Zmxvd1BpcGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dGZsb3dQaXBlLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlVmFsdWVWaWV3IHBpcGVWYWx1ZT17b3V0Zmxvd1BpcGV9IHNpZGU9J291dGZsb3cnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAge2Nvbm5lY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHtjb25uZWN0aW9uLnJ1bnM/Lm5hbWVJblNjb3BlXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBjb25uZWN0aW9uLnJ1bnM/Lm5hbWVJblNjb3BlICE9PSBjb25uZWN0aW9uLm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTMwMCc+e2Ake2Nvbm5lY3Rpb24ucnVucy5uYW1lSW5TY29wZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxOb2RlQ29ubmVjdGlvblZhbHVlIGNvbm5lY3Rpb249e2Nvbm5lY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIHtjb25uZWN0aW9uLmluZmxvd1BpcGU/LnBpcGUua2luZCA9PT0gYGRhdGFgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbS1bMXB4XSBiZy1wdXJwbGUtMTAwIG9wYWNpdHktNTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncHgtMSBtaW4tdy1bNjBweF0gdGV4dC1wdXJwbGUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3Rpb24uaW5mbG93UGlwZT8ucGlwZS5qc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuY29uc3QgY3JlYXRlUnVuVmFsdWUgPSAoKSA9PiAoe1xuICAgIFZhbHVlQ2hhbmdlZDogbmV3IFN1YmplY3Q8dm9pZD4oKSxcbiAgICBDb21wb25lbnRzOiBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9IGFzIFJlY29yZDxzdHJpbmcsICgpID0+IEpTWC5FbGVtZW50PiksXG59KTtcbmV4cG9ydCBjb25zdCBSdW5WYWx1ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGNyZWF0ZVJ1blZhbHVlKCkpO1xuXG5jb25zdCBOb2RlQ29ubmVjdGlvblZhbHVlID0gKHtcbiAgICBjb25uZWN0aW9uLFxufToge1xuICAgIGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZTtcbn0pID0+IHtcbiAgICBjb25zdCBydW5WYWx1ZUNvbnRleHQgPSB1c2VDb250ZXh0KFJ1blZhbHVlQ29udGV4dCk7XG5cbiAgICBjb25zdCBbcnVuVmFsdWUsIHNldFJ1blZhbHVlXSA9IHVzZVN0YXRlKGNvbm5lY3Rpb24ucnVucz8udmFsdWUpO1xuICAgIGNvbnN0IFtoYXNPdmVycmlkZSwgc2V0SGFzT3ZlcnJpZGVdID0gdXNlU3RhdGUoISFjb25uZWN0aW9uLnJ1bnM/Lm92ZXJyaWRlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YiA9IHJ1blZhbHVlQ29udGV4dC5WYWx1ZUNoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOb2RlQ29ubmVjdGlvblZhbHVlOiBWYWx1ZUNoYW5nZWQuc3Vic2NyaWJlYCwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBjb25uZWN0aW9uLnJ1bnM/LnZhbHVlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFJ1blZhbHVlKGNvbm5lY3Rpb24ucnVucz8udmFsdWUpO1xuICAgICAgICAgICAgc2V0SGFzT3ZlcnJpZGUoY29ubmVjdGlvbi5ydW5zPy5vdmVycmlkZSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBjaGFuZ2VWYWx1ZSA9ICh2YWx1ZTogdW5rbm93bikgPT4ge1xuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9jb25uZWN0aW9uT3ZlcnJpZGUoY29ubmVjdGlvbiwgdmFsdWUpO1xuICAgICAgICBydW5WYWx1ZUNvbnRleHQuVmFsdWVDaGFuZ2VkLm5leHQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxWYWx1ZUVkaXRvclxuICAgICAgICAgICAgICAgIGlkPXtjb25uZWN0aW9uLmtleX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cnVuVmFsdWV9XG4gICAgICAgICAgICAgICAgaGFzT3ZlcnJpZGU9e2hhc092ZXJyaWRlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuIiwgImltcG9ydCBSZWFjdCwge1xuICAgIGNyZWF0ZUNvbnRleHQsXG4gICAgdXNlQ29udGV4dCxcbiAgICB1c2VFZmZlY3QsXG4gICAgdXNlTGF5b3V0RWZmZWN0LFxuICAgIHVzZVJlZixcbiAgICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW92ZWFibGVDb250ZXh0IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7IFBpcGVzY3JpcHRQaXBlVmFsdWUsIFBpcGVzY3JpcHRXb3JrZmxvdyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSA9ICh7XG4gICAgbm9kZUlkLFxuICAgIG5hbWUsXG4gICAgZGlyZWN0aW9uLFxufToge1xuICAgIG5vZGVJZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXJlY3Rpb246IGBvdXRgIHwgYGluYDtcbn0pID0+IHtcbiAgICByZXR1cm4gYG5vZGU6JHtub2RlSWR9OiR7ZGlyZWN0aW9ufToke25hbWV9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93ID0gKHtcbiAgICB3b3JrZmxvd1VyaSxcbiAgICBuYW1lLFxuICAgIGRpcmVjdGlvbixcbn06IHtcbiAgICB3b3JrZmxvd1VyaTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXJlY3Rpb246IGBvdXRgIHwgYGluYDtcbn0pID0+IHtcbiAgICByZXR1cm4gYHdvcmtmbG93OiR7d29ya2Zsb3dVcml9OiR7ZGlyZWN0aW9ufToke25hbWV9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2UgPSAoe1xuICAgIHBpcGUsXG4gICAgd29ya2Zsb3csXG59OiB7XG4gICAgcGlwZTogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZTtcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xufSkgPT4ge1xuICAgIGlmICghcGlwZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChwaXBlLmtpbmQgPT09IGB3b3JrZmxvdy1vcGVyYXRvcmApIHtcbiAgICAgICAgcmV0dXJuIFtgb3BlcmF0b3JgXS5tYXAobmFtZSA9PlxuICAgICAgICAgICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChwaXBlLmtpbmQgPT09IGB3b3JrZmxvdy1pbnB1dGApIHtcbiAgICAgICAgcmV0dXJuIFtwaXBlLndvcmtmbG93SW5wdXROYW1lXS5tYXAobmFtZSA9PlxuICAgICAgICAgICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JXb3JrZmxvdyh7XG4gICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYGluYCxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHBpcGUua2luZCA9PT0gYG5vZGVgKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgIG5vZGVJZDogcGlwZS5zb3VyY2VOb2RlSWQsXG4gICAgICAgICAgICAgICAgbmFtZTogcGlwZS5zb3VyY2VOb2RlT3V0cHV0TmFtZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLy8gaWYocGlwZS5raW5kID09PSBgZGF0YWApe1xuXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIFtdO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBpcGVFbmRwb2ludHNSZWdpc3RyeSA9ICgpID0+ICh7XG4gICAgaG9zdE9ic2VydmFibGU6IG5ldyBTdWJqZWN0KCkgYXMgT2JzZXJ2YWJsZTxWaWV3PixcbiAgICBob3N0VmlldzogbnVsbCBhcyBudWxsIHwgVmlldyxcbiAgICBlbmRwb2ludHM6IHt9IGFzIHtcbiAgICAgICAgW2lkOiBzdHJpbmddOiB1bmRlZmluZWQgfCBTdWJqZWN0PHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT47XG4gICAgfSxcbiAgICBwaXBlczogbmV3IEJlaGF2aW9yU3ViamVjdChcbiAgICAgICAge30gYXMge1xuICAgICAgICAgICAgW2lkOiBzdHJpbmddOlxuICAgICAgICAgICAgICAgIHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfCB7IHNvdXJjZUlkOiBzdHJpbmc7IGRlc3RpbmF0aW9uSWQ6IHN0cmluZzsgc2lkZT86IGBpbmZsb3dgIHwgYG91dGZsb3dgIH07XG4gICAgICAgIH0sXG4gICAgKSxcbn0pO1xudHlwZSBQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlID0gUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlUGlwZUVuZHBvaW50c1JlZ2lzdHJ5PjtcbmV4cG9ydCBjb25zdCBQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0ID0gY3JlYXRlQ29udGV4dChjcmVhdGVQaXBlRW5kcG9pbnRzUmVnaXN0cnkoKSk7XG5cbmNvbnN0IGdldE9yQ3JlYXRlRW5kcG9pbnRTdWJqZWN0ID0gKHJlZ2lzdHJ5OiBQaXBlRW5kcG9pbnRzUmVnaXN0cnlUeXBlLCBpZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgcmVnaXN0cnkuZW5kcG9pbnRzW2lkXVxuICAgICAgICA/PyAocmVnaXN0cnkuZW5kcG9pbnRzW2lkXSA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH0pKVxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgUGlwZVZpZXcgPSAoe1xuICAgIHNvdXJjZUlkLFxuICAgIGRlc3RpbmF0aW9uSWQsXG4gICAgc2lkZSA9IGBpbmZsb3dgLFxufToge1xuICAgIHNvdXJjZUlkOiB1bmRlZmluZWQgfCBzdHJpbmc7XG4gICAgZGVzdGluYXRpb25JZDogc3RyaW5nO1xuICAgIHNpZGU/OiBgaW5mbG93YCB8IGBvdXRmbG93YDtcbn0pID0+IHtcbiAgICBjb25zdCB7IHBpcGVzOiBwaXBlc1N1YmplY3QgfSA9IHVzZUNvbnRleHQoUGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7c291cmNlSWR9PT4ke2Rlc3RpbmF0aW9uSWR9Ojoke3NpZGV9YDtcbiAgICAgICAgY29uc3Qgb2xkID0gcGlwZXNTdWJqZWN0LnZhbHVlO1xuICAgICAgICBvbGRba2V5XSA9ICFzb3VyY2VJZFxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgc291cmNlSWQsXG4gICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbklkLFxuICAgICAgICAgICAgICAgICAgc2lkZSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgcGlwZXNTdWJqZWN0Lm5leHQob2xkKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2xkID0gcGlwZXNTdWJqZWN0LnZhbHVlO1xuICAgICAgICAgICAgb2xkW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBwaXBlc1N1YmplY3QubmV4dChvbGQpO1xuICAgICAgICB9O1xuICAgIH0sIFtzb3VyY2VJZCwgZGVzdGluYXRpb25JZCwgc2lkZV0pO1xuXG4gICAgcmV0dXJuIDw+PC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IFBpcGVWaWV3SG9zdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBpcGVzOiBwaXBlc1N1YmplY3QgfSA9IHVzZUNvbnRleHQoUGlwZUVuZHBvaW50c1JlZ2lzdHJ5Q29udGV4dCk7XG4gICAgY29uc3QgW3BpcGVzLCBzZXRQaXBlc10gPSB1c2VTdGF0ZShwaXBlc1N1YmplY3QudmFsdWUpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YiA9IHBpcGVzU3ViamVjdC5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgICAgICBzZXRQaXBlcyh7IC4uLnggfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgdGVzdElEPSdQaXBlVmlld0hvc3QnIGNsYXNzTmFtZT0nYWJzb2x1dGUgei0xMCBvcGFjaXR5LTc1Jz5cbiAgICAgICAgICAgIHtbLi4uT2JqZWN0LmVudHJpZXMocGlwZXMpXVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKFtrLCB2XSkgPT4gISF2KVxuICAgICAgICAgICAgICAgIC5tYXAoKFtrLCB2XSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtrfT57diAmJiA8UGlwZVZpZXdMaW5lIHsuLi52fSAvPn08L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IFBpcGVWaWV3TGluZSA9ICh7XG4gICAgc291cmNlSWQsXG4gICAgZGVzdGluYXRpb25JZCxcbiAgICBzaWRlID0gYGluZmxvd2AsXG59OiB7XG4gICAgc291cmNlSWQ6IHVuZGVmaW5lZCB8IHN0cmluZztcbiAgICBkZXN0aW5hdGlvbklkOiBzdHJpbmc7XG4gICAgc2lkZT86IGBpbmZsb3dgIHwgYG91dGZsb3dgO1xufSkgPT4ge1xuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0KTtcblxuICAgIGNvbnN0IGRlc3RpbmF0aW9uRW5kcG9pbnQgPSBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgZGVzdGluYXRpb25JZCk7XG4gICAgY29uc3Qgc291cmNlRW5kcG9pbnQgPSAhc291cmNlSWQgPyB1bmRlZmluZWQgOiBnZXRPckNyZWF0ZUVuZHBvaW50U3ViamVjdChyZWdpc3RyeSwgc291cmNlSWQpO1xuXG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHNvdXJjZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIGRlc3RpbmF0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICB9KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghc291cmNlRW5kcG9pbnQgfHwgIWRlc3RpbmF0aW9uRW5kcG9pbnQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlVmlldyAhc291cmNlRW5kcG9pbnQgfHwgIWRlc3RpbmF0aW9uRW5kcG9pbnRgLCB7XG4gICAgICAgICAgICAvLyAgICAgc291cmNlSWQsXG4gICAgICAgICAgICAvLyAgICAgZGVzdGluYXRpb25JZCxcbiAgICAgICAgICAgIC8vICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgIC8vICAgICBzb3VyY2VFbmRwb2ludCxcbiAgICAgICAgICAgIC8vICAgICBkZXN0aW5hdGlvbkVuZHBvaW50LFxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5pdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgICAgIGNvbnN0IHN1YiA9IGNvbWJpbmVMYXRlc3QoW3NvdXJjZUVuZHBvaW50LCBkZXN0aW5hdGlvbkVuZHBvaW50LCBpbml0XSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKFtzb3VyY2UsIGRlc3RpbmF0aW9uXSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlVmlldyBkcmF3YCwgeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0pO1xuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKHsgc291cmNlLCBkZXN0aW5hdGlvbiB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaW5pdGlhbFxuICAgICAgICBjb25zb2xlLmxvZyhgaW5pdGlhbGAsIHsgc291cmNlRW5kcG9pbnQsIGRlc3RpbmF0aW9uRW5kcG9pbnQgfSk7XG4gICAgICAgIGluaXQubmV4dCgpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbIWRlc3RpbmF0aW9uRW5kcG9pbnQsICFzb3VyY2VFbmRwb2ludF0pO1xuXG4gICAgY29uc3QgZGVidWcgPSBmYWxzZTtcbiAgICBjb25zdCBpc091dGZsb3cgPSBzaWRlID09PSBgb3V0Zmxvd2A7XG4gICAgY29uc3QgeERlbHRhID0gcG9zaXRpb24uZGVzdGluYXRpb24ueCAtIHBvc2l0aW9uLnNvdXJjZS54O1xuICAgIGNvbnN0IHlEZWx0YSA9IHBvc2l0aW9uLmRlc3RpbmF0aW9uLnkgLSBwb3NpdGlvbi5zb3VyY2UueTtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQoeERlbHRhICogeERlbHRhICsgeURlbHRhICogeURlbHRhKTtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoeURlbHRhLCB4RGVsdGEpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICB0ZXN0SUQ9e2BQaXBlVmlld0xpbmVcbiAgICAgICAgICAgICR7c291cmNlSWR9XG4gICAgICAgICAgICA9PiR7ZGVzdGluYXRpb25JZH1cbiAgICAgICAgICAgICR7c2lkZX1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTAgaC0wIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcidcbiAgICAgICAgPlxuICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LTAgaC0wIGFic29sdXRlJz5cbiAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24uc291cmNlLnggKyA0fXB4LCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uc291cmNlLnkgLSAyICsgKGlzT3V0ZmxvdyA/IDIgOiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfXB4KWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHthbmdsZX1yYWQpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc091dGZsb3cgPyBgYmctYmx1ZS00MDBgIDogYGJnLXJlZC00MDBgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAge2RlYnVnICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIHRyYW5zbGF0ZS15LVsxMDBweF0gcm90YXRlLTQ1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy1bMTAwMHB4XSB0ZXh0LVs0cHhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57YCgke3NvdXJjZUlkfSk9Pigke2Rlc3RpbmF0aW9uSWR9KWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntgKCR7cG9zaXRpb24uc291cmNlLnh9LCR7cG9zaXRpb24uc291cmNlLnl9KT0+KCR7cG9zaXRpb24uZGVzdGluYXRpb24ueH0sJHtwb3NpdGlvbi5kZXN0aW5hdGlvbi55fSlgfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFBpcGVFbmRwb2ludFZpZXcgPSAoeyBpZCB9OiB7IGlkOiBzdHJpbmcgfSkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSAxMjtcblxuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gdXNlQ29udGV4dChQaXBlRW5kcG9pbnRzUmVnaXN0cnlDb250ZXh0KTtcbiAgICBjb25zdCBtb3ZlQ29udGV4dCA9IHVzZUNvbnRleHQoTW92ZWFibGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHRhcmdldFJlZiA9IHVzZVJlZihudWxsIGFzIG51bGwgfCBWaWV3KTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdGAsIHsgcmVnaXN0cnkgfSk7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaCA9IHJlZ2lzdHJ5Lmhvc3RWaWV3O1xuICAgICAgICAgICAgaWYgKCFoKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBpcGVFbmRwb2ludFZpZXcgdXNlTGF5b3V0RWZmZWN0IC0gaG9zdCBOT1QgUkVBRFlgLCB7IHJlZ2lzdHJ5IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHQgPSB0YXJnZXRSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghdCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQaXBlRW5kcG9pbnRWaWV3IHVzZUxheW91dEVmZmVjdCAtIGNvbXBvbmVudCBOT1QgUkVBRFlgLCB7IHJlZ2lzdHJ5IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdC5tZWFzdXJlTGF5b3V0KGgsIChsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUGlwZUVuZHBvaW50VmlldyB1c2VMYXlvdXRFZmZlY3QgbWVhc3VyZUxheW91dCBORVhUYCwge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZCxcbiAgICAgICAgICAgICAgICAvLyAgICAgbGVmdCxcbiAgICAgICAgICAgICAgICAvLyAgICAgdG9wLFxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIC8vICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gZ2V0T3JDcmVhdGVFbmRwb2ludFN1YmplY3QocmVnaXN0cnksIGlkKTtcbiAgICAgICAgICAgICAgICBzLm5leHQoe1xuICAgICAgICAgICAgICAgICAgICB4OiBsZWZ0ICsgbW92ZUNvbnRleHQucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG9wICsgbW92ZUNvbnRleHQucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNhbGN1bGF0ZSgpO1xuICAgICAgICByZWdpc3RyeS5ob3N0T2JzZXJ2YWJsZS5zdWJzY3JpYmUoaCA9PiB7XG4gICAgICAgICAgICBjYWxjdWxhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW1xuICAgICAgICAhIXRhcmdldFJlZi5jdXJyZW50LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi54LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi55LFxuICAgICAgICBtb3ZlQ29udGV4dC5wb3NpdGlvbi5zY2FsZSxcbiAgICBdKTtcblxuICAgIGNvbnN0IGRlYnVnID0gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgdGVzdElEPXtgUGlwZUVuZHBvaW50Vmlldzoke2lkfWB9IGNsYXNzTmFtZT0ndy0yIGgtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPFZpZXcgcmVmPXt0YXJnZXRSZWZ9IGNsYXNzTmFtZT0ndy0wIGgtMCBhYnNvbHV0ZSBwdC0xJz5cbiAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNDAwIGJvcmRlci1bMXB4XSBib3JkZXItYmx1ZS05NTAgcm91bmRlZC1mdWxsJ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAtc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IC1zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAge2RlYnVnICYmIChcbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIHRyYW5zbGF0ZS15LVsxMDBweF0gcm90YXRlLTkwJz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNDAwJz57aWR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgU2Nyb2xsVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFZhbHVlVmlld2VyLCBWYWx1ZVZpZXdlck1vZGUgfSBmcm9tICcuL3ZhbHVlLXZpZXcnO1xuXG5leHBvcnQgdHlwZSBTaGVldFZpZXdEYXRhID0ge1xuICAgIGhlYWRlcjogeyBuYW1lOiBzdHJpbmc7IG1vZGU6IFZhbHVlVmlld2VyTW9kZSB9W107XG4gICAgcm93czogeyBjZWxsczogdW5rbm93bltdIH1bXTtcbn07XG5leHBvcnQgY29uc3QgU2hlZXRWaWV3ID0gKHsgZGF0YSB9OiB7IGRhdGE6IFNoZWV0Vmlld0RhdGEgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IHRlc3RJRD0nU2hlZXRWaWV3JyBjbGFzc05hbWU9J2ZsZXgtY29sJz5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgIHtkYXRhLmhlYWRlci5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3gubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e3gubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8U2Nyb2xsVmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIG1heC1oLVsyNXZoXSc+XG4gICAgICAgICAgICAgICAge2RhdGEucm93cy5tYXAoKHIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ci5jZWxscy5tYXAoKHgsIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17an0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZhbHVlVmlld2VyIHZhbHVlPXt4fSBtb2RlPXtkYXRhLmhlYWRlcltqXS5tb2RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFRleHRJbnB1dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFJ1blZhbHVlQ29udGV4dCB9IGZyb20gJy4vbm9kZS1pbnN0YW5jZS12aWV3JztcblxuZXhwb3J0IGNvbnN0IFZhbHVlRWRpdG9yID0gKHtcbiAgICBpZCxcbiAgICB2YWx1ZSxcbiAgICBoYXNPdmVycmlkZSxcbiAgICBvbkNoYW5nZSxcbn06IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHZhbHVlOiB1bmtub3duO1xuICAgIGhhc092ZXJyaWRlOiBib29sZWFuO1xuICAgIG9uQ2hhbmdlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XG59KSA9PiB7XG4gICAgY29uc3QgcnVuVmFsdWVDb250ZXh0ID0gdXNlQ29udGV4dChSdW5WYWx1ZUNvbnRleHQpO1xuXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSB1c2VTdGFibGVDYWxsYmFjaygodjogdW5rbm93bikgPT4ge1xuICAgICAgICB0b2dnbGVFZGl0KGZhbHNlKTtcbiAgICAgICAgb25DaGFuZ2Uodik7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2dnbGVFZGl0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFZhbHVlRWRpdG9yOiB0b2dnbGVFZGl0YCwgeyB2aXNpYmxlIH0pO1xuICAgICAgICBjb25zdCBuZXdTaG93RWRpdCA9IHZpc2libGU7XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHJ1blZhbHVlQ29udGV4dC5Db21wb25lbnRzLnZhbHVlO1xuICAgICAgICBpZiAobmV3U2hvd0VkaXQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHNbaWRdID0gKCkgPT4gKFxuICAgICAgICAgICAgICAgIDxWYWx1ZUVkaXRNb2RhbFxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdG9nZ2xlRWRpdChmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgY29tcG9uZW50c1tpZF07XG4gICAgICAgIH1cbiAgICAgICAgcnVuVmFsdWVDb250ZXh0LkNvbXBvbmVudHMubmV4dChjb21wb25lbnRzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3NJbj17KCkgPT4gdG9nZ2xlRWRpdCh0cnVlKX0+XG4gICAgICAgICAgICAgICAgPFZhbHVlVmlld2VyIHZhbHVlPXt2YWx1ZX0gbW9kZT17aGFzT3ZlcnJpZGUgPyBgb3ZlcnJpZGVgIDogdW5kZWZpbmVkfSAvPlxuICAgICAgICAgICAgPC9QcmVzc2FibGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgdHlwZSBWYWx1ZVZpZXdlck1vZGUgPSB1bmRlZmluZWQgfCBgb3ZlcnJpZGVgIHwgYGlucHV0YCB8IGBvdXRwdXRgIHwgYGlubmVyYDtcbmV4cG9ydCBjb25zdCBWYWx1ZVZpZXdlciA9ICh7IHZhbHVlLCBtb2RlIH06IHsgdmFsdWU6IHVua25vd247IG1vZGU/OiBWYWx1ZVZpZXdlck1vZGUgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG0tWzFweF0gJHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gYG92ZXJyaWRlYFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgYmctZ3JlZW4tMTAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtb2RlID09PSBgaW5wdXRgXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBiZy1ncmVlbi0xMDBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG1vZGUgPT09IGBvdXRwdXRgXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBiZy1ncmVlbi0xMDBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBiZy1ncmF5LTEwMGBcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0xIG1pbi13LVs2MHB4XSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gYG92ZXJyaWRlYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYHRleHQtZ3JlZW4tNjAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gYGlucHV0YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYHRleHQtZ3JlZW4tNjAwYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gYG91dHB1dGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGB0ZXh0LWdyZWVuLTYwMGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGB0ZXh0LWdyYXktNjAwYFxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgVmFsdWVFZGl0TW9kYWwgPSAoe1xuICAgIGlkLFxuICAgIHZhbHVlOiB2YWx1ZVJhdyxcbiAgICBvbkNoYW5nZSxcbiAgICBvbkNhbmNlbCxcbn06IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHZhbHVlOiB1bmtub3duO1xuICAgIG9uQ2hhbmdlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XG4gICAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG59KSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShKU09OLnN0cmluZ2lmeSh2YWx1ZVJhdykpO1xuICAgIGNvbnN0IHNhdmUgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICB9KTtcbiAgICBjb25zdCBjbGVhciA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgICBjb25zdCBjYW5jZWwgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIG9uQ2FuY2VsKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIGZsZXgtY29sIGJnLWdyYXktMTAwIHAtMiByb3VuZGVkIHotMTAnPlxuICAgICAgICAgICAgPFRleHRJbnB1dCBjbGFzc05hbWU9J2JnLXdoaXRlJyB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlVGV4dD17eCA9PiBzZXRWYWx1ZSh4KX0gLz5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9e2NhbmNlbH0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYmctZ3JheS0yMDAgcC0xIG0tMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5DYW5jZWw8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cblxuICAgICAgICAgICAgICAgIDxQcmVzc2FibGUgb25QcmVzcz17Y2xlYXJ9PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2JnLXJlZC0yMDAgcC0xIG0tMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5DbGVhcjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuXG4gICAgICAgICAgICAgICAgPFByZXNzYWJsZSBvblByZXNzPXtzYXZlfT5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy1ibHVlLTIwMCBwLTEgbS0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlNhdmU8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuIiwgImltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBQaXBlc2NyaXB0VHlwZSwgUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlTmFtZSA9ICh0eXBlOiBQaXBlc2NyaXB0VHlwZSkgPT4ge1xuICAgIGlmICh0eXBlLmtpbmQgPT09IGBzaW1wbGVgKSB7XG4gICAgICAgIHJldHVybiB0eXBlLnR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHR5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IFdvcmtmbG93SW5wdXROYW1lID0gKHsgaW5wdXQgfTogeyBpbnB1dDogUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJsdWUtMzAwICR7aW5wdXQuaWdub3JlZCA/IGBsaW5lLXRocm91Z2ggb3BhY2l0eS01MGAgOiBgYH1gfVxuICAgICAgICA+e2Ake2lucHV0Lm5hbWV9YH08L1RleHQ+XG4gICAgKTtcbn07XG4iLCAiZXhwb3J0IGNvbnN0IGpzb25TdHJpbmdpZnlfc2FmZSA9IChvYmpSYXc6IHVua25vd24sIHNob3VsZEZvcm1hdD86IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xuICAgIGxldCBuZXh0SWQgPSAxO1xuICAgIHR5cGUgUmVnaXN0cnkgPSBNYXA8dW5rbm93biwgeyBpZDogc3RyaW5nOyBtaW5EZXB0aDogbnVtYmVyOyB2aXNpdGVkPzogYm9vbGVhbiB9PjtcbiAgICBjb25zdCBkZWVwUmVnaXN0ZXIgPSAob2JqOiB1bmtub3duLCB2aXNpdGVkOiBSZWdpc3RyeSwgZGVwdGg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiAhPT0gYG9iamVjdGApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYmpSZWcgPSB2aXNpdGVkLmdldChvYmopO1xuICAgICAgICBpZiAob2JqUmVnKSB7XG4gICAgICAgICAgICBvYmpSZWcubWluRGVwdGggPSBNYXRoLm1pbihkZXB0aCwgb2JqUmVnLm1pbkRlcHRoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpc2l0ZWQuc2V0KG9iaiwgeyBpZDogYF9pZF8ke25leHRJZCsrfV9gLCBtaW5EZXB0aDogZGVwdGggfSk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgb2JqLmZvckVhY2goeCA9PiBkZWVwUmVnaXN0ZXIoeCwgdmlzaXRlZCwgZGVwdGggKyAxKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaCh4ID0+IGRlZXBSZWdpc3Rlcih4LCB2aXNpdGVkLCBkZXB0aCArIDEpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWVwQ2xvbmUgPSAob2JqOiB1bmtub3duLCB2aXNpdGVkOiBSZWdpc3RyeSwgZGVwdGg6IG51bWJlcik6IHVua25vd24gPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gYG9iamVjdGApIHtcbiAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgciA9IHZpc2l0ZWQuZ2V0KG9iaik7XG4gICAgICAgICAgICBpZiAoZGVwdGggPiAocj8ubWluRGVwdGggPz8gMCkgfHwgcj8udmlzaXRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIF9fX3JlZjogdmlzaXRlZC5nZXQob2JqKT8uaWQgPz8gYGAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICByLnZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iai5tYXAoeCA9PiBkZWVwQ2xvbmUoeCwgdmlzaXRlZCwgZGVwdGggKyAxKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW3Zpc2l0ZWQuZ2V0KG9iaik/LmlkID8/IGBgXTogYGAsXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLm1hcCgoW2ssIHZdKSA9PiBbaywgZGVlcENsb25lKHYsIHZpc2l0ZWQsIGRlcHRoICsgMSldKSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZ2lzdHJ5OiBSZWdpc3RyeSA9IG5ldyBNYXAoKTtcbiAgICBkZWVwUmVnaXN0ZXIob2JqUmF3LCByZWdpc3RyeSwgMCk7XG4gICAgY29uc3Qgb2JqID0gZGVlcENsb25lKG9ialJhdywgcmVnaXN0cnksIDApO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IFtdIGFzIHVua25vd25bXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCBzaG91bGRGb3JtYXQgPyAyIDogMCk7XG59O1xuIiwgImltcG9ydCB7IGpzb25TdHJpbmdpZnlfc2FmZSB9IGZyb20gJy4uL3V0aWxzL2pzb24nO1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTIxNzE0ODAvNTY3NTI0XG5jb25zdCBjeXJiNTMgPSAoc3RyOiBzdHJpbmcsIHNlZWQgPSAwKSA9PiB7XG4gICAgbGV0IGgxID0gMHhkZWFkYmVlZiBeIHNlZWQsXG4gICAgICAgIGgyID0gMHg0MWM2Y2U1NyBeIHNlZWQ7XG4gICAgZm9yIChsZXQgaSA9IDAsIGNoOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGgxID0gTWF0aC5pbXVsKGgxIF4gY2gsIDI2NTQ0MzU3NjEpO1xuICAgICAgICBoMiA9IE1hdGguaW11bChoMiBeIGNoLCAxNTk3MzM0Njc3KTtcbiAgICB9XG4gICAgaDEgPSBNYXRoLmltdWwoaDEgXiAoaDEgPj4+IDE2KSwgMjI0NjgyMjUwNyk7XG4gICAgaDEgXj0gTWF0aC5pbXVsKGgyIF4gKGgyID4+PiAxMyksIDMyNjY0ODk5MDkpO1xuICAgIGgyID0gTWF0aC5pbXVsKGgyIF4gKGgyID4+PiAxNiksIDIyNDY4MjI1MDcpO1xuICAgIGgyIF49IE1hdGguaW11bChoMSBeIChoMSA+Pj4gMTMpLCAzMjY2NDg5OTA5KTtcblxuICAgIHJldHVybiA0Mjk0OTY3Mjk2ICogKDIwOTcxNTEgJiBoMikgKyAoaDEgPj4+IDApO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhc2hDb2RlID0gKHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGpzb25TdHJpbmdpZnlfc2FmZSh2YWx1ZSk7XG4gICAgcmV0dXJuIGN5cmI1Myhqc29uKTtcbn07XG4iLCAiaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0QnVpbHRpbk9wZXJhdG9yLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIFBpcGVzY3JpcHRUeXBlLFxuICAgIFBpcGVzY3JpcHRWYXJpYWJsZSxcbiAgICBQaXBlc2NyaXB0V29ya2Zsb3csXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93SW5wdXQsXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93T3V0cHV0LFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGluZGVudCA9ICh0ZXh0OiBzdHJpbmcsIGRlcHRoOiBudW1iZXIgPSAxKSA9PiB7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHJldHVybiBgYDtcbiAgICB9XG4gICAgcmV0dXJuIHRleHRcbiAgICAgICAgLnNwbGl0KGBcXG5gKVxuICAgICAgICAubWFwKHggPT4gYCR7Wy4uLm5ldyBBcnJheShkZXB0aCldLm1hcCh4ID0+IGAgICAgYCl9JHt4fVxcbmApXG4gICAgICAgIC5qb2luKGBgKTtcbn07XG5cbmNvbnN0IG9wZXJhdG9yRXhwcmVzc2lvbnMgPSBbXG4gICAgLy8gYXNzaWdubWVudFxuICAgIC4uLihbYGRlY2xhcmF0aW9uYCwgYD1gXSBhcyBjb25zdCkubWFwKG9wZXJhdG9yID0+ICh7XG4gICAgICAgIG9wZXJhdG9yLFxuICAgICAgICB0ZW1wbGF0ZTogKGFyZ05hbWVzOiBzdHJpbmdbXSkgPT4gYCR7YXJnTmFtZXNbMF19YCxcbiAgICB9KSksXG4gICAgLy8gcHJlZml4IHVuYXJ5XG4gICAgLi4uKFtgIWBdIGFzIGNvbnN0KS5tYXAob3BlcmF0b3IgPT4gKHtcbiAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgIHRlbXBsYXRlOiAoYXJnTmFtZXM6IHN0cmluZ1tdKSA9PiBgJHtvcGVyYXRvcn0ke2FyZ05hbWVzWzBdfWAsXG4gICAgfSkpLFxuICAgIC8vIHBvc3RmaXggdW5hcnlcbiAgICAuLi4oW2ArK2AsIGAtLWBdIGFzIGNvbnN0KS5tYXAob3BlcmF0b3IgPT4gKHtcbiAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgIHRlbXBsYXRlOiAoYXJnTmFtZXM6IHN0cmluZ1tdKSA9PiBgJHthcmdOYW1lc1swXX0ke29wZXJhdG9yfWAsXG4gICAgfSkpLFxuICAgIC8vIGJpbmFyeVxuICAgIC4uLihbYCtgLCBgLWAsIGAqYCwgYC9gLCBgJWAsIGAmJmAsIGB8fGAsIGA9PWAsIGAhPWAsIGA8YCwgYD5gLCBgPD1gLCBgPj1gXSBhcyBjb25zdCkubWFwKFxuICAgICAgICBvcGVyYXRvciA9PiAoe1xuICAgICAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogKGFyZ05hbWVzOiBzdHJpbmdbXSkgPT4gYCR7YXJnTmFtZXNbMF19ICR7b3BlcmF0b3J9ICR7YXJnTmFtZXNbMV19YCxcbiAgICAgICAgfSksXG4gICAgKSxcbiAgICAvLyBjdXN0b21cbiAgICAuLi4oW2Bjb25kaXRpb25hbC10ZXJuYXJ5YF0gYXMgY29uc3QpLm1hcChvcGVyYXRvciA9PiAoe1xuICAgICAgICBvcGVyYXRvcixcbiAgICAgICAgdGVtcGxhdGU6IChhcmdOYW1lczogc3RyaW5nW10pID0+IGAke2FyZ05hbWVzWzBdfSA/ICR7YXJnTmFtZXNbMV19IDogJHthcmdOYW1lc1syXX1gLFxuICAgIH0pKSxcbl0gc2F0aXNmaWVzIHtcbiAgICBvcGVyYXRvcjogUGlwZXNjcmlwdEJ1aWx0aW5PcGVyYXRvcjtcbiAgICB0ZW1wbGF0ZTogKGFyZ05hbWVzOiBzdHJpbmdbXSkgPT4gc3RyaW5nO1xufVtdO1xuXG50eXBlIEJ1aWxkZXIgPSB7XG4gICAgZGVjbGFyZWRXb3JrZmxvd3M6IHtcbiAgICAgICAgd29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdztcbiAgICAgICAgZ2V0Q2FsbEV4cHJlc3Npb246IChhcmdzOiBzdHJpbmdbXSkgPT4gc3RyaW5nO1xuICAgIH1bXTtcbn07XG5cbi8qKiBDb252ZXJ0IHdvcmtmbG93IHRvIHR5cGVzY3JpcHQgZmlsZSB3aXRoIGV4cG9ydHNcbiAqXG4gKiAtIG5lc3RlZCB3b3JrZmxvd3MgYXJlIGZ1bmN0aW9uc1xuICogLSBvdXRwdXRzIGFyZSBleHBvcnRzXG4gKiAtIHJvb3ROb2RlcyBhcmUgZmxhdCBjb2RlXG4gKlxuICovXG5leHBvcnQgY29uc3QgY29udmVydFdvcmtmbG93VG9UeXBlc2NyaXB0RmlsZSA9IChcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93LFxuICAgIGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIGJ1aWxkZXI6IEJ1aWxkZXIgPSB7XG4gICAgICAgIGRlY2xhcmVkV29ya2Zsb3dzOiBbXSxcbiAgICB9LFxuKSA9PiB7XG4gICAgY29uc3QgbmVzdGVkRnVuY3Rpb25EZWNsYXJhdGlvbnMgPVxuICAgICAgICB3b3JrZmxvdy53b3JrZmxvd3NcbiAgICAgICAgICAgID8ubWFwKHcgPT4gY29udmVydFdvcmtmbG93VG9GdW5jdGlvbkRlY2xhcmF0aW9uKHcsIGRhdGFzZXQsIGJ1aWxkZXIpKVxuICAgICAgICAgICAgLmZpbHRlcih4ID0+IHgpXG4gICAgICAgICAgICAubWFwKHggPT4geCEpID8/IFtdO1xuXG4gICAgY29uc3QgY29udGVudCA9IGAke25lc3RlZEZ1bmN0aW9uRGVjbGFyYXRpb25zLm1hcCh4ID0+IHguY29udGVudCkuam9pbihgXFxuXFxuYCl9YDtcblxuICAgIC8vIGNvbnN0IHsgY29udGVudCB9ID0gY29udmVydE5vZGVzVG9GaWxlKHJvb3ROb2RlSW5zdGFuY2VzLCB3b3JrZmxvdywgYnVpbGRlcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250ZW50LFxuICAgIH07XG59O1xuXG5jb25zdCBTSU1QTElGWV9TSU5HTEVfUkVUVVJOID0gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZV9nZXRDYWxsRXhwcmVzc2lvbiA9ICh3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93KSA9PiB7XG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gZ2V0RnVuY3Rpb25OYW1lKHdvcmtmbG93KTtcblxuICAgIGlmICh3b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmApIHtcbiAgICAgICAgY29uc3QgeyBvcGVyYXRvciB9ID0gd29ya2Zsb3cuYm9keTtcbiAgICAgICAgY29uc3QgZnVuID0gb3BlcmF0b3JFeHByZXNzaW9ucy5maW5kKGYgPT4gZi5vcGVyYXRvciA9PT0gb3BlcmF0b3IpO1xuICAgICAgICBpZiAoIWZ1bikge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IGAvKiBtaXNzaW5nIG9wZXJhdG9yICR7b3BlcmF0b3J9Ki9gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW4udGVtcGxhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIChhcmdzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7ZnVuY3Rpb25OYW1lfSgke2FyZ3Muam9pbihgLCBgKX0pYDtcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRXb3JrZmxvd1RvRnVuY3Rpb25EZWNsYXJhdGlvbiA9IChcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93LFxuICAgIGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIGJ1aWxkZXI6IEJ1aWxkZXIgPSB7XG4gICAgICAgIGRlY2xhcmVkV29ya2Zsb3dzOiBbXSxcbiAgICB9LFxuKTogdW5kZWZpbmVkIHwgeyBjb250ZW50OiBzdHJpbmcgfSA9PiB7XG4gICAgaWYgKGJ1aWxkZXIuZGVjbGFyZWRXb3JrZmxvd3MuZmluZCh4ID0+IHgud29ya2Zsb3cgPT09IHdvcmtmbG93KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVjbGFyYXRpb246IEJ1aWxkZXJbYGRlY2xhcmVkV29ya2Zsb3dzYF1bbnVtYmVyXSA9IHtcbiAgICAgICAgd29ya2Zsb3csXG4gICAgICAgIGdldENhbGxFeHByZXNzaW9uOiBjcmVhdGVfZ2V0Q2FsbEV4cHJlc3Npb24od29ya2Zsb3cpLFxuICAgIH07XG4gICAgYnVpbGRlci5kZWNsYXJlZFdvcmtmbG93cy5wdXNoKGRlY2xhcmF0aW9uKTtcblxuICAgIGlmICh3b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5lc3RlZEZ1bmN0aW9uRGVjbGFyYXRpb25zID1cbiAgICAgICAgd29ya2Zsb3cud29ya2Zsb3dzXG4gICAgICAgICAgICA/Lm1hcCh3ID0+IGNvbnZlcnRXb3JrZmxvd1RvRnVuY3Rpb25EZWNsYXJhdGlvbih3LCBkYXRhc2V0LCBidWlsZGVyKSlcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgICAgICAgLm1hcCh4ID0+IHghKSA/PyBbXTtcblxuICAgIGNvbnN0IHN0YXRlbWVudHMgPSB3b3JrZmxvdy5ib2R5Lm5vZGVzLm1hcChub2RlID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZUluc3RhbmNlID0gZGF0YXNldC5hbGxOb2RlSW5zdGFuY2VzLmZpbmQoeCA9PiB4Lm5vZGUgPT09IG5vZGUpO1xuICAgICAgICBjb25zdCB3b3JrZmxvdyA9IG5vZGVJbnN0YW5jZT8ud29ya2Zsb3c7XG4gICAgICAgIGlmICghd29ya2Zsb3cpIHtcbiAgICAgICAgICAgIHJldHVybiBgLyogbWlzc2luZyB3b3JrZmxvdyAke25vZGUud29ya2Zsb3dVcml9ICovYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmdW4gPSBidWlsZGVyLmRlY2xhcmVkV29ya2Zsb3dzLmZpbmQoeCA9PiB4LndvcmtmbG93ID09PSB3b3JrZmxvdyk7XG4gICAgICAgIGlmICghZnVuKSB7XG4gICAgICAgICAgICByZXR1cm4gYC8qIG1pc3Npbmcgd29ya2Zsb3cgZnVuY3Rpb24gJHtub2RlLndvcmtmbG93VXJpfSAqL2A7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXJncyA9IG5vZGVJbnN0YW5jZS5pbnB1dHMubWFwKHggPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0geC5pbmZsb3dQaXBlPy5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgdW5kZWZpbmVkIC8qIGRpc2Nvbm5lY3RlZCAqL2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc291cmNlLmtpbmQgPT09IGBkYXRhYCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UuanNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzb3VyY2Uua2luZCA9PT0gYGlucHV0YCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UuaW5wdXQucnVucz8ubmFtZUluU2NvcGUgPz8gc291cmNlLmlucHV0Lm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc291cmNlLmtpbmQgPT09IGBvdXRwdXRgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5vdXRwdXQucnVucz8ubmFtZUluU2NvcGUgPz8gc291cmNlLm91dHB1dC5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvdXJjZS5raW5kID09PSBgb3BlcmF0b3Itb3V0cHV0YCkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZVxuICAgICAgICAgICAgICAgIHJldHVybiBgdW5kZWZpbmVkIC8qIGFuIG9wZXJhdG9yIGNhbm5vdCBhbiBhcmd1bWVudCBvZiB0aGUgc2FtZSBub2RlICovYDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGB1bmRlZmluZWQgLyogdW5rbm93biBzb3VyY2Uua2luZCAkeyhzb3VyY2UgYXMgeyBraW5kOiBzdHJpbmcgfSkua2luZH0gKi9gO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZnVuQ2FsbCA9IGZ1bi5nZXRDYWxsRXhwcmVzc2lvbihhcmdzKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0c0l0ZW1zID0gbm9kZUluc3RhbmNlLm91dHB1dHMubWFwKHggPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHgucnVucz8ubmFtZUluU2NvcGUgPz8geC5uYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb3V0cHV0c0V4cHJlc3Npb24gPVxuICAgICAgICAgICAgU0lNUExJRllfU0lOR0xFX1JFVFVSTiAmJiBvdXRwdXRzSXRlbXMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAgICAgPyBgJHtvdXRwdXRzSXRlbXNbMF19YFxuICAgICAgICAgICAgICAgIDogb3V0cHV0c0l0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gYHsgJHtvdXRwdXRzSXRlbXMuam9pbihgLCBgKX0gfWBcbiAgICAgICAgICAgICAgICA6IGAvKiBtaXNzaW5nIG91dHB1dCBpdGVtICovIF91bmtub3duYDtcbiAgICAgICAgcmV0dXJuIGBjb25zdCAke291dHB1dHNFeHByZXNzaW9ufSA9ICR7ZnVuQ2FsbH07YDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdvcmtmbG93Tm9kZUluc3RhbmNlID0gZGF0YXNldC5hbGxOb2RlSW5zdGFuY2VzLmZpbmQoXG4gICAgICAgIHggPT4geC5ub2RlLndvcmtmbG93VXJpID09PSB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICApO1xuICAgIGNvbnN0IGdldE5hbWVfd29ya2Zsb3dJbnB1dCA9ICh3b3JrZmxvd0lucHV0OiBQaXBlc2NyaXB0V29ya2Zsb3dJbnB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gd29ya2Zsb3dOb2RlSW5zdGFuY2U/LmlucHV0cy5maW5kKHggPT4geC53b3JrZmxvd0lucHV0ID09PSB3b3JrZmxvd0lucHV0KT8ucnVuc1xuICAgICAgICAgICAgPy5uYW1lSW5TY29wZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldE5hbWVfd29ya2Zsb3dPdXRwdXQgPSAod29ya2Zsb3dPdXRwdXQ6IFBpcGVzY3JpcHRXb3JrZmxvd091dHB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gd29ya2Zsb3dOb2RlSW5zdGFuY2U/Lm91dHB1dHMuZmluZCh4ID0+IHgud29ya2Zsb3dPdXRwdXQgPT09IHdvcmtmbG93T3V0cHV0KT8ucnVuc1xuICAgICAgICAgICAgPy5uYW1lSW5TY29wZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50ID0gKCgpID0+IHtcbiAgICAgICAgaWYgKCF3b3JrZmxvdy5vdXRwdXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldHVybkl0ZW1zID0gd29ya2Zsb3cub3V0cHV0cy5tYXAoeCA9PiAoe1xuICAgICAgICAgICAgbmFtZTogYCR7Z2V0TmFtZV93b3JrZmxvd091dHB1dCh4KSA/PyB4Lm5hbWV9YCxcbiAgICAgICAgICAgIHJlbmFtZTogYCR7Z2V0TmFtZV93b3JrZmxvd091dHB1dCh4KSA/PyB4Lm5hbWV9YCxcbiAgICAgICAgICAgIC8vIHJlbmFtZTogYCR7eC5uYW1lfWAsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoU0lNUExJRllfU0lOR0xFX1JFVFVSTiAmJiB3b3JrZmxvdy5vdXRwdXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGByZXR1cm4gJHtyZXR1cm5JdGVtc1swXS5uYW1lfTtgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGByZXR1cm4geyAke3JldHVybkl0ZW1zXG4gICAgICAgICAgICAubWFwKHggPT4gKHgubmFtZSA9PT0geC5yZW5hbWUgPyBgJHt4Lm5hbWV9YCA6IGAke3gucmVuYW1lfTogJHt4Lm5hbWV9YCkpXG4gICAgICAgICAgICAuam9pbihgLCBgKX0gfTtgO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gd29ya2Zsb3cuaW5wdXRzLm1hcCh3b3JrZmxvd0lucHV0ID0+XG4gICAgICAgIGdlbmVyYXRlRGVjbGFyYXRpb24od29ya2Zsb3dJbnB1dCwgZ2V0TmFtZV93b3JrZmxvd0lucHV0KHdvcmtmbG93SW5wdXQpKSxcbiAgICApO1xuICAgIGNvbnN0IHBhcmFtZXRlcnNDb2RlID1cbiAgICAgICAgcGFyYW1ldGVycy5qb2luKGAsIGApLmxlbmd0aCA+IDQwXG4gICAgICAgICAgICA/IGBcXG4ke2luZGVudChgJHtwYXJhbWV0ZXJzLmpvaW4oYCxcXG5gKX0sYCl9XFxuYFxuICAgICAgICAgICAgOiBwYXJhbWV0ZXJzLmpvaW4oYCwgYCk7XG5cbiAgICBjb25zdCBmdW5jdGlvbk5hbWUgPSBnZXRGdW5jdGlvbk5hbWUod29ya2Zsb3cpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgZnVuY3Rpb24gJHtmdW5jdGlvbk5hbWV9KCR7cGFyYW1ldGVyc0NvZGV9KSB7XG4ke2luZGVudChuZXN0ZWRGdW5jdGlvbkRlY2xhcmF0aW9ucy5tYXAoeCA9PiB4LmNvbnRlbnQpLmpvaW4oYFxcblxcbmApKX0ke2luZGVudChcbiAgICAgICAgWy4uLnN0YXRlbWVudHMsIHJldHVyblN0YXRlbWVudF0uZmlsdGVyKHggPT4geCkuam9pbihgXFxuYCksXG4gICAgKX19YDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRlbnQsXG4gICAgfTtcbn07XG5cbmNvbnN0IGdldEZ1bmN0aW9uTmFtZSA9ICh3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93KSA9PiB7XG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gd29ya2Zsb3cud29ya2Zsb3dVcmkucmVwbGFjZSgvW15BLVphLXowLTldKy9nLCBgX2ApO1xuICAgIHJldHVybiBmdW5jdGlvbk5hbWU7XG59O1xuXG5jb25zdCBnZW5lcmF0ZURlY2xhcmF0aW9uID0gKHg6IFBpcGVzY3JpcHRWYXJpYWJsZSwgbmFtZUluU2NvcGU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBgJHtuYW1lSW5TY29wZSA/PyB4Lm5hbWV9JHt4LnR5cGUubnVsbGFibGUgPyBgP2AgOiBgYH06ICR7Z2VuZXJhdGVUeXBlKHgudHlwZSl9JHtcbiAgICAgICAgeC50eXBlLmFycmF5ID8gYFtdYCA6IGBgXG4gICAgfWA7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVR5cGUgPSAodHlwZTogUGlwZXNjcmlwdFR5cGUpOiBzdHJpbmcgPT4ge1xuICAgIGlmICh0eXBlLmtpbmQgPT09IGBsaXRlcmFsYCkge1xuICAgICAgICBpZiAodHlwZS50eXBlID09PSBgc3RyaW5nYCkge1xuICAgICAgICAgICAgcmV0dXJuIGBcXGAke3R5cGUudmFsdWV9XFxgYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dHlwZS52YWx1ZX1gO1xuICAgIH1cblxuICAgIGlmICh0eXBlLmtpbmQgPT09IGBzaW1wbGVgKSB7XG4gICAgICAgIGlmICh0eXBlLnR5cGUgPT09IGBpbnRgIHx8IHR5cGUudHlwZSA9PT0gYGZsb2F0YCkge1xuICAgICAgICAgICAgcmV0dXJuIGBudW1iZXJgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt0eXBlLnR5cGV9YDtcbiAgICB9XG5cbiAgICBpZiAodHlwZS5raW5kID09PSBgb2JqZWN0YCkge1xuICAgICAgICByZXR1cm4gYHske3R5cGUuZmllbGRzLm1hcCh4ID0+IGdlbmVyYXRlRGVjbGFyYXRpb24oeCkpLmpvaW4oYCxcXG5gKX19YDtcbiAgICB9XG5cbiAgICBpZiAodHlwZS5raW5kID09PSBgdHlwZWApIHtcbiAgICAgICAgcmV0dXJuIHR5cGUubmFtZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZS5raW5kID09PSBgbm9kZWApIHtcbiAgICAgICAgcmV0dXJuIGAvKiBUT0RPOiBmdW5jdGlvbiBjYWxsYmFja3MgKi8gZnVuXyR7dHlwZS5ub2RlLm5vZGVJZH1gO1xuICAgIH1cblxuICAgIHJldHVybiBgdW5rbm93bmA7XG59O1xuIiwgImltcG9ydCB7IGhhc2hDb2RlIH0gZnJvbSAnLi9oYXNoJztcbmltcG9ydCB7XG4gICAgY29udmVydFdvcmtmbG93VG9GdW5jdGlvbkRlY2xhcmF0aW9uLFxuICAgIGNyZWF0ZV9nZXRDYWxsRXhwcmVzc2lvbixcbn0gZnJvbSAnLi4vY29kZS1nZW5lcmF0aW9uL2ZpbGUnO1xuaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0QnVpbHRpbk9wZXJhdG9yLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQsXG4gICAgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5wdXRJbnN0YW5jZSxcbiAgICBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2UsXG59IGZyb20gJy4uL3R5cGVzJztcblxuLy8gVE9ETzogaGFuZGxlIGN5Y2xlc1xuXG50eXBlIFJ1bkNvbnRleHQgPSB7XG4gICAgdmlzaXRlZDogU2V0PE9taXQ8UGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLCBgb3V0Zmxvd1BpcGVzYD4+O1xuICAgIGxhenk6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUnVuID0gKFxuICAgIGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIGNvbnRleHQ6IFJ1bkNvbnRleHQgPSB7IHZpc2l0ZWQ6IG5ldyBTZXQoKSwgbGF6eTogZmFsc2UgfSxcbikgPT4ge1xuICAgIGRhdGFzZXQucm9vdE5vZGVJbnN0YW5jZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgY2FsY3VsYXRlUnVuVmFsdWVfbm9kZU91dHB1dChub2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNhbGN1bGF0ZVJ1bl9uYW1lcyhkYXRhc2V0KTtcbiAgICByZWNvcmRSdW4oZGF0YXNldCk7XG59O1xuY29uc3QgcmVjb3JkUnVuID0gKGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0KSA9PiB7XG4gICAgZGF0YXNldC5hbGxOb2RlSW5zdGFuY2VzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1blZhbHVlID0ge1xuICAgICAgICAgICAgaW5wdXRzOiBub2RlLmlucHV0cy5tYXAoeCA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHgucnVucz8ubmFtZUluU2NvcGUgPz8geC5uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB4LnJ1bnM/LnZhbHVlLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgaW5uZXI6IG5vZGUuY2hpbGRyZW4uZmxhdE1hcChjID0+XG4gICAgICAgICAgICAgICAgYy5vdXRwdXRzLm1hcCh4ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHgucnVucz8ubmFtZUluU2NvcGUgPz8geC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeC5ydW5zPy52YWx1ZSxcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgb3V0cHV0czogbm9kZS5vdXRwdXRzLm1hcCh4ID0+ICh7XG4gICAgICAgICAgICAgICAgbmFtZTogeC5ydW5zPy5uYW1lSW5TY29wZSA/PyB4Lm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHgucnVucz8udmFsdWUsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGtleSA9IGAke2hhc2hDb2RlKHJ1blZhbHVlKX1gO1xuICAgICAgICBub2RlLnJ1bnMgPSBub2RlLnJ1bnMgPz8gW107XG4gICAgICAgIGlmIChub2RlLnJ1bnMuc29tZSh4ID0+IHgua2V5ID09PSBrZXkpKSB7XG4gICAgICAgICAgICAvLyBkZWxldGUgb2xkIHRvIG1vdmUgbGFzdCB0byB0aGUgdG9wXG4gICAgICAgICAgICBub2RlLnJ1bnMuc3BsaWNlKFxuICAgICAgICAgICAgICAgIG5vZGUucnVucy5maW5kSW5kZXgoeCA9PiB4LmtleSA9PT0ga2V5KSxcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGRvbid0IGFkZCBuZXdcbiAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvZGUgPVxuICAgICAgICAgICAgbm9kZS53b3JrZmxvdy5ib2R5LmtpbmQgPT09IGBvcGVyYXRvcmBcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBgJHtjcmVhdGVfZ2V0Q2FsbEV4cHJlc3Npb24obm9kZS53b3JrZmxvdykoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUud29ya2Zsb3cuaW5wdXRzLm1hcCh3b3JrZmxvd0lucHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVJbnB1dCA9IG5vZGUuaW5wdXRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4LndvcmtmbG93SW5wdXQgPT09IHdvcmtmbG93SW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVJhdyA9IG5vZGVJbnB1dD8ucnVucz8udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlUmF3ICE9PSBgb2JqZWN0YCA/IGAke3ZhbHVlUmF3fWAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBub2RlSW5wdXQ/LnJ1bnM/Lm5hbWVJblNjb3BlID8/IHdvcmtmbG93SW5wdXQubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IGAke25hbWV9KCR7dmFsdWV9KWAgOiBuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICApfWAsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBjb252ZXJ0V29ya2Zsb3dUb0Z1bmN0aW9uRGVjbGFyYXRpb24obm9kZS53b3JrZmxvdywgbm9kZS5kYXRhc2V0KTtcbiAgICAgICAgbm9kZS5ydW5zLnVuc2hpZnQoe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgY29kZTogY29kZT8uY29udGVudCxcbiAgICAgICAgICAgIC4uLnJ1blZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVSdW5WYWx1ZV9ub2RlT3V0cHV0ID0gKG5vZGU6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsIGNvbnRleHQ6IFJ1bkNvbnRleHQpID0+IHtcbiAgICAvLyBhbGwgb3V0cHV0cyBtdXN0IGJlIGV2YWx1YXRlZCAoYnV0IG1heSByZXR1cm4gdW5kZWZpbmVkKVxuICAgIG5vZGUub3V0cHV0cy5mb3JFYWNoKG91dHB1dCA9PiB7XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KG91dHB1dCwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWNvbnRleHQubGF6eSkge1xuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9ub2RlT3V0cHV0KHgsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5pbnB1dHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KHgsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlID0gKFxuICAgIGNvbm5lY3Rpb246IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSxcbiAgICB2YWx1ZTogdW5rbm93bixcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0ID0geyB2aXNpdGVkOiBuZXcgU2V0KCksIGxhenk6IGZhbHNlIH0sXG4pID0+IHtcbiAgICBpZiAoIWNvbm5lY3Rpb24ucnVucykge1xuICAgICAgICBjb25uZWN0aW9uLnJ1bnMgPSBjcmVhdGVSdW4oY29ubmVjdGlvbiwgY29udGV4dCk7XG4gICAgfVxuICAgIGNvbnN0IHsgcnVucyB9ID0gY29ubmVjdGlvbjtcbiAgICBydW5zLm92ZXJyaWRlID0gdmFsdWU7XG5cbiAgICBjb25zb2xlLmxvZyhgY2FsY3VsYXRlUnVuVmFsdWVfY29ubmVjdGlvbk92ZXJyaWRlYCwgeyBjb25uZWN0aW9uIH0pO1xuXG4gICAgY29uc3QgYWxsQ29ubmVjdGlvbnMgPSBjb25uZWN0aW9uLm5vZGVJbnN0YW5jZS5kYXRhc2V0LmFsbE5vZGVJbnN0YW5jZXMuZmxhdE1hcCh4ID0+IFtcbiAgICAgICAgLi4ueC5pbnB1dHMsXG4gICAgICAgIC4uLngub3V0cHV0cyxcbiAgICBdKTtcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0PFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZT4oKTtcbiAgICBjb25zdCB1cGRhdGVEZXBlbmRlbnRzID0gKGM6IFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSkgPT4ge1xuICAgICAgICBjYWxjdWxhdGVSdW5WYWx1ZV9pbnB1dChjLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBkZXBlbmRlbnRzID0gYWxsQ29ubmVjdGlvbnMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiAhdmlzaXRlZC5oYXMoeCkgJiYgeC5ydW5zPy5kZXBlbmRlbmNpZXMuaW5jbHVkZXMoYyksXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB1cGRhdGVEZXBlbmRlbnRzYCwgeyBjLCBkZXBlbmRlbnRzIH0pO1xuICAgICAgICBkZXBlbmRlbnRzLmZvckVhY2goZCA9PiB2aXNpdGVkLmFkZChkKSk7XG4gICAgICAgIGRlcGVuZGVudHMuZm9yRWFjaChkID0+IHVwZGF0ZURlcGVuZGVudHMoZCkpO1xuICAgIH07XG5cbiAgICB1cGRhdGVEZXBlbmRlbnRzKGNvbm5lY3Rpb24pO1xuICAgIGNhbGN1bGF0ZVJ1bl9uYW1lcyhjb25uZWN0aW9uLm5vZGVJbnN0YW5jZS5kYXRhc2V0KTtcbiAgICByZWNvcmRSdW4oY29ubmVjdGlvbi5ub2RlSW5zdGFuY2UuZGF0YXNldCk7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVSdW5fbmFtZXMgPSAoZGF0YXNldDogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZURhdGFzZXQpID0+IHtcbiAgICBjb25zdCBjb250ZXh0cyA9IG5ldyBNYXA8UGlwZXNjcmlwdE5vZGVJbnN0YW5jZSwgUnVuQ29udGV4dD4oKTtcblxuICAgIGNvbnN0IGdsb2JhbCA9IHsgb3V0cHV0czogW10gfSBhcyB1bmtub3duIGFzIFBpcGVzY3JpcHROb2RlSW5zdGFuY2U7XG5cbiAgICBjb25zdCBhbGxOb2Rlc1NvcnRlZCA9IFtdIGFzIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VbXTtcblxuICAgIGNvbnN0IGFkZE5vZGVSZWN1cnNpdmUgPSAocGFyZW50OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlKSA9PiB7XG4gICAgICAgIGlmIChhbGxOb2Rlc1NvcnRlZC5pbmNsdWRlcyhwYXJlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhbGxOb2Rlc1NvcnRlZC5wdXNoKHBhcmVudCk7XG4gICAgICAgIFsuLi5wYXJlbnQuY2hpbGRyZW5dLnJldmVyc2UoKS5mb3JFYWNoKHggPT4gYWRkTm9kZVJlY3Vyc2l2ZSh4KSk7XG4gICAgICAgIHBhcmVudC5pbnB1dHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGlmICh4LmluZmxvd1BpcGU/LnNvdXJjZS5raW5kID09PSBgaW5wdXRgKSB7XG4gICAgICAgICAgICAgICAgYWRkTm9kZVJlY3Vyc2l2ZSh4LmluZmxvd1BpcGUuc291cmNlLmlucHV0Lm5vZGVJbnN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZGF0YXNldC5yb290Tm9kZUluc3RhbmNlcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBhZGROb2RlUmVjdXJzaXZlKHgpO1xuICAgIH0pO1xuICAgIGRhdGFzZXQuYWxsTm9kZUluc3RhbmNlcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBhZGROb2RlUmVjdXJzaXZlKHgpO1xuICAgIH0pO1xuXG4gICAgYWxsTm9kZXNTb3J0ZWQuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0geC5wYXJlbnQgPz8gZ2xvYmFsO1xuICAgICAgICBjb25zdCBjb250ZXh0ID1cbiAgICAgICAgICAgIGNvbnRleHRzLmdldChwYXJlbnQpXG4gICAgICAgICAgICA/PyBjb250ZXh0c1xuICAgICAgICAgICAgICAgIC5zZXQocGFyZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2l0ZWQ6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgICAgICAgICAgbGF6eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZ2V0KHBhcmVudCkhO1xuICAgICAgICB4Lm91dHB1dHMuZm9yRWFjaChvID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQudmlzaXRlZC5hZGQobyk7XG5cbiAgICAgICAgICAgIGlmICghby5ydW5zKSB7XG4gICAgICAgICAgICAgICAgby5ydW5zID0gY3JlYXRlUnVuKG8sIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby5ydW5zLm5hbWVJblNjb3BlID0gZ2V0VW5pcXVlTmFtZShvLCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBnZXRVbmlxdWVOYW1lID0gKFxuICAgIGNvbm5lY3Rpb246IE9taXQ8UGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlLCBgb3V0Zmxvd1BpcGVzYD4sXG4gICAgY29udGV4dDogUnVuQ29udGV4dCxcbikgPT4ge1xuICAgIGxldCBuID0gY29ubmVjdGlvbi5uYW1lO1xuXG4gICAgd2hpbGUgKFsuLi5jb250ZXh0LnZpc2l0ZWRdLnNvbWUoeCA9PiB4ICE9PSBjb25uZWN0aW9uICYmIHgubmFtZSA9PT0gbikpIHtcbiAgICAgICAgbiA9IGAke259XyR7Y29ubmVjdGlvbi5ub2RlSW5zdGFuY2Uua2V5fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG47XG59O1xuXG5jb25zdCBjcmVhdGVSdW4gPSAoXG4gICAgY29ubmVjdGlvbjogT21pdDxQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2UsIGBvdXRmbG93UGlwZXNgPixcbiAgICBjb250ZXh0OiBSdW5Db250ZXh0LFxuKTogUmVxdWlyZWQ8UGlwZXNjcmlwdE5vZGVQaXBlQ29ubmVjdGlvbkluc3RhbmNlPltgcnVuc2BdID0+IHtcbiAgICAvLyBjb25zdCBuYW1lSW5TY29wZSA9IGdldFVuaXF1ZU5hbWUoY29ubmVjdGlvbiwgY29udGV4dCk7XG4gICAgY29uc3QgbmFtZUluU2NvcGUgPSBjb25uZWN0aW9uLm5hbWU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZUluU2NvcGUsXG4gICAgICAgIG92ZXJyaWRlOiB1bmRlZmluZWQsXG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgfTtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0ID0gKFxuICAgIGlucHV0OiBPbWl0PFBpcGVzY3JpcHROb2RlUGlwZUNvbm5lY3Rpb25JbnN0YW5jZSwgYG91dGZsb3dQaXBlc2A+LFxuICAgIGNvbnRleHQ6IFJ1bkNvbnRleHQsXG4pID0+IHtcbiAgICBpZiAoY29udGV4dC52aXNpdGVkLmhhcyhpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJ1bnM7XG4gICAgfVxuICAgIGNvbnRleHQudmlzaXRlZC5hZGQoaW5wdXQpO1xuICAgIGlmIChpbnB1dC5ydW5zPy5vdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlucHV0LnJ1bnMudmFsdWUgPSBpbnB1dC5ydW5zLm92ZXJyaWRlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5wdXQucnVucyA9IGNyZWF0ZVJ1bihpbnB1dCwgY29udGV4dCk7XG5cbiAgICBjb25zdCBpbmZsb3dQaXBlID0gaW5wdXQuaW5mbG93UGlwZTtcbiAgICBpZiAoIWluZmxvd1BpcGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHNvdXJjZSB9ID0gaW5mbG93UGlwZTtcbiAgICBpZiAoc291cmNlLmtpbmQgPT09IGBkYXRhYCkge1xuICAgICAgICBpbnB1dC5ydW5zID0ge1xuICAgICAgICAgICAgLi4uaW5wdXQucnVucyxcbiAgICAgICAgICAgIHZhbHVlOiBKU09OLnBhcnNlKHNvdXJjZS5qc29uKSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgaW5wdXRgKSB7XG4gICAgICAgIGlucHV0LnJ1bnMgPSB7XG4gICAgICAgICAgICAuLi5pbnB1dC5ydW5zLFxuICAgICAgICAgICAgdmFsdWU6IHNvdXJjZS5pbnB1dC5ydW5zPy52YWx1ZSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llczogW3NvdXJjZS5pbnB1dF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgb3V0cHV0YCkge1xuICAgICAgICBpbnB1dC5ydW5zID0ge1xuICAgICAgICAgICAgLi4uaW5wdXQucnVucyxcbiAgICAgICAgICAgIHZhbHVlOiBzb3VyY2Uub3V0cHV0LnJ1bnM/LnZhbHVlLFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbc291cmNlLm91dHB1dF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5raW5kID09PSBgb3BlcmF0b3Itb3V0cHV0YCkge1xuICAgICAgICBpbnB1dC5ydW5zID0ge1xuICAgICAgICAgICAgLi4uaW5wdXQucnVucyxcbiAgICAgICAgICAgIC4uLmNhbGN1bGF0ZVJ1blZhbHVlX29wZXJhdG9yKHNvdXJjZS5ub2RlSW5zdGFuY2UsIGNvbnRleHQpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgX25ldmVyOiBuZXZlciA9IHVuZGVmaW5lZCBhcyB0eXBlb2Ygc291cmNlIGFzIG5ldmVyO1xufTtcblxuY29uc3QgY2FsY3VsYXRlUnVuVmFsdWVfb3BlcmF0b3IgPSAoXG4gICAgbm9kZUluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlX09wZXJhdG9yLFxuICAgIGNvbnRleHQ6IFJ1bkNvbnRleHQsXG4pID0+IHtcbiAgICBjb25zdCBjYWxjdWxhdGVBcmdzX2luZGV4ID0gKFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICk6IHtcbiAgICAgICAgdmFsdWU6IG51bWJlcjtcbiAgICAgICAgZGVwZW5kZW5jaWVzOiBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5zdGFuY2VbXTtcbiAgICB9ID0+IHtcbiAgICAgICAgY29uc3QgeCA9IG5vZGVJbnN0YW5jZS5pbnB1dHNbaW5kZXhdO1xuICAgICAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQgYXMgdW5rbm93biBhcyBudW1iZXIsXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbeCBhcyBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5wdXRJbnN0YW5jZV0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhbGN1bGF0ZVJ1blZhbHVlX2lucHV0KHgsIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHgucnVucz8udmFsdWUgYXMgbnVtYmVyLFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbeCBhcyBQaXBlc2NyaXB0Tm9kZVBpcGVDb25uZWN0aW9uSW5wdXRJbnN0YW5jZV0sXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZXJhdG9yOiBQaXBlc2NyaXB0QnVpbHRpbk9wZXJhdG9yID0gbm9kZUluc3RhbmNlLm9wZXJhdG9yO1xuXG4gICAgLy8gbGF6eVxuICAgIGNvbnN0IGFSZXN1bHQgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDApO1xuICAgIGNvbnN0IGEgPSBhUmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IFsuLi5hUmVzdWx0LmRlcGVuZGVuY2llc107XG5cbiAgICBpZiAob3BlcmF0b3IgPT09IGAmJmApIHtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdj8udmFsdWUsXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbLi4uZGVwZW5kZW5jaWVzLCAuLi52LmRlcGVuZGVuY2llc10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhUmVzdWx0O1xuICAgIH1cbiAgICBpZiAob3BlcmF0b3IgPT09IGB8fGApIHtcbiAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gY2FsY3VsYXRlQXJnc19pbmRleCgxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHY/LnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llczogWy4uLmRlcGVuZGVuY2llcywgLi4udi5kZXBlbmRlbmNpZXNdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYVJlc3VsdDtcbiAgICB9XG4gICAgaWYgKG9wZXJhdG9yID09PSBgY29uZGl0aW9uYWwtdGVybmFyeWApIHtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdj8udmFsdWUsXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbLi4uZGVwZW5kZW5jaWVzLCAuLi52LmRlcGVuZGVuY2llc10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHYgPSBjYWxjdWxhdGVBcmdzX2luZGV4KDIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHY/LnZhbHVlLFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbLi4uZGVwZW5kZW5jaWVzLCAuLi52LmRlcGVuZGVuY2llc10sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gdW5hcnlcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgYD1gOlxuICAgICAgICAgICAgcmV0dXJuIGFSZXN1bHQ7XG4gICAgICAgIGNhc2UgYGRlY2xhcmF0aW9uYDpcbiAgICAgICAgICAgIHJldHVybiBhUmVzdWx0O1xuICAgICAgICBjYXNlIGAhYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6ICFhIH07XG4gICAgICAgIGNhc2UgYCsrYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgKyAxIH07XG4gICAgICAgIGNhc2UgYC0tYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgLSAxIH07XG4gICAgfVxuXG4gICAgLy8gYmluYXJ5XG4gICAgY29uc3QgYlJlc3VsdCA9IGNhbGN1bGF0ZUFyZ3NfaW5kZXgoMSk7XG4gICAgY29uc3QgYiA9IGJSZXN1bHQudmFsdWU7XG4gICAgZGVwZW5kZW5jaWVzLnB1c2goLi4uYlJlc3VsdC5kZXBlbmRlbmNpZXMpO1xuXG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIGArYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgKyBiIH07XG4gICAgICAgIGNhc2UgYC1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAtIGIgfTtcbiAgICAgICAgY2FzZSBgKmA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICogYiB9O1xuICAgICAgICBjYXNlIGAvYDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgLyBiIH07XG4gICAgICAgIGNhc2UgYCVgOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSAlIGIgfTtcbiAgICAgICAgY2FzZSBgPGA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhIDwgYiB9O1xuICAgICAgICBjYXNlIGA+YDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgPiBiIH07XG4gICAgICAgIGNhc2UgYDw9YDpcbiAgICAgICAgICAgIHJldHVybiB7IGRlcGVuZGVuY2llcywgdmFsdWU6IGEgPD0gYiB9O1xuICAgICAgICBjYXNlIGA+PWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhID49IGIgfTtcbiAgICAgICAgY2FzZSBgPT1gOlxuICAgICAgICAgICAgcmV0dXJuIHsgZGVwZW5kZW5jaWVzLCB2YWx1ZTogYSA9PT0gYiB9O1xuICAgICAgICBjYXNlIGAhPWA6XG4gICAgICAgICAgICByZXR1cm4geyBkZXBlbmRlbmNpZXMsIHZhbHVlOiBhICE9PSBiIH07XG4gICAgfVxuXG4gICAgY29uc3QgX25ldmVyOiBuZXZlciA9IHVuZGVmaW5lZCBhcyB0eXBlb2Ygb3BlcmF0b3IgYXMgbmV2ZXI7XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbiIsICJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgTW91c2VCdXR0b24sIE1vdmVhYmxlVmlldyB9IGZyb20gJy4vbW92ZWFibGUtdmlldyc7XG5pbXBvcnQge1xuICAgIFBpcGVFbmRwb2ludFZpZXcsXG4gICAgUGlwZVZpZXcsXG4gICAgY2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JOb2RlLFxuICAgIGNhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yUGlwZVNvdXJjZSxcbiAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93LFxufSBmcm9tICcuL3BpcGVzJztcbmltcG9ydCB7IFdvcmtmbG93SW5wdXROYW1lLCBnZXRUeXBlTmFtZSB9IGZyb20gJy4vd29yay1uYW1lcyc7XG5pbXBvcnQgeyBQaXBlc2NyaXB0Tm9kZSwgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgV29ya0Zsb3dWaWV3ID0gKHtcbiAgICB3b3JrZmxvdyxcbiAgICBmdWxsID0gZmFsc2UsXG4gICAgaGlkZVRpdGxlcyA9IGZhbHNlLFxufToge1xuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3c7XG4gICAgZnVsbD86IGJvb2xlYW47XG4gICAgaGlkZVRpdGxlcz86IGJvb2xlYW47XG59KSA9PiB7XG4gICAgLy8gJHtmdWxsID8gYG1pbi13LVsyMHZ3XSBtaW4taC1bMjB2aF1gIDogYG1pbi13LVsyMHB4XSBtaW4taC1bMTBweF1gfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LWNvbHVtbiByZWxhdGl2ZSBiZy1zbGF0ZS05NTAvNzUgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gbS1bLTFweF0gcm91bmRlZFxuICAgICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyFoaWRlVGl0bGVzICYmIChcbiAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e2Ake3dvcmtmbG93Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmlucHV0cy5tYXAoaW5wdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5wdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya2Zsb3dJbnB1dE5hbWUgaW5wdXQ9e2lucHV0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGFuaW1hdGUtYm91bmNlIHRleHQtWzhweF0gYWJzb2x1dGUgdG9wLTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdTI2Q0ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuYm9keS5ub2Rlcz8ubWFwKG4gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtuLm5vZGVJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3IG5vZGU9e259IGNvbnRhaW5lcj17d29ya2Zsb3d9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmJvZHkua2luZCA9PT0gYG9wZXJhdG9yYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMiBmbGV4LXJvdyBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWJsdWUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmJvZHkub3BlcmF0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgb3BlcmF0b3JgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0ubWFwKG9wZXJhdG9yRW5kcG9pbnRJZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtvcGVyYXRvckVuZHBvaW50SWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3IGlkPXtvcGVyYXRvckVuZHBvaW50SWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmlucHV0cy5tYXAoaW5QaXBlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5QaXBlLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25JZD17b3BlcmF0b3JFbmRwb2ludElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvcldvcmtmbG93KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvdy53b3JrZmxvd1VyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYGluYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGluUGlwZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtZW5kJz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93Lm91dHB1dHMubWFwKG91dHB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtvdXRwdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge291dHB1dC5waXBlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge291dHB1dC5waXBlLmtpbmQgPT09IGBkYXRhYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1wdXJwbGUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZS5qc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaXBlRW5kcG9pbnRWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogd29ya2Zsb3cud29ya2Zsb3dVcmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogYG91dGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG91dHB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvclBpcGVTb3VyY2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpcGU6IG91dHB1dC5waXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk/Lm1hcChzb3VyY2VJZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c291cmNlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uSWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yV29ya2Zsb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dVcmk6IHdvcmtmbG93LndvcmtmbG93VXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBgb3V0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG91dHB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlSWQ9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTMwMCc+e2Ake291dHB1dC5uYW1lfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuXG4gICAgICAgICAgICB7IWhpZGVUaXRsZXMgJiYgKFxuICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57YCR7d29ya2Zsb3cud29ya2Zsb3dVcml9YH08L1RleHQ+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Lyoge3dvcmtmbG93LndvcmtmbG93cz8ubWFwKHcgPT4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3cubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC0wIHRvcC0wIHNjYWxlLTUwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3d9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSl9ICovfVxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmNvbnN0IE5vZGVWaWV3ID0gKHsgbm9kZSwgY29udGFpbmVyIH06IHsgbm9kZTogUGlwZXNjcmlwdE5vZGU7IGNvbnRhaW5lcjogUGlwZXNjcmlwdFdvcmtmbG93IH0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogbm9kZS5sYXlvdXQ/LnBvc2l0aW9uLnggPz8gMCxcbiAgICAgICAgeTogbm9kZS5sYXlvdXQ/LnBvc2l0aW9uLnkgPz8gMCxcbiAgICAgICAgc2NhbGU6IG5vZGUubGF5b3V0Py5zY2FsZSA/PyAxLFxuICAgIH0pO1xuICAgIGNvbnN0IG1vdmVOb2RlID0gdXNlU3RhYmxlQ2FsbGJhY2soKHZhbHVlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgc2V0UG9zaXRpb24odmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTm9kZVZpZXdgLCB7IG5vZGUsIGNvbnRhaW5lciB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdvcmtmbG93ID0gKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci53b3JrZmxvd3M/LmZpbmQodyA9PiB3LndvcmtmbG93VXJpID09PSBub2RlLndvcmtmbG93VXJpKTtcbiAgICB9KSgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb3ZlYWJsZVZpZXdcbiAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICB5OiBwb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIHNjYWxlOiBwb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdmU9e21vdmVOb2RlfVxuICAgICAgICAgICAgbW91c2VCdXR0b249e01vdXNlQnV0dG9uLkxlZnR9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4LWNvbHVtbiBiZy16aW5jLTk1MC83NSBib3JkZXItYmx1ZS0xMDAgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSBtLVstMXB4XSByb3VuZGVkJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4KWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57d29ya2Zsb3cubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMiB0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPiN7bm9kZS5ub2RlSWR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICB7d29ya2Zsb3cgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5pbnB1dHMubWFwKGlucHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5wdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMSBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFBpcGUgPSBub2RlLmlucHV0UGlwZXMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPT4gcC5uYW1lID09PSBpbnB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlucHV0UGlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dFBpcGUua2luZCA9PT0gYGRhdGFgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdtbC1bLTE2cHhdIG1yLVsxNnB4XSB0ZXh0LXB1cnBsZS00MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lucHV0UGlwZS5qc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdtbC1bLThweF0gbXItWzBweF0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlUGlwZUVuZHBvaW50SWRGb3JQaXBlU291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93OiBjb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXBlOiBub2RlLmlucHV0UGlwZXMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0+IHgubmFtZSA9PT0gaW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pPy5tYXAoc291cmNlSWQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpcGVWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzb3VyY2VJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbklkPXtjYWxjdWxhdGVQaXBlRW5kcG9pbnRJZEZvck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IG5vZGUubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBpbmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlSWQ9e3NvdXJjZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya2Zsb3dJbnB1dE5hbWUgaW5wdXQ9e2lucHV0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtGbG93VmlldyB3b3JrZmxvdz17d29ya2Zsb3d9IGhpZGVUaXRsZXMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cub3V0cHV0cy5tYXAob3V0cHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0cHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdwLTEgZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtYmx1ZS0zMDAnPntgJHtvdXRwdXQubmFtZX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdtbC1bMHB4XSBtci1bLThweF0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlwZUVuZHBvaW50Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbGN1bGF0ZVBpcGVFbmRwb2ludElkRm9yTm9kZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBub2RlLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGBvdXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG91dHB1dC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPntub2RlLmltcGxlbWVudGF0aW9uLn08L1RleHQ+ICovfVxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgeyBjYWxjdWxhdGVSdW4gfSBmcm9tICcuL2NhbGN1bGF0ZS1ydW4nO1xuaW1wb3J0IHtcbiAgICBQaXBlc2NyaXB0Tm9kZSxcbiAgICBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlLFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0LFxuICAgIFBpcGVzY3JpcHROb2RlSW5zdGFuY2VfT3BlcmF0b3IsXG4gICAgUGlwZXNjcmlwdFBpcGVWYWx1ZSxcbiAgICBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2UsXG4gICAgUGlwZXNjcmlwdFdvcmtmbG93LFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkUnVudGltZSA9IChcbiAgICB3b3JrZmxvd1JhdzogUGlwZXNjcmlwdFdvcmtmbG93LFxuKToge1xuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3c7XG4gICAgY29udGV4dDogUGlwZXNjcmlwdFJ1bnRpbWVDb250ZXh0O1xuICAgIGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0O1xufSA9PiB7XG4gICAgY29uc3Qgd29ya2Zsb3cgPSB3b3JrZmxvd1JhdyBhcyBQaXBlc2NyaXB0V29ya2Zsb3c7XG4gICAgLy8gd29ya2Zsb3cudHJlZSA9IHtcbiAgICAvLyAgICAgY29udGFpbmVyOiB1bmRlZmluZWQsXG4gICAgLy8gICAgIHVzYWdlczogW10sXG4gICAgLy8gfTtcblxuICAgIGNvbnN0IGdldFdvcmtmbG93c1JlY3Vyc2l2ZSA9ICh3OiBQaXBlc2NyaXB0V29ya2Zsb3cpOiBQaXBlc2NyaXB0V29ya2Zsb3dbXSA9PiB7XG4gICAgICAgIHJldHVybiBbdywgLi4uKHcud29ya2Zsb3dzPy5mbGF0TWFwKHcyID0+IGdldFdvcmtmbG93c1JlY3Vyc2l2ZSh3MikpID8/IFtdKV07XG4gICAgfTtcblxuICAgIGNvbnN0IGFsbFdvcmtmbG93cyA9IGdldFdvcmtmbG93c1JlY3Vyc2l2ZSh3b3JrZmxvdyk7XG4gICAgY29uc3QgYWxsTm9kZXMgPSBhbGxXb3JrZmxvd3MuZmxhdE1hcCh3ID0+ICh3LmJvZHkua2luZCA9PT0gYG5vZGVzYCA/IHcuYm9keS5ub2RlcyA6IFtdKSk7XG4gICAgY29uc3QgYWxsUGlwZXNfd29ya2Zsb3dPdXRwdXRzID0gYWxsV29ya2Zsb3dzXG4gICAgICAgIC5mbGF0TWFwKHcgPT4gdy5vdXRwdXRzLmZsYXRNYXAobyA9PiBvLnBpcGUpKVxuICAgICAgICAuZmlsdGVyKHggPT4geClcbiAgICAgICAgLm1hcCh4ID0+IHghKTtcbiAgICBjb25zdCBhbGxQaXBlc19ub2RlSW5wdXRzID0gYWxsTm9kZXNcbiAgICAgICAgLmZsYXRNYXAobiA9PiBuLmlucHV0UGlwZXMpXG4gICAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgICAubWFwKHggPT4geCEpO1xuICAgIGNvbnN0IGFsbFBpcGVzID0gWy4uLmFsbFBpcGVzX3dvcmtmbG93T3V0cHV0cywgLi4uYWxsUGlwZXNfbm9kZUlucHV0c107XG5cbiAgICBjb25zdCBkYXRhc2V0OiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlRGF0YXNldCA9IHtcbiAgICAgICAgYWxsTm9kZUluc3RhbmNlczogW10sXG4gICAgICAgIHJvb3ROb2RlSW5zdGFuY2VzOiBbXSxcbiAgICB9O1xuICAgIGNvbnN0IGNvbnRleHQ6IFBpcGVzY3JpcHRSdW50aW1lQ29udGV4dCA9IHtcbiAgICAgICAgYWxsV29ya2Zsb3dzLFxuICAgICAgICBhbGxXb3JrZmxvd3NNYXA6IG5ldyBNYXAoYWxsV29ya2Zsb3dzLm1hcCh4ID0+IFt4LndvcmtmbG93VXJpLCB4XSkpLFxuICAgICAgICBhbGxOb2RlcyxcbiAgICAgICAgYWxsTm9kZXNNYXA6IG5ldyBNYXAoYWxsTm9kZXMubWFwKHggPT4gW3gubm9kZUlkLCB4XSkpLFxuICAgICAgICBhbGxQaXBlcyxcbiAgICAgICAgZGF0YXNldCxcbiAgICAgICAgYWxsTm9kZUluc3RhbmNlczogZGF0YXNldC5hbGxOb2RlSW5zdGFuY2VzLFxuICAgICAgICByb290Tm9kZUluc3RhbmNlczogZGF0YXNldC5yb290Tm9kZUluc3RhbmNlcyxcbiAgICB9O1xuXG4gICAgY29udGV4dC5yb290Tm9kZUluc3RhbmNlcy5wdXNoKFxuICAgICAgICAuLi4od29ya2Zsb3cuYm9keS5ub2Rlcz8ubWFwKG5vZGUgPT4gY3JlYXRlTm9kZUluc3RhbmNlcyhub2RlLCB1bmRlZmluZWQsIGNvbnRleHQpKSA/PyBbXSksXG4gICAgKTtcblxuICAgIGNvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBsb2FkTm9kZUNvbm5lY3Rpb25zX2luZmxvd3Mobm9kZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhbGxJbmZsb3dQaXBlcyA9IGNvbnRleHQuYWxsTm9kZUluc3RhbmNlc1xuICAgICAgICAuZmxhdE1hcCh4ID0+IFsuLi54LmlucHV0cy5tYXAoeSA9PiB5LmluZmxvd1BpcGUpLCAuLi54Lm91dHB1dHMubWFwKHkgPT4geS5pbmZsb3dQaXBlKV0pXG4gICAgICAgIC5maWx0ZXIoeCA9PiB4KVxuICAgICAgICAubWFwKHggPT4geCEpO1xuICAgIGNvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBsb2FkTm9kZUNvbm5lY3Rpb25zX291dGZsb3dzKG5vZGUsIGFsbEluZmxvd1BpcGVzKTtcbiAgICB9KTtcblxuICAgIGNhbGN1bGF0ZVJ1bihkYXRhc2V0KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHdvcmtmbG93LFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBkYXRhc2V0LFxuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBQaXBlc2NyaXB0UnVudGltZUNvbnRleHQgPSB7XG4gICAgYWxsV29ya2Zsb3dzOiBQaXBlc2NyaXB0V29ya2Zsb3dbXTtcbiAgICBhbGxXb3JrZmxvd3NNYXA6IE1hcDxzdHJpbmcsIFBpcGVzY3JpcHRXb3JrZmxvdz47XG4gICAgYWxsTm9kZXM6IFBpcGVzY3JpcHROb2RlW107XG4gICAgYWxsTm9kZXNNYXA6IE1hcDxzdHJpbmcsIFBpcGVzY3JpcHROb2RlPjtcbiAgICBhbGxQaXBlczogUGlwZXNjcmlwdFBpcGVWYWx1ZVtdO1xuXG4gICAgLy8gY3JlYXRlZCBkdXJpbmcgY3JlYXRlTm9kZUluc3RhbmNlc1xuICAgIGRhdGFzZXQ6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VEYXRhc2V0O1xuICAgIGFsbE5vZGVJbnN0YW5jZXM6IFBpcGVzY3JpcHROb2RlSW5zdGFuY2VbXTtcbiAgICByb290Tm9kZUluc3RhbmNlczogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZVtdO1xufTtcblxuY29uc3QgY3JlYXRlTm9kZUluc3RhbmNlcyA9IChcbiAgICBub2RlOiBQaXBlc2NyaXB0Tm9kZSxcbiAgICBwYXJlbnQ6IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHROb2RlSW5zdGFuY2UsXG4gICAgY29udGV4dDogUGlwZXNjcmlwdFJ1bnRpbWVDb250ZXh0LFxuKTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSA9PiB7XG4gICAgY29uc3Qgd29ya2Zsb3cgPSBjb250ZXh0LmFsbFdvcmtmbG93c01hcC5nZXQobm9kZS53b3JrZmxvd1VyaSk7XG4gICAgaWYgKCF3b3JrZmxvdykge1xuICAgICAgICB0aHJvdyBFcnJvcihgbWlzc2luZyB3b3JrZmxvdyAke25vZGUud29ya2Zsb3dVcml9YCk7XG4gICAgfVxuICAgIC8vIG5vZGUudHJlZSA9IHtcbiAgICAvLyAgICAgd29ya2Zsb3csXG4gICAgLy8gfTtcblxuICAgIGNvbnN0IGluc3RhbmNlOiBQaXBlc2NyaXB0Tm9kZUluc3RhbmNlID0ge1xuICAgICAgICBkYXRhc2V0OiBjb250ZXh0LmRhdGFzZXQsXG4gICAgICAgIGtleTogYCR7Y29udGV4dC5hbGxOb2RlSW5zdGFuY2VzLmxlbmd0aH1gLFxuICAgICAgICBub2RlLFxuICAgICAgICB3b3JrZmxvdyxcbiAgICAgICAgaW5wdXRzOiBbXSxcbiAgICAgICAgb3V0cHV0czogW10sXG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG4gICAgY29udGV4dC5hbGxOb2RlSW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuXG4gICAgLy8gQ3JlYXRlIGNvbm5lY3Rpb25zICh3aXRob3V0IHBpcGVzKVxuICAgIGluc3RhbmNlLmlucHV0cyA9IHdvcmtmbG93LmlucHV0cy5tYXAod29ya2Zsb3dJbnB1dCA9PiAoe1xuICAgICAgICBrZXk6IGAke2NvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5sZW5ndGh9OiR7d29ya2Zsb3dJbnB1dC5uYW1lfTp3b3JrZmxvd0lucHV0YCxcbiAgICAgICAgbm9kZUluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAga2luZDogYHdvcmtmbG93LWlucHV0YCxcbiAgICAgICAgd29ya2Zsb3dJbnB1dCxcbiAgICAgICAgbmFtZTogd29ya2Zsb3dJbnB1dC5uYW1lLFxuICAgICAgICBpbmZsb3dQaXBlOiB1bmRlZmluZWQsXG4gICAgICAgIG91dGZsb3dQaXBlczogW10sXG4gICAgfSkpO1xuICAgIGluc3RhbmNlLm91dHB1dHMgPSB3b3JrZmxvdy5vdXRwdXRzLm1hcCh3b3JrZmxvd091dHB1dCA9PiAoe1xuICAgICAgICBrZXk6IGAke2NvbnRleHQuYWxsTm9kZUluc3RhbmNlcy5sZW5ndGh9OiR7d29ya2Zsb3dPdXRwdXQubmFtZX06d29ya2Zsb3dPdXRwdXRgLFxuICAgICAgICBub2RlSW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICBraW5kOiBgd29ya2Zsb3ctb3V0cHV0YCxcbiAgICAgICAgd29ya2Zsb3dPdXRwdXQsXG4gICAgICAgIG5hbWU6IHdvcmtmbG93T3V0cHV0Lm5hbWUsXG4gICAgICAgIGluZmxvd1BpcGU6IHVuZGVmaW5lZCxcbiAgICAgICAgb3V0Zmxvd1BpcGVzOiBbXSxcbiAgICB9KSk7XG5cbiAgICAvLyBUT0RPOiBoYW5kbGUgcmVjdXJzaXZlL2N5Y2xpY2FsIHdvcmtmbG93c1xuICAgIGluc3RhbmNlLmNoaWxkcmVuID1cbiAgICAgICAgd29ya2Zsb3cuYm9keS5ub2Rlcz8ubWFwKG4gPT4gY3JlYXRlTm9kZUluc3RhbmNlcyhuLCBpbnN0YW5jZSwgY29udGV4dCkpID8/IFtdO1xuXG4gICAgaWYgKHdvcmtmbG93LmJvZHkua2luZCA9PT0gYG9wZXJhdG9yYCkge1xuICAgICAgICBpbnN0YW5jZS5vcGVyYXRvciA9IHdvcmtmbG93LmJvZHkub3BlcmF0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuY29uc3QgbG9hZE5vZGVDb25uZWN0aW9uc19pbmZsb3dzID0gKG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSkgPT4ge1xuICAgIC8vIGNvbm5lY3QgaW5mbG93c1xuICAgIG5vZGVJbnN0YW5jZS5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVJbnB1dCA9IG5vZGVJbnN0YW5jZS5ub2RlLmlucHV0UGlwZXMuZmluZCh4ID0+IHgubmFtZSA9PT0gaW5wdXQubmFtZSk7XG4gICAgICAgIGlmICghbm9kZUlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZXRJbmZsb3dTb3VyY2UgPSAoKTogdW5kZWZpbmVkIHwgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwaXBlU291cmNlID0gbm9kZUlucHV0O1xuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYGRhdGFgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYGRhdGFgLFxuICAgICAgICAgICAgICAgICAgICBqc29uOiBwaXBlU291cmNlLmpzb24sXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGB3b3JrZmxvdy1vcGVyYXRvcmApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgb3BlcmF0b3Itb3V0cHV0YCxcbiAgICAgICAgICAgICAgICAgICAgbm9kZUluc3RhbmNlOiBub2RlSW5zdGFuY2UgYXMgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYHdvcmtmbG93LWlucHV0YCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVXb3JrZmxvd0lucHV0ID0gbm9kZUluc3RhbmNlLnBhcmVudD8uaW5wdXRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIHggPT4geC5uYW1lID09PSBwaXBlU291cmNlLndvcmtmbG93SW5wdXROYW1lLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlV29ya2Zsb3dJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogZ2V0SW5mbG93U291cmNlOiBNaXNzaW5nIG5vZGVXb3JrZmxvd0lucHV0ICR7cGlwZVNvdXJjZS5uYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGBpbnB1dGAsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBub2RlV29ya2Zsb3dJbnB1dCxcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYG5vZGVgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVlck5vZGVPdXRwdXQgPSBub2RlSW5zdGFuY2UucGFyZW50Py5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAuZmluZChuMiA9PiBuMi5ub2RlLm5vZGVJZCA9PT0gcGlwZVNvdXJjZS5zb3VyY2VOb2RlSWQpXG4gICAgICAgICAgICAgICAgICAgID8ub3V0cHV0cy5maW5kKHggPT4geC5uYW1lID09PSBwaXBlU291cmNlLnNvdXJjZU5vZGVPdXRwdXROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBlZXJOb2RlT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiBnZXRJbmZsb3dTb3VyY2U6IE1pc3NpbmcgcGVlck5vZGVPdXRwdXQgJHtwaXBlU291cmNlLm5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXBlU291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuT3V0cHV0czogbm9kZUluc3RhbmNlLmNoaWxkcmVuLm1hcCh4ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgub3V0cHV0cy5tYXAobyA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBvLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogby5ub2RlSW5zdGFuY2Uubm9kZS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYG91dHB1dGAsXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dDogcGVlck5vZGVPdXRwdXQsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogdW5rbm93biBwaXBlU291cmNlICR7KHBpcGVTb3VyY2UgYXMgeyBraW5kOiBzdHJpbmcgfSkua2luZH1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc291cmNlID0gZ2V0SW5mbG93U291cmNlKCk7XG4gICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dC5pbmZsb3dQaXBlID0ge1xuICAgICAgICAgICAga2V5OiBgJHtpbnB1dC5rZXl9OnBpcGVgLFxuICAgICAgICAgICAgcGlwZTogbm9kZUlucHV0LFxuICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgZGVzdGluYXRpb246IHtcbiAgICAgICAgICAgICAgICBraW5kOiBgaW5wdXRgLFxuICAgICAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIG5vZGVJbnN0YW5jZS5vdXRwdXRzLmZvckVhY2gob3V0cHV0ID0+IHtcbiAgICAgICAgY29uc3Qgd29ya2Zsb3dPdXRwdXQgPSBub2RlSW5zdGFuY2Uud29ya2Zsb3cub3V0cHV0cy5maW5kKHggPT4geC5uYW1lID09PSBvdXRwdXQubmFtZSk7XG4gICAgICAgIGNvbnN0IHdvcmtmbG93T3V0cHV0UGlwZSA9IHdvcmtmbG93T3V0cHV0Py5waXBlO1xuICAgICAgICBpZiAoIXdvcmtmbG93T3V0cHV0UGlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0SW5mbG93U291cmNlID0gKCk6IHVuZGVmaW5lZCB8IFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF0gPT4ge1xuICAgICAgICAgICAgY29uc3QgcGlwZVNvdXJjZSA9IHdvcmtmbG93T3V0cHV0UGlwZTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZTogcGlwZVNvdXJjZU5hbWUgfSA9IHdvcmtmbG93T3V0cHV0O1xuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYGRhdGFgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYGRhdGFgLFxuICAgICAgICAgICAgICAgICAgICBqc29uOiBwaXBlU291cmNlLmpzb24sXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBlU291cmNlLmtpbmQgPT09IGB3b3JrZmxvdy1vcGVyYXRvcmApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgb3BlcmF0b3Itb3V0cHV0YCxcbiAgICAgICAgICAgICAgICAgICAgbm9kZUluc3RhbmNlOiBub2RlSW5zdGFuY2UgYXMgUGlwZXNjcmlwdE5vZGVJbnN0YW5jZV9PcGVyYXRvcixcbiAgICAgICAgICAgICAgICB9IHNhdGlzZmllcyBQaXBlc2NyaXB0UGlwZVZhbHVlSW5zdGFuY2VbYHNvdXJjZWBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcGVTb3VyY2Uua2luZCA9PT0gYHdvcmtmbG93LWlucHV0YCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVXb3JrZmxvd0lucHV0ID0gbm9kZUluc3RhbmNlLmlucHV0cy5maW5kKHggPT4geC5uYW1lID09PSBwaXBlU291cmNlTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlV29ya2Zsb3dJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogZ2V0SW5mbG93U291cmNlOiBNaXNzaW5nIG5vZGVXb3JrZmxvd0lucHV0ICR7cGlwZVNvdXJjZU5hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogYGlucHV0YCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5vZGVXb3JrZmxvd0lucHV0LFxuICAgICAgICAgICAgICAgIH0gc2F0aXNmaWVzIFBpcGVzY3JpcHRQaXBlVmFsdWVJbnN0YW5jZVtgc291cmNlYF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwZVNvdXJjZS5raW5kID09PSBgbm9kZWApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lck5vZGVPdXRwdXQgPSBub2RlSW5zdGFuY2UuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgLmZpbmQobjIgPT4gbjIubm9kZS5ub2RlSWQgPT09IHBpcGVTb3VyY2Uuc291cmNlTm9kZUlkKVxuICAgICAgICAgICAgICAgICAgICA/Lm91dHB1dHMuZmluZCh4ID0+IHgubmFtZSA9PT0gcGlwZVNvdXJjZU5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghaW5uZXJOb2RlT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBsb2FkTm9kZUNvbm5lY3Rpb25zOiBnZXRJbmZsb3dTb3VyY2U6IE1pc3NpbmcgcGVlck5vZGVPdXRwdXQgJHtwaXBlU291cmNlTmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBgb3V0cHV0YCxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBpbm5lck5vZGVPdXRwdXQsXG4gICAgICAgICAgICAgICAgfSBzYXRpc2ZpZXMgUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW2Bzb3VyY2VgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgbG9hZE5vZGVDb25uZWN0aW9uczogdW5rbm93biBwaXBlU291cmNlICR7KHBpcGVTb3VyY2UgYXMgeyBraW5kOiBzdHJpbmcgfSkua2luZH1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc291cmNlID0gZ2V0SW5mbG93U291cmNlKCk7XG4gICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBvdXRwdXQuaW5mbG93UGlwZSA9IHtcbiAgICAgICAgICAgIGtleTogYCR7b3V0cHV0LmtleX06cGlwZWAsXG4gICAgICAgICAgICBwaXBlOiB3b3JrZmxvd091dHB1dFBpcGUsXG4gICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IGBvdXRwdXRgLFxuICAgICAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG5jb25zdCBsb2FkTm9kZUNvbm5lY3Rpb25zX291dGZsb3dzID0gKFxuICAgIG5vZGVJbnN0YW5jZTogUGlwZXNjcmlwdE5vZGVJbnN0YW5jZSxcbiAgICBhbGxJbmZsb3dQaXBlczogUGlwZXNjcmlwdFBpcGVWYWx1ZUluc3RhbmNlW10sXG4pID0+IHtcbiAgICBub2RlSW5zdGFuY2UuaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5vdXRmbG93UGlwZXMgPSBhbGxJbmZsb3dQaXBlcy5maWx0ZXIoXG4gICAgICAgICAgICB4ID0+IHguc291cmNlLmtpbmQgPT09IGBpbnB1dGAgJiYgeC5zb3VyY2UuaW5wdXQgPT09IGlucHV0LFxuICAgICAgICApO1xuICAgIH0pO1xuICAgIG5vZGVJbnN0YW5jZS5vdXRwdXRzLmZvckVhY2gob3V0cHV0ID0+IHtcbiAgICAgICAgb3V0cHV0Lm91dGZsb3dQaXBlcyA9IGFsbEluZmxvd1BpcGVzLmZpbHRlcihcbiAgICAgICAgICAgIHggPT4geC5zb3VyY2Uua2luZCA9PT0gYG91dHB1dGAgJiYgeC5zb3VyY2Uub3V0cHV0ID09PSBvdXRwdXQsXG4gICAgICAgICk7XG4gICAgfSk7XG59O1xuIiwgIi8vIGltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDAxLWRlY2xhcmF0aW9ucy8wMi50cy53b3JrZmxvdy5qc29uJztcbi8vIGltcG9ydCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gZnJvbSAnLi9zcmMvdGVzdHMvY29kZS8wMDAyLWFzc2lnbm1lbnRzLzAxLnRzLndvcmtmbG93Lmpzb24nO1xuLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDMtb3BlcmF0b3JzLzA0LnRzLndvcmtmbG93Lmpzb24nO1xuLy8gaW1wb3J0IGV4YW1wbGVEZWNsYXJhdGlvbldvcmtmbG93SnNvbiBmcm9tICcuL3NyYy90ZXN0cy9jb2RlLzAwMDQtbXV0YXRpb24vMDEudHMud29ya2Zsb3cuanNvbic7XG5pbXBvcnQgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3dKc29uIGZyb20gJy4vc3JjL3Rlc3RzL2NvZGUvMDAwNS1sb2dpYy8wMi50cy53b3JrZmxvdy5qc29uJztcbmltcG9ydCB7IFBpcGVzY3JpcHRXb3JrZmxvdyB9IGZyb20gJy4vc3JjL3R5cGVzJztcbmV4cG9ydCB7IFdvcmtDYW52YXNWaWV3IH0gZnJvbSAnLi9zcmMvdWkvd29yay1jYW52YXMtdmlldyc7XG5leHBvcnQgY29uc3QgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3cgPSBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvd0pzb24gYXMgUGlwZXNjcmlwdFdvcmtmbG93O1xuIiwgImltcG9ydCB7IFdvcmtDYW52YXNWaWV3LCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvdyB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvcGlwZXNjcmlwdCc7XG5cbmV4cG9ydCBjb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgY29uc3Qgd29ya2Zsb3cgPSBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvdztcbiAgICByZXR1cm4gPFdvcmtDYW52YXNWaWV3IHdvcmtmbG93PXt3b3JrZmxvd30gLz47XG59O1xuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBiYWNrZ3JvdW5kQ29sb3IgVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gYW5pbWF0ZWQgYHRydWVgIHRvIGFuaW1hdGUgdGhlIGJhY2tncm91bmQgY29sb3IgY2hhbmdlLCBgZmFsc2VgIHRvIGNoYW5nZSBpbW1lZGlhdGVseS5cbiAqIEBwbGF0Zm9ybSBhbmRyb2lkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckJhY2tncm91bmRDb2xvcihiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZywgYW5pbWF0ZWQ6IGJvb2xlYW4pIHtcbiAgU3RhdHVzQmFyLnNldEJhY2tncm91bmRDb2xvcihiYWNrZ3JvdW5kQ29sb3IsIGFuaW1hdGVkKTtcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiB0aGUgbmV0d29yayBhY3Rpdml0eSBpbmRpY2F0b3IuXG4gKiBAcGFyYW0gdmlzaWJsZSBJZiB0aGUgbmV0d29yayBhY3Rpdml0eSBpbmRpY2F0b3Igc2hvdWxkIGJlIHZpc2libGUuXG4gKiBAcGxhdGZvcm0gaW9zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0Jhck5ldHdvcmtBY3Rpdml0eUluZGljYXRvclZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICBTdGF0dXNCYXIuc2V0TmV0d29ya0FjdGl2aXR5SW5kaWNhdG9yVmlzaWJsZSh2aXNpYmxlKTtcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBTdGF0dXNCYXJBbmltYXRpb24gfSBmcm9tICcuL1N0YXR1c0Jhci50eXBlcyc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIGhpZGRlbiBJZiB0aGUgc3RhdHVzIGJhciBzaG91bGQgYmUgaGlkZGVuLlxuICogQHBhcmFtIGFuaW1hdGlvbiBBbmltYXRpb24gdG8gdXNlIHdoZW4gdG9nZ2xpbmcgaGlkZGVuLCBkZWZhdWx0cyB0byBgJ25vbmUnYC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RhdHVzQmFySGlkZGVuKGhpZGRlbjogYm9vbGVhbiwgYW5pbWF0aW9uOiBTdGF0dXNCYXJBbmltYXRpb24pIHtcbiAgU3RhdHVzQmFyLnNldEhpZGRlbihoaWRkZW4sIGFuaW1hdGlvbik7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyU3R5bGUgfSBmcm9tICcuL1N0YXR1c0Jhci50eXBlcyc7XG5pbXBvcnQgc3R5bGVUb0JhclN0eWxlIGZyb20gJy4vc3R5bGVUb0JhclN0eWxlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogU2V0IHRoZSBiYXIgc3R5bGUgb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gc3R5bGUgVGhlIGNvbG9yIG9mIHRoZSBzdGF0dXMgYmFyIHRleHQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhclN0eWxlKHN0eWxlOiBTdGF0dXNCYXJTdHlsZSkge1xuICBTdGF0dXNCYXIuc2V0QmFyU3R5bGUoc3R5bGVUb0JhclN0eWxlKHN0eWxlKSk7XG59XG4iLCAiaW1wb3J0IHsgQXBwZWFyYW5jZSwgQ29sb3JTY2hlbWVOYW1lIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyU3R5bGUgfSBmcm9tICcuL1N0YXR1c0Jhci50eXBlcyc7XG5cbmZ1bmN0aW9uIGdldENvbG9yU2NoZW1lKCkge1xuICBpZiAoQXBwZWFyYW5jZSkge1xuICAgIHJldHVybiBBcHBlYXJhbmNlLmdldENvbG9yU2NoZW1lKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdsaWdodCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVUb0JhclN0eWxlKFxuICBzdHlsZTogU3RhdHVzQmFyU3R5bGUgPSAnYXV0bycsXG4gIGNvbG9yU2NoZW1lOiBDb2xvclNjaGVtZU5hbWUgPSBnZXRDb2xvclNjaGVtZSgpXG4pOiAnbGlnaHQtY29udGVudCcgfCAnZGFyay1jb250ZW50JyB7XG4gIGlmICghY29sb3JTY2hlbWUpIHtcbiAgICBjb2xvclNjaGVtZSA9ICdsaWdodCc7XG4gIH1cblxuICBsZXQgcmVzb2x2ZWRTdHlsZSA9IHN0eWxlO1xuICBpZiAoc3R5bGUgPT09ICdhdXRvJykge1xuICAgIHJlc29sdmVkU3R5bGUgPSBjb2xvclNjaGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XG4gIH0gZWxzZSBpZiAoc3R5bGUgPT09ICdpbnZlcnRlZCcpIHtcbiAgICByZXNvbHZlZFN0eWxlID0gY29sb3JTY2hlbWUgPT09ICdsaWdodCcgPyAnbGlnaHQnIDogJ2RhcmsnO1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVkU3R5bGUgPT09ICdsaWdodCcgPyAnbGlnaHQtY29udGVudCcgOiAnZGFyay1jb250ZW50Jztcbn1cbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBTZXQgdGhlIHRyYW5zbHVjZW5jeSBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSB0cmFuc2x1Y2VudCBXaGV0aGVyIHRoZSBhcHAgY2FuIGRyYXcgdW5kZXIgdGhlIHN0YXR1cyBiYXIuIFdoZW4gYHRydWVgLCBjb250ZW50IHdpbGwgYmVcbiAqIHJlbmRlcmVkIHVuZGVyIHRoZSBzdGF0dXMgYmFyLiBUaGlzIGlzIGFsd2F5cyBgdHJ1ZWAgb24gaU9TIGFuZCBjYW5ub3QgYmUgY2hhbmdlZC5cbiAqIEBwbGF0Zm9ybSBhbmRyb2lkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhclRyYW5zbHVjZW50KHRyYW5zbHVjZW50OiBib29sZWFuKSB7XG4gIFN0YXR1c0Jhci5zZXRUcmFuc2x1Y2VudCh0cmFuc2x1Y2VudCk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnZXhwby1zdGF0dXMtYmFyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJlc3NhYmxlLCBUZXh0LCBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gKCkgPT4ge1xuICAgICAgICBzZXRDb3VudChzID0+IHMgKyAxKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIGZsZXgtY29sIGZsZXgtMSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctcmVkLTEwMCc+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtY3lhbi03MDAnPkV4YW1wbGVWaWV3IC4uLjwvVGV4dD5cbiAgICAgICAgICAgIDxQcmVzc2FibGUgb25QcmVzcz17aW5jcmVtZW50fT5cbiAgICAgICAgICAgICAgICA8VGV4dD57YEluY3JlbWVudCBjb3VudDoke2NvdW50fWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0PjAwMzwvVGV4dD5cbiAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgPFN0YXR1c0JhciBzdHlsZT0nYXV0bycgLz5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuIiwgImltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSAndGFpbHdpbmRjc3MnO1xuXG5leHBvcnQgY29uc3QgdGFpbHdpbmRUaGVtZTogQ29uZmlnW2B0aGVtZWBdID0ge1xuICAgIC8vIGVkaXQgeW91ciB0YWlsd2luZCB0aGVtZSBoZXJlIVxuICAgIC8vIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYWRkaW5nLWN1c3RvbS1zdHlsZXNcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLGFBQWU7QUFBQSxFQUNmLFFBQVUsQ0FBQztBQUFBLEVBQ1gsU0FBVyxDQUFDO0FBQUEsRUFDWixNQUFRO0FBQUEsSUFDTixNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsYUFBZTtBQUFBLFFBQ2YsUUFBVTtBQUFBLFFBQ1YsWUFBYyxDQUFDO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLGFBQWU7QUFBQSxNQUNmLE1BQVE7QUFBQSxNQUNSLFFBQVUsQ0FBQztBQUFBLE1BQ1gsU0FBVztBQUFBLFFBQ1Q7QUFBQSxVQUNFLE1BQVE7QUFBQSxVQUNSLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLE1BQVE7QUFBQSxVQUNWO0FBQUEsVUFDQSxNQUFRO0FBQUEsWUFDTixNQUFRO0FBQUEsWUFDUixjQUFnQjtBQUFBLFlBQ2hCLHNCQUF3QjtBQUFBLFVBQzFCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQWE7QUFBQSxRQUNYO0FBQUEsVUFDRSxhQUFlO0FBQUEsVUFDZixNQUFRO0FBQUEsVUFDUixRQUFVO0FBQUEsWUFDUjtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFXO0FBQUEsWUFDVDtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0EsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLFVBQVk7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWU7QUFBQSxVQUNmLE1BQVE7QUFBQSxVQUNSLFFBQVUsQ0FBQztBQUFBLFVBQ1gsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBUTtBQUFBLFlBQ04sTUFBUTtBQUFBLFlBQ1IsVUFBWTtBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsYUFBZTtBQUFBLFVBQ2YsTUFBUTtBQUFBLFVBQ1IsUUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFXO0FBQUEsWUFDVDtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0EsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE1BQVE7QUFBQSxZQUNOLE1BQVE7QUFBQSxZQUNSLFVBQVk7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLGFBQWU7QUFBQSxVQUNmLE1BQVE7QUFBQSxVQUNSLFFBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsZ0JBQ04sTUFBUTtBQUFBLGdCQUNSLE1BQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxnQkFDTixNQUFRO0FBQUEsZ0JBQ1IsTUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFXO0FBQUEsWUFDVDtBQUFBLGNBQ0UsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGdCQUNOLE1BQVE7QUFBQSxnQkFDUixNQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0EsTUFBUTtBQUFBLGdC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NkJBQTZCO0FBc0J0Qzs7O0E4RC9HTyxJQUFNLDZCQUE2Qjs7O0FDTG5DLElBQU0sTUFBTSxNQUFNO0FBQ3JCLFFBQU0sV0FBVztBQUNqQixTQUFPLENBQUMsZUFBZSxVQUFVLFVBQVU7QUFDL0M7OztBQ0xBLFNBQVMsaUJBQWlCOzs7QUNBMUIsU0FBUyxhQUFBTSxrQkFBaUI7OztBQ0ExQixTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQTFCLFNBQVMsYUFBQUMsa0JBQWlCOzs7QUNBMUIsU0FBUyxrQkFBbUM7OztBQ0E1QyxTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQzFCLFNBQVMsWUFBQUMsaUJBQWdCO0FBQ3pCLFNBQVMsYUFBQUMsWUFBVyxRQUFBQyxPQUFNLFFBQUFDLGFBQVk7OztBQ0EvQixJQUFNLGdCQUFpQztBQUFBO0FBQUE7QUFHOUM7IiwKICAibmFtZXMiOiBbIlJlYWN0IiwgInVzZUxheW91dEVmZmVjdCIsICJ1c2VSZWYiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlByZXNzYWJsZSIsICJkIiwgImIiLCAiZnJvbSIsICJ2IiwgIlN1YnNjcmlwdGlvbiIsICJTdWJzY3JpYmVyIiwgIkNvbnN1bWVyT2JzZXJ2ZXIiLCAiU2FmZVN1YnNjcmliZXIiLCAiT2JzZXJ2YWJsZSIsICJvYnNlcnZhYmxlIiwgIk9wZXJhdG9yU3Vic2NyaWJlciIsICJlcnIiLCAiU3ViamVjdCIsICJvYnNlcnZhYmxlIiwgIkFub255bW91c1N1YmplY3QiLCAiQmVoYXZpb3JTdWJqZWN0IiwgImRlbGF5IiwgImRlbGF5IiwgImRlbGF5IiwgIml0ZXJhdG9yIiwgIml0ZXJhdG9yIiwgImlzQXJyYXkiLCAiaSIsICJ1c2VSZWYiLCAidXNlUmVmIiwgIlJlYWN0IiwgImNyZWF0ZUNvbnRleHQiLCAidXNlQ29udGV4dCIsICJ1c2VFZmZlY3QiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlByZXNzYWJsZSIsICJSZWFjdCIsICJjcmVhdGVDb250ZXh0IiwgInVzZUVmZmVjdCIsICJ1c2VSZWYiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgImNyZWF0ZUNvbnRleHQiLCAidXNlRWZmZWN0IiwgIm9sZCIsICJ1c2VTdGF0ZSIsICJWaWV3IiwgIlJlYWN0IiwgIlRleHQiLCAidXNlUmVmIiwgIlJlYWN0IiwgIlZpZXciLCAiVGV4dCIsICJ1c2VDb250ZXh0IiwgInVzZVN0YXRlIiwgIlZpZXciLCAiVGV4dCIsICJQcmVzc2FibGUiLCAidXNlQ29udGV4dCIsICJQcmVzc2FibGUiLCAiVmlldyIsICJUZXh0IiwgInVzZVN0YXRlIiwgIlZpZXciLCAiUmVhY3QiLCAiVGV4dCIsICJUZXh0IiwgIm9iaiIsICJ2aXNpdGVkIiwgIngiLCAid29ya2Zsb3ciLCAiY29udGV4dCIsICJ2IiwgIlZpZXciLCAiUmVhY3QiLCAidXNlQ29udGV4dCIsICJ1c2VTdGF0ZSIsICJ1c2VFZmZlY3QiLCAiVGV4dCIsICJQcmVzc2FibGUiLCAiY3JlYXRlQ29udGV4dCIsICJSZWFjdCIsICJ1c2VTdGF0ZSIsICJWaWV3IiwgIlRleHQiLCAiVmlldyIsICJUZXh0IiwgIlJlYWN0IiwgIk5vZGVWaWV3IiwgInVzZVN0YXRlIiwgImNvbnRleHQiLCAidXNlUmVmIiwgInVzZVN0YXRlIiwgIlZpZXciLCAiUmVhY3QiLCAiUHJlc3NhYmxlIiwgIlRleHQiLCAiY29udGV4dCIsICJ1c2VMYXlvdXRFZmZlY3QiLCAiU3RhdHVzQmFyIiwgIlN0YXR1c0JhciIsICJTdGF0dXNCYXIiLCAiU3RhdHVzQmFyIiwgInVzZVN0YXRlIiwgIlByZXNzYWJsZSIsICJUZXh0IiwgIlZpZXciXQp9Cg==
