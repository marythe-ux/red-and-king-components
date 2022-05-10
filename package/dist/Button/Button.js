var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import { jsx as _jsx } from 'react/jsx-runtime';
import styled from '@emotion/styled';
var styledPropHandler = {
  color: function (_a) {
    var color = _a.color;
    switch (color) {
      case 'secondary':
        return '\n          color: #333;\n          background-color: transparent;\n          box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 1px 2px inset;\n        ';
      default:
        return '\n          color: #fff;\n          background-color: #009179;\n        ';
    }
  },
  size: function (_a) {
    var size = _a.size;
    switch (size) {
      case 'small':
        return '\n          font-size: 12px;\n          padding: 10px 16px;\n        ';
      case 'large':
        return '\n          font-size: 16px;\n          padding: 12px 24px;\n        ';
      default:
        return '\n          font-size: 14px;\n          padding: 11px 20px;\n        ';
    }
  },
};
export var ButtonStyled = styled('button')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n  ",
        '\n  ',
        '\n',
      ],
      [
        "\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n  ",
        '\n  ',
        '\n',
      ]
    )),
  styledPropHandler.color,
  styledPropHandler.size
);
var Button = function (_a) {
  var label = _a.label,
    size = _a.size,
    color = _a.color,
    onClick = _a.onClick;
  return _jsx(
    ButtonStyled,
    __assign(
      { color: color, onClick: onClick, size: size, type: 'button' },
      { children: label }
    )
  );
};
export default Button;
var templateObject_1;
