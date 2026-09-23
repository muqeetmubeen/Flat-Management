
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Flat
 * 
 */
export type Flat = $Result.DefaultSelection<Prisma.$FlatPayload>
/**
 * Model Enquiry
 * 
 */
export type Enquiry = $Result.DefaultSelection<Prisma.$EnquiryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Admin: 'Admin',
  User: 'User'
};

export type Role = (typeof Role)[keyof typeof Role]


export const FlatStatus: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected',
  sold: 'sold'
};

export type FlatStatus = (typeof FlatStatus)[keyof typeof FlatStatus]


export const EnquiryStatus: {
  sent: 'sent',
  received: 'received',
  read: 'read'
};

export type EnquiryStatus = (typeof EnquiryStatus)[keyof typeof EnquiryStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type FlatStatus = $Enums.FlatStatus

export const FlatStatus: typeof $Enums.FlatStatus

export type EnquiryStatus = $Enums.EnquiryStatus

export const EnquiryStatus: typeof $Enums.EnquiryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flat`: Exposes CRUD operations for the **Flat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flats
    * const flats = await prisma.flat.findMany()
    * ```
    */
  get flat(): Prisma.FlatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enquiry`: Exposes CRUD operations for the **Enquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enquiries
    * const enquiries = await prisma.enquiry.findMany()
    * ```
    */
  get enquiry(): Prisma.EnquiryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    User: 'User',
    Flat: 'Flat',
    Enquiry: 'Enquiry'
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
      modelProps: "user" | "flat" | "enquiry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Flat: {
        payload: Prisma.$FlatPayload<ExtArgs>
        fields: Prisma.FlatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          findFirst: {
            args: Prisma.FlatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          findMany: {
            args: Prisma.FlatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>[]
          }
          create: {
            args: Prisma.FlatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          createMany: {
            args: Prisma.FlatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          update: {
            args: Prisma.FlatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          deleteMany: {
            args: Prisma.FlatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          aggregate: {
            args: Prisma.FlatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlat>
          }
          groupBy: {
            args: Prisma.FlatGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlatGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlatCountArgs<ExtArgs>
            result: $Utils.Optional<FlatCountAggregateOutputType> | number
          }
        }
      }
      Enquiry: {
        payload: Prisma.$EnquiryPayload<ExtArgs>
        fields: Prisma.EnquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findFirst: {
            args: Prisma.EnquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findMany: {
            args: Prisma.EnquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          create: {
            args: Prisma.EnquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          createMany: {
            args: Prisma.EnquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EnquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          update: {
            args: Prisma.EnquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          deleteMany: {
            args: Prisma.EnquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          aggregate: {
            args: Prisma.EnquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnquiry>
          }
          groupBy: {
            args: Prisma.EnquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnquiryCountArgs<ExtArgs>
            result: $Utils.Optional<EnquiryCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    user?: UserOmit
    flat?: FlatOmit
    enquiry?: EnquiryOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    flats: number
    purchasedFlats: number
    enquiriesSent: number
    enquiriesReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flats?: boolean | UserCountOutputTypeCountFlatsArgs
    purchasedFlats?: boolean | UserCountOutputTypeCountPurchasedFlatsArgs
    enquiriesSent?: boolean | UserCountOutputTypeCountEnquiriesSentArgs
    enquiriesReceived?: boolean | UserCountOutputTypeCountEnquiriesReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasedFlatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnquiriesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnquiriesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
  }


  /**
   * Count Type FlatCountOutputType
   */

  export type FlatCountOutputType = {
    enquiries: number
  }

  export type FlatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enquiries?: boolean | FlatCountOutputTypeCountEnquiriesArgs
  }

  // Custom InputTypes
  /**
   * FlatCountOutputType without action
   */
  export type FlatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatCountOutputType
     */
    select?: FlatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlatCountOutputType without action
   */
  export type FlatCountOutputTypeCountEnquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    phoneNo: string | null
    address: string | null
    pincode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    phoneNo: string | null
    address: string | null
    pincode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    phoneNo: number
    address: number
    pincode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phoneNo?: true
    address?: true
    pincode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phoneNo?: true
    address?: true
    pincode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phoneNo?: true
    address?: true
    pincode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    phoneNo: string
    address: string
    pincode: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phoneNo?: boolean
    address?: boolean
    pincode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flats?: boolean | User$flatsArgs<ExtArgs>
    purchasedFlats?: boolean | User$purchasedFlatsArgs<ExtArgs>
    enquiriesSent?: boolean | User$enquiriesSentArgs<ExtArgs>
    enquiriesReceived?: boolean | User$enquiriesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phoneNo?: boolean
    address?: boolean
    pincode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "phoneNo" | "address" | "pincode" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flats?: boolean | User$flatsArgs<ExtArgs>
    purchasedFlats?: boolean | User$purchasedFlatsArgs<ExtArgs>
    enquiriesSent?: boolean | User$enquiriesSentArgs<ExtArgs>
    enquiriesReceived?: boolean | User$enquiriesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      flats: Prisma.$FlatPayload<ExtArgs>[]
      purchasedFlats: Prisma.$FlatPayload<ExtArgs>[]
      enquiriesSent: Prisma.$EnquiryPayload<ExtArgs>[]
      enquiriesReceived: Prisma.$EnquiryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      phoneNo: string
      address: string
      pincode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flats<T extends User$flatsArgs<ExtArgs> = {}>(args?: Subset<T, User$flatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchasedFlats<T extends User$purchasedFlatsArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasedFlatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enquiriesSent<T extends User$enquiriesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$enquiriesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enquiriesReceived<T extends User$enquiriesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$enquiriesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly phoneNo: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly pincode: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.flats
   */
  export type User$flatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    where?: FlatWhereInput
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    cursor?: FlatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * User.purchasedFlats
   */
  export type User$purchasedFlatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    where?: FlatWhereInput
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    cursor?: FlatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * User.enquiriesSent
   */
  export type User$enquiriesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    cursor?: EnquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * User.enquiriesReceived
   */
  export type User$enquiriesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    cursor?: EnquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Flat
   */

  export type AggregateFlat = {
    _count: FlatCountAggregateOutputType | null
    _avg: FlatAvgAggregateOutputType | null
    _sum: FlatSumAggregateOutputType | null
    _min: FlatMinAggregateOutputType | null
    _max: FlatMaxAggregateOutputType | null
  }

  export type FlatAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    price: number | null
    sold_to_user_id: number | null
  }

  export type FlatSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    price: number | null
    sold_to_user_id: number | null
  }

  export type FlatMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    address: string | null
    price: number | null
    description: string | null
    status: $Enums.FlatStatus | null
    sold_to_user_id: number | null
    sold_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FlatMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    address: string | null
    price: number | null
    description: string | null
    status: $Enums.FlatStatus | null
    sold_to_user_id: number | null
    sold_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FlatCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    address: number
    price: number
    description: number
    images: number
    amenities: number
    status: number
    sold_to_user_id: number
    sold_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FlatAvgAggregateInputType = {
    id?: true
    user_id?: true
    price?: true
    sold_to_user_id?: true
  }

  export type FlatSumAggregateInputType = {
    id?: true
    user_id?: true
    price?: true
    sold_to_user_id?: true
  }

  export type FlatMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    address?: true
    price?: true
    description?: true
    status?: true
    sold_to_user_id?: true
    sold_date?: true
    created_at?: true
    updated_at?: true
  }

  export type FlatMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    address?: true
    price?: true
    description?: true
    status?: true
    sold_to_user_id?: true
    sold_date?: true
    created_at?: true
    updated_at?: true
  }

  export type FlatCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    address?: true
    price?: true
    description?: true
    images?: true
    amenities?: true
    status?: true
    sold_to_user_id?: true
    sold_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FlatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flat to aggregate.
     */
    where?: FlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flats to fetch.
     */
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flats
    **/
    _count?: true | FlatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlatMaxAggregateInputType
  }

  export type GetFlatAggregateType<T extends FlatAggregateArgs> = {
        [P in keyof T & keyof AggregateFlat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlat[P]>
      : GetScalarType<T[P], AggregateFlat[P]>
  }




  export type FlatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlatWhereInput
    orderBy?: FlatOrderByWithAggregationInput | FlatOrderByWithAggregationInput[]
    by: FlatScalarFieldEnum[] | FlatScalarFieldEnum
    having?: FlatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlatCountAggregateInputType | true
    _avg?: FlatAvgAggregateInputType
    _sum?: FlatSumAggregateInputType
    _min?: FlatMinAggregateInputType
    _max?: FlatMaxAggregateInputType
  }

  export type FlatGroupByOutputType = {
    id: number
    user_id: number
    title: string
    address: string
    price: number
    description: string | null
    images: JsonValue | null
    amenities: JsonValue | null
    status: $Enums.FlatStatus
    sold_to_user_id: number | null
    sold_date: Date | null
    created_at: Date
    updated_at: Date
    _count: FlatCountAggregateOutputType | null
    _avg: FlatAvgAggregateOutputType | null
    _sum: FlatSumAggregateOutputType | null
    _min: FlatMinAggregateOutputType | null
    _max: FlatMaxAggregateOutputType | null
  }

  type GetFlatGroupByPayload<T extends FlatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlatGroupByOutputType[P]>
            : GetScalarType<T[P], FlatGroupByOutputType[P]>
        }
      >
    >


  export type FlatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    address?: boolean
    price?: boolean
    description?: boolean
    images?: boolean
    amenities?: boolean
    status?: boolean
    sold_to_user_id?: boolean
    sold_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    soldTo?: boolean | Flat$soldToArgs<ExtArgs>
    enquiries?: boolean | Flat$enquiriesArgs<ExtArgs>
    _count?: boolean | FlatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flat"]>



  export type FlatSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    address?: boolean
    price?: boolean
    description?: boolean
    images?: boolean
    amenities?: boolean
    status?: boolean
    sold_to_user_id?: boolean
    sold_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FlatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "address" | "price" | "description" | "images" | "amenities" | "status" | "sold_to_user_id" | "sold_date" | "created_at" | "updated_at", ExtArgs["result"]["flat"]>
  export type FlatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    soldTo?: boolean | Flat$soldToArgs<ExtArgs>
    enquiries?: boolean | Flat$enquiriesArgs<ExtArgs>
    _count?: boolean | FlatCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FlatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flat"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      soldTo: Prisma.$UserPayload<ExtArgs> | null
      enquiries: Prisma.$EnquiryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string
      address: string
      price: number
      description: string | null
      images: Prisma.JsonValue | null
      amenities: Prisma.JsonValue | null
      status: $Enums.FlatStatus
      sold_to_user_id: number | null
      sold_date: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["flat"]>
    composites: {}
  }

  type FlatGetPayload<S extends boolean | null | undefined | FlatDefaultArgs> = $Result.GetResult<Prisma.$FlatPayload, S>

  type FlatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlatCountAggregateInputType | true
    }

  export interface FlatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flat'], meta: { name: 'Flat' } }
    /**
     * Find zero or one Flat that matches the filter.
     * @param {FlatFindUniqueArgs} args - Arguments to find a Flat
     * @example
     * // Get one Flat
     * const flat = await prisma.flat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlatFindUniqueArgs>(args: SelectSubset<T, FlatFindUniqueArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlatFindUniqueOrThrowArgs} args - Arguments to find a Flat
     * @example
     * // Get one Flat
     * const flat = await prisma.flat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlatFindUniqueOrThrowArgs>(args: SelectSubset<T, FlatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatFindFirstArgs} args - Arguments to find a Flat
     * @example
     * // Get one Flat
     * const flat = await prisma.flat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlatFindFirstArgs>(args?: SelectSubset<T, FlatFindFirstArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatFindFirstOrThrowArgs} args - Arguments to find a Flat
     * @example
     * // Get one Flat
     * const flat = await prisma.flat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlatFindFirstOrThrowArgs>(args?: SelectSubset<T, FlatFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flats
     * const flats = await prisma.flat.findMany()
     * 
     * // Get first 10 Flats
     * const flats = await prisma.flat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flatWithIdOnly = await prisma.flat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlatFindManyArgs>(args?: SelectSubset<T, FlatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flat.
     * @param {FlatCreateArgs} args - Arguments to create a Flat.
     * @example
     * // Create one Flat
     * const Flat = await prisma.flat.create({
     *   data: {
     *     // ... data to create a Flat
     *   }
     * })
     * 
     */
    create<T extends FlatCreateArgs>(args: SelectSubset<T, FlatCreateArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flats.
     * @param {FlatCreateManyArgs} args - Arguments to create many Flats.
     * @example
     * // Create many Flats
     * const flat = await prisma.flat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlatCreateManyArgs>(args?: SelectSubset<T, FlatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Flat.
     * @param {FlatDeleteArgs} args - Arguments to delete one Flat.
     * @example
     * // Delete one Flat
     * const Flat = await prisma.flat.delete({
     *   where: {
     *     // ... filter to delete one Flat
     *   }
     * })
     * 
     */
    delete<T extends FlatDeleteArgs>(args: SelectSubset<T, FlatDeleteArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flat.
     * @param {FlatUpdateArgs} args - Arguments to update one Flat.
     * @example
     * // Update one Flat
     * const flat = await prisma.flat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlatUpdateArgs>(args: SelectSubset<T, FlatUpdateArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flats.
     * @param {FlatDeleteManyArgs} args - Arguments to filter Flats to delete.
     * @example
     * // Delete a few Flats
     * const { count } = await prisma.flat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlatDeleteManyArgs>(args?: SelectSubset<T, FlatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flats
     * const flat = await prisma.flat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlatUpdateManyArgs>(args: SelectSubset<T, FlatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flat.
     * @param {FlatUpsertArgs} args - Arguments to update or create a Flat.
     * @example
     * // Update or create a Flat
     * const flat = await prisma.flat.upsert({
     *   create: {
     *     // ... data to create a Flat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flat we want to update
     *   }
     * })
     */
    upsert<T extends FlatUpsertArgs>(args: SelectSubset<T, FlatUpsertArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatCountArgs} args - Arguments to filter Flats to count.
     * @example
     * // Count the number of Flats
     * const count = await prisma.flat.count({
     *   where: {
     *     // ... the filter for the Flats we want to count
     *   }
     * })
    **/
    count<T extends FlatCountArgs>(
      args?: Subset<T, FlatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlatAggregateArgs>(args: Subset<T, FlatAggregateArgs>): Prisma.PrismaPromise<GetFlatAggregateType<T>>

    /**
     * Group by Flat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatGroupByArgs} args - Group by arguments.
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
      T extends FlatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlatGroupByArgs['orderBy'] }
        : { orderBy?: FlatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flat model
   */
  readonly fields: FlatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    soldTo<T extends Flat$soldToArgs<ExtArgs> = {}>(args?: Subset<T, Flat$soldToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enquiries<T extends Flat$enquiriesArgs<ExtArgs> = {}>(args?: Subset<T, Flat$enquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Flat model
   */
  interface FlatFieldRefs {
    readonly id: FieldRef<"Flat", 'Int'>
    readonly user_id: FieldRef<"Flat", 'Int'>
    readonly title: FieldRef<"Flat", 'String'>
    readonly address: FieldRef<"Flat", 'String'>
    readonly price: FieldRef<"Flat", 'Float'>
    readonly description: FieldRef<"Flat", 'String'>
    readonly images: FieldRef<"Flat", 'Json'>
    readonly amenities: FieldRef<"Flat", 'Json'>
    readonly status: FieldRef<"Flat", 'FlatStatus'>
    readonly sold_to_user_id: FieldRef<"Flat", 'Int'>
    readonly sold_date: FieldRef<"Flat", 'DateTime'>
    readonly created_at: FieldRef<"Flat", 'DateTime'>
    readonly updated_at: FieldRef<"Flat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flat findUnique
   */
  export type FlatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flat to fetch.
     */
    where: FlatWhereUniqueInput
  }

  /**
   * Flat findUniqueOrThrow
   */
  export type FlatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flat to fetch.
     */
    where: FlatWhereUniqueInput
  }

  /**
   * Flat findFirst
   */
  export type FlatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flat to fetch.
     */
    where?: FlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flats to fetch.
     */
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flats.
     */
    cursor?: FlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flats.
     */
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * Flat findFirstOrThrow
   */
  export type FlatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flat to fetch.
     */
    where?: FlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flats to fetch.
     */
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flats.
     */
    cursor?: FlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flats.
     */
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * Flat findMany
   */
  export type FlatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flats to fetch.
     */
    where?: FlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flats to fetch.
     */
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flats.
     */
    cursor?: FlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flats.
     */
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * Flat create
   */
  export type FlatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * The data needed to create a Flat.
     */
    data: XOR<FlatCreateInput, FlatUncheckedCreateInput>
  }

  /**
   * Flat createMany
   */
  export type FlatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flats.
     */
    data: FlatCreateManyInput | FlatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flat update
   */
  export type FlatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * The data needed to update a Flat.
     */
    data: XOR<FlatUpdateInput, FlatUncheckedUpdateInput>
    /**
     * Choose, which Flat to update.
     */
    where: FlatWhereUniqueInput
  }

  /**
   * Flat updateMany
   */
  export type FlatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flats.
     */
    data: XOR<FlatUpdateManyMutationInput, FlatUncheckedUpdateManyInput>
    /**
     * Filter which Flats to update
     */
    where?: FlatWhereInput
    /**
     * Limit how many Flats to update.
     */
    limit?: number
  }

  /**
   * Flat upsert
   */
  export type FlatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * The filter to search for the Flat to update in case it exists.
     */
    where: FlatWhereUniqueInput
    /**
     * In case the Flat found by the `where` argument doesn't exist, create a new Flat with this data.
     */
    create: XOR<FlatCreateInput, FlatUncheckedCreateInput>
    /**
     * In case the Flat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlatUpdateInput, FlatUncheckedUpdateInput>
  }

  /**
   * Flat delete
   */
  export type FlatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter which Flat to delete.
     */
    where: FlatWhereUniqueInput
  }

  /**
   * Flat deleteMany
   */
  export type FlatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flats to delete
     */
    where?: FlatWhereInput
    /**
     * Limit how many Flats to delete.
     */
    limit?: number
  }

  /**
   * Flat.soldTo
   */
  export type Flat$soldToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Flat.enquiries
   */
  export type Flat$enquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    cursor?: EnquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Flat without action
   */
  export type FlatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
  }


  /**
   * Model Enquiry
   */

  export type AggregateEnquiry = {
    _count: EnquiryCountAggregateOutputType | null
    _avg: EnquiryAvgAggregateOutputType | null
    _sum: EnquirySumAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  export type EnquiryAvgAggregateOutputType = {
    id: number | null
    flat_id: number | null
    buyer_id: number | null
    seller_id: number | null
  }

  export type EnquirySumAggregateOutputType = {
    id: number | null
    flat_id: number | null
    buyer_id: number | null
    seller_id: number | null
  }

  export type EnquiryMinAggregateOutputType = {
    id: number | null
    flat_id: number | null
    buyer_id: number | null
    seller_id: number | null
    message: string | null
    status: $Enums.EnquiryStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EnquiryMaxAggregateOutputType = {
    id: number | null
    flat_id: number | null
    buyer_id: number | null
    seller_id: number | null
    message: string | null
    status: $Enums.EnquiryStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EnquiryCountAggregateOutputType = {
    id: number
    flat_id: number
    buyer_id: number
    seller_id: number
    message: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EnquiryAvgAggregateInputType = {
    id?: true
    flat_id?: true
    buyer_id?: true
    seller_id?: true
  }

  export type EnquirySumAggregateInputType = {
    id?: true
    flat_id?: true
    buyer_id?: true
    seller_id?: true
  }

  export type EnquiryMinAggregateInputType = {
    id?: true
    flat_id?: true
    buyer_id?: true
    seller_id?: true
    message?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type EnquiryMaxAggregateInputType = {
    id?: true
    flat_id?: true
    buyer_id?: true
    seller_id?: true
    message?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type EnquiryCountAggregateInputType = {
    id?: true
    flat_id?: true
    buyer_id?: true
    seller_id?: true
    message?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EnquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiry to aggregate.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enquiries
    **/
    _count?: true | EnquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnquiryMaxAggregateInputType
  }

  export type GetEnquiryAggregateType<T extends EnquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateEnquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnquiry[P]>
      : GetScalarType<T[P], AggregateEnquiry[P]>
  }




  export type EnquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithAggregationInput | EnquiryOrderByWithAggregationInput[]
    by: EnquiryScalarFieldEnum[] | EnquiryScalarFieldEnum
    having?: EnquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnquiryCountAggregateInputType | true
    _avg?: EnquiryAvgAggregateInputType
    _sum?: EnquirySumAggregateInputType
    _min?: EnquiryMinAggregateInputType
    _max?: EnquiryMaxAggregateInputType
  }

  export type EnquiryGroupByOutputType = {
    id: number
    flat_id: number
    buyer_id: number
    seller_id: number
    message: string
    status: $Enums.EnquiryStatus
    created_at: Date
    updated_at: Date
    _count: EnquiryCountAggregateOutputType | null
    _avg: EnquiryAvgAggregateOutputType | null
    _sum: EnquirySumAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  type GetEnquiryGroupByPayload<T extends EnquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
            : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
        }
      >
    >


  export type EnquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flat_id?: boolean
    buyer_id?: boolean
    seller_id?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    flat?: boolean | FlatDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enquiry"]>



  export type EnquirySelectScalar = {
    id?: boolean
    flat_id?: boolean
    buyer_id?: boolean
    seller_id?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type EnquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flat_id" | "buyer_id" | "seller_id" | "message" | "status" | "created_at" | "updated_at", ExtArgs["result"]["enquiry"]>
  export type EnquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flat?: boolean | FlatDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EnquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enquiry"
    objects: {
      flat: Prisma.$FlatPayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      flat_id: number
      buyer_id: number
      seller_id: number
      message: string
      status: $Enums.EnquiryStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["enquiry"]>
    composites: {}
  }

  type EnquiryGetPayload<S extends boolean | null | undefined | EnquiryDefaultArgs> = $Result.GetResult<Prisma.$EnquiryPayload, S>

  type EnquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnquiryCountAggregateInputType | true
    }

  export interface EnquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enquiry'], meta: { name: 'Enquiry' } }
    /**
     * Find zero or one Enquiry that matches the filter.
     * @param {EnquiryFindUniqueArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnquiryFindUniqueArgs>(args: SelectSubset<T, EnquiryFindUniqueArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnquiryFindUniqueOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, EnquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnquiryFindFirstArgs>(args?: SelectSubset<T, EnquiryFindFirstArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, EnquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enquiries
     * const enquiries = await prisma.enquiry.findMany()
     * 
     * // Get first 10 Enquiries
     * const enquiries = await prisma.enquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnquiryFindManyArgs>(args?: SelectSubset<T, EnquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enquiry.
     * @param {EnquiryCreateArgs} args - Arguments to create a Enquiry.
     * @example
     * // Create one Enquiry
     * const Enquiry = await prisma.enquiry.create({
     *   data: {
     *     // ... data to create a Enquiry
     *   }
     * })
     * 
     */
    create<T extends EnquiryCreateArgs>(args: SelectSubset<T, EnquiryCreateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enquiries.
     * @param {EnquiryCreateManyArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnquiryCreateManyArgs>(args?: SelectSubset<T, EnquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enquiry.
     * @param {EnquiryDeleteArgs} args - Arguments to delete one Enquiry.
     * @example
     * // Delete one Enquiry
     * const Enquiry = await prisma.enquiry.delete({
     *   where: {
     *     // ... filter to delete one Enquiry
     *   }
     * })
     * 
     */
    delete<T extends EnquiryDeleteArgs>(args: SelectSubset<T, EnquiryDeleteArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enquiry.
     * @param {EnquiryUpdateArgs} args - Arguments to update one Enquiry.
     * @example
     * // Update one Enquiry
     * const enquiry = await prisma.enquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnquiryUpdateArgs>(args: SelectSubset<T, EnquiryUpdateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enquiries.
     * @param {EnquiryDeleteManyArgs} args - Arguments to filter Enquiries to delete.
     * @example
     * // Delete a few Enquiries
     * const { count } = await prisma.enquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnquiryDeleteManyArgs>(args?: SelectSubset<T, EnquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnquiryUpdateManyArgs>(args: SelectSubset<T, EnquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enquiry.
     * @param {EnquiryUpsertArgs} args - Arguments to update or create a Enquiry.
     * @example
     * // Update or create a Enquiry
     * const enquiry = await prisma.enquiry.upsert({
     *   create: {
     *     // ... data to create a Enquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enquiry we want to update
     *   }
     * })
     */
    upsert<T extends EnquiryUpsertArgs>(args: SelectSubset<T, EnquiryUpsertArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryCountArgs} args - Arguments to filter Enquiries to count.
     * @example
     * // Count the number of Enquiries
     * const count = await prisma.enquiry.count({
     *   where: {
     *     // ... the filter for the Enquiries we want to count
     *   }
     * })
    **/
    count<T extends EnquiryCountArgs>(
      args?: Subset<T, EnquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnquiryAggregateArgs>(args: Subset<T, EnquiryAggregateArgs>): Prisma.PrismaPromise<GetEnquiryAggregateType<T>>

    /**
     * Group by Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryGroupByArgs} args - Group by arguments.
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
      T extends EnquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnquiryGroupByArgs['orderBy'] }
        : { orderBy?: EnquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enquiry model
   */
  readonly fields: EnquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flat<T extends FlatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlatDefaultArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Enquiry model
   */
  interface EnquiryFieldRefs {
    readonly id: FieldRef<"Enquiry", 'Int'>
    readonly flat_id: FieldRef<"Enquiry", 'Int'>
    readonly buyer_id: FieldRef<"Enquiry", 'Int'>
    readonly seller_id: FieldRef<"Enquiry", 'Int'>
    readonly message: FieldRef<"Enquiry", 'String'>
    readonly status: FieldRef<"Enquiry", 'EnquiryStatus'>
    readonly created_at: FieldRef<"Enquiry", 'DateTime'>
    readonly updated_at: FieldRef<"Enquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enquiry findUnique
   */
  export type EnquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findUniqueOrThrow
   */
  export type EnquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findFirst
   */
  export type EnquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findFirstOrThrow
   */
  export type EnquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findMany
   */
  export type EnquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiries to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry create
   */
  export type EnquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a Enquiry.
     */
    data: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
  }

  /**
   * Enquiry createMany
   */
  export type EnquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enquiry update
   */
  export type EnquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a Enquiry.
     */
    data: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
    /**
     * Choose, which Enquiry to update.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry updateMany
   */
  export type EnquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
  }

  /**
   * Enquiry upsert
   */
  export type EnquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the Enquiry to update in case it exists.
     */
    where: EnquiryWhereUniqueInput
    /**
     * In case the Enquiry found by the `where` argument doesn't exist, create a new Enquiry with this data.
     */
    create: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
    /**
     * In case the Enquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
  }

  /**
   * Enquiry delete
   */
  export type EnquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter which Enquiry to delete.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry deleteMany
   */
  export type EnquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiries to delete
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to delete.
     */
    limit?: number
  }

  /**
   * Enquiry without action
   */
  export type EnquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    phoneNo: 'phoneNo',
    address: 'address',
    pincode: 'pincode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FlatScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    address: 'address',
    price: 'price',
    description: 'description',
    images: 'images',
    amenities: 'amenities',
    status: 'status',
    sold_to_user_id: 'sold_to_user_id',
    sold_date: 'sold_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FlatScalarFieldEnum = (typeof FlatScalarFieldEnum)[keyof typeof FlatScalarFieldEnum]


  export const EnquiryScalarFieldEnum: {
    id: 'id',
    flat_id: 'flat_id',
    buyer_id: 'buyer_id',
    seller_id: 'seller_id',
    message: 'message',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EnquiryScalarFieldEnum = (typeof EnquiryScalarFieldEnum)[keyof typeof EnquiryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    phoneNo: 'phoneNo',
    address: 'address',
    pincode: 'pincode'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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


  export const FlatOrderByRelevanceFieldEnum: {
    title: 'title',
    address: 'address',
    description: 'description'
  };

  export type FlatOrderByRelevanceFieldEnum = (typeof FlatOrderByRelevanceFieldEnum)[keyof typeof FlatOrderByRelevanceFieldEnum]


  export const EnquiryOrderByRelevanceFieldEnum: {
    message: 'message'
  };

  export type EnquiryOrderByRelevanceFieldEnum = (typeof EnquiryOrderByRelevanceFieldEnum)[keyof typeof EnquiryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'FlatStatus'
   */
  export type EnumFlatStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlatStatus'>
    


  /**
   * Reference to a field of type 'EnquiryStatus'
   */
  export type EnumEnquiryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnquiryStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phoneNo?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    pincode?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    flats?: FlatListRelationFilter
    purchasedFlats?: FlatListRelationFilter
    enquiriesSent?: EnquiryListRelationFilter
    enquiriesReceived?: EnquiryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phoneNo?: SortOrder
    address?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flats?: FlatOrderByRelationAggregateInput
    purchasedFlats?: FlatOrderByRelationAggregateInput
    enquiriesSent?: EnquiryOrderByRelationAggregateInput
    enquiriesReceived?: EnquiryOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phoneNo?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    address?: StringFilter<"User"> | string
    pincode?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    flats?: FlatListRelationFilter
    purchasedFlats?: FlatListRelationFilter
    enquiriesSent?: EnquiryListRelationFilter
    enquiriesReceived?: EnquiryListRelationFilter
  }, "id" | "email" | "phoneNo">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phoneNo?: SortOrder
    address?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    phoneNo?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    pincode?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FlatWhereInput = {
    AND?: FlatWhereInput | FlatWhereInput[]
    OR?: FlatWhereInput[]
    NOT?: FlatWhereInput | FlatWhereInput[]
    id?: IntFilter<"Flat"> | number
    user_id?: IntFilter<"Flat"> | number
    title?: StringFilter<"Flat"> | string
    address?: StringFilter<"Flat"> | string
    price?: FloatFilter<"Flat"> | number
    description?: StringNullableFilter<"Flat"> | string | null
    images?: JsonNullableFilter<"Flat">
    amenities?: JsonNullableFilter<"Flat">
    status?: EnumFlatStatusFilter<"Flat"> | $Enums.FlatStatus
    sold_to_user_id?: IntNullableFilter<"Flat"> | number | null
    sold_date?: DateTimeNullableFilter<"Flat"> | Date | string | null
    created_at?: DateTimeFilter<"Flat"> | Date | string
    updated_at?: DateTimeFilter<"Flat"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    soldTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    enquiries?: EnquiryListRelationFilter
  }

  export type FlatOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    address?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    amenities?: SortOrderInput | SortOrder
    status?: SortOrder
    sold_to_user_id?: SortOrderInput | SortOrder
    sold_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    owner?: UserOrderByWithRelationInput
    soldTo?: UserOrderByWithRelationInput
    enquiries?: EnquiryOrderByRelationAggregateInput
    _relevance?: FlatOrderByRelevanceInput
  }

  export type FlatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlatWhereInput | FlatWhereInput[]
    OR?: FlatWhereInput[]
    NOT?: FlatWhereInput | FlatWhereInput[]
    user_id?: IntFilter<"Flat"> | number
    title?: StringFilter<"Flat"> | string
    address?: StringFilter<"Flat"> | string
    price?: FloatFilter<"Flat"> | number
    description?: StringNullableFilter<"Flat"> | string | null
    images?: JsonNullableFilter<"Flat">
    amenities?: JsonNullableFilter<"Flat">
    status?: EnumFlatStatusFilter<"Flat"> | $Enums.FlatStatus
    sold_to_user_id?: IntNullableFilter<"Flat"> | number | null
    sold_date?: DateTimeNullableFilter<"Flat"> | Date | string | null
    created_at?: DateTimeFilter<"Flat"> | Date | string
    updated_at?: DateTimeFilter<"Flat"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    soldTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    enquiries?: EnquiryListRelationFilter
  }, "id">

  export type FlatOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    address?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    amenities?: SortOrderInput | SortOrder
    status?: SortOrder
    sold_to_user_id?: SortOrderInput | SortOrder
    sold_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FlatCountOrderByAggregateInput
    _avg?: FlatAvgOrderByAggregateInput
    _max?: FlatMaxOrderByAggregateInput
    _min?: FlatMinOrderByAggregateInput
    _sum?: FlatSumOrderByAggregateInput
  }

  export type FlatScalarWhereWithAggregatesInput = {
    AND?: FlatScalarWhereWithAggregatesInput | FlatScalarWhereWithAggregatesInput[]
    OR?: FlatScalarWhereWithAggregatesInput[]
    NOT?: FlatScalarWhereWithAggregatesInput | FlatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Flat"> | number
    user_id?: IntWithAggregatesFilter<"Flat"> | number
    title?: StringWithAggregatesFilter<"Flat"> | string
    address?: StringWithAggregatesFilter<"Flat"> | string
    price?: FloatWithAggregatesFilter<"Flat"> | number
    description?: StringNullableWithAggregatesFilter<"Flat"> | string | null
    images?: JsonNullableWithAggregatesFilter<"Flat">
    amenities?: JsonNullableWithAggregatesFilter<"Flat">
    status?: EnumFlatStatusWithAggregatesFilter<"Flat"> | $Enums.FlatStatus
    sold_to_user_id?: IntNullableWithAggregatesFilter<"Flat"> | number | null
    sold_date?: DateTimeNullableWithAggregatesFilter<"Flat"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Flat"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Flat"> | Date | string
  }

  export type EnquiryWhereInput = {
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    id?: IntFilter<"Enquiry"> | number
    flat_id?: IntFilter<"Enquiry"> | number
    buyer_id?: IntFilter<"Enquiry"> | number
    seller_id?: IntFilter<"Enquiry"> | number
    message?: StringFilter<"Enquiry"> | string
    status?: EnumEnquiryStatusFilter<"Enquiry"> | $Enums.EnquiryStatus
    created_at?: DateTimeFilter<"Enquiry"> | Date | string
    updated_at?: DateTimeFilter<"Enquiry"> | Date | string
    flat?: XOR<FlatScalarRelationFilter, FlatWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EnquiryOrderByWithRelationInput = {
    id?: SortOrder
    flat_id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    flat?: FlatOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
    _relevance?: EnquiryOrderByRelevanceInput
  }

  export type EnquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    flat_id?: IntFilter<"Enquiry"> | number
    buyer_id?: IntFilter<"Enquiry"> | number
    seller_id?: IntFilter<"Enquiry"> | number
    message?: StringFilter<"Enquiry"> | string
    status?: EnumEnquiryStatusFilter<"Enquiry"> | $Enums.EnquiryStatus
    created_at?: DateTimeFilter<"Enquiry"> | Date | string
    updated_at?: DateTimeFilter<"Enquiry"> | Date | string
    flat?: XOR<FlatScalarRelationFilter, FlatWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EnquiryOrderByWithAggregationInput = {
    id?: SortOrder
    flat_id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: EnquiryCountOrderByAggregateInput
    _avg?: EnquiryAvgOrderByAggregateInput
    _max?: EnquiryMaxOrderByAggregateInput
    _min?: EnquiryMinOrderByAggregateInput
    _sum?: EnquirySumOrderByAggregateInput
  }

  export type EnquiryScalarWhereWithAggregatesInput = {
    AND?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    OR?: EnquiryScalarWhereWithAggregatesInput[]
    NOT?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enquiry"> | number
    flat_id?: IntWithAggregatesFilter<"Enquiry"> | number
    buyer_id?: IntWithAggregatesFilter<"Enquiry"> | number
    seller_id?: IntWithAggregatesFilter<"Enquiry"> | number
    message?: StringWithAggregatesFilter<"Enquiry"> | string
    status?: EnumEnquiryStatusWithAggregatesFilter<"Enquiry"> | $Enums.EnquiryStatus
    created_at?: DateTimeWithAggregatesFilter<"Enquiry"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Enquiry"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    phoneNo: string
    address: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flats?: FlatCreateNestedManyWithoutOwnerInput
    purchasedFlats?: FlatCreateNestedManyWithoutSoldToInput
    enquiriesSent?: EnquiryCreateNestedManyWithoutBuyerInput
    enquiriesReceived?: EnquiryCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    phoneNo: string
    address: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flats?: FlatUncheckedCreateNestedManyWithoutOwnerInput
    purchasedFlats?: FlatUncheckedCreateNestedManyWithoutSoldToInput
    enquiriesSent?: EnquiryUncheckedCreateNestedManyWithoutBuyerInput
    enquiriesReceived?: EnquiryUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flats?: FlatUpdateManyWithoutOwnerNestedInput
    purchasedFlats?: FlatUpdateManyWithoutSoldToNestedInput
    enquiriesSent?: EnquiryUpdateManyWithoutBuyerNestedInput
    enquiriesReceived?: EnquiryUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flats?: FlatUncheckedUpdateManyWithoutOwnerNestedInput
    purchasedFlats?: FlatUncheckedUpdateManyWithoutSoldToNestedInput
    enquiriesSent?: EnquiryUncheckedUpdateManyWithoutBuyerNestedInput
    enquiriesReceived?: EnquiryUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    phoneNo: string
    address: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlatCreateInput = {
    title: string
    address: string
    price: number
    description?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.FlatStatus
    sold_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutFlatsInput
    soldTo?: UserCreateNestedOneWithoutPurchasedFlatsInput
    enquiries?: EnquiryCreateNestedManyWithoutFlatInput
  }

  export type FlatUncheckedCreateInput = {
    id?: number
    user_id: number
    title: string
    address: string
    price: number
    description?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.FlatStatus
    sold_to_user_id?: number | null
    sold_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutFlatInput
  }

  export type FlatUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumFlatStatusFieldUpdateOperationsInput | $Enums.FlatStatus
    sold_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFlatsNestedInput
    soldTo?: UserUpdateOneWithoutPurchasedFlatsNestedInput
    enquiries?: EnquiryUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumFlatStatusFieldUpdateOperationsInput | $Enums.FlatStatus
    sold_to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    sold_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUncheckedUpdateManyWithoutFlatNestedInput
  }

  export type FlatCreateManyInput = {
    id?: number
    user_id: number
    title: string
    address: string
    price: number
    description?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.FlatStatus
    sold_to_user_id?: number | null
    sold_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FlatUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumFlatStatusFieldUpdateOperationsInput | $Enums.FlatStatus
    sold_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumFlatStatusFieldUpdateOperationsInput | $Enums.FlatStatus
    sold_to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    sold_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateInput = {
    message: string
    status?: $Enums.EnquiryStatus
    created_at?: Date | string
    updated_at?: Date | string
    flat: FlatCreateNestedOneWithoutEnquiriesInput
    buyer: UserCreateNestedOneWithoutEnquiriesSentInput
    seller: UserCreateNestedOneWithoutEnquiriesReceivedInput
  }

  export type EnquiryUncheckedCreateInput = {
    id?: number
    flat_id: number
    buyer_id: number
    seller_id: number
    message: string
    status?: $Enums.EnquiryStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EnquiryUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    flat?: FlatUpdateOneRequiredWithoutEnquiriesNestedInput
    buyer?: UserUpdateOneRequiredWithoutEnquiriesSentNestedInput
    seller?: UserUpdateOneRequiredWithoutEnquiriesReceivedNestedInput
  }

  export type EnquiryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    flat_id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateManyInput = {
    id?: number
    flat_id: number
    buyer_id: number
    seller_id: number
    message: string
    status?: $Enums.EnquiryStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EnquiryUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    flat_id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FlatListRelationFilter = {
    every?: FlatWhereInput
    some?: FlatWhereInput
    none?: FlatWhereInput
  }

  export type EnquiryListRelationFilter = {
    every?: EnquiryWhereInput
    some?: EnquiryWhereInput
    none?: EnquiryWhereInput
  }

  export type FlatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phoneNo?: SortOrder
    address?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phoneNo?: SortOrder
    address?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phoneNo?: SortOrder
    address?: SortOrder
    pincode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumFlatStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlatStatus | EnumFlatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlatStatus[]
    notIn?: $Enums.FlatStatus[]
    not?: NestedEnumFlatStatusFilter<$PrismaModel> | $Enums.FlatStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FlatOrderByRelevanceInput = {
    fields: FlatOrderByRelevanceFieldEnum | FlatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FlatCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    address?: SortOrder
    price?: SortOrder
    description?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    status?: SortOrder
    sold_to_user_id?: SortOrder
    sold_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FlatAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    sold_to_user_id?: SortOrder
  }

  export type FlatMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    address?: SortOrder
    price?: SortOrder
    description?: SortOrder
    status?: SortOrder
    sold_to_user_id?: SortOrder
    sold_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FlatMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    address?: SortOrder
    price?: SortOrder
    description?: SortOrder
    status?: SortOrder
    sold_to_user_id?: SortOrder
    sold_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FlatSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    sold_to_user_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumFlatStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlatStatus | EnumFlatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlatStatus[]
    notIn?: $Enums.FlatStatus[]
    not?: NestedEnumFlatStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlatStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlatStatusFilter<$PrismaModel>
    _max?: NestedEnumFlatStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumEnquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnquiryStatus | EnumEnquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnquiryStatus[]
    notIn?: $Enums.EnquiryStatus[]
    not?: NestedEnumEnquiryStatusFilter<$PrismaModel> | $Enums.EnquiryStatus
  }

  export type FlatScalarRelationFilter = {
    is?: FlatWhereInput
    isNot?: FlatWhereInput
  }

  export type EnquiryOrderByRelevanceInput = {
    fields: EnquiryOrderByRelevanceFieldEnum | EnquiryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EnquiryCountOrderByAggregateInput = {
    id?: SortOrder
    flat_id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnquiryAvgOrderByAggregateInput = {
    id?: SortOrder
    flat_id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
  }

  export type EnquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    flat_id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnquiryMinOrderByAggregateInput = {
    id?: SortOrder
    flat_id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnquirySumOrderByAggregateInput = {
    id?: SortOrder
    flat_id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
  }

  export type EnumEnquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnquiryStatus | EnumEnquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnquiryStatus[]
    notIn?: $Enums.EnquiryStatus[]
    not?: NestedEnumEnquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumEnquiryStatusFilter<$PrismaModel>
  }

  export type FlatCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FlatCreateWithoutOwnerInput, FlatUncheckedCreateWithoutOwnerInput> | FlatCreateWithoutOwnerInput[] | FlatUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutOwnerInput | FlatCreateOrConnectWithoutOwnerInput[]
    createMany?: FlatCreateManyOwnerInputEnvelope
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
  }

  export type FlatCreateNestedManyWithoutSoldToInput = {
    create?: XOR<FlatCreateWithoutSoldToInput, FlatUncheckedCreateWithoutSoldToInput> | FlatCreateWithoutSoldToInput[] | FlatUncheckedCreateWithoutSoldToInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutSoldToInput | FlatCreateOrConnectWithoutSoldToInput[]
    createMany?: FlatCreateManySoldToInputEnvelope
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
  }

  export type EnquiryCreateNestedManyWithoutBuyerInput = {
    create?: XOR<EnquiryCreateWithoutBuyerInput, EnquiryUncheckedCreateWithoutBuyerInput> | EnquiryCreateWithoutBuyerInput[] | EnquiryUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutBuyerInput | EnquiryCreateOrConnectWithoutBuyerInput[]
    createMany?: EnquiryCreateManyBuyerInputEnvelope
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
  }

  export type EnquiryCreateNestedManyWithoutSellerInput = {
    create?: XOR<EnquiryCreateWithoutSellerInput, EnquiryUncheckedCreateWithoutSellerInput> | EnquiryCreateWithoutSellerInput[] | EnquiryUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutSellerInput | EnquiryCreateOrConnectWithoutSellerInput[]
    createMany?: EnquiryCreateManySellerInputEnvelope
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
  }

  export type FlatUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FlatCreateWithoutOwnerInput, FlatUncheckedCreateWithoutOwnerInput> | FlatCreateWithoutOwnerInput[] | FlatUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutOwnerInput | FlatCreateOrConnectWithoutOwnerInput[]
    createMany?: FlatCreateManyOwnerInputEnvelope
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
  }

  export type FlatUncheckedCreateNestedManyWithoutSoldToInput = {
    create?: XOR<FlatCreateWithoutSoldToInput, FlatUncheckedCreateWithoutSoldToInput> | FlatCreateWithoutSoldToInput[] | FlatUncheckedCreateWithoutSoldToInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutSoldToInput | FlatCreateOrConnectWithoutSoldToInput[]
    createMany?: FlatCreateManySoldToInputEnvelope
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
  }

  export type EnquiryUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<EnquiryCreateWithoutBuyerInput, EnquiryUncheckedCreateWithoutBuyerInput> | EnquiryCreateWithoutBuyerInput[] | EnquiryUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutBuyerInput | EnquiryCreateOrConnectWithoutBuyerInput[]
    createMany?: EnquiryCreateManyBuyerInputEnvelope
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
  }

  export type EnquiryUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<EnquiryCreateWithoutSellerInput, EnquiryUncheckedCreateWithoutSellerInput> | EnquiryCreateWithoutSellerInput[] | EnquiryUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutSellerInput | EnquiryCreateOrConnectWithoutSellerInput[]
    createMany?: EnquiryCreateManySellerInputEnvelope
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FlatUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FlatCreateWithoutOwnerInput, FlatUncheckedCreateWithoutOwnerInput> | FlatCreateWithoutOwnerInput[] | FlatUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutOwnerInput | FlatCreateOrConnectWithoutOwnerInput[]
    upsert?: FlatUpsertWithWhereUniqueWithoutOwnerInput | FlatUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FlatCreateManyOwnerInputEnvelope
    set?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    disconnect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    delete?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    update?: FlatUpdateWithWhereUniqueWithoutOwnerInput | FlatUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FlatUpdateManyWithWhereWithoutOwnerInput | FlatUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FlatScalarWhereInput | FlatScalarWhereInput[]
  }

  export type FlatUpdateManyWithoutSoldToNestedInput = {
    create?: XOR<FlatCreateWithoutSoldToInput, FlatUncheckedCreateWithoutSoldToInput> | FlatCreateWithoutSoldToInput[] | FlatUncheckedCreateWithoutSoldToInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutSoldToInput | FlatCreateOrConnectWithoutSoldToInput[]
    upsert?: FlatUpsertWithWhereUniqueWithoutSoldToInput | FlatUpsertWithWhereUniqueWithoutSoldToInput[]
    createMany?: FlatCreateManySoldToInputEnvelope
    set?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    disconnect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    delete?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    update?: FlatUpdateWithWhereUniqueWithoutSoldToInput | FlatUpdateWithWhereUniqueWithoutSoldToInput[]
    updateMany?: FlatUpdateManyWithWhereWithoutSoldToInput | FlatUpdateManyWithWhereWithoutSoldToInput[]
    deleteMany?: FlatScalarWhereInput | FlatScalarWhereInput[]
  }

  export type EnquiryUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<EnquiryCreateWithoutBuyerInput, EnquiryUncheckedCreateWithoutBuyerInput> | EnquiryCreateWithoutBuyerInput[] | EnquiryUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutBuyerInput | EnquiryCreateOrConnectWithoutBuyerInput[]
    upsert?: EnquiryUpsertWithWhereUniqueWithoutBuyerInput | EnquiryUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: EnquiryCreateManyBuyerInputEnvelope
    set?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    disconnect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    delete?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    update?: EnquiryUpdateWithWhereUniqueWithoutBuyerInput | EnquiryUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: EnquiryUpdateManyWithWhereWithoutBuyerInput | EnquiryUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
  }

  export type EnquiryUpdateManyWithoutSellerNestedInput = {
    create?: XOR<EnquiryCreateWithoutSellerInput, EnquiryUncheckedCreateWithoutSellerInput> | EnquiryCreateWithoutSellerInput[] | EnquiryUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutSellerInput | EnquiryCreateOrConnectWithoutSellerInput[]
    upsert?: EnquiryUpsertWithWhereUniqueWithoutSellerInput | EnquiryUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: EnquiryCreateManySellerInputEnvelope
    set?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    disconnect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    delete?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    update?: EnquiryUpdateWithWhereUniqueWithoutSellerInput | EnquiryUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: EnquiryUpdateManyWithWhereWithoutSellerInput | EnquiryUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FlatUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FlatCreateWithoutOwnerInput, FlatUncheckedCreateWithoutOwnerInput> | FlatCreateWithoutOwnerInput[] | FlatUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutOwnerInput | FlatCreateOrConnectWithoutOwnerInput[]
    upsert?: FlatUpsertWithWhereUniqueWithoutOwnerInput | FlatUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FlatCreateManyOwnerInputEnvelope
    set?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    disconnect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    delete?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    update?: FlatUpdateWithWhereUniqueWithoutOwnerInput | FlatUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FlatUpdateManyWithWhereWithoutOwnerInput | FlatUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FlatScalarWhereInput | FlatScalarWhereInput[]
  }

  export type FlatUncheckedUpdateManyWithoutSoldToNestedInput = {
    create?: XOR<FlatCreateWithoutSoldToInput, FlatUncheckedCreateWithoutSoldToInput> | FlatCreateWithoutSoldToInput[] | FlatUncheckedCreateWithoutSoldToInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutSoldToInput | FlatCreateOrConnectWithoutSoldToInput[]
    upsert?: FlatUpsertWithWhereUniqueWithoutSoldToInput | FlatUpsertWithWhereUniqueWithoutSoldToInput[]
    createMany?: FlatCreateManySoldToInputEnvelope
    set?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    disconnect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    delete?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    update?: FlatUpdateWithWhereUniqueWithoutSoldToInput | FlatUpdateWithWhereUniqueWithoutSoldToInput[]
    updateMany?: FlatUpdateManyWithWhereWithoutSoldToInput | FlatUpdateManyWithWhereWithoutSoldToInput[]
    deleteMany?: FlatScalarWhereInput | FlatScalarWhereInput[]
  }

  export type EnquiryUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<EnquiryCreateWithoutBuyerInput, EnquiryUncheckedCreateWithoutBuyerInput> | EnquiryCreateWithoutBuyerInput[] | EnquiryUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutBuyerInput | EnquiryCreateOrConnectWithoutBuyerInput[]
    upsert?: EnquiryUpsertWithWhereUniqueWithoutBuyerInput | EnquiryUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: EnquiryCreateManyBuyerInputEnvelope
    set?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    disconnect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    delete?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    update?: EnquiryUpdateWithWhereUniqueWithoutBuyerInput | EnquiryUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: EnquiryUpdateManyWithWhereWithoutBuyerInput | EnquiryUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
  }

  export type EnquiryUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<EnquiryCreateWithoutSellerInput, EnquiryUncheckedCreateWithoutSellerInput> | EnquiryCreateWithoutSellerInput[] | EnquiryUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutSellerInput | EnquiryCreateOrConnectWithoutSellerInput[]
    upsert?: EnquiryUpsertWithWhereUniqueWithoutSellerInput | EnquiryUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: EnquiryCreateManySellerInputEnvelope
    set?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    disconnect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    delete?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    update?: EnquiryUpdateWithWhereUniqueWithoutSellerInput | EnquiryUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: EnquiryUpdateManyWithWhereWithoutSellerInput | EnquiryUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFlatsInput = {
    create?: XOR<UserCreateWithoutFlatsInput, UserUncheckedCreateWithoutFlatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPurchasedFlatsInput = {
    create?: XOR<UserCreateWithoutPurchasedFlatsInput, UserUncheckedCreateWithoutPurchasedFlatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasedFlatsInput
    connect?: UserWhereUniqueInput
  }

  export type EnquiryCreateNestedManyWithoutFlatInput = {
    create?: XOR<EnquiryCreateWithoutFlatInput, EnquiryUncheckedCreateWithoutFlatInput> | EnquiryCreateWithoutFlatInput[] | EnquiryUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutFlatInput | EnquiryCreateOrConnectWithoutFlatInput[]
    createMany?: EnquiryCreateManyFlatInputEnvelope
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
  }

  export type EnquiryUncheckedCreateNestedManyWithoutFlatInput = {
    create?: XOR<EnquiryCreateWithoutFlatInput, EnquiryUncheckedCreateWithoutFlatInput> | EnquiryCreateWithoutFlatInput[] | EnquiryUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutFlatInput | EnquiryCreateOrConnectWithoutFlatInput[]
    createMany?: EnquiryCreateManyFlatInputEnvelope
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumFlatStatusFieldUpdateOperationsInput = {
    set?: $Enums.FlatStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutFlatsNestedInput = {
    create?: XOR<UserCreateWithoutFlatsInput, UserUncheckedCreateWithoutFlatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlatsInput
    upsert?: UserUpsertWithoutFlatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlatsInput, UserUpdateWithoutFlatsInput>, UserUncheckedUpdateWithoutFlatsInput>
  }

  export type UserUpdateOneWithoutPurchasedFlatsNestedInput = {
    create?: XOR<UserCreateWithoutPurchasedFlatsInput, UserUncheckedCreateWithoutPurchasedFlatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasedFlatsInput
    upsert?: UserUpsertWithoutPurchasedFlatsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasedFlatsInput, UserUpdateWithoutPurchasedFlatsInput>, UserUncheckedUpdateWithoutPurchasedFlatsInput>
  }

  export type EnquiryUpdateManyWithoutFlatNestedInput = {
    create?: XOR<EnquiryCreateWithoutFlatInput, EnquiryUncheckedCreateWithoutFlatInput> | EnquiryCreateWithoutFlatInput[] | EnquiryUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutFlatInput | EnquiryCreateOrConnectWithoutFlatInput[]
    upsert?: EnquiryUpsertWithWhereUniqueWithoutFlatInput | EnquiryUpsertWithWhereUniqueWithoutFlatInput[]
    createMany?: EnquiryCreateManyFlatInputEnvelope
    set?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    disconnect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    delete?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    update?: EnquiryUpdateWithWhereUniqueWithoutFlatInput | EnquiryUpdateWithWhereUniqueWithoutFlatInput[]
    updateMany?: EnquiryUpdateManyWithWhereWithoutFlatInput | EnquiryUpdateManyWithWhereWithoutFlatInput[]
    deleteMany?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnquiryUncheckedUpdateManyWithoutFlatNestedInput = {
    create?: XOR<EnquiryCreateWithoutFlatInput, EnquiryUncheckedCreateWithoutFlatInput> | EnquiryCreateWithoutFlatInput[] | EnquiryUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutFlatInput | EnquiryCreateOrConnectWithoutFlatInput[]
    upsert?: EnquiryUpsertWithWhereUniqueWithoutFlatInput | EnquiryUpsertWithWhereUniqueWithoutFlatInput[]
    createMany?: EnquiryCreateManyFlatInputEnvelope
    set?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    disconnect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    delete?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    update?: EnquiryUpdateWithWhereUniqueWithoutFlatInput | EnquiryUpdateWithWhereUniqueWithoutFlatInput[]
    updateMany?: EnquiryUpdateManyWithWhereWithoutFlatInput | EnquiryUpdateManyWithWhereWithoutFlatInput[]
    deleteMany?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
  }

  export type FlatCreateNestedOneWithoutEnquiriesInput = {
    create?: XOR<FlatCreateWithoutEnquiriesInput, FlatUncheckedCreateWithoutEnquiriesInput>
    connectOrCreate?: FlatCreateOrConnectWithoutEnquiriesInput
    connect?: FlatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEnquiriesSentInput = {
    create?: XOR<UserCreateWithoutEnquiriesSentInput, UserUncheckedCreateWithoutEnquiriesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnquiriesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEnquiriesReceivedInput = {
    create?: XOR<UserCreateWithoutEnquiriesReceivedInput, UserUncheckedCreateWithoutEnquiriesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnquiriesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEnquiryStatusFieldUpdateOperationsInput = {
    set?: $Enums.EnquiryStatus
  }

  export type FlatUpdateOneRequiredWithoutEnquiriesNestedInput = {
    create?: XOR<FlatCreateWithoutEnquiriesInput, FlatUncheckedCreateWithoutEnquiriesInput>
    connectOrCreate?: FlatCreateOrConnectWithoutEnquiriesInput
    upsert?: FlatUpsertWithoutEnquiriesInput
    connect?: FlatWhereUniqueInput
    update?: XOR<XOR<FlatUpdateToOneWithWhereWithoutEnquiriesInput, FlatUpdateWithoutEnquiriesInput>, FlatUncheckedUpdateWithoutEnquiriesInput>
  }

  export type UserUpdateOneRequiredWithoutEnquiriesSentNestedInput = {
    create?: XOR<UserCreateWithoutEnquiriesSentInput, UserUncheckedCreateWithoutEnquiriesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnquiriesSentInput
    upsert?: UserUpsertWithoutEnquiriesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnquiriesSentInput, UserUpdateWithoutEnquiriesSentInput>, UserUncheckedUpdateWithoutEnquiriesSentInput>
  }

  export type UserUpdateOneRequiredWithoutEnquiriesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutEnquiriesReceivedInput, UserUncheckedCreateWithoutEnquiriesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnquiriesReceivedInput
    upsert?: UserUpsertWithoutEnquiriesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnquiriesReceivedInput, UserUpdateWithoutEnquiriesReceivedInput>, UserUncheckedUpdateWithoutEnquiriesReceivedInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumFlatStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlatStatus | EnumFlatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlatStatus[]
    notIn?: $Enums.FlatStatus[]
    not?: NestedEnumFlatStatusFilter<$PrismaModel> | $Enums.FlatStatus
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumFlatStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlatStatus | EnumFlatStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlatStatus[]
    notIn?: $Enums.FlatStatus[]
    not?: NestedEnumFlatStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlatStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlatStatusFilter<$PrismaModel>
    _max?: NestedEnumFlatStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEnquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnquiryStatus | EnumEnquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnquiryStatus[]
    notIn?: $Enums.EnquiryStatus[]
    not?: NestedEnumEnquiryStatusFilter<$PrismaModel> | $Enums.EnquiryStatus
  }

  export type NestedEnumEnquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnquiryStatus | EnumEnquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnquiryStatus[]
    notIn?: $Enums.EnquiryStatus[]
    not?: NestedEnumEnquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumEnquiryStatusFilter<$PrismaModel>
  }

  export type FlatCreateWithoutOwnerInput = {
    title: string
    address: string
    price: number
    description?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.FlatStatus
    sold_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    soldTo?: UserCreateNestedOneWithoutPurchasedFlatsInput
    enquiries?: EnquiryCreateNestedManyWithoutFlatInput
  }

  export type FlatUncheckedCreateWithoutOwnerInput = {
    id?: number
    title: string
    address: string
    price: number
    description?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.FlatStatus
    sold_to_user_id?: number | null
    sold_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutFlatInput
  }

  export type FlatCreateOrConnectWithoutOwnerInput = {
    where: FlatWhereUniqueInput
    create: XOR<FlatCreateWithoutOwnerInput, FlatUncheckedCreateWithoutOwnerInput>
  }

  export type FlatCreateManyOwnerInputEnvelope = {
    data: FlatCreateManyOwnerInput | FlatCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type FlatCreateWithoutSoldToInput = {
    title: string
    address: string
    price: number
    description?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.FlatStatus
    sold_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutFlatsInput
    enquiries?: EnquiryCreateNestedManyWithoutFlatInput
  }

  export type FlatUncheckedCreateWithoutSoldToInput = {
    id?: number
    user_id: number
    title: string
    address: string
    price: number
    description?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.FlatStatus
    sold_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutFlatInput
  }

  export type FlatCreateOrConnectWithoutSoldToInput = {
    where: FlatWhereUniqueInput
    create: XOR<FlatCreateWithoutSoldToInput, FlatUncheckedCreateWithoutSoldToInput>
  }

  export type FlatCreateManySoldToInputEnvelope = {
    data: FlatCreateManySoldToInput | FlatCreateManySoldToInput[]
    skipDuplicates?: boolean
  }

  export type EnquiryCreateWithoutBuyerInput = {
    message: string
    status?: $Enums.EnquiryStatus
    created_at?: Date | string
    updated_at?: Date | string
    flat: FlatCreateNestedOneWithoutEnquiriesInput
    seller: UserCreateNestedOneWithoutEnquiriesReceivedInput
  }

  export type EnquiryUncheckedCreateWithoutBuyerInput = {
    id?: number
    flat_id: number
    seller_id: number
    message: string
    status?: $Enums.EnquiryStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EnquiryCreateOrConnectWithoutBuyerInput = {
    where: EnquiryWhereUniqueInput
    create: XOR<EnquiryCreateWithoutBuyerInput, EnquiryUncheckedCreateWithoutBuyerInput>
  }

  export type EnquiryCreateManyBuyerInputEnvelope = {
    data: EnquiryCreateManyBuyerInput | EnquiryCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type EnquiryCreateWithoutSellerInput = {
    message: string
    status?: $Enums.EnquiryStatus
    created_at?: Date | string
    updated_at?: Date | string
    flat: FlatCreateNestedOneWithoutEnquiriesInput
    buyer: UserCreateNestedOneWithoutEnquiriesSentInput
  }

  export type EnquiryUncheckedCreateWithoutSellerInput = {
    id?: number
    flat_id: number
    buyer_id: number
    message: string
    status?: $Enums.EnquiryStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EnquiryCreateOrConnectWithoutSellerInput = {
    where: EnquiryWhereUniqueInput
    create: XOR<EnquiryCreateWithoutSellerInput, EnquiryUncheckedCreateWithoutSellerInput>
  }

  export type EnquiryCreateManySellerInputEnvelope = {
    data: EnquiryCreateManySellerInput | EnquiryCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type FlatUpsertWithWhereUniqueWithoutOwnerInput = {
    where: FlatWhereUniqueInput
    update: XOR<FlatUpdateWithoutOwnerInput, FlatUncheckedUpdateWithoutOwnerInput>
    create: XOR<FlatCreateWithoutOwnerInput, FlatUncheckedCreateWithoutOwnerInput>
  }

  export type FlatUpdateWithWhereUniqueWithoutOwnerInput = {
    where: FlatWhereUniqueInput
    data: XOR<FlatUpdateWithoutOwnerInput, FlatUncheckedUpdateWithoutOwnerInput>
  }

  export type FlatUpdateManyWithWhereWithoutOwnerInput = {
    where: FlatScalarWhereInput
    data: XOR<FlatUpdateManyMutationInput, FlatUncheckedUpdateManyWithoutOwnerInput>
  }

  export type FlatScalarWhereInput = {
    AND?: FlatScalarWhereInput | FlatScalarWhereInput[]
    OR?: FlatScalarWhereInput[]
    NOT?: FlatScalarWhereInput | FlatScalarWhereInput[]
    id?: IntFilter<"Flat"> | number
    user_id?: IntFilter<"Flat"> | number
    title?: StringFilter<"Flat"> | string
    address?: StringFilter<"Flat"> | string
    price?: FloatFilter<"Flat"> | number
    description?: StringNullableFilter<"Flat"> | string | null
    images?: JsonNullableFilter<"Flat">
    amenities?: JsonNullableFilter<"Flat">
    status?: EnumFlatStatusFilter<"Flat"> | $Enums.FlatStatus
    sold_to_user_id?: IntNullableFilter<"Flat"> | number | null
    sold_date?: DateTimeNullableFilter<"Flat"> | Date | string | null
    created_at?: DateTimeFilter<"Flat"> | Date | string
    updated_at?: DateTimeFilter<"Flat"> | Date | string
  }

  export type FlatUpsertWithWhereUniqueWithoutSoldToInput = {
    where: FlatWhereUniqueInput
    update: XOR<FlatUpdateWithoutSoldToInput, FlatUncheckedUpdateWithoutSoldToInput>
    create: XOR<FlatCreateWithoutSoldToInput, FlatUncheckedCreateWithoutSoldToInput>
  }

  export type FlatUpdateWithWhereUniqueWithoutSoldToInput = {
    where: FlatWhereUniqueInput
    data: XOR<FlatUpdateWithoutSoldToInput, FlatUncheckedUpdateWithoutSoldToInput>
  }

  export type FlatUpdateManyWithWhereWithoutSoldToInput = {
    where: FlatScalarWhereInput
    data: XOR<FlatUpdateManyMutationInput, FlatUncheckedUpdateManyWithoutSoldToInput>
  }

  export type EnquiryUpsertWithWhereUniqueWithoutBuyerInput = {
    where: EnquiryWhereUniqueInput
    update: XOR<EnquiryUpdateWithoutBuyerInput, EnquiryUncheckedUpdateWithoutBuyerInput>
    create: XOR<EnquiryCreateWithoutBuyerInput, EnquiryUncheckedCreateWithoutBuyerInput>
  }

  export type EnquiryUpdateWithWhereUniqueWithoutBuyerInput = {
    where: EnquiryWhereUniqueInput
    data: XOR<EnquiryUpdateWithoutBuyerInput, EnquiryUncheckedUpdateWithoutBuyerInput>
  }

  export type EnquiryUpdateManyWithWhereWithoutBuyerInput = {
    where: EnquiryScalarWhereInput
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyWithoutBuyerInput>
  }

  export type EnquiryScalarWhereInput = {
    AND?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
    OR?: EnquiryScalarWhereInput[]
    NOT?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
    id?: IntFilter<"Enquiry"> | number
    flat_id?: IntFilter<"Enquiry"> | number
    buyer_id?: IntFilter<"Enquiry"> | number
    seller_id?: IntFilter<"Enquiry"> | number
    message?: StringFilter<"Enquiry"> | string
    status?: EnumEnquiryStatusFilter<"Enquiry"> | $Enums.EnquiryStatus
    created_at?: DateTimeFilter<"Enquiry"> | Date | string
    updated_at?: DateTimeFilter<"Enquiry"> | Date | string
  }

  export type EnquiryUpsertWithWhereUniqueWithoutSellerInput = {
    where: EnquiryWhereUniqueInput
    update: XOR<EnquiryUpdateWithoutSellerInput, EnquiryUncheckedUpdateWithoutSellerInput>
    create: XOR<EnquiryCreateWithoutSellerInput, EnquiryUncheckedCreateWithoutSellerInput>
  }

  export type EnquiryUpdateWithWhereUniqueWithoutSellerInput = {
    where: EnquiryWhereUniqueInput
    data: XOR<EnquiryUpdateWithoutSellerInput, EnquiryUncheckedUpdateWithoutSellerInput>
  }

  export type EnquiryUpdateManyWithWhereWithoutSellerInput = {
    where: EnquiryScalarWhereInput
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyWithoutSellerInput>
  }

  export type UserCreateWithoutFlatsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    phoneNo: string
    address: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchasedFlats?: FlatCreateNestedManyWithoutSoldToInput
    enquiriesSent?: EnquiryCreateNestedManyWithoutBuyerInput
    enquiriesReceived?: EnquiryCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutFlatsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    phoneNo: string
    address: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchasedFlats?: FlatUncheckedCreateNestedManyWithoutSoldToInput
    enquiriesSent?: EnquiryUncheckedCreateNestedManyWithoutBuyerInput
    enquiriesReceived?: EnquiryUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutFlatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlatsInput, UserUncheckedCreateWithoutFlatsInput>
  }

  export type UserCreateWithoutPurchasedFlatsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    phoneNo: string
    address: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flats?: FlatCreateNestedManyWithoutOwnerInput
    enquiriesSent?: EnquiryCreateNestedManyWithoutBuyerInput
    enquiriesReceived?: EnquiryCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutPurchasedFlatsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    phoneNo: string
    address: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flats?: FlatUncheckedCreateNestedManyWithoutOwnerInput
    enquiriesSent?: EnquiryUncheckedCreateNestedManyWithoutBuyerInput
    enquiriesReceived?: EnquiryUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutPurchasedFlatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasedFlatsInput, UserUncheckedCreateWithoutPurchasedFlatsInput>
  }

  export type EnquiryCreateWithoutFlatInput = {
    message: string
    status?: $Enums.EnquiryStatus
    created_at?: Date | string
    updated_at?: Date | string
    buyer: UserCreateNestedOneWithoutEnquiriesSentInput
    seller: UserCreateNestedOneWithoutEnquiriesReceivedInput
  }

  export type EnquiryUncheckedCreateWithoutFlatInput = {
    id?: number
    buyer_id: number
    seller_id: number
    message: string
    status?: $Enums.EnquiryStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EnquiryCreateOrConnectWithoutFlatInput = {
    where: EnquiryWhereUniqueInput
    create: XOR<EnquiryCreateWithoutFlatInput, EnquiryUncheckedCreateWithoutFlatInput>
  }

  export type EnquiryCreateManyFlatInputEnvelope = {
    data: EnquiryCreateManyFlatInput | EnquiryCreateManyFlatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFlatsInput = {
    update: XOR<UserUpdateWithoutFlatsInput, UserUncheckedUpdateWithoutFlatsInput>
    create: XOR<UserCreateWithoutFlatsInput, UserUncheckedCreateWithoutFlatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlatsInput, UserUncheckedUpdateWithoutFlatsInput>
  }

  export type UserUpdateWithoutFlatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasedFlats?: FlatUpdateManyWithoutSoldToNestedInput
    enquiriesSent?: EnquiryUpdateManyWithoutBuyerNestedInput
    enquiriesReceived?: EnquiryUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutFlatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasedFlats?: FlatUncheckedUpdateManyWithoutSoldToNestedInput
    enquiriesSent?: EnquiryUncheckedUpdateManyWithoutBuyerNestedInput
    enquiriesReceived?: EnquiryUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserUpsertWithoutPurchasedFlatsInput = {
    update: XOR<UserUpdateWithoutPurchasedFlatsInput, UserUncheckedUpdateWithoutPurchasedFlatsInput>
    create: XOR<UserCreateWithoutPurchasedFlatsInput, UserUncheckedCreateWithoutPurchasedFlatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasedFlatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasedFlatsInput, UserUncheckedUpdateWithoutPurchasedFlatsInput>
  }

  export type UserUpdateWithoutPurchasedFlatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flats?: FlatUpdateManyWithoutOwnerNestedInput
    enquiriesSent?: EnquiryUpdateManyWithoutBuyerNestedInput
    enquiriesReceived?: EnquiryUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasedFlatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flats?: FlatUncheckedUpdateManyWithoutOwnerNestedInput
    enquiriesSent?: EnquiryUncheckedUpdateManyWithoutBuyerNestedInput
    enquiriesReceived?: EnquiryUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type EnquiryUpsertWithWhereUniqueWithoutFlatInput = {
    where: EnquiryWhereUniqueInput
    update: XOR<EnquiryUpdateWithoutFlatInput, EnquiryUncheckedUpdateWithoutFlatInput>
    create: XOR<EnquiryCreateWithoutFlatInput, EnquiryUncheckedCreateWithoutFlatInput>
  }

  export type EnquiryUpdateWithWhereUniqueWithoutFlatInput = {
    where: EnquiryWhereUniqueInput
    data: XOR<EnquiryUpdateWithoutFlatInput, EnquiryUncheckedUpdateWithoutFlatInput>
  }

  export type EnquiryUpdateManyWithWhereWithoutFlatInput = {
    where: EnquiryScalarWhereInput
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyWithoutFlatInput>
  }

  export type FlatCreateWithoutEnquiriesInput = {
    title: string
    address: string
    price: number
    description?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.FlatStatus
    sold_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutFlatsInput
    soldTo?: UserCreateNestedOneWithoutPurchasedFlatsInput
  }

  export type FlatUncheckedCreateWithoutEnquiriesInput = {
    id?: number
    user_id: number
    title: string
    address: string
    price: number
    description?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.FlatStatus
    sold_to_user_id?: number | null
    sold_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FlatCreateOrConnectWithoutEnquiriesInput = {
    where: FlatWhereUniqueInput
    create: XOR<FlatCreateWithoutEnquiriesInput, FlatUncheckedCreateWithoutEnquiriesInput>
  }

  export type UserCreateWithoutEnquiriesSentInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    phoneNo: string
    address: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flats?: FlatCreateNestedManyWithoutOwnerInput
    purchasedFlats?: FlatCreateNestedManyWithoutSoldToInput
    enquiriesReceived?: EnquiryCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutEnquiriesSentInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    phoneNo: string
    address: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flats?: FlatUncheckedCreateNestedManyWithoutOwnerInput
    purchasedFlats?: FlatUncheckedCreateNestedManyWithoutSoldToInput
    enquiriesReceived?: EnquiryUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutEnquiriesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnquiriesSentInput, UserUncheckedCreateWithoutEnquiriesSentInput>
  }

  export type UserCreateWithoutEnquiriesReceivedInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    phoneNo: string
    address: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flats?: FlatCreateNestedManyWithoutOwnerInput
    purchasedFlats?: FlatCreateNestedManyWithoutSoldToInput
    enquiriesSent?: EnquiryCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutEnquiriesReceivedInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    phoneNo: string
    address: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flats?: FlatUncheckedCreateNestedManyWithoutOwnerInput
    purchasedFlats?: FlatUncheckedCreateNestedManyWithoutSoldToInput
    enquiriesSent?: EnquiryUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutEnquiriesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnquiriesReceivedInput, UserUncheckedCreateWithoutEnquiriesReceivedInput>
  }

  export type FlatUpsertWithoutEnquiriesInput = {
    update: XOR<FlatUpdateWithoutEnquiriesInput, FlatUncheckedUpdateWithoutEnquiriesInput>
    create: XOR<FlatCreateWithoutEnquiriesInput, FlatUncheckedCreateWithoutEnquiriesInput>
    where?: FlatWhereInput
  }

  export type FlatUpdateToOneWithWhereWithoutEnquiriesInput = {
    where?: FlatWhereInput
    data: XOR<FlatUpdateWithoutEnquiriesInput, FlatUncheckedUpdateWithoutEnquiriesInput>
  }

  export type FlatUpdateWithoutEnquiriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumFlatStatusFieldUpdateOperationsInput | $Enums.FlatStatus
    sold_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFlatsNestedInput
    soldTo?: UserUpdateOneWithoutPurchasedFlatsNestedInput
  }

  export type FlatUncheckedUpdateWithoutEnquiriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumFlatStatusFieldUpdateOperationsInput | $Enums.FlatStatus
    sold_to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    sold_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutEnquiriesSentInput = {
    update: XOR<UserUpdateWithoutEnquiriesSentInput, UserUncheckedUpdateWithoutEnquiriesSentInput>
    create: XOR<UserCreateWithoutEnquiriesSentInput, UserUncheckedCreateWithoutEnquiriesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnquiriesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnquiriesSentInput, UserUncheckedUpdateWithoutEnquiriesSentInput>
  }

  export type UserUpdateWithoutEnquiriesSentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flats?: FlatUpdateManyWithoutOwnerNestedInput
    purchasedFlats?: FlatUpdateManyWithoutSoldToNestedInput
    enquiriesReceived?: EnquiryUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutEnquiriesSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flats?: FlatUncheckedUpdateManyWithoutOwnerNestedInput
    purchasedFlats?: FlatUncheckedUpdateManyWithoutSoldToNestedInput
    enquiriesReceived?: EnquiryUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserUpsertWithoutEnquiriesReceivedInput = {
    update: XOR<UserUpdateWithoutEnquiriesReceivedInput, UserUncheckedUpdateWithoutEnquiriesReceivedInput>
    create: XOR<UserCreateWithoutEnquiriesReceivedInput, UserUncheckedCreateWithoutEnquiriesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnquiriesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnquiriesReceivedInput, UserUncheckedUpdateWithoutEnquiriesReceivedInput>
  }

  export type UserUpdateWithoutEnquiriesReceivedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flats?: FlatUpdateManyWithoutOwnerNestedInput
    purchasedFlats?: FlatUpdateManyWithoutSoldToNestedInput
    enquiriesSent?: EnquiryUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutEnquiriesReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phoneNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flats?: FlatUncheckedUpdateManyWithoutOwnerNestedInput
    purchasedFlats?: FlatUncheckedUpdateManyWithoutSoldToNestedInput
    enquiriesSent?: EnquiryUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type FlatCreateManyOwnerInput = {
    id?: number
    title: string
    address: string
    price: number
    description?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.FlatStatus
    sold_to_user_id?: number | null
    sold_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FlatCreateManySoldToInput = {
    id?: number
    user_id: number
    title: string
    address: string
    price: number
    description?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.FlatStatus
    sold_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EnquiryCreateManyBuyerInput = {
    id?: number
    flat_id: number
    seller_id: number
    message: string
    status?: $Enums.EnquiryStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EnquiryCreateManySellerInput = {
    id?: number
    flat_id: number
    buyer_id: number
    message: string
    status?: $Enums.EnquiryStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FlatUpdateWithoutOwnerInput = {
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumFlatStatusFieldUpdateOperationsInput | $Enums.FlatStatus
    sold_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    soldTo?: UserUpdateOneWithoutPurchasedFlatsNestedInput
    enquiries?: EnquiryUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumFlatStatusFieldUpdateOperationsInput | $Enums.FlatStatus
    sold_to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    sold_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUncheckedUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumFlatStatusFieldUpdateOperationsInput | $Enums.FlatStatus
    sold_to_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    sold_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlatUpdateWithoutSoldToInput = {
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumFlatStatusFieldUpdateOperationsInput | $Enums.FlatStatus
    sold_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFlatsNestedInput
    enquiries?: EnquiryUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateWithoutSoldToInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumFlatStatusFieldUpdateOperationsInput | $Enums.FlatStatus
    sold_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUncheckedUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateManyWithoutSoldToInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumFlatStatusFieldUpdateOperationsInput | $Enums.FlatStatus
    sold_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUpdateWithoutBuyerInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    flat?: FlatUpdateOneRequiredWithoutEnquiriesNestedInput
    seller?: UserUpdateOneRequiredWithoutEnquiriesReceivedNestedInput
  }

  export type EnquiryUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    flat_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    flat_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUpdateWithoutSellerInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    flat?: FlatUpdateOneRequiredWithoutEnquiriesNestedInput
    buyer?: UserUpdateOneRequiredWithoutEnquiriesSentNestedInput
  }

  export type EnquiryUncheckedUpdateWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    flat_id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateManyWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    flat_id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateManyFlatInput = {
    id?: number
    buyer_id: number
    seller_id: number
    message: string
    status?: $Enums.EnquiryStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EnquiryUpdateWithoutFlatInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutEnquiriesSentNestedInput
    seller?: UserUpdateOneRequiredWithoutEnquiriesReceivedNestedInput
  }

  export type EnquiryUncheckedUpdateWithoutFlatInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateManyWithoutFlatInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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