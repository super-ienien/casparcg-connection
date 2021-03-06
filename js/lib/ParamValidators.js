"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ServerStateEnum_1 = require("./ServerStateEnum");
var AbstractCommand_1 = require("./AbstractCommand");
var Validation;
(function (Validation) {
    /**
     *
     */
    var AbstractValidator = /** @class */ (function () {
        function AbstractValidator() {
            this.resolved = false;
        }
        return AbstractValidator;
    }());
    Validation.AbstractValidator = AbstractValidator;
    /**
     *
     */
    var StringValidator = /** @class */ (function (_super) {
        __extends(StringValidator, _super);
        /**
         *
         */
        function StringValidator(lazy) {
            if (lazy === void 0) { lazy = true; }
            var _this = _super.call(this) || this;
            _this.lazy = lazy;
            return _this;
        }
        /**
         *
         */
        StringValidator.prototype.resolve = function (data) {
            var textstring = '';
            function checkTextstring(rawClipNameString) {
                if (rawClipNameString == null) {
                    return '';
                }
                // trim all non-textual content
                rawClipNameString = rawClipNameString.trim();
                // check length
                if (rawClipNameString.length === 0) {
                    return '';
                }
                return rawClipNameString;
            }
            if (Array.isArray(data)) {
                var i = 0;
                // switch lazy/greedy mode
                if (this.lazy) {
                    // lazy = return first valid hit
                    do {
                        textstring = checkTextstring(data[i]);
                        i++;
                    } while (textstring == null);
                }
                else {
                    // greedy
                    textstring = '';
                    data.forEach(function (i) {
                        var o = checkTextstring(i);
                        textstring += (o) ? o + ' ' : '';
                    });
                }
            }
            else if (typeof data === 'object' || typeof data === 'string') {
                textstring = data !== null ? data.toString() : '';
            }
            if (!checkTextstring(textstring)) {
                return false;
            }
            return textstring;
        };
        return StringValidator;
    }(AbstractValidator));
    Validation.StringValidator = StringValidator;
    /***/
    var FilterValidator = /** @class */ (function (_super) {
        __extends(FilterValidator, _super);
        function FilterValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FilterValidator;
    }(StringValidator));
    Validation.FilterValidator = FilterValidator;
    /***/
    var URLValidator = /** @class */ (function (_super) {
        __extends(URLValidator, _super);
        function URLValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        URLValidator.prototype.resolve = function (data) {
            var url = _super.prototype.resolve.call(this, data).toString();
            // add quotation
            var quotedUrl = "\"" + url + "\"";
            return { raw: url, payload: quotedUrl };
        };
        return URLValidator;
    }(StringValidator));
    Validation.URLValidator = URLValidator;
    /***/
    var ChannelLayoutValidator = /** @class */ (function (_super) {
        __extends(ChannelLayoutValidator, _super);
        function ChannelLayoutValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ChannelLayoutValidator;
    }(StringValidator));
    Validation.ChannelLayoutValidator = ChannelLayoutValidator;
    /**
     *
     */
    var ClipNameValidator = /** @class */ (function (_super) {
        __extends(ClipNameValidator, _super);
        function ClipNameValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         *
         */
        ClipNameValidator.prototype.resolve = function (data) {
            var clipName = '';
            function checkClipNameString(rawClipNameString) {
                if (rawClipNameString == null) {
                    return '';
                }
                // trim all non-textual content
                rawClipNameString = rawClipNameString.trim();
                // check length
                if (rawClipNameString.length === 0) {
                    return '';
                }
                return rawClipNameString;
            }
            if (Array.isArray(data)) {
                var i = 0;
                do {
                    clipName = checkClipNameString(data[i]);
                    i++;
                } while (clipName == null);
            }
            else if (typeof data === 'object' || typeof data === 'string') {
                clipName = data !== null ? data.toString() : '';
            }
            if (!checkClipNameString(clipName)) {
                return false;
            }
            // add quotation
            var quotedClipName = "\"" + clipName + "\"";
            return { raw: clipName, payload: quotedClipName };
        };
        return ClipNameValidator;
    }(AbstractValidator));
    Validation.ClipNameValidator = ClipNameValidator;
    /**
     *
     */
    var TemplateNameValidator = /** @class */ (function (_super) {
        __extends(TemplateNameValidator, _super);
        function TemplateNameValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TemplateNameValidator;
    }(ClipNameValidator));
    Validation.TemplateNameValidator = TemplateNameValidator;
    /**
     *
     */
    var DataNameValidator = /** @class */ (function (_super) {
        __extends(DataNameValidator, _super);
        function DataNameValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DataNameValidator;
    }(ClipNameValidator));
    Validation.DataNameValidator = DataNameValidator;
    /**
     *
     */
    var EnumValidator = /** @class */ (function (_super) {
        __extends(EnumValidator, _super);
        /**
         *
         */
        function EnumValidator(_enumClass) {
            var _this = _super.call(this) || this;
            _this._enumClass = _enumClass;
            return _this;
        }
        /**
         *
         */
        EnumValidator.prototype.resolve = function (data) {
            if (data instanceof this._enumClass) {
                return data.value;
            }
            else if (typeof data === 'string') {
                var stringCast = data !== null ? data.toString() : '';
                // format stringy enum value
                stringCast = stringCast.toUpperCase();
                stringCast = stringCast.replace(' ', '_');
                if (this._enumClass.hasOwnProperty(stringCast)) {
                    return this._enumClass[stringCast].value;
                }
            }
            return false;
        };
        return EnumValidator;
    }(AbstractValidator));
    Validation.EnumValidator = EnumValidator;
    /**
     *
     */
    var ChannelFormatValidator = /** @class */ (function (_super) {
        __extends(ChannelFormatValidator, _super);
        /**
         *
         */
        function ChannelFormatValidator() {
            return _super.call(this) || this;
        }
        /**
         *
         */
        ChannelFormatValidator.prototype.resolve = function (data) {
            if (data instanceof ServerStateEnum_1.Enum.ChannelFormat) {
                return data.value;
            }
            else if (typeof data === 'string') {
                var stringCast = data !== null ? data.toString() : '';
                // format stringy enum value
                stringCast = stringCast.toUpperCase();
                stringCast = stringCast.replace(' ', '_');
                if (ServerStateEnum_1.Enum.ChannelFormat.hasOwnProperty(stringCast)) {
                    return ServerStateEnum_1.Enum.ChannelFormat[stringCast].value;
                }
                else if (ServerStateEnum_1.Enum.ChannelFormat.hasOwnProperty('SD_' + stringCast)) {
                    return ServerStateEnum_1.Enum.ChannelFormat['SD_' + stringCast].value;
                }
                else if (ServerStateEnum_1.Enum.ChannelFormat.hasOwnProperty('HD_' + stringCast)) {
                    return ServerStateEnum_1.Enum.ChannelFormat['HD_' + stringCast].value;
                }
                else if (ServerStateEnum_1.Enum.ChannelFormat.hasOwnProperty('UHD_' + stringCast)) {
                    return ServerStateEnum_1.Enum.ChannelFormat['UHD_' + stringCast].value;
                }
            }
            return false;
        };
        return ChannelFormatValidator;
    }(AbstractValidator));
    Validation.ChannelFormatValidator = ChannelFormatValidator;
    /**
     *
     */
    var KeywordValidator = /** @class */ (function (_super) {
        __extends(KeywordValidator, _super);
        /**
         *
         */
        function KeywordValidator(keyword, caseSensitive) {
            if (caseSensitive === void 0) { caseSensitive = false; }
            var _this = _super.call(this) || this;
            _this._keyword = keyword;
            _this._caseSensitive = caseSensitive;
            return _this;
        }
        /**
         *
         */
        KeywordValidator.prototype.resolve = function (data) {
            var keywordCopy = this._keyword;
            if (!this._caseSensitive) {
                keywordCopy = keywordCopy.toLowerCase();
            }
            if (Array.isArray(data)) {
                if (!this._caseSensitive) {
                    data = data.map(function (value) { return String(value).toLowerCase(); });
                }
                if (data.indexOf(keywordCopy) > -1) {
                    return this._keyword;
                }
            }
            else if (typeof data === 'object' && data !== null) {
                var objectCast = data;
                if (!this._caseSensitive) {
                    for (var key in objectCast) {
                        objectCast[key] = String(objectCast[key]).toLowerCase();
                    }
                }
                if (objectCast.hasOwnProperty(keywordCopy)) {
                    return this._keyword;
                }
            }
            else if (typeof data === 'string') {
                if (!this._caseSensitive) {
                    data = String(data).toLowerCase();
                }
                if (data === keywordCopy) {
                    return this._keyword;
                }
            }
            return false;
        };
        return KeywordValidator;
    }(AbstractValidator));
    Validation.KeywordValidator = KeywordValidator;
    /**
     *
     */
    var FrameValidator = /** @class */ (function (_super) {
        __extends(FrameValidator, _super);
        /**
         *
         */
        function FrameValidator(keyword) {
            var _this = _super.call(this) || this;
            _this._keyword = keyword;
            return _this;
        }
        /**
         *
         */
        FrameValidator.prototype.resolve = function (data) {
            if (Array.isArray(data)) {
                data = data.map(function (element) { return String(element).toLowerCase(); });
                var index = data.indexOf(this._keyword.toLowerCase());
                if (index > -1) {
                    data = parseInt(data[index + 1], 10);
                }
            }
            else if (typeof data === 'object' && data !== null) {
                var objectCast = data;
                if (objectCast.hasOwnProperty(this._keyword)) {
                    data = objectCast[this._keyword];
                }
            }
            else if (typeof data === 'string') {
                data = Number(data);
            }
            if (typeof data === 'number') {
                var numberCast = data;
                if (numberCast >= 0) {
                    return numberCast;
                }
            }
            return false;
        };
        return FrameValidator;
    }(AbstractValidator));
    Validation.FrameValidator = FrameValidator;
    /**
     *
     */
    var PositiveNumberValidatorBetween = /** @class */ (function (_super) {
        __extends(PositiveNumberValidatorBetween, _super);
        /**
         *
         */
        function PositiveNumberValidatorBetween(_min, _max) {
            if (_min === void 0) { _min = Number.NEGATIVE_INFINITY; }
            if (_max === void 0) { _max = Number.POSITIVE_INFINITY; }
            var _this = _super.call(this) || this;
            _this._min = _min;
            _this._max = _max;
            return _this;
        }
        /**
         *
         */
        PositiveNumberValidatorBetween.prototype.resolve = function (data) {
            if (typeof data === 'number') {
                var numberCast = Math.max(Math.min(data, this._max), this._min);
                if (numberCast >= 0) {
                    return numberCast;
                }
            }
            return false;
        };
        return PositiveNumberValidatorBetween;
    }(AbstractValidator));
    Validation.PositiveNumberValidatorBetween = PositiveNumberValidatorBetween;
    /**
     *
     */
    var PositiveNumberValidator = /** @class */ (function (_super) {
        __extends(PositiveNumberValidator, _super);
        /**
         *
         */
        function PositiveNumberValidator() {
            return _super.call(this) || this;
        }
        return PositiveNumberValidator;
    }(PositiveNumberValidatorBetween));
    Validation.PositiveNumberValidator = PositiveNumberValidator;
    /**
     *
     */
    var PositiveNumberRoundValidatorBetween = /** @class */ (function (_super) {
        __extends(PositiveNumberRoundValidatorBetween, _super);
        function PositiveNumberRoundValidatorBetween() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         *
         */
        PositiveNumberRoundValidatorBetween.prototype.resolve = function (data) {
            if (data) {
                return Number(_super.prototype.resolve.call(this, data)).toFixed();
            }
            return NaN;
        };
        return PositiveNumberRoundValidatorBetween;
    }(PositiveNumberValidatorBetween));
    Validation.PositiveNumberRoundValidatorBetween = PositiveNumberRoundValidatorBetween;
    /**
     *
     */
    var NumberValidatorBetween = /** @class */ (function (_super) {
        __extends(NumberValidatorBetween, _super);
        /**
         *
         */
        function NumberValidatorBetween(_min, _max) {
            if (_min === void 0) { _min = Number.NEGATIVE_INFINITY; }
            if (_max === void 0) { _max = Number.POSITIVE_INFINITY; }
            var _this = _super.call(this) || this;
            _this._min = _min;
            _this._max = _max;
            return _this;
        }
        /**
         *
         */
        NumberValidatorBetween.prototype.resolve = function (data) {
            if (typeof data === 'number') {
                var numberCast = Math.max(Math.min(data, this._max), this._min);
                return numberCast;
            }
            return false;
        };
        return NumberValidatorBetween;
    }(AbstractValidator));
    Validation.NumberValidatorBetween = NumberValidatorBetween;
    /**
     *
     */
    var NumberValidator = /** @class */ (function (_super) {
        __extends(NumberValidator, _super);
        /**
         *
         */
        function NumberValidator() {
            return _super.call(this) || this;
        }
        return NumberValidator;
    }(NumberValidatorBetween));
    Validation.NumberValidator = NumberValidator;
    /***/
    var DecklinkDeviceValidator = /** @class */ (function (_super) {
        __extends(DecklinkDeviceValidator, _super);
        function DecklinkDeviceValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DecklinkDeviceValidator;
    }(PositiveNumberValidator));
    Validation.DecklinkDeviceValidator = DecklinkDeviceValidator;
    /**
     *
     */
    var BooleanValidatorWithDefaults = /** @class */ (function (_super) {
        __extends(BooleanValidatorWithDefaults, _super);
        /**
         *
         */
        function BooleanValidatorWithDefaults(_valueOnSuccess, _valueOnFail) {
            var _this = _super.call(this) || this;
            _this._valueOnSuccess = _valueOnSuccess;
            _this._valueOnFail = _valueOnFail;
            return _this;
        }
        /**
         *
         */
        BooleanValidatorWithDefaults.prototype.resolve = function (data, key) {
            if (Array.isArray(data)) {
                data = data.map(function (element) { return String(element).toLowerCase(); });
                var index = data.indexOf(key.toLowerCase());
                if (index > -1) {
                    data = data[index + 1];
                    if (data === undefined) {
                        data = data[index];
                    }
                    // @todo: probably add some string-parsing logic:
                    // if just a single boolean param in protocol, try to parse arrayCast[0] which should hold it
                }
                else {
                    // can't resolve array
                    data = false;
                }
            }
            var isValid = false;
            if (typeof data === 'string') {
                if (data === 'true') {
                    isValid = true;
                }
                else if (data === '1') {
                    isValid = true;
                }
                else if (data === key) {
                    isValid = true;
                }
            }
            else {
                isValid = (!!data.valueOf());
            }
            if (isValid) {
                return (this._valueOnSuccess !== undefined) ? this._valueOnSuccess : isValid;
            }
            else {
                return (this._valueOnFail !== undefined) ? this._valueOnFail : isValid;
            }
        };
        return BooleanValidatorWithDefaults;
    }(AbstractValidator));
    Validation.BooleanValidatorWithDefaults = BooleanValidatorWithDefaults;
    /**
     *
     */
    var BooleanValidator = /** @class */ (function (_super) {
        __extends(BooleanValidator, _super);
        /**
         *
         */
        function BooleanValidator() {
            return _super.call(this) || this;
        }
        return BooleanValidator;
    }(BooleanValidatorWithDefaults));
    Validation.BooleanValidator = BooleanValidator;
    /**
     *
     */
    var TemplateDataValidator = /** @class */ (function (_super) {
        __extends(TemplateDataValidator, _super);
        function TemplateDataValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         *
         */
        TemplateDataValidator.prototype.resolve = function (data) {
            var stringCast = data.toString();
            // data is object: serialize
            if (typeof data === 'object' && data !== null) {
                stringCast = JSON.stringify(data);
            }
            else if (typeof data === 'string' && data !== null) {
                stringCast = stringCast.replace(/\r|\n/g, function (charToEscape) {
                    return charToEscape === '\r' ? '\\r' : '\\n';
                });
            }
            /*	// data is string, try to de-serialize to validate as JSON
                try {
                    let objectCast = JSON.parse(stringCast);
                    return stringCast;
                } catch (e) {}
    
                // data is string, try to de-serialize to validate as XML
                let xmlCast;
                parseString(stringCast, {async: false}, (err, res) => {
                    if (res) {
                        xmlCast = res;
                    }
                });
                if (xmlCast) {
                    return stringCast;
                }*/
            // escaping
            stringCast = stringCast.replace(/([\\\"])/g, '\\$1');
            // add qoutation
            var quotedString = "\"" + stringCast + "\"";
            return { raw: stringCast, payload: quotedString };
        };
        return TemplateDataValidator;
    }(AbstractValidator));
    Validation.TemplateDataValidator = TemplateDataValidator;
    var TimecodeValidator = /** @class */ (function (_super) {
        __extends(TimecodeValidator, _super);
        function TimecodeValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TimecodeValidator;
    }(StringValidator));
    Validation.TimecodeValidator = TimecodeValidator;
    var CommandValidator = /** @class */ (function (_super) {
        __extends(CommandValidator, _super);
        function CommandValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CommandValidator.prototype.resolve = function (command) {
            if (AbstractCommand_1.Command.isIAMCPCommand(command)) {
                command.validateParams();
                var commandString = command.constructor['commandString'] + (command.address ? ' ' + command.address : '');
                for (var i in command.payload) {
                    var payload = command.payload[i];
                    commandString += (commandString.length > 0 ? ' ' : '');
                    commandString += (payload.key ? payload.key + ' ' : '') + payload.value;
                }
                return commandString;
            }
            else {
                throw new Error('Argument 0 was not an amcp command.');
            }
        };
        return CommandValidator;
    }(AbstractValidator));
    Validation.CommandValidator = CommandValidator;
})(Validation = exports.Validation || (exports.Validation = {}));
