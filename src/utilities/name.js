"use strict";

export function isSVGTagName(tagName) {
  return svgTagNames.includes(tagName);
}

export function isSVGAttributeName(attributeName) {
  return svgAttributeNames.includes(attributeName);
}

export function isHTMLAttributeName(attributeName) {
  return htmlAttributeNames.includes(attributeName);
}

const svgTagNames = [
        "altGlyph", "animate", "animateColor", "animateMotion", "animateTransform", "animation", "audio",
        "circle", "clipPath", "color-profile", "cursor",
        "defs", "desc", "discard",
        "ellipse",
        "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-uri", "foreignObject",
        "g", "glyph", "glyphRef",
        "handler", "hatch", "hatchpath", "hkern",
        "image", "line", "linearGradient",
        "listener",
        "marker", "mask", "mesh", "meshgradient", "meshpatch", "meshrow", "metadata", "missing-glyph", "mpath",
        "path", "pattern", "polygon", "polyline", "prefetch",
        "radialGradient", "rect",
        "script", "set", "solidcolor", "stop", "style", "svg", "switch", "symbol",
        "tbreak", "text", "textArea", "textPath", "title", "tref", "tspan",
        "unknown", "use",
        "video", "view", "vkern"
      ],
      svgAttributeNames = [
        "accent-height", "accumulate", "additive", "alignment-baseline", "alphabetic", "amplitude", "arabic-form", "ascent", "attributeName", "attributeType", "azimuth",
        "bandwidth", "baseFrequency", "baseProfile", "baseline-shift", "bbox", "begin", "bias", "by",
        "calcMode", "cap-height", "clip", "className", "clip-path", "clip-rule", "clipPathUnits", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "contentScriptType", "contentStyleType", "crossorigin", "cursor", "cx", "cy",
        "d", "defaultAction", "descent", "diffuseConstant", "direction", "display", "divisor", "dominant-baseline", "download", "dur", "dx", "dy",
        "edgeMode", "editable", "elevation", "enable-background", "end", "event", "exponent", "externalResourcesRequired",
        "fill", "fill-opacity", "fill-rule", "filter", "filterRes", "filterUnits", "flood-color", "flood-opacity", "focusHighlight", "focusable", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "format", "fr", "from", "fx", "fy",
        "g1", "g2", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "glyphRef", "gradientTransform", "gradientUnits",
        "handler", "hanging", "hatchContentUnits", "hatchUnits", "height", "horiz-adv-x", "horiz-origin-x", "horiz-origin-y", "href", "hreflang",
        "id", "ideographic", "image-rendering", "in", "in2", "initialVisibility", "intercept",
        "k", "k1", "k2", "k3", "k4", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes",
        "lengthAdjust", "letter-spacing", "lighting-color", "limitingConeAngle", "local",
        "marker-end", "marker-mid", "marker-start", "markerHeight", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "max", "media", "mediaCharacterEncoding", "mediaContentEncodings", "mediaSize", "mediaTime", "method", "min", "mode",
        "name", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "numOctaves",
        "observer", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlay", "overline-position", "overline-thickness",
        "panose-1", "path", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "phase", "pitch", "playbackOrder", "playbackorder", "pointer-events", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "propagate",
        "r", "radius", "refX", "refY", "rendering-intent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "requiredFonts", "requiredFormats", "restart", "result", "rotate", "rx", "ry",
        "scale", "seed", "shape-rendering", "side", "slope", "snapshotTime", "spacing", "specularConstant", "specularExponent", "spreadMethod", "src", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "string", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "surfaceScale", "syncBehavior", "syncBehaviorDefault", "syncMaster", "syncTolerance", "syncToleranceDefault", "systemLanguage",
        "tableValues", "target", "targetX", "targetY", "text-anchor", "text-decoration", "text-rendering", "textLength", "timelineBegin", "timelinebegin", "title", "to", "transform", "transformBehavior", "type",
        "u1", "u2", "underline-position", "underline-thickness", "unicode", "unicode-bidi", "unicode-range", "units-per-em",
        "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "values", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "viewBox", "viewTarget", "visibility",
        "width", "widths", "word-spacing", "writing-mode",
        "x", "x-height", "x1", "x2", "xChannelSelector",
        "y", "y1", "y2", "yChannelSelector",
        "z", "zoomAndPan"
      ],
      htmlAttributeNames = [
        "accept", "acceptCharset", "accessKey", "action", "allow", "allowFullScreen", "allowTransparency", "alt", "async", "autoComplete", "autoFocus", "autoPlay",
        "capture", "cellPadding", "cellSpacing", "challenge", "charSet", "checked", "cite", "classID", "className", "colSpan", "cols", "content", "contentEditable", "contextMenu", "controls", "coords", "crossOrigin",
        "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable",
        "encType",
        "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder",
        "headers", "height", "hidden", "high", "href", "hrefLang", "htmlFor", "httpEquiv",
        "icon", "id", "inputMode", "integrity", "is",
        "keyParams", "keyType", "kind",
        "label", "lang", "list", "loop", "low",
        "manifest", "marginHeight", "marginWidth", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted",
        "name", "noValidate", "nonce",
        "open", "optimum",
        "pattern", "placeholder", "poster", "preload", "profile",
        "radioGroup", "readOnly", "rel", "required", "reversed", "role", "rowSpan", "rows",
        "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "spellCheck", "src", "srcDoc", "srcLang", "srcSet", "start", "step", "style", "summary",
        "tabIndex", "target", "title", "type",
        "useMap",
        "value",
        "width",
        "wmode",
        "wrap"
      ];
