define(["require", "exports", "preact/jsx-runtime", "./table", "./treeview", "./listview", "./datagrid", "preact"], function (require, exports, jsx_runtime_1, table_1, treeview_1, listview_1, datagrid_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Collection = () => {
        return ((0, jsx_runtime_1.jsx)("div", Object.assign({ class: "oj-web-applayout-max-width oj-web-applayout-content" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ class: "oj-flex oj-sm-flex-items-1" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ class: "oj-flex-item oj-panel oj-sm-margin-2x demo-panel-lg" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ class: "oj-typography-heading-sm" }, { children: " Table " })), (0, jsx_runtime_1.jsx)(table_1.default, {})] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ class: "oj-flex-item oj-panel oj-sm-margin-2x demo-panel-lg" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ class: "oj-typography-heading-sm" }, { children: " ListView " })), (0, jsx_runtime_1.jsx)(listview_1.default, {})] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ class: "oj-flex-item oj-panel oj-sm-margin-2x demo-panel-md" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ class: "oj-typography-heading-sm" }, { children: " Treeview " })), (0, jsx_runtime_1.jsx)(treeview_1.default, {})] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ class: "oj-flex-item oj-panel oj-sm-margin-2x demo-panel-lg" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ class: "oj-typography-heading-sm" }, { children: " DataGrid " })), (0, jsx_runtime_1.jsx)(datagrid_1.default, {})] }))] })) })));
    };
    exports.default = Collection;
});
