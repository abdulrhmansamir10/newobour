/* @ds-bundle: {"format":3,"namespace":"NewObourDesignSystem_0eda04","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"LedgerSearch","sourcePath":"components/realestate/LedgerSearch.jsx"},{"name":"PropertyCard","sourcePath":"components/realestate/PropertyCard.jsx"},{"name":"StatusBadge","sourcePath":"components/realestate/StatusBadge.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"3ed3ef84a5b3","components/core/Badge.jsx":"51614af99952","components/core/Button.jsx":"7ef360b6ae32","components/core/Card.jsx":"6229b101fc57","components/core/Input.jsx":"d77b8dedb900","components/core/Select.jsx":"29dc462c05fd","components/core/Tabs.jsx":"74a68f5b84fe","components/realestate/LedgerSearch.jsx":"fb56d8c37abb","components/realestate/PropertyCard.jsx":"a18af8d45246","components/realestate/StatusBadge.jsx":"718f645f1839","ui_kits/platform/Chrome-standalone.jsx":"15027710a752","ui_kits/platform/Chrome.jsx":"f2b7c69522ac","ui_kits/platform/ScreensHome.jsx":"271806225ea0","ui_kits/platform/ScreensLedger.jsx":"cd0bde843fd5","ui_kits/platform/data.js":"46a89a0fad88"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NewObourDesignSystem_0eda04 = window.NewObourDesignSystem_0eda04 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** User avatar — image or initials, navy ring optional. RTL-safe. */
function Avatar({
  src,
  name = '',
  size = 40,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('');
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      flex: 'none',
      overflow: 'hidden',
      background: 'var(--navy-100)',
      color: 'var(--navy-700)',
      fontFamily: 'var(--font-base)',
      fontWeight: 700,
      fontSize: size * 0.4,
      boxShadow: ring ? '0 0 0 2px var(--bg-surface), 0 0 0 4px var(--gold-600)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", null, initials || '؟'));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Generic pill Badge with tonal variants. For the legal land-status badge
 * (تم التخصيص / نزلت كشف …) use StatusBadge instead.
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  size = 'md',
  iconStart = null,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ['#eef0f3', 'var(--ink-700)'],
      solid: ['var(--ink-700)', '#fff']
    },
    navy: {
      soft: ['var(--navy-50)', 'var(--navy-700)'],
      solid: ['var(--navy-800)', '#fff']
    },
    gold: {
      soft: ['var(--gold-100)', 'var(--gold-800)'],
      solid: ['var(--gold-600)', 'var(--navy-900)']
    },
    success: {
      soft: ['var(--success-100)', 'var(--success-600)'],
      solid: ['var(--success-600)', '#fff']
    },
    warning: {
      soft: ['var(--warning-100)', 'var(--warning-600)'],
      solid: ['var(--warning-600)', '#fff']
    },
    danger: {
      soft: ['var(--danger-100)', 'var(--danger-600)'],
      solid: ['var(--danger-600)', '#fff']
    },
    info: {
      soft: ['var(--info-100)', 'var(--info-600)'],
      solid: ['var(--info-600)', '#fff']
    }
  };
  const pair = (tones[tone] || tones.neutral)[solid ? 'solid' : 'soft'];
  const sizes = {
    sm: {
      padding: '3px 9px',
      fontSize: 11.5,
      gap: 4
    },
    md: {
      padding: '5px 12px',
      fontSize: 13,
      gap: 6
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      padding: s.padding,
      fontFamily: 'var(--font-base)',
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1.2,
      borderRadius: 'var(--radius-pill)',
      background: pair[0],
      color: pair[1],
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconStart, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NewObour Button — primary navy CTA, gold accent, outline & ghost.
 * RTL-first; icon sits inline and flips with direction automatically.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  loading = false,
  iconStart = null,
  iconEnd = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 36,
      fontSize: 14,
      gap: 7,
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '0 20px',
      height: 44,
      fontSize: 15,
      gap: 8,
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '0 28px',
      height: 54,
      fontSize: 17,
      gap: 10,
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      border: '1px solid var(--brand)',
      boxShadow: 'var(--shadow-sm)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--accent)',
      boxShadow: 'var(--shadow-gold)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    danger: {
      background: 'var(--danger-600)',
      color: '#fff',
      border: '1px solid var(--danger-600)',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-base)',
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled && !loading) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.filter = 'none';
    },
    onMouseEnter: e => {
      if (!disabled && !loading) e.currentTarget.style.filter = 'brightness(0.93)';
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && iconStart, children, !loading && iconEnd);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'no-spin 0.7s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes no-spin { to { transform: rotate(360deg); } }`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface Card — the base container for content across NewObour.
 * Soft rounded corners, subtle navy-tinted shadow, optional hover lift.
 */
function Card({
  children,
  padding = 'md',
  interactive = false,
  as = 'div',
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const Tag = as;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      padding: pads[padding] ?? pads.md,
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional label, leading icon, hint/error. RTL-first.
 */
function Input({
  label,
  hint,
  error,
  iconStart = null,
  type = 'text',
  size = 'md',
  disabled = false,
  required = false,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    md: {
      height: 46,
      fontSize: 15,
      padX: 14
    },
    lg: {
      height: 54,
      fontSize: 16,
      padX: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger-600)' : focus ? 'var(--accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-base)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger-600)',
      marginInlineStart: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: s.height,
      padding: `0 ${s.padX}px`,
      background: disabled ? 'var(--bg-sunken)' : 'var(--bg-surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-xs)',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, iconStart && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'flex',
      flex: 'none'
    }
  }, iconStart), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-base)',
      fontSize: s.fontSize,
      color: 'var(--text-body)',
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: error ? 'var(--danger-600)' : 'var(--text-muted)',
      fontFamily: 'var(--font-base)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Native-backed Select with the same chrome as Input. RTL-first.
 * options: array of { value, label } or string.
 */
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  size = 'md',
  disabled = false,
  required = false,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    md: {
      height: 46,
      fontSize: 15
    },
    lg: {
      height: 54,
      fontSize: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const selId = id || React.useId();
  const borderColor = error ? 'var(--danger-600)' : focus ? 'var(--accent)' : 'var(--border-default)';
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-base)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger-600)',
      marginInlineStart: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: s.height,
      background: disabled ? 'var(--bg-sunken)' : 'var(--bg-surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-xs)',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    defaultValue: placeholder ? '' : undefined,
    style: {
      flex: 1,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-base)',
      fontSize: s.fontSize,
      color: 'var(--text-body)',
      padding: '0 14px',
      appearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInlineStart: 12,
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: error ? 'var(--danger-600)' : 'var(--text-muted)',
      fontFamily: 'var(--font-base)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — underline style with gold active indicator. RTL-first.
 * items: array of { value, label, count? }. Controlled via value/onChange.
 */
function Tabs({
  items = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(value ?? (items[0] && items[0].value));
  const active = value ?? internal;
  const select = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => select(it.value),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: '12px 16px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-base)',
        fontSize: 15,
        fontWeight: on ? 700 : 500,
        color: on ? 'var(--brand)' : 'var(--text-muted)',
        transition: 'color var(--dur-base)'
      }
    }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-num)',
        fontSize: 12,
        fontWeight: 700,
        padding: '1px 7px',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--gold-100)' : 'var(--bg-sunken)',
        color: on ? 'var(--gold-800)' : 'var(--text-muted)'
      }
    }, it.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        insetInline: 8,
        bottom: -1,
        height: 3,
        borderRadius: 3,
        background: 'var(--gold-600)',
        opacity: on ? 1 : 0,
        transition: 'opacity var(--dur-base)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/realestate/LedgerSearch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LedgerSearch — the cornerstone search bar for كشوف التقنين.
 * Look up a name / national ID / plot number in the legalization ledgers.
 * Self-contained: a field-type selector + input + search button on one bar.
 */
function LedgerSearch({
  fields = [{
    value: 'name',
    label: 'الاسم'
  }, {
    value: 'national_id',
    label: 'الرقم القومي'
  }, {
    value: 'plot',
    label: 'رقم القطعة الأصلية'
  }],
  field,
  query = '',
  placeholder = 'اكتب الاسم كما هو في وصل البريد…',
  onFieldChange,
  onQueryChange,
  onSearch,
  loading = false,
  style = {},
  ...rest
}) {
  const [internalField, setInternalField] = React.useState(field ?? fields[0]?.value);
  const [internalQuery, setInternalQuery] = React.useState(query);
  const f = field ?? internalField;
  const q = onQueryChange ? query : internalQuery;
  const setF = v => {
    setInternalField(v);
    onFieldChange && onFieldChange(v);
  };
  const setQ = v => {
    setInternalQuery(v);
    onQueryChange && onQueryChange(v);
  };
  const submit = () => onSearch && onSearch({
    field: f,
    query: q
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 8,
      padding: 8,
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: f,
    onChange: e => setF(e.target.value),
    style: {
      appearance: 'none',
      height: '100%',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      background: 'var(--navy-50)',
      color: 'var(--navy-700)',
      fontFamily: 'var(--font-base)',
      fontWeight: 700,
      fontSize: 14,
      borderRadius: 'var(--radius-md)',
      padding: '0 36px 0 16px'
    }
  }, fields.map(x => /*#__PURE__*/React.createElement("option", {
    key: x.value,
    value: x.value
  }, x.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInlineStart: 12,
      pointerEvents: 'none',
      color: 'var(--navy-500)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'flex',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4-4"
  }))), /*#__PURE__*/React.createElement("input", {
    value: q,
    placeholder: placeholder,
    onChange: e => setQ(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') submit();
    },
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-base)',
      fontSize: 16,
      color: 'var(--text-body)',
      minWidth: 0
    }
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    onClick: submit,
    loading: loading,
    style: {
      flex: 'none',
      borderRadius: 'var(--radius-md)'
    }
  }, "\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0643\u0634\u0648\u0641"));
}
Object.assign(__ds_scope, { LedgerSearch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/LedgerSearch.jsx", error: String((e && e.message) || e) }); }

// components/realestate/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusBadge — semantic badge for a land plot's legal state.
 * Maps the five canonical NewObour statuses to brand-correct colors.
 * Pass a known `status` key, or override label/tone freely.
 */
const STATUS = {
  mail: {
    label: 'تم تقديم البريد',
    bg: '#e9eff6',
    fg: '#3c5876',
    dot: 'var(--status-mail)'
  },
  ledger: {
    label: 'نزلت كشف',
    bg: 'var(--gold-100)',
    fg: '#8a6622',
    dot: 'var(--status-ledger)'
  },
  alloc: {
    label: 'تم التخصيص',
    bg: '#dcefe5',
    fg: '#1c7257',
    dot: 'var(--status-alloc)'
  },
  license: {
    label: 'تم الترخيص',
    bg: 'var(--info-100)',
    fg: '#1f4f86',
    dot: 'var(--status-license)'
  },
  build: {
    label: 'جاري البناء',
    bg: '#f7ecd7',
    fg: '#9a5f1c',
    dot: 'var(--status-build)'
  }
};
function StatusBadge({
  status = 'ledger',
  label,
  size = 'md',
  dot = true,
  style = {},
  ...rest
}) {
  const s = STATUS[status] || STATUS.ledger;
  const sizes = {
    sm: {
      padding: '4px 10px',
      fontSize: 12,
      gap: 6,
      dotSize: 7
    },
    md: {
      padding: '6px 13px',
      fontSize: 13.5,
      gap: 7,
      dotSize: 8
    },
    lg: {
      padding: '8px 16px',
      fontSize: 15,
      gap: 8,
      dotSize: 9
    }
  };
  const z = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: z.gap,
      padding: z.padding,
      background: s.bg,
      color: s.fg,
      fontFamily: 'var(--font-base)',
      fontWeight: 700,
      fontSize: z.fontSize,
      lineHeight: 1.2,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: z.dotSize,
      height: z.dotSize,
      borderRadius: '50%',
      background: s.dot,
      flex: 'none'
    }
  }), label || s.label);
}
StatusBadge.STATUSES = Object.keys(STATUS);
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/realestate/PropertyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PropertyCard — marketplace listing for a land plot / unit.
 * Shows image, status, area, location (حي/مجاورة/بلوك), price, and feature tags.
 */
function PropertyCard({
  image,
  status = 'alloc',
  title,
  district,
  // الحي
  block,
  // المجاورة / البلوك
  plotNo,
  // رقم القطعة
  area,
  // المساحة بالمتر
  price,
  // السعر الإجمالي بالجنيه
  features = [],
  // ['ناصية','بحري','خدمات']
  verified = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const fmt = n => typeof n === 'number' ? n.toLocaleString('en-US') : n;
  const perMeter = typeof price === 'number' && typeof area === 'number' && area ? Math.round(price / area) : null;
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      fontFamily: 'var(--font-base)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 10',
      background: 'var(--navy-100)',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--navy-300)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "46",
    height: "46",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 21h18M5 21V7l8-4v18M19 21V11l-6-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9v.01M9 12v.01M9 15v.01M9 18v.01"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInlineStart: 12,
      top: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    size: "sm"
  })), verified && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInlineEnd: 12,
      top: 12,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(11,27,51,0.82)',
      color: '#fff',
      fontSize: 12,
      fontWeight: 700,
      backdropFilter: 'blur(4px)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "var(--gold-500)",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.4 2.1 3.1-.5 1.2 2.9 2.9 1.2-.5 3.1L23.6 16l-2.1 2.4.5 3.1-2.9 1.2-1.2 2.9-3.1-.5L12 22l-2.4-2.1-3.1.5-1.2-2.9L2.4 16 .3 13.6 2.4 11l-.5-3.1L4.8 6.7 6 3.8l3.1.5L12 2z",
    transform: "scale(0.86) translate(2 2)"
  })), "\u0645\u0648\u062B\u0651\u0642")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title || `قطعة أرض ${area ? `${area} م²` : ''}`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--text-muted)',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-5.2-7-11a7 7 0 0114 0c0 5.8-7 11-7 11z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.6"
  })), /*#__PURE__*/React.createElement("span", null, [district, block && `بلوك ${block}`, plotNo && `قطعة ${plotNo}`].filter(Boolean).join(' · ')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      paddingBlock: 10,
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "\u0627\u0644\u0645\u0633\u0627\u062D\u0629",
    value: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 700
      }
    }, fmt(area)), " \u0645\xB2")
  }), perMeter && /*#__PURE__*/React.createElement(Stat, {
    label: "\u0633\u0639\u0631 \u0627\u0644\u0645\u062A\u0631",
    value: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-num)',
        fontWeight: 700
      }
    }, fmt(perMeter)), " \u062C.\u0645")
  })), features.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, features.map(f => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--navy-50)',
      color: 'var(--navy-700)',
      fontSize: 12.5,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--gold-600)'
    }
  }), f))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-num)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--navy-800)',
      letterSpacing: '-0.01em'
    }
  }, fmt(price)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, "\u062C.\u0645")))));
}
function Stat({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)',
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, value));
}
Object.assign(__ds_scope, { PropertyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Chrome-standalone.jsx
try { (() => {
// NewObour platform chrome: Navbar + Footer. Exports to window.
const {
  useState
} = React;
const LOGO = window.__resources.logoMark;
const LOGO_LIGHT = window.__resources.logoMarkLight;
const NAV = [{
  id: 'home',
  label: 'الرئيسية'
}, {
  id: 'market',
  label: 'الماركت بليس'
}, {
  id: 'ledger',
  label: 'كشوف التقنين'
}, {
  id: 'news',
  label: 'الأخبار والمعلومات'
}, {
  id: 'guide',
  label: 'دليل الترخيص'
}];
function Navbar({
  active,
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 'var(--navbar-h)',
      background: 'var(--navy-800)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      padding: '0 36px',
      boxShadow: '0 2px 16px rgba(11,27,51,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO_LIGHT,
    alt: "NewObour",
    style: {
      height: 42
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 18
    }
  }, "\u0627\u0644\u0639\u0628\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-num)',
      fontSize: 10.5,
      letterSpacing: '0.16em',
      color: 'var(--gold-400)',
      marginTop: 3
    }
  }, "NEW OBOUR CITY"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      flex: 1
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => onNav(n.id),
    style: {
      position: 'relative',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: active === n.id ? '#fff' : 'rgba(255,255,255,0.72)',
      fontFamily: 'var(--font-base)',
      fontSize: 15,
      fontWeight: active === n.id ? 700 : 500,
      padding: '10px 14px',
      transition: 'color var(--dur-base)'
    }
  }, n.label, active === n.id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInline: 14,
      bottom: 2,
      height: 3,
      borderRadius: 3,
      background: 'var(--gold-500)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('dashboard'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.22)',
      color: '#fff',
      cursor: 'pointer',
      fontFamily: 'var(--font-base)',
      fontSize: 14,
      fontWeight: 600,
      padding: '9px 16px',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "layout-dashboard",
    style: {
      width: 16,
      height: 16
    }
  }), "\u0644\u0648\u062D\u062A\u064A"), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--gold-600)',
      border: 'none',
      color: 'var(--navy-900)',
      cursor: 'pointer',
      fontFamily: 'var(--font-base)',
      fontSize: 14,
      fontWeight: 700,
      padding: '10px 18px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-gold)'
    }
  }, "\u0623\u0636\u0641 \u0639\u0631\u0636\u0643")));
}
function Footer() {
  const cols = [{
    h: 'الخدمات',
    items: ['كشوف التقنين', 'دليل الترخيص', 'تكاليف البناء', 'إجراءات الاستلام']
  }, {
    h: 'الماركت بليس',
    items: ['عروض الأراضي', 'الوحدات السكنية', 'الوحدات التجارية', 'طلبات الشراء']
  }, {
    h: 'المدينة',
    items: ['الأخبار والمرافق', 'الخرائط والمخططات', 'اللوائح والقوانين', 'تواصل معنا']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: 'rgba(255,255,255,0.66)',
      padding: '52px 36px 28px',
      fontFamily: 'var(--font-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      flexWrap: 'wrap',
      maxWidth: 'var(--container-xl)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 240px',
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO_LIGHT,
    alt: "",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      color: '#fff'
    }
  }, "\u0627\u0644\u0639\u0628\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.8,
      margin: 0
    }
  }, "\u0627\u0644\u062F\u0644\u064A\u0644 \u0627\u0644\u0631\u0633\u0645\u064A \u0648\u0627\u0644\u0645\u0648\u062B\u0648\u0642 \u0644\u0633\u0643\u0627\u0646 \u0648\u0645\u0633\u062A\u062B\u0645\u0631\u064A \u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0639\u0628\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u2014 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0643\u0634\u0648\u0641\u060C \u0627\u0644\u0623\u062E\u0628\u0627\u0631\u060C \u0648\u0633\u0648\u0642 \u0627\u0644\u0623\u0631\u0627\u0636\u064A \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      flex: '0 1 180px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 700,
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 14,
      cursor: 'pointer'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)',
      marginTop: 36,
      paddingTop: 20,
      fontSize: 13,
      textAlign: 'center',
      maxWidth: 'var(--container-xl)',
      margin: '36px auto 0'
    }
  }, "\xA9 \u0662\u0660\u0662\u0666 \u0645\u0646\u0635\u0629 \u0627\u0644\u0639\u0628\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \xB7 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629"));
}
Object.assign(window, {
  Navbar,
  Footer,
  NEWOBOUR_NAV: NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Chrome-standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Chrome.jsx
try { (() => {
// NewObour platform chrome: Navbar + Footer. Exports to window.
const {
  useState
} = React;
const LOGO = '../../assets/logo-mark.png';
const LOGO_LIGHT = '../../assets/logo-mark-light.png';
const NAV = [{
  id: 'home',
  label: 'الرئيسية'
}, {
  id: 'market',
  label: 'الماركت بليس'
}, {
  id: 'ledger',
  label: 'كشوف التقنين'
}, {
  id: 'news',
  label: 'الأخبار والمعلومات'
}, {
  id: 'guide',
  label: 'دليل الترخيص'
}];
function Navbar({
  active,
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 'var(--navbar-h)',
      background: 'var(--navy-800)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      padding: '0 36px',
      boxShadow: '0 2px 16px rgba(11,27,51,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO_LIGHT,
    alt: "NewObour",
    style: {
      height: 42
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 18
    }
  }, "\u0627\u0644\u0639\u0628\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-num)',
      fontSize: 10.5,
      letterSpacing: '0.16em',
      color: 'var(--gold-400)',
      marginTop: 3
    }
  }, "NEW OBOUR CITY"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      flex: 1
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => onNav(n.id),
    style: {
      position: 'relative',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: active === n.id ? '#fff' : 'rgba(255,255,255,0.72)',
      fontFamily: 'var(--font-base)',
      fontSize: 15,
      fontWeight: active === n.id ? 700 : 500,
      padding: '10px 14px',
      transition: 'color var(--dur-base)'
    }
  }, n.label, active === n.id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInline: 14,
      bottom: 2,
      height: 3,
      borderRadius: 3,
      background: 'var(--gold-500)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('dashboard'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.22)',
      color: '#fff',
      cursor: 'pointer',
      fontFamily: 'var(--font-base)',
      fontSize: 14,
      fontWeight: 600,
      padding: '9px 16px',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "layout-dashboard",
    style: {
      width: 16,
      height: 16
    }
  }), "\u0644\u0648\u062D\u062A\u064A"), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--gold-600)',
      border: 'none',
      color: 'var(--navy-900)',
      cursor: 'pointer',
      fontFamily: 'var(--font-base)',
      fontSize: 14,
      fontWeight: 700,
      padding: '10px 18px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-gold)'
    }
  }, "\u0623\u0636\u0641 \u0639\u0631\u0636\u0643")));
}
function Footer() {
  const cols = [{
    h: 'الخدمات',
    items: ['كشوف التقنين', 'دليل الترخيص', 'تكاليف البناء', 'إجراءات الاستلام']
  }, {
    h: 'الماركت بليس',
    items: ['عروض الأراضي', 'الوحدات السكنية', 'الوحدات التجارية', 'طلبات الشراء']
  }, {
    h: 'المدينة',
    items: ['الأخبار والمرافق', 'الخرائط والمخططات', 'اللوائح والقوانين', 'تواصل معنا']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: 'rgba(255,255,255,0.66)',
      padding: '52px 36px 28px',
      fontFamily: 'var(--font-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      flexWrap: 'wrap',
      maxWidth: 'var(--container-xl)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 240px',
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO_LIGHT,
    alt: "",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      color: '#fff'
    }
  }, "\u0627\u0644\u0639\u0628\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.8,
      margin: 0
    }
  }, "\u0627\u0644\u062F\u0644\u064A\u0644 \u0627\u0644\u0631\u0633\u0645\u064A \u0648\u0627\u0644\u0645\u0648\u062B\u0648\u0642 \u0644\u0633\u0643\u0627\u0646 \u0648\u0645\u0633\u062A\u062B\u0645\u0631\u064A \u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0639\u0628\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u2014 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0643\u0634\u0648\u0641\u060C \u0627\u0644\u0623\u062E\u0628\u0627\u0631\u060C \u0648\u0633\u0648\u0642 \u0627\u0644\u0623\u0631\u0627\u0636\u064A \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      flex: '0 1 180px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 700,
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 14,
      cursor: 'pointer'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)',
      marginTop: 36,
      paddingTop: 20,
      fontSize: 13,
      textAlign: 'center',
      maxWidth: 'var(--container-xl)',
      margin: '36px auto 0'
    }
  }, "\xA9 \u0662\u0660\u0662\u0666 \u0645\u0646\u0635\u0629 \u0627\u0644\u0639\u0628\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \xB7 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629"));
}
Object.assign(window, {
  Navbar,
  Footer,
  NEWOBOUR_NAV: NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/ScreensHome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// NewObour platform — Home & Market screens. Exports to window.
const {
  useState: useStateS
} = React;
function Section({
  title,
  subtitle,
  action,
  children,
  bg
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg || 'transparent',
      padding: '52px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: 'var(--navy-800)',
      margin: 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 15,
      margin: '6px 0 0'
    }
  }, subtitle)), action), children));
}
function HomeScreen({
  onNav
}) {
  const {
    LedgerSearch,
    PropertyCard,
    Badge,
    Button
  } = window.NewObourDesignSystem_0eda04;
  const props = window.NEWOBOUR_PROPS.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'linear-gradient(135deg, #0b1b33 0%, #13294b 55%, #1c3a63 100%)',
      color: '#fff',
      padding: '72px 36px 96px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.06,
      backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
      backgroundSize: '28px 28px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 16px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(201,152,62,0.16)',
      border: '1px solid rgba(201,152,62,0.4)',
      color: 'var(--gold-300)',
      fontSize: 13.5,
      fontWeight: 700,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shield-check",
    style: {
      width: 16,
      height: 16
    }
  }), "\u0627\u0644\u062F\u0644\u064A\u0644 \u0627\u0644\u0631\u0633\u0645\u064A \u0648\u0627\u0644\u0645\u0648\u062B\u0648\u0642 \u0644\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0639\u0628\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 46,
      fontWeight: 900,
      lineHeight: 1.2,
      margin: '0 0 16px',
      color: '#fff'
    }
  }, "\u0643\u0644 \u0645\u0627 \u064A\u062E\u0635 \u0623\u0631\u0636\u0643 \u0641\u064A ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, "\u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.82)',
      maxWidth: 680,
      margin: '0 auto 36px'
    }
  }, "\u062A\u0627\u0628\u0639 \u0643\u0634\u0648\u0641 \u0627\u0644\u062A\u0642\u0646\u064A\u0646\u060C \u0627\u0637\u0651\u0644\u0639 \u0639\u0644\u0649 \u0627\u0644\u0623\u062E\u0628\u0627\u0631 \u0627\u0644\u0631\u0633\u0645\u064A\u0629\u060C \u0648\u0627\u0639\u0631\u0636 \u0623\u0648 \u0627\u0634\u062A\u0631\u0650 \u0627\u0644\u0623\u0631\u0627\u0636\u064A \u0648\u0627\u0644\u0648\u062D\u062F\u0627\u062A \u0628\u062B\u0642\u0629 \u062A\u0627\u0645\u0629."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(LedgerSearch, {
    onSearch: () => onNav('ledger')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      justifyContent: 'center',
      marginTop: 18,
      color: 'rgba(255,255,255,0.7)',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0628\u062D\u062B \u0634\u0627\u0626\u0639:"), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer',
      color: 'var(--gold-300)'
    }
  }, "\u0627\u0644\u062D\u064A \u0627\u0644\u062B\u0627\u0644\u062B"), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer',
      color: 'var(--gold-300)'
    }
  }, "\u0643\u0634\u0641 \u062C\u0645\u0639\u064A\u0629 \u0627\u0644\u0646\u0635\u0631"), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer',
      color: 'var(--gold-300)'
    }
  }, "\u0631\u0642\u0645 \u0642\u0637\u0639\u0629 \u0623\u0635\u0644\u064A\u0629"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '-56px auto 0',
      padding: '0 36px',
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, window.NEWOBOUR_SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    onClick: () => onNav(s.to),
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 22,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-md)',
      transition: 'transform var(--dur-base), box-shadow var(--dur-base)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--navy-700)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--navy-800)',
      margin: '0 0 6px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 1.6
    }
  }, s.desc))))), /*#__PURE__*/React.createElement(Section, {
    title: "\u0639\u0631\u0648\u0636 \u0645\u0645\u064A\u0632\u0629 \u0648\u0645\u0648\u062B\u0651\u0642\u0629",
    subtitle: "\u0623\u062D\u062F\u062B \u0627\u0644\u0623\u0631\u0627\u0636\u064A \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629 \u0644\u0644\u0628\u064A\u0639 \u0641\u064A \u0627\u0644\u0645\u062F\u064A\u0646\u0629",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNav('market')
    }, "\u0643\u0644 \u0627\u0644\u0639\u0631\u0648\u0636")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, props.map(p => /*#__PURE__*/React.createElement(PropertyCard, _extends({
    key: p.id
  }, p, {
    onClick: () => onNav('market')
  }))))), /*#__PURE__*/React.createElement(Section, {
    title: "\u0623\u062E\u0628\u0627\u0631 \u0627\u0644\u0645\u062F\u064A\u0646\u0629",
    subtitle: "\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0631\u0633\u0645\u064A\u0629 \u0645\u0646 \u062F\u0627\u062E\u0644 \u0627\u0644\u062C\u0647\u0627\u0632",
    bg: "var(--white)",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onNav('news')
    }, "\u0643\u0644 \u0627\u0644\u0623\u062E\u0628\u0627\u0631 \u2190")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16
    }
  }, window.NEWOBOUR_NEWS.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      background: 'var(--paper)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--navy-700)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "megaphone",
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: n.tone,
    size: "sm"
  }, n.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, n.date)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      fontWeight: 600,
      color: 'var(--text-strong)',
      lineHeight: 1.5
    }
  }, n.title)))))));
}
function MarketScreen({
  onNav
}) {
  const {
    PropertyCard,
    Select,
    Badge,
    StatusBadge
  } = window.NewObourDesignSystem_0eda04;
  const [status, setStatus] = useStateS('all');
  const all = window.NEWOBOUR_PROPS;
  const list = status === 'all' ? all : all.filter(p => p.status === status);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-800)',
      color: '#fff',
      padding: '40px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      margin: '0 0 8px'
    }
  }, "\u0627\u0644\u0645\u0627\u0631\u0643\u062A \u0628\u0644\u064A\u0633"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.78)',
      fontSize: 16,
      margin: 0
    }
  }, "\u062A\u0635\u0641\u0651\u062D \u0639\u0631\u0648\u0636 \u0627\u0644\u0623\u0631\u0627\u0636\u064A \u0648\u0627\u0644\u0648\u062D\u062F\u0627\u062A \u062D\u0633\u0628 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0648\u0627\u0644\u0645\u0648\u0642\u0639"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '28px 36px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap',
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 14,
      marginBottom: 24,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)',
      fontSize: 14
    }
  }, "\u062A\u0635\u0641\u064A\u0629:"), [['all', 'الكل'], ['ledger', 'نزلت كشف'], ['alloc', 'تم التخصيص'], ['license', 'تم الترخيص'], ['build', 'جاري البناء']].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setStatus(v),
    style: {
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--font-base)',
      fontSize: 13.5,
      fontWeight: 700,
      border: '1px solid ' + (status === v ? 'var(--navy-800)' : 'var(--border-default)'),
      background: status === v ? 'var(--navy-800)' : '#fff',
      color: status === v ? '#fff' : 'var(--text-body)'
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['الأحدث', 'الأقل سعراً', 'الأكبر مساحة']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-num)',
      fontWeight: 700,
      color: 'var(--navy-800)'
    }
  }, list.length), " \u0639\u0631\u0636 \u0645\u062A\u0627\u062D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, list.map(p => /*#__PURE__*/React.createElement(PropertyCard, _extends({
    key: p.id
  }, p, {
    onClick: () => onNav('home')
  }))))));
}
Object.assign(window, {
  HomeScreen,
  MarketScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/ScreensHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/ScreensLedger.jsx
try { (() => {
// NewObour platform — Ledger search & Owner dashboard. Exports to window.
const {
  useState: useStateL
} = React;
function LedgerScreen() {
  const {
    LedgerSearch,
    StatusBadge,
    Button,
    Badge,
    Input
  } = window.NewObourDesignSystem_0eda04;
  const [done, setDone] = useStateL(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #0b1b33, #13294b)',
      color: '#fff',
      padding: '44px 36px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      margin: '0 0 8px'
    }
  }, "\u0643\u0634\u0648\u0641 \u0627\u0644\u062A\u0642\u0646\u064A\u0646"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: 16,
      margin: '0 0 28px'
    }
  }, "\u062A\u0623\u0643\u0651\u062F \u0645\u0646 \u0646\u0632\u0648\u0644 \u0627\u0633\u0645\u0643 \u0641\u064A \u0627\u0644\u0643\u0634\u0648\u0641 \u0628\u0627\u0644\u0628\u062D\u062B \u0628\u0628\u064A\u0627\u0646\u0627\u062A\u0643 \u0627\u0644\u0623\u0635\u0644\u064A\u0629"), /*#__PURE__*/React.createElement(LedgerSearch, {
    onSearch: () => setDone(true)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '32px 36px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--success-100)',
      borderBottom: '1px solid #cbe6d8',
      padding: '18px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--success-600)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 800,
      color: '#176043'
    }
  }, "\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0627\u0633\u0645 \u0641\u064A \u0627\u0644\u0643\u0634\u0648\u0641"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 14,
      color: '#1c7257'
    }
  }, "\u0646\u0632\u0644 \u0627\u0633\u0645\u0643 \u0636\u0645\u0646 \u0643\u0634\u0641 \u0627\u0644\u062D\u064A \u0627\u0644\u062B\u0627\u0644\u062B \u2014 \u064A\u0645\u0643\u0646\u0643 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062E\u0637\u0648\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18,
      marginBottom: 22
    }
  }, [['اسم المالك الأصلي', 'محمد عبد الله سالم'], ['الجمعية', 'جمعية النصر للإسكان'], ['رقم القطعة الأصلية', '147 / ب'], ['المساحة', '320 م²'], ['الحالة الحالية', 'نزلت كشف'], ['تاريخ نزول الكشف', '١٢ / ٠٣ / ٢٠٢٦']].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginBottom: 4
    }
  }, k), k === 'الحالة الحالية' ? /*#__PURE__*/React.createElement(StatusBadge, {
    status: "ledger"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      fontWeight: 700,
      color: 'var(--text-strong)',
      fontFamily: k.includes('رقم') || k.includes('المساحة') || k.includes('تاريخ') ? 'var(--font-num)' : 'var(--font-base)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gold-50)',
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "headset",
    style: {
      width: 26,
      height: 26,
      color: 'var(--gold-700)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--navy-800)',
      fontSize: 15
    }
  }, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u062E\u062F\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0644\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u062E\u0637\u0648\u0627\u062A"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, "\u062F\u0641\u0639 \u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641\u060C \u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645\u060C \u0648\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u062D\u062A\u0649 \u0627\u0644\u062A\u062E\u0635\u064A\u0635")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent"
  }, "\u0627\u0628\u062F\u0623 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell-ring",
    style: {
      width: 20,
      height: 20,
      color: 'var(--navy-700)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--navy-800)'
    }
  }, "\u0644\u0645 \u064A\u0638\u0647\u0631 \u0627\u0633\u0645\u0643 \u0628\u0639\u062F\u061F")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 18px',
      fontSize: 14.5,
      color: 'var(--text-muted)',
      lineHeight: 1.7
    }
  }, "\u0633\u062C\u0651\u0644 \u0628\u064A\u0627\u0646\u0627\u062A\u0643 \u0648\u0633\u0646\u064F\u0646\u0628\u0651\u0647\u0643 \u0641\u0648\u0631 \u0635\u062F\u0648\u0631 \u0627\u0644\u0643\u0634\u0641 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0623\u0648 \u0641\u062A\u062D \u0628\u0627\u0628 \u0627\u0644\u062A\u0642\u062F\u064A\u0645."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 14,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644",
    placeholder: "\u0643\u0645\u0627 \u0641\u064A \u0625\u062B\u0628\u0627\u062A \u0627\u0644\u0645\u0644\u0643\u064A\u0629"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0631\u0642\u0645 \u0627\u0644\u062A\u0644\u064A\u0641\u0648\u0646",
    placeholder: "01xxxxxxxxx"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true
  }, "\u0646\u0628\u0651\u0647\u0646\u064A \u0639\u0646\u062F \u0627\u0644\u0646\u0632\u0648\u0644")))));
}
function DashboardScreen() {
  const {
    StatusBadge,
    Badge,
    Button,
    Avatar
  } = window.NewObourDesignSystem_0eda04;
  const feed = [{
    tag: 'مرافق',
    tone: 'gold',
    text: 'جارٍ توصيل المرافق للمجاورة ١٢ — مرفق صور من الموقع',
    date: 'منذ ساعتين'
  }, {
    tag: 'تسليمات',
    tone: 'success',
    text: 'سيتم تسليم قطعتك يوم الأحد ١٦ مارس بإذن الله',
    date: 'أمس'
  }, {
    tag: 'عمران',
    tone: 'info',
    text: 'تم بدء إنشاء مدرسة جديدة على بُعد ٣٠٠م من قطعتك',
    date: 'منذ ٤ أيام'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      minHeight: '70vh',
      padding: '36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0623\u062D\u0645\u062F \u0633\u0645\u064A\u0631",
    size: 52,
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 17,
      color: 'var(--navy-800)'
    }
  }, "\u0623\u0647\u0644\u0627\u064B\u060C \u0623\u062D\u0645\u062F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\u062D\u0633\u0627\u0628 \u0634\u062E\u0635\u064A"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-800)',
      borderRadius: 'var(--radius-lg)',
      padding: 22,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--gold-400)',
      fontWeight: 700
    }
  }, "\u0642\u0637\u0639\u062A\u064A \u0627\u0644\u0645\u062A\u0627\u0628\u064E\u0639\u0629"), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "alloc",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      marginBottom: 4
    }
  }, "\u0642\u0637\u0639\u0629 B-147"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.72)',
      marginBottom: 18
    }
  }, "\u0627\u0644\u062D\u064A \u0627\u0644\u062B\u0627\u0644\u062B \xB7 \u0645\u062C\u0627\u0648\u0631\u0629 \u0661\u0662 \xB7 \u0628\u0644\u0648\u0643 \u0664"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      borderTop: '1px solid rgba(255,255,255,0.14)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.6)'
    }
  }, "\u0627\u0644\u0645\u0633\u0627\u062D\u0629"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-num)',
      fontWeight: 700,
      fontSize: 18
    }
  }, "320 \u0645\xB2")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.6)'
    }
  }, "\u0631\u0642\u0645 \u0627\u0644\u0642\u0637\u0639\u0629"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-num)',
      fontWeight: 700,
      fontSize: 18
    }
  }, "B-147")))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    block: true,
    iconStart: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "plus",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "\u0623\u0636\u0641 \u0642\u0637\u0639\u0629 \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u0629")), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: 'var(--navy-800)',
      margin: '0 0 6px'
    }
  }, "\u062E\u0644\u0627\u0635\u0629 \u0627\u0644\u0623\u062E\u0628\u0627\u0631 \u0627\u0644\u0645\u062E\u0635\u0635\u0629"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 15,
      margin: '0 0 24px'
    }
  }, "\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u062A\u062E\u0635 \u0627\u0644\u062D\u064A \u0627\u0644\u062B\u0627\u0644\u062B \u0648\u0627\u0644\u0645\u062C\u0627\u0648\u0631\u0629 \u0661\u0662 \u2014 \u062A\u0638\u0647\u0631 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0641\u064A \u0644\u0648\u062D\u062A\u0643"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, feed.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      boxShadow: 'var(--shadow-xs)',
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--navy-700)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: f.tone,
    size: "sm"
  }, f.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-faint)'
    }
  }, f.date)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-strong)',
      lineHeight: 1.6
    }
  }, f.text))))))));
}
Object.assign(window, {
  LedgerScreen,
  DashboardScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/ScreensLedger.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/data.js
try { (() => {
// Sample marketplace data for the NewObour platform UI kit.
window.NEWOBOUR_PROPS = [{
  id: 1,
  status: 'alloc',
  district: 'الحي الثالث',
  block: '12',
  plotNo: 'B-147',
  area: 320,
  price: 2450000,
  features: ['ناصية', 'بحري'],
  verified: true
}, {
  id: 2,
  status: 'ledger',
  district: 'الحي الأول',
  block: '4',
  plotNo: 'A-32',
  area: 500,
  price: 3100000,
  features: ['خدمات'],
  verified: false
}, {
  id: 3,
  status: 'license',
  district: 'الحي الخامس',
  block: '7',
  plotNo: 'E-08',
  area: 408,
  price: 4200000,
  features: ['ناصية', 'خدمات'],
  verified: true
}, {
  id: 4,
  status: 'build',
  district: 'الحي الثاني',
  block: '9',
  plotNo: 'C-211',
  area: 280,
  price: 2750000,
  features: ['بحري'],
  verified: true
}, {
  id: 5,
  status: 'mail',
  district: 'الحي السابع',
  block: '3',
  plotNo: 'G-55',
  area: 600,
  price: 3600000,
  features: ['خدمات'],
  verified: false
}, {
  id: 6,
  status: 'alloc',
  district: 'الحي الثالث',
  block: '14',
  plotNo: 'B-309',
  area: 350,
  price: 2900000,
  features: ['ناصية'],
  verified: true
}];
window.NEWOBOUR_NEWS = [{
  tag: 'مرافق',
  date: 'منذ ٣ ساعات',
  title: 'جارٍ توصيل خطوط الكهرباء للمجاورة ١٢ بالحي الثالث',
  tone: 'gold'
}, {
  tag: 'تسليمات',
  date: 'أمس',
  title: 'بدء تسليم قطع أراضي الحي الخامس اعتباراً من الأحد القادم',
  tone: 'success'
}, {
  tag: 'طرق',
  date: 'منذ يومين',
  title: 'افتتاح المحور المروري الرابط بين الحي الأول والمنطقة الصناعية',
  tone: 'info'
}, {
  tag: 'لوائح',
  date: 'منذ ٣ أيام',
  title: 'تحديث اشتراطات البناء والارتدادات للقطع السكنية',
  tone: 'navy'
}];
window.NEWOBOUR_SERVICES = [{
  icon: 'file-search',
  title: 'كشوف التقنين',
  desc: 'ابحث باسمك أو رقمك القومي للتأكد من نزول الكشف',
  to: 'ledger'
}, {
  icon: 'building-2',
  title: 'الماركت بليس',
  desc: 'تصفّح عروض الأراضي والوحدات الموثّقة',
  to: 'market'
}, {
  icon: 'newspaper',
  title: 'الأخبار والمرافق',
  desc: 'تحديثات رسمية عن المرافق والطرق والتسليمات',
  to: 'news'
}, {
  icon: 'scroll-text',
  title: 'دليل الترخيص',
  desc: 'خطوات الترخيص والبناء والاستلام والتكاليف',
  to: 'guide'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.LedgerSearch = __ds_scope.LedgerSearch;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

})();
