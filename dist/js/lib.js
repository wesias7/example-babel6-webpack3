'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lib = function () {
    function lib() {
        _classCallCheck(this, lib);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        //console.log('생성자 함수를 통해서 lib의 인스턴스를 생성합니다.');
        this._message = [].concat(args);
    }

    _createClass(lib, [{
        key: 'message',
        set: function set() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            //console.log('setter 함수로 message의 값을 배정합니다.');
            this._message = args;
        },
        get: function get() {
            //console.log('getter 함수로 message의 값을 불러옵니다.');
            return this._message;
        }
    }, {
        key: 'enterance',
        get: function get() {
            //console.log('enterance 함수로 message의 값을 불러옵니다.');
            return this._message.join(' ').concat('!');
        }
    }]);

    return lib;
}();

exports.default = lib;