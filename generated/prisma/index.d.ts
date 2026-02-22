
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model gift_infos
 * 
 */
export type gift_infos = $Result.DefaultSelection<Prisma.$gift_infosPayload>
/**
 * Model guests
 * 
 */
export type guests = $Result.DefaultSelection<Prisma.$guestsPayload>
/**
 * Model images
 * 
 */
export type images = $Result.DefaultSelection<Prisma.$imagesPayload>
/**
 * Model invitations
 * 
 */
export type invitations = $Result.DefaultSelection<Prisma.$invitationsPayload>
/**
 * Model music
 * 
 */
export type music = $Result.DefaultSelection<Prisma.$musicPayload>
/**
 * Model rsvps
 * 
 */
export type rsvps = $Result.DefaultSelection<Prisma.$rsvpsPayload>
/**
 * Model rundowns
 * 
 */
export type rundowns = $Result.DefaultSelection<Prisma.$rundownsPayload>
/**
 * Model stories
 * 
 */
export type stories = $Result.DefaultSelection<Prisma.$storiesPayload>
/**
 * Model themes
 * 
 */
export type themes = $Result.DefaultSelection<Prisma.$themesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model videos
 * 
 */
export type videos = $Result.DefaultSelection<Prisma.$videosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Gift_infos
 * const gift_infos = await prisma.gift_infos.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Gift_infos
   * const gift_infos = await prisma.gift_infos.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.gift_infos`: Exposes CRUD operations for the **gift_infos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gift_infos
    * const gift_infos = await prisma.gift_infos.findMany()
    * ```
    */
  get gift_infos(): Prisma.gift_infosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guests`: Exposes CRUD operations for the **guests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guests.findMany()
    * ```
    */
  get guests(): Prisma.guestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitations`: Exposes CRUD operations for the **invitations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitations.findMany()
    * ```
    */
  get invitations(): Prisma.invitationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.music`: Exposes CRUD operations for the **music** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Music
    * const music = await prisma.music.findMany()
    * ```
    */
  get music(): Prisma.musicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rsvps`: Exposes CRUD operations for the **rsvps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rsvps
    * const rsvps = await prisma.rsvps.findMany()
    * ```
    */
  get rsvps(): Prisma.rsvpsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rundowns`: Exposes CRUD operations for the **rundowns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rundowns
    * const rundowns = await prisma.rundowns.findMany()
    * ```
    */
  get rundowns(): Prisma.rundownsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stories`: Exposes CRUD operations for the **stories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.stories.findMany()
    * ```
    */
  get stories(): Prisma.storiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.themes`: Exposes CRUD operations for the **themes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.themes.findMany()
    * ```
    */
  get themes(): Prisma.themesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videos`: Exposes CRUD operations for the **videos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.videos.findMany()
    * ```
    */
  get videos(): Prisma.videosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    gift_infos: 'gift_infos',
    guests: 'guests',
    images: 'images',
    invitations: 'invitations',
    music: 'music',
    rsvps: 'rsvps',
    rundowns: 'rundowns',
    stories: 'stories',
    themes: 'themes',
    users: 'users',
    videos: 'videos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "gift_infos" | "guests" | "images" | "invitations" | "music" | "rsvps" | "rundowns" | "stories" | "themes" | "users" | "videos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      gift_infos: {
        payload: Prisma.$gift_infosPayload<ExtArgs>
        fields: Prisma.gift_infosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gift_infosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_infosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gift_infosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_infosPayload>
          }
          findFirst: {
            args: Prisma.gift_infosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_infosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gift_infosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_infosPayload>
          }
          findMany: {
            args: Prisma.gift_infosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_infosPayload>[]
          }
          create: {
            args: Prisma.gift_infosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_infosPayload>
          }
          createMany: {
            args: Prisma.gift_infosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gift_infosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_infosPayload>[]
          }
          delete: {
            args: Prisma.gift_infosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_infosPayload>
          }
          update: {
            args: Prisma.gift_infosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_infosPayload>
          }
          deleteMany: {
            args: Prisma.gift_infosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gift_infosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gift_infosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_infosPayload>[]
          }
          upsert: {
            args: Prisma.gift_infosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_infosPayload>
          }
          aggregate: {
            args: Prisma.Gift_infosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGift_infos>
          }
          groupBy: {
            args: Prisma.gift_infosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gift_infosGroupByOutputType>[]
          }
          count: {
            args: Prisma.gift_infosCountArgs<ExtArgs>
            result: $Utils.Optional<Gift_infosCountAggregateOutputType> | number
          }
        }
      }
      guests: {
        payload: Prisma.$guestsPayload<ExtArgs>
        fields: Prisma.guestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.guestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.guestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guestsPayload>
          }
          findFirst: {
            args: Prisma.guestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.guestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guestsPayload>
          }
          findMany: {
            args: Prisma.guestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guestsPayload>[]
          }
          create: {
            args: Prisma.guestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guestsPayload>
          }
          createMany: {
            args: Prisma.guestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.guestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guestsPayload>[]
          }
          delete: {
            args: Prisma.guestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guestsPayload>
          }
          update: {
            args: Prisma.guestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guestsPayload>
          }
          deleteMany: {
            args: Prisma.guestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.guestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.guestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guestsPayload>[]
          }
          upsert: {
            args: Prisma.guestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$guestsPayload>
          }
          aggregate: {
            args: Prisma.GuestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuests>
          }
          groupBy: {
            args: Prisma.guestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.guestsCountArgs<ExtArgs>
            result: $Utils.Optional<GuestsCountAggregateOutputType> | number
          }
        }
      }
      images: {
        payload: Prisma.$imagesPayload<ExtArgs>
        fields: Prisma.imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          findFirst: {
            args: Prisma.imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          findMany: {
            args: Prisma.imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>[]
          }
          create: {
            args: Prisma.imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          createMany: {
            args: Prisma.imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>[]
          }
          delete: {
            args: Prisma.imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          update: {
            args: Prisma.imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          deleteMany: {
            args: Prisma.imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>[]
          }
          upsert: {
            args: Prisma.imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.imagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      invitations: {
        payload: Prisma.$invitationsPayload<ExtArgs>
        fields: Prisma.invitationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invitationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invitationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationsPayload>
          }
          findFirst: {
            args: Prisma.invitationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invitationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationsPayload>
          }
          findMany: {
            args: Prisma.invitationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationsPayload>[]
          }
          create: {
            args: Prisma.invitationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationsPayload>
          }
          createMany: {
            args: Prisma.invitationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invitationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationsPayload>[]
          }
          delete: {
            args: Prisma.invitationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationsPayload>
          }
          update: {
            args: Prisma.invitationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationsPayload>
          }
          deleteMany: {
            args: Prisma.invitationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invitationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invitationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationsPayload>[]
          }
          upsert: {
            args: Prisma.invitationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationsPayload>
          }
          aggregate: {
            args: Prisma.InvitationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitations>
          }
          groupBy: {
            args: Prisma.invitationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.invitationsCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationsCountAggregateOutputType> | number
          }
        }
      }
      music: {
        payload: Prisma.$musicPayload<ExtArgs>
        fields: Prisma.musicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.musicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.musicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicPayload>
          }
          findFirst: {
            args: Prisma.musicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.musicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicPayload>
          }
          findMany: {
            args: Prisma.musicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicPayload>[]
          }
          create: {
            args: Prisma.musicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicPayload>
          }
          createMany: {
            args: Prisma.musicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.musicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicPayload>[]
          }
          delete: {
            args: Prisma.musicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicPayload>
          }
          update: {
            args: Prisma.musicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicPayload>
          }
          deleteMany: {
            args: Prisma.musicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.musicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.musicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicPayload>[]
          }
          upsert: {
            args: Prisma.musicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$musicPayload>
          }
          aggregate: {
            args: Prisma.MusicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusic>
          }
          groupBy: {
            args: Prisma.musicGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicGroupByOutputType>[]
          }
          count: {
            args: Prisma.musicCountArgs<ExtArgs>
            result: $Utils.Optional<MusicCountAggregateOutputType> | number
          }
        }
      }
      rsvps: {
        payload: Prisma.$rsvpsPayload<ExtArgs>
        fields: Prisma.rsvpsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rsvpsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rsvpsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rsvpsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rsvpsPayload>
          }
          findFirst: {
            args: Prisma.rsvpsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rsvpsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rsvpsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rsvpsPayload>
          }
          findMany: {
            args: Prisma.rsvpsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rsvpsPayload>[]
          }
          create: {
            args: Prisma.rsvpsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rsvpsPayload>
          }
          createMany: {
            args: Prisma.rsvpsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rsvpsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rsvpsPayload>[]
          }
          delete: {
            args: Prisma.rsvpsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rsvpsPayload>
          }
          update: {
            args: Prisma.rsvpsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rsvpsPayload>
          }
          deleteMany: {
            args: Prisma.rsvpsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rsvpsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rsvpsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rsvpsPayload>[]
          }
          upsert: {
            args: Prisma.rsvpsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rsvpsPayload>
          }
          aggregate: {
            args: Prisma.RsvpsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRsvps>
          }
          groupBy: {
            args: Prisma.rsvpsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RsvpsGroupByOutputType>[]
          }
          count: {
            args: Prisma.rsvpsCountArgs<ExtArgs>
            result: $Utils.Optional<RsvpsCountAggregateOutputType> | number
          }
        }
      }
      rundowns: {
        payload: Prisma.$rundownsPayload<ExtArgs>
        fields: Prisma.rundownsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rundownsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rundownsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rundownsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rundownsPayload>
          }
          findFirst: {
            args: Prisma.rundownsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rundownsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rundownsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rundownsPayload>
          }
          findMany: {
            args: Prisma.rundownsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rundownsPayload>[]
          }
          create: {
            args: Prisma.rundownsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rundownsPayload>
          }
          createMany: {
            args: Prisma.rundownsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rundownsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rundownsPayload>[]
          }
          delete: {
            args: Prisma.rundownsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rundownsPayload>
          }
          update: {
            args: Prisma.rundownsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rundownsPayload>
          }
          deleteMany: {
            args: Prisma.rundownsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rundownsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rundownsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rundownsPayload>[]
          }
          upsert: {
            args: Prisma.rundownsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rundownsPayload>
          }
          aggregate: {
            args: Prisma.RundownsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRundowns>
          }
          groupBy: {
            args: Prisma.rundownsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RundownsGroupByOutputType>[]
          }
          count: {
            args: Prisma.rundownsCountArgs<ExtArgs>
            result: $Utils.Optional<RundownsCountAggregateOutputType> | number
          }
        }
      }
      stories: {
        payload: Prisma.$storiesPayload<ExtArgs>
        fields: Prisma.storiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>
          }
          findFirst: {
            args: Prisma.storiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>
          }
          findMany: {
            args: Prisma.storiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>[]
          }
          create: {
            args: Prisma.storiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>
          }
          createMany: {
            args: Prisma.storiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.storiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>[]
          }
          delete: {
            args: Prisma.storiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>
          }
          update: {
            args: Prisma.storiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>
          }
          deleteMany: {
            args: Prisma.storiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.storiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>[]
          }
          upsert: {
            args: Prisma.storiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storiesPayload>
          }
          aggregate: {
            args: Prisma.StoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStories>
          }
          groupBy: {
            args: Prisma.storiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.storiesCountArgs<ExtArgs>
            result: $Utils.Optional<StoriesCountAggregateOutputType> | number
          }
        }
      }
      themes: {
        payload: Prisma.$themesPayload<ExtArgs>
        fields: Prisma.themesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.themesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.themesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themesPayload>
          }
          findFirst: {
            args: Prisma.themesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.themesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themesPayload>
          }
          findMany: {
            args: Prisma.themesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themesPayload>[]
          }
          create: {
            args: Prisma.themesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themesPayload>
          }
          createMany: {
            args: Prisma.themesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.themesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themesPayload>[]
          }
          delete: {
            args: Prisma.themesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themesPayload>
          }
          update: {
            args: Prisma.themesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themesPayload>
          }
          deleteMany: {
            args: Prisma.themesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.themesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.themesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themesPayload>[]
          }
          upsert: {
            args: Prisma.themesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themesPayload>
          }
          aggregate: {
            args: Prisma.ThemesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThemes>
          }
          groupBy: {
            args: Prisma.themesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThemesGroupByOutputType>[]
          }
          count: {
            args: Prisma.themesCountArgs<ExtArgs>
            result: $Utils.Optional<ThemesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      videos: {
        payload: Prisma.$videosPayload<ExtArgs>
        fields: Prisma.videosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.videosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.videosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          findFirst: {
            args: Prisma.videosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.videosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          findMany: {
            args: Prisma.videosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          create: {
            args: Prisma.videosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          createMany: {
            args: Prisma.videosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.videosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          delete: {
            args: Prisma.videosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          update: {
            args: Prisma.videosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          deleteMany: {
            args: Prisma.videosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.videosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.videosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          upsert: {
            args: Prisma.videosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          aggregate: {
            args: Prisma.VideosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideos>
          }
          groupBy: {
            args: Prisma.videosGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideosGroupByOutputType>[]
          }
          count: {
            args: Prisma.videosCountArgs<ExtArgs>
            result: $Utils.Optional<VideosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    gift_infos?: gift_infosOmit
    guests?: guestsOmit
    images?: imagesOmit
    invitations?: invitationsOmit
    music?: musicOmit
    rsvps?: rsvpsOmit
    rundowns?: rundownsOmit
    stories?: storiesOmit
    themes?: themesOmit
    users?: usersOmit
    videos?: videosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InvitationsCountOutputType
   */

  export type InvitationsCountOutputType = {
    gift_infos: number
    guests: number
    images: number
    rsvps: number
    rundowns: number
    stories: number
    videos: number
  }

  export type InvitationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gift_infos?: boolean | InvitationsCountOutputTypeCountGift_infosArgs
    guests?: boolean | InvitationsCountOutputTypeCountGuestsArgs
    images?: boolean | InvitationsCountOutputTypeCountImagesArgs
    rsvps?: boolean | InvitationsCountOutputTypeCountRsvpsArgs
    rundowns?: boolean | InvitationsCountOutputTypeCountRundownsArgs
    stories?: boolean | InvitationsCountOutputTypeCountStoriesArgs
    videos?: boolean | InvitationsCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * InvitationsCountOutputType without action
   */
  export type InvitationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationsCountOutputType
     */
    select?: InvitationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvitationsCountOutputType without action
   */
  export type InvitationsCountOutputTypeCountGift_infosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gift_infosWhereInput
  }

  /**
   * InvitationsCountOutputType without action
   */
  export type InvitationsCountOutputTypeCountGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: guestsWhereInput
  }

  /**
   * InvitationsCountOutputType without action
   */
  export type InvitationsCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagesWhereInput
  }

  /**
   * InvitationsCountOutputType without action
   */
  export type InvitationsCountOutputTypeCountRsvpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rsvpsWhereInput
  }

  /**
   * InvitationsCountOutputType without action
   */
  export type InvitationsCountOutputTypeCountRundownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rundownsWhereInput
  }

  /**
   * InvitationsCountOutputType without action
   */
  export type InvitationsCountOutputTypeCountStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storiesWhereInput
  }

  /**
   * InvitationsCountOutputType without action
   */
  export type InvitationsCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videosWhereInput
  }


  /**
   * Count Type MusicCountOutputType
   */

  export type MusicCountOutputType = {
    invitations: number
  }

  export type MusicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | MusicCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * MusicCountOutputType without action
   */
  export type MusicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicCountOutputType
     */
    select?: MusicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MusicCountOutputType without action
   */
  export type MusicCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invitationsWhereInput
  }


  /**
   * Count Type ThemesCountOutputType
   */

  export type ThemesCountOutputType = {
    invitations: number
  }

  export type ThemesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | ThemesCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * ThemesCountOutputType without action
   */
  export type ThemesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemesCountOutputType
     */
    select?: ThemesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThemesCountOutputType without action
   */
  export type ThemesCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invitationsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    invitations: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | UsersCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invitationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model gift_infos
   */

  export type AggregateGift_infos = {
    _count: Gift_infosCountAggregateOutputType | null
    _avg: Gift_infosAvgAggregateOutputType | null
    _sum: Gift_infosSumAggregateOutputType | null
    _min: Gift_infosMinAggregateOutputType | null
    _max: Gift_infosMaxAggregateOutputType | null
  }

  export type Gift_infosAvgAggregateOutputType = {
    id: number | null
    invitation_id: number | null
  }

  export type Gift_infosSumAggregateOutputType = {
    id: number | null
    invitation_id: number | null
  }

  export type Gift_infosMinAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    provider_name: string | null
    account_number: string | null
    account_holder: string | null
    gift_delivery_address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Gift_infosMaxAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    provider_name: string | null
    account_number: string | null
    account_holder: string | null
    gift_delivery_address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Gift_infosCountAggregateOutputType = {
    id: number
    invitation_id: number
    provider_name: number
    account_number: number
    account_holder: number
    gift_delivery_address: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Gift_infosAvgAggregateInputType = {
    id?: true
    invitation_id?: true
  }

  export type Gift_infosSumAggregateInputType = {
    id?: true
    invitation_id?: true
  }

  export type Gift_infosMinAggregateInputType = {
    id?: true
    invitation_id?: true
    provider_name?: true
    account_number?: true
    account_holder?: true
    gift_delivery_address?: true
    created_at?: true
    updated_at?: true
  }

  export type Gift_infosMaxAggregateInputType = {
    id?: true
    invitation_id?: true
    provider_name?: true
    account_number?: true
    account_holder?: true
    gift_delivery_address?: true
    created_at?: true
    updated_at?: true
  }

  export type Gift_infosCountAggregateInputType = {
    id?: true
    invitation_id?: true
    provider_name?: true
    account_number?: true
    account_holder?: true
    gift_delivery_address?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Gift_infosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gift_infos to aggregate.
     */
    where?: gift_infosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gift_infos to fetch.
     */
    orderBy?: gift_infosOrderByWithRelationInput | gift_infosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gift_infosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gift_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gift_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gift_infos
    **/
    _count?: true | Gift_infosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gift_infosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gift_infosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gift_infosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gift_infosMaxAggregateInputType
  }

  export type GetGift_infosAggregateType<T extends Gift_infosAggregateArgs> = {
        [P in keyof T & keyof AggregateGift_infos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGift_infos[P]>
      : GetScalarType<T[P], AggregateGift_infos[P]>
  }




  export type gift_infosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gift_infosWhereInput
    orderBy?: gift_infosOrderByWithAggregationInput | gift_infosOrderByWithAggregationInput[]
    by: Gift_infosScalarFieldEnum[] | Gift_infosScalarFieldEnum
    having?: gift_infosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gift_infosCountAggregateInputType | true
    _avg?: Gift_infosAvgAggregateInputType
    _sum?: Gift_infosSumAggregateInputType
    _min?: Gift_infosMinAggregateInputType
    _max?: Gift_infosMaxAggregateInputType
  }

  export type Gift_infosGroupByOutputType = {
    id: number
    invitation_id: number | null
    provider_name: string | null
    account_number: string | null
    account_holder: string | null
    gift_delivery_address: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Gift_infosCountAggregateOutputType | null
    _avg: Gift_infosAvgAggregateOutputType | null
    _sum: Gift_infosSumAggregateOutputType | null
    _min: Gift_infosMinAggregateOutputType | null
    _max: Gift_infosMaxAggregateOutputType | null
  }

  type GetGift_infosGroupByPayload<T extends gift_infosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gift_infosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gift_infosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gift_infosGroupByOutputType[P]>
            : GetScalarType<T[P], Gift_infosGroupByOutputType[P]>
        }
      >
    >


  export type gift_infosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    provider_name?: boolean
    account_number?: boolean
    account_holder?: boolean
    gift_delivery_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | gift_infos$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["gift_infos"]>

  export type gift_infosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    provider_name?: boolean
    account_number?: boolean
    account_holder?: boolean
    gift_delivery_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | gift_infos$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["gift_infos"]>

  export type gift_infosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    provider_name?: boolean
    account_number?: boolean
    account_holder?: boolean
    gift_delivery_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | gift_infos$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["gift_infos"]>

  export type gift_infosSelectScalar = {
    id?: boolean
    invitation_id?: boolean
    provider_name?: boolean
    account_number?: boolean
    account_holder?: boolean
    gift_delivery_address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type gift_infosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invitation_id" | "provider_name" | "account_number" | "account_holder" | "gift_delivery_address" | "created_at" | "updated_at", ExtArgs["result"]["gift_infos"]>
  export type gift_infosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | gift_infos$invitationsArgs<ExtArgs>
  }
  export type gift_infosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | gift_infos$invitationsArgs<ExtArgs>
  }
  export type gift_infosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | gift_infos$invitationsArgs<ExtArgs>
  }

  export type $gift_infosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gift_infos"
    objects: {
      invitations: Prisma.$invitationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invitation_id: number | null
      provider_name: string | null
      account_number: string | null
      account_holder: string | null
      gift_delivery_address: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["gift_infos"]>
    composites: {}
  }

  type gift_infosGetPayload<S extends boolean | null | undefined | gift_infosDefaultArgs> = $Result.GetResult<Prisma.$gift_infosPayload, S>

  type gift_infosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gift_infosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Gift_infosCountAggregateInputType | true
    }

  export interface gift_infosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gift_infos'], meta: { name: 'gift_infos' } }
    /**
     * Find zero or one Gift_infos that matches the filter.
     * @param {gift_infosFindUniqueArgs} args - Arguments to find a Gift_infos
     * @example
     * // Get one Gift_infos
     * const gift_infos = await prisma.gift_infos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gift_infosFindUniqueArgs>(args: SelectSubset<T, gift_infosFindUniqueArgs<ExtArgs>>): Prisma__gift_infosClient<$Result.GetResult<Prisma.$gift_infosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gift_infos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gift_infosFindUniqueOrThrowArgs} args - Arguments to find a Gift_infos
     * @example
     * // Get one Gift_infos
     * const gift_infos = await prisma.gift_infos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gift_infosFindUniqueOrThrowArgs>(args: SelectSubset<T, gift_infosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gift_infosClient<$Result.GetResult<Prisma.$gift_infosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gift_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gift_infosFindFirstArgs} args - Arguments to find a Gift_infos
     * @example
     * // Get one Gift_infos
     * const gift_infos = await prisma.gift_infos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gift_infosFindFirstArgs>(args?: SelectSubset<T, gift_infosFindFirstArgs<ExtArgs>>): Prisma__gift_infosClient<$Result.GetResult<Prisma.$gift_infosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gift_infos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gift_infosFindFirstOrThrowArgs} args - Arguments to find a Gift_infos
     * @example
     * // Get one Gift_infos
     * const gift_infos = await prisma.gift_infos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gift_infosFindFirstOrThrowArgs>(args?: SelectSubset<T, gift_infosFindFirstOrThrowArgs<ExtArgs>>): Prisma__gift_infosClient<$Result.GetResult<Prisma.$gift_infosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gift_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gift_infosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gift_infos
     * const gift_infos = await prisma.gift_infos.findMany()
     * 
     * // Get first 10 Gift_infos
     * const gift_infos = await prisma.gift_infos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gift_infosWithIdOnly = await prisma.gift_infos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gift_infosFindManyArgs>(args?: SelectSubset<T, gift_infosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gift_infosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gift_infos.
     * @param {gift_infosCreateArgs} args - Arguments to create a Gift_infos.
     * @example
     * // Create one Gift_infos
     * const Gift_infos = await prisma.gift_infos.create({
     *   data: {
     *     // ... data to create a Gift_infos
     *   }
     * })
     * 
     */
    create<T extends gift_infosCreateArgs>(args: SelectSubset<T, gift_infosCreateArgs<ExtArgs>>): Prisma__gift_infosClient<$Result.GetResult<Prisma.$gift_infosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gift_infos.
     * @param {gift_infosCreateManyArgs} args - Arguments to create many Gift_infos.
     * @example
     * // Create many Gift_infos
     * const gift_infos = await prisma.gift_infos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gift_infosCreateManyArgs>(args?: SelectSubset<T, gift_infosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gift_infos and returns the data saved in the database.
     * @param {gift_infosCreateManyAndReturnArgs} args - Arguments to create many Gift_infos.
     * @example
     * // Create many Gift_infos
     * const gift_infos = await prisma.gift_infos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gift_infos and only return the `id`
     * const gift_infosWithIdOnly = await prisma.gift_infos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gift_infosCreateManyAndReturnArgs>(args?: SelectSubset<T, gift_infosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gift_infosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gift_infos.
     * @param {gift_infosDeleteArgs} args - Arguments to delete one Gift_infos.
     * @example
     * // Delete one Gift_infos
     * const Gift_infos = await prisma.gift_infos.delete({
     *   where: {
     *     // ... filter to delete one Gift_infos
     *   }
     * })
     * 
     */
    delete<T extends gift_infosDeleteArgs>(args: SelectSubset<T, gift_infosDeleteArgs<ExtArgs>>): Prisma__gift_infosClient<$Result.GetResult<Prisma.$gift_infosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gift_infos.
     * @param {gift_infosUpdateArgs} args - Arguments to update one Gift_infos.
     * @example
     * // Update one Gift_infos
     * const gift_infos = await prisma.gift_infos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gift_infosUpdateArgs>(args: SelectSubset<T, gift_infosUpdateArgs<ExtArgs>>): Prisma__gift_infosClient<$Result.GetResult<Prisma.$gift_infosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gift_infos.
     * @param {gift_infosDeleteManyArgs} args - Arguments to filter Gift_infos to delete.
     * @example
     * // Delete a few Gift_infos
     * const { count } = await prisma.gift_infos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gift_infosDeleteManyArgs>(args?: SelectSubset<T, gift_infosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gift_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gift_infosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gift_infos
     * const gift_infos = await prisma.gift_infos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gift_infosUpdateManyArgs>(args: SelectSubset<T, gift_infosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gift_infos and returns the data updated in the database.
     * @param {gift_infosUpdateManyAndReturnArgs} args - Arguments to update many Gift_infos.
     * @example
     * // Update many Gift_infos
     * const gift_infos = await prisma.gift_infos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gift_infos and only return the `id`
     * const gift_infosWithIdOnly = await prisma.gift_infos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends gift_infosUpdateManyAndReturnArgs>(args: SelectSubset<T, gift_infosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gift_infosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gift_infos.
     * @param {gift_infosUpsertArgs} args - Arguments to update or create a Gift_infos.
     * @example
     * // Update or create a Gift_infos
     * const gift_infos = await prisma.gift_infos.upsert({
     *   create: {
     *     // ... data to create a Gift_infos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gift_infos we want to update
     *   }
     * })
     */
    upsert<T extends gift_infosUpsertArgs>(args: SelectSubset<T, gift_infosUpsertArgs<ExtArgs>>): Prisma__gift_infosClient<$Result.GetResult<Prisma.$gift_infosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gift_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gift_infosCountArgs} args - Arguments to filter Gift_infos to count.
     * @example
     * // Count the number of Gift_infos
     * const count = await prisma.gift_infos.count({
     *   where: {
     *     // ... the filter for the Gift_infos we want to count
     *   }
     * })
    **/
    count<T extends gift_infosCountArgs>(
      args?: Subset<T, gift_infosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gift_infosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gift_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gift_infosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Gift_infosAggregateArgs>(args: Subset<T, Gift_infosAggregateArgs>): Prisma.PrismaPromise<GetGift_infosAggregateType<T>>

    /**
     * Group by Gift_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gift_infosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gift_infosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gift_infosGroupByArgs['orderBy'] }
        : { orderBy?: gift_infosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gift_infosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGift_infosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gift_infos model
   */
  readonly fields: gift_infosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gift_infos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gift_infosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitations<T extends gift_infos$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, gift_infos$invitationsArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gift_infos model
   */
  interface gift_infosFieldRefs {
    readonly id: FieldRef<"gift_infos", 'Int'>
    readonly invitation_id: FieldRef<"gift_infos", 'Int'>
    readonly provider_name: FieldRef<"gift_infos", 'String'>
    readonly account_number: FieldRef<"gift_infos", 'String'>
    readonly account_holder: FieldRef<"gift_infos", 'String'>
    readonly gift_delivery_address: FieldRef<"gift_infos", 'String'>
    readonly created_at: FieldRef<"gift_infos", 'DateTime'>
    readonly updated_at: FieldRef<"gift_infos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * gift_infos findUnique
   */
  export type gift_infosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosInclude<ExtArgs> | null
    /**
     * Filter, which gift_infos to fetch.
     */
    where: gift_infosWhereUniqueInput
  }

  /**
   * gift_infos findUniqueOrThrow
   */
  export type gift_infosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosInclude<ExtArgs> | null
    /**
     * Filter, which gift_infos to fetch.
     */
    where: gift_infosWhereUniqueInput
  }

  /**
   * gift_infos findFirst
   */
  export type gift_infosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosInclude<ExtArgs> | null
    /**
     * Filter, which gift_infos to fetch.
     */
    where?: gift_infosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gift_infos to fetch.
     */
    orderBy?: gift_infosOrderByWithRelationInput | gift_infosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gift_infos.
     */
    cursor?: gift_infosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gift_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gift_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gift_infos.
     */
    distinct?: Gift_infosScalarFieldEnum | Gift_infosScalarFieldEnum[]
  }

  /**
   * gift_infos findFirstOrThrow
   */
  export type gift_infosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosInclude<ExtArgs> | null
    /**
     * Filter, which gift_infos to fetch.
     */
    where?: gift_infosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gift_infos to fetch.
     */
    orderBy?: gift_infosOrderByWithRelationInput | gift_infosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gift_infos.
     */
    cursor?: gift_infosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gift_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gift_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gift_infos.
     */
    distinct?: Gift_infosScalarFieldEnum | Gift_infosScalarFieldEnum[]
  }

  /**
   * gift_infos findMany
   */
  export type gift_infosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosInclude<ExtArgs> | null
    /**
     * Filter, which gift_infos to fetch.
     */
    where?: gift_infosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gift_infos to fetch.
     */
    orderBy?: gift_infosOrderByWithRelationInput | gift_infosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gift_infos.
     */
    cursor?: gift_infosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gift_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gift_infos.
     */
    skip?: number
    distinct?: Gift_infosScalarFieldEnum | Gift_infosScalarFieldEnum[]
  }

  /**
   * gift_infos create
   */
  export type gift_infosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosInclude<ExtArgs> | null
    /**
     * The data needed to create a gift_infos.
     */
    data?: XOR<gift_infosCreateInput, gift_infosUncheckedCreateInput>
  }

  /**
   * gift_infos createMany
   */
  export type gift_infosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gift_infos.
     */
    data: gift_infosCreateManyInput | gift_infosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gift_infos createManyAndReturn
   */
  export type gift_infosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * The data used to create many gift_infos.
     */
    data: gift_infosCreateManyInput | gift_infosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * gift_infos update
   */
  export type gift_infosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosInclude<ExtArgs> | null
    /**
     * The data needed to update a gift_infos.
     */
    data: XOR<gift_infosUpdateInput, gift_infosUncheckedUpdateInput>
    /**
     * Choose, which gift_infos to update.
     */
    where: gift_infosWhereUniqueInput
  }

  /**
   * gift_infos updateMany
   */
  export type gift_infosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gift_infos.
     */
    data: XOR<gift_infosUpdateManyMutationInput, gift_infosUncheckedUpdateManyInput>
    /**
     * Filter which gift_infos to update
     */
    where?: gift_infosWhereInput
    /**
     * Limit how many gift_infos to update.
     */
    limit?: number
  }

  /**
   * gift_infos updateManyAndReturn
   */
  export type gift_infosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * The data used to update gift_infos.
     */
    data: XOR<gift_infosUpdateManyMutationInput, gift_infosUncheckedUpdateManyInput>
    /**
     * Filter which gift_infos to update
     */
    where?: gift_infosWhereInput
    /**
     * Limit how many gift_infos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * gift_infos upsert
   */
  export type gift_infosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosInclude<ExtArgs> | null
    /**
     * The filter to search for the gift_infos to update in case it exists.
     */
    where: gift_infosWhereUniqueInput
    /**
     * In case the gift_infos found by the `where` argument doesn't exist, create a new gift_infos with this data.
     */
    create: XOR<gift_infosCreateInput, gift_infosUncheckedCreateInput>
    /**
     * In case the gift_infos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gift_infosUpdateInput, gift_infosUncheckedUpdateInput>
  }

  /**
   * gift_infos delete
   */
  export type gift_infosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosInclude<ExtArgs> | null
    /**
     * Filter which gift_infos to delete.
     */
    where: gift_infosWhereUniqueInput
  }

  /**
   * gift_infos deleteMany
   */
  export type gift_infosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gift_infos to delete
     */
    where?: gift_infosWhereInput
    /**
     * Limit how many gift_infos to delete.
     */
    limit?: number
  }

  /**
   * gift_infos.invitations
   */
  export type gift_infos$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    where?: invitationsWhereInput
  }

  /**
   * gift_infos without action
   */
  export type gift_infosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosInclude<ExtArgs> | null
  }


  /**
   * Model guests
   */

  export type AggregateGuests = {
    _count: GuestsCountAggregateOutputType | null
    _avg: GuestsAvgAggregateOutputType | null
    _sum: GuestsSumAggregateOutputType | null
    _min: GuestsMinAggregateOutputType | null
    _max: GuestsMaxAggregateOutputType | null
  }

  export type GuestsAvgAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    total_guest: number | null
  }

  export type GuestsSumAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    total_guest: number | null
  }

  export type GuestsMinAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    name: string | null
    phone_number: string | null
    slug: string | null
    is_attending: boolean | null
    total_guest: number | null
    notes: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GuestsMaxAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    name: string | null
    phone_number: string | null
    slug: string | null
    is_attending: boolean | null
    total_guest: number | null
    notes: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GuestsCountAggregateOutputType = {
    id: number
    invitation_id: number
    name: number
    phone_number: number
    slug: number
    is_attending: number
    total_guest: number
    notes: number
    address: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GuestsAvgAggregateInputType = {
    id?: true
    invitation_id?: true
    total_guest?: true
  }

  export type GuestsSumAggregateInputType = {
    id?: true
    invitation_id?: true
    total_guest?: true
  }

  export type GuestsMinAggregateInputType = {
    id?: true
    invitation_id?: true
    name?: true
    phone_number?: true
    slug?: true
    is_attending?: true
    total_guest?: true
    notes?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type GuestsMaxAggregateInputType = {
    id?: true
    invitation_id?: true
    name?: true
    phone_number?: true
    slug?: true
    is_attending?: true
    total_guest?: true
    notes?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type GuestsCountAggregateInputType = {
    id?: true
    invitation_id?: true
    name?: true
    phone_number?: true
    slug?: true
    is_attending?: true
    total_guest?: true
    notes?: true
    address?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GuestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which guests to aggregate.
     */
    where?: guestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guests to fetch.
     */
    orderBy?: guestsOrderByWithRelationInput | guestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: guestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned guests
    **/
    _count?: true | GuestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestsMaxAggregateInputType
  }

  export type GetGuestsAggregateType<T extends GuestsAggregateArgs> = {
        [P in keyof T & keyof AggregateGuests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuests[P]>
      : GetScalarType<T[P], AggregateGuests[P]>
  }




  export type guestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: guestsWhereInput
    orderBy?: guestsOrderByWithAggregationInput | guestsOrderByWithAggregationInput[]
    by: GuestsScalarFieldEnum[] | GuestsScalarFieldEnum
    having?: guestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestsCountAggregateInputType | true
    _avg?: GuestsAvgAggregateInputType
    _sum?: GuestsSumAggregateInputType
    _min?: GuestsMinAggregateInputType
    _max?: GuestsMaxAggregateInputType
  }

  export type GuestsGroupByOutputType = {
    id: number
    invitation_id: number | null
    name: string | null
    phone_number: string | null
    slug: string | null
    is_attending: boolean | null
    total_guest: number | null
    notes: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: GuestsCountAggregateOutputType | null
    _avg: GuestsAvgAggregateOutputType | null
    _sum: GuestsSumAggregateOutputType | null
    _min: GuestsMinAggregateOutputType | null
    _max: GuestsMaxAggregateOutputType | null
  }

  type GetGuestsGroupByPayload<T extends guestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestsGroupByOutputType[P]>
            : GetScalarType<T[P], GuestsGroupByOutputType[P]>
        }
      >
    >


  export type guestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    name?: boolean
    phone_number?: boolean
    slug?: boolean
    is_attending?: boolean
    total_guest?: boolean
    notes?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | guests$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["guests"]>

  export type guestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    name?: boolean
    phone_number?: boolean
    slug?: boolean
    is_attending?: boolean
    total_guest?: boolean
    notes?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | guests$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["guests"]>

  export type guestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    name?: boolean
    phone_number?: boolean
    slug?: boolean
    is_attending?: boolean
    total_guest?: boolean
    notes?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | guests$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["guests"]>

  export type guestsSelectScalar = {
    id?: boolean
    invitation_id?: boolean
    name?: boolean
    phone_number?: boolean
    slug?: boolean
    is_attending?: boolean
    total_guest?: boolean
    notes?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type guestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invitation_id" | "name" | "phone_number" | "slug" | "is_attending" | "total_guest" | "notes" | "address" | "created_at" | "updated_at", ExtArgs["result"]["guests"]>
  export type guestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | guests$invitationsArgs<ExtArgs>
  }
  export type guestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | guests$invitationsArgs<ExtArgs>
  }
  export type guestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | guests$invitationsArgs<ExtArgs>
  }

  export type $guestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "guests"
    objects: {
      invitations: Prisma.$invitationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invitation_id: number | null
      name: string | null
      phone_number: string | null
      slug: string | null
      is_attending: boolean | null
      total_guest: number | null
      notes: string | null
      address: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["guests"]>
    composites: {}
  }

  type guestsGetPayload<S extends boolean | null | undefined | guestsDefaultArgs> = $Result.GetResult<Prisma.$guestsPayload, S>

  type guestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<guestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestsCountAggregateInputType | true
    }

  export interface guestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['guests'], meta: { name: 'guests' } }
    /**
     * Find zero or one Guests that matches the filter.
     * @param {guestsFindUniqueArgs} args - Arguments to find a Guests
     * @example
     * // Get one Guests
     * const guests = await prisma.guests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends guestsFindUniqueArgs>(args: SelectSubset<T, guestsFindUniqueArgs<ExtArgs>>): Prisma__guestsClient<$Result.GetResult<Prisma.$guestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {guestsFindUniqueOrThrowArgs} args - Arguments to find a Guests
     * @example
     * // Get one Guests
     * const guests = await prisma.guests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends guestsFindUniqueOrThrowArgs>(args: SelectSubset<T, guestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__guestsClient<$Result.GetResult<Prisma.$guestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestsFindFirstArgs} args - Arguments to find a Guests
     * @example
     * // Get one Guests
     * const guests = await prisma.guests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends guestsFindFirstArgs>(args?: SelectSubset<T, guestsFindFirstArgs<ExtArgs>>): Prisma__guestsClient<$Result.GetResult<Prisma.$guestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestsFindFirstOrThrowArgs} args - Arguments to find a Guests
     * @example
     * // Get one Guests
     * const guests = await prisma.guests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends guestsFindFirstOrThrowArgs>(args?: SelectSubset<T, guestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__guestsClient<$Result.GetResult<Prisma.$guestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guests.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestsWithIdOnly = await prisma.guests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends guestsFindManyArgs>(args?: SelectSubset<T, guestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$guestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guests.
     * @param {guestsCreateArgs} args - Arguments to create a Guests.
     * @example
     * // Create one Guests
     * const Guests = await prisma.guests.create({
     *   data: {
     *     // ... data to create a Guests
     *   }
     * })
     * 
     */
    create<T extends guestsCreateArgs>(args: SelectSubset<T, guestsCreateArgs<ExtArgs>>): Prisma__guestsClient<$Result.GetResult<Prisma.$guestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guests.
     * @param {guestsCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guests = await prisma.guests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends guestsCreateManyArgs>(args?: SelectSubset<T, guestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guests and returns the data saved in the database.
     * @param {guestsCreateManyAndReturnArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guests = await prisma.guests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guests and only return the `id`
     * const guestsWithIdOnly = await prisma.guests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends guestsCreateManyAndReturnArgs>(args?: SelectSubset<T, guestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$guestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guests.
     * @param {guestsDeleteArgs} args - Arguments to delete one Guests.
     * @example
     * // Delete one Guests
     * const Guests = await prisma.guests.delete({
     *   where: {
     *     // ... filter to delete one Guests
     *   }
     * })
     * 
     */
    delete<T extends guestsDeleteArgs>(args: SelectSubset<T, guestsDeleteArgs<ExtArgs>>): Prisma__guestsClient<$Result.GetResult<Prisma.$guestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guests.
     * @param {guestsUpdateArgs} args - Arguments to update one Guests.
     * @example
     * // Update one Guests
     * const guests = await prisma.guests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends guestsUpdateArgs>(args: SelectSubset<T, guestsUpdateArgs<ExtArgs>>): Prisma__guestsClient<$Result.GetResult<Prisma.$guestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guests.
     * @param {guestsDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends guestsDeleteManyArgs>(args?: SelectSubset<T, guestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guests = await prisma.guests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends guestsUpdateManyArgs>(args: SelectSubset<T, guestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests and returns the data updated in the database.
     * @param {guestsUpdateManyAndReturnArgs} args - Arguments to update many Guests.
     * @example
     * // Update many Guests
     * const guests = await prisma.guests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guests and only return the `id`
     * const guestsWithIdOnly = await prisma.guests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends guestsUpdateManyAndReturnArgs>(args: SelectSubset<T, guestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$guestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guests.
     * @param {guestsUpsertArgs} args - Arguments to update or create a Guests.
     * @example
     * // Update or create a Guests
     * const guests = await prisma.guests.upsert({
     *   create: {
     *     // ... data to create a Guests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guests we want to update
     *   }
     * })
     */
    upsert<T extends guestsUpsertArgs>(args: SelectSubset<T, guestsUpsertArgs<ExtArgs>>): Prisma__guestsClient<$Result.GetResult<Prisma.$guestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestsCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guests.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends guestsCountArgs>(
      args?: Subset<T, guestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuestsAggregateArgs>(args: Subset<T, GuestsAggregateArgs>): Prisma.PrismaPromise<GetGuestsAggregateType<T>>

    /**
     * Group by Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends guestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: guestsGroupByArgs['orderBy'] }
        : { orderBy?: guestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, guestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the guests model
   */
  readonly fields: guestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for guests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__guestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitations<T extends guests$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, guests$invitationsArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the guests model
   */
  interface guestsFieldRefs {
    readonly id: FieldRef<"guests", 'Int'>
    readonly invitation_id: FieldRef<"guests", 'Int'>
    readonly name: FieldRef<"guests", 'String'>
    readonly phone_number: FieldRef<"guests", 'String'>
    readonly slug: FieldRef<"guests", 'String'>
    readonly is_attending: FieldRef<"guests", 'Boolean'>
    readonly total_guest: FieldRef<"guests", 'Int'>
    readonly notes: FieldRef<"guests", 'String'>
    readonly address: FieldRef<"guests", 'String'>
    readonly created_at: FieldRef<"guests", 'DateTime'>
    readonly updated_at: FieldRef<"guests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * guests findUnique
   */
  export type guestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsInclude<ExtArgs> | null
    /**
     * Filter, which guests to fetch.
     */
    where: guestsWhereUniqueInput
  }

  /**
   * guests findUniqueOrThrow
   */
  export type guestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsInclude<ExtArgs> | null
    /**
     * Filter, which guests to fetch.
     */
    where: guestsWhereUniqueInput
  }

  /**
   * guests findFirst
   */
  export type guestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsInclude<ExtArgs> | null
    /**
     * Filter, which guests to fetch.
     */
    where?: guestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guests to fetch.
     */
    orderBy?: guestsOrderByWithRelationInput | guestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for guests.
     */
    cursor?: guestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of guests.
     */
    distinct?: GuestsScalarFieldEnum | GuestsScalarFieldEnum[]
  }

  /**
   * guests findFirstOrThrow
   */
  export type guestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsInclude<ExtArgs> | null
    /**
     * Filter, which guests to fetch.
     */
    where?: guestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guests to fetch.
     */
    orderBy?: guestsOrderByWithRelationInput | guestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for guests.
     */
    cursor?: guestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of guests.
     */
    distinct?: GuestsScalarFieldEnum | GuestsScalarFieldEnum[]
  }

  /**
   * guests findMany
   */
  export type guestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsInclude<ExtArgs> | null
    /**
     * Filter, which guests to fetch.
     */
    where?: guestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of guests to fetch.
     */
    orderBy?: guestsOrderByWithRelationInput | guestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing guests.
     */
    cursor?: guestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` guests.
     */
    skip?: number
    distinct?: GuestsScalarFieldEnum | GuestsScalarFieldEnum[]
  }

  /**
   * guests create
   */
  export type guestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsInclude<ExtArgs> | null
    /**
     * The data needed to create a guests.
     */
    data?: XOR<guestsCreateInput, guestsUncheckedCreateInput>
  }

  /**
   * guests createMany
   */
  export type guestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many guests.
     */
    data: guestsCreateManyInput | guestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * guests createManyAndReturn
   */
  export type guestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * The data used to create many guests.
     */
    data: guestsCreateManyInput | guestsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * guests update
   */
  export type guestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsInclude<ExtArgs> | null
    /**
     * The data needed to update a guests.
     */
    data: XOR<guestsUpdateInput, guestsUncheckedUpdateInput>
    /**
     * Choose, which guests to update.
     */
    where: guestsWhereUniqueInput
  }

  /**
   * guests updateMany
   */
  export type guestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update guests.
     */
    data: XOR<guestsUpdateManyMutationInput, guestsUncheckedUpdateManyInput>
    /**
     * Filter which guests to update
     */
    where?: guestsWhereInput
    /**
     * Limit how many guests to update.
     */
    limit?: number
  }

  /**
   * guests updateManyAndReturn
   */
  export type guestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * The data used to update guests.
     */
    data: XOR<guestsUpdateManyMutationInput, guestsUncheckedUpdateManyInput>
    /**
     * Filter which guests to update
     */
    where?: guestsWhereInput
    /**
     * Limit how many guests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * guests upsert
   */
  export type guestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsInclude<ExtArgs> | null
    /**
     * The filter to search for the guests to update in case it exists.
     */
    where: guestsWhereUniqueInput
    /**
     * In case the guests found by the `where` argument doesn't exist, create a new guests with this data.
     */
    create: XOR<guestsCreateInput, guestsUncheckedCreateInput>
    /**
     * In case the guests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<guestsUpdateInput, guestsUncheckedUpdateInput>
  }

  /**
   * guests delete
   */
  export type guestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsInclude<ExtArgs> | null
    /**
     * Filter which guests to delete.
     */
    where: guestsWhereUniqueInput
  }

  /**
   * guests deleteMany
   */
  export type guestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which guests to delete
     */
    where?: guestsWhereInput
    /**
     * Limit how many guests to delete.
     */
    limit?: number
  }

  /**
   * guests.invitations
   */
  export type guests$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    where?: invitationsWhereInput
  }

  /**
   * guests without action
   */
  export type guestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsInclude<ExtArgs> | null
  }


  /**
   * Model images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    id: number | null
    invitation_id: number | null
  }

  export type ImagesSumAggregateOutputType = {
    id: number | null
    invitation_id: number | null
  }

  export type ImagesMinAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    url: string | null
    caption: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
    order_number: string | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    url: string | null
    caption: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
    order_number: string | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    invitation_id: number
    url: number
    caption: number
    type: number
    created_at: number
    updated_at: number
    order_number: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    id?: true
    invitation_id?: true
  }

  export type ImagesSumAggregateInputType = {
    id?: true
    invitation_id?: true
  }

  export type ImagesMinAggregateInputType = {
    id?: true
    invitation_id?: true
    url?: true
    caption?: true
    type?: true
    created_at?: true
    updated_at?: true
    order_number?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    invitation_id?: true
    url?: true
    caption?: true
    type?: true
    created_at?: true
    updated_at?: true
    order_number?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    invitation_id?: true
    url?: true
    caption?: true
    type?: true
    created_at?: true
    updated_at?: true
    order_number?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to aggregate.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagesWhereInput
    orderBy?: imagesOrderByWithAggregationInput | imagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: number
    invitation_id: number | null
    url: string | null
    caption: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
    order_number: string | null
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    url?: boolean
    caption?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_number?: boolean
    invitations?: boolean | images$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    url?: boolean
    caption?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_number?: boolean
    invitations?: boolean | images$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    url?: boolean
    caption?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_number?: boolean
    invitations?: boolean | images$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type imagesSelectScalar = {
    id?: boolean
    invitation_id?: boolean
    url?: boolean
    caption?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_number?: boolean
  }

  export type imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invitation_id" | "url" | "caption" | "type" | "created_at" | "updated_at" | "order_number", ExtArgs["result"]["images"]>
  export type imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | images$invitationsArgs<ExtArgs>
  }
  export type imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | images$invitationsArgs<ExtArgs>
  }
  export type imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | images$invitationsArgs<ExtArgs>
  }

  export type $imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "images"
    objects: {
      invitations: Prisma.$invitationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invitation_id: number | null
      url: string | null
      caption: string | null
      type: string | null
      created_at: Date | null
      updated_at: Date | null
      order_number: string | null
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type imagesGetPayload<S extends boolean | null | undefined | imagesDefaultArgs> = $Result.GetResult<Prisma.$imagesPayload, S>

  type imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['images'], meta: { name: 'images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {imagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imagesFindUniqueArgs>(args: SelectSubset<T, imagesFindUniqueArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {imagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imagesFindFirstArgs>(args?: SelectSubset<T, imagesFindFirstArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends imagesFindManyArgs>(args?: SelectSubset<T, imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Images.
     * @param {imagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends imagesCreateArgs>(args: SelectSubset<T, imagesCreateArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {imagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imagesCreateManyArgs>(args?: SelectSubset<T, imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {imagesCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imagesWithIdOnly = await prisma.images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Images.
     * @param {imagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends imagesDeleteArgs>(args: SelectSubset<T, imagesDeleteArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Images.
     * @param {imagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imagesUpdateArgs>(args: SelectSubset<T, imagesUpdateArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {imagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imagesDeleteManyArgs>(args?: SelectSubset<T, imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imagesUpdateManyArgs>(args: SelectSubset<T, imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {imagesUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imagesWithIdOnly = await prisma.images.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Images.
     * @param {imagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends imagesUpsertArgs>(args: SelectSubset<T, imagesUpsertArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends imagesCountArgs>(
      args?: Subset<T, imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imagesGroupByArgs['orderBy'] }
        : { orderBy?: imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the images model
   */
  readonly fields: imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitations<T extends images$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, images$invitationsArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the images model
   */
  interface imagesFieldRefs {
    readonly id: FieldRef<"images", 'Int'>
    readonly invitation_id: FieldRef<"images", 'Int'>
    readonly url: FieldRef<"images", 'String'>
    readonly caption: FieldRef<"images", 'String'>
    readonly type: FieldRef<"images", 'String'>
    readonly created_at: FieldRef<"images", 'DateTime'>
    readonly updated_at: FieldRef<"images", 'DateTime'>
    readonly order_number: FieldRef<"images", 'String'>
  }
    

  // Custom InputTypes
  /**
   * images findUnique
   */
  export type imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images findUniqueOrThrow
   */
  export type imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images findFirst
   */
  export type imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images findFirstOrThrow
   */
  export type imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images findMany
   */
  export type imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images create
   */
  export type imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a images.
     */
    data?: XOR<imagesCreateInput, imagesUncheckedCreateInput>
  }

  /**
   * images createMany
   */
  export type imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many images.
     */
    data: imagesCreateManyInput | imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * images createManyAndReturn
   */
  export type imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * The data used to create many images.
     */
    data: imagesCreateManyInput | imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * images update
   */
  export type imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a images.
     */
    data: XOR<imagesUpdateInput, imagesUncheckedUpdateInput>
    /**
     * Choose, which images to update.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images updateMany
   */
  export type imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update images.
     */
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to update.
     */
    limit?: number
  }

  /**
   * images updateManyAndReturn
   */
  export type imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * The data used to update images.
     */
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * images upsert
   */
  export type imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the images to update in case it exists.
     */
    where: imagesWhereUniqueInput
    /**
     * In case the images found by the `where` argument doesn't exist, create a new images with this data.
     */
    create: XOR<imagesCreateInput, imagesUncheckedCreateInput>
    /**
     * In case the images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imagesUpdateInput, imagesUncheckedUpdateInput>
  }

  /**
   * images delete
   */
  export type imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter which images to delete.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images deleteMany
   */
  export type imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to delete
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to delete.
     */
    limit?: number
  }

  /**
   * images.invitations
   */
  export type images$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    where?: invitationsWhereInput
  }

  /**
   * images without action
   */
  export type imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
  }


  /**
   * Model invitations
   */

  export type AggregateInvitations = {
    _count: InvitationsCountAggregateOutputType | null
    _avg: InvitationsAvgAggregateOutputType | null
    _sum: InvitationsSumAggregateOutputType | null
    _min: InvitationsMinAggregateOutputType | null
    _max: InvitationsMaxAggregateOutputType | null
  }

  export type InvitationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    theme_id: number | null
    music_id: number | null
  }

  export type InvitationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    theme_id: number | null
    music_id: number | null
  }

  export type InvitationsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    theme_id: number | null
    music_id: number | null
    phone_number: string | null
    slug: string | null
    event_title: string | null
    host_one_name: string | null
    host_two_name: string | null
    host_one_nickname: string | null
    host_two_nickname: string | null
    host_one_additional_info: string | null
    host_two_additional_info: string | null
    host_one_social_media: string | null
    host_two_social_media: string | null
    event_date: Date | null
    event_type: string | null
    location: string | null
    location_url: string | null
    message: string | null
    hashtag: string | null
    is_active: boolean | null
    activated_at: Date | null
    expired_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    web_url: string | null
    message_template: string | null
    additional_info: string | null
    location_detail: string | null
  }

  export type InvitationsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    theme_id: number | null
    music_id: number | null
    phone_number: string | null
    slug: string | null
    event_title: string | null
    host_one_name: string | null
    host_two_name: string | null
    host_one_nickname: string | null
    host_two_nickname: string | null
    host_one_additional_info: string | null
    host_two_additional_info: string | null
    host_one_social_media: string | null
    host_two_social_media: string | null
    event_date: Date | null
    event_type: string | null
    location: string | null
    location_url: string | null
    message: string | null
    hashtag: string | null
    is_active: boolean | null
    activated_at: Date | null
    expired_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    web_url: string | null
    message_template: string | null
    additional_info: string | null
    location_detail: string | null
  }

  export type InvitationsCountAggregateOutputType = {
    id: number
    user_id: number
    theme_id: number
    music_id: number
    phone_number: number
    slug: number
    event_title: number
    host_one_name: number
    host_two_name: number
    host_one_nickname: number
    host_two_nickname: number
    host_one_additional_info: number
    host_two_additional_info: number
    host_one_social_media: number
    host_two_social_media: number
    event_date: number
    event_type: number
    location: number
    location_url: number
    message: number
    hashtag: number
    is_active: number
    activated_at: number
    expired_at: number
    created_at: number
    updated_at: number
    web_url: number
    message_template: number
    additional_info: number
    location_detail: number
    _all: number
  }


  export type InvitationsAvgAggregateInputType = {
    id?: true
    user_id?: true
    theme_id?: true
    music_id?: true
  }

  export type InvitationsSumAggregateInputType = {
    id?: true
    user_id?: true
    theme_id?: true
    music_id?: true
  }

  export type InvitationsMinAggregateInputType = {
    id?: true
    user_id?: true
    theme_id?: true
    music_id?: true
    phone_number?: true
    slug?: true
    event_title?: true
    host_one_name?: true
    host_two_name?: true
    host_one_nickname?: true
    host_two_nickname?: true
    host_one_additional_info?: true
    host_two_additional_info?: true
    host_one_social_media?: true
    host_two_social_media?: true
    event_date?: true
    event_type?: true
    location?: true
    location_url?: true
    message?: true
    hashtag?: true
    is_active?: true
    activated_at?: true
    expired_at?: true
    created_at?: true
    updated_at?: true
    web_url?: true
    message_template?: true
    additional_info?: true
    location_detail?: true
  }

  export type InvitationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    theme_id?: true
    music_id?: true
    phone_number?: true
    slug?: true
    event_title?: true
    host_one_name?: true
    host_two_name?: true
    host_one_nickname?: true
    host_two_nickname?: true
    host_one_additional_info?: true
    host_two_additional_info?: true
    host_one_social_media?: true
    host_two_social_media?: true
    event_date?: true
    event_type?: true
    location?: true
    location_url?: true
    message?: true
    hashtag?: true
    is_active?: true
    activated_at?: true
    expired_at?: true
    created_at?: true
    updated_at?: true
    web_url?: true
    message_template?: true
    additional_info?: true
    location_detail?: true
  }

  export type InvitationsCountAggregateInputType = {
    id?: true
    user_id?: true
    theme_id?: true
    music_id?: true
    phone_number?: true
    slug?: true
    event_title?: true
    host_one_name?: true
    host_two_name?: true
    host_one_nickname?: true
    host_two_nickname?: true
    host_one_additional_info?: true
    host_two_additional_info?: true
    host_one_social_media?: true
    host_two_social_media?: true
    event_date?: true
    event_type?: true
    location?: true
    location_url?: true
    message?: true
    hashtag?: true
    is_active?: true
    activated_at?: true
    expired_at?: true
    created_at?: true
    updated_at?: true
    web_url?: true
    message_template?: true
    additional_info?: true
    location_detail?: true
    _all?: true
  }

  export type InvitationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invitations to aggregate.
     */
    where?: invitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invitations to fetch.
     */
    orderBy?: invitationsOrderByWithRelationInput | invitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invitations
    **/
    _count?: true | InvitationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvitationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvitationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationsMaxAggregateInputType
  }

  export type GetInvitationsAggregateType<T extends InvitationsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitations[P]>
      : GetScalarType<T[P], AggregateInvitations[P]>
  }




  export type invitationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invitationsWhereInput
    orderBy?: invitationsOrderByWithAggregationInput | invitationsOrderByWithAggregationInput[]
    by: InvitationsScalarFieldEnum[] | InvitationsScalarFieldEnum
    having?: invitationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationsCountAggregateInputType | true
    _avg?: InvitationsAvgAggregateInputType
    _sum?: InvitationsSumAggregateInputType
    _min?: InvitationsMinAggregateInputType
    _max?: InvitationsMaxAggregateInputType
  }

  export type InvitationsGroupByOutputType = {
    id: number
    user_id: number | null
    theme_id: number | null
    music_id: number | null
    phone_number: string | null
    slug: string | null
    event_title: string | null
    host_one_name: string | null
    host_two_name: string | null
    host_one_nickname: string | null
    host_two_nickname: string | null
    host_one_additional_info: string | null
    host_two_additional_info: string | null
    host_one_social_media: string | null
    host_two_social_media: string | null
    event_date: Date | null
    event_type: string | null
    location: string | null
    location_url: string | null
    message: string | null
    hashtag: string | null
    is_active: boolean | null
    activated_at: Date | null
    expired_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    web_url: string | null
    message_template: string | null
    additional_info: string | null
    location_detail: string | null
    _count: InvitationsCountAggregateOutputType | null
    _avg: InvitationsAvgAggregateOutputType | null
    _sum: InvitationsSumAggregateOutputType | null
    _min: InvitationsMinAggregateOutputType | null
    _max: InvitationsMaxAggregateOutputType | null
  }

  type GetInvitationsGroupByPayload<T extends invitationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationsGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationsGroupByOutputType[P]>
        }
      >
    >


  export type invitationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    theme_id?: boolean
    music_id?: boolean
    phone_number?: boolean
    slug?: boolean
    event_title?: boolean
    host_one_name?: boolean
    host_two_name?: boolean
    host_one_nickname?: boolean
    host_two_nickname?: boolean
    host_one_additional_info?: boolean
    host_two_additional_info?: boolean
    host_one_social_media?: boolean
    host_two_social_media?: boolean
    event_date?: boolean
    event_type?: boolean
    location?: boolean
    location_url?: boolean
    message?: boolean
    hashtag?: boolean
    is_active?: boolean
    activated_at?: boolean
    expired_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    web_url?: boolean
    message_template?: boolean
    additional_info?: boolean
    location_detail?: boolean
    gift_infos?: boolean | invitations$gift_infosArgs<ExtArgs>
    guests?: boolean | invitations$guestsArgs<ExtArgs>
    images?: boolean | invitations$imagesArgs<ExtArgs>
    music?: boolean | invitations$musicArgs<ExtArgs>
    themes?: boolean | invitations$themesArgs<ExtArgs>
    users?: boolean | invitations$usersArgs<ExtArgs>
    rsvps?: boolean | invitations$rsvpsArgs<ExtArgs>
    rundowns?: boolean | invitations$rundownsArgs<ExtArgs>
    stories?: boolean | invitations$storiesArgs<ExtArgs>
    videos?: boolean | invitations$videosArgs<ExtArgs>
    _count?: boolean | InvitationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitations"]>

  export type invitationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    theme_id?: boolean
    music_id?: boolean
    phone_number?: boolean
    slug?: boolean
    event_title?: boolean
    host_one_name?: boolean
    host_two_name?: boolean
    host_one_nickname?: boolean
    host_two_nickname?: boolean
    host_one_additional_info?: boolean
    host_two_additional_info?: boolean
    host_one_social_media?: boolean
    host_two_social_media?: boolean
    event_date?: boolean
    event_type?: boolean
    location?: boolean
    location_url?: boolean
    message?: boolean
    hashtag?: boolean
    is_active?: boolean
    activated_at?: boolean
    expired_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    web_url?: boolean
    message_template?: boolean
    additional_info?: boolean
    location_detail?: boolean
    music?: boolean | invitations$musicArgs<ExtArgs>
    themes?: boolean | invitations$themesArgs<ExtArgs>
    users?: boolean | invitations$usersArgs<ExtArgs>
  }, ExtArgs["result"]["invitations"]>

  export type invitationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    theme_id?: boolean
    music_id?: boolean
    phone_number?: boolean
    slug?: boolean
    event_title?: boolean
    host_one_name?: boolean
    host_two_name?: boolean
    host_one_nickname?: boolean
    host_two_nickname?: boolean
    host_one_additional_info?: boolean
    host_two_additional_info?: boolean
    host_one_social_media?: boolean
    host_two_social_media?: boolean
    event_date?: boolean
    event_type?: boolean
    location?: boolean
    location_url?: boolean
    message?: boolean
    hashtag?: boolean
    is_active?: boolean
    activated_at?: boolean
    expired_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    web_url?: boolean
    message_template?: boolean
    additional_info?: boolean
    location_detail?: boolean
    music?: boolean | invitations$musicArgs<ExtArgs>
    themes?: boolean | invitations$themesArgs<ExtArgs>
    users?: boolean | invitations$usersArgs<ExtArgs>
  }, ExtArgs["result"]["invitations"]>

  export type invitationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    theme_id?: boolean
    music_id?: boolean
    phone_number?: boolean
    slug?: boolean
    event_title?: boolean
    host_one_name?: boolean
    host_two_name?: boolean
    host_one_nickname?: boolean
    host_two_nickname?: boolean
    host_one_additional_info?: boolean
    host_two_additional_info?: boolean
    host_one_social_media?: boolean
    host_two_social_media?: boolean
    event_date?: boolean
    event_type?: boolean
    location?: boolean
    location_url?: boolean
    message?: boolean
    hashtag?: boolean
    is_active?: boolean
    activated_at?: boolean
    expired_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    web_url?: boolean
    message_template?: boolean
    additional_info?: boolean
    location_detail?: boolean
  }

  export type invitationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "theme_id" | "music_id" | "phone_number" | "slug" | "event_title" | "host_one_name" | "host_two_name" | "host_one_nickname" | "host_two_nickname" | "host_one_additional_info" | "host_two_additional_info" | "host_one_social_media" | "host_two_social_media" | "event_date" | "event_type" | "location" | "location_url" | "message" | "hashtag" | "is_active" | "activated_at" | "expired_at" | "created_at" | "updated_at" | "web_url" | "message_template" | "additional_info" | "location_detail", ExtArgs["result"]["invitations"]>
  export type invitationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gift_infos?: boolean | invitations$gift_infosArgs<ExtArgs>
    guests?: boolean | invitations$guestsArgs<ExtArgs>
    images?: boolean | invitations$imagesArgs<ExtArgs>
    music?: boolean | invitations$musicArgs<ExtArgs>
    themes?: boolean | invitations$themesArgs<ExtArgs>
    users?: boolean | invitations$usersArgs<ExtArgs>
    rsvps?: boolean | invitations$rsvpsArgs<ExtArgs>
    rundowns?: boolean | invitations$rundownsArgs<ExtArgs>
    stories?: boolean | invitations$storiesArgs<ExtArgs>
    videos?: boolean | invitations$videosArgs<ExtArgs>
    _count?: boolean | InvitationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type invitationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    music?: boolean | invitations$musicArgs<ExtArgs>
    themes?: boolean | invitations$themesArgs<ExtArgs>
    users?: boolean | invitations$usersArgs<ExtArgs>
  }
  export type invitationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    music?: boolean | invitations$musicArgs<ExtArgs>
    themes?: boolean | invitations$themesArgs<ExtArgs>
    users?: boolean | invitations$usersArgs<ExtArgs>
  }

  export type $invitationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invitations"
    objects: {
      gift_infos: Prisma.$gift_infosPayload<ExtArgs>[]
      guests: Prisma.$guestsPayload<ExtArgs>[]
      images: Prisma.$imagesPayload<ExtArgs>[]
      music: Prisma.$musicPayload<ExtArgs> | null
      themes: Prisma.$themesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
      rsvps: Prisma.$rsvpsPayload<ExtArgs>[]
      rundowns: Prisma.$rundownsPayload<ExtArgs>[]
      stories: Prisma.$storiesPayload<ExtArgs>[]
      videos: Prisma.$videosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      theme_id: number | null
      music_id: number | null
      phone_number: string | null
      slug: string | null
      event_title: string | null
      host_one_name: string | null
      host_two_name: string | null
      host_one_nickname: string | null
      host_two_nickname: string | null
      host_one_additional_info: string | null
      host_two_additional_info: string | null
      host_one_social_media: string | null
      host_two_social_media: string | null
      event_date: Date | null
      event_type: string | null
      location: string | null
      location_url: string | null
      message: string | null
      hashtag: string | null
      is_active: boolean | null
      activated_at: Date | null
      expired_at: Date | null
      created_at: Date | null
      updated_at: Date | null
      web_url: string | null
      message_template: string | null
      additional_info: string | null
      location_detail: string | null
    }, ExtArgs["result"]["invitations"]>
    composites: {}
  }

  type invitationsGetPayload<S extends boolean | null | undefined | invitationsDefaultArgs> = $Result.GetResult<Prisma.$invitationsPayload, S>

  type invitationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invitationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationsCountAggregateInputType | true
    }

  export interface invitationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invitations'], meta: { name: 'invitations' } }
    /**
     * Find zero or one Invitations that matches the filter.
     * @param {invitationsFindUniqueArgs} args - Arguments to find a Invitations
     * @example
     * // Get one Invitations
     * const invitations = await prisma.invitations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invitationsFindUniqueArgs>(args: SelectSubset<T, invitationsFindUniqueArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invitationsFindUniqueOrThrowArgs} args - Arguments to find a Invitations
     * @example
     * // Get one Invitations
     * const invitations = await prisma.invitations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invitationsFindUniqueOrThrowArgs>(args: SelectSubset<T, invitationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationsFindFirstArgs} args - Arguments to find a Invitations
     * @example
     * // Get one Invitations
     * const invitations = await prisma.invitations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invitationsFindFirstArgs>(args?: SelectSubset<T, invitationsFindFirstArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationsFindFirstOrThrowArgs} args - Arguments to find a Invitations
     * @example
     * // Get one Invitations
     * const invitations = await prisma.invitations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invitationsFindFirstOrThrowArgs>(args?: SelectSubset<T, invitationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitations.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationsWithIdOnly = await prisma.invitations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invitationsFindManyArgs>(args?: SelectSubset<T, invitationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitations.
     * @param {invitationsCreateArgs} args - Arguments to create a Invitations.
     * @example
     * // Create one Invitations
     * const Invitations = await prisma.invitations.create({
     *   data: {
     *     // ... data to create a Invitations
     *   }
     * })
     * 
     */
    create<T extends invitationsCreateArgs>(args: SelectSubset<T, invitationsCreateArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {invitationsCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitations = await prisma.invitations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invitationsCreateManyArgs>(args?: SelectSubset<T, invitationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {invitationsCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitations = await prisma.invitations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationsWithIdOnly = await prisma.invitations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invitationsCreateManyAndReturnArgs>(args?: SelectSubset<T, invitationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitations.
     * @param {invitationsDeleteArgs} args - Arguments to delete one Invitations.
     * @example
     * // Delete one Invitations
     * const Invitations = await prisma.invitations.delete({
     *   where: {
     *     // ... filter to delete one Invitations
     *   }
     * })
     * 
     */
    delete<T extends invitationsDeleteArgs>(args: SelectSubset<T, invitationsDeleteArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitations.
     * @param {invitationsUpdateArgs} args - Arguments to update one Invitations.
     * @example
     * // Update one Invitations
     * const invitations = await prisma.invitations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invitationsUpdateArgs>(args: SelectSubset<T, invitationsUpdateArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {invitationsDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invitationsDeleteManyArgs>(args?: SelectSubset<T, invitationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitations = await prisma.invitations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invitationsUpdateManyArgs>(args: SelectSubset<T, invitationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {invitationsUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitations = await prisma.invitations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationsWithIdOnly = await prisma.invitations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends invitationsUpdateManyAndReturnArgs>(args: SelectSubset<T, invitationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitations.
     * @param {invitationsUpsertArgs} args - Arguments to update or create a Invitations.
     * @example
     * // Update or create a Invitations
     * const invitations = await prisma.invitations.upsert({
     *   create: {
     *     // ... data to create a Invitations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitations we want to update
     *   }
     * })
     */
    upsert<T extends invitationsUpsertArgs>(args: SelectSubset<T, invitationsUpsertArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationsCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitations.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends invitationsCountArgs>(
      args?: Subset<T, invitationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvitationsAggregateArgs>(args: Subset<T, InvitationsAggregateArgs>): Prisma.PrismaPromise<GetInvitationsAggregateType<T>>

    /**
     * Group by Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invitationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invitationsGroupByArgs['orderBy'] }
        : { orderBy?: invitationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invitationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invitations model
   */
  readonly fields: invitationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invitations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invitationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gift_infos<T extends invitations$gift_infosArgs<ExtArgs> = {}>(args?: Subset<T, invitations$gift_infosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gift_infosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guests<T extends invitations$guestsArgs<ExtArgs> = {}>(args?: Subset<T, invitations$guestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$guestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends invitations$imagesArgs<ExtArgs> = {}>(args?: Subset<T, invitations$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    music<T extends invitations$musicArgs<ExtArgs> = {}>(args?: Subset<T, invitations$musicArgs<ExtArgs>>): Prisma__musicClient<$Result.GetResult<Prisma.$musicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    themes<T extends invitations$themesArgs<ExtArgs> = {}>(args?: Subset<T, invitations$themesArgs<ExtArgs>>): Prisma__themesClient<$Result.GetResult<Prisma.$themesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends invitations$usersArgs<ExtArgs> = {}>(args?: Subset<T, invitations$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rsvps<T extends invitations$rsvpsArgs<ExtArgs> = {}>(args?: Subset<T, invitations$rsvpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rsvpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rundowns<T extends invitations$rundownsArgs<ExtArgs> = {}>(args?: Subset<T, invitations$rundownsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rundownsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stories<T extends invitations$storiesArgs<ExtArgs> = {}>(args?: Subset<T, invitations$storiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videos<T extends invitations$videosArgs<ExtArgs> = {}>(args?: Subset<T, invitations$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invitations model
   */
  interface invitationsFieldRefs {
    readonly id: FieldRef<"invitations", 'Int'>
    readonly user_id: FieldRef<"invitations", 'Int'>
    readonly theme_id: FieldRef<"invitations", 'Int'>
    readonly music_id: FieldRef<"invitations", 'Int'>
    readonly phone_number: FieldRef<"invitations", 'String'>
    readonly slug: FieldRef<"invitations", 'String'>
    readonly event_title: FieldRef<"invitations", 'String'>
    readonly host_one_name: FieldRef<"invitations", 'String'>
    readonly host_two_name: FieldRef<"invitations", 'String'>
    readonly host_one_nickname: FieldRef<"invitations", 'String'>
    readonly host_two_nickname: FieldRef<"invitations", 'String'>
    readonly host_one_additional_info: FieldRef<"invitations", 'String'>
    readonly host_two_additional_info: FieldRef<"invitations", 'String'>
    readonly host_one_social_media: FieldRef<"invitations", 'String'>
    readonly host_two_social_media: FieldRef<"invitations", 'String'>
    readonly event_date: FieldRef<"invitations", 'DateTime'>
    readonly event_type: FieldRef<"invitations", 'String'>
    readonly location: FieldRef<"invitations", 'String'>
    readonly location_url: FieldRef<"invitations", 'String'>
    readonly message: FieldRef<"invitations", 'String'>
    readonly hashtag: FieldRef<"invitations", 'String'>
    readonly is_active: FieldRef<"invitations", 'Boolean'>
    readonly activated_at: FieldRef<"invitations", 'DateTime'>
    readonly expired_at: FieldRef<"invitations", 'DateTime'>
    readonly created_at: FieldRef<"invitations", 'DateTime'>
    readonly updated_at: FieldRef<"invitations", 'DateTime'>
    readonly web_url: FieldRef<"invitations", 'String'>
    readonly message_template: FieldRef<"invitations", 'String'>
    readonly additional_info: FieldRef<"invitations", 'String'>
    readonly location_detail: FieldRef<"invitations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * invitations findUnique
   */
  export type invitationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    /**
     * Filter, which invitations to fetch.
     */
    where: invitationsWhereUniqueInput
  }

  /**
   * invitations findUniqueOrThrow
   */
  export type invitationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    /**
     * Filter, which invitations to fetch.
     */
    where: invitationsWhereUniqueInput
  }

  /**
   * invitations findFirst
   */
  export type invitationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    /**
     * Filter, which invitations to fetch.
     */
    where?: invitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invitations to fetch.
     */
    orderBy?: invitationsOrderByWithRelationInput | invitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invitations.
     */
    cursor?: invitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invitations.
     */
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * invitations findFirstOrThrow
   */
  export type invitationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    /**
     * Filter, which invitations to fetch.
     */
    where?: invitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invitations to fetch.
     */
    orderBy?: invitationsOrderByWithRelationInput | invitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invitations.
     */
    cursor?: invitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invitations.
     */
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * invitations findMany
   */
  export type invitationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    /**
     * Filter, which invitations to fetch.
     */
    where?: invitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invitations to fetch.
     */
    orderBy?: invitationsOrderByWithRelationInput | invitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invitations.
     */
    cursor?: invitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invitations.
     */
    skip?: number
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * invitations create
   */
  export type invitationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    /**
     * The data needed to create a invitations.
     */
    data?: XOR<invitationsCreateInput, invitationsUncheckedCreateInput>
  }

  /**
   * invitations createMany
   */
  export type invitationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invitations.
     */
    data: invitationsCreateManyInput | invitationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invitations createManyAndReturn
   */
  export type invitationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * The data used to create many invitations.
     */
    data: invitationsCreateManyInput | invitationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invitations update
   */
  export type invitationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    /**
     * The data needed to update a invitations.
     */
    data: XOR<invitationsUpdateInput, invitationsUncheckedUpdateInput>
    /**
     * Choose, which invitations to update.
     */
    where: invitationsWhereUniqueInput
  }

  /**
   * invitations updateMany
   */
  export type invitationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invitations.
     */
    data: XOR<invitationsUpdateManyMutationInput, invitationsUncheckedUpdateManyInput>
    /**
     * Filter which invitations to update
     */
    where?: invitationsWhereInput
    /**
     * Limit how many invitations to update.
     */
    limit?: number
  }

  /**
   * invitations updateManyAndReturn
   */
  export type invitationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * The data used to update invitations.
     */
    data: XOR<invitationsUpdateManyMutationInput, invitationsUncheckedUpdateManyInput>
    /**
     * Filter which invitations to update
     */
    where?: invitationsWhereInput
    /**
     * Limit how many invitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invitations upsert
   */
  export type invitationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    /**
     * The filter to search for the invitations to update in case it exists.
     */
    where: invitationsWhereUniqueInput
    /**
     * In case the invitations found by the `where` argument doesn't exist, create a new invitations with this data.
     */
    create: XOR<invitationsCreateInput, invitationsUncheckedCreateInput>
    /**
     * In case the invitations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invitationsUpdateInput, invitationsUncheckedUpdateInput>
  }

  /**
   * invitations delete
   */
  export type invitationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    /**
     * Filter which invitations to delete.
     */
    where: invitationsWhereUniqueInput
  }

  /**
   * invitations deleteMany
   */
  export type invitationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invitations to delete
     */
    where?: invitationsWhereInput
    /**
     * Limit how many invitations to delete.
     */
    limit?: number
  }

  /**
   * invitations.gift_infos
   */
  export type invitations$gift_infosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_infos
     */
    select?: gift_infosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_infos
     */
    omit?: gift_infosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_infosInclude<ExtArgs> | null
    where?: gift_infosWhereInput
    orderBy?: gift_infosOrderByWithRelationInput | gift_infosOrderByWithRelationInput[]
    cursor?: gift_infosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Gift_infosScalarFieldEnum | Gift_infosScalarFieldEnum[]
  }

  /**
   * invitations.guests
   */
  export type invitations$guestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guests
     */
    select?: guestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the guests
     */
    omit?: guestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: guestsInclude<ExtArgs> | null
    where?: guestsWhereInput
    orderBy?: guestsOrderByWithRelationInput | guestsOrderByWithRelationInput[]
    cursor?: guestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestsScalarFieldEnum | GuestsScalarFieldEnum[]
  }

  /**
   * invitations.images
   */
  export type invitations$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    where?: imagesWhereInput
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    cursor?: imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * invitations.music
   */
  export type invitations$musicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicInclude<ExtArgs> | null
    where?: musicWhereInput
  }

  /**
   * invitations.themes
   */
  export type invitations$themesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themesInclude<ExtArgs> | null
    where?: themesWhereInput
  }

  /**
   * invitations.users
   */
  export type invitations$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * invitations.rsvps
   */
  export type invitations$rsvpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsInclude<ExtArgs> | null
    where?: rsvpsWhereInput
    orderBy?: rsvpsOrderByWithRelationInput | rsvpsOrderByWithRelationInput[]
    cursor?: rsvpsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RsvpsScalarFieldEnum | RsvpsScalarFieldEnum[]
  }

  /**
   * invitations.rundowns
   */
  export type invitations$rundownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsInclude<ExtArgs> | null
    where?: rundownsWhereInput
    orderBy?: rundownsOrderByWithRelationInput | rundownsOrderByWithRelationInput[]
    cursor?: rundownsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RundownsScalarFieldEnum | RundownsScalarFieldEnum[]
  }

  /**
   * invitations.stories
   */
  export type invitations$storiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    where?: storiesWhereInput
    orderBy?: storiesOrderByWithRelationInput | storiesOrderByWithRelationInput[]
    cursor?: storiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoriesScalarFieldEnum | StoriesScalarFieldEnum[]
  }

  /**
   * invitations.videos
   */
  export type invitations$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    where?: videosWhereInput
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    cursor?: videosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * invitations without action
   */
  export type invitationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
  }


  /**
   * Model music
   */

  export type AggregateMusic = {
    _count: MusicCountAggregateOutputType | null
    _avg: MusicAvgAggregateOutputType | null
    _sum: MusicSumAggregateOutputType | null
    _min: MusicMinAggregateOutputType | null
    _max: MusicMaxAggregateOutputType | null
  }

  export type MusicAvgAggregateOutputType = {
    id: number | null
  }

  export type MusicSumAggregateOutputType = {
    id: number | null
  }

  export type MusicMinAggregateOutputType = {
    id: number | null
    title: string | null
    artist: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MusicMaxAggregateOutputType = {
    id: number | null
    title: string | null
    artist: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MusicCountAggregateOutputType = {
    id: number
    title: number
    artist: number
    url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MusicAvgAggregateInputType = {
    id?: true
  }

  export type MusicSumAggregateInputType = {
    id?: true
  }

  export type MusicMinAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type MusicMaxAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type MusicCountAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MusicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which music to aggregate.
     */
    where?: musicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of music to fetch.
     */
    orderBy?: musicOrderByWithRelationInput | musicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: musicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` music.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned music
    **/
    _count?: true | MusicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MusicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MusicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicMaxAggregateInputType
  }

  export type GetMusicAggregateType<T extends MusicAggregateArgs> = {
        [P in keyof T & keyof AggregateMusic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusic[P]>
      : GetScalarType<T[P], AggregateMusic[P]>
  }




  export type musicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: musicWhereInput
    orderBy?: musicOrderByWithAggregationInput | musicOrderByWithAggregationInput[]
    by: MusicScalarFieldEnum[] | MusicScalarFieldEnum
    having?: musicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicCountAggregateInputType | true
    _avg?: MusicAvgAggregateInputType
    _sum?: MusicSumAggregateInputType
    _min?: MusicMinAggregateInputType
    _max?: MusicMaxAggregateInputType
  }

  export type MusicGroupByOutputType = {
    id: number
    title: string | null
    artist: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: MusicCountAggregateOutputType | null
    _avg: MusicAvgAggregateOutputType | null
    _sum: MusicSumAggregateOutputType | null
    _min: MusicMinAggregateOutputType | null
    _max: MusicMaxAggregateOutputType | null
  }

  type GetMusicGroupByPayload<T extends musicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicGroupByOutputType[P]>
            : GetScalarType<T[P], MusicGroupByOutputType[P]>
        }
      >
    >


  export type musicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | music$invitationsArgs<ExtArgs>
    _count?: boolean | MusicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["music"]>

  export type musicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["music"]>

  export type musicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["music"]>

  export type musicSelectScalar = {
    id?: boolean
    title?: boolean
    artist?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type musicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "artist" | "url" | "created_at" | "updated_at", ExtArgs["result"]["music"]>
  export type musicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | music$invitationsArgs<ExtArgs>
    _count?: boolean | MusicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type musicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type musicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $musicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "music"
    objects: {
      invitations: Prisma.$invitationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      artist: string | null
      url: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["music"]>
    composites: {}
  }

  type musicGetPayload<S extends boolean | null | undefined | musicDefaultArgs> = $Result.GetResult<Prisma.$musicPayload, S>

  type musicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<musicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MusicCountAggregateInputType | true
    }

  export interface musicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['music'], meta: { name: 'music' } }
    /**
     * Find zero or one Music that matches the filter.
     * @param {musicFindUniqueArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends musicFindUniqueArgs>(args: SelectSubset<T, musicFindUniqueArgs<ExtArgs>>): Prisma__musicClient<$Result.GetResult<Prisma.$musicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Music that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {musicFindUniqueOrThrowArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends musicFindUniqueOrThrowArgs>(args: SelectSubset<T, musicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__musicClient<$Result.GetResult<Prisma.$musicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Music that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicFindFirstArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends musicFindFirstArgs>(args?: SelectSubset<T, musicFindFirstArgs<ExtArgs>>): Prisma__musicClient<$Result.GetResult<Prisma.$musicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Music that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicFindFirstOrThrowArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends musicFindFirstOrThrowArgs>(args?: SelectSubset<T, musicFindFirstOrThrowArgs<ExtArgs>>): Prisma__musicClient<$Result.GetResult<Prisma.$musicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Music that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Music
     * const music = await prisma.music.findMany()
     * 
     * // Get first 10 Music
     * const music = await prisma.music.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicWithIdOnly = await prisma.music.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends musicFindManyArgs>(args?: SelectSubset<T, musicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$musicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Music.
     * @param {musicCreateArgs} args - Arguments to create a Music.
     * @example
     * // Create one Music
     * const Music = await prisma.music.create({
     *   data: {
     *     // ... data to create a Music
     *   }
     * })
     * 
     */
    create<T extends musicCreateArgs>(args: SelectSubset<T, musicCreateArgs<ExtArgs>>): Prisma__musicClient<$Result.GetResult<Prisma.$musicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Music.
     * @param {musicCreateManyArgs} args - Arguments to create many Music.
     * @example
     * // Create many Music
     * const music = await prisma.music.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends musicCreateManyArgs>(args?: SelectSubset<T, musicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Music and returns the data saved in the database.
     * @param {musicCreateManyAndReturnArgs} args - Arguments to create many Music.
     * @example
     * // Create many Music
     * const music = await prisma.music.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Music and only return the `id`
     * const musicWithIdOnly = await prisma.music.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends musicCreateManyAndReturnArgs>(args?: SelectSubset<T, musicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$musicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Music.
     * @param {musicDeleteArgs} args - Arguments to delete one Music.
     * @example
     * // Delete one Music
     * const Music = await prisma.music.delete({
     *   where: {
     *     // ... filter to delete one Music
     *   }
     * })
     * 
     */
    delete<T extends musicDeleteArgs>(args: SelectSubset<T, musicDeleteArgs<ExtArgs>>): Prisma__musicClient<$Result.GetResult<Prisma.$musicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Music.
     * @param {musicUpdateArgs} args - Arguments to update one Music.
     * @example
     * // Update one Music
     * const music = await prisma.music.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends musicUpdateArgs>(args: SelectSubset<T, musicUpdateArgs<ExtArgs>>): Prisma__musicClient<$Result.GetResult<Prisma.$musicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Music.
     * @param {musicDeleteManyArgs} args - Arguments to filter Music to delete.
     * @example
     * // Delete a few Music
     * const { count } = await prisma.music.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends musicDeleteManyArgs>(args?: SelectSubset<T, musicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Music
     * const music = await prisma.music.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends musicUpdateManyArgs>(args: SelectSubset<T, musicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Music and returns the data updated in the database.
     * @param {musicUpdateManyAndReturnArgs} args - Arguments to update many Music.
     * @example
     * // Update many Music
     * const music = await prisma.music.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Music and only return the `id`
     * const musicWithIdOnly = await prisma.music.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends musicUpdateManyAndReturnArgs>(args: SelectSubset<T, musicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$musicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Music.
     * @param {musicUpsertArgs} args - Arguments to update or create a Music.
     * @example
     * // Update or create a Music
     * const music = await prisma.music.upsert({
     *   create: {
     *     // ... data to create a Music
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Music we want to update
     *   }
     * })
     */
    upsert<T extends musicUpsertArgs>(args: SelectSubset<T, musicUpsertArgs<ExtArgs>>): Prisma__musicClient<$Result.GetResult<Prisma.$musicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicCountArgs} args - Arguments to filter Music to count.
     * @example
     * // Count the number of Music
     * const count = await prisma.music.count({
     *   where: {
     *     // ... the filter for the Music we want to count
     *   }
     * })
    **/
    count<T extends musicCountArgs>(
      args?: Subset<T, musicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MusicAggregateArgs>(args: Subset<T, MusicAggregateArgs>): Prisma.PrismaPromise<GetMusicAggregateType<T>>

    /**
     * Group by Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends musicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: musicGroupByArgs['orderBy'] }
        : { orderBy?: musicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, musicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the music model
   */
  readonly fields: musicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for music.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__musicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitations<T extends music$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, music$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the music model
   */
  interface musicFieldRefs {
    readonly id: FieldRef<"music", 'Int'>
    readonly title: FieldRef<"music", 'String'>
    readonly artist: FieldRef<"music", 'String'>
    readonly url: FieldRef<"music", 'String'>
    readonly created_at: FieldRef<"music", 'DateTime'>
    readonly updated_at: FieldRef<"music", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * music findUnique
   */
  export type musicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicInclude<ExtArgs> | null
    /**
     * Filter, which music to fetch.
     */
    where: musicWhereUniqueInput
  }

  /**
   * music findUniqueOrThrow
   */
  export type musicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicInclude<ExtArgs> | null
    /**
     * Filter, which music to fetch.
     */
    where: musicWhereUniqueInput
  }

  /**
   * music findFirst
   */
  export type musicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicInclude<ExtArgs> | null
    /**
     * Filter, which music to fetch.
     */
    where?: musicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of music to fetch.
     */
    orderBy?: musicOrderByWithRelationInput | musicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for music.
     */
    cursor?: musicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` music.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of music.
     */
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * music findFirstOrThrow
   */
  export type musicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicInclude<ExtArgs> | null
    /**
     * Filter, which music to fetch.
     */
    where?: musicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of music to fetch.
     */
    orderBy?: musicOrderByWithRelationInput | musicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for music.
     */
    cursor?: musicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` music.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of music.
     */
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * music findMany
   */
  export type musicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicInclude<ExtArgs> | null
    /**
     * Filter, which music to fetch.
     */
    where?: musicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of music to fetch.
     */
    orderBy?: musicOrderByWithRelationInput | musicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing music.
     */
    cursor?: musicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` music.
     */
    skip?: number
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * music create
   */
  export type musicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicInclude<ExtArgs> | null
    /**
     * The data needed to create a music.
     */
    data?: XOR<musicCreateInput, musicUncheckedCreateInput>
  }

  /**
   * music createMany
   */
  export type musicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many music.
     */
    data: musicCreateManyInput | musicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * music createManyAndReturn
   */
  export type musicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * The data used to create many music.
     */
    data: musicCreateManyInput | musicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * music update
   */
  export type musicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicInclude<ExtArgs> | null
    /**
     * The data needed to update a music.
     */
    data: XOR<musicUpdateInput, musicUncheckedUpdateInput>
    /**
     * Choose, which music to update.
     */
    where: musicWhereUniqueInput
  }

  /**
   * music updateMany
   */
  export type musicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update music.
     */
    data: XOR<musicUpdateManyMutationInput, musicUncheckedUpdateManyInput>
    /**
     * Filter which music to update
     */
    where?: musicWhereInput
    /**
     * Limit how many music to update.
     */
    limit?: number
  }

  /**
   * music updateManyAndReturn
   */
  export type musicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * The data used to update music.
     */
    data: XOR<musicUpdateManyMutationInput, musicUncheckedUpdateManyInput>
    /**
     * Filter which music to update
     */
    where?: musicWhereInput
    /**
     * Limit how many music to update.
     */
    limit?: number
  }

  /**
   * music upsert
   */
  export type musicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicInclude<ExtArgs> | null
    /**
     * The filter to search for the music to update in case it exists.
     */
    where: musicWhereUniqueInput
    /**
     * In case the music found by the `where` argument doesn't exist, create a new music with this data.
     */
    create: XOR<musicCreateInput, musicUncheckedCreateInput>
    /**
     * In case the music was found with the provided `where` argument, update it with this data.
     */
    update: XOR<musicUpdateInput, musicUncheckedUpdateInput>
  }

  /**
   * music delete
   */
  export type musicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicInclude<ExtArgs> | null
    /**
     * Filter which music to delete.
     */
    where: musicWhereUniqueInput
  }

  /**
   * music deleteMany
   */
  export type musicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which music to delete
     */
    where?: musicWhereInput
    /**
     * Limit how many music to delete.
     */
    limit?: number
  }

  /**
   * music.invitations
   */
  export type music$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    where?: invitationsWhereInput
    orderBy?: invitationsOrderByWithRelationInput | invitationsOrderByWithRelationInput[]
    cursor?: invitationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * music without action
   */
  export type musicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the music
     */
    select?: musicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the music
     */
    omit?: musicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: musicInclude<ExtArgs> | null
  }


  /**
   * Model rsvps
   */

  export type AggregateRsvps = {
    _count: RsvpsCountAggregateOutputType | null
    _avg: RsvpsAvgAggregateOutputType | null
    _sum: RsvpsSumAggregateOutputType | null
    _min: RsvpsMinAggregateOutputType | null
    _max: RsvpsMaxAggregateOutputType | null
  }

  export type RsvpsAvgAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    total_guest: number | null
  }

  export type RsvpsSumAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    total_guest: number | null
  }

  export type RsvpsMinAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    guest_name: string | null
    message: string | null
    attendance_status: boolean | null
    total_guest: number | null
    created_at: Date | null
    updated_at: Date | null
    icon_color: string | null
  }

  export type RsvpsMaxAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    guest_name: string | null
    message: string | null
    attendance_status: boolean | null
    total_guest: number | null
    created_at: Date | null
    updated_at: Date | null
    icon_color: string | null
  }

  export type RsvpsCountAggregateOutputType = {
    id: number
    invitation_id: number
    guest_name: number
    message: number
    attendance_status: number
    total_guest: number
    created_at: number
    updated_at: number
    icon_color: number
    _all: number
  }


  export type RsvpsAvgAggregateInputType = {
    id?: true
    invitation_id?: true
    total_guest?: true
  }

  export type RsvpsSumAggregateInputType = {
    id?: true
    invitation_id?: true
    total_guest?: true
  }

  export type RsvpsMinAggregateInputType = {
    id?: true
    invitation_id?: true
    guest_name?: true
    message?: true
    attendance_status?: true
    total_guest?: true
    created_at?: true
    updated_at?: true
    icon_color?: true
  }

  export type RsvpsMaxAggregateInputType = {
    id?: true
    invitation_id?: true
    guest_name?: true
    message?: true
    attendance_status?: true
    total_guest?: true
    created_at?: true
    updated_at?: true
    icon_color?: true
  }

  export type RsvpsCountAggregateInputType = {
    id?: true
    invitation_id?: true
    guest_name?: true
    message?: true
    attendance_status?: true
    total_guest?: true
    created_at?: true
    updated_at?: true
    icon_color?: true
    _all?: true
  }

  export type RsvpsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rsvps to aggregate.
     */
    where?: rsvpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rsvps to fetch.
     */
    orderBy?: rsvpsOrderByWithRelationInput | rsvpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rsvpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rsvps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rsvps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rsvps
    **/
    _count?: true | RsvpsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RsvpsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RsvpsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RsvpsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RsvpsMaxAggregateInputType
  }

  export type GetRsvpsAggregateType<T extends RsvpsAggregateArgs> = {
        [P in keyof T & keyof AggregateRsvps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRsvps[P]>
      : GetScalarType<T[P], AggregateRsvps[P]>
  }




  export type rsvpsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rsvpsWhereInput
    orderBy?: rsvpsOrderByWithAggregationInput | rsvpsOrderByWithAggregationInput[]
    by: RsvpsScalarFieldEnum[] | RsvpsScalarFieldEnum
    having?: rsvpsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RsvpsCountAggregateInputType | true
    _avg?: RsvpsAvgAggregateInputType
    _sum?: RsvpsSumAggregateInputType
    _min?: RsvpsMinAggregateInputType
    _max?: RsvpsMaxAggregateInputType
  }

  export type RsvpsGroupByOutputType = {
    id: number
    invitation_id: number | null
    guest_name: string | null
    message: string | null
    attendance_status: boolean | null
    total_guest: number | null
    created_at: Date | null
    updated_at: Date | null
    icon_color: string | null
    _count: RsvpsCountAggregateOutputType | null
    _avg: RsvpsAvgAggregateOutputType | null
    _sum: RsvpsSumAggregateOutputType | null
    _min: RsvpsMinAggregateOutputType | null
    _max: RsvpsMaxAggregateOutputType | null
  }

  type GetRsvpsGroupByPayload<T extends rsvpsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RsvpsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RsvpsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RsvpsGroupByOutputType[P]>
            : GetScalarType<T[P], RsvpsGroupByOutputType[P]>
        }
      >
    >


  export type rsvpsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    guest_name?: boolean
    message?: boolean
    attendance_status?: boolean
    total_guest?: boolean
    created_at?: boolean
    updated_at?: boolean
    icon_color?: boolean
    invitations?: boolean | rsvps$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["rsvps"]>

  export type rsvpsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    guest_name?: boolean
    message?: boolean
    attendance_status?: boolean
    total_guest?: boolean
    created_at?: boolean
    updated_at?: boolean
    icon_color?: boolean
    invitations?: boolean | rsvps$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["rsvps"]>

  export type rsvpsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    guest_name?: boolean
    message?: boolean
    attendance_status?: boolean
    total_guest?: boolean
    created_at?: boolean
    updated_at?: boolean
    icon_color?: boolean
    invitations?: boolean | rsvps$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["rsvps"]>

  export type rsvpsSelectScalar = {
    id?: boolean
    invitation_id?: boolean
    guest_name?: boolean
    message?: boolean
    attendance_status?: boolean
    total_guest?: boolean
    created_at?: boolean
    updated_at?: boolean
    icon_color?: boolean
  }

  export type rsvpsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invitation_id" | "guest_name" | "message" | "attendance_status" | "total_guest" | "created_at" | "updated_at" | "icon_color", ExtArgs["result"]["rsvps"]>
  export type rsvpsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | rsvps$invitationsArgs<ExtArgs>
  }
  export type rsvpsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | rsvps$invitationsArgs<ExtArgs>
  }
  export type rsvpsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | rsvps$invitationsArgs<ExtArgs>
  }

  export type $rsvpsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rsvps"
    objects: {
      invitations: Prisma.$invitationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invitation_id: number | null
      guest_name: string | null
      message: string | null
      attendance_status: boolean | null
      total_guest: number | null
      created_at: Date | null
      updated_at: Date | null
      icon_color: string | null
    }, ExtArgs["result"]["rsvps"]>
    composites: {}
  }

  type rsvpsGetPayload<S extends boolean | null | undefined | rsvpsDefaultArgs> = $Result.GetResult<Prisma.$rsvpsPayload, S>

  type rsvpsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rsvpsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RsvpsCountAggregateInputType | true
    }

  export interface rsvpsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rsvps'], meta: { name: 'rsvps' } }
    /**
     * Find zero or one Rsvps that matches the filter.
     * @param {rsvpsFindUniqueArgs} args - Arguments to find a Rsvps
     * @example
     * // Get one Rsvps
     * const rsvps = await prisma.rsvps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rsvpsFindUniqueArgs>(args: SelectSubset<T, rsvpsFindUniqueArgs<ExtArgs>>): Prisma__rsvpsClient<$Result.GetResult<Prisma.$rsvpsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rsvps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rsvpsFindUniqueOrThrowArgs} args - Arguments to find a Rsvps
     * @example
     * // Get one Rsvps
     * const rsvps = await prisma.rsvps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rsvpsFindUniqueOrThrowArgs>(args: SelectSubset<T, rsvpsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rsvpsClient<$Result.GetResult<Prisma.$rsvpsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rsvps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rsvpsFindFirstArgs} args - Arguments to find a Rsvps
     * @example
     * // Get one Rsvps
     * const rsvps = await prisma.rsvps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rsvpsFindFirstArgs>(args?: SelectSubset<T, rsvpsFindFirstArgs<ExtArgs>>): Prisma__rsvpsClient<$Result.GetResult<Prisma.$rsvpsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rsvps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rsvpsFindFirstOrThrowArgs} args - Arguments to find a Rsvps
     * @example
     * // Get one Rsvps
     * const rsvps = await prisma.rsvps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rsvpsFindFirstOrThrowArgs>(args?: SelectSubset<T, rsvpsFindFirstOrThrowArgs<ExtArgs>>): Prisma__rsvpsClient<$Result.GetResult<Prisma.$rsvpsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rsvps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rsvpsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rsvps
     * const rsvps = await prisma.rsvps.findMany()
     * 
     * // Get first 10 Rsvps
     * const rsvps = await prisma.rsvps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rsvpsWithIdOnly = await prisma.rsvps.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rsvpsFindManyArgs>(args?: SelectSubset<T, rsvpsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rsvpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rsvps.
     * @param {rsvpsCreateArgs} args - Arguments to create a Rsvps.
     * @example
     * // Create one Rsvps
     * const Rsvps = await prisma.rsvps.create({
     *   data: {
     *     // ... data to create a Rsvps
     *   }
     * })
     * 
     */
    create<T extends rsvpsCreateArgs>(args: SelectSubset<T, rsvpsCreateArgs<ExtArgs>>): Prisma__rsvpsClient<$Result.GetResult<Prisma.$rsvpsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rsvps.
     * @param {rsvpsCreateManyArgs} args - Arguments to create many Rsvps.
     * @example
     * // Create many Rsvps
     * const rsvps = await prisma.rsvps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rsvpsCreateManyArgs>(args?: SelectSubset<T, rsvpsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rsvps and returns the data saved in the database.
     * @param {rsvpsCreateManyAndReturnArgs} args - Arguments to create many Rsvps.
     * @example
     * // Create many Rsvps
     * const rsvps = await prisma.rsvps.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rsvps and only return the `id`
     * const rsvpsWithIdOnly = await prisma.rsvps.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rsvpsCreateManyAndReturnArgs>(args?: SelectSubset<T, rsvpsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rsvpsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rsvps.
     * @param {rsvpsDeleteArgs} args - Arguments to delete one Rsvps.
     * @example
     * // Delete one Rsvps
     * const Rsvps = await prisma.rsvps.delete({
     *   where: {
     *     // ... filter to delete one Rsvps
     *   }
     * })
     * 
     */
    delete<T extends rsvpsDeleteArgs>(args: SelectSubset<T, rsvpsDeleteArgs<ExtArgs>>): Prisma__rsvpsClient<$Result.GetResult<Prisma.$rsvpsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rsvps.
     * @param {rsvpsUpdateArgs} args - Arguments to update one Rsvps.
     * @example
     * // Update one Rsvps
     * const rsvps = await prisma.rsvps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rsvpsUpdateArgs>(args: SelectSubset<T, rsvpsUpdateArgs<ExtArgs>>): Prisma__rsvpsClient<$Result.GetResult<Prisma.$rsvpsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rsvps.
     * @param {rsvpsDeleteManyArgs} args - Arguments to filter Rsvps to delete.
     * @example
     * // Delete a few Rsvps
     * const { count } = await prisma.rsvps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rsvpsDeleteManyArgs>(args?: SelectSubset<T, rsvpsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rsvps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rsvpsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rsvps
     * const rsvps = await prisma.rsvps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rsvpsUpdateManyArgs>(args: SelectSubset<T, rsvpsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rsvps and returns the data updated in the database.
     * @param {rsvpsUpdateManyAndReturnArgs} args - Arguments to update many Rsvps.
     * @example
     * // Update many Rsvps
     * const rsvps = await prisma.rsvps.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rsvps and only return the `id`
     * const rsvpsWithIdOnly = await prisma.rsvps.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rsvpsUpdateManyAndReturnArgs>(args: SelectSubset<T, rsvpsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rsvpsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rsvps.
     * @param {rsvpsUpsertArgs} args - Arguments to update or create a Rsvps.
     * @example
     * // Update or create a Rsvps
     * const rsvps = await prisma.rsvps.upsert({
     *   create: {
     *     // ... data to create a Rsvps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rsvps we want to update
     *   }
     * })
     */
    upsert<T extends rsvpsUpsertArgs>(args: SelectSubset<T, rsvpsUpsertArgs<ExtArgs>>): Prisma__rsvpsClient<$Result.GetResult<Prisma.$rsvpsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rsvps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rsvpsCountArgs} args - Arguments to filter Rsvps to count.
     * @example
     * // Count the number of Rsvps
     * const count = await prisma.rsvps.count({
     *   where: {
     *     // ... the filter for the Rsvps we want to count
     *   }
     * })
    **/
    count<T extends rsvpsCountArgs>(
      args?: Subset<T, rsvpsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RsvpsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rsvps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RsvpsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RsvpsAggregateArgs>(args: Subset<T, RsvpsAggregateArgs>): Prisma.PrismaPromise<GetRsvpsAggregateType<T>>

    /**
     * Group by Rsvps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rsvpsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rsvpsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rsvpsGroupByArgs['orderBy'] }
        : { orderBy?: rsvpsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rsvpsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRsvpsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rsvps model
   */
  readonly fields: rsvpsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rsvps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rsvpsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitations<T extends rsvps$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, rsvps$invitationsArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rsvps model
   */
  interface rsvpsFieldRefs {
    readonly id: FieldRef<"rsvps", 'Int'>
    readonly invitation_id: FieldRef<"rsvps", 'Int'>
    readonly guest_name: FieldRef<"rsvps", 'String'>
    readonly message: FieldRef<"rsvps", 'String'>
    readonly attendance_status: FieldRef<"rsvps", 'Boolean'>
    readonly total_guest: FieldRef<"rsvps", 'Int'>
    readonly created_at: FieldRef<"rsvps", 'DateTime'>
    readonly updated_at: FieldRef<"rsvps", 'DateTime'>
    readonly icon_color: FieldRef<"rsvps", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rsvps findUnique
   */
  export type rsvpsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsInclude<ExtArgs> | null
    /**
     * Filter, which rsvps to fetch.
     */
    where: rsvpsWhereUniqueInput
  }

  /**
   * rsvps findUniqueOrThrow
   */
  export type rsvpsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsInclude<ExtArgs> | null
    /**
     * Filter, which rsvps to fetch.
     */
    where: rsvpsWhereUniqueInput
  }

  /**
   * rsvps findFirst
   */
  export type rsvpsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsInclude<ExtArgs> | null
    /**
     * Filter, which rsvps to fetch.
     */
    where?: rsvpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rsvps to fetch.
     */
    orderBy?: rsvpsOrderByWithRelationInput | rsvpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rsvps.
     */
    cursor?: rsvpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rsvps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rsvps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rsvps.
     */
    distinct?: RsvpsScalarFieldEnum | RsvpsScalarFieldEnum[]
  }

  /**
   * rsvps findFirstOrThrow
   */
  export type rsvpsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsInclude<ExtArgs> | null
    /**
     * Filter, which rsvps to fetch.
     */
    where?: rsvpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rsvps to fetch.
     */
    orderBy?: rsvpsOrderByWithRelationInput | rsvpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rsvps.
     */
    cursor?: rsvpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rsvps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rsvps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rsvps.
     */
    distinct?: RsvpsScalarFieldEnum | RsvpsScalarFieldEnum[]
  }

  /**
   * rsvps findMany
   */
  export type rsvpsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsInclude<ExtArgs> | null
    /**
     * Filter, which rsvps to fetch.
     */
    where?: rsvpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rsvps to fetch.
     */
    orderBy?: rsvpsOrderByWithRelationInput | rsvpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rsvps.
     */
    cursor?: rsvpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rsvps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rsvps.
     */
    skip?: number
    distinct?: RsvpsScalarFieldEnum | RsvpsScalarFieldEnum[]
  }

  /**
   * rsvps create
   */
  export type rsvpsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsInclude<ExtArgs> | null
    /**
     * The data needed to create a rsvps.
     */
    data?: XOR<rsvpsCreateInput, rsvpsUncheckedCreateInput>
  }

  /**
   * rsvps createMany
   */
  export type rsvpsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rsvps.
     */
    data: rsvpsCreateManyInput | rsvpsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rsvps createManyAndReturn
   */
  export type rsvpsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * The data used to create many rsvps.
     */
    data: rsvpsCreateManyInput | rsvpsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rsvps update
   */
  export type rsvpsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsInclude<ExtArgs> | null
    /**
     * The data needed to update a rsvps.
     */
    data: XOR<rsvpsUpdateInput, rsvpsUncheckedUpdateInput>
    /**
     * Choose, which rsvps to update.
     */
    where: rsvpsWhereUniqueInput
  }

  /**
   * rsvps updateMany
   */
  export type rsvpsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rsvps.
     */
    data: XOR<rsvpsUpdateManyMutationInput, rsvpsUncheckedUpdateManyInput>
    /**
     * Filter which rsvps to update
     */
    where?: rsvpsWhereInput
    /**
     * Limit how many rsvps to update.
     */
    limit?: number
  }

  /**
   * rsvps updateManyAndReturn
   */
  export type rsvpsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * The data used to update rsvps.
     */
    data: XOR<rsvpsUpdateManyMutationInput, rsvpsUncheckedUpdateManyInput>
    /**
     * Filter which rsvps to update
     */
    where?: rsvpsWhereInput
    /**
     * Limit how many rsvps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rsvps upsert
   */
  export type rsvpsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsInclude<ExtArgs> | null
    /**
     * The filter to search for the rsvps to update in case it exists.
     */
    where: rsvpsWhereUniqueInput
    /**
     * In case the rsvps found by the `where` argument doesn't exist, create a new rsvps with this data.
     */
    create: XOR<rsvpsCreateInput, rsvpsUncheckedCreateInput>
    /**
     * In case the rsvps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rsvpsUpdateInput, rsvpsUncheckedUpdateInput>
  }

  /**
   * rsvps delete
   */
  export type rsvpsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsInclude<ExtArgs> | null
    /**
     * Filter which rsvps to delete.
     */
    where: rsvpsWhereUniqueInput
  }

  /**
   * rsvps deleteMany
   */
  export type rsvpsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rsvps to delete
     */
    where?: rsvpsWhereInput
    /**
     * Limit how many rsvps to delete.
     */
    limit?: number
  }

  /**
   * rsvps.invitations
   */
  export type rsvps$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    where?: invitationsWhereInput
  }

  /**
   * rsvps without action
   */
  export type rsvpsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rsvps
     */
    select?: rsvpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rsvps
     */
    omit?: rsvpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rsvpsInclude<ExtArgs> | null
  }


  /**
   * Model rundowns
   */

  export type AggregateRundowns = {
    _count: RundownsCountAggregateOutputType | null
    _avg: RundownsAvgAggregateOutputType | null
    _sum: RundownsSumAggregateOutputType | null
    _min: RundownsMinAggregateOutputType | null
    _max: RundownsMaxAggregateOutputType | null
  }

  export type RundownsAvgAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    order_number: number | null
  }

  export type RundownsSumAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    order_number: number | null
  }

  export type RundownsMinAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    title: string | null
    location: string | null
    location_url: string | null
    date: Date | null
    start_time: Date | null
    end_time: Date | null
    time_zone: string | null
    description: string | null
    image_url: string | null
    order_number: number | null
    created_at: Date | null
    updated_at: Date | null
    location_detail: string | null
  }

  export type RundownsMaxAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    title: string | null
    location: string | null
    location_url: string | null
    date: Date | null
    start_time: Date | null
    end_time: Date | null
    time_zone: string | null
    description: string | null
    image_url: string | null
    order_number: number | null
    created_at: Date | null
    updated_at: Date | null
    location_detail: string | null
  }

  export type RundownsCountAggregateOutputType = {
    id: number
    invitation_id: number
    title: number
    location: number
    location_url: number
    date: number
    start_time: number
    end_time: number
    time_zone: number
    description: number
    image_url: number
    order_number: number
    created_at: number
    updated_at: number
    location_detail: number
    _all: number
  }


  export type RundownsAvgAggregateInputType = {
    id?: true
    invitation_id?: true
    order_number?: true
  }

  export type RundownsSumAggregateInputType = {
    id?: true
    invitation_id?: true
    order_number?: true
  }

  export type RundownsMinAggregateInputType = {
    id?: true
    invitation_id?: true
    title?: true
    location?: true
    location_url?: true
    date?: true
    start_time?: true
    end_time?: true
    time_zone?: true
    description?: true
    image_url?: true
    order_number?: true
    created_at?: true
    updated_at?: true
    location_detail?: true
  }

  export type RundownsMaxAggregateInputType = {
    id?: true
    invitation_id?: true
    title?: true
    location?: true
    location_url?: true
    date?: true
    start_time?: true
    end_time?: true
    time_zone?: true
    description?: true
    image_url?: true
    order_number?: true
    created_at?: true
    updated_at?: true
    location_detail?: true
  }

  export type RundownsCountAggregateInputType = {
    id?: true
    invitation_id?: true
    title?: true
    location?: true
    location_url?: true
    date?: true
    start_time?: true
    end_time?: true
    time_zone?: true
    description?: true
    image_url?: true
    order_number?: true
    created_at?: true
    updated_at?: true
    location_detail?: true
    _all?: true
  }

  export type RundownsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rundowns to aggregate.
     */
    where?: rundownsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rundowns to fetch.
     */
    orderBy?: rundownsOrderByWithRelationInput | rundownsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rundownsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rundowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rundowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rundowns
    **/
    _count?: true | RundownsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RundownsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RundownsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RundownsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RundownsMaxAggregateInputType
  }

  export type GetRundownsAggregateType<T extends RundownsAggregateArgs> = {
        [P in keyof T & keyof AggregateRundowns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRundowns[P]>
      : GetScalarType<T[P], AggregateRundowns[P]>
  }




  export type rundownsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rundownsWhereInput
    orderBy?: rundownsOrderByWithAggregationInput | rundownsOrderByWithAggregationInput[]
    by: RundownsScalarFieldEnum[] | RundownsScalarFieldEnum
    having?: rundownsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RundownsCountAggregateInputType | true
    _avg?: RundownsAvgAggregateInputType
    _sum?: RundownsSumAggregateInputType
    _min?: RundownsMinAggregateInputType
    _max?: RundownsMaxAggregateInputType
  }

  export type RundownsGroupByOutputType = {
    id: number
    invitation_id: number | null
    title: string | null
    location: string | null
    location_url: string | null
    date: Date | null
    start_time: Date | null
    end_time: Date | null
    time_zone: string | null
    description: string | null
    image_url: string | null
    order_number: number | null
    created_at: Date | null
    updated_at: Date | null
    location_detail: string | null
    _count: RundownsCountAggregateOutputType | null
    _avg: RundownsAvgAggregateOutputType | null
    _sum: RundownsSumAggregateOutputType | null
    _min: RundownsMinAggregateOutputType | null
    _max: RundownsMaxAggregateOutputType | null
  }

  type GetRundownsGroupByPayload<T extends rundownsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RundownsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RundownsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RundownsGroupByOutputType[P]>
            : GetScalarType<T[P], RundownsGroupByOutputType[P]>
        }
      >
    >


  export type rundownsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    title?: boolean
    location?: boolean
    location_url?: boolean
    date?: boolean
    start_time?: boolean
    end_time?: boolean
    time_zone?: boolean
    description?: boolean
    image_url?: boolean
    order_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    location_detail?: boolean
    invitations?: boolean | rundowns$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["rundowns"]>

  export type rundownsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    title?: boolean
    location?: boolean
    location_url?: boolean
    date?: boolean
    start_time?: boolean
    end_time?: boolean
    time_zone?: boolean
    description?: boolean
    image_url?: boolean
    order_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    location_detail?: boolean
    invitations?: boolean | rundowns$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["rundowns"]>

  export type rundownsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    title?: boolean
    location?: boolean
    location_url?: boolean
    date?: boolean
    start_time?: boolean
    end_time?: boolean
    time_zone?: boolean
    description?: boolean
    image_url?: boolean
    order_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    location_detail?: boolean
    invitations?: boolean | rundowns$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["rundowns"]>

  export type rundownsSelectScalar = {
    id?: boolean
    invitation_id?: boolean
    title?: boolean
    location?: boolean
    location_url?: boolean
    date?: boolean
    start_time?: boolean
    end_time?: boolean
    time_zone?: boolean
    description?: boolean
    image_url?: boolean
    order_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    location_detail?: boolean
  }

  export type rundownsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invitation_id" | "title" | "location" | "location_url" | "date" | "start_time" | "end_time" | "time_zone" | "description" | "image_url" | "order_number" | "created_at" | "updated_at" | "location_detail", ExtArgs["result"]["rundowns"]>
  export type rundownsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | rundowns$invitationsArgs<ExtArgs>
  }
  export type rundownsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | rundowns$invitationsArgs<ExtArgs>
  }
  export type rundownsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | rundowns$invitationsArgs<ExtArgs>
  }

  export type $rundownsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rundowns"
    objects: {
      invitations: Prisma.$invitationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invitation_id: number | null
      title: string | null
      location: string | null
      location_url: string | null
      date: Date | null
      start_time: Date | null
      end_time: Date | null
      time_zone: string | null
      description: string | null
      image_url: string | null
      order_number: number | null
      created_at: Date | null
      updated_at: Date | null
      location_detail: string | null
    }, ExtArgs["result"]["rundowns"]>
    composites: {}
  }

  type rundownsGetPayload<S extends boolean | null | undefined | rundownsDefaultArgs> = $Result.GetResult<Prisma.$rundownsPayload, S>

  type rundownsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rundownsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RundownsCountAggregateInputType | true
    }

  export interface rundownsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rundowns'], meta: { name: 'rundowns' } }
    /**
     * Find zero or one Rundowns that matches the filter.
     * @param {rundownsFindUniqueArgs} args - Arguments to find a Rundowns
     * @example
     * // Get one Rundowns
     * const rundowns = await prisma.rundowns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rundownsFindUniqueArgs>(args: SelectSubset<T, rundownsFindUniqueArgs<ExtArgs>>): Prisma__rundownsClient<$Result.GetResult<Prisma.$rundownsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rundowns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rundownsFindUniqueOrThrowArgs} args - Arguments to find a Rundowns
     * @example
     * // Get one Rundowns
     * const rundowns = await prisma.rundowns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rundownsFindUniqueOrThrowArgs>(args: SelectSubset<T, rundownsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rundownsClient<$Result.GetResult<Prisma.$rundownsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rundowns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rundownsFindFirstArgs} args - Arguments to find a Rundowns
     * @example
     * // Get one Rundowns
     * const rundowns = await prisma.rundowns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rundownsFindFirstArgs>(args?: SelectSubset<T, rundownsFindFirstArgs<ExtArgs>>): Prisma__rundownsClient<$Result.GetResult<Prisma.$rundownsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rundowns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rundownsFindFirstOrThrowArgs} args - Arguments to find a Rundowns
     * @example
     * // Get one Rundowns
     * const rundowns = await prisma.rundowns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rundownsFindFirstOrThrowArgs>(args?: SelectSubset<T, rundownsFindFirstOrThrowArgs<ExtArgs>>): Prisma__rundownsClient<$Result.GetResult<Prisma.$rundownsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rundowns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rundownsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rundowns
     * const rundowns = await prisma.rundowns.findMany()
     * 
     * // Get first 10 Rundowns
     * const rundowns = await prisma.rundowns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rundownsWithIdOnly = await prisma.rundowns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rundownsFindManyArgs>(args?: SelectSubset<T, rundownsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rundownsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rundowns.
     * @param {rundownsCreateArgs} args - Arguments to create a Rundowns.
     * @example
     * // Create one Rundowns
     * const Rundowns = await prisma.rundowns.create({
     *   data: {
     *     // ... data to create a Rundowns
     *   }
     * })
     * 
     */
    create<T extends rundownsCreateArgs>(args: SelectSubset<T, rundownsCreateArgs<ExtArgs>>): Prisma__rundownsClient<$Result.GetResult<Prisma.$rundownsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rundowns.
     * @param {rundownsCreateManyArgs} args - Arguments to create many Rundowns.
     * @example
     * // Create many Rundowns
     * const rundowns = await prisma.rundowns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rundownsCreateManyArgs>(args?: SelectSubset<T, rundownsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rundowns and returns the data saved in the database.
     * @param {rundownsCreateManyAndReturnArgs} args - Arguments to create many Rundowns.
     * @example
     * // Create many Rundowns
     * const rundowns = await prisma.rundowns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rundowns and only return the `id`
     * const rundownsWithIdOnly = await prisma.rundowns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rundownsCreateManyAndReturnArgs>(args?: SelectSubset<T, rundownsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rundownsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rundowns.
     * @param {rundownsDeleteArgs} args - Arguments to delete one Rundowns.
     * @example
     * // Delete one Rundowns
     * const Rundowns = await prisma.rundowns.delete({
     *   where: {
     *     // ... filter to delete one Rundowns
     *   }
     * })
     * 
     */
    delete<T extends rundownsDeleteArgs>(args: SelectSubset<T, rundownsDeleteArgs<ExtArgs>>): Prisma__rundownsClient<$Result.GetResult<Prisma.$rundownsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rundowns.
     * @param {rundownsUpdateArgs} args - Arguments to update one Rundowns.
     * @example
     * // Update one Rundowns
     * const rundowns = await prisma.rundowns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rundownsUpdateArgs>(args: SelectSubset<T, rundownsUpdateArgs<ExtArgs>>): Prisma__rundownsClient<$Result.GetResult<Prisma.$rundownsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rundowns.
     * @param {rundownsDeleteManyArgs} args - Arguments to filter Rundowns to delete.
     * @example
     * // Delete a few Rundowns
     * const { count } = await prisma.rundowns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rundownsDeleteManyArgs>(args?: SelectSubset<T, rundownsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rundowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rundownsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rundowns
     * const rundowns = await prisma.rundowns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rundownsUpdateManyArgs>(args: SelectSubset<T, rundownsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rundowns and returns the data updated in the database.
     * @param {rundownsUpdateManyAndReturnArgs} args - Arguments to update many Rundowns.
     * @example
     * // Update many Rundowns
     * const rundowns = await prisma.rundowns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rundowns and only return the `id`
     * const rundownsWithIdOnly = await prisma.rundowns.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rundownsUpdateManyAndReturnArgs>(args: SelectSubset<T, rundownsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rundownsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rundowns.
     * @param {rundownsUpsertArgs} args - Arguments to update or create a Rundowns.
     * @example
     * // Update or create a Rundowns
     * const rundowns = await prisma.rundowns.upsert({
     *   create: {
     *     // ... data to create a Rundowns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rundowns we want to update
     *   }
     * })
     */
    upsert<T extends rundownsUpsertArgs>(args: SelectSubset<T, rundownsUpsertArgs<ExtArgs>>): Prisma__rundownsClient<$Result.GetResult<Prisma.$rundownsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rundowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rundownsCountArgs} args - Arguments to filter Rundowns to count.
     * @example
     * // Count the number of Rundowns
     * const count = await prisma.rundowns.count({
     *   where: {
     *     // ... the filter for the Rundowns we want to count
     *   }
     * })
    **/
    count<T extends rundownsCountArgs>(
      args?: Subset<T, rundownsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RundownsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rundowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RundownsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RundownsAggregateArgs>(args: Subset<T, RundownsAggregateArgs>): Prisma.PrismaPromise<GetRundownsAggregateType<T>>

    /**
     * Group by Rundowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rundownsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rundownsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rundownsGroupByArgs['orderBy'] }
        : { orderBy?: rundownsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rundownsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRundownsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rundowns model
   */
  readonly fields: rundownsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rundowns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rundownsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitations<T extends rundowns$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, rundowns$invitationsArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rundowns model
   */
  interface rundownsFieldRefs {
    readonly id: FieldRef<"rundowns", 'Int'>
    readonly invitation_id: FieldRef<"rundowns", 'Int'>
    readonly title: FieldRef<"rundowns", 'String'>
    readonly location: FieldRef<"rundowns", 'String'>
    readonly location_url: FieldRef<"rundowns", 'String'>
    readonly date: FieldRef<"rundowns", 'DateTime'>
    readonly start_time: FieldRef<"rundowns", 'DateTime'>
    readonly end_time: FieldRef<"rundowns", 'DateTime'>
    readonly time_zone: FieldRef<"rundowns", 'String'>
    readonly description: FieldRef<"rundowns", 'String'>
    readonly image_url: FieldRef<"rundowns", 'String'>
    readonly order_number: FieldRef<"rundowns", 'Int'>
    readonly created_at: FieldRef<"rundowns", 'DateTime'>
    readonly updated_at: FieldRef<"rundowns", 'DateTime'>
    readonly location_detail: FieldRef<"rundowns", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rundowns findUnique
   */
  export type rundownsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsInclude<ExtArgs> | null
    /**
     * Filter, which rundowns to fetch.
     */
    where: rundownsWhereUniqueInput
  }

  /**
   * rundowns findUniqueOrThrow
   */
  export type rundownsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsInclude<ExtArgs> | null
    /**
     * Filter, which rundowns to fetch.
     */
    where: rundownsWhereUniqueInput
  }

  /**
   * rundowns findFirst
   */
  export type rundownsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsInclude<ExtArgs> | null
    /**
     * Filter, which rundowns to fetch.
     */
    where?: rundownsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rundowns to fetch.
     */
    orderBy?: rundownsOrderByWithRelationInput | rundownsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rundowns.
     */
    cursor?: rundownsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rundowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rundowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rundowns.
     */
    distinct?: RundownsScalarFieldEnum | RundownsScalarFieldEnum[]
  }

  /**
   * rundowns findFirstOrThrow
   */
  export type rundownsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsInclude<ExtArgs> | null
    /**
     * Filter, which rundowns to fetch.
     */
    where?: rundownsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rundowns to fetch.
     */
    orderBy?: rundownsOrderByWithRelationInput | rundownsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rundowns.
     */
    cursor?: rundownsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rundowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rundowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rundowns.
     */
    distinct?: RundownsScalarFieldEnum | RundownsScalarFieldEnum[]
  }

  /**
   * rundowns findMany
   */
  export type rundownsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsInclude<ExtArgs> | null
    /**
     * Filter, which rundowns to fetch.
     */
    where?: rundownsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rundowns to fetch.
     */
    orderBy?: rundownsOrderByWithRelationInput | rundownsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rundowns.
     */
    cursor?: rundownsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rundowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rundowns.
     */
    skip?: number
    distinct?: RundownsScalarFieldEnum | RundownsScalarFieldEnum[]
  }

  /**
   * rundowns create
   */
  export type rundownsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsInclude<ExtArgs> | null
    /**
     * The data needed to create a rundowns.
     */
    data?: XOR<rundownsCreateInput, rundownsUncheckedCreateInput>
  }

  /**
   * rundowns createMany
   */
  export type rundownsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rundowns.
     */
    data: rundownsCreateManyInput | rundownsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rundowns createManyAndReturn
   */
  export type rundownsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * The data used to create many rundowns.
     */
    data: rundownsCreateManyInput | rundownsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rundowns update
   */
  export type rundownsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsInclude<ExtArgs> | null
    /**
     * The data needed to update a rundowns.
     */
    data: XOR<rundownsUpdateInput, rundownsUncheckedUpdateInput>
    /**
     * Choose, which rundowns to update.
     */
    where: rundownsWhereUniqueInput
  }

  /**
   * rundowns updateMany
   */
  export type rundownsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rundowns.
     */
    data: XOR<rundownsUpdateManyMutationInput, rundownsUncheckedUpdateManyInput>
    /**
     * Filter which rundowns to update
     */
    where?: rundownsWhereInput
    /**
     * Limit how many rundowns to update.
     */
    limit?: number
  }

  /**
   * rundowns updateManyAndReturn
   */
  export type rundownsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * The data used to update rundowns.
     */
    data: XOR<rundownsUpdateManyMutationInput, rundownsUncheckedUpdateManyInput>
    /**
     * Filter which rundowns to update
     */
    where?: rundownsWhereInput
    /**
     * Limit how many rundowns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rundowns upsert
   */
  export type rundownsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsInclude<ExtArgs> | null
    /**
     * The filter to search for the rundowns to update in case it exists.
     */
    where: rundownsWhereUniqueInput
    /**
     * In case the rundowns found by the `where` argument doesn't exist, create a new rundowns with this data.
     */
    create: XOR<rundownsCreateInput, rundownsUncheckedCreateInput>
    /**
     * In case the rundowns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rundownsUpdateInput, rundownsUncheckedUpdateInput>
  }

  /**
   * rundowns delete
   */
  export type rundownsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsInclude<ExtArgs> | null
    /**
     * Filter which rundowns to delete.
     */
    where: rundownsWhereUniqueInput
  }

  /**
   * rundowns deleteMany
   */
  export type rundownsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rundowns to delete
     */
    where?: rundownsWhereInput
    /**
     * Limit how many rundowns to delete.
     */
    limit?: number
  }

  /**
   * rundowns.invitations
   */
  export type rundowns$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    where?: invitationsWhereInput
  }

  /**
   * rundowns without action
   */
  export type rundownsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rundowns
     */
    select?: rundownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rundowns
     */
    omit?: rundownsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rundownsInclude<ExtArgs> | null
  }


  /**
   * Model stories
   */

  export type AggregateStories = {
    _count: StoriesCountAggregateOutputType | null
    _avg: StoriesAvgAggregateOutputType | null
    _sum: StoriesSumAggregateOutputType | null
    _min: StoriesMinAggregateOutputType | null
    _max: StoriesMaxAggregateOutputType | null
  }

  export type StoriesAvgAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    order_number: number | null
  }

  export type StoriesSumAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    order_number: number | null
  }

  export type StoriesMinAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    title: string | null
    content: string | null
    image_url: string | null
    story_date: Date | null
    order_number: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StoriesMaxAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    title: string | null
    content: string | null
    image_url: string | null
    story_date: Date | null
    order_number: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StoriesCountAggregateOutputType = {
    id: number
    invitation_id: number
    title: number
    content: number
    image_url: number
    story_date: number
    order_number: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StoriesAvgAggregateInputType = {
    id?: true
    invitation_id?: true
    order_number?: true
  }

  export type StoriesSumAggregateInputType = {
    id?: true
    invitation_id?: true
    order_number?: true
  }

  export type StoriesMinAggregateInputType = {
    id?: true
    invitation_id?: true
    title?: true
    content?: true
    image_url?: true
    story_date?: true
    order_number?: true
    created_at?: true
    updated_at?: true
  }

  export type StoriesMaxAggregateInputType = {
    id?: true
    invitation_id?: true
    title?: true
    content?: true
    image_url?: true
    story_date?: true
    order_number?: true
    created_at?: true
    updated_at?: true
  }

  export type StoriesCountAggregateInputType = {
    id?: true
    invitation_id?: true
    title?: true
    content?: true
    image_url?: true
    story_date?: true
    order_number?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stories to aggregate.
     */
    where?: storiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storiesOrderByWithRelationInput | storiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stories
    **/
    _count?: true | StoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoriesMaxAggregateInputType
  }

  export type GetStoriesAggregateType<T extends StoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateStories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStories[P]>
      : GetScalarType<T[P], AggregateStories[P]>
  }




  export type storiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storiesWhereInput
    orderBy?: storiesOrderByWithAggregationInput | storiesOrderByWithAggregationInput[]
    by: StoriesScalarFieldEnum[] | StoriesScalarFieldEnum
    having?: storiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoriesCountAggregateInputType | true
    _avg?: StoriesAvgAggregateInputType
    _sum?: StoriesSumAggregateInputType
    _min?: StoriesMinAggregateInputType
    _max?: StoriesMaxAggregateInputType
  }

  export type StoriesGroupByOutputType = {
    id: number
    invitation_id: number | null
    title: string | null
    content: string | null
    image_url: string | null
    story_date: Date | null
    order_number: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: StoriesCountAggregateOutputType | null
    _avg: StoriesAvgAggregateOutputType | null
    _sum: StoriesSumAggregateOutputType | null
    _min: StoriesMinAggregateOutputType | null
    _max: StoriesMaxAggregateOutputType | null
  }

  type GetStoriesGroupByPayload<T extends storiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoriesGroupByOutputType[P]>
            : GetScalarType<T[P], StoriesGroupByOutputType[P]>
        }
      >
    >


  export type storiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    title?: boolean
    content?: boolean
    image_url?: boolean
    story_date?: boolean
    order_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | stories$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["stories"]>

  export type storiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    title?: boolean
    content?: boolean
    image_url?: boolean
    story_date?: boolean
    order_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | stories$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["stories"]>

  export type storiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    title?: boolean
    content?: boolean
    image_url?: boolean
    story_date?: boolean
    order_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | stories$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["stories"]>

  export type storiesSelectScalar = {
    id?: boolean
    invitation_id?: boolean
    title?: boolean
    content?: boolean
    image_url?: boolean
    story_date?: boolean
    order_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type storiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invitation_id" | "title" | "content" | "image_url" | "story_date" | "order_number" | "created_at" | "updated_at", ExtArgs["result"]["stories"]>
  export type storiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | stories$invitationsArgs<ExtArgs>
  }
  export type storiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | stories$invitationsArgs<ExtArgs>
  }
  export type storiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | stories$invitationsArgs<ExtArgs>
  }

  export type $storiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stories"
    objects: {
      invitations: Prisma.$invitationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invitation_id: number | null
      title: string | null
      content: string | null
      image_url: string | null
      story_date: Date | null
      order_number: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["stories"]>
    composites: {}
  }

  type storiesGetPayload<S extends boolean | null | undefined | storiesDefaultArgs> = $Result.GetResult<Prisma.$storiesPayload, S>

  type storiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoriesCountAggregateInputType | true
    }

  export interface storiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stories'], meta: { name: 'stories' } }
    /**
     * Find zero or one Stories that matches the filter.
     * @param {storiesFindUniqueArgs} args - Arguments to find a Stories
     * @example
     * // Get one Stories
     * const stories = await prisma.stories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storiesFindUniqueArgs>(args: SelectSubset<T, storiesFindUniqueArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storiesFindUniqueOrThrowArgs} args - Arguments to find a Stories
     * @example
     * // Get one Stories
     * const stories = await prisma.stories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storiesFindUniqueOrThrowArgs>(args: SelectSubset<T, storiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storiesFindFirstArgs} args - Arguments to find a Stories
     * @example
     * // Get one Stories
     * const stories = await prisma.stories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storiesFindFirstArgs>(args?: SelectSubset<T, storiesFindFirstArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storiesFindFirstOrThrowArgs} args - Arguments to find a Stories
     * @example
     * // Get one Stories
     * const stories = await prisma.stories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storiesFindFirstOrThrowArgs>(args?: SelectSubset<T, storiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.stories.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.stories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storiesWithIdOnly = await prisma.stories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends storiesFindManyArgs>(args?: SelectSubset<T, storiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stories.
     * @param {storiesCreateArgs} args - Arguments to create a Stories.
     * @example
     * // Create one Stories
     * const Stories = await prisma.stories.create({
     *   data: {
     *     // ... data to create a Stories
     *   }
     * })
     * 
     */
    create<T extends storiesCreateArgs>(args: SelectSubset<T, storiesCreateArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stories.
     * @param {storiesCreateManyArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const stories = await prisma.stories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storiesCreateManyArgs>(args?: SelectSubset<T, storiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stories and returns the data saved in the database.
     * @param {storiesCreateManyAndReturnArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const stories = await prisma.stories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stories and only return the `id`
     * const storiesWithIdOnly = await prisma.stories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends storiesCreateManyAndReturnArgs>(args?: SelectSubset<T, storiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stories.
     * @param {storiesDeleteArgs} args - Arguments to delete one Stories.
     * @example
     * // Delete one Stories
     * const Stories = await prisma.stories.delete({
     *   where: {
     *     // ... filter to delete one Stories
     *   }
     * })
     * 
     */
    delete<T extends storiesDeleteArgs>(args: SelectSubset<T, storiesDeleteArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stories.
     * @param {storiesUpdateArgs} args - Arguments to update one Stories.
     * @example
     * // Update one Stories
     * const stories = await prisma.stories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storiesUpdateArgs>(args: SelectSubset<T, storiesUpdateArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stories.
     * @param {storiesDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.stories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storiesDeleteManyArgs>(args?: SelectSubset<T, storiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const stories = await prisma.stories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storiesUpdateManyArgs>(args: SelectSubset<T, storiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories and returns the data updated in the database.
     * @param {storiesUpdateManyAndReturnArgs} args - Arguments to update many Stories.
     * @example
     * // Update many Stories
     * const stories = await prisma.stories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stories and only return the `id`
     * const storiesWithIdOnly = await prisma.stories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends storiesUpdateManyAndReturnArgs>(args: SelectSubset<T, storiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stories.
     * @param {storiesUpsertArgs} args - Arguments to update or create a Stories.
     * @example
     * // Update or create a Stories
     * const stories = await prisma.stories.upsert({
     *   create: {
     *     // ... data to create a Stories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stories we want to update
     *   }
     * })
     */
    upsert<T extends storiesUpsertArgs>(args: SelectSubset<T, storiesUpsertArgs<ExtArgs>>): Prisma__storiesClient<$Result.GetResult<Prisma.$storiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storiesCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.stories.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends storiesCountArgs>(
      args?: Subset<T, storiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoriesAggregateArgs>(args: Subset<T, StoriesAggregateArgs>): Prisma.PrismaPromise<GetStoriesAggregateType<T>>

    /**
     * Group by Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends storiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storiesGroupByArgs['orderBy'] }
        : { orderBy?: storiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, storiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stories model
   */
  readonly fields: storiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitations<T extends stories$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, stories$invitationsArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stories model
   */
  interface storiesFieldRefs {
    readonly id: FieldRef<"stories", 'Int'>
    readonly invitation_id: FieldRef<"stories", 'Int'>
    readonly title: FieldRef<"stories", 'String'>
    readonly content: FieldRef<"stories", 'String'>
    readonly image_url: FieldRef<"stories", 'String'>
    readonly story_date: FieldRef<"stories", 'DateTime'>
    readonly order_number: FieldRef<"stories", 'Int'>
    readonly created_at: FieldRef<"stories", 'DateTime'>
    readonly updated_at: FieldRef<"stories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stories findUnique
   */
  export type storiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * Filter, which stories to fetch.
     */
    where: storiesWhereUniqueInput
  }

  /**
   * stories findUniqueOrThrow
   */
  export type storiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * Filter, which stories to fetch.
     */
    where: storiesWhereUniqueInput
  }

  /**
   * stories findFirst
   */
  export type storiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * Filter, which stories to fetch.
     */
    where?: storiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storiesOrderByWithRelationInput | storiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stories.
     */
    cursor?: storiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stories.
     */
    distinct?: StoriesScalarFieldEnum | StoriesScalarFieldEnum[]
  }

  /**
   * stories findFirstOrThrow
   */
  export type storiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * Filter, which stories to fetch.
     */
    where?: storiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storiesOrderByWithRelationInput | storiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stories.
     */
    cursor?: storiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stories.
     */
    distinct?: StoriesScalarFieldEnum | StoriesScalarFieldEnum[]
  }

  /**
   * stories findMany
   */
  export type storiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * Filter, which stories to fetch.
     */
    where?: storiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storiesOrderByWithRelationInput | storiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stories.
     */
    cursor?: storiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    distinct?: StoriesScalarFieldEnum | StoriesScalarFieldEnum[]
  }

  /**
   * stories create
   */
  export type storiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * The data needed to create a stories.
     */
    data?: XOR<storiesCreateInput, storiesUncheckedCreateInput>
  }

  /**
   * stories createMany
   */
  export type storiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stories.
     */
    data: storiesCreateManyInput | storiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stories createManyAndReturn
   */
  export type storiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * The data used to create many stories.
     */
    data: storiesCreateManyInput | storiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stories update
   */
  export type storiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * The data needed to update a stories.
     */
    data: XOR<storiesUpdateInput, storiesUncheckedUpdateInput>
    /**
     * Choose, which stories to update.
     */
    where: storiesWhereUniqueInput
  }

  /**
   * stories updateMany
   */
  export type storiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stories.
     */
    data: XOR<storiesUpdateManyMutationInput, storiesUncheckedUpdateManyInput>
    /**
     * Filter which stories to update
     */
    where?: storiesWhereInput
    /**
     * Limit how many stories to update.
     */
    limit?: number
  }

  /**
   * stories updateManyAndReturn
   */
  export type storiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * The data used to update stories.
     */
    data: XOR<storiesUpdateManyMutationInput, storiesUncheckedUpdateManyInput>
    /**
     * Filter which stories to update
     */
    where?: storiesWhereInput
    /**
     * Limit how many stories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stories upsert
   */
  export type storiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * The filter to search for the stories to update in case it exists.
     */
    where: storiesWhereUniqueInput
    /**
     * In case the stories found by the `where` argument doesn't exist, create a new stories with this data.
     */
    create: XOR<storiesCreateInput, storiesUncheckedCreateInput>
    /**
     * In case the stories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storiesUpdateInput, storiesUncheckedUpdateInput>
  }

  /**
   * stories delete
   */
  export type storiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
    /**
     * Filter which stories to delete.
     */
    where: storiesWhereUniqueInput
  }

  /**
   * stories deleteMany
   */
  export type storiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stories to delete
     */
    where?: storiesWhereInput
    /**
     * Limit how many stories to delete.
     */
    limit?: number
  }

  /**
   * stories.invitations
   */
  export type stories$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    where?: invitationsWhereInput
  }

  /**
   * stories without action
   */
  export type storiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stories
     */
    select?: storiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stories
     */
    omit?: storiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storiesInclude<ExtArgs> | null
  }


  /**
   * Model themes
   */

  export type AggregateThemes = {
    _count: ThemesCountAggregateOutputType | null
    _avg: ThemesAvgAggregateOutputType | null
    _sum: ThemesSumAggregateOutputType | null
    _min: ThemesMinAggregateOutputType | null
    _max: ThemesMaxAggregateOutputType | null
  }

  export type ThemesAvgAggregateOutputType = {
    id: number | null
  }

  export type ThemesSumAggregateOutputType = {
    id: number | null
  }

  export type ThemesMinAggregateOutputType = {
    id: number | null
    name: string | null
    preview_image: string | null
    is_active: boolean | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ThemesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    preview_image: string | null
    is_active: boolean | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ThemesCountAggregateOutputType = {
    id: number
    name: number
    preview_image: number
    is_active: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ThemesAvgAggregateInputType = {
    id?: true
  }

  export type ThemesSumAggregateInputType = {
    id?: true
  }

  export type ThemesMinAggregateInputType = {
    id?: true
    name?: true
    preview_image?: true
    is_active?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ThemesMaxAggregateInputType = {
    id?: true
    name?: true
    preview_image?: true
    is_active?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ThemesCountAggregateInputType = {
    id?: true
    name?: true
    preview_image?: true
    is_active?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ThemesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which themes to aggregate.
     */
    where?: themesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of themes to fetch.
     */
    orderBy?: themesOrderByWithRelationInput | themesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: themesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned themes
    **/
    _count?: true | ThemesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThemesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThemesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemesMaxAggregateInputType
  }

  export type GetThemesAggregateType<T extends ThemesAggregateArgs> = {
        [P in keyof T & keyof AggregateThemes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThemes[P]>
      : GetScalarType<T[P], AggregateThemes[P]>
  }




  export type themesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: themesWhereInput
    orderBy?: themesOrderByWithAggregationInput | themesOrderByWithAggregationInput[]
    by: ThemesScalarFieldEnum[] | ThemesScalarFieldEnum
    having?: themesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemesCountAggregateInputType | true
    _avg?: ThemesAvgAggregateInputType
    _sum?: ThemesSumAggregateInputType
    _min?: ThemesMinAggregateInputType
    _max?: ThemesMaxAggregateInputType
  }

  export type ThemesGroupByOutputType = {
    id: number
    name: string | null
    preview_image: string | null
    is_active: boolean | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ThemesCountAggregateOutputType | null
    _avg: ThemesAvgAggregateOutputType | null
    _sum: ThemesSumAggregateOutputType | null
    _min: ThemesMinAggregateOutputType | null
    _max: ThemesMaxAggregateOutputType | null
  }

  type GetThemesGroupByPayload<T extends themesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemesGroupByOutputType[P]>
            : GetScalarType<T[P], ThemesGroupByOutputType[P]>
        }
      >
    >


  export type themesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    preview_image?: boolean
    is_active?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | themes$invitationsArgs<ExtArgs>
    _count?: boolean | ThemesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["themes"]>

  export type themesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    preview_image?: boolean
    is_active?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["themes"]>

  export type themesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    preview_image?: boolean
    is_active?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["themes"]>

  export type themesSelectScalar = {
    id?: boolean
    name?: boolean
    preview_image?: boolean
    is_active?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type themesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "preview_image" | "is_active" | "description" | "created_at" | "updated_at", ExtArgs["result"]["themes"]>
  export type themesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | themes$invitationsArgs<ExtArgs>
    _count?: boolean | ThemesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type themesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type themesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $themesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "themes"
    objects: {
      invitations: Prisma.$invitationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      preview_image: string | null
      is_active: boolean | null
      description: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["themes"]>
    composites: {}
  }

  type themesGetPayload<S extends boolean | null | undefined | themesDefaultArgs> = $Result.GetResult<Prisma.$themesPayload, S>

  type themesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<themesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThemesCountAggregateInputType | true
    }

  export interface themesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['themes'], meta: { name: 'themes' } }
    /**
     * Find zero or one Themes that matches the filter.
     * @param {themesFindUniqueArgs} args - Arguments to find a Themes
     * @example
     * // Get one Themes
     * const themes = await prisma.themes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends themesFindUniqueArgs>(args: SelectSubset<T, themesFindUniqueArgs<ExtArgs>>): Prisma__themesClient<$Result.GetResult<Prisma.$themesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Themes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {themesFindUniqueOrThrowArgs} args - Arguments to find a Themes
     * @example
     * // Get one Themes
     * const themes = await prisma.themes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends themesFindUniqueOrThrowArgs>(args: SelectSubset<T, themesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__themesClient<$Result.GetResult<Prisma.$themesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themesFindFirstArgs} args - Arguments to find a Themes
     * @example
     * // Get one Themes
     * const themes = await prisma.themes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends themesFindFirstArgs>(args?: SelectSubset<T, themesFindFirstArgs<ExtArgs>>): Prisma__themesClient<$Result.GetResult<Prisma.$themesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Themes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themesFindFirstOrThrowArgs} args - Arguments to find a Themes
     * @example
     * // Get one Themes
     * const themes = await prisma.themes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends themesFindFirstOrThrowArgs>(args?: SelectSubset<T, themesFindFirstOrThrowArgs<ExtArgs>>): Prisma__themesClient<$Result.GetResult<Prisma.$themesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.themes.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.themes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themesWithIdOnly = await prisma.themes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends themesFindManyArgs>(args?: SelectSubset<T, themesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$themesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Themes.
     * @param {themesCreateArgs} args - Arguments to create a Themes.
     * @example
     * // Create one Themes
     * const Themes = await prisma.themes.create({
     *   data: {
     *     // ... data to create a Themes
     *   }
     * })
     * 
     */
    create<T extends themesCreateArgs>(args: SelectSubset<T, themesCreateArgs<ExtArgs>>): Prisma__themesClient<$Result.GetResult<Prisma.$themesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Themes.
     * @param {themesCreateManyArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const themes = await prisma.themes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends themesCreateManyArgs>(args?: SelectSubset<T, themesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Themes and returns the data saved in the database.
     * @param {themesCreateManyAndReturnArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const themes = await prisma.themes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Themes and only return the `id`
     * const themesWithIdOnly = await prisma.themes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends themesCreateManyAndReturnArgs>(args?: SelectSubset<T, themesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$themesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Themes.
     * @param {themesDeleteArgs} args - Arguments to delete one Themes.
     * @example
     * // Delete one Themes
     * const Themes = await prisma.themes.delete({
     *   where: {
     *     // ... filter to delete one Themes
     *   }
     * })
     * 
     */
    delete<T extends themesDeleteArgs>(args: SelectSubset<T, themesDeleteArgs<ExtArgs>>): Prisma__themesClient<$Result.GetResult<Prisma.$themesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Themes.
     * @param {themesUpdateArgs} args - Arguments to update one Themes.
     * @example
     * // Update one Themes
     * const themes = await prisma.themes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends themesUpdateArgs>(args: SelectSubset<T, themesUpdateArgs<ExtArgs>>): Prisma__themesClient<$Result.GetResult<Prisma.$themesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Themes.
     * @param {themesDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.themes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends themesDeleteManyArgs>(args?: SelectSubset<T, themesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const themes = await prisma.themes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends themesUpdateManyArgs>(args: SelectSubset<T, themesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes and returns the data updated in the database.
     * @param {themesUpdateManyAndReturnArgs} args - Arguments to update many Themes.
     * @example
     * // Update many Themes
     * const themes = await prisma.themes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Themes and only return the `id`
     * const themesWithIdOnly = await prisma.themes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends themesUpdateManyAndReturnArgs>(args: SelectSubset<T, themesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$themesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Themes.
     * @param {themesUpsertArgs} args - Arguments to update or create a Themes.
     * @example
     * // Update or create a Themes
     * const themes = await prisma.themes.upsert({
     *   create: {
     *     // ... data to create a Themes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Themes we want to update
     *   }
     * })
     */
    upsert<T extends themesUpsertArgs>(args: SelectSubset<T, themesUpsertArgs<ExtArgs>>): Prisma__themesClient<$Result.GetResult<Prisma.$themesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themesCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.themes.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends themesCountArgs>(
      args?: Subset<T, themesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThemesAggregateArgs>(args: Subset<T, ThemesAggregateArgs>): Prisma.PrismaPromise<GetThemesAggregateType<T>>

    /**
     * Group by Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends themesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: themesGroupByArgs['orderBy'] }
        : { orderBy?: themesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, themesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the themes model
   */
  readonly fields: themesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for themes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__themesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitations<T extends themes$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, themes$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the themes model
   */
  interface themesFieldRefs {
    readonly id: FieldRef<"themes", 'Int'>
    readonly name: FieldRef<"themes", 'String'>
    readonly preview_image: FieldRef<"themes", 'String'>
    readonly is_active: FieldRef<"themes", 'Boolean'>
    readonly description: FieldRef<"themes", 'String'>
    readonly created_at: FieldRef<"themes", 'DateTime'>
    readonly updated_at: FieldRef<"themes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * themes findUnique
   */
  export type themesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themesInclude<ExtArgs> | null
    /**
     * Filter, which themes to fetch.
     */
    where: themesWhereUniqueInput
  }

  /**
   * themes findUniqueOrThrow
   */
  export type themesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themesInclude<ExtArgs> | null
    /**
     * Filter, which themes to fetch.
     */
    where: themesWhereUniqueInput
  }

  /**
   * themes findFirst
   */
  export type themesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themesInclude<ExtArgs> | null
    /**
     * Filter, which themes to fetch.
     */
    where?: themesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of themes to fetch.
     */
    orderBy?: themesOrderByWithRelationInput | themesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for themes.
     */
    cursor?: themesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of themes.
     */
    distinct?: ThemesScalarFieldEnum | ThemesScalarFieldEnum[]
  }

  /**
   * themes findFirstOrThrow
   */
  export type themesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themesInclude<ExtArgs> | null
    /**
     * Filter, which themes to fetch.
     */
    where?: themesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of themes to fetch.
     */
    orderBy?: themesOrderByWithRelationInput | themesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for themes.
     */
    cursor?: themesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of themes.
     */
    distinct?: ThemesScalarFieldEnum | ThemesScalarFieldEnum[]
  }

  /**
   * themes findMany
   */
  export type themesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themesInclude<ExtArgs> | null
    /**
     * Filter, which themes to fetch.
     */
    where?: themesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of themes to fetch.
     */
    orderBy?: themesOrderByWithRelationInput | themesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing themes.
     */
    cursor?: themesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` themes.
     */
    skip?: number
    distinct?: ThemesScalarFieldEnum | ThemesScalarFieldEnum[]
  }

  /**
   * themes create
   */
  export type themesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themesInclude<ExtArgs> | null
    /**
     * The data needed to create a themes.
     */
    data?: XOR<themesCreateInput, themesUncheckedCreateInput>
  }

  /**
   * themes createMany
   */
  export type themesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many themes.
     */
    data: themesCreateManyInput | themesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * themes createManyAndReturn
   */
  export type themesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * The data used to create many themes.
     */
    data: themesCreateManyInput | themesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * themes update
   */
  export type themesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themesInclude<ExtArgs> | null
    /**
     * The data needed to update a themes.
     */
    data: XOR<themesUpdateInput, themesUncheckedUpdateInput>
    /**
     * Choose, which themes to update.
     */
    where: themesWhereUniqueInput
  }

  /**
   * themes updateMany
   */
  export type themesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update themes.
     */
    data: XOR<themesUpdateManyMutationInput, themesUncheckedUpdateManyInput>
    /**
     * Filter which themes to update
     */
    where?: themesWhereInput
    /**
     * Limit how many themes to update.
     */
    limit?: number
  }

  /**
   * themes updateManyAndReturn
   */
  export type themesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * The data used to update themes.
     */
    data: XOR<themesUpdateManyMutationInput, themesUncheckedUpdateManyInput>
    /**
     * Filter which themes to update
     */
    where?: themesWhereInput
    /**
     * Limit how many themes to update.
     */
    limit?: number
  }

  /**
   * themes upsert
   */
  export type themesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themesInclude<ExtArgs> | null
    /**
     * The filter to search for the themes to update in case it exists.
     */
    where: themesWhereUniqueInput
    /**
     * In case the themes found by the `where` argument doesn't exist, create a new themes with this data.
     */
    create: XOR<themesCreateInput, themesUncheckedCreateInput>
    /**
     * In case the themes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<themesUpdateInput, themesUncheckedUpdateInput>
  }

  /**
   * themes delete
   */
  export type themesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themesInclude<ExtArgs> | null
    /**
     * Filter which themes to delete.
     */
    where: themesWhereUniqueInput
  }

  /**
   * themes deleteMany
   */
  export type themesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which themes to delete
     */
    where?: themesWhereInput
    /**
     * Limit how many themes to delete.
     */
    limit?: number
  }

  /**
   * themes.invitations
   */
  export type themes$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    where?: invitationsWhereInput
    orderBy?: invitationsOrderByWithRelationInput | invitationsOrderByWithRelationInput[]
    cursor?: invitationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * themes without action
   */
  export type themesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the themes
     */
    select?: themesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the themes
     */
    omit?: themesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    role: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    role: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    remember_token: number
    created_at: number
    updated_at: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    password: string | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    role: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
    invitations?: boolean | users$invitationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "remember_token" | "created_at" | "updated_at" | "role", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | users$invitationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      invitations: Prisma.$invitationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      password: string | null
      remember_token: string | null
      created_at: Date | null
      updated_at: Date | null
      role: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitations<T extends users$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, users$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly remember_token: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly role: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.invitations
   */
  export type users$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    where?: invitationsWhereInput
    orderBy?: invitationsOrderByWithRelationInput | invitationsOrderByWithRelationInput[]
    cursor?: invitationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model videos
   */

  export type AggregateVideos = {
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  export type VideosAvgAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    order_number: number | null
  }

  export type VideosSumAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    order_number: number | null
  }

  export type VideosMinAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    title: string | null
    description: string | null
    url: string | null
    thumbnail: string | null
    order_number: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VideosMaxAggregateOutputType = {
    id: number | null
    invitation_id: number | null
    title: string | null
    description: string | null
    url: string | null
    thumbnail: string | null
    order_number: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VideosCountAggregateOutputType = {
    id: number
    invitation_id: number
    title: number
    description: number
    url: number
    thumbnail: number
    order_number: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VideosAvgAggregateInputType = {
    id?: true
    invitation_id?: true
    order_number?: true
  }

  export type VideosSumAggregateInputType = {
    id?: true
    invitation_id?: true
    order_number?: true
  }

  export type VideosMinAggregateInputType = {
    id?: true
    invitation_id?: true
    title?: true
    description?: true
    url?: true
    thumbnail?: true
    order_number?: true
    created_at?: true
    updated_at?: true
  }

  export type VideosMaxAggregateInputType = {
    id?: true
    invitation_id?: true
    title?: true
    description?: true
    url?: true
    thumbnail?: true
    order_number?: true
    created_at?: true
    updated_at?: true
  }

  export type VideosCountAggregateInputType = {
    id?: true
    invitation_id?: true
    title?: true
    description?: true
    url?: true
    thumbnail?: true
    order_number?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VideosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to aggregate.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned videos
    **/
    _count?: true | VideosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideosMaxAggregateInputType
  }

  export type GetVideosAggregateType<T extends VideosAggregateArgs> = {
        [P in keyof T & keyof AggregateVideos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideos[P]>
      : GetScalarType<T[P], AggregateVideos[P]>
  }




  export type videosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videosWhereInput
    orderBy?: videosOrderByWithAggregationInput | videosOrderByWithAggregationInput[]
    by: VideosScalarFieldEnum[] | VideosScalarFieldEnum
    having?: videosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideosCountAggregateInputType | true
    _avg?: VideosAvgAggregateInputType
    _sum?: VideosSumAggregateInputType
    _min?: VideosMinAggregateInputType
    _max?: VideosMaxAggregateInputType
  }

  export type VideosGroupByOutputType = {
    id: number
    invitation_id: number | null
    title: string | null
    description: string | null
    url: string | null
    thumbnail: string | null
    order_number: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  type GetVideosGroupByPayload<T extends videosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideosGroupByOutputType[P]>
            : GetScalarType<T[P], VideosGroupByOutputType[P]>
        }
      >
    >


  export type videosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    thumbnail?: boolean
    order_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | videos$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>

  export type videosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    thumbnail?: boolean
    order_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | videos$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>

  export type videosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitation_id?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    thumbnail?: boolean
    order_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    invitations?: boolean | videos$invitationsArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>

  export type videosSelectScalar = {
    id?: boolean
    invitation_id?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    thumbnail?: boolean
    order_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type videosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invitation_id" | "title" | "description" | "url" | "thumbnail" | "order_number" | "created_at" | "updated_at", ExtArgs["result"]["videos"]>
  export type videosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | videos$invitationsArgs<ExtArgs>
  }
  export type videosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | videos$invitationsArgs<ExtArgs>
  }
  export type videosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | videos$invitationsArgs<ExtArgs>
  }

  export type $videosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "videos"
    objects: {
      invitations: Prisma.$invitationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invitation_id: number | null
      title: string | null
      description: string | null
      url: string | null
      thumbnail: string | null
      order_number: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["videos"]>
    composites: {}
  }

  type videosGetPayload<S extends boolean | null | undefined | videosDefaultArgs> = $Result.GetResult<Prisma.$videosPayload, S>

  type videosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<videosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideosCountAggregateInputType | true
    }

  export interface videosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['videos'], meta: { name: 'videos' } }
    /**
     * Find zero or one Videos that matches the filter.
     * @param {videosFindUniqueArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends videosFindUniqueArgs>(args: SelectSubset<T, videosFindUniqueArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Videos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {videosFindUniqueOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends videosFindUniqueOrThrowArgs>(args: SelectSubset<T, videosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindFirstArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends videosFindFirstArgs>(args?: SelectSubset<T, videosFindFirstArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindFirstOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends videosFindFirstOrThrowArgs>(args?: SelectSubset<T, videosFindFirstOrThrowArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.videos.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.videos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videosWithIdOnly = await prisma.videos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends videosFindManyArgs>(args?: SelectSubset<T, videosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Videos.
     * @param {videosCreateArgs} args - Arguments to create a Videos.
     * @example
     * // Create one Videos
     * const Videos = await prisma.videos.create({
     *   data: {
     *     // ... data to create a Videos
     *   }
     * })
     * 
     */
    create<T extends videosCreateArgs>(args: SelectSubset<T, videosCreateArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {videosCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const videos = await prisma.videos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends videosCreateManyArgs>(args?: SelectSubset<T, videosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {videosCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const videos = await prisma.videos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videosWithIdOnly = await prisma.videos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends videosCreateManyAndReturnArgs>(args?: SelectSubset<T, videosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Videos.
     * @param {videosDeleteArgs} args - Arguments to delete one Videos.
     * @example
     * // Delete one Videos
     * const Videos = await prisma.videos.delete({
     *   where: {
     *     // ... filter to delete one Videos
     *   }
     * })
     * 
     */
    delete<T extends videosDeleteArgs>(args: SelectSubset<T, videosDeleteArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Videos.
     * @param {videosUpdateArgs} args - Arguments to update one Videos.
     * @example
     * // Update one Videos
     * const videos = await prisma.videos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends videosUpdateArgs>(args: SelectSubset<T, videosUpdateArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {videosDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.videos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends videosDeleteManyArgs>(args?: SelectSubset<T, videosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const videos = await prisma.videos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends videosUpdateManyArgs>(args: SelectSubset<T, videosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {videosUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const videos = await prisma.videos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videosWithIdOnly = await prisma.videos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends videosUpdateManyAndReturnArgs>(args: SelectSubset<T, videosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Videos.
     * @param {videosUpsertArgs} args - Arguments to update or create a Videos.
     * @example
     * // Update or create a Videos
     * const videos = await prisma.videos.upsert({
     *   create: {
     *     // ... data to create a Videos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videos we want to update
     *   }
     * })
     */
    upsert<T extends videosUpsertArgs>(args: SelectSubset<T, videosUpsertArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.videos.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends videosCountArgs>(
      args?: Subset<T, videosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideosAggregateArgs>(args: Subset<T, VideosAggregateArgs>): Prisma.PrismaPromise<GetVideosAggregateType<T>>

    /**
     * Group by Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends videosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videosGroupByArgs['orderBy'] }
        : { orderBy?: videosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, videosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the videos model
   */
  readonly fields: videosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for videos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitations<T extends videos$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, videos$invitationsArgs<ExtArgs>>): Prisma__invitationsClient<$Result.GetResult<Prisma.$invitationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the videos model
   */
  interface videosFieldRefs {
    readonly id: FieldRef<"videos", 'Int'>
    readonly invitation_id: FieldRef<"videos", 'Int'>
    readonly title: FieldRef<"videos", 'String'>
    readonly description: FieldRef<"videos", 'String'>
    readonly url: FieldRef<"videos", 'String'>
    readonly thumbnail: FieldRef<"videos", 'String'>
    readonly order_number: FieldRef<"videos", 'Int'>
    readonly created_at: FieldRef<"videos", 'DateTime'>
    readonly updated_at: FieldRef<"videos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * videos findUnique
   */
  export type videosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos findUniqueOrThrow
   */
  export type videosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos findFirst
   */
  export type videosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos findFirstOrThrow
   */
  export type videosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos findMany
   */
  export type videosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos create
   */
  export type videosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * The data needed to create a videos.
     */
    data?: XOR<videosCreateInput, videosUncheckedCreateInput>
  }

  /**
   * videos createMany
   */
  export type videosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videos.
     */
    data: videosCreateManyInput | videosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * videos createManyAndReturn
   */
  export type videosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * The data used to create many videos.
     */
    data: videosCreateManyInput | videosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * videos update
   */
  export type videosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * The data needed to update a videos.
     */
    data: XOR<videosUpdateInput, videosUncheckedUpdateInput>
    /**
     * Choose, which videos to update.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos updateMany
   */
  export type videosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videos.
     */
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyInput>
    /**
     * Filter which videos to update
     */
    where?: videosWhereInput
    /**
     * Limit how many videos to update.
     */
    limit?: number
  }

  /**
   * videos updateManyAndReturn
   */
  export type videosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * The data used to update videos.
     */
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyInput>
    /**
     * Filter which videos to update
     */
    where?: videosWhereInput
    /**
     * Limit how many videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * videos upsert
   */
  export type videosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * The filter to search for the videos to update in case it exists.
     */
    where: videosWhereUniqueInput
    /**
     * In case the videos found by the `where` argument doesn't exist, create a new videos with this data.
     */
    create: XOR<videosCreateInput, videosUncheckedCreateInput>
    /**
     * In case the videos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videosUpdateInput, videosUncheckedUpdateInput>
  }

  /**
   * videos delete
   */
  export type videosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter which videos to delete.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos deleteMany
   */
  export type videosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to delete
     */
    where?: videosWhereInput
    /**
     * Limit how many videos to delete.
     */
    limit?: number
  }

  /**
   * videos.invitations
   */
  export type videos$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitations
     */
    select?: invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitations
     */
    omit?: invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationsInclude<ExtArgs> | null
    where?: invitationsWhereInput
  }

  /**
   * videos without action
   */
  export type videosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Gift_infosScalarFieldEnum: {
    id: 'id',
    invitation_id: 'invitation_id',
    provider_name: 'provider_name',
    account_number: 'account_number',
    account_holder: 'account_holder',
    gift_delivery_address: 'gift_delivery_address',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Gift_infosScalarFieldEnum = (typeof Gift_infosScalarFieldEnum)[keyof typeof Gift_infosScalarFieldEnum]


  export const GuestsScalarFieldEnum: {
    id: 'id',
    invitation_id: 'invitation_id',
    name: 'name',
    phone_number: 'phone_number',
    slug: 'slug',
    is_attending: 'is_attending',
    total_guest: 'total_guest',
    notes: 'notes',
    address: 'address',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GuestsScalarFieldEnum = (typeof GuestsScalarFieldEnum)[keyof typeof GuestsScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    id: 'id',
    invitation_id: 'invitation_id',
    url: 'url',
    caption: 'caption',
    type: 'type',
    created_at: 'created_at',
    updated_at: 'updated_at',
    order_number: 'order_number'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const InvitationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    theme_id: 'theme_id',
    music_id: 'music_id',
    phone_number: 'phone_number',
    slug: 'slug',
    event_title: 'event_title',
    host_one_name: 'host_one_name',
    host_two_name: 'host_two_name',
    host_one_nickname: 'host_one_nickname',
    host_two_nickname: 'host_two_nickname',
    host_one_additional_info: 'host_one_additional_info',
    host_two_additional_info: 'host_two_additional_info',
    host_one_social_media: 'host_one_social_media',
    host_two_social_media: 'host_two_social_media',
    event_date: 'event_date',
    event_type: 'event_type',
    location: 'location',
    location_url: 'location_url',
    message: 'message',
    hashtag: 'hashtag',
    is_active: 'is_active',
    activated_at: 'activated_at',
    expired_at: 'expired_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    web_url: 'web_url',
    message_template: 'message_template',
    additional_info: 'additional_info',
    location_detail: 'location_detail'
  };

  export type InvitationsScalarFieldEnum = (typeof InvitationsScalarFieldEnum)[keyof typeof InvitationsScalarFieldEnum]


  export const MusicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    artist: 'artist',
    url: 'url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MusicScalarFieldEnum = (typeof MusicScalarFieldEnum)[keyof typeof MusicScalarFieldEnum]


  export const RsvpsScalarFieldEnum: {
    id: 'id',
    invitation_id: 'invitation_id',
    guest_name: 'guest_name',
    message: 'message',
    attendance_status: 'attendance_status',
    total_guest: 'total_guest',
    created_at: 'created_at',
    updated_at: 'updated_at',
    icon_color: 'icon_color'
  };

  export type RsvpsScalarFieldEnum = (typeof RsvpsScalarFieldEnum)[keyof typeof RsvpsScalarFieldEnum]


  export const RundownsScalarFieldEnum: {
    id: 'id',
    invitation_id: 'invitation_id',
    title: 'title',
    location: 'location',
    location_url: 'location_url',
    date: 'date',
    start_time: 'start_time',
    end_time: 'end_time',
    time_zone: 'time_zone',
    description: 'description',
    image_url: 'image_url',
    order_number: 'order_number',
    created_at: 'created_at',
    updated_at: 'updated_at',
    location_detail: 'location_detail'
  };

  export type RundownsScalarFieldEnum = (typeof RundownsScalarFieldEnum)[keyof typeof RundownsScalarFieldEnum]


  export const StoriesScalarFieldEnum: {
    id: 'id',
    invitation_id: 'invitation_id',
    title: 'title',
    content: 'content',
    image_url: 'image_url',
    story_date: 'story_date',
    order_number: 'order_number',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StoriesScalarFieldEnum = (typeof StoriesScalarFieldEnum)[keyof typeof StoriesScalarFieldEnum]


  export const ThemesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    preview_image: 'preview_image',
    is_active: 'is_active',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ThemesScalarFieldEnum = (typeof ThemesScalarFieldEnum)[keyof typeof ThemesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    remember_token: 'remember_token',
    created_at: 'created_at',
    updated_at: 'updated_at',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const VideosScalarFieldEnum: {
    id: 'id',
    invitation_id: 'invitation_id',
    title: 'title',
    description: 'description',
    url: 'url',
    thumbnail: 'thumbnail',
    order_number: 'order_number',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VideosScalarFieldEnum = (typeof VideosScalarFieldEnum)[keyof typeof VideosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type gift_infosWhereInput = {
    AND?: gift_infosWhereInput | gift_infosWhereInput[]
    OR?: gift_infosWhereInput[]
    NOT?: gift_infosWhereInput | gift_infosWhereInput[]
    id?: IntFilter<"gift_infos"> | number
    invitation_id?: IntNullableFilter<"gift_infos"> | number | null
    provider_name?: StringNullableFilter<"gift_infos"> | string | null
    account_number?: StringNullableFilter<"gift_infos"> | string | null
    account_holder?: StringNullableFilter<"gift_infos"> | string | null
    gift_delivery_address?: StringNullableFilter<"gift_infos"> | string | null
    created_at?: DateTimeNullableFilter<"gift_infos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"gift_infos"> | Date | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }

  export type gift_infosOrderByWithRelationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    provider_name?: SortOrderInput | SortOrder
    account_number?: SortOrderInput | SortOrder
    account_holder?: SortOrderInput | SortOrder
    gift_delivery_address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    invitations?: invitationsOrderByWithRelationInput
  }

  export type gift_infosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gift_infosWhereInput | gift_infosWhereInput[]
    OR?: gift_infosWhereInput[]
    NOT?: gift_infosWhereInput | gift_infosWhereInput[]
    invitation_id?: IntNullableFilter<"gift_infos"> | number | null
    provider_name?: StringNullableFilter<"gift_infos"> | string | null
    account_number?: StringNullableFilter<"gift_infos"> | string | null
    account_holder?: StringNullableFilter<"gift_infos"> | string | null
    gift_delivery_address?: StringNullableFilter<"gift_infos"> | string | null
    created_at?: DateTimeNullableFilter<"gift_infos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"gift_infos"> | Date | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }, "id">

  export type gift_infosOrderByWithAggregationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    provider_name?: SortOrderInput | SortOrder
    account_number?: SortOrderInput | SortOrder
    account_holder?: SortOrderInput | SortOrder
    gift_delivery_address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: gift_infosCountOrderByAggregateInput
    _avg?: gift_infosAvgOrderByAggregateInput
    _max?: gift_infosMaxOrderByAggregateInput
    _min?: gift_infosMinOrderByAggregateInput
    _sum?: gift_infosSumOrderByAggregateInput
  }

  export type gift_infosScalarWhereWithAggregatesInput = {
    AND?: gift_infosScalarWhereWithAggregatesInput | gift_infosScalarWhereWithAggregatesInput[]
    OR?: gift_infosScalarWhereWithAggregatesInput[]
    NOT?: gift_infosScalarWhereWithAggregatesInput | gift_infosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gift_infos"> | number
    invitation_id?: IntNullableWithAggregatesFilter<"gift_infos"> | number | null
    provider_name?: StringNullableWithAggregatesFilter<"gift_infos"> | string | null
    account_number?: StringNullableWithAggregatesFilter<"gift_infos"> | string | null
    account_holder?: StringNullableWithAggregatesFilter<"gift_infos"> | string | null
    gift_delivery_address?: StringNullableWithAggregatesFilter<"gift_infos"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"gift_infos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"gift_infos"> | Date | string | null
  }

  export type guestsWhereInput = {
    AND?: guestsWhereInput | guestsWhereInput[]
    OR?: guestsWhereInput[]
    NOT?: guestsWhereInput | guestsWhereInput[]
    id?: IntFilter<"guests"> | number
    invitation_id?: IntNullableFilter<"guests"> | number | null
    name?: StringNullableFilter<"guests"> | string | null
    phone_number?: StringNullableFilter<"guests"> | string | null
    slug?: StringNullableFilter<"guests"> | string | null
    is_attending?: BoolNullableFilter<"guests"> | boolean | null
    total_guest?: IntNullableFilter<"guests"> | number | null
    notes?: StringNullableFilter<"guests"> | string | null
    address?: StringNullableFilter<"guests"> | string | null
    created_at?: DateTimeNullableFilter<"guests"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"guests"> | Date | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }

  export type guestsOrderByWithRelationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    is_attending?: SortOrderInput | SortOrder
    total_guest?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    invitations?: invitationsOrderByWithRelationInput
  }

  export type guestsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: guestsWhereInput | guestsWhereInput[]
    OR?: guestsWhereInput[]
    NOT?: guestsWhereInput | guestsWhereInput[]
    invitation_id?: IntNullableFilter<"guests"> | number | null
    name?: StringNullableFilter<"guests"> | string | null
    phone_number?: StringNullableFilter<"guests"> | string | null
    slug?: StringNullableFilter<"guests"> | string | null
    is_attending?: BoolNullableFilter<"guests"> | boolean | null
    total_guest?: IntNullableFilter<"guests"> | number | null
    notes?: StringNullableFilter<"guests"> | string | null
    address?: StringNullableFilter<"guests"> | string | null
    created_at?: DateTimeNullableFilter<"guests"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"guests"> | Date | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }, "id">

  export type guestsOrderByWithAggregationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    is_attending?: SortOrderInput | SortOrder
    total_guest?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: guestsCountOrderByAggregateInput
    _avg?: guestsAvgOrderByAggregateInput
    _max?: guestsMaxOrderByAggregateInput
    _min?: guestsMinOrderByAggregateInput
    _sum?: guestsSumOrderByAggregateInput
  }

  export type guestsScalarWhereWithAggregatesInput = {
    AND?: guestsScalarWhereWithAggregatesInput | guestsScalarWhereWithAggregatesInput[]
    OR?: guestsScalarWhereWithAggregatesInput[]
    NOT?: guestsScalarWhereWithAggregatesInput | guestsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"guests"> | number
    invitation_id?: IntNullableWithAggregatesFilter<"guests"> | number | null
    name?: StringNullableWithAggregatesFilter<"guests"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"guests"> | string | null
    slug?: StringNullableWithAggregatesFilter<"guests"> | string | null
    is_attending?: BoolNullableWithAggregatesFilter<"guests"> | boolean | null
    total_guest?: IntNullableWithAggregatesFilter<"guests"> | number | null
    notes?: StringNullableWithAggregatesFilter<"guests"> | string | null
    address?: StringNullableWithAggregatesFilter<"guests"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"guests"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"guests"> | Date | string | null
  }

  export type imagesWhereInput = {
    AND?: imagesWhereInput | imagesWhereInput[]
    OR?: imagesWhereInput[]
    NOT?: imagesWhereInput | imagesWhereInput[]
    id?: IntFilter<"images"> | number
    invitation_id?: IntNullableFilter<"images"> | number | null
    url?: StringNullableFilter<"images"> | string | null
    caption?: StringNullableFilter<"images"> | string | null
    type?: StringNullableFilter<"images"> | string | null
    created_at?: DateTimeNullableFilter<"images"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"images"> | Date | string | null
    order_number?: StringNullableFilter<"images"> | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }

  export type imagesOrderByWithRelationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    order_number?: SortOrderInput | SortOrder
    invitations?: invitationsOrderByWithRelationInput
  }

  export type imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: imagesWhereInput | imagesWhereInput[]
    OR?: imagesWhereInput[]
    NOT?: imagesWhereInput | imagesWhereInput[]
    invitation_id?: IntNullableFilter<"images"> | number | null
    url?: StringNullableFilter<"images"> | string | null
    caption?: StringNullableFilter<"images"> | string | null
    type?: StringNullableFilter<"images"> | string | null
    created_at?: DateTimeNullableFilter<"images"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"images"> | Date | string | null
    order_number?: StringNullableFilter<"images"> | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }, "id">

  export type imagesOrderByWithAggregationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    order_number?: SortOrderInput | SortOrder
    _count?: imagesCountOrderByAggregateInput
    _avg?: imagesAvgOrderByAggregateInput
    _max?: imagesMaxOrderByAggregateInput
    _min?: imagesMinOrderByAggregateInput
    _sum?: imagesSumOrderByAggregateInput
  }

  export type imagesScalarWhereWithAggregatesInput = {
    AND?: imagesScalarWhereWithAggregatesInput | imagesScalarWhereWithAggregatesInput[]
    OR?: imagesScalarWhereWithAggregatesInput[]
    NOT?: imagesScalarWhereWithAggregatesInput | imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"images"> | number
    invitation_id?: IntNullableWithAggregatesFilter<"images"> | number | null
    url?: StringNullableWithAggregatesFilter<"images"> | string | null
    caption?: StringNullableWithAggregatesFilter<"images"> | string | null
    type?: StringNullableWithAggregatesFilter<"images"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"images"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"images"> | Date | string | null
    order_number?: StringNullableWithAggregatesFilter<"images"> | string | null
  }

  export type invitationsWhereInput = {
    AND?: invitationsWhereInput | invitationsWhereInput[]
    OR?: invitationsWhereInput[]
    NOT?: invitationsWhereInput | invitationsWhereInput[]
    id?: IntFilter<"invitations"> | number
    user_id?: IntNullableFilter<"invitations"> | number | null
    theme_id?: IntNullableFilter<"invitations"> | number | null
    music_id?: IntNullableFilter<"invitations"> | number | null
    phone_number?: StringNullableFilter<"invitations"> | string | null
    slug?: StringNullableFilter<"invitations"> | string | null
    event_title?: StringNullableFilter<"invitations"> | string | null
    host_one_name?: StringNullableFilter<"invitations"> | string | null
    host_two_name?: StringNullableFilter<"invitations"> | string | null
    host_one_nickname?: StringNullableFilter<"invitations"> | string | null
    host_two_nickname?: StringNullableFilter<"invitations"> | string | null
    host_one_additional_info?: StringNullableFilter<"invitations"> | string | null
    host_two_additional_info?: StringNullableFilter<"invitations"> | string | null
    host_one_social_media?: StringNullableFilter<"invitations"> | string | null
    host_two_social_media?: StringNullableFilter<"invitations"> | string | null
    event_date?: DateTimeNullableFilter<"invitations"> | Date | string | null
    event_type?: StringNullableFilter<"invitations"> | string | null
    location?: StringNullableFilter<"invitations"> | string | null
    location_url?: StringNullableFilter<"invitations"> | string | null
    message?: StringNullableFilter<"invitations"> | string | null
    hashtag?: StringNullableFilter<"invitations"> | string | null
    is_active?: BoolNullableFilter<"invitations"> | boolean | null
    activated_at?: DateTimeNullableFilter<"invitations"> | Date | string | null
    expired_at?: DateTimeNullableFilter<"invitations"> | Date | string | null
    created_at?: DateTimeNullableFilter<"invitations"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"invitations"> | Date | string | null
    web_url?: StringNullableFilter<"invitations"> | string | null
    message_template?: StringNullableFilter<"invitations"> | string | null
    additional_info?: StringNullableFilter<"invitations"> | string | null
    location_detail?: StringNullableFilter<"invitations"> | string | null
    gift_infos?: Gift_infosListRelationFilter
    guests?: GuestsListRelationFilter
    images?: ImagesListRelationFilter
    music?: XOR<MusicNullableScalarRelationFilter, musicWhereInput> | null
    themes?: XOR<ThemesNullableScalarRelationFilter, themesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    rsvps?: RsvpsListRelationFilter
    rundowns?: RundownsListRelationFilter
    stories?: StoriesListRelationFilter
    videos?: VideosListRelationFilter
  }

  export type invitationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    theme_id?: SortOrderInput | SortOrder
    music_id?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    event_title?: SortOrderInput | SortOrder
    host_one_name?: SortOrderInput | SortOrder
    host_two_name?: SortOrderInput | SortOrder
    host_one_nickname?: SortOrderInput | SortOrder
    host_two_nickname?: SortOrderInput | SortOrder
    host_one_additional_info?: SortOrderInput | SortOrder
    host_two_additional_info?: SortOrderInput | SortOrder
    host_one_social_media?: SortOrderInput | SortOrder
    host_two_social_media?: SortOrderInput | SortOrder
    event_date?: SortOrderInput | SortOrder
    event_type?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    location_url?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    hashtag?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    activated_at?: SortOrderInput | SortOrder
    expired_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    web_url?: SortOrderInput | SortOrder
    message_template?: SortOrderInput | SortOrder
    additional_info?: SortOrderInput | SortOrder
    location_detail?: SortOrderInput | SortOrder
    gift_infos?: gift_infosOrderByRelationAggregateInput
    guests?: guestsOrderByRelationAggregateInput
    images?: imagesOrderByRelationAggregateInput
    music?: musicOrderByWithRelationInput
    themes?: themesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    rsvps?: rsvpsOrderByRelationAggregateInput
    rundowns?: rundownsOrderByRelationAggregateInput
    stories?: storiesOrderByRelationAggregateInput
    videos?: videosOrderByRelationAggregateInput
  }

  export type invitationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: invitationsWhereInput | invitationsWhereInput[]
    OR?: invitationsWhereInput[]
    NOT?: invitationsWhereInput | invitationsWhereInput[]
    user_id?: IntNullableFilter<"invitations"> | number | null
    theme_id?: IntNullableFilter<"invitations"> | number | null
    music_id?: IntNullableFilter<"invitations"> | number | null
    phone_number?: StringNullableFilter<"invitations"> | string | null
    slug?: StringNullableFilter<"invitations"> | string | null
    event_title?: StringNullableFilter<"invitations"> | string | null
    host_one_name?: StringNullableFilter<"invitations"> | string | null
    host_two_name?: StringNullableFilter<"invitations"> | string | null
    host_one_nickname?: StringNullableFilter<"invitations"> | string | null
    host_two_nickname?: StringNullableFilter<"invitations"> | string | null
    host_one_additional_info?: StringNullableFilter<"invitations"> | string | null
    host_two_additional_info?: StringNullableFilter<"invitations"> | string | null
    host_one_social_media?: StringNullableFilter<"invitations"> | string | null
    host_two_social_media?: StringNullableFilter<"invitations"> | string | null
    event_date?: DateTimeNullableFilter<"invitations"> | Date | string | null
    event_type?: StringNullableFilter<"invitations"> | string | null
    location?: StringNullableFilter<"invitations"> | string | null
    location_url?: StringNullableFilter<"invitations"> | string | null
    message?: StringNullableFilter<"invitations"> | string | null
    hashtag?: StringNullableFilter<"invitations"> | string | null
    is_active?: BoolNullableFilter<"invitations"> | boolean | null
    activated_at?: DateTimeNullableFilter<"invitations"> | Date | string | null
    expired_at?: DateTimeNullableFilter<"invitations"> | Date | string | null
    created_at?: DateTimeNullableFilter<"invitations"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"invitations"> | Date | string | null
    web_url?: StringNullableFilter<"invitations"> | string | null
    message_template?: StringNullableFilter<"invitations"> | string | null
    additional_info?: StringNullableFilter<"invitations"> | string | null
    location_detail?: StringNullableFilter<"invitations"> | string | null
    gift_infos?: Gift_infosListRelationFilter
    guests?: GuestsListRelationFilter
    images?: ImagesListRelationFilter
    music?: XOR<MusicNullableScalarRelationFilter, musicWhereInput> | null
    themes?: XOR<ThemesNullableScalarRelationFilter, themesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    rsvps?: RsvpsListRelationFilter
    rundowns?: RundownsListRelationFilter
    stories?: StoriesListRelationFilter
    videos?: VideosListRelationFilter
  }, "id">

  export type invitationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    theme_id?: SortOrderInput | SortOrder
    music_id?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    event_title?: SortOrderInput | SortOrder
    host_one_name?: SortOrderInput | SortOrder
    host_two_name?: SortOrderInput | SortOrder
    host_one_nickname?: SortOrderInput | SortOrder
    host_two_nickname?: SortOrderInput | SortOrder
    host_one_additional_info?: SortOrderInput | SortOrder
    host_two_additional_info?: SortOrderInput | SortOrder
    host_one_social_media?: SortOrderInput | SortOrder
    host_two_social_media?: SortOrderInput | SortOrder
    event_date?: SortOrderInput | SortOrder
    event_type?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    location_url?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    hashtag?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    activated_at?: SortOrderInput | SortOrder
    expired_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    web_url?: SortOrderInput | SortOrder
    message_template?: SortOrderInput | SortOrder
    additional_info?: SortOrderInput | SortOrder
    location_detail?: SortOrderInput | SortOrder
    _count?: invitationsCountOrderByAggregateInput
    _avg?: invitationsAvgOrderByAggregateInput
    _max?: invitationsMaxOrderByAggregateInput
    _min?: invitationsMinOrderByAggregateInput
    _sum?: invitationsSumOrderByAggregateInput
  }

  export type invitationsScalarWhereWithAggregatesInput = {
    AND?: invitationsScalarWhereWithAggregatesInput | invitationsScalarWhereWithAggregatesInput[]
    OR?: invitationsScalarWhereWithAggregatesInput[]
    NOT?: invitationsScalarWhereWithAggregatesInput | invitationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invitations"> | number
    user_id?: IntNullableWithAggregatesFilter<"invitations"> | number | null
    theme_id?: IntNullableWithAggregatesFilter<"invitations"> | number | null
    music_id?: IntNullableWithAggregatesFilter<"invitations"> | number | null
    phone_number?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    slug?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    event_title?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    host_one_name?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    host_two_name?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    host_one_nickname?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    host_two_nickname?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    host_one_additional_info?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    host_two_additional_info?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    host_one_social_media?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    host_two_social_media?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    event_date?: DateTimeNullableWithAggregatesFilter<"invitations"> | Date | string | null
    event_type?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    location?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    location_url?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    message?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    hashtag?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"invitations"> | boolean | null
    activated_at?: DateTimeNullableWithAggregatesFilter<"invitations"> | Date | string | null
    expired_at?: DateTimeNullableWithAggregatesFilter<"invitations"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"invitations"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"invitations"> | Date | string | null
    web_url?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    message_template?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    additional_info?: StringNullableWithAggregatesFilter<"invitations"> | string | null
    location_detail?: StringNullableWithAggregatesFilter<"invitations"> | string | null
  }

  export type musicWhereInput = {
    AND?: musicWhereInput | musicWhereInput[]
    OR?: musicWhereInput[]
    NOT?: musicWhereInput | musicWhereInput[]
    id?: IntFilter<"music"> | number
    title?: StringNullableFilter<"music"> | string | null
    artist?: StringNullableFilter<"music"> | string | null
    url?: StringNullableFilter<"music"> | string | null
    created_at?: DateTimeNullableFilter<"music"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"music"> | Date | string | null
    invitations?: InvitationsListRelationFilter
  }

  export type musicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    artist?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    invitations?: invitationsOrderByRelationAggregateInput
  }

  export type musicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: musicWhereInput | musicWhereInput[]
    OR?: musicWhereInput[]
    NOT?: musicWhereInput | musicWhereInput[]
    title?: StringNullableFilter<"music"> | string | null
    artist?: StringNullableFilter<"music"> | string | null
    url?: StringNullableFilter<"music"> | string | null
    created_at?: DateTimeNullableFilter<"music"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"music"> | Date | string | null
    invitations?: InvitationsListRelationFilter
  }, "id">

  export type musicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    artist?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: musicCountOrderByAggregateInput
    _avg?: musicAvgOrderByAggregateInput
    _max?: musicMaxOrderByAggregateInput
    _min?: musicMinOrderByAggregateInput
    _sum?: musicSumOrderByAggregateInput
  }

  export type musicScalarWhereWithAggregatesInput = {
    AND?: musicScalarWhereWithAggregatesInput | musicScalarWhereWithAggregatesInput[]
    OR?: musicScalarWhereWithAggregatesInput[]
    NOT?: musicScalarWhereWithAggregatesInput | musicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"music"> | number
    title?: StringNullableWithAggregatesFilter<"music"> | string | null
    artist?: StringNullableWithAggregatesFilter<"music"> | string | null
    url?: StringNullableWithAggregatesFilter<"music"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"music"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"music"> | Date | string | null
  }

  export type rsvpsWhereInput = {
    AND?: rsvpsWhereInput | rsvpsWhereInput[]
    OR?: rsvpsWhereInput[]
    NOT?: rsvpsWhereInput | rsvpsWhereInput[]
    id?: IntFilter<"rsvps"> | number
    invitation_id?: IntNullableFilter<"rsvps"> | number | null
    guest_name?: StringNullableFilter<"rsvps"> | string | null
    message?: StringNullableFilter<"rsvps"> | string | null
    attendance_status?: BoolNullableFilter<"rsvps"> | boolean | null
    total_guest?: IntNullableFilter<"rsvps"> | number | null
    created_at?: DateTimeNullableFilter<"rsvps"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"rsvps"> | Date | string | null
    icon_color?: StringNullableFilter<"rsvps"> | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }

  export type rsvpsOrderByWithRelationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    guest_name?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    attendance_status?: SortOrderInput | SortOrder
    total_guest?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    icon_color?: SortOrderInput | SortOrder
    invitations?: invitationsOrderByWithRelationInput
  }

  export type rsvpsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rsvpsWhereInput | rsvpsWhereInput[]
    OR?: rsvpsWhereInput[]
    NOT?: rsvpsWhereInput | rsvpsWhereInput[]
    invitation_id?: IntNullableFilter<"rsvps"> | number | null
    guest_name?: StringNullableFilter<"rsvps"> | string | null
    message?: StringNullableFilter<"rsvps"> | string | null
    attendance_status?: BoolNullableFilter<"rsvps"> | boolean | null
    total_guest?: IntNullableFilter<"rsvps"> | number | null
    created_at?: DateTimeNullableFilter<"rsvps"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"rsvps"> | Date | string | null
    icon_color?: StringNullableFilter<"rsvps"> | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }, "id">

  export type rsvpsOrderByWithAggregationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    guest_name?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    attendance_status?: SortOrderInput | SortOrder
    total_guest?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    icon_color?: SortOrderInput | SortOrder
    _count?: rsvpsCountOrderByAggregateInput
    _avg?: rsvpsAvgOrderByAggregateInput
    _max?: rsvpsMaxOrderByAggregateInput
    _min?: rsvpsMinOrderByAggregateInput
    _sum?: rsvpsSumOrderByAggregateInput
  }

  export type rsvpsScalarWhereWithAggregatesInput = {
    AND?: rsvpsScalarWhereWithAggregatesInput | rsvpsScalarWhereWithAggregatesInput[]
    OR?: rsvpsScalarWhereWithAggregatesInput[]
    NOT?: rsvpsScalarWhereWithAggregatesInput | rsvpsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rsvps"> | number
    invitation_id?: IntNullableWithAggregatesFilter<"rsvps"> | number | null
    guest_name?: StringNullableWithAggregatesFilter<"rsvps"> | string | null
    message?: StringNullableWithAggregatesFilter<"rsvps"> | string | null
    attendance_status?: BoolNullableWithAggregatesFilter<"rsvps"> | boolean | null
    total_guest?: IntNullableWithAggregatesFilter<"rsvps"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"rsvps"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"rsvps"> | Date | string | null
    icon_color?: StringNullableWithAggregatesFilter<"rsvps"> | string | null
  }

  export type rundownsWhereInput = {
    AND?: rundownsWhereInput | rundownsWhereInput[]
    OR?: rundownsWhereInput[]
    NOT?: rundownsWhereInput | rundownsWhereInput[]
    id?: IntFilter<"rundowns"> | number
    invitation_id?: IntNullableFilter<"rundowns"> | number | null
    title?: StringNullableFilter<"rundowns"> | string | null
    location?: StringNullableFilter<"rundowns"> | string | null
    location_url?: StringNullableFilter<"rundowns"> | string | null
    date?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    start_time?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    end_time?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    time_zone?: StringNullableFilter<"rundowns"> | string | null
    description?: StringNullableFilter<"rundowns"> | string | null
    image_url?: StringNullableFilter<"rundowns"> | string | null
    order_number?: IntNullableFilter<"rundowns"> | number | null
    created_at?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    location_detail?: StringNullableFilter<"rundowns"> | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }

  export type rundownsOrderByWithRelationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    location_url?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    time_zone?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    order_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    location_detail?: SortOrderInput | SortOrder
    invitations?: invitationsOrderByWithRelationInput
  }

  export type rundownsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rundownsWhereInput | rundownsWhereInput[]
    OR?: rundownsWhereInput[]
    NOT?: rundownsWhereInput | rundownsWhereInput[]
    invitation_id?: IntNullableFilter<"rundowns"> | number | null
    title?: StringNullableFilter<"rundowns"> | string | null
    location?: StringNullableFilter<"rundowns"> | string | null
    location_url?: StringNullableFilter<"rundowns"> | string | null
    date?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    start_time?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    end_time?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    time_zone?: StringNullableFilter<"rundowns"> | string | null
    description?: StringNullableFilter<"rundowns"> | string | null
    image_url?: StringNullableFilter<"rundowns"> | string | null
    order_number?: IntNullableFilter<"rundowns"> | number | null
    created_at?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    location_detail?: StringNullableFilter<"rundowns"> | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }, "id">

  export type rundownsOrderByWithAggregationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    location_url?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    time_zone?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    order_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    location_detail?: SortOrderInput | SortOrder
    _count?: rundownsCountOrderByAggregateInput
    _avg?: rundownsAvgOrderByAggregateInput
    _max?: rundownsMaxOrderByAggregateInput
    _min?: rundownsMinOrderByAggregateInput
    _sum?: rundownsSumOrderByAggregateInput
  }

  export type rundownsScalarWhereWithAggregatesInput = {
    AND?: rundownsScalarWhereWithAggregatesInput | rundownsScalarWhereWithAggregatesInput[]
    OR?: rundownsScalarWhereWithAggregatesInput[]
    NOT?: rundownsScalarWhereWithAggregatesInput | rundownsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rundowns"> | number
    invitation_id?: IntNullableWithAggregatesFilter<"rundowns"> | number | null
    title?: StringNullableWithAggregatesFilter<"rundowns"> | string | null
    location?: StringNullableWithAggregatesFilter<"rundowns"> | string | null
    location_url?: StringNullableWithAggregatesFilter<"rundowns"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"rundowns"> | Date | string | null
    start_time?: DateTimeNullableWithAggregatesFilter<"rundowns"> | Date | string | null
    end_time?: DateTimeNullableWithAggregatesFilter<"rundowns"> | Date | string | null
    time_zone?: StringNullableWithAggregatesFilter<"rundowns"> | string | null
    description?: StringNullableWithAggregatesFilter<"rundowns"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"rundowns"> | string | null
    order_number?: IntNullableWithAggregatesFilter<"rundowns"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"rundowns"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"rundowns"> | Date | string | null
    location_detail?: StringNullableWithAggregatesFilter<"rundowns"> | string | null
  }

  export type storiesWhereInput = {
    AND?: storiesWhereInput | storiesWhereInput[]
    OR?: storiesWhereInput[]
    NOT?: storiesWhereInput | storiesWhereInput[]
    id?: IntFilter<"stories"> | number
    invitation_id?: IntNullableFilter<"stories"> | number | null
    title?: StringNullableFilter<"stories"> | string | null
    content?: StringNullableFilter<"stories"> | string | null
    image_url?: StringNullableFilter<"stories"> | string | null
    story_date?: DateTimeNullableFilter<"stories"> | Date | string | null
    order_number?: IntNullableFilter<"stories"> | number | null
    created_at?: DateTimeNullableFilter<"stories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"stories"> | Date | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }

  export type storiesOrderByWithRelationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    story_date?: SortOrderInput | SortOrder
    order_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    invitations?: invitationsOrderByWithRelationInput
  }

  export type storiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: storiesWhereInput | storiesWhereInput[]
    OR?: storiesWhereInput[]
    NOT?: storiesWhereInput | storiesWhereInput[]
    invitation_id?: IntNullableFilter<"stories"> | number | null
    title?: StringNullableFilter<"stories"> | string | null
    content?: StringNullableFilter<"stories"> | string | null
    image_url?: StringNullableFilter<"stories"> | string | null
    story_date?: DateTimeNullableFilter<"stories"> | Date | string | null
    order_number?: IntNullableFilter<"stories"> | number | null
    created_at?: DateTimeNullableFilter<"stories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"stories"> | Date | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }, "id">

  export type storiesOrderByWithAggregationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    story_date?: SortOrderInput | SortOrder
    order_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: storiesCountOrderByAggregateInput
    _avg?: storiesAvgOrderByAggregateInput
    _max?: storiesMaxOrderByAggregateInput
    _min?: storiesMinOrderByAggregateInput
    _sum?: storiesSumOrderByAggregateInput
  }

  export type storiesScalarWhereWithAggregatesInput = {
    AND?: storiesScalarWhereWithAggregatesInput | storiesScalarWhereWithAggregatesInput[]
    OR?: storiesScalarWhereWithAggregatesInput[]
    NOT?: storiesScalarWhereWithAggregatesInput | storiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stories"> | number
    invitation_id?: IntNullableWithAggregatesFilter<"stories"> | number | null
    title?: StringNullableWithAggregatesFilter<"stories"> | string | null
    content?: StringNullableWithAggregatesFilter<"stories"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"stories"> | string | null
    story_date?: DateTimeNullableWithAggregatesFilter<"stories"> | Date | string | null
    order_number?: IntNullableWithAggregatesFilter<"stories"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"stories"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"stories"> | Date | string | null
  }

  export type themesWhereInput = {
    AND?: themesWhereInput | themesWhereInput[]
    OR?: themesWhereInput[]
    NOT?: themesWhereInput | themesWhereInput[]
    id?: IntFilter<"themes"> | number
    name?: StringNullableFilter<"themes"> | string | null
    preview_image?: StringNullableFilter<"themes"> | string | null
    is_active?: BoolNullableFilter<"themes"> | boolean | null
    description?: StringNullableFilter<"themes"> | string | null
    created_at?: DateTimeNullableFilter<"themes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"themes"> | Date | string | null
    invitations?: InvitationsListRelationFilter
  }

  export type themesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    preview_image?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    invitations?: invitationsOrderByRelationAggregateInput
  }

  export type themesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: themesWhereInput | themesWhereInput[]
    OR?: themesWhereInput[]
    NOT?: themesWhereInput | themesWhereInput[]
    name?: StringNullableFilter<"themes"> | string | null
    preview_image?: StringNullableFilter<"themes"> | string | null
    is_active?: BoolNullableFilter<"themes"> | boolean | null
    description?: StringNullableFilter<"themes"> | string | null
    created_at?: DateTimeNullableFilter<"themes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"themes"> | Date | string | null
    invitations?: InvitationsListRelationFilter
  }, "id">

  export type themesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    preview_image?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: themesCountOrderByAggregateInput
    _avg?: themesAvgOrderByAggregateInput
    _max?: themesMaxOrderByAggregateInput
    _min?: themesMinOrderByAggregateInput
    _sum?: themesSumOrderByAggregateInput
  }

  export type themesScalarWhereWithAggregatesInput = {
    AND?: themesScalarWhereWithAggregatesInput | themesScalarWhereWithAggregatesInput[]
    OR?: themesScalarWhereWithAggregatesInput[]
    NOT?: themesScalarWhereWithAggregatesInput | themesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"themes"> | number
    name?: StringNullableWithAggregatesFilter<"themes"> | string | null
    preview_image?: StringNullableWithAggregatesFilter<"themes"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"themes"> | boolean | null
    description?: StringNullableWithAggregatesFilter<"themes"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"themes"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"themes"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    role?: StringNullableFilter<"users"> | string | null
    invitations?: InvitationsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    invitations?: invitationsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    role?: StringNullableFilter<"users"> | string | null
    invitations?: InvitationsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    remember_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type videosWhereInput = {
    AND?: videosWhereInput | videosWhereInput[]
    OR?: videosWhereInput[]
    NOT?: videosWhereInput | videosWhereInput[]
    id?: IntFilter<"videos"> | number
    invitation_id?: IntNullableFilter<"videos"> | number | null
    title?: StringNullableFilter<"videos"> | string | null
    description?: StringNullableFilter<"videos"> | string | null
    url?: StringNullableFilter<"videos"> | string | null
    thumbnail?: StringNullableFilter<"videos"> | string | null
    order_number?: IntNullableFilter<"videos"> | number | null
    created_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }

  export type videosOrderByWithRelationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    order_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    invitations?: invitationsOrderByWithRelationInput
  }

  export type videosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: videosWhereInput | videosWhereInput[]
    OR?: videosWhereInput[]
    NOT?: videosWhereInput | videosWhereInput[]
    invitation_id?: IntNullableFilter<"videos"> | number | null
    title?: StringNullableFilter<"videos"> | string | null
    description?: StringNullableFilter<"videos"> | string | null
    url?: StringNullableFilter<"videos"> | string | null
    thumbnail?: StringNullableFilter<"videos"> | string | null
    order_number?: IntNullableFilter<"videos"> | number | null
    created_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    invitations?: XOR<InvitationsNullableScalarRelationFilter, invitationsWhereInput> | null
  }, "id">

  export type videosOrderByWithAggregationInput = {
    id?: SortOrder
    invitation_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    order_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: videosCountOrderByAggregateInput
    _avg?: videosAvgOrderByAggregateInput
    _max?: videosMaxOrderByAggregateInput
    _min?: videosMinOrderByAggregateInput
    _sum?: videosSumOrderByAggregateInput
  }

  export type videosScalarWhereWithAggregatesInput = {
    AND?: videosScalarWhereWithAggregatesInput | videosScalarWhereWithAggregatesInput[]
    OR?: videosScalarWhereWithAggregatesInput[]
    NOT?: videosScalarWhereWithAggregatesInput | videosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"videos"> | number
    invitation_id?: IntNullableWithAggregatesFilter<"videos"> | number | null
    title?: StringNullableWithAggregatesFilter<"videos"> | string | null
    description?: StringNullableWithAggregatesFilter<"videos"> | string | null
    url?: StringNullableWithAggregatesFilter<"videos"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"videos"> | string | null
    order_number?: IntNullableWithAggregatesFilter<"videos"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"videos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"videos"> | Date | string | null
  }

  export type gift_infosCreateInput = {
    provider_name?: string | null
    account_number?: string | null
    account_holder?: string | null
    gift_delivery_address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    invitations?: invitationsCreateNestedOneWithoutGift_infosInput
  }

  export type gift_infosUncheckedCreateInput = {
    id?: number
    invitation_id?: number | null
    provider_name?: string | null
    account_number?: string | null
    account_holder?: string | null
    gift_delivery_address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type gift_infosUpdateInput = {
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    account_holder?: NullableStringFieldUpdateOperationsInput | string | null
    gift_delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitations?: invitationsUpdateOneWithoutGift_infosNestedInput
  }

  export type gift_infosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    account_holder?: NullableStringFieldUpdateOperationsInput | string | null
    gift_delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gift_infosCreateManyInput = {
    id?: number
    invitation_id?: number | null
    provider_name?: string | null
    account_number?: string | null
    account_holder?: string | null
    gift_delivery_address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type gift_infosUpdateManyMutationInput = {
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    account_holder?: NullableStringFieldUpdateOperationsInput | string | null
    gift_delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gift_infosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    account_holder?: NullableStringFieldUpdateOperationsInput | string | null
    gift_delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type guestsCreateInput = {
    name?: string | null
    phone_number?: string | null
    slug?: string | null
    is_attending?: boolean | null
    total_guest?: number | null
    notes?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    invitations?: invitationsCreateNestedOneWithoutGuestsInput
  }

  export type guestsUncheckedCreateInput = {
    id?: number
    invitation_id?: number | null
    name?: string | null
    phone_number?: string | null
    slug?: string | null
    is_attending?: boolean | null
    total_guest?: number | null
    notes?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type guestsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_attending?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitations?: invitationsUpdateOneWithoutGuestsNestedInput
  }

  export type guestsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_attending?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type guestsCreateManyInput = {
    id?: number
    invitation_id?: number | null
    name?: string | null
    phone_number?: string | null
    slug?: string | null
    is_attending?: boolean | null
    total_guest?: number | null
    notes?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type guestsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_attending?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type guestsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_attending?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type imagesCreateInput = {
    url?: string | null
    caption?: string | null
    type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_number?: string | null
    invitations?: invitationsCreateNestedOneWithoutImagesInput
  }

  export type imagesUncheckedCreateInput = {
    id?: number
    invitation_id?: number | null
    url?: string | null
    caption?: string | null
    type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_number?: string | null
  }

  export type imagesUpdateInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    invitations?: invitationsUpdateOneWithoutImagesNestedInput
  }

  export type imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imagesCreateManyInput = {
    id?: number
    invitation_id?: number | null
    url?: string | null
    caption?: string | null
    type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_number?: string | null
  }

  export type imagesUpdateManyMutationInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invitationsCreateInput = {
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosCreateNestedManyWithoutInvitationsInput
    guests?: guestsCreateNestedManyWithoutInvitationsInput
    images?: imagesCreateNestedManyWithoutInvitationsInput
    music?: musicCreateNestedOneWithoutInvitationsInput
    themes?: themesCreateNestedOneWithoutInvitationsInput
    users?: usersCreateNestedOneWithoutInvitationsInput
    rsvps?: rsvpsCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsCreateNestedManyWithoutInvitationsInput
    stories?: storiesCreateNestedManyWithoutInvitationsInput
    videos?: videosCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    theme_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosUncheckedCreateNestedManyWithoutInvitationsInput
    guests?: guestsUncheckedCreateNestedManyWithoutInvitationsInput
    images?: imagesUncheckedCreateNestedManyWithoutInvitationsInput
    rsvps?: rsvpsUncheckedCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsUncheckedCreateNestedManyWithoutInvitationsInput
    stories?: storiesUncheckedCreateNestedManyWithoutInvitationsInput
    videos?: videosUncheckedCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsUpdateInput = {
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUpdateManyWithoutInvitationsNestedInput
    images?: imagesUpdateManyWithoutInvitationsNestedInput
    music?: musicUpdateOneWithoutInvitationsNestedInput
    themes?: themesUpdateOneWithoutInvitationsNestedInput
    users?: usersUpdateOneWithoutInvitationsNestedInput
    rsvps?: rsvpsUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUpdateManyWithoutInvitationsNestedInput
    videos?: videosUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUncheckedUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUncheckedUpdateManyWithoutInvitationsNestedInput
    images?: imagesUncheckedUpdateManyWithoutInvitationsNestedInput
    rsvps?: rsvpsUncheckedUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUncheckedUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUncheckedUpdateManyWithoutInvitationsNestedInput
    videos?: videosUncheckedUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsCreateManyInput = {
    id?: number
    user_id?: number | null
    theme_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
  }

  export type invitationsUpdateManyMutationInput = {
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invitationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type musicCreateInput = {
    title?: string | null
    artist?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    invitations?: invitationsCreateNestedManyWithoutMusicInput
  }

  export type musicUncheckedCreateInput = {
    id?: number
    title?: string | null
    artist?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    invitations?: invitationsUncheckedCreateNestedManyWithoutMusicInput
  }

  export type musicUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitations?: invitationsUpdateManyWithoutMusicNestedInput
  }

  export type musicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitations?: invitationsUncheckedUpdateManyWithoutMusicNestedInput
  }

  export type musicCreateManyInput = {
    id?: number
    title?: string | null
    artist?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type musicUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type musicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rsvpsCreateInput = {
    guest_name?: string | null
    message?: string | null
    attendance_status?: boolean | null
    total_guest?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    icon_color?: string | null
    invitations?: invitationsCreateNestedOneWithoutRsvpsInput
  }

  export type rsvpsUncheckedCreateInput = {
    id?: number
    invitation_id?: number | null
    guest_name?: string | null
    message?: string | null
    attendance_status?: boolean | null
    total_guest?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    icon_color?: string | null
  }

  export type rsvpsUpdateInput = {
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attendance_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon_color?: NullableStringFieldUpdateOperationsInput | string | null
    invitations?: invitationsUpdateOneWithoutRsvpsNestedInput
  }

  export type rsvpsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attendance_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon_color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rsvpsCreateManyInput = {
    id?: number
    invitation_id?: number | null
    guest_name?: string | null
    message?: string | null
    attendance_status?: boolean | null
    total_guest?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    icon_color?: string | null
  }

  export type rsvpsUpdateManyMutationInput = {
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attendance_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon_color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rsvpsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attendance_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon_color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rundownsCreateInput = {
    title?: string | null
    location?: string | null
    location_url?: string | null
    date?: Date | string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    time_zone?: string | null
    description?: string | null
    image_url?: string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    location_detail?: string | null
    invitations?: invitationsCreateNestedOneWithoutRundownsInput
  }

  export type rundownsUncheckedCreateInput = {
    id?: number
    invitation_id?: number | null
    title?: string | null
    location?: string | null
    location_url?: string | null
    date?: Date | string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    time_zone?: string | null
    description?: string | null
    image_url?: string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    location_detail?: string | null
  }

  export type rundownsUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    invitations?: invitationsUpdateOneWithoutRundownsNestedInput
  }

  export type rundownsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rundownsCreateManyInput = {
    id?: number
    invitation_id?: number | null
    title?: string | null
    location?: string | null
    location_url?: string | null
    date?: Date | string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    time_zone?: string | null
    description?: string | null
    image_url?: string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    location_detail?: string | null
  }

  export type rundownsUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rundownsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storiesCreateInput = {
    title?: string | null
    content?: string | null
    image_url?: string | null
    story_date?: Date | string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    invitations?: invitationsCreateNestedOneWithoutStoriesInput
  }

  export type storiesUncheckedCreateInput = {
    id?: number
    invitation_id?: number | null
    title?: string | null
    content?: string | null
    image_url?: string | null
    story_date?: Date | string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type storiesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    story_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitations?: invitationsUpdateOneWithoutStoriesNestedInput
  }

  export type storiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    story_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type storiesCreateManyInput = {
    id?: number
    invitation_id?: number | null
    title?: string | null
    content?: string | null
    image_url?: string | null
    story_date?: Date | string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type storiesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    story_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type storiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    story_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type themesCreateInput = {
    name?: string | null
    preview_image?: string | null
    is_active?: boolean | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    invitations?: invitationsCreateNestedManyWithoutThemesInput
  }

  export type themesUncheckedCreateInput = {
    id?: number
    name?: string | null
    preview_image?: string | null
    is_active?: boolean | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    invitations?: invitationsUncheckedCreateNestedManyWithoutThemesInput
  }

  export type themesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preview_image?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitations?: invitationsUpdateManyWithoutThemesNestedInput
  }

  export type themesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preview_image?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitations?: invitationsUncheckedUpdateManyWithoutThemesNestedInput
  }

  export type themesCreateManyInput = {
    id?: number
    name?: string | null
    preview_image?: string | null
    is_active?: boolean | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type themesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preview_image?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type themesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preview_image?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    name?: string | null
    email?: string | null
    password?: string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role?: string | null
    invitations?: invitationsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role?: string | null
    invitations?: invitationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    invitations?: invitationsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    invitations?: invitationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role?: string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type videosCreateInput = {
    title?: string | null
    description?: string | null
    url?: string | null
    thumbnail?: string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    invitations?: invitationsCreateNestedOneWithoutVideosInput
  }

  export type videosUncheckedCreateInput = {
    id?: number
    invitation_id?: number | null
    title?: string | null
    description?: string | null
    url?: string | null
    thumbnail?: string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type videosUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitations?: invitationsUpdateOneWithoutVideosNestedInput
  }

  export type videosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type videosCreateManyInput = {
    id?: number
    invitation_id?: number | null
    title?: string | null
    description?: string | null
    url?: string | null
    thumbnail?: string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type videosUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type videosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invitation_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type InvitationsNullableScalarRelationFilter = {
    is?: invitationsWhereInput | null
    isNot?: invitationsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type gift_infosCountOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    provider_name?: SortOrder
    account_number?: SortOrder
    account_holder?: SortOrder
    gift_delivery_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type gift_infosAvgOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
  }

  export type gift_infosMaxOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    provider_name?: SortOrder
    account_number?: SortOrder
    account_holder?: SortOrder
    gift_delivery_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type gift_infosMinOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    provider_name?: SortOrder
    account_number?: SortOrder
    account_holder?: SortOrder
    gift_delivery_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type gift_infosSumOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type guestsCountOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    slug?: SortOrder
    is_attending?: SortOrder
    total_guest?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type guestsAvgOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    total_guest?: SortOrder
  }

  export type guestsMaxOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    slug?: SortOrder
    is_attending?: SortOrder
    total_guest?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type guestsMinOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    slug?: SortOrder
    is_attending?: SortOrder
    total_guest?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type guestsSumOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    total_guest?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type imagesCountOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_number?: SortOrder
  }

  export type imagesAvgOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
  }

  export type imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_number?: SortOrder
  }

  export type imagesMinOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order_number?: SortOrder
  }

  export type imagesSumOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
  }

  export type Gift_infosListRelationFilter = {
    every?: gift_infosWhereInput
    some?: gift_infosWhereInput
    none?: gift_infosWhereInput
  }

  export type GuestsListRelationFilter = {
    every?: guestsWhereInput
    some?: guestsWhereInput
    none?: guestsWhereInput
  }

  export type ImagesListRelationFilter = {
    every?: imagesWhereInput
    some?: imagesWhereInput
    none?: imagesWhereInput
  }

  export type MusicNullableScalarRelationFilter = {
    is?: musicWhereInput | null
    isNot?: musicWhereInput | null
  }

  export type ThemesNullableScalarRelationFilter = {
    is?: themesWhereInput | null
    isNot?: themesWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type RsvpsListRelationFilter = {
    every?: rsvpsWhereInput
    some?: rsvpsWhereInput
    none?: rsvpsWhereInput
  }

  export type RundownsListRelationFilter = {
    every?: rundownsWhereInput
    some?: rundownsWhereInput
    none?: rundownsWhereInput
  }

  export type StoriesListRelationFilter = {
    every?: storiesWhereInput
    some?: storiesWhereInput
    none?: storiesWhereInput
  }

  export type VideosListRelationFilter = {
    every?: videosWhereInput
    some?: videosWhereInput
    none?: videosWhereInput
  }

  export type gift_infosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type guestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rsvpsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rundownsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type storiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type videosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type invitationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    theme_id?: SortOrder
    music_id?: SortOrder
    phone_number?: SortOrder
    slug?: SortOrder
    event_title?: SortOrder
    host_one_name?: SortOrder
    host_two_name?: SortOrder
    host_one_nickname?: SortOrder
    host_two_nickname?: SortOrder
    host_one_additional_info?: SortOrder
    host_two_additional_info?: SortOrder
    host_one_social_media?: SortOrder
    host_two_social_media?: SortOrder
    event_date?: SortOrder
    event_type?: SortOrder
    location?: SortOrder
    location_url?: SortOrder
    message?: SortOrder
    hashtag?: SortOrder
    is_active?: SortOrder
    activated_at?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    web_url?: SortOrder
    message_template?: SortOrder
    additional_info?: SortOrder
    location_detail?: SortOrder
  }

  export type invitationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    theme_id?: SortOrder
    music_id?: SortOrder
  }

  export type invitationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    theme_id?: SortOrder
    music_id?: SortOrder
    phone_number?: SortOrder
    slug?: SortOrder
    event_title?: SortOrder
    host_one_name?: SortOrder
    host_two_name?: SortOrder
    host_one_nickname?: SortOrder
    host_two_nickname?: SortOrder
    host_one_additional_info?: SortOrder
    host_two_additional_info?: SortOrder
    host_one_social_media?: SortOrder
    host_two_social_media?: SortOrder
    event_date?: SortOrder
    event_type?: SortOrder
    location?: SortOrder
    location_url?: SortOrder
    message?: SortOrder
    hashtag?: SortOrder
    is_active?: SortOrder
    activated_at?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    web_url?: SortOrder
    message_template?: SortOrder
    additional_info?: SortOrder
    location_detail?: SortOrder
  }

  export type invitationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    theme_id?: SortOrder
    music_id?: SortOrder
    phone_number?: SortOrder
    slug?: SortOrder
    event_title?: SortOrder
    host_one_name?: SortOrder
    host_two_name?: SortOrder
    host_one_nickname?: SortOrder
    host_two_nickname?: SortOrder
    host_one_additional_info?: SortOrder
    host_two_additional_info?: SortOrder
    host_one_social_media?: SortOrder
    host_two_social_media?: SortOrder
    event_date?: SortOrder
    event_type?: SortOrder
    location?: SortOrder
    location_url?: SortOrder
    message?: SortOrder
    hashtag?: SortOrder
    is_active?: SortOrder
    activated_at?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    web_url?: SortOrder
    message_template?: SortOrder
    additional_info?: SortOrder
    location_detail?: SortOrder
  }

  export type invitationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    theme_id?: SortOrder
    music_id?: SortOrder
  }

  export type InvitationsListRelationFilter = {
    every?: invitationsWhereInput
    some?: invitationsWhereInput
    none?: invitationsWhereInput
  }

  export type invitationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type musicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type musicAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type musicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type musicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type musicSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rsvpsCountOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    guest_name?: SortOrder
    message?: SortOrder
    attendance_status?: SortOrder
    total_guest?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    icon_color?: SortOrder
  }

  export type rsvpsAvgOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    total_guest?: SortOrder
  }

  export type rsvpsMaxOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    guest_name?: SortOrder
    message?: SortOrder
    attendance_status?: SortOrder
    total_guest?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    icon_color?: SortOrder
  }

  export type rsvpsMinOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    guest_name?: SortOrder
    message?: SortOrder
    attendance_status?: SortOrder
    total_guest?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    icon_color?: SortOrder
  }

  export type rsvpsSumOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    total_guest?: SortOrder
  }

  export type rundownsCountOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    location_url?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    time_zone?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    order_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    location_detail?: SortOrder
  }

  export type rundownsAvgOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    order_number?: SortOrder
  }

  export type rundownsMaxOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    location_url?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    time_zone?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    order_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    location_detail?: SortOrder
  }

  export type rundownsMinOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    location_url?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    time_zone?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    order_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    location_detail?: SortOrder
  }

  export type rundownsSumOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    order_number?: SortOrder
  }

  export type storiesCountOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    story_date?: SortOrder
    order_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type storiesAvgOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    order_number?: SortOrder
  }

  export type storiesMaxOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    story_date?: SortOrder
    order_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type storiesMinOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    story_date?: SortOrder
    order_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type storiesSumOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    order_number?: SortOrder
  }

  export type themesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    preview_image?: SortOrder
    is_active?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type themesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type themesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    preview_image?: SortOrder
    is_active?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type themesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    preview_image?: SortOrder
    is_active?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type themesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type videosCountOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    order_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type videosAvgOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    order_number?: SortOrder
  }

  export type videosMaxOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    order_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type videosMinOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    order_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type videosSumOrderByAggregateInput = {
    id?: SortOrder
    invitation_id?: SortOrder
    order_number?: SortOrder
  }

  export type invitationsCreateNestedOneWithoutGift_infosInput = {
    create?: XOR<invitationsCreateWithoutGift_infosInput, invitationsUncheckedCreateWithoutGift_infosInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutGift_infosInput
    connect?: invitationsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type invitationsUpdateOneWithoutGift_infosNestedInput = {
    create?: XOR<invitationsCreateWithoutGift_infosInput, invitationsUncheckedCreateWithoutGift_infosInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutGift_infosInput
    upsert?: invitationsUpsertWithoutGift_infosInput
    disconnect?: invitationsWhereInput | boolean
    delete?: invitationsWhereInput | boolean
    connect?: invitationsWhereUniqueInput
    update?: XOR<XOR<invitationsUpdateToOneWithWhereWithoutGift_infosInput, invitationsUpdateWithoutGift_infosInput>, invitationsUncheckedUpdateWithoutGift_infosInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type invitationsCreateNestedOneWithoutGuestsInput = {
    create?: XOR<invitationsCreateWithoutGuestsInput, invitationsUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutGuestsInput
    connect?: invitationsWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type invitationsUpdateOneWithoutGuestsNestedInput = {
    create?: XOR<invitationsCreateWithoutGuestsInput, invitationsUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutGuestsInput
    upsert?: invitationsUpsertWithoutGuestsInput
    disconnect?: invitationsWhereInput | boolean
    delete?: invitationsWhereInput | boolean
    connect?: invitationsWhereUniqueInput
    update?: XOR<XOR<invitationsUpdateToOneWithWhereWithoutGuestsInput, invitationsUpdateWithoutGuestsInput>, invitationsUncheckedUpdateWithoutGuestsInput>
  }

  export type invitationsCreateNestedOneWithoutImagesInput = {
    create?: XOR<invitationsCreateWithoutImagesInput, invitationsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutImagesInput
    connect?: invitationsWhereUniqueInput
  }

  export type invitationsUpdateOneWithoutImagesNestedInput = {
    create?: XOR<invitationsCreateWithoutImagesInput, invitationsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutImagesInput
    upsert?: invitationsUpsertWithoutImagesInput
    disconnect?: invitationsWhereInput | boolean
    delete?: invitationsWhereInput | boolean
    connect?: invitationsWhereUniqueInput
    update?: XOR<XOR<invitationsUpdateToOneWithWhereWithoutImagesInput, invitationsUpdateWithoutImagesInput>, invitationsUncheckedUpdateWithoutImagesInput>
  }

  export type gift_infosCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<gift_infosCreateWithoutInvitationsInput, gift_infosUncheckedCreateWithoutInvitationsInput> | gift_infosCreateWithoutInvitationsInput[] | gift_infosUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: gift_infosCreateOrConnectWithoutInvitationsInput | gift_infosCreateOrConnectWithoutInvitationsInput[]
    createMany?: gift_infosCreateManyInvitationsInputEnvelope
    connect?: gift_infosWhereUniqueInput | gift_infosWhereUniqueInput[]
  }

  export type guestsCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<guestsCreateWithoutInvitationsInput, guestsUncheckedCreateWithoutInvitationsInput> | guestsCreateWithoutInvitationsInput[] | guestsUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: guestsCreateOrConnectWithoutInvitationsInput | guestsCreateOrConnectWithoutInvitationsInput[]
    createMany?: guestsCreateManyInvitationsInputEnvelope
    connect?: guestsWhereUniqueInput | guestsWhereUniqueInput[]
  }

  export type imagesCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<imagesCreateWithoutInvitationsInput, imagesUncheckedCreateWithoutInvitationsInput> | imagesCreateWithoutInvitationsInput[] | imagesUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutInvitationsInput | imagesCreateOrConnectWithoutInvitationsInput[]
    createMany?: imagesCreateManyInvitationsInputEnvelope
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
  }

  export type musicCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<musicCreateWithoutInvitationsInput, musicUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: musicCreateOrConnectWithoutInvitationsInput
    connect?: musicWhereUniqueInput
  }

  export type themesCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<themesCreateWithoutInvitationsInput, themesUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: themesCreateOrConnectWithoutInvitationsInput
    connect?: themesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<usersCreateWithoutInvitationsInput, usersUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvitationsInput
    connect?: usersWhereUniqueInput
  }

  export type rsvpsCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<rsvpsCreateWithoutInvitationsInput, rsvpsUncheckedCreateWithoutInvitationsInput> | rsvpsCreateWithoutInvitationsInput[] | rsvpsUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: rsvpsCreateOrConnectWithoutInvitationsInput | rsvpsCreateOrConnectWithoutInvitationsInput[]
    createMany?: rsvpsCreateManyInvitationsInputEnvelope
    connect?: rsvpsWhereUniqueInput | rsvpsWhereUniqueInput[]
  }

  export type rundownsCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<rundownsCreateWithoutInvitationsInput, rundownsUncheckedCreateWithoutInvitationsInput> | rundownsCreateWithoutInvitationsInput[] | rundownsUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: rundownsCreateOrConnectWithoutInvitationsInput | rundownsCreateOrConnectWithoutInvitationsInput[]
    createMany?: rundownsCreateManyInvitationsInputEnvelope
    connect?: rundownsWhereUniqueInput | rundownsWhereUniqueInput[]
  }

  export type storiesCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<storiesCreateWithoutInvitationsInput, storiesUncheckedCreateWithoutInvitationsInput> | storiesCreateWithoutInvitationsInput[] | storiesUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: storiesCreateOrConnectWithoutInvitationsInput | storiesCreateOrConnectWithoutInvitationsInput[]
    createMany?: storiesCreateManyInvitationsInputEnvelope
    connect?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
  }

  export type videosCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<videosCreateWithoutInvitationsInput, videosUncheckedCreateWithoutInvitationsInput> | videosCreateWithoutInvitationsInput[] | videosUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: videosCreateOrConnectWithoutInvitationsInput | videosCreateOrConnectWithoutInvitationsInput[]
    createMany?: videosCreateManyInvitationsInputEnvelope
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
  }

  export type gift_infosUncheckedCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<gift_infosCreateWithoutInvitationsInput, gift_infosUncheckedCreateWithoutInvitationsInput> | gift_infosCreateWithoutInvitationsInput[] | gift_infosUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: gift_infosCreateOrConnectWithoutInvitationsInput | gift_infosCreateOrConnectWithoutInvitationsInput[]
    createMany?: gift_infosCreateManyInvitationsInputEnvelope
    connect?: gift_infosWhereUniqueInput | gift_infosWhereUniqueInput[]
  }

  export type guestsUncheckedCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<guestsCreateWithoutInvitationsInput, guestsUncheckedCreateWithoutInvitationsInput> | guestsCreateWithoutInvitationsInput[] | guestsUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: guestsCreateOrConnectWithoutInvitationsInput | guestsCreateOrConnectWithoutInvitationsInput[]
    createMany?: guestsCreateManyInvitationsInputEnvelope
    connect?: guestsWhereUniqueInput | guestsWhereUniqueInput[]
  }

  export type imagesUncheckedCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<imagesCreateWithoutInvitationsInput, imagesUncheckedCreateWithoutInvitationsInput> | imagesCreateWithoutInvitationsInput[] | imagesUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutInvitationsInput | imagesCreateOrConnectWithoutInvitationsInput[]
    createMany?: imagesCreateManyInvitationsInputEnvelope
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
  }

  export type rsvpsUncheckedCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<rsvpsCreateWithoutInvitationsInput, rsvpsUncheckedCreateWithoutInvitationsInput> | rsvpsCreateWithoutInvitationsInput[] | rsvpsUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: rsvpsCreateOrConnectWithoutInvitationsInput | rsvpsCreateOrConnectWithoutInvitationsInput[]
    createMany?: rsvpsCreateManyInvitationsInputEnvelope
    connect?: rsvpsWhereUniqueInput | rsvpsWhereUniqueInput[]
  }

  export type rundownsUncheckedCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<rundownsCreateWithoutInvitationsInput, rundownsUncheckedCreateWithoutInvitationsInput> | rundownsCreateWithoutInvitationsInput[] | rundownsUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: rundownsCreateOrConnectWithoutInvitationsInput | rundownsCreateOrConnectWithoutInvitationsInput[]
    createMany?: rundownsCreateManyInvitationsInputEnvelope
    connect?: rundownsWhereUniqueInput | rundownsWhereUniqueInput[]
  }

  export type storiesUncheckedCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<storiesCreateWithoutInvitationsInput, storiesUncheckedCreateWithoutInvitationsInput> | storiesCreateWithoutInvitationsInput[] | storiesUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: storiesCreateOrConnectWithoutInvitationsInput | storiesCreateOrConnectWithoutInvitationsInput[]
    createMany?: storiesCreateManyInvitationsInputEnvelope
    connect?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
  }

  export type videosUncheckedCreateNestedManyWithoutInvitationsInput = {
    create?: XOR<videosCreateWithoutInvitationsInput, videosUncheckedCreateWithoutInvitationsInput> | videosCreateWithoutInvitationsInput[] | videosUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: videosCreateOrConnectWithoutInvitationsInput | videosCreateOrConnectWithoutInvitationsInput[]
    createMany?: videosCreateManyInvitationsInputEnvelope
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
  }

  export type gift_infosUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<gift_infosCreateWithoutInvitationsInput, gift_infosUncheckedCreateWithoutInvitationsInput> | gift_infosCreateWithoutInvitationsInput[] | gift_infosUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: gift_infosCreateOrConnectWithoutInvitationsInput | gift_infosCreateOrConnectWithoutInvitationsInput[]
    upsert?: gift_infosUpsertWithWhereUniqueWithoutInvitationsInput | gift_infosUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: gift_infosCreateManyInvitationsInputEnvelope
    set?: gift_infosWhereUniqueInput | gift_infosWhereUniqueInput[]
    disconnect?: gift_infosWhereUniqueInput | gift_infosWhereUniqueInput[]
    delete?: gift_infosWhereUniqueInput | gift_infosWhereUniqueInput[]
    connect?: gift_infosWhereUniqueInput | gift_infosWhereUniqueInput[]
    update?: gift_infosUpdateWithWhereUniqueWithoutInvitationsInput | gift_infosUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: gift_infosUpdateManyWithWhereWithoutInvitationsInput | gift_infosUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: gift_infosScalarWhereInput | gift_infosScalarWhereInput[]
  }

  export type guestsUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<guestsCreateWithoutInvitationsInput, guestsUncheckedCreateWithoutInvitationsInput> | guestsCreateWithoutInvitationsInput[] | guestsUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: guestsCreateOrConnectWithoutInvitationsInput | guestsCreateOrConnectWithoutInvitationsInput[]
    upsert?: guestsUpsertWithWhereUniqueWithoutInvitationsInput | guestsUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: guestsCreateManyInvitationsInputEnvelope
    set?: guestsWhereUniqueInput | guestsWhereUniqueInput[]
    disconnect?: guestsWhereUniqueInput | guestsWhereUniqueInput[]
    delete?: guestsWhereUniqueInput | guestsWhereUniqueInput[]
    connect?: guestsWhereUniqueInput | guestsWhereUniqueInput[]
    update?: guestsUpdateWithWhereUniqueWithoutInvitationsInput | guestsUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: guestsUpdateManyWithWhereWithoutInvitationsInput | guestsUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: guestsScalarWhereInput | guestsScalarWhereInput[]
  }

  export type imagesUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<imagesCreateWithoutInvitationsInput, imagesUncheckedCreateWithoutInvitationsInput> | imagesCreateWithoutInvitationsInput[] | imagesUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutInvitationsInput | imagesCreateOrConnectWithoutInvitationsInput[]
    upsert?: imagesUpsertWithWhereUniqueWithoutInvitationsInput | imagesUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: imagesCreateManyInvitationsInputEnvelope
    set?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    disconnect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    delete?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    update?: imagesUpdateWithWhereUniqueWithoutInvitationsInput | imagesUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: imagesUpdateManyWithWhereWithoutInvitationsInput | imagesUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: imagesScalarWhereInput | imagesScalarWhereInput[]
  }

  export type musicUpdateOneWithoutInvitationsNestedInput = {
    create?: XOR<musicCreateWithoutInvitationsInput, musicUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: musicCreateOrConnectWithoutInvitationsInput
    upsert?: musicUpsertWithoutInvitationsInput
    disconnect?: musicWhereInput | boolean
    delete?: musicWhereInput | boolean
    connect?: musicWhereUniqueInput
    update?: XOR<XOR<musicUpdateToOneWithWhereWithoutInvitationsInput, musicUpdateWithoutInvitationsInput>, musicUncheckedUpdateWithoutInvitationsInput>
  }

  export type themesUpdateOneWithoutInvitationsNestedInput = {
    create?: XOR<themesCreateWithoutInvitationsInput, themesUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: themesCreateOrConnectWithoutInvitationsInput
    upsert?: themesUpsertWithoutInvitationsInput
    disconnect?: themesWhereInput | boolean
    delete?: themesWhereInput | boolean
    connect?: themesWhereUniqueInput
    update?: XOR<XOR<themesUpdateToOneWithWhereWithoutInvitationsInput, themesUpdateWithoutInvitationsInput>, themesUncheckedUpdateWithoutInvitationsInput>
  }

  export type usersUpdateOneWithoutInvitationsNestedInput = {
    create?: XOR<usersCreateWithoutInvitationsInput, usersUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvitationsInput
    upsert?: usersUpsertWithoutInvitationsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInvitationsInput, usersUpdateWithoutInvitationsInput>, usersUncheckedUpdateWithoutInvitationsInput>
  }

  export type rsvpsUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<rsvpsCreateWithoutInvitationsInput, rsvpsUncheckedCreateWithoutInvitationsInput> | rsvpsCreateWithoutInvitationsInput[] | rsvpsUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: rsvpsCreateOrConnectWithoutInvitationsInput | rsvpsCreateOrConnectWithoutInvitationsInput[]
    upsert?: rsvpsUpsertWithWhereUniqueWithoutInvitationsInput | rsvpsUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: rsvpsCreateManyInvitationsInputEnvelope
    set?: rsvpsWhereUniqueInput | rsvpsWhereUniqueInput[]
    disconnect?: rsvpsWhereUniqueInput | rsvpsWhereUniqueInput[]
    delete?: rsvpsWhereUniqueInput | rsvpsWhereUniqueInput[]
    connect?: rsvpsWhereUniqueInput | rsvpsWhereUniqueInput[]
    update?: rsvpsUpdateWithWhereUniqueWithoutInvitationsInput | rsvpsUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: rsvpsUpdateManyWithWhereWithoutInvitationsInput | rsvpsUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: rsvpsScalarWhereInput | rsvpsScalarWhereInput[]
  }

  export type rundownsUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<rundownsCreateWithoutInvitationsInput, rundownsUncheckedCreateWithoutInvitationsInput> | rundownsCreateWithoutInvitationsInput[] | rundownsUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: rundownsCreateOrConnectWithoutInvitationsInput | rundownsCreateOrConnectWithoutInvitationsInput[]
    upsert?: rundownsUpsertWithWhereUniqueWithoutInvitationsInput | rundownsUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: rundownsCreateManyInvitationsInputEnvelope
    set?: rundownsWhereUniqueInput | rundownsWhereUniqueInput[]
    disconnect?: rundownsWhereUniqueInput | rundownsWhereUniqueInput[]
    delete?: rundownsWhereUniqueInput | rundownsWhereUniqueInput[]
    connect?: rundownsWhereUniqueInput | rundownsWhereUniqueInput[]
    update?: rundownsUpdateWithWhereUniqueWithoutInvitationsInput | rundownsUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: rundownsUpdateManyWithWhereWithoutInvitationsInput | rundownsUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: rundownsScalarWhereInput | rundownsScalarWhereInput[]
  }

  export type storiesUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<storiesCreateWithoutInvitationsInput, storiesUncheckedCreateWithoutInvitationsInput> | storiesCreateWithoutInvitationsInput[] | storiesUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: storiesCreateOrConnectWithoutInvitationsInput | storiesCreateOrConnectWithoutInvitationsInput[]
    upsert?: storiesUpsertWithWhereUniqueWithoutInvitationsInput | storiesUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: storiesCreateManyInvitationsInputEnvelope
    set?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    disconnect?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    delete?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    connect?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    update?: storiesUpdateWithWhereUniqueWithoutInvitationsInput | storiesUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: storiesUpdateManyWithWhereWithoutInvitationsInput | storiesUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: storiesScalarWhereInput | storiesScalarWhereInput[]
  }

  export type videosUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<videosCreateWithoutInvitationsInput, videosUncheckedCreateWithoutInvitationsInput> | videosCreateWithoutInvitationsInput[] | videosUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: videosCreateOrConnectWithoutInvitationsInput | videosCreateOrConnectWithoutInvitationsInput[]
    upsert?: videosUpsertWithWhereUniqueWithoutInvitationsInput | videosUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: videosCreateManyInvitationsInputEnvelope
    set?: videosWhereUniqueInput | videosWhereUniqueInput[]
    disconnect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    delete?: videosWhereUniqueInput | videosWhereUniqueInput[]
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    update?: videosUpdateWithWhereUniqueWithoutInvitationsInput | videosUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: videosUpdateManyWithWhereWithoutInvitationsInput | videosUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: videosScalarWhereInput | videosScalarWhereInput[]
  }

  export type gift_infosUncheckedUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<gift_infosCreateWithoutInvitationsInput, gift_infosUncheckedCreateWithoutInvitationsInput> | gift_infosCreateWithoutInvitationsInput[] | gift_infosUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: gift_infosCreateOrConnectWithoutInvitationsInput | gift_infosCreateOrConnectWithoutInvitationsInput[]
    upsert?: gift_infosUpsertWithWhereUniqueWithoutInvitationsInput | gift_infosUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: gift_infosCreateManyInvitationsInputEnvelope
    set?: gift_infosWhereUniqueInput | gift_infosWhereUniqueInput[]
    disconnect?: gift_infosWhereUniqueInput | gift_infosWhereUniqueInput[]
    delete?: gift_infosWhereUniqueInput | gift_infosWhereUniqueInput[]
    connect?: gift_infosWhereUniqueInput | gift_infosWhereUniqueInput[]
    update?: gift_infosUpdateWithWhereUniqueWithoutInvitationsInput | gift_infosUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: gift_infosUpdateManyWithWhereWithoutInvitationsInput | gift_infosUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: gift_infosScalarWhereInput | gift_infosScalarWhereInput[]
  }

  export type guestsUncheckedUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<guestsCreateWithoutInvitationsInput, guestsUncheckedCreateWithoutInvitationsInput> | guestsCreateWithoutInvitationsInput[] | guestsUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: guestsCreateOrConnectWithoutInvitationsInput | guestsCreateOrConnectWithoutInvitationsInput[]
    upsert?: guestsUpsertWithWhereUniqueWithoutInvitationsInput | guestsUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: guestsCreateManyInvitationsInputEnvelope
    set?: guestsWhereUniqueInput | guestsWhereUniqueInput[]
    disconnect?: guestsWhereUniqueInput | guestsWhereUniqueInput[]
    delete?: guestsWhereUniqueInput | guestsWhereUniqueInput[]
    connect?: guestsWhereUniqueInput | guestsWhereUniqueInput[]
    update?: guestsUpdateWithWhereUniqueWithoutInvitationsInput | guestsUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: guestsUpdateManyWithWhereWithoutInvitationsInput | guestsUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: guestsScalarWhereInput | guestsScalarWhereInput[]
  }

  export type imagesUncheckedUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<imagesCreateWithoutInvitationsInput, imagesUncheckedCreateWithoutInvitationsInput> | imagesCreateWithoutInvitationsInput[] | imagesUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutInvitationsInput | imagesCreateOrConnectWithoutInvitationsInput[]
    upsert?: imagesUpsertWithWhereUniqueWithoutInvitationsInput | imagesUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: imagesCreateManyInvitationsInputEnvelope
    set?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    disconnect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    delete?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    update?: imagesUpdateWithWhereUniqueWithoutInvitationsInput | imagesUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: imagesUpdateManyWithWhereWithoutInvitationsInput | imagesUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: imagesScalarWhereInput | imagesScalarWhereInput[]
  }

  export type rsvpsUncheckedUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<rsvpsCreateWithoutInvitationsInput, rsvpsUncheckedCreateWithoutInvitationsInput> | rsvpsCreateWithoutInvitationsInput[] | rsvpsUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: rsvpsCreateOrConnectWithoutInvitationsInput | rsvpsCreateOrConnectWithoutInvitationsInput[]
    upsert?: rsvpsUpsertWithWhereUniqueWithoutInvitationsInput | rsvpsUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: rsvpsCreateManyInvitationsInputEnvelope
    set?: rsvpsWhereUniqueInput | rsvpsWhereUniqueInput[]
    disconnect?: rsvpsWhereUniqueInput | rsvpsWhereUniqueInput[]
    delete?: rsvpsWhereUniqueInput | rsvpsWhereUniqueInput[]
    connect?: rsvpsWhereUniqueInput | rsvpsWhereUniqueInput[]
    update?: rsvpsUpdateWithWhereUniqueWithoutInvitationsInput | rsvpsUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: rsvpsUpdateManyWithWhereWithoutInvitationsInput | rsvpsUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: rsvpsScalarWhereInput | rsvpsScalarWhereInput[]
  }

  export type rundownsUncheckedUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<rundownsCreateWithoutInvitationsInput, rundownsUncheckedCreateWithoutInvitationsInput> | rundownsCreateWithoutInvitationsInput[] | rundownsUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: rundownsCreateOrConnectWithoutInvitationsInput | rundownsCreateOrConnectWithoutInvitationsInput[]
    upsert?: rundownsUpsertWithWhereUniqueWithoutInvitationsInput | rundownsUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: rundownsCreateManyInvitationsInputEnvelope
    set?: rundownsWhereUniqueInput | rundownsWhereUniqueInput[]
    disconnect?: rundownsWhereUniqueInput | rundownsWhereUniqueInput[]
    delete?: rundownsWhereUniqueInput | rundownsWhereUniqueInput[]
    connect?: rundownsWhereUniqueInput | rundownsWhereUniqueInput[]
    update?: rundownsUpdateWithWhereUniqueWithoutInvitationsInput | rundownsUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: rundownsUpdateManyWithWhereWithoutInvitationsInput | rundownsUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: rundownsScalarWhereInput | rundownsScalarWhereInput[]
  }

  export type storiesUncheckedUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<storiesCreateWithoutInvitationsInput, storiesUncheckedCreateWithoutInvitationsInput> | storiesCreateWithoutInvitationsInput[] | storiesUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: storiesCreateOrConnectWithoutInvitationsInput | storiesCreateOrConnectWithoutInvitationsInput[]
    upsert?: storiesUpsertWithWhereUniqueWithoutInvitationsInput | storiesUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: storiesCreateManyInvitationsInputEnvelope
    set?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    disconnect?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    delete?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    connect?: storiesWhereUniqueInput | storiesWhereUniqueInput[]
    update?: storiesUpdateWithWhereUniqueWithoutInvitationsInput | storiesUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: storiesUpdateManyWithWhereWithoutInvitationsInput | storiesUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: storiesScalarWhereInput | storiesScalarWhereInput[]
  }

  export type videosUncheckedUpdateManyWithoutInvitationsNestedInput = {
    create?: XOR<videosCreateWithoutInvitationsInput, videosUncheckedCreateWithoutInvitationsInput> | videosCreateWithoutInvitationsInput[] | videosUncheckedCreateWithoutInvitationsInput[]
    connectOrCreate?: videosCreateOrConnectWithoutInvitationsInput | videosCreateOrConnectWithoutInvitationsInput[]
    upsert?: videosUpsertWithWhereUniqueWithoutInvitationsInput | videosUpsertWithWhereUniqueWithoutInvitationsInput[]
    createMany?: videosCreateManyInvitationsInputEnvelope
    set?: videosWhereUniqueInput | videosWhereUniqueInput[]
    disconnect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    delete?: videosWhereUniqueInput | videosWhereUniqueInput[]
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    update?: videosUpdateWithWhereUniqueWithoutInvitationsInput | videosUpdateWithWhereUniqueWithoutInvitationsInput[]
    updateMany?: videosUpdateManyWithWhereWithoutInvitationsInput | videosUpdateManyWithWhereWithoutInvitationsInput[]
    deleteMany?: videosScalarWhereInput | videosScalarWhereInput[]
  }

  export type invitationsCreateNestedManyWithoutMusicInput = {
    create?: XOR<invitationsCreateWithoutMusicInput, invitationsUncheckedCreateWithoutMusicInput> | invitationsCreateWithoutMusicInput[] | invitationsUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: invitationsCreateOrConnectWithoutMusicInput | invitationsCreateOrConnectWithoutMusicInput[]
    createMany?: invitationsCreateManyMusicInputEnvelope
    connect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
  }

  export type invitationsUncheckedCreateNestedManyWithoutMusicInput = {
    create?: XOR<invitationsCreateWithoutMusicInput, invitationsUncheckedCreateWithoutMusicInput> | invitationsCreateWithoutMusicInput[] | invitationsUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: invitationsCreateOrConnectWithoutMusicInput | invitationsCreateOrConnectWithoutMusicInput[]
    createMany?: invitationsCreateManyMusicInputEnvelope
    connect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
  }

  export type invitationsUpdateManyWithoutMusicNestedInput = {
    create?: XOR<invitationsCreateWithoutMusicInput, invitationsUncheckedCreateWithoutMusicInput> | invitationsCreateWithoutMusicInput[] | invitationsUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: invitationsCreateOrConnectWithoutMusicInput | invitationsCreateOrConnectWithoutMusicInput[]
    upsert?: invitationsUpsertWithWhereUniqueWithoutMusicInput | invitationsUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: invitationsCreateManyMusicInputEnvelope
    set?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    disconnect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    delete?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    connect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    update?: invitationsUpdateWithWhereUniqueWithoutMusicInput | invitationsUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: invitationsUpdateManyWithWhereWithoutMusicInput | invitationsUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: invitationsScalarWhereInput | invitationsScalarWhereInput[]
  }

  export type invitationsUncheckedUpdateManyWithoutMusicNestedInput = {
    create?: XOR<invitationsCreateWithoutMusicInput, invitationsUncheckedCreateWithoutMusicInput> | invitationsCreateWithoutMusicInput[] | invitationsUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: invitationsCreateOrConnectWithoutMusicInput | invitationsCreateOrConnectWithoutMusicInput[]
    upsert?: invitationsUpsertWithWhereUniqueWithoutMusicInput | invitationsUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: invitationsCreateManyMusicInputEnvelope
    set?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    disconnect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    delete?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    connect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    update?: invitationsUpdateWithWhereUniqueWithoutMusicInput | invitationsUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: invitationsUpdateManyWithWhereWithoutMusicInput | invitationsUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: invitationsScalarWhereInput | invitationsScalarWhereInput[]
  }

  export type invitationsCreateNestedOneWithoutRsvpsInput = {
    create?: XOR<invitationsCreateWithoutRsvpsInput, invitationsUncheckedCreateWithoutRsvpsInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutRsvpsInput
    connect?: invitationsWhereUniqueInput
  }

  export type invitationsUpdateOneWithoutRsvpsNestedInput = {
    create?: XOR<invitationsCreateWithoutRsvpsInput, invitationsUncheckedCreateWithoutRsvpsInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutRsvpsInput
    upsert?: invitationsUpsertWithoutRsvpsInput
    disconnect?: invitationsWhereInput | boolean
    delete?: invitationsWhereInput | boolean
    connect?: invitationsWhereUniqueInput
    update?: XOR<XOR<invitationsUpdateToOneWithWhereWithoutRsvpsInput, invitationsUpdateWithoutRsvpsInput>, invitationsUncheckedUpdateWithoutRsvpsInput>
  }

  export type invitationsCreateNestedOneWithoutRundownsInput = {
    create?: XOR<invitationsCreateWithoutRundownsInput, invitationsUncheckedCreateWithoutRundownsInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutRundownsInput
    connect?: invitationsWhereUniqueInput
  }

  export type invitationsUpdateOneWithoutRundownsNestedInput = {
    create?: XOR<invitationsCreateWithoutRundownsInput, invitationsUncheckedCreateWithoutRundownsInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutRundownsInput
    upsert?: invitationsUpsertWithoutRundownsInput
    disconnect?: invitationsWhereInput | boolean
    delete?: invitationsWhereInput | boolean
    connect?: invitationsWhereUniqueInput
    update?: XOR<XOR<invitationsUpdateToOneWithWhereWithoutRundownsInput, invitationsUpdateWithoutRundownsInput>, invitationsUncheckedUpdateWithoutRundownsInput>
  }

  export type invitationsCreateNestedOneWithoutStoriesInput = {
    create?: XOR<invitationsCreateWithoutStoriesInput, invitationsUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutStoriesInput
    connect?: invitationsWhereUniqueInput
  }

  export type invitationsUpdateOneWithoutStoriesNestedInput = {
    create?: XOR<invitationsCreateWithoutStoriesInput, invitationsUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutStoriesInput
    upsert?: invitationsUpsertWithoutStoriesInput
    disconnect?: invitationsWhereInput | boolean
    delete?: invitationsWhereInput | boolean
    connect?: invitationsWhereUniqueInput
    update?: XOR<XOR<invitationsUpdateToOneWithWhereWithoutStoriesInput, invitationsUpdateWithoutStoriesInput>, invitationsUncheckedUpdateWithoutStoriesInput>
  }

  export type invitationsCreateNestedManyWithoutThemesInput = {
    create?: XOR<invitationsCreateWithoutThemesInput, invitationsUncheckedCreateWithoutThemesInput> | invitationsCreateWithoutThemesInput[] | invitationsUncheckedCreateWithoutThemesInput[]
    connectOrCreate?: invitationsCreateOrConnectWithoutThemesInput | invitationsCreateOrConnectWithoutThemesInput[]
    createMany?: invitationsCreateManyThemesInputEnvelope
    connect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
  }

  export type invitationsUncheckedCreateNestedManyWithoutThemesInput = {
    create?: XOR<invitationsCreateWithoutThemesInput, invitationsUncheckedCreateWithoutThemesInput> | invitationsCreateWithoutThemesInput[] | invitationsUncheckedCreateWithoutThemesInput[]
    connectOrCreate?: invitationsCreateOrConnectWithoutThemesInput | invitationsCreateOrConnectWithoutThemesInput[]
    createMany?: invitationsCreateManyThemesInputEnvelope
    connect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
  }

  export type invitationsUpdateManyWithoutThemesNestedInput = {
    create?: XOR<invitationsCreateWithoutThemesInput, invitationsUncheckedCreateWithoutThemesInput> | invitationsCreateWithoutThemesInput[] | invitationsUncheckedCreateWithoutThemesInput[]
    connectOrCreate?: invitationsCreateOrConnectWithoutThemesInput | invitationsCreateOrConnectWithoutThemesInput[]
    upsert?: invitationsUpsertWithWhereUniqueWithoutThemesInput | invitationsUpsertWithWhereUniqueWithoutThemesInput[]
    createMany?: invitationsCreateManyThemesInputEnvelope
    set?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    disconnect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    delete?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    connect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    update?: invitationsUpdateWithWhereUniqueWithoutThemesInput | invitationsUpdateWithWhereUniqueWithoutThemesInput[]
    updateMany?: invitationsUpdateManyWithWhereWithoutThemesInput | invitationsUpdateManyWithWhereWithoutThemesInput[]
    deleteMany?: invitationsScalarWhereInput | invitationsScalarWhereInput[]
  }

  export type invitationsUncheckedUpdateManyWithoutThemesNestedInput = {
    create?: XOR<invitationsCreateWithoutThemesInput, invitationsUncheckedCreateWithoutThemesInput> | invitationsCreateWithoutThemesInput[] | invitationsUncheckedCreateWithoutThemesInput[]
    connectOrCreate?: invitationsCreateOrConnectWithoutThemesInput | invitationsCreateOrConnectWithoutThemesInput[]
    upsert?: invitationsUpsertWithWhereUniqueWithoutThemesInput | invitationsUpsertWithWhereUniqueWithoutThemesInput[]
    createMany?: invitationsCreateManyThemesInputEnvelope
    set?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    disconnect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    delete?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    connect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    update?: invitationsUpdateWithWhereUniqueWithoutThemesInput | invitationsUpdateWithWhereUniqueWithoutThemesInput[]
    updateMany?: invitationsUpdateManyWithWhereWithoutThemesInput | invitationsUpdateManyWithWhereWithoutThemesInput[]
    deleteMany?: invitationsScalarWhereInput | invitationsScalarWhereInput[]
  }

  export type invitationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<invitationsCreateWithoutUsersInput, invitationsUncheckedCreateWithoutUsersInput> | invitationsCreateWithoutUsersInput[] | invitationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invitationsCreateOrConnectWithoutUsersInput | invitationsCreateOrConnectWithoutUsersInput[]
    createMany?: invitationsCreateManyUsersInputEnvelope
    connect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
  }

  export type invitationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<invitationsCreateWithoutUsersInput, invitationsUncheckedCreateWithoutUsersInput> | invitationsCreateWithoutUsersInput[] | invitationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invitationsCreateOrConnectWithoutUsersInput | invitationsCreateOrConnectWithoutUsersInput[]
    createMany?: invitationsCreateManyUsersInputEnvelope
    connect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
  }

  export type invitationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<invitationsCreateWithoutUsersInput, invitationsUncheckedCreateWithoutUsersInput> | invitationsCreateWithoutUsersInput[] | invitationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invitationsCreateOrConnectWithoutUsersInput | invitationsCreateOrConnectWithoutUsersInput[]
    upsert?: invitationsUpsertWithWhereUniqueWithoutUsersInput | invitationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: invitationsCreateManyUsersInputEnvelope
    set?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    disconnect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    delete?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    connect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    update?: invitationsUpdateWithWhereUniqueWithoutUsersInput | invitationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: invitationsUpdateManyWithWhereWithoutUsersInput | invitationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: invitationsScalarWhereInput | invitationsScalarWhereInput[]
  }

  export type invitationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<invitationsCreateWithoutUsersInput, invitationsUncheckedCreateWithoutUsersInput> | invitationsCreateWithoutUsersInput[] | invitationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invitationsCreateOrConnectWithoutUsersInput | invitationsCreateOrConnectWithoutUsersInput[]
    upsert?: invitationsUpsertWithWhereUniqueWithoutUsersInput | invitationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: invitationsCreateManyUsersInputEnvelope
    set?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    disconnect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    delete?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    connect?: invitationsWhereUniqueInput | invitationsWhereUniqueInput[]
    update?: invitationsUpdateWithWhereUniqueWithoutUsersInput | invitationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: invitationsUpdateManyWithWhereWithoutUsersInput | invitationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: invitationsScalarWhereInput | invitationsScalarWhereInput[]
  }

  export type invitationsCreateNestedOneWithoutVideosInput = {
    create?: XOR<invitationsCreateWithoutVideosInput, invitationsUncheckedCreateWithoutVideosInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutVideosInput
    connect?: invitationsWhereUniqueInput
  }

  export type invitationsUpdateOneWithoutVideosNestedInput = {
    create?: XOR<invitationsCreateWithoutVideosInput, invitationsUncheckedCreateWithoutVideosInput>
    connectOrCreate?: invitationsCreateOrConnectWithoutVideosInput
    upsert?: invitationsUpsertWithoutVideosInput
    disconnect?: invitationsWhereInput | boolean
    delete?: invitationsWhereInput | boolean
    connect?: invitationsWhereUniqueInput
    update?: XOR<XOR<invitationsUpdateToOneWithWhereWithoutVideosInput, invitationsUpdateWithoutVideosInput>, invitationsUncheckedUpdateWithoutVideosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type invitationsCreateWithoutGift_infosInput = {
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    guests?: guestsCreateNestedManyWithoutInvitationsInput
    images?: imagesCreateNestedManyWithoutInvitationsInput
    music?: musicCreateNestedOneWithoutInvitationsInput
    themes?: themesCreateNestedOneWithoutInvitationsInput
    users?: usersCreateNestedOneWithoutInvitationsInput
    rsvps?: rsvpsCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsCreateNestedManyWithoutInvitationsInput
    stories?: storiesCreateNestedManyWithoutInvitationsInput
    videos?: videosCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsUncheckedCreateWithoutGift_infosInput = {
    id?: number
    user_id?: number | null
    theme_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    guests?: guestsUncheckedCreateNestedManyWithoutInvitationsInput
    images?: imagesUncheckedCreateNestedManyWithoutInvitationsInput
    rsvps?: rsvpsUncheckedCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsUncheckedCreateNestedManyWithoutInvitationsInput
    stories?: storiesUncheckedCreateNestedManyWithoutInvitationsInput
    videos?: videosUncheckedCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsCreateOrConnectWithoutGift_infosInput = {
    where: invitationsWhereUniqueInput
    create: XOR<invitationsCreateWithoutGift_infosInput, invitationsUncheckedCreateWithoutGift_infosInput>
  }

  export type invitationsUpsertWithoutGift_infosInput = {
    update: XOR<invitationsUpdateWithoutGift_infosInput, invitationsUncheckedUpdateWithoutGift_infosInput>
    create: XOR<invitationsCreateWithoutGift_infosInput, invitationsUncheckedCreateWithoutGift_infosInput>
    where?: invitationsWhereInput
  }

  export type invitationsUpdateToOneWithWhereWithoutGift_infosInput = {
    where?: invitationsWhereInput
    data: XOR<invitationsUpdateWithoutGift_infosInput, invitationsUncheckedUpdateWithoutGift_infosInput>
  }

  export type invitationsUpdateWithoutGift_infosInput = {
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: guestsUpdateManyWithoutInvitationsNestedInput
    images?: imagesUpdateManyWithoutInvitationsNestedInput
    music?: musicUpdateOneWithoutInvitationsNestedInput
    themes?: themesUpdateOneWithoutInvitationsNestedInput
    users?: usersUpdateOneWithoutInvitationsNestedInput
    rsvps?: rsvpsUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUpdateManyWithoutInvitationsNestedInput
    videos?: videosUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateWithoutGift_infosInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    guests?: guestsUncheckedUpdateManyWithoutInvitationsNestedInput
    images?: imagesUncheckedUpdateManyWithoutInvitationsNestedInput
    rsvps?: rsvpsUncheckedUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUncheckedUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUncheckedUpdateManyWithoutInvitationsNestedInput
    videos?: videosUncheckedUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsCreateWithoutGuestsInput = {
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosCreateNestedManyWithoutInvitationsInput
    images?: imagesCreateNestedManyWithoutInvitationsInput
    music?: musicCreateNestedOneWithoutInvitationsInput
    themes?: themesCreateNestedOneWithoutInvitationsInput
    users?: usersCreateNestedOneWithoutInvitationsInput
    rsvps?: rsvpsCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsCreateNestedManyWithoutInvitationsInput
    stories?: storiesCreateNestedManyWithoutInvitationsInput
    videos?: videosCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsUncheckedCreateWithoutGuestsInput = {
    id?: number
    user_id?: number | null
    theme_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosUncheckedCreateNestedManyWithoutInvitationsInput
    images?: imagesUncheckedCreateNestedManyWithoutInvitationsInput
    rsvps?: rsvpsUncheckedCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsUncheckedCreateNestedManyWithoutInvitationsInput
    stories?: storiesUncheckedCreateNestedManyWithoutInvitationsInput
    videos?: videosUncheckedCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsCreateOrConnectWithoutGuestsInput = {
    where: invitationsWhereUniqueInput
    create: XOR<invitationsCreateWithoutGuestsInput, invitationsUncheckedCreateWithoutGuestsInput>
  }

  export type invitationsUpsertWithoutGuestsInput = {
    update: XOR<invitationsUpdateWithoutGuestsInput, invitationsUncheckedUpdateWithoutGuestsInput>
    create: XOR<invitationsCreateWithoutGuestsInput, invitationsUncheckedCreateWithoutGuestsInput>
    where?: invitationsWhereInput
  }

  export type invitationsUpdateToOneWithWhereWithoutGuestsInput = {
    where?: invitationsWhereInput
    data: XOR<invitationsUpdateWithoutGuestsInput, invitationsUncheckedUpdateWithoutGuestsInput>
  }

  export type invitationsUpdateWithoutGuestsInput = {
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUpdateManyWithoutInvitationsNestedInput
    images?: imagesUpdateManyWithoutInvitationsNestedInput
    music?: musicUpdateOneWithoutInvitationsNestedInput
    themes?: themesUpdateOneWithoutInvitationsNestedInput
    users?: usersUpdateOneWithoutInvitationsNestedInput
    rsvps?: rsvpsUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUpdateManyWithoutInvitationsNestedInput
    videos?: videosUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateWithoutGuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUncheckedUpdateManyWithoutInvitationsNestedInput
    images?: imagesUncheckedUpdateManyWithoutInvitationsNestedInput
    rsvps?: rsvpsUncheckedUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUncheckedUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUncheckedUpdateManyWithoutInvitationsNestedInput
    videos?: videosUncheckedUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsCreateWithoutImagesInput = {
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosCreateNestedManyWithoutInvitationsInput
    guests?: guestsCreateNestedManyWithoutInvitationsInput
    music?: musicCreateNestedOneWithoutInvitationsInput
    themes?: themesCreateNestedOneWithoutInvitationsInput
    users?: usersCreateNestedOneWithoutInvitationsInput
    rsvps?: rsvpsCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsCreateNestedManyWithoutInvitationsInput
    stories?: storiesCreateNestedManyWithoutInvitationsInput
    videos?: videosCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsUncheckedCreateWithoutImagesInput = {
    id?: number
    user_id?: number | null
    theme_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosUncheckedCreateNestedManyWithoutInvitationsInput
    guests?: guestsUncheckedCreateNestedManyWithoutInvitationsInput
    rsvps?: rsvpsUncheckedCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsUncheckedCreateNestedManyWithoutInvitationsInput
    stories?: storiesUncheckedCreateNestedManyWithoutInvitationsInput
    videos?: videosUncheckedCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsCreateOrConnectWithoutImagesInput = {
    where: invitationsWhereUniqueInput
    create: XOR<invitationsCreateWithoutImagesInput, invitationsUncheckedCreateWithoutImagesInput>
  }

  export type invitationsUpsertWithoutImagesInput = {
    update: XOR<invitationsUpdateWithoutImagesInput, invitationsUncheckedUpdateWithoutImagesInput>
    create: XOR<invitationsCreateWithoutImagesInput, invitationsUncheckedCreateWithoutImagesInput>
    where?: invitationsWhereInput
  }

  export type invitationsUpdateToOneWithWhereWithoutImagesInput = {
    where?: invitationsWhereInput
    data: XOR<invitationsUpdateWithoutImagesInput, invitationsUncheckedUpdateWithoutImagesInput>
  }

  export type invitationsUpdateWithoutImagesInput = {
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUpdateManyWithoutInvitationsNestedInput
    music?: musicUpdateOneWithoutInvitationsNestedInput
    themes?: themesUpdateOneWithoutInvitationsNestedInput
    users?: usersUpdateOneWithoutInvitationsNestedInput
    rsvps?: rsvpsUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUpdateManyWithoutInvitationsNestedInput
    videos?: videosUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUncheckedUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUncheckedUpdateManyWithoutInvitationsNestedInput
    rsvps?: rsvpsUncheckedUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUncheckedUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUncheckedUpdateManyWithoutInvitationsNestedInput
    videos?: videosUncheckedUpdateManyWithoutInvitationsNestedInput
  }

  export type gift_infosCreateWithoutInvitationsInput = {
    provider_name?: string | null
    account_number?: string | null
    account_holder?: string | null
    gift_delivery_address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type gift_infosUncheckedCreateWithoutInvitationsInput = {
    id?: number
    provider_name?: string | null
    account_number?: string | null
    account_holder?: string | null
    gift_delivery_address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type gift_infosCreateOrConnectWithoutInvitationsInput = {
    where: gift_infosWhereUniqueInput
    create: XOR<gift_infosCreateWithoutInvitationsInput, gift_infosUncheckedCreateWithoutInvitationsInput>
  }

  export type gift_infosCreateManyInvitationsInputEnvelope = {
    data: gift_infosCreateManyInvitationsInput | gift_infosCreateManyInvitationsInput[]
    skipDuplicates?: boolean
  }

  export type guestsCreateWithoutInvitationsInput = {
    name?: string | null
    phone_number?: string | null
    slug?: string | null
    is_attending?: boolean | null
    total_guest?: number | null
    notes?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type guestsUncheckedCreateWithoutInvitationsInput = {
    id?: number
    name?: string | null
    phone_number?: string | null
    slug?: string | null
    is_attending?: boolean | null
    total_guest?: number | null
    notes?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type guestsCreateOrConnectWithoutInvitationsInput = {
    where: guestsWhereUniqueInput
    create: XOR<guestsCreateWithoutInvitationsInput, guestsUncheckedCreateWithoutInvitationsInput>
  }

  export type guestsCreateManyInvitationsInputEnvelope = {
    data: guestsCreateManyInvitationsInput | guestsCreateManyInvitationsInput[]
    skipDuplicates?: boolean
  }

  export type imagesCreateWithoutInvitationsInput = {
    url?: string | null
    caption?: string | null
    type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_number?: string | null
  }

  export type imagesUncheckedCreateWithoutInvitationsInput = {
    id?: number
    url?: string | null
    caption?: string | null
    type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_number?: string | null
  }

  export type imagesCreateOrConnectWithoutInvitationsInput = {
    where: imagesWhereUniqueInput
    create: XOR<imagesCreateWithoutInvitationsInput, imagesUncheckedCreateWithoutInvitationsInput>
  }

  export type imagesCreateManyInvitationsInputEnvelope = {
    data: imagesCreateManyInvitationsInput | imagesCreateManyInvitationsInput[]
    skipDuplicates?: boolean
  }

  export type musicCreateWithoutInvitationsInput = {
    title?: string | null
    artist?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type musicUncheckedCreateWithoutInvitationsInput = {
    id?: number
    title?: string | null
    artist?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type musicCreateOrConnectWithoutInvitationsInput = {
    where: musicWhereUniqueInput
    create: XOR<musicCreateWithoutInvitationsInput, musicUncheckedCreateWithoutInvitationsInput>
  }

  export type themesCreateWithoutInvitationsInput = {
    name?: string | null
    preview_image?: string | null
    is_active?: boolean | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type themesUncheckedCreateWithoutInvitationsInput = {
    id?: number
    name?: string | null
    preview_image?: string | null
    is_active?: boolean | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type themesCreateOrConnectWithoutInvitationsInput = {
    where: themesWhereUniqueInput
    create: XOR<themesCreateWithoutInvitationsInput, themesUncheckedCreateWithoutInvitationsInput>
  }

  export type usersCreateWithoutInvitationsInput = {
    name?: string | null
    email?: string | null
    password?: string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role?: string | null
  }

  export type usersUncheckedCreateWithoutInvitationsInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    role?: string | null
  }

  export type usersCreateOrConnectWithoutInvitationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInvitationsInput, usersUncheckedCreateWithoutInvitationsInput>
  }

  export type rsvpsCreateWithoutInvitationsInput = {
    guest_name?: string | null
    message?: string | null
    attendance_status?: boolean | null
    total_guest?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    icon_color?: string | null
  }

  export type rsvpsUncheckedCreateWithoutInvitationsInput = {
    id?: number
    guest_name?: string | null
    message?: string | null
    attendance_status?: boolean | null
    total_guest?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    icon_color?: string | null
  }

  export type rsvpsCreateOrConnectWithoutInvitationsInput = {
    where: rsvpsWhereUniqueInput
    create: XOR<rsvpsCreateWithoutInvitationsInput, rsvpsUncheckedCreateWithoutInvitationsInput>
  }

  export type rsvpsCreateManyInvitationsInputEnvelope = {
    data: rsvpsCreateManyInvitationsInput | rsvpsCreateManyInvitationsInput[]
    skipDuplicates?: boolean
  }

  export type rundownsCreateWithoutInvitationsInput = {
    title?: string | null
    location?: string | null
    location_url?: string | null
    date?: Date | string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    time_zone?: string | null
    description?: string | null
    image_url?: string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    location_detail?: string | null
  }

  export type rundownsUncheckedCreateWithoutInvitationsInput = {
    id?: number
    title?: string | null
    location?: string | null
    location_url?: string | null
    date?: Date | string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    time_zone?: string | null
    description?: string | null
    image_url?: string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    location_detail?: string | null
  }

  export type rundownsCreateOrConnectWithoutInvitationsInput = {
    where: rundownsWhereUniqueInput
    create: XOR<rundownsCreateWithoutInvitationsInput, rundownsUncheckedCreateWithoutInvitationsInput>
  }

  export type rundownsCreateManyInvitationsInputEnvelope = {
    data: rundownsCreateManyInvitationsInput | rundownsCreateManyInvitationsInput[]
    skipDuplicates?: boolean
  }

  export type storiesCreateWithoutInvitationsInput = {
    title?: string | null
    content?: string | null
    image_url?: string | null
    story_date?: Date | string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type storiesUncheckedCreateWithoutInvitationsInput = {
    id?: number
    title?: string | null
    content?: string | null
    image_url?: string | null
    story_date?: Date | string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type storiesCreateOrConnectWithoutInvitationsInput = {
    where: storiesWhereUniqueInput
    create: XOR<storiesCreateWithoutInvitationsInput, storiesUncheckedCreateWithoutInvitationsInput>
  }

  export type storiesCreateManyInvitationsInputEnvelope = {
    data: storiesCreateManyInvitationsInput | storiesCreateManyInvitationsInput[]
    skipDuplicates?: boolean
  }

  export type videosCreateWithoutInvitationsInput = {
    title?: string | null
    description?: string | null
    url?: string | null
    thumbnail?: string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type videosUncheckedCreateWithoutInvitationsInput = {
    id?: number
    title?: string | null
    description?: string | null
    url?: string | null
    thumbnail?: string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type videosCreateOrConnectWithoutInvitationsInput = {
    where: videosWhereUniqueInput
    create: XOR<videosCreateWithoutInvitationsInput, videosUncheckedCreateWithoutInvitationsInput>
  }

  export type videosCreateManyInvitationsInputEnvelope = {
    data: videosCreateManyInvitationsInput | videosCreateManyInvitationsInput[]
    skipDuplicates?: boolean
  }

  export type gift_infosUpsertWithWhereUniqueWithoutInvitationsInput = {
    where: gift_infosWhereUniqueInput
    update: XOR<gift_infosUpdateWithoutInvitationsInput, gift_infosUncheckedUpdateWithoutInvitationsInput>
    create: XOR<gift_infosCreateWithoutInvitationsInput, gift_infosUncheckedCreateWithoutInvitationsInput>
  }

  export type gift_infosUpdateWithWhereUniqueWithoutInvitationsInput = {
    where: gift_infosWhereUniqueInput
    data: XOR<gift_infosUpdateWithoutInvitationsInput, gift_infosUncheckedUpdateWithoutInvitationsInput>
  }

  export type gift_infosUpdateManyWithWhereWithoutInvitationsInput = {
    where: gift_infosScalarWhereInput
    data: XOR<gift_infosUpdateManyMutationInput, gift_infosUncheckedUpdateManyWithoutInvitationsInput>
  }

  export type gift_infosScalarWhereInput = {
    AND?: gift_infosScalarWhereInput | gift_infosScalarWhereInput[]
    OR?: gift_infosScalarWhereInput[]
    NOT?: gift_infosScalarWhereInput | gift_infosScalarWhereInput[]
    id?: IntFilter<"gift_infos"> | number
    invitation_id?: IntNullableFilter<"gift_infos"> | number | null
    provider_name?: StringNullableFilter<"gift_infos"> | string | null
    account_number?: StringNullableFilter<"gift_infos"> | string | null
    account_holder?: StringNullableFilter<"gift_infos"> | string | null
    gift_delivery_address?: StringNullableFilter<"gift_infos"> | string | null
    created_at?: DateTimeNullableFilter<"gift_infos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"gift_infos"> | Date | string | null
  }

  export type guestsUpsertWithWhereUniqueWithoutInvitationsInput = {
    where: guestsWhereUniqueInput
    update: XOR<guestsUpdateWithoutInvitationsInput, guestsUncheckedUpdateWithoutInvitationsInput>
    create: XOR<guestsCreateWithoutInvitationsInput, guestsUncheckedCreateWithoutInvitationsInput>
  }

  export type guestsUpdateWithWhereUniqueWithoutInvitationsInput = {
    where: guestsWhereUniqueInput
    data: XOR<guestsUpdateWithoutInvitationsInput, guestsUncheckedUpdateWithoutInvitationsInput>
  }

  export type guestsUpdateManyWithWhereWithoutInvitationsInput = {
    where: guestsScalarWhereInput
    data: XOR<guestsUpdateManyMutationInput, guestsUncheckedUpdateManyWithoutInvitationsInput>
  }

  export type guestsScalarWhereInput = {
    AND?: guestsScalarWhereInput | guestsScalarWhereInput[]
    OR?: guestsScalarWhereInput[]
    NOT?: guestsScalarWhereInput | guestsScalarWhereInput[]
    id?: IntFilter<"guests"> | number
    invitation_id?: IntNullableFilter<"guests"> | number | null
    name?: StringNullableFilter<"guests"> | string | null
    phone_number?: StringNullableFilter<"guests"> | string | null
    slug?: StringNullableFilter<"guests"> | string | null
    is_attending?: BoolNullableFilter<"guests"> | boolean | null
    total_guest?: IntNullableFilter<"guests"> | number | null
    notes?: StringNullableFilter<"guests"> | string | null
    address?: StringNullableFilter<"guests"> | string | null
    created_at?: DateTimeNullableFilter<"guests"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"guests"> | Date | string | null
  }

  export type imagesUpsertWithWhereUniqueWithoutInvitationsInput = {
    where: imagesWhereUniqueInput
    update: XOR<imagesUpdateWithoutInvitationsInput, imagesUncheckedUpdateWithoutInvitationsInput>
    create: XOR<imagesCreateWithoutInvitationsInput, imagesUncheckedCreateWithoutInvitationsInput>
  }

  export type imagesUpdateWithWhereUniqueWithoutInvitationsInput = {
    where: imagesWhereUniqueInput
    data: XOR<imagesUpdateWithoutInvitationsInput, imagesUncheckedUpdateWithoutInvitationsInput>
  }

  export type imagesUpdateManyWithWhereWithoutInvitationsInput = {
    where: imagesScalarWhereInput
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyWithoutInvitationsInput>
  }

  export type imagesScalarWhereInput = {
    AND?: imagesScalarWhereInput | imagesScalarWhereInput[]
    OR?: imagesScalarWhereInput[]
    NOT?: imagesScalarWhereInput | imagesScalarWhereInput[]
    id?: IntFilter<"images"> | number
    invitation_id?: IntNullableFilter<"images"> | number | null
    url?: StringNullableFilter<"images"> | string | null
    caption?: StringNullableFilter<"images"> | string | null
    type?: StringNullableFilter<"images"> | string | null
    created_at?: DateTimeNullableFilter<"images"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"images"> | Date | string | null
    order_number?: StringNullableFilter<"images"> | string | null
  }

  export type musicUpsertWithoutInvitationsInput = {
    update: XOR<musicUpdateWithoutInvitationsInput, musicUncheckedUpdateWithoutInvitationsInput>
    create: XOR<musicCreateWithoutInvitationsInput, musicUncheckedCreateWithoutInvitationsInput>
    where?: musicWhereInput
  }

  export type musicUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: musicWhereInput
    data: XOR<musicUpdateWithoutInvitationsInput, musicUncheckedUpdateWithoutInvitationsInput>
  }

  export type musicUpdateWithoutInvitationsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type musicUncheckedUpdateWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type themesUpsertWithoutInvitationsInput = {
    update: XOR<themesUpdateWithoutInvitationsInput, themesUncheckedUpdateWithoutInvitationsInput>
    create: XOR<themesCreateWithoutInvitationsInput, themesUncheckedCreateWithoutInvitationsInput>
    where?: themesWhereInput
  }

  export type themesUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: themesWhereInput
    data: XOR<themesUpdateWithoutInvitationsInput, themesUncheckedUpdateWithoutInvitationsInput>
  }

  export type themesUpdateWithoutInvitationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preview_image?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type themesUncheckedUpdateWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preview_image?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutInvitationsInput = {
    update: XOR<usersUpdateWithoutInvitationsInput, usersUncheckedUpdateWithoutInvitationsInput>
    create: XOR<usersCreateWithoutInvitationsInput, usersUncheckedCreateWithoutInvitationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInvitationsInput, usersUncheckedUpdateWithoutInvitationsInput>
  }

  export type usersUpdateWithoutInvitationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rsvpsUpsertWithWhereUniqueWithoutInvitationsInput = {
    where: rsvpsWhereUniqueInput
    update: XOR<rsvpsUpdateWithoutInvitationsInput, rsvpsUncheckedUpdateWithoutInvitationsInput>
    create: XOR<rsvpsCreateWithoutInvitationsInput, rsvpsUncheckedCreateWithoutInvitationsInput>
  }

  export type rsvpsUpdateWithWhereUniqueWithoutInvitationsInput = {
    where: rsvpsWhereUniqueInput
    data: XOR<rsvpsUpdateWithoutInvitationsInput, rsvpsUncheckedUpdateWithoutInvitationsInput>
  }

  export type rsvpsUpdateManyWithWhereWithoutInvitationsInput = {
    where: rsvpsScalarWhereInput
    data: XOR<rsvpsUpdateManyMutationInput, rsvpsUncheckedUpdateManyWithoutInvitationsInput>
  }

  export type rsvpsScalarWhereInput = {
    AND?: rsvpsScalarWhereInput | rsvpsScalarWhereInput[]
    OR?: rsvpsScalarWhereInput[]
    NOT?: rsvpsScalarWhereInput | rsvpsScalarWhereInput[]
    id?: IntFilter<"rsvps"> | number
    invitation_id?: IntNullableFilter<"rsvps"> | number | null
    guest_name?: StringNullableFilter<"rsvps"> | string | null
    message?: StringNullableFilter<"rsvps"> | string | null
    attendance_status?: BoolNullableFilter<"rsvps"> | boolean | null
    total_guest?: IntNullableFilter<"rsvps"> | number | null
    created_at?: DateTimeNullableFilter<"rsvps"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"rsvps"> | Date | string | null
    icon_color?: StringNullableFilter<"rsvps"> | string | null
  }

  export type rundownsUpsertWithWhereUniqueWithoutInvitationsInput = {
    where: rundownsWhereUniqueInput
    update: XOR<rundownsUpdateWithoutInvitationsInput, rundownsUncheckedUpdateWithoutInvitationsInput>
    create: XOR<rundownsCreateWithoutInvitationsInput, rundownsUncheckedCreateWithoutInvitationsInput>
  }

  export type rundownsUpdateWithWhereUniqueWithoutInvitationsInput = {
    where: rundownsWhereUniqueInput
    data: XOR<rundownsUpdateWithoutInvitationsInput, rundownsUncheckedUpdateWithoutInvitationsInput>
  }

  export type rundownsUpdateManyWithWhereWithoutInvitationsInput = {
    where: rundownsScalarWhereInput
    data: XOR<rundownsUpdateManyMutationInput, rundownsUncheckedUpdateManyWithoutInvitationsInput>
  }

  export type rundownsScalarWhereInput = {
    AND?: rundownsScalarWhereInput | rundownsScalarWhereInput[]
    OR?: rundownsScalarWhereInput[]
    NOT?: rundownsScalarWhereInput | rundownsScalarWhereInput[]
    id?: IntFilter<"rundowns"> | number
    invitation_id?: IntNullableFilter<"rundowns"> | number | null
    title?: StringNullableFilter<"rundowns"> | string | null
    location?: StringNullableFilter<"rundowns"> | string | null
    location_url?: StringNullableFilter<"rundowns"> | string | null
    date?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    start_time?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    end_time?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    time_zone?: StringNullableFilter<"rundowns"> | string | null
    description?: StringNullableFilter<"rundowns"> | string | null
    image_url?: StringNullableFilter<"rundowns"> | string | null
    order_number?: IntNullableFilter<"rundowns"> | number | null
    created_at?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"rundowns"> | Date | string | null
    location_detail?: StringNullableFilter<"rundowns"> | string | null
  }

  export type storiesUpsertWithWhereUniqueWithoutInvitationsInput = {
    where: storiesWhereUniqueInput
    update: XOR<storiesUpdateWithoutInvitationsInput, storiesUncheckedUpdateWithoutInvitationsInput>
    create: XOR<storiesCreateWithoutInvitationsInput, storiesUncheckedCreateWithoutInvitationsInput>
  }

  export type storiesUpdateWithWhereUniqueWithoutInvitationsInput = {
    where: storiesWhereUniqueInput
    data: XOR<storiesUpdateWithoutInvitationsInput, storiesUncheckedUpdateWithoutInvitationsInput>
  }

  export type storiesUpdateManyWithWhereWithoutInvitationsInput = {
    where: storiesScalarWhereInput
    data: XOR<storiesUpdateManyMutationInput, storiesUncheckedUpdateManyWithoutInvitationsInput>
  }

  export type storiesScalarWhereInput = {
    AND?: storiesScalarWhereInput | storiesScalarWhereInput[]
    OR?: storiesScalarWhereInput[]
    NOT?: storiesScalarWhereInput | storiesScalarWhereInput[]
    id?: IntFilter<"stories"> | number
    invitation_id?: IntNullableFilter<"stories"> | number | null
    title?: StringNullableFilter<"stories"> | string | null
    content?: StringNullableFilter<"stories"> | string | null
    image_url?: StringNullableFilter<"stories"> | string | null
    story_date?: DateTimeNullableFilter<"stories"> | Date | string | null
    order_number?: IntNullableFilter<"stories"> | number | null
    created_at?: DateTimeNullableFilter<"stories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"stories"> | Date | string | null
  }

  export type videosUpsertWithWhereUniqueWithoutInvitationsInput = {
    where: videosWhereUniqueInput
    update: XOR<videosUpdateWithoutInvitationsInput, videosUncheckedUpdateWithoutInvitationsInput>
    create: XOR<videosCreateWithoutInvitationsInput, videosUncheckedCreateWithoutInvitationsInput>
  }

  export type videosUpdateWithWhereUniqueWithoutInvitationsInput = {
    where: videosWhereUniqueInput
    data: XOR<videosUpdateWithoutInvitationsInput, videosUncheckedUpdateWithoutInvitationsInput>
  }

  export type videosUpdateManyWithWhereWithoutInvitationsInput = {
    where: videosScalarWhereInput
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyWithoutInvitationsInput>
  }

  export type videosScalarWhereInput = {
    AND?: videosScalarWhereInput | videosScalarWhereInput[]
    OR?: videosScalarWhereInput[]
    NOT?: videosScalarWhereInput | videosScalarWhereInput[]
    id?: IntFilter<"videos"> | number
    invitation_id?: IntNullableFilter<"videos"> | number | null
    title?: StringNullableFilter<"videos"> | string | null
    description?: StringNullableFilter<"videos"> | string | null
    url?: StringNullableFilter<"videos"> | string | null
    thumbnail?: StringNullableFilter<"videos"> | string | null
    order_number?: IntNullableFilter<"videos"> | number | null
    created_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"videos"> | Date | string | null
  }

  export type invitationsCreateWithoutMusicInput = {
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosCreateNestedManyWithoutInvitationsInput
    guests?: guestsCreateNestedManyWithoutInvitationsInput
    images?: imagesCreateNestedManyWithoutInvitationsInput
    themes?: themesCreateNestedOneWithoutInvitationsInput
    users?: usersCreateNestedOneWithoutInvitationsInput
    rsvps?: rsvpsCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsCreateNestedManyWithoutInvitationsInput
    stories?: storiesCreateNestedManyWithoutInvitationsInput
    videos?: videosCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsUncheckedCreateWithoutMusicInput = {
    id?: number
    user_id?: number | null
    theme_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosUncheckedCreateNestedManyWithoutInvitationsInput
    guests?: guestsUncheckedCreateNestedManyWithoutInvitationsInput
    images?: imagesUncheckedCreateNestedManyWithoutInvitationsInput
    rsvps?: rsvpsUncheckedCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsUncheckedCreateNestedManyWithoutInvitationsInput
    stories?: storiesUncheckedCreateNestedManyWithoutInvitationsInput
    videos?: videosUncheckedCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsCreateOrConnectWithoutMusicInput = {
    where: invitationsWhereUniqueInput
    create: XOR<invitationsCreateWithoutMusicInput, invitationsUncheckedCreateWithoutMusicInput>
  }

  export type invitationsCreateManyMusicInputEnvelope = {
    data: invitationsCreateManyMusicInput | invitationsCreateManyMusicInput[]
    skipDuplicates?: boolean
  }

  export type invitationsUpsertWithWhereUniqueWithoutMusicInput = {
    where: invitationsWhereUniqueInput
    update: XOR<invitationsUpdateWithoutMusicInput, invitationsUncheckedUpdateWithoutMusicInput>
    create: XOR<invitationsCreateWithoutMusicInput, invitationsUncheckedCreateWithoutMusicInput>
  }

  export type invitationsUpdateWithWhereUniqueWithoutMusicInput = {
    where: invitationsWhereUniqueInput
    data: XOR<invitationsUpdateWithoutMusicInput, invitationsUncheckedUpdateWithoutMusicInput>
  }

  export type invitationsUpdateManyWithWhereWithoutMusicInput = {
    where: invitationsScalarWhereInput
    data: XOR<invitationsUpdateManyMutationInput, invitationsUncheckedUpdateManyWithoutMusicInput>
  }

  export type invitationsScalarWhereInput = {
    AND?: invitationsScalarWhereInput | invitationsScalarWhereInput[]
    OR?: invitationsScalarWhereInput[]
    NOT?: invitationsScalarWhereInput | invitationsScalarWhereInput[]
    id?: IntFilter<"invitations"> | number
    user_id?: IntNullableFilter<"invitations"> | number | null
    theme_id?: IntNullableFilter<"invitations"> | number | null
    music_id?: IntNullableFilter<"invitations"> | number | null
    phone_number?: StringNullableFilter<"invitations"> | string | null
    slug?: StringNullableFilter<"invitations"> | string | null
    event_title?: StringNullableFilter<"invitations"> | string | null
    host_one_name?: StringNullableFilter<"invitations"> | string | null
    host_two_name?: StringNullableFilter<"invitations"> | string | null
    host_one_nickname?: StringNullableFilter<"invitations"> | string | null
    host_two_nickname?: StringNullableFilter<"invitations"> | string | null
    host_one_additional_info?: StringNullableFilter<"invitations"> | string | null
    host_two_additional_info?: StringNullableFilter<"invitations"> | string | null
    host_one_social_media?: StringNullableFilter<"invitations"> | string | null
    host_two_social_media?: StringNullableFilter<"invitations"> | string | null
    event_date?: DateTimeNullableFilter<"invitations"> | Date | string | null
    event_type?: StringNullableFilter<"invitations"> | string | null
    location?: StringNullableFilter<"invitations"> | string | null
    location_url?: StringNullableFilter<"invitations"> | string | null
    message?: StringNullableFilter<"invitations"> | string | null
    hashtag?: StringNullableFilter<"invitations"> | string | null
    is_active?: BoolNullableFilter<"invitations"> | boolean | null
    activated_at?: DateTimeNullableFilter<"invitations"> | Date | string | null
    expired_at?: DateTimeNullableFilter<"invitations"> | Date | string | null
    created_at?: DateTimeNullableFilter<"invitations"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"invitations"> | Date | string | null
    web_url?: StringNullableFilter<"invitations"> | string | null
    message_template?: StringNullableFilter<"invitations"> | string | null
    additional_info?: StringNullableFilter<"invitations"> | string | null
    location_detail?: StringNullableFilter<"invitations"> | string | null
  }

  export type invitationsCreateWithoutRsvpsInput = {
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosCreateNestedManyWithoutInvitationsInput
    guests?: guestsCreateNestedManyWithoutInvitationsInput
    images?: imagesCreateNestedManyWithoutInvitationsInput
    music?: musicCreateNestedOneWithoutInvitationsInput
    themes?: themesCreateNestedOneWithoutInvitationsInput
    users?: usersCreateNestedOneWithoutInvitationsInput
    rundowns?: rundownsCreateNestedManyWithoutInvitationsInput
    stories?: storiesCreateNestedManyWithoutInvitationsInput
    videos?: videosCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsUncheckedCreateWithoutRsvpsInput = {
    id?: number
    user_id?: number | null
    theme_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosUncheckedCreateNestedManyWithoutInvitationsInput
    guests?: guestsUncheckedCreateNestedManyWithoutInvitationsInput
    images?: imagesUncheckedCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsUncheckedCreateNestedManyWithoutInvitationsInput
    stories?: storiesUncheckedCreateNestedManyWithoutInvitationsInput
    videos?: videosUncheckedCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsCreateOrConnectWithoutRsvpsInput = {
    where: invitationsWhereUniqueInput
    create: XOR<invitationsCreateWithoutRsvpsInput, invitationsUncheckedCreateWithoutRsvpsInput>
  }

  export type invitationsUpsertWithoutRsvpsInput = {
    update: XOR<invitationsUpdateWithoutRsvpsInput, invitationsUncheckedUpdateWithoutRsvpsInput>
    create: XOR<invitationsCreateWithoutRsvpsInput, invitationsUncheckedCreateWithoutRsvpsInput>
    where?: invitationsWhereInput
  }

  export type invitationsUpdateToOneWithWhereWithoutRsvpsInput = {
    where?: invitationsWhereInput
    data: XOR<invitationsUpdateWithoutRsvpsInput, invitationsUncheckedUpdateWithoutRsvpsInput>
  }

  export type invitationsUpdateWithoutRsvpsInput = {
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUpdateManyWithoutInvitationsNestedInput
    images?: imagesUpdateManyWithoutInvitationsNestedInput
    music?: musicUpdateOneWithoutInvitationsNestedInput
    themes?: themesUpdateOneWithoutInvitationsNestedInput
    users?: usersUpdateOneWithoutInvitationsNestedInput
    rundowns?: rundownsUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUpdateManyWithoutInvitationsNestedInput
    videos?: videosUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateWithoutRsvpsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUncheckedUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUncheckedUpdateManyWithoutInvitationsNestedInput
    images?: imagesUncheckedUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUncheckedUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUncheckedUpdateManyWithoutInvitationsNestedInput
    videos?: videosUncheckedUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsCreateWithoutRundownsInput = {
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosCreateNestedManyWithoutInvitationsInput
    guests?: guestsCreateNestedManyWithoutInvitationsInput
    images?: imagesCreateNestedManyWithoutInvitationsInput
    music?: musicCreateNestedOneWithoutInvitationsInput
    themes?: themesCreateNestedOneWithoutInvitationsInput
    users?: usersCreateNestedOneWithoutInvitationsInput
    rsvps?: rsvpsCreateNestedManyWithoutInvitationsInput
    stories?: storiesCreateNestedManyWithoutInvitationsInput
    videos?: videosCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsUncheckedCreateWithoutRundownsInput = {
    id?: number
    user_id?: number | null
    theme_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosUncheckedCreateNestedManyWithoutInvitationsInput
    guests?: guestsUncheckedCreateNestedManyWithoutInvitationsInput
    images?: imagesUncheckedCreateNestedManyWithoutInvitationsInput
    rsvps?: rsvpsUncheckedCreateNestedManyWithoutInvitationsInput
    stories?: storiesUncheckedCreateNestedManyWithoutInvitationsInput
    videos?: videosUncheckedCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsCreateOrConnectWithoutRundownsInput = {
    where: invitationsWhereUniqueInput
    create: XOR<invitationsCreateWithoutRundownsInput, invitationsUncheckedCreateWithoutRundownsInput>
  }

  export type invitationsUpsertWithoutRundownsInput = {
    update: XOR<invitationsUpdateWithoutRundownsInput, invitationsUncheckedUpdateWithoutRundownsInput>
    create: XOR<invitationsCreateWithoutRundownsInput, invitationsUncheckedCreateWithoutRundownsInput>
    where?: invitationsWhereInput
  }

  export type invitationsUpdateToOneWithWhereWithoutRundownsInput = {
    where?: invitationsWhereInput
    data: XOR<invitationsUpdateWithoutRundownsInput, invitationsUncheckedUpdateWithoutRundownsInput>
  }

  export type invitationsUpdateWithoutRundownsInput = {
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUpdateManyWithoutInvitationsNestedInput
    images?: imagesUpdateManyWithoutInvitationsNestedInput
    music?: musicUpdateOneWithoutInvitationsNestedInput
    themes?: themesUpdateOneWithoutInvitationsNestedInput
    users?: usersUpdateOneWithoutInvitationsNestedInput
    rsvps?: rsvpsUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUpdateManyWithoutInvitationsNestedInput
    videos?: videosUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateWithoutRundownsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUncheckedUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUncheckedUpdateManyWithoutInvitationsNestedInput
    images?: imagesUncheckedUpdateManyWithoutInvitationsNestedInput
    rsvps?: rsvpsUncheckedUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUncheckedUpdateManyWithoutInvitationsNestedInput
    videos?: videosUncheckedUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsCreateWithoutStoriesInput = {
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosCreateNestedManyWithoutInvitationsInput
    guests?: guestsCreateNestedManyWithoutInvitationsInput
    images?: imagesCreateNestedManyWithoutInvitationsInput
    music?: musicCreateNestedOneWithoutInvitationsInput
    themes?: themesCreateNestedOneWithoutInvitationsInput
    users?: usersCreateNestedOneWithoutInvitationsInput
    rsvps?: rsvpsCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsCreateNestedManyWithoutInvitationsInput
    videos?: videosCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsUncheckedCreateWithoutStoriesInput = {
    id?: number
    user_id?: number | null
    theme_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosUncheckedCreateNestedManyWithoutInvitationsInput
    guests?: guestsUncheckedCreateNestedManyWithoutInvitationsInput
    images?: imagesUncheckedCreateNestedManyWithoutInvitationsInput
    rsvps?: rsvpsUncheckedCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsUncheckedCreateNestedManyWithoutInvitationsInput
    videos?: videosUncheckedCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsCreateOrConnectWithoutStoriesInput = {
    where: invitationsWhereUniqueInput
    create: XOR<invitationsCreateWithoutStoriesInput, invitationsUncheckedCreateWithoutStoriesInput>
  }

  export type invitationsUpsertWithoutStoriesInput = {
    update: XOR<invitationsUpdateWithoutStoriesInput, invitationsUncheckedUpdateWithoutStoriesInput>
    create: XOR<invitationsCreateWithoutStoriesInput, invitationsUncheckedCreateWithoutStoriesInput>
    where?: invitationsWhereInput
  }

  export type invitationsUpdateToOneWithWhereWithoutStoriesInput = {
    where?: invitationsWhereInput
    data: XOR<invitationsUpdateWithoutStoriesInput, invitationsUncheckedUpdateWithoutStoriesInput>
  }

  export type invitationsUpdateWithoutStoriesInput = {
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUpdateManyWithoutInvitationsNestedInput
    images?: imagesUpdateManyWithoutInvitationsNestedInput
    music?: musicUpdateOneWithoutInvitationsNestedInput
    themes?: themesUpdateOneWithoutInvitationsNestedInput
    users?: usersUpdateOneWithoutInvitationsNestedInput
    rsvps?: rsvpsUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUpdateManyWithoutInvitationsNestedInput
    videos?: videosUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateWithoutStoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUncheckedUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUncheckedUpdateManyWithoutInvitationsNestedInput
    images?: imagesUncheckedUpdateManyWithoutInvitationsNestedInput
    rsvps?: rsvpsUncheckedUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUncheckedUpdateManyWithoutInvitationsNestedInput
    videos?: videosUncheckedUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsCreateWithoutThemesInput = {
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosCreateNestedManyWithoutInvitationsInput
    guests?: guestsCreateNestedManyWithoutInvitationsInput
    images?: imagesCreateNestedManyWithoutInvitationsInput
    music?: musicCreateNestedOneWithoutInvitationsInput
    users?: usersCreateNestedOneWithoutInvitationsInput
    rsvps?: rsvpsCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsCreateNestedManyWithoutInvitationsInput
    stories?: storiesCreateNestedManyWithoutInvitationsInput
    videos?: videosCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsUncheckedCreateWithoutThemesInput = {
    id?: number
    user_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosUncheckedCreateNestedManyWithoutInvitationsInput
    guests?: guestsUncheckedCreateNestedManyWithoutInvitationsInput
    images?: imagesUncheckedCreateNestedManyWithoutInvitationsInput
    rsvps?: rsvpsUncheckedCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsUncheckedCreateNestedManyWithoutInvitationsInput
    stories?: storiesUncheckedCreateNestedManyWithoutInvitationsInput
    videos?: videosUncheckedCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsCreateOrConnectWithoutThemesInput = {
    where: invitationsWhereUniqueInput
    create: XOR<invitationsCreateWithoutThemesInput, invitationsUncheckedCreateWithoutThemesInput>
  }

  export type invitationsCreateManyThemesInputEnvelope = {
    data: invitationsCreateManyThemesInput | invitationsCreateManyThemesInput[]
    skipDuplicates?: boolean
  }

  export type invitationsUpsertWithWhereUniqueWithoutThemesInput = {
    where: invitationsWhereUniqueInput
    update: XOR<invitationsUpdateWithoutThemesInput, invitationsUncheckedUpdateWithoutThemesInput>
    create: XOR<invitationsCreateWithoutThemesInput, invitationsUncheckedCreateWithoutThemesInput>
  }

  export type invitationsUpdateWithWhereUniqueWithoutThemesInput = {
    where: invitationsWhereUniqueInput
    data: XOR<invitationsUpdateWithoutThemesInput, invitationsUncheckedUpdateWithoutThemesInput>
  }

  export type invitationsUpdateManyWithWhereWithoutThemesInput = {
    where: invitationsScalarWhereInput
    data: XOR<invitationsUpdateManyMutationInput, invitationsUncheckedUpdateManyWithoutThemesInput>
  }

  export type invitationsCreateWithoutUsersInput = {
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosCreateNestedManyWithoutInvitationsInput
    guests?: guestsCreateNestedManyWithoutInvitationsInput
    images?: imagesCreateNestedManyWithoutInvitationsInput
    music?: musicCreateNestedOneWithoutInvitationsInput
    themes?: themesCreateNestedOneWithoutInvitationsInput
    rsvps?: rsvpsCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsCreateNestedManyWithoutInvitationsInput
    stories?: storiesCreateNestedManyWithoutInvitationsInput
    videos?: videosCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsUncheckedCreateWithoutUsersInput = {
    id?: number
    theme_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosUncheckedCreateNestedManyWithoutInvitationsInput
    guests?: guestsUncheckedCreateNestedManyWithoutInvitationsInput
    images?: imagesUncheckedCreateNestedManyWithoutInvitationsInput
    rsvps?: rsvpsUncheckedCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsUncheckedCreateNestedManyWithoutInvitationsInput
    stories?: storiesUncheckedCreateNestedManyWithoutInvitationsInput
    videos?: videosUncheckedCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsCreateOrConnectWithoutUsersInput = {
    where: invitationsWhereUniqueInput
    create: XOR<invitationsCreateWithoutUsersInput, invitationsUncheckedCreateWithoutUsersInput>
  }

  export type invitationsCreateManyUsersInputEnvelope = {
    data: invitationsCreateManyUsersInput | invitationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type invitationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: invitationsWhereUniqueInput
    update: XOR<invitationsUpdateWithoutUsersInput, invitationsUncheckedUpdateWithoutUsersInput>
    create: XOR<invitationsCreateWithoutUsersInput, invitationsUncheckedCreateWithoutUsersInput>
  }

  export type invitationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: invitationsWhereUniqueInput
    data: XOR<invitationsUpdateWithoutUsersInput, invitationsUncheckedUpdateWithoutUsersInput>
  }

  export type invitationsUpdateManyWithWhereWithoutUsersInput = {
    where: invitationsScalarWhereInput
    data: XOR<invitationsUpdateManyMutationInput, invitationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type invitationsCreateWithoutVideosInput = {
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosCreateNestedManyWithoutInvitationsInput
    guests?: guestsCreateNestedManyWithoutInvitationsInput
    images?: imagesCreateNestedManyWithoutInvitationsInput
    music?: musicCreateNestedOneWithoutInvitationsInput
    themes?: themesCreateNestedOneWithoutInvitationsInput
    users?: usersCreateNestedOneWithoutInvitationsInput
    rsvps?: rsvpsCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsCreateNestedManyWithoutInvitationsInput
    stories?: storiesCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsUncheckedCreateWithoutVideosInput = {
    id?: number
    user_id?: number | null
    theme_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
    gift_infos?: gift_infosUncheckedCreateNestedManyWithoutInvitationsInput
    guests?: guestsUncheckedCreateNestedManyWithoutInvitationsInput
    images?: imagesUncheckedCreateNestedManyWithoutInvitationsInput
    rsvps?: rsvpsUncheckedCreateNestedManyWithoutInvitationsInput
    rundowns?: rundownsUncheckedCreateNestedManyWithoutInvitationsInput
    stories?: storiesUncheckedCreateNestedManyWithoutInvitationsInput
  }

  export type invitationsCreateOrConnectWithoutVideosInput = {
    where: invitationsWhereUniqueInput
    create: XOR<invitationsCreateWithoutVideosInput, invitationsUncheckedCreateWithoutVideosInput>
  }

  export type invitationsUpsertWithoutVideosInput = {
    update: XOR<invitationsUpdateWithoutVideosInput, invitationsUncheckedUpdateWithoutVideosInput>
    create: XOR<invitationsCreateWithoutVideosInput, invitationsUncheckedCreateWithoutVideosInput>
    where?: invitationsWhereInput
  }

  export type invitationsUpdateToOneWithWhereWithoutVideosInput = {
    where?: invitationsWhereInput
    data: XOR<invitationsUpdateWithoutVideosInput, invitationsUncheckedUpdateWithoutVideosInput>
  }

  export type invitationsUpdateWithoutVideosInput = {
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUpdateManyWithoutInvitationsNestedInput
    images?: imagesUpdateManyWithoutInvitationsNestedInput
    music?: musicUpdateOneWithoutInvitationsNestedInput
    themes?: themesUpdateOneWithoutInvitationsNestedInput
    users?: usersUpdateOneWithoutInvitationsNestedInput
    rsvps?: rsvpsUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUncheckedUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUncheckedUpdateManyWithoutInvitationsNestedInput
    images?: imagesUncheckedUpdateManyWithoutInvitationsNestedInput
    rsvps?: rsvpsUncheckedUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUncheckedUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUncheckedUpdateManyWithoutInvitationsNestedInput
  }

  export type gift_infosCreateManyInvitationsInput = {
    id?: number
    provider_name?: string | null
    account_number?: string | null
    account_holder?: string | null
    gift_delivery_address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type guestsCreateManyInvitationsInput = {
    id?: number
    name?: string | null
    phone_number?: string | null
    slug?: string | null
    is_attending?: boolean | null
    total_guest?: number | null
    notes?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type imagesCreateManyInvitationsInput = {
    id?: number
    url?: string | null
    caption?: string | null
    type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_number?: string | null
  }

  export type rsvpsCreateManyInvitationsInput = {
    id?: number
    guest_name?: string | null
    message?: string | null
    attendance_status?: boolean | null
    total_guest?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    icon_color?: string | null
  }

  export type rundownsCreateManyInvitationsInput = {
    id?: number
    title?: string | null
    location?: string | null
    location_url?: string | null
    date?: Date | string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    time_zone?: string | null
    description?: string | null
    image_url?: string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    location_detail?: string | null
  }

  export type storiesCreateManyInvitationsInput = {
    id?: number
    title?: string | null
    content?: string | null
    image_url?: string | null
    story_date?: Date | string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type videosCreateManyInvitationsInput = {
    id?: number
    title?: string | null
    description?: string | null
    url?: string | null
    thumbnail?: string | null
    order_number?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type gift_infosUpdateWithoutInvitationsInput = {
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    account_holder?: NullableStringFieldUpdateOperationsInput | string | null
    gift_delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gift_infosUncheckedUpdateWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    account_holder?: NullableStringFieldUpdateOperationsInput | string | null
    gift_delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gift_infosUncheckedUpdateManyWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    account_holder?: NullableStringFieldUpdateOperationsInput | string | null
    gift_delivery_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type guestsUpdateWithoutInvitationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_attending?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type guestsUncheckedUpdateWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_attending?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type guestsUncheckedUpdateManyWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    is_attending?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type imagesUpdateWithoutInvitationsInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imagesUncheckedUpdateWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imagesUncheckedUpdateManyWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rsvpsUpdateWithoutInvitationsInput = {
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attendance_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon_color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rsvpsUncheckedUpdateWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attendance_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon_color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rsvpsUncheckedUpdateManyWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    guest_name?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attendance_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    total_guest?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon_color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rundownsUpdateWithoutInvitationsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rundownsUncheckedUpdateWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rundownsUncheckedUpdateManyWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storiesUpdateWithoutInvitationsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    story_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type storiesUncheckedUpdateWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    story_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type storiesUncheckedUpdateManyWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    story_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type videosUpdateWithoutInvitationsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type videosUncheckedUpdateWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type videosUncheckedUpdateManyWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type invitationsCreateManyMusicInput = {
    id?: number
    user_id?: number | null
    theme_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
  }

  export type invitationsUpdateWithoutMusicInput = {
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUpdateManyWithoutInvitationsNestedInput
    images?: imagesUpdateManyWithoutInvitationsNestedInput
    themes?: themesUpdateOneWithoutInvitationsNestedInput
    users?: usersUpdateOneWithoutInvitationsNestedInput
    rsvps?: rsvpsUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUpdateManyWithoutInvitationsNestedInput
    videos?: videosUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUncheckedUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUncheckedUpdateManyWithoutInvitationsNestedInput
    images?: imagesUncheckedUpdateManyWithoutInvitationsNestedInput
    rsvps?: rsvpsUncheckedUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUncheckedUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUncheckedUpdateManyWithoutInvitationsNestedInput
    videos?: videosUncheckedUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateManyWithoutMusicInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invitationsCreateManyThemesInput = {
    id?: number
    user_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
  }

  export type invitationsUpdateWithoutThemesInput = {
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUpdateManyWithoutInvitationsNestedInput
    images?: imagesUpdateManyWithoutInvitationsNestedInput
    music?: musicUpdateOneWithoutInvitationsNestedInput
    users?: usersUpdateOneWithoutInvitationsNestedInput
    rsvps?: rsvpsUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUpdateManyWithoutInvitationsNestedInput
    videos?: videosUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateWithoutThemesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUncheckedUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUncheckedUpdateManyWithoutInvitationsNestedInput
    images?: imagesUncheckedUpdateManyWithoutInvitationsNestedInput
    rsvps?: rsvpsUncheckedUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUncheckedUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUncheckedUpdateManyWithoutInvitationsNestedInput
    videos?: videosUncheckedUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateManyWithoutThemesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invitationsCreateManyUsersInput = {
    id?: number
    theme_id?: number | null
    music_id?: number | null
    phone_number?: string | null
    slug?: string | null
    event_title?: string | null
    host_one_name?: string | null
    host_two_name?: string | null
    host_one_nickname?: string | null
    host_two_nickname?: string | null
    host_one_additional_info?: string | null
    host_two_additional_info?: string | null
    host_one_social_media?: string | null
    host_two_social_media?: string | null
    event_date?: Date | string | null
    event_type?: string | null
    location?: string | null
    location_url?: string | null
    message?: string | null
    hashtag?: string | null
    is_active?: boolean | null
    activated_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    web_url?: string | null
    message_template?: string | null
    additional_info?: string | null
    location_detail?: string | null
  }

  export type invitationsUpdateWithoutUsersInput = {
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUpdateManyWithoutInvitationsNestedInput
    images?: imagesUpdateManyWithoutInvitationsNestedInput
    music?: musicUpdateOneWithoutInvitationsNestedInput
    themes?: themesUpdateOneWithoutInvitationsNestedInput
    rsvps?: rsvpsUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUpdateManyWithoutInvitationsNestedInput
    videos?: videosUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
    gift_infos?: gift_infosUncheckedUpdateManyWithoutInvitationsNestedInput
    guests?: guestsUncheckedUpdateManyWithoutInvitationsNestedInput
    images?: imagesUncheckedUpdateManyWithoutInvitationsNestedInput
    rsvps?: rsvpsUncheckedUpdateManyWithoutInvitationsNestedInput
    rundowns?: rundownsUncheckedUpdateManyWithoutInvitationsNestedInput
    stories?: storiesUncheckedUpdateManyWithoutInvitationsNestedInput
    videos?: videosUncheckedUpdateManyWithoutInvitationsNestedInput
  }

  export type invitationsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    theme_id?: NullableIntFieldUpdateOperationsInput | number | null
    music_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    event_title?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_name?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    host_one_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    host_two_social_media?: NullableStringFieldUpdateOperationsInput | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    hashtag?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    web_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_template?: NullableStringFieldUpdateOperationsInput | string | null
    additional_info?: NullableStringFieldUpdateOperationsInput | string | null
    location_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}