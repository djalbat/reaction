(() => {
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);

  // lib/reactClass.js
  var require_reactClass = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactClass;
      }
    });
    var ReactClass = class {
      constructor(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins) {
        this.render = render;
        if (getInitialState) {
          this.getInitialState = getInitialState;
        }
        if (getChildContext) {
          this.getChildContext = getChildContext;
        }
        if (componentDidMount) {
          this.componentDidMount = componentDidMount;
        }
        if (componentWillUnmount) {
          this.componentWillUnmount = componentWillUnmount;
        }
        this.mixins = mixins;
      }
      getInitialState() {
        return {};
      }
      getChildContext(context) {
        return context;
      }
      childContextSet(childContext) {
      }
      componentDidMount() {
      }
      componentWillUnmount() {
      }
      static create(object) {
        const {render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins} = object;
        return new ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins);
      }
    };
  });

  // lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get first() {
        return first;
      },
      get flatten() {
        return flatten;
      },
      get guarantee() {
        return guarantee;
      },
      get remaining() {
        return remaining;
      }
    });
    function first(array) {
      return array[0];
    }
    function flatten(array) {
      return array.reduce((array2, element) => {
        array2 = array2.concat(element);
        return array2;
      }, []);
    }
    function guarantee(arrayOrElement) {
      arrayOrElement = arrayOrElement || [];
      return Array.isArray(arrayOrElement) ? arrayOrElement : [
        arrayOrElement
      ];
    }
    function remaining(element, array) {
      if (element === null) {
        return array;
      }
      const index = indexOf(element, array);
      return array.slice(index + 1);
    }
    function indexOf(element, array) {
      let index = null;
      array.some((currentElement, currentElementIndex) => {
        if (currentElement === element) {
          index = currentElementIndex;
          return true;
        }
      });
      return index;
    }
  });

  // lib/virtualDOMElement.js
  var require_virtualDOMElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return VirtualDOMElement;
      }
    });
    var _array = require_array();
    var VirtualDOMElement = class {
      constructor(props) {
        this.props = props;
        this.parent = null;
        this.children = props.children;
      }
      getProps() {
        return this.props;
      }
      getParent() {
        return this.parent;
      }
      getChildren() {
        return this.children;
      }
      getFirstChild() {
        const firstChild = (0, _array.first)(this.children) || null;
        return firstChild;
      }
      mount(parent, children) {
        this.parent = parent;
        this.children = children;
      }
      unmount() {
        this.parent = null;
        this.children = null;
      }
    };
  });

  // lib/mixins/reactElement.js
  var require_reactElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    function on(eventType, handler) {
      const firstChild = this.getFirstChild();
      return firstChild.on(eventType, handler);
    }
    function off(eventType, handler) {
      const firstChild = this.getFirstChild();
      return firstChild.off(eventType, handler);
    }
    function setAttribute(name, value) {
      const firstChild = this.getFirstChild();
      return firstChild.setAttribute(name, value);
    }
    function getAttribute(name) {
      const firstChild = this.getFirstChild();
      return firstChild.getAttribute(name);
    }
    function clearAttribute(name) {
      const firstChild = this.getFirstChild();
      firstChild.clearAttribute(name);
    }
    function addAttribute(name, value) {
      const firstChild = this.getFirstChild();
      firstChild.addAttribute(name, value);
    }
    function removeAttribute(name) {
      const firstChild = this.getFirstChild();
      firstChild.removeAttribute(name);
    }
    function hasAttribute(name) {
      const firstChild = this.getFirstChild();
      return firstChild.hasAttribute(name);
    }
    function setClass(className) {
      const firstChild = this.getFirstChild();
      firstChild.setClass(className);
    }
    function addClass(className) {
      const firstChild = this.getFirstChild();
      firstChild.addClass(className);
    }
    function removeClass(className) {
      const firstChild = this.getFirstChild();
      firstChild.removeClass(className);
    }
    function toggleClass(className) {
      const firstChild = this.getFirstChild();
      firstChild.toggleClass(className);
    }
    function hasClass(className) {
      const firstChild = this.getFirstChild();
      return firstChild.hasClass(className);
    }
    function hasClasses(classNames) {
      const firstChild = this.getFirstChild();
      return firstChild.hasClasses(classNames);
    }
    function clearClasses() {
      const firstChild = this.getFirstChild();
      firstChild.clearClasses();
    }
    function getTagName() {
      return null;
    }
    function getStyle(name) {
      const firstChild = this.getFirstChild();
      return firstChild.getStyle(name);
    }
    function setStyle(name, value) {
      const firstChild = this.getFirstChild();
      firstChild.setStyle(name, value);
    }
    var _default = {
      on,
      off,
      setAttribute,
      getAttribute,
      clearAttribute,
      addAttribute,
      removeAttribute,
      hasAttribute,
      setClass,
      addClass,
      removeClass,
      toggleClass,
      hasClass,
      hasClasses,
      clearClasses,
      getTagName,
      getStyle,
      setStyle
    };
  });

  // lib/virtualDOM/react.js
  var require_react = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _virtualDOMElement = /* @__PURE__ */ _interop_require_default(require_virtualDOMElement());
    var _reactElement = /* @__PURE__ */ _interop_require_default(require_reactElement());
    var _array = require_array();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactElement = class extends _virtualDOMElement.default {
      constructor(props) {
        super(props);
        this.state = null;
        this.context = null;
      }
      getState() {
        return this.state;
      }
      getContext() {
        return this.context;
      }
      getDOMElement() {
        return null;
      }
      getChildReference() {
        const parent = this.getParent(), child = this;
        return reference(parent, child);
      }
      setState(state) {
        this.state = state;
        this.redraw();
      }
      updateState(state) {
        const oldState = this.state, newState = state;
        this.state = Object.assign(oldState, newState);
        this.redraw();
      }
      setInitialState(initialState) {
        this.state = initialState;
      }
      forceUpdate(update) {
        this.redraw(update);
      }
      mount(parent, reference2, context) {
        this.context = context;
        const childContext = this.getChildContext(context) || null;
        const update = null, children = (0, _array.guarantee)(this.render(update, this));
        super.mount(parent, children);
        children.forEach((child) => {
          const childParent = this, childReference = reference2;
          child.mount(childParent, childReference, childContext);
        });
        this.childContextSet(childContext);
        this.componentDidMount();
      }
      unmount() {
        this.componentWillUnmount();
        const children = this.getChildren();
        children.forEach((child) => {
          child.unmount();
        });
        super.unmount();
      }
      redraw(update) {
        const childContext = this.getChildContext(this.context) || null;
        this.children.forEach((child) => {
          child.unmount();
        });
        this.children = (0, _array.guarantee)(this.render(update, this));
        this.children.forEach((child) => {
          const childParent = this, childReference = this.getChildReference();
          child.mount(childParent, childReference, childContext);
        });
        this.childContextSet(childContext);
      }
    };
    Object.assign(ReactElement.prototype, _reactElement.default);
    var _default = ReactElement;
    function reference(parent, child) {
      let reference2 = findReference(parent, child), parentDOMElement = parent.getDOMElement();
      while (reference2 === null && parentDOMElement === null) {
        child = parent;
        parent = parent.getParent();
        reference2 = findReference(parent, child);
        parentDOMElement = parent.getDOMElement();
      }
      return reference2;
    }
    function findReference(parent, child) {
      const children = parent.getChildren(), remainingChildren = (0, _array.remaining)(child, children);
      return remainingChildren.reduce((reference2, remainingChild) => {
        if (reference2 === null) {
          const remainingChildDOMElement = remainingChild.getDOMElement();
          if (remainingChildDOMElement !== null) {
            reference2 = remainingChild;
          } else {
            child = null;
            parent = remainingChild;
            reference2 = findReference(parent, child);
          }
        }
        return reference2;
      }, null);
    }
  });

  // lib/reactComponent.js
  var require_reactComponent = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactComponent;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactComponent = class extends _react.default {
      constructor(props) {
        super(props);
        const initialState = this.getInitialState();
        this.setInitialState(initialState);
      }
      getInitialState() {
        return {};
      }
      getChildContext(context) {
        return context;
      }
      childContextSet(childContext) {
      }
      componentDidMount() {
      }
      componentWillUnmount() {
      }
    };
  });

  // lib/virtualDOM/container.js
  var require_container = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ContainerElement;
      }
    });
    var _virtualDOMElement = /* @__PURE__ */ _interop_require_default(require_virtualDOMElement());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ContainerElement = class extends _virtualDOMElement.default {
      constructor(props, domElement) {
        super(props);
        this.domElement = domElement;
      }
      getDOMElement() {
        return this.domElement;
      }
      mount(parent, reference) {
        const children = this.getChildren();
        super.mount(parent, children);
        parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
        return this.domElement;
      }
      unmount() {
        this.domElement.parentElement.removeChild(this.domElement);
        super.unmount();
      }
      static fromDOMElement(domElement) {
        const children = [], props = {
          children
        }, virtualDOMNode = new ContainerElement(props, domElement);
        return virtualDOMNode;
      }
    };
    function parentDOMElement(parent) {
      let parentDOMElement2 = parent.getDOMElement();
      while (parentDOMElement2 === null) {
        parent = parent.getParent();
        parentDOMElement2 = parent.getDOMElement();
      }
      return parentDOMElement2;
    }
    function referenceDOMElement(reference) {
      const referenceDOMElement2 = reference !== null ? reference.getDOMElement() : null;
      return referenceDOMElement2;
    }
  });

  // lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BOOLEAN() {
        return BOOLEAN;
      },
      get CLASS() {
        return CLASS;
      },
      get CLASS_NAME() {
        return CLASS_NAME;
      },
      get EMPTY_STRING() {
        return EMPTY_STRING;
      },
      get FOR() {
        return FOR;
      },
      get FUNCTION() {
        return FUNCTION;
      },
      get HTML_FOR() {
        return HTML_FOR;
      },
      get HTTP_WWW_W3_ORG_2000_SVG() {
        return HTTP_WWW_W3_ORG_2000_SVG;
      },
      get OBJECT() {
        return OBJECT;
      },
      get REF() {
        return REF;
      },
      get STRING() {
        return STRING;
      }
    });
    var FOR = "for";
    var REF = "ref";
    var CLASS = "class";
    var STRING = "string";
    var OBJECT = "object";
    var BOOLEAN = "boolean";
    var FUNCTION = "function";
    var HTML_FOR = "htmlFor";
    var CLASS_NAME = "className";
    var EMPTY_STRING = "";
    var HTTP_WWW_W3_ORG_2000_SVG = "http://www.w3.org/2000/svg";
  });

  // lib/mixins/containerElement.js
  var require_containerElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _constants = require_constants();
    function on(eventType, handler) {
      this.domElement.addEventListener(eventType, handler);
    }
    function off(eventType, handler) {
      this.domElement.removeEventListener(eventType, handler);
    }
    function setAttribute(name, value) {
      if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
      }
      if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
      }
      if (typeof value === _constants.OBJECT) {
        const keys = Object.keys(value);
        keys.forEach((key) => {
          this.domElement[name][key] = value[key];
        });
      } else if (typeof value === _constants.BOOLEAN) {
        if (value) {
          value = name;
          this.domElement.setAttribute(name, value);
        }
      } else {
        this.domElement.setAttribute(name, value);
      }
    }
    function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
    function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
    function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
    function removeAttribute(name) {
      this.domElement.removeAttribute(name);
    }
    function hasAttribute(name) {
      return this.domElement.hasAttribute(name);
    }
    function setClass(className) {
      this.domElement.className = className;
    }
    function addClass(className) {
      this.domElement.classList.add(className);
    }
    function removeClass(className) {
      this.domElement.classList.remove(className);
    }
    function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
    function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
    function hasClasses(classNames) {
      return classNames.every((className) => {
        if (this.hasClass(className)) {
          return true;
        }
      });
    }
    function clearClasses() {
      this.domElement.className = _constants.EMPTY_STRING;
    }
    function getTagName() {
      return this.domElement.tagName;
    }
    function getStyle(name) {
      return this.domElement.style[name];
    }
    function setStyle(name, value) {
      this.domElement.style[name] = value;
    }
    var _default = {
      on,
      off,
      setAttribute,
      getAttribute,
      clearAttribute,
      addAttribute,
      removeAttribute,
      hasAttribute,
      setClass,
      addClass,
      removeClass,
      toggleClass,
      hasClass,
      hasClasses,
      clearClasses,
      getTagName,
      getStyle,
      setStyle
    };
  });

  // lib/virtualDOM/container/element.js
  var require_element = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _container = /* @__PURE__ */ _interop_require_default(require_container());
    var _containerElement = /* @__PURE__ */ _interop_require_default(require_containerElement());
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Element = class extends _container.default {
      mount(parent, reference, context) {
        super.mount(parent, reference);
        const childParent = this, childReference = null, childContext = context, children = this.getChildren();
        children.forEach((child) => {
          child.mount(childParent, childReference, childContext);
        });
        this.applyProps();
      }
      unmount(context) {
        const childContext = context, children = this.getChildren();
        children.forEach((child) => {
          child.unmount(childContext);
        });
        super.unmount();
      }
      applyProps() {
        const names = Object.keys(this.props);
        names.forEach((name) => {
          const value = this.props[name];
          if (false) {
          } else if (this.isHandlerName(name)) {
            this.setHandler(name, value);
          } else if (this.isAttributeName(name)) {
            this.setAttribute(name, value);
          } else if (name === _constants.REF) {
            const callback = value;
            callback(this.domElement);
          }
        });
      }
      setHandler(name, value) {
        const eventType = name.substr(2).toLowerCase(), handler = value;
        this.domElement.addEventListener(eventType, handler);
      }
      isHandlerName(name) {
        return /^on/.test(name);
      }
    };
    Object.assign(Element.prototype, _containerElement.default);
    var _default = Element;
  });

  // lib/utilities/name.js
  var require_name = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get isHTMLAttributeName() {
        return isHTMLAttributeName;
      },
      get isSVGAttributeName() {
        return isSVGAttributeName;
      },
      get isSVGTagName() {
        return isSVGTagName;
      }
    });
    function isSVGTagName(tagName) {
      return svgTagNames.includes(tagName);
    }
    function isSVGAttributeName(attributeName) {
      return svgAttributeNames.includes(attributeName);
    }
    function isHTMLAttributeName(attributeName) {
      return htmlAttributeNames.includes(attributeName);
    }
    var svgTagNames = [
      "altGlyph",
      "animate",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "animation",
      "audio",
      "circle",
      "clipPath",
      "color-profile",
      "cursor",
      "defs",
      "desc",
      "discard",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "font",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-uri",
      "foreignObject",
      "g",
      "glyph",
      "glyphRef",
      "handler",
      "hatch",
      "hatchpath",
      "hkern",
      "image",
      "line",
      "linearGradient",
      "listener",
      "marker",
      "mask",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "metadata",
      "missing-glyph",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "prefetch",
      "radialGradient",
      "rect",
      "script",
      "set",
      "solidcolor",
      "stop",
      "style",
      "svg",
      "switch",
      "symbol",
      "tbreak",
      "text",
      "textArea",
      "textPath",
      "title",
      "tref",
      "tspan",
      "unknown",
      "use",
      "video",
      "view",
      "vkern"
    ];
    var svgAttributeNames = [
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "alphabetic",
      "amplitude",
      "arabic-form",
      "ascent",
      "attributeName",
      "attributeType",
      "azimuth",
      "bandwidth",
      "baseFrequency",
      "baseProfile",
      "baseline-shift",
      "bbox",
      "begin",
      "bias",
      "by",
      "calcMode",
      "cap-height",
      "clip",
      "className",
      "clip-path",
      "clip-rule",
      "clipPathUnits",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "contentScriptType",
      "contentStyleType",
      "crossorigin",
      "cursor",
      "cx",
      "cy",
      "d",
      "defaultAction",
      "descent",
      "diffuseConstant",
      "direction",
      "display",
      "divisor",
      "dominant-baseline",
      "download",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "editable",
      "elevation",
      "enable-background",
      "end",
      "event",
      "exponent",
      "externalResourcesRequired",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterRes",
      "filterUnits",
      "flood-color",
      "flood-opacity",
      "focusHighlight",
      "focusable",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "format",
      "fr",
      "from",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "handler",
      "hanging",
      "hatchContentUnits",
      "hatchUnits",
      "height",
      "horiz-adv-x",
      "horiz-origin-x",
      "horiz-origin-y",
      "href",
      "hreflang",
      "id",
      "ideographic",
      "image-rendering",
      "in",
      "in2",
      "initialVisibility",
      "intercept",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kernelMatrix",
      "kernelUnitLength",
      "kerning",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "letter-spacing",
      "lighting-color",
      "limitingConeAngle",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "mask",
      "maskContentUnits",
      "maskUnits",
      "mathematical",
      "max",
      "media",
      "mediaCharacterEncoding",
      "mediaContentEncodings",
      "mediaSize",
      "mediaTime",
      "method",
      "min",
      "mode",
      "name",
      "nav-down",
      "nav-down-left",
      "nav-down-right",
      "nav-left",
      "nav-next",
      "nav-prev",
      "nav-right",
      "nav-up",
      "nav-up-left",
      "nav-up-right",
      "numOctaves",
      "observer",
      "offset",
      "opacity",
      "operator",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "overlay",
      "overline-position",
      "overline-thickness",
      "panose-1",
      "path",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "phase",
      "pitch",
      "playbackOrder",
      "playbackorder",
      "pointer-events",
      "points",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "propagate",
      "r",
      "radius",
      "refX",
      "refY",
      "rendering-intent",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "requiredFonts",
      "requiredFormats",
      "restart",
      "result",
      "rotate",
      "rx",
      "ry",
      "scale",
      "seed",
      "shape-rendering",
      "side",
      "slope",
      "snapshotTime",
      "spacing",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "src",
      "startOffset",
      "stdDeviation",
      "stemh",
      "stemv",
      "stitchTiles",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "string",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "style",
      "surfaceScale",
      "syncBehavior",
      "syncBehaviorDefault",
      "syncMaster",
      "syncTolerance",
      "syncToleranceDefault",
      "systemLanguage",
      "tableValues",
      "target",
      "targetX",
      "targetY",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textLength",
      "timelineBegin",
      "timelinebegin",
      "title",
      "to",
      "transform",
      "transformBehavior",
      "type",
      "u1",
      "u2",
      "underline-position",
      "underline-thickness",
      "unicode",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "values",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "viewBox",
      "viewTarget",
      "visibility",
      "width",
      "widths",
      "word-spacing",
      "writing-mode",
      "x",
      "x-height",
      "x1",
      "x2",
      "xChannelSelector",
      "y",
      "y1",
      "y2",
      "yChannelSelector",
      "z",
      "zoomAndPan"
    ];
    var htmlAttributeNames = [
      "accept",
      "acceptCharset",
      "accessKey",
      "action",
      "allow",
      "allowFullScreen",
      "allowTransparency",
      "alt",
      "async",
      "autoComplete",
      "autoFocus",
      "autoPlay",
      "capture",
      "cellPadding",
      "cellSpacing",
      "challenge",
      "charSet",
      "checked",
      "cite",
      "classID",
      "className",
      "colSpan",
      "cols",
      "content",
      "contentEditable",
      "contextMenu",
      "controls",
      "coords",
      "crossOrigin",
      "data",
      "dateTime",
      "default",
      "defer",
      "dir",
      "disabled",
      "download",
      "draggable",
      "encType",
      "form",
      "formAction",
      "formEncType",
      "formMethod",
      "formNoValidate",
      "formTarget",
      "frameBorder",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hrefLang",
      "htmlFor",
      "httpEquiv",
      "icon",
      "id",
      "inputMode",
      "integrity",
      "is",
      "keyParams",
      "keyType",
      "kind",
      "label",
      "lang",
      "list",
      "loop",
      "low",
      "manifest",
      "marginHeight",
      "marginWidth",
      "max",
      "maxLength",
      "media",
      "mediaGroup",
      "method",
      "min",
      "minLength",
      "multiple",
      "muted",
      "name",
      "noValidate",
      "nonce",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "poster",
      "preload",
      "profile",
      "radioGroup",
      "readOnly",
      "rel",
      "required",
      "reversed",
      "role",
      "rowSpan",
      "rows",
      "sandbox",
      "scope",
      "scoped",
      "scrolling",
      "seamless",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "spellCheck",
      "src",
      "srcDoc",
      "srcLang",
      "srcSet",
      "start",
      "step",
      "style",
      "summary",
      "tabIndex",
      "target",
      "title",
      "type",
      "useMap",
      "value",
      "width",
      "wmode",
      "wrap"
    ];
  });

  // lib/virtualDOM/container/element/svg.js
  var require_svg = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return SVGElement;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element());
    var _name = require_name();
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var SVGElement = class extends _element.default {
      constructor(tagName, props) {
        const domElement = document.createElementNS(_constants.HTTP_WWW_W3_ORG_2000_SVG, tagName);
        super(props, domElement);
      }
      isAttributeName(name) {
        return (0, _name.isSVGAttributeName)(name);
      }
    };
  });

  // lib/virtualDOM/container/element/html.js
  var require_html = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return HTMLElement;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element());
    var _name = require_name();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var HTMLElement = class extends _element.default {
      constructor(tagName, props) {
        const domElement = document.createElement(tagName);
        super(props, domElement);
      }
      isAttributeName(name) {
        return (0, _name.isHTMLAttributeName)(name);
      }
    };
  });

  // lib/virtualDOM/react/class.js
  var require_class = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactClassElement;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactClassElement = class extends _react.default {
      constructor(reactClass, props) {
        super(props);
        this.reactClass = reactClass;
        const initialState = this.getInitialState();
        this.setInitialState(initialState);
      }
      render(update) {
        return this.reactClass.render.call(this, update, this);
      }
      getInitialState() {
        return this.reactClass.getInitialState.call(this);
      }
      getChildContext(context) {
        return this.reactClass.getChildContext.call(this, context);
      }
      childContextSet(childContext) {
        this.reactClass.childContextSet.call(this, childContext);
      }
      componentDidMount() {
        this.reactClass.componentDidMount.call(this);
      }
      componentWillUnmount() {
        this.reactClass.componentWillUnmount.call(this);
      }
    };
  });

  // lib/virtualDOM/react/function.js
  var require_function = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactFunctionElement;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactFunctionElement = class extends _react.default {
      constructor(reactFunction, props) {
        super(props);
        this.reactFunction = reactFunction;
      }
      render(update) {
        return this.reactFunction(this.props, this.context, update, this);
      }
      getInitialState() {
      }
      getChildContext(context) {
        return context;
      }
      childContextSet(childContext) {
      }
      componentDidMount() {
      }
      componentWillUnmount() {
      }
    };
  });

  // lib/virtualDOM/container/textElement.js
  var require_textElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return TextElement;
      }
    });
    var _container = /* @__PURE__ */ _interop_require_default(require_container());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TextElement = class extends _container.default {
      constructor(text) {
        const domElement = document.createTextNode(text), children = [], props = {
          children
        };
        super(props, domElement);
      }
      mount(parent, reference, context) {
        super.mount(parent, reference);
      }
      unmount(context) {
        super.unmount();
      }
      getText() {
        const nodeValue = this.domElement.nodeValue, text = nodeValue;
        return text;
      }
      setText(text) {
        const nodeValue = text;
        this.domElement.nodeValue = nodeValue;
      }
    };
  });

  // lib/utilities/sanitiise.js
  var require_sanitiise = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get removeFalseyChildren() {
        return removeFalseyChildren;
      },
      get replaceStringsWithTextChildren() {
        return replaceStringsWithTextChildren;
      }
    });
    var _textElement = /* @__PURE__ */ _interop_require_default(require_textElement());
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function removeFalseyChildren(children) {
      children = children.reduce((children2, child) => {
        if (child) {
          children2.push(child);
        }
        return children2;
      }, []);
      return children;
    }
    function replaceStringsWithTextChildren(children) {
      children = children.map((child) => {
        if (typeof child === _constants.STRING) {
          const text = child, textElement = new _textElement.default(text);
          child = textElement;
        }
        return child;
      });
      return children;
    }
  });

  // lib/react.js
  var require_react2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _reactClass = /* @__PURE__ */ _interop_require_default(require_reactClass());
    var _reactComponent = /* @__PURE__ */ _interop_require_default(require_reactComponent());
    var _svg = /* @__PURE__ */ _interop_require_default(require_svg());
    var _html = /* @__PURE__ */ _interop_require_default(require_html());
    var _class = /* @__PURE__ */ _interop_require_default(require_class());
    var _function = /* @__PURE__ */ _interop_require_default(require_function());
    var _array = require_array();
    var _name = require_name();
    var _constants = require_constants();
    var _sanitiise = require_sanitiise();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function createClass(object) {
      return _reactClass.default.create(object);
    }
    function createElement(firstArgument, properties, ...children) {
      let element = null;
      if (firstArgument) {
        children = sanitiseChildren(children);
        const props = Object.assign({}, properties, {
          children
        });
        if (false) {
        } else if (typeof firstArgument === _constants.STRING) {
          const tagName = firstArgument;
          element = (0, _name.isSVGTagName)(tagName) ? new _svg.default(tagName, props) : new _html.default(tagName, props);
        } else if (_reactClass.default.isPrototypeOf(firstArgument)) {
          const reactClass = firstArgument, reactClassElement = new _class.default(reactClass, props);
          element = reactClassElement;
          const {mixins} = reactClass;
          assignMixins(mixins, element);
        } else if (_reactComponent.default.isPrototypeOf(firstArgument)) {
          const ReactComponentSubClass = firstArgument, reactComponent = new ReactComponentSubClass(props);
          element = reactComponent;
          assignReactComponentMixins(ReactComponentSubClass, element);
        } else if (typeof firstArgument === _constants.FUNCTION) {
          const reactFunction = firstArgument, reactFunctionElement = new _function.default(reactFunction, props);
          element = reactFunctionElement;
        }
      }
      return element;
    }
    var Component = _reactComponent.default;
    var React = {
      Component,
      createClass,
      createElement
    };
    var _default = React;
    function sanitiseChildren(children) {
      children = (0, _array.flatten)(children);
      children = (0, _sanitiise.removeFalseyChildren)(children);
      children = (0, _sanitiise.replaceStringsWithTextChildren)(children);
      return children;
    }
    function assignReactComponentMixins(ReactComponentSubClass, element) {
      const {mixins} = ReactComponentSubClass;
      const ReactComponentSubClassPrototype = Object.getPrototypeOf(ReactComponentSubClass);
      if (ReactComponentSubClassPrototype !== _reactComponent.default) {
        ReactComponentSubClass = ReactComponentSubClassPrototype;
        assignReactComponentMixins(ReactComponentSubClass, element);
      }
      assignMixins(mixins, element);
    }
    function assignMixins(mixins, element) {
      if (mixins) {
        mixins.forEach((mixin) => {
          const {name} = mixin;
          element[name] = mixin.bind(element);
        });
      }
    }
  });

  // lib/reactDOM.js
  var require_reactDOM = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactDOM;
      }
    });
    var _container = /* @__PURE__ */ _interop_require_default(require_container());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactDOM = class {
      static render(element, parentDOMElement) {
        const parent = _container.default.fromDOMElement(parentDOMElement), reference = null, context = {};
        element.mount(parent, reference, context);
      }
    };
  });

  // lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get React() {
        return _react.default;
      },
      get ReactDOM() {
        return _reactDOM.default;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react2());
    var _reactDOM = /* @__PURE__ */ _interop_require_default(require_reactDOM());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/example/reduxApp/redux.js
  var require_redux = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get combineReducers() {
        return combineReducers;
      },
      get createStore() {
        return createStore;
      }
    });
    var createStore = (reducer) => {
      let state, listeners = [];
      const getState = () => {
        return state;
      };
      const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => {
          listener();
        });
      };
      const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
          unsubscribe(listener);
        };
      };
      const unsubscribe = (l) => {
        listeners = listeners.filter((listener) => {
          return listener !== l;
        });
      };
      dispatch();
      return {
        getState,
        dispatch,
        subscribe,
        unsubscribe
      };
    };
    var combineReducers = (reducers) => {
      return (state = {}, action) => {
        const keys = Object.keys(reducers), nextState = keys.reduce((nextState2, key) => {
          const reducer = reducers[key];
          nextState2[key] = reducer(state[key], action);
          return nextState2;
        }, {});
        return nextState;
      };
    };
  });

  // lib/example/reduxApp/constants.js
  var require_constants2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ADD_TODO() {
        return ADD_TODO;
      },
      get EMPTY_STRING() {
        return EMPTY_STRING;
      },
      get LINE_THROUGH() {
        return LINE_THROUGH;
      },
      get NONE() {
        return NONE;
      },
      get ROOT() {
        return ROOT;
      },
      get SET_VISIBILITY_FILTER() {
        return SET_VISIBILITY_FILTER;
      },
      get SHOW_ACTIVE() {
        return SHOW_ACTIVE;
      },
      get SHOW_ALL() {
        return SHOW_ALL;
      },
      get SHOW_COMPLETED() {
        return SHOW_COMPLETED;
      },
      get TOGGLE_TODO() {
        return TOGGLE_TODO;
      }
    });
    var ROOT = "root";
    var NONE = "none";
    var ADD_TODO = "ADD_TODO";
    var SHOW_ALL = "SHOW_ALL";
    var SHOW_ACTIVE = "SHOW_ACTIVE";
    var TOGGLE_TODO = "TOGGLE_TODO";
    var LINE_THROUGH = "line-through";
    var EMPTY_STRING = "";
    var SHOW_COMPLETED = "SHOW_COMPLETED";
    var SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
  });

  // lib/example/reduxApp/reducer/todos.js
  var require_todos = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return todos;
      }
    });
    var _constants = require_constants2();
    function todos(state = [], action = {}) {
      const {type} = action;
      let todos1 = state;
      switch (type) {
        case _constants.ADD_TODO:
          todos1 = addTodoToTodos(todos1, action);
          break;
        case _constants.TOGGLE_TODO:
          todos1 = toggleTodos(todos1, action);
          break;
      }
      state = todos1;
      return state;
    }
    function addTodoToTodos(todos2, action) {
      const {id, text} = action, completed = false, todo = {
        id,
        text,
        completed
      };
      todos2 = [
        ...todos2,
        todo
      ];
      return todos2;
    }
    function toggleTodos(todos2, action) {
      const {id} = action;
      todos2 = todos2.map((todo) => {
        if (todo.id === id) {
          let {completed} = todo;
          completed = !completed;
          todo.completed = completed;
        }
        return todo;
      });
      return todos2;
    }
  });

  // lib/example/reduxApp/reducer/visibilityFilter.js
  var require_visibilityFilter = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return visibilityFilter;
      }
    });
    var _constants = require_constants2();
    function visibilityFilter(state = _constants.SHOW_ALL, action = {}) {
      const {type} = action;
      switch (type) {
        case _constants.SET_VISIBILITY_FILTER:
          const {visibilityFilter: visibilityFilter1} = action;
          state = visibilityFilter1;
          break;
      }
      return state;
    }
  });

  // lib/example/reduxApp/reducer.js
  var require_reducer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _redux = require_redux();
    var _todos = /* @__PURE__ */ _interop_require_default(require_todos());
    var _visibilityFilter = /* @__PURE__ */ _interop_require_default(require_visibilityFilter());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var reducer = (0, _redux.combineReducers)({
      todos: _todos.default,
      visibilityFilter: _visibilityFilter.default
    });
    var _default = reducer;
  });

  // lib/example/reduxApp/component/filterLink.js
  var require_filterLink = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return FilterLink;
      }
    });
    var _index = require_lib();
    var _constants = require_constants2();
    var {Component} = _index.React;
    var FilterLink = class extends Component {
      updateHandler = () => {
        this.forceUpdate();
      };
      componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(this.updateHandler);
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const {store} = this.context, state = store.getState(), {visibilityFilter} = state, {children, filter} = this.props, active = filter === visibilityFilter;
        if (active) {
          return /* @__PURE__ */ _index.React.createElement("span", null, children);
        }
        return /* @__PURE__ */ _index.React.createElement("a", {
          href: "#",
          className: "filter",
          onClick: (event) => {
            event.preventDefault();
            const type = _constants.SET_VISIBILITY_FILTER, visibilityFilter2 = filter, action = {
              type,
              visibilityFilter: visibilityFilter2
            };
            store.dispatch(action);
          }
        }, children);
      }
    };
  });

  // lib/example/reduxApp/component/footer.js
  var require_footer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _index = require_lib();
    var _filterLink = /* @__PURE__ */ _interop_require_default(require_filterLink());
    var _constants = require_constants2();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Footer = (props, context) => /* @__PURE__ */ _index.React.createElement("p", null, "Show: ", /* @__PURE__ */ _index.React.createElement(_filterLink.default, {
      filter: _constants.SHOW_ALL
    }, "All"), " - ", /* @__PURE__ */ _index.React.createElement(_filterLink.default, {
      filter: _constants.SHOW_ACTIVE
    }, "Active"), " - ", /* @__PURE__ */ _index.React.createElement(_filterLink.default, {
      filter: _constants.SHOW_COMPLETED
    }, "Completed"));
    var _default = Footer;
  });

  // lib/example/reduxApp/component/addTodo.js
  var require_addTodo = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _index = require_lib();
    var _constants = require_constants2();
    var id = 0;
    var inputDOMElement;
    var AddTodo = (props, context) => {
      const {store} = context;
      return /* @__PURE__ */ _index.React.createElement("div", null, /* @__PURE__ */ _index.React.createElement("input", {
        ref: (domElement) => {
          inputDOMElement = domElement;
        }
      }), /* @__PURE__ */ _index.React.createElement("button", {
        onClick: () => {
          const type = _constants.ADD_TODO, text = inputDOMElement.value, action = {
            type,
            text,
            id
          };
          id++;
          store.dispatch(action);
          inputDOMElement.value = _constants.EMPTY_STRING;
        }
      }, "Add todo"));
    };
    var _default = AddTodo;
  });

  // lib/example/reduxApp/component/todoListItem.js
  var require_todoListItem = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _index = require_lib();
    var _constants = require_constants2();
    var TodoListItem = (props, context) => {
      const {clickHandler, completed, text} = props, textDecoration = completed ? _constants.LINE_THROUGH : _constants.NONE, style = {
        textDecoration
      };
      return /* @__PURE__ */ _index.React.createElement("li", {
        style,
        onClick: clickHandler
      }, text);
    };
    var _default = TodoListItem;
  });

  // lib/example/reduxApp/component/todoListItems.js
  var require_todoListItems = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return TodoListItems;
      }
    });
    var _index = require_lib();
    var _todoListItem = /* @__PURE__ */ _interop_require_default(require_todoListItem());
    var _constants = require_constants2();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var {Component} = _index.React;
    var TodoListItems = class extends Component {
      componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => {
          this.forceUpdate();
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const {store} = this.context, state = store.getState(), {todos, visibilityFilter} = state, visibleTodos = getVisibleTodos(todos, visibilityFilter), items = visibleTodos.map((visibleTodo) => {
          const {id, text, completed} = visibleTodo;
          return /* @__PURE__ */ _index.React.createElement(_todoListItem.default, {
            text,
            completed,
            clickHandler: () => {
              const type = _constants.TOGGLE_TODO, action = {
                type,
                id
              };
              store.dispatch(action);
            }
          });
        });
        return items;
      }
    };
    var getVisibleTodos = (todos, visibilityFilter) => {
      let visibleTodos;
      switch (visibilityFilter) {
        case _constants.SHOW_ALL:
          visibleTodos = todos;
          break;
        case _constants.SHOW_ACTIVE:
          visibleTodos = todos.filter((todo) => {
            const {completed} = todo, active = !completed;
            return active;
          });
          break;
        case _constants.SHOW_COMPLETED:
          visibleTodos = todos.filter((todo) => {
            const {completed} = todo;
            return completed;
          });
          break;
      }
      return visibleTodos;
    };
  });

  // lib/example/reduxApp/component/todoList.js
  var require_todoList = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _index = require_lib();
    var _todoListItems = /* @__PURE__ */ _interop_require_default(require_todoListItems());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TodoList = (props, context) => /* @__PURE__ */ _index.React.createElement("ul", null, /* @__PURE__ */ _index.React.createElement(_todoListItems.default, null));
    var _default = TodoList;
  });

  // lib/example/reduxApp/component/todoApp.js
  var require_todoApp = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _index = require_lib();
    var _footer = /* @__PURE__ */ _interop_require_default(require_footer());
    var _addTodo = /* @__PURE__ */ _interop_require_default(require_addTodo());
    var _todoList = /* @__PURE__ */ _interop_require_default(require_todoList());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TodoApp = (props, context) => /* @__PURE__ */ _index.React.createElement("div", null, /* @__PURE__ */ _index.React.createElement(_addTodo.default, null), /* @__PURE__ */ _index.React.createElement(_todoList.default, null), /* @__PURE__ */ _index.React.createElement(_footer.default, null));
    var _default = TodoApp;
  });

  // lib/example/reduxApp/component/provider.js
  var require_provider = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Provider;
      }
    });
    var _index = require_lib();
    var {Component} = _index.React;
    var Provider = class extends Component {
      getChildContext(context) {
        const {store} = this.props, childContext = {
          store
        };
        return childContext;
      }
      childContextSet(childContext) {
      }
      render() {
        const {children} = this.props;
        return children;
      }
    };
  });

  // lib/example/reduxApp.js
  var require_reduxApp = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return reduxApp;
      }
    });
    var _index = require_lib();
    var _redux = require_redux();
    var _reducer = /* @__PURE__ */ _interop_require_default(require_reducer());
    var _todoApp = /* @__PURE__ */ _interop_require_default(require_todoApp());
    var _provider = /* @__PURE__ */ _interop_require_default(require_provider());
    var _constants = require_constants2();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function reduxApp() {
      const store = (0, _redux.createStore)(_reducer.default), rootDOMElement = document.getElementById(_constants.ROOT);
      _index.ReactDOM.render(/* @__PURE__ */ _index.React.createElement(_provider.default, {
        store
      }, /* @__PURE__ */ _index.React.createElement(_todoApp.default, null)), rootDOMElement);
    }
  });

  // lib/example/vanillaApp/commentItem.js
  var require_commentItem = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _index = require_lib();
    var {createClass} = _index.React;
    var CommentItem = createClass({
      render: function(update) {
        return /* @__PURE__ */ _index.React.createElement("li", {
          className: "comment"
        }, this.props.message);
      },
      componentDidMount: function() {
        const message = this.props.message;
        console.log(`Comment item mounted with message: '${message}'.`);
      },
      componentWillUnmount: function() {
        const message = this.props.message;
        console.log(`Comment item unmounted with message: '${message}'.`);
      }
    });
    var _default = CommentItem;
  });

  // lib/example/vanillaApp/commentsList.js
  var require_commentsList = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _index = require_lib();
    var _commentItem = /* @__PURE__ */ _interop_require_default(require_commentItem());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var {createClass} = _index.React;
    var CommentsList = createClass({
      getInitialState() {
        const messages = [
          "Hello, world!",
          "Hello world again..."
        ], state = {
          messages
        };
        return state;
      },
      componentDidMount: function() {
        console.log("Comments list mounted.");
      },
      render: function(update) {
        const {messages} = this.getState(), commentItems = messages.map((message) => /* @__PURE__ */ _index.React.createElement(_commentItem.default, {
          message
        }));
        return /* @__PURE__ */ _index.React.createElement("ul", {
          className: "comments"
        }, commentItems);
      }
    });
    var _default = CommentsList;
  });

  // lib/example/vanillaApp/constants.js
  var require_constants3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get MESSAGES_DELAY() {
        return MESSAGES_DELAY;
      },
      get ROOT() {
        return ROOT;
      }
    });
    var ROOT = "root";
    var MESSAGES_DELAY = 1e3;
  });

  // lib/example/vanillaApp.js
  var require_vanillaApp = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return vanillaApp;
      }
    });
    var _index = require_lib();
    var _commentsList = /* @__PURE__ */ _interop_require_default(require_commentsList());
    var _constants = require_constants3();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function vanillaApp() {
      const commentsList = /* @__PURE__ */ _index.React.createElement(_commentsList.default, null), rootDOMElement = document.getElementById(_constants.ROOT);
      _index.ReactDOM.render(commentsList, rootDOMElement);
      const delay = _constants.MESSAGES_DELAY;
      setTimeout(() => {
        const messages = [
          "Hello world yet again!!!"
        ], state = {
          messages
        };
        commentsList.setState(state);
      }, delay);
    }
  });

  // lib/examples.js
  var require_examples = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _reduxApp = /* @__PURE__ */ _interop_require_default(require_reduxApp());
    var _vanillaApp = /* @__PURE__ */ _interop_require_default(require_vanillaApp());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.assign(window, {
      reduxApp: _reduxApp.default,
      vanillaApp: _vanillaApp.default
    });
  });
  require_examples();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3JlYWN0Q2xhc3MuanMiLCAic3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJzcmMvdmlydHVhbERPTUVsZW1lbnQuanMiLCAic3JjL21peGlucy9yZWFjdEVsZW1lbnQuanMiLCAic3JjL3ZpcnR1YWxET00vcmVhY3QuanMiLCAic3JjL3JlYWN0Q29tcG9uZW50LmpzIiwgInNyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci5qcyIsICJzcmMvY29uc3RhbnRzLmpzIiwgInNyYy9taXhpbnMvY29udGFpbmVyRWxlbWVudC5qcyIsICJzcmMvdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC5qcyIsICJzcmMvdXRpbGl0aWVzL25hbWUuanMiLCAic3JjL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnLmpzIiwgInNyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50L2h0bWwuanMiLCAic3JjL3ZpcnR1YWxET00vcmVhY3QvY2xhc3MuanMiLCAic3JjL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb24uanMiLCAic3JjL3ZpcnR1YWxET00vY29udGFpbmVyL3RleHRFbGVtZW50LmpzIiwgInNyYy91dGlsaXRpZXMvc2FuaXRpaXNlLmpzIiwgInNyYy9yZWFjdC5qcyIsICJzcmMvcmVhY3RET00uanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHV4LmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbnN0YW50cy5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9yZWR1Y2VyL3RvZG9zLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlci5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9yZWR1Y2VyLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9maWx0ZXJMaW5rLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9mb290ZXIuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L2FkZFRvZG8uanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0SXRlbS5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtcy5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0xpc3QuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHAuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L3Byb3ZpZGVyLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwLmpzIiwgInNyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudEl0ZW0uanMiLCAic3JjL2V4YW1wbGUvdmFuaWxsYUFwcC9jb21tZW50c0xpc3QuanMiLCAic3JjL2V4YW1wbGUvdmFuaWxsYUFwcC9jb25zdGFudHMuanMiLCAic3JjL2V4YW1wbGUvdmFuaWxsYUFwcC5qcyIsICJzcmMvZXhhbXBsZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENsYXNzIHtcbiAgY29uc3RydWN0b3IocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcblxuICAgIGlmIChnZXRJbml0aWFsU3RhdGUpIHsgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IH1cbiAgICBpZiAoZ2V0Q2hpbGRDb250ZXh0KSB7IHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZ2V0Q2hpbGRDb250ZXh0OyB9XG4gICAgaWYgKGNvbXBvbmVudERpZE1vdW50KSB7IHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDsgfVxuICAgIGlmIChjb21wb25lbnRXaWxsVW5tb3VudCkgeyB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gY29tcG9uZW50V2lsbFVubW91bnQ7IH1cblxuICAgIHRoaXMubWl4aW5zID0gbWl4aW5zO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShvYmplY3QpIHtcbiAgICBjb25zdCB7IHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zIH0gPSBvYmplY3Q7XG5cbiAgICByZXR1cm4gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXlPckVsZW1lbnQpID9cbiAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbWFpbmluZyhlbGVtZW50LCBhcnJheSkge1xuICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIGFycmF5LnNsaWNlKGluZGV4ICsgMSk7XG59XG5cbmZ1bmN0aW9uIGluZGV4T2YoZWxlbWVudCwgYXJyYXkpIHtcbiAgbGV0IGluZGV4ID0gbnVsbDtcblxuICBhcnJheS5zb21lKChjdXJyZW50RWxlbWVudCwgY3VycmVudEVsZW1lbnRJbmRleCkgPT4ge1xuICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgaW5kZXggPSBjdXJyZW50RWxlbWVudEluZGV4O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRQcm9wcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcztcbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGdldEZpcnN0Q2hpbGQoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0gbnVsbDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5cblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5vbihldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5vZmYoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmNsZWFyQXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG59XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5zZXRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC50b2dnbGVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0NsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3NlcyhjbGFzc05hbWVzKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckNsYXNzZXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHtcbiAgcmV0dXJuIG51bGw7ICAvLy9cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0U3R5bGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnNldFN0eWxlKG5hbWUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvbixcbiAgb2ZmLFxuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBnZXRTdHlsZSxcbiAgc2V0U3R5bGVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NRWxlbWVudCBmcm9tIFwiLi4vdmlydHVhbERPTUVsZW1lbnRcIjtcbmltcG9ydCByZWFjdEVsZW1lbnRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9yZWFjdEVsZW1lbnRcIjtcblxuaW1wb3J0IHsgZ3VhcmFudGVlLCByZW1haW5pbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KCksXG4gICAgICAgICAgY2hpbGQgPSB0aGlzOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMucmVkcmF3KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZSwgIC8vL1xuICAgICAgICAgIG5ld1N0YXRlID0gc3RhdGU7IC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVkcmF3KCk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZWRyYXcodXBkYXRlKTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IG51bGw7XG5cbiAgICBjb25zdCB1cGRhdGUgPSBudWxsLFxuICAgICAgICAgIGNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKHVwZGF0ZSwgdGhpcykpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSByZWZlcmVuY2U7XG5cbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRDb250ZXh0U2V0KGNoaWxkQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLnVubW91bnQoKTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHJlZHJhdyh1cGRhdGUpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpIHx8IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51bm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKHVwZGF0ZSwgdGhpcykpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSB0aGlzLmdldENoaWxkUmVmZXJlbmNlKCk7XG5cbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRDb250ZXh0U2V0KGNoaWxkQ29udGV4dCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWFjdEVsZW1lbnQucHJvdG90eXBlLCByZWFjdEVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpLFxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKChyZWZlcmVuY2UgPT09IG51bGwpICYmIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSkge1xuICAgIGNoaWxkID0gcGFyZW50OyAvLy9cblxuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgICByZW1haW5pbmdDaGlsZHJlbiA9IHJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpID0+IHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBudWxsO1xuXG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkOyAgLy8vXG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0RWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET01FbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lckVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBkb21FbGVtZW50KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIFxuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudChwYXJlbnQpLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSk7XG5cbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpcnR1YWxET01Ob2RlID0gbmV3IENvbnRhaW5lckVsZW1lbnQocHJvcHMsIGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxET01Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcmVudERPTUVsZW1lbnQocGFyZW50KSB7XG4gIGxldCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSAocmVmZXJlbmNlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5nZXRET01FbGVtZW50KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZURPTUVsZW1lbnQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBGT1IgPSBcImZvclwiO1xuZXhwb3J0IGNvbnN0IFJFRiA9IFwicmVmXCI7XG5leHBvcnQgY29uc3QgQ0xBU1MgPSBcImNsYXNzXCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBPQkpFQ1QgPSBcIm9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IEJPT0xFQU4gPSBcImJvb2xlYW5cIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBIVE1MX0ZPUiA9IFwiaHRtbEZvclwiO1xuZXhwb3J0IGNvbnN0IENMQVNTX05BTUUgPSBcImNsYXNzTmFtZVwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgSFRUUF9XV1dfVzNfT1JHXzIwMDBfU1ZHID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGT1IsIENMQVNTLCBPQkpFQ1QsIEJPT0xFQU4sIENMQVNTX05BTUUsIEhUTUxfRk9SLCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIG9uKGV2ZW50VHlwZSwgaGFuZGxlcikgeyB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpOyB9IC8vL1xuXG5mdW5jdGlvbiBvZmYoZXZlbnRUeXBlLCBoYW5kbGVyKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSBDTEFTU19OQU1FKSB7XG4gICAgbmFtZSA9IENMQVNTO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IEhUTUxfRk9SKSB7XG4gICAgbmFtZSA9IEZPUjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IE9CSkVDVCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gaGFzQ2xhc3NlcyhjbGFzc05hbWVzKSB7XG4gIHJldHVybiBjbGFzc05hbWVzLmV2ZXJ5KChjbGFzc05hbWUpID0+IHtcbiAgICBpZiAodGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC50YWdOYW1lOyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTsgfVxuXG5mdW5jdGlvbiBzZXRTdHlsZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTsgfVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uLFxuICBvZmYsXG4gIHNldEF0dHJpYnV0ZSxcbiAgZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZSxcbiAgYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGUsXG4gIGhhc0F0dHJpYnV0ZSxcbiAgc2V0Q2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICBoYXNDbGFzc2VzLFxuICBjbGVhckNsYXNzZXMsXG4gIGdldFRhZ05hbWUsXG4gIGdldFN0eWxlLFxuICBzZXRTdHlsZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lckVsZW1lbnQgZnJvbSBcIi4uL2NvbnRhaW5lclwiO1xuaW1wb3J0IGNvbnRhaW5lckVsZW1lbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb250YWluZXJFbGVtZW50XCI7XG5cbmltcG9ydCB7IFJFRiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRWxlbWVudCBleHRlbmRzIENvbnRhaW5lckVsZW1lbnQge1xuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcHMoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRIYW5kbGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBSRUYpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB2YWx1ZTsgLy8vXG4gICAgICAgIFxuICAgICAgICBjYWxsYmFjayh0aGlzLmRvbUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAgaGFuZGxlcik7XG4gIH1cblxuXHRpc0hhbmRsZXJOYW1lKG5hbWUpIHtcblx0XHRyZXR1cm4gL15vbi8udGVzdChuYW1lKTtcblx0fVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjb250YWluZXJFbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSB7XG4gIHJldHVybiBzdmdUYWdOYW1lcy5pbmNsdWRlcyh0YWdOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBzdmdBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSFRNTEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gaHRtbEF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5jb25zdCBzdmdUYWdOYW1lcyA9IFtcbiAgICAgICAgXCJhbHRHbHlwaFwiLCBcImFuaW1hdGVcIiwgXCJhbmltYXRlQ29sb3JcIiwgXCJhbmltYXRlTW90aW9uXCIsIFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCBcImFuaW1hdGlvblwiLCBcImF1ZGlvXCIsXG4gICAgICAgIFwiY2lyY2xlXCIsIFwiY2xpcFBhdGhcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY3Vyc29yXCIsXG4gICAgICAgIFwiZGVmc1wiLCBcImRlc2NcIiwgXCJkaXNjYXJkXCIsXG4gICAgICAgIFwiZWxsaXBzZVwiLFxuICAgICAgICBcImZlQmxlbmRcIiwgXCJmZUNvbG9yTWF0cml4XCIsIFwiZmVDb21wb25lbnRUcmFuc2ZlclwiLCBcImZlQ29tcG9zaXRlXCIsIFwiZmVDb252b2x2ZU1hdHJpeFwiLCBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsIFwiZmVEaXNwbGFjZW1lbnRNYXBcIiwgXCJmZURpc3RhbnRMaWdodFwiLCBcImZlRHJvcFNoYWRvd1wiLCBcImZlRmxvb2RcIiwgXCJmZUZ1bmNBXCIsIFwiZmVGdW5jQlwiLCBcImZlRnVuY0dcIiwgXCJmZUZ1bmNSXCIsIFwiZmVHYXVzc2lhbkJsdXJcIiwgXCJmZUltYWdlXCIsIFwiZmVNZXJnZVwiLCBcImZlTWVyZ2VOb2RlXCIsIFwiZmVNb3JwaG9sb2d5XCIsIFwiZmVPZmZzZXRcIiwgXCJmZVBvaW50TGlnaHRcIiwgXCJmZVNwZWN1bGFyTGlnaHRpbmdcIiwgXCJmZVNwb3RMaWdodFwiLCBcImZlVGlsZVwiLCBcImZlVHVyYnVsZW5jZVwiLCBcImZpbHRlclwiLCBcImZvbnRcIiwgXCJmb250LWZhY2VcIiwgXCJmb250LWZhY2UtZm9ybWF0XCIsIFwiZm9udC1mYWNlLW5hbWVcIiwgXCJmb250LWZhY2UtdXJpXCIsIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICBcImdcIiwgXCJnbHlwaFwiLCBcImdseXBoUmVmXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhdGNoXCIsIFwiaGF0Y2hwYXRoXCIsIFwiaGtlcm5cIixcbiAgICAgICAgXCJpbWFnZVwiLCBcImxpbmVcIiwgXCJsaW5lYXJHcmFkaWVudFwiLFxuICAgICAgICBcImxpc3RlbmVyXCIsXG4gICAgICAgIFwibWFya2VyXCIsIFwibWFza1wiLCBcIm1lc2hcIiwgXCJtZXNoZ3JhZGllbnRcIiwgXCJtZXNocGF0Y2hcIiwgXCJtZXNocm93XCIsIFwibWV0YWRhdGFcIiwgXCJtaXNzaW5nLWdseXBoXCIsIFwibXBhdGhcIixcbiAgICAgICAgXCJwYXRoXCIsIFwicGF0dGVyblwiLCBcInBvbHlnb25cIiwgXCJwb2x5bGluZVwiLCBcInByZWZldGNoXCIsXG4gICAgICAgIFwicmFkaWFsR3JhZGllbnRcIiwgXCJyZWN0XCIsXG4gICAgICAgIFwic2NyaXB0XCIsIFwic2V0XCIsIFwic29saWRjb2xvclwiLCBcInN0b3BcIiwgXCJzdHlsZVwiLCBcInN2Z1wiLCBcInN3aXRjaFwiLCBcInN5bWJvbFwiLFxuICAgICAgICBcInRicmVha1wiLCBcInRleHRcIiwgXCJ0ZXh0QXJlYVwiLCBcInRleHRQYXRoXCIsIFwidGl0bGVcIiwgXCJ0cmVmXCIsIFwidHNwYW5cIixcbiAgICAgICAgXCJ1bmtub3duXCIsIFwidXNlXCIsXG4gICAgICAgIFwidmlkZW9cIiwgXCJ2aWV3XCIsIFwidmtlcm5cIlxuICAgICAgXSxcbiAgICAgIHN2Z0F0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VudC1oZWlnaHRcIiwgXCJhY2N1bXVsYXRlXCIsIFwiYWRkaXRpdmVcIiwgXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJhbHBoYWJldGljXCIsIFwiYW1wbGl0dWRlXCIsIFwiYXJhYmljLWZvcm1cIiwgXCJhc2NlbnRcIiwgXCJhdHRyaWJ1dGVOYW1lXCIsIFwiYXR0cmlidXRlVHlwZVwiLCBcImF6aW11dGhcIixcbiAgICAgICAgXCJiYW5kd2lkdGhcIiwgXCJiYXNlRnJlcXVlbmN5XCIsIFwiYmFzZVByb2ZpbGVcIiwgXCJiYXNlbGluZS1zaGlmdFwiLCBcImJib3hcIiwgXCJiZWdpblwiLCBcImJpYXNcIiwgXCJieVwiLFxuICAgICAgICBcImNhbGNNb2RlXCIsIFwiY2FwLWhlaWdodFwiLCBcImNsaXBcIiwgXCJjbGFzc05hbWVcIiwgXCJjbGlwLXBhdGhcIiwgXCJjbGlwLXJ1bGVcIiwgXCJjbGlwUGF0aFVuaXRzXCIsIFwiY29sb3JcIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImNvbG9yLXJlbmRlcmluZ1wiLCBcImNvbnRlbnRTY3JpcHRUeXBlXCIsIFwiY29udGVudFN0eWxlVHlwZVwiLCBcImNyb3Nzb3JpZ2luXCIsIFwiY3Vyc29yXCIsIFwiY3hcIiwgXCJjeVwiLFxuICAgICAgICBcImRcIiwgXCJkZWZhdWx0QWN0aW9uXCIsIFwiZGVzY2VudFwiLCBcImRpZmZ1c2VDb25zdGFudFwiLCBcImRpcmVjdGlvblwiLCBcImRpc3BsYXlcIiwgXCJkaXZpc29yXCIsIFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJkb3dubG9hZFwiLCBcImR1clwiLCBcImR4XCIsIFwiZHlcIixcbiAgICAgICAgXCJlZGdlTW9kZVwiLCBcImVkaXRhYmxlXCIsIFwiZWxldmF0aW9uXCIsIFwiZW5hYmxlLWJhY2tncm91bmRcIiwgXCJlbmRcIiwgXCJldmVudFwiLCBcImV4cG9uZW50XCIsIFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFxuICAgICAgICBcImZpbGxcIiwgXCJmaWxsLW9wYWNpdHlcIiwgXCJmaWxsLXJ1bGVcIiwgXCJmaWx0ZXJcIiwgXCJmaWx0ZXJSZXNcIiwgXCJmaWx0ZXJVbml0c1wiLCBcImZsb29kLWNvbG9yXCIsIFwiZmxvb2Qtb3BhY2l0eVwiLCBcImZvY3VzSGlnaGxpZ2h0XCIsIFwiZm9jdXNhYmxlXCIsIFwiZm9udC1mYW1pbHlcIiwgXCJmb250LXNpemVcIiwgXCJmb250LXNpemUtYWRqdXN0XCIsIFwiZm9udC1zdHJldGNoXCIsIFwiZm9udC1zdHlsZVwiLCBcImZvbnQtdmFyaWFudFwiLCBcImZvbnQtd2VpZ2h0XCIsIFwiZm9ybWF0XCIsIFwiZnJcIiwgXCJmcm9tXCIsIFwiZnhcIiwgXCJmeVwiLFxuICAgICAgICBcImcxXCIsIFwiZzJcIiwgXCJnbHlwaC1uYW1lXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbFwiLCBcImdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsXCIsIFwiZ2x5cGhSZWZcIiwgXCJncmFkaWVudFRyYW5zZm9ybVwiLCBcImdyYWRpZW50VW5pdHNcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGFuZ2luZ1wiLCBcImhhdGNoQ29udGVudFVuaXRzXCIsIFwiaGF0Y2hVbml0c1wiLCBcImhlaWdodFwiLCBcImhvcml6LWFkdi14XCIsIFwiaG9yaXotb3JpZ2luLXhcIiwgXCJob3Jpei1vcmlnaW4teVwiLCBcImhyZWZcIiwgXCJocmVmbGFuZ1wiLFxuICAgICAgICBcImlkXCIsIFwiaWRlb2dyYXBoaWNcIiwgXCJpbWFnZS1yZW5kZXJpbmdcIiwgXCJpblwiLCBcImluMlwiLCBcImluaXRpYWxWaXNpYmlsaXR5XCIsIFwiaW50ZXJjZXB0XCIsXG4gICAgICAgIFwia1wiLCBcImsxXCIsIFwiazJcIiwgXCJrM1wiLCBcIms0XCIsIFwia2VybmVsTWF0cml4XCIsIFwia2VybmVsVW5pdExlbmd0aFwiLCBcImtlcm5pbmdcIiwgXCJrZXlQb2ludHNcIiwgXCJrZXlTcGxpbmVzXCIsIFwia2V5VGltZXNcIixcbiAgICAgICAgXCJsZW5ndGhBZGp1c3RcIiwgXCJsZXR0ZXItc3BhY2luZ1wiLCBcImxpZ2h0aW5nLWNvbG9yXCIsIFwibGltaXRpbmdDb25lQW5nbGVcIiwgXCJsb2NhbFwiLFxuICAgICAgICBcIm1hcmtlci1lbmRcIiwgXCJtYXJrZXItbWlkXCIsIFwibWFya2VyLXN0YXJ0XCIsIFwibWFya2VySGVpZ2h0XCIsIFwibWFya2VyVW5pdHNcIiwgXCJtYXJrZXJXaWR0aFwiLCBcIm1hc2tcIiwgXCJtYXNrQ29udGVudFVuaXRzXCIsIFwibWFza1VuaXRzXCIsIFwibWF0aGVtYXRpY2FsXCIsIFwibWF4XCIsIFwibWVkaWFcIiwgXCJtZWRpYUNoYXJhY3RlckVuY29kaW5nXCIsIFwibWVkaWFDb250ZW50RW5jb2RpbmdzXCIsIFwibWVkaWFTaXplXCIsIFwibWVkaWFUaW1lXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibW9kZVwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJuYXYtZG93blwiLCBcIm5hdi1kb3duLWxlZnRcIiwgXCJuYXYtZG93bi1yaWdodFwiLCBcIm5hdi1sZWZ0XCIsIFwibmF2LW5leHRcIiwgXCJuYXYtcHJldlwiLCBcIm5hdi1yaWdodFwiLCBcIm5hdi11cFwiLCBcIm5hdi11cC1sZWZ0XCIsIFwibmF2LXVwLXJpZ2h0XCIsIFwibnVtT2N0YXZlc1wiLFxuICAgICAgICBcIm9ic2VydmVyXCIsIFwib2Zmc2V0XCIsIFwib3BhY2l0eVwiLCBcIm9wZXJhdG9yXCIsIFwib3JkZXJcIiwgXCJvcmllbnRcIiwgXCJvcmllbnRhdGlvblwiLCBcIm9yaWdpblwiLCBcIm92ZXJmbG93XCIsIFwib3ZlcmxheVwiLCBcIm92ZXJsaW5lLXBvc2l0aW9uXCIsIFwib3ZlcmxpbmUtdGhpY2tuZXNzXCIsXG4gICAgICAgIFwicGFub3NlLTFcIiwgXCJwYXRoXCIsIFwicGF0aExlbmd0aFwiLCBcInBhdHRlcm5Db250ZW50VW5pdHNcIiwgXCJwYXR0ZXJuVHJhbnNmb3JtXCIsIFwicGF0dGVyblVuaXRzXCIsIFwicGhhc2VcIiwgXCJwaXRjaFwiLCBcInBsYXliYWNrT3JkZXJcIiwgXCJwbGF5YmFja29yZGVyXCIsIFwicG9pbnRlci1ldmVudHNcIiwgXCJwb2ludHNcIiwgXCJwb2ludHNBdFhcIiwgXCJwb2ludHNBdFlcIiwgXCJwb2ludHNBdFpcIiwgXCJwcmVzZXJ2ZUFscGhhXCIsIFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInByaW1pdGl2ZVVuaXRzXCIsIFwicHJvcGFnYXRlXCIsXG4gICAgICAgIFwiclwiLCBcInJhZGl1c1wiLCBcInJlZlhcIiwgXCJyZWZZXCIsIFwicmVuZGVyaW5nLWludGVudFwiLCBcInJlcGVhdENvdW50XCIsIFwicmVwZWF0RHVyXCIsIFwicmVxdWlyZWRFeHRlbnNpb25zXCIsIFwicmVxdWlyZWRGZWF0dXJlc1wiLCBcInJlcXVpcmVkRm9udHNcIiwgXCJyZXF1aXJlZEZvcm1hdHNcIiwgXCJyZXN0YXJ0XCIsIFwicmVzdWx0XCIsIFwicm90YXRlXCIsIFwicnhcIiwgXCJyeVwiLFxuICAgICAgICBcInNjYWxlXCIsIFwic2VlZFwiLCBcInNoYXBlLXJlbmRlcmluZ1wiLCBcInNpZGVcIiwgXCJzbG9wZVwiLCBcInNuYXBzaG90VGltZVwiLCBcInNwYWNpbmdcIiwgXCJzcGVjdWxhckNvbnN0YW50XCIsIFwic3BlY3VsYXJFeHBvbmVudFwiLCBcInNwcmVhZE1ldGhvZFwiLCBcInNyY1wiLCBcInN0YXJ0T2Zmc2V0XCIsIFwic3RkRGV2aWF0aW9uXCIsIFwic3RlbWhcIiwgXCJzdGVtdlwiLCBcInN0aXRjaFRpbGVzXCIsIFwic3RvcC1jb2xvclwiLCBcInN0b3Atb3BhY2l0eVwiLCBcInN0cmlrZXRocm91Z2gtcG9zaXRpb25cIiwgXCJzdHJpa2V0aHJvdWdoLXRoaWNrbmVzc1wiLCBcInN0cmluZ1wiLCBcInN0cm9rZVwiLCBcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCJzdHJva2UtZGFzaG9mZnNldFwiLCBcInN0cm9rZS1saW5lY2FwXCIsIFwic3Ryb2tlLWxpbmVqb2luXCIsIFwic3Ryb2tlLW1pdGVybGltaXRcIiwgXCJzdHJva2Utb3BhY2l0eVwiLCBcInN0cm9rZS13aWR0aFwiLCBcInN0eWxlXCIsIFwic3VyZmFjZVNjYWxlXCIsIFwic3luY0JlaGF2aW9yXCIsIFwic3luY0JlaGF2aW9yRGVmYXVsdFwiLCBcInN5bmNNYXN0ZXJcIiwgXCJzeW5jVG9sZXJhbmNlXCIsIFwic3luY1RvbGVyYW5jZURlZmF1bHRcIiwgXCJzeXN0ZW1MYW5ndWFnZVwiLFxuICAgICAgICBcInRhYmxlVmFsdWVzXCIsIFwidGFyZ2V0XCIsIFwidGFyZ2V0WFwiLCBcInRhcmdldFlcIiwgXCJ0ZXh0LWFuY2hvclwiLCBcInRleHQtZGVjb3JhdGlvblwiLCBcInRleHQtcmVuZGVyaW5nXCIsIFwidGV4dExlbmd0aFwiLCBcInRpbWVsaW5lQmVnaW5cIiwgXCJ0aW1lbGluZWJlZ2luXCIsIFwidGl0bGVcIiwgXCJ0b1wiLCBcInRyYW5zZm9ybVwiLCBcInRyYW5zZm9ybUJlaGF2aW9yXCIsIFwidHlwZVwiLFxuICAgICAgICBcInUxXCIsIFwidTJcIiwgXCJ1bmRlcmxpbmUtcG9zaXRpb25cIiwgXCJ1bmRlcmxpbmUtdGhpY2tuZXNzXCIsIFwidW5pY29kZVwiLCBcInVuaWNvZGUtYmlkaVwiLCBcInVuaWNvZGUtcmFuZ2VcIiwgXCJ1bml0cy1wZXItZW1cIixcbiAgICAgICAgXCJ2LWFscGhhYmV0aWNcIiwgXCJ2LWhhbmdpbmdcIiwgXCJ2LWlkZW9ncmFwaGljXCIsIFwidi1tYXRoZW1hdGljYWxcIiwgXCJ2YWx1ZXNcIiwgXCJ2ZXJzaW9uXCIsIFwidmVydC1hZHYteVwiLCBcInZlcnQtb3JpZ2luLXhcIiwgXCJ2ZXJ0LW9yaWdpbi15XCIsIFwidmlld0JveFwiLCBcInZpZXdUYXJnZXRcIiwgXCJ2aXNpYmlsaXR5XCIsXG4gICAgICAgIFwid2lkdGhcIiwgXCJ3aWR0aHNcIiwgXCJ3b3JkLXNwYWNpbmdcIiwgXCJ3cml0aW5nLW1vZGVcIixcbiAgICAgICAgXCJ4XCIsIFwieC1oZWlnaHRcIiwgXCJ4MVwiLCBcIngyXCIsIFwieENoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInlcIiwgXCJ5MVwiLCBcInkyXCIsIFwieUNoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInpcIiwgXCJ6b29tQW5kUGFuXCJcbiAgICAgIF0sXG4gICAgICBodG1sQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZXB0XCIsIFwiYWNjZXB0Q2hhcnNldFwiLCBcImFjY2Vzc0tleVwiLCBcImFjdGlvblwiLCBcImFsbG93XCIsIFwiYWxsb3dGdWxsU2NyZWVuXCIsIFwiYWxsb3dUcmFuc3BhcmVuY3lcIiwgXCJhbHRcIiwgXCJhc3luY1wiLCBcImF1dG9Db21wbGV0ZVwiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9QbGF5XCIsXG4gICAgICAgIFwiY2FwdHVyZVwiLCBcImNlbGxQYWRkaW5nXCIsIFwiY2VsbFNwYWNpbmdcIiwgXCJjaGFsbGVuZ2VcIiwgXCJjaGFyU2V0XCIsIFwiY2hlY2tlZFwiLCBcImNpdGVcIiwgXCJjbGFzc0lEXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sU3BhblwiLCBcImNvbHNcIiwgXCJjb250ZW50XCIsIFwiY29udGVudEVkaXRhYmxlXCIsIFwiY29udGV4dE1lbnVcIiwgXCJjb250cm9sc1wiLCBcImNvb3Jkc1wiLCBcImNyb3NzT3JpZ2luXCIsXG4gICAgICAgIFwiZGF0YVwiLCBcImRhdGVUaW1lXCIsIFwiZGVmYXVsdFwiLCBcImRlZmVyXCIsIFwiZGlyXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImRyYWdnYWJsZVwiLFxuICAgICAgICBcImVuY1R5cGVcIixcbiAgICAgICAgXCJmb3JtXCIsIFwiZm9ybUFjdGlvblwiLCBcImZvcm1FbmNUeXBlXCIsIFwiZm9ybU1ldGhvZFwiLCBcImZvcm1Ob1ZhbGlkYXRlXCIsIFwiZm9ybVRhcmdldFwiLCBcImZyYW1lQm9yZGVyXCIsXG4gICAgICAgIFwiaGVhZGVyc1wiLCBcImhlaWdodFwiLCBcImhpZGRlblwiLCBcImhpZ2hcIiwgXCJocmVmXCIsIFwiaHJlZkxhbmdcIiwgXCJodG1sRm9yXCIsIFwiaHR0cEVxdWl2XCIsXG4gICAgICAgIFwiaWNvblwiLCBcImlkXCIsIFwiaW5wdXRNb2RlXCIsIFwiaW50ZWdyaXR5XCIsIFwiaXNcIixcbiAgICAgICAgXCJrZXlQYXJhbXNcIiwgXCJrZXlUeXBlXCIsIFwia2luZFwiLFxuICAgICAgICBcImxhYmVsXCIsIFwibGFuZ1wiLCBcImxpc3RcIiwgXCJsb29wXCIsIFwibG93XCIsXG4gICAgICAgIFwibWFuaWZlc3RcIiwgXCJtYXJnaW5IZWlnaHRcIiwgXCJtYXJnaW5XaWR0aFwiLCBcIm1heFwiLCBcIm1heExlbmd0aFwiLCBcIm1lZGlhXCIsIFwibWVkaWFHcm91cFwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1pbkxlbmd0aFwiLCBcIm11bHRpcGxlXCIsIFwibXV0ZWRcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibm9WYWxpZGF0ZVwiLCBcIm5vbmNlXCIsXG4gICAgICAgIFwib3BlblwiLCBcIm9wdGltdW1cIixcbiAgICAgICAgXCJwYXR0ZXJuXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJwb3N0ZXJcIiwgXCJwcmVsb2FkXCIsIFwicHJvZmlsZVwiLFxuICAgICAgICBcInJhZGlvR3JvdXBcIiwgXCJyZWFkT25seVwiLCBcInJlbFwiLCBcInJlcXVpcmVkXCIsIFwicmV2ZXJzZWRcIiwgXCJyb2xlXCIsIFwicm93U3BhblwiLCBcInJvd3NcIixcbiAgICAgICAgXCJzYW5kYm94XCIsIFwic2NvcGVcIiwgXCJzY29wZWRcIiwgXCJzY3JvbGxpbmdcIiwgXCJzZWFtbGVzc1wiLCBcInNlbGVjdGVkXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwic2l6ZXNcIiwgXCJzcGFuXCIsIFwic3BlbGxDaGVja1wiLCBcInNyY1wiLCBcInNyY0RvY1wiLCBcInNyY0xhbmdcIiwgXCJzcmNTZXRcIiwgXCJzdGFydFwiLCBcInN0ZXBcIiwgXCJzdHlsZVwiLCBcInN1bW1hcnlcIixcbiAgICAgICAgXCJ0YWJJbmRleFwiLCBcInRhcmdldFwiLCBcInRpdGxlXCIsIFwidHlwZVwiLFxuICAgICAgICBcInVzZU1hcFwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwid2lkdGhcIixcbiAgICAgICAgXCJ3bW9kZVwiLFxuICAgICAgICBcIndyYXBcIlxuICAgICAgXTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBIVFRQX1dXV19XM19PUkdfMjAwMF9TVkcgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWR0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGFnTmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKEhUVFBfV1dXX1czX09SR18yMDAwX1NWRywgdGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuICAgIHJldHVybiBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSk7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVE1MRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlLCB0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG5cbiAgY2hpbGRDb250ZXh0U2V0KGNoaWxkQ29udGV4dCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jaGlsZENvbnRleHRTZXQuY2FsbCh0aGlzLCBjaGlsZENvbnRleHQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdEZ1bmN0aW9uRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdEZ1bmN0aW9uID0gcmVhY3RGdW5jdGlvbjtcbiAgfVxuIFxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHVwZGF0ZSwgdGhpcyk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgLy8vXG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgY2hpbGRDb250ZXh0U2V0KGNoaWxkQ29udGV4dCkge1xuICAgIC8vL1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lckVsZW1lbnQgZnJvbSBcIi4uL2NvbnRhaW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RWxlbWVudCBleHRlbmRzIENvbnRhaW5lckVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH07XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRFbGVtZW50IGZyb20gXCIuLi92aXJ0dWFsRE9NL2NvbnRhaW5lci90ZXh0RWxlbWVudFwiO1xuXG5pbXBvcnQgeyBTVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYWxzZXlDaGlsZHJlbihjaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuLnJlZHVjZSgoY2hpbGRyZW4sIGNoaWxkKSA9PiB7XG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH0sIFtdKTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgY2hpbGRyZW4gPSBjaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB7ICAvLy9cbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZCwgIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkID0gdGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RDbGFzcyBmcm9tIFwiLi9yZWFjdENsYXNzXCI7XG5pbXBvcnQgUmVhY3RDb21wb25lbnQgZnJvbSBcIi4vcmVhY3RDb21wb25lbnRcIjtcblxuaW1wb3J0IFNWR0VsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9zdmdcIjtcbmltcG9ydCBIVE1MRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50L2h0bWxcIjtcbmltcG9ydCBSZWFjdENsYXNzRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL3JlYWN0L2NsYXNzXCI7XG5pbXBvcnQgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9yZWFjdC9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgU1RSSU5HLCBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5Q2hpbGRyZW4sIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9zYW5pdGlpc2VcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gIHJldHVybiBSZWFjdENsYXNzLmNyZWF0ZShvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkcmVuKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCkge1xuICAgIGNoaWxkcmVuID0gc2FuaXRpc2VDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICBuZXcgU1ZHRWxlbWVudCh0YWdOYW1lLCBwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICBuZXcgSFRNTEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuICAgIH0gZWxzZSBpZiAoUmVhY3RDbGFzcy5pc1Byb3RvdHlwZU9mKGZpcnN0QXJndW1lbnQpKSB7XG4gICAgICBjb25zdCByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICByZWFjdENsYXNzRWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENsYXNzRWxlbWVudDsgIC8vL1xuXG4gICAgICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDbGFzcztcblxuICAgICAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChSZWFjdENvbXBvbmVudC5pc1Byb3RvdHlwZU9mKGZpcnN0QXJndW1lbnQpKSB7XG4gICAgICBjb25zdCBSZWFjdENvbXBvbmVudFN1YkNsYXNzID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRTdWJDbGFzcyhwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENvbXBvbmVudDsgLy8vXG5cbiAgICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdENvbXBvbmVudCwgLy8vXG4gICAgICBSZWFjdCA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBjcmVhdGVDbGFzcyxcbiAgICAgICAgY3JlYXRlRWxlbWVudFxuICAgICAgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgY2hpbGRyZW4gPSBmbGF0dGVuKGNoaWxkcmVuKTtcblxuICBjaGlsZHJlbiA9IHJlbW92ZUZhbHNleUNoaWxkcmVuKGNoaWxkcmVuKTtcblxuICBjaGlsZHJlbiA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgbWl4aW5zIH0gPSBSZWFjdENvbXBvbmVudFN1YkNsYXNzO1xuXG4gIGNvbnN0IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVhY3RDb21wb25lbnRTdWJDbGFzcyk7IC8vL1xuXG4gIGlmIChSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlICE9PSBSZWFjdENvbXBvbmVudCkge1xuICAgIFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MgPSBSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlOyAvLy9cblxuICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpO1xuICB9XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKChtaXhpbikgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtaXhpbjtcblxuICAgICAgZWxlbWVudFtuYW1lXSA9IG1peGluLmJpbmQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lckVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBDb250YWluZXJFbGVtZW50LmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdERPTSB9IGZyb20gXCIuL3JlYWN0RE9NXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4gIGxldCBzdGF0ZSxcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAobCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICByZXR1cm4gKGxpc3RlbmVyICE9PSBsKTtcbiAgICB9KTtcbiAgfTtcblxuICBkaXNwYXRjaCgpO1xuXG4gIHJldHVybiB7IGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChyZWR1Y2VycykgPT4ge1xuICByZXR1cm4gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2VycyksXG4gICAgICAgICAgbmV4dFN0YXRlID0ga2V5cy5yZWR1Y2UoKG5leHRTdGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcblxuICAgICAgICAgICAgbmV4dFN0YXRlW2tleV0gPSByZWR1Y2VyKHN0YXRlW2tleV0sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfTtcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBST09UID0gXCJyb290XCI7XG5leHBvcnQgY29uc3QgTk9ORSA9ICdub25lJztcbmV4cG9ydCBjb25zdCBBRERfVE9ETyA9IFwiQUREX1RPRE9cIjtcbmV4cG9ydCBjb25zdCBTSE9XX0FMTCA9IFwiU0hPV19BTExcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0FDVElWRSA9IFwiU0hPV19BQ1RJVkVcIjtcbmV4cG9ydCBjb25zdCBUT0dHTEVfVE9ETyA9IFwiVE9HR0xFX1RPRE9cIjtcbmV4cG9ydCBjb25zdCBMSU5FX1RIUk9VR0ggPSBcImxpbmUtdGhyb3VnaFwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgU0hPV19DT01QTEVURUQgPSBcIlNIT1dfQ09NUExFVEVEXCI7XG5leHBvcnQgY29uc3QgU0VUX1ZJU0lCSUxJVFlfRklMVEVSID0gXCJTRVRfVklTSUJJTElUWV9GSUxURVJcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQUREX1RPRE8sIFRPR0dMRV9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvcyhzdGF0ZSA9IFtdLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdG9kb3MgPSBzdGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIHRvZG9zID0gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbik7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBUT0dHTEVfVE9ETyA6XG4gICAgICB0b2RvcyA9IHRvZ2dsZVRvZG9zKHRvZG9zLCBhY3Rpb24pO1xuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aXNpYmlsaXR5RmlsdGVyKHN0YXRlID0gU0hPV19BTEwsIGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICBzdGF0ZSA9IHZpc2liaWxpdHlGaWx0ZXI7XG5cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1eFwiO1xuXG5pbXBvcnQgdG9kb3MgZnJvbSBcIi4vcmVkdWNlci90b2Rvc1wiO1xuaW1wb3J0IHZpc2liaWxpdHlGaWx0ZXIgZnJvbSBcIi4vcmVkdWNlci92aXNpYmlsaXR5RmlsdGVyXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB0b2RvcyxcbiAgdmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIHVwZGF0ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aXZlID0gKGZpbHRlciA9PT0gdmlzaWJpbGl0eUZpbHRlcik7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyXCJcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tIFwiLi9maWx0ZXJMaW5rXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8cD5cbiAgICB7XCJTaG93OiBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgPC9wPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCB7IEFERF9UT0RPLCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmxldCBpZCA9IDAsXG4gICAgaW5wdXRET01FbGVtZW50O1xuXG5jb25zdCBBZGRUb2RvID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc3RvcmUgfSA9IGNvbnRleHQ7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBBRERfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gaW5wdXRET01FbGVtZW50LnZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZCsrO1xuXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9IEVNUFRZX1NUUklORztcblxuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgdG9kb1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRvZG87XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgeyBOT05FLCBMSU5FX1RIUk9VR0ggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IFRvZG9MaXN0SXRlbSA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGNsaWNrSGFuZGxlciwgY29tcGxldGVkLCB0ZXh0IH0gPSBwcm9wcyxcbiAgICAgICAgdGV4dERlY29yYXRpb24gPSBjb21wbGV0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBMSU5FX1RIUk9VR0ggOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PTkUsXG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxsaSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuICApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdEl0ZW07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgVG9kb0xpc3RJdGVtIGZyb20gXCIuL3RvZG9MaXN0SXRlbVwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVELCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdEl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB2aXNpYmxlVG9kb3MgPSBnZXRWaXNpYmxlVG9kb3ModG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpLFxuICAgICAgICAgIGl0ZW1zID0gdmlzaWJsZVRvZG9zLm1hcCgodmlzaWJsZVRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRleHQsIGNvbXBsZXRlZCB9ID0gdmlzaWJsZVRvZG87XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17Y29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gVE9HR0xFX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxufVxuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpID0+IHtcbiAgbGV0IHZpc2libGVUb2RvcztcblxuICBzd2l0Y2ggKHZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICBjYXNlIFNIT1dfQUxMOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3M7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0FDVElWRTpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbyxcbiAgICAgICAgICAgICAgYWN0aXZlID0gIWNvbXBsZXRlZDtcblxuICAgICAgICByZXR1cm4gYWN0aXZlO1xuICAgICAgfSk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0NPTVBMRVRFRDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgICByZXR1cm4gY29tcGxldGVkO1xuICAgICAgfSk7XG5cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVUb2Rvcztcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgVG9kb0xpc3RJdGVtcyBmcm9tIFwiLi90b2RvTGlzdEl0ZW1zXCI7XG5cbmNvbnN0IFRvZG9MaXN0ID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDx1bD5cbiAgICA8VG9kb0xpc3RJdGVtcy8+XG4gIDwvdWw+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kb1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5cbmNvbnN0IFRvZG9BcHAgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPGRpdj5cbiAgICA8QWRkVG9kby8+XG4gICAgPFRvZG9MaXN0Lz5cbiAgICA8Rm9vdGVyLz5cbiAgPC9kaXY+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0FwcDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0ge1xuICAgICAgICAgICAgc3RvcmVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGNoaWxkQ29udGV4dDtcbiAgfVxuXG4gIGNoaWxkQ29udGV4dFNldChjaGlsZENvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0LCBSZWFjdERPTSB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwiLi9yZWR1eEFwcC9yZWR1eFwiO1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1eEFwcC9yZWR1Y2VyXCI7XG5pbXBvcnQgVG9kb0FwcCBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcFwiO1xuaW1wb3J0IFByb3ZpZGVyIGZyb20gXCIuL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlclwiO1xuXG5pbXBvcnQgeyBST09UIH0gZnJvbSBcIi4vcmVkdXhBcHAvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHV4QXBwKCkge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFJPT1QpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxUb2RvQXBwLz5cbiAgICAgIDwvUHJvdmlkZXI+XG5cbiAgICAsXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCB7IGNyZWF0ZUNsYXNzIH0gPSBSZWFjdDtcblxuY29uc3QgQ29tbWVudEl0ZW0gPSBjcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24odXBkYXRlKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgIDwvbGk+XG5cbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5sb2coYENvbW1lbnQgaXRlbSBtb3VudGVkIHdpdGggbWVzc2FnZTogJyR7bWVzc2FnZX0nLmApXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhgQ29tbWVudCBpdGVtIHVubW91bnRlZCB3aXRoIG1lc3NhZ2U6ICcke21lc3NhZ2V9Jy5gKVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEl0ZW07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbW1lbnRJdGVtIGZyb20gXCIuL2NvbW1lbnRJdGVtXCI7XG5cbmNvbnN0IHsgY3JlYXRlQ2xhc3MgfSA9IFJlYWN0O1xuXG5jb25zdCBDb21tZW50c0xpc3QgPSBjcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgIFwiSGVsbG8sIHdvcmxkIVwiLFxuICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCBhZ2Fpbi4uLlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJDb21tZW50cyBsaXN0IG1vdW50ZWQuXCIpXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbih1cGRhdGUpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgY29tbWVudEl0ZW1zID0gbWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PlxuXG4gICAgICAgICAgICA8Q29tbWVudEl0ZW0gbWVzc2FnZT17bWVzc2FnZX0gLz5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cbiAgICAgICAge2NvbW1lbnRJdGVtc31cbiAgICAgIDwvdWw+XG5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHNMaXN0O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgUk9PVCA9IFwicm9vdFwiO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VTX0RFTEFZID0gMTAwMDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgQ29tbWVudHNMaXN0IGZyb20gXCIuL3ZhbmlsbGFBcHAvY29tbWVudHNMaXN0XCI7XG5cbmltcG9ydCB7IFJPT1QsIE1FU1NBR0VTX0RFTEFZIH0gZnJvbSBcIi4vdmFuaWxsYUFwcC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFuaWxsYUFwcCgpIHtcbiAgY29uc3QgY29tbWVudHNMaXN0ID1cblxuICAgICAgICAgIDxDb21tZW50c0xpc3QvPlxuXG4gICAgICAgICxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChST09UKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgY29tbWVudHNMaXN0LFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG5cbiAgY29uc3QgZGVsYXkgPSBNRVNTQUdFU19ERUxBWTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgeWV0IGFnYWluISEhXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgY29tbWVudHNMaXN0LnNldFN0YXRlKHN0YXRlKTtcbiAgfSwgZGVsYXkpO1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJlZHV4QXBwIGZyb20gXCIuL2V4YW1wbGUvcmVkdXhBcHBcIjtcbmltcG9ydCB2YW5pbGxhQXBwIGZyb20gXCIuL2V4YW1wbGUvdmFuaWxsYUFwcFwiO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywge1xuICByZWR1eEFwcCxcbiAgdmFuaWxsYUFwcFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7O0FBQUE7Ozs7O21DQUVBLFdBQUE7OztlQUFxQjs7O0FBQU4sMkJBQU07TUFDbkIsWUFBWSxRQUFRLGlCQUFpQixp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V0FBQTs7O2VBQUE7Ozs7QUExQkEsUUFBTSxDQUFFLGVBQWdCLE9BQUE7QUFFeEIsUUFBTSxjQUFjLFlBQVk7TUFDOUIsUUFBUSxTQUFTLFFBQU07QUFDckIsZUFFRSx1QkFBQSxNQUFBLGNBQUMsTUFBQTtVQUFHLFdBQVU7V0FDWCxLQUFLLE1BQU07O01BTWxCLG1CQUFtQixXQUFBO0FBQ2pCLGNBQU0sVUFBVSxLQUFLLE1BQU07QUFFM0IsZ0JBQVEsSUFBSSx1Q0FBdUM7O01BR3JELHNCQUFzQixXQUFBO0FBQ3BCLGNBQU0sVUFBVSxLQUFLLE1BQU07QUFFM0IsZ0JBQVEsSUFBSSx5Q0FBeUM7OztRQUl6RCxXQUFlOzs7O0FDOUJmOzs7OzttQ0EyQ0EsV0FBQTs7O2VBQUE7Ozs7Ozs7Ozs7QUFyQ0EsUUFBTSxDQUFFLGVBQWdCLE9BQUE7QUFFeEIsUUFBTSxlQUFlLFlBQVk7TUFDL0Isa0JBQUE7QUFDRSxjQUFNLFdBQVc7VUFDVDtVQUNBO1dBRUYsUUFBUTtVQUNOOztBQUdSLGVBQU87O01BR1QsbUJBQW1CLFdBQUE7QUFDakIsZ0JBQVEsSUFBSTs7TUFHZCxRQUFRLFNBQVMsUUFBTTtBQUNyQixjQUFNLENBQUUsWUFBYSxLQUFLLFlBQ3BCLGVBQWUsU0FBUyxJQUFJLENBQUMsWUFFM0IsdUJBQUEsTUFBQSxjQUFDLGFBQUEsU0FBVztVQUFDOztBQUlyQixlQUVFLHVCQUFBLE1BQUEsY0FBQyxNQUFBO1VBQUcsV0FBVTtXQUNYOzs7UUFPVCxXQUFlOzs7O0FDM0NmOzs7Ozs7Ozs7Ozs7O1VBR2EsaUJBQUE7ZUFBQTs7VUFEQSxPQUFBO2VBQUE7OztBQUFOLFFBQU0sT0FBTztBQUNiLFFBQU0saUJBQWlCOzs7O0FDSDlCOzs7OzttQ0FRQSxXQUFBOzs7ZUFBd0I7Ozs7Ozs7Ozs7O0FBQVQsMEJBQVM7QUFDdEIsWUFBTSxlQUVFLHVCQUFBLE1BQUEsY0FBQyxjQUFBLFNBQVksT0FHZixpQkFBaUIsU0FBUyxlQUFlLFdBQUE7QUFFL0MsYUFBQSxTQUFTLE9BQ1AsY0FDQTtBQUdGLFlBQU0sUUFBUSxXQUFBO0FBRWQsaUJBQVcsTUFBQTtBQUNULGNBQU0sV0FBVztVQUNUO1dBRUYsUUFBUTtVQUNOOztBQUdSLHFCQUFhLFNBQVM7U0FDckI7Ozs7O0FDaENMOzs7Ozs7Ozs7Ozs7QUFLQSxXQUFPLE9BQU8sUUFBUTtNQUNwQixVQUFBLFVBQUE7TUFDQSxZQUFBLFlBQUE7OzsiLAogICJuYW1lcyI6IFtdCn0K
