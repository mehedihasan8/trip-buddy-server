
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model TravelBuddyRequest
 * 
 */
export type TravelBuddyRequest = $Result.DefaultSelection<Prisma.$TravelBuddyRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserActive: {
  ACTIVATE: 'ACTIVATE',
  DEACTIVATE: 'DEACTIVATE'
};

export type UserActive = (typeof UserActive)[keyof typeof UserActive]


export const TravelStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type TravelStatus = (typeof TravelStatus)[keyof typeof TravelStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserActive = $Enums.UserActive

export const UserActive: typeof $Enums.UserActive

export type TravelStatus = $Enums.TravelStatus

export const TravelStatus: typeof $Enums.TravelStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs>;

  /**
   * `prisma.travelBuddyRequest`: Exposes CRUD operations for the **TravelBuddyRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelBuddyRequests
    * const travelBuddyRequests = await prisma.travelBuddyRequest.findMany()
    * ```
    */
  get travelBuddyRequest(): Prisma.TravelBuddyRequestDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Trip: 'Trip',
    TravelBuddyRequest: 'TravelBuddyRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'trip' | 'travelBuddyRequest'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>,
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      TravelBuddyRequest: {
        payload: Prisma.$TravelBuddyRequestPayload<ExtArgs>
        fields: Prisma.TravelBuddyRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelBuddyRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBuddyRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelBuddyRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBuddyRequestPayload>
          }
          findFirst: {
            args: Prisma.TravelBuddyRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBuddyRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelBuddyRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBuddyRequestPayload>
          }
          findMany: {
            args: Prisma.TravelBuddyRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBuddyRequestPayload>[]
          }
          create: {
            args: Prisma.TravelBuddyRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBuddyRequestPayload>
          }
          createMany: {
            args: Prisma.TravelBuddyRequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TravelBuddyRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBuddyRequestPayload>
          }
          update: {
            args: Prisma.TravelBuddyRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBuddyRequestPayload>
          }
          deleteMany: {
            args: Prisma.TravelBuddyRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TravelBuddyRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TravelBuddyRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelBuddyRequestPayload>
          }
          aggregate: {
            args: Prisma.TravelBuddyRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTravelBuddyRequest>
          }
          groupBy: {
            args: Prisma.TravelBuddyRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TravelBuddyRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelBuddyRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<TravelBuddyRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    Trip: number
    travelBuddyRequest: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Trip?: boolean | UserCountOutputTypeCountTripArgs
    travelBuddyRequest?: boolean | UserCountOutputTypeCountTravelBuddyRequestArgs
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
  export type UserCountOutputTypeCountTripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTravelBuddyRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelBuddyRequestWhereInput
  }



  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    travelBuddyRequest: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travelBuddyRequest?: boolean | TripCountOutputTypeCountTravelBuddyRequestArgs
  }

  // Custom InputTypes

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountTravelBuddyRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelBuddyRequestWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    isActive: $Enums.UserActive | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    isActive: $Enums.UserActive | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    isActive: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    isActive?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    isActive?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    isActive?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt: Date
    isActive: $Enums.UserActive
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    createdAt?: boolean
    isActive?: boolean
    updatedAt?: boolean
    Trip?: boolean | User$TripArgs<ExtArgs>
    travelBuddyRequest?: boolean | User$travelBuddyRequestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    isActive?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Trip?: boolean | User$TripArgs<ExtArgs>
    travelBuddyRequest?: boolean | User$travelBuddyRequestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Trip: Prisma.$TripPayload<ExtArgs>[]
      travelBuddyRequest: Prisma.$TravelBuddyRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.UserRole
      createdAt: Date
      isActive: $Enums.UserActive
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Trip<T extends User$TripArgs<ExtArgs> = {}>(args?: Subset<T, User$TripArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findMany'> | Null>;

    travelBuddyRequest<T extends User$travelBuddyRequestArgs<ExtArgs> = {}>(args?: Subset<T, User$travelBuddyRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelBuddyRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'UserActive'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.Trip
   */
  export type User$TripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }


  /**
   * User.travelBuddyRequest
   */
  export type User$travelBuddyRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBuddyRequest
     */
    select?: TravelBuddyRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelBuddyRequestInclude<ExtArgs> | null
    where?: TravelBuddyRequestWhereInput
    orderBy?: TravelBuddyRequestOrderByWithRelationInput | TravelBuddyRequestOrderByWithRelationInput[]
    cursor?: TravelBuddyRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelBuddyRequestScalarFieldEnum | TravelBuddyRequestScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    budget: number | null
  }

  export type TripSumAggregateOutputType = {
    budget: number | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    destination: string | null
    title: string | null
    image: string | null
    startDate: string | null
    description: string | null
    tripType: string | null
    endDate: string | null
    budget: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    destination: string | null
    title: string | null
    image: string | null
    startDate: string | null
    description: string | null
    tripType: string | null
    endDate: string | null
    budget: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    destination: number
    title: number
    image: number
    startDate: number
    description: number
    tripType: number
    endDate: number
    activities: number
    budget: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    budget?: true
  }

  export type TripSumAggregateInputType = {
    budget?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    destination?: true
    title?: true
    image?: true
    startDate?: true
    description?: true
    tripType?: true
    endDate?: true
    budget?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    destination?: true
    title?: true
    image?: true
    startDate?: true
    description?: true
    tripType?: true
    endDate?: true
    budget?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    destination?: true
    title?: true
    image?: true
    startDate?: true
    description?: true
    tripType?: true
    endDate?: true
    activities?: true
    budget?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    destination: string
    title: string
    image: string
    startDate: string
    description: string
    tripType: string
    endDate: string
    activities: string[]
    budget: number
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    destination?: boolean
    title?: boolean
    image?: boolean
    startDate?: boolean
    description?: boolean
    tripType?: boolean
    endDate?: boolean
    activities?: boolean
    budget?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    travelBuddyRequest?: boolean | Trip$travelBuddyRequestArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    destination?: boolean
    title?: boolean
    image?: boolean
    startDate?: boolean
    description?: boolean
    tripType?: boolean
    endDate?: boolean
    activities?: boolean
    budget?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    travelBuddyRequest?: boolean | Trip$travelBuddyRequestArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      travelBuddyRequest: Prisma.$TravelBuddyRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      destination: string
      title: string
      image: string
      startDate: string
      description: string
      tripType: string
      endDate: string
      activities: string[]
      budget: number
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }


  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TripFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Trip that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TripFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TripFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
    **/
    create<T extends TripCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TripCreateArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Trips.
     *     @param {TripCreateManyArgs} args - Arguments to create many Trips.
     *     @example
     *     // Create many Trips
     *     const trip = await prisma.trip.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TripCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
    **/
    delete<T extends TripDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TripDeleteArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TripUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TripUpdateArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TripDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TripUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
    **/
    upsert<T extends TripUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TripUpsertArgs<ExtArgs>>
    ): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    travelBuddyRequest<T extends Trip$travelBuddyRequestArgs<ExtArgs> = {}>(args?: Subset<T, Trip$travelBuddyRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelBuddyRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Trip model
   */ 
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly destination: FieldRef<"Trip", 'String'>
    readonly title: FieldRef<"Trip", 'String'>
    readonly image: FieldRef<"Trip", 'String'>
    readonly startDate: FieldRef<"Trip", 'String'>
    readonly description: FieldRef<"Trip", 'String'>
    readonly tripType: FieldRef<"Trip", 'String'>
    readonly endDate: FieldRef<"Trip", 'String'>
    readonly activities: FieldRef<"Trip", 'String[]'>
    readonly budget: FieldRef<"Trip", 'Int'>
    readonly userId: FieldRef<"Trip", 'String'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }


  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }


  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }


  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }


  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }


  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }


  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }


  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
  }


  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }


  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }


  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
  }


  /**
   * Trip.travelBuddyRequest
   */
  export type Trip$travelBuddyRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBuddyRequest
     */
    select?: TravelBuddyRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelBuddyRequestInclude<ExtArgs> | null
    where?: TravelBuddyRequestWhereInput
    orderBy?: TravelBuddyRequestOrderByWithRelationInput | TravelBuddyRequestOrderByWithRelationInput[]
    cursor?: TravelBuddyRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelBuddyRequestScalarFieldEnum | TravelBuddyRequestScalarFieldEnum[]
  }


  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TripInclude<ExtArgs> | null
  }



  /**
   * Model TravelBuddyRequest
   */

  export type AggregateTravelBuddyRequest = {
    _count: TravelBuddyRequestCountAggregateOutputType | null
    _min: TravelBuddyRequestMinAggregateOutputType | null
    _max: TravelBuddyRequestMaxAggregateOutputType | null
  }

  export type TravelBuddyRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: string | null
    status: $Enums.TravelStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelBuddyRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: string | null
    status: $Enums.TravelStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelBuddyRequestCountAggregateOutputType = {
    id: number
    userId: number
    tripId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TravelBuddyRequestMinAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelBuddyRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelBuddyRequestCountAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TravelBuddyRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelBuddyRequest to aggregate.
     */
    where?: TravelBuddyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelBuddyRequests to fetch.
     */
    orderBy?: TravelBuddyRequestOrderByWithRelationInput | TravelBuddyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelBuddyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelBuddyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelBuddyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelBuddyRequests
    **/
    _count?: true | TravelBuddyRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelBuddyRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelBuddyRequestMaxAggregateInputType
  }

  export type GetTravelBuddyRequestAggregateType<T extends TravelBuddyRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelBuddyRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelBuddyRequest[P]>
      : GetScalarType<T[P], AggregateTravelBuddyRequest[P]>
  }




  export type TravelBuddyRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelBuddyRequestWhereInput
    orderBy?: TravelBuddyRequestOrderByWithAggregationInput | TravelBuddyRequestOrderByWithAggregationInput[]
    by: TravelBuddyRequestScalarFieldEnum[] | TravelBuddyRequestScalarFieldEnum
    having?: TravelBuddyRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelBuddyRequestCountAggregateInputType | true
    _min?: TravelBuddyRequestMinAggregateInputType
    _max?: TravelBuddyRequestMaxAggregateInputType
  }

  export type TravelBuddyRequestGroupByOutputType = {
    id: string
    userId: string
    tripId: string
    status: $Enums.TravelStatus
    createdAt: Date
    updatedAt: Date
    _count: TravelBuddyRequestCountAggregateOutputType | null
    _min: TravelBuddyRequestMinAggregateOutputType | null
    _max: TravelBuddyRequestMaxAggregateOutputType | null
  }

  type GetTravelBuddyRequestGroupByPayload<T extends TravelBuddyRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelBuddyRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelBuddyRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelBuddyRequestGroupByOutputType[P]>
            : GetScalarType<T[P], TravelBuddyRequestGroupByOutputType[P]>
        }
      >
    >


  export type TravelBuddyRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelBuddyRequest"]>

  export type TravelBuddyRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    tripId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TravelBuddyRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }


  export type $TravelBuddyRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelBuddyRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tripId: string
      status: $Enums.TravelStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["travelBuddyRequest"]>
    composites: {}
  }


  type TravelBuddyRequestGetPayload<S extends boolean | null | undefined | TravelBuddyRequestDefaultArgs> = $Result.GetResult<Prisma.$TravelBuddyRequestPayload, S>

  type TravelBuddyRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TravelBuddyRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TravelBuddyRequestCountAggregateInputType | true
    }

  export interface TravelBuddyRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelBuddyRequest'], meta: { name: 'TravelBuddyRequest' } }
    /**
     * Find zero or one TravelBuddyRequest that matches the filter.
     * @param {TravelBuddyRequestFindUniqueArgs} args - Arguments to find a TravelBuddyRequest
     * @example
     * // Get one TravelBuddyRequest
     * const travelBuddyRequest = await prisma.travelBuddyRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TravelBuddyRequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TravelBuddyRequestFindUniqueArgs<ExtArgs>>
    ): Prisma__TravelBuddyRequestClient<$Result.GetResult<Prisma.$TravelBuddyRequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TravelBuddyRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TravelBuddyRequestFindUniqueOrThrowArgs} args - Arguments to find a TravelBuddyRequest
     * @example
     * // Get one TravelBuddyRequest
     * const travelBuddyRequest = await prisma.travelBuddyRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TravelBuddyRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelBuddyRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TravelBuddyRequestClient<$Result.GetResult<Prisma.$TravelBuddyRequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TravelBuddyRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBuddyRequestFindFirstArgs} args - Arguments to find a TravelBuddyRequest
     * @example
     * // Get one TravelBuddyRequest
     * const travelBuddyRequest = await prisma.travelBuddyRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TravelBuddyRequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelBuddyRequestFindFirstArgs<ExtArgs>>
    ): Prisma__TravelBuddyRequestClient<$Result.GetResult<Prisma.$TravelBuddyRequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TravelBuddyRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBuddyRequestFindFirstOrThrowArgs} args - Arguments to find a TravelBuddyRequest
     * @example
     * // Get one TravelBuddyRequest
     * const travelBuddyRequest = await prisma.travelBuddyRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TravelBuddyRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelBuddyRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TravelBuddyRequestClient<$Result.GetResult<Prisma.$TravelBuddyRequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TravelBuddyRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBuddyRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelBuddyRequests
     * const travelBuddyRequests = await prisma.travelBuddyRequest.findMany()
     * 
     * // Get first 10 TravelBuddyRequests
     * const travelBuddyRequests = await prisma.travelBuddyRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelBuddyRequestWithIdOnly = await prisma.travelBuddyRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TravelBuddyRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelBuddyRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelBuddyRequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TravelBuddyRequest.
     * @param {TravelBuddyRequestCreateArgs} args - Arguments to create a TravelBuddyRequest.
     * @example
     * // Create one TravelBuddyRequest
     * const TravelBuddyRequest = await prisma.travelBuddyRequest.create({
     *   data: {
     *     // ... data to create a TravelBuddyRequest
     *   }
     * })
     * 
    **/
    create<T extends TravelBuddyRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TravelBuddyRequestCreateArgs<ExtArgs>>
    ): Prisma__TravelBuddyRequestClient<$Result.GetResult<Prisma.$TravelBuddyRequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TravelBuddyRequests.
     *     @param {TravelBuddyRequestCreateManyArgs} args - Arguments to create many TravelBuddyRequests.
     *     @example
     *     // Create many TravelBuddyRequests
     *     const travelBuddyRequest = await prisma.travelBuddyRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TravelBuddyRequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelBuddyRequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TravelBuddyRequest.
     * @param {TravelBuddyRequestDeleteArgs} args - Arguments to delete one TravelBuddyRequest.
     * @example
     * // Delete one TravelBuddyRequest
     * const TravelBuddyRequest = await prisma.travelBuddyRequest.delete({
     *   where: {
     *     // ... filter to delete one TravelBuddyRequest
     *   }
     * })
     * 
    **/
    delete<T extends TravelBuddyRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TravelBuddyRequestDeleteArgs<ExtArgs>>
    ): Prisma__TravelBuddyRequestClient<$Result.GetResult<Prisma.$TravelBuddyRequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TravelBuddyRequest.
     * @param {TravelBuddyRequestUpdateArgs} args - Arguments to update one TravelBuddyRequest.
     * @example
     * // Update one TravelBuddyRequest
     * const travelBuddyRequest = await prisma.travelBuddyRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TravelBuddyRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TravelBuddyRequestUpdateArgs<ExtArgs>>
    ): Prisma__TravelBuddyRequestClient<$Result.GetResult<Prisma.$TravelBuddyRequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TravelBuddyRequests.
     * @param {TravelBuddyRequestDeleteManyArgs} args - Arguments to filter TravelBuddyRequests to delete.
     * @example
     * // Delete a few TravelBuddyRequests
     * const { count } = await prisma.travelBuddyRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TravelBuddyRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelBuddyRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelBuddyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBuddyRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelBuddyRequests
     * const travelBuddyRequest = await prisma.travelBuddyRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TravelBuddyRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TravelBuddyRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TravelBuddyRequest.
     * @param {TravelBuddyRequestUpsertArgs} args - Arguments to update or create a TravelBuddyRequest.
     * @example
     * // Update or create a TravelBuddyRequest
     * const travelBuddyRequest = await prisma.travelBuddyRequest.upsert({
     *   create: {
     *     // ... data to create a TravelBuddyRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelBuddyRequest we want to update
     *   }
     * })
    **/
    upsert<T extends TravelBuddyRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TravelBuddyRequestUpsertArgs<ExtArgs>>
    ): Prisma__TravelBuddyRequestClient<$Result.GetResult<Prisma.$TravelBuddyRequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TravelBuddyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBuddyRequestCountArgs} args - Arguments to filter TravelBuddyRequests to count.
     * @example
     * // Count the number of TravelBuddyRequests
     * const count = await prisma.travelBuddyRequest.count({
     *   where: {
     *     // ... the filter for the TravelBuddyRequests we want to count
     *   }
     * })
    **/
    count<T extends TravelBuddyRequestCountArgs>(
      args?: Subset<T, TravelBuddyRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelBuddyRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelBuddyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBuddyRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TravelBuddyRequestAggregateArgs>(args: Subset<T, TravelBuddyRequestAggregateArgs>): Prisma.PrismaPromise<GetTravelBuddyRequestAggregateType<T>>

    /**
     * Group by TravelBuddyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelBuddyRequestGroupByArgs} args - Group by arguments.
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
      T extends TravelBuddyRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelBuddyRequestGroupByArgs['orderBy'] }
        : { orderBy?: TravelBuddyRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TravelBuddyRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelBuddyRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelBuddyRequest model
   */
  readonly fields: TravelBuddyRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelBuddyRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelBuddyRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TravelBuddyRequest model
   */ 
  interface TravelBuddyRequestFieldRefs {
    readonly id: FieldRef<"TravelBuddyRequest", 'String'>
    readonly userId: FieldRef<"TravelBuddyRequest", 'String'>
    readonly tripId: FieldRef<"TravelBuddyRequest", 'String'>
    readonly status: FieldRef<"TravelBuddyRequest", 'TravelStatus'>
    readonly createdAt: FieldRef<"TravelBuddyRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"TravelBuddyRequest", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TravelBuddyRequest findUnique
   */
  export type TravelBuddyRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBuddyRequest
     */
    select?: TravelBuddyRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelBuddyRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelBuddyRequest to fetch.
     */
    where: TravelBuddyRequestWhereUniqueInput
  }


  /**
   * TravelBuddyRequest findUniqueOrThrow
   */
  export type TravelBuddyRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBuddyRequest
     */
    select?: TravelBuddyRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelBuddyRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelBuddyRequest to fetch.
     */
    where: TravelBuddyRequestWhereUniqueInput
  }


  /**
   * TravelBuddyRequest findFirst
   */
  export type TravelBuddyRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBuddyRequest
     */
    select?: TravelBuddyRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelBuddyRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelBuddyRequest to fetch.
     */
    where?: TravelBuddyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelBuddyRequests to fetch.
     */
    orderBy?: TravelBuddyRequestOrderByWithRelationInput | TravelBuddyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelBuddyRequests.
     */
    cursor?: TravelBuddyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelBuddyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelBuddyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelBuddyRequests.
     */
    distinct?: TravelBuddyRequestScalarFieldEnum | TravelBuddyRequestScalarFieldEnum[]
  }


  /**
   * TravelBuddyRequest findFirstOrThrow
   */
  export type TravelBuddyRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBuddyRequest
     */
    select?: TravelBuddyRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelBuddyRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelBuddyRequest to fetch.
     */
    where?: TravelBuddyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelBuddyRequests to fetch.
     */
    orderBy?: TravelBuddyRequestOrderByWithRelationInput | TravelBuddyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelBuddyRequests.
     */
    cursor?: TravelBuddyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelBuddyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelBuddyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelBuddyRequests.
     */
    distinct?: TravelBuddyRequestScalarFieldEnum | TravelBuddyRequestScalarFieldEnum[]
  }


  /**
   * TravelBuddyRequest findMany
   */
  export type TravelBuddyRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBuddyRequest
     */
    select?: TravelBuddyRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelBuddyRequestInclude<ExtArgs> | null
    /**
     * Filter, which TravelBuddyRequests to fetch.
     */
    where?: TravelBuddyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelBuddyRequests to fetch.
     */
    orderBy?: TravelBuddyRequestOrderByWithRelationInput | TravelBuddyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelBuddyRequests.
     */
    cursor?: TravelBuddyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelBuddyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelBuddyRequests.
     */
    skip?: number
    distinct?: TravelBuddyRequestScalarFieldEnum | TravelBuddyRequestScalarFieldEnum[]
  }


  /**
   * TravelBuddyRequest create
   */
  export type TravelBuddyRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBuddyRequest
     */
    select?: TravelBuddyRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelBuddyRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelBuddyRequest.
     */
    data: XOR<TravelBuddyRequestCreateInput, TravelBuddyRequestUncheckedCreateInput>
  }


  /**
   * TravelBuddyRequest createMany
   */
  export type TravelBuddyRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelBuddyRequests.
     */
    data: TravelBuddyRequestCreateManyInput | TravelBuddyRequestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TravelBuddyRequest update
   */
  export type TravelBuddyRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBuddyRequest
     */
    select?: TravelBuddyRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelBuddyRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelBuddyRequest.
     */
    data: XOR<TravelBuddyRequestUpdateInput, TravelBuddyRequestUncheckedUpdateInput>
    /**
     * Choose, which TravelBuddyRequest to update.
     */
    where: TravelBuddyRequestWhereUniqueInput
  }


  /**
   * TravelBuddyRequest updateMany
   */
  export type TravelBuddyRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelBuddyRequests.
     */
    data: XOR<TravelBuddyRequestUpdateManyMutationInput, TravelBuddyRequestUncheckedUpdateManyInput>
    /**
     * Filter which TravelBuddyRequests to update
     */
    where?: TravelBuddyRequestWhereInput
  }


  /**
   * TravelBuddyRequest upsert
   */
  export type TravelBuddyRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBuddyRequest
     */
    select?: TravelBuddyRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelBuddyRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelBuddyRequest to update in case it exists.
     */
    where: TravelBuddyRequestWhereUniqueInput
    /**
     * In case the TravelBuddyRequest found by the `where` argument doesn't exist, create a new TravelBuddyRequest with this data.
     */
    create: XOR<TravelBuddyRequestCreateInput, TravelBuddyRequestUncheckedCreateInput>
    /**
     * In case the TravelBuddyRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelBuddyRequestUpdateInput, TravelBuddyRequestUncheckedUpdateInput>
  }


  /**
   * TravelBuddyRequest delete
   */
  export type TravelBuddyRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBuddyRequest
     */
    select?: TravelBuddyRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelBuddyRequestInclude<ExtArgs> | null
    /**
     * Filter which TravelBuddyRequest to delete.
     */
    where: TravelBuddyRequestWhereUniqueInput
  }


  /**
   * TravelBuddyRequest deleteMany
   */
  export type TravelBuddyRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelBuddyRequests to delete
     */
    where?: TravelBuddyRequestWhereInput
  }


  /**
   * TravelBuddyRequest without action
   */
  export type TravelBuddyRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelBuddyRequest
     */
    select?: TravelBuddyRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelBuddyRequestInclude<ExtArgs> | null
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
    createdAt: 'createdAt',
    isActive: 'isActive',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    destination: 'destination',
    title: 'title',
    image: 'image',
    startDate: 'startDate',
    description: 'description',
    tripType: 'tripType',
    endDate: 'endDate',
    activities: 'activities',
    budget: 'budget',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const TravelBuddyRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tripId: 'tripId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TravelBuddyRequestScalarFieldEnum = (typeof TravelBuddyRequestScalarFieldEnum)[keyof typeof TravelBuddyRequestScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserActive'
   */
  export type EnumUserActiveFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserActive'>
    


  /**
   * Reference to a field of type 'UserActive[]'
   */
  export type ListEnumUserActiveFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserActive[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TravelStatus'
   */
  export type EnumTravelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TravelStatus'>
    


  /**
   * Reference to a field of type 'TravelStatus[]'
   */
  export type ListEnumTravelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TravelStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActive?: EnumUserActiveFilter<"User"> | $Enums.UserActive
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Trip?: TripListRelationFilter
    travelBuddyRequest?: TravelBuddyRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    Trip?: TripOrderByRelationAggregateInput
    travelBuddyRequest?: TravelBuddyRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActive?: EnumUserActiveFilter<"User"> | $Enums.UserActive
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Trip?: TripListRelationFilter
    travelBuddyRequest?: TravelBuddyRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isActive?: EnumUserActiveWithAggregatesFilter<"User"> | $Enums.UserActive
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    image?: StringFilter<"Trip"> | string
    startDate?: StringFilter<"Trip"> | string
    description?: StringFilter<"Trip"> | string
    tripType?: StringFilter<"Trip"> | string
    endDate?: StringFilter<"Trip"> | string
    activities?: StringNullableListFilter<"Trip">
    budget?: IntFilter<"Trip"> | number
    userId?: StringFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    travelBuddyRequest?: TravelBuddyRequestListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    destination?: SortOrder
    title?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    description?: SortOrder
    tripType?: SortOrder
    endDate?: SortOrder
    activities?: SortOrder
    budget?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    travelBuddyRequest?: TravelBuddyRequestOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    destination?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    image?: StringFilter<"Trip"> | string
    startDate?: StringFilter<"Trip"> | string
    description?: StringFilter<"Trip"> | string
    tripType?: StringFilter<"Trip"> | string
    endDate?: StringFilter<"Trip"> | string
    activities?: StringNullableListFilter<"Trip">
    budget?: IntFilter<"Trip"> | number
    userId?: StringFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    travelBuddyRequest?: TravelBuddyRequestListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    destination?: SortOrder
    title?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    description?: SortOrder
    tripType?: SortOrder
    endDate?: SortOrder
    activities?: SortOrder
    budget?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    destination?: StringWithAggregatesFilter<"Trip"> | string
    title?: StringWithAggregatesFilter<"Trip"> | string
    image?: StringWithAggregatesFilter<"Trip"> | string
    startDate?: StringWithAggregatesFilter<"Trip"> | string
    description?: StringWithAggregatesFilter<"Trip"> | string
    tripType?: StringWithAggregatesFilter<"Trip"> | string
    endDate?: StringWithAggregatesFilter<"Trip"> | string
    activities?: StringNullableListFilter<"Trip">
    budget?: IntWithAggregatesFilter<"Trip"> | number
    userId?: StringWithAggregatesFilter<"Trip"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type TravelBuddyRequestWhereInput = {
    AND?: TravelBuddyRequestWhereInput | TravelBuddyRequestWhereInput[]
    OR?: TravelBuddyRequestWhereInput[]
    NOT?: TravelBuddyRequestWhereInput | TravelBuddyRequestWhereInput[]
    id?: StringFilter<"TravelBuddyRequest"> | string
    userId?: StringFilter<"TravelBuddyRequest"> | string
    tripId?: StringFilter<"TravelBuddyRequest"> | string
    status?: EnumTravelStatusFilter<"TravelBuddyRequest"> | $Enums.TravelStatus
    createdAt?: DateTimeFilter<"TravelBuddyRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TravelBuddyRequest"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    trip?: XOR<TripRelationFilter, TripWhereInput>
  }

  export type TravelBuddyRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type TravelBuddyRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TravelBuddyRequestWhereInput | TravelBuddyRequestWhereInput[]
    OR?: TravelBuddyRequestWhereInput[]
    NOT?: TravelBuddyRequestWhereInput | TravelBuddyRequestWhereInput[]
    userId?: StringFilter<"TravelBuddyRequest"> | string
    tripId?: StringFilter<"TravelBuddyRequest"> | string
    status?: EnumTravelStatusFilter<"TravelBuddyRequest"> | $Enums.TravelStatus
    createdAt?: DateTimeFilter<"TravelBuddyRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TravelBuddyRequest"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    trip?: XOR<TripRelationFilter, TripWhereInput>
  }, "id">

  export type TravelBuddyRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TravelBuddyRequestCountOrderByAggregateInput
    _max?: TravelBuddyRequestMaxOrderByAggregateInput
    _min?: TravelBuddyRequestMinOrderByAggregateInput
  }

  export type TravelBuddyRequestScalarWhereWithAggregatesInput = {
    AND?: TravelBuddyRequestScalarWhereWithAggregatesInput | TravelBuddyRequestScalarWhereWithAggregatesInput[]
    OR?: TravelBuddyRequestScalarWhereWithAggregatesInput[]
    NOT?: TravelBuddyRequestScalarWhereWithAggregatesInput | TravelBuddyRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TravelBuddyRequest"> | string
    userId?: StringWithAggregatesFilter<"TravelBuddyRequest"> | string
    tripId?: StringWithAggregatesFilter<"TravelBuddyRequest"> | string
    status?: EnumTravelStatusWithAggregatesFilter<"TravelBuddyRequest"> | $Enums.TravelStatus
    createdAt?: DateTimeWithAggregatesFilter<"TravelBuddyRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TravelBuddyRequest"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    isActive?: $Enums.UserActive
    updatedAt?: Date | string
    Trip?: TripCreateNestedManyWithoutUserInput
    travelBuddyRequest?: TravelBuddyRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    isActive?: $Enums.UserActive
    updatedAt?: Date | string
    Trip?: TripUncheckedCreateNestedManyWithoutUserInput
    travelBuddyRequest?: TravelBuddyRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: EnumUserActiveFieldUpdateOperationsInput | $Enums.UserActive
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Trip?: TripUpdateManyWithoutUserNestedInput
    travelBuddyRequest?: TravelBuddyRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: EnumUserActiveFieldUpdateOperationsInput | $Enums.UserActive
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Trip?: TripUncheckedUpdateManyWithoutUserNestedInput
    travelBuddyRequest?: TravelBuddyRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    isActive?: $Enums.UserActive
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: EnumUserActiveFieldUpdateOperationsInput | $Enums.UserActive
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: EnumUserActiveFieldUpdateOperationsInput | $Enums.UserActive
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    id?: string
    destination: string
    title: string
    image: string
    startDate: string
    description: string
    tripType: string
    endDate: string
    activities?: TripCreateactivitiesInput | string[]
    budget: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripInput
    travelBuddyRequest?: TravelBuddyRequestCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    destination: string
    title: string
    image: string
    startDate: string
    description: string
    tripType: string
    endDate: string
    activities?: TripCreateactivitiesInput | string[]
    budget: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    travelBuddyRequest?: TravelBuddyRequestUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tripType?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    activities?: TripUpdateactivitiesInput | string[]
    budget?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripNestedInput
    travelBuddyRequest?: TravelBuddyRequestUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tripType?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    activities?: TripUpdateactivitiesInput | string[]
    budget?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelBuddyRequest?: TravelBuddyRequestUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    destination: string
    title: string
    image: string
    startDate: string
    description: string
    tripType: string
    endDate: string
    activities?: TripCreateactivitiesInput | string[]
    budget: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tripType?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    activities?: TripUpdateactivitiesInput | string[]
    budget?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tripType?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    activities?: TripUpdateactivitiesInput | string[]
    budget?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelBuddyRequestCreateInput = {
    id?: string
    status?: $Enums.TravelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTravelBuddyRequestInput
    trip: TripCreateNestedOneWithoutTravelBuddyRequestInput
  }

  export type TravelBuddyRequestUncheckedCreateInput = {
    id?: string
    userId: string
    tripId: string
    status?: $Enums.TravelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelBuddyRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTravelStatusFieldUpdateOperationsInput | $Enums.TravelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTravelBuddyRequestNestedInput
    trip?: TripUpdateOneRequiredWithoutTravelBuddyRequestNestedInput
  }

  export type TravelBuddyRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    status?: EnumTravelStatusFieldUpdateOperationsInput | $Enums.TravelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelBuddyRequestCreateManyInput = {
    id?: string
    userId: string
    tripId: string
    status?: $Enums.TravelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelBuddyRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTravelStatusFieldUpdateOperationsInput | $Enums.TravelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelBuddyRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    status?: EnumTravelStatusFieldUpdateOperationsInput | $Enums.TravelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserActiveFilter<$PrismaModel = never> = {
    equals?: $Enums.UserActive | EnumUserActiveFieldRefInput<$PrismaModel>
    in?: $Enums.UserActive[] | ListEnumUserActiveFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserActive[] | ListEnumUserActiveFieldRefInput<$PrismaModel>
    not?: NestedEnumUserActiveFilter<$PrismaModel> | $Enums.UserActive
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type TravelBuddyRequestListRelationFilter = {
    every?: TravelBuddyRequestWhereInput
    some?: TravelBuddyRequestWhereInput
    none?: TravelBuddyRequestWhereInput
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelBuddyRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserActiveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserActive | EnumUserActiveFieldRefInput<$PrismaModel>
    in?: $Enums.UserActive[] | ListEnumUserActiveFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserActive[] | ListEnumUserActiveFieldRefInput<$PrismaModel>
    not?: NestedEnumUserActiveWithAggregatesFilter<$PrismaModel> | $Enums.UserActive
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserActiveFilter<$PrismaModel>
    _max?: NestedEnumUserActiveFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    destination?: SortOrder
    title?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    description?: SortOrder
    tripType?: SortOrder
    endDate?: SortOrder
    activities?: SortOrder
    budget?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    destination?: SortOrder
    title?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    description?: SortOrder
    tripType?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    destination?: SortOrder
    title?: SortOrder
    image?: SortOrder
    startDate?: SortOrder
    description?: SortOrder
    tripType?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    budget?: SortOrder
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

  export type EnumTravelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelStatus | EnumTravelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TravelStatus[] | ListEnumTravelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TravelStatus[] | ListEnumTravelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTravelStatusFilter<$PrismaModel> | $Enums.TravelStatus
  }

  export type TripRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type TravelBuddyRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelBuddyRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelBuddyRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTravelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelStatus | EnumTravelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TravelStatus[] | ListEnumTravelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TravelStatus[] | ListEnumTravelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTravelStatusWithAggregatesFilter<$PrismaModel> | $Enums.TravelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTravelStatusFilter<$PrismaModel>
    _max?: NestedEnumTravelStatusFilter<$PrismaModel>
  }

  export type TripCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TravelBuddyRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelBuddyRequestCreateWithoutUserInput, TravelBuddyRequestUncheckedCreateWithoutUserInput> | TravelBuddyRequestCreateWithoutUserInput[] | TravelBuddyRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelBuddyRequestCreateOrConnectWithoutUserInput | TravelBuddyRequestCreateOrConnectWithoutUserInput[]
    createMany?: TravelBuddyRequestCreateManyUserInputEnvelope
    connect?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TravelBuddyRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelBuddyRequestCreateWithoutUserInput, TravelBuddyRequestUncheckedCreateWithoutUserInput> | TravelBuddyRequestCreateWithoutUserInput[] | TravelBuddyRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelBuddyRequestCreateOrConnectWithoutUserInput | TravelBuddyRequestCreateOrConnectWithoutUserInput[]
    createMany?: TravelBuddyRequestCreateManyUserInputEnvelope
    connect?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserActiveFieldUpdateOperationsInput = {
    set?: $Enums.UserActive
  }

  export type TripUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TravelBuddyRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelBuddyRequestCreateWithoutUserInput, TravelBuddyRequestUncheckedCreateWithoutUserInput> | TravelBuddyRequestCreateWithoutUserInput[] | TravelBuddyRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelBuddyRequestCreateOrConnectWithoutUserInput | TravelBuddyRequestCreateOrConnectWithoutUserInput[]
    upsert?: TravelBuddyRequestUpsertWithWhereUniqueWithoutUserInput | TravelBuddyRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelBuddyRequestCreateManyUserInputEnvelope
    set?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    disconnect?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    delete?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    connect?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    update?: TravelBuddyRequestUpdateWithWhereUniqueWithoutUserInput | TravelBuddyRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelBuddyRequestUpdateManyWithWhereWithoutUserInput | TravelBuddyRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelBuddyRequestScalarWhereInput | TravelBuddyRequestScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TravelBuddyRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelBuddyRequestCreateWithoutUserInput, TravelBuddyRequestUncheckedCreateWithoutUserInput> | TravelBuddyRequestCreateWithoutUserInput[] | TravelBuddyRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelBuddyRequestCreateOrConnectWithoutUserInput | TravelBuddyRequestCreateOrConnectWithoutUserInput[]
    upsert?: TravelBuddyRequestUpsertWithWhereUniqueWithoutUserInput | TravelBuddyRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelBuddyRequestCreateManyUserInputEnvelope
    set?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    disconnect?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    delete?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    connect?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    update?: TravelBuddyRequestUpdateWithWhereUniqueWithoutUserInput | TravelBuddyRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelBuddyRequestUpdateManyWithWhereWithoutUserInput | TravelBuddyRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelBuddyRequestScalarWhereInput | TravelBuddyRequestScalarWhereInput[]
  }

  export type TripCreateactivitiesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutTripInput = {
    create?: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripInput
    connect?: UserWhereUniqueInput
  }

  export type TravelBuddyRequestCreateNestedManyWithoutTripInput = {
    create?: XOR<TravelBuddyRequestCreateWithoutTripInput, TravelBuddyRequestUncheckedCreateWithoutTripInput> | TravelBuddyRequestCreateWithoutTripInput[] | TravelBuddyRequestUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TravelBuddyRequestCreateOrConnectWithoutTripInput | TravelBuddyRequestCreateOrConnectWithoutTripInput[]
    createMany?: TravelBuddyRequestCreateManyTripInputEnvelope
    connect?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
  }

  export type TravelBuddyRequestUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TravelBuddyRequestCreateWithoutTripInput, TravelBuddyRequestUncheckedCreateWithoutTripInput> | TravelBuddyRequestCreateWithoutTripInput[] | TravelBuddyRequestUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TravelBuddyRequestCreateOrConnectWithoutTripInput | TravelBuddyRequestCreateOrConnectWithoutTripInput[]
    createMany?: TravelBuddyRequestCreateManyTripInputEnvelope
    connect?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
  }

  export type TripUpdateactivitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTripNestedInput = {
    create?: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripInput
    upsert?: UserUpsertWithoutTripInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripInput, UserUpdateWithoutTripInput>, UserUncheckedUpdateWithoutTripInput>
  }

  export type TravelBuddyRequestUpdateManyWithoutTripNestedInput = {
    create?: XOR<TravelBuddyRequestCreateWithoutTripInput, TravelBuddyRequestUncheckedCreateWithoutTripInput> | TravelBuddyRequestCreateWithoutTripInput[] | TravelBuddyRequestUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TravelBuddyRequestCreateOrConnectWithoutTripInput | TravelBuddyRequestCreateOrConnectWithoutTripInput[]
    upsert?: TravelBuddyRequestUpsertWithWhereUniqueWithoutTripInput | TravelBuddyRequestUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TravelBuddyRequestCreateManyTripInputEnvelope
    set?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    disconnect?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    delete?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    connect?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    update?: TravelBuddyRequestUpdateWithWhereUniqueWithoutTripInput | TravelBuddyRequestUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TravelBuddyRequestUpdateManyWithWhereWithoutTripInput | TravelBuddyRequestUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TravelBuddyRequestScalarWhereInput | TravelBuddyRequestScalarWhereInput[]
  }

  export type TravelBuddyRequestUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TravelBuddyRequestCreateWithoutTripInput, TravelBuddyRequestUncheckedCreateWithoutTripInput> | TravelBuddyRequestCreateWithoutTripInput[] | TravelBuddyRequestUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TravelBuddyRequestCreateOrConnectWithoutTripInput | TravelBuddyRequestCreateOrConnectWithoutTripInput[]
    upsert?: TravelBuddyRequestUpsertWithWhereUniqueWithoutTripInput | TravelBuddyRequestUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TravelBuddyRequestCreateManyTripInputEnvelope
    set?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    disconnect?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    delete?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    connect?: TravelBuddyRequestWhereUniqueInput | TravelBuddyRequestWhereUniqueInput[]
    update?: TravelBuddyRequestUpdateWithWhereUniqueWithoutTripInput | TravelBuddyRequestUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TravelBuddyRequestUpdateManyWithWhereWithoutTripInput | TravelBuddyRequestUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TravelBuddyRequestScalarWhereInput | TravelBuddyRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTravelBuddyRequestInput = {
    create?: XOR<UserCreateWithoutTravelBuddyRequestInput, UserUncheckedCreateWithoutTravelBuddyRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelBuddyRequestInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutTravelBuddyRequestInput = {
    create?: XOR<TripCreateWithoutTravelBuddyRequestInput, TripUncheckedCreateWithoutTravelBuddyRequestInput>
    connectOrCreate?: TripCreateOrConnectWithoutTravelBuddyRequestInput
    connect?: TripWhereUniqueInput
  }

  export type EnumTravelStatusFieldUpdateOperationsInput = {
    set?: $Enums.TravelStatus
  }

  export type UserUpdateOneRequiredWithoutTravelBuddyRequestNestedInput = {
    create?: XOR<UserCreateWithoutTravelBuddyRequestInput, UserUncheckedCreateWithoutTravelBuddyRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelBuddyRequestInput
    upsert?: UserUpsertWithoutTravelBuddyRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTravelBuddyRequestInput, UserUpdateWithoutTravelBuddyRequestInput>, UserUncheckedUpdateWithoutTravelBuddyRequestInput>
  }

  export type TripUpdateOneRequiredWithoutTravelBuddyRequestNestedInput = {
    create?: XOR<TripCreateWithoutTravelBuddyRequestInput, TripUncheckedCreateWithoutTravelBuddyRequestInput>
    connectOrCreate?: TripCreateOrConnectWithoutTravelBuddyRequestInput
    upsert?: TripUpsertWithoutTravelBuddyRequestInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutTravelBuddyRequestInput, TripUpdateWithoutTravelBuddyRequestInput>, TripUncheckedUpdateWithoutTravelBuddyRequestInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserActiveFilter<$PrismaModel = never> = {
    equals?: $Enums.UserActive | EnumUserActiveFieldRefInput<$PrismaModel>
    in?: $Enums.UserActive[] | ListEnumUserActiveFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserActive[] | ListEnumUserActiveFieldRefInput<$PrismaModel>
    not?: NestedEnumUserActiveFilter<$PrismaModel> | $Enums.UserActive
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserActiveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserActive | EnumUserActiveFieldRefInput<$PrismaModel>
    in?: $Enums.UserActive[] | ListEnumUserActiveFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserActive[] | ListEnumUserActiveFieldRefInput<$PrismaModel>
    not?: NestedEnumUserActiveWithAggregatesFilter<$PrismaModel> | $Enums.UserActive
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserActiveFilter<$PrismaModel>
    _max?: NestedEnumUserActiveFilter<$PrismaModel>
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

  export type NestedEnumTravelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelStatus | EnumTravelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TravelStatus[] | ListEnumTravelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TravelStatus[] | ListEnumTravelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTravelStatusFilter<$PrismaModel> | $Enums.TravelStatus
  }

  export type NestedEnumTravelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TravelStatus | EnumTravelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TravelStatus[] | ListEnumTravelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TravelStatus[] | ListEnumTravelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTravelStatusWithAggregatesFilter<$PrismaModel> | $Enums.TravelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTravelStatusFilter<$PrismaModel>
    _max?: NestedEnumTravelStatusFilter<$PrismaModel>
  }

  export type TripCreateWithoutUserInput = {
    id?: string
    destination: string
    title: string
    image: string
    startDate: string
    description: string
    tripType: string
    endDate: string
    activities?: TripCreateactivitiesInput | string[]
    budget: number
    createdAt?: Date | string
    updatedAt?: Date | string
    travelBuddyRequest?: TravelBuddyRequestCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutUserInput = {
    id?: string
    destination: string
    title: string
    image: string
    startDate: string
    description: string
    tripType: string
    endDate: string
    activities?: TripCreateactivitiesInput | string[]
    budget: number
    createdAt?: Date | string
    updatedAt?: Date | string
    travelBuddyRequest?: TravelBuddyRequestUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutUserInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripCreateManyUserInputEnvelope = {
    data: TripCreateManyUserInput | TripCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TravelBuddyRequestCreateWithoutUserInput = {
    id?: string
    status?: $Enums.TravelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutTravelBuddyRequestInput
  }

  export type TravelBuddyRequestUncheckedCreateWithoutUserInput = {
    id?: string
    tripId: string
    status?: $Enums.TravelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelBuddyRequestCreateOrConnectWithoutUserInput = {
    where: TravelBuddyRequestWhereUniqueInput
    create: XOR<TravelBuddyRequestCreateWithoutUserInput, TravelBuddyRequestUncheckedCreateWithoutUserInput>
  }

  export type TravelBuddyRequestCreateManyUserInputEnvelope = {
    data: TravelBuddyRequestCreateManyUserInput | TravelBuddyRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripUpdateWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
  }

  export type TripUpdateManyWithWhereWithoutUserInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutUserInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    image?: StringFilter<"Trip"> | string
    startDate?: StringFilter<"Trip"> | string
    description?: StringFilter<"Trip"> | string
    tripType?: StringFilter<"Trip"> | string
    endDate?: StringFilter<"Trip"> | string
    activities?: StringNullableListFilter<"Trip">
    budget?: IntFilter<"Trip"> | number
    userId?: StringFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
  }

  export type TravelBuddyRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: TravelBuddyRequestWhereUniqueInput
    update: XOR<TravelBuddyRequestUpdateWithoutUserInput, TravelBuddyRequestUncheckedUpdateWithoutUserInput>
    create: XOR<TravelBuddyRequestCreateWithoutUserInput, TravelBuddyRequestUncheckedCreateWithoutUserInput>
  }

  export type TravelBuddyRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: TravelBuddyRequestWhereUniqueInput
    data: XOR<TravelBuddyRequestUpdateWithoutUserInput, TravelBuddyRequestUncheckedUpdateWithoutUserInput>
  }

  export type TravelBuddyRequestUpdateManyWithWhereWithoutUserInput = {
    where: TravelBuddyRequestScalarWhereInput
    data: XOR<TravelBuddyRequestUpdateManyMutationInput, TravelBuddyRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type TravelBuddyRequestScalarWhereInput = {
    AND?: TravelBuddyRequestScalarWhereInput | TravelBuddyRequestScalarWhereInput[]
    OR?: TravelBuddyRequestScalarWhereInput[]
    NOT?: TravelBuddyRequestScalarWhereInput | TravelBuddyRequestScalarWhereInput[]
    id?: StringFilter<"TravelBuddyRequest"> | string
    userId?: StringFilter<"TravelBuddyRequest"> | string
    tripId?: StringFilter<"TravelBuddyRequest"> | string
    status?: EnumTravelStatusFilter<"TravelBuddyRequest"> | $Enums.TravelStatus
    createdAt?: DateTimeFilter<"TravelBuddyRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TravelBuddyRequest"> | Date | string
  }

  export type UserCreateWithoutTripInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    isActive?: $Enums.UserActive
    updatedAt?: Date | string
    travelBuddyRequest?: TravelBuddyRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    isActive?: $Enums.UserActive
    updatedAt?: Date | string
    travelBuddyRequest?: TravelBuddyRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput>
  }

  export type TravelBuddyRequestCreateWithoutTripInput = {
    id?: string
    status?: $Enums.TravelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTravelBuddyRequestInput
  }

  export type TravelBuddyRequestUncheckedCreateWithoutTripInput = {
    id?: string
    userId: string
    status?: $Enums.TravelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelBuddyRequestCreateOrConnectWithoutTripInput = {
    where: TravelBuddyRequestWhereUniqueInput
    create: XOR<TravelBuddyRequestCreateWithoutTripInput, TravelBuddyRequestUncheckedCreateWithoutTripInput>
  }

  export type TravelBuddyRequestCreateManyTripInputEnvelope = {
    data: TravelBuddyRequestCreateManyTripInput | TravelBuddyRequestCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTripInput = {
    update: XOR<UserUpdateWithoutTripInput, UserUncheckedUpdateWithoutTripInput>
    create: XOR<UserCreateWithoutTripInput, UserUncheckedCreateWithoutTripInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripInput, UserUncheckedUpdateWithoutTripInput>
  }

  export type UserUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: EnumUserActiveFieldUpdateOperationsInput | $Enums.UserActive
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelBuddyRequest?: TravelBuddyRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: EnumUserActiveFieldUpdateOperationsInput | $Enums.UserActive
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelBuddyRequest?: TravelBuddyRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TravelBuddyRequestUpsertWithWhereUniqueWithoutTripInput = {
    where: TravelBuddyRequestWhereUniqueInput
    update: XOR<TravelBuddyRequestUpdateWithoutTripInput, TravelBuddyRequestUncheckedUpdateWithoutTripInput>
    create: XOR<TravelBuddyRequestCreateWithoutTripInput, TravelBuddyRequestUncheckedCreateWithoutTripInput>
  }

  export type TravelBuddyRequestUpdateWithWhereUniqueWithoutTripInput = {
    where: TravelBuddyRequestWhereUniqueInput
    data: XOR<TravelBuddyRequestUpdateWithoutTripInput, TravelBuddyRequestUncheckedUpdateWithoutTripInput>
  }

  export type TravelBuddyRequestUpdateManyWithWhereWithoutTripInput = {
    where: TravelBuddyRequestScalarWhereInput
    data: XOR<TravelBuddyRequestUpdateManyMutationInput, TravelBuddyRequestUncheckedUpdateManyWithoutTripInput>
  }

  export type UserCreateWithoutTravelBuddyRequestInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    isActive?: $Enums.UserActive
    updatedAt?: Date | string
    Trip?: TripCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTravelBuddyRequestInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    isActive?: $Enums.UserActive
    updatedAt?: Date | string
    Trip?: TripUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTravelBuddyRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTravelBuddyRequestInput, UserUncheckedCreateWithoutTravelBuddyRequestInput>
  }

  export type TripCreateWithoutTravelBuddyRequestInput = {
    id?: string
    destination: string
    title: string
    image: string
    startDate: string
    description: string
    tripType: string
    endDate: string
    activities?: TripCreateactivitiesInput | string[]
    budget: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutTravelBuddyRequestInput = {
    id?: string
    destination: string
    title: string
    image: string
    startDate: string
    description: string
    tripType: string
    endDate: string
    activities?: TripCreateactivitiesInput | string[]
    budget: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripCreateOrConnectWithoutTravelBuddyRequestInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutTravelBuddyRequestInput, TripUncheckedCreateWithoutTravelBuddyRequestInput>
  }

  export type UserUpsertWithoutTravelBuddyRequestInput = {
    update: XOR<UserUpdateWithoutTravelBuddyRequestInput, UserUncheckedUpdateWithoutTravelBuddyRequestInput>
    create: XOR<UserCreateWithoutTravelBuddyRequestInput, UserUncheckedCreateWithoutTravelBuddyRequestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTravelBuddyRequestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTravelBuddyRequestInput, UserUncheckedUpdateWithoutTravelBuddyRequestInput>
  }

  export type UserUpdateWithoutTravelBuddyRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: EnumUserActiveFieldUpdateOperationsInput | $Enums.UserActive
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Trip?: TripUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTravelBuddyRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: EnumUserActiveFieldUpdateOperationsInput | $Enums.UserActive
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Trip?: TripUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripUpsertWithoutTravelBuddyRequestInput = {
    update: XOR<TripUpdateWithoutTravelBuddyRequestInput, TripUncheckedUpdateWithoutTravelBuddyRequestInput>
    create: XOR<TripCreateWithoutTravelBuddyRequestInput, TripUncheckedCreateWithoutTravelBuddyRequestInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutTravelBuddyRequestInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutTravelBuddyRequestInput, TripUncheckedUpdateWithoutTravelBuddyRequestInput>
  }

  export type TripUpdateWithoutTravelBuddyRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tripType?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    activities?: TripUpdateactivitiesInput | string[]
    budget?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutTravelBuddyRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tripType?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    activities?: TripUpdateactivitiesInput | string[]
    budget?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateManyUserInput = {
    id?: string
    destination: string
    title: string
    image: string
    startDate: string
    description: string
    tripType: string
    endDate: string
    activities?: TripCreateactivitiesInput | string[]
    budget: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelBuddyRequestCreateManyUserInput = {
    id?: string
    tripId: string
    status?: $Enums.TravelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tripType?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    activities?: TripUpdateactivitiesInput | string[]
    budget?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelBuddyRequest?: TravelBuddyRequestUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tripType?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    activities?: TripUpdateactivitiesInput | string[]
    budget?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelBuddyRequest?: TravelBuddyRequestUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tripType?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    activities?: TripUpdateactivitiesInput | string[]
    budget?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelBuddyRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTravelStatusFieldUpdateOperationsInput | $Enums.TravelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutTravelBuddyRequestNestedInput
  }

  export type TravelBuddyRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    status?: EnumTravelStatusFieldUpdateOperationsInput | $Enums.TravelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelBuddyRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    status?: EnumTravelStatusFieldUpdateOperationsInput | $Enums.TravelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelBuddyRequestCreateManyTripInput = {
    id?: string
    userId: string
    status?: $Enums.TravelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelBuddyRequestUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTravelStatusFieldUpdateOperationsInput | $Enums.TravelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTravelBuddyRequestNestedInput
  }

  export type TravelBuddyRequestUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTravelStatusFieldUpdateOperationsInput | $Enums.TravelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelBuddyRequestUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTravelStatusFieldUpdateOperationsInput | $Enums.TravelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripCountOutputTypeDefaultArgs instead
     */
    export type TripCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripDefaultArgs instead
     */
    export type TripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TravelBuddyRequestDefaultArgs instead
     */
    export type TravelBuddyRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TravelBuddyRequestDefaultArgs<ExtArgs>

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