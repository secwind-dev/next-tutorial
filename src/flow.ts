export function withCi<A extends ReadonlyArray<unknown>, B>(
    ab: (...a: A) => B
): (...a: A) => B
export function withCi<A extends ReadonlyArray<unknown>, B, C>(
    ab: (...a: A) => B,
    bc: (b: B) => C
): (...a: A) => C
export function withCi<A extends ReadonlyArray<unknown>, B, C, D>(
    ab: (...a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D
): (...a: A) => D
export function withCi<A extends ReadonlyArray<unknown>, B, C, D, E>(
    ab: (...a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E
): (...a: A) => E
export function withCi<A extends ReadonlyArray<unknown>, B, C, D, E, F>(
    ab: (...a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F
): (...a: A) => F
export function withCi<A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
    ab: (...a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G
): (...a: A) => G
export function withCi<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H>(
    ab: (...a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H
): (...a: A) => H
export function withCi<
    A extends ReadonlyArray<unknown>,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I
>(
    ab: (...a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I
): (...a: A) => I
export function withCi<
    A extends ReadonlyArray<unknown>,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J
>(
    ab: (...a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J
): (...a: A) => J
export function withCi<
    A extends ReadonlyArray<unknown>,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J
>(
    ab: (...a: A) => B,
    bc?: (b: B) => C,
    cd?: (c: C) => D,
    de?: (d: D) => E,
    ef?: (e: E) => F,
    fg?: (f: F) => G,
    gh?: (g: G) => H,
    hi?: (h: H) => I,
    ij?: (i: I) => J
) {
    switch (arguments.length) {
        case 1:
            return ab
        case 2:
            return function () {
                return bc!(ab!.apply!(null, arguments)!)
            }
        case 3:
            return function () {
                return cd!(bc!(ab!.apply(null, arguments)))
            }
        case 4:
            return function () {
                return de!(cd!(bc!(ab!.apply(null, arguments))))
            }
        case 5:
            return function () {
                return ef!(de!(cd!(bc!(ab!.apply(null, arguments)))))
            }
        case 6:
            return function () {
                return fg!(ef!(de!(cd!(bc!(ab!.apply(null, arguments))))))
            }
        case 7:
            return function () {
                return gh!(fg!(ef!(de!(cd!(bc!(ab!.apply(null, arguments)))))))
            }
        case 8:
            return function () {
                return hi!(
                    gh!(fg!(ef!(de!(cd!(bc!(ab!.apply(null, arguments)))))))
                )
            }
        case 9:
            return function () {
                return ij!(
                    hi!(
                        gh!(fg!(ef!(de!(cd!(bc!(ab!.apply(null, arguments)))))))
                    )
                )
            }
    }
    return
}
