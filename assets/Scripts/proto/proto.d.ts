// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace pb. */
export namespace pb {

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
}
