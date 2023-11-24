// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace pb. */
export namespace pb {

    /** Properties of a PingReq. */
    interface IPingReq {

        /** PingReq clientTickNo */
        clientTickNo?: (number|null);
    }

    /** Represents a PingReq. */
    class PingReq implements IPingReq {

        /**
         * Constructs a new PingReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPingReq);

        /** PingReq clientTickNo. */
        public clientTickNo: number;

        /**
         * Creates a new PingReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingReq instance
         */
        public static create(properties?: pb.IPingReq): pb.PingReq;

        /**
         * Encodes the specified PingReq message. Does not implicitly {@link pb.PingReq.verify|verify} messages.
         * @param message PingReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPingReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingReq message, length delimited. Does not implicitly {@link pb.PingReq.verify|verify} messages.
         * @param message PingReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPingReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PingReq;

        /**
         * Decodes a PingReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PingReq;

        /**
         * Verifies a PingReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingReq
         */
        public static fromObject(object: { [k: string]: any }): pb.PingReq;

        /**
         * Creates a plain object from a PingReq message. Also converts values to other types if specified.
         * @param message PingReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PingReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PingReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PongRes. */
    interface IPongRes {

        /** PongRes serverTickNo */
        serverTickNo?: (number|null);
    }

    /** Represents a PongRes. */
    class PongRes implements IPongRes {

        /**
         * Constructs a new PongRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPongRes);

        /** PongRes serverTickNo. */
        public serverTickNo: number;

        /**
         * Creates a new PongRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PongRes instance
         */
        public static create(properties?: pb.IPongRes): pb.PongRes;

        /**
         * Encodes the specified PongRes message. Does not implicitly {@link pb.PongRes.verify|verify} messages.
         * @param message PongRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPongRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PongRes message, length delimited. Does not implicitly {@link pb.PongRes.verify|verify} messages.
         * @param message PongRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPongRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PongRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PongRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PongRes;

        /**
         * Decodes a PongRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PongRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PongRes;

        /**
         * Verifies a PongRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PongRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PongRes
         */
        public static fromObject(object: { [k: string]: any }): pb.PongRes;

        /**
         * Creates a plain object from a PongRes message. Also converts values to other types if specified.
         * @param message PongRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PongRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PongRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PongRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq username */
        username?: (string|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILoginReq);

        /** LoginReq username. */
        public username: string;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: pb.ILoginReq): pb.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link pb.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link pb.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): pb.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginRes. */
    interface ILoginRes {

        /** LoginRes success */
        success?: (boolean|null);

        /** LoginRes uid */
        uid?: (number|null);
    }

    /** Represents a LoginRes. */
    class LoginRes implements ILoginRes {

        /**
         * Constructs a new LoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILoginRes);

        /** LoginRes success. */
        public success: boolean;

        /** LoginRes uid. */
        public uid: number;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRes instance
         */
        public static create(properties?: pb.ILoginRes): pb.LoginRes;

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link pb.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link pb.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LoginRes;

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.LoginRes;

        /**
         * Verifies a LoginRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRes
         */
        public static fromObject(object: { [k: string]: any }): pb.LoginRes;

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @param message LoginRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.LoginRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnterRoomReq. */
    interface IEnterRoomReq {

        /** EnterRoomReq rid */
        rid?: (number|null);
    }

    /** Represents an EnterRoomReq. */
    class EnterRoomReq implements IEnterRoomReq {

        /**
         * Constructs a new EnterRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IEnterRoomReq);

        /** EnterRoomReq rid. */
        public rid: number;

        /**
         * Creates a new EnterRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomReq instance
         */
        public static create(properties?: pb.IEnterRoomReq): pb.EnterRoomReq;

        /**
         * Encodes the specified EnterRoomReq message. Does not implicitly {@link pb.EnterRoomReq.verify|verify} messages.
         * @param message EnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomReq message, length delimited. Does not implicitly {@link pb.EnterRoomReq.verify|verify} messages.
         * @param message EnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.EnterRoomReq;

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.EnterRoomReq;

        /**
         * Verifies an EnterRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomReq
         */
        public static fromObject(object: { [k: string]: any }): pb.EnterRoomReq;

        /**
         * Creates a plain object from an EnterRoomReq message. Also converts values to other types if specified.
         * @param message EnterRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.EnterRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnterRoomReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnterRoomRes. */
    interface IEnterRoomRes {

        /** EnterRoomRes success */
        success?: (boolean|null);

        /** EnterRoomRes roomNodeId */
        roomNodeId?: (string|null);
    }

    /** Represents an EnterRoomRes. */
    class EnterRoomRes implements IEnterRoomRes {

        /**
         * Constructs a new EnterRoomRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IEnterRoomRes);

        /** EnterRoomRes success. */
        public success: boolean;

        /** EnterRoomRes roomNodeId. */
        public roomNodeId: string;

        /**
         * Creates a new EnterRoomRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomRes instance
         */
        public static create(properties?: pb.IEnterRoomRes): pb.EnterRoomRes;

        /**
         * Encodes the specified EnterRoomRes message. Does not implicitly {@link pb.EnterRoomRes.verify|verify} messages.
         * @param message EnterRoomRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IEnterRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomRes message, length delimited. Does not implicitly {@link pb.EnterRoomRes.verify|verify} messages.
         * @param message EnterRoomRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IEnterRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.EnterRoomRes;

        /**
         * Decodes an EnterRoomRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.EnterRoomRes;

        /**
         * Verifies an EnterRoomRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomRes
         */
        public static fromObject(object: { [k: string]: any }): pb.EnterRoomRes;

        /**
         * Creates a plain object from an EnterRoomRes message. Also converts values to other types if specified.
         * @param message EnterRoomRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.EnterRoomRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnterRoomRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadyReq. */
    interface IReadyReq {
    }

    /** Represents a ReadyReq. */
    class ReadyReq implements IReadyReq {

        /**
         * Constructs a new ReadyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReadyReq);

        /**
         * Creates a new ReadyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyReq instance
         */
        public static create(properties?: pb.IReadyReq): pb.ReadyReq;

        /**
         * Encodes the specified ReadyReq message. Does not implicitly {@link pb.ReadyReq.verify|verify} messages.
         * @param message ReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadyReq message, length delimited. Does not implicitly {@link pb.ReadyReq.verify|verify} messages.
         * @param message ReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReadyReq;

        /**
         * Decodes a ReadyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ReadyReq;

        /**
         * Verifies a ReadyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadyReq
         */
        public static fromObject(object: { [k: string]: any }): pb.ReadyReq;

        /**
         * Creates a plain object from a ReadyReq message. Also converts values to other types if specified.
         * @param message ReadyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ReadyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadyReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadyRes. */
    interface IReadyRes {

        /** ReadyRes success */
        success?: (boolean|null);
    }

    /** Represents a ReadyRes. */
    class ReadyRes implements IReadyRes {

        /**
         * Constructs a new ReadyRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReadyRes);

        /** ReadyRes success. */
        public success: boolean;

        /**
         * Creates a new ReadyRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyRes instance
         */
        public static create(properties?: pb.IReadyRes): pb.ReadyRes;

        /**
         * Encodes the specified ReadyRes message. Does not implicitly {@link pb.ReadyRes.verify|verify} messages.
         * @param message ReadyRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReadyRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadyRes message, length delimited. Does not implicitly {@link pb.ReadyRes.verify|verify} messages.
         * @param message ReadyRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IReadyRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReadyRes;

        /**
         * Decodes a ReadyRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ReadyRes;

        /**
         * Verifies a ReadyRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadyRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadyRes
         */
        public static fromObject(object: { [k: string]: any }): pb.ReadyRes;

        /**
         * Creates a plain object from a ReadyRes message. Also converts values to other types if specified.
         * @param message ReadyRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ReadyRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadyRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadyRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateSessionKV. */
    interface IUpdateSessionKV {

        /** UpdateSessionKV uid */
        uid?: (number|null);

        /** UpdateSessionKV data */
        data?: ({ [k: string]: string }|null);
    }

    /** Represents an UpdateSessionKV. */
    class UpdateSessionKV implements IUpdateSessionKV {

        /**
         * Constructs a new UpdateSessionKV.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUpdateSessionKV);

        /** UpdateSessionKV uid. */
        public uid: number;

        /** UpdateSessionKV data. */
        public data: { [k: string]: string };

        /**
         * Creates a new UpdateSessionKV instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateSessionKV instance
         */
        public static create(properties?: pb.IUpdateSessionKV): pb.UpdateSessionKV;

        /**
         * Encodes the specified UpdateSessionKV message. Does not implicitly {@link pb.UpdateSessionKV.verify|verify} messages.
         * @param message UpdateSessionKV message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUpdateSessionKV, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateSessionKV message, length delimited. Does not implicitly {@link pb.UpdateSessionKV.verify|verify} messages.
         * @param message UpdateSessionKV message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUpdateSessionKV, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateSessionKV message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateSessionKV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UpdateSessionKV;

        /**
         * Decodes an UpdateSessionKV message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateSessionKV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.UpdateSessionKV;

        /**
         * Verifies an UpdateSessionKV message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateSessionKV message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateSessionKV
         */
        public static fromObject(object: { [k: string]: any }): pb.UpdateSessionKV;

        /**
         * Creates a plain object from an UpdateSessionKV message. Also converts values to other types if specified.
         * @param message UpdateSessionKV
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.UpdateSessionKV, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateSessionKV to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateSessionKV
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameStartNotify. */
    interface IGameStartNotify {
    }

    /** Represents a GameStartNotify. */
    class GameStartNotify implements IGameStartNotify {

        /**
         * Constructs a new GameStartNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGameStartNotify);

        /**
         * Creates a new GameStartNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStartNotify instance
         */
        public static create(properties?: pb.IGameStartNotify): pb.GameStartNotify;

        /**
         * Encodes the specified GameStartNotify message. Does not implicitly {@link pb.GameStartNotify.verify|verify} messages.
         * @param message GameStartNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGameStartNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStartNotify message, length delimited. Does not implicitly {@link pb.GameStartNotify.verify|verify} messages.
         * @param message GameStartNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGameStartNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStartNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStartNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GameStartNotify;

        /**
         * Decodes a GameStartNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStartNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GameStartNotify;

        /**
         * Verifies a GameStartNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStartNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStartNotify
         */
        public static fromObject(object: { [k: string]: any }): pb.GameStartNotify;

        /**
         * Creates a plain object from a GameStartNotify message. Also converts values to other types if specified.
         * @param message GameStartNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GameStartNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStartNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameStartNotify
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameCMD. */
    interface IGameCMD {

        /** GameCMD tickNo */
        tickNo?: (number|null);

        /** GameCMD dir */
        dir?: (number|null);

        /** GameCMD uid */
        uid?: (number|null);
    }

    /** Represents a GameCMD. */
    class GameCMD implements IGameCMD {

        /**
         * Constructs a new GameCMD.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGameCMD);

        /** GameCMD tickNo. */
        public tickNo: number;

        /** GameCMD dir. */
        public dir: number;

        /** GameCMD uid. */
        public uid: number;

        /**
         * Creates a new GameCMD instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCMD instance
         */
        public static create(properties?: pb.IGameCMD): pb.GameCMD;

        /**
         * Encodes the specified GameCMD message. Does not implicitly {@link pb.GameCMD.verify|verify} messages.
         * @param message GameCMD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGameCMD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCMD message, length delimited. Does not implicitly {@link pb.GameCMD.verify|verify} messages.
         * @param message GameCMD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGameCMD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCMD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GameCMD;

        /**
         * Decodes a GameCMD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GameCMD;

        /**
         * Verifies a GameCMD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCMD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCMD
         */
        public static fromObject(object: { [k: string]: any }): pb.GameCMD;

        /**
         * Creates a plain object from a GameCMD message. Also converts values to other types if specified.
         * @param message GameCMD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GameCMD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCMD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameCMD
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameCMDs. */
    interface IGameCMDs {

        /** GameCMDs tickNo */
        tickNo?: (number|null);

        /** GameCMDs cmds */
        cmds?: (pb.IGameCMD[]|null);
    }

    /** Represents a GameCMDs. */
    class GameCMDs implements IGameCMDs {

        /**
         * Constructs a new GameCMDs.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGameCMDs);

        /** GameCMDs tickNo. */
        public tickNo: number;

        /** GameCMDs cmds. */
        public cmds: pb.IGameCMD[];

        /**
         * Creates a new GameCMDs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCMDs instance
         */
        public static create(properties?: pb.IGameCMDs): pb.GameCMDs;

        /**
         * Encodes the specified GameCMDs message. Does not implicitly {@link pb.GameCMDs.verify|verify} messages.
         * @param message GameCMDs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGameCMDs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCMDs message, length delimited. Does not implicitly {@link pb.GameCMDs.verify|verify} messages.
         * @param message GameCMDs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGameCMDs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCMDs message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCMDs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GameCMDs;

        /**
         * Decodes a GameCMDs message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCMDs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GameCMDs;

        /**
         * Verifies a GameCMDs message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCMDs message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCMDs
         */
        public static fromObject(object: { [k: string]: any }): pb.GameCMDs;

        /**
         * Creates a plain object from a GameCMDs message. Also converts values to other types if specified.
         * @param message GameCMDs
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GameCMDs, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCMDs to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameCMDs
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
