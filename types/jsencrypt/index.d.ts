interface options {
    size?: number
    defaultPublicExponent?: string
    log?: boolean
}

declare class JSEncrypt {
    constructor(options?: options)
    setPrivateKey(key: string): void
    decrypt(val: string): string
    encrypt(val: string): string
}
export default JSEncrypt
