/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    pb.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof pb
         * @interface ILoginReq
         * @property {string|null} [username] LoginReq username
         */

        /**
         * Constructs a new LoginReq.
         * @memberof pb
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {pb.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq username.
         * @member {string} username
         * @memberof pb.LoginReq
         * @instance
         */
        LoginReq.prototype.username = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof pb.LoginReq
         * @static
         * @param {pb.ILoginReq=} [properties] Properties to set
         * @returns {pb.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link pb.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof pb.LoginReq
         * @static
         * @param {pb.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link pb.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LoginReq
         * @static
         * @param {pb.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.username = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof pb.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LoginReq)
                return object;
            var message = new $root.pb.LoginReq();
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LoginReq
         * @static
         * @param {pb.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.username = "";
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof pb.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginReq
         * @function getTypeUrl
         * @memberof pb.LoginReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.LoginReq";
        };

        return LoginReq;
    })();

    pb.LoginRes = (function() {

        /**
         * Properties of a LoginRes.
         * @memberof pb
         * @interface ILoginRes
         * @property {boolean|null} [success] LoginRes success
         * @property {number|null} [uid] LoginRes uid
         */

        /**
         * Constructs a new LoginRes.
         * @memberof pb
         * @classdesc Represents a LoginRes.
         * @implements ILoginRes
         * @constructor
         * @param {pb.ILoginRes=} [properties] Properties to set
         */
        function LoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRes success.
         * @member {boolean} success
         * @memberof pb.LoginRes
         * @instance
         */
        LoginRes.prototype.success = false;

        /**
         * LoginRes uid.
         * @member {number} uid
         * @memberof pb.LoginRes
         * @instance
         */
        LoginRes.prototype.uid = 0;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @function create
         * @memberof pb.LoginRes
         * @static
         * @param {pb.ILoginRes=} [properties] Properties to set
         * @returns {pb.LoginRes} LoginRes instance
         */
        LoginRes.create = function create(properties) {
            return new LoginRes(properties);
        };

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link pb.LoginRes.verify|verify} messages.
         * @function encode
         * @memberof pb.LoginRes
         * @static
         * @param {pb.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uid);
            return writer;
        };

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link pb.LoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LoginRes
         * @static
         * @param {pb.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.uid = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRes message.
         * @function verify
         * @memberof pb.LoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            return null;
        };

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LoginRes} LoginRes
         */
        LoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LoginRes)
                return object;
            var message = new $root.pb.LoginRes();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LoginRes
         * @static
         * @param {pb.LoginRes} message LoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.uid = 0;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this LoginRes to JSON.
         * @function toJSON
         * @memberof pb.LoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginRes
         * @function getTypeUrl
         * @memberof pb.LoginRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.LoginRes";
        };

        return LoginRes;
    })();

    pb.EnterRoomReq = (function() {

        /**
         * Properties of an EnterRoomReq.
         * @memberof pb
         * @interface IEnterRoomReq
         * @property {number|null} [rid] EnterRoomReq rid
         */

        /**
         * Constructs a new EnterRoomReq.
         * @memberof pb
         * @classdesc Represents an EnterRoomReq.
         * @implements IEnterRoomReq
         * @constructor
         * @param {pb.IEnterRoomReq=} [properties] Properties to set
         */
        function EnterRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomReq rid.
         * @member {number} rid
         * @memberof pb.EnterRoomReq
         * @instance
         */
        EnterRoomReq.prototype.rid = 0;

        /**
         * Creates a new EnterRoomReq instance using the specified properties.
         * @function create
         * @memberof pb.EnterRoomReq
         * @static
         * @param {pb.IEnterRoomReq=} [properties] Properties to set
         * @returns {pb.EnterRoomReq} EnterRoomReq instance
         */
        EnterRoomReq.create = function create(properties) {
            return new EnterRoomReq(properties);
        };

        /**
         * Encodes the specified EnterRoomReq message. Does not implicitly {@link pb.EnterRoomReq.verify|verify} messages.
         * @function encode
         * @memberof pb.EnterRoomReq
         * @static
         * @param {pb.IEnterRoomReq} message EnterRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rid != null && Object.hasOwnProperty.call(message, "rid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.rid);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomReq message, length delimited. Does not implicitly {@link pb.EnterRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.EnterRoomReq
         * @static
         * @param {pb.IEnterRoomReq} message EnterRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.EnterRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.EnterRoomReq} EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.EnterRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.rid = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.EnterRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.EnterRoomReq} EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomReq message.
         * @function verify
         * @memberof pb.EnterRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rid != null && message.hasOwnProperty("rid"))
                if (!$util.isInteger(message.rid))
                    return "rid: integer expected";
            return null;
        };

        /**
         * Creates an EnterRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.EnterRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.EnterRoomReq} EnterRoomReq
         */
        EnterRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.EnterRoomReq)
                return object;
            var message = new $root.pb.EnterRoomReq();
            if (object.rid != null)
                message.rid = object.rid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.EnterRoomReq
         * @static
         * @param {pb.EnterRoomReq} message EnterRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.rid = 0;
            if (message.rid != null && message.hasOwnProperty("rid"))
                object.rid = message.rid;
            return object;
        };

        /**
         * Converts this EnterRoomReq to JSON.
         * @function toJSON
         * @memberof pb.EnterRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnterRoomReq
         * @function getTypeUrl
         * @memberof pb.EnterRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnterRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.EnterRoomReq";
        };

        return EnterRoomReq;
    })();

    pb.EnterRoomRes = (function() {

        /**
         * Properties of an EnterRoomRes.
         * @memberof pb
         * @interface IEnterRoomRes
         * @property {boolean|null} [success] EnterRoomRes success
         * @property {string|null} [roomNodeId] EnterRoomRes roomNodeId
         */

        /**
         * Constructs a new EnterRoomRes.
         * @memberof pb
         * @classdesc Represents an EnterRoomRes.
         * @implements IEnterRoomRes
         * @constructor
         * @param {pb.IEnterRoomRes=} [properties] Properties to set
         */
        function EnterRoomRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomRes success.
         * @member {boolean} success
         * @memberof pb.EnterRoomRes
         * @instance
         */
        EnterRoomRes.prototype.success = false;

        /**
         * EnterRoomRes roomNodeId.
         * @member {string} roomNodeId
         * @memberof pb.EnterRoomRes
         * @instance
         */
        EnterRoomRes.prototype.roomNodeId = "";

        /**
         * Creates a new EnterRoomRes instance using the specified properties.
         * @function create
         * @memberof pb.EnterRoomRes
         * @static
         * @param {pb.IEnterRoomRes=} [properties] Properties to set
         * @returns {pb.EnterRoomRes} EnterRoomRes instance
         */
        EnterRoomRes.create = function create(properties) {
            return new EnterRoomRes(properties);
        };

        /**
         * Encodes the specified EnterRoomRes message. Does not implicitly {@link pb.EnterRoomRes.verify|verify} messages.
         * @function encode
         * @memberof pb.EnterRoomRes
         * @static
         * @param {pb.IEnterRoomRes} message EnterRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.roomNodeId != null && Object.hasOwnProperty.call(message, "roomNodeId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomNodeId);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomRes message, length delimited. Does not implicitly {@link pb.EnterRoomRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.EnterRoomRes
         * @static
         * @param {pb.IEnterRoomRes} message EnterRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomRes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.EnterRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.EnterRoomRes} EnterRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.EnterRoomRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 3: {
                        message.roomNodeId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.EnterRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.EnterRoomRes} EnterRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomRes message.
         * @function verify
         * @memberof pb.EnterRoomRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.roomNodeId != null && message.hasOwnProperty("roomNodeId"))
                if (!$util.isString(message.roomNodeId))
                    return "roomNodeId: string expected";
            return null;
        };

        /**
         * Creates an EnterRoomRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.EnterRoomRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.EnterRoomRes} EnterRoomRes
         */
        EnterRoomRes.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.EnterRoomRes)
                return object;
            var message = new $root.pb.EnterRoomRes();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.roomNodeId != null)
                message.roomNodeId = String(object.roomNodeId);
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.EnterRoomRes
         * @static
         * @param {pb.EnterRoomRes} message EnterRoomRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.roomNodeId = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.roomNodeId != null && message.hasOwnProperty("roomNodeId"))
                object.roomNodeId = message.roomNodeId;
            return object;
        };

        /**
         * Converts this EnterRoomRes to JSON.
         * @function toJSON
         * @memberof pb.EnterRoomRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnterRoomRes
         * @function getTypeUrl
         * @memberof pb.EnterRoomRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnterRoomRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.EnterRoomRes";
        };

        return EnterRoomRes;
    })();

    pb.ReadyReq = (function() {

        /**
         * Properties of a ReadyReq.
         * @memberof pb
         * @interface IReadyReq
         */

        /**
         * Constructs a new ReadyReq.
         * @memberof pb
         * @classdesc Represents a ReadyReq.
         * @implements IReadyReq
         * @constructor
         * @param {pb.IReadyReq=} [properties] Properties to set
         */
        function ReadyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReadyReq instance using the specified properties.
         * @function create
         * @memberof pb.ReadyReq
         * @static
         * @param {pb.IReadyReq=} [properties] Properties to set
         * @returns {pb.ReadyReq} ReadyReq instance
         */
        ReadyReq.create = function create(properties) {
            return new ReadyReq(properties);
        };

        /**
         * Encodes the specified ReadyReq message. Does not implicitly {@link pb.ReadyReq.verify|verify} messages.
         * @function encode
         * @memberof pb.ReadyReq
         * @static
         * @param {pb.IReadyReq} message ReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReadyReq message, length delimited. Does not implicitly {@link pb.ReadyReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ReadyReq
         * @static
         * @param {pb.IReadyReq} message ReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ReadyReq} ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ReadyReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadyReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ReadyReq} ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyReq message.
         * @function verify
         * @memberof pb.ReadyReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReadyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ReadyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ReadyReq} ReadyReq
         */
        ReadyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ReadyReq)
                return object;
            return new $root.pb.ReadyReq();
        };

        /**
         * Creates a plain object from a ReadyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ReadyReq
         * @static
         * @param {pb.ReadyReq} message ReadyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadyReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReadyReq to JSON.
         * @function toJSON
         * @memberof pb.ReadyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadyReq
         * @function getTypeUrl
         * @memberof pb.ReadyReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadyReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ReadyReq";
        };

        return ReadyReq;
    })();

    pb.ReadyRes = (function() {

        /**
         * Properties of a ReadyRes.
         * @memberof pb
         * @interface IReadyRes
         * @property {boolean|null} [success] ReadyRes success
         */

        /**
         * Constructs a new ReadyRes.
         * @memberof pb
         * @classdesc Represents a ReadyRes.
         * @implements IReadyRes
         * @constructor
         * @param {pb.IReadyRes=} [properties] Properties to set
         */
        function ReadyRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadyRes success.
         * @member {boolean} success
         * @memberof pb.ReadyRes
         * @instance
         */
        ReadyRes.prototype.success = false;

        /**
         * Creates a new ReadyRes instance using the specified properties.
         * @function create
         * @memberof pb.ReadyRes
         * @static
         * @param {pb.IReadyRes=} [properties] Properties to set
         * @returns {pb.ReadyRes} ReadyRes instance
         */
        ReadyRes.create = function create(properties) {
            return new ReadyRes(properties);
        };

        /**
         * Encodes the specified ReadyRes message. Does not implicitly {@link pb.ReadyRes.verify|verify} messages.
         * @function encode
         * @memberof pb.ReadyRes
         * @static
         * @param {pb.IReadyRes} message ReadyRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified ReadyRes message, length delimited. Does not implicitly {@link pb.ReadyRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ReadyRes
         * @static
         * @param {pb.IReadyRes} message ReadyRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyRes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ReadyRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ReadyRes} ReadyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ReadyRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadyRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ReadyRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ReadyRes} ReadyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyRes message.
         * @function verify
         * @memberof pb.ReadyRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates a ReadyRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ReadyRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ReadyRes} ReadyRes
         */
        ReadyRes.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ReadyRes)
                return object;
            var message = new $root.pb.ReadyRes();
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from a ReadyRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ReadyRes
         * @static
         * @param {pb.ReadyRes} message ReadyRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadyRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this ReadyRes to JSON.
         * @function toJSON
         * @memberof pb.ReadyRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadyRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadyRes
         * @function getTypeUrl
         * @memberof pb.ReadyRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadyRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ReadyRes";
        };

        return ReadyRes;
    })();

    pb.UpdateSessionKV = (function() {

        /**
         * Properties of an UpdateSessionKV.
         * @memberof pb
         * @interface IUpdateSessionKV
         * @property {number|null} [uid] UpdateSessionKV uid
         * @property {Object.<string,string>|null} [data] UpdateSessionKV data
         */

        /**
         * Constructs a new UpdateSessionKV.
         * @memberof pb
         * @classdesc Represents an UpdateSessionKV.
         * @implements IUpdateSessionKV
         * @constructor
         * @param {pb.IUpdateSessionKV=} [properties] Properties to set
         */
        function UpdateSessionKV(properties) {
            this.data = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateSessionKV uid.
         * @member {number} uid
         * @memberof pb.UpdateSessionKV
         * @instance
         */
        UpdateSessionKV.prototype.uid = 0;

        /**
         * UpdateSessionKV data.
         * @member {Object.<string,string>} data
         * @memberof pb.UpdateSessionKV
         * @instance
         */
        UpdateSessionKV.prototype.data = $util.emptyObject;

        /**
         * Creates a new UpdateSessionKV instance using the specified properties.
         * @function create
         * @memberof pb.UpdateSessionKV
         * @static
         * @param {pb.IUpdateSessionKV=} [properties] Properties to set
         * @returns {pb.UpdateSessionKV} UpdateSessionKV instance
         */
        UpdateSessionKV.create = function create(properties) {
            return new UpdateSessionKV(properties);
        };

        /**
         * Encodes the specified UpdateSessionKV message. Does not implicitly {@link pb.UpdateSessionKV.verify|verify} messages.
         * @function encode
         * @memberof pb.UpdateSessionKV
         * @static
         * @param {pb.IUpdateSessionKV} message UpdateSessionKV message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSessionKV.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                for (var keys = Object.keys(message.data), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.data[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateSessionKV message, length delimited. Does not implicitly {@link pb.UpdateSessionKV.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UpdateSessionKV
         * @static
         * @param {pb.IUpdateSessionKV} message UpdateSessionKV message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateSessionKV.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateSessionKV message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UpdateSessionKV
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UpdateSessionKV} UpdateSessionKV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSessionKV.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UpdateSessionKV(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.uint32();
                        break;
                    }
                case 2: {
                        if (message.data === $util.emptyObject)
                            message.data = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.data[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateSessionKV message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UpdateSessionKV
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UpdateSessionKV} UpdateSessionKV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateSessionKV.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateSessionKV message.
         * @function verify
         * @memberof pb.UpdateSessionKV
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateSessionKV.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!$util.isObject(message.data))
                    return "data: object expected";
                var key = Object.keys(message.data);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.data[key[i]]))
                        return "data: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an UpdateSessionKV message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UpdateSessionKV
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UpdateSessionKV} UpdateSessionKV
         */
        UpdateSessionKV.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UpdateSessionKV)
                return object;
            var message = new $root.pb.UpdateSessionKV();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.data) {
                if (typeof object.data !== "object")
                    throw TypeError(".pb.UpdateSessionKV.data: object expected");
                message.data = {};
                for (var keys = Object.keys(object.data), i = 0; i < keys.length; ++i)
                    message.data[keys[i]] = String(object.data[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateSessionKV message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UpdateSessionKV
         * @static
         * @param {pb.UpdateSessionKV} message UpdateSessionKV
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateSessionKV.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.data = {};
            if (options.defaults)
                object.uid = 0;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            var keys2;
            if (message.data && (keys2 = Object.keys(message.data)).length) {
                object.data = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.data[keys2[j]] = message.data[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this UpdateSessionKV to JSON.
         * @function toJSON
         * @memberof pb.UpdateSessionKV
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateSessionKV.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateSessionKV
         * @function getTypeUrl
         * @memberof pb.UpdateSessionKV
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateSessionKV.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.UpdateSessionKV";
        };

        return UpdateSessionKV;
    })();

    pb.GameStartNotify = (function() {

        /**
         * Properties of a GameStartNotify.
         * @memberof pb
         * @interface IGameStartNotify
         */

        /**
         * Constructs a new GameStartNotify.
         * @memberof pb
         * @classdesc Represents a GameStartNotify.
         * @implements IGameStartNotify
         * @constructor
         * @param {pb.IGameStartNotify=} [properties] Properties to set
         */
        function GameStartNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GameStartNotify instance using the specified properties.
         * @function create
         * @memberof pb.GameStartNotify
         * @static
         * @param {pb.IGameStartNotify=} [properties] Properties to set
         * @returns {pb.GameStartNotify} GameStartNotify instance
         */
        GameStartNotify.create = function create(properties) {
            return new GameStartNotify(properties);
        };

        /**
         * Encodes the specified GameStartNotify message. Does not implicitly {@link pb.GameStartNotify.verify|verify} messages.
         * @function encode
         * @memberof pb.GameStartNotify
         * @static
         * @param {pb.IGameStartNotify} message GameStartNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStartNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GameStartNotify message, length delimited. Does not implicitly {@link pb.GameStartNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameStartNotify
         * @static
         * @param {pb.IGameStartNotify} message GameStartNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStartNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStartNotify message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameStartNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameStartNotify} GameStartNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameStartNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameStartNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameStartNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameStartNotify} GameStartNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStartNotify message.
         * @function verify
         * @memberof pb.GameStartNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStartNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GameStartNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameStartNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameStartNotify} GameStartNotify
         */
        GameStartNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameStartNotify)
                return object;
            return new $root.pb.GameStartNotify();
        };

        /**
         * Creates a plain object from a GameStartNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameStartNotify
         * @static
         * @param {pb.GameStartNotify} message GameStartNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStartNotify.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GameStartNotify to JSON.
         * @function toJSON
         * @memberof pb.GameStartNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStartNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameStartNotify
         * @function getTypeUrl
         * @memberof pb.GameStartNotify
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameStartNotify.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GameStartNotify";
        };

        return GameStartNotify;
    })();

    pb.GameCMD = (function() {

        /**
         * Properties of a GameCMD.
         * @memberof pb
         * @interface IGameCMD
         * @property {number|null} [tickNo] GameCMD tickNo
         * @property {number|null} [dir] GameCMD dir
         * @property {number|null} [uid] GameCMD uid
         */

        /**
         * Constructs a new GameCMD.
         * @memberof pb
         * @classdesc Represents a GameCMD.
         * @implements IGameCMD
         * @constructor
         * @param {pb.IGameCMD=} [properties] Properties to set
         */
        function GameCMD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameCMD tickNo.
         * @member {number} tickNo
         * @memberof pb.GameCMD
         * @instance
         */
        GameCMD.prototype.tickNo = 0;

        /**
         * GameCMD dir.
         * @member {number} dir
         * @memberof pb.GameCMD
         * @instance
         */
        GameCMD.prototype.dir = 0;

        /**
         * GameCMD uid.
         * @member {number} uid
         * @memberof pb.GameCMD
         * @instance
         */
        GameCMD.prototype.uid = 0;

        /**
         * Creates a new GameCMD instance using the specified properties.
         * @function create
         * @memberof pb.GameCMD
         * @static
         * @param {pb.IGameCMD=} [properties] Properties to set
         * @returns {pb.GameCMD} GameCMD instance
         */
        GameCMD.create = function create(properties) {
            return new GameCMD(properties);
        };

        /**
         * Encodes the specified GameCMD message. Does not implicitly {@link pb.GameCMD.verify|verify} messages.
         * @function encode
         * @memberof pb.GameCMD
         * @static
         * @param {pb.IGameCMD} message GameCMD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameCMD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tickNo != null && Object.hasOwnProperty.call(message, "tickNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.tickNo);
            if (message.dir != null && Object.hasOwnProperty.call(message, "dir"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.dir);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GameCMD message, length delimited. Does not implicitly {@link pb.GameCMD.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameCMD
         * @static
         * @param {pb.IGameCMD} message GameCMD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameCMD.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameCMD message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameCMD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameCMD} GameCMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameCMD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameCMD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tickNo = reader.uint32();
                        break;
                    }
                case 2: {
                        message.dir = reader.int32();
                        break;
                    }
                case 3: {
                        message.uid = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameCMD message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameCMD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameCMD} GameCMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameCMD.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameCMD message.
         * @function verify
         * @memberof pb.GameCMD
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameCMD.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tickNo != null && message.hasOwnProperty("tickNo"))
                if (!$util.isInteger(message.tickNo))
                    return "tickNo: integer expected";
            if (message.dir != null && message.hasOwnProperty("dir"))
                if (!$util.isInteger(message.dir))
                    return "dir: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            return null;
        };

        /**
         * Creates a GameCMD message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameCMD
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameCMD} GameCMD
         */
        GameCMD.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameCMD)
                return object;
            var message = new $root.pb.GameCMD();
            if (object.tickNo != null)
                message.tickNo = object.tickNo >>> 0;
            if (object.dir != null)
                message.dir = object.dir | 0;
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameCMD message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameCMD
         * @static
         * @param {pb.GameCMD} message GameCMD
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameCMD.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tickNo = 0;
                object.dir = 0;
                object.uid = 0;
            }
            if (message.tickNo != null && message.hasOwnProperty("tickNo"))
                object.tickNo = message.tickNo;
            if (message.dir != null && message.hasOwnProperty("dir"))
                object.dir = message.dir;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this GameCMD to JSON.
         * @function toJSON
         * @memberof pb.GameCMD
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameCMD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameCMD
         * @function getTypeUrl
         * @memberof pb.GameCMD
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameCMD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.GameCMD";
        };

        return GameCMD;
    })();

    return pb;
})();

module.exports = $root;
