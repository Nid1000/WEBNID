(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrdersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/deliweb/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/deliweb/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/deliweb/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/deliweb/frontend/src/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/deliweb/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/deliweb/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/deliweb/frontend/src/utils/image.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function OrdersPage() {
    var _selected_pedido, _selected_pedido1, _selected_pedido2, _selected_pedido3, _selected_pedido4;
    _s();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pedidos, setPedidos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pagina, setPagina] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [limite, setLimite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalPaginas, setTotalPaginas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [comprobantes, setComprobantes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pedidos");
    // Filtros para pedidos
    const [filtrosPed, setFiltrosPed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        busqueda: "",
        estado: "",
        desde: "",
        hasta: ""
    });
    // Filtros para comprobantes
    const [filtrosComp, setFiltrosComp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        busqueda: "",
        tipo: "",
        desde: "",
        hasta: ""
    });
    const [imgModal, setImgModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false
    });
    const imgModalCloseBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [imgModalFocusEl, setImgModalFocusEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Añadir estado y referencias para visualización de PDF
    const [pdfModal, setPdfModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false
    });
    const pdfModalCloseBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pdfModalFocusEl, setPdfModalFocusEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const currency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrdersPage.useMemo[currency]": ()=>({
                "OrdersPage.useMemo[currency]": (n)=>new Intl.NumberFormat("es-PE", {
                        style: "currency",
                        currency: "PEN"
                    }).format(n)
            })["OrdersPage.useMemo[currency]"]
    }["OrdersPage.useMemo[currency]"], []);
    const fetchPedidos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrdersPage.useCallback[fetchPedidos]": async ()=>{
            if (!isAuthenticated()) {
                setLoading(false);
                return;
            }
            setLoading(true);
            setError(null);
            try {
                var _resp_data, _resp_data1, _resp_data2, _resp_data3;
                const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/pedidos/mis-pedidos?pagina=".concat(pagina, "&limite=").concat(limite));
                const items = Array.isArray((_resp_data = resp.data) === null || _resp_data === void 0 ? void 0 : _resp_data.pedidos) ? resp.data.pedidos : [];
                setPedidos(items);
                var _resp_data_total;
                setTotal(Number((_resp_data_total = (_resp_data1 = resp.data) === null || _resp_data1 === void 0 ? void 0 : _resp_data1.total) !== null && _resp_data_total !== void 0 ? _resp_data_total : items.length));
                var _resp_data_total1, _resp_data_totalPaginas;
                setTotalPaginas(Number((_resp_data_totalPaginas = (_resp_data2 = resp.data) === null || _resp_data2 === void 0 ? void 0 : _resp_data2.totalPaginas) !== null && _resp_data_totalPaginas !== void 0 ? _resp_data_totalPaginas : Math.ceil(((_resp_data_total1 = (_resp_data3 = resp.data) === null || _resp_data3 === void 0 ? void 0 : _resp_data3.total) !== null && _resp_data_total1 !== void 0 ? _resp_data_total1 : items.length) / limite)));
            } catch (err) {
                var _this, _err_response;
                const msg = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(err) ? ((_this = (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) === null || _this === void 0 ? void 0 : _this.message) || err.message : "Error al cargar pedidos";
                setError(msg);
            } finally{
                setLoading(false);
            }
        }
    }["OrdersPage.useCallback[fetchPedidos]"], [
        isAuthenticated,
        pagina,
        limite
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrdersPage.useEffect": ()=>{
            if (tab === "pedidos") fetchPedidos();
        }
    }["OrdersPage.useEffect"], [
        fetchPedidos,
        tab
    ]);
    const fetchComprobantes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrdersPage.useCallback[fetchComprobantes]": async ()=>{
            if (!isAuthenticated()) return;
            try {
                var _resp_data, _resp_data1;
                const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/facturacion/mis-comprobantes");
                const list = Array.isArray((_resp_data = resp.data) === null || _resp_data === void 0 ? void 0 : _resp_data.comprobantes) ? (_resp_data1 = resp.data) === null || _resp_data1 === void 0 ? void 0 : _resp_data1.comprobantes : [];
                setComprobantes(list);
            } catch (err) {
                console.warn("No se pudieron cargar comprobantes");
            }
        }
    }["OrdersPage.useCallback[fetchComprobantes]"], [
        isAuthenticated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrdersPage.useEffect": ()=>{
            if (tab === "comprobantes") fetchComprobantes();
        }
    }["OrdersPage.useEffect"], [
        tab,
        fetchComprobantes
    ]);
    const abrirDetalles = async (pedidoId)=>{
        try {
            var _resp_data, _resp_data1;
            const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/pedidos/".concat(pedidoId));
            const p = (_resp_data = resp.data) === null || _resp_data === void 0 ? void 0 : _resp_data.pedido;
            const d = Array.isArray((_resp_data1 = resp.data) === null || _resp_data1 === void 0 ? void 0 : _resp_data1.detalles) ? resp.data.detalles.map((x)=>{
                var _x_producto_nombre, _x_producto_imagen, _x_cantidad, _x_precio_unitario, _x_subtotal;
                return {
                    producto_nombre: String((_x_producto_nombre = x.producto_nombre) !== null && _x_producto_nombre !== void 0 ? _x_producto_nombre : "") || "Producto",
                    producto_imagen: (_x_producto_imagen = x.producto_imagen) !== null && _x_producto_imagen !== void 0 ? _x_producto_imagen : null,
                    cantidad: Number((_x_cantidad = x.cantidad) !== null && _x_cantidad !== void 0 ? _x_cantidad : 0),
                    precio_unitario: Number((_x_precio_unitario = x.precio_unitario) !== null && _x_precio_unitario !== void 0 ? _x_precio_unitario : 0),
                    subtotal: Number((_x_subtotal = x.subtotal) !== null && _x_subtotal !== void 0 ? _x_subtotal : 0)
                };
            }) : [];
            setSelected({
                pedido: p,
                detalles: d
            });
            setModalOpen(true);
        } catch (err) {
            var _this, _err_response;
            const msg = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(err) ? ((_this = (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) === null || _this === void 0 ? void 0 : _this.message) || err.message : "Error al cargar detalles";
            setError(msg);
        }
    };
    const cancelarPedido = async (pedidoId)=>{
        if (!window.confirm("¿Cancelar este pedido?")) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("/api/pedidos/".concat(pedidoId, "/cancelar"), {});
            await fetchPedidos();
            alert("Pedido cancelado");
        } catch (err) {
            var _this, _err_response;
            const msg = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(err) ? ((_this = (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) === null || _this === void 0 ? void 0 : _this.message) || err.message : "Error al cancelar";
            setError(msg);
        }
    };
    // Derivados y filtros locales (no condicionar hooks)
    const estadosDisponibles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrdersPage.useMemo[estadosDisponibles]": ()=>Array.from(new Set(pedidos.map({
                "OrdersPage.useMemo[estadosDisponibles]": (p)=>p.estado
            }["OrdersPage.useMemo[estadosDisponibles]"])))
    }["OrdersPage.useMemo[estadosDisponibles]"], [
        pedidos
    ]);
    const pedidosFiltrados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrdersPage.useMemo[pedidosFiltrados]": ()=>{
            let list = pedidos.slice();
            const { busqueda, estado, desde, hasta } = filtrosPed;
            if (busqueda) {
                const q = busqueda.toLowerCase();
                list = list.filter({
                    "OrdersPage.useMemo[pedidosFiltrados]": (p)=>String(p.id).includes(q) || p.estado.toLowerCase().includes(q)
                }["OrdersPage.useMemo[pedidosFiltrados]"]);
            }
            if (estado) list = list.filter({
                "OrdersPage.useMemo[pedidosFiltrados]": (p)=>p.estado === estado
            }["OrdersPage.useMemo[pedidosFiltrados]"]);
            if (desde) {
                const d = new Date(desde).getTime();
                list = list.filter({
                    "OrdersPage.useMemo[pedidosFiltrados]": (p)=>new Date(p.created_at || p.fecha_pedido || Date.now()).getTime() >= d
                }["OrdersPage.useMemo[pedidosFiltrados]"]);
            }
            if (hasta) {
                const h = new Date(hasta).getTime();
                list = list.filter({
                    "OrdersPage.useMemo[pedidosFiltrados]": (p)=>new Date(p.created_at || p.fecha_pedido || Date.now()).getTime() <= h
                }["OrdersPage.useMemo[pedidosFiltrados]"]);
            }
            return list;
        }
    }["OrdersPage.useMemo[pedidosFiltrados]"], [
        pedidos,
        filtrosPed
    ]);
    const comprobantesFiltrados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrdersPage.useMemo[comprobantesFiltrados]": ()=>{
            let list = comprobantes.slice();
            const { busqueda, tipo, desde, hasta } = filtrosComp;
            if (busqueda) {
                const q = busqueda.toLowerCase();
                list = list.filter({
                    "OrdersPage.useMemo[comprobantesFiltrados]": (c)=>"".concat(c.serie, "-").concat(c.numero).toLowerCase().includes(q)
                }["OrdersPage.useMemo[comprobantesFiltrados]"]);
            }
            if (tipo) list = list.filter({
                "OrdersPage.useMemo[comprobantesFiltrados]": (c)=>(c.tipo || "").toLowerCase() === tipo.toLowerCase()
            }["OrdersPage.useMemo[comprobantesFiltrados]"]);
            if (desde) {
                const d = new Date(desde).getTime();
                list = list.filter({
                    "OrdersPage.useMemo[comprobantesFiltrados]": (c)=>new Date(c.created_at || Date.now()).getTime() >= d
                }["OrdersPage.useMemo[comprobantesFiltrados]"]);
            }
            if (hasta) {
                const h = new Date(hasta).getTime();
                list = list.filter({
                    "OrdersPage.useMemo[comprobantesFiltrados]": (c)=>new Date(c.created_at || Date.now()).getTime() <= h
                }["OrdersPage.useMemo[comprobantesFiltrados]"]);
            }
            return list;
        }
    }["OrdersPage.useMemo[comprobantesFiltrados]"], [
        comprobantes,
        filtrosComp
    ]);
    // Accesibilidad del modal: focus inicial y cierre por Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrdersPage.useEffect": ()=>{
            if (!imgModal.open) return;
            const onKeyDown = {
                "OrdersPage.useEffect.onKeyDown": (e)=>{
                    if (e.key === "Escape") {
                        setImgModal({
                            open: false
                        });
                    }
                }
            }["OrdersPage.useEffect.onKeyDown"];
            // Foco al botón cerrar
            const t = setTimeout({
                "OrdersPage.useEffect.t": ()=>{
                    var _imgModalCloseBtnRef_current;
                    return (_imgModalCloseBtnRef_current = imgModalCloseBtnRef.current) === null || _imgModalCloseBtnRef_current === void 0 ? void 0 : _imgModalCloseBtnRef_current.focus();
                }
            }["OrdersPage.useEffect.t"], 0);
            window.addEventListener("keydown", onKeyDown);
            return ({
                "OrdersPage.useEffect": ()=>{
                    var // Restaurar foco al disparador
                    _imgModalFocusEl_focus;
                    clearTimeout(t);
                    window.removeEventListener("keydown", onKeyDown);
                    imgModalFocusEl === null || imgModalFocusEl === void 0 ? void 0 : (_imgModalFocusEl_focus = imgModalFocusEl.focus) === null || _imgModalFocusEl_focus === void 0 ? void 0 : _imgModalFocusEl_focus.call(imgModalFocusEl);
                }
            })["OrdersPage.useEffect"];
        }
    }["OrdersPage.useEffect"], [
        imgModal.open,
        imgModalFocusEl
    ]);
    const authed = typeof isAuthenticated === "function" ? isAuthenticated() : !!isAuthenticated;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold mb-6",
                children: "Historial de compras"
            }, void 0, false, {
                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            !authed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 rounded border bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Debes iniciar sesión para ver tus pedidos."
                }, void 0, false, {
                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                    lineNumber: 224,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex rounded border overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-2 ".concat(tab === "pedidos" ? "bg-gray-800 text-white" : "bg-white"),
                                    onClick: ()=>setTab("pedidos"),
                                    children: "Pedidos"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-2 ".concat(tab === "comprobantes" ? "bg-gray-800 text-white" : "bg-white"),
                                    onClick: ()=>setTab("comprobantes"),
                                    children: "Comprobantes"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    tab === "pedidos" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 grid grid-cols-1 md:grid-cols-4 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Búsqueda"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "w-full rounded border px-3 py-2 text-sm",
                                                placeholder: "ID o estado",
                                                value: filtrosPed.busqueda,
                                                onChange: (e)=>setFiltrosPed((prev)=>({
                                                            ...prev,
                                                            busqueda: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Estado"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full rounded border px-3 py-2 text-sm",
                                                value: filtrosPed.estado,
                                                onChange: (e)=>setFiltrosPed((prev)=>({
                                                            ...prev,
                                                            estado: e.target.value
                                                        })),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Todos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 21
                                                    }, this),
                                                    estadosDisponibles.map((es)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: es,
                                                            children: es
                                                        }, es, false, {
                                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Desde"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                className: "w-full rounded border px-3 py-2 text-sm",
                                                value: filtrosPed.desde,
                                                onChange: (e)=>setFiltrosPed((prev)=>({
                                                            ...prev,
                                                            desde: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Hasta"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                className: "w-full rounded border px-3 py-2 text-sm",
                                                value: filtrosPed.hasta,
                                                onChange: (e)=>setFiltrosPed((prev)=>({
                                                            ...prev,
                                                            hasta: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                lineNumber: 248,
                                columnNumber: 15
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Cargando..."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                lineNumber: 282,
                                columnNumber: 17
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-red-100 text-red-700 rounded",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                lineNumber: 284,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    pedidosFiltrados.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-600",
                                        children: "Aún no tienes pedidos."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 21
                                    }, this) : pedidosFiltrados.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded p-4 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Pedido #",
                                                                p.id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-600",
                                                            children: new Date(p.created_at || p.fecha_pedido || Date.now()).toLocaleString("es-ES")
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm mt-1",
                                                            children: [
                                                                "Estado: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center px-2 py-0.5 rounded bg-gray-100",
                                                                    children: p.estado
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold",
                                                            children: currency(Number(p.total || 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "px-3 py-1.5 rounded border hover:bg-gray-50",
                                                            onClick: ()=>abrirDetalles(p.id),
                                                            children: "Ver detalles"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 27
                                                        }, this),
                                                        p.estado !== "cancelado" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "px-3 py-1.5 rounded bg-red-600 text-white",
                                                            onClick: ()=>cancelarPedido(p.id),
                                                            children: "Cancelar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, p.id, true, {
                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 23
                                        }, this)),
                                    !filtrosPed.busqueda && !filtrosPed.estado && !filtrosPed.desde && !filtrosPed.hasta && totalPaginas > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: pagina <= 1,
                                                className: "px-3 py-1.5 rounded border disabled:opacity-50",
                                                onClick: ()=>setPagina((p)=>Math.max(1, p - 1)),
                                                children: "Anterior"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-700",
                                                children: [
                                                    "Página ",
                                                    pagina,
                                                    " de ",
                                                    totalPaginas
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: pagina >= totalPaginas,
                                                className: "px-3 py-1.5 rounded border disabled:opacity-50",
                                                onClick: ()=>setPagina((p)=>Math.min(totalPaginas, p + 1)),
                                                children: "Siguiente"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                lineNumber: 286,
                                columnNumber: 17
                            }, this),
                            modalOpen && selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded shadow-lg w-full max-w-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border-b flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold",
                                                    children: [
                                                        "Pedido #",
                                                        (_selected_pedido = selected.pedido) === null || _selected_pedido === void 0 ? void 0 : _selected_pedido.id
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "px-2 py-1 rounded border",
                                                    onClick: ()=>setModalOpen(false),
                                                    children: "Cerrar"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm",
                                                    children: [
                                                        "Estado: ",
                                                        (_selected_pedido1 = selected.pedido) === null || _selected_pedido1 === void 0 ? void 0 : _selected_pedido1.estado
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm",
                                                    children: [
                                                        "Total: ",
                                                        currency(Number(((_selected_pedido2 = selected.pedido) === null || _selected_pedido2 === void 0 ? void 0 : _selected_pedido2.total) || 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm",
                                                    children: [
                                                        "Dirección: ",
                                                        ((_selected_pedido3 = selected.pedido) === null || _selected_pedido3 === void 0 ? void 0 : _selected_pedido3.direccion_entrega) || "—"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm",
                                                    children: [
                                                        "Notas: ",
                                                        ((_selected_pedido4 = selected.pedido) === null || _selected_pedido4 === void 0 ? void 0 : _selected_pedido4.notas) || "—"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2 font-medium border-b",
                                                            children: "Productos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            children: selected.detalles.map((d, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "p-2 flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: d.producto_nombre
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                                                    lineNumber: 363,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-gray-600",
                                                                                    children: [
                                                                                        "x",
                                                                                        d.cantidad,
                                                                                        " · ",
                                                                                        currency(d.precio_unitario)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                                                    lineNumber: 364,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                                            lineNumber: 362,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold",
                                                                            children: currency(d.subtotal)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                                            lineNumber: 366,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                                    lineNumber: 361,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                lineNumber: 346,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                        lineNumber: 246,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 grid grid-cols-1 md:grid-cols-4 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Búsqueda"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "w-full rounded border px-3 py-2 text-sm",
                                                placeholder: "Serie o número",
                                                value: filtrosComp.busqueda,
                                                onChange: (e)=>setFiltrosComp((prev)=>({
                                                            ...prev,
                                                            busqueda: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Tipo"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 391,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full rounded border px-3 py-2 text-sm",
                                                value: filtrosComp.tipo,
                                                onChange: (e)=>setFiltrosComp((prev)=>({
                                                            ...prev,
                                                            tipo: e.target.value
                                                        })),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Todos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "boleta",
                                                        children: "Boleta"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "factura",
                                                        children: "Factura"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Desde"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                className: "w-full rounded border px-3 py-2 text-sm",
                                                value: filtrosComp.desde,
                                                onChange: (e)=>setFiltrosComp((prev)=>({
                                                            ...prev,
                                                            desde: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 402,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Hasta"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 407,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                className: "w-full rounded border px-3 py-2 text-sm",
                                                value: filtrosComp.hasta,
                                                onChange: (e)=>setFiltrosComp((prev)=>({
                                                            ...prev,
                                                            hasta: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 406,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                lineNumber: 379,
                                columnNumber: 15
                            }, this),
                            comprobantes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600",
                                children: "No hay comprobantes disponibles."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                lineNumber: 412,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: comprobantesFiltrados.map((c, idx)=>{
                                    var _c_tipo_toUpperCase, _c_tipo, _c_archivos, _c_archivos1, _c_archivos2;
                                    var _c_tipo_toUpperCase1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded p-3 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium",
                                                        children: [
                                                            (_c_tipo_toUpperCase1 = (_c_tipo = c.tipo) === null || _c_tipo === void 0 ? void 0 : (_c_tipo_toUpperCase = _c_tipo.toUpperCase) === null || _c_tipo_toUpperCase === void 0 ? void 0 : _c_tipo_toUpperCase.call(_c_tipo)) !== null && _c_tipo_toUpperCase1 !== void 0 ? _c_tipo_toUpperCase1 : c.tipo,
                                                            " ",
                                                            c.serie,
                                                            "-",
                                                            c.numero
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: [
                                                            "Emitido: ",
                                                            new Date(c.created_at || Date.now()).toLocaleString("es-ES")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row sm:items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold",
                                                        children: currency(Number(c.total || 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 25
                                                    }, this),
                                                    ((_c_archivos = c.archivos) === null || _c_archivos === void 0 ? void 0 : _c_archivos.pdf) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "px-3 py-1.5 rounded border hover:bg-gray-50",
                                                                onClick: (e)=>{
                                                                    setPdfModalFocusEl(e.currentTarget);
                                                                    setPdfModal({
                                                                        open: true,
                                                                        src: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL || "").concat(c.archivos.pdf),
                                                                        titulo: "".concat(c.tipo, " ").concat(c.serie, "-").concat(c.numero)
                                                                    });
                                                                },
                                                                children: "Ver PDF"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL || "").concat(c.archivos.pdf),
                                                                download: true,
                                                                className: "px-3 py-1.5 rounded border hover:bg-gray-50",
                                                                children: "Descargar PDF"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    ((_c_archivos1 = c.archivos) === null || _c_archivos1 === void 0 ? void 0 : _c_archivos1.xml) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL || "").concat(c.archivos.xml),
                                                        download: true,
                                                        className: "px-3 py-1.5 rounded border hover:bg-gray-50",
                                                        children: "Descargar XML"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 27
                                                    }, this),
                                                    ((_c_archivos2 = c.archivos) === null || _c_archivos2 === void 0 ? void 0 : _c_archivos2.img) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "px-3 py-1.5 rounded border hover:bg-gray-50",
                                                        onClick: (e)=>{
                                                            setImgModalFocusEl(e.currentTarget);
                                                            setImgModal({
                                                                open: true,
                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$src$2f$utils$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL || "").concat(c.archivos.img), {
                                                                    width: 1024
                                                                }),
                                                                titulo: "".concat(c.tipo, " ").concat(c.serie, "-").concat(c.numero)
                                                            });
                                                        },
                                                        children: "Ver imagen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 425,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 416,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                lineNumber: 414,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: imgModal.open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "fixed inset-0 z-[1100] flex items-center justify-center bg-black/60",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        role: "dialog",
                                        "aria-modal": "true",
                                        "aria-label": "Imagen del comprobante",
                                        className: "bg-white rounded-lg shadow-xl max-w-3xl w-full overflow-hidden",
                                        initial: {
                                            scale: 0.95,
                                            y: 8
                                        },
                                        animate: {
                                            scale: 1,
                                            y: 0
                                        },
                                        exit: {
                                            scale: 0.95,
                                            y: -8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 border-b flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold",
                                                        children: imgModal.titulo || "Comprobante"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        ref: imgModalCloseBtnRef,
                                                        className: "px-2 py-1 rounded border",
                                                        onClick: ()=>setImgModal({
                                                                open: false
                                                            }),
                                                        children: "Cerrar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 478,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: imgModal.src,
                                                    alt: imgModal.titulo || "Comprobante",
                                                    className: "w-full h-auto object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 482,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                lineNumber: 474,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: pdfModal.open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "fixed inset-0 z-[1150] flex items-center justify-center bg-black/60",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        role: "dialog",
                                        "aria-modal": "true",
                                        "aria-label": "PDF del comprobante",
                                        className: "bg-white rounded-lg shadow-xl max-w-4xl w-full overflow-hidden",
                                        initial: {
                                            scale: 0.95,
                                            y: 8
                                        },
                                        animate: {
                                            scale: 1,
                                            y: 0
                                        },
                                        exit: {
                                            scale: 0.95,
                                            y: -8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 border-b flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold",
                                                        children: pdfModal.titulo || "Comprobante (PDF)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        ref: pdfModalCloseBtnRef,
                                                        className: "px-2 py-1 rounded border",
                                                        onClick: ()=>setPdfModal({
                                                                open: false
                                                            }),
                                                        children: "Cerrar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 496,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                        src: pdfModal.src,
                                                        title: pdfModal.titulo || "Comprobante PDF",
                                                        className: "w-full h-[70vh]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 flex items-center gap-2",
                                                        children: pdfModal.src && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: pdfModal.src,
                                                            download: true,
                                                            className: "px-3 py-1.5 rounded border hover:bg-gray-50",
                                                            children: "Descargar PDF"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                                lineNumber: 500,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                        lineNumber: 495,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                    lineNumber: 494,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                                lineNumber: 492,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
                        lineNumber: 377,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/deliweb/frontend/src/app/orders/page.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
_s(OrdersPage, "BlDk3iWNYVRAQBN781qwt1t1wrg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$deliweb$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = OrdersPage;
var _c;
__turbopack_context__.k.register(_c, "OrdersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_deliweb_frontend_src_app_orders_page_tsx_1a1d0fea._.js.map