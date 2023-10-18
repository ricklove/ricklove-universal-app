-   ui agnostic
    -   2d or 3d
    -   any input tech
        -   desktop (keyboard/mouse)
        -   mobile (touch)
        -   xr (controller/hands/3d)
    -   ui is defined by workflow (self-defined)
-   language agnostic
    -   typescript for standard implementation
    -   code generation csn be automated with ai + test fixtures for validation
-   runtime coding
    -   code is first class
    -   all code can be edited at runtime
    -   code manager can deploy server code changes at runtime
    -   code integration allows interacting with any language
-   security
    -   creator delegated permission security model (like Postgres)
-   integration
    -   git file system
-   pipescript (meta programming)
    -   data can be a value (normal variables)
    -   type can be a value (type algebra)
    -   modules can be a value (callback functions)
    -   code can be a value (runtime code editing)
    -   datasets can be used for testing
    -   any internal workspaces can be overridden at usage site
    -   duck typing
        -   any module with matching input/output can be swapped
-   runtime performance
    -   code can be profiled and compiled using fastest language implementation
    -   for implementation code is

---

# Todo

-   [ ] string templates to code
-   [ ] round trip from code to pipescript to code
