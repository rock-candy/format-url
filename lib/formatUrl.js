"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const querystring_1 = require("querystring");
var scheme;
(function (scheme) {
    scheme["HTTP"] = "http";
    scheme["HTTPS"] = "https";
    scheme["WS"] = "ws";
    scheme["WSS"] = "wss";
    scheme["FTP"] = "ftp";
    scheme["FILE"] = "file";
    scheme["GOPHER"] = "gopher";
})(scheme || (scheme = {}));
function buildUrl({ protocol, host: hostname, path: pathname, query }) {
    return Object.assign(new URL('http://abc.def'), {
        protocol,
        hostname,
        pathname,
        search: querystring_1.stringify(query)
    }).toString();
}
exports.default = buildUrl;
